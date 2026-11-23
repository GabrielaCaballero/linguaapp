import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u33",
  lang: "en",
  index: 33,
  cefr: "C2",
  title: { target: "Phrasal verbs and idioms", es: "Verbos frasales y modismos", en: "Phrasal verbs and idioms" },
  canDo: [
    { es: "Entiendo y uso verbos frasales con significados sutiles (play down, brush off, pan out).", en: "I can understand and use phrasal verbs with subtle meanings (play down, brush off, pan out)." },
    { es: "Uso modismos frecuentes en el lugar justo (a blessing in disguise, the elephant in the room).", en: "I can use common idioms in the right place (a blessing in disguise, the elephant in the room)." },
    { es: "Sé usar verbos frasales de tres partes (get away with, face up to) y deduzco el sentido de la partícula.", en: "I can use three-part phrasal verbs (get away with, face up to) and work out what the particle adds." },
  ],
  icon: "🧩",
  items: build("en", 33, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "come-across-as", type: "phrase", pos: "verb", target: "come across as",
      gloss: { es: "dar la impresión de ser, parecer (a los demás)", en: "to come across as" },
      distractors: ["come across like being", "come over to", "cross over as"],
      grammar: ["en-g-phrasal-three-part"],
      tags: ["phrasal-verbs", "personality"],
    },
    {
      id: "play-down", type: "word", pos: "verb", target: "play down",
      gloss: { es: "restar importancia a, minimizar", en: "to play down" },
      distractors: ["play up", "put down", "play off"],
      note: { es: "Lo contrario es «play up»: exagerar, destacar." },
      grammar: ["en-g-particle-meanings"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "brush-off", type: "word", pos: "verb", target: "brush off",
      gloss: { es: "no hacer caso a, despachar con desdén (una crítica, a alguien)", en: "to brush off" },
      distractors: ["brush up", "push off", "rub off"],
      note: { es: "«brush up on» es otra cosa: repasar, refrescar (brush up on your French)." },
      grammar: ["en-g-particle-meanings"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "get-away-with", type: "phrase", pos: "verb", target: "get away with",
      gloss: { es: "salirse con la suya, quedar impune", en: "to get away with (something)" },
      distractors: ["get away from", "get along with", "go away with"],
      grammar: ["en-g-phrasal-three-part"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "face-up-to", type: "phrase", pos: "verb", target: "face up to",
      gloss: { es: "afrontar, asumir (algo difícil)", en: "to face up to" },
      distractors: ["face up with", "face down to", "make up to"],
      grammar: ["en-g-phrasal-three-part"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "fall-through", type: "word", pos: "verb", target: "fall through",
      gloss: { es: "venirse abajo, no concretarse (un plan, un trato)", en: "to fall through" },
      distractors: ["fall over", "fall for", "fall out"],
      grammar: ["en-g-particle-meanings"],
      tags: ["phrasal-verbs", "plans"],
    },
    {
      id: "pan-out", type: "word", pos: "verb", target: "pan out",
      gloss: { es: "salir, resultar (cómo termina algo)", en: "to pan out" },
      distractors: ["pan off", "plan out", "turn over"],
      note: { es: "Se usa sobre todo en preguntas y negativas: «It didn't pan out» = no salió como esperábamos." },
      grammar: ["en-g-particle-meanings"],
      tags: ["phrasal-verbs", "plans"],
    },
    {
      id: "cut-corners", type: "phrase", pos: "phrase", target: "cut corners",
      gloss: { es: "hacer algo a la ligera para ahorrar tiempo o dinero", en: "to cut corners" },
      distractors: ["cut edges", "cut angles", "skip corners"],
      tags: ["idioms", "work"],
    },
    {
      id: "blessing-in-disguise", type: "phrase", pos: "phrase", target: "a blessing in disguise",
      gloss: { es: "un mal que trae algo bueno (no hay mal que por bien no venga)", en: "a blessing in disguise" },
      distractors: ["a blessing in hiding", "a disguised blessing", "a gift in disguise"],
      tags: ["idioms"],
    },
    {
      id: "beat-around-the-bush", type: "phrase", pos: "phrase", target: "beat around the bush",
      gloss: { es: "andarse con rodeos", en: "to beat around the bush" },
      accept: [{ text: "beat about the bush" }],
      distractors: ["beat around the tree", "hit around the bush", "go around the bush"],
      note: { es: "En inglés británico se dice «beat about the bush»." },
      tags: ["idioms", "us-uk"],
    },
    {
      id: "elephant-in-the-room", type: "phrase", pos: "phrase", target: "the elephant in the room",
      gloss: { es: "el tema incómodo que todos evitan mencionar", en: "the elephant in the room" },
      distractors: ["the elephant in the house", "the white elephant", "an elephant on the room"],
      note: { es: "«a white elephant» es otra cosa: algo caro e inútil." },
      tags: ["idioms"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "comes-across-as-arrogant", type: "sentence", target: "He always comes across as a bit arrogant.",
      gloss: { es: "Siempre da la impresión de ser un poco arrogante.", en: "He always comes across as a bit arrogant." },
      accept: [{ text: "He always comes across as slightly arrogant." }],
      errors: [{ text: "He always comes across like a bit arrogant.", feedback: { es: "«come across as» + adjetivo o sustantivo; «like» no va aquí." }, ruleId: "en-g-phrasal-three-part" }],
      distractors: ["like", "cross", "came"],
      grammar: ["en-g-phrasal-three-part"],
      tags: ["phrasal-verbs", "personality"],
    },
    {
      id: "play-down-the-scandal", type: "sentence", target: "The government tried to play down the scandal.",
      gloss: { es: "El gobierno intentó restarle importancia al escándalo.", en: "The government tried to play down the scandal." },
      accept: [{ text: "The government tried to play the scandal down." }],
      distractors: ["up", "playing", "under"],
      grammar: ["en-g-particle-meanings"],
      annot: { down: { es: "partícula: reducir, quitar fuerza", en: "particle: reduce, make smaller" } },
      tags: ["phrasal-verbs", "politics"],
    },
    {
      id: "got-away-with-it", type: "sentence", target: "I can't believe he got away with it.",
      gloss: { es: "No puedo creer que se haya salido con la suya.", en: "I can't believe he got away with it." },
      accept: [{ text: "I cannot believe he got away with it." }, { text: "I can't believe he got away with that." }],
      errors: [{ text: "I can't believe he got it away with.", feedback: { es: "Los verbos de tres partes no se separan: el objeto va al final (got away with it)." }, ruleId: "en-g-phrasal-three-part" }],
      distractors: ["from", "get", "gone"],
      grammar: ["en-g-phrasal-three-part"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "face-up-to-the-facts", type: "sentence", target: "Sooner or later, you'll have to face up to the facts.",
      gloss: { es: "Tarde o temprano, vas a tener que afrontar la realidad.", en: "Sooner or later, you'll have to face up to the facts." },
      accept: [{ text: "Sooner or later, you will have to face up to the facts." }, { text: "Sooner or later, you'll have to face the facts." }],
      distractors: ["with", "faced", "front"],
      grammar: ["en-g-phrasal-three-part"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "deal-fell-through", type: "sentence", target: "The deal fell through at the last minute.",
      gloss: { es: "El trato se vino abajo a último momento.", en: "The deal fell through at the last minute." },
      distractors: ["over", "felt", "lastly"],
      grammar: ["en-g-particle-meanings"],
      tags: ["phrasal-verbs", "business"],
    },
    {
      id: "blessing-in-disguise-job", type: "sentence", target: "Losing that job turned out to be a blessing in disguise.",
      gloss: { es: "Al final, perder ese trabajo fue para bien.", en: "Losing that job turned out to be a blessing in disguise." },
      distractors: ["Lose", "turn", "disguised"],
      tags: ["idioms", "work"],
    },
    {
      id: "lets-not-beat-around", type: "sentence", target: "Let's not beat around the bush: the project is over budget.",
      gloss: { es: "No nos andemos con rodeos: el proyecto se pasó del presupuesto.", en: "Let's not beat around the bush: the project is over budget." },
      accept: [{ text: "Let's not beat about the bush: the project is over budget." }, { text: "Let's not beat around the bush. The project is over budget." }],
      distractors: ["beating", "bushes", "above"],
      tags: ["idioms", "work"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-phrasal-three-part", type: "pattern", target: "get away with it · face up to the facts · come across as rude",
      gloss: { es: "verbos frasales de tres partes", en: "three-part phrasal verbs" },
      pattern: {
        rule: {
          es: "Algunos verbos frasales tienen verbo + partícula + preposición (get away with, look down on, come up with). Son inseparables: el objeto, aunque sea un pronombre, va siempre después de la preposición: «get away with it», nunca «get it away with».",
          en: "Some phrasal verbs have verb + particle + preposition (get away with, look down on, come up with). They are inseparable: the object, even a pronoun, always goes after the preposition: 'get away with it', never 'get it away with'.",
        },
        table: [["verbo", "significado"], ["get away with", "quedar impune"], ["face up to", "afrontar"], ["look down on", "menospreciar"], ["come up with", "idear, proponer"], ["come across as", "dar la impresión de ser"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["She came up with a brilliant idea.", "She came up a brilliant idea with.", "She came a brilliant idea up with.", "She came up with of a brilliant idea."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-phrasal-three-part"], tags: ["grammar", "phrasal-verbs"],
    },
    {
      id: "pat-particle-meanings", type: "pattern", target: "up = del todo · down = menos · off = fuera · out = hasta el final",
      spoken: "up, down, off, out",
      gloss: { es: "qué aporta la partícula", en: "what the particle adds" },
      pattern: {
        rule: {
          es: "La partícula no es aleatoria: suele tener un sentido propio que se repite en muchos verbos. «up» = completar o aumentar (use up, speed up); «down» = reducir (play down, cut down); «off» = separar, cancelar (call off, brush off); «out» = hasta el final o hacia fuera (work out, pan out); «through» = de principio a fin (see it through).",
          en: "The particle isn't random: it usually has its own meaning, repeated across many verbs. 'up' = complete or increase (use up, speed up); 'down' = reduce (play down, cut down); 'off' = separate, cancel (call off, brush off); 'out' = to the end or outwards (work out, pan out); 'through' = from start to finish (see it through).",
        },
        table: [["partícula", "idea", "ejemplos"], ["up", "completar, subir", "use up, speed up"], ["down", "reducir", "play down, cut down"], ["off", "separar, cancelar", "call off, brush off"], ["out", "hasta el final", "work out, pan out"], ["through", "de principio a fin", "see through, read through"]],
      },
      question: {
        prompt: { es: "«They called off the wedding» significa que…", en: "'They called off the wedding' means that…" },
        options: [
          { es: "cancelaron la boda", en: "they canceled the wedding" },
          { es: "invitaron a todos a la boda", en: "they invited everyone to the wedding" },
          { es: "adelantaron la boda", en: "they moved the wedding forward" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-particle-meanings"], tags: ["grammar", "phrasal-verbs"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-cafe-plan", type: "dialogue", target: "Oh, it fell through.",
      gloss: { es: "Ah, se vino abajo.", en: "Oh, it fell through." },
      turns: [
        { who: "A", target: "Whatever happened to your plan to open a café?", gloss: { es: "¿Y qué pasó con tu plan de abrir una cafetería?", en: "Whatever happened to your plan to open a café?" } },
        { who: "B", target: "Oh, it fell through. The bank pulled out at the last minute.", gloss: { es: "Ah, se vino abajo. El banco se echó atrás a último momento.", en: "Oh, it fell through. The bank pulled out at the last minute." } },
        { who: "A", target: "That's awful. You must have been devastated.", gloss: { es: "Qué horror. Debes de haber quedado destrozado/a.", en: "That's awful. You must have been devastated." } },
        { who: "B", target: "At first, sure. But honestly, it turned out to be a blessing in disguise. I'd never have had time for my kids.", gloss: { es: "Al principio, claro. Pero la verdad es que al final fue para bien. Nunca habría tenido tiempo para mis hijos.", en: "At first, sure. But honestly, it turned out to be a blessing in disguise. I'd never have had time for my kids." } },
      ],
      question: {
        prompt: { es: "¿Por qué no se concretó el plan de B?", en: "Why didn't B's plan work out?" },
        options: [
          { es: "El banco se echó atrás", en: "The bank pulled out" },
          { es: "B no tenía tiempo", en: "B had no time" },
          { es: "Ya había una cafetería al lado", en: "There was already a café next door" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "phrasal-verbs", "idioms"],
    },
    {
      id: "lis-particles", type: "listening", target: "Phrasal verbs are less random than they seem. The particle often carries a meaning of its own: up can mean completely, as in eat up or use up, while down often means less, as in cut down or play down. Learn the particles, and hundreds of verbs suddenly start to make sense.",
      gloss: { es: "Los verbos frasales son menos aleatorios de lo que parecen. La partícula suele tener un significado propio: «up» puede significar «del todo», como en «eat up» o «use up», mientras que «down» suele significar «menos», como en «cut down» o «play down». Aprende las partículas y, de pronto, cientos de verbos empiezan a tener sentido.", en: "Phrasal verbs are less random than they seem. The particle often carries a meaning of its own: up can mean completely, as in eat up or use up, while down often means less, as in cut down or play down. Learn the particles, and hundreds of verbs suddenly start to make sense." },
      question: {
        prompt: { es: "Según el texto, ¿qué suele significar «up»?", en: "According to the text, what does 'up' often mean?" },
        options: [
          { es: "del todo, por completo", en: "completely" },
          { es: "menos", en: "less" },
          { es: "hacia arriba, siempre", en: "always upwards" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "phrasal-verbs"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-ignore", type: "bridge", onlyFor: "es", target: "ignore",
      gloss: { es: "no hacer caso a, pasar por alto", en: "to ignore" },
      question: {
        prompt: { es: "Para decir «ignoro la respuesta» (no la sé), dices…", en: "To say you don't know the answer, you say…" },
        options: ["I don't know the answer.", "I ignore the answer.", "I'm ignoring the answer."],
        answer: 0,
      },
      note: { es: "ignore = no hacer caso; «ignorar» en el sentido de no saber es «not know» o «be unaware of»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-resume", type: "bridge", onlyFor: "es", target: "resume",
      gloss: { es: "reanudar, retomar", en: "to resume" },
      question: {
        prompt: { es: "«The meeting will resume at three» significa que la reunión…", en: "'The meeting will resume at three' means the meeting…" },
        options: [
          { es: "se reanudará a las tres", en: "will start again at three" },
          { es: "se resumirá a las tres", en: "will be summarized at three" },
          { es: "terminará a las tres", en: "will end at three" },
        ],
        answer: 0,
      },
      note: { es: "resume = reanudar; «resumir» es «summarize», y el currículum, en inglés estadounidense, es «résumé»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
