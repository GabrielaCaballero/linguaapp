"use client";
// Browser wiring for accounts: the Supabase client, sign-in with an emailed 6-digit code,
// and the app-wide sync engine. Everything here is inert when the two NEXT_PUBLIC_ env
// vars are missing (forks, local dev, CI): the app is then exactly the guest-only app.
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { useSyncExternalStore } from "react";
import { getDB, legacy, onCommit, replaceDB, resetDB } from "../store";
import { KEYS, localAdapter } from "../storage-adapter";
import { saveConfig } from "../llm/provider";
import { createEngine, type Engine } from "./engine";
import { supabaseRemote } from "./remote";

const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function isSyncConfigured(): boolean {
  return !!URL_ && !!ANON;
}

let client: SupabaseClient | null = null;
function getClient(): SupabaseClient {
  if (!client) {
    client = createClient(URL_, ANON, {
      auth: {
        storageKey: KEYS.auth,
        storage: {
          getItem: (k) => localAdapter.get(k),
          setItem: (k, v) => void localAdapter.set(k, v),
          removeItem: (k) => localAdapter.remove(k),
        },
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    });
    client.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ? { id: session.user.id, email: session.user.email ?? "" } : null);
    });
  }
  return client;
}

// ---- account state (who is signed in) -------------------------------------------------
export interface AccountUser {
  id: string;
  email: string;
}
type AccountState = { ready: boolean; user: AccountUser | null };
let account: AccountState = { ready: false, user: null };
const accountListeners = new Set<() => void>();
function setUser(user: AccountUser | null) {
  if (account.ready && account.user?.id === user?.id && account.user?.email === user?.email) return;
  account = { ready: true, user };
  accountListeners.forEach((l) => l());
}
let started = false;
function startAccount() {
  if (started || !isSyncConfigured()) return;
  started = true;
  getClient()
    .auth.getSession()
    .then(({ data }) => setUser(data.session?.user ? { id: data.session.user.id, email: data.session.user.email ?? "" } : null))
    .catch(() => setUser(null));
}
const NOT_CONFIGURED: AccountState = { ready: true, user: null };
const SERVER: AccountState = { ready: false, user: null };

/** Who is signed in. `ready` is false until the stored session has been read. */
export function useAccount(): AccountState & { configured: boolean } {
  const configured = isSyncConfigured();
  const s = useSyncExternalStore(
    (l) => {
      startAccount();
      accountListeners.add(l);
      return () => void accountListeners.delete(l);
    },
    () => (configured ? account : NOT_CONFIGURED),
    () => SERVER,
  );
  return { ...s, configured };
}

// ---- sign in ------------------------------------------------------------------------
export type AuthError = "notInvited" | "badCode" | "tooMany" | "network";

function classify(e: { message?: string; status?: number; code?: string } | null): AuthError {
  const m = `${e?.code ?? ""} ${e?.message ?? ""}`.toLowerCase();
  if (/signup|not allowed|user not found|otp_disabled/.test(m)) return "notInvited";
  if (e?.status === 429 || /rate|too many|security purposes/.test(m)) return "tooMany";
  if (/expired|invalid|token/.test(m)) return "badCode";
  return "network";
}

/** Email a 6-digit code. Unknown emails can't create an account (invite only). */
export async function sendCode(email: string): Promise<AuthError | null> {
  try {
    const { error } = await getClient().auth.signInWithOtp({ email, options: { shouldCreateUser: false } });
    return error ? classify(error) : null;
  } catch {
    return "network";
  }
}

export async function verifyCode(email: string, token: string): Promise<{ user: AccountUser } | { error: AuthError }> {
  try {
    const { data, error } = await getClient().auth.verifyOtp({ email, token, type: "email" });
    if (error || !data.user) return { error: classify(error) };
    const user = { id: data.user.id, email: data.user.email ?? email };
    setUser(user);
    return { user };
  } catch {
    return { error: "network" };
  }
}

// ---- the sync engine ----------------------------------------------------------------
let engine: Engine | null = null;
export function getEngine(): Engine | null {
  if (!isSyncConfigured()) return null;
  if (!engine) {
    engine = createEngine({
      storage: localAdapter,
      remote: supabaseRemote(getClient()),
      getDB,
      applyDB: (db) => replaceDB(db, { fromSync: true }),
      legacy: legacy(),
    });
    onCommit((_db, info) => {
      if (!info.fromSync && !info.eventsOnly) engine!.markDirty();
    });
  }
  return engine;
}

const OFF: ReturnType<Engine["snapshot"]> = { status: "off", dirty: false, signedIn: false };
export function useSyncStatus() {
  return useSyncExternalStore(
    (l) => getEngine()?.subscribe(l) ?? (() => {}),
    () => getEngine()?.snapshot() ?? OFF,
    () => OFF,
  );
}

/**
 * Sign out of this device. Tries a last upload first; if answers are still unsynced and
 * `force` is false, returns "unsynced" and changes nothing so the UI can warn.
 */
export async function signOut(opts: { force?: boolean; forgetKey?: boolean } = {}): Promise<"done" | "unsynced"> {
  const e = getEngine();
  if (e?.isDirty()) await e.syncNow();
  if (e?.isDirty() && !opts.force) return "unsynced";
  e?.forget();
  try {
    await getClient().auth.signOut({ scope: "local" });
  } catch {
    /* offline: the local session is removed below anyway */
  }
  localAdapter.remove(KEYS.auth);
  setUser(null);
  resetDB();
  if (opts.forgetKey) {
    saveConfig(null);
    localAdapter.remove(KEYS.llmCache);
  }
  return "done";
}

/** Delete the whole account (server data goes with it). This device keeps its progress as a guest. */
export async function deleteAccount(): Promise<boolean> {
  try {
    const { error } = await getClient().rpc("delete_me");
    if (error) return false;
  } catch {
    return false;
  }
  getEngine()?.forget();
  try {
    await getClient().auth.signOut({ scope: "local" });
  } catch {
    /* ignore */
  }
  localAdapter.remove(KEYS.auth);
  setUser(null);
  return true;
}
