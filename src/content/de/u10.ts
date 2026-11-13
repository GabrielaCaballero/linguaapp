import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u10",
  lang: "de",
  index: 10,
  cefr: "A2",
  title: { target: "Was hast du gemacht?", es: "¿Qué hiciste?", en: "What did you do?" },
  canDo: [
    { es: "Puedo contar qué hice el fin de semana o en vacaciones.", en: "I can say what I did at the weekend or on holiday." },
    { es: "Puedo preguntar a alguien cómo le fue.", en: "I can ask someone how something went." },
    { es: "Sé formar el Perfekt con haben y sein, y usar war / hatte.", en: "I can form the Perfekt with haben and sein, and use war / hatte." },
  ],
  icon: "📸",
  items: build("de", 10, "A2", [
    // ── Time words ───────────────────────────────────────────
    {
      id: "gestern", type: "word", pos: "adv", target: "gestern",
      gloss: { es: "ayer", en: "yesterday" },
      distractors: ["morgen", "heute", "gerne"],
      tags: ["time", "past", "goethe-a1"],
    },
    {
      id: "letzte-woche", type: "phrase", pos: "phrase", target: "letzte Woche",
      gloss: { es: "la semana pasada", en: "last week" },
      distractors: ["nächste Woche", "letzter Woche", "letztes Woche"],
      note: { es: "Sin preposición: letzte Woche, letztes Jahr, letzten Monat.", en: "No preposition: letzte Woche, letztes Jahr, letzten Monat." },
      tags: ["time", "past"],
    },
    {
      id: "vor-zwei-tagen", type: "phrase", pos: "phrase", target: "vor zwei Tagen",
      gloss: { es: "hace dos días", en: "two days ago" },
      distractors: ["seit zwei Tagen", "in zwei Tagen", "vor zwei Tage"],
      note: { es: "vor + dativo: vor einer Woche, vor drei Jahren.", en: "vor + dative: vor einer Woche, vor drei Jahren." },
      tags: ["time", "past", "dative"],
    },

    // ── Words ────────────────────────────────────────────────
    {
      id: "urlaub", type: "word", pos: "noun", target: "der Urlaub", gender: "m", plural: "die Urlaube",
      gloss: { es: "las vacaciones (del trabajo)", en: "the holiday (vacation)" },
      distractors: ["die Urlaub", "der Unfall", "der Urlauber"],
      note: { es: "Urlaub machen = irse de vacaciones; im Urlaub = de vacaciones.", en: "Urlaub machen = to go on holiday; im Urlaub = on holiday." },
      tags: ["leisure", "goethe-a2"],
    },
    {
      id: "ausflug", type: "word", pos: "noun", target: "der Ausflug", gender: "m", plural: "die Ausflüge",
      gloss: { es: "la excursión, el paseo", en: "the trip / outing" },
      distractors: ["die Ausflug", "der Ausgang", "der Flug"],
      tags: ["leisure", "goethe-a2"],
    },
    {
      id: "geburtstag", type: "word", pos: "noun", target: "der Geburtstag", gender: "m", plural: "die Geburtstage",
      gloss: { es: "el cumpleaños", en: "the birthday" },
      distractors: ["die Geburtstag", "der Geburtsort", "der Feiertag"],
      note: { es: "Alles Gute zum Geburtstag! = ¡Feliz cumpleaños!", en: "Alles Gute zum Geburtstag! = Happy birthday!" },
      tags: ["leisure", "goethe-a1"],
    },
    {
      id: "party", type: "word", pos: "noun", target: "die Party", gender: "f", plural: "die Partys",
      gloss: { es: "la fiesta", en: "the party" },
      distractors: ["der Party", "die Partei", "die Partie"],
      note: { es: "Ojo: die Partei = el partido político.", en: "Careful: die Partei = political party." },
      tags: ["leisure", "goethe-a1"],
    },
    {
      id: "besuchen", type: "word", pos: "verb", target: "besuchen",
      gloss: { es: "visitar", en: "to visit" },
      forms: { pp: "hat besucht" },
      distractors: ["versuchen", "suchen", "buchen"],
      note: { es: "Los verbos con be- no llevan ge-: besucht (no «gebesucht»).", en: "Verbs with be- take no ge-: besucht (not 'gebesucht')." },
      tags: ["leisure", "goethe-a1"],
    },
    {
      id: "machen", type: "word", pos: "verb", target: "machen",
      gloss: { es: "hacer", en: "to do / to make" },
      forms: { pp: "hat gemacht" },
      distractors: ["mögen", "malen", "lachen"],
      tags: ["verbs", "goethe-a1"],
    },
    {
      id: "kochen", type: "word", pos: "verb", target: "kochen",
      gloss: { es: "cocinar", en: "to cook" },
      forms: { pp: "hat gekocht" },
      distractors: ["kosten", "lochen", "kommen"],
      tags: ["verbs", "goethe-a1"],
    },
    {
      id: "treffen", type: "word", pos: "verb", target: "treffen",
      gloss: { es: "encontrarse con, quedar con", en: "to meet" },
      forms: { du: "triffst", er: "trifft", pp: "hat getroffen" },
      distractors: ["trinken", "treten", "trennen"],
      tags: ["verbs", "goethe-a1"],
    },
    {
      id: "muede", type: "word", pos: "adj", target: "müde",
      gloss: { es: "cansado/a", en: "tired" },
      distractors: ["mutig", "munter", "modern"],
      tags: ["feelings", "goethe-a1"],
    },
    {
      id: "toll", type: "word", pos: "adj", target: "toll",
      gloss: { es: "genial, buenísimo", en: "great" },
      distractors: ["voll", "tot", "still"],
      tags: ["feelings", "goethe-a1"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "was-hast-du-gemacht", type: "sentence", register: "informal", target: "Was hast du am Wochenende gemacht?",
      gloss: { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" },
      distractors: ["bist", "machst", "gemachen"],
      tags: ["past"],
    },
    {
      id: "oma-besucht", type: "sentence", target: "Ich habe meine Oma besucht.",
      gloss: { es: "Visité a mi abuela.", en: "I visited my grandma." },
      errors: [{ text: "Ich habe meine Oma gebesucht.", feedback: { es: "besuchen no lleva ge-: besucht.", en: "besuchen takes no ge-: besucht." } }],
      distractors: ["gebesucht", "bin", "meiner"],
      tags: ["past", "family"],
    },
    {
      id: "nach-hamburg-gefahren", type: "sentence", target: "Wir sind nach Hamburg gefahren.",
      gloss: { es: "Fuimos a Hamburgo.", en: "We went to Hamburg." },
      errors: [{ text: "Wir haben nach Hamburg gefahren.", feedback: { es: "Verbos de movimiento con sein: wir sind gefahren.", en: "Verbs of movement take sein: wir sind gefahren." } }],
      distractors: ["haben", "gefahrt", "in"],
      tags: ["past", "sein"],
    },
    {
      id: "gestern-muede", type: "sentence", target: "Gestern war ich sehr müde.",
      gloss: { es: "Ayer estaba muy cansado/a.", en: "Yesterday I was very tired." },
      accept: [{ text: "Ich war gestern sehr müde." }],
      errors: [{ text: "Gestern ich war sehr müde.", feedback: { es: "El verbo en segunda posición: Gestern war ich…", en: "The verb comes second: Gestern war ich…" } }],
      distractors: ["bin", "hatte", "gewesen"],
      tags: ["past", "war-hatte"],
    },
    {
      id: "hatte-keine-zeit", type: "sentence", target: "Ich hatte keine Zeit.",
      gloss: { es: "No tenía tiempo.", en: "I didn't have time." },
      distractors: ["habe", "kein", "Zeiten"],
      tags: ["past", "war-hatte"],
    },
    {
      id: "zusammen-gekocht", type: "sentence", target: "Wir haben zusammen gekocht.",
      gloss: { es: "Cocinamos juntos.", en: "We cooked together." },
      distractors: ["sind", "gekochen", "kocht"],
      tags: ["past"],
    },
    {
      id: "nach-hause-gekommen", type: "sentence", target: "Ich bin um elf Uhr nach Hause gekommen.",
      gloss: { es: "Llegué a casa a las once.", en: "I got home at eleven." },
      accept: [{ text: "Ich bin um elf nach Hause gekommen." }],
      errors: [{ text: "Ich bin um elf Uhr zu Hause gekommen.", feedback: { es: "Dirección (a casa) = nach Hause; zu Hause = en casa.", en: "Going home = nach Hause; zu Hause = at home." } }],
      distractors: ["habe", "zu", "gekommt"],
      tags: ["past", "sein"],
    },
    {
      id: "das-war-toll", type: "phrase", pos: "phrase", target: "Das war toll!",
      gloss: { es: "¡Fue genial!", en: "That was great!" },
      distractors: ["Das hatte toll!", "Das war toller!", "Das wird toll!"],
      tags: ["past", "chunk"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-perfekt-haben", type: "pattern", target: "Ich habe Pizza gegessen.",
      gloss: { es: "el Perfekt con haben", en: "the Perfekt with haben" },
      pattern: {
        rule: {
          es: "haben en 2.ª posición + participio al final. Regulares: ge-…-t (gemacht); irregulares: ge-…-en (gegessen).",
          en: "haben in 2nd position + past participle at the end. Regular: ge-…-t (gemacht); irregular: ge-…-en (gegessen).",
        },
        table: [["machen", "hat gemacht"], ["kochen", "hat gekocht"], ["essen", "hat gegessen"], ["treffen", "hat getroffen"], ["lesen", "hat gelesen"]],
      },
      question: {
        prompt: { es: "Completa con «essen»: «Ich habe gestern Pizza ___.»", en: "Complete with 'essen': 'Ich habe gestern Pizza ___.'" },
        options: ["gegessen", "gegesst", "geesst", "essen"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past"],
    },
    {
      id: "pat-perfekt-sein", type: "pattern", target: "Ich bin nach Berlin gefahren.",
      gloss: { es: "el Perfekt con sein", en: "the Perfekt with sein" },
      pattern: {
        rule: {
          es: "Verbos de movimiento o cambio de estado van con sein: gehen, fahren, kommen, aufstehen, bleiben, sein. Los demás, con haben.",
          en: "Verbs of movement or change of state take sein: gehen, fahren, kommen, aufstehen, bleiben, sein. All others take haben.",
        },
        table: [["gehen", "ist gegangen"], ["fahren", "ist gefahren"], ["kommen", "ist gekommen"], ["aufstehen", "ist aufgestanden"], ["bleiben", "ist geblieben"]],
      },
      question: {
        prompt: { es: "Completa: «Wir ___ nach Berlin gefahren.»", en: "Complete: 'Wir ___ nach Berlin gefahren.'" },
        options: ["sind", "haben", "hat", "ist"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past", "sein"],
    },
    {
      id: "pat-partizip", type: "pattern", target: "gemacht · aufgestanden · besucht · telefoniert",
      gloss: { es: "cómo se forma el participio", en: "forming the past participle" },
      pattern: {
        rule: {
          es: "Separables: ge- en medio (aufgestanden, eingekauft). Sin ge-: verbos con be-, ver-, er- (besucht, verstanden) y en -ieren (telefoniert).",
          en: "Separable verbs put ge- in the middle (aufgestanden, eingekauft). No ge-: verbs with be-, ver-, er- (besucht, verstanden) and -ieren verbs (telefoniert).",
        },
        table: [["einkaufen", "eingekauft"], ["aufstehen", "aufgestanden"], ["besuchen", "besucht"], ["verstehen", "verstanden"], ["telefonieren", "telefoniert"]],
      },
      question: {
        prompt: { es: "El participio de «besuchen» es…", en: "The past participle of 'besuchen' is…" },
        options: ["besucht", "gebesucht", "besuchen", "gesucht"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past"],
    },
    {
      id: "pat-war-hatte", type: "pattern", target: "ich war · ich hatte",
      gloss: { es: "war y hatte (pasado de sein y haben)", en: "war and hatte (past of sein and haben)" },
      pattern: {
        rule: {
          es: "Con sein y haben se usa casi siempre el Präteritum: ich war, ich hatte (no «ich bin gewesen» en la conversación diaria).",
          en: "For sein and haben, speakers mostly use the simple past: ich war, ich hatte.",
        },
        table: [["", "sein", "haben"], ["ich", "war", "hatte"], ["du", "warst", "hattest"], ["er / sie", "war", "hatte"], ["wir / Sie", "waren", "hatten"]],
      },
      question: {
        prompt: { es: "Completa: «Gestern ___ ich keine Zeit.»", en: "Complete: 'Gestern ___ ich keine Zeit.'" },
        options: ["hatte", "war", "habe", "hat"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past", "war-hatte"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-muenchen", type: "listening",
      target: "Am Samstag bin ich mit meiner Schwester nach München gefahren. Wir haben ein Museum besucht, und am Abend haben wir Freunde getroffen.",
      gloss: {
        es: "El sábado fui a Múnich con mi hermana. Visitamos un museo y por la noche nos encontramos con unos amigos.",
        en: "On Saturday I went to Munich with my sister. We visited a museum, and in the evening we met some friends.",
      },
      question: {
        prompt: { es: "¿Qué hicieron por la noche?", en: "What did they do in the evening?" },
        options: [
          { es: "Se encontraron con unos amigos.", en: "They met some friends." },
          { es: "Visitaron un museo.", en: "They visited a museum." },
          { es: "Volvieron a casa.", en: "They went back home." },
          { es: "Fueron a una fiesta.", en: "They went to a party." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "past"],
    },
    {
      id: "dlg-wie-war", type: "dialogue", register: "informal", target: "Wie war dein Wochenende?",
      gloss: { es: "¿Qué tal tu fin de semana?", en: "How was your weekend?" },
      turns: [
        { who: "A", target: "Na, wie war dein Wochenende?", gloss: { es: "Bueno, ¿qué tal tu fin de semana?", en: "So, how was your weekend?" } },
        { who: "B", target: "Super! Ich war auf einer Party. Und du?", gloss: { es: "¡Genial! Fui a una fiesta. ¿Y tú?", en: "Great! I went to a party. And you?" } },
        { who: "A", target: "Ich habe nur geschlafen. Ich war total müde.", gloss: { es: "Yo solo dormí. Estaba muy cansado.", en: "I just slept. I was totally exhausted." } },
      ],
      question: {
        prompt: { es: "¿Qué hizo A el fin de semana?", en: "What did A do at the weekend?" },
        options: [
          { es: "Durmió.", en: "Slept." },
          { es: "Fue a una fiesta.", en: "Went to a party." },
          { es: "Hizo una excursión.", en: "Went on a trip." },
          { es: "Trabajó.", en: "Worked." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "past"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-brief", type: "bridge", onlyFor: "en", target: "der Brief",
      gloss: { es: "la carta", en: "the letter" },
      question: {
        prompt: { es: "«Ich habe einen Brief geschrieben» significa…", en: "'Ich habe einen Brief geschrieben' means…" },
        options: [
          { es: "Escribí una carta.", en: "I wrote a letter." },
          { es: "Escribí un resumen.", en: "I wrote a brief." },
          { es: "Escribí un libro.", en: "I wrote a book." },
          { es: "Escribí una receta.", en: "I wrote a recipe." },
        ],
        answer: 0,
      },
      note: { en: "der Brief = letter (die Briefmarke = stamp). 'Brief' (short) is kurz." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
