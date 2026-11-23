import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u36",
  lang: "fr",
  index: 36,
  cefr: "C2",
  title: { target: "Le français dans le monde", es: "El francés en el mundo", en: "French around the world" },
  canDo: [
    { es: "Entiendo las diferencias principales entre el francés de Francia, Bélgica, Suiza y Quebec.", en: "I can understand the main differences between the French of France, Belgium, Switzerland and Quebec." },
    { es: "Reconozco belgicismos, helvetismos y quebequismos frecuentes.", en: "I can recognise common Belgian, Swiss and Quebec expressions." },
    { es: "Sé feminizar los nombres de profesiones (l'autrice, la cheffe, la professeure).", en: "I can use feminine job titles (l'autrice, la cheffe, la professeure)." },
  ],
  icon: "🌍",
  items: build("fr", 36, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "pays-francophone", type: "word", pos: "noun", target: "le pays francophone", gender: "m", plural: "les pays francophones", gloss: { es: "el país francófono", en: "the French-speaking country" }, distractors: ["le pays francophile", "le pays franc", "le paysan francophone"], note: { es: "francophone = que habla francés; francophile = que ama lo francés.", en: "francophone = French-speaking; francophile = fond of France." }, tags: ["francophonie"] },
    { id: "septante", type: "word", pos: "num", target: "septante", gloss: { es: "setenta (en Bélgica y Suiza)", en: "seventy (in Belgium and Switzerland)" }, distractors: ["septente", "sétante", "sept-dix"], note: { es: "En Francia: soixante-dix; en Bélgica y Suiza, septante.", en: "In France: soixante-dix; in Belgium and Switzerland, septante." }, grammar: ["fr-g-variation"], exercises: ["guess", "recognize", "listen"], tags: ["francophonie", "numbers", "regional"] },
    { id: "nonante", type: "word", pos: "num", target: "nonante", gloss: { es: "noventa (en Bélgica y Suiza)", en: "ninety (in Belgium and Switzerland)" }, distractors: ["neufante", "novante", "nonate"], note: { es: "En Francia: quatre-vingt-dix; en Suiza romanda también se oye huitante (ochenta).", en: "In France: quatre-vingt-dix; in French-speaking Switzerland you also hear huitante (eighty)." }, grammar: ["fr-g-variation"], exercises: ["guess", "recognize", "listen"], tags: ["francophonie", "numbers", "regional"] },
    { id: "courriel", type: "word", pos: "noun", target: "le courriel", gender: "m", plural: "les courriels", gloss: { es: "el correo electrónico (término recomendado)", en: "the email (official term)" }, accept: [{ text: "le mail" }, { text: "l'e-mail" }], distractors: ["le courrier", "la courriel", "le cour-riel"], note: { es: "Nació en Quebec, donde es la palabra habitual; en Francia se dice más «un mail».", en: "Coined in Quebec, where it's the usual word; in France people mostly say un mail." }, grammar: ["fr-g-variation"], tags: ["francophonie", "technology"] },
    { id: "quebecisme", type: "word", pos: "noun", target: "le québécisme", gender: "m", plural: "les québécismes", gloss: { es: "el quebequismo (expresión propia de Quebec)", en: "the Quebec French expression" }, distractors: ["le québécois", "le québecisme", "le quebecquisme"], note: { es: "Por ejemplo: magasiner (ir de compras), la fin de semaine (el fin de semana), le char (el auto).", en: "For example: magasiner (to go shopping), la fin de semaine (the weekend), le char (the car)." }, grammar: ["fr-g-variation"], tags: ["francophonie", "regional"] },
    { id: "belgicisme", type: "word", pos: "noun", target: "le belgicisme", gender: "m", plural: "les belgicismes", gloss: { es: "el belgicismo", en: "the Belgian French expression" }, distractors: ["le belgisme", "le belge", "la belgicité"], note: { es: "Por ejemplo: il drache (llueve a cántaros), le GSM (el celular), à tantôt (hasta luego).", en: "For example: il drache (it's pouring), le GSM (the mobile phone), à tantôt (see you later)." }, grammar: ["fr-g-variation"], tags: ["francophonie", "regional"] },
    { id: "helvetisme", type: "word", pos: "noun", target: "l'helvétisme", gender: "m", plural: "les helvétismes", gloss: { es: "el helvetismo (expresión del francés de Suiza)", en: "the Swiss French expression" }, distractors: ["l'helvète", "l'helvétique", "l'elvétisme"], note: { es: "Por ejemplo: le natel (el celular), la votation (la votación popular), s'encoubler (tropezar).", en: "For example: le natel (the mobile phone), la votation (the popular vote), s'encoubler (to trip)." }, grammar: ["fr-g-variation"], tags: ["francophonie", "regional"] },
    { id: "serpilliere", type: "word", pos: "noun", target: "la serpillière", gender: "f", plural: "les serpillières", gloss: { es: "el trapeador, el trapo del piso", en: "the floor cloth / mop" }, distractors: ["la serpentine", "la serviette", "la serrure"], note: { es: "En Bélgica: la wassingue o la loque; en Suiza: la panosse.", en: "In Belgium: la wassingue or la loque; in Switzerland: la panosse." }, grammar: ["fr-g-variation"], tags: ["francophonie", "home", "regional"] },
    { id: "feminisation", type: "word", pos: "noun", target: "la féminisation", gender: "f", plural: "les féminisations", gloss: { es: "la feminización (de los nombres de profesiones)", en: "the feminisation (of job titles)" }, distractors: ["la féminité", "le féminisme", "la féminine"], grammar: ["fr-g-feminisation"], tags: ["francophonie", "work", "language"] },
    { id: "autrice", type: "word", pos: "noun", target: "l'autrice", gender: "f", plural: "les autrices", gloss: { es: "la autora", en: "the (female) author" }, accept: [{ text: "l'auteure" }], distractors: ["l'auteuse", "l'autoresse", "la auteure"], note: { es: "En Quebec se prefiere «l'auteure»; en Francia avanza «l'autrice».", en: "Quebec prefers l'auteure; in France l'autrice is gaining ground." }, grammar: ["fr-g-feminisation"], tags: ["francophonie", "work", "literature"] },
    { id: "cheffe", type: "word", pos: "noun", target: "la cheffe", gender: "f", plural: "les cheffes", gloss: { es: "la jefa", en: "the (female) boss / chef" }, accept: [{ text: "la chef" }], distractors: ["le cheffe", "la chéfette", "la chèfe"], grammar: ["fr-g-feminisation"], tags: ["francophonie", "work"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-tenvoie-un-courriel", type: "sentence", target: "Je t'envoie un courriel ce soir.",
      gloss: { es: "Te mando un correo esta noche.", en: "I'll send you an email tonight." },
      accept: [{ text: "Je t'envoie un mail ce soir." }, { text: "Je t'envoie un e-mail ce soir." }],
      distractors: ["courrier", "envoies", "nuit"],
      grammar: ["fr-g-variation"], tags: ["francophonie", "technology"],
    },
    {
      id: "dejeune-a-midi-dine", type: "sentence", target: "On déjeune à midi et on dîne vers vingt heures.",
      gloss: { es: "Almorzamos al mediodía y cenamos hacia las ocho.", en: "We have lunch at noon and dinner around eight." },
      distractors: ["dînons", "soupe", "midis"],
      note: { es: "En Bélgica, Suiza y Quebec: le déjeuner (desayuno), le dîner (almuerzo), le souper (cena).", en: "In Belgium, Switzerland and Quebec: le déjeuner (breakfast), le dîner (lunch), le souper (dinner)." },
      grammar: ["fr-g-variation"], tags: ["francophonie", "food", "regional"],
    },
    {
      id: "la-ministre-a-nomme", type: "sentence", target: "La ministre a nommé une nouvelle directrice.",
      gloss: { es: "La ministra nombró a una nueva directora.", en: "The (female) minister appointed a new director." },
      distractors: ["Le", "nouveau", "directeur"],
      grammar: ["fr-g-feminisation"], tags: ["francophonie", "politics", "work"],
    },
    {
      id: "une-autrice-reconnue", type: "sentence", target: "C'est une autrice reconnue.",
      gloss: { es: "Es una autora reconocida.", en: "She's a well-known author." },
      accept: [{ text: "C'est une auteure reconnue." }],
      distractors: ["auteur", "reconnu", "un"],
      grammar: ["fr-g-feminisation"], tags: ["francophonie", "literature"],
    },
    {
      id: "langue-officielle-afrique", type: "sentence", target: "Le français est la langue officielle de nombreux pays d'Afrique.",
      gloss: { es: "El francés es la lengua oficial de muchos países de África.", en: "French is the official language of many African countries." },
      distractors: ["officiel", "nombreuses", "langues"],
      tags: ["francophonie"],
    },
    {
      id: "accent-a-couper-au-couteau", type: "sentence", target: "Elle a un accent québécois à couper au couteau.",
      gloss: { es: "Tiene un acento quebequense muy marcado.", en: "She has a very thick Quebec accent." },
      distractors: ["coupé", "couteaux", "québécoise"],
      tags: ["francophonie", "idioms"],
    },
    {
      id: "quatre-langues-nationales", type: "sentence", target: "Il y a quatre langues nationales en Suisse.",
      gloss: { es: "Hay cuatro idiomas nacionales en Suiza.", en: "There are four national languages in Switzerland." },
      distractors: ["nationaux", "Suède", "langages"],
      note: { es: "Alemán, francés, italiano y romanche.", en: "German, French, Italian and Romansh." },
      tags: ["francophonie"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-variation", type: "pattern", target: "France : soixante-dix · Belgique / Suisse : septante · Québec : courriel, magasiner",
      gloss: { es: "el francés de Bélgica, Suiza y Quebec", en: "the French of Belgium, Switzerland and Quebec" },
      pattern: {
        rule: {
          es: "La gramática es casi la misma en todo el mundo francófono; cambian la pronunciación, algunos números, los nombres de las comidas y parte del vocabulario. En Bélgica y Suiza: septante, nonante; en Quebec: courriel, magasiner, la fin de semaine.",
          en: "Grammar is nearly the same across the French-speaking world; pronunciation, some numbers, meal names and part of the vocabulary change. Belgium and Switzerland: septante, nonante; Quebec: courriel, magasiner, la fin de semaine.",
        },
        table: [["France", "Belgique / Suisse / Québec"], ["soixante-dix", "septante (BE, CH)"], ["le petit-déjeuner", "le déjeuner"], ["le déjeuner", "le dîner"], ["le dîner", "le souper"], ["faire les magasins", "magasiner (QC)"]],
      },
      question: {
        prompt: { es: "En gran parte de la Suiza francófona, «quatre-vingts» se dice…", en: "In much of French-speaking Switzerland, quatre-vingts is…" },
        options: ["huitante", "septante", "nonante", "octante-dix"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-variation"], tags: ["grammar", "francophonie", "regional"],
    },
    {
      id: "pat-feminisation", type: "pattern", target: "un auteur → une autrice · un chef → une cheffe · un professeur → une professeure",
      gloss: { es: "la feminización de las profesiones", en: "feminine job titles" },
      pattern: {
        rule: {
          es: "Desde 2019 la Academia francesa acepta los femeninos de profesiones, que ya eran habituales en Quebec, Bélgica y Suiza. -teur → -trice (directrice, autrice), -eur → -eure (professeure, ingénieure), y palabras en -e solo cambian el artículo (la ministre, la maire).",
          en: "Since 2019 the Académie française accepts feminine job titles, already common in Quebec, Belgium and Switzerland. -teur → -trice (directrice, autrice), -eur → -eure (professeure, ingénieure), and words in -e only change the article (la ministre, la maire).",
        },
        table: [["-teur → -trice", "la directrice"], ["-eur → -eure", "la professeure"], ["-e → article", "la ministre"], ["-ier → -ière", "la pompière"]],
      },
      question: {
        prompt: { es: "¿Cuál es el femenino de «le directeur»?", en: "What's the feminine of le directeur?" },
        options: ["la directrice", "la directeure", "la directeuse", "la directresse"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-feminisation"], tags: ["grammar", "work", "language"],
    },
    {
      id: "tab-feminisation", type: "paradigm", target: "noms de métiers au féminin",
      gloss: { es: "profesiones en femenino", en: "job titles in the feminine" },
      grammar: ["fr-g-feminisation"],
      paradigm: {
        caption: { es: "Escribe el femenino (con artículo)", en: "Write the feminine (with its article)" },
        cells: [
          { label: "le directeur", answer: "la directrice", ruleId: "fr-g-feminisation" },
          { label: "le professeur", answer: "la professeure", ruleId: "fr-g-feminisation" },
          { label: "l'auteur", answer: "l'autrice", accept: ["l'auteure"], ruleId: "fr-g-feminisation" },
          { label: "le chef", answer: "la cheffe", accept: ["la chef"], ruleId: "fr-g-feminisation" },
          { label: "le pompier", answer: "la pompière", ruleId: "fr-g-feminisation" },
          { label: "l'ingénieur", answer: "l'ingénieure", ruleId: "fr-g-feminisation" },
          { label: "le maire", answer: "la maire", ruleId: "fr-g-feminisation" },
        ],
      },
      tags: ["grammar", "work", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-montreal", type: "listening",
      target: "Salut ! Moi, je viens de Montréal. Ici, la fin de semaine, on aime aller magasiner au centre-ville, puis le soir, on soupe en famille. Quand je vais à Paris, mes amis rient quand je dis que je vais déjeuner à huit heures du matin !",
      gloss: {
        es: "¡Hola! Yo soy de Montreal. Aquí, el fin de semana, nos gusta ir de compras al centro, y luego por la noche cenamos en familia. Cuando voy a París, mis amigos se ríen cuando digo que voy a «déjeuner» a las ocho de la mañana.",
        en: "Hi! I'm from Montreal. Here, at the weekend, we like to go shopping downtown, then in the evening we have dinner with the family. When I go to Paris, my friends laugh when I say I'm going to 'déjeuner' at eight in the morning!",
      },
      question: {
        prompt: { es: "¿Por qué se ríen sus amigos de París?", en: "Why do the speaker's Paris friends laugh?" },
        options: [
          { es: "Porque en Francia «déjeuner» es almorzar, no desayunar.", en: "Because in France déjeuner means lunch, not breakfast." },
          { es: "Porque desayuna muy tarde.", en: "Because he has breakfast very late." },
          { es: "Porque no le gusta ir de compras.", en: "Because he doesn't like shopping." },
          { es: "Porque habla inglés.", en: "Because he speaks English." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-variation"], tags: ["listening", "francophonie", "regional"],
    },
    {
      id: "dlg-bruxelles", type: "dialogue", target: "Ça fait nonante euros.",
      gloss: { es: "Son noventa euros.", en: "That'll be ninety euros." },
      turns: [
        { who: "A", target: "Bonjour, je voudrais ces deux livres, s'il vous plaît.", gloss: { es: "Buenos días, quisiera estos dos libros, por favor.", en: "Hello, I'd like these two books, please." } },
        { who: "B", target: "Très bien. Ça fait nonante euros. Il drache dehors, vous voulez un sac ?", gloss: { es: "Muy bien. Son noventa euros. Está lloviendo a cántaros, ¿quiere una bolsa?", en: "Very good. That'll be ninety euros. It's pouring outside, would you like a bag?" } },
        { who: "A", target: "Nonante… ah oui, quatre-vingt-dix ! Volontiers, merci.", gloss: { es: "«Nonante»… ¡ah, sí, noventa! Con gusto, gracias.", en: "Nonante… oh yes, ninety! Yes please, thank you." } },
        { who: "B", target: "Vous êtes français, vous ! Allez, à tantôt !", gloss: { es: "¡Usted es francés! ¡Bueno, hasta luego!", en: "You're French, aren't you! Right, see you later!" } },
      ],
      question: {
        prompt: { es: "¿Dónde ocurre probablemente esta escena?", en: "Where does this scene probably take place?" },
        options: [
          { es: "En Bélgica.", en: "In Belgium." },
          { es: "En París.", en: "In Paris." },
          { es: "En Quebec.", en: "In Quebec." },
          { es: "En Marsella.", en: "In Marseille." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-variation"], tags: ["dialogue", "francophonie", "regional"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-dejeuner-quebec", type: "bridge", onlyFor: "en", target: "le déjeuner (au Québec)",
      gloss: { es: "el desayuno (en Quebec)", en: "breakfast (in Quebec)" },
      question: {
        prompt: { es: "En Montreal, «le déjeuner» es…", en: "In Montreal, le déjeuner is…" },
        options: [
          { es: "el desayuno", en: "breakfast" },
          { es: "el almuerzo", en: "lunch" },
          { es: "la cena", en: "dinner" },
        ],
        answer: 0,
      },
      note: { en: "Quebec, Belgium and Switzerland keep the older meal names: déjeuner, dîner, souper; France says petit-déjeuner, déjeuner, dîner." },
      exercises: ["guess", "question"], tags: ["bridge", "francophonie", "food"],
    },
  ]),
};
