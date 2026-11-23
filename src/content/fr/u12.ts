import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u12",
  lang: "fr",
  index: 12,
  cefr: "A2",
  title: { target: "En voyage", es: "De viaje", en: "Travelling" },
  canDo: [
    { es: "Puedo comprar un boleto de tren y preguntar por horarios y andenes.", en: "I can buy a train ticket and ask about times and platforms." },
    { es: "Puedo contar un viaje: adónde fui, cuándo llegué y cómo fue.", en: "I can tell the story of a trip: where I went, when I arrived and how it was." },
    { es: "Sé usar el passé composé con «être» (je suis allé/e) y comparar (plus… que).", en: "I can use the passé composé with être (je suis allé/e) and compare (plus… que)." },
  ],
  icon: "🚆",
  items: build("fr", 12, "A2", [
    { id: "billet", type: "word", pos: "noun", target: "le billet", gender: "m", plural: "les billets", gloss: { es: "el boleto (el billete)", en: "the ticket" }, distractors: ["la billet", "le ballet", "le bijou"], note: { es: "un aller simple = solo ida; un aller-retour = ida y vuelta.", en: "un aller simple = one-way; un aller-retour = return / round trip." }, tags: ["travel"] },
    { id: "quai", type: "word", pos: "noun", target: "le quai", gender: "m", plural: "les quais", gloss: { es: "la plataforma (del tren)", en: "the platform" }, distractors: ["la quai", "le quoi", "la clé"], note: { es: "Suena «ké». También es el muelle de un río: les quais de Seine.", en: "Pronounced 'kay'. Also a riverbank: les quais de Seine." }, tags: ["travel"] },
    { id: "valise", type: "word", pos: "noun", target: "la valise", gender: "f", plural: "les valises", gloss: { es: "la maleta (la valija)", en: "the suitcase" }, distractors: ["le valise", "la valse", "la vallée"], tags: ["travel"] },
    { id: "retard", type: "word", pos: "noun", target: "le retard", gender: "m", plural: "les retards", gloss: { es: "el retraso", en: "the delay" }, distractors: ["la retard", "le regard", "le rétro"], note: { es: "être en retard = llegar tarde; le train a du retard = el tren viene con retraso.", en: "être en retard = to be late; le train a du retard = the train is delayed." }, tags: ["travel"] },
    { id: "partir", type: "word", pos: "verb", target: "partir", gloss: { es: "irse, salir (de viaje)", en: "to leave" }, forms: { je: "pars", nous: "partons", pp: "parti", aux: "être" }, distractors: ["sortir", "partager", "porter"], tags: ["travel", "verbs"] },
    { id: "arriver", type: "word", pos: "verb", target: "arriver", gloss: { es: "llegar", en: "to arrive" }, forms: { pp: "arrivé", aux: "être" }, distractors: ["arrêter", "river", "arroser"], note: { es: "También «pasar, ocurrir»: qu'est-ce qui est arrivé ? = ¿qué pasó?", en: "Also 'to happen': qu'est-ce qui est arrivé ? = what happened?" }, tags: ["travel", "verbs"] },
    { id: "hotel", type: "word", pos: "noun", target: "l'hôtel", gender: "m", plural: "les hôtels", gloss: { es: "el hotel", en: "the hotel" }, distractors: ["la hôtel", "l'hôpital", "l'autel"], tags: ["travel"] },
    { id: "plage", type: "word", pos: "noun", target: "la plage", gender: "f", plural: "les plages", gloss: { es: "la playa", en: "the beach" }, distractors: ["le plage", "la page", "la place"], tags: ["travel"] },
    { id: "rapide", type: "word", pos: "adj", target: "rapide", gloss: { es: "rápido/a", en: "fast / quick" }, distractors: ["lent", "rapace", "rigide"], tags: ["describe"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "un-aller-retour", type: "sentence", target: "Un aller-retour pour Lyon, s'il vous plaît.",
      gloss: { es: "Un boleto de ida y vuelta a Lyon, por favor.", en: "A return ticket to Lyon, please." },
      accept: [{ text: "Un aller-retour pour Lyon, svp." }],
      errors: [{ text: "Un aller-retour à Lyon, s'il vous plaît.", feedback: { es: "El destino de un boleto va con «pour».", en: "A ticket's destination takes 'pour'." } }],
      distractors: ["à", "aller", "simple"],
      tags: ["travel"],
    },
    {
      id: "quel-quai", type: "phrase", pos: "phrase", target: "Le train part de quel quai ?",
      gloss: { es: "¿De qué plataforma sale el tren?", en: "Which platform does the train leave from?" },
      accept: [{ text: "Le train part de quelle voie ?" }, { text: "De quel quai part le train ?" }],
      distractors: ["Le train part à quel quai ?", "Le train part de quelle quai ?", "Le train parte de quel quai ?"],
      tags: ["travel", "chunk"],
    },
    {
      id: "je-suis-alle", type: "sentence", target: "L'été dernier, je suis allé en Italie.",
      gloss: { es: "El verano pasado fui a Italia.", en: "Last summer I went to Italy." },
      accept: [{ text: "L'été dernier, je suis allée en Italie." }],
      errors: [{ text: "L'été dernier, j'ai allé en Italie.", feedback: { es: "aller va con être: je suis allé/e.", en: "aller takes être: je suis allé/e." }, ruleId: "fr-g-pc-etre" }],
      distractors: ["ai", "au", "été"],
      tags: ["travel", "past"],
    },
    {
      id: "elle-est-arrivee", type: "sentence", target: "Elle est arrivée à minuit.",
      gloss: { es: "Ella llegó a medianoche.", en: "She arrived at midnight." },
      errors: [{ text: "Elle est arrivé à minuit.", feedback: { es: "Con être el participio concuerda con el sujeto: elle est arrivée.", en: "With être the participle agrees with the subject: elle est arrivée." }, ruleId: "fr-g-pc-etre" }],
      distractors: ["a", "arrivé", "au"],
      tags: ["travel", "past"],
    },
    {
      id: "nous-sommes-partis", type: "sentence", target: "Nous sommes partis tôt le matin.",
      gloss: { es: "Salimos temprano en la mañana.", en: "We left early in the morning." },
      accept: [{ text: "Nous sommes parties tôt le matin." }, { text: "On est partis tôt le matin." }],
      distractors: ["avons", "parti", "tard"],
      tags: ["travel", "past"],
    },
    {
      id: "plus-rapide-que", type: "sentence", target: "Le train est plus rapide que le bus.",
      gloss: { es: "El tren es más rápido que el autobús.", en: "The train is faster than the bus." },
      errors: [{ text: "Le train est plus rapide de le bus.", feedback: { es: "La comparación va con «que»: plus… que.", en: "Comparisons use 'que': plus… que." }, ruleId: "fr-g-comparatif" }],
      distractors: ["moins", "de", "comme"],
      tags: ["travel", "comparison"],
    },
    {
      id: "cest-moins-cher", type: "sentence", target: "En avion, c'est moins cher mais moins agréable.",
      gloss: { es: "En avión es más barato, pero menos agradable.", en: "By plane it's cheaper, but less pleasant." },
      distractors: ["plus", "chère", "que"],
      tags: ["travel", "comparison"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-pc-etre", type: "pattern", target: "je suis allé · elle est venue · ils sont partis",
      gloss: { es: "passé composé con «être»", en: "passé composé with être" },
      pattern: {
        rule: {
          es: "Unos quince verbos de movimiento o cambio de estado (aller, venir, partir, arriver, entrer, sortir, naître, mourir, rester, tomber…) y todos los pronominales van con être. El participio concuerda con el sujeto: elle est partie, ils sont partis.",
          en: "About fifteen verbs of movement or change of state (aller, venir, partir, arriver, entrer, sortir, naître, mourir, rester, tomber…) and all reflexive verbs take être. The participle agrees with the subject: elle est partie, ils sont partis.",
        },
        table: [["je suis allé(e)", "nous sommes allé(e)s"], ["tu es allé(e)", "vous êtes allé(e)(s)"], ["il est allé · elle est allée", "ils sont allés · elles sont allées"]],
      },
      question: {
        prompt: { es: "Completa: «Mes amies ___ hier soir.» (venir)", en: "Complete: 'Mes amies ___ hier soir.' (venir)" },
        options: ["sont venues", "ont venu", "sont venu", "sont venus"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-pc-etre"], tags: ["grammar", "past"],
    },
    {
      id: "tab-pc-aller", type: "paradigm", target: "aller — passé composé", spoken: "aller, passé composé",
      gloss: { es: "«aller» (ir) en passé composé", en: "aller (to go) — passé composé" },
      grammar: ["fr-g-pc-etre"],
      paradigm: {
        caption: { es: "Conjuga «aller» en passé composé (sujeto masculino)", en: "Conjugate aller in the passé composé (masculine subject)" },
        cells: [
          { label: "je", answer: "suis allé", ruleId: "fr-g-pc-etre" },
          { label: "tu", answer: "es allé", ruleId: "fr-g-pc-etre" },
          { label: "il", answer: "est allé", ruleId: "fr-g-pc-etre" },
          { label: "elle", answer: "est allée", ruleId: "fr-g-pc-etre" },
          { label: "nous", answer: "sommes allés", ruleId: "fr-g-pc-etre" },
          { label: "ils", answer: "sont allés", ruleId: "fr-g-pc-etre" },
          { label: "elles", answer: "sont allées", ruleId: "fr-g-pc-etre" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "pat-comparatif", type: "pattern", target: "plus… que · moins… que · aussi… que",
      gloss: { es: "comparativos", en: "comparatives" },
      pattern: {
        rule: {
          es: "plus + adjetivo + que (más… que), moins… que (menos… que), aussi… que (tan… como). Irregulares: bon → meilleur (mejor, adjetivo), bien → mieux (mejor, adverbio).",
          en: "plus + adjective + que (more… than), moins… que (less… than), aussi… que (as… as). Irregular: bon → meilleur (better, adjective), bien → mieux (better, adverb).",
        },
        table: [["+", "plus cher que"], ["−", "moins cher que"], ["=", "aussi cher que"], ["bon", "meilleur que"], ["bien", "mieux que"]],
      },
      question: {
        prompt: { es: "Completa: «Ce restaurant est ___ que l'autre.» (bon, +)", en: "Complete: 'Ce restaurant est ___ que l'autre.' (bon, +)" },
        options: ["meilleur", "plus bon", "mieux", "plus meilleur"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-comparatif"], tags: ["grammar", "comparison"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-annonce", type: "listening",
      target: "Mesdames et messieurs, le train à destination de Marseille, prévu à quatorze heures dix, partira avec vingt minutes de retard, voie six.",
      gloss: {
        es: "Señoras y señores, el tren con destino a Marsella, previsto para las 14:10, saldrá con veinte minutos de retraso, vía seis.",
        en: "Ladies and gentlemen, the train to Marseille, scheduled for 14:10, will leave twenty minutes late, from platform six.",
      },
      question: {
        prompt: { es: "¿A qué hora sale ahora el tren?", en: "When will the train leave now?" },
        options: ["14:30", "14:10", "14:20", "16:10"],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "travel"],
    },
    {
      id: "dlg-guichet", type: "dialogue", target: "Un aller simple, s'il vous plaît.", register: "formal",
      gloss: { es: "Un boleto de ida, por favor.", en: "A one-way ticket, please." },
      turns: [
        { who: "A", target: "Bonjour, un aller simple pour Bordeaux, s'il vous plaît.", gloss: { es: "Buenos días, un boleto de ida a Burdeos, por favor.", en: "Hello, a one-way ticket to Bordeaux, please." } },
        { who: "B", target: "Pour quand ?", gloss: { es: "¿Para cuándo?", en: "For when?" } },
        { who: "A", target: "Pour demain matin, le plus tôt possible.", gloss: { es: "Para mañana en la mañana, lo más temprano posible.", en: "For tomorrow morning, as early as possible." } },
        { who: "B", target: "Il y a un train à six heures quarante-cinq. Ça fait soixante euros.", gloss: { es: "Hay un tren a las 6:45. Son sesenta euros.", en: "There's a train at 6:45. That's sixty euros." } },
      ],
      question: {
        prompt: { es: "¿Qué tipo de boleto compra?", en: "What kind of ticket does the traveller buy?" },
        options: [
          { es: "Solo de ida, para mañana", en: "One-way, for tomorrow" },
          { es: "De ida y vuelta, para hoy", en: "Return, for today" },
          { es: "Solo de ida, para hoy", en: "One-way, for today" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "travel"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-voie", type: "bridge", onlyFor: "es", target: "la voie",
      gloss: { es: "la vía (del tren)", en: "the track / platform" },
      distractors: ["la vía", "la voix", "la vue"],
      note: { es: "Suena como «la voix» (la voz). En las estaciones, voie y quai se usan casi igual." },
      exercises: ["guess", "recall"], tags: ["bridge", "travel"],
    },
    {
      id: "br-dr-mrs", type: "bridge", onlyFor: "es", target: "Je suis tombé.",
      gloss: { es: "Me caí.", en: "I fell." },
      distractors: ["J'ai tombé.", "Je me suis tombé.", "Je tombé."],
      note: { es: "En español todo va con «haber»; en francés, tomber, aller, venir, naître y compañía van con être." },
      exercises: ["guess", "recall"], tags: ["bridge", "past"],
    },
  ]),
};
