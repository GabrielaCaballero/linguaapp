// Derived, on-device progress metrics. Nothing here leaves the device.
import type { TargetLang, Unit } from "@/content/schema";
import type { DB } from "./model";
import { DAY, startOfDay, startOfWeek } from "./dates";
import { dailyMinutes, projectedDate, nextLevel } from "./goals";
import { itemsFor, units, visible, itemById } from "./content";
import type { GoalLevel } from "./model";

export function courseLangs(db: DB): TargetLang[] {
  return (["it", "de"] as TargetLang[]).filter((l) => db.profile.courses[l]);
}

export function minutesBetween(db: DB, from: number, to: number, lang?: TargetLang): number {
  let s = 0;
  for (const x of db.sessions) if (x.t >= from && x.t < to && (!lang || x.lang === lang)) s += x.seconds;
  return s / 60;
}

export function todayMinutes(db: DB, now: number, lang?: TargetLang): number {
  const d = startOfDay(now);
  return minutesBetween(db, d, d + DAY, lang);
}

export function targetFor(db: DB, lang: TargetLang): number {
  return dailyMinutes(db.profile.courses[lang]?.goal);
}

export function totalTarget(db: DB): number {
  return courseLangs(db).reduce((a, l) => a + targetFor(db, l), 0);
}

export function practiceDaysThisWeek(db: DB, now: number): number {
  const w = startOfWeek(now);
  const days = new Set<number>();
  for (const s of db.sessions) if (s.t >= w && s.seconds >= 30) days.add(startOfDay(s.t));
  return days.size;
}

export interface DayCell {
  day: number;
  before: boolean;
  minutes: number;
  target: number;
  future: boolean;
  today: boolean;
}

export function weekStrip(db: DB, now: number): DayCell[] {
  const w = startOfWeek(now);
  const target = totalTarget(db) || 10;
  const today = startOfDay(now);
  return Array.from({ length: 7 }, (_, k) => {
    const d = startOfDay(w + k * DAY + DAY / 2);
    return { day: d, minutes: minutesBetween(db, d, d + DAY), target, future: d > today, today: d === today, before: d < startOfDay(db.profile.createdAt) };
  });
}

export function wordBuckets(db: DB, lang: TargetLang) {
  let fresh = 0;
  let learning = 0;
  let strong = 0;
  for (const c of Object.values(db.cards)) {
    if (c.lang !== lang) continue;
    if (c.state === 0 || c.stability < 1) fresh++;
    else if (c.stability < 21) learning++;
    else strong++;
  }
  return { fresh, learning, strong, total: fresh + learning + strong };
}

/** First reviews after a gap of ≥7 days that were right (the north-star metric). */
export function rememberedAfterWeek(db: DB, lang: TargetLang): { pct: number; n: number } | null {
  const seen = new Set<string>();
  let n = 0;
  let ok = 0;
  for (const r of db.reviews) {
    if (r.lang !== lang || (r.gap ?? 0) < 7 || seen.has(r.id) || r.mode === "speed" || r.mode === "guess") continue;
    seen.add(r.id);
    n++;
    if (r.verdict !== "wrong") ok++;
  }
  return n ? { pct: Math.round((100 * ok) / n), n } : null;
}

export function unitProgress(db: DB, u: Unit) {
  const base = db.profile.courses[u.lang]?.explainIn;
  const its = u.items.filter((i) => visible(i, base));
  let learned = 0;
  let solid = 0;
  for (const i of its) {
    const c = db.cards[i.id];
    if (c && c.state !== 0) learned++;
    if (c && c.stability >= 7) solid++;
  }
  return { total: its.length, learned, solid, canDo: its.length > 0 && solid / its.length >= 0.8 };
}

/** The unit the learner is working on: first unit at/after their start with unintroduced items. */
export function currentUnit(db: DB, lang: TargetLang): Unit {
  const us = units(lang);
  const start = db.profile.courses[lang]?.unit ?? 1;
  const base = db.profile.courses[lang]?.explainIn;
  for (const u of us) {
    if (u.index < start) continue;
    if (u.items.some((i) => visible(i, base) && !db.cards[i.id])) return u;
  }
  return us.find((u) => u.index >= start) ?? us[us.length - 1];
}

