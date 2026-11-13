import type { PlacementItem } from "../schema";
import { spreadAnswers } from "../build";

// 36 items · 6 per band (A0, A1.1, A1.2, A2, B1, B2) · per band: 2 vocab, 2 grammar,
// 1 listening, 1 reading. At least one false friend per band (weighted ×1.5 for es→it).
// b: A0 −2.5 · A1.1 −1.5 · A1.2 −0.5 · A2 +0.5 · B1 +1.5 · B2 +2.5 (±0.4 within band).
const bank: PlacementItem[] = [
  // ── A0 ─────────────────────────────────────────────────────
  {
    id: "it-p-01", lang: "it", cefr: "A0", b: -2.8, skill: "vocab", kind: "mcq", stem: "Buonanotte!",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "¡Buenas noches! (al irse a dormir)", en: "Good night!" },
        { es: "¡Buenos días!", en: "Good morning!" },
        { es: "¡Hasta luego!", en: "See you later!" },
        { es: "¡Gracias!", en: "Thank you!" },
      ],
      answer: 0,
    },
    seeds: ["it-u01-buonanotte", "it-u01-buonasera", "it-u01-buongiorno"],
  },
  {
    id: "it-p-02", lang: "it", cefr: "A0", b: -2.2, skill: "vocab", kind: "mcq", stem: "il burro", falseFriend: true,
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la mantequilla (manteca)", en: "butter" },
        { es: "el burro (animal)", en: "the donkey" },
        { es: "el borracho", en: "the drunk" },
        { es: "el barro", en: "mud" },
      ],
      answer: 0,
    },
    seeds: ["it-u04-br-burro"],
  },
  {
    id: "it-p-03", lang: "it", cefr: "A0", b: -2.6, skill: "grammar", kind: "cloze", stem: "Ciao! Come ti ___?",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["chiami", "chiama", "chiamo", "chiamate"],
      answer: 0,
    },
    seeds: ["it-u01-come-ti-chiami", "it-u01-mi-chiamo"],
  },
  {
    id: "it-p-04", lang: "it", cefr: "A0", b: -2.3, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: {
        es: "Quieres llamar la atención de un camarero que no conoces. ¿Qué dices?",
        en: "You want to get a waiter's attention (a stranger). What do you say?",
      },
      options: ["Scusi!", "Scusa!", "Scuso!", "Prego!"],
      answer: 0,
    },
    seeds: ["it-u01-scusi", "it-u01-scusa", "it-u01-pat-tu-lei"],
  },
  {
    id: "it-p-05", lang: "it", cefr: "A0", b: -2.5, skill: "listening", kind: "listen", spoken: "Buonasera, signora.",
    mcq: {
      prompt: { es: "¿Qué oíste?", en: "What did you hear?" },
      options: ["Buonasera, signora.", "Buongiorno, signora.", "Buonanotte, signora.", "Arrivederci, signora."],
      answer: 0,
    },
    seeds: ["it-u01-buonasera"],
  },
  {
    id: "it-p-06", lang: "it", cefr: "A0", b: -2.4, skill: "reading", kind: "mcq", stem: "Ciao, mi chiamo Luca. E tu?",
    mcq: {
      prompt: { es: "¿Qué dice Luca?", en: "What does Luca say?" },
      options: [
        { es: "Dice su nombre y pregunta el tuyo.", en: "He says his name and asks yours." },
        { es: "Dice que se va.", en: "He says he's leaving." },
        { es: "Pregunta cómo estás.", en: "He asks how you are." },
        { es: "Dice de dónde es.", en: "He says where he's from." },
      ],
      answer: 0,
    },
    seeds: ["it-u01-mi-chiamo", "it-u01-ciao"],
  },

  // ── A1.1 ───────────────────────────────────────────────────
  {
    id: "it-p-07", lang: "it", cefr: "A1.1", b: -1.4, skill: "vocab", kind: "mcq", stem: "la camera", falseFriend: true,
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la habitación", en: "the room" },
        { es: "la cámara de fotos", en: "the camera" },
        { es: "el camarero", en: "the waiter" },
        { es: "la cama", en: "the bed" },
      ],
      answer: 0,
    },
    seeds: ["it-u06-camera"],
  },
  {
    id: "it-p-08", lang: "it", cefr: "A1.1", b: -1.8, skill: "vocab", kind: "mcq", stem: "la sorella",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la hermana", en: "the sister" },
        { es: "la abuela", en: "the grandmother" },
        { es: "la tía", en: "the aunt" },
        { es: "la hija", en: "the daughter" },
      ],
      answer: 0,
    },
    seeds: ["it-u05-sorella", "it-u05-fratello"],
  },
  {
    id: "it-p-09", lang: "it", cefr: "A1.1", b: -1.7, skill: "grammar", kind: "cloze", stem: "Marco ___ italiano, di Napoli.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["è", "ha", "sei", "sono"],
      answer: 0,
    },
    seeds: ["it-u02-pat-essere"],
  },
  {
    id: "it-p-10", lang: "it", cefr: "A1.1", b: -1.2, skill: "grammar", kind: "cloze", stem: "Al bar: «Vorrei ___ spremuta, per favore.»",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["una", "un", "uno", "un'"],
      answer: 0,
    },
    seeds: ["it-u04-pat-un-uno-una", "it-u04-vorrei"],
  },
  {
    id: "it-p-11", lang: "it", cefr: "A1.1", b: -1.5, skill: "listening", kind: "listen", spoken: "Ho ventotto anni.",
    mcq: {
      prompt: { es: "¿Cuántos años tiene?", en: "How old is the speaker?" },
      options: [{ es: "28", en: "28" }, { es: "38", en: "38" }, { es: "27", en: "27" }, { es: "82", en: "82" }],
      answer: 0,
    },
    seeds: ["it-u03-pat-ventuno", "it-u03-quanti-anni"],
  },
  {
    id: "it-p-12", lang: "it", cefr: "A1.1", b: -1.3, skill: "reading", kind: "mcq",
    stem: "Il bar apre alle sette. Anna prende un cappuccino e un cornetto.",
    mcq: {
      prompt: { es: "¿Qué come Anna?", en: "What does Anna eat?" },
      options: [
        { es: "Un cruasán (medialuna)", en: "A croissant" },
        { es: "Un sándwich", en: "A sandwich" },
        { es: "Un helado", en: "An ice cream" },
        { es: "Nada", en: "Nothing" },
      ],
      answer: 0,
    },
    seeds: ["it-u04-cornetto", "it-u04-cappuccino"],
  },

  // ── A1.2 ───────────────────────────────────────────────────
  {
    id: "it-p-13", lang: "it", cefr: "A1.2", b: -0.3, skill: "vocab", kind: "mcq", stem: "salire", falseFriend: true,
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "subir", en: "to go up" },
        { es: "salir", en: "to go out" },
        { es: "saltar", en: "to jump" },
        { es: "saludar", en: "to greet" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-14", lang: "it", cefr: "A1.2", b: -0.7, skill: "vocab", kind: "mcq", stem: "la settimana",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la semana", en: "the week" },
        { es: "el fin de semana", en: "the weekend" },
        { es: "el mes", en: "the month" },
        { es: "el séptimo", en: "the seventh" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-15", lang: "it", cefr: "A1.2", b: -0.6, skill: "grammar", kind: "cloze", stem: "A Luca ___ molto gli spaghetti.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["piacciono", "piace", "piacete", "piaci"],
      answer: 0,
    },
  },
  {
    id: "it-p-16", lang: "it", cefr: "A1.2", b: -0.2, skill: "grammar", kind: "cloze", stem: "Ieri Marco ___ andato al cinema.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["è", "ha", "hanno", "era"],
      answer: 0,
    },
  },
  {
    id: "it-p-17", lang: "it", cefr: "A1.2", b: -0.5, skill: "listening", kind: "listen", spoken: "Di solito mi alzo alle sette e mezza.",
    mcq: {
      prompt: { es: "¿A qué hora se levanta normalmente?", en: "What time does the speaker usually get up?" },
      options: [{ es: "7:30", en: "7:30" }, { es: "7:15", en: "7:15" }, { es: "6:30", en: "6:30" }, { es: "8:30", en: "8:30" }],
      answer: 0,
    },
  },
  {
    id: "it-p-18", lang: "it", cefr: "A1.2", b: -0.4, skill: "reading", kind: "mcq",
    stem: "Sabato mattina Luca va al mercato. Compra frutta e verdura, poi pranza dalla nonna.",
    mcq: {
      prompt: { es: "¿Dónde almuerza Luca el sábado?", en: "Where does Luca have lunch on Saturday?" },
      options: [
        { es: "En casa de su abuela", en: "At his grandmother's" },
        { es: "En el mercado", en: "At the market" },
        { es: "En un restaurante", en: "In a restaurant" },
        { es: "En su casa, solo", en: "At home, alone" },
      ],
      answer: 0,
    },
  },

  // ── A2 ─────────────────────────────────────────────────────
  {
    id: "it-p-19", lang: "it", cefr: "A2", b: 0.4, skill: "vocab", kind: "mcq", stem: "il negozio", falseFriend: true,
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "la tienda", en: "the shop" },
        { es: "el negocio (la empresa)", en: "the business deal" },
        { es: "la oficina", en: "the office" },
        { es: "la negociación", en: "the negotiation" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-20", lang: "it", cefr: "A2", b: 0.6, skill: "vocab", kind: "mcq", stem: "prenotare",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "reservar", en: "to book" },
        { es: "prestar", en: "to lend" },
        { es: "pronunciar", en: "to pronounce" },
        { es: "preocuparse", en: "to worry" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-21", lang: "it", cefr: "A2", b: 0.7, skill: "grammar", kind: "cloze", stem: "Da bambino ___ sempre al mare con i nonni.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["andavo", "sono andato", "andrò", "vado"],
      answer: 0,
    },
  },
  {
    id: "it-p-22", lang: "it", cefr: "A2", b: 0.3, skill: "grammar", kind: "cloze", stem: "— Quanti caffè bevi al giorno? — ___ bevo tre.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["Ne", "Li", "Ci", "Lo"],
      answer: 0,
    },
  },
  {
    id: "it-p-23", lang: "it", cefr: "A2", b: 0.5, skill: "listening", kind: "listen", spoken: "Domani pioverà, quindi resterò a casa a leggere.",
    mcq: {
      prompt: { es: "¿Qué hará mañana?", en: "What will the speaker do tomorrow?" },
      options: [
        { es: "Se quedará en casa.", en: "Stay at home." },
        { es: "Irá a la playa.", en: "Go to the beach." },
        { es: "Saldrá con amigos.", en: "Go out with friends." },
        { es: "Irá a la biblioteca.", en: "Go to the library." },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-24", lang: "it", cefr: "A2", b: 0.8, skill: "reading", kind: "mcq",
    stem: "Cercasi cameriere/a con esperienza. Orario: dal martedì alla domenica, solo la sera. Lunedì chiuso.",
    mcq: {
      prompt: { es: "¿Qué día no se trabaja?", en: "Which day is there no work?" },
      options: [
        { es: "El lunes", en: "Monday" },
        { es: "El martes", en: "Tuesday" },
        { es: "El sábado", en: "Saturday" },
        { es: "El domingo", en: "Sunday" },
      ],
      answer: 0,
    },
  },

  // ── B1 ─────────────────────────────────────────────────────
  {
    id: "it-p-25", lang: "it", cefr: "B1", b: 1.4, skill: "vocab", kind: "mcq", stem: "l'esito", falseFriend: true,
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "el resultado", en: "the outcome" },
        { es: "el éxito", en: "the success" },
        { es: "la salida", en: "the exit" },
        { es: "el exilio", en: "the exile" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-26", lang: "it", cefr: "B1", b: 1.2, skill: "vocab", kind: "mcq", stem: "nonostante",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "a pesar de", en: "despite" },
        { es: "mientras", en: "while" },
        { es: "porque", en: "because" },
        { es: "por lo tanto", en: "therefore" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-27", lang: "it", cefr: "B1", b: 1.5, skill: "grammar", kind: "cloze", stem: "Penso che Marco ___ ragione.",
    mcq: {
      prompt: { es: "Completa la frase (italiano estándar).", en: "Complete the sentence (standard Italian)." },
      options: ["abbia", "abbiamo", "avesse avuto", "avere"],
      answer: 0,
    },
  },
  {
    id: "it-p-28", lang: "it", cefr: "B1", b: 1.8, skill: "grammar", kind: "cloze", stem: "Se avessi più tempo, ___ un corso di cucina.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["farei", "faccio", "farò", "facessi"],
      answer: 0,
    },
  },
  {
    id: "it-p-29", lang: "it", cefr: "B1", b: 1.7, skill: "listening", kind: "listen", spoken: "Se l'avessi saputo prima, ti avrei avvisato.",
    mcq: {
      prompt: { es: "¿Qué quiere decir?", en: "What does the speaker mean?" },
      options: [
        { es: "No lo supo a tiempo para avisarte.", en: "They didn't know in time to warn you." },
        { es: "Ya te había avisado.", en: "They had already warned you." },
        { es: "Te avisará mañana.", en: "They'll warn you tomorrow." },
        { es: "No quiere avisarte.", en: "They don't want to warn you." },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-30", lang: "it", cefr: "B1", b: 1.3, skill: "reading", kind: "mcq",
    stem: "Il museo, che è stato restaurato l'anno scorso, sarà aperto anche il lunedì a partire da marzo.",
    mcq: {
      prompt: { es: "¿Qué cambia a partir de marzo?", en: "What changes from March?" },
      options: [
        { es: "También abrirá los lunes.", en: "It will also open on Mondays." },
        { es: "Cerrará por restauración.", en: "It will close for restoration." },
        { es: "La entrada será gratis.", en: "Entry will be free." },
        { es: "Abrirá solo los lunes.", en: "It will open only on Mondays." },
      ],
      answer: 0,
    },
  },
  // ── B2 (added with units 19–24) ────────────────────────────
  {
    id: "it-p-31", lang: "it", cefr: "B2", b: 2.3, skill: "vocab", kind: "mcq", stem: "Cosa intendi dire?", falseFriend: true,
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "¿Qué quieres decir?", en: "What do you mean?" },
        { es: "¿Qué entiendes?", en: "What do you understand?" },
        { es: "¿Qué piensas hacer?", en: "What are you planning to do?" },
        { es: "¿A quién se lo quieres decir?", en: "Who do you want to tell?" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-32", lang: "it", cefr: "B2", b: 2.6, skill: "vocab", kind: "mcq", stem: "una somma ingente",
    mcq: {
      prompt: { es: "¿Qué significa?", en: "What does it mean?" },
      options: [
        { es: "una suma enorme", en: "a huge sum" },
        { es: "una suma ingenua", en: "a naive sum" },
        { es: "una suma urgente", en: "an urgent sum" },
        { es: "una suma insuficiente", en: "an insufficient sum" },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-33", lang: "it", cefr: "B2", b: 2.3, skill: "grammar", kind: "cloze", stem: "Se l'avessi saputo, te lo ___ detto.",
    mcq: {
      prompt: { es: "Completa la frase.", en: "Complete the sentence." },
      options: ["avrei", "avessi", "avrò", "ho"],
      answer: 0,
    },
  },
  {
    id: "it-p-34", lang: "it", cefr: "B2", b: 2.6, skill: "grammar", kind: "cloze", stem: "Benché ___ tardi, siamo usciti lo stesso.",
    mcq: {
      prompt: { es: "Completa la frase (italiano estándar).", en: "Complete the sentence (standard Italian)." },
      options: ["fosse", "era", "è", "sarebbe"],
      answer: 0,
    },
  },
  {
    id: "it-p-35", lang: "it", cefr: "B2", b: 2.7, skill: "listening", kind: "listen", spoken: "Mi aveva detto che sarebbe passato a prendermi, ma non si è fatto vivo.",
    mcq: {
      prompt: { es: "¿Qué pasó?", en: "What happened?" },
      options: [
        { es: "Dijo que pasaría a buscarme, pero no apareció.", en: "He said he'd pick me up, but he never showed up." },
        { es: "Pasó a buscarme, pero tarde.", en: "He picked me up, but late." },
        { es: "Me llamó para decir que no venía.", en: "He called to say he wasn't coming." },
        { es: "Fui yo a buscarlo a él.", en: "I went to pick him up." },
      ],
      answer: 0,
    },
  },
  {
    id: "it-p-36", lang: "it", cefr: "B2", b: 2.4, skill: "reading", kind: "mcq",
    stem: "Visto l'elevato numero di richieste, le iscrizioni chiuderanno con una settimana di anticipo rispetto alla data prevista.",
    mcq: {
      prompt: { es: "¿Qué va a pasar con las inscripciones?", en: "What will happen to registration?" },
      options: [
        { es: "Cerrarán una semana antes de lo previsto.", en: "It will close a week earlier than planned." },
        { es: "Se prolongarán una semana más.", en: "It will be extended by a week." },
        { es: "Abrirán dentro de una semana.", en: "It will open in a week." },
        { es: "Habrá más plazas la semana que viene.", en: "There will be more places next week." },
      ],
      answer: 0,
    },
  },
];

export const placement: PlacementItem[] = spreadAnswers(bank);
