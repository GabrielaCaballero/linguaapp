import type { PlacementItem } from "../schema";
import { spreadAnswers } from "../build";

// 30 items · 6 per band (A0, A1.1, A1.2, A2, B1) · per band: 2 vocab, 2 grammar,
// 1 listening, 1 reading. Options are authored with the key first; spreadAnswers()
// rotates them deterministically so the key isn't always in the same slot.
// b: A0 −2.5 · A1.1 −1.5 · A1.2 −0.5 · A2 +0.5 · B1 +1.5 (±0.4 within band).
const bank: PlacementItem[] = [
  // ── A0 ─────────────────────────────────────────────────────
  {
    id: "de-p-01", lang: "de", cefr: "A0", b: -2.8, skill: "vocab", kind: "mcq", stem: "Gute Nacht!",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "¡Buenas noches! (al irse a dormir)", en: "Good night!" },
        { es: "¡Buenos días!", en: "Good morning!" },
        { es: "¡Adiós!", en: "Goodbye!" },
        { es: "¡Gracias!", en: "Thank you!" },
      ],
      answer: 0,
    },
    seeds: ["de-u01-gute-nacht", "de-u01-guten-abend", "de-u01-guten-morgen"],
  },
  {
    id: "de-p-02", lang: "de", cefr: "A0", b: -2.3, skill: "vocab", kind: "mcq", stem: "Entschuldigung!",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "¡Perdón! / ¡Disculpe!", en: "Excuse me! / Sorry!" },
        { es: "¡Gracias!", en: "Thank you!" },
        { es: "¡Por favor!", en: "Please!" },
        { es: "¡Hasta pronto!", en: "See you soon!" },
      ],
      answer: 0,
    },
    seeds: ["de-u01-entschuldigung", "de-u01-danke", "de-u01-bitte"],
  },
  {
    id: "de-p-03", lang: "de", cefr: "A0", b: -2.6, skill: "grammar", kind: "cloze", stem: "Hallo! Ich ___ Lena.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["heiße", "heißt", "heißen", "heißte"],
      answer: 0,
    },
    seeds: ["de-u01-ich-heisse", "de-u01-ich-bin"],
  },
  {
    id: "de-p-04", lang: "de", cefr: "A0", b: -2.2, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: {
        es: "En una oficina le preguntas el nombre a una señora que no conoces:",
        en: "In an office you ask a woman you don't know her name:",
      },
      options: ["Wie heißen Sie?", "Wie heißt du?", "Wie heißt Sie?", "Wie heißen du?"],
      answer: 0,
    },
    seeds: ["de-u01-pat-du-sie", "de-u01-wie-heissen-sie", "de-u01-wie-heisst-du"],
  },
  {
    id: "de-p-05", lang: "de", cefr: "A0", b: -2.5, skill: "listening", kind: "listen", spoken: "Guten Abend!",
    mcq: {
      prompt: { es: "¿Qué oíste?", en: "What did you hear?" },
      options: ["Guten Abend!", "Guten Morgen!", "Guten Tag!", "Gute Nacht!"],
      answer: 0,
    },
    seeds: ["de-u01-guten-abend"],
  },
  {
    id: "de-p-06", lang: "de", cefr: "A0", b: -2.4, skill: "reading", kind: "mcq", stem: "Hallo, ich bin Marco. Wie heißt du?",
    mcq: {
      prompt: { es: "¿Qué pregunta Marco?", en: "What does Marco ask?" },
      options: [
        { es: "Tu nombre", en: "Your name" },
        { es: "De dónde eres", en: "Where you're from" },
        { es: "Cuántos años tienes", en: "How old you are" },
        { es: "Cómo estás", en: "How you are" },
      ],
      answer: 0,
    },
    seeds: ["de-u01-wie-heisst-du", "de-u01-hallo"],
  },

  // ── A1.1 ───────────────────────────────────────────────────
  {
    id: "de-p-07", lang: "de", cefr: "A1.1", b: -1.8, skill: "vocab", kind: "mcq", stem: "die Schwester",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la hermana", en: "the sister" },
        { es: "la madre", en: "the mother" },
        { es: "la hija", en: "the daughter" },
        { es: "la abuela", en: "the grandmother" },
      ],
      answer: 0,
    },
    seeds: ["de-u04-schwester", "de-u04-bruder"],
  },
  {
    id: "de-p-08", lang: "de", cefr: "A1.1", b: -1.3, skill: "vocab", kind: "mcq", stem: "der Stuhl",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la silla", en: "the chair" },
        { es: "la mesa", en: "the table" },
        { es: "la cama", en: "the bed" },
        { es: "el estante", en: "the shelf" },
      ],
      answer: 0,
    },
    seeds: ["de-u06-stuhl", "de-u06-tisch"],
  },
  {
    id: "de-p-09", lang: "de", cefr: "A1.1", b: -1.7, skill: "grammar", kind: "cloze", stem: "Woher ___ du?",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["kommst", "kommt", "komme", "kommen"],
      answer: 0,
    },
    seeds: ["de-u02-woher-kommst-du", "de-u02-pat-kommen"],
  },
  {
    id: "de-p-10", lang: "de", cefr: "A1.1", b: -1.2, skill: "grammar", kind: "cloze", stem: "Ich möchte ___ Kaffee, bitte.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["einen", "ein", "eine", "einem"],
      answer: 0,
    },
    seeds: ["de-u05-pat-ein-einen", "de-u05-kaffee"],
  },
  {
    id: "de-p-11", lang: "de", cefr: "A1.1", b: -1.5, skill: "listening", kind: "listen", spoken: "Ich bin dreiundzwanzig Jahre alt.",
    mcq: {
      prompt: { es: "¿Cuántos años tiene?", en: "How old is the speaker?" },
      options: [{ es: "23", en: "23" }, { es: "32", en: "32" }, { es: "33", en: "33" }, { es: "22", en: "22" }],
      answer: 0,
    },
    seeds: ["de-u03-pat-einundzwanzig", "de-u03-wie-alt"],
  },
  {
    id: "de-p-12", lang: "de", cefr: "A1.1", b: -1.4, skill: "reading", kind: "mcq",
    stem: "Das ist Anna. Sie kommt aus Österreich, aber sie wohnt in Berlin. Sie spricht Deutsch und Italienisch.",
    mcq: {
      prompt: { es: "¿Dónde vive Anna?", en: "Where does Anna live?" },
      options: [
        { es: "En Berlín", en: "In Berlin" },
        { es: "En Austria", en: "In Austria" },
        { es: "En Italia", en: "In Italy" },
        { es: "En Viena", en: "In Vienna" },
      ],
      answer: 0,
    },
    seeds: ["de-u02-ich-wohne", "de-u02-ich-komme"],
  },

  // ── A1.2 ───────────────────────────────────────────────────
  {
    id: "de-p-13", lang: "de", cefr: "A1.2", b: -0.4, skill: "vocab", kind: "mcq", stem: "der Termin",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la cita (con el médico, etc.)", en: "the appointment" },
        { es: "el término (la palabra)", en: "the term (word)" },
        { es: "la terminal", en: "the terminal" },
        { es: "el horario", en: "the timetable" },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-14", lang: "de", cefr: "A1.2", b: -0.7, skill: "vocab", kind: "mcq", stem: "aufstehen",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "levantarse", en: "to get up" },
        { es: "despertarse", en: "to wake up" },
        { es: "acostarse", en: "to go to bed" },
        { es: "quedarse", en: "to stay" },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-15", lang: "de", cefr: "A1.2", b: -0.6, skill: "grammar", kind: "cloze", stem: "Ich ___ jeden Tag um sieben Uhr auf.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["stehe", "aufstehe", "steht", "stehen"],
      answer: 0,
    },
  },
  {
    id: "de-p-16", lang: "de", cefr: "A1.2", b: -0.2, skill: "grammar", kind: "cloze", stem: "Gestern ___ ich ins Kino gegangen.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["bin", "habe", "hat", "war"],
      answer: 0,
    },
  },
  {
    id: "de-p-17", lang: "de", cefr: "A1.2", b: -0.5, skill: "listening", kind: "listen", spoken: "Der Zug fährt um halb neun.",
    mcq: {
      prompt: { es: "¿A qué hora sale el tren?", en: "What time does the train leave?" },
      options: [{ es: "8:30", en: "8:30" }, { es: "9:30", en: "9:30" }, { es: "9:00", en: "9:00" }, { es: "8:00", en: "8:00" }],
      answer: 0,
    },
  },
  {
    id: "de-p-18", lang: "de", cefr: "A1.2", b: -0.3, skill: "reading", kind: "mcq",
    stem: "Liebe Lena, ich kann morgen leider nicht kommen. Ich bin krank. Bis Freitag! Marco",
    mcq: {
      prompt: { es: "¿Por qué no puede ir Marco?", en: "Why can't Marco come?" },
      options: [
        { es: "Está enfermo.", en: "He's ill." },
        { es: "Tiene que trabajar.", en: "He has to work." },
        { es: "Está de viaje.", en: "He's travelling." },
        { es: "Tiene una cita el viernes.", en: "He has an appointment on Friday." },
      ],
      answer: 0,
    },
  },

  // ── A2 ─────────────────────────────────────────────────────
  {
    id: "de-p-19", lang: "de", cefr: "A2", b: 0.3, skill: "vocab", kind: "mcq", stem: "die Erfahrung",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la experiencia", en: "the experience" },
        { es: "el viaje", en: "the journey" },
        { es: "la pregunta", en: "the question" },
        { es: "la educación", en: "the education" },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-20", lang: "de", cefr: "A2", b: 0.7, skill: "vocab", kind: "mcq", stem: "eventuell",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "posiblemente, quizás", en: "possibly, perhaps" },
        { es: "finalmente, al final", en: "eventually, in the end" },
        { es: "siempre", en: "always" },
        { es: "de vez en cuando", en: "now and then" },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-21", lang: "de", cefr: "A2", b: 0.5, skill: "grammar", kind: "cloze", stem: "Ich bleibe heute zu Hause, weil ich müde ___.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["bin", "ist", "sein", "bist"],
      answer: 0,
    },
  },
  {
    id: "de-p-22", lang: "de", cefr: "A2", b: 0.6, skill: "grammar", kind: "cloze", stem: "Ich fahre jeden Tag mit ___ Bus zur Arbeit.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["dem", "den", "der", "das"],
      answer: 0,
    },
  },
  {
    id: "de-p-23", lang: "de", cefr: "A2", b: 0.4, skill: "listening", kind: "listen", spoken: "Entschuldigung, könnten Sie mir sagen, wo der Bahnhof ist?",
    mcq: {
      prompt: { es: "¿Qué quiere la persona?", en: "What does the person want?" },
      options: [
        { es: "Saber dónde está la estación.", en: "To know where the station is." },
        { es: "Comprar un billete (boleto).", en: "To buy a ticket." },
        { es: "Saber a qué hora sale el tren.", en: "To know when the train leaves." },
        { es: "Pedir un taxi.", en: "To order a taxi." },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-24", lang: "de", cefr: "A2", b: 0.8, skill: "reading", kind: "mcq",
    stem: "Wohnung zu vermieten: zwei Zimmer, Küche, Bad, Balkon. 750 Euro warm. Haustiere sind leider nicht erlaubt.",
    mcq: {
      prompt: { es: "¿Qué no está permitido?", en: "What is not allowed?" },
      options: [
        { es: "Tener mascotas", en: "Pets" },
        { es: "Fumar", en: "Smoking" },
        { es: "Usar el balcón", en: "Using the balcony" },
        { es: "Hacer fiestas", en: "Parties" },
      ],
      answer: 0,
    },
  },

  // ── B1 ─────────────────────────────────────────────────────
  {
    id: "de-p-25", lang: "de", cefr: "B1", b: 1.3, skill: "vocab", kind: "mcq", stem: "die Rente",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la jubilación (la pensión)", en: "the pension" },
        { es: "el alquiler (la renta)", en: "the rent" },
        { es: "los ingresos", en: "the income" },
        { es: "el impuesto", en: "the tax" },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-26", lang: "de", cefr: "B1", b: 1.4, skill: "vocab", kind: "mcq", stem: "sich beschweren",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "quejarse", en: "to complain" },
        { es: "preocuparse", en: "to worry" },
        { es: "describir", en: "to describe" },
        { es: "esforzarse", en: "to make an effort" },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-27", lang: "de", cefr: "B1", b: 1.6, skill: "grammar", kind: "cloze", stem: "Wenn ich mehr Zeit ___, würde ich öfter reisen.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["hätte", "habe", "hatte", "haben"],
      answer: 0,
    },
  },
  {
    id: "de-p-28", lang: "de", cefr: "B1", b: 1.8, skill: "grammar", kind: "cloze", stem: "Das ist der Mann, ___ ich gestern geholfen habe.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["dem", "den", "der", "dessen"],
      answer: 0,
    },
  },
  {
    id: "de-p-29", lang: "de", cefr: "B1", b: 1.5, skill: "listening", kind: "listen", spoken: "Obwohl es den ganzen Tag geregnet hat, sind wir spazieren gegangen.",
    mcq: {
      prompt: { es: "¿Qué pasó?", en: "What happened?" },
      options: [
        { es: "Salieron a pasear a pesar de la lluvia.", en: "They went for a walk despite the rain." },
        { es: "Se quedaron en casa por la lluvia.", en: "They stayed home because of the rain." },
        { es: "No llovió y salieron a pasear.", en: "It didn't rain, so they went for a walk." },
        { es: "Saldrán cuando deje de llover.", en: "They'll go out when the rain stops." },
      ],
      answer: 0,
    },
  },
  {
    id: "de-p-30", lang: "de", cefr: "B1", b: 1.2, skill: "reading", kind: "mcq",
    stem: "Die Stadtbibliothek wird zurzeit renoviert. Bis Ende Mai können Bücher in der Filiale am Marktplatz ausgeliehen werden.",
    mcq: {
      prompt: { es: "¿Dónde se pueden pedir libros hasta fines de mayo?", en: "Where can you borrow books until the end of May?" },
      options: [
        { es: "En otra sede de la biblioteca, en el centro", en: "At another branch of the library, in the town centre" },
        { es: "En la biblioteca central", en: "At the main library" },
        { es: "En ningún lugar", en: "Nowhere" },
        { es: "Solo por internet", en: "Only online" },
      ],
      answer: 0,
    },
  },
];

export const placement: PlacementItem[] = spreadAnswers(bank);
