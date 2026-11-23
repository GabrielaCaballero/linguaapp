import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u23",
  lang: "pt",
  index: 23,
  cefr: "B2",
  title: { target: "Debater", es: "Debatir", en: "Debating" },
  canDo: [
    { es: "Puedo defender una postura, matizar y rebatir argumentos.", en: "I can defend a position, qualify it and counter arguments." },
    { es: "Sé usar conectores: embora, apesar de, no entanto, portanto, além disso, a não ser que.", en: "I can use connectors: embora, apesar de, no entanto, portanto, além disso, a não ser que." },
  ],
  icon: "⚖️",
  items: build("pt", 23, "B2", [
    { id: "argumento", type: "word", pos: "noun", target: "o argumento", gender: "m", plural: "os argumentos", gloss: { es: "el argumento (razón)", en: "the argument (reason)" }, distractors: ["a argumenta", "o aumento", "a discussão"], note: { es: "Una pelea o discusión acalorada es «uma discussão» o «uma briga».", en: "A quarrel is 'uma discussão' or 'uma briga'." }, tags: ["debate"] },
    { id: "embora", type: "word", pos: "other", target: "embora", gloss: { es: "aunque", en: "although" }, distractors: ["em bora", "apesar", "ainda"], note: { es: "Siempre con subjuntivo: embora seja caro.", en: "Always with the subjunctive: embora seja caro." }, grammar: ["pt-g-concessivas"], tags: ["debate", "connectors"] },
    { id: "apesar-de", type: "phrase", pos: "phrase", target: "apesar de", gloss: { es: "a pesar de", en: "despite" }, distractors: ["a pesar de", "apesar que de", "apesar do que"], grammar: ["pt-g-concessivas"], tags: ["debate", "connectors"] },
    { id: "no-entanto", type: "phrase", pos: "phrase", target: "no entanto", gloss: { es: "sin embargo", en: "however" }, accept: [{ text: "contudo" }, { text: "entretanto" }, { text: "todavia" }], distractors: ["entanto", "no tanto", "enquanto"], tags: ["debate", "connectors"] },
    { id: "portanto", type: "word", pos: "other", target: "portanto", gloss: { es: "por lo tanto", en: "therefore" }, distractors: ["por tanto", "porquanto", "entanto"], tags: ["debate", "connectors"] },
    { id: "alem-disso", type: "phrase", pos: "phrase", target: "além disso", gloss: { es: "además", en: "moreover / besides" }, distractors: ["além de isso", "além disto de", "ademais de"], tags: ["debate", "connectors"] },
    { id: "ou-seja", type: "phrase", pos: "phrase", target: "ou seja", gloss: { es: "o sea, es decir", en: "in other words" }, distractors: ["o seja", "ou é", "ou sea"], tags: ["debate", "connectors"] },
    { id: "polemico", type: "word", pos: "adj", target: "polêmico", gloss: { es: "polémico", en: "controversial" }, accept: [{ text: "polêmica" }], variants: [{ region: "PT", text: "polémico", note: { es: "En Portugal: polémico, con tilde aguda (como económico, académico).", en: "In Portugal: polémico, with an acute accent (like económico, académico)." } }], distractors: ["polemizado", "político", "pólemico"], tags: ["debate"] },
    { id: "convencer", type: "word", pos: "verb", target: "convencer", gloss: { es: "convencer", en: "to convince" }, forms: { eu: "convenço" }, distractors: ["vencer", "conhecer", "convencionar"], tags: ["debate", "verbs"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "embora-seja-caro", type: "sentence", target: "Embora seja caro, o transporte público é essencial.",
      gloss: { es: "Aunque sea caro, el transporte público es esencial.", en: "Although it's expensive, public transport is essential." },
      errors: [{ text: "Embora é caro, o transporte público é essencial.", feedback: { es: "«embora» siempre lleva subjuntivo: embora seja.", en: "'embora' always takes the subjunctive: embora seja." }, ruleId: "pt-g-concessivas" }],
      distractors: ["é", "Apesar", "fosse"],
      tags: ["debate", "subjunctive"],
    },
    {
      id: "apesar-de-ter-chovido", type: "sentence", target: "Apesar de ter chovido, o evento foi um sucesso.",
      gloss: { es: "A pesar de que llovió, el evento fue un éxito.", en: "Despite the rain, the event was a success." },
      accept: [{ text: "Apesar da chuva, o evento foi um sucesso." }],
      distractors: ["Embora", "choveu", "êxito"],
      grammar: ["pt-g-concessivas"], tags: ["debate"],
    },
    {
      id: "a-nao-ser-que", type: "sentence", target: "Não vou mudar de opinião, a não ser que você me convença.",
      gloss: { es: "No voy a cambiar de opinión, a menos que me convenzas.", en: "I won't change my mind unless you convince me." },
      accept: [{ text: "Não vou mudar de opinião, a menos que você me convença." }],
      errors: [{ text: "Não vou mudar de opinião, a não ser que você me convence.", feedback: { es: "«a não ser que» va con subjuntivo: convença.", en: "'a não ser que' takes the subjunctive: convença." }, ruleId: "pt-g-concessivas" }],
      distractors: ["convence", "convencer", "trocar"],
      tags: ["debate", "subjunctive"],
    },
    {
      id: "por-um-lado-voce-tem-razao", type: "sentence", target: "Até certo ponto você tem razão, mas não podemos generalizar.",
      gloss: { es: "Hasta cierto punto tienes razón, pero no podemos generalizar.", en: "Up to a point you're right, but we can't generalise." },
      accept: [{ text: "Até certo ponto você tem razão, mas a gente não pode generalizar." }],
      distractors: ["Até um certo", "está certo", "generalizando"],
      tags: ["debate"],
    },
    {
      id: "nao-e-bem-assim", type: "phrase", pos: "phrase", target: "Não é bem assim.",
      gloss: { es: "No es tan así. / No es exactamente así.", en: "It's not quite like that." },
      distractors: ["Não é bom assim.", "Não está bem assim.", "Não bem é assim."],
      tags: ["debate", "chunk"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-concessivas", type: "pattern", target: "embora + subjuntivo · apesar de + infinitivo / sustantivo",
      gloss: { es: "concesión: embora, apesar de, mesmo que", en: "concession: embora, apesar de, mesmo que" },
      pattern: {
        rule: {
          es: "embora, mesmo que, ainda que y a não ser que van siempre con subjuntivo (embora chova). apesar de va con sustantivo o infinitivo (apesar da chuva, apesar de chover); «apesar de que» + indicativo es más coloquial.",
          en: "embora, mesmo que, ainda que (although, even if) and a não ser que (unless) always take the subjunctive. apesar de (despite) takes a noun or infinitive: apesar da chuva, apesar de chover.",
        },
        table: [["embora", "Embora ele saiba, não diz."], ["mesmo que", "Mesmo que chova, eu vou."], ["apesar de", "Apesar do frio, saímos."], ["apesar de + inf.", "Apesar de estar cansada, foi."]],
      },
      question: {
        prompt: { es: "Completa: «Mesmo que ele ___, não vou acreditar.» (pedir desculpas)", en: "Complete: 'Mesmo que ele ___, não vou acreditar.' (apologise)" },
        options: ["peça desculpas", "pede desculpas", "pedir desculpas", "pedia desculpas"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-concessivas"], tags: ["grammar", "subjunctive", "connectors"],
    },
    {
      id: "pat-conectores-argumentativos", type: "pattern", target: "além disso · no entanto · portanto · ou seja",
      gloss: { es: "conectores para argumentar", en: "connectors for arguing" },
      pattern: {
        rule: {
          es: "Añadir: além disso, aliás. Oponer: mas, no entanto, contudo, porém. Concluir: portanto, por isso, logo. Explicar: ou seja, isto é. Ojo: «entretanto» suele significar «sin embargo», no «mientras tanto».",
          en: "Adding: além disso, aliás. Contrasting: mas, no entanto, contudo, porém. Concluding: portanto, por isso, logo. Rephrasing: ou seja, isto é. Note: entretanto usually means 'however'.",
        },
        table: [["adição", "além disso, aliás"], ["oposição", "no entanto, contudo, porém"], ["conclusão", "portanto, por isso"], ["explicação", "ou seja, isto é"]],
      },
      question: {
        prompt: { es: "¿Qué conector concluye? «Choveu muito; ___, o jogo foi adiado.»", en: "Which word concludes? 'Choveu muito; ___, o jogo foi adiado.'" },
        options: ["portanto", "no entanto", "embora", "além disso"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-conectores-argumentativos"], tags: ["grammar", "connectors"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-debate", type: "listening", target: "Muita gente defende a semana de quatro dias. No entanto, os críticos afirmam que, embora a ideia seja boa, ela não funcionaria em todos os setores, como a saúde.",
      gloss: { es: "Mucha gente defiende la semana de cuatro días. Sin embargo, los críticos afirman que, aunque la idea sea buena, no funcionaría en todos los sectores, como la salud.", en: "Many people support the four-day week. However, critics say that, although the idea is good, it wouldn't work in every sector, such as healthcare." },
      question: {
        prompt: { es: "¿Qué dicen los críticos?", en: "What do the critics say?" },
        options: [
          { es: "Que no funcionaría en todos los sectores", en: "It wouldn't work in every sector" },
          { es: "Que es una idea mala", en: "It's a bad idea" },
          { es: "Que solo funciona en salud", en: "It only works in healthcare" },
          { es: "Que ya existe", en: "It already exists" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "debate"],
    },
    {
      id: "dlg-debate-carne", type: "dialogue", target: "Concordo em gênero, número e grau.",
      gloss: { es: "Estoy totalmente de acuerdo.", en: "I couldn't agree more." },
      turns: [
        { who: "A", target: "Acho que as escolas deviam servir menos carne.", gloss: { es: "Creo que las escuelas deberían servir menos carne.", en: "I think schools should serve less meat." } },
        { who: "B", target: "Concordo em gênero, número e grau. Além disso, é mais barato.", gloss: { es: "Estoy totalmente de acuerdo. Además, es más barato.", en: "I couldn't agree more. Besides, it's cheaper." } },
        { who: "A", target: "Pois é. Mas as crianças precisam de proteína, ou seja, tem que ter alternativa.", gloss: { es: "Así es. Pero los niños necesitan proteína, o sea, tiene que haber alternativa.", en: "Exactly. But children need protein, so there has to be an alternative." } },
      ],
      question: {
        prompt: { es: "¿Qué opina B?", en: "What does B think?" },
        options: [
          { es: "Está totalmente de acuerdo con A", en: "Fully agrees with A" },
          { es: "No está de acuerdo", en: "Disagrees" },
          { es: "Está de acuerdo solo en parte", en: "Partly agrees" },
        ],
        answer: 0,
      },
      note: { es: "«concordo em gênero, número e grau» = estoy completamente de acuerdo (expresión fija).", en: "'concordo em gênero, número e grau' = I agree completely (a set phrase)." },
      exercises: ["question"], tags: ["dialogue", "debate", "idiom"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-embora", type: "bridge", onlyFor: "es", target: "Vou embora.",
      gloss: { es: "Me voy.", en: "I'm leaving." },
      question: {
        prompt: { es: "Tu amigo dice «Já vou embora». Quiere decir que…", en: "Your friend says 'Já vou embora'. He means…" },
        options: [{ es: "ya se va", en: "he's leaving" }, { es: "ya va a llegar", en: "he's arriving soon" }, { es: "aunque se va", en: "although he's going" }],
        answer: 0,
      },
      note: { es: "«ir embora» = irse; «embora» solo, con subjuntivo, = aunque." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "connectors"],
    },
    {
      id: "br-en-compromisso", type: "bridge", onlyFor: "en", target: "Tenho um compromisso às três.",
      gloss: { es: "Tengo un compromiso a las tres.", en: "I have an appointment at three." },
      question: {
        prompt: { es: "«Tenho um compromisso às três» significa…", en: "'Tenho um compromisso às três' means…" },
        options: [{ es: "Tengo una cita a las tres.", en: "I have an appointment at three." }, { es: "Llegué a un acuerdo a las tres.", en: "I reached a compromise at three." }, { es: "Me comprometí a las tres.", en: "I got engaged at three." }],
        answer: 0,
      },
      note: { en: "False friend: compromisso = appointment or commitment; a compromise is 'um meio-termo' or 'um acordo'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "debate"],
    },
  ]),
};
