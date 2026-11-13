// Builders for sync evals: small but realistic DBs made from real content ids.
import { emptyDB, type CardV2, type DB, type ReviewLog, type SessionRecord, type TargetLang } from "@/lib/model";
import { ALL_ITEMS, rng } from "../lib/fixtures";
import { DAY } from "@/lib/dates";

export const NOW = new Date(2026, 10, 12, 9).getTime();
const IT = ALL_ITEMS.filter((i) => i.lang === "it").map((i) => i.id);
const DE = ALL_ITEMS.filter((i) => i.lang === "de").map((i) => i.id);

export function card(id: string, lang: TargetLang, lastReview: number, reps = 1): CardV2 {
  return { id, lang, due: lastReview + 2 * DAY, stability: 2, difficulty: 5, elapsed_days: 1, scheduled_days: 2, learning_steps: 0, reps, lapses: 0, state: 2, last_review: lastReview, introducedAt: lastReview - DAY };
}

export function review(id: string, lang: TargetLang, t: number, mode: ReviewLog["mode"] = "recall"): ReviewLog {
  return { t, id, lang, mode, verdict: "correct", rating: 3, source: "checker", confidence: "think", ms: 2000 };
}

export function session(lang: TargetLang, t: number): SessionRecord {
  return { t, lang, seconds: 300, tasks: 12, graded: 10, correct: 8, newItems: 3, stronger: 4, toFix: [] };
}

/** An onboarded learner with `n` Italian (and optionally German) reviews starting at `start`. */
export function learner(opts: { seed?: number; n?: number; start?: number; langs?: TargetLang[]; updatedAt?: number } = {}): DB {
  const r = rng(opts.seed ?? 1);
  const start = opts.start ?? NOW - 10 * DAY;
  const langs = opts.langs ?? ["it"];
  const db = emptyDB(start, "es");
  db.profile.onboarded = true;
  db.profile.activeLang = langs[0];
  db.profile.updatedAt = opts.updatedAt ?? start;
  for (const l of langs) db.profile.courses[l] = { explainIn: l === "it" ? "es" : "en", addedAt: start, unit: 1, goal: { kind: "steady", minutesPerDay: 15, retention: 0.9, setAt: start } };
  const n = opts.n ?? 20;
  for (let k = 0; k < n; k++) {
    const l = langs[k % langs.length];
    const pool = l === "it" ? IT : DE;
    const id = pool[Math.floor(r() * 30)];
    const t = start + k * 3_600_000 + Math.floor(r() * 1000);
    db.reviews.push(review(id, l, t));
    const prev = db.cards[id];
    db.cards[id] = card(id, l, t, (prev?.reps ?? 0) + 1);
  }
  db.sessions.push(session(langs[0], start + n * 3_600_000));
  db.events.push({ t: start, type: "session_start", lang: langs[0], mode: "auto" });
  return db;
}

/** Continue a learner on "another device": extra reviews after `from`. */
export function extend(db: DB, opts: { seed: number; n: number; from: number; lang?: TargetLang }): DB {
  const r = rng(opts.seed);
  const out: DB = structuredClone(db);
  const l = opts.lang ?? "it";
  const pool = l === "it" ? IT : DE;
  for (let k = 0; k < opts.n; k++) {
    const id = pool[Math.floor(r() * 40)];
    const t = opts.from + k * 60_000 + Math.floor(r() * 1000);
    out.reviews.push(review(id, l, t));
    out.cards[id] = card(id, l, t, (out.cards[id]?.reps ?? 0) + 1);
  }
  out.sessions.push(session(l, opts.from + opts.n * 60_000));
  return out;
}

export const reviewKeys = (db: DB) => new Set(db.reviews.map((r) => `${r.t}|${r.id}|${r.mode}`));
