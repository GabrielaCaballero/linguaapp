# 10 · Lingua v2: build spec (the builders' single source of truth)

_Product manager · 2026-11-12 · Synthesises 01–06. Where this spec and an earlier doc disagree, **this spec wins**. Branch `v2-redesign`. Never push to `main`._

**Product in one line:** a calm, phone-first app for adults. You pick Italian and/or German. A short check finds your level. You set a goal, and the app tells you honestly how many minutes a day it takes. Then one big button gives you the right 5 minutes of practice. It works offline and without an account. You can connect your own AI tutor if you want.

**Remove everywhere:** Lavello, citizenship/comune paperwork, Dante/fide/exam dates, Zurich/Zurigo, Ties log, fixed milestones, plan start date, and the owner's name, including UX's "Buongiorno, Gabi". The greeting is time-of-day only.

---

## 1. Conflict resolutions

| # | Topic | Options on the table | **Decision** | Why |
|---|---|---|---|---|
| R1 | Tabs | UX: Today·Path·Me. PM: Today·Progress·You | **Today · Path · Me.** Progress lives in Me. Settings are pushed from Me | Path answers "where am I in the course", which v1 lacked. Progress and settings fit naturally under "Me". Still 3 tabs. |
| R2 | Scheduler | Eng: FSRS now. LS: SM-2 is fine, just log reviews | **FSRS via `ts-fsrs`**, default parameters, desired retention 0.90, behind a `schedule()` interface. Fallback: if it blocks for more than 1 h, keep v1 SM-2 behind the same interface | It's a better memory model at zero data cost. Retention is a single dial. Logs are kept either way. |
| R3 | Placement length | Curr: 4×6 = 24. LS: 15–25 staircase. Eng: Rasch ≤15. UX: ≤20 | **Rasch/EAP adaptive test: min 8, max 15 items, stops when SE < 0.45.** Self-report gate first. "I'm a total beginner" skips it. Every item has "I don't know" | 3–4 min respects adults. The engineering simulation test shows it is accurate enough. Seeded reviews fix misplacement during week 1. |
| R4 | Spanish gloss variety | Linguist: neutral Latin-American *tú*. Owner is rioplatense | **Neutral *tú*, no voseo.** Where words differ, give both: "mantequilla (manteca)", "boleto (billete)". A rioplatense UI locale comes later | It reaches every Spanish speaker, and the owner reads it effortlessly. Content isn't tied to one country. |
| R5 | Hours and multipliers | Curr: es→it ×0.65–0.7. LS: de ≈1.3–1.5× it for Spanish speakers. PM: de ×1.25 | Cumulative hours from zero: **A1.1 45 · A1 90 · A2 190 · B1 375**. Multiplier by (base→target): **es→it 0.7 · en→it 1.0 · en→de 1.25 · es→de 1.3** | Cambridge low-to-mid band. The FSI ratio gives German ≈1.25×. Spanish speakers get no cognate boost in German. All are labelled "estimate". |
| R6 | Adherence | LS: ×0.7. PM: 6 days/week | **Plan on 5 practice days/week** (user can set 3–7) | That is about 0.7 adherence, but in words people understand. |
| R7 | Streak | UX: 🔥 daily flame with rest days. LS: weekly goal primary. PM: weekly rhythm | **No daily streak in v2.** The habit signal is "practice days this week: ●●●○○ (goal 5)". The weekly ring is filled by any language | Avoids loss aversion. Lally: one missed day doesn't matter. |
| R8 | Base language | Brief: user setting. UX: "per course" | **App language** (UI strings, es/en) is global. **"Explain in"** (glosses/notes) is per course and defaults to the app language | Ana can do Italian from Spanish and German from English. Every item has both glosses, so the cost is near zero. |
| R9 | Path granularity | UX: sine-wave lesson nodes, review nodes, checkpoints | **Path = units** (6 per language). Each node shows a progress ring, can-do, and 3 sample words, with "Practise this unit" | Buildable overnight. Lesson-level nodes come later. |
| R10 | Session size | UX: "Continue · 5 min". LS: dose 2–20 | **A session is a 5-minute chunk** (≈20–25 tasks; settings: 3/5/10). Repeat until the daily ring fills | Works for commuters. A natural stopping point. |
| R11 | Difficulty band | LS 80–85%. Eng 75–85% | **Target 80–85%** rolling over the last 10 graded tasks | LS owns this. |
| R12 | LLM role | Eng: raise grade ≤1 step, never to Easy | **Adopted as written.** Anthropic adapter only in v2. Default `claude-haiku-5-5`. Called directly from the browser with the user's key | Orchestrator rule: "can raise, not lower". About $0.10/month. |
| R13 | Notifications | LS: 1/day at the anchor time | **No push in v2** (unreliable for iOS PWAs). Store the anchor time. Show an in-app "your practice time" chip | Ship honest functionality only. Capacitor later. |
| R14 | Snack feed, stories, speak, match pairs | LS/UX extras | **Later** (below the cut line) | Overnight scope. |
| R15 | v1 progress | Eng: replay logs into FSRS | **Migrate.** Items carry `legacyId`. Cards for removed items are dropped. Ties data is offered as a JSON download, then dropped | The owner's real progress survives. |

