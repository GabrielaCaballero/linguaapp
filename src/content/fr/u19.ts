import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u19",
  lang: "fr",
  index: 19,
  cefr: "B2",
  title: { target: "Le monde du travail", es: "El mundo laboral", en: "The world of work" },
  canDo: [
    { es: "Puedo hablar de condiciones laborales, contratos y carrera profesional.", en: "I can talk about working conditions, contracts and careers." },
    { es: "Puedo explicar cómo se hace algo y qué pasa al mismo tiempo.", en: "I can explain how something is done and what happens at the same time." },
    { es: "Sé usar el gérondif (en travaillant) y el relativo «dont».", en: "I can use the gérondif (en travaillant) and the relative pronoun dont." },
  ],
  icon: "🏢",
  items: build("fr", 19, "B2", [
    { id: "contrat", type: "word", pos: "noun", target: "le contrat", gender: "m", plural: "les contrats", gloss: { es: "el contrato", en: "the contract" }, distractors: ["la contrat", "le contraste", "le constat"], note: { es: "un CDI = contrato indefinido; un CDD = contrato temporal.", en: "un CDI = permanent contract; un CDD = fixed-term contract." }, tags: ["work"] },
    { id: "embaucher", type: "word", pos: "verb", target: "embaucher", gloss: { es: "contratar", en: "to hire" }, distractors: ["embarquer", "emboucher", "débaucher"], note: { es: "Lo contrario: licencier (despedir).", en: "The opposite: licencier (to dismiss / lay off)." }, tags: ["work"] },
    { id: "licencier", type: "word", pos: "verb", target: "licencier", gloss: { es: "despedir (a un empleado)", en: "to dismiss / lay off" }, distractors: ["licence", "lancer", "financer"], tags: ["work"] },
    { id: "demission", type: "word", pos: "noun", target: "la démission", gender: "f", plural: "les démissions", gloss: { es: "la renuncia", en: "the resignation" }, distractors: ["le démission", "la mission", "la démolition"], note: { es: "donner sa démission = renunciar.", en: "donner sa démission = to hand in your notice." }, tags: ["work"] },
    { id: "augmentation", type: "word", pos: "noun", target: "l'augmentation", gender: "f", plural: "les augmentations", gloss: { es: "el aumento (de sueldo)", en: "the pay rise / raise" }, distractors: ["le augmentation", "l'argumentation", "l'alimentation"], tags: ["work", "money"] },
    { id: "conge", type: "word", pos: "noun", target: "le congé", gender: "m", plural: "les congés", gloss: { es: "el permiso, los días libres", en: "the leave / time off" }, distractors: ["la congé", "le congrès", "le cogné"], note: { es: "les congés payés = las vacaciones pagadas; un congé maternité.", en: "les congés payés = paid holidays; un congé maternité = maternity leave." }, tags: ["work"] },
    { id: "competence", type: "word", pos: "noun", target: "la compétence", gender: "f", plural: "les compétences", gloss: { es: "la habilidad, la aptitud", en: "the skill" }, distractors: ["le compétence", "la compétition", "la complaisance"], tags: ["work", "jobs"] },
    { id: "deplacement", type: "word", pos: "noun", target: "le déplacement", gender: "m", plural: "les déplacements", gloss: { es: "el viaje de trabajo, el traslado", en: "the business trip" }, distractors: ["la déplacement", "le remplacement", "le placement"], note: { es: "être en déplacement = estar de viaje por trabajo.", en: "être en déplacement = to be away on business." }, tags: ["work", "travel"] },
    { id: "cependant", type: "word", pos: "adv", target: "cependant", gloss: { es: "no obstante, sin embargo", en: "however" }, distractors: ["pendant", "cela", "cependent"], tags: ["connectors"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "en-travaillant", type: "sentence", target: "J'ai appris l'anglais en travaillant à Londres.",
      gloss: { es: "Aprendí inglés trabajando en Londres.", en: "I learnt English while working in London." },
      errors: [{ text: "J'ai appris l'anglais travaillant à Londres.", feedback: { es: "El gerundio francés lleva «en»: en travaillant.", en: "The French gérondif needs 'en': en travaillant." }, ruleId: "fr-g-gerondif" }],
      distractors: ["travaillé", "à", "dans"],
      tags: ["gerondif"],
    },
    {
      id: "en-arrivant", type: "sentence", target: "En arrivant au bureau, j'ai vu le message.",
      gloss: { es: "Al llegar a la oficina vi el mensaje.", en: "When I got to the office, I saw the message." },
      distractors: ["arrivé", "à", "quand"],
      note: { es: "«en + -ant» traduce a menudo «al + infinitivo».", en: "'en + -ant' often translates 'on / when + -ing'." },
      tags: ["gerondif"],
    },
    {
      id: "cest-en-forgeant", type: "phrase", pos: "phrase", target: "C'est en forgeant qu'on devient forgeron.",
      gloss: { es: "La práctica hace al maestro.", en: "Practice makes perfect." },
      distractors: ["C'est en forgeant qu'on vient forgeron.", "C'est forgeant qu'on devient forgeron.", "C'est en forgeant que devient forgeron."],
      note: { es: "Refrán: literalmente «forjando se llega a herrero».", en: "Proverb: literally 'it's by forging that you become a blacksmith'." },
      tags: ["gerondif", "proverb"],
    },
    {
      id: "le-projet-dont", type: "sentence", target: "C'est le projet dont je vous ai parlé.", register: "formal",
      gloss: { es: "Es el proyecto del que le hablé.", en: "This is the project I told you about." },
      errors: [{ text: "C'est le projet que je vous ai parlé.", feedback: { es: "parler de → dont: le projet dont je vous ai parlé.", en: "parler de → dont: le projet dont je vous ai parlé." }, ruleId: "fr-g-dont" }],
      distractors: ["que", "duquel", "où"],
      tags: ["relatives"],
    },
    {
      id: "la-collegue-dont", type: "sentence", target: "J'ai une collègue dont le mari est pilote.",
      gloss: { es: "Tengo una compañera cuyo esposo es piloto.", en: "I have a colleague whose husband is a pilot." },
      errors: [{ text: "J'ai une collègue dont son mari est pilote.", feedback: { es: "Con «dont» no se repite el posesivo: dont le mari.", en: "With 'dont' don't repeat the possessive: dont le mari." }, ruleId: "fr-g-dont" }],
      distractors: ["qui", "son", "que"],
      tags: ["relatives"],
    },
    {
      id: "ce-dont-jai-besoin", type: "sentence", target: "Ce dont j'ai besoin, c'est d'un peu de temps.",
      gloss: { es: "Lo que necesito es un poco de tiempo.", en: "What I need is a bit of time." },
      errors: [{ text: "Ce que j'ai besoin, c'est d'un peu de temps.", feedback: { es: "avoir besoin de → ce dont.", en: "avoir besoin de → ce dont." }, ruleId: "fr-g-dont" }],
      distractors: ["que", "qui", "besoins"],
      tags: ["relatives"],
    },
    {
      id: "bien-quil-soit", type: "sentence", target: "Bien qu'il soit compétent, il n'a pas eu le poste.",
      gloss: { es: "Aunque es competente, no le dieron el puesto.", en: "Although he's competent, he didn't get the job." },
      errors: [{ text: "Bien qu'il est compétent, il n'a pas eu le poste.", feedback: { es: "bien que siempre va con subjuntivo: qu'il soit.", en: "bien que always takes the subjunctive: qu'il soit." }, ruleId: "fr-g-subj-conjonctions" }],
      distractors: ["est", "malgré", "eu"],
      tags: ["connectors", "subjonctif"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-gerondif", type: "pattern", target: "en travaillant · en lisant · en faisant",
      gloss: { es: "el gérondif (en + -ant)", en: "the gérondif (en + -ant)" },
      pattern: {
        rule: {
          es: "en + raíz de «nous» + -ant (nous travaillons → en travaillant). Expresa simultaneidad (al / mientras), manera (trabajando) o condición. Irregulares: en étant, en ayant, en sachant.",
          en: "en + 'nous' stem + -ant (nous travaillons → en travaillant). It expresses simultaneity (while), manner (by doing) or condition. Irregular: en étant, en ayant, en sachant.",
        },
        table: [["simultanéité", "Il chante en cuisinant."], ["manière", "J'ai appris en lisant."], ["condition", "En partant tôt, tu arriveras à l'heure."]],
      },
      question: {
        prompt: { es: "Completa: «On économise de l'énergie ___ la lumière.» (éteindre)", en: "Complete: 'On économise de l'énergie ___ la lumière.' (éteindre)" },
        options: ["en éteignant", "en éteindant", "éteignant", "en éteint"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-gerondif"], tags: ["grammar", "gerondif"],
    },
    {
      id: "tab-gerondif", type: "paradigm", target: "le gérondif", spoken: "le gérondif",
      gloss: { es: "forma el gérondif", en: "form the gérondif" },
      grammar: ["fr-g-gerondif"],
      paradigm: {
        caption: { es: "Escribe el gérondif (en + -ant)", en: "Write the gérondif (en + -ant)" },
        cells: [
          { label: "parler", answer: "en parlant", ruleId: "fr-g-gerondif" },
          { label: "finir", answer: "en finissant", ruleId: "fr-g-gerondif" },
          { label: "faire", answer: "en faisant", ruleId: "fr-g-gerondif" },
          { label: "prendre", answer: "en prenant", ruleId: "fr-g-gerondif" },
          { label: "être", answer: "en étant", ruleId: "fr-g-gerondif" },
          { label: "savoir", answer: "en sachant", ruleId: "fr-g-gerondif" },
        ],
      },
      tags: ["grammar", "gerondif", "table"],
    },
    {
      id: "pat-dont", type: "pattern", target: "le livre dont je parle · l'ami dont le frère…",
      gloss: { es: "el relativo «dont»", en: "the relative pronoun dont" },
      pattern: {
        rule: {
          es: "dont reemplaza a «de + algo o alguien»: parler de, avoir besoin de, être fier de, se souvenir de. También expresa posesión (cuyo/a): l'ami dont la sœur est médecin.",
          en: "dont replaces 'de + something or someone': parler de, avoir besoin de, être fier de, se souvenir de. It also expresses possession (whose): l'ami dont la sœur est médecin.",
        },
        table: [["parler de", "le film dont on parle"], ["avoir besoin de", "l'outil dont j'ai besoin"], ["possession", "la femme dont le fils est acteur"]],
      },
      question: {
        prompt: { es: "Completa: «C'est un souvenir ___ je suis fier.»", en: "Complete: 'C'est un souvenir ___ je suis fier.'" },
        options: ["dont", "que", "où", "qui"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-dont"], tags: ["grammar", "relatives"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-teletravail-accord", type: "listening",
      target: "Depuis l'accord signé en janvier, les salariés peuvent télétravailler deux jours par semaine. Cependant, la direction exige que chaque équipe soit au complet le mardi.",
      gloss: {
        es: "Desde el acuerdo firmado en enero, los empleados pueden teletrabajar dos días a la semana. Sin embargo, la dirección exige que cada equipo esté completo los martes.",
        en: "Since the agreement signed in January, employees can work from home two days a week. However, management requires every team to be in on Tuesdays.",
      },
      question: {
        prompt: { es: "¿Qué exige la dirección?", en: "What does management require?" },
        options: [
          { es: "Que todos estén en la oficina los martes", en: "Everyone in the office on Tuesdays" },
          { es: "Que nadie teletrabaje", en: "No working from home at all" },
          { es: "Que se teletrabaje tres días", en: "Three days working from home" },
          { es: "Que se firme un nuevo contrato", en: "A new contract to be signed" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work"],
    },
    {
      id: "dlg-augmentation", type: "dialogue", target: "Je voudrais vous parler de mon salaire.", register: "formal",
      gloss: { es: "Quisiera hablarle de mi sueldo.", en: "I'd like to talk to you about my salary." },
      turns: [
        { who: "A", target: "Madame Leroy, je voudrais vous parler de mon salaire.", gloss: { es: "Señora Leroy, quisiera hablarle de mi sueldo.", en: "Mrs Leroy, I'd like to talk to you about my salary." } },
        { who: "B", target: "Je vous écoute.", gloss: { es: "La escucho.", en: "I'm listening." } },
        { who: "A", target: "Depuis deux ans, je gère l'équipe en plus de mes tâches habituelles, et je pense mériter une augmentation.", gloss: { es: "Desde hace dos años dirijo el equipo además de mis tareas habituales, y creo que merezco un aumento.", en: "For two years I've been managing the team on top of my usual tasks, and I think I deserve a raise." } },
        { who: "B", target: "C'est vrai que votre travail est excellent. J'en parlerai à la direction.", gloss: { es: "Es cierto que su trabajo es excelente. Lo hablaré con la dirección.", en: "It's true your work is excellent. I'll raise it with management." } },
      ],
      question: {
        prompt: { es: "¿Qué responde la jefa?", en: "What does the manager answer?" },
        options: [
          { es: "Que lo hablará con la dirección", en: "She'll raise it with management" },
          { es: "Que no es posible", en: "It isn't possible" },
          { es: "Que le da el aumento enseguida", en: "She'll give the raise at once" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-gerondif", type: "bridge", onlyFor: "es", target: "en lisant",
      gloss: { es: "leyendo", en: "(by / while) reading" },
      distractors: ["lisant", "en lire", "en lu"],
      note: { es: "El gerundio español (leyendo) suele ser «en + -ant» en francés; «estoy leyendo» no se dice así: je lis / je suis en train de lire." },
      exercises: ["guess", "recall"], tags: ["bridge", "gerondif"],
    },
    {
      id: "br-licencier", type: "bridge", onlyFor: "es", target: "licencier",
      gloss: { es: "despedir", en: "to lay off" },
      question: {
        prompt: { es: "«L'entreprise a licencié vingt personnes» significa…", en: "'L'entreprise a licencié vingt personnes' means…" },
        options: [
          { es: "La empresa despidió a veinte personas", en: "The company laid off twenty people" },
          { es: "Veinte personas obtuvieron la licencia", en: "Twenty people got a licence" },
          { es: "La empresa dio permiso a veinte personas", en: "The company gave twenty people leave" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: licencier = despedir; un licenciement = un despido. Licenciado (universidad) se dice «diplômé»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
