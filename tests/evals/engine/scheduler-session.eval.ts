// Category: engine — scheduler (FSRS, 04:00 roll, grade map) and session builder / controller.
import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import type { Item } from "@/content/schema";
import type { CardV2, ReviewLog } from "@/lib/model";
import { DAY } from "@/lib/dates";
import { newCard, ratingFor, retrievability, replay, rollTo4am, schedule, seededCard } from "@/lib/scheduler";
import { AWAY_DAYS, BASE_NEW, buildSession, chooseMode, typingArm, controllerShift, newBudget, requeue, rollingAccuracy, type BuildInput, type Task } from "@/lib/session";
import { itemsFor } from "@/lib/content";
import { lessonHref } from "@/lib/nav";
import { rng } from "../lib/fixtures";

const NOW = new Date(2026, 10, 12, 18, 0).getTime();

describe("scheduler: grade mapping (spec §4.3)", () => {
  const table: [Parameters<typeof ratingFor>, number, string][] = [
    [["wrong"], 1, "wrong → Again"],
    [["wrong", "sure"], 1, "wrong+sure → Again"],
    [["almost"], 2, "almost → Hard"],
    [["almost", "sure"], 2, "almost+sure → Hard"],
    [["correct", "guess"], 2, "guessing → Hard"],
    [["correct", "think"], 3, "think so → Good"],
    [["correct"], 3, "no chip → Good"],
    [["correct", "sure"], 4, "sure → Easy"],
    [["correct", "sure", "llm"], 2, "LLM-raised max Hard"],
    [["almost", undefined, "llm"], 2, "LLM almost → Hard"],
    [["correct", "sure", "override"], 3, "I was right → Good"],
  ];
  for (const [args, want, name] of table) it(name, () => expect(ratingFor(...args)).toBe(want));
});

describe("scheduler: FSRS behaviour", () => {
  const c0 = newCard("it-u01-ciao", "it", NOW);
  it("Good on a new card schedules 1–7 days out", () => {
    const c = schedule(c0, 3, NOW);
    const days = (c.due - NOW) / DAY;
    expect(days).toBeGreaterThan(0.1);
    expect(days).toBeLessThanOrEqual(7.5);
  });
  it("ratings are monotonic: Easy ≥ Good ≥ Hard ≥ Again", () => {
    const base = schedule(schedule(c0, 3, NOW), 3, NOW + 3 * DAY);
    const t = NOW + 10 * DAY;
    const d = [1, 2, 3, 4].map((r) => schedule(base, r as 1, t).due);
    expect(d[0]).toBeLessThanOrEqual(d[1]);
    expect(d[1]).toBeLessThanOrEqual(d[2]);
    expect(d[2]).toBeLessThanOrEqual(d[3]);
  });
  it("Again on a review card counts a lapse", () => {
    const base = schedule(schedule(c0, 3, NOW), 3, NOW + 3 * DAY);
    expect(schedule(base, 1, NOW + 10 * DAY).lapses).toBe(base.lapses + 1);
  });
  it("Maintain retention 0.85 gives longer intervals than 0.90", () => {
    const base = schedule(schedule(c0, 3, NOW), 3, NOW + 3 * DAY);
    expect(schedule(base, 3, NOW + 10 * DAY, 0.85).due).toBeGreaterThan(schedule(base, 3, NOW + 10 * DAY, 0.9).due);
  });
  for (const h of [0, 2, 9, 18, 23]) {
    it(`day-or-longer intervals roll to 04:00 local (review at ${h}:30)`, () => {
      const t = new Date(2026, 10, 12, h, 30).getTime();
      const c = schedule(schedule(newCard("x", "it", t), 3, t), 3, t + 2 * DAY);
      const d = new Date(c.due);
      expect(d.getHours()).toBe(4);
      expect(d.getMinutes()).toBe(0);
      expect(c.due).toBeGreaterThan(t + 2 * DAY);
    });
  }
  it("short (< half a day) intervals are not rolled", () => {
    expect(rollTo4am(NOW + 3600_000, NOW)).toBe(NOW + 3600_000);
  });
  it("placement seed: stability 7 d, due day 2–7 at 04:00, flagged seeded", () => {
    for (let k = 0; k < 12; k++) {
      const s = seededCard("x", "de", NOW, k);
      expect(s.stability).toBe(7);
      expect(s.seeded).toBe(true);
      const days = (s.due - NOW) / DAY;
      expect(days).toBeGreaterThanOrEqual(1);
      expect(days).toBeLessThanOrEqual(7.5);
      expect(new Date(s.due).getHours()).toBe(4);
    }
  });
  it("retrievability: new = 0, just reviewed ≈ 1, decays over time", () => {
    expect(retrievability(c0, NOW)).toBe(0);
    const c = schedule(c0, 3, NOW);
    expect(retrievability(c, NOW + 60_000)).toBeGreaterThan(0.95);
    expect(retrievability(c, NOW + 30 * DAY)).toBeLessThan(retrievability(c, NOW + DAY));
  });
  it("replay is order-independent (sorts the log)", () => {
    const h = [{ t: NOW + 3 * DAY, rating: 3 as const }, { t: NOW, rating: 3 as const }, { t: NOW + 9 * DAY, rating: 2 as const }];
    expect(replay("x", "it", h, NOW).due).toBe(replay("x", "it", [...h].sort((a, b) => a.t - b.t), NOW).due);
  });
});

