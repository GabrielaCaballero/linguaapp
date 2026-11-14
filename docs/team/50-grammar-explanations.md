# 50 · Grammar explanations — "explain it like the book does"

_Applied linguist / textbook author (Italian, German for Spanish- and English-speaking adults). 2026-11-14. Design only: no code changed._

**Owner's request:** grammar should be *explained*, the way a good textbook explains it, and not only memorised Duolingo-style. Example: why *meine Brüder* and not *meinen Brüder*?

**Short answer:** grammar points become their own content type, with a rule, a full paradigm, worked examples, mistakes typical of each base language, and a contrast with Spanish or English. Every pattern item and sentence links to one. When a learner makes a mistake, the app works out which grammar point and which cell of its table the mistake touches, **deterministically, from annotations written by humans**. It then shows one sentence of *why*, with the full rule one tap away. The LLM tutor stays an optional extra and is never the source of the explanation.

> **Correction to the brief's sample text.** "*Brüder* is the subject → nominative → *meine*" is right only when *Brüder* is the subject (*Das sind meine Brüder*). In the unit sentence *Ich habe … zwei Brüder* / *Ich besuche meine Brüder*, *Brüder* is the **accusative** object, and the form is still *meine*. A textbook would say: **in the plural, nominative and accusative are the same (meine); *meinen* is accusative masculine *singular* (meinen Bruder) or dative plural (mit meinen Brüdern).** This is why the explanation has to come from a parse of the actual sentence and not from one template per rule (§3).

---

## 1. Grammar reference model

### 1.1 What exists today

- `pattern` items (`src/content/schema.ts`) carry `pattern: { rule: Glossed; table?: string[][] }` plus one MCQ `question`. There are about 70 per language (3 per unit), for example `de-u04-pat-mein-meine` and `it-u10-pat-pp-essere`.
- The rules are good one-liners, but each one is tied to a single item. They have no examples with glosses, no "why", and no link from the *other* items that use the structure. A wrong sentence such as `de-u04-ich-habe-schwester` cannot reach the rule.
- `errors[]` gives targeted feedback for exact wrong strings (e.g. *Sabato ho andato al mare*). That works but doesn't scale, and the feedback is not linked to any rule.
- `check.ts` returns surface reasons (`typo`, `umlaut`, `contraction`, `order`, `register`…). For German endings it returns a bare `wrong` (`endingOnly` → `"wrong"`), so the grammatical cause of the error is lost.
- `Feedback.tsx` shows one line: `check.feedback` → reason note → `item.note`. An ⓘ button expands to the full note + example. There is also an optional LLM "Why?" (`src/lib/llm/tutor.ts`).

### 1.2 New first-class type: `GrammarPoint`

The type lives in `src/content/{it,de}/grammar/*.ts` (one file per CEFR band) and is exported in `CoursePack.grammar`. **It is not an `Item` and never enters the SRS.** Items practise grammar points; grammar points get explained.

```ts
export interface GrammarPoint {
  id: string;                 // `${lang}-g-${slug}`, e.g. "de-g-possessive", stable forever
  lang: TargetLang;
  cefr: Cefr;
  units: string[];            // first = where it is taught; rest = where it is revisited (spiral, 01-curriculum §1.3)
  title: { target?: string } & Glossed;          // { target: "mein, meine, meinen …", es: "Posesivos y caso", en: "Possessives and case" }
  terms: string[];            // glossary keys used (§5.3): ["nominativ","akkusativ","dativ"]
  summary: PerBase;           // the rule card line, ≤ 25 words (§5.1)
  rule: PerBase;              // textbook statement, ≤ 80 words
  steps?: PerBase[];          // decision procedure, ≤ 5 steps: "1. Find the noun. 2. Singular or plural? 3. Its job in the sentence → case. 4. Read the table."
  tables: GTable[];           // full paradigm(s); first table is the "mini table" on the rule card
  paradigm?: Paradigm;        // machine-readable copy of the main table, used by diagnosers (§3)
  examples: GExample[];       // 3–6, each with gloss + optional parse
  pitfalls: Pitfall[];        // common mistakes, tagged by base language
  contrast?: PerBase;         // vs Spanish (es) / English (en), ≤ 40 words; written separately, not translated
  diagnoses: DiagTemplate[];  // the error tags this point can explain (§3.2)
  seeAlso?: string[];         // other GrammarPoint ids
  sources: string[];          // reference grammars consulted (§5.5); our own wording, never copied
  reviewed?: { by: string; date: string };
}

interface GTable {
  caption: Glossed;
  cols: string[];                                  // ["", "m", "n", "f", "pl"]
  rows: { head: string; cells: string[]; keys?: string[] }[]; // keys = feature key per cell ("akk.m") → cell highlighting
}
interface Paradigm { lemma: string; forms: Record<string, string> }  // { "nom.m": "mein", "akk.m": "meinen", "dat.pl": "meinen", … }
interface GExample { target: string; gloss: Glossed; parse?: Glossed }  // parse: "Brüder = plural, accusative (object of besuchen)"
interface Pitfall { for: BaseLang | "all"; wrong: string; right: string; why: PerBase }
interface DiagTemplate { tag: string; explain: PerBase }  // explain uses {got} {want} {gotF} {wantF} {role} {noun}
```

**Example (abridged): `de-g-possessive`**

