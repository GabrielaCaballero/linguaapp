import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u26",
  lang: "de",
  index: 26,
  cefr: "C1",
  title: { target: "Politik und Gesellschaft", es: "Política y sociedad", en: "Politics and society" },
  canDo: [
    { es: "Puedo seguir noticias políticas y debates sobre temas sociales.", en: "I can follow political news and debates on social issues." },
    { es: "Puedo resumir con precisión lo que dijo otra persona y elegir el verbo adecuado (betonen, einräumen, bestreiten).", en: "I can report precisely what someone said, choosing the right verb (betonen, einräumen, bestreiten)." },
    { es: "Sé cuándo el Konjunktiv I se cambia por el II (sie hätten) y cómo citar fuentes (zufolge, nach Angaben).", en: "I know when Konjunktiv I gives way to II (sie hätten) and how to cite sources (zufolge, nach Angaben)." },
  ],
  icon: "🗳️",
  items: build("de", 26, "C1", [
    // ── Politics words ───────────────────────────────────────
    {
      id: "koalition", type: "word", pos: "noun", target: "die Koalition", gender: "f", plural: "die Koalitionen",
      gloss: { es: "la coalición", en: "the coalition" },
      distractors: ["der Koalition", "die Kollision", "die Kollektion"],
      tags: ["politics", "news"],
    },
    {
      id: "abgeordnete", type: "word", pos: "noun", target: "der Abgeordnete", gender: "m", plural: "die Abgeordneten",
      gloss: { es: "el/la diputado/a", en: "the member of parliament" },
      accept: [{ text: "die Abgeordnete" }],
      distractors: ["der Abgeordneter", "das Abgeordnete", "der Angeordnete"],
      note: { es: "Se declina como adjetivo: der Abgeordnete, pero ein Abgeordneter.", en: "It declines like an adjective: der Abgeordnete, but ein Abgeordneter." },
      tags: ["politics", "adjectival-noun"],
    },
    {
      id: "wahlbeteiligung", type: "word", pos: "noun", target: "die Wahlbeteiligung", gender: "f", plural: "die Wahlbeteiligungen",
      gloss: { es: "la participación electoral", en: "the voter turnout" },
      distractors: ["der Wahlbeteiligung", "die Wahlbenachrichtigung", "die Beteiligung"],
      tags: ["politics", "compound"],
    },
    {
      id: "umfrage", type: "word", pos: "noun", target: "die Umfrage", gender: "f", plural: "die Umfragen",
      gloss: { es: "la encuesta, el sondeo", en: "the survey, opinion poll" },
      distractors: ["der Umfrage", "die Anfrage", "die Nachfrage"],
      tags: ["politics", "news"],
    },
    {
      id: "ruecktritt", type: "word", pos: "noun", target: "der Rücktritt", gender: "m", plural: "die Rücktritte",
      gloss: { es: "la renuncia (a un cargo)", en: "the resignation" },
      distractors: ["die Rücktritt", "der Auftritt", "der Rückblick"],
      note: { es: "El verbo es zurücktreten: Die Ministerin ist zurückgetreten.", en: "The verb is zurücktreten: Die Ministerin ist zurückgetreten." },
      tags: ["politics", "news"],
    },
    {
      id: "kundgebung", type: "word", pos: "noun", target: "die Kundgebung", gender: "f", plural: "die Kundgebungen",
      gloss: { es: "la manifestación, el mitin", en: "the rally, demonstration" },
      distractors: ["der Kundgebung", "die Kündigung", "die Umgebung"],
      tags: ["politics", "society"],
    },
    {
      id: "ungleichheit", type: "word", pos: "noun", target: "die Ungleichheit", gender: "f", plural: "die Ungleichheiten",
      gloss: { es: "la desigualdad", en: "the inequality" },
      distractors: ["der Ungleichheit", "die Ungleichung", "die Unsicherheit"],
      tags: ["society"],
    },
    {
      id: "bestreiten", type: "word", pos: "verb", target: "bestreiten",
      gloss: { es: "negar, desmentir", en: "to deny, dispute" },
      forms: { er: "bestreitet", praet: "bestritt", pp: "bestritten" },
      distractors: ["bestrafen", "bestreichen", "bestehen"],
      tags: ["reporting", "news"],
    },
    {
      id: "einraeumen", type: "word", pos: "verb", target: "einräumen",
      gloss: { es: "admitir, reconocer (algo incómodo)", en: "to concede, admit" },
      distractors: ["aufräumen", "einreichen", "einrahmen"],
      note: { es: "Literalmente también «guardar en un armario».", en: "Literally also 'to put away (in a cupboard)'." },
      tags: ["reporting", "news", "separable"],
    },
    {
      id: "umstritten", type: "word", pos: "adj", target: "umstritten",
      gloss: { es: "polémico/a, controvertido/a", en: "controversial, disputed" },
      distractors: ["unbestritten", "umständlich", "unbestimmt"],
      tags: ["politics", "society"],
    },
    {
      id: "zufolge", type: "word", pos: "prep", target: "zufolge",
      gloss: { es: "según (va detrás: dem Bericht zufolge)", en: "according to (after the noun: dem Bericht zufolge)" },
      distractors: ["zuvor", "folglich", "infolge"],
      note: { es: "infolge + genitivo = a consecuencia de.", en: "infolge + genitive = as a result of." },
      grammar: ["de-g-quellenangabe"], tags: ["reporting", "news"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "stellung-nehmen", type: "phrase", pos: "phrase", target: "Stellung nehmen zu",
      gloss: { es: "pronunciarse sobre", en: "to comment on, take a position on" },
      distractors: ["Stellung machen zu", "Stellung geben zu", "Stellung nehmen über"],
      tags: ["politics", "collocations"],
    },
    {
      id: "rede-halten", type: "phrase", pos: "phrase", target: "eine Rede halten",
      gloss: { es: "dar un discurso", en: "to give a speech" },
      distractors: ["eine Rede machen", "eine Rede geben", "eine Rede stellen"],
      tags: ["politics", "collocations"],
    },
    {
      id: "zum-ausdruck-bringen", type: "phrase", pos: "phrase", target: "zum Ausdruck bringen",
      gloss: { es: "expresar, manifestar", en: "to express, voice" },
      distractors: ["zum Ausdruck stellen", "in Ausdruck bringen", "zum Ausdruck machen"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["collocations", "formal"],
    },
    {
      id: "nach-angaben", type: "phrase", pos: "phrase", target: "nach Angaben der Polizei",
      gloss: { es: "según datos de la policía", en: "according to police figures" },
      distractors: ["nach Angabe der Polizei", "nach Angaben die Polizei", "mit Angaben der Polizei"],
      grammar: ["de-g-quellenangabe"], tags: ["reporting", "news"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "man-habe-keine-wahl", type: "sentence", target: "Die Sprecherin betonte, man habe keine andere Wahl gehabt.",
      gloss: { es: "La portavoz subrayó que no habían tenido otra opción.", en: "The spokeswoman stressed that they had had no other choice." },
      accept: [{ text: "Die Sprecherin betonte, dass man keine andere Wahl gehabt habe." }],
      annot: { "habe": { es: "Konjunktiv I: palabras de otra persona", en: "Konjunktiv I: someone else's words" } },
      distractors: ["hat", "hatte", "betont"],
      grammar: ["de-g-konjunktiv1"], tags: ["konjunktiv1", "news"],
    },
    {
      id: "sie-haetten-gewartet", type: "sentence", target: "Die Demonstranten erklärten, sie hätten lange genug gewartet.",
      gloss: { es: "Los manifestantes declararon que ya habían esperado bastante.", en: "The protesters said they had waited long enough." },
      accept: [
        { text: "Die Demonstranten erklärten, dass sie lange genug gewartet hätten." },
        { text: "Die Demonstranten erklärten, sie haben lange genug gewartet.", verdict: "almost", feedback: { es: "«sie haben» es igual al indicativo; en estilo indirecto escrito se cambia al Konjunktiv II: sie hätten.", en: "'sie haben' looks like the indicative; in written reported speech switch to Konjunktiv II: sie hätten." } },
      ],
      annot: { "hätten": { es: "Konjunktiv II en lugar de «haben», que no se distingue del indicativo", en: "Konjunktiv II replacing 'haben', which looks like the indicative" } },
      distractors: ["hatten", "habe", "wartet"],
      grammar: ["de-g-konj1-ersatz"], tags: ["konjunktiv1", "news"],
    },
    {
      id: "er-werde-nicht-erhoehen", type: "sentence", target: "Der Kanzler kündigte an, er werde die Steuern nicht erhöhen.",
      gloss: { es: "El canciller anunció que no subiría los impuestos.", en: "The chancellor announced that he would not raise taxes." },
      accept: [
        { text: "Der Kanzler kündigte an, dass er die Steuern nicht erhöhen werde." },
        { text: "Der Kanzler kündigte an, er würde die Steuern nicht erhöhen.", verdict: "almost", feedback: { es: "Se entiende, pero en las noticias el futuro se cita con werde.", en: "Understandable, but news style reports the future with werde." } },
      ],
      distractors: ["wird", "würden", "erhöht"],
      grammar: ["de-g-konj1-ersatz"], tags: ["konjunktiv1", "politics"],
    },
    {
      id: "dem-bericht-zufolge", type: "sentence", target: "Dem Bericht zufolge ist die Arbeitslosigkeit gesunken.",
      gloss: { es: "Según el informe, el desempleo bajó.", en: "According to the report, unemployment has fallen." },
      accept: [{ text: "Laut dem Bericht ist die Arbeitslosigkeit gesunken." }, { text: "Laut Bericht ist die Arbeitslosigkeit gesunken." }],
      errors: [{ text: "Dem Bericht zufolge die Arbeitslosigkeit ist gesunken.", feedback: { es: "«Dem Bericht zufolge» ocupa la posición 1: el verbo va enseguida (ist).", en: "'Dem Bericht zufolge' fills position 1, so the verb comes next (ist)." }, ruleId: "de-g-quellenangabe" }],
      distractors: ["Den", "folge", "hat"],
      grammar: ["de-g-quellenangabe"], tags: ["reporting", "news"],
    },
    {
      id: "folgen-abzusehen", type: "sentence", target: "Die Folgen des Beschlusses sind noch nicht abzusehen.",
      gloss: { es: "Todavía no se pueden prever las consecuencias de la decisión.", en: "The consequences of the decision cannot yet be foreseen." },
      annot: { "abzusehen": { es: "sein + zu + infinitivo = se puede (prever)", en: "sein + zu + infinitive = can be (foreseen)" } },
      distractors: ["absehen", "zu", "Beschluss"],
      grammar: ["de-g-passiversatz"], tags: ["politics", "passive-alternatives"],
    },
    {
      id: "wirft-vor", type: "sentence", target: "Die Opposition wirft der Regierung vor, die Probleme zu ignorieren.",
      gloss: { es: "La oposición acusa al gobierno de ignorar los problemas.", en: "The opposition accuses the government of ignoring the problems." },
      annot: { "der Regierung": { es: "dativo: jemandem etwas vorwerfen", en: "dative: jemandem etwas vorwerfen" } },
      distractors: ["die", "ignoriert", "vorwerfen"],
      tags: ["politics", "reporting"],
    },
    {
      id: "ob-gewusst-habe", type: "sentence", target: "Ein Journalist wollte wissen, ob die Regierung davon gewusst habe.",
      gloss: { es: "Un periodista quiso saber si el gobierno había estado al tanto.", en: "A journalist wanted to know whether the government had known about it." },
      accept: [{ text: "Ein Journalist wollte wissen, ob die Regierung davon gewusst hat." }, { text: "Ein Journalist wollte wissen, ob die Regierung davon gewusst hätte." }],
      distractors: ["wenn", "davor", "wusste"],
      grammar: ["de-g-konjunktiv1"], tags: ["indirect-questions", "news"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-indirekte-rede", type: "paradigm", target: "Konjunktiv I oder II?", spoken: "Konjunktiv eins oder zwei?",
      gloss: { es: "estilo indirecto: ¿Konjunktiv I o II?", en: "reported speech: Konjunktiv I or II?" },
      grammar: ["de-g-konj1-ersatz"],
      paradigm: {
        caption: { es: "Escribe la forma para el estilo indirecto escrito", en: "Type the form for written reported speech" },
        cells: [
          { label: "er · haben", answer: "habe", ruleId: "de-g-konj1-ersatz" },
          { label: "sie (Pl.) · haben", answer: "hätten", ruleId: "de-g-konj1-ersatz" },
          { label: "sie (Pl.) · sein", answer: "seien", ruleId: "de-g-konj1-ersatz" },
          { label: "er · können", answer: "könne", ruleId: "de-g-konj1-ersatz" },
          { label: "er · werden", answer: "werde", ruleId: "de-g-konj1-ersatz" },
          { label: "sie (Pl.) · kommen", answer: "kämen", accept: ["würden kommen"], ruleId: "de-g-konj1-ersatz" },
        ],
      },
      tags: ["grammar", "konjunktiv1", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-konj1-ersatz", type: "pattern", target: "er habe · sie hätten · er werde kommen",
      gloss: { es: "cuándo el Konjunktiv I pasa a II", en: "when Konjunktiv I gives way to II" },
      pattern: {
        rule: {
          es: "Si la forma del Konjunktiv I es igual a la del indicativo (sie haben, wir kommen), se usa el Konjunktiv II (sie hätten, wir kämen). Para el futuro: er werde + infinitivo.",
          en: "If the Konjunktiv I form is the same as the indicative (sie haben, wir kommen), use Konjunktiv II instead (sie hätten, wir kämen). For the future: er werde + infinitive.",
        },
        table: [["er hat", "er habe"], ["sie haben", "sie hätten"], ["sie kommen", "sie kämen"], ["er wird kommen", "er werde kommen"]],
      },
      question: {
        prompt: { es: "«Die Minister sagten, sie ___ keine Zeit.» (estilo indirecto escrito)", en: "'Die Minister sagten, sie ___ keine Zeit.' (written reported speech)" },
        options: ["hätten", "haben", "hatten", "habe"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-konj1-ersatz"], tags: ["grammar", "konjunktiv1"],
    },
    {
      id: "pat-quellenangabe", type: "pattern", target: "laut Polizei · dem Bericht zufolge · nach Angaben der Stadt",
      gloss: { es: "citar la fuente", en: "citing the source" },
      pattern: {
        rule: {
          es: "laut va delante (laut Polizei); zufolge va detrás y pide dativo (dem Bericht zufolge); nach Angaben lleva genitivo (nach Angaben der Stadt). Después viene el verbo conjugado.",
          en: "laut goes first (laut Polizei); zufolge comes after a dative noun (dem Bericht zufolge); nach Angaben takes a genitive (nach Angaben der Stadt). The conjugated verb comes next.",
        },
        table: [["laut + Dat.", "laut Polizei"], ["Dat. + zufolge", "dem Bericht zufolge"], ["nach Angaben + Gen.", "nach Angaben der Stadt"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Dem Bericht zufolge", "Zufolge dem Bericht", "Des Berichts zufolge", "Dem Bericht laut"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-quellenangabe"], tags: ["grammar", "reporting"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-umfrage", type: "listening",
      target: "Einer aktuellen Umfrage zufolge hält mehr als die Hälfte der Befragten die Reform für überflüssig. Die Regierung hingegen spricht von einem notwendigen Schritt.",
      gloss: {
        es: "Según una encuesta reciente, más de la mitad de las personas encuestadas considera innecesaria la reforma. El gobierno, en cambio, habla de un paso necesario.",
        en: "According to a recent poll, more than half of those surveyed think the reform is unnecessary. The government, on the other hand, calls it a necessary step.",
      },
      question: {
        prompt: { es: "¿Qué opina la mayoría de las personas encuestadas?", en: "What do most of those surveyed think?" },
        options: [
          { es: "Que la reforma es innecesaria", en: "That the reform is unnecessary" },
          { es: "Que la reforma es un paso necesario", en: "That the reform is a necessary step" },
          { es: "Que el gobierno debería renunciar", en: "That the government should resign" },
          { es: "Todavía no se sabe", en: "It isn't known yet" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-quellenangabe"], tags: ["listening", "politics"],
    },
    {
      id: "dlg-pressekonferenz", type: "dialogue", register: "formal", target: "Dazu nehme ich heute keine Stellung.",
      gloss: { es: "Hoy no voy a pronunciarme sobre eso.", en: "I won't be commenting on that today." },
      turns: [
        { who: "A", target: "Frau Ministerin, stimmt es, dass Sie von den Mängeln gewusst haben?", gloss: { es: "Señora ministra, ¿es cierto que usted estaba al tanto de las deficiencias?", en: "Minister, is it true that you knew about the shortcomings?" } },
        { who: "B", target: "Das bestreite ich entschieden. Ich wurde erst gestern informiert.", gloss: { es: "Lo niego rotundamente. No me informaron hasta ayer.", en: "I firmly deny that. I was only informed yesterday." } },
        { who: "A", target: "Werden Sie zurücktreten?", gloss: { es: "¿Va a renunciar?", en: "Will you resign?" } },
        { who: "B", target: "Dazu nehme ich heute keine Stellung.", gloss: { es: "Hoy no voy a pronunciarme sobre eso.", en: "I won't be commenting on that today." } },
      ],
      question: {
        prompt: { es: "¿Qué dice la ministra sobre las deficiencias?", en: "What does the minister say about the shortcomings?" },
        options: [
          { es: "Niega haberlo sabido antes.", en: "She denies having known before." },
          { es: "Admite que lo sabía.", en: "She admits she knew." },
          { es: "Anuncia que renuncia.", en: "She announces her resignation." },
          { es: "Dice que lo sabía desde hace semanas.", en: "She says she'd known for weeks." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "politics"],
    },
  ]),
};
