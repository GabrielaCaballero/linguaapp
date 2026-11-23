import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u33",
  lang: "it",
  index: 33,
  cefr: "C2",
  title: { target: "Il burocratese", es: "El lenguaje burocrático", en: "Bureaucratic Italian" },
  canDo: [
    { es: "Entiendo avisos oficiales, formularios y cartas de la administración.", en: "I can understand official notices, forms and letters from the authorities." },
    { es: "Puedo redactar una solicitud formal con las fórmulas habituales.", en: "I can write a formal application with the usual formulas." },
    { es: "Sé traducir el burocratese a un italiano llano.", en: "I can turn bureaucratic Italian into plain Italian." },
  ],
  icon: "🏛️",
  items: build("it", 33, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "sottoscritto", type: "word", pos: "noun", target: "il sottoscritto", gender: "m", plural: "i sottoscritti",
      gloss: { es: "el abajo firmante, el suscrito", en: "the undersigned" },
      distractors: ["il soprascritto", "il sottinteso", "il sottoscrittore"],
      note: { es: "En los formularios: Il/La sottoscritto/a… dichiara.", en: "On forms: Il/La sottoscritto/a… dichiara." },
      tags: ["bureaucracy", "formal"],
    },
    {
      id: "richiedente", type: "word", pos: "noun", target: "il richiedente", gender: "m", plural: "i richiedenti",
      gloss: { es: "el solicitante", en: "the applicant" },
      distractors: ["il richiesto", "il ricevente", "il ricorrente"],
      note: { es: "Sirve para los dos géneros: il/la richiedente.", en: "It works for both genders: il/la richiedente." },
      grammar: ["it-g-participio-presente"], tags: ["bureaucracy", "formal"],
    },
    {
      id: "avente-diritto", type: "word", pos: "noun", target: "l'avente diritto", gender: "m", plural: "gli aventi diritto",
      gloss: { es: "el derechohabiente, quien tiene derecho", en: "the person entitled, eligible person" },
      distractors: ["l'avendo diritto", "l'avuto diritto", "l'avente dritto"],
      grammar: ["it-g-participio-presente"], tags: ["bureaucracy", "formal"],
    },
    {
      id: "marca-da-bollo", type: "word", pos: "noun", target: "la marca da bollo", gender: "f", plural: "le marche da bollo",
      gloss: { es: "el timbre fiscal, la estampilla fiscal", en: "the revenue stamp" },
      distractors: ["la marca di bollo", "il bollo da marca", "la marca del bollo"],
      tags: ["bureaucracy"],
    },
    {
      id: "autocertificazione", type: "word", pos: "noun", target: "l'autocertificazione", gender: "f", plural: "le autocertificazioni",
      gloss: { es: "la declaración jurada firmada por uno mismo", en: "the self-certification (signed statement)" },
      distractors: ["l'autorizzazione", "l'autenticazione", "l'autocertificato"],
      tags: ["bureaucracy"],
    },
    {
      id: "proroga", type: "word", pos: "noun", target: "la proroga", gender: "f", plural: "le proroghe",
      gloss: { es: "la prórroga (de un plazo)", en: "the extension (of a deadline)" },
      distractors: ["la deroga", "la prova", "la prorogata"],
      note: { es: "Una sola r en medio, a diferencia del español.", en: "Only one r in the middle." },
      tags: ["bureaucracy"],
    },
    {
      id: "ottemperare", type: "word", pos: "verb", target: "ottemperare a",
      gloss: { es: "cumplir con (una norma, una orden)", en: "to comply with" },
      forms: { pp: "ottemperato" },
      distractors: ["temperare a", "ottenere a", "ostentare a"],
      tags: ["bureaucracy", "formal"],
    },
    {
      id: "ai-sensi-di", type: "phrase", pos: "phrase", target: "ai sensi di",
      gloss: { es: "según lo dispuesto en (una ley)", en: "pursuant to (a law)" },
      distractors: ["al senso di", "nei sensi di", "ai sensi a"],
      note: { es: "Con artículo se contrae: ai sensi della legge, ai sensi dell'articolo tre.", en: "It contracts with the article: ai sensi della legge, ai sensi dell'articolo tre." },
      tags: ["bureaucracy", "legal", "chunk"],
    },
    {
      id: "entro-e-non-oltre", type: "phrase", pos: "phrase", target: "entro e non oltre",
      gloss: { es: "a más tardar, sin prórroga posible", en: "no later than (strictly)" },
      distractors: ["entro e non dopo", "dentro e non oltre", "entro o non oltre"],
      tags: ["bureaucracy", "chunk"],
    },
    {
      id: "previa", type: "word", pos: "prep", target: "previa",
      gloss: { es: "previa (con la condición de antes)", en: "subject to, upon (prior)" },
      distractors: ["prevista", "preventiva", "privata"],
      note: { es: "Invariable delante del sustantivo: previa presentazione, previa richiesta.", en: "Invariable before the noun: previa presentazione, previa richiesta." },
      tags: ["bureaucracy", "formal"],
    },
    {
      id: "in-calce", type: "phrase", pos: "phrase", target: "in calce",
      gloss: { es: "al pie (de un documento)", en: "at the foot (of a document)" },
      distractors: ["in calcio", "in calza", "al calce"],
      note: { es: "Firma in calce = firma al pie de la página.", en: "Firma in calce = signature at the bottom of the page." },
      tags: ["bureaucracy", "chunk"],
    },
    {
      id: "decadere", type: "word", pos: "verb", target: "decadere",
      gloss: { es: "caducar, perder (un derecho)", en: "to lapse, to forfeit (a right)" },
      forms: { pp: "decaduto", aux: "essere" },
      distractors: ["decedere", "decorrere", "degradare"],
      tags: ["bureaucracy", "legal"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "sottoscritto-chiede", type: "sentence", register: "formal", target: "Il sottoscritto chiede il rilascio del certificato di residenza.",
      gloss: { es: "El abajo firmante solicita la expedición del certificado de residencia.", en: "The undersigned requests the issue of a certificate of residence." },
      accept: [{ text: "La sottoscritta chiede il rilascio del certificato di residenza." }],
      distractors: ["sottoscrittore", "rilasciato", "residente"],
      tags: ["bureaucracy", "formal"],
    },
    {
      id: "domanda-entro-giugno", type: "sentence", register: "formal", target: "La domanda va presentata entro e non oltre il trenta giugno.",
      gloss: { es: "La solicitud debe presentarse a más tardar el treinta de junio.", en: "The application must be submitted no later than the thirtieth of June." },
      errors: [{ text: "La domanda va presentato entro e non oltre il trenta giugno.", feedback: { es: "El participio concuerda con la domanda: va presentata.", en: "The participle agrees with la domanda: va presentata." }, ruleId: "it-g-passivo-venire" }],
      distractors: ["viene", "presentato", "dentro"],
      grammar: ["it-g-passivo-venire"], tags: ["bureaucracy", "deadlines"],
    },
    {
      id: "rimborso-previa", type: "sentence", register: "formal", target: "Il rimborso sarà erogato previa presentazione della ricevuta.",
      gloss: { es: "El reembolso se pagará previa presentación del recibo.", en: "The refund will be paid on presentation of the receipt." },
      distractors: ["erogata", "previo", "ricevute"],
      tags: ["bureaucracy", "formal"],
    },
    {
      id: "trascorsi-termini", type: "sentence", register: "formal", target: "Trascorsi i termini, si decade dal diritto al rimborso.",
      gloss: { es: "Una vez vencidos los plazos, se pierde el derecho al reembolso.", en: "Once the deadline has passed, the right to a refund lapses." },
      distractors: ["Trascorso", "decadi", "dei"],
      grammar: ["it-g-participio-assoluto"], tags: ["bureaucracy", "legal"],
    },
    {
      id: "documenti-attestanti", type: "sentence", register: "formal", target: "I documenti attestanti il reddito vanno allegati alla domanda.",
      gloss: { es: "Los documentos que acrediten los ingresos deben adjuntarse a la solicitud.", en: "Documents certifying income must be attached to the application." },
      accept: [{ text: "I documenti che attestano il reddito vanno allegati alla domanda." }],
      distractors: ["attestati", "allegate", "redditi"],
      annot: { attestanti: { es: "participio presente = che attestano", en: "present participle = che attestano" } },
      grammar: ["it-g-participio-presente"], tags: ["bureaucracy", "formal"],
    },
    {
      id: "affittasi-bilocale", type: "sentence", target: "Affittasi bilocale in centro, no agenzie.",
      gloss: { es: "Se alquila departamento (piso) de un dormitorio en el centro, abstenerse agencias.", en: "Two-room flat to let in the centre, no agencies." },
      accept: [{ text: "Si affitta bilocale in centro, no agenzie." }],
      distractors: ["Affittansi", "bilocali", "agenzia"],
      grammar: ["it-g-si-enclitico"], tags: ["bureaucracy", "ads"],
    },
    {
      id: "trattasi-errore", type: "sentence", register: "formal", target: "Trattasi di un errore materiale.",
      gloss: { es: "Se trata de un error de transcripción.", en: "This is a clerical error." },
      accept: [{ text: "Si tratta di un errore materiale." }],
      distractors: ["Tratta", "errori", "materia"],
      grammar: ["it-g-si-enclitico"], tags: ["bureaucracy", "formal"],
    },
    {
      id: "si-allega-copia", type: "sentence", register: "formal", target: "Si allega copia del documento d'identità.",
      gloss: { es: "Se adjunta copia del documento de identidad.", en: "A copy of the identity document is attached." },
      accept: [{ text: "Allegasi copia del documento d'identità." }],
      distractors: ["allegano", "copie", "identico"],
      grammar: ["it-g-si-enclitico"], tags: ["bureaucracy", "formal"],
    },
    {
      id: "in-parole-povere", type: "sentence", target: "In parole povere: se non paghi entro marzo, perdi lo sconto.",
      gloss: { es: "En pocas palabras: si no pagas antes de marzo, pierdes el descuento.", en: "In plain words: if you don't pay by March, you lose the discount." },
      distractors: ["poveri", "pagato", "sconti"],
      tags: ["bureaucracy", "plain-language"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-participio-presente", type: "pattern", target: "il richiedente · gli aventi diritto · i documenti attestanti il reddito",
      gloss: { es: "el participio presente en el lenguaje burocrático", en: "the present participle in bureaucratic Italian" },
      pattern: {
        rule: {
          es: "-ante / -ente forman sustantivos (il richiedente) y, en textos oficiales, equivalen a «che + verbo» y pueden llevar complemento: documenti attestanti il reddito = documenti che attestano il reddito.",
          en: "-ante / -ente form nouns (il richiedente) and, in official texts, stand for 'che + verb' and can take an object: documenti attestanti il reddito = documenti che attestano il reddito.",
        },
        table: [["richiedere", "il richiedente"], ["avere", "gli aventi diritto"], ["frequentare", "gli studenti frequentanti"]],
      },
      question: {
        prompt: { es: "«Gli studenti frequentanti» son…", en: "'Gli studenti frequentanti' are…" },
        options: [
          { es: "los estudiantes que asisten a clase", en: "students who attend classes" },
          { es: "los estudiantes que vienen a menudo de visita", en: "students who visit often" },
          { es: "los estudiantes que ya se graduaron", en: "students who have already graduated" },
          { es: "los estudiantes que repiten el curso", en: "students repeating the year" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-participio-presente"], tags: ["grammar", "bureaucracy"],
    },
    {
      id: "pat-si-enclitico", type: "pattern", target: "vendesi · affittasi · cercasi · trattasi",
      gloss: { es: "el «si» pegado al verbo en carteles y documentos", en: "'si' attached to the verb on signs and documents" },
      pattern: {
        rule: {
          es: "En anuncios y documentos el si va al final del verbo y forma una sola palabra: vendesi = si vende. Al hablar se usa la forma normal.",
          en: "In ads and documents si goes at the end of the verb as one word: vendesi = si vende. Speech uses the normal form.",
        },
        table: [["vendesi", "si vende"], ["cercasi", "si cerca"], ["trattasi di", "si tratta di"]],
      },
      question: {
        prompt: { es: "Un cartel dice «Cercasi commessa». Significa…", en: "A sign says 'Cercasi commessa'. It means…" },
        options: [
          { es: "Se busca vendedora.", en: "Shop assistant wanted." },
          { es: "Una vendedora busca trabajo.", en: "A shop assistant is looking for work." },
          { es: "Se vende una tienda.", en: "Shop for sale." },
          { es: "Ya encontramos vendedora.", en: "Position filled." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-si-enclitico"], tags: ["grammar", "bureaucracy"],
    },
    {
      id: "pat-burocratese-semplice", type: "pattern", target: "effettuare un versamento → pagare · recarsi presso → andare a",
      gloss: { es: "del burocratese al italiano llano", en: "from bureaucratese to plain Italian" },
      pattern: {
        rule: {
          es: "El burocratese alarga lo simple: verbos de apoyo, sustantivos y fórmulas fijas. Para entenderlo, busca el verbo sencillo que hay detrás.",
          en: "Bureaucratese stretches simple things: support verbs, nouns and set formulas. To understand it, look for the plain verb underneath.",
        },
        table: [["effettuare un versamento", "pagare"], ["recarsi presso", "andare a"], ["in data odierna", "oggi"], ["è fatto divieto di", "è vietato"]],
      },
      question: {
        prompt: { es: "«Si invitano i signori utenti a recarsi presso lo sportello» en italiano llano:", en: "'Si invitano i signori utenti a recarsi presso lo sportello' in plain Italian:" },
        options: ["Andate allo sportello, per favore.", "Lo sportello è chiuso.", "Telefonate allo sportello.", "Lo sportello vi chiamerà."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-stile-nominale"], tags: ["grammar", "plain-language"],
    },
    {
      id: "tab-participio-presente", type: "paradigm", target: "participio presente",
      gloss: { es: "participio presente (-ante, -ente)", en: "present participle (-ante, -ente)" },
      grammar: ["it-g-participio-presente"],
      paradigm: {
        caption: { es: "Escribe el participio presente", en: "Write the present participle" },
        cells: [
          { label: "richiedere", answer: "richiedente", ruleId: "it-g-participio-presente" },
          { label: "avere", answer: "avente", ruleId: "it-g-participio-presente" },
          { label: "frequentare", answer: "frequentante", ruleId: "it-g-participio-presente" },
          { label: "risiedere", answer: "residente", ruleId: "it-g-participio-presente" },
          { label: "partecipare", answer: "partecipante", ruleId: "it-g-participio-presente" },
          { label: "ubbidire", answer: "ubbidiente", ruleId: "it-g-participio-presente" },
        ],
      },
      tags: ["grammar", "bureaucracy", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-avviso-istanze", type: "listening",
      target: "Si comunica che, a decorrere dal primo marzo, le istanze di rimborso dovranno essere presentate esclusivamente online. Le domande pervenute in forma cartacea dopo tale data non verranno prese in considerazione.",
      gloss: {
        es: "Se comunica que, a partir del primero de marzo, las solicitudes de reembolso deberán presentarse exclusivamente en línea. Las solicitudes recibidas en papel después de esa fecha no se tendrán en cuenta.",
        en: "Please note that from the first of March, refund applications must be submitted online only. Paper applications received after that date will not be considered.",
      },
      question: {
        prompt: { es: "¿Qué pasará con las solicitudes en papel después del primero de marzo?", en: "What will happen to paper applications after the first of March?" },
        options: [
          { es: "No se tendrán en cuenta.", en: "They won't be considered." },
          { es: "Se tramitarán más despacio.", en: "They'll be processed more slowly." },
          { es: "Necesitarán un timbre fiscal.", en: "They'll need a revenue stamp." },
          { es: "Solo se aceptarán en ventanilla.", en: "They'll be accepted only at the counter." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "bureaucracy"],
    },
    {
      id: "dlg-lettera-comune", type: "dialogue", register: "informal", target: "Cioè: hai trenta giorni per pagare.",
      gloss: { es: "O sea: tienes treinta días para pagar.", en: "In other words: you've got thirty days to pay." },
      turns: [
        { who: "A", target: "Mi è arrivata questa lettera del Comune e non ci capisco niente.", gloss: { es: "Me llegó esta carta de la municipalidad (el ayuntamiento) y no entiendo nada.", en: "I got this letter from the council and I can't make head or tail of it." } },
        { who: "B", target: "Fammi vedere… «Si invita la S.V. a regolarizzare la propria posizione entro e non oltre trenta giorni.»", spoken: "Fammi vedere… Si invita la Signoria Vostra a regolarizzare la propria posizione entro e non oltre trenta giorni.", gloss: { es: "A ver… «Se le invita a regularizar su situación en un plazo máximo de treinta días».", en: "Let me see… 'You are requested to regularise your position within thirty days at the latest.'" } },
        { who: "A", target: "Cioè?", gloss: { es: "¿O sea?", en: "Meaning?" } },
        { who: "B", target: "Cioè: hai trenta giorni per pagare. Altrimenti arriva la multa.", gloss: { es: "O sea: tienes treinta días para pagar. Si no, te llega la multa.", en: "Meaning: you've got thirty days to pay. Otherwise you get a fine." } },
      ],
      question: {
        prompt: { es: "Según B, ¿qué dice la carta?", en: "According to B, what does the letter say?" },
        options: [
          { es: "Que A tiene treinta días para pagar.", en: "That A has thirty days to pay." },
          { es: "Que A debe ir a la municipalidad en treinta días.", en: "That A must go to the council within thirty days." },
          { es: "Que A ya tiene una multa de treinta euros.", en: "That A already has a thirty-euro fine." },
          { es: "Que A tiene que cambiar de domicilio.", en: "That A has to change address." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-stile-nominale"], tags: ["dialogue", "bureaucracy"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-pratica", type: "bridge", onlyFor: "es", target: "la pratica",
      gloss: { es: "el trámite, el expediente", en: "the file, the case (paperwork)" },
      question: {
        prompt: { es: "En una oficina: «La sua pratica è in lavorazione» significa…", en: "At an office: 'La sua pratica è in lavorazione' means…" },
        options: [
          { es: "Su trámite se está procesando.", en: "Your file is being processed." },
          { es: "Sus prácticas profesionales están en curso.", en: "Your internship is under way." },
          { es: "Su entrenamiento está en marcha.", en: "Your training is under way." },
          { es: "Su consulta médica está en curso.", en: "Your medical appointment is in progress." },
        ],
        answer: 0,
      },
      note: { es: "En una oficina, la pratica es el expediente; las prácticas profesionales son «il tirocinio»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "bureaucracy"],
    },
    {
      id: "br-cancelleria", type: "bridge", onlyFor: "es", target: "la cancelleria",
      gloss: { es: "los artículos de papelería; la secretaría (de un tribunal)", en: "stationery; the registry (of a court)" },
      question: {
        prompt: { es: "«Ho finito la cancelleria: mi servono penne e buste» significa…", en: "'Ho finito la cancelleria: mi servono penne e buste' means…" },
        options: [
          { es: "Se me acabaron los artículos de papelería: necesito bolígrafos y sobres.", en: "I've run out of stationery: I need pens and envelopes." },
          { es: "Terminé en la cancillería: necesito bolígrafos y sobres.", en: "I'm done at the chancellery: I need pens and envelopes." },
          { es: "Cerré la oficina: necesito bolígrafos y sobres.", en: "I've closed the office: I need pens and envelopes." },
          { es: "Terminé la carrera de diplomacia.", en: "I've finished my diplomacy degree." },
        ],
        answer: 0,
      },
      note: { es: "La cancillería (ministerio) es «il ministero degli Esteri»; en Suiza, la Cancelleria dello Stato es un órgano del cantón." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "bureaucracy"],
    },
  ]),
};
