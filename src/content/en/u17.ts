import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u17",
  lang: "en",
  index: 17,
  cefr: "B1",
  title: { target: "If I were you…", es: "Yo que tú…", en: "If I were you…" },
  canDo: [
    { es: "Puedo hablar de consecuencias probables y de situaciones imaginarias.", en: "I can talk about likely results and imaginary situations." },
    { es: "Puedo dar consejos con «If I were you…».", en: "I can give advice with 'If I were you…'." },
    { es: "Sé usar el primer y el segundo condicional, y «unless».", en: "I can use the first and second conditionals, and 'unless'." },
  ],
  icon: "🤔",
  items: build("en", 17, "B1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "unless", type: "word", pos: "other", target: "unless",
      gloss: { es: "a menos que, salvo que", en: "unless" },
      distractors: ["until", "useless", "except"],
      note: { es: "«unless» = if… not: I won't go unless you come (no voy si tú no vienes)." },
      tags: ["conditionals"],
    },
    {
      id: "win-the-lottery", type: "phrase", pos: "phrase", target: "win the lottery",
      gloss: { es: "ganarse la lotería", en: "to win the lottery" },
      distractors: ["gain the lottery", "earn the lottery", "win a lottery's"],
      errors: [{ text: "gain the lottery", feedback: { es: "Premios y partidos se «win»; el dinero de un sueldo se «earn»." } }],
      tags: ["conditionals", "money"],
    },
    {
      id: "afford", type: "word", pos: "verb", target: "afford",
      gloss: { es: "poder pagar, permitirse (económicamente)", en: "to afford" },
      distractors: ["offer", "effort", "affect"],
      note: { es: "Casi siempre con can / can't: I can't afford a new car." },
      tags: ["money"],
    },
    {
      id: "save-money", type: "phrase", pos: "phrase", target: "save money",
      gloss: { es: "ahorrar dinero", en: "to save money" },
      distractors: ["safe money", "keep money", "spare money"],
      tags: ["money", "chunk"],
    },
    {
      id: "quit", type: "word", pos: "verb", target: "quit",
      gloss: { es: "renunciar, dejar (un trabajo, un hábito)", en: "to quit" },
      forms: { past: "quit", pp: "quit" },
      distractors: ["quite", "quiet", "quiz"],
      tags: ["work", "conditionals"],
    },
    {
      id: "move-abroad", type: "phrase", pos: "phrase", target: "move abroad",
      gloss: { es: "irse a vivir al extranjero", en: "to move abroad" },
      distractors: ["move to abroad", "change abroad", "move in abroad"],
      tags: ["travel", "chunk"],
    },
    {
      id: "in-case", type: "phrase", pos: "phrase", target: "just in case",
      gloss: { es: "por si acaso", en: "just in case" },
      distractors: ["just in cause", "for if case", "just in chance"],
      tags: ["conditionals", "chunk"],
    },
    {
      id: "as-soon-as", type: "phrase", pos: "phrase", target: "as soon as",
      gloss: { es: "en cuanto, apenas", en: "as soon as" },
      distractors: ["so soon as", "as soon like", "as fast as"],
      note: { es: "Con futuro se usa presente: I'll call you as soon as I arrive." },
      tags: ["conditionals", "linkers"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "if-it-rains", type: "sentence", target: "If it rains tomorrow, we'll stay home.",
      gloss: { es: "Si llueve mañana, nos quedamos en casa.", en: "If it rains tomorrow, we'll stay home." },
      accept: [{ text: "If it rains tomorrow, we will stay home." }, { text: "We'll stay home if it rains tomorrow." }],
      errors: [{ text: "If it will rain tomorrow, we'll stay home.", feedback: { es: "Después de «if» va presente, aunque hables del futuro: If it rains." }, ruleId: "en-g-first-conditional" }],
      distractors: ["will", "rain", "stayed"],
      grammar: ["en-g-first-conditional"],
      annot: { rains: { es: "presente después de «if»", en: "present after 'if'" } },
      tags: ["conditionals"],
    },
    {
      id: "if-you-dont-hurry", type: "sentence", target: "If you don't hurry, you'll miss the bus.",
      gloss: { es: "Si no te apuras, vas a perder el autobús.", en: "If you don't hurry, you'll miss the bus." },
      accept: [{ text: "If you do not hurry, you will miss the bus." }, { text: "Unless you hurry, you'll miss the bus." }],
      distractors: ["won't", "lose", "will"],
      grammar: ["en-g-first-conditional"],
      tags: ["conditionals"],
    },
    {
      id: "i-wont-go-unless", type: "sentence", target: "I won't go to the party unless you come with me.",
      gloss: { es: "No voy a ir a la fiesta a menos que vengas conmigo.", en: "I won't go to the party unless you come with me." },
      errors: [{ text: "I won't go to the party unless you don't come with me.", feedback: { es: "«unless» ya es negativo (= if not): unless you come." }, ruleId: "en-g-first-conditional" }],
      distractors: ["if", "will", "don't"],
      grammar: ["en-g-first-conditional"],
      tags: ["conditionals"],
    },
    {
      id: "if-i-had-more-time", type: "sentence", target: "If I had more time, I would learn to play the piano.",
      gloss: { es: "Si tuviera más tiempo, aprendería a tocar el piano.", en: "If I had more time, I would learn to play the piano." },
      accept: [{ text: "If I had more time, I'd learn to play the piano." }],
      errors: [{ text: "If I would have more time, I would learn to play the piano.", feedback: { es: "En la parte con «if» va pasado simple, no «would»: If I had." }, ruleId: "en-g-second-conditional" }],
      distractors: ["have", "will", "would have"],
      grammar: ["en-g-second-conditional"],
      tags: ["conditionals"],
    },
    {
      id: "if-i-were-you", type: "sentence", target: "If I were you, I'd talk to your boss.",
      gloss: { es: "Yo que tú, hablaría con tu jefe.", en: "If I were you, I'd talk to your boss." },
      accept: [{ text: "If I were you, I would talk to your boss." }, { text: "If I was you, I'd talk to your boss." }],
      errors: [{ text: "If I am you, I'll talk to your boss.", feedback: { es: "Para un consejo imaginario: If I were you, I'd…" }, ruleId: "en-g-second-conditional" }],
      distractors: ["am", "will", "with"],
      grammar: ["en-g-second-conditional"],
      note: { es: "En inglés formal se usa «were» con todas las personas; al hablar también se oye «If I was»." },
      tags: ["conditionals", "advice"],
    },
    {
      id: "what-would-you-do", type: "sentence", target: "What would you do if you won the lottery?",
      gloss: { es: "¿Qué harías si te ganaras la lotería?", en: "What would you do if you won the lottery?" },
      errors: [{ text: "What will you do if you win the lottery?", feedback: { es: "Es una situación imaginaria: would + pasado (if you won)." }, ruleId: "en-g-second-conditional" }],
      distractors: ["will", "win", "make"],
      grammar: ["en-g-second-conditional"],
      tags: ["conditionals", "questions", "money"],
    },
    {
      id: "we-couldnt-afford", type: "sentence", target: "We couldn't afford a house if we lived in the city.",
      gloss: { es: "No podríamos comprarnos una casa si viviéramos en la ciudad.", en: "We couldn't afford a house if we lived in the city." },
      accept: [{ text: "If we lived in the city, we couldn't afford a house." }, { text: "We wouldn't be able to afford a house if we lived in the city." }],
      distractors: ["live", "can't", "offer"],
      grammar: ["en-g-second-conditional"],
      tags: ["conditionals", "money", "home"],
    },
    {
      id: "ill-text-you", type: "sentence", target: "I'll text you as soon as I land.",
      gloss: { es: "Te escribo en cuanto aterrice.", en: "I'll text you as soon as I land." },
      accept: [{ text: "I will text you as soon as I land." }, { text: "I'll message you as soon as I land." }],
      errors: [{ text: "I'll text you as soon as I will land.", feedback: { es: "Después de «as soon as», «when» o «if» va presente: as soon as I land." }, ruleId: "en-g-first-conditional" }],
      distractors: ["will", "landed", "texting"],
      grammar: ["en-g-first-conditional"],
      tags: ["conditionals", "travel"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-first-conditional", type: "pattern", target: "If + presente, … will + verbo",
      gloss: { es: "el primer condicional (situaciones reales)", en: "the first conditional" },
      pattern: {
        rule: {
          es: "Para situaciones posibles o probables: «if» + presente, y en la otra parte «will» (o can, may, un imperativo). Igual que en español, después de «if» no va futuro.",
          en: "For possible or likely situations: 'if' + present, and 'will' (or can, may, an imperative) in the other clause. Never 'will' right after 'if'.",
        },
        table: [["condición", "resultado"], ["If you study,", "you'll pass."], ["If it's sunny,", "we can go to the beach."], ["Unless you hurry,", "we'll be late."]],
      },
      question: {
        prompt: { es: "Completa: «If she ___ the job, she'll move to Seattle.»", en: "Complete: 'If she ___ the job, she'll move to Seattle.'" },
        options: ["gets", "will get", "got", "would get"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-first-conditional"], tags: ["grammar", "conditionals"],
    },
    {
      id: "pat-second-conditional", type: "pattern", target: "If + pasado, … would + verbo",
      gloss: { es: "el segundo condicional (situaciones imaginarias)", en: "the second conditional" },
      pattern: {
        rule: {
          es: "Para situaciones imaginarias o poco probables en el presente o el futuro: «if» + pasado simple, y en la otra parte «would» (o could, might) + verbo. Equivale a «Si tuviera…, haría…».",
          en: "For imaginary or unlikely situations now or in the future: 'if' + past simple, and 'would' (or could, might) + verb in the other clause.",
        },
        table: [["condición (pasado)", "resultado (would)"], ["If I had a car,", "I'd drive to work."], ["If I were rich,", "I'd travel the world."], ["If she knew,", "she'd be angry."]],
      },
      question: {
        prompt: { es: "¿Cuál significa «Si viviera cerca del mar, iría a nadar todos los días»?", en: "Which means you'd swim every day if you lived by the sea (you don't)?" },
        options: ["If I lived by the sea, I'd swim every day.", "If I live by the sea, I'll swim every day.", "If I would live by the sea, I'd swim every day.", "If I lived by the sea, I'll swim every day."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-second-conditional"], tags: ["grammar", "conditionals"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-job-offer", type: "dialogue", target: "If I were you, I'd take it.",
      gloss: { es: "Yo que tú, lo aceptaría.", en: "If I were you, I'd take it." },
      turns: [
        { who: "A", target: "I got a job offer in Toronto, but I don't know what to do.", gloss: { es: "Me ofrecieron un trabajo en Toronto, pero no sé qué hacer.", en: "I got a job offer in Toronto, but I don't know what to do." } },
        { who: "B", target: "Wow! Is the salary good?", gloss: { es: "¡Guau! ¿El sueldo es bueno?", en: "Wow! Is the salary good?" } },
        { who: "A", target: "It's great. But if I moved, I'd miss my family.", gloss: { es: "Es muy bueno. Pero si me mudara, extrañaría a mi familia.", en: "It's great. But if I moved, I'd miss my family." } },
        { who: "B", target: "If I were you, I'd take it. If you don't like it, you can always come back.", gloss: { es: "Yo que tú, lo aceptaría. Si no te gusta, siempre puedes volver.", en: "If I were you, I'd take it. If you don't like it, you can always come back." } },
      ],
      question: {
        prompt: { es: "¿Qué le preocupa a A?", en: "What worries A?" },
        options: [
          { es: "Extrañaría a su familia", en: "Missing the family" },
          { es: "El sueldo es bajo", en: "The salary is low" },
          { es: "No habla inglés", en: "Not speaking English" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "conditionals", "work"],
    },
    {
      id: "lis-radio-ad", type: "listening", target: "If you sign up before Friday, you'll get two months free. And if you aren't happy, we'll give you your money back.",
      gloss: { es: "Si te inscribes antes del viernes, tienes dos meses gratis. Y si no quedas conforme, te devolvemos el dinero.", en: "If you sign up before Friday, you'll get two months free. And if you aren't happy, we'll give you your money back." },
      question: {
        prompt: { es: "¿Qué pasa si te inscribes antes del viernes?", en: "What happens if you sign up before Friday?" },
        options: [
          { es: "Recibes dos meses gratis", en: "You get two free months" },
          { es: "Te devuelven el dinero", en: "You get your money back" },
          { es: "Pagas el doble", en: "You pay double" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "conditionals"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-eventually", type: "bridge", onlyFor: "es", target: "eventually",
      gloss: { es: "al final, con el tiempo", en: "eventually (in the end)" },
      question: {
        prompt: { es: "«If you keep practicing, you'll eventually be fluent» significa que…", en: "'If you keep practicing, you'll eventually be fluent' means…" },
        options: [
          { es: "con el tiempo hablarás con fluidez", en: "you'll be fluent in the end" },
          { es: "quizás hables con fluidez", en: "you might be fluent" },
          { es: "a veces hablarás con fluidez", en: "you'll sometimes be fluent" },
        ],
        answer: 0,
      },
      note: { es: "eventually = al final, tarde o temprano; «eventualmente» (quizás, si se da el caso) es «possibly» o «if necessary»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "otherwise", type: "word", pos: "adv", target: "otherwise",
      gloss: { es: "si no, de lo contrario", en: "otherwise" },
      distractors: ["other way", "otherwhere", "others"],
      tags: ["conditionals", "linkers"],
    },
    {
      id: "imagine", type: "word", pos: "verb", target: "imagine",
      gloss: { es: "imaginar(se)", en: "to imagine" },
      distractors: ["image", "imagination", "magic"],
      tags: ["conditionals"],
    },
    {
      id: "rich", type: "word", pos: "adj", target: "rich",
      gloss: { es: "rico/a (con dinero)", en: "rich" },
      accept: [{ text: "wealthy" }],
      distractors: ["reach", "rice", "ridge"],
      note: { es: "Para la comida rica se dice «delicious» o «tasty»." },
      tags: ["money"],
    },
    {
      id: "dream-job", type: "phrase", pos: "phrase", target: "my dream job",
      gloss: { es: "el trabajo de mis sueños", en: "my dream job" },
      distractors: ["my job of dreams", "my dreamed job", "my dreaming job"],
      tags: ["work", "chunk"],
    },
  ]),
};
