import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u20",
  lang: "fr",
  index: 20,
  cefr: "B2",
  title: { target: "L'actualité", es: "Noticias y actualidad", en: "News and current events" },
  canDo: [
    { es: "Puedo entender titulares y noticias breves de radio o periódico.", en: "I can understand headlines and short news items on the radio or in the paper." },
    { es: "Puedo resumir una noticia y decir quién hizo qué.", en: "I can summarise a news story and say who did what." },
    { es: "Sé usar la voz pasiva (être + participio, par) y «on».", en: "I can use the passive (être + participle, par) and 'on'." },
  ],
  icon: "📰",
  items: build("fr", 20, "B2", [
    { id: "journal", type: "word", pos: "noun", target: "le journal", gender: "m", plural: "les journaux", gloss: { es: "el periódico / el noticiero", en: "the newspaper / the news" }, distractors: ["la journal", "la journée", "le journaux"], note: { es: "le journal de vingt heures = el noticiero de la noche.", en: "le journal de vingt heures = the evening TV news." }, tags: ["news"] },
    { id: "gros-titre", type: "word", pos: "noun", target: "le titre", gender: "m", plural: "les titres", gloss: { es: "el titular, el título", en: "the headline / title" }, distractors: ["la titre", "le titan", "le tiers"], tags: ["news"] },
    { id: "enquete", type: "word", pos: "noun", target: "l'enquête", gender: "f", plural: "les enquêtes", gloss: { es: "la investigación / la encuesta", en: "the investigation / survey" }, distractors: ["le enquête", "l'enquêteur", "l'équipe"], tags: ["news"] },
    { id: "greve", type: "word", pos: "noun", target: "la grève", gender: "f", plural: "les grèves", gloss: { es: "la huelga, el paro", en: "the strike" }, distractors: ["le grève", "la grue", "la grêle"], note: { es: "être en grève = estar en huelga.", en: "être en grève = to be on strike." }, tags: ["news", "society"] },
    { id: "elections", type: "word", pos: "noun", target: "l'élection", gender: "f", plural: "les élections", gloss: { es: "la elección (votación)", en: "the election" }, distractors: ["le élection", "l'électricité", "la sélection"], tags: ["news", "politics"] },
    { id: "gouvernement", type: "word", pos: "noun", target: "le gouvernement", gender: "m", plural: "les gouvernements", gloss: { es: "el gobierno", en: "the government" }, distractors: ["la gouvernement", "le gouverneur", "le gouvernail"], tags: ["news", "politics"] },
    { id: "blesse", type: "word", pos: "adj", target: "blessé", gloss: { es: "herido/a", en: "injured" }, forms: { m: "blessé", f: "blessée" }, accept: [{ text: "blessée" }], distractors: ["blessant", "bless", "béni"], tags: ["news"] },
    { id: "selon", type: "word", pos: "prep", target: "selon", gloss: { es: "según", en: "according to" }, distractors: ["sel", "salon", "sinon"], tags: ["news"] },
    { id: "annoncer", type: "word", pos: "verb", target: "annoncer", gloss: { es: "anunciar", en: "to announce" }, distractors: ["renoncer", "énoncer", "annuler"], tags: ["news"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "le-pont-a-ete-ferme", type: "sentence", target: "Le pont a été fermé à cause de la tempête.",
      gloss: { es: "Cerraron el puente por la tormenta.", en: "The bridge was closed because of the storm." },
      errors: [{ text: "Le pont a fermé à cause de la tempête.", feedback: { es: "En pasiva: être + participio (a été fermé).", en: "Passive: être + participle (a été fermé)." }, ruleId: "fr-g-passif" }],
      distractors: ["est", "par", "grâce"],
      tags: ["passive", "news"],
    },
    {
      id: "le-voleur-a-ete-arrete", type: "sentence", target: "Le voleur a été arrêté par la police.",
      gloss: { es: "La policía detuvo al ladrón.", en: "The thief was arrested by the police." },
      errors: [{ text: "Le voleur a été arrêté de la police.", feedback: { es: "El agente de la pasiva va con «par».", en: "The agent of a passive takes 'par'." }, ruleId: "fr-g-passif" }],
      distractors: ["de", "arrêtée", "est"],
      tags: ["passive", "news"],
    },
    {
      id: "la-loi-sera-votee", type: "sentence", target: "La loi sera votée la semaine prochaine.",
      gloss: { es: "La ley se votará la semana que viene.", en: "The law will be voted on next week." },
      errors: [{ text: "La loi sera voté la semaine prochaine.", feedback: { es: "En pasiva el participio concuerda con el sujeto: votée.", en: "In the passive the participle agrees with the subject: votée." }, ruleId: "fr-g-passif" }],
      distractors: ["voté", "est", "se"],
      tags: ["passive", "politics"],
    },
    {
      id: "on-a-annonce", type: "sentence", target: "On a annoncé une grève des transports pour jeudi.",
      gloss: { es: "Anunciaron una huelga de transporte para el jueves.", en: "A transport strike has been announced for Thursday." },
      accept: [{ text: "Une grève des transports a été annoncée pour jeudi." }],
      distractors: ["Il", "annoncée", "le"],
      note: { es: "Con «on» se evita la pasiva, como con «se anunció» en español.", en: "'on' is a common way to avoid the passive." },
      tags: ["news", "passive"],
    },
    {
      id: "selon-les-experts", type: "sentence", target: "Selon les experts, les prix vont continuer à augmenter.",
      gloss: { es: "Según los expertos, los precios van a seguir subiendo.", en: "According to experts, prices will keep rising." },
      distractors: ["d'après", "de", "augmenté"],
      tags: ["news", "economy"],
    },
    {
      id: "aucun-blesse", type: "sentence", target: "Heureusement, il n'y a eu aucun blessé.",
      gloss: { es: "Por suerte no hubo ningún herido.", en: "Fortunately, nobody was injured." },
      errors: [{ text: "Heureusement, il n'y a pas eu aucun blessé.", feedback: { es: "aucun ya es negativo: ne… aucun, sin «pas».", en: "aucun is already negative: ne… aucun, without 'pas'." } }],
      distractors: ["pas", "aucune", "blessés"],
      tags: ["news", "negation"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-passif", type: "pattern", target: "La lettre est écrite par Paul.",
      gloss: { es: "la voz pasiva", en: "the passive voice" },
      pattern: {
        rule: {
          es: "être (en el tiempo que quieras) + participio concordado con el sujeto + par + agente. El tiempo lo marca être: est construite, a été construite, sera construite.",
          en: "être (in any tense) + participle agreeing with the subject + par + agent. The tense is carried by être: est construite, a été construite, sera construite.",
        },
        table: [["présent", "La maison est construite."], ["passé composé", "La maison a été construite."], ["futur", "La maison sera construite."]],
      },
      question: {
        prompt: { es: "Pasa a pasiva: «Le maire a inauguré la piscine.»", en: "Make it passive: 'Le maire a inauguré la piscine.'" },
        options: ["La piscine a été inaugurée par le maire.", "La piscine a inauguré par le maire.", "La piscine est inauguré par le maire.", "La piscine a été inauguré du maire."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-passif"], tags: ["grammar", "passive"],
    },
    {
      id: "tab-passif", type: "paradigm", target: "être construit — voix passive", spoken: "voix passive",
      gloss: { es: "la pasiva en varios tiempos", en: "the passive in several tenses" },
      grammar: ["fr-g-passif"],
      paradigm: {
        caption: { es: "«La maison ___ construite.» Escribe el verbo «être»", en: "'La maison ___ construite.' Write the form of être" },
        cells: [
          { label: "présent", answer: "est", ruleId: "fr-g-passif" },
          { label: "passé composé", answer: "a été", ruleId: "fr-g-passif" },
          { label: "imparfait", answer: "était", ruleId: "fr-g-passif" },
          { label: "futur", answer: "sera", ruleId: "fr-g-passif" },
          { label: "plus-que-parfait", answer: "avait été", ruleId: "fr-g-passif" },
        ],
      },
      tags: ["grammar", "passive", "table"],
    },
    {
      id: "pat-on-passif", type: "pattern", target: "On a volé ma voiture. · Ma voiture a été volée.",
      gloss: { es: "evitar la pasiva con «on»", en: "avoiding the passive with 'on'" },
      pattern: {
        rule: {
          es: "Si no importa quién lo hizo, al hablar se prefiere «on» + verbo activo: on m'a volé mon portefeuille. La pasiva es más propia de la prensa y de los textos escritos.",
          en: "When it doesn't matter who did it, speech prefers 'on' + an active verb: on m'a volé mon portefeuille. The passive is more typical of the press and written texts.",
        },
        table: [["oral", "On a réparé la route."], ["écrit", "La route a été réparée."]],
      },
      question: {
        prompt: { es: "¿Cuál suena más natural al hablar con un amigo?", en: "Which sounds most natural chatting with a friend?" },
        options: ["On m'a volé mon vélo !", "Mon vélo a été volé par quelqu'un !", "Mon vélo s'est volé !", "Mon vélo est volé de quelqu'un !"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-passif"], tags: ["grammar", "passive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-flash", type: "listening",
      target: "Flash info. Un incendie s'est déclaré cette nuit dans un entrepôt près de Lille. Les pompiers sont arrivés rapidement et aucun blessé n'est à déplorer. Une enquête a été ouverte.",
      gloss: {
        es: "Último momento. Anoche se declaró un incendio en un almacén cerca de Lille. Los bomberos llegaron rápido y no hay heridos que lamentar. Se abrió una investigación.",
        en: "News flash. A fire broke out last night in a warehouse near Lille. Firefighters arrived quickly and nobody was hurt. An investigation has been opened.",
      },
      question: {
        prompt: { es: "¿Qué se abrió después del incendio?", en: "What was opened after the fire?" },
        options: [
          { es: "Una investigación", en: "An investigation" },
          { es: "Un hospital", en: "A hospital" },
          { es: "Un nuevo almacén", en: "A new warehouse" },
          { es: "Una carretera", en: "A road" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "news"],
    },
    {
      id: "dlg-nouvelle", type: "dialogue", target: "Tu as entendu la nouvelle ?", register: "informal",
      gloss: { es: "¿Supiste la noticia?", en: "Have you heard the news?" },
      turns: [
        { who: "A", target: "Tu as entendu la nouvelle ? La gare va être rénovée.", gloss: { es: "¿Supiste la noticia? Van a renovar la estación.", en: "Have you heard the news? The station's going to be renovated." } },
        { who: "B", target: "Ah bon ? Les travaux vont durer combien de temps ?", gloss: { es: "¿En serio? ¿Cuánto van a durar las obras?", en: "Really? How long will the works last?" } },
        { who: "A", target: "Deux ans, selon le journal. Les trains seront déviés vers l'autre gare.", gloss: { es: "Dos años, según el periódico. Los trenes se desviarán a la otra estación.", en: "Two years, according to the paper. Trains will be diverted to the other station." } },
        { who: "B", target: "Super… Ça va être pratique pour aller au travail !", gloss: { es: "Genial… ¡Qué práctico para ir al trabajo!", en: "Great… That'll be handy for getting to work!" } },
      ],
      question: {
        prompt: { es: "¿Cómo reacciona B al final?", en: "How does B react at the end?" },
        options: [
          { es: "Con ironía: no le conviene", en: "Ironically: it's bad news for him" },
          { es: "Con mucha alegría", en: "Very happily" },
          { es: "Con indiferencia", en: "Indifferently" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "news"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-se-passif", type: "bridge", onlyFor: "es", target: "On vend des billets ici.",
      gloss: { es: "Aquí se venden boletos.", en: "Tickets are sold here." },
      distractors: ["Se vend des billets ici.", "Il se vendent billets ici.", "Des billets vendent ici."],
      note: { es: "La pasiva refleja española (se venden) suele ser «on» en francés: on vend, on parle français." },
      exercises: ["guess", "recall"], tags: ["bridge", "passive"],
    },
    {
      id: "br-actualite", type: "bridge", onlyFor: "es", target: "les actualités",
      gloss: { es: "las noticias", en: "the news" },
      question: {
        prompt: { es: "«Je regarde les actualités» significa…", en: "'Je regarde les actualités' means…" },
        options: [
          { es: "Veo las noticias", en: "I watch the news" },
          { es: "Miro las novedades de la moda", en: "I look at the latest fashion" },
          { es: "Reviso las actualizaciones del celular", en: "I check my phone updates" },
        ],
        answer: 0,
      },
      note: { es: "les actualités (o les infos) = las noticias. Una actualización de software es «une mise à jour»." },
      exercises: ["guess", "question"], tags: ["bridge", "news"],
    },
  ]),
};
