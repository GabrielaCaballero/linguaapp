import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u35",
  lang: "fr",
  index: 35,
  cefr: "C2",
  title: { target: "Ironie et humour", es: "Ironía y humor", en: "Irony and humour" },
  canDo: [
    { es: "Capto la ironía, el doble sentido y el humor seco en una conversación.", en: "I can pick up irony, double meanings and deadpan humour in conversation." },
    { es: "Reconozco figuras como la litote, la antífrasis y el eufemismo.", en: "I can recognise figures such as litotes, antiphrasis and euphemism." },
    { es: "Sé usar las exclamativas: Que de monde ! Ce qu'il est drôle !", en: "I can use exclamatives: Que de monde ! Ce qu'il est drôle !" },
  ],
  icon: "😏",
  items: build("fr", 35, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "second-degre", type: "phrase", pos: "phrase", target: "le second degré", gloss: { es: "la ironía, el sentido no literal", en: "tongue-in-cheek humour" }, distractors: ["le second grade", "le premier degré", "la seconde degré"], note: { es: "prendre au premier degré = tomarse algo al pie de la letra.", en: "prendre au premier degré = to take something literally." }, tags: ["humour"] },
    { id: "pince-sans-rire", type: "word", pos: "adj", target: "pince-sans-rire", gloss: { es: "de humor seco, que bromea con cara seria", en: "deadpan" }, distractors: ["pince-sans-sourire", "pince-à-rire", "sans-rire"], note: { es: "Invariable: une collègue pince-sans-rire.", en: "Invariable: une collègue pince-sans-rire." }, tags: ["humour", "character"] },
    { id: "litote", type: "word", pos: "noun", target: "la litote", gender: "f", plural: "les litotes", gloss: { es: "la lítote (decir menos para dar a entender más)", en: "the litotes / understatement" }, distractors: ["le litre", "la lithographie", "l'anecdote"], grammar: ["fr-g-figures"], tags: ["humour", "rhetoric"] },
    { id: "euphemisme", type: "word", pos: "noun", target: "l'euphémisme", gender: "m", plural: "les euphémismes", gloss: { es: "el eufemismo", en: "the euphemism" }, distractors: ["l'euphorie", "l'emphase", "l'euphémie"], grammar: ["fr-g-figures"], tags: ["humour", "rhetoric"] },
    { id: "calembour", type: "word", pos: "noun", target: "le calembour", gender: "m", plural: "les calembours", gloss: { es: "el juego de palabras", en: "the pun" }, distractors: ["le calendrier", "le tambour", "le calumet"], tags: ["humour"] },
    { id: "chambrer", type: "word", pos: "verb", target: "chambrer", gloss: { es: "tomar el pelo, burlarse en broma", en: "to tease / rib" }, forms: { pp: "chambré" }, distractors: ["chambouler", "cambrer", "chamailler"], note: { es: "Coloquial; también significa poner el vino a temperatura ambiente.", en: "Informal; it also means to bring wine to room temperature." }, tags: ["humour", "slang"] },
    { id: "railler", type: "word", pos: "verb", target: "railler", gloss: { es: "ridiculizar, mofarse de (culto)", en: "to mock / jeer at (literary)" }, forms: { pp: "raillé" }, distractors: ["rallier", "rayer", "railer"], tags: ["humour", "literature"] },
    { id: "narquois", type: "word", pos: "adj", target: "narquois", gloss: { es: "burlón/ona, socarrón/ona", en: "mocking / sardonic" }, forms: { m: "narquois", f: "narquoise" }, accept: [{ text: "narquoise" }], distractors: ["narcissique", "narcotique", "carquois"], note: { es: "un sourire narquois = una sonrisa burlona.", en: "un sourire narquois = a mocking smile." }, tags: ["humour", "character"] },
    { id: "cest-le-bouquet", type: "phrase", pos: "phrase", target: "C'est le bouquet !", gloss: { es: "¡Lo que faltaba!", en: "That's the last straw!" }, distractors: ["C'est la fleur !", "C'est le bouquin !", "C'est le paquet !"], note: { es: "Irónico: le bouquet es el ramo, o el final de los fuegos artificiales.", en: "Ironic: le bouquet is the bunch of flowers, or the fireworks finale." }, tags: ["humour", "chunk"] },
    { id: "se-payer-la-tete", type: "phrase", pos: "phrase", target: "se payer la tête de quelqu'un", gloss: { es: "burlarse de alguien en su cara", en: "to make fun of someone (to their face)" }, distractors: ["payer la tête de quelqu'un", "se payer la face de quelqu'un", "se prendre la tête de quelqu'un"], tags: ["humour", "idioms"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "il-nest-pas-bete", type: "sentence", target: "Il n'est pas bête, ce garçon.",
      gloss: { es: "No es nada tonto este muchacho.", en: "He's no fool, that boy." },
      distractors: ["bêtes", "fille", "sot"],
      note: { es: "Lítote: en realidad significa que es muy listo.", en: "Litotes: it actually means he's very clever." },
      grammar: ["fr-g-figures"], tags: ["humour", "rhetoric"],
    },
    {
      id: "bravo-idee-de-genie", type: "sentence", target: "Bravo, quelle idée de génie !",
      gloss: { es: "¡Bravo, qué idea tan genial! (irónico)", en: "Well done, what a stroke of genius! (ironic)" },
      distractors: ["Quel", "génial", "idées"],
      note: { es: "Antífrasis: se dice lo contrario de lo que se piensa.", en: "Antiphrasis: you say the opposite of what you mean." },
      grammar: ["fr-g-figures"], tags: ["humour", "rhetoric"],
    },
    {
      id: "pas-lendroit-le-plus-gai", type: "sentence", target: "Ce n'est pas l'endroit le plus gai du monde.",
      gloss: { es: "No es el lugar más alegre del mundo.", en: "It's not the cheeriest place in the world." },
      distractors: ["gaie", "mieux", "endroits"],
      grammar: ["fr-g-figures"], tags: ["humour", "rhetoric"],
    },
    {
      id: "il-nous-a-quittes", type: "sentence", target: "Il nous a quittés l'an dernier.",
      gloss: { es: "Nos dejó (falleció) el año pasado.", en: "He passed away last year." },
      errors: [{ text: "Il nous a quitté l'an dernier.", feedback: { es: "El complemento «nous» va delante: el participio concuerda (quittés).", en: "The object nous comes first, so the participle agrees: quittés." } }],
      distractors: ["quitté", "laissés", "partis"],
      note: { es: "Eufemismo para «il est mort».", en: "A euphemism for il est mort." },
      grammar: ["fr-g-figures"], tags: ["rhetoric", "euphemism"],
    },
    {
      id: "ce-quil-est-drole", type: "sentence", register: "informal", target: "Ce qu'il est drôle, celui-là !",
      gloss: { es: "¡Qué gracioso es ese!", en: "Isn't he hilarious, that one!" },
      accept: [{ text: "Qu'est-ce qu'il est drôle, celui-là !" }, { text: "Qu'il est drôle, celui-là !" }],
      distractors: ["Que", "celle-là", "drôles"],
      grammar: ["fr-g-exclamatives"], tags: ["humour", "exclamation"],
    },
    {
      id: "que-de-monde", type: "sentence", target: "Que de monde !",
      gloss: { es: "¡Cuánta gente!", en: "What a crowd!" },
      accept: [{ text: "Quel monde !" }],
      distractors: ["Quel", "du", "gens"],
      grammar: ["fr-g-exclamatives"], tags: ["exclamation"],
    },
    {
      id: "quest-ce-quon-sest-amuses", type: "sentence", register: "informal", target: "Qu'est-ce qu'on s'est amusés !",
      gloss: { es: "¡Cómo nos divertimos!", en: "We had such a good time!" },
      accept: [{ text: "Qu'est-ce qu'on s'est amusé !" }, { text: "Ce qu'on s'est amusés !" }],
      distractors: ["amuser", "sommes", "quel"],
      grammar: ["fr-g-exclamatives"], tags: ["exclamation", "spoken"],
    },
    {
      id: "ponctualite-remarquable", type: "sentence", target: "Tu es d'une ponctualité remarquable…",
      gloss: { es: "Eres de una puntualidad admirable… (irónico)", en: "You're remarkably punctual… (ironic)" },
      distractors: ["ponctuel", "remarquablement", "une"],
      grammar: ["fr-g-figures"], tags: ["humour", "irony"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-figures", type: "pattern", target: "Ce n'est pas mal. · Bravo ! · Il nous a quittés. · Je meurs de faim !",
      gloss: { es: "figuras: lítote, antífrasis, eufemismo, hipérbole", en: "figures: litotes, antiphrasis, euphemism, hyperbole" },
      pattern: {
        rule: {
          es: "La lítote dice menos para dar a entender más (ce n'est pas mal = está muy bien). La antífrasis dice lo contrario (bravo ! tras un error). El eufemismo suaviza (il nous a quittés). La hipérbole exagera (je meurs de faim).",
          en: "Litotes says less to mean more (ce n'est pas mal = it's very good). Antiphrasis says the opposite (bravo ! after a blunder). Euphemism softens (il nous a quittés). Hyperbole exaggerates (je meurs de faim).",
        },
        table: [["litote", "Ce n'est pas mal."], ["antiphrase", "Bravo, champion !"], ["euphémisme", "Il nous a quittés."], ["hyperbole", "Je meurs de faim !"]],
      },
      question: {
        prompt: { es: "En una tragedia de Corneille, «Va, je ne te hais point» significa en realidad…", en: "In a Corneille tragedy, 'Va, je ne te hais point' really means…" },
        options: [
          { es: "Te amo (es una lítote).", en: "I love you (it's litotes)." },
          { es: "Te odio un poco.", en: "I hate you a little." },
          { es: "Vete, te odio.", en: "Go away, I hate you." },
          { es: "No te conozco.", en: "I don't know you." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-figures"], tags: ["grammar", "rhetoric", "literature"],
    },
    {
      id: "pat-exclamatives", type: "pattern", target: "Que de monde ! · Ce qu'il est drôle ! · Quel culot !",
      gloss: { es: "las frases exclamativas", en: "exclamative sentences" },
      pattern: {
        rule: {
          es: "Quel(le)(s) + sustantivo: quel culot ! Que de + sustantivo = cuánto/a: que de monde ! Que / Comme / Ce que / Qu'est-ce que + frase: comme c'est beau !, ce qu'il est drôle !, qu'est-ce qu'on s'est amusés ! (de más culto a más coloquial).",
          en: "Quel(le)(s) + noun: quel culot ! Que de + noun = so much / so many: que de monde ! Que / Comme / Ce que / Qu'est-ce que + clause: comme c'est beau !, ce qu'il est drôle !, qu'est-ce qu'on s'est amusés ! (from formal to informal).",
        },
        table: [["quel + nom", "Quelle chance !"], ["que de + nom", "Que de souvenirs !"], ["comme / que + phrase", "Comme il fait beau !"], ["ce que / qu'est-ce que", "Ce qu'il est bête !"]],
      },
      question: {
        prompt: { es: "Completa: «___ il fait chaud aujourd'hui !»", en: "Complete: '___ il fait chaud aujourd'hui !'" },
        options: ["Qu'est-ce qu'", "Quel", "Que de", "Quelle"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-exclamatives"], tags: ["grammar", "exclamation"],
    },
    {
      id: "tab-figures", type: "paradigm", target: "quelle figure ?",
      gloss: { es: "identifica la figura retórica", en: "name the figure of speech" },
      grammar: ["fr-g-figures"],
      paradigm: {
        caption: { es: "Escribe la figura con su artículo", en: "Write the figure with its article" },
        cells: [
          { label: "Ce n'est pas mal.", answer: "la litote", ruleId: "fr-g-figures" },
          { label: "Bravo ! (après une erreur)", answer: "l'antiphrase", ruleId: "fr-g-figures" },
          { label: "Il nous a quittés.", answer: "l'euphémisme", ruleId: "fr-g-figures" },
          { label: "Je meurs de faim !", answer: "l'hyperbole", ruleId: "fr-g-figures" },
        ],
      },
      tags: ["grammar", "rhetoric", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-chronique-train", type: "listening",
      target: "Ce matin, mon train avait une heure de retard. Une heure ! Le contrôleur nous a annoncé, très sérieux : « Nous vous remercions de votre patience. » Ah, mais merci à vous, vraiment ! C'est toujours un plaisir de visiter la gare à sept heures du matin…",
      gloss: {
        es: "Esta mañana mi tren tenía una hora de retraso. ¡Una hora! El revisor nos anunció, muy serio: «Les agradecemos su paciencia». ¡Ah, pero gracias a ustedes, de verdad! Siempre es un placer visitar la estación a las siete de la mañana…",
        en: "This morning my train was an hour late. An hour! The conductor announced, very seriously: 'Thank you for your patience.' Oh, no, thank YOU, really! It's always a pleasure to visit the station at seven in the morning…",
      },
      question: {
        prompt: { es: "¿Qué tono tiene quien habla?", en: "What is the speaker's tone?" },
        options: [
          { es: "Irónico: está molesto por el retraso.", en: "Ironic: annoyed about the delay." },
          { es: "Sincero: le encanta la estación.", en: "Sincere: loves the station." },
          { es: "Triste: perdió el tren.", en: "Sad: missed the train." },
          { es: "Agradecido con el revisor.", en: "Grateful to the conductor." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-figures"], tags: ["listening", "irony", "transport"],
    },
    {
      id: "dlg-ponctualite", type: "dialogue", register: "informal", target: "Je te chambre !",
      gloss: { es: "¡Te estoy tomando el pelo!", en: "I'm just teasing you!" },
      turns: [
        { who: "A", target: "Désolé, je suis un peu en retard…", gloss: { es: "Perdón, llego un poco tarde…", en: "Sorry, I'm a bit late…" } },
        { who: "B", target: "Un peu ? Quarante minutes ! Tu es d'une ponctualité remarquable.", gloss: { es: "¿Un poco? ¡Cuarenta minutos! Eres de una puntualidad admirable.", en: "A bit? Forty minutes! You're remarkably punctual." } },
        { who: "A", target: "Oh là là, tu m'en veux ?", gloss: { es: "Uy, ¿estás enojada conmigo?", en: "Oh dear, are you cross with me?" } },
        { who: "B", target: "Mais non, je te chambre ! Allez, viens, le film n'a pas encore commencé.", gloss: { es: "¡Que no, te estoy tomando el pelo! Vamos, ven, la película todavía no empezó.", en: "Of course not, I'm just teasing you! Come on, the film hasn't started yet." } },
      ],
      question: {
        prompt: { es: "¿Está B realmente enojada?", en: "Is B really angry?" },
        options: [
          { es: "No, solo bromea.", en: "No, she's only joking." },
          { es: "Sí, está furiosa.", en: "Yes, she's furious." },
          { es: "Sí, y se va sola al cine.", en: "Yes, and she goes to the cinema alone." },
          { es: "No, porque A llegó temprano.", en: "No, because A arrived early." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-figures"], tags: ["dialogue", "irony", "humour"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-humeur-humour", type: "bridge", onlyFor: "es", target: "l'humeur / l'humour",
      gloss: { es: "el estado de ánimo / el sentido del humor", en: "mood / humour" },
      question: {
        prompt: { es: "«Il a beaucoup d'humour» significa…", en: "'Il a beaucoup d'humour' means…" },
        options: [
          { es: "Tiene mucho sentido del humor.", en: "He has a great sense of humour." },
          { es: "Está de muy buen humor.", en: "He's in a very good mood." },
          { es: "Tiene muchos cambios de humor.", en: "He has a lot of mood swings." },
        ],
        answer: 0,
      },
      note: { es: "El español «humor» se divide en dos: être de bonne humeur (estar de buen humor) y avoir de l'humour (tener gracia)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "humour"],
    },
  ]),
};
