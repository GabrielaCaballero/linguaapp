// Every course Linguina offers, in one place. To add a language (see docs/team/adding-a-language.md):
// add its code to TARGET_LANGS (schema.ts), its course pack in src/content/<code>/ and content/index.ts,
// and one entry here. Screens list courses from TARGET_LANGS, never from a fixed pair.
import type { BaseLang, TargetLang } from "./schema";

export interface LangInfo {
  /** The language's own name ("Italiano", "Deutsch"): shown on course pickers. */
  native: string;
  /** Two letters (screen readers, fallbacks). */
  seal: string;
  /** The round flag shown next to the course name: stripes, top-to-bottom ("h") or left-to-right ("v").
   *  A language isn't a country: pick the flag learners expect (owner, 2026-11-21). */
  flag: { dir: "h" | "v"; colors: string[] };
  /** Speech-synthesis locale. */
  locale: string;
  /** One line under the name when choosing what to learn: how many people speak it and how hard it
   *  is from the learner's language (owner, 2026-11-22). Sources: speakers (first + second language)
   *  from Ethnologue 2024; difficulty from the US Foreign Service Institute's training times for
   *  English speakers, and language distance for Spanish speakers. World population ≈ 8.2 billion. */
  tag: Record<BaseLang, string>;
  /** Setup's three "Can you already…?" questions (simple self-assessment before the level test). */
  canDo: Record<BaseLang, [string, string, string]>;
}

export const LANG_INFO: Record<TargetLang, LangInfo> = {
  it: {
    native: "Italiano",
    seal: "IT",
    flag: { dir: "v", colors: ["#009246", "#ffffff", "#ce2b37"] },
    locale: "it-IT",
    tag: { en: "About 67 million speakers (≈0.8% of the world) · Easy for English speakers", es: "Unos 67 millones de hablantes (≈0,8 % del mundo) · Muy fácil desde el español" },
    canDo: {
      en: ["say hello, your name and where you're from?", "order a coffee and ask the price?", "talk about your family and your day?"],
      es: ["saludar, decir tu nombre y de dónde eres?", "pedir un café y preguntar el precio?", "hablar de tu familia y de tu día?"],
    },
  },
  de: {
    native: "Deutsch",
    seal: "DE",
    flag: { dir: "h", colors: ["#000000", "#dd0000", "#ffce00"] },
    locale: "de-DE",
    tag: { en: "About 134 million speakers (≈1.6% of the world) · Medium: takes longer than Italian", es: "Unos 134 millones de hablantes (≈1,6 % del mundo) · Dificultad media" },
    canDo: {
      en: ["say hello, your name and where you're from?", "order food and ask the price?", "talk about your family and your day?"],
      es: ["saludar, decir tu nombre y de dónde eres?", "pedir comida y preguntar el precio?", "hablar de tu familia y de tu día?"],
    },
  },
};
