# 11 · Build report — engine / UI (Workstream B)

_Engine/UI builder · 2026-11-12 · branch `v2-redesign`. Spec: 10-spec.md §4–5._

## How to run

```bash
npm install
npx vitest run                     # 178 tests (checker golden set, FSRS, placement sim, goals, session, migration, backup, LLM guardrails, content rules)
npx tsc --noEmit && npx eslint
NEXT_DIST_DIR=.next-v2 npx next dev -p 3300     # dev
NEXT_DIST_DIR=.next-v2 npm run build && NEXT_DIST_DIR=.next-v2 npx next start -p 3300
```
`NEXT_DIST_DIR` exists only because a v1 `next start -p 3200` is serving from `.next` on this machine. Once v1 is retired, plain `npm run dev` / `npm run build` work (default dist dir `.next`). The service worker registers in production builds only.

## What was built (spec §5.1, all items 1–14 above and below the cut line except 15)

| # | Item | Where | Status |
|---|---|---|---|
| 1 | Vitest, frozen `schema.ts`, `tests/content.test.ts` (every §3.3 rule), `tests/fixtures/mini-course.ts` | `tests/` | ✔ real content passes |
| 2 | Storage adapter, DB v2 (`lingua:v2`), v1→v2 migration (legacyId map, FSRS replay, due kept, ties offered once, `lingua:v1-backup`), v1 routes/lib deleted | `src/lib/{storage-adapter,store,model,migrate,backup}.ts` | ✔ unit + browser (CUJ-12) |
| 3 | Checker v2: closed-class exact, minimal pairs never bridged, umlaut/ss/ae rules, Italian accents/elision/contractions, typo only on open-class | `src/lib/check.ts`, `tests/check.test.ts` (77 golden cases incl. all CUJ-6) | ✔ |
| 4 | FSRS (`ts-fsrs`, retention 0.90/0.85), rating map, 04:00 roll, placement seeds (S = 7 d) | `src/lib/scheduler.ts` | ✔ |
| 5 | Tokens, Fraunces + Inter (`next/font`), per-language accent, light/dark/system, 3D buttons, tab bar Today·Path·Me, i18n es/en | `globals.css`, `layout.tsx`, `src/lib/i18n.ts` | ✔ |
| 6 | Lesson player: guess-first + teach, recognize, recall (accent bar), tiles, listen, article, pick-spelling, question, speed round; feedback sheet (✓/~/✕, note, ⓘ, "I was right"); results (ring, +new/stronger/to fix, insight, tomorrow) | `src/app/lesson`, `src/components/lesson/*` | ✔ |
| 7 | Onboarding (welcome/backup import → app language → languages → explain-in → experience → can-dos → placement → result ± band → goal → anchor → first lesson); Rasch/EAP placement (8–15 items, SE < 0.45, "I don't know", "I'm a beginner"); goals.ts | `src/app/onboarding`, `src/components/{Placement,GoalPicker}.tsx`, `src/lib/{placement,goals}.ts` | ✔ 500-learner sim: median error < 0.5 |
| 8 | Today (≤ 1 card: ties offer → weekly check → welcome back → N to fix → sleep → backup; one primary button; ⋯ menu; other-language chip; switcher sheet), Path (6 unit nodes, progress ring, can-dos, samples, "Practise this unit"), Me (goal + pace, week strip with rest moons, word strength, remembered after a week, can-do ticks, calibration, tester stats), Settings (courses/explain-in/goal/retake/remove, app language, lesson length, days/week, toggles, theme, backup export/import with preview, typed-confirm reset, How Lingua teaches) | `src/app/(tabs)/**` | ✔ |
| 9 | Hand-written `public/sw.js` (cache-first static, network-first pages, route precache), `no-cache` header, offline pill | `public/sw.js`, `next.config.ts`, `Boot.tsx` | ✔ headers verified; offline cold-start not device-tested |
| 10 | Session builder (≤ 15 reviews/chunk, ≤ 40/day, guess→follow-up 3–6 later, interleave, requeue ×2) + controller (>90 % +1 new & harder; <70 % −2 & easier, live in-session) + welcome-back (≥ 7 d → reviews only) | `src/lib/session.ts` | ✔ |
| 11–12 | AI tutor: BYO Anthropic key in `lingua:llm` (never in backups), lazy SDK, `claude-haiku-5-5`, effort low, JSON schema output, 6 s timeout, 500-entry cache, 60 s circuit breaker, guardrails (raise ≤ 1 step, never lower, quote check, consistency, confidence < 0.6 → "not sure"); "Why?" explain | `src/lib/llm/*`, `/me/settings/tutor` | ✔ guardrails unit-tested with mocked responses; **no live key test** |
| 13 | Weekly check card (3 neutral buttons) | Today | ✔ code; not clicked in browser |
| 14 | Add my own words (custom items, unit "custom") + word list with search/audio | `/me/words` | ✔ |
| 15 | Speak exercise, view transitions | — | **cut** (setting shows "Coming soon") |

## Verified in the browser (375×812, dev server, real content)
Onboarding in Spanish → Italian (explain in Español) → "Un poco" → can-dos → placement (15 items, level meter, "No sé") → result A0 → "Empezar más arriba" (A1.1, unit 2, ~30 seeded words) → goal (A2 in 3 months → "Muy exigente" + 2 alternatives; A1 in 6 months → 25 min "Constante") → anchor → first lesson (guess-first + teaching card, feedback sheets) → results → Today. Next-day simulation (timestamps shifted): "N palabras para corregir de ayer", one button. Typed near-miss *italiamo* → "Casi · typo", "Tenía razón" → Good + alt candidate logged. Add German from Settings (explain in English, "Nunca" → no placement) → accent turns blue, other-language chip. v1 blob → migrated (zurigo dropped, legacyIds mapped, backup kept), goal-only onboarding, Ties download card. 9 days away → "Qué bueno verte", reviews only. Dark + light themes. Screenshots: `docs/screenshots/v2/01–15`.

