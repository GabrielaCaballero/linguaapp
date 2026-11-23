import type { GrammarPoint } from "../schema";

// Grammar points for French units u09–u16 (content v2.1). Same shape as grammar.ts.
export const grammar2: GrammarPoint[] = [
  // ── u09 ───────────────────────────────────────────────────
  {
    id: "fr-g-partitif", lang: "fr", cefr: "A1.2",
    title: { es: "El partitivo: du, de la, de l', des", en: "The partitive: du, de la, de l', des" },
    short: {
      es: "Cantidad indefinida = de + artículo: du pain, de la viande, de l'eau, des pommes.",
      en: "Unspecified amount = de + article: du pain, de la viande, de l'eau, des pommes.",
    },
    rule: {
      es: "Cuando hablas de una parte o una cantidad no precisa de algo, el francés usa el partitivo; el español no pone nada (como pan, bebo agua). Con aimer, adorer, détester se usa el artículo definido, porque hablas de la cosa en general: j'aime le pain.",
      en: "For part of something or an unspecified amount French uses the partitive, where English says 'some' or nothing (I eat bread). With aimer, adorer, détester use the definite article, since you mean the thing in general: j'aime le pain.",
    },
    steps: [
      { es: "¿Una cantidad no precisa? → partitivo.", en: "An unspecified amount? → partitive." },
      { es: "Elige según el sustantivo: du (m), de la (f), de l' (vocal), des (pl.).", en: "Choose by the noun: du (m), de la (f), de l' (vowel), des (pl.)." },
      { es: "¿Negación o cantidad (beaucoup, un kilo)? → solo de / d'.", en: "Negative or quantity (beaucoup, un kilo)? → just de / d'." },
    ],
    table: {
      head: ["", "partitif", "négatif"],
      rows: [["masc.", "du pain", "pas de pain"], ["fém.", "de la soupe", "pas de soupe"], ["voyelle", "de l'eau", "pas d'eau"], ["pluriel", "des œufs", "pas d'œufs"]],
    },
    examples: [
      { target: "Je voudrais du fromage et de la salade.", gloss: { es: "Quisiera queso y lechuga.", en: "I'd like some cheese and some lettuce." } },
      { target: "Tu bois de l'eau ?", gloss: { es: "¿Tomas agua?", en: "Do you drink water?" } },
    ],
    pitfalls: {
      es: "No lo omitas como en español: «je mange pain» es incorrecto. Y tras «aimer» no va partitivo: j'aime le chocolat (no «du chocolat»).",
      en: "You can't leave it out: 'je mange pain' is wrong. And after aimer use le/la/les: j'aime le chocolat.",
    },
  },
  {
    id: "fr-g-quantites", lang: "fr", cefr: "A1.2",
    title: { es: "Cantidades + de", en: "Quantities + de" },
    short: {
      es: "Tras una cantidad va solo de / d': un kilo de pommes, beaucoup d'amis, un peu de sel.",
      en: "After a quantity, just de / d': un kilo de pommes, beaucoup d'amis, un peu de sel.",
    },
    rule: {
      es: "Las palabras de cantidad (beaucoup, peu, trop, assez, un kilo, une bouteille, un verre, une tranche) van seguidas de «de» sin artículo. Delante de vocal, d'.",
      en: "Quantity words (beaucoup, peu, trop, assez, un kilo, une bouteille, un verre, une tranche) are followed by 'de' without an article. Before a vowel, d'.",
    },
    steps: [
      { es: "¿Hay una palabra de cantidad? → de, sin artículo.", en: "Is there a quantity word? → de, no article." },
      { es: "¿Empieza por vocal? → d': un verre d'eau.", en: "Starts with a vowel? → d': un verre d'eau." },
    ],
    table: {
      head: ["quantité", "+ de"],
      rows: [["beaucoup", "de travail"], ["un peu", "de lait"], ["trop", "de sucre"], ["assez", "d'argent"], ["un kilo", "de pommes"], ["une tranche", "de jambon"]],
    },
    examples: [
      { target: "Il y a beaucoup de monde.", gloss: { es: "Hay mucha gente.", en: "There are lots of people." } },
      { target: "Une bouteille d'eau, s'il vous plaît.", gloss: { es: "Una botella de agua, por favor.", en: "A bottle of water, please." } },
    ],
    pitfalls: {
      es: "«beaucoup» no concuerda como «mucho/a/s»: beaucoup de fromage, beaucoup de pommes. Y nunca «beaucoup des».",
      en: "Never 'beaucoup des' or 'un kilo des': always just de.",
    },
  },
  {
    id: "fr-g-re", lang: "fr", cefr: "A1.2",
    title: { es: "Verbos en -re: vendre, attendre", en: "-re verbs: vendre, attendre" },
    short: {
      es: "je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent.",
      en: "je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent.",
    },
    rule: {
      es: "Los verbos regulares en -re (vendre, attendre, entendre, répondre, perdre) quitan -re y añaden -s, -s, nada, -ons, -ez, -ent. En singular la d final no suena; en plural sí: ils vendent ≈ «vand».",
      en: "Regular -re verbs (vendre, attendre, entendre, répondre, perdre) drop -re and add -s, -s, nothing, -ons, -ez, -ent. In the singular the final d is silent; in the plural it's heard: ils vendent.",
    },
    steps: [
      { es: "Quita -re: attendre → attend-.", en: "Drop -re: attendre → attend-." },
      { es: "Añade -s, -s, — , -ons, -ez, -ent.", en: "Add -s, -s, — , -ons, -ez, -ent." },
      { es: "Participio en -u: attendu, vendu, perdu.", en: "Past participle in -u: attendu, vendu, perdu." },
    ],
    table: {
      head: ["", "vendre", "attendre"],
      rows: [["je / j'", "vends", "attends"], ["tu", "vends", "attends"], ["il / elle", "vend", "attend"], ["nous", "vendons", "attendons"], ["vous", "vendez", "attendez"], ["ils / elles", "vendent", "attendent"]],
    },
    examples: [
      { target: "J'attends le bus.", gloss: { es: "Espero el autobús.", en: "I'm waiting for the bus." } },
      { target: "Vous répondez au téléphone ?", gloss: { es: "¿Contesta el teléfono?", en: "Are you answering the phone?" } },
    ],
    pitfalls: {
      es: "prendre no es regular: je prends, nous prenons, ils prennent. Y attendre no lleva preposición.",
      en: "prendre isn't regular: je prends, nous prenons, ils prennent. And attendre has no 'for': attendre le bus.",
    },
  },
  // ── u10 ───────────────────────────────────────────────────
  {
    id: "fr-g-pc-avoir", lang: "fr", cefr: "A2",
    title: { es: "Passé composé con «avoir»", en: "Passé composé with avoir" },
    short: {
      es: "avoir (presente) + participio: j'ai mangé, tu as fini, il a vendu. Negativo: je n'ai pas mangé.",
      en: "avoir (present) + participle: j'ai mangé, tu as fini, il a vendu. Negative: je n'ai pas mangé.",
    },
    rule: {
      es: "Es el pasado de las acciones terminadas y traduce tanto «comí» como «he comido». La mayoría de los verbos van con avoir. La negación rodea al auxiliar: je n'ai pas vu.",
      en: "It's the past tense for completed actions, covering both 'I ate' and 'I have eaten'. Most verbs take avoir. Negation goes around the auxiliary: je n'ai pas vu.",
    },
    steps: [
      { es: "Conjuga avoir en presente: j'ai, tu as, il a…", en: "Conjugate avoir in the present: j'ai, tu as, il a…" },
      { es: "Forma el participio: -er → -é, -ir → -i, -re → -u (o el irregular).", en: "Form the participle: -er → -é, -ir → -i, -re → -u (or the irregular one)." },
      { es: "En negativo: ne + auxiliar + pas + participio.", en: "Negative: ne + auxiliary + pas + participle." },
    ],
    table: {
      head: ["", "manger", "finir"],
      rows: [["j'", "ai mangé", "ai fini"], ["tu", "as mangé", "as fini"], ["il / elle", "a mangé", "a fini"], ["nous", "avons mangé", "avons fini"], ["vous", "avez mangé", "avez fini"], ["ils / elles", "ont mangé", "ont fini"]],
    },
    examples: [
      { target: "Nous avons mangé au restaurant.", gloss: { es: "Comimos en el restaurante.", en: "We ate at the restaurant." } },
      { target: "Je n'ai rien fait de spécial.", gloss: { es: "No hice nada especial.", en: "I didn't do anything special." } },
    ],
    pitfalls: {
      es: "mangé, manger y mangez suenan igual: tras avoir siempre el participio en -é («j'ai manger» es incorrecto).",
      en: "mangé, manger and mangez sound the same: after avoir it's always the -é participle.",
    },
  },
  {
    id: "fr-g-participes", lang: "fr", cefr: "A2",
    title: { es: "Participios irregulares", en: "Irregular past participles" },
    short: {
      es: "faire → fait, prendre → pris, voir → vu, boire → bu, avoir → eu, être → été, lire → lu.",
      en: "faire → fait, prendre → pris, voir → vu, boire → bu, avoir → eu, être → été, lire → lu.",
    },
    rule: {
      es: "Los verbos más usados tienen participios irregulares que hay que memorizar. Muchos terminan en -u (vu, bu, lu, pu, voulu, venu), otros en -is (pris, mis) o -it (fait, dit, écrit).",
      en: "The most common verbs have irregular participles you need to learn. Many end in -u (vu, bu, lu, pu, voulu, venu), others in -is (pris, mis) or -it (fait, dit, écrit).",
    },
    steps: [
      { es: "¿El verbo es muy frecuente? Probablemente es irregular.", en: "Is it a very common verb? It's probably irregular." },
      { es: "Agrúpalos por terminación: -u, -is, -it.", en: "Group them by ending: -u, -is, -it." },
    ],
    table: {
      head: ["-u", "-is / -it", "autres"],
      rows: [["voir → vu", "prendre → pris", "être → été"], ["boire → bu", "mettre → mis", "avoir → eu"], ["lire → lu", "faire → fait", "naître → né"], ["pouvoir → pu", "dire → dit", "mourir → mort"]],
    },
    examples: [
      { target: "J'ai pris le métro.", gloss: { es: "Tomé el metro.", en: "I took the metro." } },
      { target: "Tu as vu ce film ?", gloss: { es: "¿Viste esta película?", en: "Have you seen this film?" } },
    ],
    pitfalls: {
      es: "No regularices: «j'ai prendu» o «j'ai fairé» no existen. «été» es el participio de être y también «el verano».",
      en: "Don't regularise: 'j'ai prendu' doesn't exist. 'été' is the participle of être and also means 'summer'.",
    },
  },
  {
    id: "fr-g-futur-proche", lang: "fr", cefr: "A2",
    title: { es: "Futuro próximo: aller + infinitivo", en: "Near future: aller + infinitive" },
    short: {
      es: "aller (presente) + infinitivo, sin «à»: je vais partir = voy a salir.",
      en: "aller (present) + infinitive, no 'à': je vais partir = I'm going to leave.",
    },
    rule: {
      es: "Es el futuro más usado al hablar, para planes e intenciones. Se forma como «ir a + infinitivo», pero sin preposición. La negación rodea a aller: je ne vais pas partir.",
      en: "It's the most common future in speech, for plans and intentions. Like 'going to', but with no preposition. Negation goes around aller: je ne vais pas partir.",
    },
    steps: [
      { es: "Conjuga aller: je vais, tu vas, il va, nous allons, vous allez, ils vont.", en: "Conjugate aller: je vais, tu vas, il va, nous allons, vous allez, ils vont." },
      { es: "Añade el infinitivo directamente.", en: "Add the infinitive directly." },
      { es: "Los pronombres van delante del infinitivo: je vais me reposer.", en: "Pronouns go before the infinitive: je vais me reposer." },
    ],
    table: {
      head: ["", "aller", "+ infinitif"],
      rows: [["je", "vais", "partir"], ["tu", "vas", "manger"], ["il / elle", "va", "pleuvoir"], ["nous", "allons", "voyager"], ["vous", "allez", "voir"], ["ils / elles", "vont", "venir"]],
    },
    examples: [
      { target: "Ce week-end, je vais me reposer.", gloss: { es: "Este fin de semana voy a descansar.", en: "This weekend I'm going to rest." } },
      { target: "Il va pleuvoir.", gloss: { es: "Va a llover.", en: "It's going to rain." } },
    ],
    pitfalls: {
      es: "Nada de «à»: «je vais à partir» es incorrecto. «Je vais à Paris» sí lleva à porque Paris es un lugar, no un verbo.",
      en: "No 'à' before the infinitive: 'je vais à partir' is wrong. 'Je vais à Paris' is fine: Paris is a place, not a verb.",
    },
  },
  // ── u11 ───────────────────────────────────────────────────
  {
    id: "fr-g-imparfait", lang: "fr", cefr: "A2",
    title: { es: "El imparfait", en: "The imparfait" },
    short: {
      es: "Raíz de «nous» + -ais, -ais, -ait, -ions, -iez, -aient. Única excepción: être → j'étais.",
      en: "'nous' stem + -ais, -ais, -ait, -ions, -iez, -aient. Only exception: être → j'étais.",
    },
    rule: {
      es: "Corresponde al copretérito español (hablaba, tenía, era). Se forma con la raíz de «nous» en presente: nous finissons → je finissais, nous faisons → je faisais. Las formas -ais, -ait y -aient suenan igual.",
      en: "It's the 'was doing / used to do' past. Take the 'nous' present stem: nous finissons → je finissais, nous faisons → je faisais. The -ais, -ait and -aient forms all sound the same.",
    },
    steps: [
      { es: "Conjuga «nous» en presente y quita -ons: nous parlons → parl-.", en: "Take the 'nous' present and drop -ons: nous parlons → parl-." },
      { es: "Añade -ais, -ais, -ait, -ions, -iez, -aient.", en: "Add -ais, -ais, -ait, -ions, -iez, -aient." },
      { es: "être es la excepción: ét- (j'étais, nous étions).", en: "être is the exception: ét- (j'étais, nous étions)." },
    ],
    table: {
      head: ["", "parler", "être"],
      rows: [["je / j'", "parlais", "étais"], ["tu", "parlais", "étais"], ["il / elle", "parlait", "était"], ["nous", "parlions", "étions"], ["vous", "parliez", "étiez"], ["ils / elles", "parlaient", "étaient"]],
    },
    examples: [
      { target: "Quand j'étais petit, j'habitais à la campagne.", gloss: { es: "De niño vivía en el campo.", en: "When I was little, I lived in the countryside." } },
      { target: "Ma grand-mère faisait des gâteaux.", gloss: { es: "Mi abuela hacía pasteles.", en: "My grandmother used to make cakes." } },
    ],
    pitfalls: {
      es: "Con los verbos en -ger y -cer se mantiene el sonido: je mangeais, je commençais.",
      en: "-ger and -cer verbs keep their soft sound: je mangeais, je commençais.",
    },
  },
  {
    id: "fr-g-pc-imparfait", lang: "fr", cefr: "A2",
    title: { es: "Imparfait o passé composé", en: "Imparfait or passé composé" },
    short: {
      es: "imparfait = descripción, costumbre, acción en curso · passé composé = hecho puntual y terminado.",
      en: "imparfait = description, habit, action in progress · passé composé = single completed event.",
    },
    rule: {
      es: "La elección es casi la misma que entre «leía» y «leí» en español. El imparfait pinta el fondo (el tiempo, la hora, cómo era algo, lo que pasaba); el passé composé cuenta lo que ocurrió y hace avanzar la historia.",
      en: "The imparfait paints the background (weather, time, what things were like, what was going on, habits); the passé composé tells what happened and moves the story forward.",
    },
    steps: [
      { es: "¿Describe algo o una costumbre (siempre, todos los días)? → imparfait.", en: "Describing, or a habit (always, every day)? → imparfait." },
      { es: "¿Una acción en curso interrumpida? → imparfait (je dormais quand…).", en: "An action in progress that got interrupted? → imparfait (je dormais quand…)." },
      { es: "¿Un hecho concreto, con principio y fin? → passé composé.", en: "A specific event with a beginning and end? → passé composé." },
    ],
    table: {
      head: ["imparfait", "passé composé"],
      rows: [["Il faisait beau.", "Nous sommes sortis."], ["Je lisais…", "…quand tu as appelé."], ["Le samedi, on jouait.", "Un samedi, on a gagné."]],
    },
    examples: [
      { target: "Il pleuvait quand je suis sorti.", gloss: { es: "Estaba lloviendo cuando salí.", en: "It was raining when I went out." } },
      { target: "C'était super !", gloss: { es: "¡Estuvo genial!", en: "It was great!" } },
    ],
    pitfalls: {
      es: "Para valorar algo que ya pasó, el francés prefiere «c'était» aunque en español digas «fue/estuvo»: c'était génial.",
      en: "English 'was' can be either: 'it was raining' (imparfait) vs 'it rained all day' (passé composé). Ask: background or event?",
    },
  },
  // ── u12 ───────────────────────────────────────────────────
  {
    id: "fr-g-pc-etre", lang: "fr", cefr: "A2",
    title: { es: "Passé composé con «être» y concordancia", en: "Passé composé with être and agreement" },
    short: {
      es: "Verbos de movimiento/cambio y pronominales: je suis allé/e. El participio concuerda con el sujeto.",
      en: "Movement/change verbs and reflexives: je suis allé/e. The participle agrees with the subject.",
    },
    rule: {
      es: "Unos quince verbos van con être: aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, passer (y sus derivados como revenir, devenir). También todos los pronominales. Con être el participio concuerda: elle est venue, ils sont partis, elles sont parties.",
      en: "About fifteen verbs take être: aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, passer (and derivatives like revenir, devenir), plus all reflexive verbs. With être the participle agrees: elle est venue, ils sont partis, elles sont parties.",
    },
    steps: [
      { es: "¿Es uno de los verbos de la lista o un pronominal? → être.", en: "Is it on the list or reflexive? → être." },
      { es: "Conjuga être en presente.", en: "Conjugate être in the present." },
      { es: "Concuerda el participio: + e (femenino), + s (plural).", en: "Make the participle agree: + e (feminine), + s (plural)." },
    ],
    table: {
      head: ["", "aller"],
      rows: [["je", "suis allé(e)"], ["tu", "es allé(e)"], ["il / elle", "est allé / allée"], ["nous", "sommes allé(e)s"], ["vous", "êtes allé(e)(s)"], ["ils / elles", "sont allés / allées"]],
    },
    examples: [
      { target: "Elle est arrivée à minuit.", gloss: { es: "Llegó a medianoche.", en: "She arrived at midnight." } },
      { target: "Nous nous sommes levés tôt.", gloss: { es: "Nos levantamos temprano.", en: "We got up early." } },
    ],
    pitfalls: {
      es: "En español todo va con «haber»: no digas «j'ai allé». Y la concordancia no se oye casi nunca, pero se escribe: elle est partie.",
      en: "English uses 'have' for everything: don't say 'j'ai allé'. Agreement is usually silent but must be written: elle est partie.",
    },
  },
  {
    id: "fr-g-comparatif", lang: "fr", cefr: "A2",
    title: { es: "Comparativos: plus, moins, aussi… que", en: "Comparatives: plus, moins, aussi… que" },
    short: {
      es: "plus… que, moins… que, aussi… que. bon → meilleur, bien → mieux.",
      en: "plus… que, moins… que, aussi… que. bon → meilleur, bien → mieux.",
    },
    rule: {
      es: "Para comparar adjetivos y adverbios se pone plus, moins o aussi delante y que detrás. Con sustantivos: plus de / moins de / autant de + sustantivo + que. Dos irregulares: meilleur (mejor, adjetivo) y mieux (mejor, adverbio).",
      en: "To compare adjectives and adverbs put plus, moins or aussi before and que after. With nouns: plus de / moins de / autant de + noun + que. Two irregulars: meilleur (better, adjective) and mieux (better, adverb).",
    },
    steps: [
      { es: "¿Más, menos o igual? → plus, moins, aussi.", en: "More, less or equal? → plus, moins, aussi." },
      { es: "Añade que (qu' delante de vocal).", en: "Add que (qu' before a vowel)." },
      { es: "¿«mejor»? Si acompaña a un sustantivo → meilleur; si a un verbo → mieux.", en: "'better'? With a noun → meilleur; with a verb → mieux." },
    ],
    table: {
      head: ["", "adjectif", "nom"],
      rows: [["+", "plus grand que", "plus de temps que"], ["−", "moins grand que", "moins de temps que"], ["=", "aussi grand que", "autant de temps que"], ["bon / bien", "meilleur / mieux", "—"]],
    },
    examples: [
      { target: "Le train est plus rapide que le bus.", gloss: { es: "El tren es más rápido que el autobús.", en: "The train is faster than the bus." } },
      { target: "Elle chante mieux que moi.", gloss: { es: "Canta mejor que yo.", en: "She sings better than me." } },
    ],
    pitfalls: {
      es: "«plus bon» no existe: meilleur. Y tras que va el pronombre tónico: plus grand que moi (no «que je»).",
      en: "Never 'plus bon': meilleur. After que use stressed pronouns: plus grand que moi.",
    },
  },
  // ── u13 ───────────────────────────────────────────────────
  {
    id: "fr-g-avoir-mal", lang: "fr", cefr: "B1",
    title: { es: "Decir qué te duele: avoir mal à", en: "Saying what hurts: avoir mal à" },
    short: {
      es: "avoir mal + à + artículo + parte del cuerpo: j'ai mal à la tête, au dos, aux pieds.",
      en: "avoir mal + à + article + body part: j'ai mal à la tête, au dos, aux pieds.",
    },
    rule: {
      es: "El francés no usa «doler» como el español: dice «tengo mal a». Con partes del cuerpo se usa el artículo definido, no el posesivo, y à se contrae con le y les.",
      en: "French says 'I have pain at' rather than 'my X hurts'. Body parts take the definite article, not a possessive, and à contracts with le and les.",
    },
    steps: [
      { es: "Empieza con avoir mal: j'ai mal, tu as mal…", en: "Start with avoir mal: j'ai mal, tu as mal…" },
      { es: "Pon à + artículo de la parte del cuerpo.", en: "Add à + the body part's article." },
      { es: "Contrae: à + le = au, à + les = aux.", en: "Contract: à + le = au, à + les = aux." },
    ],
    table: {
      head: ["", "j'ai mal…"],
      rows: [["la tête", "à la tête"], ["le dos", "au dos"], ["l'oreille", "à l'oreille"], ["les dents", "aux dents"]],
    },
    examples: [
      { target: "J'ai mal à la tête depuis hier.", gloss: { es: "Me duele la cabeza desde ayer.", en: "I've had a headache since yesterday." } },
      { target: "Elle a mal au ventre.", gloss: { es: "Le duele el estómago.", en: "She has a stomach ache." } },
    ],
    pitfalls: {
      es: "No digas «ma tête fait mal» para hablar de ti en general: lo natural es j'ai mal à la tête.",
      en: "Don't use the possessive: j'ai mal à la tête, not 'à ma tête'.",
    },
  },
  {
    id: "fr-g-imperatif", lang: "fr", cefr: "B1",
    title: { es: "El imperativo", en: "The imperative" },
    short: {
      es: "Formas de tu / nous / vous sin pronombre. -er pierde la -s con tu: parle ! Pronombre detrás: lève-toi.",
      en: "tu / nous / vous forms without the pronoun. -er drops the -s with tu: parle ! Pronoun after: lève-toi.",
    },
    rule: {
      es: "El imperativo usa las formas del presente de tu, nous y vous sin sujeto. Con tu, los verbos en -er (y aller: va !) pierden la -s. En afirmativo los pronombres van detrás con guion (dis-moi, asseyez-vous); en negativo, delante (ne me dis pas).",
      en: "The imperative uses the tu, nous and vous present forms without a subject. With tu, -er verbs (and aller: va !) drop the -s. In the affirmative, pronouns go after with a hyphen (dis-moi, asseyez-vous); in the negative, before (ne me dis pas).",
    },
    steps: [
      { es: "Elige la persona: tu, nous (vamos a…) o vous.", en: "Pick the person: tu, nous (let's…) or vous." },
      { es: "Quita el pronombre sujeto; con tu y -er, quita también la -s.", en: "Drop the subject pronoun; with tu and -er verbs, drop the -s too." },
      { es: "Si hay pronombre: detrás con guion (afirmativo), delante (negativo).", en: "With a pronoun: after with a hyphen (affirmative), before (negative)." },
    ],
    table: {
      head: ["", "parler", "prendre", "se lever"],
      rows: [["tu", "parle", "prends", "lève-toi"], ["nous", "parlons", "prenons", "levons-nous"], ["vous", "parlez", "prenez", "levez-vous"]],
    },
    examples: [
      { target: "Prenez deux comprimés par jour.", gloss: { es: "Tome dos pastillas al día.", en: "Take two tablets a day." } },
      { target: "Ne mange pas trop de sucre !", gloss: { es: "¡No comas demasiado azúcar!", en: "Don't eat too much sugar!" } },
    ],
    pitfalls: {
      es: "Irregulares: être → sois, soyez; avoir → aie, ayez. Y «me» se vuelve «moi» detrás del verbo: dis-moi.",
      en: "Irregular: être → sois, soyez; avoir → aie, ayez. And 'me' becomes 'moi' after the verb: dis-moi.",
    },
  },
  {
    id: "fr-g-il-faut", lang: "fr", cefr: "B1",
    title: { es: "Obligación y consejo: il faut, devoir", en: "Obligation and advice: il faut, devoir" },
    short: {
      es: "il faut + infinitivo (hay que) · devoir + infinitivo (tener que) · tu devrais (deberías).",
      en: "il faut + infinitive (one must) · devoir + infinitive (have to) · tu devrais (you should).",
    },
    rule: {
      es: "«il faut» es impersonal y no cambia de persona: il faut partir. Para una persona concreta se usa devoir (je dois, tu dois, il doit, nous devons, vous devez, ils doivent) o il faut que + subjuntivo. El condicional de devoir suaviza el consejo.",
      en: "'il faut' is impersonal and never changes: il faut partir. For a specific person use devoir (je dois, tu dois, il doit, nous devons, vous devez, ils doivent) or il faut que + subjunctive. The conditional of devoir softens advice.",
    },
    steps: [
      { es: "¿Regla general? → il faut + infinitivo.", en: "A general rule? → il faut + infinitive." },
      { es: "¿Obligación de alguien? → devoir conjugado + infinitivo.", en: "Someone's obligation? → conjugated devoir + infinitive." },
      { es: "¿Consejo amable? → je devrais, tu devrais, vous devriez.", en: "Friendly advice? → je devrais, tu devrais, vous devriez." },
    ],
    table: {
      head: ["", "devoir", "conditionnel"],
      rows: [["je", "dois", "devrais"], ["tu", "dois", "devrais"], ["il / elle", "doit", "devrait"], ["nous", "devons", "devrions"], ["vous", "devez", "devriez"], ["ils / elles", "doivent", "devraient"]],
    },
    examples: [
      { target: "Il faut boire beaucoup d'eau.", gloss: { es: "Hay que tomar mucha agua.", en: "You need to drink plenty of water." } },
      { target: "Tu devrais aller chez le médecin.", gloss: { es: "Deberías ir al médico.", en: "You should go to the doctor's." } },
    ],
    pitfalls: {
      es: "«il faut» no se conjuga: nunca «je faut». Y en negativo cambia el sentido: il ne faut pas fumer = no se debe fumar.",
      en: "'il faut' never changes person. And the negative means prohibition: il ne faut pas fumer = you mustn't smoke.",
    },
  },
  // ── u14 ───────────────────────────────────────────────────
  {
    id: "fr-g-futur", lang: "fr", cefr: "B1",
    title: { es: "El futur simple", en: "The futur simple" },
    short: {
      es: "Infinitivo + -ai, -as, -a, -ons, -ez, -ont. Irregulares: serai, aurai, irai, ferai, viendrai.",
      en: "Infinitive + -ai, -as, -a, -ons, -ez, -ont. Irregulars: serai, aurai, irai, ferai, viendrai.",
    },
    rule: {
      es: "Se forma como el futuro español: infinitivo + terminación (las de avoir en presente). Los verbos en -re pierden la e final. Las raíces irregulares son pocas pero frecuentes y siempre terminan en -r.",
      en: "Infinitive + ending (the present forms of avoir). -re verbs drop the final e. Irregular stems are few but common, and always end in -r.",
    },
    steps: [
      { es: "Toma el infinitivo (prendre → prendr-).", en: "Take the infinitive (prendre → prendr-)." },
      { es: "¿Es irregular? Usa su raíz: ser-, aur-, ir-, fer-, viendr-, pourr-, verr-, voudr-, devr-.", en: "Irregular? Use its stem: ser-, aur-, ir-, fer-, viendr-, pourr-, verr-, voudr-, devr-." },
      { es: "Añade -ai, -as, -a, -ons, -ez, -ont.", en: "Add -ai, -as, -a, -ons, -ez, -ont." },
    ],
    table: {
      head: ["", "parler", "être", "aller"],
      rows: [["je / j'", "parlerai", "serai", "irai"], ["tu", "parleras", "seras", "iras"], ["il / elle", "parlera", "sera", "ira"], ["nous", "parlerons", "serons", "irons"], ["vous", "parlerez", "serez", "irez"], ["ils / elles", "parleront", "seront", "iront"]],
    },
    examples: [
      { target: "Je serai disponible en septembre.", gloss: { es: "Estaré disponible en septiembre.", en: "I'll be available in September." } },
      { target: "On verra.", gloss: { es: "Ya veremos.", en: "We'll see." } },
    ],
    pitfalls: {
      es: "je parlerai (futuro) y je parlerais (condicional) suenan casi igual: fíjate en la -s.",
      en: "je parlerai (future) and je parlerais (conditional) sound almost the same: watch the -s.",
    },
  },
  {
    id: "fr-g-cod", lang: "fr", cefr: "B1",
    title: { es: "Pronombres de objeto directo: le, la, les", en: "Direct object pronouns: le, la, les" },
    short: {
      es: "le, la, l', les van delante del verbo conjugado: je la vois, je ne les connais pas, je l'ai vu.",
      en: "le, la, l', les go before the conjugated verb: je la vois, je ne les connais pas, je l'ai vu.",
    },
    rule: {
      es: "Reemplazan a un objeto directo (sin preposición). Van delante del verbo conjugado, o delante del infinitivo si lo hay. También me, te, nous, vous funcionan así. En el passé composé, el participio concuerda con el pronombre: je les ai vues.",
      en: "They replace a direct object (no preposition). They go before the conjugated verb, or before the infinitive if there is one. me, te, nous, vous work the same way. In the passé composé the participle agrees with the pronoun: je les ai vues.",
    },
    steps: [
      { es: "¿El verbo lleva objeto sin preposición? → COD.", en: "Does the verb take an object with no preposition? → direct object." },
      { es: "Elige: le (m), la (f), l' (vocal), les (pl.).", en: "Choose: le (m), la (f), l' (vowel), les (pl.)." },
      { es: "Colócalo delante del verbo (o del auxiliar, o del infinitivo).", en: "Put it before the verb (or the auxiliary, or the infinitive)." },
    ],
    table: {
      head: ["", "le / la / les"],
      rows: [["présent", "Je la vois."], ["négatif", "Je ne la vois pas."], ["passé composé", "Je l'ai vue."], ["infinitif", "Je vais la voir."], ["impératif", "Regarde-la !"]],
    },
    examples: [
      { target: "Ma collègue ? Je la vois tous les jours.", gloss: { es: "¿Mi compañera? La veo todos los días.", en: "My colleague? I see her every day." } },
      { target: "Le rapport ? Je l'ai envoyé hier.", gloss: { es: "¿El informe? Lo mandé ayer.", en: "The report? I sent it yesterday." } },
    ],
    pitfalls: {
      es: "El pronombre nunca va pegado al final como en «verla»: je vais la voir. Y verbos como regarder, chercher, attendre llevan COD en francés: je l'attends.",
      en: "The pronoun goes before the verb, not after: je la vois (not 'je vois la'). Verbs like chercher, attendre, écouter take a direct object: je l'attends.",
    },
  },
  // ── u15 ───────────────────────────────────────────────────
  {
    id: "fr-g-subjonctif", lang: "fr", cefr: "B1",
    title: { es: "El subjuntivo presente", en: "The present subjunctive" },
    short: {
      es: "Raíz de «ils» + -e, -es, -e, -ions, -iez, -ent. Tras il faut que, vouloir que, emociones.",
      en: "'ils' stem + -e, -es, -e, -ions, -iez, -ent. After il faut que, vouloir que, emotions.",
    },
    rule: {
      es: "Se usa en la subordinada con que cuando la principal expresa necesidad, voluntad, emoción o duda, con dos sujetos distintos. Si el sujeto es el mismo, se usa el infinitivo: je veux partir, pero je veux que tu partes.",
      en: "It's used in a que clause when the main clause expresses need, wanting, emotion or doubt, with two different subjects. Same subject → infinitive: je veux partir, but je veux que tu partes.",
    },
    steps: [
      { es: "¿Hay il faut que, vouloir que, être content que, avoir peur que…? → subjuntivo.", en: "Is there il faut que, vouloir que, être content que or avoir peur que? → subjunctive." },
      { es: "Toma «ils» en presente y quita -ent: ils viennent → vienn-.", en: "Take 'ils' present and drop -ent: ils viennent → vienn-." },
      { es: "Añade -e, -es, -e, -ions, -iez, -ent (o usa el irregular).", en: "Add -e, -es, -e, -ions, -iez, -ent (or use the irregular form)." },
    ],
    table: {
      head: ["", "finir", "être", "avoir"],
      rows: [["que je / j'", "finisse", "sois", "aie"], ["que tu", "finisses", "sois", "aies"], ["qu'il / elle", "finisse", "soit", "ait"], ["que nous", "finissions", "soyons", "ayons"], ["que vous", "finissiez", "soyez", "ayez"], ["qu'ils / elles", "finissent", "soient", "aient"]],
    },
    examples: [
      { target: "Il faut que tu viennes avec nous.", gloss: { es: "Tienes que venir con nosotros.", en: "You have to come with us." } },
      { target: "Je veux que vous sachiez la vérité.", gloss: { es: "Quiero que sepa la verdad.", en: "I want you to know the truth." } },
    ],
    pitfalls: {
      es: "Casi como en español, pero «espérer que» va con indicativo (j'espère qu'il viendra) y «il faut que» siempre con subjuntivo.",
      en: "English rarely marks it ('I want you to come'), so don't calque: je veux que tu viennes, never 'je veux toi venir'.",
    },
  },
  {
    id: "fr-g-opinion", lang: "fr", cefr: "B1",
    title: { es: "Opinión: indicativo o subjuntivo", en: "Opinion: indicative or subjunctive" },
    short: {
      es: "je pense que + indicativo · je ne pense pas que / je doute que + subjuntivo.",
      en: "je pense que + indicative · je ne pense pas que / je doute que + subjunctive.",
    },
    rule: {
      es: "Los verbos de opinión en afirmativo (penser, croire, trouver, être sûr) van con indicativo porque presentan algo como cierto. En negativo o en pregunta con inversión, y con douter, la duda pide subjuntivo. Es la misma lógica que «creo que es / no creo que sea».",
      en: "Opinion verbs in the affirmative (penser, croire, trouver, être sûr) take the indicative because they present something as true. In the negative, in inverted questions, and with douter, doubt calls for the subjunctive.",
    },
    steps: [
      { es: "¿Afirmas tu opinión? → indicativo: je crois qu'il a raison.", en: "Stating your opinion? → indicative: je crois qu'il a raison." },
      { es: "¿La niegas o dudas? → subjuntivo: je ne crois pas qu'il ait raison.", en: "Denying or doubting? → subjunctive: je ne crois pas qu'il ait raison." },
    ],
    table: {
      head: ["+ indicatif", "+ subjonctif"],
      rows: [["je pense que c'est vrai", "je ne pense pas que ce soit vrai"], ["je crois qu'il vient", "je doute qu'il vienne"], ["je suis sûr qu'elle sait", "je ne suis pas sûr qu'elle sache"]],
    },
    examples: [
      { target: "Je pense que c'est une bonne idée.", gloss: { es: "Creo que es una buena idea.", en: "I think it's a good idea." } },
      { target: "Je ne pense pas que ce soit vrai.", gloss: { es: "No creo que sea verdad.", en: "I don't think it's true." } },
    ],
    pitfalls: {
      es: "En la conversación muchos franceses usan indicativo tras «je ne pense pas que»; en un examen o por escrito, usa el subjuntivo.",
      en: "In casual speech some French speakers use the indicative after 'je ne pense pas que'; in writing, use the subjunctive.",
    },
  },
  // ── u16 ───────────────────────────────────────────────────
  {
    id: "fr-g-pqp", lang: "fr", cefr: "B1",
    title: { es: "El plus-que-parfait", en: "The plus-que-parfait (pluperfect)" },
    short: {
      es: "avoir / être en imparfait + participio: j'avais oublié, elle était partie = había olvidado, se había ido.",
      en: "avoir / être in the imparfait + participle: j'avais oublié, elle était partie = I had forgotten, she had left.",
    },
    rule: {
      es: "Expresa una acción anterior a otra acción pasada, como «había + participio». Usa el mismo auxiliar que el passé composé y las mismas reglas de concordancia.",
      en: "It expresses an action earlier than another past action, like 'had + participle'. It uses the same auxiliary as the passé composé and the same agreement rules.",
    },
    steps: [
      { es: "¿Ocurrió antes de otro hecho pasado? → plus-que-parfait.", en: "Did it happen before another past event? → plus-que-parfait." },
      { es: "Elige el auxiliar como en el passé composé (avoir o être).", en: "Choose the auxiliary as for the passé composé (avoir or être)." },
      { es: "Pon el auxiliar en imparfait + participio (concordado si va con être).", en: "Put the auxiliary in the imparfait + participle (agreeing with être)." },
    ],
    table: {
      head: ["", "oublier", "partir"],
      rows: [["je / j'", "avais oublié", "étais parti(e)"], ["tu", "avais oublié", "étais parti(e)"], ["il / elle", "avait oublié", "était parti(e)"], ["nous", "avions oublié", "étions parti(e)s"], ["vous", "aviez oublié", "étiez parti(e)(s)"], ["ils / elles", "avaient oublié", "étaient parti(e)s"]],
    },
    examples: [
      { target: "Le train était déjà parti.", gloss: { es: "El tren ya se había ido.", en: "The train had already left." } },
      { target: "Elle m'a dit qu'elle avait fini.", gloss: { es: "Me dijo que había terminado.", en: "She told me she had finished." } },
    ],
    pitfalls: {
      es: "No lo reemplaces por el passé composé cuando el orden importa: j'ai vu que j'avais oublié (no «que j'ai oublié»).",
      en: "English often skips the pluperfect ('I saw I forgot'); French needs it: j'ai vu que j'avais oublié.",
    },
  },
  {
    id: "fr-g-qui-que-ou", lang: "fr", cefr: "B1",
    title: { es: "Relativos: qui, que, où", en: "Relative pronouns: qui, que, où" },
    short: {
      es: "qui = sujeto (+ verbo) · que = objeto (+ sujeto) · où = lugar o tiempo.",
      en: "qui = subject (+ verb) · que = object (+ subject) · où = place or time.",
    },
    rule: {
      es: "El «que» español se reparte entre qui y que. qui hace de sujeto del verbo de la relativa, que de objeto directo (y se elide: qu'). où sirve para lugares y para momentos (le jour où = el día en que).",
      en: "English 'who/which/that' splits into qui and que. qui is the subject of the relative clause's verb, que its direct object (elided to qu'). où is for places and times (le jour où = the day when). que can't be left out like English 'that'.",
    },
    steps: [
      { es: "Mira qué viene después: ¿un verbo? → qui.", en: "Look at what follows: a verb? → qui." },
      { es: "¿Un sujeto (je, tu, Paul…)? → que / qu'.", en: "A subject (je, tu, Paul…)? → que / qu'." },
      { es: "¿Un lugar o un momento? → où.", en: "A place or a time? → où." },
    ],
    table: {
      head: ["", "exemple"],
      rows: [["qui", "l'ami qui m'a aidé"], ["que", "le livre que tu m'as prêté"], ["qu'", "la robe qu'elle porte"], ["où (lieu)", "la ville où je suis né"], ["où (temps)", "le jour où on s'est vus"]],
    },
    examples: [
      { target: "C'est l'ami qui m'a aidé.", gloss: { es: "Es el amigo que me ayudó.", en: "He's the friend who helped me." } },
      { target: "Le livre que tu m'as prêté est génial.", gloss: { es: "El libro que me prestaste es buenísimo.", en: "The book you lent me is great." } },
    ],
    pitfalls: {
      es: "qui nunca se elide (qui a, no «qu'a»); que sí (qu'il). Y «quien» no existe como relativo: la femme qui parle.",
      en: "que is never dropped: le livre que tu lis (not 'le livre tu lis'). qui never elides; que does (qu'il).",
    },
  },
];
