import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u12",
  lang: "it",
  index: 12,
  cefr: "A2",
  title: { target: "In viaggio", es: "De viaje", en: "Travelling" },
  canDo: [
    { es: "Puedo hablar de planes de viaje y del tiempo que va a hacer.", en: "I can talk about travel plans and the weather forecast." },
    { es: "Puedo registrarme en un hotel y hacer preguntas sencillas.", en: "I can check in at a hotel and ask simple questions." },
    { es: "Sé usar el futuro, los pronombres lo / la / li / le y «ci» (allí).", en: "I can use the future tense, the pronouns lo / la / li / le and 'ci' (there)." },
  ],
  icon: "🧳",
  items: build("it", 12, "A2", [
    // ── Travel ───────────────────────────────────────────────
    {
      id: "viaggio", type: "word", pos: "noun", target: "il viaggio", gender: "m", plural: "i viaggi",
      gloss: { es: "el viaje", en: "the trip / journey" },
      distractors: ["la viaggio", "il villaggio", "il passaggio"],
      note: { es: "Buon viaggio! = ¡Buen viaje!", en: "Buon viaggio! = Have a good trip!" },
      tags: ["travel"],
    },
    {
      id: "valigia", type: "word", pos: "noun", target: "la valigia", gender: "f", plural: "le valigie",
      gloss: { es: "la maleta", en: "the suitcase" },
      distractors: ["la vaniglia", "il valigio", "la valle"],
      note: { es: "«fare la valigia» = hacer la maleta.", en: "'fare la valigia' = to pack." },
      tags: ["travel"],
    },
    {
      id: "volo", type: "word", pos: "noun", target: "il volo", gender: "m", plural: "i voli",
      gloss: { es: "el vuelo", en: "the flight" },
      distractors: ["il velo", "il vuoto", "la vola"],
      tags: ["travel"],
    },
    {
      id: "aereo", type: "word", pos: "noun", target: "l'aereo", gender: "m", plural: "gli aerei",
      gloss: { es: "el avión", en: "the plane" },
      distractors: ["l'aria", "l'area", "la aereo"],
      note: { es: "«in aereo» = en avión (como in treno, in macchina).", en: "'in aereo' = by plane (like in treno, in macchina)." },
      tags: ["travel", "transport"],
    },
    {
      id: "prenotare", type: "word", pos: "verb", target: "prenotare",
      gloss: { es: "reservar", en: "to book / reserve" },
      forms: { io: "prenoto", pp: "prenotato", aux: "avere" },
      distractors: ["pernottare", "prestare", "notare"],
      note: { es: "la prenotazione = la reserva.", en: "la prenotazione = the booking (reservation)." },
      tags: ["travel"],
    },
    {
      id: "partire", type: "word", pos: "verb", target: "partire",
      gloss: { es: "salir (de viaje), partir", en: "to leave (on a trip)" },
      forms: { io: "parto", pp: "partito", aux: "essere" },
      distractors: ["partecipare", "spartire", "portare"],
      note: { es: "partire per + destino: parto per Roma.", en: "partire per + destination: parto per Roma." },
      tags: ["travel"],
    },
    {
      id: "tornare", type: "word", pos: "verb", target: "tornare",
      gloss: { es: "volver, regresar", en: "to come back / return" },
      forms: { io: "torno", pp: "tornato", aux: "essere" },
      distractors: ["girare", "tuonare", "tornire"],
      tags: ["travel"],
    },
    {
      id: "domani", type: "word", pos: "adv", target: "domani",
      gloss: { es: "mañana (el día siguiente)", en: "tomorrow" },
      distractors: ["dopo", "oggi", "stamattina"],
      tags: ["time", "future"],
    },
    {
      id: "anno-prossimo", type: "phrase", pos: "phrase", target: "l'anno prossimo",
      gloss: { es: "el año que viene", en: "next year" },
      accept: [{ text: "il prossimo anno" }],
      distractors: ["l'anno scorso", "l'anno passato", "l'anno prossima"],
      tags: ["time", "future"],
    },

    // ── Weather ──────────────────────────────────────────────
    {
      id: "che-tempo-fa", type: "phrase", pos: "phrase", target: "Che tempo fa?",
      gloss: { es: "¿Qué tiempo hace?", en: "What's the weather like?" },
      accept: [{ text: "Com'è il tempo?" }],
      distractors: ["Che tempo è?", "Come tempo fa?", "Che tempo ha?"],
      tags: ["weather", "chunk"],
    },
    {
      id: "piove", type: "word", pos: "verb", target: "piove",
      gloss: { es: "llueve / está lloviendo", en: "it's raining" },
      distractors: ["piace", "piange", "pioggia"],
      note: { es: "piovere: piove, è piovuto (o ha piovuto). La lluvia = la pioggia.", en: "piovere: piove, è piovuto (or ha piovuto). Rain = la pioggia." },
      tags: ["weather"],
    },
    {
      id: "fa-caldo", type: "phrase", pos: "phrase", target: "Fa caldo.",
      gloss: { es: "Hace calor.", en: "It's hot (weather)." },
      distractors: ["È caldo.", "Ha caldo.", "Fa freddo."],
      note: { es: "Para el clima: fa caldo. Para una persona: ho caldo (tengo calor).", en: "Weather: fa caldo. A person: ho caldo (I'm hot)." },
      tags: ["weather"],
    },
    {
      id: "fa-freddo", type: "phrase", pos: "phrase", target: "Fa freddo.",
      gloss: { es: "Hace frío.", en: "It's cold (weather)." },
      distractors: ["È freddo.", "Ha freddo.", "Fa caldo."],
      tags: ["weather"],
    },
    {
      id: "ce-il-sole", type: "phrase", pos: "phrase", target: "C'è il sole.",
      gloss: { es: "Hace sol. / Está soleado.", en: "It's sunny." },
      distractors: ["Fa il sole.", "Ha il sole.", "È sole."],
      tags: ["weather"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "domani-partiro", type: "sentence", target: "Domani partirò per Napoli.",
      gloss: { es: "Mañana saldré para Nápoles.", en: "Tomorrow I'll leave for Naples." },
      accept: [{ text: "Domani parto per Napoli." }],
      distractors: ["partirà", "a", "partito"],
      note: { es: "Como en español, el presente también sirve para un futuro cercano: domani parto.", en: "The present also works for a near future: domani parto." },
      tags: ["future", "travel"],
    },
    {
      id: "andremo-in-sicilia", type: "sentence", target: "L'anno prossimo andremo in Sicilia.",
      gloss: { es: "El año que viene iremos a Sicilia.", en: "Next year we'll go to Sicily." },
      accept: [{ text: "Il prossimo anno andremo in Sicilia." }],
      errors: [{ text: "L'anno prossimo anderemo in Sicilia.", feedback: { es: "El futuro de andare pierde la e: andrò, andremo.", en: "andare drops the e in the future: andrò, andremo." } }],
      distractors: ["anderemo", "a", "andiamo"],
      tags: ["future", "travel"],
    },
    {
      id: "hai-prenotato", type: "sentence", register: "informal", target: "Hai prenotato l'albergo?",
      gloss: { es: "¿Reservaste el hotel?", en: "Have you booked the hotel?" },
      accept: [{ text: "Hai prenotato l'hotel?" }],
      distractors: ["sei", "prenotata", "il"],
      tags: ["travel", "past"],
    },
    {
      id: "lho-prenotato", type: "sentence", target: "Sì, l'ho prenotato ieri.",
      gloss: { es: "Sí, lo reservé ayer.", en: "Yes, I booked it yesterday." },
      errors: [{ text: "Sì, lo ho prenotato ieri.", feedback: { es: "lo + ho se apostrofa: l'ho.", en: "lo + ho elides: l'ho." } }],
      distractors: ["gli", "ha", "prenotati"],
      tags: ["travel", "pronouns"],
    },
    {
      id: "ci-vado-in-treno", type: "sentence", target: "Ci vado in treno.",
      gloss: { es: "Voy (allá) en tren.", en: "I'm going there by train." },
      errors: [{ text: "Vado in treno ci.", feedback: { es: "«ci» va antes del verbo: ci vado.", en: "'ci' goes before the verb: ci vado." } }],
      distractors: ["Ne", "nel", "vengo"],
      tags: ["travel", "ci"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-futuro", type: "pattern", target: "parlerò · prenderò · partirò · sarò",
      gloss: { es: "el futuro simple", en: "the simple future" },
      pattern: {
        rule: {
          es: "Infinitivo sin -e + -ò, -ai, -à, -emo, -ete, -anno; -are cambia a -er-: parlerò. Irregulares: sarò, avrò, andrò, farò, verrò.",
          en: "Infinitive minus -e + -ò, -ai, -à, -emo, -ete, -anno; -are becomes -er-: parlerò. Irregular: sarò, avrò, andrò, farò, verrò.",
        },
        table: [["", "parlare", "prendere", "essere"], ["io", "parlerò", "prenderò", "sarò"], ["tu", "parlerai", "prenderai", "sarai"], ["lui / lei", "parlerà", "prenderà", "sarà"], ["noi", "parleremo", "prenderemo", "saremo"], ["loro", "parleranno", "prenderanno", "saranno"]],
      },
      question: {
        prompt: { es: "Completa con «essere» (io): «Domani ___ a Roma.»", en: "Complete with 'essere' (io): 'Domani ___ a Roma.'" },
        options: ["sarò", "sarà", "essero", "sono stato"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "future"],
    },
    {
      id: "pat-pronomi-diretti", type: "pattern", target: "lo · la · li · le",
      gloss: { es: "pronombres de objeto directo", en: "direct object pronouns" },
      pattern: {
        rule: {
          es: "lo (m), la (f), li (m pl), le (f pl) van antes del verbo: lo compro. Ante ho/ha: l'ho visto, l'ho vista.",
          en: "lo (m), la (f), li (m pl), le (f pl) go before the verb: lo compro. Before ho/ha: l'ho visto, l'ho vista.",
        },
        table: [["il giornale", "lo compro"], ["la pizza", "la mangio"], ["i biglietti", "li prendo"], ["le chiavi", "le cerco"]],
      },
      question: {
        prompt: { es: "«Compri il giornale?» — «Sì, ___ compro.»", en: "'Compri il giornale?' — 'Sì, ___ compro.'" },
        options: ["lo", "la", "li", "gli"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "pronouns"],
    },
    {
      id: "pat-ci", type: "pattern", target: "ci = lì, in quel posto",
      gloss: { es: "«ci» de lugar (allí)", en: "'ci' meaning 'there'" },
      pattern: {
        rule: {
          es: "«ci» reemplaza un lugar ya mencionado y va antes del verbo: Vai a Roma? Sì, ci vado domani.",
          en: "'ci' replaces a place already mentioned and goes before the verb: Vai a Roma? Sì, ci vado domani.",
        },
        table: [["Vai in palestra?", "Sì, ci vado."], ["Sei mai stato a Napoli?", "No, non ci sono mai stato."]],
      },
      question: {
        prompt: { es: "«Vai spesso in palestra?» — «Sì, ___ vado tre volte alla settimana.»", en: "'Vai spesso in palestra?' — 'Sì, ___ vado tre volte alla settimana.'" },
        options: ["ci", "ne", "lo", "la"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "ci"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-meteo", type: "listening",
      target: "Domani al nord pioverà tutto il giorno, mentre al sud ci sarà il sole e farà caldo.",
      gloss: {
        es: "Mañana en el norte lloverá todo el día, mientras que en el sur habrá sol y hará calor.",
        en: "Tomorrow it will rain all day in the north, while the south will be sunny and hot.",
      },
      question: {
        prompt: { es: "¿Qué tiempo hará en el sur?", en: "What will the weather be like in the south?" },
        options: [
          { es: "Sol y calor", en: "Sunny and hot" },
          { es: "Lluvia todo el día", en: "Rain all day" },
          { es: "Frío y nublado", en: "Cold and cloudy" },
          { es: "Nieve", en: "Snow" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "weather"],
    },
    {
      id: "dlg-albergo", type: "dialogue", register: "formal", target: "Ho una prenotazione.",
      gloss: { es: "Tengo una reserva.", en: "I have a booking (reservation)." },
      turns: [
        { who: "A", target: "Buonasera, ho una prenotazione a nome Bianchi.", gloss: { es: "Buenas noches, tengo una reserva a nombre de Bianchi.", en: "Good evening, I have a booking in the name of Bianchi." } },
        { who: "B", target: "Sì, una camera doppia per tre notti. Ecco la chiave.", gloss: { es: "Sí, una habitación doble para tres noches. Aquí tiene la llave.", en: "Yes, a double room for three nights. Here's the key." } },
        { who: "A", target: "Grazie. A che ora è la colazione?", gloss: { es: "Gracias. ¿A qué hora es el desayuno?", en: "Thank you. What time is breakfast?" } },
        { who: "B", target: "Dalle sette alle dieci.", gloss: { es: "De siete a diez.", en: "From seven to ten." } },
      ],
      question: {
        prompt: { es: "¿Cuántas noches se queda?", en: "How many nights is the guest staying?" },
        options: [
          { es: "Tres", en: "Three" },
          { es: "Dos", en: "Two" },
          { es: "Siete", en: "Seven" },
          { es: "Diez", en: "Ten" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "travel"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-albergo", type: "bridge", onlyFor: "es", target: "l'albergo",
      gloss: { es: "el hotel", en: "the hotel" },
      question: {
        prompt: { es: "«l'albergo» significa…", en: "'l'albergo' means…" },
        options: [
          { es: "el hotel", en: "the hotel" },
          { es: "el albergue para mochileros", en: "the youth hostel" },
          { es: "la alberca (piscina)", en: "the swimming pool" },
          { es: "el almacén", en: "the warehouse" },
        ],
        answer: 0,
      },
      note: { es: "l'albergo = el hotel (también «l'hotel»); el albergue juvenil es «l'ostello»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "travel"],
    },
  ]),
};
