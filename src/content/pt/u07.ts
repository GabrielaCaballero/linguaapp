import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u07",
  lang: "pt",
  index: 7,
  cefr: "A1.2",
  title: { target: "Meu dia", es: "Mi día", en: "My day" },
  canDo: [
    { es: "Puedo contar mi rutina diaria y decir a qué hora hago las cosas.", en: "I can describe my daily routine and say what time I do things." },
    { es: "Puedo preguntar y decir la hora.", en: "I can ask and tell the time." },
    { es: "Sé conjugar verbos en -er / -ir y verbos reflexivos (eu me levanto).", en: "I can conjugate -er / -ir verbs and reflexive verbs (eu me levanto)." },
  ],
  icon: "⏰",
  items: build("pt", 7, "A1.2", [
    {
      id: "s-cedilha", type: "sound", target: "almoço",
      gloss: { es: "almuerzo", en: "lunch" },
      distractors: ["almoso", "almozo", "almorço"],
      note: {
        es: "La ç (cedilla) suena siempre como s y solo va delante de a, o, u: almoço, açúcar, cabeça.",
        en: "ç (c-cedilla) always sounds like s and only comes before a, o, u: almoço, açúcar, cabeça.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "spelling"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "acordar", type: "word", pos: "verb", target: "acordar", gloss: { es: "despertarse", en: "to wake up" }, forms: { eu: "acordo", você: "acorda" }, distractors: ["despertar-se", "lembrar", "acordo"], tags: ["routine", "verbs"] },
    { id: "levantar-se", type: "word", pos: "verb", target: "levantar-se", gloss: { es: "levantarse", en: "to get up" }, forms: { eu: "me levanto", você: "se levanta" }, distractors: ["levantar-me", "se levantar-se", "levar-se"], tags: ["routine", "reflexive"] },
    { id: "tomar-banho", type: "phrase", pos: "phrase", target: "tomar banho", gloss: { es: "bañarse / ducharse", en: "to have a shower" }, accept: [{ text: "tomar uma ducha" }], variants: [{ region: "PT", text: "tomar duche", note: { es: "En Portugal: tomar duche (ducharse) y tomar banho (bañarse).", en: "In Portugal: tomar duche (shower) vs tomar banho (bath)." } }], distractors: ["fazer banho", "tomar o banheiro", "banhar-se de"], tags: ["routine"] },
    { id: "almocar", type: "word", pos: "verb", target: "almoçar", gloss: { es: "almorzar", en: "to have lunch" }, forms: { eu: "almoço", você: "almoça" }, distractors: ["almorçar", "almoço", "jantar"], tags: ["routine", "meals"] },
    { id: "jantar", type: "word", pos: "verb", target: "jantar", gloss: { es: "cenar", en: "to have dinner" }, forms: { eu: "janto", você: "janta" }, distractors: ["cenar", "almoçar", "janta"], note: { es: "También es sustantivo: o jantar (la cena).", en: "Also a noun: o jantar (dinner)." }, tags: ["routine", "meals"] },
    { id: "dormir", type: "word", pos: "verb", target: "dormir", gloss: { es: "dormir", en: "to sleep" }, forms: { eu: "durmo", você: "dorme" }, distractors: ["durmir", "dorme", "acordar"], note: { es: "Irregular en «eu»: durmo.", en: "Irregular for eu: durmo." }, tags: ["routine", "verbs"] },
    { id: "cedo", type: "word", pos: "adv", target: "cedo", gloss: { es: "temprano", en: "early" }, distractors: ["tarde", "sedo", "cedê"], tags: ["time"] },
    { id: "sempre", type: "word", pos: "adv", target: "sempre", gloss: { es: "siempre", en: "always" }, distractors: ["nunca", "siempre", "semper"], tags: ["time", "frequency"] },
    { id: "as-vezes", type: "phrase", pos: "phrase", target: "às vezes", gloss: { es: "a veces", en: "sometimes" }, distractors: ["a vezes", "às vez", "nas vezes"], tags: ["time", "frequency"] },
    { id: "meio-dia", type: "word", pos: "noun", target: "o meio-dia", gender: "m", plural: "os meios-dias", gloss: { es: "el mediodía", en: "noon" }, distractors: ["a meia-dia", "o meia-noite", "o médio-dia"], tags: ["time"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "que-horas-sao", type: "phrase", pos: "phrase", target: "Que horas são?",
      gloss: { es: "¿Qué hora es?", en: "What time is it?" },
      accept: [{ text: "Que hora é?", verdict: "almost", feedback: { es: "Se entiende, pero lo normal es el plural: que horas são?", en: "Understandable, but the usual form is plural: que horas são?" } }, { text: "Você tem horas?" }],
      distractors: ["Qual hora é?", "Que horas é?", "Quantas horas são?"],
      grammar: ["pt-g-horas"], tags: ["time", "chunk"],
    },
    {
      id: "sao-tres-e-meia", type: "sentence", target: "São três e meia.",
      gloss: { es: "Son las tres y media.", en: "It's half past three." },
      errors: [{ text: "São as três e meia.", feedback: { es: "Sin artículo para decir la hora: são três e meia.", en: "No article when telling the time: são três e meia." }, ruleId: "pt-g-horas" }],
      distractors: ["É", "as", "meio"],
      grammar: ["pt-g-horas"], tags: ["time"],
    },
    {
      id: "e-uma-hora", type: "sentence", target: "É uma hora em ponto.",
      gloss: { es: "Es la una en punto.", en: "It's one o'clock sharp." },
      distractors: ["São", "um", "a"],
      grammar: ["pt-g-horas"], tags: ["time"],
    },
    {
      id: "acordo-as-sete", type: "sentence", target: "Eu acordo às sete e me levanto às sete e quinze.",
      gloss: { es: "Me despierto a las siete y me levanto a las siete y cuarto.", en: "I wake up at seven and get up at a quarter past seven." },
      accept: [{ text: "Acordo às sete e me levanto às sete e quinze." }],
      variants: [{ region: "PT", text: "Acordo às sete e levanto-me às sete e um quarto.", note: { es: "En Portugal el pronombre va detrás del verbo: levanto-me.", en: "In Portugal the pronoun goes after the verb: levanto-me." } }],
      errors: [{ text: "Eu acordo a as sete.", feedback: { es: "a + as = às: às sete.", en: "a + as = às: às sete." }, ruleId: "pt-g-em-contracoes" }],
      distractors: ["as", "se", "levanta"],
      grammar: ["pt-g-reflexivos"], tags: ["routine", "time"],
    },
    {
      id: "almoco-ao-meio-dia", type: "sentence", target: "Eu almoço ao meio-dia.",
      gloss: { es: "Almuerzo al mediodía.", en: "I have lunch at noon." },
      accept: [{ text: "Almoço ao meio-dia." }],
      distractors: ["às", "almoça", "meia"],
      tags: ["routine", "meals"],
    },
    {
      id: "nunca-como-carne", type: "sentence", target: "Eu nunca como carne à noite.",
      gloss: { es: "Nunca como carne de noche.", en: "I never eat meat in the evening." },
      accept: [{ text: "Nunca como carne à noite." }, { text: "Eu nunca como carne de noite." }],
      errors: [{ text: "Eu não como nunca carne à noite.", feedback: { es: "«nunca» delante del verbo ya es negativo: eu nunca como.", en: "'nunca' before the verb is negative on its own: eu nunca como." } }],
      distractors: ["come", "na", "sempre"],
      tags: ["routine", "food"],
    },
    {
      id: "ela-dorme-tarde", type: "sentence", target: "Nos fins de semana ela dorme até tarde.",
      gloss: { es: "Los fines de semana ella duerme hasta tarde.", en: "At weekends she sleeps in." },
      distractors: ["durme", "nas", "cedo"],
      tags: ["routine"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-comer", type: "paradigm", target: "comer — presente", spoken: "comer",
      gloss: { es: "«comer» en presente", en: "comer (to eat) — present" },
      grammar: ["pt-g-er-ir"],
      paradigm: {
        caption: { es: "Conjuga «comer» en presente", en: "Conjugate comer in the present tense" },
        cells: [
          { label: "eu", answer: "como", ruleId: "pt-g-er-ir" },
          { label: "você / ele / ela", answer: "come", ruleId: "pt-g-er-ir" },
          { label: "nós", answer: "comemos", ruleId: "pt-g-er-ir" },
          { label: "vocês / eles / elas", answer: "comem", ruleId: "pt-g-er-ir" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-er-ir", type: "pattern", target: "como, come · abro, abre, abrimos",
      gloss: { es: "presente de los verbos en -er e -ir", en: "present tense of -er and -ir verbs" },
      pattern: {
        rule: {
          es: "-er: -o, -e, -emos, -em (como, come, comemos, comem). -ir: -o, -e, -imos, -em (abro, abre, abrimos, abrem). Solo cambia la forma de «nós».",
          en: "-er: -o, -e, -emos, -em (como, come, comemos, comem). -ir: -o, -e, -imos, -em (abro, abre, abrimos, abrem). Only the nós form differs.",
        },
        table: [["", "comer", "abrir"], ["eu", "como", "abro"], ["você / ele", "come", "abre"], ["nós", "comemos", "abrimos"], ["vocês / eles", "comem", "abrem"]],
      },
      question: {
        prompt: { es: "Completa: «Nós ___ a loja às nove.» (abrir)", en: "Complete: 'Nós ___ a loja às nove.' (abrir)" },
        options: ["abrimos", "abremos", "abrem", "abramos"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-er-ir"], tags: ["grammar", "present"],
    },
    {
      id: "pat-reflexivos", type: "pattern", target: "eu me levanto · você se levanta",
      gloss: { es: "verbos reflexivos", en: "reflexive verbs" },
      pattern: {
        rule: {
          es: "En Brasil el pronombre va delante del verbo: eu me levanto, ela se chama. En Portugal va detrás con guion: levanto-me, chama-se. Con você se usa «se», como con ele.",
          en: "In Brazil the pronoun comes before the verb: eu me levanto, ela se chama. In Portugal it follows with a hyphen: levanto-me, chama-se. você takes 'se', like ele.",
        },
        table: [["eu", "me levanto"], ["você / ele / ela", "se levanta"], ["nós", "nos levantamos"], ["vocês / eles / elas", "se levantam"]],
      },
      question: {
        prompt: { es: "Completa: «A que horas você ___ levanta?»", en: "Complete: 'A que horas você ___ levanta?'" },
        options: ["se", "te", "me", "lhe"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-reflexivos"], tags: ["grammar", "reflexive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-rotina", type: "listening", target: "Eu acordo às seis, tomo banho e tomo café. Saio de casa às sete e pego o metrô. Chego no escritório às oito.",
      gloss: { es: "Me despierto a las seis, me ducho y desayuno. Salgo de casa a las siete y tomo el metro. Llego a la oficina a las ocho.", en: "I wake up at six, have a shower and have breakfast. I leave home at seven and take the subway. I get to the office at eight." },
      question: {
        prompt: { es: "¿A qué hora sale de casa?", en: "What time does the speaker leave home?" },
        options: [
          { es: "A las siete", en: "At seven" },
          { es: "A las seis", en: "At six" },
          { es: "A las ocho", en: "At eight" },
          { es: "A las seis y media", en: "At half past six" },
        ],
        answer: 0,
      },
      note: { es: "«Chegar no» es lo coloquial en Brasil; la norma escrita pide «chegar ao».", en: "'Chegar no' is everyday Brazilian; formal writing prefers 'chegar ao'." },
      exercises: ["question", "listen"], tags: ["listening", "routine"],
    },
    {
      id: "dlg-cedo", type: "dialogue", target: "Eu sou uma pessoa noturna.",
      gloss: { es: "Soy una persona nocturna.", en: "I'm a night owl." },
      turns: [
        { who: "A", target: "Você acorda cedo?", gloss: { es: "¿Te despiertas temprano?", en: "Do you get up early?" } },
        { who: "B", target: "Nada! Eu sou uma pessoa noturna. Durmo à uma e acordo às nove.", gloss: { es: "¡Para nada! Soy una persona nocturna. Me duermo a la una y me despierto a las nueve.", en: "No way! I'm a night owl. I go to sleep at one and wake up at nine." } },
        { who: "A", target: "Eu não! Às dez da noite eu já estou dormindo.", gloss: { es: "¡Yo no! A las diez de la noche ya estoy durmiendo.", en: "Not me! By ten at night I'm already asleep." } },
      ],
      question: {
        prompt: { es: "¿A qué hora se duerme B?", en: "What time does B go to sleep?" },
        options: [
          { es: "A la una", en: "At one" },
          { es: "A las nueve", en: "At nine" },
          { es: "A las diez", en: "At ten" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "routine"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-acordar", type: "bridge", onlyFor: "es", target: "acordo às seis",
      gloss: { es: "me despierto a las seis", en: "I wake up at six" },
      question: {
        prompt: { es: "«Eu acordo às seis» significa…", en: "'Eu acordo às seis' means…" },
        options: [{ es: "Me despierto a las seis.", en: "I wake up at six." }, { es: "Me acuerdo a las seis.", en: "I remember at six." }, { es: "Quedamos a las seis.", en: "We agree to meet at six." }],
        answer: 0,
      },
      note: { es: "Falso amigo: «acordar» = despertarse; «acordarse» es «lembrar-se» y «ponerse de acuerdo», «combinar»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "routine"],
    },
    {
      id: "br-tomar-cafe", type: "bridge", onlyFor: "en", target: "tomar café",
      gloss: { es: "desayunar / tomar café", en: "to have breakfast / to have coffee" },
      distractors: ["comer café", "beber café da", "fazer café"],
      note: { en: "In Brazil 'tomar café' often means having breakfast, not just a coffee." },
      exercises: ["guess", "recall"], tags: ["bridge", "meals"],
    },
  ]),
};
