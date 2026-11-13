import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u23",
  lang: "de",
  index: 23,
  cefr: "B2",
  title: { target: "Diskutieren", es: "Debatir", en: "Debating" },
  canDo: [
    { es: "Puedo sopesar ventajas y desventajas y defender una postura.", en: "I can weigh up pros and cons and defend a position." },
    { es: "Puedo sonar natural con partículas como doch, ja, mal y eben.", en: "I can sound natural with particles like doch, ja, mal and eben." },
    { es: "Sé usar je … desto y las preposiciones con genitivo (wegen, trotz, während).", en: "I can use je … desto and genitive prepositions (wegen, trotz, während)." },
  ],
  icon: "⚖️",
  items: build("de", 23, "B2", [
    // ── Argument words ───────────────────────────────────────
    {
      id: "argument", type: "word", pos: "noun", target: "das Argument", gender: "n", plural: "die Argumente",
      gloss: { es: "el argumento (razón en un debate)", en: "the argument (point in a debate)" },
      distractors: ["der Argument", "das Dokument", "die Argumentation"],
      tags: ["argument", "goethe-b1"],
    },
    {
      id: "vorteil", type: "word", pos: "noun", target: "der Vorteil", gender: "m", plural: "die Vorteile",
      gloss: { es: "la ventaja", en: "the advantage" },
      distractors: ["die Vorteil", "das Vorurteil", "der Nachteil"],
      note: { es: "Ojo: das Vorurteil = el prejuicio.", en: "Careful: das Vorurteil = prejudice." },
      tags: ["argument", "goethe-b1"],
    },
    {
      id: "nachteil", type: "word", pos: "noun", target: "der Nachteil", gender: "m", plural: "die Nachteile",
      gloss: { es: "la desventaja", en: "the disadvantage" },
      distractors: ["die Nachteil", "der Nachtisch", "der Vorteil"],
      tags: ["argument", "goethe-b1"],
    },
    {
      id: "loesung", type: "word", pos: "noun", target: "die Lösung", gender: "f", plural: "die Lösungen",
      gloss: { es: "la solución", en: "the solution" },
      distractors: ["der Lösung", "die Löschung", "die Losung"],
      tags: ["argument", "goethe-b1"],
    },
    {
      id: "ueberzeugen", type: "word", pos: "verb", target: "überzeugen",
      gloss: { es: "convencer", en: "to convince" },
      forms: { pp: "hat überzeugt" },
      distractors: ["übersetzen", "überziehen", "übergeben"],
      note: { es: "Inseparable: ich überzeuge, überzeugt (sin ge-). Ich bin überzeugt = estoy convencido/a.", en: "Inseparable: ich überzeuge, überzeugt (no ge-). Ich bin überzeugt = I'm convinced." },
      tags: ["argument", "goethe-b1"],
    },
    {
      id: "zugeben", type: "word", pos: "verb", target: "zugeben",
      gloss: { es: "admitir, reconocer", en: "to admit" },
      forms: { er: "gibt zu", pp: "hat zugegeben" },
      distractors: ["zugehen", "abgeben", "umgeben"],
      tags: ["argument", "separable"],
    },
    {
      id: "je-desto", type: "phrase", pos: "phrase", target: "je … desto",
      gloss: { es: "cuanto más … más", en: "the more … the more" },
      accept: [{ text: "je … umso" }],
      distractors: ["je … dann", "so … desto", "je … als"],
      tags: ["connectors"],
    },
    {
      id: "einerseits-andererseits", type: "phrase", pos: "phrase", target: "einerseits … andererseits",
      gloss: { es: "por un lado … por otro", en: "on the one hand … on the other" },
      distractors: ["einseits … andererseits", "einerseits … zweitens", "erstens … andererseits"],
      tags: ["connectors", "argument"],
    },

    // ── Genitive prepositions ────────────────────────────────
    {
      id: "wegen", type: "word", pos: "prep", target: "wegen",
      gloss: { es: "por, a causa de", en: "because of" },
      distractors: ["weg", "gegen", "wogegen"],
      tags: ["prepositions", "genitive", "goethe-a2"],
    },
    {
      id: "trotz", type: "word", pos: "prep", target: "trotz",
      gloss: { es: "a pesar de", en: "despite / in spite of" },
      distractors: ["trotzdem", "statt", "trocken"],
      note: { es: "trotz + sustantivo (trotz des Regens); trotzdem es adverbio (aun así).", en: "trotz + noun (trotz des Regens); trotzdem is an adverb (still)." },
      tags: ["prepositions", "genitive", "goethe-b1"],
    },
    {
      id: "waehrend", type: "word", pos: "prep", target: "während",
      gloss: { es: "durante / mientras", en: "during / while" },
      distractors: ["seitdem", "nachdem", "wenn"],
      tags: ["prepositions", "genitive", "goethe-b1"],
    },
    {
      id: "aufgrund", type: "word", pos: "prep", target: "aufgrund",
      gloss: { es: "debido a", en: "due to / owing to" },
      accept: [{ text: "auf Grund" }],
      distractors: ["zugrunde", "gründlich", "aufwärts"],
      tags: ["prepositions", "genitive", "formal"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-mehr-desto-besser", type: "sentence", target: "Je mehr ich lese, desto besser verstehe ich.",
      gloss: { es: "Cuanto más leo, mejor entiendo.", en: "The more I read, the better I understand." },
      accept: [{ text: "Je mehr ich lese, umso besser verstehe ich." }],
      errors: [{ text: "Je mehr ich lese, desto ich verstehe besser.", feedback: { es: "desto + comparativo + verbo: desto besser verstehe ich.", en: "desto + comparative + verb: desto besser verstehe ich." } }],
      distractors: ["dann", "lesen", "gut"],
      tags: ["connectors", "word-order"],
    },
    {
      id: "wegen-des-streiks", type: "sentence", target: "Wegen des Streiks fällt der Unterricht aus.",
      gloss: { es: "Por la huelga, se suspenden las clases.", en: "Because of the strike, classes are cancelled." },
      accept: [{ text: "Wegen dem Streik fällt der Unterricht aus.", verdict: "almost", feedback: { es: "Coloquial; en lengua escrita: wegen des Streiks (genitivo).", en: "Colloquial; written German: wegen des Streiks (genitive)." } }],
      distractors: ["den", "Streik", "ausfällt"],
      tags: ["genitive"],
    },
    {
      id: "trotz-des-regens", type: "sentence", target: "Trotz des Regens sind wir spazieren gegangen.",
      gloss: { es: "A pesar de la lluvia, salimos a caminar.", en: "Despite the rain, we went for a walk." },
      accept: [{ text: "Trotz dem Regen sind wir spazieren gegangen.", verdict: "almost", feedback: { es: "Coloquial; en lengua escrita: trotz des Regens.", en: "Colloquial; written German: trotz des Regens." } }],
      distractors: ["Trotzdem", "den", "haben"],
      tags: ["genitive"],
    },
    {
      id: "doch-nicht-so-schlimm", type: "phrase", pos: "phrase", target: "Das ist doch nicht so schlimm!",
      gloss: { es: "¡Pero si no es tan grave!", en: "It's really not that bad!" },
      distractors: ["Das doch ist nicht so schlimm!", "Das ist doch so nicht schlimm!", "Das ist doch nicht so schlimmer!"],
      tags: ["particles", "chunk"],
    },
    {
      id: "muss-zugeben", type: "sentence", register: "informal", target: "Ich muss zugeben, dass du recht hast.",
      gloss: { es: "Tengo que admitir que tienes razón.", en: "I have to admit you're right." },
      distractors: ["zugebe", "das", "hat"],
      tags: ["argument"],
    },
    {
      id: "einerseits-teuer", type: "sentence", target: "Einerseits ist es teuer, andererseits spart man Zeit.",
      gloss: { es: "Por un lado es caro; por otro, se ahorra tiempo.", en: "On the one hand it's expensive; on the other, it saves time." },
      distractors: ["Erstens", "sparen", "Zeiten"],
      tags: ["argument", "connectors"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-je-desto", type: "pattern", target: "Je früher, desto besser.",
      gloss: { es: "je … desto (cuanto más… más)", en: "je … desto (the more… the more)" },
      pattern: {
        rule: {
          es: "je + comparativo + … + verbo al final, desto (o umso) + comparativo + verbo + sujeto: Je länger ich warte, desto nervöser werde ich.",
          en: "je + comparative + … + verb last, then desto (or umso) + comparative + verb + subject: Je länger ich warte, desto nervöser werde ich.",
        },
        table: [["je + Komparativ … Verb", "Je mehr du übst,"], ["desto + Komparativ + Verb", "desto sicherer wirst du."]],
      },
      question: {
        prompt: { es: "Elige: «Je früher wir losfahren, …»", en: "Choose: 'Je früher wir losfahren, …'" },
        options: ["desto schneller sind wir da.", "desto wir sind schneller da.", "desto schneller wir sind da.", "dann schneller sind wir da."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "connectors"],
    },
    {
      id: "pat-genitiv-praep", type: "pattern", target: "wegen des Wetters · trotz der Kosten · während des Urlaubs",
      gloss: { es: "preposiciones con genitivo", en: "prepositions with the genitive" },
      pattern: {
        rule: {
          es: "wegen, trotz, während, statt, aufgrund, innerhalb llevan genitivo en la lengua escrita: des (m/n, + -s), der (f/pl). Al hablar se oye a menudo el dativo.",
          en: "wegen, trotz, während, statt, aufgrund, innerhalb take the genitive in writing: des (m/n, + -s), der (f/pl). In speech you'll often hear the dative.",
        },
        table: [["m / n", "wegen des Regens · während des Films"], ["f", "trotz der Kälte"], ["pl", "aufgrund der hohen Kosten"]],
      },
      question: {
        prompt: { es: "Completa: «Während ___ Urlaubs habe ich viel gelesen.» (der Urlaub)", en: "Complete: 'Während ___ Urlaubs habe ich viel gelesen.' (der Urlaub)" },
        options: ["des", "dem", "den", "der"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "genitive"],
    },
    {
      id: "pat-modalpartikeln", type: "pattern", target: "doch · ja · mal · eben / halt",
      gloss: { es: "partículas modales", en: "modal particles" },
      pattern: {
        rule: {
          es: "No se traducen, dan tono: doch (contradice o insiste: Komm doch!), ja (algo sabido: Das ist ja toll!), mal (suaviza un pedido: Kannst du mal helfen?), eben / halt (resignación: Das ist eben so).",
          en: "They add tone, not content: doch (insists or contradicts: Komm doch!), ja (shared knowledge: Das ist ja toll!), mal (softens a request: Kannst du mal helfen?), eben / halt (resignation: Das ist eben so).",
        },
        table: [["doch", "Komm doch mit!"], ["ja", "Du bist ja schon da!"], ["mal", "Schau mal!"], ["eben / halt", "Dann nehmen wir eben den Bus."]],
      },
      question: {
        prompt: { es: "¿Qué partícula suaviza el pedido? «Kannst du ___ das Fenster aufmachen?»", en: "Which particle softens the request? 'Kannst du ___ das Fenster aufmachen?'" },
        options: ["mal", "ja", "denn", "zwar"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "particles"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-homeoffice", type: "listening",
      target: "Einerseits ist das Homeoffice praktisch, weil man keine Zeit im Verkehr verliert. Andererseits fehlt vielen der Kontakt zu den Kollegen.",
      gloss: {
        es: "Por un lado, el teletrabajo es práctico porque no se pierde tiempo en el tráfico. Por otro, a muchos les falta el contacto con los colegas.",
        en: "On the one hand, working from home is practical because you don't waste time in traffic. On the other, many people miss contact with colleagues.",
      },
      question: {
        prompt: { es: "¿Qué desventaja menciona?", en: "What drawback is mentioned?" },
        options: [
          { es: "Falta el contacto con los colegas.", en: "People miss contact with colleagues." },
          { es: "Se pierde tiempo en el tráfico.", en: "You waste time in traffic." },
          { es: "Es poco práctico.", en: "It's impractical." },
          { es: "Se gana menos.", en: "You earn less." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "argument"],
    },
    {
      id: "dlg-auto-verkaufen", type: "dialogue", register: "informal", target: "Dann mieten wir eben eins.",
      gloss: { es: "Pues alquilamos uno y listo.", en: "Then we'll just rent one." },
      turns: [
        { who: "A", target: "Wir sollten das Auto verkaufen. Wir fahren doch fast nur Fahrrad.", gloss: { es: "Deberíamos vender el auto. Si casi solo andamos en bicicleta.", en: "We should sell the car. We hardly do anything but cycle anyway." } },
        { who: "B", target: "Da hast du eigentlich recht. Aber was machen wir im Urlaub?", gloss: { es: "En eso tienes razón. ¿Pero qué hacemos en las vacaciones?", en: "You're actually right. But what do we do on holiday?" } },
        { who: "A", target: "Dann mieten wir eben eins.", gloss: { es: "Pues alquilamos uno y listo.", en: "Then we'll just rent one." } },
      ],
      question: {
        prompt: { es: "¿Qué propone A para las vacaciones?", en: "What does A suggest for the holidays?" },
        options: [
          { es: "Alquilar un auto", en: "Rent a car" },
          { es: "Ir en bicicleta", en: "Go by bike" },
          { es: "Quedarse en casa", en: "Stay at home" },
          { es: "No vender el auto", en: "Keep the car" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "particles"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-argument", type: "bridge", onlyFor: "en", target: "das Argument",
      gloss: { es: "el argumento (razón)", en: "the argument (point, reason)" },
      question: {
        prompt: { es: "«Wir hatten gestern einen Streit» significa…", en: "'Wir hatten gestern einen Streit' means…" },
        options: [
          { es: "Ayer tuvimos una pelea.", en: "We had an argument (a row) yesterday." },
          { es: "Ayer tuvimos un buen argumento.", en: "We had a good point yesterday." },
          { es: "Ayer tuvimos una reunión.", en: "We had a meeting yesterday." },
          { es: "Ayer tuvimos una huelga.", en: "We had a strike yesterday." },
        ],
        answer: 0,
      },
      note: { en: "das Argument = a point in a debate; a row or quarrel is der Streit." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
