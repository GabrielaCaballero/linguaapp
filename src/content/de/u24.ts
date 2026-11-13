import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u24",
  lang: "de",
  index: 24,
  cefr: "B2",
  title: { target: "Redewendungen", es: "Expresiones idiomáticas", en: "Idioms" },
  canDo: [
    { es: "Puedo entender y usar expresiones idiomáticas frecuentes.", en: "I can understand and use common idioms." },
    { es: "Puedo elegir el registro adecuado (du / Sie) y proponer tutearse.", en: "I can choose the right register (du / Sie) and suggest switching to du." },
    { es: "Sé usar combinaciones fijas como eine Entscheidung treffen o zur Verfügung stehen.", en: "I can use fixed noun–verb pairs like eine Entscheidung treffen and zur Verfügung stehen." },
  ],
  icon: "🍀",
  items: build("de", 24, "B2", [
    // ── Idioms ───────────────────────────────────────────────
    {
      id: "daumen-druecken", type: "phrase", pos: "phrase", register: "informal", target: "Ich drücke dir die Daumen!",
      gloss: { es: "¡Cruzo los dedos por ti!", en: "I'll keep my fingers crossed for you!" },
      distractors: ["Ich drücke dir die Finger!", "Ich drücke dich die Daumen!", "Ich drücke dir die Hände!"],
      note: { es: "Literalmente «te aprieto los pulgares».", en: "Literally 'I'll press my thumbs for you'." },
      tags: ["idioms"],
    },
    {
      id: "nicht-mein-bier", type: "phrase", pos: "phrase", target: "Das ist nicht mein Bier.",
      gloss: { es: "No es asunto mío.", en: "That's not my problem." },
      distractors: ["Das ist nicht mein Wein.", "Das ist kein mein Bier.", "Das ist nicht meine Bier."],
      tags: ["idioms"],
    },
    {
      id: "schwein-haben", type: "phrase", pos: "phrase", target: "Schwein haben",
      gloss: { es: "tener (mucha) suerte", en: "to be lucky" },
      distractors: ["ein Schwein sein", "Schwein machen", "Schweine haben"],
      tags: ["idioms"],
    },
    {
      id: "tomaten-auf-den-augen", type: "phrase", pos: "phrase", target: "Tomaten auf den Augen haben",
      gloss: { es: "no ver lo que es obvio", en: "to not see what's right in front of you" },
      distractors: ["Tomaten in den Augen haben", "Tomaten auf die Augen haben", "Kartoffeln auf den Augen haben"],
      tags: ["idioms"],
    },
    {
      id: "auf-die-nerven-gehen", type: "phrase", pos: "phrase", target: "jemandem auf die Nerven gehen",
      gloss: { es: "sacar de quicio a alguien", en: "to get on someone's nerves" },
      distractors: ["jemanden auf die Nerven gehen", "jemandem auf den Nerven gehen", "jemandem in die Nerven gehen"],
      tags: ["idioms"],
    },
    {
      id: "ins-fettnaepfchen", type: "phrase", pos: "phrase", target: "ins Fettnäpfchen treten",
      gloss: { es: "meter la pata", en: "to put your foot in it" },
      distractors: ["in die Fettnäpfchen treten", "ins Fettnapf treten", "ins Wasser treten"],
      tags: ["idioms"],
    },

    // ── Noun–verb pairs ──────────────────────────────────────
    {
      id: "entscheidung-treffen", type: "phrase", pos: "phrase", target: "eine Entscheidung treffen",
      gloss: { es: "tomar una decisión", en: "to make a decision" },
      distractors: ["eine Entscheidung machen", "eine Entscheidung nehmen", "eine Entscheidung geben"],
      tags: ["collocations"],
    },
    {
      id: "in-frage-kommen", type: "phrase", pos: "phrase", target: "in Frage kommen",
      gloss: { es: "entrar en consideración, ser una opción", en: "to be an option" },
      accept: [{ text: "infrage kommen" }],
      distractors: ["in Frage gehen", "in Frage stehen", "auf Frage kommen"],
      note: { es: "Las dos grafías son correctas: in Frage / infrage.", en: "Both spellings are correct: in Frage / infrage." },
      tags: ["collocations"],
    },
    {
      id: "zur-verfuegung-stehen", type: "phrase", pos: "phrase", target: "zur Verfügung stehen",
      gloss: { es: "estar a disposición", en: "to be available" },
      distractors: ["zur Verfügung sein", "zu Verfügung stehen", "zur Verfügung liegen"],
      tags: ["collocations", "formal"],
    },
    {
      id: "abschied-nehmen", type: "phrase", pos: "phrase", target: "Abschied nehmen",
      gloss: { es: "despedirse", en: "to say goodbye / take leave" },
      distractors: ["Abschied machen", "Abschied geben", "einen Abschied nehmen"],
      tags: ["collocations"],
    },

    // ── Register twins ───────────────────────────────────────
    {
      id: "was-meinst-du", type: "phrase", pos: "phrase", register: "informal", target: "Was meinst du dazu?",
      gloss: { es: "¿Qué opinas tú? (informal)", en: "What do you think? (informal)" },
      distractors: ["Was meinst du davon?", "Was meint du dazu?", "Wie meinst du dazu?"],
      tags: ["register", "opinion"],
    },
    {
      id: "was-meinen-sie", type: "phrase", pos: "phrase", register: "formal", target: "Was meinen Sie dazu?",
      gloss: { es: "¿Qué opina usted? (formal)", en: "What do you think? (formal)" },
      distractors: ["Was meinen Sie davon?", "Was meint Sie dazu?", "Wie meinen Sie dazu?"],
      tags: ["register", "opinion"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "entscheidung-bald", type: "sentence", target: "Wir müssen bald eine Entscheidung treffen.",
      gloss: { es: "Tenemos que tomar una decisión pronto.", en: "We need to make a decision soon." },
      errors: [{ text: "Wir müssen bald eine Entscheidung machen.", feedback: { es: "En alemán una decisión se «encuentra»: eine Entscheidung treffen.", en: "German 'hits' a decision: eine Entscheidung treffen." } }],
      distractors: ["machen", "nehmen", "treffe"],
      tags: ["collocations"],
    },
    {
      id: "kommt-nicht-in-frage", type: "phrase", pos: "phrase", target: "Das kommt nicht in Frage!",
      gloss: { es: "¡Ni hablar!", en: "That's out of the question!" },
      accept: [{ text: "Das kommt nicht infrage!" }],
      distractors: ["Das kommt nicht auf Frage!", "Das geht nicht in Frage!", "Das kommt keine Frage!"],
      tags: ["collocations", "chunk"],
    },
    {
      id: "stehe-zur-verfuegung", type: "sentence", register: "formal", target: "Für Fragen stehe ich Ihnen gern zur Verfügung.",
      gloss: { es: "Quedo a su disposición para cualquier pregunta.", en: "I'm happy to answer any questions." },
      distractors: ["Sie", "stehen", "Verfügungen"],
      tags: ["collocations", "formal-writing"],
    },
    {
      id: "du-gehst-mir-auf-die-nerven", type: "sentence", register: "informal", target: "Du gehst mir auf die Nerven!",
      gloss: { es: "¡Me sacas de quicio!", en: "You're getting on my nerves!" },
      errors: [{ text: "Du gehst mich auf die Nerven!", feedback: { es: "Con dativo: mir.", en: "It takes the dative: mir." } }],
      distractors: ["mich", "den", "Nerv"],
      tags: ["idioms"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-funktionsverben", type: "pattern", target: "eine Entscheidung treffen · eine Frage stellen · zur Verfügung stehen",
      gloss: { es: "sustantivo + verbo fijos", en: "fixed noun + verb pairs" },
      pattern: {
        rule: {
          es: "Muchas expresiones combinan un sustantivo con un verbo fijo que no se puede traducir palabra por palabra: eine Frage stellen (hacer una pregunta), eine Entscheidung treffen (tomar una decisión).",
          en: "Many expressions pair a noun with a fixed verb you can't translate word for word: eine Frage stellen (ask a question), eine Entscheidung treffen (make a decision).",
        },
        table: [["eine Frage stellen", "hacer una pregunta / ask a question"], ["eine Entscheidung treffen", "tomar una decisión / make a decision"], ["Kritik üben", "criticar / criticise"], ["in Frage kommen", "ser una opción / be an option"]],
      },
      question: {
        prompt: { es: "«Hacer una pregunta» es…", en: "'To ask a question' is…" },
        options: ["eine Frage stellen", "eine Frage machen", "eine Frage geben", "eine Frage tun"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "collocations"],
    },
    {
      id: "pat-redewendungen", type: "pattern", target: "Schwein haben · Tomaten auf den Augen haben · die Daumen drücken",
      gloss: { es: "expresiones idiomáticas", en: "idioms" },
      pattern: {
        rule: {
          es: "El sentido no sale de las palabras: Schwein haben = tener suerte; Tomaten auf den Augen haben = no ver lo evidente; jemandem die Daumen drücken = desear suerte.",
          en: "The meaning isn't in the words: Schwein haben = be lucky; Tomaten auf den Augen haben = not see the obvious; jemandem die Daumen drücken = wish someone luck.",
        },
        table: [["Schwein haben", "tener suerte / be lucky"], ["Tomaten auf den Augen haben", "no ver lo obvio / miss the obvious"], ["die Daumen drücken", "desear suerte / keep fingers crossed"]],
      },
      question: {
        prompt: { es: "«Da hast du aber Schwein gehabt!» significa…", en: "'Da hast du aber Schwein gehabt!' means…" },
        options: [
          { es: "¡Qué suerte tuviste!", en: "You were really lucky!" },
          { es: "¡Te portaste muy mal!", en: "You behaved really badly!" },
          { es: "¡Comiste muchísimo!", en: "You ate a huge amount!" },
          { es: "¡Qué sucio estás!", en: "You're filthy!" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "idioms"],
    },
    {
      id: "pat-duzen-siezen", type: "pattern", target: "duzen · siezen · Wollen wir uns duzen?",
      gloss: { es: "tutear y tratar de usted", en: "using du or Sie" },
      pattern: {
        rule: {
          es: "Sie con desconocidos, en el trabajo y con personas mayores; du con amigos, familia y niños. Normalmente la persona mayor o de mayor rango propone: «Wollen wir uns duzen?».",
          en: "Sie with strangers, at work and with older people; du with friends, family and children. Usually the older or more senior person offers: 'Wollen wir uns duzen?'.",
        },
        table: [["Sie", "Was meinen Sie? · Auf Wiedersehen"], ["du", "Was meinst du? · Tschüss"], ["wechseln", "Wollen wir uns duzen?"]],
      },
      question: {
        prompt: { es: "Una colega mayor te propone tutearse. ¿Qué dice?", en: "An older colleague offers to switch to du. What does she say?" },
        options: ["Wollen wir uns duzen?", "Wollen wir uns siezen?", "Duzen Sie mich!", "Wollen wir du?"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "register"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-fettnaepfchen", type: "listening",
      target: "Gestern bin ich voll ins Fettnäpfchen getreten: Ich habe meine neue Chefin geduzt, obwohl im Büro alle Sie sagen.",
      gloss: {
        es: "Ayer metí la pata a lo grande: tuteé a mi nueva jefa, aunque en la oficina todos se tratan de usted.",
        en: "Yesterday I really put my foot in it: I called my new boss 'du', even though everyone in the office says 'Sie'.",
      },
      question: {
        prompt: { es: "¿Qué error cometió?", en: "What mistake did the speaker make?" },
        options: [
          { es: "Tuteó a su nueva jefa.", en: "Used 'du' with the new boss." },
          { es: "Llegó tarde a la oficina.", en: "Was late for work." },
          { es: "Olvidó el nombre de su jefa.", en: "Forgot the boss's name." },
          { es: "Trató de usted a un amigo.", en: "Used 'Sie' with a friend." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "register"],
    },
    {
      id: "dlg-daumen", type: "dialogue", register: "informal", target: "Das kann ich gebrauchen.",
      gloss: { es: "Me hace falta.", en: "I could use that." },
      turns: [
        { who: "A", target: "Morgen habe ich mein Vorstellungsgespräch.", gloss: { es: "Mañana tengo mi entrevista de trabajo.", en: "Tomorrow's my job interview." } },
        { who: "B", target: "Ich drücke dir die Daumen!", gloss: { es: "¡Cruzo los dedos por ti!", en: "I'll keep my fingers crossed!" } },
        { who: "A", target: "Danke, das kann ich gebrauchen.", gloss: { es: "Gracias, me hace falta.", en: "Thanks, I could use that." } },
      ],
      question: {
        prompt: { es: "¿Qué tiene A mañana?", en: "What does A have tomorrow?" },
        options: [
          { es: "Una entrevista de trabajo", en: "A job interview" },
          { es: "Un examen", en: "An exam" },
          { es: "Una cita con el médico", en: "A doctor's appointment" },
          { es: "Una fiesta", en: "A party" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "idioms"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-sympathisch", type: "bridge", onlyFor: "en", target: "sympathisch",
      gloss: { es: "simpático/a", en: "likeable / nice" },
      question: {
        prompt: { es: "«Dein Bruder ist sehr sympathisch» significa…", en: "'Dein Bruder ist sehr sympathisch' means…" },
        options: [
          { es: "Tu hermano es muy simpático.", en: "Your brother is very likeable." },
          { es: "Tu hermano es muy compasivo.", en: "Your brother is very sympathetic." },
          { es: "Tu hermano es muy sensible.", en: "Your brother is very sensitive." },
          { es: "Tu hermano es muy tímido.", en: "Your brother is very shy." },
        ],
        answer: 0,
      },
      note: { en: "sympathisch = likeable; 'sympathetic' (compassionate) is mitfühlend or verständnisvoll." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