---

## 2. Personas (for the Judge)

| | Persona | Setup | Must feel |
|---|---|---|---|
| **P1 Ana, 38** | Two languages at once | App language es. Italian (explain in es, ~A1) + German (explain in en, ~A2, takes classes). 15 min/day total | "Both languages are moving, and I didn't have to plan it." |
| **P2 Mateo, 61** | Spanish → Italian from zero | Travel goal in 4 months | "It uses my Spanish and tells me plainly if I'm on track." |
| **P3 Emma, 29** | English → German from zero | Wants A2 in 7 months for a move | "Honest numbers, clear 'why' when I'm wrong." |
| **P4 Priya, 34** | Commuter, 5–10 min/day | English → Italian, casual, often offline | "One tap, works in the tunnel, no guilt." |

---

## 3. Workstream A: content contract (FROZEN)

**Ownership:** the content stream writes **only** `src/content/**`, except `src/content/schema.ts`. The engine stream creates that file first, **verbatim** as below. Changes to it need a decisions.md entry and both streams' agreement. The engine imports content **only** via `@/content` (`src/content/index.ts`).

### 3.1 `src/content/schema.ts` (verbatim)

```ts
// Lingua content contract v2.0 — FROZEN. Change only via docs/team/decisions.md.
export type TargetLang = "it" | "de";
export type BaseLang = "es" | "en";
export type Cefr = "A0" | "A1.1" | "A1.2" | "A2" | "B1";
export type Register = "formal" | "informal";
export type Region = "DE" | "AT" | "CH" | "S-DE" | "IT" | "CH-IT";
/** Text in every base language. Both keys REQUIRED. */
export type Glossed = Record<BaseLang, string>;
/** Text written separately per base language (not translated). Either key optional. */
export type PerBase = Partial<Record<BaseLang, string>>;

export type ItemType =
  | "sound"      // grapheme↔sound rule; uses `pair`/`distractors`
  | "word"       // lemma; nouns carry gender + plural
  | "phrase"     // fixed chunk
  | "sentence"   // model sentence (tiles/translate)
  | "pattern"    // grammar rule; uses `pattern` + `question`
  | "listening"  // short audio text + `question`
  | "dialogue"   // `turns` + `question`
  | "bridge";    // cognate rule / false friend; only shown when `onlyFor` matches the course's explain-in language

export type Exercise =
  | "guess"         // first exposure: MCQ before teaching (ungraded)
  | "recognize"     // target → pick meaning
  | "recall"        // meaning → type target
  | "tiles"         // meaning → build target from tiles
  | "listen"        // audio → pick or type target
  | "article"       // pick der/die/das · il/lo/la/l'/i/gli/le
  | "pick-spelling" // sound items: audio → choose spelling
  | "question"      // answer item.question (listening/dialogue/pattern)
  | "speak";        // say it (speech API, rough match only)

/** Accepted alternative. verdict "almost" = accepted but with a note (e.g. "ein Kaffee", "wieviel", "dove è"). */
export interface Alt { text: string; verdict?: "correct" | "almost"; feedback?: PerBase }
/** Known wrong answer with targeted feedback (e.g. "ho andato"). */
export interface KnownError { text: string; feedback: PerBase }

export interface Mcq {
  prompt: Glossed;                 // question in the base language
  options: (string | Glossed)[];   // string = target-language option; Glossed = base-language option
  answer: number;                  // index into options
}

export interface Item {
  id: string;                 // `${lang}-u${NN}-${slug}`, ascii, stable forever, never reused
  legacyId?: string;          // v1 id (e.g. "it-buongiorno") for progress migration
  lang: TargetLang;
  unit: string;               // `${lang}-u${NN}` or "custom"
  type: ItemType;
  cefr: Cefr;
  target: string;             // canonical answer, standard spelling (German ß, Italian accents)
  gloss: Glossed;             // meaning; neutral Latin-American tú (es), international English (en)
  accept?: Alt[];
  errors?: KnownError[];
  variants?: { region: Region; text: string; note?: PerBase }[]; // regional forms: always accepted as correct
  register?: Register;        // only when it matters (tu/Lei, du/Sie)
  pos?: "noun" | "verb" | "adj" | "adv" | "prep" | "pron" | "num" | "phrase" | "other";
  gender?: "m" | "f" | "n";   // nouns
  plural?: string;            // full plural with article: "die Mütter", "le madri"
  forms?: Record<string, string>; // e.g. { io: "sono", tu: "sei" } or { pp: "andato", aux: "essere" }
  spoken: string;             // TTS text: numbers & abbreviations spelled out; usually === target
  slow?: boolean;             // play at rate 0.8 (minimal pairs, doubles)
  note?: PerBase;             // ≤2 sentences, one rule + one example, written per base language
  onlyFor?: BaseLang;         // bridge items: show only for this explain-in language
  example?: { target: string; spoken?: string; gloss: Glossed };
  pattern?: { rule: Glossed; table?: string[][] };
  turns?: { who: "A" | "B"; target: string; spoken?: string; gloss: Glossed }[];
  question?: Mcq;             // listening / dialogue / pattern comprehension
  pair?: [string, string];    // minimal pair for sound items, e.g. ["nono","nonno"]
  distractors?: string[];     // plausible wrong target-language options (≥3 for words/phrases)
  exercises?: Exercise[];     // allowed exercises; omitted = engine default for the type
  difficulty?: number;        // -3 (easy) … +2 (hard); omitted = derived from cefr
  tags: string[];             // "food", "polite", "chunk", "false-friend", "goethe-a1" …
  reviewed?: { by: string; date: string }; // linguist sign-off
}

export interface Unit {
  id: string;                 // `${lang}-u${NN}`
  lang: TargetLang;
  index: number;              // 1-based order on the Path
  cefr: Cefr;
  title: { target: string } & Glossed; // { target: "Al bar", es: "En el bar", en: "At the café" }
  canDo: Glossed[];           // 1–3 CEFR-style can-do statements
  icon: string;               // one emoji used on the Path postcard (content only, not UI chrome)
  items: Item[];
}

export interface PlacementItem {
  id: string;                 // `${lang}-p-${NN}`
  lang: TargetLang;
  cefr: Cefr;
  b: number;                  // Rasch difficulty: A0 -2.5 · A1.1 -1.5 · A1.2 -0.5 · A2 +0.5 · B1 +1.5 (±0.4 within band)
  skill: "vocab" | "grammar" | "listening" | "reading";
  kind: "mcq" | "listen" | "cloze" | "type";
  stem?: string;              // target-language text shown; cloze uses "___"
  spoken?: string;            // audio (kind "listen")
  mcq?: Mcq;                  // for mcq / listen / cloze
  answer?: string;            // for kind "type"
  accept?: string[];          // for kind "type"
  seeds?: string[];           // Item ids marked "probably known" if this is answered correctly
  falseFriend?: boolean;      // weight ×1.5 for es→it scoring
}

export interface Lexicon {
  closedClass: string[];          // articles, prepositions (+contractions), pronouns, auxiliaries: exact-match tokens
  minimalPairs: [string, string][]; // pairs a typo must NEVER bridge (nono/nonno, schon/schön, Staat/Stadt)
}

export interface CoursePack {
  lang: TargetLang;
  version: string;            // bump on every content change, e.g. "2.0.3"
  units: Unit[];
  placement: PlacementItem[];
  lexicon: Lexicon;
}
```

