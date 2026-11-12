// Sync engine: keeps the on-device DB and the user's server document in step.
// The device stays the source of truth (the app works fully offline); the server copy is
// what lets progress follow the user to another phone. Depends only on a StorageAdapter
// and a RemoteAdapter, so every case runs in Node tests with in-memory fakes.
import type { DB } from "../model";
import { migrateAny, type LegacyIndex } from "../migrate";
import { KEYS, type StorageAdapter } from "../storage-adapter";
import { mergeDB, samePayload, summarize, toPayload, type Summary } from "./merge";
import type { RemoteAdapter } from "./remote";

export interface SyncState {
  userId: string;
  /** Server revision this device last saw (0 = nothing on the server yet). */
  rev: number;
  /** Local changes not yet uploaded. */
  dirty: boolean;
  lastSyncAt?: number;
}

export type SyncStatus = "off" | "idle" | "syncing" | "offline" | "error";

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

const MAX_ROUNDS = 4;

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

  async function round(): Promise<SyncStatus> {
    if (!st) return "off";
    const s = st;
    for (let i = 0; i < MAX_ROUNDS; i++) {
      const serverRev = await deps.remote.getRev();
      if (serverRev === null) {
        // Nothing on the server (first upload, or synced data was deleted elsewhere).
        if (s.rev !== 0) {
          s.rev = 0;
          s.dirty = true;
        }
      } else if (serverRev !== s.rev) {
        const doc = await deps.remote.pull();
        if (doc) {
          const remote = parseRemote(doc.db);
          const merged = mergeDB(deps.getDB(), remote);
          deps.applyDB(merged);
          s.rev = doc.rev;
          s.dirty = s.dirty || !samePayload(merged, remote);
        } else {
          s.rev = 0;
          s.dirty = true;
        }
        save();
      }
      if (!s.dirty) {
        s.lastSyncAt = now();
        save();
        return "idle";
      }
      const v = version;
      const newRev = await deps.remote.push(s.rev, toPayload(deps.getDB()));
      if (newRev >= 0) {
        s.rev = newRev;
        s.dirty = version !== v;
        s.lastSyncAt = now();
        save();
        if (!s.dirty) return "idle";
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
        setStatus(e instanceof BadRemoteError ? "error" : isOnline() ? "error" : "offline");
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
        deps.applyDB(adopt(remote));
        st = { userId, rev: doc.rev, dirty: false, lastSyncAt: now() };
        save();
        setStatus("idle");
        return { kind: "downloaded" };
      }
      if (samePayload(local, remote)) {
        st = { userId, rev: doc.rev, dirty: false, lastSyncAt: now() };
        save();
        setStatus("idle");
        return { kind: "same" };
      }
      pending = { userId, remote, rev: doc.rev };
      return { kind: "choose", local: summarize(local), remote: summarize(remote) };
    },

    /** Answer the "progress in two places" question. */
    async resolve(choice: Choice): Promise<SyncStatus> {
      if (!pending) return status;
      const { userId, remote, rev } = pending;
      pending = null;
      if (choice === "account") {
        deps.applyDB(adopt(remote));
        st = { userId, rev, dirty: false, lastSyncAt: now() };
        save();
        setStatus("idle");
        return "idle";
      }
      if (choice === "combine") {
        const merged = mergeDB(deps.getDB(), remote);
        deps.applyDB(merged);
        st = { userId, rev, dirty: !samePayload(merged, remote) };
      } else {
        st = { userId, rev, dirty: true };
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

    /** Delete the synced copy only; this device keeps its progress and re-uploads nothing until the next change. */
    async deleteRemote() {
      await deps.remote.deleteMine();
      if (st) {
        st.rev = 0;
        st.dirty = false;
        save();
      }
    },

    /** Forget sync state on this device (sign-out, account deleted). Does not touch the DB. */
    forget() {
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
