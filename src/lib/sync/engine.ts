// Sync engine: keeps the on-device DB and the user's server document in step.
// The device stays the source of truth (the app works fully offline); the server copy is
// what lets progress follow the user to another phone. Depends only on a StorageAdapter
// and a RemoteAdapter, so every case runs in Node tests with in-memory fakes.
import { LOCAL_HISTORY_DAYS, type DB, type ReviewLog } from "../model";
import { migrateAny, type LegacyIndex } from "../migrate";
import { KEYS, type StorageAdapter } from "../storage-adapter";
import { mergeDB, mergeReviews, samePayload, summarize, toPayload, type Summary } from "./merge";
import type { RemoteAdapter } from "./remote";

export interface SyncState {
  userId: string;
  /** Server revision this device last saw (0 = nothing on the server yet). */
  rev: number;
  /** Local changes not yet uploaded. */
  dirty: boolean;
  lastSyncAt?: number;
  /** When answers were last fetched from the account (to bring in other devices' answers). */
  pulledAt?: number;
  /**
   * The next upload replaces the server copy instead of merging with it (Reset, import,
   * "Use this device"). Comes with a new `db.epoch`, so other devices adopt it too.
   */
  replace?: boolean;
}

export type SyncStatus = "off" | "idle" | "syncing" | "offline" | "error" | "outdated";

export type FirstLogin =
  | { kind: "uploaded" | "downloaded" | "empty" | "same" }
  | { kind: "choose"; local: Summary; remote: Summary };

export type Choice = "combine" | "account" | "device";

export interface EngineDeps {
  storage: StorageAdapter;
  remote: RemoteAdapter;
  getDB(): DB;
  /** Write a DB that came from the server (must not count as a new local change). */
  applyDB(db: DB): void;
  legacy: LegacyIndex;
  now?: () => number;
  isOnline?: () => boolean;
}

export class BadRemoteError extends Error {
  constructor() {
    super("bad-remote");
  }
}

/** The server copy was written by a newer app (a format this build doesn't know). Never overwrite it. */
export class NewerFormatError extends Error {
  constructor() {
    super("newer-format");
  }
}

/** The user signed out (or deleted the account) while a sync was in flight: drop its result. */
class Abandoned extends Error {}

/** Highest document format this build understands (DB.version). */
export const KNOWN_FORMAT = 2;

