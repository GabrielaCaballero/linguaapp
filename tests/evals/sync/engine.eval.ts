// Category: sync — the engine end to end against an in-memory server, with several fake
// devices sharing one account. Covers first sign-in (4 cases), offline, conflicts,
// garbage from the server, and deleting synced data.
import { describe, expect, it } from "vitest";
import { createEngine, BadRemoteError } from "@/lib/sync/engine";
import type { RemoteAdapter } from "@/lib/sync/remote";
import { memoryRemote } from "@/lib/sync/remote";
import { toPayload } from "@/lib/sync/merge";
import { KEYS, memoryAdapter, type StorageAdapter } from "@/lib/storage-adapter";
import { emptyDB, LOCAL_HISTORY_DAYS, type DB } from "@/lib/model";
import { DAY } from "@/lib/dates";
import { migrateAny, type LegacyIndex } from "@/lib/migrate";
import { extend, learner, NOW, reviewKeys } from "./fixtures";

const legacy: LegacyIndex = new Map();
/** What an account holds for a learner: the state document plus their answers (the fake files them in its table). */
const account = (db: DB) => ({ ...toPayload(db), reviews: db.reviews });
type Server = ReturnType<typeof memoryRemote>;

/** A fake phone: its own storage + DB, talking to the shared server. */
function device(server: Server, db: DB, opts: { online?: () => boolean; remote?: RemoteAdapter } = {}) {
  const storage: StorageAdapter = memoryAdapter({ [KEYS.v2]: JSON.stringify(db) });
  let current = db;
  let appliedFromSync = 0;
  const engine = createEngine({
    storage,
    remote: opts.remote ?? server.remote,
    getDB: () => current,
    applyDB: (d) => {
      current = d;
      appliedFromSync++;
      storage.set(KEYS.v2, JSON.stringify(d));
    },
    legacy,
    now: () => NOW,
    isOnline: opts.online,
  });
  return {
    engine,
    storage,
    get db() {
      return current;
    },
    get applied() {
      return appliedFromSync;
    },
    /** What the app does on sign-out after forget(): wipe the device. */
    wipe() {
      current = emptyDB(NOW);
      storage.set(KEYS.v2, JSON.stringify(current));
    },
    /** A local change, as the store would make it (then onCommit → markDirty). */
    write(next: DB) {
      current = next;
      storage.set(KEYS.v2, JSON.stringify(next));
      engine.markDirty();
    },
  };
}

/** The account as a whole: the state document plus its answers table. */
const serverDB = (s: Server) => {
  if (!s.row) return null;
  const db = migrateAny(s.row.db, legacy, NOW);
  return { ...db, reviews: s.reviewsFor(db.epoch ?? "") };
};

