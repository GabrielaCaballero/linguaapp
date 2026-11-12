// Session builder + difficulty controller. Spec §4.3.
// A session is a ~5-minute chunk (≈22 tasks): due reviews (oldest first, ≤15 per chunk, ≤40/day),
// new items in unit order (guess first, then recalled 3–6 tasks later), interleaved by type,
// misses requeued once (cap 2). The controller keeps rolling accuracy in the 80–85% band.
import type { Item, TargetLang } from "@/content/schema";
import type { CardV2, DB, Mode, ReviewLog } from "./model";
import { DAY, startOfDay } from "./dates";
import { retrievability } from "./scheduler";

export type Role = "review" | "intro" | "followup" | "requeue" | "practice" | "speed";
export type SessionKind = "auto" | "review" | "new" | "speed";

export interface Task {
  key: string;
  itemId: string;
  role: Role;
  graded: boolean;
}

export interface BuildInput {
  lang: TargetLang;
  items: Item[]; // visible items for this course, in path order (custom last)
  cards: Record<string, CardV2>;
  reviews: ReviewLog[];
  lastSessionAt?: number;
  startUnit: number; // 1-based
  unitIndexOf: (item: Item) => number; // custom → 0
  now: number;
  minutes: number;
  kind: SessionKind;
  rand?: () => number;
  /** Yesterday's misses: always first in the next session. */
  priority?: string[];
  /** Items already practised in this sitting (extension chunks skip them). */
  exclude?: Set<string>;
}

export interface Built {
  tasks: Task[];
  welcomeBack: boolean;
  reviewCount: number;
  newCount: number;
  shift: number;
}

export const MAX_REVIEWS_PER_CHUNK = 15;
export const MAX_REVIEWS_PER_DAY = 40;
export const BASE_NEW = 5;
export const TASKS_PER_MIN = 4.4;
export const REQUEUE_CAP = 2;
export const AWAY_DAYS = 7;

/** Rolling accuracy over the last 10 graded tasks for a language (null if fewer than 5). */
export function rollingAccuracy(reviews: ReviewLog[], lang: TargetLang, n = 10): number | null {
  const graded = reviews.filter((r) => r.lang === lang && r.mode !== "guess" && r.mode !== "speed").slice(-n);
  if (graded.length < 5) return null;
  return graded.filter((r) => r.verdict !== "wrong").length / graded.length;
}

/** +1 = harder (accuracy > 90%), −1 = easier (< 70%), 0 = in the band. */
export function controllerShift(acc: number | null): number {
  if (acc === null) return 0;
  if (acc > 0.9) return 1;
  if (acc < 0.7) return -1;
  return 0;
}

export function newBudget(shift: number): number {
  return Math.max(1, BASE_NEW + (shift > 0 ? 1 : shift < 0 ? -2 : 0));
}

