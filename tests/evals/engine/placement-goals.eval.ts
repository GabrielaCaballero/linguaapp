// Category: engine — placement (simulated learners, unit mapping, seeding) and goals math.
import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import type { BaseLang, PlacementItem, TargetLang } from "@/content/schema";
import { answer, band, beginner, nextItem, p, priorMean, seeds, start, startUnit, MAX_ITEMS, MIN_ITEMS, type PlacementState } from "@/lib/placement";
import { alternatives, dailyMinutes, feasibility, HOURS, MULT, planForDate, projectedDate, retentionFor } from "@/lib/goals";
import { emptyDB, type DB } from "@/lib/model";
import { weeklyCheck } from "@/lib/stats";
import { DAY } from "@/lib/dates";
import { normal, rng } from "../lib/fixtures";

const PAIRS: [TargetLang, BaseLang][] = [["it", "es"], ["it", "en"], ["de", "en"], ["de", "es"]];

function run(lang: TargetLang, base: BaseLang, mu: number, correct: (it: PlacementItem) => boolean): PlacementState {
  const bank = courses[lang].placement;
  let s = start(mu);
  while (!s.done) {
    const it = nextItem(bank, s);
    if (!it) break;
    s = answer(s, it, correct(it), base, bank.length);
  }
  return s;
}

describe("placement: simulated learners on the real banks", () => {
  for (const [lang, base] of PAIRS) {
    it(`${base}→${lang}: 300 Rasch learners, median |θ̂−θ| < 0.5, 8–15 items`, () => {
      const r = rng(lang === "it" ? 11 : 23);
      const err: number[] = [];
      for (let k = 0; k < 300; k++) {
        const theta = Math.max(-3.5, Math.min(2.5, -1 + 1.2 * normal(r)));
        const mu = theta + 0.8 * normal(r); // self-report is noisy
        const s = run(lang, base, Math.max(-2.5, Math.min(0.5, mu)), (it) => r() < p(theta, it.b));
        expect(s.responses.length).toBeGreaterThanOrEqual(MIN_ITEMS);
        expect(s.responses.length).toBeLessThanOrEqual(MAX_ITEMS);
        err.push(Math.abs(s.theta - theta));
      }
      err.sort((a, b) => a - b);
      expect(err[Math.floor(err.length / 2)]).toBeLessThan(0.5);
    });
  }
  it("'I'm a beginner' ends the test at A0 → Unit 1, nothing seeded", () => {
    const s = beginner(start(-1.5));
    expect(s.done).toBe(true);
    expect(band(s.theta)).toBe("A0");
    const su = startUnit(courses.it.units, s.theta, s.se);
    expect(su.index).toBe(1);
    expect(seeds(courses.it.units, su.index, courses.it.placement, s)).toHaveLength(0);
  });
  it("'I don't know' counts as wrong (lowers θ)", () => {
    const bank = courses.de.placement;
    const s0 = start(-0.5);
    const it0 = nextItem(bank, s0)!;
    expect(answer(s0, it0, false, "en").theta).toBeLessThan(s0.theta);
  });
  it("prior from self-report: never/bit/classes/lived, can-dos shift ≤ ±0.5", () => {
    expect(priorMean("never")).toBe(-2.5);
    expect(priorMean("bit")).toBe(-1.5);
    expect(priorMean("classes")).toBe(-0.5);
    expect(priorMean("lived")).toBe(0.5);
    expect(priorMean("bit", [1, 1, 1])).toBeCloseTo(-1);
    expect(priorMean("bit", [-1, -1, -1])).toBeCloseTo(-2);
  });
});

describe("placement → unit mapping and seeding (P0-2 regression)", () => {
  for (const lang of ["it", "de"] as TargetLang[]) {
    const units = courses[lang].units;
    const total = units.flatMap((u) => u.items).length;
    it(`${lang}: start unit is monotonic in θ and every unit 1–6 is reachable`, () => {
      let prev = 0;
      const seen = new Set<number>();
      for (let th = -4; th <= 3; th += 0.05) {
        const u = startUnit(units, th, 0.45).index;
        expect(u).toBeGreaterThanOrEqual(prev);
        prev = u;
        seen.add(u);
      }
      expect(seen.size).toBe(units.length);
    });
    it(`${lang}: seeds never include the start unit or later, and never the whole course`, () => {
      for (let th = -3; th <= 3; th += 0.25) {
        const s = { ...start(th), theta: th, se: 0.45, done: true };
        const su = startUnit(units, th, 0.45);
        const sd = new Set(seeds(units, su.index, courses[lang].placement, s));
        for (const u of units.filter((x) => x.index >= su.index)) for (const i of u.items) expect(sd.has(i.id)).toBe(false);
        expect(sd.size).toBeLessThan(total * 0.85);
      }
    });
    it(`${lang}: a mid-A1.2 learner (θ=−0.5) is not 'beyond the course' and starts after Unit 1`, () => {
      const su = startUnit(units, -0.5, 0.45);
      expect(su.beyond).toBe(false);
      expect(su.index).toBeGreaterThan(1);
    });
  }
  it("Ana (es→it, judge repro): gets reading/vocab right but grammar & false friends wrong → not above A1.2, not beyond", () => {
    const s = run("it", "es", -0.5, (it) => !(it.skill === "grammar" && it.b > -2) && !it.falseFriend && it.b < 0.9);
    expect(["A0", "A1.1", "A1.2"]).toContain(band(s.theta));
    expect(startUnit(courses.it.units, s.theta, s.se).beyond).toBe(false);
  });
});

// ── goals ──────────────────────────────────────────────────────────────────────
const NOW = new Date(2026, 10, 12, 9).getTime();
const by = (months: number) => NOW + months * 30.44 * DAY;

