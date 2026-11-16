import type { GrammarPoint } from "../schema";

// Grammar points for German units 17–24 (B1–B2). Linked from the units' pattern items via `grammar`.
export const grammar3: GrammarPoint[] = [
  // ── u17 ──────────────────────────────────────────────────
  {
    id: "de-g-adjektiv-ein",
    lang: "de",
    cefr: "B1",
    title: { es: "Adjetivos tras ein, kein y mein", en: "Adjective endings after ein, kein and mein" },
    short: {
      es: "Tras ein: ein guter (m), eine gute (f), ein gutes (n); acusativo masculino, dativo y plural: -en.",
      en: "After ein: ein guter (m), eine gute (f), ein gutes (n); masculine accusative, all datives and plurals: -en.",
    },
    rule: {
      es: "Tras ein, kein y los posesivos, alguien tiene que mostrar el género y el caso. Donde ein no tiene terminación (ein Film, ein Buch), el adjetivo la toma: -er en masculino y -es en neutro; con eine, el adjetivo lleva -e. En acusativo masculino, en todo el dativo y en plural (keine, meine) el adjetivo termina en -en.",
      en: "After ein, kein and possessives, something has to show gender and case. Where ein has no ending (ein Film, ein Buch), the adjective takes it: -er for masculine, -es for neuter; with eine, the adjective takes -e. In the masculine accusative, in every dative and in the plural (keine, meine) the adjective ends in -en.",
    },
    steps: [
      { es: "Busca el género del sustantivo (der Film, die Idee, das Buch) o si es plural.", en: "Find the noun's gender (der Film, die Idee, das Buch), or whether it is plural." },
      { es: "Decide el caso: sujeto → nominativo; objeto directo → acusativo; tras mit, von, zu… → dativo.", en: "Decide the case: subject → nominative; direct object → accusative; after mit, von, zu… → dative." },
      { es: "Si el artículo es ein sin terminación, el adjetivo marca el género: -er (m) o -es (n). Con eine: -e.", en: "If the article is a bare ein, the adjective marks the gender: -er (m) or -es (n). With eine: -e." },
      { es: "Si el artículo ya tiene terminación propia (einen, einem, einer, keine en plural), el adjetivo lleva -en.", en: "If the article already has its own ending (einen, einem, einer, plural keine), the adjective takes -en." },
    ],
    table: {
      head: ["", "m", "f", "n", "Plural"],
      rows: [
        ["Nom.", "ein guter Film", "eine gute Idee", "ein gutes Buch", "keine guten Filme"],
        ["Akk.", "einen guten Film", "eine gute Idee", "ein gutes Buch", "keine guten Filme"],
        ["Dat.", "einem guten Film", "einer guten Idee", "einem guten Buch", "keinen guten Filmen"],
      ],
    },
    examples: [
      { target: "Das ist ein interessanter Artikel.", gloss: { es: "Es un artículo interesante.", en: "That's an interesting article." } },
      { target: "Ich habe einen spannenden Film gesehen.", gloss: { es: "Vi una película muy emocionante.", en: "I watched an exciting film." } },
      { target: "Das ist eine gute Idee.", gloss: { es: "Es una buena idea.", en: "That's a good idea." } },
      { target: "Sie kauft nur noch am Wochenende eine gedruckte Zeitung.", gloss: { es: "Ella ya solo compra un periódico impreso los fines de semana.", en: "She only buys a printed newspaper at weekends now." } },
    ],
    pitfalls: {
      es: "«ein gute Film» es un error frecuente: ein no muestra que Film es masculino, así que lo tiene que mostrar el adjetivo: ein guter Film. En español el adjetivo solo concuerda (buen/buena); en alemán además «trabaja» por el artículo.",
      en: "'ein gute Film' is a common mistake: ein doesn't show that Film is masculine, so the adjective has to: ein guter Film. English adjectives never change, so this extra step is easy to forget.",
    },
  },
  {
    id: "de-g-adjektiv-der",
    lang: "de",
    cefr: "B1",
    title: { es: "Adjetivos tras der, die, das", en: "Adjective endings after der, die, das" },
    short: {
      es: "Tras der/die/das: -e en nominativo singular y en acusativo f/n; en todos los demás casos, -en.",
      en: "After der/die/das: -e in the nominative singular and the accusative f/n; everywhere else, -en.",
    },
    rule: {
      es: "El artículo definido ya muestra el género y el caso, así que el adjetivo solo necesita una terminación «débil»: -e o -en. Lleva -e en cinco casillas (der/die/das en nominativo singular, die/das en acusativo); en todas las demás, -en. Lo mismo vale tras dieser, jeder y welcher.",
      en: "The definite article already shows gender and case, so the adjective only needs a 'weak' ending: -e or -en. It takes -e in five cells (nominative singular der/die/das, accusative die/das); everywhere else it's -en. The same goes after dieser, jeder and welcher.",
    },
    steps: [
      { es: "Busca el género del sustantivo o si es plural.", en: "Find the noun's gender, or whether it is plural." },
      { es: "Decide el caso según la función en la frase.", en: "Decide the case from the word's job in the sentence." },
      { es: "¿Nominativo singular, o acusativo femenino o neutro? → -e: der neue Kollege, die neue Idee.", en: "Nominative singular, or feminine or neuter accusative? → -e: der neue Kollege, die neue Idee." },
      { es: "Todo lo demás (acusativo masculino, dativo, genitivo, plural) → -en: den neuen Kollegen.", en: "Everything else (masculine accusative, dative, genitive, plural) → -en: den neuen Kollegen." },
    ],
    table: {
      head: ["", "m", "f", "n", "Plural"],
      rows: [
        ["Nom.", "der neue", "die neue", "das neue", "die neuen"],
        ["Akk.", "den neuen", "die neue", "das neue", "die neuen"],
        ["Dat.", "dem neuen", "der neuen", "dem neuen", "den neuen"],
        ["Gen.", "des neuen", "der neuen", "des neuen", "der neuen"],
      ],
    },
    examples: [
      { target: "Der neue Kollege ist sehr nett.", gloss: { es: "El compañero nuevo es muy simpático.", en: "The new colleague is very nice." } },
      { target: "Ich kenne den neuen Kollegen.", gloss: { es: "Conozco al compañero nuevo.", en: "I know the new colleague." } },
      { target: "Hast du den Artikel über das neue Stadion gelesen?", gloss: { es: "¿Leíste el artículo sobre el estadio nuevo?", en: "Have you read the article about the new stadium?" } },
      { target: "Die aktuellen Nachrichten sind nicht gut.", gloss: { es: "Las noticias de hoy no son buenas.", en: "The latest news isn't good." } },
    ],
    pitfalls: {
      es: "«den neue Kollegen» es incorrecto: en acusativo masculino el adjetivo lleva -en, igual que el artículo: den neuen Kollegen. Truco: si el artículo termina en -n o -m (den, dem), el adjetivo lleva -en.",
      en: "'den neue Kollegen' is wrong: in the masculine accusative the adjective takes -en, like the article: den neuen Kollegen. Tip: if the article ends in -n or -m (den, dem), the adjective takes -en.",
    },
  },
  {
    id: "de-g-meinung",
    lang: "de",
    cefr: "B1",
    title: { es: "Dar tu opinión", en: "Giving your opinion" },
    short: {
      es: "Ich finde, dass + verbo al final; Meiner Meinung nach + verbo en 2.ª posición.",
      en: "Ich finde, dass + verb at the end; Meiner Meinung nach + verb in second position.",
    },
    rule: {
      es: "Con Ich finde / glaube / denke, dass… la opinión va en una subordinada, así que el verbo conjugado se va al final. Meiner Meinung nach ocupa la posición 1 de la frase: el verbo va justo después y el sujeto detrás. Para reaccionar: Da stimme ich dir zu (estoy de acuerdo) o Das sehe ich anders (no estoy de acuerdo).",
      en: "With Ich finde / glaube / denke, dass… the opinion sits in a subordinate clause, so the conjugated verb goes to the end. Meiner Meinung nach fills position 1 of the sentence: the verb comes straight after and the subject follows. To react: Da stimme ich dir zu (I agree) or Das sehe ich anders (I see it differently).",
    },
    steps: [
      { es: "Elige cómo empezar: Ich finde, dass… o Meiner Meinung nach…", en: "Choose your opener: Ich finde, dass… or Meiner Meinung nach…" },
      { es: "Con dass: sujeto después de dass y verbo conjugado al final.", en: "With dass: subject after dass, conjugated verb at the end." },
      { es: "Con Meiner Meinung nach: verbo enseguida, luego el sujeto.", en: "With Meiner Meinung nach: verb straight away, then the subject." },
      { es: "Para responder: Da stimme ich dir zu / Da hast du recht / Das sehe ich anders.", en: "To respond: Da stimme ich dir zu / Da hast du recht / Das sehe ich anders." },
    ],
    table: {
      head: ["Struktur", "Beispiel"],
      rows: [
        ["Ich finde, dass …", "Ich finde, dass es zu teuer ist."],
        ["Ich finde, …", "Ich finde, es ist zu teuer."],
        ["Meiner Meinung nach …", "Meiner Meinung nach ist es zu teuer."],
        ["zustimmen", "Da stimme ich dir zu."],
        ["widersprechen", "Das sehe ich anders."],
      ],
    },
    examples: [
      { target: "Ich finde, dass das eine gute Idee ist.", gloss: { es: "Me parece que es una buena idea.", en: "I think that's a good idea." } },
      { target: "Meiner Meinung nach ist das Projekt viel zu teuer.", gloss: { es: "En mi opinión, el proyecto es demasiado caro.", en: "In my opinion, the project is far too expensive." } },
      { target: "Da stimme ich dir zu.", gloss: { es: "En eso estoy de acuerdo contigo.", en: "I agree with you there." } },
      { target: "Das sehe ich anders.", gloss: { es: "Yo lo veo distinto.", en: "I see it differently." } },
    ],
    pitfalls: {
      es: "«Meiner Meinung nach das ist falsch» copia el orden del español («en mi opinión, eso es…»). Meiner Meinung nach cuenta como posición 1, y el verbo va enseguida: Meiner Meinung nach ist das falsch. Ojo también al dativo: meiner, no «meine».",
      en: "'Meiner Meinung nach das ist falsch' copies English order ('in my opinion, that is…'). Meiner Meinung nach counts as position 1, so the verb comes next: Meiner Meinung nach ist das falsch. Mind the dative too: meiner, not 'meine'.",
    },
  },

  // ── u18 ──────────────────────────────────────────────────
  {
    id: "de-g-futur",
    lang: "de",
    cefr: "B1",
    title: { es: "El futuro: werden + infinitivo", en: "The future: werden + infinitive" },
    short: {
      es: "werden conjugado en 2.ª posición + infinitivo al final: Ich werde kommen. Con una palabra de tiempo basta el presente.",
      en: "Conjugated werden in second position + infinitive at the end: Ich werde kommen. With a time word, the present will do.",
    },
    rule: {
      es: "El Futur I se forma con werden conjugado en 2.ª posición y el verbo principal en infinitivo al final de la frase. Sirve para predicciones, promesas y planes, y con wohl o wahrscheinlich también para suposiciones sobre el presente (Er wird wohl krank sein). Si una palabra de tiempo ya indica el futuro (morgen, nächstes Jahr), el alemán suele preferir el presente.",
      en: "Futur I is formed with conjugated werden in 2nd position and the main verb as an infinitive at the end of the sentence. It's used for predictions, promises and plans, and with wohl or wahrscheinlich also for guesses about the present (Er wird wohl krank sein). If a time word already points to the future (morgen, nächstes Jahr), German usually prefers the present.",
    },
    steps: [
      { es: "Conjuga werden según el sujeto: ich werde, du wirst, er wird…", en: "Conjugate werden for the subject: ich werde, du wirst, er wird…" },
      { es: "Pon werden en 2.ª posición.", en: "Put werden in 2nd position." },
      { es: "Lleva el verbo principal, en infinitivo, al final de la frase.", en: "Move the main verb, as an infinitive, to the end of the sentence." },
      { es: "¿Hay palabra de tiempo y es un plan seguro? El presente también sirve: Morgen fahre ich.", en: "Is there a time word and a firm plan? The present works too: Morgen fahre ich." },
    ],
    table: {
      head: ["", "werden", "Futur I"],
      rows: [
        ["ich", "werde", "ich werde kommen"],
        ["du", "wirst", "du wirst kommen"],
        ["er / sie / es", "wird", "es wird regnen"],
        ["wir", "werden", "wir werden kommen"],
        ["ihr", "werdet", "ihr werdet kommen"],
        ["sie / Sie", "werden", "sie werden kommen"],
      ],
    },
    examples: [
      { target: "Ich werde nächstes Jahr nach Kanada ziehen.", gloss: { es: "El año que viene me voy a mudar a Canadá.", en: "I'm going to move to Canada next year." } },
      { target: "Morgen wird es regnen.", gloss: { es: "Mañana va a llover.", en: "It will rain tomorrow." } },
      { target: "Vielleicht werde ich ein Jahr im Ausland arbeiten.", gloss: { es: "Quizás trabaje un año en el extranjero.", en: "Maybe I'll work abroad for a year." } },
      { target: "Das wird schon klappen!", gloss: { es: "¡Ya va a salir bien!", en: "It'll work out!" } },
    ],
    pitfalls: {
      es: "«Ich will morgen kommen» no es futuro: wollen significa «querer». El futuro es Ich werde morgen kommen. Y el infinitivo va al final, no pegado a werden como en «voy a ir»: Ich werde nach Kanada ziehen, no «Ich werde ziehen nach Kanada».",
      en: "'Ich will morgen kommen' isn't the future: wollen means 'want to', so German will ≠ English 'will'. The future is Ich werde morgen kommen. And the infinitive goes last: Ich werde nach Kanada ziehen, not 'Ich werde ziehen nach Kanada'.",
    },
  },
  {
    id: "de-g-konj2-wenn",
    lang: "de",
    cefr: "B1",
    title: { es: "Condiciones irreales con wenn", en: "Unreal conditions with wenn" },
    short: {
      es: "Irreal: wenn + hätte/wäre/könnte (verbo al final), luego würde + infinitivo: Wenn ich Zeit hätte, würde ich kommen.",
      en: "Unreal: wenn + hätte/wäre/könnte (verb last), then würde + infinitive: Wenn ich Zeit hätte, würde ich kommen.",
    },
    rule: {
      es: "Para algo que no es real ahora («si tuviera…, iría…»), el alemán usa el Konjunktiv II. Con haben, sein y los modales se usa la forma propia (hätte, wäre, könnte, müsste); con casi todos los demás verbos, würde + infinitivo. Como la parte con wenn ocupa la posición 1, la frase principal empieza con el verbo: …, würde ich kommen.",
      en: "For something that isn't real now ('if I had…, I would…'), German uses Konjunktiv II. haben, sein and the modals have their own forms (hätte, wäre, könnte, müsste); almost every other verb uses würde + infinitive. Because the wenn clause fills position 1, the main clause starts with the verb: …, würde ich kommen.",
    },
    steps: [
      { es: "¿Es real y posible, o imaginario? Real → indicativo (habe); imaginario → Konjunktiv II.", en: "Is it real and possible, or imaginary? Real → indicative (habe); imaginary → Konjunktiv II." },
      { es: "En la parte con wenn, pon hätte / wäre / könnte al final.", en: "In the wenn clause, put hätte / wäre / könnte at the end." },
      { es: "Coma, y la principal empieza por el verbo: würde + sujeto + … + infinitivo al final.", en: "Comma, then the main clause starts with the verb: würde + subject + … + infinitive at the end." },
      { es: "Para dar un consejo: Wenn ich du wäre, würde ich …", en: "To give advice: Wenn ich du wäre, würde ich …" },
    ],
    table: {
      head: ["", "haben", "sein", "werden"],
      rows: [
        ["ich", "hätte", "wäre", "würde"],
        ["du", "hättest", "wärst", "würdest"],
        ["er / sie / es", "hätte", "wäre", "würde"],
        ["wir", "hätten", "wären", "würden"],
        ["ihr", "hättet", "wärt", "würdet"],
        ["sie / Sie", "hätten", "wären", "würden"],
      ],
    },
    examples: [
      { target: "Wenn ich mehr Geld hätte, würde ich eine Weltreise machen.", gloss: { es: "Si tuviera más dinero, haría un viaje por el mundo.", en: "If I had more money, I'd travel around the world." } },
      { target: "Wenn ich du wäre, würde ich das Angebot annehmen.", gloss: { es: "Si fuera tú, aceptaría la oferta.", en: "If I were you, I'd accept the offer." } },
      { target: "Ich wünschte, ich hätte mehr Zeit.", gloss: { es: "Ojalá tuviera más tiempo.", en: "I wish I had more time." } },
      { target: "Wenn ich Zeit habe, komme ich.", gloss: { es: "Si tengo tiempo, voy (es posible).", en: "If I have time, I'll come (it's possible)." } },
    ],
    pitfalls: {
      es: "«Wenn ich Zeit hatte» usa el Präteritum: es un pasado real («cuando tenía tiempo»). Para lo imaginario hace falta la diéresis: hätte. Donde el español dice «tuviera», el alemán dice hätte, nunca hatte.",
      en: "'Wenn ich Zeit hatte' is the simple past: a real past ('when I had time'). For the imaginary you need the umlaut: hätte. English uses 'had' for both; German doesn't.",
    },
  },
  {
    id: "de-g-n-deklination",
    lang: "de",
    cefr: "B1",
    title: { es: "La declinación -n", en: "The n-declension (weak masculine nouns)" },
    short: {
      es: "Kunde, Kollege, Student, Herr, Mensch…: -(e)n en todos los casos menos el nominativo singular: dem Kunden.",
      en: "Kunde, Kollege, Student, Herr, Mensch…: -(e)n in every case except the nominative singular: dem Kunden.",
    },
    rule: {
      es: "Un grupo de sustantivos masculinos, casi todos de personas o animales, añade -n o -en en todos los casos menos el nominativo singular. Son sobre todo los que terminan en -e (der Kunde, der Kollege, der Junge), en -ent, -ant o -ist (der Student, der Polizist), y algunos sueltos como der Herr y der Mensch. El plural también termina en -(e)n: die Kunden, die Studenten.",
      en: "A group of masculine nouns, nearly all for people or animals, adds -n or -en in every case except the nominative singular. Mostly they end in -e (der Kunde, der Kollege, der Junge) or in -ent, -ant, -ist (der Student, der Polizist), plus a few loners like der Herr and der Mensch. The plural also ends in -(e)n: die Kunden, die Studenten.",
    },
    steps: [
      { es: "¿Es masculino y termina en -e, -ent, -ant o -ist? ¿O es Herr o Mensch?", en: "Is it masculine and ending in -e, -ent, -ant or -ist? Or is it Herr or Mensch?" },
      { es: "¿Es el sujeto en singular (nominativo)? Entonces sin terminación: der Kunde.", en: "Is it the subject in the singular (nominative)? Then no ending: der Kunde." },
      { es: "En cualquier otro caso, añade -n (tras -e) o -en: den Kunden, dem Studenten.", en: "In every other case, add -n (after -e) or -en: den Kunden, dem Studenten." },
      { es: "Herr es especial: en singular den / dem / des Herrn, en plural die Herren.", en: "Herr is special: singular den / dem / des Herrn, plural die Herren." },
    ],
    table: {
      head: ["", "Kunde", "Student", "Herr"],
      rows: [
        ["Nom.", "der Kunde", "der Student", "der Herr"],
        ["Akk.", "den Kunden", "den Studenten", "den Herrn"],
        ["Dat.", "dem Kunden", "dem Studenten", "dem Herrn"],
        ["Gen.", "des Kunden", "des Studenten", "des Herrn"],
        ["Plural", "die Kunden", "die Studenten", "die Herren"],
      ],
    },
    examples: [
      { target: "Ich habe mit dem Kunden telefoniert.", gloss: { es: "Hablé por teléfono con el cliente.", en: "I spoke to the customer on the phone." } },
      { target: "Kennst du den neuen Kollegen?", gloss: { es: "¿Conoces al compañero nuevo?", en: "Do you know the new colleague?" } },
      { target: "Der Polizist hilft dem Jungen.", gloss: { es: "El policía ayuda al chico.", en: "The police officer is helping the boy." } },
    ],
    pitfalls: {
      es: "«Ich helfe dem Student» queda incompleto: Student sigue la declinación -n, así que en dativo es dem Studenten. Y en genitivo no lleva -s como otros masculinos: des Studenten, no «des Studentens».",
      en: "'Ich helfe dem Student' is missing its ending: Student follows the n-declension, so the dative is dem Studenten. And the genitive takes no -s like other masculines: des Studenten, not 'des Studentens'.",
    },
  },

  // ── u19 ──────────────────────────────────────────────────
  {
    id: "de-g-geschaeftsbrief",
    lang: "de",
    cefr: "B2",
    title: { es: "La carta y el correo formal", en: "Formal letters and emails" },
    short: {
      es: "Sehr geehrte Frau … / Sehr geehrter Herr …, + minúscula; cierre: Mit freundlichen Grüßen (sin coma) + nombre.",
      en: "Sehr geehrte Frau … / Sehr geehrter Herr …, then lower case; closing: Mit freundlichen Grüßen (no comma) + name.",
    },
    rule: {
      es: "El saludo formal concuerda con la persona: geehrter para Herr (masculino) y geehrte para Frau o para Damen und Herren. Tras el saludo va una coma, y la primera palabra del texto empieza en minúscula, salvo que sea un sustantivo o Sie. La despedida estándar es Mit freundlichen Grüßen, sin coma ni punto, y debajo tu nombre.",
      en: "The formal greeting agrees with the person: geehrter for Herr (masculine), geehrte for Frau or for Damen und Herren. A comma follows the greeting, and the first word of the text starts in lower case unless it's a noun or Sie. The standard closing is Mit freundlichen Grüßen, with no comma or full stop, and your name below.",
    },
    steps: [
      { es: "¿Sabes el nombre? Mujer → Sehr geehrte Frau Weber, · hombre → Sehr geehrter Herr Schulz,", en: "Do you know the name? Woman → Sehr geehrte Frau Weber, · man → Sehr geehrter Herr Schulz," },
      { es: "¿No lo sabes? Sehr geehrte Damen und Herren,", en: "Don't know it? Sehr geehrte Damen und Herren," },
      { es: "Empieza el texto en minúscula: «vielen Dank für Ihre E-Mail…».", en: "Start the text in lower case: 'vielen Dank für Ihre E-Mail…'." },
      { es: "Cierra con Mit freundlichen Grüßen, salta una línea y escribe tu nombre.", en: "Close with Mit freundlichen Grüßen, go to a new line and write your name." },
    ],
    table: {
      head: ["Situation", "Anrede / Gruß"],
      rows: [
        ["Frau", "Sehr geehrte Frau Weber,"],
        ["Herr", "Sehr geehrter Herr Schulz,"],
        ["unbekannt", "Sehr geehrte Damen und Herren,"],
        ["Anhang", "Im Anhang finden Sie …"],
        ["Schluss", "Mit freundlichen Grüßen"],
        ["informell", "Liebe Anna, / Lieber Tom, … Viele Grüße"],
      ],
    },
    examples: [
      { target: "Sehr geehrte Frau Weber, vielen Dank für Ihre E-Mail.", gloss: { es: "Estimada señora Weber: muchas gracias por su correo.", en: "Dear Ms Weber, thank you for your email." } },
      { target: "Im Anhang finden Sie meinen Lebenslauf.", gloss: { es: "Adjunto encontrará mi currículum.", en: "Please find my CV attached." } },
      { target: "Ich melde mich bis Ende der Woche bei Ihnen.", gloss: { es: "Me pondré en contacto con usted antes de que termine la semana.", en: "I'll get back to you by the end of the week." } },
      { target: "Mit freundlichen Grüßen", gloss: { es: "Saludos cordiales", en: "Kind regards" } },
    ],
    pitfalls: {
      es: "«Sehr geehrte Herr Schulz» es un error típico: sin artículo, el adjetivo ante un masculino lleva -er: Sehr geehrter Herr Schulz. Es como «estimado / estimada» en español: cambia según la persona.",
      en: "'Sehr geehrte Herr Schulz' is a classic slip: with no article, an adjective before a masculine noun takes -er: Sehr geehrter Herr Schulz. English 'Dear' never changes, so it's easy to miss.",
    },
  },
  {
    id: "de-g-passiv-modal",
    lang: "de",
    cefr: "B2",
    title: { es: "La pasiva con verbos modales", en: "The passive with modal verbs" },
    short: {
      es: "Modal en 2.ª posición + participio + werden al final: Das muss gemacht werden.",
      en: "Modal in second position + participle + werden at the end: Das muss gemacht werden.",
    },
    rule: {
      es: "En la pasiva con modal, el modal se conjuga y va en 2.ª posición; al final van el participio del verbo principal y werden en infinitivo. Así se dice qué hay que hacer, qué se puede hacer o qué está prohibido, sin decir quién lo hace. En una subordinada el modal pasa al último lugar: …, dass es bis Freitag gemacht werden muss.",
      en: "In the passive with a modal, the modal is conjugated in 2nd position; the main verb's participle and the infinitive werden go at the end. It says what must, can or mustn't be done without saying who does it. In a subordinate clause the modal moves to the very end: …, dass es bis Freitag gemacht werden muss.",
    },
    steps: [
      { es: "Busca lo que «sufre» la acción: será el sujeto (der Bericht, das Formular).", en: "Find what the action is done to: it becomes the subject (der Bericht, das Formular)." },
      { es: "Conjuga el modal con ese sujeto en 2.ª posición: muss, kann, darf, soll.", en: "Conjugate the modal for that subject in 2nd position: muss, kann, darf, soll." },
      { es: "Al final: participio + werden.", en: "At the end: participle + werden." },
      { es: "En subordinada: … participio + werden + modal conjugado.", en: "In a subordinate clause: … participle + werden + conjugated modal." },
    ],
    table: {
      head: ["", "Hauptsatz", "Nebensatz"],
      rows: [
        ["müssen", "Das muss gemacht werden.", "…, dass das gemacht werden muss."],
        ["können", "Das kann repariert werden.", "…, ob das repariert werden kann."],
        ["dürfen", "Hier darf nicht geraucht werden.", "…, weil hier nicht geraucht werden darf."],
        ["sollen", "Die Besprechung soll verschoben werden.", "…, dass sie verschoben werden soll."],
      ],
    },
    examples: [
      { target: "Der Bericht muss bis Freitag fertiggestellt werden.", gloss: { es: "El informe tiene que estar terminado para el viernes.", en: "The report has to be finished by Friday." } },
      { target: "Leider muss die Besprechung verschoben werden.", gloss: { es: "Lamentablemente hay que aplazar la reunión.", en: "Unfortunately the meeting has to be postponed." } },
      { target: "Das Formular muss heute unterschrieben werden.", gloss: { es: "El formulario se tiene que firmar hoy.", en: "The form has to be signed today." } },
    ],
    pitfalls: {
      es: "«Das muss machen werden» usa el infinitivo donde va el participio, y «Das muss werden gemacht» invierte el orden. Hacen falta las dos piezas en este orden: participio + werden: Das muss gemacht werden. En español basta con «se tiene que hacer».",
      en: "'Das muss machen werden' uses the infinitive instead of the participle, and 'Das muss werden gemacht' flips the order. You need both pieces, in this order: participle + werden: Das muss gemacht werden.",
    },
  },
  {
    id: "de-g-doppelkonnektoren",
    lang: "de",
    cefr: "B2",
    title: { es: "Conectores de dos partes", en: "Two-part connectors" },
    short: {
      es: "zwar … aber, sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch: pareja fija.",
      en: "zwar … aber, sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch: fixed pairs.",
    },
    rule: {
      es: "Estos conectores tienen dos piezas fijas que no se mezclan: zwar va con aber, nicht nur con sondern auch, weder con noch, sowohl con als auch, entweder con oder. La primera pieza va delante de lo que quieres resaltar y la segunda abre el segundo elemento. weder … noch ya es negativo, así que no lleva nicht ni kein.",
      en: "These connectors have two fixed pieces that don't mix: zwar goes with aber, nicht nur with sondern auch, weder with noch, sowohl with als auch, entweder with oder. The first piece goes before the thing you want to highlight, and the second opens the second element. weder … noch is already negative, so it takes no nicht or kein.",
    },
    steps: [
      { es: "¿Qué quieres decir? Concesión → zwar … aber; los dos → sowohl … als auch o nicht nur … sondern auch; ninguno → weder … noch; uno u otro → entweder … oder.", en: "What do you mean? Concession → zwar … aber; both → sowohl … als auch or nicht nur … sondern auch; neither → weder … noch; one or the other → entweder … oder." },
      { es: "Pon la primera pieza delante del primer elemento: Ich spreche sowohl Englisch…", en: "Put the first piece before the first element: Ich spreche sowohl Englisch…" },
      { es: "Pon la segunda pieza delante del segundo: … als auch Spanisch.", en: "Put the second piece before the second: … als auch Spanisch." },
      { es: "Con weder … noch, no añadas nicht ni kein.", en: "With weder … noch, don't add nicht or kein." },
    ],
    table: {
      head: ["Konnektor", "Beispiel"],
      rows: [
        ["zwar … aber", "Die Arbeit ist zwar anstrengend, aber sie macht mir Spaß."],
        ["sowohl … als auch", "Ich spreche sowohl Englisch als auch Spanisch."],
        ["weder … noch", "Er hat weder Zeit noch Geld."],
        ["entweder … oder", "Entweder du kommst, oder ich gehe."],
        ["nicht nur … sondern auch", "Sie spricht nicht nur Deutsch, sondern auch Russisch."],
      ],
    },
    examples: [
      { target: "Die Arbeit ist zwar anstrengend, aber sie macht mir Spaß.", gloss: { es: "El trabajo es agotador, pero me gusta.", en: "The work is tiring, but I enjoy it." } },
      { target: "Er hat weder Zeit noch Geld.", gloss: { es: "No tiene ni tiempo ni dinero.", en: "He has neither time nor money." } },
      { target: "Er arbeitet nicht nur, sondern studiert auch.", gloss: { es: "No solo trabaja, sino que también estudia.", en: "He not only works but also studies." } },
    ],
    pitfalls: {
      es: "«nicht nur …, aber auch» mezcla piezas: tras nicht nur va siempre sondern auch, igual que «no solo…, sino también». Y «weder Zeit noch kein Geld» niega dos veces: weder … noch ya es negativo.",
      en: "'nicht nur …, aber auch' copies English 'but also': after nicht nur it is always sondern auch. And 'weder Zeit noch kein Geld' negates twice: weder … noch is already negative.",
    },
  },

  // ── u20 ──────────────────────────────────────────────────
  {
    id: "de-g-konjunktiv1",
    lang: "de",
    cefr: "B2",
    title: { es: "El Konjunktiv I: estilo indirecto", en: "Konjunktiv I: reported speech" },
    short: {
      es: "Estilo indirecto formal: raíz + -e (er habe, sie komme), sein → sei; si coincide con el indicativo, Konjunktiv II.",
      en: "Formal reported speech: stem + -e (er habe, sie komme), sein → sei; if it looks like the indicative, use Konjunktiv II.",
    },
    rule: {
      es: "Las noticias y los textos formales usan el Konjunktiv I para repetir lo que dijo otra persona sin hacerse responsables de ello. Se forma con la raíz del infinitivo y las terminaciones -e, -est, -e, -en, -et, -en; sein es irregular (ich sei, er sei, wir seien). En la práctica se usa sobre todo en 3.ª persona singular: cuando la forma es igual al indicativo (wir haben, sie kommen), se toma el Konjunktiv II (wir hätten, sie kämen).",
      en: "News and formal texts use Konjunktiv I to repeat what someone else said without vouching for it. It's built from the infinitive stem plus -e, -est, -e, -en, -et, -en; sein is irregular (ich sei, er sei, wir seien). In practice it's mostly used in the 3rd person singular: where the form matches the indicative (wir haben, sie kommen), Konjunktiv II takes over (wir hätten, sie kämen).",
    },
    steps: [
      { es: "Busca la raíz: hab-en, komm-en, könn-en.", en: "Find the stem: hab-en, komm-en, könn-en." },
      { es: "Para er / sie / es añade -e: er habe, sie komme, es könne. sein → sei.", en: "For er / sie / es add -e: er habe, sie komme, es könne. sein → sei." },
      { es: "¿Suena igual que el indicativo (sie haben)? Cambia al Konjunktiv II: sie hätten.", en: "Does it sound like the indicative (sie haben)? Switch to Konjunktiv II: sie hätten." },
      { es: "Para el pasado: sei / habe + participio: Er sagt, er sei krank gewesen.", en: "For the past: sei / habe + participle: Er sagt, er sei krank gewesen." },
    ],
    table: {
      head: ["", "sein", "haben", "können", "kommen"],
      rows: [
        ["ich", "sei", "hätte (KII)", "könne", "käme (KII)"],
        ["du", "sei(e)st", "habest", "könnest", "kommest"],
        ["er / sie / es", "sei", "habe", "könne", "komme"],
        ["wir / sie / Sie", "seien", "hätten (KII)", "könnten (KII)", "kämen (KII)"],
      ],
    },
    examples: [
      { target: "Die Ministerin erklärte, sie sei nicht informiert worden.", gloss: { es: "La ministra declaró que no la habían informado.", en: "The minister stated that she had not been informed." } },
      { target: "Er behauptet, er sei krank gewesen.", gloss: { es: "Él afirma que estuvo enfermo.", en: "He claims he was ill." } },
      { target: "Der Sprecher sagte, die Firma habe keine Probleme.", gloss: { es: "El portavoz dijo que la empresa no tenía problemas.", en: "The spokesman said the company had no problems." } },
      { target: "Die Zeugen sagten, sie hätten nichts gesehen.", gloss: { es: "Los testigos dijeron que no habían visto nada.", en: "The witnesses said they hadn't seen anything." } },
    ],
    pitfalls: {
      es: "«Er sagt, er ist krank» se oye al hablar, pero en una noticia o un texto formal se espera er sei krank. Y en plural «sie haben» se confunde con el indicativo: en estilo indirecto, sie hätten.",
      en: "'Er sagt, er ist krank' is fine in conversation, but news and formal texts expect er sei krank. And plural 'sie haben' looks like the indicative, so reported speech uses sie hätten.",
    },
  },
  {
    id: "de-g-indirekte-frage",
    lang: "de",
    cefr: "B2",
    title: { es: "Preguntas indirectas: ob y palabras W", en: "Indirect questions: ob and W-words" },
    short: {
      es: "Sí/no → ob; con palabra W se mantiene (wann, wo, warum). En los dos casos, el verbo va al final.",
      en: "Yes/no → ob; with a W-word, keep it (wann, wo, warum). Either way, the verb goes to the end.",
    },
    rule: {
      es: "Una pregunta indirecta es una subordinada, así que el verbo conjugado va al final. Si la pregunta original era de sí o no, se introduce con ob («si»); si tenía palabra interrogativa (wann, wo, wie, warum…), esa misma palabra hace de conector. Sirven para contar lo que alguien preguntó y para preguntar con más cortesía: Können Sie mir sagen, wo der Bahnhof ist?",
      en: "An indirect question is a subordinate clause, so the conjugated verb goes last. If the original was a yes/no question, it's introduced with ob ('whether / if'); if it had a question word (wann, wo, wie, warum…), that word does the linking. They report what someone asked and make questions more polite: Können Sie mir sagen, wo der Bahnhof ist?",
    },
    steps: [
      { es: "¿La pregunta original tenía palabra W? Sí → úsala; no → ob.", en: "Did the original question have a W-word? Yes → use it; no → ob." },
      { es: "Introduce con Sie fragt, … / Weißt du, … / Können Sie mir sagen, …", en: "Introduce it with Sie fragt, … / Weißt du, … / Können Sie mir sagen, …" },
      { es: "Sujeto tras ob o la palabra W; verbo conjugado al final.", en: "Subject after ob or the W-word; conjugated verb at the end." },
      { es: "Cambia la persona si hace falta: «Kommst du?» → Sie fragt, ob ich komme.", en: "Change the person if needed: 'Kommst du?' → Sie fragt, ob ich komme." },
    ],
    table: {
      head: ["direkte Frage", "indirekte Frage"],
      rows: [
        ["Kommst du?", "Sie fragt, ob ich komme."],
        ["Wann kommst du?", "Sie fragt, wann ich komme."],
        ["Hast du Zeit?", "Sie fragte, ob ich Zeit hätte."],
        ["Wo ist der Bahnhof?", "Können Sie mir sagen, wo der Bahnhof ist?"],
      ],
    },
    examples: [
      { target: "Sie fragte, ob ich Zeit hätte.", gloss: { es: "Me preguntó si tenía tiempo.", en: "She asked whether I had time." } },
      { target: "Weißt du, wann der Zug kommt?", gloss: { es: "¿Sabes cuándo llega el tren?", en: "Do you know when the train is coming?" } },
      { target: "Können Sie mir sagen, wo der Bahnhof ist?", gloss: { es: "¿Me puede decir dónde está la estación?", en: "Could you tell me where the station is?" } },
    ],
    pitfalls: {
      es: "«Sie fragt, wenn ich komme» es un error típico: wenn es el «si» de una condición o «cuando». El «si» de una pregunta indirecta es ob: Sie fragt, ob ich komme. Y el verbo va al final: «Weißt du, wann kommt der Zug?» → Weißt du, wann der Zug kommt?",
      en: "'Sie fragt, wenn ich komme' is a classic slip: wenn is the 'if' of conditions (or 'when'). The 'if / whether' of an indirect question is ob: Sie fragt, ob ich komme. And the verb goes last: 'Weißt du, wann kommt der Zug?' → Weißt du, wann der Zug kommt?",
    },
  },
  {
    id: "de-g-sollen-wollen",
    lang: "de",
    cefr: "B2",
    title: { es: "sollen y wollen: rumores y afirmaciones", en: "sollen and wollen: hearsay and claims" },
    short: {
      es: "sollen = «dicen que» (Er soll reich sein); wollen = «afirma, pero lo dudo» (Er will es gesehen haben).",
      en: "sollen = 'is said to' (Er soll reich sein); wollen = 'claims to', doubtfully (Er will es gesehen haben).",
    },
    rule: {
      es: "Además de su sentido normal, sollen y wollen sirven para tomar distancia de una información. sollen transmite lo que dicen otros (la prensa, los rumores); wollen, lo que el propio sujeto dice de sí mismo, con la sospecha de que no es verdad. Para algo pasado se usa el infinitivo pasado, participio + haben o sein: Er soll krank gewesen sein.",
      en: "Besides their normal meaning, sollen and wollen let you keep your distance from a piece of information. sollen passes on what others say (the press, rumours); wollen, what the subject says about themselves, with a hint of doubt. For something in the past, use the past infinitive, participle + haben or sein: Er soll krank gewesen sein.",
    },
    steps: [
      { es: "¿Quién lo dice? Otras personas → sollen; el propio sujeto → wollen.", en: "Who's saying it? Other people → sollen; the subject themselves → wollen." },
      { es: "Conjuga el modal en presente, en 2.ª posición.", en: "Conjugate the modal in the present, in 2nd position." },
      { es: "¿Hecho presente? Infinitivo al final: … reich sein.", en: "A present fact? Infinitive at the end: … reich sein." },
      { es: "¿Hecho pasado? Participio + haben / sein al final: … gesehen haben, … gewesen sein.", en: "A past fact? Participle + haben / sein at the end: … gesehen haben, … gewesen sein." },
    ],
    table: {
      head: ["", "Gegenwart", "Vergangenheit"],
      rows: [
        ["sollen", "Er soll reich sein.", "Er soll reich gewesen sein."],
        ["wollen", "Er will Arzt sein.", "Er will es gesehen haben."],
        ["sollen + Passiv", "Das Gebäude soll abgerissen werden.", "Das Gebäude soll abgerissen worden sein."],
      ],
    },
    examples: [
      { target: "Die Bahn soll ab Mai teurer werden.", gloss: { es: "Dicen que el tren va a subir de precio a partir de mayo.", en: "Train fares are supposed to go up from May." } },
      { target: "Das Restaurant soll sehr gut sein.", gloss: { es: "Dicen que el restaurante es muy bueno.", en: "The restaurant is said to be very good." } },
      { target: "Sie will nichts gewusst haben.", gloss: { es: "Ella dice que no sabía nada (pero lo dudo).", en: "She claims she didn't know anything." } },
    ],
    pitfalls: {
      es: "«Er will reich sein» no significa «dicen que es rico», sino «quiere ser rico» (o, según el contexto, «afirma serlo»). Para el rumor se usa sollen: Er soll reich sein. Y sollen de rumor no es «debe»: lo decide el contexto.",
      en: "'Er will reich sein' doesn't mean 'he's said to be rich' but 'he wants to be rich' (or, in context, 'claims to be'). For hearsay use sollen: Er soll reich sein. And remember German will means 'want', not English 'will'.",
    },
  },

  // ── u21 ──────────────────────────────────────────────────
  {
    id: "de-g-partizipialattribut",
    lang: "de",
    cefr: "B2",
    title: { es: "Participios delante del sustantivo", en: "Participles in front of the noun" },
    short: {
      es: "Partizip I (-end) = en curso, activo: die steigenden Preise. Partizip II = ya terminado: das gekaufte Handy.",
      en: "Partizip I (-end) = ongoing, active: die steigenden Preise. Partizip II = already done: das gekaufte Handy.",
    },
    rule: {
      es: "El alemán escrito pone delante del sustantivo participios que funcionan como adjetivos y que en español serían una frase con «que». El Partizip I (infinitivo + -d: steigend) describe algo que está pasando; el Partizip II (gekauft, angekommen) algo ya terminado, en sentido pasivo si el verbo lleva objeto. Llevan las terminaciones normales del adjetivo, y todo lo que los amplía va entre el artículo y el participio: das gestern gekaufte Handy.",
      en: "Written German puts participles in front of a noun, where they work like adjectives and replace a relative clause. Partizip I (infinitive + -d: steigend) describes something happening; Partizip II (gekauft, angekommen) something already finished, with a passive sense if the verb takes an object. They take normal adjective endings, and anything that expands them goes between the article and the participle: das gestern gekaufte Handy.",
    },
    steps: [
      { es: "Piensa la frase de relativo: das Handy, das gestern gekauft wurde.", en: "Think of the relative clause: das Handy, das gestern gekauft wurde." },
      { es: "¿Acción en curso → Partizip I (-end); acción terminada → Partizip II.", en: "Ongoing action → Partizip I (-end); finished action → Partizip II." },
      { es: "Ordena: artículo + complementos + participio + sustantivo.", en: "Order: article + extra details + participle + noun." },
      { es: "Añade la terminación de adjetivo: das gekaufte Handy, die steigenden Preise.", en: "Add the adjective ending: das gekaufte Handy, die steigenden Preise." },
    ],
    table: {
      head: ["Relativsatz", "Partizipialattribut"],
      rows: [
        ["die Preise, die steigen", "die steigenden Preise"],
        ["der Zug, der ankommt", "der ankommende Zug"],
        ["der Zug, der angekommen ist", "der angekommene Zug"],
        ["das Handy, das gestern gekauft wurde", "das gestern gekaufte Handy"],
        ["die Daten, die gespeichert wurden", "die gespeicherten Daten"],
      ],
    },
    examples: [
      { target: "Die steigenden Preise machen vielen Menschen Sorgen.", gloss: { es: "Los precios que suben preocupan a mucha gente.", en: "Rising prices worry a lot of people." } },
      { target: "Das gestern gekaufte Handy funktioniert nicht.", gloss: { es: "El celular que compré ayer no funciona.", en: "The phone I bought yesterday doesn't work." } },
      { target: "Die gespeicherten Daten sind sicher.", gloss: { es: "Los datos guardados están seguros.", en: "The saved data is safe." } },
    ],
    pitfalls: {
      es: "«der ankommend Zug» olvida la terminación: delante del sustantivo, el participio es un adjetivo y se declina: der ankommende Zug. Y no los confundas: ankommend = que está llegando; angekommen = que ya llegó.",
      en: "'der ankommend Zug' forgets the ending: before a noun the participle is an adjective and must be declined: der ankommende Zug. And don't mix them up: ankommend = arriving; angekommen = already arrived.",
    },
  },
  {
    id: "de-g-passiversatz",
    lang: "de",
    cefr: "B2",
    title: { es: "Alternativas a la pasiva", en: "Alternatives to the passive" },
    short: {
      es: "sich lassen + infinitivo (se puede), sein + zu + infinitivo (se puede / se debe), adjetivo en -bar: machbar.",
      en: "sich lassen + infinitive (can be done), sein + zu + infinitive (can / must be done), -bar adjective: machbar.",
    },
    rule: {
      es: "Para decir «se puede» o «se debe» sin una pasiva con modal, el alemán tiene tres recursos. sich lassen + infinitivo equivale a können + pasiva (Das lässt sich ändern = Das kann geändert werden), y sein + zu + infinitivo equivale a können o müssen + pasiva según el contexto (Der Antrag ist online zu stellen = tiene que hacerse online). El sufijo -bar forma adjetivos de posibilidad, como «-ble» en español: machbar, reparierbar.",
      en: "To say 'can be' or 'must be done' without a modal passive, German has three tools. sich lassen + infinitive equals können + passive (Das lässt sich ändern = Das kann geändert werden), and sein + zu + infinitive equals können or müssen + passive depending on context (Der Antrag ist online zu stellen = it must be done online). The suffix -bar makes adjectives of possibility, like English '-able': machbar, reparierbar.",
    },
    steps: [
      { es: "Elige el sentido: posibilidad → sich lassen o -bar; obligación (normas, instrucciones) → sein + zu.", en: "Pick the meaning: possibility → sich lassen or -bar; obligation (rules, instructions) → sein + zu." },
      { es: "sich lassen: lassen conjugado + sich + … + infinitivo al final.", en: "sich lassen: conjugated lassen + sich + … + infinitive at the end." },
      { es: "sein + zu: ist / sind + … + zu + infinitivo; en verbos separables, zu va en medio: abzugeben.", en: "sein + zu: ist / sind + … + zu + infinitive; with separable verbs, zu goes inside: abzugeben." },
      { es: "-bar: raíz del verbo + -bar: machen → machbar, reparieren → reparierbar.", en: "-bar: verb stem + -bar: machen → machbar, reparieren → reparierbar." },
    ],
    table: {
      head: ["Form", "Beispiel", "= Passiv"],
      rows: [
        ["sich lassen", "Das Problem lässt sich leicht lösen.", "kann gelöst werden"],
        ["sein + zu", "Die Daten sind regelmäßig zu speichern.", "müssen gespeichert werden"],
        ["-bar", "Das ist nicht machbar.", "kann nicht gemacht werden"],
      ],
    },
    examples: [
      { target: "Das Problem lässt sich leicht lösen.", gloss: { es: "El problema se puede resolver fácilmente.", en: "The problem can be solved easily." } },
      { target: "Die Daten sind regelmäßig zu speichern.", gloss: { es: "Los datos se deben guardar con regularidad.", en: "The data must be saved regularly." } },
      { target: "Ich glaube, er lässt sich nicht mehr reparieren.", gloss: { es: "Creo que ya no se puede reparar.", en: "I don't think it can be repaired any more." } },
      { target: "Das ist nicht machbar.", gloss: { es: "Eso no es factible.", en: "That's not doable." } },
    ],
    pitfalls: {
      es: "«Das lässt nicht reparieren» olvida el sich: sin él, lassen significa «dejar» o «hacer que alguien haga algo». Correcto: Das lässt sich nicht reparieren. Y con sein + zu el verbo va en infinitivo: ist zu reparieren, no «ist zu repariert».",
      en: "'Das lässt nicht reparieren' drops the sich: without it, lassen means 'let' or 'have something done'. Correct: Das lässt sich nicht reparieren. And with sein + zu the verb stays an infinitive: ist zu reparieren, not 'ist zu repariert'.",
    },
  },
  {
    id: "de-g-nominalisierung",
    lang: "de",
    cefr: "B2",
    title: { es: "Nominalización: del verbo al sustantivo", en: "Nominalisation: from verb to noun" },
    short: {
      es: "Raíz + -ung = sustantivo femenino (entwickeln → die Entwicklung); el infinitivo como sustantivo es neutro: das Lesen.",
      en: "Stem + -ung = feminine noun (entwickeln → die Entwicklung); an infinitive used as a noun is neuter: das Lesen.",
    },
    rule: {
      es: "Los textos de ciencia, prensa y administración prefieren sustantivos a verbos: die Entwicklung des Medikaments en lugar de «man hat das Medikament entwickelt». La forma más productiva es raíz + -ung, siempre femenina; además, cualquier infinitivo puede funcionar como sustantivo neutro con mayúscula (das Lesen), muy común con beim y zum. El objeto del verbo pasa a genitivo: die Daten speichern → das Speichern der Daten.",
      en: "Science, news and official texts prefer nouns to verbs: die Entwicklung des Medikaments rather than 'man hat das Medikament entwickelt'. The most productive pattern is stem + -ung, always feminine; also, any infinitive can act as a capitalised neuter noun (das Lesen), very common with beim and zum. The verb's object becomes a genitive: die Daten speichern → das Speichern der Daten.",
    },
    steps: [
      { es: "Toma la raíz y añade -ung: forschen → Forschung, entdecken → Entdeckung (entwickeln → Entwicklung pierde una e).", en: "Take the stem and add -ung: forschen → Forschung, entdecken → Entdeckung (entwickeln → Entwicklung drops an e)." },
      { es: "Los sustantivos en -ung son siempre femeninos: die.", en: "Nouns in -ung are always feminine: die." },
      { es: "Para la acción en sí, usa el infinitivo con mayúscula y das: das Kochen, beim Kochen.", en: "For the activity itself, use the capitalised infinitive with das: das Kochen, beim Kochen." },
      { es: "El objeto del verbo pasa a genitivo: die Entdeckung des Virus.", en: "The verb's object becomes a genitive: die Entdeckung des Virus." },
    ],
    table: {
      head: ["Verb", "Nomen", "Beispiel"],
      rows: [
        ["entwickeln", "die Entwicklung", "die Entwicklung neuer Medikamente"],
        ["forschen", "die Forschung", "die Forschung an der Universität"],
        ["entdecken", "die Entdeckung", "die Entdeckung des Virus"],
        ["speichern", "das Speichern", "beim Speichern der Daten"],
        ["lesen", "das Lesen", "eine Brille zum Lesen"],
      ],
    },
    examples: [
      { target: "Die Entwicklung des Medikaments hat zehn Jahre gedauert.", gloss: { es: "El desarrollo del medicamento llevó diez años.", en: "Developing the medicine took ten years." } },
      { target: "Diese Entdeckung ist ein großer Fortschritt.", gloss: { es: "Este descubrimiento es un gran avance.", en: "This discovery is a big step forward." } },
      { target: "Beim Herunterladen ist ein Fehler aufgetreten.", gloss: { es: "Hubo un error al descargar.", en: "An error occurred while downloading." } },
    ],
    pitfalls: {
      es: "«das Entwicklung» es incorrecto: todo sustantivo en -ung es femenino (die Entwicklung), aunque en español sea masculino («el desarrollo»). Y el infinitivo nominalizado lleva mayúscula: beim Kochen, no «beim kochen».",
      en: "'das Entwicklung' is wrong: every noun in -ung is feminine (die Entwicklung). And a nominalised infinitive is capitalised: beim Kochen, not 'beim kochen'.",
    },
  },

  // ── u22 ──────────────────────────────────────────────────
  {
    id: "de-g-konj2-vergangenheit",
    lang: "de",
    cefr: "B2",
    title: { es: "El Konjunktiv II del pasado", en: "Past Konjunktiv II" },
    short: {
      es: "hätte / wäre + participio para lo irreal en el pasado: Wenn ich es gewusst hätte, wäre ich gekommen.",
      en: "hätte / wäre + participle for unreal past events: Wenn ich es gewusst hätte, wäre ich gekommen.",
    },
    rule: {
      es: "Para hablar de algo que no pasó («si lo hubiera sabido, habría venido»), se toma el Perfekt y se cambia el auxiliar por su Konjunktiv II: hat → hätte, ist → wäre. El auxiliar es el mismo que en el Perfekt, así que los verbos de movimiento o cambio de estado usan wäre. Sirve para condiciones irreales, deseos (Ich wäre gern gekommen) y reproches.",
      en: "To talk about something that didn't happen ('if I had known, I would have come'), take the Perfekt and swap the auxiliary for its Konjunktiv II: hat → hätte, ist → wäre. The auxiliary stays the same as in the Perfekt, so verbs of movement or change of state use wäre. It's used for unreal conditions, wishes (Ich wäre gern gekommen) and reproaches.",
    },
    steps: [
      { es: "Piensa el Perfekt: ich bin gegangen / ich habe gesehen.", en: "Think of the Perfekt: ich bin gegangen / ich habe gesehen." },
      { es: "Cambia el auxiliar: bin → wäre, habe → hätte.", en: "Swap the auxiliary: bin → wäre, habe → hätte." },
      { es: "El participio va al final.", en: "The participle goes at the end." },
      { es: "En la parte con wenn, el auxiliar va al final del todo: wenn ich es gewusst hätte.", en: "In the wenn clause, the auxiliary goes at the very end: wenn ich es gewusst hätte." },
    ],
    table: {
      head: ["", "haben + Partizip", "sein + Partizip"],
      rows: [
        ["ich", "hätte gemacht", "wäre gegangen"],
        ["du", "hättest gemacht", "wärst gegangen"],
        ["er / sie / es", "hätte gemacht", "wäre gegangen"],
        ["wir", "hätten gemacht", "wären gegangen"],
        ["ihr", "hättet gemacht", "wärt gegangen"],
        ["sie / Sie", "hätten gemacht", "wären gegangen"],
      ],
    },
    examples: [
      { target: "Ich wäre gern ins Konzert gegangen.", gloss: { es: "Me habría gustado ir al concierto.", en: "I would have liked to go to the concert." } },
      { target: "Wenn wir früher losgefahren wären, hätten wir den Anfang gesehen.", gloss: { es: "Si hubiéramos salido antes, habríamos visto el comienzo.", en: "If we had left earlier, we would have seen the beginning." } },
      { target: "Wenn du gefragt hättest, hätte ich dir geholfen.", gloss: { es: "Si me hubieras preguntado, te habría ayudado.", en: "If you had asked, I would have helped you." } },
    ],
    pitfalls: {
      es: "«Wenn ich es gewusst hätte, hätte ich gekommen» usa el auxiliar equivocado: kommen forma el Perfekt con sein (ich bin gekommen), así que aquí va wäre: wäre ich gekommen. En español todo va con «haber»; en alemán, no.",
      en: "'Wenn ich es gewusst hätte, hätte ich gekommen' uses the wrong auxiliary: kommen takes sein in the Perfekt (ich bin gekommen), so it's wäre ich gekommen. English uses 'have' for everything; German keeps sein for movement verbs.",
    },
  },
  {
    id: "de-g-doppelinfinitiv",
    lang: "de",
    cefr: "B2",
    title: { es: "«Debería haber…»: el doble infinitivo", en: "'Should have …': the double infinitive" },
    short: {
      es: "hätte + infinitivo + modal en infinitivo al final: Du hättest es sagen sollen (no «gesollt»).",
      en: "hätte + infinitive + modal infinitive at the end: Du hättest es sagen sollen (not 'gesollt').",
    },
    rule: {
      es: "Cuando un modal (sollen, können, müssen, dürfen) va en un tiempo compuesto junto a otro verbo, no usa su participio sino su infinitivo: por eso al final aparecen dos infinitivos seguidos. Con hätte expresa lo que habría sido correcto, posible o necesario y no pasó: Du hättest anrufen sollen = deberías haber llamado. El modal siempre ocupa el último lugar.",
      en: "When a modal (sollen, können, müssen, dürfen) appears in a compound tense next to another verb, it uses its infinitive instead of its participle: that's why two infinitives end the sentence. With hätte it expresses what would have been right, possible or necessary but didn't happen: Du hättest anrufen sollen = you should have called. The modal always comes last.",
    },
    steps: [
      { es: "Conjuga hätte según el sujeto: ich hätte, du hättest…", en: "Conjugate hätte for the subject: ich hätte, du hättest…" },
      { es: "Ponlo en 2.ª posición.", en: "Put it in 2nd position." },
      { es: "Al final: verbo principal en infinitivo + modal en infinitivo.", en: "At the end: main verb infinitive + modal infinitive." },
      { es: "Sentido: sollen = debería haber; können = podría haber; müssen = habría tenido que; nicht dürfen = no debería haber.", en: "Meaning: sollen = should have; können = could have; müssen = would have had to; nicht dürfen = shouldn't have." },
    ],
    table: {
      head: ["Modalverb", "Beispiel"],
      rows: [
        ["sollen", "Ich hätte mehr lernen sollen."],
        ["können", "Wir hätten gewinnen können."],
        ["müssen", "Er hätte anrufen müssen."],
        ["dürfen", "Das hättest du nicht sagen dürfen."],
      ],
    },
    examples: [
      { target: "Du hättest mich anrufen sollen.", gloss: { es: "Deberías haberme llamado.", en: "You should have called me." } },
      { target: "Wir hätten lieber ins Theater gehen sollen.", gloss: { es: "Mejor tendríamos que haber ido al teatro.", en: "We should have gone to the theatre instead." } },
      { target: "Wir hätten gewinnen können.", gloss: { es: "Podríamos haber ganado.", en: "We could have won." } },
    ],
    pitfalls: {
      es: "«Du hättest es gesagt sollen» y «Du hättest es sagen gesollt» mezclan formas. Con otro verbo al lado, el modal no usa participio: dos infinitivos, con el modal al final: Du hättest es sagen sollen.",
      en: "'Du hättest es gesagt sollen' and 'Du hättest es sagen gesollt' are both wrong. English says 'should have said' with a participle; German uses two infinitives, modal last: Du hättest es sagen sollen.",
    },
  },
  {
    id: "de-g-als-ob",
    lang: "de",
    cefr: "B2",
    title: { es: "als ob: «como si»", en: "als ob: 'as if'" },
    short: {
      es: "als ob + Konjunktiv II al final (als ob er krank wäre) o als + verbo enseguida (als wäre er krank).",
      en: "als ob + Konjunktiv II at the end (als ob er krank wäre) or als + verb straight after (als wäre er krank).",
    },
    rule: {
      es: "als ob compara con una situación que no es real o que dudamos, por eso lleva Konjunktiv II: wäre, hätte, wüsste o würde + infinitivo. Hay dos órdenes posibles: con als ob el verbo va al final; con solo als, el verbo va justo después de als. Suele aparecer tras so tun («hacer como si»), aussehen o sich anhören.",
      en: "als ob compares with a situation that isn't real or that we doubt, so it takes Konjunktiv II: wäre, hätte, wüsste or würde + infinitive. There are two word orders: with als ob the verb goes last; with als alone, the verb comes right after als. It often follows so tun ('act as if'), aussehen or sich anhören.",
    },
    steps: [
      { es: "Frase principal: Er tut so, … / Du siehst aus, …", en: "Main clause: Er tut so, … / Du siehst aus, …" },
      { es: "Coma + als ob + sujeto + … + verbo en Konjunktiv II al final.", en: "Comma + als ob + subject + … + Konjunktiv II verb at the end." },
      { es: "O bien: als + verbo en Konjunktiv II + sujeto + …", en: "Or: als + Konjunktiv II verb + subject + …" },
      { es: "Para el pasado: hätte / wäre + participio: als ob er nichts gehört hätte.", en: "For the past: hätte / wäre + participle: als ob er nichts gehört hätte." },
    ],
    table: {
      head: ["", "als ob … Verb", "als + Verb …"],
      rows: [
        ["sein", "als ob er krank wäre", "als wäre er krank"],
        ["wissen", "als ob sie nichts wüsste", "als wüsste sie nichts"],
        ["haben", "als ob er keine Zeit hätte", "als hätte er keine Zeit"],
        ["Vergangenheit", "als ob er nichts gehört hätte", "als hätte er nichts gehört"],
      ],
    },
    examples: [
      { target: "Er tut so, als ob er alles wüsste.", gloss: { es: "Hace como si lo supiera todo.", en: "He acts as if he knew everything." } },
      { target: "Sie tut so, als wüsste sie nichts.", gloss: { es: "Hace como si no supiera nada.", en: "She acts as if she knew nothing." } },
      { target: "Du siehst aus, als ob du müde wärst.", gloss: { es: "Parece que estás cansado.", en: "You look as if you were tired." } },
    ],
    pitfalls: {
      es: "«als ob er krank ist» se oye al hablar, pero el estándar pide Konjunktiv II: als ob er krank wäre. Y con solo als el verbo no va al final: «als er krank wäre» es incorrecto (als er krank war = «cuando estaba enfermo»); di als wäre er krank.",
      en: "'als ob er krank ist' is heard in speech, but the standard wants Konjunktiv II: als ob er krank wäre. And with als alone the verb doesn't go last: 'als er krank wäre' is wrong (als er krank war = 'when he was ill'); say als wäre er krank.",
    },
  },

  // ── u23 ──────────────────────────────────────────────────
  {
    id: "de-g-je-desto",
    lang: "de",
    cefr: "B2",
    title: { es: "je … desto: «cuanto más…, más…»", en: "je … desto: 'the more…, the more…'" },
    short: {
      es: "Je + comparativo … verbo al final, desto + comparativo + verbo + sujeto: Je mehr ich lese, desto besser verstehe ich.",
      en: "Je + comparative … verb last, desto + comparative + verb + subject: Je mehr ich lese, desto besser verstehe ich.",
    },
    rule: {
      es: "je … desto une dos cambios que crecen o bajan juntos. La parte con je es una subordinada (verbo conjugado al final); la parte con desto (o umso) es la principal y, como desto + comparativo ocupa la posición 1, el verbo va enseguida y el sujeto detrás. Las dos partes empiezan siempre con un comparativo: mehr, besser, früher, länger.",
      en: "je … desto links two changes that rise or fall together. The je part is a subordinate clause (conjugated verb last); the desto (or umso) part is the main clause, and since desto + comparative fills position 1, the verb comes next and the subject after it. Both parts always start with a comparative: mehr, besser, früher, länger.",
    },
    steps: [
      { es: "Je + comparativo + sujeto + … + verbo al final.", en: "Je + comparative + subject + … + verb at the end." },
      { es: "Coma.", en: "Comma." },
      { es: "desto / umso + comparativo + verbo conjugado + sujeto + resto.", en: "desto / umso + comparative + conjugated verb + subject + the rest." },
      { es: "Versión corta, sin verbos: Je früher, desto besser.", en: "Short version, no verbs: Je früher, desto besser." },
    ],
    table: {
      head: ["je … (Verb am Ende)", "desto … (Verb an 2. Stelle)"],
      rows: [
        ["Je mehr ich lese,", "desto besser verstehe ich."],
        ["Je länger ich warte,", "desto nervöser werde ich."],
        ["Je früher wir losfahren,", "desto schneller sind wir da."],
        ["Je früher,", "desto besser."],
      ],
    },
    examples: [
      { target: "Je mehr ich lese, desto besser verstehe ich.", gloss: { es: "Cuanto más leo, mejor entiendo.", en: "The more I read, the better I understand." } },
      { target: "Je mehr du übst, desto sicherer wirst du.", gloss: { es: "Cuanto más practicas, más seguridad ganas.", en: "The more you practise, the more confident you get." } },
      { target: "Je früher, desto besser.", gloss: { es: "Cuanto antes, mejor.", en: "The sooner, the better." } },
    ],
    pitfalls: {
      es: "«…, desto ich verstehe besser» separa el comparativo de desto y deja el verbo fuera de su sitio. desto y el comparativo van juntos, y enseguida el verbo: desto besser verstehe ich. Tampoco uses dann en lugar de desto.",
      en: "'…, desto ich verstehe besser' copies English order ('the better I understand') badly: desto and the comparative stay together, then the verb: desto besser verstehe ich. And don't use dann instead of desto.",
    },
  },
  {
    id: "de-g-genitiv-praep",
    lang: "de",
    cefr: "B2",
    title: { es: "Preposiciones con genitivo", en: "Prepositions with the genitive" },
    short: {
      es: "wegen, trotz, während, statt, aufgrund + genitivo: des (m/n, sustantivo + -s), der (f/pl): wegen des Regens.",
      en: "wegen, trotz, während, statt, aufgrund + genitive: des (m/n, noun + -s), der (f/pl): wegen des Regens.",
    },
    rule: {
      es: "Algunas preposiciones piden genitivo, sobre todo en la lengua escrita: wegen (por, a causa de), trotz (a pesar de), während (durante), statt (en vez de), aufgrund (debido a) e innerhalb (dentro de). En genitivo el artículo es des para masculino y neutro, y el sustantivo añade -s o -es (des Wetters, des Streiks); para femenino y plural es der. Al hablar mucha gente usa el dativo (wegen dem Wetter), pero en textos y exámenes se espera el genitivo.",
      en: "Some prepositions take the genitive, especially in writing: wegen (because of), trotz (despite), während (during), statt (instead of), aufgrund (due to) and innerhalb (within). In the genitive the article is des for masculine and neuter, and the noun adds -s or -es (des Wetters, des Streiks); for feminine and plural it's der. In speech many people use the dative (wegen dem Wetter), but texts and exams expect the genitive.",
    },
    steps: [
      { es: "¿Es una de estas preposiciones? → genitivo.", en: "Is it one of these prepositions? → genitive." },
      { es: "Busca el género: der / das → des; die o plural → der.", en: "Check the gender: der / das → des; die or plural → der." },
      { es: "Masculino o neutro: añade -s al sustantivo (-es en palabras cortas: des Tages).", en: "Masculine or neuter: add -s to the noun (-es on short words: des Tages)." },
      { es: "Con adjetivo, este lleva -en: wegen des schlechten Wetters, trotz der hohen Kosten.", en: "With an adjective, it takes -en: wegen des schlechten Wetters, trotz der hohen Kosten." },
    ],
    table: {
      head: ["", "m", "f", "n", "Plural"],
      rows: [
        ["Artikel", "des …(e)s", "der", "des …(e)s", "der"],
        ["ohne Adj.", "während des Urlaubs", "trotz der Kälte", "wegen des Wetters", "aufgrund der Kosten"],
        ["mit Adj.", "trotz des starken Regens", "wegen der langen Pause", "trotz des schlechten Wetters", "aufgrund der hohen Kosten"],
      ],
    },
    examples: [
      { target: "Wegen des Streiks fällt der Unterricht aus.", gloss: { es: "Por la huelga no hay clases.", en: "Classes are cancelled because of the strike." } },
      { target: "Trotz des Regens sind wir spazieren gegangen.", gloss: { es: "A pesar de la lluvia, salimos a pasear.", en: "Despite the rain, we went for a walk." } },
      { target: "Während des Urlaubs habe ich viel gelesen.", gloss: { es: "Durante las vacaciones leí mucho.", en: "I read a lot during the holiday." } },
      { target: "Aufgrund der hohen Kosten wurde das Projekt gestoppt.", gloss: { es: "Debido a los altos costos, se detuvo el proyecto.", en: "The project was stopped due to the high costs." } },
    ],
    pitfalls: {
      es: "«während dem Urlaub» o «trotz dem Regen» son habituales al hablar, pero en un texto formal se ven como errores: während des Urlaubs, trotz des Regens. Y no olvides la -s del sustantivo: des Urlaubs, no «des Urlaub».",
      en: "'während dem Urlaub' or 'trotz dem Regen' are common in speech, but in formal writing they look like mistakes: während des Urlaubs, trotz des Regens. And don't forget the noun's -s: des Urlaubs, not 'des Urlaub'.",
    },
  },
  {
    id: "de-g-modalpartikeln",
    lang: "de",
    cefr: "B2",
    title: { es: "Partículas modales: doch, ja, mal, eben", en: "Modal particles: doch, ja, mal, eben" },
    short: {
      es: "No cambian el contenido sino el tono: doch insiste, ja = «ya sabes», mal suaviza, eben / halt = «es así».",
      en: "They change the tone, not the content: doch insists, ja = 'as we know', mal softens, eben / halt = 'that's how it is'.",
    },
    rule: {
      es: "Las partículas modales son palabras cortas y sin acento que muestran la actitud de quien habla: insistencia, sorpresa, amabilidad o resignación. Van en el medio de la frase, normalmente después del verbo conjugado y de los pronombres, y nunca en la posición 1. No tienen una traducción fija: en español a menudo equivalen a la entonación o a palabras como «pues», «ya», «a ver» o «total».",
      en: "Modal particles are short, unstressed words that show the speaker's attitude: insistence, surprise, friendliness or resignation. They sit in the middle of the sentence, usually after the conjugated verb and any pronouns, and never in position 1. They have no fixed translation: in English the job is often done by tone of voice or words like 'just', 'after all' or 'well'.",
    },
    steps: [
      { es: "¿Qué actitud quieres mostrar? Pedido amable → mal; insistencia o reproche → doch; sorpresa o algo sabido → ja; resignación → eben / halt.", en: "What attitude do you want? Friendly request → mal; insistence or reproach → doch; surprise or a known fact → ja; resignation → eben / halt." },
      { es: "Colócala detrás del verbo y de los pronombres: Kannst du mir mal helfen?", en: "Place it after the verb and any pronouns: Kannst du mir mal helfen?" },
      { es: "Nunca al principio de la frase ni acentuada.", en: "Never at the start of the sentence, and never stressed." },
      { es: "Se pueden combinar: Komm doch mal vorbei!", en: "They can be combined: Komm doch mal vorbei!" },
    ],
    table: {
      head: ["Partikel", "Ton / tone", "Beispiel"],
      rows: [
        ["doch", "insistir / insist", "Komm doch mit!"],
        ["ja", "sorpresa, algo sabido / surprise, known fact", "Du bist ja schon da!"],
        ["mal", "suavizar / soften", "Schau mal!"],
        ["eben / halt", "resignación / resignation", "Dann nehmen wir eben den Bus."],
        ["denn", "pregunta con interés / curious question", "Was machst du denn hier?"],
      ],
    },
    examples: [
      { target: "Das ist doch nicht so schlimm!", gloss: { es: "¡Pero si no es tan grave!", en: "It's really not that bad!" } },
      { target: "Wir fahren doch fast nur Fahrrad.", gloss: { es: "Si total, casi solo andamos en bici.", en: "We mostly just cycle anyway." } },
      { target: "Dann mieten wir eben eins.", gloss: { es: "Bueno, entonces alquilamos uno y listo.", en: "Well, then we'll just rent one." } },
      { target: "Kannst du mal das Fenster aufmachen?", gloss: { es: "¿Me abres la ventana, por favor?", en: "Could you just open the window?" } },
    ],
    pitfalls: {
      es: "«Mal kannst du mir helfen?» pone la partícula en la posición 1, donde no puede ir. Las partículas van en el medio, tras el verbo y los pronombres: Kannst du mir mal helfen? Y no las traduzcas palabra por palabra: aquí ja no es «sí».",
      en: "'Mal kannst du mir helfen?' puts the particle in position 1, where it can't go. Particles sit in the middle, after the verb and pronouns: Kannst du mir mal helfen? And don't translate them word for word: here ja doesn't mean 'yes'.",
    },
  },

  // ── u24 ──────────────────────────────────────────────────
  {
    id: "de-g-funktionsverben",
    lang: "de",
    cefr: "B2",
    title: { es: "Verbos funcionales: sustantivo + verbo fijo", en: "Noun + verb collocations" },
    short: {
      es: "El verbo va fijo con el sustantivo y no se traduce palabra por palabra: eine Frage stellen, eine Entscheidung treffen.",
      en: "The verb is fixed to the noun and can't be translated word for word: eine Frage stellen, eine Entscheidung treffen.",
    },
    rule: {
      es: "En estas combinaciones el significado está en el sustantivo, y el verbo (stellen, treffen, stehen, kommen, nehmen…) aporta sobre todo la gramática. Por eso hay que aprenderlas como un bloque: en español «hacemos» una pregunta, pero en alemán se «pone» (stellen). Son muy frecuentes en la lengua formal y del trabajo, y a menudo equivalen a un verbo simple: eine Entscheidung treffen = entscheiden.",
      en: "In these pairs the meaning lives in the noun, and the verb (stellen, treffen, stehen, kommen, nehmen…) mostly carries the grammar. That's why you learn them as a block: in English you 'ask' a question, but in German you 'put' it (stellen). They're very common in formal and work language, and often match a single verb: eine Entscheidung treffen = entscheiden.",
    },
    steps: [
      { es: "Aprende el sustantivo con su verbo y su preposición: eine Frage stellen, zur Verfügung stehen.", en: "Learn the noun together with its verb and preposition: eine Frage stellen, zur Verfügung stehen." },
      { es: "Conjuga solo el verbo; el sustantivo no cambia.", en: "Conjugate only the verb; the noun stays the same." },
      { es: "En la frase principal, el verbo va en 2.ª posición y el sustantivo al final: Das kommt nicht in Frage.", en: "In a main clause the verb is in 2nd position and the noun at the end: Das kommt nicht in Frage." },
      { es: "Con modal o en subordinada, el sustantivo va justo antes del verbo: …, weil wir eine Entscheidung treffen müssen.", en: "With a modal or in a subordinate clause, the noun sits right before the verb: …, weil wir eine Entscheidung treffen müssen." },
    ],
    table: {
      head: ["Ausdruck", "= Verb", "es / en"],
      rows: [
        ["eine Frage stellen", "fragen", "hacer una pregunta / ask a question"],
        ["eine Entscheidung treffen", "entscheiden", "tomar una decisión / make a decision"],
        ["Kritik üben", "kritisieren", "criticar / criticise"],
        ["Abschied nehmen", "sich verabschieden", "despedirse / say goodbye"],
        ["zur Verfügung stehen", "verfügbar sein", "estar a disposición / be available"],
        ["in Frage kommen", "möglich sein", "ser una opción / be an option"],
      ],
    },
    examples: [
      { target: "Wir müssen bald eine Entscheidung treffen.", gloss: { es: "Tenemos que tomar una decisión pronto.", en: "We have to make a decision soon." } },
      { target: "Das kommt nicht in Frage!", gloss: { es: "¡Ni hablar!", en: "That's out of the question!" } },
      { target: "Für Fragen stehe ich Ihnen gern zur Verfügung.", gloss: { es: "Quedo a su disposición para cualquier pregunta.", en: "I'm happy to answer any questions." } },
    ],
    pitfalls: {
      es: "«eine Frage machen» o «eine Entscheidung nehmen» calcan el español («hacer», «tomar»). En alemán: eine Frage stellen, eine Entscheidung treffen. Aprende siempre el bloque completo.",
      en: "'eine Frage fragen' or 'eine Entscheidung machen' copy English ('ask', 'make'). German says eine Frage stellen, eine Entscheidung treffen. Always learn the whole block.",
    },
  },
  {
    id: "de-g-redewendungen",
    lang: "de",
    cefr: "B2",
    title: { es: "Expresiones idiomáticas", en: "Idioms" },
    short: {
      es: "El sentido no sale de las palabras: Schwein haben = tener suerte. Apréndelas como bloque; casi todas son informales.",
      en: "The meaning isn't in the words: Schwein haben = be lucky. Learn them as a block; most are informal.",
    },
    rule: {
      es: "Una expresión idiomática tiene un sentido figurado que no se deduce de sus palabras: Schwein haben no tiene nada que ver con cerdos, significa «tener suerte». Su forma es fija: solo se conjuga el verbo y se adapta el pronombre (Ich drücke dir die Daumen). La mayoría son coloquiales, así que úsalas con amigos y colegas, no en una carta formal.",
      en: "An idiom has a figurative meaning you can't work out from its words: Schwein haben has nothing to do with pigs, it means 'be lucky'. Its form is fixed: only the verb is conjugated and the pronoun adjusted (Ich drücke dir die Daumen). Most are colloquial, so use them with friends and colleagues, not in a formal letter.",
    },
    steps: [
      { es: "Reconoce el bloque fijo: Tomaten auf den Augen haben.", en: "Spot the fixed block: Tomaten auf den Augen haben." },
      { es: "Conjuga solo el verbo: Du hast Tomaten auf den Augen!", en: "Conjugate only the verb: Du hast Tomaten auf den Augen!" },
      { es: "Cambia jemandem por la persona en dativo (mir, dir, ihm): Du gehst mir auf die Nerven.", en: "Replace jemandem with the person in the dative (mir, dir, ihm): Du gehst mir auf die Nerven." },
      { es: "Revisa el registro: casi todas son informales.", en: "Check the register: most are informal." },
    ],
    table: {
      head: ["Redewendung", "es", "en"],
      rows: [
        ["Schwein haben", "tener suerte", "be lucky"],
        ["Tomaten auf den Augen haben", "no ver lo obvio", "miss the obvious"],
        ["jemandem die Daumen drücken", "desear suerte", "keep your fingers crossed"],
        ["jemandem auf die Nerven gehen", "sacar de quicio", "get on sb's nerves"],
        ["ins Fettnäpfchen treten", "meter la pata", "put your foot in it"],
        ["Das ist nicht mein Bier.", "no es asunto mío", "not my problem"],
      ],
    },
    examples: [
      { target: "Da hast du aber Schwein gehabt!", gloss: { es: "¡Qué suerte tuviste!", en: "You were really lucky!" } },
      { target: "Ich drücke dir die Daumen!", gloss: { es: "¡Te deseo mucha suerte!", en: "I'll keep my fingers crossed for you!" } },
      { target: "Du gehst mir auf die Nerven!", gloss: { es: "¡Me sacas de quicio!", en: "You're getting on my nerves!" } },
      { target: "Gestern bin ich voll ins Fettnäpfchen getreten.", gloss: { es: "Ayer metí la pata hasta el fondo.", en: "Yesterday I really put my foot in it." } },
    ],
    pitfalls: {
      es: "«Ich kreuze die Finger für dich» traduce la imagen de «cruzar los dedos». En alemán se aprietan los pulgares: Ich drücke dir die Daumen. Las imágenes casi nunca coinciden entre idiomas.",
      en: "'Ich kreuze die Finger für dich' copies 'keep your fingers crossed'. Germans press their thumbs instead: Ich drücke dir die Daumen. The images rarely match across languages.",
    },
  },
  {
    id: "de-g-duzen-siezen",
    lang: "de",
    cefr: "B2",
    title: { es: "du o Sie: tutear y tratar de usted", en: "du or Sie: informal and formal 'you'" },
    short: {
      es: "Sie (verbo en -en) con desconocidos y en el trabajo; du con amigos, familia y niños. El cambio lo propone el mayor.",
      en: "Sie (verb in -en) with strangers and at work; du with friends, family and children. The older person offers du.",
    },
    rule: {
      es: "Sie es la forma de respeto: se escribe con mayúscula, el verbo va como en la 3.ª persona plural (Was meinen Sie?) y sus formas son Ihnen e Ihr. Se usa con desconocidos, en tiendas y oficinas y en muchos trabajos; du, con amigos, familia, niños y a menudo entre gente joven o colegas en empresas informales. Pasar de Sie a du es un pequeño ritual: normalmente lo propone la persona mayor o de más rango («Wollen wir uns duzen?»).",
      en: "Sie is the polite form: it's capitalised, the verb goes like the 3rd person plural (Was meinen Sie?) and its other forms are Ihnen and Ihr. It's used with strangers, in shops and offices and in many workplaces; du with friends, family, children and often among young people or colleagues in relaxed companies. Switching from Sie to du is a small ritual: usually the older or more senior person offers it ('Wollen wir uns duzen?').",
    },
    steps: [
      { es: "¿Amigo, familia, niño? → du.", en: "Friend, family, child? → du." },
      { es: "¿Desconocido, cliente, jefa, persona mayor? → Sie.", en: "Stranger, customer, boss, older person? → Sie." },
      { es: "¿Dudas? Empieza con Sie y espera a que te ofrezcan el du.", en: "Not sure? Start with Sie and wait to be offered du." },
      { es: "Con Sie: verbo en -en, Ihnen, Ihr; con du: verbo en -st, dir, dein.", en: "With Sie: verb in -en, Ihnen, Ihr; with du: verb in -st, dir, dein." },
    ],
    table: {
      head: ["", "du", "Sie"],
      rows: [
        ["Frage", "Was meinst du dazu?", "Was meinen Sie dazu?"],
        ["Dativ", "Ich helfe dir.", "Ich helfe Ihnen."],
        ["Possessiv", "dein Vertrag", "Ihr Vertrag"],
        ["Imperativ", "Komm herein!", "Kommen Sie herein!"],
        ["Gruß", "Tschüss!", "Auf Wiedersehen!"],
        ["Verb", "duzen", "siezen"],
      ],
    },
    examples: [
      { target: "Was meinst du dazu?", gloss: { es: "¿Qué opinas tú?", en: "What do you think? (informal)" } },
      { target: "Was meinen Sie dazu?", gloss: { es: "¿Qué opina usted?", en: "What do you think? (formal)" } },
      { target: "Wollen wir uns duzen?", gloss: { es: "¿Nos tuteamos?", en: "Shall we use du with each other?" } },
      { target: "Ich habe meine neue Chefin geduzt, obwohl im Büro alle Sie sagen.", gloss: { es: "Tuteé a mi nueva jefa, aunque en la oficina todos se tratan de usted.", en: "I called my new boss du, even though everyone in the office uses Sie." } },
    ],
    pitfalls: {
      es: "«Was meint Sie?» mezcla las formas: con Sie el verbo siempre termina en -en, como en plural: Was meinen Sie? Y no tutees por costumbre: en Alemania, tutear a una jefa o a un desconocido puede ser meter la pata (ins Fettnäpfchen treten).",
      en: "'Was meint Sie?' mixes forms: with Sie the verb always ends in -en, like the plural: Was meinen Sie? And don't assume first names mean du: in many offices people use first names with Sie.",
    },
  },
];
