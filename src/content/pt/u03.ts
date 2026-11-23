import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u03",
  lang: "pt",
  index: 3,
  cefr: "A1.1",
  title: { target: "Os números", es: "Los números", en: "Numbers" },
  canDo: [
    { es: "Puedo contar, decir mi edad y dar mi número de teléfono.", en: "I can count, say my age and give my phone number." },
    { es: "Sé los días de la semana (segunda-feira, terça-feira…).", en: "I know the days of the week (segunda-feira, terça-feira…)." },
    { es: "Sé conjugar «ter» en presente.", en: "I can conjugate ter in the present tense." },
  ],
  icon: "🔢",
  items: build("pt", 3, "A1.1", [
    {
      id: "s-r", type: "sound", target: "Rio",
      gloss: { es: "Río (la ciudad, o un río)", en: "Rio (the city) / river" },
      distractors: ["Hio", "Lio", "Rrio"],
      note: {
        es: "La r inicial y la rr suenan como una j suave (aspirada): Rio ≈ «Jíu», carro ≈ «cáju».",
        en: "An initial r and rr sound like an English h: Rio ≈ 'HEE-oo', carro ≈ 'KAH-hoo'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "r"],
    },
    // ── Numbers ──────────────────────────────────────────────
    { id: "um-uma", type: "word", pos: "num", target: "um", gloss: { es: "uno / un (masculino)", en: "one (masculine)" }, distractors: ["uno", "uma", "hum"], note: { es: "Con sustantivos femeninos: uma (uma pessoa).", en: "With feminine nouns: uma (uma pessoa)." }, tags: ["numbers"] },
    { id: "dois", type: "word", pos: "num", target: "dois", gloss: { es: "dos (masculino)", en: "two (masculine)" }, distractors: ["dos", "duas", "deus"], tags: ["numbers"] },
    { id: "duas", type: "word", pos: "num", target: "duas", gloss: { es: "dos (con sustantivos femeninos)", en: "two (with feminine nouns)" }, distractors: ["dois", "dúas", "duos"], note: { es: "Uno y dos tienen femenino: uma casa, duas casas, dois carros.", en: "One and two have feminine forms: uma casa, duas casas, dois carros." }, tags: ["numbers"] },
    { id: "tres", type: "word", pos: "num", target: "três", gloss: { es: "tres", en: "three" }, distractors: ["tres", "treis", "trez"], tags: ["numbers"] },
    { id: "seis", type: "word", pos: "num", target: "seis", gloss: { es: "seis", en: "six" }, accept: [{ text: "meia", verdict: "almost", feedback: { es: "«meia» (media docena) se usa para el 6 al dictar números; como número suelto, «seis».", en: "'meia' (half a dozen) is used for 6 when reading out numbers; on its own, say 'seis'." } }], distractors: ["sete", "sei", "seys"], tags: ["numbers"] },
    { id: "dez", type: "word", pos: "num", target: "dez", gloss: { es: "diez", en: "ten" }, distractors: ["dês", "diez", "deis"], tags: ["numbers"] },
    { id: "quinze", type: "word", pos: "num", target: "quinze", gloss: { es: "quince", en: "fifteen" }, distractors: ["quince", "quinzi", "cinze"], tags: ["numbers"] },
    { id: "dezesseis", type: "word", pos: "num", target: "dezesseis", gloss: { es: "dieciséis", en: "sixteen" }, variants: [{ region: "PT", text: "dezasseis", note: { es: "En Portugal: dezasseis, dezassete, dezanove.", en: "In Portugal: dezasseis, dezassete, dezanove." } }], distractors: ["dezeseis", "dieciseis", "dezesete"], tags: ["numbers"] },
    { id: "vinte", type: "word", pos: "num", target: "vinte", gloss: { es: "veinte", en: "twenty" }, distractors: ["veinte", "vinti", "vente"], tags: ["numbers"] },
    { id: "trinta-e-cinco", type: "word", pos: "num", target: "trinta e cinco", gloss: { es: "treinta y cinco", en: "thirty-five" }, distractors: ["trinta cinco", "treinta e cinco", "trinta y cinco"], note: { es: "Decenas y unidades siempre con «e»: vinte e um, noventa e nove.", en: "Tens and units are always joined with 'e' (and): vinte e um." }, tags: ["numbers"] },
    { id: "cem", type: "word", pos: "num", target: "cem", gloss: { es: "cien", en: "a hundred (exactly)" }, distractors: ["cento", "sem", "cien"], note: { es: "100 = cem; 101 a 199 = cento e…: cento e vinte.", en: "100 = cem; 101–199 = cento e…: cento e vinte." }, tags: ["numbers"] },
    // ── Days ─────────────────────────────────────────────────
    { id: "segunda-feira", type: "word", pos: "noun", target: "a segunda-feira", gender: "f", plural: "as segundas-feiras", gloss: { es: "el lunes", en: "Monday" }, distractors: ["a terça-feira", "o domingo", "a lunes-feira"], note: { es: "Los días laborables se cuentan desde el domingo: segunda (lunes), terça (martes), quarta, quinta, sexta.", en: "Weekdays are numbered from Sunday: segunda (Mon), terça (Tue), quarta, quinta, sexta." }, grammar: ["pt-g-dias-semana"], tags: ["days"] },
    { id: "sexta-feira", type: "word", pos: "noun", target: "a sexta-feira", gender: "f", plural: "as sextas-feiras", gloss: { es: "el viernes", en: "Friday" }, distractors: ["a sétima-feira", "a sexta-feria", "a quinta-feira"], grammar: ["pt-g-dias-semana"], tags: ["days"] },
    { id: "sabado", type: "word", pos: "noun", target: "o sábado", gender: "m", plural: "os sábados", gloss: { es: "el sábado", en: "Saturday" }, distractors: ["a sábado", "o sabádo", "o domingo"], tags: ["days"] },
    { id: "domingo", type: "word", pos: "noun", target: "o domingo", gender: "m", plural: "os domingos", gloss: { es: "el domingo", en: "Sunday" }, distractors: ["a domingo", "o domingue", "o sábado"], tags: ["days"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "quantos-anos-voce-tem", type: "sentence", target: "Quantos anos você tem?", register: "informal",
      gloss: { es: "¿Cuántos años tienes?", en: "How old are you? (informal)" },
      accept: [{ text: "Você tem quantos anos?" }],
      variants: [{ region: "PT", text: "Quantos anos tens?" }],
      distractors: ["é", "Quanto", "o senhor"],
      tags: ["age"],
    },
    {
      id: "quantos-anos-a-senhora-tem", type: "sentence", target: "Quantos anos a senhora tem?", register: "formal",
      gloss: { es: "¿Cuántos años tiene (usted)?", en: "How old are you? (formal)" },
      accept: [{ text: "Quantos anos o senhor tem?" }],
      distractors: ["você", "é", "Quanto"],
      tags: ["age", "register"],
    },
    {
      id: "tenho-trinta-anos", type: "sentence", target: "Eu tenho trinta anos.", spoken: "Eu tenho trinta anos.",
      gloss: { es: "Tengo treinta años.", en: "I'm thirty (years old)." },
      accept: [{ text: "Tenho trinta anos." }, { text: "Eu tenho 30 anos." }, { text: "Tenho 30 anos." }],
      errors: [{ text: "Eu sou trinta anos.", feedback: { es: "La edad va con «ter»: tenho trinta anos.", en: "Age uses ter (to have): tenho trinta anos." }, ruleId: "pt-g-ter" }],
      distractors: ["sou", "tem", "anas"],
      tags: ["age"],
    },
    {
      id: "meu-telefone", type: "sentence", target: "Meu telefone é nove, nove, meia, um, dois, três.", spoken: "Meu telefone é nove, nove, meia, um, dois, três.",
      gloss: { es: "Mi teléfono es nueve, nueve, seis, uno, dos, tres.", en: "My phone number is nine, nine, six, one, two, three." },
      accept: [{ text: "Meu telefone é nove, nove, seis, um, dois, três." }, { text: "O meu telefone é nove, nove, meia, um, dois, três." }],
      distractors: ["sete", "dez", "tem"],
      note: { es: "Al dictar números, el 6 se dice «meia» (de «meia dúzia») para no confundirlo con «três».", en: "When reading out numbers, 6 is 'meia' (from 'meia dúzia', half a dozen) so it isn't confused with 'três'." },
      tags: ["numbers", "phone"],
    },
    {
      id: "hoje-e-sexta", type: "sentence", target: "Hoje é sexta-feira.",
      gloss: { es: "Hoy es viernes.", en: "Today is Friday." },
      accept: [{ text: "Hoje é sexta." }],
      distractors: ["está", "a", "sábado"],
      note: { es: "En la conversación se omite «-feira»: hoje é sexta.", en: "In speech '-feira' is usually dropped: hoje é sexta." },
      tags: ["days"],
    },
    {
      id: "no-sabado", type: "sentence", target: "No sábado eu não trabalho.",
      gloss: { es: "El sábado no trabajo.", en: "I don't work on Saturday." },
      accept: [{ text: "No sábado não trabalho." }, { text: "Eu não trabalho no sábado." }, { text: "Não trabalho no sábado." }],
      errors: [{ text: "O sábado eu não trabalho.", feedback: { es: "Para «el sábado» (ese día) se dice «no sábado» (em + o).", en: "'On Saturday' is 'no sábado' (em + o)." } }],
      distractors: ["na", "trabalha", "nunca"],
      tags: ["days"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-ter", type: "paradigm", target: "ter — presente", spoken: "ter",
      gloss: { es: "«ter» (tener) en presente", en: "ter (to have) — present" },
      grammar: ["pt-g-ter"],
      paradigm: {
        caption: { es: "Conjuga «ter» en presente", en: "Conjugate ter in the present tense" },
        cells: [
          { label: "eu", answer: "tenho", ruleId: "pt-g-ter" },
          { label: "você / ele / ela", answer: "tem", ruleId: "pt-g-ter" },
          { label: "nós", answer: "temos", ruleId: "pt-g-ter" },
          { label: "vocês / eles / elas", answer: "têm", ruleId: "pt-g-ter" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-ter", type: "pattern", target: "Tenho vinte anos. · Tem um café?",
      gloss: { es: "«ter»: tener, edad y «hay»", en: "ter: have, age and 'there is'" },
      pattern: {
        rule: {
          es: "«ter» es tener, y con él se dice la edad (tenho vinte anos). En Brasil también reemplaza a «haber» en la conversación: tem um café aqui? (¿hay un café aquí?).",
          en: "ter is 'to have', and it gives your age (tenho vinte anos = I'm twenty). In Brazilian speech it also means 'there is/are': tem um café aqui? (is there a café here?).",
        },
        table: [["eu tenho", "tengo / I have"], ["ele tem", "tiene / he has"], ["eles têm", "tienen / they have"], ["tem…?", "¿hay…? / is there…?"]],
      },
      question: {
        prompt: { es: "¿Cómo preguntas «¿Hay pan?» en Brasil, de manera natural?", en: "How do you naturally ask 'Is there any bread?' in Brazil?" },
        options: ["Tem pão?", "É pão?", "Está pão?", "Há de pão?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-ter"], tags: ["grammar", "ter"],
    },
    {
      id: "pat-dias", type: "pattern", target: "segunda, terça, quarta, quinta, sexta",
      gloss: { es: "los días de la semana", en: "the days of the week" },
      pattern: {
        rule: {
          es: "De lunes a viernes los días se numeran: segunda-feira (lunes) … sexta-feira (viernes). Sábado y domingo son como en español.",
          en: "Monday to Friday are numbered: segunda-feira (Monday) … sexta-feira (Friday). Saturday is sábado, Sunday domingo.",
        },
        table: [["segunda-feira", "lunes / Monday"], ["terça-feira", "martes / Tuesday"], ["quarta-feira", "miércoles / Wednesday"], ["quinta-feira", "jueves / Thursday"], ["sexta-feira", "viernes / Friday"]],
      },
      question: {
        prompt: { es: "¿Qué día es «quarta-feira»?", en: "Which day is 'quarta-feira'?" },
        options: [
          { es: "miércoles", en: "Wednesday" },
          { es: "jueves", en: "Thursday" },
          { es: "martes", en: "Tuesday" },
          { es: "cuarto día del mes", en: "the fourth of the month" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-dias-semana"], tags: ["grammar", "days"],
    },
    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-telefone", type: "listening", target: "O número da escola é três, dois, meia, oito, zero, sete.",
      gloss: { es: "El número de la escuela es tres, dos, seis, ocho, cero, siete.", en: "The school's number is three, two, six, eight, zero, seven." },
      question: {
        prompt: { es: "¿Qué número oíste?", en: "Which number did you hear?" },
        options: ["326 807", "323 807", "326 087", "336 807"],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "numbers", "phone"],
    },
    {
      id: "dlg-idade", type: "dialogue", target: "Eu tenho vinte e dois.",
      gloss: { es: "Tengo veintidós.", en: "I'm twenty-two." },
      turns: [
        { who: "A", target: "Quantos anos você tem, Bia?", gloss: { es: "¿Cuántos años tienes, Bia?", en: "How old are you, Bia?" } },
        { who: "B", target: "Eu tenho vinte e dois. E você?", gloss: { es: "Tengo veintidós. ¿Y tú?", en: "I'm twenty-two. And you?" } },
        { who: "A", target: "Vinte e cinco. Meu aniversário é na quinta!", gloss: { es: "Veinticinco. ¡Mi cumpleaños es el jueves!", en: "Twenty-five. My birthday's on Thursday!" } },
      ],
      question: {
        prompt: { es: "¿Cuándo es el cumpleaños de A?", en: "When is A's birthday?" },
        options: [
          { es: "El jueves", en: "On Thursday" },
          { es: "El quinto día del mes", en: "On the fifth of the month" },
          { es: "El viernes", en: "On Friday" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "age", "days"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-tenho-anos", type: "bridge", onlyFor: "en", target: "Tenho vinte anos.",
      gloss: { es: "Tengo veinte años.", en: "I'm twenty." },
      distractors: ["Sou vinte anos.", "Estou vinte anos.", "Sou vinte."],
      note: { en: "Portuguese says your age with 'have': tenho vinte anos (literally 'I have twenty years')." },
      exercises: ["guess", "recall"], tags: ["bridge", "age"],
    },
    {
      id: "br-duas", type: "bridge", onlyFor: "es", target: "duas horas",
      gloss: { es: "dos horas", en: "two hours" },
      distractors: ["dois horas", "dos horas", "duas hora"],
      note: { es: "A diferencia del español, «dos» tiene femenino: dois livros, pero duas horas." },
      exercises: ["guess", "recall"], tags: ["bridge", "numbers"],
    },
  ]),
};
