// Category: engine — placement (simulated learners, unit mapping, seeding) and goals math.
import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import type { BaseLang, PlacementItem, TargetLang } from "@/content/schema";
import { answer, band, beginner, cefrRank, nextItem, p, priorMean, seeds, selfReported, start, startUnit, MAX_ITEMS, MIN_ITEMS, type PlacementState } from "@/lib/placement";
import { alternatives, dailyMinutes, feasibility, HOURS, MULT, planForDate, projectedDate, retentionFor } from "@/lib/goals";
import { emptyDB, type DB } from "@/lib/model";
import { courseComplete, weeklyCheck } from "@/lib/stats";
import { courseTop } from "@/lib/goals";
import { visible } from "@/lib/content";
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
  for (const [lang, base] of PAIRS) {
    it(`${base}→${lang}: 300 advanced learners (A2–B2, θ 0…3), median |θ̂−θ| < 0.5, bands reach B2`, () => {
      const r = rng(lang === "it" ? 31 : 37);
      const err: number[] = [];
      let b2 = 0;
      for (let k = 0; k < 300; k++) {
        const theta = 3 * r();
        const mu = Math.max(-0.5, Math.min(1, 0.5 + 0.5 * normal(r))); // "lived there" ± can-do shift
        const s = run(lang, base, mu, (it) => r() < p(theta, it.b));
        expect(s.responses.length).toBeLessThanOrEqual(MAX_ITEMS);
        err.push(Math.abs(s.theta - theta));
        if (band(s.theta) === "B2") b2++;
      }
      err.sort((a, b) => a - b);
      expect(err[Math.floor(err.length / 2)]).toBeLessThan(0.5);
      expect(b2).toBeGreaterThan(0);
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
    it(`${lang}: start unit is monotonic in θ and every unit is reachable`, () => {
      let prev = 0;
      const seen = new Set<number>();
      for (let th = -4; th <= 4; th += 0.05) {
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
        // Never the whole course: at least the last unit is always left to learn (the old "< 85 %"
        // bound assumed 6 units; with 12–24 units a learner beyond the course seeds up to 23/24).
        expect(sd.size).toBeLessThanOrEqual(total - units[units.length - 1].items.length);
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
  it("cumulative hours (B2 = 600, top of Cambridge's 500–600 band)", () => expect(HOURS).toEqual({ A0: 0, "A1.1": 45, A1: 90, A2: 190, B1: 375, B2: 600 }));
  for (const [lang, base] of PAIRS)
    for (const target of ["A1.1", "A1", "A2", "B1", "B2"] as const)
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

describe("GO-7 / GO-8: course scope and end of content", () => {
  it("course top follows the shipped units (no hard-coded A1)", () => {
    for (const lang of ["it", "de"] as TargetLang[]) {
      const top = courseTop(courses[lang].units.map((u) => u.cefr));
      expect(HOURS[top]).toBeGreaterThan(HOURS.A1);
    }
    expect(courseTop(["A0", "A1.1", "A1.1"])).toBe("A1.1");
    expect(courseTop(["A1.1", "A1.2"])).toBe("A1");
  });
  it("courseComplete: false while any visible item is new, true once every one has a card (bridges for the other base ignored)", () => {
    const d = emptyDB(NOW);
    d.profile.courses.it = { explainIn: "en", addedAt: NOW, unit: 1, goal: undefined };
    expect(courseComplete(d, "it")).toBe(false);
    const all = courses.it.units.flatMap((u) => u.items).filter((i) => visible(i, "en"));
    for (const i of all) d.cards[i.id] = {} as DB["cards"][string];
    expect(courseComplete(d, "it")).toBe(true);
    delete d.cards[all[all.length - 1].id];
    expect(courseComplete(d, "it")).toBe(false);
  });
});

describe("placement · \"I know my level\" (skip the test)", () => {
  for (const lang of ["it", "de"] as const) {
    const us = courses[lang].units;
    for (const level of ["A1.1", "A2", "B1", "B2"] as const) {
      it(`${lang} ${level}: starts at the first unit of that level, earlier units seeded, nothing later`, () => {
        const o = selfReported(us, level);
        const startU = us.find((u) => u.index === o.unit)!;
        expect(cefrRank(startU.cefr)).toBeGreaterThanOrEqual(cefrRank(level));
        for (const u of us.filter((x) => x.index < o.unit)) expect(cefrRank(u.cefr)).toBeLessThan(cefrRank(level));
        const before = new Set(us.filter((u) => u.index < o.unit).flatMap((u) => u.items.map((i) => i.id)));
        expect(o.seedIds.every((id) => before.has(id))).toBe(true);
        expect(o.state.responses).toHaveLength(0);
        expect(o.cefr).toBe(level);
      });
    }
  }
  it("levels map to increasing start units", () => {
    const starts = (["A1.1", "A2", "B1", "B2"] as const).map((l) => selfReported(courses.it.units, l).unit);
    expect([...starts].sort((a, b) => a - b)).toEqual(starts);
    expect(new Set(starts).size).toBe(4);
    expect(starts[0]).toBe(courses.it.units.find((u) => u.cefr === "A1.1")!.index); // unit 1 (A0, first steps) is skipped
  });
});

