// Cross-device merge. Pure functions, no browser APIs, so they run in Node tests.
//
// Rules (docs/team/40-accounts-architecture.md §2.3):
//  - never lose a review: reviews and sessions are a union, de-duplicated by key;
//  - cards: the copy reviewed most recently wins (ties: more reps, then local);
//  - profile: the newest edit wins (profile.updatedAt), courses are merged per language;
//  - deletions are remembered (db.deleted): a course or custom word removed on one device
//    stays removed, unless the course was added again later;
//  - fields this build doesn't know (written by a newer app) are kept, never dropped;
//  - events (on-device metrics) and legacyTies never leave the device.
// mergeDB(a, a) deep-equals a, and the review/card/session sets of mergeDB(a, b) and
// mergeDB(b, a) are the same.
import { MAX_REVIEWS, type CardV2, type Course, type DB, type Profile, type ReviewLog, type SessionRecord, type TargetLang, type Tombstones } from "../model";

/** What gets uploaded: the DB minus on-device-only data. The AI key is never in a DB. */
export function toPayload(db: DB): DB {
  const { legacyTies: _drop, ...rest } = db;
  void _drop;
  return { ...rest, events: [] };
}

const reviewKey = (r: ReviewLog) => `${r.t}|${r.id}|${r.mode}`;
const sessionKey = (s: SessionRecord) => `${s.t}|${s.lang}`;

function unionBy<T>(a: T[], b: T[], key: (x: T) => string, order: (x: T) => number): T[] {
  const m = new Map<string, T>();
  for (const x of b) m.set(key(x), x);
  for (const x of a) m.set(key(x), x); // local copy wins on identical keys
  return [...m.values()].sort((x, y) => order(x) - order(y) || (key(x) < key(y) ? -1 : key(x) > key(y) ? 1 : 0));
}

function pickCard(local: CardV2, remote: CardV2): CardV2 {
  const lr = local.last_review ?? 0;
  const rr = remote.last_review ?? 0;
  if (lr !== rr) return lr > rr ? local : remote;
  if (local.reps !== remote.reps) return local.reps > remote.reps ? local : remote;
  return local;
}

function courseStamp(c: Course): number {
  return Math.max(c.addedAt ?? 0, c.goal?.setAt ?? 0, c.placement?.at ?? 0);
}

function pickCourse(local: Course | undefined, remote: Course | undefined, preferLocal: boolean): Course | undefined {
  if (!local) return remote;
  if (!remote) return local;
  const ls = courseStamp(local);
  const rs = courseStamp(remote);
  if (ls !== rs) return ls > rs ? local : remote;
  // Same goal and placement: keep the further unit (units only move forward in lessons).
  const base = preferLocal ? local : remote;
  return { ...base, unit: Math.max(local.unit ?? 1, remote.unit ?? 1) };
}

function maxMerge<K extends string>(a: Partial<Record<K, number>> | undefined, b: Partial<Record<K, number>> | undefined): Partial<Record<K, number>> | undefined {
  const out: Partial<Record<K, number>> = { ...(b ?? {}) } as Partial<Record<K, number>>;
  for (const [k, v] of Object.entries(a ?? {}) as [K, number][]) out[k] = Math.max(out[k] ?? 0, v);
  return Object.keys(out).length ? out : undefined;
}

function mergeTombstones(a: Tombstones | undefined, b: Tombstones | undefined): Tombstones | undefined {
  const courses = maxMerge<TargetLang>(a?.courses, b?.courses);
  const custom = maxMerge<string>(a?.custom, b?.custom) as Record<string, number> | undefined;
  if (!courses && !custom) return undefined;
  const out: Tombstones = {};
  if (courses) out.courses = courses;
  if (custom) out.custom = custom;
  return out;
}

