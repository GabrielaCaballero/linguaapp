// Lingua v2 content entry point. The engine imports content ONLY from here (`@/content`).
import type { CoursePack, TargetLang } from "./schema";
import { course as it } from "./it/index";
import { course as de } from "./de/index";
import { course as en } from "./en/index";
import { course as fr } from "./fr/index";
import { course as pt } from "./pt/index";

export const courses: Record<TargetLang, CoursePack> = { it, de, en, fr, pt };

export type * from "./schema";
export { TARGET_LANGS } from "./schema";
export { LANG_INFO, availableLangs, type LangInfo } from "./languages";
