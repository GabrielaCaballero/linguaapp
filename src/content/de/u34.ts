import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u34",
  lang: "de",
  index: 34,
  cefr: "C2",
  title: { target: "Satire und Wortspiel", es: "Sátira y juegos de palabras", en: "Satire and wordplay" },
  canDo: [
    { es: "Puedo entender la sátira, los juegos de palabras y el humor de doble sentido.", en: "I can understand satire, puns and double meanings." },
    { es: "Sé decir menos de lo que pienso para dar a entender más (nicht gerade, alles andere als).", en: "I can use understatement to say more than I say (nicht gerade, alles andere als)." },
    { es: "Reconozco palabras formadas para quejarse o burlarse (das Gejammer, die Fragerei).", en: "I can recognise words formed to complain or mock (das Gejammer, die Fragerei)." },
  ],
  icon: "🎭",
  items: build("de", 34, "C2", [
    // ── Humour words ─────────────────────────────────────────
    {
      id: "wortspiel", type: "word", pos: "noun", target: "das Wortspiel", gender: "n", plural: "die Wortspiele",
      gloss: { es: "el juego de palabras", en: "the pun, play on words" },
      distractors: ["der Wortspiel", "das Würfelspiel", "das Wortfeld"],
      tags: ["humour", "language"],
    },
    {
      id: "kalauer", type: "word", pos: "noun", target: "der Kalauer", gender: "m", plural: "die Kalauer",
      gloss: { es: "el chiste malo y fácil (de juego de palabras)", en: "the corny pun" },
      distractors: ["die Kalauer", "der Klamauk", "der Kakao"],
      note: { es: "Un Kalauer hace más gemir que reír.", en: "A Kalauer makes people groan rather than laugh." },
      tags: ["humour"],
    },
    {
      id: "satire", type: "word", pos: "noun", target: "die Satire", gender: "f", plural: "die Satiren",
      gloss: { es: "la sátira", en: "the satire" },
      distractors: ["der Satire", "die Saite", "die Sattheit"],
      tags: ["humour", "media"],
    },
    {
      id: "kabarett", type: "word", pos: "noun", target: "das Kabarett", gender: "n", plural: "die Kabaretts",
      gloss: { es: "el espectáculo de humor político", en: "the political cabaret, satirical revue" },
      distractors: ["der Kabarett", "das Kabinett", "das Karree"],
      note: { es: "No es un cabaret con bailarinas: es sátira política en un escenario.", en: "Not a cabaret with dancers: it's political satire on stage." },
      tags: ["humour", "culture"],
    },
    {
      id: "stichelei", type: "word", pos: "noun", target: "die Stichelei", gender: "f", plural: "die Sticheleien",
      gloss: { es: "la pulla, el comentario mordaz", en: "the dig, needling remark" },
      distractors: ["der Stichelei", "die Stickerei", "die Stichprobe"],
      grammar: ["de-g-abwertende-wortbildung"], tags: ["humour", "word-formation"],
    },
    {
      id: "verschlimmbessern", type: "word", pos: "verb", target: "verschlimmbessern",
      gloss: { es: "empeorar algo al intentar mejorarlo", en: "to make something worse by trying to improve it" },
      distractors: ["verschlimmern", "verbessern", "verschlampen"],
      note: { es: "Mezcla de verschlimmern (empeorar) y verbessern (mejorar).", en: "A blend of verschlimmern (worsen) and verbessern (improve)." },
      grammar: ["de-g-abwertende-wortbildung"], tags: ["humour", "word-formation"],
    },
    {
      id: "spoettisch", type: "word", pos: "adj", target: "spöttisch",
      gloss: { es: "burlón/a", en: "mocking" },
      distractors: ["spärlich", "spitzfindig", "spaßig"],
      tags: ["humour"],
    },
    {
      id: "zweideutig", type: "word", pos: "adj", target: "zweideutig",
      gloss: { es: "ambiguo/a, de doble sentido", en: "ambiguous, suggestive" },
      distractors: ["zweifelhaft", "zweitrangig", "eindeutig"],
      note: { es: "Un chiste zweideutig suele tener un segundo sentido picante.", en: "A zweideutig joke usually has a risqué second meaning." },
      tags: ["humour", "language"],
    },
    {
      id: "bissig", type: "word", pos: "adj", target: "bissig",
      gloss: { es: "mordaz", en: "biting, scathing" },
      distractors: ["bissfest", "bislang", "bündig"],
      note: { es: "También de un perro: Vorsicht, bissiger Hund!", en: "Also of a dog: Vorsicht, bissiger Hund!" },
      tags: ["humour"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "wers-glaubt", type: "phrase", pos: "phrase", target: "Wer's glaubt, wird selig.",
      gloss: { es: "Sí, claro… (no me lo creo).", en: "Yeah, right. (I don't believe it.)" },
      accept: [{ text: "Wers glaubt, wird selig." }],
      distractors: ["Wer's glaubt, ist selig.", "Wer's glaubt, wird glücklich.", "Wer's weiß, wird selig."],
      tags: ["humour", "irony"],
    },
    {
      id: "baeren-aufbinden", type: "phrase", pos: "phrase", target: "jemandem einen Bären aufbinden",
      gloss: { es: "hacerle creer a alguien un cuento chino", en: "to spin someone a yarn, pull someone's leg" },
      distractors: ["jemanden einen Bären aufbinden", "jemandem einen Hasen aufbinden", "jemandem einen Bären anbinden"],
      tags: ["humour", "idioms"],
    },
    {
      id: "faengt-ja-gut-an", type: "phrase", pos: "phrase", target: "Na, das fängt ja gut an!",
      gloss: { es: "¡Empezamos bien! (irónico)", en: "Well, that's a great start! (ironic)" },
      distractors: ["Na, das hört ja gut auf!", "Na, das fängt ja gut auf!", "Na, das geht ja gut an!"],
      grammar: ["de-g-ironie-litotes"], tags: ["humour", "irony"],
    },
    {
      id: "alles-andere-als", type: "phrase", pos: "phrase", target: "alles andere als",
      gloss: { es: "de todo menos, nada", en: "anything but" },
      distractors: ["alles anderes als", "alle andere als", "alles andere wie"],
      grammar: ["de-g-ironie-litotes"], tags: ["understatement"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "toll-hingekriegt", type: "sentence", register: "informal", target: "Das hast du ja toll hingekriegt.",
      gloss: { es: "Pues sí que te quedó bien. (irónico)", en: "Well, you've made a fine job of that. (ironic)" },
      annot: { "ja toll": { es: "elogio exagerado: aquí significa lo contrario", en: "exaggerated praise: here it means the opposite" } },
      distractors: ["hingekriegen", "hat", "toller"],
      grammar: ["de-g-ironie-litotes"], tags: ["irony"],
    },
    {
      id: "nicht-gerade-billig", type: "sentence", target: "Das Essen war nicht gerade billig.",
      gloss: { es: "La comida no fue precisamente barata.", en: "The meal wasn't exactly cheap." },
      annot: { "nicht gerade": { es: "atenúa: quiere decir «fue bastante caro»", en: "softens it: it means 'it was quite expensive'" } },
      distractors: ["billiger", "genau", "ist"],
      grammar: ["de-g-ironie-litotes"], tags: ["understatement"],
    },
    {
      id: "ganz-unschuldig", type: "sentence", target: "Ganz unschuldig ist er an der Sache nicht.",
      gloss: { es: "No es del todo inocente en este asunto.", en: "He's not entirely blameless in this." },
      accept: [{ text: "Er ist an der Sache nicht ganz unschuldig." }],
      distractors: ["Schuld", "kein", "unschuldige"],
      grammar: ["de-g-ironie-litotes"], tags: ["understatement"],
    },
    {
      id: "alles-andere-als-ueberzeugend", type: "sentence", target: "Die Rede war alles andere als überzeugend.",
      gloss: { es: "El discurso fue de todo menos convincente.", en: "The speech was anything but convincing." },
      distractors: ["anderes", "überzeugt", "wie"],
      grammar: ["de-g-ironie-litotes"], tags: ["understatement"],
    },
    {
      id: "ewige-fragerei", type: "sentence", register: "informal", target: "Hör doch endlich mit dieser ewigen Fragerei auf!",
      gloss: { es: "¡Deja ya de preguntar todo el tiempo!", en: "Stop all these endless questions!" },
      annot: { "Fragerei": { es: "-erei: una acción repetida que molesta", en: "-erei: a repeated, annoying action" } },
      distractors: ["Fragen", "ewige", "von"],
      grammar: ["de-g-abwertende-wortbildung"], tags: ["word-formation"],
    },
    {
      id: "ewige-gejammer", type: "sentence", register: "informal", target: "Das ewige Gejammer geht mir auf die Nerven.",
      gloss: { es: "Tanto lloriqueo me saca de quicio.", en: "All this constant whining gets on my nerves." },
      annot: { "Gejammer": { es: "Ge- + raíz + -e: neutro y despectivo", en: "Ge- + stem + -e: neuter and pejorative" } },
      distractors: ["Jammer", "gehen", "Nerv"],
      grammar: ["de-g-abwertende-wortbildung"], tags: ["word-formation"],
    },
    {
      id: "text-verschlimmbessert", type: "sentence", target: "Er hat den Text so lange verschlimmbessert, bis ihn keiner mehr verstand.",
      gloss: { es: "Retocó tanto el texto para «mejorarlo» que al final nadie lo entendía.", en: "He 'improved' the text so much that in the end nobody understood it." },
      distractors: ["verbessert", "verstanden", "keinen"],
      grammar: ["de-g-abwertende-wortbildung"], tags: ["word-formation", "humour"],
    },
    {
      id: "trockener-humor", type: "sentence", target: "Er hat einen ziemlich trockenen Humor.",
      gloss: { es: "Tiene un humor bastante seco.", en: "He has a rather dry sense of humour." },
      distractors: ["trocken", "Humors", "hatte"],
      tags: ["humour"],
    },
    {
      id: "satire-darf-alles", type: "sentence", target: "Was darf die Satire? Alles.",
      gloss: { es: "¿Qué puede permitirse la sátira? Todo.", en: "What may satire do? Everything." },
      note: { es: "Respuesta famosa de Kurt Tucholsky (1919).", en: "Kurt Tucholsky's famous answer (1919)." },
      distractors: ["muss", "Alle", "Satiren"],
      tags: ["humour", "culture"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-ge-erei", type: "paradigm", target: "Das nervt: Ge-…-e und -erei", spoken: "Das nervt",
      gloss: { es: "sustantivos despectivos", en: "pejorative nouns" },
      grammar: ["de-g-abwertende-wortbildung"],
      paradigm: {
        caption: { es: "¿Cómo se llama esa acción molesta? (con artículo)", en: "What's the name for that annoying action? (with article)" },
        cells: [
          { label: "ständig reden", answer: "das Gerede", accept: ["Gerede"], ruleId: "de-g-abwertende-wortbildung" },
          { label: "ständig jammern", answer: "das Gejammer", accept: ["Gejammer"], ruleId: "de-g-abwertende-wortbildung" },
          { label: "ständig fragen", answer: "die Fragerei", accept: ["Fragerei"], ruleId: "de-g-abwertende-wortbildung" },
          { label: "ständig streiten", answer: "die Streiterei", accept: ["Streiterei"], ruleId: "de-g-abwertende-wortbildung" },
          { label: "ständig drängeln", answer: "die Drängelei", accept: ["Drängelei"], ruleId: "de-g-abwertende-wortbildung" },
        ],
      },
      tags: ["grammar", "word-formation", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-litotes", type: "pattern", target: "nicht gerade · nicht ganz un- · alles andere als",
      gloss: { es: "decir menos para decir más", en: "saying less to mean more" },
      pattern: {
        rule: {
          es: "En alemán es muy común atenuar una crítica negando lo contrario: nicht gerade billig = bastante caro, nicht ganz unschuldig = bastante culpable. alles andere als niega con fuerza: alles andere als leicht = muy difícil.",
          en: "German very often softens criticism by denying the opposite: nicht gerade billig = quite expensive, nicht ganz unschuldig = partly to blame. alles andere als is a strong denial: alles andere als leicht = very hard.",
        },
        table: [["nicht gerade billig", "≈ ziemlich teuer"], ["nicht ganz unschuldig", "≈ mitschuldig"], ["nicht ganz unwitzig", "≈ ziemlich witzig"], ["alles andere als leicht", "≈ sehr schwer"]],
      },
      question: {
        prompt: { es: "«Die Prüfung war nicht gerade leicht.» ¿Qué significa?", en: "'Die Prüfung war nicht gerade leicht.' What does it mean?" },
        options: [
          { es: "Fue bastante difícil.", en: "It was quite hard." },
          { es: "Fue facilísima.", en: "It was very easy." },
          { es: "No se hizo.", en: "It didn't take place." },
          { es: "Fue justo como esperaba.", en: "It was just as expected." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-ironie-litotes"], tags: ["grammar", "understatement"],
    },
    {
      id: "pat-ge-erei", type: "pattern", target: "das Gerede · das Gejammer · die Fragerei",
      gloss: { es: "sustantivos que se quejan", en: "nouns that complain" },
      pattern: {
        rule: {
          es: "Ge- + raíz + -e (das Gerede) y raíz + -erei (die Fragerei) convierten un verbo en una acción repetida y molesta. Ge-…-e siempre es neutro; -erei siempre es femenino.",
          en: "Ge- + stem + -e (das Gerede) and stem + -erei (die Fragerei) turn a verb into a repeated, annoying action. Ge-…-e is always neuter; -erei is always feminine.",
        },
        table: [["reden", "das Gerede"], ["jammern", "das Gejammer"], ["fragen", "die Fragerei"], ["streiten", "die Streiterei"]],
      },
      question: {
        prompt: { es: "«Dieses ___ im Treppenhaus nervt!» (gente que corre todo el rato)", en: "'Dieses ___ im Treppenhaus nervt!' (people running about all the time)" },
        options: ["Gerenne", "Rennen", "Renner", "Rennung"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-abwertende-wortbildung"], tags: ["grammar", "word-formation"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-kalauer", type: "listening",
      target: "Ein Kalauer ist ein Witz, über den man eher stöhnt als lacht. Ein Beispiel: Treffen sich zwei Jäger. Beide tot.",
      gloss: {
        es: "Un Kalauer es un chiste que hace más gemir que reír. Un ejemplo: se encuentran dos cazadores. Los dos, muertos.",
        en: "A Kalauer is a joke that makes you groan rather than laugh. For example: two hunters meet. Both dead.",
      },
      note: { es: "El juego está en treffen: «encontrarse» y también «acertar un disparo».", en: "The pun is on treffen: 'to meet' and also 'to hit (a target)'." },
      question: {
        prompt: { es: "¿Qué reacción provoca un Kalauer, según el texto?", en: "According to the text, what reaction does a Kalauer get?" },
        options: [
          { es: "Más gemidos que risas", en: "More groans than laughs" },
          { es: "Carcajadas", en: "Roars of laughter" },
          { es: "Enojo", en: "Anger" },
          { es: "Ninguna", en: "None at all" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "humour"],
    },
    {
      id: "dlg-kabarett", type: "dialogue", register: "informal", target: "Nicht ganz unwitzig, sagen wir mal so.",
      gloss: { es: "No estuvo nada mal, digamos.", en: "Not entirely unfunny, let's put it that way." },
      turns: [
        { who: "A", target: "Und, wie war das neue Programm im Kabarett?", gloss: { es: "¿Y qué tal el nuevo espectáculo de humor político?", en: "So, how was the new cabaret show?" } },
        { who: "B", target: "Bissig wie immer. Über den Kanzler hat er sich eine Stunde lang lustig gemacht.", gloss: { es: "Mordaz como siempre. Se burló del canciller durante una hora.", en: "Scathing as ever. He made fun of the chancellor for an hour." } },
        { who: "A", target: "Und war es auch lustig?", gloss: { es: "¿Y además fue divertido?", en: "And was it actually funny?" } },
        { who: "B", target: "Nicht ganz unwitzig, sagen wir mal so.", gloss: { es: "No estuvo nada mal, digamos.", en: "Not entirely unfunny, let's put it that way." } },
      ],
      question: {
        prompt: { es: "¿Qué le pareció el espectáculo a B?", en: "What did B think of the show?" },
        options: [
          { es: "Bastante divertido, aunque lo dice con mesura", en: "Quite funny, though B says so with restraint" },
          { es: "Muy aburrido", en: "Very boring" },
          { es: "Ofensivo", en: "Offensive" },
          { es: "No lo vio", en: "B didn't see it" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-ironie-litotes"], tags: ["dialogue", "understatement"],
    },
  ]),
};
