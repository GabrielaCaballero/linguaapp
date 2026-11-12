// Answer checker v2 — strict about grammar, kind about phone typing.
// Rules: docs/team/10-spec.md §4.8 and docs/team/06-linguist.md §5.
// Fuzziness applies ONLY to open-class tokens; closed-class words (articles, prepositions,
// pronouns, auxiliaries) must match exactly, and a typo may never bridge a minimal pair.
import type { BaseLang, Item, Lexicon, TargetLang } from "@/content/schema";

export type Reason =
  | "exact"
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

const IT_ACCENT_MEANING = new Set(["e|è", "si|sì", "da|dà", "la|là", "li|lì", "ne|né", "se|sé"]);

const IT_CONTRACTIONS: Record<string, string> = {
  del: "di il", dello: "di lo", della: "di la", dei: "di i", degli: "di gli", delle: "di le",
  al: "a il", allo: "a lo", alla: "a la", ai: "a i", agli: "a gli", alle: "a le",
  dal: "da il", dallo: "da lo", dalla: "da la", dai: "da i", dagli: "da gli", dalle: "da le",
  nel: "in il", nello: "in lo", nella: "in la", nei: "in i", negli: "in gli", nelle: "in le",
  sul: "su il", sullo: "su lo", sulla: "su la", sui: "su i", sugli: "su gli", sulle: "su le",
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
  if (isMinimalPair(bareTok(g), bareTok(w), lex)) return { v: "wrong", reason: "minimal-pair" };
  if (lang === "it" && IT_ACCENT_MEANING.has([stripMarks(w), w].join("|")) && stripMarks(g) === stripMarks(w)) return { v: "almost", reason: "accent-meaning" };
  if (lang === "it" && IT_ACCENT_MEANING.has([stripMarks(g), g].join("|")) && stripMarks(g) === stripMarks(w)) return { v: "almost", reason: "accent-meaning" };
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
  const base = lang === "de" ? deFold(w) : stripMarks(w);
  const len = [...bareTok(w)].length;
  const allowed = len >= 10 ? 2 : len >= 5 ? 1 : 0;
  if (allowed > 0 && item.type !== "sound") {
    const d = lev(lang === "de" ? deFold(g) : stripMarks(g), base);
    if (d <= allowed) return { v: "almost", reason: "typo" };
  }
  return { v: "wrong", reason: "wrong" };
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
    ...(item.variants ?? []).map((x) => ({ text: x.text, reason: "variant" as Reason })),
  ];
  for (const t of exactTargets) {
    if (norm(t.text) === a) {
      // German capitalisation note: correct, but tell them.
      const capNote = lang === "de" && tidy(t.text) !== answer && hasLoweredNoun(answer, tidy(t.text), item) ? "capital" : undefined;
      return { verdict: "correct", reason: t.reason, score: 1, note: capNote };
    }
  }
  // 2. known errors
  for (const e of item.errors ?? []) if (norm(e.text) === a) return { verdict: "wrong", reason: "known-error", score: 0, feedback: fb(e.feedback) };
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

    // Italian elision typed without apostrophe: "l amico", "lamico", "dove è"
    if (lang === "it" && c.includes("'")) {
      const squash = (s: string) => s.toLowerCase().replace(/['\s]/g, "");
      if (squash(answer) === squash(c)) consider({ verdict: "almost", reason: "elision", score: SCORE.elision!, detail: { got: answer, want: c } });
      const dovE = c.toLowerCase().replace(/(\w)'(?=[aeiouèéìòù])/g, (_m, ch) => ch + " ");
      if (norm(dovE) === a) consider({ verdict: "almost", reason: "elision", score: SCORE.elision!, detail: { got: answer, want: c } });
    }

    // Contractions: uncontracted form typed
    const table = lang === "it" ? IT_CONTRACTIONS : DE_CONTRACTIONS;
    const expandedWant = expand(wantToks, table);
    if (expandedWant.length !== wantToks.length && gotToks.length === expandedWant.length) {
      const r = compareSeq(gotToks, expandedWant, lang, lex, item);
      if (r && r.verdict === "correct") {
        const contracted = wantToks.find((t) => table[t.toLowerCase()]) ?? "";
        const res: CheckResult =
          lang === "it"
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
  if (!b0 || b0.verdict === "wrong") {
    const reg = registerMismatch(answer, item);
    if (reg) return { verdict: "wrong", reason: "register", score: 0, detail: { got: reg.got, want: reg.want } };
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

const INFORMAL: Record<TargetLang, string[]> = { de: ["du", "dich", "dir", "dein", "deine", "deinen", "deinem", "bist", "hast"], it: ["tu", "ti", "te", "tuo", "tua", "sei", "hai", "stai"] };
const FORMAL: Record<TargetLang, string[]> = { de: ["Sie", "Ihnen", "Ihr", "Ihre"], it: ["Lei", "Le", "Suo", "Sua"] };
const IT_SPANISH_SPELLING: Record<string, string> = { chao: "ciao", mucho: "molto", gracias: "grazie", bueno: "buono", buena: "buona" };

/** du/tu where the item is formal (or Sie/Lei where it is informal). */
function registerMismatch(answer: string, item: Item): { got: string; want: string } | null {
  if (!item.register) return null;
  const got = tokens(answer).map(bareTok);
  const want = tokens(item.target).map(bareTok);
  const lang = item.lang;
  if (item.register === "formal") {
    const hit = got.find((g) => INFORMAL[lang].includes(g.toLowerCase()) && !want.some((w) => w.toLowerCase() === g.toLowerCase()));
    if (hit) return { got: hit, want: lang === "de" ? "Sie" : "Lei" };
  } else {
    // case matters: German "sie" (she/they) is not formal; Italian "lei" lowercase is "she"
    const hit = got.find((g) => FORMAL[lang].includes(g) && !want.includes(g));
    if (hit) return { got: hit, want: lang === "de" ? "du" : "tu" };
  }
  return null;
}

/** Normalise an answer for caches and comparisons. */
export function answerKey(s: string): string {
  return norm(s);
}
