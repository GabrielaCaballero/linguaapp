import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u34",
  lang: "it",
  index: 34,
  cefr: "C2",
  title: { target: "Giornalismo e retorica", es: "Periodismo y retórica", en: "Journalism and rhetoric" },
  canDo: [
    { es: "Distingo en la prensa los hechos de la información no confirmada (sarebbe, avrebbe).", en: "I can tell facts from unconfirmed reports in the press (sarebbe, avrebbe)." },
    { es: "Entiendo titulares y el presente histórico de crónicas y documentales.", en: "I can understand headlines and the historic present of reports and documentaries." },
    { es: "Reconozco las figuras retóricas de discursos y editoriales.", en: "I can recognise the rhetorical devices in speeches and editorials." },
  ],
  icon: "📰",
  items: build("it", 34, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "testata", type: "word", pos: "noun", target: "la testata", gender: "f", plural: "le testate",
      gloss: { es: "el medio (periódico, revista), la cabecera", en: "the news outlet, masthead" },
      distractors: ["la testa", "la tastiera", "la testimone"],
      note: { es: "También es el cabezazo: dare una testata.", en: "It's also a headbutt: dare una testata." },
      tags: ["media"],
    },
    {
      id: "editoriale", type: "word", pos: "noun", target: "l'editoriale", gender: "m", plural: "gli editoriali",
      gloss: { es: "el editorial (artículo de opinión)", en: "the editorial (opinion piece)" },
      distractors: ["l'editore", "l'edizione", "l'editrice"],
      note: { es: "la casa editrice = la editorial (empresa).", en: "la casa editrice = the publishing house." },
      tags: ["media"],
    },
    {
      id: "inviato-speciale", type: "word", pos: "noun", target: "l'inviato speciale", gender: "m", plural: "gli inviati speciali",
      gloss: { es: "el enviado especial", en: "the special correspondent" },
      distractors: ["l'invitato speciale", "l'invio speciale", "l'inviato specifico"],
      tags: ["media"],
    },
    {
      id: "smentita", type: "word", pos: "noun", target: "la smentita", gender: "f", plural: "le smentite",
      gloss: { es: "el desmentido", en: "the denial (of a report)" },
      distractors: ["la mentita", "la sventata", "la smessa"],
      tags: ["media"],
    },
    {
      id: "attendibile", type: "word", pos: "adj", target: "attendibile",
      gloss: { es: "fiable, confiable (una fuente)", en: "reliable (of a source)" },
      distractors: ["attendista", "attinente", "appetibile"],
      tags: ["media"],
    },
    {
      id: "sedicente", type: "word", pos: "adj", target: "sedicente",
      gloss: { es: "supuesto, que se hace llamar así", en: "self-styled, so-called" },
      distractors: ["seducente", "sedentario", "sedicesimo"],
      note: { es: "Siempre crítico: il sedicente esperto = alguien que dice ser experto y no lo es.", en: "Always critical: il sedicente esperto = someone who claims to be an expert and isn't." },
      grammar: ["it-g-figure-retoriche"], tags: ["media", "nuance"],
    },
    {
      id: "iperbole", type: "word", pos: "noun", target: "l'iperbole", gender: "f", plural: "le iperboli",
      gloss: { es: "la hipérbole (exageración)", en: "the hyperbole" },
      distractors: ["l'ipotesi", "la parabola", "l'iperbolico"],
      grammar: ["it-g-figure-retoriche"], tags: ["rhetoric"],
    },
    {
      id: "eufemismo", type: "word", pos: "noun", target: "l'eufemismo", gender: "m", plural: "gli eufemismi",
      gloss: { es: "el eufemismo", en: "the euphemism" },
      distractors: ["l'euforia", "l'eufonia", "l'umorismo"],
      grammar: ["it-g-figure-retoriche"], tags: ["rhetoric"],
    },
    {
      id: "anafora", type: "word", pos: "noun", target: "l'anafora", gender: "f", plural: "le anafore",
      gloss: { es: "la anáfora (repetición al inicio de cada frase)", en: "anaphora (repetition at the start of each sentence)" },
      distractors: ["l'anfora", "la metafora", "l'anagrafe"],
      grammar: ["it-g-figure-retoriche"], tags: ["rhetoric"],
    },
    {
      id: "domanda-retorica", type: "word", pos: "noun", target: "la domanda retorica", gender: "f", plural: "le domande retoriche",
      gloss: { es: "la pregunta retórica", en: "the rhetorical question" },
      distractors: ["la domanda teorica", "la richiesta retorica", "la domanda retorta"],
      grammar: ["it-g-figure-retoriche"], tags: ["rhetoric"],
    },
    {
      id: "gettare-benzina", type: "phrase", pos: "phrase", target: "gettare benzina sul fuoco",
      gloss: { es: "echar leña al fuego", en: "to add fuel to the fire" },
      distractors: ["gettare acqua sul fuoco", "gettare fumo negli occhi", "gettare la spugna"],
      note: { es: "Lo contrario: gettare acqua sul fuoco = calmar los ánimos.", en: "The opposite: gettare acqua sul fuoco = to calm things down." },
      tags: ["idioms", "media"],
    },
    {
      id: "fare-notizia", type: "phrase", pos: "phrase", target: "fare notizia",
      gloss: { es: "ser noticia, llamar la atención de la prensa", en: "to make the news" },
      distractors: ["dare notizia", "fare la notizia", "farsi notizia"],
      tags: ["media", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ministro-sarebbe-pronto", type: "sentence", target: "Secondo fonti vicine al governo, il ministro sarebbe pronto a dimettersi.",
      gloss: { es: "Según fuentes cercanas al gobierno, el ministro estaría dispuesto a renunciar.", en: "According to sources close to the government, the minister is reportedly ready to resign." },
      distractors: ["fosse", "sarà", "dimettere"],
      annot: { sarebbe: { es: "condicional: noticia no confirmada", en: "conditional: unconfirmed report" } },
      grammar: ["it-g-condizionale-cronaca"], tags: ["media", "condizionale"],
    },
    {
      id: "incendio-sarebbe-stato", type: "sentence", target: "L'incendio sarebbe stato causato da un mozzicone di sigaretta.",
      gloss: { es: "El incendio habría sido provocado por una colilla de cigarrillo.", en: "The fire was allegedly caused by a cigarette butt." },
      errors: [{ text: "L'incendio sarebbe stato causato per un mozzicone di sigaretta.", feedback: { es: "El agente de la pasiva va con «da», no con «per».", en: "The agent of a passive takes da, not per." }, ruleId: "it-g-passivo-essere" }],
      distractors: ["fosse", "causata", "sigarette"],
      grammar: ["it-g-condizionale-cronaca", "it-g-passivo-essere"], tags: ["media", "condizionale"],
    },
    {
      id: "italiani-scelgono-repubblica", type: "sentence", target: "Nel 1946 gli italiani scelgono la Repubblica.",
      spoken: "Nel millenovecentoquarantasei gli italiani scelgono la Repubblica.",
      gloss: { es: "En 1946 los italianos eligen la República.", en: "In 1946 Italians choose the Republic." },
      distractors: ["sceglie", "negli", "Repubbliche"],
      grammar: ["it-g-presente-storico"], tags: ["media", "history"],
    },
    {
      id: "maltempo-al-nord", type: "sentence", target: "Maltempo al Nord: scuole chiuse in tre regioni.",
      gloss: { es: "Temporal en el norte: escuelas cerradas en tres regiones.", en: "Bad weather in the North: schools closed in three regions." },
      distractors: ["chiusi", "regione", "nelle"],
      grammar: ["it-g-presente-storico"], tags: ["media", "headlines"],
    },
    {
      id: "chi-di-noi", type: "sentence", target: "Chi di noi non ha mai sbagliato?",
      gloss: { es: "¿Quién de nosotros no se ha equivocado nunca?", en: "Which of us has never made a mistake?" },
      distractors: ["Che", "sbagliare", "nessuno"],
      grammar: ["it-g-figure-retoriche"], tags: ["rhetoric"],
    },
    {
      id: "non-e-il-momento-benzina", type: "sentence", target: "Non è il momento di gettare benzina sul fuoco.",
      gloss: { es: "No es momento de echar leña al fuego.", en: "This is not the time to add fuel to the fire." },
      distractors: ["acqua", "getta", "fuochi"],
      tags: ["idioms", "media"],
    },
    {
      id: "sedicente-esperto", type: "sentence", target: "Il sedicente esperto si è rivelato un truffatore.",
      gloss: { es: "El supuesto experto resultó ser un estafador.", en: "The self-styled expert turned out to be a fraud." },
      distractors: ["seducente", "rivelata", "truffa"],
      tags: ["media", "nuance"],
    },
    {
      id: "notizia-smentita", type: "sentence", target: "La notizia, rilanciata da diverse testate, è stata poi smentita.",
      gloss: { es: "La noticia, difundida por varios medios, fue desmentida después.", en: "The story, picked up by several outlets, was later denied." },
      distractors: ["testa", "smentito", "rilanciato"],
      grammar: ["it-g-passivo-essere"], tags: ["media"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-condizionale-cronaca", type: "pattern", target: "sarebbe pronto · avrebbe dichiarato · sarebbe stato causato",
      gloss: { es: "el condicional para noticias no confirmadas", en: "the conditional for unconfirmed news" },
      pattern: {
        rule: {
          es: "Con el condicional, el periodista dice que la información viene de otros y no está comprobada: simple para el presente, compuesto para el pasado.",
          en: "With the conditional, the journalist signals that the information comes from others and isn't verified: simple for the present, compound for the past.",
        },
        table: [["è pronto", "sarebbe pronto"], ["ha dichiarato", "avrebbe dichiarato"], ["è stato causato", "sarebbe stato causato"]],
      },
      question: {
        prompt: { es: "«Il sindaco avrebbe ricevuto denaro» significa que…", en: "'Il sindaco avrebbe ricevuto denaro' means that…" },
        options: [
          { es: "se dice que el alcalde recibió dinero, pero no está confirmado", en: "the mayor allegedly received money, but it isn't confirmed" },
          { es: "el alcalde recibió dinero, y está comprobado", en: "the mayor received money, and it's proven" },
          { es: "el alcalde recibirá dinero pronto", en: "the mayor will soon receive money" },
          { es: "el alcalde quería recibir dinero", en: "the mayor wanted to receive money" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-condizionale-cronaca"], tags: ["grammar", "media"],
    },
    {
      id: "pat-presente-storico", type: "pattern", target: "Nel 1492 Colombo arriva in America",
      spoken: "Nel millequattrocentonovantadue Colombo arriva in America",
      gloss: { es: "el presente histórico", en: "the historic present" },
      pattern: {
        rule: {
          es: "Crónicas, libros de historia y titulares cuentan hechos pasados en presente para hacerlos más vivos. Las fechas dicen cuándo ocurrió.",
          en: "Reports, history books and headlines tell past events in the present to make them vivid. The dates say when it happened.",
        },
        table: [["nacque", "nasce"], ["è caduto il governo", "cade il governo"], ["sono state chiuse le scuole", "scuole chiuse"]],
      },
      question: {
        prompt: { es: "¿Por qué el documental dice «Nel 1946 gli italiani scelgono la Repubblica» en presente?", en: "Why does the documentary say 'Nel 1946 gli italiani scelgono la Repubblica' in the present?" },
        options: [
          { es: "Para que el relato sea más vivo e inmediato.", en: "To make the account more vivid and immediate." },
          { es: "Porque es un error frecuente.", en: "Because it's a common mistake." },
          { es: "Porque el hecho todavía no ocurrió.", en: "Because the event hasn't happened yet." },
          { es: "Porque es una opinión del autor.", en: "Because it's the author's opinion." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-presente-storico"], tags: ["grammar", "media"],
    },
    {
      id: "pat-figure-retoriche", type: "pattern", target: "iperbole · eufemismo · anafora · domanda retorica",
      gloss: { es: "figuras retóricas frecuentes", en: "common rhetorical devices" },
      pattern: {
        rule: {
          es: "La hipérbole exagera, el eufemismo suaviza, la anáfora repite el comienzo y la pregunta retórica no espera respuesta.",
          en: "Hyperbole exaggerates, euphemism softens, anaphora repeats the opening and a rhetorical question expects no answer.",
        },
        table: [["iperbole", "mille volte"], ["eufemismo", "i meno abbienti"], ["anafora", "vogliamo…, vogliamo…"], ["domanda retorica", "Chi di noi…?"]],
      },
      question: {
        prompt: { es: "«Te l'ho detto mille volte!» es…", en: "'Te l'ho detto mille volte!' is…" },
        options: ["un'iperbole", "un eufemismo", "un'anafora", "una domanda retorica"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-figure-retoriche"], tags: ["grammar", "rhetoric"],
    },
    {
      id: "tab-condizionale-cronaca", type: "paradigm", target: "condizionale passato di cronaca",
      gloss: { es: "condicional compuesto de la crónica", en: "past reporting conditional" },
      grammar: ["it-g-condizionale-cronaca", "it-g-condizionale-passato"],
      paradigm: {
        caption: { es: "Escribe el condicional compuesto", en: "Write the past conditional" },
        cells: [
          { label: "dichiarare · lui", answer: "avrebbe dichiarato", ruleId: "it-g-condizionale-cronaca" },
          { label: "ricevere · lei", answer: "avrebbe ricevuto", ruleId: "it-g-condizionale-cronaca" },
          { label: "essere · lui", answer: "sarebbe stato", ruleId: "it-g-condizionale-cronaca" },
          { label: "partire · loro", answer: "sarebbero partiti", ruleId: "it-g-condizionale-cronaca" },
          { label: "dimettersi · lei", answer: "si sarebbe dimessa", ruleId: "it-g-condizionale-cronaca" },
          { label: "fuggire · loro", answer: "sarebbero fuggiti", ruleId: "it-g-condizionale-cronaca" },
        ],
      },
      tags: ["grammar", "condizionale", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-nubifragio", type: "listening",
      target: "Ultime notizie. Un violento nubifragio si è abbattuto questa notte sulla costa ligure. Secondo le prime ricostruzioni, una frana avrebbe bloccato la linea ferroviaria tra Genova e La Spezia. Non risulterebbero feriti, ma i collegamenti resteranno sospesi almeno fino a domani.",
      gloss: {
        es: "Últimas noticias. Un violento temporal azotó anoche la costa de Liguria. Según las primeras reconstrucciones, un derrumbe habría bloqueado la vía del tren entre Génova y La Spezia. No habría heridos, pero las conexiones seguirán suspendidas al menos hasta mañana.",
        en: "Latest news. A violent storm hit the Ligurian coast overnight. According to early reports, a landslide has reportedly blocked the railway line between Genoa and La Spezia. There are said to be no injuries, but services will remain suspended until at least tomorrow.",
      },
      question: {
        prompt: { es: "¿Qué se sabe de los heridos?", en: "What is known about injuries?" },
        options: [
          { es: "Por ahora no habría heridos, pero no está confirmado.", en: "There seem to be none so far, but it isn't confirmed." },
          { es: "Hay varios heridos graves.", en: "Several people are seriously injured." },
          { es: "Los heridos ya fueron trasladados a Génova.", en: "The injured have been taken to Genoa." },
          { es: "La noticia no menciona heridos.", en: "The report doesn't mention injuries." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-condizionale-cronaca"], tags: ["listening", "media", "condizionale"],
    },
    {
      id: "dlg-titolo", type: "dialogue", register: "informal", target: "Lo dicono, ma non è provato.",
      gloss: { es: "Lo dicen, pero no está probado.", en: "That's what they say, but it isn't proven." },
      turns: [
        { who: "A", target: "Il titolo «Il sindaco ha preso tangenti» non va.", gloss: { es: "El título «El alcalde aceptó sobornos» no sirve.", en: "The headline 'Mayor took bribes' won't do." } },
        { who: "B", target: "Perché? È quello che dicono tutti.", gloss: { es: "¿Por qué? Es lo que dicen todos.", en: "Why? It's what everyone's saying." } },
        { who: "A", target: "Appunto: lo dicono, ma non è provato. Scrivi «avrebbe preso», o ci querelano.", gloss: { es: "Justamente: lo dicen, pero no está probado. Pon «habría aceptado», o nos demandan.", en: "Exactly: they say it, but it isn't proven. Write 'allegedly took', or they'll sue us." } },
        { who: "B", target: "D'accordo. E tolgo anche «scandalo» dal sommario: è un po' un'iperbole.", gloss: { es: "De acuerdo. Y también saco «escándalo» del resumen: es un poco exagerado.", en: "Fine. And I'll take 'scandal' out of the standfirst too: it's a bit of an overstatement." } },
      ],
      question: {
        prompt: { es: "¿Por qué A quiere cambiar el título?", en: "Why does A want to change the headline?" },
        options: [
          { es: "Porque la acusación no está probada y podrían demandarlos.", en: "Because the accusation isn't proven and they could be sued." },
          { es: "Porque el título es demasiado largo.", en: "Because the headline is too long." },
          { es: "Porque el alcalde ya desmintió la noticia.", en: "Because the mayor has already denied the story." },
          { es: "Porque nadie habla del tema.", en: "Because nobody's talking about it." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-condizionale-cronaca"], tags: ["dialogue", "media"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-periodico", type: "bridge", onlyFor: "es", target: "il periodico",
      gloss: { es: "la revista, la publicación periódica (no diaria)", en: "the periodical, magazine" },
      question: {
        prompt: { es: "«Collabora con un periodico di viaggi» significa…", en: "'Collabora con un periodico di viaggi' means…" },
        options: [
          { es: "Colabora con una revista de viajes.", en: "She writes for a travel magazine." },
          { es: "Colabora con un diario que sale todos los días.", en: "She writes for a daily newspaper." },
          { es: "Colabora con una agencia de viajes.", en: "She works with a travel agency." },
          { es: "Colabora en un programa de radio sobre viajes.", en: "She works on a travel radio show." },
        ],
        answer: 0,
      },
      note: { es: "El periódico de todos los días es «il quotidiano» o «il giornale»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "media"],
    },
  ]),
};
