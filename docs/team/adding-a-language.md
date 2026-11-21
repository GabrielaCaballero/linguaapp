# Adding a language

Linguina's screens list courses from one registry, so a new language (say French, `fr`) is mostly
content. Steps:

1. **Code** — add `"fr"` to `TARGET_LANGS` in `src/content/schema.ts`. TypeScript then points at
   every place that needs an entry for it.
2. **Registry** — add `fr` to `LANG_INFO` in `src/content/languages.ts`: native name ("Français"),
   two letters ("FR"), the round flag's stripes, speech locale ("fr-FR"), the one-line tag and the
   three "Can you already…?" questions in Spanish and English. (A language isn't a country: pick
   the flag learners expect; a flag that isn't stripes needs its own small SVG in `Seal`.)
3. **Course pack** — `src/content/fr/` (units, items, placement bank, lexicon with closed-class
   words and minimal pairs, grammar points), exported in `src/content/index.ts`.
4. **Colour** — nothing to do: every course uses the brand terracotta (decisions.md 2026-11-21).
5. **Answer checker** — `src/lib/check.ts` has language-specific rules (Italian elision and accents,
   German umlauts, ß and verb endings). Add the new language's rules if it needs them; the shared
   typo/closed-class/minimal-pair logic already applies.
6. **Evals** — content audit and checker cases for the new language (`tests/evals/`).

Base (explanation) languages are separate: `BaseLang` in `schema.ts` (`es`, `en`) and the two
dictionaries in `src/lib/i18n.ts`.
