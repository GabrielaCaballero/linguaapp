import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u15",
  lang: "pt",
  index: 15,
  cefr: "B1",
  title: { target: "Na minha opinião", es: "En mi opinión", en: "In my opinion" },
  canDo: [
    { es: "Puedo dar mi opinión, estar de acuerdo o no, y justificarlo.", en: "I can give my opinion, agree or disagree, and say why." },
    { es: "Sé usar el presente de subjuntivo tras espero que, é importante que, não acho que.", en: "I can use the present subjunctive after espero que, é importante que, não acho que." },
  ],
  icon: "💬",
  items: build("pt", 15, "B1", [
    { id: "achar", type: "word", pos: "verb", target: "achar", gloss: { es: "creer, opinar / encontrar", en: "to think (have an opinion) / to find" }, forms: { eu: "acho", você: "acha" }, distractors: ["pensar de", "acho", "chamar"], tags: ["opinion", "verbs"] },
    { id: "concordar", type: "word", pos: "verb", target: "concordar", gloss: { es: "estar de acuerdo", en: "to agree" }, forms: { eu: "concordo" }, distractors: ["acordar", "discordar", "combinar"], note: { es: "Concordo com você = estoy de acuerdo contigo.", en: "Concordo com você = I agree with you." }, tags: ["opinion", "verbs"] },
    { id: "discordar", type: "word", pos: "verb", target: "discordar", gloss: { es: "no estar de acuerdo, discrepar", en: "to disagree" }, forms: { eu: "discordo" }, distractors: ["desacordar", "concordar", "discutir"], tags: ["opinion", "verbs"] },
    { id: "ponto-de-vista", type: "word", pos: "noun", target: "o ponto de vista", gender: "m", plural: "os pontos de vista", gloss: { es: "el punto de vista", en: "the point of view" }, distractors: ["a ponta de vista", "o ponto da vista", "o ponto de visão"], tags: ["opinion"] },
    { id: "por-um-lado", type: "phrase", pos: "phrase", target: "por um lado… por outro lado", gloss: { es: "por un lado… por otro lado", en: "on the one hand… on the other hand" }, distractors: ["de um lado… de outro", "pelo um lado… pelo outro", "por uma parte… por outra"], tags: ["opinion", "connectors"] },
    { id: "acho-que-sim", type: "phrase", pos: "phrase", target: "Acho que sim.", gloss: { es: "Creo que sí.", en: "I think so." }, accept: [{ text: "Eu acho que sim." }], distractors: ["Acho sim que.", "Creio sim.", "Penso que si."], note: { es: "Y al revés: «Acho que não» (creo que no).", en: "And the opposite: 'Acho que não' (I don't think so)." }, tags: ["opinion", "chunk"] },
    { id: "com-certeza", type: "phrase", pos: "phrase", target: "Com certeza!", gloss: { es: "¡Por supuesto! / ¡Seguro!", en: "Absolutely! / Definitely!" }, accept: [{ text: "Claro!" }, { text: "Sem dúvida!" }], distractors: ["Com certo!", "Por certeza!", "Certamente que sim de"], tags: ["opinion", "chunk"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "na-minha-opiniao", type: "sentence", target: "Na minha opinião, o transporte público é caro demais.",
      gloss: { es: "En mi opinión, el transporte público es demasiado caro.", en: "In my opinion, public transport is too expensive." },
      accept: [{ text: "Na minha opinião, o transporte público é muito caro." }, { text: "Pra mim, o transporte público é caro demais." }],
      errors: [{ text: "Em minha opinião, o transporte público é caro demais.", feedback: { es: "Se entiende, pero lo más natural es «na minha opinião».", en: "Understandable, but the natural phrase is 'na minha opinião'." } }],
      distractors: ["Em", "barato", "demasiado"],
      tags: ["opinion"],
    },
    {
      id: "acho-que-voce-tem-razao", type: "sentence", target: "Acho que você tem razão.", register: "informal",
      gloss: { es: "Creo que tienes razón.", en: "I think you're right. (informal)" },
      accept: [{ text: "Eu acho que você tem razão." }],
      errors: [{ text: "Acho que você está certo razão.", feedback: { es: "Tener razón = ter razão (o «estar certo»).", en: "To be right = ter razão (or estar certo)." } }],
      distractors: ["é", "tenha", "razões"],
      tags: ["opinion"],
    },
    {
      id: "nao-acho-que-seja", type: "sentence", target: "Não acho que seja uma boa ideia.",
      gloss: { es: "No creo que sea una buena idea.", en: "I don't think it's a good idea." },
      accept: [{ text: "Eu não acho que seja uma boa ideia." }, { text: "Acho que não é uma boa ideia." }],
      errors: [{ text: "Não acho que é uma boa ideia.", feedback: { es: "Tras «não acho que» va subjuntivo: seja.", en: "After 'não acho que' use the subjunctive: seja." }, ruleId: "pt-g-subjuntivo-presente" }],
      distractors: ["é", "esteja", "bom"],
      tags: ["opinion", "subjunctive"],
    },
    {
      id: "espero-que-voce-goste", type: "sentence", target: "Espero que você goste do presente.",
      gloss: { es: "Espero que te guste el regalo.", en: "I hope you like the present." },
      errors: [{ text: "Espero que você gosta do presente.", feedback: { es: "esperar que + subjuntivo: goste.", en: "esperar que + subjunctive: goste." }, ruleId: "pt-g-subjuntivo-presente" }],
      distractors: ["gosta", "o", "de"],
      tags: ["opinion", "subjunctive"],
    },
    {
      id: "e-importante-que", type: "sentence", target: "É importante que todo mundo participe.",
      gloss: { es: "Es importante que todos participen.", en: "It's important for everyone to take part." },
      accept: [{ text: "É importante que todos participem." }],
      distractors: ["participa", "todos mundo", "seja"],
      note: { es: "«todo mundo» (todo el mundo) va con verbo en singular.", en: "'todo mundo' (everybody) takes a singular verb." },
      grammar: ["pt-g-subjuntivo-presente"], tags: ["opinion", "subjunctive"],
    },
    {
      id: "concordo-em-parte", type: "sentence", target: "Concordo em parte, mas não totalmente.",
      gloss: { es: "Estoy de acuerdo en parte, pero no del todo.", en: "I partly agree, but not completely." },
      accept: [{ text: "Concordo em parte, mas não completamente." }],
      distractors: ["Acordo", "na", "todo"],
      tags: ["opinion"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-subjuntivo", type: "paradigm", target: "falar / ser — presente do subjuntivo", spoken: "falar, ser",
      gloss: { es: "presente de subjuntivo de «falar» y «ser»", en: "present subjunctive of falar and ser" },
      grammar: ["pt-g-subjuntivo-presente"],
      paradigm: {
        caption: { es: "Completa: «É importante que…»", en: "Complete: 'É importante que…'" },
        cells: [
          { label: "eu (falar)", answer: "fale", ruleId: "pt-g-subjuntivo-presente" },
          { label: "nós (falar)", answer: "falemos", ruleId: "pt-g-subjuntivo-presente" },
          { label: "eles (falar)", answer: "falem", ruleId: "pt-g-subjuntivo-presente" },
          { label: "eu (ser)", answer: "seja", ruleId: "pt-g-subjuntivo-presente" },
          { label: "eles (ser)", answer: "sejam", ruleId: "pt-g-subjuntivo-presente" },
          { label: "eu (estar)", answer: "esteja", ruleId: "pt-g-subjuntivo-presente" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },
    {
      id: "pat-subjuntivo", type: "pattern", target: "espero que você venha · é bom que ele saiba",
      gloss: { es: "el presente de subjuntivo", en: "the present subjunctive" },
      pattern: {
        rule: {
          es: "Se usa casi como en español: deseos, emociones, duda y valoraciones con «que». Se forma desde «eu» del presente: falo → fale, faço → faça, tenho → tenha. Irregulares: ser → seja, estar → esteja, ir → vá, saber → saiba.",
          en: "Used after wishes, feelings, doubt and opinions with 'que' (espero que, é importante que, não acho que). Built from the present eu form: falo → fale, faço → faça, tenho → tenha. Irregular: seja, esteja, vá, saiba.",
        },
        table: [["falar (falo)", "fale"], ["comer (como)", "coma"], ["fazer (faço)", "faça"], ["ter (tenho)", "tenha"], ["ser", "seja"], ["ir", "vá"]],
      },
      question: {
        prompt: { es: "Completa: «Tomara que não ___ amanhã.» (chover)", en: "Complete: 'Tomara que não ___ amanhã.' (chover)" },
        options: ["chova", "chove", "choverá", "chovesse"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-subjuntivo-presente"], tags: ["grammar", "subjunctive"],
    },
    {
      id: "pat-achar-que", type: "pattern", target: "Acho que é. · Não acho que seja.",
      gloss: { es: "opinión: indicativo o subjuntivo", en: "opinion: indicative or subjunctive" },
      pattern: {
        rule: {
          es: "Como en español: acho que / penso que / tenho certeza que + indicativo; não acho que / duvido que / talvez + subjuntivo.",
          en: "acho que / penso que / tenho certeza que + indicative; não acho que / duvido que / talvez + subjunctive.",
        },
        table: [["certeza", "Acho que ele vem."], ["negação", "Não acho que ele venha."], ["dúvida", "Duvido que ele venha."], ["talvez", "Talvez ele venha."]],
      },
      question: {
        prompt: { es: "Completa: «Duvido que ela ___ a verdade.» (saber)", en: "Complete: 'Duvido que ela ___ a verdade.' (saber)" },
        options: ["saiba", "sabe", "sabia", "sabe-se"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-achar-que"], tags: ["grammar", "subjunctive", "opinion"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-opiniao", type: "listening", target: "Eu acho que trabalhar de casa tem vantagens, porque a gente não perde tempo no trânsito. Por outro lado, sinto falta dos colegas.",
      gloss: { es: "Creo que trabajar desde casa tiene ventajas, porque no perdemos tiempo en el tráfico. Por otro lado, extraño a mis colegas.", en: "I think working from home has advantages, because we don't waste time in traffic. On the other hand, I miss my colleagues." },
      question: {
        prompt: { es: "¿Qué echa de menos la persona?", en: "What does the speaker miss?" },
        options: [
          { es: "A sus colegas", en: "Colleagues" },
          { es: "El tráfico", en: "The traffic" },
          { es: "La oficina en sí", en: "The office itself" },
          { es: "Nada", en: "Nothing" },
        ],
        answer: 0,
      },
      note: { es: "sentir falta de = extrañar, echar de menos.", en: "sentir falta de = to miss." },
      exercises: ["question", "listen"], tags: ["listening", "opinion"],
    },
    {
      id: "dlg-debate", type: "dialogue", target: "Não concordo.",
      gloss: { es: "No estoy de acuerdo.", en: "I don't agree." },
      turns: [
        { who: "A", target: "Acho que deviam proibir carros no centro.", gloss: { es: "Creo que deberían prohibir los autos en el centro.", en: "I think they should ban cars in the centre." } },
        { who: "B", target: "Não concordo. E quem mora longe?", gloss: { es: "No estoy de acuerdo. ¿Y quien vive lejos?", en: "I don't agree. What about people who live far away?" } },
        { who: "A", target: "Por isso é importante que o metrô funcione bem.", gloss: { es: "Por eso es importante que el metro funcione bien.", en: "That's why the subway needs to work well." } },
      ],
      question: {
        prompt: { es: "¿Por qué no está de acuerdo B?", en: "Why does B disagree?" },
        options: [
          { es: "Piensa en quien vive lejos", en: "Thinking of people who live far away" },
          { es: "Le gusta manejar", en: "Likes driving" },
          { es: "El metro es caro", en: "The subway is expensive" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "opinion"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-contestar", type: "bridge", onlyFor: "es", target: "contestar",
      gloss: { es: "cuestionar, impugnar", en: "to dispute / challenge" },
      question: {
        prompt: { es: "«O jogador contestou a decisão do juiz» significa que…", en: "'O jogador contestou a decisão do juiz' means the player…" },
        options: [{ es: "cuestionó la decisión", en: "disputed the decision" }, { es: "respondió al árbitro", en: "replied to the referee" }, { es: "aceptó la decisión", en: "accepted the decision" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «contestar» = cuestionar; contestar una pregunta es «responder»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "opinion"],
    },
    {
      id: "br-en-eventualmente", type: "bridge", onlyFor: "en", target: "eventualmente",
      gloss: { es: "ocasionalmente, de vez en cuando", en: "occasionally / possibly" },
      question: {
        prompt: { es: "«Eventualmente trabalho aos sábados» significa…", en: "'Eventualmente trabalho aos sábados' means…" },
        options: [{ es: "A veces trabajo los sábados.", en: "I occasionally work on Saturdays." }, { es: "Al final trabajaré los sábados.", en: "In the end I'll work on Saturdays." }, { es: "Nunca trabajo los sábados.", en: "I never work on Saturdays." }],
        answer: 0,
      },
      note: { en: "False friend: eventualmente = occasionally or if need be; 'eventually' is 'finalmente' or 'no fim'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
