import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u31",
  lang: "fr",
  index: 31,
  cefr: "C2",
  title: { target: "Le récit littéraire", es: "El relato literario", en: "Literary narrative" },
  canDo: [
    { es: "Puedo leer novelas y cuentos escritos en passé simple.", en: "I can read novels and stories written in the passé simple." },
    { es: "Reconozco el subjuntivo imperfecto (qu'il fût, qu'il vînt) y sé su equivalente moderno.", en: "I can recognise the imperfect subjunctive (qu'il fût, qu'il vînt) and its modern equivalent." },
    { es: "Sé comentar la trama, el narrador y el desenlace de una obra.", en: "I can discuss the plot, narrator and ending of a work." },
  ],
  icon: "📖",
  items: build("fr", 31, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "recit", type: "word", pos: "noun", target: "le récit", gender: "m", plural: "les récits", gloss: { es: "el relato, la narración", en: "the narrative / account" }, distractors: ["le reçu", "la recette", "le récital"], tags: ["literature"] },
    { id: "narrateur", type: "word", pos: "noun", target: "le narrateur", gender: "m", plural: "les narrateurs", gloss: { es: "el narrador", en: "the narrator" }, forms: { f: "la narratrice" }, accept: [{ text: "la narratrice" }], distractors: ["le narratif", "le rapporteur", "le récitant"], tags: ["literature"] },
    { id: "intrigue", type: "word", pos: "noun", target: "l'intrigue", gender: "f", plural: "les intrigues", gloss: { es: "la trama", en: "the plot" }, distractors: ["l'intrigant", "l'intrication", "l'irrigation"], tags: ["literature"] },
    { id: "denouement", type: "word", pos: "noun", target: "le dénouement", gender: "m", plural: "les dénouements", gloss: { es: "el desenlace", en: "the ending / denouement" }, distractors: ["le dénuement", "le dévouement", "le déroulement"], note: { es: "le dénuement = la miseria, la indigencia.", en: "le dénuement = destitution." }, tags: ["literature"] },
    { id: "tournure", type: "word", pos: "noun", target: "la tournure", gender: "f", plural: "les tournures", gloss: { es: "el giro (de estilo), la construcción", en: "the turn of phrase" }, distractors: ["la torture", "le tournant", "la tourneuse"], tags: ["literature", "language"] },
    { id: "secrier", type: "word", pos: "verb", target: "s'écrier", gloss: { es: "exclamar", en: "to exclaim / cry out" }, forms: { il: "s'écrie", ps: "s'écria" }, distractors: ["s'écrire", "crier", "s'écrouler"], note: { es: "Muy frecuente en novelas: « Enfin ! » s'écria-t-elle.", en: "Very common in novels: « Enfin ! » s'écria-t-elle." }, tags: ["literature"] },
    { id: "jadis", type: "word", pos: "adv", target: "jadis", gloss: { es: "antaño, en otros tiempos", en: "long ago / in days gone by" }, distractors: ["jamais", "naguère", "judas"], note: { es: "naguère significa en principio «hace poco», aunque hoy muchos lo usan como «jadis».", en: "naguère strictly means 'not long ago', though many now use it like jadis." }, tags: ["literature", "time"] },
    { id: "il-etait-une-fois", type: "phrase", pos: "phrase", target: "il était une fois", gloss: { es: "había una vez, érase una vez", en: "once upon a time" }, distractors: ["il y avait une fois", "il fut un temps", "il était un fois"], tags: ["literature", "chunk"] },
    { id: "a-peine-que", type: "phrase", pos: "phrase", target: "à peine… que", gloss: { es: "apenas… cuando", en: "no sooner… than" }, distractors: ["à peine… quand", "à peine… alors", "à la peine… que"], note: { es: "En la escritura, con inversión del sujeto: à peine était-il sorti que…", en: "In writing, with subject inversion: à peine était-il sorti que…" }, grammar: ["fr-g-passe-simple"], tags: ["literature", "connectors"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "il-ouvrit-la-porte", type: "sentence", target: "Il ouvrit la porte et sortit sans un mot.",
      gloss: { es: "Abrió la puerta y salió sin decir palabra.", en: "He opened the door and went out without a word." },
      errors: [{ text: "Il ouvra la porte et sortit sans un mot.", feedback: { es: "«ouvrir» hace el passé simple en -it: il ouvrit.", en: "ouvrir has an -it passé simple: il ouvrit." }, ruleId: "fr-g-passe-simple" }],
      distractors: ["ouvra", "ouvrait", "sortut"],
      grammar: ["fr-g-passe-simple"], tags: ["literature", "past"],
    },
    {
      id: "elle-fut-la-premiere", type: "sentence", target: "Elle fut la première à comprendre.",
      gloss: { es: "Fue la primera en comprender.", en: "She was the first to understand." },
      errors: [{ text: "Elle fût la première à comprendre.", feedback: { es: "Sin acento: «fut» es passé simple; «fût» es subjuntivo imperfecto.", en: "No accent: fut is passé simple; fût is the imperfect subjunctive." }, ruleId: "fr-g-subj-imparfait" }],
      distractors: ["fût", "était", "premier"],
      grammar: ["fr-g-passe-simple"], tags: ["literature", "past"],
    },
    {
      id: "ils-eurent-peur", type: "sentence", target: "Ils eurent peur et s'enfuirent.",
      gloss: { es: "Tuvieron miedo y huyeron.", en: "They were frightened and ran away." },
      distractors: ["urent", "eût", "enfuyèrent"],
      grammar: ["fr-g-passe-simple"], tags: ["literature", "past"],
    },
    {
      id: "elle-vint-se-tut", type: "sentence", target: "Elle vint, le regarda et se tut.",
      gloss: { es: "Vino, lo miró y se calló.", en: "She came, looked at him and fell silent." },
      distractors: ["venit", "regardit", "tait"],
      note: { es: "vint (venir), regarda (regarder), se tut (se taire).", en: "vint (venir), regarda (regarder), se tut (se taire)." },
      grammar: ["fr-g-passe-simple"], tags: ["literature", "past"],
    },
    {
      id: "a-peine-etait-il-arrive", type: "sentence", target: "À peine était-il arrivé que le téléphone sonna.",
      gloss: { es: "Apenas había llegado cuando sonó el teléfono.", en: "No sooner had he arrived than the phone rang." },
      accept: [{ text: "À peine il était arrivé que le téléphone sonna.", verdict: "almost", feedback: { es: "En la lengua escrita, tras «à peine» al inicio se invierte el sujeto: à peine était-il arrivé.", en: "In written French, à peine at the start triggers inversion: à peine était-il arrivé." } }],
      distractors: ["quand", "sonnait", "est"],
      grammar: ["fr-g-passe-simple"], tags: ["literature", "past"],
    },
    {
      id: "il-fallait-quil-partit", type: "sentence", target: "Il fallait qu'il partît avant l'aube.",
      gloss: { es: "Era necesario que partiera antes del alba.", en: "He had to leave before dawn." },
      accept: [{ text: "Il fallait qu'il parte avant l'aube.", feedback: { es: "Correcto: es la forma moderna; «partît» es el subjuntivo imperfecto literario.", en: "Correct: that's the modern form; partît is the literary imperfect subjunctive." } }],
      distractors: ["partait", "partit", "aubes"],
      grammar: ["fr-g-subj-imparfait"], tags: ["literature", "subjunctive"],
    },
    {
      id: "eut-il-su", type: "sentence", target: "Eût-il connu la vérité, il n'aurait rien dit.",
      gloss: { es: "Aunque hubiera conocido la verdad, no habría dicho nada.", en: "Even had he known the truth, he would have said nothing." },
      accept: [{ text: "Même s'il avait connu la vérité, il n'aurait rien dit.", feedback: { es: "Correcto en lenguaje corriente; «eût-il connu» es la versión literaria.", en: "Correct in everyday French; eût-il connu is the literary version." } }],
      distractors: ["Eut", "savait", "dirait"],
      grammar: ["fr-g-subj-imparfait"], tags: ["literature", "subjunctive"],
    },
    {
      id: "je-voulais-quelle-vint", type: "sentence", target: "Je voulais qu'elle vînt.",
      gloss: { es: "Quería que ella viniera.", en: "I wanted her to come." },
      accept: [{ text: "Je voulais qu'elle vienne.", feedback: { es: "Correcto: hoy se usa el subjuntivo presente; «vînt» es literario.", en: "Correct: today the present subjunctive is used; vînt is literary." } }],
      distractors: ["vint", "venait", "viendrait"],
      grammar: ["fr-g-subj-imparfait"], tags: ["literature", "subjunctive"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-passe-simple", type: "pattern", target: "il parla · elle finit · ils prirent · elle fut · ils eurent",
      gloss: { es: "el passé simple (tiempo de la narración escrita)", en: "the passé simple (the tense of written narrative)" },
      pattern: {
        rule: {
          es: "El passé simple es el pretérito de la literatura y la historia: equivale al passé composé, pero solo por escrito. Verbos en -er: -a (il parla, ils parlèrent); casi todos los demás: -it / -ut (il finit, il prit, il eut, il fut). Basta con reconocer la 3.ª persona.",
          en: "The passé simple is the past tense of literature and history: it means the same as the passé composé but only appears in writing. -er verbs: -a (il parla, ils parlèrent); most others: -it / -ut (il finit, il prit, il eut, il fut). Recognising the third person is usually enough.",
        },
        table: [["-er", "il parla · ils parlèrent"], ["-ir / -re", "il finit · ils prirent"], ["-u-", "il eut · il fut · il dut"], ["venir / tenir", "il vint · ils tinrent"]],
      },
      question: {
        prompt: { es: "¿Cuál es el passé simple de «faire» (il)?", en: "Which is the passé simple of faire (il)?" },
        options: ["il fit", "il fut", "il fait", "il faisa"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-passe-simple"], tags: ["grammar", "literature"],
    },
    {
      id: "pat-subj-imparfait", type: "pattern", target: "qu'il fût · qu'il eût · qu'il vînt · qu'il parlât",
      gloss: { es: "el subjuntivo imperfecto (literario)", en: "the imperfect subjunctive (literary)" },
      pattern: {
        rule: {
          es: "En la literatura clásica, tras un verbo en pasado, el subjuntivo va en imperfecto: je voulais qu'il vînt. Hoy se reemplaza por el subjuntivo presente (qu'il vienne). Se reconoce por el acento circunflejo en la 3.ª persona: fût, eût, vînt, parlât.",
          en: "In classic literature, after a past-tense verb the subjunctive is imperfect: je voulais qu'il vînt. Today it's replaced by the present subjunctive (qu'il vienne). Spot it by the circumflex in the third person: fût, eût, vînt, parlât.",
        },
        table: [["littéraire", "moderne"], ["qu'il fût", "qu'il soit"], ["qu'il eût", "qu'il ait"], ["qu'il vînt", "qu'il vienne"], ["eût-il su", "même s'il avait su"]],
      },
      question: {
        prompt: { es: "¿Cómo se dice hoy «Bien qu'il fût malade»?", en: "How would you say 'Bien qu'il fût malade' today?" },
        options: ["Bien qu'il soit malade", "Bien qu'il était malade", "Bien qu'il fut malade", "Bien qu'il sera malade"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-subj-imparfait"], tags: ["grammar", "literature", "subjunctive"],
    },
    {
      id: "tab-passe-simple", type: "paradigm", target: "passé simple (il / elle)", spoken: "passé simple, il, elle",
      gloss: { es: "el passé simple en tercera persona", en: "the passé simple in the third person" },
      grammar: ["fr-g-passe-simple"],
      paradigm: {
        caption: { es: "Escribe el passé simple (il / elle)", en: "Write the passé simple (il / elle)" },
        cells: [
          { label: "être", answer: "fut", ruleId: "fr-g-passe-simple" },
          { label: "avoir", answer: "eut", ruleId: "fr-g-passe-simple" },
          { label: "faire", answer: "fit", ruleId: "fr-g-passe-simple" },
          { label: "venir", answer: "vint", ruleId: "fr-g-passe-simple" },
          { label: "prendre", answer: "prit", ruleId: "fr-g-passe-simple" },
          { label: "parler", answer: "parla", ruleId: "fr-g-passe-simple" },
          { label: "voir", answer: "vit", ruleId: "fr-g-passe-simple" },
        ],
      },
      tags: ["grammar", "literature", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-on-frappa", type: "listening",
      target: "Ce soir-là, il pleuvait sur la ville. Le vieil homme ferma ses volets, alluma une bougie et s'assit près du feu. Soudain, on frappa à la porte. Il hésita longtemps, puis se leva et alla ouvrir : personne.",
      gloss: {
        es: "Esa noche llovía sobre la ciudad. El anciano cerró los postigos, encendió una vela y se sentó junto al fuego. De repente, llamaron a la puerta. Dudó mucho tiempo, luego se levantó y fue a abrir: nadie.",
        en: "That evening it was raining on the town. The old man closed his shutters, lit a candle and sat down by the fire. Suddenly there was a knock at the door. He hesitated a long time, then got up and went to open it: no one.",
      },
      question: {
        prompt: { es: "¿Qué encontró al abrir la puerta?", en: "What did he find when he opened the door?" },
        options: [
          { es: "No había nadie.", en: "There was nobody there." },
          { es: "A un vecino empapado.", en: "A soaking-wet neighbour." },
          { es: "Una carta.", en: "A letter." },
          { es: "No abrió la puerta.", en: "He didn't open the door." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-passe-simple"], tags: ["listening", "literature"],
    },
    {
      id: "dlg-passe-simple", type: "dialogue", register: "informal", target: "Personne ne parle comme ça !",
      gloss: { es: "¡Nadie habla así!", en: "Nobody talks like that!" },
      turns: [
        { who: "A", target: "Dans ce roman, tout est au passé simple : « il vint », « ils se turent »… Personne ne parle comme ça !", gloss: { es: "En esta novela todo está en passé simple: «vino», «se callaron»… ¡Nadie habla así!", en: "In this novel everything's in the passé simple: 'he came', 'they fell silent'… Nobody talks like that!" } },
        { who: "B", target: "Justement, c'est le temps du récit écrit. À l'oral, on dirait « il est venu ».", gloss: { es: "Justamente, es el tiempo del relato escrito. Al hablar, dirías «il est venu».", en: "Exactly, it's the tense of written narrative. In speech you'd say 'il est venu'." } },
        { who: "A", target: "Et l'intrigue, elle te plaît ?", gloss: { es: "¿Y la trama te gusta?", en: "And do you like the plot?" } },
        { who: "B", target: "Oui, mais le dénouement m'a déçue : trop rapide.", gloss: { es: "Sí, pero el desenlace me decepcionó: demasiado rápido.", en: "Yes, but the ending disappointed me: too quick." } },
      ],
      question: {
        prompt: { es: "¿Qué no le gustó a B?", en: "What didn't B like?" },
        options: [
          { es: "El desenlace, demasiado rápido.", en: "The ending, which was too quick." },
          { es: "El uso del passé simple.", en: "The use of the passé simple." },
          { es: "La trama.", en: "The plot." },
          { es: "El narrador.", en: "The narrator." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-passe-simple"], tags: ["dialogue", "literature"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-nouvelle", type: "bridge", onlyFor: "en", target: "la nouvelle",
      gloss: { es: "el cuento, el relato breve", en: "the short story (not 'novel')" },
      question: {
        prompt: { es: "«Maupassant a écrit plus de trois cents nouvelles» significa…", en: "'Maupassant a écrit plus de trois cents nouvelles' means…" },
        options: [
          { es: "Maupassant escribió más de trescientos cuentos.", en: "Maupassant wrote over three hundred short stories." },
          { es: "Maupassant escribió más de trescientas novelas.", en: "Maupassant wrote over three hundred novels." },
          { es: "Maupassant escribió más de trescientas noticias.", en: "Maupassant wrote over three hundred news items." },
        ],
        answer: 0,
      },
      note: { en: "A novel is un roman; une nouvelle is a short story (and also a piece of news)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "literature"],
    },
  ]),
};