| Field | en | es |
|---|---|---|
| summary | *mein* takes the same endings as *ein*: the ending shows the case and gender of the noun. In the plural it works like *die*. | *mein* lleva las mismas terminaciones que *ein*: la terminación indica el caso y el género del sustantivo. En plural funciona como *die*. |
| steps | 1 Find the noun. 2 Singular or plural? 3 Gender (der/die/das). 4 What is it doing: subject → Nom, direct object → Akk, after *mit/zu/von…* → Dat. 5 Read the cell. | 1 Busca el sustantivo. 2 ¿Singular o plural? 3 Género. 4 ¿Qué función cumple? sujeto → Nom; complemento directo → Akk; tras *mit/zu/von…* → Dat. 5 Lee la casilla. |
| contrast | English *my* never changes; German *mein* agrees with the **thing owned**, not the owner. | Como en español «mi/mis», concuerda con lo poseído, pero además cambia según el caso, cosa que el español no hace. |
| pitfall (es) | — | *mein Mutter* ✗ → *meine Mutter*: el género alemán no coincide siempre con el español (*die Sonne* / el sol). |

Main table (keys enable highlighting):

| | m | n | f | pl |
|---|---|---|---|---|
| Nom | mein | mein | meine | meine |
| Akk | **meinen** | mein | meine | meine |
| Dat | meinem | meinem | meiner | meinen |
| Gen | meines | meines | meiner | meiner |

### 1.3 How grammar points link to content

Every new content field is **optional**, which keeps the change additive. Because the contract is frozen, it needs a `decisions.md` entry and a version bump to 2.1.

| Field (new) | On | Purpose |
|---|---|---|
| `grammar?: string[]` | `Item` | grammar points this item practises. **Required for every `pattern` item** (eval §5.6), and recommended for every sentence item that uses a non-trivial structure. |
| `slots?: Slot[]` | `Item` | the parse of the target sentence at the tokens that matter: `{ tok: "meine", gp: "de-g-possessive", f: "akk.pl", head: "Brüder", role: { es: "complemento directo de besuchen", en: "object of besuchen" } }`. This annotation turns a generic rule into *this sentence's* why. |
| `diag?: { gp: string; tag: string }` | `KnownError`, `Alt` | links authored feedback to a grammar point, so the "Rule" link and stats work |
| `why?: (string \| null)[]` | `Mcq` | one diag tag per option (`null` for the right answer). Wrong picks in pattern questions get explained instead of just marked wrong. |
| `grammar: GrammarPoint[]` | `CoursePack` | the reference |
| `separable`, `ccTriggers`, `auxEssere` | `Lexicon` | small closed lists for diagnosers (§3.3): separable verbs (`["anrufen","an","rufen"]`), congiuntivo triggers, essere-verbs |

`Unit` needs no change: the unit's grammar list is derived as the union of its items' `grammar`, plus every GP whose `units[0]` is that unit.

---

## 2. Where explanations appear

Principle (03-ux, 05-learning-science): **explanations one tap away, never a wall of text.** There are three depths, and each is reached by one tap from the one before.

| Depth | Surface | Shows | Budget |
|---|---|---|---|
| 1 | **Rule card** (teach card after the guess) / **why line** (feedback sheet) | `summary` or the diagnosed `explain` line | ≤ 25 / ≤ 30 words, no scroll |
| 2 | **ⓘ expand** on the same card | mini table with the relevant cells highlighted + 1 example with parse | one phone screen |
| 3 | **Rule sheet** ("Rule ›" link): a bottom sheet over the lesson, or a page from the Grammar index | full GP: rule, steps, all tables, examples, pitfalls for *my* base language, contrast | scrolls, sections collapsed after the first table |

### (a) Rule card before practising a new pattern

- We keep **guess-first** (05-learning-science: a prediction before the explanation improves retention). The ungraded MCQ stays as it is. The teach card that replaces it (`Guess` in `Exercises.tsx`) becomes the rule card: GP `title`, `summary`, mini table (`tables[0]`, ≤ 4 rows) and one example. It also has a "Full rule ›" link.
- The card appears the **first time** a learner meets a GP. A `seenGrammar: Record<gpId, firstSeenISO>` in user state records this, and it syncs like the rest of progress. Later pattern items for the same GP keep today's short teach card, with a "Rule ›" link.
- Four "hub" points are conceptually new to both audiences: German cases (`de-g-kasus`), the German sentence bracket (`de-g-satzklammer`), Italian articles (`it-g-articoli`) and Italian clitics (`it-g-pronomi-atoni`). These get one extra **concept card** (no quiz) before their first guess. They are the only places where the explanation comes before the guess.

### (b) Feedback sheet after a mistake

The current line logic stays and is extended in this priority order: `diag explain` → `check.feedback` → reason note → `item.note`.

```
✗ Not quite                                   🔊
Ich besuche meine Brüder.
I visit my brothers.
Your answer: Ich besuche ~~meinen~~ Brüder.
┌──────────────────────────────────────────────┐
│ meinen = accusative masculine singular. Here │
│ Brüder is plural (object of besuchen) →      │
│ meine.                                  ⓘ    │
└──────────────────────────────────────────────┘
  ⓘ → mini table, cell Akk·m struck, Akk·pl highlighted
      "Rule: possessives and case ›"
[ I was right ]              [ Continue ]
```

