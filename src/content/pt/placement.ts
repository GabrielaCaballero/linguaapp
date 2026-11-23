import type { Mcq, PlacementItem } from "../schema";
import { spreadAnswers } from "../build";

// 42 items · 6 per band (A0, A1.1, A1.2, A2, B1, B2, C1) · per band: 2 vocab, 2 grammar,
// 1 listening, 1 reading. False friends for Spanish speakers flagged (weighted ×1.5 es→pt).
// b: A0 −2.5 · A1.1 −1.5 · A1.2 −0.5 · A2 +0.5 · B1 +1.5 · B2 +2.5 · C1 +3.3 (±0.4 within band).
// No C2 items: C2 isn't placed by the test. Authors write the key as option 0; spreadAnswers rotates it.
const MEAN: Mcq["prompt"] = { es: "¿Qué significa?", en: "What does it mean?" };
const CLOZE: Mcq["prompt"] = { es: "Completa la frase.", en: "Complete the sentence." };
const HEARD: Mcq["prompt"] = { es: "¿Qué oíste?", en: "What did you hear?" };

const bank: PlacementItem[] = [
  // ── A0 ─────────────────────────────────────────────────────
  {
    id: "pt-p-01", lang: "pt", cefr: "A0", b: -2.8, skill: "vocab", kind: "mcq", stem: "Boa noite!",
    mcq: { prompt: MEAN, options: [{ es: "¡Buenas noches!", en: "Good evening! / Good night!" }, { es: "¡Buenos días!", en: "Good morning!" }, { es: "¡Hasta luego!", en: "See you later!" }, { es: "¡Gracias!", en: "Thank you!" }], answer: 0 },
    seeds: ["pt-u01-boa-noite", "pt-u01-bom-dia", "pt-u01-boa-tarde"],
  },
  {
    id: "pt-p-02", lang: "pt", cefr: "A0", b: -2.3, skill: "vocab", kind: "mcq", stem: "Muito obrigado!",
    mcq: { prompt: MEAN, options: [{ es: "¡Muchas gracias!", en: "Thank you very much!" }, { es: "¡De nada!", en: "You're welcome!" }, { es: "¡Perdón!", en: "Sorry!" }, { es: "¡Mucho gusto!", en: "Nice to meet you!" }], answer: 0 },
    seeds: ["pt-u01-muito-obrigado", "pt-u01-obrigado", "pt-u01-de-nada"],
  },
  {
    id: "pt-p-03", lang: "pt", cefr: "A0", b: -2.6, skill: "grammar", kind: "cloze", stem: "Oi! Como você se ___?",
    mcq: { prompt: CLOZE, options: ["chama", "chamo", "chamas", "chamam"], answer: 0 },
    seeds: ["pt-u01-como-voce-se-chama", "pt-u01-meu-nome-e"],
  },
  {
    id: "pt-p-04", lang: "pt", cefr: "A0", b: -2.2, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: { es: "Le preguntas a una señora mayor que no conoces cómo está. ¿Qué dices?", en: "You ask an older woman you don't know how she is. What do you say?" },
      options: ["Como vai a senhora?", "Tudo bem, cara?", "Como vai você, querida?", "Oi, tudo bom?"], answer: 0,
    },
    seeds: ["pt-u01-como-vai-o-senhor", "pt-u01-pat-voce-senhor"],
  },
  {
    id: "pt-p-05", lang: "pt", cefr: "A0", b: -2.5, skill: "listening", kind: "listen", spoken: "Boa tarde, senhor.",
    mcq: { prompt: HEARD, options: ["Boa tarde, senhor.", "Bom dia, senhor.", "Boa noite, senhor.", "Até logo, senhor."], answer: 0 },
    seeds: ["pt-u01-boa-tarde"],
  },
  {
    id: "pt-p-06", lang: "pt", cefr: "A0", b: -2.4, skill: "reading", kind: "mcq", stem: "Oi, meu nome é Paulo. E você?",
    mcq: {
      prompt: { es: "¿Qué dice Paulo?", en: "What does Paulo say?" },
      options: [{ es: "Dice su nombre y pregunta el tuyo.", en: "He says his name and asks yours." }, { es: "Dice que se va.", en: "He says he's leaving." }, { es: "Pregunta cómo estás.", en: "He asks how you are." }, { es: "Dice de dónde es.", en: "He says where he's from." }],
      answer: 0,
    },
    seeds: ["pt-u01-meu-nome-e", "pt-u01-oi"],
  },

  // ── A1.1 ───────────────────────────────────────────────────
  {
    id: "pt-p-07", lang: "pt", cefr: "A1.1", b: -1.3, skill: "vocab", kind: "mcq", stem: "Qual é o seu apelido?", falseFriend: true,
    mcq: { prompt: { es: "En Brasil, ¿qué te preguntan?", en: "In Brazil, what are you being asked?" }, options: [{ es: "Tu apodo", en: "Your nickname" }, { es: "Tu apellido", en: "Your surname" }, { es: "Tu dirección", en: "Your address" }, { es: "Tu edad", en: "Your age" }], answer: 0 },
    seeds: ["pt-u02-br-apelido"],
  },
  {
    id: "pt-p-08", lang: "pt", cefr: "A1.1", b: -1.7, skill: "vocab", kind: "mcq", stem: "a irmã",
    mcq: { prompt: MEAN, options: [{ es: "la hermana", en: "the sister" }, { es: "la madre", en: "the mother" }, { es: "la hija", en: "the daughter" }, { es: "la abuela", en: "the grandmother" }], answer: 0 },
    seeds: ["pt-u05-irma", "pt-u05-irmao"],
  },
  {
    id: "pt-p-09", lang: "pt", cefr: "A1.1", b: -1.6, skill: "grammar", kind: "cloze", stem: "Eu ___ trinta anos.",
    mcq: { prompt: CLOZE, options: ["tenho", "sou", "estou", "tem"], answer: 0 },
    seeds: ["pt-u03-tenho-trinta-anos", "pt-u03-pat-ter", "pt-u03-tab-ter"],
  },
  {
    id: "pt-p-10", lang: "pt", cefr: "A1.1", b: -1.4, skill: "grammar", kind: "cloze", stem: "Nós somos ___ Colômbia.",
    mcq: { prompt: CLOZE, options: ["da", "de a", "do", "na"], answer: 0 },
    seeds: ["pt-u02-pat-de-contracoes", "pt-u02-sou-da-argentina"],
  },
  {
    id: "pt-p-11", lang: "pt", cefr: "A1.1", b: -1.5, skill: "listening", kind: "listen", spoken: "Onde fica a estação de trem?",
    mcq: { prompt: HEARD, options: ["Onde fica a estação de trem?", "Onde fica a estação de ônibus?", "Quando sai o trem?", "Onde está o meu trem?"], answer: 0 },
    seeds: ["pt-u06-onde-fica-a-estacao", "pt-u06-trem"],
  },
  {
    id: "pt-p-12", lang: "pt", cefr: "A1.1", b: -1.2, skill: "reading", kind: "mcq", stem: "Padaria Pão Quente — Café da manhã das 6h às 10h. Pão de queijo: R$ 3.",
    mcq: {
      prompt: { es: "¿Hasta qué hora sirven el desayuno?", en: "Until what time is breakfast served?" },
      options: [{ es: "Hasta las 10", en: "Until 10" }, { es: "Hasta las 6", en: "Until 6" }, { es: "Hasta las 3", en: "Until 3" }, { es: "Todo el día", en: "All day" }],
      answer: 0,
    },
    seeds: ["pt-u04-cafe-da-manha", "pt-u04-pao-de-queijo"],
  },

  // ── A1.2 ───────────────────────────────────────────────────
  {
    id: "pt-p-13", lang: "pt", cefr: "A1.2", b: -0.6, skill: "vocab", kind: "mcq", stem: "Eu acordo às sete.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Me despierto a las siete.", en: "I wake up at seven." }, { es: "Me acuerdo a las siete.", en: "I remember at seven." }, { es: "Nos vemos a las siete.", en: "We meet at seven." }, { es: "Me acuesto a las siete.", en: "I go to bed at seven." }], answer: 0 },
    seeds: ["pt-u07-acordar", "pt-u07-br-acordar", "pt-u07-acordo-as-sete"],
  },
  {
    id: "pt-p-14", lang: "pt", cefr: "A1.2", b: -0.2, skill: "vocab", kind: "mcq", stem: "o abacaxi",
    mcq: { prompt: MEAN, options: [{ es: "la piña / el ananá", en: "the pineapple" }, { es: "la palta / el aguacate", en: "the avocado" }, { es: "la naranja", en: "the orange" }, { es: "la sandía", en: "the watermelon" }], answer: 0 },
    seeds: ["pt-u09-abacaxi", "pt-u09-abacate"],
  },
  {
    id: "pt-p-15", lang: "pt", cefr: "A1.2", b: -0.5, skill: "grammar", kind: "cloze", stem: "Eu gosto muito ___ futebol.",
    mcq: { prompt: CLOZE, options: ["de", "o", "a", "em"], answer: 0 },
    seeds: ["pt-u08-gosto-de-futebol", "pt-u08-pat-gostar-de", "pt-u08-gostar-de"],
  },
  {
    id: "pt-p-16", lang: "pt", cefr: "A1.2", b: -0.8, skill: "grammar", kind: "cloze", stem: "Agora eu estou ___ um livro.",
    mcq: { prompt: CLOZE, options: ["lendo", "ler", "leio", "lido"], answer: 0 },
    seeds: ["pt-u08-estou-lendo", "pt-u08-pat-gerundio"],
  },
  {
    id: "pt-p-17", lang: "pt", cefr: "A1.2", b: -0.4, skill: "listening", kind: "listen", spoken: "São três e meia.",
    mcq: { prompt: HEARD, options: ["São três e meia.", "São treze e meia.", "São três e quinze.", "É uma e meia."], answer: 0 },
    seeds: ["pt-u07-sao-tres-e-meia", "pt-u07-que-horas-sao"],
  },
  {
    id: "pt-p-18", lang: "pt", cefr: "A1.2", b: -0.3, skill: "reading", kind: "mcq", stem: "Feira livre: quarta e sábado, das 7h às 13h. Frutas, verduras e pastel.",
    mcq: {
      prompt: { es: "¿Qué días hay feria?", en: "Which days is the market on?" },
      options: [{ es: "Miércoles y sábado", en: "Wednesday and Saturday" }, { es: "Cuarto día de cada mes", en: "The fourth of each month" }, { es: "Martes y domingo", en: "Tuesday and Sunday" }, { es: "Todos los días", en: "Every day" }],
      answer: 0,
    },
    seeds: ["pt-u09-feira", "pt-u03-pat-dias"],
  },

  // ── A2 ─────────────────────────────────────────────────────
  {
    id: "pt-p-19", lang: "pt", cefr: "A2", b: 0.3, skill: "vocab", kind: "mcq", stem: "Fiquei tão embaraçada!", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "¡Me dio tanta vergüenza!", en: "I was so embarrassed!" }, { es: "¡Quedé embarazada!", en: "I got pregnant!" }, { es: "¡Me enojé tanto!", en: "I got so angry!" }, { es: "¡Me cansé tanto!", en: "I got so tired!" }], answer: 0 },
    seeds: ["pt-u10-br-embaracada"],
  },
  {
    id: "pt-p-20", lang: "pt", cefr: "A2", b: 0.7, skill: "vocab", kind: "mcq", stem: "a passagem",
    mcq: { prompt: MEAN, options: [{ es: "el pasaje, el boleto", en: "the ticket" }, { es: "el pasajero", en: "the passenger" }, { es: "el pasaporte", en: "the passport" }, { es: "el paseo", en: "the stroll" }], answer: 0 },
    seeds: ["pt-u12-passagem"],
  },
  {
    id: "pt-p-21", lang: "pt", cefr: "A2", b: 0.5, skill: "grammar", kind: "cloze", stem: "Ontem eu ___ ao cinema com a minha irmã.",
    mcq: { prompt: CLOZE, options: ["fui", "vou", "ia a", "fomos"], answer: 0 },
    seeds: ["pt-u10-fui-a-praia", "pt-u10-pat-preterito-irregular", "pt-u10-tab-ir-preterito"],
  },
  {
    id: "pt-p-22", lang: "pt", cefr: "A2", b: 0.8, skill: "grammar", kind: "cloze", stem: "Quando eu ___ criança, morava no interior.",
    mcq: { prompt: CLOZE, options: ["era", "fui", "sou", "estava"], answer: 0 },
    seeds: ["pt-u11-quando-eu-era-crianca", "pt-u11-pat-perfeito-imperfeito"],
  },
  {
    id: "pt-p-23", lang: "pt", cefr: "A2", b: 0.4, skill: "listening", kind: "listen", spoken: "O voo para Manaus atrasou duas horas.",
    mcq: { prompt: HEARD, options: ["O voo para Manaus atrasou duas horas.", "O voo para Manaus saiu às duas horas.", "O ônibus para Manaus atrasou duas horas.", "O voo de Manaus chegou há duas horas."], answer: 0 },
    seeds: ["pt-u12-o-voo-atrasou", "pt-u12-voo"],
  },
  {
    id: "pt-p-24", lang: "pt", cefr: "A2", b: 0.6, skill: "reading", kind: "mcq", stem: "Nas férias fiquei numa pousada perto do mar. Choveu só um dia, mas a comida era cara.",
    mcq: {
      prompt: { es: "¿Qué no le gustó?", en: "What didn't the writer like?" },
      options: [{ es: "Los precios de la comida", en: "The food prices" }, { es: "El tiempo", en: "The weather" }, { es: "La posada", en: "The guesthouse" }, { es: "El mar", en: "The sea" }],
      answer: 0,
    },
    seeds: ["pt-u10-lis-ferias", "pt-u09-caro"],
  },

  // ── B1 ─────────────────────────────────────────────────────
  {
    id: "pt-p-25", lang: "pt", cefr: "B1", b: 1.3, skill: "vocab", kind: "mcq", stem: "Meu carro está na oficina.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Mi auto está en el taller.", en: "My car is at the garage." }, { es: "Mi auto está en la oficina.", en: "My car is at the office." }, { es: "Mi auto está en el estacionamiento.", en: "My car is in the car park." }, { es: "Mi auto está en venta.", en: "My car is for sale." }], answer: 0 },
    seeds: ["pt-u14-br-oficina", "pt-u14-escritorio"],
  },
  {
    id: "pt-p-26", lang: "pt", cefr: "B1", b: 1.8, skill: "vocab", kind: "mcq", stem: "Estou com dor nas costas.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Me duele la espalda.", en: "My back hurts." }, { es: "Me duelen las costillas.", en: "My ribs hurt." }, { es: "Estoy en la costa.", en: "I'm on the coast." }, { es: "Me duele el cuello.", en: "My neck hurts." }], answer: 0 },
    seeds: ["pt-u13-br-costas", "pt-u13-me-doi-as-costas"],
  },
  {
    id: "pt-p-27", lang: "pt", cefr: "B1", b: 1.5, skill: "grammar", kind: "cloze", stem: "Espero que você ___ do presente.",
    mcq: { prompt: CLOZE, options: ["goste", "gosta", "gostar", "gostou"], answer: 0 },
    seeds: ["pt-u15-espero-que-voce-goste", "pt-u15-pat-subjuntivo", "pt-u15-tab-subjuntivo"],
  },
  {
    id: "pt-p-28", lang: "pt", cefr: "B1", b: 1.9, skill: "grammar", kind: "cloze", stem: "Se eu ___ na loteria, viajaria pelo mundo.",
    mcq: { prompt: CLOZE, options: ["ganhasse", "ganharia", "ganho", "ganhar"], answer: 0 },
    seeds: ["pt-u17-se-eu-ganhasse", "pt-u17-pat-se-fosse", "pt-u17-tab-subj-imperfeito"],
  },
  {
    id: "pt-p-29", lang: "pt", cefr: "B1", b: 1.4, skill: "listening", kind: "listen", spoken: "Tome uma colher do xarope três vezes por dia, depois das refeições.",
    mcq: { prompt: HEARD, options: ["Tome uma colher do xarope três vezes por dia, depois das refeições.", "Tome uma colher do xarope duas vezes por dia, antes das refeições.", "Tome três colheres do xarope por dia, antes de dormir.", "Tome o xarope uma vez por dia, depois do jantar."], answer: 0 },
    seeds: ["pt-u13-lis-farmacia", "pt-u13-tome-este-remedio"],
  },
  {
    id: "pt-p-30", lang: "pt", cefr: "B1", b: 1.6, skill: "reading", kind: "mcq", stem: "Vendem-se casas na praia. Aceita-se financiamento. Tratar com o proprietário.",
    mcq: {
      prompt: { es: "¿Qué dice el anuncio?", en: "What does the ad say?" },
      options: [{ es: "Se venden casas en la playa y se puede financiar", en: "Beach houses for sale, financing accepted" }, { es: "Se alquilan casas en la playa", en: "Beach houses to rent" }, { es: "Se buscan casas para comprar", en: "Houses wanted" }, { es: "Hay que pagar al contado", en: "Cash only" }],
      answer: 0,
    },
    seeds: ["pt-u18-vendem-se-casas", "pt-u18-pat-se-apassivador"],
  },

  // ── B2 ─────────────────────────────────────────────────────
  {
    id: "pt-p-31", lang: "pt", cefr: "B2", b: 2.3, skill: "vocab", kind: "mcq", stem: "O fiscal foi preso por receber propina.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "El inspector fue detenido por recibir sobornos.", en: "The inspector was arrested for taking bribes." }, { es: "El inspector fue detenido por recibir propinas.", en: "The inspector was arrested for taking tips." }, { es: "El inspector fue detenido por cobrar de más.", en: "The inspector was arrested for overcharging." }, { es: "El inspector recibió un premio.", en: "The inspector received an award." }], answer: 0 },
    seeds: ["pt-u18-br-propina"],
  },
  {
    id: "pt-p-32", lang: "pt", cefr: "B2", b: 2.7, skill: "vocab", kind: "mcq", stem: "Desse ponto eu não abro mão.",
    mcq: { prompt: MEAN, options: [{ es: "En ese punto no cedo.", en: "I won't give way on that point." }, { es: "Ese punto no lo entiendo.", en: "I don't understand that point." }, { es: "Ese punto lo dejo abierto.", en: "I'll leave that point open." }, { es: "Ese punto lo acepto.", en: "I accept that point." }], answer: 0 },
    seeds: ["pt-u19-nao-abro-mao"],
  },
  {
    id: "pt-p-33", lang: "pt", cefr: "B2", b: 2.5, skill: "grammar", kind: "cloze", stem: "Quando você ___, me manda a proposta.",
    mcq: { prompt: CLOZE, options: ["puder", "pode", "possa", "pudesse"], answer: 0 },
    seeds: ["pt-u19-quando-voce-puder", "pt-u19-pat-futuro-subj", "pt-u19-tab-futuro-subj"],
  },
  {
    id: "pt-p-34", lang: "pt", cefr: "B2", b: 2.8, skill: "grammar", kind: "cloze", stem: "Ela comprou ingressos para nós ___ ao show.",
    mcq: { prompt: CLOZE, options: ["irmos", "ir", "vamos", "fomos"], answer: 0 },
    seeds: ["pt-u22-para-nos-irmos", "pt-u22-pat-infinitivo-pessoal"],
  },
  {
    id: "pt-p-35", lang: "pt", cefr: "B2", b: 2.2, skill: "listening", kind: "listen", spoken: "Se eu tivesse saído dez minutos depois, teria perdido o voo.",
    mcq: { prompt: HEARD, options: ["Se eu tivesse saído dez minutos depois, teria perdido o voo.", "Se eu saísse dez minutos depois, perderia o voo.", "Saí dez minutos depois e perdi o voo.", "Se eu sair dez minutos depois, vou perder o voo."], answer: 0 },
    seeds: ["pt-u21-se-eu-tivesse-sabido", "pt-u21-pat-condicional-composto"],
  },
  {
    id: "pt-p-36", lang: "pt", cefr: "B2", b: 2.6, skill: "reading", kind: "mcq", stem: "Embora a semana de quatro dias seja uma boa ideia, ela não funcionaria em todos os setores.",
    mcq: {
      prompt: { es: "¿Qué opina el autor?", en: "What's the writer's view?" },
      options: [{ es: "La idea es buena, pero tiene límites", en: "Good idea, but it has limits" }, { es: "La idea es mala", en: "It's a bad idea" }, { es: "Ya funciona en todos los sectores", en: "It already works everywhere" }, { es: "No tiene opinión", en: "No opinion" }],
      answer: 0,
    },
    seeds: ["pt-u23-embora-seja-caro", "pt-u23-pat-concessivas"],
  },

  // ── C1 ─────────────────────────────────────────────────────
  {
    id: "pt-p-37", lang: "pt", cefr: "C1", b: 3.1, skill: "vocab", kind: "mcq", stem: "O tema da pauta de hoje é o orçamento.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "El tema del orden del día de hoy es el presupuesto.", en: "Today's agenda item is the budget." }, { es: "El tema de la pausa de hoy es el presupuesto.", en: "Today's break is about the budget." }, { es: "El tema de hoy es la premisa.", en: "Today's topic is the premise." }, { es: "Hoy se suspende la reunión.", en: "Today's meeting is cancelled." }], answer: 0 },
    seeds: ["pt-u25-pauta", "pt-u25-orcamento"],
  },
  {
    id: "pt-p-38", lang: "pt", cefr: "C1", b: 3.5, skill: "vocab", kind: "mcq", stem: "Todavia, o projeto foi aprovado.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Sin embargo, el proyecto fue aprobado.", en: "However, the project was approved." }, { es: "Todavía no aprobaron el proyecto.", en: "The project hasn't been approved yet." }, { es: "Aún así, rechazaron el proyecto.", en: "Even so, the project was rejected." }, { es: "Por eso aprobaron el proyecto.", en: "That's why the project was approved." }], answer: 0 },
    seeds: ["pt-u28-br-todavia"],
  },
  {
    id: "pt-p-39", lang: "pt", cefr: "C1", b: 3.3, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: { es: "¿Cuál es correcta en la norma culta?", en: "Which is correct in formal standard Portuguese?" },
      options: ["Ninguém me avisou da reunião.", "Ninguém avisou-me da reunião.", "Me ninguém avisou da reunião.", "Ninguém avisou me da reunião."], answer: 0,
    },
    seeds: ["pt-u27-pat-colocacao", "pt-u27-nao-me-disse"],
  },
  {
    id: "pt-p-40", lang: "pt", cefr: "C1", b: 3.6, skill: "grammar", kind: "cloze", stem: "A encomenda já foi ___ ao cliente.",
    mcq: { prompt: CLOZE, options: ["entregue", "entregado", "entregada", "entrega"], answer: 0 },
    seeds: ["pt-u26-pat-participio-duplo", "pt-u26-o-artigo-foi-aceito"],
  },
  {
    id: "pt-p-41", lang: "pt", cefr: "C1", b: 3.2, skill: "listening", kind: "listen", spoken: "Olha, apanhas o autocarro na paragem e sais no Rossio.",
    mcq: { prompt: HEARD, options: ["Olha, apanhas o autocarro na paragem e sais no Rossio.", "Olha, pegas o ônibus no ponto e sais no Rossio.", "Olha, apanhas o comboio na estação e sais no Rossio.", "Olha, apanhas o táxi na praça e sais no Rossio."], answer: 0 },
    seeds: ["pt-u30-lis-lisboa", "pt-u30-ponto-de-onibus"],
  },
  {
    id: "pt-p-42", lang: "pt", cefr: "C1", b: 3.4, skill: "reading", kind: "mcq", stem: "Tendo em vista o aumento dos custos, propomos um reajuste de 5%, mediante a renovação do contrato por mais dois anos.",
    mcq: {
      prompt: { es: "¿Qué condición ponen?", en: "What condition is set?" },
      options: [{ es: "Renovar el contrato dos años más", en: "Renewing the contract for two more years" }, { es: "Pagar por adelantado", en: "Paying in advance" }, { es: "Reducir los costos", en: "Cutting costs" }, { es: "Ninguna", en: "None" }],
      answer: 0,
    },
    seeds: ["pt-u25-mediante", "pt-u25-tendo-em-vista", "pt-u25-lis-reuniao"],
  },
];

export const placement: PlacementItem[] = spreadAnswers(bank);