describe("sync engine · first sign-in on a device", () => {
  it("empty account + progress on device → uploads it, keeps a pre-login backup", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 25 }));
    const r = await phone.engine.beginLogin("u1");
    expect(r.kind).toBe("uploaded");
    expect(server.row?.rev).toBe(1);
    expect(reviewKeys(serverDB(server)!)).toEqual(reviewKeys(phone.db));
    expect(phone.storage.get(KEYS.preLogin)).toBeTruthy();
    expect(phone.engine.isDirty()).toBe(false);
  });
  it("empty account + fresh device → nothing uploaded yet", async () => {
    const server = memoryRemote();
    const phone = device(server, emptyDB(NOW));
    expect((await phone.engine.beginLogin("u1")).kind).toBe("empty");
    expect(server.row).toBeNull();
  });
  it("…then the first onboarding change is uploaded", async () => {
    const server = memoryRemote();
    const phone = device(server, emptyDB(NOW));
    await phone.engine.beginLogin("u1");
    phone.write(learner({ n: 5 }));
    expect(await phone.engine.syncNow()).toBe("idle");
    expect(server.row?.rev).toBe(1);
  });
  it("account has progress + fresh device → downloads it", async () => {
    const server = memoryRemote({ db: account(learner({ n: 30 })), rev: 4 });
    const phone = device(server, emptyDB(NOW));
    expect((await phone.engine.beginLogin("u1")).kind).toBe("downloaded");
    expect(phone.db.reviews).toHaveLength(30);
    expect(phone.db.profile.onboarded).toBe(true);
    expect(server.calls.filter((c) => c === "push")).toHaveLength(0);
  });
  it("download keeps this device's on-device events", async () => {
    const server = memoryRemote({ db: account(learner({ n: 3 })), rev: 1 });
    const fresh = emptyDB(NOW);
    fresh.events = [{ t: 1, type: "session_start", lang: "it", mode: "x" }];
    const phone = device(server, fresh);
    await phone.engine.beginLogin("u1");
    expect(phone.db.events).toHaveLength(1);
  });
  it("same progress on both → no question", async () => {
    const db = learner({ n: 10 });
    const server = memoryRemote({ db: account(db), rev: 2 });
    expect((await device(server, db).engine.beginLogin("u1")).kind).toBe("same");
  });
  it("different progress on both → asks, with a summary of each side", async () => {
    const base = learner({ n: 10 });
    const server = memoryRemote({ db: account(extend(base, { seed: 2, n: 4, from: NOW })), rev: 2 });
    const r = await device(server, base).engine.beginLogin("u1");
    expect(r.kind).toBe("choose");
    if (r.kind === "choose") {
      expect(r.local.reviews).toBe(10);
      expect(r.remote.reviews).toBe(14);
    }
  });
  it("choose → combine keeps every review from both and uploads the union", async () => {
    const base = learner({ n: 10 });
    const remote = extend(base, { seed: 2, n: 4, from: NOW });
    const local = extend(base, { seed: 3, n: 6, from: NOW + 3_600_000 });
    const server = memoryRemote({ db: account(remote), rev: 2 });
    const phone = device(server, local);
    await phone.engine.beginLogin("u1");
    expect(await phone.engine.resolve("combine")).toBe("idle");
    const want = new Set([...reviewKeys(remote), ...reviewKeys(local)]);
    expect(reviewKeys(phone.db)).toEqual(want);
    expect(reviewKeys(serverDB(server)!)).toEqual(want);
  });
  it("choose → use account replaces this device", async () => {
    const remote = learner({ seed: 5, n: 7 });
    const server = memoryRemote({ db: account(remote), rev: 2 });
    const phone = device(server, learner({ seed: 9, n: 3 }));
    await phone.engine.beginLogin("u1");
    await phone.engine.resolve("account");
    expect(reviewKeys(phone.db)).toEqual(reviewKeys(remote));
    expect(server.row?.rev).toBe(2);
  });
  it("choose → use this device overwrites the account", async () => {
    const local = learner({ seed: 9, n: 3 });
    const server = memoryRemote({ db: account(learner({ seed: 5, n: 7 })), rev: 2 });
    const phone = device(server, local);
    await phone.engine.beginLogin("u1");
    await phone.engine.resolve("device");
    expect(reviewKeys(serverDB(server)!)).toEqual(reviewKeys(local));
    expect(server.row?.rev).toBe(3);
  });
  it("garbage on the server → BadRemoteError and nothing local changes", async () => {
    const server = memoryRemote({ db: { hello: "world" }, rev: 1 });
    const local = learner({ n: 4 });
    const phone = device(server, local);
    await expect(phone.engine.beginLogin("u1")).rejects.toBeInstanceOf(BadRemoteError);
    expect(phone.db).toBe(local);
    expect(phone.engine.signedInAs()).toBeNull();
  });
  it("a v1 document on the server is migrated, not rejected", async () => {
    const v1 = { version: 1, settings: { lang: "it", minutesPerLang: 15 }, cards: {}, reviews: [], custom: [], sessions: [], streak: { days: [] } };
    const server = memoryRemote({ db: v1, rev: 1 });
    const phone = device(server, emptyDB(NOW));
    expect((await phone.engine.beginLogin("u1")).kind).toBe("downloaded");
    expect(phone.db.version).toBe(2);
  });
  it("network failure during sign-in throws and leaves no half state", async () => {
    const server = memoryRemote();
    server.setOffline(true);
    const phone = device(server, learner());
    await expect(phone.engine.beginLogin("u1")).rejects.toBeTruthy();
    expect(phone.engine.signedInAs()).toBeNull();
  });
});

