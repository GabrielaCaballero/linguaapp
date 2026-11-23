import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u07",
  lang: "en",
  index: 7,
  cefr: "A1.2",
  title: { target: "My day", es: "Mi día", en: "My day" },
  canDo: [
    { es: "Puedo contar qué hago en un día normal y a qué hora.", en: "I can describe my daily routine and say what time I do things." },
    { es: "Puedo preguntar y decir la hora.", en: "I can ask and tell the time." },
    { es: "Sé usar el presente simple: la -s de he/she, y do/does para preguntar y negar.", en: "I can use the present simple: -s with he/she, and do/does in questions and negatives." },
  ],
  icon: "⏰",
  items: build("en", 7, "A1.2", [
    // ── Routine verbs ────────────────────────────────────────
    {
      id: "get-up", type: "word", pos: "verb", target: "get up",
      gloss: { es: "levantarse", en: "to get up" },
      forms: { he: "gets up", past: "got up" },
      distractors: ["wake up", "get on", "stand"],
      note: { es: "wake up = despertarse; get up = levantarse de la cama." },
      tags: ["routine"],
    },
    {
      id: "wake-up", type: "word", pos: "verb", target: "wake up",
      gloss: { es: "despertarse", en: "to wake up" },
      forms: { he: "wakes up", past: "woke up" },
      distractors: ["get up", "walk up", "make up"],
      tags: ["routine"],
    },
    {
      id: "take-a-shower", type: "phrase", pos: "phrase", target: "take a shower",
      gloss: { es: "bañarse, ducharse", en: "to take a shower" },
      accept: [{ text: "have a shower" }, { text: "shower" }],
      distractors: ["make a shower", "do a shower", "take a show"],
      tags: ["routine", "chunk"],
    },
    {
      id: "have-breakfast", type: "phrase", pos: "phrase", target: "have breakfast",
      gloss: { es: "desayunar", en: "to have breakfast" },
      accept: [{ text: "eat breakfast" }],
      distractors: ["take breakfast", "have a breakfast", "do breakfast"],
      note: { es: "Las comidas no llevan artículo: have breakfast, have lunch, have dinner." },
      tags: ["routine", "food", "chunk"],
    },
    {
      id: "go-to-work", type: "phrase", pos: "phrase", target: "go to work",
      gloss: { es: "ir al trabajo", en: "to go to work" },
      distractors: ["go to the work", "go at work", "go work"],
      errors: [{ text: "go to the work", feedback: { es: "Sin artículo: go to work, go to school, go to bed." } }],
      tags: ["routine", "work", "chunk"],
    },
    {
      id: "go-to-bed", type: "phrase", pos: "phrase", target: "go to bed",
      gloss: { es: "irse a dormir, acostarse", en: "to go to bed" },
      distractors: ["go to the bed", "go to sleep bed", "go in bed"],
      tags: ["routine", "chunk"],
    },
    {
      id: "work-from-home", type: "phrase", pos: "phrase", target: "work from home",
      gloss: { es: "trabajar desde casa", en: "to work from home" },
      distractors: ["work in home", "work at the home", "home work"],
      tags: ["routine", "work", "chunk"],
    },
    {
      id: "early", type: "word", pos: "adv", target: "early",
      gloss: { es: "temprano", en: "early" },
      distractors: ["late", "earlier", "easy"],
      tags: ["routine", "time"],
    },
    {
      id: "late", type: "word", pos: "adv", target: "late",
      gloss: { es: "tarde (no a tiempo)", en: "late" },
      distractors: ["later", "early", "lately"],
      note: { es: "«tarde» como parte del día es «afternoon»; «late» es «a una hora avanzada»." },
      tags: ["routine", "time"],
    },
    {
      id: "weekend", type: "word", target: "weekend", plural: "weekends",
      gloss: { es: "fin de semana", en: "weekend" },
      distractors: ["weekday", "week", "weakened"],
      note: { es: "En Estados Unidos se dice «on the weekend»; en Reino Unido, «at the weekend»." },
      tags: ["time"],
    },
    {
      id: "monday", type: "word", target: "Monday", plural: "Mondays",
      gloss: { es: "lunes", en: "Monday" },
      distractors: ["Sunday", "monday's", "Mondey"],
      note: { es: "Los días llevan mayúscula y van con «on»: on Monday." },
      tags: ["time", "days"],
    },

    // ── Time ─────────────────────────────────────────────────
    {
      id: "what-time-is-it", type: "phrase", pos: "phrase", target: "What time is it?",
      gloss: { es: "¿Qué hora es?", en: "What time is it?" },
      accept: [{ text: "Do you have the time?" }],
      distractors: ["What hour is it?", "How much time is it?", "What time it is?"],
      errors: [{ text: "What hour is it?", feedback: { es: "«hora» del reloj es «time»: What time is it?" } }],
      tags: ["time", "chunk"],
    },
    {
      id: "half-past-seven", type: "phrase", pos: "phrase", target: "It's seven thirty.",
      gloss: { es: "Son las siete y media.", en: "It's seven thirty." },
      accept: [{ text: "It's half past seven." }, { text: "It is seven thirty." }],
      distractors: ["It's seven and half.", "They are seven thirty.", "Is seven thirty."],
      errors: [{ text: "They are seven thirty.", feedback: { es: "La hora siempre va con «It's»: It's seven thirty." } }],
      tags: ["time"],
    },
    {
      id: "quarter-to-nine", type: "phrase", pos: "phrase", target: "It's a quarter to nine.",
      gloss: { es: "Son las nueve menos cuarto.", en: "It's a quarter to nine." },
      accept: [{ text: "It's quarter to nine." }, { text: "It's eight forty-five." }, { text: "It's a quarter of nine." }],
      distractors: ["It's nine less quarter.", "It's a quarter past nine.", "It's a quarter for nine."],
      tags: ["time"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-get-up-at-seven", type: "sentence", target: "I get up at seven on weekdays.",
      gloss: { es: "Entre semana me levanto a las siete.", en: "I get up at seven on weekdays." },
      accept: [{ text: "On weekdays I get up at seven." }, { text: "I get up at seven o'clock on weekdays." }],
      errors: [{ text: "I get up in seven on weekdays.", feedback: { es: "Con la hora se usa «at»: at seven." }, ruleId: "en-g-prep-time" }],
      distractors: ["in", "gets", "the"],
      grammar: ["en-g-present-simple", "en-g-prep-time"],
      tags: ["routine", "time"],
    },
    {
      id: "she-works-in-a-bank", type: "sentence", target: "She works in a bank and starts at nine.",
      gloss: { es: "Trabaja en un banco y entra a las nueve.", en: "She works in a bank and starts at nine." },
      errors: [{ text: "She work in a bank and start at nine.", feedback: { es: "Con he / she / it el verbo lleva -s: works, starts." }, ruleId: "en-g-present-simple" }],
      distractors: ["work", "start", "on"],
      grammar: ["en-g-present-simple"],
      annot: { works: { es: "-s porque el sujeto es «she»", en: "-s because the subject is 'she'" } },
      tags: ["routine", "work"],
    },
    {
      id: "he-watches-tv", type: "sentence", target: "He watches TV and goes to bed at eleven.", spoken: "He watches T V and goes to bed at eleven.",
      gloss: { es: "Ve la tele y se acuesta a las once.", en: "He watches TV and goes to bed at eleven." },
      errors: [{ text: "He watchs TV and gos to bed at eleven.", feedback: { es: "Después de -ch, -sh, -o se añade -es: watches, goes." }, ruleId: "en-g-present-simple" }],
      distractors: ["watchs", "go", "in"],
      grammar: ["en-g-present-simple"],
      tags: ["routine"],
    },
    {
      id: "i-dont-work-on-sundays", type: "sentence", target: "I don't work on Sundays.",
      gloss: { es: "Los domingos no trabajo.", en: "I don't work on Sundays." },
      accept: [{ text: "I do not work on Sundays." }],
      errors: [{ text: "I no work on Sundays.", feedback: { es: "Para negar un verbo se usa «don't»: I don't work." }, ruleId: "en-g-do-questions" }],
      distractors: ["no", "in", "doesn't"],
      grammar: ["en-g-do-questions", "en-g-prep-time"],
      tags: ["routine", "negation"],
    },
    {
      id: "does-he-cook", type: "sentence", target: "Does your husband cook? No, he doesn't.",
      gloss: { es: "¿Tu esposo cocina? No.", en: "Does your husband cook? No, he doesn't." },
      accept: [{ text: "Does your husband cook? No, he does not." }],
      errors: [
        { text: "Does your husband cooks? No, he doesn't.", feedback: { es: "Después de «does» el verbo va sin -s: Does he cook?" }, ruleId: "en-g-do-questions" },
        { text: "Your husband cooks? No, he doesn't.", feedback: { es: "Las preguntas del presente simple llevan «do/does» delante." }, ruleId: "en-g-do-questions" },
      ],
      distractors: ["cooks", "Do", "don't"],
      grammar: ["en-g-do-questions"],
      tags: ["routine", "questions"],
    },
    {
      id: "what-time-do-you-finish", type: "sentence", target: "What time do you finish work?",
      gloss: { es: "¿A qué hora sales del trabajo?", en: "What time do you finish work?" },
      accept: [{ text: "When do you finish work?" }, { text: "What time do you get off work?" }],
      errors: [{ text: "What time you finish work?", feedback: { es: "Falta «do»: What time do you finish…?" }, ruleId: "en-g-do-questions" }],
      distractors: ["does", "At", "finishes"],
      grammar: ["en-g-do-questions"],
      tags: ["routine", "questions", "time"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-present-simple", type: "pattern", target: "I work · she works",
      gloss: { es: "el presente simple (rutinas)", en: "the present simple" },
      pattern: {
        rule: {
          es: "Para rutinas y hechos se usa el presente simple. El verbo es igual para todos, salvo con he, she, it, que lleva -s (works), -es tras -ch, -sh, -o, -x (watches, goes) o -ies tras consonante + y (studies).",
          en: "Use the present simple for routines and facts. The verb is the same for everyone except he, she, it, which add -s (works), -es after -ch, -sh, -o, -x (watches, goes) or -ies after consonant + y (studies).",
        },
        table: [["I / you / we / they", "he / she / it"], ["work", "works"], ["watch", "watches"], ["study", "studies"], ["have", "has"]],
      },
      question: {
        prompt: { es: "Completa: «My brother ___ (study) at night.»", en: "Complete: 'My brother ___ (study) at night.'" },
        options: ["studies", "study", "studys", "is study"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-present-simple"], tags: ["grammar", "present"],
    },
    {
      id: "tab-work", type: "paradigm", target: "work — present simple", spoken: "work",
      gloss: { es: "work (trabajar) — presente simple", en: "work — present simple" },
      grammar: ["en-g-present-simple"],
      paradigm: {
        caption: { es: "Conjuga «work» en presente simple", en: "Conjugate 'work' in the present simple" },
        cells: [
          { label: "I", answer: "work", ruleId: "en-g-present-simple" },
          { label: "you", answer: "work", ruleId: "en-g-present-simple" },
          { label: "he / she / it", answer: "works", ruleId: "en-g-present-simple" },
          { label: "we", answer: "work", ruleId: "en-g-present-simple" },
          { label: "they", answer: "work", ruleId: "en-g-present-simple" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-do-does", type: "pattern", target: "Do you…? · Does she…? · I don't · he doesn't",
      gloss: { es: "preguntas y negaciones con do / does", en: "questions and negatives with do / does" },
      pattern: {
        rule: {
          es: "Para preguntar o negar en presente simple se usa un auxiliar: do (I, you, we, they) o does (he, she, it). La -s pasa al auxiliar y el verbo queda en su forma base: Does she work? She doesn't work.",
          en: "Questions and negatives in the present simple need an auxiliary: do (I, you, we, they) or does (he, she, it). The -s moves to the auxiliary and the main verb stays in its base form: Does she work? She doesn't work.",
        },
        table: [["", "?", "−"], ["I / you / we / they", "Do you work?", "I don't work."], ["he / she / it", "Does she work?", "She doesn't work."]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Where does she live?", "Where does she lives?", "Where she lives?", "Where do she live?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-do-questions"], tags: ["grammar", "questions", "negation"],
    },
    {
      id: "pat-at-on-in-time", type: "pattern", target: "at seven · on Monday · in July",
      gloss: { es: "at, on, in con el tiempo", en: "at, on, in with time" },
      pattern: {
        rule: {
          es: "at + hora (at seven, at night), on + día o fecha (on Monday, on May 5th), in + mes, año o parte del día (in July, in 2025, in the morning).",
          en: "at + clock time (at seven, at night), on + day or date (on Monday, on May 5th), in + month, year or part of the day (in July, in 2025, in the morning).",
        },
        table: [["at", "on", "in"], ["at seven", "on Monday", "in July"], ["at noon", "on the weekend", "in the morning"], ["at night", "on my birthday", "in 2025"]],
      },
      question: {
        prompt: { es: "Completa: «I have English class ___ Tuesday.»", en: "Complete: 'I have English class ___ Tuesday.'" },
        options: ["on", "in", "at", "the"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-prep-time"], tags: ["grammar", "prepositions", "time"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-routine", type: "dialogue", target: "I usually start at eight.",
      gloss: { es: "Normalmente entro a las ocho.", en: "I usually start at eight." },
      turns: [
        { who: "A", target: "What time do you start work?", gloss: { es: "¿A qué hora entras a trabajar?", en: "What time do you start work?" } },
        { who: "B", target: "I usually start at eight, but on Fridays I work from home.", gloss: { es: "Normalmente entro a las ocho, pero los viernes trabajo desde casa.", en: "I usually start at eight, but on Fridays I work from home." } },
        { who: "A", target: "Lucky you! Does your wife work from home too?", gloss: { es: "¡Qué suerte! ¿Tu esposa también trabaja desde casa?", en: "Lucky you! Does your wife work from home too?" } },
        { who: "B", target: "No, she doesn't. She's a nurse, so she works at night.", gloss: { es: "No. Es enfermera, así que trabaja de noche.", en: "No, she doesn't. She's a nurse, so she works at night." } },
      ],
      question: {
        prompt: { es: "¿Cuándo trabaja desde casa B?", en: "When does B work from home?" },
        options: [
          { es: "Los viernes", en: "On Fridays" },
          { es: "Todas las noches", en: "Every night" },
          { es: "Nunca", en: "Never" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "routine"],
    },
    {
      id: "lis-routine", type: "listening", target: "Ana wakes up at six thirty, has breakfast with her kids and takes the bus to work at seven fifteen.",
      gloss: { es: "Ana se despierta a las seis y media, desayuna con sus hijos y toma el autobús al trabajo a las siete y cuarto.", en: "Ana wakes up at six thirty, has breakfast with her kids and takes the bus to work at seven fifteen." },
      question: {
        prompt: { es: "¿A qué hora toma Ana el autobús?", en: "What time does Ana take the bus?" },
        options: [
          { es: "A las 7:15", en: "At 7:15" },
          { es: "A las 6:30", en: "At 6:30" },
          { es: "A las 7:50", en: "At 7:50" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "routine", "time"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-attend", type: "bridge", onlyFor: "es", target: "attend",
      gloss: { es: "asistir (a una clase, una reunión)", en: "attend (be present at)" },
      question: {
        prompt: { es: "«I attend a yoga class on Mondays» significa…", en: "'I attend a yoga class on Mondays' means…" },
        options: [
          { es: "Voy a una clase de yoga los lunes.", en: "I go to a yoga class on Mondays." },
          { es: "Atiendo una clase de yoga los lunes.", en: "I serve customers at a yoga class on Mondays." },
          { es: "Doy una clase de yoga los lunes.", en: "I teach a yoga class on Mondays." },
        ],
        answer: 0,
      },
      note: { es: "attend = asistir, ir a; «atender» a un cliente es «serve» o «help», y «assist» es «ayudar»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
