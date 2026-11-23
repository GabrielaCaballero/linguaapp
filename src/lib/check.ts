// Answer checker v2 — strict about grammar, kind about phone typing.
// Rules: docs/team/10-spec.md §4.8 and docs/team/06-linguist.md §5.
// Fuzziness applies ONLY to open-class tokens; closed-class words (articles, prepositions,
// pronouns, auxiliaries) must match exactly, and a typo may never bridge a minimal pair.
import type { BaseLang, Item, Lexicon, TargetLang } from "@/content/schema";
import { courses } from "@/content";

export type Reason =
  | "exact"
  | "gender" // Portuguese -o/-a swapped (cansado/cansada)
  | "accept"
  | "variant"
  | "ss" // German ss for ß
  | "translit" // German ae/oe/ue for ä/ö/ü
  | "capital" // German noun typed lowercase
  | "umlaut"
  | "accent"
  | "accent-meaning" // e/è, si/sì, da/dà …
  | "elision"
  | "contraction" // di il → del (wrong in it, almost in de)
  | "typo"
  | "double"
  | "article-missing"
  | "minimal-pair"
  | "closed-class"
  | "order"
  | "register" // du for Sie, tu for Lei (item tagged formal/informal)
  | "spanish" // Spanish spelling of an Italian word (chao → ciao)
  | "known-error"
  | "empty"
  | "wrong";

export interface CheckResult {
  verdict: "correct" | "almost" | "wrong";
  reason?: Reason;
  score: number;
  /** Content-written feedback (from accept/errors), in the explain-in language. */
  feedback?: string;
  /** The learner's token and the expected token the note is about. */
  detail?: { got: string; want: string };
  /** Secondary note on a correct answer (capital letter, ss, typing tip). */
  note?: Reason;
  /** Grammar point that explains this mistake (from a known error's ruleId). */
  ruleId?: string;
}

export interface CheckOptions {
  lexicon: Lexicon;
  base: BaseLang;
}

const SCORE: Partial<Record<Reason, number>> = {
  accent: 0.9,
  "accent-meaning": 0.85,
  umlaut: 0.9,
  elision: 0.9,
  typo: 0.85,
  double: 0.85,
  contraction: 0.8,
  "article-missing": 0.5,
  accept: 0.9,
};

