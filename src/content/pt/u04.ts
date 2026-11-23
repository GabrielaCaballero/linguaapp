import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u04",
  lang: "pt",
  index: 4,
  cefr: "A1.1",
  title: { target: "Na padaria", es: "En la panadería", en: "At the bakery café" },
  canDo: [
    { es: "Puedo pedir algo de comer y de tomar en una padaria o un bar.", en: "I can order food and drink in a bakery café or a bar." },
    { es: "Puedo pedir la cuenta y preguntar cuánto es.", en: "I can ask for the bill and ask how much it is." },
    { es: "Sé pedir con cortesía: eu queria…, eu gostaria de…", en: "I can order politely: eu queria…, eu gostaria de…" },
  ],
  icon: "☕",
  items: build("pt", 4, "A1.1", [
    {
      id: "s-e-aberto", type: "sound", target: "café",
      gloss: { es: "café", en: "coffee" },
      distractors: ["cafê", "cafe", "kafé"],
      note: {
        es: "La tilde aguda marca una vocal abierta (café, avó) y el circunflejo una cerrada (você, avô).",
        en: "An acute accent marks an open vowel (café, avó, like 'eh', 'aw'); a circumflex a closed one (você, avô).",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "open-closed"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "o-cafe", type: "word", pos: "noun", target: "o cafezinho", gender: "m", plural: "os cafezinhos", gloss: { es: "el cafecito (café solo, pequeño)", en: "the small black coffee" }, distractors: ["a cafezinha", "o cafecito", "o café-com-leite"], note: { es: "Es el café corto y dulce que se ofrece en todas partes en Brasil.", en: "The small, sweet black coffee offered everywhere in Brazil." }, tags: ["food", "drinks"] },
    { id: "pao", type: "word", pos: "noun", target: "o pão", gender: "m", plural: "os pães", gloss: { es: "el pan", en: "the bread" }, distractors: ["a pão", "o pau", "o pan"], note: { es: "Plural irregular: os pães. Ojo: «pau» (palo) suena distinto, sin nasal.", en: "Irregular plural: os pães. Careful: 'pau' (stick) has no nasal sound." }, tags: ["food"] },
    { id: "pao-de-queijo", type: "word", pos: "noun", target: "o pão de queijo", gender: "m", plural: "os pães de queijo", gloss: { es: "el pan de queso (bolita típica de Minas)", en: "the cheese bread roll" }, distractors: ["o pão do queijo", "o queijo de pão", "a pão de queijo"], tags: ["food", "culture"] },
    { id: "suco", type: "word", pos: "noun", target: "o suco", gender: "m", plural: "os sucos", gloss: { es: "el jugo", en: "the juice" }, variants: [{ region: "PT", text: "o sumo", note: { es: "En Portugal el jugo es «o sumo».", en: "In Portugal juice is 'o sumo'." } }], distractors: ["o sumo de", "a suco", "o jugo"], tags: ["drinks"] },
    { id: "agua", type: "word", pos: "noun", target: "a água", gender: "f", plural: "as águas", gloss: { es: "el agua", en: "the water" }, distractors: ["o água", "a agua", "a ágoa"], note: { es: "Femenino con «a», no «o» como en español: a água.", en: "Feminine: a água." }, tags: ["drinks"] },
    { id: "leite", type: "word", pos: "noun", target: "o leite", gender: "m", plural: "os leites", gloss: { es: "la leche", en: "the milk" }, distractors: ["a leite", "o leche", "o leito"], note: { es: "Cambia de género: la leche → o leite.", en: "Masculine in Portuguese: o leite." }, tags: ["drinks"] },
    { id: "cafe-da-manha", type: "word", pos: "noun", target: "o café da manhã", gender: "m", plural: "os cafés da manhã", gloss: { es: "el desayuno", en: "the breakfast" }, variants: [{ region: "PT", text: "o pequeno-almoço", note: { es: "En Portugal: o pequeno-almoço.", en: "In Portugal: o pequeno-almoço." } }], distractors: ["o almoço", "o desayuno", "a manhã do café"], tags: ["food", "meals"] },
    { id: "a-conta", type: "word", pos: "noun", target: "a conta", gender: "f", plural: "as contas", gloss: { es: "la cuenta", en: "the bill / check" }, distractors: ["o conto", "a cuenta", "a nota"], tags: ["restaurant"] },
    { id: "garcom", type: "word", pos: "noun", target: "o garçom", gender: "m", plural: "os garçons", gloss: { es: "el mesero / camarero", en: "the waiter" }, accept: [{ text: "a garçonete" }], variants: [{ region: "PT", text: "o empregado de mesa", note: { es: "En Portugal: o empregado (de mesa).", en: "In Portugal: o empregado (de mesa)." } }], distractors: ["o garção", "o camareiro", "o mesero"], tags: ["restaurant", "people"] },
    { id: "cardapio", type: "word", pos: "noun", target: "o cardápio", gender: "m", plural: "os cardápios", gloss: { es: "el menú / la carta", en: "the menu" }, accept: [{ text: "o menu" }], variants: [{ region: "PT", text: "a ementa" }], distractors: ["a cardápia", "o menu do dia", "o cardapo"], tags: ["restaurant"] },
    { id: "querer", type: "word", pos: "verb", target: "querer", gloss: { es: "querer", en: "to want" }, forms: { eu: "quero", você: "quer", "eu (cortés)": "queria" }, distractors: ["quero", "quer", "gostar"], tags: ["verbs", "restaurant"] },
    { id: "gelado", type: "word", pos: "adj", target: "gelado", gloss: { es: "helado / bien frío", en: "ice-cold" }, accept: [{ text: "gelada" }], distractors: ["quente", "geado", "sorvete"], note: { es: "Una cerveja gelada = bien fría. El helado (postre) es «o sorvete» en Brasil.", en: "Uma cerveja gelada = ice-cold beer. Ice cream is 'o sorvete' in Brazil." }, tags: ["drinks"] },
    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "eu-queria-um-cafe", type: "sentence", target: "Eu queria um café, por favor.",
      gloss: { es: "Quería un café, por favor.", en: "I'd like a coffee, please." },
      accept: [{ text: "Queria um café, por favor." }, { text: "Eu gostaria de um café, por favor." }, { text: "Me vê um café, por favor." }, { text: "Um café, por favor." }, { text: "Eu quero um café.", verdict: "almost", feedback: { es: "Es correcto, pero suena brusco; para pedir es más amable: eu queria… / me vê…", en: "Correct, but a bit blunt; more polite: eu queria… / me vê…" } }, { text: "Eu quero um café, por favor.", verdict: "almost", feedback: { es: "Es correcto, pero «eu queria…» o «me vê…» suena más amable.", en: "Correct, but 'eu queria…' or 'me vê…' sounds friendlier." } }],
      distractors: ["quer", "uma", "gostaria"],
      tags: ["restaurant", "polite"],
    },
    {
      id: "me-ve-um-pao", type: "sentence", target: "Me vê dois pães de queijo, por favor.",
      gloss: { es: "Dame dos panes de queso, por favor.", en: "Can I have two cheese breads, please?" },
      accept: [{ text: "Me dá dois pães de queijo, por favor." }, { text: "Eu queria dois pães de queijo, por favor." }],
      variants: [{ region: "PT", text: "Dê-me dois pães de queijo, se faz favor.", note: { es: "En Portugal el pronombre va detrás: dê-me…, y se dice mucho «se faz favor».", en: "In Portugal the pronoun follows the verb (dê-me…) and people say 'se faz favor'." } }],
      distractors: ["duas", "pão", "do"],
      note: { es: "«Me vê…» (literalmente «me ves») es la manera brasileña de pedir en un mostrador.", en: "'Me vê…' (literally 'see me…') is the Brazilian way to order at a counter." },
      tags: ["restaurant", "chunk"],
    },
    {
      id: "a-conta-por-favor", type: "phrase", pos: "phrase", target: "A conta, por favor.",
      gloss: { es: "La cuenta, por favor.", en: "The bill, please." },
      accept: [{ text: "Traz a conta, por favor." }, { text: "Fecha a conta, por favor." }],
      distractors: ["O conto, por favor.", "A cuenta, por favor.", "Uma conta, por favor."],
      tags: ["restaurant", "chunk"],
    },
    {
      id: "quanto-e", type: "phrase", pos: "phrase", target: "Quanto é?",
      gloss: { es: "¿Cuánto es?", en: "How much is it?" },
      accept: [{ text: "Quanto custa?" }, { text: "Quanto fica?" }],
      distractors: ["Quanto está?", "Quantos é?", "Qual é?"],
      tags: ["restaurant", "money", "chunk"],
    },
    {
      id: "com-acucar", type: "sentence", target: "Com açúcar ou sem açúcar?",
      gloss: { es: "¿Con azúcar o sin azúcar?", en: "With or without sugar?" },
      distractors: ["cem", "o", "adoçante"],
      note: { es: "«sem» (sin) y «cem» (100) suenan igual.", en: "'sem' (without) and 'cem' (100) sound the same." },
      tags: ["restaurant"],
    },
    {
      id: "uma-cerveja-gelada", type: "sentence", target: "Uma cerveja bem gelada, por favor.",
      gloss: { es: "Una cerveza bien fría, por favor.", en: "A nice cold beer, please." },
      distractors: ["um", "frio", "gelado"],
      tags: ["restaurant", "drinks"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-artigos", type: "pattern", target: "o / a / os / as · um / uma / uns / umas",
      gloss: { es: "artículos definidos e indefinidos", en: "definite and indefinite articles" },
      pattern: {
        rule: {
          es: "Definidos: o, a, os, as (el, la, los, las). Indefinidos: um, uma, uns, umas. Algunas palabras cambian de género respecto al español: o leite, a árvore, o sangue.",
          en: "Definite: o, a, os, as (the). Indefinite: um, uma, uns, umas (a, some). Learn each noun with its article.",
        },
        table: [["", "m", "f"], ["el / the", "o pão", "a água"], ["los / the (pl.)", "os pães", "as águas"], ["un / a", "um suco", "uma cerveja"], ["unos / some", "uns sucos", "umas cervejas"]],
      },
      question: {
        prompt: { es: "Completa: «Eu queria ___ água, por favor.»", en: "Complete: 'Eu queria ___ água, por favor.'" },
        options: ["uma", "um", "o", "uns"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-artigos"], tags: ["grammar", "articles"],
    },
    {
      id: "pat-queria", type: "pattern", target: "Eu quero → Eu queria / Eu gostaria de",
      gloss: { es: "pedir con cortesía", en: "ordering politely" },
      pattern: {
        rule: {
          es: "Para pedir, «eu quero» suena brusco. Se usa «eu queria» (imperfecto de cortesía), «eu gostaria de» o, en el mostrador, «me vê / me dá».",
          en: "'Eu quero' (I want) sounds blunt. Use 'eu queria' or 'eu gostaria de' (I'd like), or at a counter 'me vê / me dá'.",
        },
        table: [["brusco / blunt", "Quero um suco."], ["cortés / polite", "Queria um suco, por favor."], ["formal", "Gostaria de um suco, por favor."], ["balcão / counter", "Me vê um suco, por favor."]],
      },
      question: {
        prompt: { es: "En un restaurante elegante, ¿qué dices?", en: "In a smart restaurant, what do you say?" },
        options: ["Eu gostaria de ver o cardápio, por favor.", "Eu quero o cardápio.", "Me dá o cardápio aí.", "Gosto o cardápio."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-queria"], tags: ["grammar", "polite"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-padaria", type: "listening", target: "Bom dia! Hoje tem pão de queijo quentinho e suco de laranja natural. O café com leite custa cinco reais.",
      gloss: { es: "¡Buenos días! Hoy hay pan de queso calentito y jugo de naranja natural. El café con leche cuesta cinco reales.", en: "Good morning! Today there's warm cheese bread and fresh orange juice. A white coffee costs five reais." },
      question: {
        prompt: { es: "¿Cuánto cuesta el café con leche?", en: "How much is the white coffee?" },
        options: [
          { es: "Cinco reales", en: "Five reais" },
          { es: "Quince reales", en: "Fifteen reais" },
          { es: "Seis reales", en: "Six reais" },
          { es: "Es gratis con el pan", en: "It's free with the bread" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "restaurant", "money"],
    },
    {
      id: "dlg-padaria", type: "dialogue", target: "Para levar.",
      gloss: { es: "Para llevar.", en: "To take away." },
      turns: [
        { who: "A", target: "Bom dia! O que vai ser?", gloss: { es: "¡Buenos días! ¿Qué va a ser?", en: "Good morning! What can I get you?" } },
        { who: "B", target: "Me vê um cafezinho e um pão na chapa, por favor.", gloss: { es: "Deme un cafecito y un pan a la plancha, por favor.", en: "A small coffee and a toasted roll, please." } },
        { who: "A", target: "Para comer aqui ou para levar?", gloss: { es: "¿Para comer aquí o para llevar?", en: "Eat in or take away?" } },
        { who: "B", target: "Para levar. Quanto é?", gloss: { es: "Para llevar. ¿Cuánto es?", en: "To take away. How much is it?" } },
        { who: "A", target: "Oito e cinquenta.", gloss: { es: "Ocho cincuenta.", en: "Eight fifty." } },
      ],
      question: {
        prompt: { es: "¿Dónde va a comer B?", en: "Where is B going to eat?" },
        options: [
          { es: "Fuera: lo pide para llevar", en: "Elsewhere: it's to take away" },
          { es: "En la padaria", en: "In the bakery" },
          { es: "No va a comer, solo toma café", en: "B isn't eating, only drinking coffee" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "restaurant"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-copo", type: "bridge", onlyFor: "es", target: "o copo",
      gloss: { es: "el vaso (para beber)", en: "the glass (for drinking)" },
      question: {
        prompt: { es: "Pides «um copo de água». Te traen…", en: "You ask for 'um copo de água'. You get…" },
        options: [
          { es: "un vaso de agua", en: "a glass of water" },
          { es: "una copa de vino", en: "a glass of wine" },
          { es: "un florero con agua", en: "a vase of water" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: «copo» es el vaso; «vaso» en portugués es un florero o una maceta, y la copa de vino es «a taça»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "restaurant"],
    },
    {
      id: "br-esquisito", type: "bridge", onlyFor: "es", target: "esquisito",
      gloss: { es: "raro, extraño", en: "strange, weird" },
      question: {
        prompt: { es: "Alguien prueba el jugo y dice «Que esquisito!». Quiere decir que…", en: "Someone tastes the juice and says 'Que esquisito!'. They mean…" },
        options: [
          { es: "tiene un sabor raro", en: "it tastes strange" },
          { es: "está riquísimo", en: "it's delicious" },
          { es: "está muy frío", en: "it's very cold" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: «esquisito» = raro; para «exquisito» se dice «delicioso» o «uma delícia»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "food"],
    },
    {
      id: "br-refrigerante", type: "bridge", onlyFor: "en", target: "o refrigerante",
      gloss: { es: "el refresco, la gaseosa", en: "the soft drink, soda" },
      question: {
        prompt: { es: "«Um refrigerante, por favor» pide…", en: "'Um refrigerante, por favor' asks for…" },
        options: [{ es: "un refresco", en: "a soft drink" }, { es: "un refrigerador", en: "a fridge" }, { es: "agua con hielo", en: "iced water" }],
        answer: 0,
      },
      note: { en: "False friend: refrigerante is a soft drink; the fridge is 'a geladeira' in Brazil." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "drinks"],
    },
  ]),
};
