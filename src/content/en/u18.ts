import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u18",
  lang: "en",
  index: 18,
  cefr: "B1",
  title: { target: "Society and the environment", es: "Sociedad y medio ambiente", en: "Society and the environment" },
  canDo: [
    { es: "Puedo hablar de problemas ambientales y sociales, y de posibles soluciones.", en: "I can talk about environmental and social problems and possible solutions." },
    { es: "Puedo entender textos informativos sencillos y noticias breves.", en: "I can understand simple informative texts and short news items." },
    { es: "Sé usar la voz pasiva y las oraciones de relativo con who, which, that y where.", en: "I can use the passive voice and relative clauses with who, which, that and where." },
  ],
  icon: "🌱",
  items: build("en", 18, "B1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "pollution", type: "word", target: "pollution",
      gloss: { es: "contaminación", en: "pollution" },
      distractors: ["contamination", "population", "solution"],
      note: { es: "La contaminación del aire o el agua es «pollution»; «contamination» se usa más para comida o radiación." },
      tags: ["environment"],
    },
    {
      id: "climate-change", type: "word", target: "climate change",
      gloss: { es: "cambio climático", en: "climate change" },
      distractors: ["climatic change", "weather change", "change climate"],
      tags: ["environment"],
    },
    {
      id: "recycle", type: "word", pos: "verb", target: "recycle",
      gloss: { es: "reciclar", en: "to recycle" },
      distractors: ["recicle", "reuse", "bicycle"],
      tags: ["environment"],
    },
    {
      id: "waste", type: "word", target: "waste",
      gloss: { es: "residuos, desperdicio; desperdiciar", en: "waste" },
      accept: [{ text: "trash" }, { text: "garbage" }],
      distractors: ["waist", "wasted", "west"],
      note: { es: "«waste» y «waist» (cintura) suenan igual." },
      tags: ["environment"],
    },
    {
      id: "plastic-bags", type: "word", target: "plastic bags",
      gloss: { es: "bolsas de plástico", en: "plastic bags" },
      distractors: ["plastics bags", "bags of plastic's", "plastic backs"],
      note: { es: "El adjetivo (o sustantivo que describe) no va en plural: plastic bags." },
      tags: ["environment"],
    },
    {
      id: "public-transportation", type: "word", target: "public transportation",
      gloss: { es: "transporte público", en: "public transportation" },
      accept: [{ text: "public transport" }],
      distractors: ["public transports", "public transit's", "common transport"],
      tags: ["environment", "city", "transport"],
    },
    {
      id: "homeless", type: "word", pos: "adj", target: "homeless",
      gloss: { es: "en situación de calle, sin techo", en: "homeless" },
      distractors: ["houseless", "homesick", "helpless"],
      tags: ["society"],
    },
    {
      id: "volunteer", type: "word", target: "volunteer",
      gloss: { es: "voluntario/a; hacer voluntariado", en: "volunteer" },
      distractors: ["voluntary", "volunteering's", "vulnerable"],
      tags: ["society"],
    },
    {
      id: "government", type: "word", target: "government",
      gloss: { es: "gobierno", en: "government" },
      distractors: ["governor", "goverment", "governance"],
      note: { es: "Ojo con la ortografía: govern + ment." },
      tags: ["society", "politics"],
    },
    {
      id: "ban", type: "word", pos: "verb", target: "ban",
      gloss: { es: "prohibir (por ley)", en: "to ban" },
      forms: { past: "banned", pp: "banned" },
      distractors: ["bang", "band", "prohibit's"],
      tags: ["society", "environment"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "paper-is-recycled", type: "sentence", target: "Paper is recycled in most cities.",
      gloss: { es: "En la mayoría de las ciudades se recicla el papel.", en: "Paper is recycled in most cities." },
      errors: [{ text: "Paper recycles in most cities.", feedback: { es: "El papel no recicla: «es reciclado». Pasiva: is + participio." }, ruleId: "en-g-passive" }],
      distractors: ["recycles", "are", "the"],
      grammar: ["en-g-passive"],
      annot: { "is recycled": { es: "pasiva: be + participio (se recicla)", en: "passive: be + past participle" } },
      tags: ["environment", "passive"],
    },
    {
      id: "plastic-bags-were-banned", type: "sentence", target: "Plastic bags were banned in 2019.", spoken: "Plastic bags were banned in twenty nineteen.",
      gloss: { es: "Las bolsas de plástico se prohibieron en 2019.", en: "Plastic bags were banned in 2019." },
      errors: [{ text: "Plastic bags was banned in 2019.", feedback: { es: "Sujeto plural: were banned." }, ruleId: "en-g-passive" }],
      distractors: ["was", "banned", "on"],
      grammar: ["en-g-passive"],
      tags: ["environment", "passive"],
    },
    {
      id: "spanish-is-spoken", type: "sentence", target: "Spanish is spoken in more than twenty countries.",
      gloss: { es: "El español se habla en más de veinte países.", en: "Spanish is spoken in more than twenty countries." },
      errors: [{ text: "Spanish speaks in more than twenty countries.", feedback: { es: "El «se» impersonal o pasivo se traduce con la pasiva: is spoken." }, ruleId: "en-g-passive" }],
      distractors: ["speaks", "talked", "that"],
      grammar: ["en-g-passive"],
      tags: ["society", "passive"],
    },
    {
      id: "the-park-was-built", type: "sentence", target: "The new park was built by local volunteers.",
      gloss: { es: "El parque nuevo lo construyeron voluntarios del barrio.", en: "The new park was built by local volunteers." },
      distractors: ["builded", "for", "is"],
      grammar: ["en-g-passive"],
      tags: ["society", "passive"],
    },
    {
      id: "people-who-volunteer", type: "sentence", target: "People who volunteer are usually happier.",
      gloss: { es: "Las personas que hacen voluntariado suelen ser más felices.", en: "People who volunteer are usually happier." },
      accept: [{ text: "People that volunteer are usually happier." }],
      errors: [{ text: "People which volunteer are usually happier.", feedback: { es: "Para personas: who (o that), no which." }, ruleId: "en-g-relative" }],
      distractors: ["which", "what", "is"],
      grammar: ["en-g-relative"],
      tags: ["society", "relative"],
    },
    {
      id: "the-app-that", type: "sentence", target: "This is the app that tells you when the bus is coming.",
      gloss: { es: "Esta es la aplicación que te avisa cuándo viene el autobús.", en: "This is the app that tells you when the bus is coming." },
      accept: [{ text: "This is the app which tells you when the bus is coming." }],
      errors: [{ text: "This is the app who tells you when the bus is coming.", feedback: { es: "Para cosas: that o which." }, ruleId: "en-g-relative" }],
      distractors: ["who", "what", "where"],
      grammar: ["en-g-relative"],
      tags: ["relative", "transport"],
    },
    {
      id: "the-town-where", type: "sentence", target: "That's the town where my mother was born.",
      gloss: { es: "Ese es el pueblo donde nació mi mamá.", en: "That's the town where my mother was born." },
      errors: [{ text: "That's the town where my mother born.", feedback: { es: "«nacer» en inglés es pasivo: was born." }, ruleId: "en-g-passive" }],
      distractors: ["which", "borned", "is"],
      grammar: ["en-g-relative", "en-g-passive"],
      tags: ["relative", "passive"],
    },
    {
      id: "we-should-use", type: "sentence", target: "We should use public transportation more often.",
      gloss: { es: "Deberíamos usar más el transporte público.", en: "We should use public transportation more often." },
      accept: [{ text: "We should use public transport more often." }, { text: "We should take public transportation more often." }],
      distractors: ["to", "most", "the"],
      grammar: ["en-g-should"],
      tags: ["environment", "transport"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-passive", type: "pattern", target: "is made · was built · are sold",
      gloss: { es: "la voz pasiva (be + participio)", en: "the passive voice" },
      pattern: {
        rule: {
          es: "La pasiva se forma con «be» en el tiempo que corresponda + participio: is made, was built, will be sold. Se usa cuando importa más la acción que quién la hace; si hace falta, el agente va con «by». Muchas frases con «se» del español se traducen así.",
          en: "The passive is 'be' in the right tense + past participle: is made, was built, will be sold. Use it when the action matters more than who does it; add the agent with 'by' if needed.",
        },
        table: [["activa", "pasiva"], ["They make cars here.", "Cars are made here."], ["Someone stole my bike.", "My bike was stolen."], ["Picasso painted it.", "It was painted by Picasso."]],
      },
      question: {
        prompt: { es: "«Este puente se construyó en 1937» es…", en: "Which means 'This bridge was built in 1937'?" },
        options: ["This bridge was built in 1937.", "This bridge built in 1937.", "This bridge is built in 1937.", "This bridge was build in 1937."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-passive"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-relative", type: "pattern", target: "who · which · that · where · whose",
      gloss: { es: "pronombres relativos (que, donde, cuyo)", en: "relative pronouns" },
      pattern: {
        rule: {
          es: "El «que» relativo del español tiene varias formas: «who» para personas, «which» para cosas y «that» para las dos. «where» = donde, «whose» = cuyo/a. Si el relativo es el objeto, se puede omitir: the book (that) I bought.",
          en: "'who' for people, 'which' for things, 'that' for both. 'where' for places, 'whose' for possession. When it's the object, it can be dropped: the book (that) I bought.",
        },
        table: [["personas", "a nurse who works at night"], ["cosas", "a car which / that uses no gas"], ["lugares", "the city where I live"], ["posesión", "the man whose dog bit me"]],
      },
      question: {
        prompt: { es: "Completa: «My neighbor, ___ son is a doctor, is very friendly.»", en: "Complete: 'My neighbor, ___ son is a doctor, is very friendly.'" },
        options: ["whose", "who", "which", "that's"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-relative"], tags: ["grammar", "relative"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-recycling", type: "dialogue", target: "Glass goes in the blue bin.",
      gloss: { es: "El vidrio va en el contenedor azul.", en: "Glass goes in the blue bin." },
      turns: [
        { who: "A", target: "Where does this go? I'm new in the building.", gloss: { es: "¿Dónde va esto? Soy nueva en el edificio.", en: "Where does this go? I'm new in the building." } },
        { who: "B", target: "Glass goes in the blue bin, and food waste goes in the green one.", gloss: { es: "El vidrio va en el contenedor azul, y los restos de comida en el verde.", en: "Glass goes in the blue bin, and food waste goes in the green one." } },
        { who: "A", target: "And plastic?", gloss: { es: "¿Y el plástico?", en: "And plastic?" } },
        { who: "B", target: "Plastic is collected on Tuesdays. Just leave it outside the door.", gloss: { es: "El plástico se recoge los martes. Déjalo afuera de la puerta.", en: "Plastic is collected on Tuesdays. Just leave it outside the door." } },
      ],
      question: {
        prompt: { es: "¿Cuándo se recoge el plástico?", en: "When is plastic collected?" },
        options: [
          { es: "Los martes", en: "On Tuesdays" },
          { es: "Todos los días", en: "Every day" },
          { es: "Va en el contenedor azul", en: "It goes in the blue bin" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "environment", "passive"],
    },
    {
      id: "lis-news-bikes", type: "listening", target: "Five hundred new bike lanes will be built next year. The project, which was approved yesterday, is paid for by the city.",
      gloss: { es: "El año que viene se construirán quinientos carriles para bicicletas nuevos. El proyecto, que se aprobó ayer, lo paga la ciudad.", en: "Five hundred new bike lanes will be built next year. The project, which was approved yesterday, is paid for by the city." },
      question: {
        prompt: { es: "¿Quién paga el proyecto?", en: "Who is paying for the project?" },
        options: [
          { es: "La ciudad", en: "The city" },
          { es: "Los ciclistas", en: "Cyclists" },
          { es: "Una empresa privada", en: "A private company" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "environment", "passive"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-born", type: "bridge", onlyFor: "es", target: "I was born in Lima.",
      gloss: { es: "Nací en Lima.", en: "I was born in Lima." },
      question: {
        prompt: { es: "¿Cómo se dice «Nací en 1990»?", en: "How do you say you were born in 1990?" },
        options: ["I was born in 1990.", "I born in 1990.", "I am born in 1990."],
        answer: 0,
      },
      note: { es: "«nacer» en inglés es pasivo: be born; en pasado, siempre «was / were born»." },
      exercises: ["guess", "question"], tags: ["bridge", "passive"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "law", type: "word", target: "law",
      gloss: { es: "ley; derecho (la carrera)", en: "law" },
      distractors: ["low", "raw", "lawn"],
      tags: ["society", "politics"],
    },
    {
      id: "charity", type: "word", target: "charity",
      gloss: { es: "organización benéfica; caridad", en: "charity" },
      distractors: ["clarity", "charter", "chariot"],
      tags: ["society"],
    },
  ]),
};
