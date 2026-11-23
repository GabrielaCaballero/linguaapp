import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u08",
  lang: "pt",
  index: 8,
  cefr: "A1.2",
  title: { target: "Tempo livre", es: "Tiempo libre", en: "Free time" },
  canDo: [
    { es: "Puedo decir qué me gusta hacer y proponer un plan.", en: "I can say what I like doing and suggest a plan." },
    { es: "Puedo hablar del tiempo (faz calor, está chovendo).", en: "I can talk about the weather (faz calor, está chovendo)." },
    { es: "Sé usar gostar de, ir + infinitivo y estar + gerundio.", en: "I can use gostar de, ir + infinitive and estar + gerund." },
  ],
  icon: "⚽",
  items: build("pt", 8, "A1.2", [
    {
      id: "s-ch", type: "sound", target: "chuva",
      gloss: { es: "lluvia", en: "rain" },
      distractors: ["tchuva", "xuba", "chuba"],
      note: {
        es: "«ch» y la x inicial suenan «sh» (como en «show»): chuva ≈ «shúva», xícara ≈ «shícara».",
        en: "'ch' and initial x sound like 'sh': chuva ≈ 'SHOO-va', xícara ≈ 'SHEE-ka-ra'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "ch-x"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "gostar-de", type: "phrase", pos: "phrase", target: "gostar de", gloss: { es: "gustar (me gusta…)", en: "to like" }, errors: [{ text: "gostar", feedback: { es: "Siempre con «de»: gosto de música.", en: "Always with 'de': gosto de música." }, ruleId: "pt-g-gostar-de" }], distractors: ["gostar a", "gustar de", "gosto do"], tags: ["leisure", "verbs"] },
    { id: "jogar", type: "word", pos: "verb", target: "jogar", gloss: { es: "jugar", en: "to play (a game or sport)" }, forms: { eu: "jogo", você: "joga" }, distractors: ["tocar", "jugar", "brincar"], note: { es: "Instrumentos: tocar violão; los niños que juegan: brincar.", en: "Instruments: tocar (tocar violão); children playing: brincar." }, tags: ["leisure", "sport"] },
    { id: "ler", type: "word", pos: "verb", target: "ler", gloss: { es: "leer", en: "to read" }, forms: { eu: "leio", você: "lê" }, distractors: ["leer", "lê", "ver"], tags: ["leisure"] },
    { id: "assistir", type: "word", pos: "verb", target: "assistir", gloss: { es: "ver (TV, una película, un partido)", en: "to watch (TV, a film, a match)" }, forms: { eu: "assisto", você: "assiste" }, distractors: ["olhar", "assistar", "atender"], note: { es: "Norma: assistir a um filme; en el habla, assistir um filme.", en: "Formal: assistir a um filme; in speech, assistir um filme." }, tags: ["leisure"] },
    { id: "praia", type: "word", pos: "noun", target: "a praia", gender: "f", plural: "as praias", gloss: { es: "la playa", en: "the beach" }, distractors: ["o praia", "a plaia", "a prata"], tags: ["leisure", "places"] },
    { id: "show", type: "word", pos: "noun", target: "o show", gender: "m", plural: "os shows", gloss: { es: "el concierto (de música popular)", en: "the gig / concert" }, variants: [{ region: "PT", text: "o concerto", note: { es: "En Portugal: o concerto.", en: "In Portugal: o concerto." } }], distractors: ["a show", "o espetáculo de", "o conserto"], tags: ["leisure", "music"] },
    { id: "fim-de-semana", type: "word", pos: "noun", target: "o fim de semana", gender: "m", plural: "os fins de semana", gloss: { es: "el fin de semana", en: "the weekend" }, distractors: ["a fim de semana", "o fim da semana", "o final semana"], tags: ["time", "leisure"] },
    { id: "calor", type: "word", pos: "noun", target: "o calor", gender: "m", plural: "os calores", gloss: { es: "el calor", en: "the heat" }, distractors: ["a calor", "o caldo", "o frio"], note: { es: "Masculino: o calor. Faz calor = hace calor.", en: "Masculine: o calor. Faz calor = it's hot." }, tags: ["weather"] },
    { id: "frio", type: "word", pos: "adj", target: "frio", gloss: { es: "frío", en: "cold" }, accept: [{ text: "fria" }], distractors: ["fio", "quente", "fresco"], tags: ["weather"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "gosto-de-futebol", type: "sentence", target: "Eu gosto muito de futebol.",
      gloss: { es: "Me gusta mucho el fútbol.", en: "I really like football." },
      accept: [{ text: "Gosto muito de futebol." }],
      errors: [{ text: "Eu gosto muito o futebol.", feedback: { es: "gostar + de: gosto de futebol, gosto do Brasil.", en: "gostar + de: gosto de futebol, gosto do Brasil." }, ruleId: "pt-g-gostar-de" }, { text: "Me gosta muito o futebol.", feedback: { es: "En portugués la persona es el sujeto: eu gosto de…", en: "In Portuguese the person is the subject: eu gosto de…" }, ruleId: "pt-g-gostar-de" }],
      distractors: ["do", "gosta", "me"],
      tags: ["leisure", "sport"],
    },
    {
      id: "voce-gosta-de-ler", type: "sentence", target: "Você gosta de ler?", register: "informal",
      gloss: { es: "¿Te gusta leer?", en: "Do you like reading? (informal)" },
      variants: [{ region: "PT", text: "Gostas de ler?" }],
      distractors: ["gosto", "a", "o senhor"],
      tags: ["leisure"],
    },
    {
      id: "vamos-a-praia", type: "sentence", target: "Vamos à praia no sábado?",
      gloss: { es: "¿Vamos a la playa el sábado?", en: "Shall we go to the beach on Saturday?" },
      accept: [{ text: "Vamos para a praia no sábado?" }, { text: "Bora na praia no sábado?" }, { text: "Vamos na praia no sábado?", verdict: "almost", feedback: { es: "Muy común en el habla brasileña; la norma pide «ir a»: vamos à praia.", en: "Very common in Brazilian speech; the standard is 'ir a': vamos à praia." } }],
      errors: [{ text: "Vamos a praia no sábado?", feedback: { es: "a + a = à: vamos à praia.", en: "a + a = à: vamos à praia." }, ruleId: "pt-g-em-contracoes" }],
      distractors: ["na", "ao", "vai"],
      tags: ["leisure", "plans"],
    },
    {
      id: "vou-jogar-tenis", type: "sentence", target: "Amanhã eu vou jogar tênis com a minha irmã.",
      gloss: { es: "Mañana voy a jugar al tenis con mi hermana.", en: "Tomorrow I'm going to play tennis with my sister." },
      accept: [{ text: "Amanhã vou jogar tênis com a minha irmã." }, { text: "Amanhã eu vou jogar tênis com minha irmã." }],
      variants: [{ region: "PT", text: "Amanhã vou jogar ténis com a minha irmã.", note: { es: "En Portugal se escribe «ténis», con tilde aguda.", en: "In Portugal it's spelt 'ténis', with an acute accent." } }],
      errors: [{ text: "Amanhã eu vou a jogar tênis com a minha irmã.", feedback: { es: "Sin «a»: ir + infinitivo directo (vou jogar).", en: "No 'a': ir + infinitive directly (vou jogar)." }, ruleId: "pt-g-ir-infinitivo" }],
      distractors: ["a", "tocar", "vai"],
      tags: ["leisure", "sport", "plans"],
    },
    {
      id: "esta-chovendo", type: "sentence", target: "Está chovendo muito hoje.",
      gloss: { es: "Está lloviendo mucho hoy.", en: "It's raining a lot today." },
      accept: [{ text: "Tá chovendo muito hoje." }],
      variants: [{ region: "PT", text: "Está a chover muito hoje.", note: { es: "En Portugal: estar a + infinitivo (está a chover).", en: "In Portugal: estar a + infinitive (está a chover)." } }],
      distractors: ["é", "chuva", "faz"],
      grammar: ["pt-g-estar-gerundio"], tags: ["weather"],
    },
    {
      id: "faz-calor", type: "sentence", target: "No verão faz muito calor no Rio.",
      gloss: { es: "En verano hace mucho calor en Río.", en: "In summer it's very hot in Rio." },
      distractors: ["está", "é", "frio"],
      tags: ["weather"],
    },
    {
      id: "estou-lendo", type: "sentence", target: "Agora eu estou lendo um livro ótimo.",
      gloss: { es: "Ahora estoy leyendo un libro buenísimo.", en: "I'm reading a great book at the moment." },
      accept: [{ text: "Agora estou lendo um livro ótimo." }],
      variants: [{ region: "PT", text: "Agora estou a ler um livro ótimo." }],
      distractors: ["leio", "lento", "é"],
      grammar: ["pt-g-estar-gerundio"], tags: ["leisure"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-ir", type: "paradigm", target: "ir — presente", spoken: "ir",
      gloss: { es: "«ir» en presente", en: "ir (to go) — present" },
      grammar: ["pt-g-ir-infinitivo"],
      paradigm: {
        caption: { es: "Conjuga «ir» en presente", en: "Conjugate ir in the present tense" },
        cells: [
          { label: "eu", answer: "vou", ruleId: "pt-g-ir-infinitivo" },
          { label: "você / ele / ela", answer: "vai", ruleId: "pt-g-ir-infinitivo" },
          { label: "nós", answer: "vamos", ruleId: "pt-g-ir-infinitivo" },
          { label: "vocês / eles / elas", answer: "vão", ruleId: "pt-g-ir-infinitivo" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-gostar-de", type: "pattern", target: "Eu gosto de música. · Ela gosta do Brasil.",
      gloss: { es: "gostar de", en: "gostar de (to like)" },
      pattern: {
        rule: {
          es: "Al revés que en español, quien siente el gusto es el sujeto: eu gosto (yo gusto), y lo que gusta va con «de»: gosto de você, gosto do mar.",
          en: "The person who likes is the subject (eu gosto) and the thing liked always takes 'de': gosto de você, gosto do mar.",
        },
        table: [["me gusta / I like", "eu gosto de…"], ["te gusta / you like", "você gosta de…"], ["nos gusta / we like", "a gente gosta de…"], ["les gusta / they like", "eles gostam de…"]],
      },
      question: {
        prompt: { es: "«A ellos les gusta la playa»:", en: "'They like the beach':" },
        options: ["Eles gostam da praia.", "Eles gostam a praia.", "Lhes gosta a praia.", "Eles gosta de praia."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-gostar-de"], tags: ["grammar", "verbs"],
    },
    {
      id: "pat-gerundio", type: "pattern", target: "Estou trabalhando. (PT: Estou a trabalhar.)",
      gloss: { es: "estar + gerundio", en: "estar + gerund (-ing)" },
      pattern: {
        rule: {
          es: "Para algo que pasa ahora, en Brasil: estar + gerundio (-ando, -endo, -indo), igual que en español. En Portugal: estar a + infinitivo.",
          en: "For something happening now, Brazil uses estar + gerund (-ando, -endo, -indo). Portugal uses estar a + infinitive.",
        },
        table: [["falar", "estou falando", "estou a falar"], ["comer", "está comendo", "está a comer"], ["dormir", "estão dormindo", "estão a dormir"]],
      },
      question: {
        prompt: { es: "En Brasil, «¿Qué estás haciendo?» es…", en: "In Brazil, 'What are you doing?' is…" },
        options: ["O que você está fazendo?", "O que você está a fazer?", "O que você faz agora?", "O que você está fazer?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-estar-gerundio"], tags: ["grammar", "progressive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-fim-de-semana", type: "listening", target: "No fim de semana eu vou a um show de samba na Lapa. No domingo, se não chover, vou à praia com uns amigos.",
      gloss: { es: "El fin de semana voy a un concierto de samba en Lapa. El domingo, si no llueve, voy a la playa con unos amigos.", en: "At the weekend I'm going to a samba gig in Lapa. On Sunday, if it doesn't rain, I'm going to the beach with some friends." },
      question: {
        prompt: { es: "¿Qué hará el domingo si llueve?", en: "What happens to Sunday's plan if it rains?" },
        options: [
          { es: "No irá a la playa", en: "No beach" },
          { es: "Irá al concierto", en: "The gig instead" },
          { es: "Irá a la playa igual", en: "The beach anyway" },
          { es: "Se quedará con la familia", en: "Staying with family" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "leisure", "plans"],
    },
    {
      id: "dlg-cinema", type: "dialogue", target: "Bora!",
      gloss: { es: "¡Vamos!", en: "Let's go!" },
      turns: [
        { who: "A", target: "E aí, vamos ao cinema hoje à noite?", gloss: { es: "Oye, ¿vamos al cine esta noche?", en: "Hey, shall we go to the cinema tonight?" } },
        { who: "B", target: "Hoje não dá, estou muito cansada. Que tal amanhã?", gloss: { es: "Hoy no puedo, estoy muy cansada. ¿Qué tal mañana?", en: "I can't tonight, I'm really tired. How about tomorrow?" } },
        { who: "A", target: "Amanhã às oito?", gloss: { es: "¿Mañana a las ocho?", en: "Tomorrow at eight?" } },
        { who: "B", target: "Bora!", gloss: { es: "¡Vamos!", en: "Let's go!" } },
      ],
      question: {
        prompt: { es: "¿Cuándo van al cine?", en: "When are they going to the cinema?" },
        options: [
          { es: "Mañana a las ocho", en: "Tomorrow at eight" },
          { es: "Esta noche", en: "Tonight" },
          { es: "No van a ir", en: "They aren't going" },
        ],
        answer: 0,
      },
      note: { es: "«Não dá» = no puedo / no se puede; «Bora!» = ¡vamos! (de «vamos embora»).", en: "'Não dá' = I can't / it's not possible; 'Bora!' = let's go (from 'vamos embora')." },
      exercises: ["question"], tags: ["dialogue", "plans"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-assistir", type: "bridge", onlyFor: "es", target: "assistir a um jogo",
      gloss: { es: "ver un partido", en: "to watch a match" },
      accept: [{ text: "assistir ao jogo" }, { text: "assistir um jogo" }, { text: "ver um jogo" }],
      distractors: ["assistir um jogador", "ver um jogo de", "olhar o jogo"],
      note: { es: "«assistir (a)» es ver TV, películas y partidos, y también conserva el sentido de «asistir»: assistir a uma aula. Ayudar es «ajudar»." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "leisure"],
    },
    {
      id: "br-en-assistir", type: "bridge", onlyFor: "en", target: "Vamos assistir ao jogo.",
      gloss: { es: "Vamos a ver el partido.", en: "Let's watch the match." },
      question: {
        prompt: { es: "«Vamos assistir ao jogo» significa…", en: "'Vamos assistir ao jogo' means…" },
        options: [{ es: "Vamos a ver el partido.", en: "Let's watch the match." }, { es: "Vamos a ayudar en el partido.", en: "Let's help at the match." }, { es: "Vamos a jugar el partido.", en: "Let's play the match." }],
        answer: 0,
      },
      note: { en: "False friend: assistir means to watch (TV, a film, a game); to assist is 'ajudar'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "leisure"],
    },
  ]),
};