- The why line always names three things: **what the learner's form is**, **what this sentence needs and why** (the role), and **the right form**.
- When the diagnosis is not certain (§3.4), the sheet shows no "why" sentence, only the expected answer, plus "This practises: *Possessives and case* ›".

### (c) Browsable Grammar reference per language

- Entry points: a **"Grammar" row on the Path** header (per course), and on each unit postcard "Grammar in this unit" chips. No new tab is needed, which keeps the tab bar calm.
- Index grouped by CEFR band → GP titles in the base language, with the target-language label as a subtitle. Search covers titles, terms in both languages, and example words (*meinen*, *glielo*).
- No locks: future GPs are visible, tagged "later in the course" (consistent with no-gating, no-FOMO).
- "**My trouble spots**" (phase 3): the GPs diagnosed most often in the learner's last 30 days of answers, computed from `diag.gp` in the review log. It offers a short practice session drawn from items linked to that GP.

---

## 3. Error → explanation mapping (deterministic)

### 3.1 Pipeline

`check()` keeps its verdict logic unchanged. A new step, **`diagnose(answer, item, check, pack)`**, runs only on `almost`/`wrong` and adds `diag?: { gp, tag, vars }` to `CheckResult`. The first match wins:

| # | Layer | Source | Coverage | Confidence |
|---|---|---|---|---|
| D1 | Known error | `errors[].diag` / `accept[].diag` (authored) | exact strings | certain |
| D2 | MCQ option tag | `question.why[k]` | pattern questions, article picks | certain |
| D3 | Paradigm diagnoser | wrong token ∈ some `paradigm.forms` of the GP named by the aligned `slot`; reverse-lookup the learner's form → feature set(s) | articles, possessives, adjective endings, articulated prepositions, pronouns, verb persons | certain if the slot exists and the learner's form is in the same paradigm |
| D4 | Structure diagnosers | `reason: "order"` + slot roles; lexicon lists | V2, verb-final, separable prefix, aux choice, congiuntivo after trigger | certain only on the patterns they know |
| D5 | Fallback link | `item.grammar[0]` | everything linked | no why sentence, just "This practises X ›" |
| D6 | LLM "Why?" (optional, existing) | tutor, grounded on the GP text of `item.grammar` | free-form | labelled "Tutor says"; never overrides D1–D4 |

Two smaller changes go with this. `check.ts` gains a reason `"form"` (same lemma, wrong inflection; today German `endingOnly` returns `"wrong"`), so stats can tell grammar errors from vocabulary errors. The diag also goes into the review log, which enables trouble spots and lets content authors see which GPs fail most.

### 3.2 Diag tags

Each tag is `gpId:tag`, it is declared in `GrammarPoint.diagnoses`, and its `explain` template is written per base language and reviewed (§5). The variables are filled from the paradigm's **localized feature names** (§5.3) and from the slot's `role`. Writers check the template against its golden cases (§5.6).

### 3.3 Six worked examples

**DE-1 · Case endings: *meinen Brüder*** (`de-g-possessive:case-number`)
- Item: `Ich besuche meine Brüder.` with slot `{ tok: "meine", gp: "de-g-possessive", f: "akk.pl", head: "Brüder", role: {en:"object of besuchen", es:"complemento directo de besuchen"} }`.
- Learner: `Ich besuche meinen Brüder.` The aligned token differs only in its ending, so the checker returns `form`. Then D3: reverse lookup gives *meinen* ∈ {akk.m, dat.pl}, which is not {akk.pl}, and the number differs (sg vs pl).
- en: "*meinen* is accusative masculine **singular** (or dative plural). Here *Brüder* is plural, object of *besuchen* → **meine**: in the plural, accusative = nominative."
- es: "*meinen* es acusativo masculino **singular** (o dativo plural). Aquí *Brüder* es plural, complemento directo de *besuchen* → **meine**: en plural, acusativo = nominativo."
- The tie-breaker for ambiguous forms is to pick the reading that shares the most features with the target (here akk.m shares the case), and to name the other reading in parentheses.

**DE-2 · Verb second: *Heute ich gehe ins Kino*** (`de-g-v2:inversion`)
- Item slots mark the finite verb: `{ tok: "gehe", gp: "de-g-v2", f: "finite", role: … }`, plus `{ tok: "Heute", f: "vorfeld" }`.
- Learner tokens = target tokens in a different order → `reason: "order"`. D4 V2 check: the finite verb is not in position 2 *and* the learner's position-1 element is the vorfeld element.
- en: "In a German main clause the verb is always **2nd**. *Heute* takes position 1, so the verb comes next and the subject moves after it: **Heute gehe ich** ins Kino."
- es: "En la oración principal alemana el verbo va **siempre en 2.º lugar**. *Heute* ocupa el 1.º, así que sigue el verbo y el sujeto pasa detrás: **Heute gehe ich**… (en español el orden es libre; en alemán, no)."
- The same diagnoser with `f: "finite-final"` covers *weil/dass* clauses (`de-g-nebensatz:verb-final`).

