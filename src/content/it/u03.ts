import type { Unit } from "../schema";
import { build, type Draft } from "../build";

const num = (id: string, target: string, es: string, en: string, distractors: string[], extra: Partial<Draft> = {}): Draft => ({
  id, type: "word", pos: "num", target, gloss: { es, en }, distractors, tags: ["numbers"], ...extra,
});

export const unit: Unit = {
  id: "it-u03",
  lang: "it",
  index: 3,
  cefr: "A1.1",
  title: { target: "Numeri", es: "Números", en: "Numbers" },
  canDo: [
    { es: "Puedo decir y entender números del 0 al 100.", en: "I can say and understand numbers from 0 to 100." },
    { es: "Puedo decir mi edad, mi teléfono y deletrear mi nombre.", en: "I can give my age and phone number, and spell my name." },
    { es: "Oigo la diferencia entre consonantes simples y dobles.", en: "I can hear the difference between single and double consonants." },
  ],
  icon: "🔢",
  items: build("it", 3, "A1.1", [
    // ── Numbers ──────────────────────────────────────────────
    num("uno", "uno", "uno (1)", "one (1)", ["nove", "due", "undici"]),
    num("due", "due", "dos (2)", "two (2)", ["dieci", "dodici", "tre"]),
    num("tre", "tre", "tres (3)", "three (3)", ["tredici", "trenta", "sei"]),
    num("quattro", "quattro", "cuatro (4)", "four (4)", ["quattordici", "quaranta", "quatro"], {
      note: { es: "Con doble t: quattro.", en: "Double t: quattro." },
    }),
    num("cinque", "cinque", "cinco (5)", "five (5)", ["cinquanta", "quindici", "cinqui"], {
      note: { es: "ci suena «chi»: cinque ≈ «chínkue».", en: "ci sounds like 'chee': cinque ≈ 'cheen-kweh'." },
    }),
    num("sei", "sei", "seis (6)", "six (6)", ["sette", "sedici", "se"], {
      note: { es: "«sei» también significa «(tú) eres»: sei italiano?", en: "'sei' also means 'you are': sei italiano?" },
    }),
    num("sette", "sette", "siete (7)", "seven (7)", ["sete", "settanta", "sei"], {
      legacyId: "it-sette",
      note: { es: "Patrón ie → e: siete → sette. Con una sola t, «sete» = sed.", en: "Double t matters: sette = seven, sete = thirst." },
    }),
    num("otto", "otto", "ocho (8)", "eight (8)", ["otte", "ottanta", "dotto"], {
      note: { es: "ch → tt: ocho → otto, noche → notte.", en: "Double t: otto." },
    }),
    num("nove", "nove", "nueve (9)", "nine (9)", ["nono", "novanta", "nuove"], {
      note: { es: "ue → o: nueve → nove. Ojo: «nono» = noveno.", en: "Careful: 'nono' = ninth." },
    }),
    num("dieci", "dieci", "diez (10)", "ten (10)", ["dici", "dodici", "dicci"], { legacyId: "it-dieci" }),
    num("undici", "undici", "once (11)", "eleven (11)", ["dodici", "ondici", "undeci"]),
    num("venti", "venti", "veinte (20)", "twenty (20)", ["vento", "trenta", "vendi"], { legacyId: "it-venti" }),
    num("trenta", "trenta", "treinta (30)", "thirty (30)", ["tredici", "tranta", "quaranta"]),
    num("cento", "cento", "cien (100)", "a hundred (100)", ["cinto", "cinquanta", "mille"], { legacyId: "it-cento" }),
    {
      id: "pat-ventuno", type: "pattern", target: "ventuno, ventotto, ventitré",
      gloss: { es: "21, 28, 23: las decenas pierden la vocal ante uno y otto", en: "21, 28, 23: tens drop their vowel before uno and otto" },
      pattern: {
        rule: {
          es: "Delante de «uno» y «otto», las decenas pierden la vocal: venti + otto = ventotto. Con «tre» al final se escribe acento: ventitré.",
          en: "Before 'uno' and 'otto', the tens drop their last vowel: venti + otto = ventotto. A final 'tre' takes an accent: ventitré.",
        },
        table: [["21", "ventuno"], ["23", "ventitré"], ["28", "ventotto"], ["31", "trentuno"], ["38", "trentotto"]],
      },
      question: {
        prompt: { es: "¿Cómo se dice 38?", en: "How do you say 38?" },
        options: ["trentotto", "trentaotto", "trenta e otto", "trentotte"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "numbers"],
    },

    // ── Age ──────────────────────────────────────────────────
    {
      id: "quanti-anni", type: "phrase", pos: "phrase", target: "Quanti anni hai?", register: "informal",
      gloss: { es: "¿Cuántos años tienes?", en: "How old are you? (informal)" },
      errors: [{
        text: "Quanti anni sei?",
        feedback: { es: "La edad va con «avere»: quanti anni hai?", en: "Italian uses 'avere' (to have) for age: Quanti anni hai?" },
      }],
      distractors: ["Quanti anni sei?", "Quanto anni hai?", "Quanti anno hai?"],
      note: { es: "Como en español, con «tener». Con Lei: «Quanti anni ha?».", en: "Literally 'how many years do you have?'. With Lei: 'Quanti anni ha?'" },
      tags: ["age", "register", "chunk"],
    },
    {
      id: "ho-anni", type: "sentence", target: "Ho trent'anni.",
      gloss: { es: "Tengo treinta años.", en: "I'm thirty (years old)." },
      accept: [{ text: "Ho trenta anni." }, { text: "Io ho trent'anni." }],
      errors: [
        { text: "Sono trent'anni.", feedback: { es: "La edad va con «avere»: ho trent'anni.", en: "Age uses 'avere': ho trent'anni (lit. 'I have thirty years')." } },
        { text: "Sono trenta anni.", feedback: { es: "La edad va con «avere»: ho trent'anni.", en: "Age uses 'avere': ho trent'anni (lit. 'I have thirty years')." } },
      ],
      distractors: ["Sono trent'anni.", "Ho trenta anno.", "Ha trent'anni."],
      note: { es: "Antes de «anni» se suele apostrofar: trent'anni, vent'anni.", en: "Before 'anni' the vowel is usually elided: trent'anni, vent'anni." },
      tags: ["age"],
    },
    {
      id: "pat-avere", type: "pattern", target: "ho, hai, ha",
      gloss: { es: "avere (tener): tengo, tienes, tiene", en: "avere (to have): I have, you have, he/she has" },
      forms: { io: "ho", tu: "hai", "lui/lei/Lei": "ha" },
      pattern: {
        rule: {
          es: "avere = tener; la h no suena: ho ≈ «o», hai ≈ «ai». La edad va con avere, como en español: ho vent'anni.",
          en: "avere = to have; the h is silent: ho ≈ 'oh'. Age uses avere, not 'to be': ho vent'anni (I'm twenty).",
        },
        table: [["io", "ho"], ["tu", "hai"], ["lui / lei / Lei", "ha"]],
      },
      question: {
        prompt: { es: "Completa: «Marco ___ ventidue anni.»", en: "Complete: 'Marco ___ ventidue anni.'" },
        options: ["ha", "è", "hai", "ho"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "avere"],
    },

    // ── Phone, spelling, forms ───────────────────────────────
    {
      id: "numero-telefono", type: "word", pos: "noun", target: "il numero di telefono", gender: "m", plural: "i numeri di telefono",
      gloss: { es: "el número de teléfono", en: "the phone number" },
      accept: [{ text: "il numero di cellulare", feedback: { es: "= número de celular (móvil).", en: "= mobile/cell number." } }],
      distractors: ["il numero da telefono", "la numero di telefono", "il nome di telefono"],
      tags: ["contact"],
    },
    {
      id: "chiocciola", type: "word", pos: "noun", target: "la chiocciola", gender: "f", plural: "le chiocciole",
      gloss: { es: "la arroba (@)", en: "the at sign (@)" },
      distractors: ["la ciocciola", "il punto", "la chiocciolina"],
      note: { es: "Literalmente «el caracol». El punto de un e-mail se dice «punto».", en: "Literally 'the snail'. The dot in an e-mail address is 'punto'." },
      tags: ["contact"],
    },
    {
      id: "come-si-scrive", type: "phrase", pos: "phrase", target: "Come si scrive?",
      gloss: { es: "¿Cómo se escribe?", en: "How do you spell it?" },
      distractors: ["Come si chiama?", "Come si dice?", "Come scrivi?"],
      note: { es: "«Come si dice…?» = ¿Cómo se dice…?", en: "'Come si dice…?' = How do you say…?" },
      tags: ["contact", "chunk"],
    },
    {
      id: "cognome", legacyId: "it-cognome", type: "word", pos: "noun", target: "il cognome", gender: "m", plural: "i cognomi",
      gloss: { es: "el apellido", en: "the surname / last name" },
      distractors: ["il nome", "il soprannome", "il cugino"],
      note: { es: "nome = nombre de pila; cognome = apellido.", en: "nome = first name; cognome = surname." },
      tags: ["forms"],
    },
    {
      id: "data-nascita", legacyId: "it-datanascita", type: "word", pos: "noun", target: "la data di nascita", gender: "f", plural: "le date di nascita",
      gloss: { es: "la fecha de nacimiento", en: "the date of birth" },
      distractors: ["il luogo di nascita", "il compleanno", "la data da nascita"],
      tags: ["forms"],
    },
    {
      id: "maggio", legacyId: "it-maggio", type: "word", pos: "other", target: "maggio",
      gloss: { es: "mayo", en: "May" },
      distractors: ["marzo", "maggiore", "magio"],
      note: { es: "Los meses van en minúscula: gennaio, aprile, maggio.", en: "Months are lowercase in Italian: gennaio, aprile, maggio." },
      tags: ["dates"],
    },
    {
      id: "primo-maggio", legacyId: "it-primomaggio", type: "phrase", pos: "phrase", target: "il primo maggio",
      gloss: { es: "el 1 de mayo", en: "the 1st of May" },
      accept: [{ text: "il 1° maggio" }, { text: "il primo di maggio" }],
      errors: [{
        text: "il uno maggio",
        feedback: { es: "El día 1 es «primo»; los demás con número: il due maggio.", en: "The 1st is 'primo'; other days use the number: il due maggio." },
      }],
      distractors: ["il uno maggio", "la prima maggio", "il primo marzo"],
      note: { es: "El día 1 es «primo»; los demás, con número: il due maggio. Los meses van en minúscula.", en: "The 1st is 'primo'; other days use the plain number: il due maggio. Months are lowercase." },
      tags: ["dates"],
    },
    {
      id: "che-giorno", legacyId: "it-chegiorno", type: "phrase", pos: "phrase", target: "Che giorno è oggi?",
      gloss: { es: "¿Qué día es hoy?", en: "What day is it today?" },
      accept: [{ text: "Che giorno è?" }],
      distractors: ["Che ora è oggi?", "Che giorno ha oggi?", "Quale giorno oggi?"],
      tags: ["dates", "chunk"],
    },

    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-nn", legacyId: "it-s-nn", type: "sound", target: "nonno",
      gloss: { es: "abuelo", en: "grandfather" },
      pair: ["nono", "nonno"], slow: true,
      distractors: ["nono", "nonnò", "nomo"],
      note: {
        es: "Las dobles se sostienen un instante más: nonno = abuelo; nono = noveno.",
        en: "Double consonants are held a moment longer: nonno = grandfather; nono = ninth.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "doubles"],
    },
    {
      id: "s-ll", legacyId: "it-s-ll", type: "sound", target: "palla",
      gloss: { es: "pelota", en: "ball" },
      pair: ["pala", "palla"], slow: true,
      distractors: ["pala", "paglia", "balla"],
      note: { es: "Doble consonante: palla = pelota; pala = pala.", en: "Double consonant: palla = ball; pala = shovel." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "doubles"],
    },

    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-telefono", type: "listening", target: "Il mio numero è tre quattro sette, due due cinque, otto nove.",
      gloss: { es: "Mi número es 347 225 89.", en: "My number is 347 225 89." },
      question: {
        prompt: { es: "¿Cuál es el número?", en: "What's the number?" },
        options: [
          { es: "347 225 89", en: "347 225 89" },
          { es: "347 252 89", en: "347 252 89" },
          { es: "374 225 89", en: "374 225 89" },
          { es: "347 225 98", en: "347 225 98" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "numbers"],
    },
  ]),
};
