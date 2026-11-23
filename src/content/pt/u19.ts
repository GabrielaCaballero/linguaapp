import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u19",
  lang: "pt",
  index: 19,
  cefr: "B2",
  title: { target: "O mundo do trabalho", es: "El mundo laboral", en: "The world of work" },
  canDo: [
    { es: "Puedo hablar de contratos, plazos y condiciones de trabajo y negociar con cortesía.", en: "I can discuss contracts, deadlines and working conditions and negotiate politely." },
    { es: "Sé usar el futuro de subjuntivo (quando puder, se der, assim que tiver).", en: "I can use the future subjunctive (quando puder, se der, assim que tiver)." },
  ],
  icon: "📈",
  items: build("pt", 19, "B2", [
    { id: "contrato", type: "word", pos: "noun", target: "o contrato", gender: "m", plural: "os contratos", gloss: { es: "el contrato", en: "the contract" }, distractors: ["a contrata", "o contracto", "o contrário"], note: { es: "En Brasil la c muda nunca se escribió (contrato, ação, ótimo); desde el Acuerdo Ortográfico Portugal también la quitó (antes: contracto, acção, óptimo).", en: "Brazilian spelling has no silent c (contrato, ação, ótimo); since the Spelling Agreement Portugal dropped it too (formerly contracto, acção, óptimo)." }, tags: ["work", "contracts"] },
    { id: "prazo", type: "word", pos: "noun", target: "o prazo", gender: "m", plural: "os prazos", gloss: { es: "el plazo", en: "the deadline / time limit" }, distractors: ["o praço", "a prazo", "o preço"], tags: ["work"] },
    { id: "aumento", type: "word", pos: "noun", target: "o aumento", gender: "m", plural: "os aumentos", gloss: { es: "el aumento (de sueldo)", en: "the pay rise" }, distractors: ["a aumenta", "o alimento", "o argumento"], tags: ["work", "money"] },
    { id: "demitir", type: "word", pos: "verb", target: "demitir", gloss: { es: "despedir (a un empleado)", en: "to fire / dismiss" }, forms: { "ele (pret.)": "demitiu", "passiva": "foi demitido" }, distractors: ["dimitir", "despedir-se", "admitir"], note: { es: "pedir demissão = renunciar (dimitir); ser demitido = ser despedido.", en: "pedir demissão = to resign; ser demitido = to be fired." }, tags: ["work", "verbs"] },
    { id: "contratar", type: "word", pos: "verb", target: "contratar", gloss: { es: "contratar", en: "to hire" }, forms: { "ele (pret.)": "contratou" }, distractors: ["contrair", "contrastar", "contatar"], tags: ["work", "verbs"] },
    { id: "estagio", type: "word", pos: "noun", target: "o estágio", gender: "m", plural: "os estágios", gloss: { es: "las prácticas, la pasantía", en: "the internship" }, distractors: ["o estádio", "a estagia", "o estagiário de"], tags: ["work"] },
    { id: "carteira-assinada", type: "phrase", pos: "phrase", target: "com carteira assinada", gloss: { es: "con contrato formal (empleo registrado, con todos los derechos)", en: "formally employed (with full rights)" }, distractors: ["com carta assinada", "de carteira firmada", "com cartão assinado"], note: { es: "En Brasil, el empleo formal se registra en la «carteira de trabalho».", en: "In Brazil formal jobs are recorded in the 'carteira de trabalho' (work booklet)." }, tags: ["work", "culture"] },
    { id: "salario-negociavel", type: "phrase", pos: "phrase", target: "a combinar", gloss: { es: "a convenir", en: "negotiable / to be agreed" }, distractors: ["para combinar", "a combinado", "de combinar"], note: { es: "En anuncios: «Salário a combinar».", en: "In job ads: 'Salário a combinar' (salary negotiable)." }, tags: ["work", "chunk"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "quando-voce-puder", type: "sentence", target: "Quando você puder, me manda a proposta por e-mail.",
      gloss: { es: "Cuando puedas, mándame la propuesta por correo.", en: "When you can, send me the proposal by email." },
      accept: [{ text: "Quando você puder, me mande a proposta por e-mail." }],
      errors: [{ text: "Quando você pode, me manda a proposta por e-mail.", feedback: { es: "Para el futuro tras «quando» va el futuro de subjuntivo: puder.", en: "After 'quando' about the future, use the future subjunctive: puder." }, ruleId: "pt-g-futuro-subjuntivo" }, { text: "Quando você possa, me manda a proposta por e-mail.", feedback: { es: "«Cuando puedas» no es presente de subjuntivo en portugués: quando você puder.", en: "Portuguese uses the future subjunctive here: quando você puder." }, ruleId: "pt-g-futuro-subjuntivo" }],
      distractors: ["pode", "possa", "pelo"],
      tags: ["work", "subjunctive"],
    },
    {
      id: "se-der-tempo", type: "sentence", target: "Se der tempo, a gente termina o relatório hoje.",
      gloss: { es: "Si da tiempo, terminamos el informe hoy.", en: "If there's time, we'll finish the report today." },
      accept: [{ text: "Se der tempo, nós terminamos o relatório hoje." }],
      distractors: ["dá", "desse", "termina-se"],
      grammar: ["pt-g-futuro-subjuntivo"], tags: ["work", "subjunctive"],
    },
    {
      id: "assim-que-tiver", type: "sentence", target: "Assim que eu tiver uma resposta, eu te aviso.",
      gloss: { es: "En cuanto tenga una respuesta, te aviso.", en: "As soon as I have an answer, I'll let you know." },
      accept: [{ text: "Assim que tiver uma resposta, te aviso." }, { text: "Assim que eu tiver uma resposta, te aviso." }],
      variants: [{ region: "PT", text: "Assim que tiver uma resposta, aviso-te." }],
      errors: [{ text: "Assim que eu tenha uma resposta, eu te aviso.", feedback: { es: "En portugués: assim que + futuro de subjuntivo (tiver).", en: "Portuguese uses assim que + future subjunctive (tiver)." }, ruleId: "pt-g-futuro-subjuntivo" }],
      distractors: ["tenha", "ter", "avisarei"],
      tags: ["work", "subjunctive"],
    },
    {
      id: "gostariamos-de-propor", type: "sentence", target: "Gostaríamos de propor um prazo maior para a entrega.", register: "formal",
      gloss: { es: "Quisiéramos proponer un plazo más largo para la entrega.", en: "We would like to propose a longer deadline for delivery. (formal)" },
      accept: [{ text: "Gostaríamos de propor um prazo mais longo para a entrega." }],
      distractors: ["proporer", "mais grande", "por"],
      tags: ["work", "negotiation", "formal"],
    },
    {
      id: "ele-foi-demitido", type: "sentence", target: "Ele foi demitido e agora está procurando emprego.",
      gloss: { es: "Lo despidieron y ahora está buscando trabajo.", en: "He was fired and now he's looking for a job." },
      variants: [{ region: "PT", text: "Ele foi despedido e agora está à procura de emprego.", note: { es: "En Portugal: ser despedido, estar à procura de.", en: "In Portugal: ser despedido, estar à procura de." } }],
      distractors: ["dimitido", "despediu", "buscado"],
      tags: ["work"],
    },
    {
      id: "nao-abro-mao", type: "sentence", target: "Desse ponto eu não abro mão.",
      gloss: { es: "A eso no renuncio. / En ese punto no cedo.", en: "I won't give way on that point." },
      accept: [{ text: "Eu não abro mão desse ponto." }],
      distractors: ["deixo", "de esse", "mãos"],
      note: { es: "abrir mão de algo = renunciar a algo, ceder.", en: "abrir mão de algo = to give something up." },
      tags: ["work", "negotiation", "idiom"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-futuro-subj", type: "paradigm", target: "futuro do subjuntivo (eu)", spoken: "futuro do subjuntivo",
      gloss: { es: "futuro de subjuntivo, forma de «eu»", en: "future subjunctive, eu form" },
      grammar: ["pt-g-futuro-subjuntivo"],
      paradigm: {
        caption: { es: "Completa: «Quando eu… »", en: "Complete: 'Quando eu… '" },
        cells: [
          { label: "falar", answer: "falar", ruleId: "pt-g-futuro-subjuntivo" },
          { label: "ter", answer: "tiver", ruleId: "pt-g-futuro-subjuntivo" },
          { label: "ser / ir", answer: "for", ruleId: "pt-g-futuro-subjuntivo" },
          { label: "fazer", answer: "fizer", ruleId: "pt-g-futuro-subjuntivo" },
          { label: "poder", answer: "puder", ruleId: "pt-g-futuro-subjuntivo" },
          { label: "estar", answer: "estiver", ruleId: "pt-g-futuro-subjuntivo" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },
    {
      id: "pat-futuro-subj", type: "pattern", target: "quando eu puder · se você quiser · assim que tiver",
      gloss: { es: "el futuro de subjuntivo", en: "the future subjunctive" },
      pattern: {
        rule: {
          es: "Tras se, quando, assim que, enquanto, como, quem, onde… hablando del futuro, el portugués usa el futuro de subjuntivo, donde el español usa presente: cuando puedas → quando você puder; si quieres → se você quiser. Se forma desde el pretérito «eles» sin -am: tiveram → tiver.",
          en: "After se, quando, assim que, enquanto, quem… referring to the future, Portuguese uses the future subjunctive: when you can → quando você puder; if you want → se você quiser. Form it from the 'eles' past minus -am: tiveram → tiver.",
        },
        table: [["puderam → puder", "quando você puder"], ["quiseram → quiser", "se você quiser"], ["foram → for", "quando eu for"], ["fizeram → fizer", "o que você fizer"]],
      },
      question: {
        prompt: { es: "«Si quieres, te ayudo»:", en: "'If you like, I'll help you':" },
        options: ["Se você quiser, eu te ajudo.", "Se você quer, eu te ajudo.", "Se você queira, eu te ajudo.", "Se você quisesse, eu te ajudo."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-futuro-subjuntivo"], tags: ["grammar", "subjunctive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-negociacao", type: "listening", target: "Podemos aceitar o desconto de dez por cento, desde que o pagamento seja feito à vista e a entrega fique para o mês que vem.",
      gloss: { es: "Podemos aceptar el descuento del diez por ciento, siempre que el pago sea al contado y la entrega quede para el mes que viene.", en: "We can accept the ten per cent discount, provided payment is made upfront and delivery is pushed to next month." },
      question: {
        prompt: { es: "¿Qué condición ponen para el descuento?", en: "What condition is set for the discount?" },
        options: [
          { es: "Pago al contado y entrega el mes siguiente", en: "Upfront payment and delivery next month" },
          { es: "Pago en cuotas", en: "Payment in instalments" },
          { es: "Entrega inmediata", en: "Immediate delivery" },
          { es: "Un contrato de dos años", en: "A two-year contract" },
        ],
        answer: 0,
      },
      note: { es: "desde que + subjuntivo = siempre que; à vista = al contado.", en: "desde que + subjunctive = provided that; à vista = paid upfront." },
      exercises: ["question", "listen"], tags: ["listening", "negotiation"],
    },
    {
      id: "dlg-aumento", type: "dialogue", target: "Vou ver o que dá para fazer.",
      gloss: { es: "Voy a ver qué se puede hacer.", en: "I'll see what I can do." },
      turns: [
        { who: "A", target: "Queria conversar sobre um aumento. Já faz dois anos que meu salário não muda.", gloss: { es: "Quería hablar de un aumento. Hace dos años que mi sueldo no cambia.", en: "I wanted to talk about a pay rise. My salary hasn't changed for two years." } },
        { who: "B", target: "Entendo. O orçamento está apertado, mas vou ver o que dá para fazer.", gloss: { es: "Entiendo. El presupuesto está ajustado, pero voy a ver qué se puede hacer.", en: "I understand. The budget is tight, but I'll see what I can do." } },
        { who: "A", target: "Obrigada. Se precisar, posso mandar um resumo dos meus resultados.", gloss: { es: "Gracias. Si hace falta, puedo mandar un resumen de mis resultados.", en: "Thanks. If needed, I can send a summary of my results." } },
      ],
      question: {
        prompt: { es: "¿Qué responde B?", en: "How does B respond?" },
        options: [
          { es: "Que lo va a estudiar, aunque hay poco presupuesto", en: "They'll look into it, though money is tight" },
          { es: "Que no, de ninguna manera", en: "No way" },
          { es: "Que sí, desde el mes que viene", en: "Yes, from next month" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work", "negotiation"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-firma", type: "bridge", onlyFor: "es", target: "a assinatura",
      gloss: { es: "la firma (en un documento) / la suscripción", en: "the signature / subscription" },
      distractors: ["a firma", "a assinação", "a firmatura"],
      note: { es: "Ojo: «a firma» en portugués es sobre todo la empresa (solo en «reconhecer firma» es la firma); firmar es «assinar» y la firma, «a assinatura»." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "contracts"],
    },
    {
      id: "br-en-estagio", type: "bridge", onlyFor: "en", target: "Estou fazendo estágio numa ONG.",
      gloss: { es: "Estoy haciendo una pasantía en una ONG.", en: "I'm doing an internship at an NGO." },
      distractors: ["Estou num estágio numa ONG de palco.", "Faço palco numa ONG.", "Estou fazendo interno numa ONG."],
      note: { en: "False friend: estágio = internship or work placement; a stage (theatre) is 'o palco', a stage (phase) 'a fase / a etapa'." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
