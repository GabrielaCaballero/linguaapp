import type { GrammarPoint } from "../schema";

// Grammar points for Italian units 9–16 (content v2.1), same shape as grammar.ts.
export const grammar2: GrammarPoint[] = [
  // ── u09 ────────────────────────────────────────────────────
  {
    id: "it-g-partitivo",
    lang: "it",
    cefr: "A1.2",
    title: { es: "El partitivo: del pane, delle mele", en: "The partitive: del pane, delle mele" },
    short: {
      es: "di + artículo = «algo de / unos»: del pane, della frutta, dei pomodori, delle mele.",
      en: "di + article = 'some': del pane, della frutta, dei pomodori, delle mele.",
    },
    rule: {
      es: "Para hablar de una cantidad no precisa, el italiano usa di + artículo definido: Vorrei del pane. En español no se dice nada («quiero pan») o se dice «unos/unas». La forma sigue al artículo que lleva el sustantivo, igual que en las preposiciones articuladas.",
      en: "For an unspecified amount, Italian uses di + definite article: Vorrei del pane. It works like English 'some'. The form follows the article the noun takes, just like the articulated prepositions.",
    },
    steps: [
      { es: "¿Hablas de «un poco de / algunos», sin número exacto? → partitivo.", en: "Are you talking about 'some', with no exact number? → partitive." },
      { es: "Busca el artículo del sustantivo: il pane, la frutta, i pomodori, le mele.", en: "Find the noun's article: il pane, la frutta, i pomodori, le mele." },
      { es: "Une di con ese artículo: di + il = del, di + le = delle.", en: "Merge di with that article: di + il = del, di + le = delle." },
      { es: "Con una medida o un envase (un chilo, due etti, una bottiglia), solo di: un chilo di mele. Con un número, nada: tre mele.", en: "With a measure or container (un chilo, due etti, una bottiglia), just di: un chilo di mele. With a plain number, nothing: tre mele." },
    ],
    table: {
      head: ["articolo", "partitivo", "esempio"],
      rows: [
        ["il", "del", "del pane"],
        ["lo", "dello", "dello zucchero"],
        ["l'", "dell'", "dell'olio"],
        ["la", "della", "della frutta"],
        ["i", "dei", "dei pomodori"],
        ["gli", "degli", "degli spinaci"],
        ["le", "delle", "delle mele"],
      ],
    },
    examples: [
      { target: "Vorrei del pane.", gloss: { es: "Quisiera pan.", en: "I'd like some bread." } },
      { target: "Compro dei pomodori e delle mele.", gloss: { es: "Compro unos tomates y unas manzanas.", en: "I'm buying some tomatoes and some apples." } },
      { target: "Mi dà un chilo di mele, per favore?", gloss: { es: "¿Me da un kilo de manzanas, por favor?", en: "Could I have a kilo of apples, please?" } },
    ],
    pitfalls: {
      es: "Tras una cantidad no va artículo: «un chilo delle mele» es incorrecto → un chilo di mele. Y el partitivo no es «di» solo: «compro di pane» → compro del pane.",
      en: "No article after a quantity: 'un chilo delle mele' is wrong → un chilo di mele. And the partitive is not bare di: 'compro di pane' → compro del pane.",
    },
  },
  {
    id: "it-g-quanto",
    lang: "it",
    cefr: "A1.2",
    title: { es: "quanto, quanta, quanti, quante", en: "How much, how many: quanto, quanta, quanti, quante" },
    short: {
      es: "quanto concuerda con el sustantivo: quanto pane, quanta frutta, quanti pomodori, quante mele.",
      en: "quanto agrees with the noun: quanto pane, quanta frutta, quanti pomodori, quante mele.",
    },
    rule: {
      es: "Delante de un sustantivo, quanto funciona como adjetivo y concuerda en género y número, igual que «cuánto/cuánta/cuántos/cuántas». Solo, sin sustantivo, para preguntar el precio, no cambia: Quanto costa? Quanto costano?",
      en: "Before a noun, quanto is an adjective and agrees in gender and number: one word covers both 'how much' and 'how many'. On its own, asking a price, it does not change: Quanto costa? Quanto costano?",
    },
    steps: [
      { es: "Mira el sustantivo: ¿masculino o femenino? ¿singular o plural?", en: "Look at the noun: masculine or feminine? Singular or plural?" },
      { es: "Elige la terminación: -o, -a, -i, -e.", en: "Pick the ending: -o, -a, -i, -e." },
      { es: "Si preguntas el precio sin sustantivo, usa quanto: Quanto costano?", en: "If you ask a price with no noun, use quanto: Quanto costano?" },
    ],
    table: {
      head: ["", "singolare", "plurale"],
      rows: [
        ["maschile", "quanto pane", "quanti pomodori"],
        ["femminile", "quanta frutta", "quante mele"],
      ],
    },
    examples: [
      { target: "Quante mele vuole?", gloss: { es: "¿Cuántas manzanas quiere?", en: "How many apples would you like?" } },
      { target: "Quanto formaggio prende?", gloss: { es: "¿Cuánto queso lleva?", en: "How much cheese are you taking?" } },
      { target: "Quanti pomodori?", gloss: { es: "¿Cuántos tomates?", en: "How many tomatoes?" } },
      { target: "Quanto costano?", gloss: { es: "¿Cuánto cuestan?", en: "How much are they?" } },
    ],
    pitfalls: {
      es: "Ojo con el género italiano, que a veces no coincide: «quanti mele» es incorrecto porque mela es femenino plural → quante mele.",
      en: "English has no agreement here, so the ending is easy to forget: 'quanti mele' is wrong because mele is feminine plural → quante mele.",
    },
  },

  // ── u10 ────────────────────────────────────────────────────
  {
    id: "it-g-pp-avere",
    lang: "it",
    cefr: "A2",
    title: { es: "Passato prossimo con avere", en: "Passato prossimo with avere" },
    short: {
      es: "avere + participio (-ato, -uto, -ito): ho mangiato, hai venduto, abbiamo dormito. El participio no cambia con el sujeto.",
      en: "avere + participle (-ato, -uto, -ito): ho mangiato, hai venduto, abbiamo dormito. It doesn't change with the subject.",
    },
    rule: {
      es: "El passato prossimo es el pasado normal de la conversación: se forma con el presente de avere (o essere) + el participio. La mayoría de los verbos, sobre todo los que llevan objeto directo, usan avere, y entonces el participio no cambia según el sujeto (solo cambia con lo/la/li/le delante: lo verás en la unidad 12).",
      en: "The passato prossimo is the everyday past tense of conversation: the present of avere (or essere) + the past participle. Most verbs, especially those with a direct object, take avere, and then the participle does not change with the subject (it only changes with lo/la/li/le in front: see unit 12).",
    },
    steps: [
      { es: "¿El verbo usa avere? (casi todos los que tienen objeto: mangiare, visitare, vedere).", en: "Does the verb take avere? (Nearly all verbs with an object: mangiare, visitare, vedere.)" },
      { es: "Conjuga avere en presente: ho, hai, ha, abbiamo, avete, hanno.", en: "Conjugate avere in the present: ho, hai, ha, abbiamo, avete, hanno." },
      { es: "Forma el participio: -are → -ato, -ere → -uto, -ire → -ito.", en: "Form the participle: -are → -ato, -ere → -uto, -ire → -ito." },
      { es: "Deja el participio en -o, sea quien sea el sujeto: Anna ha mangiato.", en: "Keep the participle in -o whoever the subject is: Anna ha mangiato." },
    ],
    table: {
      head: ["", "mangiare", "vendere", "dormire"],
      rows: [
        ["io", "ho mangiato", "ho venduto", "ho dormito"],
        ["tu", "hai mangiato", "hai venduto", "hai dormito"],
        ["lui / lei", "ha mangiato", "ha venduto", "ha dormito"],
        ["noi", "abbiamo mangiato", "abbiamo venduto", "abbiamo dormito"],
        ["voi", "avete mangiato", "avete venduto", "avete dormito"],
        ["loro", "hanno mangiato", "hanno venduto", "hanno dormito"],
      ],
    },
    examples: [
      { target: "Ieri ho mangiato una pizza.", gloss: { es: "Ayer comí una pizza.", en: "Yesterday I had a pizza." } },
      { target: "Abbiamo visitato gli Uffizi.", gloss: { es: "Visitamos los Uffizi.", en: "We visited the Uffizi." } },
      { target: "Ieri ho dormito poco.", gloss: { es: "Ayer dormí poco.", en: "Yesterday I didn't sleep much." } },
    ],
    pitfalls: {
      es: "Donde el español usa el pretérito («ayer comí»), el italiano hablado usa el passato prossimo: Ieri ho mangiato. Y con avere el participio no concuerda: «Anna ha mangiata» → Anna ha mangiato.",
      en: "With avere the participle doesn't agree with the subject: 'Anna ha mangiata' is wrong → Anna ha mangiato. And 'I ate' in conversation is usually ho mangiato, even with ieri.",
    },
  },
  {
    id: "it-g-pp-essere",
    lang: "it",
    cefr: "A2",
    title: { es: "Passato prossimo con essere", en: "Passato prossimo with essere" },
    short: {
      es: "Ir a o desde un lugar, cambio, quedarse y reflexivos → essere + participio que concuerda: sono andato/a, siamo usciti/e.",
      en: "Going somewhere, change, staying and reflexives → essere + agreeing participle: sono andato/a, siamo usciti/e.",
    },
    rule: {
      es: "Algunos verbos forman el passato prossimo con essere: los de desplazamiento hacia o desde un lugar (andare, venire, uscire, partire, tornare, arrivare), de cambio o permanencia (diventare, rimanere, stare, essere) y todos los reflexivos (divertirsi, riposarsi). Con essere, el participio concuerda con el sujeto como un adjetivo: -o, -a, -i, -e.",
      en: "Some verbs form the passato prossimo with essere: verbs of going to or from a place (andare, venire, uscire, partire, tornare, arrivare), of change or staying (diventare, rimanere, stare, essere) and all reflexive verbs (divertirsi, riposarsi). With essere, the participle agrees with the subject like an adjective: -o, -a, -i, -e.",
    },
    steps: [
      { es: "¿Es un verbo de ir a o desde un lugar, de cambio o permanencia, o un reflexivo? → essere. (camminare, viaggiare, nuotare → avere.)", en: "Is it a verb of going to or from a place, of change or staying, or a reflexive? → essere. (camminare, viaggiare, nuotare → avere.)" },
      { es: "Conjuga essere: sono, sei, è, siamo, siete, sono (reflexivos: mi sono, ti sei…).", en: "Conjugate essere: sono, sei, è, siamo, siete, sono (reflexives: mi sono, ti sei…)." },
      { es: "Haz concordar el participio con el sujeto: andato, andata, andati, andate.", en: "Make the participle agree with the subject: andato, andata, andati, andate." },
      { es: "Grupo mixto (hombres y mujeres) → -i: Marco e Anna sono usciti.", en: "Mixed group (men and women) → -i: Marco e Anna sono usciti." },
    ],
    table: {
      head: ["", "maschile", "femminile"],
      rows: [
        ["io", "sono andato", "sono andata"],
        ["tu", "sei andato", "sei andata"],
        ["lui / lei", "è andato", "è andata"],
        ["noi", "siamo andati", "siamo andate"],
        ["voi", "siete andati", "siete andate"],
        ["loro", "sono andati", "sono andate"],
      ],
    },
    examples: [
      { target: "Sabato sono andato al mare.", gloss: { es: "El sábado fui a la playa.", en: "On Saturday I went to the seaside." } },
      { target: "Siamo rimasti a casa.", gloss: { es: "Nos quedamos en casa.", en: "We stayed at home." } },
      { target: "Io sono rimasta a casa e mi sono riposata.", gloss: { es: "Yo me quedé en casa y descansé.", en: "I stayed at home and rested." } },
      { target: "È stato bellissimo!", gloss: { es: "¡Fue precioso!", en: "It was wonderful!" } },
    ],
    pitfalls: {
      es: "En español todo va con «haber» («he ido»), pero «ho andato» es incorrecto → sono andato/a. Y no olvides la concordancia: una mujer dice «sono andata». Ojo: no todo movimiento va con essere: camminare, viaggiare, passeggiare y nuotare usan avere (ho camminato).",
      en: "English uses 'have' for everything, but 'ho andato' is wrong → sono andato/a. And don't forget agreement: a woman says 'sono andata'. Careful: not every movement verb takes essere: camminare, viaggiare, passeggiare and nuotare take avere (ho camminato).",
    },
  },
  {
    id: "it-g-pp-irregolari",
    lang: "it",
    cefr: "A2",
    title: { es: "Participios irregulares", en: "Irregular past participles" },
    short: {
      es: "Participios propios: fare → fatto, vedere → visto, prendere → preso, leggere → letto, scrivere → scritto, dire → detto.",
      en: "fare → fatto, vedere → visto, prendere → preso, leggere → letto, scrivere → scritto, dire → detto, essere → stato.",
    },
    rule: {
      es: "Muchos verbos frecuentes, sobre todo en -ere, no siguen la regla -uto y tienen un participio propio que hay que memorizar. El auxiliar no cambia: ho fatto, ho visto, pero sono stato, sono rimasto.",
      en: "Many common verbs, especially -ere verbs, do not follow the -uto rule and have their own participle, which you learn by heart. The auxiliary stays the same: ho fatto, ho visto, but sono stato, sono rimasto.",
    },
    steps: [
      { es: "¿Es un verbo frecuente en -ere (o fare, dire)? Sospecha un participio irregular.", en: "Is it a common -ere verb (or fare, dire)? Expect an irregular participle." },
      { es: "Búscalo en la tabla; muchos se parecen al español: fatto (hecho), visto, detto (dicho), scritto (escrito).", en: "Look it up in the table; many end in -tto or -so: fatto, detto, scritto, preso." },
      { es: "Elige el auxiliar como siempre: avere u essere.", en: "Choose the auxiliary as usual: avere or essere." },
    ],
    table: {
      head: ["infinito", "participio", "esempio"],
      rows: [
        ["fare", "fatto", "ho fatto"],
        ["vedere", "visto", "ho visto"],
        ["prendere", "preso", "ho preso"],
        ["leggere", "letto", "ho letto"],
        ["scrivere", "scritto", "ho scritto"],
        ["dire", "detto", "ho detto"],
        ["essere", "stato", "sono stato/a"],
      ],
    },
    examples: [
      { target: "Che cosa hai fatto il fine settimana?", gloss: { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" } },
      { target: "Non ho visto il film.", gloss: { es: "No vi la película.", en: "I didn't see the film." } },
      { target: "Ho preso il treno delle otto.", gloss: { es: "Tomé el tren de las ocho.", en: "I took the eight o'clock train." } },
    ],
    pitfalls: {
      es: "No apliques la regla regular a estos verbos: «prenduto», «leggiuto» o «faciuto» no existen → preso, letto, fatto. El español ayuda en algunos (hecho/fatto, dicho/detto), pero «tomado» no: prendere → preso.",
      en: "Don't apply the regular rule to these verbs: 'prenduto', 'leggiuto' or 'faciuto' don't exist → preso, letto, fatto.",
    },
  },

  // ── u11 ────────────────────────────────────────────────────
  {
    id: "it-g-imperfetto",
    lang: "it",
    cefr: "A2",
    title: { es: "El imperfetto", en: "The imperfetto" },
    short: {
      es: "Raíz + -vo, -vi, -va, -vamo, -vate, -vano: parlavo, leggevo, dormivo. essere → ero, eri, era…",
      en: "Stem + -vo, -vi, -va, -vamo, -vate, -vano: parlavo, leggevo, dormivo. essere → ero, eri, era…",
    },
    rule: {
      es: "El imperfetto es el pasado de las descripciones y las costumbres, como el pretérito imperfecto español («hablaba», «leía»). Es muy regular: al infinitivo se le quita -re y se añaden -vo, -vi, -va, -vamo, -vate, -vano. El gran irregular es essere: ero, eri, era, eravamo, eravate, erano.",
      en: "The imperfetto is the past tense of descriptions and habits, like English 'used to' or 'was …-ing'. It is very regular: drop -re from the infinitive and add -vo, -vi, -va, -vamo, -vate, -vano. The big irregular is essere: ero, eri, era, eravamo, eravate, erano.",
    },
    steps: [
      { es: "Quita -re al infinitivo: parla-, legge-, dormi-.", en: "Drop -re from the infinitive: parla-, legge-, dormi-." },
      { es: "Añade la terminación: -vo, -vi, -va, -vamo, -vate, -vano.", en: "Add the ending: -vo, -vi, -va, -vamo, -vate, -vano." },
      { es: "Irregulares: essere → ero; fare → facevo; bere → bevevo; dire → dicevo.", en: "Irregulars: essere → ero; fare → facevo; bere → bevevo; dire → dicevo." },
    ],
    table: {
      head: ["", "parlare", "leggere", "dormire", "essere"],
      rows: [
        ["io", "parlavo", "leggevo", "dormivo", "ero"],
        ["tu", "parlavi", "leggevi", "dormivi", "eri"],
        ["lui / lei", "parlava", "leggeva", "dormiva", "era"],
        ["noi", "parlavamo", "leggevamo", "dormivamo", "eravamo"],
        ["voi", "parlavate", "leggevate", "dormivate", "eravate"],
        ["loro", "parlavano", "leggevano", "dormivano", "erano"],
      ],
    },
    examples: [
      { target: "Quando ero piccolo, abitavo in campagna.", gloss: { es: "Cuando era pequeño, vivía en el campo.", en: "When I was little, I lived in the countryside." } },
      { target: "Ogni estate andavamo al mare.", gloss: { es: "Cada verano íbamos a la playa.", en: "Every summer we used to go to the seaside." } },
      { target: "Io invece ero timida e leggevo sempre.", gloss: { es: "Yo, en cambio, era tímida y siempre leía.", en: "I, on the other hand, was shy and was always reading." } },
    ],
    pitfalls: {
      es: "En español solo los verbos en -ar llevan b («hablaba»); los en -er/-ir van con -ía («leía», «dormía»). En italiano todos llevan v: «leggeo» o «dormia» son incorrectos → leggevo, dormivo.",
      en: "Every verb keeps the v in every person: 'leggeo' or 'dormia' are wrong → leggevo, dormivo. In the loro form the stress falls early: parlàvano, not 'parlavàno'.",
    },
  },
  {
    id: "it-g-imperf-vs-pp",
    lang: "it",
    cefr: "A2",
    title: { es: "¿Imperfetto o passato prossimo?", en: "Imperfetto or passato prossimo?" },
    short: {
      es: "imperfetto = descripción, costumbre, acción en curso (era, leggevo); passato prossimo = hecho puntual (è arrivato).",
      en: "imperfetto = description, habit, ongoing action (era, leggevo); passato prossimo = completed event (è arrivato).",
    },
    rule: {
      es: "La elección funciona casi igual que en español entre «era/leía» y «fue/llegó». El imperfetto pinta el fondo: cómo eran las cosas, qué se hacía siempre, qué estaba pasando. El passato prossimo cuenta los hechos que ocurrieron y terminaron, los que hacen avanzar la historia.",
      en: "The imperfetto paints the background: what things were like, what used to happen, what was going on. The passato prossimo reports events that happened and finished, the ones that move the story on. English 'was' or 'did' can hide the difference, so ask what job the verb is doing.",
    },
    steps: [
      { es: "¿Describe a alguien, el tiempo, la hora o un estado? → imperfetto.", en: "Does it describe a person, the weather, the time or a state? → imperfetto." },
      { es: "¿Es una costumbre (ogni estate, sempre, da piccolo)? → imperfetto.", en: "Is it a habit (ogni estate, sempre, da piccolo)? → imperfetto." },
      { es: "¿Es un hecho concreto y terminado (ieri, all'improvviso, due giorni fa)? → passato prossimo.", en: "Is it a single, finished event (ieri, all'improvviso, due giorni fa)? → passato prossimo." },
      { es: "Con «mentre… / quando…»: la acción en curso va en imperfetto; la que la interrumpe, en passato prossimo.", en: "With 'mentre… / quando…': the action in progress takes imperfetto; the one that interrupts it takes passato prossimo." },
    ],
    table: {
      head: ["", "imperfetto", "passato prossimo"],
      rows: [
        ["uso", "descrizione, abitudine, azione in corso", "evento concluso"],
        ["parole tipiche", "ogni estate, sempre, mentre, da piccolo", "ieri, all'improvviso, due giorni fa"],
        ["esempio", "Ero stanco.", "Sono tornato a casa."],
      ],
    },
    examples: [
      { target: "Mentre leggevo, è suonato il telefono.", gloss: { es: "Mientras leía, sonó el teléfono.", en: "While I was reading, the phone rang." } },
      { target: "Ieri ero in cucina quando è arrivato Marco.", gloss: { es: "Ayer estaba en la cocina cuando llegó Marco.", en: "Yesterday I was in the kitchen when Marco arrived." } },
      { target: "Da bambino ero molto timido.", gloss: { es: "De niño era muy tímido.", en: "As a child I was very shy." } },
    ],
    pitfalls: {
      es: "Si en español dirías «estaba» o «era», en italiano casi siempre es imperfetto: «Ieri sono stato in cucina quando è arrivato Marco» es incorrecto → Ieri ero in cucina quando è arrivato Marco.",
      en: "English 'I was' can be either tense. For the background, use the imperfetto: 'Ieri sono stato in cucina quando è arrivato Marco' is wrong → Ieri ero in cucina quando è arrivato Marco.",
    },
  },
  {
    id: "it-g-cera",
    lang: "it",
    cefr: "A2",
    title: { es: "c'era y c'erano (había)", en: "c'era and c'erano (there was, there were)" },
    short: {
      es: "Pasado de c'è / ci sono: c'era + singular, c'erano + plural. En español siempre «había».",
      en: "Past of c'è / ci sono: c'era + singular (there was), c'erano + plural (there were).",
    },
    rule: {
      es: "c'è / ci sono («hay») se pasa al pasado con el imperfetto de essere: c'era, c'erano. A diferencia de «había», el verbo concuerda con lo que viene detrás: singular o plural.",
      en: "c'è / ci sono ('there is / there are') goes into the past with the imperfetto of essere: c'era, c'erano. As in English, the verb agrees with what comes after it: singular or plural.",
    },
    steps: [
      { es: "Mira lo que «había»: ¿singular o plural?", en: "Look at what 'there was/were': singular or plural?" },
      { es: "Si es singular → c'era; si es plural → c'erano.", en: "Singular → c'era; plural → c'erano." },
      { es: "En negativo, non va delante: non c'era, non c'erano.", en: "In the negative, non goes in front: non c'era, non c'erano." },
    ],
    table: {
      head: ["", "singolare", "plurale"],
      rows: [
        ["presente", "c'è", "ci sono"],
        ["imperfetto", "c'era", "c'erano"],
        ["futuro", "ci sarà", "ci saranno"],
      ],
    },
    examples: [
      { target: "Non c'era internet.", gloss: { es: "No había internet.", en: "There was no internet." } },
      { target: "Nel paese c'erano due scuole.", gloss: { es: "En el pueblo había dos escuelas.", en: "There were two schools in the village." } },
      { target: "C'era una volta un re.", gloss: { es: "Había una vez un rey.", en: "Once upon a time there was a king." } },
    ],
    pitfalls: {
      es: "«Había» no cambia en español, pero en italiano sí: «c'era due scuole» es incorrecto → c'erano due scuole. Y no olvides ci: «erano due scuole» significa «eran dos escuelas».",
      en: "Don't drop ci: 'erano due scuole' means 'they were two schools' → c'erano due scuole (there were two schools).",
    },
  },

  // ── u12 ────────────────────────────────────────────────────
  {
    id: "it-g-futuro",
    lang: "it",
    cefr: "A2",
    title: { es: "El futuro simple", en: "The simple future" },
    short: {
      es: "Infinitivo sin -e + -ò, -ai, -à, -emo, -ete, -anno; -are → -er-: parlerò. Irregulares: sarò, avrò, andrò, farò.",
      en: "Infinitive minus -e + -ò, -ai, -à, -emo, -ete, -anno; -are → -er-: parlerò. Irregular: sarò, avrò, andrò, farò.",
    },
    rule: {
      es: "Como en español, el futuro se forma a partir del infinitivo: se quita la -e final y se añaden -ò, -ai, -à, -emo, -ete, -anno. En los verbos en -are la a se vuelve e (parlare → parlerò). Algunos verbos frecuentes tienen una raíz corta o irregular: sarò, avrò, andrò, farò, verrò, vorrò, potrò, dovrò.",
      en: "The future is built on the infinitive: drop the final -e and add -ò, -ai, -à, -emo, -ete, -anno. In -are verbs the a turns into e (parlare → parlerò). Some common verbs have a short or irregular stem: sarò, avrò, andrò, farò, verrò, vorrò, potrò, dovrò.",
    },
    steps: [
      { es: "Quita la -e final: parlar-, prender-, partir-.", en: "Drop the final -e: parlar-, prender-, partir-." },
      { es: "Si el verbo es en -are, cambia -ar- por -er-: parler-.", en: "If it is an -are verb, change -ar- to -er-: parler-." },
      { es: "Añade -ò, -ai, -à, -emo, -ete, -anno (con acento en ò y à).", en: "Add -ò, -ai, -à, -emo, -ete, -anno (with the accent on ò and à)." },
      { es: "Ortografía: -care/-gare añaden h (giocherò, pagherò); -ciare/-giare pierden la i (mangerò).", en: "Spelling: -care/-gare add h (giocherò, pagherò); -ciare/-giare lose the i (mangerò)." },
    ],
    table: {
      head: ["", "parlare", "prendere", "partire", "essere"],
      rows: [
        ["io", "parlerò", "prenderò", "partirò", "sarò"],
        ["tu", "parlerai", "prenderai", "partirai", "sarai"],
        ["lui / lei", "parlerà", "prenderà", "partirà", "sarà"],
        ["noi", "parleremo", "prenderemo", "partiremo", "saremo"],
        ["voi", "parlerete", "prenderete", "partirete", "sarete"],
        ["loro", "parleranno", "prenderanno", "partiranno", "saranno"],
      ],
    },
    examples: [
      { target: "Domani partirò per Napoli.", gloss: { es: "Mañana saldré para Nápoles.", en: "Tomorrow I'll leave for Naples." } },
      { target: "L'anno prossimo andremo in Sicilia.", gloss: { es: "El año que viene iremos a Sicilia.", en: "Next year we'll go to Sicily." } },
      { target: "Domani al nord pioverà tutto il giorno.", gloss: { es: "Mañana en el norte lloverá todo el día.", en: "Tomorrow it will rain all day in the north." } },
    ],
    pitfalls: {
      es: "En español la a del infinitivo se queda («hablaré»), en italiano no: «parlarò» es incorrecto → parlerò. Y el acento es obligatorio: parlerò, no «parlero».",
      en: "In -are verbs the a becomes e: 'parlarò' is wrong → parlerò. The accent is part of the spelling: write parlerò, parlerà, not 'parlero', 'parlera'.",
    },
  },
  {
    id: "it-g-pronomi-diretti",
    lang: "it",
    cefr: "A2",
    title: { es: "Pronombres de objeto directo", en: "Direct object pronouns" },
    short: {
      es: "lo, la, li, le (y mi, ti, ci, vi) van antes del verbo: lo compro. Ante ho/ha: l'ho visto, l'ho vista.",
      en: "lo, la, li, le (and mi, ti, ci, vi) go before the verb: lo compro. Before ho/ha: l'ho visto, l'ho vista.",
    },
    rule: {
      es: "Los pronombres directos reemplazan al objeto directo (lo que recibe la acción sin preposición) y van delante del verbo conjugado, como en español. En tercera persona cambian según género y número: lo, la, li, le. En el passato prossimo, lo y la se apostrofan ante avere y el participio concuerda con el pronombre: l'ho vista, li ho presi.",
      en: "Direct object pronouns replace the direct object (what receives the action, with no preposition) and go before the conjugated verb. In the third person they show gender and number: lo, la, li, le. In the passato prossimo, lo and la become l' before avere and the participle agrees with the pronoun: l'ho vista, li ho presi.",
    },
    steps: [
      { es: "Busca el objeto directo: Compro il giornale → il giornale.", en: "Find the direct object: Compro il giornale → il giornale." },
      { es: "Elige el pronombre por género y número: lo, la, li, le.", en: "Pick the pronoun by gender and number: lo, la, li, le." },
      { es: "Ponlo antes del verbo conjugado: lo compro, non lo compro.", en: "Put it before the conjugated verb: lo compro, non lo compro." },
      { es: "En passato prossimo: l'ho / l'ha, y el participio concuerda: l'ho prenotata (la camera).", en: "In the passato prossimo: l'ho / l'ha, and the participle agrees: l'ho prenotata (la camera)." },
    ],
    table: {
      head: ["", "singolare", "plurale"],
      rows: [
        ["1ª persona", "mi", "ci"],
        ["2ª persona", "ti", "vi"],
        ["3ª maschile", "lo", "li"],
        ["3ª femminile", "la", "le"],
      ],
    },
    examples: [
      { target: "Hai prenotato l'albergo? — Sì, l'ho prenotato ieri.", gloss: { es: "¿Reservaste el hotel? — Sí, lo reservé ayer.", en: "Did you book the hotel? — Yes, I booked it yesterday." } },
      { target: "Compri il giornale? — Sì, lo compro.", gloss: { es: "¿Compras el periódico? — Sí, lo compro.", en: "Are you buying the paper? — Yes, I'm buying it." } },
      { target: "I biglietti li prendo io.", gloss: { es: "Los boletos los compro yo.", en: "I'll get the tickets." } },
    ],
    pitfalls: {
      es: "El plural no es «los/las»: los → li, las → le. Y «gli» es objeto indirecto («le» en español): «gli prendo» (los billetes) es incorrecto → li prendo.",
      en: "The pronoun comes before the verb: 'compro lo' is wrong → lo compro. And 'them' is li (masculine) or le (feminine), never 'gli', which means 'to him'.",
    },
  },
  {
    id: "it-g-ci",
    lang: "it",
    cefr: "A2",
    title: { es: "ci de lugar: Ci vado domani", en: "ci for places: Ci vado domani" },
    short: {
      es: "ci = «allí»: reemplaza un lugar ya mencionado y va antes del verbo: Vai a Roma? Sì, ci vado.",
      en: "ci = 'there': it replaces a place already mentioned and goes before the verb: Vai a Roma? Sì, ci vado.",
    },
    rule: {
      es: "Para no repetir un lugar que ya se nombró (a Roma, in palestra, al mare), el italiano usa ci, que va delante del verbo conjugado. En español muchas veces no se dice nada («sí, voy»), pero en italiano ci es casi obligatorio con verbos como andare, venire, stare o tornare.",
      en: "To avoid repeating a place already named (a Roma, in palestra, al mare), Italian uses ci in front of the conjugated verb. English often just leaves 'there' out ('yes, I'm going'), but in Italian ci is almost compulsory with verbs like andare, venire, stare or tornare.",
    },
    steps: [
      { es: "Busca el lugar ya mencionado: a Roma, in palestra, al mare.", en: "Find the place already mentioned: a Roma, in palestra, al mare." },
      { es: "Sustitúyelo por ci.", en: "Replace it with ci." },
      { es: "Ponlo antes del verbo (después de non): ci vado, non ci vado.", en: "Put it before the verb (after non): ci vado, non ci vado." },
      { es: "En passato prossimo, antes del auxiliar: ci sono stato.", en: "In the passato prossimo, before the auxiliary: ci sono stato." },
    ],
    table: {
      head: ["domanda", "risposta con ci"],
      rows: [
        ["Vai in palestra?", "Sì, ci vado."],
        ["Come vai a Napoli?", "Ci vado in treno."],
        ["Sei mai stato a Napoli?", "No, non ci sono mai stato."],
        ["Torni al mare?", "Sì, ci torno ad agosto."],
      ],
    },
    examples: [
      { target: "Ci vado in treno.", gloss: { es: "Voy en tren.", en: "I'm going there by train." } },
      { target: "Vai spesso in palestra? — Sì, ci vado tre volte alla settimana.", gloss: { es: "¿Vas seguido al gimnasio? — Sí, voy tres veces por semana.", en: "Do you often go to the gym? — Yes, I go three times a week." } },
      { target: "Non ci sono mai stato.", gloss: { es: "Nunca estuve allí.", en: "I've never been there." } },
    ],
    pitfalls: {
      es: "Sin ci la respuesta suena incompleta: «Sì, vado domani» → Sì, ci vado domani. No lo confundas con ne (cantidad) ni con ci = «nos».",
      en: "English often leaves 'there' out, but Italian keeps ci: 'Sì, vado domani' sounds incomplete → Sì, ci vado domani. Don't mix it up with ne (quantity).",
    },
  },

  // ── u13 ────────────────────────────────────────────────────
  {
    id: "it-g-imperativo-tu",
    lang: "it",
    cefr: "B1",
    title: { es: "El imperativo con tu", en: "The tu imperative" },
    short: {
      es: "-are → -a (parla!), -ere/-ire → -i (prendi!, senti!). Negativo: non + infinitivo (non parlare!).",
      en: "-are → -a (parla!), -ere/-ire → -i (prendi!, senti!). Negative: non + infinitive (non parlare!).",
    },
    rule: {
      es: "Para dar una orden o un consejo a alguien que tratas de tu, los verbos en -are terminan en -a y los en -ere/-ire en -i (igual que el presente de tu). El negativo es fácil: non + infinitivo. Algunos verbos tienen una forma corta: va', fa', da', sta', di'.",
      en: "To give an order or advice to someone you call tu, -are verbs end in -a and -ere/-ire verbs end in -i (the same as the tu present). The negative is easy: non + infinitive. A few verbs have a short form: va', fa', da', sta', di'.",
    },
    steps: [
      { es: "Mira la terminación del infinitivo.", en: "Look at the infinitive ending." },
      { es: "Verbos en -are → -a (parla!); en -ere/-ire → -i (prendi!, senti!).", en: "-are → -a (parla!); -ere/-ire → -i (prendi!, senti!)." },
      { es: "¿Es negativo? → non + infinitivo: non prendere!", en: "Is it negative? → non + infinitive: non prendere!" },
      { es: "Irregulares: andare → va'/vai, fare → fa'/fai, dire → di', essere → sii, avere → abbi.", en: "Irregulars: andare → va'/vai, fare → fa'/fai, dire → di', essere → sii, avere → abbi." },
    ],
    table: {
      head: ["", "affermativo", "negativo"],
      rows: [
        ["parlare", "parla!", "non parlare!"],
        ["prendere", "prendi!", "non prendere!"],
        ["sentire", "senti!", "non sentire!"],
        ["finire", "finisci!", "non finire!"],
        ["andare", "va' / vai!", "non andare!"],
        ["fare", "fa' / fai!", "non fare!"],
        ["essere", "sii!", "non essere!"],
      ],
    },
    examples: [
      { target: "Prendi un'aspirina e vai a letto presto.", gloss: { es: "Tómate una aspirina y acuéstate temprano.", en: "Take an aspirin and go to bed early." } },
      { target: "Prendi questa medicina due volte al giorno.", gloss: { es: "Toma este medicamento dos veces al día.", en: "Take this medicine twice a day." } },
      { target: "Non fumare!", gloss: { es: "¡No fumes!", en: "Don't smoke!" } },
    ],
    pitfalls: {
      es: "El español niega con el subjuntivo («no hables»), pero «non parli!» en italiano es la forma de Lei (usted). A un amigo: non parlare! Y la negación es non, no «no».",
      en: "The negative is not non + the tu form: 'non parla!' is wrong → non parlare! And the word is non, not 'no': 'no fumare' → non fumare.",
    },
  },
  {
    id: "it-g-imperativo-lei",
    lang: "it",
    cefr: "B1",
    title: { es: "El imperativo con Lei (usted)", en: "The Lei (formal) imperative" },
    short: {
      es: "Lei: -are → -i (parli), -ere/-ire → -a (prenda, senta). Irregulares: venga, vada, faccia, dica.",
      en: "Lei: -are → -i (parli), -ere/-ire → -a (prenda, senta). Irregular: venga, vada, faccia, dica.",
    },
    rule: {
      es: "Con Lei, el imperativo toma la forma del congiuntivo, como el «usted» del español usa el subjuntivo («hable», «tome»). Las vocales se invierten respecto a tu: -are → -i, -ere/-ire → -a. El negativo es solo non + la misma forma: non parli.",
      en: "With Lei, the imperative borrows the subjunctive form. The vowels swap compared with tu: -are → -i, -ere/-ire → -a. The negative is just non + the same form: non parli.",
    },
    steps: [
      { es: "Parte del presente de io: parlo, prendo, vengo, faccio, dico.", en: "Start from the io present: parlo, prendo, vengo, faccio, dico." },
      { es: "Quita la -o: parl-, prend-, veng-, facci-, dic-.", en: "Drop the -o: parl-, prend-, veng-, facci-, dic-." },
      { es: "-are → añade -i (parli); -ere/-ire → añade -a (prenda, venga, faccia, dica).", en: "-are → add -i (parli); -ere/-ire → add -a (prenda, venga, faccia, dica)." },
      { es: "Excepciones: essere → sia, avere → abbia, stare → stia, dare → dia.", en: "Exceptions: essere → sia, avere → abbia, stare → stia, dare → dia." },
    ],
    table: {
      head: ["infinito", "tu", "Lei"],
      rows: [
        ["parlare", "parla!", "parli!"],
        ["prendere", "prendi!", "prenda!"],
        ["sentire", "senti!", "senta!"],
        ["venire", "vieni!", "venga!"],
        ["andare", "va' / vai!", "vada!"],
        ["fare", "fa' / fai!", "faccia!"],
        ["dire", "di'!", "dica!"],
      ],
    },
    examples: [
      { target: "Resti a letto e beva molta acqua.", gloss: { es: "Quédese en cama y beba mucha agua.", en: "Stay in bed and drink plenty of water." } },
      { target: "Mi scusi, dov'è la farmacia?", gloss: { es: "Disculpe, ¿dónde está la farmacia?", en: "Excuse me, where's the pharmacy?" } },
      { target: "Senta, venga domani mattina.", gloss: { es: "Mire, venga mañana por la mañana.", en: "Listen, come tomorrow morning." } },
    ],
    pitfalls: {
      es: "Con un desconocido o el médico no uses la forma de tu: «Scusa, dov'è…?» es informal → Scusi, dov'è…? El truco es el mismo del español: «hable» con -e, parli con -i.",
      en: "English has only one imperative, so it's easy to use the tu form with strangers: 'Scusa, dov'è…?' is informal → Scusi, dov'è…? The Lei vowel is the opposite one: parla → parli, prendi → prenda.",
    },
  },
  {
    id: "it-g-imperativo-pronomi",
    lang: "it",
    cefr: "B1",
    title: { es: "Imperativo con pronombres", en: "Imperative with pronouns" },
    short: {
      es: "tu: el pronombre se pega al final (prendilo, alzati, dimmi). Lei: va delante (lo prenda, si alzi, mi dica).",
      en: "tu: the pronoun is attached to the end (prendilo, alzati, dimmi). Lei: it goes in front (lo prenda, si alzi, mi dica).",
    },
    rule: {
      es: "Con el imperativo de tu (y de noi, voi), los pronombres se pegan al final del verbo y forman una sola palabra, como en español «tómalo». Con Lei, en cambio, van delante y separados: lo prenda. Tras las formas cortas da', di', fa', sta', va' la consonante del pronombre se duplica: dimmi, fammi, dallo (salvo gli: dagli).",
      en: "With the tu imperative (and noi, voi), pronouns are attached to the end of the verb as one word: prendilo. With Lei, they go in front as a separate word: lo prenda. After the short forms da', di', fa', sta', va' the pronoun's consonant doubles: dimmi, fammi, dallo (except gli: dagli).",
    },
    steps: [
      { es: "¿Tu o Lei?", en: "tu or Lei?" },
      { es: "tu → pega el pronombre al final: prendi + lo = prendilo; alza + ti = alzati.", en: "tu → attach the pronoun: prendi + lo = prendilo; alza + ti = alzati." },
      { es: "Forma corta (di', fa', va'…) → duplica la consonante: di' + mi = dimmi.", en: "Short form (di', fa', va'…) → double the consonant: di' + mi = dimmi." },
      { es: "Lei → pronombre delante: lo prenda, si alzi, mi dica. Negativo tu: non prenderlo.", en: "Lei → pronoun in front: lo prenda, si alzi, mi dica. Negative tu: non prenderlo." },
    ],
    table: {
      head: ["", "tu", "Lei"],
      rows: [
        ["lo (prendere)", "prendilo!", "lo prenda!"],
        ["la (prendere)", "prendila!", "la prenda!"],
        ["mi (dire)", "dimmi!", "mi dica!"],
        ["si (alzarsi)", "alzati!", "si alzi!"],
        ["negativo", "non prenderlo!", "non lo prenda!"],
      ],
    },
    examples: [
      { target: "Dimmi!", gloss: { es: "¡Dime!", en: "Tell me!" } },
      { target: "Lo prenda dopo i pasti.", gloss: { es: "Tómelo después de las comidas.", en: "Take it after meals." } },
      { target: "Non preoccuparti!", gloss: { es: "¡No te preocupes!", en: "Don't worry!" } },
      { target: "Si accomodi.", gloss: { es: "Siéntese / Pase.", en: "Have a seat / Come in." } },
    ],
    pitfalls: {
      es: "En español el pronombre se pega también con usted («tómelo»), pero en italiano no: «Prendalo» es incorrecto → Lo prenda. Con tu sí: prendilo.",
      en: "With tu the pronoun is glued on, not placed before: 'La prendi!' is a question or statement ('you take it') → Prendila! With Lei it goes in front: La prenda!",
    },
  },

  // ── u14 ────────────────────────────────────────────────────
  {
    id: "it-g-condizionale",
    lang: "it",
    cefr: "B1",
    title: { es: "El condicional presente", en: "The present conditional" },
    short: {
      es: "Raíz del futuro + -ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei, vorrei. verremmo (cond.) ≠ verremo (fut.).",
      en: "Future stem + -ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei, vorrei. verremmo (cond.) ≠ verremo (fut.).",
    },
    rule: {
      es: "El condicional usa la misma raíz que el futuro (parler-, sar-, verr-, vorr-) con terminaciones propias. Sirve para pedir con cortesía (vorrei, potrebbe), expresar deseos (mi piacerebbe) y dar consejos (al posto tuo accetterei, dovresti).",
      en: "The conditional uses the same stem as the future (parler-, sar-, verr-, vorr-) with its own endings. It is used for polite requests (vorrei, potrebbe), wishes (mi piacerebbe) and advice (al posto tuo accetterei, dovresti).",
    },
    steps: [
      { es: "Toma la raíz del futuro: parlerò → parler-, verrò → verr-, vorrò → vorr-.", en: "Take the future stem: parlerò → parler-, verrò → verr-, vorrò → vorr-." },
      { es: "Añade -ei, -esti, -ebbe, -emmo, -este, -ebbero.", en: "Add -ei, -esti, -ebbe, -emmo, -este, -ebbero." },
      { es: "Con noi, doble m: verremmo (condicional) frente a verremo (futuro).", en: "For noi, double m: verremmo (conditional) vs verremo (future)." },
    ],
    table: {
      head: ["", "parlare", "prendere", "venire", "volere"],
      rows: [
        ["io", "parlerei", "prenderei", "verrei", "vorrei"],
        ["tu", "parleresti", "prenderesti", "verresti", "vorresti"],
        ["lui / lei / Lei", "parlerebbe", "prenderebbe", "verrebbe", "vorrebbe"],
        ["noi", "parleremmo", "prenderemmo", "verremmo", "vorremmo"],
        ["voi", "parlereste", "prendereste", "verreste", "vorreste"],
        ["loro", "parlerebbero", "prenderebbero", "verrebbero", "vorrebbero"],
      ],
    },
    examples: [
      { target: "Vorrei parlare con il direttore.", gloss: { es: "Quisiera hablar con el director.", en: "I'd like to speak to the manager." } },
      { target: "Mi potrebbe mandare il contratto?", gloss: { es: "¿Me podría mandar el contrato?", en: "Could you send me the contract?" } },
      { target: "Mi piacerebbe lavorare all'estero.", gloss: { es: "Me gustaría trabajar en el extranjero.", en: "I'd like to work abroad." } },
      { target: "Al posto tuo accetterei.", gloss: { es: "Yo que tú, aceptaría.", en: "If I were you, I'd accept." } },
    ],
    pitfalls: {
      es: "El español añade -ía al infinitivo completo («hablaría», «vendría»); en italiano no: «parlarei» o «venirei» son incorrectos → parlerei, verrei.",
      en: "'would' is not a separate word: the ending does the job. And the noi form has double m: 'verremo' is the future → verremmo (we would come).",
    },
  },
  {
    id: "it-g-pronomi-combinati",
    lang: "it",
    cefr: "B1",
    title: { es: "Pronombres combinados: me lo, glielo", en: "Combined pronouns: me lo, glielo" },
    short: {
      es: "Indirecto + directo: me lo, te lo, ce lo, ve lo; gli/le + lo = glielo (= «se lo»). Ante ho: gliel'ho.",
      en: "Indirect + direct: me lo, te lo, ce lo, ve lo; gli/le + lo = glielo. Before ho: gliel'ho.",
    },
    rule: {
      es: "Cuando hay un pronombre indirecto y uno directo, va primero el indirecto y su -i se vuelve -e: mi → me, ti → te, ci → ce, vi → ve. gli y le (a él, a ella, a usted) se convierten en glie- y se unen al directo en una sola palabra: glielo, gliela, glieli, gliele. Es exactamente el «se lo» del español.",
      en: "When there is an indirect and a direct pronoun, the indirect one comes first and its -i turns into -e: mi → me, ti → te, ci → ce, vi → ve. gli and le (to him, to her, to you formal) both become glie- and join the direct pronoun as one word: glielo, gliela, glieli, gliele.",
    },
    steps: [
      { es: "¿A quién? (indirecto) y ¿qué? (directo): Do il libro a te → ti + lo.", en: "To whom? (indirect) and what? (direct): Do il libro a te → ti + lo." },
      { es: "Pon el indirecto primero y cambia -i por -e: te lo.", en: "Put the indirect one first and change -i to -e: te lo." },
      { es: "gli o le → glie- unido: glielo, gliela.", en: "gli or le → glie- joined on: glielo, gliela." },
      { es: "Ante ho/ha: lo/la → l' y el participio concuerda con el directo: gliel'ho data (la lettera).", en: "Before ho/ha: lo/la → l' and the participle agrees with the direct object: gliel'ho data (la lettera)." },
    ],
    table: {
      head: ["", "lo", "la", "li", "le"],
      rows: [
        ["mi", "me lo", "me la", "me li", "me le"],
        ["ti", "te lo", "te la", "te li", "te le"],
        ["gli / le / Le", "glielo", "gliela", "glieli", "gliele"],
        ["ci", "ce lo", "ce la", "ce li", "ce le"],
        ["vi", "ve lo", "ve la", "ve li", "ve le"],
      ],
    },
    examples: [
      { target: "Te lo mando domani.", gloss: { es: "Te lo mando mañana.", en: "I'll send it to you tomorrow." } },
      { target: "Glielo dico io.", gloss: { es: "Se lo digo yo.", en: "I'll tell him (her) myself." } },
      { target: "Le hai dato il libro? — Sì, gliel'ho dato.", gloss: { es: "¿Le diste el libro? — Sí, se lo di.", en: "Did you give her the book? — Yes, I gave it to her." } },
    ],
    pitfalls: {
      es: "El «se lo» español no se traduce palabra por palabra: «se lo dico» o «gli lo dico» son incorrectos → glielo dico, todo junto.",
      en: "Order and shape both change: 'lo gli do' or 'gli lo do' are wrong → glielo do. English 'it to him' becomes 'to-him-it' in one word.",
    },
  },
  {
    id: "it-g-ne",
    lang: "it",
    cefr: "B1",
    title: { es: "El pronombre ne", en: "The pronoun ne" },
    short: {
      es: "ne = «de eso / de ellos»: reemplaza una cantidad o di + algo: Quanti caffè bevi? Ne bevo tre.",
      en: "ne = 'of it / of them': it replaces a quantity or di + something: Quanti caffè bevi? Ne bevo tre.",
    },
    rule: {
      es: "ne reemplaza un sustantivo del que se dice una cantidad (un número, molti, un chilo, niente) y va delante del verbo; la cantidad se queda al final. También reemplaza «di + algo»: Che ne pensi? (= di questo). En español no se dice nada («tengo diez»), pero en italiano ne es obligatorio.",
      en: "ne replaces a noun when you state a quantity of it (a number, molti, un chilo, niente); ne goes before the verb and the quantity stays at the end. It also replaces 'di + something': Che ne pensi? (= di questo). It works like 'of them' in 'I have ten of them', but in Italian it is compulsory.",
    },
    steps: [
      { es: "¿Respondes con una cantidad (dieci, molti, un chilo, nessuno)? → ne.", en: "Are you answering with a quantity (dieci, molti, un chilo, nessuno)? → ne." },
      { es: "¿Sustituyes «di + algo» (parlare di, pensare di)? → ne.", en: "Are you replacing 'di + something' (parlare di, pensare di)? → ne." },
      { es: "Pon ne antes del verbo y deja la cantidad después: Ne ho dieci.", en: "Put ne before the verb and leave the quantity after it: Ne ho dieci." },
      { es: "En passato prossimo el participio concuerda con lo contado: Ne ho mangiate tre (mele).", en: "In the passato prossimo the participle agrees with what is counted: Ne ho mangiate tre (mele)." },
    ],
    table: {
      head: ["domanda", "risposta con ne"],
      rows: [
        ["Quanti colleghi hai?", "Ne ho dieci."],
        ["Quante mele vuoi?", "Ne voglio due."],
        ["Hai dei colleghi simpatici?", "Sì, ne ho molti."],
        ["Bevi del caffè?", "No, non ne bevo."],
        ["Parlate del lavoro?", "Sì, ne parliamo spesso."],
      ],
    },
    examples: [
      { target: "Quanti colleghi hai? — Ne ho dieci.", gloss: { es: "¿Cuántos colegas tienes? — Tengo diez.", en: "How many colleagues have you got? — I've got ten." } },
      { target: "Sì, ne ho molti.", gloss: { es: "Sí, tengo muchos.", en: "Yes, I have lots (of them)." } },
      { target: "Che ne pensi del nuovo ristorante?", gloss: { es: "¿Qué piensas del nuevo restaurante?", en: "What do you think of the new restaurant?" } },
    ],
    pitfalls: {
      es: "Con una cantidad no se usa lo/li: «Li ho dieci» es incorrecto → Ne ho dieci. Y «Ho dieci» a secas suena incompleto en italiano.",
      en: "With a quantity, don't use lo/li: 'Li ho dieci' is wrong → Ne ho dieci. And bare 'Ho dieci' sounds unfinished in Italian.",
    },
  },

  // ── u15 ────────────────────────────────────────────────────
  {
    id: "it-g-congiuntivo",
    lang: "it",
    cefr: "B1",
    title: { es: "El congiuntivo presente", en: "The present subjunctive" },
    short: {
      es: "-are → -i (parli), -ere/-ire → -a (prenda) en io/tu/lui; noi -iamo, voi -iate, loro -ino/-ano. sia, abbia.",
      en: "-are → -i (parli), -ere/-ire → -a (prenda) for io/tu/lui; noi -iamo, voi -iate, loro -ino/-ano. sia, abbia.",
    },
    rule: {
      es: "El congiuntivo es el subjuntivo italiano: se usa sobre todo tras che, después de verbos de opinión, deseo, esperanza o duda. Se forma desde el presente de io; las tres personas del singular son iguales, por eso a menudo se pone el sujeto (che tu parli). Como en español, las vocales se invierten: -are lleva -i, -ere/-ire llevan -a.",
      en: "The congiuntivo is the Italian subjunctive: it is used mainly after che, following verbs of opinion, wish, hope or doubt. It is built from the io present; the three singular persons are identical, so the subject is often added (che tu parli). The vowels swap: -are verbs take -i, -ere/-ire verbs take -a.",
    },
    steps: [
      { es: "Parte del presente de io y quita -o: parlo → parl-, prendo → prend-, vengo → veng-.", en: "Start from the io present and drop -o: parlo → parl-, prendo → prend-, vengo → veng-." },
      { es: "En singular: -are → -i (parli); -ere/-ire → -a (prenda, venga).", en: "Singular: -are → -i (parli); -ere/-ire → -a (prenda, venga)." },
      { es: "noi = igual que el presente (veniamo, andiamo); voi = raíz de noi + -iate (veniate, andiate); loro = singular + -no (parlino, vengano).", en: "noi = same as the present (veniamo, andiamo); voi = noi stem + -iate (veniate, andiate); loro = singular + -no (parlino, vengano)." },
      { es: "Irregulares: sia, abbia, stia, faccia, vada, possa, debba.", en: "Irregulars: sia, abbia, stia, faccia, vada, possa, debba." },
    ],
    table: {
      head: ["che…", "parlare", "prendere", "essere", "avere"],
      rows: [
        ["io / tu / lui / lei", "parli", "prenda", "sia", "abbia"],
        ["noi", "parliamo", "prendiamo", "siamo", "abbiamo"],
        ["voi", "parliate", "prendiate", "siate", "abbiate"],
        ["loro", "parlino", "prendano", "siano", "abbiano"],
      ],
    },
    examples: [
      { target: "Penso che sia una buona idea.", gloss: { es: "Creo que es una buena idea.", en: "I think it's a good idea." } },
      { target: "Spero che tu stia bene.", gloss: { es: "Espero que estés bien.", en: "I hope you're well." } },
      { target: "È importante che tutti partecipino.", gloss: { es: "Es importante que todos participen.", en: "It's important that everyone takes part." } },
      { target: "Non credo che venga.", gloss: { es: "No creo que venga.", en: "I don't think he's coming." } },
    ],
    pitfalls: {
      es: "Las vocales son las contrarias a las del español: «hable» lleva e, pero en italiano «che lui parle» es incorrecto → che lui parli; y «coma» con a → che lui prenda.",
      en: "English barely marks the subjunctive, so it's tempting to keep the indicative: 'Spero che tu stai bene' is informal at best → Spero che tu stia bene.",
    },
  },
  {
    id: "it-g-quando-congiuntivo",
    lang: "it",
    cefr: "B1",
    title: { es: "¿Congiuntivo o indicativo?", en: "Subjunctive or indicative?" },
    short: {
      es: "Opinión, esperanza, duda, deseo, necesidad + che → congiuntivo (penso che sia). Certeza → indicativo (so che è).",
      en: "Opinion, hope, doubt, wish, necessity + che → subjunctive (penso che sia). Certainty → indicative (so che è).",
    },
    rule: {
      es: "Lo que decide es el verbo principal, antes de che. Si expresa algo subjetivo (opinión, esperanza, deseo, duda, necesidad: penso, spero, voglio, è importante, bisogna) va el congiuntivo; si expresa certeza o conocimiento (so, sono sicuro, è vero) va el indicativo. Ojo: en italiano también la opinión positiva lleva congiuntivo, a diferencia de «creo que es».",
      en: "The main verb before che decides. If it expresses something subjective (opinion, hope, wish, doubt, necessity: penso, spero, voglio, è importante, bisogna) use the congiuntivo; if it expresses certainty or knowledge (so, sono sicuro, è vero) use the indicative.",
    },
    steps: [
      { es: "Mira el verbo principal, antes de che.", en: "Look at the main verb, before che." },
      { es: "¿Opinión, esperanza, deseo, duda o necesidad? → congiuntivo.", en: "Opinion, hope, wish, doubt or necessity? → congiuntivo." },
      { es: "¿Certeza o hecho conocido? → indicativo.", en: "Certainty or a known fact? → indicative." },
      { es: "Sin che (secondo me, forse) → indicativo: Secondo me hai ragione.", en: "No che (secondo me, forse) → indicative: Secondo me hai ragione." },
    ],
    table: {
      head: ["frase principale", "modo", "esempio"],
      rows: [
        ["penso / credo / mi sembra che", "congiuntivo", "sia caro"],
        ["spero / voglio che", "congiuntivo", "tu venga"],
        ["è importante / bisogna che", "congiuntivo", "tutti partecipino"],
        ["non credo / dubito che", "congiuntivo", "venga"],
        ["so / sono sicuro / è vero che", "indicativo", "è in ufficio"],
        ["secondo me (senza che)", "indicativo", "hai ragione"],
      ],
    },
    examples: [
      { target: "Mi sembra che sia troppo caro.", gloss: { es: "Me parece que es demasiado caro.", en: "It seems too expensive to me." } },
      { target: "So che Luca è in ufficio.", gloss: { es: "Sé que Luca está en la oficina.", en: "I know Luca is in the office." } },
      { target: "Secondo me hai ragione.", gloss: { es: "En mi opinión tienes razón.", en: "In my opinion you're right." } },
    ],
    pitfalls: {
      es: "En español «creo que es caro» va en indicativo, pero «credo che è caro» es incorrecto en italiano estándar → credo che sia caro. Y al revés: «so che sia» → so che è.",
      en: "'Penso che è caro' is common in casual speech but wrong in standard Italian → penso che sia caro. And don't overdo it: 'so che sia' → so che è.",
    },
  },
  {
    id: "it-g-di-infinito",
    lang: "it",
    cefr: "B1",
    title: { es: "Mismo sujeto: di + infinitivo", en: "Same subject: di + infinitive" },
    short: {
      es: "Mismo sujeto → di + infinitivo (penso di avere ragione); sujetos distintos → che + congiuntivo (penso che tu abbia).",
      en: "Same subject → di + infinitive (penso di avere ragione); different subjects → che + subjunctive (penso che tu abbia).",
    },
    rule: {
      es: "Si quien piensa, espera o cree es el mismo que hace la segunda acción, el italiano no usa che sino di + infinitivo: Penso di avere ragione. Solo con sujetos distintos aparece che + congiuntivo. Con volere, preferire y desiderare el infinitivo va sin di: Voglio venire.",
      en: "If the person who thinks, hopes or believes is the same as the one doing the second action, Italian uses di + infinitive instead of che: Penso di avere ragione. che + congiuntivo only appears with different subjects. With volere, preferire and desiderare the infinitive has no di: Voglio venire.",
    },
    steps: [
      { es: "¿Quién piensa/espera? ¿Quién hace la segunda acción?", en: "Who thinks/hopes? Who does the second action?" },
      { es: "La misma persona → di + infinitivo: Spero di venire.", en: "Same person → di + infinitive: Spero di venire." },
      { es: "Personas distintas → che + congiuntivo: Spero che tu venga.", en: "Different people → che + congiuntivo: Spero che tu venga." },
      { es: "volere, preferire, desiderare → infinitivo sin di: Voglio venire.", en: "volere, preferire, desiderare → infinitive with no di: Voglio venire." },
    ],
    table: {
      head: ["soggetti", "struttura", "esempio"],
      rows: [
        ["io → io", "di + infinito", "Penso di avere ragione."],
        ["io → tu", "che + congiuntivo", "Penso che tu abbia ragione."],
        ["io → io", "di + infinito", "Spero di venire."],
        ["io → lui", "che + congiuntivo", "Spero che lui venga."],
      ],
    },
    examples: [
      { target: "Penso di avere ragione.", gloss: { es: "Creo que tengo razón.", en: "I think I'm right." } },
      { target: "Spero di vederti presto.", gloss: { es: "Espero verte pronto.", en: "I hope to see you soon." } },
      { target: "Credo di aver capito.", gloss: { es: "Creo que entendí.", en: "I think I've understood." } },
    ],
    pitfalls: {
      es: "En español se dice «creo que tengo razón», pero «penso che ho ragione» es incorrecto → penso di avere ragione. Tampoco sin di: «penso avere ragione».",
      en: "'Penso avere ragione' (no di) and 'penso che ho ragione' are both wrong → penso di avere ragione.",
    },
  },

  // ── u16 ────────────────────────────────────────────────────
  {
    id: "it-g-trapassato",
    lang: "it",
    cefr: "B1",
    title: { es: "El trapassato prossimo", en: "The trapassato prossimo (past perfect)" },
    short: {
      es: "imperfetto de avere/essere + participio: avevo mangiato, ero uscito/a. Para lo que pasó antes de otro pasado.",
      en: "imperfetto of avere/essere + participle: avevo mangiato, ero uscito/a. For what had happened before another past.",
    },
    rule: {
      es: "El trapassato prossimo cuenta lo que ya había pasado antes de otro momento del pasado, como «había comido». Se forma con el imperfetto de avere o essere + participio; el auxiliar y la concordancia son los mismos que en el passato prossimo.",
      en: "The trapassato prossimo tells what had already happened before another moment in the past, like 'had eaten'. It is formed with the imperfetto of avere or essere + participle; the choice of auxiliary and the agreement are the same as in the passato prossimo.",
    },
    steps: [
      { es: "¿La acción es anterior a otro hecho pasado? → trapassato.", en: "Did the action happen before another past event? → trapassato." },
      { es: "Elige el auxiliar como en el passato prossimo: avere o essere.", en: "Choose the auxiliary as in the passato prossimo: avere or essere." },
      { es: "Ponlo en imperfetto: avevo, avevi… / ero, eri…", en: "Put it in the imperfetto: avevo, avevi… / ero, eri…" },
      { es: "Añade el participio; con essere concuerda: era uscita, erano usciti.", en: "Add the participle; with essere it agrees: era uscita, erano usciti." },
    ],
    table: {
      head: ["", "mangiare (avere)", "uscire (essere)"],
      rows: [
        ["io", "avevo mangiato", "ero uscito/a"],
        ["tu", "avevi mangiato", "eri uscito/a"],
        ["lui / lei", "aveva mangiato", "era uscito/a"],
        ["noi", "avevamo mangiato", "eravamo usciti/e"],
        ["voi", "avevate mangiato", "eravate usciti/e"],
        ["loro", "avevano mangiato", "erano usciti/e"],
      ],
    },
    examples: [
      { target: "Quando sono arrivato, il film era già cominciato.", gloss: { es: "Cuando llegué, la película ya había empezado.", en: "When I arrived, the film had already started." } },
      { target: "Avevo dimenticato le chiavi.", gloss: { es: "Había olvidado las llaves.", en: "I had forgotten my keys." } },
      { target: "Non mi ero accorto di niente.", gloss: { es: "No me había dado cuenta de nada.", en: "I hadn't noticed anything." } },
    ],
    pitfalls: {
      es: "En español siempre es «había», pero en italiano el auxiliar depende del verbo: «il treno aveva partito» es incorrecto → il treno era partito.",
      en: "English 'had' is not always avere: 'il treno aveva partito' is wrong → il treno era partito (the train had left).",
    },
  },
  {
    id: "it-g-relativi",
    lang: "it",
    cefr: "B1",
    title: { es: "Pronombres relativos: che, cui, il quale", en: "Relative pronouns: che, cui, il quale" },
    short: {
      es: "che = sujeto u objeto (il libro che leggo); tras preposición → cui (la ragazza con cui parlavo).",
      en: "che = subject or object (il libro che leggo); after a preposition → cui (la ragazza con cui parlavo).",
    },
    rule: {
      es: "che une dos frases cuando reemplaza al sujeto o al objeto directo, y nunca cambia. Si hace falta una preposición (con, di, a, in, per…), se usa preposición + cui, que tampoco cambia. il quale, la quale, i quali, le quali concuerdan con el sustantivo y son más formales; con preposición se unen al artículo: del quale, nella quale.",
      en: "che links two clauses when it replaces the subject or the direct object, and it never changes. If a preposition is needed (con, di, a, in, per…), use preposition + cui, which doesn't change either. il quale, la quale, i quali, le quali agree with the noun and are more formal; with a preposition they merge with the article: del quale, nella quale.",
    },
    steps: [
      { es: "En la segunda frase, ¿el sustantivo va con preposición? (parlavo con la ragazza)", en: "In the second clause, does the noun need a preposition? (parlavo con la ragazza)" },
      { es: "Si no la lleva → che: il libro che mi hai prestato.", en: "No → che: il libro che mi hai prestato." },
      { es: "Sí → preposición + cui: la ragazza con cui parlavo.", en: "Yes → preposition + cui: la ragazza con cui parlavo." },
      { es: "En un texto formal puedes usar il/la quale: la ragazza con la quale parlavo.", en: "In formal writing you can use il/la quale: la ragazza con la quale parlavo." },
    ],
    table: {
      head: ["funzione", "pronome", "esempio"],
      rows: [
        ["soggetto", "che", "l'amico che vive a Roma"],
        ["oggetto", "che", "il libro che mi hai prestato"],
        ["con preposizione", "con cui", "la ragazza con cui parlavo"],
        ["con preposizione", "di cui", "la città di cui ti ho parlato"],
        ["formale", "con il quale", "l'amico con il quale lavoro"],
      ],
    },
    examples: [
      { target: "Il libro che mi hai prestato è bellissimo.", gloss: { es: "El libro que me prestaste es precioso.", en: "The book you lent me is wonderful." } },
      { target: "La ragazza con cui parlavo è mia cugina.", gloss: { es: "La chica con la que hablaba es mi prima.", en: "The girl I was talking to is my cousin." } },
      { target: "È la città di cui ti ho parlato.", gloss: { es: "Es la ciudad de la que te hablé.", en: "It's the city I told you about." } },
    ],
    pitfalls: {
      es: "El español dice «con la que» o «con quien», pero «con che» o «con la che» son incorrectos → con cui (o con la quale).",
      en: "English can drop 'that' and leave the preposition at the end; Italian can't: 'la ragazza parlavo con' is wrong → la ragazza con cui parlavo. And always keep che: il libro che mi hai prestato.",
    },
  },
  {
    id: "it-g-passato-remoto",
    lang: "it",
    cefr: "B1",
    title: { es: "El passato remoto (para reconocerlo)", en: "The passato remoto (recognising it)" },
    short: {
      es: "Pasado de cuentos, historia y libros: parlò (habló), fu (fue), ebbe (tuvo), fece (hizo), disse (dijo), andò (fue).",
      en: "Past tense of stories, history and books: parlò (spoke), fu (was), ebbe (had), fece (did), disse (said), andò (went).",
    },
    rule: {
      es: "El passato remoto es un pasado para hechos cerrados y lejanos, como el pretérito del español («habló», «dijo»). En la conversación del norte casi no se usa (se dice passato prossimo), pero aparece en cuentos, novelas y libros de historia, y en el sur también se habla. A este nivel basta con reconocerlo, sobre todo en tercera persona.",
      en: "The passato remoto is a past tense for completed, distant events. In everyday speech in the north it is rarely used (people say the passato prossimo instead), but it fills fairy tales, novels and history books, and is also spoken in the south. At this level you only need to recognise it, especially in the third person.",
    },
    steps: [
      { es: "¿Lees un cuento, una novela o un texto de historia? Espera passato remoto.", en: "Reading a story, a novel or a history text? Expect the passato remoto." },
      { es: "Tercera persona regular: final acentuado -ò, -é, -ì (parlò, credé, partì); plural -arono, -erono, -irono.", en: "Regular third person: stressed ending -ò, -é, -ì (parlò, credé, partì); plural -arono, -erono, -irono." },
      { es: "Irregulares frecuentes: fu, ebbe, fece, disse, venne, vide, prese, nacque.", en: "Common irregulars: fu, ebbe, fece, disse, venne, vide, prese, nacque." },
      { es: "Tradúcelo con el pretérito: disse = dijo, andò = fue.", en: "Translate it with the simple past: disse = said, andò = went." },
    ],
    table: {
      head: ["", "parlare", "partire", "essere", "avere"],
      rows: [
        ["io", "parlai", "partii", "fui", "ebbi"],
        ["tu", "parlasti", "partisti", "fosti", "avesti"],
        ["lui / lei", "parlò", "partì", "fu", "ebbe"],
        ["noi", "parlammo", "partimmo", "fummo", "avemmo"],
        ["voi", "parlaste", "partiste", "foste", "aveste"],
        ["loro", "parlarono", "partirono", "furono", "ebbero"],
      ],
    },
    examples: [
      { target: "Pinocchio disse una bugia.", gloss: { es: "Pinocho dijo una mentira.", en: "Pinocchio told a lie." } },
      { target: "Galileo nacque a Pisa.", gloss: { es: "Galileo nació en Pisa.", en: "Galileo was born in Pisa." } },
      { target: "Il viaggio fu lungo, ma alla fine arrivarono a Napoli.", gloss: { es: "El viaje fue largo, pero al final llegaron a Nápoles.", en: "The journey was long, but in the end they reached Naples." } },
    ],
    pitfalls: {
      es: "En español «fue» sirve para ser e ir, pero en italiano no: «fu» es solo de essere (fue/era); «fue (a Roma)» se dice andò a Roma.",
      en: "Don't confuse fu (was) with fa (does / ago), or fece (did) with faccia (subjunctive). The stressed final vowel matters: parlò (spoke) vs parlo (I speak).",
    },
  },
];
