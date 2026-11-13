# 12 · Build report: content (Italian + German v2)

_Content author (curriculum + linguist roles), 2026-11-12. Branch `v2-redesign`. Files: `src/content/**` (schema.ts untouched)._

## What exists

| | Italian (`src/content/it/`) | German (`src/content/de/`) |
|---|---|---|
| U1 | Ciao! · 27 (A0) | Hallo! · 30 (A0) |
| U2 | Piacere! · 30 | Woher kommst du? · 25 |
| U3 | Numeri · 29 | Zahlen · 28 |
| U4 | Al bar · 26 | Familie · 27 |
| U5 | La famiglia · 26 | Essen & Trinken · 26 |
| U6 | Dove abiti? · 29 | Wohnen · 27 |
| **Unit items** | **167** | **163** |
| Placement | 30 (6 × A0/A1.1/A1.2/A2/B1; 2 vocab, 2 grammar, 1 listening, 1 reading per band; 1 false friend per band) | 30 (same mix) |
| Lexicon | closed class (articles, articulated prepositions, pronouns, possessives, essere/avere, accent words) + 24 minimal pairs | closed class (articles, kein/possessives, pronouns, prepositions + contractions, sein/haben) + 24 minimal pairs |

Units 2–6 are A1.1, U1 is A0. Every unit has 1–3 can-do statements in es + en, an icon, and a mix of words, phrases, sentences, 2–3 patterns (with a question), 1–4 sounds, listening and/or a dialogue, and bridge items.

- **Every item** has `gloss.es` + `gloss.en`, `spoken` (numbers in words), and tags. Words and phrases have ≥3 distractors. Nouns have gender + full plural with the article. German nouns are shown with their article.
- **Register** is tagged from U1 (tu/Lei, du/Sie pattern items, paired phrases). The learner's own sentences accept both genders (spagnolo/spagnola, sposato/sposata).
- **Errors** (`errors[]`) give targeted feedback on the classic mistakes: ho/sono for age, il zio / la zio, abito in Roma, la latte, mio vs il mio fratello, Ich heißt, Wie alt hast du?, Ich komme von Spanien, ein Tee, vier Euros, Guten Nacht, kein teuer.
- **"Almost" alts** follow the linguist: Ein Kaffee, bitte · Wieviel · dove è · Quanto è · Voglio · Puoi ripetere (register) · Was ist Ihre Telefonnummer?
- **Regional forms** live in `variants` (Grüezi, Grüß Gott, Moin, Servus, Auf Wiederschauen, Merci). Swiss `ss` is added to `accept` automatically for every German target containing ß.
- **Bridges:** es→it cognate patterns and false friends (burro, caldo, subito, gamba, salire, largo, fermare, camera, imbarazzato, topo, guardare, cugino/primo) sit in the unit where the word appears. en→de: bald, also, fast, Gift, bekommen, Rock, Art, plus the cognate shifts (t→z, d→t, th→d, p→pf, v→b, t→ss). es→de: die Karte. False friends useful to both groups (Handy, Chef, Kind, hell, Bad, latte, i parenti, camera) are normal word items with a note per language.
- **v1 migration:** 105 v1 ids are kept as `legacyId` (Italian 66 of 75, German 39 of 40). Dropped with no mapping (linguist "R"): Lavello/comune/citizenship items, Zurigo, Sono argentina, bisnonno/bisnonnonato, Grüezi.
- **MCQ keys** are written first and rotated deterministically by id (`rotateMcq` in `build.ts`), so the key isn't always option A even if the engine doesn't shuffle.
- `src/content/it.ts` and `de.ts` (v1) are deleted. Nothing outside `src/content` imports them.

