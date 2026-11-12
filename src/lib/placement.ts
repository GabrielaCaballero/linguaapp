// Adaptive placement: Rasch model + EAP estimate on a 61-point grid over [−4, 3].
// P(correct) = 1 / (1 + e^−(θ − b)). Stop at 15 items, or SE < 0.45 after ≥ 8, or "I'm a beginner".
import type { BaseLang, Cefr, PlacementItem, TargetLang, Unit } from "@/content/schema";
import type { Experience } from "./model";

export const GRID = Array.from({ length: 61 }, (_, k) => -4 + (7 * k) / 60);
export const MIN_ITEMS = 8;
export const MAX_ITEMS = 15;
export const SE_STOP = 0.45;
export const PRIOR_SD = 1.2;

export const EXPERIENCE_THETA: Record<Experience, number> = { never: -2.5, bit: -1.5, classes: -0.5, lived: 0.5 };

/** Prior mean from self-report: experience, shifted ±0.5 by the three can-do ratings (yes=+1, partly=0, no=−1). */
export function priorMean(exp: Experience, canDo: number[] = []): number {
  const sum = canDo.reduce((a, b) => a + b, 0);
  const shift = canDo.length ? Math.max(-0.5, Math.min(0.5, (sum / canDo.length) * 0.5)) : 0;
  return EXPERIENCE_THETA[exp] + shift;
}

export interface Response {
  id: string;
  b: number;
  correct: boolean;
  weight: number;
  skill: PlacementItem["skill"];
}

export interface PlacementState {
  mu: number;
  responses: Response[];
  theta: number;
  se: number;
  done: boolean;
  beginner: boolean;
}

export function p(theta: number, b: number): number {
  return 1 / (1 + Math.exp(-(theta - b)));
}

export function eap(mu: number, responses: Response[]): { theta: number; se: number } {
  let num = 0;
  let den = 0;
  const post: number[] = [];
  for (const t of GRID) {
    let logL = -((t - mu) ** 2) / (2 * PRIOR_SD ** 2);
    for (const r of responses) {
      const pr = p(t, r.b);
      logL += r.weight * Math.log(r.correct ? pr : 1 - pr);
    }
    post.push(logL);
  }
  const max = Math.max(...post);
  const w = post.map((l) => Math.exp(l - max));
  GRID.forEach((t, k) => {
    num += t * w[k];
    den += w[k];
  });
  const theta = num / den;
  let v = 0;
  GRID.forEach((t, k) => (v += (t - theta) ** 2 * w[k]));
  return { theta, se: Math.sqrt(v / den) };
}

export function start(mu: number): PlacementState {
  const { theta, se } = eap(mu, []);
  return { mu, responses: [], theta, se, done: false, beginner: false };
}

/** Next item: unused, b nearest θ, rotating skills (avoid repeating the last skill). */
export function nextItem(bank: PlacementItem[], s: PlacementState): PlacementItem | null {
  if (s.done) return null;
  const used = new Set(s.responses.map((r) => r.id));
  const last = s.responses[s.responses.length - 1]?.skill;
  const counts = new Map<string, number>();
  for (const r of s.responses) counts.set(r.skill, (counts.get(r.skill) ?? 0) + 1);
  let best: PlacementItem | null = null;
  let bestScore = Infinity;
  for (const it of bank) {
    if (used.has(it.id)) continue;
    const score = Math.abs(it.b - s.theta) + (it.skill === last ? 0.6 : 0) + 0.1 * (counts.get(it.skill) ?? 0);
    if (score < bestScore) {
      bestScore = score;
      best = it;
    }
  }
  return best;
}

