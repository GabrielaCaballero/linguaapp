# 51 · Exercises: paradigm tables, typing-first, textbook drills

_Learning-experience designer (language pedagogy + mobile UX) · 2026-11-14. Design only, no code changed.
Reads with 03-ux, 05-learning-science, 10-spec §4, docs/product/02-prd + 05-design. The grammar
explanations these exercises link to are designed in a separate doc (the "explanations" teammate); this
doc only defines the hooks (`ruleId`)._

**Owner's asks.** (1) Not only example sentences: an exercise that shows the whole conjugation of
*kommen* (ich komme, du kommst …) and makes me fill it. (2) Make people type, because typing helps
memory. (3) Grammar taught like a textbook, so exercises should follow the explanation.

**Short answer.** Add one new item type (`paradigm`) and three typed exercises (`table`, `transform`,
`cloze`), move the mode ladder so typing starts after one night instead of after three days, and add
two smaller textbook drills (`fix`, `build`) plus guided writing prompts for the essay feature. Every
change is additive to the frozen v2.0 schema and needs a decisions.md entry (§5.4).

---

## 1. What exists today (and what it does not cover)

| Piece | Today | Gap for the owner's asks |
|---|---|---|
| `schema.ts` `Exercise` | guess, recognize, recall, tiles, listen, article, pick-spelling, question, speak | No multi-answer exercise; nothing asks for a *form* of a known word |
| `Item.pattern.table` | `string[][]` shown as a static table (e.g. de-u14 Präteritum: machen/gehen/kommen/können) | Read-only. Nothing is ever retrieved from it |
| `Item.forms` | `{ ich: "habe", du: "hast" … }` on some verbs | Never tested |
| `session.ts` ladder | recognize → tiles/article/listen → recall; typing only at stability ≥ 3 d | For a new word, first typing comes ~1–2 weeks after first sight |
| `check.ts` | One answer string vs. one item; strict closed-class words, German endings never "typos", accent/umlaut = almost, contraction rules | One result per answer, only the first wrong token in `detail`; no per-cell or diff output |
| `Recall` UI | One input + accent bar (à è é ì ò ù / ä ö ü ß Ä Ö Ü) | Only one field |

The science doc (05 §1, #1 retrieval, #5 generation effect) already argues for producing over
recognising. The owner's request is the same idea applied to grammar.

---

## 2. Paradigm (table) exercises

### 2.1 What a paradigm is in content

A **paradigm item** is one small table the learner can fill in about a minute: one verb in one tense,
one article set, one preposition row. Big grids (German 4 cases × 4 genders = 16 cells, Italian
5 prepositions × 7 articles = 35 cells) are **never one exercise**. They are split into *slices*,
each its own item, with the full grid shown only as a reference card.

| Paradigm | Rows × cells | One item = |
|---|---|---|
| de verb, present (*kommen*) | ich · du · er/sie/es · wir · ihr · sie/Sie → 6 cells | whole table |
| it verb, present (*venire*) | io · tu · lui/lei · noi · voi · loro → 6 cells | whole table |
| de Perfekt (*kommen*) | ich bin gekommen … → 6 two-word cells, or 2 cells (aux + Partizip) | whole table, or "key forms" item |
| de definite article | Nom/Akk/Dat/Gen × m/f/n/pl | **one case row** (4 cells) or **one gender column** (4 cells) |
| it articulated preposition | di/a/da/in/su × il/lo/la/l'/i/gli/le | **one preposition row** (7 cells: del dello della dell' dei degli delle) |
| it/de possessives, adjective endings (B1) | varies | one row or column, ≤ 7 cells |

Rule: **≤ 7 cells per item**, so it fits on a 375 px screen with the keyboard up (§4).

### 2.2 Progressive reveal (scaffolding fades out)

A table is learned in four steps. The step is stored per item (`scaffold` 0–3, §5) and goes up only
after a clean fill:

