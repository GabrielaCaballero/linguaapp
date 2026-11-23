import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u01",
  lang: "pt",
  index: 1,
  cefr: "A0",
  title: { target: "Olá!", es: "¡Hola!", en: "Hello!" },
  canDo: [
    { es: "Puedo saludar y despedirme, de tú (você) y de usted (o senhor / a senhora).", en: "I can say hello and goodbye, informally (você) and formally (o senhor / a senhora)." },
    { es: "Puedo decir cómo me llamo y preguntarle el nombre a alguien.", en: "I can say my name and ask someone theirs." },
    { es: "Reconozco los sonidos nasales (não) y sé que la o final suena «u».", en: "I can recognise nasal sounds (não) and I know a final o sounds like 'oo'." },
  ],
  icon: "👋",
  items: build("pt", 1, "A0", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-ao", type: "sound", target: "não",
      gloss: { es: "no", en: "no / not" },
      pair: ["não", "nau"], distractors: ["nau", "nó", "na"],
      note: {
        es: "«ão» es una vocal nasal: el aire sale también por la nariz, como «aun» sin cerrar la n.",
        en: "'ão' is a nasal vowel: air also goes through your nose, like 'ow' said through the nose.",
      },
      slow: true, exercises: ["pick-spelling", "listen"], tags: ["sound", "nasal"],
    },
    {
      id: "s-final-o", type: "sound", target: "obrigado",
      gloss: { es: "gracias (lo dice un hombre)", en: "thank you (said by a man)" },
      distractors: ["obrigadu", "obligado", "obrigadio"],
      note: {
        es: "La o final sin acento suena «u»: obrigado ≈ «obrigádu». Igual la e final suena «i»: tarde ≈ «tárdchi».",
        en: "An unstressed final o sounds like 'oo': obrigado ≈ 'oh-bree-GAH-doo'. A final e sounds like 'ee'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "final-vowels"],
    },
    {
      id: "s-ti-di", type: "sound", target: "tarde",
      gloss: { es: "tarde", en: "afternoon / late" },
      distractors: ["tardi", "tarche", "tardji"],
      note: {
        es: "En Brasil, d y t delante de una i (o de una e final que suena i) se vuelven «dch» y «ch»: tarde ≈ «tárdchi», noite ≈ «nóichi».",
        en: "In Brazil, d and t before an 'ee' sound become 'j' and 'ch': tarde ≈ 'TAR-jee', noite ≈ 'NOY-chee'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "palatal-d-t"],
    },
    {
      id: "s-nh", type: "sound", target: "senhor",
      gloss: { es: "señor", en: "sir / Mr" },
      distractors: ["senhol", "senior", "sennor"],
      note: {
        es: "«nh» es la ñ española: senhor = señor, Espanha = España.",
        en: "'nh' sounds like 'ny' in 'canyon': senhor ≈ 'seh-NYOR'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "nh-lh"],
    },

    // ── Greetings ────────────────────────────────────────────
    {
      id: "ola", type: "phrase", pos: "phrase", target: "Olá",
      gloss: { es: "Hola", en: "Hello" },
      distractors: ["Oi", "Tchau", "Hola"],
      note: { es: "Sirve con cualquier persona; entre amigos en Brasil se dice más «Oi».", en: "Fine with anyone; among friends Brazilians mostly say 'Oi'." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "oi", type: "phrase", pos: "phrase", target: "Oi", register: "informal",
      gloss: { es: "¡Hola! (informal)", en: "Hi! (informal)" },
      variants: [{ region: "PT", text: "Olá", note: { es: "En Portugal «oi» casi no se usa: se dice «olá».", en: "In Portugal people rarely say 'oi': they say 'olá'." } }],
      distractors: ["Ou", "Ai", "Tchau"],
      tags: ["greeting", "chunk", "register"],
    },
    {
      id: "bom-dia", type: "phrase", pos: "phrase", target: "Bom dia",
      gloss: { es: "Buenos días", en: "Good morning" },
      errors: [{ text: "Boa dia", feedback: { es: "«dia» es masculino aunque termine en -a: bom dia.", en: "'dia' is masculine even though it ends in -a: bom dia." } }],
      distractors: ["Boa tarde", "Boa noite", "Bons dias"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "boa-tarde", type: "phrase", pos: "phrase", target: "Boa tarde",
      gloss: { es: "Buenas tardes", en: "Good afternoon" },
      distractors: ["Bom dia", "Boa noite", "Bom tarde"],
      note: { es: "Desde el mediodía hasta que oscurece.", en: "From noon until it gets dark." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "boa-noite", type: "phrase", pos: "phrase", target: "Boa noite",
      gloss: { es: "Buenas noches", en: "Good evening / Good night" },
      distractors: ["Boa tarde", "Bom noite", "Bom dia"],
      note: { es: "Sirve para saludar de noche y también para despedirse antes de dormir.", en: "Used both to greet people in the evening and to say good night." },
      tags: ["greeting", "chunk"],
    },
    {
      id: "tchau", type: "phrase", pos: "phrase", target: "Tchau",
      gloss: { es: "Chau / Adiós", en: "Bye" },
      variants: [{ region: "PT", text: "Adeus", note: { es: "En Portugal se oye más «adeus» o «até logo».", en: "In Portugal you'll hear 'adeus' or 'até logo' more." } }],
      distractors: ["Chau", "Olá", "Oi"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "ate-logo", type: "phrase", pos: "phrase", target: "Até logo",
      gloss: { es: "Hasta luego", en: "See you later" },
      accept: [{ text: "Até mais" }],
      distractors: ["Até amanhã", "Logo até", "Hasta logo"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "ate-amanha", type: "phrase", pos: "phrase", target: "Até amanhã",
      gloss: { es: "Hasta mañana", en: "See you tomorrow" },
      distractors: ["Até logo", "Até manhã", "Até amanha logo"],
      note: { es: "amanhã = mañana (el día siguiente); a manhã = la mañana (parte del día).", en: "amanhã = tomorrow; a manhã = the morning." },
      tags: ["greeting", "chunk"],
    },

    // ── Courtesy ─────────────────────────────────────────────
    {
      id: "obrigado", type: "phrase", pos: "phrase", target: "Obrigado",
      gloss: { es: "Gracias", en: "Thank you" },
      accept: [{ text: "Obrigada" }],
      distractors: ["Obligado", "Desculpa", "De nada"],
      note: { es: "Concuerda con quien habla: un hombre dice «obrigado», una mujer «obrigada».", en: "It agrees with the speaker: a man says 'obrigado', a woman 'obrigada'." },
      tags: ["polite", "chunk"],
    },
    {
      id: "muito-obrigado", type: "phrase", pos: "phrase", target: "Muito obrigado",
      gloss: { es: "Muchas gracias", en: "Thank you very much" },
      accept: [{ text: "Muito obrigada" }],
      errors: [{ text: "Muitas obrigado", feedback: { es: "«muito» aquí es adverbio: muito obrigado, sin -as.", en: "'muito' is an adverb here: muito obrigado." } }],
      distractors: ["Mucho obrigado", "Obrigado muito", "Muito prazer"],
      tags: ["polite", "chunk"],
    },
    {
      id: "de-nada", type: "phrase", pos: "phrase", target: "De nada",
      gloss: { es: "De nada", en: "You're welcome" },
      accept: [{ text: "Por nada" }, { text: "Imagina" }],
      distractors: ["Nada de", "Obrigado", "Por favor"],
      note: { es: "En Brasil también se oye «Imagina!» (¡no hay de qué!).", en: "Brazilians also say 'Imagina!' (don't mention it)." },
      tags: ["polite", "chunk"],
    },
    {
      id: "por-favor", type: "phrase", pos: "phrase", target: "Por favor",
      gloss: { es: "Por favor", en: "Please" },
      distractors: ["Com licença", "De nada", "Pelo favor"],
      tags: ["polite", "chunk"],
    },
    {
      id: "com-licenca", type: "phrase", pos: "phrase", target: "Com licença",
      gloss: { es: "Con permiso", en: "Excuse me (to get past)" },
      distractors: ["Com licencia", "Desculpa", "Por favor"],
      note: { es: "Para pedir paso o entrar en un lugar; la ç suena como s.", en: "To get past someone or come into a room; ç sounds like s." },
      tags: ["polite", "chunk"],
    },
    {
      id: "desculpa", type: "phrase", pos: "phrase", target: "Desculpa", register: "informal",
      gloss: { es: "Perdón / Disculpa (informal)", en: "Sorry (informal)" },
      distractors: ["Desculpe", "Disculpa", "Com licença"],
      tags: ["polite", "register"],
    },
    {
      id: "desculpe", type: "phrase", pos: "phrase", target: "Desculpe", register: "formal",
      gloss: { es: "Disculpe (formal)", en: "Sorry (formal)" },
      distractors: ["Desculpa", "Disculpe", "Desculpo"],
      tags: ["polite", "register"],
    },
    {
      id: "sim", type: "word", pos: "adv", target: "sim",
      gloss: { es: "sí", en: "yes" },
      distractors: ["si", "sem", "não"],
      note: { es: "Ojo: «se» (si condicional) y «sem» (sin) son otras palabras.", en: "Careful: 'se' means 'if' and 'sem' means 'without'." },
      tags: ["basic"],
    },

    // ── Names & how are you ──────────────────────────────────
    {
      id: "como-voce-se-chama", type: "phrase", pos: "phrase", target: "Como você se chama?", register: "informal",
      gloss: { es: "¿Cómo te llamas?", en: "What's your name? (informal)" },
      accept: [{ text: "Qual é o seu nome?" }, { text: "Qual é seu nome?" }],
      variants: [{ region: "PT", text: "Como te chamas?", note: { es: "En Portugal, entre amigos se usa «tu»: como te chamas?", en: "In Portugal friends use 'tu': como te chamas?" } }],
      distractors: ["Como o senhor se chama?", "Como vai você?", "Como você chama?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "como-o-senhor-se-chama", type: "phrase", pos: "phrase", target: "Como o senhor se chama?", register: "formal",
      gloss: { es: "¿Cómo se llama (usted)?", en: "What's your name? (formal)" },
      accept: [{ text: "Como a senhora se chama?" }, { text: "Qual é o nome do senhor?" }],
      distractors: ["Como você se chama?", "Como o senhor chama?", "Como vai o senhor?"],
      note: { es: "A una mujer: «Como a senhora se chama?».", en: "To a woman: 'Como a senhora se chama?'." },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "meu-nome-e", type: "sentence", target: "Meu nome é Ana.",
      gloss: { es: "Me llamo Ana.", en: "My name is Ana." },
      accept: [{ text: "O meu nome é Ana." }, { text: "Eu me chamo Ana." }, { text: "Me chamo Ana." }, { text: "Sou a Ana." }],
      errors: [{ text: "Meu nome e Ana.", feedback: { es: "Sin tilde, «e» es «y»; el verbo es «é».", en: "Without the accent, 'e' means 'and'; the verb is 'é'." } }],
      distractors: ["chamo", "seu", "está"],
      tags: ["introductions"],
    },
    {
      id: "muito-prazer", type: "phrase", pos: "phrase", target: "Muito prazer",
      gloss: { es: "Mucho gusto", en: "Nice to meet you" },
      accept: [{ text: "Prazer" }, { text: "Muito prazer em conhecer você" }],
      distractors: ["Muito gosto", "Muito obrigado", "Prazer muito"],
      note: { es: "Respuesta típica: «O prazer é meu» (el gusto es mío).", en: "Typical reply: 'O prazer é meu' (the pleasure is mine)." },
      tags: ["introductions", "chunk"],
    },
    {
      id: "tudo-bem", type: "phrase", pos: "phrase", target: "Tudo bem?", register: "informal",
      gloss: { es: "¿Qué tal? / ¿Todo bien?", en: "How are you? (informal)" },
      accept: [{ text: "Tudo bom?" }, { text: "Como vai?" }],
      distractors: ["Tudo bom bem?", "Todo bem?", "Como vai o senhor?"],
      note: { es: "Se contesta con la misma frase: «Tudo bem, e você?».", en: "You answer with the same words: 'Tudo bem, e você?'." },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "como-vai-o-senhor", type: "phrase", pos: "phrase", target: "Como vai o senhor?", register: "formal",
      gloss: { es: "¿Cómo está (usted)?", en: "How are you? (formal)" },
      accept: [{ text: "Como vai a senhora?" }, { text: "Como está o senhor?" }],
      distractors: ["Tudo bem?", "Como vai você?", "Como vai a senhor?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "tudo-bem-e-voce", type: "sentence", target: "Tudo bem, obrigado. E você?", register: "informal",
      gloss: { es: "Todo bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?" },
      accept: [{ text: "Tudo bem, obrigada. E você?" }, { text: "Tudo bom, obrigado. E você?" }, { text: "Tudo bem obrigado e você" }],
      distractors: ["o senhor", "é", "tu"],
      note: { es: "De usted: «E o senhor?» / «E a senhora?».", en: "Formal: 'E o senhor?' / 'E a senhora?'." },
      tags: ["introductions"],
    },

    // ── Pattern + dialogue ───────────────────────────────────
    {
      id: "pat-voce-senhor", type: "pattern", target: "você / o senhor, a senhora",
      gloss: { es: "tú / usted", en: "informal / formal 'you'" },
      pattern: {
        rule: {
          es: "En Brasil «você» es el «tú» de todos los días, pero va con el verbo de 3.ª persona (você fala, você é). Para respetar —gente mayor, clientes— se dice «o senhor / a senhora», también con 3.ª persona.",
          en: "In Brazil 'você' is the everyday 'you', but it takes the he/she verb form (você fala, você é). To show respect (older people, customers) say 'o senhor / a senhora', also with the he/she form.",
        },
        table: [["você", "o senhor / a senhora"], ["Oi!", "Bom dia, senhor."], ["Tudo bem?", "Como vai o senhor?"], ["Como você se chama?", "Como a senhora se chama?"], ["Desculpa!", "Desculpe!"]],
      },
      question: {
        prompt: { es: "Le preguntas el nombre a una señora mayor que no conoces:", en: "You ask an older woman you don't know her name:" },
        options: ["Como a senhora se chama?", "Como você se chama?", "Como tu se chama?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-voce-senhor"], tags: ["grammar", "register"],
    },
    {
      id: "dlg-prazer", type: "dialogue", target: "Muito prazer, Pedro.", register: "informal",
      gloss: { es: "Mucho gusto, Pedro.", en: "Nice to meet you, Pedro." },
      turns: [
        { who: "A", target: "Oi! Eu sou o Pedro. E você, como se chama?", gloss: { es: "¡Hola! Soy Pedro. Y tú, ¿cómo te llamas?", en: "Hi! I'm Pedro. And you, what's your name?" } },
        { who: "B", target: "Oi, Pedro. Meu nome é Júlia.", gloss: { es: "Hola, Pedro. Me llamo Júlia.", en: "Hi, Pedro. My name is Júlia." } },
        { who: "A", target: "Muito prazer, Júlia. Tudo bem?", gloss: { es: "Mucho gusto, Júlia. ¿Todo bien?", en: "Nice to meet you, Júlia. How are you?" } },
        { who: "B", target: "Tudo bem, e você?", gloss: { es: "Todo bien, ¿y tú?", en: "Fine, and you?" } },
      ],
      question: {
        prompt: { es: "¿Cómo se tratan Pedro y Júlia?", en: "How do Pedro and Júlia address each other?" },
        options: [
          { es: "De tú («você»)", en: "Informally (você)" },
          { es: "De usted («o senhor / a senhora»)", en: "Formally (o senhor / a senhora)" },
          { es: "Uno de tú, el otro de usted", en: "One informally, the other formally" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions", "register"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-nh-lh", type: "bridge", onlyFor: "es", target: "Espanha",
      gloss: { es: "España", en: "Spain" },
      distractors: ["Espanya", "España", "Espania"],
      note: { es: "La ñ española se escribe «nh» (España → Espanha) y la ll suele ser «lh» (batalla → batalha)." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern", "spelling"],
    },
    {
      id: "br-cao", type: "bridge", onlyFor: "en", target: "informação",
      gloss: { es: "información", en: "information" },
      distractors: ["informacão", "informassão", "informaçon"],
      note: { en: "English -tion is usually Portuguese -ção: nation → nação, information → informação." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-cao-es", type: "bridge", onlyFor: "es", target: "estação",
      gloss: { es: "estación", en: "station" },
      distractors: ["estacion", "estacão", "estasão"],
      note: { es: "La terminación española -ción suele ser -ção: estación → estação, canción → canção." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
