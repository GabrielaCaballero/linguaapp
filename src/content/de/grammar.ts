import type { GrammarPoint } from "../schema";

// Grammar points (content v2.1): the rule as a textbook states it, how to work the form out,
// the table, examples, and the classic mistake. Items link to them through `grammar` / `ruleId`.
export const grammar: GrammarPoint[] = [
  {
    id: "de-g-praesens",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Presente: verbos regulares", en: "Present tense: regular verbs" },
    short: {
      es: "Raíz + terminación: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      en: "Stem + ending: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
    },
    rule: {
      es: "Para el presente, quita -en al infinitivo (komm-en → komm-) y añade la terminación de la persona. Casi todos los verbos regulares usan las mismas terminaciones.",
      en: "For the present tense, drop -en from the infinitive (komm-en → komm-) and add the ending for the person. Almost all regular verbs use the same endings.",
    },
    steps: [
      { es: "Busca la raíz: el infinitivo sin -en (kommen → komm-).", en: "Find the stem: the infinitive without -en (kommen → komm-)." },
      { es: "¿Quién hace la acción? Elige la persona.", en: "Who is doing it? Pick the person." },
      { es: "Añade su terminación: -e, -st, -t, -en, -t, -en.", en: "Add its ending: -e, -st, -t, -en, -t, -en." },
      { es: "Si la raíz termina en -t o -d, pon una -e- antes de -st y -t: du arbeitest, er findet.", en: "If the stem ends in -t or -d, add an -e- before -st and -t: du arbeitest, er findet." },
    ],
    table: {
      head: ["", "kommen", "wohnen"],
      rows: [
        ["ich", "komme", "wohne"],
        ["du", "kommst", "wohnst"],
        ["er / sie / es", "kommt", "wohnt"],
        ["wir", "kommen", "wohnen"],
        ["ihr", "kommt", "wohnt"],
        ["sie / Sie", "kommen", "wohnen"],
      ],
    },
    examples: [
      { target: "Ich komme aus Spanien.", gloss: { es: "Soy de España.", en: "I'm from Spain." } },
      { target: "Woher kommst du?", gloss: { es: "¿De dónde eres?", en: "Where are you from?" } },
      { target: "Wir wohnen in Hamburg.", gloss: { es: "Vivimos en Hamburgo.", en: "We live in Hamburg." } },
    ],
    pitfalls: {
      es: "Con «du» la terminación es -st: du kommst. «du kommt» es un error frecuente: -t es la forma de er/sie/es y de ihr.",
      en: "With du the ending is -st: du kommst. 'du kommt' is a common mistake: -t is the er/sie/es and ihr form.",
    },
  },
  {
    id: "de-g-possessiv",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Posesivos: mein, meine, meinen", en: "Possessives: mein, meine, meinen" },
    short: {
      es: "mein- lleva las terminaciones de ein: en plural, nominativo y acusativo = meine; meinen = acusativo masculino singular.",
      en: "mein- takes the endings of ein: plural nominative and accusative = meine; meinen = accusative masculine singular.",
    },
    rule: {
      es: "Los posesivos (mein, dein, sein, ihr, unser…) llevan las mismas terminaciones que ein/eine, y en plural las de die. La terminación depende del género, del número y del caso, es decir, de la función de la palabra en la frase.",
      en: "Possessives (mein, dein, sein, ihr, unser…) take the same endings as ein/eine, and in the plural those of die. The ending depends on gender, number and case, i.e. the word's job in the sentence.",
    },
    steps: [
      { es: "¿A qué sustantivo acompaña? Mira su género o si es plural.", en: "Which noun does it go with? Check its gender, or whether it is plural." },
      { es: "¿Qué función tiene? Sujeto → nominativo; objeto directo → acusativo.", en: "What job does it do? Subject → nominative; direct object → accusative." },
      { es: "Busca la casilla en la tabla.", en: "Find the cell in the table." },
      { es: "Plural en nominativo o acusativo: siempre meine (meine Brüder).", en: "Plural in the nominative or accusative: always meine (meine Brüder)." },
    ],
    table: {
      head: ["", "m", "f", "n", "Plural"],
      rows: [
        ["Nominativ", "mein", "meine", "mein", "meine"],
        ["Akkusativ", "meinen", "meine", "mein", "meine"],
        ["Dativ", "meinem", "meiner", "meinem", "meinen"],
      ],
    },
    examples: [
      { target: "Das ist mein Bruder.", gloss: { es: "Este es mi hermano.", en: "This is my brother." } },
      { target: "Ich besuche meinen Bruder.", gloss: { es: "Visito a mi hermano.", en: "I'm visiting my brother." } },
      { target: "Ich besuche meine Brüder.", gloss: { es: "Visito a mis hermanos.", en: "I'm visiting my brothers." } },
      { target: "Ich helfe meinen Brüdern.", gloss: { es: "Ayudo a mis hermanos.", en: "I'm helping my brothers." } },
    ],
    pitfalls: {
      es: "«meinen Brüder» mezcla dos casillas: meinen es acusativo masculino singular (meinen Bruder) o dativo plural, y entonces el sustantivo también lleva -n (meinen Brüdern). Brüder como objeto directo: meine Brüder.",
      en: "'meinen Brüder' mixes two cells: meinen is accusative masculine singular (meinen Bruder) or dative plural, where the noun also takes -n (meinen Brüdern). Brüder as a direct object: meine Brüder.",
    },
  },
];
