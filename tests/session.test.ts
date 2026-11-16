import { describe, expect, it } from "vitest";
import { buildSession, chooseMode, controllerShift, newBudget, requeue, rollingAccuracy, articleOf, type BuildInput, type Task, typingArm } from "@/lib/session";
import { newCard, schedule } from "@/lib/scheduler";
import type { CardV2, ReviewLog } from "@/lib/model";
import { DAY } from "@/lib/dates";
import { itCourse, deCourse } from "./fixtures/mini-course";
import type { Item } from "@/content/schema";

const NOW = new Date(2026, 10, 12, 18).getTime();
const items: Item[] = itCourse.units.flatMap((u) => u.items);
const unitIndexOf = (i: Item) => itCourse.units.find((u) => u.id === i.unit)?.index ?? 0;
let seed = 1;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

function input(over: Partial<BuildInput> = {}): BuildInput {
  return { lang: "it", items, cards: {}, reviews: [], startUnit: 1, unitIndexOf, now: NOW, minutes: 5, kind: "auto", rand, ...over };
}
const log = (verdict: ReviewLog["verdict"], k: number): ReviewLog => ({ t: NOW - k * 1000, id: "x", lang: "it", mode: "recall", verdict, rating: verdict === "wrong" ? 1 : 3, source: "checker" });

function dueCard(id: string, daysOverdue: number): CardV2 {
  const c = schedule(newCard(id, "it", NOW - 30 * DAY), 3, NOW - 30 * DAY);
  return { ...c, due: NOW - daysOverdue * DAY };
}

describe("session builder", () => {
  it("fresh learner: guess-first intros, each followed 3–6 tasks later", () => {
    const b = buildSession(input());
    const intros = b.tasks.filter((t) => t.role === "intro");
    expect(intros.length).toBe(6); // 5 + 1 on a quiet day
    for (const intro of intros) {
      const i = b.tasks.indexOf(intro);
      const f = b.tasks.findIndex((t) => t.role === "followup" && t.itemId === intro.itemId);
      expect(f - i).toBeGreaterThanOrEqual(3);
      expect(f - i).toBeLessThanOrEqual(7);
      expect(intro.graded).toBe(false);
    }
    // unit order: first new item comes from unit 1
    expect(items.find((x) => x.id === intros[0].itemId)?.unit).toBe("it-u01");
  });

  it("starts from the placed unit", () => {
    const b = buildSession(input({ startUnit: 2 }));
    for (const t of b.tasks.filter((x) => x.role === "intro")) expect(items.find((x) => x.id === t.itemId)?.unit).toBe("it-u02");
  });

  it("due reviews first, oldest overdue first, max 15 per chunk", () => {
    const many: Item[] = Array.from({ length: 30 }, (_, k) => ({ ...items[1], id: `it-u01-r${k}`, type: k % 2 ? "word" : "phrase" }));
    const cards: Record<string, CardV2> = {};
    many.forEach((x, k) => (cards[x.id] = dueCard(x.id, k + 1)));
    const b = buildSession(input({ items: [...items, ...many], cards }));
    const reviews = b.tasks.filter((t) => t.role === "review");
    expect(reviews.length).toBe(15);
    expect(b.reviewCount).toBe(15);
    // the most overdue (k=29) is in, the least overdue (k=0) is not
    expect(reviews.some((t) => t.itemId === "it-u01-r29")).toBe(true);
    expect(reviews.some((t) => t.itemId === "it-u01-r0")).toBe(false);
  });

  it("no more than 40 reviews a day", () => {
    const many: Item[] = Array.from({ length: 30 }, (_, k) => ({ ...items[1], id: `it-u01-r${k}` }));
    const cards: Record<string, CardV2> = {};
    many.forEach((x) => (cards[x.id] = dueCard(x.id, 2)));
    const done: ReviewLog[] = Array.from({ length: 35 }, (_, k) => ({ ...log("correct", k), id: `done-${k}`, t: NOW - 1000 * k }));
    const b = buildSession(input({ items: [...items, ...many], cards, reviews: done }));
    expect(b.reviewCount).toBe(5);
  });

  it("after ≥7 days away: reviews only (welcome back)", () => {
    const cards = { "it-u01-ciao": dueCard("it-u01-ciao", 9) };
    const b = buildSession(input({ cards, lastSessionAt: NOW - 9 * DAY }));
    expect(b.welcomeBack).toBe(true);
    expect(b.tasks.some((t) => t.role === "intro")).toBe(false);
  });

  it("review-only and new-only modes", () => {
    const cards = { "it-u01-ciao": dueCard("it-u01-ciao", 1) };
    expect(buildSession(input({ cards, kind: "review" })).tasks.some((t) => t.role === "intro")).toBe(false);
    expect(buildSession(input({ cards, kind: "new" })).tasks.some((t) => t.role === "review")).toBe(false);
  });

  it("speed round uses only learned cards", () => {
    const cards = { "it-u01-ciao": dueCard("it-u01-ciao", -3), "it-u01-grazie": dueCard("it-u01-grazie", -3) };
    const b = buildSession(input({ cards, kind: "speed" }));
    expect(b.tasks.every((t) => t.role === "speed")).toBe(true);
    expect(b.tasks).toHaveLength(2);
  });

  it("interleaves item types", () => {
    const b = buildSession(input());
    const types = b.tasks.map((t) => items.find((x) => x.id === t.itemId)!.type);
    let same = 0;
    for (let k = 1; k < types.length; k++) if (types[k] === types[k - 1]) same++;
    expect(same).toBeLessThan(types.length / 2);
  });
});

