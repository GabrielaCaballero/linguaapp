import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u06",
  lang: "fr",
  index: 6,
  cefr: "A1.1",
  title: { target: "Où habites-tu ?", es: "¿Dónde vives?", en: "Where do you live?" },
  canDo: [
    { es: "Puedo describir mi casa y mi barrio con palabras sencillas.", en: "I can describe my home and neighbourhood in simple words." },
    { es: "Puedo preguntar dónde está algo y entender «cerca» o «lejos».", en: "I can ask where something is and understand 'near' or 'far'." },
    { es: "Sé usar «il y a», à / en / au con lugares, y las contracciones au y du.", en: "I can use il y a, à / en / au with places, and the contractions au and du." },
  ],
  icon: "🏠",
  items: build("fr", 6, "A1.1", [
    { id: "maison", type: "word", pos: "noun", target: "la maison", gender: "f", plural: "les maisons", gloss: { es: "la casa", en: "the house" }, distractors: ["le maison", "la saison", "la raison"], note: { es: "«à la maison» = en casa.", en: "'à la maison' = at home." }, tags: ["home"] },
    { id: "appartement", type: "word", pos: "noun", target: "l'appartement", gender: "m", plural: "les appartements", gloss: { es: "el departamento (el piso)", en: "the flat / apartment" }, distractors: ["la appartement", "l'apartement", "l'appartenance"], note: { es: "Doble p y termina en -ment: appartement.", en: "Double p, and it ends in -ment: appartement." }, tags: ["home"] },
    { id: "chambre", type: "word", pos: "noun", target: "la chambre", gender: "f", plural: "les chambres", gloss: { es: "el dormitorio (la recámara)", en: "the bedroom" }, distractors: ["le chambre", "la chambrée", "la cambre"], note: { es: "Para habitación en general: la pièce.", en: "Any room in general: la pièce." }, tags: ["home"] },
    { id: "cuisine", type: "word", pos: "noun", target: "la cuisine", gender: "f", plural: "les cuisines", gloss: { es: "la cocina", en: "the kitchen" }, distractors: ["le cuisine", "la cousine", "la cuisson"], note: { es: "Ojo: la cousine = la prima.", en: "Careful: la cousine = the (female) cousin." }, tags: ["home"] },
    { id: "salle-de-bains", type: "word", pos: "noun", target: "la salle de bains", gender: "f", plural: "les salles de bains", accept: [{ text: "la salle de bain" }], gloss: { es: "el baño (con ducha o tina)", en: "the bathroom" }, distractors: ["le salle de bains", "la sale de bains", "les toilettes"], note: { es: "El inodoro está a menudo aparte: les toilettes (en plural).", en: "The toilet is often separate: les toilettes (plural)." }, tags: ["home"] },
    { id: "ville", type: "word", pos: "noun", target: "la ville", gender: "f", plural: "les villes", gloss: { es: "la ciudad", en: "the town / city" }, distractors: ["le ville", "la villa", "la vie"], note: { es: "«-ille» suena «il» en ville, mille y tranquille.", en: "In ville, mille and tranquille, '-ille' sounds like 'eel'." }, tags: ["town"] },
    { id: "quartier", type: "word", pos: "noun", target: "le quartier", gender: "m", plural: "les quartiers", gloss: { es: "el barrio", en: "the neighbourhood" }, distractors: ["la quartier", "le quart", "le cahier"], tags: ["town"] },
    { id: "gare", type: "word", pos: "noun", target: "la gare", gender: "f", plural: "les gares", gloss: { es: "la estación de tren", en: "the train station" }, distractors: ["le gare", "la guerre", "la garde"], note: { es: "La estación de metro es «la station».", en: "A metro station is 'la station'." }, tags: ["town", "travel"] },
    { id: "rue", type: "word", pos: "noun", target: "la rue", gender: "f", plural: "les rues", gloss: { es: "la calle", en: "the street" }, distractors: ["le rue", "la roue", "la ruée"], note: { es: "rue (calle) ≠ roue (rueda): u y ou cambian el sentido.", en: "rue (street) ≠ roue (wheel): u and ou change the meaning." }, tags: ["town", "u-ou"] },
    { id: "boulangerie", type: "word", pos: "noun", target: "la boulangerie", gender: "f", plural: "les boulangeries", gloss: { es: "la panadería", en: "the bakery" }, distractors: ["le boulangerie", "la boucherie", "le boulanger"], tags: ["town", "shops"] },
    { id: "pres", type: "word", pos: "adv", target: "près", gloss: { es: "cerca", en: "near" }, distractors: ["loin", "prêt", "prix"], note: { es: "près de + lugar: près de la gare.", en: "près de + place: près de la gare." }, tags: ["place"] },
    { id: "loin", type: "word", pos: "adv", target: "loin", gloss: { es: "lejos", en: "far" }, distractors: ["près", "lion", "long"], tags: ["place"] },
    { id: "a-cote", type: "phrase", pos: "phrase", target: "à côté de", gloss: { es: "al lado de", en: "next to" }, distractors: ["au côté", "à côte de", "en face"], note: { es: "«en face de» = enfrente de.", en: "'en face de' = opposite." }, tags: ["place"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "il-y-a-une-boulangerie", type: "sentence", target: "Il y a une boulangerie dans ma rue.",
      gloss: { es: "Hay una panadería en mi calle.", en: "There's a bakery on my street." },
      errors: [{ text: "Il a une boulangerie dans ma rue.", feedback: { es: "«hay» es «il y a», con y.", en: "'There is' is 'il y a', with y." }, ruleId: "fr-g-il-y-a" }],
      distractors: ["est", "un", "sur"],
      tags: ["town"],
    },
    {
      id: "ou-est-la-gare", type: "phrase", pos: "phrase", target: "Où est la gare ?",
      gloss: { es: "¿Dónde está la estación de tren?", en: "Where is the train station?" },
      accept: [{ text: "Où se trouve la gare ?" }, { text: "La gare, c'est où ?" }],
      distractors: ["Ou est la gare ?", "Où est le gare ?", "Où sont la gare ?"],
      tags: ["directions", "chunk"],
    },
    {
      id: "jhabite-en-france", type: "sentence", target: "J'habite en France, mais je suis du Chili.",
      gloss: { es: "Vivo en Francia, pero soy de Chile.", en: "I live in France, but I'm from Chile." },
      errors: [
        { text: "J'habite à France, mais je suis du Chili.", feedback: { es: "Países femeninos (en -e) llevan «en»: en France.", en: "Feminine countries (ending in -e) take 'en': en France." }, ruleId: "fr-g-villes-pays" },
        { text: "J'habite en France, mais je suis de le Chili.", feedback: { es: "de + le se contrae: du Chili.", en: "de + le contracts: du Chili." }, ruleId: "fr-g-contractions" },
      ],
      distractors: ["au", "de", "à"],
      tags: ["home", "prepositions"],
    },
    {
      id: "au-centre", type: "sentence", target: "Je vais au centre-ville.",
      gloss: { es: "Voy al centro.", en: "I'm going into town." },
      accept: [{ text: "Je vais en ville." }],
      errors: [{ text: "Je vais à le centre-ville.", feedback: { es: "à + le se contrae siempre: au.", en: "à + le always contracts: au." }, ruleId: "fr-g-contractions" }],
      distractors: ["à", "le", "vas"],
      tags: ["town", "prepositions"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-il-y-a", type: "pattern", target: "il y a",
      gloss: { es: "hay", en: "there is / there are" },
      pattern: {
        rule: {
          es: "«il y a» = hay, en singular y en plural: il y a un parc, il y a deux chambres. En negativo: il n'y a pas de parc.",
          en: "'il y a' = there is / there are, singular or plural: il y a un parc, il y a deux chambres. Negative: il n'y a pas de parc.",
        },
        table: [["il y a", "une cuisine"], ["il y a", "trois chambres"], ["il n'y a pas de", "jardin"]],
      },
      question: {
        prompt: { es: "Completa: «Dans l'appartement, ___ deux chambres.»", en: "Complete: 'Dans l'appartement, ___ deux chambres.'" },
        options: ["il y a", "il a", "ils sont", "c'est"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-il-y-a"], tags: ["grammar"],
    },
    {
      id: "pat-villes-pays", type: "pattern", target: "à Paris · en France · au Canada · aux États-Unis",
      gloss: { es: "preposiciones con ciudades y países", en: "prepositions with cities and countries" },
      pattern: {
        rule: {
          es: "Ciudad → à (à Paris). País femenino (casi todos en -e) → en (en France, en Espagne). País masculino → au (au Canada, au Mexique). Plural → aux (aux États-Unis).",
          en: "City → à (à Paris). Feminine country (most end in -e) → en (en France, en Espagne). Masculine country → au (au Canada, au Mexique). Plural → aux (aux États-Unis).",
        },
        table: [["ville", "à Madrid"], ["pays fém.", "en Italie"], ["pays masc.", "au Pérou"], ["pluriel", "aux Pays-Bas"]],
      },
      question: {
        prompt: { es: "Completa: «Mon frère habite ___ Mexique.»", en: "Complete: 'Mon frère habite ___ Mexique.'" },
        options: ["au", "en", "à", "aux"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-villes-pays"], tags: ["grammar", "prepositions"],
    },
    {
      id: "pat-contractions", type: "pattern", target: "à + le = au · de + le = du",
      gloss: { es: "contracciones au, aux, du, des", en: "contractions au, aux, du, des" },
      pattern: {
        rule: {
          es: "à y de se unen con le y les: à + le = au, à + les = aux, de + le = du, de + les = des. Con la y l' no cambian: à la gare, de l'hôtel.",
          en: "à and de merge with le and les: à + le = au, à + les = aux, de + le = du, de + les = des. With la and l' nothing changes: à la gare, de l'hôtel.",
        },
        table: [["", "à", "de"], ["le", "au", "du"], ["la", "à la", "de la"], ["l'", "à l'", "de l'"], ["les", "aux", "des"]],
      },
      question: {
        prompt: { es: "Completa: «Le cinéma est à côté ___ parc.»", en: "Complete: 'Le cinéma est à côté ___ parc.'" },
        options: ["du", "de le", "de la", "au"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-contractions"], tags: ["grammar", "prepositions"],
    },
    {
      id: "tab-au-du", type: "paradigm", target: "au, à la, aux · du, de la, des", spoken: "au, du",
      gloss: { es: "à y de con el artículo", en: "à and de with the article" },
      grammar: ["fr-g-contractions"],
      paradigm: {
        caption: { es: "Escribe la forma correcta", en: "Write the correct form" },
        cells: [
          { label: "à + le parc", answer: "au parc", ruleId: "fr-g-contractions" },
          { label: "à + la gare", answer: "à la gare", ruleId: "fr-g-contractions" },
          { label: "à + les magasins", answer: "aux magasins", ruleId: "fr-g-contractions" },
          { label: "de + le quartier", answer: "du quartier", ruleId: "fr-g-contractions" },
          { label: "de + l'hôtel", answer: "de l'hôtel", ruleId: "fr-g-contractions" },
          { label: "de + les enfants", answer: "des enfants", ruleId: "fr-g-contractions" },
        ],
      },
      tags: ["grammar", "prepositions", "table"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-appartement", type: "listening",
      target: "J'habite dans un petit appartement au centre-ville. Il y a une cuisine, une chambre et une salle de bains. La gare est tout près.",
      gloss: {
        es: "Vivo en un departamento pequeño en el centro. Hay una cocina, un dormitorio y un baño. La estación está muy cerca.",
        en: "I live in a small flat in the town centre. There's a kitchen, a bedroom and a bathroom. The station is very close.",
      },
      question: {
        prompt: { es: "¿Cuántos dormitorios tiene el departamento?", en: "How many bedrooms does the flat have?" },
        options: [
          { es: "Uno", en: "One" },
          { es: "Dos", en: "Two" },
          { es: "Tres", en: "Three" },
          { es: "Ninguno", en: "None" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "home"],
    },
    {
      id: "dlg-gare", type: "dialogue", target: "C'est tout droit.", register: "formal",
      gloss: { es: "Es todo derecho.", en: "It's straight ahead." },
      turns: [
        { who: "A", target: "Excusez-moi, madame, où est la gare ?", gloss: { es: "Disculpe, señora, ¿dónde está la estación?", en: "Excuse me, madam, where is the station?" } },
        { who: "B", target: "C'est tout droit, à cinq minutes, à côté du musée.", gloss: { es: "Es todo derecho, a cinco minutos, al lado del museo.", en: "It's straight ahead, five minutes away, next to the museum." } },
        { who: "A", target: "Merci beaucoup !", gloss: { es: "¡Muchas gracias!", en: "Thank you very much!" } },
        { who: "B", target: "Je vous en prie.", gloss: { es: "No hay de qué.", en: "You're welcome." } },
      ],
      question: {
        prompt: { es: "¿Dónde está la estación?", en: "Where is the station?" },
        options: [
          { es: "Al lado del museo, todo derecho", en: "Next to the museum, straight ahead" },
          { es: "Enfrente del museo", en: "Opposite the museum" },
          { es: "Lejos, hay que tomar el autobús", en: "Far away, you need the bus" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "directions"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-plan", type: "bridge", onlyFor: "es", target: "le plan",
      gloss: { es: "el plano (de una ciudad)", en: "the (street) map" },
      question: {
        prompt: { es: "En la oficina de turismo pides «un plan de la ville». Te dan…", en: "At the tourist office you ask for 'un plan de la ville'. You get…" },
        options: [
          { es: "un plano de la ciudad", en: "a street map" },
          { es: "un plan de actividades", en: "an activity plan" },
          { es: "un folleto de hoteles", en: "a hotel brochure" },
        ],
        answer: 0,
      },
      note: { es: "le plan = el plano de una ciudad o del metro; la carte = el mapa de un país o una región." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "town"],
    },
    {
      id: "br-nasales", type: "bridge", onlyFor: "es", target: "le pain",
      gloss: { es: "el pan", en: "the bread" },
      distractors: ["le pan", "le paine", "la pain"],
      note: { es: "Vocales nasales: la n no se pronuncia, la vocal sale por la nariz: pain, bon, blanc." },
      exercises: ["guess", "recall"], tags: ["bridge", "nasal"],
    },
  ]),
};
