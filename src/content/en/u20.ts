import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u20",
  lang: "en",
  index: 20,
  cefr: "B2",
  title: { target: "In the news", es: "Noticias", en: "In the news" },
  canDo: [
    { es: "Puedo entender y resumir una noticia sobre temas conocidos.", en: "I can understand and summarize a news story on familiar topics." },
    { es: "Puedo contar lo que otra persona dijo, preguntó o pidió.", en: "I can report what someone said, asked or requested." },
    { es: "Sé usar el estilo indirecto y el past perfect.", en: "I can use reported speech and the past perfect." },
  ],
  icon: "📰",
  items: build("en", 20, "B2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "headline", type: "word", target: "headline", plural: "headlines",
      gloss: { es: "titular (de una noticia)", en: "headline" },
      distractors: ["deadline", "headache", "heading's"],
      tags: ["news"],
    },
    {
      id: "according-to", type: "phrase", pos: "phrase", target: "according to",
      gloss: { es: "según", en: "according to" },
      distractors: ["according with", "agreeing to", "accordingly"],
      tags: ["news", "linkers"],
    },
    {
      id: "claim", type: "word", pos: "verb", target: "claim",
      gloss: { es: "afirmar, asegurar (sin pruebas)", en: "to claim" },
      distractors: ["clam", "climb", "complain"],
      note: { es: "No es «reclamar» (= complain o demand): «He claims he is innocent» = asegura que es inocente." },
      tags: ["news", "reporting"],
    },
    {
      id: "deny", type: "word", pos: "verb", target: "deny",
      gloss: { es: "negar (algo)", en: "to deny" },
      forms: { past: "denied", pp: "denied" },
      distractors: ["deni", "delay", "deliver"],
      tags: ["news", "reporting"],
    },
    {
      id: "witness", type: "word", target: "witness", plural: "witnesses",
      gloss: { es: "testigo", en: "witness" },
      distractors: ["witless", "fitness", "wildness"],
      tags: ["news", "crime"],
    },
    {
      id: "arrest", type: "word", pos: "verb", target: "arrest",
      gloss: { es: "arrestar, detener", en: "to arrest" },
      distractors: ["rest", "arise", "attest"],
      tags: ["news", "crime"],
    },
    {
      id: "flood", type: "word", target: "flood", plural: "floods",
      gloss: { es: "inundación", en: "flood" },
      distractors: ["food", "flow", "blood"],
      note: { es: "Se pronuncia «flad», como «blood» (sangre)." },
      tags: ["news", "environment"],
    },
    {
      id: "breaking-news", type: "phrase", pos: "phrase", target: "breaking news",
      gloss: { es: "noticia de último momento", en: "breaking news" },
      distractors: ["broken news", "last news", "break news"],
      tags: ["news"],
    },
    {
      id: "spokesperson", type: "word", target: "spokesperson", plural: "spokespeople",
      gloss: { es: "vocero/a, portavoz", en: "spokesperson" },
      accept: [{ text: "spokesman" }, { text: "spokeswoman" }],
      distractors: ["speaker person", "spokes", "speakman"],
      tags: ["news"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "she-said-she-was", type: "sentence", target: "She said she was tired.",
      gloss: { es: "Dijo que estaba cansada.", en: "She said she was tired." },
      accept: [{ text: "She said that she was tired." }],
      errors: [{ text: "She said me she was tired.", feedback: { es: "«say» no lleva persona directamente: said (that)… o told me (that)…" }, ruleId: "en-g-reported-speech" }],
      distractors: ["told", "is", "me"],
      grammar: ["en-g-reported-speech"],
      tags: ["reporting"],
    },
    {
      id: "he-told-me", type: "sentence", target: "He told me he had lost his job.",
      gloss: { es: "Me dijo que había perdido el trabajo.", en: "He told me he had lost his job." },
      accept: [{ text: "He told me that he had lost his job." }],
      errors: [{ text: "He said me he had lost his job.", feedback: { es: "Con la persona: told me; sin ella: said." }, ruleId: "en-g-reported-speech" }],
      distractors: ["said", "has", "lose"],
      grammar: ["en-g-reported-speech", "en-g-past-perfect"],
      tags: ["reporting"],
    },
    {
      id: "she-asked-me-if", type: "sentence", target: "She asked me if I could help her.",
      gloss: { es: "Me preguntó si podía ayudarla.", en: "She asked me if I could help her." },
      accept: [{ text: "She asked me whether I could help her." }],
      errors: [{ text: "She asked me could I help her.", feedback: { es: "En una pregunta indirecta: if / whether + orden normal (I could)." }, ruleId: "en-g-reported-speech" }],
      distractors: ["can", "that", "said"],
      grammar: ["en-g-reported-speech"],
      tags: ["reporting", "questions"],
    },
    {
      id: "they-asked-where", type: "sentence", target: "They asked us where we lived.",
      gloss: { es: "Nos preguntaron dónde vivíamos.", en: "They asked us where we lived." },
      errors: [{ text: "They asked us where did we live.", feedback: { es: "La pregunta indirecta no lleva «did» ni inversión: where we lived." }, ruleId: "en-g-reported-speech" }],
      distractors: ["did", "live", "do"],
      grammar: ["en-g-reported-speech"],
      tags: ["reporting", "questions"],
    },
    {
      id: "the-police-told-us", type: "sentence", target: "The police told us to stay inside.",
      gloss: { es: "La policía nos dijo que nos quedáramos adentro.", en: "The police told us to stay inside." },
      errors: [{ text: "The police told us that we stay inside.", feedback: { es: "Para órdenes y pedidos: tell / ask + persona + to + verbo." }, ruleId: "en-g-reported-speech" }],
      distractors: ["said", "stayed", "is"],
      grammar: ["en-g-reported-speech"],
      tags: ["reporting", "news"],
    },
    {
      id: "when-we-arrived-the-train", type: "sentence", target: "When we got to the station, the train had already left.",
      gloss: { es: "Cuando llegamos a la estación, el tren ya se había ido.", en: "When we got to the station, the train had already left." },
      errors: [{ text: "When we got to the station, the train already left.", feedback: { es: "Para algo anterior a otro hecho pasado: had + participio." }, ruleId: "en-g-past-perfect" }],
      distractors: ["has", "leaved", "was"],
      grammar: ["en-g-past-perfect"],
      annot: { "had already left": { es: "past perfect: pasó antes de que llegáramos", en: "past perfect: happened before we arrived" } },
      tags: ["past-perfect", "transport"],
    },
    {
      id: "id-never-seen", type: "sentence", target: "I'd never seen so much snow before that winter.",
      gloss: { es: "Nunca había visto tanta nieve antes de aquel invierno.", en: "I'd never seen so much snow before that winter." },
      accept: [{ text: "I had never seen so much snow before that winter." }],
      distractors: ["have", "saw", "many"],
      grammar: ["en-g-past-perfect"],
      tags: ["past-perfect"],
    },
    {
      id: "according-to-the-report", type: "sentence", target: "According to the report, unemployment fell last year.",
      gloss: { es: "Según el informe, el desempleo bajó el año pasado.", en: "According to the report, unemployment fell last year." },
      errors: [{ text: "According the report, unemployment fell last year.", feedback: { es: "«según» = according to (con «to»)." } }],
      distractors: ["with", "felt", "falled"],
      tags: ["news"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-reported-speech", type: "pattern", target: "\"I'm tired.\" → She said she was tired.", spoken: "I'm tired. She said she was tired.",
      gloss: { es: "el estilo indirecto", en: "reported speech" },
      pattern: {
        rule: {
          es: "Al contar lo que alguien dijo, el verbo suele retroceder un tiempo (am → was, will → would, can → could, pasado → had + participio). «say» va sin persona («she said that…») y «tell» con persona («she told me that…»). Las preguntas indirectas no llevan inversión: «She asked where I lived».",
          en: "When reporting, the verb usually moves one tense back (am → was, will → would, can → could, past → had + participle). 'say' has no person after it (she said that…); 'tell' does (she told me that…). Reported questions have no inversion: She asked where I lived.",
        },
        table: [["directo", "indirecto"], ["\"I like it.\"", "He said he liked it."], ["\"I'll call.\"", "She said she would call."], ["\"Where do you live?\"", "He asked where I lived."], ["\"Sit down.\"", "She told me to sit down."]],
      },
      question: {
        prompt: { es: "«Can you help me?», dijo Tom. → Tom asked me…", en: "'Can you help me?' Tom said. → Tom asked me…" },
        options: ["if I could help him.", "if can I help him.", "could I help him.", "that I could help him."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-reported-speech"], tags: ["grammar", "reporting"],
    },
    {
      id: "pat-past-perfect", type: "pattern", target: "had + participio",
      gloss: { es: "el past perfect (había + participio)", en: "the past perfect" },
      pattern: {
        rule: {
          es: "had + participio expresa algo que ocurrió antes de otro momento del pasado, como «había llegado». Sirve para ordenar los hechos en un relato y aparece mucho en el estilo indirecto.",
          en: "had + past participle shows that something happened before another past moment. It orders events in a story and is common in reported speech.",
        },
        table: [["primero (had + participio)", "después (pasado simple)"], ["The movie had started", "when we arrived."], ["She had never flown", "before that trip."]],
      },
      question: {
        prompt: { es: "Completa: «I couldn't get in because I ___ my keys.»", en: "Complete: 'I couldn't get in because I ___ my keys.'" },
        options: ["had lost", "have lost", "was losing", "lose"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-past-perfect"], tags: ["grammar", "past-perfect"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-did-you-hear", type: "dialogue", target: "Did you hear about the flood?",
      gloss: { es: "¿Te enteraste de la inundación?", en: "Did you hear about the flood?" },
      turns: [
        { who: "A", target: "Did you hear about the flood downtown?", gloss: { es: "¿Te enteraste de la inundación en el centro?", en: "Did you hear about the flood downtown?" } },
        { who: "B", target: "Yes! My sister called me. She said the water had reached the second floor of her building.", gloss: { es: "¡Sí! Me llamó mi hermana. Dijo que el agua había llegado al segundo piso de su edificio.", en: "Yes! My sister called me. She said the water had reached the second floor of her building." } },
        { who: "A", target: "Is she okay?", gloss: { es: "¿Ella está bien?", en: "Is she okay?" } },
        { who: "B", target: "She's fine. The police had told everyone to leave the night before.", gloss: { es: "Está bien. La policía les había dicho a todos que se fueran la noche anterior.", en: "She's fine. The police had told everyone to leave the night before." } },
      ],
      question: {
        prompt: { es: "¿Por qué está bien la hermana?", en: "Why is the sister okay?" },
        options: [
          { es: "La policía les había dicho que se fueran antes", en: "The police had told people to leave earlier" },
          { es: "Vive en el último piso", en: "She lives on the top floor" },
          { es: "No estaba en la ciudad", en: "She was out of town" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "news", "reporting"],
    },
    {
      id: "lis-news-report", type: "listening", target: "A spokesperson for the company denied the claims and said that no employees had been laid off. However, according to two witnesses, over fifty workers were sent home on Monday.",
      gloss: { es: "Un vocero de la empresa negó las acusaciones y dijo que no se había despedido a ningún empleado. Sin embargo, según dos testigos, más de cincuenta trabajadores fueron enviados a casa el lunes.", en: "A spokesperson for the company denied the claims and said that no employees had been laid off. However, according to two witnesses, over fifty workers were sent home on Monday." },
      question: {
        prompt: { es: "¿Qué dicen los testigos?", en: "What do the witnesses say?" },
        options: [
          { es: "Que más de cincuenta trabajadores fueron enviados a casa", en: "Over fifty workers were sent home" },
          { es: "Que nadie fue despedido", en: "Nobody was laid off" },
          { es: "Que la empresa cerró", en: "The company closed" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "news", "reporting"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-notice", type: "bridge", onlyFor: "es", target: "the news",
      gloss: { es: "las noticias", en: "the news" },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["The news is on at nine.", "The news are on at nine.", "The new is on at nine."],
        answer: 0,
      },
      note: { es: "«news» es incontable y va en singular: the news is; una noticia = a piece of news. «notice» es un aviso." },
      exercises: ["guess", "question"], tags: ["bridge", "uncountable", "news"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "journalist", type: "word", target: "journalist",
      gloss: { es: "periodista", en: "journalist" },
      accept: [{ text: "reporter" }],
      distractors: ["journal", "journey", "newspaperist"],
      tags: ["news", "jobs"],
    },
    {
      id: "survey", type: "word", target: "survey",
      gloss: { es: "encuesta (estudio de opinión)", en: "survey" },
      distractors: ["surveil", "serve", "survive"],
      tags: ["news"],
    },
    {
      id: "rumor", type: "word", target: "rumor",
      gloss: { es: "rumor", en: "rumor" },
      accept: [{ text: "rumour" }],
      distractors: ["humor", "roomer", "tumor"],
      note: { es: "Ortografía británica: rumour." },
      tags: ["news"],
    },
  ]),
};
