// Category: sync — mergeDB / toPayload. The P0 class here is "sync loses a review".
import { describe, expect, it } from "vitest";
import { mergeDB, samePayload, toPayload } from "@/lib/sync/merge";
import { MAX_REVIEWS, type DB } from "@/lib/model";
import { DAY } from "@/lib/dates";
import { card, extend, learner, NOW, review, reviewKeys, session } from "./fixtures";

const SEEDS = Array.from({ length: 12 }, (_, k) => k + 1);

describe("merge · invariants over random pairs of devices", () => {
  for (const seed of SEEDS) {
    const base = learner({ seed, n: 15 + seed });
    const a = extend(base, { seed: seed * 7, n: 5 + (seed % 4), from: NOW - DAY });
    const b = extend(base, { seed: seed * 13, n: 3 + (seed % 5), from: NOW - DAY + 30 * 60_000, lang: seed % 2 ? "it" : "de" });

    it(`seed ${seed}: idempotent (merge(a, a) = a)`, () => {
      expect(samePayload(mergeDB(a, a), a)).toBe(true);
    });
    it(`seed ${seed}: no review lost (union of both sides)`, () => {
      const m = reviewKeys(mergeDB(a, b));
      for (const k of reviewKeys(a)) expect(m.has(k)).toBe(true);
      for (const k of reviewKeys(b)) expect(m.has(k)).toBe(true);
    });
    it(`seed ${seed}: no duplicate reviews, sorted by time`, () => {
      const m = mergeDB(a, b);
      expect(new Set(m.reviews.map((r) => `${r.t}|${r.id}|${r.mode}`)).size).toBe(m.reviews.length);
      for (let k = 1; k < m.reviews.length; k++) expect(m.reviews[k].t).toBeGreaterThanOrEqual(m.reviews[k - 1].t);
    });
    it(`seed ${seed}: commutative on reviews, cards and sessions`, () => {
      const ab = mergeDB(a, b);
      const ba = mergeDB(b, a);
      expect(ab.reviews).toEqual(ba.reviews);
      expect(ab.sessions).toEqual(ba.sessions);
      expect(Object.keys(ab.cards).sort()).toEqual(Object.keys(ba.cards).sort());
      for (const id of Object.keys(ab.cards)) expect(ab.cards[id].last_review).toBe(ba.cards[id].last_review);
    });
    it(`seed ${seed}: every card keeps its most recent review`, () => {
      const m = mergeDB(a, b);
      for (const id of new Set([...Object.keys(a.cards), ...Object.keys(b.cards)])) {
        const latest = Math.max(a.cards[id]?.last_review ?? 0, b.cards[id]?.last_review ?? 0);
        expect(m.cards[id].last_review).toBe(latest);
      }
    });
    it(`seed ${seed}: merging again changes nothing (stable after sync)`, () => {
      const m = mergeDB(a, b);
      expect(samePayload(mergeDB(m, b), m)).toBe(true);
      expect(samePayload(mergeDB(b, m), m)).toBe(true);
    });
  }
});

describe("merge · cards", () => {
  const t = NOW - DAY;
  const mk = (cards: DB["cards"]) => ({ ...learner({ n: 0 }), cards });
  it("later last_review wins", () => {
    const m = mergeDB(mk({ x: card("x", "it", t, 3) }), mk({ x: card("x", "it", t + 1000, 2) }));
    expect(m.cards.x.last_review).toBe(t + 1000);
  });
  it("tie on last_review → more reps wins", () => {
    const m = mergeDB(mk({ x: card("x", "it", t, 2) }), mk({ x: card("x", "it", t, 5) }));
    expect(m.cards.x.reps).toBe(5);
  });
  it("full tie → local copy wins", () => {
    const local = card("x", "it", t, 2);
    const m = mergeDB(mk({ x: { ...local, stability: 9 } }), mk({ x: { ...local, stability: 1 } }));
    expect(m.cards.x.stability).toBe(9);
  });
  it("cards present on one side only are kept", () => {
    const m = mergeDB(mk({ a: card("a", "it", t) }), mk({ b: card("b", "de", t) }));
    expect(Object.keys(m.cards).sort()).toEqual(["a", "b"]);
  });
  it("a never-reviewed card loses to a reviewed one", () => {
    const fresh = { ...card("x", "it", t), last_review: undefined, reps: 0 };
    const m = mergeDB(mk({ x: fresh }), mk({ x: card("x", "it", t) }));
    expect(m.cards.x.last_review).toBe(t);
  });
});