**DE-3 · Separable verb: *Ich anrufe dich morgen* / *Ich rufe dich morgen*** (`de-g-trennbar:not-split`, `:prefix-missing`)
- `lexicon.separable` contains `["anrufen","an","rufen"]`. D4 looks for three things in the answer: a token equal to the prefix glued to the finite stem (*anrufe*), the stem without the prefix anywhere (*rufe … ∅*), or the prefix in the wrong slot (*rufe an dich*).
- The existing `errors[]` entry on `de-u07-…` (*Ich anrufe dich morgen.*) gains `diag: { gp: "de-g-trennbar", tag: "not-split" }`. Its feedback stays and the GP link is added.
- en (not-split): "*anrufen* is separable: the finite part *rufe* goes 2nd, the prefix *an* goes to the **very end**: Ich rufe dich morgen **an**."
- en (prefix-missing): "Without *an*, *rufen* means 'to shout'. The prefix *an* must close the sentence: … morgen **an**."

**IT-1 · Articulated prepositions: *nel zaino* / *in il cinema*** (`it-g-prep-articolate:base-article`, `:not-contracted`)
- *in il* → *nel* is already caught by `reason: "contraction"` (wrong in Italian, per 06-linguist §2). The diag maps it: "In Italian, *in + il* always merge: **nel**. Never write *in il*."
- *nel zaino*: slot `{ tok: "nello", gp: "it-g-prep-articolate", f: "in.lo", head: "zaino" }`. D3 lookup: *nel* = in.il. The preposition matches and the article does not, so the tag `base-article` fires. The template pulls the cross-link to `it-g-articoli`.
- es: "*zaino* empieza por **z**, así que su artículo es *lo* (lo zaino), y *in + lo* = **nello**. *nel* es *in + il*, para palabras como *nel bar*."

**IT-2 · Passato prossimo, essere vs avere: *ho andato* / *Maria è andato*** (`it-g-pp-aux:avere-for-essere`, `it-g-pp-essere:agreement`)
- Aux: D4 finds a form of *avere* + participle whose infinitive ∈ `lexicon.auxEssere` (or a reflexive pronoun + avere). The existing `errors` on `it-u10` (*Sabato ho andato al mare*, *Mi ho divertito*) gain diags.
- es: "*andare* es un verbo de movimiento: lleva **essere** → *sono andato/a*. En español *he ido* usa siempre haber; en italiano, no."
- en: "*andare* (movement) takes **essere**, not *avere* → *sono andato/a*. Think 'I am gone', not 'I have gone'."
- Agreement: MCQ `pat-pp-essere` options `["andata","andato","andati","andare"]` get `why: [null, "it-g-pp-essere:agreement-gender", "it-g-pp-essere:agreement-number", "it-g-pp-essere:infinitive"]`. Wrong pick *andato* → "With *essere* the participle agrees with the subject, like an adjective: *Maria* → **andata**."

**IT-3 · Congiuntivo after a trigger: *Penso che è vero*** (`it-g-congiuntivo-uso:after-opinion`)
- Slot `{ tok: "sia", gp: "it-g-congiuntivo-uso", f: "cong.pres.3sg", trigger: "penso che" }`. D3 lookup on the *essere* paradigm: *è* = ind.pres.3sg. Same person, mood differs → tag `after-opinion` (the trigger class comes from `lexicon.ccTriggers`).
- es (strong contrast, positive and negative transfer): "Tras **penso/credo che** el italiano pide **congiuntivo**: *penso che **sia** vero*. ¡Ojo! En español «creo que **es**» va en indicativo; solo «no creo que **sea**» lleva subjuntivo."
- en: "After verbs of opinion (*penso che, credo che*) Italian uses the **subjunctive**: *penso che **sia** vero*. English has no form here, so learn the trigger."
- Register note (pitfall): spoken Italian often has *penso che è*. In congiuntivo drills the verdict stays `wrong`; the reference mentions the spoken use.

### 3.4 Guardrails for the diagnosis

- **No slot, no specific why.** D3 and D4 fire only when the item declares the structure (a slot or `grammar`). A wrong guess at the cause is worse than showing nothing.
- **Fire only once per answer.** If several tokens are wrong, explain the leftmost diagnosed one, and the rest just appear in the corrected sentence. Showing two grammar lectures at once breaks the "never a wall" principle.
- **Never on a correct answer.** A `correct` verdict, including variants and accepted alternatives, never shows a diagnosis.
- The diagnosis **never changes the verdict**. It only explains.

---

## 4. Inventory A0 → B2

★ = top 15 per language (highest error rate for Spanish/English speakers × frequency × number of units that depend on it). "Units" lists where the existing `pat-*` items sit: the first unit teaches the point, later ones revisit it. **gap** = no pattern item yet. Write a GP anyway and add pattern items in phase 2.

### 4.1 German (58)

