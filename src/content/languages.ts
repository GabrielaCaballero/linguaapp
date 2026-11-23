// Every course Linguina offers, in one place. To add a language (see docs/team/adding-a-language.md):
// add its code to TARGET_LANGS (schema.ts), its course pack in src/content/<code>/ and content/index.ts,
// and one entry here. Screens list courses from TARGET_LANGS, never from a fixed pair.
import type { BaseLang, TargetLang } from "./schema";

export interface LangInfo {
  /** Shown to learners. A new course stays false until its content is complete and reviewed. */
  available: boolean;
  /** Languages it can be explained in (an English course isn't offered to English speakers). */
  bases: BaseLang[];
  /** The language's own name ("Italiano", "Deutsch"): shown on course pickers. */
  native: string;
  /** Two letters (screen readers, fallbacks). */
  seal: string;
  /** The round flag shown next to the course name: stripes, top-to-bottom ("h") or left-to-right ("v").
   *  A language isn't a country: pick the flag learners expect (owner, 2026-11-21). */
  flag: { dir: "h" | "v"; colors: string[] } | { svg: string };
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
    available: true,
    bases: ["es", "en"],
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
    available: true,
    bases: ["es", "en"],
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
  en: {
    available: false,
    bases: ["es"],
    native: "English",
    seal: "EN",
    // US English (Latin-American learners mostly meet American English). Simplified US flag
    // inside the stamp's 36×44 window at (7,7): 7 stripes, a blue canton with a few stars.
    flag: {
      svg:
        '<rect x="7" y="7" width="36" height="44" fill="#fff"/>' +
        [0, 2, 4, 6].map((k) => `<rect x="7" y="${7 + k * (44 / 7)}" width="36" height="${44 / 7 + 0.2}" fill="#b22234"/>`).join("") +
        '<rect x="7" y="7" width="18" height="18.9" fill="#3c3b6e"/>' +
        [0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => `<circle cx="${11 + c * 5}" cy="${11 + r * 5.5}" r="1.1" fill="#fff"/>`)).join(""),
    },
    locale: "en-US",
    tag: { en: "About 1.5 billion speakers (≈18% of the world)", es: "Unos 1.500 millones de hablantes (≈18 % del mundo) · Dificultad media" },
    canDo: {
      en: ["say hello, your name and where you're from?", "order food and ask the price?", "talk about your family and your day?"],
      es: ["saludar, decir tu nombre y de dónde eres?", "pedir comida y preguntar el precio?", "hablar de tu familia y de tu día?"],
    },
  },
  fr: {
    available: false,
    bases: ["es", "en"],
    native: "Français",
    seal: "FR",
    flag: { dir: "v", colors: ["#0055a4", "#ffffff", "#ef4135"] },
    locale: "fr-FR",
    tag: { en: "About 310 million speakers (≈3.8% of the world) · Easy for English speakers", es: "Unos 310 millones de hablantes (≈3,8 % del mundo) · Fácil desde el español" },
    canDo: {
      en: ["say hello, your name and where you're from?", "order a coffee and ask the price?", "talk about your family and your day?"],
      es: ["saludar, decir tu nombre y de dónde eres?", "pedir un café y preguntar el precio?", "hablar de tu familia y de tu día?"],
    },
  },
};

/** The courses learners can pick now (in this app language: no English course for English speakers). */
export function availableLangs(appLang?: BaseLang): TargetLang[] {
  return (Object.keys(LANG_INFO) as TargetLang[]).filter((l) => LANG_INFO[l].available && l !== appLang);
}
