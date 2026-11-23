import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u25",
  lang: "pt",
  index: 25,
  cefr: "C1",
  title: { target: "Negociações e registro formal", es: "Negociar en el trabajo", en: "Negotiating at work" },
  canDo: [
    { es: "Puedo negociar condiciones y redactar correos formales con estilo nominal (efetuar o pagamento, proceder à assinatura).", en: "I can negotiate terms and write formal emails in a nominal style (efetuar o pagamento, proceder à assinatura)." },
    { es: "Sé usar la regencia de verbos formales con crase (proceder à, referir-se à, visar a).", en: "I can use the prepositions of formal verbs with crase (proceder à, referir-se à, visar a)." },
  ],
  icon: "🤝",
  items: build("pt", 25, "C1", [
    { id: "orcamento", type: "word", pos: "noun", target: "o orçamento", gender: "m", plural: "os orçamentos", gloss: { es: "el presupuesto", en: "the budget / quote" }, distractors: ["a orçamenta", "o ornamento", "o pressuposto"], note: { es: "Ojo: «o pressuposto» es la premisa, no el presupuesto.", en: "Also a supplier's quote: pedir um orçamento." }, tags: ["work", "money"] },
    { id: "faturamento", type: "word", pos: "noun", target: "o faturamento", gender: "m", plural: "os faturamentos", gloss: { es: "la facturación", en: "the turnover / revenue" }, variants: [{ region: "PT", text: "a faturação" }], distractors: ["a fatura", "o fatiamento", "o faturado"], tags: ["work", "money"] },
    { id: "multa", type: "word", pos: "noun", target: "a multa contratual", gender: "f", plural: "as multas contratuais", gloss: { es: "la penalización por contrato", en: "the contractual penalty" }, distractors: ["a pena contratual", "o multo contratual", "a culpa contratual"], tags: ["work", "contracts"] },
    { id: "pauta", type: "word", pos: "noun", target: "a pauta", gender: "f", plural: "as pautas", gloss: { es: "el orden del día", en: "the agenda (of a meeting)" }, distractors: ["a agenda", "o pauto", "a pausa"], note: { es: "«a agenda» es tu libreta o calendario; los temas de la reunión son «a pauta».", en: "'a agenda' is your diary; the meeting's topics are 'a pauta'." }, tags: ["work", "meetings"] },
    { id: "efetuar", type: "word", pos: "verb", target: "efetuar", gloss: { es: "efectuar, realizar (formal)", en: "to carry out / make (formal)" }, forms: { "part.": "efetuado" }, distractors: ["efeituar", "afetar", "efetivar-se de"], tags: ["work", "formal"] },
    { id: "mediante", type: "word", pos: "prep", target: "mediante", gloss: { es: "mediante, a cambio de", en: "upon / subject to" }, distractors: ["mediando", "medianamente", "por meio"], note: { es: "Mediante pagamento = previo pago.", en: "Mediante pagamento = upon payment." }, tags: ["work", "formal"] },
    { id: "tendo-em-vista", type: "phrase", pos: "phrase", target: "tendo em vista", gloss: { es: "en vista de, considerando", en: "in view of / given" }, distractors: ["tendo a vista", "tendo em visto", "tenho em vista de"], tags: ["work", "formal", "connectors"] },
    { id: "no-que-diz-respeito", type: "phrase", pos: "phrase", target: "no que diz respeito a", gloss: { es: "en lo que respecta a", en: "as regards / with regard to" }, accept: [{ text: "no que se refere a" }], distractors: ["no que diz respeito de", "ao que diz respeito a", "no que respeita de"], tags: ["work", "formal", "connectors"] },
    { id: "cabe-ressaltar", type: "phrase", pos: "phrase", target: "Cabe ressaltar que…", gloss: { es: "Cabe destacar que…", en: "It should be noted that…" }, accept: [{ text: "Vale ressaltar que…" }, { text: "Convém ressaltar que…" }], distractors: ["Cabe ressalvar de que…", "Cabe a ressaltar que…", "Cabem ressaltar que…"], tags: ["work", "formal"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "efetuar-pagamento", type: "sentence", target: "O pagamento deverá ser efetuado em até trinta dias.", register: "formal",
      gloss: { es: "El pago deberá efectuarse en un plazo máximo de treinta días.", en: "Payment must be made within thirty days. (formal)" },
      accept: [{ text: "O pagamento deverá ser efetuado em até 30 dias." }, { text: "O pagamento deve ser efetuado em até trinta dias." }],
      distractors: ["efetuada", "dentro", "pago"],
      grammar: ["pt-g-nominalizacao"], tags: ["work", "contracts", "formal"],
    },
    {
      id: "proceder-a-assinatura", type: "sentence", target: "Podemos proceder à assinatura do contrato na próxima semana.", register: "formal",
      gloss: { es: "Podemos proceder a la firma del contrato la semana que viene.", en: "We can proceed to sign the contract next week. (formal)" },
      errors: [{ text: "Podemos proceder a assinatura do contrato na próxima semana.", feedback: { es: "proceder a + a assinatura = à assinatura (con crase).", en: "proceder a + a assinatura = à assinatura (with crase)." }, ruleId: "pt-g-regencia-formal" }],
      distractors: ["a", "firma", "assinar"],
      tags: ["work", "contracts", "formal"],
    },
    {
      id: "conforme-combinado", type: "sentence", target: "Conforme combinado, segue a proposta revisada.", register: "formal",
      gloss: { es: "Según lo acordado, adjunto la propuesta revisada.", en: "As agreed, please find the revised proposal. (formal)" },
      accept: [{ text: "Conforme o combinado, segue a proposta revisada." }, { text: "Como combinado, segue a proposta revisada." }],
      distractors: ["Conformado", "seguem", "revista"],
      tags: ["work", "email", "formal"],
    },
    {
      id: "nos-reservamos-o-direito", type: "sentence", target: "Reservamo-nos o direito de rescindir o contrato.", register: "formal",
      gloss: { es: "Nos reservamos el derecho de rescindir el contrato.", en: "We reserve the right to terminate the contract. (formal)" },
      accept: [{ text: "Nos reservamos o direito de rescindir o contrato." }],
      errors: [{ text: "Reservamos-nos o direito de rescindir o contrato.", feedback: { es: "Con -mos + nos, la -s desaparece: reservamo-nos.", en: "-mos + nos drops the s: reservamo-nos." }, ruleId: "pt-g-reflexivos" }],
      distractors: ["Reservamos-nos", "a", "rescendir"],
      tags: ["work", "contracts", "formal"],
    },
    {
      id: "a-proposta-visa", type: "sentence", target: "A proposta visa à redução de custos operacionais.", register: "formal",
      gloss: { es: "La propuesta apunta a reducir los costos operativos.", en: "The proposal aims to reduce operating costs. (formal)" },
      accept: [{ text: "A proposta visa a redução de custos operacionais.", verdict: "almost", feedback: { es: "En la norma culta, «visar» (apuntar a) pide «a»: visa à redução. Sin crase es muy común.", en: "In formal standard Portuguese, visar (to aim at) takes 'a': visa à redução. Without it is very common." } }],
      distractors: ["vista", "para a", "operativos"],
      grammar: ["pt-g-regencia-formal"], tags: ["work", "formal"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-nominalizacao", type: "pattern", target: "pagar → efetuar o pagamento · assinar → proceder à assinatura",
      gloss: { es: "estilo nominal", en: "the nominal style" },
      pattern: {
        rule: {
          es: "Los textos formales prefieren sustantivo + verbo «vacío» en lugar de un verbo simple: realizar uma análise (analizar), efetuar o pagamento (pagar), dar início a (empezar). Úsalo con moderación: abusar suena burocrático.",
          en: "Formal texts prefer noun + 'light' verb to a simple verb: realizar uma análise (analyse), efetuar o pagamento (pay), dar início a (start). Use sparingly: overdone, it sounds bureaucratic.",
        },
        table: [["pagar", "efetuar o pagamento"], ["começar", "dar início a"], ["analisar", "realizar uma análise"], ["assinar", "proceder à assinatura"], ["decidir", "tomar uma decisão"]],
      },
      question: {
        prompt: { es: "Versión formal de «Vamos começar a reunião»:", en: "Formal version of 'Vamos começar a reunião':" },
        options: ["Daremos início à reunião.", "Faremos começo da reunião.", "Daremos início na reunião.", "Começaremos de reunião."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-nominalizacao"], tags: ["grammar", "formal"],
    },
    {
      id: "pat-regencia-formal", type: "pattern", target: "proceder à · referir-se à · visar à · aspirar a",
      gloss: { es: "verbos formales con preposición (y crase)", en: "formal verbs with prepositions (and crase)" },
      pattern: {
        rule: {
          es: "Muchos verbos formales piden «a»; si el sustantivo es femenino con artículo, hay crase: proceder à leitura, referir-se à cláusula, visar à melhoria, aspirar à vaga. Con masculino: ao contrato.",
          en: "Many formal verbs take 'a'; with a feminine noun and article that gives a crase: proceder à leitura, referir-se à cláusula, visar à melhoria (aim at), aspirar à vaga. Masculine: ao contrato.",
        },
        table: [["proceder a", "proceder à votação"], ["referir-se a", "refiro-me à cláusula três"], ["visar a (= objetivar)", "visa à melhoria"], ["aspirar a (= desejar)", "aspira ao cargo"]],
      },
      question: {
        prompt: { es: "Completa: «Refiro-me ___ reunião de ontem.»", en: "Complete: 'Refiro-me ___ reunião de ontem.'" },
        options: ["à", "a", "na", "da"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-regencia-formal"], tags: ["grammar", "formal", "crase"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-reuniao", type: "listening", target: "Tendo em vista o aumento dos custos logísticos, propomos um reajuste de cinco por cento, mediante a renovação do contrato por mais dois anos.",
      gloss: { es: "En vista del aumento de los costos logísticos, proponemos un reajuste del cinco por ciento, sujeto a la renovación del contrato por dos años más.", en: "Given the rise in logistics costs, we propose a five per cent adjustment, subject to renewing the contract for two more years." },
      question: {
        prompt: { es: "¿Qué piden a cambio del reajuste?", en: "What do they ask for in return for the adjustment?" },
        options: [
          { es: "Renovar el contrato dos años", en: "A two-year contract renewal" },
          { es: "Pagar al contado", en: "Upfront payment" },
          { es: "Reducir los costos logísticos", en: "Lower logistics costs" },
          { es: "Nada", en: "Nothing" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "negotiation", "formal"],
    },
    {
      id: "dlg-negociacao", type: "dialogue", target: "Podemos chegar a um meio-termo.", register: "formal",
      gloss: { es: "Podemos llegar a un punto intermedio.", en: "We can reach a compromise." },
      turns: [
        { who: "A", target: "O prazo de entrega proposto é inviável para nós.", gloss: { es: "El plazo de entrega propuesto es inviable para nosotros.", en: "The proposed delivery date isn't feasible for us." } },
        { who: "B", target: "Entendo. Em contrapartida, poderíamos flexibilizar as condições de pagamento.", gloss: { es: "Entiendo. A cambio, podríamos flexibilizar las condiciones de pago.", en: "I see. In return, we could make the payment terms more flexible." } },
        { who: "A", target: "Nesse caso, podemos chegar a um meio-termo.", gloss: { es: "En ese caso, podemos llegar a un punto intermedio.", en: "In that case, we can reach a compromise." } },
      ],
      question: {
        prompt: { es: "¿Qué ofrece B?", en: "What does B offer?" },
        options: [
          { es: "Condiciones de pago más flexibles", en: "More flexible payment terms" },
          { es: "Un plazo de entrega más corto", en: "A shorter delivery time" },
          { es: "Un descuento del diez por ciento", en: "A ten per cent discount" },
        ],
        answer: 0,
      },
      note: { es: "em contrapartida = a cambio, en compensación.", en: "em contrapartida = in return." },
      exercises: ["question"], tags: ["dialogue", "negotiation", "formal"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pressuposto", type: "bridge", onlyFor: "es", target: "o orçamento anual",
      gloss: { es: "el presupuesto anual", en: "the annual budget" },
      distractors: ["o pressuposto anual", "o presuposto anual", "o orçamentário anual"],
      note: { es: "El presupuesto es «o orçamento»; «o pressuposto» es una premisa o suposición." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "money"],
    },
    {
      id: "br-en-agenda", type: "bridge", onlyFor: "en", target: "a pauta da reunião",
      gloss: { es: "el orden del día de la reunión", en: "the meeting agenda" },
      distractors: ["a agenda da reunião", "a pausa da reunião", "a lista da agenda"],
      note: { en: "False friend: a agenda is a diary or planner; a meeting's agenda is 'a pauta'." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "meetings"],
    },
  ]),
};