| Band | id (`de-g-…`) | Title (en) | Units / existing pattern |
|---|---|---|---|
| A0–A1.1 | `du-sie` | du / ihr / Sie | u01 pat-du-sie, u24 pat-duzen-siezen |
| | `praesens` ★ | Present tense: endings | u02 pat-kommen |
| | `sein-haben` ★ | sein & haben | u01, u04 pat-haben |
| | `v2` ★ | Verb second | u02 pat-verb-zwei |
| | `fragen` | W-questions & yes/no (verb first) | u02, u03 pat-ja-nein |
| | `zahlen` | Numbers (einundzwanzig) | u03 pat-zehn, pat-einundzwanzig |
| | `genus` ★ | Gender der/die/das + cues | u04 pat-der-die-das |
| | `kasus` ★ (hub) | What case is (Nom/Akk/Dat/Gen) | concept card before u05 |
| | `possessive` ★ | mein/dein… with endings | u04 pat-mein-meine, u17 |
| | `artikel-unbestimmt` | ein/eine; kein | u05 pat-ein-einen, pat-kein |
| | `akkusativ` ★ | Accusative (only masc. changes) | u05 pat-ein-einen |
| | `plural` ★ | Plural types | u06 pat-plural |
| | `negation` ★ | nicht vs kein; position of nicht | u06 pat-nicht-kein |
| | `komposita` | Compounds take the last noun's gender | u06 pat-komposita |
| A1.2 | `vokalwechsel` | Stem-changing verbs (fährt, isst) | u05 note on essen · gap |
| | `trennbar` ★ | Separable verbs | u07 pat-trennbar |
| | `zeit-praep` | am / um / im + time | u07 pat-uhrzeit, pat-am-um |
| | `satzklammer` (hub) | Sentence bracket | concept card u07/u08 |
| | `modalverben` ★ | Modal verbs + infinitive at end | u08 pat-modalverben |
| | `gern` | gern / lieber / am liebsten | u08 pat-gern |
| | `dativ` ★ | Dative: articles & use | u09 pat-dativ |
| | `praep-fest` | Fixed-case prepositions (mit, für…) | u02 pat-aus-der, u09 |
| | `kontraktion` | zum, zur, im, am, ins | u09 pat-zum-zur |
| | `imperativ` | Imperative (du/ihr/Sie) | u09 pat-imperativ |
| | `pronomen-kasus` | mich/mir, dich/dir… | gap (u09/u13 errors use it) |
| A2 | `perfekt` ★ | Perfekt with haben/sein | u10 pat-perfekt-haben, pat-perfekt-sein |
| | `partizip` | Participle II (ge-…-t / -en, no ge-) | u10 pat-partizip |
| | `war-hatte` | war / hatte | u10 pat-war-hatte |
| | `nebensatz` ★ | Verb-final: weil, dass, wenn | u11 pat-weil, u13 pat-dass |
| | `dativverben` | helfen, gefallen, wehtun | u11 pat-weh |
| | `modal-bedeutung` | sollen, dürfen, müssen nicht | u11 pat-sollen-duerfen, u20 |
| | `wechselpraep` ★ | Two-way prepositions (wo? / wohin?) | u12 pat-wechselpraep |
| | `komparativ` | Comparative / superlative | u12 pat-komparativ |
| | `reflexiv` | Reflexive verbs (sich) | gap |
| | `es-wetter` | Impersonal es | u12 pat-wetter |
| B1 | `konj2-hoeflich` | würde / könnte / hätte gern | u13 pat-konj2-hoeflich |
| | `seit` | seit + present tense | u13 pat-seit |
| | `praeteritum` | Präteritum (written past) | u14 pat-praeteritum |
| | `als-wenn` | als / wenn / wann | u14 pat-als-wenn |
| | `plusquamperfekt` | Plusquamperfekt | u14 pat-plusquamperfekt |
| | `relativsatz` ★ | Relative clauses | u15 pat-relativsatz |
| | `verben-praep` | Verbs + preposition; wo-/da- | u15 pat-verben-praep, pat-wo-da |
| | `passiv` | Passive (werden + Partizip) | u16 pat-passiv |
| | `zu-infinitiv` | zu + infinitive; um … zu | u16 pat-zu-infinitiv |
| | `konnektoren` | obwohl vs trotzdem (clause vs adverb) | u16 pat-obwohl-trotzdem |
| | `adjektiv` ★ | Adjective endings (3 tables) | u17 pat-adjektiv-ein, pat-adjektiv-der |
| | `futur` | Futur I | u18 pat-futur |
| | `konj2-irreal` | Konjunktiv II: wenn … würde | u18 pat-konj2-wenn |
| | `n-deklination` | n-declension | u18 pat-n-deklination |
| | `genitiv` | Genitive (des …-s) | gap (needed before u23) |
| B2 | `passiv-modal` | Passive with modal | u19 pat-passiv-modal |
| | `doppelkonnektoren` | sowohl … als auch, weder … noch | u19 pat-doppelkonnektoren |
| | `konj1` | Konjunktiv I, reported speech | u20 pat-konjunktiv1 |
| | `indirekte-frage` | Indirect questions (ob, wie…) | u20 pat-indirekte-frage |
| | `partizipialattribut` | Extended participial attributes | u21 pat-partizipialattribut |
| | `passiversatz` | Passive alternatives (sich lassen, -bar) | u21 pat-passiversatz |
| | `nominalisierung` | Nominal style | u21 pat-nominalisierung |
| | `konj2-vergangenheit` | hätte/wäre + Partizip; double infinitive | u22 pat-konj2-vergangenheit, pat-doppelinfinitiv |
| | `als-ob` | als ob / als wenn | u22 pat-als-ob |
| | `je-desto` | je … desto | u23 pat-je-desto |
| | `genitiv-praep` | wegen, trotz, während | u23 pat-genitiv-praep |
| | `modalpartikeln` | doch, ja, mal, eben | u23 pat-modalpartikeln |
| | `funktionsverben` | Funktionsverbgefüge | u24 pat-funktionsverben |

(`geschaeftsbrief`, `meinung`, `redewendungen` and `wochentage`/`wetter` stay as plain pattern items: they are chunks and conventions, not grammar points.)

### 4.2 Italian (58)

