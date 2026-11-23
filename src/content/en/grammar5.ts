import type { GrammarPoint } from "../schema";

// Grammar points for English units u31–u36 (C2).
export const grammar5: GrammarPoint[] = [
  // ── u31 ───────────────────────────────────────────────────
  {
    id: "en-g-litotes",
    lang: "en",
    cefr: "C2",
    title: { es: "Atenuación: not bad, not unlike, hardly", en: "Understatement: not bad, not unlike, hardly" },
    short: {
      es: "Negar lo contrario para afirmar con suavidad: not bad (bueno), not unlike (parecido), hardly ideal (nada ideal).",
      en: "Deny the opposite to assert gently: not bad (good), not unlike (similar), hardly ideal (far from ideal).",
    },
    rule: {
      es: "La atenuación (understatement) y la lítote son rasgos centrales del inglés, sobre todo del británico. En vez de un elogio o una crítica directa, se niega lo contrario (not unimpressive = bastante impresionante) o se dice mucho menos de lo que se piensa (not the best idea = una idea pésima). Entenderla es clave para captar la ironía y el tono.",
      en: "Understatement and litotes are central to English, especially British English. Instead of direct praise or criticism, speakers deny the opposite (not unimpressive = quite impressive) or say much less than they mean (not the best idea = a terrible idea). Understanding it is key to catching irony and tone.",
    },
    steps: [
      { es: "Busca la negación: not, hardly, not exactly, not the most…", en: "Spot the negation: not, hardly, not exactly, not the most…" },
      { es: "Invierte el sentido: not bad → bueno; not the best → malo.", en: "Reverse the meaning: not bad → good; not the best → bad." },
      { es: "Escucha el tono: con ironía, el mensaje real suele ser más fuerte.", en: "Listen to the tone: with irony, the real message is usually stronger." },
    ],
    table: { head: ["dicho", "significado real"], rows: [["not bad at all", "very good"], ["not unlike", "quite similar to"], ["hardly ideal", "a real problem"], ["not exactly cheap", "expensive"], ["a bit of a problem", "a serious problem"]] },
    examples: [
      { target: "The view from the top was not unimpressive.", gloss: { es: "La vista desde arriba no estaba nada mal (era impresionante).", en: "The view from the top was not unimpressive." } },
      { target: "Losing the passport was hardly ideal.", gloss: { es: "Perder el pasaporte no fue precisamente lo ideal.", en: "Losing the passport was hardly ideal." } },
    ],
    pitfalls: {
      es: "Tomar la atenuación al pie de la letra: si un colega dice «That's a bit of a problem», no es un detalle menor. Y «hardly» no es «hard»: hardly = casi no, apenas.",
      en: "Taking understatement literally: when a colleague says 'That's a bit of a problem', it isn't minor. And 'hardly' isn't 'hard': hardly = barely.",
    },
  },
  {
    id: "en-g-emphatic-do",
    lang: "en",
    cefr: "C2",
    title: { es: "El «do» enfático: I do appreciate…, She did warn us", en: "Emphatic 'do': I do appreciate…, She did warn us" },
    short: {
      es: "do / does / did + verbo base en una afirmación para insistir, contradecir o suavizar: I do like it, but…",
      en: "do / does / did + base verb in a statement to insist, contradict or soften: I do like it, but…",
    },
    rule: {
      es: "En una oración afirmativa se puede añadir do / does / did delante del verbo base para dar énfasis. Sirve para contradecir (She did call! = ¡Sí que llamó!), para suavizar una crítica que viene después (I do appreciate it, but…) o, en imperativo, para invitar con cortesía (Do come in). Al hablar, el auxiliar se acentúa.",
      en: "In an affirmative sentence, do / does / did can go before the base verb for emphasis. It contradicts (She did call!), softens a criticism that follows (I do appreciate it, but…) or, in the imperative, makes a polite invitation (Do come in). In speech the auxiliary is stressed.",
    },
    steps: [
      { es: "Elige el auxiliar según tiempo y persona: do, does, did.", en: "Choose the auxiliary by tense and person: do, does, did." },
      { es: "Pon el verbo en forma base: she does know, they did try.", en: "Put the verb in the base form: she does know, they did try." },
      { es: "Al hablar, acentúa el auxiliar: I DO understand.", en: "In speech, stress the auxiliary: I DO understand." },
    ],
    table: { head: ["uso", "ejemplo"], rows: [["contradecir", "I did lock the door!"], ["suavizar un «pero»", "I do see your point, but…"], ["insistir", "He does work hard."], ["invitar", "Do help yourself."]] },
    examples: [
      { target: "I do understand your concerns, but the decision is final.", gloss: { es: "Entiendo de verdad tus preocupaciones, pero la decisión es definitiva.", en: "I do understand your concerns, but the decision is final." } },
      { target: "Do sit down and make yourself at home.", gloss: { es: "Siéntate, por favor, y ponte cómodo/a.", en: "Do sit down and make yourself at home." } },
    ],
    pitfalls: {
      es: "Tras do / does / did el verbo no lleva marca de tiempo: «She did warned us» o «He does works» están mal.",
      en: "After do / does / did the verb carries no tense: 'She did warned us' and 'He does works' are wrong.",
    },
  },

  // ── u32 ───────────────────────────────────────────────────
  {
    id: "en-g-adverb-collocations",
    lang: "en",
    cefr: "C2",
    title: { es: "Colocaciones adverbio + adjetivo: highly likely, bitterly disappointed", en: "Adverb + adjective collocations: highly likely, bitterly disappointed" },
    short: {
      es: "Cada adjetivo tiene sus intensificadores: highly likely, bitterly cold, utterly exhausted, deeply moved, fully aware.",
      en: "Each adjective has its own intensifiers: highly likely, bitterly cold, utterly exhausted, deeply moved, fully aware.",
    },
    rule: {
      es: "Los hablantes nativos no combinan adverbios y adjetivos al azar: hay colocaciones fijas. «highly» va con probabilidad, éxito y elogio; «bitterly», con decepción, frío y oposición; «utterly / absolutely», con adjetivos extremos (sin grados); «deeply», con emociones; «fully», con conciencia y compromiso. Usarlas bien es una marca clara de nivel C2.",
      en: "Native speakers don't combine adverbs and adjectives at random: there are fixed collocations. 'highly' goes with likelihood, success and praise; 'bitterly' with disappointment, cold and opposition; 'utterly / absolutely' with extreme (non-gradable) adjectives; 'deeply' with emotions; 'fully' with awareness and commitment. Using them well is a clear sign of C2.",
    },
    steps: [
      { es: "¿El adjetivo es extremo (exhausted, furious)? → utterly / absolutely, no «very».", en: "Is the adjective extreme (exhausted, furious)? → utterly / absolutely, not 'very'." },
      { es: "¿Es de probabilidad o elogio? → highly.", en: "Likelihood or praise? → highly." },
      { es: "¿Es una emoción? → deeply. ¿Decepción o frío? → bitterly.", en: "An emotion? → deeply. Disappointment or cold? → bitterly." },
    ],
    table: { head: ["adverbio", "adjetivos"], rows: [["highly", "likely, successful, recommended"], ["bitterly", "disappointed, cold, opposed"], ["utterly", "exhausted, ridiculous, useless"], ["deeply", "moved, concerned, offended"], ["fully", "aware, booked, committed"]] },
    examples: [
      { target: "The hotel comes highly recommended.", gloss: { es: "El hotel viene muy recomendado.", en: "The hotel comes highly recommended." } },
      { target: "Residents are bitterly opposed to the new highway.", gloss: { es: "Los vecinos se oponen rotundamente a la nueva autopista.", en: "Residents are bitterly opposed to the new highway." } },
    ],
    pitfalls: {
      es: "«very exhausted» o «very delicious» suenan raros: con adjetivos extremos van utterly, absolutely o totally. Y «fully conscious» es estar despierto/a, no «plenamente consciente de algo» (fully aware).",
      en: "'very exhausted' or 'very delicious' sound odd: extreme adjectives take utterly, absolutely or totally. And 'fully conscious' means awake, not 'fully aware of something'.",
    },
  },
  {
    id: "en-g-concessive-as",
    lang: "en",
    cefr: "C2",
    title: { es: "Concesión con «as»: Strange as it may seem…, Much as I like…", en: "Concession with 'as': Strange as it may seem…, Much as I like…" },
    short: {
      es: "Adjetivo / adverbio / verbo + as + sujeto + verbo = aunque, por más que: Tired as she was…, Try as I might…",
      en: "Adjective / adverb / verb + as + subject + verb = although, however much: Tired as she was…, Try as I might…",
    },
    rule: {
      es: "En registro cuidado, una concesión (aunque, por más que) se puede expresar poniendo delante la palabra clave y después as (o though) + sujeto + verbo: «Strange as it may seem» = por raro que parezca. «Much as» + oración = aunque… mucho. «Try as I might» es una fórmula fija. En inglés americano también se oye «As strange as it may seem».",
      en: "In careful English, a concession (although, however much) can be expressed by fronting the key word and then as (or though) + subject + verb: 'Strange as it may seem' = however strange it seems. 'Much as' + clause = although… very much. 'Try as I might' is a fixed phrase. American English also uses 'As strange as it may seem'.",
    },
    steps: [
      { es: "Toma la oración con although: Although he was tired, …", en: "Take the although-clause: Although he was tired, …" },
      { es: "Pon delante el adjetivo o adverbio: Tired…", en: "Front the adjective or adverb: Tired…" },
      { es: "Añade as + sujeto + verbo: Tired as he was, …", en: "Add as + subject + verb: Tired as he was, …" },
    ],
    table: { head: ["con although", "con as"], rows: [["Although he was tired, …", "Tired as he was, …"], ["Although I like her, …", "Much as I like her, …"], ["However hard I tried, …", "Try as I might, …"], ["Although it seems odd, …", "Odd as it may seem, …"]] },
    examples: [
      { target: "Talented as he is, he still needs more experience.", gloss: { es: "Por muy talentoso que sea, todavía le falta experiencia.", en: "Talented as he is, he still needs more experience." } },
      { target: "Much as I'd love to come, I'm afraid I can't.", gloss: { es: "Aunque me encantaría ir, lamentablemente no puedo.", en: "Much as I'd love to come, I'm afraid I can't." } },
    ],
    pitfalls: {
      es: "No se combina con although: «Although tired as he was» está mal. Y el orden es adjetivo + as + sujeto + verbo, no «As tired he was».",
      en: "Don't combine it with although: 'Although tired as he was' is wrong. The order is adjective + as + subject + verb, not 'As tired he was'.",
    },
  },

  // ── u33 ───────────────────────────────────────────────────
  {
    id: "en-g-phrasal-three-part",
    lang: "en",
    cefr: "C2",
    title: { es: "Verbos frasales de tres partes: get away with, face up to", en: "Three-part phrasal verbs: get away with, face up to" },
    short: {
      es: "verbo + partícula + preposición, siempre juntos: get away with it, look down on them (nunca «get it away with»).",
      en: "verb + particle + preposition, always together: get away with it, look down on them (never 'get it away with').",
    },
    rule: {
      es: "Los verbos frasales de tres partes combinan un verbo, una partícula y una preposición, y su significado no se deduce de las partes. A diferencia de los separables (pick it up), son inseparables: el objeto, incluso un pronombre, va siempre al final.",
      en: "Three-part phrasal verbs combine a verb, a particle and a preposition, and their meaning can't be worked out from the parts. Unlike separable verbs (pick it up), they are inseparable: the object, even a pronoun, always goes at the end.",
    },
    steps: [
      { es: "Aprende las tres partes juntas como una sola palabra: get away with.", en: "Learn all three parts together as one word: get away with." },
      { es: "Pon el objeto después de la preposición: get away with murder.", en: "Put the object after the preposition: get away with murder." },
      { es: "Con pronombre, igual: face up to it, put up with him.", en: "With a pronoun, the same: face up to it, put up with him." },
    ],
    table: { head: ["verbo", "significado"], rows: [["get away with", "quedar impune"], ["face up to", "afrontar"], ["look down on", "menospreciar"], ["put up with", "aguantar"], ["come up with", "idear"], ["come across as", "dar la impresión de"]] },
    examples: [
      { target: "I won't put up with this behavior any longer.", gloss: { es: "No voy a aguantar más este comportamiento.", en: "I won't put up with this behavior any longer." } },
      { target: "She came up with a clever solution.", gloss: { es: "Se le ocurrió una solución ingeniosa.", en: "She came up with a clever solution." } },
    ],
    pitfalls: {
      es: "No separes el verbo: «He got it away with» o «come up a solution with» están mal. Tampoco omitas la preposición: «face up the facts» → face up to the facts.",
      en: "Don't split the verb: 'He got it away with' or 'come up a solution with' are wrong. Don't drop the preposition: 'face up the facts' → face up to the facts.",
    },
  },
  {
    id: "en-g-particle-meanings",
    lang: "en",
    cefr: "C2",
    title: { es: "El significado de las partículas: up, down, off, out, through", en: "What particles mean: up, down, off, out, through" },
    short: {
      es: "up = del todo / más · down = menos · off = separar, cancelar · out = hasta el final · through = de principio a fin.",
      en: "up = completely / more · down = less · off = away, cancel · out = to the end · through = start to finish.",
    },
    rule: {
      es: "Muchos verbos frasales parecen arbitrarios, pero la partícula suele aportar un sentido constante. Conocerlo ayuda a deducir verbos nuevos: si «down» indica reducción, «play down» será minimizar y «water down», diluir o suavizar. No funciona siempre, pero sí en la mayoría de los casos.",
      en: "Many phrasal verbs look arbitrary, but the particle usually adds a consistent meaning. Knowing it helps you work out new verbs: if 'down' means reduction, 'play down' means minimize and 'water down' means dilute or soften. It doesn't always work, but it does in most cases.",
    },
    steps: [
      { es: "Fíjate en la partícula antes que en el verbo.", en: "Look at the particle before the verb." },
      { es: "Asócialo con su idea básica (up = completar, down = reducir…).", en: "Link it to its core idea (up = complete, down = reduce…)." },
      { es: "Combina esa idea con el verbo y comprueba con el contexto.", en: "Combine that idea with the verb and check against the context." },
    ],
    table: { head: ["partícula", "idea", "ejemplos"], rows: [["up", "completar, aumentar", "use up, speed up"], ["down", "reducir", "play down, cut down"], ["off", "separar, cancelar", "call off, brush off"], ["out", "hasta el final", "work out, pan out"], ["through", "de principio a fin", "see it through"]] },
    examples: [
      { target: "They had to call off the match because of the storm.", gloss: { es: "Tuvieron que suspender el partido por la tormenta.", en: "They had to call off the match because of the storm." } },
      { target: "We've used up all the paper.", gloss: { es: "Nos acabamos todo el papel.", en: "We've used up all the paper." } },
    ],
    pitfalls: {
      es: "No todas las partículas son literales: «up» en «use up» no significa «arriba», sino «por completo». Y un mismo verbo cambia mucho con la partícula: play up (exagerar) frente a play down (minimizar).",
      en: "Particles aren't always literal: 'up' in 'use up' means 'completely', not 'upwards'. And the same verb changes a lot: play up (exaggerate) vs play down (minimize).",
    },
  },

  // ── u34 ───────────────────────────────────────────────────
  {
    id: "en-g-ellipsis",
    lang: "en",
    cefr: "C2",
    title: { es: "Elipsis y sustitución: I hope so, if not, did so, the latter", en: "Ellipsis and substitution: I hope so, if not, did so, the latter" },
    short: {
      es: "so / not sustituyen una oración (I think so, if not); do so, un verbo; the former / the latter, el 1.º y el 2.º.",
      en: "so / not replace a clause (I think so, if not); do so replaces a verb; the former / the latter, the first and second.",
    },
    rule: {
      es: "El buen inglés escrito evita repetir. «so» (afirmativo) y «not» (negativo) sustituyen oraciones enteras tras think, hope, expect, suppose, be afraid y en «if so / if not». «do so» reemplaza a un verbo con su complemento en textos formales. «the former / the latter» remiten al primero y al segundo de dos elementos ya mencionados.",
      en: "Good written English avoids repetition. 'so' (positive) and 'not' (negative) replace whole clauses after think, hope, expect, suppose, be afraid and in 'if so / if not'. 'do so' replaces a verb with its complement in formal texts. 'the former / the latter' refer to the first and second of two things already mentioned.",
    },
    steps: [
      { es: "¿Repites una oración entera tras think / hope / if? → so o not.", en: "Repeating a whole clause after think / hope / if? → so or not." },
      { es: "¿Repites un verbo con su complemento? → do so (formal).", en: "Repeating a verb and its complement? → do so (formal)." },
      { es: "¿Hablas de dos elementos ya nombrados? → the former / the latter.", en: "Two things already mentioned? → the former / the latter." },
    ],
    table: { head: ["repetición", "sustitución"], rows: [["I hope it won't rain.", "I hope not."], ["If that is true, …", "If so, …"], ["…and we revised the report.", "…and we did so."], ["Tea or coffee? I prefer coffee.", "I prefer the latter."]] },
    examples: [
      { target: "Is the meeting still on? I believe so.", gloss: { es: "¿Sigue en pie la reunión? Creo que sí.", en: "Is the meeting still on? I believe so." } },
      { target: "Applicants who wish to withdraw may do so in writing.", gloss: { es: "Los postulantes que deseen retirarse pueden hacerlo por escrito.", en: "Applicants who wish to withdraw may do so in writing." } },
    ],
    pitfalls: {
      es: "Calcos del español: «I think yes», «I hope no» o «if yes» no son naturales. Se dice I think so, I hope not, if so. Y no confundas «the latter» (el segundo) con «later» (más tarde).",
      en: "Spanish calques like 'I think yes', 'I hope no' or 'if yes' aren't natural. Say I think so, I hope not, if so. And don't confuse 'the latter' with 'later'.",
    },
  },
  {
    id: "en-g-no-matter",
    lang: "en",
    cefr: "C2",
    title: { es: "Concesión abierta: no matter how, however, whatever", en: "Open concession: no matter how, however, whatever" },
    short: {
      es: "no matter + how / what / who · however + adj / adv · whatever + sustantivo = por más que, sea cual sea. Verbo en presente.",
      en: "no matter + how / what / who · however + adj / adv · whatever + noun = however much, whatever. Present tense.",
    },
    rule: {
      es: "Para decir que algo no cambia el resultado (por más que, sea cual sea, dondequiera que), se usa no matter + palabra interrogativa o las formas en -ever: however, whatever, whoever, wherever. «however» va seguido de adjetivo o adverbio; «whatever» puede ir solo con un sustantivo (whatever the cost). Como con «if», el verbo va en presente aunque se hable del futuro.",
      en: "To say something doesn't change the result, use no matter + question word or the -ever forms: however, whatever, whoever, wherever. 'however' is followed by an adjective or adverb; 'whatever' can take just a noun (whatever the cost). As with 'if', the verb is in the present even for the future.",
    },
    steps: [
      { es: "Elige la palabra: how (grado), what (cosa), who (persona), where (lugar).", en: "Choose the word: how (degree), what (thing), who (person), where (place)." },
      { es: "Usa no matter + palabra, o la forma en -ever.", en: "Use no matter + word, or the -ever form." },
      { es: "Con how / however, pon el adjetivo o adverbio justo después.", en: "With how / however, put the adjective or adverb right after it." },
      { es: "Verbo en presente: no matter what happens (no «will happen»).", en: "Present tense: no matter what happens (not 'will happen')." },
    ],
    table: { head: ["forma", "ejemplo"], rows: [["no matter how + adj", "No matter how busy I am, …"], ["however + adv", "However carefully you check, …"], ["whatever + sust.", "Whatever the reason, …"], ["no matter what", "No matter what happens, …"], ["wherever", "Wherever you go, …"]] },
    examples: [
      { target: "No matter what happens, call me.", gloss: { es: "Pase lo que pase, llámame.", en: "No matter what happens, call me." } },
      { target: "However carefully you check, mistakes will slip through.", gloss: { es: "Por más cuidado que pongas al revisar, siempre se cuela algún error.", en: "However carefully you check, mistakes will slip through." } },
    ],
    pitfalls: {
      es: "Separar «however» del adjetivo: «However it is hard» está mal → However hard it is. Y no uses «will» después: «No matter what will happen» → No matter what happens.",
      en: "Splitting 'however' from its adjective: 'However it is hard' is wrong → However hard it is. And no 'will' after it: 'No matter what will happen' → No matter what happens.",
    },
  },

  // ── u35 ───────────────────────────────────────────────────
  {
    id: "en-g-legal-register",
    lang: "en",
    cefr: "C2",
    title: { es: "Registro jurídico: shall, may, hereby, notwithstanding", en: "Legal register: shall, may, hereby, notwithstanding" },
    short: {
      es: "shall = obligación · shall not = prohibición · may = permiso · hereby = por la presente · null and void = nulo.",
      en: "shall = obligation · shall not = prohibition · may = permission · hereby = by this document · null and void.",
    },
    rule: {
      es: "En los contratos en inglés, «shall» no indica futuro sino obligación (The seller shall deliver = el vendedor deberá entregar), «shall not» prohíbe y «may» da permiso. Son típicos los adverbios con «here-» y «there-» (hereby, herein, thereof), las preposiciones formales (notwithstanding, pursuant to) y los pares fijos (null and void, terms and conditions). Hoy muchas empresas de EE. UU. prefieren el «plain English» (must, can).",
      en: "In English contracts, 'shall' doesn't mark the future but an obligation (The seller shall deliver), 'shall not' prohibits and 'may' grants permission. Here- and there- adverbs (hereby, herein, thereof), formal prepositions (notwithstanding, pursuant to) and fixed pairs (null and void, terms and conditions) are typical. Many US companies now prefer plain English (must, can).",
    },
    steps: [
      { es: "Lee «shall» como «deberá» y «shall not» como «no podrá».", en: "Read 'shall' as 'must' and 'shall not' as 'must not'." },
      { es: "Lee «may» como «podrá» (permiso, no posibilidad).", en: "Read 'may' as 'is allowed to' (permission, not possibility)." },
      { es: "Traduce «here-» / «there-»: hereby = por la presente, thereof = de ello.", en: "Decode here- / there-: hereby = by this document, thereof = of it." },
    ],
    table: { head: ["jurídico", "lenguaje común"], rows: [["The tenant shall pay…", "The tenant must pay…"], ["The tenant shall not sublet…", "The tenant must not sublet…"], ["Either party may terminate…", "Either side can end…"], ["notwithstanding the above", "despite what is said above"], ["pursuant to clause four", "according to clause four"]] },
    examples: [
      { target: "The employee shall not disclose any confidential information.", gloss: { es: "El empleado no podrá divulgar ninguna información confidencial.", en: "The employee shall not disclose any confidential information." } },
      { target: "The parties hereby agree to the following terms.", gloss: { es: "Por la presente, las partes acuerdan los siguientes términos.", en: "The parties hereby agree to the following terms." } },
    ],
    pitfalls: {
      es: "Leer «shall» como un simple futuro: en un contrato es una obligación. Y «may» no expresa duda sino permiso: «The buyer may cancel» = el comprador tiene derecho a cancelar.",
      en: "Reading 'shall' as a simple future: in a contract it's an obligation. And 'may' grants permission rather than expressing doubt: 'The buyer may cancel' = the buyer is entitled to cancel.",
    },
  },
  {
    id: "en-g-formal-conditions",
    lang: "en",
    cefr: "C2",
    title: { es: "Condiciones formales: provided that, in the event that, insofar as", en: "Formal conditions: provided that, in the event that, insofar as" },
    short: {
      es: "provided (that) / on condition that = siempre que · in the event that / of = en caso de · insofar as = en la medida en que.",
      en: "provided (that) / on condition that = only if · in the event that / of = in case of · insofar as = to the extent that.",
    },
    rule: {
      es: "En contratos, informes y correos formales, «if» se sustituye a menudo por conectores más precisos. provided / providing (that) y on condition that ponen una condición necesaria; in the event that (+ oración) o in the event of (+ sustantivo) prevén un caso posible; insofar as limita el alcance. Igual que con «if», el verbo va en presente aunque se hable del futuro.",
      en: "In contracts, reports and formal emails, 'if' is often replaced by more precise linkers. provided / providing (that) and on condition that set a necessary condition; in the event that (+ clause) or in the event of (+ noun) anticipate a possible case; insofar as limits the scope. As with 'if', the verb is in the present even for the future.",
    },
    steps: [
      { es: "¿Condición necesaria? → provided that / on condition that.", en: "A necessary condition? → provided that / on condition that." },
      { es: "¿Un caso posible? → in the event that + oración, in the event of + sustantivo.", en: "A possible case? → in the event that + clause, in the event of + noun." },
      { es: "¿Un límite? → insofar as. Verbo siempre en presente.", en: "A limit? → insofar as. Always use the present tense." },
    ],
    table: { head: ["conector", "ejemplo"], rows: [["provided that", "…provided that payment is received."], ["on condition that", "…on condition that it stays private."], ["in the event that", "In the event that the flight is canceled, …"], ["in the event of", "In the event of fire, …"], ["insofar as", "…insofar as the law allows."]] },
    examples: [
      { target: "You may use the images provided that you credit the author.", gloss: { es: "Puedes usar las imágenes siempre que cites al autor.", en: "You may use the images provided that you credit the author." } },
      { target: "In the event of a dispute, the matter shall be referred to arbitration.", gloss: { es: "En caso de disputa, el asunto se someterá a arbitraje.", en: "In the event of a dispute, the matter shall be referred to arbitration." } },
    ],
    pitfalls: {
      es: "Mezclar las dos formas: «in the event of the flight is canceled» está mal (of + sustantivo; that + oración). Y nada de «will» tras el conector: provided that you pay, no «you will pay».",
      en: "Mixing the two forms: 'in the event of the flight is canceled' is wrong (of + noun; that + clause). And no 'will' after the linker: provided that you pay, not 'you will pay'.",
    },
  },

  // ── u36 ───────────────────────────────────────────────────
  {
    id: "en-g-so-such-inversion",
    lang: "en",
    cefr: "C2",
    title: { es: "Inversión con so y such: So great was…, Such was…", en: "Inversion with so and such: So great was…, Such was…" },
    short: {
      es: "So + adjetivo + verbo + sujeto + that… · Such + be + sujeto + that… (énfasis formal o literario).",
      en: "So + adjective + verb + subject + that… · Such + be + subject + that… (formal or literary emphasis).",
    },
    rule: {
      es: "Las estructuras «so… that» y «such… that» (tan… que, tal… que) admiten una versión enfática: se pone «So + adjetivo» o «Such» al principio y se invierte el verbo. Es propio de discursos, periodismo y literatura. Con «such», el sujeto va después del verbo: Such was the noise that… (= the noise was such that…).",
      en: "'so… that' and 'such… that' have an emphatic version: 'So + adjective' or 'Such' goes first and the verb is inverted. It's typical of speeches, journalism and literature. With 'such', the subject follows the verb: Such was the noise that… (= the noise was such that…).",
    },
    steps: [
      { es: "Parte de la frase neutra: The noise was so loud that…", en: "Start from the neutral sentence: The noise was so loud that…" },
      { es: "Lleva «So + adjetivo» al principio: So loud…", en: "Move 'So + adjective' to the front: So loud…" },
      { es: "Invierte verbo y sujeto: So loud was the noise that…", en: "Invert verb and subject: So loud was the noise that…" },
    ],
    table: { head: ["neutro", "con inversión"], rows: [["The noise was so loud that…", "So loud was the noise that…"], ["The demand was such that…", "Such was the demand that…"], ["She was so angry that…", "So angry was she that…"]] },
    examples: [
      { target: "So strong was the wind that several trees fell.", gloss: { es: "El viento era tan fuerte que se cayeron varios árboles.", en: "So strong was the wind that several trees fell." } },
      { target: "Such was the noise that nobody could sleep.", gloss: { es: "El ruido era tal que nadie podía dormir.", en: "Such was the noise that nobody could sleep." } },
    ],
    pitfalls: {
      es: "Olvidar la inversión: «So loud the noise was that…» está mal. Y «such» no va con adjetivo solo en esta estructura: «Such loud was the music» → So loud was the music.",
      en: "Forgetting the inversion: 'So loud the noise was that…' is wrong. And 'such' doesn't take a bare adjective here: 'Such loud was the music' → So loud was the music.",
    },
  },
  {
    id: "en-g-unreal-past",
    lang: "en",
    cefr: "C2",
    title: { es: "El pasado irreal: It's high time we…, I'd rather you…, as if", en: "The unreal past: It's high time we…, I'd rather you…, as if" },
    short: {
      es: "It's (high) time + pasado · would rather + otra persona + pasado · as if + pasado: hablan del presente, no del pasado.",
      en: "It's (high) time + past · would rather + another person + past · as if + past: they refer to the present, not the past.",
    },
    rule: {
      es: "Igual que tras «wish» e «if only», el pasado expresa irrealidad tras otras expresiones: It's (high / about) time + sujeto + pasado (algo que ya debería estar pasando); would rather + otra persona + pasado (preferencia sobre lo que hace otro); as if / as though + pasado (comparación irreal). Si el sujeto es el mismo, «would rather» lleva infinitivo sin to: I'd rather stay.",
      en: "As after 'wish' and 'if only', the past tense expresses unreality after other expressions: It's (high / about) time + subject + past (something that should already be happening); would rather + another person + past (preference about someone else's action); as if / as though + past (unreal comparison). With the same subject, 'would rather' takes the bare infinitive: I'd rather stay.",
    },
    steps: [
      { es: "Identifica la expresión: It's high time, would rather, as if.", en: "Identify the expression: It's high time, would rather, as if." },
      { es: "¿Hay otro sujeto? → verbo en pasado (we left, you didn't).", en: "Another subject? → past tense (we left, you didn't)." },
      { es: "¿Mismo sujeto con would rather? → infinitivo: I'd rather go.", en: "Same subject with would rather? → base form: I'd rather go." },
    ],
    table: { head: ["expresión", "ejemplo"], rows: [["It's high time + pasado", "It's high time we left."], ["would rather + otro + pasado", "I'd rather you stayed."], ["would rather + infinitivo", "I'd rather stay."], ["as if + pasado", "She acts as if she were the boss."]] },
    examples: [
      { target: "It's about time you told her the truth.", gloss: { es: "Ya es hora de que le digas la verdad.", en: "It's about time you told her the truth." } },
      { target: "He looked at me as if I were crazy.", gloss: { es: "Me miró como si estuviera loco/a.", en: "He looked at me as if I were crazy." } },
    ],
    pitfalls: {
      es: "Traducir el subjuntivo español con presente: «It's time we go» o «I'd rather you don't» → It's time we went, I'd rather you didn't. El pasado aquí no habla del pasado.",
      en: "Using the present: 'It's time we go' or 'I'd rather you don't' → It's time we went, I'd rather you didn't. The past here doesn't refer to past time.",
    },
  },
];
