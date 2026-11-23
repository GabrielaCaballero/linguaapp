import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u15",
  lang: "en",
  index: 15,
  cefr: "B1",
  title: { target: "In my opinion", es: "En mi opinión", en: "In my opinion" },
  canDo: [
    { es: "Puedo dar mi opinión y decir si estoy de acuerdo o no.", en: "I can give my opinion and say whether I agree." },
    { es: "Puedo comparar ciudades, trabajos y estilos de vida.", en: "I can compare cities, jobs and lifestyles." },
    { es: "Sé usar comparativos (bigger, more expensive), superlativos (the best) y «as… as».", en: "I can use comparatives (bigger, more expensive), superlatives (the best) and 'as… as'." },
  ],
  icon: "💬",
  items: build("en", 15, "B1", [
    // ── Opinion phrases ──────────────────────────────────────
    {
      id: "in-my-opinion", type: "phrase", pos: "phrase", target: "In my opinion,",
      gloss: { es: "En mi opinión,", en: "In my opinion," },
      accept: [{ text: "I think" }, { text: "If you ask me," }],
      distractors: ["For my opinion,", "On my opinion,", "According to me,"],
      errors: [{ text: "For my opinion,", feedback: { es: "Se dice «In my opinion», no «for»." } }],
      tags: ["opinions", "chunk"],
    },
    {
      id: "i-agree", type: "phrase", pos: "phrase", target: "I agree with you.",
      gloss: { es: "Estoy de acuerdo contigo.", en: "I agree with you." },
      accept: [{ text: "I totally agree." }, { text: "I agree." }],
      distractors: ["I'm agree with you.", "I am agree.", "I agree to you."],
      errors: [{ text: "I'm agree with you.", feedback: { es: "«agree» ya es el verbo: I agree (sin «am»)." } }],
      tags: ["opinions", "chunk"],
    },
    {
      id: "i-dont-agree", type: "phrase", pos: "phrase", target: "I'm not so sure about that.",
      gloss: { es: "No estoy tan seguro/a de eso.", en: "I'm not so sure about that." },
      accept: [{ text: "I don't agree." }, { text: "I disagree." }, { text: "I'm not sure about that." }],
      distractors: ["I'm not so sure of this.", "I'm not agree.", "I no agree."],
      note: { es: "Forma suave de discrepar; «I disagree» es más directo." },
      tags: ["opinions", "chunk"],
    },
    {
      id: "it-depends", type: "phrase", pos: "phrase", target: "It depends.",
      gloss: { es: "Depende.", en: "It depends." },
      accept: [{ text: "That depends." }],
      distractors: ["Depends of.", "Is depending.", "It depends of."],
      errors: [{ text: "It depends of.", feedback: { es: "Si sigue algo, es «depends on»: It depends on the price." } }],
      tags: ["opinions", "chunk"],
    },
    {
      id: "thats-a-good-point", type: "phrase", pos: "phrase", target: "That's a good point.",
      gloss: { es: "Tienes razón en eso. / Buen punto.", en: "That's a good point." },
      distractors: ["You have reason.", "That's a good spot.", "It's good point."],
      errors: [{ text: "You have reason.", feedback: { es: "«tener razón» es «be right»: You're right." } }],
      tags: ["opinions", "chunk"],
    },
    {
      id: "youre-right", type: "phrase", pos: "phrase", target: "You're right.",
      gloss: { es: "Tienes razón.", en: "You're right." },
      accept: [{ text: "You are right." }],
      distractors: ["You have right.", "You're reason.", "Your right."],
      errors: [{ text: "You have reason.", feedback: { es: "«tener razón» = be right: You're right." } }],
      tags: ["opinions", "chunk"],
    },

    // ── Adjectives ───────────────────────────────────────────
    {
      id: "crowded", type: "word", pos: "adj", target: "crowded",
      gloss: { es: "lleno/a de gente, abarrotado/a", en: "crowded" },
      distractors: ["crowned", "clouded", "full of people's"],
      tags: ["opinions", "city"],
    },
    {
      id: "safe", type: "word", pos: "adj", target: "safe",
      gloss: { es: "seguro/a (sin peligro)", en: "safe" },
      distractors: ["sure", "save", "secure's"],
      note: { es: "safe = sin peligro; sure = convencido/a: I'm sure (estoy seguro/a)." },
      tags: ["opinions", "city"],
    },
    {
      id: "boring", type: "word", pos: "adj", target: "boring",
      gloss: { es: "aburrido/a (que aburre)", en: "boring" },
      distractors: ["bored", "born", "borrowing"],
      note: { es: "boring = que aburre (a boring movie); bored = que se aburre (I'm bored)." },
      tags: ["opinions"],
    },
    {
      id: "worse", type: "word", pos: "adj", target: "worse",
      gloss: { es: "peor (comparativo)", en: "worse" },
      distractors: ["worst", "badder", "wors"],
      errors: [{ text: "badder", feedback: { es: "bad es irregular: worse, the worst." }, ruleId: "en-g-comparatives" }],
      tags: ["comparatives"],
    },
    {
      id: "better", type: "word", pos: "adj", target: "better",
      gloss: { es: "mejor (comparativo)", en: "better" },
      distractors: ["best", "gooder", "more good"],
      errors: [{ text: "more good", feedback: { es: "good es irregular: better, the best." }, ruleId: "en-g-comparatives" }],
      tags: ["comparatives"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "bigger-than", type: "sentence", target: "Mexico City is bigger than New York.",
      gloss: { es: "La Ciudad de México es más grande que Nueva York.", en: "Mexico City is bigger than New York." },
      errors: [
        { text: "Mexico City is more big than New York.", feedback: { es: "Adjetivo corto: -er (bigger)." }, ruleId: "en-g-comparatives" },
        { text: "Mexico City is bigger that New York.", feedback: { es: "«que» en comparaciones es «than»." }, ruleId: "en-g-comparatives" },
      ],
      distractors: ["that", "more", "biggest"],
      grammar: ["en-g-comparatives"],
      annot: { than: { es: "«que» en una comparación", en: "introduces the second item compared" } },
      tags: ["comparatives", "city"],
    },
    {
      id: "more-expensive", type: "sentence", target: "Living downtown is more expensive but more convenient.",
      gloss: { es: "Vivir en el centro es más caro pero más práctico.", en: "Living downtown is more expensive but more convenient." },
      errors: [{ text: "Living downtown is expensiver but convenienter.", feedback: { es: "Adjetivos largos: more + adjetivo." }, ruleId: "en-g-comparatives" }],
      distractors: ["most", "expensiver", "than"],
      grammar: ["en-g-comparatives"],
      tags: ["comparatives", "city"],
    },
    {
      id: "the-best-restaurant", type: "sentence", target: "This is the best restaurant in town.",
      gloss: { es: "Este es el mejor restaurante de la ciudad.", en: "This is the best restaurant in town." },
      errors: [{ text: "This is the best restaurant of the town.", feedback: { es: "Con lugares, el superlativo va con «in»: the best… in town." }, ruleId: "en-g-superlatives" }],
      distractors: ["of", "better", "most"],
      grammar: ["en-g-superlatives"],
      tags: ["superlatives", "food"],
    },
    {
      id: "the-most-beautiful", type: "sentence", target: "It's the most beautiful place I've ever seen.",
      gloss: { es: "Es el lugar más bonito que he visto en mi vida.", en: "It's the most beautiful place I've ever seen." },
      accept: [{ text: "It is the most beautiful place I have ever seen." }],
      errors: [{ text: "It's the more beautiful place I've ever seen.", feedback: { es: "Superlativo de adjetivo largo: the most." }, ruleId: "en-g-superlatives" }],
      distractors: ["more", "saw", "never"],
      grammar: ["en-g-superlatives", "en-g-present-perfect"],
      tags: ["superlatives", "travel"],
    },
    {
      id: "not-as-hot-as", type: "sentence", target: "Today isn't as hot as yesterday.",
      gloss: { es: "Hoy no hace tanto calor como ayer.", en: "Today isn't as hot as yesterday." },
      accept: [{ text: "Today is not as hot as yesterday." }, { text: "It isn't as hot today as yesterday." }],
      errors: [{ text: "Today isn't so hot like yesterday.", feedback: { es: "Para comparar igualdad: as… as." }, ruleId: "en-g-comparatives" }],
      distractors: ["like", "than", "so"],
      grammar: ["en-g-comparatives"],
      tags: ["comparatives", "weather"],
    },
    {
      id: "i-think-its-better", type: "sentence", target: "I think working from home is better for families.",
      gloss: { es: "Creo que trabajar desde casa es mejor para las familias.", en: "I think working from home is better for families." },
      accept: [{ text: "I think that working from home is better for families." }],
      errors: [{ text: "I think that work from home is better for families.", feedback: { es: "Una actividad como sujeto va con -ing: Working from home is…" }, ruleId: "en-g-like-ing" }],
      distractors: ["work", "more", "the"],
      grammar: ["en-g-comparatives"],
      tags: ["opinions", "work"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-comparatives", type: "pattern", target: "cheaper · bigger · easier · more expensive · better",
      gloss: { es: "los comparativos (más… que)", en: "comparatives" },
      pattern: {
        rule: {
          es: "Adjetivos de una sílaba: -er (cheap → cheaper; big → bigger). De dos sílabas en -y: -ier (easy → easier). Los demás: more + adjetivo (more expensive). «que» se dice «than». Irregulares: good → better, bad → worse, far → farther.",
          en: "One-syllable adjectives add -er (cheap → cheaper; big → bigger). Two syllables ending in -y: -ier (easy → easier). Others: more + adjective (more expensive). Irregular: good → better, bad → worse, far → farther.",
        },
        table: [["corto", "-y", "largo", "irregular"], ["cheaper", "easier", "more modern", "better"], ["bigger", "happier", "more expensive", "worse"]],
      },
      question: {
        prompt: { es: "Completa: «The new phone is ___ than the old one.» (caro)", en: "Complete: 'The new phone is ___ than the old one.' (expensive)" },
        options: ["more expensive", "expensiver", "most expensive", "more expensiver"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-comparatives"], tags: ["grammar", "comparatives"],
    },
    {
      id: "pat-superlatives", type: "pattern", target: "the cheapest · the biggest · the most interesting · the best",
      gloss: { es: "los superlativos (el más…)", en: "superlatives" },
      pattern: {
        rule: {
          es: "El superlativo lleva «the» y sigue las mismas reglas: the + -est (the cheapest) o the most + adjetivo largo (the most interesting). Irregulares: the best, the worst. Con lugares va «in»: the tallest building in the world.",
          en: "Superlatives take 'the' and follow the same rules: the + -est (the cheapest) or the most + long adjective (the most interesting). Irregular: the best, the worst. With places use 'in': the tallest building in the world.",
        },
        table: [["adjetivo", "superlativo"], ["cheap", "the cheapest"], ["happy", "the happiest"], ["interesting", "the most interesting"], ["good / bad", "the best / the worst"]],
      },
      question: {
        prompt: { es: "Completa: «It was ___ day of my life.» (malo)", en: "Complete: 'It was ___ day of my life.' (bad)" },
        options: ["the worst", "the baddest", "the worse", "the most bad"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-superlatives"], tags: ["grammar", "superlatives"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-city-or-country", type: "dialogue", target: "I'm not so sure about that.",
      gloss: { es: "No estoy tan seguro/a.", en: "I'm not so sure about that." },
      turns: [
        { who: "A", target: "I think life in a small town is much better than in a big city.", gloss: { es: "Creo que la vida en un pueblo es mucho mejor que en una gran ciudad.", en: "I think life in a small town is much better than in a big city." } },
        { who: "B", target: "Really? I'm not so sure about that. Cities are more exciting.", gloss: { es: "¿En serio? No estoy tan seguro. Las ciudades son más emocionantes.", en: "Really? I'm not so sure about that. Cities are more exciting." } },
        { who: "A", target: "Maybe, but they're also noisier and more expensive.", gloss: { es: "Puede ser, pero también son más ruidosas y más caras.", en: "Maybe, but they're also noisier and more expensive." } },
        { who: "B", target: "That's a good point. But there are more jobs in the city.", gloss: { es: "Buen punto. Pero en la ciudad hay más trabajo.", en: "That's a good point. But there are more jobs in the city." } },
      ],
      question: {
        prompt: { es: "¿Qué ventaja de la ciudad menciona B al final?", en: "What advantage of the city does B mention at the end?" },
        options: [
          { es: "Hay más trabajo", en: "There are more jobs" },
          { es: "Es más barata", en: "It's cheaper" },
          { es: "Es más tranquila", en: "It's quieter" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "opinions", "comparatives"],
    },
    {
      id: "lis-review", type: "listening", target: "The hotel was cheaper than the others and the location was perfect, but the rooms were the smallest I've ever seen.",
      gloss: { es: "El hotel era más barato que los otros y la ubicación era perfecta, pero las habitaciones eran las más chicas que he visto.", en: "The hotel was cheaper than the others and the location was perfect, but the rooms were the smallest I've ever seen." },
      question: {
        prompt: { es: "¿Qué no le gustó del hotel?", en: "What didn't the speaker like about the hotel?" },
        options: [
          { es: "Las habitaciones eran muy chicas", en: "The rooms were tiny" },
          { es: "Era muy caro", en: "It was very expensive" },
          { es: "La ubicación era mala", en: "The location was bad" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "comparatives", "travel"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-discuss", type: "bridge", onlyFor: "es", target: "argue",
      gloss: { es: "discutir, pelear (con alguien)", en: "argue (have a fight)" },
      question: {
        prompt: { es: "«We discussed the plan» significa…", en: "'We discussed the plan' means…" },
        options: [
          { es: "Hablamos sobre el plan.", en: "We talked about the plan." },
          { es: "Nos peleamos por el plan.", en: "We fought about the plan." },
          { es: "Rechazamos el plan.", en: "We rejected the plan." },
        ],
        answer: 0,
      },
      note: { es: "discuss = hablar de un tema, sin pelea; discutir peleando es «argue»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "opinions"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "convenient", type: "word", pos: "adj", target: "convenient",
      gloss: { es: "práctico/a, cómodo/a (que conviene)", en: "convenient" },
      distractors: ["convenience", "conventional", "comfortable"],
      tags: ["opinions"],
    },
    {
      id: "noisy", type: "word", pos: "adj", target: "noisy",
      gloss: { es: "ruidoso/a", en: "noisy" },
      distractors: ["nosy", "noise", "nasty"],
      tags: ["opinions", "city"],
    },
    {
      id: "as-far-as", type: "phrase", pos: "phrase", target: "As far as I'm concerned,",
      gloss: { es: "En lo que a mí respecta,", en: "As far as I'm concerned," },
      distractors: ["As far as I concern,", "As long as I'm concerned,", "So far I'm concerned,"],
      tags: ["opinions", "chunk"],
    },
  ]),
};
