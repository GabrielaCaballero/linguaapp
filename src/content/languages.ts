// Every course Linguina offers, in one place. To add a language (see docs/team/adding-a-language.md):
// add its code to TARGET_LANGS (schema.ts), its course pack in src/content/<code>/ and content/index.ts,
// and one entry here. Screens list courses from TARGET_LANGS, never from a fixed pair.
import type { BaseLang, TargetLang } from "./schema";

export interface LangInfo {
  /** The language's own name ("Italiano", "Deutsch"): shown on course pickers. */
  native: string;
  /** Two letters on the round seal. */
  seal: string;
  /** Speech-synthesis locale. */
  locale: string;
  /** One line under the name when choosing what to learn. */
  tag: Record<BaseLang, string>;
  /** Setup's three "Can you already…?" questions (simple self-assessment before the level test). */
  canDo: Record<BaseLang, [string, string, string]>;
}

export const LANG_INFO: Record<TargetLang, LangInfo> = {
  it: {
    native: "Italiano",
    seal: "IT",
    locale: "it-IT",
    tag: { en: "Bright, musical, close to Spanish", es: "Luminoso, musical, cercano al español" },
    canDo: {
      en: ["say hello, your name and where you're from?", "order a coffee and ask the price?", "talk about your family and your day?"],
      es: ["saludar, decir tu nombre y de dónde eres?", "pedir un café y preguntar el precio?", "hablar de tu familia y de tu día?"],
    },
  },
  de: {
    native: "Deutsch",
    seal: "DE",
    locale: "de-DE",
    tag: { en: "Precise, logical, spoken across central Europe", es: "Preciso, lógico, se habla en media Europa" },
    canDo: {
      en: ["say hello, your name and where you're from?", "order food and ask the price?", "talk about your family and your day?"],
      es: ["saludar, decir tu nombre y de dónde eres?", "pedir comida y preguntar el precio?", "hablar de tu familia y de tu día?"],
    },
  },
};
