import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u12",
  lang: "pt",
  index: 12,
  cefr: "A2",
  title: { target: "Viajando", es: "De viaje", en: "Travelling" },
  canDo: [
    { es: "Puedo resolver situaciones en el aeropuerto, el hotel y la rodoviária.", en: "I can get by at the airport, the hotel and the bus station." },
    { es: "Sé comparar (mais barato que, melhor, pior) y usar por / para.", en: "I can compare (mais barato que, melhor, pior) and use por / para." },
    { es: "Sé pedir permiso y decir qué necesito: posso…?, preciso de…", en: "I can ask permission and say what I need: posso…?, preciso de…" },
  ],
  icon: "✈️",
  items: build("pt", 12, "A2", [
    // ── Words ────────────────────────────────────────────────
    { id: "passagem", type: "word", pos: "noun", target: "a passagem", gender: "f", plural: "as passagens", gloss: { es: "el pasaje, el boleto (de avión o bus)", en: "the ticket (plane, coach)" }, variants: [{ region: "PT", text: "o bilhete", note: { es: "En Portugal: o bilhete.", en: "In Portugal: o bilhete." } }], distractors: ["o passagem", "o pasaje", "a passageira"], note: { es: "Las palabras en -agem son femeninas: a viagem, a passagem, a bagagem.", en: "Nouns in -agem are feminine: a viagem, a passagem, a bagagem." }, tags: ["travel"] },
    { id: "voo", type: "word", pos: "noun", target: "o voo", gender: "m", plural: "os voos", gloss: { es: "el vuelo", en: "the flight" }, distractors: ["a voo", "o vuelo", "o vôo de"], note: { es: "Desde 2009 se escribe sin circunflejo: voo, enjoo.", en: "Since 2009 it's spelt without a circumflex: voo." }, tags: ["travel"] },
    { id: "mala", type: "word", pos: "noun", target: "a mala", gender: "f", plural: "as malas", gloss: { es: "la maleta, la valija", en: "the suitcase" }, distractors: ["o malo", "a maleta de", "a mola"], note: { es: "fazer as malas = hacer las maletas. Ojo: «mala» no es «má» (mala, adjetivo).", en: "fazer as malas = to pack." }, tags: ["travel"] },
    { id: "rodoviaria", type: "word", pos: "noun", target: "a rodoviária", gender: "f", plural: "as rodoviárias", gloss: { es: "la terminal de autobuses", en: "the coach / bus station" }, distractors: ["a ferroviária", "o rodoviário", "a rodovia"], note: { es: "En Brasil se viaja mucho en autobús de larga distancia, desde la rodoviária.", en: "Long-distance travel in Brazil is often by coach, from the rodoviária." }, tags: ["travel", "transport"] },
    { id: "reserva", type: "word", pos: "noun", target: "a reserva", gender: "f", plural: "as reservas", gloss: { es: "la reserva / reservación", en: "the booking / reservation" }, distractors: ["o reserva", "a reservação", "a resenha"], tags: ["travel", "hotel"] },
    { id: "embarque", type: "word", pos: "noun", target: "o embarque", gender: "m", plural: "os embarques", gloss: { es: "el embarque", en: "the boarding" }, distractors: ["a embarque", "o embarco", "o desembarque"], tags: ["travel", "airport"] },
    { id: "precisar-de", type: "phrase", pos: "phrase", target: "precisar de", gloss: { es: "necesitar", en: "to need" }, distractors: ["precisar a", "precisar em", "presisar de"], note: { es: "Con sustantivo lleva «de» (preciso de ajuda); con infinitivo, no (preciso sair).", en: "With a noun it takes 'de' (preciso de ajuda); with a verb it doesn't (preciso sair)." }, grammar: ["pt-g-poder"], tags: ["verbs", "travel"] },
    { id: "melhor", type: "word", pos: "adj", target: "melhor", gloss: { es: "mejor", en: "better / best" }, distractors: ["mais bom", "maior", "pior"], grammar: ["pt-g-comparativos"], tags: ["comparison"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "queria-uma-passagem", type: "sentence", target: "Eu queria uma passagem para Curitiba, só de ida.",
      gloss: { es: "Quería un pasaje a Curitiba, solo de ida.", en: "I'd like a one-way ticket to Curitiba." },
      accept: [{ text: "Queria uma passagem para Curitiba, só de ida." }],
      variants: [{ region: "PT", text: "Queria um bilhete para Curitiba, só de ida." }],
      errors: [{ text: "Eu queria uma passagem por Curitiba, só de ida.", feedback: { es: "Destino = para: uma passagem para Curitiba.", en: "Destination = para: uma passagem para Curitiba." }, ruleId: "pt-g-por-para" }],
      distractors: ["por", "a", "volta"],
      tags: ["travel", "transport"],
    },
    {
      id: "o-voo-atrasou", type: "sentence", target: "O voo atrasou duas horas.",
      gloss: { es: "El vuelo se retrasó dos horas.", en: "The flight was two hours late." },
      accept: [{ text: "O voo atrasou por duas horas." }],
      distractors: ["dois", "atrasado", "vuelo"],
      tags: ["travel", "airport"],
    },
    {
      id: "posso-deixar-a-mala", type: "sentence", target: "Posso deixar a mala aqui até a tarde?",
      gloss: { es: "¿Puedo dejar la maleta aquí hasta la tarde?", en: "Can I leave my suitcase here until the afternoon?" },
      accept: [{ text: "Posso deixar a mala aqui até à tarde?" }, { text: "Eu posso deixar a mala aqui até a tarde?" }],
      distractors: ["pode", "dejar", "à"],
      note: { es: "Ante «até a», en Brasil la crase es opcional: até a tarde / até à tarde.", en: "Before 'até a' the crase is optional in Brazil: até a tarde / até à tarde." },
      grammar: ["pt-g-poder"], tags: ["travel", "hotel"],
    },
    {
      id: "o-quarto-tem-ar", type: "sentence", target: "O quarto tem ar-condicionado?",
      gloss: { es: "¿La habitación tiene aire acondicionado?", en: "Does the room have air conditioning?" },
      distractors: ["a", "está", "condicionado-ar"],
      tags: ["travel", "hotel"],
    },
    {
      id: "onibus-e-mais-barato", type: "sentence", target: "O ônibus é mais barato do que o avião, mas é muito mais lento.",
      gloss: { es: "El autobús es más barato que el avión, pero mucho más lento.", en: "The coach is cheaper than the plane, but much slower." },
      accept: [{ text: "O ônibus é mais barato que o avião, mas é muito mais lento." }],
      variants: [{ region: "PT", text: "O autocarro é mais barato do que o avião, mas é muito mais lento." }],
      distractors: ["menos", "como", "lenta"],
      grammar: ["pt-g-comparativos"], tags: ["travel", "comparison"],
    },
    {
      id: "passamos-por-recife", type: "sentence", target: "A gente passou por Recife e ficou três dias em Olinda.",
      gloss: { es: "Pasamos por Recife y nos quedamos tres días en Olinda.", en: "We went through Recife and stayed three days in Olinda." },
      accept: [{ text: "Nós passamos por Recife e ficamos três dias em Olinda." }],
      distractors: ["para", "pelo", "ficamos"],
      grammar: ["pt-g-por-para"], tags: ["travel", "past"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-poder", type: "paradigm", target: "poder — presente", spoken: "poder",
      gloss: { es: "«poder» en presente", en: "poder (can) — present" },
      grammar: ["pt-g-poder"],
      paradigm: {
        caption: { es: "Conjuga «poder» en presente", en: "Conjugate poder in the present tense" },
        cells: [
          { label: "eu", answer: "posso", ruleId: "pt-g-poder" },
          { label: "você / ele / ela", answer: "pode", ruleId: "pt-g-poder" },
          { label: "nós", answer: "podemos", ruleId: "pt-g-poder" },
          { label: "vocês / eles / elas", answer: "podem", ruleId: "pt-g-poder" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-comparativos", type: "pattern", target: "mais… (do) que · menos… (do) que · tão… quanto",
      gloss: { es: "comparar", en: "comparisons" },
      pattern: {
        rule: {
          es: "mais / menos + adjetivo + (do) que; igualdad: tão… quanto. Irregulares: bom → melhor, mau → pior, grande → maior, pequeno → menor.",
          en: "mais / menos + adjective + (do) que (more / less … than); equality: tão… quanto (as … as). Irregular: bom → melhor, mau → pior, grande → maior, pequeno → menor.",
        },
        table: [["+", "O Rio é mais quente (do) que São Paulo."], ["−", "O trem é menos caro que o avião."], ["=", "Ela é tão alta quanto o irmão."], ["bom", "Este hotel é melhor."]],
      },
      question: {
        prompt: { es: "Completa: «Esta pousada é ___ do que a outra.» (bueno)", en: "Complete: 'Esta pousada é ___ do que a outra.' (good)" },
        options: ["melhor", "mais boa", "mais melhor", "mais bom"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-comparativos"], tags: ["grammar", "comparison"],
    },
    {
      id: "pat-por-para", type: "pattern", target: "para Lisboa · por Lisboa",
      gloss: { es: "por y para", en: "por and para" },
      pattern: {
        rule: {
          es: "Muy parecido al español: para = destino, finalidad, plazo (vou para casa, é para você). por = lugar por donde se pasa, causa, cambio, medio (passei por Paris, obrigado pelo presente). por + o/a = pelo/pela.",
          en: "para = destination, purpose, deadline (vou para casa = I'm going home). por = through, because of, in exchange for, by means of (passei por Paris). por + o/a = pelo/pela.",
        },
        table: [["para", "Vou para o Chile.", "destino"], ["para", "Isto é para você.", "para quem"], ["por", "Passei pelo centro.", "passagem"], ["por", "Obrigado pela ajuda.", "causa"]],
      },
      question: {
        prompt: { es: "Completa: «Muito obrigada ___ convite!»", en: "Complete: 'Muito obrigada ___ convite!'" },
        options: ["pelo", "para o", "por o", "pro"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-por-para"], tags: ["grammar", "prepositions"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-aeroporto", type: "listening", target: "Atenção, senhores passageiros do voo três dois sete com destino a Manaus: o embarque foi transferido para o portão doze.",
      gloss: { es: "Atención, señores pasajeros del vuelo tres dos siete con destino a Manaos: el embarque se cambió a la puerta doce.", en: "Attention, passengers on flight three two seven to Manaus: boarding has been moved to gate twelve." },
      question: {
        prompt: { es: "¿Qué cambió?", en: "What has changed?" },
        options: [
          { es: "La puerta de embarque", en: "The boarding gate" },
          { es: "La hora del vuelo", en: "The departure time" },
          { es: "El destino del vuelo", en: "The destination" },
          { es: "El número del vuelo", en: "The flight number" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "travel", "airport"],
    },
    {
      id: "dlg-hotel", type: "dialogue", target: "Tenho uma reserva no nome de Clara Souza.", register: "formal",
      gloss: { es: "Tengo una reserva a nombre de Clara Souza.", en: "I have a booking under the name Clara Souza." },
      turns: [
        { who: "A", target: "Boa tarde. Tenho uma reserva no nome de Clara Souza.", gloss: { es: "Buenas tardes. Tengo una reserva a nombre de Clara Souza.", en: "Good afternoon. I have a booking under the name Clara Souza." } },
        { who: "B", target: "Um momento… Sim, quarto de casal, três noites, com café da manhã.", gloss: { es: "Un momento… Sí, habitación doble, tres noches, con desayuno.", en: "One moment… Yes, a double room, three nights, with breakfast." } },
        { who: "A", target: "Isso. A que horas é o café?", gloss: { es: "Eso es. ¿A qué hora es el desayuno?", en: "That's right. What time is breakfast?" } },
        { who: "B", target: "Das seis e meia às dez. A senhora precisa de ajuda com as malas?", gloss: { es: "De seis y media a diez. ¿Necesita ayuda con las maletas?", en: "From half past six to ten. Do you need help with your bags?" } },
      ],
      question: {
        prompt: { es: "¿Hasta qué hora sirven el desayuno?", en: "Until what time is breakfast served?" },
        options: [
          { es: "Hasta las diez", en: "Until ten" },
          { es: "Hasta las seis y media", en: "Until half past six" },
          { es: "Hasta las doce", en: "Until twelve" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "travel", "hotel"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-carteira", type: "bridge", onlyFor: "es", target: "a carteira",
      gloss: { es: "la billetera / la cartera de bolsillo", en: "the wallet" },
      question: {
        prompt: { es: "«Perdi a carteira no ônibus» quiere decir que perdiste…", en: "'Perdi a carteira no ônibus' means you lost…" },
        options: [{ es: "la billetera", en: "your wallet" }, { es: "el bolso de mano", en: "your handbag" }, { es: "una carta", en: "a letter" }],
        answer: 0,
      },
      note: { es: "«a carteira» es la billetera (y la carteira de motorista, la licencia de conducir); el bolso de mano es «a bolsa»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "travel"],
    },
    {
      id: "br-en-balcao", type: "bridge", onlyFor: "en", target: "o balcão",
      gloss: { es: "el mostrador", en: "the counter / desk" },
      question: {
        prompt: { es: "«Dirija-se ao balcão da companhia» significa…", en: "'Dirija-se ao balcão da companhia' means go to the airline's…" },
        options: [{ es: "mostrador", en: "desk" }, { es: "balcón", en: "balcony" }, { es: "avión", en: "plane" }],
        answer: 0,
      },
      note: { en: "False friend: o balcão is a counter or check-in desk; a balcony is 'a varanda' or 'a sacada'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "travel"],
    },
  ]),
};
