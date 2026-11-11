import { describe, expect, it } from "vitest";
import { migrateAny, migrateV1, type V1DB } from "@/lib/migrate";
import { loadFrom } from "@/lib/store";
import { fixtureCourses } from "./fixtures/mini-course";
import type { LegacyIndex } from "@/lib/migrate";

const fixtureLegacy: LegacyIndex = new Map(
  Object.values(fixtureCourses).flatMap((c) => c.units.flatMap((u) => u.items.filter((i) => i.legacyId).map((i) => [i.legacyId!, { id: i.id, lang: i.lang }] as const))),
);
const legacy = () => fixtureLegacy;
import { memoryAdapter, KEYS } from "@/lib/storage-adapter";
import { exportBackup, parseBackup } from "@/lib/backup";
import { DAY } from "@/lib/dates";

const NOW = new Date(2026, 10, 12, 9).getTime();
const T0 = NOW - 20 * DAY;

export const v1Fixture: V1DB = {
  version: 1,
  settings: { lang: "it", minutesPerLang: 15, newPerDay: 8, germanLevel: "some", startDate: "2026-10-01" },
  cards: {
    "it-s-nn": { id: "it-s-nn", due: NOW + 3 * DAY, interval: 6, ease: 2.5, reps: 3, lapses: 0, introducedAt: T0, lastReviewed: NOW - 3 * DAY },
    "it-grazie": { id: "it-grazie", due: NOW - DAY, interval: 2, ease: 2.3, reps: 2, lapses: 1, introducedAt: T0 },
    "it-zurigo": { id: "it-zurigo", due: NOW, interval: 1, ease: 2.5, reps: 1, lapses: 0, introducedAt: T0 },
    "de-hallo": { id: "de-hallo", due: NOW + DAY, interval: 4, ease: 2.5, reps: 2, lapses: 0, introducedAt: T0 },
    "class-1": { id: "class-1", due: NOW, interval: 0, ease: 2.5, reps: 0, lapses: 0, introducedAt: NOW - DAY },
  },
  custom: [{ id: "class-1", lang: "it", module: "class", kind: "word", prompt: "la tarea", answer: "i compiti", createdAt: NOW - DAY }],
  reviews: [
    { t: T0, id: "it-s-nn", lang: "it", mode: "guess", correct: true },
    { t: T0 + 1000, id: "it-s-nn", lang: "it", mode: "type", correct: true, confidence: 2 },
    { t: T0 + 2 * DAY, id: "it-s-nn", lang: "it", mode: "listen", correct: true, confidence: 3 },
    { t: T0 + 8 * DAY, id: "it-s-nn", lang: "it", mode: "tiles", correct: true, confidence: 2 },
    { t: T0 + 1000, id: "it-grazie", lang: "it", mode: "type", correct: false },
    { t: T0 + 3 * DAY, id: "it-grazie", lang: "it", mode: "type", correct: true, confidence: 1 },
    { t: T0 + 1000, id: "it-zurigo", lang: "it", mode: "type", correct: true },
  ],
  sessions: [{ t: NOW - DAY, lang: "it", seconds: 300, tasks: 20, correct: 15, graded: 18 }],
  ties: [{ id: "t1", date: "2026-10-02", type: "course", note: "class" }],
};

describe("v1 → v2 migration", () => {
  const db = migrateV1(v1Fixture, legacy(), NOW);

  it("produces a valid v2 DB", () => {
    expect(db.version).toBe(2);
    expect(db.profile.appLang).toBe("es");
    expect(db.profile.courses.it?.explainIn).toBe("es");
    expect(db.profile.courses.de?.explainIn).toBe("en");
    expect(db.profile.activeLang).toBe("it");
  });
  it("maps cards through legacyId and drops removed items", () => {
    expect(db.cards["it-u01-nonno"]).toBeTruthy();
    expect(db.cards["it-u01-grazie"]).toBeTruthy();
    expect(db.cards["de-u01-hallo"]).toBeTruthy();
    expect(Object.keys(db.cards).some((k) => k.includes("zurigo"))).toBe(false);
  });
  it("keeps due dates (±1 day)", () => {
    expect(Math.abs(db.cards["it-u01-nonno"].due - v1Fixture.cards["it-s-nn"].due)).toBeLessThanOrEqual(DAY);
    expect(Math.abs(db.cards["de-u01-hallo"].due - v1Fixture.cards["de-hallo"].due)).toBeLessThanOrEqual(DAY);
  });
  it("replays logs into FSRS", () => {
    expect(db.cards["it-u01-nonno"].reps).toBe(3);
    expect(db.cards["it-u01-nonno"].stability).toBeGreaterThan(1);
    expect(db.cards["it-u01-grazie"].lapses).toBeGreaterThanOrEqual(1);
  });
  it("no logs → stability = interval", () => {
    expect(db.cards["de-u01-hallo"].stability).toBe(4);
  });
  it("custom words survive", () => {
    expect(db.custom).toHaveLength(1);
    expect(db.custom[0].target).toBe("i compiti");
    expect(db.cards["custom-class-1"]).toBeTruthy();
  });
  it("skips onboarding but asks for the goal once", () => {
    expect(db.profile.onboarded).toBe(true);
    expect(db.profile.pendingGoal?.sort()).toEqual(["de", "it"]);
  });
  it("keeps ties only for the one-time download offer", () => {
    expect(db.legacyTies).toHaveLength(1);
  });
  it("carries reviews (minus removed items) and sessions", () => {
    expect(db.reviews.every((r) => !r.id.includes("zurigo"))).toBe(true);
    expect(db.sessions).toHaveLength(1);
  });
});

describe("storage boot", () => {
  it("migrates lingua:v1 once and backs up the raw blob", () => {
    const store = memoryAdapter({ [KEYS.v1]: JSON.stringify(v1Fixture) });
    const db = loadFrom(store, NOW);
    expect(db.version).toBe(2);
    expect(store.get(KEYS.v1Backup)).toBe(JSON.stringify(v1Fixture));
    expect(store.get(KEYS.v2)).toBeTruthy();
  });
  it("fresh install → empty v2", () => {
    const db = loadFrom(memoryAdapter(), NOW);
    expect(db.profile.onboarded).toBe(false);
  });
});

describe("backup", () => {
  it("round-trips a v2 DB and never includes the LLM key", () => {
    const db = migrateV1(v1Fixture, legacy(), NOW);
    const text = exportBackup(db);
    expect(text).not.toMatch(/sk-ant/);
    const back = parseBackup(text, legacy(), NOW);
    expect(back.db.cards).toEqual(db.cards);
    expect(back.preview.langs.sort()).toEqual(["de", "it"]);
  });
  it("accepts a v1 export", () => {
    const back = parseBackup(JSON.stringify(v1Fixture), legacy(), NOW);
    expect(back.db.version).toBe(2);
  });
  it("rejects malformed files", () => {
    expect(() => parseBackup("{nope", legacy(), NOW)).toThrow();
    expect(() => parseBackup(JSON.stringify({ hello: 1 }), legacy(), NOW)).toThrow();
    expect(() => migrateAny(null, legacy(), NOW)).toThrow();
  });
});
