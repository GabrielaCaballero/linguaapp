import type { Lexicon } from "../schema";

// Closed-class tokens must match exactly (lowercase; the checker normalises case).
// Portuguese has no elision apostrophes in the standard language, so contractions are whole
// tokens (do, na, pelo, dele…) — see fr/lexicon.ts for the shape.
export const lexicon: Lexicon = {
  closedClass: [
    // definite and indefinite articles
    "o", "a", "os", "as", "um", "uma", "uns", "umas",
    // simple prepositions
    "de", "em", "por", "para", "com", "sem", "até", "sobre", "entre", "desde", "contra",
    // preposition + article contractions (de / em / a / por)
    "do", "da", "dos", "das", "no", "na", "nos", "nas", "ao", "aos", "à", "às",
    "pelo", "pela", "pelos", "pelas", "num", "numa",
    // preposition + pronoun / demonstrative contractions
    "dele", "dela", "deles", "delas", "deste", "desta", "desse", "dessa", "daquele", "daquela",
    "neste", "nesta", "nesse", "nessa", "naquele", "naquela", "disso", "nisso", "daquilo", "àquele",
    // subject pronouns
    "eu", "tu", "você", "ele", "ela", "nós", "vocês", "eles", "elas",
    // object and reflexive pronouns
    "me", "te", "se", "lhe", "lhes", "comigo", "contigo", "conosco", "mim", "ti",
    // possessives (agreement is the grammar point)
    "meu", "minha", "meus", "minhas", "teu", "tua", "seu", "sua", "seus", "suas", "nosso", "nossa", "nossos", "nossas",
    // conjunctions and relatives
    "e", "ou", "mas", "que", "se", "porque", "quando", "onde", "como", "quem",
    // auxiliaries: ser, estar, ter, ir (present)
    "sou", "é", "somos", "são", "estou", "está", "estamos", "estão",
    "tenho", "tem", "temos", "têm", "vou", "vai", "vamos", "vão",
    // negation
    "não", "nem",
  ],
  minimalPairs: [
    // the accent changes the word
    ["avô", "avó"], ["vovô", "vovó"], ["pais", "país"], ["pode", "pôde"], ["por", "pôr"],
    ["se", "sé"], ["e", "é"], ["nos", "nós"], ["mas", "más"], ["esta", "está"], ["da", "dá"],
    ["pe", "pé"], ["sabia", "sábia"], ["tem", "têm"], ["vem", "vêm"], ["publico", "público"],
    ["secretaria", "secretária"], ["historia", "história"],
    // nasal vs oral, and other vowel contrasts
    ["pão", "pau"], ["mão", "mau"], ["vó", "vô"], ["sem", "cem"], ["sessão", "seção"], ["mal", "mau"],
    ["coco", "cocô"], ["mês", "mas"],
    // look-alikes taught in the course
    ["morar", "morrer"], ["acento", "assento"], ["concerto", "conserto"],
    ["cassar", "caçar"], ["ouve", "houve"], ["tráfego", "tráfico"], ["comprimento", "cumprimento"],
    ["descrição", "discrição"], ["eminente", "iminente"], ["ratificar", "retificar"], ["mau", "meu"],
    // tense pairs: grammar, never a typo
    ["fala", "falou"], ["foi", "for"], ["fosse", "for"], ["vir", "ver"], ["vimos", "viemos"],
  ],
};
