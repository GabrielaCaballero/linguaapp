# 04 · Engineering: adaptivity, LLM layer, architecture

_SWE + ML engineer, 2026-11-12. Based on reading `src/lib/*` (v1) and the Next 16.4.2 docs in `node_modules/next/dist/docs/`._

**Short version:** yes, let people connect Claude (or another LLM), but as a **second opinion layered on top of** a fast, offline, deterministic core, not as a replacement for it. That is roughly how Duolingo does it: classic ML models decide *what* you practise and *when*; LLMs do the language-y parts (explaining, chatting, generating content), mostly behind the scenes.

---

## 1. Plain-language explainer: what Duolingo fixes vs. learns

Think of a language app as three jobs:

| Job | Question it answers | Duolingo | Lingua v1 |
|---|---|---|---|
| **Scheduler** | "When should you see this word again?" | **Learned** (ML). Half-Life Regression (HLR) estimates how long each word stays in *your* memory, from millions of reviews. It roughly halved prediction error compared with their earlier fixed Leitner boxes and lifted daily engagement by 12% ([Settles & Meeder, ACL 2016](https://aclanthology.org/P16-1174/); [code](https://github.com/duolingo/halflife-regression); [blog](https://blog.duolingo.com/how-we-learn-how-you-learn)) | **Fixed** rules (SM-2 style, `srs.ts`) |
| **Session builder** | "Which exercises go in today's lesson?" | **Learned**. *Birdbrain* (since 2020) predicts the chance you'll get each exercise right, and the session generator picks exercises at the right difficulty for you ([Duolingo blog](https://blog.duolingo.com/learning-how-to-help-you-learn-introducing-birdbrain); [IEEE Spectrum](https://spectrum.ieee.org/duolingo)). Their own engineers note it knows *that* you got it wrong, not *why*. | **Fixed** rules (`session.ts`) |
| **Answer checker** | "Is this answer right?" | **Mostly fixed.** Accepted answers are written and curated by people, with typo tolerance. LLMs are used *after* grading to explain. | **Fixed** (`check.ts`: accents, articles, typos) |
| **Placement** | "Where do you start?" | **Adaptive test.** Re-estimates your level after every question and picks the next one. Partial credit by mistake type, with scores **set by hand** ([blog](https://blog.duolingo.com/partial-credit-improvements-to-duolingos-placement-test/)). Their certified English Test uses full item response theory (IRT) and adaptive testing ([Settles et al., TACL 2020](https://aclweb.org/anthology/2020.tacl-1.17.pdf)). | None (one "German level" question) |
| **Explanations & conversation** | "Why was I wrong? Can I practise talking?" | **LLM** (GPT-4 since 2023, in Duolingo Max): *Explain My Answer*, *Roleplay*, *Video Call* with Lily ([Duolingo blog](https://blog.duolingo.com/duolingo-max)). Third-party sources say Explain My Answer has since become free; that is unconfirmed. | None |
| **Content creation** | "Where do the sentences come from?" | LLM drafts, **human experts review** ([blog](https://blog.duolingo.com/how-duolingo-experts-work-with-ai)) | Hand-written |

**What to take from this:** Duolingo does *not* let an LLM decide whether your answer counts or when you review. Those are cheap, predictable numerical models trained on huge datasets. LLMs sit around the edges where language understanding matters and a mistake hurts less (an explanation, a chat). We should copy this split. The difference: we have no millions of users to train on, so our "learned" parts must use **published, pre-fitted models** (FSRS) and **small on-device adjustments**.

**How much of Lingua v2 is fixed vs. adaptive?** About **70% fixed** (content, checker rules, session structure, UI), **25% adaptive** without any LLM (scheduler memory model, per-item difficulty, placement, how hard the exercises in a session are), and **5% LLM, optional** (grading free text, explanations, roleplay, extra examples).

---

## 2. Recommended v2 architecture (three layers)

```
┌──────────────────────────────────────────────────────────┐
│ (c) LLM layer, optional, BYO key, online only            │
│     grade free text · explain · roleplay · extra examples│
├──────────────────────────────────────────────────────────┤
│ (b) Adaptive layer, on-device, no network                │
│     FSRS scheduler · item difficulty · placement (IRT)   │
├──────────────────────────────────────────────────────────┤
│ (a) Deterministic core, offline, always works            │
│     content · checker · session builder · storage        │
└──────────────────────────────────────────────────────────┘
```
Each layer only *adds* to the one below. If (c) fails, (b) and (a) carry on. If (b) has no data yet, it uses defaults.

### (a) Deterministic core
- **Checker** (`check.ts`): keep it. It is good. Add two things: (1) `alts` per base language (es/en glosses), and (2) a richer verdict, `{ ok, almost, reason, score: 0..1 }`, so partial credit exists without an LLM (Duolingo-style hand-set scores: wrong article 0.8, accent 0.9, typo 0.85, missing word 0.5).
- **Content**: items gain `cefr` (A0–B2), `difficulty` (number, see b), and `gloss: { es, en }`.
- **Session builder**: same structure as v1 (pretest, then retrieval, interleaving, requeue on miss), but it gets targets from (b).

### (b) Adaptive layer
1. **Scheduler: SM-2 → FSRS.** FSRS (Free Spaced Repetition Scheduler) is the open, modern successor to SM-2. It is used in Anki. It models each card's *stability* (how long it lasts) and *difficulty*, and lets you set a **desired retention** (e.g. 90%). The TypeScript library is [`ts-fsrs`](https://github.com/open-spaced-repetition/ts-fsrs) (MIT; ratings Again/Hard/Good/Easy match v1's `Grade`). Why switch:
   - Its default parameters are fitted on hundreds of millions of reviews, so we get a learned memory model without having the data ourselves (our stand-in for HLR).
   - **Desired retention is the dial the goal feature needs.** An ambitious goal means more new items per day. "I must not forget" means retention 0.92. A relaxed goal means 0.85. FSRS tells us how many reviews that produces, which gives **minutes/day**.
   - Rating mapping stays as v1: wrong → Again; right but guessing or "almost" → Hard; right and "think so" → Good; right and sure → Easy. An LLM can never award Easy.
   - Migration: v1 has `interval/ease/reps` and up to 5,000 review logs. Replay each card's logs through FSRS (ts-fsrs supports rescheduling from history); if a card has no logs, seed stability = interval in days.
2. **Per-item difficulty and success prediction (a "Birdbrain-lite").** Predicted chance of success for a task = FSRS *retrievability* (current recall probability) adjusted by the item's difficulty and the exercise mode (recognize is easier than listen, which is easier than tiles, which is easier than type). The session builder aims each task at **~75–85% predicted success**, a "desirable difficulty" band that the learning-science doc (05) should confirm. When predicted success is high, it uses a harder mode (type instead of choose). When it is low, it uses an easier mode. Item difficulty starts from the curriculum's CEFR tag and then updates on-device from the user's own error rate (a simple running average; no server).
3. **Placement test: "IRT-lite" adaptive test.**
   - *Model (Rasch / 1-parameter IRT):* P(correct) = 1 / (1 + e^−(θ − b)). θ is the learner's ability; b is the item's difficulty.
   - *Item bank:* about 40 items per language, spread from A0 to B1 (b from −3 to +2, initially set from the CEFR tag by the curriculum/linguist team). Mostly multiple-choice and listening, a few typed answers. Typed answers get partial credit from the checker score.
   - *Algorithm:* start at θ = 0 with a "never studied / some / classes" self-report as the prior. After each answer, re-estimate θ by averaging over a grid of 61 points (the EAP method: 15 lines of code). The next item is the unused one whose b is closest to θ. Stop at 15 items, or once uncertainty falls below 0.45, or if the user taps "I'm a beginner". Duration is 3–5 minutes.
   - *Output:* θ is mapped to CEFR and to a starting module. Every item easier than (θ − 1) is marked "probably known": it is added to FSRS with modest stability, so it gets checked once rather than skipped forever.
   - We can't calibrate b values from data until we have opt-in telemetry. That's acceptable; Duolingo also started with hand-set scores.

### (c) LLM layer (optional, BYO key)

**Should do:**
| Task | When | Model default |
|---|---|---|
| **Grade free text / translation** with partial credit | Only when the deterministic checker says *not* an exact match | Haiku 5.5 |
| **Explain my mistake** | User taps "Why?" on feedback | Haiku 5.5 |
| **Roleplay / conversation** | Optional "Talk" activity using the user's known items | Sonnet 5.5 (Haiku is fine too) |
| **Extra example sentences** for a known item | User taps "More examples" | Haiku 5.5 |

**Should NOT do:**
- **Scheduling or placement.** These need consistent numbers; LLMs are noisy and cost money on every review.
- **Core correctness offline or when the key fails.** The deterministic checker always gives a verdict immediately.
- **Overrule an exact match.** If the answer equals `answer`/`alts`, there is no LLM call and it is never marked wrong.
- **Add content to the course automatically.** Generated sentences are labelled "AI-generated, not reviewed" and are not scheduled unless the user saves them.

**Flow for grading (the key design):**
```
user submits → check.ts verdict (instant, shown immediately)
  ├─ exact match → done (no LLM)
  └─ almost/wrong AND LLM enabled AND online
        → cache hit? use it
        → else call LLM (timeout 6 s) → validate JSON → guardrails
             → pass: feedback card updates ("Claude: acceptable, 0.8 · …")
             → fail/timeout/refusal: keep deterministic verdict, quiet note
```
The learner never waits. The grade that goes to FSRS is final once they press "Next". If the LLM answers after that, it only adds an explanation.

**Prompt 1: grade** (system prompt is stable per language pair and version; it is cacheable)
```
SYSTEM: You grade answers in a {target} course for a learner whose base language is
{base}. Be strict about meaning and grammar, lenient about phone typing.
Rules: Accept any natural, correct {target} rendering of the prompt, not only the
reference. Never "correct" something that is already correct. Every error you report
must quote the exact substring from the learner's answer. If unsure, set
confidence below 0.6. Write explanations in {base}, max 2 sentences, A2-friendly.
USER (JSON): {"prompt": "...", "reference": "...", "accepted": [...],
 "learner_answer": "...", "checker": "wrong|almost:article", "cefr": "A2"}
```
Output schema (enforced with structured outputs where the provider supports it):
```json
{ "verdict": "correct|acceptable|partly|wrong",
  "score": 0.0,
  "errors": [{ "quote": "string", "type": "spelling|accent|article|gender|agreement|verb|word_choice|word_order|missing|extra|meaning", "fix": "string" }],
  "corrected": "string",
  "explanation": "string",
  "confidence": 0.0 }
```
**Prompt 2: explain** (user tapped "Why?"). Input: item, answer, verdict, and the error list. Output: `{ "rule": "...", "example_ok": "...", "example_contrast": "...", "tip": "..." }`, in the base language, at most 60 words.

**Prompt 3: roleplay.** System prompt: scenario (café, doctor, train), CEFR level, up to 30 of the user's *known* words to reuse, "reply in {target} in at most 2 short sentences at {level}, then ask one question." Each turn returns `{ "reply": "...", "gloss_base": "...", "feedback": [{ "quote": "...", "fix": "...", "note": "..." }] | [] }`. Feedback is shown as gentle recasts. Words the learner used correctly are logged as `output` strand practice, and they **do not** change FSRS ratings.

**Prompt 4: examples.** `{ "examples": [{ "target": "...", "base": "...", "cefr": "A2" }] }`, 3 sentences, using only the item plus words at or below the user's level.

**Guardrails against hallucinated "corrections":**
1. Exact or alt match never reaches the LLM (see above).
2. Every `errors[].quote` must literally appear in the learner's answer (after normalising). If it doesn't, that error is dropped. If all errors are dropped and the verdict is "wrong", the result is discarded.
3. If `corrected` equals the learner's answer but the verdict is "wrong", the response is inconsistent and is discarded.
4. If `confidence` is below 0.6, show only "Claude isn't sure" plus the reference answer.
5. **The LLM can only move the grade up by one step or confirm it, never down.** If the checker says wrong and the LLM says acceptable, the result becomes Hard (it counts as correct, so it is scheduled soon). If the checker says almost and the LLM says wrong, the result stays almost. The worst case of a hallucination is a too-kind grade, never a punishing one.
6. The reference answer is always shown, labelled "course answer"; the LLM's text is labelled with the provider's name.
7. "Report this" stores the case locally for the linguist's golden set.
8. Prompt versions are stored in the cache key, so a prompt change invalidates old answers.

**Latency and cost per session** (prices from Anthropic's model table, 2026-11; latencies are my estimates and must be measured):

Assumptions: a 15-minute session has ~40 graded tasks, of which ~12 are typed. About 6 of those miss an exact match and go to the LLM, plus ~2 "Why?" taps. Each grade call is ~900 input and ~250 output tokens (with low effort). Roleplay is 10 turns averaging ~2,500 input and ~200 output tokens.

| | Haiku 5.5 (`claude-haiku-5-5`, $0.10/$0.50 per M tokens) | Sonnet 5.5 (`claude-sonnet-5-5`, $2/$10) |
|---|---|---|
| One grade call | ≈ $0.0002, ~0.7–1.5 s | ≈ $0.004, ~2–4 s |
| Practice session (8 calls) | **≈ $0.002** | ≈ $0.03 |
| 10-turn roleplay | ≈ $0.004 | ≈ $0.07 |
| Daily use for a month (session + 3 roleplays/week) | **≈ $0.10** | ≈ $2 |

Recommendation: Haiku 5.5 by default for everything; Sonnet 5.5 as an opt-in "richer conversation" setting. Opus is not needed. Set `output_config.effort: "low"` for grading (Haiku 5.5 has adaptive thinking on by default, with `medium` effort, which adds latency). If `stop_reason` is `refusal` or `max_tokens`, fall back to the deterministic verdict.

**Caching:** (1) an on-device result cache keyed by `hash(provider, model, promptVersion, itemId, normalizedAnswer)`, holding at most 500 entries with oldest evicted first, which makes repeated mistakes free and instant. (2) Anthropic prompt caching on the system prompt is fine to turn on, but our prompts may be shorter than the minimum cacheable prefix, so the savings aren't guaranteed. At these prices it doesn't matter.

**Timeouts:** grading 6 s, explain 10 s, roleplay 20 s with streaming. These use `AbortController`, with no automatic retry for grading (one retry for roleplay). If `navigator.onLine` is false, or the last call failed less than 60 s ago, the LLM is skipped silently (a circuit breaker).

---

## 3. Provider abstraction, keys and security

```ts
// src/lib/llm/provider.ts
export type LlmTask = "grade" | "explain" | "roleplay" | "examples";
export interface LlmProvider {
  id: "anthropic" | "openai" | "gemini" | "local";
  label: string;
  /** JSON-schema-constrained single call. Throws LlmError on any failure. */
  json<T>(req: { system: string; user: string; schema: object; maxTokens: number;
                 model: string; signal: AbortSignal }): Promise<T>;
  /** Streaming chat for roleplay. */
  chat(req: { system: string; messages: { role: "user" | "assistant"; content: string }[];
              model: string; signal: AbortSignal }): AsyncIterable<string>;
  test(): Promise<{ ok: boolean; message: string }>;   // "Test connection" button
}
export type LlmConfig = { provider: LlmProvider["id"]; apiKey?: string; baseUrl?: string;
                          models: Partial<Record<LlmTask, string>>; enabled: Record<LlmTask, boolean> };
```
Adapters, which all run in the browser:
- **Anthropic:** the official `@anthropic-ai/sdk` with `dangerouslyAllowBrowser: true` (this sends the `anthropic-dangerous-direct-browser-access: true` CORS header Anthropic added in 2024 for bring-your-own-key apps; [Simon Willison](https://simonwillison.net/2024/Aug/23/anthropic-dangerous-direct-browser-access)). JSON output uses `output_config.format` (structured outputs). The SDK adds roughly 30–50 KB gzipped, so it is lazy-loaded only when the LLM is enabled.
- **OpenAI:** official SDK with `dangerouslyAllowBrowser`, using `response_format: json_schema`.
- **Gemini:** Google's JS SDK with an API key, using `responseMimeType: "application/json"` and `responseSchema`.
- **Local** (Ollama / LM Studio): OpenAI-compatible endpoint at `http://localhost:11434/v1`. The user must allow our origin (`OLLAMA_ORIGINS`). This works only on a laptop, not a phone, so it is labelled "advanced".

Default model ids live in one file (`llm/models.ts`) and the user can override them. We verify OpenAI and Gemini ids at build time rather than hard-coding them from memory.

**Key storage (v2):** on-device only, under a separate localStorage key `lingua:llm`, **never included in export/backup**, with a "Forget key" button. The UI states in plain words: *"Your key stays on this phone and is sent only to Anthropic. Anyone with access to this unlocked phone and browser could read it. Create a dedicated key with a low monthly spend limit."* We also link to the provider's console page for spend limits.

**Client-side key vs. a tiny Vercel proxy:**

| | Direct from browser (BYO key) | Serverless proxy on Vercel |
|---|---|---|
| Key exposure | In the user's own browser; XSS could steal it | Owner's key on the server; users never see it |
| Who pays | Each user | The owner, so it needs auth, rate limits and abuse protection |
| Works with Capacitor / static export | Yes | No: route handlers that read the request are **unsupported** under `output: "export"` (Next docs, static-exports) |
| Offline-first fit | Same as now | Adds a server dependency |
| Effort | Small | Medium (auth, quotas) |

**Recommendation for v2: direct BYO key, no proxy.** It fits "works without a server", Capacitor, and privacy. To reduce the XSS risk: no third-party scripts, a strict CSP whose `connect-src` lists only the provider hosts, and no `dangerouslySetInnerHTML` of LLM output (render it as text). Revisit a proxy only if we ever offer "LLM included" to users without keys.

**Privacy note for the UI:** answers you type are sent to your chosen provider when LLM grading is on.

---

## 4. Data model and storage

**Storage choice:** keep **localStorage** for the main DB in v2. It is synchronous, works with the existing `useSyncExternalStore` hook, and our data is small (5,000 reviews come to about 0.5 MB of the ~5 MB limit). It sits behind a `Storage` adapter (`get/set/subscribe`), so we can move to IndexedDB (or Capacitor Preferences/SQLite) later without touching features. The LLM result cache and roleplay transcripts go in a **separate** key with a cap, so they can never break the main DB. Call `navigator.storage.persist()` on first run to reduce eviction (Safari evicts aggressively).

**Schema v2** (changes only):
```ts
type DB = { version: 2;
  profile: { baseLang: "es" | "en"; langs: Lang[]; activeLang: Lang;
             goal?: { lang: Lang; target: "A1"|"A2"|"B1"|"B2"; by?: string; minutesPerDay: number; retention: number } ;
             placement?: Record<Lang, { theta: number; se: number; cefr: string; at: number }> };
  cards: Record<string, CardStateV2>;          // FSRS: stability, difficulty, due, state, reps, lapses, last_review
  itemStats: Record<string, { seen: number; wrong: number }>;  // on-device difficulty
  custom: Item[]; reviews: ReviewLogV2[]; sessions: SessionRecord[]; }
// ReviewLogV2 adds: rating, score, source: "checker"|"llm", elapsedMs
```
**Removed:** `ties`, `germanLevel`, `startDate` milestone logic.

**Migration v1 → v2** (`data/migrations.ts`, a pure function with a unit test on a real v1 fixture):
1. Copy settings: `lang` → `activeLang`; `baseLang` = "es" if `lang` is "it", else "en", and the user can change it; `minutesPerLang` → `goal.minutesPerDay`.
2. Convert cards to FSRS by replaying their logs, as in 2(b).
3. Drop `ties`, after first offering the user a JSON download of it (it's personal data, so we shouldn't silently destroy it).
4. Back up the raw v1 blob under `lingua:v1-backup` once.

Migrations run as a chain, `[v1→v2, v2→v3…]`, keyed by version.

**Export/import:** the existing JSON backup with `version: 2`. Import accepts v1 or v2 and runs the migration chain. The API key is excluded.

**Offline / PWA:** v1 has no service worker (handover notes), so a cold start offline fails. Next 16's `experimental.useOffline` only retries *soft* navigations; the docs say full offline loads need a service worker and point to Serwist. Overnight, I recommend a **hand-written `public/sw.js`** of about 60 lines rather than adding Serwist: cache-first for `/_next/static/*` and icons, network-first-then-cache for page navigations, and a precache of the 5 routes on install. It is registered from a client component after load. `next.config` `headers()` serves `sw.js` with `Cache-Control: no-cache`, per the Next PWA guide. Since content is bundled in JS, it works offline once the app has loaded one time.

**Keep Capacitor possible:** no server actions, cookies, or request-reading route handlers in the core. All data is client-side, so the app can be built with `output: "export"`. Speech and storage sit behind small `platform/` wrappers that can later be replaced with native plugins. Open risk: check that `cacheComponents: true` (currently on) works with a static export before wrapping.

---

## 5. Testing and code structure

**Runner:** **Vitest**, one dev dependency. It understands TypeScript and the `@/` alias, and is fast. Script: `"test": "vitest run"`.

**Unit tests (must-have):**
- `check.test.ts`: a table of about 80 cases (accents, articles, apostrophes, ß, typos, wrong-but-close) that the linguist owns as a golden file.
- `scheduler.test.ts`: the rating mapping; intervals grow after Good and shrink after Again; an LLM-sourced grade never yields Easy; v1 → FSRS conversion keeps due dates within reason.
- `placement.test.ts`: **simulation**. Generate 500 fake learners with known θ, run the test, and assert the median |θ̂ − θ| < 0.5 with ≤ 15 items, and that "always wrong" ends at A0.
- `session.test.ts`: the new-item budget, requeue limits, and that the predicted-success band is respected.
- `migrations.test.ts`: the real v1 export fixture becomes a valid v2, with no data loss besides `ties`.
- `llm/guardrails.test.ts`: mocked provider responses (hallucinated quote, inconsistent corrected text, low confidence, timeout, malformed JSON, refusal) all fall back correctly.

**LLM eval (manual, not in CI):** `scripts/eval-grading.ts` runs the linguist's ~60 golden answer pairs against a real key and prints agreement and cost. Run it before changing a prompt.

**Folders:**
```
src/lib/core/      types.ts check.ts scheduler.ts session.ts placement.ts goals.ts dates.ts
src/lib/data/      store.ts storage-adapter.ts migrations.ts backup.ts
src/lib/llm/       provider.ts anthropic.ts openai.ts gemini.ts local.ts models.ts
                   prompts.ts schemas.ts grade.ts guardrails.ts cache.ts
src/lib/platform/  speech.ts sw-register.ts
src/content/       it/ de/ (items + placement banks)   i18n/
tests/             *.test.ts  fixtures/v1-export.json
public/sw.js
```

---

## 6. Overnight build plan (in order)

| # | Task | Size |
|---|---|---|
| 1 | Add Vitest; move lib into `core/`, `data/`; checker golden tests pass on the current code | S |
| 2 | Schema v2 types + migration chain + v1 fixture test; remove ties/milestones code paths | M |
| 3 | `ts-fsrs` scheduler behind the same `schedule()` signature; rating mapping; tests | M |
| 4 | Content fields `cefr`, `difficulty`, `gloss.es/en` (needs curriculum input) | S–M |
| 5 | Placement engine (Rasch + EAP) + simulation test + simple UI flow | M |
| 6 | Goals → retention/new-per-day → minutes/day estimate (formula from PM/learning science) | S |
| 7 | Session builder uses predicted-success band and mode selection | M |
| 8 | Service worker + registration + offline banner | S |
| 9 | LLM: provider interface + Anthropic adapter + settings screen (key, test connection, warning) | M |
| 10 | LLM grading with guardrails, cache, timeout, non-blocking feedback UI | M |
| 11 | "Why?" explain button | S |
| 12 | OpenAI / Gemini adapters | S each |
| 13 | Roleplay screen (streaming chat) | L |
| 14 | Example-sentence generator | S |

**If time runs out, cut from the bottom:** 14, then 13 (roleplay is the most expensive to do well and can be v2.1), then 12 (ship Claude-only, with the interface ready), then 7 (keep v1's mode rules with FSRS underneath). **Do not cut** 2, 3, 5, 8: migration, the scheduler, placement and offline are what the owner asked for and what everything else builds on.

---

## 7. Inputs I need from others

- **Curriculum (01):** CEFR level and a rough difficulty (−3…+2) per item; a 40-item placement bank per language; `es` and `en` glosses; extra accepted `alts`.
- **Product (02):** the goal levels and the mapping from goal to {target CEFR, deadline, minutes/day}; which LLM features are in v2 vs. later; whether Sonnet is offered at all.
- **UX (03):** the LLM settings screen and key-warning copy; the feedback card states (checker verdict → "Claude is checking…" → upgraded/explained / "couldn't check"); placement test screens; the offline indicator.
- **Learning science (05):** the target success band (I assumed 75–85%); the default desired retention per goal type; how confidence ratings map to FSRS ratings; the right placement length vs. fatigue.
- **Linguist (06):** a golden set of ~80 checker cases and ~60 LLM grading cases (answer → expected verdict); a review of the grading rubric wording and the partial-credit values per error type, in Italian and German.
- **Owner:** whether you're OK with BYO key (you'd paste your own Anthropic key; at Haiku prices that's roughly $0.10/month), and whether discarding the "Ties" data after offering a download is fine.