/**
 * GO-8: every item the learner can see, from their start unit to the last unit, has been
 * introduced (has a card). Nothing new is left; reviews keep going.
 */
export function courseComplete(db: DB, lang: TargetLang): boolean {
  const c = db.profile.courses[lang];
  if (!c) return false;
  const start = c.unit ?? 1;
  return units(lang)
    .filter((u) => u.index >= start)
    .every((u) => u.items.every((i) => !visible(i, c.explainIn) || !!db.cards[i.id]));
}

/** Yesterday's (most recent earlier day's) misses that are still unfixed. */
export function toFix(db: DB, lang: TargetLang, now: number): string[] {
  const today = startOfDay(now);
  const before = db.reviews.filter((r) => r.lang === lang && r.t < today && r.mode !== "guess");
  if (!before.length) return [];
  const lastDay = startOfDay(before[before.length - 1].t);
  const last = new Map<string, string>();
  for (const r of before) if (r.t >= lastDay) last.set(r.id, r.verdict);
  const fixedToday = new Set(db.reviews.filter((r) => r.lang === lang && r.t >= today && r.verdict !== "wrong").map((r) => r.id));
  const wrongEver = new Set(before.filter((r) => r.t >= lastDay && r.verdict === "wrong").map((r) => r.id));
  return [...wrongEver].filter((id) => !fixedToday.has(id) && db.cards[id]);
}

/** Items introduced yesterday and not yet seen today ("sleep helped"). */
export function sleepReady(db: DB, lang: TargetLang, now: number): number {
  const today = startOfDay(now);
  const y = today - DAY;
  const seenToday = new Set(db.reviews.filter((r) => r.t >= today).map((r) => r.id));
  return Object.values(db.cards).filter((c) => c.lang === lang && c.introducedAt >= y && c.introducedAt < today && !c.seeded && !seenToday.has(c.id)).length;
}

export function dueCount(db: DB, lang: TargetLang, at: number): number {
  return Object.values(db.cards).filter((c) => c.lang === lang && c.due <= at && itemById(db, c.id)).length;
}

export function calibration(db: DB, lang?: TargetLang) {
  const out = { sure: { n: 0, ok: 0 }, think: { n: 0, ok: 0 }, guess: { n: 0, ok: 0 } };
  for (const r of db.reviews) {
    if (!r.confidence || (lang && r.lang !== lang)) continue;
    out[r.confidence].n++;
    if (r.verdict !== "wrong") out[r.confidence].ok++;
  }
  return out;
}

/** Average minutes per calendar day over the last `days` days (today included), never before the course started. */
export function avgMinutes(db: DB, lang: TargetLang, now: number, days = 14): number {
  const end = startOfDay(now) + DAY;
  const started = startOfDay(db.profile.courses[lang]?.addedAt ?? now);
  const from = Math.max(end - days * DAY, started);
  const n = Math.max(1, Math.round((end - from) / DAY));
  return minutesBetween(db, from, end, lang) / n;
}

export interface WeeklyCheck {
  lang: TargetLang;
  avg: number;
  projected: number;
  goalDate: number;
  keepMin: number;
}

/** Weekly check-in for level/trip goals: first open of a week, ≥7 days after the goal was set. */
export function weeklyCheck(db: DB, lang: TargetLang, now: number): WeeklyCheck | null {
  const c = db.profile.courses[lang];
  const g = c?.goal;
  if (!c || !g || (g.kind !== "level" && g.kind !== "trip") || !g.by || !g.target) return null;
  if (now - g.setAt < 7 * DAY) return null;
  const key = `checkin-${lang}-${startOfWeek(now)}`;
  if (db.profile.seen?.[key]) return null;
  // Coming back from a break (≥ 7 days) is a "welcome back", not a verdict on the pace.
  const last = db.sessions.filter((s) => s.lang === lang).at(-1)?.t;
  if (last === undefined || now - last >= 7 * DAY) return null;
  const avg = Math.round(avgMinutes(db, lang, now) * 7 / (db.profile.settings.daysPerWeek || 5));
  if (avg < 1) return null;
  const current = c.placement?.cefr ?? "A0";
  const base = c.explainIn;
  const daysPerWeek = db.profile.settings.daysPerWeek;
  const projected = projectedDate({ base, lang, current, target: g.target as GoalLevel, minPerDay: Math.max(1, avg), now, daysPerWeek, classHoursPerWeek: g.classHours });
  const goalDate = new Date(g.by).getTime();
  return { lang, avg, projected, goalDate, keepMin: g.minutesPerDay };
}

