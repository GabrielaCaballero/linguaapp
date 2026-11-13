import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u21",
  lang: "de",
  index: 21,
  cefr: "B2",
  title: { target: "Wissenschaft und Technik", es: "Ciencia y tecnología", en: "Science and technology" },
  canDo: [
    { es: "Puedo entender noticias de ciencia y hablar de tecnología cotidiana.", en: "I can understand science news and talk about everyday technology." },
    { es: "Puedo describir cosas de forma compacta (das gestern gekaufte Handy).", en: "I can describe things compactly (das gestern gekaufte Handy)." },
    { es: "Sé expresar posibilidad sin «man»: lässt sich, ist zu, -bar.", en: "I can express what can be done with lässt sich, ist zu, -bar." },
  ],
  icon: "🔬",
  items: build("de", 21, "B2", [
    // ── Science ──────────────────────────────────────────────
    {
      id: "forschung", type: "word", pos: "noun", target: "die Forschung", gender: "f", plural: "die Forschungen",
      gloss: { es: "la investigación (científica)", en: "research" },
      distractors: ["der Forschung", "die Förderung", "die Fälschung"],
      tags: ["science", "goethe-b2"],
    },
    {
      id: "forscher", type: "word", pos: "noun", target: "der Forscher", gender: "m", plural: "die Forscher",
      gloss: { es: "el investigador / la investigadora", en: "the researcher" },
      accept: [{ text: "die Forscherin" }],
      distractors: ["die Forscher", "der Förster", "der Fischer"],
      tags: ["science", "goethe-b2"],
    },
    {
      id: "entwicklung", type: "word", pos: "noun", target: "die Entwicklung", gender: "f", plural: "die Entwicklungen",
      gloss: { es: "el desarrollo", en: "the development" },
      distractors: ["der Entwicklung", "die Entwarnung", "die Verwicklung"],
      tags: ["science", "goethe-b1"],
    },
    {
      id: "entdeckung", type: "word", pos: "noun", target: "die Entdeckung", gender: "f", plural: "die Entdeckungen",
      gloss: { es: "el descubrimiento", en: "the discovery" },
      distractors: ["der Entdeckung", "die Bedeckung", "die Entfernung"],
      tags: ["science", "goethe-b2"],
    },
    {
      id: "erfinden", type: "word", pos: "verb", target: "erfinden",
      gloss: { es: "inventar", en: "to invent" },
      forms: { pp: "hat erfunden" },
      distractors: ["empfinden", "erfahren", "befinden"],
      tags: ["science", "goethe-b1"],
    },
    {
      id: "fortschritt", type: "word", pos: "noun", target: "der Fortschritt", gender: "m", plural: "die Fortschritte",
      gloss: { es: "el progreso, el avance", en: "the progress / advance" },
      distractors: ["die Fortschritt", "der Rückschritt", "der Schritt"],
      tags: ["science", "goethe-b2"],
    },
    {
      id: "nachweisen", type: "word", pos: "verb", target: "nachweisen",
      gloss: { es: "demostrar, comprobar", en: "to prove / demonstrate" },
      forms: { er: "weist nach", pp: "hat nachgewiesen" },
      distractors: ["nachweinen", "verweisen", "nachsehen"],
      tags: ["science", "goethe-b2"],
    },
    {
      id: "machbar", type: "word", pos: "adj", target: "machbar",
      gloss: { es: "factible, posible", en: "feasible / doable" },
      distractors: ["mächtig", "machtlos", "sachlich"],
      note: { es: "-bar = «que se puede…»: machbar, lesbar, essbar.", en: "-bar = '-able': machbar, lesbar, essbar." },
      tags: ["science", "word-formation"],
    },

    // ── Technology ───────────────────────────────────────────
    {
      id: "kuenstliche-intelligenz", type: "phrase", pos: "phrase", target: "künstliche Intelligenz",
      gloss: { es: "la inteligencia artificial", en: "artificial intelligence" },
      distractors: ["künstlerische Intelligenz", "kunstvolle Intelligenz", "künstliche Intelligent"],
      tags: ["technology"],
    },
    {
      id: "datenschutz", type: "word", pos: "other", target: "der Datenschutz",
      gloss: { es: "la protección de datos", en: "data protection / privacy" },
      distractors: ["der Datenschatz", "der Datensatz", "der Denkmalschutz"],
      tags: ["technology", "compound"],
    },
    {
      id: "herunterladen", type: "word", pos: "verb", target: "herunterladen",
      gloss: { es: "descargar (un archivo)", en: "to download" },
      forms: { er: "lädt herunter", pp: "hat heruntergeladen" },
      distractors: ["hochladen", "herunterfallen", "ausladen"],
      tags: ["technology", "separable"],
    },
    {
      id: "speichern", type: "word", pos: "verb", target: "speichern",
      gloss: { es: "guardar (datos)", en: "to save (data)" },
      distractors: ["sperren", "speisen", "spenden"],
      tags: ["technology"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "gestern-gekaufte-handy", type: "sentence", target: "Das gestern gekaufte Handy funktioniert nicht.",
      gloss: { es: "El celular que compré ayer no funciona.", en: "The phone I bought yesterday doesn't work." },
      accept: [{ text: "Das Handy, das ich gestern gekauft habe, funktioniert nicht." }],
      distractors: ["kaufte", "gekaufter", "funktionieren"],
      tags: ["participles"],
    },
    {
      id: "steigenden-preise", type: "sentence", target: "Die steigenden Preise machen vielen Menschen Sorgen.",
      gloss: { es: "Los precios en alza preocupan a mucha gente.", en: "Rising prices are worrying many people." },
      distractors: ["steigende", "Preis", "macht"],
      tags: ["participles"],
    },
    {
      id: "laesst-sich-loesen", type: "sentence", target: "Das Problem lässt sich leicht lösen.",
      gloss: { es: "El problema se puede resolver fácilmente.", en: "The problem can easily be solved." },
      accept: [{ text: "Das Problem kann leicht gelöst werden." }, { text: "Das Problem ist leicht zu lösen." }],
      distractors: ["löst", "lasst", "lösbar"],
      tags: ["passive-alternatives"],
    },
    {
      id: "daten-zu-speichern", type: "sentence", target: "Die Daten sind regelmäßig zu speichern.",
      gloss: { es: "Los datos deben guardarse con regularidad.", en: "The data must be saved regularly." },
      accept: [{ text: "Die Daten müssen regelmäßig gespeichert werden." }],
      distractors: ["gespeichert", "haben", "regelmäßige"],
      tags: ["passive-alternatives"],
    },
    {
      id: "medikament-entwickelt", type: "sentence", target: "Forscher haben ein neues Medikament entwickelt.",
      gloss: { es: "Unos investigadores desarrollaron un nuevo medicamento.", en: "Researchers have developed a new drug." },
      distractors: ["entwickeln", "sind", "neue"],
      tags: ["science"],
    },
    {
      id: "app-herunterladen", type: "sentence", target: "Diese App kann man kostenlos herunterladen.",
      gloss: { es: "Esta aplicación se puede descargar gratis.", en: "You can download this app for free." },
      accept: [{ text: "Diese App lässt sich kostenlos herunterladen." }, { text: "Man kann diese App kostenlos herunterladen." }],
      distractors: ["hochladen", "lädt", "kostenlose"],
      tags: ["technology"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-partizipialattribut", type: "pattern", target: "die steigenden Preise · das gestern gekaufte Handy",
      gloss: { es: "participios delante del sustantivo", en: "participles before the noun" },
      pattern: {
        rule: {
          es: "Partizip I (-end) = algo en curso, activo: die steigenden Preise. Partizip II = algo hecho, pasivo: das gekaufte Handy. Llevan terminación de adjetivo y pueden ampliarse: das gestern gekaufte Handy.",
          en: "Partizip I (-end) = ongoing, active: die steigenden Preise. Partizip II = done, passive: das gekaufte Handy. They take adjective endings and can be expanded: das gestern gekaufte Handy.",
        },
        table: [["Partizip I", "der ankommende Zug (el tren que llega)"], ["Partizip II", "der angekommene Zug (el tren que ya llegó)"]],
      },
      question: {
        prompt: { es: "«El tren que está llegando» es…", en: "'The arriving train' is…" },
        options: ["der ankommende Zug", "der angekommene Zug", "der ankommend Zug", "der Zug ankommend"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "participles"],
    },
    {
      id: "pat-passiversatz", type: "pattern", target: "lässt sich reparieren · ist zu reparieren · reparierbar",
      gloss: { es: "alternativas a la pasiva («se puede / se debe»)", en: "passive alternatives ('can / must be done')" },
      pattern: {
        rule: {
          es: "sich lassen + infinitivo = se puede (Das lässt sich ändern). sein + zu + infinitivo = se puede o se debe (Das ist bis Montag zu erledigen). Adjetivo en -bar = que se puede (machbar).",
          en: "sich lassen + infinitive = can be done (Das lässt sich ändern). sein + zu + infinitive = can or must be done (Das ist bis Montag zu erledigen). Adjective in -bar = -able (machbar).",
        },
        table: [["lässt sich", "Das Fenster lässt sich nicht öffnen."], ["ist zu", "Der Antrag ist online zu stellen."], ["-bar", "Das ist nicht machbar."]],
      },
      question: {
        prompt: { es: "«Esto no se puede reparar» es…", en: "'This can't be repaired' is…" },
        options: ["Das lässt sich nicht reparieren.", "Das lässt nicht reparieren.", "Das ist nicht reparieren.", "Das lässt sich nicht repariert."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passive-alternatives"],
    },
    {
      id: "pat-nominalisierung", type: "pattern", target: "entwickeln → die Entwicklung · lesen → das Lesen",
      gloss: { es: "verbos convertidos en sustantivos", en: "turning verbs into nouns" },
      pattern: {
        rule: {
          es: "El estilo escrito prefiere sustantivos: raíz + -ung (femenino): entwickeln → die Entwicklung. Cualquier infinitivo puede ser sustantivo neutro: das Lesen, beim Kochen.",
          en: "Written style prefers nouns: stem + -ung (feminine): entwickeln → die Entwicklung. Any infinitive can be a neuter noun: das Lesen, beim Kochen.",
        },
        table: [["entwickeln", "die Entwicklung"], ["forschen", "die Forschung"], ["entdecken", "die Entdeckung"], ["kochen", "beim Kochen"]],
      },
      question: {
        prompt: { es: "El sustantivo de la acción «entdecken» (descubrir) es…", en: "The action noun from 'entdecken' (discover) is…" },
        options: ["die Entdeckung", "das Entdeckung", "die Entdeckheit", "die Entdeckerei"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "word-formation"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-methode", type: "listening",
      target: "Forscher der Universität Heidelberg haben eine Methode entwickelt, mit der sich Krankheiten früher erkennen lassen. Die Ergebnisse wurden gestern veröffentlicht.",
      gloss: {
        es: "Investigadores de la Universidad de Heidelberg desarrollaron un método con el que se pueden detectar enfermedades antes. Los resultados se publicaron ayer.",
        en: "Researchers at Heidelberg University have developed a method that allows illnesses to be detected earlier. The results were published yesterday.",
      },
      question: {
        prompt: { es: "¿Para qué sirve el método?", en: "What does the method do?" },
        options: [
          { es: "Para detectar enfermedades antes", en: "Detect illnesses earlier" },
          { es: "Para curar enfermedades más rápido", en: "Cure illnesses faster" },
          { es: "Para fabricar medicamentos más baratos", en: "Make cheaper medicines" },
          { es: "Para publicar resultados", en: "Publish results" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "science"],
    },
    {
      id: "dlg-laptop", type: "dialogue", register: "informal", target: "Zum Glück ja.",
      gloss: { es: "Por suerte, sí.", en: "Luckily, yes." },
      turns: [
        { who: "A", target: "Mein Laptop ist schon wieder abgestürzt!", gloss: { es: "¡Mi laptop se colgó otra vez!", en: "My laptop's crashed again!" } },
        { who: "B", target: "Hast du deine Dateien gespeichert?", gloss: { es: "¿Guardaste tus archivos?", en: "Did you save your files?" } },
        { who: "A", target: "Zum Glück ja. Aber ich glaube, er lässt sich nicht mehr reparieren.", gloss: { es: "Por suerte, sí. Pero creo que ya no se puede reparar.", en: "Luckily, yes. But I don't think it can be repaired any more." } },
        { who: "B", target: "Dann wird es Zeit für einen neuen.", gloss: { es: "Entonces ya es hora de comprar una nueva.", en: "Then it's time for a new one." } },
      ],
      question: {
        prompt: { es: "¿A perdió sus archivos?", en: "Did A lose their files?" },
        options: [
          { es: "No, los había guardado.", en: "No, they'd been saved." },
          { es: "Sí, todos.", en: "Yes, all of them." },
          { es: "Solo algunos.", en: "Only some." },
          { es: "No lo sabe todavía.", en: "A doesn't know yet." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "technology"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-daten", type: "bridge", onlyFor: "en", target: "die Daten",
      gloss: { es: "los datos", en: "the data" },
      question: {
        prompt: { es: "«Die Daten sind auf dem Server gespeichert» significa…", en: "'Die Daten sind auf dem Server gespeichert' means…" },
        options: [
          { es: "Los datos están guardados en el servidor.", en: "The data is stored on the server." },
          { es: "Las citas están guardadas en el servidor.", en: "The appointments are stored on the server." },
          { es: "Los datos se borraron del servidor.", en: "The data was deleted from the server." },
          { es: "El servidor está apagado.", en: "The server is switched off." },
        ],
        answer: 0,
      },
      note: { en: "die Daten = data, though it's also the plural of das Datum (date); an appointment is der Termin." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "technology"],
    },
  ]),
};
