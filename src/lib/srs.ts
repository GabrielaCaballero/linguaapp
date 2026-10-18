import type { CardState, Confidence } from "./types";

// A small SM-2-style scheduler.
// Grade comes from correctness + confidence, so a lucky guess ("correct but guessing")
// is scheduled sooner than a confident recall. Misses come back within the session
// and again in ~10 minutes; there is no other penalty.

export type Grade = "again" | "hard" | "good" | "easy";

const MIN = 60_000;
const DAY = 86_400_000;

export function gradeFrom(correct: boolean, almost: boolean, confidence: Confidence): Grade {
  if (!correct) return "again";
  if (almost || confidence === 1) return "hard";
  if (confidence === 2) return "good";
  return "easy";
}

/** Due at 4am local on the day `days` from now, so "tomorrow" means after a night's sleep. */
function dueInDays(now: number, days: number): number {
  const d = new Date(now);
  d.setHours(4, 0, 0, 0);
  return d.getTime() + Math.round(days) * DAY;
}

export function newCard(id: string, now: number, dueNow = true): CardState {
  return { id, due: dueNow ? now : dueInDays(now, 1), interval: 0, ease: 2.5, reps: 0, lapses: 0, introducedAt: now };
}

export function schedule(card: CardState, grade: Grade, now: number): CardState {
  const c = { ...card, lastReviewed: now };
  if (grade === "again") {
    c.lapses += 1;
    c.reps = 0;
    c.interval = 0;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.due = now + 10 * MIN;
    return c;
  }
  if (c.reps === 0) {
    c.interval = grade === "easy" ? 3 : 1;
  } else if (c.reps === 1) {
    c.interval = grade === "hard" ? 2 : grade === "good" ? 3 : 6;
  } else {
    const mult = grade === "hard" ? 1.2 : grade === "good" ? c.ease : c.ease * 1.3;
    c.interval = Math.max(c.interval + 1, Math.round(c.interval * mult));
  }
  if (grade === "hard") c.ease = Math.max(1.3, c.ease - 0.15);
  if (grade === "easy") c.ease += 0.15;
  c.reps += 1;
  c.due = dueInDays(now, c.interval);
  return c;
}

export function isKnown(c?: CardState) {
  return !!c && c.reps >= 2;
}
export function isSolid(c?: CardState) {
  return !!c && c.interval >= 21;
}
