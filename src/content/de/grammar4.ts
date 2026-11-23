import type { GrammarPoint } from "../schema";

// Grammar points for German units 25–30 (C1). Linked from the units' pattern items via `grammar`.
// AI drafts: no `reviewed` stamp until a native-level reviewer signs them off (decisions.md 2026-11-16).
export const grammar4: GrammarPoint[] = [
  // ── u25 ──────────────────────────────────────────────────
  {
    id: "de-g-funktionsverbgefuege",
    lang: "de",
    cefr: "C1",
    title: { es: "Verbos de función: acción y estado", en: "Noun–verb phrases: action and state" },
    short: {
      es: "Mismo sustantivo, otro verbo: stellen / setzen / bringen = alguien actúa; stehen / treten / kommen = algo ocurre.",
      en: "Same noun, different verb: stellen / setzen / bringen = someone acts; stehen / treten / kommen = something happens.",
    },
    rule: {
      es: "En los Funktionsverbgefüge el significado está en el sustantivo, y el verbo solo dice quién actúa. Con stellen, setzen o bringen alguien provoca la acción (Die Regierung setzt das Gesetz in Kraft); con stehen, treten o kommen la cosa misma está en ese estado o llega a él (Das Gesetz tritt in Kraft). Son típicos del lenguaje formal, de la prensa y de los contratos.",
      en: "In Funktionsverbgefüge the meaning sits in the noun, and the verb only says who acts. With stellen, setzen or bringen someone causes the action (Die Regierung setzt das Gesetz in Kraft); with stehen, treten or kommen the thing itself is in that state or gets into it (Das Gesetz tritt in Kraft). They are typical of formal language, the press and contracts.",
    },
    steps: [
      { es: "Busca el sustantivo que lleva el significado: Kraft, Diskussion, Abschluss, Sprache.", en: "Find the noun that carries the meaning: Kraft, Diskussion, Abschluss, Sprache." },
      { es: "¿Alguien hace algo con ello? → stellen / setzen / bringen / ziehen.", en: "Is someone doing something to it? → stellen / setzen / bringen / ziehen." },
      { es: "¿La cosa está o entra en ese estado por sí sola? → stehen / treten / kommen.", en: "Is the thing in, or getting into, that state by itself? → stehen / treten / kommen." },
      { es: "Aprende la preposición con el bloque: in Kraft, zur Diskussion, zum Abschluss.", en: "Learn the preposition with the block: in Kraft, zur Diskussion, zum Abschluss." },
    ],
    table: {
      head: ["Aktion (jemand tut etwas)", "Vorgang / Zustand"],
      rows: [
        ["in Kraft setzen", "in Kraft treten"],
        ["zur Diskussion stellen", "zur Diskussion stehen"],
        ["zum Abschluss bringen", "zum Abschluss kommen"],
        ["zur Sprache bringen", "zur Sprache kommen"],
        ["in Betracht ziehen", "in Betracht kommen"],
        ["in Gang setzen", "in Gang kommen"],
      ],
    },
    examples: [
      { target: "Die neue Regelung tritt am ersten Januar in Kraft.", gloss: { es: "La nueva normativa entra en vigor el primero de enero.", en: "The new rules come into force on the first of January." } },
      { target: "Ich möchte noch einen Punkt zur Sprache bringen.", gloss: { es: "Quisiera plantear un punto más.", en: "There's one more point I'd like to raise." } },
      { target: "Ein solcher Preis kommt für uns leider nicht in Betracht.", gloss: { es: "Lamentablemente, un precio así no es una opción para nosotros.", en: "Unfortunately, a price like that isn't an option for us." } },
    ],
    pitfalls: {
      es: "Traducir palabra por palabra da «in Kraft gehen» o «zur Sprache machen». Aprende el bloque entero, con su preposición: entrar en vigor = in Kraft treten; plantear un tema = zur Sprache bringen.",
      en: "Translating word by word gives 'in Kraft gehen' or 'zur Sprache machen'. Learn the whole block with its preposition: come into force = in Kraft treten; bring up a topic = zur Sprache bringen.",
    },
  },
  {
    id: "de-g-bedingungen",
    lang: "de",
    cefr: "C1",
    title: { es: "Condiciones: sofern, vorausgesetzt, es sei denn", en: "Conditions: sofern, vorausgesetzt, es sei denn" },
    short: {
      es: "sofern / falls: verbo al final; vorausgesetzt, (dass) = siempre que; es sei denn = a menos que; im Falle + genitivo.",
      en: "sofern / falls: verb at the end; vorausgesetzt, (dass) = provided; es sei denn = unless; im Falle + genitive.",
    },
    rule: {
      es: "Además de wenn, el alemán formal tiene varias formas de poner una condición. sofern y falls abren una subordinada con el verbo al final. Tras vorausgesetzt y es sei denn puede venir una frase con el orden normal o una con dass; im Falle es una preposición con genitivo, típica de contratos y condiciones generales.",
      en: "Besides wenn, formal German has several ways of setting a condition. sofern and falls open a subordinate clause with the verb at the end. After vorausgesetzt and es sei denn you can use normal word order or a dass clause; im Falle is a preposition with the genitive, typical of contracts and terms and conditions.",
    },
    steps: [
      { es: "¿Es una condición positiva (siempre que)? → sofern / falls / vorausgesetzt.", en: "Is it a positive condition (provided that)? → sofern / falls / vorausgesetzt." },
      { es: "¿Es una excepción (a menos que)? → es sei denn.", en: "Is it an exception (unless)? → es sei denn." },
      { es: "Con sofern / falls / dass, el verbo conjugado va al final.", en: "With sofern / falls / dass, the conjugated verb goes last." },
      { es: "Sin verbo, con un sustantivo: im Falle + genitivo (im Falle einer Absage).", en: "With just a noun: im Falle + genitive (im Falle einer Absage)." },
    ],
    table: {
      head: ["Konnektor", "Beispiel"],
      rows: [
        ["sofern / falls", "…, sofern der Preis stimmt."],
        ["vorausgesetzt, (dass)", "…, vorausgesetzt, der Preis stimmt."],
        ["es sei denn", "…, es sei denn, der Preis steigt."],
        ["im Falle + Gen.", "Im Falle einer Absage …"],
        ["andernfalls", "Andernfalls kündigen wir."],
      ],
    },
    examples: [
      { target: "Wir kommen Ihnen gern entgegen, sofern Sie die Frist einhalten.", gloss: { es: "Con gusto le hacemos una concesión, siempre que cumpla el plazo.", en: "We're happy to meet you halfway, provided you meet the deadline." } },
      { target: "Wir liefern pünktlich, es sei denn, es kommt zu unvorhersehbaren Verzögerungen.", gloss: { es: "Entregamos a tiempo, a menos que haya retrasos imprevistos.", en: "We'll deliver on time, unless there are unforeseen delays." } },
      { target: "Im Falle einer Verspätung erstatten wir Ihnen den vollen Betrag.", gloss: { es: "En caso de retraso, le reembolsamos el importe completo.", en: "In the event of a delay, we will refund the full amount." } },
    ],
    pitfalls: {
      es: "«es sei denn» no es un subjuntivo que haya que conjugar: es una fórmula fija. Y no confundas sofern (siempre que) con sobald (en cuanto).",
      en: "'es sei denn' is a fixed formula, not a verb you conjugate. And don't confuse sofern (provided) with sobald (as soon as).",
    },
  },

  // ── u26 ──────────────────────────────────────────────────
  {
    id: "de-g-konj1-ersatz",
    lang: "de",
    cefr: "C1",
    title: { es: "Estilo indirecto: cuándo entra el Konjunktiv II", en: "Reported speech: when Konjunktiv II steps in" },
    short: {
      es: "Si el Konjunktiv I suena igual que el indicativo (sie haben), usa el II (sie hätten). Futuro: er werde + infinitivo.",
      en: "If Konjunktiv I looks like the indicative (sie haben), use II (sie hätten). Future: er werde + infinitive.",
    },
    rule: {
      es: "En el estilo indirecto escrito, el Konjunktiv I indica que repites palabras de otra persona. Cuando su forma coincide con el indicativo (casi siempre con ich, wir y sie en plural), se reemplaza por el Konjunktiv II; si este también coincide o suena anticuado, se usa würde + infinitivo. El pasado se forma con habe / sei + participio, y el futuro con werde + infinitivo.",
      en: "In written reported speech, Konjunktiv I signals that you are repeating someone else's words. When its form is the same as the indicative (mostly with ich, wir and plural sie), it is replaced by Konjunktiv II; if that also matches or sounds old-fashioned, use würde + infinitive. The past is habe / sei + participle, and the future is werde + infinitive.",
    },
    steps: [
      { es: "Forma el Konjunktiv I: raíz + -e (er komme, er habe, er könne); sein es irregular (er sei).", en: "Form Konjunktiv I: stem + -e (er komme, er habe, er könne); sein is irregular (er sei)." },
      { es: "¿Es igual al indicativo? (sie kommen = sie kommen) → pasa al Konjunktiv II: sie kämen.", en: "Is it the same as the indicative? (sie kommen = sie kommen) → switch to Konjunktiv II: sie kämen." },
      { es: "¿El II también coincide o suena raro (sie arbeiteten)? → würde + infinitivo.", en: "Does II also match or sound odd (sie arbeiteten)? → würde + infinitive." },
      { es: "Pasado: er habe gesagt / sie sei gegangen. Futuro: er werde kommen.", en: "Past: er habe gesagt / sie sei gegangen. Future: er werde kommen." },
    ],
    table: {
      head: ["", "Indikativ", "Konj. I", "im Bericht"],
      rows: [
        ["er", "hat", "habe", "habe"],
        ["sie (Pl.)", "haben", "haben", "hätten"],
        ["er", "kommt", "komme", "komme"],
        ["sie (Pl.)", "kommen", "kommen", "kämen"],
        ["er", "wird", "werde", "werde"],
        ["sie (Pl.)", "arbeiten", "arbeiten", "würden arbeiten"],
      ],
    },
    examples: [
      { target: "Die Demonstranten erklärten, sie hätten lange genug gewartet.", gloss: { es: "Los manifestantes declararon que ya habían esperado bastante.", en: "The protesters said they had waited long enough." } },
      { target: "Der Kanzler kündigte an, er werde die Steuern nicht erhöhen.", gloss: { es: "El canciller anunció que no subiría los impuestos.", en: "The chancellor announced that he would not raise taxes." } },
      { target: "Sie behauptet, sie sei nie dort gewesen.", gloss: { es: "Ella afirma que nunca estuvo allí.", en: "She claims she was never there." } },
    ],
    pitfalls: {
      es: "«Sie sagten, sie haben keine Zeit» no marca nada: parece indicativo. En un texto formal escribe sie hätten. Y al revés: con er / sie en singular, el Konjunktiv I basta (er habe, no «er hätte»).",
      en: "'Sie sagten, sie haben keine Zeit' marks nothing: it looks indicative. In formal writing use sie hätten. The other way round: with singular er / sie, Konjunktiv I is enough (er habe, not 'er hätte').",
    },
  },
  {
    id: "de-g-quellenangabe",
    lang: "de",
    cefr: "C1",
    title: { es: "Citar la fuente: laut, zufolge, nach Angaben", en: "Citing sources: laut, zufolge, nach Angaben" },
    short: {
      es: "laut + dativo (laut Polizei); dativo + zufolge, detrás; nach Angaben + genitivo (nach Angaben der Stadt).",
      en: "laut + dative (laut Polizei); dative + zufolge, after the noun; nach Angaben + genitive (nach Angaben der Stadt).",
    },
    rule: {
      es: "Las noticias casi siempre dicen de dónde viene la información. laut va delante del sustantivo, a menudo sin artículo (laut Polizei); zufolge va detrás de un sustantivo en dativo (dem Bericht zufolge); nach Angaben se combina con genitivo o von. Estas expresiones ocupan la posición 1, así que el verbo conjugado va justo después.",
      en: "News reports almost always say where information comes from. laut goes before the noun, often without an article (laut Polizei); zufolge follows a dative noun (dem Bericht zufolge); nach Angaben combines with a genitive or von. These phrases fill position 1, so the conjugated verb comes straight after.",
    },
    steps: [
      { es: "Elige la expresión: laut (neutra), zufolge (escrita), nach Angaben (datos oficiales).", en: "Choose the phrase: laut (neutral), zufolge (written), nach Angaben (official figures)." },
      { es: "Pon el caso correcto: laut / zufolge + dativo; nach Angaben + genitivo.", en: "Use the right case: laut / zufolge + dative; nach Angaben + genitive." },
      { es: "zufolge siempre va detrás: dem Bericht zufolge.", en: "zufolge always comes after: dem Bericht zufolge." },
      { es: "Luego el verbo conjugado, y después el sujeto: Laut Polizei gab es keine Verletzten.", en: "Then the conjugated verb, then the subject: Laut Polizei gab es keine Verletzten." },
    ],
    table: {
      head: ["Ausdruck", "Beispiel"],
      rows: [
        ["laut + Dat.", "laut Polizei / laut dem Bericht"],
        ["Dat. + zufolge", "dem Bericht zufolge"],
        ["nach Angaben + Gen.", "nach Angaben der Stadt"],
        ["wie … mitteilte", "wie die Stadt mitteilte"],
        ["unter Berufung auf", "unter Berufung auf Insider"],
      ],
    },
    examples: [
      { target: "Dem Bericht zufolge ist die Arbeitslosigkeit gesunken.", gloss: { es: "Según el informe, el desempleo bajó.", en: "According to the report, unemployment has fallen." } },
      { target: "Nach Angaben der Polizei wurde niemand verletzt.", gloss: { es: "Según datos de la policía, nadie resultó herido.", en: "According to police figures, nobody was injured." } },
      { target: "Wie die Stadt mitteilte, bleibt die Brücke gesperrt.", gloss: { es: "Según informó la ciudad, el puente sigue cerrado.", en: "As the city announced, the bridge remains closed." } },
    ],
    pitfalls: {
      es: "Tras la fuente, el verbo va enseguida: Laut Polizei gab es… (no «Laut Polizei es gab…»). Y zufolge nunca va delante con dativo: dem Bericht zufolge, no «zufolge dem Bericht».",
      en: "After the source, the verb comes next: Laut Polizei gab es… (not 'Laut Polizei es gab…'). And zufolge never goes first with a dative: dem Bericht zufolge, not 'zufolge dem Bericht'.",
    },
  },

  // ── u27 ──────────────────────────────────────────────────
  {
    id: "de-g-gerundiv",
    lang: "de",
    cefr: "C1",
    title: { es: "El participio con zu: die zu prüfende These", en: "The zu-participle: die zu prüfende These" },
    short: {
      es: "zu + participio I delante del sustantivo = lo que hay que (o se puede) hacer: die zu prüfende These.",
      en: "zu + present participle before a noun = what must (or can) be done: die zu prüfende These.",
    },
    rule: {
      es: "En textos académicos y administrativos, una relativa con «muss / kann … werden» se condensa en un atributo: die These, die geprüft werden muss → die zu prüfende These. Se forma con zu + participio I (infinitivo + -d) y lleva las terminaciones normales del adjetivo. Con verbos separables, zu va en el medio: die anzuwendende Methode.",
      en: "In academic and official texts, a relative clause with 'muss / kann … werden' is condensed into an attribute: die These, die geprüft werden muss → die zu prüfende These. It is built with zu + present participle (infinitive + -d) and takes normal adjective endings. With separable verbs, zu goes in the middle: die anzuwendende Methode.",
    },
    steps: [
      { es: "Toma el infinitivo y añade -d: prüfen → prüfend.", en: "Take the infinitive and add -d: prüfen → prüfend." },
      { es: "Pon zu delante (o en medio si es separable): zu prüfend, anzuwendend.", en: "Put zu in front (or in the middle if separable): zu prüfend, anzuwendend." },
      { es: "Añade la terminación del adjetivo según artículo y caso: die zu prüfende, ein zu lösendes.", en: "Add the adjective ending for the article and case: die zu prüfende, ein zu lösendes." },
      { es: "Para leerlo, deshazlo: die zu prüfende These = die These, die geprüft werden muss.", en: "To read it, unpack it: die zu prüfende These = die These, die geprüft werden muss." },
    ],
    table: {
      head: ["Relativsatz", "Partizip mit zu"],
      rows: [
        ["die These, die geprüft werden muss", "die zu prüfende These"],
        ["Fragen, die noch geklärt werden müssen", "die noch zu klärenden Fragen"],
        ["ein Risiko, das nicht zu unterschätzen ist", "ein nicht zu unterschätzendes Risiko"],
        ["die Methode, die angewendet werden soll", "die anzuwendende Methode"],
      ],
    },
    examples: [
      { target: "Die zu prüfende Hypothese lautet wie folgt.", gloss: { es: "La hipótesis que hay que comprobar es la siguiente.", en: "The hypothesis to be tested is as follows." } },
      { target: "Das sind die noch zu klärenden Fragen.", gloss: { es: "Estas son las preguntas que aún quedan por aclarar.", en: "These are the questions that still need to be clarified." } },
      { target: "Das ist ein nicht zu unterschätzendes Risiko.", gloss: { es: "Es un riesgo que no hay que subestimar.", en: "That's a risk not to be underestimated." } },
    ],
    pitfalls: {
      es: "No lo confundas con el participio I simple: die prüfende Kommission es la comisión que comprueba (activa); die zu prüfende These es la tesis que se comprueba (pasiva, con obligación).",
      en: "Don't confuse it with the plain present participle: die prüfende Kommission is the committee doing the testing (active); die zu prüfende These is the thesis being tested (passive, with 'must').",
    },
  },
  {
    id: "de-g-verbalisierung",
    lang: "de",
    cefr: "C1",
    title: { es: "Del estilo nominal al verbal (y al revés)", en: "From nominal to verbal style (and back)" },
    short: {
      es: "nach → nachdem, wegen → weil, trotz → obwohl, durch → indem, bei → wenn / als: el sustantivo vuelve a ser verbo.",
      en: "nach → nachdem, wegen → weil, trotz → obwohl, durch → indem, bei → wenn / als: the noun becomes a verb again.",
    },
    rule: {
      es: "El estilo académico prefiere sustantivos con preposición (nach Auswertung der Daten); el habla y los textos claros prefieren verbos con conjunción (nachdem die Daten ausgewertet worden waren). Cada preposición tiene su conjunción equivalente. Al pasar al estilo verbal, el genitivo se convierte en sujeto u objeto, y a menudo hace falta la pasiva.",
      en: "Academic style prefers nouns with prepositions (nach Auswertung der Daten); speech and plain writing prefer verbs with conjunctions (nachdem die Daten ausgewertet worden waren). Each preposition has a matching conjunction. When you switch to verbal style, the genitive becomes a subject or object, and you often need the passive.",
    },
    steps: [
      { es: "Busca la preposición y cámbiala por su conjunción (tabla).", en: "Find the preposition and swap it for its conjunction (table)." },
      { es: "Convierte el sustantivo en verbo: die Auswertung → auswerten.", en: "Turn the noun into a verb: die Auswertung → auswerten." },
      { es: "El genitivo pasa a ser sujeto u objeto; si no hay quién lo hace, usa la pasiva o man.", en: "The genitive becomes subject or object; if there is no doer, use the passive or man." },
      { es: "Verbo conjugado al final de la subordinada.", en: "Conjugated verb at the end of the subordinate clause." },
    ],
    table: {
      head: ["Präposition", "Konjunktion", "Beispiel"],
      rows: [
        ["nach", "nachdem", "nachdem die Daten ausgewertet waren"],
        ["wegen", "weil", "weil Daten fehlten"],
        ["trotz", "obwohl", "obwohl kritisiert wurde"],
        ["durch", "indem", "indem man übt"],
        ["bei", "wenn / als", "wenn es regnet"],
        ["zur / zum", "um … zu / damit", "um das zu klären"],
      ],
    },
    examples: [
      { target: "Nach Auswertung der Daten wurde die Studie veröffentlicht.", gloss: { es: "Una vez analizados los datos, se publicó el estudio.", en: "Once the data had been analysed, the study was published." } },
      { target: "Nachdem die Daten ausgewertet worden waren, wurde die Studie veröffentlicht.", gloss: { es: "Después de que se analizaron los datos, se publicó el estudio.", en: "After the data had been analysed, the study was published." } },
      { target: "Durch eine Vergrößerung der Stichprobe ließe sich die Aussagekraft erhöhen.", gloss: { es: "Ampliando la muestra, los resultados serían más concluyentes.", en: "Enlarging the sample would make the results more conclusive." } },
    ],
    pitfalls: {
      es: "No pongas la conjunción con el sustantivo («nachdem der Auswertung»): nachdem necesita una frase con verbo. Y durch → indem, no «dadurch dass» a medias: indem man übt.",
      en: "Don't put the conjunction with the noun ('nachdem der Auswertung'): nachdem needs a clause with a verb. And durch → indem: indem man übt.",
    },
  },

  // ── u28 ──────────────────────────────────────────────────
  {
    id: "de-g-modalpartikeln-c1",
    lang: "de",
    cefr: "C1",
    title: { es: "Más partículas modales: etwa, bloß, ruhig, wohl, eh", en: "More modal particles: etwa, bloß, ruhig, wohl, eh" },
    short: {
      es: "etwa = sorpresa o temor; bloß / nur = advertencia; ruhig = permiso; wohl = suposición; eh = de todas formas.",
      en: "etwa = surprise or worry; bloß / nur = warning; ruhig = permission; wohl = assumption; eh = anyway.",
    },
    rule: {
      es: "Estas partículas cambian el tono de la frase sin cambiar su contenido. etwa en una pregunta muestra que esperas un «no» (¿no será que…?); bloß o nur en una orden la convierten en advertencia; ruhig anima con amabilidad; wohl marca una suposición, a menudo con el futuro. eh es coloquial y equivale a sowieso.",
      en: "These particles change the tone of the sentence without changing its content. etwa in a question shows you expect a 'no' (surely not…?); bloß or nur turn a command into a warning; ruhig gives friendly encouragement; wohl marks an assumption, often with the future. eh is colloquial and means the same as sowieso.",
    },
    steps: [
      { es: "¿Pregunta con sorpresa o temor? → etwa: Bist du etwa krank?", en: "A question with surprise or worry? → etwa: Bist du etwa krank?" },
      { es: "¿Advertencia? → bloß / nur, con acento: Mach das bloß nicht!", en: "A warning? → bloß / nur, stressed: Mach das bloß nicht!" },
      { es: "¿Permiso amable? → ruhig: Frag ruhig! ¿Suposición? → wohl: Er wird wohl krank sein.", en: "Friendly permission? → ruhig: Frag ruhig! An assumption? → wohl: Er wird wohl krank sein." },
      { es: "Colócalas tras el verbo y los pronombres, nunca en la posición 1.", en: "Place them after the verb and pronouns, never in position 1." },
    ],
    table: {
      head: ["Partikel", "Ton / tone", "Beispiel"],
      rows: [
        ["etwa", "sorpresa / surprise", "Bist du etwa krank?"],
        ["bloß / nur", "advertencia / warning", "Sag das bloß nicht!"],
        ["ruhig", "permiso / permission", "Frag ruhig!"],
        ["wohl", "suposición / assumption", "Er ist wohl krank."],
        ["eh", "da igual / anyway", "Ich komme eh später."],
        ["schon", "seguridad / reassurance", "Das klappt schon."],
      ],
    },
    examples: [
      { target: "Du willst doch nicht etwa schon gehen?", gloss: { es: "¿No me digas que ya te vas?", en: "You're not leaving already, are you?" } },
      { target: "Komm bloß nicht zu spät!", gloss: { es: "¡Ni se te ocurra llegar tarde!", en: "Don't you dare be late!" } },
      { target: "Er wird wohl verschlafen haben.", gloss: { es: "Seguro que se quedó dormido.", en: "He must have overslept." } },
    ],
    pitfalls: {
      es: "etwa como partícula no es «aproximadamente»: en «Bist du etwa krank?» expresa sorpresa. Y etwa no es etwas (algo): ojo al escribir.",
      en: "As a particle, etwa doesn't mean 'about': in 'Bist du etwa krank?' it shows surprise. And etwa isn't etwas (something): mind the spelling.",
    },
  },
  {
    id: "de-g-umgangssprache",
    lang: "de",
    cefr: "C1",
    title: { es: "Lengua hablada y estándar", en: "Spoken and standard German" },
    short: {
      es: "Al hablar: hab, gibt's, 'ne, kriegen, Bock. Por escrito y en situaciones formales: habe, gibt es, eine, bekommen, Lust.",
      en: "In speech: hab, gibt's, 'ne, kriegen, Bock. In writing and formal settings: habe, gibt es, eine, bekommen, Lust.",
    },
    rule: {
      es: "El alemán hablado acorta formas (ich hab, gibt's, 'ne) y usa palabras coloquiales (kriegen, Bock, wurscht, daneben). En el habla también se oyen estructuras que el estándar evita, como wegen + dativo (wegen dem Wetter) o am + infinitivo (ich bin am Arbeiten). Lo importante a nivel C1 es entenderlas y saber cambiar al registro neutro o formal cuando la situación lo pide.",
      en: "Spoken German shortens forms (ich hab, gibt's, 'ne) and uses colloquial words (kriegen, Bock, wurscht, daneben). In speech you'll also hear structures standard German avoids, like wegen + dative (wegen dem Wetter) or am + infinitive (ich bin am Arbeiten). At C1 the point is to understand them and switch to neutral or formal style when the situation calls for it.",
    },
    steps: [
      { es: "¿Con quién hablas? Amistades → coloquial está bien; trabajo, cartas, desconocidos → neutro o formal.", en: "Who are you talking to? Friends → colloquial is fine; work, letters, strangers → neutral or formal." },
      { es: "Completa las formas cortas: hab → habe, 'ne → eine, gibt's → gibt es.", en: "Expand the short forms: hab → habe, 'ne → eine, gibt's → gibt es." },
      { es: "Cambia las palabras coloquiales: kriegen → bekommen, Bock → Lust.", en: "Swap colloquial words: kriegen → bekommen, Bock → Lust." },
      { es: "En registro formal, opiniones con distancia: Ich halte das für unangemessen.", en: "In formal style, distanced opinions: Ich halte das für unangemessen." },
    ],
    table: {
      head: ["umgangssprachlich", "neutral / formal"],
      rows: [
        ["Ich hab keinen Bock.", "Ich habe keine Lust."],
        ["Gibt's noch Kaffee?", "Gibt es noch Kaffee?"],
        ["Hast du 'ne Minute?", "Hast du eine Minute?"],
        ["wegen dem Wetter", "wegen des Wetters"],
        ["Ich bin am Arbeiten.", "Ich arbeite gerade."],
        ["Das finde ich daneben.", "Ich halte das für unangemessen."],
      ],
    },
    examples: [
      { target: "Das finde ich ehrlich gesagt ziemlich daneben.", gloss: { es: "Sinceramente, me parece bastante fuera de lugar.", en: "Honestly, I think that's pretty out of line." } },
      { target: "Ich halte dieses Verhalten für unangemessen.", gloss: { es: "Considero que esa conducta es inapropiada.", en: "I consider this behaviour inappropriate." } },
      { target: "Ich habe keine Lust.", gloss: { es: "No tengo ganas.", en: "I don't feel like it." } },
    ],
    pitfalls: {
      es: "Lo coloquial no es un error, pero en un correo de trabajo «Ich hab keinen Bock» suena muy fuera de lugar. Y al revés: hablar siempre como un texto formal suena rígido entre amistades.",
      en: "Colloquial German isn't wrong, but in a work email 'Ich hab keinen Bock' is badly out of place. The reverse is true too: always talking like a formal text sounds stiff among friends.",
    },
  },

  // ── u29 ──────────────────────────────────────────────────
  {
    id: "de-g-konnektoren-c1",
    lang: "de",
    cefr: "C1",
    title: { es: "Conectores para argumentar: zumal, insofern als, wohingegen", en: "Connectors for arguing: zumal, insofern als, wohingegen" },
    short: {
      es: "zumal = sobre todo porque; insofern … als = en la medida en que; wohingegen = mientras que. Verbo al final.",
      en: "zumal = especially since; insofern … als = insofar as; wohingegen = whereas. Verb at the end.",
    },
    rule: {
      es: "Estos conectores dan precisión a una argumentación. zumal añade una razón de peso; insofern … als limita una afirmación (solo es verdad en ese aspecto); wohingegen contrasta dos hechos. Los tres abren una subordinada con el verbo al final; geschweige denn (y mucho menos) va tras una frase negativa y no lleva verbo propio.",
      en: "These connectors make an argument more precise. zumal adds an extra, weighty reason; insofern … als limits a claim (it's only true in that respect); wohingegen contrasts two facts. All three open a subordinate clause with the verb at the end; geschweige denn (let alone) follows a negative clause and has no verb of its own.",
    },
    steps: [
      { es: "¿Añades una razón más fuerte? → zumal.", en: "Adding a stronger reason? → zumal." },
      { es: "¿Limitas lo que dijiste? → insofern, als (insofern puede ir en la frase principal).", en: "Limiting what you said? → insofern, als (insofern can sit in the main clause)." },
      { es: "¿Contrastas dos hechos? → wohingegen (o während).", en: "Contrasting two facts? → wohingegen (or während)." },
      { es: "Tras una negación, algo aún menos probable → geschweige denn + sustantivo.", en: "After a negative, something even less likely → geschweige denn + noun." },
    ],
    table: {
      head: ["Konnektor", "Bedeutung", "Beispiel"],
      rows: [
        ["zumal", "sobre todo porque / especially since", "…, zumal es billiger ist."],
        ["insofern, als", "en la medida en que / insofar as", "…, insofern, als es Geld spart."],
        ["wohingegen", "mientras que / whereas", "…, wohingegen andere zögern."],
        ["geschweige denn", "y mucho menos / let alone", "kaum Zeit, geschweige denn Geld"],
      ],
    },
    examples: [
      { target: "Die Maßnahme ist sinnvoll, zumal sie kaum Kosten verursacht.", gloss: { es: "La medida tiene sentido, sobre todo porque apenas genera costos.", en: "The measure makes sense, especially since it costs hardly anything." } },
      { target: "Das Konzept überzeugt insofern, als es Ökologie und Wirtschaft verbindet.", gloss: { es: "El concepto convence en la medida en que une ecología y economía.", en: "The concept is convincing insofar as it combines ecology and economics." } },
      { target: "Viele können sich kaum die Miete leisten, geschweige denn ein Elektroauto.", gloss: { es: "Muchas personas apenas pueden pagar el alquiler, y mucho menos un auto eléctrico.", en: "Many people can barely afford the rent, let alone an electric car." } },
    ],
    pitfalls: {
      es: "No confundas zumal (sobre todo porque) con zumindest (al menos), ni wohingegen (conjunción, verbo al final) con hingegen (adverbio, verbo en 2.ª posición: Der Süden hingegen setzt auf Solarenergie).",
      en: "Don't confuse zumal (especially since) with zumindest (at least), or wohingegen (conjunction, verb last) with hingegen (adverb, verb second: Der Süden hingegen setzt auf Solarenergie).",
    },
  },
  {
    id: "de-g-konj2-passiv",
    lang: "de",
    cefr: "C1",
    title: { es: "Pasado irreal en pasiva: wäre gebaut worden", en: "Past unreal passive: wäre gebaut worden" },
    short: {
      es: "Pasiva: wäre + participio + worden. Con modal: hätte + participio + werden + modal (hätte gebaut werden müssen).",
      en: "Passive: wäre + participle + worden. With a modal: hätte + participle + werden + modal (hätte gebaut werden müssen).",
    },
    rule: {
      es: "Para hablar de lo que habría pasado (o se debería haber hecho) en pasiva, se combina el Konjunktiv II del pasado con la pasiva. Sin modal, el auxiliar es wäre y al final va worden: Die Brücke wäre gebaut worden. Con un modal, el auxiliar pasa a ser hätte y la frase termina en participio + werden + modal en infinitivo: Die Brücke hätte gebaut werden müssen.",
      en: "To talk about what would have happened (or should have been done) in the passive, combine past Konjunktiv II with the passive. Without a modal, the auxiliary is wäre and worden goes at the end: Die Brücke wäre gebaut worden. With a modal, the auxiliary becomes hätte and the clause ends in participle + werden + modal infinitive: Die Brücke hätte gebaut werden müssen.",
    },
    steps: [
      { es: "¿Hay modal (können, müssen, sollen)? Si no → wäre … participio + worden.", en: "Is there a modal (können, müssen, sollen)? If not → wäre … participle + worden." },
      { es: "Con modal → hätte en 2.ª posición (o al final de la subordinada, delante del bloque).", en: "With a modal → hätte in 2nd position (or, in a subordinate clause, before the verb block)." },
      { es: "Al final: participio + werden + modal en infinitivo: verhindert werden können.", en: "At the end: participle + werden + modal infinitive: verhindert werden können." },
      { es: "Nunca «gekonnt» ni «gemusst» aquí: el modal queda en infinitivo.", en: "Never 'gekonnt' or 'gemusst' here: the modal stays an infinitive." },
    ],
    table: {
      head: ["", "Aktiv", "Passiv"],
      rows: [
        ["ohne Modalverb", "man hätte gebaut", "es wäre gebaut worden"],
        ["+ können", "man hätte bauen können", "es hätte gebaut werden können"],
        ["+ müssen", "man hätte bauen müssen", "es hätte gebaut werden müssen"],
      ],
    },
    examples: [
      { target: "Die Katastrophe hätte verhindert werden können.", gloss: { es: "La catástrofe se podría haber evitado.", en: "The disaster could have been prevented." } },
      { target: "Wäre die Steuer früher eingeführt worden, lägen die Emissionen heute niedriger.", gloss: { es: "Si el impuesto se hubiera introducido antes, hoy las emisiones serían más bajas.", en: "Had the tax been introduced earlier, emissions would be lower today." } },
      { target: "Die Brücke hätte früher gebaut werden müssen.", gloss: { es: "Se debería haber construido el puente antes.", en: "The bridge should have been built earlier." } },
    ],
    pitfalls: {
      es: "Dos errores típicos: «hätte gebaut worden» (sin modal la pasiva lleva wäre) y «wäre gebaut werden müssen» (con modal el auxiliar es hätte). En español todo es «haber», así que el alemán obliga a decidir.",
      en: "Two classic mistakes: 'hätte gebaut worden' (without a modal the passive takes wäre) and 'wäre gebaut werden müssen' (with a modal the auxiliary is hätte). English uses 'have' for both, so German makes you choose.",
    },
  },

  // ── u30 ──────────────────────────────────────────────────
  {
    id: "de-g-stilebenen",
    lang: "de",
    cefr: "C1",
    title: { es: "Niveles de estilo: coloquial, neutro, elevado", en: "Levels of style: colloquial, neutral, elevated" },
    short: {
      es: "Muchas ideas tienen tres palabras: kriegen (coloquial) · bekommen (neutro) · erhalten (elevado).",
      en: "Many ideas have three words: kriegen (colloquial) · bekommen (neutral) · erhalten (elevated).",
    },
    rule: {
      es: "El alemán distingue claramente entre registro coloquial (umgangssprachlich), neutro y elevado (gehoben). El registro elevado aparece en cartas oficiales, discursos y literatura, a menudo con fórmulas como «zu dürfen» o «erlauben Sie mir». A nivel C1 se espera que elijas la palabra según la situación, no solo según el significado.",
      en: "German clearly separates colloquial (umgangssprachlich), neutral and elevated (gehoben) style. Elevated style shows up in official letters, speeches and literature, often with formulas like 'zu dürfen' or 'erlauben Sie mir'. At C1 you're expected to pick the word for the situation, not just for its meaning.",
    },
    steps: [
      { es: "Piensa en la situación: amistades, trabajo, carta oficial o discurso.", en: "Think about the setting: friends, work, an official letter or a speech." },
      { es: "En la duda, usa la palabra neutra: bekommen, essen, verstehen.", en: "When in doubt, use the neutral word: bekommen, essen, verstehen." },
      { es: "En cartas y discursos, la elevada: erhalten, speisen, begreifen.", en: "In letters and speeches, the elevated one: erhalten, speisen, begreifen." },
      { es: "Mantén el mismo registro en todo el texto.", en: "Keep the same register throughout the text." },
    ],
    table: {
      head: ["umgangssprachlich", "neutral", "gehoben"],
      rows: [
        ["kriegen", "bekommen", "erhalten"],
        ["futtern", "essen", "speisen"],
        ["abhauen", "weggehen", "sich entfernen"],
        ["kapieren", "verstehen", "begreifen"],
        ["pennen", "schlafen", "ruhen"],
      ],
    },
    examples: [
      { target: "Hast du meine Nachricht gekriegt?", gloss: { es: "¿Te llegó mi mensaje? (coloquial)", en: "Did you get my message? (colloquial)" } },
      { target: "Wir haben Ihr Schreiben erhalten.", gloss: { es: "Hemos recibido su carta.", en: "We have received your letter." } },
      { target: "Wir würden uns freuen, Sie bei uns begrüßen zu dürfen.", gloss: { es: "Nos encantaría recibirle.", en: "We would be delighted to welcome you." } },
    ],
    pitfalls: {
      es: "Mezclar registros suena raro: «Sehr geehrte Damen und Herren, ich hab Ihre Mail gekriegt» combina un saludo formal con palabras de la calle. Revisa el texto entero.",
      en: "Mixing registers sounds odd: 'Sehr geehrte Damen und Herren, ich hab Ihre Mail gekriegt' pairs a formal greeting with street words. Check the whole text.",
    },
  },
  {
    id: "de-g-wer-der",
    lang: "de",
    cefr: "C1",
    title: { es: "Relativas sin antecedente: Wer …, (der) …", en: "Free relative clauses: Wer …, (der) …" },
    short: {
      es: "wer = quien, was = lo que (sin sustantivo antes). La principal puede retomarlo con der / dem / das: Wer fragt, dem …",
      en: "wer = whoever, was = whatever (no noun before it). The main clause can pick it up with der / dem / das: Wer fragt, dem …",
    },
    rule: {
      es: "wer y was pueden abrir una relativa sin antecedente: Wer zuletzt lacht, … (quien ríe último). La frase principal puede retomarla con un demostrativo en el caso que necesite: der (nominativo), den (acusativo), dem (dativo). Si los dos casos coinciden en nominativo, der se puede omitir; es la estructura de muchos refranes.",
      en: "wer and was can open a relative clause with no antecedent: Wer zuletzt lacht, … (whoever laughs last). The main clause can pick it up with a demonstrative in the case it needs: der (nominative), den (accusative), dem (dative). If both are nominative, der can be dropped; many proverbs are built this way.",
    },
    steps: [
      { es: "Persona general → wer; cosa o idea general → was.", en: "A person in general → wer; a thing or idea in general → was." },
      { es: "Verbo de la relativa al final: Wer sich nicht an die Regeln hält, …", en: "Relative clause verb at the end: Wer sich nicht an die Regeln hält, …" },
      { es: "¿Qué caso pide la principal? Nominativo → (der); dativo → dem; acusativo → den.", en: "Which case does the main clause need? Nominative → (der); dative → dem; accusative → den." },
      { es: "Después, verbo conjugado: Wer fragt, dem wird geholfen.", en: "Then the conjugated verb: Wer fragt, dem wird geholfen." },
    ],
    table: {
      head: ["Struktur", "Beispiel"],
      rows: [
        ["Wer …, (der) …", "Wer zuletzt lacht, lacht am besten."],
        ["Wer …, dem …", "Wer fragt, dem wird geholfen."],
        ["Wer …, den …", "Wer zu spät kommt, den bestraft das Leben."],
        ["Was …, (das) …", "Was ich nicht weiß, macht mich nicht heiß."],
      ],
    },
    examples: [
      { target: "Wer zuletzt lacht, lacht am besten.", gloss: { es: "El que ríe último ríe mejor.", en: "He who laughs last laughs best." } },
      { target: "Wer sich nicht an die Regeln hält, der muss mit Konsequenzen rechnen.", gloss: { es: "Quien no respeta las reglas tiene que atenerse a las consecuencias.", en: "Anyone who doesn't follow the rules has to expect consequences." } },
      { target: "Was ich nicht weiß, macht mich nicht heiß.", gloss: { es: "Ojos que no ven, corazón que no siente.", en: "What I don't know can't hurt me." } },
    ],
    pitfalls: {
      es: "«Der zuletzt lacht, …» calca «el que ríe…»: sin sustantivo antes, el alemán usa wer, no der. Y «Das ich nicht weiß» es un error: lo que = was.",
      en: "'Der zuletzt lacht, …' is wrong: with no noun before it, German uses wer, not der. And 'Das ich nicht weiß' is a mistake: whatever / what = was.",
    },
  },
];