| Step | What the learner sees | What they type | When |
|---|---|---|---|
| 0 · Study | Full table, endings coloured (komm**e**, komm**st**, komm**t**), audio per row, one-line rule from the explanation | Nothing (ungraded, like `guess`) | Intro task |
| 1 · Endings | Stems given: `komm__` | Only the ending (`e`, `st`, `t` …) | Follow-up 3–6 tasks later, same session |
| 2 · Some cells | 2–3 cells given (the regular ones), the others blank | The full form | Next review(s) |
| 3 · Blank | Pronouns only | Every cell | Once step 2 has been clean once |

Mature cards (stability ≥ 21 d) mostly get a **slice**: 2–3 cells, chosen by the weakest-cell rule
(§2.4), with the rest shown filled. This keeps a review short and still covers the whole table over
time.

Irregular forms are highlighted in step 0 (e.g. *du* **fährst**, *er* **fährt**; *io* **vengo**,
*loro* **vengono**). The study screen also has **"Hear it"**: TTS reads the column top to bottom, which
is the chant students use in class.

### 2.3 Checking and partial credit, per cell

Each cell is checked with the existing token rules (`compareToken`), plus:

- **Endings are grammar, not typos** (already true for German via `endingOnly`). *kommt* for *kommst* is
  wrong, never "almost". Same for Italian: *vieni*/*viene* are different persons, so Levenshtein fuzz is
  **off** for paradigm cells shorter than 8 letters.
- **Cross-cell confusion.** If the answer equals *another cell of the same table*, the verdict is
  wrong with reason `other-cell` and a specific note: "*kommt* is the er/sie/es form. For du: komm**st**."
  This is the most frequent learner error in tables and the most useful thing to name.
- **Accents / umlauts / ß** = almost (score 0.9), same as today. *ss* for *ß* = correct with a note.
- **Contractions** (Italian rows): *di il* typed for *del* is wrong (`contraction`, as today).
  *dell* without apostrophe = almost (`elision`).
- **Accepted variants per cell**: e.g. *er/sie/es* row accepts the form with or without the pronoun
  typed; *Sie* row accepts lower-case *sie* only in a "sie (they)" row.

**Table score** = mean of the tested cells' scores; a cell where the learner used a hint (§3.4) counts
at most 0.5, a revealed cell 0.

**FSRS rating** from the table score (only the cells that were blank count):

| Score | Rating | Meaning |
|---|---|---|
| 1.0, no hints | Good (Easy only if confidence "sure" and ≥ 2nd clean fill) | Knows it |
| ≥ 0.8 (e.g. 1 wrong of 6, or accents) | Hard | Nearly there |
| < 0.8 | Again | Requeue once, as a **slice of just the missed cells** |

### 2.4 How tables are scheduled in FSRS

Options considered:

| Option | Pro | Con | Decision |
|---|---|---|---|
| One card per cell | Precise | 6–35 cards per verb → review pile explodes; sibling cells interfere; sessions fill with near-duplicates | No |
| One card per row ("du-forms of all verbs") | Matches how errors cluster | Not how textbooks or the owner think; hard to author | No |
| **One card per paradigm item + per-cell stats** | One schedule, sane pile size, matches "the kommen table" | Needs a small extra store | **Yes** |

So: **one FSRS card per paradigm item** (as for every other item). Next to it, a tiny per-cell record
`cells: Record<cellKey, { seen, wrong, lastWrong }>` drives (a) which cells a slice tests (weakest
first, plus one random cell so a strong cell is still checked sometimes), and (b) which rule to explain.
Cell stats never create cards and never touch other items.

The existing **word item** (*kommen* = "to come") keeps its own card; a paradigm item links to it with
`lemmaId`, but answering the table does **not** review the word card (no double counting).

### 2.5 Fit in a 5-minute session

A full 6-cell table takes ~45–60 s typed; a typical task ~13 s (`TASKS_PER_MIN` 4.4). So a table costs
about **4 task slots**. Session rules:

- Each task gets a `cost` (in task units): table full = 4, table slice = 2, transform/cloze/dictation = 1.5,
  everything else = 1. The builder fills by cost, not by count (`target` stays minutes × 4.4).
- **At most one full table and two slices per 5-minute chunk.** A new paradigm counts toward
  the new-item budget (`newBudget`) as **2** new items.
- Tables are never the first task of a session (warm up with two quick ones first) and never back to back.
- After two weeks of real data, replace the fixed `cost` with the learner's median `ms` per mode.

### 2.6 Mistakes → grammar explanations

Each cell may carry a `ruleId` (e.g. `de-present-stem-change`, `de-present-du-st`, `it-prep-art-elision`)
that points to a section of the explanation (written by the explanations teammate). After the check:

- Show **one** "Why?" link: the rule with the most wrong cells in this attempt (ties: the earliest row).
  Never one link per cell: one rule, two sentences, then Continue (03-ux §2 "show, don't lecture").
- Automatic error tags, no content needed: `other-cell` (named person form), `stem-change-missed`
  (typed the regular stem where the cell is irregular: *fahrst* for *fährst*, *veno* for *vengo*),
  `accent`, `umlaut`, `contraction`. Each maps to a default rule id per language.
- On any typed answer elsewhere in the app that contains a verb with a paradigm, feedback gets a
  quiet **"All forms of kommen ›"** link that opens the reference table sheet. This also answers the
  owner's "show me the entire table" literally.

---

## 3. Typing-first

### 3.1 New mode ladder

Today: tier 0 recognize → tier 1 tiles/article/listen → tier 2 recall at stability ≥ 3 d.
Proposed:

| Tier | Modes | Reached when |
|---|---|---|
| 0 · Recognise | recognize, pick-spelling, question | Only: follow-up of sentences ≥ 5 words, sound items before the first night, controller shift −1, listening/dialogue/bridge items |
| 1 · Assisted typing | recall **with first-letter hint shown**, cloze with word bank, tiles, article, listen-and-pick | Follow-up of a new word/phrase (same session), stability < 1 d |
| 2 · Typing | recall, cloze (lemma given), dictation, transform, table | Stability ≥ 1 d (one night) |

Net effect: a new word is typed (with its first letter shown) in the **same session** it is introduced,
and fully typed after one night, not after three days. Recognition stays where it really helps:
comprehension questions, long sentences on first meeting, sound discrimination, and bad days.

The 80–85 % controller (05 §E2) still runs: if typing drops accuracy below 70 %, `shift = −1` pulls a
task one tier down for that session. Expectation: first-week accuracy drops ~5–10 pp; the controller
plus hints keeps it in band (measured in §6).

### 3.2 Typed sentence production

| Exercise | Prompt | Learner types | Content source |
|---|---|---|---|
| **recall** (exists) | Meaning in es/en | Target word/phrase/sentence | Existing items |
| **cloze** (new) | `Ich ___ aus Spanien. (kommen)` + gloss of the sentence | Only the gap | New `cloze` field; can be generated from `example` + `forms` |
| **dictate** (new; `listen` typed by default at tier 2) | Audio, ▶ again, 🐢 slow | Whole phrase | Existing `spoken`; needs a voice (skipped otherwise) |
| **transform** (new) | A target-language sentence + an instruction chip | The changed sentence | New `transforms` field |

Transform kinds (one chip label each, in the explain-in language):
present → Perfekt / passato prossimo · singular → plural · du → Sie / tu → Lei · statement → question ·
affirmative → negative · add a modal (*können*) · direct → indirect speech (B2, the u20 tables already
contain these pairs) · Präsens → Präteritum (B1, u14).

Transforms are the textbook drill that best trains grammar in context: the learner already has the
words, so all effort goes into the form.

### 3.3 What the checker must support

1. **Multi-cell**: `checkCells(answers, paradigm)` → one `CheckResult` per cell + table score.
   Implementation: each cell is checked as a mini-item with its own `target`/`accept`/`errors`.
2. **Gap-only check (cloze)**: compare only the gap but with its neighbours, so elision and
   contraction across the gap work (*dell'*+*amico*, *zum*/*zu dem*).
