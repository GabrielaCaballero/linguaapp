import type { GrammarPoint } from "../schema";

// Grammar points for units u31–u36 (C2): textbook cards linked from the units' pattern items.
export const grammar5: GrammarPoint[] = [
  // ── u31 ────────────────────────────────────────────────────
  {
    id: "it-g-posizione-aggettivo",
    lang: "it",
    cefr: "C2",
    title: { es: "Adjetivos que cambian de sentido según su posición", en: "Adjectives that change meaning with position" },
    short: {
      es: "Delante: sentido figurado o subjetivo (un vecchio amico). Detrás: sentido literal (un amico vecchio = anciano).",
      en: "Before the noun: figurative or subjective (un vecchio amico). After: literal (un amico vecchio = an elderly friend).",
    },
    rule: {
      es: "En italiano el adjetivo suele ir detrás del sustantivo y entonces tiene su sentido literal, que distingue. Algunos adjetivos frecuentes, puestos delante, toman un sentido figurado o valorativo: un grande uomo (un gran hombre) frente a un uomo grande (un hombre corpulento). Delante, bello, buono, grande y santo se acortan como el artículo: bel libro, begli occhi, buon amico, San Pietro.",
      en: "In Italian the adjective usually follows the noun and then has its literal, distinguishing sense. Some common adjectives take a figurative or evaluative sense when placed before it: un grande uomo (a great man) versus un uomo grande (a big man). Before the noun, bello, buono, grande and santo shorten like the article: bel libro, begli occhi, buon amico, San Pietro.",
    },
    steps: [
      { es: "¿Describes un rasgo objetivo (edad, tamaño, dinero)? → detrás: un uomo povero.", en: "Describing an objective feature (age, size, money)? → after: un uomo povero." },
      { es: "¿Valoras, o el sentido es figurado? → delante: un pover'uomo (digno de lástima).", en: "Evaluating, or figurative? → before: un pover'uomo (a poor wretch)." },
      { es: "certo, diverso, vario delante = cantidad indefinida (diverse persone = varias personas); detrás = cualidad (persone diverse = distintas).", en: "certo, diverso, vario before = an indefinite amount (diverse persone = several people); after = a quality (persone diverse = different people)." },
    ],
    table: {
      head: ["aggettivo", "prima", "dopo"],
      rows: [
        ["vecchio", "di lunga data", "anziano"],
        ["povero", "che fa pena", "senza soldi"],
        ["grande", "importante", "di grandi dimensioni"],
        ["diverso", "parecchi", "differente"],
        ["certo", "un tale", "sicuro"],
        ["nuovo", "un altro", "appena fatto"],
      ],
    },
    examples: [
      { target: "È un vecchio amico: ci conosciamo da trent'anni.", gloss: { es: "Es un viejo amigo: nos conocemos desde hace treinta años.", en: "He's an old friend: we've known each other for thirty years." } },
      { target: "Ho comprato una macchina nuova, non usata.", gloss: { es: "Compré un auto (coche) nuevo, no usado.", en: "I bought a brand-new car, not a used one." } },
      { target: "Diverse persone hanno espresso pareri diversi.", gloss: { es: "Varias personas expresaron opiniones distintas.", en: "Several people expressed different opinions." } },
    ],
    pitfalls: {
      es: "En español pasa algo parecido (un gran hombre / un hombre grande), pero en italiano afecta a más adjetivos: «un amico vecchio» no es un amigo de toda la vida, sino un amigo anciano.",
      en: "English uses different words for this (an old friend / an elderly friend); Italian changes the position: «un amico vecchio» is an elderly friend, not a long-standing one.",
    },
  },
  {
    id: "it-g-connotazione",
    lang: "it",
    cefr: "C2",
    title: { es: "Sinónimos con distinta connotación y registro", en: "Near-synonyms: connotation and register" },
    short: {
      es: "Mismo hecho, otra palabra: morire (neutro), scomparire (prensa), venire a mancare (delicado), tirare le cuoia (burlón).",
      en: "Same fact, other word: morire (neutral), scomparire (press), venire a mancare (gentle), tirare le cuoia (jokey).",
    },
    rule: {
      es: "En el nivel C2 no basta con que la palabra signifique lo correcto: tiene que sonar como corresponde. Muchos sinónimos se distinguen por la connotación (testardo es negativo, tenace es positivo) o por el registro (casa, abitazione, dimora). Elegir mal no es un error de gramática, pero cambia el tono de lo que dices.",
      en: "At C2 a word must not only mean the right thing but also sound right. Many synonyms differ in connotation (testardo is negative, tenace positive) or in register (casa, abitazione, dimora). A poor choice isn't a grammar mistake, but it changes the tone of what you say.",
    },
    steps: [
      { es: "Piensa en quién escucha y en el tipo de texto: charla, prensa, documento, literatura.", en: "Think about the listener and the kind of text: chat, press, official document, literature." },
      { es: "Decide si quieres elogiar, criticar o quedarte neutral: tenace / testardo, preciso / pignolo.", en: "Decide whether you want to praise, criticise or stay neutral: tenace / testardo, preciso / pignolo." },
      { es: "Ante una pérdida o un tema delicado, elige el eufemismo: è venuto a mancare.", en: "For a death or a delicate topic, choose the euphemism: è venuto a mancare." },
    ],
    table: {
      head: ["neutro", "positivo / formale", "negativo / informale"],
      rows: [
        ["morire", "venire a mancare", "tirare le cuoia"],
        ["determinato", "tenace", "testardo"],
        ["preciso", "scrupoloso", "pignolo"],
        ["furbo", "accorto", "scaltro"],
        ["casa", "abitazione, dimora", "tugurio"],
      ],
    },
    examples: [
      { target: "Il noto regista è scomparso ieri all'età di novant'anni.", gloss: { es: "El conocido director falleció ayer a los noventa años.", en: "The well-known director passed away yesterday at the age of ninety." } },
      { target: "Non è testardo, è tenace: non si arrende mai.", gloss: { es: "No es terco, es tenaz: nunca se rinde.", en: "He isn't stubborn, he's tenacious: he never gives up." } },
    ],
    pitfalls: {
      es: "«Scomparire» en una noticia casi siempre significa fallecer, no desaparecer; para una persona desaparecida se dice «è sparito» o «è scomparso nel nulla».",
      en: "In a news report «scomparire» almost always means to pass away; for a missing person Italians say «è sparito» or «è scomparso nel nulla».",
    },
  },

  // ── u32 ────────────────────────────────────────────────────
  {
    id: "it-g-congiuntivo-indipendente",
    lang: "it",
    cefr: "C2",
    title: { es: "El congiuntivo sin verbo principal", en: "The subjunctive in main clauses" },
    short: {
      es: "Deseo (Fosse vero!), exhortación (Che entri pure!), duda (Che sia già partito?): congiuntivo sin «spero che».",
      en: "Wish (Fosse vero!), exhortation (Che entri pure!), doubt (Che sia già partito?): subjunctive with no main verb.",
    },
    rule: {
      es: "En la literatura, en la prensa y en el habla expresiva el congiuntivo aparece solo, sin un verbo que lo pida. Expresa un deseo (Fosse vero!, Non l'avessi mai detto!), una orden o permiso a una tercera persona, a menudo con che (Che nessuno si muova!), o una duda en forma de pregunta (Che sia stato lui?).",
      en: "In literature, journalism and expressive speech the subjunctive can stand alone, with no verb requiring it. It expresses a wish (Fosse vero!, Non l'avessi mai detto!), an order or permission to a third person, often with che (Che nessuno si muova!), or a doubt phrased as a question (Che sia stato lui?).",
    },
    steps: [
      { es: "¿Deseo irrealizable o lamento? → congiuntivo imperfetto o trapassato: Fosse vero! Non l'avessi mai fatto!", en: "An unreal wish or regret? → imperfect or pluperfect subjunctive: Fosse vero! Non l'avessi mai fatto!" },
      { es: "¿Orden o permiso para otro? → che + congiuntivo presente: Che aspetti!", en: "An order or permission for someone else? → che + present subjunctive: Che aspetti!" },
      { es: "¿Duda o sospecha? → Che + congiuntivo en pregunta: Che abbia dimenticato?", en: "A doubt or suspicion? → Che + subjunctive as a question: Che abbia dimenticato?" },
    ],
    table: {
      head: ["valore", "esempio"],
      rows: [
        ["desiderio", "Fosse vero!"],
        ["rimpianto", "Non l'avessi mai detto!"],
        ["esortazione", "Che nessuno si muova!"],
        ["concessione", "Venga pure."],
        ["dubbio", "Che sia stato lui?"],
      ],
    },
    examples: [
      { target: "Che Dio ce la mandi buona!", gloss: { es: "¡Que Dios nos ampare!", en: "God help us!" } },
      { target: "Che sia stato lui? Non ci credo.", gloss: { es: "¿Habrá sido él? No lo creo.", en: "Could it have been him? I don't believe it." } },
    ],
    pitfalls: {
      es: "Para una duda, el español usa el futuro (¿habrá sido él?); en italiano escrito es más elegante «Che sia stato lui?», aunque «Sarà stato lui?» también es correcto.",
      en: "English uses 'could it…?' or 'I wonder if…'; written Italian prefers «Che sia stato lui?», though «Sarà stato lui?» is correct too.",
    },
  },
  {
    id: "it-g-ipotetico-senza-se",
    lang: "it",
    cefr: "C2",
    title: { es: "La condicional sin «se»", en: "Conditionals without 'se'" },
    short: {
      es: "Avessi saputo, sarei venuto = Se avessi saputo… El congiuntivo al inicio ya marca la condición.",
      en: "Avessi saputo, sarei venuto = Se avessi saputo… A clause-initial subjunctive already marks the condition.",
    },
    rule: {
      es: "En el registro cuidado (y también en el habla) se puede omitir se y empezar con el congiuntivo imperfetto o trapassato: Fossi in te, accetterei; Avessimo preso il treno prima, saremmo arrivati in tempo. La consecuencia sigue en condicional. Equivale al inglés «Had I known».",
      en: "In careful register (and in speech too) se can be dropped, starting with the imperfect or pluperfect subjunctive: Fossi in te, accetterei; Avessimo preso il treno prima, saremmo arrivati in tempo. The result stays in the conditional. It's like English 'Had I known'.",
    },
    steps: [
      { es: "Escribe la condición sin se, con el congiuntivo al principio: Avessi tempo…", en: "Write the condition without se, the subjunctive first: Avessi tempo…" },
      { es: "Imperfetto para el presente (Fossi ricco), trapassato para el pasado (Avessi saputo).", en: "Imperfect for the present (Fossi ricco), pluperfect for the past (Avessi saputo)." },
      { es: "La consecuencia, en condicional: verrei / sarei venuto.", en: "Put the result in the conditional: verrei / sarei venuto." },
    ],
    table: {
      head: ["condizione", "conseguenza"],
      rows: [
        ["Fossi in te,", "accetterei."],
        ["Avessi tempo,", "verrei."],
        ["Avessi saputo,", "sarei venuto."],
        ["Fosse stato per me,", "saremmo rimasti."],
      ],
    },
    examples: [
      { target: "Avessi saputo che eri in città, ti avrei invitato.", gloss: { es: "Si hubiera sabido que estabas en la ciudad, te habría invitado.", en: "Had I known you were in town, I'd have invited you." } },
      { target: "Fosse stato per me, saremmo rimasti a casa.", gloss: { es: "Por mí, nos habríamos quedado en casa.", en: "If it had been up to me, we'd have stayed at home." } },
    ],
    pitfalls: {
      es: "En español «hubiera» sirve para las dos partes, pero en italiano la consecuencia nunca va en congiuntivo: «Avessi saputo, ti avessi invitato» es incorrecto; correcto: «…, ti avrei invitato».",
      en: "Don't put the result in the subjunctive: «Avessi saputo, ti avessi invitato» is wrong; correct: «…, ti avrei invitato».",
    },
  },

  // ── u33 ────────────────────────────────────────────────────
  {
    id: "it-g-participio-presente",
    lang: "it",
    cefr: "C2",
    title: { es: "El participio presente (-ante, -ente)", en: "The present participle (-ante, -ente)" },
    short: {
      es: "-are → -ante, -ere/-ire → -ente: il richiedente, gli aventi diritto, documenti attestanti il reddito.",
      en: "-are → -ante, -ere/-ire → -ente: il richiedente, gli aventi diritto, documenti attestanti il reddito.",
    },
    rule: {
      es: "El participio presente se forma con -ante (verbos en -are) y -ente (en -ere e -ire; algunos en -ire hacen -iente: ubbidiente). En la lengua común casi siempre es sustantivo o adjetivo (il cantante, l'acqua corrente). En el lenguaje burocrático y jurídico conserva valor de verbo y hasta lleva complemento directo: i documenti attestanti il reddito = que acreditan los ingresos.",
      en: "The present participle ends in -ante (-are verbs) and -ente (-ere and -ire verbs; some -ire verbs take -iente: ubbidiente). In everyday Italian it's almost always a noun or adjective (il cantante, l'acqua corrente). In bureaucratic and legal Italian it keeps a verbal force and can even take an object: i documenti attestanti il reddito = the documents that certify income.",
    },
    steps: [
      { es: "Quita la terminación del infinitivo: richied-ere, frequent-are.", en: "Drop the infinitive ending: richied-ere, frequent-are." },
      { es: "Añade -ante o -ente: richiedente, frequentante.", en: "Add -ante or -ente: richiedente, frequentante." },
      { es: "En plural: -anti, -enti (gli aventi diritto). Para entenderlo, cámbialo por «che + verbo».", en: "Plural: -anti, -enti (gli aventi diritto). To understand it, swap it for 'che + verb'." },
    ],
    table: {
      head: ["infinito", "participio presente", "= che…"],
      rows: [
        ["richiedere", "il richiedente", "chi richiede"],
        ["avere", "gli aventi diritto", "che hanno diritto"],
        ["attestare", "attestante", "che attesta"],
        ["risiedere", "residente", "che risiede"],
        ["ubbidire", "ubbidiente", "che ubbidisce"],
      ],
    },
    examples: [
      { target: "I documenti attestanti il reddito vanno allegati alla domanda.", gloss: { es: "Los documentos que acrediten los ingresos deben adjuntarse a la solicitud.", en: "Documents certifying income must be attached to the application." } },
      { target: "Il rimborso spetta solo agli aventi diritto.", gloss: { es: "El reembolso corresponde solo a quienes tienen derecho a él.", en: "The refund is due only to those entitled to it." } },
    ],
    pitfalls: {
      es: "Al hablar, el participio con complemento suena acartonado: di «i documenti che attestano il reddito». Y ojo con los irregulares: risiedere → residente, no «risiedente».",
      en: "In speech, a participle with an object sounds stilted: say «i documenti che attestano il reddito». And watch the irregular ones: risiedere → residente, not «risiedente».",
    },
  },
  {
    id: "it-g-si-enclitico",
    lang: "it",
    cefr: "C2",
    title: { es: "vendesi, affittasi, trattasi: el «si» pegado al verbo", en: "vendesi, affittasi, trattasi: 'si' attached to the verb" },
    short: {
      es: "En carteles y documentos el si va detrás del verbo: vendesi = si vende, cercasi = si cerca, trattasi = si tratta.",
      en: "On signs and documents si follows the verb: vendesi = si vende, cercasi = si cerca, trattasi = si tratta.",
    },
    rule: {
      es: "En anuncios, carteles y textos burocráticos el si impersonal o pasivo se pega al final del verbo: vendesi, affittasi, cercasi, trattasi, allegasi. Es una fórmula fija y antigua; en el habla se usa la forma normal: si vende, si tratta di. Con un sustantivo plural, la norma pide vendonsi, affittansi, aunque en los carteles se ve a menudo el singular.",
      en: "In ads, signs and bureaucratic texts the impersonal or passive si attaches to the end of the verb: vendesi, affittasi, cercasi, trattasi, allegasi. It's a fixed, old-fashioned formula; speech uses the normal form: si vende, si tratta di. With a plural noun, the rule calls for vendonsi, affittansi, though signs often keep the singular.",
    },
    steps: [
      { es: "Toma la 3.ª persona del verbo: vende, affitta, cerca.", en: "Take the third-person form: vende, affitta, cerca." },
      { es: "Pega -si al final: vendesi, affittasi, cercasi.", en: "Attach -si at the end: vendesi, affittasi, cercasi." },
      { es: "Al hablar o escribir de forma normal, vuelve a la forma suelta: si vende, si cerca.", en: "In normal speech or writing, go back to the separate form: si vende, si cerca." },
    ],
    table: {
      head: ["formula", "italiano comune"],
      rows: [
        ["vendesi villa", "si vende una villa"],
        ["affittasi bilocale", "si affitta un bilocale"],
        ["cercasi commessa", "si cerca una commessa"],
        ["trattasi di un errore", "si tratta di un errore"],
        ["allegasi copia", "si allega una copia"],
      ],
    },
    examples: [
      { target: "Affittasi bilocale in centro, no agenzie.", gloss: { es: "Se alquila departamento (piso) de un dormitorio en el centro, abstenerse agencias.", en: "Two-room flat to let in the centre, no agencies." } },
      { target: "Trattasi di un errore materiale.", gloss: { es: "Se trata de un error de transcripción.", en: "This is a clerical error." } },
    ],
    pitfalls: {
      es: "No uses estas formas al hablar: «trattasi di un amico» suena a parodia de oficina. Se escriben en una sola palabra: vendesi, no «vende si».",
      en: "Don't use these forms in conversation: «trattasi di un amico» sounds like an office parody. They're written as one word: vendesi, not «vende si».",
    },
  },

  // ── u34 ────────────────────────────────────────────────────
  {
    id: "it-g-condizionale-cronaca",
    lang: "it",
    cefr: "C2",
    title: { es: "El condicional de la crónica (información no confirmada)", en: "The reporting conditional (unconfirmed news)" },
    short: {
      es: "Il ministro sarebbe pronto a dimettersi = según se dice, está dispuesto. Compuesto para el pasado: avrebbe dichiarato.",
      en: "Il ministro sarebbe pronto a dimettersi = he is reportedly ready. Compound for the past: avrebbe dichiarato.",
    },
    rule: {
      es: "La prensa usa el condicional para dar una noticia sin hacerse responsable de ella: es lo que dicen otros, no un hecho comprobado. El condicional simple habla del presente (sarebbe pronto) y el compuesto del pasado (avrebbe ricevuto, sarebbe stato causato). A menudo lo acompañan secondo, stando a o pare.",
      en: "The press uses the conditional to report news without vouching for it: it's what others say, not a verified fact. The simple conditional refers to the present (sarebbe pronto), the compound one to the past (avrebbe ricevuto, sarebbe stato causato). It often comes with secondo, stando a or pare.",
    },
    steps: [
      { es: "¿El hecho no está confirmado? → condicional.", en: "Is the fact unconfirmed? → conditional." },
      { es: "¿Presente? → condicional simple: sarebbe, avrebbe.", en: "Present? → simple conditional: sarebbe, avrebbe." },
      { es: "¿Pasado? → condicional compuesto: avrebbe detto, sarebbe partito (concordancia con essere).", en: "Past? → compound conditional: avrebbe detto, sarebbe partito (agreement with essere)." },
    ],
    table: {
      head: ["fatto certo", "notizia non confermata"],
      rows: [
        ["Il ministro è pronto.", "Il ministro sarebbe pronto."],
        ["Ha ricevuto denaro.", "Avrebbe ricevuto denaro."],
        ["Sono fuggiti.", "Sarebbero fuggiti."],
        ["Si è dimessa.", "Si sarebbe dimessa."],
      ],
    },
    examples: [
      { target: "Secondo fonti vicine al governo, il ministro sarebbe pronto a dimettersi.", gloss: { es: "Según fuentes cercanas al gobierno, el ministro estaría dispuesto a renunciar.", en: "According to sources close to the government, the minister is reportedly ready to resign." } },
      { target: "L'incendio sarebbe stato causato da un mozzicone di sigaretta.", gloss: { es: "El incendio habría sido provocado por una colilla de cigarrillo.", en: "The fire was allegedly caused by a cigarette butt." } },
    ],
    pitfalls: {
      es: "El español periodístico hace lo mismo («habría sido»), así que el riesgo es el contrario: leer «sarebbe» como un hecho. En inglés equivale a reportedly / allegedly.",
      en: "English uses reportedly / allegedly with the plain verb; Italian puts the doubt in the verb itself. Don't read «avrebbe ricevuto» as 'would have received'.",
    },
  },
  {
    id: "it-g-presente-storico",
    lang: "it",
    cefr: "C2",
    title: { es: "Presente histórico y lengua de los titulares", en: "Historic present and headline language" },
    short: {
      es: "Nel 1946 gli italiani scelgono la Repubblica: el presente acerca el pasado. Los titulares usan presente y frases sin verbo.",
      en: "Nel 1946 gli italiani scelgono la Repubblica: the present brings the past closer. Headlines use the present and verbless phrases.",
    },
    rule: {
      es: "En libros de historia, crónicas y documentales los hechos pasados se cuentan a menudo en presente para hacerlos más vivos: Nel 1861 nasce il Regno d'Italia. Los titulares van más lejos: presente, frases nominales y dos puntos en lugar del verbo (Maltempo al Nord: scuole chiuse). Al leer, sitúa los hechos por las fechas, no por el tiempo verbal.",
      en: "History books, reports and documentaries often tell past events in the present to make them vivid: Nel 1861 nasce il Regno d'Italia. Headlines go further: present tense, verbless phrases and a colon instead of a verb (Maltempo al Nord: scuole chiuse). When reading, place events by their dates, not by the tense.",
    },
    steps: [
      { es: "¿Hay una fecha pasada y un verbo en presente? → presente histórico.", en: "A past date with a present-tense verb? → historic present." },
      { es: "En un titular, reconstruye el verbo que falta: «scuole chiuse» = le scuole sono state chiuse.", en: "In a headline, rebuild the missing verb: «scuole chiuse» = le scuole sono state chiuse." },
      { es: "No mezcles sin motivo presente y passato remoto en el mismo relato.", en: "Don't mix the present and the passato remoto in one account without a reason." },
    ],
    table: {
      head: ["racconto", "presente storico"],
      rows: [
        ["Nel 1861 nacque il Regno d'Italia.", "Nel 1861 nasce il Regno d'Italia."],
        ["Le scuole sono state chiuse.", "Scuole chiuse."],
        ["Il governo è caduto.", "Cade il governo."],
      ],
    },
    examples: [
      { target: "Nel 1946 gli italiani scelgono la Repubblica.", gloss: { es: "En 1946 los italianos eligen la República.", en: "In 1946 Italians choose the Republic." } },
      { target: "Maltempo al Nord: scuole chiuse in tre regioni.", gloss: { es: "Temporal en el norte: escuelas cerradas en tres regiones.", en: "Bad weather in the North: schools closed in three regions." } },
    ],
    pitfalls: {
      es: "En titulares el artículo suele desaparecer (Scuole chiuse, Cade il governo); no lo omitas en un texto normal.",
      en: "Headlines drop articles (Scuole chiuse, Cade il governo); don't drop them in ordinary prose.",
    },
  },
  {
    id: "it-g-figure-retoriche",
    lang: "it",
    cefr: "C2",
    title: { es: "Figuras retóricas en discursos y editoriales", en: "Rhetorical devices in speeches and editorials" },
    short: {
      es: "iperbole (mille volte), eufemismo (venire a mancare), anafora (repetir al inicio), domanda retorica (Chi di noi…?).",
      en: "iperbole (mille volte), eufemismo (venire a mancare), anafora (repetition at the start), domanda retorica (Chi di noi…?).",
    },
    rule: {
      es: "Los discursos políticos y los editoriales italianos usan mucho las figuras retóricas para convencer. La hipérbole exagera, el eufemismo suaviza, la anáfora repite una palabra al inicio de cada frase y la pregunta retórica no espera respuesta. Reconocerlas ayuda a separar los argumentos del efecto.",
      en: "Italian political speeches and editorials rely heavily on rhetorical devices to persuade. Hyperbole exaggerates, euphemism softens, anaphora repeats a word at the start of each sentence, and a rhetorical question expects no answer. Spotting them helps separate argument from effect.",
    },
    steps: [
      { es: "¿Exagera a propósito? → iperbole.", en: "Deliberate exaggeration? → iperbole." },
      { es: "¿Suaviza algo desagradable? → eufemismo.", en: "Softening something unpleasant? → eufemismo." },
      { es: "¿Repite el comienzo o pregunta sin esperar respuesta? → anafora / domanda retorica.", en: "Repeating the opening, or asking without expecting an answer? → anafora / domanda retorica." },
    ],
    table: {
      head: ["figura", "esempio"],
      rows: [
        ["iperbole", "Te l'ho detto mille volte!"],
        ["eufemismo", "i meno abbienti"],
        ["anafora", "Vogliamo lavoro, vogliamo futuro."],
        ["domanda retorica", "Chi di noi non ha mai sbagliato?"],
        ["metafora", "un fiume di parole"],
      ],
    },
    examples: [
      { target: "Chi di noi non ha mai sbagliato?", gloss: { es: "¿Quién de nosotros no se ha equivocado nunca?", en: "Which of us has never made a mistake?" } },
      { target: "Vogliamo lavoro, vogliamo futuro, vogliamo rispetto.", gloss: { es: "Queremos trabajo, queremos futuro, queremos respeto.", en: "We want work, we want a future, we want respect." } },
    ],
    pitfalls: {
      es: "La litote (non è un genio) también es una figura, pero sirve sobre todo para la ironía: la verás en la unidad siguiente.",
      en: "Litotes (non è un genio) is a figure too, but it serves mainly for irony: it comes in the next unit.",
    },
  },

  // ── u35 ────────────────────────────────────────────────────
  {
    id: "it-g-proverbi",
    lang: "it",
    cefr: "C2",
    title: { es: "Cómo funcionan los refranes", en: "How proverbs work" },
    short: {
      es: "chi + verbo en singular = el que…: Chi dorme non piglia pesci. A menudo se cita solo la mitad: Chi la fa…",
      en: "chi + singular verb = whoever…: Chi dorme non piglia pesci. Often only half is quoted: Chi la fa…",
    },
    rule: {
      es: "Muchos refranes empiezan con chi (= el que, quien), siempre con el verbo en singular: Chi tace acconsente. Usan formas antiguas o populares (piglia por prende, col por con il) y no se modifican. En la conversación se suele decir solo la primera mitad, porque todos conocen el final: Eh, tra il dire e il fare…",
      en: "Many proverbs start with chi (= whoever, he who), always with a singular verb: Chi tace acconsente. They keep old or popular forms (piglia for prende, col for con il) and are never altered. In conversation people often say just the first half, since everyone knows the ending: Eh, tra il dire e il fare…",
    },
    steps: [
      { es: "chi = la persona que: el verbo va en singular (chi arriva, no «chi arrivano»).", en: "chi = the person who: the verb is singular (chi arriva, not «chi arrivano»)." },
      { es: "No cambies las palabras del refrán, aunque suenen antiguas.", en: "Don't change a proverb's words, even if they sound old." },
      { es: "Si oyes solo el comienzo, completa mentalmente el resto: ahí está el mensaje.", en: "If you hear only the start, complete the rest in your head: that's where the message is." },
    ],
    table: {
      head: ["inizio", "fine"],
      rows: [
        ["Chi dorme", "non piglia pesci."],
        ["Chi tace", "acconsente."],
        ["Chi la fa", "l'aspetti."],
        ["Tra il dire e il fare", "c'è di mezzo il mare."],
        ["Paese che vai,", "usanza che trovi."],
      ],
    },
    examples: [
      { target: "Chi dorme non piglia pesci, quindi alzati!", gloss: { es: "Camarón que se duerme se lo lleva la corriente, ¡así que levántate!", en: "The early bird catches the worm, so get up!" } },
      { target: "Chi ha orecchie per intendere, intenda.", gloss: { es: "El que tenga oídos, que oiga.", en: "Let those who have ears hear." } },
    ],
    pitfalls: {
      es: "Muchos refranes tienen equivalente en español, pero con otras imágenes: no los traduzcas palabra por palabra. «Del dicho al hecho» no es «dal detto al fatto».",
      en: "English equivalents use different images: don't translate word for word. 'Easier said than done' is «tra il dire e il fare c'è di mezzo il mare».",
    },
  },
  {
    id: "it-g-litote-antifrasi",
    lang: "it",
    cefr: "C2",
    title: { es: "Ironía: litote y antífrasis", en: "Irony: litotes and antiphrasis" },
    short: {
      es: "Litote: negar lo contrario (non è un genio = es bastante tonto). Antífrasis: decir lo opuesto (Complimenti! ante un desastre).",
      en: "Litotes: deny the opposite (non è un genio = he's rather dim). Antiphrasis: say the opposite (Complimenti! at a disaster).",
    },
    rule: {
      es: "La ironía italiana se apoya mucho en dos recursos. La litote niega lo contrario de lo que se piensa para atenuarlo: non mi è dispiaciuto (me gustó), non è proprio un genio (es poco inteligente). La antífrasis dice exactamente lo opuesto, y el contexto o la entonación lo revelan: Bel lavoro! ante un trabajo mal hecho.",
      en: "Italian irony relies heavily on two devices. Litotes denies the opposite of what you mean, to soften it: non mi è dispiaciuto (I liked it), non è proprio un genio (he's not bright). Antiphrasis says the exact opposite, and context or intonation gives it away: Bel lavoro! for a botched job.",
    },
    steps: [
      { es: "¿Una negación de algo positivo? Probablemente quiere decir lo contrario, pero suavizado.", en: "A negated positive? It probably means the opposite, softened." },
      { es: "¿Un elogio exagerado en una situación mala? → antífrasis: es una crítica.", en: "Exaggerated praise in a bad situation? → antiphrasis: it's criticism." },
      { es: "Fíjate en proprio, mica, davvero, bello y en el tono: suelen marcar la ironía.", en: "Watch for proprio, mica, davvero, bello and the tone: they often mark irony." },
    ],
    table: {
      head: ["si dice", "si intende"],
      rows: [
        ["Non è un genio.", "È poco intelligente."],
        ["Non mi è dispiaciuto.", "Mi è piaciuto."],
        ["Non è proprio vicinissimo.", "È lontano."],
        ["Complimenti!", "Che disastro!"],
        ["Bella figura!", "Che vergogna!"],
      ],
    },
    examples: [
      { target: "Non è proprio un genio, diciamo.", gloss: { es: "No es precisamente un genio, digamos.", en: "He's not exactly a genius, let's say." } },
      { target: "Quanto sei simpatico quando ti arrabbi!", gloss: { es: "¡Qué simpático eres cuando te enojas! (irónico)", en: "Aren't you charming when you're angry! (ironic)" } },
    ],
    pitfalls: {
      es: "«Non mi dispiace» casi nunca es tibio: suele ser un sí bastante entusiasta. No lo traduzcas como «no me molesta».",
      en: "«Non mi dispiace» is rarely lukewarm: it's usually a fairly keen yes, not 'I don't mind'.",
    },
  },

  // ── u36 ────────────────────────────────────────────────────
  {
    id: "it-g-articolo-nomi-propri",
    lang: "it",
    cefr: "C2",
    title: { es: "El artículo con nombres de persona", en: "The article with people's names" },
    short: {
      es: "Estándar: Giulia, Marco (sin artículo). Norte coloquial: la Giulia, il Marco. Con apellidos célebres: la Callas, il Manzoni.",
      en: "Standard: Giulia, Marco (no article). Colloquial North: la Giulia, il Marco. Famous surnames: la Callas, il Manzoni.",
    },
    rule: {
      es: "En italiano estándar los nombres de pila van sin artículo: Ho visto Giulia. En el norte, sobre todo en Lombardía y Toscana, el artículo ante nombres de mujer (y en Lombardía también de hombre) es muy común al hablar, pero es regional. Con apellidos se usa el artículo para personajes célebres del pasado (il Manzoni, il Petrarca) y, tradicionalmente, para mujeres (la Callas), uso que hoy muchos consideran anticuado.",
      en: "In standard Italian first names take no article: Ho visto Giulia. In the North, especially Lombardy and Tuscany, an article before women's names (and in Lombardy men's too) is very common in speech, but it's regional. With surnames the article is used for famous figures of the past (il Manzoni, il Petrarca) and, traditionally, for women (la Callas), a usage many now find dated.",
    },
    steps: [
      { es: "¿Nombre de pila en un texto o registro neutro? → sin artículo.", en: "A first name in writing or neutral register? → no article." },
      { es: "¿Oyes «la Giulia» en Milán o Florencia? Es regional, no un error de esa persona.", en: "Hear «la Giulia» in Milan or Florence? It's regional, not a mistake." },
      { es: "¿Apellido de un clásico? → il Manzoni, il Boccaccio.", en: "A classic author's surname? → il Manzoni, il Boccaccio." },
    ],
    table: {
      head: ["", "esempio", "uso"],
      rows: [
        ["nome", "Giulia, Marco", "standard"],
        ["articolo + nome", "la Giulia, il Marco", "regionale (Nord)"],
        ["articolo + cognome", "il Manzoni", "autori classici"],
        ["articolo + cognome (donna)", "la Callas", "tradizionale"],
      ],
    },
    examples: [
      { target: "Ho chiamato Giulia, ma non rispondeva.", gloss: { es: "Llamé a Giulia, pero no contestaba.", en: "I called Giulia, but she wasn't answering." } },
      { target: "Il Manzoni scrisse I promessi sposi.", gloss: { es: "Manzoni escribió Los novios.", en: "Manzoni wrote The Betrothed." } },
    ],
    pitfalls: {
      es: "En español nunca se dice «la Giulia» en el registro neutro, y en italiano tampoco: imítalo solo si vives en el norte y hablas en confianza.",
      en: "Don't copy «la Giulia» into your writing: it's fine in northern casual speech, but not standard.",
    },
  },
  {
    id: "it-g-passato-regionale",
    lang: "it",
    cefr: "C2",
    title: { es: "Passato prossimo y passato remoto según la región", en: "Passato prossimo and passato remoto by region" },
    short: {
      es: "Norte: passato prossimo para todo (ieri sono andato). Sur: passato remoto también para lo reciente (ieri andai).",
      en: "North: passato prossimo for everything (ieri sono andato). South: passato remoto even for recent events (ieri andai).",
    },
    rule: {
      es: "La norma dice: passato prossimo para hechos ligados al presente, passato remoto para hechos lejanos y cerrados. En la práctica, en el norte el passato remoto casi ha desaparecido del habla; en Sicilia y en otras zonas del sur, en cambio, se usa en la conversación incluso para ayer o esta mañana. Ambos usos son regionales: en un texto estándar, ieri pide passato prossimo.",
      en: "The rule says: passato prossimo for events linked to the present, passato remoto for distant, closed ones. In practice, the North has almost dropped the passato remoto from speech, while Sicily and other southern areas use it in conversation even for yesterday or this morning. Both are regional: in standard writing, ieri calls for the passato prossimo.",
    },
    steps: [
      { es: "¿Texto estándar y hecho reciente (oggi, ieri)? → passato prossimo.", en: "Standard text and a recent event (oggi, ieri)? → passato prossimo." },
      { es: "¿Relato histórico o literario? → passato remoto.", en: "A historical or literary account? → passato remoto." },
      { es: "¿Oyes «stamattina incontrai» a un siciliano? Uso regional, normal en su habla.", en: "Hear a Sicilian say «stamattina incontrai»? Regional use, normal in their speech." },
    ],
    table: {
      head: ["", "Nord", "standard", "Sud"],
      rows: [
        ["ieri", "sono andato", "sono andato", "andai"],
        ["nel 1990", "sono andato", "andai / sono andato", "andai"],
        ["nel 1492", "arrivò (scritto)", "arrivò", "arrivò"],
      ],
    },
    examples: [
      { target: "Ieri sono andata al mare con mio fratello e i suoi figli.", gloss: { es: "Ayer fui a la playa con mi hermano y sus hijos.", en: "Yesterday I went to the seaside with my brother and his children." } },
      { target: "Stamattina incontrai Rosa al mercato.", gloss: { es: "Esta mañana me encontré con Rosa en el mercado.", en: "This morning I ran into Rosa at the market." } },
    ],
    pitfalls: {
      es: "El español usa el pretérito (fui) donde el italiano del norte y el estándar usan el passato prossimo (sono andato): no traduzcas «ayer fui» por «ieri andai».",
      en: "Like British vs American 'I've just…/I just…', it's a regional difference, but in standard Italian «ieri» takes the passato prossimo.",
    },
  },
  {
    id: "it-g-italiano-svizzero",
    lang: "it",
    cefr: "C2",
    title: { es: "Geosinónimos y el italiano de Suiza", en: "Regional synonyms and Swiss Italian" },
    short: {
      es: "Una cosa, varias palabras: anguria / cocomero. En Suiza: licenza di condurre (patente), natel (cellulare), azione (offerta).",
      en: "One thing, several words: anguria / cocomero. In Switzerland: licenza di condurre (patente), natel (cellulare), azione (offerta).",
    },
    rule: {
      es: "Muchos objetos cotidianos tienen nombres distintos según la región (geosinónimos): todos son italiano correcto, solo cambian de zona. El italiano de Suiza (Tesino y Grisones italófono) es una variedad estándar con sus propios términos, los helvetismos, a menudo calcados del alemán o del francés y usados también en documentos oficiales.",
      en: "Many everyday things have different names by region (regional synonyms): all are correct Italian, just from different areas. Swiss Italian (Ticino and Italian-speaking Graubünden) is a standard variety with its own terms, Helvetisms, often modelled on German or French and used in official documents too.",
    },
    steps: [
      { es: "Si no entiendes una palabra cotidiana, pregunta si es regional: «Come si dice da voi?».", en: "If an everyday word puzzles you, ask if it's regional: «Come si dice da voi?»." },
      { es: "En Suiza usa los términos locales en trámites: licenza di condurre, formulario.", en: "In Switzerland use local terms for paperwork: licenza di condurre, formulario." },
      { es: "En Italia, prefiere la forma más extendida: patente, cellulare, modulo.", en: "In Italy, prefer the most widespread form: patente, cellulare, modulo." },
    ],
    table: {
      head: ["Italia", "Svizzera italiana"],
      rows: [
        ["la patente", "la licenza di condurre"],
        ["il cellulare", "il natel"],
        ["in offerta", "in azione"],
        ["il raccoglitore", "il classatore"],
        ["il modulo", "il formulario"],
      ],
    },
    examples: [
      { target: "In Ticino la patente si chiama licenza di condurre.", gloss: { es: "En el Tesino, la licencia de conducir se llama licenza di condurre.", en: "In Ticino a driving licence is called a licenza di condurre." } },
      { target: "A Milano si dice anguria, a Firenze cocomero.", gloss: { es: "En Milán se dice anguria; en Florencia, cocomero.", en: "In Milan they say anguria, in Florence cocomero." } },
    ],
    pitfalls: {
      es: "«In azione» en Italia no significa «en oferta» sino «en acción»: si lo dices en Roma, no te entenderán.",
      en: "In Italy «in azione» means 'in action', not 'on offer': say it in Rome and you won't be understood.",
    },
  },
];