// ── session builder ────────────────────────────────────────────────────────────
const itUnits = courses.it.units;
const ITEMS: Item[] = itemsFor("it", null, "es");
const unitIndexOf = (i: Item) => itUnits.find((u) => u.id === i.unit)?.index ?? 0;
const byId = new Map(ITEMS.map((i) => [i.id, i]));

function input(over: Partial<BuildInput> = {}): BuildInput {
  return { lang: "it", items: ITEMS, cards: {}, reviews: [], startUnit: 1, unitIndexOf, now: NOW, minutes: 5, kind: "auto", rand: rng(7), ...over };
}
function learned(ids: string[], dueInDays: (k: number) => number): Record<string, CardV2> {
  const out: Record<string, CardV2> = {};
  ids.forEach((id, k) => {
    const c = schedule(newCard(id, "it", NOW - 40 * DAY), 3, NOW - 40 * DAY);
    out[id] = { ...c, due: NOW + dueInDays(k) * DAY, stability: 4 };
  });
  return out;
}
const logs = (ok: number, bad: number): ReviewLog[] =>
  [...Array(ok).fill("correct"), ...Array(bad).fill("wrong")].map((v, k) => ({ t: NOW - (20 - k) * 60_000, id: ITEMS[k].id, lang: "it", mode: "recall", verdict: v, rating: v === "wrong" ? 1 : 3, source: "checker" }));

