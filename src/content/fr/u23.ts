import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u23",
  lang: "fr",
  index: 23,
  cefr: "B2",
  title: { target: "Débattre", es: "Debatir", en: "Debating" },
  canDo: [
    { es: "Puedo defender una postura con argumentos y matices.", en: "I can argue a point of view with reasons and nuance." },
    { es: "Puedo contar lo que dijo otra persona.", en: "I can report what someone else said." },
    { es: "Sé usar el estilo indirecto y el subjuntivo tras bien que, pour que, avant que.", en: "I can use reported speech and the subjunctive after bien que, pour que, avant que." },
  ],
  icon: "⚖️",
  items: build("fr", 23, "B2", [
    { id: "argument", type: "word", pos: "noun", target: "l'argument", gender: "m", plural: "les arguments", gloss: { es: "el argumento", en: "the argument (reason)" }, distractors: ["la argument", "l'argent", "l'augment"], note: { es: "Una discusión (pelea) es «une dispute».", en: "A quarrel is 'une dispute', not 'un argument'." }, tags: ["debate"] },
    { id: "en-revanche", type: "phrase", pos: "phrase", target: "en revanche", gloss: { es: "en cambio", en: "on the other hand" }, accept: [{ text: "par contre" }], distractors: ["en revenge", "à revanche", "en retour"], tags: ["connectors", "debate"] },
    { id: "dailleurs", type: "word", pos: "adv", target: "d'ailleurs", gloss: { es: "por cierto, además", en: "besides / by the way" }, distractors: ["ailleurs", "d'accord", "de plus en plus"], note: { es: "Ojo: ailleurs (sin d') = en otra parte.", en: "Careful: ailleurs (without d') = elsewhere." }, tags: ["connectors", "debate"] },
    { id: "neanmoins", type: "word", pos: "adv", target: "néanmoins", gloss: { es: "no obstante", en: "nevertheless" }, distractors: ["néant", "moins", "néanmois"], tags: ["connectors", "debate"] },
    { id: "affirmer", type: "word", pos: "verb", target: "affirmer", gloss: { es: "afirmar, asegurar", en: "to claim / state" }, distractors: ["affiner", "afficher", "confirmer"], tags: ["debate"] },
    { id: "nier", type: "word", pos: "verb", target: "nier", gloss: { es: "negar", en: "to deny" }, distractors: ["noyer", "nouer", "niveler"], tags: ["debate"] },
    { id: "convaincre", type: "word", pos: "verb", target: "convaincre", gloss: { es: "convencer", en: "to convince" }, forms: { pp: "convaincu" }, distractors: ["vaincre", "contraindre", "convenir"], tags: ["debate"] },
    { id: "point-de-vue", type: "phrase", pos: "phrase", target: "le point de vue", gloss: { es: "el punto de vista", en: "the point of view" }, distractors: ["le point de vu", "le point de voir", "la vue du point"], tags: ["debate", "opinion"] },
    { id: "il-est-vrai-que", type: "phrase", pos: "phrase", target: "Il est vrai que…", gloss: { es: "Es cierto que…", en: "It's true that…" }, distractors: ["C'est vrai de…", "Il est vrai de…", "Il est vraiment que…"], tags: ["debate", "chunk"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "il-a-dit-que", type: "sentence", target: "Il a dit qu'il viendrait demain.",
      gloss: { es: "Dijo que vendría mañana.", en: "He said he would come tomorrow." },
      errors: [{ text: "Il a dit qu'il viendra demain.", feedback: { es: "Con verbo introductor en pasado, el futuro pasa a condicional: qu'il viendrait.", en: "After a past reporting verb, the future becomes the conditional: qu'il viendrait." }, ruleId: "fr-g-discours-indirect" }],
      distractors: ["viendra", "venait", "que"],
      tags: ["reported-speech"],
    },
    {
      id: "elle-ma-demande-si", type: "sentence", target: "Elle m'a demandé si j'étais d'accord.",
      gloss: { es: "Me preguntó si estaba de acuerdo.", en: "She asked me if I agreed." },
      errors: [{ text: "Elle m'a demandé que j'étais d'accord.", feedback: { es: "Una pregunta de sí o no pasa a estilo indirecto con «si».", en: "A yes/no question is reported with 'si'." }, ruleId: "fr-g-discours-indirect" }],
      distractors: ["que", "suis", "est-ce que"],
      tags: ["reported-speech"],
    },
    {
      id: "il-ma-demande-ce-que", type: "sentence", target: "Il m'a demandé ce que je voulais.",
      gloss: { es: "Me preguntó qué quería.", en: "He asked me what I wanted." },
      errors: [{ text: "Il m'a demandé qu'est-ce que je voulais.", feedback: { es: "En estilo indirecto, «qu'est-ce que» pasa a «ce que».", en: "In reported speech, 'qu'est-ce que' becomes 'ce que'." }, ruleId: "fr-g-discours-indirect" }],
      distractors: ["qu'est-ce", "quoi", "veux"],
      tags: ["reported-speech"],
    },
    {
      id: "pour-que-tout-le-monde", type: "sentence", target: "Je parle lentement pour que tout le monde comprenne.",
      gloss: { es: "Hablo despacio para que todos entiendan.", en: "I speak slowly so that everyone understands." },
      errors: [{ text: "Je parle lentement pour que tout le monde comprend.", feedback: { es: "pour que siempre va con subjuntivo: comprenne.", en: "pour que always takes the subjunctive: comprenne." }, ruleId: "fr-g-subj-conjonctions" }],
      distractors: ["comprend", "parce que", "comprendre"],
      tags: ["subjonctif", "connectors"],
    },
    {
      id: "avant-que-tu-partes", type: "sentence", target: "Appelle-moi avant que tu partes.", register: "informal",
      gloss: { es: "Llámame antes de irte.", en: "Call me before you leave." },
      accept: [{ text: "Appelle-moi avant de partir." }],
      errors: [{ text: "Appelle-moi avant que tu pars.", feedback: { es: "avant que + subjuntivo: avant que tu partes.", en: "avant que + subjunctive: avant que tu partes." }, ruleId: "fr-g-subj-conjonctions" }],
      distractors: ["pars", "après", "moi-même"],
      tags: ["subjonctif"],
    },
    {
      id: "a-condition-que", type: "sentence", target: "J'accepte, à condition que ce soit clair.",
      gloss: { es: "Acepto, siempre y cuando quede claro.", en: "I accept, provided it's clear." },
      distractors: ["est", "si", "sera"],
      tags: ["subjonctif", "debate"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-discours-indirect", type: "pattern", target: "« Je viendrai. » → Il a dit qu'il viendrait.",
      gloss: { es: "el estilo indirecto en pasado", en: "reported speech in the past" },
      pattern: {
        rule: {
          es: "Con un verbo introductor en pasado (il a dit que…), los tiempos retroceden: presente → imparfait, passé composé → plus-que-parfait, futuro → condicional. Las preguntas: oui/non → si; qu'est-ce que → ce que; qu'est-ce qui → ce qui.",
          en: "After a past reporting verb (il a dit que…), tenses shift back: present → imparfait, passé composé → plus-que-parfait, future → conditional. Questions: yes/no → si; qu'est-ce que → ce que; qu'est-ce qui → ce qui.",
        },
        table: [["« Je suis fatigué. »", "Il a dit qu'il était fatigué."], ["« J'ai fini. »", "Il a dit qu'il avait fini."], ["« Je partirai. »", "Il a dit qu'il partirait."], ["« Tu viens ? »", "Il m'a demandé si je venais."]],
      },
      question: {
        prompt: { es: "«Nous avons gagné !» → Ils ont dit qu'ils ___ .", en: "'Nous avons gagné !' → Ils ont dit qu'ils ___ ." },
        options: ["avaient gagné", "ont gagné", "gagneraient", "gagnent"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-discours-indirect"], tags: ["grammar", "reported-speech"],
    },
    {
      id: "tab-discours-indirect", type: "paradigm", target: "discours indirect — concordance", spoken: "discours indirect",
      gloss: { es: "el estilo indirecto: cambio de tiempos", en: "reported speech: tense changes" },
      grammar: ["fr-g-discours-indirect"],
      paradigm: {
        caption: { es: "«Elle a dit qu'elle ___.» Escribe el verbo", en: "'Elle a dit qu'elle ___.' Write the verb" },
        cells: [
          { label: "« Je suis malade. »", answer: "était malade", ruleId: "fr-g-discours-indirect" },
          { label: "« Je travaille. »", answer: "travaillait", ruleId: "fr-g-discours-indirect" },
          { label: "« J'ai oublié. »", answer: "avait oublié", ruleId: "fr-g-discours-indirect" },
          { label: "« Je viendrai. »", answer: "viendrait", ruleId: "fr-g-discours-indirect" },
          { label: "« Je vais partir. »", answer: "allait partir", ruleId: "fr-g-discours-indirect" },
        ],
      },
      tags: ["grammar", "reported-speech", "table"],
    },
    {
      id: "pat-subj-conjonctions", type: "pattern", target: "bien que · pour que · avant que · à condition que · sans que",
      gloss: { es: "conjunciones + subjuntivo", en: "conjunctions + subjunctive" },
      pattern: {
        rule: {
          es: "Estas conjunciones siempre van con subjuntivo: bien que (aunque), pour que (para que), avant que (antes de que), à condition que (siempre que), sans que (sin que), jusqu'à ce que (hasta que). Ojo: après que va con indicativo.",
          en: "These conjunctions always take the subjunctive: bien que (although), pour que (so that), avant que (before), à condition que (provided that), sans que (without), jusqu'à ce que (until). Careful: après que takes the indicative.",
        },
        table: [["bien que", "bien qu'il pleuve"], ["pour que", "pour que tu saches"], ["avant que", "avant qu'il parte"], ["après que", "après qu'il est parti"]],
      },
      question: {
        prompt: { es: "Completa: «Bien qu'elle ___ fatiguée, elle continue.» (être)", en: "Complete: 'Bien qu'elle ___ fatiguée, elle continue.' (être)" },
        options: ["soit", "est", "sera", "était"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-subj-conjonctions"], tags: ["grammar", "subjonctif"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-debat", type: "listening",
      target: "Certains affirment que la semaine de quatre jours améliorerait la productivité. Il est vrai que les salariés seraient moins fatigués. En revanche, bien que l'idée soit séduisante, beaucoup d'entreprises craignent une hausse des coûts.",
      gloss: {
        es: "Algunos afirman que la semana de cuatro días mejoraría la productividad. Es cierto que los empleados estarían menos cansados. En cambio, aunque la idea es atractiva, muchas empresas temen que suban los costos.",
        en: "Some claim that a four-day week would improve productivity. It's true that employees would be less tired. On the other hand, although the idea is appealing, many companies fear higher costs.",
      },
      question: {
        prompt: { es: "¿Qué temen muchas empresas?", en: "What do many companies fear?" },
        options: [
          { es: "Que suban los costos", en: "Higher costs" },
          { es: "Que los empleados estén cansados", en: "Tired employees" },
          { es: "Perder clientes", en: "Losing customers" },
          { es: "Que baje la productividad", en: "Lower productivity" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "debate", "work"],
    },
    {
      id: "dlg-debat-voiture", type: "dialogue", target: "Je ne suis pas tout à fait d'accord.", register: "formal",
      gloss: { es: "No estoy del todo de acuerdo.", en: "I don't entirely agree." },
      turns: [
        { who: "A", target: "Le maire a dit qu'il interdirait les voitures en centre-ville l'an prochain.", gloss: { es: "El alcalde dijo que prohibiría los coches en el centro el año que viene.", en: "The mayor said he would ban cars from the town centre next year." } },
        { who: "B", target: "Je ne suis pas tout à fait d'accord avec cette mesure. Les personnes âgées en ont besoin.", gloss: { es: "No estoy del todo de acuerdo con esa medida. Las personas mayores los necesitan.", en: "I don't entirely agree with that measure. Older people need them." } },
        { who: "A", target: "C'est vrai. Néanmoins, la pollution est un vrai problème.", gloss: { es: "Es cierto. No obstante, la contaminación es un problema real.", en: "True. Nevertheless, pollution is a real problem." } },
        { who: "B", target: "D'accord, à condition qu'on prévoie des navettes gratuites.", gloss: { es: "De acuerdo, siempre que haya transportes gratuitos.", en: "Fine, provided free shuttles are laid on." } },
      ],
      question: {
        prompt: { es: "¿Con qué condición acepta B la medida?", en: "On what condition does B accept the measure?" },
        options: [
          { es: "Que haya transportes gratuitos", en: "Free shuttles" },
          { es: "Que se aplique dentro de diez años", en: "That it starts in ten years" },
          { es: "Que solo sea los domingos", en: "That it's only on Sundays" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "debate"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-discussion", type: "bridge", onlyFor: "es", target: "la dispute",
      gloss: { es: "la pelea, la discusión fuerte", en: "the quarrel" },
      question: {
        prompt: { es: "«Ils ont eu une dispute» significa…", en: "'Ils ont eu une dispute' means…" },
        options: [
          { es: "Se pelearon", en: "They had a quarrel" },
          { es: "Disputaron un partido", en: "They played a match" },
          { es: "Tuvieron un debate tranquilo", en: "They had a calm debate" },
        ],
        answer: 0,
      },
      note: { es: "une dispute = una pelea; une discussion = una conversación o un debate, no necesariamente una pelea." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-bien-que", type: "bridge", onlyFor: "es", target: "bien qu'il pleuve",
      gloss: { es: "aunque llueva / aunque está lloviendo", en: "although it's raining" },
      distractors: ["bien qu'il pleut", "bien que il pleuve", "même qu'il pleuve"],
      note: { es: "«aunque» va con indicativo o subjuntivo en español; «bien que» exige siempre subjuntivo." },
      exercises: ["guess", "recall"], tags: ["bridge", "subjonctif"],
    },
  ]),
};
