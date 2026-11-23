import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u03",
  lang: "en",
  index: 3,
  cefr: "A1.1",
  title: { target: "Numbers", es: "Números", en: "Numbers" },
  canDo: [
    { es: "Puedo decir y entender números, precios y números de teléfono.", en: "I can say and understand numbers, prices and phone numbers." },
    { es: "Puedo decir mi edad y deletrear mi nombre.", en: "I can say my age and spell my name." },
    { es: "Sé formar el plural de los sustantivos, también los irregulares.", en: "I can make nouns plural, including irregular ones." },
  ],
  icon: "🔢",
  items: build("en", 3, "A1.1", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-thirteen", type: "sound", target: "thirteen", pair: ["thirteen", "thirty"], slow: true,
      gloss: { es: "trece", en: "thirteen" },
      distractors: ["thirty", "tirteen", "thirdteen"],
      note: { es: "En «-teen» el acento cae al final y la «ee» es larga (thir-TEEN); en «-ty» cae al principio (THIR-ty)." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "numbers", "stress"],
    },

    // ── Numbers ──────────────────────────────────────────────
    {
      id: "zero", type: "word", pos: "num", target: "zero",
      gloss: { es: "cero", en: "zero" },
      accept: [{ text: "oh" }],
      distractors: ["hero", "zoo", "seven"],
      note: { es: "En números de teléfono muchas personas dicen «oh» en lugar de «zero»." },
      tags: ["numbers"],
    },
    {
      id: "three", type: "word", pos: "num", target: "three",
      gloss: { es: "tres", en: "three" },
      distractors: ["tree", "free", "third"],
      note: { es: "«three» (tres) lleva «th»; «tree» es «árbol»." },
      tags: ["numbers"],
    },
    {
      id: "eight", type: "word", pos: "num", target: "eight",
      gloss: { es: "ocho", en: "eight" },
      distractors: ["eighth", "height", "ate"],
      note: { es: "Se pronuncia como «eit»: la «gh» no suena." },
      tags: ["numbers"],
    },
    {
      id: "twelve", type: "word", pos: "num", target: "twelve",
      gloss: { es: "doce", en: "twelve" },
      distractors: ["twenty", "eleven", "twelfth"],
      tags: ["numbers"],
    },
    {
      id: "fifteen", type: "word", pos: "num", target: "fifteen",
      gloss: { es: "quince", en: "fifteen" },
      distractors: ["fiveteen", "fifty", "fourteen"],
      errors: [{ text: "fiveteen", feedback: { es: "five → fif-: fifteen, fifty." } }],
      tags: ["numbers"],
    },
    {
      id: "twenty", type: "word", pos: "num", target: "twenty",
      gloss: { es: "veinte", en: "twenty" },
      distractors: ["twelve", "twenteen", "plenty"],
      tags: ["numbers"],
    },
    {
      id: "forty", type: "word", pos: "num", target: "forty",
      gloss: { es: "cuarenta", en: "forty" },
      distractors: ["fourty", "fourteen", "fifty"],
      errors: [{ text: "fourty", feedback: { es: "four lleva «u», pero forty no: forty." } }],
      tags: ["numbers"],
    },
    {
      id: "hundred", type: "word", pos: "num", target: "a hundred",
      gloss: { es: "cien", en: "a hundred" },
      accept: [{ text: "one hundred" }],
      distractors: ["a thousand", "hundreds", "a hungry"],
      note: { es: "Se dice «a hundred» o «one hundred», nunca solo «hundred»; 120 = a hundred and twenty." },
      tags: ["numbers"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "how-old-are-you", type: "phrase", pos: "phrase", target: "How old are you?",
      gloss: { es: "¿Cuántos años tienes?", en: "How old are you?" },
      distractors: ["How many years do you have?", "How are you?", "How old do you have?"],
      errors: [{ text: "How many years do you have?", feedback: { es: "La edad va con «be»: How old are you? (¿qué tan viejo eres?)." }, ruleId: "en-g-be-age" }],
      grammar: ["en-g-be-age"],
      tags: ["numbers", "age", "chunk"],
    },
    {
      id: "how-much-is-it", type: "phrase", pos: "phrase", target: "How much is it?",
      gloss: { es: "¿Cuánto cuesta?", en: "How much is it?" },
      accept: [{ text: "How much does it cost?" }, { text: "How much is this?" }],
      distractors: ["How many is it?", "How much it is?", "What costs it?"],
      tags: ["numbers", "shopping", "chunk"],
    },
    {
      id: "phone-number", type: "phrase", pos: "phrase", target: "What's your phone number?",
      gloss: { es: "¿Cuál es tu número de teléfono?", en: "What's your phone number?" },
      accept: [{ text: "What is your phone number?" }, { text: "What's your number?" }],
      distractors: ["Which is your phone number?", "How is your phone number?", "What's your phone?"],
      errors: [{ text: "Which is your phone number?", feedback: { es: "«¿Cuál es…?» con un dato se pregunta con «What»: What's your phone number?" } }],
      tags: ["numbers", "chunk"],
    },
    {
      id: "can-you-spell-that", type: "phrase", pos: "phrase", target: "Can you spell that, please?",
      gloss: { es: "¿Me lo deletreas, por favor?", en: "Can you spell that, please?" },
      accept: [{ text: "Could you spell that, please?" }, { text: "How do you spell that?" }],
      distractors: ["Can you say that, please?", "Can you spell, please?", "Can you speak that, please?"],
      tags: ["spelling", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "im-thirty-two", type: "sentence", target: "I'm thirty-two years old.",
      gloss: { es: "Tengo treinta y dos años.", en: "I'm thirty-two years old." },
      accept: [{ text: "I am thirty-two years old." }, { text: "I'm thirty-two." }, { text: "I'm thirty two years old." }, { text: "I am thirty-two." }],
      errors: [
        { text: "I have thirty-two years.", feedback: { es: "La edad no se «tiene»: se «es». I'm thirty-two (years old)." }, ruleId: "en-g-be-age" },
        { text: "I'm thirty-two years.", feedback: { es: "O dices solo el número (I'm thirty-two) o añades «old»: thirty-two years old." }, ruleId: "en-g-be-age" },
      ],
      distractors: ["have", "years", "age"],
      grammar: ["en-g-be-age"],
      tags: ["numbers", "age"],
    },
    {
      id: "my-daughter-is-six", type: "sentence", target: "My daughter is six.",
      gloss: { es: "Mi hija tiene seis años.", en: "My daughter is six." },
      accept: [{ text: "My daughter is six years old." }],
      errors: [{ text: "My daughter has six years.", feedback: { es: "En inglés: My daughter is six." }, ruleId: "en-g-be-age" }],
      distractors: ["has", "sixth", "are"],
      grammar: ["en-g-be-age"],
      tags: ["numbers", "age", "family"],
    },
    {
      id: "its-five-dollars", type: "sentence", target: "It's five dollars and fifty cents.",
      gloss: { es: "Son cinco dólares con cincuenta centavos.", en: "It's five dollars and fifty cents." },
      accept: [{ text: "It is five dollars and fifty cents." }, { text: "It's five fifty." }],
      distractors: ["They", "dollar", "with"],
      note: { es: "Al hablar, los precios se acortan: $5.50 = «five fifty»." },
      tags: ["numbers", "shopping", "money"],
    },
    {
      id: "two-children", type: "sentence", target: "I have two children.",
      gloss: { es: "Tengo dos hijos.", en: "I have two children." },
      accept: [{ text: "I've got two children." }, { text: "I have two kids." }],
      errors: [{ text: "I have two childs.", feedback: { es: "child tiene plural irregular: children." }, ruleId: "en-g-plurals" }],
      distractors: ["childs", "child", "has"],
      grammar: ["en-g-plurals"],
      tags: ["numbers", "family", "plural"],
    },
    {
      id: "three-buses", type: "sentence", target: "There are three buses and two taxis.",
      gloss: { es: "Hay tres autobuses y dos taxis.", en: "There are three buses and two taxis." },
      errors: [{ text: "There are three bus and two taxi.", feedback: { es: "Después de un número mayor que uno, el sustantivo va en plural: buses, taxis." }, ruleId: "en-g-plurals" }],
      distractors: ["is", "bus", "taxies"],
      grammar: ["en-g-plurals"],
      tags: ["numbers", "plural", "transport"],
    },
    {
      id: "spell-name", type: "sentence", target: "My last name is Ruiz: R-U-I-Z.",
      spoken: "My last name is Ruiz: R, U, I, Z.",
      gloss: { es: "Mi apellido es Ruiz: R-U-I-Z.", en: "My last name is Ruiz: R-U-I-Z." },
      accept: [{ text: "My surname is Ruiz: R-U-I-Z." }, { text: "My last name is Ruiz, R-U-I-Z." }],
      distractors: ["first", "surname's", "is"],
      note: { es: "Ojo con las letras: «i» se dice «ai», «e» se dice «i», «a» se dice «ei»." },
      tags: ["spelling"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-age", type: "pattern", target: "I'm 30 · She's 6 years old", spoken: "I'm thirty. She's six years old.",
      gloss: { es: "la edad con «be»", en: "age with 'be'" },
      pattern: {
        rule: {
          es: "En inglés la edad se dice con «be», no con «have»: I'm thirty (tengo treinta años). «years old» es opcional, pero si lo usas, van las dos palabras juntas.",
          en: "English uses 'be' for age, not 'have': I'm thirty. 'years old' is optional, but if you use it, both words go together.",
        },
        table: [["✓", "✗"], ["I'm thirty.", "I have thirty years."], ["She's six years old.", "She's six years."], ["How old are you?", "How many years do you have?"]],
      },
      question: {
        prompt: { es: "¿Cómo dices «Mi hermano tiene veinte años»?", en: "How do you say your brother's age (twenty)?" },
        options: ["My brother is twenty.", "My brother has twenty years.", "My brother has twenty.", "My brother is twenty years."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-be-age"], tags: ["grammar", "age"],
    },
    {
      id: "pat-plurals", type: "pattern", target: "book → books · bus → buses · city → cities",
      gloss: { es: "el plural de los sustantivos", en: "plural nouns" },
      pattern: {
        rule: {
          es: "La regla general es añadir -s. Después de -s, -sh, -ch, -x se añade -es; consonante + y cambia a -ies. Algunos plurales son irregulares: man → men, child → children, person → people.",
          en: "Add -s. After -s, -sh, -ch, -x add -es; consonant + y becomes -ies. Some plurals are irregular: man → men, child → children, person → people.",
        },
        table: [["+ s", "+ es", "y → ies", "irregular"], ["books", "buses", "cities", "men"], ["cars", "watches", "babies", "people"]],
      },
      question: {
        prompt: { es: "El plural de «person» es…", en: "The plural of 'person' is…" },
        options: ["people", "persons", "peoples", "persones"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-plurals"], tags: ["grammar", "plural"],
    },
    {
      id: "tab-plurals", type: "paradigm", target: "plurals", spoken: "plurals",
      gloss: { es: "plurales regulares e irregulares", en: "regular and irregular plurals" },
      grammar: ["en-g-plurals"],
      paradigm: {
        caption: { es: "Escribe el plural", en: "Write the plural" },
        cells: [
          { label: "book", answer: "books", ruleId: "en-g-plurals" },
          { label: "watch", answer: "watches", ruleId: "en-g-plurals" },
          { label: "city", answer: "cities", ruleId: "en-g-plurals" },
          { label: "man", answer: "men", ruleId: "en-g-plurals" },
          { label: "child", answer: "children", ruleId: "en-g-plurals" },
          { label: "person", answer: "people", ruleId: "en-g-plurals" },
        ],
      },
      tags: ["grammar", "plural", "table"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-spell", type: "dialogue", target: "How do you spell that?",
      gloss: { es: "¿Cómo se escribe?", en: "How do you spell that?" },
      turns: [
        { who: "A", target: "What's your last name?", gloss: { es: "¿Cuál es tu apellido?", en: "What's your last name?" } },
        { who: "B", target: "It's Vega.", gloss: { es: "Vega.", en: "It's Vega." } },
        { who: "A", target: "How do you spell that?", gloss: { es: "¿Cómo se escribe?", en: "How do you spell that?" } },
        { who: "B", target: "V-E-G-A.", spoken: "V, E, G, A.", gloss: { es: "V-E-G-A.", en: "V-E-G-A." } },
        { who: "A", target: "Thanks. And your phone number?", gloss: { es: "Gracias. ¿Y tu número de teléfono?", en: "Thanks. And your phone number?" } },
        { who: "B", target: "It's three one two, five five five, zero eight four.", gloss: { es: "Es el tres uno dos, cinco cinco cinco, cero ocho cuatro.", en: "It's three one two, five five five, zero eight four." } },
      ],
      question: {
        prompt: { es: "¿Qué le piden primero?", en: "What does A ask for first?" },
        options: [
          { es: "El apellido", en: "The last name" },
          { es: "La edad", en: "The age" },
          { es: "La dirección", en: "The address" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "spelling", "numbers"],
    },
    {
      id: "lis-price", type: "listening", target: "Two sandwiches and a coffee? That's fourteen dollars, please.",
      gloss: { es: "¿Dos sándwiches y un café? Son catorce dólares, por favor.", en: "Two sandwiches and a coffee? That's fourteen dollars, please." },
      question: {
        prompt: { es: "¿Cuánto hay que pagar?", en: "How much is it?" },
        options: [
          { es: "14 dólares", en: "$14" },
          { es: "40 dólares", en: "$40" },
          { es: "4 dólares", en: "$4" },
          { es: "12 dólares", en: "$12" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "numbers", "money"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-billion", type: "bridge", onlyFor: "es", target: "a billion",
      gloss: { es: "mil millones", en: "a billion (1,000,000,000)" },
      question: {
        prompt: { es: "«a billion dollars» son…", en: "'a billion dollars' is…" },
        options: [
          { es: "mil millones de dólares", en: "a thousand million dollars" },
          { es: "un billón de dólares (un millón de millones)", en: "a million million dollars" },
          { es: "un millón de dólares", en: "a million dollars" },
        ],
        answer: 0,
      },
      note: { es: "«a billion» = mil millones; nuestro «billón» (un millón de millones) es «a trillion»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "numbers"],
    },
  ]),
};
