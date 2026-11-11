// Versioned migration chain for the on-device DB and backup files.
// v1 (prototype, key "lingua:v1") → v2. Pure functions: easy to test, safe to re-run.
import type { Item, TargetLang } from "@/content/schema";
import { emptyDB, type CardV2, type DB, type Rating, type ReviewLog } from "./model";
import { replay } from "./scheduler";
import { DAY } from "./dates";

// ── v1 shapes (only what we read) ─────────────────────────────────────────
export interface V1Item { id: string; lang: TargetLang; module: string; kind: string; prompt: string; answer: string; alts?: string[]; note?: string; createdAt?: number }
export interface V1Card { id: string; due: number; interval: number; ease: number; reps: number; lapses: number; introducedAt: number; lastReviewed?: number }
export interface V1Review { t: number; id: string; lang: TargetLang; mode: string; correct: boolean; confidence?: 1 | 2 | 3 }
export interface V1DB {
  version: 1;
  settings: { lang: TargetLang; minutesPerLang?: number; newPerDay?: number; germanLevel?: string; startDate?: string };
  cards: Record<string, V1Card>;
  custom: V1Item[];
  reviews: V1Review[];
  sessions: { t: number; lang: TargetLang; seconds: number; tasks: number; correct: number; graded: number }[];
  ties?: unknown[];
}

export type LegacyIndex = Map<string, { id: string; lang: TargetLang }>;

function v1Rating(r: V1Review): Rating {
  if (!r.correct) return 1;
  if (r.confidence === 3) return 4;
  if (r.confidence === 1) return 2;
  return 3;
}

/**
 * v1 → v2.
 * - cards are mapped through `legacyId`; cards with no mapping are dropped
 * - review logs are replayed through FSRS (no logs → stability = v1 interval)
 * - the v1 due date is kept so nothing jumps around for the owner
 * - custom "add from class" items become v2 custom items (unit "custom")
 * - Ties are kept aside only until a download has been offered
 */
export function migrateV1(v1: V1DB, legacy: LegacyIndex, now = Date.now()): DB {
  const db = emptyDB(now, "es");
  // custom items first: they map to themselves
  const customMap = new Map<string, { id: string; lang: TargetLang }>();
  for (const c of v1.custom ?? []) {
    const id = `custom-${c.id}`;
    customMap.set(c.id, { id, lang: c.lang });
    const item: Item = {
      id,
      lang: c.lang,
      unit: "custom",
      type: c.answer.trim().split(/\s+/).length >= 3 ? "phrase" : "word",
      cefr: "A1.1",
      target: c.answer,
      gloss: { es: c.prompt, en: c.prompt },
      accept: (c.alts ?? []).map((text) => ({ text })),
      spoken: c.answer,
      note: c.note ? { es: c.note, en: c.note } : undefined,
      tags: ["custom", "from-v1"],
    };
    db.custom.push(item);
  }
  const resolve = (id: string) => legacy.get(id) ?? customMap.get(id);

  const byCard = new Map<string, V1Review[]>();
  for (const r of v1.reviews ?? []) {
    if (r.mode === "guess") continue; // ungraded pretests
    byCard.set(r.id, [...(byCard.get(r.id) ?? []), r]);
  }

  const langs = new Set<TargetLang>();
  for (const [oldId, c] of Object.entries(v1.cards ?? {})) {
    const m = resolve(oldId);
    if (!m) continue;
    const logs = byCard.get(oldId) ?? [];
    let card: CardV2;
    if (logs.length) {
      card = replay(m.id, m.lang, logs.map((r) => ({ t: r.t, rating: v1Rating(r) })), c.introducedAt);
    } else {
      card = replay(m.id, m.lang, [], c.introducedAt);
      if (c.interval > 0) {
        card.stability = c.interval;
        card.state = 2;
        card.difficulty = card.difficulty || 5;
        card.reps = c.reps;
        card.scheduled_days = c.interval;
        card.last_review = c.lastReviewed ?? c.due - c.interval * DAY;
      }
    }
    card.due = c.due; // keep the owner's schedule
    card.lapses = Math.max(card.lapses, c.lapses);
    db.cards[m.id] = card;
    langs.add(m.lang);
  }

  for (const r of v1.reviews ?? []) {
    const m = resolve(r.id);
    if (!m) continue;
    const log: ReviewLog = {
      t: r.t,
      id: m.id,
      lang: m.lang,
      mode: r.mode === "type" ? "recall" : r.mode === "speed" ? "speed" : r.mode === "guess" ? "guess" : (r.mode as ReviewLog["mode"]),
      verdict: r.correct ? "correct" : "wrong",
      rating: v1Rating(r),
      source: "checker",
      confidence: r.confidence === 3 ? "sure" : r.confidence === 1 ? "guess" : r.confidence === 2 ? "think" : undefined,
    };
    db.reviews.push(log);
  }

  db.sessions = (v1.sessions ?? []).map((s) => ({ ...s, newItems: 0, stronger: 0, toFix: [] }));

  const active: TargetLang = v1.settings?.lang ?? "it";
  langs.add(active);
  for (const l of langs) db.profile.courses[l] = { explainIn: l === "it" ? "es" : "en", addedAt: now, unit: 1 };
  db.profile.activeLang = active;
  db.profile.appLang = "es";
  db.profile.onboarded = true;
  db.profile.pendingGoal = [...langs];
  if (v1.ties && v1.ties.length) db.legacyTies = v1.ties;
  return db;
}

export function isV1(x: unknown): x is V1DB {
  return !!x && typeof x === "object" && (x as { version?: unknown }).version === 1 && typeof (x as V1DB).cards === "object";
}

export function isV2(x: unknown): x is DB {
  const d = x as DB;
  return !!d && typeof d === "object" && d.version === 2 && !!d.profile && typeof d.cards === "object" && Array.isArray(d.reviews);
}

/** Fill in fields a v2 blob from an older build might be missing. */
export function normalizeV2(x: DB): DB {
  const base = emptyDB(x.profile?.createdAt ?? Date.now());
  return {
    ...base,
    ...x,
    profile: { ...base.profile, ...x.profile, settings: { ...base.profile.settings, ...(x.profile?.settings ?? {}) }, courses: x.profile?.courses ?? {} },
    cards: x.cards ?? {},
    reviews: x.reviews ?? [],
    sessions: x.sessions ?? [],
    custom: x.custom ?? [],
    events: x.events ?? [],
  };
}

/** Run the chain on anything that claims to be a Lingua DB/backup. Throws on garbage. */
export function migrateAny(x: unknown, legacy: LegacyIndex, now = Date.now()): DB {
  if (isV2(x)) return normalizeV2(x);
  if (isV1(x)) return migrateV1(x, legacy, now);
  throw new Error("not-a-lingua-file");
}
