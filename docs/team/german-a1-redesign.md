# German A0–A2: slower, clearer (2026-11-27)

Owner, after trying the course: explanations show German with no meanings; exercises use words
never taught ("Wann ___ der Kurs an?" before "wann"); verbs appear before they're taught and
there are almost no conjugation tables (Italian has them and she loves them). Wanted: per unit,
first the new verbs, then how to conjugate them (fill-in tables), then harder use; grammar in
small steps like deutsch.info/grammar. A beginner-student agent and a teaching-expert agent
reviewed units 1–12; this is their joint plan.

## Already changed in the app
- Lessons introduce a unit's items in the order they're written in the file (no more "grammar
  first", no reshuffling). So the file order IS the teaching order.
- Rule-card tables: every course word can be tapped for its meaning; `pattern.meanings` (one per
  table row) and grammar-card `table.meanings` show each row's meaning; grammar-card `table.head`
  cells may be `{ es, en }` (grammar terms in the learner's language).
- `lexicon.names` for people/place names.
- Check: tests/evals/content/introduced.eval.ts — no word a learner must read (German in a
  question's «…», a rule table, a linked grammar card's table) before it was taught, unless the
  table gives row meanings.

## Content rules
- R1 Every German word in a question stem, rule table or grammar-card table is taught earlier (by
  an item's target/forms/table), closed-class, a name, a number, or glossed in the item's `annot`.
- R2 Verb → its table → sentences → harder use. A paradigm comes before sentences that use forms
  other than the ich form (greeting chunks excepted, with `annot`).
- R3 Every table has meanings (`meanings`) or only already-known words; header cells that are
  grammar terms are written per explanation language. Never Spanish and English mixed in a cell.
- R4 One rule per pattern; if the rule needs "and", split it.
- R5 Every verb item has `forms` (ich, du, er, wir, ihr, sie; from u10 also pp + aux).
- R6 At most 2 new tables close together.

## Micro-steps for verbs (deutsch.info order)
stem + endings → regular verbs → small stem fixes (-t/-d: du arbeitest; -s/-ß/-z: du heißt) →
vowel change a→ä, e→i, e→ie (du/er only) → sein, haben, wissen by heart → then separately: modal
verbs, separable verbs, imperative, Perfekt.

## Unit plan (ids never change; items never move between unit files; new items get new slugs)
- u01: heißen + tab (ich/du/Sie), sein + tab-sein-1 (ich bin, du bist, Sie sind), personal
  pronouns step 1 (ich, du, Sie) with meanings; chunks get `annot`.
- u02 becomes "how German verbs work": pronouns (all), kommen/wohnen/sprechen/lernen as words;
  pat-stamm (komm + en) → tab-kommen → tab-wohnen → tab-lernen → sentences → pat-vokalwechsel-1
  (e→i) + tab-sprechen → sentences → tab-sein (all persons) → pat-verb-zwei → pat-aus-der.
  Question words as items: wer, was, wo, woher, wie, wann; small words und, aber, auch, sehr,
  nicht, hier, heute, jetzt where first needed.
- u03: numbers in order (eins…zwölf before 13–19, 21–99); pat-ja-nein only with taught words.
- u04: haben + tab-haben before "Hast du…?"; family nouns before der/die/das and mein/meine.
- u05: trinken, essen (isst), möchten, kosten, nehmen as words + tables; ein/eine (nominative)
  before einen (accusative, explain subject vs object); Kuchen, Stück before the café dialogue.
- u06: nouns first (Zimmer, Küche, Tisch, Stuhl, Bett…), then plural in 3 steps, then compounds
  (with meanings of each part); finden + tab (du findest, -t/-d rule).
- u07: time words + wann first; arbeiten + tab; schlafen + tab (a→ä); kaufen/stehen before their
  separable forms; einkaufen → pat-trennbar-1 → tab-aufstehen → sentences → anfangen/fernsehen +
  tab-anfangen → only then pat-trennbar (question "Wann ___ der Film an?").
- u08: lesen + tab (e→ie); können, wollen, müssen each word + tab; then the verb bracket; gern only
  (lieber later).
- u09: gehen, fahren + tab (a→ä), nehmen + tab (e→i); dative after mit; imperative Sie first,
  du separately.
- u10: tab-war, tab-hatte first; participles in 3 steps; tab-perfekt-machen; haben vs sein.
- u11: body words; "Mir tut … weh" as a chunk; sollen, dürfen + tabs; weil last; bleiben, rauchen.
- u12: es regnet; reisen; comparative, then lieber; liegen/legen as words; Wo? + dative before
  Wohin? + accusative.
