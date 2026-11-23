import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u10",
  lang: "fr",
  index: 10,
  cefr: "A2",
  title: { target: "Le week-end", es: "El fin de semana", en: "The weekend" },
  canDo: [
    { es: "Puedo contar lo que hice el fin de semana pasado.", en: "I can say what I did last weekend." },
    { es: "Puedo hablar de mis planes para el próximo fin de semana.", en: "I can talk about my plans for next weekend." },
    { es: "Sé formar el passé composé con «avoir» y el futuro próximo (je vais + infinitivo).", en: "I can form the passé composé with avoir and the near future (je vais + infinitive)." },
  ],
  icon: "📅",
  items: build("fr", 10, "A2", [
    { id: "hier", type: "word", pos: "adv", target: "hier", gloss: { es: "ayer", en: "yesterday" }, distractors: ["demain", "hiver", "aujourd'hui"], note: { es: "La h no suena: hier ≈ «iér».", en: "The h is silent: hier ≈ 'yair'." }, tags: ["time", "past"] },
    { id: "demain", type: "word", pos: "adv", target: "demain", gloss: { es: "mañana (el día siguiente)", en: "tomorrow" }, distractors: ["hier", "matin", "demi"], tags: ["time", "future"] },
    { id: "derniere", type: "phrase", pos: "phrase", target: "la semaine dernière", gloss: { es: "la semana pasada", en: "last week" }, distractors: ["la semaine prochaine", "la dernière semaine", "la semaine passée là"], note: { es: "Con el sentido de «pasado», «dernier/dernière» va detrás: le mois dernier.", en: "Meaning 'last', dernier/dernière goes after the noun: le mois dernier." }, tags: ["time", "past"] },
    { id: "prochain", type: "phrase", pos: "phrase", target: "le week-end prochain", gloss: { es: "el próximo fin de semana", en: "next weekend" }, accept: [{ text: "le prochain week-end" }], distractors: ["le prochain week-end dernier", "le week-end dernier", "la semaine prochaine"], tags: ["time", "future"] },
    { id: "voir", type: "word", pos: "verb", target: "voir", gloss: { es: "ver", en: "to see" }, forms: { pp: "vu", je: "vois", nous: "voyons" }, distractors: ["avoir", "vouloir", "voler"], tags: ["verbs"] },
    { id: "faire-la-fete", type: "phrase", pos: "phrase", target: "faire la fête", gloss: { es: "ir de fiesta, salir de parranda", en: "to party" }, distractors: ["faire une fête", "fêter la fête", "faire la faîte"], tags: ["weekend"] },
    { id: "se-reposer", type: "word", pos: "verb", target: "se reposer", gloss: { es: "descansar", en: "to rest" }, distractors: ["reposer", "se poser", "se rappeler"], tags: ["weekend", "reflexive"] },
    { id: "randonnee", type: "word", pos: "noun", target: "la randonnée", gender: "f", plural: "les randonnées", gloss: { es: "la caminata (el senderismo)", en: "the hike" }, distractors: ["le randonnée", "la rançon", "la tournée"], note: { es: "faire une randonnée = salir de caminata.", en: "faire une randonnée = to go hiking." }, tags: ["weekend"] },
    { id: "exposition", type: "word", pos: "noun", target: "l'exposition", gender: "f", plural: "les expositions", gloss: { es: "la exposición (de arte)", en: "the exhibition" }, distractors: ["le exposition", "l'explication", "l'expédition"], tags: ["weekend", "culture"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "jai-vu-un-film", type: "sentence", target: "Samedi, j'ai vu un film avec Léa.",
      gloss: { es: "El sábado vi una película con Léa.", en: "On Saturday I saw a film with Léa." },
      errors: [{ text: "Samedi, j'ai voir un film avec Léa.", feedback: { es: "Tras «avoir» va el participio: vu (de voir).", en: "After avoir use the past participle: vu (from voir)." }, ruleId: "fr-g-participes" }],
      distractors: ["vois", "suis", "voyé"],
      tags: ["past"],
    },
    {
      id: "nous-avons-mange", type: "sentence", target: "Nous avons mangé au restaurant.",
      gloss: { es: "Comimos en el restaurante.", en: "We ate at the restaurant." },
      errors: [
        { text: "Nous avons manger au restaurant.", feedback: { es: "El participio de -er termina en -é: mangé (suena igual, se escribe distinto).", en: "The -er participle ends in -é: mangé (same sound, different spelling)." }, ruleId: "fr-g-pc-avoir" },
        { text: "Nous sommes mangé au restaurant.", feedback: { es: "manger va con avoir: nous avons mangé.", en: "manger takes avoir: nous avons mangé." }, ruleId: "fr-g-pc-avoir" },
      ],
      distractors: ["sommes", "manger", "à le"],
      tags: ["past", "food"],
    },
    {
      id: "tu-as-fait-quoi", type: "phrase", pos: "phrase", target: "Qu'est-ce que tu as fait ce week-end ?", register: "informal",
      gloss: { es: "¿Qué hiciste este fin de semana?", en: "What did you do this weekend?" },
      accept: [{ text: "Tu as fait quoi ce week-end ?" }],
      distractors: ["Qu'est-ce que vous avez fait ce week-end ?", "Qu'est-ce que tu fais ce week-end ?", "Qu'est-ce que tu as fais ce week-end ?"],
      tags: ["past", "questions", "chunk"],
    },
    {
      id: "je-nai-rien-fait", type: "sentence", target: "Je n'ai rien fait de spécial.",
      gloss: { es: "No hice nada especial.", en: "I didn't do anything special." },
      errors: [{ text: "Je n'ai fait rien de spécial.", feedback: { es: "En el passé composé, la negación rodea al auxiliar: je n'ai rien fait.", en: "In the passé composé the negation goes around the auxiliary: je n'ai rien fait." }, ruleId: "fr-g-pc-avoir" }],
      distractors: ["pas", "faire", "suis"],
      tags: ["past", "negation"],
    },
    {
      id: "je-vais-me-reposer", type: "sentence", target: "Ce week-end, je vais me reposer.",
      gloss: { es: "Este fin de semana voy a descansar.", en: "This weekend I'm going to rest." },
      errors: [{ text: "Ce week-end, je vais reposer.", feedback: { es: "Es pronominal: je vais me reposer.", en: "It's reflexive: je vais me reposer." }, ruleId: "fr-g-pronominaux" }],
      distractors: ["vas", "à", "reposé"],
      tags: ["future", "weekend"],
    },
    {
      id: "on-va-faire-randonnee", type: "sentence", target: "Dimanche, on va faire une randonnée.",
      gloss: { es: "El domingo vamos a salir de caminata.", en: "On Sunday we're going hiking." },
      accept: [{ text: "Dimanche, nous allons faire une randonnée." }],
      distractors: ["fait", "allez", "un"],
      tags: ["future", "weekend"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-pc-avoir", type: "pattern", target: "j'ai mangé · tu as fini · il a vendu",
      gloss: { es: "passé composé con «avoir»", en: "passé composé with avoir" },
      pattern: {
        rule: {
          es: "Es el pasado de acciones terminadas (comí, he comido): avoir en presente + participio. Participio regular: -er → -é, -ir → -i, -re → -u.",
          en: "It's the past for completed actions (I ate, I have eaten): avoir in the present + past participle. Regular participles: -er → -é, -ir → -i, -re → -u.",
        },
        table: [["manger", "j'ai mangé"], ["finir", "j'ai fini"], ["attendre", "j'ai attendu"]],
      },
      question: {
        prompt: { es: "Completa: «Hier, nous ___ un livre.» (acheter)", en: "Complete: 'Hier, nous ___ un livre.' (acheter)" },
        options: ["avons acheté", "sommes achetés", "avons acheter", "achetons"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-pc-avoir"], tags: ["grammar", "past"],
    },
    {
      id: "tab-pc-manger", type: "paradigm", target: "manger — passé composé", spoken: "manger, passé composé",
      gloss: { es: "«manger» (comer) en passé composé", en: "manger (to eat) — passé composé" },
      grammar: ["fr-g-pc-avoir"],
      paradigm: {
        caption: { es: "Conjuga «manger» en passé composé", en: "Conjugate manger in the passé composé" },
        cells: [
          { label: "j'", answer: "ai mangé", ruleId: "fr-g-pc-avoir" },
          { label: "tu", answer: "as mangé", ruleId: "fr-g-pc-avoir" },
          { label: "il / elle", answer: "a mangé", ruleId: "fr-g-pc-avoir" },
          { label: "nous", answer: "avons mangé", ruleId: "fr-g-pc-avoir" },
          { label: "vous", answer: "avez mangé", ruleId: "fr-g-pc-avoir" },
          { label: "ils / elles", answer: "ont mangé", ruleId: "fr-g-pc-avoir" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "pat-participes", type: "pattern", target: "fait · pris · vu · bu · eu · été",
      gloss: { es: "participios irregulares", en: "irregular past participles" },
      pattern: {
        rule: {
          es: "Los verbos más frecuentes tienen participio irregular y hay que aprenderlos: faire → fait, prendre → pris, voir → vu, boire → bu, avoir → eu, être → été, lire → lu, écrire → écrit.",
          en: "The most common verbs have irregular participles to learn by heart: faire → fait, prendre → pris, voir → vu, boire → bu, avoir → eu, être → été, lire → lu, écrire → écrit.",
        },
        table: [["faire", "fait"], ["prendre", "pris"], ["voir", "vu"], ["boire", "bu"], ["être", "été"]],
      },
      question: {
        prompt: { es: "Completa: «J'ai ___ le métro.» (prendre)", en: "Complete: 'J'ai ___ le métro.' (prendre)" },
        options: ["pris", "prendu", "prené", "prit"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-participes"], tags: ["grammar", "past"],
    },
    {
      id: "tab-participes", type: "paradigm", target: "participes passés irréguliers", spoken: "participes passés",
      gloss: { es: "participios irregulares frecuentes", en: "common irregular participles" },
      grammar: ["fr-g-participes"],
      paradigm: {
        caption: { es: "Escribe el participio", en: "Write the past participle" },
        cells: [
          { label: "faire", answer: "fait", ruleId: "fr-g-participes" },
          { label: "prendre", answer: "pris", ruleId: "fr-g-participes" },
          { label: "voir", answer: "vu", ruleId: "fr-g-participes" },
          { label: "boire", answer: "bu", ruleId: "fr-g-participes" },
          { label: "avoir", answer: "eu", ruleId: "fr-g-participes" },
          { label: "être", answer: "été", ruleId: "fr-g-participes" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "pat-futur-proche", type: "pattern", target: "je vais partir · on va manger",
      gloss: { es: "futuro próximo: aller + infinitivo", en: "near future: aller + infinitive" },
      pattern: {
        rule: {
          es: "Igual que «voy a + infinitivo»: aller en presente + infinitivo, sin «à». Es el futuro más común al hablar.",
          en: "Like 'going to + verb': aller in the present + infinitive, with no 'à'. It's the most common future in speech.",
        },
        table: [["je vais", "nous allons"], ["tu vas", "vous allez"], ["il / elle va", "ils / elles vont"]],
      },
      question: {
        prompt: { es: "¿Cómo se dice «Vamos a viajar»?", en: "How do you say 'We're going to travel'?" },
        options: ["Nous allons voyager.", "Nous allons à voyager.", "Nous allons voyagé.", "Nous vont voyager."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-futur-proche"], tags: ["grammar", "future"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-week-end", type: "listening",
      target: "Samedi matin, j'ai fait le ménage. L'après-midi, j'ai vu une exposition avec ma sœur et le soir, nous avons dîné chez des amis.",
      gloss: {
        es: "El sábado en la mañana limpié la casa. En la tarde vi una exposición con mi hermana y en la noche cenamos en casa de unos amigos.",
        en: "On Saturday morning I did the housework. In the afternoon I saw an exhibition with my sister, and in the evening we had dinner at some friends' place.",
      },
      question: {
        prompt: { es: "¿Qué hizo el sábado en la tarde?", en: "What did the speaker do on Saturday afternoon?" },
        options: [
          { es: "Fue a una exposición", en: "Went to an exhibition" },
          { es: "Limpió la casa", en: "Did the housework" },
          { es: "Cenó en casa de amigos", en: "Had dinner with friends" },
          { es: "Hizo deporte", en: "Did sport" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "past"],
    },
    {
      id: "dlg-lundi", type: "dialogue", target: "Je suis resté à la maison.", register: "informal",
      gloss: { es: "Me quedé en casa.", en: "I stayed at home." },
      turns: [
        { who: "A", target: "Salut ! Tu as passé un bon week-end ?", gloss: { es: "¡Hola! ¿Pasaste un buen fin de semana?", en: "Hi! Did you have a good weekend?" } },
        { who: "B", target: "Oui, tranquille. J'ai lu et je suis resté à la maison. Et toi ?", gloss: { es: "Sí, tranquilo. Leí y me quedé en casa. ¿Y tú?", en: "Yes, quiet. I read and stayed at home. And you?" } },
        { who: "A", target: "Moi, j'ai fait une randonnée à la montagne. C'était génial !", gloss: { es: "Yo salí de caminata a la montaña. ¡Estuvo genial!", en: "I went hiking in the mountains. It was great!" } },
        { who: "B", target: "Super ! Le week-end prochain, je vais venir avec toi.", gloss: { es: "¡Qué bien! El próximo fin de semana voy contigo.", en: "Great! Next weekend I'll come with you." } },
      ],
      question: {
        prompt: { es: "¿Qué va a hacer B el próximo fin de semana?", en: "What will B do next weekend?" },
        options: [
          { es: "Ir de caminata con A", en: "Go hiking with A" },
          { es: "Quedarse en casa", en: "Stay at home" },
          { es: "Leer un libro", en: "Read a book" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "past", "future"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pc", type: "bridge", onlyFor: "es", target: "Hier, j'ai mangé une pizza.",
      gloss: { es: "Ayer comí una pizza.", en: "Yesterday I ate a pizza." },
      distractors: ["Hier, je mangeai une pizza.", "Hier, j'ai mange une pizza.", "Hier, je mange une pizza."],
      note: { es: "Al hablar, el passé composé sirve para «comí» y para «he comido»; el pretérito simple (je mangeai) solo aparece en libros." },
      exercises: ["guess", "recall"], tags: ["bridge", "past"],
    },
    {
      id: "br-rester", type: "bridge", onlyFor: "es", target: "rester",
      gloss: { es: "quedarse", en: "to stay" },
      question: {
        prompt: { es: "«Je reste à la maison» significa…", en: "'Je reste à la maison' means…" },
        options: [
          { es: "Me quedo en casa", en: "I'm staying at home" },
          { es: "Resto en casa (hago cuentas)", en: "I'm doing sums at home" },
          { es: "Descanso en casa", en: "I'm resting at home" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: rester = quedarse. «Restar» (matemáticas) es soustraire." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