export function newEpoch(now: number): string {
  return `${now.toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

const MAX_ROUNDS = 4;
const DAY_MS = 86_400_000;
const WINDOW = LOCAL_HISTORY_DAYS * DAY_MS;
const BATCH = 500;
const rkey = (r: ReviewLog) => `${r.t}|${r.id}|${r.mode}`;
const epochOf = (db: DB) => db.epoch ?? "";

export function createEngine(deps: EngineDeps) {
  const now = deps.now ?? Date.now;
  const isOnline = deps.isOnline ?? (() => (typeof navigator === "undefined" ? true : navigator.onLine !== false));

  let st: SyncState | null = readState();
  let status: SyncStatus = st ? "idle" : "off";
  type Snapshot = { status: SyncStatus; lastSyncAt?: number; dirty: boolean; signedIn: boolean };
  let version = 0;
  let running: Promise<SyncStatus> | null = null;
  let again = false;
  let pending: { userId: string; remote: DB; rev: number } | null = null;
  // Bumped by forget(); a sync that started earlier must not write anything afterwards.
  let generation = 0;
  const listeners = new Set<() => void>();
  let snapshot: Snapshot = { status, lastSyncAt: st?.lastSyncAt, dirty: !!st?.dirty, signedIn: !!st };

  function readState(): SyncState | null {
    const raw = deps.storage.get(KEYS.sync);
    if (!raw) return null;
    try {
      const s = JSON.parse(raw) as SyncState;
      return s && typeof s.userId === "string" && typeof s.rev === "number" ? s : null;
    } catch {
      return null;
    }
  }
  function save() {
    if (st) deps.storage.set(KEYS.sync, JSON.stringify(st));
    else deps.storage.remove(KEYS.sync);
    emit();
  }
  function setStatus(s: SyncStatus) {
    status = s;
    emit();
  }
  function emit() {
    const next: Snapshot = { status, lastSyncAt: st?.lastSyncAt, dirty: !!st?.dirty, signedIn: !!st };
    if (next.status !== snapshot.status || next.lastSyncAt !== snapshot.lastSyncAt || next.dirty !== snapshot.dirty || next.signedIn !== snapshot.signedIn) {
      snapshot = next;
      listeners.forEach((l) => l());
    }
  }
  function parseRemote(x: unknown): DB {
    const v = (x as { version?: unknown } | null)?.version;
    if (typeof v === "number" && v > KNOWN_FORMAT) throw new NewerFormatError();
    try {
      return migrateAny(x, deps.legacy, now());
    } catch {
      throw new BadRemoteError();
    }
  }
  /** Take the server's document but keep this device's on-device-only data. */
  function adopt(remote: DB): DB {
    const local = deps.getDB();
    const out: DB = { ...remote, events: local.events };
    if (local.legacyTies !== undefined) out.legacyTies = local.legacyTies;
    else delete out.legacyTies;
    return out;
  }

  type Still = <T>(p: Promise<T>) => Promise<T>;

  /** Upload answers the account doesn't have yet, then mark them as safely stored. */
  async function sendAnswers(still: Still) {
    const db = deps.getDB();
    const rows = db.reviews.filter((r) => !r.up);
    if (!rows.length) return;
    const epoch = epochOf(db);
    for (let i = 0; i < rows.length; i += BATCH) {
      await still(deps.remote.pushReviews(epoch, rows.slice(i, i + BATCH).map(({ up: _u, ...r }) => (void _u, r))));
    }
    const sent = new Set(rows.map(rkey));
    const cur = deps.getDB();
    if (epochOf(cur) !== epoch) return;
    deps.applyDB({ ...cur, reviews: cur.reviews.map((r) => (!r.up && sent.has(rkey(r)) ? { ...r, up: true } : r)) });
  }

  /** Bring recent answers from the account (other devices) into this phone's history. */
  async function fetchAnswers(s: SyncState, still: Still, fresh: boolean) {
    const epoch = epochOf(deps.getDB());
    const since = fresh || !s.pulledAt ? now() - WINDOW : Math.max(now() - WINDOW, s.pulledAt - 14 * DAY_MS);
    const rows = (await still(deps.remote.pullReviews(epoch, since))).map((r) => ({ ...r, up: true as const }));
    s.pulledAt = now();
    const cur = deps.getDB();
    if (!rows.length || epochOf(cur) !== epoch) return;
    const merged = mergeReviews(cur.reviews, rows);
    if (merged.length !== cur.reviews.length) deps.applyDB({ ...cur, reviews: merged });
  }

  /** Keep the phone small: drop answers (already in the account) and events older than the window. */
  function trim() {
    const db = deps.getDB();
    const cutoff = now() - WINDOW;
    const reviews = db.reviews.filter((r) => r.t >= cutoff || !r.up);
    const events = db.events.filter((e) => e.t >= cutoff);
    if (reviews.length !== db.reviews.length || events.length !== db.events.length) deps.applyDB({ ...db, reviews, events });
  }

  async function round(): Promise<SyncStatus> {
    if (!st) return "off";
    const s = st;
    const gen = generation;
    /** Await a server call, then make sure we're still the same signed-in session. */
    const still: Still = async (p) => {
      const r = await p;
      if (gen !== generation || st !== s) throw new Abandoned();
      return r;
    };
    const done = (): SyncStatus => {
      s.lastSyncAt = now();
      save();
      trim();
      return "idle";
    };
    for (let i = 0; i < MAX_ROUNDS; i++) {
      if (s.replace) {
        // Overwrite the account with this device's progress (it carries a new epoch):
        // answers first, then the state document, then clear out the old epoch's answers.
        await sendAnswers(still);
        const at = (await still(deps.remote.getRev())) ?? 0;
        const v = version;
        const newRev = await still(deps.remote.push(at, toPayload(deps.getDB())));
        if (newRev >= 0) {
          s.rev = newRev;
          s.replace = false;
          s.dirty = version !== v;
          save();
          await still(deps.remote.forgetOtherEpochs(epochOf(deps.getDB())));
          if (!s.dirty) return done();
        }
        continue;
      }
      const serverRev = await still(deps.remote.getRev());
      if (serverRev === null) {
        // No state document on the server (first upload, or deleted by the owner).
        if (s.rev !== 0) {
          s.rev = 0;
          s.dirty = true;
        }
      } else if (serverRev !== s.rev) {
        const doc = await still(deps.remote.pull());
        if (doc) {
          const remote = parseRemote(doc.db);
          const local = deps.getDB();
          if ((remote.epoch ?? "") !== (local.epoch ?? "")) {
            // Another device started over (Reset / import / "Use that device"): take its copy.
            deps.applyDB({ ...adopt(remote), reviews: [] });
            s.rev = doc.rev;
            s.dirty = false;
            await fetchAnswers(s, still, true);
          } else {
            const merged = mergeDB(local, remote);
            deps.applyDB(merged);
            s.rev = doc.rev;
            s.dirty = s.dirty || !samePayload(merged, remote);
            await fetchAnswers(s, still, false);
          }
        } else {
          s.rev = 0;
          s.dirty = true;
        }
        save();
      }
      // Answers go up before the state that refers to them.
      await sendAnswers(still);
      if (!s.dirty) return done();
      const v = version;
      const newRev = await still(deps.remote.push(s.rev, toPayload(deps.getDB())));
      if (newRev >= 0) {
        s.rev = newRev;
        s.dirty = version !== v;
        save();
        if (!s.dirty) return done();
      }
      // conflict (someone else wrote first) or new local changes: go round again
    }
    return "error";
  }

  async function run(): Promise<SyncStatus> {
    do {
      again = false;
      if (!st) return "off";
      setStatus("syncing");
      try {
        setStatus(await round());
      } catch (e) {
        if (e instanceof Abandoned) return "off";
        setStatus(e instanceof NewerFormatError ? "outdated" : e instanceof BadRemoteError ? "error" : isOnline() ? "error" : "offline");
      }
    } while (again && st);
    return status;
  }

  const engine = {
    /** Upload / download / ask, the first time a user signs in on this device. */
    async beginLogin(userId: string): Promise<FirstLogin> {
      pending = null;
      if (st && st.userId === userId) {
        await engine.syncNow();
        return { kind: "same" };
      }
      st = null;
      const local = deps.getDB();
      const hasLocal = local.profile.onboarded;
      const raw = deps.storage.get(KEYS.v2);
      if (hasLocal && raw) deps.storage.set(KEYS.preLogin, raw);

      const doc = await deps.remote.pull();
      if (!doc) {
        st = { userId, rev: 0, dirty: hasLocal };
        save();
        if (hasLocal) {
          await engine.syncNow();
          return { kind: "uploaded" };
        }
        setStatus("idle");
        return { kind: "empty" };
      }
      const remote = parseRemote(doc.db);
      if (!hasLocal) {
        // Only the recent answers come down; older history stays in the account.
        const recent = await deps.remote.pullReviews(epochOf(remote), now() - WINDOW);
        deps.applyDB({ ...adopt(remote), reviews: recent.map((r) => ({ ...r, up: true as const })) });
        st = { userId, rev: doc.rev, dirty: false, lastSyncAt: now(), pulledAt: now() };
        save();
        setStatus("idle");
        return { kind: "downloaded" };
      }
      if (samePayload(local, remote)) {
        st = { userId, rev: doc.rev, dirty: false, lastSyncAt: now() };
        save();
        await engine.syncNow(); // uploads any answers the account is missing
        return { kind: "same" };
      }
      pending = { userId, remote, rev: doc.rev };
      const remoteSummary = { ...summarize(remote), reviews: await deps.remote.countReviews(epochOf(remote)) };
      return { kind: "choose", local: summarize(local), remote: remoteSummary };
    },

    /** Answer the "progress in two places" question. */
    async resolve(choice: Choice): Promise<SyncStatus> {
      if (!pending) return status;
      const { userId, remote, rev } = pending;
      pending = null;
      if (choice === "account") {
        const recent = await deps.remote.pullReviews(epochOf(remote), now() - WINDOW);
        deps.applyDB({ ...adopt(remote), reviews: recent.map((r) => ({ ...r, up: true as const })) });
        st = { userId, rev, dirty: false, lastSyncAt: now(), pulledAt: now() };
        save();
        setStatus("idle");
        return "idle";
      }
      if (choice === "combine") {
        const merged = mergeDB(deps.getDB(), remote);
        const recent = await deps.remote.pullReviews(epochOf(remote), now() - WINDOW);
        deps.applyDB({ ...merged, reviews: mergeReviews(merged.reviews, recent.map((r) => ({ ...r, up: true as const }))) });
        st = { userId, rev, dirty: !samePayload(merged, remote), pulledAt: now() };
      } else {
        // "Use this device": it replaces the account copy everywhere.
        const mine = deps.getDB();
        deps.applyDB({ ...mine, epoch: newEpoch(now()), reviews: mine.reviews.map(({ up: _u, ...r }) => (void _u, r)) });
        st = { userId, rev, dirty: true, replace: true };
      }
      save();
      return engine.syncNow();
    },

    /** Sync now; concurrent calls share one run (and trigger one more pass if needed). */
    syncNow(): Promise<SyncStatus> {
      if (!st) return Promise.resolve<SyncStatus>("off");
      if (running) {
        again = true;
        return running;
      }
      running = run().finally(() => {
        running = null;
      });
      return running;
    },

    /** A local write happened (the store's onCommit hook). */
    markDirty() {
      if (!st) return;
      version++;
      if (!st.dirty) {
        st.dirty = true;
        save();
      }
    },

    isDirty: () => !!st?.dirty,
    signedInAs: () => st?.userId ?? null,

    /**
     * The device's DB was replaced on purpose (Reset everything, import a backup): stamp a
     * new epoch and make it the account's copy on every device. The server row is never
     * deleted, so its rev keeps increasing.
     */
    startOver(): Promise<SyncStatus> {
      if (!st) return Promise.resolve<SyncStatus>("off");
      const fresh = deps.getDB();
      // Every answer on this device belongs to the new start and must be uploaded again.
      deps.applyDB({ ...fresh, epoch: newEpoch(now()), reviews: fresh.reviews.map(({ up: _u, ...r }) => (void _u, r)) });
      st.replace = true;
      st.dirty = true;
      version++;
      save();
      return engine.syncNow();
    },

    /** Resolves when no sync is running (sign-out waits for this before wiping). */
    async settled(): Promise<void> {
      while (running) await running.catch(() => undefined);
    },

    /** Forget sync state on this device (sign-out, account deleted). Does not touch the DB. */
    forget() {
      generation++;
      pending = null;
      st = null;
      deps.storage.remove(KEYS.preLogin);
      save();
      setStatus("off");
    },

    subscribe(l: () => void) {
      listeners.add(l);
      return () => void listeners.delete(l);
    },
    snapshot: () => snapshot,
  };
  return engine;
}

export type Engine = ReturnType<typeof createEngine>;
