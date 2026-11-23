import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u30",
  lang: "fr",
  index: 30,
  cefr: "C1",
  title: { target: "Registres de langue", es: "Registros de la lengua", en: "Language registers" },
  canDo: [
    { es: "Puedo pasar del registro culto al coloquial según la situación.", en: "I can switch between formal and informal register to suit the situation." },
    { es: "Entiendo el verlan más común (meuf, relou, ouf, vénère).", en: "I understand the most common verlan (meuf, relou, ouf, vénère)." },
    { es: "Reconozco y uso el «ne» expletivo (avant qu'il ne parte, je crains qu'il ne pleuve).", en: "I recognise and use the expletive ne (avant qu'il ne parte, je crains qu'il ne pleuve)." },
  ],
  icon: "🎭",
  items: build("fr", 30, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "registre", type: "word", pos: "noun", target: "le registre", gender: "m", plural: "les registres", gloss: { es: "el registro (de lengua)", en: "the register (of language)" }, distractors: ["le régistre", "la registre", "le regître"], note: { es: "Tres niveles: soutenu (culto), courant (neutro), familier (coloquial).", en: "Three levels: soutenu (formal), courant (neutral), familier (informal)." }, grammar: ["fr-g-registres"], tags: ["language", "register"] },
    { id: "soutenu", type: "word", pos: "adj", target: "soutenu", gloss: { es: "culto, elevado (registro)", en: "formal / elevated (register)" }, forms: { m: "soutenu", f: "soutenue" }, accept: [{ text: "soutenue" }], distractors: ["soutenant", "souterrain", "sous-entendu"], grammar: ["fr-g-registres"], tags: ["language", "register"] },
    { id: "bienseance", type: "word", pos: "noun", target: "la bienséance", gender: "f", plural: "les bienséances", gloss: { es: "el decoro, las buenas formas", en: "propriety / decorum" }, distractors: ["la bienfaisance", "la bienveillance", "la séance"], tags: ["register", "polite"] },
    { id: "meuf", type: "word", pos: "noun", target: "la meuf", gender: "f", plural: "les meufs", gloss: { es: "la chica, la mujer (verlan)", en: "the girl / woman (verlan slang)" }, distractors: ["le meuf", "la meuh", "la neuf"], note: { es: "Verlan de «femme»; también «ma meuf» = mi novia (muy coloquial).", en: "Verlan of femme; ma meuf = my girlfriend (very informal)." }, grammar: ["fr-g-registres"], tags: ["slang", "verlan"] },
    { id: "keuf", type: "word", pos: "noun", target: "le keuf", gender: "m", plural: "les keufs", gloss: { es: "el policía (verlan)", en: "the cop (verlan slang)" }, distractors: ["la keuf", "le kéfir", "le neuf"], note: { es: "Verlan de «flic», que ya es coloquial; neutro: le policier.", en: "Verlan of flic, itself slang; neutral: le policier." }, tags: ["slang", "verlan"] },
    { id: "relou", type: "word", pos: "adj", target: "relou", gloss: { es: "pesado/a, latoso/a (verlan)", en: "annoying (verlan slang)" }, distractors: ["louche", "relu", "lourde"], note: { es: "Verlan de «lourd» (pesado); igual en masculino y femenino.", en: "Verlan of lourd (heavy, tiresome); same form for both genders." }, tags: ["slang", "verlan"] },
    { id: "ouf", type: "word", pos: "adj", target: "ouf", gloss: { es: "alucinante, una locura (verlan)", en: "crazy / insane (verlan slang)" }, distractors: ["oust", "pouf", "oufe"], note: { es: "Verlan de «fou»: c'est ouf ! = ¡es una locura!", en: "Verlan of fou: c'est ouf ! = that's insane!" }, tags: ["slang", "verlan"] },
    { id: "venere", type: "word", pos: "adj", target: "vénère", gloss: { es: "furioso/a, enojadísimo/a (verlan)", en: "furious (verlan slang)" }, distractors: ["vénéré", "venu", "véreux"], note: { es: "Verlan de «énervé».", en: "Verlan of énervé." }, tags: ["slang", "verlan"] },
    { id: "kiffer", type: "word", pos: "verb", target: "kiffer", gloss: { es: "encantar, gustar mucho (coloquial)", en: "to love / be really into (slang)" }, forms: { je: "kiffe", pp: "kiffé" }, distractors: ["griffer", "piffer", "chiffrer"], tags: ["slang"] },
    { id: "ca-me-saoule", type: "phrase", pos: "phrase", target: "ça me saoule", gloss: { es: "me harta, me tiene cansado/a (coloquial)", en: "it's doing my head in (slang)" }, accept: [{ text: "ça me soûle" }], distractors: ["ça me sale", "ça me seule", "je me saoule"], note: { es: "«Je me saoule» sería «me emborracho».", en: "Je me saoule would mean 'I get drunk'." }, tags: ["slang", "feelings"] },
    {
      id: "je-vous-saurais-gre", type: "phrase", pos: "phrase", register: "formal", target: "je vous saurais gré de",
      gloss: { es: "le agradecería que", en: "I would be grateful if you would" },
      distractors: ["je vous serais gré de", "je vous saurai gré de", "je vous saurais grès de"],
      note: { es: "Viene de «savoir gré» (estar agradecido): saurais, no «serais».", en: "From savoir gré (to be grateful): saurais, not serais." },
      grammar: ["fr-g-registres"], tags: ["register", "formal", "letters"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "puis-je", type: "sentence", register: "formal", target: "Puis-je vous demander un service ?",
      gloss: { es: "¿Puedo pedirle un favor?", en: "May I ask you a favour?" },
      accept: [{ text: "Est-ce que je peux vous demander un service ?" }],
      errors: [{ text: "Peux-je vous demander un service ?", feedback: { es: "Con «je» invertido, «pouvoir» toma la forma «puis»: puis-je.", en: "With inverted je, pouvoir becomes puis: puis-je." }, ruleId: "fr-g-registres" }],
      distractors: ["Peux", "Pourrai", "faveur"],
      grammar: ["fr-g-registres"], tags: ["register", "polite"],
    },
    {
      id: "avant-que-je-ne-puisse", type: "sentence", target: "Il était parti avant que je ne puisse le remercier.",
      gloss: { es: "Se había ido antes de que pudiera darle las gracias.", en: "He had left before I could thank him." },
      accept: [{ text: "Il était parti avant que je puisse le remercier." }],
      distractors: ["pouvais", "pu", "lui"],
      grammar: ["fr-g-ne-expletif"], tags: ["register", "subjunctive"],
    },
    {
      id: "je-crains-quil-ne-soit", type: "sentence", target: "Je crains qu'il ne soit trop tard.",
      gloss: { es: "Me temo que sea demasiado tarde.", en: "I fear it may be too late." },
      accept: [{ text: "Je crains qu'il soit trop tard." }],
      errors: [{ text: "Je crains qu'il ne soit pas trop tard.", feedback: { es: "Con «pas» cambia el sentido (temo que NO sea tarde); el «ne» solo no niega.", en: "With pas the meaning flips (I fear it's NOT too late); ne on its own doesn't negate." }, ruleId: "fr-g-ne-expletif" }],
      distractors: ["est", "pas", "tôt"],
      grammar: ["fr-g-ne-expletif"], tags: ["register", "subjunctive"],
    },
    {
      id: "trop-relou", type: "sentence", register: "informal", target: "Ce mec est trop relou.",
      gloss: { es: "Ese tipo es súper pesado.", en: "That guy is so annoying." },
      distractors: ["relu", "meuf", "lourde"],
      tags: ["slang", "verlan"],
    },
    {
      id: "jai-kiffe-ce-film", type: "sentence", register: "informal", target: "J'ai kiffé ce film, c'était ouf !",
      gloss: { es: "Me encantó esa película, ¡estuvo increíble!", en: "I loved that film, it was insane!" },
      distractors: ["kiffer", "fou", "cette"],
      tags: ["slang", "verlan", "culture"],
    },
    {
      id: "laisse-tomber", type: "sentence", register: "informal", target: "Laisse tomber, ça me saoule.",
      gloss: { es: "Olvídalo, me harta.", en: "Forget it, it's getting on my nerves." },
      accept: [{ text: "Laisse tomber, ça me soûle." }],
      distractors: ["Laisser", "soûl", "tombe"],
      tags: ["slang", "feelings"],
    },
    {
      id: "saurais-gre-repondre", type: "sentence", register: "formal", target: "Je vous saurais gré de bien vouloir me répondre rapidement.",
      gloss: { es: "Le agradecería que tuviera a bien responderme pronto.", en: "I would be grateful if you could reply promptly." },
      errors: [{ text: "Je vous serais gré de bien vouloir me répondre rapidement.", feedback: { es: "Es «savoir gré»: je vous saurais gré.", en: "It's savoir gré: je vous saurais gré." }, ruleId: "fr-g-registres" }],
      distractors: ["serais", "saurai", "répondez"],
      grammar: ["fr-g-registres"], tags: ["register", "formal", "letters"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-registres", type: "pattern", target: "Puis-je… ? · Est-ce que je peux… ? · Je peux… ?",
      gloss: { es: "tres registros: culto, neutro y coloquial", en: "three registers: formal, neutral and informal" },
      pattern: {
        rule: {
          es: "El registro culto usa la inversión (puis-je, où allez-vous), el «ne» completo y palabras escogidas. El neutro usa «est-ce que». El coloquial omite el «ne», usa «on» y la entonación, y palabras como boulot, meuf o relou.",
          en: "Formal register uses inversion (puis-je, où allez-vous), full ne and careful vocabulary. Neutral uses est-ce que. Informal drops ne, uses on and intonation, and words like boulot, meuf or relou.",
        },
        table: [["soutenu", "Où allez-vous ? · Je ne sais pas."], ["courant", "Où est-ce que tu vas ?"], ["familier", "Tu vas où ? · J'sais pas."]],
      },
      question: {
        prompt: { es: "¿Cuál es la pregunta más formal?", en: "Which question is the most formal?" },
        options: ["Où allez-vous ?", "Vous allez où ?", "Où vous allez ?", "Où que vous allez ?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-registres"], tags: ["grammar", "register"],
    },
    {
      id: "pat-ne-expletif", type: "pattern", target: "avant qu'il ne parte · je crains qu'il ne pleuve · à moins que tu ne viennes",
      gloss: { es: "el «ne» expletivo (que no niega)", en: "the expletive ne (which doesn't negate)" },
      pattern: {
        rule: {
          es: "Tras avant que, à moins que, de peur que, craindre que o avoir peur que, el registro cuidado añade un «ne» sin «pas» que no niega nada: j'ai peur qu'il ne vienne = temo que venga. Se puede omitir.",
          en: "After avant que, à moins que, de peur que, craindre que or avoir peur que, careful French adds a ne without pas that negates nothing: j'ai peur qu'il ne vienne = I'm afraid he'll come. It can be left out.",
        },
        table: [["avant que", "avant qu'il ne parte"], ["à moins que", "à moins qu'il ne pleuve"], ["craindre que", "je crains qu'elle ne soit malade"]],
      },
      question: {
        prompt: { es: "«J'ai peur qu'il ne vienne» significa…", en: "'J'ai peur qu'il ne vienne' means…" },
        options: [
          { es: "Temo que venga.", en: "I'm afraid he'll come." },
          { es: "Temo que no venga.", en: "I'm afraid he won't come." },
          { es: "No tengo miedo de que venga.", en: "I'm not afraid he'll come." },
          { es: "No sé si viene.", en: "I don't know if he's coming." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-ne-expletif"], tags: ["grammar", "register"],
    },
    {
      id: "tab-verlan", type: "paradigm", target: "verlan → mot d'origine",
      gloss: { es: "del verlan a la palabra de origen", en: "from verlan to the original word" },
      grammar: ["fr-g-registres"],
      paradigm: {
        caption: { es: "Escribe la palabra de origen", en: "Write the original word" },
        cells: [
          { label: "meuf", answer: "femme", ruleId: "fr-g-registres" },
          { label: "relou", answer: "lourd", ruleId: "fr-g-registres" },
          { label: "ouf", answer: "fou", ruleId: "fr-g-registres" },
          { label: "chelou", answer: "louche", ruleId: "fr-g-registres" },
          { label: "vénère", answer: "énervé", ruleId: "fr-g-registres" },
          { label: "keuf", answer: "flic", ruleId: "fr-g-registres" },
        ],
      },
      tags: ["grammar", "slang", "verlan", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lettre-motivation", type: "listening",
      target: "Dans une lettre de motivation, on n'écrit pas « je kiffe votre boîte ». On écrit plutôt : « Votre entreprise m'intéresse vivement. » Le registre familier, c'est pour les copains ; le registre soutenu, pour l'administration et les occasions officielles.",
      gloss: {
        es: "En una carta de presentación no se escribe «me encanta su empresa» en jerga. Se escribe más bien: «Su empresa me interesa mucho». El registro coloquial es para los amigos; el culto, para la administración y las ocasiones oficiales.",
        en: "In a cover letter you don't write 'I'm well into your company'. You write instead: 'I am very interested in your company.' Informal register is for friends; formal register is for officialdom and official occasions.",
      },
      question: {
        prompt: { es: "¿Qué aconseja quien habla?", en: "What does the speaker advise?" },
        options: [
          { es: "Adaptar el registro a la situación.", en: "Adapting your register to the situation." },
          { es: "Usar siempre el registro coloquial.", en: "Always using informal register." },
          { es: "No escribir cartas de presentación.", en: "Not writing cover letters." },
          { es: "Usar el verlan con la administración.", en: "Using verlan with officials." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-registres"], tags: ["listening", "register", "work"],
    },
    {
      id: "dlg-verlan-mamie", type: "dialogue", register: "informal", target: "Ça veut dire quoi, « chelou » ?",
      gloss: { es: "¿Qué quiere decir «chelou»?", en: "What does 'chelou' mean?" },
      turns: [
        { who: "A", target: "Mamie, le prof de maths est trop relou, il nous a donné trois exercices !", gloss: { es: "Abuela, el profe de matemáticas es súper pesado, ¡nos dio tres ejercicios!", en: "Grandma, the maths teacher is so annoying, he gave us three exercises!" } },
        { who: "B", target: "Relou ? Et ça veut dire quoi, « chelou », que tu disais hier ?", gloss: { es: "¿«Relou»? ¿Y qué quiere decir «chelou», eso que decías ayer?", en: "'Relou'? And what does 'chelou', which you said yesterday, mean?" } },
        { who: "A", target: "C'est du verlan : « louche » à l'envers. Bizarre, quoi.", gloss: { es: "Es verlan: «louche» al revés. Raro, vaya.", en: "It's verlan: 'louche' backwards. Weird, basically." } },
        { who: "B", target: "Ah ! De mon temps, on disait déjà « laisse béton » pour « laisse tomber » !", gloss: { es: "¡Ah! En mis tiempos ya decíamos «laisse béton» por «laisse tomber».", en: "Ah! In my day we already said 'laisse béton' for 'laisse tomber'!" } },
      ],
      question: {
        prompt: { es: "¿Qué descubre la abuela?", en: "What does the grandmother realise?" },
        options: [
          { es: "Que el verlan ya existía en su época.", en: "That verlan already existed in her day." },
          { es: "Que el profesor es raro.", en: "That the teacher is weird." },
          { es: "Que su nieto no hace los deberes.", en: "That her grandson doesn't do his homework." },
          { es: "Que «chelou» significa «pesado».", en: "That 'chelou' means 'annoying'." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "slang", "verlan"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-rendre-service", type: "bridge", onlyFor: "en", target: "rendre service",
      gloss: { es: "hacer un favor", en: "to do (someone) a favour" },
      question: {
        prompt: { es: "«Tu peux me rendre un service ?» significa…", en: "'Tu peux me rendre un service ?' means…" },
        options: [
          { es: "¿Me haces un favor?", en: "Can you do me a favour?" },
          { es: "¿Me devuelves el servicio?", en: "Can you give me back the service?" },
          { es: "¿Me sirves algo de comer?", en: "Can you serve me something to eat?" },
        ],
        answer: 0,
      },
      note: { en: "A favour is usually un service: demander un service, rendre service; une faveur sounds more formal." },
      exercises: ["guess", "question"], tags: ["bridge", "polite"],
    },
  ]),
};