| Band | id (`it-g-…`) | Title (es) | Units / existing pattern |
|---|---|---|---|
| A0–A1.1 | `tu-lei` | tu / Lei (como *usted*) | u01 pat-tu-lei, u24 pat-registro |
| | `essere` ★ | essere (presente) | u02 pat-essere |
| | `presente-are` ★ | Presente: -are | u02 pat-are |
| | `aggettivi` | Adjetivos -o/-a/-e; nacionalidad | u02 pat-nazionalita |
| | `avere` | avere; *ho 30 anni* | u03 pat-avere |
| | `numeri` | Números (ventuno, ventotto) | u03 pat-ventuno |
| | `genere` | Género -o/-a/-e | u04 pat-genere |
| | `articoli` ★ (hub) | il/lo/la/l'/i/gli/le; un/uno/una/un' | u04 pat-un-uno-una, pat-il-lo-la, u05 pat-plurale |
| | `plurale` | Plural de sustantivos | u05 pat-plurale |
| | `possessivi` ★ | Posesivos con artículo (*la mia casa*, *mia madre*) | u05 pat-possessivi |
| | `presente-ere-ire` | Presente: -ere / -ire | u06 pat-ere-ire |
| | `ce-ci-sono` | c'è / ci sono | u06 pat-c-e |
| | `prep-luogo` ★ | a / in / da / di con lugares | u06 pat-a-in-di |
| A1.2 | `riflessivi` | Verbos reflexivos | u07 pat-riflessivi |
| | `isc` | Verbos en -isc- | u07 pat-isc |
| | `ore` | La hora (*sono le tre*) | u07 pat-ore |
| | `piacere` ★ | piacere (*mi piace / mi piacciono*) | u08 pat-piacere |
| | `irregolari` | Presente irregular (andare, fare, venire, uscire) | u08 pat-irregolari |
| | `modali` | volere / potere / dovere | u08 pat-modali |
| | `prep-articolate` ★ | Preposiciones articuladas | u09 pat-prep-articolate |
| | `partitivo` | Partitivo del / della | u09 pat-partitivo |
| | `quanto` | quanto/a/i/e | u09 pat-quanto |
| A2 | `pp-avere` ★ | Passato prossimo con avere | u10 pat-pp-avere |
| | `pp-essere` ★ | Con essere + concordancia | u10 pat-pp-essere |
| | `pp-aux` (hub of the two) | ¿essere o avere? | u10 (diag target) |
| | `participi-irregolari` | Participios irregulares | u10 pat-pp-irregolari |
| | `imperfetto` | Imperfetto | u11 pat-imperfetto |
| | `imperf-vs-pp` ★ | Imperfetto vs passato prossimo | u11 pat-imperf-vs-pp |
| | `cera` | c'era / c'erano | u11 pat-cera |
| | `futuro` | Futuro semplice | u12 pat-futuro |
| | `pronomi-diretti` ★ | lo/la/li/le (+ concordancia del participio) | u12 pat-pronomi-diretti |
| | `ci` | ci (lugar) | u12 pat-ci |
| | `pronomi-indiretti` | gli / le / mi / ti | gap (prereq for u14) |
| B1 | `imperativo` | Imperativo tu / voi / Lei | u13 pat-imperativo-tu, pat-imperativo-lei |
| | `imperativo-pronomi` | *dimmi, dammelo* | u13 pat-imperativo-pronomi |
| | `condizionale` | Condicional presente | u14 pat-condizionale |
| | `pronomi-combinati` ★ | glielo, me lo… | u14 pat-pronomi-combinati |
| | `ne` ★ | ne | u14 pat-ne |
| | `congiuntivo-forme` ★ | Congiuntivo presente: formas | u15 pat-congiuntivo |
| | `congiuntivo-uso` ★ | Cuándo: opinión, deseo, duda, *quando* | u15 pat-congiuntivo, pat-quando-congiuntivo |
| | `di-infinito` | *penso di* + infinitivo vs *che* + cong. | u15 pat-di-infinito |
| | `trapassato` | Trapassato prossimo | u16 pat-trapassato |
| | `relativi` | che / cui / il quale | u16 pat-relativi |
| | `passato-remoto` | Passato remoto (reconocer) | u16 pat-passato-remoto, u22 pat-passato-remoto-forme |
| | `congiuntivo-imperfetto` | Congiuntivo imperfetto | u17 pat-congiuntivo-imperfetto |
| | `ipotetico` ★ | Período hipotético (real / posible) | u17 pat-periodo-ipotetico |
| | `magari-come-se` | magari, come se | u17 pat-magari-come-se |
| | `si-impersonale` | si impersonal / pasivo | u18 pat-si-impersonale |
| | `passivo` | Pasiva con essere / venire / andare | u18 pat-passivo-essere, pat-passivo-venire |
| B2 | `gerundio` | Gerundio; stare + gerundio | u19 pat-gerundio |
| | `participio-assoluto` | Participio absoluto | u19 pat-participio-assoluto |
| | `discorso-indiretto` | Estilo indirecto | u20 pat-discorso-indiretto |
| | `concordanza` | Concordancia de tiempos | u20 pat-concordanza |
| | `domande-indirette` | Preguntas indirectas | u20 pat-domande-indirette |
| | `ipotetico-irreale` | Hipotético irreal (*se avessi saputo…*) | u21 all three patterns |
| | `congiunzioni` | benché, affinché, prima che + cong. | u22 pat-congiunzioni |
| | `superlativo` | Superlativo relativo / absoluto | u22 pat-superlativo |
| | `connettivi` | Conectores del discurso | u23 pat-connettivi |
| | `verbi-pronominali` | andarsene, farcela, prendersela | u23 pat-verbi-pronominali |
| | `metterci-volerci` | metterci / volerci | u23 pat-metterci-volerci |
| | `alterati` | Diminutivos / aumentativos | u24 pat-alterati |

