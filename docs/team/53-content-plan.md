# 53 · Plan: grammar explained like a book, tables, typing, and graded writing

_2026-11-14 · Lead, combining 50 (linguist), 51 (learning designer) and 52 (AI engineer). Owner requests: explain grammar like textbooks ("why *meine Brüder*, not *meinen*"); full conjugation/declension tables; make people type; grade short essays with a small/free model._

## The idea in one paragraph
Every new grammar pattern gets a short **rule card** written like a good textbook (rule, full table, two examples, the classic mistake for Spanish or English speakers). Practice then moves the learner from **reading the table → typing endings → filling the whole table → using the form in sentences**, typing much earlier than today. When an answer is wrong, the app works out **which rule** was broken and says why in one line, with the full explanation one tap away. From B1 (optionally A2), units end with a **short writing task**; code checks the basics instantly and a small paid model (Claude Haiku, run by the owner, capped at US$5/month) gives three concrete corrections and one thing done well. It never changes the review schedule.

## What each specialist decided
| Area | Decision | Detail in |
|---|---|---|
| Grammar explanations | **Grammar points** become their own content (≈58 per language, A0→B2, top 15 marked). Each has rule, step-by-step "how to work it out", tables, glossed examples, typical mistakes for es/en speakers, contrast with Spanish. Three depths: rule card · one-line "why" on mistakes · browsable Grammar section from the Path | 50 |
| Explaining a mistake | Deterministic diagnosis, first match wins: known mistakes in content → tag on each wrong option → look the learner's form up in the table → small checks (word order, separable verbs, essere/avere, congiuntivo) → otherwise link to the rule. Per-sentence annotations ("*Brüder*: plural, object of *besuchen*") make the "why" correct. No annotation = no specific claim | 50 |
| Tables | New item type **`paradigm`**: one table ≤ 7 cells (fits a phone with the keyboard open), e.g. *kommen* present = 6 cells. Bigger grids are split (one case row; one preposition row). One FSRS card per table; per-cell stats pick the weak cells. Four steps: study → type endings (`komm__`) → partly filled → blank | 51 |
| Typing | Type after one night instead of three days; first-letter hint (caps the rating at Hard, never punished); "I don't know" shows the answer and asks you to type it once. New exercises: `table`, `cloze` (verb given in brackets), `transform` (present→past, du→Sie), `dictate`, `fix` (find the mistake), `build`, `write` | 51 |
| Writing | Code checks first (length, sentences, greeting/closing, tu/Lei or du/Sie, connectors, right language). Then a **Supabase Edge Function** (first server code) with the owner's Anthropic key calls `claude-haiku-5-5` with a fixed rubric. 6 essays per user per week, 400 a month total, US$5 spend limit. Own key stays as an advanced option. In-browser models rejected (2–3.5 GB downloads, weak at German/Italian, unstable on iPhone). Free tiers rejected (some train on your text) | 52 |

## Honest corrections the team made
- **The owner's example.** In the course sentences *Brüder* is the **object**, not the subject. The correct "why": plural nominative and accusative are both *meine*; *meinen* is accusative masculine singular (*meinen Bruder*) or dative plural (*meinen Brüdern*). This is exactly why explanations need per-sentence annotations rather than a generic template.
- **Typing is not always better.** Recognition stays for listening, long sentences and bad days; we measure instead of assuming (below).

## Phased plan
| Phase | What ships | Effort (eng / content) | Who |
|---|---|---|---|
| **P0 · Type earlier** (≈1 week) | Mode ladder change, first-letter hint, "I don't know → type it once", random A/B split per new item so we can measure | 3–4 days / – | engine |
| **P1 · Pilot: 2 grammar points + 2 tables per language** (≈2 weeks) | Grammar point schema (2.1), rule card, one-line "why", paradigm item + `table` exercise, checker: several cells at once; DE: articles by case + *kommen/sein*; IT: articulated prepositions + *essere/avere* | 6–7 days / ~25 h | engine + linguist |
| **P2 · Writing beta** (≈2 weeks, owner + 2 friends) | Code checks + Edge Function + rubric + quotas; writing tasks at the end of B1 units; gold set of 40 graded essays per language; ship gate: ≥ 90% of shown corrections are right | 5–6 days / ~20 h | engine + linguist |
| **P3 · Top 15 grammar points + core tables** | All top-15 points per language, ~40 tables per language, `cloze`, `transform`, `fix` | 5–6 days / ~150 h | content-heavy |
| **P4 · Full inventory** | Remaining ~43 points, ~100 tables and ~150 transforms per language, `dictate`, `build`, Grammar section on the Path | 3–4 days / ~200 h | content-heavy |

Content effort is large (≈370 h for explanations plus the tables and drills). Agents draft, a native-level linguist pass reviews, and evals catch regressions; each explanation template gets two reviewers.

## How we will know it works
- **Typing earlier:** retention after 7 and 30 days (tested by typing) for typing-first vs. old ladder items, plus transfer to regular verbs never practised. Ship to everyone only if retention is at least equal.
- **Explanations:** a golden set of wrong answers with the expected rule; every new explanation must pass it. Friends rate "Was this explanation helpful?" (one tap).
- **Writing:** gold-set agreement before launch; in use, % of corrections friends mark as wrong (target < 10%).

## Decisions the owner needs to make
1. **Order:** P0 → P1 → P2 as above, or writing (P2) before tables (P1)?
2. **Writing cost:** OK to pay up to ~US$5/month (expected ≈ US$0.25) with your Anthropic key on the server, capped per friend?
3. **Privacy:** essays are stored in the EU, users can delete them; Anthropic processes them (not EU-only, no training). OK to say this to friends?
4. **Scope:** writing tasks from A2 or only from B1?

## Risks to watch
Wrong confident explanations (guarded by annotations + golden set) · sessions slowing down (max one full table per 5 minutes) · checker rejecting correct variants · content workload · essays costing money or leaking (quotas, spend cap, no auto-retry, RLS) · copying textbooks (consult for accuracy only; write our own wording).
