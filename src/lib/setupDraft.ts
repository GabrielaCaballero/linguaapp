// Setup answers kept across the sign-up step. The level test (or "I've never studied it")
// needs no account; right after it the learner creates one, which can leave the page (Google)
// or take a few minutes (the emailed code). Setup then continues where it was.
import type { BaseLang, TargetLang } from "@/content/schema";
import { DAY } from "./dates";

const KEY = "lingua:setup";
const MAX_AGE = 14 * DAY;

export interface SetupDraft<D = unknown> {
  appLang: BaseLang;
  langs: TargetLang[];
  drafts: Partial<Record<TargetLang, D>>;
  at: number;
}

export function saveSetupDraft<D>(d: Omit<SetupDraft<D>, "at">) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...d, at: Date.now() }));
  } catch {
    /* no storage: setup starts over after signing up */
  }
}

export function loadSetupDraft<D>(): SetupDraft<D> | null {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) ?? "null") as SetupDraft<D> | null;
    if (!d || !Array.isArray(d.langs) || !d.langs.length || Date.now() - d.at > MAX_AGE) return null;
    return d;
  } catch {
    return null;
  }
}

export function clearSetupDraft() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to clear */
  }
}
