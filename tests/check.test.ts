// Golden checker cases from docs/team/06-linguist.md §5 and spec §4.8 / CUJ-6.
import { describe, expect, it } from "vitest";
import { check } from "@/lib/check";
import type { Item } from "@/content/schema";
import { deCourse, itCourse } from "./fixtures/mini-course";

const all = [...itCourse.units, ...deCourse.units].flatMap((u) => u.items);
const byId = (id: string) => {
  const i = all.find((x) => x.id === id);
  if (!i) throw new Error(id);
  return i;
};
const make = (lang: "it" | "de", target: string, extra: Partial<Item> = {}): Item => ({
  id: `${lang}-x-${target}`,
  lang,
  unit: `${lang}-u01`,
  type: "word",
  cefr: "A1.1",
  target,
  gloss: { es: "x", en: "x" },
  spoken: target,
  tags: [],
  ...extra,
});

type Case = [string, Item, string, "correct" | "almost" | "wrong", string?];

const it_ = (id: string) => byId(id);

const cases: Case[] = [
  // ── Italian: normalisation ──
  ["exact", it_("it-u01-ciao"), "ciao", "correct"],
  ["case", it_("it-u01-ciao"), "Ciao", "correct"],
  ["final punctuation", it_("it-u01-ciao"), "ciao!", "correct"],
  ["spaces", it_("it-u01-grazie"), "  grazie   mille ", "correct"],
  ["accept alt", it_("it-u01-grazie"), "grazie", "correct", "accept"],
  ["curly apostrophe", it_("it-u02-amico"), "l’amico", "correct"],
  ["question marks ¿", it_("it-u02-dove"), "¿dov'è il bar?", "correct"],
  // accents
  ["citta → almost accent (CUJ-6)", it_("it-u01-citta"), "citta", "almost", "accent"],
  ["wrong accent direction", it_("it-u01-citta"), "cittá", "almost", "accent"],
  ["perche", it_("it-u01-perche"), "perche", "almost", "accent"],
  ["perchè (wrong accent)", it_("it-u01-perche"), "perchè", "almost", "accent"],
  ["il caffe", it_("it-u02-caffe"), "il caffe", "almost", "accent"],
  ["e for è: specific note", it_("it-u02-italiana"), "Lei e italiana", "almost", "accent-meaning"],
  // doubles and minimal pairs
  ["nono for nonno is not correct (CUJ-6)", it_("it-u01-nonno"), "nono", "wrong", "minimal-pair"],
  ["nonno exact", it_("it-u01-nonno"), "nonno", "correct"],
  ["single consonant in word → almost double", make("it", "mamma"), "mama", "almost", "double"],
  ["double consonant in sound item → wrong", make("it", "palla", { type: "sound" }), "pala", "wrong"],
  ["triple typo in sound item → wrong", it_("it-u01-nonno"), "nonnno", "wrong"],
  ["fatto/fato almost double", make("it", "fatto"), "fato", "almost", "double"],
  // articles & closed class
  ["la zio is wrong (CUJ-6)", it_("it-u02-zio"), "la zio", "wrong", "closed-class"],
  ["il zio is wrong", it_("it-u02-zio"), "il zio", "wrong", "closed-class"],
  ["i nonno wrong", make("it", "il nonno"), "i nonno", "wrong"],
  ["missing article Italian → almost", it_("it-u02-caffe"), "caffè", "almost", "article-missing"],
  ["missing article zio → almost", it_("it-u02-zio"), "zio", "almost", "article-missing"],
  ["lo amico is wrong", it_("it-u02-amico"), "lo amico", "wrong"],
  // elision
  ["l amico → almost elision", it_("it-u02-amico"), "l amico", "almost", "elision"],
  ["lamico → almost elision", it_("it-u02-amico"), "lamico", "almost", "elision"],
  ["dove è → almost elision", it_("it-u02-dove"), "dove è il bar", "almost", "elision"],
  ["dov è → almost elision", it_("it-u02-dove"), "dov è il bar?", "almost", "elision"],
  // contractions
  ["di il for del → wrong", it_("it-u02-del"), "il libro di il nonno", "wrong", "contraction"],
  ["del exact", it_("it-u02-del"), "il libro del nonno", "correct"],
  // known errors & alternatives
  ["ho andato → wrong with note", it_("it-u02-andato"), "ho andato al bar", "wrong", "known-error"],
  ["sono andata accepted", it_("it-u02-andato"), "sono andata al bar", "correct"],
  ["sono andato exact", it_("it-u02-andato"), "Sono andato al bar.", "correct"],
  ["word order Italian → wrong", it_("it-u02-andato"), "al bar sono andato", "wrong"],
  // typos on open-class only
  ["typo in long word", make("it", "buongiorno"), "buongiormo", "almost", "typo"],
  ["typo in short word not allowed", make("it", "pane"), "pana", "wrong"],
  ["two typos in 10+ letter word", make("it", "informazione"), "imformazone", "almost", "typo"],
  ["three typos → wrong", make("it", "informazione"), "imformasone x", "wrong"],
  ["sono → ho (auxiliary) wrong", it_("it-u02-andato"), "ho andato al bar", "wrong"],
  ["empty", it_("it-u01-ciao"), "   ", "wrong", "empty"],
  ["totally wrong", it_("it-u01-ciao"), "arrivederci", "wrong"],

  // ── German ──
  ["heisse is correct (CUJ-6)", byId("de-u01-heisse"), "Ich heisse Lena", "correct"],
  ["heiße exact", byId("de-u01-heisse"), "ich heiße Lena", "correct"],
  ["schon for schön is wrong (CUJ-6)", byId("de-u01-schoen"), "schon", "wrong", "minimal-pair"],
  ["schoen translit correct", byId("de-u01-schoen"), "schoen", "correct"],
  ["zahlen vs zählen minimal pair", make("de", "zählen", { pos: "verb" }), "zahlen", "wrong", "minimal-pair"],
  ["Stadt vs Staat minimal pair", make("de", "die Stadt", { pos: "noun" }), "die Staat", "wrong"],
  ["missing umlaut not a pair → almost", make("de", "Mädchen", { pos: "noun" }), "Madchen", "almost", "umlaut"],
  ["missing umlaut in Tschüss → almost", byId("de-u01-tschuess"), "Tschuss", "almost", "umlaut"],
  ["ae translit for ä → correct", make("de", "Mädchen", { pos: "noun" }), "Maedchen", "correct"],
  ["Tschüs accepted", byId("de-u01-tschuess"), "Tschüs", "correct"],
  ["lowercase noun correct with note (CUJ-6)", byId("de-u02-kaffee"), "der kaffee", "correct"],
  ["lowercase all", byId("de-u02-milch"), "die milch", "correct"],
  ["wrong article der/die", byId("de-u02-milch"), "der Milch", "wrong", "closed-class"],
  ["das Brot vs die Brot", byId("de-u02-brot"), "die Brot", "wrong"],
  ["missing article German → wrong", byId("de-u02-kaffee"), "Kaffee", "wrong", "article-missing"],
  ["ein Kaffee, bitte is almost with note (CUJ-6)", byId("de-u02-einen"), "ein Kaffee, bitte", "almost", "accept"],
  ["einen Kaffee bitte (no comma)", byId("de-u02-einen"), "einen Kaffee bitte", "correct"],
  ["einem Kaffee wrong", byId("de-u02-einen"), "einem Kaffee, bitte", "wrong"],
  ["in dem Kino → almost contraction", byId("de-u02-kino"), "in dem Kino", "almost", "contraction"],
  ["im Kino exact", byId("de-u02-kino"), "im Kino", "correct"],
  ["regional variant Grüß Gott", byId("de-u01-gruess"), "Grüß Gott", "correct", "variant"],
  ["regional variant Grüezi", byId("de-u01-gruess"), "grüezi", "correct"],
  ["Grüss Gott (ss)", byId("de-u01-gruess"), "Grüss Gott", "correct"],
  ["typo Kafee", byId("de-u02-kaffee"), "der Kafee", "almost", "typo"],
  ["German word order wrong", byId("de-u01-heisse"), "Ich Lena heiße", "wrong", "order"],
  ["Sie lowercased still correct", byId("de-u01-sie"), "wie heißen sie", "correct"],
  ["du for Sie → wrong", byId("de-u01-sie"), "wie heißt du", "wrong"],
  ["hallo lowercase correct", byId("de-u01-hallo"), "hallo", "correct"],
  ["Entschuldigung typo x2", make("de", "Entschuldigung"), "Entschuldigun", "almost", "typo"],
  ["short word typo not allowed", make("de", "Brot"), "Brod", "wrong"],
];

