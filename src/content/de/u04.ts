import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u04",
  lang: "de",
  index: 4,
  cefr: "A1.1",
  title: { target: "Familie", es: "La familia", en: "Family" },
  canDo: [
    { es: "Puedo presentar a mi familia y preguntar por la de otra persona.", en: "I can introduce my family and ask about someone else's." },
    { es: "Aprendo cada sustantivo con der, die o das.", en: "I learn every noun with der, die or das." },
    { es: "Sé usar mein/meine y el verbo «haben».", en: "I can use mein/meine and the verb 'haben'." },
  ],
  icon: "👪",
  items: build("de", 4, "A1.1", [
    // ── Family nouns ─────────────────────────────────────────
    {
      id: "familie", type: "word", pos: "noun", target: "die Familie", gender: "f", plural: "die Familien",
      gloss: { es: "la familia", en: "the family" },
      distractors: ["der Familie", "die Firma", "die Familien"],
      note: { es: "Cuatro sílabas: Fa-mi-li-e.", en: "Four syllables: Fa-mi-li-e." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "mutter", type: "word", pos: "noun", target: "die Mutter", gender: "f", plural: "die Mütter",
      gloss: { es: "la madre", en: "the mother" },
      distractors: ["der Mutter", "die Butter", "die Mütter"],
      tags: ["family", "goethe-a1"],
    },
    {
      id: "vater", type: "word", pos: "noun", target: "der Vater", gender: "m", plural: "die Väter",
      gloss: { es: "el padre", en: "the father" },
      distractors: ["die Vater", "das Wasser", "der Väter"],
      note: { es: "La v suena «f»: Vater ≈ «fáter».", en: "v sounds like f: Vater ≈ 'fah-ter'." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "eltern", type: "word", pos: "other", target: "die Eltern", plural: "die Eltern",
      gloss: { es: "los padres (padre y madre)", en: "the parents" },
      distractors: ["die Älteren", "die Geschwister", "die Kinder"],
      note: { es: "Solo existe en plural: meine Eltern.", en: "Plural only: meine Eltern." },
      tags: ["family", "plural-only", "goethe-a1"],
    },
    {
      id: "bruder", type: "word", pos: "noun", target: "der Bruder", gender: "m", plural: "die Brüder",
      gloss: { es: "el hermano", en: "the brother" },
      distractors: ["die Bruder", "der Vater", "die Brüder"],
      tags: ["family", "goethe-a1"],
    },
    {
      id: "schwester", type: "word", pos: "noun", target: "die Schwester", gender: "f", plural: "die Schwestern",
      gloss: { es: "la hermana", en: "the sister" },
      distractors: ["der Schwester", "die Mutter", "die Schwestern"],
      tags: ["family", "goethe-a1"],
    },
    {
      id: "geschwister", type: "word", pos: "other", target: "die Geschwister", plural: "die Geschwister",
      gloss: { es: "los hermanos (hermanos y hermanas)", en: "the siblings (brothers and sisters)" },
      distractors: ["die Schwestern", "die Eltern", "das Gewitter"],
      note: {
        es: "Como «hermanos» en español: incluye hermanos y hermanas.",
        en: "'Hast du Geschwister?' = Do you have any brothers or sisters?",
      },
      tags: ["family", "plural-only", "goethe-a1"],
    },
    {
      id: "kind", legacyId: "de-f-kind", type: "word", pos: "noun", target: "das Kind", gender: "n", plural: "die Kinder",
      gloss: { es: "el niño / el hijo (de cualquier sexo)", en: "the child" },
      distractors: ["der Kind", "das Rind", "die Kinder"],
      note: {
        es: "Kind es neutro y sirve para niños y niñas.",
        en: "False friend: Kind = child. 'Kind' (nice) is 'nett' or 'freundlich'.",
      },
      tags: ["family", "false-friend", "goethe-a1"],
    },
    {
      id: "sohn", type: "word", pos: "noun", target: "der Sohn", gender: "m", plural: "die Söhne",
      gloss: { es: "el hijo", en: "the son" },
      distractors: ["die Sohn", "die Sonne", "der Söhne"],
      tags: ["family", "goethe-a1"],
    },
    {
      id: "tochter", type: "word", pos: "noun", target: "die Tochter", gender: "f", plural: "die Töchter",
      gloss: { es: "la hija", en: "the daughter" },
      distractors: ["der Tochter", "die Mutter", "die Töchter"],
      tags: ["family", "goethe-a1"],
    },
    {
      id: "oma", type: "word", pos: "noun", target: "die Oma", gender: "f", plural: "die Omas",
      gloss: { es: "la abuela", en: "grandma" },
      distractors: ["der Opa", "die Mama", "die Omas"],
      note: { es: "Más formal: die Großmutter.", en: "More formal: die Großmutter." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "opa", type: "word", pos: "noun", target: "der Opa", gender: "m", plural: "die Opas",
      gloss: { es: "el abuelo", en: "grandpa" },
      distractors: ["die Oma", "der Onkel", "der Papa"],
      note: { es: "Más formal: der Großvater.", en: "More formal: der Großvater." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "mann", type: "word", pos: "noun", target: "der Mann", gender: "m", plural: "die Männer",
      gloss: { es: "el hombre / el marido", en: "the man / the husband" },
      distractors: ["die Mann", "der Mond", "die Männer"],
      note: { es: "mein Mann = mi marido; meine Frau = mi esposa.", en: "mein Mann = my husband; meine Frau = my wife." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "frau", type: "word", pos: "noun", target: "die Frau", gender: "f", plural: "die Frauen",
      gloss: { es: "la mujer / la esposa", en: "the woman / the wife" },
      distractors: ["der Frau", "die Freundin", "die Frauen"],
      note: { es: "También es «señora»: Frau Weber.", en: "Also the title 'Mrs/Ms': Frau Weber." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "maedchen", type: "word", pos: "noun", target: "das Mädchen", gender: "n", plural: "die Mädchen",
      gloss: { es: "la chica / la niña", en: "the girl" },
      errors: [{
        text: "die Mädchen",
        feedback: { es: "En singular es neutro: das Mädchen («die Mädchen» es el plural).", en: "Singular is neuter: das Mädchen ('die Mädchen' is the plural)." },
      }],
      distractors: ["die Mädchen", "der Mädchen", "das Märchen"],
      note: {
        es: "¡Neutro! Todas las palabras en -chen son «das», aunque sea una chica.",
        en: "Neuter! Every noun ending in -chen is 'das', even a girl.",
      },
      tags: ["family", "gender", "goethe-a1"],
    },
    {
      id: "verheiratet", type: "word", pos: "adj", target: "verheiratet",
      gloss: { es: "casado/a", en: "married" },
      distractors: ["geheiratet", "verhaftet", "verheiratest"],
      note: { es: "Tras «sein» el adjetivo no cambia: er ist verheiratet, sie ist verheiratet.", en: "After 'sein' the adjective doesn't change: er/sie ist verheiratet." },
      tags: ["family", "goethe-a1"],
    },
    {
      id: "arbeit", legacyId: "de-arbeit", type: "word", pos: "noun", target: "die Arbeit", gender: "f", plural: "die Arbeiten",
      gloss: { es: "el trabajo", en: "work / the job" },
      distractors: ["der Arbeit", "der Arbeiter", "die Abfahrt"],
      tags: ["work", "goethe-a1"],
    },
    {
      id: "chef", legacyId: "de-f-chef", type: "word", pos: "noun", target: "der Chef", gender: "m", plural: "die Chefs",
      gloss: { es: "el jefe", en: "the boss" },
      distractors: ["der Koch", "der Kellner", "das Schaf"],
      note: {
        es: "Ojo: Chef = jefe. El cocinero es «der Koch».",
        en: "False friend: Chef = boss. A cook is 'der Koch'.",
      },
      tags: ["work", "false-friend"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "das-ist-meine-mutter", type: "sentence", target: "Das ist meine Mutter.",
      gloss: { es: "Esta es mi madre.", en: "This is my mother." },
      errors: [{
        text: "Das ist mein Mutter.",
        feedback: { es: "Mutter es femenino (die), así que «meine»: meine Mutter.", en: "Mutter is feminine (die), so it's 'meine': meine Mutter." },
      }],
      distractors: ["Das ist mein Mutter.", "Das sind meine Mutter.", "Das meine Mutter ist."],
      tags: ["family"],
    },
    {
      id: "hast-du-geschwister", type: "phrase", pos: "phrase", target: "Hast du Geschwister?", register: "informal",
      gloss: { es: "¿Tienes hermanos?", en: "Do you have any brothers or sisters?" },
      distractors: ["Hat du Geschwister?", "Bist du Geschwister?", "Hast du Schwester?"],
      note: { es: "Con «Sie»: «Haben Sie Geschwister?».", en: "With Sie: 'Haben Sie Geschwister?'" },
      tags: ["family", "register", "chunk"],
    },
    {
      id: "ich-habe-schwester", type: "sentence", target: "Ich habe eine Schwester und zwei Brüder.",
      gloss: { es: "Tengo una hermana y dos hermanos.", en: "I have a sister and two brothers." },
      errors: [{
        text: "Ich habe eine Schwester und zwei Bruder.",
        feedback: { es: "El plural de Bruder lleva diéresis: die Brüder.", en: "The plural of Bruder has an umlaut: die Brüder." },
      }],
      distractors: ["Ich habe ein Schwester und zwei Brüder.", "Ich bin eine Schwester und zwei Brüder.", "Ich habe eine Schwester und zwei Bruders."],
      tags: ["family", "haben"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-der-die-das", type: "pattern", target: "der · die · das",
      gloss: { es: "los tres géneros", en: "the three genders" },
      pattern: {
        rule: {
          es: "Cada sustantivo tiene género: der (masculino), die (femenino), das (neutro). Muchas veces no es lógico (das Mädchen), así que aprende siempre el artículo con la palabra. Pistas: -chen = das; -ung, -heit = die.",
          en: "Every noun has a gender: der (masculine), die (feminine), das (neuter). It's often not logical (das Mädchen), so always learn the article with the noun. Hints: -chen = das; -ung, -heit = die.",
        },
        table: [["der", "die", "das"], ["der Vater", "die Mutter", "das Kind"], ["der Sohn", "die Tochter", "das Mädchen"]],
      },
      question: {
        prompt: { es: "¿Qué artículo? «___ Kind»", en: "Which article? '___ Kind'" },
        options: ["das", "der", "die"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "gender"],
    },
    {
      id: "pat-mein-meine", type: "pattern", target: "mein · meine",
      gloss: { es: "mi / mis", en: "my" },
      pattern: {
        rule: {
          es: "«mein» con palabras der y das (mein Vater, mein Kind); «meine» con palabras die y en plural (meine Mutter, meine Eltern). «dein/deine» (tu) funciona igual.",
          en: "'mein' with der and das nouns (mein Vater, mein Kind); 'meine' with die nouns and plurals (meine Mutter, meine Eltern). 'dein/deine' (your) works the same way.",
        },
        table: [["der", "mein Vater"], ["das", "mein Kind"], ["die", "meine Mutter"], ["plural", "meine Eltern"]],
      },
      question: {
        prompt: { es: "Completa: «Das ist ___ Schwester.»", en: "Complete: 'Das ist ___ Schwester.'" },
        options: ["meine", "mein", "meinen", "meiner"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "possessive"],
    },
    {
      id: "pat-haben", type: "pattern", target: "ich habe, du hast, er hat",
      gloss: { es: "haben (tener)", en: "haben (to have)" },
      forms: { ich: "habe", du: "hast", "er/sie/es": "hat", Sie: "haben" },
      pattern: {
        rule: {
          es: "haben (tener) es irregular: ich habe, du hast, er/sie/es hat, Sie haben.",
          en: "haben (to have) is irregular: ich habe, du hast, er/sie/es hat, Sie haben.",
        },
        table: [["ich", "habe"], ["du", "hast"], ["er / sie / es", "hat"], ["Sie", "haben"]],
      },
      question: {
        prompt: { es: "Completa: «Lena ___ zwei Kinder.»", en: "Complete: 'Lena ___ zwei Kinder.'" },
        options: ["hat", "hast", "habt", "haben"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "haben"],
    },

    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-ch", type: "sound", target: "Tochter",
      gloss: { es: "hija", en: "daughter" },
      distractors: ["Tocher", "Tokter", "Tochtor"],
      note: {
        es: "ch tras a, o, u suena como la «j» española (Tochter, acht); tras e, i, ä, ö, ü es más suave (ich, Mädchen).",
        en: "ch after a, o, u is the throaty sound of Scottish 'loch' (Tochter, acht); after e, i, ä, ö, ü it's softer, like the 'h' in 'huge' (ich, Mädchen).",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },

    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-familie", type: "listening", target: "Das ist meine Familie: mein Mann Marco, unsere Tochter Lena und unser Sohn Luca.",
      gloss: {
        es: "Esta es mi familia: mi marido Marco, nuestra hija Lena y nuestro hijo Luca.",
        en: "This is my family: my husband Marco, our daughter Lena and our son Luca.",
      },
      question: {
        prompt: { es: "¿Quién es Luca?", en: "Who is Luca?" },
        options: [
          { es: "El hijo", en: "The son" },
          { es: "El marido", en: "The husband" },
          { es: "El hermano", en: "The brother" },
          { es: "El abuelo", en: "The grandfather" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "family"],
    },

    // ── Bridge (en) ──────────────────────────────────────────
    {
      id: "br-haben", legacyId: "de-p-haben", type: "bridge", onlyFor: "en", target: "haben",
      gloss: { es: "tener", en: "to have" },
      distractors: ["haven", "hafen", "habben"],
      note: { en: "English v often = German b: have → haben, give → geben, live → leben." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
