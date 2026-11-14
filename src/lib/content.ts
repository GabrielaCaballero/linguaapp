// Engine-side content helpers. The engine reads course packs ONLY through `@/content`
// (src/content/index.ts, written by the content stream). Tests use tests/fixtures/mini-course.ts.
import { courses } from "@/content";
import type { BaseLang, CoursePack, Glossed, Item, Lexicon, TargetLang, Unit, GrammarPoint } from "@/content/schema";
import type { DB } from "./model";

export const COURSES: Record<TargetLang, CoursePack> = courses;

export function course(lang: TargetLang): CoursePack {
  return COURSES[lang];
}

export function units(lang: TargetLang): Unit[] {
  return [...COURSES[lang].units].sort((a, b) => a.index - b.index);
}

export function lexicon(lang: TargetLang): Lexicon {
  return COURSES[lang].lexicon;
}

let builtInIndex: Map<string, Item> | null = null;
function builtIn(): Map<string, Item> {
  if (!builtInIndex) {
    builtInIndex = new Map();
    for (const lang of ["it", "de"] as TargetLang[]) for (const u of COURSES[lang].units) for (const i of u.items) builtInIndex.set(i.id, i);
  }
  return builtInIndex;
}

export function itemById(db: Pick<DB, "custom"> | null, id: string): Item | undefined {
  return builtIn().get(id) ?? db?.custom.find((c) => c.id === id);
}

/** Every item the learner could study in a course, in path order (custom words last). */
export function itemsFor(lang: TargetLang, db: Pick<DB, "custom"> | null, explainIn?: BaseLang): Item[] {
  const out: Item[] = [];
  for (const u of units(lang)) for (const i of u.items) if (visible(i, explainIn)) out.push(i);
  if (db) for (const c of db.custom) if (c.lang === lang) out.push(c);
  return out;
}

/** Bridge items only show for their explain-in language. */
export function visible(i: Item, explainIn?: BaseLang): boolean {
  if (i.type === "bridge" && i.onlyFor && explainIn && i.onlyFor !== explainIn) return false;
  return true;
}

export function unitOf(item: Item): Unit | undefined {
  if (item.unit === "custom") return undefined;
  return COURSES[item.lang].units.find((u) => u.id === item.unit);
}

export function gl(g: Glossed | undefined, base: BaseLang): string {
  if (!g) return "";
  return g[base] || g.es || g.en || "";
}

export function per(p: Partial<Record<BaseLang, string>> | undefined, base: BaseLang): string | undefined {
  if (!p) return undefined;
  return p[base] || undefined;
}

/** How the target appears to the learner. German nouns always show with their article (content provides it). */
export function shown(i: Item): string {
  return i.target;
}

export const LANG_NAME: Record<TargetLang, string> = { it: "Italiano", de: "Deutsch" };
export const SEAL: Record<TargetLang, string> = { it: "IT", de: "DE" };
export const LOCALE: Record<TargetLang, string> = { it: "it-IT", de: "de-DE" };

/** A grammar point by id (content v2.1), or undefined. */
export function grammarPoint(id: string | undefined): GrammarPoint | undefined {
  if (!id) return undefined;
  const lang = id.startsWith("de-") ? "de" : id.startsWith("it-") ? "it" : undefined;
  return lang ? COURSES[lang].grammar?.find((g) => g.id === id) : undefined;
}

/** All grammar points of a course, in level order. */
export function grammarFor(lang: TargetLang): GrammarPoint[] {
  return COURSES[lang].grammar ?? [];
}
