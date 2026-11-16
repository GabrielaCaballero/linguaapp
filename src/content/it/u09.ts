import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u09",
  lang: "it",
  index: 9,
  cefr: "A1.2",
  title: { target: "Fare la spesa", es: "Hacer las compras", en: "Food shopping" },
  canDo: [
    { es: "Puedo comprar comida en una tienda o un mercado y pedir cantidades.", en: "I can buy food in a shop or market and ask for quantities." },
    { es: "Puedo preguntar cuánto cuesta algo y decir que es todo.", en: "I can ask what things cost and say that's all." },
    { es: "Sé usar del, al, nel… y el partitivo (del pane, delle mele).", en: "I can use del, al, nel… and the partitive (del pane, delle mele)." },
  ],
  icon: "🛒",
  items: build("it", 9, "A1.2", [
    // ── Shops ────────────────────────────────────────────────
    {
      id: "supermercato", type: "word", pos: "noun", target: "il supermercato", gender: "m", plural: "i supermercati",
      gloss: { es: "el supermercado", en: "the supermarket" },
      distractors: ["la supermercato", "il mercato", "il superiore"],
      tags: ["shopping", "places"],
    },
    {
      id: "negozio", type: "word", pos: "noun", target: "il negozio", gender: "m", plural: "i negozi",
      gloss: { es: "la tienda", en: "the shop / store" },
      distractors: ["il negoziato", "la negozia", "l'ozio"],
      note: { es: "il negozio = la tienda; un negocio (trato) es «un affare».", en: "il negozio = shop; a business deal is 'un affare'." },
      tags: ["shopping", "places"],
    },

    // ── Food ─────────────────────────────────────────────────
    {
      id: "pane", type: "word", pos: "noun", target: "il pane", gender: "m", plural: "i pani",
      gloss: { es: "el pan", en: "the bread" },
      distractors: ["la pane", "il panno", "il pino"],
      tags: ["food"],
    },
    {
      id: "formaggio", type: "word", pos: "noun", target: "il formaggio", gender: "m", plural: "i formaggi",
      gloss: { es: "el queso", en: "the cheese" },
      distractors: ["la forma", "il foraggio", "il messaggio"],
      tags: ["food"],
    },
    {
      id: "mela", type: "word", pos: "noun", target: "la mela", gender: "f", plural: "le mele",
      gloss: { es: "la manzana", en: "the apple" },
      distractors: ["il miele", "la mora", "la melanzana"],
      note: { es: "Ojo: il miele = la miel; la melanzana = la berenjena.", en: "Careful: il miele = honey; la melanzana = aubergine (eggplant)." },
      tags: ["food"],
    },
    {
      id: "pomodoro", type: "word", pos: "noun", target: "il pomodoro", gender: "m", plural: "i pomodori",
      gloss: { es: "el tomate (jitomate)", en: "the tomato" },
      distractors: ["il pomeriggio", "la pomodora", "il pompelmo"],
      tags: ["food"],
    },
    {
      id: "uovo", type: "word", pos: "noun", target: "l'uovo", gender: "m", plural: "le uova",
      gloss: { es: "el huevo", en: "the egg" },
      distractors: ["l'uva", "l'uomo", "l'ovile"],
      note: { es: "Plural irregular y femenino: l'uovo → le uova. Ojo: l'uva = la uva.", en: "Irregular feminine plural: l'uovo → le uova. Careful: l'uva = grapes." },
      tags: ["food", "irregular-plural"],
    },
    {
      id: "frutta", type: "word", pos: "other", target: "la frutta",
      gloss: { es: "la fruta", en: "fruit" },
      distractors: ["la fretta", "la flotta", "la frotta"],
      note: { es: "Incontable, como en español: la frutta fresca.", en: "Uncountable: la frutta = fruit in general." },
      tags: ["food"],
    },
    {
      id: "verdura", type: "word", pos: "other", target: "la verdura",
      gloss: { es: "la verdura", en: "vegetables" },
      distractors: ["il verde", "la vettura", "la ventura"],
      note: { es: "Singular con sentido general: mangio molta verdura.", en: "Singular with a general sense: mangio molta verdura (I eat a lot of vegetables)." },
      tags: ["food"],
    },

    // ── Quantities ───────────────────────────────────────────
    {
      id: "chilo", type: "word", pos: "noun", target: "il chilo", gender: "m", plural: "i chili",
      gloss: { es: "el kilo", en: "the kilo" },
      distractors: ["il chiodo", "il ciclo", "la chela"],
      note: { es: "ch suena «k»: chilo ≈ «kilo». Medio kilo = mezzo chilo.", en: "ch sounds like 'k'. Half a kilo = mezzo chilo." },
      tags: ["quantities"],
    },
    {
      id: "etto", type: "word", pos: "noun", target: "l'etto", gender: "m", plural: "gli etti",
      gloss: { es: "los cien gramos", en: "a hundred grams" },
      distractors: ["l'otto", "l'atto", "il letto"],
      note: { es: "En la tienda se pide por etti: due etti di prosciutto = 200 g de jamón.", en: "Deli counters sell by the etto: due etti di prosciutto = 200 g of ham." },
      tags: ["quantities"],
    },
    {
      id: "bottiglia", type: "word", pos: "noun", target: "la bottiglia", gender: "f", plural: "le bottiglie",
      gloss: { es: "la botella", en: "the bottle" },
      distractors: ["la battaglia", "il bottiglio", "la boccia"],
      tags: ["quantities"],
    },

    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "quanto-costano", type: "phrase", pos: "phrase", target: "Quanto costano?",
      gloss: { es: "¿Cuánto cuestan?", en: "How much do they cost?" },
      distractors: ["Quanto costa?", "Quanti costano?", "Quanto costi?"],
      tags: ["shopping", "chunk"],
    },
    {
      id: "niente-altro", type: "phrase", pos: "phrase", target: "Nient'altro, grazie.",
      gloss: { es: "Nada más, gracias.", en: "Nothing else, thanks." },
      accept: [{ text: "Niente altro, grazie." }, { text: "Basta così, grazie." }],
      distractors: ["Non altro, grazie.", "Nessun altro, grazie.", "Nient'altro, prego."],
      tags: ["shopping", "chunk"],
    },
    {
      id: "mi-da-un-chilo", type: "sentence", register: "formal", target: "Mi dà un chilo di mele, per favore?",
      gloss: { es: "¿Me da un kilo de manzanas, por favor?", en: "Could I have a kilo of apples, please?" },
      accept: [{ text: "Un chilo di mele, per favore." }, { text: "Vorrei un chilo di mele, per favore." }],
      errors: [{ text: "Mi dà un chilo delle mele, per favore?", feedback: { es: "Tras una cantidad va «di» sin artículo: un chilo di mele.", en: "After a quantity, plain 'di' with no article: un chilo di mele." } }],
      distractors: ["delle", "dai", "chili"],
      tags: ["shopping", "quantities"],
    },
    {
      id: "vorrei-del-pane", type: "sentence", target: "Vorrei del pane.",
      gloss: { es: "Quisiera pan.", en: "I'd like some bread." },
      accept: [{ text: "Vorrei un po' di pane." }],
      errors: [{ text: "Vorrei di il pane.", feedback: { es: "di + il se contrae: del pane.", en: "di + il contracts: del pane." } }],
      distractors: ["di", "il", "dei"],
      tags: ["shopping", "partitive"],
    },
    {
      id: "latte-frigo", type: "sentence", target: "Il latte è nel frigorifero.",
      gloss: { es: "La leche está en el refrigerador (la nevera).", en: "The milk is in the fridge." },
      accept: [{ text: "Il latte è in frigorifero." }, { text: "Il latte è nel frigo." }, { text: "Il latte è in frigo." }],
      distractors: ["nella", "sul", "al"],
      tags: ["home", "prepositions"],
    },
    {
      id: "vado-al-mercato", type: "sentence", target: "Il sabato vado al mercato.",
      gloss: { es: "Los sábados voy al mercado.", en: "On Saturdays I go to the market." },
      accept: [{ text: "Vado al mercato il sabato." }],
      errors: [{ text: "Il sabato vado a il mercato.", feedback: { es: "a + il se contrae: al mercato.", en: "a + il contracts: al mercato." } }],
      distractors: ["a", "allo", "mercati"],
      tags: ["shopping", "prepositions"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-prep-articolate", type: "pattern", target: "del · al · dal · nel · sul",
      gloss: { es: "preposiciones con artículo", en: "prepositions + article" },
      pattern: {
        rule: {
          es: "di, a, da, in, su se unen al artículo: di + il = del, a + la = alla, in + il = nel, su + il = sul. Nunca «di il».",
          en: "di, a, da, in, su fuse with the article: di + il = del, a + la = alla, in + il = nel, su + il = sul. Never 'di il'.",
        },
        table: [["", "il", "lo", "la", "l'", "i", "gli", "le"], ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"], ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"], ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"], ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]],
      },
      question: {
        prompt: { es: "Completa: «Le chiavi sono ___ tavolo.» (su + il)", en: "Complete: 'Le chiavi sono ___ tavolo.' (su + il)" },
        options: ["sul", "sullo", "nel", "sulla"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-prep-art"], tags: ["grammar", "prepositions"],
    },
    {
      id: "pat-partitivo", type: "pattern", target: "del pane · della frutta · dei pomodori · delle mele",
      gloss: { es: "el partitivo (algo de, unos)", en: "the partitive (some)" },
      pattern: {
        rule: {
          es: "di + artículo = «algo de / unos»: compro del pane (pan), delle mele (unas manzanas). En español no se dice nada.",
          en: "di + article = 'some': compro del pane (some bread), delle mele (some apples).",
        },
        table: [["del", "pane"], ["della", "frutta"], ["dei", "pomodori"], ["degli", "spinaci"], ["delle", "mele"]],
      },
      question: {
        prompt: { es: "Completa: «Compro ___ pomodori.»", en: "Complete: 'Compro ___ pomodori.'" },
        options: ["dei", "del", "degli", "delle"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "partitive"],
    },
    {
      id: "pat-quanto", type: "pattern", target: "quanto pane · quanta frutta · quanti pomodori · quante mele",
      gloss: { es: "cuánto, cuánta, cuántos, cuántas", en: "how much / how many" },
      pattern: {
        rule: {
          es: "Como en español, «quanto» concuerda con el sustantivo: quanto, quanta, quanti, quante.",
          en: "'quanto' agrees with the noun: quanto (m), quanta (f), quanti (m pl), quante (f pl).",
        },
        table: [["quanto", "pane"], ["quanta", "frutta"], ["quanti", "pomodori"], ["quante", "mele"]],
      },
      question: {
        prompt: { es: "Completa: «___ mele vuole?»", en: "Complete: '___ mele vuole?'" },
        options: ["Quante", "Quanti", "Quanto", "Quanta"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "quantities"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lista", type: "listening",
      target: "Devo comprare un litro di latte, il pane, sei uova e due etti di prosciutto.",
      gloss: {
        es: "Tengo que comprar un litro de leche, el pan, seis huevos y doscientos gramos de jamón.",
        en: "I need to buy a litre of milk, the bread, six eggs and two hundred grams of ham.",
      },
      question: {
        prompt: { es: "¿Cuántos huevos tiene que comprar?", en: "How many eggs does the speaker need?" },
        options: [
          { es: "Seis", en: "Six" },
          { es: "Dos", en: "Two" },
          { es: "Doce", en: "Twelve" },
          { es: "Uno", en: "One" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "shopping"],
    },
    {
      id: "dlg-mercato", type: "dialogue", register: "formal", target: "Basta così.",
      gloss: { es: "Es todo.", en: "That's all." },
      turns: [
        { who: "A", target: "Buongiorno, desidera?", gloss: { es: "Buenos días, ¿qué desea?", en: "Good morning, what would you like?" } },
        { who: "B", target: "Un chilo di pomodori, per favore.", gloss: { es: "Un kilo de tomates, por favor.", en: "A kilo of tomatoes, please." } },
        { who: "A", target: "Ecco a Lei. Altro?", gloss: { es: "Aquí tiene. ¿Algo más?", en: "Here you are. Anything else?" } },
        { who: "B", target: "No, basta così. Quant'è?", gloss: { es: "No, es todo. ¿Cuánto es?", en: "No, that's all. How much is it?" } },
        { who: "A", target: "Tre euro.", spoken: "Tre euro.", gloss: { es: "Tres euros.", en: "Three euros." } },
      ],
      question: {
        prompt: { es: "¿Qué compra el cliente?", en: "What does the customer buy?" },
        options: [
          { es: "Un kilo de tomates", en: "A kilo of tomatoes" },
          { es: "Tres kilos de tomates", en: "Three kilos of tomatoes" },
          { es: "Un kilo de manzanas", en: "A kilo of apples" },
          { es: "Medio kilo de tomates", en: "Half a kilo of tomatoes" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "shopping"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-olio", type: "bridge", onlyFor: "es", target: "l'olio",
      gloss: { es: "el aceite", en: "the oil" },
      question: {
        prompt: { es: "«l'olio» significa…", en: "'l'olio' means…" },
        options: [
          { es: "el aceite", en: "the oil" },
          { es: "el ajo", en: "the garlic" },
          { es: "la olla", en: "the pot" },
          { es: "el olor", en: "the smell" },
        ],
        answer: 0,
      },
      note: { es: "aceite = l'olio (olio d'oliva). El ajo es «l'aglio»: ll/j → gli." },
      exercises: ["guess", "question"], tags: ["bridge", "food"],
    },
    // ── Tables (content v2.1) ─────────────────────────────────
    {
      id: "tab-di-articolo", type: "paradigm", target: "di + articolo", spoken: "di più articolo",
      gloss: { es: "di + artículo (del, della…)", en: "di + article (del, della…)" },
      grammar: ["it-g-prep-art"],
      paradigm: {
        caption: { es: "Une «di» con cada artículo", en: "Merge di with each article" },
        cells: [
          { label: "di + il", answer: "del", ruleId: "it-g-prep-art" },
          { label: "di + lo", answer: "dello", ruleId: "it-g-prep-art" },
          { label: "di + la", answer: "della", ruleId: "it-g-prep-art" },
          { label: "di + l'", answer: "dell'", ruleId: "it-g-prep-art" },
          { label: "di + i", answer: "dei", ruleId: "it-g-prep-art" },
          { label: "di + gli", answer: "degli", ruleId: "it-g-prep-art" },
          { label: "di + le", answer: "delle", ruleId: "it-g-prep-art" },
        ],
      },
      tags: ["grammar", "prepositions", "table"],
    },
  ]),
};
