import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u24",
  lang: "fr",
  index: 24,
  cefr: "B2",
  title: { target: "Expressions et français familier", es: "Expresiones y francés coloquial", en: "Idioms and everyday French" },
  canDo: [
    { es: "Puedo entender y usar expresiones idiomáticas frecuentes.", en: "I can understand and use common idioms." },
    { es: "Puedo reconocer el francés hablado informal y cambiar de registro.", en: "I can recognise informal spoken French and switch register." },
    { es: "Sé poner énfasis con «c'est… qui / c'est… que».", en: "I can add emphasis with c'est… qui / c'est… que." },
  ],
  icon: "🗯️",
  items: build("fr", 24, "B2", [
    { id: "poser-un-lapin", type: "phrase", pos: "phrase", target: "poser un lapin", gloss: { es: "dejar plantado/a a alguien", en: "to stand someone up" }, distractors: ["poser un chat", "poser le lapin", "donner un lapin"], note: { es: "Literalmente «poner un conejo»: Il m'a posé un lapin = me dejó plantado/a.", en: "Literally 'to put down a rabbit': Il m'a posé un lapin = he stood me up." }, tags: ["idioms"] },
    { id: "coute-les-yeux", type: "phrase", pos: "phrase", target: "coûter les yeux de la tête", gloss: { es: "costar un ojo de la cara", en: "to cost an arm and a leg" }, distractors: ["coûter un œil de la tête", "coûter les yeux du visage", "coûter la tête"], note: { es: "Casi igual que en español, pero con los dos ojos y «la cabeza».", en: "Literally 'to cost the eyes from your head'." }, tags: ["idioms", "money"] },
    { id: "avoir-le-cafard", type: "phrase", pos: "phrase", target: "avoir le cafard", gloss: { es: "estar triste, desanimado/a", en: "to feel down" }, distractors: ["avoir la cafard", "avoir le café", "être le cafard"], note: { es: "le cafard = la cucaracha; avoir le cafard = estar triste, desanimado/a.", en: "le cafard = the cockroach; avoir le cafard = to have the blues." }, tags: ["idioms", "feelings"] },
    { id: "pieds-dans-le-plat", type: "phrase", pos: "phrase", target: "mettre les pieds dans le plat", gloss: { es: "meter la pata (hablar sin tacto)", en: "to put your foot in it" }, distractors: ["mettre les mains dans le plat", "mettre le pied dans la plaque", "poser les pieds dans le plat"], tags: ["idioms"] },
    { id: "tomber-dans-les-pommes", type: "phrase", pos: "phrase", target: "tomber dans les pommes", gloss: { es: "desmayarse", en: "to faint" }, distractors: ["tomber dans les poires", "tomber sur les pommes", "tomber des pommes"], tags: ["idioms", "health"] },
    { id: "coup-de-foudre", type: "phrase", pos: "phrase", target: "le coup de foudre", gloss: { es: "el flechazo, el amor a primera vista", en: "love at first sight" }, distractors: ["le coup de feu", "le coup de fil", "le coup de soleil"], note: { es: "Ojo: un coup de fil = una llamada; un coup de soleil = una quemadura de sol.", en: "Careful: un coup de fil = a phone call; un coup de soleil = sunburn." }, tags: ["idioms", "feelings"] },
    { id: "boulot", type: "word", pos: "noun", target: "le boulot", gender: "m", plural: "les boulots", gloss: { es: "el trabajo (coloquial)", en: "the job (slang)" }, distractors: ["la boulot", "le bouleau", "le boulon"], tags: ["slang", "work"] },
    { id: "bouquin", type: "word", pos: "noun", target: "le bouquin", gender: "m", plural: "les bouquins", gloss: { es: "el libro (coloquial)", en: "the book (informal)" }, distractors: ["la bouquin", "le bouquet", "le boudin"], tags: ["slang", "books"] },
    { id: "bagnole", type: "word", pos: "noun", target: "la bagnole", gender: "f", plural: "les bagnoles", gloss: { es: "el auto, el coche (coloquial)", en: "the car (slang)" }, distractors: ["le bagnole", "la bagnoire", "la babiole"], note: { es: "Neutro: la voiture.", en: "Neutral: la voiture." }, tags: ["slang"] },
    { id: "mec", type: "word", pos: "noun", target: "le mec", gender: "m", plural: "les mecs", gloss: { es: "el tipo, el muchacho (coloquial)", en: "the guy (slang)" }, distractors: ["la mec", "le mac", "le bec"], note: { es: "También «mon mec» = mi novio (muy coloquial).", en: "Also 'mon mec' = my boyfriend (very informal)." }, tags: ["slang", "people"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "chais-pas", type: "sentence", target: "Je ne sais pas, moi.",
      gloss: { es: "Pues yo no sé.", en: "Well, I don't know." },
      accept: [{ text: "Je sais pas, moi.", verdict: "almost", feedback: { es: "Así se habla, pero por escrito va el «ne»: je ne sais pas.", en: "That's how people talk, but in writing keep 'ne': je ne sais pas." } }],
      distractors: ["pas", "je", "rien"],
      note: { es: "Al hablar suena «chépa» o «ché pas, moi».", en: "In speech it sounds like 'shay pa, mwa'." },
      tags: ["spoken", "negation"],
    },
    {
      id: "on-y-va", type: "phrase", pos: "phrase", target: "On y va ?",
      gloss: { es: "¿Nos vamos? / ¿Vamos?", en: "Shall we go?" },
      distractors: ["On va y ?", "Y on va ?", "On en va ?"],
      tags: ["spoken", "chunk"],
    },
    {
      id: "cest-moi-qui", type: "sentence", target: "C'est moi qui ai fait le gâteau.",
      gloss: { es: "Fui yo quien hizo el pastel.", en: "I'm the one who made the cake." },
      errors: [{ text: "C'est moi qui a fait le gâteau.", feedback: { es: "Tras «c'est moi qui», el verbo concuerda con «moi»: qui ai fait.", en: "After 'c'est moi qui', the verb agrees with 'moi': qui ai fait." }, ruleId: "fr-g-mise-en-relief" }],
      distractors: ["a", "que", "je"],
      tags: ["emphasis"],
    },
    {
      id: "cest-a-paris-que", type: "sentence", target: "C'est à Paris qu'on s'est rencontrés.",
      gloss: { es: "Fue en París donde nos conocimos.", en: "It was in Paris that we met." },
      errors: [{ text: "C'est à Paris où on s'est rencontrés.", feedback: { es: "Para destacar un complemento: c'est… que (no «où»).", en: "To highlight a complement: c'est… que (not 'où')." }, ruleId: "fr-g-mise-en-relief" }],
      distractors: ["où", "qui", "rencontré"],
      tags: ["emphasis"],
    },
    {
      id: "jen-ai-marre", type: "phrase", pos: "phrase", target: "J'en ai marre !",
      gloss: { es: "¡Estoy harto/a!", en: "I'm fed up!" },
      accept: [{ text: "J'en ai ras le bol !" }],
      distractors: ["J'ai marre !", "Je suis marre !", "J'en suis marre !"],
      note: { es: "Coloquial; más neutro: j'en ai assez.", en: "Informal; more neutral: j'en ai assez." },
      tags: ["spoken", "feelings"],
    },
    {
      id: "ca-vaut-le-coup", type: "phrase", pos: "phrase", target: "Ça vaut le coup.",
      gloss: { es: "Vale la pena.", en: "It's worth it." },
      accept: [{ text: "Ça vaut la peine." }],
      distractors: ["Ça vaut la coupe.", "Ça vaut le cou.", "Ça vaut de coup."],
      tags: ["idioms", "chunk"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-mise-en-relief", type: "pattern", target: "C'est Paul qui… · C'est demain que…",
      gloss: { es: "poner énfasis: c'est… qui / que", en: "emphasis: c'est… qui / que" },
      pattern: {
        rule: {
          es: "Para destacar el sujeto: c'est + sujeto + qui (c'est Marie qui a gagné). Para destacar otro elemento: c'est + elemento + que (c'est demain que je pars). Con pronombres, forma tónica: c'est moi qui, c'est toi que.",
          en: "To highlight the subject: c'est + subject + qui (c'est Marie qui a gagné). To highlight anything else: c'est + element + que (c'est demain que je pars). Pronouns use the stressed form: c'est moi qui, c'est toi que.",
        },
        table: [["sujet", "C'est Léa qui a appelé."], ["objet", "C'est ce film que je veux voir."], ["lieu", "C'est ici que j'habite."], ["temps", "C'est en mai qu'on part."]],
      },
      question: {
        prompt: { es: "Completa: «C'est toi ___ as raison.»", en: "Complete: 'C'est toi ___ as raison.'" },
        options: ["qui", "que", "où", "dont"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-mise-en-relief"], tags: ["grammar", "emphasis"],
    },
    {
      id: "pat-registre-oral", type: "pattern", target: "Je ne sais pas → J'sais pas · Nous allons → On va",
      gloss: { es: "el francés hablado informal", en: "informal spoken French" },
      pattern: {
        rule: {
          es: "Al hablar se omite el «ne» (je sais pas), se usa «on» en vez de «nous» (on y va), las preguntas van con entonación (tu viens ?) y se usa vocabulario familiar (le boulot, la bagnole). Por escrito o en situaciones formales, usa la forma estándar.",
          en: "In speech 'ne' is dropped (je sais pas), 'on' replaces 'nous' (on y va), questions use intonation (tu viens ?) and informal words appear (le boulot, la bagnole). In writing or formal settings, use the standard form.",
        },
        table: [["standard", "familier"], ["Je ne sais pas.", "Je sais pas."], ["Nous partons.", "On part."], ["Est-ce que tu viens ?", "Tu viens ?"], ["le travail, la voiture", "le boulot, la bagnole"]],
      },
      question: {
        prompt: { es: "¿Cuál es la versión formal de «On sait pas»?", en: "What's the formal version of 'On sait pas'?" },
        options: ["Nous ne savons pas.", "Nous savons pas.", "On ne sait.", "Nous pas savons."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-registre-oral"], tags: ["grammar", "spoken", "register"],
    },
    {
      id: "tab-familier", type: "paradigm", target: "familier → courant", spoken: "familier, courant",
      gloss: { es: "palabras coloquiales y su equivalente neutro", en: "slang words and their neutral equivalents" },
      grammar: ["fr-g-registre-oral"],
      paradigm: {
        caption: { es: "Escribe la palabra neutra (con artículo)", en: "Write the neutral word (with its article)" },
        cells: [
          { label: "le boulot", answer: "le travail", ruleId: "fr-g-registre-oral" },
          { label: "la bagnole", answer: "la voiture", ruleId: "fr-g-registre-oral" },
          { label: "le bouquin", answer: "le livre", ruleId: "fr-g-registre-oral" },
          { label: "le mec", answer: "l'homme", accept: ["le garçon"], ruleId: "fr-g-registre-oral" },
          { label: "le fric", answer: "l'argent", ruleId: "fr-g-registre-oral" },
        ],
      },
      tags: ["grammar", "slang", "table"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lapin", type: "listening",
      target: "Tu sais quoi ? Hier soir, Julien m'a posé un lapin. Je l'ai attendu une heure devant le cinéma ! Franchement, j'en ai marre, c'est toujours la même chose avec lui.",
      gloss: {
        es: "¿Sabes qué? Anoche Julien me dejó plantada. ¡Lo esperé una hora frente al cine! La verdad, estoy harta, siempre es lo mismo con él.",
        en: "Guess what? Last night Julien stood me up. I waited for him for an hour outside the cinema! Honestly, I'm fed up, it's always the same with him.",
      },
      question: {
        prompt: { es: "¿Qué pasó anoche?", en: "What happened last night?" },
        options: [
          { es: "Julien no llegó a la cita", en: "Julien didn't turn up" },
          { es: "Julien llegó una hora antes", en: "Julien arrived an hour early" },
          { es: "Vieron una película juntos", en: "They saw a film together" },
          { es: "Julien le regaló un conejo", en: "Julien gave her a rabbit" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "idioms", "spoken"],
    },
    {
      id: "dlg-coup-de-foudre", type: "dialogue", target: "C'était le coup de foudre.", register: "informal",
      gloss: { es: "Fue amor a primera vista.", en: "It was love at first sight." },
      turns: [
        { who: "A", target: "Alors, vous vous êtes rencontrés comment, ton mec et toi ?", gloss: { es: "¿Y cómo se conocieron tu novio y tú?", en: "So how did you and your boyfriend meet?" } },
        { who: "B", target: "C'est à une fête qu'on s'est vus la première fois. C'était le coup de foudre !", gloss: { es: "Nos vimos por primera vez en una fiesta. ¡Fue amor a primera vista!", en: "We first saw each other at a party. It was love at first sight!" } },
        { who: "A", target: "Trop mignon ! Et c'est qui qui a fait le premier pas ?", gloss: { es: "¡Qué tierno! ¿Y quién dio el primer paso?", en: "So cute! And who made the first move?" } },
        { who: "B", target: "C'est moi qui lui ai parlé. Il était trop timide !", gloss: { es: "Fui yo quien le habló. ¡Él era demasiado tímido!", en: "I was the one who talked to him. He was too shy!" } },
      ],
      question: {
        prompt: { es: "¿Quién dio el primer paso?", en: "Who made the first move?" },
        options: [
          { es: "B, porque él era tímido", en: "B, because he was shy" },
          { es: "El novio de B", en: "B's boyfriend" },
          { es: "Un amigo de los dos", en: "A mutual friend" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "idioms"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-verlan", type: "bridge", onlyFor: "es", target: "c'est chelou",
      gloss: { es: "es raro", en: "it's weird (slang)" },
      question: {
        prompt: { es: "En el verlan se invierten las sílabas. «chelou» viene de…", en: "Verlan swaps syllables. 'chelou' comes from…" },
        options: [
          { es: "louche (sospechoso, raro)", en: "louche (shady, weird)" },
          { es: "chou (repollo)", en: "chou (cabbage)" },
          { es: "chaleur (calor)", en: "chaleur (heat)" },
        ],
        answer: 0,
      },
      note: { es: "El verlan invierte palabras (l'envers → verlan): louche → chelou, fou → ouf, femme → meuf." },
      exercises: ["guess", "question"], tags: ["bridge", "slang"],
    },
    {
      id: "br-pieds", type: "bridge", onlyFor: "es", target: "mettre les pieds dans le plat",
      gloss: { es: "meter la pata", en: "to put your foot in it" },
      distractors: ["mettre la patte", "mettre le pied", "mettre la pata"],
      note: { es: "La idea es la misma que en español, pero con los pies dentro del plato." },
      exercises: ["guess", "recall"], tags: ["bridge", "idioms"],
    },
  ]),
};
