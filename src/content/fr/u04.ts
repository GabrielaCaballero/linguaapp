import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u04",
  lang: "fr",
  index: 4,
  cefr: "A1.1",
  title: { target: "Au café", es: "En el café", en: "At the café" },
  canDo: [
    { es: "Puedo pedir algo de comer y de beber en un café.", en: "I can order food and drinks in a café." },
    { es: "Puedo pedir la cuenta y preguntar cuánto es.", en: "I can ask for the bill and how much it is." },
    { es: "Sé usar los artículos le, la, l', les, un, une, des.", en: "I can use the articles le, la, l', les, un, une, des." },
  ],
  icon: "☕",
  items: build("fr", 4, "A1.1", [
    // ── Food & drinks ────────────────────────────────────────
    {
      id: "cafe", type: "word", pos: "noun", target: "le café", gender: "m", plural: "les cafés",
      gloss: { es: "el café", en: "the coffee / the café" },
      distractors: ["la café", "le cafard", "le carré"],
      note: { es: "Un café = un expreso. Con leche: un café crème o un crème.", en: "Un café = an espresso. With milk: un café crème or un crème." },
      tags: ["drinks"],
    },
    {
      id: "the", type: "word", pos: "noun", target: "le thé", gender: "m", plural: "les thés",
      gloss: { es: "el té", en: "the tea" },
      distractors: ["la thé", "le té", "la tête"],
      note: { es: "La h no suena: thé ≈ «té».", en: "The h is silent: thé ≈ 'tay'." },
      tags: ["drinks"],
    },
    {
      id: "eau", type: "word", pos: "noun", target: "l'eau", gender: "f", plural: "les eaux",
      gloss: { es: "el agua", en: "the water" },
      distractors: ["le eau", "l'os", "l'œuf"],
      note: { es: "Es femenino: l'eau minérale, une carafe d'eau (agua de la llave, gratis).", en: "It's feminine: l'eau minérale; une carafe d'eau is free tap water." },
      tags: ["drinks"],
    },
    {
      id: "biere", type: "word", pos: "noun", target: "la bière", gender: "f", plural: "les bières",
      gloss: { es: "la cerveza", en: "the beer" },
      distractors: ["le bière", "la pierre", "la barrière"],
      note: { es: "Una cerveza de barril pequeña: un demi.", en: "A small draught beer: un demi." },
      tags: ["drinks"],
    },
    {
      id: "vin", type: "word", pos: "noun", target: "le vin", gender: "m", plural: "les vins",
      gloss: { es: "el vino", en: "the wine" },
      distractors: ["la vin", "le vent", "vingt"],
      note: { es: "un verre de vin rouge / blanc = una copa de vino tinto / blanco.", en: "un verre de vin rouge / blanc = a glass of red / white wine." },
      tags: ["drinks"],
    },
    {
      id: "jus", type: "word", pos: "noun", target: "le jus d'orange", gender: "m", plural: "les jus d'orange",
      gloss: { es: "el jugo de naranja", en: "the orange juice" },
      distractors: ["la jus d'orange", "le jus de orange", "le jeu d'orange"],
      tags: ["drinks"],
    },
    {
      id: "croissant", type: "word", pos: "noun", target: "le croissant", gender: "m", plural: "les croissants",
      gloss: { es: "la medialuna (el cruasán)", en: "the croissant" },
      distractors: ["la croissant", "le croisement", "le croustillant"],
      tags: ["food"],
    },
    {
      id: "sandwich", type: "word", pos: "noun", target: "le sandwich", gender: "m", plural: "les sandwichs",
      gloss: { es: "el sándwich", en: "the sandwich" },
      distractors: ["la sandwich", "le sandwiche", "la tartine"],
      tags: ["food"],
    },
    {
      id: "addition", type: "word", pos: "noun", target: "l'addition", gender: "f", plural: "les additions",
      gloss: { es: "la cuenta (en un restaurante)", en: "the bill / check" },
      distractors: ["le addition", "la facture", "l'édition"],
      tags: ["café", "money"],
    },
    {
      id: "serveur", type: "word", pos: "noun", target: "le serveur", gender: "m", plural: "les serveurs",
      gloss: { es: "el mesero (camarero)", en: "the waiter" },
      accept: [{ text: "la serveuse" }],
      distractors: ["la serveur", "le service", "le serviteur"],
      note: { es: "La mesera: la serveuse. Para llamar: «S'il vous plaît !» (nunca «garçon»).", en: "Waitress: la serveuse. To call them: 'S'il vous plaît !' (never 'garçon')." },
      tags: ["café"],
    },
    {
      id: "chaud", type: "word", pos: "adj", target: "chaud",
      gloss: { es: "caliente", en: "hot / warm" },
      forms: { m: "chaud", f: "chaude" },
      accept: [{ text: "chaude" }],
      distractors: ["froid", "chat", "chou"],
      note: { es: "Un chocolat chaud = un chocolate caliente.", en: "Un chocolat chaud = a hot chocolate." },
      tags: ["describe", "drinks"],
    },
    {
      id: "froid", type: "word", pos: "adj", target: "froid",
      gloss: { es: "frío/a", en: "cold" },
      forms: { m: "froid", f: "froide" },
      accept: [{ text: "froide" }],
      distractors: ["chaud", "fort", "frais"],
      tags: ["describe", "drinks"],
    },
    // ── Ordering ─────────────────────────────────────────────
    {
      id: "je-voudrais-un-cafe", type: "sentence", target: "Je voudrais un café, s'il vous plaît.", register: "formal",
      gloss: { es: "Quisiera un café, por favor.", en: "I'd like a coffee, please." },
      accept: [{ text: "Un café, s'il vous plaît." }, { text: "Je vais prendre un café, s'il vous plaît." }],
      errors: [{ text: "Je veux un café, s'il vous plaît.", feedback: { es: "«Je veux» suena brusco al pedir; se dice «je voudrais».", en: "'Je veux' (I want) sounds blunt when ordering; say 'je voudrais'." } }],
      distractors: ["veux", "une", "te"],
      tags: ["café", "polite"],
    },
    {
      id: "pour-moi", type: "phrase", pos: "phrase", target: "Pour moi, un thé.",
      gloss: { es: "Para mí, un té.", en: "A tea for me." },
      distractors: ["Pour je, un thé.", "Pour moi, une thé.", "À moi, un thé."],
      tags: ["café", "chunk"],
    },
    {
      id: "laddition-svp", type: "phrase", pos: "phrase", target: "L'addition, s'il vous plaît.", register: "formal",
      gloss: { es: "La cuenta, por favor.", en: "The bill, please." },
      accept: [{ text: "On peut avoir l'addition, s'il vous plaît ?" }],
      distractors: ["La addition, s'il vous plaît.", "L'addition, s'il te plaît.", "Le compte, s'il vous plaît."],
      tags: ["café", "money", "chunk"],
    },
    {
      id: "cest-combien", type: "phrase", pos: "phrase", target: "Je vous dois combien ?", register: "formal",
      gloss: { es: "¿Cuánto le debo?", en: "How much do I owe you?" },
      distractors: ["Je te dois combien ?", "Je vous doit combien ?", "Je vous dis combien ?"],
      tags: ["café", "money", "chunk"],
    },
    {
      id: "sur-place", type: "phrase", pos: "phrase", target: "Sur place ou à emporter ?",
      gloss: { es: "¿Para tomar aquí o para llevar?", en: "Eat in or take away?" },
      distractors: ["Sur place ou emporter ?", "Sur la place ou à emporter ?", "Ici ou à porter ?"],
      tags: ["café", "chunk"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-articles", type: "pattern", target: "le café · la bière · l'eau · les croissants",
      gloss: { es: "artículos definidos e indefinidos", en: "definite and indefinite articles" },
      pattern: {
        rule: {
          es: "Definidos: le (m), la (f), l' delante de vocal o h muda, les (plural). Indefinidos: un (m), une (f), des (plural). El género no siempre coincide con el español: le lait, la mer.",
          en: "Definite: le (m), la (f), l' before a vowel or silent h, les (plural). Indefinite: un (m), une (f), des (plural). Every noun has a gender, so learn the article with it.",
        },
        table: [["", "défini", "indéfini"], ["masc.", "le café", "un café"], ["fém.", "la bière", "une bière"], ["voyelle", "l'eau", "une eau"], ["pluriel", "les cafés", "des cafés"]],
      },
      question: {
        prompt: { es: "Completa: «___ addition, s'il vous plaît.»", en: "Complete: '___ addition, s'il vous plaît.'" },
        options: ["L'", "La", "Le", "Les"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-articles"], tags: ["grammar", "articles"],
    },
    {
      id: "pat-des", type: "pattern", target: "un croissant → des croissants",
      gloss: { es: "el plural indefinido «des»", en: "the plural indefinite 'des'" },
      pattern: {
        rule: {
          es: "En plural, «des» es obligatorio aunque en español no digas nada: Je voudrais des croissants = Quisiera medialunas.",
          en: "In the plural French needs 'des' where English has nothing or 'some': Je voudrais des croissants = I'd like (some) croissants.",
        },
        table: [["singulier", "pluriel"], ["un croissant", "des croissants"], ["une bière", "des bières"]],
      },
      question: {
        prompt: { es: "Completa: «Nous voudrions ___ sandwichs.»", en: "Complete: 'Nous voudrions ___ sandwichs.'" },
        options: ["des", "les", "un", "de les"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-articles"], tags: ["grammar", "articles"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-commande", type: "listening",
      target: "Bonjour ! Alors, pour moi un café crème et un croissant, et pour mon amie un thé et un jus d'orange.",
      gloss: {
        es: "¡Buenos días! Bueno, para mí un café con leche y una medialuna, y para mi amiga un té y un jugo de naranja.",
        en: "Hello! So, a white coffee and a croissant for me, and a tea and an orange juice for my friend.",
      },
      question: {
        prompt: { es: "¿Qué pide la amiga?", en: "What does the friend order?" },
        options: [
          { es: "Un té y un jugo de naranja", en: "A tea and an orange juice" },
          { es: "Un café con leche y una medialuna", en: "A white coffee and a croissant" },
          { es: "Una cerveza", en: "A beer" },
          { es: "Agua y un sándwich", en: "Water and a sandwich" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "café"],
    },
    {
      id: "dlg-cafe", type: "dialogue", target: "Ça fait quatre euros cinquante.", register: "formal",
      gloss: { es: "Son cuatro euros con cincuenta.", en: "That's four euros fifty." },
      turns: [
        { who: "A", target: "Bonjour, monsieur. Vous désirez ?", gloss: { es: "Buenos días, señor. ¿Qué desea?", en: "Hello, sir. What would you like?" } },
        { who: "B", target: "Je voudrais un café et une eau minérale, s'il vous plaît.", gloss: { es: "Quisiera un café y un agua mineral, por favor.", en: "I'd like a coffee and a mineral water, please." } },
        { who: "A", target: "Très bien. Sur place ?", gloss: { es: "Muy bien. ¿Para tomar aquí?", en: "Very good. To have here?" } },
        { who: "B", target: "Oui. Je vous dois combien ?", gloss: { es: "Sí. ¿Cuánto le debo?", en: "Yes. How much do I owe you?" } },
        { who: "A", target: "Ça fait quatre euros cinquante.", gloss: { es: "Son cuatro euros con cincuenta.", en: "That's four euros fifty." } },
      ],
      question: {
        prompt: { es: "¿Cuánto paga el cliente?", en: "How much does the customer pay?" },
        options: ["4,50 €", "14,50 €", "4,15 €", "5,40 €"],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "café", "money"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-carte", type: "bridge", onlyFor: "es", target: "la carte",
      gloss: { es: "el menú (la carta) / la tarjeta / el mapa", en: "the menu / the card / the map" },
      question: {
        prompt: { es: "En un restaurante pides «la carte». Te traen…", en: "In a restaurant you ask for 'la carte'. You get…" },
        options: [
          { es: "la carta con los platos", en: "the menu" },
          { es: "una carta (un mensaje)", en: "a letter" },
          { es: "el menú del día a precio fijo", en: "the set menu" },
        ],
        answer: 0,
      },
      note: { es: "la carte = la carta del restaurante o la tarjeta; «le menu» es el menú a precio fijo. Una carta que se envía es «une lettre»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "café"],
    },
    {
      id: "br-lait", type: "bridge", onlyFor: "es", target: "le lait",
      gloss: { es: "la leche", en: "the milk" },
      distractors: ["la lait", "le lèche", "le laite"],
      note: { es: "Ojo con el género: la leche → le lait (masculino), la sal → le sel, la miel → le miel." },
      exercises: ["guess", "recall"], tags: ["bridge", "gender"],
    },
    {
      id: "br-ion", type: "bridge", onlyFor: "es", target: "l'addition",
      gloss: { es: "la adición / la cuenta", en: "the addition / the bill" },
      distractors: ["l'adición", "l'addicion", "l'adission"],
      note: { es: "-ción → -tion, y todas son femeninas: la nation, la station, l'addition." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
