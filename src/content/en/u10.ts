import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u10",
  lang: "en",
  index: 10,
  cefr: "A2",
  title: { target: "Last weekend", es: "El fin de semana pasado", en: "Last weekend" },
  canDo: [
    { es: "Puedo contar qué hice el fin de semana o en vacaciones.", en: "I can say what I did on the weekend or on vacation." },
    { es: "Puedo preguntarle a alguien qué hizo y reaccionar a lo que me cuenta.", en: "I can ask someone what they did and react to their answer." },
    { es: "Sé usar el pasado simple: verbos regulares (-ed), irregulares comunes y «did» para preguntar y negar.", en: "I can use the past simple: regular -ed verbs, common irregular verbs, and 'did' for questions and negatives." },
  ],
  icon: "📅",
  items: build("en", 10, "A2", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-ed", type: "sound", target: "worked",
      gloss: { es: "trabajé / trabajó", en: "worked" },
      distractors: ["worket", "workid", "work-ed"],
      note: { es: "La -ed casi nunca es una sílaba aparte: worked = «workt», played = «pleid»; solo tras t o d suena «id»: wanted." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "past", "ed"],
    },

    // ── Verbs and time words ─────────────────────────────────
    {
      id: "went", type: "word", pos: "verb", target: "went",
      gloss: { es: "fui / fue / fuimos (pasado de «go»)", en: "went (past of go)" },
      forms: { base: "go", past: "went", pp: "gone" },
      distractors: ["goed", "gone", "want"],
      errors: [{ text: "goed", feedback: { es: "«go» es irregular: went." }, ruleId: "en-g-past-irregular" }],
      tags: ["past", "irregular"],
    },
    {
      id: "saw", type: "word", pos: "verb", target: "saw",
      gloss: { es: "vi / vio (pasado de «see»)", en: "saw (past of see)" },
      forms: { base: "see", past: "saw", pp: "seen" },
      distractors: ["seed", "seen", "sow"],
      tags: ["past", "irregular"],
    },
    {
      id: "had", type: "word", pos: "verb", target: "had",
      gloss: { es: "tuve / tuvo (pasado de «have»)", en: "had (past of have)" },
      forms: { base: "have", past: "had", pp: "had" },
      distractors: ["haved", "has", "hat"],
      tags: ["past", "irregular"],
    },
    {
      id: "bought", type: "word", pos: "verb", target: "bought",
      gloss: { es: "compré / compró (pasado de «buy»)", en: "bought (past of buy)" },
      forms: { base: "buy", past: "bought", pp: "bought" },
      distractors: ["buyed", "brought", "boat"],
      note: { es: "bought (compré) y brought (traje) se parecen mucho: fíjate en la «r»." },
      tags: ["past", "irregular"],
    },
    {
      id: "ate", type: "word", pos: "verb", target: "ate",
      gloss: { es: "comí / comió (pasado de «eat»)", en: "ate (past of eat)" },
      forms: { base: "eat", past: "ate", pp: "eaten" },
      distractors: ["eated", "eat", "eight"],
      tags: ["past", "irregular", "food"],
    },
    {
      id: "visited", type: "word", pos: "verb", target: "visited",
      gloss: { es: "visité / visitó", en: "visited" },
      forms: { base: "visit", past: "visited", pp: "visited" },
      distractors: ["visitted", "visit", "visiting"],
      tags: ["past", "regular"],
    },
    {
      id: "stayed", type: "word", pos: "verb", target: "stayed",
      gloss: { es: "me quedé / se quedó", en: "stayed" },
      forms: { base: "stay", past: "stayed", pp: "stayed" },
      distractors: ["staied", "stood", "stay"],
      tags: ["past", "regular"],
    },
    {
      id: "yesterday", type: "word", pos: "adv", target: "yesterday",
      gloss: { es: "ayer", en: "yesterday" },
      distractors: ["yesterdays", "today", "tomorrow"],
      tags: ["time", "past"],
    },
    {
      id: "last-night", type: "phrase", pos: "phrase", target: "last night",
      gloss: { es: "anoche", en: "last night" },
      distractors: ["yesterday night", "the last night", "past night"],
      errors: [{ text: "yesterday night", feedback: { es: "«anoche» se dice «last night»." } }],
      tags: ["time", "past"],
    },
    {
      id: "two-days-ago", type: "phrase", pos: "phrase", target: "two days ago",
      gloss: { es: "hace dos días", en: "two days ago" },
      distractors: ["ago two days", "before two days", "it makes two days"],
      errors: [{ text: "ago two days", feedback: { es: "«ago» va después del tiempo: two days ago." } }],
      tags: ["time", "past"],
    },
    {
      id: "how-was-your-weekend", type: "phrase", pos: "phrase", target: "How was your weekend?",
      gloss: { es: "¿Qué tal tu fin de semana?", en: "How was your weekend?" },
      distractors: ["How did your weekend?", "How is your weekend?", "What was your weekend?"],
      tags: ["past", "chunk"],
    },
    {
      id: "sounds-fun", type: "phrase", pos: "phrase", target: "That sounds like fun!",
      gloss: { es: "¡Qué divertido!", en: "That sounds like fun!" },
      accept: [{ text: "Sounds fun!" }, { text: "That sounds fun!" }],
      distractors: ["That sounds funny!", "That listens fun!", "It sounds a fun!"],
      note: { es: "«funny» es «gracioso»; algo divertido es «fun»." },
      tags: ["reactions", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "we-went-to-the-beach", type: "sentence", target: "We went to the beach on Saturday.",
      gloss: { es: "El sábado fuimos a la playa.", en: "We went to the beach on Saturday." },
      accept: [{ text: "On Saturday we went to the beach." }],
      errors: [{ text: "We go to the beach on Saturday.", feedback: { es: "Para el pasado: went." }, ruleId: "en-g-past-irregular" }],
      distractors: ["goed", "in", "gone"],
      grammar: ["en-g-past-irregular"],
      tags: ["past", "weekend"],
    },
    {
      id: "i-stayed-home", type: "sentence", target: "I stayed home and watched a movie.",
      gloss: { es: "Me quedé en casa y vi una película.", en: "I stayed home and watched a movie." },
      accept: [{ text: "I stayed at home and watched a movie." }, { text: "I stayed home and watched a film." }],
      distractors: ["stay", "saw", "in"],
      grammar: ["en-g-past-simple"],
      note: { es: "En Estados Unidos se dice «stay home» sin «at»." },
      tags: ["past", "weekend"],
    },
    {
      id: "did-you-have-fun", type: "sentence", target: "Did you have a good time?",
      gloss: { es: "¿La pasaste bien?", en: "Did you have a good time?" },
      accept: [{ text: "Did you have fun?" }],
      errors: [{ text: "Did you had a good time?", feedback: { es: "Después de «did» va la forma base: have." }, ruleId: "en-g-past-simple" }],
      distractors: ["had", "Do", "were"],
      grammar: ["en-g-past-simple"],
      tags: ["past", "questions"],
    },
    {
      id: "i-didnt-go-out", type: "sentence", target: "I didn't go out last night.",
      gloss: { es: "Anoche no salí.", en: "I didn't go out last night." },
      accept: [{ text: "I did not go out last night." }],
      errors: [{ text: "I didn't went out last night.", feedback: { es: "Con «didn't» el verbo vuelve a la forma base: didn't go." }, ruleId: "en-g-past-simple" }],
      distractors: ["went", "yesterday", "don't"],
      grammar: ["en-g-past-simple"],
      tags: ["past", "negation"],
    },
    {
      id: "what-did-you-do", type: "sentence", target: "What did you do on Sunday?",
      gloss: { es: "¿Qué hiciste el domingo?", en: "What did you do on Sunday?" },
      errors: [{ text: "What you did on Sunday?", feedback: { es: "La pregunta necesita «did» antes del sujeto: What did you do?" }, ruleId: "en-g-past-simple" }],
      distractors: ["made", "does", "in"],
      grammar: ["en-g-past-simple"],
      tags: ["past", "questions"],
    },
    {
      id: "she-bought-a-dress", type: "sentence", target: "She bought a new dress two days ago.",
      gloss: { es: "Se compró un vestido nuevo hace dos días.", en: "She bought a new dress two days ago." },
      distractors: ["buyed", "before", "brought"],
      grammar: ["en-g-past-irregular"],
      tags: ["past", "shopping"],
    },
    {
      id: "we-had-dinner", type: "sentence", target: "We had dinner at my aunt's house.",
      gloss: { es: "Cenamos en casa de mi tía.", en: "We had dinner at my aunt's house." },
      errors: [{ text: "We dinner at my aunt's house.", feedback: { es: "«cenar» es «have dinner»; en pasado, «had dinner»." }, ruleId: "en-g-past-irregular" }],
      distractors: ["have", "in", "aunt"],
      grammar: ["en-g-past-irregular", "en-g-possessive-s"],
      tags: ["past", "family", "food"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-past-simple", type: "pattern", target: "I worked · Did you work? · I didn't work",
      gloss: { es: "el pasado simple", en: "the past simple" },
      pattern: {
        rule: {
          es: "Los verbos regulares añaden -ed para todas las personas (worked). Para preguntar y negar se usa «did» / «didn't» + verbo en forma base, también con los irregulares: «Did you go?», «I didn't go».",
          en: "Regular verbs add -ed for every person (worked). Questions and negatives use did / didn't + base form, irregular verbs included: Did you go? I didn't go.",
        },
        table: [["+", "She worked late."], ["−", "She didn't work late."], ["?", "Did she work late?"], ["respuesta", "Yes, she did. / No, she didn't."]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Did you see the game?", "Did you saw the game?", "You did see the game?", "Saw you the game?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-past-simple"], tags: ["grammar", "past"],
    },
    {
      id: "pat-past-irregular", type: "pattern", target: "go → went · have → had · see → saw",
      gloss: { es: "verbos irregulares en pasado", en: "irregular past forms" },
      pattern: {
        rule: {
          es: "Los verbos más frecuentes son irregulares y hay que aprender su pasado de memoria. La buena noticia: la forma es la misma para todas las personas (I went, she went, they went).",
          en: "The most common verbs are irregular and their past forms have to be learned. The good news: the form is the same for every person (I went, she went, they went).",
        },
        table: [["go → went", "eat → ate"], ["have → had", "buy → bought"], ["see → saw", "make → made"], ["get → got", "take → took"]],
      },
      question: {
        prompt: { es: "Completa: «Yesterday I ___ (take) the train to work.»", en: "Complete: 'Yesterday I ___ (take) the train to work.'" },
        options: ["took", "taked", "take", "taken"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-past-irregular"], tags: ["grammar", "past", "irregular"],
    },
    {
      id: "tab-irregular-past", type: "paradigm", target: "irregular past simple", spoken: "irregular past simple",
      gloss: { es: "pasado de verbos irregulares", en: "irregular past simple forms" },
      grammar: ["en-g-past-irregular"],
      paradigm: {
        caption: { es: "Escribe el pasado simple", en: "Write the past simple" },
        cells: [
          { label: "go", answer: "went", ruleId: "en-g-past-irregular" },
          { label: "have", answer: "had", ruleId: "en-g-past-irregular" },
          { label: "see", answer: "saw", ruleId: "en-g-past-irregular" },
          { label: "eat", answer: "ate", ruleId: "en-g-past-irregular" },
          { label: "buy", answer: "bought", ruleId: "en-g-past-irregular" },
          { label: "get", answer: "got", ruleId: "en-g-past-irregular" },
          { label: "make", answer: "made", ruleId: "en-g-past-irregular" },
        ],
      },
      tags: ["grammar", "past", "irregular", "table"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-weekend", type: "dialogue", target: "How was your weekend?",
      gloss: { es: "¿Qué tal tu fin de semana?", en: "How was your weekend?" },
      turns: [
        { who: "A", target: "Hey! How was your weekend?", gloss: { es: "¡Hola! ¿Qué tal tu fin de semana?", en: "Hey! How was your weekend?" } },
        { who: "B", target: "Great! We went camping in the mountains.", gloss: { es: "¡Genial! Fuimos de campamento a la montaña.", en: "Great! We went camping in the mountains." } },
        { who: "A", target: "That sounds like fun! Did it rain?", gloss: { es: "¡Qué divertido! ¿Llovió?", en: "That sounds like fun! Did it rain?" } },
        { who: "B", target: "No, it didn't. It was sunny, but the nights were really cold. What about you?", gloss: { es: "No. Hizo sol, pero las noches fueron muy frías. ¿Y tú?", en: "No, it didn't. It was sunny, but the nights were really cold. What about you?" } },
        { who: "A", target: "Nothing special. I cleaned the house and visited my mom.", gloss: { es: "Nada especial. Limpié la casa y visité a mi mamá.", en: "Nothing special. I cleaned the house and visited my mom." } },
      ],
      question: {
        prompt: { es: "¿Qué tiempo hizo en la montaña?", en: "What was the weather like in the mountains?" },
        options: [
          { es: "Hizo sol, pero las noches fueron frías", en: "Sunny, with cold nights" },
          { es: "Llovió todo el fin de semana", en: "It rained all weekend" },
          { es: "Hizo mucho calor de noche", en: "The nights were very hot" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "past", "weekend"],
    },
    {
      id: "lis-voicemail", type: "listening", target: "Hi, it's Mike. Sorry I didn't call you back yesterday. I worked late and got home at eleven. Call me tonight!",
      gloss: { es: "Hola, soy Mike. Perdón por no devolverte la llamada ayer. Trabajé hasta tarde y llegué a casa a las once. ¡Llámame esta noche!", en: "Hi, it's Mike. Sorry I didn't call you back yesterday. I worked late and got home at eleven. Call me tonight!" },
      question: {
        prompt: { es: "¿Por qué no llamó Mike?", en: "Why didn't Mike call?" },
        options: [
          { es: "Trabajó hasta tarde", en: "He worked late" },
          { es: "Estaba enfermo", en: "He was sick" },
          { es: "Perdió el teléfono", en: "He lost his phone" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "past"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-assist", type: "bridge", onlyFor: "es", target: "assist",
      gloss: { es: "ayudar (formal)", en: "assist (help)" },
      question: {
        prompt: { es: "«How can I assist you?» significa…", en: "'How can I assist you?' means…" },
        options: [
          { es: "¿En qué puedo ayudarle?", en: "How can I help you?" },
          { es: "¿Cómo puedo asistir a su evento?", en: "How can I attend your event?" },
          { es: "¿Cómo puedo visitarle?", en: "How can I visit you?" },
        ],
        answer: 0,
      },
      note: { es: "assist = ayudar; «asistir» a una clase o una fiesta es «attend» o «go to»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
