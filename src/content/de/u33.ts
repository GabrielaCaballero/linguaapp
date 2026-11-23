import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u33",
  lang: "de",
  index: 33,
  cefr: "C2",
  title: { target: "Literatur und Rhetorik", es: "Literatura y retórica", en: "Literature and rhetoric" },
  canDo: [
    { es: "Puedo leer textos literarios y hablar de su estilo, sus imágenes y su estructura.", en: "I can read literary texts and discuss their style, imagery and structure." },
    { es: "Reconozco el Konjunktiv I de deseo y de instrucción (es lebe, man nehme, möge).", en: "I can recognise Konjunktiv I for wishes and instructions (es lebe, man nehme, möge)." },
    { es: "Sé expresar concesiones con registro elevado (so … auch, mag … noch so, sei es … sei es).", en: "I can express concessions in an elevated register (so … auch, mag … noch so, sei es … sei es)." },
  ],
  icon: "📜",
  items: build("de", 33, "C2", [
    // ── Talking about texts ──────────────────────────────────
    {
      id: "gattung", type: "word", pos: "noun", target: "die Gattung", gender: "f", plural: "die Gattungen",
      gloss: { es: "el género (literario)", en: "the (literary) genre" },
      distractors: ["der Gattung", "die Gattin", "die Haltung"],
      note: { es: "Las tres grandes Gattungen: Epik, Lyrik y Dramatik.", en: "The three main Gattungen: Epik, Lyrik and Dramatik." },
      tags: ["literature"],
    },
    {
      id: "metapher", type: "word", pos: "noun", target: "die Metapher", gender: "f", plural: "die Metaphern",
      gloss: { es: "la metáfora", en: "the metaphor" },
      distractors: ["der Metapher", "die Metamorphose", "die Methode"],
      tags: ["literature", "rhetoric"],
    },
    {
      id: "leitmotiv", type: "word", pos: "noun", target: "das Leitmotiv", gender: "n", plural: "die Leitmotive",
      gloss: { es: "el motivo recurrente, el leitmotiv", en: "the leitmotif, recurring theme" },
      distractors: ["der Leitmotiv", "das Leitbild", "die Leitung"],
      tags: ["literature"],
    },
    {
      id: "reim", type: "word", pos: "noun", target: "der Reim", gender: "m", plural: "die Reime",
      gloss: { es: "la rima", en: "the rhyme" },
      distractors: ["die Reim", "der Keim", "der Raum"],
      note: { es: "Sich keinen Reim auf etwas machen können = no entender algo en absoluto.", en: "Sich keinen Reim auf etwas machen können = to be unable to make sense of something." },
      tags: ["literature", "poetry"],
    },
    {
      id: "schachtelsatz", type: "word", pos: "noun", target: "der Schachtelsatz", gender: "m", plural: "die Schachtelsätze",
      gloss: { es: "la oración larguísima llena de subordinadas", en: "the long, heavily nested sentence" },
      distractors: ["die Schachtelsatz", "der Nebensatz", "der Schachtelhalm"],
      note: { es: "Kleist y Thomas Mann son famosos por ellos.", en: "Kleist and Thomas Mann are famous for them." },
      tags: ["literature", "style"],
    },
    {
      id: "erhaben", type: "word", pos: "adj", target: "erhaben",
      gloss: { es: "sublime, elevado/a", en: "sublime, lofty" },
      distractors: ["erhoben", "erheblich", "ergeben"],
      note: { es: "über etwas erhaben sein = estar por encima de algo (über jeden Zweifel erhaben).", en: "über etwas erhaben sein = to be above something (über jeden Zweifel erhaben)." },
      tags: ["literature", "style"],
    },
    {
      id: "schwuelstig", type: "word", pos: "adj", target: "schwülstig",
      gloss: { es: "ampuloso/a, rimbombante", en: "bombastic, overwrought" },
      distractors: ["schwül", "schwierig", "schwammig"],
      tags: ["literature", "style"],
    },
    {
      id: "lakonisch", type: "word", pos: "adj", target: "lakonisch",
      gloss: { es: "lacónico/a", en: "laconic, terse" },
      distractors: ["logisch", "launisch", "lackiert"],
      tags: ["literature", "style"],
    },
    {
      id: "anprangern", type: "word", pos: "verb", target: "anprangern",
      gloss: { es: "denunciar públicamente", en: "to denounce, pillory" },
      forms: { er: "prangert an", praet: "prangerte an", pp: "angeprangert" },
      distractors: ["anpreisen", "anprobieren", "anlangen"],
      note: { es: "Viene de der Pranger, la picota medieval.", en: "From der Pranger, the medieval pillory." },
      tags: ["literature", "rhetoric", "separable"],
    },

    // ── Fixed phrases with Konjunktiv I ──────────────────────
    {
      id: "es-lebe", type: "phrase", pos: "phrase", target: "Es lebe die Freiheit!",
      gloss: { es: "¡Viva la libertad!", en: "Long live freedom!" },
      distractors: ["Es lebt die Freiheit!", "Es leben die Freiheit!", "Es liebe die Freiheit!"],
      grammar: ["de-g-konj1-wunsch"], tags: ["rhetoric", "subjunctive"],
    },
    {
      id: "es-sei-darauf-hingewiesen", type: "phrase", pos: "phrase", target: "Es sei darauf hingewiesen, dass …", spoken: "Es sei darauf hingewiesen, dass",
      gloss: { es: "Cabe señalar que…", en: "It should be pointed out that…" },
      distractors: ["Es ist darauf hingewiesen, dass …", "Es sei darauf gewiesen, dass …", "Es sei dafür hingewiesen, dass …"],
      grammar: ["de-g-konj1-wunsch"], tags: ["academic", "subjunctive"],
    },
    {
      id: "wie-dem-auch-sei", type: "phrase", pos: "phrase", target: "Wie dem auch sei, …", spoken: "Wie dem auch sei",
      gloss: { es: "Sea como sea…", en: "Be that as it may…" },
      distractors: ["Wie das auch sei, …", "Wie dem auch ist, …", "Was dem auch sei, …"],
      grammar: ["de-g-konzessiv-c2"], tags: ["rhetoric", "concession"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "man-nehme", type: "sentence", target: "Man nehme drei Eier und ein Pfund Mehl.",
      gloss: { es: "Tómense tres huevos y medio kilo de harina.", en: "Take three eggs and a pound of flour." },
      annot: { "nehme": { es: "Konjunktiv I: instrucción impersonal (recetas antiguas, manuales)", en: "Konjunktiv I: impersonal instruction (old recipes, manuals)" } },
      distractors: ["nimmt", "Eiern", "Pfunde"],
      grammar: ["de-g-konj1-wunsch"], tags: ["subjunctive", "style"],
    },
    {
      id: "moege-nie-enden", type: "sentence", target: "Möge dieser Tag nie enden.",
      gloss: { es: "Ojalá este día no termine nunca.", en: "May this day never end." },
      distractors: ["Mag", "endet", "Tage"],
      grammar: ["de-g-konj1-wunsch"], tags: ["subjunctive", "style"],
    },
    {
      id: "sei-es-aus-angst", type: "sentence", target: "Sei es aus Angst, sei es aus Bequemlichkeit: Niemand widersprach.",
      gloss: { es: "Ya fuera por miedo o por comodidad, nadie le llevó la contraria.", en: "Whether out of fear or out of convenience, nobody objected." },
      annot: { "Sei es": { es: "«ya sea…, ya sea…»: Konjunktiv I concesivo", en: "'whether… or…': concessive Konjunktiv I" } },
      distractors: ["Ist", "widersprechen", "jemand"],
      grammar: ["de-g-konzessiv-c2"], tags: ["concession", "style"],
    },
    {
      id: "so-klug-er-auch", type: "sentence", target: "So klug er auch sein mag, hier irrt er sich.",
      gloss: { es: "Por muy listo que sea, aquí se equivoca.", en: "However clever he may be, he's wrong here." },
      accept: [{ text: "So klug er auch sein mag, er irrt sich hier." }, { text: "So klug er auch ist, hier irrt er sich." }],
      annot: { "So klug er auch": { es: "so + adjetivo + auch = por muy… que", en: "so + adjective + auch = however…" } },
      distractors: ["klüger", "irrte", "möge"],
      grammar: ["de-g-konzessiv-c2"], tags: ["concession", "style"],
    },
    {
      id: "mag-er-noch-so-bitten", type: "sentence", target: "Mag er auch noch so bitten, ich bleibe dabei.",
      gloss: { es: "Por más que me ruegue, no cambio de opinión.", en: "However much he begs, I'm sticking to my decision." },
      accept: [{ text: "Mag er auch noch so sehr bitten, ich bleibe dabei." }],
      distractors: ["Möge", "bittet", "bleiben"],
      grammar: ["de-g-konzessiv-c2"], tags: ["concession", "style"],
    },
    {
      id: "kaum-hatte-sie", type: "sentence", target: "Kaum hatte sie das Haus betreten, als das Telefon klingelte.",
      gloss: { es: "Apenas había entrado en la casa cuando sonó el teléfono.", en: "No sooner had she entered the house than the phone rang." },
      accept: [{ text: "Kaum hatte sie das Haus betreten, klingelte das Telefon." }],
      annot: { "Kaum hatte sie": { es: "kaum en primera posición: el verbo va justo detrás", en: "kaum in first position: the verb comes straight after" } },
      distractors: ["betrat", "wenn", "klingelt"],
      tags: ["literature", "word-order"],
    },
    {
      id: "bewunderte-dichterin", type: "sentence", target: "Die von allen bewunderte, aber kaum verstandene Dichterin starb verarmt.",
      gloss: { es: "La poeta, admirada por todos pero apenas comprendida, murió en la pobreza.", en: "The poet, admired by all but barely understood, died impoverished." },
      annot: { "von allen bewunderte": { es: "atributo de participio ampliado: todo va entre artículo y sustantivo", en: "extended participle phrase: everything sits between article and noun" } },
      distractors: ["bewundert", "verstanden", "sterben"],
      grammar: ["de-g-partizipialattribut"], tags: ["literature", "participles"],
    },
    {
      id: "des-lebens-muede", type: "sentence", target: "Er sei, so schrieb er, des Lebens müde.",
      gloss: { es: "Estaba, según escribió, cansado de vivir.", en: "He was, so he wrote, weary of life." },
      annot: { "des Lebens müde": { es: "müde + genitivo: registro elevado y literario", en: "müde + genitive: elevated, literary register" } },
      distractors: ["ist", "dem", "Leben"],
      grammar: ["de-g-konj1-ersatz"], tags: ["literature", "subjunctive"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-konj1-wunsch", type: "paradigm", target: "Konjunktiv I: Wunsch und Anweisung", spoken: "Konjunktiv eins: Wunsch und Anweisung",
      gloss: { es: "Konjunktiv I de deseo e instrucción", en: "Konjunktiv I for wishes and instructions" },
      grammar: ["de-g-konj1-wunsch"],
      paradigm: {
        caption: { es: "Completa con el Konjunktiv I del verbo.", en: "Fill in the Konjunktiv I of the verb." },
        cells: [
          { label: "leben: Es ___ der König!", answer: "lebe", ruleId: "de-g-konj1-wunsch" },
          { label: "sein: Gott ___ Dank!", answer: "sei", ruleId: "de-g-konj1-wunsch" },
          { label: "nehmen: Man ___ zwei Eier.", answer: "nehme", ruleId: "de-g-konj1-wunsch" },
          { label: "mögen: Er ___ in Frieden ruhen.", answer: "möge", ruleId: "de-g-konj1-wunsch" },
          { label: "kommen: Dein Reich ___.", answer: "komme", ruleId: "de-g-konj1-wunsch" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-konj1-wunsch", type: "pattern", target: "Es lebe … · Man nehme … · Möge …",
      gloss: { es: "el Konjunktiv I de deseo", en: "Konjunktiv I for wishes" },
      pattern: {
        rule: {
          es: "Además del estilo indirecto, el Konjunktiv I expresa deseos (Es lebe die Freiheit!), instrucciones impersonales (Man nehme…) y supuestos en textos técnicos (Gegeben sei ein Dreieck). Hoy suena elevado o antiguo y sobrevive en fórmulas fijas.",
          en: "Besides reported speech, Konjunktiv I expresses wishes (Es lebe die Freiheit!), impersonal instructions (Man nehme…) and assumptions in technical texts (Gegeben sei ein Dreieck). Today it sounds elevated or old-fashioned and survives in set formulas.",
        },
        table: [["Wunsch", "Es lebe die Freiheit!"], ["Anweisung", "Man nehme drei Eier."], ["Annahme", "Gegeben sei ein Dreieck."], ["Formel", "Gott sei Dank!"]],
      },
      question: {
        prompt: { es: "«Man nehme eine Tablette täglich.» ¿Dónde lo leerías?", en: "'Man nehme eine Tablette täglich.' Where would you read this?" },
        options: [
          { es: "En un prospecto o una receta antigua", en: "In a package leaflet or an old recipe" },
          { es: "En un mensaje a un amigo", en: "In a text to a friend" },
          { es: "En una noticia de último momento", en: "In a breaking news report" },
          { es: "En una conversación informal", en: "In a casual conversation" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-konj1-wunsch"], tags: ["grammar", "subjunctive"],
    },
    {
      id: "pat-konzessiv-c2", type: "pattern", target: "so … auch · mag … noch so · sei es … sei es",
      gloss: { es: "concesiones en registro elevado", en: "concessions in an elevated register" },
      pattern: {
        rule: {
          es: "Para decir «por muy… que» se usa so + adjetivo + auch, con el verbo al final. mag … (auch) noch so pone el verbo modal delante. Después de estas frases, la principal suele empezar con su propio elemento: So klug er auch ist, hier irrt er sich.",
          en: "To say 'however…' use so + adjective + auch, with the verb at the end. mag … (auch) noch so puts the modal first. After these clauses, the main clause usually starts with its own element: So klug er auch ist, hier irrt er sich.",
        },
        table: [["so … auch", "So reich sie auch ist, …"], ["mag … noch so", "Mag sie noch so reich sein, …"], ["sei es … sei es", "sei es privat, sei es beruflich"], ["wie dem auch sei", "Wie dem auch sei, …"]],
      },
      question: {
        prompt: { es: "«___ schwer es auch ist, wir geben nicht auf.»", en: "'___ schwer es auch ist, wir geben nicht auf.'" },
        options: ["So", "Wie dem", "Obwohl", "Wenn"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-konzessiv-c2"], tags: ["grammar", "concession"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-novembermorgen", type: "listening",
      target: "Es war ein grauer Novembermorgen, als Clara die Stadt verließ. Sie habe, so erzählte sie später, keinen einzigen Blick zurückgeworfen.",
      gloss: {
        es: "Era una gris mañana de noviembre cuando Clara dejó la ciudad. Según contó después, no miró atrás ni una sola vez.",
        en: "It was a grey November morning when Clara left the town. She later said she hadn't looked back even once.",
      },
      question: {
        prompt: { es: "¿Qué contó Clara después?", en: "What did Clara say later?" },
        options: [
          { es: "Que no miró atrás ni una vez", en: "That she didn't look back once" },
          { es: "Que lloró al irse", en: "That she cried as she left" },
          { es: "Que volvió al día siguiente", en: "That she came back the next day" },
          { es: "Que no quería irse", en: "That she didn't want to leave" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-konj1-ersatz"], tags: ["listening", "literature"],
    },
    {
      id: "dlg-lesekreis", type: "dialogue", register: "informal", target: "Mag sein, aber gerade das macht ihn aus.",
      gloss: { es: "Puede ser, pero justamente eso es lo que la distingue.", en: "Maybe, but that's exactly what sets it apart." },
      turns: [
        { who: "A", target: "Ich finde den Roman ehrlich gesagt ziemlich schwülstig.", gloss: { es: "Sinceramente, la novela me parece bastante ampulosa.", en: "To be honest, I find the novel rather overwrought." } },
        { who: "B", target: "Die Schachtelsätze sind anstrengend, das gebe ich zu.", gloss: { es: "Las oraciones larguísimas cansan, lo reconozco.", en: "The long, nested sentences are hard work, I'll give you that." } },
        { who: "A", target: "Auf drei Seiten passiert nichts, und dann stirbt jemand in einem Halbsatz.", gloss: { es: "En tres páginas no pasa nada, y luego alguien muere en media frase.", en: "Nothing happens for three pages, and then someone dies in half a sentence." } },
        { who: "B", target: "Mag sein, aber gerade das macht ihn aus.", gloss: { es: "Puede ser, pero justamente eso es lo que la distingue.", en: "Maybe, but that's exactly what sets it apart." } },
      ],
      question: {
        prompt: { es: "¿Qué le molesta a A de la novela?", en: "What does A dislike about the novel?" },
        options: [
          { es: "El estilo ampuloso y lento", en: "The overwrought, slow style" },
          { es: "Que es demasiado corta", en: "That it's too short" },
          { es: "Que no tiene muertos", en: "That nobody dies" },
          { es: "El final feliz", en: "The happy ending" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "literature"],
    },
  ]),
};
