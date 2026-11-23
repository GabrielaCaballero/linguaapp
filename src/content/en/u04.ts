import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u04",
  lang: "en",
  index: 4,
  cefr: "A1.1",
  title: { target: "At the coffee shop", es: "En la cafetería", en: "At the coffee shop" },
  canDo: [
    { es: "Puedo pedir algo de comer y de beber con cortesía.", en: "I can order food and drinks politely." },
    { es: "Puedo pedir la cuenta y preguntar el precio.", en: "I can ask for the check and the price." },
    { es: "Sé usar «I'd like» / «Can I have» y «this, that, these, those».", en: "I can use 'I'd like' / 'Can I have' and 'this, that, these, those'." },
  ],
  icon: "☕",
  items: build("en", 4, "A1.1", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-water", type: "sound", target: "water",
      gloss: { es: "agua", en: "water" },
      distractors: ["waiter", "watter", "wader"],
      note: { es: "En inglés americano la «t» entre vocales suena casi como una «r» suave: water ≈ «wárer»." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "flap-t"],
    },

    // ── Food and drink ───────────────────────────────────────
    {
      id: "coffee", type: "word", target: "coffee", plural: "coffees",
      gloss: { es: "café (la bebida)", en: "coffee" },
      distractors: ["cafe", "toffee", "copy"],
      note: { es: "«café» con acento es el lugar (cafetería pequeña); la bebida es «coffee»." },
      tags: ["food", "drinks"],
    },
    {
      id: "tea", type: "word", target: "tea",
      gloss: { es: "té", en: "tea" },
      distractors: ["tee", "team", "tear"],
      tags: ["food", "drinks"],
    },
    {
      id: "orange-juice", type: "word", target: "orange juice",
      gloss: { es: "jugo de naranja", en: "orange juice" },
      distractors: ["orange's juice", "juice orange", "orange jam"],
      note: { es: "En inglés el primer sustantivo describe al segundo: orange juice = jugo de naranja." },
      tags: ["food", "drinks"],
    },
    {
      id: "sparkling-water", type: "word", target: "sparkling water",
      gloss: { es: "agua con gas", en: "sparkling water" },
      accept: [{ text: "soda water" }],
      distractors: ["still water", "gas water", "spark water"],
      note: { es: "Sin gas: «still water» o simplemente «water»." },
      tags: ["food", "drinks"],
    },
    {
      id: "sandwich", type: "word", target: "sandwich", plural: "sandwiches",
      gloss: { es: "sándwich", en: "sandwich" },
      distractors: ["sandwitch", "sand", "salad"],
      tags: ["food"],
    },
    {
      id: "muffin", type: "word", target: "muffin", plural: "muffins",
      gloss: { es: "magdalena, panquecito", en: "muffin" },
      distractors: ["muffler", "puffin", "cookie"],
      tags: ["food"],
    },
    {
      id: "sugar", type: "word", target: "sugar",
      gloss: { es: "azúcar", en: "sugar" },
      distractors: ["sugary", "shower", "salt"],
      note: { es: "La «s» de «sugar» suena «sh»: «shúgar»." },
      tags: ["food"],
    },
    {
      id: "milk", type: "word", target: "milk",
      gloss: { es: "leche", en: "milk" },
      distractors: ["mild", "silk", "mill"],
      tags: ["food", "drinks"],
    },
    {
      id: "check", type: "word", target: "check", plural: "checks",
      gloss: { es: "la cuenta (en un restaurante)", en: "the check (restaurant bill)" },
      accept: [{ text: "bill" }],
      distractors: ["account", "cheek", "count"],
      note: { es: "En Estados Unidos se dice «check»; en Reino Unido, «bill»." },
      tags: ["food", "money"],
    },
    {
      id: "small", type: "word", pos: "adj", target: "small",
      gloss: { es: "pequeño/a, chico/a", en: "small" },
      distractors: ["smell", "mall", "tall"],
      note: { es: "En las cafeterías: small, medium, large." },
      tags: ["food", "size"],
    },
    {
      id: "large", type: "word", pos: "adj", target: "large",
      gloss: { es: "grande (tamaño de bebida o ropa)", en: "large" },
      distractors: ["long", "larger", "charge"],
      note: { es: "«large» es «grande», no «largo» (= long)." },
      tags: ["food", "size", "false-friend"],
    },

    // ── Ordering ─────────────────────────────────────────────
    {
      id: "can-i-have", type: "sentence", target: "Can I have a coffee, please?",
      gloss: { es: "¿Me das un café, por favor?", en: "Can I have a coffee, please?" },
      accept: [{ text: "Could I have a coffee, please?" }, { text: "Can I get a coffee, please?" }, { text: "Can I have a coffee please?" }],
      errors: [{ text: "Give me a coffee.", feedback: { es: "Suena brusco en inglés; mejor «Can I have…, please?»." }, ruleId: "en-g-would-like" }],
      distractors: ["Give", "me", "want"],
      grammar: ["en-g-would-like"],
      tags: ["food", "ordering", "polite"],
    },
    {
      id: "id-like-a-tea", type: "sentence", target: "I'd like a tea with milk, please.",
      gloss: { es: "Quisiera un té con leche, por favor.", en: "I'd like a tea with milk, please." },
      accept: [{ text: "I would like a tea with milk, please." }, { text: "I'd like a tea with milk." }, { text: "I'd like tea with milk, please." }],
      errors: [{ text: "I want a tea with milk.", feedback: { es: "«I want» suena exigente al pedir; usa «I'd like» o «Can I have»." }, ruleId: "en-g-would-like" }],
      distractors: ["want", "of", "like"],
      grammar: ["en-g-would-like"],
      annot: { "I'd": { es: "I would: forma cortés de pedir", en: "I would: the polite way to ask" } },
      tags: ["food", "ordering", "polite"],
    },
    {
      id: "for-here-or-to-go", type: "phrase", pos: "phrase", target: "For here or to go?",
      gloss: { es: "¿Para tomar aquí o para llevar?", en: "For here or to go?" },
      distractors: ["Here or go?", "For here or for go?", "To here or to go?"],
      note: { es: "Respuesta: «For here» (aquí) o «To go» (para llevar)." },
      tags: ["food", "ordering", "chunk"],
    },
    {
      id: "anything-else", type: "phrase", pos: "phrase", target: "Anything else?",
      gloss: { es: "¿Algo más?", en: "Anything else?" },
      accept: [{ text: "Something else?" }],
      distractors: ["Nothing else?", "Something more?", "Any more else?"],
      note: { es: "Respuesta típica: «No, that's all, thanks» (No, nada más, gracias)." },
      tags: ["food", "ordering", "chunk"],
    },
    {
      id: "thats-all", type: "phrase", pos: "phrase", target: "That's all, thanks.",
      gloss: { es: "Eso es todo, gracias.", en: "That's all, thanks." },
      accept: [{ text: "That's it, thanks." }, { text: "That is all, thanks." }],
      distractors: ["That's everything all.", "Is all, thanks.", "That all, thanks."],
      tags: ["food", "ordering", "chunk"],
    },
    {
      id: "check-please", type: "sentence", target: "Can we have the check, please?",
      gloss: { es: "¿Nos trae la cuenta, por favor?", en: "Can we have the check, please?" },
      accept: [{ text: "Could we have the check, please?" }, { text: "Can we get the check, please?" }, { text: "Can we have the bill, please?" }],
      distractors: ["account", "us", "a"],
      tags: ["food", "money", "polite"],
    },
    {
      id: "this-muffin", type: "sentence", target: "This muffin is delicious!",
      gloss: { es: "¡Esta magdalena está riquísima!", en: "This muffin is delicious!" },
      errors: [{ text: "These muffin is delicious!", feedback: { es: "Con un solo objeto: this. «these» es para varios." }, ruleId: "en-g-this-that" }],
      distractors: ["These", "are", "That's"],
      grammar: ["en-g-this-that"],
      tags: ["food"],
    },
    {
      id: "those-sandwiches", type: "sentence", target: "How much are those sandwiches?",
      gloss: { es: "¿Cuánto cuestan esos sándwiches (de allá)?", en: "How much are those sandwiches?" },
      errors: [{ text: "How much are that sandwiches?", feedback: { es: "Plural y lejos: those." }, ruleId: "en-g-this-that" }],
      distractors: ["that", "is", "these"],
      grammar: ["en-g-this-that"],
      tags: ["food", "money"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-would-like", type: "pattern", target: "I'd like… · Can I have…?",
      gloss: { es: "pedir con cortesía", en: "ordering politely" },
      pattern: {
        rule: {
          es: "Para pedir, el inglés usa fórmulas suaves: «I'd like…» (quisiera) o «Can I have…?» (¿me das…?), casi siempre con «please». «I want» o «Give me» suenan bruscos.",
          en: "To order, English uses soft formulas: 'I'd like…' or 'Can I have…?', almost always with 'please'. 'I want' or 'Give me' sound rude.",
        },
        table: [["✓ cortés", "✗ brusco"], ["I'd like a coffee, please.", "I want a coffee."], ["Can I have the check, please?", "Give me the check."]],
      },
      question: {
        prompt: { es: "¿Qué dirías en una cafetería?", en: "What would you say in a coffee shop?" },
        options: ["I'd like a large coffee, please.", "I want large coffee.", "Give me a large coffee.", "I like a large coffee."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-would-like"], tags: ["grammar", "polite"],
    },
    {
      id: "pat-this-that", type: "pattern", target: "this · that · these · those",
      gloss: { es: "este, ese, estos, esos", en: "demonstratives" },
      pattern: {
        rule: {
          es: "this (singular) y these (plural) son para lo que está cerca; that (singular) y those (plural) para lo que está lejos. No cambian según el género.",
          en: "this (singular) and these (plural) are for things near you; that (singular) and those (plural) for things farther away.",
        },
        table: [["", "cerca", "lejos"], ["singular", "this", "that"], ["plural", "these", "those"]],
      },
      question: {
        prompt: { es: "Señalas varias galletas lejos de ti: «Can I have two of ___ cookies?»", en: "You point at some cookies far from you: 'Can I have two of ___ cookies?'" },
        options: ["those", "that", "these", "this"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-this-that"], tags: ["grammar", "demonstratives"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-coffee-shop", type: "dialogue", target: "A medium latte, please.",
      gloss: { es: "Un latte mediano, por favor.", en: "A medium latte, please." },
      turns: [
        { who: "A", target: "Hi! What can I get you?", gloss: { es: "¡Hola! ¿Qué te sirvo?", en: "Hi! What can I get you?" } },
        { who: "B", target: "Hi. Can I have a medium latte, please?", gloss: { es: "Hola. ¿Me das un latte mediano, por favor?", en: "Hi. Can I have a medium latte, please?" } },
        { who: "A", target: "Sure. For here or to go?", gloss: { es: "Claro. ¿Para tomar aquí o para llevar?", en: "Sure. For here or to go?" } },
        { who: "B", target: "To go, please. And a blueberry muffin.", gloss: { es: "Para llevar, por favor. Y una magdalena de arándanos.", en: "To go, please. And a blueberry muffin." } },
        { who: "A", target: "Anything else?", gloss: { es: "¿Algo más?", en: "Anything else?" } },
        { who: "B", target: "No, that's all, thanks.", gloss: { es: "No, eso es todo, gracias.", en: "No, that's all, thanks." } },
      ],
      question: {
        prompt: { es: "¿Dónde se va a tomar el café?", en: "Where will the customer have the coffee?" },
        options: [
          { es: "Se lo lleva", en: "To go" },
          { es: "En la cafetería", en: "In the coffee shop" },
          { es: "No pide café", en: "No coffee is ordered" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "food", "ordering"],
    },
    {
      id: "lis-order", type: "listening", target: "I'd like a small black coffee and a cheese sandwich, please. No sugar, thanks.",
      gloss: { es: "Quisiera un café negro chico y un sándwich de queso, por favor. Sin azúcar, gracias.", en: "I'd like a small black coffee and a cheese sandwich, please. No sugar, thanks." },
      question: {
        prompt: { es: "¿Cómo quiere el café?", en: "How does the customer want the coffee?" },
        options: [
          { es: "Chico, negro y sin azúcar", en: "Small, black, no sugar" },
          { es: "Grande y con leche", en: "Large, with milk" },
          { es: "Chico y con azúcar", en: "Small, with sugar" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "food"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-large", type: "bridge", onlyFor: "es", target: "large",
      gloss: { es: "grande", en: "large (big)" },
      question: {
        prompt: { es: "«A large coffee» es un café…", en: "'A large coffee' is a coffee that is…" },
        options: [
          { es: "grande", en: "big" },
          { es: "largo (con más agua)", en: "long (with more water)" },
          { es: "caro", en: "expensive" },
        ],
        answer: 0,
      },
      note: { es: "large = grande; «largo» en inglés es «long»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "food"],
    },
  ]),
};
