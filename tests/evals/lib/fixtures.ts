// Shared helpers for the QA eval suite. Evals run against the REAL shipped content
// (`@/content`), not the unit-test mini course, because the content is what learners see.
import { courses } from "@/content";
import type { BaseLang, Item, Lexicon, TargetLang } from "@/content/schema";

export const ALL_ITEMS: Item[] = (["it", "de"] as TargetLang[]).flatMap((l) => courses[l].units.flatMap((u) => u.items));

const byId = new Map(ALL_ITEMS.map((i) => [i.id, i]));

/** A real content item by id. Throws if the id disappeared (that itself is a regression). */
export function I(id: string): Item {
  const i = byId.get(id);
  if (!i) throw new Error(`content item not found: ${id}`);
  return i;
}

export function hasItem(id: string): boolean {
  return byId.has(id);
}

/** A synthetic item (for checker rules the A1 content does not exercise yet, e.g. den/dem, separable verbs). */
export function W(lang: TargetLang, target: string, extra: Partial<Item> = {}): Item {
  const words = target.trim().split(/\s+/).length;
  return {
    id: `${lang}-qa-${target.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    lang,
    unit: `${lang}-u01`,
    type: words >= 3 ? "sentence" : words === 2 ? "phrase" : "word",
    cefr: "A1.1",
    target,
    gloss: { es: "x", en: "x" },
    spoken: target,
    tags: ["qa"],
    ...extra,
  };
}

export function lexicon(lang: TargetLang): Lexicon {
  return courses[lang].lexicon;
}

export const BASES: BaseLang[] = ["es", "en"];

/** Deterministic PRNG (LCG) so simulations are reproducible run to run. */
export function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

export function normal(r: () => number) {
  const u = Math.max(1e-9, r());
  const v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Stable short hash (FNV-1a) used by the content audit to detect items that changed since grading. */
export function hash(s: string): string {
  let h = 0x811c9dc5;
  for (let k = 0; k < s.length; k++) {
    h ^= s.charCodeAt(k);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}
