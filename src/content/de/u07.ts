import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u07",
  lang: "de",
  index: 7,
  cefr: "A1.2",
  title: { target: "Mein Tag", es: "Mi día", en: "My day" },
  canDo: [
    { es: "Puedo contar mi rutina diaria con horas.", en: "I can describe my daily routine with times." },
    { es: "Puedo preguntar y decir la hora.", en: "I can ask and tell the time." },
    { es: "Sé usar los verbos separables (ich stehe um sieben auf).", en: "I can use separable verbs (ich stehe um sieben auf)." },
  ],
  icon: "⏰",
  items: build("de", 7, "A1.2", [
    // ── Routine verbs ────────────────────────────────────────
    {
      id: "aufstehen", type: "word", pos: "verb", target: "aufstehen",
      gloss: { es: "levantarse", en: "to get up" },
      forms: { ich: "stehe auf", du: "stehst auf", er: "steht auf", pp: "ist aufgestanden" },
      distractors: ["verstehen", "aufhören", "anstehen"],
      note: { es: "Verbo separable: ich stehe um sieben auf.", en: "Separable verb: ich stehe um sieben auf." },
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "fruehstuecken", type: "word", pos: "verb", target: "frühstücken",
      gloss: { es: "desayunar", en: "to have breakfast" },
      forms: { ich: "frühstücke", du: "frühstückst", er: "frühstückt" },
      distractors: ["frühzeitig", "fröhlich", "flüstern"],
      note: { es: "El desayuno = das Frühstück (sustantivo, con mayúscula).", en: "Breakfast = das Frühstück (noun, capitalised)." },
      tags: ["routine", "goethe-a1"],
    },
    {
      id: "anfangen", type: "word", pos: "verb", target: "anfangen",
      gloss: { es: "empezar", en: "to start / begin" },
      forms: { ich: "fange an", du: "fängst an", er: "fängt an", pp: "hat angefangen" },
      distractors: ["anfassen", "empfangen", "auffangen"],
      note: { es: "Separable y con umlaut en du/er: du fängst an.", en: "Separable, with an umlaut in du/er: du fängst an." },
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "einkaufen", type: "word", pos: "verb", target: "einkaufen",
      gloss: { es: "hacer las compras", en: "to do the shopping" },
      forms: { ich: "kaufe ein", er: "kauft ein" },
      distractors: ["verkaufen", "einladen", "einpacken"],
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "fernsehen", type: "word", pos: "verb", target: "fernsehen",
      gloss: { es: "ver televisión", en: "to watch TV" },
      forms: { ich: "sehe fern", du: "siehst fern", er: "sieht fern" },
      distractors: ["versehen", "ansehen", "fernbleiben"],
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "anrufen", type: "word", pos: "verb", target: "anrufen",
      gloss: { es: "llamar (por teléfono)", en: "to call (on the phone)" },
      forms: { ich: "rufe an", er: "ruft an", pp: "hat angerufen" },
      distractors: ["aufrufen", "anrühren", "annehmen"],
      note: { es: "Con acusativo: ich rufe dich an (te llamo).", en: "Takes the accusative: ich rufe dich an." },
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "schlafen", type: "word", pos: "verb", target: "schlafen",
      gloss: { es: "dormir", en: "to sleep" },
      forms: { ich: "schlafe", du: "schläfst", er: "schläft" },
      distractors: ["schlagen", "schaffen", "laufen"],
      tags: ["routine", "goethe-a1"],
    },
    {
      id: "arbeiten", type: "word", pos: "verb", target: "arbeiten",
      gloss: { es: "trabajar", en: "to work" },
      forms: { ich: "arbeite", du: "arbeitest", er: "arbeitet" },
      distractors: ["atmen", "warten", "bereiten"],
      note: { es: "Raíz en -t: se añade una e: du arbeitest, er arbeitet.", en: "Stem ends in -t, so add an e: du arbeitest, er arbeitet." },
      tags: ["routine", "goethe-a1"],
    },

    // ── Time ─────────────────────────────────────────────────
    {
      id: "uhr", type: "word", pos: "noun", target: "die Uhr", gender: "f", plural: "die Uhren",
      gloss: { es: "el reloj / la hora (en punto)", en: "the clock / o'clock" },
      distractors: ["das Uhr", "das Ohr", "die Uhren"],
      note: { es: "um acht Uhr = a las ocho; Wie viel Uhr ist es? = ¿Qué hora es?", en: "um acht Uhr = at eight o'clock; Wie viel Uhr ist es? = What time is it?" },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "stunde", type: "word", pos: "noun", target: "die Stunde", gender: "f", plural: "die Stunden",
      gloss: { es: "la hora (sesenta minutos)", en: "the hour" },
      distractors: ["der Stunde", "die Stelle", "die Stunden"],
      note: { es: "Duración: eine Stunde; hora del reloj: acht Uhr.", en: "A duration is eine Stunde; clock time is acht Uhr." },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "abend", type: "word", pos: "noun", target: "der Abend", gender: "m", plural: "die Abende",
      gloss: { es: "la noche (desde que oscurece)", en: "the evening" },
      distractors: ["das Abend", "der Abstand", "das Abendessen"],
      note: { es: "am Abend / abends = por la noche.", en: "am Abend / abends = in the evening." },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "frueh", type: "word", pos: "adv", target: "früh",
      gloss: { es: "temprano", en: "early" },
      distractors: ["spät", "froh", "frei"],
      tags: ["time", "goethe-a1"],
    },
    {
      id: "spaet", type: "word", pos: "adv", target: "spät",
      gloss: { es: "tarde (no temprano)", en: "late" },
      distractors: ["früh", "spitz", "satt"],
      tags: ["time", "goethe-a1"],
    },
    {
      id: "manchmal", type: "word", pos: "adv", target: "manchmal",
      gloss: { es: "a veces", en: "sometimes" },
      distractors: ["mehrmals", "niemals", "damals"],
      tags: ["frequency", "goethe-a1"],
    },
    {
      id: "jeden-tag", type: "phrase", pos: "phrase", target: "jeden Tag",
      gloss: { es: "todos los días", en: "every day" },
      distractors: ["jede Tag", "jeder Tag", "alle Tag"],
      note: { es: "Acusativo de tiempo: jeden Tag, jede Woche, jedes Jahr.", en: "Time in the accusative: jeden Tag, jede Woche, jedes Jahr." },
      tags: ["frequency", "chunk"],
    },

    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "wie-spaet", type: "phrase", pos: "phrase", target: "Wie spät ist es?",
      gloss: { es: "¿Qué hora es?", en: "What time is it?" },
      accept: [{ text: "Wie viel Uhr ist es?" }],
      distractors: ["Wie spät bist du?", "Was spät ist es?", "Wie viel Uhr hast du?"],
      tags: ["time", "chunk"],
    },
    {
      id: "halb-acht", type: "phrase", pos: "phrase", target: "Es ist halb acht.",
      gloss: { es: "Son las siete y media.", en: "It's half past seven." },
      distractors: ["Es ist halb sieben.", "Es ist acht halb.", "Es ist halb nach acht."],
      note: { es: "«halb acht» = media hora antes de las ocho, o sea 7:30.", en: "'halb acht' = half to eight, i.e. 7:30." },
      tags: ["time"],
    },
    {
      id: "ich-stehe-auf", type: "sentence", target: "Ich stehe um sieben Uhr auf.",
      gloss: { es: "Me levanto a las siete.", en: "I get up at seven." },
      accept: [{ text: "Ich stehe um sieben auf." }],
      errors: [{ text: "Ich aufstehe um sieben Uhr.", feedback: { es: "El prefijo va al final: ich stehe … auf.", en: "The prefix goes to the end: ich stehe … auf." } }],
      distractors: ["aufstehe", "am", "stehen"],
      tags: ["routine", "separable"],
    },
    {
      id: "um-acht-fruehstuecke", type: "sentence", target: "Um acht Uhr frühstücke ich.",
      gloss: { es: "A las ocho desayuno.", en: "At eight I have breakfast." },
      accept: [{ text: "Ich frühstücke um acht Uhr." }, { text: "Um acht frühstücke ich." }],
      errors: [{ text: "Um acht Uhr ich frühstücke.", feedback: { es: "El verbo va en segunda posición: Um acht Uhr frühstücke ich.", en: "The verb comes second: Um acht Uhr frühstücke ich." } }],
      distractors: ["frühstückt", "am", "Frühstück"],
      tags: ["routine", "word-order"],
    },
    {
      id: "film-faengt-an", type: "sentence", target: "Der Film fängt um acht an.",
      gloss: { es: "La película empieza a las ocho.", en: "The film starts at eight." },
      accept: [{ text: "Der Film fängt um acht Uhr an." }, { text: "Der Film beginnt um acht." }, { text: "Der Film beginnt um acht Uhr." }],
      distractors: ["anfängt", "fangt", "am"],
      tags: ["time", "separable"],
    },
    {
      id: "am-abend-fernsehen", type: "sentence", target: "Am Abend sehe ich fern.",
      gloss: { es: "Por la noche veo televisión.", en: "In the evening I watch TV." },
      accept: [{ text: "Abends sehe ich fern." }, { text: "Ich sehe am Abend fern." }],
      distractors: ["fernsehe", "im", "sieht"],
      tags: ["routine", "separable"],
    },
    {
      id: "ich-rufe-dich-an", type: "sentence", register: "informal", target: "Ich rufe dich morgen an.",
      gloss: { es: "Te llamo mañana.", en: "I'll call you tomorrow." },
      errors: [{ text: "Ich anrufe dich morgen.", feedback: { es: "anrufen es separable: ich rufe dich … an.", en: "anrufen is separable: ich rufe dich … an." } }],
      distractors: ["anrufe", "dir", "ruft"],
      tags: ["routine", "separable"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-trennbar", type: "pattern", target: "aufstehen → Ich stehe um sieben auf.",
      gloss: { es: "verbos separables", en: "separable verbs" },
      pattern: {
        rule: {
          es: "El verbo va en 2.ª posición y el prefijo (auf-, an-, ein-, fern-) al final de la frase: Ich kaufe heute ein.",
          en: "The verb goes in 2nd position and the prefix (auf-, an-, ein-, fern-) at the end of the clause: Ich kaufe heute ein.",
        },
        table: [["aufstehen", "Ich stehe früh auf."], ["anfangen", "Der Kurs fängt um neun an."], ["einkaufen", "Wir kaufen am Samstag ein."], ["fernsehen", "Er sieht jeden Abend fern."]],
      },
      question: {
        prompt: { es: "Completa: «Wann ___ der Kurs an?»", en: "Complete: 'Wann ___ der Kurs an?'" },
        options: ["fängt", "anfängt", "fangt", "fängst"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "separable"],
    },
    {
      id: "pat-uhrzeit", type: "pattern", target: "Viertel nach sieben · halb acht · Viertel vor acht",
      gloss: { es: "decir la hora", en: "telling the time" },
      pattern: {
        rule: {
          es: "«halb» mira a la hora siguiente: halb acht = 7:30. Viertel nach sieben = 7:15, Viertel vor acht = 7:45.",
          en: "'halb' looks ahead to the next hour: halb acht = 7:30. Viertel nach sieben = 7:15, Viertel vor acht = 7:45.",
        },
        table: [["7:00", "sieben Uhr"], ["7:15", "Viertel nach sieben"], ["7:30", "halb acht"], ["7:45", "Viertel vor acht"]],
      },
      question: {
        prompt: { es: "«Son las seis y media» es…", en: "'It's half past six' is…" },
        options: ["Es ist halb sieben.", "Es ist halb sechs.", "Es ist sechs halb.", "Es ist halb nach sechs."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "time"],
    },
    {
      id: "pat-am-um", type: "pattern", target: "am Montag · am Abend · um acht Uhr",
      gloss: { es: "am (días, partes del día) y um (horas)", en: "am (days, parts of the day) and um (clock times)" },
      pattern: {
        rule: {
          es: "am + día o parte del día (am Montag, am Abend); um + hora del reloj (um acht Uhr). Excepción: in der Nacht.",
          en: "am + day or part of the day (am Montag, am Abend); um + clock time (um acht Uhr). Exception: in der Nacht.",
        },
        table: [["am", "Montag · Morgen · Abend · Wochenende"], ["um", "acht Uhr · halb neun"]],
      },
      question: {
        prompt: { es: "Completa: «Der Kurs ist ___ Montag ___ zehn Uhr.»", en: "Complete: 'Der Kurs ist ___ Montag ___ zehn Uhr.'" },
        options: ["am … um", "um … am", "im … um", "am … im"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "time", "prepositions"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-mein-tag", type: "listening",
      target: "Ich stehe um halb sieben auf und frühstücke. Um acht fange ich an zu arbeiten. Am Abend koche ich und sehe ein bisschen fern.",
      gloss: {
        es: "Me levanto a las seis y media y desayuno. A las ocho empiezo a trabajar. Por la noche cocino y veo un poco de televisión.",
        en: "I get up at half past six and have breakfast. At eight I start work. In the evening I cook and watch a bit of TV.",
      },
      question: {
        prompt: { es: "¿A qué hora empieza a trabajar?", en: "What time does the speaker start work?" },
        options: [
          { es: "A las ocho", en: "At eight" },
          { es: "A las seis y media", en: "At half past six" },
          { es: "A las siete y media", en: "At half past seven" },
          { es: "A las nueve", en: "At nine" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "routine"],
    },
    {
      id: "dlg-wochenende", type: "dialogue", register: "informal", target: "Ich nicht.",
      gloss: { es: "Yo no.", en: "Not me." },
      turns: [
        { who: "A", target: "Wann stehst du am Wochenende auf?", gloss: { es: "¿A qué hora te levantas el fin de semana?", en: "When do you get up at the weekend?" } },
        { who: "B", target: "Spät! Am Samstag schlafe ich bis zehn.", gloss: { es: "¡Tarde! El sábado duermo hasta las diez.", en: "Late! On Saturday I sleep until ten." } },
        { who: "A", target: "Ich nicht. Ich stehe immer früh auf.", gloss: { es: "Yo no. Yo siempre me levanto temprano.", en: "Not me. I always get up early." } },
      ],
      question: {
        prompt: { es: "¿Hasta qué hora duerme B el sábado?", en: "Until when does B sleep on Saturday?" },
        options: [
          { es: "Hasta las diez", en: "Until ten" },
          { es: "Hasta las ocho", en: "Until eight" },
          { es: "Hasta las doce", en: "Until twelve" },
          { es: "Se levanta temprano", en: "B gets up early" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "routine"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-wer", type: "bridge", onlyFor: "en", target: "wer",
      gloss: { es: "quién", en: "who" },
      question: {
        prompt: { es: "«Wer ruft an?» significa…", en: "'Wer ruft an?' means…" },
        options: [
          { es: "¿Quién llama?", en: "Who's calling?" },
          { es: "¿Dónde llama?", en: "Where is he calling?" },
          { es: "¿Por qué llama?", en: "Why is he calling?" },
          { es: "¿Cuándo llama?", en: "When is he calling?" },
        ],
        answer: 0,
      },
      note: { en: "wer = who and wo = where: the opposite of what English suggests." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