describe("sync engine · two devices, one account", () => {
  async function pair() {
    const server = memoryRemote();
    const base = learner({ n: 12 });
    const phone = device(server, base);
    await phone.engine.beginLogin("u1");
    const laptop = device(server, emptyDB(NOW));
    await laptop.engine.beginLogin("u1");
    return { server, phone, laptop, base };
  }

  it("a lesson on the phone appears on the laptop after a sync", async () => {
    const { phone, laptop } = await pair();
    phone.write(extend(phone.db, { seed: 4, n: 5, from: NOW }));
    await phone.engine.syncNow();
    await laptop.engine.syncNow();
    expect(reviewKeys(laptop.db)).toEqual(reviewKeys(phone.db));
  });
  it("both offline, both practise, reconnect → nothing lost on either", async () => {
    const { server, phone, laptop } = await pair();
    server.setOffline(true);
    phone.write(extend(phone.db, { seed: 4, n: 5, from: NOW }));
    laptop.write(extend(laptop.db, { seed: 8, n: 7, from: NOW + 10_000 }));
    expect(await phone.engine.syncNow()).toBe("error");
    server.setOffline(false);
    await phone.engine.syncNow();
    await laptop.engine.syncNow();
    await phone.engine.syncNow();
    const want = new Set([...reviewKeys(phone.db), ...reviewKeys(laptop.db)]);
    expect(reviewKeys(phone.db)).toEqual(want);
    expect(reviewKeys(laptop.db)).toEqual(want);
    expect(reviewKeys(serverDB(server)!)).toEqual(want);
    expect(phone.engine.isDirty()).toBe(false);
    expect(laptop.engine.isDirty()).toBe(false);
  });
  it("offline is reported as offline when the browser says so", async () => {
    const server = memoryRemote();
    let online = true;
    const phone = device(server, learner(), { online: () => online });
    await phone.engine.beginLogin("u1");
    server.setOffline(true);
    online = false;
    phone.write(extend(phone.db, { seed: 1, n: 1, from: NOW }));
    expect(await phone.engine.syncNow()).toBe("offline");
    expect(phone.engine.isDirty()).toBe(true);
  });
  it("a write from another device between pull and push → conflict, retried, settled", async () => {
    const { server, phone, laptop } = await pair();
    phone.write(extend(phone.db, { seed: 4, n: 3, from: NOW }));
    // Sneak a write in right before the phone pushes.
    const realPush = server.remote.push;
    let sneaked = false;
    server.remote.push = async (rev, doc) => {
      if (!sneaked) {
        sneaked = true;
        const other = extend(laptop.db, { seed: 99, n: 2, from: NOW + 50_000 });
        server.write(account(other));
      }
      return realPush(rev, doc);
    };
    expect(await phone.engine.syncNow()).toBe("idle");
    server.remote.push = realPush;
    expect(phone.db.reviews.length).toBeGreaterThan(laptop.db.reviews.length + 3);
    expect(reviewKeys(serverDB(server)!)).toEqual(reviewKeys(phone.db));
  });
  it("syncing with nothing new makes no upload", async () => {
    const { server, phone } = await pair();
    const pushes = server.calls.filter((c) => c === "push").length;
    await phone.engine.syncNow();
    await phone.engine.syncNow();
    expect(server.calls.filter((c) => c === "push").length).toBe(pushes);
  });
  it("concurrent syncNow calls share one run", async () => {
    const { phone } = await pair();
    phone.write(extend(phone.db, { seed: 4, n: 2, from: NOW }));
    const [a, b] = await Promise.all([phone.engine.syncNow(), phone.engine.syncNow()]);
    expect([a, b]).toEqual(["idle", "idle"]);
  });
  it("a change made during an upload is uploaded too", async () => {
    const { server, phone } = await pair();
    phone.write(extend(phone.db, { seed: 4, n: 2, from: NOW }));
    const realPush = server.remote.push;
    let once = false;
    server.remote.push = async (rev, doc) => {
      const r = await realPush(rev, doc);
      if (!once) {
        once = true;
        phone.write(extend(phone.db, { seed: 5, n: 1, from: NOW + 99_000 }));
      }
      return r;
    };
    await phone.engine.syncNow();
    server.remote.push = realPush;
    expect(reviewKeys(serverDB(server)!)).toEqual(reviewKeys(phone.db));
    expect(phone.engine.isDirty()).toBe(false);
  });
  it("events never reach the server", async () => {
    const { server, phone } = await pair();
    expect(phone.db.events.length).toBeGreaterThan(0);
    expect((server.row!.db as DB).events).toEqual([]);
  });
});

