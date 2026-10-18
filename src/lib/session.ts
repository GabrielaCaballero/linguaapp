import type { CardState, DB, Item, Lang, Mode, Strand } from "./types";
import { itemsFor } from "@/content";
import { DAY, startOfDay } from "./dates";

export type Task = {
  key: string;
  itemId: string;
  mode: Mode;
  strand: Strand;
  /** false for "guess first" tasks: a pretest, never scored. */
  graded: boolean;
  /** For choice modes: the question shown, options, and the right option. */
  q?: string;
  choices?: string[];
  correctChoice?: string;
  /** For tiles mode. */
  tiles?: string[];
};

export function shuffle<T>(a: T[]): T[] {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

const MAX_REVIEWS = 40;

export function plan(db: DB, lang: Lang, now: number) {
  const items = itemsFor(lang, db);
  const today = startOfDay(now);
  const endOfToday = today + DAY;
  // New = met through a "guess first" task today (seeded basics and class cards don't count).
  const introducedToday = new Set(db.reviews.filter((r) => r.lang === lang && r.mode === "guess" && r.t >= today).map((r) => r.id)).size;
  const newBudget = Math.max(0, db.settings.newPerDay - introducedToday);
  const fresh = mixKinds(items.filter((i) => !db.cards[i.id])).slice(0, newBudget);
  const reviews = items
    .filter((i) => db.cards[i.id] && db.cards[i.id].due < endOfToday)
    .sort((a, b) => db.cards[a.id].due - db.cards[b.id].due)
    .slice(0, MAX_REVIEWS);
  const sessionsToday = db.sessions.filter((s) => s.lang === lang && s.t >= today);
  const secondsToday = sessionsToday.reduce((n, s) => n + s.seconds, 0);
  const learnedYesterday = items.filter((i) => {
    const c = db.cards[i.id];
    return c && c.introducedAt >= today - DAY && c.introducedAt < today && (c.lastReviewed ?? 0) < today;
  }).length;
  return { items, fresh, reviews, secondsToday, sessionsToday, learnedYesterday };
}

/** Keep module order, but within a module rotate kinds (sound, pattern, false friend…) for variety. */
function mixKinds(items: Item[]): Item[] {
  const out: Item[] = [];
  const modules = [...new Set(items.map((i) => i.module))];
  for (const m of modules) {
    const groups = new Map<string, Item[]>();
    for (const i of items.filter((x) => x.module === m)) groups.set(i.kind, [...(groups.get(i.kind) ?? []), i]);
    const lists = [...groups.values()];
    for (let k = 0; lists.some((l) => k < l.length); k++) for (const l of lists) if (k < l.length) out.push(l[k]);
  }
  return out;
}

export function strandShare(db: DB, lang: Lang, now: number): Record<Strand, number> {
  const since = now - 7 * DAY;
  const counts: Record<Strand, number> = { input: 0, output: 0, focus: 0, fluency: 0 };
  for (const r of db.reviews) if (r.lang === lang && r.t >= since) counts[r.strand]++;
  return counts;
}

const STRAND_OF: Record<Mode, Strand> = { guess: "focus", recognize: "focus", listen: "input", type: "output", tiles: "output" };

function reviewMode(item: Item, card: CardState, inputLow: boolean): Mode {
  switch (item.kind) {
    case "sound":
      return "listen";
    case "falsefriend":
      return card.reps % 2 === 0 ? "recognize" : "type";
    case "pattern":
      return "type";
    case "phrase":
      return card.reps < 3 ? "tiles" : "type";
    default:
      return inputLow || card.reps % 3 === 1 ? "listen" : "type";
  }
}

function followUpMode(item: Item): Mode {
  if (item.kind === "sound") return "listen";
  if (item.kind === "phrase") return "tiles";
  return "type";
}

function makeTask(item: Item, mode: Mode, graded: boolean, pool: Item[], n: number): Task {
  const t: Task = { key: `${item.id}:${mode}:${n}`, itemId: item.id, mode, graded, strand: STRAND_OF[mode] };
  const others = shuffle(pool.filter((p) => p.id !== item.id));
  const sameKind = others.filter((o) => o.kind === item.kind);
  const distract = (field: "answer" | "prompt") =>
    [...sameKind, ...others].map((o) => o[field]).filter((v, i, a) => v !== item[field] && a.indexOf(v) === i).slice(0, 3);

  if ((mode === "guess" || mode === "recognize" || (mode === "listen" && item.kind === "sound")) && item.guess) {
    t.q = item.guess.q;
    t.choices = shuffle(item.guess.choices);
    t.correctChoice = item.guess.a;
  } else if (mode === "guess") {
    t.q = item.prompt;
    t.choices = shuffle([item.answer, ...distract("answer")]);
    t.correctChoice = item.answer;
  } else if (mode === "listen") {
    t.q = "What did you hear?";
    t.choices = shuffle([item.prompt, ...distract("prompt")]);
    t.correctChoice = item.prompt;
  } else if (mode === "tiles") {
    const words = item.answer.split(" ");
    const extra = shuffle(
      pool.filter((p) => p.kind === "phrase" && p.id !== item.id).flatMap((p) => p.answer.split(" ")).filter((w) => !words.includes(w)),
    ).slice(0, 2);
    t.tiles = shuffle([...words, ...extra]);
  }
  return t;
}

export function buildQueue(db: DB, lang: Lang, now: number): Task[] {
  const { items, fresh, reviews } = plan(db, lang, now);
  const share = strandShare(db, lang, now);
  const total = Object.values(share).reduce((a, b) => a + b, 0);
  const inputLow = total > 10 && share.input / total < 0.2;

  let n = 0;
  const reviewTasks = shuffle(reviews).map((i) => makeTask(i, reviewMode(i, db.cards[i.id], inputLow), true, items, n++));
  const queue: Task[] = [];
  const guesses: number[] = [];
  let r = 0;
  for (const item of fresh) {
    for (let k = 0; k < 2 && r < reviewTasks.length; k++) queue.push(reviewTasks[r++]);
    guesses.push(queue.length);
    queue.push(makeTask(item, "guess", false, items, n++));
  }
  while (r < reviewTasks.length) queue.push(reviewTasks[r++]);

  // Each new item comes back a few cards later as real retrieval (test after the pretest).
  for (let g = guesses.length - 1; g >= 0; g--) {
    const item = fresh[g];
    queue.splice(Math.min(queue.length, guesses[g] + 4), 0, makeTask(item, followUpMode(item), true, items, n++));
  }
  return queue;
}

/** A missed task is re-inserted a few cards later in the same session (at most twice per item). */
export function requeue(queue: Task[], index: number, db: DB, item: Item): Task[] {
  if (queue.filter((t) => t.itemId === item.id && t.graded).length >= 3) return queue;
  const items = itemsFor(item.lang, db);
  const mode = queue[index].mode === "guess" ? followUpMode(item) : queue[index].mode;
  const t = makeTask(item, mode, true, items, queue.length + 1000);
  const q = [...queue];
  q.splice(Math.min(q.length, index + 4), 0, t);
  return q;
}

export function speedPool(db: DB, lang: Lang): Item[] {
  return itemsFor(lang, db).filter((i) => (db.cards[i.id]?.reps ?? 0) >= 1 && i.kind !== "sound");
}
