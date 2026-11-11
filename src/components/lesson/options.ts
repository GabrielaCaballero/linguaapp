// Building answer options for choice exercises. Pure; deterministic per task key.
import type { BaseLang, Item, Lexicon } from "@/content/schema";
import { gl } from "@/lib/content";
import { articleOf } from "@/lib/session";

export function seeded(key: string): () => number {
  let h = 2166136261;
  for (let k = 0; k < key.length; k++) h = Math.imul(h ^ key.charCodeAt(k), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

export function shuffleWith<T>(a: T[], r: () => number): T[] {
  const x = [...a];
  for (let j = x.length - 1; j > 0; j--) {
    const k = Math.floor(r() * (j + 1));
    [x[j], x[k]] = [x[k], x[j]];
  }
  return x;
}

const uniq = (xs: string[]) => {
  const seen = new Set<string>();
  return xs.filter((x) => {
    const k = x.trim().toLowerCase();
    if (!x.trim() || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};

/** Meaning options: the item's gloss + 3 glosses of similar items. */
export function meaningOptions(item: Item, pool: Item[], base: BaseLang, key: string): { options: string[]; answer: number } {
  const r = seeded(key);
  const right = gl(item.gloss, base);
  const similar = pool.filter((p) => p.id !== item.id && p.type === item.type && (!item.pos || p.pos === item.pos));
  const others = pool.filter((p) => p.id !== item.id);
  const cands = uniq([...shuffleWith(similar, r), ...shuffleWith(others, r)].map((p) => gl(p.gloss, base))).filter((g) => g.toLowerCase() !== right.toLowerCase());
  const options = shuffleWith([right, ...cands.slice(0, 3)], r);
  return { options, answer: options.indexOf(right) };
}

/** Target-language options: the target + distractors (or other items' targets). */
export function targetOptions(item: Item, pool: Item[], key: string): { options: string[]; answer: number } {
  const r = seeded(key);
  const right = item.target;
  const useDistractors = item.type === "word" || item.type === "phrase" || item.type === "sound" || item.type === "bridge";
  let cands: string[] = [];
  if (item.type === "sound" && item.pair) cands.push(...item.pair);
  if (useDistractors) cands.push(...(item.distractors ?? []));
  cands.push(...shuffleWith(pool.filter((p) => p.id !== item.id && p.type === item.type), r).map((p) => p.target));
  cands = uniq(cands).filter((c) => c.toLowerCase() !== right.toLowerCase());
  const options = shuffleWith([right, ...cands.slice(0, 3)], r);
  return { options, answer: options.indexOf(right) };
}

export function articleOptions(item: Item, key: string): { options: string[]; answer: number; rest: string } | null {
  const a = articleOf(item);
  if (!a) return null;
  const r = seeded(key);
  const others = a.options.filter((o) => o !== a.article);
  const pick = item.lang === "de" ? others : shuffleWith(others, r).slice(0, 3);
  const options = item.lang === "de" ? a.options : shuffleWith([a.article, ...pick], r);
  return { options, answer: options.indexOf(a.article), rest: a.rest };
}

export function stripEnd(s: string): string {
  return s.trim().replace(/[.!?…]+$/, "");
}

export function tileSet(item: Item, lex: Lexicon, key: string): { tiles: string[]; answer: string[] } {
  const r = seeded(key);
  const answer = stripEnd(item.target).split(/\s+/);
  const lower = new Set(answer.map((x) => x.toLowerCase()));
  let extra = (item.distractors ?? []).filter((d) => !/\s/.test(d) && !lower.has(d.toLowerCase()));
  if (extra.length < 2) extra = [...extra, ...shuffleWith(lex.closedClass.filter((c) => !lower.has(c.toLowerCase()) && c.length > 1), r)];
  const tiles = shuffleWith([...answer, ...uniq(extra).slice(0, Math.min(3, Math.max(2, Math.ceil(answer.length / 2))))], r);
  return { tiles, answer };
}
