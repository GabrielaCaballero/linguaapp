import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u36",
  lang: "it",
  index: 36,
  cefr: "C2",
  title: { target: "L'italiano delle regioni", es: "El italiano de las regiones", en: "Italian across the regions" },
  canDo: [
    { es: "Reconozco palabras regionales y del italiano de Suiza y sé su equivalente común.", en: "I can recognise regional and Swiss Italian words and know their common equivalent." },
    { es: "Entiendo rasgos regionales de la gramática hablada (la Giulia, ieri andai).", en: "I can understand regional features of spoken grammar (la Giulia, ieri andai)." },
    { es: "Distingo el dialecto del italiano regional.", en: "I can tell dialect apart from regional Italian." },
  ],
  icon: "🗺️",
  items: build("it", 36, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "anguria", type: "word", pos: "noun", target: "l'anguria", gender: "f", plural: "le angurie",
      gloss: { es: "la sandía", en: "the watermelon" },
      accept: [{ text: "il cocomero" }],
      distractors: ["l'anguilla", "l'angoscia", "l'angolo"],
      note: { es: "En el norte, l'anguria; en el centro, il cocomero; en partes del sur, il melone d'acqua.", en: "In the North, l'anguria; in the Centre, il cocomero; in parts of the South, il melone d'acqua." },
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "food"],
    },
    {
      id: "gruccia", type: "word", pos: "noun", target: "la gruccia", gender: "f", plural: "le grucce",
      gloss: { es: "la percha (para la ropa)", en: "the coat hanger" },
      accept: [{ text: "la stampella" }, { text: "l'ometto" }],
      distractors: ["la gru", "la groppa", "la cruccia"],
      note: { es: "En Roma se dice la stampella; en Milán, l'ometto.", en: "In Rome it's la stampella; in Milan, l'ometto." },
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "home"],
    },
    {
      id: "marinare-la-scuola", type: "phrase", pos: "phrase", register: "informal", target: "marinare la scuola",
      gloss: { es: "faltar a clase a escondidas", en: "to skip school, play truant" },
      accept: [{ text: "bigiare la scuola" }],
      distractors: ["mancare la scuola", "marciare la scuola", "marinare a scuola"],
      note: { es: "En Lombardía: bigiare; en Roma: fare sega o fare forca.", en: "In Lombardy: bigiare; in Rome: fare sega or fare forca." },
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "school"],
    },
    {
      id: "patente", type: "word", pos: "noun", target: "la patente", gender: "f", plural: "le patenti",
      gloss: { es: "la licencia de conducir (el carné)", en: "the driving licence" },
      variants: [{ region: "CH-IT", text: "la licenza di condurre", note: { es: "Así se llama en el Tesino y en los documentos suizos.", en: "Its name in Ticino and on Swiss documents." } }],
      distractors: ["la potente", "la parente", "la pretesa"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "swiss", "bureaucracy"],
    },
    {
      id: "raccoglitore", type: "word", pos: "noun", target: "il raccoglitore", gender: "m", plural: "i raccoglitori",
      gloss: { es: "la carpeta de anillas (archivador)", en: "the ring binder" },
      variants: [{ region: "CH-IT", text: "il classatore", note: { es: "Helvetismo, del francés classeur.", en: "Helvetism, from French classeur." } }],
      distractors: ["il raccolto", "il raccoglimento", "il raccordo"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "swiss", "office"],
    },
    {
      id: "elvetismo", type: "word", pos: "noun", target: "l'elvetismo", gender: "m", plural: "gli elvetismi",
      gloss: { es: "el helvetismo (palabra propia del italiano de Suiza)", en: "the Helvetism (a Swiss Italian usage)" },
      distractors: ["l'elvetico", "l'eufemismo", "l'evento"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "swiss"],
    },
    {
      id: "regionalismo", type: "word", pos: "noun", target: "il regionalismo", gender: "m", plural: "i regionalismi",
      gloss: { es: "el regionalismo (palabra o giro regional)", en: "the regionalism (regional word or usage)" },
      distractors: ["il razionalismo", "il realismo", "il regolamento"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional"],
    },
    {
      id: "dialetto", type: "word", pos: "noun", target: "il dialetto", gender: "m", plural: "i dialetti",
      gloss: { es: "el dialecto", en: "the dialect" },
      distractors: ["il dialogo", "il diletto", "il delitto"],
      note: { es: "Los dialectos italianos (napolitano, véneto, siciliano…) son lenguas propias, no italiano mal hablado.", en: "Italian dialects (Neapolitan, Venetian, Sicilian…) are languages in their own right, not bad Italian." },
      tags: ["regional"],
    },
    {
      id: "cadenza", type: "word", pos: "noun", target: "la cadenza", gender: "f", plural: "le cadenze",
      gloss: { es: "el acento regional, la tonada", en: "the regional accent, lilt" },
      distractors: ["la scadenza", "la credenza", "la carenza"],
      note: { es: "Para el acento de una región se dice cadenza o accento; accento es también la tilde.", en: "For a regional accent say cadenza or accento; accento is also the written accent mark." },
      tags: ["regional", "pronunciation"],
    },
    {
      id: "guaglione", type: "word", pos: "noun", target: "il guaglione", gender: "m", plural: "i guaglioni",
      gloss: { es: "el muchacho (napolitano)", en: "the lad (Neapolitan)" },
      distractors: ["il garzone", "il galeone", "il gagliardo"],
      note: { es: "Palabra del napolitano, muy usada en el italiano de Campania.", en: "A Neapolitan word, widely used in the Italian of Campania." },
      tags: ["regional", "dialect"],
    },
    {
      id: "ammazza", type: "phrase", pos: "phrase", register: "informal", target: "Ammazza!",
      gloss: { es: "¡Guau! ¡Increíble! (romano)", en: "Wow! (Roman)" },
      distractors: ["Ammazzo!", "Ammassa!", "Ammazzare!"],
      note: { es: "Exclamación de asombro en Roma: Ammazza quanto costa!", en: "A Roman exclamation of surprise: Ammazza quanto costa!" },
      tags: ["regional", "exclamations"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ho-chiamato-giulia", type: "sentence", target: "Ho chiamato Giulia, ma non rispondeva.",
      gloss: { es: "Llamé a Giulia, pero no contestaba.", en: "I called Giulia, but she wasn't answering." },
      accept: [{ text: "Ho chiamato la Giulia, ma non rispondeva.", verdict: "almost", feedback: { es: "Con artículo es del norte y coloquial; en italiano estándar el nombre va sin artículo.", en: "With the article it's northern and colloquial; standard Italian has no article before a first name." } }],
      distractors: ["alla", "rispondevo", "chiamata"],
      grammar: ["it-g-articolo-nomi-propri"], tags: ["regional", "grammar"],
    },
    {
      id: "ieri-al-mare", type: "sentence", target: "Ieri sono andata al mare con mio fratello e i suoi figli.",
      gloss: { es: "Ayer fui a la playa con mi hermano y sus hijos.", en: "Yesterday I went to the seaside with my brother and his children." },
      accept: [
        { text: "Ieri sono andato al mare con mio fratello e i suoi figli." },
        { text: "Ieri andai al mare con mio fratello e i suoi figli.", verdict: "almost", feedback: { es: "Así se oye en el sur, pero en estándar «ieri» pide passato prossimo: sono andato/a.", en: "You'll hear this in the South, but standard Italian uses the passato prossimo with «ieri»: sono andato/a." } },
      ],
      distractors: ["andai", "il", "figlio"],
      grammar: ["it-g-passato-regionale"], tags: ["regional", "grammar"],
    },
    {
      id: "milano-anguria-firenze", type: "sentence", target: "A Milano si dice anguria, a Firenze cocomero.",
      gloss: { es: "En Milán se dice anguria; en Florencia, cocomero.", en: "In Milan they say anguria, in Florence cocomero." },
      distractors: ["dicono", "in", "Firenzi"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional"],
    },
    {
      id: "ticino-licenza", type: "sentence", target: "In Ticino la patente si chiama licenza di condurre.",
      gloss: { es: "En el Tesino, la licencia de conducir se llama licenza di condurre.", en: "In Ticino a driving licence is called a licenza di condurre." },
      distractors: ["chiamano", "nel", "condurrà"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "swiss"],
    },
    {
      id: "pomodori-in-offerta", type: "sentence", target: "Questa settimana i pomodori sono in offerta.",
      gloss: { es: "Esta semana los tomates están en oferta.", en: "This week tomatoes are on special offer." },
      variants: [{ region: "CH-IT", text: "Questa settimana i pomodori sono in azione.", note: { es: "En la Suiza italiana, «in azione» = en oferta.", en: "In Swiss Italian, «in azione» = on offer." } }],
      distractors: ["offerte", "pomodoro", "settimane"],
      grammar: ["it-g-italiano-svizzero"], tags: ["regional", "swiss", "shopping"],
    },
    {
      id: "nonna-dialetto", type: "sentence", target: "Mia nonna parla solo in dialetto, ma capisce benissimo l'italiano.",
      gloss: { es: "Mi abuela habla solo en dialecto, pero entiende perfectamente el italiano.", en: "My grandmother only speaks dialect, but understands Italian perfectly well." },
      distractors: ["dialetti", "capiscono", "nostra"],
      tags: ["regional", "family"],
    },
    {
      id: "cadenza-bari", type: "sentence", target: "Si sente subito dalla cadenza che è di Bari.",
      gloss: { es: "Por la tonada se nota enseguida que es de Bari.", en: "You can tell straight away from her accent that she's from Bari." },
      distractors: ["cadenze", "sentono", "a"],
      tags: ["regional", "pronunciation"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-articolo-nomi", type: "pattern", target: "Giulia · la Giulia · il Manzoni · la Callas",
      gloss: { es: "el artículo con nombres de persona", en: "the article with people's names" },
      pattern: {
        rule: {
          es: "En estándar el nombre de pila va sin artículo. En el norte se oye la Giulia, il Marco (regional). Con apellidos de clásicos: il Manzoni.",
          en: "In standard Italian a first name takes no article. In the North you'll hear la Giulia, il Marco (regional). With classic authors' surnames: il Manzoni.",
        },
        table: [["standard", "Giulia"], ["Nord, parlato", "la Giulia"], ["autori classici", "il Manzoni"]],
      },
      question: {
        prompt: { es: "¿Cuál es la forma estándar?", en: "Which is the standard form?" },
        options: ["Ho visto Marco ieri.", "Ho visto il Marco ieri.", "Ho visto lo Marco ieri.", "Ho visto al Marco ieri."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-articolo-nomi-propri"], tags: ["grammar", "regional"],
    },
    {
      id: "pat-passato-regionale", type: "pattern", target: "Nord: ieri sono andato · Sud: ieri andai",
      gloss: { es: "passato prossimo y remoto según la región", en: "passato prossimo and remoto by region" },
      pattern: {
        rule: {
          es: "En el norte el passato remoto casi no se usa al hablar; en Sicilia y otras zonas del sur se usa incluso para ayer. En estándar, ieri pide passato prossimo.",
          en: "In the North the passato remoto is hardly used in speech; in Sicily and other southern areas it's used even for yesterday. In standard Italian, ieri takes the passato prossimo.",
        },
        table: [["Nord", "ieri sono andato"], ["standard", "ieri sono andato"], ["Sud", "ieri andai"]],
      },
      question: {
        prompt: { es: "Dos sicilianos conversan: «Stamattina incontrai Rosa». Es…", en: "Two Sicilians chatting: 'Stamattina incontrai Rosa'. This is…" },
        options: [
          { es: "un uso regional del sur, normal en su habla", en: "a southern regional use, normal in their speech" },
          { es: "un error grave de gramática", en: "a serious grammar mistake" },
          { es: "una forma del futuro", en: "a future form" },
          { es: "un uso exclusivo de los libros", en: "a form used only in books" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-passato-regionale"], tags: ["grammar", "regional"],
    },
    {
      id: "pat-geosinonimi", type: "pattern", target: "anguria / cocomero · gruccia / stampella / ometto · patente / licenza di condurre",
      gloss: { es: "geosinónimos e italiano de Suiza", en: "regional synonyms and Swiss Italian" },
      pattern: {
        rule: {
          es: "Muchas cosas tienen varios nombres según la región, todos correctos. El italiano de Suiza tiene además sus helvetismos, usados también en documentos oficiales.",
          en: "Many things have several names by region, all correct. Swiss Italian also has its own Helvetisms, used in official documents too.",
        },
        table: [["la patente", "la licenza di condurre"], ["il cellulare", "il natel"], ["in offerta", "in azione"]],
      },
      question: {
        prompt: { es: "¿Cuál es un helvetismo (italiano de Suiza)?", en: "Which one is a Helvetism (Swiss Italian)?" },
        options: ["la licenza di condurre", "la patente", "il cocomero", "la stampella"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-italiano-svizzero"], tags: ["grammar", "regional", "swiss"],
    },
    {
      id: "tab-svizzera-italia", type: "paradigm", target: "Dalla Svizzera all'Italia",
      gloss: { es: "del italiano de Suiza al de Italia", en: "from Swiss Italian to Italy's Italian" },
      grammar: ["it-g-italiano-svizzero"],
      paradigm: {
        caption: { es: "Escribe la palabra que se usa en Italia", en: "Write the word used in Italy" },
        cells: [
          { label: "licenza di condurre", answer: "patente", ruleId: "it-g-italiano-svizzero" },
          { label: "natel", answer: "cellulare", accept: ["telefonino"], ruleId: "it-g-italiano-svizzero" },
          { label: "in azione", answer: "in offerta", ruleId: "it-g-italiano-svizzero" },
          { label: "classatore", answer: "raccoglitore", ruleId: "it-g-italiano-svizzero" },
          { label: "formulario", answer: "modulo", ruleId: "it-g-italiano-svizzero" },
        ],
      },
      tags: ["grammar", "regional", "swiss", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lugano-bologna", type: "listening",
      target: "Sono nata a Lugano, ma studio a Bologna. All'inizio i miei compagni ridevano quando dicevo natel invece di cellulare, o quando chiedevo se il pane era in azione. Adesso mi prendono in giro per la cadenza, ma io rispondo che l'italiano non è solo quello della televisione.",
      gloss: {
        es: "Nací en Lugano, pero estudio en Bolonia. Al principio mis compañeros se reían cuando decía natel en vez de celular, o cuando preguntaba si el pan estaba en oferta. Ahora se burlan de mi tonada, pero yo les respondo que el italiano no es solo el de la televisión.",
        en: "I was born in Lugano, but I study in Bologna. At first my classmates laughed when I said natel instead of cellulare, or asked whether the bread was in azione. Now they tease me about my accent, but I tell them Italian isn't just what you hear on TV.",
      },
      question: {
        prompt: { es: "¿De qué se reían sus compañeros al principio?", en: "What did her classmates laugh at at first?" },
        options: [
          { es: "De las palabras suizas que usaba.", en: "The Swiss words she used." },
          { es: "De su forma de vestir.", en: "The way she dressed." },
          { es: "De que no sabía italiano.", en: "That she couldn't speak Italian." },
          { es: "De que estudiaba en Lugano.", en: "That she studied in Lugano." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-italiano-svizzero"], tags: ["listening", "regional", "swiss"],
    },
    {
      id: "dlg-gruccia-stampella", type: "dialogue", register: "informal", target: "Però ci capiamo lo stesso, no?",
      gloss: { es: "Pero igual nos entendemos, ¿no?", en: "But we still understand each other, right?" },
      turns: [
        { who: "A", target: "Mi passi la gruccia, per favore?", gloss: { es: "¿Me pasas la percha, por favor?", en: "Can you pass me the hanger, please?" } },
        { who: "B", target: "La che? Ah, la stampella! A Roma la chiamiamo così.", gloss: { es: "¿La qué? ¡Ah, la percha! En Roma la llamamos stampella.", en: "The what? Oh, the stampella! That's what we call it in Rome." } },
        { who: "A", target: "E scommetto che l'anguria per te è il cocomero.", gloss: { es: "Y apuesto a que para ti la sandía es cocomero.", en: "And I bet that for you anguria is cocomero." } },
        { who: "B", target: "Ammazza, ci hai preso! Però ci capiamo lo stesso, no?", gloss: { es: "¡Uy, adivinaste! Pero igual nos entendemos, ¿no?", en: "Wow, spot on! But we still understand each other, right?" } },
      ],
      question: {
        prompt: { es: "¿Qué muestra la conversación?", en: "What does the conversation show?" },
        options: [
          { es: "Que algunas palabras cambian según la región, pero se entienden igual.", en: "That some words change by region, but people still understand each other." },
          { es: "Que B no habla bien italiano.", en: "That B doesn't speak Italian well." },
          { es: "Que en Roma no se usan perchas.", en: "That nobody uses hangers in Rome." },
          { es: "Que A y B están peleados.", en: "That A and B have fallen out." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-italiano-svizzero"], tags: ["dialogue", "regional"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-fiacca", type: "bridge", onlyFor: "es", target: "la fiacca",
      gloss: { es: "la flojera, la desgana", en: "listlessness, sluggishness" },
      question: {
        prompt: { es: "«Oggi ho una fiacca terribile» significa…", en: "'Oggi ho una fiacca terribile' means…" },
        options: [
          { es: "Hoy tengo una flojera terrible.", en: "I feel terribly sluggish today." },
          { es: "Hoy estoy terriblemente flaca.", en: "I'm terribly thin today." },
          { es: "Hoy tengo un frío terrible.", en: "I'm terribly cold today." },
          { es: "Hoy tengo una fiebre terrible.", en: "I have a terrible fever today." },
        ],
        answer: 0,
      },
      note: { es: "De aquí viene «fiaca», que se usa en el Río de la Plata; flaca, en italiano, es «magra»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "regional"],
    },
  ]),
};
