import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u34",
  lang: "fr",
  index: 34,
  cefr: "C2",
  title: { target: "Proverbes et expressions", es: "Refranes y expresiones", en: "Proverbs and idioms" },
  canDo: [
    { es: "Entiendo y uso refranes y expresiones idiomáticas en contexto.", en: "I can understand and use proverbs and idioms in context." },
    { es: "Reconozco la sintaxis antigua de los refranes (Qui ne dit mot consent).", en: "I can recognise the old-fashioned syntax of proverbs (Qui ne dit mot consent)." },
    { es: "Sé usar el «ne» literario sin «pas» (je ne saurais, si je ne m'abuse).", en: "I can use the literary ne without pas (je ne saurais, si je ne m'abuse)." },
  ],
  icon: "🦉",
  items: build("fr", 34, "C2", [
    // ── Proverbs ─────────────────────────────────────────────
    { id: "qui-ne-dit-mot", type: "phrase", pos: "phrase", target: "Qui ne dit mot consent.", gloss: { es: "El que calla otorga.", en: "Silence gives consent." }, distractors: ["Qui dit mot consent.", "Qui ne dit mot se tait.", "Qui ne dit mot ment."], grammar: ["fr-g-proverbes"], tags: ["proverbs"] },
    { id: "habit-moine", type: "phrase", pos: "phrase", target: "L'habit ne fait pas le moine.", gloss: { es: "El hábito no hace al monje.", en: "Don't judge a book by its cover." }, distractors: ["L'habit fait le moine.", "L'habitude ne fait pas le moine.", "L'habit ne fait pas l'homme."], tags: ["proverbs"] },
    { id: "petit-a-petit", type: "phrase", pos: "phrase", target: "Petit à petit, l'oiseau fait son nid.", gloss: { es: "Poco a poco se llega lejos.", en: "Little by little, the bird builds its nest." }, distractors: ["Petit à petit, l'oiseau fait son lit.", "Pas à pas, l'oiseau fait son nid.", "Petit à petit, l'oiseau fait sa niche."], tags: ["proverbs"] },
    { id: "chat-echaude", type: "phrase", pos: "phrase", target: "Chat échaudé craint l'eau froide.", gloss: { es: "El gato escaldado del agua fría huye.", en: "Once bitten, twice shy." }, distractors: ["Chat échaudé craint l'eau chaude.", "Chien échaudé craint l'eau froide.", "Chat échauffé craint l'eau froide."], grammar: ["fr-g-proverbes"], tags: ["proverbs"] },
    { id: "fumee-sans-feu", type: "phrase", pos: "phrase", target: "Il n'y a pas de fumée sans feu.", gloss: { es: "Cuando el río suena, piedras trae.", en: "There's no smoke without fire." }, distractors: ["Il n'y a pas de feu sans fumée.", "Il n'y a pas de fumée sans flamme.", "Il n'y a pas fumée sans feu."], tags: ["proverbs"] },
    { id: "jurer-de-rien", type: "phrase", pos: "phrase", target: "Il ne faut jurer de rien.", gloss: { es: "Nunca digas «de esta agua no beberé».", en: "Never say never." }, distractors: ["Il ne faut jurer rien.", "Il ne faut jurer de tout.", "Il faut jurer de rien."], tags: ["proverbs"] },
    // ── Idioms ───────────────────────────────────────────────
    { id: "pain-sur-la-planche", type: "phrase", pos: "phrase", target: "avoir du pain sur la planche", gloss: { es: "tener mucho trabajo por delante", en: "to have a lot on one's plate" }, distractors: ["avoir du pain sur la table", "avoir le pain sur la planche", "mettre du pain sur la planche"], tags: ["idioms", "work"] },
    { id: "midi-a-quatorze-heures", type: "phrase", pos: "phrase", target: "chercher midi à quatorze heures", gloss: { es: "complicarse la vida, buscarle tres pies al gato", en: "to overcomplicate things" }, distractors: ["chercher midi à quinze heures", "chercher minuit à quatorze heures", "trouver midi à quatorze heures"], tags: ["idioms"] },
    { id: "doigt-dans-loeil", type: "phrase", pos: "phrase", target: "se mettre le doigt dans l'œil", gloss: { es: "equivocarse de medio a medio", en: "to be completely wrong" }, distractors: ["se mettre le doigt dans le nez", "se mettre l'œil dans le doigt", "se mettre le pied dans l'œil"], tags: ["idioms"] },
    { id: "sorti-de-lauberge", type: "phrase", pos: "phrase", target: "ne pas être sorti de l'auberge", gloss: { es: "no haber salido todavía del apuro", en: "to not be out of the woods yet" }, distractors: ["ne pas être sorti de la maison", "ne pas être entré dans l'auberge", "ne pas sortir de l'auberge"], tags: ["idioms"] },
    { id: "pluie-et-beau-temps", type: "phrase", pos: "phrase", target: "faire la pluie et le beau temps", gloss: { es: "cortar el bacalao, tener todo el poder", en: "to call the shots" }, distractors: ["faire la pluie et le mauvais temps", "faire le beau temps et la pluie", "faire la neige et le beau temps"], tags: ["idioms", "power"] },
    { id: "froid-de-canard", type: "phrase", pos: "phrase", target: "un froid de canard", gloss: { es: "un frío que pela", en: "bitterly cold weather" }, distractors: ["un froid de poule", "un froid de cane", "un froid de cochon"], tags: ["idioms", "weather"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "vendre-la-peau-de-lours", type: "sentence", target: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.",
      gloss: { es: "No hay que vender la piel del oso antes de cazarlo.", en: "Don't count your chickens before they hatch." },
      distractors: ["loup", "tuée", "vend"],
      tags: ["proverbs"],
    },
    {
      id: "je-ne-saurais", type: "sentence", register: "formal", target: "Je ne saurais vous le dire.",
      gloss: { es: "No sabría decírselo.", en: "I couldn't tell you." },
      accept: [{ text: "Je ne saurais pas vous le dire.", verdict: "almost", feedback: { es: "Con «saurais» en este sentido, el registro culto omite «pas»: je ne saurais vous le dire.", en: "With saurais in this sense, formal French drops pas: je ne saurais vous le dire." } }],
      distractors: ["pourrais", "sais", "lui"],
      grammar: ["fr-g-ne-litteraire"], tags: ["register", "formal"],
    },
    {
      id: "si-je-ne-mabuse", type: "sentence", register: "formal", target: "Si je ne m'abuse, nous nous sommes déjà rencontrés.",
      gloss: { es: "Si no me equivoco, ya nos conocíamos.", en: "Unless I'm mistaken, we've met before." },
      accept: [{ text: "Si je ne me trompe, nous nous sommes déjà rencontrés." }],
      distractors: ["pas", "trompe", "rencontré"],
      grammar: ["fr-g-ne-litteraire"], tags: ["register", "formal"],
    },
    {
      id: "je-nose-le-croire", type: "sentence", target: "Je n'ose le croire.",
      gloss: { es: "No me atrevo a creerlo.", en: "I hardly dare believe it." },
      accept: [{ text: "Je n'ose pas le croire." }],
      distractors: ["osé", "croit", "lui"],
      grammar: ["fr-g-ne-litteraire"], tags: ["register", "literature"],
    },
    {
      id: "on-a-du-pain", type: "sentence", register: "informal", target: "On a du pain sur la planche cette semaine.",
      gloss: { es: "Tenemos mucho trabajo por delante esta semana.", en: "We've got a lot on our plate this week." },
      distractors: ["le", "table", "semaines"],
      tags: ["idioms", "work"],
    },
    {
      id: "tu-te-mets-le-doigt", type: "sentence", register: "informal", target: "Tu te mets le doigt dans l'œil si tu crois que je vais céder.",
      gloss: { es: "Te equivocas de medio a medio si crees que voy a ceder.", en: "You're very much mistaken if you think I'll give in." },
      distractors: ["met", "nez", "céderai"],
      tags: ["idioms"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-proverbes", type: "pattern", target: "Qui ne dit mot consent. · Chat échaudé craint l'eau froide.",
      gloss: { es: "la sintaxis de los refranes", en: "the syntax of proverbs" },
      pattern: {
        rule: {
          es: "Los refranes conservan una gramática antigua: «qui» sin antecedente = el que, quien (qui vivra verra); sustantivos sin artículo (chat échaudé…, pierre qui roule…); el «ne» sin «pas» (qui ne dit mot).",
          en: "Proverbs keep an old grammar: qui with no antecedent = whoever (qui vivra verra); nouns without an article (chat échaudé…, pierre qui roule…); ne without pas (qui ne dit mot).",
        },
        table: [["qui = celui qui", "Qui vivra verra."], ["sans article", "Pierre qui roule n'amasse pas mousse."], ["ne seul", "Qui ne dit mot consent."]],
      },
      question: {
        prompt: { es: "En «Qui ne dit mot consent», «qui» significa…", en: "In 'Qui ne dit mot consent', qui means…" },
        options: [
          { es: "el que, quien (= celui qui)", en: "whoever (= celui qui)" },
          { es: "¿quién? (pregunta)", en: "who? (question)" },
          { es: "que (relativo con antecedente)", en: "who / that (relative with an antecedent)" },
          { es: "cuál", en: "which one" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-proverbes"], tags: ["grammar", "proverbs"],
    },
    {
      id: "pat-ne-litteraire", type: "pattern", target: "je ne sais · je ne saurais · je n'ose · je ne puis",
      gloss: { es: "el «ne» literario sin «pas»", en: "the literary ne without pas" },
      pattern: {
        rule: {
          es: "Con savoir, pouvoir, oser y cesser, el registro culto puede negar solo con «ne»: je ne saurais dire, je n'ose y croire, il ne cesse de pleuvoir. «Je ne puis» es la forma literaria de «je ne peux pas».",
          en: "With savoir, pouvoir, oser and cesser, formal French can negate with ne alone: je ne saurais dire, je n'ose y croire, il ne cesse de pleuvoir. Je ne puis is the literary form of je ne peux pas.",
        },
        table: [["je ne sais", "je ne sais pas"], ["je ne saurais", "je ne pourrais pas"], ["je n'ose", "je n'ose pas"], ["je ne puis", "je ne peux pas"]],
      },
      question: {
        prompt: { es: "«Je ne puis accepter votre offre» significa…", en: "'Je ne puis accepter votre offre' means…" },
        options: [
          { es: "No puedo aceptar su oferta.", en: "I cannot accept your offer." },
          { es: "Solo puedo aceptar su oferta.", en: "I can only accept your offer." },
          { es: "Pienso aceptar su oferta.", en: "I intend to accept your offer." },
          { es: "Ya acepté su oferta.", en: "I've already accepted your offer." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-ne-litteraire"], tags: ["grammar", "register"],
    },
    {
      id: "tab-proverbes", type: "paradigm", target: "complète le proverbe",
      gloss: { es: "completa el refrán", en: "finish the proverb" },
      grammar: ["fr-g-proverbes"],
      paradigm: {
        caption: { es: "Escribe la palabra que falta", en: "Write the missing word" },
        cells: [
          { label: "L'habit ne fait pas le…", answer: "moine", ruleId: "fr-g-proverbes" },
          { label: "Il n'y a pas de fumée sans…", answer: "feu", ruleId: "fr-g-proverbes" },
          { label: "Qui ne dit mot…", answer: "consent", ruleId: "fr-g-proverbes" },
          { label: "Chat échaudé craint l'eau…", answer: "froide", ruleId: "fr-g-proverbes" },
          { label: "Petit à petit, l'oiseau fait son…", answer: "nid", ruleId: "fr-g-proverbes" },
        ],
      },
      tags: ["grammar", "proverbs", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-grand-pere", type: "listening",
      target: "Mon grand-père avait un proverbe pour tout. Quand je me plaignais du travail, il me disait : « Petit à petit, l'oiseau fait son nid. » Et quand je jugeais quelqu'un sur sa tenue, il répondait : « L'habit ne fait pas le moine. » Aujourd'hui, c'est moi qui les répète à mes enfants.",
      gloss: {
        es: "Mi abuelo tenía un refrán para todo. Cuando me quejaba del trabajo, me decía: «Poco a poco se llega lejos». Y cuando juzgaba a alguien por su ropa, contestaba: «El hábito no hace al monje». Hoy soy yo quien se los repite a mis hijos.",
        en: "My grandfather had a proverb for everything. When I complained about work, he'd say: 'Little by little, the bird builds its nest.' And when I judged someone by their clothes, he'd reply: 'Clothes don't make the man.' Today I'm the one repeating them to my children.",
      },
      question: {
        prompt: { es: "¿Qué hace hoy quien habla?", en: "What does the speaker do today?" },
        options: [
          { es: "Repite los refranes de su abuelo a sus hijos.", en: "Repeats his grandfather's proverbs to his children." },
          { es: "Escribe un libro de refranes.", en: "Writes a book of proverbs." },
          { es: "Ya no recuerda los refranes.", en: "No longer remembers the proverbs." },
          { es: "Juzga a la gente por su ropa.", en: "Judges people by their clothes." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "proverbs", "family"],
    },
    {
      id: "dlg-peau-de-lours", type: "dialogue", register: "informal", target: "On n'est pas encore sortis de l'auberge.",
      gloss: { es: "Todavía no salimos del apuro.", en: "We're not out of the woods yet." },
      turns: [
        { who: "A", target: "Le client a dit oui ! On fête ça ce soir ?", gloss: { es: "¡El cliente dijo que sí! ¿Lo celebramos esta noche?", en: "The client said yes! Shall we celebrate tonight?" } },
        { who: "B", target: "Doucement : il n'a rien signé. Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.", gloss: { es: "Despacio: no firmó nada. No hay que vender la piel del oso antes de cazarlo.", en: "Easy: he hasn't signed anything. Don't count your chickens before they hatch." } },
        { who: "A", target: "Tu as raison. Et puis, la dernière fois, il a tout annulé au dernier moment.", gloss: { es: "Tienes razón. Además, la última vez lo canceló todo en el último momento.", en: "You're right. And last time he cancelled everything at the last minute." } },
        { who: "B", target: "Exactement. On n'est pas encore sortis de l'auberge.", gloss: { es: "Exacto. Todavía no salimos del apuro.", en: "Exactly. We're not out of the woods yet." } },
      ],
      question: {
        prompt: { es: "¿Por qué B no quiere celebrar todavía?", en: "Why doesn't B want to celebrate yet?" },
        options: [
          { es: "Porque el cliente aún no firmó.", en: "Because the client hasn't signed yet." },
          { es: "Porque el cliente dijo que no.", en: "Because the client said no." },
          { es: "Porque está cansado.", en: "Because he's tired." },
          { es: "Porque no le gusta salir de noche.", en: "Because he doesn't like going out at night." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "proverbs", "work"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-quand-on-parle-du-loup", type: "bridge", onlyFor: "es", target: "Quand on parle du loup, on en voit la queue.",
      gloss: { es: "Hablando del rey de Roma, por la puerta se asoma.", en: "Speak of the devil." },
      question: {
        prompt: { es: "Llega justo la persona de la que hablabas. ¿Qué dices en francés?", en: "The person you were talking about walks in. What do you say in French?" },
        options: [
          "Quand on parle du loup, on en voit la queue.",
          "Quand on parle du roi, on en voit la porte.",
          "Quand le chat n'est pas là, les souris dansent.",
        ],
        answer: 0,
      },
      note: { es: "Literalmente: «cuando se habla del lobo, se le ve la cola»; a menudo se acorta a «Quand on parle du loup…»." },
      exercises: ["guess", "question"], tags: ["bridge", "proverbs"],
    },
  ]),
};
