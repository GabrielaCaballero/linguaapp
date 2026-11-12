import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u04",
  lang: "it",
  index: 4,
  cefr: "A1.1",
  title: { target: "Al bar", es: "En el bar", en: "At the café" },
  canDo: [
    { es: "Puedo pedir algo de beber o comer en un bar y pagar.", en: "I can order a drink or a snack in a café and pay." },
    { es: "Sé usar un/uno/una/un' e il/lo/la/l'.", en: "I can use un/uno/una/un' and il/lo/la/l'." },
  ],
  icon: "☕",
  items: build("it", 4, "A1.1", [
    // ── Bar words ────────────────────────────────────────────
    {
      id: "caffe", type: "word", pos: "noun", target: "il caffè", gender: "m", plural: "i caffè",
      gloss: { es: "el café (espresso)", en: "the coffee (espresso)" },
      distractors: ["il cappuccino", "il tè", "la caffè"],
      note: {
        es: "En Italia «un caffè» es un espresso. Las palabras con acento final no cambian en plural: i caffè.",
        en: "In Italy 'un caffè' is an espresso. Words stressed on the last syllable don't change in the plural: i caffè.",
      },
      tags: ["bar", "drink"],
    },
    {
      id: "cappuccino", type: "word", pos: "noun", target: "il cappuccino", gender: "m", plural: "i cappuccini",
      gloss: { es: "el capuchino", en: "the cappuccino" },
      distractors: ["il caffè", "il cornetto", "la cappuccina"],
      note: { es: "Los italianos lo toman casi solo por la mañana.", en: "Italians drink it almost only in the morning." },
      tags: ["bar", "drink"],
    },
    {
      id: "cornetto", type: "word", pos: "noun", target: "il cornetto", gender: "m", plural: "i cornetti",
      gloss: { es: "el cruasán (medialuna)", en: "the croissant" },
      distractors: ["il panino", "il cono", "la cornetta"],
      note: { es: "En el norte de Italia también se dice «brioche».", en: "In northern Italy it's often called 'brioche'." },
      tags: ["bar", "food"],
    },
    {
      id: "te", type: "word", pos: "noun", target: "il tè", gender: "m", plural: "i tè",
      gloss: { es: "el té", en: "the tea" },
      distractors: ["il caffè", "la tè", "il tetto"],
      note: { es: "Con acento grave: tè (sin acento, «te» = a ti).", en: "With a grave accent: tè (without it, 'te' means 'you')." },
      tags: ["bar", "drink", "accent"],
    },
    {
      id: "acqua", type: "word", pos: "noun", target: "l'acqua", gender: "f", plural: "le acque",
      gloss: { es: "el agua", en: "the water" },
      distractors: ["il latte", "la birra", "l'aceto"],
      note: { es: "frizzante = con gas; naturale = sin gas.", en: "frizzante = sparkling; naturale = still." },
      tags: ["bar", "drink"],
    },
    {
      id: "birra", type: "word", pos: "noun", target: "la birra", gender: "f", plural: "le birre",
      gloss: { es: "la cerveza", en: "the beer" },
      distractors: ["il vino", "la bibita", "la barra"],
      tags: ["bar", "drink"],
    },
    {
      id: "latte", legacyId: "it-p-tt2", type: "word", pos: "noun", target: "il latte", gender: "m", plural: "i latti",
      gloss: { es: "la leche", en: "the milk" },
      errors: [{
        text: "la latte",
        feedback: { es: "En italiano es masculino: il latte (en español, «la leche»).", en: "It's masculine: il latte." },
      }],
      distractors: ["la latte", "il latto", "il lato"],
      note: {
        es: "ch → tt: leche → latte, noche → notte. ¡Y es masculino: il latte!",
        en: "Order 'un latte' in Italy and you'll get a glass of milk; ask for 'un latte macchiato' or 'un caffellatte'.",
      },
      tags: ["bar", "drink", "false-friend"],
    },
    {
      id: "panino", type: "word", pos: "noun", target: "il panino", gender: "m", plural: "i panini",
      gloss: { es: "el sándwich (bocadillo)", en: "the sandwich (filled roll)" },
      distractors: ["il pane", "il pasticcino", "la panna"],
      note: { es: "Un panino, due panini: «panini» ya es plural.", en: "One panino, two panini: 'panini' is already plural." },
      tags: ["bar", "food"],
    },
    {
      id: "tramezzino", type: "word", pos: "noun", target: "il tramezzino", gender: "m", plural: "i tramezzini",
      gloss: { es: "el sándwich triangular (de miga)", en: "the tramezzino (crustless sandwich)" },
      distractors: ["il panino", "il tramezzo", "la tramezzina"],
      tags: ["bar", "food"],
    },
    {
      id: "spremuta", type: "word", pos: "noun", target: "la spremuta", gender: "f", plural: "le spremute",
      gloss: { es: "el jugo exprimido (zumo natural)", en: "the freshly squeezed juice" },
      distractors: ["il succo", "la spuma", "la premuta"],
      note: { es: "«Spremuta d'arancia» = jugo de naranja exprimido; el de caja es «il succo».", en: "'Spremuta d'arancia' = fresh orange juice; boxed juice is 'il succo'." },
      tags: ["bar", "drink"],
    },
    {
      id: "spritz", type: "word", pos: "noun", target: "lo spritz", gender: "m", plural: "gli spritz",
      gloss: { es: "el spritz (aperitivo)", en: "the spritz (aperitif)" },
      errors: [{
        text: "il spritz",
        feedback: { es: "Ante s + consonante se usa «lo»: lo spritz.", en: "Before s + consonant use 'lo': lo spritz." },
      }],
      distractors: ["il spritz", "la spritz", "lo sprint"],
      note: { es: "«lo» porque empieza con s + consonante: lo spritz, lo spumante.", en: "'lo' because it starts with s + consonant: lo spritz, lo spumante." },
      tags: ["bar", "drink", "articles"],
    },
    {
      id: "zucchero", type: "word", pos: "noun", target: "lo zucchero", gender: "m", plural: "gli zuccheri",
      gloss: { es: "el azúcar", en: "the sugar" },
      errors: [{
        text: "il zucchero",
        feedback: { es: "Ante z se usa «lo»: lo zucchero.", en: "Before z use 'lo': lo zucchero." },
      }],
      distractors: ["il zucchero", "la zucca", "lo zucchino"],
      note: { es: "Ojo: «la zucca» = la calabaza; «lo zucchino» = el calabacín (zapallito).", en: "Careful: 'la zucca' = pumpkin; 'lo zucchino' = courgette (zucchini)." },
      tags: ["bar", "food", "articles"],
    },

    // ── Ordering & paying ────────────────────────────────────
    {
      id: "vorrei", legacyId: "it-vorrei", type: "sentence", target: "Vorrei un caffè.",
      gloss: { es: "Quisiera un café.", en: "I'd like a coffee." },
      accept: [
        { text: "Vorrei un caffè, per favore." },
        { text: "Voglio un caffè.", verdict: "almost", feedback: { es: "«Voglio» = quiero; suena brusco. «Vorrei» es lo educado.", en: "'Voglio' = I want; it sounds blunt. 'Vorrei' is the polite form." } },
      ],
      distractors: ["Vorrei una caffè.", "Vorrei uno caffè.", "Volere un caffè."],
      note: { es: "Vorrei = quisiera: la forma educada de pedir.", en: "Vorrei = I would like: the polite way to order." },
      tags: ["bar", "polite"],
    },
    {
      id: "prendo", type: "sentence", target: "Prendo un cappuccino.",
      gloss: { es: "Para mí, un capuchino. (Tomo un capuchino.)", en: "I'll have a cappuccino." },
      accept: [{ text: "Io prendo un cappuccino." }, { text: "Per me un cappuccino." }],
      distractors: ["Prendo una cappuccino.", "Prende un cappuccino.", "Prendo uno cappuccino."],
      note: { es: "prendere = tomar (en el bar), agarrar. ¡No es «prender» la luz (accendere)!", en: "prendere = to take / to have (food or drink): prendo un caffè." },
      tags: ["bar"],
    },
    {
      id: "quant-e", type: "phrase", pos: "phrase", target: "Quant'è?",
      gloss: { es: "¿Cuánto es?", en: "How much is it? (the total)" },
      accept: [
        { text: "Quanto è?", verdict: "almost", feedback: { es: "Se contrae: quant'è.", en: "It contracts: quant'è." } },
        { text: "Quanto Le devo?" },
      ],
      distractors: ["Quanti è?", "Che cos'è?", "Dov'è?"],
      note: { es: "Más formal: «Quanto Le devo?» (¿Cuánto le debo?).", en: "More formal: 'Quanto Le devo?' (What do I owe you?)." },
      tags: ["bar", "money", "chunk"],
    },
    {
      id: "quanto-costa", legacyId: "it-quanto", type: "phrase", pos: "phrase", target: "Quanto costa?",
      gloss: { es: "¿Cuánto cuesta?", en: "How much does it cost?" },
      distractors: ["Quando costa?", "Quanta costa?", "Quanto conta?"],
      note: { es: "Ojo: «quando» = cuándo; «quanto» = cuánto.", en: "Careful: 'quando' = when; 'quanto' = how much." },
      tags: ["money", "chunk"],
    },
    {
      id: "il-conto", legacyId: "it-conto", type: "phrase", pos: "phrase", target: "Il conto, per favore.",
      gloss: { es: "La cuenta, por favor.", en: "The bill (check), please." },
      accept: [{ text: "Il conto per favore" }],
      distractors: ["La conta, per favore.", "Il conto, prego.", "Il cunto, per favore."],
      note: {
        es: "En muchos bares se paga primero en la caja y luego se pide en la barra.",
        en: "In many bars you pay at the till first, then order at the counter.",
      },
      tags: ["bar", "money", "chunk"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-genere", type: "pattern", target: "il panino · la birra · il latte",
      gloss: { es: "el género de los sustantivos: -o, -a, -e", en: "noun gender: -o, -a, -e" },
      pattern: {
        rule: {
          es: "-o suele ser masculino (il panino), -a femenino (la birra); -e puede ser de los dos (il latte, la chiave). Apréndelos con el artículo.",
          en: "-o is usually masculine (il panino), -a feminine (la birra); -e can be either (il latte, la chiave). Learn each noun with its article.",
        },
        table: [["m", "f"], ["il panino", "la birra"], ["il latte", "la chiave"]],
      },
      question: {
        prompt: { es: "¿Cuál es masculino?", en: "Which one is masculine?" },
        options: ["latte", "birra", "spremuta", "acqua"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "gender"],
    },
    {
      id: "pat-un-uno-una", type: "pattern", target: "un · uno · una · un'",
      gloss: { es: "el artículo indeterminado (un, una)", en: "the indefinite article (a, an)" },
      pattern: {
        rule: {
          es: "un + masculino (un caffè); uno ante s + consonante, z, gn, ps (uno spritz); una + femenino (una birra); un' + femenino con vocal (un'aranciata).",
          en: "un + masculine (un caffè); uno before s + consonant, z, gn, ps (uno spritz); una + feminine (una birra); un' + feminine before a vowel (un'aranciata).",
        },
        table: [["un", "uno", "una", "un'"], ["un caffè", "uno spritz", "una birra", "un'aranciata"]],
      },
      question: {
        prompt: { es: "Completa: «Vorrei ___ spritz.»", en: "Complete: 'Vorrei ___ spritz.'" },
        options: ["uno", "un", "una", "un'"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "articles"],
    },
    {
      id: "pat-il-lo-la", type: "pattern", target: "il · lo · la · l'",
      gloss: { es: "el artículo determinado (singular)", en: "the definite article (singular)" },
      pattern: {
        rule: {
          es: "il + masculino (il conto); lo ante s + consonante, z, gn, ps, x, y (lo zucchero); la + femenino (la birra); l' ante vocal (l'acqua, l'aperitivo).",
          en: "il + masculine (il conto); lo before s + consonant, z, gn, ps, x, y (lo zucchero); la + feminine (la birra); l' before a vowel (l'acqua, l'aperitivo).",
        },
        table: [["il", "lo", "la", "l'"], ["il conto", "lo zucchero", "la birra", "l'acqua"]],
      },
      question: {
        prompt: { es: "¿Qué artículo va? «___ studente»", en: "Which article? '___ studente'" },
        options: ["lo", "il", "la", "l'"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "articles"],
    },

    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-accento", type: "sound", target: "caffè",
      gloss: { es: "café", en: "coffee" },
      distractors: ["caffe", "cafè", "caffé"],
      note: {
        es: "El acento escrito marca la última sílaba tónica: caffè, città, perché.",
        en: "A written accent marks stress on the last syllable: caffè, città, perché.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "accent"],
    },

    // ── Dialogue ─────────────────────────────────────────────
    {
      id: "dlg-al-bar", type: "dialogue", target: "Subito! Altro?",
      gloss: { es: "¡Enseguida! ¿Algo más?", en: "Right away! Anything else?" },
      turns: [
        { who: "A", target: "Buongiorno! Prego?", gloss: { es: "¡Buenos días! ¿Qué le sirvo?", en: "Good morning! What can I get you?" } },
        { who: "B", target: "Buongiorno. Vorrei un cappuccino e un cornetto, per favore.", gloss: { es: "Buenos días. Quisiera un capuchino y un cruasán, por favor.", en: "Good morning. I'd like a cappuccino and a croissant, please." } },
        { who: "A", target: "Subito! Altro?", gloss: { es: "¡Enseguida! ¿Algo más?", en: "Right away! Anything else?" } },
        { who: "B", target: "No, grazie. Quant'è?", gloss: { es: "No, gracias. ¿Cuánto es?", en: "No, thanks. How much is it?" } },
        { who: "A", target: "Tre euro e cinquanta.", gloss: { es: "Tres euros con cincuenta.", en: "Three euros fifty." } },
      ],
      question: {
        prompt: { es: "¿Cuánto paga?", en: "How much does the customer pay?" },
        options: [
          { es: "3,50 €", en: "€3.50" },
          { es: "3,15 €", en: "€3.15" },
          { es: "13,50 €", en: "€13.50" },
          { es: "2,50 €", en: "€2.50" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "bar"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-burro", legacyId: "it-f-burro", type: "bridge", onlyFor: "es", target: "il burro",
      gloss: { es: "la mantequilla (manteca)", en: "the butter" },
      question: {
        prompt: { es: "«il burro» significa…", en: "'il burro' means…" },
        options: [
          { es: "la mantequilla", en: "the butter" },
          { es: "el burro (animal)", en: "the donkey" },
          { es: "el borracho", en: "the drunk" },
          { es: "el barro", en: "the mud" },
        ],
        answer: 0,
      },
      note: { es: "burro = mantequilla (en Argentina y Uruguay, manteca). El animal es «l'asino» o «il somaro»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "food"],
    },
    {
      id: "br-caldo", legacyId: "it-f-caldo", type: "bridge", onlyFor: "es", target: "caldo",
      gloss: { es: "caliente", en: "hot" },
      question: {
        prompt: { es: "«caldo» significa…", en: "'caldo' means…" },
        options: [
          { es: "caliente", en: "hot" },
          { es: "caldo (sopa)", en: "broth" },
          { es: "frío", en: "cold" },
          { es: "calvo", en: "bald" },
        ],
        answer: 0,
      },
      note: { es: "caldo = caliente; freddo = frío. El caldo de sopa es «il brodo»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-subito", legacyId: "it-f-subito", type: "bridge", onlyFor: "es", target: "subito",
      gloss: { es: "enseguida, ya", en: "right away" },
      question: {
        prompt: { es: "«subito» significa…", en: "'subito' means…" },
        options: [
          { es: "enseguida", en: "right away" },
          { es: "de repente", en: "suddenly" },
          { es: "subido", en: "gone up" },
          { es: "sumiso", en: "submissive" },
        ],
        answer: 0,
      },
      note: { es: "subito = enseguida, ya. «De repente» es «all'improvviso»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-gamba", legacyId: "it-f-gamba", type: "bridge", onlyFor: "es", target: "la gamba",
      gloss: { es: "la pierna", en: "the leg" },
      question: {
        prompt: { es: "«la gamba» significa…", en: "'la gamba' means…" },
        options: [
          { es: "la pierna", en: "the leg" },
          { es: "el camarón (la gamba)", en: "the prawn" },
          { es: "el jamón", en: "the ham" },
          { es: "la rodilla", en: "the knee" },
        ],
        answer: 0,
      },
      note: { es: "gamba = pierna. El camarón es «il gamberetto»; «il gambero» = langostino." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "food"],
    },
  ]),
};