export function testerStats(db: DB) {
  const langs = courseLangs(db);
  return {
    app: "lingua",
    version: 2,
    exportedAt: new Date().toISOString(),
    langs,
    sessions: db.sessions.length,
    minutes: Math.round(db.sessions.reduce((a, s) => a + s.seconds, 0) / 60),
    reviews: db.reviews.length,
    // Strategy §5 signals, computable on the device (docs/product/01-strategy.md).
    signals: strategySignals(db),
    perLang: Object.fromEntries(
      langs.map((l) => [
        l,
        {
          words: wordBuckets(db, l),
          rememberedAfterWeek: rememberedAfterWeek(db, l),
          calibration: calibration(db, l),
          placement: db.profile.courses[l]?.placement ? { cefr: db.profile.courses[l]!.placement!.cefr, items: db.profile.courses[l]!.placement!.items } : null,
          goal: db.profile.courses[l]?.goal ? { kind: db.profile.courses[l]!.goal!.kind, target: db.profile.courses[l]!.goal!.target, minutes: db.profile.courses[l]!.goal!.minutesPerDay } : null,
          accuracyByMode: accuracyByMode(db, l),
        },
      ]),
    ),
    events: db.events.reduce<Record<string, number>>((a, e) => ((a[e.type] = (a[e.type] ?? 0) + 1), a), {}),
  };
}

/** The success signals the strategy tracks, from this device's own data. */
export function strategySignals(db: DB, now = Date.now()) {
  // Practice days per week over the last 4 weeks (only weeks since the profile existed).
  const since = Math.max(now - 28 * DAY, db.profile.createdAt || now);
  const days = new Set(db.sessions.filter((s) => s.t >= since).map((s) => new Date(s.t).toDateString()));
  const weeks = Math.max(1, (now - since) / (7 * DAY));
  // Share of sessions (≥ 10 graded answers) whose accuracy sat in the 80–85 % target band,
  // and within the wider 75–90 % comfort zone.
  const graded = db.sessions.filter((s) => s.graded >= 10);
  const acc = graded.map((s) => s.correct / s.graded);
  const share = (lo: number, hi: number) => (acc.length ? Math.round((100 * acc.filter((a) => a >= lo && a <= hi).length) / acc.length) : null);
  // North star, Weekly Retained Items: answers in the last 7 days that were right after a
  // gap of ≥ 7 days since that item's previous review (decisions.md 2026-11-12).
  const weekAgo = now - 7 * DAY;
  const last = new Map<string, number>();
  let wri = 0;
  for (const r of [...db.reviews].sort((a, b) => a.t - b.t)) {
    const prev = last.get(r.id);
    if (r.t >= weekAgo && prev !== undefined && r.t - prev >= 7 * DAY && r.verdict !== "wrong") wri++;
    last.set(r.id, r.t);
  }
  return {
    practiceDaysPerWeek: Math.round((days.size / weeks) * 10) / 10,
    sessionsGraded: acc.length,
    sessionsInTargetBandPct: share(0.8, 0.85),
    sessionsInComfortZonePct: share(0.75, 0.9),
    weeklyRetainedItems: wri,
  };
}

function accuracyByMode(db: DB, lang: TargetLang) {
  const m: Record<string, { n: number; ok: number }> = {};
  for (const r of db.reviews) {
    if (r.lang !== lang) continue;
    m[r.mode] ??= { n: 0, ok: 0 };
    m[r.mode].n++;
    if (r.verdict !== "wrong") m[r.mode].ok++;
  }
  return m;
}

export { itemsFor, nextLevel };
