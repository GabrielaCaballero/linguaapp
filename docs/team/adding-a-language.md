# Adding a language

Linguina's screens list courses from one registry, so a new language (say French, `fr`) is mostly
content. Steps:

1. **Code** — add `"fr"` to `TARGET_LANGS` in `src/content/schema.ts`. TypeScript then points at
   every place that needs an entry for it.
2. **Registry** — add `fr` to `LANG_INFO` in `src/content/languages.ts`: native name ("Français"),
   seal ("FR"), speech locale ("fr-FR"), the one-line tag and the three "Can you already…?"
   questions in Spanish and English.
3. **Course pack** — `src/content/fr/` (units, items, placement bank, lexicon with closed-class
   words and minimal pairs, grammar points), exported in `src/content/index.ts`.
4. **Accent colour** — a `[data-lang="fr"]` line in `src/app/globals.css` (light, and both dark
   blocks). Without it the course uses the brand terracotta.
5. **Answer checker** — `src/lib/check.ts` has language-specific rules (Italian elision and accents,
   German umlauts, ß and verb endings). Add the new language's rules if it needs them; the shared
   typo/closed-class/minimal-pair logic already applies.
6. **Evals** — content audit and checker cases for the new language (`tests/evals/`).

Base (explanation) languages are separate: `BaseLang` in `schema.ts` (`es`, `en`) and the two
dictionaries in `src/lib/i18n.ts`.
