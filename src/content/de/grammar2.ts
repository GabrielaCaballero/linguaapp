import type { GrammarPoint } from "../schema";

// Grammar points for units u09–u16 (A1.2 → B1). Same shape as grammar.ts; linked from the units' pattern items.
export const grammar2: GrammarPoint[] = [
  // ── u09 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-dativ",
    lang: "de",
    cefr: "A1.2",
    title: { es: "El dativo después de mit, zu, bei, von, aus, nach, seit", en: "The dative after mit, zu, bei, von, aus, nach, seit" },
    short: {
      es: "mit, zu, bei, von, aus, nach, seit + dativo: der/das → dem, die → der, plural → den + -n.",
      en: "mit, zu, bei, von, aus, nach, seit + dative: der/das → dem, die → der, plural → den + -n.",
    },
    rule: {
      es: "Algunas preposiciones exigen siempre dativo, da igual si hay movimiento o no: mit, zu, bei, von, aus, nach y seit. El artículo cambia: der y das pasan a dem, die pasa a der, y el plural pasa a den, con una -n extra en el sustantivo.",
      en: "Some prepositions always take the dative, whether there is movement or not: mit, zu, bei, von, aus, nach and seit. The article changes: der and das become dem, die becomes der, and the plural becomes den, with an extra -n on the noun.",
    },
    steps: [
      { es: "¿La preposición es mit, zu, bei, von, aus, nach o seit? Entonces va dativo.", en: "Is the preposition mit, zu, bei, von, aus, nach or seit? Then use the dative." },
      { es: "Mira el género del sustantivo: der, die, das o plural.", en: "Check the noun's gender: der, die, das or plural." },
      { es: "Toma la forma de dativo de la tabla: dem, der, dem, den (o einem, einer, einem).", en: "Take the dative form from the table: dem, der, dem, den (or einem, einer, einem)." },
      { es: "En plural, añade -n al sustantivo si no termina ya en -n o -s: mit den Freunden.", en: "In the plural, add -n to the noun unless it already ends in -n or -s: mit den Freunden." },
    ],
    table: {
      head: ["", "m", "f", "n", { es: "plural", en: "plural" }],
      rows: [
        ["Nominativ", "der / ein", "die / eine", "das / ein", "die"],
        ["Dativ", "dem / einem", "der / einer", "dem / einem", "den (+ -n)"],
      ],
      meanings: [
        { es: "sujeto (nominativo): el / un …", en: "subject (nominative): the / a …" },
        { es: "tras mit, zu, bei… (dativo): al / a un …", en: "after mit, zu, bei… (dative): (to) the / a …" },
      ],
    },
    examples: [
      { target: "Ich fahre mit dem Bus.", gloss: { es: "Voy en autobús.", en: "I go by bus." } },
      { target: "Wir fahren mit der U-Bahn.", gloss: { es: "Vamos en metro.", en: "We take the underground." } },
      { target: "Ich wohne bei meinen Eltern.", gloss: { es: "Vivo en casa de mis padres.", en: "I live with my parents." } },
      { target: "Nach dem Kino gehen wir essen.", gloss: { es: "Después del cine vamos a comer.", en: "After the cinema we're going out to eat." } },
    ],
    pitfalls: {
      es: "«mit den Bus» usa el acusativo, como si fuera un objeto directo. mit siempre pide dativo, también con medios de transporte: mit dem Bus. Y «en autobús» no es «in dem Bus», sino mit dem Bus.",
      en: "'mit den Bus' uses the accusative, as if the bus were a direct object. mit always takes the dative, including for transport: mit dem Bus.",
    },
  },
  {
    id: "de-g-zum-zur",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Contracciones: zum, zur, beim, vom", en: "Contractions: zum, zur, beim, vom" },
    short: {
      es: "zu + dem = zum (m, n); zu + der = zur (f). También bei + dem = beim, von + dem = vom.",
      en: "zu + dem = zum (m, n); zu + der = zur (f). Also bei + dem = beim, von + dem = vom.",
    },
    rule: {
      es: "zu lleva dativo, y su artículo casi siempre se une a la preposición: zu dem → zum, zu der → zur. Pasa lo mismo con bei y von delante de dem (beim, vom), pero no delante de der: bei der Bank, von der Post.",
      en: "zu takes the dative, and its article almost always merges with the preposition: zu dem → zum, zu der → zur. The same happens with bei and von before dem (beim, vom), but not before der: bei der Bank, von der Post.",
    },
    steps: [
      { es: "Mira el género del lugar: der Bahnhof, die Post, das Kino.", en: "Check the place's gender: der Bahnhof, die Post, das Kino." },
      { es: "Pásalo a dativo: der/das → dem, die → der.", en: "Put it in the dative: der/das → dem, die → der." },
      { es: "Une: zu + dem = zum, zu + der = zur.", en: "Merge: zu + dem = zum, zu + der = zur." },
    ],
    table: {
      head: ["", "+ dem (m, n)", "+ der (f)"],
      rows: [
        ["zu", "zum Bahnhof", "zur Post"],
        ["bei", "beim Arzt", "bei der Bank"],
        ["von", "vom Bahnhof", "von der Post"],
      ],
      meanings: [
        { es: "a: a la estación · al correo", en: "to: to the station · to the post office" },
        { es: "en: en el médico · en el banco", en: "at: at the doctor's · at the bank" },
        { es: "de: de la estación · del correo", en: "from: from the station · from the post office" },
      ],
    },
    examples: [
      { target: "Wie komme ich zum Bahnhof?", gloss: { es: "¿Cómo llego a la estación?", en: "How do I get to the station?" } },
      { target: "Ich gehe zur Post.", gloss: { es: "Voy al correo.", en: "I'm going to the post office." } },
      { target: "Gehen Sie geradeaus bis zur Ampel.", gloss: { es: "Siga derecho hasta el semáforo.", en: "Go straight on as far as the traffic lights." } },
      { target: "Wie komme ich zum Krankenhaus?", gloss: { es: "¿Cómo llego al hospital?", en: "How do I get to the hospital?" } },
    ],
    pitfalls: {
      es: "«zu die Apotheke» deja el artículo en nominativo. zu pide dativo (die → der) y se contrae: zur Apotheke. Es como «a el» → «al» en español, pero con dos formas: zum y zur.",
      en: "'zu die Apotheke' leaves the article in the nominative. zu takes the dative (die → der) and contracts: zur Apotheke. Don't use zum for feminine nouns: 'zum Post' → zur Post.",
    },
  },
  {
    id: "de-g-imperativ",
    lang: "de",
    cefr: "A1.2",
    title: { es: "El imperativo: Sie, du e ihr", en: "The imperative: Sie, du and ihr" },
    short: {
      es: "Sie: infinitivo + Sie (Gehen Sie!). du: forma de du sin -st y sin du (du nimmst → Nimm!).",
      en: "Sie: infinitive + Sie (Gehen Sie!). du: the du form without -st and without du (du nimmst → Nimm!).",
    },
    rule: {
      es: "El imperativo pone el verbo en primer lugar. Con Sie se usa el infinitivo seguido de Sie; con du se quita el pronombre y la terminación (-st o -t: du liest → Lies!; si la raíz termina en -t/-d queda -e: Arbeite!), y con ihr solo se quita el pronombre. El cambio e → i se queda (Nimm!), pero la diéresis a → ä desaparece (Fahr!).",
      en: "The imperative puts the verb first. With Sie you use the infinitive followed by Sie; with du you drop the pronoun and the ending (-st or -t: du liest → Lies!; stems in -t/-d keep -e: Arbeite!), and with ihr you just drop the pronoun. The e → i change stays (Nimm!), but the a → ä umlaut disappears (Fahr!).",
    },
    steps: [
      { es: "¿Hablas de Sie, de du o a varias personas (ihr)?", en: "Are you speaking to Sie, du, or several people (ihr)?" },
      { es: "Sie: infinitivo + Sie al principio: Nehmen Sie den Bus.", en: "Sie: infinitive + Sie at the start: Nehmen Sie den Bus." },
      { es: "du: toma la forma de du y quita du y la terminación: du gehst → Geh!, du nimmst → Nimm!, du liest → Lies!", en: "du: take the du form and drop du and the ending: du gehst → Geh!, du nimmst → Nimm!, du liest → Lies!" },
      { es: "Si la forma de du tiene ä, vuelve a a: du fährst → Fahr!", en: "If the du form has ä, go back to a: du fährst → Fahr!" },
    ],
    table: {
      head: ["", "Sie", "du", "ihr"],
      rows: [
        ["gehen", "Gehen Sie!", "Geh!", "Geht!"],
        ["nehmen", "Nehmen Sie!", "Nimm!", "Nehmt!"],
        ["fahren", "Fahren Sie!", "Fahr!", "Fahrt!"],
        ["sein", "Seien Sie!", "Sei!", "Seid!"],
      ],
      meanings: [
        { es: "ir: ¡Vaya! · ¡Ve! · ¡Vayan!", en: "to go: Go! (Sie · du · ihr)" },
        { es: "tomar: ¡Tome! · ¡Toma! · ¡Tomen!", en: "to take: Take! (Sie · du · ihr)" },
        { es: "ir (en vehículo): ¡Vaya! · ¡Ve! · ¡Vayan!", en: "to go by vehicle: Go! (Sie · du · ihr)" },
        { es: "ser / estar: ¡Sea! · ¡Sé! · ¡Sean!", en: "to be: Be! (Sie · du · ihr)" },
      ],
    },
    examples: [
      { target: "Gehen Sie geradeaus und dann links.", gloss: { es: "Siga derecho y luego doble a la izquierda.", en: "Go straight on and then left." } },
      { target: "Nehmen Sie die U-Bahn.", gloss: { es: "Tome el metro.", en: "Take the underground." } },
      { target: "Nimm den Bus!", gloss: { es: "¡Toma el autobús!", en: "Take the bus!" } },
    ],
    pitfalls: {
      es: "«Nimm Sie den Bus» mezcla dos formas: Nimm es de du y no lleva pronombre. Con Sie: Nehmen Sie den Bus. Ojo: «Sie nehmen den Bus» (sin el verbo primero) es una afirmación, no una orden.",
      en: "'Nimm Sie den Bus' mixes two forms: Nimm is the du form and takes no pronoun. With Sie: Nehmen Sie den Bus. Note that 'Sie nehmen den Bus' (verb not first) is a statement, not an instruction.",
    },
  },

  // ── u10 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-perfekt-haben",
    lang: "de",
    cefr: "A2",
    title: { es: "El Perfekt con haben", en: "The Perfekt with haben" },
    short: {
      es: "haben conjugado en 2.ª posición + participio al final: Ich habe Pizza gegessen.",
      en: "Conjugated haben in 2nd position + past participle at the end: Ich habe Pizza gegessen.",
    },
    rule: {
      es: "El Perfekt es el pasado normal de la conversación. Se forma con haben conjugado en segunda posición y el participio al final de la frase, como una pinza que encierra el resto. Los verbos regulares hacen el participio con ge-…-t; los irregulares, con ge-…-en y a veces otra vocal.",
      en: "The Perfekt is the everyday spoken past. It is made with conjugated haben in second position and the participle at the very end, like a bracket around the rest. Regular verbs form the participle with ge-…-t; irregular ones with ge-…-en, sometimes with a new vowel.",
    },
    steps: [
      { es: "Conjuga haben según la persona y ponlo en 2.ª posición.", en: "Conjugate haben for the person and put it in 2nd position." },
      { es: "¿Verbo regular? Participio ge- + raíz + -t: machen → gemacht.", en: "Regular verb? Participle ge- + stem + -t: machen → gemacht." },
      { es: "¿Irregular? ge- + … + -en, a menudo con cambio de vocal: treffen → getroffen. Apréndelo con el verbo.", en: "Irregular? ge- + … + -en, often with a vowel change: treffen → getroffen. Learn it with the verb." },
      { es: "Pon el participio al final de la frase.", en: "Put the participle at the end of the sentence." },
    ],
    table: {
      head: ["", "machen", "essen"],
      rows: [
        ["ich", "habe gemacht", "habe gegessen"],
        ["du", "hast gemacht", "hast gegessen"],
        ["er / sie / es", "hat gemacht", "hat gegessen"],
        ["wir", "haben gemacht", "haben gegessen"],
        ["ihr", "habt gemacht", "habt gegessen"],
        ["sie / Sie", "haben gemacht", "haben gegessen"],
      ],
      meanings: [
        { es: "yo hice · comí", en: "I did · ate" },
        { es: "tú hiciste · comiste", en: "you did · ate (du)" },
        { es: "él, ella hizo · comió", en: "he, she did · ate" },
        { es: "nosotros hicimos · comimos", en: "we did · ate" },
        { es: "ustedes hicieron · comieron (de confianza)", en: "you did · ate (several friends)" },
        { es: "ellos · usted: hicieron · comieron", en: "they · you (formal): did · ate" },
      ],
    },
    examples: [
      { target: "Was hast du am Wochenende gemacht?", gloss: { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" } },
      { target: "Ich habe meine Oma besucht.", gloss: { es: "Visité a mi abuela.", en: "I visited my grandma." } },
      { target: "Wir haben zusammen gekocht.", gloss: { es: "Cocinamos juntos.", en: "We cooked together." } },
    ],
    pitfalls: {
      es: "«Ich habe gegessen Pizza» copia el orden del español («he comido pizza»). En alemán el participio va al final: Ich habe Pizza gegessen. Y «gegesst» no existe: essen es irregular → gegessen.",
      en: "'Ich habe gegessen Pizza' copies English word order. In German the participle goes last: Ich habe Pizza gegessen. And 'gegesst' doesn't exist: essen is irregular → gegessen.",
    },
  },
  {
    id: "de-g-perfekt-sein",
    lang: "de",
    cefr: "A2",
    title: { es: "El Perfekt con sein", en: "The Perfekt with sein" },
    short: {
      es: "Movimiento de A a B o cambio de estado (y bleiben, sein) → sein: Ich bin gefahren. El resto → haben.",
      en: "Movement from A to B or change of state (plus bleiben, sein) → sein: Ich bin gefahren. All others → haben.",
    },
    rule: {
      es: "Algunos verbos forman el Perfekt con sein en vez de haben: los de movimiento de un lugar a otro (gehen, fahren, kommen), los de cambio de estado (aufstehen, einschlafen) y además bleiben y sein. El orden es el mismo: sein en 2.ª posición, participio al final.",
      en: "Some verbs form the Perfekt with sein instead of haben: verbs of moving from one place to another (gehen, fahren, kommen), verbs of change of state (aufstehen, einschlafen), plus bleiben and sein. The word order is the same: sein in 2nd position, participle at the end.",
    },
    steps: [
      { es: "¿El verbo expresa ir de un lugar a otro o un cambio de estado? → sein.", en: "Does the verb mean going from one place to another, or a change of state? → sein." },
      { es: "¿Es bleiben o sein? → también sein.", en: "Is it bleiben or sein? → also sein." },
      { es: "Si no, usa haben.", en: "Otherwise, use haben." },
      { es: "Conjuga el auxiliar en 2.ª posición y pon el participio al final.", en: "Conjugate the auxiliary in 2nd position and put the participle at the end." },
    ],
    table: {
      head: ["", "fahren", "aufstehen"],
      rows: [
        ["ich", "bin gefahren", "bin aufgestanden"],
        ["du", "bist gefahren", "bist aufgestanden"],
        ["er / sie / es", "ist gefahren", "ist aufgestanden"],
        ["wir", "sind gefahren", "sind aufgestanden"],
        ["ihr", "seid gefahren", "seid aufgestanden"],
        ["sie / Sie", "sind gefahren", "sind aufgestanden"],
      ],
      meanings: [
        { es: "yo fui · me levanté", en: "I went · got up" },
        { es: "tú fuiste · te levantaste", en: "you went · got up (du)" },
        { es: "él, ella fue · se levantó", en: "he, she went · got up" },
        { es: "nosotros fuimos · nos levantamos", en: "we went · got up" },
        { es: "ustedes fueron · se levantaron (de confianza)", en: "you went · got up (several friends)" },
        { es: "ellos · usted: fueron · se levantaron", en: "they · you (formal): went · got up" },
      ],
    },
    examples: [
      { target: "Wir sind nach Hamburg gefahren.", gloss: { es: "Fuimos a Hamburgo.", en: "We went to Hamburg." } },
      { target: "Ich bin um elf Uhr nach Hause gekommen.", gloss: { es: "Llegué a casa a las once.", en: "I got home at eleven." } },
      { target: "Sie ist am Sonntag zu Hause geblieben.", gloss: { es: "El domingo se quedó en casa.", en: "She stayed at home on Sunday." } },
    ],
    pitfalls: {
      es: "«Ich habe nach Berlin gefahren» sigue al español, que siempre usa «haber». En alemán, ir de un sitio a otro va con sein: Ich bin nach Berlin gefahren.",
      en: "'Ich habe nach Berlin gefahren' follows English, which always uses 'have'. In German, moving from place to place takes sein: Ich bin nach Berlin gefahren.",
    },
  },
  {
    id: "de-g-partizip",
    lang: "de",
    cefr: "A2",
    title: { es: "Cómo se forma el participio", en: "How to form the past participle" },
    short: {
      es: "ge- va delante (gemacht) o en medio en separables (eingekauft); sin ge-: be-/ver-/er- y -ieren (besucht).",
      en: "ge- goes in front (gemacht), or inside separable verbs (eingekauft); no ge-: be-/ver-/er- and -ieren (besucht).",
    },
    rule: {
      es: "El prefijo ge- solo aparece cuando la primera sílaba del verbo lleva el acento. Por eso los separables lo ponen entre el prefijo y la raíz (ein-ge-kauft), y los verbos con prefijo átono (be-, ver-, er-) o en -ieren no lo llevan (besucht, telefoniert).",
      en: "The ge- prefix only appears when the verb's first syllable is stressed. That's why separable verbs put it between the prefix and the stem (ein-ge-kauft), and verbs with an unstressed prefix (be-, ver-, er-) or ending in -ieren have none (besucht, telefoniert).",
    },
    steps: [
      { es: "¿Es separable (auf-, ein-, an-…)? ge- va entre prefijo y raíz: aufgestanden.", en: "Is it separable (auf-, ein-, an-…)? ge- goes between prefix and stem: aufgestanden." },
      { es: "¿Empieza por be-, ver-, er- o termina en -ieren? Sin ge-: besucht, verstanden, telefoniert.", en: "Does it start with be-, ver-, er-, or end in -ieren? No ge-: besucht, verstanden, telefoniert." },
      { es: "Si no, ge- delante: gemacht, gegessen.", en: "Otherwise, ge- in front: gemacht, gegessen." },
      { es: "Regular → -t al final; irregular → -en (apréndelo con el verbo).", en: "Regular → -t at the end; irregular → -en (learn it with the verb)." },
    ],
    table: {
      head: [{ es: "forma", en: "pattern" }, { es: "infinitivo", en: "infinitive" }, { es: "participio", en: "past participle" }],
      rows: [
        ["ge- … -t", "machen", "gemacht"],
        ["ge- … -en", "essen", "gegessen"],
        ["… ge …", "einkaufen", "eingekauft"],
        ["… ge …", "aufstehen", "aufgestanden"],
        ["be- / ver- / er-", "besuchen", "besucht"],
        ["be- / ver- / er-", "verstehen", "verstanden"],
        ["-ieren", "telefonieren", "telefoniert"],
      ],
      meanings: [
        { es: "regular: hacer → hecho", en: "regular: to do → done" },
        { es: "irregular: comer → comido", en: "irregular: to eat → eaten" },
        { es: "separable: hacer las compras → (hecho) las compras", en: "separable: to do the shopping → shopped" },
        { es: "separable: levantarse → levantado", en: "separable: to get up → got up" },
        { es: "sin ge-: visitar → visitado", en: "no ge-: to visit → visited" },
        { es: "sin ge-: entender → entendido", en: "no ge-: to understand → understood" },
        { es: "sin ge-: hablar por teléfono → hablado", en: "no ge-: to phone → phoned" },
      ],
    },
    examples: [
      { target: "Ich bin um sieben Uhr aufgestanden.", gloss: { es: "Me levanté a las siete.", en: "I got up at seven." } },
      { target: "Wir haben ein Museum besucht.", gloss: { es: "Visitamos un museo.", en: "We visited a museum." } },
      { target: "Ich habe mit meiner Mutter telefoniert.", gloss: { es: "Hablé por teléfono con mi madre.", en: "I spoke to my mother on the phone." } },
    ],
    pitfalls: {
      es: "«gebesucht» añade ge- a un verbo con be-, que nunca lo lleva: besucht. Igual con «getelefoniert» → telefoniert y «geaufstanden» → aufgestanden (ge- va en medio).",
      en: "'gebesucht' adds ge- to a be- verb, which never takes it: besucht. Likewise 'getelefoniert' → telefoniert, and 'geaufstanden' → aufgestanden (ge- goes inside).",
    },
  },
  {
    id: "de-g-war-hatte",
    lang: "de",
    cefr: "A2",
    title: { es: "war y hatte: el pasado de sein y haben", en: "war and hatte: the past of sein and haben" },
    short: {
      es: "Para sein y haben se usa el Präteritum: ich war (era/estaba), ich hatte (tenía/tuve).",
      en: "For sein and haben, use the Präteritum: ich war (I was), ich hatte (I had).",
    },
    rule: {
      es: "Al hablar del pasado, sein y haben casi siempre van en Präteritum y no en Perfekt: Ich war müde suena más natural que Ich bin müde gewesen. ich y er/sie/es tienen la misma forma, sin terminación.",
      en: "When talking about the past, sein and haben nearly always use the Präteritum rather than the Perfekt: Ich war müde sounds more natural than Ich bin müde gewesen. ich and er/sie/es share the same form, with no ending.",
    },
    steps: [
      { es: "¿El verbo es sein (ser/estar) o haben (tener)?", en: "Is the verb sein (be) or haben (have)?" },
      { es: "sein → war-, haben → hatte-.", en: "sein → war-, haben → hatte-." },
      { es: "Añade la terminación: ich/er -, du -st, wir/sie -en, ihr -t.", en: "Add the ending: ich/er -, du -st, wir/sie -en, ihr -t." },
    ],
    table: {
      head: ["", "sein", "haben"],
      rows: [
        ["ich", "war", "hatte"],
        ["du", "warst", "hattest"],
        ["er / sie / es", "war", "hatte"],
        ["wir", "waren", "hatten"],
        ["ihr", "wart", "hattet"],
        ["sie / Sie", "waren", "hatten"],
      ],
      meanings: [
        { es: "yo era / estaba · tenía", en: "I was · had" },
        { es: "tú eras / estabas · tenías", en: "you were · had (du)" },
        { es: "él, ella era / estaba · tenía", en: "he, she was · had" },
        { es: "nosotros éramos / estábamos · teníamos", en: "we were · had" },
        { es: "ustedes eran / estaban · tenían (de confianza)", en: "you were · had (several friends)" },
        { es: "ellos · usted: eran / estaban · tenían", en: "they · you (formal): were · had" },
      ],
    },
    examples: [
      { target: "Gestern war ich sehr müde.", gloss: { es: "Ayer estaba muy cansado.", en: "Yesterday I was very tired." } },
      { target: "Ich hatte keine Zeit.", gloss: { es: "No tenía tiempo.", en: "I didn't have time." } },
      { target: "Das war toll!", gloss: { es: "¡Estuvo genial!", en: "That was great!" } },
      { target: "Wie war dein Wochenende?", gloss: { es: "¿Qué tal tu fin de semana?", en: "How was your weekend?" } },
    ],
    pitfalls: {
      es: "«Gestern war ich keine Zeit» confunde los dos verbos: «tener tiempo» es haben → Gestern hatte ich keine Zeit. war corresponde a «era» o «estaba», según el contexto.",
      en: "'Gestern war ich keine Zeit' mixes up the two verbs: 'have time' is haben → Gestern hatte ich keine Zeit. And there is no ending for ich: 'ich warte' is a different verb (I wait), not 'I was'.",
    },
  },

  // ── u11 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-weil",
    lang: "de",
    cefr: "A2",
    title: { es: "weil: el verbo va al final", en: "weil: the verb goes to the end" },
    short: {
      es: "Después de weil, el verbo conjugado va al final: …, weil ich krank bin.",
      en: "After weil, the conjugated verb goes to the end: …, weil ich krank bin.",
    },
    rule: {
      es: "weil (porque) abre una oración subordinada, y en las subordinadas el verbo conjugado se va al final. Si hay un modal o un tiempo compuesto, el verbo conjugado es lo último de todo. La oración con weil siempre va separada por coma: delante de weil, o detrás de la subordinada si empieza la frase.",
      en: "weil (because) opens a subordinate clause, and in subordinate clauses the conjugated verb moves to the end. With a modal or a compound tense, the conjugated verb is the very last word. The weil clause is always set off by a comma: before weil, or after the clause when it starts the sentence.",
    },
    steps: [
      { es: "Escribe una coma y weil.", en: "Write a comma and weil." },
      { es: "Normalmente el sujeto va justo después: weil ich…", en: "Usually the subject comes right after it: weil ich…" },
      { es: "Añade el resto de la frase.", en: "Add the rest of the clause." },
      { es: "Termina con el verbo conjugado: …, weil ich Fieber habe.", en: "Finish with the conjugated verb: …, weil ich Fieber habe." },
    ],
    table: {
      head: [{ es: "oración principal", en: "main clause" }, { es: "con weil (porque)", en: "with weil (because)" }],
      rows: [
        ["Ich bin krank.", "…, weil ich krank bin."],
        ["Ich habe Fieber.", "…, weil ich Fieber habe."],
        ["Ich muss arbeiten.", "…, weil ich arbeiten muss."],
        ["Ich habe schlecht geschlafen.", "…, weil ich schlecht geschlafen habe."],
      ],
      meanings: [
        { es: "Estoy enfermo/a. · …porque estoy enfermo/a.", en: "I'm ill. · …because I'm ill." },
        { es: "Tengo fiebre. · …porque tengo fiebre.", en: "I have a fever. · …because I have a fever." },
        { es: "Tengo que trabajar. · …porque tengo que trabajar.", en: "I have to work. · …because I have to work." },
        { es: "Dormí mal. · …porque dormí mal.", en: "I slept badly. · …because I slept badly." },
      ],
    },
    examples: [
      { target: "Ich kann nicht kommen, weil ich krank bin.", gloss: { es: "No puedo ir porque estoy enferma.", en: "I can't come because I'm ill." } },
      { target: "Ich bleibe zu Hause, weil ich Fieber habe.", gloss: { es: "Me quedo en casa porque tengo fiebre.", en: "I'm staying at home because I have a fever." } },
      { target: "Weil ich krank bin, bleibe ich im Bett.", gloss: { es: "Como estoy enfermo, me quedo en la cama.", en: "Because I'm ill, I'm staying in bed." } },
    ],
    pitfalls: {
      es: "«…, weil ich bin krank» copia el orden de «porque estoy enfermo». Con weil el verbo va al final: …, weil ich krank bin. Si quieres el orden normal, usa denn: …, denn ich bin krank.",
      en: "'…, weil ich bin krank' copies the order of 'because I am ill'. With weil the verb goes last: …, weil ich krank bin. If you want normal word order, use denn: …, denn ich bin krank.",
    },
  },
  {
    id: "de-g-weh",
    lang: "de",
    cefr: "A2",
    title: { es: "Decir qué te duele: tut weh / tun weh", en: "Saying what hurts: tut weh / tun weh" },
    short: {
      es: "Como «doler»: persona en dativo (mir, dir…) y tut/tun según la parte del cuerpo: Mir tun die Füße weh.",
      en: "Person in the dative (mir, dir…), verb agrees with the body part: Mir tut der Kopf weh, Mir tun die Füße weh.",
    },
    rule: {
      es: "wehtun funciona como «doler»: la parte del cuerpo es el sujeto y la persona va en dativo (mir, dir, ihm…). Por eso el verbo concuerda con la parte del cuerpo: tut con una, tun con varias. weh va al final de la frase.",
      en: "In wehtun, the body part is the subject and the person who hurts is in the dative (mir, dir, ihm…). So the verb agrees with the body part: tut for one, tun for several. weh goes at the end of the sentence.",
    },
    steps: [
      { es: "¿A quién le duele? Pon la persona en dativo: ich → mir, du → dir, er → ihm.", en: "Who is in pain? Put the person in the dative: ich → mir, du → dir, er → ihm." },
      { es: "¿Qué duele? ¿Una parte (tut) o varias (tun)?", en: "What hurts? One body part (tut) or several (tun)?" },
      { es: "Orden: Mir + tut/tun + der Kopf / die Füße + weh.", en: "Order: Mir + tut/tun + der Kopf / die Füße + weh." },
    ],
    table: {
      head: [{ es: "persona", en: "person" }, { es: "dativo", en: "dative" }, { es: "ejemplo", en: "example" }],
      rows: [
        ["ich", "mir", "Mir tut der Kopf weh."],
        ["du", "dir", "Tut dir der Bauch weh?"],
        ["er", "ihm", "Ihm tut der Rücken weh."],
        ["sie", "ihr", "Ihr tun die Füße weh."],
        ["wir", "uns", "Uns tun die Beine weh."],
        ["ihr", "euch", "Tut euch der Hals weh?"],
        ["Sie", "Ihnen", "Was tut Ihnen weh?"],
      ],
      meanings: [
        { es: "Me duele la cabeza.", en: "My head hurts." },
        { es: "¿Te duele la barriga?", en: "Does your stomach hurt?" },
        { es: "A él le duele la espalda.", en: "His back hurts." },
        { es: "A ella le duelen los pies.", en: "Her feet hurt." },
        { es: "Nos duelen las piernas.", en: "Our legs hurt." },
        { es: "¿Les duele la garganta? (de confianza)", en: "Does your throat hurt? (several friends)" },
        { es: "¿Qué le duele (a usted)?", en: "What hurts? (formal)" },
      ],
    },
    examples: [
      { target: "Mir tut der Rücken weh.", gloss: { es: "Me duele la espalda.", en: "My back hurts." } },
      { target: "Mir tun die Beine weh.", gloss: { es: "Me duelen las piernas.", en: "My legs hurt." } },
      { target: "Tut dir der Hals weh?", gloss: { es: "¿Te duele la garganta?", en: "Does your throat hurt?" } },
    ],
    pitfalls: {
      es: "«Mir tut die Füße weh» deja el verbo en singular. Igual que «me duelen los pies», con varias partes va plural: Mir tun die Füße weh.",
      en: "'Ich tue weh' copies 'I hurt', but the body part is the subject and the person goes in the dative: Mir tut der Kopf weh. With several body parts, the verb is plural: Mir tun die Füße weh.",
    },
  },
  {
    id: "de-g-sollen-duerfen",
    lang: "de",
    cefr: "A2",
    title: { es: "müssen, dürfen y sollen: obligación, permiso y prohibición", en: "müssen, dürfen and sollen: obligation, permission and prohibition" },
    short: {
      es: "nicht müssen = no hace falta; nicht dürfen = está prohibido; sollen = alguien te dice que lo hagas.",
      en: "nicht müssen = don't need to; nicht dürfen = mustn't; sollen = someone else tells you to.",
    },
    rule: {
      es: "müssen expresa obligación, dürfen permiso y sollen una indicación de otra persona (el médico, el jefe). Con nicht cambian mucho: nicht müssen significa que no hace falta, y nicht dürfen que está prohibido. Como todos los modales, van en 2.ª posición con el infinitivo al final.",
      en: "müssen expresses obligation, dürfen permission, and sollen an instruction from someone else (the doctor, the boss). With nicht they change a lot: nicht müssen means there's no need, and nicht dürfen means it's forbidden. Like all modals, they go in 2nd position with the infinitive at the end.",
    },
    steps: [
      { es: "¿Es obligatorio? → müssen.", en: "Is it obligatory? → müssen." },
      { es: "¿No hace falta? → nicht müssen. ¿Está prohibido? → nicht dürfen.", en: "No need? → nicht müssen. Forbidden? → nicht dürfen." },
      { es: "¿Te lo pide o recomienda otra persona? → sollen.", en: "Is someone else asking or advising you to? → sollen." },
      { es: "Modal conjugado en 2.ª posición, infinitivo al final.", en: "Conjugated modal in 2nd position, infinitive at the end." },
    ],
    table: {
      head: ["", "müssen", "dürfen", "sollen"],
      rows: [
        ["ich", "muss", "darf", "soll"],
        ["du", "musst", "darfst", "sollst"],
        ["er / sie / es", "muss", "darf", "soll"],
        ["wir", "müssen", "dürfen", "sollen"],
        ["ihr", "müsst", "dürft", "sollt"],
        ["sie / Sie", "müssen", "dürfen", "sollen"],
      ],
      meanings: [
        { es: "yo tengo que · puedo (me dejan) · debo (me lo piden)", en: "I must · may · am supposed to" },
        { es: "tú tienes que · puedes · debes", en: "you must · may · are supposed to (du)" },
        { es: "él, ella tiene que · puede · debe", en: "he, she must · may · is supposed to" },
        { es: "nosotros tenemos que · podemos · debemos", en: "we must · may · are supposed to" },
        { es: "ustedes tienen que · pueden · deben (de confianza)", en: "you must · may · are supposed to (several friends)" },
        { es: "ellos · usted: tienen que · pueden · deben", en: "they · you (formal): must · may · are supposed to" },
      ],
    },
    examples: [
      { target: "Hier darf man nicht rauchen.", gloss: { es: "Aquí no se puede fumar.", en: "You mustn't smoke here." } },
      { target: "Sie sollen drei Tage im Bett bleiben.", gloss: { es: "(El médico dice que) tiene que quedarse tres días en cama.", en: "You're to stay in bed for three days (doctor's orders)." } },
      { target: "Du musst morgen nicht arbeiten.", gloss: { es: "Mañana no tienes que trabajar.", en: "You don't have to work tomorrow." } },
    ],
    pitfalls: {
      es: "«Du musst nicht rauchen» no prohíbe nada: significa «no tienes que fumar». Para «no puedes fumar» se usa dürfen: Du darfst nicht rauchen.",
      en: "'Du musst nicht rauchen' doesn't forbid anything: it means 'you don't have to smoke'. English 'mustn't' is nicht dürfen: Du darfst nicht rauchen.",
    },
  },

  // ── u12 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-wechselpraep",
    lang: "de",
    cefr: "A2",
    title: { es: "Preposiciones de dos casos: Wo? y Wohin?", en: "Two-way prepositions: Wo? and Wohin?" },
    short: {
      es: "in, an, auf… + dativo si es ¿dónde? (im Park), + acusativo si es ¿adónde? (in den Park).",
      en: "in, an, auf… + dative for where? (im Park), + accusative for where to? (in den Park).",
    },
    rule: {
      es: "Nueve preposiciones (in, an, auf, über, unter, vor, hinter, neben, zwischen) pueden llevar dos casos. Si algo está en un lugar (Wo?), van con dativo; si algo va hacia un lugar (Wohin?), con acusativo. Por eso hay parejas de verbos: liegen (estar) + dativo, legen (poner) + acusativo.",
      en: "Nine prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen) can take two cases. If something is at a place (Wo?), they take the dative; if something moves to a place (Wohin?), the accusative. That's why verbs come in pairs: liegen (lie) + dative, legen (put) + accusative.",
    },
    steps: [
      { es: "¿La preposición es una de las nueve?", en: "Is the preposition one of the nine?" },
      { es: "Pregúntate: ¿Wo? (posición, también moverse dentro de un lugar: Ich laufe im Park) o ¿Wohin? (dirección: hacia un lugar)", en: "Ask yourself: Wo? (position, including moving around within a place: Ich laufe im Park) or Wohin? (direction: towards a place)" },
      { es: "Wo? → dativo: dem, der, dem, den. Wohin? → acusativo: den, die, das, die.", en: "Wo? → dative: dem, der, dem, den. Wohin? → accusative: den, die, das, die." },
      { es: "Contrae si se puede: in dem → im, an dem → am, in das → ins, auf das → aufs.", en: "Contract where possible: in dem → im, an dem → am, in das → ins, auf das → aufs." },
    ],
    table: {
      head: ["", { es: "Wo? (¿dónde?, dativo)", en: "Wo? (where?, dative)" }, { es: "Wohin? (¿adónde?, acusativo)", en: "Wohin? (where to?, accusative)" }],
      rows: [
        ["der Park", "im Park", "in den Park"],
        ["die Stadt", "in der Stadt", "in die Stadt"],
        ["das Bett", "auf dem Bett", "aufs Bett"],
        ["das Meer", "am Meer", "ans Meer"],
        ["die Berge", "in den Bergen", "in die Berge"],
      ],
      meanings: [
        { es: "el parque: en el parque · al parque", en: "the park: in the park · into the park" },
        { es: "la ciudad: en la ciudad · a la ciudad", en: "the town: in town · into town" },
        { es: "la cama: sobre la cama · (poner) sobre la cama", en: "the bed: on the bed · onto the bed" },
        { es: "el mar: junto al mar · al mar", en: "the sea: by the sea · to the seaside" },
        { es: "las montañas: en la montaña · a la montaña", en: "the mountains: in · to the mountains" },
      ],
    },
    examples: [
      { target: "Der Koffer liegt auf dem Bett.", gloss: { es: "La maleta está sobre la cama.", en: "The suitcase is on the bed." } },
      { target: "Ich lege den Koffer aufs Bett.", gloss: { es: "Pongo la maleta sobre la cama.", en: "I put the suitcase on the bed." } },
      { target: "Wir haben ein Hotel am Meer gebucht.", gloss: { es: "Reservamos un hotel junto al mar.", en: "We booked a hotel by the sea." } },
      { target: "Im Sommer fahren wir ans Meer.", gloss: { es: "En verano vamos al mar.", en: "In summer we go to the seaside." } },
    ],
    pitfalls: {
      es: "«Ich gehe in dem Park» usa dativo porque el español dice «en el parque» en los dos casos. Si hay movimiento hacia el lugar, va acusativo: Ich gehe in den Park.",
      en: "'Ich gehe in dem Park' uses the dative because English says 'in the park' both ways. When you move into the place, use the accusative: Ich gehe in den Park.",
    },
  },
  {
    id: "de-g-komparativ",
    lang: "de",
    cefr: "A2",
    title: { es: "Comparativo y superlativo", en: "Comparative and superlative" },
    short: {
      es: "Comparativo: -er + als (schneller als). Superlativo: am -sten (am schnellsten). gut → besser → am besten.",
      en: "Comparative: -er + als (schneller als). Superlative: am -sten (am schnellsten). gut → besser → am besten.",
    },
    rule: {
      es: "El alemán no usa «más» para comparar: añade -er al adjetivo y compara con als. El superlativo después del verbo es am + adjetivo + -sten. Muchos adjetivos cortos con a, o, u toman diéresis (groß → größer), y algunos son irregulares.",
      en: "German doesn't use a word like 'more' with adjectives: it adds -er and compares with als. The superlative after a verb is am + adjective + -sten. Many short adjectives with a, o, u take an umlaut (groß → größer), and a few are irregular.",
    },
    steps: [
      { es: "Añade -er al adjetivo: schnell → schneller.", en: "Add -er to the adjective: schnell → schneller." },
      { es: "Si es corto con a, o, u, comprueba si lleva diéresis: warm → wärmer, alt → älter.", en: "If it's short with a, o, u, check for an umlaut: warm → wärmer, alt → älter." },
      { es: "Compara con als: Der Zug ist schneller als der Bus.", en: "Compare with als: Der Zug ist schneller als der Bus." },
      { es: "Superlativo: am …-sten; tras -t o -d, am …-esten (am ältesten).", en: "Superlative: am …-sten; after -t or -d, am …-esten (am ältesten)." },
    ],
    table: {
      head: [{ es: "forma base", en: "base form" }, { es: "comparativo", en: "comparative" }, { es: "superlativo", en: "superlative" }],
      rows: [
        ["schnell", "schneller", "am schnellsten"],
        ["warm", "wärmer", "am wärmsten"],
        ["alt", "älter", "am ältesten"],
        ["groß", "größer", "am größten"],
        ["gut", "besser", "am besten"],
        ["viel", "mehr", "am meisten"],
        ["gern", "lieber", "am liebsten"],
      ],
      meanings: [
        { es: "rápido · más rápido · lo más rápido", en: "fast · faster · fastest" },
        { es: "cálido · más cálido · lo más cálido", en: "warm · warmer · warmest" },
        { es: "viejo · mayor · el mayor", en: "old · older · oldest" },
        { es: "grande · más grande · lo más grande", en: "big · bigger · biggest" },
        { es: "bueno, bien · mejor · lo mejor", en: "good · better · best" },
        { es: "mucho · más · lo más", en: "much · more · most" },
        { es: "con gusto · preferir · lo que más me gusta", en: "gladly · rather · most of all" },
      ],
    },
    examples: [
      { target: "Der Zug ist schneller als der Bus.", gloss: { es: "El tren es más rápido que el autobús.", en: "The train is faster than the bus." } },
      { target: "Ich fahre lieber mit dem Zug.", gloss: { es: "Prefiero ir en tren.", en: "I'd rather go by train." } },
      { target: "Im Süden ist es am wärmsten.", gloss: { es: "En el sur es donde hace más calor.", en: "It's warmest in the south." } },
    ],
    pitfalls: {
      es: "«mehr groß» traduce «más grande» palabra por palabra. En alemán se añade -er: größer. Y «que» en la comparación es als, no dass: größer als München.",
      en: "'mehr groß' copies English 'more' + adjective. German adds -er instead: größer. And 'than' is als, not dann: größer als München.",
    },
  },
  {
    id: "de-g-wetter",
    lang: "de",
    cefr: "A2",
    title: { es: "Hablar del tiempo con es", en: "Talking about the weather with es" },
    short: {
      es: "El tiempo lleva «es» como sujeto: Es regnet. Es ist kalt. Si algo va delante: Morgen regnet es.",
      en: "Weather takes 'es' as its subject: Es regnet. Es ist kalt. If something comes first: Morgen regnet es.",
    },
    rule: {
      es: "En alemán toda frase necesita un sujeto, también cuando nadie hace la acción. Para el tiempo ese sujeto es es: es regnet, es schneit, es ist kalt, es wird warm. Si otra palabra ocupa el primer lugar, es pasa detrás del verbo (Morgen regnet es); la excepción es die Sonne scheint.",
      en: "In German every sentence needs a subject, even when nobody is doing anything. For weather that subject is es: es regnet, es schneit, es ist kalt, es wird warm. If another word comes first, es moves after the verb (Morgen regnet es); the exception is die Sonne scheint.",
    },
    steps: [
      { es: "¿Hay un verbo de tiempo (regnen, schneien)? → es + verbo: Es regnet.", en: "Is there a weather verb (regnen, schneien)? → es + verb: Es regnet." },
      { es: "¿Es un adjetivo (kalt, warm)? → es ist + adjetivo; para un cambio, es wird + adjetivo.", en: "Is it an adjective (kalt, warm)? → es ist + adjective; for a change, es wird + adjective." },
      { es: "Si empiezas con morgen, heute, im Norden…, el verbo va 2.º y es detrás: Morgen wird es kalt.", en: "If you start with morgen, heute, im Norden…, the verb comes 2nd and es after it: Morgen wird es kalt." },
    ],
    table: {
      head: [{ es: "es + verbo", en: "es + verb" }, { es: "es ist + adjetivo", en: "es ist + adjective" }, { es: "es wird + adjetivo", en: "es wird + adjective" }],
      rows: [
        ["Es regnet.", "Es ist kalt.", "Es wird kalt."],
        ["Es schneit.", "Es ist warm.", "Es wird warm."],
        ["Es donnert.", "Es ist windig.", "Es wird wärmer."],
      ],
      meanings: [
        { es: "Llueve. · Hace frío. · Empieza a hacer frío.", en: "It's raining. · It's cold. · It's getting cold." },
        { es: "Nieva. · Hace calor. · Empieza a hacer calor.", en: "It's snowing. · It's warm. · It's getting warm." },
        { es: "Truena. · Hay viento. · Hace más calor.", en: "It's thundering. · It's windy. · It's getting warmer." },
      ],
    },
    examples: [
      { target: "Wie ist das Wetter in Berlin?", gloss: { es: "¿Qué tiempo hace en Berlín?", en: "What's the weather like in Berlin?" } },
      { target: "Morgen regnet es.", gloss: { es: "Mañana llueve.", en: "It's going to rain tomorrow." } },
      { target: "Im Süden scheint die Sonne.", gloss: { es: "En el sur hace sol.", en: "The sun is shining in the south." } },
    ],
    pitfalls: {
      es: "«Es macht kalt» traduce «hace frío» con machen, pero el tiempo no se «hace» en alemán: Es ist kalt. Y no se puede omitir es: «Regnet» → Es regnet.",
      en: "'Es ist regnen' tries to copy 'it is raining', but German has no -ing form: Es regnet. And the subject is es, not er: 'Er schneit' → Es schneit.",
    },
  },

  // ── u13 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-konj2-hoeflich",
    lang: "de",
    cefr: "B1",
    title: { es: "Konjunktiv II: cortesía y deseos", en: "Konjunktiv II: politeness and wishes" },
    short: {
      es: "Cortesía y deseos: würde + infinitivo, o hätte, wäre, könnte (con diéresis): Könnten Sie mir helfen?",
      en: "Politeness and wishes: würde + infinitive, or hätte, wäre, könnte (with umlaut): Könnten Sie mir helfen?",
    },
    rule: {
      es: "El Konjunktiv II hace que una pregunta o un deseo suene más suave, como el condicional en español («¿podría…?», «me gustaría…»). La mayoría de verbos usan würde + infinitivo al final, pero haben, sein y los modales tienen forma propia, casi siempre con diéresis: hätte, wäre, könnte.",
      en: "Konjunktiv II makes a request or a wish sound softer, like 'could', 'would' in English. Most verbs use würde + infinitive at the end, but haben, sein and the modals have their own forms, nearly always with an umlaut: hätte, wäre, könnte.",
    },
    steps: [
      { es: "¿Es haben, sein o un modal? Usa su forma propia: hätte, wäre, könnte, müsste.", en: "Is it haben, sein or a modal? Use its own form: hätte, wäre, könnte, müsste." },
      { es: "¿Otro verbo? würde conjugado + infinitivo al final: Ich würde gern reisen.", en: "Any other verb? Conjugated würde + infinitive at the end: Ich würde gern reisen." },
      { es: "Para pedir algo con cortesía, empieza con el verbo: Könnten Sie…? Hätten Sie…?", en: "For a polite request, start with the verb: Könnten Sie…? Hätten Sie…?" },
    ],
    table: {
      head: ["", "haben", "sein", "können", "werden"],
      rows: [
        ["ich", "hätte", "wäre", "könnte", "würde"],
        ["du", "hättest", "wärst", "könntest", "würdest"],
        ["er / sie / es", "hätte", "wäre", "könnte", "würde"],
        ["wir", "hätten", "wären", "könnten", "würden"],
        ["ihr", "hättet", "wärt", "könntet", "würdet"],
        ["sie / Sie", "hätten", "wären", "könnten", "würden"],
      ],
    },
    examples: [
      { target: "Könnten Sie mir helfen?", gloss: { es: "¿Podría ayudarme?", en: "Could you help me?" } },
      { target: "Hätten Sie kurz Zeit?", gloss: { es: "¿Tendría un momento?", en: "Would you have a moment?" } },
      { target: "Ich würde gern im Ausland arbeiten.", gloss: { es: "Me gustaría trabajar en el extranjero.", en: "I'd like to work abroad." } },
      { target: "Wann könnten Sie anfangen?", gloss: { es: "¿Cuándo podría empezar?", en: "When could you start?" } },
    ],
    pitfalls: {
      es: "«Konnten Sie mir helfen?» sin diéresis es pasado («¿pudo ayudarme?»). La forma cortés lleva diéresis: Könnten Sie mir helfen? Lo mismo con hatte (tenía) y hätte (tendría).",
      en: "'Konnten Sie mir helfen?' without the umlaut is past tense ('were you able to help me?'). The polite form has the umlaut: Könnten Sie mir helfen? Same with hatte (had) vs hätte (would have).",
    },
  },
  {
    id: "de-g-dass",
    lang: "de",
    cefr: "B1",
    title: { es: "Oraciones con dass", en: "Clauses with dass" },
    short: {
      es: "dass = que; el verbo conjugado va al final: Ich glaube, dass er recht hat.",
      en: "dass = that; the conjugated verb goes last: Ich glaube, dass er recht hat.",
    },
    rule: {
      es: "dass (que) une una opinión o una información a otra frase, y como toda subordinada manda el verbo conjugado al final. Con un modal o un tiempo compuesto, el infinitivo o el participio va primero y el verbo conjugado cierra la frase. La oración con dass siempre va separada por coma.",
      en: "dass (that) attaches an opinion or a piece of information to another sentence, and like every subordinate clause it sends the conjugated verb to the end. With a modal or a compound tense, the infinitive or participle comes first and the conjugated verb closes the clause. The dass clause is always set off by a comma.",
    },
    steps: [
      { es: "Frase principal + coma + dass.", en: "Main clause + comma + dass." },
      { es: "Sujeto justo después de dass, luego el resto.", en: "Subject right after dass, then the rest." },
      { es: "Al final: infinitivo o participio, y por último el verbo conjugado.", en: "At the end: infinitive or participle, and last of all the conjugated verb." },
    ],
    table: {
      head: ["Hauptsatz", "Nebensatz mit dass"],
      rows: [
        ["Er hat recht.", "…, dass er recht hat."],
        ["Er kommt morgen.", "…, dass er morgen kommt."],
        ["Sie kann gut kochen.", "…, dass sie gut kochen kann."],
        ["Er ist gekommen.", "…, dass er gekommen ist."],
      ],
    },
    examples: [
      { target: "Ich glaube, dass er recht hat.", gloss: { es: "Creo que tiene razón.", en: "I think he's right." } },
      { target: "Er sagt, dass er morgen kommt.", gloss: { es: "Dice que viene mañana.", en: "He says he's coming tomorrow." } },
      { target: "Ich hoffe, dass ich die Stelle bekomme.", gloss: { es: "Espero conseguir el puesto.", en: "I hope I get the job." } },
    ],
    pitfalls: {
      es: "«…, dass er hat recht» copia el orden de «que tiene razón». Con dass el verbo va al final: …, dass er recht hat. Ojo también a la ortografía: dass (que) lleva doble s; das es el artículo.",
      en: "'…, dass er hat recht' copies English order ('that he is right'). With dass the verb goes last: …, dass er recht hat. Also watch the spelling: dass (that) has double s; das is the article.",
    },
  },
  {
    id: "de-g-seit",
    lang: "de",
    cefr: "B1",
    title: { es: "seit + presente: desde hace, desde", en: "seit + present: for, since" },
    short: {
      es: "Algo que empezó y sigue: seit + dativo + presente. Ich wohne seit zwei Jahren hier.",
      en: "Something that started and still goes on: seit + dative + present. Ich wohne seit zwei Jahren hier.",
    },
    rule: {
      es: "Para algo que empezó en el pasado y sigue ahora, el alemán usa el presente con seit, igual que «vivo aquí desde hace dos años». seit lleva dativo, así que el plural añade -n: seit zwei Jahren. Sirve para una duración (seit einem Jahr) y para un punto de partida (seit Montag).",
      en: "For something that started in the past and is still going on, German uses the present tense with seit, where English uses 'have been'. seit takes the dative, so plurals add -n: seit zwei Jahren. It covers a length of time (seit einem Jahr, 'for a year') and a starting point (seit Montag, 'since Monday').",
    },
    steps: [
      { es: "¿La acción empezó antes y sigue ahora? → seit.", en: "Did it start earlier and is it still going on? → seit." },
      { es: "Pon el verbo en presente.", en: "Put the verb in the present tense." },
      { es: "Pon el tiempo en dativo: ein Jahr → einem Jahr, zwei Jahre → zwei Jahren.", en: "Put the time phrase in the dative: ein Jahr → einem Jahr, zwei Jahre → zwei Jahren." },
    ],
    table: {
      head: ["Nominativ", "seit + Dativ"],
      rows: [
        ["ein Jahr", "seit einem Jahr"],
        ["eine Woche", "seit einer Woche"],
        ["zwei Jahre", "seit zwei Jahren"],
        ["drei Monate", "seit drei Monaten"],
        ["der Sommer", "seit dem Sommer"],
        ["Montag", "seit Montag"],
      ],
    },
    examples: [
      { target: "Ich arbeite seit drei Jahren bei einer Firma in München.", gloss: { es: "Trabajo desde hace tres años en una empresa en Múnich.", en: "I've been working at a company in Munich for three years." } },
      { target: "Ich lerne seit einem Jahr Deutsch.", gloss: { es: "Estudio alemán desde hace un año.", en: "I've been learning German for a year." } },
      { target: "Seit wann wohnst du hier?", gloss: { es: "¿Desde cuándo vives aquí?", en: "How long have you lived here?" } },
    ],
    pitfalls: {
      es: "«Ich wohne vor zwei Jahren hier» confunde seit con vor. vor zwei Jahren es «hace dos años» (algo terminado); «desde hace dos años» es seit zwei Jahren, con -n de dativo.",
      en: "'Ich habe hier für zwei Jahre gewohnt' copies 'I have lived here for two years'. If you still live there, German uses the present and seit: Ich wohne seit zwei Jahren hier.",
    },
  },

  // ── u14 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-praeteritum",
    lang: "de",
    cefr: "B1",
    title: { es: "El Präteritum: el pasado de los relatos", en: "The Präteritum: the past of storytelling" },
    short: {
      es: "Regulares: raíz + -te (machte). Irregulares: cambio de vocal (ging, kam). ich = er/sie/es.",
      en: "Regular: stem + -te (machte). Irregular: vowel change (ging, kam). ich and er/sie/es are the same.",
    },
    rule: {
      es: "El Präteritum es el pasado de los textos escritos y los relatos; al hablar se prefiere el Perfekt, salvo con sein, haben y los modales. Los verbos regulares añaden -te a la raíz y los irregulares cambian de vocal, y hay que aprenderlos. ich y er/sie/es no llevan terminación propia y son iguales.",
      en: "The Präteritum is the past tense of written texts and stories; in speech the Perfekt is preferred, except with sein, haben and the modals. Regular verbs add -te to the stem and irregular ones change their vowel, which you have to learn. ich and er/sie/es take no extra ending and are identical.",
    },
    steps: [
      { es: "¿Regular? raíz + -te: wohnen → wohnte (tras -t/-d: arbeitete).", en: "Regular? stem + -te: wohnen → wohnte (after -t/-d: arbeitete)." },
      { es: "¿Irregular? Busca la forma con otra vocal: gehen → ging, kommen → kam, sehen → sah.", en: "Irregular? Look up the form with the new vowel: gehen → ging, kommen → kam, sehen → sah." },
      { es: "Añade la terminación: ich/er -, du -st, wir/sie -en, ihr -t.", en: "Add the ending: ich/er -, du -st, wir/sie -en, ihr -t." },
      { es: "Los modales pierden la diéresis: können → konnte, müssen → musste.", en: "Modals lose their umlaut: können → konnte, müssen → musste." },
    ],
    table: {
      head: ["", "machen", "gehen", "kommen", "können"],
      rows: [
        ["ich", "machte", "ging", "kam", "konnte"],
        ["du", "machtest", "gingst", "kamst", "konntest"],
        ["er / sie / es", "machte", "ging", "kam", "konnte"],
        ["wir", "machten", "gingen", "kamen", "konnten"],
        ["ihr", "machtet", "gingt", "kamt", "konntet"],
        ["sie / Sie", "machten", "gingen", "kamen", "konnten"],
      ],
    },
    examples: [
      { target: "Als ich ein Kind war, wohnten wir auf dem Land.", gloss: { es: "Cuando era niña, vivíamos en el campo.", en: "When I was a child, we lived in the country." } },
      { target: "Plötzlich klingelte das Telefon.", gloss: { es: "De repente sonó el teléfono.", en: "Suddenly the phone rang." } },
      { target: "Gestern gingen wir ins Kino.", gloss: { es: "Ayer fuimos al cine.", en: "Yesterday we went to the cinema." } },
    ],
    pitfalls: {
      es: "«gehten» trata a gehen como regular; es irregular: gingen. Además, el alemán no separa «iba» y «fue»: ging sirve para los dos.",
      en: "'gehten' treats gehen as regular; it's irregular: gingen. Also, don't add -te to an irregular form: 'gingte' → ging.",
    },
  },
  {
    id: "de-g-als-wenn",
    lang: "de",
    cefr: "B1",
    title: { es: "als, wenn y wann: tres formas de decir «cuando»", en: "als, wenn and wann: three ways to say 'when'" },
    short: {
      es: "als = una vez en el pasado; wenn = cada vez, o presente/futuro; wann = pregunta.",
      en: "als = one time in the past; wenn = every time, or present/future; wann = question word.",
    },
    rule: {
      es: "Para «cuando» el alemán tiene tres palabras. als es para un hecho o una época única del pasado; wenn, para algo que se repite (también en el pasado) o para el presente y el futuro; wann solo se usa en preguntas. als y wenn mandan el verbo al final.",
      en: "German has three words for 'when'. als is for a single event or period in the past; wenn is for something that repeats (in the past too) or for the present and future; wann is only for questions. als and wenn send the verb to the end.",
    },
    steps: [
      { es: "¿Es una pregunta (directa o indirecta)? → wann.", en: "Is it a question (direct or indirect)? → wann." },
      { es: "¿Pasado y una sola vez o una época? → als.", en: "Past, and a single time or period? → als." },
      { es: "¿Se repite (immer wenn) o es presente/futuro? → wenn.", en: "Does it repeat (immer wenn), or is it present/future? → wenn." },
      { es: "Con als y wenn, verbo al final; si la frase empieza con ellas, el verbo principal va justo después de la coma.", en: "With als and wenn, verb last; if the sentence starts with them, the main verb comes right after the comma." },
    ],
    table: {
      head: ["", "Vergangenheit", "Gegenwart / Zukunft"],
      rows: [
        ["einmal", "als", "wenn"],
        ["immer wieder", "(immer) wenn", "(immer) wenn"],
        ["Frage", "wann", "wann"],
      ],
    },
    examples: [
      { target: "Als ich zehn war, bekam ich einen Hund.", gloss: { es: "Cuando tenía diez años, me regalaron un perro.", en: "When I was ten, I got a dog." } },
      { target: "Immer wenn ich Zeit hatte, besuchte ich meine Großeltern.", gloss: { es: "Siempre que tenía tiempo, visitaba a mis abuelos.", en: "Whenever I had time, I visited my grandparents." } },
      { target: "Wenn es morgen regnet, bleiben wir zu Hause.", gloss: { es: "Si mañana llueve, nos quedamos en casa.", en: "If it rains tomorrow, we'll stay at home." } },
      { target: "Wann hast du Zeit?", gloss: { es: "¿Cuándo tienes tiempo?", en: "When are you free?" } },
    ],
    pitfalls: {
      es: "«Wenn ich zehn war…» usa wenn para algo que pasó una sola vez. Si es una vez en el pasado, va als: Als ich zehn war, … Y «cuando» en una frase que no es pregunta nunca es wann.",
      en: "'Wenn ich zehn war…' uses wenn for something that happened once. One time in the past takes als: Als ich zehn war, … And 'when' outside a question is never wann.",
    },
  },
  {
    id: "de-g-plusquamperfekt",
    lang: "de",
    cefr: "B1",
    title: { es: "El Plusquamperfekt: lo que había pasado antes", en: "The Plusquamperfekt: what had happened before" },
    short: {
      es: "hatte / war + participio para lo anterior a otro pasado: Nachdem er gegessen hatte, ging er.",
      en: "hatte / war + participle for what happened before another past event: Nachdem er gegessen hatte, ging er.",
    },
    rule: {
      es: "El Plusquamperfekt cuenta algo que ocurrió antes de otro hecho pasado, como «había comido». Se forma igual que el Perfekt, pero con el auxiliar en Präteritum: hatte o war + participio. Los verbos que llevan sein en el Perfekt llevan war aquí.",
      en: "The Plusquamperfekt tells about something that happened before another past event, like 'had eaten'. It is formed like the Perfekt, but with the auxiliary in the Präteritum: hatte or war + participle. Verbs that take sein in the Perfekt take war here.",
    },
    steps: [
      { es: "¿Qué pasó primero? Ese hecho va en Plusquamperfekt.", en: "Which happened first? That event goes in the Plusquamperfekt." },
      { es: "¿El verbo usa haben o sein en el Perfekt? → hatte o war.", en: "Does the verb take haben or sein in the Perfekt? → hatte or war." },
      { es: "Auxiliar conjugado + participio al final: ich hatte gegessen, er war gegangen.", en: "Conjugated auxiliary + participle at the end: ich hatte gegessen, er war gegangen." },
      { es: "Con nachdem: Plusquamperfekt en la subordinada, Präteritum en la principal.", en: "With nachdem: Plusquamperfekt in the subordinate clause, Präteritum in the main clause." },
    ],
    table: {
      head: ["", "essen (haben)", "gehen (sein)"],
      rows: [
        ["ich", "hatte gegessen", "war gegangen"],
        ["du", "hattest gegessen", "warst gegangen"],
        ["er / sie / es", "hatte gegessen", "war gegangen"],
        ["wir", "hatten gegessen", "waren gegangen"],
        ["ihr", "hattet gegessen", "wart gegangen"],
        ["sie / Sie", "hatten gegessen", "waren gegangen"],
      ],
    },
    examples: [
      { target: "Als wir ankamen, war der Zug schon abgefahren.", gloss: { es: "Cuando llegamos, el tren ya había salido.", en: "When we arrived, the train had already left." } },
      { target: "Nachdem er gegessen hatte, ging er spazieren.", gloss: { es: "Después de comer, salió a pasear.", en: "After he had eaten, he went for a walk." } },
      { target: "Ich hatte meinen Schlüssel vergessen.", gloss: { es: "Había olvidado mi llave.", en: "I had forgotten my key." } },
    ],
    pitfalls: {
      es: "«Der Zug hatte schon abgefahren» copia «había salido» con haber. abfahren lleva sein en el Perfekt, así que aquí va war: Der Zug war schon abgefahren.",
      en: "'Der Zug hatte schon abgefahren' copies 'had left'. abfahren takes sein in the Perfekt, so here it takes war: Der Zug war schon abgefahren.",
    },
  },

  // ── u15 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-relativsatz",
    lang: "de",
    cefr: "B1",
    title: { es: "Oraciones de relativo: der, den, dem…", en: "Relative clauses: der, den, dem…" },
    short: {
      es: "Pronombre = género del sustantivo + caso de su función en la relativa; verbo al final: der Mann, den ich kenne.",
      en: "Pronoun = gender of the noun + case of its role in the clause; verb last: der Mann, den ich kenne.",
    },
    rule: {
      es: "El pronombre relativo toma el género y el número del sustantivo al que se refiere, pero el caso depende de su función dentro de la relativa. Las formas son casi las del artículo definido; solo el dativo plural es distinto: denen. La relativa va entre comas y el verbo conjugado va al final.",
      en: "The relative pronoun takes the gender and number of the noun it refers to, but its case depends on its role inside the relative clause. The forms are almost those of the definite article; only the dative plural differs: denen. The clause is set off by commas and the conjugated verb goes last.",
    },
    steps: [
      { es: "¿A qué sustantivo se refiere? Mira su género y número.", en: "Which noun does it refer to? Check its gender and number." },
      { es: "¿Qué función tiene dentro de la relativa? Sujeto → Nom.; objeto directo → Akk.; tras verbo o preposición de dativo → Dat.", en: "What is its role inside the clause? Subject → Nom.; direct object → Akk.; after a dative verb or preposition → Dat." },
      { es: "Si hay preposición, va delante del pronombre: die Frau, mit der ich arbeite.", en: "If there's a preposition, it goes before the pronoun: die Frau, mit der ich arbeite." },
      { es: "Verbo conjugado al final de la relativa.", en: "Conjugated verb at the end of the clause." },
    ],
    table: {
      head: ["", "m", "f", "n", "Plural"],
      rows: [
        ["Nominativ", "der", "die", "das", "die"],
        ["Akkusativ", "den", "die", "das", "die"],
        ["Dativ", "dem", "der", "dem", "denen"],
      ],
    },
    examples: [
      { target: "Das ist der Mann, den ich gestern kennengelernt habe.", gloss: { es: "Ese es el hombre que conocí ayer.", en: "That's the man I met yesterday." } },
      { target: "Die Frau, mit der ich arbeite, kommt aus Italien.", gloss: { es: "La mujer con la que trabajo es de Italia.", en: "The woman I work with is from Italy." } },
      { target: "Ich habe eine Freundin, die sehr zuverlässig ist.", gloss: { es: "Tengo una amiga que es muy confiable.", en: "I have a friend who is very reliable." } },
      { target: "Das sind die Freunde, denen ich alles erzähle.", gloss: { es: "Esos son los amigos a los que les cuento todo.", en: "Those are the friends I tell everything to." } },
    ],
    pitfalls: {
      es: "«der Mann, der ich kenne» usa el nominativo porque el español dice siempre «que». Aquí el hombre es el objeto de kennen (yo lo conozco), así que va acusativo: der Mann, den ich kenne.",
      en: "'der Mann ich kenne' drops the pronoun, as English can ('the man I know'). German always needs it, in the right case: der Mann, den ich kenne (den because he's the object of kennen).",
    },
  },
  {
    id: "de-g-verben-praep",
    lang: "de",
    cefr: "B1",
    title: { es: "Verbos con preposición fija", en: "Verbs with fixed prepositions" },
    short: {
      es: "Aprende verbo + preposición + caso juntos: warten auf + Akk., denken an + Akk., Angst haben vor + Dat.",
      en: "Learn verb + preposition + case together: warten auf + acc., denken an + acc., Angst haben vor + dat.",
    },
    rule: {
      es: "Muchos verbos van unidos a una preposición concreta, y esa preposición no se puede deducir del español ni del inglés. El caso también es fijo: auf y an aquí suelen llevar acusativo, aunque no haya movimiento. Lo mejor es aprender el verbo, la preposición y el caso como un bloque.",
      en: "Many verbs are tied to one particular preposition, and you can't work it out from English or Spanish. The case is fixed too: auf and an here usually take the accusative, even though there's no movement. The best approach is to learn verb, preposition and case as one block.",
    },
    steps: [
      { es: "Busca el verbo con su preposición: sich freuen auf, warten auf…", en: "Look up the verb with its preposition: sich freuen auf, warten auf…" },
      { es: "Mira qué caso pide (casi siempre acusativo con auf, an, für, über, um).", en: "Check which case it takes (almost always accusative with auf, an, für, über, um)." },
      { es: "Pon el artículo en ese caso: Ich warte auf den Bus.", en: "Put the article in that case: Ich warte auf den Bus." },
    ],
    table: {
      head: ["Verb + Präposition", "Kasus", "Beispiel"],
      rows: [
        ["warten auf", "Akk.", "Ich warte auf den Bus."],
        ["denken an", "Akk.", "Ich denke an dich."],
        ["sich freuen auf", "Akk.", "Ich freue mich auf das Wochenende."],
        ["sich freuen über", "Akk.", "Ich freue mich über das Geschenk."],
        ["sich interessieren für", "Akk.", "Ich interessiere mich für Kunst."],
        ["sich kümmern um", "Akk.", "Er kümmert sich um die Kinder."],
        ["Angst haben vor", "Dat.", "Sie hat Angst vor Hunden."],
      ],
    },
    examples: [
      { target: "Ich freue mich auf das Wochenende.", gloss: { es: "Tengo ganas de que llegue el fin de semana.", en: "I'm looking forward to the weekend." } },
      { target: "Ich interessiere mich für Kunst.", gloss: { es: "Me interesa el arte.", en: "I'm interested in art." } },
      { target: "Ich denke oft an meine Kindheit.", gloss: { es: "Pienso a menudo en mi infancia.", en: "I often think about my childhood." } },
    ],
    pitfalls: {
      es: "«Ich denke in meine Kindheit» traduce «pensar en» con in. La preposición de denken es an: Ich denke an meine Kindheit. Y «esperar el bus» no lleva preposición en español, pero en alemán sí: Ich warte auf den Bus.",
      en: "'Ich warte für den Bus' translates 'wait for' word by word. The preposition with warten is auf: Ich warte auf den Bus. Likewise 'think of' in the sense of remembering is denken an: Ich denke an dich.",
    },
  },
  {
    id: "de-g-wo-da",
    lang: "de",
    cefr: "B1",
    title: { es: "worauf / darauf (cosas) y auf wen / auf ihn (personas)", en: "worauf / darauf (things) and auf wen / auf ihn (people)" },
    short: {
      es: "Cosas: wo(r)- + preposición al preguntar, da(r)- + preposición al responder. Personas: auf wen? auf ihn.",
      en: "Things: wo(r)- + preposition to ask, da(r)- + preposition to answer. People: auf wen? auf ihn.",
    },
    rule: {
      es: "Con verbos de preposición fija, las cosas no se sustituyen con un pronombre normal: en preguntas se usa wo- + preposición (wofür, worauf) y en respuestas da- + preposición (dafür, darauf). Si la preposición empieza por vocal, se añade una -r-: worauf, daran. Para personas sí se usan preposición + pronombre: auf wen?, auf ihn.",
      en: "With fixed-preposition verbs, things aren't replaced by an ordinary pronoun: questions use wo- + preposition (wofür, worauf) and answers use da- + preposition (dafür, darauf). If the preposition starts with a vowel, add an -r-: worauf, daran. For people, use preposition + pronoun: auf wen?, auf ihn.",
    },
    steps: [
      { es: "Toma la preposición del verbo: warten auf, denken an…", en: "Take the verb's preposition: warten auf, denken an…" },
      { es: "¿Es una persona? → preposición + wen/wem o pronombre: an wen? an ihn.", en: "Is it a person? → preposition + wen/wem or a pronoun: an wen? an ihn." },
      { es: "¿Es una cosa? Pregunta con wo- y responde con da-: wofür? dafür.", en: "Is it a thing? Ask with wo- and answer with da-: wofür? dafür." },
      { es: "Si la preposición empieza por vocal, añade -r-: wo-r-auf, da-r-an.", en: "If the preposition starts with a vowel, add -r-: wo-r-auf, da-r-an." },
    ],
    table: {
      head: ["", "Frage (Sache)", "Antwort (Sache)", "Person"],
      rows: [
        ["auf", "Worauf?", "darauf", "auf wen? — auf ihn"],
        ["an", "Woran?", "daran", "an wen? — an sie"],
        ["für", "Wofür?", "dafür", "für wen? — für ihn"],
        ["über", "Worüber?", "darüber", "über wen? — über sie"],
        ["mit", "Womit?", "damit", "mit wem? — mit ihm"],
      ],
    },
    examples: [
      { target: "Worauf wartest du? — Auf den Bus. Ich warte schon lange darauf.", gloss: { es: "¿Qué estás esperando? — El bus. Lo espero desde hace rato.", en: "What are you waiting for? — The bus. I've been waiting for it for ages." } },
      { target: "Kannst du dich daran erinnern?", gloss: { es: "¿Te acuerdas de eso?", en: "Can you remember that?" } },
      { target: "Auf wen wartest du? — Auf Jonas.", gloss: { es: "¿A quién esperas? — A Jonas.", en: "Who are you waiting for? — Jonas." } },
    ],
    pitfalls: {
      es: "«Ich freue mich auf es» traduce «me alegro de eso» con un pronombre normal. Para cosas se usa da(r)- + preposición: Ich freue mich darauf.",
      en: "'Ich freue mich auf es' copies 'I'm looking forward to it'. For things, German uses da(r)- + preposition: Ich freue mich darauf.",
    },
  },

  // ── u16 ──────────────────────────────────────────────────────────────
  {
    id: "de-g-passiv",
    lang: "de",
    cefr: "B1",
    title: { es: "La voz pasiva con werden", en: "The passive with werden" },
    short: {
      es: "werden + participio al final: Das Haus wird gebaut. Pasado: wurde gebaut; Perfekt: ist gebaut worden.",
      en: "werden + participle at the end: Das Haus wird gebaut. Past: wurde gebaut; Perfekt: ist gebaut worden.",
    },
    rule: {
      es: "La pasiva pone el foco en lo que pasa, no en quién lo hace. Se forma con werden conjugado en 2.ª posición y el participio al final; en pasado se usa wurde, y en Perfekt ist … worden (sin ge-). Si se nombra a quien lo hace, va con von + dativo.",
      en: "The passive focuses on what happens, not on who does it. It is formed with conjugated werden in 2nd position and the participle at the end; the past uses wurde, and the Perfekt ist … worden (no ge-). If you mention who does it, use von + dative.",
    },
    steps: [
      { es: "El objeto de la frase activa pasa a ser el sujeto: Man baut ein Haus → Ein Haus wird gebaut.", en: "The object of the active sentence becomes the subject: Man baut ein Haus → Ein Haus wird gebaut." },
      { es: "Conjuga werden según el nuevo sujeto y el tiempo (wird / wurde).", en: "Conjugate werden for the new subject and the tense (wird / wurde)." },
      { es: "Pon el participio al final; en Perfekt, añade worden y usa sein: ist gebaut worden.", en: "Put the participle at the end; in the Perfekt, add worden and use sein: ist gebaut worden." },
      { es: "¿Quién lo hace? von + dativo: von meinem Opa.", en: "Who does it? von + dative: von meinem Opa." },
    ],
    table: {
      head: ["", "Präsens", "Präteritum"],
      rows: [
        ["ich", "werde gefragt", "wurde gefragt"],
        ["du", "wirst gefragt", "wurdest gefragt"],
        ["er / sie / es", "wird gefragt", "wurde gefragt"],
        ["wir", "werden gefragt", "wurden gefragt"],
        ["ihr", "werdet gefragt", "wurdet gefragt"],
        ["sie / Sie", "werden gefragt", "wurden gefragt"],
      ],
    },
    examples: [
      { target: "Der Müll wird jeden Montag abgeholt.", gloss: { es: "La basura se recoge todos los lunes.", en: "The rubbish is collected every Monday." } },
      { target: "Hier wird ein neues Haus gebaut.", gloss: { es: "Aquí se está construyendo una casa nueva.", en: "A new house is being built here." } },
      { target: "Das Haus wurde von meinem Opa gebaut.", gloss: { es: "La casa la construyó mi abuelo.", en: "The house was built by my grandpa." } },
      { target: "Der Müll ist schon abgeholt worden.", gloss: { es: "Ya se han llevado la basura.", en: "The rubbish has already been collected." } },
    ],
    pitfalls: {
      es: "«Das Haus ist gebaut geworden» usa el participio normal de werden. En la pasiva se pierde el ge-: Das Haus ist gebaut worden. Y la pasiva con «se» del español («se construye») se dice con werden: wird gebaut.",
      en: "'Das Haus ist gebaut' describes a finished state (it's built). For the action, use werden: Das Haus wird gebaut (is being built). In the Perfekt it's worden, not 'geworden': ist gebaut worden.",
    },
  },
  {
    id: "de-g-zu-infinitiv",
    lang: "de",
    cefr: "B1",
    title: { es: "zu + infinitivo y um … zu", en: "zu + infinitive and um … zu" },
    short: {
      es: "Tras versuchen, vergessen, Lust haben…: zu + infinitivo al final (zu kaufen, abzuschließen). Finalidad: um … zu.",
      en: "After versuchen, vergessen, Lust haben…: zu + infinitive at the end (zu kaufen, abzuschließen). Purpose: um … zu.",
    },
    rule: {
      es: "Después de muchos verbos y expresiones (versuchen, vergessen, anfangen, Lust haben, Zeit haben) el segundo verbo va al final con zu delante. En los verbos separables, zu se mete entre el prefijo y la raíz: abzuschließen. Para expresar finalidad («para…») se usa um … zu; con los modales, nunca zu.",
      en: "After many verbs and phrases (versuchen, vergessen, anfangen, Lust haben, Zeit haben) the second verb goes to the end with zu before it. In separable verbs, zu goes between the prefix and the stem: abzuschließen. To express purpose ('in order to') use um … zu; after modals, never zu.",
    },
    steps: [
      { es: "¿El primer verbo es un modal (können, müssen…)? Entonces sin zu.", en: "Is the first verb a modal (können, müssen…)? Then no zu." },
      { es: "Si no, pon coma y lleva el segundo verbo al final con zu: …, weniger Plastik zu kaufen.", en: "Otherwise, add a comma and move the second verb to the end with zu: …, weniger Plastik zu kaufen." },
      { es: "¿Verbo separable? zu en medio: aufstehen → aufzustehen.", en: "Separable verb? zu goes inside: aufstehen → aufzustehen." },
      { es: "¿Expresa «para qué»? um al principio y zu + infinitivo al final.", en: "Does it say 'what for'? um at the start and zu + infinitive at the end." },
    ],
    table: {
      head: ["Infinitiv", "zu + Infinitiv"],
      rows: [
        ["kaufen", "zu kaufen"],
        ["sparen", "zu sparen"],
        ["besuchen", "zu besuchen"],
        ["aufstehen", "aufzustehen"],
        ["abschließen", "abzuschließen"],
        ["einkaufen", "einzukaufen"],
      ],
    },
    examples: [
      { target: "Ich versuche, weniger Plastik zu kaufen.", gloss: { es: "Intento comprar menos plástico.", en: "I'm trying to buy less plastic." } },
      { target: "Ich habe vergessen, die Tür abzuschließen.", gloss: { es: "Olvidé cerrar la puerta con llave.", en: "I forgot to lock the door." } },
      { target: "Ich fahre mit dem Rad, um Geld zu sparen.", gloss: { es: "Voy en bici para ahorrar dinero.", en: "I cycle to save money." } },
      { target: "Hast du Lust, ins Kino zu gehen?", gloss: { es: "¿Tienes ganas de ir al cine?", en: "Do you fancy going to the cinema?" } },
    ],
    pitfalls: {
      es: "«für Geld zu sparen» traduce «para ahorrar» con für. La finalidad se dice con um … zu: um Geld zu sparen. Y en los separables zu va en medio: «zu abschließen» → abzuschließen.",
      en: "'Ich möchte zu gehen' copies 'I'd like to go', but modals never take zu: Ich möchte gehen. And with separable verbs zu goes inside: 'zu abschließen' → abzuschließen.",
    },
  },
  {
    id: "de-g-obwohl-trotzdem",
    lang: "de",
    cefr: "B1",
    title: { es: "obwohl y trotzdem: aunque y aun así", en: "obwohl and trotzdem: although and still" },
    short: {
      es: "obwohl (aunque) + verbo al final. trotzdem (aun así) en posición 1 + verbo justo después.",
      en: "obwohl (although) + verb at the end. trotzdem (still) in position 1 + verb right after it.",
    },
    rule: {
      es: "obwohl y trotzdem expresan lo mismo, algo que pasa a pesar de otra cosa, pero se construyen distinto. obwohl es una conjunción como weil y manda el verbo al final. trotzdem es un adverbio como deshalb: ocupa una posición de la frase principal, y si va primero, el verbo va justo después.",
      en: "obwohl and trotzdem express the same idea, something happening in spite of something else, but they're built differently. obwohl is a conjunction like weil and sends the verb to the end. trotzdem is an adverb like deshalb: it fills a slot in the main clause, and if it comes first, the verb follows right after.",
    },
    steps: [
      { es: "¿Unes dos ideas en una frase con «aunque»? → obwohl + verbo al final.", en: "Joining two ideas in one sentence with 'although'? → obwohl + verb at the end." },
      { es: "Si la frase empieza con obwohl, la principal empieza por su verbo: Obwohl es regnet, gehe ich…", en: "If the sentence starts with obwohl, the main clause starts with its verb: Obwohl es regnet, gehe ich…" },
      { es: "¿Ya dijiste el problema y sigues con «aun así»? → Trotzdem + verbo + sujeto.", en: "Already stated the problem and continuing with 'still'? → Trotzdem + verb + subject." },
    ],
    table: {
      head: ["", "Grund", "Gegengrund"],
      rows: [
        ["Nebensatz: Verb am Ende", "weil", "obwohl"],
        ["Adverb: Verb direkt danach", "deshalb", "trotzdem"],
      ],
    },
    examples: [
      { target: "Obwohl es regnet, gehe ich zu Fuß.", gloss: { es: "Aunque llueve, voy a pie.", en: "Although it's raining, I'm walking." } },
      { target: "Es regnet. Trotzdem gehe ich spazieren.", gloss: { es: "Llueve. Aun así salgo a pasear.", en: "It's raining. I'm still going for a walk." } },
      { target: "Er ist krank, aber er arbeitet trotzdem.", gloss: { es: "Está enfermo, pero trabaja igual.", en: "He's ill, but he's working anyway." } },
    ],
    pitfalls: {
      es: "«Obwohl er krank ist, er arbeitet» deja el sujeto antes del verbo, como en español. La subordinada ocupa la posición 1, así que sigue el verbo: Obwohl er krank ist, arbeitet er.",
      en: "'Trotzdem er krank ist' uses trotzdem like 'although', but trotzdem can't start a subordinate clause: Obwohl er krank ist, arbeitet er. Or: Er ist krank. Trotzdem arbeitet er.",
    },
  },
];
