import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u31",
  lang: "it",
  index: 31,
  cefr: "C2",
  title: { target: "Sfumature di significato", es: "Matices de significado", en: "Shades of meaning" },
  canDo: [
    { es: "Puedo elegir entre sinónimos según la connotación y el registro.", en: "I can choose between near-synonyms by connotation and register." },
    { es: "Entiendo cómo cambia un adjetivo según vaya delante o detrás del sustantivo.", en: "I understand how an adjective changes meaning before or after the noun." },
    { es: "Sé hablar con tacto de temas delicados, como una muerte.", en: "I can talk tactfully about delicate matters, such as a death." },
  ],
  icon: "🔍",
  items: build("it", 31, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "scomparire", type: "word", pos: "verb", target: "scomparire",
      gloss: { es: "fallecer (en la prensa); desaparecer", en: "to pass away (in the press); to disappear" },
      forms: { pp: "scomparso", aux: "essere" },
      distractors: ["scomporre", "comparire", "scompartire"],
      note: { es: "En una noticia, «è scomparso» casi siempre significa que murió.", en: "In a news report, «è scomparso» almost always means he died." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "register"],
    },
    {
      id: "venire-a-mancare", type: "phrase", pos: "phrase", target: "venire a mancare",
      gloss: { es: "fallecer (forma delicada, con tacto)", en: "to pass away (gentle, tactful)" },
      distractors: ["venire a manco", "andare a mancare", "venire mancando"],
      note: { es: "Con essere: mia nonna è venuta a mancare.", en: "With essere: mia nonna è venuta a mancare." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "register", "chunk"],
    },
    {
      id: "testardo", type: "word", pos: "adj", target: "testardo",
      gloss: { es: "terco, cabeza dura", en: "stubborn, pig-headed" },
      distractors: ["testuale", "tardivo", "tostato"],
      note: { es: "Es negativo; para elogiar la misma cualidad se dice tenace.", en: "It's negative; to praise the same quality say tenace." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "character"],
    },
    {
      id: "tenace", type: "word", pos: "adj", target: "tenace",
      gloss: { es: "tenaz, perseverante", en: "tenacious, persevering" },
      distractors: ["tenero", "tenue", "tenente"],
      grammar: ["it-g-connotazione"], tags: ["nuance", "character"],
    },
    {
      id: "scaltro", type: "word", pos: "adj", target: "scaltro",
      gloss: { es: "astuto, sagaz (con algo de picardía)", en: "shrewd, crafty" },
      distractors: ["scalzo", "scarno", "scarso"],
      note: { es: "Más elogioso: accorto; más negativo: furbastro.", en: "More flattering: accorto; more negative: furbastro." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "character"],
    },
    {
      id: "pignolo", type: "word", pos: "adj", target: "pignolo",
      gloss: { es: "quisquilloso, detallista en exceso", en: "fussy, nit-picking" },
      distractors: ["pignorato", "pigro", "pinolo"],
      note: { es: "La versión elogiosa es scrupoloso o preciso.", en: "The flattering version is scrupoloso or preciso." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "character"],
    },
    {
      id: "schivo", type: "word", pos: "adj", target: "schivo",
      gloss: { es: "reservado, que rehúye la atención", en: "retiring, shy of attention" },
      distractors: ["schiavo", "schifoso", "sciatto"],
      tags: ["nuance", "character"],
    },
    {
      id: "abitazione", type: "word", pos: "noun", target: "l'abitazione", gender: "f", plural: "le abitazioni",
      gloss: { es: "la vivienda (término formal)", en: "the dwelling, residence (formal)" },
      distractors: ["l'abitudine", "l'abitante", "l'abitacolo"],
      note: { es: "casa (neutro), abitazione (documentos, prensa), dimora (literario).", en: "casa (neutral), abitazione (documents, press), dimora (literary)." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "register", "home"],
    },
    {
      id: "dimora", type: "word", pos: "noun", target: "la dimora", gender: "f", plural: "le dimore",
      gloss: { es: "la morada, la residencia (literario)", en: "the abode, residence (literary)" },
      distractors: ["la demora", "la dimostra", "la memoria"],
      note: { es: "Una dimora storica = una casa señorial histórica.", en: "Una dimora storica = a historic stately home." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "register", "home"],
    },
    {
      id: "sbirciare", type: "word", pos: "verb", target: "sbirciare",
      gloss: { es: "mirar de reojo, a escondidas", en: "to peek, sneak a look" },
      forms: { pp: "sbirciato" },
      distractors: ["sbiancare", "sbattere", "sbriciolare"],
      grammar: ["it-g-connotazione"], tags: ["nuance", "verbs"],
    },
    {
      id: "scrutare", type: "word", pos: "verb", target: "scrutare",
      gloss: { es: "escrutar, observar con atención", en: "to scrutinise, peer at" },
      forms: { pp: "scrutato" },
      distractors: ["scrutinare", "scuotere", "scartare"],
      note: { es: "No confundir con scrutinare, contar los votos.", en: "Not to be confused with scrutinare, to count votes." },
      grammar: ["it-g-connotazione"], tags: ["nuance", "verbs"],
    },
    {
      id: "avere-un-debole-per", type: "phrase", pos: "phrase", target: "avere un debole per",
      gloss: { es: "tener debilidad por", en: "to have a soft spot for" },
      distractors: ["avere un debito per", "avere un debole a", "fare un debole per"],
      tags: ["nuance", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "vecchio-amico-elementari", type: "sentence", target: "Ho incontrato un vecchio amico: ci conosciamo dalle elementari.",
      gloss: { es: "Me encontré con un viejo amigo: nos conocemos desde la primaria.", en: "I ran into an old friend: we've known each other since primary school." },
      errors: [{ text: "Ho incontrato un amico vecchio: ci conosciamo dalle elementari.", feedback: { es: "Detrás del sustantivo, vecchio significa «anciano»; para un amigo de hace años va delante: un vecchio amico.", en: "After the noun, vecchio means 'elderly'; for a long-standing friend it goes first: un vecchio amico." }, ruleId: "it-g-posizione-aggettivo" }],
      distractors: ["vecchia", "conosciamo", "dagli"],
      grammar: ["it-g-posizione-aggettivo"], tags: ["nuance", "adjectives"],
    },
    {
      id: "pover-uomo", type: "sentence", target: "È un pover'uomo, non un uomo povero: ha soldi, ma nessun amico.",
      gloss: { es: "Es un pobre hombre, no un hombre pobre: tiene dinero, pero ningún amigo.", en: "He's a poor wretch, not a poor man: he has money, but no friends." },
      accept: [{ text: "È un povero uomo, non un uomo povero: ha soldi, ma nessun amico." }],
      distractors: ["povera", "soldo", "nessuno"],
      grammar: ["it-g-posizione-aggettivo"], tags: ["nuance", "adjectives"],
    },
    {
      id: "diverse-persone", type: "sentence", target: "Diverse persone hanno espresso pareri diversi.",
      gloss: { es: "Varias personas expresaron opiniones distintas.", en: "Several people expressed different opinions." },
      distractors: ["Diversi", "parere", "espressi"],
      annot: {
        Diverse: { es: "delante: «varias»", en: "before the noun: 'several'" },
        diversi: { es: "detrás: «distintos»", en: "after the noun: 'different'" },
      },
      grammar: ["it-g-posizione-aggettivo"], tags: ["nuance", "adjectives"],
    },
    {
      id: "certa-signora", type: "sentence", target: "Una certa signora ha chiesto di te.",
      gloss: { es: "Una tal señora preguntó por ti.", en: "A certain lady was asking after you." },
      distractors: ["certo", "chiesta", "per"],
      grammar: ["it-g-posizione-aggettivo"], tags: ["nuance", "adjectives"],
    },
    {
      id: "regista-scomparso", type: "sentence", target: "Il noto regista è scomparso ieri all'età di novant'anni.",
      gloss: { es: "El conocido director falleció ayer a los noventa años.", en: "The well-known director passed away yesterday at the age of ninety." },
      distractors: ["scomparsa", "ha", "notato"],
      grammar: ["it-g-connotazione"], tags: ["nuance", "register", "news"],
    },
    {
      id: "non-testardo-tenace", type: "sentence", target: "Non è testardo, è tenace: non si arrende mai.",
      gloss: { es: "No es terco, es tenaz: nunca se rinde.", en: "He isn't stubborn, he's tenacious: he never gives up." },
      distractors: ["testarda", "arrendono", "sempre"],
      grammar: ["it-g-connotazione"], tags: ["nuance", "character"],
    },
    {
      id: "ha-sbirciato", type: "sentence", target: "Ha sbirciato il messaggio mentre lei era distratta.",
      gloss: { es: "Miró el mensaje de reojo mientras ella estaba distraída.", en: "He sneaked a look at the message while she wasn't paying attention." },
      distractors: ["sbirciava", "distratto", "messaggi"],
      grammar: ["it-g-connotazione"], tags: ["nuance", "verbs"],
    },
    {
      id: "commissario-scrutava", type: "sentence", target: "Il commissario scrutava i volti dei presenti.",
      gloss: { es: "El comisario escrutaba los rostros de los presentes.", en: "The inspector scrutinised the faces of those present." },
      distractors: ["scrutinava", "volte", "presente"],
      grammar: ["it-g-connotazione"], tags: ["nuance", "verbs", "literary"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-posizione-aggettivo", type: "pattern", target: "un vecchio amico / un amico vecchio · diverse persone / persone diverse",
      gloss: { es: "el adjetivo cambia de sentido según su posición", en: "adjectives that change meaning with position" },
      pattern: {
        rule: {
          es: "Detrás del sustantivo, el adjetivo tiene su sentido literal; delante, un sentido figurado o valorativo. Pasa con vecchio, povero, grande, nuovo, certo y diverso.",
          en: "After the noun an adjective has its literal sense; before it, a figurative or evaluative one. This happens with vecchio, povero, grande, nuovo, certo and diverso.",
        },
        table: [["un grande uomo", "importante"], ["un uomo grande", "corpulento"], ["una nuova macchina", "un'altra"], ["una macchina nuova", "appena fatta"]],
      },
      question: {
        prompt: { es: "«Ho comprato una macchina nuova» significa…", en: "'Ho comprato una macchina nuova' means…" },
        options: [
          { es: "Compré un auto (coche) recién salido de fábrica.", en: "I bought a brand-new car." },
          { es: "Compré otro auto (coche), quizá usado.", en: "I bought a different car, perhaps second-hand." },
          { es: "Compré un auto (coche) de un modelo raro.", en: "I bought a car of an unusual model." },
          { es: "Alquilé un auto (coche).", en: "I rented a car." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-posizione-aggettivo"], tags: ["grammar", "adjectives"],
    },
    {
      id: "pat-connotazione", type: "pattern", target: "morire · scomparire · venire a mancare · tirare le cuoia",
      gloss: { es: "del término neutro al eufemismo y al burlón", en: "from the neutral word to the euphemism and the jokey one" },
      pattern: {
        rule: {
          es: "Los cuatro verbos significan «morir», pero no suenan igual: morire es neutro, scomparire es de la prensa, venire a mancare es delicado y tirare le cuoia es burlón y poco respetuoso.",
          en: "All four verbs mean 'to die', but they don't sound the same: morire is neutral, scomparire belongs to the press, venire a mancare is gentle and tirare le cuoia is jokey and disrespectful.",
        },
        table: [["neutro", "morire"], ["giornalistico", "scomparire"], ["delicato", "venire a mancare"], ["scherzoso", "tirare le cuoia"]],
      },
      question: {
        prompt: { es: "«Ha tirato le cuoia» suena…", en: "'Ha tirato le cuoia' sounds…" },
        options: [
          { es: "burlón y poco respetuoso", en: "jokey and disrespectful" },
          { es: "formal y periodístico", en: "formal and journalistic" },
          { es: "delicado y cortés", en: "gentle and polite" },
          { es: "técnico, de un informe médico", en: "technical, from a medical report" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-connotazione"], tags: ["grammar", "register"],
    },
    {
      id: "pat-verbi-guardare", type: "pattern", target: "guardare · osservare · scrutare · sbirciare · fissare",
      gloss: { es: "verbos de mirar con distinta intención", en: "verbs of looking with different intentions" },
      pattern: {
        rule: {
          es: "guardare es neutro; osservare, mirar con atención; scrutare, examinar a fondo; sbirciare, mirar a escondidas; fissare, mirar fijamente.",
          en: "guardare is neutral; osservare, to watch carefully; scrutare, to examine closely; sbirciare, to peek; fissare, to stare.",
        },
        table: [["guardare", "neutro"], ["scrutare", "a fondo"], ["sbirciare", "di nascosto"], ["fissare", "senza staccare gli occhi"]],
      },
      question: {
        prompt: { es: "Mirar algo a escondidas, de reojo:", en: "To look at something on the sly:" },
        options: ["sbirciare", "fissare", "scrutare", "osservare"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-connotazione"], tags: ["grammar", "verbs"],
    },
    {
      id: "tab-aggettivi-anteposti", type: "paradigm", target: "bello, buono, santo davanti al nome",
      gloss: { es: "bello, buono y santo delante del sustantivo", en: "bello, buono and santo before the noun" },
      grammar: ["it-g-posizione-aggettivo"],
      paradigm: {
        caption: { es: "Escribe el adjetivo delante del sustantivo", en: "Write the adjective before the noun" },
        cells: [
          { label: "bello + libro", answer: "bel libro", ruleId: "it-g-posizione-aggettivo" },
          { label: "bello + occhi", answer: "begli occhi", ruleId: "it-g-posizione-aggettivo" },
          { label: "bello + albero", answer: "bell'albero", ruleId: "it-g-posizione-aggettivo" },
          { label: "buono + amico", answer: "buon amico", ruleId: "it-g-posizione-aggettivo" },
          { label: "buono + amica", answer: "buon'amica", ruleId: "it-g-posizione-aggettivo" },
          { label: "santo + Pietro", answer: "San Pietro", ruleId: "it-g-posizione-aggettivo" },
        ],
      },
      tags: ["grammar", "adjectives", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-fotografo", type: "listening",
      target: "È scomparso ieri, nella sua casa di Torino, il fotografo Marco Ferri. Aveva ottantasette anni. Chi lo conosceva lo ricorda come un uomo schivo, pignolo nel lavoro ma generosissimo con gli amici.",
      gloss: {
        es: "Falleció ayer, en su casa de Turín, el fotógrafo Marco Ferri. Tenía ochenta y siete años. Quienes lo conocían lo recuerdan como un hombre reservado, quisquilloso en el trabajo pero generosísimo con sus amigos.",
        en: "The photographer Marco Ferri passed away yesterday at his home in Turin. He was eighty-seven. Those who knew him remember a retiring man, fussy about his work but extremely generous with his friends.",
      },
      question: {
        prompt: { es: "¿Cómo lo recuerdan quienes lo conocían?", en: "How do those who knew him remember him?" },
        options: [
          { es: "Reservado, exigente en el trabajo y generoso con sus amigos.", en: "Retiring, demanding at work and generous with his friends." },
          { es: "Simpático, desordenado y muy famoso.", en: "Friendly, messy and very famous." },
          { es: "Tímido con sus amigos y generoso con los clientes.", en: "Shy with his friends and generous with clients." },
          { es: "Terco y poco amigo de sus colegas.", en: "Stubborn and unfriendly to colleagues." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-connotazione"], tags: ["listening", "news", "nuance"],
    },
    {
      id: "dlg-discorso-pensione", type: "dialogue", register: "informal", target: "Scrivi «tenace»: suona come un complimento.",
      gloss: { es: "Escribe «tenaz»: suena a elogio.", en: "Write 'tenacious': it sounds like a compliment." },
      turns: [
        { who: "A", target: "Nel discorso per la pensione di Franca scrivo che è testarda?", gloss: { es: "En el discurso por la jubilación de Franca, ¿pongo que es terca?", en: "In the speech for Franca's retirement, shall I say she's stubborn?" } },
        { who: "B", target: "Per carità! Scrivi «tenace»: il senso è quello, ma suona come un complimento.", gloss: { es: "¡Ni se te ocurra! Escribe «tenaz»: la idea es la misma, pero suena a elogio.", en: "Heavens, no! Write 'tenacious': same idea, but it sounds like a compliment." } },
        { who: "A", target: "E «pignola»?", gloss: { es: "¿Y «quisquillosa»?", en: "And 'fussy'?" } },
        { who: "B", target: "Meglio «precisa». Sono le stesse qualità, viste con occhi più benevoli.", gloss: { es: "Mejor «precisa». Son las mismas cualidades, vistas con mejores ojos.", en: "Better 'precise'. Same qualities, seen in a kinder light." } },
      ],
      question: {
        prompt: { es: "¿Qué le aconseja B?", en: "What does B advise?" },
        options: [
          { es: "Usar palabras positivas para las mismas cualidades.", en: "To use positive words for the same qualities." },
          { es: "No mencionar ningún defecto de Franca.", en: "Not to mention any of Franca's faults." },
          { es: "Escribir un discurso más corto.", en: "To write a shorter speech." },
          { es: "Decir claramente que Franca es terca.", en: "To say plainly that Franca is stubborn." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-connotazione"], tags: ["dialogue", "nuance"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-dimora", type: "bridge", onlyFor: "es", target: "la dimora",
      gloss: { es: "la morada, la residencia", en: "the abode, residence" },
      question: {
        prompt: { es: "«Una dimora storica nel centro di Lucca» es…", en: "'Una dimora storica nel centro di Lucca' is…" },
        options: [
          { es: "una residencia histórica en el centro de Lucca", en: "a historic residence in the centre of Lucca" },
          { es: "una demora histórica en el centro de Lucca", en: "a historic delay in the centre of Lucca" },
          { es: "una demostración histórica en Lucca", en: "a historic demonstration in Lucca" },
          { es: "un monumento a la memoria en Lucca", en: "a memorial in Lucca" },
        ],
        answer: 0,
      },
      note: { es: "dimora se parece a «demora», pero es la morada; la demora es «il ritardo»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "home"],
    },
  ]),
};
