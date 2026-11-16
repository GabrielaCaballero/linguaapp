"use client";

// Bring-your-own-key AI tutor, called directly from the browser. Three providers:
// Claude (Anthropic SDK, lazy-loaded), ChatGPT (OpenAI REST) and Gemini (Google REST).
// The key lives in "lingua:llm" only: never synced, never in backups, never on our server.
import { KEYS, localAdapter } from "../storage-adapter";

export type Provider = "anthropic" | "openai" | "gemini";

/** Default Claude model. OpenAI and Gemini models are picked from the account's own model list. */
export const MODEL = "claude-haiku-5-5";

export const PROVIDERS: Record<Provider, { label: string; keyUrl: string; keyPrefix: string; host: string }> = {
  anthropic: { label: "Claude", keyUrl: "https://console.anthropic.com/settings/keys", keyPrefix: "sk-ant-", host: "api.anthropic.com" },
  openai: { label: "ChatGPT", keyUrl: "https://platform.openai.com/api-keys", keyPrefix: "sk-", host: "api.openai.com" },
  gemini: { label: "Gemini", keyUrl: "https://aistudio.google.com/apikey", keyPrefix: "AIza", host: "generativelanguage.googleapis.com" },
};

export interface LlmConfig {
  provider: Provider;
  apiKey: string;
  /** Model id; for OpenAI/Gemini chosen at "Test connection" from what the key can use. */
  model?: string;
  lastOkAt?: number;
}

// Cached by the stored string: React's useSyncExternalStore needs the same object back
// while nothing changed, or it re-renders forever.
let lastRaw: string | null | undefined;
let lastCfg: LlmConfig | null = null;

export function getConfig(): LlmConfig | null {
  const raw = localAdapter.get(KEYS.llm);
  if (raw === lastRaw) return lastCfg;
  lastRaw = raw;
  lastCfg = null;
  try {
    if (!raw) return null;
    const c = JSON.parse(raw) as Partial<LlmConfig>;
    if (!c.apiKey) return null;
    const provider: Provider = c.provider === "openai" || c.provider === "gemini" ? c.provider : "anthropic";
    lastCfg = { ...c, provider, apiKey: c.apiKey } as LlmConfig;
  } catch {
    lastCfg = null;
  }
  return lastCfg;
}

export function saveConfig(c: LlmConfig | null) {
  if (!c) localAdapter.remove(KEYS.llm);
  else localAdapter.set(KEYS.llm, JSON.stringify(c));
  listeners.forEach((l) => l());
}

const listeners = new Set<() => void>();
export function subscribeConfig(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

/** Display name of the connected tutor ("Claude", "ChatGPT", "Gemini"). */
export function tutorName(c: LlmConfig | null = getConfig()): string {
  return c ? PROVIDERS[c.provider].label : "";
}

async function anthropicClient(apiKey: string) {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true, maxRetries: 0 });
}

export class LlmError extends Error {
  constructor(public code: "auth" | "network" | "timeout" | "refusal" | "bad" | "rate", msg?: string) {
    super(msg ?? code);
  }
}

const byStatus = (s: number): LlmError["code"] => (s === 401 || s === 403 ? "auth" : s === 429 ? "rate" : "bad");

interface JsonReq {
  system: string;
  user: string;
  schema: object;
  maxTokens: number;
  signal: AbortSignal;
}

/** One schema-constrained call with the connected provider. Throws LlmError on any failure. */
export async function jsonCall<T>(req: JsonReq, cfg: LlmConfig | null = getConfig()): Promise<T> {
  if (!cfg) throw new LlmError("auth", "no key");
  const text = cfg.provider === "openai" ? await openaiJson(cfg, req) : cfg.provider === "gemini" ? await geminiJson(cfg, req) : await anthropicJson(cfg, req);
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new LlmError("bad");
  }
}

async function anthropicJson(cfg: LlmConfig, req: JsonReq): Promise<string> {
  const c = await anthropicClient(cfg.apiKey);
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  try {
    const res = await c.messages.create(
      {
        model: cfg.model || MODEL,
        max_tokens: req.maxTokens,
        system: req.system,
        messages: [{ role: "user", content: req.user }],
        output_config: { effort: "low", format: { type: "json_schema", schema: req.schema as Record<string, unknown> } },
      },
      { signal: req.signal },
    );
    if (res.stop_reason === "refusal" || res.stop_reason === "max_tokens") throw new LlmError("refusal");
    return res.content.map((b) => (b.type === "text" ? b.text : "")).join("");
  } catch (e) {
    if (e instanceof LlmError) throw e;
    if (e instanceof Anthropic.AuthenticationError || e instanceof Anthropic.PermissionDeniedError) throw new LlmError("auth");
    if (e instanceof Anthropic.RateLimitError) throw new LlmError("rate");
    if (e instanceof Anthropic.APIUserAbortError) throw new LlmError("timeout");
    if (e instanceof Anthropic.APIConnectionError) throw new LlmError("network");
    throw new LlmError("bad", String(e));
  }
}

/** fetch that maps failures to LlmError (no SDKs for OpenAI/Gemini: plain REST keeps the app small). */
async function post(url: string, headers: Record<string, string>, body: unknown, signal: AbortSignal): Promise<Response> {
  try {
    return await fetch(url, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body), signal });
  } catch (e) {
    throw new LlmError((e as Error)?.name === "AbortError" ? "timeout" : "network");
  }
}

