"use client";

// All writes to the DB go through these small, named functions.
import type { BaseLang, Item, TargetLang } from "@/content/schema";
import type { Anchor, Confidence, Course, Goal, GradeSource, Mode, PlacementResult, Settings, Verdict } from "./model";
import { update, logEvent } from "./store";
import { newCard, ratingFor, schedule, seededCard } from "./scheduler";
import { itemById } from "./content";
import { DAY } from "./dates";
import { retentionFor } from "./goals";

export function setAppLang(appLang: BaseLang) {
  update((db) => ({ ...db, profile: { ...db.profile, appLang } }));
}

export function setSettings(patch: Partial<Settings>) {
  update((db) => ({ ...db, profile: { ...db.profile, settings: { ...db.profile.settings, ...patch } } }));
}

export function setActiveLang(lang: TargetLang) {
  update((db) => ({ ...db, profile: { ...db.profile, activeLang: lang } }));
}

export function markSeen(key: string) {
  update((db) => ({ ...db, profile: { ...db.profile, seen: { ...(db.profile.seen ?? {}), [key]: Date.now() } } }));
}

export function setCourse(lang: TargetLang, patch: Partial<Course>) {
  update((db) => {
    const prev = db.profile.courses[lang] ?? { explainIn: db.profile.appLang, addedAt: Date.now(), unit: 1 };
    return { ...db, profile: { ...db.profile, courses: { ...db.profile.courses, [lang]: { ...prev, ...patch } } } };
  });
}

export function removeCourse(lang: TargetLang) {
  update((db) => {
    const courses = { ...db.profile.courses };
    delete courses[lang];
    const cards = Object.fromEntries(Object.entries(db.cards).filter(([, c]) => c.lang !== lang));
    const left = Object.keys(courses) as TargetLang[];
    return {
      ...db,
      cards,
      profile: { ...db.profile, courses, activeLang: left.includes(db.profile.activeLang) ? db.profile.activeLang : left[0] ?? "it", onboarded: left.length > 0 },
    };
  });
}

/** Save placement and seed "probably known" items as cards with stability 7 d. */
export function applyPlacement(lang: TargetLang, result: PlacementResult, startUnit: number, seedIds: string[]) {
  const now = Date.now();
  update((db) => {
    const cards = { ...db.cards };
    let k = 0;
    for (const id of seedIds) if (!cards[id] && itemById(db, id)) cards[id] = seededCard(id, lang, now, k++);
    const prev = db.profile.courses[lang]!;
    return {
      ...db,
      cards,
      profile: { ...db.profile, courses: { ...db.profile.courses, [lang]: { ...prev, placement: { ...result, seeded: k }, unit: startUnit } } },
      events: [...db.events, { t: now, type: "placement_done", lang, cefr: result.cefr, items: result.items }],
    };
  });
}

export function saveGoal(lang: TargetLang, goal: Goal) {
  update((db) => {
    const prev = db.profile.courses[lang];
    if (!prev) return db;
    return {
      ...db,
      profile: {
        ...db.profile,
        courses: { ...db.profile.courses, [lang]: { ...prev, goal: { ...goal, retention: retentionFor(goal.kind) } } },
        pendingGoal: (db.profile.pendingGoal ?? []).filter((l) => l !== lang),
      },
      events: [...db.events, { t: Date.now(), type: "goal_set", lang, kind: goal.kind, minutes: goal.minutesPerDay }],
    };
  });
}

export function setAnchor(anchor: Anchor | undefined) {
  update((db) => ({ ...db, profile: { ...db.profile, anchor } }));
}

/**
 * "Not now" on the goal step after the v1 upgrade: stop asking. Courses keep no goal (10 min
 * a day by default) and a goal can be set any time from Me → Edit goal.
 */
export function skipPendingGoals() {
  update((db) => {
    if (!db.profile.pendingGoal?.length) return db;
    const profile = { ...db.profile };
    delete profile.pendingGoal;
    return { ...db, profile };
  });
}

export function finishOnboarding() {
  update((db) => ({ ...db, profile: { ...db.profile, onboarded: true } }));
}

/** First exposure (guess-first task): the card exists from now on, unrated. */
export function introduce(item: Item) {
  const now = Date.now();
  update((db) => (db.cards[item.id] ? db : { ...db, cards: { ...db.cards, [item.id]: newCard(item.id, item.lang, now) } }));
}

export interface AnswerInput {
  item: Item;
  mode: Mode;
  verdict: Verdict;
  confidence?: Confidence;
  source: GradeSource;
  ms: number;
  /** false for speed rounds: logged, but the schedule is left alone. */
  reschedule: boolean;
}

