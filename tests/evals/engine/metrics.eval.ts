// Category: engine — usage statistics (src/lib/metrics.ts): nothing is recorded or uploaded
// without the learner's yes; the queue is bounded; turning it off forgets the queue.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const settings: { shareStats?: boolean } = {};
let user: string | null = null;
const uploaded: unknown[][] = [];
vi.mock("@/lib/store", () => ({ getDB: () => ({ profile: { settings } }) }));
vi.mock("@/lib/sync/client", () => ({
  isSyncConfigured: () => true,
  currentUserId: () => user,
  uploadEvents: async (rows: unknown[]) => {
    uploaded.push(rows);
    return true;
  },
}));

const store = new Map<string, string>();
beforeEach(() => {
  store.clear();
  uploaded.length = 0;
  user = null;
  delete settings.shareStats;
  vi.stubGlobal("localStorage", { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => store.set(k, v), removeItem: (k: string) => store.delete(k) });
  vi.stubGlobal("navigator", { userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X)", maxTouchPoints: 5 });
});
afterEach(() => vi.unstubAllGlobals());

const queued = () => JSON.parse(store.get("lingua:events") ?? "[]") as { name: string; platform: string }[];

describe("usage statistics", () => {
  it("records nothing until the learner says yes (not asked = off; no = off)", async () => {
    const { track } = await import("@/lib/metrics");
    track("screen_time", { path: "/", seconds: 5 });
    settings.shareStats = false;
    track("screen_time", { path: "/", seconds: 5 });
    expect(queued()).toEqual([]);
  });
  it("with yes: events queue on the device and upload once signed in, then leave the queue", async () => {
    const { track, flushEvents } = await import("@/lib/metrics");
    settings.shareStats = true;
    track("lesson_end", { lang: "it", completed: true });
    expect(queued()).toHaveLength(1);
    expect(queued()[0].platform).toBe("ios");
    await flushEvents(); // not signed in yet: kept
    expect(uploaded).toHaveLength(0);
    user = "u1";
    await flushEvents();
    expect(uploaded).toHaveLength(1);
    expect(queued()).toEqual([]);
  });
  it("the queue keeps at most 500 events; turning statistics off forgets it", async () => {
    const { track, clearEvents } = await import("@/lib/metrics");
    settings.shareStats = true;
    for (let k = 0; k < 520; k++) track("screen_time", { path: "/", seconds: 1 });
    expect(queued()).toHaveLength(500);
    clearEvents();
    expect(queued()).toEqual([]);
  });
});