/** Record an answer. "I don't know" = correct:false. es→it false friends weigh ×1.5. */
export function answer(s: PlacementState, item: PlacementItem, correct: boolean, base: BaseLang, bankSize = Infinity): PlacementState {
  // es→it: false friends count more, cognate-friendly reading counts less (Spanish speakers
  // read Italian far above their real level).
  const esIt = item.lang === "it" && base === "es";
  const weight = esIt && item.falseFriend ? 1.5 : esIt && item.skill === "reading" ? 0.6 : 1;
  const responses = [...s.responses, { id: item.id, b: item.b, correct, weight, skill: item.skill }];
  const { theta, se } = eap(s.mu, responses);
  const n = responses.length;
  const done = n >= MAX_ITEMS || (n >= MIN_ITEMS && se < SE_STOP) || n >= bankSize;
  return { ...s, responses, theta, se, done };
}

export function beginner(s: PlacementState): PlacementState {
  return { ...s, done: true, beginner: true, theta: Math.min(s.theta, -2.5) };
}

export const CUTS: [number, Cefr][] = [
  [-2, "A0"],
  [-1, "A1.1"],
  [0, "A1.2"],
  [1, "A2"],
];

export function band(theta: number): Cefr {
  for (const [cut, c] of CUTS) if (theta < cut) return c;
  return "B1";
}

const ORDER: Cefr[] = ["A0", "A1.1", "A1.2", "A2", "B1"];
export const cefrRank = (c: Cefr) => ORDER.indexOf(c);

const BAND_LO: Record<Cefr, number> = { A0: -3, "A1.1": -2, "A1.2": -1, A2: 0, B1: 1 };

/**
 * A Rasch-scale difficulty per unit. Units sharing a CEFR band are spread evenly across it, in
 * path order. Content tags are coarse (units 2–6 are all "A1.1"), so the highest band in the
 * slice is stretched over the next band too: its last units sit near the A1.2 ceiling.
 */
export function unitDifficulty(units: Unit[]): Map<number, number> {
  const sorted = [...units].sort((a, b) => a.index - b.index);
  const top = sorted.reduce((m, u) => Math.max(m, cefrRank(u.cefr)), 0);
  const out = new Map<number, number>();
  for (const c of ORDER) {
    const group = sorted.filter((u) => u.cefr === c);
    if (!group.length) continue;
    const lo = BAND_LO[c];
    const hi = cefrRank(c) === top && c !== "B1" ? lo + 2 : lo + 1;
    group.forEach((u, k) => out.set(u.index, lo + ((k + 0.5) * (hi - lo)) / group.length));
  }
  return out;
}

/**
 * Start unit = the first unit the learner has probably NOT mastered, judged conservatively
 * from the lower edge of the estimate (θ − SE): mastered means θ − SE ≥ b(unit) + 0.3.
 * Beyond the slice → the last unit, flagged.
 */
export function startUnit(units: Unit[], theta: number, se = 0): { index: number; beyond: boolean } {
  const sorted = [...units].sort((a, b) => a.index - b.index);
  const b = unitDifficulty(sorted);
  const low = theta - se;
  const u = sorted.find((x) => low < (b.get(x.index) ?? 0) + 0.3);
  if (u) return { index: u.index, beyond: false };
  return { index: sorted[sorted.length - 1]?.index ?? 1, beyond: true };
}

/**
 * Items to seed as "probably known": only units strictly before the start unit (never the
 * start unit or later), plus a placement item's explicit seeds when they fall in those units.
 */
export function seeds(units: Unit[], startIndex: number, bank: PlacementItem[], s: PlacementState): string[] {
  const before = units.filter((u) => u.index < startIndex);
  const allowed = new Set(before.flatMap((u) => u.items.map((i) => i.id)));
  const out = new Set<string>();
  for (const u of before) for (const i of u.items) if (i.type !== "bridge") out.add(i.id);
  const right = new Set(s.responses.filter((r) => r.correct).map((r) => r.id));
  for (const it of bank) if (right.has(it.id)) for (const id of it.seeds ?? []) if (allowed.has(id)) out.add(id);
  return [...out];
}

export function oneStep(c: Cefr, dir: -1 | 1): Cefr {
  return ORDER[Math.max(0, Math.min(ORDER.length - 1, cefrRank(c) + dir))];
}

export type { TargetLang };