### 3.2 File layout (content stream)

```
src/content/schema.ts          (engine creates, verbatim)
src/content/index.ts           export const courses: Record<TargetLang, CoursePack>
src/content/it/index.ts        export const course: CoursePack
src/content/it/u01.ts … u06.ts export const unit: Unit
src/content/it/placement.ts    export const placement: PlacementItem[]
src/content/it/lexicon.ts      export const lexicon: Lexicon
src/content/de/…               same shape
```
The v1 `src/content/it.ts`, `de.ts` and their helpers in `index.ts` are replaced. Engine helpers (`itemsFor`, labels) move to `src/lib/content.ts`.

### 3.3 Content rules
- Every item: `gloss.es` **and** `gloss.en`, `spoken`, ≥3 `distractors` for words/phrases, and `tags`. Nouns carry `gender` + `plural`, and German nouns are shown with their article.
- German canonical is **ß/standard DE**. CH/AT forms go in `variants`. Italian uses grave/acute per the linguist's §2, with an apostrophe for elision.
- Register taught from Unit 1 (tu/Lei, du/Sie), tagged. The learner's own sentences use both forms (`stanco/a`) via `accept`.
- No real or owner names. Use Marco, Anna, Luca, Lena. No Zurich or Lavello.
- `note` ≤ 2 sentences, written per base language. Bridge items for es→it (cognate patterns, false friends) sit in the unit where the word appears.
- Unit maps follow 01-curriculum §3 (IT: Ciao!/Piacere!/Numeri/Al bar/La famiglia/Dove abiti? · DE: Hallo!/Woher kommst du?/Zahlen/Familie/Essen & Trinken/Wohnen). Apply all linguist §1 fixes to any v1 items you carry over (keep `legacyId`).
- Placement bank: **30 items per language**, 6 per band (A0, A1.1, A1.2, A2, B1). Per band: 2 vocab, 2 grammar, 1 listening, 1 reading/cloze. At least one false friend per band for Italian. No item shared with unit items.
- Self-check: `npx vitest run tests/content.test.ts` (the engine writes it in E1) must pass before every commit.