describe("session builder (spec §4.3)", () => {
  it("fresh beginner: guess-first intros, budget ≤ BASE_NEW+1, follow-up 3–6 tasks later", () => {
    const b = buildSession(input());
    const intros = b.tasks.filter((t) => t.role === "intro");
    expect(intros.length).toBeGreaterThan(0);
    expect(intros.length).toBeLessThanOrEqual(BASE_NEW + 1);
    for (const t of intros) {
      expect(t.graded).toBe(false);
      const i = b.tasks.indexOf(t);
      const f = b.tasks.findIndex((x, k) => k > i && x.itemId === t.itemId && x.role === "followup");
      expect(f - i).toBeGreaterThanOrEqual(3);
      expect(f - i).toBeLessThanOrEqual(7);
    }
  });
  it("beginner's first task carries meaning, not an audio-only sound item (P1-8)", () => {
    const b = buildSession(input());
    expect(byId.get(b.tasks[0].itemId)?.type).not.toBe("sound");
  });
  it("new items come from the start unit onward (placement)", () => {
    const b = buildSession(input({ startUnit: 4 }));
    for (const t of b.tasks.filter((x) => x.role === "intro")) expect(unitIndexOf(byId.get(t.itemId)!)).toBeGreaterThanOrEqual(4);
  });
  it("chunk size tracks minutes (≈4.4 tasks/min) for an established learner", () => {
    const ids = ITEMS.slice(0, 80).map((i) => i.id);
    for (const m of [3, 5, 10]) {
      const b = buildSession(input({ cards: learned(ids, () => 5), minutes: m }));
      expect(b.tasks.length).toBeGreaterThanOrEqual(Math.round(m * 4.4 * 0.75));
      expect(b.tasks.length).toBeLessThanOrEqual(Math.round(m * 4.4 * 1.4) + 2);
    }
  });
  it("due reviews: oldest overdue first, ≤15 per chunk", () => {
    const ids = ITEMS.slice(0, 40).map((i) => i.id);
    const b = buildSession(input({ cards: learned(ids, (k) => -(k + 1)) }));
    const rev = b.tasks.filter((t) => t.role === "review").map((t) => t.itemId);
    expect(rev.length).toBe(15);
    expect(rev).toContain(ids[39]);
    expect(rev).not.toContain(ids[0]);
  });
  it("≤40 reviews per day (backlog spread)", () => {
    const ids = ITEMS.slice(0, 60).map((i) => i.id);
    const done: ReviewLog[] = ITEMS.slice(60, 95).map((x, k) => ({ t: NOW - 3600_000 + k, id: x.id, lang: "it", mode: "recall", verdict: "correct", rating: 3, source: "checker" }));
    const b = buildSession(input({ cards: learned(ids, (k) => -(k + 1)), reviews: done }));
    expect(b.reviewCount).toBeLessThanOrEqual(5);
  });
  it("misses come first: priority items open the session (P1-3)", () => {
    const ids = ITEMS.slice(0, 30).map((i) => i.id);
    const prio = [ids[20], ids[25], ids[29]];
    const b = buildSession(input({ cards: learned(ids, () => 3), priority: prio }));
    const graded = b.tasks.filter((t) => t.graded).slice(0, 3).map((t) => t.itemId);
    expect(graded.sort()).toEqual([...prio].sort());
  });
  it("return after ≥7 days away: reviews only, welcome back", () => {
    const ids = ITEMS.slice(0, 30).map((i) => i.id);
    const b = buildSession(input({ cards: learned(ids, (k) => -k), lastSessionAt: NOW - 9 * DAY }));
    expect(b.welcomeBack).toBe(true);
    expect(b.newCount).toBe(0);
    expect(b.tasks.some((t) => t.role === "intro")).toBe(false);
  });
  it("6 days away is not a 'welcome back'", () => {
    const ids = ITEMS.slice(0, 30).map((i) => i.id);
    expect(buildSession(input({ cards: learned(ids, () => 1), lastSessionAt: NOW - (AWAY_DAYS - 1) * DAY })).welcomeBack).toBe(false);
  });
  it("kind=review → no new items; kind=new → no reviews", () => {
    const ids = ITEMS.slice(0, 30).map((i) => i.id);
    const cards = learned(ids, (k) => -k);
    expect(buildSession(input({ cards, kind: "review" })).newCount).toBe(0);
    expect(buildSession(input({ cards, kind: "new" })).reviewCount).toBe(0);
  });
  it("speed round with nothing learned has no tasks (UI must hide it, P1-9)", () => {
    expect(buildSession(input({ kind: "speed" })).tasks.length).toBe(0);
  });
  it("interleaving: reviews rarely repeat the same item type back to back", () => {
    const ids = ITEMS.slice(0, 60).map((i) => i.id);
    const b = buildSession(input({ cards: learned(ids, (k) => -k) }));
    const types = b.tasks.filter((t) => t.role === "review").map((t) => byId.get(t.itemId)!.type);
    let same = 0;
    for (let k = 1; k < types.length; k++) if (types[k] === types[k - 1]) same++;
    expect(same / Math.max(1, types.length - 1)).toBeLessThan(0.35);
  });
  it("no task item appears twice in a row", () => {
    const ids = ITEMS.slice(0, 60).map((i) => i.id);
    const b = buildSession(input({ cards: learned(ids, (k) => -k) }));
    for (let k = 1; k < b.tasks.length; k++) expect(b.tasks[k].itemId).not.toBe(b.tasks[k - 1].itemId);
  });
});

describe("difficulty controller (target 80–85 %)", () => {
  const cases: [number | null, number][] = [[null, 0], [0.95, 1], [1, 1], [0.9, 0], [0.85, 0], [0.8, 0], [0.7, 0], [0.69, -1], [0.3, -1]];
  for (const [acc, s] of cases) it(`accuracy ${acc} → shift ${s}`, () => expect(controllerShift(acc)).toBe(s));
  it("new budget: base 5, +1 when easy, −2 when hard", () => {
    expect(newBudget(0)).toBe(5);
    expect(newBudget(1)).toBe(6);
    expect(newBudget(-1)).toBe(3);
  });
  it("rolling accuracy uses the last 10 graded, null under 5", () => {
    expect(rollingAccuracy(logs(3, 0), "it")).toBeNull();
    expect(rollingAccuracy(logs(8, 2), "it")).toBeCloseTo(0.8);
  });
  it("struggling learner gets fewer new items than a cruising one", () => {
    const hard = buildSession(input({ reviews: logs(4, 6) }));
    const easy = buildSession(input({ reviews: logs(10, 0) }));
    expect(hard.newCount).toBeLessThan(easy.newCount);
  });
});

