import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u02",
  lang: "it",
  index: 2,
  cefr: "A1.1",
  title: { target: "Piacere!", es: "¡Mucho gusto!", en: "Nice to meet you!" },
  canDo: [
    { es: "Puedo decir mi nacionalidad, de dónde soy y dónde vivo.", en: "I can say my nationality, where I'm from and where I live." },
    { es: "Puedo decir qué idiomas hablo y preguntarlo, de «tu» y de «Lei».", en: "I can say which languages I speak and ask others, with tu and Lei." },
    { es: "Puedo leer gli, gn y sc.", en: "I can read gli, gn and sc aloud." },
  ],
  icon: "🗺️",
  items: build("it", 2, "A1.1", [
    // ── Nationalities & countries ────────────────────────────
    {
      id: "italiano", type: "word", pos: "adj", target: "italiano",
      gloss: { es: "italiano/a", en: "Italian" },
      forms: { m: "italiano", f: "italiana", mpl: "italiani", fpl: "italiane" },
      accept: [{ text: "italiana" }],
      distractors: ["Italia", "tedesco", "spagnolo"],
      note: {
        es: "Las nacionalidades van en minúscula: sono italiano, è spagnola.",
        en: "Nationalities are lowercase in Italian: sono italiano, è inglese.",
      },
      tags: ["nationality"],
    },
    {
      id: "spagnolo", type: "word", pos: "adj", target: "spagnolo",
      gloss: { es: "español/a", en: "Spanish" },
      forms: { m: "spagnolo", f: "spagnola", mpl: "spagnoli", fpl: "spagnole" },
      accept: [{ text: "spagnola" }],
      distractors: ["spagnuolo", "Spagna", "portoghese"],
      note: { es: "gn suena como ñ: spagnolo ≈ «spañolo».", en: "gn sounds like 'ny' in 'canyon': spagnolo." },
      tags: ["nationality"],
    },
    {
      id: "tedesco", type: "word", pos: "adj", target: "tedesco",
      gloss: { es: "alemán/alemana", en: "German" },
      forms: { m: "tedesco", f: "tedesca", mpl: "tedeschi", fpl: "tedesche" },
      accept: [{ text: "tedesca" }],
      distractors: ["germano", "olandese", "tedeschi"],
      note: { es: "Alemán no es «germano»: es tedesco; Alemania = la Germania.", en: "German is 'tedesco' (not 'germanico'); Germany = la Germania." },
      tags: ["nationality"],
    },
    {
      id: "inglese", type: "word", pos: "adj", target: "inglese",
      gloss: { es: "inglés/inglesa", en: "English" },
      forms: { m: "inglese", f: "inglese", mpl: "inglesi", fpl: "inglesi" },
      errors: [{
        text: "inglesa",
        feedback: { es: "Los adjetivos en -e no cambian en femenino: lei è inglese.", en: "Adjectives in -e don't change for feminine: lei è inglese." },
      }],
      distractors: ["inglesa", "Inghilterra", "irlandese"],
      tags: ["nationality"],
    },
    {
      id: "argentino", type: "word", pos: "adj", target: "argentino",
      gloss: { es: "argentino/a", en: "Argentinian" },
      forms: { m: "argentino", f: "argentina", mpl: "argentini", fpl: "argentine" },
      accept: [{ text: "argentina" }],
      distractors: ["argentiniano", "argentano", "brasiliano"],
      tags: ["nationality"],
    },
    {
      id: "svizzero", type: "word", pos: "adj", target: "svizzero",
      gloss: { es: "suizo/a", en: "Swiss" },
      forms: { m: "svizzero", f: "svizzera", mpl: "svizzeri", fpl: "svizzere" },
      accept: [{ text: "svizzera" }],
      distractors: ["svedese", "suizzero", "Svezia"],
      note: { es: "La Svizzera = Suiza; svedese = sueco/a.", en: "La Svizzera = Switzerland; svedese = Swedish." },
      tags: ["nationality"],
    },
    {
      id: "italia", type: "word", pos: "other", target: "l'Italia",
      gloss: { es: "Italia", en: "Italy" },
      accept: [{ text: "Italia", verdict: "almost", feedback: { es: "Con el país solo, va con artículo: l'Italia è bella.", en: "On its own the country takes the article: l'Italia è bella." } }],
      distractors: ["la Italia", "lo Italia", "l'italiano"],
      note: {
        es: "Los países llevan artículo (l'Italia, la Spagna), pero «in Italia» va sin él.",
        en: "Countries take the article (l'Italia, la Spagna), but 'in Italia' has none.",
      },
      tags: ["country"],
    },
    {
      id: "spagna", type: "word", pos: "other", target: "la Spagna",
      gloss: { es: "España", en: "Spain" },
      accept: [{ text: "Spagna", verdict: "almost", feedback: { es: "Con artículo: la Spagna.", en: "With the article: la Spagna." } }],
      distractors: ["la Spania", "il Spagna", "la Spagnola"],
      tags: ["country"],
    },

    // ── Verbs ────────────────────────────────────────────────
    {
      id: "parlare", type: "word", pos: "verb", target: "parlare",
      gloss: { es: "hablar", en: "to speak" },
      forms: { io: "parlo", tu: "parli", "lui/lei/Lei": "parla" },
      distractors: ["partire", "pagare", "portare"],
      tags: ["verb", "languages"],
    },
    {
      id: "abitare", type: "word", pos: "verb", target: "abitare",
      gloss: { es: "vivir (residir)", en: "to live (reside)" },
      forms: { io: "abito", tu: "abiti", "lui/lei/Lei": "abita" },
      distractors: ["avere", "aspettare", "abituare"],
      note: { es: "abitare a + ciudad: abito a Roma. También se dice «vivere».", en: "abitare a + city: abito a Roma. 'Vivere' also works." },
      tags: ["verb"],
    },

    // ── Questions & answers ──────────────────────────────────
    {
      id: "di-dove-sei", type: "phrase", pos: "phrase", target: "Di dove sei?", register: "informal",
      gloss: { es: "¿De dónde eres?", en: "Where are you from? (informal)" },
      accept: [{ text: "Da dove vieni?" }],
      distractors: ["Dove sei?", "Come sei?", "Di dov'è?"],
      note: { es: "Con «Lei»: «Di dov'è?».", en: "With Lei: 'Di dov'è?'" },
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "di-dove-e", type: "phrase", pos: "phrase", target: "Di dov'è?", register: "formal",
      gloss: { es: "¿De dónde es (usted)?", en: "Where are you from? (formal)" },
      accept: [
        { text: "Di dove è?", verdict: "almost", feedback: { es: "Se contrae: dov'è.", en: "It contracts: dov'è." } },
        { text: "Da dove viene?" },
      ],
      distractors: ["Dov'è?", "Di dove sei?", "Come sta?"],
      tags: ["introductions", "register", "chunk"],
    },
    {
      id: "sono-di", type: "sentence", target: "Sono di Napoli.",
      gloss: { es: "Soy de Nápoles.", en: "I'm from Naples." },
      accept: [{ text: "Io sono di Napoli." }, { text: "Vengo da Napoli." }],
      errors: [{
        text: "Sono da Napoli.",
        feedback: { es: "Para el origen: essere di + ciudad (o venire da): sono di Napoli.", en: "For origin: essere di + city (or venire da): sono di Napoli." },
      }],
      distractors: ["Sono da Napoli.", "Sono a Napoli.", "Ho di Napoli."],
      tags: ["introductions"],
    },
    {
      id: "sono-spagnolo", type: "sentence", target: "Sono spagnolo.",
      gloss: { es: "Soy español/a.", en: "I'm Spanish." },
      accept: [{ text: "Sono spagnola." }, { text: "Io sono spagnolo." }, { text: "Io sono spagnola." }],
      distractors: ["Sono Spagna.", "Ho spagnolo.", "Sono spagnoli."],
      note: { es: "Si eres mujer: «Sono spagnola».", en: "A woman says 'Sono spagnola'." },
      tags: ["introductions", "nationality"],
    },
    {
      id: "abito-a-roma", type: "sentence", target: "Abito a Roma.",
      gloss: { es: "Vivo en Roma.", en: "I live in Rome." },
      accept: [{ text: "Vivo a Roma." }, { text: "Io abito a Roma." }],
      errors: [{
        text: "Abito in Roma.",
        feedback: { es: "Con ciudades se usa «a» (abito a Roma); con países, «in» (abito in Italia).", en: "Cities take 'a' (abito a Roma); countries take 'in' (abito in Italia)." },
      }],
      distractors: ["Abito in Roma.", "Abito di Roma.", "Abita a Roma."],
      note: { es: "abitare a + ciudad; abitare in + país: abito in Italia.", en: "abitare a + city; abitare in + country: abito in Italia." },
      tags: ["introductions", "prepositions"],
    },
    {
      id: "parli-italiano", type: "phrase", pos: "phrase", target: "Parli italiano?", register: "informal",
      gloss: { es: "¿Hablas italiano?", en: "Do you speak Italian? (informal)" },
      distractors: ["Parla italiano?", "Parlo italiano?", "Parli italiana?"],
      tags: ["languages", "register", "chunk"],
    },
    {
      id: "parla-inglese", legacyId: "it-inglese", type: "phrase", pos: "phrase", target: "Parla inglese?", register: "formal",
      gloss: { es: "¿Habla inglés? (formal)", en: "Do you speak English? (formal)" },
      accept: [{ text: "Lei parla inglese?" }],
      distractors: ["Parli inglese?", "Parlo inglese?", "Parla inglesa?"],
      note: { es: "Con «Lei» se usa la 3.ª persona, igual que con «usted».", en: "With Lei the verb is 3rd person: parla." },
      tags: ["languages", "register", "chunk"],
    },
    {
      id: "parlo-un-po", type: "sentence", target: "Parlo spagnolo e un po' di italiano.",
      gloss: { es: "Hablo español y un poco de italiano.", en: "I speak Spanish and a little Italian." },
      accept: [{ text: "Parlo spagnolo e un po' d'italiano." }, { text: "Io parlo spagnolo e un po' di italiano." }],
      errors: [{
        text: "Parlo spagnolo e un pò di italiano.",
        feedback: { es: "«po'» lleva apóstrofo (es «poco» cortado), no acento.", en: "'po'' takes an apostrophe (it's short for 'poco'), not an accent." },
      }],
      note: { es: "«un po'» = un poco; lleva apóstrofo, no acento.", en: "'un po'' = a little; it takes an apostrophe, not an accent." },
      tags: ["languages"],
    },
    {
      id: "non-capisco", legacyId: "it-capisco", type: "sentence", target: "Non capisco.",
      gloss: { es: "No entiendo.", en: "I don't understand." },
      accept: [{ text: "Non ho capito.", feedback: { es: "«Non ho capito» = no entendí; muy común en conversación.", en: "'Non ho capito' = I didn't get that; very common in conversation." } }],
      errors: [{
        text: "No capisco.",
        feedback: { es: "La negación italiana es «non», no «no»: non capisco.", en: "Italian negation before a verb is 'non': non capisco." },
      }],
      distractors: ["No capisco.", "Non lo so.", "Non capito."],
      note: { es: "En conversación es muy común «Non ho capito» (no entendí).", en: "In conversation you'll often hear 'Non ho capito' (I didn't get that)." },
      tags: ["survival"],
    },
    {
      id: "puo-ripetere", legacyId: "it-ripetere", type: "sentence", target: "Può ripetere, per favore?", register: "formal",
      gloss: { es: "¿Puede repetir, por favor? (formal)", en: "Could you repeat that, please? (formal)" },
      accept: [
        { text: "Può ripetere?" },
        { text: "Può ripetere per favore?" },
        { text: "Puoi ripetere, per favore?", verdict: "almost", feedback: { es: "Correcto, pero informal (tu). Con Lei: può.", en: "Correct, but informal (tu). With Lei: può." } },
      ],
      distractors: ["Posso ripetere, per favore?", "Può ripete, per favore?", "Puoi ripeti, per favore?"],
      note: { es: "Può = usted puede (Lei). Con «tu»: «Puoi ripetere?».", en: "Può = can you (Lei). With tu: 'Puoi ripetere?'" },
      tags: ["survival", "register"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-essere", type: "pattern", target: "essere: sono, sei, è",
      gloss: { es: "ser/estar: soy, eres, es", en: "to be: I am, you are, he/she is" },
      forms: { io: "sono", tu: "sei", "lui/lei/Lei": "è" },
      pattern: {
        rule: {
          es: "essere = ser (y a veces estar): io sono, tu sei, lui/lei/Lei è. Ojo: «è» (es) lleva acento; «e» sin acento = y.",
          en: "essere = to be: io sono, tu sei, lui/lei/Lei è. Careful: 'è' (is) has an accent; 'e' without it means 'and'.",
        },
        table: [["io", "sono"], ["tu", "sei"], ["lui / lei / Lei", "è"]],
      },
      question: {
        prompt: { es: "Completa: «Anna ___ italiana.»", en: "Complete: 'Anna ___ italiana.'" },
        options: ["è", "e", "sei", "sono"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "essere"],
    },
    {
      id: "pat-are", type: "pattern", target: "parlo, parli, parla",
      gloss: { es: "verbos en -are (singular)", en: "-are verbs (singular)" },
      pattern: {
        rule: {
          es: "Quita -are y agrega -o, -i, -a: parlare → parlo, parli, parla. Como en español, el pronombre casi siempre se omite.",
          en: "Drop -are and add -o, -i, -a: parlare → parlo, parli, parla. The subject pronoun is usually left out.",
        },
        table: [["", "parlare", "abitare"], ["io", "parlo", "abito"], ["tu", "parli", "abiti"], ["lui / lei / Lei", "parla", "abita"]],
      },
      question: {
        prompt: { es: "Completa: «Tu ___ a Milano?»", en: "Complete: 'Tu ___ a Milano?'" },
        options: ["abiti", "abita", "abito", "abitare"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "present"],
    },
    {
      id: "pat-nazionalita", type: "pattern", target: "spagnolo/spagnola · inglese",
      gloss: { es: "adjetivos de nacionalidad: -o/-a y -e", en: "nationality adjectives: -o/-a and -e" },
      pattern: {
        rule: {
          es: "Los adjetivos en -o cambian a -a en femenino (italiano → italiana). Los terminados en -e no cambian (inglese, francese).",
          en: "Adjectives in -o change to -a for feminine (italiano → italiana). Those ending in -e don't change (inglese, francese).",
        },
        table: [["", "m", "f"], ["-o", "spagnolo", "spagnola"], ["-e", "inglese", "inglese"]],
      },
      question: {
        prompt: { es: "Anna es de Londres. Anna è…", en: "Anna is from London. Anna è…" },
        options: ["inglese", "inglesa", "inglesi", "inglesia"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "agreement"],
    },

    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-gli", legacyId: "it-s-gli", type: "sound", target: "figlio",
      gloss: { es: "hijo", en: "son" },
      distractors: ["filio", "figio", "fillo"],
      note: {
        es: "gli suena como una «ll» pronunciada con la lengua en el paladar (como en partes de España, Paraguay o los Andes), nunca «li» ni «sh».",
        en: "gli sounds like the 'lli' in 'million', said as one quick sound.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },
    {
      id: "s-gn", legacyId: "it-s-gn", type: "sound", target: "bagno",
      gloss: { es: "baño", en: "bathroom" },
      distractors: ["banio", "bango", "bano"],
      note: { es: "gn = ñ: bagno = baño, Spagna = España.", en: "gn sounds like 'ny' in 'canyon': bagno, Spagna." },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },
    {
      id: "s-sc", legacyId: "it-s-sc", type: "sound", target: "scena",
      gloss: { es: "escena", en: "scene" },
      distractors: ["schena", "sena", "cena"],
      note: {
        es: "sc + e/i suena «sh»: scena ≈ «shena». sch + e/i suena «sk»: schiena = espalda.",
        en: "sc + e/i sounds like 'sh': scena ≈ 'sheh-na'. sch + e/i sounds like 'sk': schiena (back).",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-nazione", legacyId: "it-p-zione1", type: "bridge", onlyFor: "es", target: "nazione",
      gloss: { es: "nación", en: "nation" },
      distractors: ["nacione", "naziona", "nazión"],
      note: { es: "-ción → -zione, y son femeninas: nación → la nazione, estación → la stazione." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-imbarazzato", legacyId: "it-f-imbarazzata", type: "bridge", onlyFor: "es", target: "imbarazzato",
      gloss: { es: "avergonzado/a", en: "embarrassed" },
      accept: [{ text: "imbarazzata" }],
      question: {
        prompt: { es: "«imbarazzato» significa…", en: "'imbarazzato' means…" },
        options: [
          { es: "avergonzado", en: "embarrassed" },
          { es: "embarazado", en: "pregnant" },
          { es: "embarrado", en: "muddy" },
          { es: "enojado", en: "angry" },
        ],
        answer: 0,
      },
      note: { es: "imbarazzato/a = avergonzado/a. Embarazada se dice «incinta»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