/** Grade one answer: FSRS update + review log + metrics event. Returns the stability change. */
export function recordAnswer(a: AnswerInput): { before: number; after: number } {
  const now = Date.now();
  let before = 0;
  let after = 0;
  update((db) => {
    const prev = db.cards[a.item.id] ?? newCard(a.item.id, a.item.lang, now);
    const rating = ratingFor(a.verdict, a.confidence, a.source);
    const retention = db.profile.courses[a.item.lang]?.goal?.retention ?? 0.9;
    const gap = prev.last_review ? (now - prev.last_review) / DAY : undefined;
    const next = a.reschedule ? schedule(prev, rating, now, retention) : prev;
    before = prev.state === 0 ? 0 : prev.stability;
    after = next.stability;
    return {
      ...db,
      cards: { ...db.cards, [a.item.id]: next },
      reviews: [...db.reviews, { t: now, id: a.item.id, lang: a.item.lang, mode: a.mode, verdict: a.verdict, rating, source: a.source, confidence: a.confidence, ms: a.ms, gap }],
      events: [...db.events, { t: now, type: "answer", itemId: a.item.id, mode: a.mode, verdict: a.verdict, rating, source: a.source, ms: a.ms }],
    };
  });
  return { before, after };
}

/**
 * "I was right" / LLM raise after the fact: replace the last rating for this item.
 * We re-run FSRS from the card as it was before that answer.
 */
export function regrade(item: Item, prevCard: ReturnType<typeof newCard> | undefined, verdict: Verdict, source: GradeSource, confidence?: Confidence, answerText?: string) {
  const now = Date.now();
  update((db) => {
    const base = prevCard ?? newCard(item.id, item.lang, now);
    const rating = ratingFor(verdict, confidence, source);
    const retention = db.profile.courses[item.lang]?.goal?.retention ?? 0.9;
    const next = schedule(base, rating, now, retention);
    const reviews = [...db.reviews];
    for (let k = reviews.length - 1; k >= 0; k--)
      if (reviews[k].id === item.id) {
        reviews[k] = { ...reviews[k], verdict, rating, source };
        break;
      }
    const events = [...db.events];
    if (answerText && source === "override") events.push({ t: now, type: "alt_candidate", itemId: item.id, text: answerText });
    return { ...db, cards: { ...db.cards, [item.id]: next }, reviews, events };
  });
}

export function endSession(rec: { lang: TargetLang; seconds: number; tasks: number; graded: number; correct: number; newItems: number; stronger: number; toFix: string[]; startedAt: number }) {
  const now = Date.now();
  update((db) => ({
    ...db,
    sessions: [...db.sessions, { t: rec.startedAt, lang: rec.lang, seconds: rec.seconds, tasks: rec.tasks, graded: rec.graded, correct: rec.correct, newItems: rec.newItems, stronger: rec.stronger, toFix: rec.toFix }],
    events: [...db.events, { t: now, type: "session_end", lang: rec.lang, seconds: rec.seconds, tasks: rec.tasks }],
  }));
}

export function sessionStart(lang: TargetLang, mode: string) {
  logEvent({ t: Date.now(), type: "session_start", lang, mode });
}

export function addCustomWord(lang: TargetLang, target: string, meaning: string): Item {
  const id = `custom-${lang}-${Date.now().toString(36)}`;
  const item: Item = {
    id,
    lang,
    unit: "custom",
    type: target.trim().split(/\s+/).length >= 3 ? "phrase" : "word",
    cefr: "A1.1",
    target: target.trim(),
    gloss: { es: meaning.trim(), en: meaning.trim() },
    spoken: target.trim(),
    tags: ["custom"],
  };
  update((db) => ({ ...db, custom: [...db.custom, item] }));
  return item;
}

export function removeCustomWord(id: string) {
  update((db) => {
    const cards = { ...db.cards };
    delete cards[id];
    return { ...db, custom: db.custom.filter((c) => c.id !== id), cards };
  });
}

export function checkinChoice(lang: TargetLang, choice: string, key: string) {
  update((db) => ({
    ...db,
    profile: { ...db.profile, seen: { ...(db.profile.seen ?? {}), [key]: Date.now() } },
    events: [...db.events, { t: Date.now(), type: "checkin_choice", lang, choice }],
  }));
}

export function dropLegacyTies() {
  update((db) => ({ ...db, legacyTies: undefined }));
}
