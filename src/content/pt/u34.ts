import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u34",
  lang: "pt",
  index: 34,
  cefr: "C2",
  title: { target: "Estilo e retórica", es: "Estilo y retórica", en: "Style and rhetoric" },
  canDo: [
    { es: "Reconozco y uso figuras retóricas (metáfora, eufemismo, hipérbole) y adapto el estilo al registro.", en: "I can recognise and use figures of speech (metaphor, euphemism, hyperbole) and adapt style to register." },
    { es: "Evito los «vícios de linguagem» (há anos atrás, subir para cima) y uso la topicalización del habla.", en: "I can avoid common redundancies (há anos atrás, subir para cima) and use spoken topicalisation." },
  ],
  icon: "🎨",
  items: build("pt", 34, "C2", [
    { id: "metafora", type: "word", pos: "noun", target: "a metáfora", gender: "f", plural: "as metáforas", gloss: { es: "la metáfora", en: "the metaphor" }, distractors: ["o metáforo", "a metafórica", "a metamorfose"], tags: ["rhetoric"] },
    { id: "eufemismo", type: "word", pos: "noun", target: "o eufemismo", gender: "m", plural: "os eufemismos", gloss: { es: "el eufemismo", en: "the euphemism" }, distractors: ["a eufemia", "o eufórico", "o eufonismo"], tags: ["rhetoric"] },
    { id: "hiperbole", type: "word", pos: "noun", target: "a hipérbole", gender: "f", plural: "as hipérboles", gloss: { es: "la hipérbole, la exageración", en: "the hyperbole" }, distractors: ["o hipérbole", "a hipérbola", "a hipótese"], tags: ["rhetoric"] },
    { id: "pleonasmo", type: "word", pos: "noun", target: "o pleonasmo", gender: "m", plural: "os pleonasmos", gloss: { es: "el pleonasmo, la redundancia", en: "the pleonasm / redundancy" }, distractors: ["a pleonasia", "o plasma", "o pleito"], grammar: ["pt-g-vicios-linguagem"], tags: ["rhetoric", "style"] },
    { id: "ambiguidade", type: "word", pos: "noun", target: "a ambiguidade", gender: "f", plural: "as ambiguidades", gloss: { es: "la ambigüedad", en: "the ambiguity" }, distractors: ["a ambigüidade", "o ambíguo", "a ambiência"], note: { es: "Desde 2009 no se usa diéresis: ambiguidade, linguiça, frequente.", en: "No diaeresis since 2009: ambiguidade, linguiça, frequente." }, tags: ["rhetoric", "spelling"] },
    { id: "rebuscado", type: "word", pos: "adj", target: "rebuscado", gloss: { es: "rebuscado, afectado", en: "over-elaborate / pretentious" }, accept: [{ text: "rebuscada" }], distractors: ["buscado", "requintado de", "arrebatado"], tags: ["style"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "partiu-desta", type: "sentence", target: "O avô dela partiu desta para melhor no ano passado.",
      gloss: { es: "Su abuelo pasó a mejor vida el año pasado.", en: "Her grandfather passed away last year." },
      accept: [{ text: "O avô dela faleceu no ano passado." }, { text: "O avô dela partiu dessa para melhor no ano passado." }],
      distractors: ["partiu-se", "dessa", "avó"],
      note: { es: "Eufemismo de «morreu»; también «faleceu» (formal) o «bateu as botas» (vulgar y humorístico).", en: "A euphemism for 'morreu'; also 'faleceu' (formal) or 'bateu as botas' (jokey, like 'kicked the bucket')." },
      tags: ["rhetoric", "euphemism"],
    },
    {
      id: "um-milhao-de-vezes", type: "sentence", target: "Já te falei um milhão de vezes!",
      gloss: { es: "¡Ya te lo dije un millón de veces!", en: "I've told you a million times!" },
      accept: [{ text: "Eu já te falei um milhão de vezes!" }, { text: "Já falei pra você um milhão de vezes!" }],
      distractors: ["milhões", "mil vez", "falo"],
      tags: ["rhetoric", "hyperbole"],
    },
    {
      id: "ha-dez-anos", type: "sentence", target: "Mudei para cá há dez anos.",
      gloss: { es: "Me mudé aquí hace diez años.", en: "I moved here ten years ago." },
      accept: [{ text: "Eu me mudei para cá há dez anos." }, { text: "Mudei para cá dez anos atrás." }, { text: "Mudei para cá faz dez anos." }, { text: "Eu me mudei para cá faz dez anos." }],
      errors: [{ text: "Mudei para cá há dez anos atrás.", feedback: { es: "Redundante: «há» ya significa «hace»; usa «há dez anos» o «dez anos atrás».", en: "Redundant: 'há' already means 'ago'; use 'há dez anos' or 'dez anos atrás'." }, ruleId: "pt-g-vicios-linguagem" }],
      distractors: ["a", "atrás", "faz"],
      tags: ["style"],
    },
    {
      id: "esse-livro-eu-li", type: "sentence", target: "Esse livro, eu já li duas vezes.",
      gloss: { es: "Ese libro ya lo leí dos veces.", en: "That book, I've read twice already." },
      accept: [{ text: "Esse livro eu já li duas vezes." }],
      distractors: ["o", "lhe", "lido"],
      grammar: ["pt-g-topicalizacao"], tags: ["style", "spoken"],
    },
    {
      id: "a-casa-caiu", type: "sentence", target: "Quando o chefe descobriu, a casa caiu.",
      gloss: { es: "Cuando el jefe se enteró, se armó la gorda.", en: "When the boss found out, all hell broke loose." },
      distractors: ["cai", "a caixa", "descobriu-se"],
      note: { es: "Metáfora coloquial: «a casa caiu» = todo salió a la luz y vinieron los problemas.", en: "Colloquial metaphor: 'a casa caiu' = the game's up, trouble followed." },
      tags: ["rhetoric", "metaphor", "idiom"],
    },
    { id: "antitese", type: "word", pos: "noun", target: "a antítese", gender: "f", plural: "as antíteses", gloss: { es: "la antítesis", en: "the antithesis" }, distractors: ["o antítese", "a antítesis", "a hipótese"], tags: ["rhetoric"] },
    { id: "elo", type: "sentence", target: "A educação é o elo entre o passado e o futuro.", gloss: { es: "La educación es el eslabón entre el pasado y el futuro.", en: "Education is the link between past and future." }, errors: [{ text: "A educação é o elo de ligação entre o passado e o futuro.", feedback: { es: "Redundante: «elo» ya es una conexión.", en: "Redundant: 'elo' already means link." }, ruleId: "pt-g-vicios-linguagem" }], distractors: ["ligação", "elos", "do"], tags: ["rhetoric", "style"] },
    { id: "encarar", type: "sentence", target: "Temos que encarar o problema.", gloss: { es: "Tenemos que enfrentar el problema.", en: "We have to face up to the problem." }, accept: [{ text: "A gente tem que encarar o problema." }], errors: [{ text: "Temos que encarar de frente o problema.", feedback: { es: "«encarar» ya es «de frente»: sobra.", en: "'encarar' already means face to face: drop 'de frente'." }, ruleId: "pt-g-vicios-linguagem" }], distractors: ["frente", "enfrente", "encara"], tags: ["style"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-topicalizacao", type: "pattern", target: "Esse filme, eu adorei. · O João, ele não vem.",
      gloss: { es: "la topicalización (tema al principio)", en: "topicalisation (topic first)" },
      pattern: {
        rule: {
          es: "El portugués hablado de Brasil adelanta el tema y luego hace el comentario: Essa rua, eu nunca passei nela. A diferencia del español, a menudo sin pronombre de retoma (Esse livro, eu li). En textos formales se prefiere el orden canónico.",
          en: "Spoken Brazilian Portuguese puts the topic first, then comments on it: Essa rua, eu nunca passei nela. Often without a resumptive pronoun (Esse livro, eu li). Formal writing prefers normal word order.",
        },
        table: [["fala", "Esse filme, eu já vi."], ["fala", "A Maria, ela chegou?"], ["norma", "Eu já vi esse filme."], ["ênfase", "Isso eu não aceito."]],
      },
      question: {
        prompt: { es: "¿Cuál es la versión formal de «Essa reunião, ninguém avisou a gente»?", en: "Which is the formal version of 'Essa reunião, ninguém avisou a gente'?" },
        options: ["Ninguém nos avisou dessa reunião.", "Essa reunião, ninguém nos avisou ela.", "Ninguém avisou a gente da reunião essa.", "Dessa reunião, avisou-nos ninguém."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-topicalizacao"], tags: ["grammar", "style"],
    },
    {
      id: "pat-vicios", type: "pattern", target: "há anos atrás · subir para cima · elo de ligação",
      gloss: { es: "vicios de lenguaje (redundancias)", en: "redundancies to avoid" },
      pattern: {
        rule: {
          es: "Algunas redundancias son muy frecuentes pero mal vistas en textos cuidados: há dez anos atrás, subir para cima, descer para baixo, elo de ligação, encarar de frente, surpresa inesperada, a nível de.",
          en: "Some redundancies are very common but frowned upon in careful writing: há dez anos atrás, subir para cima (go up upwards), elo de ligação, encarar de frente, surpresa inesperada, a nível de.",
        },
        table: [["há dez anos atrás", "há dez anos"], ["subir para cima", "subir"], ["elo de ligação", "elo"], ["encarar de frente", "encarar"], ["surpresa inesperada", "surpresa"]],
      },
      question: {
        prompt: { es: "¿Cuál NO es redundante?", en: "Which one is NOT redundant?" },
        options: ["Ele entrou no prédio.", "Ele entrou para dentro do prédio.", "Ele saiu para fora do prédio.", "Ele subiu para cima do prédio."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-vicios-linguagem"], tags: ["grammar", "style"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-discurso-politico", type: "listening", target: "Não se trata de uma crise, mas de um momento de ajuste. A economia está, digamos, respirando antes de voltar a correr.",
      gloss: { es: "No se trata de una crisis, sino de un momento de ajuste. La economía está, digamos, tomando aire antes de volver a correr.", en: "This isn't a crisis but a period of adjustment. The economy is, let's say, catching its breath before running again." },
      question: {
        prompt: { es: "¿Qué recurso usa el orador?", en: "What device does the speaker use?" },
        options: [
          { es: "Eufemismo y metáfora para suavizar una crisis", en: "Euphemism and metaphor to soften a crisis" },
          { es: "Hipérbole para exagerar el crecimiento", en: "Hyperbole to exaggerate growth" },
          { es: "Ironía contra el gobierno", en: "Irony against the government" },
          { es: "Datos precisos", en: "Precise figures" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "rhetoric"],
    },
    {
      id: "dlg-estilo", type: "dialogue", target: "Simplifica!",
      gloss: { es: "¡Simplifica!", en: "Keep it simple!" },
      turns: [
        { who: "A", target: "Escrevi: «Outrossim, faz-se mister salientar a relevância hodierna do tema.» Ficou bom?", gloss: { es: "Escribí: «Asimismo, se hace menester destacar la relevancia actual del tema.» ¿Quedó bien?", en: "I wrote: 'Furthermore, it behoves us to underline the present-day relevance of the topic.' Is that OK?" } },
        { who: "B", target: "Tá rebuscado demais! Simplifica: «Além disso, o tema é muito atual.»", gloss: { es: "¡Está demasiado rebuscado! Simplifica: «Además, el tema es muy actual.»", en: "Way too fancy! Keep it simple: 'Besides, the topic is very current.'" } },
      ],
      question: {
        prompt: { es: "¿Qué critica B?", en: "What does B criticise?" },
        options: [
          { es: "El estilo demasiado rebuscado", en: "The over-elaborate style" },
          { es: "La gramática", en: "The grammar" },
          { es: "El tema", en: "The topic" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "style"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-bater-as-botas", type: "bridge", onlyFor: "es", target: "bater as botas",
      gloss: { es: "estirar la pata (morir, humorístico)", en: "to kick the bucket" },
      distractors: ["estirar a pata", "bater os pés", "tirar as botas"],
      note: { es: "Para «estirar la pata» el portugués dice «bater as botas» o «esticar as canelas»." },
      exercises: ["guess", "recall"], tags: ["bridge", "idiom", "euphemism"],
    },
    {
      id: "br-en-casa-caiu", type: "bridge", onlyFor: "en", target: "A casa caiu.",
      gloss: { es: "Se descubrió todo / se armó lío.", en: "The game's up." },
      distractors: ["A casa caída.", "Caiu-se a casa.", "A casa cai abaixo."],
      note: { en: "Literally 'the house fell down': a secret came out and trouble followed." },
      exercises: ["guess", "recall"], tags: ["bridge", "idiom"],
    },
  ]),
};
