import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u01",
  lang: "de",
  index: 1,
  cefr: "A0",
  title: { target: "Hallo!", es: "¡Hola!", en: "Hello!" },
  canDo: [
    { es: "Puedo saludar y despedirme, de «du» y de «Sie».", en: "I can say hello and goodbye, with du and with Sie." },
    { es: "Puedo decir mi nombre y preguntar el de otra persona.", en: "I can say my name and ask someone theirs." },
    { es: "Puedo pronunciar ä, ö, ü y ß.", en: "I can pronounce ä, ö, ü and ß." },
  ],
  icon: "👋",
  items: build("de", 1, "A0", [
    // ── Greetings ────────────────────────────────────────────
    {
      id: "hallo", legacyId: "de-hallo", type: "phrase", pos: "phrase", target: "Hallo",
      gloss: { es: "Hola", en: "Hello / Hi" },
      distractors: ["Tschüss", "Danke", "Bitte"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "guten-morgen", legacyId: "de-morgen", type: "phrase", pos: "phrase", target: "Guten Morgen",
      gloss: { es: "Buenos días (por la mañana)", en: "Good morning" },
      distractors: ["Guten Abend", "Gute Nacht", "Guten Tag"],
      note: {
        es: "Hasta las diez u once de la mañana; después se dice «Guten Tag».",
        en: "Until about 10 or 11 a.m.; after that, say 'Guten Tag'.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "guten-tag", legacyId: "de-tag", type: "phrase", pos: "phrase", target: "Guten Tag", register: "formal",
      gloss: { es: "Buenos días / Buenas tardes (formal)", en: "Hello / Good day (polite)" },
      variants: [
        { region: "CH", text: "Grüezi", note: { es: "Saludo suizo.", en: "Swiss greeting." } },
        { region: "S-DE", text: "Grüß Gott", note: { es: "Sur de Alemania.", en: "Southern Germany." } },
        { region: "AT", text: "Grüß Gott", note: { es: "Austria.", en: "Austria." } },
        { region: "DE", text: "Moin", note: { es: "Norte de Alemania.", en: "Northern Germany." } },
      ],
      distractors: ["Guten Abend", "Gute Nacht", "Auf Wiedersehen"],
      note: {
        es: "Regional: en Suiza «Grüezi», en el sur de Alemania y Austria «Grüß Gott», en el norte «Moin».",
        en: "Regional: Switzerland 'Grüezi', southern Germany and Austria 'Grüß Gott', the north 'Moin'.",
      },
      tags: ["greeting", "chunk", "polite"],
    },
    {
      id: "guten-abend", type: "phrase", pos: "phrase", target: "Guten Abend",
      gloss: { es: "Buenas noches (al saludar, desde las seis)", en: "Good evening" },
      distractors: ["Gute Nacht", "Guten Morgen", "Guten Tag"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "gute-nacht", type: "phrase", pos: "phrase", target: "Gute Nacht",
      gloss: { es: "Buenas noches (al irse a dormir)", en: "Good night" },
      errors: [{
        text: "Guten Nacht",
        feedback: { es: "«Nacht» es femenino (die Nacht): «Gute Nacht».", en: "'Nacht' is feminine (die Nacht), so it's 'Gute Nacht'." },
      }],
      distractors: ["Guten Abend", "Guten Morgen", "Guten Tag"],
      note: {
        es: "Solo al despedirse de noche o al irse a dormir; para saludar, «Guten Abend».",
        en: "Only when leaving late or going to bed; to greet someone, say 'Guten Abend'.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "tschuess", legacyId: "de-tschuess", type: "phrase", pos: "phrase", target: "Tschüss", register: "informal",
      gloss: { es: "Chao / Adiós (informal)", en: "Bye (informal)" },
      accept: [{ text: "Tschüs" }, { text: "Ciao" }],
      variants: [
        { region: "AT", text: "Servus" },
        { region: "S-DE", text: "Servus" },
      ],
      distractors: ["Hallo", "Danke", "Bitte"],
      note: {
        es: "Informal. En Austria también «Servus» o «Baba»; en Suiza «Ciao» o «Adieu».",
        en: "Informal. Austria also says 'Servus' or 'Baba'; Switzerland 'Ciao' or 'Adieu'.",
      },
      tags: ["greeting", "chunk", "register"],
    },
    {
      id: "auf-wiedersehen", legacyId: "de-wiedersehen", type: "phrase", pos: "phrase", target: "Auf Wiedersehen", register: "formal",
      gloss: { es: "Adiós (formal)", en: "Goodbye (formal)" },
      variants: [{ region: "AT", text: "Auf Wiederschauen" }, { region: "S-DE", text: "Auf Wiederschauen" }],
      distractors: ["Auf Wiederhören", "Guten Abend", "Tschüss"],
      note: {
        es: "Por teléfono se dice «Auf Wiederhören» (hören = oír).",
        en: "On the phone, say 'Auf Wiederhören' (hören = to hear).",
      },
      tags: ["greeting", "chunk", "register"],
    },
    {
      id: "bis-bald", type: "phrase", pos: "phrase", target: "Bis bald!",
      gloss: { es: "¡Hasta pronto!", en: "See you soon!" },
      accept: [{ text: "Bis später!", verdict: "almost", feedback: { es: "«Bis später» = hasta luego (hoy mismo).", en: "'Bis später' = see you later (today)." } }],
      distractors: ["Bis morgen!", "Bis Montag!", "Bitte bald!"],
      tags: ["greeting", "chunk"],
    },

    // ── Courtesy ─────────────────────────────────────────────
    {
      id: "danke", legacyId: "de-danke", type: "phrase", pos: "phrase", target: "Danke",
      gloss: { es: "Gracias", en: "Thank you / Thanks" },
      accept: [{ text: "Danke schön" }, { text: "Vielen Dank" }, { text: "Danke sehr" }],
      variants: [{ region: "CH", text: "Merci" }, { region: "CH", text: "Merci vielmal" }],
      distractors: ["Bitte", "Hallo", "Tschüss"],
      note: { es: "En Suiza: «Merci vielmal».", en: "Switzerland: 'Merci vielmal'." },
      tags: ["polite", "chunk"],
    },
    {
      id: "bitte", legacyId: "de-bitte", type: "phrase", pos: "phrase", target: "Bitte",
      gloss: { es: "Por favor / De nada", en: "Please / You're welcome" },
      accept: [{ text: "Bitte schön" }, { text: "Bitte sehr" }],
      distractors: ["Danke", "Bitter", "Hallo"],
      note: {
        es: "Una palabra, tres usos: por favor, de nada y «aquí tienes».",
        en: "One word, three jobs: please, you're welcome, and 'here you are'.",
      },
      tags: ["polite", "chunk"],
    },
    {
      id: "entschuldigung", legacyId: "de-entschuldigung", type: "phrase", pos: "phrase", target: "Entschuldigung",
      gloss: { es: "Perdón / Disculpe", en: "Excuse me / Sorry" },
      distractors: ["Entscheidung", "Danke", "Bitte"],
      note: {
        es: "Sirve para llamar la atención («Disculpe…») y para pedir perdón.",
        en: "Use it to get attention ('Excuse me…') and to apologise.",
      },
      tags: ["polite", "chunk"],
    },
    {
      id: "ja", type: "word", pos: "adv", target: "Ja",
      gloss: { es: "Sí", en: "Yes" },
      distractors: ["Nein", "Jein", "Na"],
      note: { es: "No = «Nein». La j alemana suena como «y»: ja ≈ «ya».", en: "No = 'Nein'. German j sounds like English 'y': ja ≈ 'yah'." },
      tags: ["basic"],
    },

    // ── Names ────────────────────────────────────────────────
    {
      id: "wie-heissen-sie", type: "phrase", pos: "phrase", target: "Wie heißen Sie?", register: "formal",
      gloss: { es: "¿Cómo se llama (usted)?", en: "What's your name? (formal)" },
      distractors: ["Wie heißt du?", "Wie geht es Ihnen?", "Woher kommen Sie?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "wie-heisst-du", type: "phrase", pos: "phrase", target: "Wie heißt du?", register: "informal",
      gloss: { es: "¿Cómo te llamas?", en: "What's your name? (informal)" },
      distractors: ["Wie heißen Sie?", "Wie geht's?", "Wo wohnst du?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "ich-heisse", legacyId: "de-heisse", type: "sentence", target: "Ich heiße Anna.",
      gloss: { es: "Me llamo Anna.", en: "My name is Anna." },
      accept: [{ text: "Mein Name ist Anna." }, { text: "Ich bin Anna." }],
      errors: [{
        text: "Ich heißt Anna.",
        feedback: { es: "Con «ich» el verbo termina en -e: ich heiße.", en: "With 'ich' the verb ends in -e: ich heiße." },
      }],
      distractors: ["Ich heißt Anna.", "Ich heißen Anna.", "Ich bin heiße Anna."],
      forms: { ich: "heiße", du: "heißt", "er/sie": "heißt", Sie: "heißen" },
      note: {
        es: "En Suiza la ß se escribe ss: «Ich heisse Anna».",
        en: "In Switzerland ß is written ss: 'Ich heisse Anna'.",
      },
      tags: ["introductions"],
    },
    {
      id: "ich-bin", type: "sentence", target: "Ich bin Lena.",
      gloss: { es: "Soy Lena.", en: "I'm Lena." },
      accept: [{ text: "Ich heiße Lena." }],
      distractors: ["Ich ist Lena.", "Ich bist Lena.", "Ich sein Lena."],
      forms: { ich: "bin", du: "bist", "er/sie/es": "ist", Sie: "sind" },
      note: {
        es: "«sein» (ser/estar): ich bin, du bist, er/sie ist, Sie sind.",
        en: "'sein' (to be): ich bin, du bist, er/sie ist, Sie sind.",
      },
      tags: ["introductions", "sein"],
    },
    {
      id: "freut-mich", type: "phrase", pos: "phrase", target: "Freut mich.",
      gloss: { es: "Mucho gusto.", en: "Nice to meet you." },
      accept: [{ text: "Freut mich sehr." }, { text: "Sehr erfreut." }],
      distractors: ["Bitte schön.", "Gute Nacht.", "Wie bitte?"],
      note: {
        es: "Abreviatura de «Es freut mich» (me alegra). Respuesta: «Freut mich auch».",
        en: "Short for 'Es freut mich' (it pleases me). Reply: 'Freut mich auch.'",
      },
      tags: ["introductions", "chunk"],
    },

    // ── How are you ──────────────────────────────────────────
    {
      id: "wie-gehts", type: "phrase", pos: "phrase", target: "Wie geht's?", register: "informal",
      gloss: { es: "¿Qué tal? / ¿Cómo estás?", en: "How are you? / How's it going?" },
      accept: [{ text: "Wie geht es dir?" }, { text: "Wie gehts?" }],
      distractors: ["Wie heißt du?", "Wie bitte?", "Wo gehst du?"],
      note: { es: "Literalmente «¿cómo va?». Respuesta: «Gut, danke!».", en: "Literally 'how goes it?'. Answer: 'Gut, danke!'" },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "wie-geht-es-ihnen", type: "phrase", pos: "phrase", target: "Wie geht es Ihnen?", register: "formal",
      gloss: { es: "¿Cómo está (usted)?", en: "How are you? (formal)" },
      distractors: ["Wie geht es dir?", "Wie heißen Sie?", "Wie gehen Sie?"],
      note: { es: "«Ihnen» con mayúscula = a usted.", en: "'Ihnen' with a capital I = to you (formal)." },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "gut-danke", type: "sentence", target: "Gut, danke. Und dir?", register: "informal",
      gloss: { es: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?" },
      accept: [{ text: "Gut danke, und dir?" }, { text: "Gut, danke, und dir?" }, { text: "Danke, gut. Und dir?" }, { text: "Gut danke und dir" }],
      distractors: ["Gut, bitte. Und dir?", "Gut, danke. Und ich?", "Gute, danke. Und du?"],
      note: { es: "Con «Sie»: «Gut, danke. Und Ihnen?».", en: "With Sie: 'Gut, danke. Und Ihnen?'" },
      tags: ["introductions"],
    },
    {
      id: "wie-bitte", legacyId: "de-wiebitte", type: "phrase", pos: "phrase", target: "Wie bitte?",
      gloss: { es: "¿Perdón? / ¿Cómo dice?", en: "Sorry? / Pardon? (didn't catch that)" },
      distractors: ["Wo bitte?", "Wie bist du?", "Wer bitte?"],
      note: { es: "Literalmente «¿cómo, por favor?». Es la forma educada de pedir que repitan.", en: "Literally 'how, please?'. The polite way to ask someone to repeat." },
      tags: ["survival", "chunk"],
    },
    {
      id: "verstehe-nicht", legacyId: "de-verstehe", type: "sentence", target: "Ich verstehe das nicht.",
      gloss: { es: "No (lo) entiendo.", en: "I don't understand." },
      accept: [{ text: "Ich verstehe nicht." }, { text: "Das verstehe ich nicht." }],
      errors: [{
        text: "Ich nicht verstehe das.",
        feedback: { es: "«nicht» va después del verbo y del objeto: Ich verstehe das nicht.", en: "'nicht' goes after the verb and the object: Ich verstehe das nicht." },
      }],
      distractors: ["Ich nicht verstehe das.", "Ich stehe das nicht.", "Ich verstehe nichts das."],
      note: {
        es: "«Ich verstehe nicht» es correcto pero suena brusco; con «das» suena natural.",
        en: "'Ich verstehe nicht' is correct but sounds abrupt; adding 'das' sounds natural.",
      },
      tags: ["survival"],
    },

    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-oe", type: "sound", target: "schön",
      gloss: { es: "bonito / lindo", en: "beautiful / nice" },
      pair: ["schon", "schön"], slow: true,
      distractors: ["schon", "schein", "schün"],
      note: {
        es: "ö: di «e» con los labios redondeados como para «o». schön = bonito; schon = ya.",
        en: "ö: say 'ay' with lips rounded as for 'oh'. schön = beautiful; schon = already.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "umlaut"],
    },
    {
      id: "s-ue", type: "sound", target: "Tür",
      gloss: { es: "puerta", en: "door" },
      pair: ["Tier", "Tür"], slow: true,
      distractors: ["Tier", "Tor", "Tur"],
      note: {
        es: "ü: di «i» con los labios en posición de «u». Tür = puerta; Tier = animal.",
        en: "ü: say 'ee' with your lips rounded as for 'oo'. Tür = door; Tier = animal.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "umlaut"],
    },
    {
      id: "s-ae", type: "sound", target: "Käse",
      gloss: { es: "queso", en: "cheese" },
      distractors: ["Kase", "Kehse", "Kässe"],
      note: {
        es: "ä suena como una «e» española: Käse ≈ «quese».",
        en: "ä sounds like the 'e' in 'bed', held long here: Käse.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "umlaut"],
    },
    {
      id: "s-ss", type: "sound", target: "heißen",
      gloss: { es: "llamarse", en: "to be called" },
      distractors: ["heisen", "heizen", "heißsen"],
      note: {
        es: "ß es una «s» fuerte; va tras vocal larga o ei/au: heißen, Straße. En Suiza se escribe ss.",
        en: "ß is a sharp 's', used after long vowels and ei/au: heißen, Straße. Switzerland always writes ss.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "eszett"],
    },

    // ── Pattern + dialogue ───────────────────────────────────
    {
      id: "pat-du-sie", type: "pattern", target: "du / Sie",
      gloss: { es: "tú / usted", en: "informal / formal 'you'" },
      pattern: {
        rule: {
          es: "«du» con amigos, familia, niños y compañeros. «Sie» (siempre con mayúscula) con desconocidos, en tiendas y oficinas; es como «usted», pero el verbo va en la forma -en: Wie heißen Sie?",
          en: "Use du with friends, family, children and classmates. Use Sie (always capitalised) with strangers, in shops and offices; the verb takes the -en form: Wie heißen Sie?",
        },
        table: [
          ["du", "Sie"],
          ["Wie heißt du?", "Wie heißen Sie?"],
          ["Wie geht's? / Wie geht es dir?", "Wie geht es Ihnen?"],
          ["Tschüss", "Auf Wiedersehen"],
        ],
      },
      question: {
        prompt: { es: "En una tienda, le preguntas el nombre al vendedor:", en: "In a shop, you ask the shop assistant his name:" },
        options: ["Wie heißen Sie?", "Wie heißt du?", "Wie heißt Sie?"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "register"],
    },
    {
      id: "dlg-im-kurs", type: "dialogue", target: "Freut mich auch!", register: "informal",
      gloss: { es: "¡Igualmente! (mucho gusto)", en: "Nice to meet you too!" },
      turns: [
        { who: "A", target: "Hallo! Ich bin Lena. Und du?", gloss: { es: "¡Hola! Soy Lena. ¿Y tú?", en: "Hi! I'm Lena. And you?" } },
        { who: "B", target: "Ich heiße Luca. Freut mich!", gloss: { es: "Me llamo Luca. ¡Mucho gusto!", en: "My name is Luca. Nice to meet you!" } },
        { who: "A", target: "Freut mich auch! Wie geht's?", gloss: { es: "¡Igualmente! ¿Qué tal?", en: "Nice to meet you too! How are you?" } },
        { who: "B", target: "Gut, danke. Und dir?", gloss: { es: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?" } },
        { who: "A", target: "Auch gut, danke.", gloss: { es: "También bien, gracias.", en: "Fine too, thanks." } },
      ],
      question: {
        prompt: { es: "¿Cómo se llama el chico?", en: "What's the young man's name?" },
        options: ["Luca", "Lena", "Marco"],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-bald", legacyId: "de-f-bald", type: "bridge", onlyFor: "en", target: "bald",
      gloss: { es: "pronto", en: "soon" },
      question: {
        prompt: { es: "«bald» significa…", en: "'bald' means…" },
        options: [
          { es: "pronto", en: "soon" },
          { es: "calvo", en: "without hair" },
          { es: "audaz", en: "bold" },
          { es: "viejo", en: "old" },
        ],
        answer: 0,
      },
      note: { en: "'Bis bald' = see you soon. Bald (no hair) is 'kahl', or 'eine Glatze haben'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-tag", legacyId: "de-p-tag", type: "bridge", onlyFor: "en", target: "der Tag",
      pos: "noun", gender: "m", plural: "die Tage",
      gloss: { es: "el día", en: "the day" },
      distractors: ["der Dag", "der Tay", "das Tag"],
      note: { en: "English d often = German t: day → Tag, drink → trinken, door → Tür." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
