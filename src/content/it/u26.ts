import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u26",
  lang: "it",
  index: 26,
  cefr: "C1",
  title: { target: "Politica e attualità", es: "Política y actualidad", en: "Politics and current affairs" },
  canDo: [
    { es: "Puedo seguir noticias de política y contar lo que dicen.", en: "I can follow political news and sum up what it says." },
    { es: "Puedo dar mi opinión y transmitir la de otros con el congiuntivo en todos sus tiempos.", en: "I can give my opinion and report other people's using every subjunctive tense." },
    { es: "Sé usar la pasiva con andare y venire, y el «si» pasivo en tiempos compuestos.", en: "I can use the passive with andare and venire, and passive 'si' in compound tenses." },
  ],
  icon: "🏛️",
  items: build("it", 26, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "disegno-di-legge", type: "word", pos: "noun", target: "il disegno di legge", gender: "m", plural: "i disegni di legge",
      gloss: { es: "el proyecto de ley", en: "the (parliamentary) bill" },
      distractors: ["il disegno della legge", "la proposta di leggi", "il progetto della legge"],
      note: { es: "En la prensa se abrevia «ddl»: il ddl sulla scuola.", en: "The press shortens it to 'ddl': il ddl sulla scuola." },
      tags: ["politics"],
    },
    {
      id: "maggioranza", type: "word", pos: "noun", target: "la maggioranza", gender: "f", plural: "le maggioranze",
      gloss: { es: "la mayoría (parlamentaria)", en: "the (parliamentary) majority" },
      distractors: ["la maggiore", "la maggioria", "la minoranza"],
      tags: ["politics"],
    },
    {
      id: "opposizione", type: "word", pos: "noun", target: "l'opposizione", gender: "f", plural: "le opposizioni",
      gloss: { es: "la oposición (política)", en: "the (political) opposition" },
      distractors: ["l'opposto", "la posizione", "l'imposizione"],
      tags: ["politics"],
    },
    {
      id: "sondaggio", type: "word", pos: "noun", target: "il sondaggio", gender: "m", plural: "i sondaggi",
      gloss: { es: "la encuesta (de opinión), el sondeo", en: "the (opinion) poll" },
      distractors: ["il saggio", "il sondino", "il passaggio"],
      tags: ["politics", "news"],
    },
    {
      id: "rimpasto", type: "word", pos: "noun", target: "il rimpasto", gender: "m", plural: "i rimpasti",
      gloss: { es: "la remodelación del gabinete", en: "the (cabinet) reshuffle" },
      distractors: ["il rimpianto", "il ripasso", "il rimborso"],
      note: { es: "Viene de «rimpastare»: volver a amasar.", en: "From 'rimpastare': to knead again." },
      tags: ["politics"],
    },
    {
      id: "ballottaggio", type: "word", pos: "noun", target: "il ballottaggio", gender: "m", plural: "i ballottaggi",
      gloss: { es: "la segunda vuelta (electoral)", en: "the run-off (election)" },
      distractors: ["il balletto", "il ballo", "il bottino"],
      tags: ["politics", "elections"],
    },
    {
      id: "astensione", type: "word", pos: "noun", target: "l'astensione", gender: "f", plural: "le astensioni",
      gloss: { es: "la abstención (electoral)", en: "abstention (from voting)" },
      distractors: ["l'attenzione", "l'estensione", "l'astinenza"],
      tags: ["politics", "elections"],
    },
    {
      id: "voto-di-fiducia", type: "word", pos: "noun", target: "il voto di fiducia", gender: "m", plural: "i voti di fiducia",
      gloss: { es: "la moción (o el voto) de confianza", en: "the confidence vote" },
      distractors: ["il voto della fiducia", "la fiducia di voto", "il voto di sfiducia"],
      note: { es: "Lo contrario es «la mozione di sfiducia» (moción de censura).", en: "The opposite is 'la mozione di sfiducia' (no-confidence motion)." },
      tags: ["politics"],
    },
    {
      id: "dimettersi", type: "word", pos: "verb", target: "dimettersi",
      gloss: { es: "renunciar (a un cargo), dimitir", en: "to resign (from a post)" },
      forms: { io: "mi dimetto", lui: "si dimette", pp: "si è dimesso/a" },
      distractors: ["dimenticarsi", "smettersi", "dimostrarsi"],
      tags: ["politics"],
    },
    {
      id: "portavoce", type: "word", pos: "noun", target: "il portavoce", gender: "m", plural: "i portavoce",
      gloss: { es: "el portavoz (de un gobierno o un partido)", en: "the spokesperson" },
      distractors: ["il portavoci", "il portalettere", "il portaborse"],
      note: { es: "Invariable en plural: i portavoce. Para una mujer: la portavoce.", en: "Invariable in the plural: i portavoce. For a woman: la portavoce." },
      tags: ["politics", "news"],
    },
    {
      id: "trasversale", type: "word", pos: "adj", target: "trasversale",
      gloss: { es: "transversal (que une a partidos distintos)", en: "cross-party" },
      distractors: ["traverso", "trasparente", "trascurato"],
      tags: ["politics"],
    },
    {
      id: "scendere-in-piazza", type: "phrase", pos: "phrase", target: "scendere in piazza",
      gloss: { es: "salir a la calle (a protestar)", en: "to take to the streets" },
      distractors: ["scendere alla piazza", "salire in piazza", "scendere nella piazza"],
      tags: ["politics", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "sembra-che-abbia", type: "sentence", target: "Sembra che il ministro abbia già dato le dimissioni.",
      gloss: { es: "Parece que el ministro ya presentó su renuncia.", en: "It seems the minister has already handed in his resignation." },
      errors: [{ text: "Sembra che il ministro ha già dato le dimissioni.", feedback: { es: "Tras «sembra che» va congiuntivo: abbia dato.", en: "After 'sembra che' use the subjunctive: abbia dato." }, ruleId: "it-g-congiuntivo-tempi" }],
      distractors: ["ha", "avesse", "dimissione"],
      grammar: ["it-g-congiuntivo-tempi"], tags: ["politics", "subjunctive"],
    },
    {
      id: "si-temeva-che", type: "sentence", target: "Si temeva che la maggioranza non avesse i numeri.",
      gloss: { es: "Se temía que la mayoría no tuviera los votos suficientes.", en: "It was feared the majority didn't have the numbers." },
      errors: [{ text: "Si temeva che la maggioranza non abbia i numeri.", feedback: { es: "Principal en pasado → congiuntivo imperfetto: avesse.", en: "Past main verb → imperfect subjunctive: avesse." }, ruleId: "it-g-congiuntivo-tempi" }],
      distractors: ["abbia", "aveva", "maggiore"],
      grammar: ["it-g-congiuntivo-tempi"], tags: ["politics", "subjunctive"],
    },
    {
      id: "nessuno-si-aspettava", type: "sentence", target: "Nessuno si aspettava che la legge sarebbe stata approvata così in fretta.",
      gloss: { es: "Nadie esperaba que la ley se aprobara tan rápido.", en: "Nobody expected the law to be passed so quickly." },
      accept: [{ text: "Nessuno si aspettava che la legge venisse approvata così in fretta." }, { text: "Nessuno si aspettava che la legge fosse approvata così in fretta." }],
      distractors: ["sarà", "approvato", "presto"],
      note: { es: "Algo posterior a un pasado puede ir en condicional compuesto: sarebbe stata approvata.", en: "Something later than a past event can take the past conditional: sarebbe stata approvata." },
      grammar: ["it-g-congiuntivo-tempi"], tags: ["politics", "subjunctive"],
    },
    {
      id: "non-e-detto-che", type: "sentence", target: "Non è detto che l'opposizione voti contro.",
      gloss: { es: "No es seguro que la oposición vote en contra.", en: "It's not a given that the opposition will vote against." },
      distractors: ["vota", "votasse", "detta"],
      grammar: ["it-g-congiuntivo-tempi"], tags: ["politics", "subjunctive"],
    },
    {
      id: "governo-ha-smentito", type: "sentence", target: "Il governo ha smentito la notizia.",
      gloss: { es: "El gobierno desmintió la noticia.", en: "The government denied the report." },
      distractors: ["mentito", "notizie", "è"],
      tags: ["politics", "news"],
    },
    {
      id: "riforma-va-discussa", type: "sentence", target: "La riforma va discussa in Parlamento.",
      gloss: { es: "La reforma tiene que debatirse en el Parlamento.", en: "The reform has to be debated in Parliament." },
      errors: [{ text: "La riforma va discusso in Parlamento.", feedback: { es: "El participio concuerda con «la riforma»: discussa.", en: "The participle agrees with 'la riforma': discussa." }, ruleId: "it-g-passivo-venire" }],
      distractors: ["viene", "discusso", "al"],
      grammar: ["it-g-passivo-venire"], tags: ["politics", "passive"],
    },
    {
      id: "risultati-verranno", type: "sentence", target: "I risultati verranno comunicati domani.",
      gloss: { es: "Los resultados se darán a conocer mañana.", en: "The results will be announced tomorrow." },
      accept: [{ text: "I risultati saranno comunicati domani." }],
      distractors: ["venuti", "comunicate", "ieri"],
      grammar: ["it-g-passivo-venire"], tags: ["politics", "elections", "passive"],
    },
    {
      id: "si-sono-prese", type: "sentence", target: "Negli ultimi mesi si sono prese decisioni impopolari.",
      gloss: { es: "En los últimos meses se tomaron decisiones impopulares.", en: "Unpopular decisions have been made in recent months." },
      errors: [
        { text: "Negli ultimi mesi si è prese decisioni impopolari.", feedback: { es: "El verbo concuerda con «decisioni» (plural): si sono prese.", en: "The verb agrees with 'decisioni' (plural): si sono prese." }, ruleId: "it-g-si-passivante-composto" },
        { text: "Negli ultimi mesi si hanno preso decisioni impopolari.", feedback: { es: "El «si» pasivo lleva essere: si sono prese.", en: "Passive 'si' takes essere: si sono prese." }, ruleId: "it-g-si-passivante-composto" },
      ],
      distractors: ["è", "presi", "hanno"],
      grammar: ["it-g-si-passivante-composto"], tags: ["politics", "passive"],
    },
    {
      id: "si-e-trovato-accordo", type: "sentence", target: "Dopo settimane di trattative, si è trovato un accordo.",
      gloss: { es: "Tras semanas de negociaciones, se llegó a un acuerdo.", en: "After weeks of talks, an agreement was reached." },
      errors: [{ text: "Dopo settimane di trattative, si ha trovato un accordo.", feedback: { es: "El «si» pasivo lleva essere: si è trovato.", en: "Passive 'si' takes essere: si è trovato." }, ruleId: "it-g-si-passivante-composto" }],
      distractors: ["ha", "trovata", "delle"],
      grammar: ["it-g-si-passivante-composto"], tags: ["politics", "passive"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-congiuntivo-tempi", type: "pattern", target: "credo che sia / sia stato · credevo che fosse / fosse stato",
      gloss: { es: "el congiuntivo según el tiempo del verbo principal", en: "choosing the subjunctive tense from the main verb" },
      pattern: {
        rule: {
          es: "Principal en presente: congiuntivo presente (a la vez) o passato (antes). Principal en pasado: imperfetto (a la vez) o trapassato (antes); para algo posterior, condicional compuesto.",
          en: "Present main verb: present subjunctive (same time) or past (earlier). Past main verb: imperfect (same time) or pluperfect (earlier); for something later, the past conditional.",
        },
        table: [["credo che", "sia · sia stato"], ["credevo che", "fosse · fosse stato"], ["credevo che… (dopo)", "sarebbe stato"]],
      },
      question: {
        prompt: { es: "Completa (italiano estándar): «Credevo che il ministro si ___ già dimesso.»", en: "Complete (standard Italian): 'Credevo che il ministro si ___ già dimesso.'" },
        options: ["fosse", "sia", "sarà", "è"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-congiuntivo-tempi"], tags: ["grammar", "subjunctive"],
    },
    {
      id: "pat-si-composto", type: "pattern", target: "si è trovato un accordo · si sono prese decisioni",
      gloss: { es: "el «si» pasivo en tiempos compuestos", en: "passive 'si' in compound tenses" },
      pattern: {
        rule: {
          es: "En tiempos compuestos el «si» pasivo lleva siempre essere, y el verbo y el participio concuerdan con el sustantivo: si è approvata la legge, si sono approvate le leggi.",
          en: "In compound tenses passive si always takes essere, and the verb and participle agree with the noun: si è approvata la legge, si sono approvate le leggi.",
        },
        table: [["la legge", "si è approvata"], ["il bilancio", "si è approvato"], ["le leggi", "si sono approvate"]],
      },
      question: {
        prompt: { es: "Completa: «Finalmente si ___ trovato un accordo.»", en: "Complete: 'Finalmente si ___ trovato un accordo.'" },
        options: ["è", "ha", "sono", "hanno"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-si-passivante-composto"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-va-fatto", type: "pattern", target: "la legge va cambiata · i fondi vanno stanziati",
      gloss: { es: "andare + participio = hay que…", en: "andare + participle = must be…" },
      pattern: {
        rule: {
          es: "andare + participio expresa obligación, como «hay que» o «debe»: la legge va cambiata = hay que cambiar la ley. El participio concuerda con el sujeto.",
          en: "andare + participle expresses obligation, like 'must be': la legge va cambiata = the law must be changed. The participle agrees with the subject.",
        },
        table: [["la legge", "va cambiata"], ["i fondi", "vanno stanziati"], ["le regole", "vanno rispettate"]],
      },
      question: {
        prompt: { es: "«Questa legge va cambiata» significa…", en: "'Questa legge va cambiata' means…" },
        options: [
          { es: "Hay que cambiar esta ley.", en: "This law must be changed." },
          { es: "Esta ley está cambiando.", en: "This law is changing." },
          { es: "Esta ley ya se cambió.", en: "This law has already been changed." },
          { es: "Esta ley va a cambiar sola.", en: "This law will change by itself." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-passivo-venire"], tags: ["grammar", "passive"],
    },
    {
      id: "tab-congiuntivo-essere", type: "paradigm", target: "essere: congiuntivo, lui",
      gloss: { es: "essere en los cuatro tiempos del congiuntivo (lui)", en: "essere in the four subjunctive tenses (lui)" },
      grammar: ["it-g-congiuntivo-tempi"],
      paradigm: {
        caption: { es: "«…che lui ___»: escribe la forma de essere", en: "'…che lui ___': write the form of essere" },
        cells: [
          { label: "presente", answer: "sia", ruleId: "it-g-congiuntivo-tempi" },
          { label: "passato", answer: "sia stato", ruleId: "it-g-congiuntivo-tempi" },
          { label: "imperfetto", answer: "fosse", ruleId: "it-g-congiuntivo-tempi" },
          { label: "trapassato", answer: "fosse stato", ruleId: "it-g-congiuntivo-tempi" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-sondaggio", type: "listening",
      target: "Secondo un sondaggio pubblicato oggi, la maggioranza degli italiani ritiene che il governo abbia fatto poco per i giovani. Il ministro ha smentito, sostenendo che i fondi sono già stati stanziati.",
      gloss: {
        es: "Según una encuesta publicada hoy, la mayoría de los italianos cree que el gobierno ha hecho poco por los jóvenes. El ministro lo desmintió y sostuvo que los fondos ya fueron asignados.",
        en: "According to a poll published today, most Italians think the government has done little for young people. The minister denied it, saying the funds have already been allocated.",
      },
      question: {
        prompt: { es: "¿Qué respondió el ministro?", en: "How did the minister respond?" },
        options: [
          { es: "Que el dinero ya fue asignado.", en: "That the money has already been allocated." },
          { es: "Que va a renunciar.", en: "That he will resign." },
          { es: "Que la encuesta es falsa.", en: "That the poll is fake." },
          { es: "Que se ha hecho poco por los jóvenes.", en: "That little has been done for young people." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-congiuntivo-tempi"], tags: ["listening", "politics", "news"],
    },
    {
      id: "dlg-sindaco", type: "dialogue", register: "informal", target: "Pare che il sindaco si sia dimesso.",
      gloss: { es: "Parece que el alcalde renunció.", en: "Apparently the mayor has resigned." },
      turns: [
        { who: "A", target: "Hai sentito? Pare che il sindaco si sia dimesso.", gloss: { es: "¿Te enteraste? Parece que el alcalde renunció.", en: "Have you heard? Apparently the mayor has resigned." } },
        { who: "B", target: "Davvero? Non pensavo che l'avrebbe fatto prima delle elezioni.", gloss: { es: "¿En serio? No pensé que lo fuera a hacer antes de las elecciones.", en: "Really? I didn't think he'd do it before the election." } },
        { who: "A", target: "Nemmeno io. Comunque, secondo me, era ora.", gloss: { es: "Yo tampoco. De todos modos, para mí ya era hora.", en: "Neither did I. Anyway, if you ask me, it was about time." } },
        { who: "B", target: "Mah, vedremo chi verrà dopo di lui.", gloss: { es: "Bueno, ya veremos quién viene después.", en: "Well, we'll see who comes next." } },
      ],
      question: {
        prompt: { es: "¿Qué opina A de la renuncia?", en: "What does A think of the resignation?" },
        options: [
          { es: "Que ya era hora.", en: "That it was about time." },
          { es: "Que es una mala noticia.", en: "That it's bad news." },
          { es: "Que el alcalde debería volver.", en: "That the mayor should come back." },
          { es: "Que no le interesa.", en: "That A doesn't care." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-congiuntivo-tempi"], tags: ["dialogue", "politics"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-comizio", type: "bridge", onlyFor: "es", target: "il comizio",
      gloss: { es: "el mitin (político)", en: "the (political) rally" },
      question: {
        prompt: { es: "«Il candidato ha tenuto un comizio in piazza» significa…", en: "'Il candidato ha tenuto un comizio in piazza' means…" },
        options: [
          { es: "El candidato dio un mitin en la plaza.", en: "The candidate held a rally in the square." },
          { es: "El candidato ganó las elecciones en la plaza.", en: "The candidate won the election in the square." },
          { es: "El candidato votó en la plaza.", en: "The candidate voted in the square." },
          { es: "El candidato organizó una comida en la plaza.", en: "The candidate held a dinner in the square." },
        ],
        answer: 0,
      },
      note: { es: "Un comizio es un mitin; los comicios (las elecciones) son «le elezioni»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "politics"],
    },
  ]),
};
