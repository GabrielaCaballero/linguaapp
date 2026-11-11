import type { Lexicon } from "../schema";

// Closed-class tokens must match exactly (lowercase; the checker normalises case).
// The checker tokenises on spaces AND apostrophes, so elided forms appear without
// the apostrophe ("l", "un", "dell", "c").
export const lexicon: Lexicon = {
  closedClass: [
    // definite + indefinite articles
    "il", "lo", "la", "l", "i", "gli", "le", "un", "uno", "una",
    // simple prepositions
    "di", "a", "da", "in", "con", "su", "per", "tra", "fra",
    // articulated prepositions (always one word; "di il" is wrong)
    "del", "dello", "della", "dell", "dei", "degli", "delle",
    "al", "allo", "alla", "all", "ai", "agli", "alle",
    "dal", "dallo", "dalla", "dall", "dai", "dagli", "dalle",
    "nel", "nello", "nella", "nell", "nei", "negli", "nelle",
    "sul", "sullo", "sulla", "sull", "sui", "sugli", "sulle",
    // subject + clitic pronouns
    "io", "tu", "lui", "lei", "noi", "voi", "loro",
    "mi", "ti", "si", "ci", "vi", "li", "ne",
    // possessives (the article/possessive choice is the grammar point)
    "mio", "mia", "miei", "mie", "tuo", "tua", "tuoi", "tue", "suo", "sua", "suoi", "sue",
    "nostro", "nostra", "nostri", "nostre", "vostro", "vostra", "vostri", "vostre",
    // auxiliaries: essere / avere, present
    "sono", "sei", "è", "siamo", "siete",
    "ho", "hai", "ha", "abbiamo", "avete", "hanno",
    // negation and accent-sensitive minimal words
    "non", "e", "sì", "dà", "là", "lì", "né",
  ],
  minimalPairs: [
    ["nono", "nonno"], ["sono", "sonno"], ["caro", "carro"], ["pala", "palla"],
    ["papa", "pappa"], ["fato", "fatto"], ["sete", "sette"], ["capello", "cappello"],
    ["note", "notte"], ["casa", "cassa"], ["copia", "coppia"], ["pena", "penna"],
    ["camino", "cammino"], ["rosa", "rossa"], ["eco", "ecco"], ["tuta", "tutta"],
    ["e", "è"], ["si", "sì"], ["da", "dà"], ["la", "là"], ["li", "lì"], ["ne", "né"],
    ["papa", "papà"], ["te", "tè"],
  ],
};
