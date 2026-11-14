// Supabase Edge Function: grade one short essay (docs/team/52).
// Deploy: see docs/setup-accounts.md §12. Secrets: ANTHROPIC_API_KEY (set with
// `supabase secrets set`); SUPABASE_URL and SUPABASE_ANON_KEY are provided by Supabase.
// The owner's key lives only here. Every caller must be signed in; quotas cap the cost.
import Anthropic from "npm:@anthropic-ai/sdk@1.8.0";
import { GRADE_SCHEMA, MAX_CHARS, QUOTA, gradePrompt, guardGrade, instantChecks, taskById, wordCount, type Base } from "../_shared/writing.ts";

const MODEL = "claude-haiku-5-5";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const anthropic = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY")!, maxRetries: 0, timeout: 45_000 });

const cors = {
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "authorization, apikey, content-type, x-client-info",
  "access-control-allow-methods": "POST, OPTIONS",
};
const reply = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: { ...cors, "content-type": "application/json" } });

/** Calls the database as the signed-in user, so row-level security applies to everything. */
const asUser = (auth: string) => (path: string, init: RequestInit = {}) =>
  fetch(`${SUPABASE_URL}${path}`, { ...init, headers: { apikey: ANON, authorization: auth, "content-type": "application/json", ...(init.headers ?? {}) } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return reply(405, { error: "method" });
  const auth = req.headers.get("authorization") ?? "";
  const db = asUser(auth);

  const me = await db("/auth/v1/user");
  if (!me.ok) return reply(401, { error: "auth" });

  let body: { taskId?: string; text?: string; base?: Base };
  try {
    body = await req.json();
  } catch {
    return reply(400, { error: "bad" });
  }
  const task = taskById(String(body.taskId ?? ""));
  const text = String(body.text ?? "");
  const base: Base = body.base === "en" ? "en" : "es";
  if (!task || wordCount(text) < 5 || text.length > MAX_CHARS) return reply(400, { error: "bad" });

  // Quotas: per learner per week, and everyone together per month.
  const q = await db("/rest/v1/rpc/essay_quota", { method: "POST", body: "{}" });
  if (!q.ok) return reply(500, { error: "quota_check" });
  const { week, month } = (await q.json()) as { week: number; month: number };
  if (week >= QUOTA.perUserWeek) return reply(429, { error: "quota_user" });
  if (month >= QUOTA.allMonth) return reply(429, { error: "quota_all" });

  const { system, user } = gradePrompt(task, text, base);
  let raw: unknown;
  try {
    const res = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 2000,
      system,
      messages: [{ role: "user", content: user }],
      output_config: { effort: "medium", format: { type: "json_schema", schema: GRADE_SCHEMA as unknown as Record<string, unknown> } },
    });
    if (res.stop_reason === "refusal" || res.stop_reason === "max_tokens") return reply(502, { error: "model" });
    raw = JSON.parse(res.content.map((b) => (b.type === "text" ? b.text : "")).join(""));
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return reply(503, { error: "busy" });
    if (e instanceof Anthropic.AuthenticationError || e instanceof Anthropic.PermissionDeniedError) return reply(500, { error: "setup" });
    return reply(502, { error: "model" });
  }
  const grade = guardGrade(raw, text);
  if (!grade) return reply(502, { error: "model" });
  const result = { ...grade, checks: instantChecks(task, text), model: MODEL };

  // Saved in the learner's own account (EU); they can delete it.
  const saved = await db("/rest/v1/essays", {
    method: "POST",
    headers: { prefer: "return=representation" },
    body: JSON.stringify({ lang: task.lang, task_id: task.id, text, result }),
  });
  const row = saved.ok ? ((await saved.json()) as { id: string }[])[0] : undefined;
  return reply(200, { id: row?.id ?? null, result });
});
