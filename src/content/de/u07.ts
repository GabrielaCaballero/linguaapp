import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u07",
  lang: "de",
  index: 7,
  cefr: "A1.2",
  title: { target: "Mein Tag", es: "Mi día", en: "My day" },
  canDo: [
    { es: "Puedo contar mi día a día y a qué hora hago cada cosa.", en: "I can describe my daily routine with times." },
    { es: "Puedo preguntar y decir la hora.", en: "I can ask and tell the time." },
    { es: "Sé usar los verbos separables (ich stehe um sieben auf).", en: "I can use separable verbs (ich stehe um sieben auf)." },
  ],
  icon: "⏰",
  items: build("de", 7, "A1.2", [
    // ── Time: the clock ──────────────────────────────────────
    {
      id: "uhr", type: "word", pos: "noun", target: "die Uhr", gender: "f", plural: "die Uhren",
      gloss: { es: "el reloj / la hora (en punto)", en: "the clock / o'clock" },
      distractors: ["das Uhr", "das Ohr", "die Uhren"],
      note: { es: "um acht Uhr = a las ocho; Wie viel Uhr ist es? = ¿Qué hora es?", en: "um acht Uhr = at eight o'clock; Wie viel Uhr ist es? = What time is it?" },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "stunde", type: "word", pos: "noun", target: "die Stunde", gender: "f", plural: "die Stunden",
      gloss: { es: "la hora (sesenta minutos)", en: "the hour" },
      distractors: ["der Stunde", "die Stelle", "die Stunden"],
      note: { es: "Duración: eine Stunde; hora del reloj: acht Uhr.", en: "A duration is eine Stunde; clock time is acht Uhr." },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "wie-spaet", type: "phrase", pos: "phrase", target: "Wie spät ist es?",
      gloss: { es: "¿Qué hora es?", en: "What time is it?" },
      accept: [{ text: "Wie viel Uhr ist es?" }],
      distractors: ["Wie spät bist du?", "Was spät ist es?", "Wie viel Uhr hast du?"],
      tags: ["time", "chunk"],
    },
    {
      id: "pat-uhrzeit", type: "pattern", target: "Viertel nach sieben · halb acht · Viertel vor acht",
      gloss: { es: "decir la hora", en: "telling the time" },
      pattern: {
        rule: {
          es: "«halb» (media) mira a la hora siguiente: halb acht = media hora antes de las ocho = 7:30.",
          en: "'halb' (half) looks ahead to the next hour: halb acht = half an hour before eight = 7:30.",
        },
        table: [["7:00", "sieben Uhr"], ["7:30", "halb acht"], ["8:30", "halb neun"]],
        meanings: [
          { es: "las siete", en: "seven o'clock" },
          { es: "las siete y media", en: "half past seven" },
          { es: "las ocho y media", en: "half past eight" },
        ],
      },
      question: {
        prompt: { es: "Son las seis y media. ¿Cómo se dice?", en: "It's half past six. How do you say it?" },
        options: ["Es ist halb sieben.", "Es ist halb sechs.", "Es ist sechs halb.", "Es ist halb nach sechs."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-uhrzeit"], tags: ["grammar", "time"],
    },
    {
      id: "halb-acht", type: "phrase", pos: "phrase", target: "Es ist halb acht.",
      gloss: { es: "Son las siete y media.", en: "It's half past seven." },
      distractors: ["Es ist halb sieben.", "Es ist acht halb.", "Es ist halb nach acht."],
      note: { es: "«halb acht» = media hora antes de las ocho, o sea 7:30.", en: "'halb acht' = half to eight, i.e. 7:30." },
      tags: ["time"],
    },
    {
      id: "frueh", type: "word", pos: "adv", target: "früh",
      gloss: { es: "temprano", en: "early" },
      distractors: ["spät", "froh", "frei"],
      tags: ["time", "goethe-a1"],
    },
    {
      id: "spaet", type: "word", pos: "adv", target: "spät",
      gloss: { es: "tarde (no temprano)", en: "late" },
      distractors: ["früh", "spitz", "satt"],
      tags: ["time", "goethe-a1"],
    },
    {
      id: "pat-uhrzeit-viertel", type: "pattern", target: "Viertel nach sieben · Viertel vor acht",
      gloss: { es: "y cuarto, menos cuarto: Viertel nach / vor", en: "quarter past / to: Viertel nach / vor" },
      pattern: {
        rule: {
          es: "nach = y (después de la hora); vor = menos (antes de la hora siguiente). Viertel = un cuarto: Viertel nach sieben = 7:15, Viertel vor acht = 7:45.",
          en: "nach = past (after the hour); vor = to (before the next hour). Viertel = a quarter: Viertel nach sieben = 7:15, Viertel vor acht = 7:45.",
        },
        table: [["7:10", "zehn nach sieben"], ["7:15", "Viertel nach sieben"], ["7:45", "Viertel vor acht"], ["7:50", "zehn vor acht"]],
        meanings: [
          { es: "las siete y diez", en: "ten past seven" },
          { es: "las siete y cuarto", en: "quarter past seven" },
          { es: "las ocho menos cuarto", en: "quarter to eight" },
          { es: "las ocho menos diez", en: "ten to eight" },
        ],
      },
      question: {
        prompt: { es: "Son las 8:15. ¿Cómo se dice?", en: "It's 8:15. How do you say it?" },
        options: ["Viertel nach acht", "Viertel vor acht", "Viertel nach neun", "halb neun"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-uhrzeit"], tags: ["grammar", "time"],
    },
    {
      id: "abend", type: "word", pos: "noun", target: "der Abend", gender: "m", plural: "die Abende",
      gloss: { es: "la noche (desde que oscurece)", en: "the evening" },
      distractors: ["das Abend", "der Abstand", "das Abendessen"],
      note: { es: "am Abend / abends = por la noche.", en: "am Abend / abends = in the evening." },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "morgen", type: "word", pos: "adv", target: "morgen",
      gloss: { es: "mañana (el día siguiente)", en: "tomorrow" },
      distractors: ["morgens", "sorgen", "gestern"],
      note: { es: "Con minúscula = mañana (el día siguiente); der Morgen = la mañana (parte del día).", en: "Lower case = tomorrow; der Morgen = the morning." },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "pat-um", type: "pattern", target: "um acht Uhr · um halb neun",
      gloss: { es: "a las …: um + hora", en: "at …: um + clock time" },
      pattern: {
        rule: {
          es: "Para decir a qué hora pasa algo, usa um + la hora: um acht Uhr (a las ocho), um halb neun (a las ocho y media).",
          en: "To say what time something happens, use um + the time: um acht Uhr (at eight), um halb neun (at half past eight).",
        },
        table: [["um sieben Uhr"], ["um halb neun"], ["um Viertel nach zehn"]],
        meanings: [
          { es: "a las siete", en: "at seven o'clock" },
          { es: "a las ocho y media", en: "at half past eight" },
          { es: "a las diez y cuarto", en: "at quarter past ten" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Ich komme ___ acht Uhr.»", en: "Complete: 'Ich komme ___ acht Uhr.'" },
        options: ["um", "am", "im"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-am-um"], tags: ["grammar", "time", "prepositions"],
    },
    {
      id: "manchmal", type: "word", pos: "adv", target: "manchmal",
      gloss: { es: "a veces", en: "sometimes" },
      distractors: ["mehrmals", "niemals", "damals"],
      tags: ["frequency", "goethe-a1"],
    },
    {
      id: "immer", type: "word", pos: "adv", target: "immer",
      gloss: { es: "siempre", en: "always" },
      distractors: ["nimmer", "einmal", "immun"],
      tags: ["frequency", "goethe-a1"],
    },
    {
      id: "jeden-tag", type: "phrase", pos: "phrase", target: "jeden Tag",
      gloss: { es: "todos los días", en: "every day" },
      distractors: ["jede Tag", "jeder Tag", "alle Tag"],
      note: { es: "Acusativo de tiempo: jeden Tag, jede Woche, jedes Jahr.", en: "Time in the accusative: jeden Tag, jede Woche, jedes Jahr." },
      tags: ["frequency", "chunk"],
    },

    // ── Verbs: arbeiten, schlafen, frühstücken ───────────────
    {
      id: "arbeiten", type: "word", pos: "verb", target: "arbeiten",
      gloss: { es: "trabajar", en: "to work" },
      forms: { ich: "arbeite", du: "arbeitest", er: "arbeitet", wir: "arbeiten", ihr: "arbeitet", sie: "arbeiten" },
      distractors: ["atmen", "warten", "bereiten"],
      note: { es: "Raíz en -t: se añade una e: du arbeitest, er arbeitet.", en: "Stem ends in -t, so add an e: du arbeitest, er arbeitet." },
      tags: ["routine", "goethe-a1"],
    },
    {
      id: "tab-arbeiten", type: "paradigm", target: "arbeiten — Präsens", spoken: "arbeiten",
      gloss: { es: "arbeiten (trabajar) — presente", en: "arbeiten (to work) — present" },
      grammar: ["de-g-praesens"],
      paradigm: {
        caption: { es: "Conjuga «arbeiten» (-e- antes de -st y -t)", en: "Conjugate arbeiten (-e- before -st and -t)" },
        cells: [
          { label: "ich", answer: "arbeite", ruleId: "de-g-praesens" },
          { label: "du", answer: "arbeitest", ruleId: "de-g-praesens" },
          { label: "er / sie / es", answer: "arbeitet", ruleId: "de-g-praesens" },
          { label: "wir", answer: "arbeiten", ruleId: "de-g-praesens" },
          { label: "ihr", answer: "arbeitet", ruleId: "de-g-praesens" },
          { label: "sie / Sie", answer: "arbeiten", ruleId: "de-g-praesens" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "wo-arbeitest-du", type: "sentence", register: "informal", target: "Wo arbeitest du?",
      gloss: { es: "¿Dónde trabajas?", en: "Where do you work?" },
      errors: [{ text: "Wo arbeitst du?", feedback: { es: "La raíz termina en -t: du arbeitest.", en: "The stem ends in -t: du arbeitest." }, ruleId: "de-g-praesens" }],
      distractors: ["Wo arbeitst du?", "Wo arbeitet du?", "Wer arbeitest du?"],
      tags: ["routine", "present"],
    },
    {
      id: "schlafen", type: "word", pos: "verb", target: "schlafen",
      gloss: { es: "dormir", en: "to sleep" },
      forms: { ich: "schlafe", du: "schläfst", er: "schläft", wir: "schlafen", ihr: "schlaft", sie: "schlafen" },
      distractors: ["schlagen", "schaffen", "laufen"],
      tags: ["routine", "goethe-a1"],
    },
    {
      id: "tab-schlafen", type: "paradigm", target: "schlafen — Präsens", spoken: "schlafen",
      gloss: { es: "schlafen (dormir) — presente", en: "schlafen (to sleep) — present" },
      grammar: ["de-g-vokalwechsel"],
      paradigm: {
        caption: { es: "Conjuga «schlafen» (a → ä con du y er/sie/es)", en: "Conjugate schlafen (a → ä with du and er/sie/es)" },
        cells: [
          { label: "ich", answer: "schlafe", ruleId: "de-g-vokalwechsel" },
          { label: "du", answer: "schläfst", ruleId: "de-g-vokalwechsel" },
          { label: "er / sie / es", answer: "schläft", ruleId: "de-g-vokalwechsel" },
          { label: "wir", answer: "schlafen", ruleId: "de-g-vokalwechsel" },
          { label: "ihr", answer: "schlaft", ruleId: "de-g-vokalwechsel" },
          { label: "sie / Sie", answer: "schlafen", ruleId: "de-g-vokalwechsel" },
        ],
      },
      tags: ["grammar", "present", "table", "vowel-change"],
    },
    {
      id: "lena-schlaeft", type: "sentence", target: "Lena schläft bis acht Uhr.",
      gloss: { es: "Lena duerme hasta las ocho.", en: "Lena sleeps until eight." },
      errors: [{ text: "Lena schlaft bis acht Uhr.", feedback: { es: "a → ä con er/sie: sie schläft.", en: "a → ä with er/sie: sie schläft." }, ruleId: "de-g-vokalwechsel" }],
      distractors: ["Lena schlaft bis acht Uhr.", "Lena schläfst bis acht Uhr.", "Lena schläft um acht bis."],
      tags: ["routine", "vowel-change"],
    },
    {
      id: "fruehstuecken", type: "word", pos: "verb", target: "frühstücken",
      gloss: { es: "desayunar", en: "to have breakfast" },
      forms: { ich: "frühstücke", du: "frühstückst", er: "frühstückt", wir: "frühstücken", ihr: "frühstückt", sie: "frühstücken" },
      distractors: ["frühzeitig", "fröhlich", "flüstern"],
      note: { es: "El desayuno = das Frühstück (sustantivo, con mayúscula).", en: "Breakfast = das Frühstück (noun, capitalised)." },
      tags: ["routine", "goethe-a1"],
    },
    {
      id: "um-acht-fruehstuecke", type: "sentence", target: "Um acht Uhr frühstücke ich.",
      gloss: { es: "A las ocho desayuno.", en: "At eight I have breakfast." },
      accept: [{ text: "Ich frühstücke um acht Uhr." }, { text: "Um acht frühstücke ich." }],
      errors: [{ text: "Um acht Uhr ich frühstücke.", feedback: { es: "El verbo va en segunda posición: Um acht Uhr frühstücke ich.", en: "The verb comes second: Um acht Uhr frühstücke ich." } }],
      distractors: ["frühstückt", "am", "Frühstück"],
      tags: ["routine", "word-order"],
    },

    // ── Separable verbs, step 1: the prefix goes to the end ──
    {
      id: "kaufen", type: "word", pos: "verb", target: "kaufen",
      gloss: { es: "comprar", en: "to buy" },
      forms: { ich: "kaufe", du: "kaufst", er: "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen" },
      distractors: ["laufen", "kochen", "kosten"],
      tags: ["verb", "shopping", "goethe-a1"],
    },
    {
      id: "stehen", type: "word", pos: "verb", target: "stehen",
      gloss: { es: "estar de pie / estar (en un lugar)", en: "to stand" },
      forms: { ich: "stehe", du: "stehst", er: "steht", wir: "stehen", ihr: "steht", sie: "stehen" },
      distractors: ["sehen", "gehen", "stellen"],
      tags: ["verb", "goethe-a1"],
    },
    {
      id: "einkaufen", type: "word", pos: "verb", target: "einkaufen",
      gloss: { es: "hacer las compras", en: "to do the shopping" },
      forms: { ich: "kaufe ein", du: "kaufst ein", er: "kauft ein", wir: "kaufen ein", ihr: "kauft ein", sie: "kaufen ein" },
      distractors: ["verkaufen", "einladen", "einpacken"],
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "pat-trennbar-1", type: "pattern", target: "einkaufen → Ich kaufe heute ein.",
      gloss: { es: "verbos separables: el prefijo va al final", en: "separable verbs: the prefix goes to the end" },
      pattern: {
        rule: {
          es: "Algunos verbos llevan delante una partícula (ein-, auf-, an-, fern-). En la frase, el verbo va en 2.º lugar y la partícula se va al final: einkaufen → Ich kaufe heute ein.",
          en: "Some verbs have a little prefix in front (ein-, auf-, an-, fern-). In the sentence the verb goes in place 2 and the prefix goes to the end: einkaufen → Ich kaufe heute ein.",
        },
        table: [["kaufen", "Ich kaufe Brot."], ["einkaufen", "Ich kaufe heute ein."], ["aufstehen", "Ich stehe früh auf."]],
        meanings: [
          { es: "comprar: Compro pan.", en: "to buy: I'm buying bread." },
          { es: "hacer las compras: Hoy hago las compras.", en: "to do the shopping: I'm doing the shopping today." },
          { es: "levantarse: Me levanto temprano.", en: "to get up: I get up early." },
        ],
      },
      question: {
        prompt: { es: "Completa: «Ich ___ heute ein.»", en: "Complete: 'Ich ___ heute ein.'" },
        options: ["kaufe", "einkaufe", "kaufen", "kauft"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-trennbar"], tags: ["grammar", "separable"],
    },
    {
      id: "ich-kaufe-ein", type: "sentence", target: "Ich kaufe heute ein.",
      gloss: { es: "Hoy hago las compras.", en: "I'm doing the shopping today." },
      accept: [{ text: "Heute kaufe ich ein." }],
      errors: [{ text: "Ich einkaufe heute.", feedback: { es: "El prefijo va al final: Ich kaufe heute ein.", en: "The prefix goes to the end: Ich kaufe heute ein." }, ruleId: "de-g-trennbar" }],
      distractors: ["Ich einkaufe heute.", "Ich kaufe ein heute.", "Ich kaufe heute an."],
      tags: ["routine", "separable"],
    },
    {
      id: "aufstehen", type: "word", pos: "verb", target: "aufstehen",
      gloss: { es: "levantarse", en: "to get up" },
      forms: { ich: "stehe auf", du: "stehst auf", er: "steht auf", wir: "stehen auf", ihr: "steht auf", sie: "stehen auf", pp: "aufgestanden", aux: "sein" },
      distractors: ["verstehen", "aufhören", "anstehen"],
      note: { es: "Verbo separable: ich stehe um sieben auf.", en: "Separable verb: ich stehe um sieben auf." },
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "tab-aufstehen", type: "paradigm", target: "aufstehen — Präsens", spoken: "aufstehen",
      gloss: { es: "aufstehen (levantarse) — presente", en: "aufstehen (to get up) — present" },
      grammar: ["de-g-trennbar"],
      paradigm: {
        caption: { es: "Conjuga «aufstehen» (auf al final)", en: "Conjugate aufstehen (auf goes last)" },
        cells: [
          { label: "ich", answer: "stehe auf", ruleId: "de-g-trennbar" },
          { label: "du", answer: "stehst auf", ruleId: "de-g-trennbar" },
          { label: "er / sie / es", answer: "steht auf", ruleId: "de-g-trennbar" },
          { label: "wir", answer: "stehen auf", ruleId: "de-g-trennbar" },
          { label: "ihr", answer: "steht auf", ruleId: "de-g-trennbar" },
          { label: "sie / Sie", answer: "stehen auf", ruleId: "de-g-trennbar" },
        ],
      },
      tags: ["grammar", "present", "table", "separable"],
    },
    {
      id: "ich-stehe-auf", type: "sentence", target: "Ich stehe um sieben Uhr auf.",
      gloss: { es: "Me levanto a las siete.", en: "I get up at seven." },
      accept: [{ text: "Ich stehe um sieben auf." }, { text: "Um sieben Uhr stehe ich auf." }, { text: "Um sieben stehe ich auf." }],
      errors: [{ text: "Ich aufstehe um sieben Uhr.", feedback: { es: "El prefijo va al final: ich stehe … auf.", en: "The prefix goes to the end: ich stehe … auf." } }],
      distractors: ["aufstehe", "am", "stehen"],
      tags: ["routine", "separable"],
    },
    {
      id: "wann-stehst-du-auf", type: "sentence", register: "informal", target: "Wann stehst du auf?",
      gloss: { es: "¿A qué hora te levantas?", en: "When do you get up?" },
      errors: [{ text: "Wann aufstehst du?", feedback: { es: "También en la pregunta el prefijo va al final: Wann stehst du auf?", en: "In questions too the prefix goes last: Wann stehst du auf?" }, ruleId: "de-g-trennbar" }],
      distractors: ["Wann aufstehst du?", "Wann stehst auf du?", "Wann steht du auf?"],
      tags: ["routine", "separable"],
    },

    // ── More separable verbs ─────────────────────────────────
    {
      id: "anfangen", type: "word", pos: "verb", target: "anfangen",
      gloss: { es: "empezar", en: "to start / begin" },
      forms: { ich: "fange an", du: "fängst an", er: "fängt an", wir: "fangen an", ihr: "fangt an", sie: "fangen an", pp: "angefangen", aux: "haben" },
      distractors: ["anfassen", "empfangen", "auffangen"],
      note: { es: "Separable y con umlaut en du/er: du fängst an.", en: "Separable, with an umlaut in du/er: du fängst an." },
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "fernsehen", type: "word", pos: "verb", target: "fernsehen",
      gloss: { es: "ver televisión", en: "to watch TV" },
      forms: { ich: "sehe fern", du: "siehst fern", er: "sieht fern", wir: "sehen fern", ihr: "seht fern", sie: "sehen fern" },
      distractors: ["versehen", "ansehen", "fernbleiben"],
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "tab-anfangen", type: "paradigm", target: "anfangen — Präsens", spoken: "anfangen",
      gloss: { es: "anfangen (empezar) — presente", en: "anfangen (to start) — present" },
      grammar: ["de-g-trennbar"],
      paradigm: {
        caption: { es: "Conjuga «anfangen» (a → ä con du y er; an al final)", en: "Conjugate anfangen (a → ä with du and er; an goes last)" },
        cells: [
          { label: "ich", answer: "fange an", ruleId: "de-g-trennbar" },
          { label: "du", answer: "fängst an", ruleId: "de-g-vokalwechsel" },
          { label: "er / sie / es", answer: "fängt an", ruleId: "de-g-vokalwechsel" },
          { label: "wir", answer: "fangen an", ruleId: "de-g-trennbar" },
          { label: "ihr", answer: "fangt an", ruleId: "de-g-trennbar" },
          { label: "sie / Sie", answer: "fangen an", ruleId: "de-g-trennbar" },
        ],
      },
      tags: ["grammar", "present", "table", "separable"],
    },
    {
      id: "film-faengt-an", type: "sentence", target: "Der Film fängt um acht an.",
      gloss: { es: "La película empieza a las ocho.", en: "The film starts at eight." },
      accept: [{ text: "Der Film fängt um acht Uhr an." }, { text: "Der Film beginnt um acht." }, { text: "Der Film beginnt um acht Uhr." }],
      distractors: ["anfängt", "fangt", "am"],
      tags: ["time", "separable"],
    },
    {
      id: "am-abend-fernsehen", type: "sentence", target: "Am Abend sehe ich fern.",
      gloss: { es: "Por la noche veo televisión.", en: "In the evening I watch TV." },
      accept: [{ text: "Abends sehe ich fern." }, { text: "Ich sehe am Abend fern." }],
      distractors: ["fernsehe", "im", "sieht"],
      tags: ["routine", "separable"],
    },
    {
      id: "anrufen", type: "word", pos: "verb", target: "anrufen",
      gloss: { es: "llamar (por teléfono)", en: "to call (on the phone)" },
      forms: { ich: "rufe an", du: "rufst an", er: "ruft an", wir: "rufen an", ihr: "ruft an", sie: "rufen an", pp: "angerufen", aux: "haben" },
      distractors: ["aufrufen", "anrühren", "annehmen"],
      note: { es: "Con acusativo: ich rufe dich an (te llamo).", en: "Takes the accusative: ich rufe dich an." },
      tags: ["routine", "separable", "goethe-a1"],
    },
    {
      id: "ich-rufe-dich-an", type: "sentence", register: "informal", target: "Ich rufe dich morgen an.",
      gloss: { es: "Te llamo mañana.", en: "I'll call you tomorrow." },
      accept: [{ text: "Morgen rufe ich dich an." }],
      errors: [{ text: "Ich anrufe dich morgen.", feedback: { es: "anrufen es separable: ich rufe dich … an.", en: "anrufen is separable: ich rufe dich … an." } }],
      distractors: ["anrufe", "dir", "ruft"],
      tags: ["routine", "separable"],
    },
    {
      id: "pat-trennbar", type: "pattern", target: "aufstehen → Ich stehe um sieben auf.",
      gloss: { es: "verbos separables", en: "separable verbs" },
      pattern: {
        rule: {
          es: "También en las preguntas la parte conjugada va antes del sujeto y el prefijo se queda al final: Wann fängt der Film an?",
          en: "In questions too, the conjugated part comes before the subject and the prefix stays at the end: Wann fängt der Film an?",
        },
        table: [["aufstehen", "Wann stehst du auf?"], ["anfangen", "Der Film fängt um neun an."], ["einkaufen", "Wir kaufen am Abend ein."], ["fernsehen", "Er sieht jeden Abend fern."]],
        meanings: [
          { es: "levantarse: ¿A qué hora te levantas?", en: "to get up: When do you get up?" },
          { es: "empezar: La película empieza a las nueve.", en: "to start: The film starts at nine." },
          { es: "hacer las compras: Hacemos las compras por la tarde.", en: "to do the shopping: We shop in the evening." },
          { es: "ver televisión: Ve televisión todas las noches.", en: "to watch TV: He watches TV every evening." },
        ],
      },
      question: {
        prompt: { es: "Completa: «Wann ___ der Film an?»", en: "Complete: 'Wann ___ der Film an?'" },
        options: ["fängt", "anfängt", "fangt", "fängst"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-trennbar"], tags: ["grammar", "separable"],
    },

    // ── am + day or part of the day ──────────────────────────
    {
      id: "pat-am-um", type: "pattern", target: "am Montag · am Abend · um acht Uhr",
      gloss: { es: "am + día o parte del día", en: "am + day or part of the day" },
      pattern: {
        rule: {
          es: "Con días y partes del día se usa am (= an dem): am Montag, am Abend, am Wochenende. Excepción: la noche va con in: in der Nacht.",
          en: "Days and parts of the day take am (= an dem): am Montag, am Abend, am Wochenende. Exception: night takes in: in der Nacht.",
        },
        table: [["am Montag"], ["am Morgen"], ["am Abend"], ["am Wochenende"], ["in der Nacht"]],
        meanings: [
          { es: "el lunes", en: "on Monday" },
          { es: "por la mañana", en: "in the morning" },
          { es: "por la noche (al anochecer)", en: "in the evening" },
          { es: "el fin de semana", en: "at the weekend" },
          { es: "de noche (excepción)", en: "at night (exception)" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Der Film fängt ___ Abend ___ acht Uhr an.»", en: "Complete: 'Der Film fängt ___ Abend ___ acht Uhr an.'" },
        options: ["am … um", "um … am", "im … um", "am … im"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-am-um"], tags: ["grammar", "time", "prepositions"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-mein-tag", type: "listening",
      target: "Ich stehe um halb sieben auf und frühstücke. Um acht fange ich an zu arbeiten. Am Abend koche ich und sehe ein bisschen fern.",
      gloss: {
        es: "Me levanto a las seis y media y desayuno. A las ocho empiezo a trabajar. Por la noche cocino y veo un poco de televisión.",
        en: "I get up at half past six and have breakfast. At eight I start work. In the evening I cook and watch a bit of TV.",
      },
      question: {
        prompt: { es: "¿A qué hora empieza a trabajar?", en: "What time does the speaker start work?" },
        options: [
          { es: "A las ocho", en: "At eight" },
          { es: "A las seis y media", en: "At half past six" },
          { es: "A las siete y media", en: "At half past seven" },
          { es: "A las nueve", en: "At nine" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "routine"],
    },
    {
      id: "dlg-wochenende", type: "dialogue", register: "informal", target: "Ich nicht.",
      gloss: { es: "Yo no.", en: "Not me." },
      turns: [
        { who: "A", target: "Wann stehst du am Wochenende auf?", gloss: { es: "¿A qué hora te levantas el fin de semana?", en: "When do you get up at the weekend?" } },
        { who: "B", target: "Spät! Am Samstag schlafe ich bis zehn.", gloss: { es: "¡Tarde! El sábado duermo hasta las diez.", en: "Late! On Saturday I sleep until ten." } },
        { who: "A", target: "Ich nicht. Ich stehe immer früh auf.", gloss: { es: "Yo no. Yo siempre me levanto temprano.", en: "Not me. I always get up early." } },
      ],
      question: {
        prompt: { es: "¿Hasta qué hora duerme B el sábado?", en: "Until when does B sleep on Saturday?" },
        options: [
          { es: "Hasta las diez", en: "Until ten" },
          { es: "Hasta las ocho", en: "Until eight" },
          { es: "Hasta las doce", en: "Until twelve" },
          { es: "Se levanta temprano", en: "B gets up early" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "routine"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-wer", type: "bridge", onlyFor: "en", target: "wer",
      gloss: { es: "quién", en: "who" },
      question: {
        prompt: { es: "«Wer ruft an?» significa…", en: "'Wer ruft an?' means…" },
        options: [
          { es: "¿Quién llama?", en: "Who's calling?" },
          { es: "¿Dónde llama?", en: "Where is he calling?" },
          { es: "¿Por qué llama?", en: "Why is he calling?" },
          { es: "¿Cuándo llama?", en: "When is he calling?" },
        ],
        answer: 0,
      },
      note: { en: "wer = who and wo = where: the opposite of what English suggests." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
