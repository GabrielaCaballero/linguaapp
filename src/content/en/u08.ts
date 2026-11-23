import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u08",
  lang: "en",
  index: 8,
  cefr: "A1.2",
  title: { target: "Free time", es: "Tiempo libre", en: "Free time" },
  canDo: [
    { es: "Puedo hablar de lo que me gusta hacer en mi tiempo libre.", en: "I can talk about what I like doing in my free time." },
    { es: "Puedo decir con qué frecuencia hago algo y qué estoy haciendo ahora.", en: "I can say how often I do things and what I'm doing right now." },
    { es: "Sé usar like / love / hate + -ing y el presente continuo.", en: "I can use like / love / hate + -ing and the present continuous." },
  ],
  icon: "🎸",
  items: build("en", 8, "A1.2", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-ing", type: "sound", target: "running",
      gloss: { es: "correr (corriendo)", en: "running" },
      distractors: ["runnin", "runing", "runnink"],
      note: { es: "En «-ing» la «g» casi no suena: es una «n» nasal, como en «tengo»; y run dobla la n: running." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "ing"],
    },

    // ── Hobbies ──────────────────────────────────────────────
    {
      id: "free-time", type: "word", target: "free time",
      gloss: { es: "tiempo libre", en: "free time" },
      accept: [{ text: "spare time" }],
      distractors: ["free hour", "time free", "freedom"],
      tags: ["hobbies"],
    },
    {
      id: "play-soccer", type: "phrase", pos: "phrase", target: "play soccer",
      gloss: { es: "jugar al fútbol", en: "to play soccer" },
      accept: [{ text: "play football" }],
      distractors: ["play to soccer", "do soccer", "practice soccer"],
      note: { es: "En Estados Unidos «football» es el fútbol americano; el fútbol es «soccer»." },
      tags: ["hobbies", "sports"],
    },
    {
      id: "go-swimming", type: "phrase", pos: "phrase", target: "go swimming",
      gloss: { es: "ir a nadar", en: "to go swimming" },
      distractors: ["go to swim", "go to swimming", "make swimming"],
      note: { es: "go + -ing para actividades: go swimming, go running, go shopping." },
      tags: ["hobbies", "sports"],
    },
    {
      id: "work-out", type: "phrase", pos: "phrase", target: "work out",
      gloss: { es: "hacer ejercicio (en el gimnasio)", en: "to work out" },
      accept: [{ text: "exercise" }],
      distractors: ["make exercise", "do gym", "work up"],
      errors: [{ text: "make exercise", feedback: { es: "Se dice «work out» o «exercise», nunca «make exercise»." } }],
      tags: ["hobbies", "sports", "health"],
    },
    {
      id: "hang-out", type: "phrase", pos: "phrase", target: "hang out with friends",
      gloss: { es: "salir / pasar el rato con amigos", en: "to hang out with friends" },
      accept: [{ text: "spend time with friends" }],
      distractors: ["hang on with friends", "go out of friends", "hang with out friends"],
      tags: ["hobbies", "chunk"],
    },
    {
      id: "read", type: "word", pos: "verb", target: "read",
      gloss: { es: "leer", en: "to read" },
      forms: { he: "reads", past: "read" },
      distractors: ["red", "ride", "reed"],
      tags: ["hobbies"],
    },
    {
      id: "cook", type: "word", pos: "verb", target: "cook",
      gloss: { es: "cocinar", en: "to cook" },
      forms: { he: "cooks", past: "cooked" },
      distractors: ["cookie", "cooker", "kick"],
      note: { es: "cook es también «cocinero/a»; «cooker» es la estufa (Reino Unido)." },
      tags: ["hobbies", "food"],
    },
    {
      id: "movie", type: "word", target: "movie", plural: "movies",
      gloss: { es: "película", en: "movie" },
      accept: [{ text: "film" }],
      distractors: ["move", "film's", "moving"],
      note: { es: "«go to the movies» = ir al cine." },
      tags: ["hobbies"],
    },
    {
      id: "always", type: "word", pos: "adv", target: "always",
      gloss: { es: "siempre", en: "always" },
      distractors: ["all ways", "usually", "also"],
      tags: ["frequency"],
    },
    {
      id: "usually", type: "word", pos: "adv", target: "usually",
      gloss: { es: "normalmente, por lo general", en: "usually" },
      distractors: ["usual", "always", "used"],
      tags: ["frequency"],
    },
    {
      id: "sometimes", type: "word", pos: "adv", target: "sometimes",
      gloss: { es: "a veces", en: "sometimes" },
      distractors: ["some times", "sometime", "someday"],
      tags: ["frequency"],
    },
    {
      id: "never", type: "word", pos: "adv", target: "never",
      gloss: { es: "nunca", en: "never" },
      distractors: ["ever", "not ever", "neither"],
      note: { es: "«never» ya es negativo: I never drink coffee (no «I don't never»)." },
      tags: ["frequency"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-love-cooking", type: "sentence", target: "I love cooking for my friends.",
      gloss: { es: "Me encanta cocinar para mis amigos.", en: "I love cooking for my friends." },
      accept: [{ text: "I love to cook for my friends." }],
      errors: [{ text: "I love cook for my friends.", feedback: { es: "Después de love / like / hate: verbo con -ing (cooking) o «to» + verbo." }, ruleId: "en-g-like-ing" }],
      distractors: ["cook", "me", "to"],
      grammar: ["en-g-like-ing"],
      tags: ["hobbies"],
    },
    {
      id: "she-doesnt-like-running", type: "sentence", target: "She doesn't like running.",
      gloss: { es: "No le gusta correr.", en: "She doesn't like running." },
      accept: [{ text: "She does not like running." }, { text: "She doesn't like to run." }],
      errors: [{ text: "She don't like running.", feedback: { es: "Con she: doesn't." }, ruleId: "en-g-do-questions" }],
      distractors: ["don't", "likes", "run"],
      grammar: ["en-g-like-ing"],
      tags: ["hobbies", "negation"],
    },
    {
      id: "do-you-like-movies", type: "sentence", target: "Do you like horror movies?",
      gloss: { es: "¿Te gustan las películas de terror?", en: "Do you like horror movies?" },
      errors: [{ text: "Do you like the horror movies?", feedback: { es: "Para hablar en general, sin «the»: Do you like horror movies?" } }],
      distractors: ["the", "Are", "likes"],
      note: { es: "«Me gusta(n)» es «I like»: el que siente es el sujeto." },
      tags: ["hobbies", "questions"],
    },
    {
      id: "i-usually-go-swimming", type: "sentence", target: "I usually go swimming on Saturdays.",
      gloss: { es: "Normalmente voy a nadar los sábados.", en: "I usually go swimming on Saturdays." },
      accept: [{ text: "On Saturdays I usually go swimming." }],
      errors: [{ text: "I go usually swimming on Saturdays.", feedback: { es: "Los adverbios de frecuencia van antes del verbo principal: I usually go." }, ruleId: "en-g-frequency" }],
      distractors: ["to", "in", "use"],
      grammar: ["en-g-frequency"],
      tags: ["hobbies", "frequency"],
    },
    {
      id: "hes-always-late", type: "sentence", target: "He's always late for soccer practice.",
      gloss: { es: "Siempre llega tarde al entrenamiento de fútbol.", en: "He's always late for soccer practice." },
      accept: [{ text: "He is always late for soccer practice." }],
      errors: [{ text: "He always is late for soccer practice.", feedback: { es: "Con «be», el adverbio va después: He's always late." }, ruleId: "en-g-frequency" }],
      distractors: ["always's", "to", "lately"],
      grammar: ["en-g-frequency"],
      tags: ["frequency", "sports"],
    },
    {
      id: "im-watching-a-movie", type: "sentence", target: "I'm watching a movie right now.",
      gloss: { es: "Estoy viendo una película ahora mismo.", en: "I'm watching a movie right now." },
      accept: [{ text: "I am watching a movie right now." }, { text: "I'm watching a film right now." }],
      errors: [{ text: "I watching a movie right now.", feedback: { es: "Falta «am»: I'm watching." }, ruleId: "en-g-present-continuous" }],
      distractors: ["watch", "see", "now's"],
      grammar: ["en-g-present-continuous"],
      tags: ["hobbies", "present-continuous"],
    },
    {
      id: "what-are-you-doing", type: "sentence", target: "What are you doing this weekend?",
      gloss: { es: "¿Qué vas a hacer este fin de semana?", en: "What are you doing this weekend?" },
      accept: [{ text: "What are you doing on the weekend?" }],
      errors: [{ text: "What do you do this weekend?", feedback: { es: "Para planes ya organizados se usa el presente continuo: What are you doing…?" }, ruleId: "en-g-present-continuous" }],
      distractors: ["do", "make", "is"],
      grammar: ["en-g-present-continuous"],
      note: { es: "El presente continuo también sirve para planes cercanos ya decididos." },
      tags: ["plans", "present-continuous"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-like-ing", type: "pattern", target: "I like reading · I love dancing · I hate cleaning",
      gloss: { es: "like / love / hate + -ing", en: "like / love / hate + -ing" },
      pattern: {
        rule: {
          es: "Después de like, love, hate y enjoy, la actividad va con -ing: I enjoy reading. Con like, love y hate también vale «to» + verbo. En inglés la persona que siente el gusto es el sujeto: «Me gusta» = I like.",
          en: "After like, love, hate and enjoy, the activity takes -ing: I enjoy reading. With like, love and hate 'to' + verb is also fine. The person who likes something is the subject.",
        },
        table: [["español", "inglés"], ["Me gusta leer.", "I like reading."], ["A Ana le encanta bailar.", "Ana loves dancing."], ["Odio limpiar.", "I hate cleaning."]],
      },
      question: {
        prompt: { es: "«A mi hermano le gusta jugar videojuegos» es…", en: "Which means 'My brother likes playing video games'?" },
        options: ["My brother likes playing video games.", "My brother like play video games.", "To my brother likes playing video games.", "My brother likes play video games."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-like-ing"], tags: ["grammar", "likes"],
    },
    {
      id: "pat-frequency", type: "pattern", target: "always · usually · often · sometimes · never",
      gloss: { es: "adverbios de frecuencia", en: "adverbs of frequency" },
      pattern: {
        rule: {
          es: "Los adverbios de frecuencia van antes del verbo principal (I often cook), pero después de «be» (She's never late).",
          en: "Frequency adverbs go before the main verb (I often cook) but after 'be' (She's never late).",
        },
        table: [["100 %", "always"], ["", "usually"], ["", "often"], ["", "sometimes"], ["0 %", "never"]],
      },
      question: {
        prompt: { es: "¿Cuál está bien?", en: "Which one is correct?" },
        options: ["We sometimes eat out.", "We eat sometimes out.", "Sometimes we eat out sometimes.", "We eat out sometime."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-frequency"], tags: ["grammar", "frequency"],
    },
    {
      id: "pat-present-continuous", type: "pattern", target: "I'm working · she's reading",
      gloss: { es: "el presente continuo (estar + -ndo)", en: "the present continuous" },
      pattern: {
        rule: {
          es: "Para lo que pasa ahora mismo se usa am/is/are + verbo-ing: I'm working (estoy trabajando). Para rutinas se usa el presente simple: I work every day.",
          en: "For what's happening right now, use am/is/are + verb-ing: I'm working. For routines, use the present simple: I work every day.",
        },
        table: [["ahora", "rutina"], ["I'm cooking now.", "I cook every day."], ["She's reading.", "She reads a lot."]],
      },
      question: {
        prompt: { es: "Te llaman y estás en la ducha: «Sorry, I ___ a shower!»", en: "Someone calls while you're in the shower: 'Sorry, I ___ a shower!'" },
        options: ["'m taking", "take", "takes", "taking"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-present-continuous"], tags: ["grammar", "present-continuous"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-free-time", type: "dialogue", target: "What do you do in your free time?",
      gloss: { es: "¿Qué haces en tu tiempo libre?", en: "What do you do in your free time?" },
      turns: [
        { who: "A", target: "What do you do in your free time?", gloss: { es: "¿Qué haces en tu tiempo libre?", en: "What do you do in your free time?" } },
        { who: "B", target: "I love playing the guitar. And I go running three times a week.", gloss: { es: "Me encanta tocar la guitarra. Y salgo a correr tres veces por semana.", en: "I love playing the guitar. And I go running three times a week." } },
        { who: "A", target: "Really? I hate running! I prefer watching movies.", gloss: { es: "¿En serio? ¡Odio correr! Prefiero ver películas.", en: "Really? I hate running! I prefer watching movies." } },
        { who: "B", target: "Well, there's a great movie on tonight. Want to come?", gloss: { es: "Bueno, esta noche dan una película buenísima. ¿Quieres venir?", en: "Well, there's a great movie on tonight. Want to come?" } },
      ],
      question: {
        prompt: { es: "¿Con qué frecuencia sale a correr B?", en: "How often does B go running?" },
        options: [
          { es: "Tres veces por semana", en: "Three times a week" },
          { es: "Todos los días", en: "Every day" },
          { es: "Nunca", en: "Never" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "hobbies"],
    },
    {
      id: "lis-phone-call", type: "listening", target: "Hi, Mom! I can't talk now. I'm at the gym and I'm working out with Jake. I'll call you later!",
      gloss: { es: "¡Hola, mamá! No puedo hablar ahora. Estoy en el gimnasio haciendo ejercicio con Jake. ¡Te llamo más tarde!", en: "Hi, Mom! I can't talk now. I'm at the gym and I'm working out with Jake. I'll call you later!" },
      question: {
        prompt: { es: "¿Qué está haciendo ahora?", en: "What is the speaker doing right now?" },
        options: [
          { es: "Hace ejercicio en el gimnasio", en: "Working out at the gym" },
          { es: "Ve una película", en: "Watching a movie" },
          { es: "Cocina con Jake", en: "Cooking with Jake" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "present-continuous"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-practice", type: "bridge", onlyFor: "es", target: "practice",
      gloss: { es: "el entrenamiento; practicar", en: "practice (training)" },
      question: {
        prompt: { es: "«I have soccer practice at six» significa…", en: "'I have soccer practice at six' means…" },
        options: [
          { es: "Tengo entrenamiento de fútbol a las seis.", en: "I have soccer training at six." },
          { es: "Tengo un partido práctico a las seis.", en: "I have a friendly match at six." },
          { es: "Practico fútbol hace seis años.", en: "I've played soccer for six years." },
        ],
        answer: 0,
      },
      note: { es: "En Estados Unidos «practice» es el entrenamiento; «práctico/a» se dice «practical» o «handy»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "sports"],
    },
  ]),
};
