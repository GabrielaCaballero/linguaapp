import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u27",
  lang: "fr",
  index: 27,
  cefr: "C1",
  title: { target: "Douter et ressentir", es: "Dudas y sentimientos", en: "Doubts and feelings" },
  canDo: [
    { es: "Puedo expresar dudas, alivio, remordimiento y rencor con matices.", en: "I can express doubt, relief, remorse and resentment with nuance." },
    { es: "Sé usar el subjuntivo pasado (que tu sois venu, qu'il ait compris).", en: "I can use the past subjunctive (que tu sois venu, qu'il ait compris)." },
    { es: "Sé usar el subjuntivo tras superlativos y en relativas (le seul qui sache).", en: "I can use the subjunctive after superlatives and in relative clauses (le seul qui sache)." },
  ],
  icon: "💭",
  items: build("fr", 27, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "se-douter-de", type: "word", pos: "verb", target: "se douter de",
      gloss: { es: "sospechar, imaginarse", en: "to suspect / guess" },
      forms: { je: "me doute", pp: "douté" },
      distractors: ["douter de", "redouter", "se doucher"],
      note: { es: "¡Ojo! Je m'en doutais = ya me lo imaginaba; je doute = dudo.", en: "Careful: je m'en doutais = I thought as much; je doute = I doubt." },
      tags: ["feelings"],
    },
    { id: "redouter", type: "word", pos: "verb", target: "redouter", gloss: { es: "temer", en: "to dread" }, forms: { pp: "redouté" }, distractors: ["douter", "redoubler", "reboucher"], note: { es: "Con subjuntivo: je redoute qu'il (ne) soit trop tard.", en: "With the subjunctive: je redoute qu'il (ne) soit trop tard." }, tags: ["feelings"] },
    { id: "soulagement", type: "word", pos: "noun", target: "le soulagement", gender: "m", plural: "les soulagements", gloss: { es: "el alivio", en: "the relief" }, distractors: ["le soulèvement", "le soulier", "l'allègement"], tags: ["feelings"] },
    { id: "rancune", type: "word", pos: "noun", target: "la rancune", gender: "f", plural: "les rancunes", gloss: { es: "el rencor", en: "the grudge / resentment" }, distractors: ["la rançon", "la rangée", "la rune"], note: { es: "Sans rancune ! = ¡Sin rencores!", en: "Sans rancune ! = No hard feelings!" }, tags: ["feelings"] },
    { id: "vexe", type: "word", pos: "adj", target: "vexé", gloss: { es: "ofendido/a, herido/a en su orgullo", en: "offended / hurt (pride)" }, forms: { m: "vexé", f: "vexée" }, accept: [{ text: "vexée" }], distractors: ["vexant", "vêtu", "versé"], tags: ["feelings"] },
    { id: "navre", type: "word", pos: "adj", target: "navré", gloss: { es: "apenado/a, muy arrepentido/a (formal)", en: "terribly sorry" }, forms: { m: "navré", f: "navrée" }, accept: [{ text: "navrée" }], distractors: ["navrant", "nerveux", "navigué"], note: { es: "Je suis navré/e = lo siento muchísimo; navrant = lamentable.", en: "Je suis navré/e = I'm terribly sorry; navrant = deplorable." }, tags: ["feelings", "polite"] },
    { id: "amertume", type: "word", pos: "noun", target: "l'amertume", gender: "f", plural: "les amertumes", gloss: { es: "la amargura", en: "the bitterness" }, distractors: ["l'amer", "l'amitié", "l'armature"], tags: ["feelings"] },
    { id: "remords", type: "word", pos: "noun", target: "le remords", gender: "m", plural: "les remords", gloss: { es: "el remordimiento", en: "the remorse" }, distractors: ["le remord", "la remorque", "le rebord"], note: { es: "Siempre con -s, también en singular: le remords.", en: "Always spelt with -s, even in the singular: le remords." }, tags: ["feelings"] },
    {
      id: "sen-vouloir", type: "phrase", pos: "phrase", target: "s'en vouloir",
      gloss: { es: "culparse, no perdonarse", en: "to blame oneself" },
      distractors: ["s'en aller", "se vouloir", "s'en valoir"],
      note: { es: "Je m'en veux = me culpo; je t'en veux = estoy enojado/a contigo.", en: "Je m'en veux = I blame myself; je t'en veux = I hold it against you." },
      tags: ["feelings", "chunk"],
    },
    { id: "peu-probable-que", type: "phrase", pos: "phrase", target: "il est peu probable que", gloss: { es: "es poco probable que", en: "it's unlikely that" }, distractors: ["il est peu probable de", "il est peu probablement que", "il est peu probable si"], note: { es: "Con subjuntivo: il est peu probable qu'il vienne.", en: "With the subjunctive: il est peu probable qu'il vienne." }, grammar: ["fr-g-subj-passe"], tags: ["doubt"] },
    { id: "il-se-peut-que", type: "phrase", pos: "phrase", target: "il se peut que", gloss: { es: "puede que, es posible que", en: "it may be that" }, distractors: ["il se peut de", "il peut que", "il se pourrait de"], grammar: ["fr-g-subj-passe"], tags: ["doubt"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "content-que-tu-sois-venu", type: "sentence", target: "Je suis content que tu sois venu.",
      gloss: { es: "Me alegra que hayas venido.", en: "I'm glad you came." },
      accept: [{ text: "Je suis content que tu sois venue." }, { text: "Je suis contente que tu sois venu." }, { text: "Je suis contente que tu sois venue." }],
      errors: [{ text: "Je suis content que tu es venu.", feedback: { es: "Tras un sentimiento va subjuntivo; para algo ya pasado, subjuntivo pasado: que tu sois venu.", en: "After a feeling use the subjunctive; for something already done, the past subjunctive: que tu sois venu." }, ruleId: "fr-g-subj-passe" }],
      distractors: ["es", "viens", "aies"],
      grammar: ["fr-g-subj-passe"], tags: ["feelings", "subjunctive"],
    },
    {
      id: "je-doute-quil-ait-compris", type: "sentence", target: "Je doute qu'il ait compris.",
      gloss: { es: "Dudo que haya entendido.", en: "I doubt he understood." },
      errors: [{ text: "Je doute qu'il a compris.", feedback: { es: "«douter que» pide subjuntivo: qu'il ait compris.", en: "douter que takes the subjunctive: qu'il ait compris." }, ruleId: "fr-g-subj-passe" }],
      distractors: ["a", "comprenne", "soit"],
      grammar: ["fr-g-subj-passe"], tags: ["doubt", "subjunctive"],
    },
    {
      id: "il-faut-que-tu-aies-fini", type: "sentence", target: "Il faut que tu aies fini avant midi.",
      gloss: { es: "Tienes que haber terminado antes del mediodía.", en: "You need to have finished before noon." },
      distractors: ["as", "finisses", "sois"],
      grammar: ["fr-g-subj-passe"], tags: ["subjunctive"],
    },
    {
      id: "regrette-pas-vus", type: "sentence", target: "Je regrette que nous ne nous soyons pas vus.",
      gloss: { es: "Lamento que no nos hayamos visto.", en: "I'm sorry we didn't see each other." },
      errors: [{ text: "Je regrette que nous ne nous ayons pas vus.", feedback: { es: "Los verbos pronominales usan «être»: que nous nous soyons vus.", en: "Reflexive verbs take être: que nous nous soyons vus." }, ruleId: "fr-g-subj-passe" }],
      distractors: ["ayons", "sommes", "vu"],
      grammar: ["fr-g-subj-passe"], tags: ["feelings", "subjunctive"],
    },
    {
      id: "meilleur-film", type: "sentence", target: "C'est le meilleur film que j'aie jamais vu.",
      gloss: { es: "Es la mejor película que he visto en mi vida.", en: "It's the best film I've ever seen." },
      accept: [{ text: "C'est le meilleur film que j'ai jamais vu.", feedback: { es: "Se oye mucho, pero tras un superlativo el registro cuidado pide subjuntivo: que j'aie vu.", en: "Very common, but after a superlative careful French uses the subjunctive: que j'aie vu." } }],
      distractors: ["mieux", "a", "vue"],
      grammar: ["fr-g-subj-relative"], tags: ["subjunctive", "culture"],
    },
    {
      id: "quelquun-qui-puisse", type: "sentence", target: "Je cherche quelqu'un qui puisse m'aider.",
      gloss: { es: "Busco a alguien que pueda ayudarme.", en: "I'm looking for someone who can help me." },
      accept: [{ text: "Je cherche quelqu'un qui peut m'aider.", verdict: "almost", feedback: { es: "Si esa persona todavía no existe para ti, el francés cuidado usa subjuntivo: qui puisse.", en: "If you don't know such a person exists yet, careful French uses the subjunctive: qui puisse." } }],
      distractors: ["peux", "que", "pouvoir"],
      grammar: ["fr-g-subj-relative"], tags: ["subjunctive"],
    },
    {
      id: "je-men-veux", type: "sentence", target: "Je m'en veux de ne pas t'avoir appelé.",
      gloss: { es: "Me culpo por no haberte llamado.", en: "I'm angry with myself for not calling you." },
      accept: [{ text: "Je m'en veux de ne pas t'avoir appelée." }],
      distractors: ["voulu", "appeler", "te"],
      tags: ["feelings", "chunk"],
    },
    {
      id: "il-se-peut-quelle-soit-partie", type: "sentence", target: "Il se peut qu'elle soit déjà partie.",
      gloss: { es: "Puede que ya se haya ido.", en: "She may have already left." },
      errors: [{ text: "Il se peut qu'elle est déjà partie.", feedback: { es: "«il se peut que» pide subjuntivo: qu'elle soit partie.", en: "il se peut que takes the subjunctive: qu'elle soit partie." }, ruleId: "fr-g-subj-passe" }],
      distractors: ["est", "ait", "parti"],
      grammar: ["fr-g-subj-passe"], tags: ["doubt", "subjunctive"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-subj-passe", type: "pattern", target: "que j'aie fini · qu'elle soit partie",
      gloss: { es: "el subjuntivo pasado", en: "the past subjunctive" },
      pattern: {
        rule: {
          es: "Se forma con avoir o être en subjuntivo + participio: que j'aie fini, qu'elle soit partie. Se usa cuando la acción del subjuntivo es anterior: je suis content que tu sois venu (= que hayas venido).",
          en: "avoir or être in the subjunctive + past participle: que j'aie fini, qu'elle soit partie. Use it when the subjunctive action happened first: je suis content que tu sois venu (= that you came).",
        },
        table: [["que j'", "aie fini"], ["que tu", "sois parti(e)"], ["qu'il / elle", "ait compris"], ["que nous", "ayons vu"], ["qu'ils / elles", "soient venu(e)s"]],
      },
      question: {
        prompt: { es: "Completa: «Je suis désolé que vous ___ attendre.»", en: "Complete: 'Je suis désolé que vous ___ attendre.'" },
        options: ["ayez dû", "avez dû", "aviez dû", "aurez dû"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-subj-passe"], tags: ["grammar", "subjunctive"],
    },
    {
      id: "pat-subj-relative", type: "pattern", target: "le seul qui sache · quelqu'un qui puisse · le meilleur que j'aie vu",
      gloss: { es: "subjuntivo en relativas y tras superlativos", en: "subjunctive in relative clauses and after superlatives" },
      pattern: {
        rule: {
          es: "Tras un superlativo o le seul, le premier, le dernier, el registro cuidado usa subjuntivo: le seul qui sache. También cuando buscas algo que quizás no existe: je cherche un appartement qui soit calme.",
          en: "After a superlative or le seul, le premier, le dernier, careful French uses the subjunctive: le seul qui sache. Also when what you look for may not exist: je cherche un appartement qui soit calme.",
        },
        table: [["superlatif", "le plus beau livre que j'aie lu"], ["le seul / l'unique", "la seule qui me comprenne"], ["recherche", "quelqu'un qui sache coder"]],
      },
      question: {
        prompt: { es: "Completa: «C'est la seule personne qui me ___ vraiment.»", en: "Complete: 'C'est la seule personne qui me ___ vraiment.'" },
        options: ["comprenne", "comprendra", "comprendrait", "comprenant"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-subj-relative"], tags: ["grammar", "subjunctive"],
    },
    {
      id: "tab-subj-passe-partir", type: "paradigm", target: "partir — subjonctif passé", spoken: "partir, subjonctif passé",
      gloss: { es: "partir en subjuntivo pasado", en: "partir in the past subjunctive" },
      grammar: ["fr-g-subj-passe"],
      paradigm: {
        caption: { es: "Escribe el subjuntivo pasado de «partir» (masculino)", en: "Write the past subjunctive of partir (masculine)" },
        cells: [
          { label: "que je", answer: "sois parti", ruleId: "fr-g-subj-passe" },
          { label: "que tu", answer: "sois parti", ruleId: "fr-g-subj-passe" },
          { label: "qu'il", answer: "soit parti", ruleId: "fr-g-subj-passe" },
          { label: "que nous", answer: "soyons partis", ruleId: "fr-g-subj-passe" },
          { label: "que vous", answer: "soyez partis", accept: ["soyez parti"], ruleId: "fr-g-subj-passe" },
          { label: "qu'ils", answer: "soient partis", ruleId: "fr-g-subj-passe" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-message-hugo", type: "listening", register: "informal",
      target: "Salut Marion, c'est Hugo. Je suis vraiment navré de ne pas être venu samedi. Je m'en veux, surtout que tu avais tout préparé. J'ai peur que tu l'aies mal pris… Rappelle-moi quand tu veux.",
      gloss: {
        es: "Hola, Marion, soy Hugo. Lo siento muchísimo por no haber ido el sábado. Me culpo, sobre todo porque tú lo habías preparado todo. Me temo que te lo hayas tomado mal… Llámame cuando quieras.",
        en: "Hi Marion, it's Hugo. I'm really sorry I didn't come on Saturday. I'm angry with myself, especially as you'd prepared everything. I'm afraid you took it badly… Call me back whenever you like.",
      },
      question: {
        prompt: { es: "¿Por qué llama Hugo?", en: "Why is Hugo calling?" },
        options: [
          { es: "Para pedir perdón por no haber ido.", en: "To apologise for not coming." },
          { es: "Para invitar a Marion el sábado.", en: "To invite Marion on Saturday." },
          { es: "Porque está enojado con Marion.", en: "Because he's angry with Marion." },
          { es: "Para darle las gracias por la fiesta.", en: "To thank her for the party." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-subj-passe"], tags: ["listening", "feelings"],
    },
    {
      id: "dlg-sans-rancune", type: "dialogue", register: "informal", target: "Sans rancune !",
      gloss: { es: "¡Sin rencores!", en: "No hard feelings!" },
      turns: [
        { who: "A", target: "Tu m'en veux encore pour la réunion de lundi ?", gloss: { es: "¿Sigues enojada conmigo por la reunión del lunes?", en: "Are you still cross with me about Monday's meeting?" } },
        { who: "B", target: "Un peu… J'étais vexée que tu ne m'aies pas défendue devant le directeur.", gloss: { es: "Un poco… Me sentí ofendida porque no me defendiste delante del director.", en: "A bit… I was hurt that you didn't stand up for me in front of the director." } },
        { who: "A", target: "Tu as raison, je m'en veux. Je n'ai pas osé le contredire.", gloss: { es: "Tienes razón, me culpo. No me atreví a contradecirlo.", en: "You're right, I blame myself. I didn't dare contradict him." } },
        { who: "B", target: "Bon, c'est oublié. Sans rancune !", gloss: { es: "Bueno, ya está olvidado. ¡Sin rencores!", en: "OK, it's forgotten. No hard feelings!" } },
      ],
      question: {
        prompt: { es: "¿Por qué estaba molesta B?", en: "Why was B upset?" },
        options: [
          { es: "A no la defendió delante del director.", en: "A didn't stand up for her in front of the director." },
          { es: "A llegó tarde a la reunión.", en: "A was late for the meeting." },
          { es: "El director la criticó por un error de A.", en: "The director criticised her for A's mistake." },
          { es: "A no fue a la reunión.", en: "A didn't go to the meeting." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-subj-passe"], tags: ["dialogue", "feelings"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-je-men-doutais", type: "bridge", onlyFor: "en", target: "Je m'en doutais.",
      gloss: { es: "Ya me lo imaginaba.", en: "I thought as much." },
      question: {
        prompt: { es: "«Il a démissionné ? Je m'en doutais.» significa…", en: "'Il a démissionné ? Je m'en doutais.' means…" },
        options: [
          { es: "Ya me lo imaginaba.", en: "I thought as much." },
          { es: "Lo dudaba.", en: "I doubted it." },
          { es: "No me lo creo.", en: "I don't believe it." },
        ],
        answer: 0,
      },
      note: { en: "se douter de = to suspect; douter de = to doubt." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "feelings"],
    },
  ]),
};
