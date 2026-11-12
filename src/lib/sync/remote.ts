// The server side of sync, behind a small interface so the engine can be tested with an
// in-memory fake. The real implementation talks to Supabase straight from the browser;
// row-level security (supabase/schema.sql) makes every query see only the user's own row.
import type { SupabaseClient } from "@supabase/supabase-js";

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
  /** Delete my synced document (the account stays). */
  deleteMine(): Promise<void>;
}

export class RemoteError extends Error {}

function deviceLabel(): string {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  return /iPhone|iPad/.test(ua) ? "ios" : /Android/.test(ua) ? "android" : "desktop";
}

export function supabaseRemote(client: SupabaseClient): RemoteAdapter {
  return {
    async getRev() {
      const { data, error } = await client.from("user_state").select("rev").maybeSingle();
      if (error) throw new RemoteError(error.message);
      return data ? Number(data.rev) : null;
    },
    async pull() {
      const { data, error } = await client.from("user_state").select("db, rev").maybeSingle();
      if (error) throw new RemoteError(error.message);
      return data ? { db: data.db, rev: Number(data.rev) } : null;
    },
    async push(expectedRev, doc) {
      const { data, error } = await client.rpc("push_state", { expected_rev: expectedRev, doc, p_device: deviceLabel() });
      if (error) throw new RemoteError(error.message);
      return Number(data);
    },
    async deleteMine() {
      const { error } = await client.rpc("delete_my_state");
      if (error) throw new RemoteError(error.message);
    },
  };
}

/** In-memory server for tests: one shared "row" that several fake devices can talk to. */
export function memoryRemote(init: RemoteDoc | null = null) {
  let row: RemoteDoc | null = init ? { db: structuredClone(init.db), rev: init.rev } : null;
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
      row = { db: JSON.parse(JSON.stringify(doc)), rev: current + 1 };
      return row.rev;
    },
    async deleteMine() {
      guard("deleteMine");
      row = null;
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
    /** Simulate another device writing directly. */
    write(db: unknown) {
      row = { db: JSON.parse(JSON.stringify(db)), rev: (row?.rev ?? 0) + 1 };
    },
  };
}
