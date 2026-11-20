// The lesson in progress, kept on the device so leaving by mistake (Back, a swipe, the app
// closed) doesn't lose it: the next lesson of the same kind picks up where this one was.
// Answers are saved in the course as they happen; this keeps the lesson's place and its summary.
import type { TargetLang } from "@/content/schema";
import type { Task } from "./session";

const KEY = "lingua:lesson";
/** After this long the lesson is stale: start a fresh one. */
export const LESSON_DRAFT_MAX_AGE = 3 * 60 * 60 * 1000;

export interface LessonDraft {
  lang: TargetLang;
  kind: string;
  unit?: number;
  tasks: Task[];
  /** The next task to show (the current one if it wasn't answered yet). */
  at: number;
  /** Seconds spent in the lesson so far (time away doesn't count). */
  elapsed: number;
  hist: boolean[];
  combo: number;
  tries: Record<string, boolean>;
  counts: [string, number][];
  extensions: number;
  stats: { graded: number; correct: number; newItems: string[]; stronger: string[]; toFix: string[]; sureWrong: number; guessRight: number; typedMiss: boolean; confUsed: number };
  savedAt: number;
}

export function saveLessonDraft(d: Omit<LessonDraft, "savedAt">) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...d, savedAt: Date.now() }));
  } catch {
    /* no storage: a lesson left by mistake starts over */
  }
}

/** The saved lesson if it matches this lesson's course and kind, is recent, and has a task left. */
export function loadLessonDraft(m: { lang: TargetLang; kind: string; unit?: number; exists: (itemId: string) => boolean }): LessonDraft | null {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) ?? "null") as LessonDraft | null;
    if (!d || !Array.isArray(d.tasks)) return null;
    if (d.lang !== m.lang || d.kind !== m.kind || (d.unit ?? null) !== (m.unit ?? null)) return null;
    if (Date.now() - d.savedAt > LESSON_DRAFT_MAX_AGE) return null;
    if (d.at < 0 || d.at >= d.tasks.length) return null;
    if (!d.tasks.every((t) => m.exists(t.itemId))) return null; // content changed since
    return d;
  } catch {
    return null;
  }
}

export function clearLessonDraft() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to clear */
  }
}
