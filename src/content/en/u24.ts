import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u24",
  lang: "en",
  index: 24,
  cefr: "B2",
  title: { target: "Small talk and idioms", es: "Charla informal y expresiones", en: "Small talk and idioms" },
  canDo: [
    { es: "Puedo mantener una charla informal con colegas o vecinos con naturalidad.", en: "I can make small talk naturally with colleagues or neighbors." },
    { es: "Puedo entender y usar expresiones idiomáticas frecuentes.", en: "I can understand and use common idioms." },
    { es: "Sé usar las question tags (isn't it?, don't you?) y «so / such» para enfatizar.", en: "I can use question tags (isn't it?, don't you?) and 'so / such' for emphasis." },
  ],
  icon: "☕",
  items: build("en", 24, "B2", [
    // ── Idioms ───────────────────────────────────────────────
    {
      id: "piece-of-cake", type: "phrase", pos: "phrase", target: "It's a piece of cake.",
      gloss: { es: "Es pan comido. / Es facilísimo.", en: "It's a piece of cake." },
      distractors: ["It's a piece of bread.", "It's a cake of piece.", "It's a slice of pie."],
      tags: ["idioms"],
    },
    {
      id: "break-the-ice", type: "phrase", pos: "phrase", target: "break the ice",
      gloss: { es: "romper el hielo", en: "to break the ice" },
      distractors: ["break the cold", "crack the ice", "broke the ice's"],
      tags: ["idioms"],
    },
    {
      id: "under-the-weather", type: "phrase", pos: "phrase", target: "feel under the weather",
      gloss: { es: "sentirse un poco mal, medio enfermo/a", en: "to feel under the weather" },
      distractors: ["feel over the weather", "feel under the rain", "feel below the climate"],
      tags: ["idioms", "health"],
    },
    {
      id: "cost-an-arm", type: "phrase", pos: "phrase", target: "cost an arm and a leg",
      gloss: { es: "costar un ojo de la cara", en: "to cost an arm and a leg" },
      distractors: ["cost an eye of the face", "cost a hand and a foot", "cost arm and leg"],
      errors: [{ text: "cost an eye of the face", feedback: { es: "En inglés no es el ojo: cost an arm and a leg." } }],
      tags: ["idioms", "money"],
    },
    {
      id: "once-in-a-blue-moon", type: "phrase", pos: "phrase", target: "once in a blue moon",
      gloss: { es: "muy de vez en cuando, casi nunca", en: "once in a blue moon" },
      distractors: ["once in a full moon", "one time in a blue moon", "once on a blue moon"],
      tags: ["idioms", "frequency"],
    },
    {
      id: "hit-the-road", type: "phrase", pos: "phrase", target: "hit the road",
      gloss: { es: "ponerse en camino, irse", en: "to hit the road" },
      distractors: ["hit the street", "beat the road", "hit the way"],
      tags: ["idioms", "travel"],
    },
    {
      id: "call-it-a-day", type: "phrase", pos: "phrase", target: "call it a day",
      gloss: { es: "dar por terminada la jornada", en: "to call it a day" },
      distractors: ["call it a night day", "call the day", "say it a day"],
      tags: ["idioms", "work"],
    },
    {
      id: "on-the-same-page", type: "phrase", pos: "phrase", target: "be on the same page",
      gloss: { es: "estar en la misma sintonía, de acuerdo", en: "to be on the same page" },
      distractors: ["be in the same page", "be on the same sheet", "be at the same page"],
      tags: ["idioms", "work"],
    },
    {
      id: "speaking-of-which", type: "phrase", pos: "phrase", target: "Speaking of which,",
      gloss: { es: "Hablando de eso,", en: "Speaking of which," },
      accept: [{ text: "Speaking of that," }, { text: "By the way," }],
      distractors: ["Speaking from which,", "Speaking about which,", "Saying of which,"],
      tags: ["small-talk", "chunk"],
    },
    {
      id: "how-have-you-been", type: "phrase", pos: "phrase", target: "How have you been?",
      gloss: { es: "¿Cómo has estado? / ¿Qué es de tu vida?", en: "How have you been?" },
      accept: [{ text: "How's it going?" }, { text: "What have you been up to?" }],
      distractors: ["How you have been?", "How are you been?", "How did you be?"],
      tags: ["small-talk", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "nice-day-isnt-it", type: "sentence", target: "It's a beautiful day, isn't it?",
      gloss: { es: "Qué lindo día, ¿no?", en: "It's a beautiful day, isn't it?" },
      accept: [{ text: "It is a beautiful day, isn't it?" }, { text: "Beautiful day, isn't it?" }],
      errors: [{ text: "It's a beautiful day, no?", feedback: { es: "El «¿no?» español se dice con una question tag: isn't it?" }, ruleId: "en-g-question-tags" }],
      distractors: ["is", "no", "it's"],
      grammar: ["en-g-question-tags"],
      tags: ["small-talk", "question-tags"],
    },
    {
      id: "you-work-with-emma", type: "sentence", target: "You work with Emma, don't you?",
      gloss: { es: "Trabajas con Emma, ¿verdad?", en: "You work with Emma, don't you?" },
      errors: [{ text: "You work with Emma, isn't it?", feedback: { es: "La tag repite el auxiliar del verbo: work → don't you?" }, ruleId: "en-g-question-tags" }],
      distractors: ["isn't", "aren't", "do"],
      grammar: ["en-g-question-tags"],
      tags: ["small-talk", "question-tags"],
    },
    {
      id: "you-havent-met", type: "sentence", target: "You haven't met my husband, have you?",
      gloss: { es: "No conoces a mi esposo, ¿no?", en: "You haven't met my husband, have you?" },
      errors: [{ text: "You haven't met my husband, haven't you?", feedback: { es: "Si la frase es negativa, la tag es afirmativa: have you?" }, ruleId: "en-g-question-tags" }],
      distractors: ["haven't", "did", "do"],
      grammar: ["en-g-question-tags"],
      tags: ["small-talk", "question-tags"],
    },
    {
      id: "it-was-such-a-good", type: "sentence", target: "It was such a good party!",
      gloss: { es: "¡Qué buena fiesta fue!", en: "It was such a good party!" },
      errors: [{ text: "It was so a good party!", feedback: { es: "Con sustantivo: such a + adjetivo + sustantivo." }, ruleId: "en-g-so-such" }],
      distractors: ["so", "too", "much"],
      grammar: ["en-g-so-such"],
      tags: ["small-talk", "emphasis"],
    },
    {
      id: "the-traffic-was-so-bad", type: "sentence", target: "The traffic was so bad that I almost missed the meeting.",
      gloss: { es: "Había tanto tráfico que casi me pierdo la reunión.", en: "The traffic was so bad that I almost missed the meeting." },
      accept: [{ text: "The traffic was so bad I almost missed the meeting." }],
      errors: [{ text: "The traffic was such bad that I almost missed the meeting.", feedback: { es: "Con un adjetivo solo: so + adjetivo." }, ruleId: "en-g-so-such" }],
      distractors: ["such", "lost", "too"],
      grammar: ["en-g-so-such"],
      tags: ["small-talk", "emphasis"],
    },
    {
      id: "its-been-ages", type: "sentence", target: "It's been ages since we last saw each other!",
      gloss: { es: "¡Hace siglos que no nos vemos!", en: "It's been ages since we last saw each other!" },
      accept: [{ text: "It's been ages!" }, { text: "Long time no see!" }],
      distractors: ["makes", "ago", "us"],
      tags: ["small-talk", "chunk"],
    },
    {
      id: "im-feeling-under", type: "sentence", target: "I'm feeling a bit under the weather today.",
      gloss: { es: "Hoy me siento un poco mal.", en: "I'm feeling a bit under the weather today." },
      accept: [{ text: "I feel a bit under the weather today." }, { text: "I'm feeling a little under the weather today." }],
      distractors: ["over", "climate", "few"],
      tags: ["idioms", "health"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-question-tags", type: "pattern", target: "It's cold, isn't it? · You don't smoke, do you?",
      gloss: { es: "las question tags (¿no?, ¿verdad?)", en: "question tags" },
      pattern: {
        rule: {
          es: "El «¿no?» o «¿verdad?» del final se forma repitiendo el auxiliar de la frase (be, do, have, can, will…) + pronombre. Si la frase es afirmativa, la tag es negativa, y al revés. Si no hay auxiliar, se usa do / does / did.",
          en: "Repeat the sentence's auxiliary (be, do, have, can, will…) + pronoun. A positive sentence takes a negative tag, and vice versa. If there's no auxiliary, use do / does / did.",
        },
        table: [["frase", "tag"], ["She's French,", "isn't she?"], ["You can swim,", "can't you?"], ["They live here,", "don't they?"], ["He didn't call,", "did he?"]],
      },
      question: {
        prompt: { es: "Completa: «You'll be at the meeting, ___?»", en: "Complete: 'You'll be at the meeting, ___?'" },
        options: ["won't you", "will you", "aren't you", "don't you"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-question-tags"], tags: ["grammar", "question-tags"],
    },
    {
      id: "pat-so-such", type: "pattern", target: "so + adjetivo · such a + adjetivo + sustantivo",
      gloss: { es: "so y such (tan, tanto)", en: "so and such" },
      pattern: {
        rule: {
          es: "Para enfatizar: «so» + adjetivo o adverbio (so tired, so fast) y «such (a)» + adjetivo + sustantivo (such a long day, such nice people). Las dos pueden seguir con «that» + consecuencia.",
          en: "For emphasis: 'so' + adjective or adverb (so tired, so fast) and 'such (a)' + adjective + noun (such a long day, such nice people). Both can continue with 'that' + result.",
        },
        table: [["so", "such"], ["It was so cold.", "It was such a cold night."], ["They're so nice.", "They're such nice people."]],
      },
      question: {
        prompt: { es: "Completa: «She's ___ talented singer!»", en: "Complete: 'She's ___ talented singer!'" },
        options: ["such a", "so", "so a", "such"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-so-such"], tags: ["grammar", "emphasis"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-small-talk", type: "dialogue", target: "Long time no see!",
      gloss: { es: "¡Tanto tiempo!", en: "Long time no see!" },
      turns: [
        { who: "A", target: "Hey, Lisa! Long time no see! How have you been?", gloss: { es: "¡Hola, Lisa! ¡Tanto tiempo! ¿Cómo has estado?", en: "Hey, Lisa! Long time no see! How have you been?" } },
        { who: "B", target: "Pretty good, thanks! Busy with work, you know. You moved to Austin, didn't you?", gloss: { es: "¡Bastante bien, gracias! Con mucho trabajo, ya sabes. Te mudaste a Austin, ¿no?", en: "Pretty good, thanks! Busy with work, you know. You moved to Austin, didn't you?" } },
        { who: "A", target: "Yes, last spring. It's such a fun city, but rents cost an arm and a leg.", gloss: { es: "Sí, la primavera pasada. Es una ciudad muy divertida, pero los alquileres cuestan un ojo de la cara.", en: "Yes, last spring. It's such a fun city, but rents cost an arm and a leg." } },
        { who: "B", target: "Speaking of which, are you still looking for a roommate?", gloss: { es: "Hablando de eso, ¿todavía buscas compañero de departamento?", en: "Speaking of which, are you still looking for a roommate?" } },
      ],
      question: {
        prompt: { es: "¿Qué dice A de Austin?", en: "What does A say about Austin?" },
        options: [
          { es: "Que es divertida pero muy cara", en: "It's fun but very expensive" },
          { es: "Que es aburrida y barata", en: "It's boring and cheap" },
          { es: "Que no le gusta", en: "A doesn't like it" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "small-talk", "idioms"],
    },
    {
      id: "lis-office", type: "listening", target: "Okay, everyone, it's six o'clock. Let's call it a day. We're all on the same page about the launch, aren't we? Great. See you Monday!",
      gloss: { es: "Bueno, chicos, son las seis. Terminemos por hoy. Estamos todos de acuerdo con el lanzamiento, ¿no? Perfecto. ¡Nos vemos el lunes!", en: "Okay, everyone, it's six o'clock. Let's call it a day. We're all on the same page about the launch, aren't we? Great. See you Monday!" },
      question: {
        prompt: { es: "¿Qué propone quien habla?", en: "What does the speaker suggest?" },
        options: [
          { es: "Terminar la jornada", en: "Finishing work for the day" },
          { es: "Empezar una reunión larga", en: "Starting a long meeting" },
          { es: "Trabajar el fin de semana", en: "Working on the weekend" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "idioms", "work"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-sympathetic", type: "bridge", onlyFor: "es", target: "nice",
      gloss: { es: "simpático/a, amable", en: "nice (pleasant)" },
      question: {
        prompt: { es: "«She was very sympathetic» significa que fue…", en: "'She was very sympathetic' means she was…" },
        options: [
          { es: "comprensiva (mostró empatía)", en: "understanding and caring" },
          { es: "muy simpática y divertida", en: "fun and pleasant" },
          { es: "antipática", en: "unfriendly" },
        ],
        answer: 0,
      },
      note: { es: "sympathetic = comprensivo/a, que muestra empatía; «simpático/a» es «nice» o «friendly»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "small-talk"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "catch-up", type: "word", pos: "verb", target: "catch up",
      gloss: { es: "ponerse al día (con alguien)", en: "to catch up" },
      distractors: ["catch on", "cut up", "ketchup"],
      note: { es: "«Let's catch up soon!» = ¡Juntémonos pronto a ponernos al día!" },
      tags: ["small-talk", "phrasal-verbs"],
    },
    {
      id: "by-the-way", type: "phrase", pos: "phrase", target: "by the way",
      gloss: { es: "por cierto", en: "by the way" },
      accept: [{ text: "btw" }],
      distractors: ["by the road", "on the way", "in the way"],
      tags: ["small-talk", "chunk"],
    },
    {
      id: "chat", type: "word", pos: "verb", target: "chat",
      gloss: { es: "charlar, conversar", en: "to chat" },
      distractors: ["cheat", "chart", "chap"],
      tags: ["small-talk"],
    },
  ]),
};
