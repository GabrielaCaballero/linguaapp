import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u05",
  lang: "fr",
  index: 5,
  cefr: "A1.1",
  title: { target: "La famille", es: "La familia", en: "Family" },
  canDo: [
    { es: "Puedo hablar de mi familia y preguntar por la de otra persona.", en: "I can talk about my family and ask about someone else's." },
    { es: "Puedo describir a una persona con adjetivos sencillos.", en: "I can describe a person with simple adjectives." },
    { es: "Sé usar los posesivos mon, ma, mes, son, sa, ses…", en: "I can use the possessives mon, ma, mes, son, sa, ses…" },
  ],
  icon: "👨‍👩‍👧",
  items: build("fr", 5, "A1.1", [
    { id: "famille", type: "word", pos: "noun", target: "la famille", gender: "f", plural: "les familles", gloss: { es: "la familia", en: "the family" }, distractors: ["le famille", "la famine", "la fille"], note: { es: "«-ille» suena «iy»: famille ≈ «famíy».", en: "'-ille' sounds like 'ee-y': famille ≈ 'fa-mee-y'." }, tags: ["family"] },
    { id: "mere", type: "word", pos: "noun", target: "la mère", gender: "f", plural: "les mères", gloss: { es: "la madre", en: "the mother" }, distractors: ["la mer", "le mère", "la maire"], note: { es: "Suena igual que «la mer» (el mar). Cariñoso: maman.", en: "Sounds like 'la mer' (the sea). Affectionate: maman." }, tags: ["family"] },
    { id: "pere", type: "word", pos: "noun", target: "le père", gender: "m", plural: "les pères", gloss: { es: "el padre", en: "the father" }, distractors: ["la père", "la paire", "le pré"], note: { es: "Cariñoso: papa (sin acento).", en: "Affectionate: papa (no accent)." }, tags: ["family"] },
    { id: "frere", type: "word", pos: "noun", target: "le frère", gender: "m", plural: "les frères", gloss: { es: "el hermano", en: "the brother" }, distractors: ["la frère", "le frein", "le fer"], tags: ["family"] },
    { id: "soeur", type: "word", pos: "noun", target: "la sœur", gender: "f", plural: "les sœurs", accept: [{ text: "la soeur" }], gloss: { es: "la hermana", en: "the sister" }, distractors: ["le sœur", "la sueur", "la sour"], note: { es: "Si no tienes «œ» en el teclado, «oe» también vale.", en: "If your keyboard has no 'œ', 'oe' is fine." }, tags: ["family"] },
    { id: "fils", type: "word", pos: "noun", target: "le fils", gender: "m", plural: "les fils", gloss: { es: "el hijo", en: "the son" }, distractors: ["la fils", "le fil", "la fille"], note: { es: "Suena «fis»: la l no suena y la s sí.", en: "Pronounced 'fees': the l is silent and the s is heard." }, tags: ["family"] },
    { id: "fille", type: "word", pos: "noun", target: "la fille", gender: "f", plural: "les filles", gloss: { es: "la hija / la chica", en: "the daughter / the girl" }, distractors: ["le fille", "la file", "la feuille"], tags: ["family"] },
    { id: "enfant", type: "word", pos: "noun", target: "l'enfant", gender: "m", plural: "les enfants", gloss: { es: "el niño / el hijo (en general)", en: "the child" }, distractors: ["le enfant", "l'enfance", "l'éléphant"], note: { es: "Puede ser masculino o femenino: un enfant, une enfant.", en: "Can be masculine or feminine: un enfant, une enfant." }, tags: ["family"] },
    { id: "grands-parents", type: "word", pos: "noun", target: "les grands-parents", gender: "m", plural: "les grands-parents", gloss: { es: "los abuelos", en: "the grandparents" }, distractors: ["les grand-parents", "les gros-parents", "les parents"], note: { es: "La abuela: la grand-mère; el abuelo: le grand-père.", en: "Grandmother: la grand-mère; grandfather: le grand-père." }, tags: ["family"] },
    { id: "mari", type: "word", pos: "noun", target: "le mari", gender: "m", plural: "les maris", gloss: { es: "el esposo (el marido)", en: "the husband" }, distractors: ["la mari", "le mardi", "la mairie"], note: { es: "La esposa: la femme (también «la mujer»).", en: "Wife: la femme (which also means 'woman')." }, tags: ["family"] },
    { id: "femme", type: "word", pos: "noun", target: "la femme", gender: "f", plural: "les femmes", gloss: { es: "la mujer / la esposa", en: "the woman / the wife" }, distractors: ["le femme", "la flamme", "la ferme"], note: { es: "Suena «fam», no «fem».", en: "Pronounced 'fam', not 'fem'." }, tags: ["family"] },
    { id: "grand", type: "word", pos: "adj", target: "grand", forms: { m: "grand", f: "grande", mpl: "grands", fpl: "grandes" }, accept: [{ text: "grande" }], gloss: { es: "alto/a / grande", en: "tall / big" }, distractors: ["gros", "gras", "gant"], tags: ["describe"] },
    { id: "petit", type: "word", pos: "adj", target: "petit", forms: { m: "petit", f: "petite", mpl: "petits", fpl: "petites" }, accept: [{ text: "petite" }], gloss: { es: "bajo/a / pequeño/a", en: "short / small" }, distractors: ["petite-fille", "patte", "peu"], tags: ["describe"] },
    { id: "gentil", type: "word", pos: "adj", target: "gentil", forms: { m: "gentil", f: "gentille" }, accept: [{ text: "gentille" }], gloss: { es: "amable, buena onda", en: "kind / nice" }, distractors: ["gentilé", "agile", "joli"], note: { es: "No es «gentil» en el sentido de elegante: il est gentil = es amable.", en: "Il est gentil = he's kind (not 'genteel')." }, tags: ["describe"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "ma-soeur-habite", type: "sentence", target: "Ma sœur habite à Bordeaux.",
      gloss: { es: "Mi hermana vive en Burdeos.", en: "My sister lives in Bordeaux." },
      accept: [{ text: "Ma soeur habite à Bordeaux." }],
      errors: [{ text: "Mon sœur habite à Bordeaux.", feedback: { es: "sœur es femenino: ma sœur.", en: "sœur is feminine: ma sœur." }, ruleId: "fr-g-possessifs" }],
      distractors: ["mon", "habitent", "en"],
      tags: ["family"],
    },
    {
      id: "mon-amie", type: "sentence", target: "Mon amie Sophie est très gentille.",
      gloss: { es: "Mi amiga Sophie es muy amable.", en: "My friend Sophie is very kind." },
      errors: [{ text: "Ma amie Sophie est très gentille.", feedback: { es: "Delante de vocal se usa «mon», aunque sea femenino: mon amie.", en: "Before a vowel use 'mon', even for a feminine noun: mon amie." }, ruleId: "fr-g-possessifs" }],
      distractors: ["ma", "gentil", "es"],
      tags: ["family", "friends"],
    },
    {
      id: "ses-enfants", type: "sentence", target: "Ses enfants sont petits.",
      gloss: { es: "Sus hijos (de él o de ella) son pequeños.", en: "His / her children are small." },
      distractors: ["leurs", "son", "petit"],
      note: { es: "«ses» vale para «de él» y «de ella»: el posesivo concuerda con lo que se posee.", en: "'ses' means both his and her: the possessive agrees with what is owned." },
      tags: ["family"],
    },
    {
      id: "tu-as-des-freres", type: "sentence", target: "Tu as des frères et sœurs ?", register: "informal",
      gloss: { es: "¿Tienes hermanos?", en: "Do you have any brothers or sisters?" },
      accept: [{ text: "Tu as des frères et soeurs ?" }, { text: "Est-ce que tu as des frères et sœurs ?" }],
      distractors: ["les", "avez", "frère"],
      tags: ["family", "questions"],
    },
    {
      id: "fils-unique", type: "sentence", target: "Je suis fils unique.",
      gloss: { es: "Soy hijo único.", en: "I'm an only child (said by a man)." },
      accept: [{ text: "Je suis fille unique." }],
      distractors: ["un", "seul", "le"],
      note: { es: "Una mujer dice «je suis fille unique».", en: "A woman says 'je suis fille unique'." },
      tags: ["family"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-possessifs", type: "pattern", target: "mon frère · ma sœur · mes parents",
      gloss: { es: "los posesivos (mi, tu, su…)", en: "possessives (my, your, his/her…)" },
      pattern: {
        rule: {
          es: "El posesivo concuerda con lo que se posee: mon (m), ma (f), mes (plural). Igual: ton/ta/tes, son/sa/ses. Delante de vocal, mon/ton/son también con femeninos: mon amie.",
          en: "The possessive agrees with the thing owned: mon (m), ma (f), mes (plural). Same with ton/ta/tes, son/sa/ses. Before a vowel use mon/ton/son even with feminine nouns: mon amie.",
        },
        table: [["", "m.", "f.", "pl."], ["je", "mon", "ma", "mes"], ["tu", "ton", "ta", "tes"], ["il / elle", "son", "sa", "ses"], ["nous / vous", "notre / votre", "notre / votre", "nos / vos"], ["ils / elles", "leur", "leur", "leurs"]],
      },
      question: {
        prompt: { es: "Completa: «Paul habite avec ___ mère.»", en: "Complete: 'Paul habite avec ___ mère.'" },
        options: ["sa", "son", "ses", "leur"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-possessifs"], tags: ["grammar", "possessives"],
    },
    {
      id: "tab-possessifs", type: "paradigm", target: "mon, ma, mes…", spoken: "mon, ma, mes",
      gloss: { es: "posesivos: «mi» con cada sustantivo", en: "possessives: 'my' with each noun" },
      grammar: ["fr-g-possessifs"],
      paradigm: {
        caption: { es: "Escribe «mi / mis» delante de cada palabra", en: "Write 'my' in front of each word" },
        cells: [
          { label: "___ père", answer: "mon", ruleId: "fr-g-possessifs" },
          { label: "___ mère", answer: "ma", ruleId: "fr-g-possessifs" },
          { label: "___ amie", answer: "mon", ruleId: "fr-g-possessifs" },
          { label: "___ parents", answer: "mes", ruleId: "fr-g-possessifs" },
          { label: "___ famille", answer: "ma", ruleId: "fr-g-possessifs" },
        ],
      },
      tags: ["grammar", "possessives", "table"],
    },
    {
      id: "pat-pluriel", type: "pattern", target: "un enfant → des enfants · un gâteau → des gâteaux",
      gloss: { es: "el plural de los sustantivos", en: "plural nouns" },
      pattern: {
        rule: {
          es: "En general se añade una -s que no suena. Las palabras en -eau y -eu llevan -x (gâteaux, cheveux) y muchas en -al cambian a -aux (un animal → des animaux).",
          en: "Usually add an -s, which is silent. Words in -eau and -eu take -x (gâteaux, cheveux), and many in -al become -aux (un animal → des animaux).",
        },
        table: [["un frère", "des frères"], ["un gâteau", "des gâteaux"], ["un journal", "des journaux"], ["le fils", "les fils"]],
      },
      question: {
        prompt: { es: "¿Cuál es el plural de «un cheval»?", en: "What's the plural of 'un cheval'?" },
        options: ["des chevaux", "des chevals", "des chevaus", "des cheveux"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-pluriel"], tags: ["grammar", "plural"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-famille", type: "listening",
      target: "Dans ma famille, nous sommes cinq : mes parents, mon frère, ma petite sœur et moi. Mes grands-parents habitent à la campagne.",
      gloss: {
        es: "En mi familia somos cinco: mis padres, mi hermano, mi hermana menor y yo. Mis abuelos viven en el campo.",
        en: "There are five of us in my family: my parents, my brother, my little sister and me. My grandparents live in the country.",
      },
      question: {
        prompt: { es: "¿Cuántos hermanos tiene la persona que habla?", en: "How many siblings does the speaker have?" },
        options: [
          { es: "Dos: un hermano y una hermana", en: "Two: a brother and a sister" },
          { es: "Cinco", en: "Five" },
          { es: "Uno", en: "One" },
          { es: "Ninguno", en: "None" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "family"],
    },
    {
      id: "dlg-photo", type: "dialogue", target: "C'est mon mari, Marc.", register: "informal",
      gloss: { es: "Es mi esposo, Marc.", en: "That's my husband, Marc." },
      turns: [
        { who: "A", target: "C'est qui, sur la photo ?", gloss: { es: "¿Quién es el de la foto?", en: "Who's that in the photo?" } },
        { who: "B", target: "C'est mon mari, Marc. Et là, ce sont nos enfants.", gloss: { es: "Es mi esposo, Marc. Y ahí están nuestros hijos.", en: "That's my husband, Marc. And there are our children." } },
        { who: "A", target: "Ils ont quel âge ?", gloss: { es: "¿Cuántos años tienen?", en: "How old are they?" } },
        { who: "B", target: "Notre fils a dix ans et notre fille a sept ans.", gloss: { es: "Nuestro hijo tiene diez años y nuestra hija, siete.", en: "Our son is ten and our daughter is seven." } },
      ],
      question: {
        prompt: { es: "¿Cuántos años tiene la hija?", en: "How old is the daughter?" },
        options: [
          { es: "Siete", en: "Seven" },
          { es: "Diez", en: "Ten" },
          { es: "Dos", en: "Two" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "family"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-parents", type: "bridge", onlyFor: "es", target: "les parents",
      gloss: { es: "los padres (y también los parientes)", en: "the parents (and also relatives)" },
      question: {
        prompt: { es: "«Mes parents habitent à Lyon» significa…", en: "'Mes parents habitent à Lyon' means…" },
        options: [
          { es: "Mis padres viven en Lyon", en: "My parents live in Lyon" },
          { es: "Mis parientes lejanos viven en Lyon", en: "My distant relatives live in Lyon" },
          { es: "Mis abuelos viven en Lyon", en: "My grandparents live in Lyon" },
        ],
        answer: 0,
      },
      note: { es: "«les parents» son sobre todo el padre y la madre; para parientes se dice también «la famille»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-son-sa", type: "bridge", onlyFor: "es", target: "sa maison",
      gloss: { es: "su casa (de él o de ella)", en: "his / her house" },
      distractors: ["son maison", "sa maisón", "ses maison"],
      note: { es: "Como «su» en español, «son/sa» no dice si es de él o de ella; solo concuerda con la cosa: sa maison (f)." },
      exercises: ["guess", "recall"], tags: ["bridge", "possessives"],
    },
  ]),
};
