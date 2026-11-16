// Lingua content contract v2.1 — FROZEN. Change only via docs/team/decisions.md.
// v2.1 (2026-11-14): grammar points, paradigm tables, sentence annotations, ruleId on errors. All optional.
export type TargetLang = "it" | "de";
export type BaseLang = "es" | "en";
export type Cefr = "A0" | "A1.1" | "A1.2" | "A2" | "B1" | "B2"; // B2 added 2026-11-13 (decisions.md)
export type Register = "formal" | "informal";
export type Region = "DE" | "AT" | "CH" | "S-DE" | "IT" | "CH-IT";
/** Text in every base language. Both keys REQUIRED. */
export type Glossed = Record<BaseLang, string>;
/** Text written separately per base language (not translated). Either key optional. */
export type PerBase = Partial<Record<BaseLang, string>>;

export type ItemType =
  | "sound"      // grapheme↔sound rule; uses `pair`/`distractors`
  | "word"       // lemma; nouns carry gender + plural
  | "phrase"     // fixed chunk
  | "sentence"   // model sentence (tiles/translate)
  | "pattern"    // grammar rule; uses `pattern` + `question`
  | "listening"  // short audio text + `question`
  | "dialogue"   // `turns` + `question`
  | "bridge"     // cognate rule / false friend; only shown when `onlyFor` matches the course's explain-in language
  | "paradigm";  // a small table to fill in (≤ 7 cells): one verb in one tense, or one slice of a declension; uses `paradigm`

export type Exercise =
  | "guess"         // first exposure: MCQ before teaching (ungraded)
  | "recognize"     // target → pick meaning
  | "recall"        // meaning → type target
  | "tiles"         // meaning → build target from tiles
  | "listen"        // audio → pick or type target
  | "article"       // pick der/die/das · il/lo/la/l'/i/gli/le
  | "pick-spelling" // sound items: audio → choose spelling
  | "question"      // answer item.question (listening/dialogue/pattern)
  | "table"         // paradigm items: type every cell of the table
  | "speak";        // say it (speech API, rough match only)

/** Accepted alternative. verdict "almost" = accepted but with a note (e.g. "ein Kaffee", "wieviel", "dove è"). */
export interface Alt { text: string; verdict?: "correct" | "almost"; feedback?: PerBase }
/** Known wrong answer with targeted feedback (e.g. "ho andato"). */
export interface KnownError { text: string; feedback: PerBase; /** grammar point that explains this mistake */ ruleId?: string }

/** One cell of a paradigm table: row label ("du", "Akk. m") and the form to type. */
export interface ParadigmCell { label: string; answer: string; accept?: string[]; ruleId?: string }
export interface Paradigm { caption: Glossed; cells: ParadigmCell[] }

/**
 * A grammar point, explained the way a good textbook does: the rule, how to work the form out,
 * the full table, examples, and the classic mistakes. Not reviewed itself; items link to it.
 */
export interface GrammarPoint {
  id: string;                 // `${lang}-g-${slug}`
  lang: TargetLang;
  cefr: Cefr;
  title: Glossed;
  short: Glossed;             // one line, shown on the feedback sheet (≤ 120 chars)
  rule: Glossed;              // the rule card body (≤ 3 sentences)
  steps?: Glossed[];          // "how to work it out", in order (≤ 4)
  table?: { head: string[]; rows: string[][] };
  examples: { target: string; gloss: Glossed }[];
  pitfalls?: Glossed;         // typical mistake for Spanish/English speakers
}

export interface Mcq {
  prompt: Glossed;                 // question in the base language
  options: (string | Glossed)[];   // string = target-language option; Glossed = base-language option
  answer: number;                  // index into options
}

