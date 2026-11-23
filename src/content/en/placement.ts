import type { PlacementItem } from "../schema";
import { spreadAnswers } from "../build";

// 42 items · 6 per band (A0, A1.1, A1.2, A2, B1, B2, C1) · per band: 2 vocab, 2 grammar,
// 1 listening, 1 reading. False friends for Spanish speakers flagged (weighted ×1.5 for es).
// b: A0 −2.5 · A1.1 −1.5 · A1.2 −0.5 · A2 +0.5 · B1 +1.5 · B2 +2.5 · C1 +3.3 (±0.4 within band).
// Authors write the key as option 0; spreadAnswers rotates it deterministically.
const meaning = { es: "¿Qué significa?", en: "What does it mean?" };
const complete = { es: "Completa la frase.", en: "Complete the sentence." };

const bank: PlacementItem[] = [
  // ── A0 ─────────────────────────────────────────────────────
  {
    id: "en-p-01", lang: "en", cefr: "A0", b: -2.8, skill: "vocab", kind: "mcq", stem: "Good night!",
    mcq: {
      prompt: meaning,
      options: [
        { es: "¡Buenas noches! (al despedirse)", en: "Good night! (when leaving)" },
        { es: "¡Buenos días!", en: "Good morning!" },
        { es: "¡Hasta luego!", en: "See you later!" },
        { es: "¡Gracias!", en: "Thank you!" },
      ],
      answer: 0,
    },
    seeds: ["en-u01-good-night", "en-u01-good-evening", "en-u01-good-morning"],
  },
  {
    id: "en-p-02", lang: "en", cefr: "A0", b: -2.3, skill: "vocab", kind: "mcq", stem: "You're welcome.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "De nada.", en: "No problem." },
        { es: "Bienvenido.", en: "Welcome." },
        { es: "Por favor.", en: "Please." },
        { es: "Perdón.", en: "Sorry." },
      ],
      answer: 0,
    },
    seeds: ["en-u01-youre-welcome", "en-u01-thank-you"],
  },
  {
    id: "en-p-03", lang: "en", cefr: "A0", b: -2.6, skill: "grammar", kind: "cloze", stem: "Hi! ___ Anna. Nice to meet you.",
    mcq: { prompt: complete, options: ["I'm", "Am", "Me", "My"], answer: 0 },
    seeds: ["en-u01-pat-im-youre", "en-u01-my-name-is", "en-u01-nice-to-meet-you"],
  },
  {
    id: "en-p-04", lang: "en", cefr: "A0", b: -2.2, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: { es: "Quieres saber cómo se llama alguien. ¿Qué preguntas?", en: "You want to know someone's name. What do you ask?" },
      options: ["What's your name?", "How is your name?", "Who is your name?", "What your name?"],
      answer: 0,
    },
    seeds: ["en-u01-whats-your-name"],
  },
  {
    id: "en-p-05", lang: "en", cefr: "A0", b: -2.5, skill: "listening", kind: "listen", spoken: "See you tomorrow!",
    mcq: {
      prompt: { es: "Escucha. ¿Qué dice?", en: "Listen. What does the speaker say?" },
      options: [
        { es: "¡Hasta mañana!", en: "Until tomorrow!" },
        { es: "¡Hasta luego!", en: "Until later!" },
        { es: "¡Buenas tardes!", en: "Good afternoon!" },
        { es: "¡Mucho gusto!", en: "Pleased to meet you!" },
      ],
      answer: 0,
    },
    seeds: ["en-u01-see-you-tomorrow", "en-u01-see-you-later"],
  },
  {
    id: "en-p-06", lang: "en", cefr: "A0", b: -2.4, skill: "reading", kind: "mcq", stem: "Hi, I'm Tom. I'm from Canada. Nice to meet you!",
    mcq: {
      prompt: { es: "¿De dónde es Tom?", en: "Where is Tom from?" },
      options: [
        { es: "De Canadá", en: "Canada" },
        { es: "De Estados Unidos", en: "The United States" },
        { es: "De México", en: "Mexico" },
        { es: "No lo dice", en: "It doesn't say" },
      ],
      answer: 0,
    },
    seeds: ["en-u01-hi", "en-u01-nice-to-meet-you"],
  },

  // ── A1.1 ───────────────────────────────────────────────────
  {
    id: "en-p-07", lang: "en", cefr: "A1.1", b: -1.7, skill: "vocab", kind: "mcq", stem: "my daughter",
    mcq: {
      prompt: meaning,
      options: [
        { es: "mi hija", en: "my female child" },
        { es: "mi hermana", en: "my sister" },
        { es: "mi tía", en: "my aunt" },
        { es: "mi doctora", en: "my doctor" },
      ],
      answer: 0,
    },
    seeds: ["en-u05-daughter", "en-u05-son", "en-u05-sister"],
  },
  {
    id: "en-p-08", lang: "en", cefr: "A1.1", b: -1.3, skill: "vocab", kind: "mcq", stem: "a large coffee", falseFriend: true,
    mcq: {
      prompt: meaning,
      options: [
        { es: "un café grande", en: "a big coffee" },
        { es: "un café largo (con más agua)", en: "a long coffee (with more water)" },
        { es: "un café caro", en: "an expensive coffee" },
        { es: "un café con leche", en: "a coffee with milk" },
      ],
      answer: 0,
    },
    seeds: ["en-u04-br-large", "en-u04-large", "en-u04-coffee"],
  },
  {
    id: "en-p-09", lang: "en", cefr: "A1.1", b: -1.6, skill: "grammar", kind: "cloze", stem: "My sister is ___ engineer.",
    mcq: { prompt: complete, options: ["an", "a", "the", "one"], answer: 0 },
    seeds: ["en-u02-shes-an-engineer", "en-u02-pat-a-an", "en-u02-engineer"],
  },
  {
    id: "en-p-10", lang: "en", cefr: "A1.1", b: -1.2, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: { es: "¿Cómo dices «Tengo treinta años»?", en: "How do you say your age (thirty)?" },
      options: ["I'm thirty.", "I have thirty years.", "I'm thirty years.", "I have thirty."],
      answer: 0,
    },
    seeds: ["en-u03-im-thirty-two", "en-u03-pat-age", "en-u03-how-old-are-you"],
  },
  {
    id: "en-p-11", lang: "en", cefr: "A1.1", b: -1.5, skill: "listening", kind: "listen", spoken: "That's fourteen dollars, please.",
    mcq: {
      prompt: { es: "Escucha. ¿Cuánto hay que pagar?", en: "Listen. How much is it?" },
      options: [
        { es: "14 dólares", en: "$14" },
        { es: "40 dólares", en: "$40" },
        { es: "4 dólares", en: "$4" },
        { es: "13 dólares", en: "$13" },
      ],
      answer: 0,
    },
    seeds: ["en-u03-lis-price", "en-u03-its-five-dollars", "en-u03-s-thirteen"],
  },
  {
    id: "en-p-12", lang: "en", cefr: "A1.1", b: -1.4, skill: "reading", kind: "mcq", stem: "This is my brother, Leo. He's a nurse. His wife, Ana, is from Chile.",
    mcq: {
      prompt: { es: "¿Quién es de Chile?", en: "Who is from Chile?" },
      options: [
        { es: "La esposa de Leo", en: "Leo's wife" },
        { es: "Leo", en: "Leo" },
        { es: "La hermana de Leo", en: "Leo's sister" },
        { es: "Quien escribe", en: "The writer" },
      ],
      answer: 0,
    },
    seeds: ["en-u05-pat-possessives", "en-u05-her-husband", "en-u05-this-is-my-sister"],
  },

  // ── A1.2 ───────────────────────────────────────────────────
  {
    id: "en-p-13", lang: "en", cefr: "A1.2", b: -0.7, skill: "vocab", kind: "mcq", stem: "I usually get up early.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "Normalmente me levanto temprano.", en: "I normally get out of bed early." },
        { es: "Siempre me levanto tarde.", en: "I always get up late." },
        { es: "Normalmente me despierto tarde.", en: "I normally wake up late." },
        { es: "A veces me acuesto temprano.", en: "I sometimes go to bed early." },
      ],
      answer: 0,
    },
    seeds: ["en-u07-get-up", "en-u07-early", "en-u08-usually"],
  },
  {
    id: "en-p-14", lang: "en", cefr: "A1.2", b: -0.3, skill: "vocab", kind: "mcq", stem: "I attend a yoga class on Mondays.", falseFriend: true,
    mcq: {
      prompt: meaning,
      options: [
        { es: "Voy a una clase de yoga los lunes.", en: "I go to a yoga class on Mondays." },
        { es: "Atiendo a los clientes de una clase de yoga.", en: "I serve customers at a yoga class." },
        { es: "Doy una clase de yoga los lunes.", en: "I teach a yoga class on Mondays." },
        { es: "Espero una clase de yoga los lunes.", en: "I wait for a yoga class on Mondays." },
      ],
      answer: 0,
    },
    seeds: ["en-u07-br-attend"],
  },
  {
    id: "en-p-15", lang: "en", cefr: "A1.2", b: -0.6, skill: "grammar", kind: "cloze", stem: "My brother ___ in a bank.",
    mcq: { prompt: complete, options: ["works", "work", "is work", "working"], answer: 0 },
    seeds: ["en-u07-she-works-in-a-bank", "en-u07-pat-present-simple", "en-u07-tab-work"],
  },
  {
    id: "en-p-16", lang: "en", cefr: "A1.2", b: -0.2, skill: "grammar", kind: "cloze", stem: "How ___ apples do you want?",
    mcq: { prompt: complete, options: ["many", "much", "lot", "any"], answer: 0 },
    seeds: ["en-u09-how-many-apples", "en-u09-pat-much-many", "en-u09-how-much-cheese"],
  },
  {
    id: "en-p-17", lang: "en", cefr: "A1.2", b: -0.5, skill: "listening", kind: "listen", spoken: "Sorry, I can't talk right now. I'm cooking dinner.",
    mcq: {
      prompt: { es: "Escucha. ¿Qué está haciendo?", en: "Listen. What is the speaker doing?" },
      options: [
        { es: "Está preparando la cena", en: "Making dinner" },
        { es: "Está cenando en un restaurante", en: "Eating out" },
        { es: "Está hablando por teléfono con su mamá", en: "Calling Mom" },
        { es: "Está comprando comida", en: "Buying food" },
      ],
      answer: 0,
    },
    seeds: ["en-u08-im-watching-a-movie", "en-u08-pat-present-continuous", "en-u08-cook"],
  },
  {
    id: "en-p-18", lang: "en", cefr: "A1.2", b: -0.8, skill: "reading", kind: "mcq", stem: "Is there a pharmacy near here? — Yes, there's one on Oak Street, next to the bank.",
    mcq: {
      prompt: { es: "¿Dónde está la farmacia?", en: "Where is the pharmacy?" },
      options: [
        { es: "En Oak Street, al lado del banco", en: "On Oak Street, beside the bank" },
        { es: "Enfrente del banco", en: "Across from the bank" },
        { es: "Dentro del banco", en: "Inside the bank" },
        { es: "No hay ninguna cerca", en: "There isn't one nearby" },
      ],
      answer: 0,
    },
    seeds: ["en-u06-is-there-a-pharmacy", "en-u06-next-to", "en-u06-pharmacy"],
  },

  // ── A2 ─────────────────────────────────────────────────────
  {
    id: "en-p-19", lang: "en", cefr: "A2", b: 0.3, skill: "vocab", kind: "mcq", stem: "I didn't go out last night.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "Anoche no salí.", en: "I stayed in yesterday evening." },
        { es: "No salí la última noche del viaje.", en: "I didn't go out on the final night." },
        { es: "Esta noche no voy a salir.", en: "I'm not going out tonight." },
        { es: "Anoche llegué tarde.", en: "I got home late yesterday." },
      ],
      answer: 0,
    },
    seeds: ["en-u10-last-night", "en-u10-i-didnt-go-out"],
  },
  {
    id: "en-p-20", lang: "en", cefr: "A2", b: 0.8, skill: "vocab", kind: "mcq", stem: "That's a sensible idea.", falseFriend: true,
    mcq: {
      prompt: meaning,
      options: [
        { es: "Es una idea sensata.", en: "It's a reasonable idea." },
        { es: "Es una idea delicada.", en: "It's a delicate idea." },
        { es: "Es una idea muy emotiva.", en: "It's a very emotional idea." },
        { es: "Es una idea tonta.", en: "It's a silly idea." },
      ],
      answer: 0,
    },
    seeds: ["en-u12-br-sensible"],
  },
  {
    id: "en-p-21", lang: "en", cefr: "A2", b: 0.4, skill: "grammar", kind: "cloze", stem: "Did you ___ the game yesterday?",
    mcq: { prompt: complete, options: ["see", "saw", "seen", "seeing"], answer: 0 },
    seeds: ["en-u10-pat-past-simple", "en-u10-did-you-have-fun", "en-u10-saw"],
  },
  {
    id: "en-p-22", lang: "en", cefr: "A2", b: 0.7, skill: "grammar", kind: "cloze", stem: "When I was a kid, I ___ play in the street every day.",
    mcq: { prompt: complete, options: ["used to", "use to", "was use to", "am used to"], answer: 0 },
    seeds: ["en-u11-i-used-to-play", "en-u11-pat-used-to", "en-u11-when-i-was-little"],
  },
  {
    id: "en-p-23", lang: "en", cefr: "A2", b: 0.5, skill: "listening", kind: "listen", spoken: "Look at those dark clouds. It's going to rain, so take an umbrella.",
    mcq: {
      prompt: { es: "Escucha. ¿Qué te aconseja?", en: "Listen. What does the speaker advise?" },
      options: [
        { es: "Llevar un paraguas porque va a llover", en: "Take an umbrella because rain is coming" },
        { es: "Quedarse en casa porque hace frío", en: "Stay home because it's cold" },
        { es: "Salir porque está soleado", en: "Go out because it's sunny" },
        { es: "Mirar el pronóstico mañana", en: "Check the forecast tomorrow" },
      ],
      answer: 0,
    },
    seeds: ["en-u12-pat-going-to", "en-u12-its-raining"],
  },
  {
    id: "en-p-24", lang: "en", cefr: "A2", b: 0.2, skill: "reading", kind: "mcq", stem: "Our flight was delayed two hours, so we got to the hotel at midnight. Luckily, they kept our room.",
    mcq: {
      prompt: { es: "¿Por qué llegaron tarde al hotel?", en: "Why did they arrive late at the hotel?" },
      options: [
        { es: "El vuelo se retrasó", en: "The flight was late" },
        { es: "Se perdieron", en: "They got lost" },
        { es: "No tenían reserva", en: "They had no booking" },
        { es: "Perdieron el vuelo", en: "They missed the flight" },
      ],
      answer: 0,
    },
    seeds: ["en-u12-my-flight-is-delayed", "en-u12-delayed", "en-u12-flight"],
  },

  // ── B1 ─────────────────────────────────────────────────────
  {
    id: "en-p-25", lang: "en", cefr: "B1", b: 1.3, skill: "vocab", kind: "mcq", stem: "I was so embarrassed!", falseFriend: true,
    mcq: {
      prompt: meaning,
      options: [
        { es: "¡Qué vergüenza me dio!", en: "I felt so awkward!" },
        { es: "¡Estaba embarazada!", en: "I was pregnant!" },
        { es: "¡Estaba muy enojada!", en: "I was so angry!" },
        { es: "¡Estaba muy confundida!", en: "I was so confused!" },
      ],
      answer: 0,
    },
    seeds: ["en-u13-br-embarrassed"],
  },
  {
    id: "en-p-26", lang: "en", cefr: "B1", b: 1.6, skill: "vocab", kind: "mcq", stem: "The deadline is Friday.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "El plazo de entrega vence el viernes.", en: "The work is due on Friday." },
        { es: "La reunión es el viernes.", en: "The meeting is on Friday." },
        { es: "El viernes es feriado.", en: "Friday is a holiday." },
        { es: "El contrato termina el viernes.", en: "The contract ends on Friday." },
      ],
      answer: 0,
    },
    seeds: ["en-u14-deadline", "en-u14-meeting"],
  },
  {
    id: "en-p-27", lang: "en", cefr: "B1", b: 1.4, skill: "grammar", kind: "cloze", stem: "I've worked here ___ 2019.",
    mcq: { prompt: complete, options: ["since", "for", "from", "during"], answer: 0 },
    seeds: ["en-u14-pat-for-since", "en-u14-shes-been-my-boss-since", "en-u14-ive-worked-here-for"],
  },
  {
    id: "en-p-28", lang: "en", cefr: "B1", b: 1.8, skill: "grammar", kind: "cloze", stem: "If I ___ you, I'd take the job.",
    mcq: { prompt: complete, options: ["were", "am", "would be", "will be"], answer: 0 },
    seeds: ["en-u17-if-i-were-you", "en-u17-pat-second-conditional"],
  },
  {
    id: "en-p-29", lang: "en", cefr: "B1", b: 1.7, skill: "listening", kind: "listen", spoken: "You don't have to come with me, but you mustn't tell anyone about this.",
    mcq: {
      prompt: { es: "Escucha. ¿Qué está prohibido?", en: "Listen. What is not allowed?" },
      options: [
        { es: "Contárselo a alguien", en: "Telling anyone" },
        { es: "Ir con quien habla", en: "Going with the speaker" },
        { es: "Quedarse en casa", en: "Staying home" },
        { es: "Nada, todo está permitido", en: "Nothing, everything is allowed" },
      ],
      answer: 0,
    },
    seeds: ["en-u13-you-dont-have-to-come", "en-u13-pat-have-to", "en-u13-you-mustnt"],
  },
  {
    id: "en-p-30", lang: "en", cefr: "B1", b: 1.2, skill: "reading", kind: "mcq", stem: "Plastic bags were banned in our city last year. Since then, people who forget their own bags have to buy paper ones.",
    mcq: {
      prompt: { es: "¿Qué pasa si olvidas tu bolsa?", en: "What happens if you forget your bag?" },
      options: [
        { es: "Tienes que comprar una de papel", en: "You must buy a paper one" },
        { es: "Te dan una de plástico gratis", en: "You get a free plastic one" },
        { es: "Pagas una multa", en: "You pay a fine" },
        { es: "No puedes comprar nada", en: "You can't buy anything" },
      ],
      answer: 0,
    },
    seeds: ["en-u18-plastic-bags-were-banned", "en-u18-pat-passive", "en-u18-ban"],
  },

  // ── B2 ─────────────────────────────────────────────────────
  {
    id: "en-p-31", lang: "en", cefr: "B2", b: 2.6, skill: "vocab", kind: "mcq", stem: "Two hundred workers were laid off.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "Despidieron a doscientos trabajadores por recortes.", en: "Two hundred jobs were cut." },
        { es: "Doscientos trabajadores se tomaron el día libre.", en: "Two hundred workers took the day off." },
        { es: "Contrataron a doscientos trabajadores.", en: "Two hundred workers were hired." },
        { es: "Doscientos trabajadores se acostaron temprano.", en: "Two hundred workers went to bed early." },
      ],
      answer: 0,
    },
    seeds: ["en-u19-be-laid-off", "en-u14-hire"],
  },
  {
    id: "en-p-32", lang: "en", cefr: "B2", b: 2.4, skill: "vocab", kind: "mcq", stem: "He pretended to agree.", falseFriend: true,
    mcq: {
      prompt: meaning,
      options: [
        { es: "Fingió estar de acuerdo.", en: "He acted as if he agreed." },
        { es: "Tenía la intención de estar de acuerdo.", en: "He intended to agree." },
        { es: "Al final estuvo de acuerdo.", en: "He agreed in the end." },
        { es: "Se negó a estar de acuerdo.", en: "He refused to agree." },
      ],
      answer: 0,
    },
    seeds: ["en-u23-br-pretend"],
  },
  {
    id: "en-p-33", lang: "en", cefr: "B2", b: 2.5, skill: "grammar", kind: "cloze", stem: "If I ___ about the party, I would have gone.",
    mcq: { prompt: complete, options: ["had known", "would have known", "knew", "have known"], answer: 0 },
    seeds: ["en-u21-if-id-known", "en-u21-pat-third-conditional"],
  },
  {
    id: "en-p-34", lang: "en", cefr: "B2", b: 2.8, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: { es: "«Where do you live?», me preguntó. → «She asked me…»", en: "'Where do you live?' she asked. → 'She asked me…'" },
      options: ["where I lived.", "where did I live.", "where do I live.", "where I did live."],
      answer: 0,
    },
    seeds: ["en-u20-they-asked-where", "en-u20-pat-reported-speech", "en-u20-she-asked-me-if"],
  },
  {
    id: "en-p-35", lang: "en", cefr: "B2", b: 2.3, skill: "listening", kind: "listen", spoken: "Despite the heavy rain, thousands of people joined the march downtown.",
    mcq: {
      prompt: { es: "Escucha. ¿Qué pasó?", en: "Listen. What happened?" },
      options: [
        { es: "Mucha gente fue a la marcha aunque llovía", en: "Many people marched even though it rained" },
        { es: "La marcha se canceló por la lluvia", en: "The march was canceled because of the rain" },
        { es: "Poca gente fue por la lluvia", en: "Few people came because of the rain" },
        { es: "No llovió durante la marcha", en: "It didn't rain during the march" },
      ],
      answer: 0,
    },
    seeds: ["en-u23-despite-the-rain", "en-u23-despite"],
  },
  {
    id: "en-p-36", lang: "en", cefr: "B2", b: 2.7, skill: "reading", kind: "mcq", stem: "Sam didn't answer my calls all day, which isn't like him. He must have left his phone at home.",
    mcq: {
      prompt: { es: "¿Qué piensa quien escribe?", en: "What does the writer think?" },
      options: [
        { es: "Que casi seguro Sam se olvidó el teléfono en casa", en: "Sam almost certainly left his phone at home" },
        { es: "Que Sam está enojado con él", en: "Sam is angry with the writer" },
        { es: "Que Sam tenía que dejar el teléfono en casa", en: "Sam was obliged to leave his phone at home" },
        { es: "Que Sam nunca contesta", en: "Sam never answers" },
      ],
      answer: 0,
    },
    seeds: ["en-u23-he-must-have-forgotten", "en-u23-pat-deduction"],
  },

  // ── C1 ─────────────────────────────────────────────────────
  {
    id: "en-p-37", lang: "en", cefr: "C1", b: 3.2, skill: "vocab", kind: "mcq", stem: "We don't have much leverage in this negotiation.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "No tenemos mucho poder de negociación.", en: "We're in a weak bargaining position." },
        { es: "No tenemos mucho tiempo para negociar.", en: "We don't have much time to negotiate." },
        { es: "No tenemos mucha información.", en: "We don't have much information." },
        { es: "No tenemos un promedio alto.", en: "Our average isn't high." },
      ],
      answer: 0,
    },
    seeds: ["en-u25-leverage", "en-u25-concession"],
  },
  {
    id: "en-p-38", lang: "en", cefr: "C1", b: 3.5, skill: "vocab", kind: "mcq", stem: "The mayor allegedly accepted bribes.",
    mcq: {
      prompt: meaning,
      options: [
        { es: "El alcalde presuntamente aceptó sobornos.", en: "The mayor is said to have taken bribes." },
        { es: "El alcalde aceptó sobornos legalmente.", en: "The mayor legally accepted bribes." },
        { es: "Está probado que el alcalde aceptó sobornos.", en: "It's proven that the mayor took bribes." },
        { es: "El alcalde rechazó los sobornos.", en: "The mayor refused the bribes." },
      ],
      answer: 0,
    },
    seeds: ["en-u26-allegedly", "en-u26-allegedly-received"],
  },
  {
    id: "en-p-39", lang: "en", cefr: "C1", b: 3.1, skill: "grammar", kind: "cloze", stem: "___ you need any further information, please do not hesitate to contact us.",
    mcq: { prompt: complete, options: ["Should", "Would", "Had", "Were"], answer: 0 },
    seeds: ["en-u25-should-you-need", "en-u25-pat-conditional-inversion"],
  },
  {
    id: "en-p-40", lang: "en", cefr: "C1", b: 3.6, skill: "grammar", kind: "cloze", stem: "Never ___ such a beautiful sunset.",
    mcq: { prompt: complete, options: ["have I seen", "I have seen", "I saw", "seen I have"], answer: 0 },
    seeds: ["en-u29-never-have-i-seen", "en-u29-pat-negative-inversion"],
  },
  {
    id: "en-p-41", lang: "en", cefr: "C1", b: 3.3, skill: "listening", kind: "listen", spoken: "The minister is reported to have offered her resignation late last night, although her office has not confirmed it.",
    mcq: {
      prompt: { es: "Escucha. ¿Qué se sabe?", en: "Listen. What do we know?" },
      options: [
        { es: "Según la prensa renunció, pero no está confirmado", en: "Reports say she resigned, but it's unconfirmed" },
        { es: "Su oficina confirmó la renuncia", en: "Her office confirmed the resignation" },
        { es: "Va a renunciar la semana que viene", en: "She will resign next week" },
        { es: "Negó que fuera a renunciar", en: "She denied she would resign" },
      ],
      answer: 0,
    },
    seeds: ["en-u26-pat-passive-reporting", "en-u26-lis-headline", "en-u26-it-is-believed-that"],
  },
  {
    id: "en-p-42", lang: "en", cefr: "C1", b: 3.4, skill: "reading", kind: "mcq", stem: "These findings suggest that remote work may increase productivity, although further research is needed to confirm this.",
    mcq: {
      prompt: { es: "¿Cómo presentan los autores su conclusión?", en: "How do the authors present their conclusion?" },
      options: [
        { es: "Con cautela: es posible, pero falta confirmarlo", en: "Cautiously: it's possible but not yet confirmed" },
        { es: "Como algo totalmente demostrado", en: "As fully proven" },
        { es: "Como algo falso", en: "As false" },
        { es: "Como una opinión sin datos", en: "As an opinion without data" },
      ],
      answer: 0,
    },
    seeds: ["en-u27-results-suggest", "en-u27-pat-hedging", "en-u27-findings"],
  },
];

export const placement: PlacementItem[] = spreadAnswers(bank);
