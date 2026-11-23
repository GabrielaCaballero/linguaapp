import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u02",
  lang: "fr",
  index: 2,
  cefr: "A1.1",
  title: { target: "Je me présente", es: "Me presento", en: "About me" },
  canDo: [
    { es: "Puedo decir de dónde soy, dónde vivo y qué idiomas hablo.", en: "I can say where I'm from, where I live and which languages I speak." },
    { es: "Puedo preguntarle lo mismo a otra persona.", en: "I can ask someone the same questions." },
    { es: "Sé conjugar «être» y los verbos en -er en presente.", en: "I can conjugate être and -er verbs in the present tense." },
  ],
  icon: "🙋",
  items: build("fr", 2, "A1.1", [
    // ── Nationalities & languages ────────────────────────────
    {
      id: "espagnol", type: "word", pos: "adj", target: "espagnol",
      gloss: { es: "español/a", en: "Spanish" },
      forms: { m: "espagnol", f: "espagnole", mpl: "espagnols", fpl: "espagnoles" },
      accept: [{ text: "espagnole" }],
      distractors: ["espagnolle", "Espagne", "espanol"],
      note: { es: "Las nacionalidades van en minúscula: je suis espagnol/e. El país sí: l'Espagne.", en: "Nationalities are lowercase: je suis espagnol/e. Countries aren't: l'Espagne." },
      tags: ["nationality"],
    },
    {
      id: "francais", type: "word", pos: "adj", target: "français",
      gloss: { es: "francés/francesa", en: "French" },
      forms: { m: "français", f: "française", mpl: "français", fpl: "françaises" },
      accept: [{ text: "française" }],
      distractors: ["France", "francais", "franche"],
      note: { es: "La ç suena «s». En femenino suena la s: française ≈ «fransés».", en: "ç sounds like 's'. In the feminine the s is heard: française ≈ 'fron-sez'." },
      tags: ["nationality", "language"],
    },
    {
      id: "mexicain", type: "word", pos: "adj", target: "mexicain",
      gloss: { es: "mexicano/a", en: "Mexican" },
      forms: { m: "mexicain", f: "mexicaine" },
      accept: [{ text: "mexicaine" }],
      distractors: ["mexicane", "Mexique", "mexican"],
      note: { es: "En masculino «-ain» es nasal; en femenino «-aine» suena «en».", en: "Masculine '-ain' is nasal; feminine '-aine' sounds like 'en'." },
      tags: ["nationality"],
    },
    {
      id: "anglais", type: "word", pos: "adj", target: "anglais",
      gloss: { es: "inglés/inglesa (y el idioma inglés)", en: "English (and the English language)" },
      forms: { m: "anglais", f: "anglaise" },
      accept: [{ text: "anglaise" }],
      distractors: ["Angleterre", "anglois", "englais"],
      tags: ["nationality", "language"],
    },
    {
      id: "pays", type: "word", pos: "noun", target: "le pays", gender: "m", plural: "les pays",
      gloss: { es: "el país", en: "the country" },
      distractors: ["la pays", "le paysage", "le paix"],
      note: { es: "Suena «pei-í». Termina en s también en singular.", en: "Sounds like 'pay-ee'. It ends in s even in the singular." },
      tags: ["nationality"],
    },
    {
      id: "langue", type: "word", pos: "noun", target: "la langue", gender: "f", plural: "les langues",
      gloss: { es: "el idioma / la lengua", en: "the language" },
      distractors: ["le langue", "la longue", "le langage"],
      tags: ["language"],
    },
    // ── Verbs ────────────────────────────────────────────────
    {
      id: "parler", type: "word", pos: "verb", target: "parler",
      gloss: { es: "hablar", en: "to speak" },
      forms: { je: "parle", tu: "parles", "il/elle": "parle", nous: "parlons", vous: "parlez", "ils/elles": "parlent" },
      distractors: ["partir", "parier", "pleurer"],
      tags: ["verbs", "present"],
    },
    {
      id: "habiter", type: "word", pos: "verb", target: "habiter",
      gloss: { es: "vivir (en un lugar)", en: "to live (somewhere)" },
      forms: { je: "habite", tu: "habites", "il/elle": "habite", nous: "habitons", vous: "habitez", "ils/elles": "habitent" },
      distractors: ["habituer", "abîmer", "hésiter"],
      note: { es: "La h no suena y permite la elisión: j'habite.", en: "The h is silent and allows elision: j'habite." },
      tags: ["verbs", "present"],
    },
    {
      id: "travailler", type: "word", pos: "verb", target: "travailler",
      gloss: { es: "trabajar", en: "to work" },
      distractors: ["travailleur", "voyager", "traverser"],
      note: { es: "«-ill-» suena «y»: travailler ≈ «travayé».", en: "'-ill-' sounds like 'y': travailler ≈ 'tra-va-yay'." },
      tags: ["verbs", "present"],
    },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-suis-espagnol", type: "sentence", target: "Je suis espagnol.",
      gloss: { es: "Soy español/a.", en: "I'm Spanish." },
      accept: [{ text: "Je suis espagnole." }],
      errors: [{ text: "Je suis Espagnol.", feedback: { es: "Las nacionalidades se escriben en minúscula como adjetivo: espagnol.", en: "Nationality adjectives are lowercase: espagnol." } }],
      distractors: ["es", "suit", "Espagne"],
      tags: ["nationality"],
    },
    {
      id: "jhabite-a-lyon", type: "sentence", target: "J'habite à Lyon.",
      gloss: { es: "Vivo en Lyon.", en: "I live in Lyon." },
      errors: [{ text: "J'habite en Lyon.", feedback: { es: "Con ciudades se usa «à»: à Lyon, à Madrid.", en: "Cities take 'à': à Lyon, à Madrid." }, ruleId: "fr-g-villes-pays" }],
      distractors: ["en", "habites", "au"],
      tags: ["home", "prepositions"],
    },
    {
      id: "tu-habites-ou", type: "phrase", pos: "phrase", target: "Tu habites où ?", register: "informal",
      gloss: { es: "¿Dónde vives?", en: "Where do you live? (informal)" },
      accept: [{ text: "Où est-ce que tu habites ?" }, { text: "Où habites-tu ?" }],
      distractors: ["Vous habitez où ?", "Tu habites ou ?", "Tu es d'où ?"],
      note: { es: "«où» con acento = dónde; «ou» sin acento = o.", en: "'où' with an accent = where; 'ou' without it = or." },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "vous-etes-dou", type: "phrase", pos: "phrase", target: "Vous êtes d'où ?", register: "formal",
      gloss: { es: "¿De dónde es (usted)?", en: "Where are you from? (formal)" },
      accept: [{ text: "D'où êtes-vous ?" }, { text: "Vous venez d'où ?" }],
      distractors: ["Tu es d'où ?", "Vous êtes où ?", "Vous habitez où ?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "tu-es-dou", type: "phrase", pos: "phrase", target: "Tu es d'où ?", register: "informal",
      gloss: { es: "¿De dónde eres?", en: "Where are you from? (informal)" },
      accept: [{ text: "Tu viens d'où ?" }, { text: "D'où es-tu ?" }],
      distractors: ["Vous êtes d'où ?", "Tu es où ?", "Tu habites où ?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "je-parle-un-peu", type: "sentence", target: "Je parle espagnol et un peu français.",
      gloss: { es: "Hablo español y un poco de francés.", en: "I speak Spanish and a little French." },
      accept: [{ text: "Je parle espagnol et un peu de français." }],
      distractors: ["parles", "le", "beaucoup"],
      note: { es: "Con «parler» el idioma suele ir sin artículo: je parle anglais.", en: "With parler the language usually has no article: je parle anglais." },
      tags: ["language"],
    },
    {
      id: "vous-parlez-anglais", type: "sentence", target: "Vous parlez anglais ?", register: "formal",
      gloss: { es: "¿Habla (usted) inglés?", en: "Do you speak English? (formal)" },
      accept: [{ text: "Parlez-vous anglais ?" }, { text: "Est-ce que vous parlez anglais ?" }],
      distractors: ["parles", "tu", "parlé"],
      tags: ["language", "register"],
    },
    {
      id: "je-travaille-dans", type: "sentence", target: "Je travaille dans un hôpital.",
      gloss: { es: "Trabajo en un hospital.", en: "I work in a hospital." },
      distractors: ["travailles", "en", "une"],
      note: { es: "«dans» = dentro de un lugar concreto: dans un bureau, dans une école.", en: "'dans' = inside a specific place: dans un bureau, dans une école." },
      tags: ["work"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-etre", type: "pattern", target: "je suis, tu es, il est…",
      gloss: { es: "el verbo «être» (ser/estar)", en: "the verb être (to be)" },
      pattern: {
        rule: {
          es: "«être» es irregular y sirve para ser y estar: je suis fatigué/e (estoy cansado/a), je suis professeur (soy profesor/a). En francés el sujeto siempre se dice.",
          en: "être is irregular: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. In French the subject pronoun is never dropped.",
        },
        table: [["je suis", "nous sommes"], ["tu es", "vous êtes"], ["il / elle / on est", "ils / elles sont"]],
      },
      question: {
        prompt: { es: "Completa: «Nous ___ mexicains.»", en: "Complete: 'Nous ___ mexicains.'" },
        options: ["sommes", "sont", "êtes", "est"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-etre"], tags: ["grammar", "present"],
    },
    {
      id: "tab-etre", type: "paradigm", target: "être — présent", spoken: "être",
      gloss: { es: "«être» (ser/estar) en presente", en: "être (to be) — present" },
      grammar: ["fr-g-etre"],
      paradigm: {
        caption: { es: "Conjuga «être» en presente", en: "Conjugate être in the present tense" },
        cells: [
          { label: "je", answer: "suis", ruleId: "fr-g-etre" },
          { label: "tu", answer: "es", ruleId: "fr-g-etre" },
          { label: "il / elle", answer: "est", ruleId: "fr-g-etre" },
          { label: "nous", answer: "sommes", ruleId: "fr-g-etre" },
          { label: "vous", answer: "êtes", ruleId: "fr-g-etre" },
          { label: "ils / elles", answer: "sont", ruleId: "fr-g-etre" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-er", type: "pattern", target: "je parle, tu parles, nous parlons…",
      gloss: { es: "verbos en -er en presente", en: "-er verbs in the present" },
      pattern: {
        rule: {
          es: "Quita -er y añade -e, -es, -e, -ons, -ez, -ent. Ojo: -e, -es y -ent no suenan, así que je parle, tu parles e ils parlent se pronuncian igual.",
          en: "Drop -er and add -e, -es, -e, -ons, -ez, -ent. Careful: -e, -es and -ent are silent, so je parle, tu parles and ils parlent sound the same.",
        },
        table: [["je parle", "nous parlons"], ["tu parles", "vous parlez"], ["il / elle parle", "ils / elles parlent"]],
      },
      question: {
        prompt: { es: "Completa: «Ils ___ à Lille.» (habiter)", en: "Complete: 'Ils ___ à Lille.' (habiter)" },
        options: ["habitent", "habitez", "habitons", "habites"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-er"], tags: ["grammar", "present"],
    },
    {
      id: "tab-parler", type: "paradigm", target: "parler — présent", spoken: "parler",
      gloss: { es: "«parler» (hablar) en presente", en: "parler (to speak) — present" },
      grammar: ["fr-g-er"],
      paradigm: {
        caption: { es: "Conjuga «parler» en presente", en: "Conjugate parler in the present tense" },
        cells: [
          { label: "je", answer: "parle", ruleId: "fr-g-er" },
          { label: "tu", answer: "parles", ruleId: "fr-g-er" },
          { label: "il / elle", answer: "parle", ruleId: "fr-g-er" },
          { label: "nous", answer: "parlons", ruleId: "fr-g-er" },
          { label: "vous", answer: "parlez", ruleId: "fr-g-er" },
          { label: "ils / elles", answer: "parlent", ruleId: "fr-g-er" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-adj-genre", type: "pattern", target: "espagnol → espagnole",
      gloss: { es: "masculino y femenino de los adjetivos", en: "masculine and feminine adjectives" },
      pattern: {
        rule: {
          es: "En general el femenino añade -e: espagnol → espagnole, français → française. Si ya termina en -e no cambia: belge, suisse. Muchas veces la consonante final empieza a sonar.",
          en: "The feminine usually adds -e: espagnol → espagnole, français → française. Adjectives already ending in -e don't change: belge, suisse. Often the final consonant becomes audible.",
        },
        table: [["masculin", "féminin"], ["espagnol", "espagnole"], ["italien", "italienne"], ["suisse", "suisse"]],
      },
      question: {
        prompt: { es: "Completa: «Maria est ___.» (italien)", en: "Complete: 'Maria est ___.' (italien)" },
        options: ["italienne", "italien", "italiene", "italiens"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-adj-genre"], tags: ["grammar", "nationality"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-presentation", type: "listening",
      target: "Bonjour, je m'appelle Lucie. Je suis belge, mais j'habite à Paris. Je parle français, anglais et un peu espagnol.",
      gloss: {
        es: "Hola, me llamo Lucie. Soy belga, pero vivo en París. Hablo francés, inglés y un poco de español.",
        en: "Hello, my name is Lucie. I'm Belgian, but I live in Paris. I speak French, English and a little Spanish.",
      },
      question: {
        prompt: { es: "¿De dónde es Lucie?", en: "Where is Lucie from?" },
        options: [
          { es: "De Bélgica", en: "Belgium" },
          { es: "De Francia", en: "France" },
          { es: "De España", en: "Spain" },
          { es: "De Inglaterra", en: "England" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "introductions"],
    },
    {
      id: "dlg-dou", type: "dialogue", target: "Je suis mexicaine.", register: "informal",
      gloss: { es: "Soy mexicana.", en: "I'm Mexican." },
      turns: [
        { who: "A", target: "Salut ! Tu es d'où ?", gloss: { es: "¡Hola! ¿De dónde eres?", en: "Hi! Where are you from?" } },
        { who: "B", target: "Je suis mexicaine, de Puebla. Et toi ?", gloss: { es: "Soy mexicana, de Puebla. ¿Y tú?", en: "I'm Mexican, from Puebla. And you?" } },
        { who: "A", target: "Moi, je suis français. J'habite à Marseille.", gloss: { es: "Yo soy francés. Vivo en Marsella.", en: "I'm French. I live in Marseille." } },
        { who: "B", target: "Tu parles espagnol ?", gloss: { es: "¿Hablas español?", en: "Do you speak Spanish?" } },
        { who: "A", target: "Oui, un peu !", gloss: { es: "¡Sí, un poco!", en: "Yes, a little!" } },
      ],
      question: {
        prompt: { es: "¿Dónde vive el chico francés?", en: "Where does the French man live?" },
        options: [
          { es: "En Marsella", en: "In Marseille" },
          { es: "En Puebla", en: "In Puebla" },
          { es: "En París", en: "In Paris" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-embarrasse", type: "bridge", onlyFor: "es", target: "embarrassé",
      gloss: { es: "incómodo/a, avergonzado/a", en: "embarrassed" },
      question: {
        prompt: { es: "«Je suis embarrassée» significa…", en: "'Je suis embarrassée' means…" },
        options: [
          { es: "Estoy incómoda, me da vergüenza", en: "I'm embarrassed" },
          { es: "Estoy embarazada", en: "I'm pregnant" },
          { es: "Estoy enojada", en: "I'm angry" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: embarrassé/e = incómodo/a. «Embarazada» se dice «enceinte»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-liaison", type: "bridge", onlyFor: "es", target: "vous êtes",
      gloss: { es: "usted es / ustedes son", en: "you are (formal or plural)" },
      distractors: ["vous ête", "vous et", "vous étez"],
      note: { es: "Liaison: la s muda de «vous» suena «z» delante de vocal: vous êtes ≈ «vuzet»." },
      exercises: ["guess", "recall"], tags: ["bridge", "liaison"],
    },
  ]),
};
