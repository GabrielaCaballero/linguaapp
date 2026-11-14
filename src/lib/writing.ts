"use client";
// Writing feedback with the learner's own AI key (Claude, ChatGPT or Gemini). Same prompt,
// schema and guardrails as the server grader (supabase/functions/_shared/writing.ts); the
// text goes only to the learner's chosen provider. Signed in, the result is also saved.
import { getConfig, jsonCall, LlmError, tutorName } from "./llm/provider";
import { saveEssay, type EssayError, type EssayResult } from "./sync/client";
import { GRADE_SCHEMA, gradePrompt, guardGrade, instantChecks, type Base, type WritingTask } from "../../supabase/functions/_shared/writing";

export function ownAiName(): string | null {
  return getConfig() ? tutorName() : null;
}

export async function gradeWithOwnAi(task: WritingTask, text: string, base: Base): Promise<{ result: EssayResult } | { error: EssayError }> {
  const cfg = getConfig();
  if (!cfg) return { error: "setup" };
  if (typeof navigator !== "undefined" && navigator.onLine === false) return { error: "offline" };
  const { system, user } = gradePrompt(task, text, base);
  try {
    const raw = await jsonCall<unknown>({ system, user, schema: GRADE_SCHEMA, maxTokens: 2000, signal: AbortSignal.timeout(45_000) }, cfg);
    const grade = guardGrade(raw, text);
    if (!grade) return { error: "model" };
    const result: EssayResult = { ...grade, checks: instantChecks(task, text), model: `${cfg.provider}:${cfg.model ?? ""}` };
    void saveEssay(task, text, result);
    return { result };
  } catch (e) {
    const code = e instanceof LlmError ? e.code : "network";
    return { error: code === "rate" ? "busy" : code === "auth" ? "setup" : code === "network" || code === "timeout" ? "network" : "model" };
  }
}