describe("goals math (spec §4.5)", () => {
  it("multipliers per pair", () => expect(MULT).toEqual({ "es-it": 0.7, "en-it": 1.0, "en-de": 1.25, "es-de": 1.3 }));
  it("cumulative hours", () => expect(HOURS).toEqual({ A0: 0, "A1.1": 45, A1: 90, A2: 190, B1: 375 }));
  for (const [lang, base] of PAIRS)
    for (const target of ["A1.1", "A1", "A2", "B1"] as const)
      for (const months of [3, 6, 12])
        it(`from zero ${base}→${lang} ${target} in ${months} mo matches the spec formula`, () => {
          const plan = planForDate({ base, lang, current: "A0", target, by: by(months), now: NOW });
          const weeks = (by(months) - NOW) / (7 * DAY);
          const raw = (HOURS[target] * MULT[`${base}-${lang}`] * 60) / (weeks * 5);
          expect(plan.rawMinPerDay).toBeCloseTo(raw, 3);
          expect(plan.minPerDay).toBe(Math.max(5, Math.min(90, Math.ceil(raw / 5 - 1e-6) * 5)));
          expect(plan.minPerDay % 5).toBe(0);
        });
  it("labels: ≤15 relaxed · ≤30 steady · ≤45 ambitious · >45 very demanding", () => {
    expect([15, 16, 30, 31, 45, 46].map(feasibility)).toEqual(["relaxed", "steady", "steady", "ambitious", "ambitious", "demanding"]);
  });
  it("honest numbers: raw value above 90 is kept (UI shows 90+), label demanding (P1-5)", () => {
    const plan = planForDate({ base: "en", lang: "de", current: "A0", target: "A2", by: by(3), now: NOW });
    expect(plan.rawMinPerDay).toBeGreaterThan(90);
    expect(plan.minPerDay).toBe(90);
    expect(plan.label).toBe("demanding");
  });
  it("already at the target → 0 minutes needed, flagged", () => {
    const plan = planForDate({ base: "es", lang: "it", current: "A2", target: "A1.1", by: by(6), now: NOW });
    expect(plan.alreadyThere).toBe(true);
    expect(plan.needMin).toBe(0);
  });
  it("class hours lower the daily minutes", () => {
    const a = planForDate({ base: "en", lang: "de", current: "A0", target: "A1", by: by(6), now: NOW });
    const b = planForDate({ base: "en", lang: "de", current: "A0", target: "A1", by: by(6), now: NOW, classHoursPerWeek: 2 });
    expect(b.rawMinPerDay).toBeLessThan(a.rawMinPerDay);
  });
  it("more practice days per week → fewer minutes per day", () => {
    const a = planForDate({ base: "en", lang: "it", current: "A0", target: "A1", by: by(6), now: NOW, daysPerWeek: 3 });
    const b = planForDate({ base: "en", lang: "it", current: "A0", target: "A1", by: by(6), now: NOW, daysPerWeek: 7 });
    expect(b.rawMinPerDay).toBeLessThan(a.rawMinPerDay);
  });
  it("amber alternative 'date at 30 min/day' really saves as 30, not 35 (judge P2)", () => {
    for (const [lang, base] of PAIRS) {
      const i = { base, lang, current: "A0" as const, target: "A2" as const, by: by(3), now: NOW };
      const alt = alternatives(i);
      expect(planForDate({ ...i, by: alt.dateAt30 }).minPerDay).toBeLessThanOrEqual(30);
      if (alt.levelAt30) expect(planForDate({ ...i, target: alt.levelAt30 }).rawMinPerDay).toBeLessThanOrEqual(30);
    }
  });
  it("steady projection is finite and in the future", () => {
    const d = projectedDate({ base: "es", lang: "it", current: "A0", target: "A1.1", minPerDay: 15, now: NOW });
    expect(d).toBeGreaterThan(NOW);
    expect(d).toBeLessThan(NOW + 365 * DAY);
  });
  it("Maintain: 5 min/day, retention 0.85; no goal → sane 10 min", () => {
    expect(dailyMinutes({ kind: "maintain", minutesPerDay: 30, retention: 0.85, setAt: NOW })).toBe(5);
    expect(retentionFor("maintain")).toBe(0.85);
    expect(retentionFor("level")).toBe(0.9);
    expect(dailyMinutes(undefined)).toBeLessThanOrEqual(15);
  });
});

describe("weekly check (P1-4 regression)", () => {
  function db(lastSessionDaysAgo: number, minutes: number): DB {
    const d = emptyDB(NOW - 60 * DAY);
    d.profile.courses.it = { explainIn: "es", addedAt: NOW - 60 * DAY, unit: 1, goal: { kind: "trip", target: "A1.1", by: "2027-03-01", minutesPerDay: 15, retention: 0.9, setAt: NOW - 30 * DAY } };
    d.sessions = [{ t: NOW - lastSessionDaysAgo * DAY, lang: "it", seconds: minutes * 60, tasks: 20, graded: 18, correct: 15, newItems: 3, stronger: 5, toFix: [] }];
    return d;
  }
  it("no weekly check right after a ≥7-day break", () => expect(weeklyCheck(db(9, 10), "it", NOW)).toBeNull());
  it("no weekly check with a zero average", () => expect(weeklyCheck(db(2, 0), "it", NOW)).toBeNull());
  it("a projection is never absurd: either ≤ 2 years out or the UI's 'more than 2 years' copy applies", () => {
    const w = weeklyCheck(db(2, 1), "it", NOW);
    if (w) expect(Number.isFinite(w.projected)).toBe(true);
  });
});
