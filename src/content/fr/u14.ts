import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u14",
  lang: "fr",
  index: 14,
  cefr: "B1",
  title: { target: "Le travail", es: "El trabajo", en: "Work" },
  canDo: [
    { es: "Puedo hablar de mi trabajo, mis tareas y mis horarios.", en: "I can talk about my job, my tasks and my hours." },
    { es: "Puedo hablar de mis planes profesionales en futuro.", en: "I can talk about my career plans in the future tense." },
    { es: "Sé usar el futur simple y los pronombres le, la, les.", en: "I can use the futur simple and the pronouns le, la, les." },
  ],
  icon: "💼",
  items: build("fr", 14, "B1", [
    { id: "travail", type: "word", pos: "noun", target: "le travail", gender: "m", plural: "les travaux", gloss: { es: "el trabajo", en: "the work / job" }, accept: [{ text: "le boulot" }], distractors: ["la travail", "le travaux", "le trajet"], note: { es: "Coloquial: le boulot. Ojo: les travaux = las obras.", en: "Informal: le boulot. Careful: les travaux = building works." }, tags: ["work"] },
    { id: "entreprise", type: "word", pos: "noun", target: "l'entreprise", gender: "f", plural: "les entreprises", gloss: { es: "la empresa", en: "the company" }, distractors: ["le entreprise", "l'entrepôt", "l'emprise"], tags: ["work"] },
    { id: "collegue", type: "word", pos: "noun", target: "le collègue", gender: "m", plural: "les collègues", accept: [{ text: "la collègue" }], gloss: { es: "el compañero de trabajo (el colega)", en: "the colleague" }, distractors: ["le collège", "le collage", "la colle"], tags: ["work", "people"] },
    { id: "patron", type: "word", pos: "noun", target: "le patron", gender: "m", plural: "les patrons", accept: [{ text: "la patronne" }], gloss: { es: "el jefe / el dueño", en: "the boss" }, distractors: ["la patron", "le parrain", "le pantalon"], note: { es: "Más formal: le/la responsable, le directeur, la directrice.", en: "More formal: le/la responsable, le directeur, la directrice." }, tags: ["work", "people"] },
    { id: "reunion", type: "word", pos: "noun", target: "la réunion", gender: "f", plural: "les réunions", gloss: { es: "la reunión (de trabajo)", en: "the meeting" }, distractors: ["le réunion", "la région", "la raison"], tags: ["work"] },
    { id: "salaire", type: "word", pos: "noun", target: "le salaire", gender: "m", plural: "les salaires", gloss: { es: "el sueldo, el salario", en: "the salary / pay" }, distractors: ["la salaire", "le solaire", "le saladier"], tags: ["work", "money"] },
    { id: "cv", type: "word", pos: "noun", target: "le CV", spoken: "le cé-vé", gender: "m", plural: "les CV", gloss: { es: "el currículum", en: "the CV / résumé" }, accept: [{ text: "le curriculum vitae" }], distractors: ["la CV", "le CD", "le PV"], tags: ["work", "jobs"] },
    { id: "entretien", type: "word", pos: "noun", target: "l'entretien", gender: "m", plural: "les entretiens", gloss: { es: "la entrevista (de trabajo)", en: "the (job) interview" }, distractors: ["la entretien", "l'entrée", "l'entraînement"], note: { es: "un entretien d'embauche = una entrevista de trabajo.", en: "un entretien d'embauche = a job interview." }, tags: ["work", "jobs"] },
    { id: "chercher", type: "word", pos: "verb", target: "chercher", gloss: { es: "buscar", en: "to look for" }, distractors: ["cherchez", "chercheur", "toucher"], note: { es: "Sin preposición: je cherche un travail.", en: "No preposition: je cherche un travail ('for' isn't translated)." }, tags: ["work", "verbs"] },
    { id: "envoyer", type: "word", pos: "verb", target: "envoyer", gloss: { es: "enviar, mandar", en: "to send" }, forms: { je: "envoie", futur: "enverrai" }, distractors: ["envier", "employer", "noyer"], tags: ["work", "verbs"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-travaille-comme", type: "sentence", target: "Je travaille comme infirmière dans un hôpital.",
      gloss: { es: "Trabajo de enfermera en un hospital.", en: "I work as a nurse in a hospital. (said by a woman)" },
      accept: [{ text: "Je travaille comme infirmier dans un hôpital." }, { text: "Je suis infirmière dans un hôpital." }],
      errors: [{ text: "Je suis une infirmière dans un hôpital.", feedback: { es: "Con profesiones tras «être» no va artículo: je suis infirmière.", en: "No article with jobs after être: je suis infirmière." } }],
      distractors: ["de", "une", "en"],
      tags: ["work"],
    },
    {
      id: "je-chercherai", type: "sentence", target: "L'année prochaine, je chercherai un nouveau travail.",
      gloss: { es: "El año que viene buscaré un trabajo nuevo.", en: "Next year I'll look for a new job." },
      errors: [{ text: "L'année prochaine, je chercherais un nouveau travail.", feedback: { es: "Futuro: -ai (je chercherai); -ais es condicional.", en: "Future: -ai (je chercherai); -ais is the conditional." }, ruleId: "fr-g-futur" }],
      distractors: ["chercherais", "neuf", "nouvel"],
      tags: ["work", "future"],
    },
    {
      id: "on-verra", type: "phrase", pos: "phrase", target: "On verra.",
      gloss: { es: "Ya veremos.", en: "We'll see." },
      distractors: ["On voira.", "On vera.", "On va voir rien."],
      note: { es: "Futuro irregular de voir: je verrai, on verra.", en: "Irregular future of voir: je verrai, on verra." },
      tags: ["future", "chunk"],
    },
    {
      id: "je-lai-envoye", type: "sentence", target: "Le rapport ? Je l'ai envoyé hier.",
      gloss: { es: "¿El informe? Lo mandé ayer.", en: "The report? I sent it yesterday." },
      errors: [{ text: "Le rapport ? J'ai l'envoyé hier.", feedback: { es: "En el passé composé el pronombre va delante del auxiliar: je l'ai envoyé.", en: "In the passé composé the pronoun goes before the auxiliary: je l'ai envoyé." }, ruleId: "fr-g-cod" }],
      distractors: ["le", "lui", "envoyée"],
      tags: ["work", "pronouns"],
    },
    {
      id: "je-la-vois", type: "sentence", target: "Ma collègue ? Je la vois tous les jours.",
      gloss: { es: "¿Mi compañera? La veo todos los días.", en: "My colleague? I see her every day." },
      errors: [{ text: "Ma collègue ? Je vois la tous les jours.", feedback: { es: "El pronombre va delante del verbo: je la vois.", en: "The pronoun goes before the verb: je la vois." }, ruleId: "fr-g-cod" }],
      distractors: ["le", "lui", "elle"],
      tags: ["pronouns"],
    },
    {
      id: "je-ne-les-connais-pas", type: "sentence", target: "Les nouveaux ? Je ne les connais pas encore.",
      gloss: { es: "¿Los nuevos? Todavía no los conozco.", en: "The new people? I don't know them yet." },
      errors: [{ text: "Les nouveaux ? Je les ne connais pas encore.", feedback: { es: "«ne» va antes del pronombre: je ne les connais pas.", en: "'ne' comes before the pronoun: je ne les connais pas." }, ruleId: "fr-g-cod" }],
      distractors: ["leur", "eux", "sais"],
      tags: ["pronouns", "negation"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-futur", type: "pattern", target: "je parlerai, tu parleras, il parlera…",
      gloss: { es: "el futur simple", en: "the futur simple (will)" },
      pattern: {
        rule: {
          es: "Infinitivo + -ai, -as, -a, -ons, -ez, -ont (los verbos en -re pierden la e: prendre → je prendrai). Irregulares frecuentes: être → je serai, avoir → j'aurai, aller → j'irai, faire → je ferai, venir → je viendrai.",
          en: "Infinitive + -ai, -as, -a, -ons, -ez, -ont (-re verbs drop the e: prendre → je prendrai). Common irregulars: être → je serai, avoir → j'aurai, aller → j'irai, faire → je ferai, venir → je viendrai.",
        },
        table: [["je parlerai", "nous parlerons"], ["tu parleras", "vous parlerez"], ["il / elle parlera", "ils / elles parleront"]],
      },
      question: {
        prompt: { es: "Completa: «Demain, nous ___ à Paris.» (aller)", en: "Complete: 'Demain, nous ___ à Paris.' (aller)" },
        options: ["irons", "allerons", "irions", "allons aller"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-futur"], tags: ["grammar", "future"],
    },
    {
      id: "tab-futur-etre", type: "paradigm", target: "être — futur simple", spoken: "être, futur simple",
      gloss: { es: "«être» en futur simple", en: "être — futur simple" },
      grammar: ["fr-g-futur"],
      paradigm: {
        caption: { es: "Conjuga «être» en futuro", en: "Conjugate être in the future tense" },
        cells: [
          { label: "je", answer: "serai", ruleId: "fr-g-futur" },
          { label: "tu", answer: "seras", ruleId: "fr-g-futur" },
          { label: "il / elle", answer: "sera", ruleId: "fr-g-futur" },
          { label: "nous", answer: "serons", ruleId: "fr-g-futur" },
          { label: "vous", answer: "serez", ruleId: "fr-g-futur" },
          { label: "ils / elles", answer: "seront", ruleId: "fr-g-futur" },
        ],
      },
      tags: ["grammar", "future", "table"],
    },
    {
      id: "tab-futur-irreg", type: "paradigm", target: "futurs irréguliers (je…)", spoken: "futurs irréguliers",
      gloss: { es: "futuros irregulares frecuentes", en: "common irregular futures" },
      grammar: ["fr-g-futur"],
      paradigm: {
        caption: { es: "Escribe la forma de «je» en futuro", en: "Write the 'je' form in the future" },
        cells: [
          { label: "avoir", answer: "j'aurai", ruleId: "fr-g-futur" },
          { label: "aller", answer: "j'irai", ruleId: "fr-g-futur" },
          { label: "faire", answer: "je ferai", ruleId: "fr-g-futur" },
          { label: "venir", answer: "je viendrai", ruleId: "fr-g-futur" },
          { label: "pouvoir", answer: "je pourrai", ruleId: "fr-g-futur" },
          { label: "voir", answer: "je verrai", ruleId: "fr-g-futur" },
        ],
      },
      tags: ["grammar", "future", "table"],
    },
    {
      id: "pat-cod", type: "pattern", target: "Je le vois. · Je la connais. · Je les appelle.",
      gloss: { es: "pronombres de objeto directo (lo, la, los)", en: "direct object pronouns (him, her, it, them)" },
      pattern: {
        rule: {
          es: "le (lo), la (la), l' (delante de vocal), les (los/las) van delante del verbo conjugado. En el passé composé, delante del auxiliar: je l'ai vu. Con infinitivo, delante del infinitivo: je vais le faire.",
          en: "le (him/it), la (her/it), l' (before a vowel), les (them) go before the conjugated verb. In the passé composé, before the auxiliary: je l'ai vu. With an infinitive, before the infinitive: je vais le faire.",
        },
        table: [["présent", "Je le prends."], ["négatif", "Je ne le prends pas."], ["passé composé", "Je l'ai pris."], ["infinitif", "Je vais le prendre."]],
      },
      question: {
        prompt: { es: "«Tu regardes le match ?» — «Oui, je ___ regarde.»", en: "'Tu regardes le match ?' — 'Oui, je ___ regarde.'" },
        options: ["le", "lui", "la", "les"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-cod"], tags: ["grammar", "pronouns"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-poste", type: "listening",
      target: "Notre entreprise cherche un comptable à temps plein. Le poste est basé à Toulouse. Envoyez votre CV et une lettre de motivation avant le quinze mars.",
      spoken: "Notre entreprise cherche un comptable à temps plein. Le poste est basé à Toulouse. Envoyez votre cé-vé et une lettre de motivation avant le quinze mars.",
      gloss: {
        es: "Nuestra empresa busca un contador de tiempo completo. El puesto está en Toulouse. Envíe su currículum y una carta de motivación antes del 15 de marzo.",
        en: "Our company is looking for a full-time accountant. The job is based in Toulouse. Send your CV and a cover letter before 15 March.",
      },
      question: {
        prompt: { es: "¿Qué hay que enviar?", en: "What do applicants need to send?" },
        options: [
          { es: "El currículum y una carta de motivación", en: "A CV and a cover letter" },
          { es: "Solo el currículum", en: "Just a CV" },
          { es: "Una foto y el pasaporte", en: "A photo and a passport" },
          { es: "Referencias de un jefe anterior", en: "References from a former boss" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "jobs"],
    },
    {
      id: "dlg-entretien", type: "dialogue", target: "Je serai disponible en septembre.", register: "formal",
      gloss: { es: "Estaré disponible en septiembre.", en: "I'll be available in September." },
      turns: [
        { who: "A", target: "Pourquoi voulez-vous travailler chez nous ?", gloss: { es: "¿Por qué quiere trabajar con nosotros?", en: "Why do you want to work for us?" } },
        { who: "B", target: "Votre entreprise est connue pour ses projets innovants et j'aimerais y participer.", gloss: { es: "Su empresa es conocida por sus proyectos innovadores y me gustaría participar.", en: "Your company is known for its innovative projects and I'd like to be part of them." } },
        { who: "A", target: "Quand pourrez-vous commencer ?", gloss: { es: "¿Cuándo podrá empezar?", en: "When will you be able to start?" } },
        { who: "B", target: "Je serai disponible en septembre.", gloss: { es: "Estaré disponible en septiembre.", en: "I'll be available in September." } },
      ],
      question: {
        prompt: { es: "¿Cuándo puede empezar la persona candidata?", en: "When can the candidate start?" },
        options: [
          { es: "En septiembre", en: "In September" },
          { es: "Ahora mismo", en: "Right away" },
          { es: "El año que viene", en: "Next year" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "jobs"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-stage", type: "bridge", onlyFor: "es", target: "le stage",
      gloss: { es: "las prácticas (la pasantía)", en: "the internship" },
      question: {
        prompt: { es: "«Je fais un stage dans une banque» significa…", en: "'Je fais un stage dans une banque' means…" },
        options: [
          { es: "Hago prácticas en un banco", en: "I'm doing an internship at a bank" },
          { es: "Trabajo en el escenario de un banco", en: "I perform on a bank's stage" },
          { es: "Hago una etapa en un banco", en: "I'm at a stage in a bank" },
        ],
        answer: 0,
      },
      note: { es: "le stage = pasantía, prácticas; le stagiaire = el practicante." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
    {
      id: "br-futur", type: "bridge", onlyFor: "es", target: "je parlerai",
      gloss: { es: "hablaré", en: "I will speak" },
      distractors: ["je parlaré", "je parlerais", "je parlerá"],
      note: { es: "Como en español, el futuro sale del infinitivo: hablar-é → parler-ai, hablar-á → parler-a." },
      exercises: ["guess", "recall"], tags: ["bridge", "future"],
    },
  ]),
};