(`lettera-formale`, `centrare`, `registro` stay as pattern items, as in German.)

**Top-15 rationale.** The German top 15 covers the case system (kasus, genus, akkusativ, dativ, possessive, adjektiv, wechselpraep) and word order (v2, nebensatz, trennbar, modalverben): together the bulk of every A1–B1 textbook error list. Add praesens, sein-haben, plural, negation, perfekt and relativsatz, and nearly every sentence item touches at least one top-15 point. The Italian top 15 favours what Spanish speakers get wrong (06-linguist §3: articoli, prep-articolate, possessivi, prep-luogo, pp-essere/pp-avere, pronomi, ne, congiuntivo after opinion) plus piacere and imperf-vs-pp, which are hard for English speakers.

---

## 5. Writing standards

### 5.1 Length limits (eval-enforced)

| Surface | Field | Limit |
|---|---|---|
| Rule card | `title` | ≤ 6 words |
| | `summary` | ≤ 25 words, one rule, no exceptions listed |
| | mini table (`tables[0]`) | ≤ 4 rows × 4 cols on the card (full table in ref) |
| Feedback why | `diagnoses[].explain` (filled) | ≤ 30 words, ≤ 2 sentences: *your form = X; here Y because Z → W* |
| Reference | `rule` | ≤ 80 words |
| | `steps` | ≤ 5, each ≤ 15 words |
| | `examples` | 3–6; each ≤ 12 words; `parse` ≤ 12 words |
| | `pitfalls` | ≤ 4 per base language |
| | `contrast` | ≤ 40 words |
| Item | `note` | unchanged: ≤ 2 sentences (06-linguist §2) |

### 5.2 Tone

- Write like a good teacher's grammar (Dreyer/Schmitt, Nocchi, Carrera Díaz): state the rule, give the reason, show the example. No jokes, no "Oops!", no shaming. Write "Here *Brüder* is plural", never "You forgot that…".
- **Explain the system, not a trick.** "Accusative only changes masculine" is a real rule. "Add -n when unsure" is not a rule.
- Say *why* using the sentence's own words (the role from the slot), not jargon alone: "object of *besuchen*", not just "Akk.".
- Exceptions go in the reference only, never on the card.
- Spanish: neutral Latin-American tú, no voseo (06-linguist §2). English: international.

### 5.3 Terminology (fixed glossary, `src/content/terms.ts`)

The rule: **use the traditional term the learner will meet in any book, and gloss its function on first use per surface.**

| key | de / it label shown | es | en |
|---|---|---|---|
| nominativ | Nominativ | nominativo (sujeto) | nominative (subject) |
| akkusativ | Akkusativ | acusativo (complemento directo) | accusative (direct object) |
| dativ | Dativ | dativo (complemento indirecto; tras *mit, zu*…) | dative (indirect object; after *mit, zu*…) |
| genitiv | Genitiv | genitivo (posesión, «de») | genitive (possession, "of") |
| v2 | Verbzweitstellung | verbo en 2.º lugar | verb second |
| trennbar | trennbares Verb | verbo separable | separable verb |
| partizip2 | Partizip II | participio | past participle |
| passato-prossimo | passato prossimo | passato prossimo (≈ pretérito perfecto compuesto: *he ido*) | passato prossimo (≈ present perfect / simple past) |
| imperfetto | imperfetto | imperfetto (= pretérito imperfecto) | imperfetto (imperfect: "used to / was -ing") |
| congiuntivo | congiuntivo | congiuntivo (= subjuntivo) | congiuntivo (subjunctive) |
| ausiliare | ausiliare | auxiliar (essere / avere) | auxiliary (essere / avere) |
| prep-articolata | preposizione articolata | preposición articulada (como «del», «al») | articulated preposition (preposition + article) |

- Abbreviations in tables: Nom/Akk/Dat/Gen (German), with the m/n/f/pl column heads. Italian tenses keep their Italian names, because that is what Italian textbooks and teachers use, and the es glosses map them onto Spanish tense names.
- Diag templates fill `{gotF}`/`{wantF}` from this glossary, so feature names are written once and reviewed once.

### 5.4 Spanish vs English versions

- **Written separately, never translated** (as for `note`, `PerBase`). Each version addresses its own reader's transfer:
  - es→it: lean on positive transfer ("igual que en español: subjuntivo tras *quiero que*") and flag the false-transfer traps loudly (*creo que es* vs *credo che sia*; haber vs essere; *mi madre* vs *la mia famiglia*).
  - en→de / en→it: build the concept from zero (gender, case, T/V, subjunctive, auxiliary choice) and use English hooks carefully ("I am gone" for essere).
  - es→de: use Spanish where it helps (*usted* ≈ Sie; *le* ≈ dative) and warn on gender interference (*die Sonne* / el sol).
- `pitfalls[].for` filters which mistakes each learner sees.

### 5.5 Avoiding errors

