import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u33",
  lang: "fr",
  index: 33,
  cefr: "C2",
  title: { target: "Droit et administration", es: "Derecho y administración", en: "Law and administration" },
  canDo: [
    { es: "Puedo entender cartas administrativas, contratos y resoluciones judiciales.", en: "I can understand official letters, contracts and court decisions." },
    { es: "Sé redactar una carta formal con las fórmulas de rigor.", en: "I can write a formal letter with the standard set phrases." },
    { es: "Sé usar construcciones impersonales cultas: il incombe à, il appartient à, il importe que.", en: "I can use formal impersonal constructions: il incombe à, il appartient à, il importe que." },
  ],
  icon: "⚖️",
  items: build("fr", 33, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "prejudice", type: "word", pos: "noun", target: "le préjudice", gender: "m", plural: "les préjudices", gloss: { es: "el perjuicio, el daño (jurídico)", en: "the harm / damage (legal)" }, distractors: ["le préjugé", "le précipice", "la préjudice"], note: { es: "un préjugé = un prejuicio.", en: "un préjugé = a prejudice." }, tags: ["law"] },
    { id: "proces", type: "word", pos: "noun", target: "le procès", gender: "m", plural: "les procès", gloss: { es: "el juicio (proceso judicial)", en: "the trial / lawsuit" }, distractors: ["le processus", "le procédé", "le progrès"], note: { es: "Un proceso (serie de etapas) es «un processus».", en: "A process (series of steps) is un processus." }, tags: ["law"] },
    { id: "plaignant", type: "word", pos: "noun", target: "le plaignant", gender: "m", plural: "les plaignants", gloss: { es: "el demandante, el denunciante", en: "the plaintiff / complainant" }, forms: { f: "la plaignante" }, accept: [{ text: "la plaignante" }], distractors: ["le plaintif", "le plaisant", "le plongeant"], tags: ["law"] },
    { id: "mise-en-demeure", type: "word", pos: "noun", target: "la mise en demeure", gender: "f", plural: "les mises en demeure", gloss: { es: "el requerimiento formal (de pago o cumplimiento)", en: "the formal notice / demand" }, distractors: ["la mise en demande", "la mise à demeure", "la demeure de mise"], tags: ["law", "letters"] },
    { id: "ressortissant", type: "word", pos: "noun", target: "le ressortissant", gender: "m", plural: "les ressortissants", gloss: { es: "el nacional (de un país, en el extranjero)", en: "the national (of a country)" }, distractors: ["le ressortant", "le résident", "le ressort"], note: { es: "les ressortissants européens = los nacionales de países europeos.", en: "les ressortissants européens = European nationals." }, tags: ["law", "administration"] },
    { id: "statuer", type: "word", pos: "verb", target: "statuer", gloss: { es: "resolver, pronunciarse (un tribunal)", en: "to rule / give a ruling" }, forms: { pp: "statué" }, distractors: ["statufier", "stationner", "situer"], note: { es: "statuer sur une demande = pronunciarse sobre una solicitud.", en: "statuer sur une demande = to rule on an application." }, tags: ["law"] },
    { id: "debouter", type: "word", pos: "verb", target: "débouter", gloss: { es: "desestimar (una demanda)", en: "to dismiss (a claim)" }, forms: { pp: "débouté" }, distractors: ["débouler", "débourser", "déboucher"], tags: ["law"] },
    { id: "nonobstant", type: "word", pos: "prep", target: "nonobstant", gloss: { es: "pese a, sin perjuicio de (jurídico)", en: "notwithstanding" }, distractors: ["non obstant", "obstiné", "nonchalant"], tags: ["law", "formal"] },
    { id: "ayant-droit", type: "word", pos: "noun", target: "l'ayant droit", gender: "m", plural: "les ayants droit", gloss: { es: "el derechohabiente, el beneficiario", en: "the beneficiary / rightful claimant" }, distractors: ["l'avant-droit", "l'ayant-dû", "l'ayant droits"], note: { es: "En plural solo cambia «ayant»: les ayants droit.", en: "In the plural only ayant changes: les ayants droit." }, tags: ["law"] },
    { id: "le-cas-echeant", type: "phrase", pos: "phrase", target: "le cas échéant", gloss: { es: "llegado el caso, si procede", en: "if need be / where applicable" }, distractors: ["le cas échu", "en cas échéant", "le cas échéance"], grammar: ["fr-g-formules-administratives"], tags: ["law", "administration", "formal"] },
    { id: "en-vertu-de", type: "phrase", pos: "phrase", target: "en vertu de", gloss: { es: "en virtud de", en: "by virtue of / under" }, distractors: ["en vertus de", "par vertu de", "en virtu de"], grammar: ["fr-g-formules-administratives"], tags: ["law", "formal"] },
    { id: "delais-impartis", type: "phrase", pos: "phrase", target: "dans les délais impartis", gloss: { es: "dentro del plazo establecido", en: "within the time allowed" }, distractors: ["dans les délais impartials", "dans les délais départis", "en les délais impartis"], tags: ["administration", "formal"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "veuillez-trouver-ci-joint", type: "sentence", register: "formal", target: "Veuillez trouver ci-joint les documents demandés.",
      gloss: { es: "Adjunto encontrará los documentos solicitados.", en: "Please find attached the requested documents." },
      accept: [{ text: "Vous trouverez ci-joint les documents demandés." }, { text: "Veuillez trouver ci-joints les documents demandés." }],
      distractors: ["Voulez", "demandées", "joints"],
      grammar: ["fr-g-formules-administratives"], tags: ["administration", "letters"],
    },
    {
      id: "il-incombe-au-locataire", type: "sentence", register: "formal", target: "Il incombe au locataire d'entretenir le logement.",
      gloss: { es: "Corresponde al inquilino mantener la vivienda.", en: "It is the tenant's responsibility to maintain the property." },
      errors: [{ text: "Il incombe le locataire d'entretenir le logement.", feedback: { es: "«incomber» pide «à»: il incombe au locataire.", en: "incomber takes à: il incombe au locataire." }, ruleId: "fr-g-impersonnel-soutenu" }],
      distractors: ["incombre", "du", "loueur"],
      grammar: ["fr-g-impersonnel-soutenu"], tags: ["law", "housing"],
    },
    {
      id: "il-importe-que", type: "sentence", register: "formal", target: "Il importe que chacun respecte le règlement.",
      gloss: { es: "Es importante que cada uno respete el reglamento.", en: "It is important that everyone abide by the rules." },
      distractors: ["respectent", "chaque", "règle"],
      grammar: ["fr-g-impersonnel-soutenu"], tags: ["administration", "subjunctive"],
    },
    {
      id: "tribunal-a-deboute", type: "sentence", target: "Le tribunal a débouté le plaignant de sa demande.",
      gloss: { es: "El tribunal desestimó la demanda del denunciante.", en: "The court dismissed the plaintiff's claim." },
      distractors: ["débouché", "la", "demandeur"],
      tags: ["law"],
    },
    {
      id: "le-cas-echeant-convoque", type: "sentence", register: "formal", target: "Le cas échéant, vous serez convoqué par courrier.",
      gloss: { es: "Llegado el caso, se le citará por correo.", en: "If necessary, you will be summoned by letter." },
      accept: [{ text: "Le cas échéant, vous serez convoquée par courrier." }],
      distractors: ["échu", "serai", "poste"],
      grammar: ["fr-g-formules-administratives"], tags: ["administration", "letters"],
    },
    {
      id: "je-vous-prie-dagreer", type: "sentence", register: "formal", target: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
      gloss: { es: "La saluda atentamente.", en: "Yours faithfully." },
      accept: [{ text: "Veuillez agréer, Madame, l'expression de mes salutations distinguées." }],
      distractors: ["agréger", "salutation", "distinguée"],
      note: { es: "Cierre estándar de una carta formal; «Monsieur» si es hombre.", en: "The standard formal sign-off; Monsieur for a man." },
      grammar: ["fr-g-formules-administratives"], tags: ["administration", "letters"],
    },
    {
      id: "en-vertu-de-larticle", type: "sentence", register: "formal", target: "En vertu de l'article trois, le contrat peut être résilié.",
      gloss: { es: "En virtud del artículo tres, el contrato puede rescindirse.", en: "Under article three, the contract may be terminated." },
      distractors: ["vertus", "résolu", "résilier"],
      grammar: ["fr-g-formules-administratives"], tags: ["law", "contracts"],
    },
    {
      id: "il-appartient-au-juge", type: "sentence", register: "formal", target: "Il appartient au juge de statuer sur cette demande.",
      gloss: { es: "Corresponde al juez pronunciarse sobre esta solicitud.", en: "It is for the judge to rule on this application." },
      distractors: ["appartenait", "du", "statue"],
      grammar: ["fr-g-impersonnel-soutenu"], tags: ["law"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-formules-administratives", type: "pattern", target: "Veuillez trouver ci-joint… · Le cas échéant… · Je vous prie d'agréer…",
      gloss: { es: "fórmulas de la carta administrativa", en: "set phrases of official letters" },
      pattern: {
        rule: {
          es: "La carta administrativa tiene fórmulas fijas: Veuillez trouver ci-joint (adjunto), le cas échéant (si procede), en vertu de (en virtud de), Je vous prie d'agréer… (despedida). «ci-joint» es invariable al inicio de la frase o delante de un sustantivo sin artículo.",
          en: "Official letters use fixed formulas: Veuillez trouver ci-joint (please find attached), le cas échéant (where applicable), en vertu de (under), Je vous prie d'agréer… (sign-off). ci-joint doesn't agree at the start of a sentence or before a noun without an article.",
        },
        table: [["adjunto", "Veuillez trouver ci-joint…"], ["si procede", "le cas échéant"], ["según la ley", "en vertu de la loi"], ["despedida", "Je vous prie d'agréer…"]],
      },
      question: {
        prompt: { es: "Completa: «___ la copie de mon passeport.»", en: "Complete: '___ la copie de mon passeport.'" },
        options: ["Ci-joint", "Ci-jointe", "Ci-joints", "Joint-ci"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-formules-administratives"], tags: ["grammar", "letters"],
    },
    {
      id: "pat-impersonnel-soutenu", type: "pattern", target: "il incombe à… de · il appartient à… de · il convient de · il importe que",
      gloss: { es: "construcciones impersonales cultas", en: "formal impersonal constructions" },
      pattern: {
        rule: {
          es: "il incombe à / il appartient à + persona + de + infinitivo = corresponde a alguien hacer algo. il convient de + infinitivo = conviene. il importe que + subjuntivo = es importante que.",
          en: "il incombe à / il appartient à + person + de + infinitive = it's someone's duty to do something. il convient de + infinitive = it is advisable to. il importe que + subjunctive = it is important that.",
        },
        table: [["il incombe à qqn de", "obligation"], ["il appartient à qqn de", "compétence"], ["il convient de", "recommandation"], ["il importe que + subj.", "importance"]],
      },
      question: {
        prompt: { es: "Completa: «Il ___ à la direction de prendre une décision.»", en: "Complete: 'Il ___ à la direction de prendre une décision.'" },
        options: ["incombe", "faut", "doit", "importe que"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-impersonnel-soutenu"], tags: ["grammar", "formal"],
    },
    {
      id: "tab-equivalents-admin", type: "paradigm", target: "courant → administratif",
      gloss: { es: "del francés corriente al administrativo", en: "from everyday to official French" },
      grammar: ["fr-g-formules-administratives"],
      paradigm: {
        caption: { es: "Escribe el equivalente administrativo", en: "Write the official equivalent" },
        cells: [
          { label: "si besoin", answer: "le cas échéant", ruleId: "fr-g-formules-administratives" },
          { label: "malgré", answer: "nonobstant", ruleId: "fr-g-formules-administratives" },
          { label: "selon (la loi)", answer: "en vertu de", ruleId: "fr-g-formules-administratives" },
          { label: "il faut", answer: "il convient de", accept: ["il y a lieu de"], ruleId: "fr-g-impersonnel-soutenu" },
          { label: "avec ce courrier", answer: "ci-joint", ruleId: "fr-g-formules-administratives" },
        ],
      },
      tags: ["grammar", "formal", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-prefecture", type: "listening", register: "formal",
      target: "Bonjour, ici le service des titres de séjour de la préfecture. Votre dossier est incomplet : il manque un justificatif de domicile de moins de trois mois. Nous vous prions de nous le faire parvenir dans les délais impartis, faute de quoi votre demande sera classée sans suite.",
      gloss: {
        es: "Buenos días, le habla el servicio de permisos de residencia de la prefectura. Su expediente está incompleto: falta un comprobante de domicilio de menos de tres meses. Le rogamos que nos lo haga llegar dentro del plazo establecido; de lo contrario, su solicitud será archivada.",
        en: "Hello, this is the residence permits office at the prefecture. Your file is incomplete: a proof of address less than three months old is missing. Please send it to us within the time allowed, failing which your application will be closed without further action.",
      },
      question: {
        prompt: { es: "¿Qué pasa si no envía el documento a tiempo?", en: "What happens if the document isn't sent in time?" },
        options: [
          { es: "La solicitud se archivará sin respuesta.", en: "The application will be closed." },
          { es: "Tendrá que pagar una multa.", en: "They'll have to pay a fine." },
          { es: "La prefectura lo citará.", en: "The prefecture will summon them." },
          { es: "Nada: el plazo es flexible.", en: "Nothing: the deadline is flexible." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "administration"],
    },
    {
      id: "dlg-avocate", type: "dialogue", register: "formal", target: "Vous avez subi un préjudice.",
      gloss: { es: "Usted sufrió un perjuicio.", en: "You have suffered harm." },
      turns: [
        { who: "A", target: "Mon propriétaire refuse de me rendre ma caution depuis six mois.", gloss: { es: "Mi casero se niega a devolverme el depósito desde hace seis meses.", en: "My landlord has refused to return my deposit for six months." } },
        { who: "B", target: "Vous avez donc subi un préjudice. Lui avez-vous adressé une mise en demeure ?", gloss: { es: "Entonces usted sufrió un perjuicio. ¿Le envió un requerimiento formal?", en: "So you have suffered harm. Have you sent him a formal notice?" } },
        { who: "A", target: "Non, seulement des courriels.", gloss: { es: "No, solo correos electrónicos.", en: "No, only emails." } },
        { who: "B", target: "Commencez par une lettre recommandée. Le cas échéant, nous saisirons le tribunal.", gloss: { es: "Empiece por una carta certificada. Si hace falta, recurriremos al tribunal.", en: "Start with a recorded-delivery letter. If need be, we'll take it to court." } },
      ],
      question: {
        prompt: { es: "¿Qué aconseja la abogada primero?", en: "What does the lawyer advise first?" },
        options: [
          { es: "Enviar una carta certificada.", en: "Sending a recorded-delivery letter." },
          { es: "Ir directamente al tribunal.", en: "Going straight to court." },
          { es: "Escribir más correos.", en: "Writing more emails." },
          { es: "Olvidar el depósito.", en: "Forgetting about the deposit." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-formules-administratives"], tags: ["dialogue", "law", "housing"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-demande", type: "bridge", onlyFor: "es", target: "la demande",
      gloss: { es: "la solicitud, el pedido (no una demanda judicial)", en: "the request / application" },
      question: {
        prompt: { es: "«J'ai déposé une demande de visa» significa…", en: "'J'ai déposé une demande de visa' means…" },
        options: [
          { es: "Presenté una solicitud de visa.", en: "I submitted a visa application." },
          { es: "Puse una demanda por la visa.", en: "I filed a lawsuit over the visa." },
          { es: "Me negaron la visa.", en: "I was refused the visa." },
        ],
        answer: 0,
      },
      note: { es: "Una demanda judicial es «une action en justice» o «une plainte»; demander = pedir." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "law"],
    },
  ]),
};
