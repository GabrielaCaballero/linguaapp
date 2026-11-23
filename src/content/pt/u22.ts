import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u22",
  lang: "pt",
  index: 22,
  cefr: "B2",
  title: { target: "Arte e cultura", es: "Arte y cultura", en: "Art and culture" },
  canDo: [
    { es: "Puedo comentar una película, un libro, un concierto o una exposición.", en: "I can discuss a film, a book, a gig or an exhibition." },
    { es: "Sé usar el infinitivo personal (para nós irmos) y los relativos cujo, o qual, onde.", en: "I can use the personal infinitive (para nós irmos) and the relatives cujo, o qual, onde." },
  ],
  icon: "🎭",
  items: build("pt", 22, "B2", [
    { id: "exposicao", type: "word", pos: "noun", target: "a exposição", gender: "f", plural: "as exposições", gloss: { es: "la exposición, la muestra", en: "the exhibition" }, distractors: ["o exposição", "a exposissão", "a explosão"], tags: ["culture", "art"] },
    { id: "quadro", type: "word", pos: "noun", target: "o quadro", gender: "m", plural: "os quadros", gloss: { es: "el cuadro, la pintura", en: "the painting" }, distractors: ["a quadra", "o quarto", "o cuadro"], tags: ["culture", "art"] },
    { id: "peca", type: "word", pos: "noun", target: "a peça de teatro", gender: "f", plural: "as peças de teatro", gloss: { es: "la obra de teatro", en: "the play" }, distractors: ["a pieza de teatro", "o peço de teatro", "a pessa de teatro"], tags: ["culture", "theatre"] },
    { id: "enredo", type: "word", pos: "noun", target: "o enredo", gender: "m", plural: "os enredos", gloss: { es: "la trama, el argumento", en: "the plot" }, distractors: ["o enredado", "a enreda", "o enrosco"], note: { es: "En el Carnaval, «samba-enredo» es la canción que cuenta la historia del desfile.", en: "At Carnival, the 'samba-enredo' is the song that tells the parade's story." }, tags: ["culture", "literature"] },
    { id: "escritor", type: "word", pos: "noun", target: "o escritor", gender: "m", plural: "os escritores", gloss: { es: "el escritor", en: "the writer" }, accept: [{ text: "a escritora" }], distractors: ["o escrivão", "o escritório", "o escritor de"], tags: ["culture", "literature"] },
    { id: "emocionante", type: "word", pos: "adj", target: "emocionante", gloss: { es: "emocionante", en: "thrilling / moving" }, distractors: ["emocionado", "emotivo de", "emocional"], tags: ["culture", "opinion"] },
    { id: "estreia", type: "word", pos: "noun", target: "a estreia", gender: "f", plural: "as estreias", gloss: { es: "el estreno", en: "the premiere / opening night" }, distractors: ["a estrela", "o estreio", "a estreita"], tags: ["culture", "cinema"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "para-nos-irmos", type: "sentence", target: "Ela comprou ingressos para nós irmos ao show.",
      gloss: { es: "Compró entradas para que fuéramos al concierto.", en: "She bought tickets for us to go to the gig." },
      accept: [{ text: "Ela comprou ingressos para a gente ir ao show." }, { text: "Ela comprou ingressos pra gente ir ao show." }],
      variants: [{ region: "PT", text: "Ela comprou bilhetes para irmos ao concerto." }],
      errors: [{ text: "Ela comprou ingressos para nós ir ao show.", feedback: { es: "Con sujeto propio, el infinitivo se conjuga: nós irmos.", en: "With its own subject the infinitive is inflected: nós irmos." }, ruleId: "pt-g-infinitivo-pessoal" }],
      distractors: ["ir", "fôssemos", "entradas"],
      tags: ["culture", "personal-infinitive"],
    },
    {
      id: "e-melhor-eles-chegarem", type: "sentence", target: "É melhor vocês chegarem cedo, porque a fila é enorme.",
      gloss: { es: "Mejor lleguen temprano, porque la fila es enorme.", en: "You'd better get there early, because the queue is huge." },
      accept: [{ text: "É melhor que vocês cheguem cedo, porque a fila é enorme." }],
      distractors: ["chegar", "cheguem", "cola"],
      grammar: ["pt-g-infinitivo-pessoal"], tags: ["culture", "personal-infinitive"],
    },
    {
      id: "o-filme-cujo-diretor", type: "sentence", target: "Vi o filme cujo diretor ganhou o Oscar.",
      gloss: { es: "Vi la película cuyo director ganó el Óscar.", en: "I saw the film whose director won the Oscar." },
      errors: [{ text: "Vi o filme que o diretor ganhou o Oscar.", feedback: { es: "En la norma se usa «cujo»; «que o diretor» es muy coloquial.", en: "Standard Portuguese uses 'cujo'; 'que o diretor' is very colloquial." }, ruleId: "pt-g-relativos" }],
      variants: [{ region: "PT", text: "Vi o filme cujo realizador ganhou o Óscar.", note: { es: "En Portugal: o realizador (el director de cine) y o Óscar.", en: "In Portugal: o realizador (film director) and o Óscar." } }],
      distractors: ["cuyo", "do qual", "onde"],
      tags: ["culture", "relatives"],
    },
    {
      id: "a-cidade-onde", type: "sentence", target: "Santo Amaro é a cidade onde nasceu Caetano Veloso.",
      gloss: { es: "Santo Amaro es la ciudad donde nació Caetano Veloso.", en: "Santo Amaro is the town where Caetano Veloso was born." },
      accept: [{ text: "Santo Amaro é a cidade em que nasceu Caetano Veloso." }, { text: "Santo Amaro é a cidade onde Caetano Veloso nasceu." }],
      distractors: ["aonde", "que", "nasceram"],
      note: { es: "Santo Amaro da Purificação, en el Recôncavo bahiano, cerca de Salvador; allí nació también su hermana Maria Bethânia.", en: "Santo Amaro da Purificação, in Bahia's Recôncavo near Salvador; his sister Maria Bethânia was born there too." },
      tags: ["culture", "relatives", "music"],
    },
    {
      id: "o-livro-me-emocionou", type: "sentence", target: "O final do livro me emocionou muito.",
      gloss: { es: "El final del libro me emocionó mucho.", en: "The ending of the book really moved me." },
      accept: [{ text: "O fim do livro me emocionou muito." }],
      variants: [{ region: "PT", text: "O final do livro emocionou-me muito." }],
      distractors: ["emocionante", "de o", "eu"],
      tags: ["culture", "literature", "opinion"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-infinitivo-pessoal", type: "paradigm", target: "fazer — infinitivo pessoal", spoken: "fazer",
      gloss: { es: "infinitivo personal de «fazer»", en: "personal infinitive of fazer" },
      grammar: ["pt-g-infinitivo-pessoal"],
      paradigm: {
        caption: { es: "Completa: «É importante… isso» (que yo / tú / … lo haga)", en: "Complete: 'É importante… isso' (for me / you / … to do)" },
        cells: [
          { label: "eu", answer: "fazer", ruleId: "pt-g-infinitivo-pessoal" },
          { label: "você / ele / ela", answer: "fazer", ruleId: "pt-g-infinitivo-pessoal" },
          { label: "nós", answer: "fazermos", ruleId: "pt-g-infinitivo-pessoal" },
          { label: "vocês / eles / elas", answer: "fazerem", ruleId: "pt-g-infinitivo-pessoal" },
        ],
      },
      tags: ["grammar", "personal-infinitive", "table"],
    },
    {
      id: "pat-infinitivo-pessoal", type: "pattern", target: "para eu ir · para nós irmos · para eles irem",
      gloss: { es: "el infinitivo personal", en: "the personal infinitive" },
      pattern: {
        rule: {
          es: "Exclusivo del portugués: el infinitivo lleva terminación de persona cuando tiene sujeto propio: -mos (nós), -em (eles / vocês). Reemplaza a «para que + subjuntivo»: para nós irmos = para que vayamos.",
          en: "Unique to Portuguese: the infinitive takes person endings when it has its own subject: -mos (nós), -em (eles / vocês). It replaces 'para que + subjunctive': para nós irmos = so that we go.",
        },
        table: [["eu / ele", "para eu sair"], ["nós", "para nós sairmos"], ["eles / vocês", "para eles saírem"], ["= subjuntivo", "para que eles saiam"]],
      },
      question: {
        prompt: { es: "Completa: «O professor deu um exemplo para os alunos ___.» (entender)", en: "Complete: 'O professor deu um exemplo para os alunos ___.' (entender)" },
        options: ["entenderem", "entender", "entendam-se", "entendessem"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-infinitivo-pessoal"], tags: ["grammar", "personal-infinitive"],
    },
    {
      id: "pat-relativos", type: "pattern", target: "que · quem · cujo · o qual · onde",
      gloss: { es: "pronombres relativos", en: "relative pronouns" },
      pattern: {
        rule: {
          es: "«que» sirve casi siempre. Tras preposición con personas: quem (a pessoa com quem falei). cujo/cuja = cuyo/cuya, concuerda con lo poseído. o qual / a qual tras preposiciones largas (sobre o qual). onde = lugar.",
          en: "'que' works almost everywhere. After a preposition for people: quem (a pessoa com quem falei). cujo/cuja = whose, agreeing with the thing owned. o qual / a qual after longer prepositions (sobre o qual). onde = where.",
        },
        table: [["que", "O livro que li."], ["quem", "A amiga com quem viajei."], ["cujo", "O autor cuja obra estudei."], ["o qual", "O tema sobre o qual falamos."], ["onde", "A casa onde morei."]],
      },
      question: {
        prompt: { es: "Completa: «A cantora ___ música eu adoro vai se apresentar hoje.»", en: "Complete: 'A cantora ___ música eu adoro vai se apresentar hoje.'" },
        options: ["cuja", "cujo", "que a", "a qual"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-relativos"], tags: ["grammar", "relatives"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-bossa-nova", type: "listening", target: "A bossa nova nasceu no fim dos anos cinquenta, no Rio de Janeiro, misturando o samba com o jazz. «Garota de Ipanema», de Tom Jobim e Vinicius de Moraes, é uma das músicas mais gravadas do mundo.",
      gloss: { es: "La bossa nova nació a fines de los años cincuenta en Río de Janeiro, mezclando la samba con el jazz. «Garota de Ipanema», de Tom Jobim y Vinicius de Moraes, es una de las canciones más grabadas del mundo.", en: "Bossa nova was born in the late fifties in Rio de Janeiro, mixing samba with jazz. 'The Girl from Ipanema', by Tom Jobim and Vinicius de Moraes, is one of the most recorded songs in the world." },
      question: {
        prompt: { es: "¿Qué estilos mezcla la bossa nova?", en: "Which styles does bossa nova mix?" },
        options: [
          { es: "Samba y jazz", en: "Samba and jazz" },
          { es: "Rock y samba", en: "Rock and samba" },
          { es: "Forró y jazz", en: "Forró and jazz" },
          { es: "Fado y samba", en: "Fado and samba" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "culture", "music"],
    },
    {
      id: "dlg-filme", type: "dialogue", target: "Não é a minha praia.",
      gloss: { es: "No es lo mío.", en: "It's not my thing." },
      turns: [
        { who: "A", target: "Vamos ver o filme novo do Kleber Mendonça Filho?", gloss: { es: "¿Vamos a ver la película nueva de Kleber Mendonça Filho?", en: "Shall we see the new Kleber Mendonça Filho film?" } },
        { who: "B", target: "Ah, filme de suspense não é a minha praia. Prefiro comédia.", gloss: { es: "Ay, las películas de suspenso no son lo mío. Prefiero la comedia.", en: "Oh, thrillers aren't my thing. I prefer comedy." } },
        { who: "A", target: "Mas a crítica disse que é genial!", gloss: { es: "¡Pero la crítica dijo que es genial!", en: "But the critics say it's brilliant!" } },
      ],
      question: {
        prompt: { es: "¿Qué prefiere B?", en: "What does B prefer?" },
        options: [
          { es: "La comedia", en: "Comedy" },
          { es: "El suspenso", en: "Thrillers" },
          { es: "Ir a la playa", en: "Going to the beach" },
        ],
        answer: 0,
      },
      note: { es: "não é a minha praia = no es lo mío (literalmente «no es mi playa»).", en: "não é a minha praia = it's not my thing (literally 'not my beach')." },
      exercises: ["question"], tags: ["dialogue", "culture", "idiom"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-engracado", type: "bridge", onlyFor: "es", target: "engraçado",
      gloss: { es: "gracioso, divertido, chistoso", en: "funny" },
      question: {
        prompt: { es: "«Que filme engraçado!» quiere decir que la película es…", en: "'Que filme engraçado!' means the film is…" },
        options: [{ es: "divertida, graciosa", en: "funny" }, { es: "grasienta, de mal gusto", en: "tacky" }, { es: "aburrida", en: "boring" }],
        answer: 0,
      },
      note: { es: "«engraçado» = gracioso, chistoso; también «raro»: engraçado, não lembro (qué raro, no me acuerdo)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "culture"],
    },
    {
      id: "br-en-sensivel", type: "bridge", onlyFor: "en", target: "uma pessoa sensata",
      gloss: { es: "una persona sensata", en: "a sensible person" },
      distractors: ["uma pessoa sensível", "uma pessoa sensorial", "uma pessoa sentida"],
      note: { en: "False friend: sensível = sensitive; sensible is 'sensato'." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend"],
    },
  ]),
};
