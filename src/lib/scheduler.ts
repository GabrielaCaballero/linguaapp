// Spaced-repetition scheduling via FSRS (ts-fsrs), behind one `schedule()` interface.
// Desired retention 0.90 (Maintain goal: 0.85). Due dates of a day or more roll to 04:00 local,
// so a word "for tomorrow" is ready after you have slept on it.
import { createEmptyCard, fsrs, type Card, type FSRS, type Grade, State } from "ts-fsrs";
import type { CardV2, Confidence, GradeSource, Rating, TargetLang, Verdict } from "./model";
import { DAY } from "./dates";

const engines = new Map<number, FSRS>();
function engine(retention: number): FSRS {
  const key = Math.round(retention * 100);
  let f = engines.get(key);
  if (!f) {
    f = fsrs({ request_retention: retention, enable_fuzz: false, enable_short_term: false, maximum_interval: 365 * 3 });
    engines.set(key, f);
  }
  return f;
}

export function toCard(c: CardV2): Card {
  return {
    due: new Date(c.due),
    stability: c.stability,
    difficulty: c.difficulty,
    elapsed_days: c.elapsed_days,
    scheduled_days: c.scheduled_days,
    learning_steps: c.learning_steps,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state as State,
    last_review: c.last_review ? new Date(c.last_review) : undefined,
  };
}

function fromCard(card: Card, base: Pick<CardV2, "id" | "lang" | "introducedAt" | "seeded">): CardV2 {
  return {
    ...base,
    due: card.due.getTime(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    last_review: card.last_review?.getTime(),
  };
}

export function newCard(id: string, lang: TargetLang, now: number): CardV2 {
  return fromCard(createEmptyCard(new Date(now)), { id, lang, introducedAt: now });
}

/** Roll a due time to 04:00 local on its day (only for intervals of a day or more). */
export function rollTo4am(due: number, now: number): number {
  if (due - now < DAY * 0.5) return due;
  const d = new Date(due);
  d.setHours(4, 0, 0, 0);
  return d.getTime();
}

/**
 * Map an answer to an FSRS rating.
 * wrong → Again · almost or "guessing" → Hard · "think so"/no chip → Good · "sure" → Easy.
 * LLM-raised grades never exceed Hard. "I was right" overrides count as Good.
 */
export function ratingFor(verdict: Verdict, confidence?: Confidence, source: GradeSource = "checker"): Rating {
  if (verdict === "wrong") return 1;
  if (source === "llm") return 2;
  if (source === "override") return 3;
  if (verdict === "almost" || confidence === "guess") return 2;
  if (confidence === "sure") return 4;
  return 3;
}

/** Apply one review. Pure. */
export function schedule(c: CardV2, rating: Rating, now: number, retention = 0.9): CardV2 {
  const f = engine(retention);
  const { card } = f.next(toCard(c), new Date(now), rating as Grade);
  const next = fromCard(card, c);
  next.due = rollTo4am(next.due, now);
  return next;
}

/** Current probability of recall (0..1). New cards: 0. */
export function retrievability(c: CardV2, now: number): number {
  if (c.state === State.New || !c.last_review) return 0;
  return engine(0.9).get_retrievability(toCard(c), new Date(now), false);
}

/** Placement seed: "probably known", stability 7 days, a confirmation review within week 1. */
export function seededCard(id: string, lang: TargetLang, now: number, k: number): CardV2 {
  const dueIn = 2 + (k % 6); // spread over days 2..7
  return {
    id,
    lang,
    due: rollTo4am(now + dueIn * DAY, now),
    stability: 7,
    difficulty: 5,
    elapsed_days: 0,
    scheduled_days: dueIn,
    learning_steps: 0,
    reps: 1,
    lapses: 0,
    state: State.Review,
    last_review: now,
    introducedAt: now,
    seeded: true,
  };
}

/** Rebuild an FSRS card from a v1 review history (used by the v1→v2 migration). */
export function replay(id: string, lang: TargetLang, history: { t: number; rating: Rating }[], introducedAt: number): CardV2 {
  let c = newCard(id, lang, introducedAt);
  for (const h of [...history].sort((a, b) => a.t - b.t)) c = schedule(c, h.rating, Math.max(h.t, c.last_review ?? 0));
  return c;
}

export { State };
