import type { GrammarPoint } from "../schema";

// Grammar points (content v2.1): the rule as a textbook states it, how to work the form out,
// the table, examples, and the classic mistake. Items link to them through `grammar` / `ruleId`.
export const grammar: GrammarPoint[] = [
  {
    id: "it-g-essere-avere",
    lang: "it",
    cefr: "A1.1",
    title: { es: "essere y avere: presente", en: "essere and avere: present tense" },
    short: {
      es: "essere: sono, sei, è, siamo, siete, sono · avere: ho, hai, ha, abbiamo, avete, hanno (la h no suena).",
      en: "essere: sono, sei, è, siamo, siete, sono · avere: ho, hai, ha, abbiamo, avete, hanno (the h is silent).",
    },
    rule: {
      es: "essere (ser/estar) y avere (tener/haber) son irregulares: sus formas se aprenden de memoria. También son los auxiliares del passato prossimo (sono andata, ho mangiato).",
      en: "essere (to be) and avere (to have) are irregular: their forms are learnt by heart. They are also the auxiliaries of the passato prossimo (sono andata, ho mangiato).",
    },
    steps: [
      { es: "¿Ser/estar o tener? → essere o avere.", en: "To be or to have? → essere or avere." },
      { es: "Elige la persona (io, tu, lui/lei…).", en: "Pick the person (io, tu, lui/lei…)." },
      { es: "Cuida la ortografía: è lleva acento; ho, hai, ha, hanno llevan una h que no suena.", en: "Mind the spelling: è has an accent; ho, hai, ha, hanno have a silent h." },
    ],
    table: {
      head: ["", "essere", "avere"],
      rows: [
        ["io", "sono", "ho"],
        ["tu", "sei", "hai"],
        ["lui / lei / Lei", "è", "ha"],
        ["noi", "siamo", "abbiamo"],
        ["voi", "siete", "avete"],
        ["loro", "sono", "hanno"],
      ],
    },
    examples: [
      { target: "Sono spagnola.", gloss: { es: "Soy española.", en: "I'm Spanish." } },
      { target: "Hai fratelli?", gloss: { es: "¿Tienes hermanos?", en: "Do you have brothers and sisters?" } },
      { target: "Lei è di Roma.", gloss: { es: "Ella es de Roma.", en: "She is from Rome." } },
      { target: "Ho trent'anni.", gloss: { es: "Tengo treinta años.", en: "I'm thirty." } },
    ],
    pitfalls: {
      es: "La edad va con avere, como en español: ho trent'anni. Y «è» con acento es el verbo; «e» sin acento es «y».",
      en: "Age uses avere: ho trent'anni (not 'sono'). And è with an accent is the verb; e without it means 'and'.",
    },
  },
  {
    id: "it-g-prep-art",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Preposiciones articuladas: di + artículo", en: "Articulated prepositions: di + article" },
    short: {
      es: "di + artículo forma una sola palabra: del, dello, della, dell', dei, degli, delle (como de + el = del).",
      en: "di + article become one word: del, dello, della, dell', dei, degli, delle.",
    },
    rule: {
      es: "Las preposiciones di, a, da, in y su se unen al artículo definido que va detrás. La forma sigue al artículo: di + il = del, di + lo = dello, di + la = della, di + l' = dell', di + i = dei, di + gli = degli, di + le = delle.",
      en: "The prepositions di, a, da, in and su merge with the definite article that follows. The form follows the article: di + il = del, di + lo = dello, di + la = della, di + l' = dell', di + i = dei, di + gli = degli, di + le = delle.",
    },
    steps: [
      { es: "Pon el artículo que lleva el sustantivo (il pane, lo zucchero, la frutta…).", en: "Put the article the noun takes (il pane, lo zucchero, la frutta…)." },
      { es: "Une la preposición con ese artículo: di + il → del.", en: "Merge the preposition with that article: di + il → del." },
      { es: "di e in cambian de forma al unirse: di → de- (del, della…), in → ne- (nel, nella…).", en: "di and in change shape when they merge: di → de- (del, della…), in → ne- (nel, nella…)." },
    ],
    table: {
      head: ["", "di", "a", "in"],
      rows: [
        ["il", "del", "al", "nel"],
        ["lo", "dello", "allo", "nello"],
        ["la", "della", "alla", "nella"],
        ["l'", "dell'", "all'", "nell'"],
        ["i", "dei", "ai", "nei"],
        ["gli", "degli", "agli", "negli"],
        ["le", "delle", "alle", "nelle"],
      ],
    },
    examples: [
      { target: "la casa della nonna", gloss: { es: "la casa de la abuela", en: "grandma's house" } },
      { target: "Vado al cinema.", gloss: { es: "Voy al cine.", en: "I'm going to the cinema." } },
      { target: "Il latte è nel frigo.", gloss: { es: "La leche está en la nevera.", en: "The milk is in the fridge." } },
    ],
    pitfalls: {
      es: "En español solo se unen «de + el» y «a + el»; en italiano se unen con todos los artículos: della, delle, nella… «di la» o «in il» son siempre incorrectos.",
      en: "Italian merges the preposition with every definite article: della, delle, nella… 'di la' or 'in il' are always wrong.",
    },
  },
];
