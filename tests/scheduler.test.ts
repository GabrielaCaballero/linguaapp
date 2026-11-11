import { describe, expect, it } from "vitest";
import { newCard, ratingFor, replay, retrievability, rollTo4am, schedule, seededCard } from "@/lib/scheduler";
import { DAY } from "@/lib/dates";

const NOW = new Date(2026, 10, 12, 18, 30).getTime();

describe("rating map", () => {
  it("wrong → Again", () => expect(ratingFor("wrong", "sure")).toBe(1));
  it("almost → Hard", () => expect(ratingFor("almost", "sure")).toBe(2));
  it("right + guessing → Hard", () => expect(ratingFor("correct", "guess")).toBe(2));
  it("right + think so → Good", () => expect(ratingFor("correct", "think")).toBe(3));
  it("right + no chip → Good", () => expect(ratingFor("correct")).toBe(3));
  it("right + sure → Easy", () => expect(ratingFor("correct", "sure")).toBe(4));
  it("LLM-raised never above Hard", () => {
    expect(ratingFor("correct", "sure", "llm")).toBe(2);
    expect(ratingFor("almost", undefined, "llm")).toBe(2);
  });
  it("I was right → Good", () => expect(ratingFor("correct", "sure", "override")).toBe(3));
});

describe("FSRS schedule", () => {
  it("intervals grow after Good", () => {
    let c = newCard("x", "it", NOW);
    c = schedule(c, 3, NOW);
    const first = c.due - NOW;
    const t2 = c.due + 1000;
    c = schedule(c, 3, t2);
    expect(c.due - t2).toBeGreaterThan(first);
  });
  it("Again shrinks stability", () => {
    let c = newCard("x", "it", NOW);
    c = schedule(c, 3, NOW);
    c = schedule(c, 3, c.due + 1000);
    const s = c.stability;
    c = schedule(c, 1, c.due + 1000);
    expect(c.stability).toBeLessThan(s);
    expect(c.lapses).toBe(1);
  });
  it("due dates of a day or more roll to 04:00", () => {
    let c = newCard("x", "it", NOW);
    c = schedule(c, 3, NOW);
    const d = new Date(c.due);
    expect(d.getHours()).toBe(4);
    expect(d.getMinutes()).toBe(0);
    expect(c.due).toBeGreaterThan(NOW);
  });
  it("a miss on a new card is due tomorrow morning", () => {
    const c = schedule(newCard("x", "it", NOW), 1, NOW);
    expect(c.due).toBeLessThanOrEqual(rollTo4am(NOW + 2 * DAY, NOW));
  });
  it("lower retention → longer intervals", () => {
    let a = newCard("x", "it", NOW);
    let b = newCard("x", "it", NOW);
    a = schedule(schedule(a, 3, NOW, 0.9), 3, NOW + 3 * DAY, 0.9);
    b = schedule(schedule(b, 3, NOW, 0.85), 3, NOW + 3 * DAY, 0.85);
    expect(b.due).toBeGreaterThanOrEqual(a.due);
  });
  it("retrievability is 0 for new, high just after review", () => {
    const c = newCard("x", "it", NOW);
    expect(retrievability(c, NOW)).toBe(0);
    const r = schedule(c, 3, NOW);
    expect(retrievability(r, NOW + 1000)).toBeGreaterThan(0.9);
  });
  it("seeded cards: stability 7, due in week 1", () => {
    const s = seededCard("x", "it", NOW, 3);
    expect(s.stability).toBe(7);
    expect(s.due - NOW).toBeLessThanOrEqual(8 * DAY);
    expect(s.due - NOW).toBeGreaterThan(DAY);
  });
  it("replay builds a sensible card from history", () => {
    const c = replay("x", "it", [{ t: NOW, rating: 3 }, { t: NOW + 2 * DAY, rating: 3 }, { t: NOW + 8 * DAY, rating: 1 }], NOW);
    expect(c.reps).toBe(3);
    expect(c.lapses).toBe(1);
  });
});
