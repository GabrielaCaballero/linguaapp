import type { GrammarPoint } from "../schema";

// Grammar points for units u17–u24 (B1–B2): textbook cards linked from the units' pattern items.
export const grammar3: GrammarPoint[] = [
  // ── u17 ────────────────────────────────────────────────────
  {
    id: "it-g-congiuntivo-imperfetto",
    lang: "it",
    cefr: "B1",
    title: { es: "El congiuntivo imperfetto", en: "The imperfect subjunctive (congiuntivo imperfetto)" },
    short: {
      es: "Raíz + -assi / -essi / -issi (parlassi, prendessi, dormissi). essere → fossi. Es el «hablara / tuviera».",
      en: "Stem + -assi / -essi / -issi (parlassi, prendessi, dormissi). essere → fossi. Used after se, magari, come se.",
    },
    rule: {
      es: "El congiuntivo imperfetto equivale a «hablara, tuviera, fuera». Se usa en hipótesis con «se», en deseos (magari, vorrei che) y después de un verbo principal en pasado que pide congiuntivo. Las formas de io y tu son iguales, así que el pronombre ayuda a aclarar.",
      en: "The imperfect subjunctive is the form after 'if' in imagined situations (se fossi = if I were). It is also used for wishes (magari, vorrei che) and after a past main verb that calls for the subjunctive. The io and tu forms are identical, so the pronoun often helps.",
    },
    steps: [
      { es: "Piensa en el imperfetto de indicativo (io): parlavo, prendevo, dormivo, facevo.", en: "Think of the imperfetto indicative (io): parlavo, prendevo, dormivo, facevo." },
      { es: "Quita -vo y añade -ssi: parla- → parlassi, prende- → prendessi, face- → facessi.", en: "Drop -vo and add -ssi: parla- → parlassi, prende- → prendessi, face- → facessi." },
      { es: "Cambia la terminación según la persona: -ssi, -ssi, -sse, -ssimo, -ste, -ssero.", en: "Change the ending for the person: -ssi, -ssi, -sse, -ssimo, -ste, -ssero." },
      { es: "Excepciones que se memorizan: essere → fossi, stare → stessi, dare → dessi.", en: "Learn the exceptions by heart: essere → fossi, stare → stessi, dare → dessi." },
    ],
    table: {
      head: ["", "parlare", "prendere", "dormire", "essere"],
      rows: [
        ["io", "parlassi", "prendessi", "dormissi", "fossi"],
        ["tu", "parlassi", "prendessi", "dormissi", "fossi"],
        ["lui / lei / Lei", "parlasse", "prendesse", "dormisse", "fosse"],
        ["noi", "parlassimo", "prendessimo", "dormissimo", "fossimo"],
        ["voi", "parlaste", "prendeste", "dormiste", "foste"],
        ["loro", "parlassero", "prendessero", "dormissero", "fossero"],
      ],
    },
    examples: [
      { target: "Se fossi ricco, comprerei una casa al mare.", gloss: { es: "Si fuera rico, compraría una casa en la playa.", en: "If I were rich, I'd buy a house by the sea." } },
      { target: "Se vincessi alla lotteria, girerei il mondo.", gloss: { es: "Si ganara la lotería, recorrería el mundo.", en: "If I won the lottery, I'd travel the world." } },
      { target: "Vorrei che tu restassi.", gloss: { es: "Quisiera que te quedaras.", en: "I'd like you to stay." } },
    ],
    pitfalls: {
      es: "«Se sarei ricco» es incorrecto: después de «se» nunca va el condicional, igual que en español no se dice «si sería». Lo correcto: «Se fossi ricco, comprerei…».",
      en: "'Se sarei ricco' is wrong: the conditional never follows se, just as English avoids 'if I would be'. Say 'Se fossi ricco, comprerei…'.",
    },
  },
  {
    id: "it-g-periodo-ipotetico",
    lang: "it",
    cefr: "B1",
    title: { es: "Oraciones con «se»: real y posible", en: "'If' sentences: real and possible" },
    short: {
      es: "Real: se + presente → presente/futuro. Posible: se + congiuntivo imperfetto → condicional (se avessi, verrei).",
      en: "Real: se + present → present/future. Possible: se + imperfect subjunctive → conditional (se avessi, verrei).",
    },
    rule: {
      es: "Una oración con «se» tiene dos partes: la condición y la consecuencia. Si la condición es real o probable, ambas van en indicativo (presente o futuro). Si es solo imaginada o poco probable, la condición va en congiuntivo imperfetto y la consecuencia en condicional, como «si tuviera…, iría».",
      en: "An 'if' sentence has two parts: the condition and the result. If the condition is real or likely, both parts use the indicative (present or future). If it is only imagined or unlikely, the condition takes the imperfect subjunctive and the result the conditional.",
    },
    steps: [
      { es: "Pregúntate: ¿es algo real o probable, o algo imaginado?", en: "Ask yourself: is this real or likely, or imagined?" },
      { es: "Real → se + presente, y la otra parte en presente o futuro.", en: "Real → se + present, and the other part in the present or future." },
      { es: "Imaginado → se + congiuntivo imperfetto (avessi, fossi, potessi).", en: "Imagined → se + imperfect subjunctive (avessi, fossi, potessi)." },
      { es: "Pon la consecuencia en condicional (verrei, farei, girerei). El orden de las partes puede cambiar.", en: "Put the result in the conditional (verrei, farei, girerei). The two parts can swap order." },
    ],
    table: {
      head: ["tipo", "se + …", "conseguenza"],
      rows: [
        ["reale", "presente", "presente / futuro"],
        ["possibile", "congiuntivo imperfetto", "condizionale"],
      ],
    },
    examples: [
      { target: "Se piove, resto a casa.", gloss: { es: "Si llueve, me quedo en casa.", en: "If it rains, I stay at home." } },
      { target: "Se avessi tempo, imparerei a suonare il pianoforte.", gloss: { es: "Si tuviera tiempo, aprendería a tocar el piano.", en: "If I had time, I'd learn to play the piano." } },
      { target: "Se fossi in te, non lo farei.", gloss: { es: "Yo que tú, no lo haría.", en: "If I were you, I wouldn't do it." } },
      { target: "Cosa faresti se vincessi un milione?", gloss: { es: "¿Qué harías si ganaras un millón?", en: "What would you do if you won a million?" } },
    ],
    pitfalls: {
      es: "«Se avrei più soldi, viaggerei» es incorrecto: el condicional va solo en la consecuencia, nunca después de «se». Correcto: «Se avessi più soldi, viaggerei di più» (como «si tuviera», no «si tendría»).",
      en: "'Se avrei più soldi, viaggerei' is wrong: the conditional goes only in the result, never after se. Correct: 'Se avessi più soldi, viaggerei di più' (like 'if I had', not 'if I would have').",
    },
  },
  {
    id: "it-g-magari-come-se",
    lang: "it",
    cefr: "B1",
    title: { es: "Deseos y comparaciones irreales: magari, come se, vorrei che", en: "Wishes and unreal comparisons: magari, come se, vorrei che" },
    short: {
      es: "magari (ojalá), come se (como si) y vorrei che (quisiera que) + congiuntivo imperfetto: Magari fosse vero!",
      en: "magari (if only), come se (as if) and vorrei che (I'd like … to) + imperfect subjunctive: Magari fosse vero!",
    },
    rule: {
      es: "Cuando deseas algo poco probable o comparas con algo que no es real, el italiano usa el congiuntivo imperfetto, igual que el español «ojalá fuera», «como si fuera». Con vorrei che (y preferirei che) el verbo principal está en condicional, por eso lo que sigue también va en congiuntivo imperfetto. Ojo: magari con indicativo significa «quizás» (Magari vengo = quizás vengo).",
      en: "To wish for something unlikely or to compare with something unreal, Italian uses the imperfect subjunctive, like English 'if only it were', 'as if he were'. After vorrei che (and preferirei che) the main verb is conditional, so the next verb takes the imperfect subjunctive too. Careful: magari with the indicative means 'maybe' (Magari vengo = maybe I'll come).",
    },
    steps: [
      { es: "¿Es un deseo (ojalá), una comparación irreal (como si) o un «quisiera que»?", en: "Is it a wish (if only), an unreal comparison (as if) or 'I'd like … to'?" },
      { es: "Pon magari, come se o vorrei che al principio.", en: "Start with magari, come se or vorrei che." },
      { es: "Conjuga el verbo siguiente en congiuntivo imperfetto: fosse, venissi, vedesse.", en: "Put the next verb in the imperfect subjunctive: fosse, venissi, vedesse." },
    ],
    table: {
      head: ["", "+ congiuntivo imperfetto"],
      rows: [
        ["magari", "Magari fosse vero!"],
        ["come se", "Parla come se fosse il capo."],
        ["vorrei che", "Vorrei che tu venissi."],
        ["preferirei che", "Preferirei che restassi qui."],
      ],
    },
    examples: [
      { target: "Magari fossi in vacanza!", gloss: { es: "¡Ojalá estuviera de vacaciones!", en: "If only I were on holiday!" } },
      { target: "Era come se non mi vedesse.", gloss: { es: "Era como si no me viera.", en: "It was as if he didn't see me." } },
      { target: "Vorrei che tu restassi.", gloss: { es: "Quisiera que te quedaras.", en: "I'd like you to stay." } },
    ],
    pitfalls: {
      es: "«Vorrei che tu vieni» o «vorrei che tu venga» son incorrectos: después de vorrei che va congiuntivo imperfetto, como «quisiera que vinieras». Correcto: «Vorrei che tu venissi».",
      en: "'Vorrei che tu vieni' is wrong: Italian needs the imperfect subjunctive after vorrei che, where English uses 'I'd like you to come'. Correct: 'Vorrei che tu venissi'.",
    },
  },

  // ── u18 ────────────────────────────────────────────────────
  {
    id: "it-g-si-impersonale",
    lang: "it",
    cefr: "B1",
    title: { es: "El «si» impersonal y pasivo", en: "Impersonal and passive 'si'" },
    short: {
      es: "Como el «se» del español: si vive bene. Con objeto, el verbo concuerda: si vende una casa, si vendono case.",
      en: "si + verb = 'one / people / you': si vive bene. With an object the verb agrees: si vende una casa, si vendono case.",
    },
    rule: {
      es: "si + verbo en 3.ª persona habla de la gente en general, como el «se» del español (aquí se vive bien). Si hay un objeto, el verbo concuerda con él: singular con una cosa, plural con varias. En los tiempos compuestos se usa essere: si è mangiato bene.",
      en: "si + a third-person verb talks about people in general, like 'one' or 'you' in English (si vive bene = life is good here). If there is an object, the verb agrees with it: singular for one thing, plural for several. Compound tenses use essere: si è mangiato bene.",
    },
    steps: [
      { es: "Pon si delante del verbo en 3.ª persona.", en: "Put si before a third-person verb." },
      { es: "¿Hay un objeto? Si es plural (case, libri, rifiuti), el verbo va en plural.", en: "Is there an object? If it is plural (case, libri, rifiuti), the verb goes plural." },
      { es: "Con un verbo reflexivo, si se convierte en «ci si»: ci si alza presto.", en: "With a reflexive verb, use 'ci si': ci si alza presto." },
      { es: "Con essere + adjetivo, el adjetivo va en plural: quando si è giovani.", en: "With essere + adjective, the adjective is plural: quando si è giovani." },
    ],
    table: {
      head: ["", "esempio", "verbo"],
      rows: [
        ["senza oggetto", "Qui si vive bene.", "3ª singolare"],
        ["oggetto singolare", "Si vende una casa.", "3ª singolare"],
        ["oggetto plurale", "Si vendono case.", "3ª plurale"],
        ["verbo riflessivo", "Ci si alza presto.", "ci si + 3ª singolare"],
        ["passato", "Si è parlato molto.", "essere + participio"],
      ],
    },
    examples: [
      { target: "Qui si parla italiano.", gloss: { es: "Aquí se habla italiano.", en: "Italian is spoken here." } },
      { target: "I rifiuti si devono separare.", gloss: { es: "La basura se tiene que separar.", en: "Waste has to be sorted." } },
      { target: "Scusi, la plastica dove si butta?", gloss: { es: "Disculpe, ¿dónde se tira el plástico?", en: "Excuse me, where does plastic go?" } },
    ],
    pitfalls: {
      es: "«In questo negozio si vende libri» es incorrecto: el verbo concuerda con el objeto plural. Correcto: «si vendono libri», como «se venden libros».",
      en: "'Si vende libri' is wrong: the verb agrees with the plural object, so say 'si vendono libri'. Think of it as 'books are sold'.",
    },
  },
  {
    id: "it-g-passivo-essere",
    lang: "it",
    cefr: "B1",
    title: { es: "La voz pasiva con essere", en: "The passive with essere" },
    short: {
      es: "essere + participio que concuerda con el sujeto; el agente va con «da»: la legge è stata approvata dal governo.",
      en: "essere + participle agreeing with the subject; the agent takes 'da': la legge è stata approvata dal governo.",
    },
    rule: {
      es: "La pasiva pone en primer plano lo que recibe la acción: el objeto de la frase activa pasa a ser sujeto. Se forma con essere en el mismo tiempo que el verbo activo + participio, que concuerda con el sujeto como un adjetivo. Quien hace la acción (el agente) se introduce con «da» (dal, dalla…), no con «per».",
      en: "The passive puts the thing affected first: the object of the active sentence becomes the subject. It is essere in the same tense as the active verb + the participle, which agrees with the subject like an adjective. The doer (the agent) is introduced with 'da' (dal, dalla…), not 'per'.",
    },
    steps: [
      { es: "Toma el objeto de la frase activa y conviértelo en sujeto (la legge).", en: "Take the object of the active sentence and make it the subject (la legge)." },
      { es: "Pon essere en el tiempo del verbo activo: ha approvato → è stata, approverà → sarà.", en: "Put essere in the active verb's tense: ha approvato → è stata, approverà → sarà." },
      { es: "Añade el participio y hazlo concordar con el sujeto: approvata (femenino singular).", en: "Add the participle and make it agree with the subject: approvata (feminine singular)." },
      { es: "Si quieres nombrar al agente, usa da + artículo: dal sindaco, dalla polizia.", en: "To name the doer, use da + article: dal sindaco, dalla polizia." },
    ],
    table: {
      head: ["tempo", "attivo", "passivo"],
      rows: [
        ["presente", "Il comune approva la legge.", "La legge è approvata."],
        ["imperfetto", "approvava", "era approvata"],
        ["passato prossimo", "ha approvato", "è stata approvata"],
        ["futuro", "approverà", "sarà approvata"],
      ],
    },
    examples: [
      { target: "La nuova legge è stata approvata ieri.", gloss: { es: "La nueva ley fue aprobada ayer.", en: "The new law was passed yesterday." } },
      { target: "Il libro è stato scritto da Calvino.", gloss: { es: "El libro fue escrito por Calvino.", en: "The book was written by Calvino." } },
      { target: "Carta, plastica e vetro dovranno essere separati.", gloss: { es: "Papel, plástico y vidrio deberán separarse.", en: "Paper, plastic and glass will have to be sorted." } },
    ],
    pitfalls: {
      es: "«La legge è stata approvata per il sindaco» es incorrecto: el «por» del agente es «da» en italiano. Y el participio concuerda: «la legge è stata approvata dal sindaco», no «approvato».",
      en: "'Approvata per il sindaco' is wrong: the agent 'by' is da, not per. And the participle agrees: 'la legge è stata approvata dal sindaco', not 'approvato'.",
    },
  },
  {
    id: "it-g-passivo-venire",
    lang: "it",
    cefr: "B1",
    title: { es: "La pasiva con venire y andare", en: "The passive with venire and andare" },
    short: {
      es: "venire + participio = pasiva de acción (viene chiusa); andare + participio = «debe hacerse» (va firmato).",
      en: "venire + participle = passive of an action (viene chiusa); andare + participle = 'must be done' (va firmato).",
    },
    rule: {
      es: "venire puede reemplazar a essere en la pasiva para subrayar la acción, pero solo en tiempos simples (presente, imperfetto, futuro). andare + participio añade la idea de obligación: il modulo va firmato = el formulario debe firmarse (excepción: con perdere o distruggere no hay obligación y vale en tiempos compuestos: il pacco è andato perso). En ambos casos el participio concuerda con el sujeto.",
      en: "venire can replace essere in the passive to stress the action, but only in simple tenses (present, imperfetto, future). andare + participle adds the idea of obligation: il modulo va firmato = the form must be signed (exception: with perdere or distruggere there is no obligation and compound tenses work: il pacco è andato perso). In both, the participle agrees with the subject.",
    },
    steps: [
      { es: "¿Describes algo que se hace (habitualmente)? → venire. ¿Algo que se debe hacer? → andare.", en: "Describing something that is done (habitually)? → venire. Something that must be done? → andare." },
      { es: "Conjuga venire o andare en un tiempo simple, en la persona del sujeto.", en: "Conjugate venire or andare in a simple tense, for the subject." },
      { es: "Añade el participio concordado: la porta viene chiusa, i rifiuti vengono raccolti.", en: "Add the agreeing participle: la porta viene chiusa, i rifiuti vengono raccolti." },
      { es: "En tiempos compuestos vuelve a essere: è stata chiusa.", en: "In compound tenses go back to essere: è stata chiusa." },
    ],
    table: {
      head: ["tempo", "essere", "venire", "andare (= deve)"],
      rows: [
        ["presente", "è chiusa", "viene chiusa", "va chiusa"],
        ["imperfetto", "era chiusa", "veniva chiusa", "andava chiusa"],
        ["futuro", "sarà chiusa", "verrà chiusa", "andrà chiusa"],
        ["passato prossimo", "è stata chiusa", "—", "—"],
      ],
    },
    examples: [
      { target: "I rifiuti vengono raccolti ogni mattina.", gloss: { es: "La basura se recoge todas las mañanas.", en: "The rubbish is collected every morning." } },
      { target: "Il modulo va firmato entro venerdì.", gloss: { es: "El formulario debe firmarse antes del viernes.", en: "The form must be signed by Friday." } },
      { target: "Questo modulo va compilato.", gloss: { es: "Este formulario hay que rellenarlo.", en: "This form must be filled in." } },
    ],
    pitfalls: {
      es: "«La finestra è venuta chiusa» es incorrecto: venire no forma la pasiva en tiempos compuestos. Correcto: «è stata chiusa». Y «va fatto» no es «va hecho»: significa «hay que hacerlo».",
      en: "'La finestra è venuta chiusa' is wrong: venire doesn't make the passive in compound tenses. Say 'è stata chiusa'. And 'va fatto' doesn't mean 'goes done': it means 'must be done'.",
    },
  },

  // ── u19 ────────────────────────────────────────────────────
  {
    id: "it-g-lettera-formale",
    lang: "it",
    cefr: "B2",
    title: { es: "La carta formal", en: "The formal letter" },
    short: {
      es: "Lei con mayúscula: Gentile…, Le scrivo in merito a…, In allegato trova…, Distinti saluti.",
      en: "Use Lei (often capitalised): Gentile…, Le scrivo in merito a…, In allegato trova…, Distinti saluti.",
    },
    rule: {
      es: "En una carta o un correo formal se trata al destinatario de Lei, y por respeto se suele escribir con mayúscula (Le, La, Suo). La carta sigue un orden fijo con fórmulas hechas: saludo, motivo, petición o adjuntos, cierre y despedida. Para dirigirse a una empresa se usa Spettabile (Spett.le).",
      en: "In a formal letter or email you address the reader as Lei, often capitalised as a sign of respect (Le, La, Suo). The letter follows a set order with fixed phrases: greeting, reason, request or attachments, closing line and sign-off. For a company, use Spettabile (Spett.le).",
    },
    steps: [
      { es: "Saluda con Gentile + título y apellido: Gentile Signora Rossi, / Gentile Dottor Neri,", en: "Open with Gentile + title and surname: Gentile Signora Rossi, / Gentile Dottor Neri," },
      { es: "Di el motivo: Le scrivo per… / in merito a…", en: "Give the reason: Le scrivo per… / in merito a…" },
      { es: "Añade la petición o los adjuntos: Le sarei grato/a se potesse… · In allegato trova…", en: "Add the request or attachments: Le sarei grato/a se potesse… · In allegato trova…" },
      { es: "Cierra: Resto in attesa di un Suo cortese riscontro. Distinti / Cordiali saluti, y tu nombre.", en: "Close: Resto in attesa di un Suo cortese riscontro. Distinti / Cordiali saluti, then your name." },
    ],
    table: {
      head: ["parte", "formula"],
      rows: [
        ["apertura", "Gentile Signora Rossi, · Spettabile ditta,"],
        ["motivo", "Le scrivo in merito a…"],
        ["richiesta", "Le sarei grato/a se potesse…"],
        ["allegati", "In allegato trova…"],
        ["chiusura", "Resto in attesa di un Suo cortese riscontro."],
        ["saluti", "Distinti saluti · Cordiali saluti"],
      ],
    },
    examples: [
      { target: "Le scrivo in merito all'annuncio pubblicato sul vostro sito.", gloss: { es: "Le escribo en relación con el anuncio publicado en su sitio web.", en: "I am writing regarding the advertisement on your website." } },
      { target: "In allegato trova il mio curriculum.", gloss: { es: "Adjunto encontrará mi currículum.", en: "Please find my CV attached." } },
      { target: "Resto a disposizione per un colloquio.", gloss: { es: "Quedo a su disposición para una entrevista.", en: "I am available for an interview." } },
      { target: "La ringrazio per l'attenzione.", gloss: { es: "Le agradezco su atención.", en: "Thank you for your attention." } },
    ],
    pitfalls: {
      es: "«Caro Signor Neri, ti scrivo…» mezcla registros: «caro» y «tu» son de confianza. Correcto: «Gentile Signor Neri, Le scrivo…». Y con ringraziare va La, no Le: «La ringrazio».",
      en: "'Caro Signor Neri, ti scrivo…' mixes registers: caro and tu are informal. Say 'Gentile Signor Neri, Le scrivo…'. With ringraziare use La, not Le: 'La ringrazio'.",
    },
  },
  {
    id: "it-g-gerundio",
    lang: "it",
    cefr: "B2",
    title: { es: "El gerundio: modo, tiempo y causa", en: "The gerund: manner, time and cause" },
    short: {
      es: "-are → -ando, -ere/-ire → -endo. Pasado: avendo / essendo + participio (avendo lavorato, essendo arrivato).",
      en: "-are → -ando, -ere/-ire → -endo. Past: avendo / essendo + participle (avendo lavorato, essendo arrivato).",
    },
    rule: {
      es: "El gerundio es invariable y une dos ideas con el mismo sujeto: cómo (studiando), cuándo (tornando a casa) o por qué (essendo tardi). El gerundio pasado (avendo / essendo + participio) indica algo ocurrido antes; con essere el participio concuerda. Los pronombres se pegan al final: vedendolo, essendosi alzato.",
      en: "The gerund never changes and links two ideas with the same subject: how (studiando), when (tornando a casa) or why (essendo tardi). The past gerund (avendo / essendo + participle) shows something that happened earlier; with essere the participle agrees. Pronouns attach to the end: vedendolo, essendosi alzato.",
    },
    steps: [
      { es: "Quita -are / -ere / -ire y añade -ando (1.ª) o -endo (2.ª y 3.ª).", en: "Drop -are / -ere / -ire and add -ando (1st) or -endo (2nd and 3rd)." },
      { es: "Verbos con raíz larga usan la del imperfetto: fare → facendo, dire → dicendo, bere → bevendo.", en: "Verbs with a long stem use the imperfetto stem: fare → facendo, dire → dicendo, bere → bevendo." },
      { es: "¿La acción es anterior? Usa avendo / essendo + participio, con el mismo auxiliar del passato prossimo.", en: "Did it happen earlier? Use avendo / essendo + participle, with the same auxiliary as the passato prossimo." },
      { es: "Comprueba que el sujeto de las dos partes sea el mismo.", en: "Check that both parts have the same subject." },
    ],
    table: {
      head: ["infinito", "gerundio", "gerundio passato"],
      rows: [
        ["parlare", "parlando", "avendo parlato"],
        ["leggere", "leggendo", "avendo letto"],
        ["partire", "partendo", "essendo partito/a"],
        ["fare", "facendo", "avendo fatto"],
        ["dire", "dicendo", "avendo detto"],
        ["essere", "essendo", "essendo stato/a"],
      ],
    },
    examples: [
      { target: "Avendo lavorato all'estero, parlo tre lingue.", gloss: { es: "Como he trabajado en el extranjero, hablo tres idiomas.", en: "Having worked abroad, I speak three languages." } },
      { target: "Essendo tardi, ho preso un taxi.", gloss: { es: "Como era tarde, tomé un taxi.", en: "As it was late, I took a taxi." } },
      { target: "Studiando ogni giorno, migliori.", gloss: { es: "Estudiando cada día, mejoras.", en: "By studying every day, you improve." } },
    ],
    pitfalls: {
      es: "En español «vi a Marco saliendo del bar» puede significar que Marco salía; en italiano el gerundio se refiere al sujeto: «Ho visto Marco uscendo dal bar» = yo salía. Si salía Marco: «Ho visto Marco che usciva dal bar» o «Ho visto Marco uscire dal bar».",
      en: "English '-ing' as a noun or after a preposition is an infinitive in Italian: not 'Nuotando fa bene' or 'prima di uscendo', but 'Nuotare fa bene', 'prima di uscire'.",
    },
  },
  {
    id: "it-g-participio-assoluto",
    lang: "it",
    cefr: "B2",
    title: { es: "El participio absoluto", en: "Participle clauses (participio assoluto)" },
    short: {
      es: "Participio + sustantivo = «una vez que…»: Finito il lavoro, siamo usciti. Concuerda con el sustantivo.",
      en: "Participle + noun = 'once …': Finito il lavoro, siamo usciti. It agrees with its noun.",
    },
    rule: {
      es: "Un participio pasado solo, al principio de la frase, resume una acción ya terminada: «Finito il lavoro» = una vez terminado el trabajo. Existe igual en español culto («Terminada la cena, salimos»). El participio concuerda con el sustantivo que lo acompaña: con verbos transitivos, con el objeto (letta la lettera); con verbos de essere, con el sujeto (arrivati a casa).",
      en: "A past participle on its own at the start of a sentence sums up a finished action: 'Finito il lavoro' = once the work was done. The participle agrees with the noun that goes with it: with transitive verbs, the object (letta la lettera); with essere verbs, the subject (arrivati a casa).",
    },
    steps: [
      { es: "Toma la acción anterior: «dopo che abbiamo finito il progetto».", en: "Take the earlier action: 'dopo che abbiamo finito il progetto'." },
      { es: "Quita la conjunción y el auxiliar; deja participio + sustantivo: finito il progetto.", en: "Drop the conjunction and the auxiliary; keep participle + noun: finito il progetto." },
      { es: "Haz concordar el participio: finita la cena, finiti i compiti, arrivate le ragazze.", en: "Make the participle agree: finita la cena, finiti i compiti, arrivate le ragazze." },
      { es: "Pon una coma y sigue con la frase principal.", en: "Add a comma and go on with the main clause." },
    ],
    table: {
      head: ["participio assoluto", "= frase completa"],
      rows: [
        ["Finito il lavoro, …", "Dopo che abbiamo finito il lavoro, …"],
        ["Letta la lettera, …", "Dopo aver letto la lettera, …"],
        ["Finiti i compiti, …", "Quando ho finito i compiti, …"],
        ["Arrivati a Roma, …", "Quando siamo arrivati a Roma, …"],
        ["Partita Giulia, …", "Dopo che Giulia è partita, …"],
      ],
    },
    examples: [
      { target: "Finito il progetto, siamo andati a cena.", gloss: { es: "Terminado el proyecto, fuimos a cenar.", en: "Once the project was finished, we went out for dinner." } },
      { target: "Arrivate a casa, le ragazze hanno cenato.", gloss: { es: "Una vez en casa, las chicas cenaron.", en: "Once home, the girls had dinner." } },
      { target: "Letta la lettera, ho chiamato l'azienda.", gloss: { es: "Leída la carta, llamé a la empresa.", en: "After reading the letter, I called the company." } },
    ],
    pitfalls: {
      es: "«Finito i compiti, siamo usciti» es incorrecto: el participio concuerda con el sustantivo (i compiti, masculino plural). Correcto: «Finiti i compiti, siamo usciti».",
      en: "'Finito i compiti, siamo usciti' is wrong: the participle agrees with the noun (i compiti, masculine plural). Correct: 'Finiti i compiti, siamo usciti'.",
    },
  },

  // ── u20 ────────────────────────────────────────────────────
  {
    id: "it-g-discorso-indiretto",
    lang: "it",
    cefr: "B2",
    title: { es: "El estilo indirecto", en: "Reported speech" },
    short: {
      es: "Con «ha detto che»: presente → imperfetto, passato prossimo → trapassato, futuro → condicional compuesto.",
      en: "After 'ha detto che': present → imperfetto, passato prossimo → trapassato, future → past conditional.",
    },
    rule: {
      es: "Cuando cuentas lo que alguien dijo con un verbo en pasado (ha detto, ha dichiarato), los tiempos retroceden un paso y cambian las personas y las palabras de tiempo y lugar. El futuro pasa a condicional compuesto (sarebbe venuto), no al condicional simple como en español. Si el verbo introductor está en presente (dice che), los tiempos no cambian.",
      en: "When you report what someone said with a past verb (ha detto, ha dichiarato), tenses move one step back, and people and time/place words change too. The future becomes the past conditional (sarebbe venuto), not the simple conditional as in English 'would come'. If the reporting verb is present (dice che), tenses stay the same.",
    },
    steps: [
      { es: "Mira el verbo introductor: ¿presente (dice) o pasado (ha detto)?", en: "Look at the reporting verb: present (dice) or past (ha detto)?" },
      { es: "Si es pasado, retrocede el tiempo según la tabla.", en: "If it is past, shift the tense back as in the table." },
      { es: "Cambia las personas: io → lui/lei, mio → suo. Un imperativo pasa a «di + infinitivo».", en: "Change the people: io → lui/lei, mio → suo. An imperative becomes 'di + infinitive'." },
      { es: "Cambia las palabras de tiempo y lugar: domani → il giorno dopo, qui → lì.", en: "Change time and place words: domani → il giorno dopo, qui → lì." },
    ],
    table: {
      head: ["", "diretto", "indiretto (ha detto…)"],
      rows: [
        ["presente", "«Sono stanco.»", "che era stanco"],
        ["passato prossimo", "«Ho finito.»", "che aveva finito"],
        ["futuro", "«Verrò.»", "che sarebbe venuto"],
        ["imperativo", "«Non preoccuparti!»", "di non preoccuparsi"],
        ["tempo", "oggi · domani · ieri", "quel giorno · il giorno dopo · il giorno prima"],
        ["luogo", "qui · questo", "lì · quello"],
      ],
    },
    examples: [
      { target: "Ha detto che sarebbe arrivato in ritardo.", gloss: { es: "Dijo que llegaría tarde.", en: "He said he would arrive late." } },
      { target: "Mi ha detto che non sarebbe venuta alla festa.", gloss: { es: "Me dijo que no vendría a la fiesta.", en: "She told me she wouldn't come to the party." } },
      { target: "Le ho detto di non preoccuparsi.", gloss: { es: "Le dije que no se preocupara.", en: "I told her not to worry." } },
      { target: "Ha detto che doveva lavorare.", gloss: { es: "Dijo que tenía que trabajar.", en: "She said she had to work." } },
    ],
    pitfalls: {
      es: "«Ha detto che verrebbe» es incorrecto, aunque en español digas «dijo que vendría». El futuro en el pasado es condicional compuesto: «Ha detto che sarebbe venuto».",
      en: "'Ha detto che verrebbe' is wrong, even though English says 'he said he would come'. The future in the past is the past conditional: 'Ha detto che sarebbe venuto'.",
    },
  },
  {
    id: "it-g-concordanza",
    lang: "it",
    cefr: "B2",
    title: { es: "Concordancia de tiempos con congiuntivo", en: "Sequence of tenses with the subjunctive" },
    short: {
      es: "Principal en presente → congiuntivo presente (penso che sia); en pasado → imperfetto (pensavo che fosse).",
      en: "Present main verb → present subjunctive (penso che sia); past main verb → imperfect (pensavo che fosse).",
    },
    rule: {
      es: "El tiempo del congiuntivo depende de dos cosas: el tiempo del verbo principal y si la acción es anterior, simultánea o posterior. Con principal en presente usas congiuntivo presente o passato; con principal en pasado, congiuntivo imperfetto o trapassato. Lo posterior a un pasado va en condicional compuesto.",
      en: "Which subjunctive tense you need depends on two things: the tense of the main verb, and whether the action is earlier, at the same time, or later. A present main verb takes the present or perfect subjunctive; a past main verb takes the imperfect or pluperfect subjunctive. Something later than a past main verb takes the past conditional.",
    },
    steps: [
      { es: "Mira el verbo principal: ¿presente (penso, credo) o pasado (pensavo, credevo)?", en: "Look at the main verb: present (penso, credo) or past (pensavo, credevo)?" },
      { es: "Decide: ¿la acción es anterior, simultánea o posterior?", en: "Decide: is the action earlier, at the same time, or later?" },
      { es: "Elige la casilla de la tabla y conjuga.", en: "Pick the box in the table and conjugate." },
    ],
    table: {
      head: ["principale", "prima", "nello stesso momento", "dopo"],
      rows: [
        ["Credo che…", "sia venuto", "venga", "verrà"],
        ["Credevo che…", "fosse venuto", "venisse", "sarebbe venuto"],
      ],
    },
    examples: [
      { target: "Penso che sia una buona idea.", gloss: { es: "Creo que es una buena idea.", en: "I think it's a good idea." } },
      { target: "Pensavo che fosse già arrivato.", gloss: { es: "Pensaba que ya había llegado.", en: "I thought he had already arrived." } },
      { target: "Pare che l'incidente sia avvenuto di notte.", gloss: { es: "Parece que el accidente ocurrió de noche.", en: "It seems the accident happened at night." } },
    ],
    pitfalls: {
      es: "«Penso che è vero» es incorrecto: en italiano pensare / credere che van con congiuntivo, aunque en español «creo que» lleve indicativo. Correcto: «Penso che sia vero», «Pensavo che fosse vero».",
      en: "'Penso che è vero' is wrong: pensare / credere che take the subjunctive in Italian. Correct: 'Penso che sia vero', and in the past 'Pensavo che fosse vero'.",
    },
  },
  {
    id: "it-g-domande-indirette",
    lang: "it",
    cefr: "B2",
    title: { es: "Preguntas indirectas", en: "Indirect questions" },
    short: {
      es: "Sí/no → se (si): mi ha chiesto se venivo. Con dove, quando, perché se mantiene la palabra interrogativa.",
      en: "Yes/no → se (if): mi ha chiesto se venivo. Question words (dove, quando, perché) stay.",
    },
    rule: {
      es: "Una pregunta de sí o no se introduce con «se»; una pregunta con palabra interrogativa la conserva (dove, quando, perché, come, che cosa). Tras un verbo en pasado (mi ha chiesto) los tiempos cambian como en el estilo indirecto. Tras chiedersi o non sapere, el italiano cuidado usa a menudo congiuntivo: non so se sia vero.",
      en: "A yes/no question is introduced with 'se'; a question with a question word keeps it (dove, quando, perché, come, che cosa). After a past verb (mi ha chiesto) tenses shift as in reported speech. After chiedersi or non sapere, careful Italian often uses the subjunctive: non so se sia vero.",
    },
    steps: [
      { es: "¿Pregunta de sí/no? → se. ¿Tiene palabra interrogativa? → mantenla.", en: "Yes/no question? → se. Has a question word? → keep it." },
      { es: "Si el verbo introductor está en pasado, retrocede el tiempo (vieni → venivo).", en: "If the reporting verb is past, shift the tense back (vieni → venivo)." },
      { es: "Cambia las personas (tu → io) y quita el signo de interrogación.", en: "Change the people (tu → io) and drop the question mark." },
    ],
    table: {
      head: ["domanda diretta", "domanda indiretta"],
      rows: [
        ["«Vieni?»", "Mi ha chiesto se venivo."],
        ["«Hai mangiato?»", "Mi ha chiesto se avevo mangiato."],
        ["«Dove abiti?»", "Mi ha chiesto dove abitavo."],
        ["«Quando parti?»", "Mi ha chiesto quando partivo."],
        ["«Perché ridi?»", "Mi ha chiesto perché ridevo."],
      ],
    },
    examples: [
      { target: "Mi ha chiesto se volevo uscire.", gloss: { es: "Me preguntó si quería salir.", en: "He asked me if I wanted to go out." } },
      { target: "Ti ha detto perché?", gloss: { es: "¿Te dijo por qué?", en: "Did she tell you why?" } },
      { target: "Non so se sia vero.", gloss: { es: "No sé si es verdad.", en: "I don't know if it's true." } },
    ],
    pitfalls: {
      es: "«Mi ha chiesto che se venivo» es incorrecto: el «que» del español hablado («me preguntó que si…») no existe en italiano. Correcto: «Mi ha chiesto se venivo».",
      en: "'Mi ha chiesto che se venivo' is wrong: no 'che' before se or a question word. And 'if' here is always se: 'Mi ha chiesto se venivo'.",
    },
  },

  // ── u21 ────────────────────────────────────────────────────
  {
    id: "it-g-ipotetico-irreale",
    lang: "it",
    cefr: "B2",
    title: { es: "Condiciones irreales en el pasado", en: "Unreal conditions in the past" },
    short: {
      es: "se + congiuntivo trapassato → condicional compuesto: Se avessi saputo, sarei venuto (si hubiera…, habría…).",
      en: "se + pluperfect subjunctive → past conditional: Se avessi saputo, sarei venuto (if I had…, I would have…).",
    },
    rule: {
      es: "Para algo que no pasó y sus consecuencias imaginadas usas se + congiuntivo trapassato y condicional compuesto, como «si lo hubiera sabido, habría venido». Si la consecuencia es en el presente, la frase es mixta: se avessi studiato, ora avrei un lavoro migliore. En el habla informal oirás «se lo sapevo, venivo», pero no se escribe así.",
      en: "For something that didn't happen and its imagined results, use se + pluperfect subjunctive and the past conditional: 'if I had known, I would have come'. If the result is in the present, the sentence is mixed: se avessi studiato, ora avrei un lavoro migliore. In casual speech you'll hear 'se lo sapevo, venivo', but don't write it.",
    },
    steps: [
      { es: "La condición no ocurrió → se + avessi / fossi + participio.", en: "The condition didn't happen → se + avessi / fossi + participle." },
      { es: "¿Consecuencia en el pasado? → avrei / sarei + participio.", en: "Result in the past? → avrei / sarei + participle." },
      { es: "¿Consecuencia ahora? → condicional presente (ora avrei, oggi vivrei).", en: "Result now? → present conditional (ora avrei, oggi vivrei)." },
      { es: "Elige el auxiliar como en el passato prossimo y haz concordar con essere.", en: "Pick the auxiliary as in the passato prossimo and make it agree with essere." },
    ],
    table: {
      head: ["tipo", "se + …", "conseguenza"],
      rows: [
        ["reale", "presente", "presente / futuro"],
        ["possibile", "congiuntivo imperfetto", "condizionale"],
        ["irreale", "congiuntivo trapassato", "condizionale passato"],
        ["misto", "congiuntivo trapassato", "condizionale"],
      ],
    },
    examples: [
      { target: "Se l'avessi saputo, ti avrei aiutato.", gloss: { es: "Si lo hubiera sabido, te habría ayudado.", en: "If I had known, I would have helped you." } },
      { target: "Se fossi partito prima, non avrei perso il treno.", gloss: { es: "Si hubiera salido antes, no habría perdido el tren.", en: "If I had left earlier, I wouldn't have missed the train." } },
      { target: "Se avessi accettato quel lavoro a Milano, oggi vivrei lontano dalla mia famiglia.", gloss: { es: "Si hubiera aceptado ese trabajo en Milán, hoy viviría lejos de mi familia.", en: "If I had taken that job in Milan, I'd be living far from my family today." } },
    ],
    pitfalls: {
      es: "En español puedes decir «si lo hubiera sabido, hubiera venido», pero en italiano la consecuencia va siempre en condicional: «Se l'avessi saputo, sarei venuto», nunca «…, fossi venuto». Tampoco «se avrei saputo».",
      en: "'Se avrei saputo' is wrong, just like 'if I would have known': the condition takes the pluperfect subjunctive. Correct: 'Se avessi saputo, sarei venuto'.",
    },
  },
  {
    id: "it-g-condizionale-passato",
    lang: "it",
    cefr: "B2",
    title: { es: "El condicional compuesto", en: "The past conditional" },
    short: {
      es: "avrei / sarei + participio: lo que habría pasado (avrei fatto), reproches (avresti dovuto) y futuro en el pasado.",
      en: "avrei / sarei + participle: what would have happened (avrei fatto), reproaches (avresti dovuto), future in the past.",
    },
    rule: {
      es: "Se forma con el condicional de avere o essere + participio, con el mismo auxiliar que el passato prossimo. Expresa lo que habría pasado, reproches o arrepentimientos (avrei dovuto studiare) y el futuro visto desde el pasado (ha detto che sarebbe venuto). En las noticias también presenta un dato no confirmado: il ministro avrebbe detto…",
      en: "It is the conditional of avere or essere + participle, with the same auxiliary as the passato prossimo. It expresses what would have happened, reproaches or regrets (avrei dovuto studiare) and the future seen from the past (ha detto che sarebbe venuto). In the news it also reports an unconfirmed claim: il ministro avrebbe detto…",
    },
    steps: [
      { es: "Elige el auxiliar como en el passato prossimo: ho fatto → avrei fatto, sono andato → sarei andato.", en: "Pick the auxiliary as in the passato prossimo: ho fatto → avrei fatto, sono andato → sarei andato." },
      { es: "Conjuga el auxiliar en condicional (avrei, avresti… / sarei, saresti…).", en: "Put the auxiliary in the conditional (avrei, avresti… / sarei, saresti…)." },
      { es: "Añade el participio; con essere concuerda con el sujeto (sarebbe andata).", en: "Add the participle; with essere it agrees with the subject (sarebbe andata)." },
    ],
    table: {
      head: ["", "fare (avere)", "andare (essere)"],
      rows: [
        ["io", "avrei fatto", "sarei andato/a"],
        ["tu", "avresti fatto", "saresti andato/a"],
        ["lui / lei / Lei", "avrebbe fatto", "sarebbe andato/a"],
        ["noi", "avremmo fatto", "saremmo andati/e"],
        ["voi", "avreste fatto", "sareste andati/e"],
        ["loro", "avrebbero fatto", "sarebbero andati/e"],
      ],
    },
    examples: [
      { target: "Avrei dovuto studiare di più.", gloss: { es: "Debería haber estudiado más.", en: "I should have studied more." } },
      { target: "Sarebbe stato meglio aspettare.", gloss: { es: "Habría sido mejor esperar.", en: "It would have been better to wait." } },
      { target: "Mi sarebbe piaciuto andare.", gloss: { es: "Me habría gustado ir.", en: "I would have liked to go." } },
    ],
    pitfalls: {
      es: "«Mi avrebbe piaciuto» es incorrecto: piacere forma el pasado con essere (mi è piaciuto), aunque en español sea «me habría gustado». Correcto: «Mi sarebbe piaciuto».",
      en: "'Mi avrebbe piaciuto' is wrong: piacere takes essere (mi è piaciuto), so 'I would have liked' is 'Mi sarebbe piaciuto'.",
    },
  },
  {
    id: "it-g-congiuntivo-trapassato",
    lang: "it",
    cefr: "B2",
    title: { es: "El congiuntivo trapassato", en: "The pluperfect subjunctive (congiuntivo trapassato)" },
    short: {
      es: "avessi / fossi + participio (= hubiera…): speravo che avessi capito · se fosse partito prima…",
      en: "avessi / fossi + participle (= had done): speravo che avessi capito · se fosse partito prima…",
    },
    rule: {
      es: "Se forma con el congiuntivo imperfetto de avere o essere + participio, y equivale a «hubiera hecho». Se usa para una acción anterior a un verbo principal en pasado que pide congiuntivo (pensavo che fosse già partito) y en el «se» irreal del pasado. También aparece con magari y come se para el pasado: magari l'avessi saputo prima.",
      en: "It is the imperfect subjunctive of avere or essere + participle, like 'had done'. It is used for an action earlier than a past main verb that calls for the subjunctive (pensavo che fosse già partito) and in unreal past 'se' clauses. It also follows magari and come se about the past: magari l'avessi saputo prima.",
    },
    steps: [
      { es: "Comprueba que el verbo principal esté en pasado y pida congiuntivo (pensavo, speravo, credevo).", en: "Check that the main verb is past and calls for the subjunctive (pensavo, speravo, credevo)." },
      { es: "¿La acción es anterior? → congiuntivo trapassato.", en: "Is the action earlier? → pluperfect subjunctive." },
      { es: "Elige avessi o fossi como en el passato prossimo y añade el participio (concordado con essere).", en: "Choose avessi or fossi as in the passato prossimo and add the participle (agreeing with essere)." },
    ],
    table: {
      head: ["", "capire (avere)", "partire (essere)"],
      rows: [
        ["io", "avessi capito", "fossi partito/a"],
        ["tu", "avessi capito", "fossi partito/a"],
        ["lui / lei / Lei", "avesse capito", "fosse partito/a"],
        ["noi", "avessimo capito", "fossimo partiti/e"],
        ["voi", "aveste capito", "foste partiti/e"],
        ["loro", "avessero capito", "fossero partiti/e"],
      ],
    },
    examples: [
      { target: "Pensavo che fosse già arrivato.", gloss: { es: "Pensaba que ya había llegado.", en: "I thought he had already arrived." } },
      { target: "Speravo che tu avessi capito.", gloss: { es: "Esperaba que hubieras entendido.", en: "I hoped you had understood." } },
      { target: "Se me l'avessi detto, avrei preso la macchina.", gloss: { es: "Si me lo hubieras dicho, habría tomado el auto.", en: "If you'd told me, I would have taken the car." } },
    ],
    pitfalls: {
      es: "«Speravo che tu abbia capito» o «che hai capito» son incorrectos: tras un verbo en pasado, lo anterior va en trapassato, como «esperaba que hubieras entendido». Correcto: «Speravo che tu avessi capito».",
      en: "'Speravo che tu hai capito' is wrong: after a past main verb, an earlier action takes the pluperfect subjunctive. Correct: 'Speravo che tu avessi capito'.",
    },
  },

  // ── u22 ────────────────────────────────────────────────────
  {
    id: "it-g-passato-remoto-forme",
    lang: "it",
    cefr: "B2",
    title: { es: "El passato remoto: formas regulares e irregulares", en: "The passato remoto: regular and irregular forms" },
    short: {
      es: "Regulares: parlai, parlò · credei, credé · dormii, dormì. Irregulares en io, lui, loro: ebbi, ebbe, ebbero.",
      en: "Regular: parlai, parlò · credei, credé · dormii, dormì. Irregulars change in io, lui, loro: ebbi, ebbe, ebbero.",
    },
    rule: {
      es: "El passato remoto narra hechos terminados y lejanos: se usa sobre todo en la escritura, en historia y biografías, y en el habla de algunas regiones del sur. Los regulares tienen tres juegos de terminaciones (-are, -ere, -ire). Muchos irregulares siguen el esquema «1-3-3»: solo cambian io, lui/lei y loro; tu, noi y voi son regulares.",
      en: "The passato remoto narrates finished, distant events: it is used mainly in writing, history and biographies, and in everyday speech in parts of the south. Regular verbs have three sets of endings (-are, -ere, -ire). Many irregulars follow a '1-3-3' pattern: only io, lui/lei and loro change; tu, noi and voi are regular.",
    },
    steps: [
      { es: "Regular: quita -are / -ere / -ire y añade las terminaciones de la tabla (en -ere también: credetti, credette, credettero).", en: "Regular: drop -are / -ere / -ire and add the endings from the table (-ere verbs also: credetti, credette, credettero)." },
      { es: "Irregular: aprende la forma de io (ebbi, feci, dissi, presi, vidi, venni, scrissi, nacqui).", en: "Irregular: learn the io form (ebbi, feci, dissi, presi, vidi, venni, scrissi, nacqui)." },
      { es: "De ahí salen lui/lei (-i → -e: ebbe, fece) y loro (+ -ro: ebbero, fecero).", en: "From it you get lui/lei (-i → -e: ebbe, fece) and loro (+ -ro: ebbero, fecero)." },
      { es: "tu, noi y voi son regulares desde la raíz: avesti, avemmo, aveste. essere es aparte: fui, fosti, fu, fummo, foste, furono.", en: "tu, noi and voi are regular from the stem: avesti, avemmo, aveste. essere is separate: fui, fosti, fu, fummo, foste, furono." },
    ],
    table: {
      head: ["", "parlare", "credere", "dormire", "fare"],
      rows: [
        ["io", "parlai", "credei", "dormii", "feci"],
        ["tu", "parlasti", "credesti", "dormisti", "facesti"],
        ["lui / lei", "parlò", "credé", "dormì", "fece"],
        ["noi", "parlammo", "credemmo", "dormimmo", "facemmo"],
        ["voi", "parlaste", "credeste", "dormiste", "faceste"],
        ["loro", "parlarono", "crederono", "dormirono", "fecero"],
      ],
    },
    examples: [
      { target: "Leonardo nacque nel 1452.", gloss: { es: "Leonardo nació en 1452.", en: "Leonardo was born in 1452." } },
      { target: "Michelangelo dipinse la Cappella Sistina.", gloss: { es: "Miguel Ángel pintó la Capilla Sixtina.", en: "Michelangelo painted the Sistine Chapel." } },
      { target: "Questo affresco fu dipinto nel Quattrocento.", gloss: { es: "Este fresco fue pintado en el siglo XV.", en: "This fresco was painted in the 15th century." } },
      { target: "Lo scrittore disse che non avrebbe più scritto romanzi.", gloss: { es: "El escritor dijo que ya no escribiría novelas.", en: "The writer said he would write no more novels." } },
    ],
    pitfalls: {
      es: "«Parlo» sin acento es «hablo»; «parlò» con acento es «habló»: el acento cambia el tiempo, como en español. Y los irregulares no llevan la terminación acentuada: «dipingé» es incorrecto, lo correcto es «dipinse».",
      en: "'Parlo' without an accent means 'I speak'; 'parlò' means 'he spoke'. And irregulars don't take the accented ending: 'dipingé' is wrong, the right form is 'dipinse'.",
    },
  },
  {
    id: "it-g-congiunzioni",
    lang: "it",
    cefr: "B2",
    title: { es: "Conjunciones que piden congiuntivo", en: "Conjunctions that take the subjunctive" },
    short: {
      es: "benché / sebbene, affinché, purché, prima che, a meno che (non), senza che + congiuntivo: Benché piova, esco.",
      en: "benché / sebbene, affinché, purché, prima che, a meno che (non), senza che + subjunctive: Benché piova, esco.",
    },
    rule: {
      es: "Algunas conjunciones van siempre con congiuntivo, porque presentan algo como concesión, finalidad, condición o hecho todavía no ocurrido. El tiempo sigue la concordancia: benché piova (presente), benché piovesse (pasado). Si el sujeto es el mismo en las dos partes, prima che y senza che pasan a prima di / senza + infinitivo.",
      en: "Some conjunctions always take the subjunctive, because they present something as a concession, a purpose, a condition or something that hasn't happened yet. The tense follows the sequence of tenses: benché piova (present), benché piovesse (past). If both parts share the same subject, prima che and senza che become prima di / senza + infinitive.",
    },
    steps: [
      { es: "¿La conjunción está en la tabla? → el verbo siguiente va en congiuntivo.", en: "Is the conjunction in the table? → the next verb takes the subjunctive." },
      { es: "Elige el tiempo según el verbo principal: presente → congiuntivo presente; pasado → imperfetto.", en: "Pick the tense from the main verb: present → present subjunctive; past → imperfect." },
      { es: "¿Mismo sujeto con prima che / senza che? → prima di / senza + infinitivo.", en: "Same subject with prima che / senza che? → prima di / senza + infinitive." },
      { es: "Ojo: anche se (aunque) va con indicativo: anche se piove, esco.", en: "Note: anche se (even if / although) takes the indicative: anche se piove, esco." },
    ],
    table: {
      head: ["valore", "congiunzione", "esempio"],
      rows: [
        ["concessione", "benché · sebbene", "Benché piova, esco."],
        ["fine", "affinché", "Te lo spiego affinché tu capisca."],
        ["condizione", "purché", "Vengo purché tu guidi."],
        ["tempo", "prima che", "Usciamo prima che cominci a piovere."],
        ["eccezione", "a meno che (non)", "Vengo, a meno che non piova."],
        ["modo", "senza che", "È uscito senza che nessuno lo vedesse."],
      ],
    },
    examples: [
      { target: "Benché sia difficile, questo romanzo mi piace molto.", gloss: { es: "Aunque es difícil, esta novela me gusta mucho.", en: "Although it's difficult, I really like this novel." } },
      { target: "Te lo spiego affinché tu capisca.", gloss: { es: "Te lo explico para que entiendas.", en: "I'm explaining it so that you understand." } },
      { target: "Ti presto la macchina purché tu la riporti entro sera.", gloss: { es: "Te presto el auto con tal de que lo devuelvas antes de la noche.", en: "I'll lend you the car as long as you bring it back by evening." } },
    ],
    pitfalls: {
      es: "En español «aunque llueve» (hecho) lleva indicativo, pero benché y sebbene piden siempre congiuntivo: «Benché piove» es incorrecto, lo correcto es «Benché piova». Si quieres indicativo, usa «anche se piove».",
      en: "'Benché piove' is wrong: benché and sebbene always take the subjunctive, so say 'Benché piova'. If you want the indicative, use 'anche se piove'.",
    },
  },
  {
    id: "it-g-superlativo",
    lang: "it",
    cefr: "B2",
    title: { es: "El superlativo relativo", en: "The relative superlative" },
    short: {
      es: "il / la più + adjetivo + di: la città più bella del mondo. Con «che», congiuntivo: il più bello che abbia visto.",
      en: "il / la più + adjective + di: la città più bella del mondo. With 'che', subjunctive: il più bello che abbia visto.",
    },
    rule: {
      es: "El superlativo relativo destaca algo dentro de un grupo: artículo + (sustantivo) + più / meno + adjetivo, y el grupo va con di (+ artículo) o tra. Si sigue una frase con «che», en registro cuidado el verbo va en congiuntivo, porque presenta una valoración personal. buono y cattivo tienen además formas propias: il migliore, il peggiore.",
      en: "The relative superlative picks something out of a group: article + (noun) + più / meno + adjective, and the group is introduced by di (+ article) or tra. If a 'che' clause follows, careful Italian puts its verb in the subjunctive, as it expresses a personal judgement. buono and cattivo also have their own forms: il migliore, il peggiore.",
    },
    steps: [
      { es: "Pon el artículo y el sustantivo: la città, il quadro.", en: "Put the article and the noun: la città, il quadro." },
      { es: "Añade più (o meno) + adjetivo concordado: più bella. No repitas el artículo.", en: "Add più (or meno) + agreeing adjective: più bella. Don't repeat the article." },
      { es: "El grupo va con di + artículo: del mondo, della classe, d'Italia.", en: "Introduce the group with di + article: del mondo, della classe, d'Italia." },
      { es: "Con «che…», usa congiuntivo: che io abbia mai visto.", en: "With 'che…', use the subjunctive: che io abbia mai visto." },
    ],
    table: {
      head: ["tipo", "esempio"],
      rows: [
        ["più + di", "la città più bella del mondo"],
        ["meno + di", "il romanzo meno caro della libreria"],
        ["tra", "il più giovane tra i fratelli"],
        ["che + congiuntivo", "il quadro più bello che io abbia mai visto"],
        ["irregolari", "il migliore · il peggiore"],
      ],
    },
    examples: [
      { target: "È il quadro più bello che io abbia mai visto.", gloss: { es: "Es el cuadro más bonito que he visto nunca.", en: "It's the most beautiful painting I've ever seen." } },
      { target: "È la città più bella del mondo.", gloss: { es: "Es la ciudad más bonita del mundo.", en: "It's the most beautiful city in the world." } },
      { target: "Questo è il capolavoro più famoso del museo.", gloss: { es: "Esta es la obra maestra más famosa del museo.", en: "This is the most famous masterpiece in the museum." } },
    ],
    pitfalls: {
      es: "El grupo suele ir con di: «la città più bella del mondo» (también se dice «al mondo»). Lo que sí es incorrecto es repetir el artículo: «la città la più bella» → la città più bella.",
      en: "The group usually takes di: 'la città più bella del mondo' ('al mondo' is also fine). What is wrong is repeating the article: 'la città la più bella' → la città più bella.",
    },
  },

  // ── u23 ────────────────────────────────────────────────────
  {
    id: "it-g-connettivi",
    lang: "it",
    cefr: "B2",
    title: { es: "Conectores para argumentar", en: "Connectors for building an argument" },
    short: {
      es: "Ordenar: innanzitutto, poi, infine · añadir: inoltre · contrastar: tuttavia · concluir: quindi, in conclusione.",
      en: "Order: innanzitutto, poi, infine · add: inoltre · contrast: tuttavia · conclude: quindi, in conclusione.",
    },
    rule: {
      es: "Los conectores muestran la lógica de un texto: el orden de las ideas, una idea más, un contraste, una causa o una conclusión. Elegir bien el conector hace que un argumento se entienda sin esfuerzo. Suelen ir al principio de la frase, seguidos de una coma.",
      en: "Connectors show the logic of a text: the order of ideas, an extra point, a contrast, a cause or a conclusion. The right connector makes an argument easy to follow. They usually go at the start of the sentence, followed by a comma.",
    },
    steps: [
      { es: "Pregúntate qué relación hay entre esta idea y la anterior.", en: "Ask what link there is between this idea and the previous one." },
      { es: "Busca la función en la tabla (orden, añadido, contraste, causa, consecuencia).", en: "Find the function in the table (order, addition, contrast, cause, consequence)." },
      { es: "Elige un conector de esa fila; varía para no repetir siempre el mismo.", en: "Pick a connector from that row; vary them so you don't repeat the same one." },
    ],
    table: {
      head: ["funzione", "connettivi"],
      rows: [
        ["ordine", "innanzitutto · in primo luogo · poi · infine"],
        ["aggiunta", "inoltre · per di più"],
        ["contrasto", "tuttavia · però · d'altra parte"],
        ["causa", "dal momento che · visto che · poiché"],
        ["conseguenza", "quindi · perciò · di conseguenza"],
        ["conclusione", "in conclusione · insomma"],
      ],
    },
    examples: [
      { target: "Innanzitutto, lavorare da casa fa risparmiare tempo. Inoltre, riduce il traffico.", gloss: { es: "En primer lugar, trabajar desde casa ahorra tiempo. Además, reduce el tráfico.", en: "First of all, working from home saves time. It also reduces traffic." } },
      { target: "Tuttavia, non sono del tutto d'accordo.", gloss: { es: "Sin embargo, no estoy del todo de acuerdo.", en: "However, I don't fully agree." } },
      { target: "Dal momento che nessuno risponde, me ne vado.", gloss: { es: "Ya que nadie contesta, me voy.", en: "Since nobody's answering, I'm leaving." } },
    ],
    pitfalls: {
      es: "«Infine» no es «en fin»: significa «por último» en una lista. Para «en fin» (resumiendo) usa «insomma». Y no confundas causa y consecuencia: poiché introduce la causa, quindi la consecuencia.",
      en: "Don't mix up cause and consequence: poiché/visto che give the reason, quindi gives the result. 'Piove, poiché resto a casa' is wrong; say 'Piove, quindi resto a casa'.",
    },
  },
  {
    id: "it-g-verbi-pronominali",
    lang: "it",
    cefr: "B2",
    title: { es: "Verbos pronominales: farcela, cavarsela, andarsene, prendersela", en: "Pronominal verbs: farcela, cavarsela, andarsene, prendersela" },
    short: {
      es: "Pronombres fijos que cambian el sentido: ce la faccio (lo logro), me la cavo, me ne vado, te la prendi.",
      en: "Fixed pronouns that change the meaning: ce la faccio (I can do it), me la cavo, me ne vado, te la prendi.",
    },
    rule: {
      es: "Estos verbos llevan pronombres fijos (ci, la, ne) que ya no tienen su significado literal y forman una expresión: farcela = lograrlo, cavarsela = arreglárselas, andarsene = irse, prendersela = ofenderse. El pronombre reflexivo cambia con la persona (me, te, se, ce, ve, se) y delante de la o ne mi pasa a me. En el pasado, los que tienen reflexivo usan essere y el participio concuerda con la: me la sono presa.",
      en: "These verbs carry fixed pronouns (ci, la, ne) that have lost their literal meaning and form an expression: farcela = to manage, cavarsela = to get by, andarsene = to leave, prendersela = to take offence. The reflexive pronoun changes with the person (me, te, se, ce, ve, se), and before la or ne mi becomes me. In the past, the reflexive ones take essere and the participle agrees with la: me la sono presa.",
    },
    steps: [
      { es: "Busca el infinitivo: farcela → fare + ce + la.", en: "Find the infinitive: farcela → fare + ce + la." },
      { es: "Pon los pronombres delante del verbo y ajusta el reflexivo a la persona: me ne vado, te ne vai.", en: "Put the pronouns before the verb and match the reflexive to the person: me ne vado, te ne vai." },
      { es: "Conjuga solo el verbo: ce la faccio, ce la fai, ce la facciamo.", en: "Conjugate only the verb: ce la faccio, ce la fai, ce la facciamo." },
      { es: "En imperativo e infinitivo se pegan al final: Vattene! Non prendertela!", en: "In the imperative and infinitive they attach to the end: Vattene! Non prendertela!" },
    ],
    table: {
      head: ["", "farcela", "andarsene", "prendersela"],
      rows: [
        ["io", "ce la faccio", "me ne vado", "me la prendo"],
        ["tu", "ce la fai", "te ne vai", "te la prendi"],
        ["lui / lei", "ce la fa", "se ne va", "se la prende"],
        ["noi", "ce la facciamo", "ce ne andiamo", "ce la prendiamo"],
        ["voi", "ce la fate", "ve ne andate", "ve la prendete"],
        ["loro", "ce la fanno", "se ne vanno", "se la prendono"],
        ["passato (io)", "ce l'ho fatta", "me ne sono andato/a", "me la sono presa"],
      ],
    },
    examples: [
      { target: "Non ce la faccio più!", gloss: { es: "¡Ya no puedo más!", en: "I can't take it any more!" } },
      { target: "Con l'inglese me la cavo.", gloss: { es: "Con el inglés me defiendo.", en: "I get by in English." } },
      { target: "Non prendertela!", gloss: { es: "¡No te lo tomes a mal!", en: "Don't take it personally!" } },
    ],
    pitfalls: {
      es: "«Mi ne vado» es incorrecto: delante de ne o la, mi se convierte en me (como «me lo» en español). Correcto: «me ne vado». Y en el pasado el participio concuerda con la: «ce l'ho fatta», no «ce l'ho fatto».",
      en: "'Mi ne vado' is wrong: before ne or la, mi becomes me. Correct: 'me ne vado'. In the past the participle agrees with la: 'ce l'ho fatta', not 'ce l'ho fatto'.",
    },
  },
  {
    id: "it-g-metterci-volerci",
    lang: "it",
    cefr: "B2",
    title: { es: "metterci y volerci: el tiempo necesario", en: "metterci and volerci: how long it takes" },
    short: {
      es: "metterci = tardar (ci metto un'ora). volerci = hacer falta, concuerda: ci vuole un'ora, ci vogliono due ore.",
      en: "metterci = it takes me (ci metto un'ora). volerci = it takes, agrees: ci vuole un'ora, ci vogliono due ore.",
    },
    rule: {
      es: "metterci tiene un sujeto que hace algo (una persona, un tren) y significa «tardar»: ci metto venti minuti. volerci es impersonal: el sujeto es lo que hace falta (tiempo, paciencia, dinero), y el verbo concuerda con él. En el pasado, metterci usa avere (ci ho messo) y volerci usa essere con concordancia (ci è voluta un'ora, ci sono voluti due giorni).",
      en: "metterci has a subject who does something (a person, a train) and means 'to take (time)': ci metto venti minuti. volerci is impersonal: its subject is what is needed (time, patience, money), and the verb agrees with it. In the past, metterci uses avere (ci ho messo) and volerci uses essere with agreement (ci è voluta un'ora, ci sono voluti due giorni).",
    },
    steps: [
      { es: "¿Hablas de quién tarda (yo, tú, el tren)? → metterci, conjugado para esa persona.", en: "Talking about who takes the time (me, you, the train)? → metterci, conjugated for that subject." },
      { es: "¿Hablas de lo que hace falta en general? → volerci.", en: "Talking about what is needed in general? → volerci." },
      { es: "Con volerci, mira lo necesario: singular → ci vuole; plural → ci vogliono.", en: "With volerci, look at what's needed: singular → ci vuole; plural → ci vogliono." },
    ],
    table: {
      head: ["", "metterci", "volerci"],
      rows: [
        ["soggetto", "chi fa (io, il treno)", "ciò che serve (tempo, pazienza)"],
        ["singolare", "Ci metto un'ora.", "Ci vuole un'ora."],
        ["plurale", "Ci mettiamo due ore.", "Ci vogliono due ore."],
        ["passato", "Ci ho messo un'ora.", "Ci è voluta un'ora."],
        ["domanda", "Quanto ci metti?", "Quanto ci vuole?"],
      ],
    },
    examples: [
      { target: "Quanto ci metti ad arrivare?", gloss: { es: "¿Cuánto tardas en llegar?", en: "How long does it take you to get here?" } },
      { target: "Per arrivare a Roma ci vogliono tre ore.", gloss: { es: "Para llegar a Roma hacen falta tres horas.", en: "It takes three hours to get to Rome." } },
      { target: "Ci vuole pazienza.", gloss: { es: "Hace falta paciencia.", en: "It takes patience." } },
    ],
    pitfalls: {
      es: "«Ci vuole due ore» es incorrecto: volerci concuerda con lo que hace falta, y «due ore» es plural. Correcto: «Ci vogliono due ore». Para «yo tardo» usa metterci: «ci metto due ore».",
      en: "'Ci vuole due ore' is wrong: volerci agrees with what's needed, and 'due ore' is plural. Correct: 'Ci vogliono due ore'. For 'it takes me', use metterci: 'ci metto due ore'.",
    },
  },

  // ── u24 ────────────────────────────────────────────────────
  {
    id: "it-g-alterati",
    lang: "it",
    cefr: "B2",
    title: { es: "Sufijos: diminutivos, aumentativos y despectivos", en: "Suffixes: diminutives, augmentatives and pejoratives" },
    short: {
      es: "-ino / -etto = pequeño o cariñoso (casetta), -one = grande (librone), -accio = feo o malo (tempaccio).",
      en: "-ino / -etto = small or affectionate (casetta), -one = big (librone), -accio = bad or ugly (tempaccio).",
    },
    rule: {
      es: "Un sufijo cambia el matiz de un sustantivo o adjetivo sin cambiar la palabra base: tamaño, cariño o desprecio. El sufijo reemplaza la vocal final y en general mantiene el género, pero con -one muchos femeninos pasan a masculino (la porta → il portone). Algunas palabras solo parecen alteradas y tienen significado propio (il tacchino = el pavo, no un tacón pequeño).",
      en: "A suffix adds a shade of meaning to a noun or adjective: size, affection or contempt. It replaces the final vowel and usually keeps the gender, but with -one many feminine nouns turn masculine (la porta → il portone). Some words only look altered and have their own meaning (il tacchino = turkey, not a small heel).",
    },
    steps: [
      { es: "Decide el matiz: pequeño o cariñoso, grande, o feo / malo.", en: "Decide the shade: small or affectionate, big, or bad / ugly." },
      { es: "Quita la vocal final: casa → cas-, tempo → temp-.", en: "Drop the final vowel: casa → cas-, tempo → temp-." },
      { es: "Añade el sufijo con la terminación de género y número: casetta, tempaccio, parolina.", en: "Add the suffix with the gender and number ending: casetta, tempaccio, parolina." },
      { es: "Si dudas, búscala en el diccionario: muchas formas ya son palabras fijas.", en: "If unsure, check a dictionary: many forms are fixed words of their own." },
    ],
    table: {
      head: ["suffisso", "valore", "esempi"],
      rows: [
        ["-ino / -ina", "piccolo, affettuoso", "gattino · parolina"],
        ["-etto / -etta", "piccolo, affettuoso", "casetta · borsetta"],
        ["-one / -ona", "grande", "librone · portone"],
        ["-accio / -accia", "brutto, cattivo", "tempaccio · parolaccia"],
      ],
    },
    examples: [
      { target: "C'era un tempaccio e siamo finite in una libreria.", gloss: { es: "Hacía un tiempo horrible y terminamos en una librería.", en: "The weather was awful and we ended up in a bookshop." } },
      { target: "Hanno comprato una casetta in campagna.", gloss: { es: "Compraron una casita en el campo.", en: "They bought a little house in the country." } },
      { target: "Non dire parolacce!", gloss: { es: "¡No digas groserías!", en: "Don't swear!" } },
    ],
    pitfalls: {
      es: "El «-ito» del español no existe en italiano: «casita» se dice «casetta» o «casina». Y ojo con -accio: «parolaccia» no es una palabra larga, sino una grosería.",
      en: "-accio isn't just 'big': it means bad or rude. 'Una parolaccia' is a swear word, not a long word; a long word is 'una parola lunga' (or 'un parolone' for a pompous one).",
    },
  },
  {
    id: "it-g-registro",
    lang: "it",
    cefr: "B2",
    title: { es: "Registro formal e informal: tu y Lei", en: "Formal and informal register: tu and Lei" },
    short: {
      es: "Con desconocidos y clientes: Lei (Mi dica, Mi scusi, Le va?). Con amigos: tu (Dimmi, Scusa, Ti va?).",
      en: "With strangers and customers: Lei (Mi dica, Mi scusi, Le va?). With friends: tu (Dimmi, Scusa, Ti va?).",
    },
    rule: {
      es: "Lei es el «usted» del italiano: se usa con desconocidos, clientes y superiores, y el verbo va en 3.ª persona singular, sea hombre o mujer. El imperativo de Lei usa las formas del congiuntivo presente (dica, scusi, senta, venga) y los pronombres van delante: Mi dica. Con tu, en cambio, los pronombres se pegan al final: Dimmi.",
      en: "Lei is the polite 'you': use it with strangers, customers and superiors, with a third-person singular verb whether you address a man or a woman. The Lei imperative uses present subjunctive forms (dica, scusi, senta, venga) and pronouns go in front: Mi dica. With tu, pronouns attach to the end instead: Dimmi.",
    },
    steps: [
      { es: "¿Con quién hablas? Desconocido, cliente, superior → Lei; amigo, familia → tu.", en: "Who are you talking to? Stranger, customer, boss → Lei; friend, family → tu." },
      { es: "Con Lei, pon el verbo en 3.ª persona: come sta?, Le va?", en: "With Lei, use the third person: come sta?, Le va?" },
      { es: "Para pedir algo con Lei, usa el congiuntivo con el pronombre delante: Mi scusi, Mi dica.", en: "To ask something with Lei, use the subjunctive with the pronoun in front: Mi scusi, Mi dica." },
      { es: "Mantén el mismo registro en toda la conversación.", en: "Keep the same register throughout the conversation." },
    ],
    table: {
      head: ["", "tu", "Lei"],
      rows: [
        ["chiedere", "Dimmi. · Senti.", "Mi dica. · Senta."],
        ["scusarsi", "Scusa.", "Mi scusi."],
        ["proporre", "Ti va un caffè?", "Le va un caffè?"],
        ["salutare", "Ciao! Come stai?", "Buongiorno! Come sta?"],
        ["ringraziare", "Ti ringrazio.", "La ringrazio."],
        ["possessivo", "il tuo nome", "il Suo nome"],
      ],
    },
    examples: [
      { target: "Ti va un caffè?", gloss: { es: "¿Te apetece un café?", en: "Fancy a coffee?" } },
      { target: "Le va un caffè?", gloss: { es: "¿Le apetece un café?", en: "Would you like a coffee?" } },
      { target: "Mi scusi, mi sa dire dov'è la stazione?", gloss: { es: "Disculpe, ¿me sabe decir dónde está la estación?", en: "Excuse me, could you tell me where the station is?" } },
    ],
    pitfalls: {
      es: "«Dicami» es incorrecto: con Lei el pronombre va delante del verbo. Correcto: «Mi dica» (como «dígame», pero al revés). Y no mezcles: «Scusa, signora» suena raro; di «Mi scusi, signora».",
      en: "'Dicami' is wrong: with Lei the pronoun goes before the verb, so say 'Mi dica'. And don't mix registers: 'Scusa, signora' sounds off; say 'Mi scusi, signora'.",
    },
  },
  {
    id: "it-g-centrare",
    lang: "it",
    cefr: "B2",
    title: { es: "Expresiones con ci y ne: c'entrare, non poterne più, avercela", en: "Expressions with ci and ne: c'entrare, non poterne più, avercela" },
    short: {
      es: "c'entrare = tener que ver · non poterne più = no aguantar más · avercela con = estar enojado con.",
      en: "c'entrare = to have to do with · non poterne più = can't take any more · avercela con = to be angry with.",
    },
    rule: {
      es: "En estas expresiones ci y ne son parte fija del verbo y ya no significan «allí» o «de eso». Solo se conjuga el verbo: non ne posso più, non ne puoi più; ce l'ho, ce l'hai con te. Son muy frecuentes en la lengua hablada.",
      en: "In these expressions ci and ne are a fixed part of the verb and no longer mean 'there' or 'of it'. Only the verb is conjugated: non ne posso più, non ne puoi più; ce l'ho, ce l'hai con te. They are very common in speech.",
    },
    steps: [
      { es: "Reconoce la expresión por su infinitivo (c'entrare, poterne, avercela).", en: "Recognise the expression by its infinitive (c'entrare, poterne, avercela)." },
      { es: "Deja ci / ne / la delante del verbo: ce l'ho, non ne posso.", en: "Keep ci / ne / la before the verb: ce l'ho, non ne posso." },
      { es: "Conjuga el verbo para la persona y el tiempo que necesitas.", en: "Conjugate the verb for the person and tense you need." },
    ],
    table: {
      head: ["espressione", "presente", "imperfetto"],
      rows: [
        ["c'entrare", "Che c'entra?", "Che c'entrava?"],
        ["non poterne più", "Non ne posso più.", "Non ne potevo più."],
        ["avercela con", "Ce l'ho con te.", "Ce l'avevo con te."],
        ["valerne la pena", "Ne vale la pena.", "Ne valeva la pena."],
      ],
    },
    examples: [
      { target: "Questo non c'entra niente.", gloss: { es: "Esto no tiene nada que ver.", en: "That has nothing to do with it." } },
      { target: "Non ne posso più del rumore.", gloss: { es: "Ya no aguanto más el ruido.", en: "I can't stand the noise any more." } },
      { target: "Ce l'hai con me?", gloss: { es: "¿Estás enojado conmigo?", en: "Are you angry with me?" } },
      { target: "Dovresti andarci: ne vale la pena.", gloss: { es: "Deberías ir: vale la pena.", en: "You should go: it's worth it." } },
    ],
    pitfalls: {
      es: "«Che centra?» y «c'è l'ho con te» son errores de ortografía muy comunes. centrare es «dar en el centro»; lo correcto es «Che c'entra?» y «Ce l'ho con te».",
      en: "'Che centra?' and 'c'è l'ho con te' are common spelling mistakes (centrare means 'to hit the centre'). Write 'Che c'entra?' and 'Ce l'ho con te'.",
    },
  },
];