3. **Multi-word with a diff**: today only the first wrong token is reported. Add
   `diff?: { got: string; want: string; v: "ok" | "almost" | "wrong" }[]` so feedback can underline
   every wrong word in a transform (§4.2).
4. **Accepted variants**: per cell and per transform (`accept`, `errors` reuse the `Alt`/`KnownError`
   shapes). Transforms often have two right answers (*Ich bin gestern gekommen* / *Gestern bin ich
   gekommen*): authors list both; the word-order rule stays "wrong unless listed".
5. **Fuzz off for short inflected cells** (§2.3) and **other-cell detection**.
6. AI tutor (GR-3) unchanged: may raise a typed transform by one step, never a table cell (cells are
   closed answers; the local checker is the judge).

### 3.4 Keeping anxiety low

- **Hint chip** next to Check: 1st tap shows the first letter(s) of each missing word (*k…*);
  2nd tap opens the mini reference table (for verbs/articles) or the lemma. A hinted answer is capped at
  **Hard**, never Again: hints are allowed, not punished.
- **"I don't know"** (exists in placement; add here): reveals the answer, rating Again, then asks the
  learner to **type it once** (copy-typing). Low stakes, and it still costs one retrieval-like action.
- No timer on typed tasks. No red flash: wrong cells get a soft underline and the right form below.
- `autoCorrect/autoCapitalize/spellCheck` stay off (they "fix" *komme* to *Komme* or to Spanish words).
- A setting **"Typing: more / balanced"** (default balanced) for people practising one-handed on a
  tram; "balanced" swaps 1 in 3 typing tasks for tiles. This respects autonomy (05 §E12).

