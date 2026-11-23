import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u09",
  lang: "en",
  index: 9,
  cefr: "A1.2",
  title: { target: "Grocery shopping", es: "Hacer las compras", en: "Grocery shopping" },
  canDo: [
    { es: "Puedo hacer la lista del súper y comprar comida en una tienda.", en: "I can make a grocery list and buy food in a store." },
    { es: "Puedo pedir cantidades y preguntar si hay algo.", en: "I can ask for quantities and ask if something is available." },
    { es: "Sé distinguir lo contable de lo incontable y usar some / any y how much / how many.", en: "I can tell countable from uncountable nouns and use some / any and how much / how many." },
  ],
  icon: "🛒",
  items: build("en", 9, "A1.2", [
    // ── Food ─────────────────────────────────────────────────
    {
      id: "bread", type: "word", target: "bread",
      gloss: { es: "pan", en: "bread" },
      distractors: ["bred", "breath", "breads"],
      note: { es: "Es incontable: some bread, a loaf of bread (una barra de pan), nunca «a bread»." },
      tags: ["food", "uncountable"],
    },
    {
      id: "rice", type: "word", target: "rice",
      gloss: { es: "arroz", en: "rice" },
      distractors: ["rise", "race", "ice"],
      tags: ["food", "uncountable"],
    },
    {
      id: "eggs", type: "word", target: "eggs",
      gloss: { es: "huevos", en: "eggs" },
      distractors: ["legs", "ages", "eggs's"],
      note: { es: "Se venden por docena: a dozen eggs." },
      tags: ["food"],
    },
    {
      id: "chicken", type: "word", target: "chicken",
      gloss: { es: "pollo", en: "chicken" },
      distractors: ["kitchen", "chick", "chicken's"],
      tags: ["food"],
    },
    {
      id: "vegetables", type: "word", target: "vegetables",
      gloss: { es: "verduras", en: "vegetables" },
      accept: [{ text: "veggies" }],
      distractors: ["vegetarians", "vegetals", "fruits"],
      note: { es: "Se pronuncia en tres sílabas: «VÉCH-ta-bols»." },
      tags: ["food"],
    },
    {
      id: "apples", type: "word", target: "apples",
      gloss: { es: "manzanas", en: "apples" },
      distractors: ["apps", "applies", "maples"],
      tags: ["food", "fruit"],
    },
    {
      id: "cheese", type: "word", target: "cheese",
      gloss: { es: "queso", en: "cheese" },
      distractors: ["chase", "choose", "cheap"],
      tags: ["food", "uncountable"],
    },
    {
      id: "a-bottle-of", type: "phrase", pos: "phrase", target: "a bottle of olive oil",
      gloss: { es: "una botella de aceite de oliva", en: "a bottle of olive oil" },
      distractors: ["a bottle olive oil", "an olive oil bottle of", "a bottle of olive's oil"],
      tags: ["food", "quantities"],
    },
    {
      id: "a-pound-of", type: "phrase", pos: "phrase", target: "a pound of ground beef",
      gloss: { es: "una libra (casi medio kilo) de carne molida", en: "a pound of ground beef" },
      distractors: ["a pound ground beef", "a pound of beef ground", "a pond of ground beef"],
      note: { es: "En Estados Unidos se pesa en libras: one pound ≈ 450 gramos." },
      tags: ["food", "quantities"],
    },
    {
      id: "cheap", type: "word", pos: "adj", target: "cheap",
      gloss: { es: "barato/a", en: "cheap" },
      distractors: ["chip", "cheep", "expensive"],
      tags: ["shopping", "money"],
    },
    {
      id: "expensive", type: "word", pos: "adj", target: "expensive",
      gloss: { es: "caro/a", en: "expensive" },
      distractors: ["extensive", "expansive", "cheap"],
      tags: ["shopping", "money"],
    },
    {
      id: "cash", type: "word", target: "cash",
      gloss: { es: "efectivo", en: "cash" },
      distractors: ["catch", "cast", "crash"],
      note: { es: "Pagar en efectivo = pay in cash; con tarjeta = pay by card." },
      tags: ["shopping", "money"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "do-you-have-any", type: "phrase", pos: "phrase", target: "Do you have any avocados?",
      gloss: { es: "¿Tienen aguacates (paltas)?", en: "Do you have any avocados?" },
      accept: [{ text: "Have you got any avocados?" }],
      distractors: ["Do you have some avocado?", "Have you avocados?", "Are there avocados have?"],
      grammar: ["en-g-some-any"],
      tags: ["shopping", "chunk"],
    },
    {
      id: "where-can-i-find", type: "phrase", pos: "phrase", target: "Where can I find the milk?",
      gloss: { es: "¿Dónde encuentro la leche?", en: "Where can I find the milk?" },
      accept: [{ text: "Where's the milk?" }, { text: "Where is the milk?" }],
      distractors: ["Where I can find the milk?", "Where can I found the milk?", "Where can find I the milk?"],
      tags: ["shopping", "chunk"],
    },
    {
      id: "paper-or-plastic", type: "phrase", pos: "phrase", target: "Do you need a bag?",
      gloss: { es: "¿Necesitas una bolsa?", en: "Do you need a bag?" },
      distractors: ["Do you need a sack?", "Do you need bag?", "Do you need of a bag?"],
      tags: ["shopping", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "we-need-some-milk", type: "sentence", target: "We need some milk and some eggs.",
      gloss: { es: "Necesitamos leche y huevos.", en: "We need some milk and some eggs." },
      accept: [{ text: "We need milk and eggs." }, { text: "We need some milk and eggs." }],
      errors: [{ text: "We need any milk and any eggs.", feedback: { es: "En frases afirmativas se usa «some»; «any» es para preguntas y negaciones." }, ruleId: "en-g-some-any" }],
      distractors: ["any", "a", "milks"],
      grammar: ["en-g-some-any"],
      note: { es: "En español no ponemos nada; en inglés «some» es muy frecuente." },
      tags: ["shopping", "food"],
    },
    {
      id: "there-isnt-any-rice", type: "sentence", target: "There isn't any rice left.",
      gloss: { es: "No queda arroz.", en: "There isn't any rice left." },
      accept: [{ text: "There is not any rice left." }, { text: "There's no rice left." }],
      errors: [{ text: "There aren't any rice left.", feedback: { es: "«rice» es incontable: va con singular (there isn't)." }, ruleId: "en-g-some-any" }],
      distractors: ["some", "aren't", "rices"],
      grammar: ["en-g-some-any"],
      tags: ["shopping", "food", "negation"],
    },
    {
      id: "how-many-apples", type: "sentence", target: "How many apples do you want?",
      gloss: { es: "¿Cuántas manzanas quieres?", en: "How many apples do you want?" },
      accept: [{ text: "How many apples would you like?" }],
      errors: [{ text: "How much apples do you want?", feedback: { es: "Con cosas que se cuentan: how many." }, ruleId: "en-g-how-much-many" }],
      distractors: ["much", "does", "apple"],
      grammar: ["en-g-how-much-many"],
      tags: ["shopping", "quantities"],
    },
    {
      id: "how-much-cheese", type: "sentence", target: "How much cheese do we need?",
      gloss: { es: "¿Cuánto queso necesitamos?", en: "How much cheese do we need?" },
      errors: [{ text: "How many cheese do we need?", feedback: { es: "«cheese» es incontable: how much." }, ruleId: "en-g-how-much-many" }],
      distractors: ["many", "cheeses", "does"],
      grammar: ["en-g-how-much-many"],
      tags: ["shopping", "quantities"],
    },
    {
      id: "a-lot-of-vegetables", type: "sentence", target: "I eat a lot of vegetables but not much meat.",
      gloss: { es: "Como muchas verduras pero poca carne.", en: "I eat a lot of vegetables but not much meat." },
      accept: [{ text: "I eat lots of vegetables but not much meat." }],
      errors: [{ text: "I eat many vegetables but not many meat.", feedback: { es: "«meat» es incontable: not much meat. En afirmativo suena más natural «a lot of»." }, ruleId: "en-g-how-much-many" }],
      distractors: ["many", "meats", "lot"],
      grammar: ["en-g-how-much-many"],
      tags: ["food", "quantities"],
    },
    {
      id: "pay-by-card", type: "sentence", target: "Can I pay by card?",
      gloss: { es: "¿Puedo pagar con tarjeta?", en: "Can I pay by card?" },
      accept: [{ text: "Can I pay with a card?" }, { text: "Can I pay with card?" }, { text: "Do you take cards?" }],
      errors: [{ text: "Can I pay in card?", feedback: { es: "Con tarjeta se dice «pay by card» o «pay with a card»; «in» va con «cash»: pay in cash." } }],
      distractors: ["for", "in", "tarjet"],
      tags: ["shopping", "money"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-some-any", type: "pattern", target: "some · any",
      gloss: { es: "some y any (algo de, algunos)", en: "some and any" },
      pattern: {
        rule: {
          es: "«some» va en frases afirmativas y en ofrecimientos («Would you like some coffee?»); «any» va en preguntas y negaciones. Los dos sirven con plurales (some eggs) e incontables (some milk).",
          en: "'some' is for positive sentences and offers ('Would you like some coffee?'); 'any' is for questions and negatives. Both work with plurals (some eggs) and uncountables (some milk).",
        },
        table: [["+", "We have some bread."], ["−", "We don't have any bread."], ["?", "Do we have any bread?"], ["oferta", "Would you like some bread?"]],
      },
      question: {
        prompt: { es: "Completa: «Sorry, we don't have ___ tomatoes today.»", en: "Complete: 'Sorry, we don't have ___ tomatoes today.'" },
        options: ["any", "some", "a", "many of"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-some-any"], tags: ["grammar", "quantities"],
    },
    {
      id: "pat-much-many", type: "pattern", target: "how much? · how many? · a lot of",
      gloss: { es: "contables e incontables: much, many, a lot of", en: "countable and uncountable: much, many, a lot of" },
      pattern: {
        rule: {
          es: "Con lo que se cuenta (apples, eggs) se usa «many»; con lo que no se cuenta (milk, rice, money) se usa «much». En frases afirmativas lo más natural es «a lot of» para los dos.",
          en: "Use 'many' with countable nouns (apples, eggs) and 'much' with uncountable ones (milk, rice, money). In positive sentences, 'a lot of' is most natural for both.",
        },
        table: [["contable", "incontable"], ["How many eggs?", "How much milk?"], ["not many eggs", "not much milk"], ["a lot of eggs", "a lot of milk"]],
      },
      question: {
        prompt: { es: "Completa: «How ___ money do you have?»", en: "Complete: 'How ___ money do you have?'" },
        options: ["much", "many", "lot", "any"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-how-much-many"], tags: ["grammar", "quantities"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-grocery-store", type: "dialogue", target: "They're in aisle five.",
      gloss: { es: "Están en el pasillo cinco.", en: "They're in aisle five." },
      turns: [
        { who: "A", target: "Excuse me, do you have any tortillas?", gloss: { es: "Disculpe, ¿tienen tortillas?", en: "Excuse me, do you have any tortillas?" } },
        { who: "B", target: "Yes, they're in aisle five, next to the bread.", gloss: { es: "Sí, están en el pasillo cinco, al lado del pan.", en: "Yes, they're in aisle five, next to the bread." } },
        { who: "A", target: "Great. And how much are the avocados?", gloss: { es: "Perfecto. ¿Y cuánto cuestan los aguacates?", en: "Great. And how much are the avocados?" } },
        { who: "B", target: "They're on sale today: three for two dollars.", gloss: { es: "Hoy están en oferta: tres por dos dólares.", en: "They're on sale today: three for two dollars." } },
      ],
      question: {
        prompt: { es: "¿Dónde están las tortillas?", en: "Where are the tortillas?" },
        options: [
          { es: "En el pasillo cinco, al lado del pan", en: "In aisle five, next to the bread" },
          { es: "Junto a los aguacates", en: "Next to the avocados" },
          { es: "No tienen tortillas", en: "They don't have any" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "shopping"],
    },
    {
      id: "lis-shopping-list", type: "listening", target: "Okay, for the party we need two bottles of soda, a lot of chips, some cheese and a dozen eggs. We don't need any bread.",
      gloss: { es: "Bueno, para la fiesta necesitamos dos botellas de refresco, muchas papitas, queso y una docena de huevos. No necesitamos pan.", en: "Okay, for the party we need two bottles of soda, a lot of chips, some cheese and a dozen eggs. We don't need any bread." },
      question: {
        prompt: { es: "¿Qué NO necesitan comprar?", en: "What do they NOT need to buy?" },
        options: [
          { es: "Pan", en: "Bread" },
          { es: "Huevos", en: "Eggs" },
          { es: "Queso", en: "Cheese" },
          { es: "Refresco", en: "Soda" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "shopping", "food"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-carpet", type: "bridge", onlyFor: "es", target: "receipt",
      gloss: { es: "el recibo, el ticket de compra", en: "receipt" },
      question: {
        prompt: { es: "En la caja te preguntan «Do you want your receipt?». Te ofrecen…", en: "At the checkout: 'Do you want your receipt?' They're offering…" },
        options: [
          { es: "el ticket de compra", en: "the proof of purchase" },
          { es: "una receta de cocina", en: "a cooking recipe" },
          { es: "una receta médica", en: "a doctor's prescription" },
        ],
        answer: 0,
      },
      note: { es: "receipt (la «p» no suena) = recibo; una receta de cocina es «recipe» y la del médico, «prescription»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "shopping"],
    },
    {
      id: "br-uncountable", type: "bridge", onlyFor: "es", target: "some advice",
      gloss: { es: "unos consejos", en: "some advice" },
      question: {
        prompt: { es: "¿Cómo se dice «¿Me das un consejo?»?", en: "Which is correct?" },
        options: ["Can you give me some advice?", "Can you give me an advice?", "Can you give me some advices?"],
        answer: 0,
      },
      note: { es: "Algunas palabras son contables en español pero incontables en inglés: advice, information, news, furniture." },
      exercises: ["guess", "question"], tags: ["bridge", "uncountable"],
    },
  ]),
};
