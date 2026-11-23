import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u32",
  lang: "de",
  index: 32,
  cefr: "C2",
  title: { target: "Amtsdeutsch", es: "El alemán administrativo", en: "Officialese" },
  canDo: [
    { es: "Puedo entender cartas oficiales, resoluciones y textos legales sencillos.", en: "I can understand official letters, decisions and simple legal texts." },
    { es: "Sé usar las preposiciones del lenguaje administrativo (seitens, zwecks, mangels, gemäß).", en: "I can use the prepositions of official language (seitens, zwecks, mangels, gemäß)." },
    { es: "Puedo pasar una frase en estilo nominal a un alemán claro y sencillo.", en: "I can turn a nominal-style sentence into plain, clear German." },
  ],
  icon: "🏛️",
  items: build("de", 32, "C2", [
    // ── Officialdom ──────────────────────────────────────────
    {
      id: "bescheid", type: "word", pos: "noun", target: "der Bescheid", gender: "m", plural: "die Bescheide",
      gloss: { es: "la notificación oficial (de una resolución)", en: "the official notice (of a decision)" },
      distractors: ["die Bescheid", "die Bescheinigung", "der Abschied"],
      note: { es: "En el habla, Bescheid sagen = avisar y Bescheid wissen = estar al tanto.", en: "In everyday speech, Bescheid sagen = to let someone know and Bescheid wissen = to know about it." },
      tags: ["administration", "formal"],
    },
    {
      id: "antragsteller", type: "word", pos: "noun", target: "der Antragsteller", gender: "m", plural: "die Antragsteller",
      gloss: { es: "el solicitante", en: "the applicant" },
      distractors: ["die Antragsteller", "der Auftraggeber", "der Anstifter"],
      note: { es: "Femenino: die Antragstellerin. En formularios se ve también die antragstellende Person.", en: "Feminine: die Antragstellerin. Forms also use die antragstellende Person." },
      tags: ["administration", "formal"],
    },
    {
      id: "widerspruch", type: "word", pos: "noun", target: "der Widerspruch", gender: "m", plural: "die Widersprüche",
      gloss: { es: "el recurso (administrativo); la contradicción", en: "the formal objection; the contradiction" },
      distractors: ["die Widerspruch", "der Widerstand", "der Wiederspruch"],
      note: { es: "wider- (contra) sin e: Widerspruch, widersprechen.", en: "wider- (against) has no e: Widerspruch, widersprechen." },
      tags: ["administration", "law"],
    },
    {
      id: "zustaendigkeit", type: "word", pos: "noun", target: "die Zuständigkeit", gender: "f", plural: "die Zuständigkeiten",
      gloss: { es: "la competencia (de un organismo)", en: "the jurisdiction, area of responsibility" },
      distractors: ["der Zuständigkeit", "die Zustimmung", "die Zuverlässigkeit"],
      note: { es: "Dafür sind wir nicht zuständig = eso no nos corresponde.", en: "Dafür sind wir nicht zuständig = that's not our department." },
      tags: ["administration"],
    },
    {
      id: "rechtsbehelfsbelehrung", type: "word", pos: "noun", target: "die Rechtsbehelfsbelehrung", gender: "f", plural: "die Rechtsbehelfsbelehrungen",
      gloss: { es: "la indicación de los recursos disponibles", en: "the notice of the right to appeal" },
      distractors: ["der Rechtsbehelfsbelehrung", "die Rechtsberatung", "die Rechtschreibung"],
      note: { es: "Va al final de cada resolución: explica cómo y en qué plazo puedes reclamar.", en: "It comes at the end of every official decision: it explains how and by when you can object." },
      tags: ["administration", "law", "compound"],
    },
    {
      id: "zwecks", type: "word", pos: "prep", target: "zwecks",
      gloss: { es: "con el fin de, a efectos de", en: "for the purpose of" },
      distractors: ["seitens", "zwischen", "zuletzt"],
      grammar: ["de-g-amtspraepositionen"], tags: ["administration", "genitive"],
    },
    {
      id: "seitens", type: "word", pos: "prep", target: "seitens",
      gloss: { es: "por parte de", en: "on the part of" },
      distractors: ["seitlich", "zwecks", "seither"],
      grammar: ["de-g-amtspraepositionen"], tags: ["administration", "genitive"],
    },
    {
      id: "mangels", type: "word", pos: "prep", target: "mangels",
      gloss: { es: "por falta de", en: "for lack of" },
      distractors: ["mangelhaft", "angesichts", "manchmal"],
      grammar: ["de-g-amtspraepositionen"], tags: ["administration", "genitive"],
    },
    {
      id: "gemaess", type: "word", pos: "prep", target: "gemäß",
      gloss: { es: "conforme a, de acuerdo con", en: "in accordance with" },
      distractors: ["gemessen", "gemäßigt", "bemüht"],
      note: { es: "Lleva dativo y puede ir detrás: dem Vertrag gemäß.", en: "Takes the dative and can follow its noun: dem Vertrag gemäß." },
      grammar: ["de-g-amtspraepositionen"], tags: ["administration", "law"],
    },
    {
      id: "unverzueglich", type: "word", pos: "adj", target: "unverzüglich",
      gloss: { es: "sin demora, de inmediato", en: "without delay" },
      distractors: ["unverbindlich", "unvergesslich", "unverzeihlich"],
      tags: ["administration", "formal"],
    },
    {
      id: "ordnungsgemaess", type: "word", pos: "adj", target: "ordnungsgemäß",
      gloss: { es: "debidamente, conforme a las normas", en: "properly, in due form" },
      distractors: ["ordnungswidrig", "zeitgemäß", "verhältnismäßig"],
      tags: ["administration", "formal"],
    },
    {
      id: "erfolgen", type: "word", pos: "verb", target: "erfolgen",
      gloss: { es: "efectuarse, realizarse (lenguaje oficial)", en: "to take place, be carried out (official style)" },
      distractors: ["verfolgen", "befolgen", "erfüllen"],
      note: { es: "Verbo vacío típico: Die Zahlung erfolgt = se paga.", en: "A typical empty verb: Die Zahlung erfolgt = payment is made." },
      grammar: ["de-g-nominalketten"], tags: ["administration", "nominal-style"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "von-amts-wegen", type: "phrase", pos: "phrase", target: "von Amts wegen",
      gloss: { es: "de oficio", en: "ex officio, by virtue of office" },
      distractors: ["von Amt wegen", "vom Amts wegen", "von Amts halber"],
      note: { es: "Amts es un genitivo antiguo, fosilizado en la expresión.", en: "Amts is an old genitive, frozen in the phrase." },
      tags: ["administration", "law"],
    },
    {
      id: "widerspruch-einlegen", type: "phrase", pos: "phrase", target: "Widerspruch einlegen",
      gloss: { es: "presentar un recurso", en: "to lodge an objection" },
      distractors: ["Widerspruch machen", "Widerspruch legen", "Widerspruch stellen"],
      grammar: ["de-g-nominalketten"], tags: ["administration", "collocations"],
    },
    {
      id: "zur-kenntnis-nehmen", type: "phrase", pos: "phrase", target: "zur Kenntnis nehmen",
      gloss: { es: "tomar nota de", en: "to take note of" },
      distractors: ["in Kenntnis nehmen", "zur Kenntnis machen", "zur Erkenntnis nehmen"],
      note: { es: "Con persona: jemanden in Kenntnis setzen = informar a alguien.", en: "With a person: jemanden in Kenntnis setzen = to inform someone." },
      tags: ["administration", "collocations"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "seitens-der-behoerde", type: "sentence", register: "formal", target: "Seitens der Behörde bestehen keine Bedenken.",
      gloss: { es: "Por parte de la autoridad no hay objeciones.", en: "The authority has no objections." },
      annot: { "Seitens der Behörde": { es: "seitens + genitivo = por parte de", en: "seitens + genitive = on the part of" } },
      distractors: ["Seite", "besteht", "die"],
      grammar: ["de-g-amtspraepositionen"], tags: ["administration", "genitive"],
    },
    {
      id: "zwecks-pruefung", type: "sentence", register: "formal", target: "Zwecks Prüfung Ihres Antrags benötigen wir weitere Unterlagen.",
      gloss: { es: "Para revisar su solicitud, necesitamos más documentos.", en: "We need further documents in order to process your application." },
      accept: [{ text: "Zur Prüfung Ihres Antrags benötigen wir weitere Unterlagen." }],
      distractors: ["Zweck", "Ihren", "benötigt"],
      grammar: ["de-g-amtspraepositionen"], tags: ["administration", "genitive"],
    },
    {
      id: "mangels-beweisen", type: "sentence", target: "Mangels Beweisen wurde das Verfahren eingestellt.",
      gloss: { es: "Por falta de pruebas, se archivó el proceso.", en: "The case was dropped for lack of evidence." },
      accept: [{ text: "Aus Mangel an Beweisen wurde das Verfahren eingestellt." }],
      annot: { "Beweisen": { es: "plural sin artículo: el genitivo no se nota, así que pasa a dativo", en: "plural with no article: the genitive wouldn't show, so it becomes dative" } },
      errors: [{ text: "Mangels Beweise wurde das Verfahren eingestellt.", feedback: { es: "Sin artículo, el genitivo plural no se distingue; se usa el dativo: mangels Beweisen.", en: "Without an article the genitive plural isn't visible, so the dative is used: mangels Beweisen." }, ruleId: "de-g-amtspraepositionen" }],
      distractors: ["Mangel", "wird", "eingestellte"],
      grammar: ["de-g-amtspraepositionen"], tags: ["law", "genitive"],
    },
    {
      id: "auszahlung-erfolgt", type: "sentence", register: "formal", target: "Die Auszahlung erfolgt nach Eingang aller Unterlagen.",
      gloss: { es: "El pago se efectúa una vez recibidos todos los documentos.", en: "Payment will be made once all documents have been received." },
      annot: { "erfolgt": { es: "verbo vacío: la acción está en Auszahlung", en: "empty verb: the action is in Auszahlung" } },
      distractors: ["erfolgreich", "Eingänge", "allen"],
      grammar: ["de-g-nominalketten"], tags: ["administration", "nominal-style"],
    },
    {
      id: "uebersendung", type: "sentence", register: "formal", target: "Wir bitten um Übersendung der fehlenden Unterlagen bis Freitag.",
      gloss: { es: "Le rogamos que nos envíe los documentos que faltan antes del viernes.", en: "We request that you send the missing documents by Friday." },
      accept: [{ text: "Bitte senden Sie uns die fehlenden Unterlagen bis Freitag.", verdict: "almost", feedback: { es: "Correcto y más claro; la frase modelo usa el estilo nominal de las cartas oficiales: um Übersendung bitten.", en: "Correct and clearer; the model sentence uses the nominal style of official letters: um Übersendung bitten." } }],
      distractors: ["Übersenden", "fehlende", "für"],
      grammar: ["de-g-nominalketten"], tags: ["administration", "nominal-style"],
    },
    {
      id: "pruefung-obliegt", type: "sentence", register: "formal", target: "Die Überprüfung der Einhaltung der Vorschriften obliegt dem Ordnungsamt.",
      gloss: { es: "Controlar que se cumplan las normas le corresponde a la oficina de orden público.", en: "Checking compliance with the regulations is the responsibility of the public order office." },
      annot: { "obliegt": { es: "obliegen + dativo = corresponder a (muy formal)", en: "obliegen + dative = to be the duty of (very formal)" } },
      distractors: ["Überprüfen", "den", "obliegen"],
      grammar: ["de-g-nominalketten"], tags: ["administration", "nominal-style"],
    },
    {
      id: "bis-ende-juni-einzureichen", type: "sentence", register: "formal", target: "Die Unterlagen sind bis spätestens Ende Juni einzureichen.",
      gloss: { es: "Los documentos deben presentarse a más tardar a fines de junio.", en: "The documents must be submitted by the end of June at the latest." },
      annot: { "einzureichen": { es: "sein + zu = deben presentarse", en: "sein + zu = must be submitted" } },
      distractors: ["einreichen", "eingereicht", "haben"],
      grammar: ["de-g-passiversatz"], tags: ["administration", "passive-alternatives"],
    },
    {
      id: "gegen-diesen-bescheid", type: "sentence", register: "formal", target: "Gegen diesen Bescheid kann innerhalb eines Monats Widerspruch eingelegt werden.",
      gloss: { es: "Contra esta resolución se puede presentar un recurso en el plazo de un mes.", en: "An objection to this decision may be lodged within one month." },
      distractors: ["Gegenteil", "legt", "Monate"],
      tags: ["administration", "law"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-amtspraep", type: "paradigm", target: "Amtsdeutsch: Präpositionen", spoken: "Amtsdeutsch, Präpositionen",
      gloss: { es: "las preposiciones del lenguaje administrativo", en: "the prepositions of officialese" },
      grammar: ["de-g-amtspraepositionen"],
      paradigm: {
        caption: { es: "¿Qué preposición administrativa dice lo mismo?", en: "Which official-style preposition says the same thing?" },
        cells: [
          { label: "für die Prüfung", answer: "zwecks", accept: ["zur"], ruleId: "de-g-amtspraepositionen" },
          { label: "von Seiten der Stadt", answer: "seitens", ruleId: "de-g-amtspraepositionen" },
          { label: "weil Beweise fehlen", answer: "mangels", ruleId: "de-g-amtspraepositionen" },
          { label: "nach der Vorschrift", answer: "gemäß", accept: ["laut"], ruleId: "de-g-amtspraepositionen" },
          { label: "als Folge des Unfalls", answer: "infolge", accept: ["aufgrund"], ruleId: "de-g-amtspraepositionen" },
          { label: "ohne Rücksicht auf die Kosten", answer: "ungeachtet", ruleId: "de-g-amtspraepositionen" },
        ],
      },
      tags: ["grammar", "administration", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-amtspraep", type: "pattern", target: "seitens · zwecks · mangels + Genitiv · gemäß + Dativ",
      gloss: { es: "preposiciones del lenguaje oficial", en: "prepositions of official language" },
      pattern: {
        rule: {
          es: "Los textos oficiales usan preposiciones que casi no se oyen al hablar. La mayoría lleva genitivo (seitens der Stadt, zwecks Prüfung); gemäß lleva dativo y puede ir detrás (der Vorschrift gemäß).",
          en: "Official texts use prepositions you hardly ever hear in speech. Most take the genitive (seitens der Stadt, zwecks Prüfung); gemäß takes the dative and can follow its noun (der Vorschrift gemäß).",
        },
        table: [["seitens + Gen.", "seitens der Stadt"], ["zwecks + Gen.", "zwecks Prüfung"], ["mangels + Gen.", "mangels Interesses"], ["gemäß + Dat.", "gemäß § 5 / dem Vertrag gemäß"]],
      },
      question: {
        prompt: { es: "«___ der Vorschriften wurde der Antrag abgelehnt.» (= conforme a las normas)", en: "'___ der Vorschriften wurde der Antrag abgelehnt.' (= in accordance with the rules)" },
        options: ["Gemäß", "Zwecks", "Mangels", "Seitens"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-amtspraepositionen"], tags: ["grammar", "administration"],
    },
    {
      id: "pat-nominalketten", type: "pattern", target: "Die Auszahlung erfolgt … → Wir zahlen … aus.",
      gloss: { es: "del alemán administrativo al alemán claro", en: "from officialese to plain German" },
      pattern: {
        rule: {
          es: "El alemán administrativo mete la acción en un sustantivo y usa un verbo vacío (erfolgen, vornehmen, stattfinden). Para entenderlo, busca el sustantivo de acción, vuelve a hacerlo verbo y pregunta quién lo hace.",
          en: "Officialese packs the action into a noun and adds an empty verb (erfolgen, vornehmen, stattfinden). To understand it, find the action noun, turn it back into a verb and ask who does it.",
        },
        table: [["Die Auszahlung erfolgt im Mai.", "Wir zahlen im Mai aus."], ["Eine Prüfung wird vorgenommen.", "Wir prüfen."], ["nach Eingang der Zahlung", "wenn die Zahlung eingegangen ist"]],
      },
      question: {
        prompt: { es: "«Die Zustellung erfolgt per Post.» en alemán sencillo:", en: "'Die Zustellung erfolgt per Post.' in plain German:" },
        options: ["Wir schicken es Ihnen per Post.", "Sie holen es bei der Post ab.", "Die Post hat es verloren.", "Sie müssen es per Post schicken."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-nominalketten"], tags: ["grammar", "nominal-style"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-wohngeld", type: "listening",
      target: "Ihrem Antrag auf Wohngeld kann leider nicht entsprochen werden, da Ihr Einkommen die maßgebliche Grenze übersteigt. Gegen diesen Bescheid können Sie innerhalb eines Monats Widerspruch einlegen.",
      gloss: {
        es: "Lamentablemente, no es posible acceder a su solicitud de ayuda para la vivienda, ya que sus ingresos superan el límite establecido. Puede presentar un recurso contra esta resolución en el plazo de un mes.",
        en: "Unfortunately, your application for housing benefit cannot be granted, as your income exceeds the relevant limit. You may lodge an objection to this decision within one month.",
      },
      question: {
        prompt: { es: "¿Por qué rechazan la solicitud?", en: "Why is the application rejected?" },
        options: [
          { es: "Porque los ingresos son demasiado altos", en: "Because the income is too high" },
          { es: "Porque faltan documentos", en: "Because documents are missing" },
          { es: "Porque se presentó fuera de plazo", en: "Because it was submitted too late" },
          { es: "Porque la vivienda es demasiado grande", en: "Because the flat is too big" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "administration"],
    },
    {
      id: "dlg-reihenfolge", type: "dialogue", register: "informal", target: "Das wäre ja auch viel zu konkret.",
      gloss: { es: "Eso ya sería demasiado concreto.", en: "That would be far too specific, wouldn't it." },
      turns: [
        { who: "A", target: "Kannst du mir das übersetzen? „Die Bearbeitung erfolgt in der Reihenfolge des Eingangs.“", gloss: { es: "¿Me lo traduces? «La tramitación se efectúa por orden de llegada».", en: "Can you translate this for me? 'Processing takes place in order of receipt.'" } },
        { who: "B", target: "Ganz einfach: Wer zuerst kommt, mahlt zuerst.", gloss: { es: "Muy fácil: el primero que llega es el primero al que atienden.", en: "Easy: first come, first served." } },
        { who: "A", target: "Und wie lange dauert es, bis ich drankomme?", gloss: { es: "¿Y cuánto falta hasta que me toque a mí?", en: "And how long until it's my turn?" } },
        { who: "B", target: "Das steht da natürlich nicht. Das wäre ja auch viel zu konkret.", gloss: { es: "Eso, claro, no lo dice. Eso ya sería demasiado concreto.", en: "That's not in there, of course. That would be far too specific, wouldn't it." } },
      ],
      question: {
        prompt: { es: "¿Qué quiere decir la frase de la carta?", en: "What does the sentence in the letter mean?" },
        options: [
          { es: "Que atienden las solicitudes por orden de llegada", en: "Applications are dealt with in the order they arrive" },
          { es: "Que la respuesta llega en una semana", en: "The answer will come within a week" },
          { es: "Que hay que volver a presentar la solicitud", en: "The application has to be resubmitted" },
          { es: "Que la solicitud fue rechazada", en: "The application was rejected" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-nominalketten"], tags: ["dialogue", "administration"],
    },
  ]),
};