---

## 4. Wireframes (375 × 667, keyboard up ≈ 260 px)

### 4.1 Table exercise — fill state (step 3, keyboard up)

```
┌───────────────────────────────────┐
│ ✕   ▓▓▓▓▓▓▓▓░░░░░░░░    7/22       │
│ CONJUGATE · Präsens               │  eyebrow
│ kommen  "to come"          ▶      │  lemma + gloss + audio
├───────────────────────────────────┤
│ ich        │ komme              ✓? │  rows 44 px; label col 96 px
│ du         │ kommst▌               │  ← active cell, accent border
│ er/sie/es  │                       │
│ wir        │                       │
│ ihr        │                       │
│ sie / Sie  │                       │
├───────────────────────────────────┤
│ [ä][ö][ü][ß][Ä][Ö][Ü]   💡Hint     │  accent bar pinned above keyboard
│ [■ Check                        ]  │  enabled when ≥ 1 cell filled
╞═══════════════ keyboard ══════════╡  return key = "next" → next cell;
└───────────────────────────────────┘  last cell = "done" → Check
```

- Each cell is an `<input lang="de" enterKeyHint="next">`, font ≥ 16 px (stops iOS zoom). The active
  cell scrolls into the visible area above the keyboard (`visualViewport` resize).
- Empty cells at Check = wrong (but "Check" asks once: "3 empty — check anyway?" inline, not a dialog).
- Step 1 variant: the input sits inside the word: `komm[__]`, with a narrow input for the ending.

### 4.2 Table exercise — feedback state

```
┌───────────────────────────────────┐
│ kommen · Präsens                  │
├───────────────────────────────────┤
│ ich        │ komme              ✓  │  green tick, no colour flood
│ du         │ kommt              ✗  │  soft red underline
│            │ → komm**st**          │  right form, ending bold
│ er/sie/es  │ kommt              ✓  │
│ wir        │ kommen             ✓  │
│ ihr        │ kommt              ✓  │
│ sie / Sie  │ komen              ✗  │
│            │ → kommen              │
├───────────────────────────────────┤
│ 4 of 6 ✓ · "kommt" is the er/sie/ │  one-line note: the cross-cell error
│ es form. du always ends in -st.   │
│ Why? du-forms ›                   │  ONE rule link (most-missed rule)
│ [■ Continue                     ]  │  missed cells come back in 3 tasks
└───────────────────────────────────┘
```

