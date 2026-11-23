import type { CoursePack } from "../schema";
import { lexicon } from "./lexicon";

// Course pack placeholder: hidden from learners until LANG_INFO.fr.available is true.
export const course: CoursePack = { lang: "fr", version: "0.1.0", units: [], placement: [], lexicon, grammar: [] };
