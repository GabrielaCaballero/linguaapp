import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u19",
  lang: "it",
  index: 19,
  cefr: "B2",
  title: { target: "Il mondo del lavoro", es: "El mundo laboral", en: "The world of work" },
  canDo: [
    { es: "Puedo escribir un correo o carta formal para postularme a un puesto.", en: "I can write a formal email or letter applying for a job." },
    { es: "Puedo manejar llamadas y mensajes formales en el trabajo.", en: "I can handle formal calls and messages at work." },
    { es: "Sé usar el gerundio y el participio para unir ideas (avendo lavorato, finito il progetto).", en: "I can use gerund and participle clauses to link ideas (avendo lavorato, finito il progetto)." },
  ],
  icon: "🏢",
  items: build("it", 19, "B2", [
    // ── Formal writing ───────────────────────────────────────
    {
      id: "gentile-signora", type: "phrase", pos: "phrase", register: "formal", target: "Gentile Signora Rossi,",
      gloss: { es: "Estimada señora Rossi:", en: "Dear Ms Rossi," },
      accept: [{ text: "Gentile Sig.ra Rossi," }],
      distractors: ["Gentili Signora Rossi,", "Gentile Signore Rossi,", "Gentilmente Signora Rossi,"],
      spoken: "Gentile Signora Rossi,",
      note: { es: "Encabezado formal: Gentile + título. «Egregio» es aún más formal (Egregio Direttore).", en: "Formal opening: Gentile + title. 'Egregio' is even more formal (Egregio Direttore)." },
      tags: ["formal-writing"],
    },
    {
      id: "distinti-saluti", type: "phrase", pos: "phrase", register: "formal", target: "Distinti saluti",
      gloss: { es: "Atentamente (cierre formal)", en: "Yours sincerely (formal closing)" },
      accept: [{ text: "Cordiali saluti" }],
      distractors: ["Distinto saluto", "Distinti salute", "Distanti saluti"],
      tags: ["formal-writing"],
    },
    {
      id: "in-allegato", type: "phrase", pos: "phrase", target: "in allegato",
      gloss: { es: "adjunto", en: "attached" },
      distractors: ["in allegria", "per allegato", "in alleato"],
      note: { es: "In allegato trova… = adjunto encontrará…", en: "In allegato trova… = please find attached…" },
      tags: ["formal-writing"],
    },
    {
      id: "candidatura", type: "word", pos: "noun", target: "la candidatura", gender: "f", plural: "le candidature",
      gloss: { es: "la candidatura, la postulación", en: "the application (for a job)" },
      distractors: ["il candidato", "la candela", "la cattedra"],
      tags: ["work"],
    },
    {
      id: "azienda", type: "word", pos: "noun", target: "l'azienda", gender: "f", plural: "le aziende",
      gloss: { es: "la empresa", en: "the company / business" },
      distractors: ["l'agenda", "l'udienza", "la azienda"],
      tags: ["work"],
    },
    {
      id: "contratto", type: "word", pos: "noun", target: "il contratto", gender: "m", plural: "i contratti",
      gloss: { es: "el contrato", en: "the contract" },
      distractors: ["il contatto", "il contrasto", "la contratta"],
      tags: ["work", "doubles"],
    },
    {
      id: "tempo-determinato", type: "phrase", pos: "phrase", target: "a tempo determinato",
      gloss: { es: "temporal (con fecha de fin)", en: "fixed-term" },
      distractors: ["a tempo indeterminato", "a tempo determinante", "in tempo determinato"],
      note: { es: "Contratto a tempo indeterminato = contrato fijo (indefinido).", en: "Contratto a tempo indeterminato = permanent contract." },
      tags: ["work"],
    },
    {
      id: "ferie", type: "word", pos: "other", target: "le ferie",
      gloss: { es: "las vacaciones (del trabajo)", en: "annual leave / holidays" },
      distractors: ["le fiere", "le ferite", "le serie"],
      tags: ["work"],
    },
    {
      id: "dimissioni", type: "word", pos: "other", target: "le dimissioni",
      gloss: { es: "la renuncia (al trabajo)", en: "resignation" },
      distractors: ["le dimensioni", "le missioni", "le emissioni"],
      note: { es: "Siempre en plural: dare le dimissioni = renunciar.", en: "Always plural: dare le dimissioni = to resign." },
      tags: ["work"],
    },
    {
      id: "sede", type: "word", pos: "noun", target: "la sede", gender: "f", plural: "le sedi",
      gloss: { es: "la sede, la oficina central", en: "the head office / headquarters" },
      distractors: ["la sete", "la sedia", "il sedere"],
      tags: ["work"],
    },
    {
      id: "gestire", type: "word", pos: "verb", target: "gestire",
      gloss: { es: "gestionar, administrar", en: "to manage / run" },
      forms: { io: "gestisco" },
      distractors: ["digerire", "gestare", "gesticolare"],
      note: { es: "Verbo en -isc-: gestisco un piccolo team.", en: "An -isc- verb: gestisco un piccolo team." },
      tags: ["work", "isc"],
    },
    {
      id: "settore", type: "word", pos: "noun", target: "il settore", gender: "m", plural: "i settori",
      gloss: { es: "el sector", en: "the sector / field" },
      distractors: ["il sentore", "il sensore", "la settima"],
      tags: ["work"],
    },
    {
      id: "pertanto", type: "word", pos: "adv", target: "pertanto",
      gloss: { es: "por lo tanto", en: "therefore" },
      distractors: ["pertinente", "per quanto", "altrettanto"],
      note: { es: "Registro escrito; en la conversación: quindi.", en: "Written register; in conversation: quindi." },
      tags: ["connectors", "formal-writing"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "le-scrivo-in-merito", type: "sentence", register: "formal", target: "Le scrivo in merito all'annuncio pubblicato sul vostro sito.",
      gloss: { es: "Le escribo en relación con el anuncio publicado en su sitio web.", en: "I am writing regarding the advertisement on your website." },
      accept: [{ text: "Le scrivo in riferimento all'annuncio pubblicato sul vostro sito." }],
      distractors: ["Ti", "merita", "del"],
      tags: ["formal-writing"],
    },
    {
      id: "in-allegato-trova", type: "sentence", register: "formal", target: "In allegato trova il mio curriculum.",
      gloss: { es: "Adjunto encontrará mi currículum.", en: "Please find my CV attached." },
      accept: [{ text: "In allegato Le invio il mio curriculum." }],
      distractors: ["trovi", "allegati", "nel"],
      tags: ["formal-writing"],
    },
    {
      id: "resto-a-disposizione", type: "sentence", register: "formal", target: "Resto a disposizione per un colloquio.",
      gloss: { es: "Quedo a su disposición para una entrevista.", en: "I am available for an interview." },
      accept: [{ text: "Rimango a disposizione per un colloquio." }],
      distractors: ["Resta", "in", "colloqui"],
      tags: ["formal-writing"],
    },
    {
      id: "avendo-lavorato", type: "sentence", target: "Avendo lavorato all'estero, parlo tre lingue.",
      gloss: { es: "Como trabajé en el extranjero, hablo tres idiomas.", en: "Having worked abroad, I speak three languages." },
      accept: [{ text: "Siccome ho lavorato all'estero, parlo tre lingue." }],
      distractors: ["Avuto", "lavorando", "parla"],
      tags: ["gerundio"],
    },
    {
      id: "finito-il-progetto", type: "sentence", target: "Finito il progetto, siamo andati a cena.",
      gloss: { es: "Una vez terminado el proyecto, fuimos a cenar.", en: "Once the project was finished, we went out to dinner." },
      accept: [{ text: "Dopo aver finito il progetto, siamo andati a cena." }],
      distractors: ["Finendo", "abbiamo", "cenare"],
      tags: ["participio"],
    },
    {
      id: "dare-le-dimissioni", type: "sentence", target: "Ho deciso di dare le dimissioni.",
      gloss: { es: "Decidí renunciar.", en: "I've decided to resign." },
      distractors: ["fare", "dimissione", "dato"],
      tags: ["work"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-lettera-formale", type: "pattern", target: "Gentile… · Le scrivo per… · In allegato… · Distinti saluti",
      gloss: { es: "la carta formal", en: "the formal letter" },
      pattern: {
        rule: {
          es: "Se usa Lei con mayúscula (Le scrivo, Suo riscontro). Fórmulas: Gentile…, Le scrivo per / in merito a…, In allegato trova…, Resto in attesa di un Suo cortese riscontro, Distinti / Cordiali saluti.",
          en: "Use Lei, often capitalised (Le scrivo, Suo riscontro). Formulas: Gentile…, Le scrivo per / in merito a…, In allegato trova…, Resto in attesa di un Suo cortese riscontro, Distinti / Cordiali saluti.",
        },
        table: [["apertura", "Gentile Dottor Neri,"], ["motivo", "Le scrivo in merito a…"], ["allegati", "In allegato trova…"], ["chiusura", "Resto in attesa di un Suo riscontro. Distinti saluti"]],
      },
      question: {
        prompt: { es: "¿Cuál es el cierre adecuado para una carta formal?", en: "Which closing suits a formal letter?" },
        options: ["Distinti saluti", "Un bacio", "Ciao, a presto", "Un abbraccio"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "formal-writing"],
    },
    {
      id: "pat-gerundio", type: "pattern", target: "studiando · avendo studiato · essendo arrivato",
      gloss: { es: "el gerundio (causa, tiempo, modo)", en: "the gerund (cause, time, manner)" },
      pattern: {
        rule: {
          es: "-are → -ando, -ere/-ire → -endo. Une ideas: Studiando ogni giorno, migliori (modo); Essendo tardi, ho preso un taxi (causa). Pasado: avendo / essendo + participio.",
          en: "-are → -ando, -ere/-ire → -endo. It links ideas: Studiando ogni giorno, migliori (manner); Essendo tardi, ho preso un taxi (cause). Past: avendo / essendo + participle.",
        },
        table: [["parlare", "parlando", "avendo parlato"], ["leggere", "leggendo", "avendo letto"], ["partire", "partendo", "essendo partito/a"], ["essere", "essendo", "essendo stato/a"]],
      },
      question: {
        prompt: { es: "Completa (causa): «___ tardi, ho preso un taxi.» (essere)", en: "Complete (cause): '___ tardi, ho preso un taxi.' (essere)" },
        options: ["Essendo", "Stato", "Essere", "Sendo"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "gerundio"],
    },
    {
      id: "pat-participio-assoluto", type: "pattern", target: "Finito il lavoro, … · Arrivati a casa, …",
      gloss: { es: "el participio absoluto", en: "participle clauses" },
      pattern: {
        rule: {
          es: "Participio + sustantivo = «una vez que…»: Finito il lavoro, siamo usciti. Concuerda como con essere: Arrivate a casa, le ragazze hanno cenato.",
          en: "Participle + noun = 'once …': Finito il lavoro, siamo usciti. It agrees as with essere: Arrivate a casa, le ragazze hanno cenato.",
        },
        table: [["Finito il lavoro, …", "una volta finito il lavoro"], ["Arrivati a Roma, …", "quando siamo arrivati a Roma"], ["Letta la lettera, …", "dopo aver letto la lettera"]],
      },
      question: {
        prompt: { es: "Completa (noi, chicos): «___ a Roma, abbiamo chiamato i nonni.» (arrivare)", en: "Complete (noi, boys): '___ a Roma, abbiamo chiamato i nonni.' (arrivare)" },
        options: ["Arrivati", "Arrivato", "Arrivata", "Arrivare"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "participio"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-chiusura-ferie", type: "listening",
      target: "Gentili clienti, vi informiamo che gli uffici resteranno chiusi per ferie dal dieci al ventitré agosto. Per urgenze potete scrivere all'indirizzo indicato sul sito.",
      gloss: {
        es: "Estimados clientes: les informamos que las oficinas permanecerán cerradas por vacaciones del diez al veintitrés de agosto. Para urgencias pueden escribir a la dirección indicada en el sitio web.",
        en: "Dear customers, please note that the offices will be closed for the holidays from the tenth to the twenty-third of August. For urgent matters, write to the address on the website.",
      },
      question: {
        prompt: { es: "¿Hasta cuándo estarán cerradas las oficinas?", en: "Until when will the offices be closed?" },
        options: [
          { es: "Hasta el veintitrés de agosto", en: "Until the twenty-third of August" },
          { es: "Hasta el diez de agosto", en: "Until the tenth of August" },
          { es: "Hasta el trece de agosto", en: "Until the thirteenth of August" },
          { es: "Todo agosto", en: "All of August" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work"],
    },
    {
      id: "dlg-telefonata", type: "dialogue", register: "formal", target: "Vuole lasciare un messaggio?",
      gloss: { es: "¿Quiere dejar un mensaje?", en: "Would you like to leave a message?" },
      turns: [
        { who: "A", target: "Buongiorno, sono Laura Bianchi. Vorrei parlare con il responsabile del personale.", gloss: { es: "Buenos días, habla Laura Bianchi. Quisiera hablar con el responsable de personal.", en: "Good morning, this is Laura Bianchi. I'd like to speak to the HR manager." } },
        { who: "B", target: "Al momento è in riunione. Vuole lasciare un messaggio?", gloss: { es: "En este momento está en una reunión. ¿Quiere dejar un mensaje?", en: "He's in a meeting at the moment. Would you like to leave a message?" } },
        { who: "A", target: "Sì, gli dica che ho inviato la mia candidatura e che resto a disposizione.", gloss: { es: "Sí, dígale que envié mi candidatura y que quedo a su disposición.", en: "Yes, please tell him I've sent my application and I'm available." } },
        { who: "B", target: "Senz'altro. Arrivederci.", gloss: { es: "Por supuesto. Hasta luego.", en: "Certainly. Goodbye." } },
      ],
      question: {
        prompt: { es: "¿Por qué no puede atender el responsable?", en: "Why can't the manager take the call?" },
        options: [
          { es: "Está en una reunión.", en: "He's in a meeting." },
          { es: "Está de vacaciones.", en: "He's on holiday." },
          { es: "Ya se fue a casa.", en: "He's gone home." },
          { es: "Está hablando por otra línea.", en: "He's on another line." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-ferie", type: "bridge", onlyFor: "es", target: "le ferie",
      gloss: { es: "las vacaciones (del trabajo)", en: "annual leave" },
      question: {
        prompt: { es: "«Sono in ferie fino a lunedì» significa…", en: "'Sono in ferie fino a lunedì' means…" },
        options: [
          { es: "Estoy de vacaciones hasta el lunes.", en: "I'm on leave until Monday." },
          { es: "Estoy en la feria hasta el lunes.", en: "I'm at the fair until Monday." },
          { es: "Estoy herido hasta el lunes.", en: "I'm injured until Monday." },
          { es: "Estoy de fiesta hasta el lunes.", en: "I'm partying until Monday." },
        ],
        answer: 0,
      },
      note: { es: "le ferie = las vacaciones laborales; la feria es «la fiera»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