describe("merge · reviews, sessions, custom", () => {
  it("same review on both sides is kept once", () => {
    const r = review("it-x", "it", NOW);
    const a = { ...learner({ n: 0 }), reviews: [r] };
    expect(mergeDB(a, { ...a, reviews: [{ ...r }] }).reviews).toHaveLength(1);
  });
  it("same instant, different mode → both kept", () => {
    const a = { ...learner({ n: 0 }), reviews: [review("it-x", "it", NOW, "recall")] };
    const b = { ...learner({ n: 0 }), reviews: [review("it-x", "it", NOW, "listen")] };
    expect(mergeDB(a, b).reviews).toHaveLength(2);
  });
  it("review history is capped at MAX_REVIEWS keeping the newest", () => {
    const many = (off: number) => Array.from({ length: MAX_REVIEWS / 2 + 10 }, (_, k) => review("it-x", "it", off + k * 2));
    const a = { ...learner({ n: 0 }), reviews: many(0) };
    const b = { ...learner({ n: 0 }), reviews: many(1) };
    const m = mergeDB(a, b);
    expect(m.reviews).toHaveLength(MAX_REVIEWS);
    expect(m.reviews.at(-1)!.t).toBe(Math.max(a.reviews.at(-1)!.t, b.reviews.at(-1)!.t));
  });
  it("sessions are a union by time+language", () => {
    const a = { ...learner({ n: 0 }), sessions: [session("it", 1), session("de", 1)] };
    const b = { ...learner({ n: 0 }), sessions: [session("it", 1), session("it", 2)] };
    expect(mergeDB(a, b).sessions).toHaveLength(3);
  });
  it("custom words: union by id, local wins on the same id, local order first", () => {
    const w = (id: string, target: string) => ({ id, lang: "it" as const, unit: "it-custom", type: "word" as const, cefr: "A1.1" as const, target, gloss: { es: "x", en: "x" }, spoken: target, tags: [] });
    const a = { ...learner({ n: 0 }), custom: [w("c1", "local"), w("c2", "two")] };
    const b = { ...learner({ n: 0 }), custom: [w("c1", "remote"), w("c3", "three")] };
    const m = mergeDB(a, b);
    expect(m.custom.map((i) => i.id)).toEqual(["c1", "c2", "c3"]);
    expect(m.custom[0].target).toBe("local");
  });
});

describe("merge · profile", () => {
  it("newer profile edit wins (settings)", () => {
    const a = learner({ updatedAt: NOW - 10 });
    const b = structuredClone(a);
    b.profile.updatedAt = NOW;
    b.profile.settings.sessionMinutes = 10;
    expect(mergeDB(a, b).profile.settings.sessionMinutes).toBe(10);
    expect(mergeDB(b, a).profile.settings.sessionMinutes).toBe(10);
  });
  it("Italian on one device + German on the other → both courses kept", () => {
    const a = learner({ langs: ["it"], updatedAt: NOW - 5 });
    const b = learner({ langs: ["de"], updatedAt: NOW });
    const m = mergeDB(a, b);
    expect(Object.keys(m.profile.courses).sort()).toEqual(["de", "it"]);
    expect(m.profile.courses[m.profile.activeLang]).toBeTruthy();
  });
  it("newer goal wins for the same language even if the other profile is newer", () => {
    const a = learner({ updatedAt: NOW });
    const b = structuredClone(a);
    a.profile.courses.it!.goal = { kind: "steady", minutesPerDay: 15, retention: 0.9, setAt: NOW - DAY };
    b.profile.courses.it!.goal = { kind: "steady", minutesPerDay: 25, retention: 0.9, setAt: NOW - 1000 };
    b.profile.updatedAt = NOW - 2000;
    expect(mergeDB(a, b).profile.courses.it!.goal!.minutesPerDay).toBe(25);
  });
  it("same goal → the further unit is kept", () => {
    const a = learner();
    const b = structuredClone(a);
    b.profile.courses.it!.unit = 3;
    expect(mergeDB(a, b).profile.courses.it!.unit).toBe(3);
    expect(mergeDB(b, a).profile.courses.it!.unit).toBe(3);
  });
  it("onboarded on either side → onboarded", () => {
    const a = learner();
    const b = structuredClone(a);
    a.profile.onboarded = false;
    expect(mergeDB(a, b).profile.onboarded).toBe(true);
  });
  it("seen flags and lastBackupAt keep the max", () => {
    const a = learner();
    const b = structuredClone(a);
    a.profile.seen = { tip: 5, x: 1 };
    b.profile.seen = { tip: 9, y: 2 };
    a.profile.lastBackupAt = 10;
    b.profile.lastBackupAt = 20;
    const m = mergeDB(a, b);
    expect(m.profile.seen).toEqual({ tip: 9, x: 1, y: 2 });
    expect(m.profile.lastBackupAt).toBe(20);
  });
  it("createdAt keeps the earliest", () => {
    const a = learner();
    const b = structuredClone(a);
    b.profile.createdAt = a.profile.createdAt - DAY;
    expect(mergeDB(a, b).profile.createdAt).toBe(b.profile.createdAt);
  });
});

describe("merge · on-device-only data", () => {
  it("toPayload drops events and legacyTies", () => {
    const db = { ...learner(), legacyTies: [{ x: 1 }] };
    const p = toPayload(db);
    expect(p.events).toEqual([]);
    expect("legacyTies" in p).toBe(false);
  });
  it("toPayload keeps all learning data", () => {
    const db = learner({ n: 30 });
    const p = toPayload(db);
    expect(p.reviews).toEqual(db.reviews);
    expect(p.cards).toEqual(db.cards);
    expect(p.profile).toEqual(db.profile);
  });
  it("merge keeps local events, never the remote's", () => {
    const a = learner();
    const b = structuredClone(a);
    b.events = [{ t: 1, type: "session_start", lang: "it", mode: "remote" }];
    expect(mergeDB(a, b).events).toEqual(a.events);
  });
  it("events never make two documents look different", () => {
    const a = learner();
    const b = { ...structuredClone(a), events: [] };
    expect(samePayload(a, b)).toBe(true);
  });
});
