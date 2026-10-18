import type { Item } from "@/lib/types";

// Italian content. Bridge language: Spanish (rioplatense-friendly notes).
// M0 = sounds + Spanish→Italian patterns + false friends. M1 = "Lavello survival kit" (starter slice).

type Partial_ = Omit<Item, "lang" | "id"> & { id: string };
const it = (x: Partial_): Item => ({ ...x, id: `it-${x.id}`, lang: "it" });

const sound = (id: string, answer: string, prompt: string, choices: string[], note: string) =>
  it({ id, module: "M0", kind: "sound", prompt, answer, note, guess: { q: "Escuchá y elegí cómo se escribe", choices, a: answer } });

const pattern = (id: string, prompt: string, answer: string, choices: string[], note: string) =>
  it({ id, module: "M0", kind: "pattern", prompt, answer, note, guess: { q: `${prompt} → ?`, choices, a: answer } });

const ff = (id: string, answer: string, meaning: string, choices: string[], note: string) =>
  it({ id, module: "M0", kind: "falsefriend", prompt: meaning, answer, note, guess: { q: `«${answer}» significa…`, choices, a: meaning } });

const w = (id: string, prompt: string, answer: string, extra: Partial<Item> = {}) =>
  it({ id, module: "M1", kind: answer.split(" ").length >= 3 ? "phrase" : "word", prompt, answer, ...extra });

