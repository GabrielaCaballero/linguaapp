import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u18",
  lang: "fr",
  index: 18,
  cefr: "B1",
  title: { target: "Société et environnement", es: "Sociedad y medio ambiente", en: "Society and the environment" },
  canDo: [
    { es: "Puedo hablar de reciclaje, transporte y hábitos ecológicos.", en: "I can talk about recycling, transport and green habits." },
    { es: "Puedo hablar de lo que hago por los demás y en mi barrio.", en: "I can talk about what I do for others and in my neighbourhood." },
    { es: "Sé usar los pronombres lui, leur, y, en.", en: "I can use the pronouns lui, leur, y and en." },
  ],
  icon: "🌱",
  items: build("fr", 18, "B1", [
    { id: "environnement", type: "word", pos: "noun", target: "l'environnement", gender: "m", plural: "les environnements", gloss: { es: "el medio ambiente", en: "the environment" }, distractors: ["la environnement", "l'environ", "l'enseignement"], note: { es: "Doble n y sin «m» antes de «n»: environnement.", en: "Note the double n: environnement." }, tags: ["environment"] },
    { id: "dechets", type: "word", pos: "noun", target: "le déchet", gender: "m", plural: "les déchets", gloss: { es: "el residuo, la basura", en: "the waste / rubbish" }, distractors: ["la déchet", "le déchu", "le cachet"], note: { es: "Casi siempre en plural: trier ses déchets = separar la basura.", en: "Usually plural: trier ses déchets = to sort your rubbish." }, tags: ["environment"] },
    { id: "recycler", type: "word", pos: "verb", target: "recycler", gloss: { es: "reciclar", en: "to recycle" }, distractors: ["recycle", "reculer", "cycler"], tags: ["environment"] },
    { id: "pollution", type: "word", pos: "noun", target: "la pollution", gender: "f", plural: "les pollutions", gloss: { es: "la contaminación", en: "the pollution" }, distractors: ["le pollution", "la potion", "la position"], tags: ["environment"] },
    { id: "transports-en-commun", type: "phrase", pos: "phrase", target: "les transports en commun", gloss: { es: "el transporte público", en: "public transport" }, distractors: ["les transports communs", "les transports en public", "le transport commun"], tags: ["environment", "transport"] },
    { id: "benevole", type: "word", pos: "noun", target: "le bénévole", gender: "m", plural: "les bénévoles", accept: [{ text: "la bénévole" }], gloss: { es: "el voluntario", en: "the volunteer" }, distractors: ["le bénévolat", "le bienvenu", "le bénéfice"], note: { es: "faire du bénévolat = hacer voluntariado.", en: "faire du bénévolat = to do volunteer work." }, tags: ["society"] },
    { id: "association", type: "word", pos: "noun", target: "l'association", gender: "f", plural: "les associations", gloss: { es: "la asociación, la ONG", en: "the charity / association" }, distractors: ["le association", "l'assurance", "l'assiette"], tags: ["society"] },
    { id: "gaspiller", type: "word", pos: "verb", target: "gaspiller", gloss: { es: "desperdiciar", en: "to waste" }, distractors: ["gaspacho", "piller", "gaspillé"], note: { es: "le gaspillage alimentaire = el desperdicio de comida.", en: "le gaspillage alimentaire = food waste." }, tags: ["environment"] },
    { id: "plastique", type: "word", pos: "noun", target: "le plastique", gender: "m", plural: "les plastiques", gloss: { es: "el plástico", en: "the plastic" }, distractors: ["la plastique", "le plastic", "la pratique"], tags: ["environment"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-lui-ai-dit", type: "sentence", target: "J'ai parlé à ma voisine et je lui ai donné des légumes.",
      gloss: { es: "Hablé con mi vecina y le di verduras.", en: "I talked to my neighbour and gave her some vegetables." },
      errors: [{ text: "J'ai parlé à ma voisine et je la ai donné des légumes.", feedback: { es: "donner à quelqu'un → objeto indirecto: lui.", en: "donner à quelqu'un → indirect object: lui." }, ruleId: "fr-g-coi" }],
      distractors: ["la", "leur", "elle"],
      tags: ["pronouns", "society"],
    },
    {
      id: "je-leur-telephone", type: "sentence", target: "Mes parents ? Je leur téléphone tous les dimanches.",
      gloss: { es: "¿Mis papás? Les llamo todos los domingos.", en: "My parents? I phone them every Sunday." },
      errors: [{ text: "Mes parents ? Je les téléphone tous les dimanches.", feedback: { es: "téléphoner à quelqu'un → leur (objeto indirecto).", en: "téléphoner à quelqu'un → leur (indirect object)." }, ruleId: "fr-g-coi" }],
      distractors: ["les", "leurs", "lui"],
      tags: ["pronouns", "family"],
    },
    {
      id: "jy-vais-a-velo", type: "sentence", target: "Le bureau ? J'y vais à vélo.",
      gloss: { es: "¿La oficina? Voy en bici.", en: "The office? I cycle there." },
      errors: [{ text: "Le bureau ? Je vais y à vélo.", feedback: { es: "y va delante del verbo: j'y vais.", en: "y goes before the verb: j'y vais." }, ruleId: "fr-g-y-en" }],
      distractors: ["en", "là", "le"],
      tags: ["pronouns", "transport"],
    },
    {
      id: "jen-ai-trop", type: "sentence", target: "Du plastique ? On en utilise beaucoup trop.",
      gloss: { es: "¿Plástico? Usamos demasiado.", en: "Plastic? We use far too much of it." },
      errors: [{ text: "Du plastique ? On l'utilise beaucoup trop.", feedback: { es: "Con cantidades (du, beaucoup de…) el pronombre es «en».", en: "With quantities (du, beaucoup de…) the pronoun is 'en'." }, ruleId: "fr-g-y-en" }],
      distractors: ["y", "le", "de"],
      tags: ["pronouns", "environment"],
    },
    {
      id: "il-faut-trier", type: "sentence", target: "Il faut que chacun fasse un effort.",
      gloss: { es: "Hace falta que cada uno ponga de su parte.", en: "Everyone needs to make an effort." },
      errors: [{ text: "Il faut que chacun fait un effort.", feedback: { es: "il faut que + subjuntivo: fasse.", en: "il faut que + subjunctive: fasse." }, ruleId: "fr-g-subjonctif" }],
      distractors: ["fait", "chaque", "faire"],
      tags: ["environment", "subjonctif"],
    },
    {
      id: "jen-ai-deux", type: "sentence", target: "Des enfants ? J'en ai deux.",
      gloss: { es: "¿Hijos? Tengo dos.", en: "Children? I have two." },
      errors: [{ text: "Des enfants ? J'ai deux.", feedback: { es: "Con un número sin sustantivo hace falta «en»: j'en ai deux.", en: "A number without its noun needs 'en': j'en ai deux." }, ruleId: "fr-g-y-en" }],
      distractors: ["les", "y", "deux enfants"],
      tags: ["pronouns", "family"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-coi", type: "pattern", target: "Je lui parle. · Je leur écris.",
      gloss: { es: "objeto indirecto: lui, leur", en: "indirect object pronouns: lui, leur" },
      pattern: {
        rule: {
          es: "Reemplazan a «à + persona»: lui (le, a él o a ella), leur (les). Van delante del verbo, como le/la/les. Verbos típicos: parler à, téléphoner à, donner à, écrire à, demander à.",
          en: "They replace 'à + person': lui (to him / to her), leur (to them). They go before the verb, like le/la/les. Typical verbs: parler à, téléphoner à, donner à, écrire à, demander à.",
        },
        table: [["parler à Paul", "je lui parle"], ["écrire à Marie", "je lui écris"], ["répondre aux clients", "je leur réponds"]],
      },
      question: {
        prompt: { es: "«Tu as écrit à tes grands-parents ?» — «Oui, je ___ ai écrit.»", en: "'Tu as écrit à tes grands-parents ?' — 'Oui, je ___ ai écrit.'" },
        options: ["leur", "les", "lui", "leurs"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-coi"], tags: ["grammar", "pronouns"],
    },
    {
      id: "tab-cod-coi", type: "paradigm", target: "le, la, les ou lui, leur ?", spoken: "le, la, les, lui, leur",
      gloss: { es: "objeto directo o indirecto", en: "direct or indirect object" },
      grammar: ["fr-g-coi"],
      paradigm: {
        caption: { es: "Escribe el pronombre que reemplaza las palabras entre paréntesis", en: "Write the pronoun that replaces the words in brackets" },
        cells: [
          { label: "Je vois (Marie).", answer: "la", ruleId: "fr-g-cod" },
          { label: "Je parle (à Marie).", answer: "lui", ruleId: "fr-g-coi" },
          { label: "J'appelle (mes amis).", answer: "les", ruleId: "fr-g-cod" },
          { label: "J'écris (à mes amis).", answer: "leur", ruleId: "fr-g-coi" },
          { label: "Je cherche (le bus).", answer: "le", ruleId: "fr-g-cod" },
          { label: "Je donne un livre (à Paul).", answer: "lui", ruleId: "fr-g-coi" },
        ],
      },
      tags: ["grammar", "pronouns", "table"],
    },
    {
      id: "pat-y-en", type: "pattern", target: "J'y vais. · J'en veux.",
      gloss: { es: "los pronombres y, en", en: "the pronouns y and en" },
      pattern: {
        rule: {
          es: "y reemplaza un lugar o «à + cosa»: je vais à Paris → j'y vais; je pense à mon travail → j'y pense. en reemplaza «de + algo» y las cantidades: je bois du café → j'en bois; j'ai trois sœurs → j'en ai trois.",
          en: "y replaces a place or 'à + thing': je vais à Paris → j'y vais; je pense à mon travail → j'y pense. en replaces 'de + something' and quantities: je bois du café → j'en bois; j'ai trois sœurs → j'en ai trois.",
        },
        table: [["à + lieu / chose", "y", "J'y vais."], ["de + chose", "en", "J'en parle."], ["quantité", "en", "J'en ai deux."]],
      },
      question: {
        prompt: { es: "«Tu veux du gâteau ?» — «Oui, j'___ veux bien.»", en: "'Tu veux du gâteau ?' — 'Oui, j'___ veux bien.'" },
        options: ["en", "y", "le", "lui"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-y-en"], tags: ["grammar", "pronouns"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-quartier-vert", type: "listening",
      target: "Dans notre quartier, on a créé un jardin partagé. Chaque samedi, des bénévoles y travaillent ensemble. On n'utilise pas de produits chimiques et on donne les légumes aux familles qui en ont besoin.",
      gloss: {
        es: "En nuestro barrio creamos un huerto comunitario. Cada sábado, unos voluntarios trabajan ahí juntos. No usamos productos químicos y damos las verduras a las familias que las necesitan.",
        en: "In our neighbourhood we've set up a community garden. Every Saturday, volunteers work there together. We don't use chemicals, and we give the vegetables to families who need them.",
      },
      question: {
        prompt: { es: "¿A quién le dan las verduras?", en: "Who gets the vegetables?" },
        options: [
          { es: "A las familias que las necesitan", en: "Families who need them" },
          { es: "A los voluntarios", en: "The volunteers" },
          { es: "A un supermercado", en: "A supermarket" },
          { es: "A la escuela del barrio", en: "The local school" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "environment", "society"],
    },
    {
      id: "dlg-tri", type: "dialogue", target: "Le verre, on le met dans le conteneur vert.", register: "informal",
      gloss: { es: "El vidrio va en el contenedor verde.", en: "Glass goes in the green bin." },
      turns: [
        { who: "A", target: "Je ne sais jamais où mettre les bouteilles.", gloss: { es: "Nunca sé dónde poner las botellas.", en: "I never know where to put bottles." } },
        { who: "B", target: "Le verre, on le met dans le conteneur vert, au coin de la rue.", gloss: { es: "El vidrio va en el contenedor verde, en la esquina.", en: "Glass goes in the green bin on the street corner." } },
        { who: "A", target: "Et les emballages en plastique ?", gloss: { es: "¿Y los envases de plástico?", en: "And plastic packaging?" } },
        { who: "B", target: "Dans la poubelle jaune. J'en ai une dans la cuisine, regarde.", gloss: { es: "En el bote amarillo. Tengo uno en la cocina, mira.", en: "In the yellow bin. I've got one in the kitchen, look." } },
      ],
      question: {
        prompt: { es: "¿Dónde se pone el vidrio?", en: "Where does glass go?" },
        options: [
          { es: "En el contenedor verde de la calle", en: "In the green bin on the street" },
          { es: "En el bote amarillo", en: "In the yellow bin" },
          { es: "Con la basura normal", en: "With the normal rubbish" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "environment"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-lui", type: "bridge", onlyFor: "es", target: "Je lui parle.",
      gloss: { es: "Le hablo (a él o a ella).", en: "I talk to him / her." },
      distractors: ["Je le parle.", "Je la parle.", "Je parle lui."],
      note: { es: "Como «le» en español (le hablo), «lui» vale para él y para ella; «le» francés es objeto directo (lo)." },
      exercises: ["guess", "recall"], tags: ["bridge", "pronouns"],
    },
    {
      id: "br-poubelle", type: "bridge", onlyFor: "es", target: "la poubelle",
      gloss: { es: "el bote de basura (el cubo)", en: "the bin / trash can" },
      question: {
        prompt: { es: "«Mets ça à la poubelle !» significa…", en: "'Mets ça à la poubelle !' means…" },
        options: [
          { es: "¡Tira eso a la basura!", en: "Put that in the bin!" },
          { es: "¡Pon eso en el pueblo!", en: "Put that in the village!" },
          { es: "¡Pon eso en la repisa!", en: "Put that on the shelf!" },
        ],
        answer: 0,
      },
      note: { es: "la poubelle = el bote de basura, por el prefecto Poubelle, que lo impuso en París en el siglo XIX." },
      exercises: ["guess", "question"], tags: ["bridge", "environment"],
    },
  ]),
};