---

## 4. Workstream B: engine / UI

**Ownership:** everything outside `src/content/**`: `src/lib`, `src/app`, `src/components`, `globals.css`, `public/sw.js`, `next.config`, tests, package.json. Read `node_modules/next/dist/docs/` before writing Next code. No server actions or request-reading route handlers (keep static export / Capacitor possible).

### 4.1 Routes and screens
`/onboarding` · `/` Today · `/path` · `/me` · `/me/settings` · `/me/settings/tutor` · `/me/words` (word list + Add my own words) · `/lesson` (full-screen, no tab bar) · `/placement` (full-screen). Delete `/milestones`, `/ties`, `/more`, `/progress`, `/add` and their lib code (`milestones.ts`, `Strands.tsx`).

**Visual system:** adopt 03-ux §3–4 as written: tokens, Fraunces + Inter via `next/font`, per-language accent via `[data-lang]`, light + dark, 3D pressable buttons, feedback bottom sheet, `haptic()` as progressive enhancement, sounds off by default, reduced motion respected, ≥44 px targets, `lang` attributes on target words. No flags in chrome. Course seals "IT"/"DE".

### 4.2 Onboarding (one question per screen, Back available, ~3 min + placement)
1. **Welcome:** "Learn a language, a few minutes a day." [Get started] · "I have a backup" → Import.
2. **App language:** Español / English (pre-selected from `navigator.language`). The UI switches at once.
3. **Learn what?** Italiano / Deutsch (multi-select). The accent recolours to the first one picked.
4. **Per language:** "Explain in" (defaults to the app language; a tip shows "Italian from Spanish is a shortcut" when relevant). Then "Studied it before? Never / a bit / classes / lived there" plus 3 can-do Yes/Partly/No ratings. These set the prior θ: never = −2.5, a bit = −1.5, classes = −0.5, lived there = +0.5, each shifted ±0.5 by the can-dos.
5. **Placement** (`/placement`, skipped if "Never"): see §4.4. Result: "You're around A1.2 · start at Unit 4 · you already know ~N words", with [Start lower] [Start higher].
6. **Goal** (per language, see §4.5): live commitment card → [Set my goal].
7. **When will you practise?** Anchor chips (morning coffee / commute / lunch / evening) plus a time. Stored only.
8. **First session** starts immediately (5 min) → Results → Today.