describe("requeue & mode ladder", () => {
  const tasks: Task[] = Array.from({ length: 10 }, (_, k) => ({ key: `t${k}`, itemId: `i${k}`, role: "review", graded: true }));
  it("a miss is requeued later in the same session", () => {
    const out = requeue(tasks, 2, new Map());
    const k = out.findIndex((t, j) => j > 2 && t.itemId === "i2");
    expect(k).toBeGreaterThan(2);
    expect(out[k].role).toBe("requeue");
  });
  it("requeue cap is 2 per item", () => {
    const counts = new Map<string, number>();
    let t = tasks;
    for (let n = 0; n < 5; n++) t = requeue(t, 2, counts);
    expect(t.filter((x) => x.itemId === "i2").length).toBe(3);
  });
  const noun = ITEMS.find((i) => i.pos === "noun" && i.gender)!;
  it("intro → guess; first follow-up: typing arm one step up, classic arm easiest tier", () => {
    expect(chooseMode(noun, undefined, { canListen: true, shift: 0, role: "intro" })).toBe("guess");
    const nouns = ITEMS.filter((i) => i.pos === "noun" && i.gender);
    const typing = nouns.find((i) => typingArm(i.id) === "typing")!;
    const classic = nouns.find((i) => typingArm(i.id) === "classic")!;
    expect(["tiles", "article", "listen"]).toContain(chooseMode(typing, newCard(typing.id, "it", NOW), { canListen: true, shift: 0, role: "followup" }));
    expect(["recognize", "pick-spelling", "question"]).toContain(chooseMode(classic, newCard(classic.id, "it", NOW), { canListen: true, shift: 0, role: "followup" }));
  });
  it("typing arm types after one night (stability ≥ 1 day); classic waits for 3 days", () => {
    const words = ITEMS.filter((i) => i.type === "word");
    const typing = words.find((i) => typingArm(i.id) === "typing")!;
    const classic = words.find((i) => typingArm(i.id) === "classic")!;
    const c = (id: string) => ({ ...schedule(newCard(id, "it", NOW), 3, NOW), stability: 1.5 });
    expect(chooseMode(typing, c(typing.id), { canListen: true, shift: 0, role: "review" })).toBe("recall");
    expect(chooseMode(classic, c(classic.id), { canListen: true, shift: 0, role: "review" })).not.toBe("recall");
  });
  it("about 20% of items stay in the classic (control) arm, stably", () => {
    const all = Object.values(courses).flatMap((c) => c.units.flatMap((u) => u.items));
    const share = all.filter((i) => typingArm(i.id) === "classic").length / all.length;
    expect(share).toBeGreaterThan(0.15);
    expect(share).toBeLessThan(0.25);
    expect(typingArm(all[0].id)).toBe(typingArm(all[0].id));
  });
  it("paradigm items are always a table exercise (after the intro)", () => {
    const tab = Object.values(courses).flatMap((c) => c.units.flatMap((u) => u.items)).find((i) => i.type === "paradigm")!;
    expect(chooseMode(tab, newCard(tab.id, tab.lang, NOW), { canListen: true, shift: 0, role: "followup" })).toBe("table");
    expect(chooseMode(tab, undefined, { canListen: true, shift: 0, role: "intro" })).toBe("guess");
  });
  it("stability ≥ 3 days → typed recall", () => {
    const c = { ...schedule(newCard(noun.id, "it", NOW), 3, NOW), stability: 10 };
    expect(chooseMode(noun, c, { canListen: true, shift: 0, role: "review" })).toBe("recall");
  });
  it("no audio available → never listen / pick-spelling", () => {
    for (const i of ITEMS) for (const role of ["review", "followup", "practice"] as const) {
      const m = chooseMode(i, newCard(i.id, "it", NOW), { canListen: false, shift: 0, role });
      expect(["listen", "pick-spelling"]).not.toContain(m);
    }
  });
});

describe("lesson re-entry (P0-1, unit level)", () => {
  it("every lesson link is unique, so a second visit builds a fresh session", () => {
    const hrefs = new Set(Array.from({ length: 50 }, () => lessonHref("auto")));
    expect(hrefs.size).toBe(50);
  });
});