All-correct state: the six ticks pop in sequence (40 ms stagger; reduced-motion = static), one haptic,
"Solid. See you in 3 days." Almost state (accent only): amber tilde ~ and "Right form, mind the ä".

### 4.3 Transform drill — prompt, almost, wrong

```
 Prompt                              Almost (umlaut)                    Wrong (diff)
┌───────────────────────────────┐  ┌───────────────────────────────┐  ┌───────────────────────────────┐
│ TRANSFORM                     │  │ ~ Almost                      │  │ Not quite                     │
│ Ich höre Musik.         ▶     │  │ You: Ich habe Musik gehort    │  │ You: Ich bin Musik gehört     │
│ ┌───────────────────────────┐ │  │                     ‾‾‾‾‾‾    │  │          ‾‾‾                  │
│ │ → Perfekt                 │ │  │ Ich habe Musik gehört.        │  │ Ich habe Musik gehört.        │
│ └───────────────────────────┘ │  │ Mind the ö. Counts as right   │  │ hören has an object → haben.  │
│ ┌───────────────────────────┐ │  │ (Hard).                       │  │ Why? sein or haben ›          │
│ │ Ich habe▌                 │ │  │                               │  │                               │
│ └───────────────────────────┘ │  │                               │  │                               │
│ [ä][ö][ü][ß]       💡Hint     │  │                               │  │                               │
│ [■ Check                   ]  │  │ [■ Continue                ]  │  │ [■ Continue                ]  │
└───────────────────────────────┘  └───────────────────────────────┘  └───────────────────────────────┘
```

- The source sentence stays visible above the input (the learner should copy most words, not recall
  them: the drill tests the form).
- Hint 1 = first letters of the changed words only (`Ich h… Musik g…`), hint 2 = the rule card.
- Wrong state underlines **every** differing word (needs `diff`, §3.3) and gives one rule link.

---

## 5. Content schema changes (additive, backward compatible)

### 5.1 `schema.ts`

```ts
export type ItemType = … | "paradigm";          // NEW: a table to fill (§2)

export type Exercise = …
  | "table"      // fill a paradigm (or a slice of it), one input per cell
  | "cloze"      // type the gap in a sentence; optional lemma hint
  | "transform"  // change a given sentence by an instruction
  | "dictate"    // audio → type (listen stays "pick or type")
  | "fix"        // tap the wrong word, then type the correction
  | "build"      // given words/lemmas → type the full sentence
  | "write";     // guided writing prompt → essay feature (ungraded locally)

export interface Cell {
  key: string;                 // stable: "du", "akk-m", "di+il"
  label: Glossed | string;     // row label (pronoun, "Akk · m", "di + il")
  form: string;                // canonical answer
  accept?: Alt[]; errors?: KnownError[];
  given?: boolean;             // always shown filled (e.g. the infinitive row)
  irregular?: boolean;         // highlighted in study step
  ruleId?: string;             // → explanation section
}
export interface Paradigm {
  kind: "conjugation" | "declension" | "article" | "contraction" | "other";
  lemmaId?: string;            // link to the word item (no shared review)
  title: Glossed;              // "kommen · Präsens"
  cells: Cell[];               // ≤ 7, in display order
  stemHint?: Record<string, string>; // step 1: { du: "komm" }
  reference?: string[][];      // full grid for the read-only sheet (may be bigger than cells)
}
export interface Transform {
  instruction: Glossed;        // "→ Perfekt"
  from: string; to: string;
  accept?: Alt[]; errors?: KnownError[]; ruleId?: string;
}
export interface Cloze { text: string; answer: string; lemma?: string; accept?: Alt[]; errors?: KnownError[]; ruleId?: string }
export interface Fix { wrong: string; right: string; at: number; feedback: PerBase; ruleId?: string } // at = token index
export interface WritePrompt { prompt: Glossed; use: string[]; minSentences: number } // use = structures to try

// on Item, all optional:
paradigm?: Paradigm; transforms?: Transform[]; cloze?: Cloze[]; fix?: Fix[];
build?: { words: string[] };  // "gestern / ich / ins Kino / gehen"
write?: WritePrompt;          // only on a unit's last item, or a dedicated item
```