### 4.3 Scheduler and session
- **FSRS** (`ts-fsrs`), desired retention 0.90 (Maintain goal: 0.85). Due times roll to 04:00 local (sleep). Rating map: wrong → Again. Right with confidence "guessing", or "almost" → Hard. Right with "think so" or no chip → Good. Right with "sure" → Easy. **LLM-raised grades max out at Hard.**
- **Session builder** (5-min chunk ≈ 22 tasks): (1) due reviews, oldest-overdue first, max 15 per chunk, with backlog spread so no more than 40/day are shown; (2) new items in unit order for the current unit, each introduced with `guess` then recalled 3–6 tasks later; (3) interleave item types; (4) requeue a miss once in the same session (cap 2). New items per chunk start at 5. **Controller:** if rolling accuracy over the last 10 graded tasks is >90%, use +1 new item and a harder mode. If <70%, use −2 new and an easier mode.
- **Mode ladder** per card: recognize → tiles/article/listen → recall (typed). Promote on stability ≥ 3 days.
- **Placement seeds** are added as cards with stability 7 d, so they get a quick confirmation review in week 1.
- **Return after ≥7 days away:** the chunk is reviews-only, aiming at ~90% success. Copy: "Welcome back — let's warm up." No count of missed days.
- **Multiple languages:** the session uses the active language. The daily target is split by goal. Today offers the other language as a secondary chip.

### 4.4 Placement engine
Rasch: P = 1/(1+e^−(θ−b)). EAP on a 61-point grid over [−4, 3] with a normal prior (mean from step 4, sd 1.2). Next item = the unused one with b nearest θ, rotating skills. Stop at 15 items, at SE < 0.45 (minimum 8), or on "I'm a beginner". "I don't know" counts as wrong. es→it: false-friend items get weight ×1.5. Map θ to CEFR by the band cut points (−2, −1, 0, 1). Start unit = the first unit whose cefr ≥ the placed band. If the placed level is above the slice, say: "You're beyond our first units. We'll quickly confirm them, and more units are coming." Seeds: every unit item in bands below the placed one. Test: simulate 500 learners, median |θ̂−θ| < 0.5.

### 4.5 Goals → minutes per day (`src/lib/goals.ts`)
Goal types: **Level by date** (A1.1 "travel basics", A1, A2, B1 + date), **Trip** (= A1.1 by date), **Steady** (5/10/20/30 min → projected date), **Maintain** (reviews only, 5 min, retention 0.85).
```
H = {A0:0, "A1.1":45, A1:90 /*=end A1.2*/, A2:190, B1:375}; M = {es-it:0.7, en-it:1.0, en-de:1.25, es-de:1.3}
needMin  = max(0, (H[target] − H[current]) × M × 60 − classHoursPerWeek × weeks × 60)
min/day  = roundUp5( needMin / (weeks × daysPerWeek) )   // daysPerWeek default 5; clamp 5…90
projected date (Steady) = today + needMin / (min/day × daysPerWeek) weeks
```
Labels: ≤15 *Relaxed* · ≤30 *Steady* · ≤45 *Ambitious* · >45 *Very demanding*. The amber card then offers two alternatives: the date that gives 30 min/day, and the highest level reachable by the date at 30 min/day. The card shows "Estimate based on typical course hours" with an ⓘ that explains the assumptions. An optional "I also take classes: __ h/week" field is included. Multiple languages: Today shows the total minutes per day.

