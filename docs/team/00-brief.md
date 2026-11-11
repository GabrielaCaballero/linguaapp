# Lingua v2 — team brief

_Written by the orchestrator, 2026-11-12. Every agent reads this first._

## The ask (from Gabriela, the product owner)

She tried the v1 prototype on her phone. Verdict: **not intuitive enough**. She doesn't like the milestones screen or the "Vínculo con Italia" log. She wants:

> "Make it a language learning app. In this case Italian and German."

- **Remove everything specific to her personal situation** (citizenship case, Lavello, Dante Alighieri exam, Swiss "fide" test, Zurich, her name in content, "Ties to Italy" log, hard-coded milestone dates).
- **Instead:** at one point the app lets the user **set a goal**, and depending on how ambitious the goal is, it tells them **how much to practise** (e.g. minutes/day, days to reach a level).
- **Placement:** start with a test to know the user's level and adapt the program from there.
- **Engagement:** make learning enjoyable — "almost addictive as Instagram" — so people learn instead of doom-scrolling. (Our constraint: ethical engagement; habit-building, not dark patterns. v1 deliberately had no streak-shaming or hearts; revisit this with evidence.)
- **LLMs:** explore letting the user connect their favourite LLM (her: Claude) so an LLM judges free answers instead of only fixed algorithms. Compare to how Duolingo splits fixed vs. ML-driven.
- She'll review everything in the morning. The team may make decisions; **log them with reasons**.

## About the product owner (context, not a persona to design only for)

PM at a big tech company, native Spanish (Argentina), fluent English, lives in a German-speaking city. Learning Italian (some Duolingo) and German (taking classes). Uses iPhone and Android. Rusty coder; likes plain-language explanations. Read Dehaene's *How We Learn* and wants the app grounded in learning science.

## Current state (v1, on `main`)

- Repo: `/Users/gabrielacaballero/Documents/Claude/lingua` (GitHub: GabrielaCaballero/linguaapp). Work happens on branch **`v2-redesign`**. Never push to `main`; never force-push.
- Stack: **Next.js 16.4.2** (App Router; read `node_modules/next/dist/docs/` before writing Next code — APIs differ from older versions), React 19.3, TypeScript, plain CSS (`src/app/globals.css`), PWA manifest. No backend; data in localStorage (`src/lib/store.ts`). Will be deployed on Vercel. Later may be wrapped with **Capacitor** into native apps — keep that path open (no server-only features required for core use).
- Engine: SM-2-style SRS (`src/lib/srs.ts`), session builder (`src/lib/session.ts`), forgiving answer checker (`src/lib/check.ts`), speech via Web Speech API (`src/lib/speech.ts`).
- Learning design in v1: Dehaene's four pillars (attention, active engagement, error feedback, consolidation), "guess first" pretesting, confidence ratings (fluency-illusion feedback), Nation's four strands, speed round.
- Content: ~60 Italian items (taught from **Spanish**), ~40 German items (taught from **English**), in `src/content/it.ts`, `de.ts`. UI strings in `src/lib/i18n.ts` (Spanish UI for Italian, English for German).
- Screens: Today, Session, Progress, Milestones, More, Add-from-class, Ties to Italy.
- Hand-over notes from v1: `docs/handover.md`. Screenshots: `docs/screenshots/`.

## Standing decisions (orchestrator)

1. Two target languages for now: **Italian and German**. Architecture must allow adding more.
2. **Base (interface/bridge) language is a user setting**, not hard-coded. v2 ships with Spanish and English as base languages. Owner preference: Italian from Spanish. (Curriculum + PM decide whether content carries both es and en glosses.)
3. Works fully **without** an LLM. LLM is an optional "bring your own key" upgrade.
4. Ethical engagement: no manipulative dark patterns (loss-aversion guilt, fake scarcity, punishing hearts). Habit design is fine and encouraged.
5. Phone-first, installable PWA; must work offline for core practice.
6. All team output goes to `docs/team/NN-role.md`. Decisions get appended to `docs/team/decisions.md` (one line each: date · who · decision · why).

## Team

| # | Role | Output |
|---|---|---|
| 01 | Curriculum curator (teacher) | `01-curriculum.md` |
| 02 | Product manager (planner; owns goals, CUJs, metrics, final spec) | `02-product.md` → later `10-spec.md` |
| 03 | UX / visual design | `03-ux.md` |
| 04 | SWE + ML engineer (LLM integration, adaptivity) | `04-engineering.md` |
| 05 | Learning neuroscientist (learning, motivation, habits, placement) | `05-learning-science.md` |
| 06 | Native-speaker linguist (Italian + German accuracy, CEFR) | `06-linguist.md` |
| 07 | Judge (personas, CUJ testing of the built app) | `20-judge-report.md` |
