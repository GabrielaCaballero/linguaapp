// Small authoring helper for unit files. Content stream only.
// Fills the repetitive fields (lang, unit, full id, cefr default, spoken default)
// and adds the Swiss "ss" spelling as an accepted alternative wherever a German
// target contains ß (the checker accepts it anyway; this keeps the data explicit).
import type { Cefr, Item, Mcq, TargetLang } from "./schema";

export type Draft = Omit<Item, "id" | "lang" | "unit" | "cefr" | "spoken"> & {
  /** slug only: "buongiorno" → "it-u01-buongiorno" */
  id: string;
  cefr?: Cefr;
  /** defaults to target; set it whenever target contains digits or abbreviations */
  spoken?: string;
};

export function unitId(lang: TargetLang, n: number): string {
  return `${lang}-u${String(n).padStart(2, "0")}`;
}

export function build(lang: TargetLang, n: number, cefr: Cefr, drafts: Draft[]): Item[] {
  const unit = unitId(lang, n);
  return drafts.map((d) => {
    const item: Item = {
      ...d,
      id: `${unit}-${d.id}`,
      lang,
      unit,
      cefr: d.cefr ?? cefr,
      spoken: d.spoken ?? d.target,
    };
    if (item.question) item.question = rotateMcq(item.question, item.id);
    if (lang === "de" && item.target.includes("ß")) {
      const swiss = item.target.replace(/ß/g, "ss");
      const accept = item.accept ?? [];
      if (!accept.some((a) => a.text === swiss)) {
        item.accept = [...accept, { text: swiss, verdict: "correct" }];
      }
    }
    return item;
  });
}

/** Stable string hash (no randomness: content must be identical on every build). */
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Authors write the key as option 0. This rotates options deterministically per id
 * so the key lands in different slots even if the engine doesn't shuffle.
 */
export function rotateMcq(m: Mcq, seed: string): Mcq {
  const n = m.options.length;
  const k = n > 1 ? hash(seed) % n : 0;
  if (k === 0) return m;
  const options = m.options.map((_, i) => m.options[(i + k) % n]);
  return { ...m, options, answer: (m.answer - k + n) % n };
}

export function spreadAnswers<T extends { id: string; mcq?: Mcq }>(xs: T[]): T[] {
  return xs.map((x) => (x.mcq ? { ...x, mcq: rotateMcq(x.mcq, x.id) } : x));
}
