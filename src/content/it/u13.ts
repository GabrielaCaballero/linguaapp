import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u13",
  lang: "it",
  index: 13,
  cefr: "B1",
  title: { target: "Salute e consigli", es: "Salud y consejos", en: "Health and advice" },
  canDo: [
    { es: "Puedo explicar qué me pasa en el médico o en la farmacia.", en: "I can explain what's wrong at the doctor's or the pharmacy." },
    { es: "Puedo dar y entender consejos e instrucciones (tú y usted).", en: "I can give and understand advice and instructions (tu and Lei)." },
    { es: "Sé usar el imperativo con pronombres (prendilo, lo prenda).", en: "I can use the imperative with pronouns (prendilo, lo prenda)." },
  ],
  icon: "💊",
  items: build("it", 13, "B1", [
    // ── Health ───────────────────────────────────────────────
    {
      id: "medico", type: "word", pos: "noun", target: "il medico", gender: "m", plural: "i medici",
      gloss: { es: "el médico", en: "the doctor" },
      accept: [{ text: "la dottoressa" }, { text: "il dottore" }],
      distractors: ["il medicinale", "il meccanico", "il metodo"],
      note: { es: "Plural en -ci: i medici. Para dirigirse: «dottore / dottoressa».", en: "Plural in -ci: i medici. Address a doctor as 'dottore / dottoressa'." },
      tags: ["health"],
    },
    {
      id: "ricetta", type: "word", pos: "noun", target: "la ricetta", gender: "f", plural: "le ricette",
      gloss: { es: "la receta (médica o de cocina)", en: "the prescription / the recipe" },
      distractors: ["la ricevuta", "la rivista", "il ricetto"],
      note: { es: "Ojo: la ricevuta = el recibo.", en: "Careful: la ricevuta = receipt." },
      tags: ["health"],
    },
    {
      id: "febbre", type: "word", pos: "noun", target: "la febbre", gender: "f", plural: "le febbri",
      gloss: { es: "la fiebre", en: "the fever (temperature)" },
      distractors: ["la fibra", "il febbre", "la lebbra"],
      note: { es: "Doble b: febbre. «Ho la febbre» = tengo fiebre.", en: "Double b: febbre. 'Ho la febbre' = I have a temperature." },
      tags: ["health", "doubles"],
    },
    {
      id: "raffreddore", type: "word", pos: "noun", target: "il raffreddore", gender: "m", plural: "i raffreddori",
      gloss: { es: "el resfriado", en: "the cold (illness)" },
      distractors: ["la raffreddore", "il raffreddamento", "il rifugio"],
      tags: ["health"],
    },
    {
      id: "tosse", type: "word", pos: "noun", target: "la tosse", gender: "f", plural: "le tossi",
      gloss: { es: "la tos", en: "the cough" },
      distractors: ["il tosse", "la tassa", "la torta"],
      tags: ["health"],
    },
    {
      id: "mal-di-testa", type: "phrase", pos: "phrase", target: "il mal di testa",
      gloss: { es: "el dolor de cabeza", en: "the headache" },
      distractors: ["il mal di gola", "la testa male", "il mal da testa"],
      note: { es: "mal di + parte del cuerpo: mal di gola (garganta), mal di pancia (panza).", en: "mal di + body part: mal di gola (sore throat), mal di pancia (stomach ache)." },
      tags: ["health", "chunk"],
    },
    {
      id: "farmacia", type: "word", pos: "noun", target: "la farmacia", gender: "f", plural: "le farmacie",
      gloss: { es: "la farmacia", en: "the pharmacy (chemist's)" },
      distractors: ["la fermata", "il farmacia", "la fantasia"],
      note: { es: "El acento cae en la i: far-ma-CÍ-a.", en: "Stress on the i: far-ma-CHEE-a." },
      tags: ["health", "places"],
    },
    {
      id: "guarire", type: "word", pos: "verb", target: "guarire",
      gloss: { es: "curarse, sanarse", en: "to get better / recover" },
      forms: { io: "guarisco", pp: "guarito", aux: "essere" },
      distractors: ["guadagnare", "girare", "garantire"],
      note: { es: "Verbo en -isc-: guarisco. Con essere: sono guarito/a.", en: "An -isc- verb: guarisco. Takes essere: sono guarito/a." },
      tags: ["health", "isc"],
    },
    {
      id: "consigliare", type: "word", pos: "verb", target: "consigliare",
      gloss: { es: "aconsejar, recomendar", en: "to advise / recommend" },
      distractors: ["considerare", "consegnare", "conciliare"],
      tags: ["advice"],
    },
    {
      id: "consiglio", type: "word", pos: "noun", target: "il consiglio", gender: "m", plural: "i consigli",
      gloss: { es: "el consejo", en: "the piece of advice" },
      distractors: ["la consiglio", "il concilio", "il consigliere"],
      note: { es: "Un consejo = un consiglio; varios consejos = dei consigli.", en: "Countable: un consiglio (a piece of advice), dei consigli." },
      tags: ["advice"],
    },
    {
      id: "evitare", type: "word", pos: "verb", target: "evitare",
      gloss: { es: "evitar", en: "to avoid" },
      distractors: ["vietare", "invitare", "evadere"],
      tags: ["advice"],
    },
    {
      id: "smettere", type: "word", pos: "verb", target: "smettere",
      gloss: { es: "dejar de (hacer algo)", en: "to stop (doing) / quit" },
      forms: { pp: "smesso", aux: "avere" },
      distractors: ["mettere", "scommettere", "smentire"],
      note: { es: "smettere di + infinitivo: ho smesso di fumare.", en: "smettere di + infinitive: ho smesso di fumare (I quit smoking)." },
      tags: ["advice"],
    },
    {
      id: "grave", type: "word", pos: "adj", target: "grave",
      gloss: { es: "grave, serio/a", en: "serious" },
      distractors: ["grande", "grasso", "gratis"],
      note: { es: "Niente di grave = nada grave.", en: "Niente di grave = nothing serious." },
      tags: ["health"],
    },

    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "che-cosa-hai", type: "phrase", pos: "phrase", register: "informal", target: "Che cos'hai?",
      gloss: { es: "¿Qué te pasa?", en: "What's wrong? (informal)" },
      accept: [{ text: "Cos'hai?" }, { text: "Che hai?" }, { text: "Che cosa hai?" }],
      distractors: ["Che cosa sei?", "Che hai cosa?", "Cosa ti hai?"],
      tags: ["health", "chunk"],
    },
    {
      id: "non-preoccuparti", type: "phrase", pos: "phrase", register: "informal", target: "Non preoccuparti!",
      gloss: { es: "¡No te preocupes!", en: "Don't worry! (informal)" },
      accept: [{ text: "Non ti preoccupare!" }],
      distractors: ["Non preoccupati!", "Non ti preoccupi!", "Non preoccuparsi!"],
      note: { es: "Imperativo negativo con tu: non + infinitivo (non preoccuparti).", en: "Negative tu imperative: non + infinitive (non preoccuparti)." },
      tags: ["advice", "imperative"],
    },
    {
      id: "si-accomodi", type: "phrase", pos: "phrase", register: "formal", target: "Si accomodi.",
      gloss: { es: "Pase / Siéntese, por favor.", en: "Please come in / take a seat (formal)." },
      distractors: ["Si accomoda.", "Ci accomodi.", "Si accomodate."],
      note: { es: "Imperativo de Lei: el pronombre va delante (si accomodi).", en: "Lei imperative: the pronoun goes in front (si accomodi)." },
      tags: ["imperative", "polite"],
    },
    {
      id: "dimmi", type: "phrase", pos: "phrase", register: "informal", target: "Dimmi!",
      gloss: { es: "¡Dime!", en: "Tell me!" },
      distractors: ["Dimi!", "Dicimi!", "Mi di'!"],
      note: { es: "di' + mi = dimmi: la consonante se duplica (fammi, dammi).", en: "di' + mi = dimmi: the consonant doubles (fammi, dammi)." },
      tags: ["imperative", "pronouns"],
    },
    {
      id: "mi-fa-male-la-gola", type: "sentence", target: "Mi fa male la gola.",
      gloss: { es: "Me duele la garganta.", en: "I have a sore throat." },
      accept: [{ text: "Ho mal di gola." }],
      errors: [{ text: "Mi fanno male la gola.", feedback: { es: "Una sola cosa duele: mi fa male (mi fanno male i piedi, en plural).", en: "One thing hurts: mi fa male (plural: mi fanno male i piedi)." } }],
      distractors: ["fanno", "il", "Ho"],
      tags: ["health"],
    },
    {
      id: "dovresti-riposarti", type: "sentence", register: "informal", target: "Dovresti riposarti.",
      gloss: { es: "Deberías descansar.", en: "You should rest." },
      accept: [{ text: "Dovresti riposare." }, { text: "Ti dovresti riposare." }],
      distractors: ["Devi", "riposati", "dovrebbe"],
      note: { es: "Condicional de dovere para aconsejar: dovresti (tú), dovrebbe (usted).", en: "Conditional of dovere for advice: dovresti (tu), dovrebbe (Lei)." },
      tags: ["advice", "conditional"],
    },
    {
      id: "prendi-medicine", type: "sentence", register: "informal", target: "Prendi questa medicina due volte al giorno.",
      gloss: { es: "Toma esta medicina dos veces al día.", en: "Take this medicine twice a day." },
      distractors: ["Prende", "questo", "alla"],
      tags: ["health", "imperative"],
    },
    {
      id: "lo-prenda", type: "sentence", register: "formal", target: "Lo prenda dopo i pasti.",
      gloss: { es: "Tómelo después de las comidas.", en: "Take it after meals (formal)." },
      errors: [{ text: "Prendalo dopo i pasti.", feedback: { es: "Con Lei el pronombre va delante: lo prenda.", en: "With Lei the pronoun goes in front: lo prenda." } }],
      distractors: ["Prendalo", "prendi", "pasto"],
      tags: ["health", "imperative", "pronouns"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-imperativo-tu", type: "pattern", target: "parla! · prendi! · senti! · non parlare!",
      gloss: { es: "el imperativo con tu", en: "the tu imperative" },
      pattern: {
        rule: {
          es: "-are → -a (parla!), -ere/-ire → -i (prendi!, senti!). Negativo: non + infinitivo (non parlare!).",
          en: "-are → -a (parla!), -ere/-ire → -i (prendi!, senti!). Negative: non + infinitive (non parlare!).",
        },
        table: [["parlare", "parla!", "non parlare!"], ["prendere", "prendi!", "non prendere!"], ["sentire", "senti!", "non sentire!"], ["andare", "va' / vai!", "non andare!"], ["fare", "fa' / fai!", "non fare!"]],
      },
      question: {
        prompt: { es: "«¡No fumes!» (tú) es…", en: "'Don't smoke!' (tu) is…" },
        options: ["Non fumare!", "Non fumi!", "Non fuma!", "No fumare!"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "imperative"],
    },
    {
      id: "pat-imperativo-lei", type: "pattern", target: "parli! · prenda! · senta! · venga!",
      gloss: { es: "el imperativo con Lei (usted)", en: "the Lei (formal) imperative" },
      pattern: {
        rule: {
          es: "Como el «usted» del español: -are → -i (parli), -ere/-ire → -a (prenda, senta). Irregulares: venga, vada, faccia, dica.",
          en: "-are → -i (parli), -ere/-ire → -a (prenda, senta): the opposite vowels of the tu form. Irregular: venga, vada, faccia, dica.",
        },
        table: [["parlare", "parli!"], ["prendere", "prenda!"], ["sentire", "senta!"], ["venire", "venga!"], ["dire", "dica!"]],
      },
      question: {
        prompt: { es: "Completa (Lei): «Mi ___, dov'è la farmacia?» (scusare)", en: "Complete (Lei): 'Mi ___, dov'è la farmacia?' (scusare)" },
        options: ["scusi", "scusa", "scusate", "scusare"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "imperative", "polite"],
    },
    {
      id: "pat-imperativo-pronomi", type: "pattern", target: "prendilo! · dimmi! · lo prenda!",
      gloss: { es: "imperativo + pronombres", en: "imperative + pronouns" },
      pattern: {
        rule: {
          es: "Con tu, el pronombre se pega al final (prendilo, alzati); con da', di', fa', sta', va' se duplica (dimmi, fammi). Con Lei va delante (lo prenda, si alzi).",
          en: "With tu, the pronoun attaches at the end (prendilo, alzati); after da', di', fa', sta', va' it doubles (dimmi, fammi). With Lei it goes in front (lo prenda, si alzi).",
        },
        table: [["tu", "prendilo · alzati · dimmi"], ["Lei", "lo prenda · si alzi · mi dica"]],
      },
      question: {
        prompt: { es: "«Tómala» (tú; la medicina) es…", en: "'Take it' (tu; the medicine) is…" },
        options: ["Prendila!", "La prendi!", "Prendela!", "La prenda!"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "imperative", "pronouns"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-influenza", type: "listening", register: "formal",
      target: "Signora, ha l'influenza. Resti a letto due o tre giorni, beva molta acqua e prenda questo sciroppo tre volte al giorno.",
      gloss: {
        es: "Señora, tiene gripe. Quédese en cama dos o tres días, beba mucha agua y tome este jarabe tres veces al día.",
        en: "You have the flu. Stay in bed for two or three days, drink plenty of water and take this syrup three times a day.",
      },
      question: {
        prompt: { es: "¿Qué tiene que tomar y cuántas veces?", en: "What should she take, and how often?" },
        options: [
          { es: "Un jarabe, tres veces al día", en: "A syrup, three times a day" },
          { es: "Una pastilla, dos veces al día", en: "A tablet, twice a day" },
          { es: "Un jarabe, una vez al día", en: "A syrup, once a day" },
          { es: "Solo agua, todo el día", en: "Just water, all day" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "health"],
    },
    {
      id: "dlg-mal-di-testa", type: "dialogue", register: "informal", target: "Hai ragione.",
      gloss: { es: "Tienes razón.", en: "You're right." },
      turns: [
        { who: "A", target: "Che cos'hai? Sei pallido.", gloss: { es: "¿Qué te pasa? Estás pálido.", en: "What's wrong? You look pale." } },
        { who: "B", target: "Ho un mal di testa terribile.", gloss: { es: "Tengo un dolor de cabeza terrible.", en: "I've got a terrible headache." } },
        { who: "A", target: "Prendi un'aspirina e vai a letto presto.", gloss: { es: "Toma una aspirina y acuéstate temprano.", en: "Take an aspirin and go to bed early." } },
        { who: "B", target: "Hai ragione. Grazie.", gloss: { es: "Tienes razón. Gracias.", en: "You're right. Thanks." } },
      ],
      question: {
        prompt: { es: "¿Qué le aconseja A?", en: "What does A advise?" },
        options: [
          { es: "Tomar una aspirina y acostarse temprano.", en: "Take an aspirin and go to bed early." },
          { es: "Ir al médico enseguida.", en: "Go to the doctor right away." },
          { es: "Salir a tomar aire.", en: "Go out for some fresh air." },
          { es: "Comer algo.", en: "Eat something." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "advice"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-pronto", type: "bridge", onlyFor: "es", target: "Pronto?",
      gloss: { es: "¿Aló? / ¿Bueno? (al teléfono)", en: "Hello? (on the phone)" },
      question: {
        prompt: { es: "Al contestar el teléfono, «Pronto?» significa…", en: "Answering the phone, 'Pronto?' means…" },
        options: [
          { es: "¿Aló? / ¿Bueno? / ¿Diga?", en: "Hello?" },
          { es: "¡Rápido!", en: "Quick!" },
          { es: "¿Ya llegaste?", en: "Are you there yet?" },
          { es: "¡Hasta pronto!", en: "See you soon!" },
        ],
        answer: 0,
      },
      note: { es: "pronto = listo (sono pronto = estoy listo) y «¿aló?» al teléfono; «pronto» del español es «presto»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
