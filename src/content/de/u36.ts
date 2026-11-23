import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u36",
  lang: "de",
  index: 36,
  cefr: "C2",
  title: { target: "Presse und Kommentar", es: "Prensa y opinión", en: "Press and commentary" },
  canDo: [
    { es: "Puedo seguir un informe largo en estilo indirecto, aunque falte el verbo introductorio.", en: "I can follow long reported speech, even without an introducing verb." },
    { es: "Distingo noticia, comentario y sátira, y reconozco un texto tendencioso.", en: "I can tell news, commentary and satire apart, and spot a biased text." },
    { es: "Sé poner énfasis con la primera posición de la frase (Gewonnen hat am Ende keiner).", en: "I can add emphasis with the first position in the sentence (Gewonnen hat am Ende keiner)." },
  ],
  icon: "📰",
  items: build("de", 36, "C2", [
    // ── Press words ──────────────────────────────────────────
    {
      id: "leitartikel", type: "word", pos: "noun", target: "der Leitartikel", gender: "m", plural: "die Leitartikel",
      gloss: { es: "el editorial", en: "the editorial, leading article" },
      distractors: ["die Leitartikel", "der Leitfaden", "der Beipackzettel"],
      tags: ["media", "journalism"],
    },
    {
      id: "glosse", type: "word", pos: "noun", target: "die Glosse", gender: "f", plural: "die Glossen",
      gloss: { es: "la columna breve y satírica", en: "the short satirical column" },
      distractors: ["der Glosse", "die Glasur", "die Klasse"],
      tags: ["media", "journalism"],
    },
    {
      id: "kolumnist", type: "word", pos: "noun", target: "der Kolumnist", gender: "m", plural: "die Kolumnisten",
      gloss: { es: "el columnista", en: "the columnist" },
      distractors: ["die Kolumnist", "der Komponist", "der Kommunist"],
      note: { es: "Sustantivo débil: den / dem / des Kolumnisten.", en: "A weak noun: den / dem / des Kolumnisten." },
      grammar: ["de-g-n-deklination"], tags: ["media", "journalism"],
    },
    {
      id: "richtigstellung", type: "word", pos: "noun", target: "die Richtigstellung", gender: "f", plural: "die Richtigstellungen",
      gloss: { es: "la rectificación (publicada por un medio)", en: "the published correction" },
      distractors: ["der Richtigstellung", "die Richtlinie", "die Feststellung"],
      tags: ["media", "journalism"],
    },
    {
      id: "dementieren", type: "word", pos: "verb", target: "dementieren",
      gloss: { es: "desmentir", en: "to deny (officially)" },
      distractors: ["demontieren", "demonstrieren", "dekorieren"],
      note: { es: "Sustantivo: das Dementi (el desmentido).", en: "Noun: das Dementi (the official denial)." },
      tags: ["media", "politics"],
    },
    {
      id: "brisant", type: "word", pos: "adj", target: "brisant",
      gloss: { es: "explosivo/a, muy delicado/a (tema)", en: "highly sensitive, explosive (topic)" },
      distractors: ["brillant", "prägnant", "brüsk"],
      tags: ["media", "politics"],
    },
    {
      id: "tendenzioes", type: "word", pos: "adj", target: "tendenziös",
      gloss: { es: "tendencioso/a", en: "biased, slanted" },
      distractors: ["tendenziell", "tänzerisch", "trendig"],
      note: { es: "tendenziell = en tendencia, por lo general: Die Preise steigen tendenziell.", en: "tendenziell = on the whole, as a trend: Die Preise steigen tendenziell." },
      tags: ["media", "opinion"],
    },
    {
      id: "mutmasslich", type: "word", pos: "adj", target: "mutmaßlich",
      gloss: { es: "presunto/a", en: "alleged, suspected" },
      distractors: ["maßlos", "mutwillig", "mustergültig"],
      note: { es: "La prensa lo usa para respetar la presunción de inocencia.", en: "The press uses it to respect the presumption of innocence." },
      tags: ["media", "law"],
    },
    {
      id: "boulevardblatt", type: "word", pos: "noun", target: "das Boulevardblatt", gender: "n", plural: "die Boulevardblätter",
      gloss: { es: "el diario sensacionalista", en: "the tabloid" },
      distractors: ["der Boulevardblatt", "das Bilderbuch", "das Amtsblatt"],
      tags: ["media", "journalism"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "es-bleibt-abzuwarten", type: "phrase", pos: "phrase", target: "Es bleibt abzuwarten, ob …", spoken: "Es bleibt abzuwarten, ob",
      gloss: { es: "Está por verse si…", en: "It remains to be seen whether…" },
      distractors: ["Es bleibt zu abwarten, ob …", "Es bleibt abwarten, ob …", "Es bleibt abgewartet, ob …"],
      tags: ["journalism", "opinion"],
    },
    {
      id: "man-darf-gespannt-sein", type: "phrase", pos: "phrase", target: "Man darf gespannt sein.",
      gloss: { es: "Habrá que ver qué pasa (y promete).", en: "It will be interesting to see." },
      distractors: ["Man darf spannend sein.", "Man darf gespannt haben.", "Man darf sich gespannt sein."],
      tags: ["journalism", "opinion"],
    },
    {
      id: "unterrichtete-kreise", type: "phrase", pos: "phrase", target: "aus gut unterrichteten Kreisen",
      gloss: { es: "de fuentes bien informadas", en: "from well-informed sources" },
      distractors: ["aus gut unterrichtete Kreisen", "aus gut unterrichteten Kreise", "aus gut unterrichtenden Kreisen"],
      tags: ["journalism", "sources"],
    },

    // ── Reported speech at length ────────────────────────────
    {
      id: "minister-von-nichts", type: "sentence", target: "Der Minister erklärte, er habe von nichts gewusst. Man habe ihn nicht informiert.",
      gloss: { es: "El ministro declaró que no sabía nada. Según él, nadie lo había informado.", en: "The minister said he had known nothing. Nobody had informed him, he said." },
      annot: { "Man habe": { es: "sigue el estilo indirecto sin verbo introductorio: lo marca el Konjunktiv I", en: "reported speech continues with no introducing verb: Konjunktiv I marks it" } },
      errors: [{ text: "Der Minister erklärte, er habe von nichts gewusst. Man hat ihn nicht informiert.", feedback: { es: "Con «hat», la segunda frase parece la opinión del periodista. Para seguir citando: Man habe.", en: "With 'hat' the second sentence reads as the journalist's own claim. To keep reporting: Man habe." }, ruleId: "de-g-indirekte-rede-text" }],
      distractors: ["hat", "hatte", "informierte"],
      grammar: ["de-g-indirekte-rede-text"], tags: ["reported-speech", "journalism"],
    },
    {
      id: "ob-vorwuerfe-belegt", type: "sentence", target: "Die Sprecherin fragte, ob die Vorwürfe überhaupt belegt seien.",
      gloss: { es: "La portavoz preguntó si las acusaciones estaban siquiera probadas.", en: "The spokeswoman asked whether the allegations had even been substantiated." },
      annot: { "seien": { es: "pregunta de sí o no en estilo indirecto: ob + Konjunktiv I", en: "reported yes/no question: ob + Konjunktiv I" } },
      distractors: ["dass", "sind", "Vorwurf"],
      grammar: ["de-g-indirekte-rede-text"], tags: ["reported-speech", "journalism"],
    },
    {
      id: "journalisten-sollten", type: "sentence", target: "Er sagte, die Journalisten sollten sich an die Fakten halten.",
      gloss: { es: "Dijo que los periodistas debían atenerse a los hechos.", en: "He said the journalists should stick to the facts." },
      annot: { "sollten": { es: "orden en estilo indirecto: sollen (aquí en Konjunktiv II, porque sollen coincide con el indicativo)", en: "reported command: sollen (here Konjunktiv II, since sollen matches the indicative)" } },
      distractors: ["solle", "hält", "Fakt"],
      grammar: ["de-g-indirekte-rede-text"], tags: ["reported-speech", "journalism"],
    },
    {
      id: "gewonnen-hat-keiner", type: "sentence", target: "Gewonnen hat am Ende keiner.",
      gloss: { es: "Al final no ganó nadie.", en: "In the end, nobody won." },
      accept: [{ text: "Am Ende hat keiner gewonnen." }],
      annot: { "Gewonnen": { es: "participio en primera posición: lo pone en primer plano", en: "participle in first position: it puts it in the spotlight" } },
      distractors: ["Gewinnt", "habe", "keinen"],
      grammar: ["de-g-vorfeld"], tags: ["word-order", "journalism"],
    },
    {
      id: "verlierer-mieter", type: "sentence", target: "Verlierer dieser Reform sind vor allem die Mieter.",
      gloss: { es: "Los que más pierden con esta reforma son, sobre todo, los inquilinos.", en: "Those who lose most from this reform are, above all, tenants." },
      annot: { "Verlierer dieser Reform": { es: "el predicado va primero para destacarlo; el sujeto es die Mieter", en: "the predicate comes first for emphasis; the subject is die Mieter" } },
      distractors: ["Verlieren", "ist", "Mietern"],
      grammar: ["de-g-vorfeld"], tags: ["word-order", "journalism"],
    },
    {
      id: "was-die-regierung-verschweigt", type: "sentence", target: "Was die Regierung verschweigt, ist mindestens ebenso brisant.",
      gloss: { es: "Lo que el gobierno calla es al menos igual de delicado.", en: "What the government isn't saying is at least as explosive." },
      distractors: ["Das", "verschwieg", "brisanter"],
      grammar: ["de-g-vorfeld"], tags: ["word-order", "opinion"],
    },
    {
      id: "selten-so-tendenzioes", type: "sentence", target: "Selten war ein Kommentar so tendenziös wie dieser.",
      gloss: { es: "Pocas veces un comentario fue tan tendencioso como este.", en: "Rarely has a commentary been as biased as this one." },
      distractors: ["tendenziell", "als", "Kommentare"],
      grammar: ["de-g-vorfeld"], tags: ["word-order", "opinion"],
    },
    {
      id: "mutmasslicher-taeter", type: "sentence", target: "Der mutmaßliche Täter wurde gestern festgenommen.",
      gloss: { es: "El presunto autor del delito fue detenido ayer.", en: "The suspected perpetrator was arrested yesterday." },
      distractors: ["mutmaßlich", "wird", "festnehmen"],
      tags: ["media", "law"],
    },
    {
      id: "berichte-dementiert", type: "sentence", target: "Das Ministerium hat die Berichte inzwischen dementiert.",
      gloss: { es: "El ministerio ya desmintió las informaciones.", en: "The ministry has since denied the reports." },
      distractors: ["demontiert", "Bericht", "hatte"],
      tags: ["media", "politics"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-bericht", type: "paradigm", target: "Indikativ → Bericht", spoken: "Indikativ, Bericht",
      gloss: { es: "del discurso directo al informe", en: "from direct speech to the report" },
      grammar: ["de-g-indirekte-rede-text"],
      paradigm: {
        caption: { es: "¿Qué forma usaría la prensa en estilo indirecto?", en: "Which form would the press use in reported speech?" },
        cells: [
          { label: "er ist", answer: "er sei", ruleId: "de-g-indirekte-rede-text" },
          { label: "sie (Pl.) haben", answer: "sie hätten", ruleId: "de-g-indirekte-rede-text" },
          { label: "er kann", answer: "er könne", ruleId: "de-g-indirekte-rede-text" },
          { label: "sie (Pl.) wissen", answer: "sie wüssten", ruleId: "de-g-indirekte-rede-text" },
          { label: "er wird kommen", answer: "er werde kommen", ruleId: "de-g-indirekte-rede-text" },
          { label: "er hat gelogen", answer: "er habe gelogen", ruleId: "de-g-indirekte-rede-text" },
        ],
      },
      tags: ["grammar", "reported-speech", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-bericht", type: "pattern", target: "Er habe … · ob … sei · er solle …",
      gloss: { es: "el estilo indirecto en un texto largo", en: "reported speech across a whole text" },
      pattern: {
        rule: {
          es: "En la prensa, el Konjunktiv I basta para señalar que algo es cita, aunque no se repita «sagte er». Las preguntas pasan a ob o a una palabra interrogativa; las órdenes, a sollen o mögen.",
          en: "In the press, Konjunktiv I alone signals that something is quoted, without repeating 'he said'. Questions become ob or a question word; commands become sollen or mögen.",
        },
        table: [["„Ich bin unschuldig.“", "Er sei unschuldig."], ["„Ist das belegt?“", "…, ob das belegt sei."], ["„Warten Sie!“", "Man solle warten."]],
      },
      question: {
        prompt: { es: "«Die Ministerin trat zurück. Sie habe keine Wahl gehabt.» ¿Quién dice que no tenía opción?", en: "'Die Ministerin trat zurück. Sie habe keine Wahl gehabt.' Who says she had no choice?" },
        options: [
          { es: "La ministra", en: "The minister" },
          { es: "El periodista", en: "The journalist" },
          { es: "La oposición", en: "The opposition" },
          { es: "Nadie, es un hecho", en: "Nobody, it's a fact" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-indirekte-rede-text"], tags: ["grammar", "reported-speech"],
    },
    {
      id: "pat-vorfeld", type: "pattern", target: "Gewonnen hat … · Verlierer sind … · Selten war …",
      gloss: { es: "énfasis con la primera posición", en: "emphasis through first position" },
      pattern: {
        rule: {
          es: "Lo que va antes del verbo conjugado recibe el foco. Los periodistas ponen ahí un participio, un predicado o un adverbio para destacar: Gewonnen hat keiner. Selten war … El sujeto pasa detrás del verbo.",
          en: "Whatever comes before the conjugated verb gets the focus. Journalists put a participle, a predicate or an adverb there for emphasis: Gewonnen hat keiner. Selten war … The subject moves after the verb.",
        },
        table: [["Keiner hat gewonnen.", "Gewonnen hat keiner."], ["Die Mieter sind die Verlierer.", "Verlierer sind die Mieter."], ["Ein Kommentar war selten so …", "Selten war ein Kommentar so …"]],
      },
      question: {
        prompt: { es: "¿Qué frase pone el foco en «unterschätzt»?", en: "Which sentence puts the focus on 'unterschätzt'?" },
        options: ["Unterschätzt hat das Risiko niemand.", "Niemand hat das Risiko unterschätzt.", "Das Risiko hat niemand unterschätzt.", "Hat niemand das Risiko unterschätzt?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-vorfeld"], tags: ["grammar", "word-order"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-buergermeister", type: "listening",
      target: "Der Bürgermeister wies die Vorwürfe entschieden zurück. Er habe stets im Interesse der Stadt gehandelt, die Kritik sei politisch motiviert. Ob er zurücktreten werde, ließ er offen.",
      gloss: {
        es: "El alcalde rechazó tajantemente las acusaciones. Dijo que siempre había actuado en interés de la ciudad y que las críticas tenían motivos políticos. No aclaró si va a renunciar.",
        en: "The mayor firmly rejected the allegations. He said he had always acted in the town's interest and that the criticism was politically motivated. He left open whether he would resign.",
      },
      question: {
        prompt: { es: "¿Va a renunciar el alcalde?", en: "Is the mayor going to resign?" },
        options: [
          { es: "No lo dijo", en: "He didn't say" },
          { es: "Sí, mañana", en: "Yes, tomorrow" },
          { es: "No, nunca", en: "No, never" },
          { es: "Ya renunció", en: "He already has" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-indirekte-rede-text"], tags: ["listening", "journalism"],
    },
    {
      id: "dlg-redaktion", type: "dialogue", register: "informal", target: "Wir sind doch kein Boulevardblatt.",
      gloss: { es: "No somos un diario sensacionalista.", en: "We're not a tabloid, you know." },
      turns: [
        { who: "A", target: "Die Überschrift ist mir zu reißerisch.", gloss: { es: "El titular me parece demasiado sensacionalista.", en: "The headline is too sensational for me." } },
        { who: "B", target: "Aber genau so was wird geklickt.", gloss: { es: "Pero justo eso es lo que se lee.", en: "But that's exactly what gets clicks." } },
        { who: "A", target: "Wir sind doch kein Boulevardblatt. Schreib lieber: „Stadt prüft Vorwürfe gegen Bürgermeister“.", gloss: { es: "No somos un diario sensacionalista. Pon mejor: «La ciudad investiga las acusaciones contra el alcalde».", en: "We're not a tabloid, you know. Better write: 'Town looks into allegations against mayor'." } },
        { who: "B", target: "Na gut. Sachlich, aber langweilig.", gloss: { es: "Bueno. Objetivo, pero aburrido.", en: "Fine. Factual, but boring." } },
      ],
      question: {
        prompt: { es: "¿Qué quiere A?", en: "What does A want?" },
        options: [
          { es: "Un titular más objetivo", en: "A more factual headline" },
          { es: "Un titular más llamativo", en: "A catchier headline" },
          { es: "Eliminar la noticia", en: "To drop the story" },
          { es: "Entrevistar al alcalde", en: "To interview the mayor" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "journalism"],
    },
  ]),
};
