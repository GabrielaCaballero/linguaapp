import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u23",
  lang: "en",
  index: 23,
  cefr: "B2",
  title: { target: "Let's discuss it", es: "Debatir", en: "Let's discuss it" },
  canDo: [
    { es: "Puedo defender una postura con argumentos y responder a objeciones.", en: "I can defend a position with arguments and answer objections." },
    { es: "Puedo hacer suposiciones sobre lo que es probable o imposible.", en: "I can make deductions about what is likely or impossible." },
    { es: "Sé usar although, however, despite, whereas y los modales de deducción (must be, can't be, might be).", en: "I can use although, however, despite, whereas and modals of deduction (must be, can't be, might be)." },
  ],
  icon: "⚖️",
  items: build("en", 23, "B2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "although", type: "word", pos: "other", target: "although",
      gloss: { es: "aunque", en: "although" },
      accept: [{ text: "even though" }, { text: "though" }],
      distractors: ["although of", "despite", "all though"],
      tags: ["linkers", "debate"],
    },
    {
      id: "however", type: "word", pos: "adv", target: "however",
      gloss: { es: "sin embargo", en: "however" },
      distractors: ["whatever", "how ever", "anyway"],
      note: { es: "Suele ir al principio de la frase, seguido de una coma: However, …" },
      tags: ["linkers", "debate"],
    },
    {
      id: "despite", type: "word", pos: "prep", target: "despite",
      gloss: { es: "a pesar de", en: "despite" },
      accept: [{ text: "in spite of" }],
      distractors: ["despite of", "although", "despise"],
      errors: [{ text: "despite of", feedback: { es: "«despite» va sin «of»; con «of» es «in spite of»." }, ruleId: "en-g-contrast-linkers" }],
      tags: ["linkers", "debate"],
    },
    {
      id: "whereas", type: "word", pos: "other", target: "whereas",
      gloss: { es: "mientras que (contraste)", en: "whereas" },
      distractors: ["where as", "whenever", "wherever"],
      tags: ["linkers", "debate"],
    },
    {
      id: "on-the-other-hand", type: "phrase", pos: "phrase", target: "on the other hand",
      gloss: { es: "por otro lado", en: "on the other hand" },
      distractors: ["by the other hand", "on the other side", "in the other hand"],
      tags: ["linkers", "debate"],
    },
    {
      id: "point-of-view", type: "word", target: "point of view",
      gloss: { es: "punto de vista", en: "point of view" },
      accept: [{ text: "viewpoint" }],
      distractors: ["point of see", "view of point", "sight point"],
      tags: ["debate"],
    },
    {
      id: "argument", type: "word", target: "argument", plural: "arguments",
      gloss: { es: "argumento; discusión (pelea)", en: "argument" },
      distractors: ["agreement", "augment", "arguing's"],
      note: { es: "Ojo: «We had an argument» = nos peleamos; el argumento de una película es «the plot»." },
      tags: ["debate", "false-friend"],
    },
    {
      id: "evidence", type: "word", target: "evidence",
      gloss: { es: "pruebas, evidencia", en: "evidence" },
      distractors: ["evidences", "evident", "evidently"],
      note: { es: "Es incontable: there is no evidence, a piece of evidence." },
      tags: ["debate", "uncountable"],
    },
    {
      id: "fair-enough", type: "phrase", pos: "phrase", target: "Fair enough.",
      gloss: { es: "Me parece razonable. / Está bien, acepto.", en: "Fair enough." },
      distractors: ["Fair enough of.", "Enough fair.", "Very fair enough."],
      tags: ["debate", "chunk"],
    },
    {
      id: "i-see-your-point", type: "phrase", pos: "phrase", target: "I see your point, but…",
      gloss: { es: "Entiendo lo que dices, pero…", en: "I see your point, but…" },
      accept: [{ text: "I see what you mean, but…" }, { text: "I take your point, but…" }],
      distractors: ["I see your point of, but…", "I look your point, but…", "I watch your point, but…"],
      tags: ["debate", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "although-its-expensive", type: "sentence", target: "Although it's expensive, the subway is the fastest option.",
      gloss: { es: "Aunque es caro, el metro es la opción más rápida.", en: "Although it's expensive, the subway is the fastest option." },
      accept: [{ text: "Even though it's expensive, the subway is the fastest option." }, { text: "Although it is expensive, the subway is the fastest option." }],
      errors: [{ text: "Although it's expensive, but the subway is the fastest option.", feedback: { es: "«although» y «but» no van juntos en la misma frase." }, ruleId: "en-g-contrast-linkers" }],
      distractors: ["but", "Despite", "faster"],
      grammar: ["en-g-contrast-linkers"],
      tags: ["linkers", "transport"],
    },
    {
      id: "despite-the-rain", type: "sentence", target: "Despite the rain, thousands of people came to the march.",
      gloss: { es: "A pesar de la lluvia, miles de personas fueron a la marcha.", en: "Despite the rain, thousands of people came to the march." },
      accept: [{ text: "In spite of the rain, thousands of people came to the march." }],
      errors: [{ text: "Despite it was raining, thousands of people came to the march.", feedback: { es: "«despite» va con sustantivo o -ing; con verbo conjugado usa «although»." }, ruleId: "en-g-contrast-linkers" }],
      distractors: ["of", "Although", "thousand"],
      grammar: ["en-g-contrast-linkers"],
      tags: ["linkers", "news"],
    },
    {
      id: "whereas-my-brother", type: "sentence", target: "I'm a morning person, whereas my brother hates getting up early.",
      gloss: { es: "A mí me gusta madrugar, mientras que mi hermano odia levantarse temprano.", en: "I'm a morning person, whereas my brother hates getting up early." },
      accept: [{ text: "I'm a morning person, while my brother hates getting up early." }],
      distractors: ["however", "hate", "get"],
      grammar: ["en-g-contrast-linkers"],
      tags: ["linkers"],
    },
    {
      id: "she-must-be-tired", type: "sentence", target: "She's been working since six. She must be exhausted.",
      gloss: { es: "Trabaja desde las seis. Debe de estar agotada.", en: "She's been working since six. She must be exhausted." },
      accept: [{ text: "She has been working since six. She must be exhausted." }],
      distractors: ["can", "has", "to"],
      grammar: ["en-g-deduction"],
      annot: { "must be": { es: "deducción casi segura (debe de estar)", en: "near-certain deduction" } },
      tags: ["deduction"],
    },
    {
      id: "that-cant-be-true", type: "sentence", target: "That can't be true. I saw him this morning.",
      gloss: { es: "Eso no puede ser cierto. Lo vi esta mañana.", en: "That can't be true. I saw him this morning." },
      accept: [{ text: "That cannot be true. I saw him this morning." }],
      errors: [{ text: "That mustn't be true. I saw him this morning.", feedback: { es: "Para decir que algo es imposible se usa «can't be», no «mustn't»." }, ruleId: "en-g-deduction" }],
      distractors: ["mustn't", "isn't", "seen"],
      grammar: ["en-g-deduction"],
      tags: ["deduction"],
    },
    {
      id: "they-might-be-stuck", type: "sentence", target: "They're late. They might be stuck in traffic.",
      gloss: { es: "Llegan tarde. Quizás estén atrapados en el tráfico.", en: "They're late. They might be stuck in traffic." },
      accept: [{ text: "They're late. They may be stuck in traffic." }, { text: "They're late. They could be stuck in traffic." }],
      distractors: ["must", "in the", "stucked"],
      grammar: ["en-g-deduction"],
      tags: ["deduction", "transport"],
    },
    {
      id: "he-must-have-forgotten", type: "sentence", target: "He didn't answer. He must have forgotten.",
      gloss: { es: "No contestó. Se le debe de haber olvidado.", en: "He didn't answer. He must have forgotten." },
      accept: [{ text: "He didn't answer. He must've forgotten." }],
      distractors: ["forgot", "has", "can"],
      grammar: ["en-g-deduction", "en-g-modal-perfect"],
      tags: ["deduction"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-contrast-linkers", type: "pattern", target: "although + frase · despite + sustantivo / -ing · However, …",
      gloss: { es: "conectores de contraste", en: "contrast linkers" },
      pattern: {
        rule: {
          es: "although / even though (aunque) van seguidos de una oración con verbo. despite / in spite of (a pesar de) van con un sustantivo o un -ing. however (sin embargo) une dos oraciones separadas y suele llevar coma. whereas / while contrastan dos ideas paralelas.",
          en: "although / even though are followed by a clause with a verb. despite / in spite of take a noun or -ing. however links two separate sentences, usually with a comma. whereas / while contrast two parallel ideas.",
        },
        table: [["although", "Although it rained, we went out."], ["despite", "Despite the rain, we went out."], ["despite + -ing", "Despite being tired, she kept going."], ["however", "It rained. However, we went out."]],
      },
      question: {
        prompt: { es: "Completa: «___ having little money, they traveled around the world.»", en: "Complete: '___ having little money, they traveled around the world.'" },
        options: ["Despite", "Although", "However", "Despite of"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-contrast-linkers"], tags: ["grammar", "linkers"],
    },
    {
      id: "pat-deduction", type: "pattern", target: "must be · might be · can't be",
      gloss: { es: "modales de deducción (debe de, puede que, no puede ser)", en: "modals of deduction" },
      pattern: {
        rule: {
          es: "Para suposiciones sobre el presente: must be (estoy casi seguro/a de que sí), might / may / could be (es posible), can't be (estoy casi seguro/a de que no). Para el pasado: must have / might have / can't have + participio.",
          en: "For deductions about the present: must be (almost sure it's true), might / may / could be (possible), can't be (almost sure it's not). For the past: must have / might have / can't have + past participle.",
        },
        table: [["seguro que sí", "She must be at home."], ["posible", "She might be at home."], ["seguro que no", "She can't be at home."], ["pasado", "She must have left already."]],
      },
      question: {
        prompt: { es: "Ves la luz encendida y el auto en la puerta: «They ___ home.»", en: "The lights are on and the car is outside: 'They ___ home.'" },
        options: ["must be", "can't be", "mustn't be", "must to be"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-deduction"], tags: ["grammar", "modals", "deduction"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-four-day-week", type: "dialogue", target: "I see your point, but…",
      gloss: { es: "Entiendo lo que dices, pero…", en: "I see your point, but…" },
      turns: [
        { who: "A", target: "I think every company should have a four-day week.", gloss: { es: "Creo que todas las empresas deberían tener una semana de cuatro días.", en: "I think every company should have a four-day week." } },
        { who: "B", target: "I see your point, but it wouldn't work in hospitals or schools.", gloss: { es: "Entiendo lo que dices, pero no funcionaría en hospitales ni escuelas.", en: "I see your point, but it wouldn't work in hospitals or schools." } },
        { who: "A", target: "Fair enough. However, there's evidence that people are more productive.", gloss: { es: "Es razonable. Sin embargo, hay pruebas de que la gente rinde más.", en: "Fair enough. However, there's evidence that people are more productive." } },
        { who: "B", target: "Maybe, although that might depend on the job.", gloss: { es: "Puede ser, aunque eso quizás dependa del trabajo.", en: "Maybe, although that might depend on the job." } },
      ],
      question: {
        prompt: { es: "¿Qué objeción plantea B?", en: "What objection does B raise?" },
        options: [
          { es: "No funcionaría en hospitales ni escuelas", en: "It wouldn't work in hospitals or schools" },
          { es: "La gente sería menos productiva", en: "People would be less productive" },
          { es: "Las empresas ganarían menos", en: "Companies would earn less" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "debate", "linkers"],
    },
    {
      id: "lis-debate", type: "listening", target: "Supporters say the new law will reduce traffic. Critics, on the other hand, argue that it will hurt small businesses, although they admit that the air quality must improve.",
      gloss: { es: "Quienes la apoyan dicen que la nueva ley reducirá el tráfico. Los críticos, por otro lado, sostienen que perjudicará a los pequeños comercios, aunque admiten que la calidad del aire tiene que mejorar.", en: "Supporters say the new law will reduce traffic. Critics, on the other hand, argue that it will hurt small businesses, although they admit that the air quality must improve." },
      question: {
        prompt: { es: "¿En qué están de acuerdo los críticos?", en: "What do the critics agree on?" },
        options: [
          { es: "En que la calidad del aire tiene que mejorar", en: "Air quality must improve" },
          { es: "En que la ley ayudará a los comercios", en: "The law will help businesses" },
          { es: "En que el tráfico no es un problema", en: "Traffic isn't a problem" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "debate", "news"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-pretend", type: "bridge", onlyFor: "es", target: "pretend",
      gloss: { es: "fingir, hacer como si", en: "pretend (act as if)" },
      question: {
        prompt: { es: "«He pretended to agree» significa…", en: "'He pretended to agree' means…" },
        options: [
          { es: "Fingió estar de acuerdo.", en: "He acted as if he agreed." },
          { es: "Pretendía (quería) estar de acuerdo.", en: "He intended to agree." },
          { es: "Estuvo de acuerdo al final.", en: "He agreed in the end." },
        ],
        answer: 0,
      },
      note: { es: "pretend = fingir; «pretender» (tener la intención) es «intend» o «aim to»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "debate"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "nevertheless", type: "word", pos: "adv", target: "nevertheless",
      gloss: { es: "no obstante", en: "nevertheless" },
      accept: [{ text: "nonetheless" }],
      distractors: ["never the less's", "nonetheless's", "neverless"],
      tags: ["linkers", "debate"],
    },
    {
      id: "convince", type: "word", pos: "verb", target: "convince",
      gloss: { es: "convencer", en: "to convince" },
      accept: [{ text: "persuade" }],
      distractors: ["convict", "convene", "conceive"],
      tags: ["debate"],
    },
    {
      id: "issue", type: "word", target: "issue",
      gloss: { es: "tema, cuestión (a debatir)", en: "issue" },
      distractors: ["tissue", "itch", "isle"],
      tags: ["debate"],
    },
  ]),
};
