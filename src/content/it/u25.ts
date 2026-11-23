import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u25",
  lang: "it",
  index: 25,
  cefr: "C1",
  title: { target: "Trattative di lavoro", es: "Negociar en el trabajo", en: "Negotiating at work" },
  canDo: [
    { es: "Puedo negociar condiciones con un registro formal.", en: "I can negotiate terms in a formal register." },
    { es: "Puedo escribir correos de trabajo en estilo nominal (procedere alla firma, effettuare il pagamento).", en: "I can write work emails in a nominal style (procedere alla firma, effettuare il pagamento)." },
    { es: "Sé poner condiciones con qualora, nel caso in cui y a condizione che.", en: "I can set conditions with qualora, nel caso in cui and a condizione che." },
  ],
  icon: "🤝",
  items: build("it", 25, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "trattativa", type: "word", pos: "noun", target: "la trattativa", gender: "f", plural: "le trattative",
      gloss: { es: "la negociación (de un contrato, un precio)", en: "the negotiation (of a deal or price)" },
      distractors: ["il trattato", "la trattoria", "la tratta"],
      note: { es: "il trattato = el tratado (entre países); la trattativa = la negociación.", en: "il trattato = treaty (between countries); la trattativa = negotiation." },
      tags: ["work", "negotiation"],
    },
    {
      id: "preventivo", type: "word", pos: "noun", target: "il preventivo", gender: "m", plural: "i preventivi",
      gloss: { es: "el presupuesto (de un trabajo o servicio)", en: "the quote / estimate" },
      distractors: ["la prevenzione", "il previsto", "il bilancio"],
      note: { es: "il bilancio = el presupuesto de una empresa o un Estado; il preventivo = lo que te cobra un proveedor.", en: "il bilancio = a company's or state's budget; il preventivo = what a supplier quotes you." },
      tags: ["work", "negotiation", "money"],
    },
    {
      id: "fatturato", type: "word", pos: "noun", target: "il fatturato", gender: "m", plural: "i fatturati",
      gloss: { es: "la facturación (de una empresa)", en: "the turnover / revenue" },
      distractors: ["la fattura", "il fattorino", "il fattore"],
      note: { es: "la fattura = la factura; il fatturato = el total facturado en un período.", en: "la fattura = invoice; il fatturato = total revenue over a period." },
      tags: ["work", "money"],
    },
    {
      id: "penale", type: "word", pos: "noun", target: "la penale", gender: "f", plural: "le penali",
      gloss: { es: "la penalización (por incumplir un contrato)", en: "the penalty (for breach of contract)" },
      distractors: ["il penale", "la pena", "la pendenza"],
      tags: ["work", "negotiation", "contracts"],
    },
    {
      id: "ordine-del-giorno", type: "word", pos: "noun", target: "l'ordine del giorno", gender: "m", plural: "gli ordini del giorno",
      gloss: { es: "el orden del día (de una reunión)", en: "the agenda (of a meeting)" },
      distractors: ["l'ordine di giorno", "l'agenda del giorno", "la giornata d'ordine"],
      note: { es: "l'agenda es la libreta donde anotas tus citas, no los temas de una reunión.", en: "l'agenda is your diary or planner, not the topics of a meeting." },
      tags: ["work", "meetings"],
    },
    {
      id: "sottoporre", type: "word", pos: "verb", target: "sottoporre",
      gloss: { es: "someter, presentar (a consideración)", en: "to submit / put forward (for consideration)" },
      forms: { io: "sottopongo", noi: "sottoponiamo", pp: "sottoposto" },
      distractors: ["supporre", "sopportare", "sottoscrivere"],
      tags: ["work", "negotiation", "formal"],
    },
    {
      id: "vincolante", type: "word", pos: "adj", target: "vincolante",
      gloss: { es: "vinculante, obligatorio/a", en: "binding" },
      distractors: ["vincente", "vincolato", "convincente"],
      tags: ["work", "contracts"],
    },
    {
      id: "qualora", type: "word", pos: "other", target: "qualora",
      gloss: { es: "en caso de que (formal)", en: "should / in the event that (formal)" },
      distractors: ["qualunque", "allora", "qualcosa"],
      note: { es: "Siempre con congiuntivo: qualora fosse necessario.", en: "Always with the subjunctive: qualora fosse necessario." },
      grammar: ["it-g-qualora"], tags: ["work", "conditions", "formal"],
    },
    {
      id: "a-condizione-che", type: "phrase", pos: "phrase", target: "a condizione che",
      gloss: { es: "a condición de que", en: "on condition that" },
      accept: [{ text: "a patto che" }],
      distractors: ["a condizione di", "con condizione che", "in condizione che"],
      note: { es: "Con congiuntivo: a condizione che paghiate in anticipo.", en: "With the subjunctive: a condizione che paghiate in anticipo." },
      grammar: ["it-g-qualora"], tags: ["work", "conditions"],
    },
    {
      id: "procedere-alla-firma", type: "phrase", pos: "phrase", target: "procedere alla firma",
      gloss: { es: "proceder a la firma", en: "to proceed with the signing" },
      distractors: ["procedere la firma", "procedere con firma", "precedere alla firma"],
      grammar: ["it-g-stile-nominale"], tags: ["work", "contracts", "formal"],
    },
    {
      id: "effettuare-il-pagamento", type: "phrase", pos: "phrase", target: "effettuare il pagamento",
      gloss: { es: "realizar el pago", en: "to make (the) payment" },
      distractors: ["effettuare la paga", "effettare il pagamento", "fare effetto il pagamento"],
      grammar: ["it-g-stile-nominale"], tags: ["work", "money", "formal"],
    },
    {
      id: "venirsi-incontro", type: "phrase", pos: "phrase", target: "venirsi incontro",
      gloss: { es: "llegar a un punto medio, hacer concesiones mutuas", en: "to meet each other halfway" },
      distractors: ["venirsi contro", "andarsi incontro", "venire in contro"],
      note: { es: "Con noi: possiamo venirci incontro.", en: "With noi: possiamo venirci incontro." },
      tags: ["work", "negotiation", "chunk"],
    },
    {
      id: "nero-su-bianco", type: "phrase", pos: "phrase", target: "mettere nero su bianco",
      gloss: { es: "poner por escrito", en: "to put in writing" },
      distractors: ["mettere bianco su nero", "mettere nero e bianco", "mettere il nero sul bianco"],
      tags: ["work", "idioms"],
    },
    {
      id: "andare-a-buon-fine", type: "phrase", pos: "phrase", target: "andare a buon fine",
      gloss: { es: "concretarse, salir bien (un trato, un pago)", en: "to go through / be successful (a deal, a payment)" },
      distractors: ["andare a buona fine", "andare in buon fine", "andare al buon fine"],
      tags: ["work", "negotiation", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "saremmo-disposti", type: "sentence", register: "formal", target: "Saremmo disposti a rivedere il prezzo.",
      gloss: { es: "Estaríamos dispuestos a revisar el precio.", en: "We would be willing to review the price." },
      distractors: ["Saremo", "disposto", "prezzi"],
      note: { es: "El condicional suaviza la oferta: deja margen para negociar.", en: "The conditional softens the offer and leaves room to negotiate." },
      tags: ["work", "negotiation", "polite"],
    },
    {
      id: "le-sottoponiamo", type: "sentence", register: "formal", target: "Le sottoponiamo la nostra migliore offerta.",
      gloss: { es: "Le presentamos nuestra mejor oferta.", en: "We are submitting our best offer to you." },
      distractors: ["Ti", "sottopone", "migliori"],
      tags: ["work", "negotiation", "formal"],
    },
    {
      id: "qualora-le-condizioni", type: "sentence", register: "formal", target: "Qualora le condizioni non fossero accettate, la trattativa si interromperà.",
      gloss: { es: "En caso de que no se aceptaran las condiciones, la negociación se interrumpirá.", en: "Should the terms not be accepted, the negotiation will be broken off." },
      errors: [{ text: "Qualora le condizioni non sono accettate, la trattativa si interromperà.", feedback: { es: "qualora siempre pide congiuntivo: fossero accettate (o siano accettate).", en: "qualora always takes the subjunctive: fossero accettate (or siano accettate)." }, ruleId: "it-g-qualora" }],
      accept: [{ text: "Qualora le condizioni non venissero accettate, la trattativa si interromperà." }, { text: "Qualora le condizioni non siano accettate, la trattativa si interromperà." }],
      distractors: ["sono", "erano", "interrompe"],
      grammar: ["it-g-qualora"], tags: ["work", "conditions", "formal"],
    },
    {
      id: "si-prega-pagamento", type: "sentence", register: "formal", target: "Si prega di effettuare il pagamento entro la data di scadenza.",
      gloss: { es: "Se ruega realizar el pago antes de la fecha de vencimiento.", en: "Please make payment by the due date." },
      distractors: ["prega", "effettua", "dalla"],
      grammar: ["it-g-stile-nominale"], tags: ["work", "money", "formal"],
    },
    {
      id: "procederemo-alla-firma", type: "sentence", register: "formal", target: "Procederemo alla firma non appena avremo ricevuto il preventivo definitivo.",
      gloss: { es: "Procederemos a la firma en cuanto recibamos el presupuesto definitivo.", en: "We will proceed with the signing as soon as we have received the final quote." },
      errors: [{ text: "Procederemo la firma non appena avremo ricevuto il preventivo definitivo.", feedback: { es: "procedere pide «a»: procedere alla firma.", en: "procedere takes a: procedere alla firma." }, ruleId: "it-g-stile-nominale" }],
      distractors: ["della", "riceveremo", "definitiva"],
      note: { es: "Futuro anterior tras non appena: avremo ricevuto (en español: «en cuanto recibamos»).", en: "Future perfect after non appena: avremo ricevuto ('as soon as we have received')." },
      grammar: ["it-g-stile-nominale"], tags: ["work", "contracts", "formal"],
    },
    {
      id: "possiamo-venirci-incontro", type: "sentence", target: "Possiamo venirci incontro sui tempi di consegna.",
      gloss: { es: "Podemos ceder un poco cada uno con los plazos de entrega.", en: "We can meet each other halfway on delivery times." },
      distractors: ["venirsi", "contro", "nei"],
      tags: ["work", "negotiation"],
    },
    {
      id: "a-condizione-che-firmato", type: "sentence", target: "Accettiamo, a condizione che il contratto venga firmato entro fine mese.",
      gloss: { es: "Aceptamos, a condición de que el contrato se firme antes de fin de mes.", en: "We accept, on condition that the contract is signed by the end of the month." },
      accept: [{ text: "Accettiamo, a patto che il contratto venga firmato entro fine mese." }, { text: "Accettiamo, a condizione che il contratto sia firmato entro fine mese." }],
      errors: [{ text: "Accettiamo, a condizione che il contratto viene firmato entro fine mese.", feedback: { es: "a condizione che pide congiuntivo: venga firmato.", en: "a condizione che takes the subjunctive: venga firmato." }, ruleId: "it-g-qualora" }],
      distractors: ["viene", "firmata", "di"],
      grammar: ["it-g-qualora", "it-g-passivo-venire"], tags: ["work", "conditions"],
    },
    {
      id: "mettiamo-nero-su-bianco", type: "sentence", target: "Mettiamo tutto nero su bianco.",
      gloss: { es: "Pongamos todo por escrito.", en: "Let's put everything in writing." },
      distractors: ["Mettete", "bianca", "in"],
      tags: ["work", "idioms"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-stile-nominale", type: "pattern", target: "pagare → effettuare il pagamento · firmare → procedere alla firma",
      gloss: { es: "estilo nominal en textos formales", en: "nominal style in formal texts" },
      pattern: {
        rule: {
          es: "En correos y contratos se cambia el verbo simple por un verbo de apoyo + sustantivo: effettuare il pagamento, procedere alla firma, provvedere alla consegna, dare comunicazione.",
          en: "In emails and contracts the plain verb becomes a support verb + noun: effettuare il pagamento, procedere alla firma, provvedere alla consegna, dare comunicazione.",
        },
        table: [["pagare", "effettuare il pagamento"], ["firmare", "procedere alla firma"], ["consegnare", "provvedere alla consegna"], ["comunicare", "dare comunicazione"]],
      },
      question: {
        prompt: { es: "Versión formal de «Paghi entro venerdì»:", en: "Formal version of 'Paghi entro venerdì':" },
        options: ["Si prega di effettuare il pagamento entro venerdì.", "Si prega di effettuare la paga entro venerdì.", "Si prega di procedere il pagamento entro venerdì.", "Si prega di pagamento entro venerdì."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-stile-nominale"], tags: ["grammar", "formal"],
    },
    {
      id: "pat-qualora", type: "pattern", target: "qualora fosse necessario · nel caso in cui abbia domande · a condizione che firmiate",
      gloss: { es: "qualora, nel caso in cui, a condizione che + congiuntivo", en: "qualora, nel caso in cui, a condizione che + subjunctive" },
      pattern: {
        rule: {
          es: "qualora y nel caso in cui (= en caso de que) y a condizione che / a patto che (= a condición de que) van siempre con congiuntivo. qualora es típico del registro formal.",
          en: "qualora and nel caso in cui (= should / in case) and a condizione che / a patto che (= on condition that) always take the subjunctive. qualora is typical of formal register.",
        },
        table: [["qualora", "fosse necessario"], ["nel caso in cui", "abbia domande"], ["a condizione che", "firmiate entro lunedì"]],
      },
      question: {
        prompt: { es: "Completa: «Qualora ___ necessario, La contatteremo.»", en: "Complete: 'Qualora ___ necessario, La contatteremo.'" },
        options: ["fosse", "è", "sarà", "sarebbe"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-qualora"], tags: ["grammar", "conditions"],
    },
    {
      id: "tab-stile-nominale", type: "paradigm", target: "dal verbo al sostantivo",
      gloss: { es: "del verbo al sustantivo (estilo nominal)", en: "from verb to noun (nominal style)" },
      grammar: ["it-g-stile-nominale"],
      paradigm: {
        caption: { es: "Escribe el sustantivo con su artículo", en: "Write the noun with its article" },
        cells: [
          { label: "pagare", answer: "il pagamento", ruleId: "it-g-stile-nominale" },
          { label: "firmare", answer: "la firma", ruleId: "it-g-stile-nominale" },
          { label: "consegnare", answer: "la consegna", ruleId: "it-g-stile-nominale" },
          { label: "decidere", answer: "la decisione", ruleId: "it-g-stile-nominale" },
          { label: "trattare", answer: "la trattativa", ruleId: "it-g-stile-nominale" },
        ],
      },
      tags: ["grammar", "formal", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-preventivo", type: "listening", register: "formal",
      target: "Abbiamo esaminato con attenzione il vostro preventivo. Il prezzo ci sembra ragionevole, ma i tempi di consegna sono troppo lunghi. Qualora riusciste a ridurli di due settimane, saremmo pronti a firmare.",
      gloss: {
        es: "Revisamos con atención su presupuesto. El precio nos parece razonable, pero los plazos de entrega son demasiado largos. Si lograran reducirlos en dos semanas, estaríamos listos para firmar.",
        en: "We have looked carefully at your quote. The price seems reasonable, but the delivery times are too long. Should you manage to cut them by two weeks, we would be ready to sign.",
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
      exercises: ["question", "listen"], grammar: ["it-g-qualora"], tags: ["listening", "work", "negotiation"],
    },
    {
      id: "dlg-trattativa", type: "dialogue", target: "Facciamo sessanta e ci veniamo incontro.",
      gloss: { es: "Dejémoslo en sesenta y quedamos a mitad de camino.", en: "Let's say sixty and meet halfway." },
      turns: [
        { who: "A", target: "Il prezzo che ci proponete è un po' alto per il nostro budget.", gloss: { es: "El precio que nos proponen es un poco alto para nuestro presupuesto.", en: "The price you're offering is a bit high for our budget." } },
        { who: "B", target: "Capisco. Se ordinate almeno mille pezzi, possiamo applicare uno sconto del dieci per cento.", gloss: { es: "Entiendo. Si piden al menos mil unidades, podemos aplicar un descuento del diez por ciento.", en: "I see. If you order at least a thousand units, we can apply a ten per cent discount." } },
        { who: "A", target: "E per il pagamento? Avremmo bisogno di novanta giorni.", gloss: { es: "¿Y el pago? Necesitaríamos noventa días.", en: "And payment? We'd need ninety days." } },
        { who: "B", target: "Facciamo sessanta e ci veniamo incontro.", gloss: { es: "Dejémoslo en sesenta y quedamos a mitad de camino.", en: "Let's say sixty and meet halfway." } },
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

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-compromesso", type: "bridge", onlyFor: "es", target: "il compromesso",
      gloss: { es: "el acuerdo intermedio, la concesión mutua", en: "the compromise" },
      question: {
        prompt: { es: "«Alla fine abbiamo trovato un compromesso» significa…", en: "'Alla fine abbiamo trovato un compromesso' means…" },
        options: [
          { es: "Al final llegamos a un acuerdo intermedio.", en: "In the end we reached a compromise." },
          { es: "Al final asumimos una obligación.", en: "In the end we took on an obligation." },
          { es: "Al final nos comprometimos (para casarnos).", en: "In the end we got engaged." },
          { es: "Al final encontramos un problema.", en: "In the end we found a problem." },
        ],
        answer: 0,
      },
      note: { es: "Un compromiso (obligación) es «un impegno»; comprometerse para casarse es «fidanzarsi»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "negotiation"],
    },
  ]),
};
