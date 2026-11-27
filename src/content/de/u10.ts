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

    // ── war and hatte first ──────────────────────────────────
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
    {
      id: "tab-war", type: "paradigm", target: "sein — Präteritum (war)", spoken: "war",
      gloss: { es: "war (era, estaba) — pasado de sein", en: "war (was) — past of sein" },
      grammar: ["de-g-war-hatte"],
      paradigm: {
        caption: { es: "Conjuga «sein» en pasado: war", en: "Conjugate sein in the past: war" },
        cells: [
          { label: "ich", answer: "war", ruleId: "de-g-war-hatte" },
          { label: "du", answer: "warst", ruleId: "de-g-war-hatte" },
          { label: "er / sie / es", answer: "war", ruleId: "de-g-war-hatte" },
          { label: "wir", answer: "waren", ruleId: "de-g-war-hatte" },
          { label: "ihr", answer: "wart", ruleId: "de-g-war-hatte" },
          { label: "sie / Sie", answer: "waren", ruleId: "de-g-war-hatte" },
        ],
      },
      tags: ["grammar", "past", "table"],
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
      id: "das-war-toll", type: "phrase", pos: "phrase", target: "Das war toll!",
      gloss: { es: "¡Fue genial!", en: "That was great!" },
      distractors: ["Das hatte toll!", "Das war toller!", "Das wird toll!"],
      tags: ["past", "chunk"],
    },
    {
      id: "tab-hatte", type: "paradigm", target: "haben — Präteritum (hatte)", spoken: "hatte",
      gloss: { es: "hatte (tenía) — pasado de haben", en: "hatte (had) — past of haben" },
      grammar: ["de-g-war-hatte"],
      paradigm: {
        caption: { es: "Conjuga «haben» en pasado: hatte", en: "Conjugate haben in the past: hatte" },
        cells: [
          { label: "ich", answer: "hatte", ruleId: "de-g-war-hatte" },
          { label: "du", answer: "hattest", ruleId: "de-g-war-hatte" },
          { label: "er / sie / es", answer: "hatte", ruleId: "de-g-war-hatte" },
          { label: "wir", answer: "hatten", ruleId: "de-g-war-hatte" },
          { label: "ihr", answer: "hattet", ruleId: "de-g-war-hatte" },
          { label: "sie / Sie", answer: "hatten", ruleId: "de-g-war-hatte" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "hatte-keine-zeit", type: "sentence", target: "Ich hatte keine Zeit.",
      gloss: { es: "No tenía tiempo.", en: "I didn't have time." },
      distractors: ["habe", "kein", "Zeiten"],
      tags: ["past", "war-hatte"],
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
        meanings: [
          { es: "ser / estar · tener", en: "to be · to have" },
          { es: "yo era / estaba · tenía", en: "I was · had" },
          { es: "tú eras / estabas · tenías", en: "you were · had (du)" },
          { es: "él, ella era / estaba · tenía", en: "he, she was · had" },
          { es: "nosotros · usted: éramos · teníamos / era · tenía", en: "we · you (formal): were · had" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Gestern ___ ich keine Zeit.»", en: "Complete: 'Gestern ___ ich keine Zeit.'" },
        options: ["hatte", "war", "habe", "hat"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-war-hatte"], tags: ["grammar", "past", "war-hatte"],
    },

    // ── Things you do ────────────────────────────────────────
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
      id: "machen", type: "word", pos: "verb", target: "machen",
      gloss: { es: "hacer", en: "to do / to make" },
      forms: { ich: "mache", du: "machst", er: "macht", wir: "machen", ihr: "macht", sie: "machen", pp: "gemacht", aux: "haben" },
      distractors: ["mögen", "malen", "lachen"],
      tags: ["verbs", "goethe-a1"],
    },
    {
      id: "kochen", type: "word", pos: "verb", target: "kochen",
      gloss: { es: "cocinar", en: "to cook" },
      forms: { ich: "koche", du: "kochst", er: "kocht", wir: "kochen", ihr: "kocht", sie: "kochen", pp: "gekocht", aux: "haben" },
      distractors: ["kosten", "lochen", "kommen"],
      tags: ["verbs", "goethe-a1"],
    },

    // ── Participles, step 1: ge- … -t ────────────────────────
    {
      id: "pat-partizip-t", type: "pattern", target: "machen → gemacht",
      gloss: { es: "participio regular: ge- … -t", en: "regular participle: ge- … -t" },
      pattern: {
        rule: {
          es: "Para el pasado (Perfekt) hace falta el participio. En los verbos regulares es ge- + raíz + -t: machen → gemacht, kochen → gekocht.",
          en: "The past (Perfekt) needs a past participle. For regular verbs it is ge- + stem + -t: machen → gemacht, kochen → gekocht.",
        },
        table: [["machen", "gemacht"], ["kochen", "gekocht"], ["kaufen", "gekauft"], ["spielen", "gespielt"]],
        meanings: [
          { es: "hacer → hecho", en: "to do → done" },
          { es: "cocinar → cocinado", en: "to cook → cooked" },
          { es: "comprar → comprado", en: "to buy → bought" },
          { es: "jugar → jugado", en: "to play → played" },
        ],
      },
      question: {
        prompt: { es: "El participio de «wohnen» es…", en: "The past participle of 'wohnen' is…" },
        options: ["gewohnt", "gewohnen", "wohnt", "gewohnet"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-partizip"], tags: ["grammar", "past"],
    },
    {
      id: "tab-perfekt-machen", type: "paradigm", target: "machen — Perfekt", spoken: "gemacht",
      gloss: { es: "machen (hacer) — Perfekt", en: "machen (to do) — Perfekt" },
      grammar: ["de-g-perfekt-haben"],
      paradigm: {
        caption: { es: "Conjuga «machen» en Perfekt (haben + gemacht)", en: "Conjugate machen in the Perfekt (haben + gemacht)" },
        cells: [
          { label: "ich", answer: "habe gemacht", ruleId: "de-g-perfekt-haben" },
          { label: "du", answer: "hast gemacht", ruleId: "de-g-perfekt-haben" },
          { label: "er / sie / es", answer: "hat gemacht", ruleId: "de-g-perfekt-haben" },
          { label: "wir", answer: "haben gemacht", ruleId: "de-g-perfekt-haben" },
          { label: "ihr", answer: "habt gemacht", ruleId: "de-g-perfekt-haben" },
          { label: "sie / Sie", answer: "haben gemacht", ruleId: "de-g-perfekt-haben" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "was-hast-du-gemacht", type: "sentence", register: "informal", target: "Was hast du am Wochenende gemacht?",
      gloss: { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" },
      distractors: ["bist", "machst", "gemachen"],
      tags: ["past"],
    },
    {
      id: "pat-perfekt-haben", type: "pattern", target: "Ich habe gestern Fußball gespielt.",
      gloss: { es: "el Perfekt con haben", en: "the Perfekt with haben" },
      pattern: {
        rule: {
          es: "El Perfekt es el pasado de la conversación: haben conjugado en 2.º lugar y el participio al final de la frase.",
          en: "The Perfekt is the spoken past: conjugated haben in place 2 and the past participle at the end of the sentence.",
        },
        table: [["Ich", "habe", "Fußball", "gespielt."], ["Wir", "haben", "zusammen", "gekocht."], ["Was", "hast", "du", "gemacht?"]],
        meanings: [
          { es: "Jugué al fútbol.", en: "I played football." },
          { es: "Cocinamos juntos.", en: "We cooked together." },
          { es: "¿Qué hiciste?", en: "What did you do?" },
        ],
      },
      question: {
        prompt: { es: "¿Qué frase es correcta?", en: "Which sentence is correct?" },
        options: ["Ich habe gestern Fußball gespielt.", "Ich habe gespielt gestern Fußball.", "Ich gestern habe Fußball gespielt.", "Ich habe gestern Fußball spielt."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-perfekt-haben"], tags: ["grammar", "past"],
    },
    {
      id: "zusammen-gekocht", type: "sentence", target: "Wir haben zusammen gekocht.",
      gloss: { es: "Cocinamos juntos.", en: "We cooked together." },
      distractors: ["sind", "gekochen", "kocht"],
      tags: ["past"],
    },

    // ── Participles, step 2: ge- … -en ───────────────────────
    {
      id: "treffen", type: "word", pos: "verb", target: "treffen",
      gloss: { es: "encontrarse con, quedar con", en: "to meet" },
      forms: { ich: "treffe", du: "triffst", er: "trifft", wir: "treffen", ihr: "trefft", sie: "treffen", pp: "getroffen", aux: "haben" },
      distractors: ["trinken", "treten", "trennen"],
      tags: ["verbs", "goethe-a1"],
    },
    {
      id: "pat-partizip-en", type: "pattern", target: "essen → gegessen",
      gloss: { es: "participio irregular: ge- … -en", en: "irregular participle: ge- … -en" },
      pattern: {
        rule: {
          es: "Muchos verbos frecuentes son irregulares: el participio termina en -en, a veces con otra vocal: essen → gegessen, treffen → getroffen. Se aprenden con el verbo.",
          en: "Many common verbs are irregular: the participle ends in -en, sometimes with a new vowel: essen → gegessen, treffen → getroffen. Learn them with the verb.",
        },
        table: [["essen", "gegessen"], ["lesen", "gelesen"], ["schlafen", "geschlafen"], ["treffen", "getroffen"]],
        meanings: [
          { es: "comer → comido", en: "to eat → eaten" },
          { es: "leer → leído", en: "to read → read" },
          { es: "dormir → dormido", en: "to sleep → slept" },
          { es: "encontrarse con → encontrado", en: "to meet → met" },
        ],
      },
      question: {
        prompt: { es: "Completa con «essen»: «Ich habe gestern Brot ___.»", en: "Complete with 'essen': 'Ich habe gestern Brot ___.'" },
        options: ["gegessen", "gegesst", "geesst", "essen"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-partizip"], tags: ["grammar", "past"],
    },
    {
      id: "freunde-getroffen", type: "sentence", target: "Ich habe gestern Freunde getroffen.",
      gloss: { es: "Ayer me encontré con unos amigos.", en: "I met some friends yesterday." },
      accept: [{ text: "Gestern habe ich Freunde getroffen." }],
      errors: [{ text: "Ich habe gestern Freunde getrefft.", feedback: { es: "treffen es irregular: getroffen.", en: "treffen is irregular: getroffen." }, ruleId: "de-g-partizip" }],
      distractors: ["Ich habe gestern Freunde getrefft.", "Ich bin gestern Freunde getroffen.", "Ich habe getroffen gestern Freunde."],
      tags: ["past"],
    },

    // ── Participles, step 3: separable verbs ─────────────────
    {
      id: "pat-partizip", type: "pattern", target: "gemacht · aufgestanden · besucht · telefoniert",
      gloss: { es: "participio de los verbos separables: ein-ge-kauft", en: "separable verbs: ein-ge-kauft" },
      pattern: {
        rule: {
          es: "En los verbos separables, ge- va entre el prefijo y el verbo: ein-ge-kauft, auf-ge-standen, an-ge-rufen.",
          en: "In separable verbs, ge- goes between the prefix and the verb: ein-ge-kauft, auf-ge-standen, an-ge-rufen.",
        },
        table: [["einkaufen", "eingekauft"], ["aufstehen", "aufgestanden"], ["anrufen", "angerufen"]],
        meanings: [
          { es: "hacer las compras → (hecho) las compras", en: "to do the shopping → shopped" },
          { es: "levantarse → levantado", en: "to get up → got up" },
          { es: "llamar por teléfono → llamado", en: "to call → called" },
        ],
      },
      question: {
        prompt: { es: "El participio de «fernsehen» es…", en: "The past participle of 'fernsehen' is…" },
        options: ["ferngesehen", "gefernsehen", "fernsehen", "ferngesieht"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-partizip"], tags: ["grammar", "past"],
    },
    {
      id: "heute-eingekauft", type: "sentence", target: "Ich habe heute eingekauft.",
      gloss: { es: "Hoy hice las compras.", en: "I did the shopping today." },
      accept: [{ text: "Heute habe ich eingekauft." }],
      errors: [{ text: "Ich habe heute geeinkauft.", feedback: { es: "En los separables ge- va en medio: eingekauft.", en: "In separable verbs ge- goes in the middle: eingekauft." }, ruleId: "de-g-partizip" }],
      distractors: ["Ich habe heute geeinkauft.", "Ich habe heute einkauft.", "Ich bin heute eingekauft."],
      tags: ["past", "separable"],
    },

    // ── Participles, step 4: no ge- ──────────────────────────
    {
      id: "besuchen", type: "word", pos: "verb", target: "besuchen",
      gloss: { es: "visitar", en: "to visit" },
      forms: { ich: "besuche", du: "besuchst", er: "besucht", wir: "besuchen", ihr: "besucht", sie: "besuchen", pp: "besucht", aux: "haben" },
      distractors: ["versuchen", "suchen", "buchen"],
      note: { es: "Los verbos con be- no llevan ge-: besucht (no «gebesucht»).", en: "Verbs with be- take no ge-: besucht (not 'gebesucht')." },
      tags: ["leisure", "goethe-a1"],
    },
    {
      id: "pat-partizip-ohne-ge", type: "pattern", target: "besuchen → besucht",
      gloss: { es: "participio sin ge-: be-, ver-, er-, -ieren", en: "participle without ge-: be-, ver-, er-, -ieren" },
      pattern: {
        rule: {
          es: "Los verbos que empiezan por be-, ver- o er- y los que terminan en -ieren no llevan ge-: besuchen → besucht, telefonieren → telefoniert.",
          en: "Verbs starting with be-, ver- or er- and verbs ending in -ieren take no ge-: besuchen → besucht, telefonieren → telefoniert.",
        },
        table: [["besuchen", "besucht"], ["verstehen", "verstanden"], ["telefonieren", "telefoniert"]],
        meanings: [
          { es: "visitar → visitado", en: "to visit → visited" },
          { es: "entender → entendido", en: "to understand → understood" },
          { es: "hablar por teléfono → hablado", en: "to phone → phoned" },
        ],
      },
      question: {
        prompt: { es: "El participio de «buchstabieren» es…", en: "The past participle of 'buchstabieren' is…" },
        options: ["buchstabiert", "gebuchstabiert", "buchstabieren", "gebuchstabieren"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-partizip"], tags: ["grammar", "past"],
    },
    {
      id: "oma-besucht", type: "sentence", target: "Ich habe meine Oma besucht.",
      gloss: { es: "Visité a mi abuela.", en: "I visited my grandma." },
      errors: [{ text: "Ich habe meine Oma gebesucht.", feedback: { es: "besuchen no lleva ge-: besucht.", en: "besuchen takes no ge-: besucht." } }],
      distractors: ["gebesucht", "bin", "meiner"],
      tags: ["past", "family"],
    },

    // ── haben or sein ────────────────────────────────────────
    {
      id: "pat-perfekt-sein", type: "pattern", target: "Ich bin nach Berlin gefahren.",
      gloss: { es: "el Perfekt con sein", en: "the Perfekt with sein" },
      pattern: {
        rule: {
          es: "Verbos de movimiento o cambio de estado van con sein: gehen, fahren, kommen, aufstehen, bleiben, sein. Los demás, con haben.",
          en: "Verbs of movement or change of state take sein: gehen, fahren, kommen, aufstehen, bleiben, sein. All others take haben.",
        },
        table: [["gehen", "ist gegangen"], ["fahren", "ist gefahren"], ["kommen", "ist gekommen"], ["aufstehen", "ist aufgestanden"], ["bleiben", "ist geblieben"]],
        meanings: [
          { es: "ir (a pie) → fue", en: "to go (on foot) → went" },
          { es: "ir (en vehículo) → fue", en: "to go (by vehicle) → went" },
          { es: "venir → vino", en: "to come → came" },
          { es: "levantarse → se levantó", en: "to get up → got up" },
          { es: "quedarse → se quedó", en: "to stay → stayed" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Wir ___ nach Berlin gefahren.»", en: "Complete: 'Wir ___ nach Berlin gefahren.'" },
        options: ["sind", "haben", "hat", "ist"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-perfekt-sein"], tags: ["grammar", "past", "sein"],
    },
    {
      id: "nach-hamburg-gefahren", type: "sentence", target: "Wir sind nach Hamburg gefahren.",
      gloss: { es: "Fuimos a Hamburgo.", en: "We went to Hamburg." },
      errors: [{ text: "Wir haben nach Hamburg gefahren.", feedback: { es: "Verbos de movimiento con sein: wir sind gefahren.", en: "Verbs of movement take sein: wir sind gefahren." } }],
      distractors: ["haben", "gefahrt", "in"],
      tags: ["past", "sein"],
    },
    {
      id: "nach-hause-gekommen", type: "sentence", target: "Ich bin um elf Uhr nach Hause gekommen.",
      gloss: { es: "Llegué a casa a las once.", en: "I got home at eleven." },
      accept: [{ text: "Ich bin um elf nach Hause gekommen." }],
      errors: [{ text: "Ich bin um elf Uhr zu Hause gekommen.", feedback: { es: "Dirección (a casa) = nach Hause; zu Hause = en casa.", en: "Going home = nach Hause; zu Hause = at home." } }],
      distractors: ["habe", "zu", "gekommt"],
      tags: ["past", "sein"],
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
        { who: "A", target: "Ich habe nur geschlafen. Ich war total müde.", gloss: { es: "Yo solo dormí. Estaba muy cansado/a.", en: "I just slept. I was totally exhausted." } },
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
        prompt: { es: "«Ich habe einen Brief gelesen» significa…", en: "'Ich habe einen Brief gelesen' means…" },
        options: [
          { es: "Leí una carta.", en: "I read a letter." },
          { es: "Leí un resumen.", en: "I read a brief." },
          { es: "Leí un libro.", en: "I read a book." },
          { es: "Leí una receta.", en: "I read a recipe." },
        ],
        answer: 0,
      },
      note: { en: "der Brief = letter (die Briefmarke = stamp). 'Brief' (short) is kurz." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
