import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u11",
  lang: "fr",
  index: 11,
  cefr: "A2",
  title: { target: "Quand j'étais petit", es: "La infancia", en: "When I was little" },
  canDo: [
    { es: "Puedo contar cómo era mi vida de niño/a y qué hacía siempre.", en: "I can describe what my life was like as a child and what I used to do." },
    { es: "Puedo describir personas y lugares del pasado.", en: "I can describe people and places in the past." },
    { es: "Sé elegir entre imparfait y passé composé.", en: "I can choose between the imparfait and the passé composé." },
  ],
  icon: "🧸",
  items: build("fr", 11, "A2", [
    { id: "enfance", type: "word", pos: "noun", target: "l'enfance", gender: "f", plural: "les enfances", gloss: { es: "la infancia, la niñez", en: "the childhood" }, distractors: ["l'enfant", "la enfance", "l'avance"], tags: ["childhood"] },
    { id: "ecole", type: "word", pos: "noun", target: "l'école", gender: "f", plural: "les écoles", gloss: { es: "la escuela", en: "the school" }, distractors: ["le école", "l'écolier", "l'échelle"], note: { es: "l'école primaire (primaria), le collège (secundaria), le lycée (preparatoria, bachillerato).", en: "l'école primaire (primary), le collège (lower secondary), le lycée (upper secondary)." }, tags: ["childhood", "school"] },
    { id: "jouer", type: "word", pos: "verb", target: "jouer", gloss: { es: "jugar", en: "to play" }, distractors: ["jouir", "joindre", "louer"], tags: ["childhood"] },
    { id: "voisin", type: "word", pos: "noun", target: "le voisin", gender: "m", plural: "les voisins", accept: [{ text: "la voisine" }], gloss: { es: "el vecino", en: "the neighbour" }, distractors: ["la voisin", "le voisinage", "le vaisseau"], tags: ["childhood", "people"] },
    { id: "campagne", type: "word", pos: "noun", target: "la campagne", gender: "f", plural: "les campagnes", gloss: { es: "el campo", en: "the countryside" }, distractors: ["le campagne", "la compagne", "le camping"], note: { es: "Ojo: la compagne = la compañera, la pareja.", en: "Careful: la compagne = the (female) partner." }, tags: ["places"] },
    { id: "timide", type: "word", pos: "adj", target: "timide", gloss: { es: "tímido/a", en: "shy" }, distractors: ["timidé", "tiède", "humide"], tags: ["describe"] },
    { id: "sage", type: "word", pos: "adj", target: "sage", gloss: { es: "bien portado/a (un niño); sabio/a", en: "well-behaved (a child); wise" }, distractors: ["sale", "sauvage", "salé"], note: { es: "Sois sage ! = ¡Pórtate bien!", en: "Sois sage ! = Be good!" }, tags: ["describe", "childhood"] },
    { id: "toujours", type: "word", pos: "adv", target: "toujours", gloss: { es: "siempre / todavía", en: "always / still" }, distractors: ["jamais", "tous les jours", "tout"], tags: ["frequency"] },
    { id: "autrefois", type: "word", pos: "adv", target: "autrefois", gloss: { es: "antes, antiguamente", en: "in the past, formerly" }, distractors: ["parfois", "autre fois", "aujourd'hui"], tags: ["time", "past"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "quand-jetais-petit", type: "sentence", target: "Quand j'étais petit, j'habitais à la campagne.",
      gloss: { es: "De niño/a vivía en el campo.", en: "When I was little, I lived in the countryside." },
      accept: [{ text: "Quand j'étais petite, j'habitais à la campagne." }],
      errors: [{ text: "Quand j'ai été petit, j'ai habité à la campagne.", feedback: { es: "Descripciones del pasado y situaciones que duran: imparfait (j'étais, j'habitais).", en: "Past descriptions and ongoing situations: imparfait (j'étais, j'habitais)." }, ruleId: "fr-g-pc-imparfait" }],
      distractors: ["été", "habité", "en"],
      tags: ["childhood", "imparfait"],
    },
    {
      id: "on-jouait", type: "sentence", target: "Le mercredi, on jouait au foot dans la rue.",
      gloss: { es: "Los miércoles jugábamos fútbol en la calle.", en: "On Wednesdays we used to play football in the street." },
      distractors: ["joue", "a joué", "du"],
      note: { es: "«le mercredi» = todos los miércoles; el imparfait marca la costumbre.", en: "'le mercredi' = every Wednesday; the imparfait marks a habit." },
      tags: ["childhood", "imparfait"],
    },
    {
      id: "ma-grand-mere-faisait", type: "sentence", target: "Ma grand-mère faisait des gâteaux délicieux.",
      gloss: { es: "Mi abuela hacía unos pasteles riquísimos.", en: "My grandmother used to make delicious cakes." },
      distractors: ["a fait", "fesait", "du"],
      note: { es: "«faisait» se pronuncia «fesé».", en: "'faisait' is pronounced 'fuh-zay'." },
      tags: ["childhood", "family"],
    },
    {
      id: "il-pleuvait", type: "sentence", target: "Il pleuvait quand je suis sorti.",
      gloss: { es: "Estaba lloviendo cuando salí.", en: "It was raining when I went out." },
      accept: [{ text: "Il pleuvait quand je suis sortie." }],
      errors: [{ text: "Il a plu quand je sortais.", feedback: { es: "Al revés: el fondo (llovía) va en imparfait y el hecho puntual (salí) en passé composé.", en: "The other way round: the background (was raining) is imparfait, the single event (went out) passé composé." }, ruleId: "fr-g-pc-imparfait" }],
      distractors: ["a plu", "sortais", "pleut"],
      tags: ["imparfait", "past", "weather"],
    },
    {
      id: "cetait-super", type: "phrase", pos: "phrase", target: "C'était super !",
      gloss: { es: "¡Estuvo genial!", en: "It was great!" },
      accept: [{ text: "C'était génial !" }],
      distractors: ["C'est été super !", "Ça a été super !", "C'étais super !"],
      note: { es: "Para valorar una experiencia pasada se usa casi siempre «c'était».", en: "To comment on a past experience French almost always uses 'c'était'." },
      tags: ["chunk", "imparfait"],
    },
    {
      id: "je-me-souviens", type: "sentence", target: "Je me souviens de mon premier vélo.",
      gloss: { es: "Me acuerdo de mi primera bicicleta.", en: "I remember my first bike." },
      errors: [{ text: "Je me souviens mon premier vélo.", feedback: { es: "se souvenir de + algo: je me souviens de…", en: "se souvenir de + something: je me souviens de…" } }],
      distractors: ["rappelle", "du", "souvenir"],
      tags: ["childhood", "memories"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-imparfait", type: "pattern", target: "je parlais, tu parlais, il parlait…",
      gloss: { es: "el imparfait (copretérito)", en: "the imparfait (past continuous / used to)" },
      pattern: {
        rule: {
          es: "Como el «hablaba» español: raíz de «nous» en presente (nous parl-ons → parl-) + -ais, -ais, -ait, -ions, -iez, -aient. Única excepción: être → j'étais.",
          en: "Take the 'nous' present stem (nous parl-ons → parl-) and add -ais, -ais, -ait, -ions, -iez, -aient. The only exception: être → j'étais.",
        },
        table: [["je parlais", "nous parlions"], ["tu parlais", "vous parliez"], ["il / elle parlait", "ils / elles parlaient"]],
      },
      question: {
        prompt: { es: "Completa: «Avant, nous ___ à Lille.» (habiter)", en: "Complete: 'Avant, nous ___ à Lille.' (habiter)" },
        options: ["habitions", "habitons", "habitaient", "avons habité"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-imparfait"], tags: ["grammar", "imparfait"],
    },
    {
      id: "tab-etre-imparfait", type: "paradigm", target: "être — imparfait", spoken: "être, imparfait",
      gloss: { es: "«être» en imparfait", en: "être — imparfait" },
      grammar: ["fr-g-imparfait"],
      paradigm: {
        caption: { es: "Conjuga «être» en imparfait", en: "Conjugate être in the imparfait" },
        cells: [
          { label: "j'", answer: "étais", ruleId: "fr-g-imparfait" },
          { label: "tu", answer: "étais", ruleId: "fr-g-imparfait" },
          { label: "il / elle", answer: "était", ruleId: "fr-g-imparfait" },
          { label: "nous", answer: "étions", ruleId: "fr-g-imparfait" },
          { label: "vous", answer: "étiez", ruleId: "fr-g-imparfait" },
          { label: "ils / elles", answer: "étaient", ruleId: "fr-g-imparfait" },
        ],
      },
      tags: ["grammar", "imparfait", "table"],
    },
    {
      id: "tab-avoir-imparfait", type: "paradigm", target: "avoir — imparfait", spoken: "avoir, imparfait",
      gloss: { es: "«avoir» en imparfait", en: "avoir — imparfait" },
      grammar: ["fr-g-imparfait"],
      paradigm: {
        caption: { es: "Conjuga «avoir» en imparfait", en: "Conjugate avoir in the imparfait" },
        cells: [
          { label: "j'", answer: "avais", ruleId: "fr-g-imparfait" },
          { label: "tu", answer: "avais", ruleId: "fr-g-imparfait" },
          { label: "il / elle", answer: "avait", ruleId: "fr-g-imparfait" },
          { label: "nous", answer: "avions", ruleId: "fr-g-imparfait" },
          { label: "vous", answer: "aviez", ruleId: "fr-g-imparfait" },
          { label: "ils / elles", answer: "avaient", ruleId: "fr-g-imparfait" },
        ],
      },
      tags: ["grammar", "imparfait", "table"],
    },
    {
      id: "pat-pc-imparfait", type: "pattern", target: "Je lisais quand le téléphone a sonné.",
      gloss: { es: "imparfait o passé composé", en: "imparfait or passé composé" },
      pattern: {
        rule: {
          es: "Igual que en español: imparfait para descripciones, costumbres y acciones en curso (leía); passé composé para hechos puntuales y terminados (sonó).",
          en: "imparfait for descriptions, habits and actions in progress (was reading, used to); passé composé for single, completed events (rang).",
        },
        table: [["imparfait", "fond, habitude, description"], ["passé composé", "événement, action terminée"], ["exemple", "Il dormait quand je suis arrivé."]],
      },
      question: {
        prompt: { es: "Completa: «Quand j'avais dix ans, je ___ beaucoup.» (lire)", en: "Complete: 'Quand j'avais dix ans, je ___ beaucoup.' (lire)" },
        options: ["lisais", "ai lu", "lis", "lirai"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-pc-imparfait"], tags: ["grammar", "imparfait", "past"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-enfance", type: "listening",
      target: "Quand j'étais enfant, nous habitions dans un petit village. Il n'y avait pas de cinéma, alors on jouait dehors tout le temps. Un été, mon père a acheté un chien.",
      gloss: {
        es: "Cuando era niño/a, vivíamos en un pueblito. No había cine, así que jugábamos afuera todo el tiempo. Un verano, mi papá compró un perro.",
        en: "When I was a child, we lived in a small village. There was no cinema, so we played outside all the time. One summer, my father bought a dog.",
      },
      question: {
        prompt: { es: "¿Qué pasó un verano?", en: "What happened one summer?" },
        options: [
          { es: "El padre compró un perro", en: "The father bought a dog" },
          { es: "Abrieron un cine", en: "A cinema opened" },
          { es: "Se mudaron a la ciudad", en: "They moved to the city" },
          { es: "Jugaron afuera", en: "They played outside" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "childhood"],
    },
    {
      id: "dlg-photo-ecole", type: "dialogue", target: "J'avais huit ans.", register: "informal",
      gloss: { es: "Tenía ocho años.", en: "I was eight." },
      turns: [
        { who: "A", target: "C'est toi sur la photo ? Tu avais quel âge ?", gloss: { es: "¿Eres tú en la foto? ¿Cuántos años tenías?", en: "Is that you in the photo? How old were you?" } },
        { who: "B", target: "J'avais huit ans. C'était ma classe à l'école primaire.", gloss: { es: "Tenía ocho años. Era mi clase de primaria.", en: "I was eight. That was my primary school class." } },
        { who: "A", target: "Tu étais sage ?", gloss: { es: "¿Te portabas bien?", en: "Were you well-behaved?" } },
        { who: "B", target: "Pas du tout ! Je parlais tout le temps.", gloss: { es: "¡Para nada! Hablaba todo el tiempo.", en: "Not at all! I talked all the time." } },
      ],
      question: {
        prompt: { es: "¿Cómo era B en la escuela?", en: "What was B like at school?" },
        options: [
          { es: "Hablaba todo el tiempo", en: "Talked all the time" },
          { es: "Era muy tímido/a", en: "Was very shy" },
          { es: "Se portaba muy bien", en: "Was very well-behaved" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "childhood"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-imparfait", type: "bridge", onlyFor: "es", target: "je jouais",
      gloss: { es: "yo jugaba", en: "I used to play" },
      distractors: ["je jouaba", "je jouai", "je jouait"],
      note: { es: "El imparfait corresponde casi siempre al copretérito español: jugaba → jouais, tenía → avais, era → étais." },
      exercises: ["guess", "recall"], tags: ["bridge", "imparfait"],
    },
    {
      id: "br-college", type: "bridge", onlyFor: "es", target: "le collège",
      gloss: { es: "la escuela secundaria (de 11 a 15 años)", en: "lower secondary school" },
      question: {
        prompt: { es: "Un niño francés de 12 años va «au collège». Va…", en: "A 12-year-old in France goes 'au collège'. That's…" },
        options: [
          { es: "a la secundaria", en: "lower secondary school" },
          { es: "a un colegio privado", en: "a private school" },
          { es: "a la universidad", en: "university" },
        ],
        answer: 0,
      },
      note: { es: "le collège = la secundaria; la universidad es «l'université» o «la fac»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "school"],
    },
  ]),
};
