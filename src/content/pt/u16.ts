import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u16",
  lang: "pt",
  index: 16,
  cefr: "B1",
  title: { target: "Histórias", es: "Relatos", en: "Stories" },
  canDo: [
    { es: "Puedo contar una anécdota en orden, con conectores (de repente, então, no fim).", en: "I can tell an anecdote in order, with linking words (de repente, então, no fim)." },
    { es: "Sé usar el pluscuamperfecto (eu tinha saído) y los participios irregulares.", en: "I can use the past perfect (eu tinha saído) and irregular past participles." },
  ],
  icon: "📖",
  items: build("pt", 16, "B1", [
    { id: "acontecer", type: "word", pos: "verb", target: "acontecer", gloss: { es: "pasar, ocurrir", en: "to happen" }, forms: { "pret.": "aconteceu" }, distractors: ["contecer", "passar-se de", "acontecimento"], note: { es: "O que aconteceu? = ¿Qué pasó?", en: "O que aconteceu? = What happened?" }, tags: ["narrative", "verbs"] },
    { id: "perceber", type: "word", pos: "verb", target: "perceber", gloss: { es: "darse cuenta, notar", en: "to realise / to notice" }, forms: { "pret.": "percebi" }, distractors: ["receber", "perder", "realizar"], tags: ["narrative", "verbs"] },
    { id: "lembrar-se", type: "word", pos: "verb", target: "lembrar-se de", gloss: { es: "acordarse de, recordar", en: "to remember" }, forms: { eu: "me lembro" }, accept: [{ text: "lembrar de" }], distractors: ["acordar-se de", "lembrar a", "recordar-se em"], tags: ["narrative", "verbs"] },
    { id: "esquecer", type: "word", pos: "verb", target: "esquecer", gloss: { es: "olvidar", en: "to forget" }, forms: { "pret.": "esqueci" }, distractors: ["esquentar", "olvidar", "esquisito"], tags: ["narrative", "verbs"] },
    { id: "susto", type: "word", pos: "noun", target: "o susto", gender: "m", plural: "os sustos", gloss: { es: "el susto", en: "the fright / scare" }, distractors: ["a susta", "o sustento", "o custo"], tags: ["narrative", "feelings"] },
    { id: "de-repente", type: "phrase", pos: "phrase", target: "de repente", gloss: { es: "de repente", en: "suddenly" }, distractors: ["do repente", "derrepente", "de pressa"], note: { es: "Se escribe separado: de repente.", en: "Two words: de repente." }, tags: ["narrative", "connectors"] },
    { id: "enquanto", type: "word", pos: "other", target: "enquanto", gloss: { es: "mientras", en: "while" }, distractors: ["entanto", "quanto", "em quanto"], tags: ["narrative", "connectors"] },
    { id: "no-fim", type: "phrase", pos: "phrase", target: "no fim", gloss: { es: "al final", en: "in the end" }, accept: [{ text: "no final" }, { text: "afinal" }], distractors: ["ao fim de", "em fim", "no final de contas de"], tags: ["narrative", "connectors"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "quando-cheguei-o-trem-tinha-saido", type: "sentence", target: "Quando eu cheguei na estação, o trem já tinha saído.",
      gloss: { es: "Cuando llegué a la estación, el tren ya había salido.", en: "When I got to the station, the train had already left." },
      accept: [{ text: "Quando cheguei à estação, o trem já tinha saído." }, { text: "Quando eu cheguei à estação, o trem já tinha saído." }],
      variants: [{ region: "PT", text: "Quando cheguei à estação, o comboio já tinha partido." }],
      errors: [{ text: "Quando eu cheguei na estação, o trem já havia saiu.", feedback: { es: "Tras tinha / havia va el participio: saído.", en: "After tinha / havia use the past participle: saído." }, ruleId: "pt-g-mais-que-perfeito" }],
      distractors: ["saiu", "tive", "saindo"],
      tags: ["narrative", "past"],
    },
    {
      id: "eu-nunca-tinha-visto", type: "sentence", target: "Eu nunca tinha visto o mar antes daquela viagem.",
      gloss: { es: "Nunca había visto el mar antes de aquel viaje.", en: "I had never seen the sea before that trip." },
      accept: [{ text: "Nunca tinha visto o mar antes daquela viagem." }],
      errors: [{ text: "Eu nunca tinha vido o mar antes daquela viagem.", feedback: { es: "El participio de ver es «visto».", en: "The participle of ver is 'visto'." }, ruleId: "pt-g-participios" }],
      distractors: ["vido", "de aquela", "vi"],
      tags: ["narrative", "past"],
    },
    {
      id: "de-repente-a-luz", type: "sentence", target: "Enquanto a gente jantava, de repente a luz acabou.",
      gloss: { es: "Mientras cenábamos, de repente se cortó la luz.", en: "While we were having dinner, the power suddenly went off." },
      accept: [{ text: "Enquanto nós jantávamos, de repente a luz acabou." }],
      variants: [{ region: "PT", text: "Enquanto jantávamos, de repente faltou a luz." }],
      distractors: ["jantou", "acabava", "quanto"],
      note: { es: "A luz acabou = se cortó la luz (la electricidad).", en: "A luz acabou = there was a power cut." },
      tags: ["narrative", "past"],
    },
    {
      id: "nao-me-lembro", type: "sentence", target: "Não me lembro onde deixei as chaves.",
      gloss: { es: "No me acuerdo dónde dejé las llaves.", en: "I can't remember where I left my keys." },
      accept: [{ text: "Eu não me lembro onde deixei as chaves." }, { text: "Não lembro onde deixei as chaves." }, { text: "Não me lembro de onde deixei as chaves." }],
      distractors: ["acordo", "deixava", "chave"],
      tags: ["narrative"],
    },
    {
      id: "foi-um-susto", type: "sentence", target: "Que susto! Pensei que fosse um ladrão.",
      gloss: { es: "¡Qué susto! Pensé que era un ladrón.", en: "What a fright! I thought it was a burglar." },
      accept: [{ text: "Que susto! Achei que fosse um ladrão." }, { text: "Que susto! Pensei que era um ladrão." }],
      distractors: ["era", "ladron", "Qual"],
      tags: ["narrative", "feelings"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-participios", type: "paradigm", target: "particípios irregulares", spoken: "particípios irregulares",
      gloss: { es: "participios irregulares", en: "irregular past participles" },
      grammar: ["pt-g-participios"],
      paradigm: {
        caption: { es: "Escribe el participio", en: "Write the past participle" },
        cells: [
          { label: "fazer", answer: "feito", ruleId: "pt-g-participios" },
          { label: "dizer", answer: "dito", ruleId: "pt-g-participios" },
          { label: "ver", answer: "visto", ruleId: "pt-g-participios" },
          { label: "escrever", answer: "escrito", ruleId: "pt-g-participios" },
          { label: "abrir", answer: "aberto", ruleId: "pt-g-participios" },
          { label: "pôr", answer: "posto", ruleId: "pt-g-participios" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "pat-mais-que-perfeito", type: "pattern", target: "eu tinha saído · ela tinha feito",
      gloss: { es: "el pluscuamperfecto: tinha + participio", en: "the past perfect: tinha + participle" },
      pattern: {
        rule: {
          es: "Para algo anterior a otro pasado: ter (imperfeito) + participio (tinha saído = había salido). «haver» (havia saído) es más formal.",
          en: "For something before another past event: ter (imperfect) + participle (tinha saído = had left). 'havia saído' is more formal.",
        },
        table: [["eu", "tinha comido"], ["você / ele / ela", "tinha saído"], ["nós", "tínhamos visto"], ["vocês / eles / elas", "tinham feito"]],
      },
      question: {
        prompt: { es: "Completa: «Quando a polícia chegou, o ladrão já ___.»", en: "Complete: 'Quando a polícia chegou, o ladrão já ___.'" },
        options: ["tinha fugido", "fugia", "tem fugido", "tinha fugiu"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-mais-que-perfeito"], tags: ["grammar", "past"],
    },
    {
      id: "pat-conectores", type: "pattern", target: "primeiro · depois · de repente · então · no fim",
      gloss: { es: "conectores para contar", en: "linking words for stories" },
      pattern: {
        rule: {
          es: "Para ordenar un relato: primeiro, depois, logo depois, então (entonces), de repente, enquanto (mientras), no fim / afinal (al final).",
          en: "To order a story: primeiro (first), depois (then), logo depois (right after), então (so), de repente (suddenly), enquanto (while), no fim (in the end).",
        },
        table: [["início", "Primeiro, …"], ["sequência", "Depois / Então, …"], ["surpresa", "De repente, …"], ["simultâneo", "Enquanto…, …"], ["final", "No fim, …"]],
      },
      question: {
        prompt: { es: "«Mientras yo dormía, alguien entró.»", en: "'While I was sleeping, someone came in.'" },
        options: ["Enquanto eu dormia, alguém entrou.", "Quanto eu dormia, alguém entrou.", "Em quanto eu dormi, alguém entrava.", "Então eu dormia, alguém entrou."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-conectores-narrativos"], tags: ["grammar", "connectors"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-historia", type: "listening", target: "Eu estava esperando o ônibus quando começou a chover. Corri para uma padaria e lá encontrei uma amiga que eu não via desde a escola. No fim, foi uma tarde ótima!",
      gloss: { es: "Estaba esperando el autobús cuando empezó a llover. Corrí a una panadería y allí encontré a una amiga que no veía desde la escuela. ¡Al final fue una tarde genial!", en: "I was waiting for the bus when it started to rain. I ran into a bakery and there I met a friend I hadn't seen since school. In the end it was a great afternoon!" },
      question: {
        prompt: { es: "¿A quién encontró en la panadería?", en: "Who did the speaker meet in the bakery?" },
        options: [
          { es: "A una vieja amiga de la escuela", en: "An old school friend" },
          { es: "A su profesora", en: "Their teacher" },
          { es: "Al conductor del autobús", en: "The bus driver" },
          { es: "A nadie", en: "Nobody" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "narrative"],
    },
    {
      id: "dlg-historia", type: "dialogue", target: "Você não vai acreditar!",
      gloss: { es: "¡No lo vas a creer!", en: "You won't believe it!" },
      turns: [
        { who: "A", target: "Você não vai acreditar no que aconteceu ontem!", gloss: { es: "¡No vas a creer lo que pasó ayer!", en: "You won't believe what happened yesterday!" } },
        { who: "B", target: "Conta! O que foi?", gloss: { es: "¡Cuéntame! ¿Qué fue?", en: "Tell me! What was it?" } },
        { who: "A", target: "Achei uma carteira na rua com mil reais e devolvi para o dono.", gloss: { es: "Encontré una billetera en la calle con mil reales y se la devolví al dueño.", en: "I found a wallet in the street with a thousand reais and gave it back to the owner." } },
        { who: "B", target: "Sério? Que bacana!", gloss: { es: "¿En serio? ¡Qué bien!", en: "Really? That's great!" } },
      ],
      question: {
        prompt: { es: "¿Qué hizo A con la billetera?", en: "What did A do with the wallet?" },
        options: [
          { es: "Se la devolvió al dueño", en: "Gave it back to the owner" },
          { es: "Se quedó con el dinero", en: "Kept the money" },
          { es: "La llevó a la policía", en: "Took it to the police" },
        ],
        answer: 0,
      },
      note: { es: "achar = también «encontrar» algo perdido.", en: "achar also means 'to find' something you'd lost." },
      exercises: ["question"], tags: ["dialogue", "narrative"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-rato", type: "bridge", onlyFor: "es", target: "o rato",
      gloss: { es: "el ratón / la rata", en: "the mouse / rat" },
      question: {
        prompt: { es: "«Vi um rato na cozinha» significa que viste…", en: "'Vi um rato na cozinha' means you saw…" },
        options: [{ es: "un ratón (o una rata)", en: "a mouse (or a rat)" }, { es: "un rato libre", en: "a free moment" }, { es: "un gato", en: "a cat" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «rato» = ratón (en Brasil, sobre todo la rata; el ratoncito es «camundongo»); «un rato» (un momento) es «um tempinho» o «um pouco»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "animals"],
    },
    {
      id: "br-en-realizar", type: "bridge", onlyFor: "en", target: "Percebi que estava errado.",
      gloss: { es: "Me di cuenta de que estaba equivocado.", en: "I realised I was wrong." },
      distractors: ["Realizei que estava errado.", "Percebei que estava errado.", "Notei-me errado."],
      note: { en: "To realise is 'perceber'; 'realizar' means to carry out or fulfil (realizar um sonho)." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend"],
    },
  ]),
};
