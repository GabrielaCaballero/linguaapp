import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u12",
  lang: "de",
  index: 12,
  cefr: "A2",
  title: { target: "Unterwegs", es: "De viaje", en: "Travelling" },
  canDo: [
    { es: "Puedo comprar un boleto y reservar un hotel.", en: "I can buy a ticket and book a hotel." },
    { es: "Puedo hablar del tiempo y comparar lugares y medios de transporte.", en: "I can talk about the weather and compare places and ways of travelling." },
    { es: "Sé usar las preposiciones con dativo o acusativo (¿dónde? / ¿adónde?).", en: "I can use two-way prepositions (where? / where to?)." },
  ],
  icon: "🚆",
  items: build("de", 12, "A2", [
    // ── Weather ──────────────────────────────────────────────
    {
      id: "wetter", type: "word", pos: "other", target: "das Wetter",
      gloss: { es: "el tiempo (el clima)", en: "the weather" },
      distractors: ["das Wasser", "der Wetter", "die Wette"],
      tags: ["weather", "goethe-a1"],
    },
    {
      id: "regnen", type: "word", pos: "verb", target: "regnen",
      gloss: { es: "llover", en: "to rain" },
      forms: { es: "regnet", pp: "hat geregnet" },
      distractors: ["rechnen", "reden", "regeln"],
      note: { es: "Siempre con «es»: es regnet. La lluvia = der Regen.", en: "Always with 'es': es regnet. Rain = der Regen." },
      tags: ["weather", "goethe-a1"],
    },
    {
      id: "sonne", type: "word", pos: "noun", target: "die Sonne", gender: "f", plural: "die Sonnen",
      gloss: { es: "el sol", en: "the sun" },
      distractors: ["der Sonne", "der Sohn", "die Sonde"],
      note: { es: "¡Femenino en alemán (y la luna masculino: der Mond)!", en: "Feminine (and the moon is masculine: der Mond)." },
      tags: ["weather", "goethe-a1"],
    },
    {
      id: "warm", type: "word", pos: "adj", target: "warm",
      gloss: { es: "cálido/a, templado/a", en: "warm" },
      distractors: ["wahr", "arm", "wach"],
      tags: ["weather", "goethe-a1"],
    },
    {
      id: "kalt", type: "word", pos: "adj", target: "kalt",
      gloss: { es: "frío/a", en: "cold" },
      distractors: ["alt", "hart", "kahl"],
      note: { es: "Mir ist kalt = tengo frío.", en: "Mir ist kalt = I'm cold." },
      tags: ["weather", "goethe-a1"],
    },

    // ── Travel ───────────────────────────────────────────────
    {
      id: "zug", type: "word", pos: "noun", target: "der Zug", gender: "m", plural: "die Züge",
      gloss: { es: "el tren", en: "the train" },
      distractors: ["die Zug", "der Flug", "das Zeug"],
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "flughafen", type: "word", pos: "noun", target: "der Flughafen", gender: "m", plural: "die Flughäfen",
      gloss: { es: "el aeropuerto", en: "the airport" },
      distractors: ["das Flughafen", "der Hafen", "der Flugplan"],
      note: { es: "der Flug (vuelo) + der Hafen (puerto).", en: "der Flug (flight) + der Hafen (port)." },
      tags: ["travel", "compound", "goethe-a1"],
    },
    {
      id: "hotel", type: "word", pos: "noun", target: "das Hotel", gender: "n", plural: "die Hotels",
      gloss: { es: "el hotel", en: "the hotel" },
      distractors: ["der Hotel", "das Hostel", "das Motel"],
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "koffer", type: "word", pos: "noun", target: "der Koffer", gender: "m", plural: "die Koffer",
      gloss: { es: "la maleta", en: "the suitcase" },
      distractors: ["die Koffer", "der Kaffee", "der Kofferraum"],
      note: { es: "der Kofferraum = el baúl (la cajuela, el maletero) del auto.", en: "der Kofferraum = the car boot (trunk)." },
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "meer", type: "word", pos: "noun", target: "das Meer", gender: "n", plural: "die Meere",
      gloss: { es: "el mar", en: "the sea" },
      distractors: ["der Meer", "das Mehl", "der See"],
      note: { es: "Ojo: der See = el lago.", en: "Careful: der See = lake." },
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "berg", type: "word", pos: "noun", target: "der Berg", gender: "m", plural: "die Berge",
      gloss: { es: "la montaña", en: "the mountain" },
      distractors: ["die Berg", "die Burg", "der Bart"],
      note: { es: "in die Berge fahren = ir a la montaña.", en: "in die Berge fahren = to go to the mountains." },
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "reisen", type: "word", pos: "verb", target: "reisen",
      gloss: { es: "viajar", en: "to travel" },
      forms: { pp: "ist gereist" },
      distractors: ["reißen", "reiten", "rasen"],
      note: { es: "Una s: reisen (viajar). Con ß: reißen (romper, arrancar).", en: "One s: reisen (travel). With ß: reißen (tear)." },
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "buchen", type: "word", pos: "verb", target: "buchen",
      gloss: { es: "reservar", en: "to book" },
      forms: { pp: "hat gebucht" },
      distractors: ["suchen", "backen", "brauchen"],
      tags: ["travel", "goethe-a2"],
    },
    {
      id: "besser", type: "word", pos: "adj", target: "besser",
      gloss: { es: "mejor", en: "better" },
      distractors: ["lieber", "böser", "mehr"],
      note: { es: "gut → besser → am besten.", en: "gut → besser → am besten." },
      tags: ["comparison", "goethe-a1"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "wie-ist-das-wetter", type: "sentence", target: "Wie ist das Wetter in Berlin?",
      gloss: { es: "¿Qué tiempo hace en Berlín?", en: "What's the weather like in Berlin?" },
      distractors: ["Was", "der", "im"],
      tags: ["weather"],
    },
    {
      id: "morgen-regnet-es", type: "sentence", target: "Morgen regnet es.",
      gloss: { es: "Mañana va a llover.", en: "It's going to rain tomorrow." },
      accept: [{ text: "Es regnet morgen." }],
      errors: [{ text: "Morgen es regnet.", feedback: { es: "Verbo en segunda posición: Morgen regnet es.", en: "The verb comes second: Morgen regnet es." } }],
      distractors: ["ist", "Regen", "regen"],
      note: { es: "El presente sirve para el futuro con una palabra de tiempo: morgen regnet es.", en: "The present works for the future with a time word: morgen regnet es." },
      tags: ["weather", "word-order"],
    },
    {
      id: "koffer-liegt", type: "sentence", target: "Der Koffer liegt auf dem Bett.",
      gloss: { es: "La maleta está sobre la cama.", en: "The suitcase is on the bed." },
      errors: [{ text: "Der Koffer liegt auf das Bett.", feedback: { es: "¿Dónde? → dativo: auf dem Bett.", en: "Where? → dative: auf dem Bett." } }],
      distractors: ["das", "den", "legt"],
      tags: ["two-way", "dative"],
    },
    {
      id: "koffer-legen", type: "sentence", target: "Ich lege den Koffer aufs Bett.",
      gloss: { es: "Pongo la maleta sobre la cama.", en: "I'm putting the suitcase on the bed." },
      accept: [{ text: "Ich lege den Koffer auf das Bett." }],
      errors: [{ text: "Ich lege den Koffer auf dem Bett.", feedback: { es: "¿Adónde? (movimiento) → acusativo: auf das / aufs Bett.", en: "Where to? (movement) → accusative: auf das / aufs Bett." } }],
      distractors: ["dem", "liege", "der"],
      tags: ["two-way", "accusative"],
    },
    {
      id: "zug-schneller", type: "sentence", target: "Der Zug ist schneller als der Bus.",
      gloss: { es: "El tren es más rápido que el autobús.", en: "The train is faster than the bus." },
      accept: [{ text: "Der Zug ist schneller wie der Bus.", verdict: "almost", feedback: { es: "Coloquial; en estándar: schneller als.", en: "Colloquial; standard German: schneller als." } }],
      errors: [{ text: "Der Zug ist mehr schnell als der Bus.", feedback: { es: "Comparativo con -er: schneller (no «mehr schnell»).", en: "Comparative with -er: schneller (not 'mehr schnell')." } }],
      distractors: ["mehr", "schnell", "dann"],
      tags: ["comparison"],
    },
    {
      id: "hotel-am-meer", type: "sentence", target: "Wir haben ein Hotel am Meer gebucht.",
      gloss: { es: "Reservamos un hotel junto al mar.", en: "We've booked a hotel by the sea." },
      distractors: ["im", "gebuchen", "sind"],
      tags: ["travel", "past"],
    },
    {
      id: "lieber-mit-dem-zug", type: "sentence", target: "Ich fahre lieber mit dem Zug.",
      gloss: { es: "Prefiero ir en tren.", en: "I'd rather go by train." },
      distractors: ["gern", "den", "fährt"],
      tags: ["travel", "comparison"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-wechselpraep", type: "pattern", target: "Wo? im Park · Wohin? in den Park",
      gloss: { es: "preposiciones de dos casos", en: "two-way prepositions" },
      pattern: {
        rule: {
          es: "in, an, auf, über, unter, vor, hinter, neben, zwischen: ¿dónde? → dativo (im Park); ¿adónde? (movimiento) → acusativo (in den Park).",
          en: "in, an, auf, über, unter, vor, hinter, neben, zwischen: where? → dative (im Park); where to? (movement) → accusative (in den Park).",
        },
        table: [["", "Wo? (Dativ)", "Wohin? (Akkusativ)"], ["der Park", "im Park", "in den Park"], ["die Stadt", "in der Stadt", "in die Stadt"], ["das Bett", "auf dem Bett", "aufs Bett"]],
      },
      question: {
        prompt: { es: "Completa (¿adónde?): «Ich gehe in ___ Park.»", en: "Complete (where to?): 'Ich gehe in ___ Park.'" },
        options: ["den", "dem", "der", "das"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "two-way"],
    },
    {
      id: "pat-komparativ", type: "pattern", target: "schnell · schneller · am schnellsten",
      gloss: { es: "comparativo y superlativo", en: "comparative and superlative" },
      pattern: {
        rule: {
          es: "Comparativo: -er + als (schneller als). Superlativo: am -sten. Muchos llevan umlaut: groß → größer; irregulares: gut → besser, viel → mehr, gern → lieber.",
          en: "Comparative: -er + als (schneller als). Superlative: am -sten. Many add an umlaut: groß → größer; irregular: gut → besser, viel → mehr, gern → lieber.",
        },
        table: [["schnell", "schneller", "am schnellsten"], ["groß", "größer", "am größten"], ["gut", "besser", "am besten"], ["gern", "lieber", "am liebsten"]],
      },
      question: {
        prompt: { es: "Completa con «groß»: «Berlin ist ___ als München.»", en: "Complete with 'groß': 'Berlin ist ___ als München.'" },
        options: ["größer", "großer", "mehr groß", "am größten"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "comparison"],
    },
    {
      id: "pat-wetter", type: "pattern", target: "Es regnet. · Es schneit. · Die Sonne scheint.",
      gloss: { es: "hablar del tiempo", en: "talking about the weather" },
      pattern: {
        rule: {
          es: "El tiempo usa «es» como sujeto: es regnet, es schneit, es ist kalt. Excepción: die Sonne scheint.",
          en: "Weather verbs use 'es' as the subject: es regnet, es schneit, es ist kalt. Exception: die Sonne scheint.",
        },
        table: [["llueve / it's raining", "Es regnet."], ["nieva / it's snowing", "Es schneit."], ["hace sol / it's sunny", "Die Sonne scheint."], ["hace frío / it's cold", "Es ist kalt."]],
      },
      question: {
        prompt: { es: "«Está nevando» es…", en: "'It's snowing' is…" },
        options: ["Es schneit.", "Es regnet.", "Er schneit.", "Es ist Schnee."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "weather"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-wetterbericht", type: "listening",
      target: "Morgen wird es im Norden kalt, und es regnet. Im Süden scheint die Sonne, und es wird bis zu fünfundzwanzig Grad warm.",
      gloss: {
        es: "Mañana hará frío en el norte y lloverá. En el sur hará sol y llegará a veinticinco grados.",
        en: "Tomorrow it will be cold in the north, with rain. In the south the sun will shine, with temperatures up to twenty-five degrees.",
      },
      question: {
        prompt: { es: "¿Qué tiempo hará en el sur?", en: "What will the weather be like in the south?" },
        options: [
          { es: "Sol y hasta veinticinco grados", en: "Sunny, up to twenty-five degrees" },
          { es: "Frío y lluvia", en: "Cold and rainy" },
          { es: "Nieve", en: "Snow" },
          { es: "Sol, pero frío", en: "Sunny but cold" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "weather"],
    },
    {
      id: "dlg-fahrkarte", type: "dialogue", register: "formal", target: "Hin und zurück, bitte.",
      gloss: { es: "Ida y vuelta, por favor.", en: "A return (round trip), please." },
      turns: [
        { who: "A", target: "Eine Fahrkarte nach Köln, bitte.", gloss: { es: "Un boleto (billete) a Colonia, por favor.", en: "A ticket to Cologne, please." } },
        { who: "B", target: "Einfach oder hin und zurück?", gloss: { es: "¿Solo ida o ida y vuelta?", en: "Single or return?" } },
        { who: "A", target: "Hin und zurück, bitte.", gloss: { es: "Ida y vuelta, por favor.", en: "Return, please." } },
        { who: "B", target: "Das macht neunundachtzig Euro.", gloss: { es: "Son ochenta y nueve euros.", en: "That's eighty-nine euros." } },
      ],
      question: {
        prompt: { es: "¿Qué boleto compra A?", en: "What ticket does A buy?" },
        options: [
          { es: "Ida y vuelta a Colonia", en: "A return to Cologne" },
          { es: "Solo ida a Colonia", en: "A single to Cologne" },
          { es: "Ida y vuelta a Hamburgo", en: "A return to Hamburg" },
          { es: "Un boleto de autobús", en: "A bus ticket" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "travel"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-mantel", type: "bridge", onlyFor: "es", target: "der Mantel",
      gloss: { es: "el abrigo", en: "the coat" },
      question: {
        prompt: { es: "«Ich packe meinen Mantel ein» significa…", en: "'Ich packe meinen Mantel ein' means…" },
        options: [
          { es: "Meto mi abrigo en la maleta.", en: "I'm packing my coat." },
          { es: "Meto mi mantel en la maleta.", en: "I'm packing my tablecloth." },
          { es: "Meto mi manta en la maleta.", en: "I'm packing my blanket." },
          { es: "Meto mi mantequilla en la maleta.", en: "I'm packing my butter." },
        ],
        answer: 0,
      },
      note: { es: "der Mantel = el abrigo; el mantel es «die Tischdecke»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "travel"],
    },
  ]),
};
