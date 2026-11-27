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
      forms: { es: "regnet", pp: "geregnet", aux: "haben" },
      distractors: ["rechnen", "reden", "regeln"],
      note: { es: "Siempre con «es»: es regnet. La lluvia = der Regen.", en: "Always with 'es': es regnet. Rain = der Regen." },
      tags: ["weather", "goethe-a1"],
    },
    {
      id: "schneien", type: "word", pos: "verb", target: "schneien",
      gloss: { es: "nevar", en: "to snow" },
      forms: { es: "schneit", pp: "geschneit", aux: "haben" },
      distractors: ["scheinen", "schneiden", "schreien"],
      note: { es: "Siempre con «es»: es schneit. La nieve = der Schnee.", en: "Always with 'es': es schneit. Snow = der Schnee." },
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
    {
      id: "wie-ist-das-wetter", type: "sentence", target: "Wie ist das Wetter in Berlin?",
      gloss: { es: "¿Qué tiempo hace en Berlín?", en: "What's the weather like in Berlin?" },
      distractors: ["Was", "der", "im"],
      tags: ["weather"],
    },
    {
      id: "morgen-regnet-es", type: "sentence", target: "Morgen regnet es.",
      gloss: { es: "Mañana va a llover.", en: "It's going to rain tomorrow." },
      accept: [{ text: "Es regnet morgen." }, { text: "Morgen wird es regnen." }],
      errors: [{ text: "Morgen es regnet.", feedback: { es: "Verbo en segunda posición: Morgen regnet es.", en: "The verb comes second: Morgen regnet es." } }],
      distractors: ["ist", "Regen", "regen"],
      note: { es: "El presente sirve para el futuro con una palabra de tiempo: morgen regnet es.", en: "The present works for the future with a time word: morgen regnet es." },
      tags: ["weather", "word-order"],
    },
    {
      id: "pat-wetter", type: "pattern", target: "Es regnet. · Es schneit. · Die Sonne scheint.",
      gloss: { es: "hablar del tiempo", en: "talking about the weather" },
      pattern: {
        rule: {
          es: "El tiempo usa «es» como sujeto: es regnet, es schneit, es ist kalt. Excepción: die Sonne scheint.",
          en: "Weather verbs use 'es' as the subject: es regnet, es schneit, es ist kalt. Exception: die Sonne scheint.",
        },
        table: [["Es regnet."], ["Es schneit."], ["Die Sonne scheint."], ["Es ist kalt."]],
        meanings: [
          { es: "Llueve.", en: "It's raining." },
          { es: "Nieva.", en: "It's snowing." },
          { es: "Hace sol.", en: "The sun is shining." },
          { es: "Hace frío.", en: "It's cold." },
        ],
      },
      question: {
        prompt: { es: "Está nevando. ¿Cómo se dice?", en: "It's snowing. How do you say it?" },
        options: ["Es schneit.", "Es regnet.", "Er schneit.", "Es ist Schnee."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-wetter"], tags: ["grammar", "weather"],
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
      forms: { ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen", pp: "gereist", aux: "sein" },
      distractors: ["reißen", "reiten", "rasen"],
      note: { es: "Una s: reisen (viajar). Con ß: reißen (romper, arrancar).", en: "One s: reisen (travel). With ß: reißen (tear)." },
      tags: ["travel", "goethe-a1"],
    },
    {
      id: "tab-reisen", type: "paradigm", target: "reisen — Präsens", spoken: "reisen",
      gloss: { es: "reisen (viajar) — presente", en: "reisen (to travel) — present" },
      grammar: ["de-g-stamm-s"],
      paradigm: {
        caption: { es: "Conjuga «reisen» (du: solo -t)", en: "Conjugate reisen (du: just -t)" },
        cells: [
          { label: "ich", answer: "reise", ruleId: "de-g-stamm-s" },
          { label: "du", answer: "reist", ruleId: "de-g-stamm-s" },
          { label: "er / sie / es", answer: "reist", ruleId: "de-g-stamm-s" },
          { label: "wir", answer: "reisen", ruleId: "de-g-stamm-s" },
          { label: "ihr", answer: "reist", ruleId: "de-g-stamm-s" },
          { label: "sie / Sie", answer: "reisen", ruleId: "de-g-stamm-s" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "reist-du-gern", type: "sentence", register: "informal", target: "Reist du gern?",
      gloss: { es: "¿Te gusta viajar?", en: "Do you like travelling?" },
      errors: [{ text: "Reisst du gern?", feedback: { es: "La raíz ya termina en -s: du reist.", en: "The stem already ends in -s: du reist." }, ruleId: "de-g-stamm-s" }],
      distractors: ["Reisst du gern?", "Reisen du gern?", "Reist du gut?"],
      tags: ["travel", "present"],
    },
    {
      id: "buchen", type: "word", pos: "verb", target: "buchen",
      gloss: { es: "reservar", en: "to book" },
      forms: { ich: "buche", du: "buchst", er: "bucht", wir: "buchen", ihr: "bucht", sie: "buchen", pp: "gebucht", aux: "haben" },
      distractors: ["suchen", "backen", "brauchen"],
      tags: ["travel", "goethe-a2"],
    },
    {
      id: "hotel-am-meer", type: "sentence", target: "Wir haben ein Hotel am Meer gebucht.",
      gloss: { es: "Reservamos un hotel junto al mar.", en: "We've booked a hotel by the sea." },
      distractors: ["im", "gebuchen", "sind"],
      tags: ["travel", "past"],
    },

    // ── Comparing: -er + als, then am -sten ──────────────────
    {
      id: "schnell", type: "word", pos: "adj", target: "schnell",
      gloss: { es: "rápido/a", en: "fast / quick" },
      distractors: ["schön", "schlecht", "langsam"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "pat-komparativ", type: "pattern", target: "schnell → schneller als",
      gloss: { es: "el comparativo: -er + als", en: "the comparative: -er + als" },
      pattern: {
        rule: {
          es: "Para comparar no se usa «más»: se añade -er al adjetivo y «que» es als: schneller als (más rápido que). Los adjetivos cortos con a, o, u suelen llevar diéresis: alt → älter.",
          en: "German doesn't use 'more': add -er to the adjective, and 'than' is als: schneller als. Short adjectives with a, o, u often take an umlaut: alt → älter.",
        },
        table: [["schnell", "schneller"], ["billig", "billiger"], ["warm", "wärmer"], ["alt", "älter"]],
        meanings: [
          { es: "rápido → más rápido", en: "fast → faster" },
          { es: "barato → más barato", en: "cheap → cheaper" },
          { es: "cálido → más cálido", en: "warm → warmer" },
          { es: "viejo → mayor (más viejo)", en: "old → older" },
        ],
      },
      question: {
        prompt: { es: "Completa con «groß»: «Berlin ist ___ als München.»", en: "Complete with 'groß': 'Berlin ist ___ als München.'" },
        options: ["größer", "großer", "mehr groß", "am größten"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-komparativ"], tags: ["grammar", "comparison"],
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
      id: "pat-superlativ", type: "pattern", target: "am schnellsten",
      gloss: { es: "el superlativo: am … -sten", en: "the superlative: am … -sten" },
      pattern: {
        rule: {
          es: "Para decir que algo es lo más rápido, lo más barato…, usa am + adjetivo + -sten: am schnellsten. Tras -t o -d se añade -e-: am ältesten.",
          en: "To say something is the fastest, the cheapest…, use am + adjective + -sten: am schnellsten. After -t or -d add an -e-: am ältesten.",
        },
        table: [["schnell", "am schnellsten"], ["warm", "am wärmsten"], ["alt", "am ältesten"]],
        meanings: [
          { es: "rápido → lo más rápido", en: "fast → fastest" },
          { es: "cálido → lo más cálido", en: "warm → warmest" },
          { es: "viejo → el mayor", en: "old → oldest" },
        ],
      },
      question: {
        prompt: { es: "Completa con «billig» (lo más barato): «Der Bus ist ___.»", en: "Complete with 'billig' (cheapest): 'Der Bus ist ___.'" },
        options: ["am billigsten", "am billigeren", "billigsten", "am billigste"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-komparativ"], tags: ["grammar", "comparison"],
    },
    {
      id: "im-sueden-am-waermsten", type: "sentence", target: "Im Süden ist es am wärmsten.",
      gloss: { es: "En el sur es donde hace más calor.", en: "It's warmest in the south." },
      errors: [{ text: "Im Süden ist es am wärmste.", feedback: { es: "El superlativo termina en -sten: am wärmsten.", en: "The superlative ends in -sten: am wärmsten." }, ruleId: "de-g-komparativ" }],
      distractors: ["Im Süden ist es am wärmste.", "Im Süden ist es mehr warm.", "Im Süden es ist am wärmsten."],
      tags: ["weather", "comparison"],
    },

    // ── Two irregular ones: besser, lieber ───────────────────
    {
      id: "besser", type: "word", pos: "adj", target: "besser",
      gloss: { es: "mejor", en: "better" },
      distractors: ["lieber", "böser", "mehr"],
      note: { es: "gut → besser → am besten.", en: "gut → besser → am besten." },
      tags: ["comparison", "goethe-a1"],
    },
    {
      id: "pat-lieber", type: "pattern", target: "gern → lieber → am liebsten",
      gloss: { es: "preferir: gern → lieber", en: "preferring: gern → lieber" },
      pattern: {
        rule: {
          es: "gern no forma «gerner»: su comparativo es lieber (preferir) y su superlativo am liebsten (lo que más me gusta), igual que gut → besser → am besten.",
          en: "gern doesn't make 'gerner': its comparative is lieber (rather) and its superlative am liebsten (most of all), just like gut → besser → am besten.",
        },
        table: [["gut", "besser", "am besten"], ["gern", "lieber", "am liebsten"]],
        meanings: [
          { es: "bueno · mejor · lo mejor", en: "good · better · best" },
          { es: "con gusto · preferir · lo que más me gusta", en: "gladly · rather · most of all" },
        ],
      },
      question: {
        prompt: { es: "Prefiero ir en tren. ¿Cómo se dice?", en: "I'd rather go by train. How do you say it?" },
        options: ["Ich fahre lieber mit dem Zug.", "Ich fahre mehr gern mit dem Zug.", "Ich fahre gerner mit dem Zug.", "Ich fahre besser mit dem Zug."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-gern"], tags: ["grammar", "comparison"],
    },
    {
      id: "lieber-mit-dem-zug", type: "sentence", target: "Ich fahre lieber mit dem Zug.",
      gloss: { es: "Prefiero ir en tren.", en: "I'd rather go by train." },
      accept: [{ text: "Ich nehme lieber den Zug." }],
      distractors: ["gern", "den", "fährt"],
      tags: ["travel", "comparison"],
    },

    // ── Wo? (dative), then Wohin? (accusative) ───────────────
    {
      id: "liegen", type: "word", pos: "verb", target: "liegen",
      gloss: { es: "estar (acostado, puesto), estar ubicado", en: "to lie / to be (lying somewhere)" },
      forms: { ich: "liege", du: "liegst", er: "liegt", wir: "liegen", ihr: "liegt", sie: "liegen", pp: "gelegen", aux: "haben" },
      distractors: ["legen", "lügen", "fliegen"],
      note: { es: "¿Dónde está? → Der Koffer liegt auf dem Bett (dativo).", en: "Where is it? → Der Koffer liegt auf dem Bett (dative)." },
      tags: ["verb", "two-way", "goethe-a1"],
    },
    {
      id: "legen", type: "word", pos: "verb", target: "legen",
      gloss: { es: "poner (acostado), dejar", en: "to put / to lay (down)" },
      forms: { ich: "lege", du: "legst", er: "legt", wir: "legen", ihr: "legt", sie: "legen", pp: "gelegt", aux: "haben" },
      distractors: ["liegen", "leben", "lesen"],
      note: { es: "¿Adónde? → Ich lege den Koffer aufs Bett (acusativo).", en: "Where to? → Ich lege den Koffer aufs Bett (accusative)." },
      tags: ["verb", "two-way", "goethe-a1"],
    },
    {
      id: "pat-wo-dativ", type: "pattern", target: "Wo? → im Park · auf dem Bett",
      gloss: { es: "¿dónde? → dativo", en: "where? → dative" },
      pattern: {
        rule: {
          es: "Con in, an, auf, neben, vor, hinter, über, unter y zwischen, si algo está en un lugar (Wo? = ¿dónde?), el artículo va en dativo: im Park, auf dem Bett.",
          en: "With in, an, auf, neben, vor, hinter, über, unter and zwischen, if something is at a place (Wo? = where?), the article is in the dative: im Park, auf dem Bett.",
        },
        table: [["der Park", "im Park"], ["die Stadt", "in der Stadt"], ["das Bett", "auf dem Bett"]],
        meanings: [
          { es: "el parque → en el parque", en: "the park → in the park" },
          { es: "la ciudad → en la ciudad", en: "the town → in town" },
          { es: "la cama → sobre la cama", en: "the bed → on the bed" },
        ],
      },
      question: {
        prompt: { es: "Completa (¿dónde?): «Der Koffer liegt auf ___ Bett.»", en: "Complete (where?): 'Der Koffer liegt auf ___ Bett.'" },
        options: ["dem", "das", "den", "der"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-wechselpraep"], tags: ["grammar", "two-way", "dative"],
    },
    {
      id: "koffer-liegt", type: "sentence", target: "Der Koffer liegt auf dem Bett.",
      gloss: { es: "La maleta está sobre la cama.", en: "The suitcase is on the bed." },
      errors: [{ text: "Der Koffer liegt auf das Bett.", feedback: { es: "¿Dónde? → dativo: auf dem Bett.", en: "Where? → dative: auf dem Bett." } }],
      distractors: ["das", "den", "legt"],
      tags: ["two-way", "dative"],
    },
    {
      id: "pat-wechselpraep", type: "pattern", target: "Wo? im Park · Wohin? in den Park",
      gloss: { es: "¿adónde? → acusativo", en: "where to? → accusative" },
      pattern: {
        rule: {
          es: "Las mismas preposiciones (in, an, auf…) van con acusativo si hay movimiento hacia un lugar (Wohin? = ¿adónde?): in den Park, aufs Bett. Si no hay movimiento hacia allí (Wo?), dativo.",
          en: "The same prepositions (in, an, auf…) take the accusative when there is movement to a place (Wohin? = where to?): in den Park, aufs Bett. With no movement towards it (Wo?), dative.",
        },
        table: [["", "Wo?", "Wohin?"], ["der Park", "im Park", "in den Park"], ["die Stadt", "in der Stadt", "in die Stadt"], ["das Bett", "auf dem Bett", "aufs Bett"]],
        meanings: [
          { es: "¿dónde? (dativo) · ¿adónde? (acusativo)", en: "where? (dative) · where to? (accusative)" },
          { es: "en el parque · al parque", en: "in the park · into the park" },
          { es: "en la ciudad · a la ciudad", en: "in town · into town" },
          { es: "sobre la cama · (poner) sobre la cama", en: "on the bed · onto the bed" },
        ],
      },
      question: {
        prompt: { es: "Completa (¿adónde?): «Ich gehe in ___ Park.»", en: "Complete (where to?): 'Ich gehe in ___ Park.'" },
        options: ["den", "dem", "der", "das"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-wechselpraep"], tags: ["grammar", "two-way"],
    },
    {
      id: "koffer-legen", type: "sentence", target: "Ich lege den Koffer aufs Bett.",
      gloss: { es: "Pongo la maleta sobre la cama.", en: "I'm putting the suitcase on the bed." },
      accept: [{ text: "Ich lege den Koffer auf das Bett." }],
      errors: [{ text: "Ich lege den Koffer auf dem Bett.", feedback: { es: "¿Adónde? (movimiento) → acusativo: auf das / aufs Bett.", en: "Where to? (movement) → accusative: auf das / aufs Bett." } }],
      distractors: ["dem", "liege", "der"],
      tags: ["two-way", "accusative"],
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
        prompt: { es: "«Mein Mantel ist im Koffer» significa…", en: "'Mein Mantel ist im Koffer' means…" },
        options: [
          { es: "Mi abrigo está en la maleta.", en: "My coat is in the suitcase." },
          { es: "Mi mantel está en la maleta.", en: "My tablecloth is in the suitcase." },
          { es: "Mi manta está en la maleta.", en: "My blanket is in the suitcase." },
          { es: "Mi mantequilla está en la maleta.", en: "My butter is in the suitcase." },
        ],
        answer: 0,
      },
      note: { es: "der Mantel = el abrigo; el mantel es «die Tischdecke»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "travel"],
    },
  ]),
};