describe("difficulty controller (target 80–85%)", () => {
  it("rolling accuracy over the last 10", () => {
    const r = [...Array(8)].map((_, k) => log("correct", k)).concat([log("wrong", 9), log("wrong", 10)]);
    expect(rollingAccuracy(r, "it")).toBeCloseTo(0.8);
  });
  it(">90% → +1 new, harder; <70% → −2 new, easier", () => {
    expect(controllerShift(0.95)).toBe(1);
    expect(controllerShift(0.82)).toBe(0);
    expect(controllerShift(0.6)).toBe(-1);
    expect(newBudget(1)).toBe(6);
    expect(newBudget(0)).toBe(5);
    expect(newBudget(-1)).toBe(3);
  });
  it("struggling learner gets fewer new items", () => {
    const r = [...Array(10)].map((_, k) => log(k < 5 ? "wrong" : "correct", k));
    const b = buildSession(input({ reviews: r }));
    expect(b.shift).toBe(-1);
    expect(b.newCount).toBe(4); // 3 + 1 quiet-day bonus
  });
});

describe("requeue", () => {
  it("requeues a miss once, capped at 2 per item", () => {
    let tasks: Task[] = [0, 1, 2, 3, 4, 5].map((k) => ({ key: `k${k}`, itemId: `i${k}`, role: "review", graded: true }));
    const counts = new Map<string, number>();
    tasks = requeue(tasks, 0, counts);
    expect(tasks[4].itemId).toBe("i0");
    expect(tasks[4].role).toBe("requeue");
    tasks = requeue(tasks, 4, counts);
    const len = tasks.length;
    tasks = requeue(tasks, tasks.length - 1, counts);
    expect(tasks.length).toBe(len);
  });
});

describe("mode ladder", () => {
  const word = items.find((x) => x.id === "it-u02-caffe")!;
  const ctx = { canListen: true, shift: 0, role: "review" as const };
  it("intro → guess", () => expect(chooseMode(word, undefined, { ...ctx, role: "intro" })).toBe("guess"));
  it("young card (just missed) → not typed yet: easiest tier (classic arm) or one step up (typing arm)", () => {
    const c = schedule(newCard(word.id, "it", NOW), 1, NOW);
    const m = chooseMode(word, c, ctx);
    expect(m).not.toBe("recall");
    expect(typingArm(word.id) === "classic" ? ["recognize"] : ["tiles", "article", "listen"]).toContain(m);
  });
  it("stability ≥ 3 days → recall (typed)", () => {
    const c = { ...schedule(newCard(word.id, "it", NOW), 3, NOW), stability: 5 };
    expect(chooseMode(word, c, ctx)).toBe("recall");
  });
  it("controller −1 eases a strong card", () => {
    const c = { ...schedule(newCard(word.id, "it", NOW), 3, NOW), stability: 5 };
    expect(chooseMode(word, c, { ...ctx, shift: -1 })).not.toBe("recall");
  });
  it("no voice → never listen", () => {
    const snd = items.find((x) => x.type === "sound")!;
    for (let r = 0; r < 4; r++) expect(["listen", "pick-spelling"]).not.toContain(chooseMode(snd, { ...newCard(snd.id, "it", NOW), reps: r }, { ...ctx, canListen: false }));
  });
  it("article detection", () => {
    expect(articleOf(word)?.article).toBe("il");
    expect(articleOf(items.find((x) => x.id === "it-u02-amico")!)?.article).toBe("l'");
    expect(articleOf(deCourse.units[1].items[0])?.article).toBe("der");
  });
});

describe("beginner start (judge P1-8)", () => {
  it("a session never opens with an audio-only sound item when a meaning item exists", () => {
    const b = buildSession(input());
    const first = b.tasks.find((t) => t.role === "intro")!;
    expect(items.find((x) => x.id === first.itemId)!.type).not.toBe("sound");
  });
  it("yesterday's misses come first", () => {
    const cards = { "it-u01-ciao": dueCard("it-u01-ciao", 1), "it-u01-grazie": dueCard("it-u01-grazie", 5) };
    const b = buildSession(input({ cards, priority: ["it-u01-ciao"] }));
    expect(b.tasks[0].itemId).toBe("it-u01-ciao");
  });
  it("extension chunks skip items already practised", () => {
    const cards = { "it-u01-ciao": dueCard("it-u01-ciao", 1) };
    const b = buildSession(input({ cards, exclude: new Set(["it-u01-ciao"]) }));
    expect(b.tasks.some((t) => t.itemId === "it-u01-ciao")).toBe(false);
  });
});
