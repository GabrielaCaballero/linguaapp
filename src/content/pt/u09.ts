import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u09",
  lang: "pt",
  index: 9,
  cefr: "A1.2",
  title: { target: "Na feira", es: "En la feria", en: "At the market" },
  canDo: [
    { es: "Puedo comprar fruta y verdura, pedir cantidades y preguntar precios.", en: "I can buy fruit and vegetables, ask for quantities and ask prices." },
    { es: "Sé señalar cosas con este, esse, aquele.", en: "I can point things out with este, esse, aquele." },
    { es: "Sé formar plurales irregulares: pão → pães, limão → limões.", en: "I can form irregular plurals: pão → pães, limão → limões." },
  ],
  icon: "🍍",
  items: build("pt", 9, "A1.2", [
    {
      id: "s-oes", type: "sound", target: "limões",
      gloss: { es: "limones", en: "limes / lemons" },
      distractors: ["limãos", "limones", "limoes"],
      note: {
        es: "«ões» es una o nasal seguida de «i»: limões ≈ «limóinsh». Es el plural de muchas palabras en -ão.",
        en: "'ões' is a nasal 'oy': limões ≈ 'lee-MOYNS'. It's the plural of many -ão words.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "nasal", "plural"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "feira", type: "word", pos: "noun", target: "a feira", gender: "f", plural: "as feiras", gloss: { es: "la feria (mercado al aire libre)", en: "the street market" }, distractors: ["o feira", "a fera", "a festa"], note: { es: "En Brasil, «a feira» es el mercado callejero semanal de frutas y verduras.", en: "In Brazil, 'a feira' is the weekly open-air fruit and veg market." }, tags: ["shopping", "food"] },
    { id: "abacaxi", type: "word", pos: "noun", target: "o abacaxi", gender: "m", plural: "os abacaxis", gloss: { es: "la piña / el ananá", en: "the pineapple" }, variants: [{ region: "PT", text: "o ananás", note: { es: "En Portugal: o ananás.", en: "In Portugal: o ananás." } }], distractors: ["o abacate", "a abacaxi", "o ananás de"], tags: ["food", "fruit"] },
    { id: "abacate", type: "word", pos: "noun", target: "o abacate", gender: "m", plural: "os abacates", gloss: { es: "la palta / el aguacate", en: "the avocado" }, distractors: ["o abacaxi", "a abacate", "o aguacate"], note: { es: "En Brasil se come mucho dulce, en batido con leche y azúcar.", en: "In Brazil it's often eaten sweet, blended with milk and sugar." }, tags: ["food", "fruit"] },
    { id: "laranja", type: "word", pos: "noun", target: "a laranja", gender: "f", plural: "as laranjas", gloss: { es: "la naranja", en: "the orange" }, distractors: ["o laranja", "a naranja", "a lanterna"], tags: ["food", "fruit"] },
    { id: "ovo", type: "word", pos: "noun", target: "o ovo", gender: "m", plural: "os ovos", gloss: { es: "el huevo", en: "the egg" }, distractors: ["a ova", "o uovo", "o novo"], note: { es: "En el plural la o se abre: ovo ≈ «ôvu», ovos ≈ «óvus».", en: "The vowel opens in the plural: ovo ≈ 'OH-voo', ovos ≈ 'AW-voos'." }, tags: ["food"] },
    { id: "quilo", type: "word", pos: "noun", target: "o quilo", gender: "m", plural: "os quilos", gloss: { es: "el kilo", en: "the kilo" }, distractors: ["a quilo", "o kilo de", "o quilômetro"], tags: ["shopping", "quantities"] },
    { id: "barato", type: "word", pos: "adj", target: "barato", gloss: { es: "barato", en: "cheap" }, accept: [{ text: "barata" }], distractors: ["caro", "barata de", "baratinho de"], note: { es: "Ojo: «a barata» es también la cucaracha.", en: "Careful: 'a barata' is also a cockroach." }, tags: ["shopping", "money"] },
    { id: "caro", type: "word", pos: "adj", target: "caro", gloss: { es: "caro", en: "expensive" }, accept: [{ text: "cara" }], distractors: ["barato", "claro", "carro"], tags: ["shopping", "money"] },
    { id: "sacola", type: "word", pos: "noun", target: "a sacola", gender: "f", plural: "as sacolas", gloss: { es: "la bolsa (de compras)", en: "the shopping bag" }, variants: [{ region: "PT", text: "o saco", note: { es: "En Portugal: o saco.", en: "In Portugal: o saco." } }], distractors: ["o saco de", "a bolsa", "a sacada"], note: { es: "«a bolsa» en Brasil es la cartera o bolso de mano.", en: "'a bolsa' in Brazil is a handbag." }, tags: ["shopping"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "quanto-custa-o-quilo", type: "sentence", target: "Quanto custa o quilo do tomate?",
      gloss: { es: "¿Cuánto cuesta el kilo de tomate?", en: "How much is a kilo of tomatoes?" },
      accept: [{ text: "Quanto é o quilo do tomate?" }, { text: "Quanto tá o quilo do tomate?" }],
      distractors: ["custam", "de o", "Quantos"],
      tags: ["shopping", "money"],
    },
    {
      id: "meio-quilo-de-uva", type: "sentence", target: "Me vê meio quilo de uva e uma dúzia de ovos.",
      gloss: { es: "Deme medio kilo de uvas y una docena de huevos.", en: "Half a kilo of grapes and a dozen eggs, please." },
      accept: [{ text: "Me dá meio quilo de uva e uma dúzia de ovos." }, { text: "Eu queria meio quilo de uva e uma dúzia de ovos." }],
      errors: [{ text: "Me vê meia quilo de uva e uma dúzia de ovos.", feedback: { es: "«quilo» es masculino: meio quilo (pero meia dúzia).", en: "'quilo' is masculine: meio quilo (but meia dúzia)." } }],
      distractors: ["meia", "das", "um"],
      tags: ["shopping", "quantities"],
    },
    {
      id: "esse-e-mais-barato", type: "sentence", target: "Esse abacaxi aqui é mais barato que aquele ali.",
      gloss: { es: "Esta piña de acá es más barata que aquella de allá.", en: "This pineapple here is cheaper than that one over there." },
      accept: [{ text: "Este abacaxi aqui é mais barato que aquele ali." }, { text: "Esse abacaxi aqui é mais barato do que aquele ali." }],
      distractors: ["aquilo", "isso", "menos"],
      grammar: ["pt-g-demonstrativos"], tags: ["shopping", "comparison"],
    },
    {
      id: "o-que-e-isso", type: "sentence", target: "O que é isso?",
      gloss: { es: "¿Qué es eso?", en: "What's that?" },
      accept: [{ text: "Que é isso?" }, { text: "O que é isto?" }],
      errors: [{ text: "O que é esso?", feedback: { es: "La forma neutra es «isso», con i.", en: "The neuter form is 'isso', with an i." }, ruleId: "pt-g-demonstrativos" }],
      distractors: ["esse", "aquele", "está"],
      tags: ["shopping", "chunk"],
    },
    {
      id: "so-isso", type: "phrase", pos: "phrase", target: "Só isso, obrigado.",
      gloss: { es: "Nada más, gracias.", en: "That's all, thanks." },
      accept: [{ text: "Só isso, obrigada." }, { text: "É só isso, obrigado." }, { text: "É só, obrigado." }],
      distractors: ["Sozinho, obrigado.", "Só esse, obrigado.", "Mais isso, obrigado."],
      tags: ["shopping", "chunk"],
    },
    {
      id: "pode-ser-no-cartao", type: "sentence", target: "Pode ser no cartão?",
      gloss: { es: "¿Puedo pagar con tarjeta?", en: "Can I pay by card?" },
      accept: [{ text: "Aceita cartão?" }, { text: "Posso pagar com cartão?" }],
      distractors: ["carta", "na", "Posso"],
      note: { es: "Respuesta típica: «Débito ou crédito?». También se usa mucho el Pix, la transferencia instantánea.", en: "Typical reply: 'Débito ou crédito?'. Brazilians also pay a lot by Pix, an instant transfer." },
      tags: ["shopping", "money"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-demonstrativos", type: "pattern", target: "este / esse / aquele · isto / isso / aquilo",
      gloss: { es: "demostrativos", en: "demonstratives (this / that)" },
      pattern: {
        rule: {
          es: "Como en español: este (aquí), esse (ahí), aquele (allá). En Brasil, en el habla, este y esse se confunden y se usa sobre todo «esse». Para cosas sin nombre: isto, isso, aquilo.",
          en: "este (this, here), esse (that, near you), aquele (that, over there). In Brazilian speech este and esse merge and 'esse' is used most. For unnamed things: isto, isso, aquilo.",
        },
        table: [["aqui", "este / esta", "isto"], ["aí", "esse / essa", "isso"], ["ali / lá", "aquele / aquela", "aquilo"]],
      },
      question: {
        prompt: { es: "Señalas algo lejos, sin saber qué es: «¿Qué es aquello?»", en: "You point at something far off, not knowing what it is: 'What's that over there?'" },
        options: ["O que é aquilo?", "O que é aquele?", "O que é esso?", "O que é aquela?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-demonstrativos"], tags: ["grammar", "demonstratives"],
    },
    {
      id: "pat-plurais", type: "pattern", target: "limão → limões · pão → pães · papel → papéis",
      gloss: { es: "plurales irregulares", en: "irregular plurals" },
      pattern: {
        rule: {
          es: "-ão tiene tres plurales: -ões (limões, a mayoría), -ães (pães, alemães) y -ãos (mãos, irmãos). -l → -is (animal → animais, papel → papéis) y -m → -ns (homem → homens).",
          en: "-ão has three plurals: -ões (limões, most), -ães (pães, alemães) and -ãos (mãos, irmãos). -l → -is (animal → animais, papel → papéis) and -m → -ns (homem → homens).",
        },
        table: [["o limão", "os limões"], ["o pão", "os pães"], ["a mão", "as mãos"], ["o papel", "os papéis"], ["o homem", "os homens"]],
      },
      question: {
        prompt: { es: "El plural de «o melão» es…", en: "The plural of 'o melão' is…" },
        options: ["os melões", "os melãos", "os melães", "os melones"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-plurais"], tags: ["grammar", "plural"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-feira", type: "listening", target: "Olha a banana, freguesa! A dúzia é seis reais, mas duas dúzias saem por dez!",
      gloss: { es: "¡Mire las bananas, señora! La docena son seis reales, ¡pero dos docenas le salen diez!", en: "Bananas, madam! Six reais a dozen, but two dozen for ten!" },
      question: {
        prompt: { es: "¿Cuánto cuestan dos docenas?", en: "How much are two dozen?" },
        options: [
          { es: "Diez reales", en: "Ten reais" },
          { es: "Doce reales", en: "Twelve reais" },
          { es: "Seis reales", en: "Six reais" },
          { es: "Dos reales", en: "Two reais" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "shopping", "money"],
    },
    {
      id: "dlg-feira", type: "dialogue", target: "Pode escolher, freguês.",
      gloss: { es: "Puede elegir, señor.", en: "Help yourself, sir." },
      turns: [
        { who: "A", target: "Bom dia! Essas mangas estão doces?", gloss: { es: "¡Buen día! ¿Estos mangos están dulces?", en: "Morning! Are these mangoes sweet?" } },
        { who: "B", target: "Docinhas! Pode provar. Pode escolher, freguês.", gloss: { es: "¡Dulcísimos! Puede probar. Elija los que quiera.", en: "Really sweet! Have a taste. Help yourself." } },
        { who: "A", target: "Então me vê quatro. Quanto fica?", gloss: { es: "Entonces deme cuatro. ¿Cuánto es?", en: "Then I'll take four. How much is that?" } },
        { who: "B", target: "Quatro mangas, oito reais.", gloss: { es: "Cuatro mangos, ocho reales.", en: "Four mangoes, eight reais." } },
      ],
      question: {
        prompt: { es: "¿Cuánto cuesta cada mango?", en: "How much is each mango?" },
        options: [
          { es: "Dos reales", en: "Two reais" },
          { es: "Cuatro reales", en: "Four reais" },
          { es: "Ocho reales", en: "Eight reais" },
        ],
        answer: 0,
      },
      note: { es: "«a manga» es la fruta (mango) y también la manga de la camisa.", en: "'a manga' is a mango and also a shirt sleeve." },
      exercises: ["question"], tags: ["dialogue", "shopping"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-polvo", type: "bridge", onlyFor: "es", target: "o polvo",
      gloss: { es: "el pulpo", en: "the octopus" },
      question: {
        prompt: { es: "En el menú ves «arroz de polvo». Es arroz con…", en: "On the menu you see 'arroz de polvo'. It's rice with…" },
        options: [{ es: "pulpo", en: "octopus" }, { es: "polvo, tierra", en: "dust" }, { es: "pollo", en: "chicken" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «polvo» = pulpo; el polvo (de la casa) es «o pó» y el pollo es «o frango»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "food"],
    },
    {
      id: "br-salsa", type: "bridge", onlyFor: "es", target: "a salsa",
      gloss: { es: "el perejil", en: "the parsley" },
      distractors: ["o molho", "o salsão", "a sálvia"],
      note: { es: "Falso amigo: «salsa» es perejil; la salsa (para la comida) es «o molho»." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "food"],
    },
    {
      id: "br-en-pasta", type: "bridge", onlyFor: "en", target: "o molho",
      gloss: { es: "la salsa (para comer)", en: "the sauce" },
      distractors: ["a salsa", "o sauce", "o molhado"],
      note: { en: "Sauce is 'o molho'; 'a salsa' in Portuguese is parsley." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "food"],
    },
  ]),
};
