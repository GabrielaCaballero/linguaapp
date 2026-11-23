import type { Lexicon } from "../schema";

// Closed-class tokens must match exactly (lowercase; the checker normalises case).
// The checker tokenises on spaces AND apostrophes, so elided forms appear without
// the apostrophe ("l", "d", "j", "qu", "n", "s", "c", "m", "t") — see it/lexicon.ts.
export const lexicon: Lexicon = {
  closedClass: [
    // definite, indefinite, partitive articles (+ elided l')
    "le", "la", "l", "les", "un", "une", "des", "du",
    // simple prepositions and contractions (à + le = au, de + les = des…)
    "à", "a", "de", "d", "en", "dans", "sur", "sous", "avec", "pour", "par", "chez", "sans", "vers", "entre",
    "au", "aux",
    // subject, stressed and object pronouns (+ elided j', m', t', s')
    "je", "j", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles",
    "moi", "toi", "lui", "eux",
    "me", "m", "te", "t", "se", "s", "leur", "y",
    // possessives (agreement is the grammar point)
    "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses",
    "notre", "nos", "votre", "vos", "leurs",
    // relatives and conjunction que (+ elided qu')
    "qui", "que", "qu", "dont", "où", "ou",
    // auxiliaries: être / avoir, present
    "suis", "es", "est", "sommes", "êtes", "sont",
    "ai", "as", "avons", "avez", "ont",
    // negation (+ elided n'), demonstrative ce / c'
    "ne", "n", "pas", "ce", "c",
  ],
  minimalPairs: [
    // u / ou, nasal and vowel contrasts
    ["poisson", "poison"], ["poisson", "boisson"], ["dessus", "dessous"], ["rue", "roue"],
    ["russe", "rousse"], ["pur", "pour"], ["vu", "vous"], ["tu", "tout"],
    ["cheveux", "chevaux"], ["deux", "doux"], ["veux", "vieux"], ["mer", "mère"],
    ["lever", "laver"], ["désert", "dessert"],
    // accent changes the word
    ["sale", "salé"], ["jeune", "jeûne"], ["sur", "sûr"], ["du", "dû"], ["la", "là"],
    ["marche", "marché"], ["pécher", "pêcher"],
    // -é / -er / -ez (passé composé vs infinitive): grammar, never a typo
    ["mangé", "manger"], ["parlé", "parler"], ["acheté", "acheter"], ["arrivé", "arriver"],
    ["allé", "aller"], ["aimé", "aimer"],
    // future -ai vs conditional -ais
    ["serai", "serais"], ["voudrai", "voudrais"], ["pourrai", "pourrais"], ["aurai", "aurais"],
    // look-alikes taught in the course
    ["compagne", "campagne"], ["cuisine", "cousine"], ["cinq", "cent"],
  ],
};
