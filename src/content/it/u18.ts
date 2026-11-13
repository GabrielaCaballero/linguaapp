import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u18",
  lang: "it",
  index: 18,
  cefr: "B1",
  title: { target: "Società e ambiente", es: "Sociedad y medio ambiente", en: "Society and the environment" },
  canDo: [
    { es: "Puedo entender y explicar normas: lo que se debe hacer y lo que está prohibido.", en: "I can understand and explain rules: what must be done and what's forbidden." },
    { es: "Puedo hablar de temas como el reciclaje, la energía y la ciudad.", en: "I can talk about topics like recycling, energy and the city." },
    { es: "Sé usar el «si» impersonal y la voz pasiva con essere y venire.", en: "I can use impersonal 'si' and the passive with essere and venire." },
  ],
  icon: "♻️",
  items: build("it", 18, "B1", [
    // ── Environment ──────────────────────────────────────────
    {
      id: "ambiente", type: "word", pos: "noun", target: "l'ambiente", gender: "m", plural: "gli ambienti",
      gloss: { es: "el medio ambiente / el ambiente", en: "the environment" },
      distractors: ["la ambiente", "l'ambiento", "l'ambizione"],
      tags: ["environment"],
    },
    {
      id: "inquinamento", type: "word", pos: "noun", target: "l'inquinamento", gender: "m", plural: "gli inquinamenti",
      gloss: { es: "la contaminación", en: "pollution" },
      distractors: ["l'inquilino", "l'insegnamento", "l'incantamento"],
      tags: ["environment"],
    },
    {
      id: "rifiuti", type: "word", pos: "other", target: "i rifiuti",
      gloss: { es: "la basura, los residuos", en: "rubbish / waste" },
      distractors: ["i rifugi", "i rinforzi", "le rifiute"],
      note: { es: "Casi siempre en plural: i rifiuti. Rechazar = rifiutare.", en: "Almost always plural: i rifiuti. To refuse = rifiutare." },
      tags: ["environment"],
    },
    {
      id: "raccolta-differenziata", type: "phrase", pos: "phrase", target: "la raccolta differenziata",
      gloss: { es: "la separación de residuos (para reciclar)", en: "separate waste collection (recycling)" },
      distractors: ["la raccolta indifferenziata", "la raccolta diversa", "la racconta differenziata"],
      tags: ["environment"],
    },
    {
      id: "riciclare", type: "word", pos: "verb", target: "riciclare",
      gloss: { es: "reciclar", en: "to recycle" },
      distractors: ["ricaricare", "rincarare", "riscaldare"],
      tags: ["environment"],
    },
    {
      id: "risparmiare", type: "word", pos: "verb", target: "risparmiare",
      gloss: { es: "ahorrar", en: "to save (money, energy)" },
      distractors: ["rispettare", "rispondere", "rimpiangere"],
      tags: ["environment"],
    },
    {
      id: "energia", type: "word", pos: "noun", target: "l'energia", gender: "f", plural: "le energie",
      gloss: { es: "la energía", en: "energy" },
      distractors: ["l'allergia", "l'enigma", "la sinergia"],
      tags: ["environment"],
    },
    {
      id: "clima", type: "word", pos: "noun", target: "il clima", gender: "m", plural: "i climi",
      gloss: { es: "el clima", en: "the climate" },
      distractors: ["la clima", "il climax", "il cliente"],
      note: { es: "Masculino aunque termine en -a (como il problema, il tema).", en: "Masculine despite the -a (like il problema, il tema)." },
      tags: ["environment"],
    },

    // ── Society ──────────────────────────────────────────────
    {
      id: "societa", type: "word", pos: "noun", target: "la società", gender: "f", plural: "le società",
      gloss: { es: "la sociedad / la empresa", en: "society / the company" },
      distractors: ["la sobrietà", "la socialità", "il socio"],
      tags: ["society"],
    },
    {
      id: "cittadino", type: "word", pos: "noun", target: "il cittadino", gender: "m", plural: "i cittadini",
      gloss: { es: "el ciudadano", en: "the citizen" },
      accept: [{ text: "la cittadina" }],
      distractors: ["il contadino", "il ciclista", "la città"],
      tags: ["society"],
    },
    {
      id: "sindaco", type: "word", pos: "noun", target: "il sindaco", gender: "m", plural: "i sindaci",
      gloss: { es: "el alcalde / la alcaldesa (el intendente)", en: "the mayor" },
      distractors: ["il sindacato", "il sondaggio", "il sindacalista"],
      tags: ["society"],
    },
    {
      id: "vietato", type: "word", pos: "adj", target: "vietato",
      gloss: { es: "prohibido/a", en: "forbidden" },
      distractors: ["evitato", "vestito", "votato"],
      note: { es: "Vietato fumare = prohibido fumar.", en: "Vietato fumare = no smoking." },
      tags: ["rules"],
    },
    {
      id: "obbligatorio", type: "word", pos: "adj", target: "obbligatorio",
      gloss: { es: "obligatorio/a", en: "compulsory / mandatory" },
      distractors: ["obbediente", "oratorio", "ottimista"],
      note: { es: "Doble b: obbligatorio, obbligo.", en: "Double b: obbligatorio, obbligo." },
      tags: ["rules", "doubles"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "qui-si-parla", type: "sentence", target: "Qui si parla italiano.",
      gloss: { es: "Aquí se habla italiano.", en: "Italian is spoken here." },
      distractors: ["parlano", "ci", "sì"],
      tags: ["si-impersonale"],
    },
    {
      id: "si-devono-separare", type: "sentence", target: "I rifiuti si devono separare.",
      gloss: { es: "La basura se tiene que separar.", en: "Waste has to be sorted." },
      accept: [{ text: "Si devono separare i rifiuti." }, { text: "Bisogna separare i rifiuti." }],
      errors: [{ text: "Si deve separare i rifiuti.", feedback: { es: "Con un sustantivo plural, el verbo va en plural: si devono separare.", en: "With a plural noun the verb is plural: si devono separare." } }],
      distractors: ["deve", "separano", "rifiuto"],
      tags: ["si-impersonale", "rules"],
    },
    {
      id: "vietato-fumare", type: "sentence", target: "In questo parco è vietato fumare.",
      gloss: { es: "En este parque está prohibido fumar.", en: "Smoking is forbidden in this park." },
      accept: [{ text: "È vietato fumare in questo parco." }],
      distractors: ["vietata", "si", "fuma"],
      tags: ["rules"],
    },
    {
      id: "legge-approvata", type: "sentence", target: "La nuova legge è stata approvata ieri.",
      gloss: { es: "La nueva ley fue aprobada ayer.", en: "The new law was passed yesterday." },
      errors: [{ text: "La nuova legge ha stato approvata ieri.", feedback: { es: "La pasiva usa essere: è stata approvata.", en: "The passive uses essere: è stata approvata." } }],
      distractors: ["approvato", "ha", "stato"],
      tags: ["passive"],
    },
    {
      id: "vengono-raccolti", type: "sentence", target: "I rifiuti vengono raccolti ogni mattina.",
      gloss: { es: "La basura se recoge cada mañana.", en: "The rubbish is collected every morning." },
      accept: [{ text: "I rifiuti sono raccolti ogni mattina." }],
      distractors: ["vengo", "raccolto", "viene"],
      tags: ["passive"],
    },
    {
      id: "bisogna-risparmiare", type: "sentence", target: "Bisogna risparmiare energia.",
      gloss: { es: "Hay que ahorrar energía.", en: "We need to save energy." },
      accept: [{ text: "Si deve risparmiare energia." }, { text: "Bisogna risparmiare l'energia." }],
      distractors: ["Bisogno", "risparmio", "di"],
      tags: ["environment", "rules"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-si-impersonale", type: "pattern", target: "si vive bene · si vendono case",
      gloss: { es: "el «si» impersonal y pasivo", en: "impersonal and passive 'si'" },
      pattern: {
        rule: {
          es: "Como el «se» del español: si vive bene (se vive bien). Con un objeto, el verbo concuerda: si vende una casa, si vendono case.",
          en: "si + verb = 'one / people': si vive bene. With an object, the verb agrees with it: si vende una casa, si vendono case.",
        },
        table: [["si + singolare", "si mangia bene · si parla italiano"], ["si + plurale", "si vendono libri · si devono separare i rifiuti"]],
      },
      question: {
        prompt: { es: "Completa con «vendere»: «In questo negozio si ___ libri usati.»", en: "Complete with 'vendere': 'In questo negozio si ___ libri usati.'" },
        options: ["vendono", "vende", "vendiamo", "vendete"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "si-impersonale"],
    },
    {
      id: "pat-passivo-essere", type: "pattern", target: "è stato scritto · è stata approvata",
      gloss: { es: "la voz pasiva con essere", en: "the passive with essere" },
      pattern: {
        rule: {
          es: "essere + participio que concuerda con el sujeto; el agente va con «da»: Il libro è stato scritto da Calvino.",
          en: "essere + participle agreeing with the subject; the agent takes 'da': Il libro è stato scritto da Calvino.",
        },
        table: [["presente", "la legge è approvata"], ["passato", "la legge è stata approvata"], ["futuro", "la legge sarà approvata"]],
      },
      question: {
        prompt: { es: "Completa: «Il quadro è stato dipinto ___ un pittore famoso.»", en: "Complete: 'Il quadro è stato dipinto ___ un pittore famoso.'" },
        options: ["da", "di", "per", "con"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-passivo-venire", type: "pattern", target: "viene chiuso · va fatto",
      gloss: { es: "pasiva con venire y andare", en: "the passive with venire and andare" },
      pattern: {
        rule: {
          es: "venire + participio = pasiva de acción, solo en tiempos simples (la porta viene chiusa alle otto). andare + participio = «debe hacerse» (il modulo va firmato).",
          en: "venire + participle = passive of an action, simple tenses only (la porta viene chiusa alle otto). andare + participle = 'must be done' (il modulo va firmato).",
        },
        table: [["venire", "La posta viene consegnata alle dieci."], ["andare", "Questo modulo va compilato."]],
      },
      question: {
        prompt: { es: "«La ventana se cierra a las ocho» (con venire) es…", en: "'The window is closed at eight' (with venire) is…" },
        options: ["La finestra viene chiusa alle otto.", "La finestra viene chiuso alle otto.", "La finestra viene chiudere alle otto.", "La finestra va chiudendo alle otto."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passive"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-raccolta", type: "listening",
      target: "Da gennaio in città la raccolta differenziata sarà obbligatoria. Carta, plastica e vetro dovranno essere separati, altrimenti si pagherà una multa.",
      gloss: {
        es: "Desde enero, en la ciudad, separar la basura será obligatorio. Papel, plástico y vidrio deberán separarse; si no, habrá que pagar una multa.",
        en: "From January, separating waste will be compulsory in the city. Paper, plastic and glass must be sorted, otherwise there will be a fine.",
      },
      question: {
        prompt: { es: "¿Qué pasa si no se separa la basura?", en: "What happens if you don't sort your waste?" },
        options: [
          { es: "Hay que pagar una multa.", en: "You have to pay a fine." },
          { es: "No se recoge la basura.", en: "The rubbish isn't collected." },
          { es: "Nada: es solo un consejo.", en: "Nothing: it's only advice." },
          { es: "Hay que ir a una oficina.", en: "You have to go to an office." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "environment"],
    },
    {
      id: "dlg-bidoni", type: "dialogue", register: "formal", target: "Dove si butta?",
      gloss: { es: "¿Dónde se tira?", en: "Which bin does it go in?" },
      turns: [
        { who: "A", target: "Scusi, la plastica dove si butta?", gloss: { es: "Disculpe, ¿el plástico dónde se tira?", en: "Excuse me, which bin does plastic go in?" } },
        { who: "B", target: "Nel bidone giallo. Il vetro invece va in quello verde.", gloss: { es: "En el contenedor amarillo. El vidrio, en cambio, va en el verde.", en: "In the yellow bin. Glass goes in the green one." } },
        { who: "A", target: "E la carta?", gloss: { es: "¿Y el papel?", en: "And paper?" } },
        { who: "B", target: "Nel bidone blu, ma si ritira solo il martedì.", gloss: { es: "En el contenedor azul, pero solo lo recogen los martes.", en: "In the blue bin, but it's only collected on Tuesdays." } },
      ],
      question: {
        prompt: { es: "¿Dónde va el vidrio?", en: "Where does glass go?" },
        options: [
          { es: "En el contenedor verde", en: "In the green bin" },
          { es: "En el contenedor amarillo", en: "In the yellow bin" },
          { es: "En el contenedor azul", en: "In the blue bin" },
          { es: "Se lleva el martes", en: "It's taken away on Tuesdays" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "environment"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-sindaco", type: "bridge", onlyFor: "es", target: "il sindaco",
      gloss: { es: "el alcalde", en: "the mayor" },
      question: {
        prompt: { es: "«il sindaco» significa…", en: "'il sindaco' means…" },
        options: [
          { es: "el alcalde (el intendente)", en: "the mayor" },
          { es: "el sindicato", en: "the trade union" },
          { es: "el juez", en: "the judge" },
          { es: "el sindicalista", en: "the trade unionist" },
        ],
        answer: 0,
      },
      note: { es: "il sindaco = el alcalde; el sindicato es «il sindacato»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
