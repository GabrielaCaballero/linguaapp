import type { GrammarPoint } from "../schema";

// Grammar points for German units 31–36 (C2). Linked from the units' pattern items via `grammar`.
// AI drafts: no `reviewed` stamp until a native-level reviewer signs them off (decisions.md 2026-11-16).
export const grammar5: GrammarPoint[] = [
  // ── u31 ──────────────────────────────────────────────────
  {
    id: "de-g-vermutung-modal",
    lang: "de",
    cefr: "C2",
    title: { es: "Suposiciones con verbos modales", en: "Supposition with modal verbs" },
    short: {
      es: "muss (casi seguro) > müsste > dürfte (probable) > könnte (posible). Pasado: muss es gewusst haben.",
      en: "muss (almost certain) > müsste > dürfte (probable) > könnte (possible). Past: muss es gewusst haben.",
    },
    rule: {
      es: "Los verbos modales no solo expresan obligación o permiso: también dicen cuán seguro está quien habla. muss indica casi certeza, müsste y dürfte una fuerte probabilidad, kann y könnte una posibilidad, y kann nicht que algo es imposible. Para suponer algo del pasado se usa el modal con el infinitivo pasado: participio + haben o sein.",
      en: "Modal verbs don't only express obligation or permission: they also show how sure the speaker is. muss means near certainty, müsste and dürfte strong probability, kann and könnte possibility, and kann nicht that something is impossible. To guess about the past, use the modal with the past infinitive: participle + haben or sein.",
    },
    steps: [
      { es: "¿Es una suposición, no una obligación? Entonces piensa en el grado de certeza.", en: "Is it a guess, not an obligation? Then think about how sure you are." },
      { es: "Elige el modal: muss > müsste > dürfte > kann / könnte.", en: "Pick the modal: muss > müsste > dürfte > kann / könnte." },
      { es: "¿Hablas del presente? Modal + infinitivo: Er dürfte zu Hause sein.", en: "About the present? Modal + infinitive: Er dürfte zu Hause sein." },
      { es: "¿Del pasado? Modal + participio + haben / sein: Er muss es vergessen haben.", en: "About the past? Modal + participle + haben / sein: Er muss es vergessen haben." },
    ],
    table: {
      head: ["Sicherheit", "Modalverb", "Beispiel"],
      rows: [
        ["≈ 100 %", "muss", "Er muss krank sein."],
        ["≈ 90 %", "müsste", "Er müsste krank sein."],
        ["≈ 75 %", "dürfte", "Er dürfte krank sein."],
        ["≈ 50 %", "kann / könnte", "Er könnte krank sein."],
        ["≈ 0 %", "kann nicht", "Er kann nicht krank sein."],
        ["Vergangenheit", "muss … haben", "Er muss krank gewesen sein."],
      ],
    },
    examples: [
      { target: "Er dürfte inzwischen angekommen sein.", gloss: { es: "Para ahora ya debe de haber llegado (es lo más probable).", en: "He has probably arrived by now." } },
      { target: "Das muss ein Missverständnis sein.", gloss: { es: "Seguro que es un malentendido.", en: "That must be a misunderstanding." } },
      { target: "Sie muss den Termin vergessen haben.", gloss: { es: "Seguro que se le olvidó la cita.", en: "She must have forgotten the appointment." } },
    ],
    pitfalls: {
      es: "«Er dürfte krank sein» no significa «tiene permiso para estar enfermo», sino «probablemente está enfermo». Y para el pasado no uses el perfecto del modal: «Sie hat es vergessen müssen» es una obligación; la suposición es «Sie muss es vergessen haben».",
      en: "'Er dürfte krank sein' doesn't mean 'he's allowed to be ill' but 'he's probably ill'. And for the past don't use the modal's perfect: 'Sie hat es vergessen müssen' is an obligation; the guess is 'Sie muss es vergessen haben'.",
    },
  },
  {
    id: "de-g-bedeutungspaare",
    lang: "de",
    cefr: "C2",
    title: { es: "Pares que se confunden: scheinbar, anscheinend…", en: "Confusable pairs: scheinbar, anscheinend…" },
    short: {
      es: "scheinbar = solo en apariencia; anscheinend = al parecer. -isch suele ser negativo frente a -lich: kindlich / kindisch.",
      en: "scheinbar = only seemingly; anscheinend = apparently. -isch is often negative next to -lich: kindlich / kindisch.",
    },
    rule: {
      es: "En el nivel más alto importan los matices. scheinbar dice que algo parece cierto pero no lo es; anscheinend, que probablemente sí lo es. Cuando de una misma raíz salen un adjetivo en -lich y otro en -isch, el de -isch suele ser despectivo (kindisch, weibisch). Otros pares cambian por completo el sentido: geschäftlich (de negocios) y geschäftig (ajetreado), vermutlich (probablemente) y vermeintlich (supuesto, pero falso).",
      en: "At the highest level, nuance matters. scheinbar says something looks true but isn't; anscheinend, that it probably is. When one stem gives both a -lich and an -isch adjective, the -isch one is often pejorative (kindisch, weibisch). Other pairs change the meaning entirely: geschäftlich (on business) vs geschäftig (bustling), vermutlich (probably) vs vermeintlich (supposed, but false).",
    },
    steps: [
      { es: "¿La apariencia engaña? → scheinbar. ¿Probablemente es así? → anscheinend.", en: "Is the appearance misleading? → scheinbar. Is it probably true? → anscheinend." },
      { es: "¿Hay -lich y -isch? La forma en -isch suele ser un reproche.", en: "Are there both -lich and -isch forms? The -isch one is usually a reproach." },
      { es: "¿Se creía algo que resultó falso? → vermeintlich; si solo es probable → vermutlich.", en: "Was something believed that turned out false? → vermeintlich; if merely probable → vermutlich." },
    ],
    table: {
      head: ["Wort", "≠ Wort"],
      rows: [
        ["scheinbar (nur dem Schein nach)", "anscheinend (wie es aussieht)"],
        ["kindlich (wie ein Kind)", "kindisch (unreif)"],
        ["geschäftlich (beruflich)", "geschäftig (sehr aktiv)"],
        ["vermutlich (wahrscheinlich)", "vermeintlich (irrtümlich angenommen)"],
      ],
    },
    examples: [
      { target: "Die Lage ist nur scheinbar ruhig.", gloss: { es: "La situación solo parece tranquila (pero no lo está).", en: "The situation only looks calm (it isn't really)." } },
      { target: "Anscheinend hat niemand etwas bemerkt.", gloss: { es: "Por lo visto, nadie se dio cuenta de nada.", en: "Apparently nobody noticed anything." } },
      { target: "Hör auf, dich so kindisch zu benehmen!", gloss: { es: "¡Deja de portarte de forma tan infantil!", en: "Stop behaving so childishly!" } },
    ],
    pitfalls: {
      es: "En el habla mucha gente usa scheinbar en lugar de anscheinend; en un texto cuidado se nota. Y «kindlich» no es un insulto: decir que alguien se comporta kindlich puede ser hasta un elogio.",
      en: "In speech many people use scheinbar for anscheinend; in careful writing it shows. And 'kindlich' isn't an insult: saying someone behaves kindlich can even be a compliment.",
    },
  },

  // ── u32 ──────────────────────────────────────────────────
  {
    id: "de-g-amtspraepositionen",
    lang: "de",
    cefr: "C2",
    title: { es: "Preposiciones del lenguaje oficial", en: "Prepositions of official language" },
    short: {
      es: "seitens, zwecks, mangels, infolge, ungeachtet + genitivo; gemäß + dativo. Plural sin artículo: dativo (mangels Beweisen).",
      en: "seitens, zwecks, mangels, infolge, ungeachtet + genitive; gemäß + dative. Plural without article: dative (mangels Beweisen).",
    },
    rule: {
      es: "Las cartas oficiales, las leyes y los contratos usan preposiciones que casi no aparecen al hablar. La mayoría rige genitivo. Si el genitivo no se distingue, como en un plural sin artículo, se usa el dativo: mangels Beweisen. gemäß rige dativo y puede ir delante o detrás del sustantivo.",
      en: "Official letters, laws and contracts use prepositions that hardly appear in speech. Most govern the genitive. If the genitive isn't visible, as in a plural with no article, the dative is used instead: mangels Beweisen. gemäß governs the dative and can go before or after its noun.",
    },
    steps: [
      { es: "Identifica la preposición y su caso (casi siempre genitivo).", en: "Identify the preposition and its case (nearly always genitive)." },
      { es: "Con artículo o adjetivo, el genitivo se ve: seitens der Stadt, zwecks schneller Prüfung.", en: "With an article or adjective the genitive shows: seitens der Stadt, zwecks schneller Prüfung." },
      { es: "Plural sin artículo ni adjetivo → dativo: mangels Beweisen.", en: "Plural with no article or adjective → dative: mangels Beweisen." },
      { es: "Para entender el texto, tradúcelas: zwecks = um … zu, mangels = weil … fehlt.", en: "To understand the text, unpack them: zwecks = um … zu, mangels = weil … fehlt." },
    ],
    table: {
      head: ["Präposition", "Kasus", "Beispiel"],
      rows: [
        ["seitens", "Genitiv", "seitens der Behörde"],
        ["zwecks", "Genitiv", "zwecks Prüfung"],
        ["mangels", "Genitiv", "mangels Beteiligung"],
        ["infolge", "Genitiv", "infolge des Unfalls"],
        ["ungeachtet", "Genitiv", "ungeachtet der Kosten"],
        ["vorbehaltlich", "Genitiv", "vorbehaltlich der Zustimmung"],
        ["gemäß", "Dativ", "dem Vertrag gemäß"],
      ],
    },
    examples: [
      { target: "Seitens der Behörde bestehen keine Bedenken.", gloss: { es: "Por parte de la autoridad no hay objeciones.", en: "The authority has no objections." } },
      { target: "Zwecks Prüfung Ihres Antrags benötigen wir weitere Unterlagen.", gloss: { es: "Para revisar su solicitud, necesitamos más documentos.", en: "We need further documents in order to process your application." } },
      { target: "Mangels Beweisen wurde das Verfahren eingestellt.", gloss: { es: "Por falta de pruebas, se archivó el proceso.", en: "The case was dropped for lack of evidence." } },
    ],
    pitfalls: {
      es: "«mangels Beweise» parece genitivo, pero sin artículo no se reconoce: escribe mangels Beweisen. Y no abuses de estas preposiciones en tus propios textos: fuera de lo administrativo suenan rígidas.",
      en: "'mangels Beweise' looks genitive, but without an article nobody can tell: write mangels Beweisen. And don't overuse these prepositions yourself: outside official writing they sound stiff.",
    },
  },
  {
    id: "de-g-nominalketten",
    lang: "de",
    cefr: "C2",
    title: { es: "Cadenas nominales y verbos vacíos", en: "Noun chains and empty verbs" },
    short: {
      es: "La acción va en un sustantivo (die Auszahlung) y el verbo casi no dice nada (erfolgt). Para entender: vuelve al verbo.",
      en: "The action sits in a noun (die Auszahlung) and the verb says almost nothing (erfolgt). To understand it: go back to the verb.",
    },
    rule: {
      es: "El alemán administrativo encadena sustantivos con genitivos (die Überprüfung der Einhaltung der Vorschriften) y usa verbos casi vacíos como erfolgen, vornehmen, stattfinden o sich befinden. Así el texto es impersonal: no dice quién hace qué. Para entenderlo o escribirlo más claro, convierte el sustantivo de acción en verbo y busca el sujeto.",
      en: "Officialese chains nouns with genitives (die Überprüfung der Einhaltung der Vorschriften) and uses near-empty verbs like erfolgen, vornehmen, stattfinden or sich befinden. That makes the text impersonal: it doesn't say who does what. To understand it, or to write it more clearly, turn the action noun back into a verb and find the subject.",
    },
    steps: [
      { es: "Busca el verbo vacío: erfolgen, vornehmen, stattfinden.", en: "Find the empty verb: erfolgen, vornehmen, stattfinden." },
      { es: "Busca el sustantivo que lleva la acción: Auszahlung → auszahlen.", en: "Find the noun carrying the action: Auszahlung → auszahlen." },
      { es: "Cada genitivo de la cadena suele ser un objeto: Prüfung der Unterlagen → die Unterlagen prüfen.", en: "Each genitive in the chain is usually an object: Prüfung der Unterlagen → die Unterlagen prüfen." },
      { es: "Pregunta quién actúa (la oficina, usted) y escribe una frase con verbo.", en: "Ask who acts (the office, you) and write a sentence with a verb." },
    ],
    table: {
      head: ["Amtsdeutsch", "Klartext"],
      rows: [
        ["Die Auszahlung erfolgt im Mai.", "Wir zahlen im Mai aus."],
        ["Eine Prüfung wird vorgenommen.", "Wir prüfen das."],
        ["nach Eingang der Unterlagen", "wenn die Unterlagen da sind"],
        ["Wir bitten um Übersendung …", "Bitte schicken Sie uns …"],
      ],
    },
    examples: [
      { target: "Die Auszahlung erfolgt nach Eingang aller Unterlagen.", gloss: { es: "El pago se efectúa una vez recibidos todos los documentos.", en: "Payment will be made once all documents have been received." } },
      { target: "Wir bitten um Übersendung der fehlenden Unterlagen bis Freitag.", gloss: { es: "Le rogamos que nos envíe los documentos que faltan antes del viernes.", en: "We request that you send the missing documents by Friday." } },
    ],
    pitfalls: {
      es: "Las cadenas de genitivos se leen de atrás hacia delante: en «die Prüfung der Einhaltung der Vorschriften», lo que se controla es que se cumplan las normas. Si te pierdes, empieza por el último sustantivo.",
      en: "Genitive chains are read from the back: in 'die Prüfung der Einhaltung der Vorschriften', what's checked is that the rules are kept. If you get lost, start from the last noun.",
    },
  },

  // ── u33 ──────────────────────────────────────────────────
  {
    id: "de-g-konj1-wunsch",
    lang: "de",
    cefr: "C2",
    title: { es: "Konjunktiv I de deseo e instrucción", en: "Konjunktiv I for wishes and instructions" },
    short: {
      es: "Es lebe…! (deseo) · Man nehme… (instrucción) · Gegeben sei… (supuesto) · Gott sei Dank (fórmula).",
      en: "Es lebe…! (wish) · Man nehme… (instruction) · Gegeben sei… (assumption) · Gott sei Dank (set phrase).",
    },
    rule: {
      es: "El Konjunktiv I tiene usos más antiguos que el estilo indirecto. Con la 3.ª persona expresa un deseo (Es lebe der König!, Möge er in Frieden ruhen), una instrucción impersonal en recetas, prospectos o manuales (Man nehme…) o un supuesto en textos matemáticos (Gegeben sei ein Dreieck). Hoy suena elevado y sobrevive sobre todo en fórmulas fijas.",
      en: "Konjunktiv I has uses older than reported speech. In the 3rd person it expresses a wish (Es lebe der König!, Möge er in Frieden ruhen), an impersonal instruction in recipes, leaflets or manuals (Man nehme…) or an assumption in mathematical texts (Gegeben sei ein Dreieck). Today it sounds elevated and survives mostly in set phrases.",
    },
    steps: [
      { es: "Forma el Konjunktiv I: raíz + -e (leb-e, nehm-e, komm-e); sein → sei.", en: "Form Konjunktiv I: stem + -e (leb-e, nehm-e, komm-e); sein → sei." },
      { es: "¿Deseo? Verbo delante o con es: Es lebe…, Möge…", en: "A wish? Verb first or with es: Es lebe…, Möge…" },
      { es: "¿Instrucción impersonal? man + Konjunktiv I: Man nehme…", en: "An impersonal instruction? man + Konjunktiv I: Man nehme…" },
      { es: "En textos actuales, reconócelo más que usarlo: suena solemne.", en: "In today's texts, recognise it rather than use it: it sounds solemn." },
    ],
    table: {
      head: ["Gebrauch", "Beispiel"],
      rows: [
        ["Wunsch", "Es lebe die Freiheit!"],
        ["Wunsch mit mögen", "Möge dieser Tag nie enden."],
        ["Anweisung", "Man nehme drei Eier."],
        ["Annahme", "Gegeben sei ein Dreieck ABC."],
        ["feste Formel", "Gott sei Dank! · Es sei denn …"],
        ["formeller Hinweis", "Es sei darauf hingewiesen, dass …"],
      ],
    },
    examples: [
      { target: "Es lebe die Freiheit!", gloss: { es: "¡Viva la libertad!", en: "Long live freedom!" } },
      { target: "Man nehme drei Eier und ein Pfund Mehl.", gloss: { es: "Tómense tres huevos y medio kilo de harina.", en: "Take three eggs and a pound of flour." } },
      { target: "Möge dieser Tag nie enden.", gloss: { es: "Ojalá este día no termine nunca.", en: "May this day never end." } },
    ],
    pitfalls: {
      es: "«Es lebt die Freiheit» describe un hecho; el deseo es Es lebe. Y «Man nimmt drei Eier» es una receta moderna correcta, pero no es lo mismo que el tono antiguo de Man nehme.",
      en: "'Es lebt die Freiheit' states a fact; the wish is Es lebe. And 'Man nimmt drei Eier' is a correct modern recipe, but lacks the old-fashioned tone of Man nehme.",
    },
  },
  {
    id: "de-g-konzessiv-c2",
    lang: "de",
    cefr: "C2",
    title: { es: "Concesivas elevadas: so … auch, mag … noch so", en: "Elevated concessives: so … auch, mag … noch so" },
    short: {
      es: "So klug er auch ist, … · Mag er noch so bitten, … · Sei es aus Angst, sei es … · Wie dem auch sei, …",
      en: "So klug er auch ist, … · Mag er noch so bitten, … · Sei es aus Angst, sei es … · Wie dem auch sei, …",
    },
    rule: {
      es: "Además de obwohl, el alemán culto tiene concesivas que subrayan que nada cambia el resultado. so + adjetivo + auch abre una subordinada con el verbo al final (So klug er auch ist). mag … (auch) noch so pone el modal delante (Mag er noch so bitten). Después de estas frases, la principal suele empezar con su propio elemento y no con el verbo: …, hier irrt er sich. sei es … sei es presenta dos alternativas que dan igual.",
      en: "Besides obwohl, educated German has concessives that stress that nothing changes the outcome. so + adjective + auch opens a subordinate clause with the verb at the end (So klug er auch ist). mag … (auch) noch so puts the modal first (Mag er noch so bitten). After these clauses, the main clause usually starts with its own element rather than the verb: …, hier irrt er sich. sei es … sei es presents two alternatives that make no difference.",
    },
    steps: [
      { es: "«Por muy… que»: so + adjetivo + auch …, verbo al final.", en: "'However…': so + adjective + auch …, verb at the end." },
      { es: "«Por más que»: Mag + sujeto + (auch) noch so + infinitivo.", en: "'No matter how much': Mag + subject + (auch) noch so + infinitive." },
      { es: "Después, empieza la principal con sujeto u otro elemento: …, er irrt sich / hier irrt er sich.", en: "Then start the main clause with the subject or another element: …, er irrt sich / hier irrt er sich." },
      { es: "Dos opciones indiferentes: sei es A, sei es B.", en: "Two alternatives that don't matter: sei es A, sei es B." },
    ],
    table: {
      head: ["Struktur", "Beispiel"],
      rows: [
        ["so + Adj. + auch", "So klug er auch sein mag, …"],
        ["wie + Adv. + auch", "Wie sehr sie sich auch bemühte, …"],
        ["mag … noch so", "Mag er auch noch so bitten, …"],
        ["sei es … sei es", "sei es aus Angst, sei es aus Trägheit"],
        ["Formel", "Wie dem auch sei, …"],
      ],
    },
    examples: [
      { target: "So klug er auch sein mag, hier irrt er sich.", gloss: { es: "Por muy listo que sea, aquí se equivoca.", en: "However clever he may be, he's wrong here." } },
      { target: "Mag er auch noch so bitten, ich bleibe dabei.", gloss: { es: "Por más que me ruegue, no cambio de opinión.", en: "However much he begs, I'm sticking to my decision." } },
      { target: "Sei es aus Angst, sei es aus Bequemlichkeit: Niemand widersprach.", gloss: { es: "Ya fuera por miedo o por comodidad, nadie le llevó la contraria.", en: "Whether out of fear or out of convenience, nobody objected." } },
    ],
    pitfalls: {
      es: "No olvides el auch: «So klug er ist, …» suena incompleto. Y no confundas mag (concesivo: aunque) con möge (deseo: ojalá).",
      en: "Don't drop the auch: 'So klug er ist, …' sounds unfinished. And don't confuse mag (concessive: even if) with möge (wish: may).",
    },
  },

  // ── u34 ──────────────────────────────────────────────────
  {
    id: "de-g-ironie-litotes",
    lang: "de",
    cefr: "C2",
    title: { es: "Ironía y atenuación: nicht gerade, alles andere als", en: "Irony and understatement: nicht gerade, alles andere als" },
    short: {
      es: "nicht gerade billig = caro; nicht ganz unschuldig = algo culpable; alles andere als = nada; ja toll = lo contrario.",
      en: "nicht gerade billig = expensive; nicht ganz unschuldig = partly to blame; alles andere als = not at all; ja toll = the opposite.",
    },
    rule: {
      es: "El alemán suele criticar sin decirlo directamente. La lítotes niega lo contrario de lo que se piensa (nicht gerade billig, nicht ganz unwitzig) y así atenúa o hace más elegante la crítica. alles andere als niega con fuerza. La ironía, en cambio, exagera el elogio (Das hast du ja toll hingekriegt) y se reconoce por el contexto, la entonación y partículas como ja.",
      en: "German often criticises without saying it outright. Litotes denies the opposite of what you mean (nicht gerade billig, nicht ganz unwitzig), softening the criticism or making it wittier. alles andere als is a strong denial. Irony, by contrast, overdoes the praise (Das hast du ja toll hingekriegt) and is recognised by context, intonation and particles like ja.",
    },
    steps: [
      { es: "¿Ves nicht gerade / nicht ganz + adjetivo? Entiende el contrario, suavizado.", en: "See nicht gerade / nicht ganz + adjective? Read it as the opposite, softened." },
      { es: "¿nicht ganz un-? Doble negación: más bien sí (nicht ganz unschuldig = algo culpable).", en: "nicht ganz un-? Double negative: rather yes (nicht ganz unschuldig = partly guilty)." },
      { es: "alles andere als + adjetivo = en absoluto.", en: "alles andere als + adjective = not at all." },
      { es: "¿Elogio exagerado con ja en una situación mala? Es ironía.", en: "Over-the-top praise with ja in a bad situation? It's irony." },
    ],
    table: {
      head: ["Gesagt", "Gemeint"],
      rows: [
        ["nicht gerade billig", "ziemlich teuer"],
        ["nicht ganz unschuldig", "mitschuldig"],
        ["nicht ganz unwitzig", "ziemlich witzig"],
        ["alles andere als leicht", "sehr schwer"],
        ["Das hast du ja toll gemacht!", "Das war ein Fehler."],
      ],
    },
    examples: [
      { target: "Das Essen war nicht gerade billig.", gloss: { es: "La comida no fue precisamente barata.", en: "The meal wasn't exactly cheap." } },
      { target: "Die Rede war alles andere als überzeugend.", gloss: { es: "El discurso fue de todo menos convincente.", en: "The speech was anything but convincing." } },
      { target: "Das hast du ja toll hingekriegt.", gloss: { es: "Pues sí que te quedó bien. (irónico)", en: "Well, you've made a fine job of that. (ironic)" } },
    ],
    pitfalls: {
      es: "«nicht gerade» no significa «no exactamente» en sentido literal: es una crítica cortés. Y «alles andere als gut» no es «todo lo demás es bueno», sino «nada bueno».",
      en: "'nicht gerade' isn't a literal 'not precisely': it's a polite criticism. And 'alles andere als gut' doesn't mean 'everything else is good' but 'not good at all'.",
    },
  },
  {
    id: "de-g-abwertende-wortbildung",
    lang: "de",
    cefr: "C2",
    title: { es: "Palabras para quejarse: Ge-…-e, -erei y cruces", en: "Words that complain: Ge-…-e, -erei and blends" },
    short: {
      es: "Ge- + raíz + -e = neutro despectivo (das Gerede); raíz + -erei = femenino (die Fragerei); cruces: verschlimmbessern.",
      en: "Ge- + stem + -e = pejorative neuter (das Gerede); stem + -erei = feminine (die Fragerei); blends: verschlimmbessern.",
    },
    rule: {
      es: "El alemán crea sustantivos para una acción repetida que molesta. Ge- + raíz + -e da un neutro sin plural (das Gerede, das Gejammer, das Gerenne); -erei o -elei da un femenino (die Fragerei, die Streiterei, die Drängelei). Los cruces o palabras maleta unen dos palabras con ironía: verschlimmbessern (verschlimmern + verbessern), jein (ja + nein).",
      en: "German forms nouns for a repeated, annoying action. Ge- + stem + -e gives a neuter with no plural (das Gerede, das Gejammer, das Gerenne); -erei or -elei gives a feminine (die Fragerei, die Streiterei, die Drängelei). Blends join two words ironically: verschlimmbessern (verschlimmern + verbessern), jein (ja + nein).",
    },
    steps: [
      { es: "Toma la raíz del verbo: reden → red-, jammern → jammer-.", en: "Take the verb stem: reden → red-, jammern → jammer-." },
      { es: "Ge- + raíz + -e → das Gerede (si la raíz termina en -er o -el, sin -e: das Gejammer).", en: "Ge- + stem + -e → das Gerede (if the stem ends in -er or -el, no -e: das Gejammer)." },
      { es: "O raíz + -erei → die Fragerei (verbos en -eln: -elei, die Drängelei).", en: "Or stem + -erei → die Fragerei (verbs in -eln: -elei, die Drängelei)." },
      { es: "Suele ir con adjetivos como ewig o ständig: das ewige Gejammer.", en: "It often comes with adjectives like ewig or ständig: das ewige Gejammer." },
    ],
    table: {
      head: ["Verb", "Ge-…-e", "-erei"],
      rows: [
        ["reden", "das Gerede", "die Rederei"],
        ["rennen", "das Gerenne", "die Rennerei"],
        ["jammern", "das Gejammer", "die Jammerei"],
        ["fragen", "das Gefrage", "die Fragerei"],
        ["drängeln", "das Gedrängel", "die Drängelei"],
      ],
    },
    examples: [
      { target: "Das ewige Gejammer geht mir auf die Nerven.", gloss: { es: "Tanto lloriqueo me saca de quicio.", en: "All this constant whining gets on my nerves." } },
      { target: "Hör doch endlich mit dieser ewigen Fragerei auf!", gloss: { es: "¡Deja ya de preguntar todo el tiempo!", en: "Stop all these endless questions!" } },
      { target: "Er hat den Text so lange verschlimmbessert, bis ihn keiner mehr verstand.", gloss: { es: "Retocó tanto el texto para «mejorarlo» que al final nadie lo entendía.", en: "He 'improved' the text so much that in the end nobody understood it." } },
    ],
    pitfalls: {
      es: "das Rennen (la carrera) es neutro y no molesta; das Gerenne sí. Y estos sustantivos no se usan en plural: «die Gerede» es un error.",
      en: "das Rennen (the race) is neutral; das Gerenne is annoying. And these nouns aren't used in the plural: 'die Gerede' is wrong.",
    },
  },

  // ── u35 ──────────────────────────────────────────────────
  {
    id: "de-g-standardvarietaeten",
    lang: "de",
    cefr: "C2",
    title: { es: "Un idioma, tres estándares: Alemania, Austria, Suiza", en: "One language, three standards: Germany, Austria, Switzerland" },
    short: {
      es: "Jänner, Paradeiser (AT); Velo, Trottoir, ss en vez de ß (CH); ich bin gesessen (sur, AT, CH). Todo es estándar.",
      en: "Jänner, Paradeiser (AT); Velo, Trottoir, ss for ß (CH); ich bin gesessen (south, AT, CH). All standard.",
    },
    rule: {
      es: "El alemán es pluricéntrico: Alemania, Austria y Suiza tienen cada una su variedad estándar, con su propio diccionario y todas correctas. No hay que confundirlas con los dialectos. Las diferencias están sobre todo en el vocabulario, en algunas formas gramaticales (en el sur, Austria y Suiza: ich bin gesessen, gelegen, gestanden) y, en Suiza, en la ortografía: no se usa la ß.",
      en: "German is pluricentric: Germany, Austria and Switzerland each have their own standard variety, with its own dictionary, all of them correct. Don't confuse them with dialects. The differences lie mainly in vocabulary, in some grammatical forms (in the south, Austria and Switzerland: ich bin gesessen, gelegen, gestanden) and, in Switzerland, in spelling: ß isn't used.",
    },
    steps: [
      { es: "¿Una palabra rara en un texto austríaco o suizo? Probablemente es estándar allí, no un error.", en: "An odd word in an Austrian or Swiss text? It's probably standard there, not a mistake." },
      { es: "Austria: Jänner, Paradeiser, Marille, Obers, Erdapfel.", en: "Austria: Jänner, Paradeiser, Marille, Obers, Erdapfel." },
      { es: "Suiza: Velo, Trottoir, parkieren, ss en lugar de ß.", en: "Switzerland: Velo, Trottoir, parkieren, ss instead of ß." },
      { es: "sitzen, liegen, stehen: perfecto con haben en el norte y con sein en el sur.", en: "sitzen, liegen, stehen: perfect with haben in the north, with sein in the south." },
    ],
    table: {
      head: ["D", "A", "CH"],
      rows: [
        ["Januar", "Jänner", "Januar"],
        ["Tomate", "Paradeiser", "Tomate"],
        ["Fahrrad", "Fahrrad", "Velo"],
        ["Bürgersteig", "Gehsteig", "Trottoir"],
        ["Abitur", "Matura", "Matura"],
        ["ich habe gesessen", "ich bin gesessen", "ich bin gesessen"],
        ["Straße", "Straße", "Strasse"],
      ],
    },
    examples: [
      { target: "Im Januar fahren wir zum Skifahren.", gloss: { es: "En enero nos vamos a esquiar.", en: "In January we're going skiing." } },
      { target: "Das Fahrrad steht vor dem Haus.", gloss: { es: "La bici está delante de la casa.", en: "The bike is outside the house." } },
      { target: "In der Schweiz wird das Eszett nicht verwendet.", gloss: { es: "En Suiza no se usa la letra ß (eszett).", en: "In Switzerland the letter ß (eszett) isn't used." } },
    ],
    pitfalls: {
      es: "El alemán estándar de Suiza no es el suizo alemán: el Velo y el Trottoir se escriben en el diario, pero Grüezi mitenand o Chuchichäschtli son dialecto hablado. Y «Strasse» en un texto suizo no es una falta.",
      en: "Swiss Standard German isn't Swiss German dialect: Velo and Trottoir appear in the newspaper, while Grüezi mitenand or Chuchichäschtli are spoken dialect. And 'Strasse' in a Swiss text isn't a mistake.",
    },
  },
  {
    id: "de-g-erstarrte-formen",
    lang: "de",
    cefr: "C2",
    title: { es: "Formas antiguas en expresiones fijas", en: "Old forms frozen in set phrases" },
    short: {
      es: "Genitivo adverbial (eines Tages, meines Erachtens), dativo con -e (zu Hause, dem Manne) y ward = wurde.",
      en: "Adverbial genitive (eines Tages, meines Erachtens), dative with -e (zu Hause, dem Manne) and ward = wurde.",
    },
    rule: {
      es: "Muchas formas que el alemán ya no usa libremente siguen vivas en expresiones fijas. El genitivo funcionaba como adverbio (eines Tages, guten Mutes, unverrichteter Dinge), el dativo singular llevaba -e (dem Manne, im Hause, zu Hause) y el pretérito de werden era ward. Hoy aparecen en literatura, en lenguaje formal o con intención humorística, y se aprenden como bloques.",
      en: "Many forms German no longer uses freely live on in set phrases. The genitive worked as an adverb (eines Tages, guten Mutes, unverrichteter Dinge), the dative singular took -e (dem Manne, im Hause, zu Hause) and the past of werden was ward. Today they appear in literature, in formal language or for humorous effect, and are learned as blocks.",
    },
    steps: [
      { es: "¿Un genitivo sin preposición ni sustantivo del que dependa? Es un adverbio fosilizado.", en: "A genitive with no preposition or noun it depends on? It's a frozen adverb." },
      { es: "¿Un dativo con -e (dem Manne)? Forma antigua: hoy se dice dem Mann.", en: "A dative with -e (dem Manne)? An old form: today it's dem Mann." },
      { es: "ward = wurde; solo en textos literarios o en broma.", en: "ward = wurde; only in literary texts or as a joke." },
      { es: "No las modifiques: guten Mutes, nunca «gutes Mutes».", en: "Don't change them: guten Mutes, never 'gutes Mutes'." },
    ],
    table: {
      head: ["Form", "Beispiel", "heute"],
      rows: [
        ["Genitiv", "eines schönen Tages", "an einem schönen Tag"],
        ["Genitiv", "meines Erachtens", "meiner Meinung nach"],
        ["Genitiv", "guten Mutes sein", "zuversichtlich sein"],
        ["Dativ-e", "dem Manne", "dem Mann"],
        ["Präteritum", "er ward", "er wurde"],
      ],
    },
    examples: [
      { target: "Meines Erachtens ist diese Regel längst überholt.", gloss: { es: "A mi juicio, esta regla quedó obsoleta hace tiempo.", en: "In my view, this rule is long outdated." } },
      { target: "Unverrichteter Dinge mussten wir wieder abziehen.", gloss: { es: "Tuvimos que irnos sin haber logrado nada.", en: "We had to leave empty-handed." } },
      { target: "Er ward nicht mehr gesehen.", gloss: { es: "Nunca más se lo volvió a ver.", en: "He was never seen again." } },
    ],
    pitfalls: {
      es: "No construyas nuevas frases con estas formas: «Ich ward müde» o «mit dem Freunde» suenan a parodia. Úsalas solo en las expresiones fijas.",
      en: "Don't build new sentences with these forms: 'Ich ward müde' or 'mit dem Freunde' sound like parody. Use them only in the set phrases.",
    },
  },

  // ── u36 ──────────────────────────────────────────────────
  {
    id: "de-g-indirekte-rede-text",
    lang: "de",
    cefr: "C2",
    title: { es: "Estilo indirecto a lo largo de un texto", en: "Reported speech across a whole text" },
    short: {
      es: "El Konjunktiv I sigue marcando la cita sin «dijo». Preguntas: ob / qu-; órdenes: sollen o mögen.",
      en: "Konjunktiv I keeps marking the quote without 'he said'. Questions: ob / wh-words; commands: sollen or mögen.",
    },
    rule: {
      es: "En la prensa, el verbo introductorio (sagte, erklärte) aparece una vez y luego el Konjunktiv I basta para saber que se sigue citando, frase tras frase. Si una frase pasa al indicativo, el lector entiende que habla el periodista. Las preguntas se citan con ob (sí/no) o con la palabra interrogativa, y las órdenes con sollen (o mögen, más cortés), también en Konjunktiv.",
      en: "In the press, the introducing verb (sagte, erklärte) appears once, and after that Konjunktiv I alone tells the reader the quote continues, sentence after sentence. If a sentence switches to the indicative, the reader takes it as the journalist speaking. Questions are reported with ob (yes/no) or the question word, and commands with sollen (or the more polite mögen), also in Konjunktiv.",
    },
    steps: [
      { es: "Introduce la cita una vez: Der Minister erklärte, …", en: "Introduce the quote once: Der Minister erklärte, …" },
      { es: "Sigue con Konjunktiv I en cada frase (o II si el I coincide con el indicativo).", en: "Keep using Konjunktiv I in every sentence (or II where I matches the indicative)." },
      { es: "Pregunta sí/no → ob + verbo al final; pregunta con W- → la misma palabra.", en: "Yes/no question → ob + verb at the end; wh-question → the same question word." },
      { es: "Orden → sollen; petición cortés → mögen: Man möge warten.", en: "Command → sollen; polite request → mögen: Man möge warten." },
    ],
    table: {
      head: ["direkt", "berichtet"],
      rows: [
        ["„Ich bin unschuldig.“", "Er sei unschuldig."],
        ["„Wir haben nichts gewusst.“", "Sie hätten nichts gewusst."],
        ["„Ist das belegt?“", "…, ob das belegt sei."],
        ["„Wer hat das gesagt?“", "…, wer das gesagt habe."],
        ["„Halten Sie sich an die Fakten!“", "Man solle sich an die Fakten halten."],
      ],
    },
    examples: [
      { target: "Der Minister erklärte, er habe von nichts gewusst. Man habe ihn nicht informiert.", gloss: { es: "El ministro declaró que no sabía nada. Según él, nadie lo había informado.", en: "The minister said he had known nothing. Nobody had informed him, he said." } },
      { target: "Die Sprecherin fragte, ob die Vorwürfe überhaupt belegt seien.", gloss: { es: "La portavoz preguntó si las acusaciones estaban siquiera probadas.", en: "The spokeswoman asked whether the allegations had even been substantiated." } },
      { target: "Er sagte, die Journalisten sollten sich an die Fakten halten.", gloss: { es: "Dijo que los periodistas debían atenerse a los hechos.", en: "He said the journalists should stick to the facts." } },
    ],
    pitfalls: {
      es: "Pasar al indicativo a mitad de la cita cambia el sentido: «Man hat ihn nicht informiert» lo afirma el periodista. Y en la orden indirecta no uses el imperativo: Man solle warten, no «Warten Sie».",
      en: "Switching to the indicative mid-quote changes the meaning: 'Man hat ihn nicht informiert' is the journalist's own claim. And reported commands don't use the imperative: Man solle warten, not 'Warten Sie'.",
    },
  },
  {
    id: "de-g-vorfeld",
    lang: "de",
    cefr: "C2",
    title: { es: "Énfasis en la primera posición", en: "Emphasis in first position" },
    short: {
      es: "Lo que va antes del verbo recibe el foco: Gewonnen hat keiner. Selten war … Verlierer sind die Mieter.",
      en: "What comes before the verb gets the focus: Gewonnen hat keiner. Selten war … Verlierer sind die Mieter.",
    },
    rule: {
      es: "En la frase principal, el verbo conjugado ocupa el segundo lugar, pero el primero puede ocuparlo casi cualquier elemento. Lo normal es el sujeto o un complemento de tiempo; poner ahí un participio, un predicado, un adverbio como selten o toda una subordinada lo destaca. La prensa y los comentarios usan mucho este recurso para sonar contundentes.",
      en: "In a main clause the conjugated verb sits in second place, but almost anything can fill first place. Normally it's the subject or a time phrase; putting a participle, a predicate, an adverb like selten or a whole clause there highlights it. The press and opinion pieces use this a lot to sound punchy.",
    },
    steps: [
      { es: "Elige lo que quieres destacar: el participio, el predicado o un adverbio.", en: "Pick what you want to highlight: the participle, the predicate or an adverb." },
      { es: "Ponlo en la posición 1.", en: "Put it in position 1." },
      { es: "El verbo conjugado va en la posición 2, siempre.", en: "The conjugated verb goes in position 2, always." },
      { es: "El sujeto pasa detrás del verbo: Gewonnen hat keiner.", en: "The subject moves after the verb: Gewonnen hat keiner." },
    ],
    table: {
      head: ["neutral", "betont"],
      rows: [
        ["Keiner hat gewonnen.", "Gewonnen hat keiner."],
        ["Die Mieter sind die Verlierer.", "Verlierer sind die Mieter."],
        ["Ein Kommentar war selten so …", "Selten war ein Kommentar so …"],
        ["Das ist brisant, was sie verschweigt.", "Was sie verschweigt, ist brisant."],
      ],
    },
    examples: [
      { target: "Gewonnen hat am Ende keiner.", gloss: { es: "Al final no ganó nadie.", en: "In the end, nobody won." } },
      { target: "Verlierer dieser Reform sind vor allem die Mieter.", gloss: { es: "Los que más pierden con esta reforma son, sobre todo, los inquilinos.", en: "Those who lose most from this reform are, above all, tenants." } },
      { target: "Selten war ein Kommentar so tendenziös wie dieser.", gloss: { es: "Pocas veces un comentario fue tan tendencioso como este.", en: "Rarely has a commentary been as biased as this one." } },
    ],
    pitfalls: {
      es: "Solo cabe un elemento antes del verbo: «Gewonnen keiner hat» o «Selten ein Kommentar war» son errores. Y no lo uses en cada frase: el énfasis constante cansa.",
      en: "Only one element fits before the verb: 'Gewonnen keiner hat' or 'Selten ein Kommentar war' are wrong. And don't use it in every sentence: constant emphasis wears thin.",
    },
  },
];