export function buildSession(i: BuildInput): Built {
  const rand = i.rand ?? Math.random;
  const target = Math.max(8, Math.round(i.minutes * TASKS_PER_MIN));
  const today = startOfDay(i.now);
  const byId = new Map(i.items.map((x) => [x.id, x]));
  const langCards = Object.values(i.cards).filter((c) => c.lang === i.lang && byId.has(c.id));
  const welcomeBack = langCards.length > 0 && i.lastSessionAt !== undefined && i.now - i.lastSessionAt >= AWAY_DAYS * DAY;
  const shift = welcomeBack ? -1 : controllerShift(rollingAccuracy(i.reviews, i.lang));

  let k = 0;
  const mk = (itemId: string, role: Role, graded = true): Task => ({ key: `${role}-${itemId}-${k++}`, itemId, role, graded });

  if (i.kind === "speed") {
    const learned = langCards.filter((c) => c.state !== 0 && byId.get(c.id)?.type !== "dialogue" && byId.get(c.id)?.type !== "listening");
    const pool = shuffle(learned.map((c) => c.id), rand).slice(0, 40);
    return { tasks: pool.map((id) => mk(id, "speed")), welcomeBack: false, reviewCount: 0, newCount: 0, shift };
  }

  // 1. due reviews, oldest-overdue first, capped per chunk and per day
  const reviewedToday = new Set(i.reviews.filter((r) => r.lang === i.lang && r.t >= today && r.mode !== "guess").map((r) => r.id)).size;
  const dailyLeft = Math.max(0, MAX_REVIEWS_PER_DAY - reviewedToday);
  const due = langCards.filter((c) => c.due <= i.now && c.state !== 0).sort((a, b) => a.due - b.due);
  // never-rated cards (introduced but the follow-up never happened) count as due too
  const unrated = langCards.filter((c) => c.state === 0).sort((a, b) => a.introducedAt - b.introducedAt);
  const reviewCap = i.kind === "new" ? 0 : Math.min(MAX_REVIEWS_PER_CHUNK, dailyLeft);
  const excl = i.exclude ?? new Set<string>();
  const prio = (i.priority ?? []).filter((id) => i.cards[id] && byId.has(id) && !excl.has(id)).slice(0, MAX_REVIEWS_PER_CHUNK);
  const prioSet = new Set(prio);
  const reviewIds = [...prio, ...interleave([...due, ...unrated].map((c) => c.id).filter((id) => !prioSet.has(id) && !excl.has(id)), byId)].slice(0, Math.max(reviewCap, i.kind === "new" ? 0 : prio.length));

  // 2. new items in unit order from the learner's current unit (custom words from class first)
  let newN = welcomeBack || i.kind === "review" ? 0 : i.kind === "new" ? 8 : newBudget(shift);
  if (i.kind === "auto" && !welcomeBack && reviewIds.length < 4) newN += 1; // a quiet day: one more new word
  const fresh = i.items.filter((x) => !i.cards[x.id] && (i.unitIndexOf(x) === 0 || i.unitIndexOf(x) >= i.startUnit));
  fresh.sort((a, b) => (i.unitIndexOf(a) || -1) - (i.unitIndexOf(b) || -1));
  const newIds = interleave(fresh.map((x) => x.id), byId, false).slice(0, newN);
  // Start with meaning, not an audio-only spelling guess.
  if (newIds.length > 1 && byId.get(newIds[0])?.type === "sound") {
    const k = newIds.findIndex((id) => byId.get(id)?.type !== "sound");
    if (k > 0) newIds.unshift(newIds.splice(k, 1)[0]);
  }

  // 3. assemble: reviews interleaved with intros; each intro's follow-up lands 3–6 tasks later
  const seq: Task[] = [];
  const pending: { task: Task; at: number }[] = [];
  const R = [...reviewIds];
  const N = [...newIds];
  let lastType = "";
  while (R.length || N.length || pending.length) {
    pending.sort((a, b) => a.at - b.at);
    if (pending.length && pending[0].at <= seq.length) {
      seq.push(pending.shift()!.task);
      continue;
    }
    const introTurn = N.length && (R.length === 0 || seq.length % 3 === 1);
    if (introTurn) {
      const id = N.shift()!;
      seq.push(mk(id, "intro", false));
      pending.push({ task: mk(id, "followup"), at: seq.length + 3 + Math.floor(rand() * 3) });
      continue;
    }
    if (R.length) {
      let idx = R.findIndex((id) => byId.get(id)?.type !== lastType);
      if (idx < 0) idx = 0;
      const id = R.splice(idx, 1)[0];
      lastType = byId.get(id)?.type ?? "";
      seq.push(mk(id, "review"));
      continue;
    }
    if (pending.length) seq.push(pending.shift()!.task);
  }

  // 4. fill up to the chunk size with practice on learned-but-not-due cards (weakest first)
  if (seq.length < target && i.kind !== "new") {
    const inSeq = new Set(seq.map((t) => t.itemId));
    const practice = langCards
      .filter((c) => !inSeq.has(c.id) && !excl.has(c.id) && c.state !== 0)
      .map((c) => ({ id: c.id, r: retrievability(c, i.now) }))
      .sort((a, b) => a.r - b.r)
      .slice(0, target - seq.length);
    for (const p of practice) seq.push(mk(p.id, "practice"));
  }

  return { tasks: seq, welcomeBack, reviewCount: reviewIds.length, newCount: newIds.length, shift };
}

/** Reorder so neighbours differ in item type where possible (keeps relative order otherwise). */
export function interleave(ids: string[], byId: Map<string, Item>, strict = true): string[] {
  const left = [...ids];
  const out: string[] = [];
  let last = "";
  while (left.length) {
    let idx = left.findIndex((id) => byId.get(id)?.type !== last);
    if (idx < 0 || (!strict && idx > 3)) idx = 0;
    const id = left.splice(idx, 1)[0];
    last = byId.get(id)?.type ?? "";
    out.push(id);
  }
  return out;
}

/** After a miss: requeue the item 3 tasks later (max 2 times per item per session). */
export function requeue(tasks: Task[], index: number, counts: Map<string, number>): Task[] {
  const t = tasks[index];
  const n = counts.get(t.itemId) ?? 0;
  if (n >= REQUEUE_CAP) return tasks;
  counts.set(t.itemId, n + 1);
  const copy: Task = { ...t, key: `${t.key}-rq${n + 1}`, role: "requeue", graded: true };
  const at = Math.min(tasks.length, index + 4);
  return [...tasks.slice(0, at), copy, ...tasks.slice(at)];
}

