import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u02",
  lang: "de",
  index: 2,
  cefr: "A1.1",
  title: { target: "Woher kommst du?", es: "¿De dónde eres?", en: "Where are you from?" },
  canDo: [
    { es: "Puedo decir de dónde soy y dónde vivo.", en: "I can say where I'm from and where I live." },
    { es: "Puedo decir qué idiomas hablo y preguntarlo, de «du» y de «Sie».", en: "I can say which languages I speak and ask others, with du and Sie." },
    { es: "Sé poner el verbo en segunda posición.", en: "I can put the verb in second position." },
  ],
  icon: "🗺️",
  items: build("de", 2, "A1.1", [
    // ── Questions & answers ──────────────────────────────────
    {
      id: "woher-kommst-du", type: "phrase", pos: "phrase", target: "Woher kommst du?", register: "informal",
      gloss: { es: "¿De dónde eres?", en: "Where are you from? (informal)" },
      distractors: ["Wo wohnst du?", "Woher kommen Sie?", "Wohin gehst du?"],
      note: { es: "woher = de dónde; wo = dónde; wohin = adónde.", en: "woher = where from; wo = where; wohin = where to." },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "woher-kommen-sie", type: "phrase", pos: "phrase", target: "Woher kommen Sie?", register: "formal",
      gloss: { es: "¿De dónde es (usted)?", en: "Where are you from? (formal)" },
      distractors: ["Woher kommst du?", "Wo wohnen Sie?", "Wie heißen Sie?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "ich-komme", legacyId: "de-komme", type: "sentence", target: "Ich komme aus Spanien.",
      gloss: { es: "Soy de España.", en: "I come from Spain." },
      errors: [
        { text: "Komme aus Spanien.", feedback: { es: "En alemán el pronombre es obligatorio: Ich komme…", en: "German needs the subject pronoun: Ich komme…" } },
        { text: "Ich komme von Spanien.", feedback: { es: "Para países y ciudades se usa «aus»: Ich komme aus Spanien.", en: "For countries and cities use 'aus': Ich komme aus Spanien." } },
      ],
      distractors: ["Ich komme von Spanien.", "Ich kommt aus Spanien.", "Ich komme in Spanien."],
      tags: ["introductions"],
    },
    {
      id: "ich-wohne", legacyId: "de-wohne", type: "sentence", target: "Ich wohne in Berlin.",
      gloss: { es: "Vivo en Berlín.", en: "I live in Berlin." },
      accept: [{ text: "Ich lebe in Berlin." }],
      distractors: ["Ich wohne nach Berlin.", "Ich wohnt in Berlin.", "Ich wohne aus Berlin."],
      tags: ["introductions"],
    },
    {
      id: "wo-wohnst-du", type: "phrase", pos: "phrase", target: "Wo wohnst du?", register: "informal",
      gloss: { es: "¿Dónde vives?", en: "Where do you live? (informal)" },
      distractors: ["Woher wohnst du?", "Wo wohnen Sie?", "Wer wohnt da?"],
      note: { es: "Con «Sie»: «Wo wohnen Sie?».", en: "With Sie: 'Wo wohnen Sie?'" },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "ich-spreche", legacyId: "de-spreche", type: "sentence", target: "Ich spreche Spanisch und Englisch.",
      gloss: { es: "Hablo español e inglés.", en: "I speak Spanish and English." },
      distractors: ["Ich sprechen Spanisch und Englisch.", "Ich spricht Spanisch und Englisch.", "Ich spreche Spanien und England."],
      note: { es: "Los idiomas son sustantivos y van con mayúscula: Deutsch, Spanisch.", en: "Languages are nouns, so they're capitalised: Deutsch, Englisch." },
      tags: ["languages"],
    },
    {
      id: "sprechen-sie", legacyId: "de-sprechensie", type: "phrase", pos: "phrase", target: "Sprechen Sie Englisch?", register: "formal",
      gloss: { es: "¿Habla inglés? (formal)", en: "Do you speak English? (formal)" },
      distractors: ["Sprichst du Englisch?", "Spricht Sie Englisch?", "Sprechen Sie England?"],
      note: { es: "«Sie» con mayúscula = usted. En preguntas de sí/no, el verbo va primero.", en: "Sie (capital S) = formal you. In yes/no questions the verb comes first." },
      tags: ["languages", "register", "chunk"],
    },
    {
      id: "sprichst-du", type: "phrase", pos: "phrase", target: "Sprichst du Deutsch?", register: "informal",
      gloss: { es: "¿Hablas alemán?", en: "Do you speak German? (informal)" },
      errors: [{
        text: "Sprechst du Deutsch?",
        feedback: { es: "«sprechen» cambia la vocal: du sprichst, er spricht.", en: "'sprechen' changes its vowel: du sprichst, er spricht." },
      }],
      distractors: ["Sprechst du Deutsch?", "Sprechen du Deutsch?", "Spricht du Deutsch?"],
      forms: { ich: "spreche", du: "sprichst", "er/sie/es": "spricht", Sie: "sprechen" },
      tags: ["languages", "register", "chunk"],
    },
    {
      id: "ein-bisschen", type: "sentence", target: "Ich spreche ein bisschen Deutsch.",
      gloss: { es: "Hablo un poco de alemán.", en: "I speak a little German." },
      accept: [{ text: "Ich spreche ein wenig Deutsch." }],
      distractors: ["Ich spreche ein bisschen Deutschland.", "Ich spreche ein bisschen von Deutsch.", "Ich bisschen spreche Deutsch."],
      tags: ["languages"],
    },

    // ── Words ────────────────────────────────────────────────
    {
      id: "deutschland", type: "word", pos: "other", target: "Deutschland",
      gloss: { es: "Alemania", en: "Germany" },
      distractors: ["Deutsch", "Dänemark", "Holland"],
      note: { es: "Deutschland = el país; Deutsch = el idioma.", en: "Deutschland = the country; Deutsch = the language." },
      tags: ["country"],
    },
    {
      id: "oesterreich", type: "word", pos: "other", target: "Österreich",
      gloss: { es: "Austria", en: "Austria" },
      distractors: ["Australien", "Ostreich", "Estland"],
      note: { es: "¡No es Australia (Australien)! Österreich = «reino del este».", en: "Not Australia (Australien)! Österreich = 'eastern realm'." },
      tags: ["country"],
    },
    {
      id: "die-schweiz", type: "word", pos: "other", target: "die Schweiz",
      gloss: { es: "Suiza", en: "Switzerland" },
      accept: [{ text: "Schweiz", verdict: "almost", feedback: { es: "Este país lleva artículo: die Schweiz.", en: "This country takes the article: die Schweiz." } }],
      distractors: ["Schweden", "das Schweiz", "die Schweizer"],
      tags: ["country"],
    },
    {
      id: "deutsch", type: "word", pos: "other", target: "Deutsch",
      gloss: { es: "alemán (el idioma)", en: "German (the language)" },
      distractors: ["Deutschland", "Deutscher", "Dänisch"],
      tags: ["languages"],
    },
    {
      id: "sprache", type: "word", pos: "noun", target: "die Sprache", gender: "f", plural: "die Sprachen",
      gloss: { es: "el idioma / la lengua", en: "the language" },
      distractors: ["der Sprache", "das Sprechen", "die Spruche"],
      tags: ["languages", "goethe-a1"],
    },
    {
      id: "land", type: "word", pos: "noun", target: "das Land", gender: "n", plural: "die Länder",
      gloss: { es: "el país", en: "the country" },
      distractors: ["der Land", "die Länder", "das Lamm"],
      tags: ["country", "goethe-a1"],
    },
    {
      id: "wer", type: "word", pos: "pron", target: "wer",
      gloss: { es: "quién", en: "who" },
      distractors: ["wo", "was", "wie"],
      note: { es: "wer = quién; wo = dónde.", en: "Watch out: wer = who; wo = where." },
      tags: ["question-word"],
    },
    {
      id: "wo", type: "word", pos: "adv", target: "wo",
      gloss: { es: "dónde", en: "where" },
      distractors: ["wer", "wann", "woher"],
      tags: ["question-word"],
    },
    {
      id: "was", type: "word", pos: "pron", target: "was",
      gloss: { es: "qué", en: "what" },
      distractors: ["wer", "wo", "wie"],
      tags: ["question-word"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-kommen", type: "pattern", target: "ich komme, du kommst, er kommt",
      gloss: { es: "presente, singular: -e, -st, -t", en: "present tense, singular: -e, -st, -t" },
      forms: { ich: "komme", du: "kommst", "er/sie/es": "kommt", Sie: "kommen" },
      pattern: {
        rule: {
          es: "Terminaciones del presente: ich -e, du -st, er/sie/es -t; con «Sie» (usted) -en. Ich komme, du kommst, sie kommt, Sie kommen.",
          en: "Present-tense endings: ich -e, du -st, er/sie/es -t; formal Sie -en. Ich komme, du kommst, sie kommt, Sie kommen.",
        },
        table: [["", "kommen", "wohnen"], ["ich", "komme", "wohne"], ["du", "kommst", "wohnst"], ["er / sie / es", "kommt", "wohnt"], ["Sie", "kommen", "wohnen"]],
      },
      question: {
        prompt: { es: "Completa: «Marco ___ aus Italien.»", en: "Complete: 'Marco ___ aus Italien.'" },
        options: ["kommt", "kommst", "komme", "kommen"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "present"],
    },
    {
      id: "pat-verb-zwei", type: "pattern", target: "In Berlin wohne ich.",
      gloss: { es: "el verbo va en segunda posición", en: "the verb goes in second position" },
      pattern: {
        rule: {
          es: "En las afirmaciones el verbo es siempre el 2.º elemento: Ich wohne in Berlin. → In Berlin wohne ich.",
          en: "In statements the verb is always the 2nd element: Ich wohne in Berlin. → In Berlin wohne ich.",
        },
        table: [["1", "2 (verb)", "…"], ["Ich", "wohne", "in Berlin."], ["In Berlin", "wohne", "ich."], ["Woher", "kommst", "du?"]],
      },
      question: {
        prompt: { es: "¿Qué frase es correcta?", en: "Which sentence is correct?" },
        options: ["Jetzt wohne ich in Wien.", "Jetzt ich wohne in Wien.", "Jetzt wohne in Wien ich."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "word-order"],
    },
    {
      id: "pat-aus-der", type: "pattern", target: "aus der Schweiz",
      gloss: { es: "países con artículo", en: "countries with an article" },
      pattern: {
        rule: {
          es: "Casi todos los países van sin artículo: aus Spanien. Unos pocos lo llevan: aus der Schweiz, aus der Türkei, aus den USA.",
          en: "Most countries have no article: aus Spanien. A few do: aus der Schweiz, aus der Türkei, aus den USA.",
        },
        table: [["aus Spanien", "aus Deutschland", "aus Österreich"], ["aus der Schweiz", "aus der Türkei", "aus den USA"]],
      },
      question: {
        prompt: { es: "Completa: «Lena kommt aus ___ Schweiz.»", en: "Complete: 'Lena kommt aus ___ Schweiz.'" },
        options: ["der", "die", "dem", "das"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "country"],
    },

    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-ei-ie", type: "sound", target: "Wien",
      gloss: { es: "Viena", en: "Vienna" },
      pair: ["Wein", "Wien"], slow: true,
      distractors: ["Wein", "Wean", "Wihn"],
      note: {
        es: "ie = «i» larga (Wien = Viena); ei = «ai» (Wein = vino). Truco: suena la segunda letra.",
        en: "ie = long 'ee' (Wien = Vienna); ei = 'eye' (Wein = wine). Tip: say the second letter's name.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },
    {
      id: "s-w", type: "sound", target: "wohnen",
      gloss: { es: "vivir (residir)", en: "to live (reside)" },
      distractors: ["vohnen", "fohnen", "bohnen"],
      note: {
        es: "La w alemana suena como una «v» con los dientes en el labio: wohnen. La v suele sonar «f»: Vater.",
        en: "German w sounds like English v: wohnen ≈ 'voh-nen'. And v usually sounds like f: Vater.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },

    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-marco", type: "listening", target: "Ich heiße Marco. Ich komme aus Italien, aber ich wohne in Hamburg.",
      gloss: { es: "Me llamo Marco. Soy de Italia, pero vivo en Hamburgo.", en: "My name is Marco. I'm from Italy, but I live in Hamburg." },
      question: {
        prompt: { es: "¿Dónde vive Marco?", en: "Where does Marco live?" },
        options: [
          { es: "En Hamburgo", en: "In Hamburg" },
          { es: "En Italia", en: "In Italy" },
          { es: "En Berlín", en: "In Berlin" },
          { es: "En Viena", en: "In Vienna" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening"],
    },

    // ── Bridge (en) ──────────────────────────────────────────
    {
      id: "br-also", legacyId: "de-f-also", type: "bridge", onlyFor: "en", target: "also",
      gloss: { es: "entonces, o sea", en: "so / well then" },
      question: {
        prompt: { es: "«also» significa…", en: "'also' means…" },
        options: [
          { es: "entonces", en: "so / well then" },
          { es: "también", en: "too / as well" },
          { es: "siempre", en: "always" },
          { es: "aunque", en: "although" },
        ],
        answer: 0,
      },
      note: { en: "'Too / as well' is 'auch': Ich komme auch aus Spanien." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
