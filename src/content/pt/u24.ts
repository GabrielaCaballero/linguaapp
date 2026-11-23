import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u24",
  lang: "pt",
  index: 24,
  cefr: "B2",
  title: { target: "Expressões e português do dia a dia", es: "Expresiones y portugués coloquial", en: "Idioms and everyday Portuguese" },
  canDo: [
    { es: "Entiendo el portugués hablado informal (tô, cê, pra, né) y expresiones muy usadas.", en: "I can understand informal spoken Portuguese (tô, cê, pra, né) and common idioms." },
    { es: "Sé usar diminutivos con valor afectivo (cafezinho, rapidinho).", en: "I can use diminutives for warmth and nuance (cafezinho, rapidinho)." },
  ],
  icon: "😎",
  items: build("pt", 24, "B2", [
    { id: "legal", type: "word", pos: "adj", target: "legal", register: "informal", gloss: { es: "genial, buenísimo (informal)", en: "cool, nice (informal)" }, variants: [{ region: "PT", text: "fixe", note: { es: "En Portugal: fixe.", en: "In Portugal: fixe." } }], distractors: ["legar", "lindo de", "ilegal"], tags: ["colloquial"] },
    { id: "valeu", type: "phrase", pos: "phrase", target: "Valeu!", register: "informal", gloss: { es: "¡Gracias! / ¡Genial! (informal)", en: "Thanks! / Cheers! (informal)" }, distractors: ["Vale!", "Valheu!", "Valeu de!"], tags: ["colloquial", "chunk"] },
    { id: "beleza", type: "phrase", pos: "phrase", target: "Beleza!", register: "informal", gloss: { es: "¡Perfecto! / ¡Listo! (informal)", en: "Great! / OK! (informal)" }, accept: [{ text: "Fechado!" }], distractors: ["Belo!", "Bonito!", "Belezas!"], note: { es: "También como saludo: «E aí, beleza?» (¿qué tal?).", en: "Also a greeting: 'E aí, beleza?' (how's it going?)." }, tags: ["colloquial", "chunk"] },
    { id: "cara", type: "word", pos: "noun", target: "o cara", gender: "m", plural: "os caras", register: "informal", gloss: { es: "el tipo, el muchacho (informal)", en: "the guy / dude (informal)" }, distractors: ["a cara de", "o caro", "o carinha de"], note: { es: "Masculino para «tipo»: o cara; «a cara» es la cara.", en: "Masculine for 'guy': o cara; 'a cara' is the face." }, tags: ["colloquial"] },
    { id: "saudade", type: "word", pos: "noun", target: "a saudade", gender: "f", plural: "as saudades", gloss: { es: "la nostalgia, el extrañar a alguien", en: "the longing / missing someone" }, distractors: ["o saudade", "a saudação", "a soledade"], note: { es: "Estou com saudade de você = te extraño.", en: "Estou com saudade de você = I miss you." }, tags: ["feelings", "culture"] },
    { id: "pisar-na-bola", type: "phrase", pos: "phrase", target: "pisar na bola", gloss: { es: "meter la pata, fallar", en: "to mess up / drop the ball" }, distractors: ["chutar a bola", "pisar a bola", "pisar no pé"], tags: ["idiom"] },
    { id: "dar-um-jeito", type: "phrase", pos: "phrase", target: "dar um jeito", gloss: { es: "arreglárselas, encontrar una solución", en: "to find a way / sort it out" }, distractors: ["fazer um jeito", "dar uma jeitinha", "dar o jeito de"], note: { es: "El «jeitinho brasileiro» es el arte de resolver cosas con creatividad (a veces saltándose reglas).", en: "The 'jeitinho brasileiro' is the art of getting round problems creatively (sometimes bending rules)." }, tags: ["idiom", "culture"] },
    { id: "estar-a-fim", type: "phrase", pos: "phrase", target: "estar a fim de", gloss: { es: "tener ganas de / estar interesado en alguien", en: "to feel like / to fancy someone" }, distractors: ["estar afim de", "estar no fim de", "estar a fim que"], note: { es: "Tô a fim de sair = tengo ganas de salir; ele tá a fim dela = le gusta ella.", en: "Tô a fim de sair = I feel like going out; ele tá a fim dela = he fancies her." }, tags: ["idiom", "colloquial"] },
    { id: "pagar-mico", type: "phrase", pos: "phrase", target: "pagar mico", gloss: { es: "hacer el ridículo", en: "to embarrass yourself" }, distractors: ["pagar o macaco", "pagar um mico de", "fazer mico pago"], tags: ["idiom"] },
    { id: "quebrar-o-galho", type: "phrase", pos: "phrase", target: "quebrar o galho", gloss: { es: "sacar de un apuro, hacer un favor", en: "to help someone out (as a stopgap)" }, distractors: ["quebrar a galha", "partir o galho", "quebrar o galo"], tags: ["idiom"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "to-cansado", type: "sentence", target: "Tô morrendo de fome, cê quer comer alguma coisa?", register: "informal",
      gloss: { es: "Me muero de hambre, ¿quieres comer algo?", en: "I'm starving, do you want something to eat? (informal)" },
      accept: [{ text: "Estou morrendo de fome, você quer comer alguma coisa?" }],
      distractors: ["Tá", "fomes", "algo de"],
      grammar: ["pt-g-fala-coloquial"], tags: ["colloquial"],
    },
    {
      id: "pisei-na-bola", type: "sentence", target: "Foi mal, eu pisei na bola com você.", register: "informal",
      gloss: { es: "Perdón, metí la pata contigo.", en: "Sorry, I let you down. (informal)" },
      accept: [{ text: "Desculpa, eu pisei na bola com você." }],
      distractors: ["pisou", "a", "contigo"],
      tags: ["idiom"],
    },
    {
      id: "a-gente-da-um-jeito", type: "sentence", target: "Relaxa, a gente dá um jeito.", register: "informal",
      gloss: { es: "Tranquilo, ya lo resolvemos.", en: "Relax, we'll sort it out." },
      distractors: ["damos", "faz", "jeitos"],
      tags: ["idiom"],
    },
    {
      id: "rapidinho", type: "sentence", target: "Espera um pouquinho, eu volto rapidinho.", register: "informal",
      gloss: { es: "Espera un poquito, vuelvo enseguida.", en: "Wait a sec, I'll be right back." },
      accept: [{ text: "Espera um minutinho, eu volto rapidinho." }],
      variants: [{ region: "PT", text: "Espera um bocadinho, eu volto já." }],
      distractors: ["rápido de", "poquinho", "volta"],
      grammar: ["pt-g-diminutivos"], tags: ["colloquial", "diminutive"],
    },
    {
      id: "que-saudade", type: "sentence", target: "Que saudade da minha terra!",
      gloss: { es: "¡Cómo extraño mi tierra!", en: "How I miss my homeland!" },
      distractors: ["saudades de", "do", "Qual"],
      tags: ["feelings", "culture"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-fala-coloquial", type: "pattern", target: "estou → tô · você → cê · para → pra · não é? → né?",
      gloss: { es: "el portugués hablado de Brasil", en: "spoken Brazilian Portuguese" },
      pattern: {
        rule: {
          es: "En la conversación las palabras frecuentes se acortan: tô, tá, tamo (estar), cê (você), pra / pro (para / para o), né (não é). Se escriben así en chats, pero no en textos formales.",
          en: "In conversation frequent words shrink: tô, tá, tamo (estar), cê (você), pra / pro (para / para o), né (não é = isn't it). People write them in chats, not in formal texts.",
        },
        table: [["estou / está", "tô / tá"], ["você", "cê"], ["para / para o", "pra / pro"], ["não é?", "né?"], ["vamos embora", "bora"]],
      },
      question: {
        prompt: { es: "«Cê tá indo pro centro?» en lengua estándar es…", en: "'Cê tá indo pro centro?' in standard Portuguese is…" },
        options: ["Você está indo para o centro?", "Você está ido para o centro?", "Cê está indo por o centro?", "Você é indo para o centro?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-fala-coloquial"], tags: ["grammar", "colloquial"],
    },
    {
      id: "pat-diminutivos", type: "pattern", target: "café → cafezinho · agora → agorinha · rápido → rapidinho",
      gloss: { es: "los diminutivos -inho / -zinho", en: "diminutives -inho / -zinho" },
      pattern: {
        rule: {
          es: "-inho / -inha (casa → casinha) o -zinho / -zinha tras vocal tónica, diptongo o nasal (café → cafezinho, mãe → mãezinha). Expresan cariño, cortesía o intensidad, y también se usan con adverbios: agorinha, pertinho.",
          en: "-inho / -inha (casa → casinha) or -zinho / -zinha after a stressed vowel, diphthong or nasal (café → cafezinho). They express affection, politeness or intensity, even on adverbs: agorinha (just now), pertinho (really close).",
        },
        table: [["casa", "casinha"], ["café", "cafezinho"], ["pão", "pãozinho"], ["perto", "pertinho"], ["obrigado", "obrigadinho"]],
      },
      question: {
        prompt: { es: "«Está muy cerquita» se dice…", en: "'It's really close by' is…" },
        options: ["É pertinho.", "É pertozinho.", "É pertita.", "É pertico."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-diminutivos"], tags: ["grammar", "diminutive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-coloquial", type: "listening", target: "E aí, cara, beleza? Tô a fim de ir num barzinho hoje. Cê topa? Se não der, a gente marca pra amanhã, de boa.",
      gloss: { es: "¿Qué tal, amigo, todo bien? Tengo ganas de ir a un barcito hoy. ¿Te apuntas? Si no puedes, lo dejamos para mañana, tranquilo.", en: "Hey man, all good? I feel like going to a bar tonight. You up for it? If you can't, we'll do tomorrow, no worries." },
      question: {
        prompt: { es: "¿Qué propone?", en: "What does the speaker suggest?" },
        options: [
          { es: "Ir a un bar hoy o mañana", en: "Going to a bar today or tomorrow" },
          { es: "Ir a la playa", en: "Going to the beach" },
          { es: "Quedarse en casa", en: "Staying in" },
          { es: "Trabajar juntos", en: "Working together" },
        ],
        answer: 0,
      },
      note: { es: "topar = aceptar una propuesta; de boa = sin problema.", en: "topar = to be up for something; de boa = no worries." },
      exercises: ["question", "listen"], tags: ["listening", "colloquial"],
    },
    {
      id: "dlg-mico", type: "dialogue", target: "Que mico!",
      gloss: { es: "¡Qué vergüenza!", en: "How embarrassing!" },
      turns: [
        { who: "A", target: "Cara, paguei o maior mico na festa ontem.", gloss: { es: "Amigo, hice el ridículo total en la fiesta ayer.", en: "Man, I totally embarrassed myself at the party yesterday." } },
        { who: "B", target: "Sério? O que rolou?", gloss: { es: "¿En serio? ¿Qué pasó?", en: "Seriously? What happened?" } },
        { who: "A", target: "Chamei a namorada do meu chefe pelo nome da ex dele.", gloss: { es: "Llamé a la novia de mi jefe por el nombre de su ex.", en: "I called my boss's girlfriend by his ex's name." } },
        { who: "B", target: "Que mico!", gloss: { es: "¡Qué vergüenza!", en: "How embarrassing!" } },
      ],
      question: {
        prompt: { es: "¿Qué hizo A?", en: "What did A do?" },
        options: [
          { es: "Confundió el nombre de la novia de su jefe", en: "Used the wrong name for the boss's girlfriend" },
          { es: "Se cayó bailando", en: "Fell over dancing" },
          { es: "Llegó tarde a la fiesta", en: "Arrived late to the party" },
        ],
        answer: 0,
      },
      note: { es: "«o que rolou» = qué pasó (muy coloquial).", en: "'o que rolou' = what happened (very informal)." },
      exercises: ["question"], tags: ["dialogue", "colloquial", "idiom"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-legal", type: "bridge", onlyFor: "es", target: "Que legal!",
      gloss: { es: "¡Qué bueno! / ¡Genial!", en: "How cool!" },
      question: {
        prompt: { es: "Le cuentas un plan a una amiga y te dice «Que legal!». Quiere decir…", en: "You tell a friend your plan and she says 'Que legal!'. She means…" },
        options: [{ es: "que le parece genial", en: "she thinks it's great" }, { es: "que es conforme a la ley", en: "it's lawful" }, { es: "que es aburrido", en: "it's boring" }],
        answer: 0,
      },
      note: { es: "«legal» en Brasil es sobre todo «genial, buena onda»; el sentido jurídico existe, pero es menos frecuente." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "colloquial"],
    },
    {
      id: "br-en-saudade", type: "bridge", onlyFor: "en", target: "Estou com saudade de você.",
      gloss: { es: "Te extraño.", en: "I miss you." },
      distractors: ["Eu perco você.", "Estou perdendo você.", "Sinto você."],
      note: { en: "'To miss someone' is 'ter / estar com saudade de'; 'perder' only means to miss a bus or lose something." },
      exercises: ["guess", "recall"], tags: ["bridge", "feelings"],
    },
  ]),
};
