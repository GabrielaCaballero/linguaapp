import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u07",
  lang: "it",
  index: 7,
  cefr: "A1.2",
  title: { target: "La mia giornata", es: "Mi día", en: "My day" },
  canDo: [
    { es: "Puedo contar mi rutina diaria con horas y frecuencia.", en: "I can describe my daily routine with times and how often." },
    { es: "Puedo preguntar y decir la hora.", en: "I can ask and tell the time." },
    { es: "Sé usar los verbos reflexivos y los verbos en -isc-.", en: "I can use reflexive verbs and -isc- verbs." },
  ],
  icon: "⏰",
  items: build("it", 7, "A1.2", [
    // ── Routine verbs ────────────────────────────────────────
    {
      id: "svegliarsi", type: "word", pos: "verb", target: "svegliarsi",
      gloss: { es: "despertarse", en: "to wake up" },
      forms: { io: "mi sveglio", tu: "ti svegli", lui: "si sveglia" },
      distractors: ["svegliare", "sbagliarsi", "spogliarsi"],
      note: { es: "Reflexivo como en español: mi sveglio = me despierto.", en: "Reflexive: mi sveglio = I wake up (literally 'I wake myself')." },
      tags: ["routine", "reflexive"],
    },
    {
      id: "alzarsi", type: "word", pos: "verb", target: "alzarsi",
      gloss: { es: "levantarse", en: "to get up" },
      forms: { io: "mi alzo", tu: "ti alzi", lui: "si alza" },
      distractors: ["alzare", "lavarsi", "calzare"],
      tags: ["routine", "reflexive"],
    },
    {
      id: "lavarsi", type: "word", pos: "verb", target: "lavarsi",
      gloss: { es: "lavarse", en: "to wash (yourself)" },
      forms: { io: "mi lavo", tu: "ti lavi", lui: "si lava" },
      distractors: ["lavare", "levarsi", "laurearsi"],
      tags: ["routine", "reflexive"],
    },
    {
      id: "vestirsi", type: "word", pos: "verb", target: "vestirsi",
      gloss: { es: "vestirse", en: "to get dressed" },
      forms: { io: "mi vesto", tu: "ti vesti", lui: "si veste" },
      distractors: ["vestire", "svestirsi", "investire"],
      tags: ["routine", "reflexive"],
    },
    {
      id: "finire", type: "word", pos: "verb", target: "finire",
      gloss: { es: "terminar", en: "to finish" },
      forms: { io: "finisco", tu: "finisci", lui: "finisce", loro: "finiscono" },
      distractors: ["fornire", "fermare", "fingere"],
      note: { es: "Verbo en -isc-: finisco, finisci… pero finiamo, finite.", en: "An -isc- verb: finisco, finisci… but finiamo, finite." },
      tags: ["routine", "isc"],
    },

    // ── Meals & parts of the day ─────────────────────────────
    {
      id: "colazione", type: "word", pos: "noun", target: "la colazione", gender: "f", plural: "le colazioni",
      gloss: { es: "el desayuno", en: "the breakfast" },
      distractors: ["la collezione", "il colazione", "la coalizione"],
      note: { es: "«fare colazione» = desayunar.", en: "'fare colazione' = to have breakfast." },
      tags: ["routine", "food"],
    },
    {
      id: "pranzo", type: "word", pos: "noun", target: "il pranzo", gender: "m", plural: "i pranzi",
      gloss: { es: "el almuerzo (la comida del mediodía)", en: "the lunch" },
      distractors: ["il prezzo", "la pranza", "il premio"],
      tags: ["routine", "food"],
    },
    {
      id: "cena", type: "word", pos: "noun", target: "la cena", gender: "f", plural: "le cene",
      gloss: { es: "la cena", en: "the dinner" },
      distractors: ["la scena", "il cena", "la cenere"],
      tags: ["routine", "food"],
    },
    {
      id: "mattina", type: "word", pos: "noun", target: "la mattina", gender: "f", plural: "le mattine",
      gloss: { es: "la mañana", en: "the morning" },
      distractors: ["la matita", "il matto", "la mattonella"],
      note: { es: "«la mattina» = por la mañana: la mattina bevo un caffè.", en: "'la mattina' also = in the morning: la mattina bevo un caffè." },
      tags: ["time"],
    },
    {
      id: "pomeriggio", type: "word", pos: "noun", target: "il pomeriggio", gender: "m", plural: "i pomeriggi",
      gloss: { es: "la tarde (después del mediodía)", en: "the afternoon" },
      distractors: ["il pomodoro", "la pomeriggio", "il meriggio"],
      tags: ["time"],
    },
    {
      id: "settimana", type: "word", pos: "noun", target: "la settimana", gender: "f", plural: "le settimane",
      gloss: { es: "la semana", en: "the week" },
      distractors: ["la settima", "il settimana", "la semana"],
      tags: ["time"],
    },
    {
      id: "lunedi", type: "word", pos: "other", target: "lunedì",
      gloss: { es: "el lunes", en: "Monday" },
      distractors: ["martedì", "mercoledì", "domenica"],
      note: { es: "Los días van en minúscula; «il lunedì» = los lunes (cada semana).", en: "Weekdays are lowercase; 'il lunedì' = on Mondays (every week)." },
      tags: ["time", "accent"],
    },

    // ── Frequency ────────────────────────────────────────────
    {
      id: "presto", type: "word", pos: "adv", target: "presto",
      gloss: { es: "temprano / pronto", en: "early / soon" },
      distractors: ["tardi", "prestito", "pronto"],
      note: { es: "«A presto» = hasta pronto. Ojo: «pronto» en italiano es «listo» (y «¿aló?» al teléfono).", en: "'A presto' = see you soon. 'Pronto' means 'ready' (and 'hello?' on the phone)." },
      tags: ["time"],
    },
    {
      id: "tardi", type: "word", pos: "adv", target: "tardi",
      gloss: { es: "tarde (no temprano)", en: "late" },
      distractors: ["presto", "tanti", "tasti"],
      tags: ["time"],
    },
    {
      id: "di-solito", type: "word", pos: "adv", target: "di solito",
      gloss: { es: "normalmente, por lo general", en: "usually" },
      distractors: ["da solo", "di sole", "solitario"],
      tags: ["frequency"],
    },
    {
      id: "sempre", type: "word", pos: "adv", target: "sempre",
      gloss: { es: "siempre", en: "always" },
      distractors: ["spesso", "sopra", "mai"],
      tags: ["frequency"],
    },
    {
      id: "spesso", type: "word", pos: "adv", target: "spesso",
      gloss: { es: "a menudo, con frecuencia", en: "often" },
      distractors: ["spesa", "stesso", "sempre"],
      tags: ["frequency"],
    },
    {
      id: "mai", type: "word", pos: "adv", target: "mai",
      gloss: { es: "nunca", en: "never" },
      distractors: ["ma", "mia", "mare"],
      note: { es: "Con «non» delante del verbo: non bevo mai il tè.", en: "Use 'non' before the verb: non bevo mai il tè (I never drink tea)." },
      tags: ["frequency"],
    },

    // ── Time & sentences ─────────────────────────────────────
    {
      id: "che-ore-sono", type: "phrase", pos: "phrase", target: "Che ore sono?",
      gloss: { es: "¿Qué hora es?", en: "What time is it?" },
      accept: [{ text: "Che ora è?" }],
      distractors: ["Che ora sono?", "Quante ore sono?", "Che ore è?"],
      tags: ["time", "chunk"],
    },
    {
      id: "sono-le-otto", type: "phrase", pos: "phrase", target: "Sono le otto.",
      gloss: { es: "Son las ocho.", en: "It's eight o'clock." },
      accept: [{ text: "Sono le otto in punto." }],
      errors: [{ text: "È le otto.", feedback: { es: "Con las horas se usa el plural: sono le otto (solo «è l'una»).", en: "Hours take the plural: sono le otto (only 'è l'una')." } }],
      distractors: ["È le otto.", "Sono otto.", "Sono gli otto."],
      tags: ["time"],
    },
    {
      id: "a-che-ora-ti-alzi", type: "sentence", register: "informal", target: "A che ora ti alzi?",
      gloss: { es: "¿A qué hora te levantas?", en: "What time do you get up?" },
      distractors: ["si", "alza", "ore"],
      tags: ["routine", "time"],
    },
    {
      id: "mi-alzo-alle-sette", type: "sentence", target: "Mi alzo alle sette.",
      gloss: { es: "Me levanto a las siete.", en: "I get up at seven." },
      errors: [{ text: "Alzo alle sette.", feedback: { es: "Falta el reflexivo: mi alzo.", en: "The reflexive pronoun is missing: mi alzo." } }],
      distractors: ["ci", "alzi", "a"],
      tags: ["routine", "time", "reflexive"],
    },
    {
      id: "faccio-colazione", type: "sentence", target: "Di solito faccio colazione al bar.",
      gloss: { es: "Normalmente desayuno en el bar (la cafetería).", en: "I usually have breakfast at the café." },
      errors: [{ text: "Di solito prendo colazione al bar.", feedback: { es: "Se dice «fare colazione».", en: "Italian says 'fare colazione'." } }],
      distractors: ["prendo", "alla", "solita"],
      tags: ["routine", "food"],
    },
    {
      id: "finisco-alle-sei", type: "sentence", target: "Finisco di lavorare alle sei.",
      gloss: { es: "Termino de trabajar a las seis.", en: "I finish work at six." },
      accept: [{ text: "Finisco il lavoro alle sei." }],
      distractors: ["Fino", "finisce", "a"],
      tags: ["routine", "isc"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-riflessivi", type: "pattern", target: "mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano",
      gloss: { es: "verbos reflexivos", en: "reflexive verbs" },
      pattern: {
        rule: {
          es: "Como en español, el pronombre va antes del verbo: mi alzo (me levanto), ci alziamo (nos levantamos).",
          en: "The pronoun (mi, ti, si, ci, vi, si) goes before the verb: mi alzo = I get up, ci alziamo = we get up.",
        },
        table: [["io", "mi alzo"], ["tu", "ti alzi"], ["lui / lei", "si alza"], ["noi", "ci alziamo"], ["voi", "vi alzate"], ["loro", "si alzano"]],
      },
      question: {
        prompt: { es: "Completa: «Noi ___ alle sette.» (alzarsi)", en: "Complete: 'Noi ___ alle sette.' (alzarsi)" },
        options: ["ci alziamo", "si alziamo", "ci alzano", "mi alziamo"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "reflexive"],
    },
    {
      id: "pat-isc", type: "pattern", target: "finisco, finisci, finisce, finiamo, finite, finiscono",
      gloss: { es: "verbos en -ire con -isc-", en: "-ire verbs with -isc-" },
      pattern: {
        rule: {
          es: "Algunos verbos en -ire (finire, capire, preferire) añaden -isc- en todas las formas menos noi y voi.",
          en: "Some -ire verbs (finire, capire, preferire) add -isc- in every form except noi and voi.",
        },
        table: [["io", "capisco"], ["tu", "capisci"], ["lui / lei", "capisce"], ["noi", "capiamo"], ["voi", "capite"], ["loro", "capiscono"]],
      },
      question: {
        prompt: { es: "Completa con «capire»: «Loro non ___.»", en: "Complete with 'capire': 'Loro non ___.'" },
        options: ["capiscono", "capono", "capiamo", "capisce"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "isc"],
    },
    {
      id: "pat-ore", type: "pattern", target: "Sono le tre e mezza · È l'una",
      gloss: { es: "decir la hora", en: "telling the time" },
      pattern: {
        rule: {
          es: "«Sono le» + número (sono le tre); pero «è l'una», «è mezzogiorno», «è mezzanotte». Minutos: e un quarto, e mezza, meno un quarto.",
          en: "'Sono le' + number (sono le tre), but 'è l'una', 'è mezzogiorno', 'è mezzanotte'. Minutes: e un quarto, e mezza, meno un quarto.",
        },
        table: [["3:00", "sono le tre"], ["1:00", "è l'una"], ["3:15", "sono le tre e un quarto"], ["3:30", "sono le tre e mezza"], ["2:45", "sono le tre meno un quarto"]],
      },
      question: {
        prompt: { es: "«Son las tres y media» es…", en: "'It's half past three' is…" },
        options: ["Sono le tre e mezza.", "È le tre e mezza.", "Sono tre e mezza.", "Sono le tre e metà."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "time"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-giornata", type: "listening",
      target: "Mi sveglio alle sette, faccio colazione e alle otto prendo l'autobus. Finisco di lavorare alle cinque.",
      gloss: {
        es: "Me despierto a las siete, desayuno y a las ocho tomo el autobús. Termino de trabajar a las cinco.",
        en: "I wake up at seven, have breakfast and at eight I take the bus. I finish work at five.",
      },
      question: {
        prompt: { es: "¿A qué hora toma el autobús?", en: "What time does the speaker take the bus?" },
        options: [
          { es: "A las ocho", en: "At eight" },
          { es: "A las siete", en: "At seven" },
          { es: "A las cinco", en: "At five" },
          { es: "A las nueve", en: "At nine" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "routine"],
    },
    {
      id: "dlg-sabato", type: "dialogue", register: "informal", target: "Beato te!",
      gloss: { es: "¡Qué suerte tienes!", en: "Lucky you!" },
      turns: [
        { who: "A", target: "A che ora ti alzi la mattina?", gloss: { es: "¿A qué hora te levantas por la mañana?", en: "What time do you get up in the morning?" } },
        { who: "B", target: "Di solito alle sette, ma il sabato dormo fino alle dieci.", gloss: { es: "Normalmente a las siete, pero los sábados duermo hasta las diez.", en: "Usually at seven, but on Saturdays I sleep until ten." } },
        { who: "A", target: "Beato te! Io mi alzo sempre alle sei.", gloss: { es: "¡Qué suerte tienes! Yo siempre me levanto a las seis.", en: "Lucky you! I always get up at six." } },
      ],
      question: {
        prompt: { es: "¿Qué hace B los sábados?", en: "What does B do on Saturdays?" },
        options: [
          { es: "Duerme hasta las diez.", en: "Sleeps until ten." },
          { es: "Se levanta a las seis.", en: "Gets up at six." },
          { es: "Se levanta a las siete.", en: "Gets up at seven." },
          { es: "Trabaja hasta las diez.", en: "Works until ten." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "routine"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-tardi", type: "bridge", onlyFor: "es", target: "tardi",
      gloss: { es: "tarde (no temprano)", en: "late" },
      question: {
        prompt: { es: "«Arrivo tardi» significa…", en: "'Arrivo tardi' means…" },
        options: [
          { es: "Llego tarde.", en: "I'm arriving late." },
          { es: "Llego por la tarde.", en: "I'm arriving in the afternoon." },
          { es: "Llego temprano.", en: "I'm arriving early." },
          { es: "Llego mañana.", en: "I'm arriving tomorrow." },
        ],
        answer: 0,
      },
      note: { es: "El español «tarde» son dos palabras en italiano: tardi (no temprano) e il pomeriggio (la tarde del día)." },
      exercises: ["guess", "question"], tags: ["bridge", "transfer-tip"],
    },
  ]),
};