/** Light normalisation: case-preserving. */
export function tidy(s: string): string {
  return s
    .normalize("NFC")
    .replace(/[’‘`´ʼ]/g, "'")
    .replace(/[“”«»"]/g, "")
    .replace(/[¿¡]/g, "")
    .replace(/\s*'\s*/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?…,;:]+$/g, "")
    .replace(/^[.!?…,;:]+/g, "")
    .trim();
}

export function norm(s: string): string {
  return tidy(s).toLowerCase();
}

/** Tokenize on spaces and apostrophes (the apostrophe stays on the elided token: "dov'" "è"). */
export function tokens(s: string): string[] {
  return s
    .replace(/,/g, " ")
    .split(/\s+|(?<=')/)
    .map((t) => t.replace(/[.!?…;:]+$/g, ""))
    .filter(Boolean);
}

const bareTok = (t: string) => t.replace(/'$/, "");

function stripMarks(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
}

function deFold(s: string): string {
  // ß→ss, ä→ae etc: the forms Swiss and keyboard-less typists use.
  return s.replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue");
}

function deStrip(s: string): string {
  return s.replace(/ß/g, "ss").replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u");
}

const collapseDoubles = (s: string) => s.replace(/([b-df-hj-np-tv-z])\1/g, "$1");

export function lev(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}

/** Like lev, but two neighbouring letters swapped ("caio" for "ciao") count as one edit. */
export function osa(a: string, b: string): number {
  if (a === b) return 0;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++) {
      const c = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  return d[a.length][b.length];
}

// Phone keyboards (QWERTY / QWERTZ / AZERTY rows): keys next to each other.
const ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "qwertzuiop", "yxcvbnm", "azertyuiop", "qsdfghjklm", "wxcvbn"];
function neighbours(a: string, b: string): boolean {
  for (const r of ROWS) {
    const i = r.indexOf(a);
    const j = r.indexOf(b);
    if (i >= 0 && j >= 0 && Math.abs(i - j) === 1) return true;
  }
  // the key right above/below (qwerty rows offset by about half a key)
  const grid = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  for (let r = 0; r < 2; r++) {
    const i = grid[r].indexOf(a);
    const j = grid[r + 1].indexOf(b);
    const i2 = grid[r].indexOf(b);
    const j2 = grid[r + 1].indexOf(a);
    if ((i >= 0 && j >= 0 && (j === i || j === i - 1)) || (i2 >= 0 && j2 >= 0 && (j2 === i2 || j2 === i2 - 1))) return true;
  }
  return false;
}
/** Same length, exactly one letter different, and those two letters are neighbouring keys. */
function neighbourSub(got: string, want: string): boolean {
  const k = [...got].findIndex((c, i) => c !== want[i]);
  return k >= 0 && neighbours(got[k], want[k]);
}

/** Every word used in the course's targets, per language (lowercase), built once. */
const courseWords = new Map<TargetLang, Set<string>>();
function isOtherCourseWord(got: string, want: string, lang: TargetLang): boolean {
  let set = courseWords.get(lang);
  if (!set) {
    set = new Set<string>();
    for (const u of courses[lang].units) for (const i of u.items) for (const t of tokens(i.target)) set.add(bareTok(t).toLowerCase());
    courseWords.set(lang, set);
  }
  const g = bareTok(got).toLowerCase();
  return g !== bareTok(want).toLowerCase() && set.has(g);
}

const IT_ACCENT_MEANING = new Set(["e|è", "si|sì", "da|dà", "la|là", "li|lì", "ne|né", "se|sé"]);

const IT_CONTRACTIONS: Record<string, string> = {
  del: "di il", dello: "di lo", della: "di la", dei: "di i", degli: "di gli", delle: "di le",
  al: "a il", allo: "a lo", alla: "a la", ai: "a i", agli: "a gli", alle: "a le",
  dal: "da il", dallo: "da lo", dalla: "da la", dai: "da i", dagli: "da gli", dalle: "da le",
  nel: "in il", nello: "in lo", nella: "in la", nei: "in i", negli: "in gli", nelle: "in le",
  sul: "su il", sullo: "su lo", sulla: "su la", sui: "su i", sugli: "su gli", sulle: "su le",
};
// English contractions → full forms (only unambiguous ones: "he's", "I'd" and "it's" vary).
const EN_CONTRACTIONS: Record<string, string> = {
  "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are",
  "isn't": "is not", "aren't": "are not", "wasn't": "was not", "weren't": "were not",
  "don't": "do not", "doesn't": "does not", "didn't": "did not", "haven't": "have not", "hasn't": "has not", "hadn't": "had not",
  "can't": "cannot", "couldn't": "could not", "won't": "will not", "wouldn't": "would not", "shouldn't": "should not", "mustn't": "must not",
  "i'll": "i will", "you'll": "you will", "we'll": "we will", "they'll": "they will", "she'll": "she will", "he'll": "he will",
  "i've": "i have", "you've": "you have", "we've": "we have", "they've": "they have", "let's": "let us", "that's": "that is", "there's": "there is",
};
/** Lowercase, punctuation-free, contractions spelled out. `loose`: also read "dont"/"im" as don't/I'm. */
function enFull(s: string, loose = false): string {
  let t = norm(s).replace(/[’‘]/g, "'").replace(/[.,!?;:]+/g, "");
  t = t.replace(/\bcan not\b/g, "cannot");
  const words = t.split(/\s+/).map((w) => {
    if (EN_CONTRACTIONS[w]) return EN_CONTRACTIONS[w];
    if (loose && !w.includes("'")) {
      const hit = Object.keys(EN_CONTRACTIONS).find((c) => c.replace("'", "") === w && w !== "well" && w !== "were" && w !== "hell" && w !== "shell" && w !== "wed" && w !== "id" && w !== "its" && w !== "lets");
      if (hit) return EN_CONTRACTIONS[hit];
    }
    return w;
  });
  return words.join(" ");
}

// French: "à le" / "de les" typed for au / des is wrong, with the contraction note.
const FR_CONTRACTIONS: Record<string, string> = { au: "à le", aux: "à les", du: "de le", des: "de les" };
// Portuguese: "de o" / "em a" typed for do / na is wrong, with the contraction note. "num/numa" are
// left out on purpose: "em um / em uma" is standard written Brazilian Portuguese.
const PT_CONTRACTIONS: Record<string, string> = {
  do: "de o", da: "de a", dos: "de os", das: "de as",
  no: "em o", na: "em a", nas: "em as", // not "nos": it is also the pronoun "us"
  ao: "a o", aos: "a os", "à": "a a", "às": "a as",
  pelo: "por o", pela: "por a", pelos: "por os", pelas: "por as",
  dele: "de ele", dela: "de ela", deles: "de eles", delas: "de elas",
  deste: "de este", desta: "de esta", desse: "de esse", dessa: "de essa", daquele: "de aquele", daquela: "de aquela",
  neste: "em este", nesta: "em esta", nesse: "em esse", nessa: "em essa", naquele: "em aquele", naquela: "em aquela",
  disso: "de isso", nisso: "em isso", disto: "de isto", daquilo: "de aquilo", "àquele": "a aquele", "àquela": "a aquela",
};
const DE_CONTRACTIONS: Record<string, string> = {
  im: "in dem", ins: "in das", am: "an dem", ans: "an das", zum: "zu dem", zur: "zu der",
  beim: "bei dem", vom: "von dem",
};

type TokVerdict = { v: "ok" | "almost" | "wrong"; reason?: Reason; note?: Reason };

function rank(v: "ok" | "almost" | "wrong") {
  return v === "ok" ? 0 : v === "almost" ? 1 : 2;
}

function isMinimalPair(a: string, b: string, lex: Lexicon): boolean {
  const x = a.toLowerCase();
  const y = b.toLowerCase();
  return lex.minimalPairs.some(([p, q]) => {
    const P = p.toLowerCase();
    const Q = q.toLowerCase();
    return (P === x && Q === y) || (P === y && Q === x);
  });
}

function closed(tok: string, lex: Lexicon): boolean {
  const t = bareTok(tok).toLowerCase();
  return lex.closedClass.some((c) => c.toLowerCase().replace(/'$/, "") === t);
}

/** Compare one answer token against one expected token. Both are case-preserved. */
function compareToken(got: string, want: string, lang: TargetLang, lex: Lexicon, item: Item): TokVerdict {
  if (got === want) return { v: "ok" };
  const g = got.toLowerCase();
  const w = want.toLowerCase();
  if (g === w) {
    // Only case differs. German nouns: correct, with a note. Elsewhere: correct.
    if (lang === "de" && want[0] !== want[0].toLowerCase()) return { v: "ok", note: "capital" };
    return { v: "ok" };
  }
  if (lang === "de") {
    if (g.replace(/ß/g, "ss") === w.replace(/ß/g, "ss")) return { v: "ok", note: "ss" };
    if (deFold(g) === deFold(w)) return { v: "ok", note: "translit" };
  }
  // e/è, si/sì, da/dà …: a missing accent that changes meaning is "almost" with a specific note
  // (spec §4.8), even though the pair is listed in the lexicon's minimal pairs.
  if (lang === "it" && IT_ACCENT_MEANING.has([stripMarks(w), w].join("|")) && stripMarks(g) === stripMarks(w)) return { v: "almost", reason: "accent-meaning" };
  // French a/à, ou/où, la/là, du/dû, sur/sûr: same rule (they're also closed-class words).
  if (lang === "fr" && (FR_ACCENT_MEANING.has([stripMarks(w), w].join("|")) || FR_ACCENT_MEANING.has([stripMarks(g), g].join("|"))) && stripMarks(g) === stripMarks(w)) return { v: "almost", reason: "accent-meaning" };
  if (lang === "it" && IT_ACCENT_MEANING.has([stripMarks(g), g].join("|")) && stripMarks(g) === stripMarks(w)) return { v: "almost", reason: "accent-meaning" };
  // Portuguese: a missing accent, tilde or cedilla (voce, nao, almoco) is "almost"; when the bare
  // form is another word (e/é, pais/país, por/pôr, avo/avó) the note says the accent changes the
  // meaning. Two different accents (avô/avó) fall through to the minimal-pair rule: wrong.
  if (lang === "pt" && stripMarks(g) === stripMarks(w) && (g === stripMarks(g) || w === stripMarks(w))) {
    const key = (x: string) => [stripMarks(x), x].join("|");
    return { v: "almost", reason: PT_ACCENT_MEANING.has(key(w)) || PT_ACCENT_MEANING.has(key(g)) ? "accent-meaning" : "accent" };
  }
  if (isMinimalPair(bareTok(g), bareTok(w), lex)) return { v: "wrong", reason: "minimal-pair" };
  // "dov e" for "dov'è": the apostrophe dropped, the elided token otherwise right
  if (lang === "it" && want.endsWith("'") && g === w.slice(0, -1)) return { v: "almost", reason: "elision" };
  if (closed(want, lex) || closed(got, lex)) {
    // Elided article/preposition typed in full or vice versa: "lo amico" is not this case (count differs).
    return { v: "wrong", reason: "closed-class" };
  }
  if (lang === "it") {
    // elision: "dove" for "dov'"
    if (want.endsWith("'") && g.length === w.length && /[aeiou]$/.test(g) && g.slice(0, -1) === w.slice(0, -1)) return { v: "almost", reason: "elision" };
    if (stripMarks(g) === stripMarks(w)) {
      const key = [stripMarks(w), w].join("|");
      return { v: "almost", reason: IT_ACCENT_MEANING.has(key) ? "accent-meaning" : "accent" };
    }
    if (collapseDoubles(stripMarks(g)) === collapseDoubles(stripMarks(w))) {
      return item.type === "sound" ? { v: "wrong", reason: "double" } : { v: "almost", reason: "double" };
    }
  }
  if (lang === "de") {
    if (deStrip(g) === deStrip(w)) return { v: "almost", reason: "umlaut" };
  }
  // French: a missing or wrong accent (é/è/ê, à, ç…) is "almost", like Italian.
  if (lang === "fr" && stripMarks(g) === stripMarks(w)) return { v: "almost", reason: "accent" };
  // German verb/adjective endings (wohne/wohnt, spreche/sprechen) are grammar, never a typo.
  if (lang === "de" && endingOnly(deFold(g), deFold(w))) return { v: "wrong", reason: "wrong" };
  // French verb endings (mangé/manger/mangez, serai/serais) are grammar, never a typo.
  if (lang === "fr" && frEndingOnly(stripMarks(g), stripMarks(w), g, w)) return { v: "wrong", reason: "wrong" };
  // Portuguese masculine/feminine (cansado/cansada, obrigado/obrigada): the learner may be talking
  // about themself or someone else, so it's "almost" with a note, never wrong (review 2026-11-23).
  if (lang === "pt" && genderSwap(stripMarks(g), stripMarks(w))) return { v: "almost", reason: "gender" };
  // Portuguese verb and noun endings (falo/fala/falam, falei/falou, livro/livros) are grammar, never a typo.
  if (lang === "pt" && ptEndingOnly(stripMarks(g), stripMarks(w))) return { v: "wrong", reason: "wrong" };
  const base = lang === "de" ? deFold(w) : stripMarks(w);
  const len = [...bareTok(w)].length;
  // Phone typing (owner, 2026-11-22: "still too strict"): one slip from 4 letters, two from 8;
  // swapped neighbours count as one slip. A slip is never forgiven when it lands on another word
  // of the course (the learner may really have confused them) or a listed minimal pair.
  const allowed = len >= 8 ? 2 : len >= 4 ? 1 : 0;
  if (item.type !== "sound") {
    const gg = lang === "de" ? deFold(g) : stripMarks(g);
    const d = osa(gg, base);
    // 4-letter words: a changed letter counts as a slip only if it's a neighbouring key (a phone
    // typo), so "echt" for "acht" stays wrong; dropped, doubled or swapped letters pass.
    const shortSubOk = len >= 5 || d !== 1 || gg.length !== base.length || lev(gg, base) === 2 || neighbourSub(gg, base);
    if (d <= allowed && shortSubOk && !(lang === "it" && IT_SPANISH_SPELLING[g]) && !isOtherCourseWord(g, w, lang)) return { v: "almost", reason: "typo" };
  }
  return { v: "wrong", reason: "wrong" };
}

const DE_ENDINGS = new Set(["", "e", "t", "st", "en", "n", "et", "est", "es", "em", "er"]);
const FR_ENDINGS = ["ais", "ait", "aient", "ai", "ez", "er", "es", "ee", "e", "s", "ent", "ons", "iez", "ions"];
const FR_ACCENT_MEANING = new Set(["a|à", "ou|où", "la|là", "du|dû", "sur|sûr"]);
/** Same French stem, different verb ending (é/er/ez/ais/ait…): grammar. */
function frEndingOnly(g: string, w: string, gRaw: string, wRaw: string): boolean {
  if (g === w && gRaw === wRaw) return false;
  const stem = (s: string) => {
    for (const e of FR_ENDINGS) if (s.length - e.length >= 3 && s.endsWith(e)) return [s.slice(0, -e.length), e] as const;
    return [s, ""] as const;
  };
  const [sg, eg] = stem(g);
  const [sw, ew] = stem(w);
  // mangé vs mange: same letters once accents go, but é ≠ e is an ending, not an accent slip.
  const accentEnding = g === w && /é$/.test(gRaw) !== /é$/.test(wRaw);
  return sg === sw && (eg !== ew || accentEnding);
}
// Portuguese endings, accents stripped, longest first (the stem must keep ≥ 3 letters).
const PT_ENDINGS = [
  "ariamos", "eriamos", "iriamos", "assemos", "essemos", "issemos", "avamos", "aramos", "eramos", "iramos",
  "ariam", "eriam", "iriam", "assem", "essem", "issem", "aria", "eria", "iria", "asse", "esse", "isse",
  "ando", "endo", "indo", "avam", "aram", "eram", "iram", "arem", "erem", "irem", "amos", "emos", "imos",
  "ado", "ido", "ada", "ida", "ava", "iam", "oes", "aes", "ar", "er", "ir", "ei", "ou", "eu", "iu", "am", "em", "ia",
  "ao", "os", "as", "es", "o", "a", "e", "s",
];
const PT_ACCENT_MEANING = new Set([
  "e|é", "a|à", "as|às", "pais|país", "por|pôr", "avo|avô", "avo|avó", "vovo|vovô", "vovo|vovó", "se|sé", "nos|nós",
  "pode|pôde", "esta|está", "da|dá", "mas|más", "pe|pé", "sabia|sábia", "publico|público", "pratica|prática",
  "secretaria|secretária", "baba|babá", "camelo|camelô", "historia|história", "tem|têm", "vem|vêm",
]);
/** Same Portuguese stem, different (non-empty) ending: falo/fala, comprei/comprou, livro/livros. */
/** Same adjective or participle, only -o/-a (or -os/-as) swapped: cansado/cansada, brasileiro/
 *  brasileira, famoso/famosa. Limited to those endings so verb forms (falo/fala) stay grammar. */
const PT_GENDERED = /(ad|id|os|eir|iv|an)(o|a)(s?)$/;
function genderSwap(g: string, w: string): boolean {
  if (g === w || g.length !== w.length || !PT_GENDERED.test(g) || !PT_GENDERED.test(w)) return false;
  return g.replace(PT_GENDERED, "$1_$3") === w.replace(PT_GENDERED, "$1_$3");
}
function ptEndingOnly(g: string, w: string): boolean {
  if (g === w) return false;
  const split = (s: string) => {
    for (const e of PT_ENDINGS) if (s.length - e.length >= 3 && s.endsWith(e)) return [s.slice(0, -e.length), e] as const;
    return [s, ""] as const;
  };
  const [sg, eg] = split(g);
  const [sw, ew] = split(w);
  return sg === sw && eg !== ew && eg !== "" && ew !== "";
}
/** Same stem, only the inflectional ending differs. */
function endingOnly(g: string, w: string): boolean {
  if (g === w) return false;
  let k = 0;
  while (k < g.length && k < w.length && g[k] === w[k]) k++;
  if (k < 3) return false;
  return DE_ENDINGS.has(g.slice(k)) && DE_ENDINGS.has(w.slice(k));
}

function compareSeq(got: string[], want: string[], lang: TargetLang, lex: Lexicon, item: Item): CheckResult | null {
  if (got.length !== want.length) return null;
  let worst: TokVerdict = { v: "ok" };
  let detail: CheckResult["detail"];
  let note: Reason | undefined;
  for (let k = 0; k < want.length; k++) {
    const r = compareToken(got[k], want[k], lang, lex, item);
    if (r.note && !note) note = r.note;
    if (rank(r.v) > rank(worst.v) || (rank(r.v) === rank(worst.v) && r.v !== "ok" && !detail)) {
      if (rank(r.v) > rank(worst.v)) detail = { got: got[k], want: want[k] };
      worst = r;
    }
  }
  if (worst.v === "ok") return { verdict: "correct", reason: "exact", score: 1, note };
  if (worst.v === "almost") return { verdict: "almost", reason: worst.reason, score: SCORE[worst.reason!] ?? 0.85, detail };
  return { verdict: "wrong", reason: worst.reason, score: 0, detail };
}

function expand(tokensIn: string[], table: Record<string, string>): string[] {
  return tokensIn.flatMap((t) => (table[t.toLowerCase()] ? table[t.toLowerCase()].split(" ") : [t]));
}

/** Check a typed answer for an item. */
export function check(input: string, item: Item, opts: CheckOptions): CheckResult {
  const lang = item.lang;
  const lex = opts.lexicon;
  const answer = tidy(input);
  if (!answer) return { verdict: "wrong", reason: "empty", score: 0 };
  const a = answer.toLowerCase();
  const fb = (p?: Partial<Record<BaseLang, string>>) => (p ? p[opts.base] || p.es || p.en : undefined);

  // 1. exact (case-insensitive) on target, accepted alternatives, regional variants
  const exactTargets: { text: string; reason: Reason }[] = [
    { text: item.target, reason: "exact" },
    ...(item.accept ?? []).filter((x) => x.verdict !== "almost").map((x) => ({ text: x.text, reason: "accept" as Reason })),
    ...(item.variants ?? []).filter((x) => !x.dialect).map((x) => ({ text: x.text, reason: "variant" as Reason })),
  ];
  for (const t of exactTargets) {
    if (norm(t.text) === a) {
      // German capitalisation note: correct, but tell them.
      const capNote = lang === "de" && tidy(t.text) !== answer && hasLoweredNoun(answer, tidy(t.text), item) ? "capital" : undefined;
      return { verdict: "correct", reason: t.reason, score: 1, note: capNote };
    }
  }
  // English: contracted and full forms are the same answer ("I'm" = "I am", "don't" = "do not");
  // a contraction typed without its apostrophe ("dont", "im") is "almost".
  if (lang === "en") {
    for (const t of exactTargets) {
      if (enFull(answer) === enFull(t.text)) return { verdict: "correct", reason: t.reason, score: 1 };
      if (enFull(answer, true) === enFull(t.text)) return { verdict: "almost", reason: "elision", score: SCORE.elision!, detail: { got: answer, want: tidy(t.text) } };
    }
  }
  // 2. known errors
  for (const e of item.errors ?? []) if (norm(e.text) === a) return { verdict: "wrong", reason: "known-error", score: 0, feedback: fb(e.feedback), ruleId: e.ruleId };
  // 3. accepted-but-almost alternatives
  for (const x of item.accept ?? []) if (x.verdict === "almost" && norm(x.text) === a) return { verdict: "almost", reason: "accept", score: SCORE.accept!, feedback: fb(x.feedback) };

  // 4. token-level comparison against every correct form; keep the best result
  const candidates = exactTargets.map((t) => tidy(t.text));
  let best: CheckResult | null = null;
  const consider = (r: CheckResult | null) => {
    if (!r) return;
    if (!best || r.score > best.score) best = r;
  };
  const gotToks = tokens(answer);
  for (const c of candidates) {
    const wantToks = tokens(c);
    consider(compareSeq(gotToks, wantToks, lang, lex, item));

    // Elision typed without apostrophe: "l amico", "lamico", "dove è" (Italian); "l eau", "jai" (French)
    if ((lang === "it" || lang === "fr") && c.includes("'")) {
      const squash = (s: string) => s.toLowerCase().replace(/['\s]/g, "");
      if (squash(answer) === squash(c)) consider({ verdict: "almost", reason: "elision", score: SCORE.elision!, detail: { got: answer, want: c } });
      const dovE = c.toLowerCase().replace(/(\w)'(?=[aeiouèéìòù])/g, (_m, ch) => ch + " ");
      if (norm(dovE) === a) consider({ verdict: "almost", reason: "elision", score: SCORE.elision!, detail: { got: answer, want: c } });
    }

    // Contractions: uncontracted form typed
    const table = lang === "it" ? IT_CONTRACTIONS : lang === "fr" ? FR_CONTRACTIONS : lang === "de" ? DE_CONTRACTIONS : lang === "pt" ? PT_CONTRACTIONS : {};
    const expandedWant = expand(wantToks, table);
    if (expandedWant.length !== wantToks.length && gotToks.length === expandedWant.length) {
      const r = compareSeq(gotToks, expandedWant, lang, lex, item);
      if (r && r.verdict === "correct") {
        const contracted = wantToks.find((t) => table[t.toLowerCase()]) ?? "";
        const res: CheckResult =
          lang === "it" || lang === "fr" || lang === "pt"
            ? { verdict: "wrong", reason: "contraction", score: 0, detail: { got: table[contracted.toLowerCase()], want: contracted } }
            : { verdict: "almost", reason: "contraction", score: SCORE.contraction!, detail: { got: table[contracted.toLowerCase()], want: contracted } };
        if (!best || best.verdict === "wrong") best = res;
      }
    }

    // Missing article: answer = target minus a leading closed-class token
    if (gotToks.length === wantToks.length - 1 && wantToks.length >= 2 && closed(wantToks[0], lex)) {
      const r = compareSeq(gotToks, wantToks.slice(1), lang, lex, item);
      if (r && r.verdict !== "wrong") {
        const miss: CheckResult =
          lang === "it"
            ? { verdict: "almost", reason: "article-missing", score: SCORE["article-missing"]!, detail: { got: "", want: wantToks[0] } }
            : { verdict: "wrong", reason: "article-missing", score: 0, detail: { got: "", want: wantToks[0] } };
        if (!best || best.score < miss.score || (best.verdict === "wrong" && miss.verdict === "wrong")) best = miss;
      }
    }

    // Word order: same words, different order → wrong (unless listed in accept)
    if (gotToks.length === wantToks.length && gotToks.length > 1) {
      const sorted = (x: string[]) => [...x].map((t) => t.toLowerCase()).sort().join(" ");
      if (sorted(gotToks) === sorted(wantToks) && (!best || best.verdict === "wrong")) best = { verdict: "wrong", reason: "order", score: 0 };
    }
  }
  const b0 = best as CheckResult | null;
  if (!b0 || b0.verdict !== "correct") {
    // tu/Lei, du/Sie: the wrong register is a wrong answer with a specific note, even when the
    // forms are a letter apart (Scusa/Scusi, Parli/Parla).
    const reg = registerMismatch(answer, item);
    if (reg) return { verdict: "wrong", reason: "register", score: 0, detail: { got: reg.got, want: reg.want } };
  }
  if (!b0 || b0.verdict === "wrong") {
    if (lang === "it") {
      const want = new Set(tokens(item.target.toLowerCase()));
      for (const g of tokens(a)) {
        const fix = IT_SPANISH_SPELLING[g];
        if (fix && want.has(fix)) return { verdict: "wrong", reason: "spanish", score: 0, detail: { got: g, want: fix } };
      }
    }
  }
  if (best) return best;
  return { verdict: "wrong", reason: "wrong", score: 0 };
}

/** German: did the learner lowercase a capitalised word (a noun, or "Sie")? First word of a
 *  sentence only counts when the item itself is a noun. */
function hasLoweredNoun(answer: string, target: string, item: Item): boolean {
  const at = tokens(answer);
  const tt = tokens(target);
  const isUpper = (t: string) => !!t && t[0] !== t[0].toLowerCase();
  return tt.some((t, k) => isUpper(t) && at[k] !== undefined && !isUpper(at[k]) && (k > 0 || item.pos === "noun"));
}

const INFORMAL: Record<TargetLang, string[]> = {
  de: ["du", "dich", "dir", "dein", "deine", "deinen", "deinem", "bist", "hast", "kommst", "wohnst", "sprichst", "heißt", "heisst"],
  it: ["tu", "ti", "te", "tuo", "tua", "sei", "hai", "stai", "chiami", "parli", "puoi", "vieni", "abiti", "scusa"],
  fr: ["tu", "toi", "ton", "ta", "tes", "te", "t'"],
  en: [],
  pt: ["você", "vocês", "tu", "contigo"],
};
const FORMAL: Record<TargetLang, string[]> = {
  de: ["Sie", "Ihnen", "Ihr", "Ihre"],
  it: ["Lei", "Le", "Suo", "Sua", "sta", "chiama", "parla", "può", "viene", "abita", "scusi"],
  fr: ["vous", "votre", "vos"],
  en: [],
  // Brazilian "você" is the everyday "you"; formal is "o senhor / a senhora".
  pt: ["senhor", "senhora", "senhores", "senhoras"],
};
const IT_SPANISH_SPELLING: Record<string, string> = { chao: "ciao", mucho: "molto", gracias: "grazie", bueno: "buono", buena: "buona" };

/** du/tu where the item is formal (or Sie/Lei where it is informal). */
function registerMismatch(answer: string, item: Item): { got: string; want: string } | null {
  if (!item.register) return null;
  const got = tokens(answer).map(bareTok);
  const want = tokens(item.target).map(bareTok);
  const lang = item.lang;
  if (item.register === "formal") {
    const hit = got.find((g) => INFORMAL[lang].includes(g.toLowerCase()) && !want.some((w) => w.toLowerCase() === g.toLowerCase()));
    if (hit) return { got: hit, want: { de: "Sie", it: "Lei", fr: "vous", en: "you", pt: "o senhor / a senhora" }[lang] };
  } else {
    // Capitalised pronouns compare case-sensitively (German "sie" = she/they, Italian "lei" = she,
    // "le" = the); lowercase verb forms (sta, parla, scusi) compare case-insensitively.
    const same = (f: string, g: string) => (f[0] === f[0].toLowerCase() ? f === g.toLowerCase() : f === g);
    const hit = got.find((g) => FORMAL[lang].some((f) => same(f, g)) && !want.some((w) => w.toLowerCase() === g.toLowerCase()));
    if (hit) return { got: hit, want: { de: "du", it: "tu", fr: "tu", en: "you", pt: "você" }[lang] };
  }
  return null;
}

/** Normalise an answer for caches and comparisons. */
export function answerKey(s: string): string {
  return norm(s);
}
