// Category: engine — bring-your-own AI tutor: Claude, ChatGPT (OpenAI) or Gemini.
// Network is mocked: checks model choice, request shapes, fallbacks and error mapping.
import { afterEach, describe, expect, it, vi } from "vitest";
import { jsonCall, LlmError, pickGeminiModel, pickOpenAIModel, testConnection } from "@/lib/llm/provider";

const SCHEMA = { type: "object", additionalProperties: false, required: ["ok"], properties: { ok: { type: "string" } } };
const req = () => ({ system: "sys", user: "hi", schema: SCHEMA, maxTokens: 64, signal: new AbortController().signal });
const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
afterEach(() => vi.unstubAllGlobals());

describe("providers · choosing a cheap model the key can use", () => {
  it("OpenAI: a nano model first, then mini; never audio/realtime/image/embedding models", () => {
    expect(pickOpenAIModel(["gpt-4o", "gpt-4o-mini", "gpt-4o-mini-audio-preview", "text-embedding-3-small", "gpt-9-nano", "gpt-9-nano-realtime", "dall-e-3"])).toBe("gpt-9-nano");
    expect(pickOpenAIModel(["gpt-4o", "gpt-4o-mini", "whisper-1"])).toBe("gpt-4o-mini");
    expect(pickOpenAIModel(["whisper-1", "tts-1"])).toBeUndefined();
  });
  it("Gemini: a stable flash-lite first (newest), then flash; skips pro, preview, experimental, embeddings", () => {
    const m = (name: string, gen = true) => ({ name: `models/${name}`, supportedGenerationMethods: gen ? ["generateContent"] : ["embedContent"] });
    expect(pickGeminiModel([m("gemini-9-pro"), m("gemini-9-flash"), m("gemini-9-flash-lite"), m("gemini-10-flash-lite-preview"), m("gemini-8-flash-lite"), m("text-embedding-004", false)])).toBe("gemini-9-flash-lite");
    expect(pickGeminiModel([m("gemini-9-pro"), m("gemini-9-flash")])).toBe("gemini-9-flash");
  });
});

describe("providers · requests and fallbacks", () => {
  it("OpenAI: strict JSON schema first; on 400 falls back to JSON mode", async () => {
    const calls: { url: string; body: Record<string, unknown>; auth: string }[] = [];
    vi.stubGlobal("fetch", vi.fn(async (url: string, init: RequestInit) => {
      const body = JSON.parse(String(init.body));
      calls.push({ url, body, auth: (init.headers as Record<string, string>).authorization });
      if (calls.length === 1) return json(400, { error: { message: "schema not supported" } });
      return json(200, { choices: [{ message: { content: '{"ok":"yes"}' }, finish_reason: "stop" }] });
    }));
    const r = await jsonCall<{ ok: string }>(req(), { provider: "openai", apiKey: "sk-test", model: "gpt-x-mini" });
    expect(r.ok).toBe("yes");
    expect(calls[0].url).toBe("https://api.openai.com/v1/chat/completions");
    expect(calls[0].auth).toBe("Bearer sk-test");
    expect(calls[0].body.response_format).toMatchObject({ type: "json_schema", json_schema: { strict: true, schema: SCHEMA } });
    expect(calls[1].body.response_format).toEqual({ type: "json_object" });
    expect(calls[0].body.model).toBe("gpt-x-mini");
  });
  it("Gemini: key in the x-goog-api-key header (never in the URL), JSON schema in generationConfig", async () => {
    const calls: { url: string; init: RequestInit }[] = [];
    vi.stubGlobal("fetch", vi.fn(async (url: string, init: RequestInit) => {
      calls.push({ url, init });
      return json(200, { candidates: [{ content: { parts: [{ text: '{"ok":"si"}' }] }, finishReason: "STOP" }] });
    }));
    const r = await jsonCall<{ ok: string }>(req(), { provider: "gemini", apiKey: "AIza-test", model: "gemini-x-flash-lite" });
    expect(r.ok).toBe("si");
    expect(calls[0].url).toBe("https://generativelanguage.googleapis.com/v1beta/models/gemini-x-flash-lite:generateContent");
    expect(calls[0].url).not.toMatch(/AIza/);
    expect((calls[0].init.headers as Record<string, string>)["x-goog-api-key"]).toBe("AIza-test");
    const body = JSON.parse(String(calls[0].init.body));
    expect(body.generationConfig).toMatchObject({ responseMimeType: "application/json", responseJsonSchema: SCHEMA });
    expect(body.systemInstruction.parts[0].text).toBe("sys");
  });
  it("errors map to the app's codes: 401 → auth, 429 → rate, network failure → network, cut-off → refusal", async () => {
    const cfg = { provider: "openai" as const, apiKey: "sk", model: "m" };
    vi.stubGlobal("fetch", vi.fn(async () => json(401, {})));
    await expect(jsonCall(req(), cfg)).rejects.toMatchObject({ code: "auth" });
    vi.stubGlobal("fetch", vi.fn(async () => json(429, {})));
    await expect(jsonCall(req(), cfg)).rejects.toMatchObject({ code: "rate" });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new TypeError("Failed to fetch"); }));
    await expect(jsonCall(req(), cfg)).rejects.toMatchObject({ code: "network" });
    vi.stubGlobal("fetch", vi.fn(async () => json(200, { choices: [{ message: { content: '{"ok' }, finish_reason: "length" }] })));
    await expect(jsonCall(req(), cfg)).rejects.toBeInstanceOf(LlmError);
  });
  it("Test connection (Gemini): lists models, picks one, makes a tiny call, reports the model", async () => {
    vi.stubGlobal("fetch", vi.fn(async (url: string) => {
      if (url.includes("/models?")) return json(200, { models: [{ name: "models/gemini-x-flash-lite", supportedGenerationMethods: ["generateContent"] }] });
      return json(200, { candidates: [{ content: { parts: [{ text: '{"ok":"yes"}' }] }, finishReason: "STOP" }] });
    }));
    const r = await testConnection("gemini", "AIza-test");
    expect(r).toMatchObject({ ok: true, model: "gemini-x-flash-lite" });
  });
  it("Test connection with a bad key says so", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => json(401, {})));
    expect(await testConnection("openai", "sk-bad")).toMatchObject({ ok: false, code: "auth" });
  });
});
