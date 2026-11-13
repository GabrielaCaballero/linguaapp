// The server side of sync, behind a small interface so the engine can be tested with an
// in-memory fake. The real implementation talks to Supabase straight from the browser;
// row-level security (supabase/schema.sql) makes every query see only the user's own row.
import type { SupabaseClient } from "@supabase/supabase-js";
import type { ReviewLog } from "../model";

export interface RemoteDoc {
  db: unknown;
  rev: number;
}

export interface RemoteAdapter {
  /** Current revision of my document, or null if I have none yet. */
  getRev(): Promise<number | null>;
  pull(): Promise<RemoteDoc | null>;
  /** Write if the server is still at `expectedRev` (0 = no row yet). Returns the new rev, or -1 on conflict. */
  push(expectedRev: number, doc: unknown): Promise<number>;
  /** Add answers to the account's history (rows already there are ignored). */
  pushReviews(epoch: string, rows: ReviewLog[]): Promise<void>;
  /** Answers of this epoch with t ≥ since, oldest first. */
  pullReviews(epoch: string, since: number): Promise<ReviewLog[]>;
  countReviews(epoch: string): Promise<number>;
  /** After starting over: delete answers that belong to any other epoch. */
  forgetOtherEpochs(keep: string): Promise<void>;
}

const PAGE = 1000;

export class RemoteError extends Error {}

function deviceLabel(): string {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  return /iPhone|iPad/.test(ua) ? "ios" : /Android/.test(ua) ? "android" : "desktop";
}

export function supabaseRemote(client: SupabaseClient): RemoteAdapter {
  // Row-level security already limits every query to the caller's row; filtering by the
  // user id as well means a policy mistake can't silently return someone else's row.
  const me = async () => {
    const { data } = await client.auth.getSession();
    const id = data.session?.user.id;
    if (!id) throw new RemoteError("not signed in");
    return id;
  };
  return {
    async getRev() {
      const { data, error } = await client.from("user_state").select("rev").eq("user_id", await me()).maybeSingle();
      if (error) throw new RemoteError(error.message);
      return data ? Number(data.rev) : null;
    },
    async pull() {
      const { data, error } = await client.from("user_state").select("db, rev").eq("user_id", await me()).maybeSingle();
      if (error) throw new RemoteError(error.message);
      return data ? { db: data.db, rev: Number(data.rev) } : null;
    },
    async push(expectedRev, doc) {
      const { data, error } = await client.rpc("push_state", { expected_rev: expectedRev, doc, p_device: deviceLabel() });
      if (error) throw new RemoteError(error.message);
      return Number(data);
    },
    async pushReviews(epoch, rows) {
      if (!rows.length) return;
      const uid = await me();
      const payload = rows.map((r) => ({ user_id: uid, epoch, t: r.t, item: r.id, mode: r.mode, r }));
      const { error } = await client.from("user_reviews").upsert(payload, { onConflict: "user_id,epoch,t,item,mode", ignoreDuplicates: true });
      if (error) throw new RemoteError(error.message);
    },
    async pullReviews(epoch, since) {
      const uid = await me();
      const out: ReviewLog[] = [];
      for (let from = 0; ; from += PAGE) {
        const { data, error } = await client.from("user_reviews").select("r").eq("user_id", uid).eq("epoch", epoch).gte("t", since).order("t").order("item").order("mode").range(from, from + PAGE - 1);
        if (error) throw new RemoteError(error.message);
        for (const row of data ?? []) out.push(row.r as ReviewLog);
        if (!data || data.length < PAGE) return out;
      }
    },
    async countReviews(epoch) {
      const { count, error } = await client.from("user_reviews").select("t", { count: "exact", head: true }).eq("user_id", await me()).eq("epoch", epoch);
      if (error) throw new RemoteError(error.message);
      return count ?? 0;
    },
    async forgetOtherEpochs(keep) {
      const { error } = await client.rpc("forget_other_answers", { keep_epoch: keep });
      if (error) throw new RemoteError(error.message);
    },
  };
}

/** In-memory server for tests: one shared "row" that several fake devices can talk to. */
export function memoryRemote(init: RemoteDoc | null = null) {
  let row: RemoteDoc | null = null;
  const answers = new Map<string, { epoch: string; r: ReviewLog }>();
  const akey = (epoch: string, r: ReviewLog) => `${epoch}|${r.t}|${r.id}|${r.mode}`;
  /** A document that still carries answers (tests, old format): file them in the answers table. */
  const store = (db: unknown) => {
    const d = JSON.parse(JSON.stringify(db)) as { reviews?: ReviewLog[]; epoch?: string };
    for (const r of d.reviews ?? []) answers.set(akey(d.epoch ?? "", r), { epoch: d.epoch ?? "", r });
    if (Array.isArray(d.reviews)) d.reviews = [];
    return d;
  };
  if (init) row = { db: store(init.db), rev: init.rev };
  let offline = false;
  const calls: string[] = [];
  const guard = (name: string) => {
    calls.push(name);
    if (offline) throw new RemoteError("offline");
  };
  const remote: RemoteAdapter = {
    async getRev() {
      guard("getRev");
      return row ? row.rev : null;
    },
    async pull() {
      guard("pull");
      return row ? { db: structuredClone(row.db), rev: row.rev } : null;
    },
    async push(expectedRev, doc) {
      guard("push");
      const current = row ? row.rev : 0;
      if (current !== expectedRev) return -1;
      row = { db: store(doc), rev: current + 1 };
      return row.rev;
    },
    async pushReviews(epoch, rows) {
      guard("pushReviews");
      for (const r of rows) if (!answers.has(akey(epoch, r))) answers.set(akey(epoch, r), { epoch, r: structuredClone(r) });
    },
    async pullReviews(epoch, since) {
      guard("pullReviews");
      return [...answers.values()].filter((a) => a.epoch === epoch && a.r.t >= since).map((a) => structuredClone(a.r)).sort((x, y) => x.t - y.t);
    },
    async countReviews(epoch) {
      guard("countReviews");
      return [...answers.values()].filter((a) => a.epoch === epoch).length;
    },
    async forgetOtherEpochs(keep) {
      guard("forgetOtherEpochs");
      for (const [k, a] of answers) if (a.epoch !== keep) answers.delete(k);
    },
  };
  return {
    remote,
    calls,
    get row() {
      return row;
    },
    setOffline(v: boolean) {
      offline = v;
    },
    /** Every answer stored for this epoch (tests). */
    reviewsFor(epoch = ""): ReviewLog[] {
      return [...answers.values()].filter((a) => a.epoch === epoch).map((a) => a.r).sort((x, y) => x.t - y.t);
    },
    get answerCount() {
      return answers.size;
    },
    /** Simulate the owner deleting the row in the dashboard. */
    adminDelete() {
      row = null;
    },
    /** Simulate another device writing directly. */
    write(db: unknown) {
      row = { db: store(db), rev: (row?.rev ?? 0) + 1 };
    },
  };
}
