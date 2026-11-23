import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u09",
  lang: "fr",
  index: 9,
  cefr: "A1.2",
  title: { target: "Faire les courses", es: "Hacer las compras", en: "Food shopping" },
  canDo: [
    { es: "Puedo comprar comida en el mercado o en el súper y pedir cantidades.", en: "I can buy food at the market or supermarket and ask for quantities." },
    { es: "Puedo preguntar precios y decir que algo es caro o barato.", en: "I can ask about prices and say something is expensive or cheap." },
    { es: "Sé usar el partitivo (du, de la, des) y los verbos en -re como «attendre».", en: "I can use the partitive (du, de la, des) and -re verbs like attendre." },
  ],
  icon: "🧺",
  items: build("fr", 9, "A1.2", [
    { id: "pain", type: "word", pos: "noun", target: "le pain", gender: "m", plural: "les pains", gloss: { es: "el pan", en: "the bread" }, distractors: ["la pain", "le bain", "le pin"], note: { es: "une baguette = la barra clásica; un pain complet = pan integral.", en: "une baguette = the classic loaf; un pain complet = wholemeal bread." }, tags: ["food"] },
    { id: "fromage", type: "word", pos: "noun", target: "le fromage", gender: "m", plural: "les fromages", gloss: { es: "el queso", en: "the cheese" }, distractors: ["la fromage", "le formage", "le fourrage"], tags: ["food"] },
    { id: "viande", type: "word", pos: "noun", target: "la viande", gender: "f", plural: "les viandes", gloss: { es: "la carne", en: "the meat" }, distractors: ["le viande", "la vianda", "la vitrine"], tags: ["food"] },
    { id: "poisson", type: "word", pos: "noun", target: "le poisson", gender: "m", plural: "les poissons", gloss: { es: "el pescado / el pez", en: "the fish" }, distractors: ["le poison", "la poisson", "la boisson"], note: { es: "poisson (ss = «s») ≠ poison (s = «z», veneno).", en: "poisson (ss = 's') ≠ poison (s = 'z')." }, slow: true, tags: ["food", "minimal-pair"] },
    { id: "oeuf", type: "word", pos: "noun", target: "l'œuf", gender: "m", plural: "les œufs", accept: [{ text: "l'oeuf" }], gloss: { es: "el huevo", en: "the egg" }, distractors: ["le œuf", "l'eau", "l'œil"], note: { es: "En plural la f no suena: des œufs ≈ «dezø».", en: "In the plural the f is silent: des œufs ≈ 'day-zuh'." }, tags: ["food"] },
    { id: "pomme", type: "word", pos: "noun", target: "la pomme", gender: "f", plural: "les pommes", gloss: { es: "la manzana", en: "the apple" }, distractors: ["le pomme", "la paume", "la pompe"], note: { es: "la pomme de terre = la papa (patata).", en: "la pomme de terre = the potato." }, tags: ["food", "fruit"] },
    { id: "legumes", type: "word", pos: "noun", target: "le légume", gender: "m", plural: "les légumes", gloss: { es: "la verdura", en: "the vegetable" }, distractors: ["la légume", "le légume sec", "la lagune"], note: { es: "Es masculino: des légumes frais.", en: "It's masculine: des légumes frais." }, tags: ["food"] },
    { id: "marche", type: "word", pos: "noun", target: "le marché", gender: "m", plural: "les marchés", gloss: { es: "el mercado", en: "the market" }, distractors: ["la marché", "la marche", "le marcher"], note: { es: "Ojo: la marche = la caminata; marcher = caminar.", en: "Careful: la marche = walking; marcher = to walk." }, tags: ["shops"] },
    { id: "cher", type: "word", pos: "adj", target: "cher", forms: { m: "cher", f: "chère" }, accept: [{ text: "chère" }], gloss: { es: "caro/a", en: "expensive" }, distractors: ["chair", "char", "chez"], note: { es: "Ce n'est pas cher = es barato. También significa «querido»: chère Anne.", en: "Ce n'est pas cher = it's cheap. Also 'dear': chère Anne." }, tags: ["money"] },
    { id: "kilo", type: "phrase", pos: "phrase", target: "un kilo de tomates", gloss: { es: "un kilo de tomates", en: "a kilo of tomatoes" }, distractors: ["un kilo des tomates", "un kilo du tomates", "un kilo tomates"], note: { es: "Tras una cantidad, solo «de»: un kilo de, une bouteille de.", en: "After a quantity, just 'de': un kilo de, une bouteille de." }, tags: ["quantities"] },
    { id: "bouteille", type: "word", pos: "noun", target: "la bouteille", gender: "f", plural: "les bouteilles", gloss: { es: "la botella", en: "the bottle" }, distractors: ["le bouteille", "la bouille", "la boutique"], tags: ["quantities"] },
    { id: "attendre", type: "word", pos: "verb", target: "attendre", gloss: { es: "esperar", en: "to wait (for)" }, forms: { je: "attends", "il/elle": "attend", nous: "attendons", "ils/elles": "attendent" }, distractors: ["atteindre", "entendre", "étendre"], tags: ["verbs", "present"] },
    { id: "acheter", type: "word", pos: "verb", target: "acheter", gloss: { es: "comprar", en: "to buy" }, forms: { je: "achète", nous: "achetons" }, distractors: ["achever", "cacher", "jeter"], note: { es: "Lleva acento grave con je, tu, il, ils: j'achète.", en: "It takes a grave accent with je, tu, il, ils: j'achète." }, tags: ["verbs", "shopping"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-voudrais-du-fromage", type: "sentence", target: "Je voudrais du fromage et de la salade.",
      gloss: { es: "Quisiera queso y lechuga.", en: "I'd like some cheese and some lettuce." },
      errors: [{ text: "Je voudrais fromage et salade.", feedback: { es: "Con cantidades indefinidas hace falta el partitivo: du fromage, de la salade.", en: "Unspecified amounts need the partitive: du fromage, de la salade." }, ruleId: "fr-g-partitif" }],
      distractors: ["le", "des", "un"],
      tags: ["food", "partitive"],
    },
    {
      id: "pas-de-lait", type: "sentence", target: "Il n'y a plus de lait.",
      gloss: { es: "Ya no hay leche.", en: "There's no milk left." },
      errors: [{ text: "Il n'y a plus du lait.", feedback: { es: "Tras la negación, du/de la/des → de.", en: "After a negative, du/de la/des → de." }, ruleId: "fr-g-negation" }],
      distractors: ["du", "pas", "le"],
      tags: ["food", "negation"],
    },
    {
      id: "une-bouteille-deau", type: "sentence", target: "Une bouteille d'eau, s'il vous plaît.",
      gloss: { es: "Una botella de agua, por favor.", en: "A bottle of water, please." },
      errors: [{ text: "Une bouteille de l'eau, s'il vous plaît.", feedback: { es: "Tras una cantidad, solo de / d': une bouteille d'eau.", en: "After a quantity, just de / d': une bouteille d'eau." }, ruleId: "fr-g-quantites" }],
      distractors: ["de", "du", "un"],
      tags: ["quantities"],
    },
    {
      id: "jattends-le-bus", type: "sentence", target: "J'attends le bus depuis dix minutes.",
      gloss: { es: "Hace diez minutos que espero el autobús.", en: "I've been waiting for the bus for ten minutes." },
      errors: [{ text: "J'attends pour le bus depuis dix minutes.", feedback: { es: "attendre no lleva preposición: attendre le bus.", en: "attendre takes no preposition: attendre le bus (no 'for')." } }],
      distractors: ["attend", "pour", "il y a"],
      note: { es: "«depuis» + presente = hace… que (la acción sigue).", en: "'depuis' + present = have been … for (still going on)." },
      tags: ["verbs", "time"],
    },
    {
      id: "cest-trop-cher", type: "phrase", pos: "phrase", target: "C'est trop cher !",
      gloss: { es: "¡Es demasiado caro!", en: "It's too expensive!" },
      distractors: ["C'est très cher !", "C'est trop chère !", "C'est pas cher !"],
      tags: ["money", "chunk"],
    },
    {
      id: "et-avec-ceci", type: "phrase", pos: "phrase", target: "Et avec ceci ?",
      gloss: { es: "¿Algo más?", en: "Anything else?" },
      accept: [{ text: "Et avec ça ?" }, { text: "Ce sera tout ?" }],
      distractors: ["Et avec cela que ?", "Et après ceci ?", "Et puis ça ?"],
      note: { es: "Lo dice el vendedor; respuesta: «C'est tout, merci».", en: "The shop assistant says it; answer: 'C'est tout, merci'." },
      tags: ["shopping", "chunk"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-partitif", type: "pattern", target: "du pain · de la viande · de l'eau · des pommes",
      gloss: { es: "el partitivo (cantidad indefinida)", en: "the partitive (some)" },
      pattern: {
        rule: {
          es: "Para una cantidad no precisa de algo que no se cuenta, se usa de + artículo: du (m), de la (f), de l' (vocal), des (plural). En español no decimos nada: je mange du pain = como pan.",
          en: "For an unspecified amount French uses de + article: du (m), de la (f), de l' (vowel), des (plural). English says 'some' or nothing: je mange du pain = I eat (some) bread.",
        },
        table: [["masc.", "du fromage"], ["fém.", "de la confiture"], ["voyelle", "de l'huile"], ["pluriel", "des œufs"]],
      },
      question: {
        prompt: { es: "Completa: «Le matin, je bois ___ thé.»", en: "Complete: 'Le matin, je bois ___ thé.'" },
        options: ["du", "de la", "le", "un des"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-partitif"], tags: ["grammar", "partitive"],
    },
    {
      id: "pat-quantites", type: "pattern", target: "un kilo de · beaucoup de · un peu de",
      gloss: { es: "cantidades + de", en: "quantities + de" },
      pattern: {
        rule: {
          es: "Tras una cantidad (un kilo, une bouteille, beaucoup, un peu, trop) va solo «de» o «d'», sin artículo: beaucoup de gens, un peu d'eau.",
          en: "After a quantity (un kilo, une bouteille, beaucoup, un peu, trop) use just 'de' or 'd'', with no article: beaucoup de gens, un peu d'eau.",
        },
        table: [["un kilo", "de pommes"], ["une bouteille", "de vin"], ["beaucoup", "de fromage"], ["un peu", "d'eau"]],
      },
      question: {
        prompt: { es: "Completa: «Il y a beaucoup ___ monde au marché.»", en: "Complete: 'Il y a beaucoup ___ monde au marché.'" },
        options: ["de", "du", "des", "le"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-quantites"], tags: ["grammar", "quantities"],
    },
    {
      id: "tab-attendre", type: "paradigm", target: "attendre — présent", spoken: "attendre",
      gloss: { es: "«attendre» (esperar) en presente", en: "attendre (to wait) — present" },
      grammar: ["fr-g-re"],
      paradigm: {
        caption: { es: "Conjuga «attendre» en presente", en: "Conjugate attendre in the present tense" },
        cells: [
          { label: "j'", answer: "attends", ruleId: "fr-g-re" },
          { label: "tu", answer: "attends", ruleId: "fr-g-re" },
          { label: "il / elle", answer: "attend", ruleId: "fr-g-re" },
          { label: "nous", answer: "attendons", ruleId: "fr-g-re" },
          { label: "vous", answer: "attendez", ruleId: "fr-g-re" },
          { label: "ils / elles", answer: "attendent", ruleId: "fr-g-re" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-re", type: "pattern", target: "je vends, tu vends, il vend…",
      gloss: { es: "verbos en -re (vendre, attendre)", en: "-re verbs (vendre, attendre)" },
      pattern: {
        rule: {
          es: "Quita -re y añade -s, -s, — (nada), -ons, -ez, -ent: je vends, il vend, nous vendons. La d de «il vend» no suena.",
          en: "Drop -re and add -s, -s, — (nothing), -ons, -ez, -ent: je vends, il vend, nous vendons. The d in 'il vend' is silent.",
        },
        table: [["je vends", "nous vendons"], ["tu vends", "vous vendez"], ["il / elle vend", "ils / elles vendent"]],
      },
      question: {
        prompt: { es: "Completa: «Le boulanger ___ du pain.» (vendre)", en: "Complete: 'Le boulanger ___ du pain.' (vendre)" },
        options: ["vend", "vends", "vende", "vendt"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-re"], tags: ["grammar", "present"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-liste", type: "listening",
      target: "Pour ce soir, il faut acheter du poisson, un kilo de pommes de terre, des tomates et une bouteille de vin blanc. On a déjà du fromage.",
      gloss: {
        es: "Para esta noche hay que comprar pescado, un kilo de papas, tomates y una botella de vino blanco. Ya tenemos queso.",
        en: "For tonight we need to buy fish, a kilo of potatoes, some tomatoes and a bottle of white wine. We already have cheese.",
      },
      question: {
        prompt: { es: "¿Qué no hay que comprar?", en: "What don't they need to buy?" },
        options: [
          { es: "Queso", en: "Cheese" },
          { es: "Pescado", en: "Fish" },
          { es: "Vino blanco", en: "White wine" },
          { es: "Tomates", en: "Tomatoes" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "food"],
    },
    {
      id: "dlg-marche", type: "dialogue", target: "C'est tout, merci.", register: "formal",
      gloss: { es: "Es todo, gracias.", en: "That's all, thank you." },
      turns: [
        { who: "A", target: "Bonjour, madame. Qu'est-ce que je vous sers ?", gloss: { es: "Buenos días, señora. ¿Qué le doy?", en: "Hello, madam. What can I get you?" } },
        { who: "B", target: "Un kilo de tomates et six œufs, s'il vous plaît.", gloss: { es: "Un kilo de tomates y seis huevos, por favor.", en: "A kilo of tomatoes and six eggs, please." } },
        { who: "A", target: "Voilà. Et avec ceci ?", gloss: { es: "Aquí tiene. ¿Algo más?", en: "Here you are. Anything else?" } },
        { who: "B", target: "C'est tout, merci. Ça fait combien ?", gloss: { es: "Es todo, gracias. ¿Cuánto es?", en: "That's all, thank you. How much is that?" } },
        { who: "A", target: "Six euros vingt.", gloss: { es: "Seis euros con veinte.", en: "Six euros twenty." } },
      ],
      question: {
        prompt: { es: "¿Cuántos huevos compra?", en: "How many eggs does she buy?" },
        options: [
          { es: "Seis", en: "Six" },
          { es: "Doce", en: "Twelve" },
          { es: "Dos", en: "Two" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "shopping"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-attendre", type: "bridge", onlyFor: "es", target: "attendre",
      gloss: { es: "esperar", en: "to wait" },
      question: {
        prompt: { es: "«J'attends un ami» significa…", en: "'J'attends un ami' means…" },
        options: [
          { es: "Espero a un amigo", en: "I'm waiting for a friend" },
          { es: "Atiendo a un amigo", en: "I'm serving a friend" },
          { es: "Entiendo a un amigo", en: "I understand a friend" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: attendre = esperar. «Atender» a un cliente es «servir» o «s'occuper de»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-confiture", type: "bridge", onlyFor: "es", target: "la confiture",
      gloss: { es: "la mermelada", en: "the jam" },
      question: {
        prompt: { es: "En el desayuno te ofrecen «de la confiture». Es…", en: "At breakfast you're offered 'de la confiture'. It's…" },
        options: [
          { es: "mermelada", en: "jam" },
          { es: "confites, caramelos", en: "sweets" },
          { es: "compota de fruta", en: "stewed fruit" },
        ],
        answer: 0,
      },
      note: { es: "la confiture = la mermelada. Los caramelos son «les bonbons»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "food"],
    },
  ]),
};