Old content stays valid (every new field is optional, the new `ItemType` is used only by new items).
Old `pattern.table` keeps rendering as today; authors may *also* add a `paradigm` to the same item.

### 5.2 Engine-side (`model.ts`, not frozen but still worth noting)

- `Mode` gains `table | cloze | transform | dictate | fix | build`.
- `CardV2` gains optional `scaffold?: 0|1|2|3` and `cells?: Record<string, { seen: number; wrong: number; lastWrong?: number }>`.
- `ReviewLog` gains optional `hints?: number`, `cells?: [ok: number, tested: number]`, `arm?: "type" | "ladder"` (§6).
  Older app versions ignore unknown fields; `mergeDB` must keep them (check the sync merge).

### 5.3 Authoring cost

~30 high-frequency verbs per language for A1–A2 (sein, haben, kommen, gehen, fahren, essen, können,
müssen, wollen … / essere, avere, venire, andare, fare, potere, dovere, volere …), present first, then
Perfekt/passato prossimo, then Präteritum/imperfetto at B1 — about 90 paradigm items per language,
plus 8 article/preposition slices each. `forms` already exists on some verbs and conjugation is
regular for most cells, so a build script can draft cells and the linguist reviews (`reviewed`).
Transforms: 2 per existing sentence item for 1 in 4 sentences (~150 per language), drafted from
existing `example` sentences.

### 5.4 decisions.md

`schema.ts` says "FROZEN · change only via decisions.md". Needed entry, e.g.:
`2026-11-xx · content+engine · Schema change: ItemType "paradigm"; Exercise table/cloze/transform/
dictate/fix/build/write; optional Item fields paradigm/transforms/cloze/fix/build/write · owner asked for
conjugation tables and more typing; all fields optional, v2.0 content unchanged.` Plus one line each for
the ladder thresholds (§3.1) and the "one card per paradigm" rule (§2.4).

---

## 6. Other textbook-style exercises

| Exercise | How it works on a phone | Graded | When in the ladder |
|---|---|---|---|
| **fix** (find the mistake) | Sentence with exactly one error. Step 1: tap the wrong word (big tap targets, no typing). Step 2: type the correction. Score: right word tapped + right fix = 1; right word, wrong fix = 0.5 (Hard). Errors come from real learner errors (`errors` lists, *ho andato*, *ich habe gegangen*). | Yes | Tier 2, only for rules the learner has seen ≥ 3 times |
| **build** (sentence from given words) | `gestern · ich · ins Kino · gehen` + chip "Perfekt". Learner types the full sentence (word order + form). Different from tiles: words are lemmas, not the final forms. | Yes | Tier 2, B1+ word order (verb second, subordinate clause verb last) |
| **write** (guided writing) | At the end of a unit, optional: "Write 3 sentences about last weekend. Use: the Perfekt, *gestern*, *dann*." Local checks only (≥ 3 sentences, at least one Perfekt pattern); the text is handed to the **essay feature** (other teammate) for feedback. Not an FSRS card. | No (essay feature may comment) | Unit end, offered once, skippable |
| Matching pairs (person ↔ form) | Not added: recognition, low value once tables exist | — | — |

---

## 7. Measurement — do typing and tables help?

The real question is **retention after a delay**, not session accuracy (05 §5: performance in practice
is a bad guide to learning).

**Built-in experiment (within each learner, so it works with few users).** When an item is
introduced, it is randomly assigned `arm: "type"` (new ladder) or `arm: "ladder"` (old ladder), 50/50,
stored on the card and in each `ReviewLog`. Same learner, same session, same unit, so differences in
motivation cancel out. Run for 4 weeks, then switch everyone to the winner.

