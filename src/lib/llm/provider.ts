"use client";

// BYO-key Anthropic adapter, called directly from the browser. The SDK is lazy-loaded
// so it costs nothing unless the tutor is connected. The key lives in "lingua:llm" only.
import { KEYS, localAdapter } from "../storage-adapter";

export const MODEL = "claude-haiku-5-5";

export interface LlmConfig {
  provider: "anthropic";
  apiKey: string;
  lastOkAt?: number;
}

export function getConfig(): LlmConfig | null {
  try {
    const raw = localAdapter.get(KEYS.llm);
    if (!raw) return null;
    const c = JSON.parse(raw) as LlmConfig;
    return c.apiKey ? c : null;
  } catch {
    return null;
  }
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

async function client(apiKey: string) {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true, maxRetries: 0 });
}

export class LlmError extends Error {
  constructor(public code: "auth" | "network" | "timeout" | "refusal" | "bad" | "rate", msg?: string) {
    super(msg ?? code);
  }
}

/** One schema-constrained call. Throws LlmError on any failure. */
export async function jsonCall<T>(req: { system: string; user: string; schema: object; maxTokens: number; signal: AbortSignal }): Promise<T> {
  const cfg = getConfig();
  if (!cfg) throw new LlmError("auth", "no key");
  const c = await client(cfg.apiKey);
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  try {
    const res = await c.messages.create(
      {
        model: MODEL,
        max_tokens: req.maxTokens,
        system: req.system,
        messages: [{ role: "user", content: req.user }],
        output_config: { effort: "low", format: { type: "json_schema", schema: req.schema as Record<string, unknown> } },
      },
      { signal: req.signal },
    );
    if (res.stop_reason === "refusal" || res.stop_reason === "max_tokens") throw new LlmError("refusal");
    const text = res.content.map((b) => (b.type === "text" ? b.text : "")).join("");
    try {
      return JSON.parse(text) as T;
    } catch {
      throw new LlmError("bad");
    }
  } catch (e) {
    if (e instanceof LlmError) throw e;
    if (e instanceof Anthropic.AuthenticationError || e instanceof Anthropic.PermissionDeniedError) throw new LlmError("auth");
    if (e instanceof Anthropic.RateLimitError) throw new LlmError("rate");
    if (e instanceof Anthropic.APIUserAbortError) throw new LlmError("timeout");
    if (e instanceof Anthropic.APIConnectionError) throw new LlmError("network");
    throw new LlmError("bad", String(e));
  }
}

/** "Test connection": a tiny call. */
export async function testConnection(apiKey: string): Promise<{ ok: boolean; message: string; ms: number }> {
  const t0 = performance.now();
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  try {
    const c = await client(apiKey);
    await c.messages.create({ model: MODEL, max_tokens: 16, output_config: { effort: "low" }, messages: [{ role: "user", content: "Reply with: ok" }] });
    return { ok: true, message: "ok", ms: Math.round(performance.now() - t0) };
  } catch (e) {
    const ms = Math.round(performance.now() - t0);
    if (e instanceof Anthropic.AuthenticationError) return { ok: false, message: "That key was rejected (401). Check you copied all of it.", ms };
    if (e instanceof Anthropic.PermissionDeniedError) return { ok: false, message: "This key can't use the model (403).", ms };
    if (e instanceof Anthropic.RateLimitError) return { ok: false, message: "Rate limited or out of credit (429).", ms };
    if (e instanceof Anthropic.APIConnectionError) return { ok: false, message: "Couldn't reach Anthropic. Are you online?", ms };
    if (e instanceof Anthropic.APIError) return { ok: false, message: `Anthropic error ${e.status}.`, ms };
    return { ok: false, message: "Unexpected error.", ms };
  }
}
