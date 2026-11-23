import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u16",
  lang: "en",
  index: 16,
  cefr: "B1",
  title: { target: "Telling stories", es: "Contar historias", en: "Telling stories" },
  canDo: [
    { es: "Puedo contar una anécdota en orden, con principio, nudo y final.", en: "I can tell an anecdote in order, with a beginning, middle and end." },
    { es: "Puedo describir lo que estaba pasando cuando ocurrió algo.", en: "I can describe what was happening when something occurred." },
    { es: "Sé combinar el pasado continuo y el pasado simple, y usar adverbios como suddenly o quickly.", en: "I can combine the past continuous and the past simple, and use adverbs like suddenly or quickly." },
  ],
  icon: "📖",
  items: build("en", 16, "B1", [
    // ── Story words ──────────────────────────────────────────
    {
      id: "suddenly", type: "word", pos: "adv", target: "suddenly",
      gloss: { es: "de repente", en: "suddenly" },
      accept: [{ text: "all of a sudden" }],
      distractors: ["sudden", "surely", "soon"],
      tags: ["stories", "linkers"],
    },
    {
      id: "at-first", type: "phrase", pos: "phrase", target: "at first",
      gloss: { es: "al principio", en: "at first" },
      accept: [{ text: "at the beginning" }],
      distractors: ["at firstly", "in first", "first of"],
      tags: ["stories", "linkers"],
    },
    {
      id: "then", type: "word", pos: "adv", target: "then",
      gloss: { es: "luego, después, entonces", en: "then" },
      accept: [{ text: "after that" }],
      distractors: ["than", "them", "when"],
      note: { es: "then (luego) no es than (que, en comparaciones)." },
      tags: ["stories", "linkers"],
    },
    {
      id: "in-the-end", type: "phrase", pos: "phrase", target: "in the end",
      gloss: { es: "al final, finalmente", en: "in the end" },
      accept: [{ text: "finally" }, { text: "eventually" }],
      distractors: ["at the end of", "in the final", "on the end"],
      tags: ["stories", "linkers"],
    },
    {
      id: "while", type: "word", pos: "other", target: "while",
      gloss: { es: "mientras", en: "while" },
      distractors: ["when", "white", "whale"],
      tags: ["stories", "linkers"],
    },
    {
      id: "luckily", type: "word", pos: "adv", target: "luckily",
      gloss: { es: "por suerte", en: "luckily" },
      accept: [{ text: "fortunately" }],
      distractors: ["lucky", "lately", "likely"],
      tags: ["stories"],
    },
    {
      id: "unfortunately", type: "word", pos: "adv", target: "unfortunately",
      gloss: { es: "por desgracia, lamentablemente", en: "unfortunately" },
      distractors: ["fortunately", "unfortunate", "unforgettably"],
      tags: ["stories"],
    },
    {
      id: "slowly", type: "word", pos: "adv", target: "slowly",
      gloss: { es: "despacio, lentamente", en: "slowly" },
      distractors: ["slow", "slower", "lowly"],
      tags: ["stories", "adverbs"],
    },
    {
      id: "fall", type: "word", pos: "verb", target: "fall",
      gloss: { es: "caer, caerse", en: "to fall" },
      forms: { past: "fell", pp: "fallen" },
      distractors: ["feel", "fill", "fail"],
      tags: ["stories", "irregular"],
    },
    {
      id: "lose", type: "word", pos: "verb", target: "lose",
      gloss: { es: "perder", en: "to lose" },
      forms: { past: "lost", pp: "lost" },
      distractors: ["loose", "loss", "lost"],
      note: { es: "lose (perder, «luuz») no es loose (flojo/a, «luus»)." },
      tags: ["stories", "irregular"],
    },
    {
      id: "you-wont-believe", type: "phrase", pos: "phrase", target: "You won't believe what happened!",
      gloss: { es: "¡No vas a creer lo que pasó!", en: "You won't believe what happened!" },
      accept: [{ text: "You'll never believe what happened!" }],
      distractors: ["You don't believe what happened!", "You won't believe what happen!", "You won't believe what passed!"],
      errors: [{ text: "You won't believe what passed!", feedback: { es: "«pasar» (ocurrir) es «happen», no «pass»." } }],
      tags: ["stories", "chunk"],
    },
    {
      id: "what-happened-next", type: "phrase", pos: "phrase", target: "What happened next?",
      gloss: { es: "¿Y qué pasó después?", en: "What happened next?" },
      accept: [{ text: "Then what happened?" }, { text: "And then?" }],
      distractors: ["What did happen next?", "What passed next?", "What happens next time?"],
      tags: ["stories", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-was-walking-when", type: "sentence", target: "I was walking home when it started to rain.",
      gloss: { es: "Iba caminando a casa cuando empezó a llover.", en: "I was walking home when it started to rain." },
      accept: [{ text: "I was walking home when it started raining." }],
      errors: [{ text: "I walked home when it was starting to rain.", feedback: { es: "La acción larga (de fondo) va en continuo; la corta, en pasado simple." }, ruleId: "en-g-past-continuous" }],
      distractors: ["walked", "while", "was starting"],
      grammar: ["en-g-past-continuous"],
      annot: { "was walking": { es: "acción de fondo, en progreso", en: "background action in progress" }, started: { es: "acción corta que interrumpe", en: "short action that interrupts" } },
      tags: ["stories", "past-continuous"],
    },
    {
      id: "what-were-you-doing", type: "sentence", target: "What were you doing at nine last night?",
      gloss: { es: "¿Qué estabas haciendo anoche a las nueve?", en: "What were you doing at nine last night?" },
      errors: [{ text: "What did you doing at nine last night?", feedback: { es: "Pasado continuo: were + -ing." }, ruleId: "en-g-past-continuous" }],
      distractors: ["did", "was", "do"],
      grammar: ["en-g-past-continuous"],
      tags: ["stories", "past-continuous", "questions"],
    },
    {
      id: "while-she-was-cooking", type: "sentence", target: "While she was cooking, the lights went out.",
      gloss: { es: "Mientras cocinaba, se fue la luz.", en: "While she was cooking, the lights went out." },
      accept: [{ text: "The lights went out while she was cooking." }],
      distractors: ["when", "cooked", "were"],
      grammar: ["en-g-past-continuous"],
      tags: ["stories", "past-continuous"],
    },
    {
      id: "he-fell-and-broke", type: "sentence", target: "He fell off his bike and broke his arm.",
      gloss: { es: "Se cayó de la bici y se rompió el brazo.", en: "He fell off his bike and broke his arm." },
      errors: [{ text: "He fell off his bike and broke the arm.", feedback: { es: "Con partes del cuerpo, el inglés usa el posesivo: his arm." }, ruleId: "en-g-possessives" }],
      distractors: ["the", "felt", "breaked"],
      grammar: ["en-g-past-irregular"],
      tags: ["stories", "health"],
    },
    {
      id: "she-drove-carefully", type: "sentence", target: "It was snowing, so she drove very carefully.",
      gloss: { es: "Estaba nevando, así que manejó con mucho cuidado.", en: "It was snowing, so she drove very carefully." },
      errors: [{ text: "It was snowing, so she drove very careful.", feedback: { es: "Para describir cómo se hace algo: adverbio con -ly (carefully)." }, ruleId: "en-g-adverbs-manner" }],
      distractors: ["careful", "driven", "snowed"],
      grammar: ["en-g-adverbs-manner", "en-g-past-continuous"],
      tags: ["stories", "adverbs"],
    },
    {
      id: "luckily-nobody", type: "sentence", target: "Luckily, nobody was hurt.",
      gloss: { es: "Por suerte, nadie salió herido.", en: "Luckily, nobody was hurt." },
      accept: [{ text: "Fortunately, nobody was hurt." }, { text: "Luckily, no one was hurt." }],
      errors: [{ text: "Luckily, nobody wasn't hurt.", feedback: { es: "«nobody» ya es negativo: no se dice «wasn't»." } }],
      distractors: ["anybody", "wasn't", "hurted"],
      tags: ["stories"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-past-continuous", type: "pattern", target: "I was reading when the phone rang.",
      gloss: { es: "pasado continuo + pasado simple", en: "past continuous + past simple" },
      pattern: {
        rule: {
          es: "was / were + -ing describe una acción en progreso en el pasado (el fondo de la historia, como el imperfecto «leía» o «estaba leyendo»). La acción corta que la interrumpe va en pasado simple. «when» suele introducir la acción corta y «while», la larga.",
          en: "was / were + -ing describes an action in progress in the past (the background of a story). The short action that interrupts it is in the past simple. 'when' often introduces the short action and 'while' the long one.",
        },
        table: [["fondo (continuo)", "interrupción (simple)"], ["I was reading", "when the phone rang."], ["While we were eating,", "the dog ran away."]],
      },
      question: {
        prompt: { es: "Completa: «We ___ TV when we heard a strange noise.»", en: "Complete: 'We ___ TV when we heard a strange noise.'" },
        options: ["were watching", "watched", "was watching", "are watching"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-past-continuous"], tags: ["grammar", "past-continuous"],
    },
    {
      id: "pat-adverbs-manner", type: "pattern", target: "quick → quickly · careful → carefully · good → well",
      gloss: { es: "adverbios de modo (-ly = -mente)", en: "adverbs of manner (-ly)" },
      pattern: {
        rule: {
          es: "Para decir cómo se hace algo se añade -ly al adjetivo, como «-mente» en español: slow → slowly, easy → easily. Irregulares: good → well, fast → fast, hard → hard.",
          en: "To say how something is done, add -ly to the adjective: slow → slowly, easy → easily. Irregular: good → well, fast → fast, hard → hard.",
        },
        table: [["adjetivo", "adverbio"], ["slow", "slowly"], ["easy", "easily"], ["good", "well"], ["fast / hard", "fast / hard"]],
      },
      question: {
        prompt: { es: "Completa: «She speaks English really ___.» (bien)", en: "Complete: 'She speaks English really ___.' (good)" },
        options: ["well", "good", "goodly", "better"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-adverbs-manner"], tags: ["grammar", "adverbs"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-lost-phone", type: "dialogue", target: "You won't believe what happened!",
      gloss: { es: "¡No vas a creer lo que pasó!", en: "You won't believe what happened!" },
      turns: [
        { who: "A", target: "You won't believe what happened! I lost my phone on the subway.", gloss: { es: "¡No vas a creer lo que pasó! Perdí el celular en el metro.", en: "You won't believe what happened! I lost my phone on the subway." } },
        { who: "B", target: "Oh no! What were you doing?", gloss: { es: "¡Ay, no! ¿Qué estabas haciendo?", en: "Oh no! What were you doing?" } },
        { who: "A", target: "I was reading a book and I was really tired, so I wasn't paying attention.", gloss: { es: "Estaba leyendo un libro y estaba muy cansada, así que no estaba prestando atención.", en: "I was reading a book and I was really tired, so I wasn't paying attention." } },
        { who: "B", target: "What happened next?", gloss: { es: "¿Y qué pasó después?", en: "What happened next?" } },
        { who: "A", target: "Luckily, a woman found it and called my sister. I got it back the next day!", gloss: { es: "Por suerte, una mujer lo encontró y llamó a mi hermana. ¡Lo recuperé al día siguiente!", en: "Luckily, a woman found it and called my sister. I got it back the next day!" } },
      ],
      question: {
        prompt: { es: "¿Cómo recuperó el celular?", en: "How did she get her phone back?" },
        options: [
          { es: "Una mujer lo encontró y llamó a su hermana", en: "A woman found it and called her sister" },
          { es: "Volvió al metro a buscarlo", en: "She went back to the subway" },
          { es: "No lo recuperó", en: "She never got it back" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "stories"],
    },
    {
      id: "lis-story", type: "listening", target: "Last summer we were driving to the coast when our car suddenly stopped. At first we didn't know what to do, but in the end a farmer helped us.",
      gloss: { es: "El verano pasado íbamos manejando a la costa cuando el auto se paró de repente. Al principio no sabíamos qué hacer, pero al final un granjero nos ayudó.", en: "Last summer we were driving to the coast when our car suddenly stopped. At first we didn't know what to do, but in the end a farmer helped us." },
      question: {
        prompt: { es: "¿Quién los ayudó?", en: "Who helped them?" },
        options: [
          { es: "Un granjero", en: "A farmer" },
          { es: "Un mecánico", en: "A mechanic" },
          { es: "La policía", en: "The police" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "stories"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-realize", type: "bridge", onlyFor: "es", target: "realize",
      gloss: { es: "darse cuenta", en: "realize (become aware)" },
      question: {
        prompt: { es: "«Then I realized my wallet was gone» significa…", en: "'Then I realized my wallet was gone' means…" },
        options: [
          { es: "Entonces me di cuenta de que no tenía la billetera.", en: "Then I noticed my wallet was missing." },
          { es: "Entonces realicé que la billetera se había ido.", en: "Then I made my wallet go away." },
          { es: "Entonces busqué la billetera.", en: "Then I looked for my wallet." },
        ],
        answer: 0,
      },
      note: { es: "realize = darse cuenta; «realizar» (hacer, llevar a cabo) es «carry out», «do» o «make»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "stories"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "scared", type: "word", pos: "adj", target: "scared",
      gloss: { es: "asustado/a", en: "scared" },
      accept: [{ text: "afraid" }, { text: "frightened" }],
      distractors: ["scary", "scarred", "sacred"],
      note: { es: "scared = asustado/a; scary = que da miedo." },
      tags: ["stories", "emotions"],
    },
    {
      id: "happen", type: "word", pos: "verb", target: "happen",
      gloss: { es: "pasar, ocurrir", en: "to happen" },
      distractors: ["happy", "pass", "happens"],
      note: { es: "«What happened?» = ¿Qué pasó?" },
      tags: ["stories"],
    },
  ]),
};