**Weekly check** (Today card on the first open of a week, if at least 7 days have passed since the goal was set): the trailing 14-day average gives a projection. Three neutral buttons: Keep date (+X min/day) · Move date to … · Keep my pace. Never automatic, never red.

### 4.6 Today
Header: course seal ▾ (switcher sheet: courses + "Add a language"), "●●●○○ this week". A 200 px ring shows today's minutes against the target, with the current unit title and icon in the middle. Below it, at most one card in this priority order: weekly check → "N to fix" (yesterday's misses) → "Words from yesterday are ready — sleep helped" → backup reminder (every 30 days). **One primary button** at the bottom: "Start · 5 min" / "Continue" / "Practise more" (when the goal is done, it becomes secondary). An "⋯" menu offers Review only · New only · Speed round. When there are two languages, a chip reads "Deutsch · 4/10 min ›".

### 4.7 Lesson player and exercises
Shell: ✕ (confirm), 12 px progress bar, prompt area, answer area in the bottom 55%, optional "How sure?" chips (sure / think so / guessing) above Check. Feedback sheet with ✓/~/✕ + word + correct answer in Fraunces + 🔊 + one-line note (ⓘ to expand) + **"I was right"** (counts as Good, logs the answer as an alt candidate) + Continue.
**MVP exercises:** guess, recognize, recall (typed, with accent bar à è é ì ò ù / ä ö ü ß; `autocorrect=off`), tiles, listen, article, pick-spelling, question, speed round (60 s, opt-in, can be disabled). Listen and speak items are skipped when no voice or API is available. **Results:** ring animation, "+N new · N got stronger · N to fix", one insight card (calibration), and "Tomorrow: …" preview.

### 4.8 Checker (`src/lib/check.ts`, golden tests)
Tokenize on spaces and apostrophes. Normalise case, spaces, final punctuation, curly quotes and ¿¡. Then:
- Exact match or `accept` (correct) or `variants` → **correct**. An `accept` entry with verdict almost → **almost** + its feedback. A match on `errors` → **wrong** + targeted feedback.
- German: ss for ß is **correct**. ae/oe/ue is **correct** (one-time typing tip). A missing umlaut is **almost** (`umlaut`), but **wrong** if it creates a `minimalPairs` word. A lowercase noun is **correct** with a capitalisation note.
- Italian: a missing or wrong accent is **almost** (`accent`), except for e/è, si/sì, da/dà, la/là, li/lì, ne/né, which get a specific note. Elision variants ("l amico", "dove è") are **almost**. An uncontracted preposition ("di il") is **wrong**.
- **Closed-class tokens** (from `lexicon.closedClass`) must match exactly. A wrong article/preposition/pronoun/auxiliary is **wrong**. A missing article: Italian almost; German noun or article drills wrong.
- Fuzzy typo allowance **only on open-class tokens**: Levenshtein 1 if ≥5 letters, 2 if ≥10 → **almost** (`typo`). Never across a minimal pair. A doubled/single consonant change in Italian is **almost** (`double`), or **wrong** in sound items.
- Word order: German wrong unless listed in `accept`. Italian wrong unless listed.
- Verdict shape: `{ verdict: "correct"|"almost"|"wrong", reason?, score: 0..1, feedback?: string }`.

### 4.9 Me and settings
**Me:** goal card ("A2 by May · on track" bar + Edit goal), week strip (7 day-rings, rest days shown as a moon), words stacked bar (New · Learning · Strong ≥21 d), "**Remembered after a week: 87%**" (first reviews at ≥7 d), can-do list per unit (ticked when ≥80% of unit items are at stability ≥7 d), calibration card, Settings ⚙.
**Settings:** Courses (add/remove, explain-in, goal, placement retake) · App language · Session length 3/5/10 · Practice days/week · Speaking exercises · Bridge tips on/off · Speed-round timer on/off · Sounds · Vibration · Reduce motion · Theme · **Connect your AI tutor ✦** · Your data (Export, Import, Reset with typed confirmation) · How Lingua teaches.

