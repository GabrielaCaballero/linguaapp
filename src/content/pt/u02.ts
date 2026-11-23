import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u02",
  lang: "pt",
  index: 2,
  cefr: "A1.1",
  title: { target: "Eu me apresento", es: "Me presento", en: "About me" },
  canDo: [
    { es: "Puedo decir de dónde soy, dónde vivo y qué idiomas hablo.", en: "I can say where I'm from, where I live and which languages I speak." },
    { es: "Sé conjugar «ser» y los verbos en -ar en presente.", en: "I can conjugate ser and -ar verbs in the present tense." },
    { es: "Sé decir «soy del Perú / de la Argentina» con do, da, dos, das.", en: "I can say where I'm from with do, da, dos, das." },
  ],
  icon: "🙋",
  items: build("pt", 2, "A1.1", [
    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-lh", type: "sound", target: "trabalho",
      gloss: { es: "trabajo", en: "work / job" },
      distractors: ["trabajo", "trabalio", "trabaio"],
      note: {
        es: "«lh» suena como la «ll» del español de Castilla (lli): trabalho ≈ «trabáliu».",
        en: "'lh' sounds like 'lli' in 'million': trabalho ≈ 'tra-BAH-lyoo'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "nh-lh"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "brasileiro", type: "word", pos: "adj", target: "brasileiro", gloss: { es: "brasileño", en: "Brazilian" }, accept: [{ text: "brasileira" }], distractors: ["brasilero", "brasiliano", "brasileño"], note: { es: "Femenino: brasileira. Las nacionalidades van en minúscula.", en: "Feminine: brasileira. Nationalities take a small letter." }, tags: ["nationality"] },
    { id: "espanhol", type: "word", pos: "adj", target: "espanhol", gloss: { es: "español (idioma o nacionalidad)", en: "Spanish" }, accept: [{ text: "espanhola" }], distractors: ["espanhou", "español", "espanhel"], note: { es: "Femenino: espanhola. La l final suena casi como «u»: espanhol ≈ «españóu».", en: "Feminine: espanhola. A final l sounds like 'w': espanhol ≈ 'esh-pa-NYOW'." }, tags: ["nationality", "languages"] },
    { id: "ingles", type: "word", pos: "adj", target: "inglês", gloss: { es: "inglés (idioma o nacionalidad)", en: "English" }, accept: [{ text: "inglesa" }], distractors: ["inglés", "ingleis", "inglesse"], note: { es: "Lleva circunflejo (ê), no tilde aguda. Femenino: inglesa.", en: "It takes a circumflex (ê). Feminine: inglesa." }, tags: ["nationality", "languages"] },
    { id: "americano", type: "word", pos: "adj", target: "americano", gloss: { es: "estadounidense", en: "American" }, accept: [{ text: "americana" }, { text: "norte-americano" }, { text: "norte-americana" }], distractors: ["americanho", "amerikano", "americão"], tags: ["nationality"] },
    { id: "mexicano", type: "word", pos: "adj", target: "mexicano", gloss: { es: "mexicano", en: "Mexican" }, accept: [{ text: "mexicana" }], distractors: ["mejicano", "mexicão", "mechicano"], note: { es: "La x de mexicano suena «sh».", en: "The x in mexicano sounds like 'sh'." }, tags: ["nationality"] },
    { id: "portugues", type: "word", pos: "noun", target: "o português", gender: "m", plural: "os portugueses", gloss: { es: "el portugués (idioma)", en: "Portuguese (the language)" }, distractors: ["o portuguesa", "a português", "o portugués"], tags: ["languages"] },
    { id: "falar", type: "word", pos: "verb", target: "falar", gloss: { es: "hablar", en: "to speak / to talk" }, forms: { eu: "falo", você: "fala", nós: "falamos" }, distractors: ["fala", "falhar", "hablar"], tags: ["verbs", "languages"] },
    { id: "morar", type: "word", pos: "verb", target: "morar", gloss: { es: "vivir (en un lugar)", en: "to live (somewhere)" }, forms: { eu: "moro", você: "mora" }, accept: [{ text: "viver", verdict: "almost", feedback: { es: "«viver» existe, pero para decir dónde vives en Brasil se usa «morar».", en: "'viver' exists, but Brazilians say 'morar' for where you live." } }], distractors: ["mora", "morrer", "demorar"], note: { es: "Ojo: «morrer» es morir.", en: "Careful: 'morrer' means to die." }, tags: ["verbs"] },
    { id: "trabalhar", type: "word", pos: "verb", target: "trabalhar", gloss: { es: "trabajar", en: "to work" }, forms: { eu: "trabalho", você: "trabalha" }, distractors: ["trabajar", "trabalho", "trabalhou"], tags: ["verbs", "work"] },
    { id: "estudar", type: "word", pos: "verb", target: "estudar", gloss: { es: "estudiar", en: "to study" }, forms: { eu: "estudo", você: "estuda" }, distractors: ["estudiar", "estuda", "studar"], tags: ["verbs"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "sou-do-mexico", type: "sentence", target: "Eu sou do México.",
      gloss: { es: "Soy de México.", en: "I'm from Mexico." },
      accept: [{ text: "Sou do México." }],
      errors: [{ text: "Eu sou de o México.", feedback: { es: "de + o = do: sou do México.", en: "de + o = do: sou do México." }, ruleId: "pt-g-de-contracoes" }],
      distractors: ["de", "da", "estou"],
      note: { es: "Muchos países llevan artículo: do Brasil, da Argentina, dos Estados Unidos; otros no: de Portugal.", en: "Many countries take an article: do Brasil, da Argentina, dos Estados Unidos; some don't: de Portugal." },
      tags: ["introductions", "countries"],
    },
    {
      id: "sou-da-argentina", type: "sentence", target: "Ela é da Argentina.",
      gloss: { es: "Ella es de la Argentina.", en: "She's from Argentina." },
      errors: [{ text: "Ela é de a Argentina.", feedback: { es: "de + a = da: ela é da Argentina.", en: "de + a = da: ela é da Argentina." }, ruleId: "pt-g-de-contracoes" }],
      distractors: ["do", "de", "está"],
      tags: ["introductions", "countries"],
    },
    {
      id: "de-onde-voce-e", type: "sentence", target: "De onde você é?", register: "informal",
      gloss: { es: "¿De dónde eres?", en: "Where are you from? (informal)" },
      variants: [{ region: "PT", text: "De onde és?", note: { es: "En Portugal, con «tu»: de onde és?", en: "In Portugal, with 'tu': de onde és?" } }],
      distractors: ["Onde", "está", "o senhor"],
      tags: ["introductions"],
    },
    {
      id: "de-onde-o-senhor-e", type: "sentence", target: "De onde o senhor é?", register: "formal",
      gloss: { es: "¿De dónde es usted?", en: "Where are you from? (formal)" },
      accept: [{ text: "De onde a senhora é?" }],
      distractors: ["você", "Onde", "está"],
      tags: ["introductions", "register"],
    },
    {
      id: "moro-em-sao-paulo", type: "sentence", target: "Eu moro em São Paulo.",
      gloss: { es: "Vivo en São Paulo.", en: "I live in São Paulo." },
      accept: [{ text: "Moro em São Paulo." }, { text: "Eu vivo em São Paulo.", verdict: "almost", feedback: { es: "Es correcto, pero para el lugar donde vives en Brasil se dice casi siempre «morar».", en: "Correct, but for where you live Brazilians almost always say 'morar'." } }],
      distractors: ["no", "na", "mora"],
      tags: ["introductions"],
    },
    {
      id: "falo-portugues", type: "sentence", target: "Eu falo espanhol e um pouco de português.",
      gloss: { es: "Hablo español y un poco de portugués.", en: "I speak Spanish and a little Portuguese." },
      accept: [{ text: "Falo espanhol e um pouco de português." }],
      distractors: ["fala", "pouco do", "é"],
      tags: ["languages"],
    },
    {
      id: "voce-fala-ingles", type: "sentence", target: "Você fala inglês?", register: "informal",
      gloss: { es: "¿Hablas inglés?", en: "Do you speak English? (informal)" },
      variants: [{ region: "PT", text: "Falas inglês?" }],
      distractors: ["falo", "o senhor", "fale"],
      tags: ["languages"],
    },
    {
      id: "o-senhor-fala-ingles", type: "sentence", target: "O senhor fala inglês?", register: "formal",
      gloss: { es: "¿Habla (usted) inglés?", en: "Do you speak English? (formal)" },
      accept: [{ text: "A senhora fala inglês?" }],
      distractors: ["você", "falo", "falas"],
      tags: ["languages", "register"],
    },
    {
      id: "trabalho-como-professora", type: "sentence", target: "Eu trabalho como professora.",
      gloss: { es: "Trabajo de profesora.", en: "I work as a teacher." },
      accept: [{ text: "Eu trabalho como professor." }, { text: "Trabalho como professora." }, { text: "Trabalho como professor." }, { text: "Sou professora." }, { text: "Sou professor." }, { text: "Eu sou professora." }, { text: "Eu sou professor." }],
      errors: [{ text: "Eu sou uma professora.", feedback: { es: "Con profesiones, sin artículo: sou professora.", en: "No article with jobs: sou professora." } }],
      distractors: ["de", "trabalha", "uma"],
      tags: ["work", "introductions"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-ser", type: "paradigm", target: "ser — presente", spoken: "ser",
      gloss: { es: "«ser» en presente", en: "ser (to be) — present" },
      grammar: ["pt-g-ser"],
      paradigm: {
        caption: { es: "Conjuga «ser» en presente", en: "Conjugate ser in the present tense" },
        cells: [
          { label: "eu", answer: "sou", ruleId: "pt-g-ser" },
          { label: "você / ele / ela", answer: "é", ruleId: "pt-g-ser" },
          { label: "nós", answer: "somos", ruleId: "pt-g-ser" },
          { label: "vocês / eles / elas", answer: "são", ruleId: "pt-g-ser" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "tab-falar", type: "paradigm", target: "falar — presente", spoken: "falar",
      gloss: { es: "«falar» (hablar) en presente", en: "falar (to speak) — present" },
      grammar: ["pt-g-ar"],
      paradigm: {
        caption: { es: "Conjuga «falar» en presente", en: "Conjugate falar in the present tense" },
        cells: [
          { label: "eu", answer: "falo", ruleId: "pt-g-ar" },
          { label: "você / ele / ela", answer: "fala", ruleId: "pt-g-ar" },
          { label: "nós", answer: "falamos", ruleId: "pt-g-ar" },
          { label: "vocês / eles / elas", answer: "falam", ruleId: "pt-g-ar" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-de-contracoes", type: "pattern", target: "de + o = do · de + a = da",
      gloss: { es: "de + artículo: do, da, dos, das", en: "de + article: do, da, dos, das" },
      pattern: {
        rule: {
          es: "«de» se une siempre con el artículo: do, da, dos, das. Como «del» en español, pero también con «la» y en plural.",
          en: "'de' (of / from) always merges with the article: do, da, dos, das.",
        },
        table: [["de + o", "do Brasil"], ["de + a", "da Colômbia"], ["de + os", "dos Estados Unidos"], ["de + as", "das Filipinas"]],
      },
      question: {
        prompt: { es: "Completa: «Nós somos ___ Colômbia.»", en: "Complete: 'Nós somos ___ Colômbia.'" },
        options: ["da", "de a", "do", "de"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-de-contracoes"], tags: ["grammar", "contractions"],
    },
    {
      id: "pat-adj-genero", type: "pattern", target: "brasileiro → brasileira",
      gloss: { es: "masculino y femenino de los adjetivos", en: "masculine and feminine adjectives" },
      pattern: {
        rule: {
          es: "-o pasa a -a (brasileiro → brasileira). Los terminados en -ês y -ol añaden -a (inglês → inglesa, espanhol → espanhola). Los terminados en -e no cambian (canadense).",
          en: "-o becomes -a (brasileiro → brasileira). Words in -ês and -ol add -a (inglês → inglesa, espanhol → espanhola). Words in -e don't change (canadense).",
        },
        table: [["brasileiro", "brasileira"], ["inglês", "inglesa"], ["espanhol", "espanhola"], ["canadense", "canadense"]],
      },
      question: {
        prompt: { es: "Completa: «A Maria é ___.» (portugués)", en: "Complete: 'A Maria é ___.' (Portuguese)" },
        options: ["portuguesa", "português", "portuguêsa", "portugueza"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-adj-genero"], tags: ["grammar", "adjectives", "nationality"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-apresentacao", type: "listening",
      target: "Oi, eu sou a Carla. Sou do Chile, mas moro no Rio de Janeiro. Trabalho num hotel e estudo português.",
      gloss: {
        es: "Hola, soy Carla. Soy de Chile, pero vivo en Río de Janeiro. Trabajo en un hotel y estudio portugués.",
        en: "Hi, I'm Carla. I'm from Chile, but I live in Rio de Janeiro. I work in a hotel and I'm studying Portuguese.",
      },
      question: {
        prompt: { es: "¿Dónde vive Carla?", en: "Where does Carla live?" },
        options: [
          { es: "En Río de Janeiro", en: "In Rio de Janeiro" },
          { es: "En Chile", en: "In Chile" },
          { es: "En un hotel de São Paulo", en: "In a hotel in São Paulo" },
          { es: "En Lisboa", en: "In Lisbon" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "introductions"],
    },
    {
      id: "dlg-de-onde", type: "dialogue", target: "Eu sou de Madri.",
      gloss: { es: "Soy de Madrid.", en: "I'm from Madrid." },
      turns: [
        { who: "A", target: "Você não é brasileira, né? De onde você é?", gloss: { es: "No eres brasileña, ¿no? ¿De dónde eres?", en: "You're not Brazilian, are you? Where are you from?" } },
        { who: "B", target: "Não, eu sou espanhola. Sou de Madri.", gloss: { es: "No, soy española. Soy de Madrid.", en: "No, I'm Spanish. I'm from Madrid." } },
        { who: "A", target: "Que legal! E você mora aqui em Salvador?", gloss: { es: "¡Qué bueno! ¿Y vives aquí en Salvador?", en: "Cool! And do you live here in Salvador?" } },
        { who: "B", target: "Moro, sim. Trabalho numa escola de línguas.", gloss: { es: "Sí, vivo aquí. Trabajo en una escuela de idiomas.", en: "Yes, I do. I work at a language school." } },
      ],
      question: {
        prompt: { es: "¿Cómo responde B «sí, vivo aquí»?", en: "How does B say 'yes, I do' (live here)?" },
        options: ["Moro, sim.", "Sim, sou.", "Sim, eu."],
        answer: 0,
      },
      note: { es: "En Brasil se responde repitiendo el verbo: «Mora aqui? — Moro.»", en: "Brazilians answer 'yes' by repeating the verb: 'Mora aqui? — Moro.'" },
      exercises: ["question"], tags: ["dialogue", "introductions"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-apelido", type: "bridge", onlyFor: "es", target: "o apelido",
      gloss: { es: "el apodo", en: "the nickname" },
      question: {
        prompt: { es: "En Brasil te preguntan «Qual é o seu apelido?». Quieren saber…", en: "In Brazil someone asks 'Qual é o seu apelido?'. They want to know…" },
        options: [
          { es: "tu apodo", en: "your nickname" },
          { es: "tu apellido", en: "your surname" },
          { es: "tu dirección", en: "your address" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: en Brasil «apelido» es el apodo; el apellido es «o sobrenome» (en Portugal sí es el apellido)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-f-h", type: "bridge", onlyFor: "es", target: "fazer",
      gloss: { es: "hacer", en: "to do / to make" },
      distractors: ["hacer", "facer", "hazer"],
      note: { es: "Muchas h- iniciales españolas son f- en portugués: hablar → falar, hacer → fazer, hijo → filho." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-dade", type: "bridge", onlyFor: "en", target: "a cidade",
      gloss: { es: "la ciudad", en: "the city" },
      distractors: ["a citade", "a cidadi", "a sidade"],
      note: { en: "English -ty is often Portuguese -dade: city → cidade, university → universidade, reality → realidade." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
