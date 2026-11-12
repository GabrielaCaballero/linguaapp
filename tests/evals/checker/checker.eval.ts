// Category: checker. One eval case per row of cases.ts, graded deterministically.
import { describe, expect, it } from "vitest";
import { check } from "@/lib/check";
import { lexicon } from "../lib/fixtures";
import { CASES } from "./cases";

describe("checker", () => {
  it("table has ≥150 cases and unique ids", () => {
    expect(CASES.length).toBeGreaterThanOrEqual(150);
    expect(new Set(CASES.map((c) => c.id)).size).toBe(CASES.length);
  });

  for (const c of CASES) {
    it(`${c.id} [${c.tag}] ${c.item.target} ← "${c.input}"`, () => {
      for (const base of ["es", "en"] as const) {
        const r = check(c.input, c.item, { lexicon: lexicon(c.item.lang), base });
        const allowed = Array.isArray(c.verdict) ? c.verdict : [c.verdict];
        const ctx = `base=${base} got ${JSON.stringify(r)}`;
        expect(allowed, ctx).toContain(r.verdict);
        if (c.reason) expect(r.reason, ctx).toBe(c.reason);
        if (c.note) expect(r.note, ctx).toBe(c.note);
        if (c.wantHas) expect(r.detail?.want ?? "", ctx).toContain(c.wantHas);
        if (c.feedback) expect(r.feedback ?? "", ctx).not.toBe("");
        expect(r.score, ctx).toBeGreaterThanOrEqual(0);
        expect(r.score, ctx).toBeLessThanOrEqual(1);
        if (r.verdict === "correct") expect(r.score).toBe(1);
        if (r.verdict === "wrong") expect(r.score).toBe(0);
      }
    });
  }
});
