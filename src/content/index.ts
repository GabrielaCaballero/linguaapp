import type { DB, Item, Lang } from "@/lib/types";
import { ITALIAN } from "./it";
import { GERMAN } from "./de";

export const BUILT_IN: Item[] = [...ITALIAN, ...GERMAN];

export function itemsFor(lang: Lang, db: DB): Item[] {
  return [...BUILT_IN, ...db.custom].filter((i) => i.lang === lang);
}

export function itemById(db: DB): Map<string, Item> {
  return new Map([...BUILT_IN, ...db.custom].map((i) => [i.id, i]));
}

export const LANG_LABEL: Record<Lang, string> = { it: "Italiano", de: "Deutsch" };
export const LANG_FLAG: Record<Lang, string> = { it: "🇮🇹", de: "🇩🇪" };
export const BRIDGE_LABEL: Record<Lang, string> = { it: "Español", de: "English" };
