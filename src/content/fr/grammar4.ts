import type { GrammarPoint } from "../schema";

// Grammar points for French units u25–u30 (C1, content v2.1). Same shape as grammar.ts.
export const grammar4: GrammarPoint[] = [
  // ── u25 ───────────────────────────────────────────────────
  {
    id: "fr-g-au-cas-ou", lang: "fr", cefr: "C1",
    title: { es: "Condiciones: au cas où, à condition que, à moins que", en: "Conditions: au cas où, à condition que, à moins que" },
    short: {
      es: "au cas où + condicional; à condition que, pourvu que, à moins que (ne) + subjuntivo.",
      en: "au cas où + conditional; à condition que, pourvu que, à moins que (ne) + subjunctive.",
    },
    rule: {
      es: "au cas où y dans le cas où (= en caso de que) van con condicional, no con subjuntivo. à condition que, pourvu que (= siempre que) y à moins que (= a menos que) van con subjuntivo; tras à moins que suele aparecer un «ne» que no niega.",
      en: "au cas où and dans le cas où (= in case, should) take the conditional. à condition que, pourvu que (= provided that) and à moins que (= unless) take the subjunctive; à moins que is often followed by a ne that doesn't negate.",
    },
    steps: [
      { es: "¿Es una posibilidad para la que te preparas? → au cas où + condicional.", en: "A possibility you're preparing for? → au cas où + conditional." },
      { es: "¿Es una condición necesaria? → à condition que + subjuntivo.", en: "A necessary condition? → à condition que + subjunctive." },
      { es: "¿Es la única excepción? → à moins que (ne) + subjuntivo.", en: "The only exception? → à moins que (ne) + subjunctive." },
    ],
    table: {
      head: ["conjonction", "mode", "exemple"],
      rows: [["au cas où", "conditionnel", "au cas où il pleuvrait"], ["à condition que", "subjonctif", "à condition que tu viennes"], ["pourvu que", "subjonctif", "pourvu qu'il fasse beau"], ["à moins que", "subjonctif", "à moins qu'il (ne) parte"]],
    },
    examples: [
      { target: "Prends un parapluie, au cas où il pleuvrait.", gloss: { es: "Lleva un paraguas, por si llueve.", en: "Take an umbrella in case it rains." } },
      { target: "Je viendrai, à moins que je ne sois malade.", gloss: { es: "Iré, a menos que esté enfermo.", en: "I'll come, unless I'm ill." } },
    ],
    pitfalls: {
      es: "El español dice «en caso de que tengas», pero en francés es au cas où tu aurais, nunca «au cas où tu aies».",
      en: "Don't use the subjunctive after au cas où: au cas où tu aurais, never 'au cas où tu aies'.",
    },
  },
  {
    id: "fr-g-nominalisation", lang: "fr", cefr: "C1",
    title: { es: "Estilo nominal en textos formales", en: "Nominal style in formal writing" },
    short: {
      es: "Verbo de apoyo + sustantivo: effectuer le paiement, procéder à la signature, prendre une décision.",
      en: "Support verb + noun: effectuer le paiement, procéder à la signature, prendre une décision.",
    },
    rule: {
      es: "En correos profesionales, contratos y la prensa, el francés prefiere sustantivos: en lugar de «payer», effectuer le paiement; en lugar de «signer», procéder à la signature. Hay que saber qué verbo acompaña a cada sustantivo y su preposición.",
      en: "In business emails, contracts and the press, French prefers nouns: instead of payer, effectuer le paiement; instead of signer, procéder à la signature. You need to know which verb goes with each noun, and its preposition.",
    },
    steps: [
      { es: "Pasa el verbo a sustantivo: livrer → la livraison.", en: "Turn the verb into a noun: livrer → la livraison." },
      { es: "Elige el verbo de apoyo: effectuer, procéder à, assurer, prendre.", en: "Choose the support verb: effectuer, procéder à, assurer, prendre." },
      { es: "Revisa la contracción: procéder au paiement (à + le).", en: "Check the contraction: procéder au paiement (à + le)." },
    ],
    table: {
      head: ["verbe", "style nominal"],
      rows: [["payer", "effectuer le paiement"], ["signer", "procéder à la signature"], ["livrer", "assurer la livraison"], ["décider", "prendre une décision"], ["annuler", "procéder à l'annulation"]],
    },
    examples: [
      { target: "Nous procéderons à la signature lundi.", gloss: { es: "Procederemos a la firma el lunes.", en: "We will proceed with the signing on Monday." } },
      { target: "Veuillez effectuer le paiement avant le dix mai.", gloss: { es: "Le rogamos realizar el pago antes del diez de mayo.", en: "Please make payment before the tenth of May." } },
    ],
    pitfalls: {
      es: "«procéder» pide «à»: procéder à la signature, no «procéder la signature».",
      en: "procéder needs à: procéder à la signature, not 'procéder la signature'.",
    },
  },
  // ── u26 ───────────────────────────────────────────────────
  {
    id: "fr-g-concession", lang: "fr", cefr: "C1",
    title: { es: "La concesión: bien que, même si, avoir beau, pour autant", en: "Concession: bien que, même si, avoir beau, pour autant" },
    short: {
      es: "bien que / quoique + subjuntivo; même si + indicativo; avoir beau + infinitivo; pour autant = no por eso.",
      en: "bien que / quoique + subjunctive; même si + indicative; avoir beau + infinitive; pour autant = for all that.",
    },
    rule: {
      es: "Para admitir algo sin cambiar de opinión: bien que y quoique llevan subjuntivo; même si lleva indicativo. avoir beau + infinitivo equivale a «por más que». pour autant, al final de una frase negativa, significa «no por eso».",
      en: "To admit something without changing your view: bien que and quoique take the subjunctive; même si takes the indicative. avoir beau + infinitive means 'however much'. pour autant, at the end of a negative clause, means 'for all that'.",
    },
    steps: [
      { es: "¿bien que / quoique? → subjuntivo: bien qu'il soit.", en: "bien que / quoique? → subjunctive: bien qu'il soit." },
      { es: "¿même si? → indicativo, aunque en español uses subjuntivo: même s'il pleut.", en: "même si? → indicative: même s'il pleut." },
      { es: "¿avoir beau? → conjuga avoir + infinitivo: j'ai beau crier.", en: "avoir beau? → conjugate avoir + infinitive: j'ai beau crier." },
    ],
    table: {
      head: ["connecteur", "construction"],
      rows: [["bien que / quoique", "+ subjonctif"], ["même si", "+ indicatif"], ["avoir beau", "+ infinitif"], ["certes…, mais…", "+ indicatif"], ["… pour autant", "phrase négative"]],
    },
    examples: [
      { target: "Bien qu'il soit tard, je vais finir ce dossier.", gloss: { es: "Aunque es tarde, voy a terminar este expediente.", en: "Although it's late, I'm going to finish this file." } },
      { target: "J'ai beau chercher, je ne trouve pas mes clés.", gloss: { es: "Por más que busco, no encuentro mis llaves.", en: "However hard I look, I can't find my keys." } },
      { target: "Il a perdu, mais il n'a pas abandonné pour autant.", gloss: { es: "Perdió, pero no por eso abandonó.", en: "He lost, but he didn't give up for all that." } },
    ],
    pitfalls: {
      es: "«même si» nunca lleva subjuntivo, y «pour autant» no significa «por lo tanto» (eso es «donc»).",
      en: "même si never takes the subjunctive, and pour autant doesn't mean 'therefore' (that's donc).",
    },
  },
  {
    id: "fr-g-cause-consequence", lang: "fr", cefr: "C1",
    title: { es: "Causa y consecuencia en la argumentación", en: "Cause and consequence in an argument" },
    short: {
      es: "d'autant plus que, dans la mesure où, faute de (causa); si bien que, de sorte que (consecuencia).",
      en: "d'autant plus que, dans la mesure où, faute de (cause); si bien que, de sorte que (consequence).",
    },
    rule: {
      es: "d'autant plus que añade una razón que refuerza lo dicho; dans la mesure où limita (en la medida en que); faute de + sustantivo o infinitivo indica lo que falta. si bien que y de sorte que + indicativo introducen el resultado.",
      en: "d'autant plus que adds a reason that strengthens the point; dans la mesure où limits it (insofar as); faute de + noun or infinitive says what is missing. si bien que and de sorte que + indicative introduce the result.",
    },
    steps: [
      { es: "¿Refuerzas una razón? → d'autant plus que.", en: "Strengthening a reason? → d'autant plus que." },
      { es: "¿Falta algo? → faute de + sustantivo (sin artículo).", en: "Something missing? → faute de + noun (no article)." },
      { es: "¿Das el resultado? → si bien que + indicativo.", en: "Giving the result? → si bien que + indicative." },
    ],
    table: {
      head: ["sens", "connecteur", "exemple"],
      rows: [["cause +", "d'autant plus que", "d'autant plus qu'il pleut"], ["limite", "dans la mesure où", "dans la mesure où c'est possible"], ["manque", "faute de", "faute de temps"], ["résultat", "si bien que", "si bien qu'on est partis"]],
    },
    examples: [
      { target: "Faute de preuves, le suspect a été libéré.", gloss: { es: "Por falta de pruebas, el sospechoso quedó libre.", en: "For lack of evidence, the suspect was released." } },
      { target: "Il est parti tôt, si bien qu'il a raté la fin.", gloss: { es: "Se fue temprano, así que se perdió el final.", en: "He left early, so he missed the end." } },
    ],
    pitfalls: {
      es: "Se dice «faute de», nunca «par faute de» (calco de «por falta de»).",
      en: "de sorte que + subjunctive means purpose (so that), + indicative means result: watch the mood.",
    },
  },
  // ── u27 ───────────────────────────────────────────────────
  {
    id: "fr-g-subj-passe", lang: "fr", cefr: "C1",
    title: { es: "El subjuntivo pasado", en: "The past subjunctive" },
    short: {
      es: "avoir / être en subjuntivo + participio: que j'aie fini, qu'elle soit partie. Para una acción anterior.",
      en: "avoir / être in the subjunctive + participle: que j'aie fini, qu'elle soit partie. For an earlier action.",
    },
    rule: {
      es: "Tras las expresiones que piden subjuntivo (sentimiento, duda, necesidad), si la acción ya ocurrió se usa el subjuntivo pasado: je suis content que tu sois venu. Los verbos con être y los pronominales siguen usando être, y el participio concuerda.",
      en: "After expressions that take the subjunctive (feelings, doubt, necessity), if the action has already happened use the past subjunctive: je suis content que tu sois venu. Verbs with être and reflexive verbs keep être, and the participle agrees.",
    },
    steps: [
      { es: "¿La expresión pide subjuntivo? (content que, douter que, il se peut que…)", en: "Does the expression take the subjunctive? (content que, douter que, il se peut que…)" },
      { es: "¿La acción es anterior? → subjuntivo pasado.", en: "Did the action happen first? → past subjunctive." },
      { es: "Auxiliar en subjuntivo (aie, sois…) + participio, con concordancia si es être.", en: "Auxiliary in the subjunctive (aie, sois…) + participle, agreeing if it's être." },
    ],
    table: {
      head: ["", "finir", "partir"],
      rows: [["que je / j'", "aie fini", "sois parti(e)"], ["que tu", "aies fini", "sois parti(e)"], ["qu'il / elle", "ait fini", "soit parti(e)"], ["que nous", "ayons fini", "soyons parti(e)s"], ["que vous", "ayez fini", "soyez parti(e)(s)"], ["qu'ils / elles", "aient fini", "soient parti(e)s"]],
    },
    examples: [
      { target: "Je doute qu'il ait compris.", gloss: { es: "Dudo que haya entendido.", en: "I doubt he understood." } },
      { target: "Il se peut qu'elle soit déjà partie.", gloss: { es: "Puede que ya se haya ido.", en: "She may have already left." } },
    ],
    pitfalls: {
      es: "Los pronominales van con être: que nous nous soyons vus, no «que nous nous ayons vus».",
      en: "Reflexive verbs take être: que nous nous soyons vus, not 'que nous nous ayons vus'.",
    },
  },
  {
    id: "fr-g-subj-relative", lang: "fr", cefr: "C1",
    title: { es: "Subjuntivo en relativas y tras superlativos", en: "Subjunctive in relative clauses and after superlatives" },
    short: {
      es: "le seul qui sache, le meilleur que j'aie vu, quelqu'un qui puisse: subjuntivo en registro cuidado.",
      en: "le seul qui sache, le meilleur que j'aie vu, quelqu'un qui puisse: subjunctive in careful French.",
    },
    rule: {
      es: "Tras un superlativo (le plus, le meilleur) o le seul, l'unique, le premier, le dernier, la relativa va en subjuntivo en registro cuidado. También cuando lo que se busca quizás no existe: je cherche un appartement qui soit calme.",
      en: "After a superlative (le plus, le meilleur) or le seul, l'unique, le premier, le dernier, the relative clause takes the subjunctive in careful French. Also when what you're looking for may not exist: je cherche un appartement qui soit calme.",
    },
    steps: [
      { es: "¿Hay superlativo o le seul / le premier…? → subjuntivo.", en: "Superlative or le seul / le premier…? → subjunctive." },
      { es: "¿Buscas algo hipotético? → subjuntivo; si existe y lo conoces → indicativo.", en: "Looking for something hypothetical? → subjunctive; if it exists and you know it → indicative." },
    ],
    table: {
      head: ["contexte", "exemple"],
      rows: [["superlatif", "le plus beau pays que je connaisse"], ["le seul", "le seul qui puisse m'aider"], ["recherche", "un stagiaire qui sache l'allemand"], ["fait réel", "le stagiaire qui sait l'allemand"]],
    },
    examples: [
      { target: "C'est la seule personne qui me comprenne.", gloss: { es: "Es la única persona que me entiende.", en: "She's the only person who understands me." } },
      { target: "Je cherche un appartement qui soit calme.", gloss: { es: "Busco un departamento que sea tranquilo.", en: "I'm looking for a flat that's quiet." } },
    ],
    pitfalls: {
      es: "En la conversación se oye mucho el indicativo (le meilleur film que j'ai vu); por escrito, mejor el subjuntivo.",
      en: "In speech the indicative is common (le meilleur film que j'ai vu); in writing prefer the subjunctive.",
    },
  },
  // ── u28 ───────────────────────────────────────────────────
  {
    id: "fr-g-conditionnel-info", lang: "fr", cefr: "C1",
    title: { es: "El condicional periodístico", en: "The journalistic conditional" },
    short: {
      es: "Información sin confirmar: le suspect aurait fui = al parecer, el sospechoso huyó.",
      en: "Unconfirmed information: le suspect aurait fui = the suspect has reportedly fled.",
    },
    rule: {
      es: "La prensa usa el condicional para dar una información sin hacerse responsable de ella. Condicional presente para hoy (il y aurait dix blessés) y condicional pasado para un hecho pasado (il aurait fui).",
      en: "The press uses the conditional to report information without vouching for it. Present conditional for now (il y aurait dix blessés), past conditional for a past event (il aurait fui).",
    },
    steps: [
      { es: "¿Está confirmado? → indicativo: il a fui.", en: "Confirmed? → indicative: il a fui." },
      { es: "¿Es un rumor o una fuente? → condicional: il aurait fui.", en: "A rumour or a source? → conditional: il aurait fui." },
      { es: "Busca las pistas: selon, d'après, de source policière.", en: "Look for the clues: selon, d'après, de source policière." },
    ],
    table: {
      head: ["", "confirmé", "non confirmé"],
      rows: [["présent", "il y a dix blessés", "il y aurait dix blessés"], ["passé", "il a démissionné", "il aurait démissionné"], ["futur", "il partira", "il partirait"]],
    },
    examples: [
      { target: "Selon la police, le voleur aurait agi seul.", gloss: { es: "Según la policía, el ladrón habría actuado solo.", en: "According to the police, the thief apparently acted alone." } },
      { target: "Le président serait favorable à cette réforme.", gloss: { es: "El presidente estaría a favor de esta reforma.", en: "The president is said to favour this reform." } },
    ],
    pitfalls: {
      es: "No lo traduzcas como hipótesis: «il aurait démissionné» en una noticia no es «habría renunciado si…», sino «parece que renunció».",
      en: "Don't read it as a hypothesis: in a news story 'il aurait démissionné' means 'he has reportedly resigned'.",
    },
  },
  {
    id: "fr-g-participe-present", lang: "fr", cefr: "C1",
    title: { es: "Participio presente y adjetivo verbal", en: "Present participle and verbal adjective" },
    short: {
      es: "Participio (-ant) invariable: fatiguant. Adjetivo concordado, a veces con otra grafía: fatigante, convaincants.",
      en: "Participle (-ant) never agrees: fatiguant. Adjective agrees, sometimes spelt differently: fatigante, convaincants.",
    },
    rule: {
      es: "El participio presente expresa una acción y no concuerda: des chiffres provenant de sources différentes. El adjetivo verbal describe una cualidad y concuerda. Algunos cambian de grafía: -guant → -gant, -quant → -cant, y a veces -ant → -ent (négligent, différent, précédent).",
      en: "The present participle expresses an action and never agrees: des chiffres provenant de sources différentes. The verbal adjective describes a quality and agrees. Some change spelling: -guant → -gant, -quant → -cant, and sometimes -ant → -ent (négligent, différent, précédent).",
    },
    steps: [
      { es: "¿Lleva complemento o expresa una acción? → participio invariable.", en: "Does it have an object or express an action? → invariable participle." },
      { es: "¿Describe una cualidad (con être, très…)? → adjetivo, concordado.", en: "Does it describe a quality (after être, très…)? → adjective, agreeing." },
      { es: "Revisa la grafía del adjetivo: fatigant, convaincant, négligent.", en: "Check the adjective's spelling: fatigant, convaincant, négligent." },
    ],
    table: {
      head: ["verbe", "participe", "adjectif"],
      rows: [["fatiguer", "fatiguant", "fatigant"], ["convaincre", "convainquant", "convaincant"], ["provoquer", "provoquant", "provocant"], ["négliger", "négligeant", "négligent"], ["différer", "différant", "différent"], ["précéder", "précédant", "précédent"]],
    },
    examples: [
      { target: "C'est une journée fatigante.", gloss: { es: "Es un día agotador.", en: "It's a tiring day." } },
      { target: "Les enfants, fatiguant leurs parents, couraient partout.", gloss: { es: "Los niños, que cansaban a sus padres, corrían por todas partes.", en: "The children, wearing out their parents, were running everywhere." } },
    ],
    pitfalls: {
      es: "Al oído son iguales: el error está en la escritura (des arguments «convainquants» es incorrecto).",
      en: "They sound the same: the mistake is in writing ('des arguments convainquants' is wrong).",
    },
  },
  // ── u29 ───────────────────────────────────────────────────
  {
    id: "fr-g-passif-pronominal", lang: "fr", cefr: "C1",
    title: { es: "Pasiva con «se» y con «se faire»", en: "Passive with se and with se faire" },
    short: {
      es: "le verre se recycle (se recicla); il s'est fait voler son vélo (le robaron la bici).",
      en: "le verre se recycle (glass is recycled); il s'est fait voler son vélo (he had his bike stolen).",
    },
    rule: {
      es: "«se» + verbo en tercera persona tiene a menudo sentido pasivo, sobre todo para normas, usos y propiedades: ça ne se dit pas. «se faire» + infinitivo presenta algo que le ocurre al sujeto, a menudo algo malo: elle s'est fait licencier.",
      en: "se + verb in the third person often has a passive meaning, especially for rules, habits and properties: ça ne se dit pas (that isn't said). se faire + infinitive presents something that happens to the subject, often something bad: elle s'est fait licencier.",
    },
    steps: [
      { es: "¿Hablas de una norma o costumbre? → se + verbo: ça se mange froid.", en: "Talking about a rule or habit? → se + verb: ça se mange froid." },
      { es: "¿Algo le pasó a alguien? → se faire + infinitivo.", en: "Did something happen to someone? → se faire + infinitive." },
      { es: "En el passé composé, «fait» no concuerda: elle s'est fait voler.", en: "In the passé composé, fait doesn't agree: elle s'est fait voler." },
    ],
    table: {
      head: ["structure", "exemple"],
      rows: [["se + verbe", "Le verre se recycle."], ["ne pas se faire", "Ça ne se fait pas."], ["se faire + inf.", "Il s'est fait arrêter."], ["se voir + inf.", "Elle s'est vu refuser l'entrée."]],
    },
    examples: [
      { target: "Le vin blanc se boit frais.", gloss: { es: "El vino blanco se toma frío.", en: "White wine is drunk chilled." } },
      { target: "Elle s'est fait voler son portefeuille.", gloss: { es: "Le robaron la billetera.", en: "She had her wallet stolen." } },
    ],
    pitfalls: {
      es: "Tras «se faire» va el infinitivo, no el participio: il s'est fait renverser (no «renversé»).",
      en: "se faire is followed by the infinitive, not the participle: il s'est fait renverser (not 'renversé').",
    },
  },
  {
    id: "fr-g-participe-compose", lang: "fr", cefr: "C1",
    title: { es: "Acción anterior: ayant fait, une fois + participio", en: "Earlier action: ayant fait, une fois + participle" },
    short: {
      es: "ayant / étant + participio (ayant fini, étant partie); une fois + sustantivo + participio (une fois la porte fermée).",
      en: "ayant / étant + participle (ayant fini, étant partie); une fois + noun + participle (une fois la porte fermée).",
    },
    rule: {
      es: "El participio compuesto (ayant / étant + participio) indica una acción terminada antes de la principal y con el mismo sujeto. «une fois» + sustantivo + participio concordado funciona como una oración: une fois les données analysées.",
      en: "The perfect participle (ayant / étant + participle) shows an action completed before the main one, with the same subject. une fois + noun + agreeing participle works like a clause: une fois les données analysées.",
    },
    steps: [
      { es: "¿El verbo usa avoir? → ayant + participio (invariable).", en: "Does the verb take avoir? → ayant + participle (no agreement)." },
      { es: "¿Usa être? → étant + participio concordado con el sujeto.", en: "Does it take être? → étant + participle agreeing with the subject." },
      { es: "Con «une fois», el participio concuerda con el sustantivo que sigue.", en: "With une fois, the participle agrees with the noun that follows." },
    ],
    table: {
      head: ["", "forme", "exemple"],
      rows: [["avoir", "ayant + p.p.", "ayant lu le rapport"], ["être", "étant + p.p.", "étant arrivée tôt"], ["une fois", "nom + p.p.", "une fois la décision prise"]],
    },
    examples: [
      { target: "Ayant fini son travail, il est rentré chez lui.", gloss: { es: "Tras terminar su trabajo, volvió a su casa.", en: "Having finished his work, he went home." } },
      { target: "Une fois la décision prise, on ne reviendra pas en arrière.", gloss: { es: "Una vez tomada la decisión, no habrá vuelta atrás.", en: "Once the decision is made, there's no going back." } },
    ],
    pitfalls: {
      es: "El sujeto del participio debe ser el de la oración principal: «Ayant fini, le chef m'a félicité» es ambiguo y se considera incorrecto.",
      en: "The participle's subject must be the main clause's subject: 'Ayant fini, le chef m'a félicité' is a dangling participle.",
    },
  },
  // ── u30 ───────────────────────────────────────────────────
  {
    id: "fr-g-registres", lang: "fr", cefr: "C1",
    title: { es: "Registros: culto, neutro y coloquial (con verlan)", en: "Registers: formal, neutral and informal (with verlan)" },
    short: {
      es: "soutenu: puis-je, je vous saurais gré · courant: est-ce que je peux · familier: je peux ?, meuf, relou.",
      en: "soutenu: puis-je, je vous saurais gré · courant: est-ce que je peux · familier: je peux ?, meuf, relou.",
    },
    rule: {
      es: "El registro culto usa la inversión, el «ne» completo, el ne expletivo y fórmulas escogidas. El coloquial omite el «ne», usa «on», preguntas por entonación y vocabulario familiar. El verlan invierte las sílabas de una palabra: femme → meuf, lourd → relou.",
      en: "Formal register uses inversion, full ne, the expletive ne and set phrases. Informal register drops ne, uses on, intonation questions and slang. Verlan swaps a word's syllables: femme → meuf, lourd → relou.",
    },
    steps: [
      { es: "¿Carta, administración, desconocidos? → registro culto o neutro.", en: "Letter, officials, strangers? → formal or neutral register." },
      { es: "¿Amigos de tu edad? → el coloquial está bien.", en: "Friends your age? → informal is fine." },
      { es: "Para entender el verlan, lee las sílabas al revés: chelou → louche.", en: "To decode verlan, read the syllables backwards: chelou → louche." },
    ],
    table: {
      head: ["soutenu", "courant", "familier"],
      rows: [["Puis-je entrer ?", "Je peux entrer ?", "J'peux entrer ?"], ["une femme", "une femme", "une meuf"], ["irrité", "énervé", "vénère"], ["ennuyeux", "pénible", "relou"]],
    },
    examples: [
      { target: "Je vous saurais gré de bien vouloir me répondre.", gloss: { es: "Le agradecería que tuviera a bien responderme.", en: "I would be grateful if you would kindly reply." } },
      { target: "Il est trop relou, ce mec.", gloss: { es: "Es súper pesado ese tipo.", en: "That guy is so annoying." } },
    ],
    pitfalls: {
      es: "«je vous serais gré» es un error frecuente: es «saurais» (de savoir gré). Y no uses verlan en una entrevista de trabajo.",
      en: "'je vous serais gré' is a common error: it's saurais (from savoir gré). And keep verlan out of job interviews.",
    },
  },
  {
    id: "fr-g-ne-expletif", lang: "fr", cefr: "C1",
    title: { es: "El «ne» expletivo", en: "The expletive ne" },
    short: {
      es: "avant qu'il ne parte, je crains qu'il ne pleuve: un «ne» sin «pas» que no niega. Es opcional y culto.",
      en: "avant qu'il ne parte, je crains qu'il ne pleuve: a ne without pas that doesn't negate. Optional and formal.",
    },
    rule: {
      es: "Tras verbos de temor (craindre que, avoir peur que), avant que, à moins que, de peur que y en comparaciones (il est plus grand que je ne pensais), el registro cuidado añade un «ne» sin valor negativo. Puede omitirse sin cambiar el sentido.",
      en: "After verbs of fearing (craindre que, avoir peur que), avant que, à moins que, de peur que and in comparisons (il est plus grand que je ne pensais), careful French adds a ne with no negative meaning. It can be dropped without changing the sense.",
    },
    steps: [
      { es: "¿Hay temor, avant que, à moins que o una comparación? → puedes añadir «ne».", en: "Fear, avant que, à moins que or a comparison? → you may add ne." },
      { es: "No añadas «pas»: eso sí sería una negación.", en: "Don't add pas: that would make it a real negation." },
    ],
    table: {
      head: ["contexte", "exemple"],
      rows: [["craindre que", "Je crains qu'il ne soit trop tard."], ["avant que", "Pars avant qu'il ne pleuve."], ["à moins que", "à moins que tu ne refuses"], ["comparaison", "plus cher que je ne pensais"]],
    },
    examples: [
      { target: "J'ai peur qu'il ne se perde.", gloss: { es: "Tengo miedo de que se pierda.", en: "I'm afraid he'll get lost." } },
      { target: "C'est plus facile que je ne le croyais.", gloss: { es: "Es más fácil de lo que creía.", en: "It's easier than I thought." } },
    ],
    pitfalls: {
      es: "«J'ai peur qu'il ne vienne» = temo que venga; «J'ai peur qu'il ne vienne pas» = temo que no venga.",
      en: "'J'ai peur qu'il ne vienne' = I'm afraid he'll come; 'J'ai peur qu'il ne vienne pas' = I'm afraid he won't.",
    },
  },
];
