import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u27",
  lang: "pt",
  index: 27,
  cefr: "C1",
  title: { target: "A norma culta", es: "La norma culta", en: "Standard written Portuguese" },
  canDo: [
    { es: "Puedo pasar del registro hablado al escrito formal y colocar bien los pronombres (próclise, ênclise, mesóclise).", en: "I can move from spoken to formal written register and place pronouns correctly (proclisis, enclisis, mesoclisis)." },
    { es: "Reconozco las formas de la norma que casi no se usan al hablar (dir-se-ia, fazê-lo, vós).", en: "I can recognise standard forms that are rare in speech (dir-se-ia, fazê-lo, vós)." },
  ],
  icon: "🖋️",
  items: build("pt", 27, "C1", [
    { id: "proclise", type: "word", pos: "noun", target: "a próclise", gender: "f", plural: "as próclises", gloss: { es: "la próclisis (pronombre antes del verbo)", en: "the proclisis (pronoun before the verb)" }, distractors: ["a ênclise", "o próclise", "a prólise"], tags: ["grammar-terms", "formal"] },
    { id: "enclise", type: "word", pos: "noun", target: "a ênclise", gender: "f", plural: "as ênclises", gloss: { es: "la enclisis (pronombre después del verbo)", en: "the enclisis (pronoun after the verb)" }, distractors: ["a próclise", "o ênclise", "a eclipse"], tags: ["grammar-terms", "formal"] },
    { id: "mesoclise", type: "word", pos: "noun", target: "a mesóclise", gender: "f", plural: "as mesóclises", gloss: { es: "la mesoclisis (pronombre dentro del verbo)", en: "the mesoclisis (pronoun inside the verb)" }, distractors: ["a mesoclísia", "a mesóclese", "a metástase"], note: { es: "Solo en futuro y condicional: far-se-á, dir-lhe-ia. En el habla casi no existe.", en: "Only in the future and conditional: far-se-á, dir-lhe-ia. Practically absent from speech." }, tags: ["grammar-terms", "formal"] },
    { id: "fala-se", type: "word", pos: "other", target: "dir-se-ia", gloss: { es: "se diría", en: "one would say" }, distractors: ["se diria", "diria-se", "dir-lhe-ia"], note: { es: "Forma culta escrita; en el habla: «a gente diria».", en: "Formal written form; in speech: 'a gente diria'." }, grammar: ["pt-g-mesoclise"], tags: ["formal"] },
    { id: "faze-lo", type: "word", pos: "other", target: "fazê-lo", gloss: { es: "hacerlo", en: "to do it" }, distractors: ["fazer-lo", "fazer-o", "faze-lo"], note: { es: "Tras -r, el pronombre o pasa a lo y la r cae: fazer + o = fazê-lo, vender + a = vendê-la.", en: "After -r, o becomes lo and the r drops: fazer + o = fazê-lo, vender + a = vendê-la." }, grammar: ["pt-g-colocacao-pronominal"], tags: ["formal", "pronouns"] },
    { id: "vos", type: "word", pos: "pron", target: "vós", gloss: { es: "2.ª persona del plural de España, no «ustedes» (arcaica; textos religiosos o solemnes)", en: "ye / you (plural, archaic)" }, distractors: ["vos", "vocês", "vóis"], note: { es: "Solo en la Biblia, oraciones, himnos y discursos muy solemnes.", en: "Only in the Bible, prayers, anthems and very solemn speeches." }, tags: ["formal", "pronouns"] },
    { id: "outrossim", type: "word", pos: "adv", target: "outrossim", gloss: { es: "asimismo (muy formal)", en: "likewise / furthermore (very formal)" }, distractors: ["outro sim", "outrosim", "assim mesmo"], tags: ["formal", "connectors"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "nao-me-disse", type: "sentence", target: "Ele não me disse nada sobre a reunião.",
      gloss: { es: "No me dijo nada de la reunión.", en: "He didn't tell me anything about the meeting." },
      errors: [{ text: "Ele não disse-me nada sobre a reunião.", feedback: { es: "Las palabras negativas atraen el pronombre delante del verbo: não me disse.", en: "Negatives pull the pronoun before the verb: não me disse." }, ruleId: "pt-g-colocacao-pronominal" }],
      distractors: ["disse-me", "lhe", "algo"],
      tags: ["formal", "pronouns"],
    },
    {
      id: "entregaram-me", type: "sentence", target: "Entregaram-me os documentos ontem.", register: "formal",
      gloss: { es: "Me entregaron los documentos ayer.", en: "They handed me the documents yesterday. (formal)" },
      accept: [{ text: "Me entregaram os documentos ontem.", verdict: "almost", feedback: { es: "Normal en el habla brasileña; la norma escrita no empieza la frase con pronombre átono: entregaram-me.", en: "Normal in Brazilian speech; standard writing never starts a sentence with an unstressed pronoun: entregaram-me." } }],
      distractors: ["Me", "lhe", "entregou"],
      grammar: ["pt-g-colocacao-pronominal"], tags: ["formal", "pronouns"],
    },
    {
      id: "far-se-a", type: "sentence", target: "A reunião realizar-se-á no auditório principal.", register: "formal",
      gloss: { es: "La reunión se realizará en el auditorio principal.", en: "The meeting will be held in the main auditorium. (formal)" },
      accept: [{ text: "A reunião se realizará no auditório principal." }, { text: "A reunião será realizada no auditório principal." }],
      errors: [{ text: "A reunião realizará-se no auditório principal.", feedback: { es: "En futuro, el pronombre no puede ir al final: realizar-se-á (o se realizará).", en: "In the future tense the pronoun can't go at the end: realizar-se-á (or se realizará)." }, ruleId: "pt-g-mesoclise" }],
      distractors: ["realizará-se", "auditorio", "na"],
      tags: ["formal", "pronouns"],
    },
    {
      id: "quem-te-contou", type: "sentence", target: "Quem te contou isso?", register: "informal",
      gloss: { es: "¿Quién te contó eso?", en: "Who told you that? (informal)" },
      distractors: ["contou-te", "lhe", "isto de"],
      note: { es: "Los pronombres interrogativos (quem, que) también atraen el pronombre delante.", en: "Question words (quem, que) also pull the pronoun before the verb." },
      tags: ["pronouns"],
    },
    {
      id: "vou-ve-lo", type: "sentence", target: "Pretendo visitá-lo na próxima semana.", register: "formal",
      gloss: { es: "Pienso visitarlo la semana que viene.", en: "I intend to visit him next week. (formal)" },
      accept: [{ text: "Pretendo visitá-lo semana que vem." }, { text: "Pretendo o visitar na próxima semana." }],
      errors: [{ text: "Pretendo visitar-lo na próxima semana.", feedback: { es: "visitar + o = visitá-lo (cae la r, el pronombre pasa a lo).", en: "visitar + o = visitá-lo (the r drops, o becomes lo)." }, ruleId: "pt-g-colocacao-pronominal" }],
      distractors: ["visitar-lo", "visitar-lhe", "vê-lo"],
      tags: ["formal", "pronouns"],
    },
    { id: "vossa-excelencia", type: "phrase", pos: "phrase", target: "Vossa Excelência", spoken: "Vossa Excelência", register: "formal", gloss: { es: "Su Excelencia (tratamiento oficial)", en: "Your Excellency" }, distractors: ["Sua Excelência de", "Vosso Excelência", "Vossa Excelenza"], note: { es: "Se dirige a la persona pero el verbo va en 3.ª persona: Vossa Excelência sabe…", en: "It addresses the person directly, but the verb is 3rd person: Vossa Excelência sabe…" }, tags: ["formal", "pronouns"] },
    { id: "mim-eu", type: "sentence", target: "Isso é para eu fazer amanhã.", gloss: { es: "Eso es para que yo lo haga mañana.", en: "That's for me to do tomorrow." }, errors: [{ text: "Isso é para mim fazer amanhã.", feedback: { es: "Si el pronombre es sujeto de un infinitivo, va «eu»: para eu fazer (aunque «pra mim fazer» se oye mucho).", en: "When the pronoun is the subject of an infinitive, use 'eu': para eu fazer (though 'pra mim fazer' is common in speech)." }, ruleId: "pt-g-infinitivo-pessoal" }], distractors: ["mim", "fazê-lo", "a"], tags: ["formal", "pronouns"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-colocacao", type: "pattern", target: "Não me disse. · Disse-me. · Me disse (fala).",
      gloss: { es: "dónde va el pronombre átono", en: "where the unstressed pronoun goes" },
      pattern: {
        rule: {
          es: "Norma: nunca se empieza una frase con pronombre átono (disse-me). Las palabras «atractoras» lo ponen delante: negación (não me disse), pronombres relativos e interrogativos (que me disse), ciertos adverbios (já me disse) y conjunciones subordinantes. En el habla brasileña va casi siempre delante.",
          en: "Standard: never start a sentence with an unstressed pronoun (disse-me). 'Attractor' words pull it in front: negatives (não me disse), relative and question words (que me disse), some adverbs (já me disse) and subordinating conjunctions. Brazilian speech nearly always puts it first.",
        },
        table: [["início", "Disse-me a verdade."], ["negação", "Não me disse nada."], ["relativo", "O livro que me deu."], ["advérbio", "Já te falei."], ["fala BR", "Me disse a verdade."]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta en la norma culta?", en: "Which is correct in formal standard Portuguese?" },
        options: ["Ninguém me avisou.", "Ninguém avisou-me.", "Me ninguém avisou.", "Ninguém avisou me."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-colocacao-pronominal"], tags: ["grammar", "pronouns", "formal"],
    },
    {
      id: "pat-mesoclise", type: "pattern", target: "far-se-á · dir-lhe-ia · encontrar-nos-emos",
      gloss: { es: "la mesoclisis", en: "mesoclisis" },
      pattern: {
        rule: {
          es: "En futuro y condicional, si el pronombre va detrás del verbo, se mete entre el infinitivo y la terminación: dar + lhe + ia = dar-lhe-ia. Si hay una palabra atractora, va delante: não lhe daria. Hoy aparece casi solo en textos muy formales o en tono humorístico.",
          en: "In the future and conditional, a pronoun that would follow the verb goes between the infinitive and the ending: dar + lhe + ia = dar-lhe-ia. With an attractor word it goes first: não lhe daria. Today it's mostly in very formal texts, or used for comic effect.",
        },
        table: [["futuro", "realizar-se-á"], ["condicional", "dir-lhe-ia"], ["com atrator", "Não se realizará."], ["fala", "Vai ser realizada."]],
      },
      question: {
        prompt: { es: "Forma culta de «se encontrarán»:", en: "Formal form of 'they will meet each other':" },
        options: ["encontrar-se-ão", "encontrarão-se", "se-encontrarão", "encontrar-ão-se"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-mesoclise"], tags: ["grammar", "pronouns", "formal"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-discurso", type: "listening", target: "Senhoras e senhores, a cerimônia de formatura realizar-se-á no próximo sábado. Solicitamos que os formandos compareçam com uma hora de antecedência.",
      gloss: { es: "Señoras y señores, la ceremonia de graduación se realizará el próximo sábado. Solicitamos que los graduandos se presenten con una hora de antelación.", en: "Ladies and gentlemen, the graduation ceremony will take place next Saturday. Graduates are asked to arrive an hour early." },
      question: {
        prompt: { es: "¿Qué deben hacer los graduandos?", en: "What must the graduates do?" },
        options: [
          { es: "Llegar una hora antes", en: "Arrive an hour early" },
          { es: "Llegar el viernes", en: "Arrive on Friday" },
          { es: "Traer un documento", en: "Bring ID" },
          { es: "Pagar la ceremonia", en: "Pay for the ceremony" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "formal"],
    },
    {
      id: "dlg-mesoclise", type: "dialogue", target: "Ninguém fala assim!",
      gloss: { es: "¡Nadie habla así!", en: "Nobody talks like that!" },
      turns: [
        { who: "A", target: "Olha esse e-mail do diretor: «Informar-lhes-ei a decisão oportunamente.»", gloss: { es: "Mira este correo del director: «Les informaré la decisión oportunamente.»", en: "Look at this email from the director: 'I shall inform you of the decision in due course.'" } },
        { who: "B", target: "Nossa! Ninguém fala assim!", gloss: { es: "¡Uy! ¡Nadie habla así!", en: "Wow! Nobody talks like that!" } },
        { who: "A", target: "Falar, não fala. Mas por escrito ainda tem gente que usa.", gloss: { es: "Hablar, nadie habla así. Pero por escrito todavía hay quien lo usa.", en: "Nobody says it. But some people still write it." } },
      ],
      question: {
        prompt: { es: "¿Qué piensan de la mesoclisis?", en: "What do they think of the mesoclisis?" },
        options: [
          { es: "Que solo aparece en textos muy formales", en: "It only appears in very formal writing" },
          { es: "Que es la forma normal de hablar", en: "It's the normal way to speak" },
          { es: "Que es un error", en: "It's a mistake" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "formal"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pronome-inicio", type: "bridge", onlyFor: "es", target: "Disseram-me que sim.",
      gloss: { es: "Me dijeron que sí.", en: "They told me yes." },
      accept: [{ text: "Me disseram que sim.", verdict: "almost", feedback: { es: "Es lo normal al hablar en Brasil; en la norma escrita la frase no empieza con pronombre átono: disseram-me." } }],
      distractors: ["Me disseram-me que sim.", "Dijeram-me que sim.", "Disseram-lhe que sim de."],
      note: { es: "A diferencia del español, la norma portuguesa no empieza la frase con pronombre átono: Disseram-me (Portugal y textos formales) / Me disseram (habla brasileña)." },
      exercises: ["guess", "recall"], tags: ["bridge", "pronouns"],
    },
    {
      id: "br-en-lo", type: "bridge", onlyFor: "en", target: "Quero comprá-lo.",
      gloss: { es: "Quiero comprarlo.", en: "I want to buy it." },
      distractors: ["Quero comprar-o.", "Quero comprar ele lo.", "Quero o comprar-lo."],
      note: { en: "'it / him' after an infinitive: drop the r, add an accent if needed, and o becomes lo: comprá-lo, vendê-lo, abri-lo." },
      exercises: ["guess", "recall"], tags: ["bridge", "pronouns"],
    },
  ]),
};
