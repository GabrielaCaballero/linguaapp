import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u01",
  lang: "fr",
  index: 1,
  cefr: "A0",
  title: { target: "Bonjour !", es: "¡Hola!", en: "Hello!" },
  canDo: [
    { es: "Puedo saludar y despedirme, de tú y de usted.", en: "I can say hello and goodbye, formally and informally." },
    { es: "Puedo decir cómo me llamo y preguntarle el nombre a alguien.", en: "I can say my name and ask someone theirs." },
    { es: "Puedo distinguir «u» de «ou» y sé que muchas letras finales no suenan.", en: "I can tell 'u' from 'ou' and I know many final letters are silent." },
  ],
  icon: "👋",
  items: build("fr", 1, "A0", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-u", type: "sound", target: "tu",
      gloss: { es: "tú", en: "you (informal)" },
      pair: ["tu", "tout"], distractors: ["tout", "ti", "teu"],
      note: {
        es: "La «u» francesa no existe en español: di «i» con los labios redondeados, como para silbar.",
        en: "French 'u' isn't English 'oo': say 'ee' with your lips rounded as if to whistle.",
      },
      slow: true, exercises: ["pick-spelling", "listen"], tags: ["sound", "u-ou"],
    },
    {
      id: "s-ou", type: "sound", target: "vous",
      gloss: { es: "usted / ustedes", en: "you (formal or plural)" },
      pair: ["vous", "vu"], distractors: ["vu", "veu", "vos"],
      note: {
        es: "«ou» suena como la «u» española: vous ≈ «vu». La s final no suena.",
        en: "'ou' sounds like 'oo' in 'food': vous ≈ 'voo'. The final s is silent.",
      },
      slow: true, exercises: ["pick-spelling", "listen"], tags: ["sound", "u-ou"],
    },
    {
      id: "s-oi", type: "sound", target: "moi",
      gloss: { es: "yo (forma tónica: «moi, je…»)", en: "me (stressed: 'moi, je…')" },
      distractors: ["mai", "mou", "mi"],
      note: {
        es: "«oi» suena «ua»: moi ≈ «mua», au revoir ≈ «o revuar».",
        en: "'oi' sounds like 'wa': moi ≈ 'mwa', au revoir ≈ 'oh ruh-vwar'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "oi"],
    },
    {
      id: "s-final", type: "sound", target: "salut",
      gloss: { es: "hola / chau (informal)", en: "hi / bye (informal)" },
      distractors: ["salute", "salouté", "salit"],
      note: {
        es: "Las consonantes finales casi nunca suenan: salut ≈ «salü», petit ≈ «petí».",
        en: "Final consonants are usually silent: salut ≈ 'sa-lu', petit ≈ 'puh-tee'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "silent-letters"],
    },

    // ── Greetings ────────────────────────────────────────────
    {
      id: "bonjour", type: "phrase", pos: "phrase", target: "Bonjour",
      gloss: { es: "Buenos días / Hola", en: "Hello / Good morning" },
      distractors: ["Bonsoir", "Bonne nuit", "Au revoir"],
      note: {
        es: "Se usa todo el día hasta la tarde, con cualquier persona. En Francia siempre se saluda al entrar a una tienda.",
        en: "Used all day until the evening, with anyone. In France you always say it when you walk into a shop.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "bonsoir", type: "phrase", pos: "phrase", target: "Bonsoir",
      gloss: { es: "Buenas tardes / Buenas noches (al llegar, a partir de la tarde)", en: "Good evening" },
      distractors: ["Bonjour", "Bonne nuit", "Bonne soirée"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "bonne-nuit", type: "phrase", pos: "phrase", target: "Bonne nuit",
      gloss: { es: "Buenas noches (al irse a dormir)", en: "Good night" },
      distractors: ["Bonsoir", "Bonne journée", "Bon nuit"],
      note: {
        es: "Solo para despedirse antes de dormir; para saludar de noche se dice «Bonsoir».",
        en: "Only when going to bed; to greet someone in the evening, say 'Bonsoir'.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "salut", type: "phrase", pos: "phrase", target: "Salut", register: "informal",
      gloss: { es: "¡Hola! / ¡Chau! (informal)", en: "Hi! / Bye! (informal)" },
      distractors: ["Salue", "Bonjour", "Merci"],
      note: { es: "Sirve para saludar y para despedirse, solo con amigos.", en: "Means both hi and bye; only with friends." },
      tags: ["greeting", "chunk", "register"],
    },
    {
      id: "au-revoir", type: "phrase", pos: "phrase", target: "Au revoir",
      gloss: { es: "Adiós", en: "Goodbye" },
      distractors: ["À revoir", "Au voir", "Bonsoir"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "a-bientot", type: "phrase", pos: "phrase", target: "À bientôt",
      gloss: { es: "Hasta pronto", en: "See you soon" },
      distractors: ["À plus tard", "Au bientôt", "Bientôt"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "a-plus-tard", type: "phrase", pos: "phrase", target: "À plus tard",
      gloss: { es: "Hasta luego", en: "See you later" },
      accept: [{ text: "À plus" }, { text: "À tout à l'heure" }],
      distractors: ["À bientôt", "Plus tard", "Au plus tard"],
      note: { es: "Entre amigos se acorta: «À plus !» (suena la s).", en: "Among friends it's shortened to 'À plus !' (the s is pronounced)." },
      tags: ["greeting", "chunk"],
    },

    // ── Courtesy ─────────────────────────────────────────────
    {
      id: "merci", type: "phrase", pos: "phrase", target: "Merci",
      gloss: { es: "Gracias", en: "Thank you" },
      distractors: ["Pardon", "De rien", "Mercé"],
      tags: ["polite", "chunk"],
    },
    {
      id: "merci-beaucoup", type: "phrase", pos: "phrase", target: "Merci beaucoup",
      gloss: { es: "Muchas gracias", en: "Thank you very much" },
      errors: [{ text: "Merci très", feedback: { es: "«Muchas gracias» es «merci beaucoup».", en: "'Thanks a lot' is 'merci beaucoup'." } }],
      distractors: ["Merci bien", "Très merci", "Beaucoup merci"],
      tags: ["polite", "chunk"],
    },
    {
      id: "de-rien", type: "phrase", pos: "phrase", target: "De rien",
      gloss: { es: "De nada", en: "You're welcome" },
      accept: [{ text: "Je vous en prie" }, { text: "Je t'en prie" }, { text: "Avec plaisir" }],
      distractors: ["De nada", "Pour rien", "Merci"],
      note: { es: "Más formal: «Je vous en prie».", en: "More formal: 'Je vous en prie'." },
      tags: ["polite", "chunk"],
    },
    {
      id: "svp-vous", type: "phrase", pos: "phrase", target: "S'il vous plaît", register: "formal",
      gloss: { es: "Por favor (de usted)", en: "Please (formal)" },
      distractors: ["S'il te plaît", "Si vous plaît", "Il vous plaît"],
      note: { es: "Literalmente «si le place a usted». Por escrito: SVP.", en: "Literally 'if it pleases you'. Written short as SVP." },
      tags: ["polite", "register"],
    },
    {
      id: "svp-tu", type: "phrase", pos: "phrase", target: "S'il te plaît", register: "informal",
      gloss: { es: "Por favor (de tú)", en: "Please (informal)" },
      distractors: ["S'il vous plaît", "Si te plaît", "Il te plaît"],
      tags: ["polite", "register"],
    },
    {
      id: "excusez-moi", type: "phrase", pos: "phrase", target: "Excusez-moi", register: "formal",
      gloss: { es: "Disculpe (formal)", en: "Excuse me (formal)" },
      distractors: ["Excuse-moi", "Excusez-vous", "Pardonnez"],
      tags: ["polite", "register"],
    },
    {
      id: "excuse-moi", type: "phrase", pos: "phrase", target: "Excuse-moi", register: "informal",
      gloss: { es: "Disculpa (informal)", en: "Excuse me (informal)" },
      distractors: ["Excusez-moi", "Excuse-toi", "Excusé-moi"],
      tags: ["polite", "register"],
    },
    {
      id: "pardon", type: "phrase", pos: "phrase", target: "Pardon",
      gloss: { es: "Perdón", en: "Sorry / Pardon" },
      distractors: ["Merci", "Pardonne", "Excuse"],
      note: { es: "Para pedir paso o disculparte por algo pequeño. «Pardon ?» = ¿cómo dice?", en: "To get past someone or apologise for something small. 'Pardon ?' = sorry, what did you say?" },
      tags: ["polite", "chunk"],
    },
    {
      id: "oui", type: "word", pos: "adv", target: "oui",
      gloss: { es: "sí", en: "yes" },
      distractors: ["non", "si", "ou"],
      note: { es: "«Si» también existe, pero solo para contradecir una pregunta negativa: Tu ne viens pas ? — Si !", en: "'Si' also exists, but only to contradict a negative question: Tu ne viens pas ? — Si !" },
      tags: ["basic"],
    },

    // ── Names & how are you ──────────────────────────────────
    {
      id: "comment-tu-tappelles", type: "phrase", pos: "phrase", target: "Comment tu t'appelles ?", register: "informal",
      gloss: { es: "¿Cómo te llamas?", en: "What's your name? (informal)" },
      accept: [{ text: "Tu t'appelles comment ?" }, { text: "Comment t'appelles-tu ?" }],
      distractors: ["Comment vous appelez-vous ?", "Comment ça va ?", "Comment tu vas ?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "comment-vous-appelez-vous", type: "phrase", pos: "phrase", target: "Comment vous appelez-vous ?", register: "formal",
      gloss: { es: "¿Cómo se llama (usted)?", en: "What's your name? (formal)" },
      accept: [{ text: "Vous vous appelez comment ?" }],
      distractors: ["Comment tu t'appelles ?", "Comment allez-vous ?", "Comment vous appelle ?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "je-mappelle", type: "sentence", target: "Je m'appelle Anna.",
      gloss: { es: "Me llamo Anna.", en: "My name is Anna." },
      accept: [{ text: "Moi, c'est Anna." }, { text: "Je suis Anna." }],
      errors: [{ text: "Je appelle Anna.", feedback: { es: "Delante de vocal «me» pierde la e: je m'appelle.", en: "Before a vowel 'me' drops its e: je m'appelle." } }],
      distractors: ["te", "appelles", "suis"],
      note: { es: "Se escribe con doble l: appelle.", en: "Spelt with a double l: appelle." },
      tags: ["introductions"],
    },
    {
      id: "enchante", type: "phrase", pos: "phrase", target: "Enchanté",
      gloss: { es: "Mucho gusto / Encantado/a", en: "Nice to meet you" },
      accept: [{ text: "Enchantée" }],
      distractors: ["Enchanter", "Chanté", "Content"],
      note: { es: "Si eres mujer, se escribe «enchantée» (suena igual).", en: "A woman writes 'enchantée' (it sounds the same)." },
      tags: ["introductions", "chunk"],
    },
    {
      id: "ca-va", type: "phrase", pos: "phrase", target: "Ça va ?", register: "informal",
      gloss: { es: "¿Qué tal? / ¿Cómo estás?", en: "How are you? (informal)" },
      accept: [{ text: "Comment ça va ?" }, { text: "Comment vas-tu ?" }],
      distractors: ["Comment allez-vous ?", "Ça vas ?", "Sa va ?"],
      note: { es: "La respuesta es la misma frase: «Ça va, et toi ?».", en: "The answer is the same phrase: 'Ça va, et toi ?'." },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "comment-allez-vous", type: "phrase", pos: "phrase", target: "Comment allez-vous ?", register: "formal",
      gloss: { es: "¿Cómo está (usted)?", en: "How are you? (formal)" },
      accept: [{ text: "Vous allez bien ?" }],
      distractors: ["Ça va ?", "Comment vas-tu ?", "Comment allez-tu ?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "tres-bien-et-toi", type: "sentence", target: "Très bien, merci. Et toi ?", register: "informal",
      gloss: { es: "Muy bien, gracias. ¿Y tú?", en: "Very well, thanks. And you?" },
      accept: [{ text: "Très bien merci, et toi ?" }, { text: "Très bien, merci, et toi ?" }],
      errors: [{ text: "Très bon, merci. Et toi ?", feedback: { es: "«Bon» es adjetivo (bueno, rico); «estoy bien» es «bien».", en: "'Bon' is an adjective (good, tasty); 'I'm fine' is 'bien'." } }],
      distractors: ["bon", "vous", "tu"],
      note: { es: "De usted: «Très bien, merci. Et vous ?».", en: "Formal: 'Très bien, merci. Et vous ?'." },
      tags: ["introductions"],
    },

    // ── Pattern + dialogue ───────────────────────────────────
    {
      id: "pat-tu-vous", type: "pattern", target: "tu / vous",
      gloss: { es: "tú / usted", en: "informal / formal 'you'" },
      pattern: {
        rule: {
          es: "«tu» con amigos, familia y niños; «vous» con desconocidos, en tiendas y en el trabajo. «vous» también es el plural (ustedes), formal o no.",
          en: "Use tu with friends, family and children; vous with strangers, in shops and at work. vous is also the plural 'you', formal or not.",
        },
        table: [["tu", "vous"], ["Salut !", "Bonjour, madame."], ["Ça va ?", "Comment allez-vous ?"], ["S'il te plaît", "S'il vous plaît"], ["Excuse-moi", "Excusez-moi"]],
      },
      question: {
        prompt: { es: "Le preguntas el nombre a un señor que no conoces:", en: "You ask a man you don't know his name:" },
        options: ["Comment vous appelez-vous ?", "Comment tu t'appelles ?", "Comment t'appelles-vous ?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-tu-vous"], tags: ["grammar", "register"],
    },
    {
      id: "dlg-enchante", type: "dialogue", target: "Enchantée, Paul.", register: "formal",
      gloss: { es: "Mucho gusto, Paul.", en: "Nice to meet you, Paul." },
      turns: [
        { who: "A", target: "Bonjour ! Je m'appelle Paul. Et vous ?", gloss: { es: "¡Buenos días! Me llamo Paul. ¿Y usted?", en: "Hello! My name is Paul. And you?" } },
        { who: "B", target: "Bonjour. Je m'appelle Claire.", gloss: { es: "Buenos días. Me llamo Claire.", en: "Hello. My name is Claire." } },
        { who: "A", target: "Enchanté, Claire.", gloss: { es: "Mucho gusto, Claire.", en: "Nice to meet you, Claire." } },
        { who: "B", target: "Enchantée, Paul. Comment allez-vous ?", gloss: { es: "Mucho gusto, Paul. ¿Cómo está?", en: "Nice to meet you, Paul. How are you?" } },
        { who: "A", target: "Très bien, merci.", gloss: { es: "Muy bien, gracias.", en: "Very well, thank you." } },
      ],
      question: {
        prompt: { es: "¿Cómo se tratan Paul y Claire?", en: "How do Paul and Claire address each other?" },
        options: [
          { es: "De usted («vous»)", en: "Formally (vous)" },
          { es: "De tú («tu»)", en: "Informally (tu)" },
          { es: "Uno de tú, el otro de usted", en: "One uses tu, the other vous" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions", "register"],
    },
    {
      id: "bonjour-madame", type: "phrase", pos: "phrase", target: "Bonjour, madame.", register: "formal",
      gloss: { es: "Buenos días, señora.", en: "Good morning, madam." },
      accept: [{ text: "Bonjour madame" }],
      distractors: ["Bonjour, monsieur.", "Salut, madame.", "Bonsoir, mademoiselle."],
      note: { es: "Con un hombre: «Bonjour, monsieur» (≈ «mesié»).", en: "To a man: 'Bonjour, monsieur' (≈ 'muh-syuh')." },
      tags: ["greeting", "polite"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-nuit", type: "bridge", onlyFor: "es", target: "nuit",
      gloss: { es: "noche", en: "night" },
      distractors: ["noche", "nuite", "nocte"],
      note: { es: "La «ch» española que viene de un «ct» latino suele dar «it» en francés: noche → nuit, leche → lait, ocho → huit." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-paris", type: "bridge", onlyFor: "es", target: "Paris",
      gloss: { es: "París", en: "Paris" },
      distractors: ["Parisse", "Parí", "Pari"],
      note: { es: "La s final no suena (≈ «parí») y el acento cae siempre en la última sílaba." },
      exercises: ["guess", "recall"], tags: ["bridge", "silent-letters"],
    },
  ]),
};
