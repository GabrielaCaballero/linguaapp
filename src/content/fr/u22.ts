import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u22",
  lang: "fr",
  index: 22,
  cefr: "B2",
  title: { target: "Art et culture", es: "Arte y cultura", en: "Art and culture" },
  canDo: [
    { es: "Puedo hablar de una película, un libro o una exposición y decir qué me pareció.", en: "I can talk about a film, book or exhibition and say what I thought of it." },
    { es: "Puedo explicar lo que me gusta y lo que me llama la atención de una obra.", en: "I can explain what I like and what strikes me about a work." },
    { es: "Sé usar ce qui / ce que, lequel y dos pronombres juntos (je le lui ai donné).", en: "I can use ce qui / ce que, lequel and two pronouns together (je le lui ai donné)." },
  ],
  icon: "🎭",
  items: build("fr", 22, "B2", [
    { id: "oeuvre", type: "word", pos: "noun", target: "l'œuvre", gender: "f", plural: "les œuvres", accept: [{ text: "l'oeuvre" }], gloss: { es: "la obra (de arte)", en: "the work (of art)" }, distractors: ["le œuvre", "l'ouvrier", "l'ouverture"], note: { es: "une œuvre d'art = una obra de arte; un chef-d'œuvre = una obra maestra.", en: "une œuvre d'art = a work of art; un chef-d'œuvre = a masterpiece." }, tags: ["culture"] },
    { id: "tableau", type: "word", pos: "noun", target: "le tableau", gender: "m", plural: "les tableaux", gloss: { es: "el cuadro, la pintura", en: "the painting" }, distractors: ["la tableau", "la table", "le tablier"], tags: ["culture", "art"] },
    { id: "piece-theatre", type: "word", pos: "noun", target: "la pièce de théâtre", gender: "f", plural: "les pièces de théâtre", gloss: { es: "la obra de teatro", en: "the play" }, accept: [{ text: "la pièce" }], distractors: ["le pièce de théâtre", "la partie de théâtre", "la place de théâtre"], tags: ["culture"] },
    { id: "roman", type: "word", pos: "noun", target: "le roman", gender: "m", plural: "les romans", gloss: { es: "la novela", en: "the novel" }, distractors: ["la roman", "le romain", "le romarin"], tags: ["culture", "books"] },
    { id: "realisateur", type: "word", pos: "noun", target: "le réalisateur", gender: "m", plural: "les réalisateurs", accept: [{ text: "la réalisatrice" }], gloss: { es: "el director (de cine)", en: "the (film) director" }, distractors: ["la réalisateur", "le réalisme", "le rédacteur"], tags: ["culture", "cinema"] },
    { id: "emouvant", type: "word", pos: "adj", target: "émouvant", gloss: { es: "conmovedor/a", en: "moving / touching" }, forms: { m: "émouvant", f: "émouvante" }, accept: [{ text: "émouvante" }], distractors: ["ému", "mouvant", "énervant"], tags: ["culture", "opinion"] },
    { id: "ennuyeux", type: "word", pos: "adj", target: "ennuyeux", gloss: { es: "aburrido/a (que aburre)", en: "boring" }, forms: { m: "ennuyeux", f: "ennuyeuse" }, accept: [{ text: "ennuyeuse" }], distractors: ["ennuyé", "nuageux", "ennui"], note: { es: "Cosa aburrida = ennuyeux; persona aburrida (que se aburre) = je m'ennuie.", en: "A boring thing = ennuyeux; to be bored = s'ennuyer (je m'ennuie)." }, tags: ["culture", "opinion"] },
    { id: "chef-doeuvre", type: "word", pos: "noun", target: "le chef-d'œuvre", gender: "m", plural: "les chefs-d'œuvre", accept: [{ text: "le chef-d'oeuvre" }], gloss: { es: "la obra maestra", en: "the masterpiece" }, distractors: ["la chef-d'œuvre", "le chef d'orchestre", "le chef cuisinier"], tags: ["culture", "art"] },
    { id: "critique", type: "word", pos: "noun", target: "la critique", gender: "f", plural: "les critiques", gloss: { es: "la crítica, la reseña", en: "the review / criticism" }, distractors: ["le cric", "la crique", "la clinique"], note: { es: "le / la critique (persona) = el / la crítico/a.", en: "le / la critique (person) = the critic." }, tags: ["culture"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "ce-qui-me-plait", type: "sentence", target: "Ce qui me plaît dans ce film, c'est la musique.",
      gloss: { es: "Lo que me gusta de esta película es la música.", en: "What I like about this film is the music." },
      errors: [{ text: "Ce que me plaît dans ce film, c'est la musique.", feedback: { es: "«lo que» sujeto del verbo (me plaît) → ce qui.", en: "'what' as the subject of the verb (me plaît) → ce qui." }, ruleId: "fr-g-ce-qui-que" }],
      distractors: ["que", "quoi", "plaire"],
      tags: ["culture", "relatives"],
    },
    {
      id: "ce-que-je-prefere", type: "sentence", target: "Ce que je préfère, ce sont les portraits.",
      gloss: { es: "Lo que más me gusta son los retratos.", en: "What I like best are the portraits." },
      accept: [{ text: "Ce que je préfère, c'est les portraits." }],
      errors: [{ text: "Ce qui je préfère, ce sont les portraits.", feedback: { es: "«lo que» objeto (je préfère quelque chose) → ce que.", en: "'what' as the object (je préfère quelque chose) → ce que." }, ruleId: "fr-g-ce-qui-que" }],
      distractors: ["qui", "quoi", "plus"],
      tags: ["culture", "relatives"],
    },
    {
      id: "la-salle-dans-laquelle", type: "sentence", target: "C'est la salle dans laquelle on a vu l'exposition.",
      gloss: { es: "Es la sala en la que vimos la exposición.", en: "That's the room where we saw the exhibition." },
      accept: [{ text: "C'est la salle où on a vu l'exposition." }],
      errors: [{ text: "C'est la salle dans lequel on a vu l'exposition.", feedback: { es: "lequel concuerda con el sustantivo: la salle → laquelle.", en: "lequel agrees with the noun: la salle → laquelle." }, ruleId: "fr-g-lequel" }],
      distractors: ["lequel", "que", "dont"],
      tags: ["culture", "relatives"],
    },
    {
      id: "les-amis-avec-lesquels", type: "sentence", target: "Ce sont les amis avec lesquels je vais au théâtre.",
      gloss: { es: "Son los amigos con los que voy al teatro.", en: "They're the friends I go to the theatre with." },
      accept: [{ text: "Ce sont les amis avec qui je vais au théâtre." }],
      distractors: ["que", "lesquelles", "dont"],
      note: { es: "Con personas, tras preposición, «qui» también vale: avec qui.", en: "With people, after a preposition, 'qui' also works: avec qui." },
      tags: ["culture", "relatives"],
    },
    {
      id: "je-le-lui-ai-offert", type: "sentence", target: "Le livre ? Je le lui ai offert pour son anniversaire.",
      gloss: { es: "¿El libro? Se lo regalé para su cumpleaños.", en: "The book? I gave it to him for his birthday." },
      errors: [{ text: "Le livre ? Je lui le ai offert pour son anniversaire.", feedback: { es: "Orden: le/la/les antes de lui/leur: je le lui ai offert.", en: "Order: le/la/les before lui/leur: je le lui ai offert." }, ruleId: "fr-g-double-pronoms" }],
      distractors: ["se", "leur", "l'"],
      tags: ["pronouns"],
    },
    {
      id: "tu-me-le-pretes", type: "sentence", target: "Tu me le prêtes ?", register: "informal",
      gloss: { es: "¿Me lo prestas?", en: "Will you lend it to me?" },
      errors: [{ text: "Tu le me prêtes ?", feedback: { es: "me/te/nous/vous van antes de le/la/les: tu me le prêtes.", en: "me/te/nous/vous come before le/la/les: tu me le prêtes." }, ruleId: "fr-g-double-pronoms" }],
      distractors: ["lui", "moi", "la"],
      tags: ["pronouns"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-ce-qui-que", type: "pattern", target: "ce qui m'intéresse · ce que j'aime · ce dont je parle",
      gloss: { es: "ce qui, ce que, ce dont (lo que)", en: "ce qui, ce que, ce dont (what)" },
      pattern: {
        rule: {
          es: "«lo que» tiene tres formas según su función: ce qui (sujeto: ce qui me plaît), ce que (objeto: ce que je veux), ce dont (con verbos con «de»: ce dont j'ai besoin).",
          en: "'what' (= the thing that) has three forms by function: ce qui (subject: ce qui me plaît), ce que (object: ce que je veux), ce dont (with de-verbs: ce dont j'ai besoin).",
        },
        table: [["ce qui + verbe", "Ce qui compte, c'est l'effort."], ["ce que + sujet", "Ce que je dis est vrai."], ["ce dont (de)", "Ce dont il parle m'intéresse."]],
      },
      question: {
        prompt: { es: "Completa: «Dis-moi ___ tu penses.»", en: "Complete: 'Dis-moi ___ tu penses.'" },
        options: ["ce que", "ce qui", "ce dont", "que ce"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-ce-qui-que"], tags: ["grammar", "relatives"],
    },
    {
      id: "pat-lequel", type: "pattern", target: "le stylo avec lequel · la raison pour laquelle",
      gloss: { es: "lequel, laquelle, lesquels, lesquelles", en: "lequel, laquelle, lesquels, lesquelles" },
      pattern: {
        rule: {
          es: "Tras una preposición, para cosas, se usa lequel concordado: lequel (m), laquelle (f), lesquels (m pl), lesquelles (f pl). Con à y de se contrae: auquel, auxquels, duquel, desquels.",
          en: "After a preposition, for things, use lequel agreeing with the noun: lequel (m), laquelle (f), lesquels (m pl), lesquelles (f pl). With à and de it contracts: auquel, auxquels, duquel, desquels.",
        },
        table: [["m.", "le projet sur lequel je travaille"], ["f.", "la raison pour laquelle je pars"], ["à + lequel", "le concours auquel je participe"]],
      },
      question: {
        prompt: { es: "Completa: «Voici les chaises sur ___ on s'assoit.»", en: "Complete: 'Voici les chaises sur ___ on s'assoit.'" },
        options: ["lesquelles", "lesquels", "laquelle", "qui"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-lequel"], tags: ["grammar", "relatives"],
    },
    {
      id: "pat-double-pronoms", type: "pattern", target: "Je te le donne. · Je le lui donne. · Je lui en donne.",
      gloss: { es: "dos pronombres juntos", en: "two object pronouns together" },
      pattern: {
        rule: {
          es: "Orden fijo delante del verbo: me/te/nous/vous → le/la/les → lui/leur → y → en. Así: je te le donne, je le lui donne, je leur en parle.",
          en: "Fixed order before the verb: me/te/nous/vous → le/la/les → lui/leur → y → en. So: je te le donne, je le lui donne, je leur en parle.",
        },
        table: [["1", "me, te, nous, vous"], ["2", "le, la, les"], ["3", "lui, leur"], ["4", "y"], ["5", "en"]],
      },
      question: {
        prompt: { es: "«Tu as donné les clés à Marie ?» — «Oui, je ___ ai données.»", en: "'Tu as donné les clés à Marie ?' — 'Oui, je ___ ai données.'" },
        options: ["les lui", "lui les", "les leur", "la lui"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-double-pronoms"], tags: ["grammar", "pronouns"],
    },
    {
      id: "tab-lequel", type: "paradigm", target: "lequel — formes", spoken: "lequel, laquelle",
      gloss: { es: "las formas de «lequel»", en: "the forms of lequel" },
      grammar: ["fr-g-lequel"],
      paradigm: {
        caption: { es: "Escribe la forma correcta de «lequel»", en: "Write the correct form of lequel" },
        cells: [
          { label: "le livre dans ___", answer: "lequel", ruleId: "fr-g-lequel" },
          { label: "la ville dans ___", answer: "laquelle", ruleId: "fr-g-lequel" },
          { label: "les sujets sur ___", answer: "lesquels", ruleId: "fr-g-lequel" },
          { label: "les idées pour ___", answer: "lesquelles", ruleId: "fr-g-lequel" },
          { label: "le musée (à) ___", answer: "auquel", ruleId: "fr-g-lequel" },
        ],
      },
      tags: ["grammar", "relatives", "table"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-critique", type: "listening",
      target: "Le dernier film de cette réalisatrice est un vrai chef-d'œuvre. Ce qui frappe d'abord, c'est la lumière ; ce que j'ai moins aimé, en revanche, c'est la fin, un peu trop longue.",
      gloss: {
        es: "La última película de esta directora es una verdadera obra maestra. Lo que llama la atención primero es la luz; lo que me gustó menos, en cambio, es el final, un poco largo.",
        en: "This director's latest film is a real masterpiece. What strikes you first is the light; what I liked less, on the other hand, is the ending, which is a bit too long.",
      },
      question: {
        prompt: { es: "¿Qué no le gustó tanto al crítico?", en: "What did the critic like less?" },
        options: [
          { es: "El final, demasiado largo", en: "The ending, which is too long" },
          { es: "La luz", en: "The light" },
          { es: "Los actores", en: "The actors" },
          { es: "La música", en: "The music" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "culture"],
    },
    {
      id: "dlg-expo", type: "dialogue", target: "Ce qui m'a touché le plus, ce sont les couleurs.", register: "informal",
      gloss: { es: "Lo que más me impresionó fueron los colores.", en: "What moved me most were the colours." },
      turns: [
        { who: "A", target: "Alors, l'exposition Monet, ça t'a plu ?", gloss: { es: "¿Y? ¿Te gustó la exposición de Monet?", en: "So, did you like the Monet exhibition?" } },
        { who: "B", target: "Beaucoup ! Ce qui m'a touché le plus, ce sont les couleurs.", gloss: { es: "¡Mucho! Lo que más me impresionó fueron los colores.", en: "Very much! What moved me most were the colours." } },
        { who: "A", target: "Tu as acheté le catalogue ?", gloss: { es: "¿Compraste el catálogo?", en: "Did you buy the catalogue?" } },
        { who: "B", target: "Oui, je te le prête si tu veux.", gloss: { es: "Sí, te lo presto si quieres.", en: "Yes, I'll lend it to you if you like." } },
      ],
      question: {
        prompt: { es: "¿Qué le ofrece B a A?", en: "What does B offer A?" },
        options: [
          { es: "Prestarle el catálogo", en: "To lend her the catalogue" },
          { es: "Ir juntos a la exposición", en: "To go to the exhibition together" },
          { es: "Regalarle un cuadro", en: "To give her a painting" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "culture"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-se-lo", type: "bridge", onlyFor: "es", target: "Je le lui donne.",
      gloss: { es: "Se lo doy (a él o a ella).", en: "I give it to him / her." },
      distractors: ["Je se le donne.", "Je lui le donne.", "Je le se donne."],
      note: { es: "No hay «se lo» en francés: el orden se invierte y «lui» no cambia: je le lui donne, je les leur donne." },
      exercises: ["guess", "recall"], tags: ["bridge", "pronouns"],
    },
    {
      id: "br-librairie", type: "bridge", onlyFor: "es", target: "la librairie",
      gloss: { es: "la librería", en: "the bookshop" },
      question: {
        prompt: { es: "Para comprar una novela vas a…", en: "To buy a novel you go to…" },
        options: ["la librairie", "la bibliothèque", "la papeterie"],
        answer: 0,
      },
      note: { es: "la librairie = la librería (se compra); la bibliothèque = la biblioteca (se presta)." },
      exercises: ["guess", "question"], tags: ["bridge", "books"],
    },
  ]),
};