1. **Sources:** consult at least one reference grammar per point. German: Duden Grammatik, Hammer's German Grammar and Usage, Dreyer/Schmitt. Italian: Serianni, Maiden & Robustelli, Nocchi, Carrera Díaz (*Manual de gramática italiana*, written for Spanish speakers). Cross-check the CEFR placement against Profile Deutsch and the Profilo della lingua italiana. Write our own wording and examples, never copy them.
2. **Native linguist sign-off:** `reviewed` on every GP *and* on each diag template. A GP without review does not ship (eval).
3. **Two-person rule for the "why":** the author writes the template; a second reviewer checks it against the golden wrong answers (below) and confirms the filled sentence is *true for each one*, e.g. it must not say "subject" when the noun is the object.

### 5.6 Evals (added to `tests/evals`, gate for every phase)

| Eval | Checks |
|---|---|
| G1 schema | every `pattern` item has `grammar`; every GP id referenced exists; es+en present on every PerBase field of a GP; length limits §5.1 |
| G2 paradigm consistency | every slot's `tok` equals `paradigm.forms[f]` of its GP; every table cell with a key equals the paradigm |
| G3 example integrity | GP examples pass `check()` against themselves; German nouns capitalised; Italian accents/elision valid (reuses the 06-linguist §2 rules) |
| G4 golden diagnoses | ≥ 30 wrong answers per language (≥ 2 per top-15 GP) → expected `gp:tag` + exact filled es/en sentence (snapshot). Includes the 6 cases in §3.3 |
| G5 no false why | 100 random wrong answers on items *without* slots must yield D1/D2/D5 only, never a D3/D4 sentence |
| G6 no contradiction | `item.note` and the GP summary for the same structure are reviewed together (manual checklist flagged by the eval when both exist) |
| G7 LLM audit (offline, advisory) | a model reads each GP + template and flags claims that may be false; findings go to the linguist and never auto-edit content |

---

## 6. Effort and phased plan

### 6.1 Estimate

| Work | Unit cost | Volume | Total |
|---|---|---|---|
| GP authoring (both base languages, sources, tables, examples, pitfalls) | ~1.5 h (an LLM draft is fine as a *starting point* for the human author) | 116 GPs | ~175 h |
| Linguist review of GP + templates | ~30 min | 116 | ~60 h |
| Diag templates (≈ 3 tags/GP) + golden cases | ~10 min/tag | ~350 tags | ~60 h |
| Slot annotation on sentence/pattern items | ~4 min/item | ~1,000 items (of ~1,250 per lang × 2, only the structured ones) | ~65 h |
| MCQ `why` tags | ~3 min/question | ~140 pattern questions + article picks | ~10 h |
| Engine: schema 2.1, loader, `diagnose()` D1–D5, rule card, feedback sheet, rule sheet, Grammar index, seenGrammar sync, evals G1–G6 | — | — | ~8–10 dev days |

Content total ≈ **370 h** for both languages, about 2 weeks of the content team per language. Top 15 alone ≈ 30% of that.

### 6.2 Phases (each ships only when `npm run eval` passes with 0 open P0/P1)

| Phase | Scope | Exit criterion |
|---|---|---|
| **0 · Pilot** (≈ 1 week) | `decisions.md` entry + schema 2.1 (additive); 2 GPs end-to-end: `de-g-possessive` (+ `de-g-kasus` concept card), `it-g-pp-aux`; D1 + D2 + D3; rule card + feedback why + rule sheet | owner tries *meinen Brüder* and *ho andato* on production and the explanation reads "like the book" |
| **1 · Top 15** | 15 GPs per language; slots on units 1–12 items that touch them; D4 for V2/verb-final/separable/aux; Grammar index (read-only); evals G1–G5 | G4 golden set passes; ≥ 70% of wrong typed answers on units 1–12 get a D1–D4 why (measured from the review log) |
| **2 · A0–A2 complete** | the remaining A0–A2 GPs; fill the gaps (pronomen-kasus, reflexiv, vokalwechsel, pronomi-indiretti) with new pattern items; congiuntivo-trigger diagnoser | every unit 1–12 has its GPs reviewed |
| **3 · B1–B2 + trouble spots** | all remaining GPs; "My trouble spots" + targeted practice; LLM "Why?" grounded on GP text | full inventory reviewed; G6/G7 run |

---

## 7. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| **A confident but wrong "why"** (e.g. "subject" for an object) | Undermines trust and teaches errors; worse than no explanation | Explanations come from slot annotations only (§3.4); G4/G5 evals; two-person review of every template |
| Annotation cost / drift: slots go stale when a sentence is edited | Wrong diagnoses | G2 rejects any slot whose `tok` no longer matches; slots live next to `target` in the same item |
| Walls of text creep in over time | Breaks the calm, phone-first feel | Hard length limits in evals; depth 3 only on tap |
| Explaining before the guess loses the discovery effect | Weaker retention | Keep guess-first; concept cards only for the 4 hubs |
| es/en drift (one version updated, the other not) | Inconsistent teaching | `reviewed` date per base language; G1 requires both versions |
| Ambiguous forms (German *meine*, *meinen*, *der*) | Muddled why | Feature-overlap tie-break + "(or …)" phrasing; golden cases for every ambiguous cell |
| Frozen contract | Engine/content mismatch | Additive optional fields only, version 2.1 via decisions.md; old packs keep working (no GP → today's behaviour) |
| Copyright when "explaining like the book" | Legal | Our own wording and examples; books are consulted for accuracy only (§5.5) |
