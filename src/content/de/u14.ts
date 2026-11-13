import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u14",
  lang: "de",
  index: 14,
  cefr: "B1",
  title: { target: "Erinnerungen", es: "Recuerdos", en: "Memories" },
  canDo: [
    { es: "Puedo contar recuerdos de mi infancia y mi vida.", en: "I can talk about memories of my childhood and my life." },
    { es: "Puedo narrar hechos en orden, con lo que había pasado antes.", en: "I can narrate events in order, including what had happened before." },
    { es: "Sé usar el Präteritum, el Plusquamperfekt y elegir entre als y wenn.", en: "I can use the Präteritum and Plusquamperfekt and choose between als and wenn." },
  ],
  icon: "🕰️",
  items: build("de", 14, "B1", [
    // ── Words ────────────────────────────────────────────────
    {
      id: "kindheit", type: "word", pos: "other", target: "die Kindheit",
      gloss: { es: "la infancia", en: "childhood" },
      distractors: ["die Kinder", "die Kenntnis", "die Klarheit"],
      note: { es: "-heit siempre es femenino: die Kindheit, die Freiheit.", en: "-heit nouns are always feminine: die Kindheit, die Freiheit." },
      tags: ["memories", "goethe-b1"],
    },
    {
      id: "damals", type: "word", pos: "adv", target: "damals",
      gloss: { es: "en aquel entonces", en: "back then / at that time" },
      distractors: ["damit", "manchmal", "dann"],
      tags: ["memories", "goethe-a2"],
    },
    {
      id: "frueher", type: "word", pos: "adv", target: "früher",
      gloss: { es: "antes (en el pasado)", en: "in the past / used to" },
      distractors: ["später", "führen", "früh"],
      note: { es: "Früher wohnte ich in Köln = antes vivía en Colonia.", en: "Früher wohnte ich in Köln = I used to live in Cologne." },
      tags: ["memories", "goethe-a2"],
    },
    {
      id: "als", type: "word", pos: "other", target: "als",
      gloss: { es: "cuando (una vez, en el pasado)", en: "when (once, in the past)" },
      distractors: ["wenn", "wann", "also"],
      note: { es: "als = un solo momento o período pasado; wenn = cada vez que.", en: "als = a single past moment or period; wenn = whenever." },
      tags: ["memories", "connectors", "goethe-a2"],
    },
    {
      id: "sich-erinnern", type: "word", pos: "verb", target: "sich erinnern",
      gloss: { es: "acordarse, recordar", en: "to remember" },
      forms: { ich: "erinnere mich", pp: "hat sich erinnert" },
      distractors: ["sich ändern", "sich irren", "sich ernähren"],
      note: { es: "sich erinnern an + acusativo: ich erinnere mich an dich.", en: "sich erinnern an + accusative: ich erinnere mich an dich." },
      tags: ["memories", "reflexive", "goethe-a2"],
    },
    {
      id: "erinnerung", type: "word", pos: "noun", target: "die Erinnerung", gender: "f", plural: "die Erinnerungen",
      gloss: { es: "el recuerdo", en: "the memory" },
      distractors: ["der Erinnerung", "die Erfindung", "die Erinnerungen"],
      tags: ["memories", "goethe-b1"],
    },
    {
      id: "aufwachsen", type: "word", pos: "verb", target: "aufwachsen",
      gloss: { es: "crecer, criarse", en: "to grow up" },
      forms: { er: "wächst auf", pp: "ist aufgewachsen" },
      distractors: ["aufwachen", "aufpassen", "aufräumen"],
      note: { es: "Ojo: aufwachen = despertarse.", en: "Careful: aufwachen = to wake up." },
      tags: ["memories", "separable", "goethe-b1"],
    },
    {
      id: "umziehen", type: "word", pos: "verb", target: "umziehen",
      gloss: { es: "mudarse (de casa)", en: "to move (house)" },
      forms: { er: "zieht um", pp: "ist umgezogen" },
      distractors: ["anziehen", "umsteigen", "erziehen"],
      note: { es: "sich umziehen (reflexivo) = cambiarse de ropa.", en: "sich umziehen (reflexive) = to get changed." },
      tags: ["memories", "separable", "goethe-a2"],
    },
    {
      id: "dorf", type: "word", pos: "noun", target: "das Dorf", gender: "n", plural: "die Dörfer",
      gloss: { es: "el pueblo (la aldea)", en: "the village" },
      distractors: ["der Dorf", "das Dach", "der Torf"],
      tags: ["memories", "goethe-a2"],
    },
    {
      id: "grundschule", type: "word", pos: "noun", target: "die Grundschule", gender: "f", plural: "die Grundschulen",
      gloss: { es: "la escuela primaria", en: "primary (elementary) school" },
      distractors: ["der Grundschule", "die Hochschule", "die Grundlage"],
      tags: ["memories", "school", "goethe-a2"],
    },
    {
      id: "passieren", type: "word", pos: "verb", target: "passieren",
      gloss: { es: "pasar, ocurrir", en: "to happen" },
      forms: { pp: "ist passiert" },
      distractors: ["passen", "spazieren", "parieren"],
      note: { es: "Sin ge- (-ieren) y con sein: Was ist passiert?", en: "No ge- (-ieren verb) and takes sein: Was ist passiert?" },
      tags: ["memories", "goethe-a2"],
    },
    {
      id: "ploetzlich", type: "word", pos: "adv", target: "plötzlich",
      gloss: { es: "de repente", en: "suddenly" },
      distractors: ["pünktlich", "fröhlich", "persönlich"],
      tags: ["memories", "goethe-a2"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "als-ich-kind-war", type: "sentence", target: "Als ich ein Kind war, wohnten wir auf dem Land.",
      gloss: { es: "Cuando era niño/a, vivíamos en el campo.", en: "When I was a child, we lived in the country." },
      accept: [{ text: "Als ich klein war, wohnten wir auf dem Land." }, { text: "Als ich ein Kind war, haben wir auf dem Land gewohnt." }],
      errors: [{ text: "Wenn ich ein Kind war, wohnten wir auf dem Land.", feedback: { es: "Un período pasado único → als (wenn = cada vez que).", en: "A single past period → als (wenn = whenever)." } }],
      distractors: ["wenn", "wohnen", "bin"],
      tags: ["memories", "praeteritum", "als-wenn"],
    },
    {
      id: "im-dorf-aufgewachsen", type: "sentence", target: "Ich bin in einem kleinen Dorf aufgewachsen.",
      gloss: { es: "Crecí en un pueblo pequeño.", en: "I grew up in a small village." },
      errors: [{ text: "Ich habe in einem kleinen Dorf aufgewachsen.", feedback: { es: "aufwachsen va con sein: ich bin aufgewachsen.", en: "aufwachsen takes sein: ich bin aufgewachsen." } }],
      distractors: ["habe", "kleines", "aufgewachst"],
      tags: ["memories", "perfekt"],
    },
    {
      id: "frueher-lange-haare", type: "sentence", target: "Früher hatte ich lange Haare.",
      gloss: { es: "Antes tenía el pelo largo.", en: "I used to have long hair." },
      distractors: ["habe", "langen", "Haar"],
      tags: ["memories", "praeteritum"],
    },
    {
      id: "ploetzlich-klingelte", type: "sentence", target: "Plötzlich klingelte das Telefon.",
      gloss: { es: "De repente sonó el teléfono.", en: "Suddenly the phone rang." },
      accept: [{ text: "Plötzlich hat das Telefon geklingelt." }],
      errors: [{ text: "Plötzlich das Telefon klingelte.", feedback: { es: "Verbo en 2.ª posición: Plötzlich klingelte das Telefon.", en: "The verb comes second: Plötzlich klingelte das Telefon." } }],
      distractors: ["klingelt", "die", "klang"],
      tags: ["memories", "praeteritum", "word-order"],
    },
    {
      id: "zug-war-abgefahren", type: "sentence", target: "Als wir ankamen, war der Zug schon abgefahren.",
      gloss: { es: "Cuando llegamos, el tren ya se había ido.", en: "When we arrived, the train had already left." },
      errors: [{ text: "Als wir ankamen, hatte der Zug schon abgefahren.", feedback: { es: "abfahren va con sein: war abgefahren.", en: "abfahren takes sein: war abgefahren." } }],
      distractors: ["hatte", "ist", "kamen"],
      tags: ["memories", "plusquamperfekt"],
    },
    {
      id: "kannst-du-dich-erinnern", type: "sentence", register: "informal", target: "Kannst du dich daran erinnern?",
      gloss: { es: "¿Te acuerdas de eso?", en: "Can you remember that?" },
      accept: [{ text: "Erinnerst du dich daran?" }],
      distractors: ["dir", "darauf", "erinnerst"],
      tags: ["memories", "reflexive"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-praeteritum", type: "pattern", target: "machte · wohnte · ging · kam · sah · konnte",
      gloss: { es: "el Präteritum", en: "the Präteritum (simple past)" },
      pattern: {
        rule: {
          es: "Es el pasado de los relatos escritos. Regulares: raíz + -te (machte); irregulares cambian la vocal (gehen → ging, kommen → kam). ich y er/sie son iguales.",
          en: "The past tense of written narrative. Regular: stem + -te (machte); irregular verbs change vowel (gehen → ging, kommen → kam). ich and er/sie are the same.",
        },
        table: [["", "machen", "gehen", "kommen", "können"], ["ich / er", "machte", "ging", "kam", "konnte"], ["du", "machtest", "gingst", "kamst", "konntest"], ["wir / sie", "machten", "gingen", "kamen", "konnten"]],
      },
      question: {
        prompt: { es: "Completa con «gehen» (Präteritum): «Gestern ___ wir ins Kino.»", en: "Complete with 'gehen' (Präteritum): 'Gestern ___ wir ins Kino.'" },
        options: ["gingen", "gehten", "gangen", "gegangen"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "praeteritum"],
    },
    {
      id: "pat-als-wenn", type: "pattern", target: "als · wenn · wann",
      gloss: { es: "als, wenn y wann (cuando)", en: "als, wenn and wann (when)" },
      pattern: {
        rule: {
          es: "als = una vez en el pasado (als ich zehn war). wenn = cada vez que, o en presente y futuro (wenn es regnet…). wann = pregunta (Wann kommst du?).",
          en: "als = once in the past (als ich zehn war). wenn = whenever, or present/future (wenn es regnet…). wann = question word (Wann kommst du?).",
        },
        table: [["als", "Als ich zehn war, …"], ["wenn", "Immer wenn ich Zeit hatte, …"], ["wann", "Wann hast du Zeit?"]],
      },
      question: {
        prompt: { es: "Completa: «___ ich zehn war, bekam ich einen Hund.»", en: "Complete: '___ ich zehn war, bekam ich einen Hund.'" },
        options: ["Als", "Wenn", "Wann", "Ob"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "als-wenn"],
    },
    {
      id: "pat-plusquamperfekt", type: "pattern", target: "Ich hatte gegessen. · Er war gegangen.",
      gloss: { es: "el Plusquamperfekt (había + participio)", en: "the Plusquamperfekt (had + participle)" },
      pattern: {
        rule: {
          es: "hatte / war + participio, para lo que pasó antes de otro hecho pasado; muy común con nachdem: Nachdem er gegessen hatte, ging er spazieren.",
          en: "hatte / war + participle, for what had happened before another past event; common with nachdem: Nachdem er gegessen hatte, ging er spazieren.",
        },
        table: [["haben", "ich hatte gegessen"], ["sein", "ich war gegangen"]],
      },
      question: {
        prompt: { es: "Completa: «Nachdem er gegessen ___, ging er spazieren.»", en: "Complete: 'Nachdem er gegessen ___, ging er spazieren.'" },
        options: ["hatte", "war", "hat", "ist"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "plusquamperfekt"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-grosseltern", type: "listening",
      target: "Als ich klein war, verbrachten wir jeden Sommer bei meinen Großeltern am See. Mein Opa brachte mir dort das Schwimmen bei.",
      gloss: {
        es: "Cuando era pequeño/a, pasábamos todos los veranos en casa de mis abuelos, junto al lago. Allí mi abuelo me enseñó a nadar.",
        en: "When I was little, we spent every summer at my grandparents' by the lake. My grandpa taught me to swim there.",
      },
      question: {
        prompt: { es: "¿Qué le enseñó el abuelo?", en: "What did the grandfather teach the speaker?" },
        options: [
          { es: "A nadar", en: "To swim" },
          { es: "A pescar", en: "To fish" },
          { es: "A andar en bicicleta", en: "To ride a bike" },
          { es: "A cocinar", en: "To cook" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "memories"],
    },
    {
      id: "dlg-aufgewachsen", type: "dialogue", register: "informal", target: "Ab und zu.",
      gloss: { es: "De vez en cuando.", en: "Now and then." },
      turns: [
        { who: "A", target: "Wo bist du eigentlich aufgewachsen?", gloss: { es: "¿Y tú dónde creciste?", en: "So where did you grow up?" } },
        { who: "B", target: "In einem Dorf in Bayern. Mit sechzehn sind wir dann nach Berlin gezogen.", gloss: { es: "En un pueblo de Baviera. A los dieciséis nos mudamos a Berlín.", en: "In a village in Bavaria. When I was sixteen we moved to Berlin." } },
        { who: "A", target: "Vermisst du das Dorf manchmal?", gloss: { es: "¿Extrañas el pueblo a veces?", en: "Do you ever miss the village?" } },
        { who: "B", target: "Ja, ab und zu schon.", gloss: { es: "Sí, de vez en cuando, sí.", en: "Yes, now and then." } },
      ],
      question: {
        prompt: { es: "¿Cuándo se mudó B a Berlín?", en: "When did B move to Berlin?" },
        options: [
          { es: "A los dieciséis años", en: "At sixteen" },
          { es: "A los seis años", en: "At six" },
          { es: "El año pasado", en: "Last year" },
          { es: "Nunca se mudó", en: "B never moved" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "memories"],
    },
  ]),
};
