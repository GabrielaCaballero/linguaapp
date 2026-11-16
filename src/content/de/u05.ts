import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u05",
  lang: "de",
  index: 5,
  cefr: "A1.1",
  title: { target: "Essen & Trinken", es: "Comer y beber", en: "Food & drink" },
  canDo: [
    { es: "Puedo pedir comida y bebida en un café y pagar.", en: "I can order food and drinks in a café and pay." },
    { es: "Sé usar ein/eine/einen y kein.", en: "I can use ein/eine/einen and kein." },
  ],
  icon: "🥨",
  items: build("de", 5, "A1.1", [
    // ── Food & drink nouns ───────────────────────────────────
    {
      id: "kaffee", type: "word", pos: "noun", target: "der Kaffee", gender: "m", plural: "die Kaffees",
      gloss: { es: "el café (la bebida)", en: "the coffee" },
      distractors: ["die Kaffee", "das Café", "der Kuchen"],
      note: { es: "der Kaffee = la bebida; das Café = la cafetería.", en: "der Kaffee = the drink; das Café = the café." },
      tags: ["drink", "goethe-a1"],
    },
    {
      id: "tee", type: "word", pos: "noun", target: "der Tee", gender: "m", plural: "die Tees",
      gloss: { es: "el té", en: "the tea" },
      distractors: ["die Tee", "das Tier", "der See"],
      tags: ["drink", "goethe-a1"],
    },
    {
      id: "wasser", type: "word", pos: "noun", target: "das Wasser", gender: "n", plural: "die Wasser",
      gloss: { es: "el agua", en: "the water" },
      distractors: ["der Wasser", "das Wetter", "die Vase"],
      note: { es: "¡Neutro: das Wasser! (en español «el agua» es femenino).", en: "w sounds like v: Wasser ≈ 'vasser'." },
      tags: ["drink", "goethe-a1"],
    },
    {
      id: "milch", type: "word", pos: "noun", target: "die Milch", gender: "f", plural: "die Milchen",
      gloss: { es: "la leche", en: "the milk" },
      distractors: ["der Milch", "das Mehl", "die Mitte"],
      note: { es: "Femenino, como «la leche»; casi no se usa en plural.", en: "Like English: milk → Milch. It's almost never used in the plural." },
      tags: ["drink", "goethe-a1", "rarely-plural"],
    },
    {
      id: "saft", type: "word", pos: "noun", target: "der Saft", gender: "m", plural: "die Säfte",
      gloss: { es: "el jugo (zumo)", en: "the juice" },
      distractors: ["die Saft", "der Salat", "das Sofa"],
      tags: ["drink", "goethe-a1"],
    },
    {
      id: "bier", type: "word", pos: "noun", target: "das Bier", gender: "n", plural: "die Biere",
      gloss: { es: "la cerveza", en: "the beer" },
      distractors: ["der Bier", "das Tier", "die Birne"],
      tags: ["drink", "goethe-a1"],
    },
    {
      id: "brot", type: "word", pos: "noun", target: "das Brot", gender: "n", plural: "die Brote",
      gloss: { es: "el pan", en: "the bread" },
      distractors: ["der Brot", "das Boot", "das Brett"],
      note: { es: "das Brötchen = el pancito (panecillo).", en: "das Brötchen = the bread roll." },
      tags: ["food", "goethe-a1"],
    },
    {
      id: "kaese", type: "word", pos: "noun", target: "der Käse", gender: "m", plural: "die Käse",
      gloss: { es: "el queso", en: "the cheese" },
      distractors: ["die Käse", "die Kasse", "der Kuchen"],
      tags: ["food", "goethe-a1"],
    },
    {
      id: "apfel", type: "word", pos: "noun", target: "der Apfel", gender: "m", plural: "die Äpfel",
      gloss: { es: "la manzana", en: "the apple" },
      distractors: ["die Apfel", "die Ampel", "die Äpfel"],
      note: { es: "¡Masculino! Y el plural lleva diéresis: die Äpfel.", en: "Plural with umlaut: die Äpfel." },
      tags: ["food", "goethe-a1"],
    },
    {
      id: "ei", type: "word", pos: "noun", target: "das Ei", gender: "n", plural: "die Eier",
      gloss: { es: "el huevo", en: "the egg" },
      distractors: ["der Ei", "das Eis", "die Eier"],
      note: { es: "Ojo: das Eis = el helado (y el hielo).", en: "Careful: das Eis = ice cream (or ice)." },
      tags: ["food", "goethe-a1"],
    },

    // ── Verbs ────────────────────────────────────────────────
    {
      id: "essen", legacyId: "de-p-essen", type: "word", pos: "verb", target: "essen",
      gloss: { es: "comer", en: "to eat" },
      forms: { ich: "esse", du: "isst", "er/sie/es": "isst", Sie: "essen" },
      distractors: ["trinken", "messen", "vergessen"],
      note: { es: "Irregular: du isst, er isst.", en: "Irregular: du isst, er isst. English t → German ss: eat → essen." },
      tags: ["verb", "food", "goethe-a1"],
    },
    {
      id: "trinken", legacyId: "de-p-trinken", type: "word", pos: "verb", target: "trinken",
      gloss: { es: "beber, tomar", en: "to drink" },
      forms: { ich: "trinke", du: "trinkst", "er/sie/es": "trinkt", Sie: "trinken" },
      distractors: ["denken", "tanken", "schenken"],
      note: { en: "English d → German t: drink → trinken." },
      tags: ["verb", "drink", "goethe-a1"],
    },

    // ── Ordering & paying ────────────────────────────────────
    {
      id: "einen-kaffee", legacyId: "de-kaffee", type: "phrase", pos: "phrase", target: "Einen Kaffee, bitte.",
      gloss: { es: "Un café, por favor.", en: "A coffee, please." },
      accept: [
        { text: "Einen Kaffee bitte" },
        {
          text: "Ein Kaffee, bitte.", verdict: "almost",
          feedback: { es: "Se oye, pero lo correcto es «einen»: Kaffee es masculino y es el objeto.", en: "People say it, but the correct form is 'einen': Kaffee is masculine and the object." },
        },
      ],
      distractors: ["Eine Kaffee, bitte.", "Einem Kaffee, bitte.", "Einen Kaffee, danke."],
      note: {
        es: "Viene de «Ich hätte gern einen Kaffee»: Kaffee es masculino y es el objeto, por eso «einen».",
        en: "Short for 'Ich hätte gern einen Kaffee': Kaffee is masculine and the object, so 'einen' (accusative).",
      },
      tags: ["cafe", "accusative", "chunk"],
    },
    {
      id: "ich-moechte", type: "sentence", target: "Ich möchte einen Tee, bitte.",
      gloss: { es: "Quisiera un té, por favor.", en: "I'd like a tea, please." },
      accept: [{ text: "Ich möchte einen Tee." }, { text: "Ich hätte gern einen Tee, bitte." }, { text: "Ich hätte gerne einen Tee, bitte." }],
      errors: [{
        text: "Ich möchte ein Tee, bitte.",
        feedback: { es: "Tee es masculino y es el objeto: einen Tee.", en: "Tee is masculine and the object: einen Tee." },
      }],
      distractors: ["Ich möchte ein Tee, bitte.", "Ich möchten einen Tee, bitte.", "Ich mag einen Tee, bitte."],
      note: { es: "möchte = quisiera (educado). «Ich will» suena exigente.", en: "möchte = would like (polite). 'Ich will' sounds pushy." },
      tags: ["cafe", "accusative", "polite"],
    },
    {
      id: "wie-viel-kostet", legacyId: "de-kostet", type: "phrase", pos: "phrase", target: "Wie viel kostet das?",
      gloss: { es: "¿Cuánto cuesta (esto)?", en: "How much does that cost?" },
      accept: [
        { text: "Was kostet das?" },
        { text: "Wieviel kostet das?", verdict: "almost", feedback: { es: "Desde 1996 se escribe separado: wie viel.", en: "Since 1996 it's written as two words: wie viel." } },
      ],
      distractors: ["Wie viele kostet das?", "Wie viel kostest das?", "Wo viel kostet das?"],
      tags: ["money", "chunk"],
    },
    {
      id: "das-macht", type: "sentence", target: "Das macht vier Euro fünfzig.",
      gloss: { es: "Son cuatro euros con cincuenta.", en: "That's four euros fifty." },
      accept: [{ text: "Das kostet vier Euro fünfzig." }],
      errors: [{
        text: "Das macht vier Euros fünfzig.",
        feedback: { es: "«Euro» no cambia en plural: vier Euro.", en: "'Euro' doesn't change in the plural: vier Euro." },
      }],
      distractors: ["Das macht vier Euros fünfzig.", "Das macht fünfzig vier Euro.", "Das machst vier Euro fünfzig."],
      tags: ["money", "numbers"],
    },
    {
      id: "rechnung", legacyId: "de-rechnung", type: "phrase", pos: "phrase", target: "Die Rechnung, bitte.",
      gloss: { es: "La cuenta, por favor.", en: "The bill (check), please." },
      accept: [{ text: "Die Rechnung bitte" }, { text: "Zahlen, bitte!" }, { text: "Zahlen bitte" }],
      distractors: ["Der Rechnung, bitte.", "Die Rechnung, danke.", "Die Zahlung, bitte."],
      note: { es: "«Zahlen, bitte!» es igual de común en todas partes.", en: "'Zahlen, bitte!' is just as common everywhere." },
      tags: ["cafe", "money", "chunk"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-ein-einen", type: "pattern", target: "ein · eine · einen",
      gloss: { es: "el artículo indefinido y el acusativo", en: "the indefinite article and the accusative" },
      pattern: {
        rule: {
          es: "ein (palabras der/das), eine (palabras die). Como objeto del verbo (möchten, haben, nehmen) solo cambia el masculino: ein → einen. Ich möchte einen Kaffee, eine Milch, ein Wasser.",
          en: "ein (der/das nouns), eine (die nouns). As the object of a verb (möchten, haben, nehmen), only the masculine changes: ein → einen. Ich möchte einen Kaffee, eine Milch, ein Wasser.",
        },
        table: [["", "Nominativ", "Akkusativ"], ["der Kaffee", "ein Kaffee", "einen Kaffee"], ["die Milch", "eine Milch", "eine Milch"], ["das Wasser", "ein Wasser", "ein Wasser"]],
      },
      question: {
        prompt: { es: "Completa: «Ich nehme ___ Apfel.»", en: "Complete: 'Ich nehme ___ Apfel.'" },
        options: ["einen", "ein", "eine", "einem"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "accusative", "articles"],
    },
    {
      id: "pat-kein", type: "pattern", target: "kein · keine · keinen",
      gloss: { es: "negar un sustantivo: kein", en: "negating a noun: kein" },
      pattern: {
        rule: {
          es: "Para negar un sustantivo con ein (o sin artículo) usa kein: Ich habe kein Brot, keine Milch, keinen Saft. Para verbos y adjetivos usa nicht.",
          en: "To negate a noun with ein (or with no article), use kein: Ich habe kein Brot, keine Milch, keinen Saft. For verbs and adjectives, use nicht.",
        },
        table: [["ein Brot", "kein Brot"], ["eine Milch", "keine Milch"], ["einen Saft", "keinen Saft"]],
      },
      question: {
        prompt: { es: "«No tomo cerveza»: Ich trinke ___ Bier.", en: "'I don't drink beer': Ich trinke ___ Bier." },
        options: ["kein", "nicht", "keine", "keinen"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "negation"],
    },

    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-lang-kurz", type: "sound", target: "Stadt",
      gloss: { es: "ciudad", en: "city / town" },
      pair: ["Staat", "Stadt"], slow: true,
      distractors: ["Staat", "Stat", "Stahd"],
      note: {
        es: "a corta ante dos consonantes: Stadt (ciudad); a larga con aa o ah: Staat (Estado).",
        en: "Short a before two consonants: Stadt (city); long a with aa or ah: Staat (state).",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "vowel-length"],
    },

    // ── Dialogue ─────────────────────────────────────────────
    {
      id: "dlg-im-cafe", type: "dialogue", target: "Gern.", register: "formal",
      gloss: { es: "Con gusto.", en: "Sure. / With pleasure." },
      turns: [
        { who: "A", target: "Guten Tag! Was möchten Sie?", gloss: { es: "¡Buenas tardes! ¿Qué desea?", en: "Hello! What would you like?" } },
        { who: "B", target: "Einen Kaffee und ein Stück Kuchen, bitte.", gloss: { es: "Un café y un trozo de pastel (torta), por favor.", en: "A coffee and a piece of cake, please." } },
        { who: "A", target: "Gern. Mit Milch?", gloss: { es: "Con gusto. ¿Con leche?", en: "Sure. With milk?" } },
        { who: "B", target: "Nein, danke. Was macht das?", gloss: { es: "No, gracias. ¿Cuánto es?", en: "No, thanks. How much is that?" } },
        { who: "A", target: "Das macht sieben Euro zwanzig.", gloss: { es: "Son siete euros con veinte.", en: "That's seven euros twenty." } },
      ],
      question: {
        prompt: { es: "¿Cómo toma el café?", en: "How does the customer take the coffee?" },
        options: [
          { es: "Sin leche", en: "Without milk" },
          { es: "Con leche", en: "With milk" },
          { es: "Con azúcar", en: "With sugar" },
          { es: "Con leche y azúcar", en: "With milk and sugar" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "cafe"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-wasser", legacyId: "de-p-wasser", type: "bridge", onlyFor: "en", target: "das Wasser",
      gloss: { es: "el agua", en: "the water" },
      distractors: ["das Water", "das Watter", "das Vasser"],
      note: { en: "English t often = German ss/s: water → Wasser, eat → essen, that → das." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-apfel", legacyId: "de-p-apfel", type: "bridge", onlyFor: "en", target: "der Apfel",
      gloss: { es: "la manzana", en: "the apple" },
      distractors: ["der Appel", "der Apful", "der Afel"],
      note: { en: "English p often = German pf: apple → Apfel, pound → Pfund." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-gift", legacyId: "de-f-gift", type: "bridge", onlyFor: "en", target: "das Gift",
      gloss: { es: "el veneno", en: "the poison" },
      question: {
        prompt: { es: "«das Gift» significa…", en: "'das Gift' means…" },
        options: [
          { es: "el veneno", en: "poison" },
          { es: "el regalo", en: "present" },
          { es: "el talento", en: "talent" },
          { es: "la tarjeta de regalo", en: "gift card" },
        ],
        answer: 0,
      },
      note: { en: "A present is 'das Geschenk'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-bekommen", legacyId: "de-f-bekommen", type: "bridge", onlyFor: "en", target: "bekommen",
      gloss: { es: "recibir, conseguir", en: "to get / to receive" },
      question: {
        prompt: { es: "«bekommen» significa…", en: "'bekommen' means…" },
        options: [
          { es: "recibir", en: "to get / to receive" },
          { es: "volverse", en: "to become" },
          { es: "volver", en: "to come back" },
          { es: "dar la bienvenida", en: "to welcome" },
        ],
        answer: 0,
      },
      note: { en: "'Ich bekomme ein Steak' = I'll have (I'm getting) a steak, not 'I become'. To become = werden." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-karte", type: "bridge", onlyFor: "es", target: "die Karte",
      gloss: { es: "la tarjeta / el mapa / la entrada (y la carta del restaurante)", en: "the card / map / ticket (and the menu)" },
      question: {
        prompt: { es: "En un restaurante, «Die Karte, bitte» significa…", en: "In a restaurant, 'Die Karte, bitte' means…" },
        options: [
          { es: "La carta (el menú), por favor", en: "The menu, please" },
          { es: "La cuenta, por favor", en: "The bill, please" },
          { es: "Una carta para enviar, por favor", en: "A letter to send, please" },
          { es: "Un mapa, por favor", en: "A map, please" },
        ],
        answer: 0,
      },
      note: { es: "Una carta (para enviar) es «der Brief»; la cuenta es «die Rechnung»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "cafe"],
    },
    // ── Tables (content v2.1) ─────────────────────────────────
    {
      id: "tab-mein-akk", type: "paradigm", target: "mein — Akkusativ", spoken: "mein",
      gloss: { es: "mein (mi) — acusativo", en: "mein (my) — accusative" },
      grammar: ["de-g-possessiv"],
      paradigm: {
        caption: { es: "«mein» como objeto directo (acusativo)", en: "mein as a direct object (accusative)" },
        cells: [
          { label: "m · Bruder", answer: "meinen", ruleId: "de-g-possessiv" },
          { label: "f · Schwester", answer: "meine", ruleId: "de-g-possessiv" },
          { label: "n · Kind", answer: "mein", ruleId: "de-g-possessiv" },
          { label: "Plural · Brüder", answer: "meine", ruleId: "de-g-possessiv" },
        ],
      },
      tags: ["grammar", "possessive", "accusative", "table"],
    },
    {
      id: "ich-besuche-meine-brueder", type: "sentence", target: "Ich besuche meine Brüder.",
      gloss: { es: "Visito a mis hermanos.", en: "I'm visiting my brothers." },
      grammar: ["de-g-possessiv"],
      annot: {
        meine: { es: "posesivo, acusativo plural", en: "possessive, accusative plural" },
        Brüder: { es: "plural, objeto directo de «besuchen» (acusativo)", en: "plural, direct object of besuchen (accusative)" },
      },
      errors: [
        {
          text: "Ich besuche meinen Brüder.",
          feedback: {
            es: "Brüder es plural y objeto directo → meine. «meinen» es acusativo masculino singular (meinen Bruder) o dativo plural (meinen Brüdern).",
            en: "Brüder is plural and the direct object → meine. 'meinen' is accusative masculine singular (meinen Bruder) or dative plural (meinen Brüdern).",
          },
          ruleId: "de-g-possessiv",
        },
        {
          text: "Ich besuche mein Brüder.",
          feedback: { es: "En plural el posesivo termina en -e: meine Brüder.", en: "In the plural the possessive ends in -e: meine Brüder." },
          ruleId: "de-g-possessiv",
        },
      ],
      tags: ["family", "possessive", "accusative"],
    },
  ]),
};