### 4.10 AI tutor (optional, BYO key)
Settings screen per 03-ux §5.7. Provider: Claude (others "coming"). Key paste, [Test connection], Forget key. Copy: "Stored only on this device. Sent only to Anthropic. Use a key with a low spend limit." The key is stored in `lingua:llm`, **excluded from backups**. Lazy-load `@anthropic-ai/sdk` with `dangerouslyAllowBrowser`. The model is `claude-haiku-5-5` with low effort. **Grading:** only for typed answers the checker marks almost or wrong, when online, with a 6 s timeout. The prompt, schema and guardrails are as in 04-engineering §2(c). The deterministic verdict shows instantly. The LLM may **raise by one step** (wrong→almost-as-Hard, almost→correct-as-Good) and **never lower**. It never touches placement, scheduling, or exact matches. Results are cached (500 entries). A circuit breaker skips calls for 60 s after a failure. The UI labels it "Claude:", and the course answer is always shown. LLM text is rendered as plain text. **"Why?"** button (explain prompt) appears when connected.

### 4.11 Storage, migration, offline, metrics
- `localStorage` behind `storage-adapter.ts`. The key is `lingua:v2`, holding `{version:2, profile:{appLang, courses:{[lang]:{explainIn, goal, placement, unit}}, activeLang, anchor, settings}, cards, reviews, sessions, custom, events}`. Call `navigator.storage.persist()` on first run.
- **Migration v1→v2:** a pure function with a fixture test. Back up the raw blob to `lingua:v1-backup`. Map cards via `legacyId` and replay review logs into FSRS (no logs → stability = interval). Drop cards with no mapping. Offer the Ties JSON download once, then drop it. Set `explainIn` it=es, de=en, and `appLang` = es. If the owner's data exists, skip onboarding but show the goal step once.
- **Backup:** JSON export/import (accepts v1 or v2, runs the migration chain), with an import preview and a confirm sheet. A malformed file changes nothing.
- **Offline:** hand-written `public/sw.js` with cache-first for `/_next/static`, fonts and icons, network-first navigation with a cache fallback, and a precache of routes on install. Serve it with `Cache-Control: no-cache`. An "Offline — practice still works" pill is shown.
- **Metrics (on-device only):** an append-only `events` log (session_start/end, answer{itemId, mode, verdict, rating, source, ms}, goal_set, placement_done, checkin_choice), capped at 10k. Me → "Stats for testers" → copies aggregate JSON (no item text).

---

## 5. Build plan

