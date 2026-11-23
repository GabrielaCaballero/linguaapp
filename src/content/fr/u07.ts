import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u07",
  lang: "fr",
  index: 7,
  cefr: "A1.2",
  title: { target: "Ma journée", es: "Mi día", en: "My day" },
  canDo: [
    { es: "Puedo contar mi rutina diaria: a qué hora me levanto, trabajo y ceno.", en: "I can describe my daily routine: when I get up, work and have dinner." },
    { es: "Puedo decir y preguntar la hora y los días de la semana.", en: "I can tell the time and name the days of the week." },
    { es: "Sé usar los verbos pronominales (je me lève) y los verbos como «finir».", en: "I can use reflexive verbs (je me lève) and verbs like finir." },
  ],
  icon: "⏰",
  items: build("fr", 7, "A1.2", [
    { id: "se-lever", type: "word", pos: "verb", target: "se lever", gloss: { es: "levantarse", en: "to get up" }, forms: { je: "me lève", tu: "te lèves", nous: "nous levons", vous: "vous levez" }, distractors: ["se laver", "lever", "se lire"], note: { es: "Con «je, tu, il» lleva acento grave: je me lève.", en: "With je, tu, il it takes a grave accent: je me lève." }, tags: ["routine", "reflexive"] },
    { id: "se-laver", type: "word", pos: "verb", target: "se laver", gloss: { es: "lavarse", en: "to wash (oneself)" }, distractors: ["se lever", "laver", "se lacer"], note: { es: "se laver ≠ se lever: una sola vocal cambia el sentido.", en: "se laver ≠ se lever: one vowel changes the meaning." }, tags: ["routine", "reflexive"] },
    { id: "se-coucher", type: "word", pos: "verb", target: "se coucher", gloss: { es: "acostarse", en: "to go to bed" }, distractors: ["se cacher", "toucher", "se moucher"], tags: ["routine", "reflexive"] },
    { id: "prendre-douche", type: "phrase", pos: "phrase", target: "prendre une douche", gloss: { es: "bañarse (darse una ducha)", en: "to have a shower" }, distractors: ["faire une douche", "prendre un douche", "prendre une touche"], tags: ["routine"] },
    { id: "petit-dejeuner", type: "word", pos: "noun", target: "le petit-déjeuner", gender: "m", plural: "les petits-déjeuners", accept: [{ text: "le petit déjeuner" }], gloss: { es: "el desayuno", en: "the breakfast" }, distractors: ["la petit-déjeuner", "le déjeuner", "le dîner"], note: { es: "En Francia: le déjeuner = el almuerzo; le dîner = la cena.", en: "In France: le déjeuner = lunch; le dîner = dinner." }, tags: ["routine", "meals"] },
    { id: "dejeuner", type: "word", pos: "noun", target: "le déjeuner", gender: "m", plural: "les déjeuners", gloss: { es: "el almuerzo (la comida del mediodía)", en: "the lunch" }, distractors: ["la déjeuner", "le petit-déjeuner", "le goûter"], tags: ["routine", "meals"] },
    { id: "diner", type: "word", pos: "noun", target: "le dîner", gender: "m", plural: "les dîners", gloss: { es: "la cena", en: "the dinner" }, distractors: ["la dîner", "le denier", "le dernier"], tags: ["routine", "meals"] },
    { id: "lundi", type: "word", pos: "adv", target: "lundi", gloss: { es: "lunes", en: "Monday" }, distractors: ["mardi", "jeudi", "lendemain"], note: { es: "Los días van en minúscula y sin artículo: lundi = el lunes; le lundi = los lunes.", en: "Days are lowercase, no article: lundi = on Monday; le lundi = on Mondays." }, tags: ["days"] },
    { id: "mercredi", type: "word", pos: "adv", target: "mercredi", gloss: { es: "miércoles", en: "Wednesday" }, distractors: ["mardi", "vendredi", "merci"], tags: ["days"] },
    { id: "samedi", type: "word", pos: "adv", target: "samedi", gloss: { es: "sábado", en: "Saturday" }, distractors: ["dimanche", "semaine", "jeudi"], tags: ["days"] },
    { id: "dimanche", type: "word", pos: "adv", target: "dimanche", gloss: { es: "domingo", en: "Sunday" }, distractors: ["samedi", "lundi", "demain"], tags: ["days"] },
    { id: "le-matin", type: "word", pos: "adv", target: "le matin", gloss: { es: "en la mañana (por las mañanas)", en: "in the morning" }, distractors: ["le midi", "le soir", "le matelas"], note: { es: "le soir = en la noche; l'après-midi = en la tarde.", en: "le soir = in the evening; l'après-midi = in the afternoon." }, tags: ["time"] },
    { id: "finir", type: "word", pos: "verb", target: "finir", gloss: { es: "terminar", en: "to finish" }, forms: { je: "finis", nous: "finissons", "ils/elles": "finissent" }, distractors: ["fermer", "finissons", "fuir"], tags: ["verbs", "present"] },
    // ── Time & sentences ─────────────────────────────────────
    {
      id: "quelle-heure", type: "phrase", pos: "phrase", target: "Quelle heure est-il ?",
      gloss: { es: "¿Qué hora es?", en: "What time is it?" },
      accept: [{ text: "Il est quelle heure ?" }, { text: "Vous avez l'heure ?" }],
      distractors: ["Quel heure est-il ?", "Quelle heure il est-il ?", "Quelle est l'heure ?"],
      tags: ["time", "chunk"],
    },
    {
      id: "il-est-huit-heures", type: "sentence", target: "Il est huit heures et demie.", spoken: "Il est huit heures et demie.",
      gloss: { es: "Son las ocho y media.", en: "It's half past eight." },
      accept: [{ text: "Il est huit heures trente." }],
      errors: [{ text: "C'est huit heures et demie.", feedback: { es: "La hora siempre va con «il est».", en: "Time always uses 'il est'." }, ruleId: "fr-g-heure" }],
      distractors: ["sont", "demi", "heure"],
      tags: ["time"],
    },
    {
      id: "je-me-leve-a-sept", type: "sentence", target: "Je me lève à sept heures.",
      gloss: { es: "Me levanto a las siete.", en: "I get up at seven." },
      errors: [{ text: "Je lève à sept heures.", feedback: { es: "Es pronominal: je me lève.", en: "It's reflexive: je me lève." }, ruleId: "fr-g-pronominaux" }],
      distractors: ["te", "lave", "aux"],
      tags: ["routine"],
    },
    {
      id: "je-finis-a-six", type: "sentence", target: "Je finis le travail à dix-huit heures.", spoken: "Je finis le travail à dix-huit heures.",
      gloss: { es: "Salgo del trabajo a las seis de la tarde.", en: "I finish work at six p.m." },
      accept: [{ text: "Je finis de travailler à dix-huit heures." }, { text: "Je finis le travail à six heures du soir." }],
      distractors: ["fini", "finit", "au"],
      note: { es: "En horarios oficiales se usan las 24 horas: dix-huit heures = las 18:00.", en: "Timetables use the 24-hour clock: dix-huit heures = 6 p.m." },
      tags: ["routine", "time"],
    },
    {
      id: "on-dine-vers", type: "sentence", target: "On dîne vers vingt heures.",
      gloss: { es: "Cenamos como a las ocho de la noche.", en: "We have dinner around eight p.m." },
      accept: [{ text: "Nous dînons vers vingt heures." }],
      distractors: ["dînons", "heure", "à"],
      note: { es: "«on» + verbo en 3.ª persona = nosotros, muy común al hablar.", en: "'on' + 3rd-person verb = we, very common in speech." },
      tags: ["routine"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-pronominaux", type: "pattern", target: "je me lève, tu te lèves, il se lève…",
      gloss: { es: "verbos pronominales", en: "reflexive verbs" },
      pattern: {
        rule: {
          es: "Como en español (me levanto), el pronombre va delante del verbo: je me, tu te, il/elle se, nous nous, vous vous, ils se. Delante de vocal: je m'appelle, il s'habille.",
          en: "The pronoun goes before the verb: je me, tu te, il/elle se, nous nous, vous vous, ils se. Before a vowel: je m'appelle, il s'habille.",
        },
        table: [["je me lève", "nous nous levons"], ["tu te lèves", "vous vous levez"], ["il / elle se lève", "ils / elles se lèvent"]],
      },
      question: {
        prompt: { es: "Completa: «Nous ___ couchons tard.»", en: "Complete: 'Nous ___ couchons tard.'" },
        options: ["nous", "se", "vous", "me"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-pronominaux"], tags: ["grammar", "reflexive"],
    },
    {
      id: "tab-se-lever", type: "paradigm", target: "se lever — présent", spoken: "se lever",
      gloss: { es: "«se lever» (levantarse) en presente", en: "se lever (to get up) — present" },
      grammar: ["fr-g-pronominaux"],
      paradigm: {
        caption: { es: "Conjuga «se lever» en presente", en: "Conjugate se lever in the present tense" },
        cells: [
          { label: "je", answer: "me lève", ruleId: "fr-g-pronominaux" },
          { label: "tu", answer: "te lèves", ruleId: "fr-g-pronominaux" },
          { label: "il / elle", answer: "se lève", ruleId: "fr-g-pronominaux" },
          { label: "nous", answer: "nous levons", ruleId: "fr-g-pronominaux" },
          { label: "vous", answer: "vous levez", ruleId: "fr-g-pronominaux" },
          { label: "ils / elles", answer: "se lèvent", ruleId: "fr-g-pronominaux" },
        ],
      },
      tags: ["grammar", "reflexive", "table"],
    },
    {
      id: "pat-heure", type: "pattern", target: "Il est trois heures et quart.",
      gloss: { es: "decir la hora", en: "telling the time" },
      pattern: {
        rule: {
          es: "Siempre «il est … heure(s)»: il est une heure, il est deux heures. Y cuarto = et quart, y media = et demie, menos cuarto = moins le quart. 12 h = midi, 0 h = minuit.",
          en: "Always 'il est … heure(s)': il est une heure, il est deux heures. Quarter past = et quart, half past = et demie, quarter to = moins le quart. Noon = midi, midnight = minuit.",
        },
        table: [["3:15", "trois heures et quart"], ["3:30", "trois heures et demie"], ["3:45", "quatre heures moins le quart"], ["12:00", "midi"]],
      },
      question: {
        prompt: { es: "Son las 6:45. ¿Qué dices?", en: "It's 6:45. What do you say?" },
        options: ["Il est sept heures moins le quart.", "Il est six heures moins le quart.", "Il est six heures et quart.", "Il est sept heures et quart."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-heure"], tags: ["grammar", "time"],
    },
    {
      id: "pat-ir", type: "pattern", target: "je finis, nous finissons",
      gloss: { es: "verbos en -ir como «finir»", en: "-ir verbs like finir" },
      pattern: {
        rule: {
          es: "Muchos verbos en -ir (finir, choisir, réussir) añaden -iss- en plural: je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
          en: "Many -ir verbs (finir, choisir, réussir) add -iss- in the plural: je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
        },
        table: [["je finis", "nous finissons"], ["tu finis", "vous finissez"], ["il / elle finit", "ils / elles finissent"]],
      },
      question: {
        prompt: { es: "Completa: «Vous ___ à quelle heure ?» (finir)", en: "Complete: 'Vous ___ à quelle heure ?' (finir)" },
        options: ["finissez", "finez", "finissons", "finis"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-ir"], tags: ["grammar", "present"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-journee", type: "listening",
      target: "Le matin, je me lève à six heures et demie. Je prends une douche, je bois un café et je pars au travail à sept heures et quart.",
      gloss: {
        es: "En la mañana me levanto a las seis y media. Me baño, tomo un café y salgo al trabajo a las siete y cuarto.",
        en: "In the morning I get up at half past six. I have a shower, drink a coffee and leave for work at a quarter past seven.",
      },
      question: {
        prompt: { es: "¿A qué hora sale al trabajo?", en: "When does the speaker leave for work?" },
        options: ["7:15", "6:30", "7:45", "6:15"],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "routine", "time"],
    },
    {
      id: "dlg-rendez-vous", type: "dialogue", target: "Samedi, ça te va ?", register: "informal",
      gloss: { es: "¿Te queda bien el sábado?", en: "Does Saturday work for you?" },
      turns: [
        { who: "A", target: "On prend un café cette semaine ?", gloss: { es: "¿Tomamos un café esta semana?", en: "Shall we have a coffee this week?" } },
        { who: "B", target: "Je travaille tous les jours jusqu'à dix-neuf heures.", gloss: { es: "Trabajo todos los días hasta las siete de la tarde.", en: "I work every day until 7 p.m." } },
        { who: "A", target: "Samedi, ça te va ?", gloss: { es: "¿Te queda bien el sábado?", en: "Does Saturday work for you?" } },
        { who: "B", target: "Oui, samedi à onze heures, parfait !", gloss: { es: "Sí, el sábado a las once, ¡perfecto!", en: "Yes, Saturday at eleven, perfect!" } },
      ],
      question: {
        prompt: { es: "¿Cuándo se ven?", en: "When do they meet?" },
        options: [
          { es: "El sábado a las once", en: "Saturday at eleven" },
          { es: "El domingo a las once", en: "Sunday at eleven" },
          { es: "El sábado a las siete", en: "Saturday at seven" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "time", "days"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-dejeuner", type: "bridge", onlyFor: "es", target: "déjeuner",
      gloss: { es: "almorzar", en: "to have lunch" },
      question: {
        prompt: { es: "«On déjeune à midi» significa…", en: "'On déjeune à midi' means…" },
        options: [
          { es: "Almorzamos al mediodía", en: "We have lunch at noon" },
          { es: "Desayunamos al mediodía", en: "We have breakfast at noon" },
          { es: "Dejamos de comer al mediodía", en: "We stop eating at noon" },
        ],
        answer: 0,
      },
      note: { es: "En Francia, déjeuner = almorzar y le petit-déjeuner = el desayuno (en Suiza y Bélgica, «déjeuner» es desayunar)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "meals"],
    },
    {
      id: "br-semaine", type: "bridge", onlyFor: "es", target: "la semaine",
      gloss: { es: "la semana", en: "the week" },
      distractors: ["la semana", "la semaine prochaine", "la semène"],
      note: { es: "La -a final del español se vuelve -e muda: semana → semaine, hora → heure." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
  ]),
};
