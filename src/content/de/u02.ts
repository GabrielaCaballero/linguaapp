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
    { es: "Puedo decir qué idiomas hablo y preguntárselo a otros, de tú («du») o de usted («Sie»).", en: "I can say which languages I speak and ask others, with du and Sie." },
    { es: "Sé conjugar verbos en presente y poner el verbo en segunda posición.", en: "I can conjugate verbs in the present tense and put the verb second." },
  ],
  icon: "🗺️",
  items: build("de", 2, "A1.1", [
    // ── Who? All the personal pronouns ───────────────────────
    {
      id: "er", type: "word", pos: "pron", target: "er",
      gloss: { es: "él", en: "he" },
      distractors: ["es", "der", "ihr"],
      note: { es: "También para cosas masculinas: der Tisch → er.", en: "Also for masculine things: der Tisch → er (it)." },
      tags: ["pronoun", "basic"],
    },
    {
      id: "sie-sg", type: "word", pos: "pron", target: "sie",
      gloss: { es: "ella", en: "she" },
      distractors: ["die", "sein", "wie"],
      note: { es: "Ojo: «sie» también es «ellos»; el verbo lo aclara: sie kommt (ella), sie kommen (ellos).", en: "Careful: sie is also 'they'; the verb tells you: sie kommt (she), sie kommen (they)." },
      tags: ["pronoun", "basic"],
    },
    {
      id: "es", type: "word", pos: "pron", target: "es",
      gloss: { es: "ello / eso (para cosas neutras: das)", en: "it" },
      distractors: ["er", "das", "ist"],
      note: { es: "Para palabras con «das»: das Kind → es.", en: "For das words: das Kind → es." },
      tags: ["pronoun", "basic"],
    },
    {
      id: "wir", type: "word", pos: "pron", target: "wir",
      gloss: { es: "nosotros / nosotras", en: "we" },
      distractors: ["mir", "wie", "wer"],
      tags: ["pronoun", "basic"],
    },
    {
      id: "ihr", type: "word", pos: "pron", target: "ihr", register: "informal",
      gloss: { es: "ustedes (amigos, familia)", en: "you (several people, informal)" },
      distractors: ["ihm", "hier", "ich"],
      note: { es: "Es el plural de «du»: a varios amigos. A varias personas de usted: Sie.", en: "The plural of du: to several friends. Several people you'd call Sie: Sie." },
      tags: ["pronoun", "basic", "register"],
    },
    {
      id: "sie-pl", type: "word", pos: "pron", target: "sie",
      gloss: { es: "ellos / ellas", en: "they" },
      distractors: ["sind", "die", "wie"],
      note: { es: "Mismo verbo que con «Sie» (usted): sie kommen, Sie kommen.", en: "Same verb form as Sie: sie kommen, Sie kommen." },
      tags: ["pronoun", "basic"],
    },

    // ── Question words ───────────────────────────────────────
    {
      id: "wer", type: "word", pos: "pron", target: "wer",
      gloss: { es: "quién", en: "who" },
      distractors: ["wo", "was", "wie"],
      note: { es: "wer = quién; wo = dónde.", en: "Watch out: wer = who; wo = where." },
      tags: ["question-word"],
    },
    {
      id: "was", type: "word", pos: "pron", target: "was",
      gloss: { es: "qué", en: "what" },
      distractors: ["wer", "wo", "wie"],
      tags: ["question-word"],
    },
    {
      id: "wo", type: "word", pos: "adv", target: "wo",
      gloss: { es: "dónde", en: "where" },
      distractors: ["wer", "wann", "woher"],
      tags: ["question-word"],
    },
    {
      id: "woher", type: "word", pos: "adv", target: "woher",
      gloss: { es: "de dónde", en: "where from" },
      distractors: ["wohin", "wo", "wer"],
      note: { es: "wo = dónde; woher = de dónde.", en: "wo = where; woher = where from." },
      tags: ["question-word"],
    },
    {
      id: "wann", type: "word", pos: "adv", target: "wann",
      gloss: { es: "cuándo", en: "when" },
      distractors: ["wenn", "denn", "wo"],
      note: { es: "Wann kommst du? = ¿Cuándo vienes?", en: "Wann kommst du? = When are you coming?" },
      tags: ["question-word", "time"],
    },

    // ── Countries & languages ────────────────────────────────
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

    // ── Four verbs: stem + -en ───────────────────────────────
    {
      id: "kommen", type: "word", pos: "verb", target: "kommen",
      gloss: { es: "venir (ser de)", en: "to come" },
      forms: { ich: "komme", du: "kommst", er: "kommt", wir: "kommen", ihr: "kommt", sie: "kommen" },
      distractors: ["können", "kosten", "nehmen"],
      note: { es: "Ich komme aus Spanien = soy de España (vengo de España).", en: "Ich komme aus Spanien = I'm from Spain." },
      tags: ["verb", "introductions", "goethe-a1"],
    },
    {
      id: "wohnen", type: "word", pos: "verb", target: "wohnen",
      gloss: { es: "vivir (en un lugar)", en: "to live (somewhere)" },
      forms: { ich: "wohne", du: "wohnst", er: "wohnt", wir: "wohnen", ihr: "wohnt", sie: "wohnen" },
      distractors: ["wollen", "warten", "wohin"],
      note: { es: "Para dónde vives: Ich wohne in Berlin.", en: "For where you live: Ich wohne in Berlin." },
      tags: ["verb", "introductions", "goethe-a1"],
    },
    {
      id: "pat-stamm", type: "pattern", target: "komm + en = kommen",
      gloss: { es: "el infinitivo = raíz + -en", en: "the infinitive = stem + -en" },
      pattern: {
        rule: {
          es: "Casi todos los verbos terminan en -en en el diccionario (el infinitivo). Lo que queda sin -en es la raíz: komm-en, wohn-en. A la raíz se le pone la terminación de cada persona.",
          en: "Almost every verb ends in -en in the dictionary (the infinitive). What's left without -en is the stem: komm-en, wohn-en. Each person adds its own ending to the stem.",
        },
        table: [["kommen", "komm + en"], ["wohnen", "wohn + en"], ["lernen", "lern + en"], ["sprechen", "sprech + en"]],
        meanings: [
          { es: "venir", en: "to come" },
          { es: "vivir (en un lugar)", en: "to live (somewhere)" },
          { es: "aprender", en: "to learn" },
          { es: "hablar", en: "to speak" },
        ],
      },
      question: {
        prompt: { es: "¿Cuál es la raíz de «wohnen»?", en: "What is the stem of 'wohnen'?" },
        options: ["wohn-", "wohne-", "woh-", "wohnen-"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-praesens"], tags: ["grammar", "present"],
    },
    {
      id: "lernen", type: "word", pos: "verb", target: "lernen",
      gloss: { es: "aprender, estudiar", en: "to learn / to study" },
      forms: { ich: "lerne", du: "lernst", er: "lernt", wir: "lernen", ihr: "lernt", sie: "lernen" },
      distractors: ["lehren", "lesen", "leben"],
      tags: ["verb", "languages", "goethe-a1"],
    },
    {
      id: "sprechen", type: "word", pos: "verb", target: "sprechen",
      gloss: { es: "hablar", en: "to speak" },
      forms: { ich: "spreche", du: "sprichst", er: "spricht", wir: "sprechen", ihr: "sprecht", sie: "sprechen" },
      distractors: ["brechen", "springen", "sprengen"],
      note: { es: "e → i con du y er/sie/es: du sprichst, er spricht.", en: "e → i with du and er/sie/es: du sprichst, er spricht." },
      grammar: ["de-g-vokalwechsel"],
      tags: ["verb", "languages", "goethe-a1"],
    },

    // ── Endings: ich -e, du -st, er -t ───────────────────────
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
        meanings: [
          { es: "venir · vivir", en: "to come · to live" },
          { es: "yo vengo · vivo", en: "I come · live" },
          { es: "tú vienes · vives", en: "you come · live (du)" },
          { es: "él, ella viene · vive", en: "he, she comes · lives" },
          { es: "usted viene · vive", en: "you come · live (formal)" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Marco ___ aus Italien.»", en: "Complete: 'Marco ___ aus Italien.'" },
        options: ["kommt", "kommst", "komme", "kommen"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-praesens"], tags: ["grammar", "present"],
    },
    {
      id: "tab-kommen", type: "paradigm", target: "kommen — Präsens", spoken: "kommen",
      gloss: { es: "kommen (venir) — presente", en: "kommen (to come) — present" },
      grammar: ["de-g-praesens"],
      paradigm: {
        caption: { es: "Conjuga «kommen» en presente", en: "Conjugate kommen in the present tense" },
        cells: [
          { label: "ich", answer: "komme", ruleId: "de-g-praesens" },
          { label: "du", answer: "kommst", ruleId: "de-g-praesens" },
          { label: "er / sie / es", answer: "kommt", ruleId: "de-g-praesens" },
          { label: "wir", answer: "kommen", ruleId: "de-g-praesens" },
          { label: "ihr", answer: "kommt", ruleId: "de-g-praesens" },
          { label: "sie / Sie", answer: "kommen", ruleId: "de-g-praesens" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
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
      accept: [{ text: "Ich bin aus Spanien." }],
      errors: [
        { text: "Komme aus Spanien.", feedback: { es: "En alemán el pronombre es obligatorio: Ich komme…", en: "German needs the subject pronoun: Ich komme…" } },
        { text: "Ich komme von Spanien.", feedback: { es: "Para países y ciudades se usa «aus»: Ich komme aus Spanien.", en: "For countries and cities use 'aus': Ich komme aus Spanien." } },
      ],
      distractors: ["Ich komme von Spanien.", "Ich kommt aus Spanien.", "Ich komme in Spanien."],
      tags: ["introductions"],
    },
    {
      id: "tab-wohnen", type: "paradigm", target: "wohnen — Präsens", spoken: "wohnen",
      gloss: { es: "wohnen (vivir) — presente", en: "wohnen (to live) — present" },
      grammar: ["de-g-praesens"],
      paradigm: {
        caption: { es: "Conjuga «wohnen» en presente", en: "Conjugate wohnen in the present tense" },
        cells: [
          { label: "ich", answer: "wohne", ruleId: "de-g-praesens" },
          { label: "du", answer: "wohnst", ruleId: "de-g-praesens" },
          { label: "er / sie / es", answer: "wohnt", ruleId: "de-g-praesens" },
          { label: "wir", answer: "wohnen", ruleId: "de-g-praesens" },
          { label: "ihr", answer: "wohnt", ruleId: "de-g-praesens" },
          { label: "sie / Sie", answer: "wohnen", ruleId: "de-g-praesens" },
        ],
      },
      tags: ["grammar", "present", "table"],
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
      id: "tab-lernen", type: "paradigm", target: "lernen — Präsens", spoken: "lernen",
      gloss: { es: "lernen (aprender) — presente", en: "lernen (to learn) — present" },
      grammar: ["de-g-praesens"],
      paradigm: {
        caption: { es: "Conjuga «lernen» en presente", en: "Conjugate lernen in the present tense" },
        cells: [
          { label: "ich", answer: "lerne", ruleId: "de-g-praesens" },
          { label: "du", answer: "lernst", ruleId: "de-g-praesens" },
          { label: "er / sie / es", answer: "lernt", ruleId: "de-g-praesens" },
          { label: "wir", answer: "lernen", ruleId: "de-g-praesens" },
          { label: "ihr", answer: "lernt", ruleId: "de-g-praesens" },
          { label: "sie / Sie", answer: "lernen", ruleId: "de-g-praesens" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "wir-lernen-deutsch", type: "sentence", target: "Wir lernen Deutsch.",
      gloss: { es: "Aprendemos alemán.", en: "We're learning German." },
      errors: [{ text: "Wir lernt Deutsch.", feedback: { es: "Con wir la terminación es -en: wir lernen.", en: "With wir the ending is -en: wir lernen." } }],
      distractors: ["Wir lernt Deutsch.", "Wir lernen Deutschland.", "Wir lerne Deutsch."],
      tags: ["languages", "present"],
    },
    {
      id: "ich-spreche", legacyId: "de-spreche", type: "sentence", target: "Ich spreche Spanisch und Englisch.",
      gloss: { es: "Hablo español e inglés.", en: "I speak Spanish and English." },
      distractors: ["Ich sprechen Spanisch und Englisch.", "Ich spricht Spanisch und Englisch.", "Ich spreche Spanien und England."],
      note: { es: "Los idiomas son sustantivos y van con mayúscula: Deutsch, Spanisch.", en: "Languages are nouns, so they're capitalised: Deutsch, Englisch." },
      tags: ["languages"],
    },

    // ── A vowel change: sprechen (e → i) ─────────────────────
    {
      id: "pat-vokalwechsel-1", type: "pattern", target: "ich spreche, du sprichst, er spricht",
      gloss: { es: "cambio de vocal e → i (du, er/sie/es)", en: "vowel change e → i (du, er/sie/es)" },
      pattern: {
        rule: {
          es: "Algunos verbos cambian la vocal e → i, pero solo con du y er/sie/es: ich spreche, du sprichst, er spricht. Con wir todo vuelve a ser normal: wir sprechen.",
          en: "Some verbs change e → i, but only with du and er/sie/es: ich spreche, du sprichst, er spricht. With wir everything is back to normal: wir sprechen.",
        },
        table: [["ich", "spreche"], ["du", "sprichst"], ["er / sie / es", "spricht"], ["wir", "sprechen"]],
        meanings: [
          { es: "yo hablo", en: "I speak" },
          { es: "tú hablas", en: "you speak (du)" },
          { es: "él, ella habla", en: "he, she speaks" },
          { es: "nosotros hablamos", en: "we speak" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Lena ___ Deutsch.»", en: "Complete: 'Lena ___ Deutsch.'" },
        options: ["spricht", "sprecht", "sprichst", "sprechen"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-vokalwechsel"], tags: ["grammar", "present", "vowel-change"],
    },
    {
      id: "tab-sprechen", type: "paradigm", target: "sprechen — Präsens", spoken: "sprechen",
      gloss: { es: "sprechen (hablar) — presente", en: "sprechen (to speak) — present" },
      grammar: ["de-g-vokalwechsel"],
      paradigm: {
        caption: { es: "Conjuga «sprechen» (e → i con du y er/sie/es)", en: "Conjugate sprechen (e → i with du and er/sie/es)" },
        cells: [
          { label: "ich", answer: "spreche", ruleId: "de-g-vokalwechsel" },
          { label: "du", answer: "sprichst", ruleId: "de-g-vokalwechsel" },
          { label: "er / sie / es", answer: "spricht", ruleId: "de-g-vokalwechsel" },
          { label: "wir", answer: "sprechen", ruleId: "de-g-vokalwechsel" },
          { label: "ihr", answer: "sprecht", ruleId: "de-g-vokalwechsel" },
          { label: "sie / Sie", answer: "sprechen", ruleId: "de-g-vokalwechsel" },
        ],
      },
      tags: ["grammar", "present", "table", "vowel-change"],
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
      id: "sprechen-sie", legacyId: "de-sprechensie", type: "phrase", pos: "phrase", target: "Sprechen Sie Englisch?", register: "formal",
      gloss: { es: "¿Habla inglés? (formal)", en: "Do you speak English? (formal)" },
      distractors: ["Sprichst du Englisch?", "Spricht Sie Englisch?", "Sprechen Sie England?"],
      note: { es: "«Sie» con mayúscula = usted. En preguntas de sí/no, el verbo va primero.", en: "Sie (capital S) = formal you. In yes/no questions the verb comes first." },
      tags: ["languages", "register", "chunk"],
    },
    {
      id: "ein-bisschen", type: "sentence", target: "Ich spreche ein bisschen Deutsch.",
      gloss: { es: "Hablo un poco de alemán.", en: "I speak a little German." },
      accept: [{ text: "Ich spreche ein wenig Deutsch." }],
      distractors: ["Ich spreche ein bisschen Deutschland.", "Ich spreche ein bisschen von Deutsch.", "Ich bisschen spreche Deutsch."],
      tags: ["languages"],
    },
    {
      id: "sehr", type: "word", pos: "adv", target: "sehr",
      gloss: { es: "muy / mucho", en: "very / very much" },
      distractors: ["sehen", "sicher", "mehr"],
      example: { target: "Ich spreche sehr gut Deutsch.", gloss: { es: "Hablo muy bien alemán.", en: "I speak German very well." } },
      tags: ["basic"],
    },

    // ── sein: all the persons ────────────────────────────────
    {
      id: "tab-sein", type: "paradigm", target: "sein — Präsens", spoken: "sein",
      gloss: { es: "sein (ser / estar) — presente", en: "sein (to be) — present" },
      grammar: ["de-g-sein"],
      paradigm: {
        caption: { es: "Conjuga «sein» en presente (de memoria)", en: "Conjugate sein in the present tense (by heart)" },
        cells: [
          { label: "ich", answer: "bin", ruleId: "de-g-sein" },
          { label: "du", answer: "bist", ruleId: "de-g-sein" },
          { label: "er / sie / es", answer: "ist", ruleId: "de-g-sein" },
          { label: "wir", answer: "sind", ruleId: "de-g-sein" },
          { label: "ihr", answer: "seid", ruleId: "de-g-sein" },
          { label: "sie / Sie", answer: "sind", ruleId: "de-g-sein" },
        ],
      },
      tags: ["grammar", "present", "table", "sein"],
    },
    {
      id: "aber", type: "word", pos: "other", target: "aber",
      gloss: { es: "pero", en: "but" },
      distractors: ["oder", "also", "eben"],
      tags: ["basic", "connectors"],
    },
    {
      id: "wir-sind-in-berlin", type: "sentence", target: "Wir sind aus Spanien, aber wir wohnen in Berlin.",
      gloss: { es: "Somos de España, pero vivimos en Berlín.", en: "We're from Spain, but we live in Berlin." },
      errors: [{ text: "Wir seid aus Spanien, aber wir wohnen in Berlin.", feedback: { es: "Con wir: wir sind. «seid» es la forma de ihr.", en: "With wir: wir sind. 'seid' is the ihr form." } }],
      distractors: ["Wir seid aus Spanien, aber wir wohnen in Berlin.", "Wir sind von Spanien, aber wir wohnen in Berlin.", "Wir sind aus Spanien, aber wir wohnt in Berlin."],
      tags: ["introductions", "sein"],
    },

    // ── Word order: the verb comes second ────────────────────
    {
      id: "jetzt", type: "word", pos: "adv", target: "jetzt",
      gloss: { es: "ahora", en: "now" },
      distractors: ["jetzig", "schon", "jede"],
      tags: ["time", "basic"],
    },
    {
      id: "heute", type: "word", pos: "adv", target: "heute",
      gloss: { es: "hoy", en: "today" },
      distractors: ["heuer", "hier", "heiter"],
      tags: ["time", "basic"],
    },
    {
      id: "hier", type: "word", pos: "adv", target: "hier",
      gloss: { es: "aquí / acá", en: "here" },
      distractors: ["ihr", "hin", "vier"],
      tags: ["place", "basic"],
    },
    {
      id: "pat-verb-zwei", type: "pattern", target: "In Berlin wohne ich.",
      gloss: { es: "el verbo va en segunda posición", en: "the verb goes in second position" },
      pattern: {
        rule: {
          es: "En las afirmaciones el verbo es siempre el 2.º elemento: Ich wohne in Berlin. → In Berlin wohne ich.",
          en: "In statements the verb is always the 2nd element: Ich wohne in Berlin. → In Berlin wohne ich.",
        },
        table: [["1", "2", "…"], ["Ich", "wohne", "in Berlin."], ["In Berlin", "wohne", "ich."], ["Jetzt", "wohne", "ich in Wien."], ["Woher", "kommst", "du?"]],
        meanings: [
          { es: "lugar 1 · lugar 2: el verbo · el resto", en: "place 1 · place 2: the verb · the rest" },
          { es: "Vivo en Berlín.", en: "I live in Berlin." },
          { es: "En Berlín vivo yo.", en: "In Berlin is where I live." },
          { es: "Ahora vivo en Viena.", en: "Now I live in Vienna." },
          { es: "¿De dónde eres?", en: "Where are you from?" },
        ],
      },
      question: {
        prompt: { es: "¿Qué frase es correcta?", en: "Which sentence is correct?" },
        options: ["Jetzt wohne ich in Wien.", "Jetzt ich wohne in Wien.", "Jetzt wohne in Wien ich."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-verb-zwei"], tags: ["grammar", "word-order"],
    },
    {
      id: "heute-lerne-ich", type: "sentence", target: "Heute lerne ich Deutsch.",
      gloss: { es: "Hoy estudio alemán.", en: "Today I'm studying German." },
      accept: [{ text: "Ich lerne heute Deutsch." }],
      errors: [{ text: "Heute ich lerne Deutsch.", feedback: { es: "El verbo va en 2.º lugar: Heute lerne ich Deutsch.", en: "The verb comes second: Heute lerne ich Deutsch." } }],
      distractors: ["Heute ich lerne Deutsch.", "Heute lernt ich Deutsch.", "Heute lerne Deutsch ich."],
      tags: ["word-order"],
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
        meanings: [
          { es: "de España · de Alemania · de Austria", en: "from Spain · Germany · Austria" },
          { es: "de Suiza · de Turquía · de Estados Unidos", en: "from Switzerland · Turkey · the USA" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Lena kommt aus ___ Schweiz.»", en: "Complete: 'Lena kommt aus ___ Schweiz.'" },
        options: ["der", "die", "dem", "das"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-aus-der"], tags: ["grammar", "country"],
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