### 5.1 Engine stream (ordered)
1. Vitest; `schema.ts` verbatim; `tests/content.test.ts` (validates every rule in §3.3: unique ids, both glosses, spoken, distractors, Mcq index in range, seeds exist, ≥30 placement items); `tests/fixtures/mini-course.ts` so work isn't blocked on content.
2. Storage adapter + DB v2 + v1→v2 migration + test. Delete the Milestones/Ties/More/Add routes and lib code.
3. Checker v2 + golden tests (≥60 cases from the linguist's §5).
4. FSRS scheduler + rating map + tests.
5. Design tokens, fonts, tab bar (Today·Path·Me), i18n es/en UI strings.
6. Lesson player + MVP exercises + feedback sheet + results.
7. Onboarding + placement engine (simulation test) + goal calculator (unit-tested on the §4.5 examples).
8. Today, Path, Me, Settings, backup/import.
9. Service worker + offline pill.
10. Session controller (80–85%) + return-after-break mode.
— **CUT LINE** — things below it ship only if time allows. If time runs out, drop items from the bottom of this list first.
11. AI tutor: settings + grading with guardrails (tests with a mocked provider).
12. "Why?" explain.
13. Weekly check card.
14. Add my own words (port v1's add-from-class into `custom`).
15. Speak exercise, haptics/sounds polish, confetti, view transitions.
Never cut 2, 3, 4, 7, 9. Run `tsc`, `eslint`, `vitest` and `next build` clean before handing over to the Judge.

### 5.2 Content stream (ordered)
1. **Within the first hour:** `index.ts` files plus `it/u01`, `de/u01`, a lexicon draft, and 10 placement items per language, committed so the engine can integrate.
2. Units 2–3 for both languages.
3. Complete the placement banks (30/language).
4. Units 4–6.
5. Lexicon complete (closed class + minimal pairs). Linguist self-review pass, setting `reviewed`.
— **CUT LINE** — if time runs out, drop items from the bottom of this list first: u06, then u05 (**minimum 4 units/language × ~18 items**), then dialogue items, then `example` fields, then en→de bridge items. Never cut: both glosses, `spoken`, placement ≥30, linguist fixes. Quality over quantity.
Last step: delete the v1 `src/content/it.ts` and `de.ts` once the engine no longer imports them.

---

## 6. CUJs and acceptance criteria (the Judge tests at 375×812, iOS Safari and Android Chrome where possible)

**CUJ-1 · First open → first lesson.** Fresh profile: app language → Italian → explain in Español → "a bit" → placement → goal → first session → results → Today.
✔ First answer within 4 min of opening. ✔ Placement takes 8–15 items, has "I don't know" and "I'm a beginner". ✔ Result names a CEFR band and a unit, with lower/higher override. ✔ Goal card shows min/day + label + projected date, and updates live. ✔ Zero owner-specific strings anywhere. ✔ The UI is fully in Spanish.

**CUJ-2 · Absolute beginner.** "Never" → no placement → Unit 1. ✔ No test items shown. ✔ First items are guess-first with teaching.

**CUJ-3 · Daily return.** Simulate the next day. ✔ Today shows one primary button and ≤1 card. ✔ Reviews from yesterday appear. ✔ The ring fills. ✔ A session ends by itself at ~5 min with results. ✔ "Practise more" is offered, never auto-started.

**CUJ-4 · Second language.** Switcher → Add Deutsch → explain in English → placement → goal. ✔ Done in <3 min. ✔ The accent switches to blue. ✔ Today shows the combined minutes and the other-language chip. ✔ Italian progress is untouched.

**CUJ-5 · Mistakes.** Miss 3 items. ✔ Each is requeued in-session. ✔ The feedback sheet shows the correct answer + note. ✔ "I was right" works. ✔ The next day's Today shows "3 to fix".

**CUJ-6 · Checker correctness.** ✔ *nono* for *nonno* is not accepted as correct. ✔ *la zio* is wrong. ✔ *heisse* is correct. ✔ *schon* for *schön* is wrong (minimal pair). ✔ *citta* is almost. ✔ *ein Kaffee, bitte* is almost with a note. ✔ A lowercase German noun is correct with a note.

**CUJ-7 · Change goal.** Me → Edit goal → A2 by an earlier date. ✔ "Very demanding" with two alternatives. ✔ Saved in <60 s. ✔ Today target updates. ✔ No history lost.

**CUJ-8 · Falling behind.** Simulate 9 days absent. ✔ "Welcome back" warm-up, reviews only. ✔ No missed-day count, no red. ✔ The weekly check (if built) offers 3 neutral options.

**CUJ-9 · AI tutor (if built).** Paste a key → Test → typed near-miss. ✔ Instant local verdict, then "Claude:" upgrade or explanation. ✔ Airplane mode: no blocking, silent fallback. ✔ A wrong key gives a clear error. ✔ The key is absent from the exported backup. ✔ An exact answer makes no network call.

**CUJ-10 · Offline.** Load once, then airplane mode, then cold-start the installed PWA. ✔ The app opens. ✔ A full session completes and progress persists.

**CUJ-11 · Backup/restore.** Export → Reset → Import. ✔ Preview shows languages/items/goal. ✔ Identical state afterwards. ✔ A malformed file is rejected with no change. ✔ A v1 export imports and migrates.

**CUJ-12 · v1 owner upgrade.** Load with a v1 `lingua:v1` fixture. ✔ Onboarding skipped except the goal. ✔ Cards for kept items retain their due dates (±1 day). ✔ Ties download offered once. ✔ No Milestones/Ties anywhere.

**CUJ-13 · Accessibility and themes.** ✔ Dark mode works. ✔ Reduced motion works. ✔ Targets ≥44 px. ✔ Correctness is never shown by colour alone. ✔ Target words carry `lang`.

**Persona pass:** the Judge plays P1–P4 end to end and reports whether each "must feel" line holds.
