import { describe, expect, it } from "vitest";
import { alternatives, feasibility, needMinutes, planForDate, projectedDate, nextLevel } from "@/lib/goals";
import { DAY } from "@/lib/dates";

const NOW = new Date(2026, 10, 12).getTime();
const WEEK = 7 * DAY;

describe("goals → minutes/day (spec §4.5, 02-product worked examples)", () => {
  it("Mateo: es→it from zero, trip (A1.1) in ~4 months → 25 min/day, Steady", () => {
    const p = planForDate({ base: "es", lang: "it", current: "A0", target: "A1.1", by: NOW + 17.3 * WEEK, now: NOW });
    // 45 h × 0.7 × 60 = 1890 min over 17.3 weeks × 5 days ≈ 21.8 → 25
    expect(p.needMin).toBeCloseTo(1890);
    expect(p.minPerDay).toBe(25);
    expect(p.label).toBe("steady");
  });

  it("Emma: en→de from zero, A2 in 7 months → very demanding, clamped to 90", () => {
    const p = planForDate({ base: "en", lang: "de", current: "A0", target: "A2", by: NOW + 30.3 * WEEK, now: NOW });
    // 190 × 1.25 × 60 = 14250 min / (30.3 × 5) ≈ 94
    expect(p.rawMinPerDay).toBeGreaterThan(90);
    expect(p.minPerDay).toBe(90);
    expect(p.label).toBe("demanding");
    const alt = alternatives({ base: "en", lang: "de", current: "A0", target: "A2", by: NOW + 30.3 * WEEK, now: NOW });
    expect(alt.levelAt30).toBe("A1.1");
    expect(alt.dateAt30).toBeGreaterThan(NOW + 30.3 * WEEK);
  });

  it("Ana: de A2 → B1 in 9 months with 3 h/week of classes", () => {
    const weeks = 39;
    const need = needMinutes({ base: "es", lang: "de", current: "A2", target: "B1", weeks, classHoursPerWeek: 3 });
    // (375 − 140) × 1.3 × 60 = 18330 − 3 × 39 × 60 = 7020 → 11310
    expect(need).toBeCloseTo(11310);
    const p = planForDate({ base: "es", lang: "de", current: "A2", target: "B1", by: NOW + weeks * WEEK, now: NOW, classHoursPerWeek: 3 });
    expect(p.minPerDay).toBe(60);
  });

  it("classes can cover the whole gap → 0 needed, minimum 5", () => {
    const p = planForDate({ base: "en", lang: "it", current: "A1.2", target: "A1", by: NOW + 20 * WEEK, now: NOW, classHoursPerWeek: 4 });
    expect(p.needMin).toBe(0);
    expect(p.minPerDay).toBe(5);
    expect(p.alreadyThere).toBe(true);
  });

  it("Priya (steady 10 min/day, en→it) → A1.1 in roughly a year", () => {
    const d = projectedDate({ base: "en", lang: "it", current: "A0", target: "A1.1", minPerDay: 10, now: NOW });
    const weeks = (d - NOW) / WEEK;
    expect(weeks).toBeCloseTo(54, 0);
  });

  it("more practice days → fewer minutes/day", () => {
    const a = planForDate({ base: "es", lang: "it", current: "A0", target: "A1", by: NOW + 26 * WEEK, now: NOW, daysPerWeek: 5 });
    const b = planForDate({ base: "es", lang: "it", current: "A0", target: "A1", by: NOW + 26 * WEEK, now: NOW, daysPerWeek: 7 });
    expect(b.minPerDay).toBeLessThan(a.minPerDay);
  });

  it("labels", () => {
    expect(feasibility(15)).toBe("relaxed");
    expect(feasibility(30)).toBe("steady");
    expect(feasibility(45)).toBe("ambitious");
    expect(feasibility(50)).toBe("demanding");
  });

  it("next level", () => {
    expect(nextLevel("A0")).toBe("A1.1");
    expect(nextLevel("A1.2")).toBe("A1");
    expect(nextLevel("A2")).toBe("A2");
  });
});
