import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u13",
  lang: "pt",
  index: 13,
  cefr: "B1",
  title: { target: "Saúde", es: "Salud y consejos", en: "Health and advice" },
  canDo: [
    { es: "Puedo explicarle a un médico o farmacéutico qué me duele y desde cuándo.", en: "I can tell a doctor or pharmacist what hurts and since when." },
    { es: "Puedo entender instrucciones y dar consejos sencillos.", en: "I can understand instructions and give simple advice." },
    { es: "Sé usar doer / estar com dor de, el imperativo y ter que / dever.", en: "I can use doer / estar com dor de, the imperative and ter que / dever." },
  ],
  icon: "🩺",
  items: build("pt", 13, "B1", [
    { id: "cabeca", type: "word", pos: "noun", target: "a cabeça", gender: "f", plural: "as cabeças", gloss: { es: "la cabeza", en: "the head" }, distractors: ["o cabeço", "a cabeza", "a careca"], tags: ["body"] },
    { id: "barriga", type: "word", pos: "noun", target: "a barriga", gender: "f", plural: "as barrigas", gloss: { es: "la panza, la barriga", en: "the belly / tummy" }, distractors: ["o barrigo", "a bexiga", "a briga"], tags: ["body"] },
    { id: "garganta", type: "word", pos: "noun", target: "a garganta", gender: "f", plural: "as gargantas", gloss: { es: "la garganta", en: "the throat" }, distractors: ["o garganto", "a gargalhada", "a gravata"], tags: ["body"] },
    { id: "dente", type: "word", pos: "noun", target: "o dente", gender: "m", plural: "os dentes", gloss: { es: "el diente", en: "the tooth" }, distractors: ["a dente", "o diente", "o dentista"], note: { es: "Masculino: o dente (el diente).", en: "Masculine: o dente." }, tags: ["body"] },
    { id: "gripe", type: "word", pos: "noun", target: "a gripe", gender: "f", plural: "as gripes", gloss: { es: "la gripe", en: "the flu" }, distractors: ["o gripe", "a gripa", "a grade"], tags: ["health"] },
    { id: "resfriado", type: "word", pos: "noun", target: "o resfriado", gender: "m", plural: "os resfriados", gloss: { es: "el resfriado", en: "the cold (illness)" }, variants: [{ region: "PT", text: "a constipação", note: { es: "En Portugal un resfriado es «uma constipação» (estar constipado).", en: "In Portugal a cold is 'uma constipação' (estar constipado)." } }], distractors: ["o resfriamento", "a resfriada", "o frio de"], tags: ["health"] },
    { id: "febre", type: "word", pos: "noun", target: "a febre", gender: "f", plural: "as febres", gloss: { es: "la fiebre", en: "the fever / temperature" }, distractors: ["o febre", "a fiebre", "a fibra"], tags: ["health"] },
    { id: "remedio", type: "word", pos: "noun", target: "o remédio", gender: "m", plural: "os remédios", gloss: { es: "el remedio, el medicamento", en: "the medicine" }, distractors: ["a remédia", "o remendo", "o médico"], tags: ["health"] },
    { id: "receita", type: "word", pos: "noun", target: "a receita", gender: "f", plural: "as receitas", gloss: { es: "la receta (médica o de cocina)", en: "the prescription / recipe" }, distractors: ["o recibo", "a receta", "o receio"], tags: ["health"] },
    { id: "tossir", type: "word", pos: "verb", target: "tossir", gloss: { es: "toser", en: "to cough" }, forms: { eu: "tusso", você: "tosse" }, distractors: ["toser", "tosse", "torcer"], tags: ["health", "verbs"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "estou-com-dor-de-cabeca", type: "sentence", target: "Estou com dor de cabeça desde ontem.",
      gloss: { es: "Me duele la cabeza desde ayer.", en: "I've had a headache since yesterday." },
      accept: [{ text: "Eu estou com dor de cabeça desde ontem." }, { text: "Minha cabeça está doendo desde ontem." }, { text: "Estou com uma dor de cabeça desde ontem." }, { text: "Tenho dor de cabeça desde ontem." }, { text: "Eu tenho dor de cabeça desde ontem." }],
      variants: [{ region: "PT", text: "Estou com dores de cabeça desde ontem.", note: { es: "En Portugal se dice mucho en plural: dores de cabeça; también «dói-me a cabeça».", en: "In Portugal the plural is common: dores de cabeça; also 'dói-me a cabeça'." } }],
      distractors: ["tem", "da", "doi"],
      grammar: ["pt-g-doer"], tags: ["health", "body"],
    },
    {
      id: "me-doi-as-costas", type: "sentence", target: "Minhas costas estão doendo muito.",
      gloss: { es: "Me duele mucho la espalda.", en: "My back really hurts." },
      accept: [{ text: "As minhas costas estão doendo muito." }, { text: "Estou com muita dor nas costas." }, { text: "Minhas costas doem muito." }, { text: "As minhas costas doem muito." }],
      variants: [{ region: "PT", text: "As minhas costas estão a doer muito." }],
      errors: [{ text: "Minhas costas está doendo muito.", feedback: { es: "«as costas» es plural: estão doendo.", en: "'as costas' is plural: estão doendo." }, ruleId: "pt-g-doer" }],
      distractors: ["está", "dói", "espalda"],
      tags: ["health", "body"],
    },
    {
      id: "tome-este-remedio", type: "sentence", target: "Tome este remédio de oito em oito horas.", register: "formal",
      gloss: { es: "Tome este medicamento cada ocho horas.", en: "Take this medicine every eight hours. (formal)" },
      accept: [{ text: "Tome esse remédio de oito em oito horas." }, { text: "Tome este remédio a cada oito horas." }],
      errors: [{ text: "Toma este remédio de oito em oito horas.", feedback: { es: "Para «usted» el imperativo termina en -e: tome.", en: "The formal imperative of -ar verbs ends in -e: tome." }, ruleId: "pt-g-imperativo" }],
      distractors: ["Toma", "cada", "a"],
      tags: ["health", "imperative"],
    },
    {
      id: "toma-um-cha", type: "sentence", target: "Toma um chá e vai dormir cedo!", register: "informal",
      gloss: { es: "¡Tómate un té y acuéstate temprano!", en: "Have a cup of tea and go to bed early! (informal)" },
      accept: [{ text: "Tome um chá e vá dormir cedo!" }],
      distractors: ["Tomar", "vá", "se"],
      note: { es: "En el Brasil hablado, el imperativo de «você» suele ser la forma de «ele» (toma, vai); la forma formal es tome, vá.", en: "In spoken Brazilian Portuguese the você imperative is usually the ele form (toma, vai); the formal is tome, vá." },
      tags: ["health", "imperative", "advice"],
    },
    {
      id: "voce-tem-que-descansar", type: "sentence", target: "Você tem que descansar e beber muita água.",
      gloss: { es: "Tienes que descansar y tomar mucha agua.", en: "You have to rest and drink plenty of water." },
      accept: [{ text: "Você tem de descansar e beber muita água." }, { text: "Você precisa descansar e beber muita água." }, { text: "Você deve descansar e beber muita água." }, { text: "Você tem que descansar e tomar muita água." }],
      distractors: ["bebe", "muito", "têm"],
      grammar: ["pt-g-ter-que"], tags: ["health", "advice"],
    },
    {
      id: "voce-deveria-ir", type: "sentence", target: "Você deveria ir ao médico.",
      gloss: { es: "Deberías ir al médico.", en: "You should go to the doctor's." },
      accept: [{ text: "Você devia ir ao médico." }, { text: "É melhor você ir ao médico." }, { text: "Você deveria ir no médico.", verdict: "almost", feedback: { es: "Muy común en el habla brasileña; la norma pide «ir a»: ir ao médico.", en: "Very common in Brazilian speech; the standard is 'ir a': ir ao médico." } }],
      distractors: ["deve", "para o", "médica"],
      grammar: ["pt-g-ter-que"], tags: ["health", "advice"],
    },
    {
      id: "sou-alergico", type: "sentence", target: "Sou alérgico à penicilina.",
      gloss: { es: "Soy alérgico a la penicilina.", en: "I'm allergic to penicillin." },
      accept: [{ text: "Sou alérgica à penicilina." }, { text: "Eu sou alérgico à penicilina." }, { text: "Eu sou alérgica à penicilina." }, { text: "Sou alérgico a penicilina.", verdict: "almost", feedback: { es: "alérgico a + a penicilina = à penicilina (con crase).", en: "alérgico a + a penicilina = à penicilina (with the crase)." } }],
      distractors: ["Estou", "de", "alergia"],
      tags: ["health"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-doer", type: "pattern", target: "Estou com dor de cabeça. · Meu pé está doendo.",
      gloss: { es: "decir qué duele", en: "saying what hurts" },
      pattern: {
        rule: {
          es: "Lo más natural en Brasil: estar com dor de + parte del cuerpo (estou com dor de dente), o la parte del cuerpo como sujeto de «doer» (meu joelho está doendo). «Me dói…» existe, pero en Brasil es menos habitual (en Portugal se dice mucho «dói-me a cabeça»).",
          en: "The most natural Brazilian ways: estar com dor de + body part (estou com dor de dente = I have toothache), or the body part as subject of doer (meu joelho está doendo = my knee hurts).",
        },
        table: [["cabeça", "Estou com dor de cabeça."], ["garganta", "Estou com dor de garganta."], ["pé", "Meu pé está doendo."], ["costas", "Minhas costas estão doendo."]],
      },
      question: {
        prompt: { es: "«Me duelen los oídos»:", en: "'My ears hurt':" },
        options: ["Estou com dor de ouvido.", "Tenho dor nos ouvidos de.", "Eu doo os ouvidos.", "Me doem de ouvido."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-doer"], tags: ["grammar", "health"],
    },
    {
      id: "pat-imperativo", type: "pattern", target: "Fala! · Fale! · Come! · Coma!",
      gloss: { es: "el imperativo", en: "the imperative" },
      pattern: {
        rule: {
          es: "Formal (o senhor / a senhora, carteles): -ar → -e (fale), -er/-ir → -a (coma, abra). Con «você», en la conversación se usa mucho la forma de «ele»: fala, come. Negativo: não fale, não coma.",
          en: "Formal (o senhor / a senhora, signs): -ar → -e (fale), -er/-ir → -a (coma, abra). With você, speech mostly uses the ele form: fala, come. Negative: não fale, não coma.",
        },
        table: [["", "você (fala)", "formal"], ["falar", "fala", "fale"], ["comer", "come", "coma"], ["abrir", "abre", "abra"], ["ir", "vai", "vá"], ["fazer", "faz", "faça"]],
      },
      question: {
        prompt: { es: "La médica le dice a un paciente mayor: «¡Beba mucha agua!»", en: "The doctor tells an older patient: 'Drink plenty of water!'" },
        options: ["Beba muita água!", "Bebe muita água!", "Beber muita água!", "Bebas muita água!"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-imperativo"], tags: ["grammar", "imperative"],
    },
    {
      id: "pat-ter-que", type: "pattern", target: "tenho que · devo · deveria · é melhor",
      gloss: { es: "obligación y consejo", en: "obligation and advice" },
      pattern: {
        rule: {
          es: "ter que / ter de + infinitivo = tener que. dever = deber. Para un consejo suave: deveria / devia (deberías) o «é melhor + infinitivo».",
          en: "ter que / ter de + infinitive = have to. dever = must. For gentle advice: deveria / devia (should) or 'é melhor + infinitive' (you'd better).",
        },
        table: [["obrigação", "Tenho que trabalhar amanhã."], ["dever", "Você deve tomar o remédio."], ["conselho", "Você deveria dormir mais."], ["conselho", "É melhor ficar em casa."]],
      },
      question: {
        prompt: { es: "Consejo amable: «Deberías dejar de fumar».", en: "Friendly advice: 'You should stop smoking'." },
        options: ["Você deveria parar de fumar.", "Você tem parar de fumar.", "Você deve que parar de fumar.", "Você deverá parar fumar."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-ter-que"], tags: ["grammar", "advice"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-farmacia", type: "listening", target: "Esse xarope é para tosse seca. Tome uma colher três vezes por dia, depois das refeições. Se a febre não passar em dois dias, procure um médico.",
      gloss: { es: "Este jarabe es para la tos seca. Tome una cucharada tres veces al día, después de las comidas. Si la fiebre no se le pasa en dos días, vaya al médico.", en: "This syrup is for a dry cough. Take a spoonful three times a day, after meals. If the fever doesn't go in two days, see a doctor." },
      question: {
        prompt: { es: "¿Cuándo hay que tomar el jarabe?", en: "When should the syrup be taken?" },
        options: [
          { es: "Tres veces al día, después de comer", en: "Three times a day, after meals" },
          { es: "Dos veces al día, antes de comer", en: "Twice a day, before meals" },
          { es: "Solo de noche", en: "Only at night" },
          { es: "Cada dos días", en: "Every two days" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "health"],
    },
    {
      id: "dlg-medico", type: "dialogue", target: "O que a senhora está sentindo?", register: "formal",
      gloss: { es: "¿Qué siente (usted)?", en: "What symptoms do you have?" },
      turns: [
        { who: "A", target: "Bom dia. O que a senhora está sentindo?", gloss: { es: "Buenos días. ¿Qué le pasa?", en: "Good morning. What seems to be the problem?" } },
        { who: "B", target: "Estou com dor de garganta e tossindo muito há três dias.", gloss: { es: "Me duele la garganta y toso mucho desde hace tres días.", en: "I've had a sore throat and a bad cough for three days." } },
        { who: "A", target: "Está com febre?", gloss: { es: "¿Tiene fiebre?", en: "Do you have a temperature?" } },
        { who: "B", target: "Um pouco, trinta e oito.", gloss: { es: "Un poco, treinta y ocho.", en: "A bit, thirty-eight." } },
        { who: "A", target: "É uma amigdalite. Vou passar um antibiótico.", gloss: { es: "Es una amigdalitis. Le voy a recetar un antibiótico.", en: "It's tonsillitis. I'll prescribe an antibiotic." } },
      ],
      question: {
        prompt: { es: "¿Desde cuándo tose la paciente?", en: "How long has the patient been coughing?" },
        options: [
          { es: "Desde hace tres días", en: "For three days" },
          { es: "Desde ayer", en: "Since yesterday" },
          { es: "Desde hace una semana", en: "For a week" },
        ],
        answer: 0,
      },
      note: { es: "há três dias = hace tres días; passar um remédio = recetar.", en: "há três dias = three days ago / for three days; passar um remédio = to prescribe." },
      exercises: ["question"], tags: ["dialogue", "health"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-costas", type: "bridge", onlyFor: "es", target: "as costas",
      gloss: { es: "la espalda", en: "the back" },
      question: {
        prompt: { es: "«Estou com dor nas costas» significa que te duele…", en: "'Estou com dor nas costas' means your… hurts." },
        options: [{ es: "la espalda", en: "back" }, { es: "las costillas", en: "ribs" }, { es: "la cintura", en: "waist" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «as costas» (siempre plural) es la espalda; la costa (del mar) es «a costa» o «o litoral»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "body"],
    },
    {
      id: "br-en-receita", type: "bridge", onlyFor: "en", target: "a receita médica",
      gloss: { es: "la receta médica", en: "the doctor's prescription" },
      distractors: ["o recibo médico", "a recepção médica", "a receita do recibo"],
      note: { en: "a receita is a prescription or a recipe; a receipt is 'o recibo' or 'a nota fiscal'." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "health"],
    },
  ]),
};