async function openaiJson(cfg: LlmConfig, req: JsonReq): Promise<string> {
  const auth = { authorization: `Bearer ${cfg.apiKey}` };
  const base = { model: cfg.model || "gpt-4o-mini", messages: [{ role: "system", content: req.system }, { role: "user", content: req.user }], max_completion_tokens: req.maxTokens };
  let res = await post("https://api.openai.com/v1/chat/completions", auth, { ...base, response_format: { type: "json_schema", json_schema: { name: "result", strict: true, schema: req.schema } } }, req.signal);
  // Older models without schema support: fall back to JSON mode (our guardrails still validate).
  if (res.status === 400) res = await post("https://api.openai.com/v1/chat/completions", auth, { ...base, response_format: { type: "json_object" } }, req.signal);
  if (!res.ok) throw new LlmError(byStatus(res.status));
  const data = (await res.json()) as { choices?: { message?: { content?: string; refusal?: string }; finish_reason?: string }[] };
  const ch = data.choices?.[0];
  if (!ch?.message?.content || ch.message.refusal || ch.finish_reason === "length") throw new LlmError("refusal");
  return ch.message.content;
}

async function geminiJson(cfg: LlmConfig, req: JsonReq): Promise<string> {
  const model = (cfg.model || "gemini-flash-latest").replace(/^models\//, "");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const auth = { "x-goog-api-key": cfg.apiKey };
  const base = { systemInstruction: { parts: [{ text: req.system }] }, contents: [{ role: "user", parts: [{ text: req.user }] }] };
  let res = await post(url, auth, { ...base, generationConfig: { responseMimeType: "application/json", responseJsonSchema: req.schema, maxOutputTokens: req.maxTokens } }, req.signal);
  if (res.status === 400) res = await post(url, auth, { ...base, generationConfig: { responseMimeType: "application/json", maxOutputTokens: req.maxTokens } }, req.signal);
  if (!res.ok) throw new LlmError(res.status === 400 && /API_KEY/i.test(await res.text().catch(() => "")) ? "auth" : byStatus(res.status));
  const data = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] }; finishReason?: string }[] };
  const c = data.candidates?.[0];
  const text = c?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!text || (c?.finishReason && c.finishReason !== "STOP")) throw new LlmError("refusal");
  return text;
}

// ── choosing a model the key can actually use ─────────────────────────────────

const NOT_CHAT = /audio|realtime|tts|transcribe|image|dall|embed|moderation|search|whisper|instruct|codex|vision|computer|preview|live|thinking/i;

/** Cheapest general chat model in an OpenAI account's list: a "nano", else a "mini", newest first. */
export function pickOpenAIModel(ids: string[]): string | undefined {
  const chat = ids.filter((id) => /^(gpt|o\d)/i.test(id) && !NOT_CHAT.test(id)).sort().reverse();
  return chat.find((id) => /nano/i.test(id)) ?? chat.find((id) => /mini/i.test(id)) ?? chat[0];
}

/** Cheapest Gemini model that can generate text: a stable "flash-lite", else "flash", newest first. */
export function pickGeminiModel(models: { name: string; supportedGenerationMethods?: string[] }[]): string | undefined {
  const ok = models
    .filter((m) => (m.supportedGenerationMethods ?? []).includes("generateContent") && /gemini/i.test(m.name) && !NOT_CHAT.test(m.name) && !/exp|pro/i.test(m.name))
    .map((m) => m.name.replace(/^models\//, ""))
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
  return ok.find((n) => /flash-lite/i.test(n)) ?? ok.find((n) => /flash/i.test(n)) ?? ok[0];
}

async function listOpenAI(apiKey: string, signal: AbortSignal): Promise<string | undefined> {
  const res = await fetch("https://api.openai.com/v1/models", { headers: { authorization: `Bearer ${apiKey}` }, signal });
  if (!res.ok) throw new LlmError(byStatus(res.status));
  const data = (await res.json()) as { data?: { id: string }[] };
  return pickOpenAIModel((data.data ?? []).map((m) => m.id));
}

async function listGemini(apiKey: string, signal: AbortSignal): Promise<string | undefined> {
  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=200", { headers: { "x-goog-api-key": apiKey }, signal });
  if (!res.ok) throw new LlmError(res.status === 400 ? "auth" : byStatus(res.status));
  const data = (await res.json()) as { models?: { name: string; supportedGenerationMethods?: string[] }[] };
  return pickGeminiModel(data.models ?? []);
}

export type TestResult = { ok: true; ms: number; model: string } | { ok: false; ms: number; code: LlmError["code"] | "noModel" };

/** "Test connection": find a model the key can use, then make one tiny call. */
export async function testConnection(provider: Provider, apiKey: string): Promise<TestResult> {
  const t0 = performance.now();
  const ms = () => Math.round(performance.now() - t0);
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15_000);
  try {
    const model = provider === "openai" ? await listOpenAI(apiKey, ctrl.signal) : provider === "gemini" ? await listGemini(apiKey, ctrl.signal) : MODEL;
    if (!model) return { ok: false, ms: ms(), code: "noModel" };
    await jsonCall<{ ok: string }>(
      { system: "Reply with JSON.", user: 'Reply with {"ok":"yes"}.', schema: { type: "object", additionalProperties: false, required: ["ok"], properties: { ok: { type: "string" } } }, maxTokens: 64, signal: ctrl.signal },
      { provider, apiKey, model },
    );
    return { ok: true, ms: ms(), model };
  } catch (e) {
    if (e instanceof LlmError) return { ok: false, ms: ms(), code: e.code };
    return { ok: false, ms: ms(), code: (e as Error)?.name === "AbortError" ? "timeout" : "network" };
  } finally {
    clearTimeout(timer);
  }
}
