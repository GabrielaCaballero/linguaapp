import type { Lexicon } from "../schema";

// Closed-class tokens must match exactly (lowercase; the checker normalises case).
// The checker tokenises on spaces AND apostrophes ("don't" → "don'" + "t", "I'm" → "I'" + "m"),
// so contraction stems and endings are listed bare: "don", "doesn", "isn", "m", "re", "ll", "ve".
export const lexicon: Lexicon = {
  closedClass: [
    // articles and determiners
    "a", "an", "the", "this", "that", "these", "those", "some", "any", "much", "many", "no", "every", "each",
    // prepositions
    "in", "on", "at", "to", "for", "from", "of", "with", "by", "about", "into", "since", "under", "over",
    "after", "before", "during", "until", "than",
    // subject and object pronouns, possessives
    "i", "you", "he", "she", "it", "we", "they", "me", "him", "us", "them",
    "my", "your", "his", "her", "its", "our", "their", "mine", "yours", "ours", "theirs",
    // auxiliaries and modals (full forms)
    "am", "is", "are", "was", "were", "be", "been", "being",
    "do", "does", "did", "have", "has", "had",
    "will", "would", "can", "could", "should", "must", "may", "might", "shall",
    // contraction stems (before the apostrophe) and endings (after it)
    "don", "doesn", "didn", "isn", "aren", "wasn", "weren", "haven", "hasn", "hadn",
    "won", "wouldn", "couldn", "shouldn", "mustn",
    "m", "re", "s", "ve", "ll", "d", "t",
    // negation and conjunctions
    "not", "and", "or", "but", "if", "when", "while", "because", "so",
  ],
  minimalPairs: [
    // short vs long vowels (Spanish has one "i")
    ["ship", "sheep"], ["live", "leave"], ["sit", "seat"], ["fill", "feel"], ["hit", "heat"], ["bin", "bean"],
    ["full", "fool"], ["pull", "pool"],
    // e / a / u (bed / bad / bud)
    ["bed", "bad"], ["men", "man"], ["pen", "pan"], ["hat", "hut"], ["cap", "cup"],
    // b / v, th / t / d, s / sh, ch / sh, j / y
    ["very", "berry"], ["vote", "boat"], ["three", "tree"], ["thin", "tin"], ["they", "day"], ["think", "sink"],
    ["sea", "she"], ["sip", "ship"], ["chair", "share"], ["watch", "wash"], ["jet", "yet"], ["jello", "yellow"],
    // spelling look-alikes that change meaning
    ["than", "then"], ["lose", "loose"], ["quite", "quiet"], ["bought", "brought"], ["fifteen", "fifty"],
    ["thirteen", "thirty"], ["kitchen", "chicken"], ["desert", "dessert"], ["advice", "advise"],
    ["affect", "effect"], ["accept", "except"], ["hire", "fire"], ["their", "there"],
    ["worse", "worst"], ["live", "life"], ["wander", "wonder"],
  ],
};
