// Category: engine — "Report a problem" (src/lib/reports.ts): a report is queued on the device and
// sent once signed in; what the learner typed goes along only with "my answer should count";
// reports don't depend on usage statistics.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let user: string | null = null;
let online = true;
const uploaded: Record<string, unknown>[][] = [];
vi.mock("@/lib/store", () => ({ getDB: () => ({ profile: { settings: {} } }) }));
vi.mock("@/lib/sync/client", () => ({
  isSyncConfigured: () => true,
  currentUserId: () => user,
  uploadEvents: async () => true,
  uploadReports: async (rows: Record<string, unknown>[]) => {
    if (!online) return false;
    uploaded.push(rows);
    return true;
  },
}));

const store = new Map<string, string>();
beforeEach(() => {
  store.clear();
  uploaded.length = 0;
  user = null;
  online = true;
  vi.stubGlobal("localStorage", { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => store.set(k, v), removeItem: (k: string) => store.delete(k) });
});
afterEach(() => vi.unstubAllGlobals());

const queued = () => JSON.parse(store.get("lingua:reports") ?? "[]") as Record<string, unknown>[];
const base = { item_id: "it-u01-ciao", lang: "it", base: "es", mode: "recall", verdict: "wrong" } as const;

describe("content reports", () => {
  it("queued while signed out (statistics off), sent once signed in, then removed", async () => {
    const { report, flushReports } = await import("@/lib/reports");
    report({ ...base, reason: "translation", comment: "  should be 'hola'  " });
    expect(queued()).toHaveLength(1);
    expect(queued()[0].comment).toBe("should be 'hola'");
    user = "u1";
    await flushReports();
    expect(uploaded.flat()).toHaveLength(1);
    expect(queued()).toEqual([]);
  });
  it("the typed answer is sent only with 'my answer should count'", async () => {
    const { report } = await import("@/lib/reports");
    report({ ...base, reason: "audio", answer: "ciao bella" });
    report({ ...base, reason: "answer_ok", answer: "ciao bella" });
    expect(queued().map((r) => r.answer)).toEqual([undefined, "ciao bella"]);
  });
  it("kept for later when sending fails; long comments are cut to 500", async () => {
    const { report, flushReports } = await import("@/lib/reports");
    user = "u1";
    online = false;
    report({ ...base, reason: "other", comment: "x".repeat(900) });
    await flushReports();
    expect(queued()).toHaveLength(1);
    expect((queued()[0].comment as string).length).toBe(500);
    online = true;
    await flushReports();
    expect(queued()).toEqual([]);
  });
});