function mergeProfile(local: Profile, remote: Profile, deleted: Tombstones | undefined): Profile {
  const lu = local.updatedAt ?? 0;
  const ru = remote.updatedAt ?? 0;
  const preferLocal = lu >= ru;
  const winner = preferLocal ? local : remote;
  const loser = preferLocal ? remote : local;
  const courses: Partial<Record<TargetLang, Course>> = {};
  for (const l of new Set([...Object.keys(local.courses), ...Object.keys(remote.courses)]) as Set<TargetLang>) {
    const c = pickCourse(local.courses[l], remote.courses[l], preferLocal);
    // Removed on some device after this course was (last) added → stays removed.
    const gone = deleted?.courses?.[l];
    if (c && !(gone !== undefined && gone >= (c.addedAt ?? 0))) courses[l] = c;
  }
  const seen: Record<string, number> = { ...(remote.seen ?? {}) };
  for (const [k, v] of Object.entries(local.seen ?? {})) seen[k] = Math.max(seen[k] ?? 0, v);
  const lastBackupAt = Math.max(local.lastBackupAt ?? 0, remote.lastBackupAt ?? 0) || undefined;
  const merged: Profile = {
    ...loser,
    ...winner,
    courses,
    onboarded: local.onboarded || remote.onboarded,
    createdAt: Math.min(local.createdAt || Infinity, remote.createdAt || Infinity),
    updatedAt: Math.max(lu, ru) || undefined,
  };
  if (Object.keys(seen).length) merged.seen = seen;
  else delete merged.seen;
  if (lastBackupAt) merged.lastBackupAt = lastBackupAt;
  else delete merged.lastBackupAt;
  if (!merged.updatedAt) delete merged.updatedAt;
  if (!courses[merged.activeLang]) {
    const first = Object.keys(courses)[0] as TargetLang | undefined;
    if (first) merged.activeLang = first;
  }
  if (!Object.keys(courses).length) merged.onboarded = false;
  if (merged.pendingGoal) {
    merged.pendingGoal = merged.pendingGoal.filter((l) => courses[l] && !courses[l]!.goal);
    if (!merged.pendingGoal.length) delete merged.pendingGoal;
  }
  return merged;
}

/** Merge a pulled document into the local one. `local.events` and `local.legacyTies` are kept. */
export function mergeDB(local: DB, remote: DB): DB {
  const deleted = mergeTombstones(local.deleted, remote.deleted);
  const profile = mergeProfile(local.profile, remote.profile, deleted);
  const gone = deleted?.custom ?? {};

  const cards: Record<string, CardV2> = {};
  for (const [id, c] of Object.entries(remote.cards)) cards[id] = c;
  for (const [id, c] of Object.entries(local.cards)) cards[id] = cards[id] ? pickCard(c, cards[id]) : c;
  for (const [id, c] of Object.entries(cards)) {
    // A removed course takes its cards with it; a removed custom word takes its card.
    const courseGone = deleted?.courses?.[c.lang] !== undefined && !profile.courses[c.lang];
    if (courseGone || gone[id] !== undefined) delete cards[id];
  }

  let reviews = unionBy(local.reviews, remote.reviews, reviewKey, (r) => r.t);
  if (reviews.length > MAX_REVIEWS) reviews = reviews.slice(-MAX_REVIEWS);

  const custom = [...local.custom, ...remote.custom.filter((i) => !local.custom.some((x) => x.id === i.id))].filter((i) => gone[i.id] === undefined);

  const out: DB = {
    ...remote,
    ...local,
    version: 2,
    profile,
    cards,
    reviews,
    sessions: unionBy(local.sessions, remote.sessions, sessionKey, (s) => s.t),
    custom,
    events: local.events,
  };
  // Same epoch in normal syncs; on "Combine" the account's epoch is kept.
  if (remote.epoch !== undefined) out.epoch = remote.epoch;
  else delete out.epoch;
  if (deleted) out.deleted = deleted;
  else delete out.deleted;
  if (local.legacyTies === undefined) delete out.legacyTies;
  return out;
}

/** True when the two documents would upload the same thing (key order independent). */
export function samePayload(a: DB, b: DB): boolean {
  return stable(toPayload(a)) === stable(toPayload(b));
}

function stable(x: unknown): string {
  if (Array.isArray(x)) return `[${x.map(stable).join(",")}]`;
  if (x && typeof x === "object")
    return `{${Object.keys(x as object)
      .filter((k) => (x as Record<string, unknown>)[k] !== undefined)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${stable((x as Record<string, unknown>)[k])}`)
      .join(",")}}`;
  return JSON.stringify(x);
}

export interface Summary {
  langs: TargetLang[];
  cards: number;
  reviews: number;
  sessions: number;
}

export function summarize(db: DB): Summary {
  return { langs: Object.keys(db.profile.courses) as TargetLang[], cards: Object.keys(db.cards).length, reviews: db.reviews.length, sessions: db.sessions.length };
}
