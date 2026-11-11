// Lingua v2 content entry point. The engine imports content ONLY from here (`@/content`).
import type { CoursePack, TargetLang } from "./schema";
import { course as it } from "./it/index";
import { course as de } from "./de/index";

export const courses: Record<TargetLang, CoursePack> = { it, de };

export type * from "./schema";
