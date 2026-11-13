import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u11",
  lang: "it",
  index: 11,
  cefr: "A2",
  title: { target: "Quando ero piccolo", es: "Cuando era pequeño", en: "When I was little" },
  canDo: [
    { es: "Puedo describir cómo era mi infancia y qué hacía habitualmente.", en: "I can describe my childhood and what I used to do." },
    { es: "Puedo contar una situación del pasado y algo que pasó en ella.", en: "I can describe a past situation and something that happened during it." },
    { es: "Sé elegir entre imperfetto y passato prossimo.", en: "I can choose between the imperfetto and the passato prossimo." },
  ],
  icon: "🧸",
  items: build("it", 11, "A2", [
    // ── Words ────────────────────────────────────────────────
    {
      id: "infanzia", type: "word", pos: "other", target: "l'infanzia",
      gloss: { es: "la infancia", en: "childhood" },
      distractors: ["l'infanteria", "l'influenza", "l'infermiera"],
      tags: ["childhood"],
    },
    {
      id: "da-piccolo", type: "phrase", pos: "phrase", target: "da piccolo",
      gloss: { es: "de pequeño/a, de niño/a", en: "as a child" },
      accept: [{ text: "da piccola" }, { text: "da bambino" }, { text: "da bambina" }],
      distractors: ["di piccolo", "a piccolo", "per piccolo"],
      note: { es: "«da» + edad o etapa: da piccolo, da giovane (de joven).", en: "'da' + age or stage: da piccolo, da giovane (when young)." },
      tags: ["childhood", "chunk"],
    },
    {
      id: "giocattolo", type: "word", pos: "noun", target: "il giocattolo", gender: "m", plural: "i giocattoli",
      gloss: { es: "el juguete", en: "the toy" },
      distractors: ["il gioco", "la giocatrice", "il cioccolato"],
      tags: ["childhood"],
    },
    {
      id: "scuola", type: "word", pos: "noun", target: "la scuola", gender: "f", plural: "le scuole",
      gloss: { es: "la escuela", en: "the school" },
      distractors: ["lo scuolo", "la scala", "la suola"],
      tags: ["childhood", "school"],
    },
    {
      id: "maestro", type: "word", pos: "noun", target: "il maestro", gender: "m", plural: "i maestri",
      gloss: { es: "el maestro (de primaria)", en: "the primary school teacher" },
      accept: [{ text: "la maestra" }],
      distractors: ["il mestiere", "il maestrale", "il ministro"],
      note: { es: "En secundaria se dice «il professore / la professoressa».", en: "In secondary school: 'il professore / la professoressa'." },
      tags: ["childhood", "school"],
    },
    {
      id: "estate", type: "word", pos: "noun", target: "l'estate", gender: "f", plural: "le estati",
      gloss: { es: "el verano", en: "the summer" },
      distractors: ["l'estero", "lo stato", "l'esame"],
      note: { es: "Femenino: l'estate scorsa. Ojo: l'estero = el extranjero.", en: "Feminine: l'estate scorsa. Careful: l'estero = abroad." },
      tags: ["time", "seasons"],
    },
    {
      id: "ogni-estate", type: "phrase", pos: "phrase", target: "ogni estate",
      gloss: { es: "todos los veranos, cada verano", en: "every summer" },
      distractors: ["ogni estati", "tutte estate", "ogni estato"],
      note: { es: "«ogni» no cambia y va con singular: ogni giorno, ogni anno.", en: "'ogni' never changes and takes a singular: ogni giorno, ogni anno." },
      tags: ["time", "habit"],
    },
    {
      id: "una-volta", type: "phrase", pos: "phrase", target: "una volta",
      gloss: { es: "una vez / antes (en otra época)", en: "once / in the old days" },
      distractors: ["una vota", "un volto", "una volpe"],
      note: { es: "«C'era una volta…» = «Había una vez…».", en: "'C'era una volta…' = 'Once upon a time…'." },
      tags: ["time", "chunk"],
    },
    {
      id: "mentre", type: "word", pos: "other", target: "mentre",
      gloss: { es: "mientras", en: "while" },
      distractors: ["meno", "mente", "mentire"],
      tags: ["connectors"],
    },
    {
      id: "timido", type: "word", pos: "adj", target: "timido",
      gloss: { es: "tímido/a", en: "shy" },
      forms: { m: "timido", f: "timida", mpl: "timidi", fpl: "timide" },
      accept: [{ text: "timida" }],
      distractors: ["tiepido", "umido", "timore"],
      tags: ["character"],
    },
    {
      id: "vivace", type: "word", pos: "adj", target: "vivace",
      gloss: { es: "inquieto/a, vivaz", en: "lively" },
      forms: { "m/f": "vivace", pl: "vivaci" },
      distractors: ["veloce", "vicino", "vivere"],
      tags: ["character"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "quando-ero-piccolo", type: "sentence", target: "Quando ero piccolo, abitavo in campagna.",
      gloss: { es: "Cuando era pequeño, vivía en el campo.", en: "When I was little, I lived in the country." },
      accept: [{ text: "Quando ero piccola, abitavo in campagna." }, { text: "Quando ero piccolo, vivevo in campagna." }, { text: "Quando ero piccola, vivevo in campagna." }],
      errors: [{ text: "Quando sono stato piccolo, abitavo in campagna.", feedback: { es: "Para describir una etapa del pasado se usa el imperfetto: ero.", en: "Describing a past period takes the imperfetto: ero." } }],
      distractors: ["sono", "abitato", "stavo"],
      tags: ["childhood", "imperfetto"],
    },
    {
      id: "ogni-estate-mare", type: "sentence", target: "Ogni estate andavamo al mare.",
      gloss: { es: "Todos los veranos íbamos a la playa.", en: "Every summer we went to the seaside." },
      distractors: ["andiamo", "siamo", "andati"],
      tags: ["childhood", "imperfetto", "habit"],
    },
    {
      id: "mentre-leggevo", type: "sentence", target: "Mentre leggevo, è suonato il telefono.",
      gloss: { es: "Mientras leía, sonó el teléfono.", en: "While I was reading, the phone rang." },
      accept: [{ text: "Mentre leggevo, ha suonato il telefono." }],
      errors: [{ text: "Mentre ho letto, è suonato il telefono.", feedback: { es: "La acción en curso va en imperfetto: mentre leggevo.", en: "The ongoing background action takes the imperfetto: mentre leggevo." } }],
      distractors: ["leggo", "suonava", "letto"],
      tags: ["imperfetto", "passato-prossimo"],
    },
    {
      id: "ero-timido", type: "sentence", target: "Da bambino ero molto timido.",
      gloss: { es: "De niño era muy tímido.", en: "As a child I was very shy." },
      accept: [{ text: "Da bambina ero molto timida." }, { text: "Da piccolo ero molto timido." }, { text: "Da piccola ero molto timida." }],
      distractors: ["sono", "stato", "molta"],
      tags: ["childhood", "imperfetto"],
    },
    {
      id: "com-era-nonna", type: "sentence", register: "informal", target: "Com'era tua nonna?",
      gloss: { es: "¿Cómo era tu abuela?", en: "What was your grandmother like?" },
      accept: [{ text: "Come era tua nonna?", verdict: "almost", feedback: { es: "Se contrae: com'era.", en: "It contracts: com'era." } }],
      errors: [{ text: "Com'era la tua nonna?", feedback: { es: "Sin artículo con un familiar en singular: tua nonna.", en: "No article with a singular family member: tua nonna." } }],
      distractors: ["la", "è", "stata"],
      tags: ["family", "imperfetto"],
    },
    {
      id: "non-cera-internet", type: "sentence", target: "Non c'era internet.",
      gloss: { es: "No había internet.", en: "There was no internet." },
      distractors: ["era", "c'è", "aveva"],
      tags: ["imperfetto"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-imperfetto", type: "pattern", target: "parlavo · leggevo · dormivo · ero",
      gloss: { es: "el imperfetto", en: "the imperfetto" },
      pattern: {
        rule: {
          es: "Raíz + -avo / -evo / -ivo, -avi, -ava, -avamo, -avate, -avano. Irregular: essere → ero, eri, era, eravamo, eravate, erano.",
          en: "Stem + -avo / -evo / -ivo, -avi, -ava, -avamo, -avate, -avano. Irregular: essere → ero, eri, era, eravamo, eravate, erano.",
        },
        table: [["", "parlare", "leggere", "dormire", "essere"], ["io", "parlavo", "leggevo", "dormivo", "ero"], ["tu", "parlavi", "leggevi", "dormivi", "eri"], ["lui / lei", "parlava", "leggeva", "dormiva", "era"], ["noi", "parlavamo", "leggevamo", "dormivamo", "eravamo"], ["loro", "parlavano", "leggevano", "dormivano", "erano"]],
      },
      question: {
        prompt: { es: "Completa con «giocare»: «Da piccoli noi ___ sempre in piazza.»", en: "Complete with 'giocare': 'Da piccoli noi ___ sempre in piazza.'" },
        options: ["giocavamo", "giocavano", "giochiamo", "giocavate"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "imperfetto"],
    },
    {
      id: "pat-imperf-vs-pp", type: "pattern", target: "leggevo (sfondo) · è suonato (evento)",
      gloss: { es: "imperfetto o passato prossimo", en: "imperfetto or passato prossimo" },
      pattern: {
        rule: {
          es: "Igual que en español: imperfetto para describir y para costumbres (era, andavamo); passato prossimo para hechos puntuales (è arrivato).",
          en: "imperfetto for descriptions, habits and ongoing background (era, andavamo, leggevo); passato prossimo for completed events (è arrivato).",
        },
        table: [["descrizione / abitudine", "ero stanco · andavamo al mare"], ["azione in corso", "mentre cucinavo…"], ["evento", "…è arrivato Marco"]],
      },
      question: {
        prompt: { es: "Completa: «Ieri ___ in cucina quando è arrivato Marco.» (io, essere)", en: "Complete: 'Ieri ___ in cucina quando è arrivato Marco.' (io, essere)" },
        options: ["ero", "sono stato", "sarò", "sia"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "imperfetto", "passato-prossimo"],
    },
    {
      id: "pat-cera", type: "pattern", target: "c'era · c'erano",
      gloss: { es: "había", en: "there was · there were" },
      pattern: {
        rule: {
          es: "El pasado de c'è / ci sono: c'era + singular, c'erano + plural (en español siempre «había»).",
          en: "The past of c'è / ci sono: c'era + singular, c'erano + plural.",
        },
        table: [["c'era", "una piazza"], ["c'erano", "due scuole"]],
      },
      question: {
        prompt: { es: "Completa: «Nel paese ___ due scuole.»", en: "Complete: 'Nel paese ___ due scuole.'" },
        options: ["c'erano", "c'era", "erano", "c'è"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "imperfetto"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-nonni", type: "listening",
      target: "Da bambina passavo le estati dai nonni in campagna. Non c'era la televisione, ma giocavamo tutto il giorno all'aperto.",
      gloss: {
        es: "De niña pasaba los veranos en casa de mis abuelos en el campo. No había televisión, pero jugábamos todo el día al aire libre.",
        en: "As a girl I spent the summers at my grandparents' in the country. There was no TV, but we played outside all day.",
      },
      question: {
        prompt: { es: "¿Dónde pasaba los veranos?", en: "Where did she spend the summers?" },
        options: [
          { es: "En el campo, en casa de sus abuelos", en: "In the country, at her grandparents'" },
          { es: "En la playa con sus padres", en: "At the beach with her parents" },
          { es: "En la ciudad, en la escuela", en: "In town, at school" },
          { es: "En casa, viendo televisión", en: "At home, watching TV" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "childhood"],
    },
    {
      id: "dlg-com-eri", type: "dialogue", register: "informal", target: "Non stavo mai fermo!",
      gloss: { es: "¡Nunca me quedaba quieto!", en: "I could never sit still!" },
      turns: [
        { who: "A", target: "Com'eri da piccolo?", gloss: { es: "¿Cómo eras de pequeño?", en: "What were you like as a child?" } },
        { who: "B", target: "Ero molto vivace, non stavo mai fermo!", gloss: { es: "Era muy inquieto, ¡nunca me quedaba quieto!", en: "I was very lively, I could never sit still!" } },
        { who: "A", target: "Io invece ero timida e leggevo sempre.", gloss: { es: "Yo, en cambio, era tímida y siempre leía.", en: "I, on the other hand, was shy and always reading." } },
      ],
      question: {
        prompt: { es: "¿Cómo era B de niño?", en: "What was B like as a child?" },
        options: [
          { es: "Muy inquieto", en: "Very lively" },
          { es: "Tímido", en: "Shy" },
          { es: "Siempre leía", en: "Always reading" },
          { es: "Muy tranquilo", en: "Very calm" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "childhood"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-ero", type: "bridge", onlyFor: "es", target: "ero",
      gloss: { es: "yo era", en: "I was" },
      question: {
        prompt: { es: "«Yo era muy tímido» se dice…", en: "'I was very shy' is…" },
        options: ["Ero molto timido.", "Era molto timido.", "Sono stato molto timido.", "Eri molto timido."],
        answer: 0,
      },
      note: { es: "En español «era» sirve para yo y él; en italiano no: io ero, lui era (y todo el imperfetto distingue -vo / -va)." },
      exercises: ["guess", "question"], tags: ["bridge", "transfer-tip", "imperfetto"],
    },
  ]),
};
