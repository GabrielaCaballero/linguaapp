import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u05",
  lang: "pt",
  index: 5,
  cefr: "A1.1",
  title: { target: "A família", es: "La familia", en: "Family" },
  canDo: [
    { es: "Puedo presentar a mi familia y hablar de mis hermanos, hijos y abuelos.", en: "I can introduce my family and talk about my siblings, children and grandparents." },
    { es: "Sé usar los posesivos (meu, minha, seu, sua) y «dele / dela».", en: "I can use possessives (meu, minha, seu, sua) and dele / dela." },
    { es: "Distingo avô de avó al oírlos.", en: "I can hear the difference between avô and avó." },
  ],
  icon: "👨‍👩‍👧",
  items: build("pt", 5, "A1.1", [
    {
      id: "s-avo", type: "sound", target: "avó",
      gloss: { es: "abuela", en: "grandmother" },
      pair: ["avó", "avô"], distractors: ["avô", "avo", "abó"],
      note: {
        es: "avó (abuela) tiene una o abierta, como «ó» de «sol»; avô (abuelo), una o cerrada, casi «u».",
        en: "avó (grandmother) has an open o, as in 'saw'; avô (grandfather) a closed o, as in 'go'.",
      },
      slow: true, exercises: ["pick-spelling", "listen"], tags: ["sound", "open-closed", "minimal-pair"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "mae", type: "word", pos: "noun", target: "a mãe", gender: "f", plural: "as mães", gloss: { es: "la madre", en: "the mother" }, distractors: ["a mão", "o mãe", "a mai"], tags: ["family"] },
    { id: "pai", type: "word", pos: "noun", target: "o pai", gender: "m", plural: "os pais", gloss: { es: "el padre", en: "the father" }, distractors: ["o país", "a pai", "o padre"], note: { es: "«o padre» es el cura.", en: "'o padre' is a priest." }, tags: ["family"] },
    { id: "os-pais", type: "word", pos: "noun", target: "os pais", gender: "m", plural: "os pais", gloss: { es: "los padres (madre y padre)", en: "the parents" }, distractors: ["os países", "os parentes", "as pais"], tags: ["family"] },
    { id: "irmao", type: "word", pos: "noun", target: "o irmão", gender: "m", plural: "os irmãos", gloss: { es: "el hermano", en: "the brother" }, distractors: ["a irmã", "o hermano", "o irmã"], note: { es: "Plural: os irmãos, que también significa «los hermanos» (varones y mujeres).", en: "Plural: os irmãos, which also means 'brothers and sisters'." }, tags: ["family"] },
    { id: "irma", type: "word", pos: "noun", target: "a irmã", gender: "f", plural: "as irmãs", gloss: { es: "la hermana", en: "the sister" }, distractors: ["o irmão", "a irmão", "a hermana"], tags: ["family"] },
    { id: "filho", type: "word", pos: "noun", target: "o filho", gender: "m", plural: "os filhos", gloss: { es: "el hijo", en: "the son" }, distractors: ["a filha", "o fio", "o hijo"], tags: ["family"] },
    { id: "filha", type: "word", pos: "noun", target: "a filha", gender: "f", plural: "as filhas", gloss: { es: "la hija", en: "the daughter" }, distractors: ["o filho", "a fila", "a hija"], tags: ["family"] },
    { id: "avo-m", type: "word", pos: "noun", target: "o avô", gender: "m", plural: "os avôs", gloss: { es: "el abuelo", en: "the grandfather" }, distractors: ["a avó", "o avó", "o abuelo"], note: { es: "Los abuelos (los dos) son «os avós».", en: "Grandparents are 'os avós'." }, tags: ["family", "minimal-pair"] },
    { id: "avo-f", type: "word", pos: "noun", target: "a avó", gender: "f", plural: "as avós", gloss: { es: "la abuela", en: "the grandmother" }, distractors: ["o avô", "a avô", "a abuela"], tags: ["family", "minimal-pair"] },
    { id: "marido", type: "word", pos: "noun", target: "o marido", gender: "m", plural: "os maridos", gloss: { es: "el marido, el esposo", en: "the husband" }, distractors: ["a mulher", "o mareado", "o noivo"], tags: ["family"] },
    { id: "esposa", type: "word", pos: "noun", target: "a esposa", gender: "f", plural: "as esposas", gloss: { es: "la esposa", en: "the wife" }, accept: [{ text: "a mulher" }], variants: [{ region: "PT", text: "a mulher", note: { es: "En Portugal se dice más «a mulher» (mi mujer).", en: "In Portugal people mostly say 'a mulher'." } }], distractors: ["o marido", "a esposo", "a noiva"], tags: ["family"] },
    { id: "namorado", type: "word", pos: "noun", target: "o namorado", gender: "m", plural: "os namorados", gloss: { es: "el novio (pareja, sin boda)", en: "the boyfriend" }, accept: [{ text: "a namorada" }], distractors: ["o noivo", "o enamorado", "o marido"], note: { es: "«o noivo» es el novio con compromiso de boda (o en la boda).", en: "'o noivo' is a fiancé or bridegroom." }, tags: ["family", "relationships"] },
    { id: "casado", type: "word", pos: "adj", target: "casado", gloss: { es: "casado", en: "married" }, accept: [{ text: "casada" }], distractors: ["cansado", "casa", "solteiro"], note: { es: "Ojo con «cansado» (cansado): una sola letra de diferencia.", en: "Careful: 'cansado' means tired." }, tags: ["family", "relationships"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "tenho-dois-irmaos", type: "sentence", target: "Eu tenho dois irmãos e uma irmã.",
      gloss: { es: "Tengo dos hermanos y una hermana.", en: "I have two brothers and a sister." },
      accept: [{ text: "Tenho dois irmãos e uma irmã." }],
      distractors: ["duas", "irmão", "um"],
      tags: ["family"],
    },
    {
      id: "minha-mae-se-chama", type: "sentence", target: "Minha mãe se chama Lúcia.",
      gloss: { es: "Mi madre se llama Lúcia.", en: "My mother's name is Lúcia." },
      accept: [{ text: "A minha mãe se chama Lúcia." }, { text: "O nome da minha mãe é Lúcia." }],
      errors: [{ text: "Meu mãe se chama Lúcia.", feedback: { es: "El posesivo concuerda con lo poseído: minha mãe.", en: "The possessive agrees with the thing owned: minha mãe." }, ruleId: "pt-g-possessivos" }],
      distractors: ["Meu", "chamo", "é"],
      note: { es: "En Brasil el artículo antes del posesivo es opcional: (a) minha mãe; en Portugal se pone siempre.", en: "In Brazil the article before a possessive is optional: (a) minha mãe; in Portugal it's always there." },
      tags: ["family"],
    },
    {
      id: "voce-e-casada", type: "sentence", target: "Você é casada?", register: "informal",
      gloss: { es: "¿Estás casada?", en: "Are you married? (informal)" },
      accept: [{ text: "Você é casado?" }],
      errors: [{ text: "Você está casada?", feedback: { es: "El estado civil va con «ser»: você é casada?", en: "Marital status takes 'ser': você é casada?" } }],
      distractors: ["está", "cansada", "o senhor"],
      tags: ["family", "relationships"],
    },
    {
      id: "o-senhor-e-casado", type: "sentence", target: "O senhor é casado?", register: "formal",
      gloss: { es: "¿Está casado (usted)?", en: "Are you married? (formal)" },
      accept: [{ text: "A senhora é casada?" }],
      distractors: ["você", "está", "cansado"],
      tags: ["family", "relationships", "register"],
    },
    {
      id: "o-irmao-dela", type: "sentence", target: "O irmão dela mora em Brasília.",
      gloss: { es: "El hermano de ella vive en Brasilia.", en: "Her brother lives in Brasília." },
      errors: [{ text: "O irmão de ela mora em Brasília.", feedback: { es: "de + ela = dela.", en: "de + ela = dela." }, ruleId: "pt-g-dele-dela" }, { text: "Seu irmão mora em Brasília.", feedback: { es: "«seu» se entiende como «tu»; para «de ella» se usa «dela».", en: "'seu' is understood as 'your'; for 'her' use 'dela'." }, ruleId: "pt-g-dele-dela" }],
      distractors: ["dele", "sua", "de"],
      tags: ["family", "possessives"],
    },
    {
      id: "estes-sao-meus-filhos", type: "sentence", target: "Estes são os meus filhos.",
      gloss: { es: "Estos son mis hijos.", en: "These are my children." },
      accept: [{ text: "Esses são os meus filhos." }, { text: "Esses são meus filhos." }, { text: "Estes são meus filhos." }],
      distractors: ["minhas", "Este", "é"],
      note: { es: "os filhos = los hijos, varones y mujeres juntos.", en: "os filhos = sons and daughters together." },
      tags: ["family", "possessives"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-possessivos", type: "paradigm", target: "meu, minha, meus, minhas", spoken: "meu, minha, meus, minhas",
      gloss: { es: "los posesivos de «yo»", en: "the possessives for 'my'" },
      grammar: ["pt-g-possessivos"],
      paradigm: {
        caption: { es: "Completa con el posesivo «mi / mis»", en: "Fill in 'my'" },
        cells: [
          { label: "___ pai", answer: "meu", ruleId: "pt-g-possessivos" },
          { label: "___ mãe", answer: "minha", ruleId: "pt-g-possessivos" },
          { label: "___ avós", answer: "meus", ruleId: "pt-g-possessivos" },
          { label: "___ irmãs", answer: "minhas", ruleId: "pt-g-possessivos" },
        ],
      },
      tags: ["grammar", "possessives", "table"],
    },
    {
      id: "pat-dele-dela", type: "pattern", target: "o pai dele · a mãe dela",
      gloss: { es: "«de él / de ella»: dele, dela", en: "his / her: dele, dela" },
      pattern: {
        rule: {
          es: "En Brasil «seu / sua» se entiende casi siempre como «tu» (de você). Para «su» de él o de ella se usa dele / dela detrás del sustantivo: a casa dele.",
          en: "In Brazil 'seu / sua' is mostly heard as 'your' (você's). For his / her, put dele / dela after the noun: a casa dele (his house).",
        },
        table: [["de você", "o seu carro"], ["de ele", "o carro dele"], ["de ela", "o carro dela"], ["de eles", "o carro deles"]],
      },
      question: {
        prompt: { es: "«Es la casa de ella» se dice…", en: "'It's her house' is…" },
        options: ["É a casa dela.", "É a casa dele.", "É dela casa.", "É a casa de ela."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-dele-dela"], tags: ["grammar", "possessives"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-familia", type: "listening", target: "Minha família é pequena. Eu moro com a minha mãe e o meu avô. Meu pai mora em Fortaleza com a esposa dele.",
      gloss: { es: "Mi familia es pequeña. Vivo con mi madre y mi abuelo. Mi padre vive en Fortaleza con su esposa.", en: "My family is small. I live with my mother and my grandfather. My father lives in Fortaleza with his wife." },
      question: {
        prompt: { es: "¿Con quién vive la persona que habla?", en: "Who does the speaker live with?" },
        options: [
          { es: "Con su madre y su abuelo", en: "With their mother and grandfather" },
          { es: "Con su madre y su abuela", en: "With their mother and grandmother" },
          { es: "Con su padre en Fortaleza", en: "With their father in Fortaleza" },
          { es: "Sola", en: "Alone" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "family"],
    },
    {
      id: "dlg-foto", type: "dialogue", target: "Essa é a minha avó.",
      gloss: { es: "Esa es mi abuela.", en: "That's my grandmother." },
      turns: [
        { who: "A", target: "Quem é essa senhora na foto?", gloss: { es: "¿Quién es esa señora de la foto?", en: "Who's that lady in the photo?" } },
        { who: "B", target: "Essa é a minha avó. Ela tem noventa anos!", gloss: { es: "Esa es mi abuela. ¡Tiene noventa años!", en: "That's my grandmother. She's ninety!" } },
        { who: "A", target: "Nossa! E esse menino?", gloss: { es: "¡Guau! ¿Y ese niño?", en: "Wow! And that boy?" } },
        { who: "B", target: "É o filho da minha irmã, o Davi.", gloss: { es: "Es el hijo de mi hermana, Davi.", en: "That's my sister's son, Davi." } },
      ],
      question: {
        prompt: { es: "¿Quién es Davi?", en: "Who is Davi?" },
        options: [
          { es: "El sobrino de B", en: "B's nephew" },
          { es: "El hijo de B", en: "B's son" },
          { es: "El hermano de B", en: "B's brother" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "family"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pais", type: "bridge", onlyFor: "es", target: "o país",
      gloss: { es: "el país", en: "the country" },
      distractors: ["o pais", "os pais", "o paíz"],
      note: { es: "Con tilde, «país» es el país; sin tilde, «pais» son los padres (madre y padre)." },
      exercises: ["guess", "recall"], tags: ["bridge", "minimal-pair"],
    },
    {
      id: "br-parentes", type: "bridge", onlyFor: "en", target: "os parentes",
      gloss: { es: "los parientes", en: "the relatives" },
      question: {
        prompt: { es: "«Os meus parentes moram no Sul» quiere decir…", en: "'Os meus parentes moram no Sul' means…" },
        options: [{ es: "Mis parientes viven en el Sur.", en: "My relatives live in the South." }, { es: "Mis padres viven en el Sur.", en: "My parents live in the South." }, { es: "Mis amigos viven en el Sur.", en: "My friends live in the South." }],
        answer: 0,
      },
      note: { en: "False friend: parentes are relatives; your parents are 'os pais'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "family"],
    },
  ]),
};
