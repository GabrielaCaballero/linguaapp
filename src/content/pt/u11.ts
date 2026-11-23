import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u11",
  lang: "pt",
  index: 11,
  cefr: "A2",
  title: { target: "Quando eu era criança", es: "La infancia", en: "When I was little" },
  canDo: [
    { es: "Puedo describir cómo era mi vida de niño/a y qué hacía siempre.", en: "I can describe what my life was like as a child and what I used to do." },
    { es: "Sé usar el pretérito imperfeito (eu brincava, era, tinha) y distinguirlo del perfeito.", en: "I can use the imperfect (eu brincava, era, tinha) and tell it apart from the simple past." },
  ],
  icon: "🧸",
  items: build("pt", 11, "A2", [
    // ── Words ────────────────────────────────────────────────
    { id: "crianca", type: "word", pos: "noun", target: "a criança", gender: "f", plural: "as crianças", gloss: { es: "el niño / la niña (cualquier niño)", en: "the child" }, distractors: ["o criança", "a criação", "a criada"], note: { es: "Siempre femenino, aunque sea un niño: o Pedro é uma criança.", en: "Always feminine, even for a boy: o Pedro é uma criança." }, tags: ["childhood", "people"] },
    { id: "infancia", type: "word", pos: "noun", target: "a infância", gender: "f", plural: "as infâncias", gloss: { es: "la infancia", en: "the childhood" }, distractors: ["a infantil", "o infante", "a infanta"], tags: ["childhood"] },
    { id: "brincar", type: "word", pos: "verb", target: "brincar", gloss: { es: "jugar (los niños) / bromear", en: "to play (children) / to joke" }, forms: { "eu (imperf.)": "brincava" }, distractors: ["jogar", "saltar", "brigar"], tags: ["childhood", "verbs"] },
    { id: "brinquedo", type: "word", pos: "noun", target: "o brinquedo", gender: "m", plural: "os brinquedos", gloss: { es: "el juguete", en: "the toy" }, distractors: ["a brinquedo", "o brinco", "o jogueto"], note: { es: "Ojo: «o brinco» es el arete / pendiente.", en: "Careful: 'o brinco' is an earring." }, tags: ["childhood"] },
    { id: "vizinho", type: "word", pos: "noun", target: "o vizinho", gender: "m", plural: "os vizinhos", gloss: { es: "el vecino", en: "the neighbour" }, accept: [{ text: "a vizinha" }], distractors: ["o vecino", "o visinho", "o vinho"], tags: ["people"] },
    { id: "sorvete", type: "word", pos: "noun", target: "o sorvete", gender: "m", plural: "os sorvetes", gloss: { es: "el helado", en: "the ice cream" }, variants: [{ region: "PT", text: "o gelado", note: { es: "En Portugal el helado es «o gelado».", en: "In Portugal ice cream is 'o gelado'." } }], distractors: ["o sorbete", "a sorvete", "o helado"], tags: ["food", "childhood"] },
    { id: "interior", type: "word", pos: "noun", target: "o interior", gender: "m", plural: "os interiores", gloss: { es: "el interior (el campo, pueblos lejos de la capital)", en: "the countryside (inland, away from big cities)" }, distractors: ["a interior", "o inferior", "o campo de"], note: { es: "Morar no interior = vivir en un pueblo o ciudad pequeña, lejos de la capital.", en: "Morar no interior = to live in a small town away from the big cities." }, tags: ["places"] },
    { id: "costumar", type: "word", pos: "verb", target: "costumar", gloss: { es: "soler, acostumbrar", en: "to usually do / used to" }, forms: { eu: "costumo", "eu (imperf.)": "costumava" }, distractors: ["acostumar", "custar", "costurar"], note: { es: "Costumo acordar cedo = suelo despertarme temprano.", en: "Costumo acordar cedo = I usually wake up early." }, tags: ["verbs", "habits"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "quando-eu-era-crianca", type: "sentence", target: "Quando eu era criança, eu morava no interior.",
      gloss: { es: "Cuando era niño/a, vivía en un pueblo.", en: "When I was a child, I lived in the countryside." },
      accept: [{ text: "Quando eu era criança, morava no interior." }, { text: "Quando era criança, eu morava no interior." }],
      errors: [{ text: "Quando eu fui criança, eu morei no interior.", feedback: { es: "Para describir el pasado (situaciones, hábitos) se usa el imperfeito: era, morava.", en: "To describe the past (situations, habits) use the imperfect: era, morava." }, ruleId: "pt-g-imperfeito" }],
      distractors: ["fui", "morei", "uma"],
      tags: ["childhood", "past"],
    },
    {
      id: "brincava-na-rua", type: "sentence", target: "A gente brincava na rua todas as tardes.",
      gloss: { es: "Jugábamos en la calle todas las tardes.", en: "We used to play in the street every afternoon." },
      accept: [{ text: "Nós brincávamos na rua todas as tardes." }],
      distractors: ["brincou", "jogava", "todos"],
      grammar: ["pt-g-imperfeito"], tags: ["childhood", "past"],
    },
    {
      id: "minha-avo-fazia", type: "sentence", target: "Minha avó sempre fazia bolo de fubá aos domingos.",
      gloss: { es: "Mi abuela siempre hacía torta de maíz los domingos.", en: "My grandma always made cornmeal cake on Sundays." },
      accept: [{ text: "A minha avó sempre fazia bolo de fubá aos domingos." }],
      distractors: ["fez", "avô", "nos"],
      tags: ["childhood", "family", "food"],
    },
    {
      id: "eu-tinha-um-cachorro", type: "sentence", target: "Eu tinha um cachorro que se chamava Pipoca.",
      gloss: { es: "Tenía un perro que se llamaba Pipoca.", en: "I had a dog called Pipoca." },
      accept: [{ text: "Tinha um cachorro que se chamava Pipoca." }],
      variants: [{ region: "PT", text: "Eu tinha um cão que se chamava Pipoca.", note: { es: "En Portugal el perro es «o cão»; «cachorro» es el cachorro.", en: "In Portugal a dog is 'o cão'; 'cachorro' means puppy." } }],
      distractors: ["tive", "chamou", "cão"],
      tags: ["childhood", "animals"],
    },
    {
      id: "eu-estava-dormindo", type: "sentence", target: "Eu estava dormindo quando o telefone tocou.",
      gloss: { es: "Estaba durmiendo cuando sonó el teléfono.", en: "I was sleeping when the phone rang." },
      accept: [{ text: "Estava dormindo quando o telefone tocou." }],
      variants: [{ region: "PT", text: "Eu estava a dormir quando o telefone tocou." }],
      errors: [{ text: "Eu estive dormindo quando o telefone tocava.", feedback: { es: "La acción de fondo va en imperfeito (estava) y la que interrumpe en perfeito (tocou).", en: "The background action is imperfect (estava), the interruption is simple past (tocou)." }, ruleId: "pt-g-perfeito-imperfeito" }],
      distractors: ["estive", "tocava", "durmindo"],
      tags: ["past"],
    },
    {
      id: "costumava-ir", type: "sentence", target: "A gente costumava passar as férias na casa dos meus avós.",
      gloss: { es: "Solíamos pasar las vacaciones en casa de mis abuelos.", en: "We used to spend the holidays at my grandparents' house." },
      accept: [{ text: "Nós costumávamos passar as férias na casa dos meus avós." }],
      distractors: ["costumou", "avó", "das"],
      tags: ["childhood", "habits", "family"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-imperfeito", type: "paradigm", target: "brincar — imperfeito", spoken: "brincar",
      gloss: { es: "«brincar» en imperfeito", en: "brincar — imperfect" },
      grammar: ["pt-g-imperfeito"],
      paradigm: {
        caption: { es: "Conjuga «brincar» en imperfeito (yo jugaba…)", en: "Conjugate brincar in the imperfect (I used to play…)" },
        cells: [
          { label: "eu", answer: "brincava", ruleId: "pt-g-imperfeito" },
          { label: "você / ele / ela", answer: "brincava", ruleId: "pt-g-imperfeito" },
          { label: "nós", answer: "brincávamos", ruleId: "pt-g-imperfeito" },
          { label: "vocês / eles / elas", answer: "brincavam", ruleId: "pt-g-imperfeito" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "tab-ser-imperfeito", type: "paradigm", target: "ser / ter — imperfeito", spoken: "ser, ter",
      gloss: { es: "«ser» y «ter» en imperfeito", en: "ser and ter — imperfect" },
      grammar: ["pt-g-imperfeito"],
      paradigm: {
        caption: { es: "Completa con el imperfeito", en: "Fill in the imperfect" },
        cells: [
          { label: "eu (ser)", answer: "era", ruleId: "pt-g-imperfeito" },
          { label: "nós (ser)", answer: "éramos", ruleId: "pt-g-imperfeito" },
          { label: "eles (ser)", answer: "eram", ruleId: "pt-g-imperfeito" },
          { label: "eu (ter)", answer: "tinha", ruleId: "pt-g-imperfeito" },
          { label: "nós (ter)", answer: "tínhamos", ruleId: "pt-g-imperfeito" },
          { label: "eu (ir)", answer: "ia", ruleId: "pt-g-imperfeito" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "pat-perfeito-imperfeito", type: "pattern", target: "Eu lia quando ele chegou.",
      gloss: { es: "perfeito o imperfeito", en: "simple past or imperfect" },
      pattern: {
        rule: {
          es: "Igual que en español: el imperfeito describe y cuenta hábitos (era, lia, costumava); el perfeito cuenta hechos puntuales (chegou, fiz). La acción interrumpida va en imperfeito.",
          en: "The imperfect describes situations and habits (era, lia = was, used to read); the simple past tells single events (chegou = arrived). An interrupted action is imperfect.",
        },
        table: [["imperfeito", "Fazia sol. / Eu sempre lia."], ["perfeito", "Ontem choveu. / Li um livro."], ["os dois / both", "Eu lia quando ele chegou."]],
      },
      question: {
        prompt: { es: "Completa: «Quando eu ___ pequena, eu ___ medo do escuro.»", en: "Complete: 'Quando eu ___ pequena, eu ___ medo do escuro.'" },
        options: ["era / tinha", "fui / tive", "era / tive", "fui / tinha"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-perfeito-imperfeito"], tags: ["grammar", "past"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-infancia", type: "listening", target: "Eu cresci em Minas, numa cidade bem pequena. Não tinha shopping nem cinema, mas a gente era feliz: tomava banho de rio e subia em árvore o dia inteiro.",
      gloss: { es: "Crecí en Minas, en una ciudad muy pequeña. No había centro comercial ni cine, pero éramos felices: nos bañábamos en el río y nos subíamos a los árboles todo el día.", en: "I grew up in Minas, in a very small town. There was no mall or cinema, but we were happy: we swam in the river and climbed trees all day." },
      question: {
        prompt: { es: "¿Qué hacían los niños en el pueblo?", en: "What did the kids do in the town?" },
        options: [
          { es: "Se bañaban en el río y trepaban árboles", en: "Swam in the river and climbed trees" },
          { es: "Iban al cine", en: "Went to the cinema" },
          { es: "Iban al centro comercial", en: "Went to the mall" },
          { es: "Se aburrían mucho", en: "Were very bored" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "childhood"],
    },
    {
      id: "dlg-infancia", type: "dialogue", target: "Eu era muito tímido.",
      gloss: { es: "Yo era muy tímido.", en: "I was very shy." },
      turns: [
        { who: "A", target: "Como você era quando era criança?", gloss: { es: "¿Cómo eras de niño?", en: "What were you like as a child?" } },
        { who: "B", target: "Eu era muito tímido. Não falava com ninguém na escola.", gloss: { es: "Era muy tímido. No hablaba con nadie en la escuela.", en: "I was very shy. I didn't talk to anyone at school." } },
        { who: "A", target: "Sério? Hoje você não para de falar!", gloss: { es: "¿En serio? ¡Hoy no paras de hablar!", en: "Really? These days you never stop talking!" } },
      ],
      question: {
        prompt: { es: "¿Qué cambió en B?", en: "How has B changed?" },
        options: [
          { es: "Antes era tímido; ahora habla mucho", en: "He used to be shy; now he talks a lot" },
          { es: "Antes hablaba mucho; ahora es tímido", en: "He used to talk a lot; now he's shy" },
          { es: "Nada: sigue igual", en: "Nothing: he's the same" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "childhood"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-brincar", type: "bridge", onlyFor: "es", target: "brincar",
      gloss: { es: "jugar (niños) / bromear", en: "to play / to joke" },
      question: {
        prompt: { es: "«As crianças estão brincando no parque» significa que los niños…", en: "'As crianças estão brincando no parque' means the children are…" },
        options: [{ es: "están jugando en el parque", en: "playing in the park" }, { es: "están saltando en el parque", en: "jumping in the park" }, { es: "están peleando en el parque", en: "fighting in the park" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «brincar» = jugar (como niños) o bromear (tô brincando = es broma); saltar es «pular»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "childhood"],
    },
    {
      id: "br-en-used-to", type: "bridge", onlyFor: "en", target: "Eu nadava todo dia.",
      gloss: { es: "Nadaba todos los días.", en: "I used to swim every day." },
      distractors: ["Eu usava nadar todo dia.", "Eu nadei todo dia.", "Eu usei a nadar."],
      note: { en: "English 'used to' is just the imperfect: eu nadava. Don't translate it with 'usar'." },
      exercises: ["guess", "recall"], tags: ["bridge", "past"],
    },
  ]),
};
