import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u24",
  lang: "it",
  index: 24,
  cefr: "B2",
  title: { target: "Modi di dire", es: "Expresiones idiomáticas", en: "Idioms" },
  canDo: [
    { es: "Puedo entender y usar expresiones idiomáticas frecuentes.", en: "I can understand and use common idioms." },
    { es: "Puedo adaptar mi registro: formal con desconocidos, informal con amigos.", en: "I can adapt my register: formal with strangers, informal with friends." },
    { es: "Sé usar sufijos como -ino, -one y -accio (casetta, librone, tempaccio).", en: "I can use suffixes like -ino, -one and -accio (casetta, librone, tempaccio)." },
  ],
  icon: "🐺",
  items: build("it", 24, "B2", [
    // ── Idioms ───────────────────────────────────────────────
    {
      id: "in-bocca-al-lupo", type: "phrase", pos: "phrase", target: "In bocca al lupo!",
      gloss: { es: "¡Mucha suerte! (lit. «en la boca del lobo»)", en: "Good luck! (lit. 'into the wolf's mouth')" },
      distractors: ["In bocca del lupo!", "Nella bocca al lupo!", "In bocca ai lupi!"],
      note: { es: "Se responde «Crepi!» (o «Crepi il lupo!»), no «grazie».", en: "The reply is 'Crepi!' (or 'Crepi il lupo!'), not 'grazie'." },
      tags: ["idioms"],
    },
    {
      id: "costare-un-occhio", type: "phrase", pos: "phrase", target: "costare un occhio della testa",
      gloss: { es: "costar un ojo de la cara", en: "to cost an arm and a leg" },
      distractors: ["costare un occhio della faccia", "costare una testa", "costare un braccio"],
      tags: ["idioms", "money"],
    },
    {
      id: "mani-bucate", type: "phrase", pos: "phrase", target: "avere le mani bucate",
      gloss: { es: "ser un derrochador (el dinero se le escapa)", en: "to spend money like water" },
      distractors: ["avere le mani legate", "avere le mani in pasta", "avere le mani piene"],
      note: { es: "Ojo: avere le mani legate = tener las manos atadas.", en: "Careful: avere le mani legate = to have one's hands tied." },
      tags: ["idioms", "money"],
    },
    {
      id: "essere-al-verde", type: "phrase", pos: "phrase", target: "essere al verde",
      gloss: { es: "no tener un peso, estar sin plata", en: "to be broke" },
      distractors: ["essere al rosso", "essere in verde", "essere verde"],
      tags: ["idioms", "money"],
    },
    {
      id: "non-vedere-lora", type: "phrase", pos: "phrase", target: "non vedere l'ora",
      gloss: { es: "tener muchas ganas, estar ansioso/a", en: "can't wait" },
      distractors: ["non vedere il tempo", "non guardare l'ora", "non vedere ora"],
      note: { es: "non vedere l'ora di + infinitivo: non vedo l'ora di partire.", en: "non vedere l'ora di + infinitive: non vedo l'ora di partire." },
      tags: ["idioms"],
    },
    {
      id: "prendere-in-giro", type: "phrase", pos: "phrase", target: "prendere in giro",
      gloss: { es: "tomar el pelo, burlarse", en: "to tease / make fun of" },
      distractors: ["prendere il giro", "fare in giro", "prendere a giro"],
      tags: ["idioms"],
    },
    {
      id: "fare-due-passi", type: "phrase", pos: "phrase", target: "fare due passi",
      gloss: { es: "dar una vuelta (caminando)", en: "to go for a stroll" },
      distractors: ["dare due passi", "fare due pace", "fare due piedi"],
      tags: ["idioms"],
    },
    {
      id: "acqua-in-bocca", type: "phrase", pos: "phrase", target: "Acqua in bocca!",
      gloss: { es: "¡Ni una palabra! (guárdame el secreto)", en: "Mum's the word! (keep it secret)" },
      distractors: ["Acqua nella bocca!", "Bocca d'acqua!", "Acqua di bocca!"],
      tags: ["idioms"],
    },

    // ── Register twins ───────────────────────────────────────
    {
      id: "ti-va-un-caffe", type: "phrase", pos: "phrase", register: "informal", target: "Ti va un caffè?",
      gloss: { es: "¿Te gustaría un café? (informal)", en: "Would you like a coffee? (informal)" },
      accept: [{ text: "Ti andrebbe un caffè?" }],
      distractors: ["Ti vai un caffè?", "Ti va di un caffè?", "Ti vuole un caffè?"],
      tags: ["register"],
    },
    {
      id: "le-va-un-caffe", type: "phrase", pos: "phrase", register: "formal", target: "Le va un caffè?",
      gloss: { es: "¿Le gustaría un café? (formal)", en: "Would you like a coffee? (formal)" },
      accept: [{ text: "Le andrebbe un caffè?" }, { text: "Gradisce un caffè?" }],
      distractors: ["La va un caffè?", "Lei va un caffè?", "Le vada un caffè?"],
      note: { es: "«Gradisce…?» es aún más formal (hoteles, restaurantes).", en: "'Gradisce…?' is even more formal (hotels, restaurants)." },
      tags: ["register"],
    },

    // ── Altered nouns ────────────────────────────────────────
    {
      id: "casetta", type: "word", pos: "noun", target: "la casetta", gender: "f", plural: "le casette",
      gloss: { es: "la casita", en: "the little house" },
      distractors: ["la cassetta", "la casotta", "il casetto"],
      note: { es: "Ojo: la cassetta (doble s) = la caja, el casete.", en: "Careful: la cassetta (double s) = box / cassette." },
      tags: ["alterati", "doubles"],
    },
    {
      id: "librone", type: "word", pos: "noun", target: "il librone", gender: "m", plural: "i libroni",
      gloss: { es: "el librote (libro muy grueso)", en: "the huge book" },
      distractors: ["il libretto", "la librone", "il libraio"],
      tags: ["alterati"],
    },
    {
      id: "tempaccio", type: "word", pos: "noun", target: "il tempaccio", gender: "m", plural: "i tempacci",
      gloss: { es: "el tiempo horrible", en: "the awful weather" },
      distractors: ["il tempone", "il tempino", "il tempio"],
      tags: ["alterati", "weather"],
    },
    {
      id: "parolaccia", type: "word", pos: "noun", target: "la parolaccia", gender: "f", plural: "le parolacce",
      gloss: { es: "la mala palabra, la grosería", en: "the swear word" },
      distractors: ["la parolina", "il parolone", "la parola"],
      tags: ["alterati"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "non-vedo-lora-di-vederti", type: "sentence", register: "informal", target: "Non vedo l'ora di vederti!",
      gloss: { es: "¡Tengo muchas ganas de verte!", en: "I can't wait to see you!" },
      distractors: ["l'ore", "vedere", "per"],
      tags: ["idioms"],
    },
    {
      id: "borsa-occhio-della-testa", type: "sentence", target: "Questa borsa è costata un occhio della testa.",
      gloss: { es: "Esta bolsa (cartera) costó un ojo de la cara.", en: "This bag cost an arm and a leg." },
      errors: [{ text: "Questa borsa ha costato un occhio della testa.", feedback: { es: "costare va con essere: è costata.", en: "costare takes essere: è costata." } }],
      distractors: ["costato", "faccia", "ha"],
      tags: ["idioms", "money"],
    },
    {
      id: "smettila-di-prendermi", type: "sentence", register: "informal", target: "Smettila di prendermi in giro!",
      gloss: { es: "¡Deja de tomarme el pelo!", en: "Stop making fun of me!" },
      distractors: ["Smetti", "mi", "giri"],
      tags: ["idioms"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-alterati", type: "pattern", target: "casetta · librone · tempaccio · parolina",
      gloss: { es: "sufijos: diminutivos, aumentativos y despectivos", en: "suffixes: diminutive, augmentative, pejorative" },
      pattern: {
        rule: {
          es: "-ino / -etto = pequeño o cariñoso (gattino, casetta); -one = grande (librone; femenino suele pasar a masculino: la porta → il portone); -accio = feo o malo (tempaccio, parolaccia).",
          en: "-ino / -etto = small or affectionate (gattino, casetta); -one = big (librone; feminine often turns masculine: la porta → il portone); -accio = bad or ugly (tempaccio, parolaccia).",
        },
        table: [["-ino / -etto", "gattino · casetta"], ["-one", "librone · portone"], ["-accio", "tempaccio · parolaccia"]],
      },
      question: {
        prompt: { es: "«Una mala palabra» es…", en: "'A swear word' is…" },
        options: ["una parolaccia", "una parolina", "un parolone", "una parolona"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "alterati"],
    },
    {
      id: "pat-registro", type: "pattern", target: "Dimmi. / Mi dica. · Scusa. / Mi scusi. · Ti va? / Le va?",
      gloss: { es: "registro formal e informal", en: "formal and informal register" },
      pattern: {
        rule: {
          es: "Con desconocidos, clientes y superiores: Lei y formas de cortesía (Mi dica, Mi scusi, Le andrebbe…?). Con amigos y familia: tu (Dimmi, Scusa, Ti va…?).",
          en: "With strangers, customers and superiors: Lei and polite forms (Mi dica, Mi scusi, Le andrebbe…?). With friends and family: tu (Dimmi, Scusa, Ti va…?).",
        },
        table: [["tu", "Dimmi · Scusa · Ti va? · Ciao"], ["Lei", "Mi dica · Mi scusi · Le va? · Buongiorno / Salve"]],
      },
      question: {
        prompt: { es: "Atiendes a un cliente que quiere preguntar algo. Le dices…", en: "A customer wants to ask you something. You say…" },
        options: ["Mi dica.", "Dimmi.", "Dimmelo.", "Di'."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "register"],
    },
    {
      id: "pat-centrare", type: "pattern", target: "Che c'entra? · Non ne posso più. · Ce l'ho con te.",
      gloss: { es: "expresiones frecuentes con ci y ne", en: "common expressions with ci and ne" },
      pattern: {
        rule: {
          es: "c'entrare = tener que ver (non c'entra niente); non poterne più = no aguantar más; avercela con qualcuno = estar enojado con alguien.",
          en: "c'entrare = to have to do with (non c'entra niente); non poterne più = can't stand any more; avercela con qualcuno = to be angry with someone.",
        },
        table: [["c'entrare", "Questo non c'entra."], ["non poterne più", "Non ne posso più del rumore."], ["avercela con", "Ce l'hai con me?"]],
      },
      question: {
        prompt: { es: "«Esto no tiene nada que ver» es…", en: "'That has nothing to do with it' is…" },
        options: ["Questo non c'entra niente.", "Questo non entra niente.", "Questo non ne entra niente.", "Questo non c'è niente."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "idioms"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-tempaccio", type: "listening",
      target: "Ieri volevo fare due passi in centro con un'amica, ma c'era un tempaccio e siamo finite in una libreria.",
      gloss: {
        es: "Ayer quería dar una vuelta por el centro con una amiga, pero hacía un tiempo horrible y terminamos en una librería.",
        en: "Yesterday I wanted to go for a stroll in town with a friend, but the weather was awful and we ended up in a bookshop.",
      },
      question: {
        prompt: { es: "¿Por qué terminaron en una librería?", en: "Why did they end up in a bookshop?" },
        options: [
          { es: "Porque hacía un tiempo horrible.", en: "Because the weather was awful." },
          { es: "Porque querían comprar un libro.", en: "Because they wanted to buy a book." },
          { es: "Porque la amiga trabaja ahí.", en: "Because the friend works there." },
          { es: "Porque estaban cansadas.", en: "Because they were tired." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "idioms"],
    },
    {
      id: "dlg-esame-guida", type: "dialogue", register: "informal", target: "Crepi!",
      gloss: { es: "¡Gracias! (respuesta a «in bocca al lupo»)", en: "Thanks! (the reply to 'in bocca al lupo')" },
      turns: [
        { who: "A", target: "Domani ho l'esame di guida e sono nervosissima.", gloss: { es: "Mañana tengo el examen de manejo y estoy nerviosísima.", en: "Tomorrow I've got my driving test and I'm really nervous." } },
        { who: "B", target: "In bocca al lupo!", gloss: { es: "¡Mucha suerte!", en: "Good luck!" } },
        { who: "A", target: "Crepi! Ti faccio sapere.", gloss: { es: "¡Gracias! Te cuento cómo me fue.", en: "Thanks! I'll let you know." } },
      ],
      question: {
        prompt: { es: "¿Qué examen tiene A mañana?", en: "What test does A have tomorrow?" },
        options: [
          { es: "El examen de manejo", en: "Her driving test" },
          { es: "Un examen de italiano", en: "An Italian exam" },
          { es: "Un examen médico", en: "A medical check-up" },
          { es: "Un examen en la universidad", en: "A university exam" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "idioms"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-al-verde", type: "bridge", onlyFor: "es", target: "essere al verde",
      gloss: { es: "no tener dinero", en: "to be broke" },
      question: {
        prompt: { es: "«Questo mese sono al verde» significa…", en: "'Questo mese sono al verde' means…" },
        options: [
          { es: "Este mes no tengo un peso.", en: "This month I'm broke." },
          { es: "Este mes estoy verde (me falta experiencia).", en: "This month I'm inexperienced." },
          { es: "Este mes estoy en el campo.", en: "This month I'm in the countryside." },
          { es: "Este mes como solo verduras.", en: "This month I'm only eating vegetables." },
        ],
        answer: 0,
      },
      note: { es: "«Estar verde» (sin experiencia) en italiano es «essere alle prime armi»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "idioms"],
    },
  ]),
};
