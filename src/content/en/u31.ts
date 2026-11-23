import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u31",
  lang: "en",
  index: 31,
  cefr: "C2",
  title: { target: "Reading between the lines", es: "Leer entre líneas", en: "Reading between the lines" },
  canDo: [
    { es: "Entiendo la ironía, el humor seco y la atenuación (understatement) típicos del inglés.", en: "I can understand irony, dry humor and the understatement typical of English." },
    { es: "Puedo criticar o discrepar con tacto, diciendo menos de lo que pienso.", en: "I can criticize or disagree tactfully, saying less than I mean." },
    { es: "Sé usar la doble negación atenuada (not unlike, hardly) y el «do» enfático (I do appreciate…).", en: "I can use softened double negatives (not unlike, hardly) and emphatic 'do' (I do appreciate…)." },
  ],
  icon: "😏",
  items: build("en", 31, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "understatement", type: "word", pos: "noun", target: "understatement", plural: "understatements",
      gloss: { es: "atenuación (decir algo con menos fuerza de la que merece)", en: "understatement" },
      distractors: ["overstatement", "understanding", "underestimate"],
      note: { es: "«That's an understatement» = «y eso es quedarse corto»." },
      grammar: ["en-g-litotes"],
      tags: ["humor", "irony"],
    },
    {
      id: "deadpan", type: "word", pos: "adj", target: "deadpan",
      gloss: { es: "impasible, inexpresivo/a (humor dicho con cara seria)", en: "deadpan" },
      distractors: ["deadline", "deadbeat", "dead-end"],
      tags: ["humor"],
    },
    {
      id: "wry", type: "word", pos: "adj", target: "wry",
      gloss: { es: "irónico/a, socarrón/a (una sonrisa, un comentario)", en: "wry" },
      distractors: ["wary", "wiry", "awry"],
      note: { es: "Se usa sobre todo en «a wry smile» y «a wry sense of humor»." },
      tags: ["humor", "irony"],
    },
    {
      id: "facetious", type: "word", pos: "adj", target: "facetious",
      gloss: { es: "en broma fuera de lugar, poco serio/a", en: "facetious" },
      distractors: ["factious", "fictitious", "facile"],
      note: { es: "Tiene un matiz negativo: «Don't be facetious» = «no te hagas el gracioso»." },
      tags: ["humor"],
    },
    {
      id: "tactful", type: "word", pos: "adj", target: "tactful",
      gloss: { es: "con tacto, delicado/a al hablar", en: "tactful" },
      distractors: ["tactical", "tactile", "tasteful"],
      tags: ["tact"],
    },
    {
      id: "self-deprecating", type: "word", pos: "adj", target: "self-deprecating",
      gloss: { es: "que se ríe de sí mismo/a, autocrítico/a con humor", en: "self-deprecating" },
      distractors: ["self-defeating", "self-denying", "self-destructing"],
      tags: ["humor"],
    },
    {
      id: "banter", type: "word", target: "banter",
      gloss: { es: "bromas y pullas amistosas (intercambio ingenioso)", en: "banter" },
      distractors: ["banner", "barter", "batter"],
      note: { es: "Es incontable: «some friendly banter», nunca «a banter»." },
      tags: ["humor", "spoken"],
    },
    {
      id: "dry-sense-of-humor", type: "phrase", pos: "phrase", target: "a dry sense of humor",
      gloss: { es: "un humor seco, sutil", en: "a dry sense of humor" },
      accept: [{ text: "a dry sense of humour" }, { text: "dry sense of humor" }],
      distractors: ["a dried sense of humor", "a dry humor sense", "a dry sense of humorous"],
      note: { es: "En inglés británico se escribe «humour»." },
      tags: ["humor"],
    },
    {
      id: "in-jest", type: "phrase", pos: "phrase", target: "in jest",
      gloss: { es: "en broma, sin hablar en serio", en: "in jest" },
      distractors: ["in a jest", "on jest", "in joke"],
      tags: ["humor", "formal"],
    },
    {
      id: "to-put-it-mildly", type: "phrase", pos: "phrase", target: "to put it mildly",
      gloss: { es: "por decirlo suavemente", en: "to put it mildly" },
      accept: [{ text: "to say the least" }],
      distractors: ["to put it mild", "to say it soft", "to tell it mildly"],
      grammar: ["en-g-litotes"],
      tags: ["tact", "chunk"],
    },
    {
      id: "not-entirely-convinced", type: "phrase", pos: "phrase", target: "I'm not entirely convinced.",
      gloss: { es: "No estoy del todo convencido/a.", en: "I'm not entirely convinced." },
      accept: [{ text: "I am not entirely convinced." }, { text: "I'm not completely convinced." }],
      distractors: ["I'm not entirely convincing.", "I don't entirely convince.", "I'm not entire convinced."],
      errors: [{ text: "I'm not entirely convincing.", feedback: { es: "«convinced» = convencido/a (lo que sientes); «convincing» = convincente (lo que es algo)." } }],
      grammar: ["en-g-litotes"],
      tags: ["tact", "opinions"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "not-unimpressive", type: "sentence", target: "The results were not unimpressive.",
      gloss: { es: "Los resultados no estuvieron nada mal (fueron bastante buenos).", en: "The results were not unimpressive." },
      accept: [{ text: "The results weren't unimpressive." }],
      distractors: ["unimpressed", "didn't", "no"],
      grammar: ["en-g-litotes"],
      annot: { "not unimpressive": { es: "doble negación: elogio contenido, «bastante impresionantes»", en: "double negative: restrained praise, 'fairly impressive'" } },
      tags: ["irony", "litotes"],
    },
    {
      id: "hardly-reliable", type: "sentence", target: "He's hardly the most reliable person I know.",
      gloss: { es: "No es precisamente la persona más confiable que conozco.", en: "He's hardly the most reliable person I know." },
      accept: [{ text: "He is hardly the most reliable person I know." }],
      errors: [{ text: "He's hard the most reliable person I know.", feedback: { es: "«hard» = duro, difícil; «hardly» = apenas, casi no (aquí, con ironía: para nada)." }, ruleId: "en-g-litotes" }],
      distractors: ["hard", "less", "known"],
      grammar: ["en-g-litotes"],
      annot: { hardly: { es: "apenas → aquí, con ironía: para nada", en: "barely → here, ironically: not at all" } },
      tags: ["irony", "litotes"],
    },
    {
      id: "not-the-worst-idea", type: "sentence", target: "It wasn't the worst idea he's ever had.",
      gloss: { es: "No fue la peor idea que se le ha ocurrido.", en: "It wasn't the worst idea he's ever had." },
      accept: [{ text: "It was not the worst idea he has ever had." }],
      distractors: ["worse", "never", "having"],
      grammar: ["en-g-litotes"],
      tags: ["irony", "litotes"],
    },
    {
      id: "that-went-well", type: "sentence", target: "Well, that went well.",
      gloss: { es: "Bueno, eso salió de maravilla (con ironía: salió fatal).", en: "Well, that went well. (ironic)" },
      distractors: ["good", "gone", "goes"],
      note: { es: "La ironía depende del tono y del contexto: dicho después de un desastre, significa lo contrario." },
      tags: ["irony", "spoken"],
    },
    {
      id: "i-do-appreciate", type: "sentence", target: "I do appreciate your help, but I can manage on my own.",
      gloss: { es: "De verdad agradezco tu ayuda, pero puedo arreglármelas solo/a.", en: "I do appreciate your help, but I can manage on my own." },
      accept: [{ text: "I really appreciate your help, but I can manage on my own." }],
      errors: [{ text: "I do appreciated your help, but I can manage on my own.", feedback: { es: "Tras el «do» enfático va el verbo base: I do appreciate, she did warn." }, ruleId: "en-g-emphatic-do" }],
      distractors: ["did", "appreciated", "myself"],
      grammar: ["en-g-emphatic-do"],
      annot: { "do appreciate": { es: "«do» enfático: suaviza el «pero» que viene", en: "emphatic 'do': softens the 'but' that follows" } },
      tags: ["tact", "emphatic-do"],
    },
    {
      id: "she-did-warn-us", type: "sentence", target: "In all fairness, she did warn us.",
      gloss: { es: "Para ser justos, ella sí nos lo advirtió.", en: "In all fairness, she did warn us." },
      accept: [{ text: "She did warn us, in all fairness." }],
      errors: [{ text: "In all fairness, she did warned us.", feedback: { es: "«did» ya marca el pasado: did warn, no «did warned»." }, ruleId: "en-g-emphatic-do" }],
      distractors: ["warned", "does", "fairly"],
      grammar: ["en-g-emphatic-do"],
      tags: ["emphatic-do", "spoken"],
    },
    {
      id: "could-have-done-without", type: "sentence", target: "Frankly, I could have done without the lecture.",
      gloss: { es: "Francamente, me podría haber ahorrado el sermón.", en: "Frankly, I could have done without the lecture." },
      accept: [{ text: "I could have done without the lecture, frankly." }],
      distractors: ["do", "with", "frank"],
      note: { es: "«could have done without something» = no hacía ninguna falta (con fastidio contenido)." },
      tags: ["irony", "understatement"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-litotes", type: "pattern", target: "not bad · not unlike · hardly · not the best…",
      gloss: { es: "atenuación y doble negación", en: "understatement and double negatives" },
      pattern: {
        rule: {
          es: "El inglés, sobre todo el británico, expresa elogios y críticas negando lo contrario: «not bad» (bastante bueno), «not unlike» (parecido a), «not the best» (malo), «hardly ideal» (nada ideal). El efecto es más elegante, irónico o diplomático que decirlo directamente.",
          en: "English, especially British English, often praises or criticizes by denying the opposite: 'not bad' (quite good), 'not unlike' (similar to), 'not the best' (bad), 'hardly ideal' (far from ideal). It sounds more elegant, ironic or diplomatic than saying it directly.",
        },
        table: [["atenuado", "significa"], ["It's not bad.", "It's good."], ["It wasn't the best meal.", "It was a bad meal."], ["That's hardly ideal.", "That's a problem."], ["not unlike his father", "quite like his father"]],
      },
      question: {
        prompt: { es: "¿Qué quiere decir realmente «The hotel wasn't the best I've stayed in»?", en: "What does 'The hotel wasn't the best I've stayed in' really mean?" },
        options: [
          { es: "Que el hotel era malo", en: "The hotel was bad" },
          { es: "Que el hotel era muy bueno", en: "The hotel was very good" },
          { es: "Que nunca había estado en un hotel", en: "They had never stayed in a hotel" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-litotes"], tags: ["grammar", "litotes", "irony"],
    },
    {
      id: "pat-emphatic-do", type: "pattern", target: "I do appreciate… · She did warn us. · Do sit down.",
      gloss: { es: "el «do» enfático", en: "emphatic 'do'" },
      pattern: {
        rule: {
          es: "En oraciones afirmativas se puede poner do / does / did delante del verbo base para insistir, contradecir o suavizar un «pero». Al hablar, el auxiliar lleva el acento: «I DO like it». En imperativo suena cortés y algo formal: «Do help yourself».",
          en: "In affirmative sentences, do / does / did can go before the base verb to insist, contradict or soften a 'but'. In speech the auxiliary is stressed: 'I DO like it'. In the imperative it sounds polite and slightly formal: 'Do help yourself'.",
        },
        table: [["neutro", "enfático"], ["I like it.", "I do like it."], ["She called.", "She did call."], ["He works hard.", "He does work hard."], ["Sit down.", "Do sit down."]],
      },
      question: {
        prompt: { es: "Completa con énfasis: «I ___ like the idea, but it's far too expensive.»", en: "Complete with emphasis: 'I ___ like the idea, but it's far too expensive.'" },
        options: ["do", "am", "does", "did to"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-emphatic-do"], tags: ["grammar", "emphatic-do"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-presentation", type: "dialogue", target: "It wasn't exactly a triumph.",
      gloss: { es: "No fue precisamente un triunfo.", en: "It wasn't exactly a triumph." },
      turns: [
        { who: "A", target: "So, how did the presentation go?", gloss: { es: "¿Y? ¿Cómo te fue con la presentación?", en: "So, how did the presentation go?" } },
        { who: "B", target: "Well, it wasn't exactly a triumph. The projector died halfway through.", gloss: { es: "Bueno, no fue precisamente un triunfo. El proyector se apagó a la mitad.", en: "Well, it wasn't exactly a triumph. The projector died halfway through." } },
        { who: "A", target: "Ouch. Still, I'm sure it wasn't the disaster you're making it out to be.", gloss: { es: "Uf. Aun así, seguro que no fue el desastre que dices.", en: "Ouch. Still, I'm sure it wasn't the disaster you're making it out to be." } },
        { who: "B", target: "Maybe not. The boss did call it 'interesting', which, coming from her, is not unlike a standing ovation.", gloss: { es: "Quizás no. La jefa sí dijo que fue «interesante», lo cual, viniendo de ella, es casi una ovación de pie.", en: "Maybe not. The boss did call it 'interesting', which, coming from her, is not unlike a standing ovation." } },
      ],
      question: {
        prompt: { es: "¿Qué quiere decir B sobre el comentario de la jefa?", en: "What does B mean about the boss's comment?" },
        options: [
          { es: "Que, para ella, «interesante» es un gran elogio", en: "That, for her, 'interesting' is high praise" },
          { es: "Que la jefa se aburrió", en: "That the boss was bored" },
          { es: "Que la jefa aplaudió de pie", en: "That the boss literally stood up and clapped" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "irony", "understatement"],
    },
    {
      id: "lis-understatement", type: "listening", target: "British and American humor are often said to be very different, but both rely heavily on understatement. Calling a hurricane a bit breezy, or a burnt dinner not my finest hour, is a way of laughing at a disaster without ever saying so directly.",
      gloss: { es: "Se suele decir que el humor británico y el estadounidense son muy distintos, pero los dos se apoyan mucho en la atenuación. Llamar a un huracán «un poco de viento» o a una cena quemada «no mi mejor momento» es una manera de reírse de un desastre sin decirlo nunca directamente.", en: "British and American humor are often said to be very different, but both rely heavily on understatement. Calling a hurricane a bit breezy, or a burnt dinner not my finest hour, is a way of laughing at a disaster without ever saying so directly." },
      question: {
        prompt: { es: "Según el texto, ¿qué tienen en común los dos tipos de humor?", en: "According to the text, what do both kinds of humor share?" },
        options: [
          { es: "Usan mucho la atenuación", en: "They rely on understatement" },
          { es: "Se burlan del clima", en: "They make fun of the weather" },
          { es: "Evitan hablar de desastres", en: "They avoid talking about disasters" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "humor", "understatement"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-sympathetic", type: "bridge", onlyFor: "es", target: "sympathetic",
      gloss: { es: "comprensivo/a, que se solidariza", en: "sympathetic" },
      question: {
        prompt: { es: "Para decir que alguien es simpático (agradable), dices…", en: "To say someone is pleasant and easy to like, you say…" },
        options: ["He's really nice.", "He's really sympathetic.", "He's really sympathized."],
        answer: 0,
      },
      note: { es: "sympathetic = comprensivo/a (entiende tu problema); «simpático/a» es «nice», «friendly» o «likeable»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-terrific", type: "bridge", onlyFor: "es", target: "terrific",
      gloss: { es: "genial, estupendo/a", en: "terrific" },
      question: {
        prompt: { es: "«The concert was terrific» significa que el concierto fue…", en: "'The concert was terrific' means the concert was…" },
        options: [
          { es: "buenísimo", en: "great" },
          { es: "terrible", en: "awful" },
          { es: "aterrador", en: "frightening" },
        ],
        answer: 0,
      },
      note: { es: "terrific = estupendo/a; «terrible» es «terrible» o «awful», y «aterrador» es «terrifying»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "humor"],
    },
  ]),
};
