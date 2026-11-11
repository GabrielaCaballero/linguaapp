// Goal → minutes per day. Spec §4.5. All numbers are estimates and labelled as such in the UI.
import type { BaseLang, Cefr, TargetLang } from "@/content/schema";
import type { Goal, GoalLevel } from "./model";
import { DAY } from "./dates";

/** Cumulative guided hours from zero to the END of each level. */
export const HOURS: Record<"A0" | GoalLevel, number> = { A0: 0, "A1.1": 45, A1: 90, A2: 190, B1: 375 };

/** Where a placed learner already is (placed band = roughly halfway through that band). */
export const CURRENT_HOURS: Record<Cefr, number> = { A0: 0, "A1.1": 22.5, "A1.2": 67.5, A2: 140, B1: 282.5 };

export const MULT: Record<`${BaseLang}-${TargetLang}`, number> = { "es-it": 0.7, "en-it": 1.0, "en-de": 1.25, "es-de": 1.3 };

export const LEVELS: GoalLevel[] = ["A1.1", "A1", "A2", "B1"];
export const MIN_CLAMP = 5;
export const MAX_CLAMP = 90;
const WEEK = 7 * DAY;

export type Feasibility = "relaxed" | "steady" | "ambitious" | "demanding";

export function feasibility(minPerDay: number): Feasibility {
  if (minPerDay <= 15) return "relaxed";
  if (minPerDay <= 30) return "steady";
  if (minPerDay <= 45) return "ambitious";
  return "demanding";
}

const roundUp5 = (x: number) => Math.ceil(x / 5) * 5;
const clamp = (x: number) => Math.max(MIN_CLAMP, Math.min(MAX_CLAMP, x));

export interface PlanInput {
  base: BaseLang;
  lang: TargetLang;
  current: Cefr;
  target: GoalLevel;
  /** Deadline (epoch ms). */
  by: number;
  now: number;
  daysPerWeek?: number;
  classHoursPerWeek?: number;
}

/** Minutes of app practice still needed to reach `target`. */
export function needMinutes(i: Omit<PlanInput, "by" | "now"> & { weeks: number }): number {
  const m = MULT[`${i.base}-${i.lang}`];
  const gap = Math.max(0, HOURS[i.target] - CURRENT_HOURS[i.current]);
  return Math.max(0, gap * m * 60 - (i.classHoursPerWeek ?? 0) * i.weeks * 60);
}

export interface Plan {
  minPerDay: number;
  /** The raw number before clamping to 5…90. */
  rawMinPerDay: number;
  label: Feasibility;
  weeks: number;
  needMin: number;
  alreadyThere: boolean;
}

export function planForDate(i: PlanInput): Plan {
  const days = i.daysPerWeek ?? 5;
  const weeks = Math.max(1, (i.by - i.now) / WEEK);
  const need = needMinutes({ ...i, weeks });
  const raw = need / (weeks * days);
  const minPerDay = clamp(roundUp5(raw));
  return { minPerDay, rawMinPerDay: raw, label: feasibility(raw > MAX_CLAMP ? raw : minPerDay), weeks, needMin: need, alreadyThere: need === 0 };
}

/** Steady: given minutes/day, when will the learner reach `target`? */
export function projectedDate(i: Omit<PlanInput, "by"> & { minPerDay: number }): number {
  const days = i.daysPerWeek ?? 5;
  const m = MULT[`${i.base}-${i.lang}`];
  const gapMin = Math.max(0, HOURS[i.target] - CURRENT_HOURS[i.current]) * m * 60;
  const perWeek = i.minPerDay * days + (i.classHoursPerWeek ?? 0) * 60;
  if (perWeek <= 0) return Infinity;
  return i.now + (gapMin / perWeek) * WEEK;
}

/** Next goal level above where the learner is now. */
export function nextLevel(current: Cefr): GoalLevel {
  const order: GoalLevel[] = ["A1.1", "A1", "A2", "B1"];
  const have = CURRENT_HOURS[current];
  return order.find((l) => HOURS[l] > have) ?? "B1";
}

/** Amber-card alternatives: (a) the date that needs 30 min/day; (b) the highest level reachable by the date at 30 min/day. */
export function alternatives(i: PlanInput): { dateAt30: number; levelAt30: GoalLevel | null } {
  const dateAt30 = projectedDate({ ...i, minPerDay: 30 });
  let levelAt30: GoalLevel | null = null;
  for (const l of LEVELS) {
    if (HOURS[l] <= CURRENT_HOURS[i.current]) continue;
    const p = planForDate({ ...i, target: l });
    if (p.rawMinPerDay <= 30) levelAt30 = l;
  }
  return { dateAt30, levelAt30 };
}

/** Daily target for a course, from its goal. */
export function dailyMinutes(g: Goal | undefined): number {
  if (!g) return 10;
  if (g.kind === "maintain") return 5;
  return g.minutesPerDay;
}

export function retentionFor(kind: Goal["kind"]): number {
  return kind === "maintain" ? 0.85 : 0.9;
}