// ── Mode ladder ──────────────────────────────────────────────────────────

const TIERS: Mode[][] = [
  ["recognize", "pick-spelling", "question"],
  ["tiles", "article", "listen"],
  ["recall"],
];

export function defaultModes(item: Item): Mode[] {
  switch (item.type) {
    case "sound":
      return ["pick-spelling", "listen", "recall"];
    case "word":
      return item.pos === "noun" && item.gender ? ["recognize", "article", "listen", "recall"] : ["recognize", "listen", "recall"];
    case "phrase":
      return item.target.trim().split(/\s+/).length >= 2 ? ["recognize", "listen", "tiles", "recall"] : ["recognize", "listen", "recall"];
    case "sentence":
      return ["recognize", "tiles", "listen", "recall"];
    case "pattern":
      return item.question ? ["question", "tiles", "recall"] : ["recognize", "tiles", "recall"];
    case "listening":
    case "dialogue":
      return ["question"];
    case "bridge":
      return ["recognize"];
  }
}

export interface ModeCtx {
  canListen: boolean;
  shift: number; // controller
  role: Role;
}

/** Mode ladder: recognize → tiles/article/listen → recall. Promote on stability ≥ 3 days. */
export function chooseMode(item: Item, card: CardV2 | undefined, ctx: ModeCtx): Mode {
  if (ctx.role === "intro") return "guess";
  if (ctx.role === "speed") return "speed";
  let allowed: Mode[] = (item.exercises as Mode[] | undefined)?.filter((m) => m !== "guess" && (m as string) !== "speak") ?? defaultModes(item);
  if (!allowed.length) allowed = defaultModes(item);
  if (!ctx.canListen) allowed = allowed.filter((m) => m !== "listen" && m !== "pick-spelling");
  if (item.type === "sound" && !ctx.canListen && !allowed.length) allowed = ["recall"];
  if (!allowed.length) allowed = ["recognize"];
  if (allowed.includes("article") && !articleOf(item)) allowed = allowed.filter((m) => m !== "article");
  if (allowed.includes("tiles") && item.target.trim().split(/\s+/).length < 2) allowed = allowed.filter((m) => m !== "tiles");
  if (!allowed.length) allowed = ["recognize"];

  const s = card?.stability ?? 0;
  let level = card && card.state !== 0 ? (s >= 3 ? 2 : s >= 1 ? 1 : 0) : 0;
  if (ctx.role === "followup") level = 0;
  if (ctx.role === "requeue") level = Math.max(0, level - 1);
  level = Math.max(0, Math.min(2, level + ctx.shift));
  const reps = card?.reps ?? 0;
  for (const d of [0, -1, -2, 1, 2]) {
    const L = level + d;
    if (L < 0 || L > 2) continue;
    const options = TIERS[L].filter((m) => allowed.includes(m));
    if (options.length) return options[reps % options.length];
  }
  return allowed[0];
}

const IT_ARTICLES = ["il", "lo", "la", "l'", "i", "gli", "le"];
const DE_ARTICLES = ["der", "die", "das"];

/** The definite article on a noun item ("der Kaffee" → der, "l'amico" → l'), or null. */
export function articleOf(item: Item): { article: string; rest: string; options: string[] } | null {
  if (item.pos !== "noun") return null;
  const t = item.target.trim();
  if (item.lang === "de") {
    const m = t.match(/^(der|die|das)\s+(.+)$/i);
    return m ? { article: m[1].toLowerCase(), rest: m[2], options: DE_ARTICLES } : null;
  }
  const m = t.match(/^(l')(.+)$/i) ?? t.match(/^(il|lo|la|i|gli|le)\s+(.+)$/i);
  return m ? { article: m[1].toLowerCase(), rest: m[2], options: IT_ARTICLES } : null;
}

export function shuffle<T>(a: T[], rand: () => number = Math.random): T[] {
  const x = [...a];
  for (let j = x.length - 1; j > 0; j--) {
    const r = Math.floor(rand() * (j + 1));
    [x[j], x[r]] = [x[r], x[j]];
  }
  return x;
}

export function lastSessionAt(db: DB, lang: TargetLang): number | undefined {
  const s = db.sessions.filter((x) => x.lang === lang);
  return s.length ? s[s.length - 1].t : undefined;
}
