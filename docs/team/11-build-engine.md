# 11 · Build report — engine / UI (Workstream B)

_Engine/UI builder · 2026-11-12 · branch `v2-redesign`. Spec: 10-spec.md §4–5._

## How to run

```bash
npm install
npx vitest run                     # 161 tests (checker golden set, FSRS, placement sim, goals, session, migration, backup, LLM guardrails, content rules)
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