| Metric | Definition | Success threshold |
|---|---|---|
| 7-day retention | % correct on the first review with `gap ≥ 7` (**always tested in a typed mode** for both arms, so the test is fair) | type arm ≥ ladder arm + 5 pp |
| 30-day retention | same with `gap ≥ 30` | type ≥ ladder (no loss) |
| Table transfer | Accuracy on **unseen** regular verbs of the same class (*wohnen* after learning *kommen*/*machen*), probed once per unit | ≥ 70 % by end of A1.2 |
| Cell accuracy over time | per `ruleId`: wrong cells / tested cells, week by week | falling |
| Time cost | median `ms` per task by mode; tasks per 5 min | ≥ 15 tasks / 5 min |
| Anxiety proxies | hint use, "I don't know" rate, abandoning a session mid-table, sessions/week | abandonment ≤ +2 pp vs. before; weekly active days unchanged |

**On-device stats for the learner** (Progress screen, no new jargon): "Forms you can produce: 214"
(cells correct in a typed table after ≥ 1 night), and per verb a small 6-dot strip (one dot per person)
that fills as cells become solid. These come from `cells` stats only.

**Caveat:** with the owner's friends (~10–20 users), the item-level comparison has enough reviews
for a rough answer in 4–6 weeks, not a publishable one. The tester export (decisions 2026-11-13) should
add the arm, hints and cells fields so the lead can compute it.

---

## 8. Phased plan and effort

Effort: engineer-days (E) and content/linguist-days (C), for one person each.

| Phase | Scope | E | C |
|---|---|---|---|
| **P0 · Typing earlier** | New ladder thresholds (§3.1), first-letter hint in tier 1, hint chip, "I don't know" + copy-typing, dictation typed at tier 2, `arm` field + logging, "Typing: more / balanced" setting, decisions.md entry | 3 | 0 |
| **P1 · Conjugation tables** | `paradigm` type + `Cell` shape, `table` exercise UI (fill, steps 0–3, feedback, slices), `checkCells` + `other-cell` + fuzz-off, per-cell stats, cost-based session filling, reference sheet + "All forms of …" link, ruleId → explanation link | 6–8 | 5 (30 verbs × 2 langs, present + Perfekt/passato, drafted by script, reviewed) |
| **P2 · Cloze + transform** | `cloze` (gap check with neighbours) and `transform` exercises, `diff` in CheckResult, multi-word underline feedback | 4 | 4 (~150 transforms + cloze per language) |
| **P3 · Articles, prepositions, fix, build** | Declension/article slices, Italian articulated-preposition rows, `fix` (tap + type), `build` | 4 | 3 |
| **P4 · Guided writing** | `write` prompts at unit end, hand-off to the essay feature | 1 (+ essay feature) | 1 |
| **Measure** | 4-week arm comparison after P1, decide ladder for everyone | 1 | — |

Order: P0 ships alone first (cheap, starts the measurement clock). P1 is the owner's headline ask.
Evals: add checker cases for every cell rule (endings, other-cell, contractions, ß/ss) before P1 merges,
in the same style as the existing eval suite.

---

## 9. Risks

1. **Sessions get slower.** Typing is ~2–3× slower than tapping; fewer reps per 5 minutes. Mitigation:
   cost-based filling, at most one full table per chunk, measure tasks/5 min.
2. **Frustration / drop-off** in week 1 as accuracy dips. Mitigation: hints capped at Hard, controller,
   "balanced" setting, watch abandonment.
3. **Checker false "wrong"** on a correct variant (e.g. *er/sie/es* row typed with pronoun, regional
   forms like Swiss *ss*). Mitigation: per-cell `accept`, "I was right" override (exists), `alt_candidate`
   events reviewed by the linguist.
4. **Phone keyboard layout**: the keyboard hides most of a table; iOS PWA `visualViewport` quirks.
   Mitigation: ≤ 7 cells, 44 px rows, scroll active cell into view, test on iPhone SE size.
5. **Content cost** (~100 paradigms + ~150 transforms per language) and review load on the linguist.
   Mitigation: script-drafted from `forms` and regular rules; review only irregular cells closely.
6. **Schema is frozen**: every change needs a decisions.md line; sync merge must keep new log fields.
7. **Over-weighting grammar** at the cost of vocabulary and listening (Nation's strands). Mitigation:
   paradigms count as 2 new items; cap tables per chunk.
