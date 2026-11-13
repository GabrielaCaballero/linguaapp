import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u16",
  lang: "it",
  index: 16,
  cefr: "B1",
  title: { target: "Racconti", es: "Relatos", en: "Stories" },
  canDo: [
    { es: "Puedo contar una anécdota en orden, con lo que había pasado antes.", en: "I can tell an anecdote in order, including what had happened before." },
    { es: "Puedo unir frases con che, cui y il quale.", en: "I can join sentences with che, cui and il quale." },
    { es: "Reconozco el passato remoto en cuentos y textos escritos.", en: "I can recognise the passato remoto in stories and written texts." },
  ],
  icon: "📖",
  items: build("it", 16, "B1", [
    // ── Storytelling words ───────────────────────────────────
    {
      id: "raccontare", type: "word", pos: "verb", target: "raccontare",
      gloss: { es: "contar (una historia)", en: "to tell (a story)" },
      distractors: ["contare", "raccomandare", "raccogliere"],
      tags: ["stories"],
    },
    {
      id: "storia", type: "word", pos: "noun", target: "la storia", gender: "f", plural: "le storie",
      gloss: { es: "la historia", en: "the story / history" },
      distractors: ["il storia", "la stoffa", "la scoria"],
      tags: ["stories"],
    },
    {
      id: "succedere", type: "word", pos: "verb", target: "succedere",
      gloss: { es: "pasar, suceder", en: "to happen" },
      forms: { pp: "successo", aux: "essere" },
      distractors: ["succhiare", "cedere", "sorridere"],
      tags: ["stories"],
    },
    {
      id: "accorgersi", type: "word", pos: "verb", target: "accorgersi",
      gloss: { es: "darse cuenta", en: "to notice / realise" },
      forms: { pp: "accorto", aux: "essere" },
      distractors: ["accordarsi", "accogliere", "accorciare"],
      note: { es: "accorgersi di qualcosa: mi sono accorto dell'errore.", en: "accorgersi di qualcosa: mi sono accorto dell'errore (I noticed the mistake)." },
      tags: ["stories", "reflexive"],
    },
    {
      id: "dimenticare", type: "word", pos: "verb", target: "dimenticare",
      gloss: { es: "olvidar", en: "to forget" },
      distractors: ["dimagrire", "dimettere", "indicare"],
      note: { es: "También reflexivo: mi sono dimenticato di chiamarti.", en: "Also reflexive: mi sono dimenticato di chiamarti." },
      tags: ["stories"],
    },
    {
      id: "ricordo", type: "word", pos: "noun", target: "il ricordo", gender: "m", plural: "i ricordi",
      gloss: { es: "el recuerdo", en: "the memory (of something)" },
      distractors: ["la ricorda", "il riccio", "il record"],
      tags: ["stories"],
    },
    {
      id: "all-improvviso", type: "phrase", pos: "phrase", target: "all'improvviso",
      gloss: { es: "de repente", en: "suddenly" },
      accept: [{ text: "improvvisamente" }, { text: "d'improvviso" }],
      distractors: ["all'improvvisato", "al improvviso", "in provviso"],
      tags: ["stories", "connectors"],
    },
    {
      id: "alla-fine", type: "phrase", pos: "phrase", target: "alla fine",
      gloss: { es: "al final", en: "in the end" },
      distractors: ["al fine", "alla finta", "alla fame"],
      note: { es: "Ojo: «al fine di» = con el fin de.", en: "Careful: 'al fine di' = in order to." },
      tags: ["stories", "connectors"],
    },
    {
      id: "poi", type: "word", pos: "adv", target: "poi",
      gloss: { es: "después, luego", en: "then / afterwards" },
      distractors: ["più", "può", "poco"],
      tags: ["stories", "connectors"],
    },
    {
      id: "ormai", type: "word", pos: "adv", target: "ormai",
      gloss: { es: "ya (a estas alturas)", en: "by now / by then" },
      accept: [{ text: "oramai" }],
      distractors: ["allora", "ancora", "oltre"],
      note: { es: "Ormai è tardi = ya es tarde (no hay nada que hacer).", en: "Ormai è tardi = it's too late now." },
      tags: ["stories"],
    },
    {
      id: "da-quel-giorno", type: "phrase", pos: "phrase", target: "da quel giorno",
      gloss: { es: "desde ese día", en: "from that day on" },
      distractors: ["di quel giorno", "da quello giorno", "da quel giorni"],
      note: { es: "quel ante consonante, quello ante s + consonante: quello studente.", en: "quel before a consonant, quello before s + consonant: quello studente." },
      tags: ["stories", "time"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "che-cosa-e-successo", type: "sentence", target: "Che cosa è successo?",
      gloss: { es: "¿Qué pasó?", en: "What happened?" },
      accept: [{ text: "Cos'è successo?" }, { text: "Che è successo?" }, { text: "Cosa è successo?" }],
      errors: [{ text: "Che cosa ha successo?", feedback: { es: "succedere va con essere: è successo.", en: "succedere takes essere: è successo." } }],
      distractors: ["ha", "successa", "succede"],
      tags: ["stories"],
    },
    {
      id: "film-era-cominciato", type: "sentence", target: "Quando sono arrivato, il film era già cominciato.",
      gloss: { es: "Cuando llegué, la película ya había empezado.", en: "When I arrived, the film had already started." },
      accept: [{ text: "Quando sono arrivata, il film era già cominciato." }, { text: "Quando sono arrivato, il film era già iniziato." }, { text: "Quando sono arrivata, il film era già iniziato." }],
      errors: [{ text: "Quando sono arrivato, il film è già cominciato.", feedback: { es: "Lo anterior a otro pasado va en trapassato: era già cominciato.", en: "What had happened before another past event takes the trapassato: era già cominciato." } }],
      distractors: ["è", "aveva", "cominciava"],
      tags: ["stories", "trapassato"],
    },
    {
      id: "avevo-dimenticato", type: "sentence", target: "Avevo dimenticato le chiavi.",
      gloss: { es: "Había olvidado las llaves.", en: "I had forgotten my keys." },
      accept: [{ text: "Mi ero dimenticato le chiavi." }, { text: "Mi ero dimenticata le chiavi." }],
      distractors: ["Ero", "ho", "dimentico"],
      tags: ["stories", "trapassato"],
    },
    {
      id: "non-mi-ero-accorto", type: "sentence", target: "Non mi ero accorto di niente.",
      gloss: { es: "No me había dado cuenta de nada.", en: "I hadn't noticed anything." },
      accept: [{ text: "Non mi ero accorta di niente." }, { text: "Non mi ero accorto di nulla." }, { text: "Non mi ero accorta di nulla." }],
      errors: [{ text: "Non mi avevo accorto di niente.", feedback: { es: "Reflexivo → essere: mi ero accorto.", en: "Reflexive → essere: mi ero accorto." } }],
      distractors: ["avevo", "accorgo", "nessuno"],
      tags: ["stories", "trapassato", "reflexive"],
    },
    {
      id: "ragazza-con-cui", type: "sentence", target: "La ragazza con cui parlavo è mia cugina.",
      gloss: { es: "La chica con la que hablaba es mi prima.", en: "The girl I was talking to is my cousin." },
      accept: [{ text: "La ragazza con la quale parlavo è mia cugina." }],
      errors: [{ text: "La ragazza con che parlavo è mia cugina.", feedback: { es: "Después de preposición: cui (con cui), nunca «che».", en: "After a preposition use cui (con cui), never 'che'." } }],
      distractors: ["che", "quale", "la"],
      tags: ["relatives"],
    },
    {
      id: "libro-che-mi-hai-prestato", type: "sentence", register: "informal", target: "Il libro che mi hai prestato è bellissimo.",
      gloss: { es: "El libro que me prestaste es buenísimo.", en: "The book you lent me is wonderful." },
      distractors: ["cui", "prestata", "quale"],
      tags: ["relatives"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-trapassato", type: "pattern", target: "avevo mangiato · ero uscito/a",
      gloss: { es: "el trapassato prossimo (había + participio)", en: "the trapassato prossimo (had + participle)" },
      pattern: {
        rule: {
          es: "imperfetto de avere/essere + participio, para lo que pasó antes de otro hecho pasado: Quando sono arrivato, erano già usciti.",
          en: "imperfetto of avere/essere + participle, for what had happened before another past event: Quando sono arrivato, erano già usciti.",
        },
        table: [["avere", "avevo / avevi / aveva mangiato"], ["essere", "ero / eri / era uscito/a"]],
      },
      question: {
        prompt: { es: "Completa: «Quando siamo arrivati, il treno ___ già partito.»", en: "Complete: 'Quando siamo arrivati, il treno ___ già partito.'" },
        options: ["era", "aveva", "è", "sarebbe"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "trapassato"],
    },
    {
      id: "pat-relativi", type: "pattern", target: "che · con cui · di cui · il quale",
      gloss: { es: "pronombres relativos", en: "relative pronouns" },
      pattern: {
        rule: {
          es: "che = sujeto u objeto (il libro che leggo). Tras preposición: cui (la città di cui ti ho parlato). il/la quale, i/le quali: más formal, también tras preposición.",
          en: "che = subject or object (il libro che leggo). After a preposition: cui (la città di cui ti ho parlato). il/la quale, i/le quali: more formal, also after prepositions.",
        },
        table: [["che", "l'amico che vive a Roma"], ["preposizione + cui", "l'amico con cui lavoro"], ["preposizione + il quale", "l'amico con il quale lavoro"]],
      },
      question: {
        prompt: { es: "Completa: «È la città ___ ti ho parlato.»", en: "Complete: 'È la città ___ ti ho parlato.'" },
        options: ["di cui", "che", "di che", "cui di"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "relatives"],
    },
    {
      id: "pat-passato-remoto", type: "pattern", target: "parlò · andò · fu · ebbe · fece · disse",
      gloss: { es: "el passato remoto (reconocerlo)", en: "the passato remoto (recognising it)" },
      pattern: {
        rule: {
          es: "Es el pasado de los cuentos, la historia y los libros (en el sur también se habla). Como el pretérito del español: andò = fue, disse = dijo.",
          en: "The past tense of fairy tales, history and books (also spoken in the south). andò = went, fu = was, disse = said, fece = did.",
        },
        table: [["essere", "fu"], ["avere", "ebbe"], ["fare", "fece"], ["dire", "disse"], ["andare", "andò"], ["parlare", "parlò"]],
      },
      question: {
        prompt: { es: "En un cuento, «Pinocchio disse una bugia» significa…", en: "In a story, 'Pinocchio disse una bugia' means…" },
        options: [
          { es: "Pinocho dijo una mentira.", en: "Pinocchio told a lie." },
          { es: "Pinocho dirá una mentira.", en: "Pinocchio will tell a lie." },
          { es: "Pinocho dice una mentira.", en: "Pinocchio tells a lie." },
          { es: "Pinocho había dicho una verdad.", en: "Pinocchio had told the truth." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passato-remoto"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-cane", type: "listening",
      target: "Ieri sera tornavo a casa quando all'improvviso ho visto un cane in mezzo alla strada. Era solo e aveva freddo, così l'ho portato a casa.",
      gloss: {
        es: "Anoche volvía a casa cuando de repente vi un perro en medio de la calle. Estaba solo y tenía frío, así que me lo llevé a casa.",
        en: "Last night I was going home when suddenly I saw a dog in the middle of the road. It was alone and cold, so I took it home.",
      },
      question: {
        prompt: { es: "¿Qué hizo con el perro?", en: "What did the speaker do with the dog?" },
        options: [
          { es: "Se lo llevó a casa.", en: "Took it home." },
          { es: "Lo dejó en la calle.", en: "Left it in the street." },
          { es: "Llamó a la policía.", en: "Called the police." },
          { es: "Lo llevó al veterinario.", en: "Took it to the vet." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "stories"],
    },
    {
      id: "dlg-portafoglio", type: "dialogue", register: "informal", target: "Che fortuna!",
      gloss: { es: "¡Qué suerte!", en: "What luck!" },
      turns: [
        { who: "A", target: "Sai che cosa è successo a Paolo?", gloss: { es: "¿Sabes qué le pasó a Paolo?", en: "Do you know what happened to Paolo?" } },
        { who: "B", target: "No, dimmi!", gloss: { es: "No, ¡cuéntame!", en: "No, tell me!" } },
        { who: "A", target: "Aveva perso il portafoglio, ma una signora l'ha trovato e gliel'ha riportato.", gloss: { es: "Había perdido la billetera, pero una señora la encontró y se la devolvió.", en: "He'd lost his wallet, but a woman found it and brought it back to him." } },
        { who: "B", target: "Che fortuna!", gloss: { es: "¡Qué suerte!", en: "What luck!" } },
      ],
      question: {
        prompt: { es: "¿Qué pasó con la billetera de Paolo?", en: "What happened to Paolo's wallet?" },
        options: [
          { es: "Una señora la encontró y se la devolvió.", en: "A woman found it and returned it." },
          { es: "Se la robaron.", en: "It was stolen." },
          { es: "La encontró él mismo en casa.", en: "He found it himself at home." },
          { es: "Todavía no aparece.", en: "It still hasn't turned up." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "stories"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-raccontare", type: "bridge", onlyFor: "es", target: "raccontare",
      gloss: { es: "contar (una historia)", en: "to tell (a story)" },
      question: {
        prompt: { es: "«Contar un cuento» se dice…", en: "'To tell a story' is…" },
        options: ["raccontare una storia", "contare una storia", "contare un conto", "cantare una storia"],
        answer: 0,
      },
      note: { es: "contare = contar números (conto fino a dieci); raccontare = contar una historia." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