describe("sync engine · starting over, deletes and forgetting", () => {
  it("Reset on one device replaces the account copy; the other device adopts it instead of merging it back (P1-3)", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 12 }));
    await phone.engine.beginLogin("u1");
    const laptop = device(server, emptyDB(NOW));
    await laptop.engine.beginLogin("u1");
    expect(laptop.db.reviews).toHaveLength(12);
    const revBefore = server.row!.rev;
    // Phone: Settings → Reset everything (resetDB, then startOver).
    phone.wipe();
    expect(await phone.engine.startOver()).toBe("idle");
    expect(server.row!.rev).toBeGreaterThan(revBefore); // never deleted, rev never restarts
    expect(serverDB(server)!.reviews).toEqual([]);
    expect(server.answerCount).toBe(0); // old answers are gone from the account too
    expect(await laptop.engine.syncNow()).toBe("idle");
    expect(laptop.db.reviews).toEqual([]);
    expect(laptop.db.epoch).toBe(phone.db.epoch);
    // and the phone stays empty after another round
    await phone.engine.syncNow();
    expect(phone.db.reviews).toEqual([]);
  });
  it("import on one device → every device ends up with exactly the imported progress", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 10 }));
    await phone.engine.beginLogin("u1");
    const laptop = device(server, emptyDB(NOW));
    await laptop.engine.beginLogin("u1");
    const imported = learner({ seed: 9, n: 4 });
    phone.write(imported);
    await phone.engine.startOver();
    await laptop.engine.syncNow();
    expect(reviewKeys(laptop.db)).toEqual(reviewKeys(imported));
  });
  it("'Use this device' wins on the other devices too", async () => {
    const server = memoryRemote();
    const tablet = device(server, learner({ seed: 1, n: 8 }));
    await tablet.engine.beginLogin("u1");
    const phone = device(server, learner({ seed: 2, n: 3 }));
    const first = await phone.engine.beginLogin("u1");
    expect(first.kind).toBe("choose");
    await phone.engine.resolve("device");
    await tablet.engine.syncNow();
    expect(reviewKeys(tablet.db)).toEqual(reviewKeys(phone.db));
    expect(tablet.db.reviews).toHaveLength(3);
  });
  it("row deleted by the owner in the dashboard → this device re-uploads on its next change", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 6 }));
    await phone.engine.beginLogin("u1");
    server.adminDelete();
    phone.write(extend(phone.db, { seed: 2, n: 1, from: NOW }));
    await phone.engine.syncNow();
    expect(serverDB(server)!.reviews).toHaveLength(7);
  });
  it("sign-out while a sync is in flight: the late server answer never lands on the wiped device (P1-2)", async () => {
    const server = memoryRemote();
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    let hold = false;
    const slow: RemoteAdapter = {
      ...server.remote,
      pull: async () => {
        if (hold) await gate;
        return server.remote.pull();
      },
    };
    const phone = device(server, learner({ n: 6 }), { remote: slow });
    await phone.engine.beginLogin("u1");
    server.write(extend(serverDB(server)!, { seed: 5, n: 4, from: NOW })); // another device wrote
    hold = true;
    const inFlight = phone.engine.syncNow();
    await Promise.resolve();
    phone.engine.forget();
    phone.wipe();
    const applied = phone.applied;
    release();
    expect(await inFlight).toBe("off");
    expect(phone.applied).toBe(applied);
    expect(phone.db.reviews).toEqual([]);
    expect(phone.storage.get(KEYS.sync)).toBeNull();
  });
  it("settled() waits for a running sync", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 3 }));
    await phone.engine.beginLogin("u1");
    phone.write(extend(phone.db, { seed: 2, n: 1, from: NOW }));
    void phone.engine.syncNow();
    await phone.engine.settled();
    expect(phone.engine.isDirty()).toBe(false);
  });
  it("a document from a newer app version → 'outdated', and this device never overwrites it (P1-5)", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 3 }));
    await phone.engine.beginLogin("u1");
    server.write({ ...serverDB(server)!, version: 3, newThing: { x: 1 } });
    const rev = server.row!.rev;
    phone.write(extend(phone.db, { seed: 2, n: 1, from: NOW }));
    expect(await phone.engine.syncNow()).toBe("outdated");
    expect(server.row!.rev).toBe(rev);
    expect((server.row!.db as { version: number }).version).toBe(3);
  });
  it("forget() removes sync state and the pre-login backup, not the DB", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 6 }));
    await phone.engine.beginLogin("u1");
    phone.engine.forget();
    expect(phone.storage.get(KEYS.sync)).toBeNull();
    expect(phone.storage.get(KEYS.preLogin)).toBeNull();
    expect(phone.db.reviews).toHaveLength(6);
    expect(await phone.engine.syncNow()).toBe("off");
  });
  it("guest (never signed in) → zero server calls", async () => {
    const server = memoryRemote();
    const phone = device(server, learner());
    phone.write(extend(phone.db, { seed: 2, n: 3, from: NOW }));
    await phone.engine.syncNow();
    expect(server.calls).toEqual([]);
  });
  it("sync state survives an app restart (read back from storage)", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 6 }));
    await phone.engine.beginLogin("u1");
    const again = createEngine({ storage: phone.storage, remote: server.remote, getDB: () => phone.db, applyDB: () => {}, legacy, now: () => NOW });
    expect(again.signedInAs()).toBe("u1");
    expect(again.snapshot().status).toBe("idle");
  });
});