Checks: `npx vitest run tests/content.test.ts` passes (10/10), and the full suite passes (161/161). `tsc` shows no errors in `src/content` (the 28 remaining errors are in the engine's in-progress files). A stricter private validator also passes: notes ≤2 sentences, no digits in `spoken`, no distractor that is also an accepted answer, placement `b` within ±0.4 of its band, all seeds exist, and no banned strings.

## Known gaps

- Units are 25–30 items, above the spec's ~15–25. Bridge items are es-only (for Italian) or en-only (for German), so a learner sees 2–5 fewer than the count.
- No `example` fields except one (der Bahnhof). No dialogue in de-u02/03/04/06 or it-u02/03/05 (listening items instead).
- Placement has no `kind: "type"` items (all MCQ, cloze or listen). Seeds exist only for A0 and A1.1 items, since the engine seeds lower bands by cefr anyway.
- Only one es→de bridge item (die Karte). The linguist's list (Rente, Mantel, Tafel, Kantine) is used only in placement (Rente) so far.
- U1 sound items lean on TTS. Minimal pairs (nonno/nono, palla/pala, schon/schön, Tier/Tür, Wein/Wien, Staat/Stadt) are flagged `slow`, but TTS may still blur them.
- `reviewed` is unset everywhere: no human sign-off yet.

## Please have a native speaker double-check

**Italian**
- Spanish pronunciation approximations in notes: «chínkue», «piátsa», «spañolo». Check that gli/sc/z notes are clear for non-Spanish Hispanic readers.
- Plural forms that are rare in practice: i latti, le acque. The plural «i maggi» was avoided by tagging *maggio* as `other`.
- Is *Come va?* a fine `accept` for "How are you? (informal)"? Should *Dove sta la stazione?* be "almost" (southern colloquial) rather than wrong?
- Bar realism: «Prego?» as the barista's opener, and «Tre euro e cinquanta». Gloss for *il tramezzino*: «sándwich triangular (de miga)».
- it-p-27 «Penso che Marco ___ ragione» expects *abbia*. Colloquial *ha* is not offered, but confirm the distractors (avrà, avesse avuto, avere) are unambiguous.

**German**
- Plural choices: die Wasser (vs Wässer), die Milchen (technical; tagged rarely-plural), die Kaffees, die Tees, die Käse.
- *Bitte schön / Bitte sehr* as accepted alternatives for *Bitte*. *Sehr erfreut* for *Freut mich*. *Bis später* as "almost" for *Bis bald*.
- Variants accepted as correct: Moin for *Guten Tag* (Moin is also used later in the day; that's fine), and Servus for *Tschüss*.
- ich/ach-Laut description in de-u04-s-ch (the Spanish «j» analogy and the English 'huge'), and the ä ≈ Spanish «e» claim.
- de-p-24 listing ("750 Euro warm") and de-p-30 (Filiale am Marktplatz): natural ad and notice wording?

**Both**
- Spanish glosses use neutral Latin-American Spanish with *tú*. Regional pairs are given in parentheses: apartamento (departamento), boleto (billete), celular (móvil), jugo (zumo), cruasán (medialuna), mantequilla (manteca), falda (pollera). Check that no voseo or peninsular forms slipped in.

## For the engine

- Import only `courses` from `@/content` (`Record<TargetLang, CoursePack>`). The schema types are also re-exported there (`export type *`).
- Sound items: `exercises: ["pick-spelling","listen"]`, with distractors as alternative spellings. Pattern, listening and dialogue items use `["question"]`. Bridge items use `["guess","recall"]` (cognate, with distractors) or `["guess","question"]` (false friend, with a Glossed MCQ).
- Plural-only German nouns and country/language names have `pos: "other"`. They have no `gender`, so skip the article drill for them.

## Content to B2 (2026-11-13, branch `claude/content-to-b2-f81709`)

Units 7–24 per language (map in `01-curriculum.md` §7). Same authoring helper and conventions as units 1–6.

| | Italian | German |
|---|---|---|
| A1.2 + A2 (u07–u12) | 153 items | 168 items |
| B1 (u13–u18) | 146 items | 145 items |
| B2 (u19–u24) | 144 items | 144 items |
| **Total units 1–24** | 610 | 620 |
| Placement | 36 (adds 6 B2 items, incl. false friend *intendere*) | 36 (adds 6 B2 items) |

- Higher levels lean on sentences with `accept` alternatives (both genders, *col/con il*, *per me / secondo me*, KI/KII variants marked "almost"), `errors` for classic mistakes (*ho andato*, *se avrei*, *weil ich bin*, *mit der Bus*, *für drei Jahre*), and single-word tile distractors.
- Register twins with "(formal)/(informal)" in the gloss (*Ti va / Le va un caffè?*, *Was meinst du / meinen Sie dazu?*).
- Bridges: es→it (*uscire, restare, albergo, officina, sindaco, ferie, romanzo, essere al verde…*), en→de (*wer, will, Brief, Rezept, eventuell, sensibel, spenden, aktuell, konsequent, Daten, Argument, sympathisch*), es→de (*Rathaus, Mantel, Firma, Rente, Gymnasium, Roman*).
- Every new item was read against the audit rubric and pinned in `tests/evals/content/audit-hashes.json`; fixes made during review are listed in `audit.ts`.
- `reviewed` stays unset: it means human native-speaker sign-off, which this is not.

**Please have a native speaker double-check:** Italian passato remoto/trapassato items and B2 idioms (*avere le mani bucate*, *essere al verde*); German Konjunktiv I items (de-u20) and the idioms in de-u24; Spanish regional pairs in new glosses (*bolsa (cartera)*, *agua de la llave (del grifo)*, *celular*).
