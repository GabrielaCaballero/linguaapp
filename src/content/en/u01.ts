import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u01",
  lang: "en",
  index: 1,
  cefr: "A0",
  title: { target: "Hello!", es: "¡Hola!", en: "Hello!" },
  canDo: [
    { es: "Puedo saludar y despedirme a cualquier hora del día.", en: "I can say hello and goodbye at any time of day." },
    { es: "Puedo decir cómo me llamo y preguntarle el nombre a alguien.", en: "I can say my name and ask someone theirs." },
    { es: "Sé dar las gracias, pedir perdón y responder con cortesía.", en: "I can say thank you, apologize and reply politely." },
  ],
  icon: "👋",
  items: build("en", 1, "A0", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-th", type: "sound", target: "thanks", pair: ["thanks", "tanks"], slow: true,
      gloss: { es: "gracias", en: "thanks" },
      distractors: ["tanks", "sanks", "fanks"],
      note: { es: "«th» se dice con la punta de la lengua entre los dientes, como la «z» de España: thanks, three." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "th"],
    },
    {
      id: "s-h", type: "sound", target: "hello",
      gloss: { es: "hola", en: "hello" },
      distractors: ["ello", "jello", "hallo"],
      note: { es: "La «h» inglesa sí suena: es un soplo suave, como una «j» muy débil." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "h"],
    },
    {
      id: "s-ee", type: "sound", target: "please",
      gloss: { es: "por favor", en: "please" },
      distractors: ["plis", "pleas", "plays"],
      note: { es: "«ea» y «ee» suenan como una «i» larga: please, meet, see." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "vowels"],
    },

    // ── Greetings ────────────────────────────────────────────
    {
      id: "hello", type: "phrase", pos: "phrase", target: "Hello",
      gloss: { es: "Hola", en: "Hello (neutral greeting)" },
      distractors: ["Goodbye", "Please", "Sorry"],
      note: { es: "Sirve con cualquier persona y a cualquier hora." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "hi", type: "phrase", pos: "phrase", target: "Hi",
      gloss: { es: "Hola (más informal)", en: "Hi (informal greeting)" },
      accept: [{ text: "Hey" }],
      distractors: ["Bye", "Yes", "Please"],
      note: { es: "Muy común entre amigos y compañeros de trabajo; «Hey» es todavía más informal." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "good-morning", type: "phrase", pos: "phrase", target: "Good morning",
      gloss: { es: "Buenos días", en: "Good morning" },
      distractors: ["Good night", "Good evening", "Good afternoon"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "good-afternoon", type: "phrase", pos: "phrase", target: "Good afternoon",
      gloss: { es: "Buenas tardes", en: "Good afternoon" },
      distractors: ["Good morning", "Good night", "Good evening"],
      note: { es: "Desde el mediodía hasta las cinco o seis de la tarde, más o menos." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "good-evening", type: "phrase", pos: "phrase", target: "Good evening",
      gloss: { es: "Buenas noches (al llegar, como saludo)", en: "Good evening (a greeting)" },
      distractors: ["Good night", "Good morning", "Good afternoon"],
      note: { es: "Para saludar de noche se dice «Good evening»; «Good night» es solo para despedirse." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "good-night", type: "phrase", pos: "phrase", target: "Good night",
      gloss: { es: "Buenas noches (al despedirse o al irse a dormir)", en: "Good night (when leaving or going to bed)" },
      accept: [{ text: "Goodnight" }],
      distractors: ["Good evening", "Good morning", "Goodbye"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "goodbye", type: "phrase", pos: "phrase", target: "Goodbye",
      gloss: { es: "Adiós", en: "Goodbye" },
      accept: [{ text: "Bye" }, { text: "Good-bye" }, { text: "Bye-bye" }],
      distractors: ["Hello", "Good night", "Sorry"],
      note: { es: "En la conversación diaria casi todos dicen «Bye»." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "see-you-later", type: "phrase", pos: "phrase", target: "See you later",
      gloss: { es: "Hasta luego", en: "See you later" },
      accept: [{ text: "See you" }, { text: "See ya" }, { text: "Later" }],
      distractors: ["See you tomorrow", "Good night", "Nice to meet you"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "see-you-tomorrow", type: "phrase", pos: "phrase", target: "See you tomorrow",
      gloss: { es: "Hasta mañana", en: "See you tomorrow" },
      distractors: ["See you later", "Good morning", "Good night"],
      tags: ["greeting", "chunk", "time"],
    },

    // ── Courtesy ─────────────────────────────────────────────
    {
      id: "thank-you", type: "phrase", pos: "phrase", target: "Thank you",
      gloss: { es: "Gracias", en: "Thank you" },
      accept: [{ text: "Thanks" }],
      distractors: ["Please", "Sorry", "You're welcome"],
      tags: ["polite", "chunk"],
    },
    {
      id: "thanks-a-lot", type: "phrase", pos: "phrase", target: "Thank you very much",
      gloss: { es: "Muchas gracias", en: "Thank you very much" },
      accept: [{ text: "Thanks a lot" }, { text: "Thank you so much" }, { text: "Thanks so much" }, { text: "Thanks very much" }],
      distractors: ["Thank you very well", "Very thanks", "Many thanks you"],
      errors: [{ text: "Very thanks", feedback: { es: "No se traduce palabra por palabra: «Thanks a lot» o «Thank you very much»." } }],
      tags: ["polite", "chunk"],
    },
    {
      id: "youre-welcome", type: "phrase", pos: "phrase", target: "You're welcome",
      gloss: { es: "De nada", en: "You're welcome" },
      accept: [{ text: "You are welcome" }, { text: "No problem" }, { text: "Sure" }],
      distractors: ["Welcome", "Of nothing", "Thank you"],
      errors: [{ text: "Of nothing", feedback: { es: "«De nada» no se traduce literal: se dice «You're welcome» o «No problem»." } }],
      note: { es: "«Welcome» solo significa «bienvenido»; para «de nada» hace falta «You're welcome»." },
      tags: ["polite", "chunk"],
    },
    {
      id: "please", type: "word", pos: "adv", target: "please",
      gloss: { es: "por favor", en: "please" },
      distractors: ["sorry", "thanks", "pleasure"],
      note: { es: "Puede ir al principio o al final: «Please sit down» / «Water, please»." },
      tags: ["polite"],
    },
    {
      id: "excuse-me", type: "phrase", pos: "phrase", target: "Excuse me",
      gloss: { es: "Disculpe / Con permiso (para llamar la atención o pasar)", en: "Excuse me (to get attention or get past)" },
      distractors: ["Sorry me", "Excuse", "Pardon you"],
      note: { es: "Se usa antes de molestar a alguien; después de un error se dice «Sorry»." },
      tags: ["polite", "chunk"],
    },
    {
      id: "sorry", type: "phrase", pos: "phrase", target: "Sorry",
      gloss: { es: "Perdón / Lo siento", en: "Sorry" },
      accept: [{ text: "I'm sorry" }, { text: "I am sorry" }],
      distractors: ["Excuse me", "Please", "Thanks"],
      note: { es: "Si no entendiste algo, «Sorry?» con tono de pregunta significa «¿Perdón, cómo?»." },
      tags: ["polite", "chunk"],
    },
    {
      id: "yes", type: "word", pos: "adv", target: "yes",
      gloss: { es: "sí", en: "yes" },
      accept: [{ text: "yeah" }],
      distractors: ["yet", "yeast", "ice"],
      note: { es: "«Yeah» es la forma relajada y muy común al hablar." },
      tags: ["basic"],
    },

    // ── Names and how are you ────────────────────────────────
    {
      id: "whats-your-name", type: "phrase", pos: "phrase", target: "What's your name?",
      gloss: { es: "¿Cómo te llamas? / ¿Cómo se llama?", en: "What's your name?" },
      accept: [{ text: "What is your name?" }],
      distractors: ["How are you?", "How is your name?", "Where are you from?"],
      errors: [{ text: "How is your name?", feedback: { es: "Para el nombre se pregunta con «What», no con «How»: What's your name?" } }],
      tags: ["introductions", "chunk"],
    },
    {
      id: "my-name-is", type: "sentence", target: "My name is Anna.",
      gloss: { es: "Me llamo Anna.", en: "My name is Anna." },
      accept: [{ text: "My name's Anna." }, { text: "I'm Anna." }, { text: "I am Anna." }],
      errors: [{ text: "I call Anna.", feedback: { es: "«call» es «llamar» (por teléfono o en voz alta); para tu nombre di «My name is…» o «I'm…»." } }],
      distractors: ["call", "Me", "am"],
      note: { es: "Literalmente «mi nombre es Anna»; «I'm Anna» también es muy natural." },
      tags: ["introductions"],
    },
    {
      id: "nice-to-meet-you", type: "phrase", pos: "phrase", target: "Nice to meet you",
      gloss: { es: "Mucho gusto / Encantado/a", en: "Nice to meet you" },
      accept: [{ text: "Pleased to meet you" }, { text: "Nice meeting you" }],
      distractors: ["Nice to see you", "Good to know you", "Nice to meet"],
      note: { es: "Respuesta típica: «Nice to meet you too» (igualmente)." },
      tags: ["introductions", "chunk"],
    },
    {
      id: "how-are-you", type: "phrase", pos: "phrase", target: "How are you?",
      gloss: { es: "¿Cómo estás? / ¿Cómo está?", en: "How are you?" },
      distractors: ["Who are you?", "How old are you?", "Where are you?"],
      note: { es: "En inglés no hay «tú» y «usted»: «you» sirve para todos." },
      tags: ["introductions", "chunk"],
    },
    {
      id: "im-fine", type: "sentence", target: "I'm fine, thanks. And you?",
      gloss: { es: "Bien, gracias. ¿Y tú?", en: "I'm fine, thanks. And you?" },
      accept: [
        { text: "I am fine, thanks. And you?" }, { text: "I'm good, thanks. And you?" }, { text: "I'm fine, thank you. And you?" },
        { text: "Fine, thanks. And you?" }, { text: "Good, thanks. And you?" }, { text: "I'm fine, thanks. How about you?" },
      ],
      errors: [{ text: "I'm fine, thanks. And your?", feedback: { es: "«your» es «tu» (posesivo); «¿y tú?» es «And you?»." }, ruleId: "en-g-im-youre" }],
      distractors: ["your", "am", "good"],
      tags: ["introductions"],
    },

    // ── Pattern + dialogue + listening ───────────────────────
    {
      id: "pat-im-youre", type: "pattern", target: "I'm = I am · you're = you are",
      gloss: { es: "soy/estoy · eres/estás (forma corta)", en: "short forms: I'm, you're" },
      pattern: {
        rule: {
          es: "En inglés el sujeto es obligatorio: «I'm Anna» (soy Anna), nunca solo «am Anna». Al hablar se usa la forma corta con apóstrofo: I am → I'm, you are → you're.",
          en: "English always needs a subject: 'I'm Anna', never just 'am Anna'. In speech the short form with an apostrophe is normal: I am → I'm, you are → you're.",
        },
        table: [["forma larga", "forma corta"], ["I am", "I'm"], ["you are", "you're"]],
      },
      question: {
        prompt: { es: "Completa: «___ Tom. Nice to meet you.» (Soy Tom)", en: "Complete: '___ Tom. Nice to meet you.'" },
        options: ["I'm", "Am", "Me", "My"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-im-youre"], tags: ["grammar", "be"],
    },
    {
      id: "dlg-hi-im-emma", type: "dialogue", target: "Nice to meet you too.",
      gloss: { es: "Igualmente, mucho gusto.", en: "Nice to meet you too." },
      turns: [
        { who: "A", target: "Hi! I'm Emma. What's your name?", gloss: { es: "¡Hola! Soy Emma. ¿Cómo te llamas?", en: "Hi! I'm Emma. What's your name?" } },
        { who: "B", target: "Hi, Emma. My name is Tom.", gloss: { es: "Hola, Emma. Me llamo Tom.", en: "Hi, Emma. My name is Tom." } },
        { who: "A", target: "Nice to meet you, Tom.", gloss: { es: "Mucho gusto, Tom.", en: "Nice to meet you, Tom." } },
        { who: "B", target: "Nice to meet you too. How are you?", gloss: { es: "Igualmente. ¿Cómo estás?", en: "Nice to meet you too. How are you?" } },
        { who: "A", target: "I'm good, thanks!", gloss: { es: "¡Bien, gracias!", en: "I'm good, thanks!" } },
      ],
      question: {
        prompt: { es: "¿Cómo está Emma?", en: "How is Emma?" },
        options: [
          { es: "Bien", en: "Good" },
          { es: "Cansada", en: "Tired" },
          { es: "Mal", en: "Not well" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions"],
    },
    {
      id: "lis-good-morning", type: "listening", target: "Good morning! My name is David. Nice to meet you.",
      gloss: { es: "¡Buenos días! Me llamo David. Mucho gusto.", en: "Good morning! My name is David. Nice to meet you." },
      question: {
        prompt: { es: "¿En qué momento del día habla David?", en: "What time of day is it?" },
        options: [
          { es: "Por la mañana", en: "In the morning" },
          { es: "Por la tarde", en: "In the afternoon" },
          { es: "Por la noche", en: "At night" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "greeting"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-tion", type: "bridge", onlyFor: "es", target: "information",
      gloss: { es: "información", en: "information" },
      distractors: ["informacion", "informashon", "informetion"],
      note: { es: "Muchas palabras en «-ción» terminan en «-tion» en inglés (se dice «shon»): nación → nation, información → information." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