describe("checker golden set", () => {
  it("has at least 60 cases", () => expect(cases.length).toBeGreaterThanOrEqual(60));
  for (const [name, item, answer, verdict, reason] of cases) {
    it(`${item.lang}: ${name}`, () => {
      const lex = item.lang === "it" ? itCourse.lexicon : deCourse.lexicon;
      const r = check(answer, item, { lexicon: lex, base: item.lang === "it" ? "es" : "en" });
      expect(r.verdict, JSON.stringify(r)).toBe(verdict);
      if (reason) expect(r.reason, JSON.stringify(r)).toBe(reason);
    });
  }

  it("capital note on lowercase German noun", () => {
    const r = check("der kaffee", byId("de-u02-kaffee"), { lexicon: deCourse.lexicon, base: "en" });
    expect(r.note).toBe("capital");
  });
  it("known error returns targeted feedback in the explain-in language", () => {
    const r = check("ho andato al bar", byId("it-u02-andato"), { lexicon: itCourse.lexicon, base: "es" });
    expect(r.feedback).toMatch(/sono andato/);
  });
  it("almost-accept returns its feedback", () => {
    const r = check("ein Kaffee, bitte", byId("de-u02-einen"), { lexicon: deCourse.lexicon, base: "en" });
    expect(r.feedback).toMatch(/accusative/);
  });
  it("almost has a score between 0 and 1", () => {
    const r = check("citta", byId("it-u01-citta"), { lexicon: itCourse.lexicon, base: "es" });
    expect(r.score).toBeGreaterThan(0);
    expect(r.score).toBeLessThan(1);
  });
});
