import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u14",
  lang: "it",
  index: 14,
  cefr: "B1",
  title: { target: "Il lavoro", es: "El trabajo", en: "Work" },
  canDo: [
    { es: "Puedo hablar de mi trabajo, mis colegas y mis condiciones laborales.", en: "I can talk about my job, colleagues and working conditions." },
    { es: "Puedo responder preguntas sencillas en una entrevista de trabajo.", en: "I can answer simple questions in a job interview." },
    { es: "Sé usar el condicional y los pronombres combinados (te lo, glielo).", en: "I can use the conditional and combined pronouns (te lo, glielo)." },
  ],
  icon: "💼",
  items: build("it", 14, "B1", [
    // ── Work words ───────────────────────────────────────────
    {
      id: "lavoro", type: "word", pos: "noun", target: "il lavoro", gender: "m", plural: "i lavori",
      gloss: { es: "el trabajo", en: "the job / work" },
      distractors: ["la lavoro", "il lavaggio", "il ritorno"],
      tags: ["work"],
    },
    {
      id: "ufficio", type: "word", pos: "noun", target: "l'ufficio", gender: "m", plural: "gli uffici",
      gloss: { es: "la oficina", en: "the office" },
      distractors: ["l'officina", "l'edificio", "l'artificio"],
      note: { es: "Ojo: l'officina = el taller (mecánico).", en: "Careful: l'officina = workshop / garage." },
      tags: ["work"],
    },
    {
      id: "collega", type: "word", pos: "noun", target: "il collega", gender: "m", plural: "i colleghi",
      gloss: { es: "el/la colega (del trabajo)", en: "the colleague" },
      accept: [{ text: "la collega" }],
      distractors: ["il collegio", "il collegamento", "la colla"],
      note: { es: "-a también en masculino: il collega, la collega; plural i colleghi, le colleghe.", en: "Ends in -a for both: il collega, la collega; plural i colleghi, le colleghe." },
      tags: ["work"],
    },
    {
      id: "capo", type: "word", pos: "noun", target: "il capo", gender: "m", plural: "i capi",
      gloss: { es: "el jefe / la jefa", en: "the boss" },
      distractors: ["la capo", "il campo", "il capitale"],
      tags: ["work"],
    },
    {
      id: "colloquio", type: "word", pos: "noun", target: "il colloquio", gender: "m", plural: "i colloqui",
      gloss: { es: "la entrevista (de trabajo)", en: "the (job) interview" },
      distractors: ["il collegio", "la colloquia", "il collo"],
      note: { es: "colloquio di lavoro = entrevista de trabajo; l'intervista es para la prensa.", en: "colloquio di lavoro = job interview; l'intervista is a press interview." },
      tags: ["work"],
    },
    {
      id: "stipendio", type: "word", pos: "noun", target: "lo stipendio", gender: "m", plural: "gli stipendi",
      gloss: { es: "el sueldo, el salario", en: "the salary / pay" },
      distractors: ["il stipendio", "lo spazio", "lo stadio"],
      note: { es: "lo / gli ante s + consonante: lo stipendio, gli stipendi.", en: "lo / gli before s + consonant: lo stipendio, gli stipendi." },
      tags: ["work"],
    },
    {
      id: "riunione", type: "word", pos: "noun", target: "la riunione", gender: "f", plural: "le riunioni",
      gloss: { es: "la reunión", en: "the meeting" },
      distractors: ["il riunione", "la ragione", "l'unione"],
      tags: ["work"],
    },
    {
      id: "scadenza", type: "word", pos: "noun", target: "la scadenza", gender: "f", plural: "le scadenze",
      gloss: { es: "el plazo, la fecha límite", en: "the deadline" },
      distractors: ["la cadenza", "la sequenza", "la scodella"],
      note: { es: "También la fecha de vencimiento de un producto.", en: "Also a product's expiry date." },
      tags: ["work"],
    },
    {
      id: "assumere", type: "word", pos: "verb", target: "assumere",
      gloss: { es: "contratar", en: "to hire / take on" },
      forms: { pp: "assunto", aux: "avere" },
      distractors: ["assistere", "consumare", "assaggiare"],
      note: { es: "Participio irregular: mi hanno assunto (me contrataron).", en: "Irregular participle: mi hanno assunto (they hired me)." },
      tags: ["work"],
    },
    {
      id: "licenziare", type: "word", pos: "verb", target: "licenziare",
      gloss: { es: "despedir (del trabajo)", en: "to fire / dismiss" },
      distractors: ["lanciare", "cominciare", "annunciare"],
      note: { es: "licenziarsi = renunciar (irse uno mismo).", en: "licenziarsi = to resign / quit." },
      tags: ["work"],
    },
    {
      id: "disponibile", type: "word", pos: "adj", target: "disponibile",
      gloss: { es: "disponible", en: "available" },
      distractors: ["dispiaciuto", "responsabile", "impossibile"],
      tags: ["work"],
    },
    {
      id: "tempo-pieno", type: "phrase", pos: "phrase", target: "a tempo pieno",
      gloss: { es: "a tiempo completo", en: "full-time" },
      distractors: ["a tempo libero", "in tempo pieno", "a tempo vuoto"],
      note: { es: "Media jornada = part-time o «a tempo parziale».", en: "Part-time = part-time or 'a tempo parziale'." },
      tags: ["work"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "vorrei-parlare-direttore", type: "sentence", target: "Vorrei parlare con il direttore.",
      gloss: { es: "Quisiera hablar con el director.", en: "I'd like to speak to the manager." },
      accept: [{ text: "Vorrei parlare col direttore." }, { text: "Vorrei parlare con la direttrice." }],
      distractors: ["Voglio", "al", "parlo"],
      tags: ["work", "conditional", "polite"],
    },
    {
      id: "potrebbe-mandare", type: "sentence", register: "formal", target: "Mi potrebbe mandare il contratto?",
      gloss: { es: "¿Me podría mandar el contrato?", en: "Could you send me the contract?" },
      accept: [{ text: "Potrebbe mandarmi il contratto?" }],
      distractors: ["Potresti", "manda", "lo"],
      tags: ["work", "conditional", "polite"],
    },
    {
      id: "te-lo-mando", type: "sentence", register: "informal", target: "Te lo mando domani.",
      gloss: { es: "Te lo mando mañana.", en: "I'll send it to you tomorrow." },
      errors: [{ text: "Ti lo mando domani.", feedback: { es: "Ante lo/la/li/le/ne, ti → te: te lo.", en: "Before lo/la/li/le/ne, ti → te: te lo." } }],
      distractors: ["Ti", "la", "manda"],
      tags: ["pronouns"],
    },
    {
      id: "glielo-dico", type: "sentence", target: "Glielo dico io.",
      gloss: { es: "Se lo digo yo.", en: "I'll tell him / her." },
      errors: [
        { text: "Gli lo dico io.", feedback: { es: "gli + lo se escribe junto: glielo.", en: "gli + lo is written as one word: glielo." } },
        { text: "Le lo dico io.", feedback: { es: "Para «a ella» también: glielo.", en: "For 'to her' too: glielo." } },
      ],
      distractors: ["Gli", "Ce", "dice"],
      tags: ["pronouns"],
    },
    {
      id: "piacerebbe-estero", type: "sentence", target: "Mi piacerebbe lavorare all'estero.",
      gloss: { es: "Me gustaría trabajar en el extranjero.", en: "I'd like to work abroad." },
      errors: [{ text: "Mi piacerei lavorare all'estero.", feedback: { es: "Como «gustaría»: mi piacerebbe (3.ª persona).", en: "Third person, like 'it would please me': mi piacerebbe." } }],
      distractors: ["piacerei", "estera", "in"],
      tags: ["work", "conditional"],
    },
    {
      id: "al-posto-tuo", type: "sentence", register: "informal", target: "Al posto tuo accetterei.",
      gloss: { es: "En tu lugar, aceptaría.", en: "If I were you, I'd accept." },
      accept: [{ text: "Al tuo posto accetterei." }, { text: "Io al posto tuo accetterei." }],
      distractors: ["accetto", "accettassi", "del"],
      tags: ["advice", "conditional"],
    },
    {
      id: "lavoro-tempo-pieno", type: "sentence", target: "Lavoro a tempo pieno.",
      gloss: { es: "Trabajo a tiempo completo.", en: "I work full-time." },
      distractors: ["al", "pieni", "lavora"],
      tags: ["work"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-condizionale", type: "pattern", target: "parlerei · prenderei · verrei · vorrei",
      gloss: { es: "el condicional presente", en: "the present conditional" },
      pattern: {
        rule: {
          es: "Raíz del futuro + -ei, -esti, -ebbe, -emmo, -este, -ebbero. Para cortesía, deseos y consejos. Ojo: verremmo (condicional) ≠ verremo (futuro).",
          en: "Future stem + -ei, -esti, -ebbe, -emmo, -este, -ebbero. For politeness, wishes and advice. Careful: verremmo (conditional) ≠ verremo (future).",
        },
        table: [["", "parlare", "venire", "volere"], ["io", "parlerei", "verrei", "vorrei"], ["tu", "parleresti", "verresti", "vorresti"], ["lui / lei / Lei", "parlerebbe", "verrebbe", "vorrebbe"], ["noi", "parleremmo", "verremmo", "vorremmo"], ["loro", "parlerebbero", "verrebbero", "vorrebbero"]],
      },
      question: {
        prompt: { es: "Completa con «venire»: «Noi ___ volentieri, ma non possiamo.»", en: "Complete with 'venire': 'Noi ___ volentieri, ma non possiamo.'" },
        options: ["verremmo", "verremo", "veniremmo", "verrebbero"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "conditional"],
    },
    {
      id: "pat-pronomi-combinati", type: "pattern", target: "me lo · te lo · glielo · ce lo · ve lo",
      gloss: { es: "pronombres combinados", en: "combined pronouns" },
      pattern: {
        rule: {
          es: "Indirecto + directo: mi, ti, ci, vi → me, te, ce, ve (te lo do). gli y le → glielo, gliela (se lo / se la). Ante ho: gliel'ho.",
          en: "Indirect + direct: mi, ti, ci, vi → me, te, ce, ve (te lo do). gli and le both → glielo, gliela. Before ho: gliel'ho.",
        },
        table: [["", "lo", "la", "li", "le"], ["mi", "me lo", "me la", "me li", "me le"], ["ti", "te lo", "te la", "te li", "te le"], ["gli / le", "glielo", "gliela", "glieli", "gliele"], ["ci", "ce lo", "ce la", "ce li", "ce le"]],
      },
      question: {
        prompt: { es: "«¿Le diste el libro (a ella)?» — «Sí, ___ho dato.»", en: "'Did you give her the book?' — 'Sì, ___ho dato.'" },
        options: ["gliel'", "le l'", "me l'", "ce l'"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "pronouns"],
    },
    {
      id: "pat-ne", type: "pattern", target: "Quanti colleghi hai? Ne ho dieci.",
      gloss: { es: "«ne» (de eso, de ellos)", en: "'ne' (of it, of them)" },
      pattern: {
        rule: {
          es: "«ne» reemplaza una cantidad o «di + algo»: Quanti caffè bevi? Ne bevo tre. En español no se dice nada.",
          en: "'ne' replaces a quantity or 'di + something': Quanti caffè bevi? Ne bevo tre (I drink three of them).",
        },
        table: [["Quante mele vuoi?", "Ne voglio due."], ["Hai dei colleghi?", "Sì, ne ho molti."], ["Che ne pensi?", "(di questo)"]],
      },
      question: {
        prompt: { es: "«¿Tienes colegas simpáticos?» — «Sí, ___ ho molti.»", en: "'Do you have nice colleagues?' — 'Sì, ___ ho molti.'" },
        options: ["ne", "li", "ci", "le"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "pronouns"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-annuncio", type: "listening",
      target: "Cercasi impiegato o impiegata con esperienza, disponibile a lavorare a tempo pieno. Inviare il curriculum entro il trenta giugno.",
      gloss: {
        es: "Se busca empleado o empleada con experiencia, disponible para trabajar a tiempo completo. Enviar el currículum antes del treinta de junio.",
        en: "Experienced clerk wanted, available to work full-time. Send your CV by the thirtieth of June.",
      },
      question: {
        prompt: { es: "¿Hasta cuándo se puede enviar el currículum?", en: "When is the deadline for CVs?" },
        options: [
          { es: "Hasta el treinta de junio", en: "The thirtieth of June" },
          { es: "Hasta el trece de junio", en: "The thirteenth of June" },
          { es: "Hasta el treinta de julio", en: "The thirtieth of July" },
          { es: "No hay plazo", en: "There's no deadline" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work"],
    },
    {
      id: "dlg-colloquio", type: "dialogue", register: "formal", target: "Quando sarebbe disponibile?",
      gloss: { es: "¿Cuándo estaría disponible?", en: "When would you be available?" },
      turns: [
        { who: "A", target: "Perché vorrebbe lavorare con noi?", gloss: { es: "¿Por qué querría trabajar con nosotros?", en: "Why would you like to work with us?" } },
        { who: "B", target: "Perché mi piacerebbe crescere in un'azienda internazionale.", gloss: { es: "Porque me gustaría crecer en una empresa internacional.", en: "Because I'd like to grow in an international company." } },
        { who: "A", target: "Quando sarebbe disponibile?", gloss: { es: "¿Cuándo estaría disponible?", en: "When would you be available?" } },
        { who: "B", target: "Potrei cominciare dal primo settembre.", gloss: { es: "Podría empezar el primero de septiembre.", en: "I could start on the first of September." } },
      ],
      question: {
        prompt: { es: "¿Cuándo podría empezar B?", en: "When could B start?" },
        options: [
          { es: "El primero de septiembre", en: "On the first of September" },
          { es: "Enseguida", en: "Right away" },
          { es: "En diciembre", en: "In December" },
          { es: "No lo dice", en: "B doesn't say" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-officina", type: "bridge", onlyFor: "es", target: "l'officina",
      gloss: { es: "el taller (mecánico)", en: "the workshop / garage" },
      question: {
        prompt: { es: "«Porto la macchina in officina» significa…", en: "'Porto la macchina in officina' means…" },
        options: [
          { es: "Llevo el auto al taller.", en: "I'm taking the car to the garage." },
          { es: "Llevo el auto a la oficina.", en: "I'm taking the car to the office." },
          { es: "Llevo el auto al estacionamiento.", en: "I'm taking the car to the car park." },
          { es: "Llevo el auto a lavar.", en: "I'm taking the car to be washed." },
        ],
        answer: 0,
      },
      note: { es: "l'officina = el taller; la oficina = l'ufficio." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
