# 30 · Test plan and eval set: Lingua v2

_QA lead / eval owner · 2026-11-12 · branch `v2-redesign`. Sources: 10-spec (CUJs, rules), 06-linguist (checker rules, pitfalls), 05-learning-science, 03-ux, 11/12 build reports, 20-judge-report (every P0/P1 is a regression eval)._

## 1. Scope

In scope: everything a learner touches in v2. That means the answer checker, the scheduler, the session builder and difficulty controller, placement, goal maths, v1→v2 migration, backup and import, the AI-tutor guardrails, the shipped Italian and German content, the 13 CUJs for the four personas, and phone UX (tap targets, layout at 375 px, contrast, reduced motion, dark mode, localisation, console errors, offline).

Out of scope: real TTS voice quality, iOS Safari quirks, haptics, and a live Anthropic call. These can't run headless here, and the tutor's network layer is tested with a mocked provider. Section 7 lists them as manual device checks.

## 2. Quality bar (definition of done)

The bar is met when all three hold:

1. **Overall ≥ 99 %** of eval cases pass.
2. **Every category ≥ 95 %.** This stops thousands of easy cases from hiding a broken area.
3. **Zero open P0/P1** in `tests/evals/issues.json`. An issue closes only when all the evals listed against it pass.

`npm run eval` exits 0 only when the bar is met.

## 3. Eval categories and how each is graded

| Category | Where | Cases | Graded by |
|---|---|---|---|
| **checker** | `tests/evals/checker/cases.ts` + `checker.eval.ts` | 253 rows + 1 meta | Deterministic. Each row is {item (real content or synthetic), learner input, expected verdict, optional reason/note/feedback/letter}. Expectations come from the spec, the linguist doc and the judge, never from the code's current output. Each row runs with both explain-in languages. |
| **engine** | `tests/evals/engine/*.eval.ts` | ≈160 | Deterministic. FSRS grade map, monotonic ratings, 04:00 roll at 5 clock times, seeds, Maintain retention. Session: guess-first + follow-up 3–6 later, new-item budget, chunk ≈4.4 tasks/min, ≤15 reviews/chunk, ≤40/day, misses first, welcome-back reviews only, interleaving, requeue cap 2, mode ladder, no audio → no listen. Controller thresholds. Placement: 300 simulated learners per language pair on the **real** banks (median error < 0.5, 8–15 items), unit mapping is monotonic and reaches all units, the start unit is never seeded, never the whole course, the judge's "Ana" repro. Goals: the spec formula on 48 grid points, clamps, labels, honest >90, the 30-min alternative saves as 30, weekly check after a break. Migration, backup round trip, malformed files, key never in a backup. LLM guardrails and tutor orchestration with a mocked provider (no call on exact answers, offline fallback, 6 s timeout + 60 s breaker, bad key). |
| **content** | `tests/evals/content/schema.eval.ts` | 46 | Deterministic rules from spec §3.3 and the linguist style guide: ids, both glosses, `spoken` with no digits, ≥3 distinct distractors, no distractor that is an accepted answer, article matches gender, German capitals and ß, Italian accent forms, contractions, no voseo, notes ≤2 sentences, register twins marked, no duplicate recall prompts, MCQ validity, placement bank shape (30, 6/band, skill mix, b within ±0.4), lexicon size, no banned strings. |
| **content-audit** | `tests/evals/content/audit.ts` + `audit-hashes.json` | 391 (all unit and placement items, both languages) | **Rubric graded by me as a native-level linguist.** Criteria: translation, gender/article, accents, gloss_es, gloss_en, distractors, answer_key. Failures are listed with a note in `audit.ts`. Each item is pinned to a content hash, so an edited item fails as **STALE** until it is re-read and re-pinned (`AUDIT_WRITE=1`). |
| **ux-static** | `tests/evals/ux/static.eval.ts` | ≈330 | Deterministic source checks. Every i18n key exists in both languages, is translated, and has no English inside Spanish (or the reverse). No "1 words". No hard-coded text or aria-labels in TSX. No owner strings. Reduced motion, dark tokens and 44 px CSS. Service-worker wiring. |
| **e2e-cuj** | `tests/evals/e2e/cuj.spec.ts` | 15 | Playwright on Chromium in a 390×844 mobile emulation, against a production build (`NEXT_DIST_DIR=.next-qa`, port 3500). A scripted learner drives the real UI using the app's own i18n strings, answers from the real content (an oracle), and controls time with `page.clock` / stored-timestamp shifts. Covers CUJ-1, 2, 3, 4, 5, 7, 8 and 12 across the personas, plus the P0-1, P0-2, P1-1, P1-2 and P1-3 regressions. |
| **e2e-ux** | `tests/evals/e2e/ux.spec.ts` | 19 | Measured in the browser on every main screen, in es and en: all targets ≥44 px, no horizontal scroll at 375 px, WCAG AA contrast, no console errors, no other-language strings, `lang` on target words. Also dark mode, reduced motion, ✓/✕ + words (not colour alone), CUJ-11 backup round trip + bad file, and CUJ-10 offline cold start with the service worker. |