export const ITALIAN: Item[] = [
  // ── M0 · Sounds ──────────────────────────────────────────────
  sound("s-ch", "chiesa", "iglesia", ["chiesa", "ciesa", "ghiesa", "sciesa"], "ch + e/i suena K, como en «queso». chiesa = iglesia."),
  sound("s-ci", "ciao", "hola / chau", ["ciao", "chiao", "sciao", "giao"], "c + e/i suena como la «ch» castellana: ciao ≈ «chao»."),
  sound("s-gli", "figlio", "hijo", ["figlio", "filio", "figio", "fillo"], "gli es una «ll» lateral (como en el español de España antiguo), no la «sh» porteña."),
  sound("s-gn", "bagno", "baño", ["bagno", "banio", "bango", "bano"], "gn = ñ. bagno = baño."),
  sound("s-nn", "nonno", "abuelo", ["nonno", "nono"], "Las dobles se sostienen un instante más. nonno = abuelo; nono = noveno."),
  sound("s-ll", "palla", "pelota", ["palla", "pala"], "Doble consonante: palla = pelota; pala = pala."),
  sound("s-sc", "scena", "escena", ["scena", "schena", "sena", "cena"], "sc + e/i suena «sh»: scena ≈ «shena». sch + e/i suena «sk»: schiena = espalda."),
  sound("s-z", "zio", "tío", ["zio", "sio", "tio", "cio"], "z suena «ts» (o «dz»): zio ≈ «tsío» = tío."),
  sound("s-g", "gelato", "helado", ["gelato", "ghelato", "jelato", "chelato"], "g + e/i suena «dy» (como «gin» en inglés), parecida a tu «y» porteña pero con «d». gh + e/i = g dura."),

  // ── M0 · Bridge patterns (Spanish → Italian) ─────────────────
  pattern("p-zione1", "nación", "nazione", ["nazione", "nacione", "naziona", "nazión"], "-ción → -zione: nación → nazione, estación → stazione."),
  pattern("p-zione2", "información", "informazione", ["informazione", "informacione", "informaziona", "informazzione"], "-ción → -zione. Todas son femeninas: l'informazione."),
  pattern("p-ta1", "ciudad", "città", ["città", "cittade", "ciutà", "cità"], "-dad → -tà (con acento): ciudad → città, libertad → libertà."),
  pattern("p-ta2", "universidad", "università", ["università", "universitade", "universidà", "universitá"], "-dad → -tà: universidad → università. El acento va hacia abajo: à."),
  pattern("p-bile", "posible", "possibile", ["possibile", "posible", "possible", "posibile"], "-ble → -bile: posible → possibile, increíble → incredibile."),
  pattern("p-tt1", "noche", "notte", ["notte", "noche", "notche", "nocte"], "«ch» de un «ct» latino → tt: noche → notte, ocho → otto."),
  pattern("p-tt2", "leche", "latte", ["latte", "leche", "lette", "lacte"], "ch → tt: leche → latte (¡como el café latte!)."),
  pattern("p-ie", "tiempo", "tempo", ["tempo", "tiempo", "tiempe", "tembo"], "ie → e: tiempo → tempo, fiesta → festa, siete → sette."),
  pattern("p-ue", "puerta", "porta", ["porta", "puerta", "porte", "puorta"], "ue → o: puerta → porta, fuerte → forte (a veces uo: nuevo → nuovo)."),
  pattern("p-chi", "llave", "chiave", ["chiave", "llave", "liave", "ciave"], "ll- inicial → chi/pi/fi: llave → chiave, lleno → pieno, llamar → chiamare."),
  pattern("p-gli", "hijo", "figlio", ["figlio", "fijo", "filio", "hijo"], "j → gli: hijo → figlio, ajo → aglio, mujer → moglie (esposa)."),

  // ── M0 · False friends ───────────────────────────────────────
  ff("f-burro", "burro", "manteca", ["manteca", "burro (animal)", "borracho", "barro"], "burro = manteca. El animal es «l'asino»."),
  ff("f-caldo", "caldo", "caliente", ["caliente", "caldo (sopa)", "frío", "calvo"], "caldo = caliente; freddo = frío. El caldo de sopa es «il brodo»."),
  ff("f-salire", "salire", "subir", ["subir", "salir", "saltar", "saludar"], "salire = subir. Salir es «uscire»."),
  ff("f-guardare", "guardare", "mirar", ["mirar", "guardar", "esperar", "cuidar"], "guardare = mirar. Guardar (algo) es «mettere via»."),
  ff("f-camera", "camera", "habitación", ["habitación", "cámara de fotos", "camarero", "cama"], "camera = habitación (camera da letto = dormitorio)."),
  ff("f-subito", "subito", "enseguida", ["enseguida", "de repente", "subido", "sumiso"], "subito = enseguida, ya. «De repente» es «all'improvviso»."),
  ff("f-gamba", "gamba", "pierna", ["pierna", "camarón", "jamón", "rodilla"], "gamba = pierna. El camarón es «il gambero»."),
  ff("f-imbarazzata", "imbarazzata", "avergonzada", ["avergonzada", "embarazada", "embarrada", "enojada"], "imbarazzata = avergonzada. Embarazada es «incinta»."),
  ff("f-largo", "largo", "ancho", ["ancho", "largo", "lejos", "grande"], "largo = ancho; lungo = largo."),
  ff("f-fermare", "fermare", "detener", ["detener", "firmar", "cerrar", "fermentar"], "fermare = detener, parar. Firmar es «firmare» (¡útil en el comune!)."),
  ff("f-topo", "topo", "ratón", ["ratón", "topo (animal)", "tope", "tapa"], "topo = ratón. El topo (animal) es «la talpa»."),

  // ── M1 · Lavello survival kit · greetings & you ──────────────
  w("buongiorno", "Buen día", "Buongiorno", { alts: ["buon giorno"], note: "Se usa desde la mañana hasta media tarde." }),
  w("buonasera", "Buenas tardes (al llegar)", "Buonasera", { alts: ["buona sera"], note: "Desde la tarde. «Buonanotte» es solo para despedirse a la noche." }),
  w("arrivederci", "Hasta luego (formal)", "Arrivederci", { note: "Más formal todavía: «ArrivederLa»." }),
  w("grazie", "Muchas gracias", "Grazie mille"),
  w("perfavore", "Por favor", "Per favore", { alts: ["per piacere", "per cortesia"] }),
  w("scusi", "Disculpe (formal)", "Scusi", { note: "Scusi = formal (Lei, como «usted»). Scusa = informal (tu)." }),
  w("piacere", "Mucho gusto", "Piacere", { note: "Al presentarte: «Piacere, Gabriela»." }),
  w("michiamo", "Me llamo Gabriela", "Mi chiamo Gabriela"),
  w("argentina", "Soy argentina", "Sono argentina"),
  w("zurigo", "Vivo en Zúrich", "Abito a Zurigo", { alts: ["vivo a zurigo"], note: "abitare a + ciudad. Zúrich en italiano es «Zurigo»." }),
  w("capisco", "No entiendo", "Non capisco"),
  w("ripetere", "¿Puede repetir, por favor?", "Può ripetere, per favore?", { alts: ["può ripetere?"], note: "può (3ª persona) = usted puede." }),
  w("inglese", "¿Habla inglés? (formal)", "Parla inglese?", { note: "Con «Lei» se usa la 3ª persona, igual que con «usted»." }),

  // ── M1 · family ──────────────────────────────────────────────
  w("nonno", "el abuelo", "il nonno"),
  w("nonna", "la abuela", "la nonna"),
  w("bisnonno", "el bisabuelo", "il bisnonno"),
  w("zio", "el tío", "lo zio", { note: "«lo» antes de z, s+consonante, gn: lo zio, lo studente." }),
  w("cugino", "el primo", "il cugino", { note: "¡Ojo! «primo» en italiano significa «primero»." }),
  w("famiglia", "la familia", "la famiglia"),
  w("fratello", "el hermano", "il fratello"),
  w("sorella", "la hermana", "la sorella"),
  w("bisnonnonato", "Mi bisabuelo nació en Lavello", "Il mio bisnonno è nato a Lavello", {
    alts: ["mio bisnonno è nato a lavello"],
    note: "Con familiares en singular se suele omitir el artículo (mio nonno, mia madre); con «bisnonno» se oyen las dos formas.",
  }),
  w("famigliadi", "Mi familia es de Lavello", "La mia famiglia è di Lavello", { note: "«famiglia» sí lleva artículo: la mia famiglia." }),

  // ── M1 · at the comune ───────────────────────────────────────
  w("comune", "el municipio", "il comune", { note: "El «comune» es la municipalidad; ahí están el Stato Civile y la Anagrafe." }),
  w("statocivile", "la oficina del registro civil", "l'ufficio di stato civile", {
    alts: ["lo stato civile", "stato civile", "ufficio di stato civile"],
    note: "Stato Civile guarda las actas (nacimiento, matrimonio). La Anagrafe es el registro de residentes.",
  }),
  w("anagrafe", "el registro de residentes", "l'anagrafe", { alts: ["anagrafe", "l'ufficio anagrafe"] }),
  w("vorrei", "Quisiera una copia del acta de nacimiento", "Vorrei una copia dell'atto di nascita", {
    note: "Vorrei = quisiera (forma educada). dell' = di + l'.",
  }),
  w("integrale", "Quisiera una copia íntegra", "Vorrei una copia integrale", {
    note: "Para trámites de ciudadanía suelen pedir la «copia integrale» del acta.",
  }),
  w("matrimonio", "el acta de matrimonio", "l'atto di matrimonio", { alts: ["atto di matrimonio"] }),
  w("cognome", "el apellido", "il cognome", { note: "nome = nombre de pila; cognome = apellido." }),
  w("datanascita", "la fecha de nacimiento", "la data di nascita"),

  // ── M1 · numbers & dates ─────────────────────────────────────
  w("sette", "siete", "sette", { note: "Patrón ie → e: siete → sette." }),
  w("dieci", "diez", "dieci"),
  w("venti", "veinte", "venti"),
  w("cento", "cien", "cento"),
  w("maggio", "mayo", "maggio", { note: "Los meses van en minúscula: gennaio, aprile, maggio." }),
  w("primomaggio", "el 1 de mayo", "il primo maggio", { note: "El día 1 es «primo»; los demás con número: il due maggio." }),
  w("chegiorno", "¿Qué día es hoy?", "Che giorno è oggi?"),

  // ── M1 · travel ──────────────────────────────────────────────
  w("treno", "el tren", "il treno"),
  w("stazione", "la estación", "la stazione", { note: "Patrón -ción → -zione." }),
  w("dove", "¿Dónde está la estación?", "Dov'è la stazione?", { alts: ["dove è la stazione?", "dove si trova la stazione?"] }),
  w("biglietto", "Un boleto a Potenza, por favor", "Un biglietto per Potenza, per favore", {
    note: "Lavello está en la provincia de Potenza (Basilicata).",
  }),
  w("quanto", "¿Cuánto cuesta?", "Quanto costa?"),
  w("conto", "La cuenta, por favor", "Il conto, per favore"),
];
