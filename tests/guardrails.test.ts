import { describe, expect, it } from "vitest";
import { applyGuardrails } from "@/lib/llm/guardrails";
import { ratingFor } from "@/lib/scheduler";

const ok = (over = {}) => ({ verdict: "acceptable", score: 0.8, errors: [], corrected: "Abito a Roma", explanation: "Valid alternative.", confidence: 0.9, ...over });

describe("LLM guardrails (mocked provider responses)", () => {
  it("raises wrong → almost (max one step), scheduled as Hard", () => {
    const r = applyGuardrails("wrong", "Abito a Roma", ok());
    expect(r).toMatchObject({ kind: "explain", verdict: "almost", raised: true });
    expect(ratingFor("almost", "sure", "llm")).toBe(2);
  });
  it("raises almost → correct; still Hard at most", () => {
    const r = applyGuardrails("almost", "citta", ok({ verdict: "correct" }));
    expect(r).toMatchObject({ verdict: "correct", raised: true });
    expect(ratingFor("correct", "sure", "llm")).toBe(2);
  });
  it("never lowers: almost + LLM wrong stays almost", () => {
    const r = applyGuardrails("almost", "la zio", ok({ verdict: "wrong", errors: [{ quote: "la", type: "article", fix: "lo" }], corrected: "lo zio" }));
    expect(r).toMatchObject({ kind: "explain", verdict: "almost", raised: false });
  });
  it("exact matches never reach the LLM", () => {
    expect(applyGuardrails("correct", "ciao", ok()).kind).toBe("discard");
  });
  it("drops hallucinated quotes; all dropped + wrong → discard", () => {
    const r = applyGuardrails("wrong", "sono andato", ok({ verdict: "wrong", errors: [{ quote: "ho andato", type: "verb", fix: "sono" }], corrected: "x" }));
    expect(r).toEqual({ kind: "discard", why: "hallucinated-quotes" });
  });
  it("inconsistent: corrected equals the answer but verdict wrong → discard", () => {
    const r = applyGuardrails("wrong", "Ich heiße Lena", ok({ verdict: "wrong", corrected: "ich heiße lena" }));
    expect(r.kind).toBe("discard");
  });
  it("low confidence → 'Claude isn't sure'", () => {
    expect(applyGuardrails("wrong", "x", ok({ confidence: 0.4 })).kind).toBe("unsure");
  });
  it("malformed JSON → discard", () => {
    expect(applyGuardrails("wrong", "x", { foo: 1 }).kind).toBe("discard");
    expect(applyGuardrails("wrong", "x", null).kind).toBe("discard");
  });
});
