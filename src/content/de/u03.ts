import type { Unit } from "../schema";
import { build, type Draft } from "../build";

const num = (id: string, target: string, es: string, en: string, distractors: string[], extra: Partial<Draft> = {}): Draft => ({
  id, type: "word", pos: "num", target, gloss: { es, en }, distractors, tags: ["numbers"], ...extra,
});

export const unit: Unit = {
  id: "de-u03",
  lang: "de",
  index: 3,
  cefr: "A1.1",
  title: { target: "Zahlen", es: "Números", en: "Numbers" },
  canDo: [
    { es: "Puedo decir y entender números del 0 al 100.", en: "I can say and understand numbers from 0 to 100." },
    { es: "Puedo decir mi edad y mi número de teléfono.", en: "I can give my age and my phone number." },
    { es: "Puedo hacer preguntas de sí/no.", en: "I can ask yes/no questions." },
  ],
  icon: "🔢",
  items: build("de", 3, "A1.1", [
    // ── Numbers ──────────────────────────────────────────────
    num("eins", "eins", "uno (1)", "one (1)", ["eis", "elf", "einst"], {
      note: { es: "Al contar: eins; delante de un sustantivo: ein/eine (ein Kaffee).", en: "Counting: eins; before a noun: ein/eine (ein Kaffee)." },
    }),
    num("zwei", "zwei", "dos (2)", "two (2)", ["drei", "zwölf", "zwie"], {
      legacyId: "de-p-zwei",
      accept: [{ text: "zwo" }],
      note: { es: "Por teléfono se oye «zwo», para no confundirlo con «drei».", en: "On the phone you'll hear 'zwo', so it isn't confused with 'drei'." },
    }),
    num("drei", "drei", "tres (3)", "three (3)", ["zwei", "dreißig", "drai"], {
      legacyId: "de-p-drei",
      note: { en: "English th often = German d: three → drei, thank → danken, thing → Ding." },
    }),
    num("vier", "vier", "cuatro (4)", "four (4)", ["für", "fier", "vierzig"], {
      note: { es: "La v suena «f»: vier ≈ «fir».", en: "v sounds like f: vier ≈ 'fear'." },
    }),
    num("fuenf", "fünf", "cinco (5)", "five (5)", ["fünfzehn", "vier", "elf"]),
    num("sechs", "sechs", "seis (6)", "six (6)", ["sechzig", "sieben", "acht"], {
      note: { es: "chs suena «ks» y la s inicial zumba como una «z» inglesa: sechs ≈ «zeks».", en: "chs sounds like 'ks': sechs ≈ 'zeks'." },
    }),
    num("sieben", "sieben", "siete (7)", "seven (7)", ["siebzig", "sieb", "neben"]),
    num("acht", "acht", "ocho (8)", "eight (8)", ["achtzig", "echt", "nach"]),
    num("neun", "neun", "nueve (9)", "nine (9)", ["neu", "nein", "neunzig"], {
      note: { es: "eu suena «oi»: neun ≈ «noin».", en: "eu sounds like 'oy': neun ≈ 'noyn'." },
    }),
    num("zehn", "zehn", "diez (10)", "ten (10)", ["zehnte", "zwanzig", "sehen"]),
    num("elf", "elf", "once (11)", "eleven (11)", ["eins", "zwölf", "elfte"]),
    num("zwoelf", "zwölf", "doce (12)", "twelve (12)", ["zwanzig", "zwei", "zwölfte"]),
    {
      id: "pat-zehn", type: "pattern", target: "dreizehn, sechzehn, siebzehn",
      gloss: { es: "13–19: unidad + zehn", en: "13–19: unit + zehn" },
      pattern: {
        rule: {
          es: "13–19 = unidad + zehn: dreizehn, vierzehn. Ojo: sechzehn (sin -s) y siebzehn (sin -en).",
          en: "13–19 = unit + zehn: dreizehn, vierzehn. Watch out: sechzehn (no -s) and siebzehn (no -en).",
        },
        table: [["13", "dreizehn"], ["14", "vierzehn"], ["16", "sechzehn"], ["17", "siebzehn"], ["19", "neunzehn"]],
      },
      question: {
        prompt: { es: "¿Cómo se dice 16?", en: "How do you say 16?" },
        options: ["sechzehn", "sechszehn", "zehnsechs", "sechzig"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "numbers"],
    },
    num("zwanzig", "zwanzig", "veinte (20)", "twenty (20)", ["zwölf", "zweizig", "zwanzigste"]),
    {
      id: "pat-einundzwanzig", type: "pattern", target: "einundzwanzig",
      gloss: { es: "21: «uno y veinte»", en: "21: 'one-and-twenty'" },
      pattern: {
        rule: {
          es: "Desde 21 se dice primero la unidad: einundzwanzig («uno y veinte»), dreiundvierzig (43). Se escribe todo junto.",
          en: "From 21 on, say the unit first: einundzwanzig ('one-and-twenty'), dreiundvierzig (43). It's written as one word.",
        },
        table: [["21", "einundzwanzig"], ["35", "fünfunddreißig"], ["48", "achtundvierzig"], ["99", "neunundneunzig"]],
      },
      question: {
        prompt: { es: "¿Cómo se dice 32?", en: "How do you say 32?" },
        options: ["zweiunddreißig", "dreiundzwanzig", "dreißigzwei", "zweidreißig"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "numbers"],
    },
    num("dreissig", "dreißig", "treinta (30)", "thirty (30)", ["dreizig", "dreizehn", "dreißigste"], {
      note: { es: "Es la única decena con ß; las demás terminan en -zig: vierzig.", en: "The only tens word with ß; the others end in -zig: vierzig." },
    }),
    num("hundert", "hundert", "cien (100)", "a hundred (100)", ["tausend", "hundertste", "hunderte"], {
      accept: [{ text: "einhundert" }],
    }),

    // ── Age ──────────────────────────────────────────────────
    {
      id: "wie-alt", type: "phrase", pos: "phrase", target: "Wie alt bist du?", register: "informal",
      gloss: { es: "¿Cuántos años tienes?", en: "How old are you? (informal)" },
      errors: [{
        text: "Wie alt hast du?",
        feedback: { es: "En alemán la edad va con «sein» (ser), no con «haben»: Wie alt bist du?", en: "Age uses 'sein' (to be): Wie alt bist du?" },
      }],
      distractors: ["Wie alt hast du?", "Wie viel bist du?", "Wie alt sind du?"],
      note: { es: "Con «Sie»: «Wie alt sind Sie?».", en: "Formal: 'Wie alt sind Sie?'" },
      tags: ["age", "register", "chunk"],
    },
    {
      id: "ich-bin-jahre", type: "sentence", target: "Ich bin dreißig Jahre alt.",
      gloss: { es: "Tengo treinta años.", en: "I'm thirty (years old)." },
      accept: [{ text: "Ich bin dreißig." }],
      errors: [{
        text: "Ich habe dreißig Jahre.",
        feedback: { es: "La edad va con «sein»: Ich bin dreißig (Jahre alt).", en: "Age uses 'sein': Ich bin dreißig (Jahre alt)." },
      }],
      distractors: ["Ich habe dreißig Jahre.", "Ich bin dreißig Jahr alt.", "Ich bin alt dreißig Jahre."],
      tags: ["age"],
    },

    // ── Phone & spelling ─────────────────────────────────────
    {
      id: "telefonnummer", type: "word", pos: "noun", target: "die Telefonnummer", gender: "f", plural: "die Telefonnummern",
      gloss: { es: "el número de teléfono", en: "the phone number" },
      distractors: ["der Telefonnummer", "die Telefonzelle", "das Telefonbuch"],
      note: {
        es: "Las palabras compuestas toman el género de la última parte: die Nummer → die Telefonnummer.",
        en: "Compound nouns take the gender of the last part: die Nummer → die Telefonnummer.",
      },
      tags: ["contact", "goethe-a1"],
    },
    {
      id: "ihre-nummer", type: "phrase", pos: "phrase", target: "Wie ist Ihre Telefonnummer?", register: "formal",
      gloss: { es: "¿Cuál es su número de teléfono?", en: "What's your phone number? (formal)" },
      accept: [{
        text: "Was ist Ihre Telefonnummer?", verdict: "almost",
        feedback: { es: "Se oye, pero lo estándar es «Wie ist…?» para números y nombres.", en: "People say it, but standard German asks 'Wie ist…?' for numbers and names." },
      }],
      distractors: ["Wie ist deine Telefonnummer?", "Wie ist Ihr Telefonnummer?", "Wie viel ist Ihre Telefonnummer?"],
      note: { es: "Con «du»: «Wie ist deine Telefonnummer?».", en: "With du: 'Wie ist deine Telefonnummer?'" },
      tags: ["contact", "register", "chunk"],
    },
    {
      id: "handy", legacyId: "de-f-handy", type: "word", pos: "noun", target: "das Handy", gender: "n", plural: "die Handys",
      gloss: { es: "el celular (móvil)", en: "the mobile / cell phone" },
      distractors: ["die Hand", "das Hemd", "der Handschuh"],
      note: {
        es: "También «das Smartphone».",
        en: "A false friend: it isn't 'handy' (useful). In Switzerland some still say 'das Natel'.",
      },
      tags: ["contact", "false-friend"],
    },
    {
      id: "buchstabieren", type: "word", pos: "verb", target: "buchstabieren",
      gloss: { es: "deletrear", en: "to spell (out)" },
      distractors: ["buchstäblich", "bestellen", "studieren"],
      example: {
        target: "Können Sie das bitte buchstabieren?",
        gloss: { es: "¿Puede deletrearlo, por favor?", en: "Could you spell that, please?" },
      },
      tags: ["contact", "verb", "goethe-a1"],
    },
    {
      id: "pat-ja-nein", type: "pattern", target: "Wohnst du in Wien?",
      gloss: { es: "preguntas de sí/no: el verbo primero", en: "yes/no questions: verb first" },
      pattern: {
        rule: {
          es: "En las preguntas de sí/no el verbo va primero: Du wohnst in Wien. → Wohnst du in Wien?",
          en: "In yes/no questions the verb goes first: Du wohnst in Wien. → Wohnst du in Wien?",
        },
        table: [["Du wohnst in Wien.", "Wohnst du in Wien?"], ["Sie sprechen Deutsch.", "Sprechen Sie Deutsch?"], ["Er ist zwanzig.", "Ist er zwanzig?"]],
      },
      question: {
        prompt: { es: "Haz la pregunta: «Du hast ein Handy.»", en: "Make it a question: 'Du hast ein Handy.'" },
        options: ["Hast du ein Handy?", "Hast ein Handy du?", "Du ein Handy hast?"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "word-order"],
    },

    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-z", type: "sound", target: "Zahl",
      gloss: { es: "número (cifra)", en: "number (figure)" },
      distractors: ["Saal", "Tal", "Zahn"],
      note: { es: "La z alemana siempre suena «ts»: Zahl, zehn, zwei.", en: "German z always sounds like 'ts': Zahl, zehn, zwei." },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },

    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-nummer", type: "listening", target: "Meine Nummer ist null eins sieben neun, vier fünf, drei zwei.",
      gloss: { es: "Mi número es 0179 45 32.", en: "My number is 0179 45 32." },
      question: {
        prompt: { es: "¿Cuál es el número?", en: "What's the number?" },
        options: [
          { es: "0179 45 32", en: "0179 45 32" },
          { es: "0197 45 32", en: "0197 45 32" },
          { es: "0179 54 32", en: "0179 54 32" },
          { es: "0179 45 23", en: "0179 45 23" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "numbers"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-zehn", legacyId: "de-p-zehn", type: "bridge", onlyFor: "en", target: "zehn",
      gloss: { es: "diez", en: "ten" },
      distractors: ["tehn", "sehn", "tenn"],
      note: { en: "English t often = German z (said 'ts'): ten → zehn, two → zwei, tongue → Zunge." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-fast", legacyId: "de-f-fast", type: "bridge", onlyFor: "en", target: "fast",
      gloss: { es: "casi", en: "almost" },
      question: {
        prompt: { es: "«fast» significa…", en: "'fast' means…" },
        options: [
          { es: "casi", en: "almost" },
          { es: "rápido", en: "quick" },
          { es: "firmemente", en: "firmly" },
          { es: "en ayunas", en: "fasting" },
        ],
        answer: 0,
      },
      note: { en: "'Er ist fast zwanzig' = he's almost twenty. Quick is 'schnell'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
