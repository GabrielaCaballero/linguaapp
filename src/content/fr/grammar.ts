import type { GrammarPoint } from "../schema";
import { grammar1 } from "./grammar1";
import { grammar2 } from "./grammar2";
import { grammar3 } from "./grammar3";
import { grammar4 } from "./grammar4";
import { grammar5 } from "./grammar5";

// Grammar points (content v2.1): the rule as a textbook states it, how to work the form out,
// the table, examples, and the classic mistake. Items link to them through `grammar` / `ruleId`.
const core: GrammarPoint[] = [
  {
    id: "fr-g-etre",
    lang: "fr",
    cefr: "A1.1",
    title: { es: "«être» en presente", en: "être: present tense" },
    short: {
      es: "je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. Sirve para «ser» y para «estar».",
      en: "je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
    },
    rule: {
      es: "«être» es irregular y se aprende de memoria. Traduce tanto «ser» como «estar»: je suis médecin, je suis fatigué/e. También es el auxiliar del passé composé de algunos verbos (je suis allé/e).",
      en: "être (to be) is irregular and learnt by heart. It is also the auxiliary of the passé composé for some verbs (je suis allé/e).",
    },
    steps: [
      { es: "¿Ser o estar? En los dos casos: être.", en: "To be? → être." },
      { es: "Pon siempre el pronombre sujeto: en francés no se omite.", en: "Always say the subject pronoun: French never drops it." },
      { es: "Elige la forma de la persona: je suis, tu es…", en: "Pick the form for the person: je suis, tu es…" },
    ],
    table: {
      head: ["", "être"],
      rows: [["je", "suis"], ["tu", "es"], ["il / elle / on", "est"], ["nous", "sommes"], ["vous", "êtes"], ["ils / elles", "sont"]],
    },
    examples: [
      { target: "Je suis mexicaine.", gloss: { es: "Soy mexicana.", en: "I'm Mexican." } },
      { target: "Vous êtes d'où ?", gloss: { es: "¿De dónde es usted?", en: "Where are you from?" } },
      { target: "Nous sommes fatigués.", gloss: { es: "Estamos cansados.", en: "We're tired." } },
    ],
    pitfalls: {
      es: "La edad va con «avoir», no con «être»: j'ai trente ans. Y no omitas el sujeto: «Suis espagnol» es incorrecto.",
      en: "Age uses avoir, not être: j'ai trente ans (not 'je suis trente').",
    },
  },
  {
    id: "fr-g-contractions",
    lang: "fr",
    cefr: "A1.1",
    title: { es: "Contracciones: au, aux, du, des", en: "Contractions: au, aux, du, des" },
    short: {
      es: "à + le = au, à + les = aux, de + le = du, de + les = des. Con la y l' no cambian.",
      en: "à + le = au, à + les = aux, de + le = du, de + les = des. No change with la and l'.",
    },
    rule: {
      es: "Las preposiciones à y de se unen con los artículos le y les, como «a + el = al» en español, pero también en plural. Con la y l' se escriben separadas: à la gare, de l'école.",
      en: "The prepositions à and de merge with the articles le and les. With la and l' they stay separate: à la gare, de l'école.",
    },
    steps: [
      { es: "Pon el artículo del sustantivo: le parc, la gare, l'hôtel, les magasins.", en: "Put the noun's article: le parc, la gare, l'hôtel, les magasins." },
      { es: "Si es le o les, únelo: au parc, aux magasins, du parc, des magasins.", en: "If it's le or les, merge it: au parc, aux magasins, du parc, des magasins." },
      { es: "Si es la o l', no cambies nada: à la gare, de l'hôtel.", en: "If it's la or l', change nothing: à la gare, de l'hôtel." },
    ],
    table: {
      head: ["", "à", "de"],
      rows: [["le", "au", "du"], ["la", "à la", "de la"], ["l'", "à l'", "de l'"], ["les", "aux", "des"]],
    },
    examples: [
      { target: "Je vais au cinéma.", gloss: { es: "Voy al cine.", en: "I'm going to the cinema." } },
      { target: "C'est le livre du professeur.", gloss: { es: "Es el libro del profesor.", en: "It's the teacher's book." } },
      { target: "Je parle aux enfants.", gloss: { es: "Les hablo a los niños.", en: "I'm talking to the children." } },
    ],
    pitfalls: {
      es: "«à le» y «de le» nunca existen. Y «des» puede ser «de + les» (la mère des enfants) o el plural de «un» (des enfants = unos niños).",
      en: "'à le' and 'de le' never occur. And 'des' can be 'de + les' (la mère des enfants) or the plural of 'un' (des enfants = some children).",
    },
  },
];

// Units 1–8, 9–16, 17–24, 25–30 (C1) and 31–36 (C2) (one card per grammar pattern).
export const grammar: GrammarPoint[] = [...core, ...grammar1, ...grammar2, ...grammar3, ...grammar4, ...grammar5];
