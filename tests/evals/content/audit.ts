// Content-quality audit, graded by the QA lead acting as a native-level linguist (Italian,
// German; glosses in neutral Latin-American Spanish and international English).
//
// Scope of the review per item: target (spelling, accents, ß, elision), gender/article/plural,
// gloss.es and gloss.en (accuracy + naturalness, register marking), accept/errors/variants
// (linguistically right?), distractors (wrong but plausible, no give-aways, none arguably correct).
// Placement items: stem, options and key (one unambiguous answer, no word-for-word give-away).
// Notes, patterns' tables and dialogue turns are NOT in scope of this pass.
//
// Every unit item and every placement item of both courses was read (all > 60/language).
// Items not listed in FAILS passed every criterion. The audit is pinned to a content hash
// (audit-hashes.json): an item that changed after grading fails as STALE until re-graded.
export type Criterion = "translation" | "gender_article" | "accents" | "gloss_es" | "gloss_en" | "distractors" | "answer_key";

export interface Finding {
  fail: Criterion[];
  note: string;
}

export const AUDITOR = "QA lead (eval phase), 2026-11-12";

// Iteration 1: all 14 findings below were fixed in content and the items re-read and re-pinned
// (see 31-eval-log.md and decisions.md). Kept here as history:
// it-u02-spagnolo (distractor «spagnuolo» arguably correct) · it-u04-tramezzino (unnatural en gloss)
// it-p-27 (distractor «avrà» grammatical) · de-u01-wie-gehts (en gloss lacked "informal")
// de-u03-zehn/hundert/buchstabieren, de-u05-essen, de-u06-gross/hell/dunkel/teuer/billig
// (capitalised-noun give-away distractors) · de-p-30 (word-for-word answer key).
// 2026-11-13 · content-to-B2 phase 1: units 7–12 (it + de, ~300 items) and the 12 B2 placement items
// were read item by item against the same rubric before re-pinning. Fixed during review: it-u09-uovo
// distractor «l'ufo» → «l'ovile»; de-u11 dialogue option «a las catorce» → «a las dos»; de-p-32 key
// shortened so its length doesn't give it away.
// 2026-11-13 · phase 2: units 13–18 (it + de, B1) read item by item the same way before re-pinning.
// Fixed during review: it-u15-non-credo-che-venga en gloss no longer assumes "he"; de-u15 pat-wo-da
// es prompt used a Spanish/German mix → German stem in both prompts.
// 2026-11-13 · phase 3: units 19–24 (it + de, B2) read item by item the same way before re-pinning.
// Fixed during review: it-u20 tile distractor «notte.» (punctuation) → «notturno»; it-u21 rendersi
// conto gloss duplicated accorgersi's; it-u24 «cartera» → «bolsa (cartera)», «apetece» → «gustaría»
// (neutral Spanish), "Do you fancy" → "Would you like"; de-u21-br-daten was ambiguous (die Daten is
// also the plural of das Datum) → rewritten; de-u24 distractor «den Daumen drücken» is in Duden → replaced.
export const FAILS: Record<string, Finding> = {};
