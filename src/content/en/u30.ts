import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u30",
  lang: "en",
  index: 30,
  cefr: "C1",
  title: { target: "Culture, art and style", es: "Cultura, arte y estilo", en: "Culture, art and style" },
  canDo: [
    { es: "Puedo hablar de arte, libros y cine con matices y vocabulario preciso.", en: "I can talk about art, books and film with nuance and precise vocabulary." },
    { es: "Puedo escribir una reseña o un texto formal con un estilo variado y elegante.", en: "I can write a review or formal text in a varied, polished style." },
    { es: "Sé usar el subjuntivo inglés (I suggest that he be…) y las oraciones de participio (Having finished…, Written in 1950…).", en: "I can use the English subjunctive (I suggest that he be…) and participle clauses (Having finished…, Written in 1950…)." },
  ],
  icon: "🎭",
  items: build("en", 30, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "masterpiece", type: "word", target: "masterpiece", plural: "masterpieces",
      gloss: { es: "obra maestra", en: "masterpiece" },
      distractors: ["master piece's", "mastermind", "masterclass"],
      tags: ["art"],
    },
    {
      id: "plot", type: "word", target: "plot", plural: "plots",
      gloss: { es: "argumento, trama (de una novela o película)", en: "plot" },
      distractors: ["argument", "pilot", "plod"],
      note: { es: "«argument» es una discusión o un razonamiento; la trama es «the plot»." },
      tags: ["art", "books", "false-friend"],
    },
    {
      id: "thought-provoking", type: "word", pos: "adj", target: "thought-provoking",
      gloss: { es: "que invita a reflexionar", en: "thought-provoking" },
      distractors: ["thought-provoked", "provocative", "thoughtful"],
      tags: ["art", "opinions"],
    },
    {
      id: "overrated", type: "word", pos: "adj", target: "overrated",
      gloss: { es: "sobrevalorado/a", en: "overrated" },
      distractors: ["underrated", "overdated", "overreacted"],
      tags: ["art", "opinions"],
    },
    {
      id: "groundbreaking", type: "word", pos: "adj", target: "groundbreaking",
      gloss: { es: "innovador/a, revolucionario/a", en: "groundbreaking" },
      accept: [{ text: "ground-breaking" }],
      distractors: ["breakground", "heartbreaking", "earthshaking's"],
      tags: ["art"],
    },
    {
      id: "nuanced", type: "word", pos: "adj", target: "nuanced",
      gloss: { es: "lleno/a de matices, sutil", en: "nuanced" },
      distractors: ["nuance", "announced", "nuisanced"],
      tags: ["art", "style"],
    },
    {
      id: "stand-out", type: "word", pos: "verb", target: "stand out",
      gloss: { es: "destacarse, sobresalir", en: "to stand out" },
      distractors: ["stand up", "outstand", "stand off"],
      note: { es: "El adjetivo es «outstanding» (excepcional)." },
      tags: ["art", "phrasal-verbs"],
    },
    {
      id: "be-moved", type: "phrase", pos: "phrase", target: "be deeply moved",
      gloss: { es: "conmoverse profundamente", en: "to be deeply moved" },
      distractors: ["be deeply moving", "be deep moved", "be deeply emotioned"],
      errors: [{ text: "be deeply emotioned", feedback: { es: "«emocionarse» es «be moved» o «be touched»; «emotioned» no existe." } }],
      tags: ["art", "emotions"],
    },
    {
      id: "it-is-essential-that", type: "phrase", pos: "phrase", target: "It is essential that…",
      gloss: { es: "Es fundamental que…", en: "It is essential that…" },
      accept: [{ text: "It's essential that…" }, { text: "It is vital that…" }],
      distractors: ["It is essentially that…", "Is essential that…", "It is essential than…"],
      grammar: ["en-g-subjunctive"],
      tags: ["formal", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-suggest-that-he-be", type: "sentence", target: "The committee recommended that the museum be renovated.",
      gloss: { es: "El comité recomendó que se renovara el museo.", en: "The committee recommended that the museum be renovated." },
      accept: [{ text: "The committee recommended that the museum should be renovated." }, { text: "The committee recommended renovating the museum." }],
      errors: [{ text: "The committee recommended the museum to be renovated.", feedback: { es: "Con recommend / suggest: that + sujeto + verbo base (be), o -ing." }, ruleId: "en-g-subjunctive" }],
      distractors: ["is", "was", "to"],
      grammar: ["en-g-subjunctive"],
      annot: { be: { es: "subjuntivo: forma base para todas las personas", en: "subjunctive: base form for every person" } },
      tags: ["formal", "subjunctive", "art"],
    },
    {
      id: "it-is-vital-that-she", type: "sentence", target: "It is vital that she arrive on time for the premiere.",
      gloss: { es: "Es fundamental que llegue a tiempo al estreno.", en: "It is vital that she arrive on time for the premiere." },
      accept: [{ text: "It is vital that she arrives on time for the premiere." }, { text: "It is vital that she should arrive on time for the premiere." }],
      distractors: ["arrived", "will", "in"],
      grammar: ["en-g-subjunctive"],
      note: { es: "En inglés americano formal se prefiere el subjuntivo sin -s (that she arrive); en conversación, «arrives» también se oye." },
      tags: ["formal", "subjunctive"],
    },
    {
      id: "having-finished", type: "sentence", target: "Having finished the novel, she started writing the screenplay.",
      gloss: { es: "Después de terminar la novela, empezó a escribir el guion.", en: "Having finished the novel, she started writing the screenplay." },
      accept: [{ text: "After finishing the novel, she started writing the screenplay." }, { text: "After she had finished the novel, she started writing the screenplay." }],
      errors: [{ text: "Having finish the novel, she started writing the screenplay.", feedback: { es: "Having + participio: Having finished." }, ruleId: "en-g-participle-clauses" }],
      distractors: ["Have", "finish", "script's"],
      grammar: ["en-g-participle-clauses"],
      annot: { "Having finished": { es: "participio perfecto: acción anterior (después de haber terminado)", en: "perfect participle: earlier action" } },
      tags: ["style", "participle-clauses", "books"],
    },
    {
      id: "written-in-1950", type: "sentence", target: "Written in 1950, the play still feels surprisingly modern.", spoken: "Written in nineteen fifty, the play still feels surprisingly modern.",
      gloss: { es: "Escrita en 1950, la obra todavía resulta sorprendentemente moderna.", en: "Written in 1950, the play still feels surprisingly modern." },
      accept: [{ text: "Although it was written in 1950, the play still feels surprisingly modern." }],
      distractors: ["Writing", "Wrote", "feel"],
      grammar: ["en-g-participle-clauses"],
      tags: ["style", "participle-clauses", "art"],
    },
    {
      id: "not-knowing-what-to-say", type: "sentence", target: "Not knowing what to say, I just smiled.",
      gloss: { es: "Como no sabía qué decir, simplemente sonreí.", en: "Not knowing what to say, I just smiled." },
      accept: [{ text: "Because I didn't know what to say, I just smiled." }],
      distractors: ["Don't", "knew", "smile"],
      grammar: ["en-g-participle-clauses"],
      tags: ["style", "participle-clauses"],
    },
    {
      id: "what-stands-out", type: "sentence", target: "What stands out in her work is the use of light.",
      gloss: { es: "Lo que destaca en su obra es el uso de la luz.", en: "What stands out in her work is the use of light." },
      distractors: ["That", "are", "stand"],
      grammar: ["en-g-cleft"],
      tags: ["art", "cleft"],
    },
    {
      id: "overrated-sentence", type: "sentence", target: "Critics loved it, but I found it a bit overrated.",
      gloss: { es: "A la crítica le encantó, pero a mí me pareció algo sobrevalorada.", en: "Critics loved it, but I found it a bit overrated." },
      accept: [{ text: "The critics loved it, but I found it a bit overrated." }, { text: "Critics loved it, but I thought it was a bit overrated." }, { text: "Critics loved it, but I found it a little overrated." }],
      distractors: ["founded", "few", "underrated"],
      tags: ["art", "opinions"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-subjunctive", type: "pattern", target: "suggest / insist / recommend that + sujeto + verbo base",
      gloss: { es: "el subjuntivo inglés", en: "the English subjunctive" },
      pattern: {
        rule: {
          es: "Tras verbos y expresiones de exigencia o recomendación (suggest, insist, recommend, demand, it is essential / vital that), el inglés formal usa la forma base del verbo para todas las personas: that he be, that she arrive, that they not leave. Es más común en inglés americano; en británico se usa «should».",
          en: "After verbs and expressions of demand or recommendation (suggest, insist, recommend, demand, it is essential / vital that), formal English uses the base form for every person: that he be, that she arrive, that they not leave. It's more common in American English; British English often uses 'should'.",
        },
        table: [["expresión", "subjuntivo"], ["I suggest that he…", "…be more careful."], ["They insisted that she…", "…stay for dinner."], ["It's vital that we…", "…not miss the deadline."]],
      },
      question: {
        prompt: { es: "Completa (registro formal): «The doctor insisted that he ___ smoking.»", en: "Complete (formal): 'The doctor insisted that he ___ smoking.'" },
        options: ["stop", "stops", "stopped", "to stop"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-subjunctive"], tags: ["grammar", "subjunctive", "formal"],
    },
    {
      id: "pat-participle-clauses", type: "pattern", target: "Having finished… · Written in… · Not knowing…",
      gloss: { es: "oraciones de participio", en: "participle clauses" },
      pattern: {
        rule: {
          es: "Una oración de participio reemplaza a una subordinada para un estilo más compacto. -ing (Walking home, I…) = acción simultánea o causa; having + participio (Having eaten, we…) = acción anterior; participio solo (Written in 1950, …) = sentido pasivo. El sujeto debe ser el mismo que el de la oración principal.",
          en: "A participle clause replaces a subordinate clause for a more compact style. -ing (Walking home, I…) = simultaneous action or reason; having + participle (Having eaten, we…) = earlier action; participle alone (Written in 1950, …) = passive meaning. The subject must match the main clause.",
        },
        table: [["subordinada", "participio"], ["Because I felt tired, I…", "Feeling tired, I…"], ["After she had read it, she…", "Having read it, she…"], ["The book, which was written in…", "Written in…, the book…"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Having lived in Mexico, she speaks fluent Spanish.", "Having live in Mexico, she speaks fluent Spanish.", "Lived in Mexico, she speaks fluent Spanish.", "Having lived in Mexico, fluent Spanish is spoken by her."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-participle-clauses"], tags: ["grammar", "participle-clauses", "style"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-exhibition", type: "dialogue", target: "I found it thought-provoking.",
      gloss: { es: "Me pareció que invitaba a reflexionar.", en: "I found it thought-provoking." },
      turns: [
        { who: "A", target: "So, what did you make of the exhibition?", gloss: { es: "¿Y qué te pareció la exposición?", en: "So, what did you make of the exhibition?" } },
        { who: "B", target: "Honestly, I found it thought-provoking. The way she uses light really stands out.", gloss: { es: "La verdad, me pareció que invitaba a reflexionar. La forma en que usa la luz realmente destaca.", en: "Honestly, I found it thought-provoking. The way she uses light really stands out." } },
        { who: "A", target: "Really? I thought it was a bit overrated. Having read all the reviews, I expected more.", gloss: { es: "¿En serio? A mí me pareció algo sobrevalorada. Después de leer todas las reseñas, esperaba más.", en: "Really? I thought it was a bit overrated. Having read all the reviews, I expected more." } },
        { who: "B", target: "Fair enough. Mind you, the last room was groundbreaking. I was deeply moved.", gloss: { es: "Es razonable. Eso sí, la última sala era revolucionaria. Me conmovió profundamente.", en: "Fair enough. Mind you, the last room was groundbreaking. I was deeply moved." } },
      ],
      question: {
        prompt: { es: "¿Por qué A esperaba más de la exposición?", en: "Why did A expect more from the exhibition?" },
        options: [
          { es: "Había leído todas las reseñas", en: "A had read all the reviews" },
          { es: "Conocía a la artista", en: "A knew the artist" },
          { es: "La entrada era muy cara", en: "The ticket was very expensive" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "art", "opinions"],
    },
    {
      id: "lis-review", type: "listening", target: "Set in a small Mexican town in the nineteen-fifties, the film is a nuanced portrait of a family torn apart by secrets. Beautifully shot and brilliantly acted, it is nothing short of a masterpiece.",
      gloss: { es: "Ambientada en un pueblo mexicano en los años cincuenta, la película es un retrato lleno de matices de una familia destrozada por los secretos. Con una fotografía bellísima y actuaciones brillantes, es ni más ni menos que una obra maestra.", en: "Set in a small Mexican town in the nineteen-fifties, the film is a nuanced portrait of a family torn apart by secrets. Beautifully shot and brilliantly acted, it is nothing short of a masterpiece." },
      question: {
        prompt: { es: "¿Cuál es la opinión del crítico?", en: "What is the critic's opinion?" },
        options: [
          { es: "Le parece una obra maestra", en: "It's a masterpiece" },
          { es: "Le parece sobrevalorada", en: "It's overrated" },
          { es: "Le gusta la historia pero no las actuaciones", en: "Good story, weak acting" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "art", "participle-clauses"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-sensitive", type: "bridge", onlyFor: "es", target: "sensitive",
      gloss: { es: "sensible (que se emociona o se ofende fácil)", en: "sensitive" },
      question: {
        prompt: { es: "Un artista muy sensible (emotivo) es…", en: "An artist who feels things deeply is…" },
        options: ["a very sensitive artist", "a very sensible artist", "a very sensual artist"],
        answer: 0,
      },
      note: { es: "sensitive = sensible (emotivo/a); sensible = sensato/a. Un tema delicado también es «a sensitive topic»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "art"],
    },
    {
      id: "br-novel", type: "bridge", onlyFor: "es", target: "soap opera",
      gloss: { es: "telenovela", en: "soap opera" },
      question: {
        prompt: { es: "«She's reading a novel» significa que lee…", en: "'She's reading a novel' means she's reading…" },
        options: [
          { es: "una novela (libro)", en: "a book of fiction" },
          { es: "una telenovela", en: "a soap opera script" },
          { es: "una noticia nueva", en: "a new piece of news" },
        ],
        answer: 0,
      },
      note: { es: "novel = novela (libro); la telenovela es «soap opera» o, para las latinas, «telenovela»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "art"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "exhibition", type: "word", target: "exhibition",
      gloss: { es: "exposición (de arte)", en: "exhibition" },
      accept: [{ text: "exhibit" }],
      distractors: ["exposition's", "exhibit's", "inhibition"],
      note: { es: "«exposure» es exposición al sol o al riesgo; la muestra de arte es «exhibition»." },
      tags: ["art"],
    },
    {
      id: "review", type: "word", target: "review",
      gloss: { es: "reseña, crítica", en: "review" },
      distractors: ["revue", "preview", "revision"],
      tags: ["art", "books"],
    },
    {
      id: "audience", type: "word", target: "audience",
      gloss: { es: "público (de un espectáculo)", en: "audience" },
      distractors: ["audition", "audiencing", "public's"],
      note: { es: "«the public» es la gente en general; los espectadores son «the audience»." },
      tags: ["art"],
    },
  ]),
};
