import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u25",
  lang: "fr",
  index: 25,
  cefr: "C1",
  title: { target: "Négocier", es: "Negociar en el trabajo", en: "Negotiating at work" },
  canDo: [
    { es: "Puedo negociar condiciones en un registro formal.", en: "I can negotiate terms in a formal register." },
    { es: "Puedo escribir correos de trabajo en estilo nominal (procéder à la signature, effectuer le paiement).", en: "I can write work emails in a nominal style (procéder à la signature, effectuer le paiement)." },
    { es: "Sé poner condiciones con au cas où, à condition que y à moins que.", en: "I can set conditions with au cas où, à condition que and à moins que." },
  ],
  icon: "🤝",
  items: build("fr", 25, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "negociation", type: "word", pos: "noun", target: "la négociation", gender: "f", plural: "les négociations", gloss: { es: "la negociación", en: "the negotiation" }, distractors: ["le négoce", "la négligence", "la nécessité"], tags: ["work", "negotiation"] },
    {
      id: "devis", type: "word", pos: "noun", target: "le devis", gender: "m", plural: "les devis",
      gloss: { es: "el presupuesto (de un proveedor)", en: "the quote / estimate" },
      distractors: ["la devise", "le budget", "la facture"],
      note: { es: "la devise = la moneda o el lema; le budget = el presupuesto de una empresa o un Estado.", en: "la devise = currency or motto; le budget = a company's or state's budget." },
      tags: ["work", "negotiation", "money"],
    },
    { id: "chiffre-daffaires", type: "word", pos: "noun", target: "le chiffre d'affaires", gender: "m", plural: "les chiffres d'affaires", gloss: { es: "la facturación (de una empresa)", en: "the turnover / revenue" }, distractors: ["le chiffre des affaires", "la facture", "le bénéfice"], tags: ["work", "money"] },
    {
      id: "ordre-du-jour", type: "word", pos: "noun", target: "l'ordre du jour", gender: "m", plural: "les ordres du jour",
      gloss: { es: "el orden del día (de una reunión)", en: "the agenda (of a meeting)" },
      distractors: ["l'agenda", "l'ordre de jour", "le jour d'ordre"],
      note: { es: "l'agenda es la libreta donde anotas tus citas, no los temas de una reunión.", en: "l'agenda is your diary or planner, not the topics of a meeting." },
      tags: ["work", "meetings"],
    },
    { id: "clause", type: "word", pos: "noun", target: "la clause", gender: "f", plural: "les clauses", gloss: { es: "la cláusula", en: "the clause (of a contract)" }, distractors: ["la close", "le clos", "la cause"], tags: ["work", "contracts"] },
    { id: "echeance", type: "word", pos: "noun", target: "l'échéance", gender: "f", plural: "les échéances", gloss: { es: "el vencimiento, la fecha límite", en: "the due date" }, distractors: ["l'échange", "l'échec", "la chance"], tags: ["work", "money", "contracts"] },
    {
      id: "compromis", type: "word", pos: "noun", target: "le compromis", gender: "m", plural: "les compromis",
      gloss: { es: "el acuerdo intermedio, la concesión mutua", en: "the compromise" },
      distractors: ["la compromission", "le promis", "la promesse"],
      note: { es: "Un compromiso (obligación) es «un engagement»; comprometerse para casarse es «se fiancer».", en: "To compromise your safety = mettre en danger; un compromis is only an agreement." },
      tags: ["work", "negotiation"],
    },
    { id: "contraignant", type: "word", pos: "adj", target: "contraignant", gloss: { es: "vinculante, obligatorio/a", en: "binding" }, forms: { m: "contraignant", f: "contraignante" }, accept: [{ text: "contraignante" }], distractors: ["contraint", "craignant", "convaincant"], tags: ["work", "contracts"] },
    { id: "ceder", type: "word", pos: "verb", target: "céder", gloss: { es: "ceder, hacer una concesión", en: "to give way / concede" }, forms: { je: "cède", nous: "cédons", pp: "cédé" }, distractors: ["décéder", "succéder", "accéder"], tags: ["work", "negotiation"] },
    { id: "cahier-des-charges", type: "word", pos: "noun", target: "le cahier des charges", gender: "m", plural: "les cahiers des charges", gloss: { es: "el pliego de condiciones", en: "the specifications (document)" }, distractors: ["le carnet des charges", "le cahier des tâches", "la charge du cahier"], tags: ["work", "contracts"] },
    {
      id: "au-cas-ou", type: "phrase", pos: "phrase", target: "au cas où",
      gloss: { es: "por si acaso, en caso de que", en: "in case / should" },
      accept: [{ text: "dans le cas où" }],
      distractors: ["en cas où", "au cas que", "à cas où"],
      note: { es: "Con condicional, no con subjuntivo: au cas où il pleuvrait.", en: "Followed by the conditional: au cas où il pleuvrait." },
      grammar: ["fr-g-au-cas-ou"], tags: ["work", "conditions"],
    },
    { id: "terrain-dentente", type: "phrase", pos: "phrase", target: "trouver un terrain d'entente", gloss: { es: "llegar a un acuerdo, encontrar un punto en común", en: "to find common ground" }, distractors: ["trouver un terrain d'attente", "trouver un champ d'entente", "faire un terrain d'entente"], tags: ["work", "negotiation", "chunk"] },
    { id: "couper-la-poire", type: "phrase", pos: "phrase", target: "couper la poire en deux", gloss: { es: "repartir la diferencia, quedar a mitad de camino", en: "to split the difference" }, distractors: ["couper la pomme en deux", "partager la poire en trois", "casser la poire en deux"], note: { es: "Literalmente «cortar la pera en dos».", en: "Literally 'to cut the pear in two'." }, tags: ["work", "negotiation", "idioms"] },
    { id: "noir-sur-blanc", type: "phrase", pos: "phrase", target: "mettre noir sur blanc", gloss: { es: "poner por escrito", en: "to put in writing" }, distractors: ["mettre blanc sur noir", "mettre noir et blanc", "mettre le noir au blanc"], tags: ["work", "idioms"] },
    { id: "proceder-a-la-signature", type: "phrase", pos: "phrase", target: "procéder à la signature", gloss: { es: "proceder a la firma", en: "to proceed with the signing" }, distractors: ["procéder la signature", "procéder de la signature", "précéder à la signature"], grammar: ["fr-g-nominalisation"], tags: ["work", "contracts", "formal"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "nous-serions-prets", type: "sentence", register: "formal", target: "Nous serions prêts à revoir notre prix.",
      gloss: { es: "Estaríamos dispuestos a revisar nuestro precio.", en: "We would be prepared to review our price." },
      distractors: ["serons", "prêt", "nos"],
      note: { es: "El condicional suaviza la oferta y deja margen para negociar.", en: "The conditional softens the offer and leaves room to negotiate." },
      tags: ["work", "negotiation", "polite"],
    },
    {
      id: "au-cas-ou-questions", type: "sentence", register: "formal", target: "Au cas où vous auriez des questions, n'hésitez pas à me contacter.",
      gloss: { es: "En caso de que tenga preguntas, no dude en contactarme.", en: "Should you have any questions, don't hesitate to contact me." },
      accept: [{ text: "Dans le cas où vous auriez des questions, n'hésitez pas à me contacter." }],
      errors: [
        { text: "Au cas où vous ayez des questions, n'hésitez pas à me contacter.", feedback: { es: "«au cas où» no lleva subjuntivo como «en caso de que»: va con condicional (vous auriez).", en: "au cas où takes the conditional, not the subjunctive: vous auriez." }, ruleId: "fr-g-au-cas-ou" },
        { text: "Au cas où vous avez des questions, n'hésitez pas à me contacter.", feedback: { es: "Tras «au cas où», condicional: vous auriez.", en: "After au cas où, use the conditional: vous auriez." }, ruleId: "fr-g-au-cas-ou" },
      ],
      distractors: ["ayez", "avez", "si"],
      grammar: ["fr-g-au-cas-ou"], tags: ["work", "conditions", "formal"],
    },
    {
      id: "a-condition-que-paiement", type: "sentence", target: "Nous acceptons, à condition que le paiement soit effectué sous trente jours.",
      gloss: { es: "Aceptamos, a condición de que el pago se realice en un plazo de treinta días.", en: "We accept, provided that payment is made within thirty days." },
      accept: [{ text: "Nous acceptons, pourvu que le paiement soit effectué sous trente jours." }],
      errors: [{ text: "Nous acceptons, à condition que le paiement est effectué sous trente jours.", feedback: { es: "«à condition que» pide subjuntivo: soit effectué.", en: "à condition que takes the subjunctive: soit effectué." }, ruleId: "fr-g-au-cas-ou" }],
      distractors: ["est", "sera", "dans"],
      grammar: ["fr-g-au-cas-ou", "fr-g-nominalisation"], tags: ["work", "conditions", "money"],
    },
    {
      id: "a-moins-que", type: "sentence", target: "Nous ne signerons pas, à moins que vous ne baissiez le prix.",
      gloss: { es: "No firmaremos, a menos que bajen el precio.", en: "We won't sign unless you lower the price." },
      accept: [{ text: "Nous ne signerons pas, à moins que vous baissiez le prix." }],
      errors: [{ text: "Nous ne signerons pas, à moins que vous baissez le prix.", feedback: { es: "«à moins que» pide subjuntivo: vous baissiez.", en: "à moins que takes the subjunctive: vous baissiez." }, ruleId: "fr-g-au-cas-ou" }],
      distractors: ["baissez", "sauf", "signons"],
      note: { es: "El «ne» tras «à moins que» no niega nada: es un rasgo del registro cuidado.", en: "The ne after à moins que isn't a negation: it marks careful style." },
      grammar: ["fr-g-au-cas-ou"], tags: ["work", "conditions", "negotiation"],
    },
    {
      id: "il-convient-de-proceder", type: "sentence", register: "formal", target: "Il convient de procéder au paiement avant l'échéance.",
      gloss: { es: "Conviene realizar el pago antes del vencimiento.", en: "Payment should be made before the due date." },
      errors: [{ text: "Il convient de procéder le paiement avant l'échéance.", feedback: { es: "«procéder» pide «à»: procéder au paiement.", en: "procéder takes à: procéder au paiement." }, ruleId: "fr-g-nominalisation" }],
      distractors: ["du", "après", "faut"],
      grammar: ["fr-g-nominalisation"], tags: ["work", "money", "formal"],
    },
    {
      id: "coupons-la-poire", type: "sentence", target: "Coupons la poire en deux.",
      gloss: { es: "Repartamos la diferencia.", en: "Let's split the difference." },
      distractors: ["Coupez", "pomme", "trois"],
      tags: ["work", "negotiation", "idioms"],
    },
    {
      id: "faire-parvenir-devis", type: "sentence", register: "formal", target: "Je vous ferai parvenir le devis d'ici vendredi.",
      gloss: { es: "Le haré llegar el presupuesto antes del viernes.", en: "I'll send you the quote by Friday." },
      distractors: ["devise", "parvenu", "jusqu'à"],
      note: { es: "faire parvenir = hacer llegar, enviar (formal); d'ici vendredi = de aquí al viernes.", en: "faire parvenir = to send (formal); d'ici vendredi = by Friday." },
      tags: ["work", "formal"],
    },
    {
      id: "mettons-noir-sur-blanc", type: "sentence", target: "Mettons tout cela noir sur blanc.",
      gloss: { es: "Pongamos todo eso por escrito.", en: "Let's put all that in writing." },
      distractors: ["Mettez", "blanche", "en"],
      tags: ["work", "idioms"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-au-cas-ou", type: "pattern", target: "au cas où + conditionnel · à condition que / à moins que + subjonctif",
      gloss: { es: "poner condiciones: au cas où, à condition que, à moins que", en: "setting conditions: au cas où, à condition que, à moins que" },
      pattern: {
        rule: {
          es: "au cas où (= en caso de que) va con condicional: au cas où il pleuvrait. à condition que, pourvu que y à moins que (= a menos que) van con subjuntivo; tras à moins que se añade a menudo un «ne» sin valor negativo.",
          en: "au cas où (= in case / should) takes the conditional: au cas où il pleuvrait. à condition que, pourvu que and à moins que (= unless) take the subjunctive; à moins que often adds a ne that isn't negative.",
        },
        table: [["au cas où", "vous auriez besoin d'aide"], ["à condition que", "vous signiez lundi"], ["à moins que", "le prix (ne) baisse"]],
      },
      question: {
        prompt: { es: "Completa: «Au cas où le train ___ du retard, prends un taxi.»", en: "Complete: 'Au cas où le train ___ du retard, prends un taxi.'" },
        options: ["aurait", "a", "ait", "aura"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-au-cas-ou"], tags: ["grammar", "conditions"],
    },
    {
      id: "pat-nominalisation", type: "pattern", target: "payer → effectuer le paiement · signer → procéder à la signature",
      gloss: { es: "estilo nominal en textos formales", en: "nominal style in formal texts" },
      pattern: {
        rule: {
          es: "En correos y contratos, el verbo simple se cambia por un verbo de apoyo + sustantivo: effectuer le paiement, procéder à la signature, assurer la livraison, prendre une décision.",
          en: "In emails and contracts the plain verb becomes a support verb + noun: effectuer le paiement, procéder à la signature, assurer la livraison, prendre une décision.",
        },
        table: [["payer", "effectuer le paiement"], ["signer", "procéder à la signature"], ["livrer", "assurer la livraison"], ["décider", "prendre une décision"]],
      },
      question: {
        prompt: { es: "Versión formal de «Payez avant vendredi»:", en: "Formal version of 'Payez avant vendredi':" },
        options: ["Veuillez effectuer le paiement avant vendredi.", "Veuillez effectuer la paye avant vendredi.", "Veuillez procéder le paiement avant vendredi.", "Veuillez paiement avant vendredi."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-nominalisation"], tags: ["grammar", "formal"],
    },
    {
      id: "tab-nominalisation", type: "paradigm", target: "du verbe au nom",
      gloss: { es: "del verbo al sustantivo (estilo nominal)", en: "from verb to noun (nominal style)" },
      grammar: ["fr-g-nominalisation"],
      paradigm: {
        caption: { es: "Escribe el sustantivo con su artículo", en: "Write the noun with its article" },
        cells: [
          { label: "payer", answer: "le paiement", ruleId: "fr-g-nominalisation" },
          { label: "signer", answer: "la signature", ruleId: "fr-g-nominalisation" },
          { label: "livrer", answer: "la livraison", ruleId: "fr-g-nominalisation" },
          { label: "décider", answer: "la décision", ruleId: "fr-g-nominalisation" },
          { label: "négocier", answer: "la négociation", ruleId: "fr-g-nominalisation" },
          { label: "résilier", answer: "la résiliation", ruleId: "fr-g-nominalisation" },
        ],
      },
      tags: ["grammar", "formal", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-devis", type: "listening", register: "formal",
      target: "Nous avons étudié votre devis avec attention. Le prix nous semble raisonnable, mais les délais de livraison sont trop longs. Au cas où vous pourriez les réduire de deux semaines, nous serions prêts à signer.",
      gloss: {
        es: "Revisamos con atención su presupuesto. El precio nos parece razonable, pero los plazos de entrega son demasiado largos. Si pudieran reducirlos en dos semanas, estaríamos listos para firmar.",
        en: "We have looked carefully at your quote. The price seems reasonable, but the delivery times are too long. Should you be able to cut them by two weeks, we would be ready to sign.",
      },
      question: {
        prompt: { es: "¿Qué hace falta para firmar?", en: "What is needed before they sign?" },
        options: [
          { es: "Reducir los plazos de entrega en dos semanas.", en: "Cutting delivery times by two weeks." },
          { es: "Bajar el precio.", en: "Lowering the price." },
          { es: "Enviar un presupuesto nuevo dentro de dos semanas.", en: "Sending a new quote within two weeks." },
          { es: "Nada: ya están listos para firmar.", en: "Nothing: they're ready to sign now." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-au-cas-ou"], tags: ["listening", "work", "negotiation"],
    },
    {
      id: "dlg-poire", type: "dialogue", register: "formal", target: "Disons soixante jours, et nous coupons la poire en deux.",
      gloss: { es: "Digamos sesenta días y quedamos a mitad de camino.", en: "Let's say sixty days and split the difference." },
      turns: [
        { who: "A", target: "Le prix que vous proposez dépasse un peu notre budget.", gloss: { es: "El precio que proponen supera un poco nuestro presupuesto.", en: "The price you're proposing is a little over our budget." } },
        { who: "B", target: "Je comprends. Si vous commandez au moins mille pièces, nous pouvons vous accorder une remise de dix pour cent.", gloss: { es: "Entiendo. Si piden al menos mil piezas, podemos hacerles un descuento del diez por ciento.", en: "I understand. If you order at least a thousand units, we can give you a ten per cent discount." } },
        { who: "A", target: "Et pour le paiement ? Il nous faudrait quatre-vingt-dix jours.", gloss: { es: "¿Y el pago? Necesitaríamos noventa días.", en: "And payment? We'd need ninety days." } },
        { who: "B", target: "Disons soixante jours, et nous coupons la poire en deux.", gloss: { es: "Digamos sesenta días y quedamos a mitad de camino.", en: "Let's say sixty days and split the difference." } },
      ],
      question: {
        prompt: { es: "¿Qué propone B sobre el plazo de pago?", en: "What does B propose for the payment terms?" },
        options: [
          { es: "Sesenta días.", en: "Sixty days." },
          { es: "Noventa días.", en: "Ninety days." },
          { es: "Pago por adelantado.", en: "Payment in advance." },
          { es: "Treinta días con descuento.", en: "Thirty days with a discount." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work", "negotiation"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-eventuellement", type: "bridge", onlyFor: "en", target: "éventuellement",
      gloss: { es: "posiblemente, llegado el caso", en: "possibly / if need be" },
      question: {
        prompt: { es: "«Nous pourrions éventuellement baisser le prix» significa…", en: "'Nous pourrions éventuellement baisser le prix' means…" },
        options: [
          { es: "Quizás podríamos bajar el precio.", en: "We could possibly lower the price." },
          { es: "Al final bajaremos el precio.", en: "We will eventually lower the price." },
          { es: "Nunca bajaremos el precio.", en: "We will never lower the price." },
        ],
        answer: 0,
      },
      note: { en: "éventuellement = possibly; 'eventually' is finalement or à la longue." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "negotiation"],
    },
  ]),
};
