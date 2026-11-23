import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u29",
  lang: "fr",
  index: 29,
  cefr: "C1",
  title: { target: "Science et environnement", es: "Ciencia y medio ambiente", en: "Science and the environment" },
  canDo: [
    { es: "Puedo entender y resumir un texto de divulgación científica.", en: "I can understand and summarise a popular-science text." },
    { es: "Sé usar la pasiva con «se» (le verre se recycle) y «se faire» + infinitivo.", en: "I can use the passive with se (le verre se recycle) and se faire + infinitive." },
    { es: "Sé encadenar acciones con ayant fait y une fois + participio.", en: "I can link actions with ayant fait and une fois + participle." },
  ],
  icon: "🔬",
  items: build("fr", 29, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "rechauffement", type: "word", pos: "noun", target: "le réchauffement climatique", gender: "m", plural: "les réchauffements climatiques", gloss: { es: "el calentamiento global", en: "global warming" }, distractors: ["le réchauffage climatique", "le chauffage climatique", "la chaleur climatique"], tags: ["environment", "science"] },
    { id: "empreinte-carbone", type: "word", pos: "noun", target: "l'empreinte carbone", gender: "f", plural: "les empreintes carbone", gloss: { es: "la huella de carbono", en: "the carbon footprint" }, distractors: ["l'emprunte carbone", "l'impression carbone", "la trace carbone"], tags: ["environment"] },
    { id: "espece-menacee", type: "word", pos: "noun", target: "l'espèce menacée", gender: "f", plural: "les espèces menacées", gloss: { es: "la especie amenazada", en: "the endangered species" }, distractors: ["l'espace menacé", "l'espèce menaçante", "l'épice menacée"], tags: ["environment", "nature"] },
    { id: "secheresse", type: "word", pos: "noun", target: "la sécheresse", gender: "f", plural: "les sécheresses", gloss: { es: "la sequía", en: "the drought" }, distractors: ["le séchoir", "la sagesse", "la richesse"], tags: ["environment"] },
    { id: "energie-renouvelable", type: "word", pos: "noun", target: "l'énergie renouvelable", gender: "f", plural: "les énergies renouvelables", gloss: { es: "la energía renovable", en: "renewable energy" }, distractors: ["l'énergie renouvelée", "l'énergie renouvelante", "l'énergie nouvelable"], tags: ["environment"] },
    { id: "echantillon", type: "word", pos: "noun", target: "l'échantillon", gender: "m", plural: "les échantillons", gloss: { es: "la muestra (de un análisis)", en: "the sample" }, distractors: ["l'échelon", "l'exemplaire", "la montre"], note: { es: "la montre = el reloj, no la muestra.", en: "la montre = the watch." }, tags: ["science"] },
    { id: "hypothese", type: "word", pos: "noun", target: "l'hypothèse", gender: "f", plural: "les hypothèses", gloss: { es: "la hipótesis", en: "the hypothesis" }, distractors: ["l'hypothèque", "la thèse", "l'hypothétique"], note: { es: "l'hypothèque = la hipoteca.", en: "«l'hypothèque» = the mortgage." }, tags: ["science"] },
    { id: "chercheur", type: "word", pos: "noun", target: "le chercheur", gender: "m", plural: "les chercheurs", gloss: { es: "el investigador (científico)", en: "the researcher" }, forms: { f: "la chercheuse" }, accept: [{ text: "la chercheuse" }], distractors: ["le chercheux", "le cherchant", "le recherché"], tags: ["science", "work"] },
    { id: "emettre", type: "word", pos: "verb", target: "émettre", gloss: { es: "emitir", en: "to emit / give off" }, forms: { je: "émets", pp: "émis" }, distractors: ["omettre", "admettre", "émietter"], tags: ["environment", "science"] },
    { id: "nuire-a", type: "word", pos: "verb", target: "nuire à", gloss: { es: "perjudicar, dañar", en: "to harm" }, forms: { il: "nuit", pp: "nui" }, distractors: ["nourrir", "nouer", "noyer"], note: { es: "Lleva «à»: le tabac nuit à la santé.", en: "It takes à: le tabac nuit à la santé." }, tags: ["environment", "health"] },
    { id: "durable", type: "word", pos: "adj", target: "durable", gloss: { es: "sostenible", en: "sustainable" }, distractors: ["dur", "duratif", "soutenu"], note: { es: "le développement durable = el desarrollo sostenible.", en: "le développement durable = sustainable development." }, tags: ["environment"] },
    { id: "sonnette-dalarme", type: "phrase", pos: "phrase", target: "tirer la sonnette d'alarme", gloss: { es: "dar la voz de alarma", en: "to sound the alarm" }, distractors: ["tirer la sonnerie d'alarme", "tirer la cloche d'alarme", "pousser la sonnette d'alarme"], tags: ["environment", "idioms"] },
    { id: "a-lechelle-mondiale", type: "phrase", pos: "phrase", target: "à l'échelle mondiale", gloss: { es: "a escala mundial", en: "on a global scale" }, distractors: ["en échelle mondiale", "à l'escale mondiale", "à la échelle mondiale"], tags: ["environment", "chunk"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "le-verre-se-recycle", type: "sentence", target: "Le verre se recycle à l'infini.",
      gloss: { es: "El vidrio se recicla infinitamente.", en: "Glass can be recycled endlessly." },
      distractors: ["est", "recyclé", "infinie"],
      grammar: ["fr-g-passif-pronominal"], tags: ["environment"],
    },
    {
      id: "ne-semploie-plus", type: "sentence", target: "Ce mot ne s'emploie plus guère.",
      gloss: { es: "Esta palabra ya casi no se usa.", en: "This word is hardly used any more." },
      distractors: ["utilise", "pas", "mots"],
      note: { es: "ne… guère = apenas, casi no (registro cuidado).", en: "ne… guère = hardly, scarcely (careful style)." },
      grammar: ["fr-g-passif-pronominal"], tags: ["language", "formal"],
    },
    {
      id: "sest-fait-renverser", type: "sentence", target: "Il s'est fait renverser par une voiture.",
      gloss: { es: "Lo atropelló un auto.", en: "He got run over by a car." },
      errors: [{ text: "Il s'est fait renversé par une voiture.", feedback: { es: "Tras «se faire» va el infinitivo: se faire renverser.", en: "se faire is followed by the infinitive: se faire renverser." }, ruleId: "fr-g-passif-pronominal" }],
      distractors: ["été", "renversé", "pour"],
      grammar: ["fr-g-passif-pronominal"], tags: ["news"],
    },
    {
      id: "une-fois-les-donnees", type: "sentence", target: "Une fois les données analysées, les chercheurs ont publié leurs résultats.",
      gloss: { es: "Una vez analizados los datos, los investigadores publicaron sus resultados.", en: "Once the data had been analysed, the researchers published their results." },
      errors: [{ text: "Une fois les données analysés, les chercheurs ont publié leurs résultats.", feedback: { es: "El participio concuerda con «les données» (femenino plural): analysées.", en: "The participle agrees with les données (feminine plural): analysées." }, ruleId: "fr-g-participe-compose" }],
      distractors: ["analysés", "analyser", "leur"],
      grammar: ["fr-g-participe-compose"], tags: ["science"],
    },
    {
      id: "ayant-constate", type: "sentence", target: "Ayant constaté une hausse des températures, l'équipe a lancé une nouvelle étude.",
      gloss: { es: "Tras constatar un aumento de las temperaturas, el equipo lanzó un nuevo estudio.", en: "Having noted a rise in temperatures, the team launched a new study." },
      distractors: ["Étant", "constatée", "nouvel"],
      grammar: ["fr-g-participe-compose"], tags: ["science", "environment"],
    },
    {
      id: "emissions-ont-diminue", type: "sentence", target: "Les émissions de gaz à effet de serre ont diminué de dix pour cent.",
      gloss: { es: "Las emisiones de gases de efecto invernadero bajaron un diez por ciento.", en: "Greenhouse gas emissions fell by ten per cent." },
      distractors: ["diminuées", "par", "serres"],
      tags: ["environment", "numbers"],
    },
    {
      id: "urgent-que-les-etats", type: "sentence", target: "Il est urgent que les États agissent.",
      gloss: { es: "Es urgente que los Estados actúen.", en: "It's urgent that states take action." },
      distractors: ["agissaient", "agir", "agis"],
      tags: ["environment", "politics", "subjunctive"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-passif-pronominal", type: "pattern", target: "Le verre se recycle. · Ça se mange. · Il s'est fait voler son vélo.",
      gloss: { es: "la pasiva con «se» y con «se faire»", en: "the passive with se and with se faire" },
      pattern: {
        rule: {
          es: "Como en español, «se» + verbo puede tener sentido pasivo, sobre todo para normas y usos: le vin blanc se boit frais. «se faire» + infinitivo indica que algo le pasa al sujeto: il s'est fait voler son vélo (le robaron la bici).",
          en: "se + verb can have a passive meaning, especially for rules and habits: le vin blanc se boit frais (is drunk chilled). se faire + infinitive means something happens to the subject: il s'est fait voler son vélo (he had his bike stolen).",
        },
        table: [["usage / norme", "Ça ne se fait pas."], ["passif", "Le verre se recycle."], ["se faire + inf.", "Elle s'est fait licencier."]],
      },
      question: {
        prompt: { es: "Completa: «Ce plat ___ froid.» (se sirve frío)", en: "Complete: 'Ce plat ___ froid.' (it's eaten cold)" },
        options: ["se mange", "mange", "se mangent", "s'est mangé"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-passif-pronominal"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-participe-compose", type: "pattern", target: "Ayant fini, il est parti. · Une fois la porte fermée, …",
      gloss: { es: "acción anterior: ayant fait, une fois + participio", en: "an earlier action: ayant fait, une fois + participle" },
      pattern: {
        rule: {
          es: "Para una acción terminada antes de otra: ayant / étant + participio (ayant fini, étant arrivée) o une fois + sustantivo + participio concordado (une fois la décision prise). Es típico del registro escrito.",
          en: "For an action completed before another: ayant / étant + participle (ayant fini, étant arrivée) or une fois + noun + agreeing participle (une fois la décision prise). Typical of written style.",
        },
        table: [["avoir → ayant", "ayant lu le rapport"], ["être → étant", "étant arrivée en retard"], ["une fois + nom", "une fois les tests terminés"]],
      },
      question: {
        prompt: { es: "Completa: «___ terminé son rapport, elle l'a envoyé.»", en: "Complete: '___ terminé son rapport, elle l'a envoyé.'" },
        options: ["Ayant", "Étant", "Avant", "Ayante"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-participe-compose"], tags: ["grammar", "formal"],
    },
    {
      id: "tab-participe-compose", type: "paradigm", target: "ayant fait · étant parti",
      gloss: { es: "el participio compuesto", en: "the perfect participle" },
      grammar: ["fr-g-participe-compose"],
      paradigm: {
        caption: { es: "Escribe el participio compuesto (ayant/étant + participio)", en: "Write the perfect participle (ayant/étant + participle)" },
        cells: [
          { label: "finir (il)", answer: "ayant fini", ruleId: "fr-g-participe-compose" },
          { label: "partir (elle)", answer: "étant partie", ruleId: "fr-g-participe-compose" },
          { label: "lire (ils)", answer: "ayant lu", ruleId: "fr-g-participe-compose" },
          { label: "arriver (nous, m.)", answer: "étant arrivés", ruleId: "fr-g-participe-compose" },
          { label: "voir (je)", answer: "ayant vu", ruleId: "fr-g-participe-compose" },
        ],
      },
      tags: ["grammar", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-secheresse", type: "listening",
      target: "Selon une étude publiée cette semaine, la sécheresse de l'été dernier aurait réduit les récoltes de vingt pour cent. Les chercheurs tirent la sonnette d'alarme : si rien ne change, ce type d'épisode pourrait devenir la norme d'ici trente ans.",
      gloss: {
        es: "Según un estudio publicado esta semana, la sequía del verano pasado habría reducido las cosechas en un veinte por ciento. Los investigadores dan la voz de alarma: si nada cambia, este tipo de episodio podría volverse lo normal de aquí a treinta años.",
        en: "According to a study published this week, last summer's drought reportedly cut harvests by twenty per cent. Researchers are sounding the alarm: if nothing changes, this kind of episode could become the norm within thirty years.",
      },
      question: {
        prompt: { es: "¿De qué advierten los investigadores?", en: "What are the researchers warning about?" },
        options: [
          { es: "Las sequías podrían volverse habituales.", en: "Droughts could become normal." },
          { es: "Las cosechas aumentarán un veinte por ciento.", en: "Harvests will rise by twenty per cent." },
          { es: "El próximo verano será muy lluvioso.", en: "Next summer will be very wet." },
          { es: "El estudio no es fiable.", en: "The study isn't reliable." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "science", "environment"],
    },
    {
      id: "dlg-empreinte", type: "dialogue", target: "Notre empreinte carbone, c'est surtout l'avion.",
      gloss: { es: "Nuestra huella de carbono viene sobre todo del avión.", en: "Our carbon footprint is mostly flying." },
      turns: [
        { who: "A", target: "La direction veut réduire l'empreinte carbone de l'entreprise. Des idées ?", gloss: { es: "La dirección quiere reducir la huella de carbono de la empresa. ¿Alguna idea?", en: "Management wants to cut the company's carbon footprint. Any ideas?" } },
        { who: "B", target: "Notre empreinte carbone, c'est surtout l'avion. On pourrait remplacer certains déplacements par des visioconférences.", gloss: { es: "Nuestra huella de carbono viene sobre todo del avión. Podríamos sustituir algunos viajes por videoconferencias.", en: "Our carbon footprint is mostly flying. We could replace some trips with video calls." } },
        { who: "A", target: "Et pour les trajets courts, le train s'impose.", gloss: { es: "Y para los trayectos cortos, el tren es lo obvio.", en: "And for short journeys, the train is the obvious choice." } },
        { who: "B", target: "Exactement. Une fois ces mesures adoptées, on pourra mesurer les progrès.", gloss: { es: "Exacto. Una vez adoptadas estas medidas, podremos medir los avances.", en: "Exactly. Once these measures are adopted, we'll be able to measure progress." } },
      ],
      question: {
        prompt: { es: "¿Qué propone B primero?", en: "What does B propose first?" },
        options: [
          { es: "Sustituir algunos viajes por videoconferencias.", en: "Replacing some trips with video calls." },
          { es: "Comprar autos eléctricos.", en: "Buying electric cars." },
          { es: "Cerrar la oficina los viernes.", en: "Closing the office on Fridays." },
          { es: "Viajar más en avión.", en: "Flying more." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-participe-compose"], tags: ["dialogue", "environment", "work"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-experience", type: "bridge", onlyFor: "es", target: "l'expérience",
      gloss: { es: "la experiencia; también el experimento", en: "the experience; also the experiment" },
      question: {
        prompt: { es: "«Les chercheurs ont mené une expérience sur des souris» significa…", en: "'Les chercheurs ont mené une expérience sur des souris' means…" },
        options: [
          { es: "Los investigadores hicieron un experimento con ratones.", en: "The researchers carried out an experiment on mice." },
          { es: "Los investigadores tienen experiencia con ratones.", en: "The researchers have experience with mice." },
          { es: "Los investigadores vivieron una aventura con ratones.", en: "The researchers had an adventure with mice." },
        ],
        answer: 0,
      },
      note: { es: "«expérience» sirve para los dos sentidos: el contexto decide; «expérimenter» = experimentar, probar." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "science"],
    },
  ]),
};
