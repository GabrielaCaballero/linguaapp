import { describe, expect, it } from "vitest";
import { answer, band, beginner, nextItem, p, priorMean, seeds, start, startUnit, unitDifficulty, MAX_ITEMS, MIN_ITEMS, type PlacementState } from "@/lib/placement";
import { courses } from "@/content";
import { itCourse } from "./fixtures/mini-course";
import type { PlacementItem } from "@/content/schema";

// Deterministic PRNG so the simulation is reproducible.
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}
function normal(r: () => number) {
  const u = Math.max(1e-9, r());
  const v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// A realistic 30-item bank (6 per band, b spread ±0.4 within band).
function bank(r: () => number): PlacementItem[] {
  const centers = [-2.5, -1.5, -0.5, 0.5, 1.5];
  const skills: PlacementItem["skill"][] = ["vocab", "vocab", "grammar", "grammar", "listening", "reading"];
  const out: PlacementItem[] = [];
  centers.forEach((c, bi) =>
    skills.forEach((skill, k) => out.push({ id: `x-p-${bi}${k}`, lang: "de", cefr: "A1.1", b: c + (r() - 0.5) * 0.8, skill, kind: "mcq" })),
  );
  return out;
}

function simulate(theta: number, items: PlacementItem[], r: () => number, mu: number): PlacementState {
  let s = start(mu);
  while (!s.done) {
    const it = nextItem(items, s);
    if (!it) break;
    s = answer(s, it, r() < p(theta, it.b), "en", items.length);
  }
  return s;
}

describe("placement engine", () => {
  it("500 simulated learners: median |θ̂−θ| < 0.5 within 8–15 items", () => {
    const r = rng(42);
    const items = bank(r);
    const errs: number[] = [];
    const lens: number[] = [];
    for (let k = 0; k < 500; k++) {
      const theta = -3 + r() * 5; // learners from below A0 to B1
      // self-report prior: nearest experience level to a noisy self-image
      const self = theta + normal(r) * 0.8;
      const mu = [-2.5, -1.5, -0.5, 0.5].reduce((a, b) => (Math.abs(b - self) < Math.abs(a - self) ? b : a));
      const s = simulate(theta, items, r, mu);
      errs.push(Math.abs(s.theta - theta));
      lens.push(s.responses.length);
    }
    errs.sort((a, b) => a - b);
    const median = errs[Math.floor(errs.length / 2)];
    expect(median).toBeLessThan(0.5);
    expect(Math.min(...lens)).toBeGreaterThanOrEqual(MIN_ITEMS);
    expect(Math.max(...lens)).toBeLessThanOrEqual(MAX_ITEMS);
  });

  it("always wrong ends at A0", () => {
    let s = start(priorMean("classes"));
    while (!s.done) s = answer(s, nextItem(itCourse.placement, s)!, false, "es", itCourse.placement.length);
    expect(band(s.theta)).toBe("A0");
  });

  it("always right ends at B1 or above (the grid reaches B2; the fixture bank stops at B1)", () => {
    let s = start(priorMean("bit"));
    while (!s.done) s = answer(s, nextItem(itCourse.placement, s)!, true, "es", itCourse.placement.length);
    expect(["B1", "B2"]).toContain(band(s.theta));
  });

  it("rotates skills", () => {
    let s = start(-0.5);
    const skills: string[] = [];
    for (let k = 0; k < 6; k++) {
      const it = nextItem(itCourse.placement, s)!;
      skills.push(it.skill);
      s = answer(s, it, k % 2 === 0, "es");
    }
    for (let k = 1; k < skills.length; k++) expect(skills[k]).not.toBe(skills[k - 1]);
  });

  it("false friends weigh 1.5 for es→it only", () => {
    const ff = itCourse.placement.find((x) => x.falseFriend)!;
    expect(answer(start(0), ff, true, "es").responses[0].weight).toBe(1.5);
    expect(answer(start(0), ff, true, "en").responses[0].weight).toBe(1);
  });

  it("I'm a beginner stops immediately", () => {
    const s = beginner(start(-0.5));
    expect(s.done).toBe(true);
    expect(band(s.theta)).toBe("A0");
  });

  it("prior from self-report", () => {
    expect(priorMean("never")).toBe(-2.5);
    expect(priorMean("classes", [1, 1, 1])).toBe(0);
    expect(priorMean("lived", [-1, -1, -1])).toBe(0);
  });

  it("band cut points", () => {
    expect(band(-2.1)).toBe("A0");
    expect(band(-1.5)).toBe("A1.1");
    expect(band(-0.2)).toBe("A1.2");
    expect(band(0.5)).toBe("A2");
    expect(band(1.2)).toBe("B1");
    expect(band(2.4)).toBe("B2");
  });

  it("fixture: start unit from θ, conservative with SE", () => {
    expect(startUnit(itCourse.units, -3, 0.5)).toEqual({ index: 1, beyond: false });
    expect(startUnit(itCourse.units, -1.6, 0.4).index).toBe(2);
    expect(startUnit(itCourse.units, 2, 0.4).beyond).toBe(true);
  });

  it("seeds only units strictly before the start unit (bridges excluded)", () => {
    const s = start(0);
    const ids = seeds(itCourse.units, 2, itCourse.placement, s);
    expect(ids).toContain("it-u01-ciao");
    expect(ids).not.toContain("it-u02-caffe");
    expect(ids).not.toContain("it-u01-burro");
  });
});

// P0-2 (judge): with the REAL content (units 2–6 all tagged A1.1), placement above A1.1 must
// not jump to Unit 6 and seed the whole course.
describe("placement → units with the real content", () => {
  for (const lang of ["it", "de"] as const) {
    const us = courses[lang].units;
    const last = Math.max(...us.map((u) => u.index));
    it(`${lang}: unit difficulties rise along the path`, () => {
      const b = unitDifficulty(us);
      const xs = [...us].sort((a, c) => a.index - c.index).map((u) => b.get(u.index)!);
      for (let k = 1; k < xs.length; k++) expect(xs[k]).toBeGreaterThan(xs[k - 1]);
    });
    it(`${lang}: an A1.2 learner (θ −0.5, SE 0.5) starts mid-course, not at the last unit`, () => {
      const su = startUnit(us, -0.5, 0.5);
      expect(su.index).toBeGreaterThan(1);
      expect(su.index).toBeLessThan(last);
      const ids = seeds(us, su.index, courses[lang].placement, start(-0.5));
      const startItems = us.find((u) => u.index === su.index)!.items.map((i) => i.id);
      for (const id of startItems) expect(ids).not.toContain(id);
      const total = us.reduce((n, u) => n + u.items.length, 0);
      expect(ids.length).toBeLessThan(total * 0.75);
    });
    it(`${lang}: an A1.1 learner starts at unit 2 or 3`, () => {
      expect([2, 3]).toContain(startUnit(us, -1.6, 0.5).index);
    });
    it(`${lang}: every unit is reachable by some θ`, () => {
      const reached = new Set<number>();
      for (let th = -4; th <= 4; th += 0.05) reached.add(startUnit(us, th, 0.45).index); // grid reaches 4 since B2
      for (const u of us) expect(reached.has(u.index)).toBe(true);
    });
  }
});
