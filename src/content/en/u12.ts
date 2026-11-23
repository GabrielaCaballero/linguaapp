import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u12",
  lang: "en",
  index: 12,
  cefr: "A2",
  title: { target: "Travel", es: "De viaje", en: "Travel" },
  canDo: [
    { es: "Puedo hablar de mis planes de viaje y del tiempo que va a hacer.", en: "I can talk about travel plans and the weather." },
    { es: "Puedo arreglármelas en el aeropuerto y en un hotel.", en: "I can get by at the airport and in a hotel." },
    { es: "Sé usar «going to» para planes y «will» para decisiones del momento y predicciones.", en: "I can use 'going to' for plans and 'will' for instant decisions and predictions." },
  ],
  icon: "🧳",
  items: build("en", 12, "A2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "trip", type: "word", target: "trip", plural: "trips",
      gloss: { es: "viaje (corto, de ida y vuelta)", en: "trip" },
      accept: [{ text: "journey" }],
      distractors: ["travel", "strip", "tip"],
      note: { es: "«travel» suele ser verbo (viajar); un viaje concreto es «a trip»: Have a good trip!" },
      tags: ["travel"],
    },
    {
      id: "flight", type: "word", target: "flight", plural: "flights",
      gloss: { es: "vuelo", en: "flight" },
      distractors: ["fight", "fly", "light"],
      tags: ["travel", "airport"],
    },
    {
      id: "boarding-pass", type: "word", target: "boarding pass", plural: "boarding passes",
      gloss: { es: "pase de abordar, tarjeta de embarque", en: "boarding pass" },
      distractors: ["board pass", "passport", "boarding card's"],
      tags: ["travel", "airport"],
    },
    {
      id: "luggage", type: "word", target: "luggage",
      gloss: { es: "equipaje", en: "luggage" },
      accept: [{ text: "baggage" }],
      distractors: ["luggages", "language", "lounge"],
      note: { es: "Es incontable: my luggage, a piece of luggage; nunca «luggages»." },
      tags: ["travel", "airport", "uncountable"],
    },
    {
      id: "carry-on", type: "word", target: "carry-on bag",
      gloss: { es: "equipaje de mano", en: "carry-on bag" },
      accept: [{ text: "carry-on" }, { text: "hand luggage" }],
      distractors: ["hand bag", "carry bag", "backpacker"],
      tags: ["travel", "airport"],
    },
    {
      id: "book", type: "word", pos: "verb", target: "book",
      gloss: { es: "reservar", en: "to book (reserve)" },
      accept: [{ text: "reserve" }],
      distractors: ["look", "booking", "reservate"],
      errors: [{ text: "reservate", feedback: { es: "No existe: se dice «book» o «reserve»." } }],
      tags: ["travel", "hotel"],
    },
    {
      id: "check-in", type: "word", pos: "verb", target: "check in",
      gloss: { es: "registrarse (en el hotel o el aeropuerto)", en: "to check in" },
      distractors: ["check out", "chick in", "check on"],
      note: { es: "check in = registrarse al llegar; check out = dejar la habitación al irse." },
      tags: ["travel", "hotel", "airport"],
    },
    {
      id: "delayed", type: "word", pos: "adj", target: "delayed",
      gloss: { es: "retrasado/a, con demora (vuelo, tren)", en: "delayed" },
      distractors: ["delete", "late's", "canceled"],
      tags: ["travel", "airport"],
    },
    {
      id: "sunny", type: "word", pos: "adj", target: "sunny",
      gloss: { es: "soleado (hace sol)", en: "sunny" },
      distractors: ["sun", "funny", "snowy"],
      tags: ["weather"],
    },
    {
      id: "its-raining", type: "phrase", pos: "phrase", target: "It's raining.",
      gloss: { es: "Está lloviendo.", en: "It's raining." },
      accept: [{ text: "It is raining." }],
      distractors: ["Is raining.", "It's rain.", "It rains now."],
      errors: [{ text: "Is raining.", feedback: { es: "Con el tiempo el inglés necesita «it»: It's raining." }, ruleId: "en-g-im-youre" }],
      tags: ["weather", "chunk"],
    },
    {
      id: "its-hot", type: "phrase", pos: "phrase", target: "It's really hot today.",
      gloss: { es: "Hoy hace mucho calor.", en: "It's really hot today." },
      accept: [{ text: "It is really hot today." }, { text: "It's very hot today." }],
      distractors: ["It makes a lot of heat today.", "Is very hot today.", "It has hot today."],
      errors: [{ text: "It makes a lot of heat today.", feedback: { es: "El tiempo va con «be»: It's hot / It's cold." } }],
      tags: ["weather", "chunk"],
    },
    {
      id: "window-or-aisle", type: "phrase", pos: "phrase", target: "Window or aisle?",
      gloss: { es: "¿Ventanilla o pasillo?", en: "Window or aisle?" },
      distractors: ["Window or corridor?", "Window or passage?", "Glass or aisle?"],
      note: { es: "aisle se pronuncia «ail»: la «s» no suena." },
      tags: ["travel", "airport", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "were-going-to-visit", type: "sentence", target: "We're going to visit my cousins in Texas this summer.",
      gloss: { es: "Este verano vamos a visitar a mis primos en Texas.", en: "We're going to visit my cousins in Texas this summer." },
      accept: [{ text: "We are going to visit my cousins in Texas this summer." }, { text: "This summer we're going to visit my cousins in Texas." }],
      errors: [{ text: "We going to visit my cousins in Texas this summer.", feedback: { es: "Falta «are»: We're going to…" }, ruleId: "en-g-going-to" }],
      distractors: ["go", "at", "will"],
      grammar: ["en-g-going-to"],
      tags: ["travel", "future"],
    },
    {
      id: "are-you-going-to-rent", type: "sentence", target: "Are you going to rent a car?",
      gloss: { es: "¿Vas a rentar (alquilar) un auto?", en: "Are you going to rent a car?" },
      accept: [{ text: "Are you going to rent a car there?" }],
      distractors: ["Do", "will", "renting"],
      grammar: ["en-g-going-to"],
      tags: ["travel", "future", "questions"],
    },
    {
      id: "ill-take-a-taxi", type: "sentence", target: "It's late. I'll take a taxi.",
      gloss: { es: "Es tarde. Me tomo un taxi.", en: "It's late. I'll take a taxi." },
      accept: [{ text: "It's late. I will take a taxi." }, { text: "It's late, I'll take a taxi." }],
      errors: [{ text: "It's late. I take a taxi.", feedback: { es: "Para una decisión tomada en el momento se usa «I'll»." }, ruleId: "en-g-will" }],
      distractors: ["going", "am", "taking"],
      grammar: ["en-g-will"],
      tags: ["travel", "future"],
    },
    {
      id: "it-will-rain", type: "sentence", target: "I think it will rain tomorrow.",
      gloss: { es: "Creo que mañana va a llover.", en: "I think it will rain tomorrow." },
      accept: [{ text: "I think it'll rain tomorrow." }, { text: "I think it's going to rain tomorrow." }],
      errors: [{ text: "I think will rain tomorrow.", feedback: { es: "Falta el sujeto «it»: it will rain." }, ruleId: "en-g-will" }],
      distractors: ["rains", "is", "raining"],
      grammar: ["en-g-will"],
      tags: ["weather", "future"],
    },
    {
      id: "my-flight-is-delayed", type: "sentence", target: "My flight is delayed two hours.",
      gloss: { es: "Mi vuelo tiene dos horas de retraso.", en: "My flight is delayed two hours." },
      accept: [{ text: "My flight is delayed by two hours." }, { text: "My flight is two hours late." }],
      distractors: ["has", "delay", "of"],
      tags: ["travel", "airport"],
    },
    {
      id: "id-like-to-check-in", type: "sentence", target: "Hi, I have a reservation under the name Reyes.",
      gloss: { es: "Hola, tengo una reserva a nombre de Reyes.", en: "Hi, I have a reservation under the name Reyes." },
      accept: [{ text: "Hi, I have a reservation under Reyes." }, { text: "Hi, I have a booking under the name Reyes." }],
      errors: [{ text: "Hi, I have a reservation to the name Reyes.", feedback: { es: "«a nombre de» = under the name." } }],
      distractors: ["to", "of", "booked"],
      tags: ["travel", "hotel"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-going-to", type: "pattern", target: "I'm going to + verbo",
      gloss: { es: "«going to» (ir a + infinitivo)", en: "'going to' for plans" },
      pattern: {
        rule: {
          es: "«be going to» + verbo funciona igual que «ir a + infinitivo»: para planes e intenciones («I'm going to study medicine») y para predicciones con pruebas a la vista («Look at those clouds, it's going to rain»).",
          en: "'be going to' + verb is for plans and intentions ('I'm going to study medicine') and for predictions based on what you can see ('Look at those clouds, it's going to rain').",
        },
        table: [["+", "I'm going to travel."], ["−", "She isn't going to come."], ["?", "Are you going to stay?"]],
      },
      question: {
        prompt: { es: "Ya compraste los boletos: «We ___ visit Peru in July.»", en: "You already bought the tickets: 'We ___ visit Peru in July.'" },
        options: ["are going to", "will", "go to", "are go to"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-going-to"], tags: ["grammar", "future"],
    },
    {
      id: "pat-will", type: "pattern", target: "I'll help you · It will be cold",
      gloss: { es: "«will» para decisiones del momento y predicciones", en: "'will' for instant decisions and predictions" },
      pattern: {
        rule: {
          es: "«will» + verbo (forma corta «'ll») se usa para decisiones que tomas en el momento («I'll have the fish»), ofrecimientos y promesas («I'll call you»), y predicciones u opiniones («I think it will be fun»). Es igual para todas las personas.",
          en: "'will' + verb (short form 'll) is for decisions made on the spot ('I'll have the fish'), offers and promises ('I'll call you'), and predictions or opinions ('I think it will be fun'). It's the same for every person.",
        },
        table: [["+", "I'll call you later."], ["−", "It won't be easy."], ["?", "Will you help me?"]],
      },
      question: {
        prompt: { es: "Tu amigo dice «I'm so thirsty!». Tú le ofreces agua en el momento:", en: "Your friend says 'I'm so thirsty!' You offer water on the spot:" },
        options: ["I'll get you some water.", "I'm going to get you some water next week.", "I get you some water.", "I will to get you some water."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-will"], tags: ["grammar", "future"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-check-in", type: "dialogue", target: "Here's your boarding pass.",
      gloss: { es: "Aquí tiene su pase de abordar.", en: "Here's your boarding pass." },
      turns: [
        { who: "A", target: "Good morning. Can I see your passport, please?", gloss: { es: "Buenos días. ¿Me muestra su pasaporte, por favor?", en: "Good morning. Can I see your passport, please?" } },
        { who: "B", target: "Sure, here you go. I have one suitcase to check.", gloss: { es: "Claro, aquí tiene. Tengo una maleta para documentar.", en: "Sure, here you go. I have one suitcase to check." } },
        { who: "A", target: "Window or aisle?", gloss: { es: "¿Ventanilla o pasillo?", en: "Window or aisle?" } },
        { who: "B", target: "Aisle, please. Is the flight on time?", gloss: { es: "Pasillo, por favor. ¿El vuelo sale a tiempo?", en: "Aisle, please. Is the flight on time?" } },
        { who: "A", target: "I'm afraid it's delayed thirty minutes. Here's your boarding pass. Gate twelve.", gloss: { es: "Me temo que tiene treinta minutos de retraso. Aquí tiene su pase de abordar. Puerta doce.", en: "I'm afraid it's delayed thirty minutes. Here's your boarding pass. Gate twelve." } },
      ],
      question: {
        prompt: { es: "¿Qué pasa con el vuelo?", en: "What's the problem with the flight?" },
        options: [
          { es: "Sale con media hora de retraso", en: "It's thirty minutes late" },
          { es: "Está cancelado", en: "It's canceled" },
          { es: "Sale por la puerta treinta", en: "It leaves from gate thirty" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "travel", "airport"],
    },
    {
      id: "lis-weather-forecast", type: "listening", target: "Tomorrow will be cloudy in the morning, but in the afternoon it's going to be sunny and warm, with highs of seventy-five degrees.",
      gloss: { es: "Mañana estará nublado por la mañana, pero por la tarde va a hacer sol y calor, con máximas de setenta y cinco grados Fahrenheit (unos 24 °C).", en: "Tomorrow will be cloudy in the morning, but in the afternoon it's going to be sunny and warm, with highs of seventy-five degrees." },
      question: {
        prompt: { es: "¿Cómo estará la tarde?", en: "What will the afternoon be like?" },
        options: [
          { es: "Soleada y cálida", en: "Sunny and warm" },
          { es: "Nublada", en: "Cloudy" },
          { es: "Lluviosa y fría", en: "Rainy and cold" },
        ],
        answer: 0,
      },
      note: { es: "En Estados Unidos la temperatura se da en grados Fahrenheit: 75 °F ≈ 24 °C." },
      exercises: ["question", "listen"], tags: ["listening", "weather", "future"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-sensible", type: "bridge", onlyFor: "es", target: "sensible",
      gloss: { es: "sensato/a, razonable", en: "sensible (reasonable)" },
      question: {
        prompt: { es: "«Bringing a jacket is sensible» significa que llevar chaqueta es…", en: "'Bringing a jacket is sensible' means it's…" },
        options: [
          { es: "sensato", en: "a reasonable idea" },
          { es: "algo sensible y delicado", en: "something delicate" },
          { es: "una tontería", en: "a silly idea" },
        ],
        answer: 0,
      },
      note: { es: "sensible = sensato; «sensible» en español es «sensitive» en inglés." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "passport", type: "word", target: "passport",
      gloss: { es: "pasaporte", en: "passport" },
      distractors: ["password", "passage", "pass port"],
      tags: ["travel", "airport"],
    },
    {
      id: "round-trip", type: "phrase", pos: "phrase", target: "a round-trip ticket",
      gloss: { es: "un boleto de ida y vuelta", en: "a round-trip ticket" },
      accept: [{ text: "a return ticket" }],
      distractors: ["a round ticket", "a go-and-back ticket", "a one-way ticket"],
      note: { es: "Solo ida = a one-way ticket." },
      tags: ["travel", "chunk"],
    },
  ]),
};
