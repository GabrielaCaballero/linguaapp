import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u05",
  lang: "it",
  index: 5,
  cefr: "A1.1",
  title: { target: "La famiglia", es: "La familia", en: "Family" },
  canDo: [
    { es: "Puedo presentar a mi familia y preguntar por la de otra persona.", en: "I can introduce my family and ask about someone else's." },
    { es: "Sé formar el plural con i, gli y le.", en: "I can make plurals with i, gli and le." },
    { es: "Sé cuándo «mio/mia» va sin artículo.", en: "I know when 'mio/mia' takes no article." },
  ],
  icon: "👪",
  items: build("it", 5, "A1.1", [
    // ── Family nouns ─────────────────────────────────────────
    {
      id: "famiglia", legacyId: "it-famiglia", type: "word", pos: "noun", target: "la famiglia", gender: "f", plural: "le famiglie",
      gloss: { es: "la familia", en: "the family" },
      distractors: ["la fame", "il familiare", "la femmina"],
      note: { es: "Con «famiglia» el posesivo lleva artículo: la mia famiglia.", en: "With 'famiglia' the possessive keeps its article: la mia famiglia." },
      tags: ["family"],
    },
    {
      id: "madre", type: "word", pos: "noun", target: "la madre", gender: "f", plural: "le madri",
      gloss: { es: "la madre", en: "the mother" },
      distractors: ["il padre", "la madrina", "la moglie"],
      note: { es: "En familia se dice más «la mamma».", en: "At home people mostly say 'la mamma'." },
      tags: ["family"],
    },
    {
      id: "padre", type: "word", pos: "noun", target: "il padre", gender: "m", plural: "i padri",
      gloss: { es: "el padre", en: "the father" },
      distractors: ["la madre", "il padrino", "il pane"],
      note: { es: "En familia: «il papà» (con acento).", en: "At home: 'il papà' (with an accent)." },
      tags: ["family"],
    },
    {
      id: "genitori", type: "word", pos: "noun", target: "i genitori", gender: "m", plural: "i genitori",
      gloss: { es: "los padres (papá y mamá)", en: "the parents" },
      distractors: ["i parenti", "i padri", "i genitore"],
      note: {
        es: "Papá y mamá = i genitori; «i padri» son varios padres (hombres).",
        en: "False friend: 'i parenti' = relatives, not parents!",
      },
      tags: ["family", "false-friend"],
    },
    {
      id: "fratello", legacyId: "it-fratello", type: "word", pos: "noun", target: "il fratello", gender: "m", plural: "i fratelli",
      gloss: { es: "el hermano", en: "the brother" },
      distractors: ["la sorella", "il fratellino", "il frate"],
      note: { es: "«I fratelli» también puede ser hermanos y hermanas juntos.", en: "'I fratelli' can also mean brothers and sisters together." },
      tags: ["family"],
    },
    {
      id: "sorella", legacyId: "it-sorella", type: "word", pos: "noun", target: "la sorella", gender: "f", plural: "le sorelle",
      gloss: { es: "la hermana", en: "the sister" },
      distractors: ["il fratello", "la suocera", "la cugina"],
      tags: ["family"],
    },
    {
      id: "figlio", type: "word", pos: "noun", target: "il figlio", gender: "m", plural: "i figli",
      gloss: { es: "el hijo", en: "the son" },
      distractors: ["la figlia", "il filo", "il foglio"],
      note: { es: "Plural: i figli (con una sola i).", en: "Plural: i figli (one i); it can mean sons, or children in general." },
      tags: ["family"],
    },
    {
      id: "figlia", type: "word", pos: "noun", target: "la figlia", gender: "f", plural: "le figlie",
      gloss: { es: "la hija", en: "the daughter" },
      distractors: ["il figlio", "la foglia", "la famiglia"],
      tags: ["family"],
    },
    {
      id: "nonno", legacyId: "it-nonno", type: "word", pos: "noun", target: "il nonno", gender: "m", plural: "i nonni",
      gloss: { es: "el abuelo", en: "the grandfather" },
      errors: [{
        text: "il nono",
        feedback: { es: "Con doble n: nonno. «nono» = noveno.", en: "Double n: nonno. 'nono' means ninth." },
      }],
      distractors: ["la nonna", "il nono", "lo zio"],
      slow: true,
      tags: ["family", "doubles"],
    },
    {
      id: "nonna", legacyId: "it-nonna", type: "word", pos: "noun", target: "la nonna", gender: "f", plural: "le nonne",
      gloss: { es: "la abuela", en: "the grandmother" },
      distractors: ["il nonno", "la nona", "la zia"],
      slow: true,
      tags: ["family", "doubles"],
    },
    {
      id: "zio", legacyId: "it-zio", type: "word", pos: "noun", target: "lo zio", gender: "m", plural: "gli zii",
      gloss: { es: "el tío", en: "the uncle" },
      errors: [
        { text: "il zio", feedback: { es: "Ante z se usa «lo»: lo zio (plural: gli zii).", en: "Before z use 'lo': lo zio (plural: gli zii)." } },
        { text: "la zio", feedback: { es: "Zio es masculino: lo zio. La tía es «la zia».", en: "Zio is masculine: lo zio. The aunt is 'la zia'." } },
      ],
      distractors: ["il zio", "la zia", "lo zaino"],
      note: {
        es: "«lo/gli» antes de z, s + consonante, gn, ps, x, y: lo zio, lo psicologo, gli studenti.",
        en: "'lo/gli' before z, s + consonant, gn, ps, x, y: lo zio, lo studente, gli zii.",
      },
      tags: ["family", "articles"],
    },
    {
      id: "zia", type: "word", pos: "noun", target: "la zia", gender: "f", plural: "le zie",
      gloss: { es: "la tía", en: "the aunt" },
      distractors: ["lo zio", "la nonna", "la cugina"],
      tags: ["family"],
    },
    {
      id: "cugino", legacyId: "it-cugino", type: "word", pos: "noun", target: "il cugino", gender: "m", plural: "i cugini",
      gloss: { es: "el primo", en: "the cousin" },
      distractors: ["il primo", "la cugina", "il cuoco"],
      note: { es: "Ojo: «primo» en italiano significa «primero»; la prima = la cugina.", en: "Female cousin: la cugina." },
      tags: ["family", "false-friend"],
    },
    {
      id: "marito", type: "word", pos: "noun", target: "il marito", gender: "m", plural: "i mariti",
      gloss: { es: "el esposo (marido)", en: "the husband" },
      distractors: ["la moglie", "il martello", "lo sposo"],
      note: { es: "Esposo = marito; «lo sposo» es el novio el día de la boda.", en: "'Lo sposo' is the groom on the wedding day." },
      tags: ["family"],
    },
    {
      id: "moglie", type: "word", pos: "noun", target: "la moglie", gender: "f", plural: "le mogli",
      gloss: { es: "la esposa (mujer)", en: "the wife" },
      distractors: ["il marito", "la maglia", "la mollica"],
      note: { es: "j → gli: mujer → moglie. Plural irregular: le mogli.", en: "Irregular plural: le mogli." },
      tags: ["family"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "mio-fratello", type: "sentence", target: "Mio fratello abita a Milano.",
      gloss: { es: "Mi hermano vive en Milán.", en: "My brother lives in Milan." },
      accept: [{ text: "Mio fratello vive a Milano." }],
      errors: [{
        text: "Il mio fratello abita a Milano.",
        feedback: { es: "Con un familiar en singular, sin artículo: mio fratello.", en: "With a singular family member, no article: mio fratello." },
      }],
      distractors: ["Il mio fratello abita a Milano.", "Mia fratello abita a Milano.", "Mio fratello abita in Milano."],
      tags: ["family", "possessive"],
    },
    {
      id: "famiglia-di", legacyId: "it-famigliadi", type: "sentence", target: "La mia famiglia è di Napoli.",
      gloss: { es: "Mi familia es de Nápoles.", en: "My family is from Naples." },
      distractors: ["Mia famiglia è di Napoli.", "La mia famiglia è da Napoli.", "La mia famiglia ha di Napoli."],
      note: { es: "«famiglia» no es un familiar: sí lleva artículo, la mia famiglia.", en: "'famiglia' isn't a family member, so it keeps the article: la mia famiglia." },
      tags: ["family", "possessive"],
    },
    {
      id: "ho-due-fratelli", type: "sentence", target: "Ho due fratelli e una sorella.",
      gloss: { es: "Tengo dos hermanos y una hermana.", en: "I have two brothers and a sister." },
      distractors: ["Ho due fratello e una sorella.", "Sono due fratelli e una sorella.", "Ho due fratelli e uno sorella."],
      tags: ["family", "avere"],
    },
    {
      id: "sei-sposato", type: "phrase", pos: "phrase", target: "Sei sposato?", register: "informal",
      gloss: { es: "¿Estás casado/a?", en: "Are you married? (informal)" },
      accept: [{ text: "Sei sposata?" }],
      distractors: ["Sei sposo?", "Hai sposato?", "Sei sposati?"],
      note: { es: "A una mujer: «Sei sposata?». Con Lei: «È sposato/a?».", en: "To a woman: 'Sei sposata?'. With Lei: 'È sposato/a?'" },
      tags: ["family", "register", "chunk"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-plurale", type: "pattern", target: "i nonni · gli zii · le nonne",
      gloss: { es: "el plural de sustantivos y artículos", en: "plural nouns and articles" },
      pattern: {
        rule: {
          es: "-o → -i (il figlio → i figli), -a → -e (la zia → le zie), -e → -i (il padre → i padri, la madre → le madri). Artículos: il → i, lo/l' (masc.) → gli, la/l' (fem.) → le.",
          en: "-o → -i (il figlio → i figli), -a → -e (la zia → le zie), -e → -i (il padre → i padri, la madre → le madri). Articles: il → i, lo/l' (masc.) → gli, la/l' (fem.) → le.",
        },
        table: [["il nonno", "i nonni"], ["lo zio", "gli zii"], ["la nonna", "le nonne"], ["il padre", "i padri"], ["la madre", "le madri"]],
      },
      question: {
        prompt: { es: "El plural de «la sorella» es…", en: "The plural of 'la sorella' is…" },
        options: ["le sorelle", "le sorelli", "i sorelle", "la sorelle"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "plural", "articles"],
    },
    {
      id: "pat-possessivi", type: "pattern", target: "mia madre · la mia famiglia",
      gloss: { es: "posesivos con familiares", en: "possessives with family members" },
      pattern: {
        rule: {
          es: "El posesivo suele llevar artículo (la mia casa), pero NO con un familiar en singular: mia madre, mio fratello. Sí lo lleva en plural (i miei fratelli), con «loro» (il loro padre) y casi siempre con mamma/papà.",
          en: "Possessives normally take an article (la mia casa), but NOT with a singular family member: mia madre, mio fratello. They do in the plural (i miei fratelli), with 'loro' (il loro padre) and usually with mamma/papà.",
        },
        table: [["mio padre", "i miei genitori"], ["mia sorella", "le mie sorelle"], ["la mia famiglia", "il loro figlio"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Mia sorella abita a Roma.", "La mia sorella abita a Roma.", "Mia la sorella abita a Roma."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "possessive"],
    },

    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-z", legacyId: "it-s-z", type: "sound", target: "zio",
      gloss: { es: "tío", en: "uncle" },
      distractors: ["sio", "tio", "cio"],
      note: {
        es: "z suena «ts» en zio o piazza; en otras palabras suena «dz» (zero, zaino).",
        en: "z sounds like 'ts' in zio and piazza; in other words it's 'dz' (zero, zaino).",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },

    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-luca", type: "listening", target: "Mi chiamo Luca. Ho una sorella, Anna, e un fratello, Marco. Anna è sposata e ha due figli.",
      gloss: {
        es: "Me llamo Luca. Tengo una hermana, Anna, y un hermano, Marco. Anna está casada y tiene dos hijos.",
        en: "My name is Luca. I have a sister, Anna, and a brother, Marco. Anna is married and has two children.",
      },
      question: {
        prompt: { es: "¿Quién tiene hijos?", en: "Who has children?" },
        options: ["Anna", "Marco", "Luca"],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "family"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-figlio", legacyId: "it-p-gli", type: "bridge", onlyFor: "es", target: "figlio",
      gloss: { es: "hijo", en: "son" },
      distractors: ["fijo", "filio", "figio"],
      note: { es: "j → gli: hijo → figlio, ajo → aglio, mujer → moglie (esposa)." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
