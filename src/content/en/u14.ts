import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u14",
  lang: "en",
  index: 14,
  cefr: "B1",
  title: { target: "At work", es: "En el trabajo", en: "At work" },
  canDo: [
    { es: "Puedo describir mi trabajo, mis tareas y mi experiencia.", en: "I can describe my job, my tasks and my experience." },
    { es: "Puedo escribir un correo de trabajo sencillo y hablar por teléfono con un colega.", en: "I can write a simple work email and talk to a colleague on the phone." },
    { es: "Sé usar el present perfect con ever, never, already, yet, for y since.", en: "I can use the present perfect with ever, never, already, yet, for and since." },
  ],
  icon: "💼",
  items: build("en", 14, "B1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "coworker", type: "word", target: "coworker", plural: "coworkers",
      gloss: { es: "compañero/a de trabajo", en: "coworker" },
      accept: [{ text: "colleague" }, { text: "co-worker" }],
      distractors: ["coworking", "partner", "workmate's"],
      tags: ["work"],
    },
    {
      id: "boss", type: "word", target: "boss", plural: "bosses",
      gloss: { es: "jefe/a", en: "boss" },
      accept: [{ text: "manager" }],
      distractors: ["bass", "chief", "bus"],
      tags: ["work"],
    },
    {
      id: "meeting", type: "word", target: "meeting", plural: "meetings",
      gloss: { es: "reunión", en: "meeting" },
      distractors: ["reunion", "meting", "metting"],
      note: { es: "«reunion» es un reencuentro (de exalumnos, de familia); una reunión de trabajo es «a meeting»." },
      tags: ["work", "false-friend"],
    },
    {
      id: "deadline", type: "word", target: "deadline", plural: "deadlines",
      gloss: { es: "fecha límite, plazo de entrega", en: "deadline" },
      distractors: ["dead end", "headline", "timeline"],
      tags: ["work"],
    },
    {
      id: "salary", type: "word", target: "salary", plural: "salaries",
      gloss: { es: "sueldo, salario", en: "salary" },
      accept: [{ text: "pay" }],
      distractors: ["celery", "salad", "sale"],
      tags: ["work", "money"],
    },
    {
      id: "be-in-charge-of", type: "phrase", pos: "phrase", target: "be in charge of",
      gloss: { es: "estar a cargo de", en: "to be in charge of" },
      accept: [{ text: "be responsible for" }],
      distractors: ["be in charge for", "be on charge of", "be charged of"],
      tags: ["work", "chunk"],
    },
    {
      id: "full-time", type: "word", pos: "adj", target: "full-time",
      gloss: { es: "de tiempo completo", en: "full-time" },
      accept: [{ text: "full time" }],
      distractors: ["part-time", "all-time", "full-day"],
      tags: ["work"],
    },
    {
      id: "hire", type: "word", pos: "verb", target: "hire",
      gloss: { es: "contratar", en: "to hire" },
      forms: { past: "hired", pp: "hired" },
      distractors: ["fire", "higher", "here"],
      note: { es: "hire = contratar; fire = despedir: She was fired." },
      tags: ["work"],
    },
    {
      id: "follow-up", type: "word", pos: "verb", target: "follow up",
      gloss: { es: "dar seguimiento", en: "to follow up" },
      distractors: ["follow on", "fall up", "follow out"],
      note: { es: "«I'm following up on my email» = te escribo para dar seguimiento a mi correo." },
      tags: ["work", "email"],
    },
    {
      id: "already", type: "word", pos: "adv", target: "already",
      gloss: { es: "ya (antes de lo esperado)", en: "already" },
      distractors: ["all ready", "yet", "still"],
      tags: ["work", "present-perfect"],
    },
    {
      id: "yet", type: "word", pos: "adv", target: "yet",
      gloss: { es: "todavía (en negativas) / ya (en preguntas)", en: "yet" },
      distractors: ["jet", "still", "already"],
      note: { es: "Va al final: Have you finished yet? (¿ya terminaste?) / I haven't finished yet (todavía no terminé)." },
      tags: ["work", "present-perfect"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ive-worked-here-for", type: "sentence", target: "I've worked here for five years.",
      gloss: { es: "Trabajo aquí desde hace cinco años.", en: "I've worked here for five years." },
      accept: [{ text: "I have worked here for five years." }, { text: "I've been working here for five years." }],
      errors: [{ text: "I work here since five years.", feedback: { es: "Para algo que empezó y sigue: present perfect + for (duración)." }, ruleId: "en-g-for-since" }],
      distractors: ["since", "work", "during"],
      grammar: ["en-g-present-perfect", "en-g-for-since"],
      annot: { for: { es: "duración: «for» + período", en: "duration: for + period" } },
      tags: ["work", "present-perfect"],
    },
    {
      id: "shes-been-my-boss-since", type: "sentence", target: "She's been my boss since 2021.", spoken: "She's been my boss since twenty twenty-one.",
      gloss: { es: "Es mi jefa desde 2021.", en: "She's been my boss since 2021." },
      accept: [{ text: "She has been my boss since 2021." }],
      errors: [{ text: "She is my boss since 2021.", feedback: { es: "Con «since» y una situación que sigue: present perfect (has been)." }, ruleId: "en-g-for-since" }],
      distractors: ["for", "is", "from"],
      grammar: ["en-g-for-since"],
      tags: ["work", "present-perfect"],
    },
    {
      id: "have-you-ever-worked", type: "sentence", target: "Have you ever worked abroad?",
      gloss: { es: "¿Alguna vez trabajaste en el extranjero?", en: "Have you ever worked abroad?" },
      accept: [{ text: "Have you ever worked overseas?" }],
      errors: [{ text: "Did you ever work in abroad?", feedback: { es: "Para experiencias de toda la vida: Have you ever…? Y «abroad» va sin «in»." }, ruleId: "en-g-present-perfect" }],
      distractors: ["in", "Did", "never"],
      grammar: ["en-g-present-perfect"],
      tags: ["work", "experience"],
    },
    {
      id: "ive-never-been", type: "sentence", target: "I've never been to a job interview in English.",
      gloss: { es: "Nunca tuve una entrevista de trabajo en inglés.", en: "I've never been to a job interview in English." },
      accept: [{ text: "I have never been to a job interview in English." }, { text: "I've never had a job interview in English." }],
      distractors: ["ever", "went", "gone"],
      grammar: ["en-g-present-perfect"],
      tags: ["work", "experience"],
    },
    {
      id: "ive-already-sent", type: "sentence", target: "I've already sent the report.",
      gloss: { es: "Ya mandé el informe.", en: "I've already sent the report." },
      accept: [{ text: "I have already sent the report." }, { text: "I already sent the report." }],
      errors: [{ text: "I've already send the report.", feedback: { es: "Después de have: participio (sent)." }, ruleId: "en-g-present-perfect" }],
      distractors: ["send", "yet", "sended"],
      grammar: ["en-g-present-perfect"],
      note: { es: "En inglés americano también se oye «I already sent it» (pasado simple)." },
      tags: ["work", "email"],
    },
    {
      id: "havent-finished-yet", type: "sentence", target: "We haven't finished the project yet.",
      gloss: { es: "Todavía no terminamos el proyecto.", en: "We haven't finished the project yet." },
      accept: [{ text: "We have not finished the project yet." }, { text: "We still haven't finished the project." }],
      distractors: ["already", "didn't", "still"],
      grammar: ["en-g-present-perfect"],
      tags: ["work"],
    },
    {
      id: "im-in-charge-of-sales", type: "sentence", target: "I'm in charge of a team of six people.",
      gloss: { es: "Estoy a cargo de un equipo de seis personas.", en: "I'm in charge of a team of six people." },
      accept: [{ text: "I am in charge of a team of six people." }, { text: "I'm responsible for a team of six people." }],
      distractors: ["for", "persons", "on"],
      tags: ["work"],
    },
    {
      id: "please-find-attached", type: "sentence", target: "Please find the contract attached.",
      gloss: { es: "Te adjunto el contrato.", en: "Please find the contract attached." },
      accept: [{ text: "I've attached the contract." }, { text: "Attached is the contract." }, { text: "Please find attached the contract." }],
      distractors: ["adjunt", "attach", "joined"],
      note: { es: "Fórmula típica de correo formal; más simple: «I've attached the contract»." },
      tags: ["work", "email"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-present-perfect", type: "pattern", target: "I've worked · She's never been · Have you ever…?",
      gloss: { es: "el present perfect (have + participio)", en: "the present perfect" },
      pattern: {
        rule: {
          es: "have / has + participio (worked, been, seen) conecta el pasado con el presente: experiencias de vida (ever, never), cosas recientes con resultado ahora (already, yet) y situaciones que empezaron antes y siguen (for, since). Si dices cuándo pasó (yesterday, in 2019), usa el pasado simple.",
          en: "have / has + past participle links past and present: life experiences (ever, never), recent actions with a result now (already, yet), and situations that started before and continue (for, since). If you say when it happened (yesterday, in 2019), use the past simple.",
        },
        table: [["experiencia", "I've been to Canada."], ["reciente", "She's just left."], ["continúa", "We've lived here for years."], ["✗ con fecha", "I've seen him yesterday."]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["I saw that movie last week.", "I've seen that movie last week.", "I have saw that movie last week.", "I've see that movie last week."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-present-perfect"], tags: ["grammar", "present-perfect"],
    },
    {
      id: "pat-for-since", type: "pattern", target: "for three years · since 2020", spoken: "for three years, since twenty twenty",
      gloss: { es: "for (durante) y since (desde)", en: "for and since" },
      pattern: {
        rule: {
          es: "Lo que en español es «hace… que» o «desde hace…», en inglés va con present perfect: «for» + duración (for two weeks) y «since» + punto de inicio (since Monday, since 2020).",
          en: "For situations that started in the past and continue, use the present perfect: 'for' + a length of time (for two weeks) and 'since' + a starting point (since Monday, since 2020).",
        },
        table: [["for", "since"], ["for ten minutes", "since nine o'clock"], ["for two years", "since 2020"], ["for a long time", "since I was a kid"]],
      },
      question: {
        prompt: { es: "Completa: «They've been married ___ 2015.»", en: "Complete: 'They've been married ___ 2015.'" },
        options: ["since", "for", "from", "during"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-for-since"], tags: ["grammar", "present-perfect"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-deadline", type: "dialogue", target: "Have you finished the slides yet?",
      gloss: { es: "¿Ya terminaste las diapositivas?", en: "Have you finished the slides yet?" },
      turns: [
        { who: "A", target: "Hi, Sam. Have you finished the slides yet? The meeting is at three.", gloss: { es: "Hola, Sam. ¿Ya terminaste las diapositivas? La reunión es a las tres.", en: "Hi, Sam. Have you finished the slides yet? The meeting is at three." } },
        { who: "B", target: "Almost. I've already done the charts, but I haven't written the summary yet.", gloss: { es: "Casi. Ya hice los gráficos, pero todavía no escribí el resumen.", en: "Almost. I've already done the charts, but I haven't written the summary yet." } },
        { who: "A", target: "Okay. Can you send them to me by two?", gloss: { es: "Bueno. ¿Me las puedes mandar antes de las dos?", en: "Okay. Can you send them to me by two?" } },
        { who: "B", target: "Sure, no problem. I'll follow up as soon as they're ready.", gloss: { es: "Claro, sin problema. Te escribo en cuanto estén listas.", en: "Sure, no problem. I'll follow up as soon as they're ready." } },
      ],
      question: {
        prompt: { es: "¿Qué le falta hacer a Sam?", en: "What does Sam still have to do?" },
        options: [
          { es: "Escribir el resumen", en: "Write the summary" },
          { es: "Hacer los gráficos", en: "Make the charts" },
          { es: "Organizar la reunión", en: "Organize the meeting" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },
    {
      id: "lis-introduction", type: "listening", target: "Hi everyone, I'm Paula. I've just joined the marketing team. I've worked in advertising for eight years, and I've lived in Denver since March.",
      gloss: { es: "Hola a todos, soy Paula. Acabo de entrar al equipo de marketing. Trabajo en publicidad desde hace ocho años y vivo en Denver desde marzo.", en: "Hi everyone, I'm Paula. I've just joined the marketing team. I've worked in advertising for eight years, and I've lived in Denver since March." },
      question: {
        prompt: { es: "¿Cuánto tiempo lleva Paula en publicidad?", en: "How long has Paula worked in advertising?" },
        options: [
          { es: "Ocho años", en: "Eight years" },
          { es: "Desde marzo", en: "Since March" },
          { es: "Acaba de empezar", en: "She's just started" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work", "present-perfect"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-actually", type: "bridge", onlyFor: "es", target: "actually",
      gloss: { es: "en realidad, de hecho", en: "actually (in fact)" },
      question: {
        prompt: { es: "«Actually, I'm the manager» significa…", en: "'Actually, I'm the manager' means…" },
        options: [
          { es: "En realidad, yo soy el gerente.", en: "In fact, I'm the manager." },
          { es: "Actualmente soy el gerente.", en: "Currently I'm the manager." },
          { es: "Pronto seré el gerente.", en: "Soon I'll be the manager." },
        ],
        answer: 0,
      },
      note: { es: "actually = en realidad; «actualmente» se dice «currently» o «at the moment»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "day-off", type: "phrase", pos: "phrase", target: "a day off",
      gloss: { es: "un día libre", en: "a day off" },
      distractors: ["a free day off", "a day of", "an off day's"],
      note: { es: "«I'm taking Friday off» = me tomo el viernes libre." },
      tags: ["work", "chunk"],
    },
  ]),
};
