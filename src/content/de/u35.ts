import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u35",
  lang: "de",
  index: 35,
  cefr: "C2",
  title: { target: "Sprache in Raum und Zeit", es: "La lengua en el espacio y el tiempo", en: "Language across places and time" },
  canDo: [
    { es: "Reconozco el alemán estándar de Austria y Suiza y sé que es tan correcto como el de Alemania.", en: "I can recognise Austrian and Swiss Standard German and know they are just as correct as German German." },
    { es: "Entiendo formas antiguas que sobreviven en expresiones fijas (meines Erachtens, guten Mutes, ward).", en: "I can understand old forms that survive in set phrases (meines Erachtens, guten Mutes, ward)." },
    { es: "Puedo hablar de préstamos, reformas ortográficas y cambio lingüístico.", en: "I can talk about loanwords, spelling reforms and language change." },
  ],
  icon: "🗺️",
  items: build("de", 35, "C2", [
    // ── Regional standard words ──────────────────────────────
    {
      id: "tomate", type: "word", pos: "noun", target: "die Tomate", gender: "f", plural: "die Tomaten",
      gloss: { es: "el tomate", en: "the tomato" },
      variants: [{ region: "AT", text: "der Paradeiser", note: { es: "En Austria (el plural es igual: die Paradeiser).", en: "In Austria (same plural: die Paradeiser)." } }],
      distractors: ["der Tomate", "das Tomate", "die Tonne"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "food"],
    },
    {
      id: "aprikose", type: "word", pos: "noun", target: "die Aprikose", gender: "f", plural: "die Aprikosen",
      gloss: { es: "el damasco (albaricoque)", en: "the apricot" },
      variants: [{ region: "AT", text: "die Marille", note: { es: "En Austria: Marillenknödel, Marillenmarmelade.", en: "In Austria: Marillenknödel, Marillenmarmelade." } }],
      distractors: ["der Aprikose", "die Artischocke", "die Apotheke"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "food"],
    },
    {
      id: "buergersteig", type: "word", pos: "noun", target: "der Bürgersteig", gender: "m", plural: "die Bürgersteige",
      gloss: { es: "la vereda (acera)", en: "the pavement, sidewalk" },
      variants: [
        { region: "CH", text: "das Trottoir", note: { es: "Palabra del alemán estándar de Suiza, del francés.", en: "Swiss Standard German, from French." } },
        { region: "AT", text: "der Gehsteig" },
      ],
      distractors: ["die Bürgersteig", "der Bürgermeister", "der Bahnsteig"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "city"],
    },
    {
      id: "hausmeister", type: "word", pos: "noun", target: "der Hausmeister", gender: "m", plural: "die Hausmeister",
      gloss: { es: "el conserje, el encargado del edificio", en: "the caretaker, janitor" },
      variants: [
        { region: "CH", text: "der Abwart" },
        { region: "AT", text: "der Hausbesorger" },
      ],
      distractors: ["die Hausmeister", "der Hausherr", "der Hauptmeister"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "home"],
    },
    {
      id: "abitur", type: "word", pos: "noun", target: "das Abitur", gender: "n", plural: "die Abiture",
      gloss: { es: "el examen final de la secundaria", en: "the school-leaving exam" },
      variants: [
        { region: "AT", text: "die Matura" },
        { region: "CH", text: "die Matura", note: { es: "En Suiza también die Matur.", en: "In Switzerland also die Matur." } },
      ],
      distractors: ["der Abitur", "das Abenteuer", "das Attribut"],
      note: { es: "das Abi en el habla de los estudiantes.", en: "Students just say das Abi." },
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "education"],
    },

    // ── Talking about variation and change ───────────────────
    {
      id: "helvetismus", type: "word", pos: "noun", target: "der Helvetismus", gender: "m", plural: "die Helvetismen",
      gloss: { es: "el helvetismo (palabra propia del alemán de Suiza)", en: "the Helvetism (a word specific to Swiss German)" },
      distractors: ["die Helvetismus", "der Hellenismus", "der Hedonismus"],
      note: { es: "Igual con Austria: der Austriazismus, die Austriazismen.", en: "Likewise for Austria: der Austriazismus, die Austriazismen." },
      grammar: ["de-g-standardvarietaeten"], tags: ["language", "regional"],
    },
    {
      id: "lehnwort", type: "word", pos: "noun", target: "das Lehnwort", gender: "n", plural: "die Lehnwörter",
      gloss: { es: "el préstamo (lingüístico)", en: "the loanword" },
      distractors: ["der Lehnwort", "das Leitwort", "das Lehrwerk"],
      note: { es: "Fenster (de fenestra) es un Lehnwort tan antiguo que ya no lo parece.", en: "Fenster (from Latin fenestra) is a loanword so old it no longer looks like one." },
      tags: ["language", "history"],
    },
    {
      id: "rechtschreibreform", type: "word", pos: "noun", target: "die Rechtschreibreform", gender: "f", plural: "die Rechtschreibreformen",
      gloss: { es: "la reforma ortográfica", en: "the spelling reform" },
      distractors: ["der Rechtschreibreform", "die Rechtschreibung", "die Rentenreform"],
      note: { es: "La de 1996 cambió daß por dass, entre otras cosas.", en: "The 1996 reform changed daß to dass, among other things." },
      tags: ["language", "history"],
    },
    {
      id: "veraltet", type: "word", pos: "adj", target: "veraltet",
      gloss: { es: "anticuado/a, en desuso", en: "obsolete, dated" },
      distractors: ["verwaltet", "verärgert", "verachtet"],
      tags: ["language", "history"],
    },

    // ── Fossilised forms ─────────────────────────────────────
    {
      id: "meines-erachtens", type: "phrase", pos: "phrase", target: "meines Erachtens",
      gloss: { es: "a mi juicio (formal)", en: "in my view (formal)" },
      distractors: ["meinem Erachten", "meines Erachten", "mein Erachtens"],
      note: { es: "Genitivo fosilizado, típico de textos académicos y formales.", en: "A frozen genitive, typical of academic and formal writing." },
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "formal"],
    },
    {
      id: "guten-mutes", type: "phrase", pos: "phrase", target: "guten Mutes sein",
      gloss: { es: "estar de buen ánimo, ser optimista", en: "to be in good spirits" },
      distractors: ["gutes Mutes sein", "guten Mut sein", "gutem Mutes sein"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "formal"],
    },
    {
      id: "eines-schoenen-tages", type: "phrase", pos: "phrase", target: "eines schönen Tages",
      gloss: { es: "un buen día", en: "one fine day" },
      distractors: ["einen schönen Tag", "eines schönes Tages", "an einem schönen Tages"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "storytelling"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "im-januar-skifahren", type: "sentence", target: "Im Januar fahren wir zum Skifahren.",
      gloss: { es: "En enero nos vamos a esquiar.", en: "In January we're going skiing." },
      variants: [{ region: "AT", text: "Im Jänner fahren wir zum Schifahren.", note: { es: "En Austria: Jänner y, a menudo, Schi.", en: "In Austria: Jänner and often Schi." } }],
      distractors: ["Januars", "fährt", "Schnee"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "leisure"],
    },
    {
      id: "vor-dem-bildschirm-gesessen", type: "sentence", target: "Ich habe gestern lange vor dem Bildschirm gesessen.",
      gloss: { es: "Ayer estuve mucho rato sentado frente a la pantalla.", en: "Yesterday I sat in front of the screen for a long time." },
      variants: [
        { region: "S-DE", text: "Ich bin gestern lange vor dem Bildschirm gesessen." },
        { region: "AT", text: "Ich bin gestern lange vor dem Bildschirm gesessen." },
        { region: "CH", text: "Ich bin gestern lange vor dem Bildschirm gesessen." },
      ],
      annot: { "gesessen": { es: "en el norte, haben; en el sur, Austria y Suiza, sein", en: "haben in the north; sein in the south, Austria and Switzerland" } },
      distractors: ["sitzen", "den", "hatte"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "perfect"],
    },
    {
      id: "velo-vor-dem-haus", type: "sentence", target: "Das Fahrrad steht vor dem Haus.",
      gloss: { es: "La bici está delante de la casa.", en: "The bike is outside the house." },
      variants: [{ region: "CH", text: "Das Velo steht vor dem Haus.", note: { es: "En Suiza, das Velo (del francés vélo).", en: "In Switzerland, das Velo (from French vélo)." } }],
      distractors: ["liegt", "den", "Häuser"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional"],
    },
    {
      id: "kein-eszett", type: "sentence", target: "In der Schweiz wird das Eszett nicht verwendet.",
      gloss: { es: "En Suiza no se usa la letra ß (eszett).", en: "In Switzerland the letter ß (eszett) isn't used." },
      distractors: ["Eszetts", "verwenden", "wurde"],
      grammar: ["de-g-standardvarietaeten"], tags: ["regional", "spelling"],
    },
    {
      id: "er-ward-nicht-mehr-gesehen", type: "sentence", target: "Er ward nicht mehr gesehen.",
      gloss: { es: "Nunca más se lo volvió a ver.", en: "He was never seen again." },
      accept: [{ text: "Er wurde nicht mehr gesehen." }],
      annot: { "ward": { es: "forma antigua de wurde (hoy solo literaria o humorística)", en: "old form of wurde (now only literary or humorous)" } },
      distractors: ["wird", "sah", "gesehenen"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "literature"],
    },
    {
      id: "des-guten-zu-viel", type: "sentence", target: "Das war des Guten zu viel.",
      gloss: { es: "Eso ya fue pasarse de la raya.", en: "That was too much of a good thing." },
      annot: { "des Guten": { es: "genitivo partitivo antiguo: «de lo bueno»", en: "old partitive genitive: 'of the good'" } },
      distractors: ["dem", "Gute", "viele"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "idioms"],
    },
    {
      id: "unverrichteter-dinge", type: "sentence", target: "Unverrichteter Dinge mussten wir wieder abziehen.",
      gloss: { es: "Tuvimos que irnos sin haber logrado nada.", en: "We had to leave empty-handed." },
      annot: { "Unverrichteter Dinge": { es: "genitivo adverbial fosilizado: «sin conseguir lo que se quería»", en: "frozen adverbial genitive: 'without getting what you came for'" } },
      distractors: ["Unverrichtete", "Dingen", "abgezogen"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "formal"],
    },
    {
      id: "dem-manne", type: "sentence", target: "Dem Manne kann geholfen werden.",
      gloss: { es: "A ese hombre se le puede ayudar. (cita de Schiller, hoy irónica)", en: "That man can be helped. (a Schiller quote, now used ironically)" },
      annot: { "Manne": { es: "dativo con -e: forma antigua", en: "dative with -e: an old form" } },
      distractors: ["Den", "wird", "helfen"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "literature"],
    },
    {
      id: "regel-ueberholt", type: "sentence", target: "Meines Erachtens ist diese Regel längst überholt.",
      gloss: { es: "A mi juicio, esta regla quedó obsoleta hace tiempo.", en: "In my view, this rule is long outdated." },
      distractors: ["Meinem", "überholte", "Regeln"],
      grammar: ["de-g-erstarrte-formen"], tags: ["history", "opinion"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-oesterreich", type: "paradigm", target: "Wie sagt man in Österreich?", spoken: "Wie sagt man in Österreich?",
      gloss: { es: "el alemán estándar de Austria", en: "Austrian Standard German" },
      grammar: ["de-g-standardvarietaeten"],
      paradigm: {
        caption: { es: "Escribe la palabra que se usa en Austria.", en: "Write the word used in Austria." },
        cells: [
          { label: "der Januar", answer: "der Jänner", accept: ["Jänner"], ruleId: "de-g-standardvarietaeten" },
          { label: "die Tomate", answer: "der Paradeiser", accept: ["Paradeiser"], ruleId: "de-g-standardvarietaeten" },
          { label: "die Aprikose", answer: "die Marille", accept: ["Marille"], ruleId: "de-g-standardvarietaeten" },
          { label: "die Sahne", answer: "das Obers", accept: ["Obers", "das Schlagobers", "Schlagobers"], ruleId: "de-g-standardvarietaeten" },
          { label: "die Kartoffel", answer: "der Erdapfel", accept: ["Erdapfel"], ruleId: "de-g-standardvarietaeten" },
        ],
      },
      tags: ["grammar", "regional", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-varietaeten", type: "pattern", target: "Fahrrad · Velo — Januar · Jänner",
      gloss: { es: "tres estándares de un mismo idioma", en: "three standards, one language" },
      pattern: {
        rule: {
          es: "El alemán es una lengua pluricéntrica: Alemania, Austria y Suiza tienen cada una su estándar, todos correctos. Cambian sobre todo palabras (Velo, Jänner), algunas formas (ich bin gesessen) y en Suiza la ortografía (ss en lugar de ß).",
          en: "German is a pluricentric language: Germany, Austria and Switzerland each have their own standard, all of them correct. The differences are mainly words (Velo, Jänner), some forms (ich bin gesessen) and, in Switzerland, spelling (ss instead of ß).",
        },
        table: [["Deutschland", "Österreich", "Schweiz"], ["Fahrrad", "Fahrrad", "Velo"], ["Januar", "Jänner", "Januar"], ["Bürgersteig", "Gehsteig", "Trottoir"], ["Straße", "Straße", "Strasse"]],
      },
      question: {
        prompt: { es: "Una suiza escribe «Strasse». ¿Es un error?", en: "A Swiss writer writes 'Strasse'. Is it a mistake?" },
        options: [
          { es: "No: en Suiza ss es la norma", en: "No: in Switzerland ss is the standard" },
          { es: "Sí: siempre se escribe ß", en: "Yes: it's always spelled with ß" },
          { es: "Solo en textos informales", en: "Only in informal texts" },
          { es: "Sí, desde la reforma de 1996", en: "Yes, since the 1996 reform" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-standardvarietaeten"], tags: ["grammar", "regional"],
    },
    {
      id: "pat-erstarrt", type: "pattern", target: "meines Erachtens · guten Mutes · dem Manne",
      gloss: { es: "formas antiguas que sobreviven", en: "old forms that survive" },
      pattern: {
        rule: {
          es: "Algunas formas que ya no se usan libremente siguen vivas en expresiones fijas: genitivos adverbiales (eines Tages, guten Mutes), el dativo con -e (zu Hause, im Grunde) y pretéritos antiguos como ward. Se aprenden como bloque.",
          en: "Some forms no longer used freely live on in set phrases: adverbial genitives (eines Tages, guten Mutes), the dative with -e (zu Hause, im Grunde) and old past forms like ward. Learn them as a block.",
        },
        table: [["Genitiv", "eines Tages, meines Erachtens"], ["Dativ-e", "zu Hause, im Grunde, dem Manne"], ["alte Form", "ward = wurde"]],
      },
      question: {
        prompt: { es: "«Sie verließ das Haus ___ Mutes.» (= de buen ánimo)", en: "'Sie verließ das Haus ___ Mutes.' (= in good spirits)" },
        options: ["guten", "gutes", "gutem", "gute"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-erstarrte-formen"], tags: ["grammar", "history"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-plurizentrisch", type: "listening",
      target: "Deutsch ist eine plurizentrische Sprache. Es gibt nicht ein einziges richtiges Hochdeutsch, sondern mehrere Standardvarietäten. Wer in Wien Jänner sagt, spricht also kein schlechteres Deutsch als jemand in Berlin.",
      gloss: {
        es: "El alemán es una lengua pluricéntrica. No hay un único alemán estándar correcto, sino varios estándares. Quien dice Jänner en Viena no habla peor alemán que alguien en Berlín.",
        en: "German is a pluricentric language. There isn't one single correct standard German, but several standard varieties. Someone in Vienna who says Jänner doesn't speak worse German than someone in Berlin.",
      },
      question: {
        prompt: { es: "¿Qué dice el texto sobre el alemán de Austria?", en: "What does the text say about Austrian German?" },
        options: [
          { es: "Que es tan correcto como el de Alemania", en: "It's just as correct as German German" },
          { es: "Que es un dialecto sin norma escrita", en: "It's a dialect with no written standard" },
          { es: "Que es menos correcto", en: "It's less correct" },
          { es: "Que está desapareciendo", en: "It's dying out" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-standardvarietaeten"], tags: ["listening", "regional"],
    },
    {
      id: "dlg-naschmarkt", type: "dialogue", target: "Marillen haben wir heute leider keine mehr.",
      gloss: { es: "Damascos ya no nos quedan hoy, lo siento.", en: "I'm afraid we're out of apricots today." },
      turns: [
        { who: "A", target: "Ich hätte gern ein Kilo Tomaten, bitte.", gloss: { es: "Quisiera un kilo de tomates, por favor.", en: "I'd like a kilo of tomatoes, please." } },
        { who: "B", target: "Paradeiser, gern. Darf es sonst noch etwas sein?", gloss: { es: "Tomates, con gusto. ¿Algo más?", en: "Tomatoes, sure. Anything else?" } },
        { who: "A", target: "Ja, ein paar Aprikosen, wenn Sie welche haben.", gloss: { es: "Sí, unos damascos, si tiene.", en: "Yes, some apricots, if you have any." } },
        { who: "B", target: "Marillen haben wir heute leider keine mehr.", gloss: { es: "Damascos ya no nos quedan hoy, lo siento.", en: "I'm afraid we're out of apricots today." } },
      ],
      question: {
        prompt: { es: "¿Qué no le pueden vender a A?", en: "What can't A buy?" },
        options: [
          { es: "Damascos", en: "Apricots" },
          { es: "Tomates", en: "Tomatoes" },
          { es: "Papas", en: "Potatoes" },
          { es: "Crema", en: "Cream" },
        ],
        answer: 0,
      },
      note: { es: "La vendedora es de Viena: dice Paradeiser y Marillen.", en: "The stallholder is Viennese: she says Paradeiser and Marillen." },
      exercises: ["question"], grammar: ["de-g-standardvarietaeten"], tags: ["dialogue", "regional"],
    },
  ]),
};
