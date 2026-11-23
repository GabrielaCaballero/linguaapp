import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u22",
  lang: "en",
  index: 22,
  cefr: "B2",
  title: { target: "Getting things done", es: "Resolver cosas", en: "Getting things done" },
  canDo: [
    { es: "Puedo hablar de trámites, reparaciones y servicios que encargo a otras personas.", en: "I can talk about errands, repairs and services I have done for me." },
    { es: "Puedo entender y usar los phrasal verbs más frecuentes de la vida diaria.", en: "I can understand and use the most common everyday phrasal verbs." },
    { es: "Sé usar «have / get something done» y la posición del objeto en los phrasal verbs.", en: "I can use 'have / get something done' and place the object in phrasal verbs." },
  ],
  icon: "🔧",
  items: build("en", 22, "B2", [
    // ── Phrasal verbs ────────────────────────────────────────
    {
      id: "fill-out", type: "word", pos: "verb", target: "fill out",
      gloss: { es: "llenar, completar (un formulario)", en: "to fill out (a form)" },
      accept: [{ text: "fill in" }],
      distractors: ["fill up", "feel out", "full out"],
      tags: ["phrasal-verbs", "errands"],
    },
    {
      id: "pick-up", type: "word", pos: "verb", target: "pick up",
      gloss: { es: "recoger, pasar a buscar", en: "to pick up" },
      distractors: ["pick on", "peak up", "pick out"],
      note: { es: "«I'll pick you up at eight» = te paso a buscar a las ocho." },
      tags: ["phrasal-verbs", "errands"],
    },
    {
      id: "drop-off", type: "word", pos: "verb", target: "drop off",
      gloss: { es: "dejar (a alguien o algo en un lugar)", en: "to drop off" },
      distractors: ["drop out", "drop by", "dropped of"],
      tags: ["phrasal-verbs", "errands"],
    },
    {
      id: "set-up", type: "word", pos: "verb", target: "set up",
      gloss: { es: "configurar, instalar, organizar", en: "to set up" },
      distractors: ["set off", "sit up", "upset"],
      tags: ["phrasal-verbs", "tech"],
    },
    {
      id: "figure-out", type: "word", pos: "verb", target: "figure out",
      gloss: { es: "descifrar, entender, encontrarle la vuelta", en: "to figure out" },
      distractors: ["figure up", "find out", "figurate"],
      note: { es: "find out = averiguar (un dato); figure out = entender o resolver pensando." },
      tags: ["phrasal-verbs"],
    },
    {
      id: "run-out-of", type: "phrase", pos: "phrase", target: "run out of",
      gloss: { es: "quedarse sin (algo)", en: "to run out of" },
      distractors: ["run off of", "run out from", "go out of"],
      note: { es: "We've run out of milk = se nos acabó la leche." },
      tags: ["phrasal-verbs"],
    },
    {
      id: "put-off", type: "word", pos: "verb", target: "put off",
      gloss: { es: "posponer, dejar para después", en: "to put off" },
      accept: [{ text: "postpone" }],
      distractors: ["put on", "put out", "take off"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "turn-down", type: "word", pos: "verb", target: "turn down",
      gloss: { es: "rechazar (una oferta); bajar (el volumen)", en: "to turn down" },
      distractors: ["turn off", "turn over", "turn up"],
      tags: ["phrasal-verbs"],
    },
    {
      id: "plumber", type: "word", target: "plumber", plural: "plumbers",
      gloss: { es: "plomero/a, fontanero/a", en: "plumber" },
      distractors: ["plumper", "number", "electrician"],
      note: { es: "La «b» no suena: «plámer»." },
      tags: ["errands", "home"],
    },
    {
      id: "haircut", type: "word", target: "haircut", plural: "haircuts",
      gloss: { es: "corte de pelo", en: "haircut" },
      distractors: ["hair cut's", "hairdo", "hairdresser"],
      tags: ["errands"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-had-my-hair-cut", type: "sentence", target: "I had my hair cut yesterday.",
      gloss: { es: "Ayer me corté el pelo (en la peluquería).", en: "I had my hair cut yesterday." },
      accept: [{ text: "I got my hair cut yesterday." }, { text: "I got a haircut yesterday." }],
      errors: [{ text: "I cut my hair yesterday.", feedback: { es: "Si lo hizo otra persona (el peluquero): have / get + objeto + participio." }, ruleId: "en-g-causative" }],
      distractors: ["cutted", "made", "me"],
      grammar: ["en-g-causative"],
      tags: ["causative", "errands"],
    },
    {
      id: "were-getting-the-kitchen", type: "sentence", target: "We're getting the kitchen painted next week.",
      gloss: { es: "La semana que viene nos van a pintar la cocina.", en: "We're getting the kitchen painted next week." },
      accept: [{ text: "We're having the kitchen painted next week." }, { text: "We are getting the kitchen painted next week." }],
      distractors: ["paint", "painting", "making"],
      grammar: ["en-g-causative"],
      tags: ["causative", "home"],
    },
    {
      id: "you-should-get-your-car", type: "sentence", target: "You should get your car checked before the trip.",
      gloss: { es: "Deberías llevar el auto a revisar antes del viaje.", en: "You should get your car checked before the trip." },
      accept: [{ text: "You should have your car checked before the trip." }],
      distractors: ["check", "checking", "make"],
      grammar: ["en-g-causative"],
      tags: ["causative", "travel"],
    },
    {
      id: "can-you-pick-me-up", type: "sentence", target: "Can you pick me up at the airport?",
      gloss: { es: "¿Me puedes pasar a buscar al aeropuerto?", en: "Can you pick me up at the airport?" },
      accept: [{ text: "Could you pick me up at the airport?" }],
      errors: [{ text: "Can you pick up me at the airport?", feedback: { es: "Con un pronombre, va en medio del phrasal verb: pick me up." }, ruleId: "en-g-phrasal-verbs" }],
      distractors: ["for", "take", "in"],
      grammar: ["en-g-phrasal-verbs"],
      annot: { me: { es: "pronombre: va entre «pick» y «up»", en: "pronoun: goes between 'pick' and 'up'" } },
      tags: ["phrasal-verbs", "travel"],
    },
    {
      id: "please-fill-it-out", type: "sentence", target: "Please fill out this form and sign it.",
      gloss: { es: "Por favor, llena este formulario y fírmalo.", en: "Please fill out this form and sign it." },
      accept: [{ text: "Please fill in this form and sign it." }, { text: "Please fill this form out and sign it." }],
      distractors: ["up", "firm", "full"],
      grammar: ["en-g-phrasal-verbs"],
      tags: ["phrasal-verbs", "errands"],
    },
    {
      id: "weve-run-out-of", type: "sentence", target: "We've run out of coffee.",
      gloss: { es: "Se nos acabó el café.", en: "We've run out of coffee." },
      accept: [{ text: "We have run out of coffee." }, { text: "We ran out of coffee." }],
      distractors: ["from", "finished", "the"],
      grammar: ["en-g-phrasal-verbs"],
      tags: ["phrasal-verbs", "food"],
    },
    {
      id: "she-turned-it-down", type: "sentence", target: "They offered her the job, but she turned it down.",
      gloss: { es: "Le ofrecieron el trabajo, pero lo rechazó.", en: "They offered her the job, but she turned it down." },
      errors: [{ text: "They offered her the job, but she turned down it.", feedback: { es: "El pronombre va en medio: turned it down." }, ruleId: "en-g-phrasal-verbs" }],
      distractors: ["off", "him", "turn"],
      grammar: ["en-g-phrasal-verbs"],
      tags: ["phrasal-verbs", "work"],
    },
    {
      id: "stop-putting-it-off", type: "sentence", target: "Stop putting it off and call the plumber!",
      gloss: { es: "¡Deja de postergarlo y llama al plomero!", en: "Stop putting it off and call the plumber!" },
      distractors: ["to put", "on", "plumper"],
      grammar: ["en-g-phrasal-verbs", "en-g-gerund-infinitive"],
      tags: ["phrasal-verbs", "home"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-causative", type: "pattern", target: "have / get + objeto + participio",
      gloss: { es: "have / get something done (encargar algo)", en: "have / get something done" },
      pattern: {
        rule: {
          es: "Cuando otra persona hace algo por ti (normalmente un servicio), el inglés usa have / get + objeto + participio: I had my car fixed. En español decimos simplemente «arreglé el auto» o «me cortaron el pelo». «get» es más informal.",
          en: "When someone else does something for you (usually a service), English uses have / get + object + past participle: I had my car fixed. 'get' is more informal.",
        },
        table: [["lo haces tú", "lo encargas"], ["I cleaned the carpet.", "I had the carpet cleaned."], ["I'll fix my phone.", "I'll get my phone fixed."]],
      },
      question: {
        prompt: { es: "Un técnico te va a instalar internet: «I'm ___ tomorrow.»", en: "A technician is installing your internet: 'I'm ___ tomorrow.'" },
        options: ["having internet installed", "installing internet by me", "having installed internet", "making internet install"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-causative"], tags: ["grammar", "causative"],
    },
    {
      id: "pat-phrasal-verbs", type: "pattern", target: "pick up the kids · pick them up",
      gloss: { es: "phrasal verbs: dónde va el objeto", en: "phrasal verbs: object position" },
      pattern: {
        rule: {
          es: "Un phrasal verb es verbo + partícula (up, out, off…) con un significado propio. En muchos, el objeto puede ir antes o después de la partícula (fill out the form / fill the form out), pero si es un pronombre siempre va en medio: fill it out, pick them up.",
          en: "A phrasal verb is verb + particle (up, out, off…) with its own meaning. In many of them the object can go before or after the particle (fill out the form / fill the form out), but a pronoun always goes in the middle: fill it out, pick them up.",
        },
        table: [["sustantivo", "pronombre"], ["turn off the TV / turn the TV off", "turn it off"], ["pick up the kids / pick the kids up", "pick them up"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["The music is too loud. Can you turn it down?", "The music is too loud. Can you turn down it?", "The music is too loud. Can you down turn it?", "The music is too loud. Can you turn it under?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-phrasal-verbs"], tags: ["grammar", "phrasal-verbs"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-errands", type: "dialogue", target: "Can you drop off the kids at school?",
      gloss: { es: "¿Puedes dejar a los niños en la escuela?", en: "Can you drop off the kids at school?" },
      turns: [
        { who: "A", target: "I've got a crazy day tomorrow. Can you drop off the kids at school?", gloss: { es: "Mañana tengo un día de locos. ¿Puedes dejar a los niños en la escuela?", en: "I've got a crazy day tomorrow. Can you drop off the kids at school?" } },
        { who: "B", target: "Sure. And I can pick them up too. What else do you have to do?", gloss: { es: "Claro. Y también puedo ir a buscarlos. ¿Qué más tienes que hacer?", en: "Sure. And I can pick them up too. What else do you have to do?" } },
        { who: "A", target: "I'm getting the car repaired, and the plumber is coming at four.", gloss: { es: "Voy a llevar el auto al taller y el plomero viene a las cuatro.", en: "I'm getting the car repaired, and the plumber is coming at four." } },
        { who: "B", target: "Don't worry, we'll figure it out.", gloss: { es: "No te preocupes, ya lo resolvemos.", en: "Don't worry, we'll figure it out." } },
      ],
      question: {
        prompt: { es: "¿Qué va a hacer B?", en: "What is B going to do?" },
        options: [
          { es: "Llevar y traer a los niños", en: "Take the kids to school and pick them up" },
          { es: "Arreglar el auto", en: "Fix the car" },
          { es: "Esperar al plomero", en: "Wait for the plumber" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "errands", "phrasal-verbs"],
    },
    {
      id: "lis-dry-cleaner", type: "listening", target: "Your jacket will be ready on Thursday. If you can't pick it up before six, we can have it delivered to your home for five dollars.",
      gloss: { es: "Su chaqueta estará lista el jueves. Si no puede pasar a buscarla antes de las seis, se la podemos mandar a su casa por cinco dólares.", en: "Your jacket will be ready on Thursday. If you can't pick it up before six, we can have it delivered to your home for five dollars." },
      question: {
        prompt: { es: "¿Qué ofrecen si no puedes pasar a tiempo?", en: "What do they offer if you can't come in time?" },
        options: [
          { es: "Enviarla a tu casa por cinco dólares", en: "Delivery for five dollars" },
          { es: "Guardarla gratis una semana", en: "Keeping it free for a week" },
          { es: "Abrir más tarde", en: "Staying open later" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "errands", "causative"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-firm", type: "bridge", onlyFor: "es", target: "sign",
      gloss: { es: "firmar", en: "sign (write your name)" },
      question: {
        prompt: { es: "«Firme aquí, por favor» es…", en: "How do you ask someone to put their signature here?" },
        options: ["Sign here, please.", "Firm here, please.", "Signature here you, please."],
        answer: 0,
      },
      note: { es: "firmar = sign, la firma = signature; «firm» es una empresa (a law firm) o el adjetivo «firme»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "errands"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "errand", type: "word", target: "errand",
      gloss: { es: "mandado, diligencia", en: "errand" },
      distractors: ["error", "errant", "errant's"],
      note: { es: "«run errands» = hacer mandados." },
      tags: ["errands"],
    },
    {
      id: "get-rid-of", type: "phrase", pos: "phrase", target: "get rid of",
      gloss: { es: "deshacerse de", en: "to get rid of" },
      distractors: ["get red of", "get ride of", "get rid from"],
      tags: ["phrasal-verbs", "home"],
    },
  ]),
};
