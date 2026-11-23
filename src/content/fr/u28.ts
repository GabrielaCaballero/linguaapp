import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u28",
  lang: "fr",
  index: 28,
  cefr: "C1",
  title: { target: "Les médias", es: "Los medios de comunicación", en: "The media" },
  canDo: [
    { es: "Puedo seguir noticias y distinguir un hecho confirmado de un rumor.", en: "I can follow the news and tell a confirmed fact from a rumour." },
    { es: "Sé reconocer el condicional periodístico (le suspect aurait fui).", en: "I can recognise the journalistic conditional (le suspect aurait fui)." },
    { es: "Distingo el participio presente del adjetivo verbal (fatiguant / fatigant).", en: "I can tell the present participle from the verbal adjective (fatiguant / fatigant)." },
  ],
  icon: "📰",
  items: build("fr", 28, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "la-une", type: "word", pos: "noun", target: "la une", gender: "f", plural: "les unes", gloss: { es: "la portada (de un diario)", en: "the front page" }, distractors: ["l'une", "la lune", "la première"], note: { es: "à la une = en portada; faire la une = ser noticia de portada.", en: "à la une = on the front page; faire la une = to make the headlines." }, tags: ["media"] },
    { id: "redaction", type: "word", pos: "noun", target: "la rédaction", gender: "f", plural: "les rédactions", gloss: { es: "la redacción (equipo de un medio)", en: "the newsroom / editorial team" }, distractors: ["la réduction", "la rédactrice", "la rédemption"], tags: ["media", "work"] },
    { id: "infox", type: "word", pos: "noun", target: "l'infox", gender: "f", plural: "les infox", gloss: { es: "la noticia falsa", en: "the fake news story" }, accept: [{ text: "la fake news" }], distractors: ["l'info", "l'influx", "l'index"], note: { es: "Término oficial; en la calle se dice mucho «une fake news».", en: "The official term; in everyday speech people say une fake news." }, tags: ["media"] },
    { id: "dementi", type: "word", pos: "noun", target: "le démenti", gender: "m", plural: "les démentis", gloss: { es: "el desmentido", en: "the (official) denial" }, distractors: ["le dément", "le mensonge", "la démence"], tags: ["media", "politics"] },
    { id: "dementir", type: "word", pos: "verb", target: "démentir", gloss: { es: "desmentir", en: "to deny (a report)" }, forms: { il: "dément", pp: "démenti" }, distractors: ["mentir", "dénoncer", "démonter"], tags: ["media", "politics"] },
    {
      id: "audience", type: "word", pos: "noun", target: "l'audience", gender: "f", plural: "les audiences",
      gloss: { es: "la audiencia, el índice de audiencia", en: "the ratings / viewing figures" },
      distractors: ["l'auditoire", "l'audition", "l'assistance"],
      note: { es: "También «audiencia» judicial. Las personas que miran son le public o les téléspectateurs.", en: "Also a court hearing. The people watching are le public or les téléspectateurs." },
      tags: ["media"],
    },
    { id: "editorial", type: "word", pos: "noun", target: "l'éditorial", gender: "m", plural: "les éditoriaux", gloss: { es: "el editorial (artículo de opinión)", en: "the editorial / leader" }, distractors: ["l'éditeur", "l'édition", "l'éditoriale"], tags: ["media"] },
    { id: "lanceur-dalerte", type: "word", pos: "noun", target: "le lanceur d'alerte", gender: "m", plural: "les lanceurs d'alerte", gloss: { es: "el denunciante, el informante (de irregularidades)", en: "the whistleblower" }, distractors: ["le lanceur d'alarme", "le donneur d'alerte", "le lanceur de l'alerte"], note: { es: "En femenino: la lanceuse d'alerte.", en: "Feminine: la lanceuse d'alerte." }, tags: ["media", "politics"] },
    { id: "relayer", type: "word", pos: "verb", target: "relayer", gloss: { es: "difundir, hacerse eco de (una noticia)", en: "to relay / pass on (news)" }, forms: { pp: "relayé" }, distractors: ["relever", "relier", "rayer"], tags: ["media"] },
    { id: "presume", type: "word", pos: "adj", target: "présumé", gloss: { es: "presunto/a", en: "alleged" }, forms: { m: "présumé", f: "présumée" }, accept: [{ text: "présumée" }], distractors: ["présomptueux", "pressé", "prévu"], note: { es: "l'auteur présumé = el presunto autor.", en: "l'auteur présumé = the alleged perpetrator." }, tags: ["media", "law"] },
    { id: "selon-nos-informations", type: "phrase", pos: "phrase", target: "selon nos informations", gloss: { es: "según nuestras fuentes", en: "according to our information" }, accept: [{ text: "d'après nos informations" }], distractors: ["selon notre information", "selon nos informés", "selon les nôtres informations"], grammar: ["fr-g-conditionnel-info"], tags: ["media", "chunk"] },
    { id: "faire-la-une", type: "phrase", pos: "phrase", target: "faire la une", gloss: { es: "ser noticia de portada", en: "to make the headlines" }, distractors: ["faire l'une", "être la une", "faire la lune"], tags: ["media", "chunk"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "suspect-aurait-pris-la-fuite", type: "sentence", target: "Le suspect aurait pris la fuite à l'étranger.",
      gloss: { es: "El sospechoso habría huido al extranjero.", en: "The suspect has reportedly fled abroad." },
      distractors: ["a", "aura", "fuit"],
      note: { es: "Condicional periodístico: información aún no confirmada.", en: "Journalistic conditional: the information isn't confirmed yet." },
      grammar: ["fr-g-conditionnel-info"], tags: ["media", "news"],
    },
    {
      id: "ministre-demissionnerait", type: "sentence", target: "Selon nos informations, le ministre démissionnerait dans les prochains jours.",
      gloss: { es: "Según nuestra información, el ministro renunciaría en los próximos días.", en: "According to our sources, the minister is set to resign in the coming days." },
      distractors: ["démissionnera", "prochaines", "jour"],
      grammar: ["fr-g-conditionnel-info"], tags: ["media", "politics"],
    },
    {
      id: "gouvernement-a-dementi", type: "sentence", target: "Le gouvernement a démenti ces rumeurs.",
      gloss: { es: "El gobierno desmintió esos rumores.", en: "The government denied these rumours." },
      errors: [{ text: "Le gouvernement a démenti ses rumeurs.", feedback: { es: "Aquí es el demostrativo «ces» (esos), no el posesivo «ses» (sus).", en: "Here it's the demonstrative ces (these), not the possessive ses (its)." } }],
      distractors: ["démenté", "rumeur", "ses"],
      tags: ["media", "politics"],
    },
    {
      id: "avec-des-pincettes", type: "sentence", target: "C'est une information non vérifiée, à prendre avec des pincettes.",
      gloss: { es: "Es una información no verificada, hay que tomarla con pinzas.", en: "It's unverified information, to be taken with a pinch of salt." },
      distractors: ["vérifié", "pinces", "sel"],
      tags: ["media", "idioms"],
    },
    {
      id: "chiffres-provenant", type: "sentence", target: "Les chiffres, provenant de sources différentes, ne concordent pas.",
      gloss: { es: "Las cifras, que provienen de fuentes distintas, no coinciden.", en: "The figures, which come from different sources, don't match." },
      errors: [{ text: "Les chiffres, provenants de sources différentes, ne concordent pas.", feedback: { es: "El participio presente es invariable: provenant.", en: "The present participle never agrees: provenant." }, ruleId: "fr-g-participe-present" }],
      distractors: ["provenants", "différents", "concordant"],
      grammar: ["fr-g-participe-present"], tags: ["media", "formal"],
    },
    {
      id: "debat-fatigant", type: "sentence", target: "Ce débat est fatigant, et les arguments ne sont pas convaincants.",
      gloss: { es: "Este debate es agotador, y los argumentos no son convincentes.", en: "This debate is tiring, and the arguments aren't convincing." },
      errors: [
        { text: "Ce débat est fatiguant, et les arguments ne sont pas convaincants.", feedback: { es: "El adjetivo se escribe sin «u»: fatigant (fatiguant es el participio).", en: "The adjective has no u: fatigant (fatiguant is the participle)." }, ruleId: "fr-g-participe-present" },
        { text: "Ce débat est fatigant, et les arguments ne sont pas convainquants.", feedback: { es: "El adjetivo es «convaincant(s)»; convainquant es el participio.", en: "The adjective is convaincant(s); convainquant is the participle." }, ruleId: "fr-g-participe-present" },
      ],
      distractors: ["fatiguant", "convainquants", "fatigué"],
      grammar: ["fr-g-participe-present"], tags: ["media", "debate", "spelling"],
    },
    {
      id: "redaction-relayer", type: "sentence", target: "La rédaction a décidé de ne pas relayer cette rumeur.",
      gloss: { es: "La redacción decidió no difundir ese rumor.", en: "The editors decided not to pass on that rumour." },
      distractors: ["relever", "rumeurs", "décidée"],
      tags: ["media"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-conditionnel-info", type: "pattern", target: "Le suspect aurait fui. · Il y aurait dix blessés.",
      gloss: { es: "el condicional periodístico (información no confirmada)", en: "the journalistic conditional (unconfirmed information)" },
      pattern: {
        rule: {
          es: "La prensa usa el condicional para dar una información sin garantizarla: il y aurait trois blessés (= según parece, hay tres heridos). Para el pasado, condicional pasado: le suspect aurait fui.",
          en: "The press uses the conditional to report something without vouching for it: il y aurait trois blessés (= there are reportedly three injured). For the past, the past conditional: le suspect aurait fui.",
        },
        table: [["fait confirmé", "Le ministre a démissionné."], ["non confirmé", "Le ministre aurait démissionné."], ["non confirmé", "Il y aurait trois blessés."]],
      },
      question: {
        prompt: { es: "En una noticia, «L'incendie serait d'origine criminelle» significa…", en: "In a news report, 'L'incendie serait d'origine criminelle' means…" },
        options: [
          { es: "Parece que el incendio fue provocado (sin confirmar).", en: "The fire was apparently started deliberately (unconfirmed)." },
          { es: "Está confirmado que el incendio fue provocado.", en: "It's confirmed that the fire was started deliberately." },
          { es: "El incendio será provocado.", en: "The fire will be started deliberately." },
          { es: "El incendio no fue provocado.", en: "The fire wasn't started deliberately." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-conditionnel-info"], tags: ["grammar", "media"],
    },
    {
      id: "pat-participe-present", type: "pattern", target: "fatiguant (participe) · fatigant (adjectif)",
      gloss: { es: "participio presente o adjetivo verbal", en: "present participle or verbal adjective" },
      pattern: {
        rule: {
          es: "El participio presente (-ant) es invariable y expresa una acción: les enfants, fatiguant leurs parents, … El adjetivo verbal concuerda y a veces cambia de ortografía: une journée fatigante, des arguments convaincants.",
          en: "The present participle (-ant) never agrees and expresses an action: les enfants, fatiguant leurs parents, … The verbal adjective agrees and sometimes changes spelling: une journée fatigante, des arguments convaincants.",
        },
        table: [["participe (invariable)", "adjectif (accordé)"], ["fatiguant", "fatigant(e)(s)"], ["convainquant", "convaincant(e)(s)"], ["négligeant", "négligent(e)(s)"], ["différant", "différent(e)(s)"]],
      },
      question: {
        prompt: { es: "Completa: «Ce travail est très ___.»", en: "Complete: 'Ce travail est très ___.'" },
        options: ["fatigant", "fatiguant", "fatigants", "fatiguante"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-participe-present"], tags: ["grammar", "spelling"],
    },
    {
      id: "tab-adjectif-verbal", type: "paradigm", target: "participe → adjectif",
      gloss: { es: "del participio presente al adjetivo", en: "from present participle to adjective" },
      grammar: ["fr-g-participe-present"],
      paradigm: {
        caption: { es: "Escribe el adjetivo (masculino singular)", en: "Write the adjective (masculine singular)" },
        cells: [
          { label: "convainquant", answer: "convaincant", ruleId: "fr-g-participe-present" },
          { label: "fatiguant", answer: "fatigant", ruleId: "fr-g-participe-present" },
          { label: "négligeant", answer: "négligent", ruleId: "fr-g-participe-present" },
          { label: "différant", answer: "différent", ruleId: "fr-g-participe-present" },
          { label: "précédant", answer: "précédent", ruleId: "fr-g-participe-present" },
          { label: "provoquant", answer: "provocant", ruleId: "fr-g-participe-present" },
        ],
      },
      tags: ["grammar", "spelling", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-flash-incendie", type: "listening",
      target: "Un incendie s'est déclaré cette nuit dans le centre de Lyon. Selon les premiers éléments de l'enquête, il serait d'origine criminelle. Deux personnes auraient été légèrement blessées. La préfecture doit s'exprimer dans la matinée.",
      gloss: {
        es: "Anoche se declaró un incendio en el centro de Lyon. Según los primeros datos de la investigación, habría sido provocado. Dos personas habrían resultado heridas leves. La prefectura hablará durante la mañana.",
        en: "A fire broke out last night in the centre of Lyon. According to the first findings of the investigation, it was apparently started deliberately. Two people were reportedly slightly injured. The prefecture is due to comment this morning.",
      },
      question: {
        prompt: { es: "¿Qué dato se presenta como seguro?", en: "Which fact is presented as certain?" },
        options: [
          { es: "Que hubo un incendio en el centro de Lyon.", en: "That there was a fire in the centre of Lyon." },
          { es: "Que el incendio fue provocado.", en: "That the fire was started deliberately." },
          { es: "Que dos personas murieron.", en: "That two people died." },
          { es: "Que la prefectura ya habló.", en: "That the prefecture has already commented." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-conditionnel-info"], tags: ["listening", "media", "news"],
    },
    {
      id: "dlg-une", type: "dialogue", register: "informal", target: "Tu as vu la une, ce matin ?",
      gloss: { es: "¿Viste la portada esta mañana?", en: "Did you see the front page this morning?" },
      turns: [
        { who: "A", target: "Tu as vu la une, ce matin ? Le maire aurait touché des pots-de-vin.", gloss: { es: "¿Viste la portada esta mañana? El alcalde habría cobrado sobornos.", en: "Did you see the front page this morning? The mayor allegedly took bribes." } },
        { who: "B", target: "« Aurait », justement. C'est un lanceur d'alerte anonyme qui l'affirme, non ?", gloss: { es: "«Habría», justamente. Lo afirma un denunciante anónimo, ¿no?", en: "'Allegedly' is the word. An anonymous whistleblower is claiming it, right?" } },
        { who: "A", target: "Oui, et la mairie a déjà publié un démenti.", gloss: { es: "Sí, y el ayuntamiento ya publicó un desmentido.", en: "Yes, and the town hall has already issued a denial." } },
        { who: "B", target: "Alors attendons l'enquête avant de relayer n'importe quoi.", gloss: { es: "Entonces esperemos la investigación antes de difundir cualquier cosa.", en: "Then let's wait for the investigation before passing on any old thing." } },
      ],
      question: {
        prompt: { es: "¿Qué recomienda B?", en: "What does B recommend?" },
        options: [
          { es: "Esperar la investigación antes de difundir la noticia.", en: "Waiting for the investigation before sharing the story." },
          { es: "Compartir la noticia enseguida.", en: "Sharing the story straight away." },
          { es: "Escribir al alcalde.", en: "Writing to the mayor." },
          { es: "No volver a leer ese diario.", en: "Never reading that paper again." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-conditionnel-info"], tags: ["dialogue", "media"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-editer", type: "bridge", onlyFor: "en", target: "éditer",
      gloss: { es: "publicar (un libro)", en: "to publish (not 'to edit')" },
      question: {
        prompt: { es: "«Cette maison édite des romans policiers» significa…", en: "'Cette maison édite des romans policiers' means…" },
        options: [
          { es: "Esta editorial publica novelas policiales.", en: "This firm publishes crime novels." },
          { es: "Esta editorial corrige novelas policiales.", en: "This firm edits crime novels." },
          { es: "En esta casa se leen novelas policiales.", en: "Crime novels are read in this house." },
        ],
        answer: 0,
      },
      note: { en: "To edit a text = réviser or corriger; a newspaper editor = un rédacteur (the editor-in-chief = le rédacteur en chef)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "media"],
    },
  ]),
};