Personas map onto the specs as follows. Ana (P1) is the es UI with two languages (CUJ-1/4/8). Mateo (P2) is es→it from zero (CUJ-1/3/8). Emma (P3) is en→de, never studied (CUJ-2/7). Priya (P4) is en→it, beginner mid-test, offline (CUJ-1/10). CUJ-6 (checker correctness) lives entirely in the checker category. CUJ-9 (AI tutor) is in engine with a mocked provider. CUJ-13 is in e2e-ux.

### Judge issue → eval map
`tests/evals/issues.json` lists, for every judge P0/P1, the evals that must pass before it closes. The P2 items are covered by: content-audit (der Rock/die Art/give-away distractors, de-p-30), checker (Grüß Gott regional variant), ux-static/e2e-ux (mixed-language strings, 44 px chips, aria names), and engine (30-min alternative rounding).

## 4. How to run

```bash
npm run eval            # everything: vitest evals + Playwright (builds .next-qa, serves :3500), prints the scoreboard
npm run eval -- --no-e2e  # unit-level evals only (seconds)
npm run eval:unit       # vitest evals with the normal reporter
npm run eval:e2e        # Playwright only
```

The scoreboard also writes `tests/evals/.results/scoreboard.json` (git-ignored). The production build goes to `.next-qa`, never `.next`, which the phone server on :3200 uses. The scoreboard restores `tsconfig.json` if `next build` rewrites it. The engineers' `npm test` is unchanged, because eval files are `*.eval.ts`/`*.spec.ts` with their own config.

## 5. Iteration protocol

1. Run `npm run eval` and read the failing cases.
2. Triage each failure as one of: **product bug** (fix in `src/**`), **content error** (fix in `src/content/**`, log it in `decisions.md`, re-grade and re-pin the audit), or **eval bug**. Only change an eval when it contradicts the spec or linguist docs, and log the reason in `31-eval-log.md`.
3. Keep `tsc`, `eslint`, `vitest` and `NEXT_DIST_DIR=.next-v2 npm run build` green.
4. Append the iteration to `31-eval-log.md`: per-category score, overall %, what was fixed, and what still fails. Close the issues in `issues.json` whose evals all pass. Commit.
5. Stop when the bar is met, or after 6 iterations, or when blocked. In those cases, document what's left and why.

## 6. Baseline (phase 1, before any phase-2 fix; code at commit 820f9a8)

Unit-level evals (vitest), first run:

| Category | Pass / total | % |
|---|---|---|
| checker | 239 / 255 | 93.7 |
| engine | 162 / 163 | 99.4 |
| content | 41 / 46 | 89.1 |
| content-audit | 377 / 391 | 96.4 |
| ux-static | 323 / 332 | 97.3 |

Full baseline including the browser (`npm run eval`, iteration 0): **1164 / 1221 = 95.3 %**, e2e-cuj 6/15, e2e-ux 6/19, 13 open P0/P1.

Baseline failures: Italian accent-meaning words (e/è, sì, dà, là, né) are treated as minimal pairs (wrong) instead of almost + note. There's no register feedback for Italian verb forms (Parli/Parla, stai/sta, Scusa/Scusi). German verb-ending errors (wohnt, sprechen) pass as typos. *Quando* is accepted as a typo of *quanto*. There are 9 German give-away distractors (capitalised nouns among adjectives/verbs/numerals). 5 aria-labels are hard-coded in English. There's a "1 words" string. Three eval-side mistakes were found and logged in 31-eval-log.md. The e2e baseline is in 31-eval-log.md, iteration 0.

## 7. Manual checks (not automatable here)

These go on a real phone before release: iOS Safari install, a real airplane-mode cold start, TTS voices (the nonno/nono rate), haptics, and an AI tutor with a real low-limit key (CUJ-9 live). They aren't counted in the scoreboard and are listed as open risks in the final report.

## 8. Final scoreboard

After iteration 1 (`npm run eval`, production build on :3500):

| Category | Pass / total | % |
|---|---|---|
| checker | 255 / 255 | 100 |
| content | 46 / 46 | 100 |
| content-audit | 391 / 391 | 100 |
| e2e-cuj | 15 / 15 | 100 |
| e2e-ux | 19 / 19 | 100 |
| engine | 163 / 163 | 100 |
| ux-static | 336 / 336 | 100 |
| **Overall** | **1225 / 1225** | **100 %** |

Open P0/P1: **0**. **Bar met in 1 iteration.** Details, eval-case changes (E1–E8) and remaining manual risks are in `31-eval-log.md`.
