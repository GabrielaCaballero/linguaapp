import type { Lexicon } from "../schema";

// Closed-class tokens must match exactly (lowercase; the checker normalises case).
export const lexicon: Lexicon = {
  closedClass: [
    // definite articles
    "der", "die", "das", "den", "dem", "des",
    // indefinite + negative articles
    "ein", "eine", "einen", "einem", "einer", "eines",
    "kein", "keine", "keinen", "keinem", "keiner", "keines",
    // possessives (A1)
    "mein", "meine", "meinen", "meinem", "meiner",
    "dein", "deine", "deinen", "deinem", "deiner",
    "sein", "seine", "seinen", "seinem", "seiner",
    "ihr", "ihre", "ihren", "ihrem", "ihrer",
    "unser", "unsere", "euer", "eure",
    // personal pronouns
    "ich", "du", "er", "sie", "es", "wir", "mich", "dich", "ihn", "uns", "euch",
    "mir", "dir", "ihm", "ihnen",
    // prepositions
    "in", "an", "auf", "aus", "bei", "mit", "nach", "von", "zu", "für", "ohne", "um",
    "gegen", "durch", "über", "unter", "vor", "hinter", "neben", "zwischen", "seit", "bis",
    // contractions (the norm; "in dem" for "im" is only almost)
    "im", "ins", "am", "ans", "zum", "zur", "beim", "vom",
    // auxiliaries: sein / haben, present
    "bin", "bist", "ist", "sind", "seid",
    "habe", "hast", "hat", "haben", "habt",
    // negation
    "nicht",
  ],
  minimalPairs: [
    ["schon", "schön"], ["Staat", "Stadt"], ["zahlen", "zählen"], ["Bruder", "Brüder"],
    ["Mutter", "Mütter"], ["Vater", "Väter"], ["Tochter", "Töchter"], ["Apfel", "Äpfel"],
    ["Wein", "Wien"], ["bitten", "bieten"], ["Hölle", "Höhle"], ["schwul", "schwül"],
    ["drucken", "drücken"], ["konnte", "könnte"], ["wurde", "würde"], ["Tier", "Tür"],
    ["den", "dem"], ["einen", "einem"], ["ihn", "ihm"], ["vier", "für"],
    ["Mann", "man"], ["Satz", "Sätze"], ["warm", "Wurm"], ["Bett", "Beet"],
  ],
};