## Known issues / not verified
- Offline cold start, install as PWA, iOS Safari, real TTS voices, haptics: not tested on a device.
- AI tutor never called with a real key (needs the owner's key); error mapping follows SDK error classes.
- Today shows the active language's ring + the other language as a chip; a combined "total minutes" figure isn't shown separately.
- The Browser pane occasionally stopped painting (rAF stalled) until the viewport was resized — a pane quirk, not reproduced in the app logic.
- First-session practice fill may include freshly seeded (placement) words; acceptable as "quick confirmation" but could be gentler.
- `docs/team/decisions.md` commit also carries the content agent's uncommitted decision lines.

## Fix round (after 20-judge-report.md)

Verified at phone size on the port-3300 dev server against the real content, plus unit tests (178 total). tsc, eslint and `NEXT_DIST_DIR=.next-v2 npm run build` are green.

| Judge issue | Status | What changed / how verified |
|---|---|---|
| **P0-1** second lesson reuses old state | **Fixed** | `src/lib/nav.ts` adds a per-visit nonce to every `/lesson`, `/onboarding` and `/placement` link. Those pages key their state on `useSearchParams()` inside `<Suspense>`. Today closes its sheets before navigating. Browser: quit → Continue, Results → "One more round", switch IT→DE → Start, and add a language all gave fresh sessions. |
| **P0-2** A1.2+ → Unit 6, whole course seeded | **Fixed** | `unitDifficulty()` / `startUnit(units, θ, SE)` / `seeds(units, startUnit, …)` in `placement.ts`. Start/seed decisions use the conservative θ − SE. The start unit and later units are never seeded. "Start lower/higher" moves one unit at a time (browser: 6→5→4→3, 125→104→78→52 seeded words). es→it reading items weigh ×0.6. Real-content tests: A1.2 learner starts mid-course, every unit is reachable, <75 % of items seeded. A very strong learner (85 % right) still lands at Unit 6 with the "beyond" note pointing to "Keep what I know". |
| P1-1 "5 min" lasts 1–2 min | **Fixed** | The player appends up to 8 more chunks until the chosen minutes have really passed. Results offers "One more round · 5 min". The ring counts real minutes. |
| P1-2 default goals "Very demanding" | **Fixed** | Default is Steady 15 min/day, capped so all languages total ≤ 30 (`otherMinutes`). This also applies to the v1 goal-only step (IT 15 + DE 15). |
| P1-3 "to fix" mismatch / not first | **Fixed** | Results counts every miss in the session (a later correct answer no longer erases it). The next lesson opens with today's and yesterday's misses (≤ 15). Browser: Results "67" → next day Today "67" → first task was a missed word. |
| P1-4 weekly check after a break | **Fixed** (logic), not re-screenshotted | Skipped after a ≥ 7-day break or with a 0 average. Dates more than 2 years out read "more than 2 years away". The third button says "Switch to N min/day, no date". The ring shrinks when a card shows. |
| P1-5 goal sheet overlap / 90 clamp / rounding | **Fixed** | The commitment card is back in normal flow, with the alternatives above it. Over 90 shows "90+ / More than 90 min a day". `roundUp5` has an epsilon, so the 30-min alternative saves as 30. |
| P1-6 umlaut note names the wrong letter | **Fixed** | Note reads e.g. "La diéresis importa (ü ≠ u · Tschüss)". |
| P1-7 register feedback | **Fixed** | New reason `register` (du/dich/bist… on a formal item, Sie/Lei on an informal one; lowercase *sie* is not flagged), plus `spanish` (*chao→ciao*, *gracias→grazie*…). Golden tests added. |
| P1-8 beginner first minute | **Fixed** (mostly) | A session never opens with an audio-only sound item. Sound guesses show the meaning and "Listen and tap how it's spelled". Transparent cognates (*italiano↔italiano/a*, *caffè↔café*) skip the guess with a "same as in Spanish!" card. *Familie↔family* is not auto-detected. |
| P1-9 flat results | **Partially** | "Got stronger" now counts correct reviews of cards you already had. The calibration insight needs ≥ 3 chips. A "to fix" insight was added. Review only / Speed round are disabled when there's nothing to do. "1 word" is pluralised. No new celebration beyond the existing confetti on goal reached. |
| P1-10 offline | **Partially** | The page now posts every loaded `/_next/static` chunk to the SW to cache. Still not device-tested (the pane can't register SWs). |
| P1-11 goals beyond content | **Fixed** | A2/B1 show "more units coming". The card says the course currently goes to A1 and you'll keep reviewing. |
| P2: green guess tick, 44 px confidence chips, "En italiano" placeholder, export toast, register tag no longer gives away recognition answers, "Kinder options" copy | **Fixed** | |
| P2: sheet covers options, mixed-language strings, Grüß Gott note, content distractors, import-from-welcome preview, Me copy, step dots, cold-load skeleton | **Not fixed** | Content items belong to the content stream. |

Screenshots updated: `03-placement-result` (unit 4 after one-unit steps), `04-goal` (Steady 15 default, taken before the level-card label fix), `05-lesson-guess-first` (Italian beginner opens on meaning: *Ciao*), and new `16-goal-edit-honest` (alternatives above the card).
