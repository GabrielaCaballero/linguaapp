import type { GrammarPoint } from "../schema";
import { grammar1 } from "./grammar1";
import { grammar2 } from "./grammar2";
import { grammar3 } from "./grammar3";
import { grammar4 } from "./grammar4";
import { grammar5 } from "./grammar5";

// Grammar points (content v2.1): the rule as a textbook states it, how to work the form out,
// the table, examples, and the classic mistake for Spanish speakers. Items link to them through
// `grammar` / `ruleId`. AI drafts until a native-level reviewer signs them off.
const core: GrammarPoint[] = [
  {
    id: "en-g-im-youre",
    lang: "en",
    cefr: "A0",
    title: { es: "I'm, you're: el sujeto siempre va", en: "I'm, you're: the subject is always there" },
    short: {
      es: "I am → I'm, you are → you're. En inglés el sujeto nunca se omite: «I'm Anna», no «Am Anna».",
      en: "I am → I'm, you are → you're. English never drops the subject: 'I'm Anna', not 'Am Anna'.",
    },
    rule: {
      es: "En español el verbo ya dice quién habla (soy, eres), así que el pronombre se omite. En inglés no: el sujeto (I, you…) es obligatorio. Al hablar, el sujeto y el verbo se unen con un apóstrofo: I'm, you're.",
      en: "Spanish verb endings show the person, so Spanish speakers drop the pronoun. English verbs don't, so the subject (I, you…) is required. In speech, subject and verb join with an apostrophe: I'm, you're.",
    },
    steps: [
      { es: "Empieza siempre con el sujeto: I, you.", en: "Always start with the subject: I, you." },
      { es: "Añade el verbo: am con I, are con you.", en: "Add the verb: am with I, are with you." },
      { es: "Al hablar, únelos: I'm, you're.", en: "In speech, join them: I'm, you're." },
    ],
    table: { head: ["forma larga", "forma corta"], rows: [["I am", "I'm"], ["you are", "you're"]] },
    examples: [
      { target: "I'm Tom. Nice to meet you.", gloss: { es: "Soy Tom. Mucho gusto.", en: "I'm Tom. Nice to meet you." } },
      { target: "You're very kind.", gloss: { es: "Eres muy amable.", en: "You're very kind." } },
    ],
    pitfalls: {
      es: "«Am fine» o «Is Anna» están mal: falta el sujeto. Tampoco confundas «your» (tu) con «you're» (tú eres).",
      en: "'Am fine' or 'Is Anna' are wrong: the subject is missing. Also don't confuse 'your' (possessive) with 'you're' (you are).",
    },
  },
  {
    id: "en-g-be",
    lang: "en",
    cefr: "A1.1",
    title: { es: "El verbo «be» (ser y estar) en presente", en: "The verb 'be' in the present" },
    short: {
      es: "I am · you / we / they are · he / she / it is. Negativo con «not»; pregunta invirtiendo: «Are you…?»",
      en: "I am · you/we/they are · he/she/it is. Negative with 'not'; questions invert: Are you…?",
    },
    rule: {
      es: "«be» cubre «ser» y «estar»: I'm tired (estoy cansado/a), I'm a nurse (soy enfermero/a). Tiene tres formas en presente: am, is, are. Para negar se añade «not» y para preguntar se pone el verbo antes del sujeto.",
      en: "'be' has three present forms: am, is, are. Add 'not' to make it negative, and put the verb before the subject to ask a question.",
    },
    steps: [
      { es: "Elige el sujeto: I, you, he, she, it, we, they.", en: "Pick the subject: I, you, he, she, it, we, they." },
      { es: "Elige la forma: am (I), is (he/she/it), are (el resto).", en: "Pick the form: am (I), is (he/she/it), are (the rest)." },
      { es: "Negativo: añade «not» (isn't, aren't). Pregunta: verbo + sujeto (Is she…?).", en: "Negative: add 'not' (isn't, aren't). Question: verb + subject (Is she…?)." },
      { es: "Respuesta corta sin contraer: Yes, I am. / Yes, she is.", en: "Short answers don't contract: Yes, I am. / Yes, she is." },
    ],
    table: {
      head: ["", "+", "−", "?"],
      rows: [
        ["I", "I'm", "I'm not", "Am I…?"],
        ["you / we / they", "you're", "you aren't", "Are you…?"],
        ["he / she / it", "she's", "she isn't", "Is she…?"],
      ],
    },
    examples: [
      { target: "We're from Lima.", gloss: { es: "Somos de Lima.", en: "We're from Bogotá." } },
      { target: "Is he married? No, he isn't.", gloss: { es: "¿Está casado? No.", en: "Is he married? No, he isn't." } },
      { target: "They aren't at home.", gloss: { es: "No están en casa.", en: "They aren't at home." } },
    ],
    pitfalls: {
      es: "No se responde «Yes, I'm»: al final de la frase va la forma larga (Yes, I am). Y nunca falta el verbo: «She tired» → She's tired.",
      en: "Don't answer 'Yes, I'm': the full form goes at the end (Yes, I am). And the verb never disappears: 'She tired' → She's tired.",
    },
  },
  {
    id: "en-g-a-an",
    lang: "en",
    cefr: "A1.1",
    title: { es: "a / an (un, una) y las profesiones", en: "a / an and jobs" },
    short: {
      es: "a + sonido consonante (a doctor, a university); an + sonido vocal (an engineer, an hour).",
      en: "a + consonant sound (a doctor, a university); an + vowel sound (an engineer, an hour).",
    },
    rule: {
      es: "«a» y «an» equivalen a «un/una» y no tienen género. Se elige por el sonido, no por la letra: an hour (la h no suena), a university (suena «yu»). A diferencia del español, con profesiones el artículo es obligatorio: She's a doctor.",
      en: "'a' and 'an' are chosen by sound, not spelling: an hour (silent h), a university ('yu' sound). With jobs the article is required: She's a doctor.",
    },
    steps: [
      { es: "Di en voz alta la palabra que sigue.", en: "Say the next word out loud." },
      { es: "¿Empieza con sonido de vocal? → an. Si no → a.", en: "Does it start with a vowel sound? → an. Otherwise → a." },
      { es: "Con «be» + profesión, nunca omitas el artículo.", en: "With 'be' + job, never leave out the article." },
    ],
    table: { head: ["a", "an"], rows: [["a teacher", "an engineer"], ["a lawyer", "an actor"], ["a university", "an hour"], ["a European city", "an old friend"]] },
    examples: [
      { target: "I'm an architect.", gloss: { es: "Soy arquitecto/a.", en: "I'm an architect." } },
      { target: "He's a nurse in a big hospital.", gloss: { es: "Es enfermero en un hospital grande.", en: "He's a nurse in a big hospital." } },
    ],
    pitfalls: {
      es: "«I'm teacher» es el error más típico de hispanohablantes: en español decimos «soy profesor» sin artículo, pero en inglés es «I'm a teacher».",
      en: "Leaving out the article with jobs ('I'm teacher') is the classic mistake: it must be 'I'm a teacher'.",
    },
  },
];

// Units 3–8, 9–16, 17–24, 25–30 and 31–36 (one card per grammar pattern).
export const grammar: GrammarPoint[] = [...core, ...grammar1, ...grammar2, ...grammar3, ...grammar4, ...grammar5];
