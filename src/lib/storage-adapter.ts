// The only place that touches localStorage. Swap this file for IndexedDB / Capacitor
// Preferences later without changing any feature code. Every call is wrapped so private
// mode or a full disk never crashes the app; it just won't remember.
export interface StorageAdapter {
  get(key: string): string | null;
  set(key: string, value: string): boolean;
  remove(key: string): void;
}

export const localAdapter: StorageAdapter = {
  get(key) {
    try {
      return typeof localStorage === "undefined" ? null : localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  },
};

export function memoryAdapter(init: Record<string, string> = {}): StorageAdapter {
  const m = new Map(Object.entries(init));
  return {
    get: (k) => m.get(k) ?? null,
    set: (k, v) => (m.set(k, v), true),
    remove: (k) => void m.delete(k),
  };
}

export const KEYS = { v2: "lingua:v2", v1: "lingua:v1", v1Backup: "lingua:v1-backup", llm: "lingua:llm", llmCache: "lingua:llm-cache", sync: "lingua:sync", auth: "lingua:auth", preLogin: "lingua:pre-login-backup" } as const;
