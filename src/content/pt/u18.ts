import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u18",
  lang: "pt",
  index: 18,
  cefr: "B1",
  title: { target: "Sociedade e meio ambiente", es: "Sociedad y medio ambiente", en: "Society and the environment" },
  canDo: [
    { es: "Puedo hablar de problemas ambientales y sociales y proponer soluciones sencillas.", en: "I can talk about environmental and social problems and suggest simple solutions." },
    { es: "Sé usar la voz pasiva (foi construído) y el «se» pasivo (vendem-se casas).", en: "I can use the passive (foi construído) and the passive 'se' (vendem-se casas)." },
  ],
  icon: "🌳",
  items: build("pt", 18, "B1", [
    { id: "meio-ambiente", type: "word", pos: "noun", target: "o meio ambiente", gender: "m", plural: "os meios ambientes", gloss: { es: "el medio ambiente", en: "the environment" }, variants: [{ region: "PT", text: "o meio-ambiente" }], distractors: ["a meio ambiente", "o médio ambiente", "o meio ambiental"], tags: ["environment"] },
    { id: "lixo", type: "word", pos: "noun", target: "o lixo", gender: "m", plural: "os lixos", gloss: { es: "la basura", en: "the rubbish / trash" }, distractors: ["a lixa", "o luxo", "o basura"], note: { es: "jogar no lixo = tirar a la basura. Ojo: «o luxo» es el lujo.", en: "jogar no lixo = to throw away. Careful: 'o luxo' is luxury." }, tags: ["environment"] },
    { id: "reciclagem", type: "word", pos: "noun", target: "a reciclagem", gender: "f", plural: "as reciclagens", gloss: { es: "el reciclaje", en: "the recycling" }, distractors: ["o reciclagem", "a reciclação", "o reciclaje"], note: { es: "Las palabras en -agem son femeninas: a reciclagem, a viagem.", en: "-agem nouns are feminine: a reciclagem." }, tags: ["environment"] },
    { id: "poluicao", type: "word", pos: "noun", target: "a poluição", gender: "f", plural: "as poluições", gloss: { es: "la contaminación", en: "the pollution" }, distractors: ["a polução", "a contaminação de", "o poluição"], tags: ["environment"] },
    { id: "desmatamento", type: "word", pos: "noun", target: "o desmatamento", gender: "m", plural: "os desmatamentos", gloss: { es: "la deforestación", en: "the deforestation" }, variants: [{ region: "PT", text: "a desflorestação" }], distractors: ["a desmatação", "o desmontamento", "o desmaio"], tags: ["environment"] },
    { id: "aquecimento-global", type: "word", pos: "noun", target: "o aquecimento global", gender: "m", plural: "os aquecimentos globais", gloss: { es: "el calentamiento global", en: "the global warming" }, distractors: ["o esquentamento global", "a aquecimento global", "o calentamento global"], tags: ["environment"] },
    { id: "desperdicar", type: "word", pos: "verb", target: "desperdiçar", gloss: { es: "desperdiciar", en: "to waste" }, forms: { eu: "desperdiço" }, distractors: ["despedir", "desperdiciar", "despejar"], tags: ["environment", "verbs"] },
    { id: "economizar", type: "word", pos: "verb", target: "economizar", gloss: { es: "ahorrar", en: "to save (money, water…)" }, forms: { eu: "economizo" }, variants: [{ region: "PT", text: "poupar", note: { es: "En Portugal se dice más «poupar».", en: "In Portugal people mostly say 'poupar'." } }], distractors: ["economisar", "salvar", "guardar de"], tags: ["environment", "money", "verbs"] },
    { id: "desigualdade", type: "word", pos: "noun", target: "a desigualdade", gender: "f", plural: "as desigualdades", gloss: { es: "la desigualdad", en: "the inequality" }, distractors: ["o desigualdade", "a desigualeza", "a diversidade"], tags: ["society"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "a-ponte-foi-construida", type: "sentence", target: "A ponte foi construída em mil novecentos e setenta e quatro.",
      gloss: { es: "El puente fue construido en mil novecientos setenta y cuatro.", en: "The bridge was built in nineteen seventy-four." },
      accept: [{ text: "A ponte foi construída em 1974." }],
      errors: [{ text: "A ponte foi construído em mil novecentos e setenta e quatro.", feedback: { es: "En la pasiva el participio concuerda: a ponte (fem.) → construída.", en: "In the passive the participle agrees: a ponte (fem.) → construída." }, ruleId: "pt-g-voz-passiva" }],
      distractors: ["construído", "o", "era"],
      note: { es: "Ojo: «a ponte» es femenino (el puente).", en: "Note: 'a ponte' is feminine." },
      tags: ["society", "passive"],
    },
    {
      id: "vendem-se-casas", type: "sentence", target: "Vendem-se casas na praia.",
      gloss: { es: "Se venden casas en la playa.", en: "Beach houses for sale." },
      accept: [{ text: "Vende-se casas na praia.", verdict: "almost", feedback: { es: "Es lo que se oye y se ve en carteles, pero la norma concuerda: vendem-se casas.", en: "Common on signs, but standard Portuguese agrees the verb: vendem-se casas." } }],
      distractors: ["Vende", "se vendem", "à"],
      grammar: ["pt-g-se-apassivador"], tags: ["society", "passive"],
    },
    {
      id: "a-gente-precisa-reciclar", type: "sentence", target: "A gente precisa reciclar mais e desperdiçar menos água.",
      gloss: { es: "Tenemos que reciclar más y desperdiciar menos agua.", en: "We need to recycle more and waste less water." },
      accept: [{ text: "Nós precisamos reciclar mais e desperdiçar menos água." }],
      distractors: ["precisamos de", "muito", "mais menos"],
      tags: ["environment"],
    },
    {
      id: "o-desmatamento-aumentou", type: "sentence", target: "O desmatamento na Amazônia aumentou no ano passado.",
      gloss: { es: "La deforestación en la Amazonia aumentó el año pasado.", en: "Deforestation in the Amazon rose last year." },
      variants: [{ region: "PT", text: "A desflorestação na Amazónia aumentou no ano passado.", note: { es: "En Portugal se escribe Amazónia, con tilde aguda.", en: "In Portugal it's spelt Amazónia, with an acute accent." } }],
      distractors: ["aumentava", "na ano", "da"],
      tags: ["environment", "news"],
    },
    {
      id: "nao-se-pode-fumar", type: "sentence", target: "Não se pode fumar dentro do prédio.",
      gloss: { es: "No se puede fumar dentro del edificio.", en: "Smoking isn't allowed inside the building." },
      accept: [{ text: "É proibido fumar dentro do prédio." }],
      variants: [{ region: "PT", text: "Não se pode fumar dentro do edifício." }],
      distractors: ["pode-se não", "de o", "edifico"],
      tags: ["society"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-voz-passiva", type: "pattern", target: "O livro foi escrito por Clarice Lispector.",
      gloss: { es: "la voz pasiva: ser + participio", en: "the passive: ser + participle" },
      pattern: {
        rule: {
          es: "ser (en cualquier tiempo) + participio que concuerda con el sujeto + por (pelo/pela) para el agente. Se usa mucho en noticias y textos formales.",
          en: "ser (any tense) + a participle that agrees with the subject + por (pelo/pela) for the agent. Common in news and formal texts.",
        },
        table: [["ativa", "A polícia prendeu o ladrão."], ["passiva", "O ladrão foi preso pela polícia."], ["fem. pl.", "As casas foram vendidas."], ["futuro", "A obra será inaugurada amanhã."]],
      },
      question: {
        prompt: { es: "Completa: «As cartas ___ pelo diretor.»", en: "Complete: 'As cartas ___ pelo diretor.'" },
        options: ["foram assinadas", "foram assinados", "foi assinada", "foram assinado"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-voz-passiva"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-se-apassivador", type: "pattern", target: "Aluga-se apartamento. · Alugam-se apartamentos.",
      gloss: { es: "el «se» pasivo e impersonal", en: "passive and impersonal 'se'" },
      pattern: {
        rule: {
          es: "Verbo + se, como «se vende». Con objeto plural, la norma pide el verbo en plural (vendem-se carros). Con verbos sin objeto directo es impersonal y va en singular: precisa-se de vendedores. En el habla brasileña el «se» suele ir delante: se vende.",
          en: "Verb + se, like 'for sale / one does'. With a plural object the standard verb is plural (vendem-se carros). With verbs taking a preposition it's impersonal and singular: precisa-se de vendedores. Brazilian speech often puts se first: se vende.",
        },
        table: [["sing.", "Vende-se casa."], ["pl.", "Vendem-se casas."], ["impessoal", "Precisa-se de garçons."], ["impessoal", "Aqui se fala inglês."]],
      },
      question: {
        prompt: { es: "Cartel correcto según la norma:", en: "The standard sign is:" },
        options: ["Consertam-se bicicletas.", "Conserta-se bicicletas.", "Se consertam-se bicicletas.", "Consertam bicicletas-se."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-se-apassivador"], tags: ["grammar", "passive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-reciclagem", type: "listening", target: "A partir de segunda-feira, o lixo reciclável será recolhido às terças e sextas. Papel, plástico e vidro devem ser separados.",
      gloss: { es: "A partir del lunes, la basura reciclable se recogerá los martes y viernes. El papel, el plástico y el vidrio deben separarse.", en: "From Monday, recyclable rubbish will be collected on Tuesdays and Fridays. Paper, plastic and glass must be separated." },
      question: {
        prompt: { es: "¿Qué días se recoge la basura reciclable?", en: "Which days is recycling collected?" },
        options: [
          { es: "Martes y viernes", en: "Tuesdays and Fridays" },
          { es: "Lunes y viernes", en: "Mondays and Fridays" },
          { es: "Solo los lunes", en: "Only Mondays" },
          { es: "Todos los días", en: "Every day" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "environment"],
    },
    {
      id: "dlg-canudo", type: "dialogue", target: "Sem canudo, por favor.",
      gloss: { es: "Sin popote / pajita, por favor.", en: "No straw, please." },
      turns: [
        { who: "A", target: "Um suco de maracujá, sem canudo, por favor.", gloss: { es: "Un jugo de maracuyá, sin pajita, por favor.", en: "A passion fruit juice, no straw, please." } },
        { who: "B", target: "Tudo bem. Aliás, aqui a gente não usa mais canudo de plástico.", gloss: { es: "Muy bien. De hecho, aquí ya no usamos pajitas de plástico.", en: "Sure. Actually, we don't use plastic straws here any more." } },
        { who: "A", target: "Que bom! Todo mundo devia fazer isso.", gloss: { es: "¡Qué bien! Todo el mundo debería hacer eso.", en: "Great! Everyone should do that." } },
      ],
      question: {
        prompt: { es: "¿Qué dice B sobre las pajitas?", en: "What does B say about straws?" },
        options: [
          { es: "Ya no usan pajitas de plástico", en: "They no longer use plastic straws" },
          { es: "Se acabaron las pajitas", en: "They've run out of straws" },
          { es: "Las pajitas cuestan extra", en: "Straws cost extra" },
        ],
        answer: 0,
      },
      note: { es: "aliás = de hecho, por cierto.", en: "aliás = actually, by the way." },
      exercises: ["question"], tags: ["dialogue", "environment"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-propina", type: "bridge", onlyFor: "es", target: "a propina",
      gloss: { es: "el soborno, la coima", en: "the bribe" },
      question: {
        prompt: { es: "En una noticia: «O fiscal foi preso por receber propina». El fiscal recibió…", en: "In the news: 'O fiscal foi preso por receber propina'. The inspector took…" },
        options: [{ es: "sobornos", en: "bribes" }, { es: "propinas de los clientes", en: "tips" }, { es: "un aumento", en: "a pay rise" }],
        answer: 0,
      },
      note: { es: "Falso amigo: en Brasil «propina» es soborno; la propina del mesero es «a gorjeta»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "society"],
    },
    {
      id: "br-en-atual", type: "bridge", onlyFor: "en", target: "a situação atual",
      gloss: { es: "la situación actual", en: "the current situation" },
      distractors: ["a situação real", "a situação verdadeira", "a atual de situação"],
      note: { en: "False friend: atual = current; 'actual' (real) is 'real' or 'verdadeiro', and actually is 'na verdade'." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend"],
    },
  ]),
};
