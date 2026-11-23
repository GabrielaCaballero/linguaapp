import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u03",
  lang: "fr",
  index: 3,
  cefr: "A1.1",
  title: { target: "Les nombres", es: "Los números", en: "Numbers" },
  canDo: [
    { es: "Puedo contar, decir mi edad y dar un número de teléfono.", en: "I can count, say my age and give a phone number." },
    { es: "Puedo entender los números grandes como 70, 80 y 90.", en: "I can understand tricky numbers like 70, 80 and 90." },
    { es: "Sé usar «avoir» y hacer preguntas con «est-ce que».", en: "I can use avoir and ask questions with est-ce que." },
  ],
  icon: "🔢",
  items: build("fr", 3, "A1.1", [
    // ── Numbers ──────────────────────────────────────────────
    { id: "un", type: "word", pos: "num", target: "un", gloss: { es: "uno (1)", en: "one (1)" }, distractors: ["une", "on", "huit"], note: { es: "Con sustantivos femeninos: une (une heure).", en: "With feminine nouns: une (une heure)." }, tags: ["numbers"] },
    { id: "deux", type: "word", pos: "num", target: "deux", gloss: { es: "dos (2)", en: "two (2)" }, distractors: ["doux", "douze", "de"], note: { es: "La x no suena, salvo en liaison: deux amis ≈ «døzamí».", en: "The x is silent except in liaison: deux amis ≈ 'duh-za-mee'." }, tags: ["numbers"] },
    { id: "trois", type: "word", pos: "num", target: "trois", gloss: { es: "tres (3)", en: "three (3)" }, distractors: ["treize", "troi", "trente"], tags: ["numbers"] },
    { id: "six", type: "word", pos: "num", target: "six", gloss: { es: "seis (6)", en: "six (6)" }, distractors: ["seize", "dix", "cinq"], note: { es: "Solo suena «sis»; delante de consonante, «si»: six livres.", en: "Said 'sees' on its own; before a consonant, 'see': six livres." }, tags: ["numbers"] },
    { id: "dix", type: "word", pos: "num", target: "dix", gloss: { es: "diez (10)", en: "ten (10)" }, distractors: ["six", "deux", "dés"], tags: ["numbers"] },
    { id: "vingt", type: "word", pos: "num", target: "vingt", gloss: { es: "veinte (20)", en: "twenty (20)" }, distractors: ["vin", "vent", "trente"], note: { es: "Suena como «vin» (vino): la g y la t no suenan.", en: "Sounds like 'vin' (wine): the g and t are silent." }, tags: ["numbers"] },
    {
      id: "soixante-dix", type: "word", pos: "num", target: "soixante-dix",
      gloss: { es: "setenta (70)", en: "seventy (70)" },
      variants: [{ region: "CH", text: "septante", note: { es: "En Bélgica y Suiza se dice «septante».", en: "In Belgium and Switzerland people say 'septante'." } }],
      distractors: ["soixante", "soixante-douze", "quatre-vingts"],
      note: { es: "Literalmente «sesenta y diez»; 71 = soixante et onze, 72 = soixante-douze.", en: "Literally 'sixty-ten'; 71 = soixante et onze, 72 = soixante-douze." },
      tags: ["numbers"],
    },
    {
      id: "quatre-vingts", type: "word", pos: "num", target: "quatre-vingts",
      gloss: { es: "ochenta (80)", en: "eighty (80)" },
      variants: [{ region: "CH", text: "huitante", note: { es: "En partes de Suiza: «huitante».", en: "In parts of Switzerland: 'huitante'." } }],
      accept: [{ text: "quatre-vingt", verdict: "almost", feedback: { es: "80 lleva s: quatre-vingts (pero 81 = quatre-vingt-un).", en: "80 takes an s: quatre-vingts (but 81 = quatre-vingt-un)." } }],
      distractors: ["quatre-vingt-dix", "quarante", "quatorze"],
      note: { es: "Literalmente «cuatro veintes»; 90 = quatre-vingt-dix (cuatro veintes y diez).", en: "Literally 'four twenties'; 90 = quatre-vingt-dix (four twenties and ten)." },
      tags: ["numbers"],
    },
    { id: "cent", type: "word", pos: "num", target: "cent", gloss: { es: "cien (100)", en: "a hundred (100)" }, distractors: ["sans", "cinq", "mille"], tags: ["numbers"] },
    // ── Avoir, age, questions ────────────────────────────────
    {
      id: "avoir", type: "word", pos: "verb", target: "avoir",
      gloss: { es: "tener / haber", en: "to have" },
      forms: { je: "ai", tu: "as", "il/elle": "a", nous: "avons", vous: "avez", "ils/elles": "ont" },
      distractors: ["avec", "avant", "voir"],
      tags: ["verbs", "present"],
    },
    {
      id: "jai-trente-ans", type: "sentence", target: "J'ai trente ans.",
      gloss: { es: "Tengo treinta años.", en: "I'm thirty (years old)." },
      errors: [{ text: "Je suis trente ans.", feedback: { es: "La edad va con «avoir», como en español: j'ai trente ans.", en: "Age uses avoir ('have'), not être: j'ai trente ans." }, ruleId: "fr-g-avoir" }],
      distractors: ["suis", "as", "années"],
      tags: ["age"],
    },
    {
      id: "tu-as-quel-age", type: "phrase", pos: "phrase", target: "Tu as quel âge ?", register: "informal",
      gloss: { es: "¿Cuántos años tienes?", en: "How old are you? (informal)" },
      accept: [{ text: "Quel âge as-tu ?" }, { text: "Quel âge tu as ?" }],
      distractors: ["Vous avez quel âge ?", "Tu es quel âge ?", "Tu as combien ?"],
      tags: ["age", "register", "chunk"],
    },
    {
      id: "vous-avez-quel-age", type: "phrase", pos: "phrase", target: "Vous avez quel âge ?", register: "formal",
      gloss: { es: "¿Cuántos años tiene (usted)?", en: "How old are you? (formal)" },
      accept: [{ text: "Quel âge avez-vous ?" }],
      distractors: ["Tu as quel âge ?", "Vous êtes quel âge ?", "Vous avez quelle âge ?"],
      tags: ["age", "register", "chunk"],
    },
    {
      id: "numero", type: "word", pos: "noun", target: "le numéro de téléphone", gender: "m", plural: "les numéros de téléphone",
      gloss: { es: "el número de teléfono", en: "the phone number" },
      accept: [{ text: "le numéro" }],
      distractors: ["la numéro de téléphone", "le nombre de téléphone", "le portable"],
      note: { es: "«numéro» es un número que identifica algo; «nombre» es una cantidad.", en: "'numéro' identifies something (phone, house); 'nombre' is a quantity." },
      tags: ["numbers", "phone"],
    },
    {
      id: "portable", type: "word", pos: "noun", target: "le portable", gender: "m", plural: "les portables",
      gloss: { es: "el celular / el móvil", en: "the mobile / cell phone" },
      distractors: ["la portable", "le portail", "la porte"],
      tags: ["phone"],
    },
    {
      id: "combien", type: "word", pos: "adv", target: "combien",
      gloss: { es: "cuánto/a", en: "how much / how many" },
      distractors: ["comment", "combat", "comme"],
      note: { es: "Ça coûte combien ? = ¿Cuánto cuesta?", en: "Ça coûte combien ? = How much is it?" },
      tags: ["questions", "numbers"],
    },
    {
      id: "ca-coute-combien", type: "phrase", pos: "phrase", target: "Ça coûte combien ?",
      gloss: { es: "¿Cuánto cuesta?", en: "How much is it?" },
      accept: [{ text: "Combien ça coûte ?" }, { text: "C'est combien ?" }],
      distractors: ["Ça coûte comment ?", "Ça compte combien ?", "Combien ça va ?"],
      tags: ["questions", "shopping", "chunk"],
    },
    {
      id: "jai-deux-freres", type: "sentence", target: "J'ai deux frères.",
      gloss: { es: "Tengo dos hermanos.", en: "I have two brothers." },
      distractors: ["ai", "frère", "sont"],
      note: { es: "La s del plural no suena: frère y frères se pronuncian igual.", en: "The plural s is silent: frère and frères sound the same." },
      tags: ["family", "numbers"],
    },
    {
      id: "est-ce-que-tu-as", type: "sentence", target: "Est-ce que tu as un stylo ?", register: "informal",
      gloss: { es: "¿Tienes una pluma (un bolígrafo)?", en: "Do you have a pen?" },
      accept: [{ text: "Tu as un stylo ?" }, { text: "As-tu un stylo ?" }],
      distractors: ["es", "une", "avez"],
      tags: ["questions"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-avoir", type: "pattern", target: "j'ai, tu as, il a…",
      gloss: { es: "el verbo «avoir» (tener)", en: "the verb avoir (to have)" },
      pattern: {
        rule: {
          es: "«avoir» es irregular: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Se usa para la edad (j'ai vingt ans) y para el hambre, la sed, el frío (j'ai faim).",
          en: "avoir is irregular: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. French uses it for age (j'ai vingt ans) and for hunger, thirst and cold (j'ai faim).",
        },
        table: [["j'ai", "nous avons"], ["tu as", "vous avez"], ["il / elle a", "ils / elles ont"]],
      },
      question: {
        prompt: { es: "Completa: «Elles ___ un chat.»", en: "Complete: 'Elles ___ un chat.'" },
        options: ["ont", "sont", "avez", "as"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-avoir"], tags: ["grammar", "present"],
    },
    {
      id: "tab-avoir", type: "paradigm", target: "avoir — présent", spoken: "avoir",
      gloss: { es: "«avoir» (tener) en presente", en: "avoir (to have) — present" },
      grammar: ["fr-g-avoir"],
      paradigm: {
        caption: { es: "Conjuga «avoir» en presente", en: "Conjugate avoir in the present tense" },
        cells: [
          { label: "j'", answer: "ai", ruleId: "fr-g-avoir" },
          { label: "tu", answer: "as", ruleId: "fr-g-avoir" },
          { label: "il / elle", answer: "a", ruleId: "fr-g-avoir" },
          { label: "nous", answer: "avons", ruleId: "fr-g-avoir" },
          { label: "vous", answer: "avez", ruleId: "fr-g-avoir" },
          { label: "ils / elles", answer: "ont", ruleId: "fr-g-avoir" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-nombres", type: "pattern", target: "soixante-dix · quatre-vingts · quatre-vingt-dix",
      gloss: { es: "los números del 70 al 99", en: "numbers 70 to 99" },
      pattern: {
        rule: {
          es: "Después del 60 se cuenta por veintes: 70 = 60 + 10 (soixante-dix), 80 = 4 × 20 (quatre-vingts), 90 = 4 × 20 + 10 (quatre-vingt-dix). 21, 31… 71 llevan «et»: vingt et un.",
          en: "After 60 French counts in twenties: 70 = 60 + 10 (soixante-dix), 80 = 4 × 20 (quatre-vingts), 90 = 4 × 20 + 10 (quatre-vingt-dix). 21, 31… 71 take 'et': vingt et un.",
        },
        table: [["70", "soixante-dix"], ["75", "soixante-quinze"], ["80", "quatre-vingts"], ["93", "quatre-vingt-treize"]],
      },
      question: {
        prompt: { es: "¿Qué número es «quatre-vingt-dix-sept»?", en: "Which number is 'quatre-vingt-dix-sept'?" },
        options: ["97", "87", "77", "47"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-nombres"], tags: ["grammar", "numbers"],
    },
    {
      id: "pat-questions", type: "pattern", target: "Tu parles anglais ? · Est-ce que tu parles anglais ? · Parles-tu anglais ?",
      gloss: { es: "tres formas de preguntar", en: "three ways to ask a question" },
      pattern: {
        rule: {
          es: "Hablando, basta con subir la entonación (Tu parles anglais ?). «Est-ce que» delante de la frase es neutro. La inversión (Parles-tu ?) es más formal o escrita.",
          en: "In speech, just raise your voice (Tu parles anglais ?). Putting 'est-ce que' in front is neutral. Inversion (Parles-tu ?) is more formal or written.",
        },
        table: [["oral", "Tu as faim ?"], ["neutre", "Est-ce que tu as faim ?"], ["formel", "As-tu faim ?"]],
      },
      question: {
        prompt: { es: "¿Cuál de estas preguntas es correcta?", en: "Which question is correct?" },
        options: ["Est-ce que vous habitez ici ?", "Est-ce vous habitez ici ?", "Que est-ce vous habitez ici ?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-questions"], tags: ["grammar", "questions"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-numero", type: "listening",
      target: "Mon numéro, c'est le zéro six, vingt-deux, quatre-vingts, soixante-quinze, dix-huit.",
      gloss: { es: "Mi número es el 06 22 80 75 18.", en: "My number is 06 22 80 75 18." },
      question: {
        prompt: { es: "¿Qué número oíste?", en: "Which number did you hear?" },
        options: ["06 22 80 75 18", "06 22 90 65 18", "06 32 80 75 19", "06 22 80 15 18"],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "numbers", "phone"],
    },
    {
      id: "dlg-age", type: "dialogue", target: "J'ai trente-deux ans.", register: "informal",
      gloss: { es: "Tengo treinta y dos años.", en: "I'm thirty-two." },
      turns: [
        { who: "A", target: "Tu as quel âge ?", gloss: { es: "¿Cuántos años tienes?", en: "How old are you?" } },
        { who: "B", target: "J'ai trente-deux ans. Et toi ?", gloss: { es: "Tengo treinta y dos. ¿Y tú?", en: "I'm thirty-two. And you?" } },
        { who: "A", target: "Moi, j'ai vingt-huit ans. Tu as des enfants ?", gloss: { es: "Yo tengo veintiocho. ¿Tienes hijos?", en: "I'm twenty-eight. Do you have children?" } },
        { who: "B", target: "Oui, j'ai une fille. Elle a trois ans.", gloss: { es: "Sí, tengo una hija. Tiene tres años.", en: "Yes, I have a daughter. She's three." } },
      ],
      question: {
        prompt: { es: "¿Cuántos años tiene la hija?", en: "How old is the daughter?" },
        options: [
          { es: "Tres", en: "Three" },
          { es: "Veintiocho", en: "Twenty-eight" },
          { es: "Treinta y dos", en: "Thirty-two" },
          { es: "Trece", en: "Thirteen" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "age"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-ans", type: "bridge", onlyFor: "es", target: "trente ans",
      gloss: { es: "treinta años", en: "thirty years" },
      distractors: ["trente années", "trente anos", "trent ans"],
      note: { es: "Para la edad se dice «an»: j'ai trente ans. «Année» es el año como duración o en «bonne année»." },
      exercises: ["guess", "recall"], tags: ["bridge", "age"],
    },
    {
      id: "br-zero", type: "bridge", onlyFor: "es", target: "zéro",
      gloss: { es: "cero", en: "zero" },
      distractors: ["cero", "zero", "séro"],
      note: { es: "La z francesa es sonora, como un zumbido de abeja: zéro ≈ «zeró»." },
      exercises: ["guess", "recall"], tags: ["bridge", "pronunciation"],
    },
  ]),
};
