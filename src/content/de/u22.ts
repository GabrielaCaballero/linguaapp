import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u22",
  lang: "de",
  index: 22,
  cefr: "B2",
  title: { target: "Kultur", es: "Cultura", en: "Culture" },
  canDo: [
    { es: "Puedo hablar de libros, películas, exposiciones y obras de teatro, y recomendarlos.", en: "I can talk about and recommend books, films, exhibitions and plays." },
    { es: "Puedo hablar de lo que habría sido distinto y de lo que debería haber hecho.", en: "I can talk about what would have been different and what I should have done." },
    { es: "Sé usar el Konjunktiv II del pasado (hätte gemacht, wäre gegangen) y als ob.", en: "I can use past Konjunktiv II (hätte gemacht, wäre gegangen) and als ob." },
  ],
  icon: "🎭",
  items: build("de", 22, "B2", [
    // ── Culture words ────────────────────────────────────────
    {
      id: "ausstellung", type: "word", pos: "noun", target: "die Ausstellung", gender: "f", plural: "die Ausstellungen",
      gloss: { es: "la exposición (de arte)", en: "the exhibition" },
      distractors: ["der Ausstellung", "die Vorstellung", "die Einstellung"],
      note: { es: "die Vorstellung = la función o la idea; die Einstellung = la actitud.", en: "die Vorstellung = performance or idea; die Einstellung = attitude." },
      tags: ["culture", "goethe-b1"],
    },
    {
      id: "gemaelde", type: "word", pos: "noun", target: "das Gemälde", gender: "n", plural: "die Gemälde",
      gloss: { es: "el cuadro, la pintura", en: "the painting" },
      distractors: ["der Gemälde", "das Gelände", "das Gemüse"],
      tags: ["culture", "art"],
    },
    {
      id: "roman", type: "word", pos: "noun", target: "der Roman", gender: "m", plural: "die Romane",
      gloss: { es: "la novela", en: "the novel" },
      distractors: ["die Roman", "die Romanze", "der Römer"],
      tags: ["culture", "books", "goethe-b1"],
    },
    {
      id: "schriftsteller", type: "word", pos: "noun", target: "der Schriftsteller", gender: "m", plural: "die Schriftsteller",
      gloss: { es: "el escritor / la escritora", en: "the writer / author" },
      accept: [{ text: "die Schriftstellerin" }],
      distractors: ["die Schriftsteller", "der Schriftführer", "der Schreiner"],
      tags: ["culture", "books"],
    },
    {
      id: "theaterstueck", type: "word", pos: "noun", target: "das Theaterstück", gender: "n", plural: "die Theaterstücke",
      gloss: { es: "la obra de teatro", en: "the play" },
      distractors: ["der Theaterstück", "das Theater", "das Musikstück"],
      tags: ["culture", "theatre"],
    },
    {
      id: "auffuehrung", type: "word", pos: "noun", target: "die Aufführung", gender: "f", plural: "die Aufführungen",
      gloss: { es: "la función, la representación", en: "the performance (of a play)" },
      distractors: ["der Aufführung", "die Ausführung", "die Anführung"],
      tags: ["culture", "theatre"],
    },
    {
      id: "kritik", type: "word", pos: "noun", target: "die Kritik", gender: "f", plural: "die Kritiken",
      gloss: { es: "la crítica (reseña)", en: "the review / criticism" },
      distractors: ["der Kritik", "der Kritiker", "die Klinik"],
      tags: ["culture"],
    },
    {
      id: "beeindruckend", type: "word", pos: "adj", target: "beeindruckend",
      gloss: { es: "impresionante", en: "impressive" },
      distractors: ["beeindruckt", "bedrückend", "eindeutig"],
      note: { es: "beeindruckend = que impresiona; beeindruckt = impresionado (la persona).", en: "beeindruckend = impressive; beeindruckt = impressed (the person)." },
      tags: ["culture", "opinion"],
    },
    {
      id: "langweilig", type: "word", pos: "adj", target: "langweilig",
      gloss: { es: "aburrido/a (que aburre)", en: "boring" },
      distractors: ["langwierig", "langsam", "länglich"],
      tags: ["culture", "opinion", "goethe-a2"],
    },
    {
      id: "empfehlen", type: "word", pos: "verb", target: "empfehlen",
      gloss: { es: "recomendar", en: "to recommend" },
      forms: { er: "empfiehlt", pp: "hat empfohlen" },
      distractors: ["empfangen", "empfinden", "befehlen"],
      note: { es: "Ojo: befehlen = ordenar, mandar.", en: "Careful: befehlen = to order, command." },
      tags: ["culture", "goethe-b1"],
    },
    {
      id: "schade", type: "word", pos: "adj", target: "schade",
      gloss: { es: "una lástima, una pena", en: "a pity / a shame" },
      distractors: ["schaden", "schräg", "scharf"],
      note: { es: "«Wie schade» o «Schade» = qué lástima.", en: "'Wie schade' or 'Schade' = what a shame." },
      tags: ["culture", "goethe-a2"],
    },
    {
      id: "als-ob", type: "phrase", pos: "phrase", target: "als ob",
      gloss: { es: "como si", en: "as if" },
      accept: [{ text: "als wenn" }],
      distractors: ["wie ob", "als dass", "so ob"],
      tags: ["connectors", "konjunktiv2"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "waere-gern-gegangen", type: "sentence", target: "Ich wäre gern ins Konzert gegangen.",
      gloss: { es: "Me habría gustado ir al concierto.", en: "I'd have liked to go to the concert." },
      accept: [{ text: "Ich wäre gerne ins Konzert gegangen." }],
      errors: [{ text: "Ich hätte gern ins Konzert gegangen.", feedback: { es: "gehen va con sein: wäre … gegangen.", en: "gehen takes sein: wäre … gegangen." } }],
      distractors: ["hätte", "würde", "ging"],
      tags: ["konjunktiv2-past"],
    },
    {
      id: "frueher-losgefahren", type: "sentence", target: "Wenn wir früher losgefahren wären, hätten wir den Anfang gesehen.",
      gloss: { es: "Si hubiéramos salido antes, habríamos visto el comienzo.", en: "If we'd set off earlier, we'd have seen the beginning." },
      distractors: ["waren", "würden", "sahen"],
      tags: ["konjunktiv2-past"],
    },
    {
      id: "haettest-anrufen-sollen", type: "sentence", register: "informal", target: "Du hättest mich anrufen sollen.",
      gloss: { es: "Deberías haberme llamado.", en: "You should have called me." },
      errors: [{ text: "Du hättest mich anrufen gesollt.", feedback: { es: "Con un infinitivo, el modal va en infinitivo: anrufen sollen.", en: "With another infinitive, the modal stays an infinitive: anrufen sollen." } }],
      distractors: ["solltest", "angerufen", "gesollt"],
      tags: ["konjunktiv2-past", "modals"],
    },
    {
      id: "als-ob-er-alles-wuesste", type: "sentence", target: "Er tut so, als ob er alles wüsste.",
      gloss: { es: "Hace como si lo supiera todo.", en: "He acts as if he knew everything." },
      accept: [{ text: "Er tut so, als wüsste er alles." }, { text: "Er tut so, als wenn er alles wüsste." }],
      errors: [{ text: "Er tut so, als ob er alles weiß.", feedback: { es: "Comparación irreal: Konjunktiv II (wüsste).", en: "Unreal comparison: Konjunktiv II (wüsste)." } }],
      distractors: ["weiß", "wusste", "wie"],
      tags: ["konjunktiv2"],
    },
    {
      id: "stueck-beeindruckend", type: "sentence", target: "Das Theaterstück war beeindruckend.",
      gloss: { es: "La obra de teatro fue impresionante.", en: "The play was impressive." },
      distractors: ["beeindruckt", "ist", "Theater"],
      tags: ["culture"],
    },
    {
      id: "roman-empfehlen", type: "sentence", register: "informal", target: "Kannst du mir einen guten Roman empfehlen?",
      gloss: { es: "¿Me puedes recomendar una buena novela?", en: "Can you recommend a good novel?" },
      distractors: ["mich", "gute", "empfiehlst"],
      tags: ["culture", "books"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-konj2-vergangenheit", type: "pattern", target: "hätte gemacht · wäre gegangen",
      gloss: { es: "el Konjunktiv II del pasado", en: "past Konjunktiv II" },
      pattern: {
        rule: {
          es: "hätte / wäre + participio, para lo irreal en el pasado (habría…, hubiera…): Wenn ich Zeit gehabt hätte, wäre ich gekommen. El auxiliar es el mismo que en el Perfekt.",
          en: "hätte / wäre + participle, for unreal past events: Wenn ich Zeit gehabt hätte, wäre ich gekommen. The auxiliary is the same as in the Perfekt.",
        },
        table: [["haben", "ich hätte gemacht / gesehen"], ["sein", "ich wäre gegangen / gekommen"], ["Bedingung", "Wenn ich es gewusst hätte, …"]],
      },
      question: {
        prompt: { es: "Completa: «Wenn du gefragt ___, hätte ich dir geholfen.»", en: "Complete: 'Wenn du gefragt ___, hätte ich dir geholfen.'" },
        options: ["hättest", "wärst", "hast", "hattest"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "konjunktiv2-past"],
    },
    {
      id: "pat-doppelinfinitiv", type: "pattern", target: "Du hättest es sagen sollen.",
      gloss: { es: "debería haber… (hätte + dos infinitivos)", en: "should have … (hätte + double infinitive)" },
      pattern: {
        rule: {
          es: "Con un modal en el pasado irreal: hätte + infinitivo + modal en infinitivo al final: Du hättest früher kommen sollen / können / müssen.",
          en: "With a modal in the unreal past: hätte + infinitive + modal infinitive at the end: Du hättest früher kommen sollen / können / müssen.",
        },
        table: [["sollen", "Ich hätte mehr lernen sollen."], ["können", "Wir hätten gewinnen können."], ["müssen", "Er hätte anrufen müssen."]],
      },
      question: {
        prompt: { es: "«Deberías haberlo dicho» es…", en: "'You should have said it' is…" },
        options: ["Du hättest es sagen sollen.", "Du hättest es gesagt sollen.", "Du hättest es sagen gesollt.", "Du wärst es sagen sollen."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "konjunktiv2-past", "modals"],
    },
    {
      id: "pat-als-ob", type: "pattern", target: "als ob er krank wäre · als wäre er krank",
      gloss: { es: "als ob (como si)", en: "als ob (as if)" },
      pattern: {
        rule: {
          es: "Comparación irreal con Konjunktiv II: als ob + verbo al final (als ob er krank wäre) o als + verbo en 2.ª posición (als wäre er krank).",
          en: "Unreal comparison with Konjunktiv II: als ob + verb last (als ob er krank wäre) or als + verb straight after (als wäre er krank).",
        },
        table: [["als ob", "Sie tut so, als ob sie nichts wüsste."], ["als", "Sie tut so, als wüsste sie nichts."]],
      },
      question: {
        prompt: { es: "Completa: «Er tut so, als ob er krank ___.»", en: "Complete: 'Er tut so, als ob er krank ___.'" },
        options: ["wäre", "ist", "war", "werde"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "konjunktiv2"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-ausstellung", type: "listening",
      target: "Die Ausstellung zeigt mehr als hundert Gemälde aus dem neunzehnten Jahrhundert. Sie ist noch bis Ende März zu sehen; montags ist das Museum geschlossen.",
      gloss: {
        es: "La exposición muestra más de cien cuadros del siglo diecinueve. Se puede ver hasta fines de marzo; los lunes el museo está cerrado.",
        en: "The exhibition shows over a hundred nineteenth-century paintings. It runs until the end of March; the museum is closed on Mondays.",
      },
      question: {
        prompt: { es: "¿Qué día está cerrado el museo?", en: "When is the museum closed?" },
        options: [
          { es: "Los lunes", en: "On Mondays" },
          { es: "Los domingos", en: "On Sundays" },
          { es: "Todo marzo", en: "All of March" },
          { es: "Nunca", en: "Never" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "culture"],
    },
    {
      id: "dlg-film", type: "dialogue", register: "informal", target: "Wir hätten lieber ins Theater gehen sollen.",
      gloss: { es: "Mejor tendríamos que haber ido al teatro.", en: "We should have gone to the theatre instead." },
      turns: [
        { who: "A", target: "Wie war der Film gestern?", gloss: { es: "¿Qué tal la película ayer?", en: "How was the film yesterday?" } },
        { who: "B", target: "Ehrlich gesagt ziemlich langweilig. Wir hätten lieber ins Theater gehen sollen.", gloss: { es: "La verdad, bastante aburrida. Mejor tendríamos que haber ido al teatro.", en: "Honestly, pretty boring. We should have gone to the theatre instead." } },
        { who: "A", target: "Schade! Die Kritiken waren doch so gut.", gloss: { es: "¡Qué lástima! Y eso que las críticas eran tan buenas.", en: "What a shame! The reviews were so good, too." } },
      ],
      question: {
        prompt: { es: "¿Qué le pareció la película a B?", en: "What did B think of the film?" },
        options: [
          { es: "Bastante aburrida", en: "Pretty boring" },
          { es: "Impresionante", en: "Impressive" },
          { es: "Mejor que la obra de teatro", en: "Better than the play" },
          { es: "Igual que las críticas", en: "As good as the reviews" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "culture"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-roman", type: "bridge", onlyFor: "es", target: "der Roman",
      gloss: { es: "la novela", en: "the novel" },
      question: {
        prompt: { es: "«Sie schreibt einen Roman» significa…", en: "'Sie schreibt einen Roman' means…" },
        options: [
          { es: "Escribe una novela.", en: "She's writing a novel." },
          { es: "Escribe un romance.", en: "She's writing a love story." },
          { es: "Escribe sobre los romanos.", en: "She's writing about the Romans." },
          { es: "Escribe un poema.", en: "She's writing a poem." },
        ],
        answer: 0,
      },
      note: { es: "der Roman = la novela; un romance amoroso es «die Romanze» o «die Liebesgeschichte»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "books"],
    },
  ]),
};
