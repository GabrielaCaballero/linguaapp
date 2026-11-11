"use client";

// Orchestration: cache (500 entries), 6 s timeout, 60 s circuit breaker, online check.
// Only typed answers the checker marked almost/wrong ever reach this module.
import type { BaseLang, Item } from "@/content/schema";
import type { Verdict } from "../model";
import { KEYS, localAdapter } from "../storage-adapter";
import { norm } from "../check";
import { applyGuardrails, explainSystem, EXPLAIN_SCHEMA, GRADE_SCHEMA, gradeSystem, PROMPT_VERSION, type GuardOutcome } from "./guardrails";
import { getConfig, jsonCall, MODEL } from "./provider";

const NAMES: Record<string, string> = { it: "Italian", de: "German", es: "Spanish", en: "English" };
let brokenUntil = 0;
const MAX_CACHE = 500;

function cacheGet(key: string): unknown | undefined {
  try {
    const m = JSON.parse(localAdapter.get(KEYS.llmCache) ?? "{}") as Record<string, unknown>;
    return m[key];
  } catch {
    return undefined;
  }
}
function cacheSet(key: string, v: unknown) {
  try {
    const m = JSON.parse(localAdapter.get(KEYS.llmCache) ?? "{}") as Record<string, unknown>;
    m[key] = v;
    const keys = Object.keys(m);
    for (const k of keys.slice(0, Math.max(0, keys.length - MAX_CACHE))) delete m[k];
    localAdapter.set(KEYS.llmCache, JSON.stringify(m));
  } catch {
    /* ignore */
  }
}

export function tutorAvailable(): boolean {
  return !!getConfig() && typeof navigator !== "undefined" && navigator.onLine && Date.now() >= brokenUntil;
}

async function withTimeout<T>(ms: number, fn: (s: AbortSignal) => Promise<T>): Promise<T> {
  const ctl = new AbortController();
  const id = setTimeout(() => ctl.abort(), ms);
  try {
    return await fn(ctl.signal);
  } finally {
    clearTimeout(id);
  }
}

export async function gradeWithTutor(item: Item, answer: string, checker: Verdict, reason: string | undefined, base: BaseLang): Promise<GuardOutcome> {
  if (checker === "correct" || !tutorAvailable()) return { kind: "discard", why: "skipped" };
  const key = ["anthropic", MODEL, PROMPT_VERSION, item.id, base, norm(answer)].join("|");
  let raw = cacheGet(key);
  if (raw === undefined) {
    try {
      raw = await withTimeout(6000, (signal) =>
        jsonCall({
          system: gradeSystem(NAMES[item.lang], NAMES[base]),
          user: JSON.stringify({
            prompt: item.gloss[base],
            reference: item.target,
            accepted: (item.accept ?? []).filter((a) => a.verdict !== "almost").map((a) => a.text),
            learner_answer: answer,
            checker: reason ? `${checker}:${reason}` : checker,
            cefr: item.cefr,
            register: item.register ?? null,
          }),
          schema: GRADE_SCHEMA,
          maxTokens: 1024,
          signal,
        }),
      );
      cacheSet(key, raw);
    } catch {
      brokenUntil = Date.now() + 60_000;
      return { kind: "discard", why: "error" };
    }
  }
  return applyGuardrails(checker, answer, raw);
}

export async function explainWithTutor(item: Item, answer: string, verdict: Verdict, base: BaseLang): Promise<string | null> {
  if (!tutorAvailable()) return null;
  try {
    const r = await withTimeout(10_000, (signal) =>
      jsonCall<{ rule: string; example_ok: string; example_contrast: string; tip: string }>({
        system: explainSystem(NAMES[item.lang], NAMES[base]),
        user: JSON.stringify({ prompt: item.gloss[base], reference: item.target, learner_answer: answer, verdict }),
        schema: EXPLAIN_SCHEMA,
        maxTokens: 1024,
        signal,
      }),
    );
    return [r.rule, `✓ ${r.example_ok}`, `✕ ${r.example_contrast}`, r.tip].filter((x) => typeof x === "string" && x.trim()).join("\n");
  } catch {
    brokenUntil = Date.now() + 60_000;
    return null;
  }
}
