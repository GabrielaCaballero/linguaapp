// The courses the content evals cover: every registered course that has units (a new course is
// checked as soon as its first unit lands, before it's shown to learners).
import { courses } from "@/content";
import { TARGET_LANGS, type TargetLang } from "@/content/schema";

export const COURSE_LANGS: TargetLang[] = TARGET_LANGS.filter((l) => courses[l].units.length > 0);
