import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u32",
  lang: "pt",
  index: 32,
  cefr: "C2",
  title: { target: "Linguagem jurídica e administrativa", es: "Lenguaje jurídico y administrativo", en: "Legal and administrative language" },
  canDo: [
    { es: "Entiendo contratos, leyes, avisos oficiales y trámites de cartório.", en: "I can understand contracts, laws, official notices and notary-office procedures." },
    { es: "Reconozco las fórmulas normativas (fica vedado, sob pena de, nos termos de) y el futuro de subjuntivo de las leyes.", en: "I can recognise legal formulas (fica vedado, sob pena de, nos termos de) and the future subjunctive of statutes." },
  ],
  icon: "⚖️",
  items: build("pt", 32, "C2", [
    { id: "requerente", type: "word", pos: "noun", target: "o requerente", gender: "m", plural: "os requerentes", gloss: { es: "el solicitante", en: "the applicant" }, accept: [{ text: "a requerente" }], distractors: ["o requerido", "o requerimento", "o querente"], tags: ["legal"] },
    { id: "procuracao", type: "word", pos: "noun", target: "a procuração", gender: "f", plural: "as procurações", gloss: { es: "el poder (notarial)", en: "the power of attorney" }, distractors: ["a procura", "o procurador", "a precaução"], tags: ["legal"] },
    { id: "vigencia", type: "word", pos: "noun", target: "a vigência", gender: "f", plural: "as vigências", gloss: { es: "la vigencia", en: "the period of validity / force" }, distractors: ["a vigilância", "o vigência", "a vigésima"], note: { es: "entrar em vigor = entrar en vigor.", en: "entrar em vigor = to come into force." }, tags: ["legal"] },
    { id: "revogar", type: "word", pos: "verb", target: "revogar", gloss: { es: "revocar, derogar", en: "to repeal / revoke" }, distractors: ["revocar", "renovar", "rogar"], tags: ["legal", "verbs"] },
    { id: "cartorio", type: "word", pos: "noun", target: "o cartório", gender: "m", plural: "os cartórios", gloss: { es: "la notaría, el registro", en: "the notary / registry office" }, distractors: ["o cartaz", "a cartória", "o escritório"], note: { es: "En Brasil, casi todo trámite pasa por el cartório: firmas, escrituras, actas de nacimiento.", en: "In Brazil, most paperwork goes through the cartório: signatures, deeds, birth certificates." }, tags: ["legal", "culture"] },
    { id: "reconhecer-firma", type: "phrase", pos: "phrase", target: "reconhecer firma", gloss: { es: "certificar una firma ante notario", en: "to have a signature notarised" }, distractors: ["reconhecer a empresa", "conhecer firma", "reconhecer assinado"], note: { es: "Aquí «firma» sí es la firma (uso jurídico); en el resto de los casos, la firma es «assinatura».", en: "Here 'firma' means signature (legal usage); elsewhere a signature is 'assinatura'." }, tags: ["legal"] },
    { id: "doravante", type: "word", pos: "adv", target: "doravante", gloss: { es: "en adelante, de aquí en más", en: "henceforth" }, distractors: ["adiante", "dora em diante", "daqui avante"], tags: ["legal", "formal"] },
    { id: "sob-pena-de", type: "phrase", pos: "phrase", target: "sob pena de", gloss: { es: "so pena de, bajo pena de", en: "on pain of / failing which" }, distractors: ["sob a pena que", "com pena de", "sobre pena de"], tags: ["legal"] },
    { id: "nos-termos-de", type: "phrase", pos: "phrase", target: "nos termos da lei", gloss: { es: "en los términos de la ley", en: "under the terms of the law" }, accept: [{ text: "na forma da lei" }], distractors: ["nos términos da lei", "aos termos da lei", "em termos da lei de"], tags: ["legal"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "fica-vedado", type: "sentence", target: "Fica vedada a entrada de pessoas estranhas ao serviço.",
      gloss: { es: "Queda prohibida la entrada de personas ajenas al servicio.", en: "No entry for unauthorised persons." },
      accept: [{ text: "É proibida a entrada de pessoas estranhas ao serviço." }],
      errors: [{ text: "Fica vedado a entrada de pessoas estranhas ao serviço.", feedback: { es: "El participio concuerda con el sujeto: a entrada → vedada.", en: "The participle agrees with the subject: a entrada → vedada." }, ruleId: "pt-g-linguagem-normativa" }],
      distractors: ["vedado", "estrangeiras", "do"],
      tags: ["legal"],
    },
    {
      id: "quem-descumprir", type: "sentence", target: "Quem descumprir esta norma estará sujeito a multa.",
      gloss: { es: "Quien incumpla esta norma estará sujeto a multa.", en: "Anyone who breaches this rule will be liable to a fine." },
      errors: [{ text: "Quem descumpra esta norma estará sujeito a multa.", feedback: { es: "En las leyes portuguesas se usa futuro de subjuntivo: quem descumprir.", en: "Portuguese statutes use the future subjunctive: quem descumprir." }, ruleId: "pt-g-futuro-subjuntivo" }],
      distractors: ["descumpra", "estaria", "sujeita"],
      grammar: ["pt-g-linguagem-normativa"], tags: ["legal", "subjunctive"],
    },
    {
      id: "salvo-disposicao", type: "sentence", target: "Salvo disposição em contrário, o contrato vigorará por doze meses.",
      gloss: { es: "Salvo disposición en contrario, el contrato tendrá vigencia por doce meses.", en: "Unless otherwise provided, the contract will remain in force for twelve months." },
      distractors: ["Salvado", "vigiará", "ao contrário"],
      tags: ["legal", "contracts"],
    },
    {
      id: "revogam-se", type: "sentence", target: "Revogam-se as disposições em contrário.",
      gloss: { es: "Quedan derogadas las disposiciones en contrario.", en: "All provisions to the contrary are hereby repealed." },
      distractors: ["Revoga-se", "disposição", "contrárias de"],
      grammar: ["pt-g-se-apassivador"], tags: ["legal"],
    },
    {
      id: "o-prazo-sera-contado", type: "sentence", target: "O prazo será contado a partir da data da notificação.",
      gloss: { es: "El plazo se computará a partir de la fecha de la notificación.", en: "The time limit will run from the date of notification." },
      distractors: ["contando", "desde da", "dado"],
      tags: ["legal"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-linguagem-normativa", type: "pattern", target: "Fica proibido… · Quem infringir… · sob pena de…",
      gloss: { es: "fórmulas del lenguaje normativo", en: "formulas of legal language" },
      pattern: {
        rule: {
          es: "Leyes y reglamentos usan: fica + participio concordado (fica proibida a venda), futuro de subjuntivo para el caso general (quem infringir, os que descumprirem), futuro simple para la consecuencia (será punido) y fórmulas fijas (sob pena de, nos termos de, salvo disposição em contrário).",
          en: "Laws and regulations use: fica + agreeing participle (fica proibida a venda), the future subjunctive for the general case (quem infringir, whoever breaches), the simple future for the consequence (será punido) and set phrases (sob pena de, nos termos de).",
        },
        table: [["proibição", "Fica vedada a venda."], ["caso geral", "Quem infringir…"], ["consequência", "…será multado."], ["revogação", "Revogam-se as disposições…"]],
      },
      question: {
        prompt: { es: "Completa: «Os que ___ o prazo perderão o direito.» (não cumprir)", en: "Complete: 'Os que ___ o prazo perderão o direito.' (not meet)" },
        options: ["não cumprirem", "não cumpram", "não cumprem", "não cumpriram"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-linguagem-normativa"], tags: ["grammar", "legal"],
    },
    {
      id: "pat-gerundio-juridico", type: "pattern", target: "considerando · tendo em vista · ressalvado",
      gloss: { es: "gerundios y participios absolutos en textos oficiales", en: "absolute gerunds and participles in official texts" },
      pattern: {
        rule: {
          es: "Los preámbulos encadenan fundamentos con gerundios (considerando que…, tendo em vista…) y los textos usan participios absolutos (ressalvado o direito de…, cumpridas as exigências…). Evita el «gerundismo» de los call centers: «vou estar enviando» por «vou enviar».",
          en: "Preambles chain grounds with gerunds (considerando que… = whereas…, tendo em vista…) and texts use absolute participles (ressalvado o direito de… = without prejudice to…; cumpridas as exigências… = once the requirements are met). Avoid call-centre 'gerundismo': 'vou estar enviando' for 'vou enviar'.",
        },
        table: [["gerúndio", "Considerando que…"], ["particípio", "Cumpridas as exigências, …"], ["ressalva", "Ressalvado o disposto no art. 5…"], ["evitar", "vou estar enviando → vou enviar"]],
      },
      question: {
        prompt: { es: "¿Cuál suena a «gerundismo» que conviene evitar?", en: "Which one is the 'gerundismo' to avoid?" },
        options: ["Vou estar transferindo sua ligação.", "Vou transferir sua ligação.", "Estou transferindo sua ligação agora.", "Transfiro sua ligação."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-gerundio-absoluto"], tags: ["grammar", "legal", "style"],
    },
    // ── Reading & dialogue ───────────────────────────────────
    {
      id: "lis-edital", type: "listening", target: "As inscrições deverão ser realizadas exclusivamente pela internet, sob pena de indeferimento. Não serão aceitos documentos enviados após o prazo.",
      gloss: { es: "Las inscripciones deberán realizarse exclusivamente por internet, bajo pena de rechazo. No se aceptarán documentos enviados fuera de plazo.", en: "Applications must be made online only, failing which they will be rejected. Documents sent after the deadline will not be accepted." },
      question: {
        prompt: { es: "¿Qué pasa si te inscribes en persona?", en: "What happens if you apply in person?" },
        options: [
          { es: "La inscripción se rechaza", en: "The application is rejected" },
          { es: "Tienes más plazo", en: "You get more time" },
          { es: "Pagas una multa", en: "You pay a fine" },
          { es: "Es válido igual", en: "It's still valid" },
        ],
        answer: 0,
      },
      note: { es: "indeferir = denegar; deferir = conceder (una solicitud).", en: "indeferir = to reject; deferir = to grant (an application)." },
      exercises: ["question", "listen"], tags: ["listening", "legal"],
    },
    {
      id: "dlg-cartorio", type: "dialogue", target: "Precisa reconhecer firma.",
      gloss: { es: "Hay que certificar la firma.", en: "The signature needs notarising." },
      turns: [
        { who: "A", target: "Bom dia. Vim entregar a procuração para a venda do apartamento.", gloss: { es: "Buenos días. Vine a entregar el poder para la venta del departamento.", en: "Good morning. I've come to hand in the power of attorney for the flat sale." } },
        { who: "B", target: "Está assinada, mas precisa reconhecer firma no cartório antes.", gloss: { es: "Está firmado, pero antes hay que certificar la firma en la notaría.", en: "It's signed, but the signature has to be notarised at the registry first." } },
        { who: "A", target: "De novo o cartório… Tudo bem, volto amanhã.", gloss: { es: "Otra vez la notaría… Está bien, vuelvo mañana.", en: "The registry again… All right, I'll come back tomorrow." } },
      ],
      question: {
        prompt: { es: "¿Qué le falta al documento?", en: "What's missing from the document?" },
        options: [
          { es: "La certificación notarial de la firma", en: "A notarised signature" },
          { es: "La firma", en: "The signature" },
          { es: "Una traducción", en: "A translation" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "legal"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-indeferido", type: "bridge", onlyFor: "es", target: "O pedido foi indeferido.",
      gloss: { es: "La solicitud fue denegada.", en: "The application was rejected." },
      distractors: ["O pedido foi deferido.", "O pedido foi diferido.", "O pedido foi indiferente."],
      note: { es: "deferir = aprobar, conceder; indeferir = denegar. No tiene que ver con «diferir» (aplazar = adiar)." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "legal"],
    },
    {
      id: "br-en-procurar", type: "bridge", onlyFor: "en", target: "o procurador",
      gloss: { es: "el apoderado / el fiscal (procurador)", en: "the attorney / proxy" },
      distractors: ["o procurado", "o comprador", "o provedor"],
      note: { en: "False friend: procurar = to look for, not 'procure' (= obter, adquirir); a procurador acts for you under a procuração." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "legal"],
    },
  ]),
};
