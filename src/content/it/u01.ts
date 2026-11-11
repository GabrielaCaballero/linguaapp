import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u01",
  lang: "it",
  index: 1,
  cefr: "A0",
  title: { target: "Ciao!", es: "¡Hola!", en: "Hi!" },
  canDo: [
    { es: "Puedo saludar y despedirme en situaciones formales e informales.", en: "I can say hello and goodbye, formally and informally." },
    { es: "Puedo decir mi nombre y preguntar el de otra persona.", en: "I can say my name and ask someone theirs." },
    { es: "Puedo leer en voz alta c, g, ch y gh.", en: "I can read c, g, ch and gh aloud." },
  ],
  icon: "👋",
  items: build("it", 1, "A0", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-ci", legacyId: "it-s-ci", type: "sound", target: "ciao",
      gloss: { es: "hola / adiós (informal)", en: "hi / bye (informal)" },
      distractors: ["chiao", "sciao", "giao"],
      note: {
        es: "c + e/i suena como la «ch» de «chico»: ciao ≈ «chao».",
        en: "c + e/i sounds like English 'ch': ciao ≈ 'chow'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "c-g"],
    },
    {
      id: "s-ch", legacyId: "it-s-ch", type: "sound", target: "chiesa",
      gloss: { es: "iglesia", en: "church" },
      distractors: ["ciesa", "ghiesa", "sciesa"],
      note: {
        es: "ch + e/i suena «k», como en «queso»: chiesa = iglesia.",
        en: "ch + e/i sounds like 'k': chiesa ≈ 'kyeh-za'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "c-g"],
    },
    {
      id: "s-g", legacyId: "it-s-g", type: "sound", target: "gelato",
      gloss: { es: "helado", en: "ice cream" },
      distractors: ["ghelato", "jelato", "chelato"],
      note: {
        es: "g + e/i suena como la «j» del inglés «jeans» (≈ «dy» suave): gelato.",
        en: "g + e/i sounds like the 'j' in 'jeans': gelato.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "c-g"],
    },
    {
      id: "s-gh", type: "sound", target: "spaghetti",
      gloss: { es: "espaguetis", en: "spaghetti" },
      distractors: ["spagetti", "spaghietti", "spacetti"],
      note: {
        es: "gh + e/i mantiene la g dura, como en «guerra»: spaghetti, funghi.",
        en: "gh + e/i keeps the g hard, as in 'get': spaghetti, funghi.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "c-g"],
    },

    // ── Greetings ────────────────────────────────────────────
    {
      id: "ciao", type: "phrase", pos: "phrase", target: "Ciao", register: "informal",
      gloss: { es: "Hola / Adiós (informal)", en: "Hi / Bye (informal)" },
      distractors: ["Buongiorno", "Arrivederci", "Prego"],
      note: {
        es: "Sirve para saludar y para despedirse, solo con quien tratas de «tu».",
        en: "Means both hi and bye; use it only with people you call 'tu'.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "buongiorno", legacyId: "it-buongiorno", type: "phrase", pos: "phrase", target: "Buongiorno",
      gloss: { es: "Buenos días", en: "Good morning / Hello" },
      accept: [{ text: "Buon giorno" }],
      distractors: ["Buonasera", "Buonanotte", "Arrivederci"],
      note: {
        es: "Se usa desde la mañana hasta media tarde, con cualquier persona.",
        en: "Used from morning until mid-afternoon, with anyone.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "buonasera", legacyId: "it-buonasera", type: "phrase", pos: "phrase", target: "Buonasera",
      gloss: {
        es: "Buenas tardes / Buenas noches (saludo o despedida, desde media tarde)",
        en: "Good evening (hello or goodbye, from mid-afternoon)",
      },
      accept: [{ text: "Buona sera" }],
      distractors: ["Buongiorno", "Buonanotte", "Arrivederci"],
      tags: ["greeting", "chunk"],
    },
    {
      id: "buonanotte", type: "phrase", pos: "phrase", target: "Buonanotte",
      gloss: { es: "Buenas noches (al despedirse para dormir)", en: "Good night" },
      accept: [{ text: "Buona notte" }],
      distractors: ["Buonasera", "Buongiorno", "A dopo"],
      note: {
        es: "Solo para despedirse de noche; para saludar de noche se dice «Buonasera».",
        en: "Only for saying goodbye at night; to greet someone in the evening, say 'Buonasera'.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "arrivederci", legacyId: "it-arrivederci", type: "phrase", pos: "phrase", target: "Arrivederci",
      gloss: { es: "Adiós (neutro o formal)", en: "Goodbye" },
      distractors: ["A dopo", "Buonasera", "Prego"],
      note: {
        es: "Con «Lei», todavía más formal: «ArrivederLa».",
        en: "Even more formal, with Lei: 'ArrivederLa'.",
      },
      tags: ["greeting", "chunk"],
    },
    {
      id: "a-dopo", type: "phrase", pos: "phrase", target: "A dopo",
      gloss: { es: "Hasta luego", en: "See you later" },
      distractors: ["A presto", "Arrivederci", "Dopo"],
      note: {
        es: "«A dopo» es para más tarde el mismo día; «a presto» = hasta pronto.",
        en: "'A dopo' means later today; 'a presto' = see you soon.",
      },
      tags: ["greeting", "chunk"],
    },

    // ── Courtesy ─────────────────────────────────────────────
    {
      id: "grazie", type: "phrase", pos: "phrase", target: "Grazie",
      gloss: { es: "Gracias", en: "Thank you" },
      distractors: ["Prego", "Piacere", "Scusa"],
      tags: ["polite", "chunk"],
    },
    {
      id: "grazie-mille", legacyId: "it-grazie", type: "phrase", pos: "phrase", target: "Grazie mille",
      gloss: { es: "Muchas gracias", en: "Thanks a lot" },
      accept: [{ text: "Molte grazie" }, { text: "Grazie tante" }],
      distractors: ["Grazie a te", "Prego", "Per favore"],
      note: {
        es: "Literalmente «mil gracias».",
        en: "Literally 'a thousand thanks'.",
      },
      tags: ["polite", "chunk"],
    },
    {
      id: "prego", type: "phrase", pos: "phrase", target: "Prego",
      gloss: { es: "De nada", en: "You're welcome" },
      distractors: ["Grazie", "Per favore", "Scusi"],
      note: {
        es: "También significa «adelante» o «pase» cuando invitas a alguien a entrar o a pedir.",
        en: "Also 'go ahead' or 'come in' when you invite someone to enter or to order.",
      },
      tags: ["polite", "chunk"],
    },
    {
      id: "per-favore", legacyId: "it-perfavore", type: "phrase", pos: "phrase", target: "Per favore",
      gloss: { es: "Por favor", en: "Please" },
      accept: [{ text: "Per piacere" }, { text: "Per cortesia" }],
      distractors: ["Prego", "Piacere", "Scusa"],
      tags: ["polite", "chunk"],
    },
    {
      id: "scusa", type: "phrase", pos: "phrase", target: "Scusa", register: "informal",
      gloss: { es: "Perdón / Disculpa (informal)", en: "Sorry / Excuse me (informal)" },
      distractors: ["Scusi", "Prego", "Grazie"],
      note: {
        es: "«Scusa» con «tu»; «Scusi» con «Lei» (usted).",
        en: "'Scusa' with tu; 'Scusi' with Lei (formal).",
      },
      tags: ["polite", "register"],
    },
    {
      id: "scusi", legacyId: "it-scusi", type: "phrase", pos: "phrase", target: "Scusi", register: "formal",
      gloss: { es: "Disculpe / Perdone (formal)", en: "Excuse me (formal)" },
      distractors: ["Scusa", "Prego", "Grazie"],
      note: {
        es: "Scusi = formal (Lei, como «usted»). Scusa = informal (tu).",
        en: "Scusi = formal (Lei). Scusa = informal (tu).",
      },
      tags: ["polite", "register"],
    },
    {
      id: "si", type: "word", pos: "adv", target: "Sì",
      gloss: { es: "Sí", en: "Yes" },
      distractors: ["No", "Se", "Già"],
      note: {
        es: "Lleva acento: «sì» = sí; sin acento, «si» es pronombre (si chiama).",
        en: "Written with an accent: 'sì' = yes; without it, 'si' is a pronoun (si chiama).",
      },
      tags: ["basic", "accent"],
    },

    // ── Names ────────────────────────────────────────────────
    {
      id: "come-ti-chiami", type: "phrase", pos: "phrase", target: "Come ti chiami?", register: "informal",
      gloss: { es: "¿Cómo te llamas?", en: "What's your name? (informal)" },
      distractors: ["Come si chiama?", "Come stai?", "Di dove sei?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "come-si-chiama", type: "phrase", pos: "phrase", target: "Come si chiama?", register: "formal",
      gloss: { es: "¿Cómo se llama (usted)?", en: "What's your name? (formal)" },
      distractors: ["Come ti chiami?", "Come sta?", "Dove abita?"],
      note: {
        es: "Con «Lei» el verbo va en 3.ª persona, igual que con «usted».",
        en: "With Lei (formal 'you') the verb goes in the 3rd person.",
      },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "mi-chiamo", legacyId: "it-michiamo", type: "sentence", target: "Mi chiamo Anna.",
      gloss: { es: "Me llamo Anna.", en: "My name is Anna." },
      accept: [{ text: "Io mi chiamo Anna." }, { text: "Sono Anna." }],
      errors: [{
        text: "Mi chiami Anna.",
        feedback: { es: "Con «io» el verbo termina en -o: mi chiamo.", en: "With 'io' the verb ends in -o: mi chiamo." },
      }],
      distractors: ["Mi chiami Anna.", "Ti chiamo Anna.", "Si chiamo Anna."],
      note: {
        es: "Igual que en español: mi chiamo = me llamo. «Sono Anna» también vale.",
        en: "Literally 'I call myself Anna'. 'Sono Anna' (I'm Anna) also works.",
      },
      tags: ["introductions"],
    },
    {
      id: "piacere", legacyId: "it-piacere", type: "phrase", pos: "phrase", target: "Piacere",
      gloss: { es: "Mucho gusto", en: "Nice to meet you" },
      distractors: ["Prego", "Per favore", "Perfetto"],
      note: {
        es: "Al presentarte: «Piacere, Marco». Respuesta: «Piacere mio».",
        en: "When introduced: 'Piacere, Marco.' Reply: 'Piacere mio.'",
      },
      tags: ["introductions", "chunk"],
    },

    // ── How are you ──────────────────────────────────────────
    {
      id: "come-stai", type: "phrase", pos: "phrase", target: "Come stai?", register: "informal",
      gloss: { es: "¿Cómo estás?", en: "How are you? (informal)" },
      accept: [{ text: "Come va?", verdict: "correct" }],
      distractors: ["Come sta?", "Come ti chiami?", "Dove stai?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "come-sta", type: "phrase", pos: "phrase", target: "Come sta?", register: "formal",
      gloss: { es: "¿Cómo está (usted)?", en: "How are you? (formal)" },
      distractors: ["Come stai?", "Come si chiama?", "Com'è?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "bene-grazie", type: "sentence", target: "Bene, grazie. E tu?", register: "informal",
      gloss: { es: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?" },
      accept: [{ text: "Bene grazie, e tu?" }, { text: "Bene, grazie, e tu?" }, { text: "Bene grazie e tu" }],
      errors: [{
        text: "Buono, grazie. E tu?",
        feedback: {
          es: "«Buono» es «bueno/rico» (adjetivo); «estoy bien» es «sto bene».",
          en: "'Buono' means 'good/tasty' (adjective); 'I'm fine' is 'sto bene'.",
        },
      }],
      distractors: ["Bene, prego. E tu?", "Buono, grazie. E tu?", "Bene, grazie. E io?"],
      note: { es: "Con «Lei»: «Bene, grazie. E Lei?».", en: "With Lei: 'Bene, grazie. E Lei?'" },
      tags: ["introductions"],
    },

    // ── Pattern + dialogue ───────────────────────────────────
    {
      id: "pat-tu-lei", type: "pattern", target: "tu / Lei",
      gloss: { es: "tú / usted", en: "informal / formal 'you'" },
      pattern: {
        rule: {
          es: "Con amigos, familia y gente joven usa «tu». Con desconocidos, en tiendas y oficinas usa «Lei» con el verbo en 3.ª persona, como «usted».",
          en: "Use tu with friends, family and peers. Use Lei with strangers and in shops or offices; the verb goes in the 3rd person ('Come sta?').",
        },
        table: [
          ["tu", "Lei"],
          ["Come ti chiami?", "Come si chiama?"],
          ["Come stai?", "Come sta?"],
          ["Scusa", "Scusi"],
          ["Ciao", "Arrivederci / ArrivederLa"],
        ],
      },
      question: {
        prompt: { es: "Le preguntas el nombre a una señora que no conoces:", en: "You ask a woman you don't know her name:" },
        options: ["Come si chiama?", "Come ti chiami?", "Come chiama?"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "register"],
    },
    {
      id: "dlg-piacere", type: "dialogue", target: "Piacere mio.", register: "formal",
      gloss: { es: "El gusto es mío.", en: "The pleasure is mine." },
      turns: [
        { who: "A", target: "Buongiorno! Mi chiamo Anna. E Lei?", gloss: { es: "¡Buenos días! Me llamo Anna. ¿Y usted?", en: "Good morning! My name is Anna. And you?" } },
        { who: "B", target: "Buongiorno. Mi chiamo Marco.", gloss: { es: "Buenos días. Me llamo Marco.", en: "Good morning. My name is Marco." } },
        { who: "A", target: "Piacere, Marco!", gloss: { es: "¡Mucho gusto, Marco!", en: "Nice to meet you, Marco!" } },
        { who: "B", target: "Piacere mio. Come sta?", gloss: { es: "El gusto es mío. ¿Cómo está?", en: "The pleasure is mine. How are you?" } },
        { who: "A", target: "Bene, grazie. E Lei?", gloss: { es: "Bien, gracias. ¿Y usted?", en: "Fine, thanks. And you?" } },
      ],
      question: {
        prompt: { es: "¿Cómo se tratan Anna y Marco?", en: "How do Anna and Marco address each other?" },
        options: [
          { es: "De «Lei» (formal)", en: "With Lei (formal)" },
          { es: "De «tu» (informal)", en: "With tu (informal)" },
          { es: "Uno de «tu», el otro de «Lei»", en: "One uses tu, the other Lei" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions", "register"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-notte", legacyId: "it-p-tt1", type: "bridge", onlyFor: "es", target: "notte",
      gloss: { es: "noche", en: "night" },
      distractors: ["noche", "notche", "nocte"],
      note: { es: "La «ch» española que viene de un «ct» latino → tt: noche → notte, ocho → otto." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
