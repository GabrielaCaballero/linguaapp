import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u06",
  lang: "it",
  index: 6,
  cefr: "A1.1",
  title: { target: "Dove abiti?", es: "¿Dónde vives?", en: "Where do you live?" },
  canDo: [
    { es: "Puedo describir mi casa y mi barrio con palabras sencillas.", en: "I can describe my home and neighbourhood in simple words." },
    { es: "Puedo preguntar dónde está algo y entender «cerca» o «lejos».", en: "I can ask where something is and understand 'near' or 'far'." },
    { es: "Sé usar c'è / ci sono y a / in / di con lugares.", en: "I can use c'è / ci sono and a / in / di with places." },
  ],
  icon: "🏠",
  items: build("it", 6, "A1.1", [
    // ── Home ─────────────────────────────────────────────────
    {
      id: "casa", type: "word", pos: "noun", target: "la casa", gender: "f", plural: "le case",
      gloss: { es: "la casa", en: "the house / home" },
      distractors: ["la cassa", "il caso", "la cosa"],
      note: { es: "«a casa» = en casa o a casa, sin artículo: sono a casa.", en: "'a casa' = at home or (to) home, no article: sono a casa." },
      tags: ["home"],
    },
    {
      id: "appartamento", type: "word", pos: "noun", target: "l'appartamento", gender: "m", plural: "gli appartamenti",
      gloss: { es: "el apartamento (departamento)", en: "the flat / apartment" },
      distractors: ["la appartamento", "il partimento", "l'appuntamento"],
      note: { es: "Doble p y doble t, y es masculino: gli appartamenti.", en: "Double p and double t; masculine: gli appartamenti." },
      tags: ["home", "doubles"],
    },
    {
      id: "camera", legacyId: "it-f-camera", type: "word", pos: "noun", target: "la camera", gender: "f", plural: "le camere",
      gloss: { es: "la habitación (el cuarto)", en: "the room / bedroom" },
      distractors: ["la cucina", "il camino", "la cameriera"],
      note: {
        es: "Ojo: camera = habitación (camera da letto = dormitorio); la cámara de fotos es «la macchina fotografica».",
        en: "False friend: camera = room ('camera da letto' = bedroom). A camera is 'la macchina fotografica'.",
      },
      tags: ["home", "false-friend"],
    },
    {
      id: "cucina", type: "word", pos: "noun", target: "la cucina", gender: "f", plural: "le cucine",
      gloss: { es: "la cocina", en: "the kitchen" },
      distractors: ["la cugina", "il cuscino", "la cantina"],
      note: { es: "Ojo: la cugina = la prima.", en: "Also 'cooking, cuisine': la cucina italiana." },
      tags: ["home"],
    },
    {
      id: "bagno", type: "word", pos: "noun", target: "il bagno", gender: "m", plural: "i bagni",
      gloss: { es: "el baño", en: "the bathroom" },
      distractors: ["il bagnino", "il banco", "la bagna"],
      tags: ["home"],
    },

    // ── Town ─────────────────────────────────────────────────
    {
      id: "citta", legacyId: "it-p-ta1", type: "word", pos: "noun", target: "la città", gender: "f", plural: "le città",
      gloss: { es: "la ciudad", en: "the city / town" },
      distractors: ["la cittadina", "la civiltà", "la cima"],
      note: {
        es: "-dad → -tà: ciudad → città, universidad → università. En plural no cambia: le città.",
        en: "Stressed on the final vowel, so the plural doesn't change: le città.",
      },
      tags: ["town", "accent"],
    },
    {
      id: "paese", type: "word", pos: "noun", target: "il paese", gender: "m", plural: "i paesi",
      gloss: { es: "el pueblo / el país", en: "the village / the country" },
      distractors: ["la paese", "il passo", "il pesce"],
      note: { es: "Según el contexto: pueblo o país (il mio paese).", en: "Depending on context: village or country (il mio paese)." },
      tags: ["town"],
    },
    {
      id: "piazza", type: "word", pos: "noun", target: "la piazza", gender: "f", plural: "le piazze",
      gloss: { es: "la plaza", en: "the square" },
      distractors: ["la pizza", "il pozzo", "la pazza"],
      note: { es: "zz suena «ts» fuerte: piazza ≈ «piátsa».", en: "zz is a strong 'ts': piazza ≈ 'pyahts-sa'." },
      tags: ["town", "doubles"],
    },
    {
      id: "stazione", legacyId: "it-stazione", type: "word", pos: "noun", target: "la stazione", gender: "f", plural: "le stazioni",
      gloss: { es: "la estación (de tren)", en: "the (train) station" },
      distractors: ["la stagione", "lo stazione", "la statua"],
      note: { es: "Patrón -ción → -zione: estación → stazione. Ojo: «la stagione» = la estación del año.", en: "Careful: 'la stagione' = the season." },
      tags: ["town", "travel"],
    },
    {
      id: "treno", legacyId: "it-treno", type: "word", pos: "noun", target: "il treno", gender: "m", plural: "i treni",
      gloss: { es: "el tren", en: "the train" },
      distractors: ["il trono", "la treno", "il tram"],
      tags: ["travel"],
    },

    // ── Adjectives & adverbs ─────────────────────────────────
    {
      id: "grande", type: "word", pos: "adj", target: "grande",
      gloss: { es: "grande", en: "big / large" },
      forms: { "m/f": "grande", pl: "grandi" },
      distractors: ["piccolo", "grasso", "grado"],
      tags: ["describe"],
    },
    {
      id: "piccolo", type: "word", pos: "adj", target: "piccolo",
      gloss: { es: "pequeño/a", en: "small" },
      forms: { m: "piccolo", f: "piccola", mpl: "piccoli", fpl: "piccole" },
      accept: [{ text: "piccola" }],
      distractors: ["picchio", "pacco", "poco"],
      tags: ["describe"],
    },
    {
      id: "bello", type: "word", pos: "adj", target: "bello",
      gloss: { es: "lindo/a, bonito/a", en: "beautiful / nice" },
      forms: { m: "bello", f: "bella", mpl: "belli", fpl: "belle" },
      accept: [{ text: "bella" }],
      distractors: ["brutto", "bollo", "bene"],
      note: { es: "Ojo: «bene» = bien (adverbio); «bello» = lindo.", en: "Careful: 'bene' = well (adverb); 'bello' = beautiful." },
      tags: ["describe"],
    },
    {
      id: "vicino", type: "word", pos: "adv", target: "vicino",
      gloss: { es: "cerca", en: "near / close by" },
      distractors: ["lontano", "vicolo", "vino"],
      note: { es: "«vicino a» + lugar: vicino alla stazione. «Il vicino» = el vecino.", en: "'vicino a' + place: vicino alla stazione. 'Il vicino' = the neighbour." },
      tags: ["describe", "place"],
    },
    {
      id: "lontano", type: "word", pos: "adv", target: "lontano",
      gloss: { es: "lejos", en: "far (away)" },
      distractors: ["vicino", "lento", "lontra"],
      note: { es: "«lontano da» + lugar: lontano dal centro.", en: "'lontano da' + place: lontano dal centro." },
      tags: ["describe", "place"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "dove-stazione", legacyId: "it-dove", type: "phrase", pos: "phrase", target: "Dov'è la stazione?",
      gloss: { es: "¿Dónde está la estación?", en: "Where is the station?" },
      accept: [
        { text: "Dove si trova la stazione?" },
        { text: "Dove è la stazione?", verdict: "almost", feedback: { es: "Se contrae: dov'è.", en: "It contracts: dov'è." } },
        { text: "Dove sta la stazione?", verdict: "almost", feedback: { es: "Se oye en el sur, pero lo estándar es «dov'è» («stare» es para el estado: come stai?).", en: "Heard in the south, but standard Italian says 'dov'è'." } },
      ],
      distractors: ["Dov'è il stazione?", "Di dov'è la stazione?", "Dove la stazione è?"],
      tags: ["directions", "chunk"],
    },
    {
      id: "biglietto", legacyId: "it-biglietto", type: "sentence", target: "Un biglietto per Roma, per favore.",
      gloss: { es: "Un boleto (billete) para Roma, por favor.", en: "A ticket to Rome, please." },
      errors: [{
        text: "Un biglietto a Roma, per favore.",
        feedback: { es: "El destino de un boleto va con «per»: un biglietto per Roma.", en: "A ticket's destination takes 'per': un biglietto per Roma." },
      }],
      distractors: ["Un biglietto a Roma, per favore.", "Uno biglietto per Roma, per favore.", "Una biglietto per Roma, per favore."],
      tags: ["travel"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-ere-ire", type: "pattern", target: "prendo, prendi, prende · dormo, dormi, dorme",
      gloss: { es: "verbos en -ere e -ire (singular)", en: "-ere and -ire verbs (singular)" },
      pattern: {
        rule: {
          es: "En singular, -ere e -ire tienen las mismas terminaciones: -o, -i, -e. prendere → prendo, prendi, prende; dormire → dormo, dormi, dorme.",
          en: "In the singular, -ere and -ire verbs share the endings -o, -i, -e. prendere → prendo, prendi, prende; dormire → dormo, dormi, dorme.",
        },
        table: [["", "-are", "-ere", "-ire"], ["io", "abito", "prendo", "dormo"], ["tu", "abiti", "prendi", "dormi"], ["lui / lei / Lei", "abita", "prende", "dorme"]],
      },
      question: {
        prompt: { es: "Completa con «vivere»: «Marco ___ a Torino.»", en: "Complete with 'vivere': 'Marco ___ a Torino.'" },
        options: ["vive", "vivi", "vivo", "viva"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "present"],
    },
    {
      id: "pat-c-e", type: "pattern", target: "c'è · ci sono",
      gloss: { es: "hay", en: "there is · there are" },
      pattern: {
        rule: {
          es: "c'è + singular (c'è una piazza); ci sono + plural (ci sono due bagni). Es el «hay» del español.",
          en: "c'è + singular (c'è una piazza); ci sono + plural (ci sono due bagni). It's 'there is / there are'.",
        },
        table: [["c'è", "una cucina"], ["ci sono", "due camere"]],
      },
      question: {
        prompt: { es: "Completa: «Nell'appartamento ___ tre camere.»", en: "Complete: 'Nell'appartamento ___ tre camere.'" },
        options: ["ci sono", "c'è", "sono", "ha"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar"],
    },
    {
      id: "pat-a-in-di", type: "pattern", target: "a Roma · in Italia · di Napoli",
      gloss: { es: "a, in, di con lugares", en: "a, in, di with places" },
      pattern: {
        rule: {
          es: "a + ciudad (abito a Roma), in + país o región (in Italia, in Toscana), di + origen (sono di Napoli). También: in centro, a casa.",
          en: "a + city (abito a Roma), in + country or region (in Italia, in Toscana), di + origin (sono di Napoli). Also: in centro, a casa.",
        },
        table: [["a", "a Roma · a casa"], ["in", "in Italia · in centro"], ["di", "sono di Napoli"]],
      },
      question: {
        prompt: { es: "Completa: «Anna abita ___ Germania.»", en: "Complete: 'Anna abita ___ Germania.'" },
        options: ["in", "a", "di", "da"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "prepositions"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-appartamento", type: "listening",
      target: "Abito in un appartamento piccolo ma bello, vicino alla stazione. C'è una cucina, una camera e un bagno.",
      gloss: {
        es: "Vivo en un apartamento (departamento) pequeño pero lindo, cerca de la estación. Hay una cocina, un dormitorio y un baño.",
        en: "I live in a small but nice flat near the station. There's a kitchen, a bedroom and a bathroom.",
      },
      question: {
        prompt: { es: "¿Dónde está el apartamento?", en: "Where is the flat?" },
        options: [
          { es: "Cerca de la estación", en: "Near the station" },
          { es: "En el centro", en: "In the centre" },
          { es: "Lejos de la ciudad", en: "Far from town" },
          { es: "Cerca de la plaza", en: "Near the square" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "home"],
    },
    {
      id: "dlg-stazione", type: "dialogue", target: "Sempre dritto.", register: "formal",
      gloss: { es: "Todo derecho.", en: "Straight ahead." },
      turns: [
        { who: "A", target: "Scusi, dov'è la stazione?", gloss: { es: "Disculpe, ¿dónde está la estación?", en: "Excuse me, where is the station?" } },
        { who: "B", target: "È vicino, a cinque minuti. Sempre dritto.", gloss: { es: "Está cerca, a cinco minutos. Todo derecho.", en: "It's close, five minutes away. Straight ahead." } },
        { who: "A", target: "Grazie mille!", gloss: { es: "¡Muchas gracias!", en: "Thanks a lot!" } },
        { who: "B", target: "Prego!", gloss: { es: "¡De nada!", en: "You're welcome!" } },
      ],
      question: {
        prompt: { es: "¿La estación está lejos?", en: "Is the station far?" },
        options: [
          { es: "No, a cinco minutos, todo derecho.", en: "No, five minutes, straight ahead." },
          { es: "Sí, muy lejos.", en: "Yes, very far." },
          { es: "No, a la izquierda.", en: "No, on the left." },
          { es: "Hay que tomar el tren.", en: "You need to take the train." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "directions"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-salire", legacyId: "it-f-salire", type: "bridge", onlyFor: "es", target: "salire",
      gloss: { es: "subir", en: "to go up / to get on" },
      question: {
        prompt: { es: "«salire» significa…", en: "'salire' means…" },
        options: [
          { es: "subir", en: "to go up" },
          { es: "salir", en: "to go out" },
          { es: "saltar", en: "to jump" },
          { es: "saludar", en: "to greet" },
        ],
        answer: 0,
      },
      note: { es: "salire = subir (salire sul treno = subir al tren). Salir es «uscire»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-largo", legacyId: "it-f-largo", type: "bridge", onlyFor: "es", target: "largo",
      gloss: { es: "ancho", en: "wide" },
      question: {
        prompt: { es: "«largo» significa…", en: "'largo' means…" },
        options: [
          { es: "ancho", en: "wide" },
          { es: "largo", en: "long" },
          { es: "lejos", en: "far" },
          { es: "grande", en: "big" },
        ],
        answer: 0,
      },
      note: { es: "largo = ancho; lungo = largo. Una strada larga e lunga = una calle ancha y larga." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-fermare", legacyId: "it-f-fermare", type: "bridge", onlyFor: "es", target: "fermare",
      gloss: { es: "detener, parar", en: "to stop" },
      question: {
        prompt: { es: "«fermare» significa…", en: "'fermare' means…" },
        options: [
          { es: "detener, parar", en: "to stop" },
          { es: "firmar", en: "to sign" },
          { es: "cerrar", en: "to close" },
          { es: "fermentar", en: "to ferment" },
        ],
        answer: 0,
      },
      note: { es: "fermare = parar; la fermata = la parada (del autobús). Firmar es «firmare»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "travel"],
    },
    {
      id: "br-porta", legacyId: "it-p-ue", type: "bridge", onlyFor: "es", target: "porta",
      gloss: { es: "puerta", en: "door" },
      distractors: ["puerta", "porte", "puorta"],
      note: { es: "ue → o: puerta → porta, fuerte → forte (a veces uo: nuevo → nuovo)." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-chiave", legacyId: "it-p-chi", type: "bridge", onlyFor: "es", target: "chiave",
      gloss: { es: "llave", en: "key" },
      distractors: ["llave", "liave", "ciave"],
      note: { es: "ll- inicial → chi/pi/fi: llave → chiave, lleno → pieno, llamar → chiamare." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