export interface Item {
  id: string;                 // `${lang}-u${NN}-${slug}`, ascii, stable forever, never reused
  legacyId?: string;          // v1 id (e.g. "it-buongiorno") for progress migration
  lang: TargetLang;
  unit: string;               // `${lang}-u${NN}` or "custom"
  type: ItemType;
  cefr: Cefr;
  target: string;             // canonical answer, standard spelling (German ß, Italian accents)
  gloss: Glossed;             // meaning; neutral Latin-American tú (es), international English (en)
  accept?: Alt[];
  errors?: KnownError[];
  variants?: { region: Region; text: string; note?: PerBase }[]; // regional forms: always accepted as correct
  register?: Register;        // only when it matters (tu/Lei, du/Sie)
  pos?: "noun" | "verb" | "adj" | "adv" | "prep" | "pron" | "num" | "phrase" | "other";
  gender?: "m" | "f" | "n";   // nouns
  plural?: string;            // full plural with article: "die Mütter", "le madri"
  forms?: Record<string, string>; // e.g. { io: "sono", tu: "sei" } or { pp: "andato", aux: "essere" }
  spoken: string;             // TTS text: numbers & abbreviations spelled out; usually === target
  slow?: boolean;             // play at rate 0.8 (minimal pairs, doubles)
  note?: PerBase;             // ≤2 sentences, one rule + one example, written per base language
  onlyFor?: BaseLang;         // bridge items: show only for this explain-in language
  example?: { target: string; spoken?: string; gloss: Glossed };
  pattern?: { rule: Glossed; table?: string[][] };
  turns?: { who: "A" | "B"; target: string; spoken?: string; gloss: Glossed }[];
  question?: Mcq;             // listening / dialogue / pattern comprehension
  pair?: [string, string];    // minimal pair for sound items, e.g. ["nono","nonno"]
  distractors?: string[];     // plausible wrong target-language options (≥3 for words/phrases)
  exercises?: Exercise[];     // allowed exercises; omitted = engine default for the type
  grammar?: string[];         // grammar point ids this item practises (rule card + "why" on mistakes)
  annot?: Record<string, Glossed>; // what key words do in this sentence: { "Brüder": "plural, object of besuchen" }
  paradigm?: Paradigm;        // type "paradigm" only
  difficulty?: number;        // -3 (easy) … +2 (hard); omitted = derived from cefr
  tags: string[];             // "food", "polite", "chunk", "false-friend", "goethe-a1" …
  reviewed?: { by: string; date: string }; // linguist sign-off
}

export interface Unit {
  id: string;                 // `${lang}-u${NN}`
  lang: TargetLang;
  index: number;              // 1-based order on the Path
  cefr: Cefr;
  title: { target: string } & Glossed; // { target: "Al bar", es: "En el bar", en: "At the café" }
  canDo: Glossed[];           // 1–3 CEFR-style can-do statements
  icon: string;               // one emoji used on the Path postcard (content only, not UI chrome)
  items: Item[];
}

export interface PlacementItem {
  id: string;                 // `${lang}-p-${NN}`
  lang: TargetLang;
  cefr: Cefr;
  b: number;                  // Rasch difficulty: A0 -2.5 · A1.1 -1.5 · A1.2 -0.5 · A2 +0.5 · B1 +1.5 · B2 +2.5 (±0.4 within band)
  skill: "vocab" | "grammar" | "listening" | "reading";
  kind: "mcq" | "listen" | "cloze" | "type";
  stem?: string;              // target-language text shown; cloze uses "___"
  spoken?: string;            // audio (kind "listen")
  mcq?: Mcq;                  // for mcq / listen / cloze
  answer?: string;            // for kind "type"
  accept?: string[];          // for kind "type"
  seeds?: string[];           // Item ids marked "probably known" if this is answered correctly
  falseFriend?: boolean;      // weight ×1.5 for es→it scoring
}

export interface Lexicon {
  closedClass: string[];          // articles, prepositions (+contractions), pronouns, auxiliaries: exact-match tokens
  minimalPairs: [string, string][]; // pairs a typo must NEVER bridge (nono/nonno, schon/schön, Staat/Stadt)
}

export interface CoursePack {
  lang: TargetLang;
  version: string;            // bump on every content change, e.g. "2.0.3"
  units: Unit[];
  placement: PlacementItem[];
  lexicon: Lexicon;
  grammar?: GrammarPoint[];
}