describe("sync engine · the account holds the history, the phone stays small", () => {
  /** A year of daily practice: 60 answers a day. */
  function yearOfPractice(): DB {
    const db = learner({ n: 1, start: NOW - 365 * DAY });
    const ids = Object.keys(db.cards);
    for (let d = 365; d >= 1; d--) {
      for (let k = 0; k < 60; k++) {
        db.reviews.push({ t: NOW - d * DAY + k * 60_000, id: ids[0], lang: "it", mode: k % 2 ? "recall" : "recognize", verdict: "correct", rating: 3, source: "checker", ms: 2000 });
      }
      db.events.push({ t: NOW - d * DAY, type: "session_start", lang: "it", mode: "auto" });
    }
    return db;
  }

  it("signing in uploads the whole history once; the phone then keeps only the last weeks", async () => {
    const server = memoryRemote();
    const big = yearOfPractice();
    const phone = device(server, big);
    await phone.engine.beginLogin("u1");
    expect(server.reviewsFor()).toHaveLength(big.reviews.length);
    const cutoff = NOW - LOCAL_HISTORY_DAYS * DAY;
    expect(phone.db.reviews.every((r) => r.t >= cutoff)).toBe(true);
    expect(phone.db.events.every((e) => e.t >= cutoff)).toBe(true);
    expect(phone.db.reviews.length).toBeLessThan(big.reviews.length / 7);
    // cards (the schedule) are never trimmed
    expect(Object.keys(phone.db.cards)).toEqual(Object.keys(big.cards));
  });

  it("on a phone after a year of daily practice, saved progress stays near 1 MB", async () => {
    const server = memoryRemote();
    const phone = device(server, yearOfPractice());
    await phone.engine.beginLogin("u1");
    expect(phone.storage.get(KEYS.v2)!.length).toBeLessThan(1_000_000);
  });

  it("after that, each sync sends only the new answers", async () => {
    const server = memoryRemote();
    const sent: number[] = [];
    const spy: RemoteAdapter = { ...server.remote, pushReviews: (e, rows) => (sent.push(rows.length), server.remote.pushReviews(e, rows)) };
    const phone = device(server, learner({ n: 40 }), { remote: spy });
    await phone.engine.beginLogin("u1");
    expect(sent).toEqual([40]);
    phone.write(extend(phone.db, { seed: 3, n: 2, from: NOW + DAY }));
    await phone.engine.syncNow();
    expect(sent).toEqual([40, 2]);
    await phone.engine.syncNow();
    expect(sent).toEqual([40, 2]);
    expect(phone.db.reviews.filter((r) => !r.up)).toHaveLength(0);
  });

  it("a new phone downloads only recent answers; older history stays in the account", async () => {
    const server = memoryRemote();
    const first = device(server, yearOfPractice());
    await first.engine.beginLogin("u1");
    const total = server.answerCount;
    const second = device(server, emptyDB(NOW));
    expect((await second.engine.beginLogin("u1")).kind).toBe("downloaded");
    expect(second.db.reviews.length).toBeLessThan(total / 7);
    expect(second.db.reviews.every((r) => r.up)).toBe(true);
    expect(server.answerCount).toBe(total);
  });

  it("answers made offline are never dropped from the phone before they reach the account", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 3 }));
    await phone.engine.beginLogin("u1");
    server.setOffline(true);
    // an old answer that was never uploaded (e.g. clock was wrong) must survive trimming
    const old = extend(phone.db, { seed: 4, n: 1, from: NOW - 200 * DAY });
    phone.write(old);
    await phone.engine.syncNow();
    expect(phone.db.reviews.some((r) => r.t === old.reviews[old.reviews.length - 1].t)).toBe(true);
    server.setOffline(false);
    await phone.engine.syncNow();
    expect(server.reviewsFor().some((r) => r.t === old.reviews[old.reviews.length - 1].t)).toBe(true);
  });

  it("a review answered on the laptop shows up in the phone's recent history", async () => {
    const server = memoryRemote();
    const phone = device(server, learner({ n: 5 }));
    await phone.engine.beginLogin("u1");
    const laptop = device(server, emptyDB(NOW));
    await laptop.engine.beginLogin("u1");
    laptop.write(extend(laptop.db, { seed: 8, n: 3, from: NOW + 1000 }));
    await laptop.engine.syncNow();
    await phone.engine.syncNow();
    expect(reviewKeys(phone.db)).toEqual(reviewKeys(laptop.db));
  });
});

