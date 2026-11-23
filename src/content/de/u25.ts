import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u25",
  lang: "de",
  index: 25,
  cefr: "C1",
  title: { target: "Verhandeln", es: "Negociar", en: "Negotiating" },
  canDo: [
    { es: "Puedo negociar condiciones con un registro formal y preciso.", en: "I can negotiate terms in a formal, precise register." },
    { es: "Puedo poner condiciones y hacer concesiones (sofern, vorausgesetzt, es sei denn).", en: "I can set conditions and make concessions (sofern, vorausgesetzt, es sei denn)." },
    { es: "Sé usar construcciones como in Betracht ziehen, zur Sprache bringen o in Kraft treten.", en: "I can use noun–verb phrases like in Betracht ziehen, zur Sprache bringen and in Kraft treten." },
  ],
  icon: "🤝",
  items: build("de", 25, "C1", [
    // ── Negotiation words ────────────────────────────────────
    {
      id: "verhandlung", type: "word", pos: "noun", target: "die Verhandlung", gender: "f", plural: "die Verhandlungen",
      gloss: { es: "la negociación", en: "the negotiation" },
      distractors: ["der Verhandlung", "die Behandlung", "die Handlung"],
      note: { es: "También «la audiencia» en un juicio. die Behandlung = el tratamiento.", en: "Also 'the hearing' in court. die Behandlung = treatment." },
      tags: ["work", "negotiation", "goethe-c1"],
    },
    {
      id: "kompromiss", type: "word", pos: "noun", target: "der Kompromiss", gender: "m", plural: "die Kompromisse",
      gloss: { es: "el acuerdo intermedio, la solución de compromiso", en: "the compromise" },
      distractors: ["die Kompromiss", "die Kompresse", "der Komplex"],
      note: { es: "Ojo: «compromiso» en el sentido de obligación es die Verpflichtung.", en: "einen Kompromiss eingehen / schließen = to reach a compromise." },
      tags: ["work", "negotiation"],
    },
    {
      id: "zugestaendnis", type: "word", pos: "noun", target: "das Zugeständnis", gender: "n", plural: "die Zugeständnisse",
      gloss: { es: "la concesión", en: "the concession" },
      distractors: ["der Zugeständnis", "das Geständnis", "der Zustand"],
      note: { es: "Zugeständnisse machen = hacer concesiones. das Geständnis = la confesión.", en: "Zugeständnisse machen = to make concessions. das Geständnis = confession." },
      tags: ["work", "negotiation", "goethe-c1"],
    },
    {
      id: "gegenleistung", type: "word", pos: "noun", target: "die Gegenleistung", gender: "f", plural: "die Gegenleistungen",
      gloss: { es: "la contrapartida", en: "something in return" },
      distractors: ["der Gegenleistung", "die Leistung", "die Gegenwart"],
      note: { es: "als Gegenleistung = a cambio.", en: "als Gegenleistung = in return." },
      tags: ["work", "negotiation"],
    },
    {
      id: "spielraum", type: "word", pos: "noun", target: "der Spielraum", gender: "m", plural: "die Spielräume",
      gloss: { es: "el margen de maniobra", en: "the leeway, room for manoeuvre" },
      distractors: ["die Spielraum", "der Spielplatz", "der Zeitraum"],
      tags: ["work", "negotiation"],
    },
    {
      id: "kuendigungsfrist", type: "word", pos: "noun", target: "die Kündigungsfrist", gender: "f", plural: "die Kündigungsfristen",
      gloss: { es: "el plazo de preaviso", en: "the notice period" },
      distractors: ["der Kündigungsfrist", "die Kündigung", "die Lieferfrist"],
      note: { es: "die Frist = el plazo: eine Frist einhalten = cumplir un plazo.", en: "die Frist = deadline: eine Frist einhalten = to meet a deadline." },
      tags: ["work", "contract", "compound"],
    },
    {
      id: "verbindlich", type: "word", pos: "adj", target: "verbindlich",
      gloss: { es: "vinculante, en firme", en: "binding" },
      distractors: ["verbunden", "vergeblich", "verständlich"],
      note: { es: "ein verbindliches Angebot = una oferta en firme.", en: "ein verbindliches Angebot = a binding offer." },
      tags: ["work", "contract", "formal"],
    },
    {
      id: "nachgeben", type: "word", pos: "verb", target: "nachgeben",
      gloss: { es: "ceder", en: "to give in, give way" },
      forms: { er: "gibt nach", praet: "gab nach", pp: "nachgegeben" },
      distractors: ["nachgehen", "nachfragen", "angeben"],
      tags: ["negotiation", "separable"],
    },
    {
      id: "zusichern", type: "word", pos: "verb", target: "zusichern",
      gloss: { es: "garantizar formalmente", en: "to assure, guarantee" },
      distractors: ["zuschicken", "zusehen", "sichten"],
      note: { es: "jemandem etwas zusichern: Wir sichern Ihnen absolute Diskretion zu.", en: "jemandem etwas zusichern: Wir sichern Ihnen absolute Diskretion zu." },
      tags: ["negotiation", "formal", "separable"],
    },

    // ── Noun–verb phrases (Funktionsverbgefüge) ──────────────
    {
      id: "in-betracht-ziehen", type: "phrase", pos: "phrase", target: "in Betracht ziehen",
      gloss: { es: "tener en cuenta como opción", en: "to take into consideration" },
      distractors: ["in Betracht nehmen", "in Betracht bringen", "zu Betracht ziehen"],
      note: { es: "La versión pasiva es in Betracht kommen (ser una opción).", en: "Its passive partner is in Betracht kommen (to be an option)." },
      grammar: ["de-g-funktionsverbgefuege"], tags: ["collocations", "formal"],
    },
    {
      id: "zur-sprache-bringen", type: "phrase", pos: "phrase", target: "zur Sprache bringen",
      gloss: { es: "plantear (un tema)", en: "to bring up, raise (a topic)" },
      distractors: ["zur Sprache stellen", "in die Sprache bringen", "zur Sprache machen"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["collocations", "formal"],
    },
    {
      id: "in-kauf-nehmen", type: "phrase", pos: "phrase", target: "in Kauf nehmen",
      gloss: { es: "aceptar (un inconveniente)", en: "to accept (a drawback), put up with" },
      distractors: ["in Kauf bringen", "zum Kauf nehmen", "in Kauf geben"],
      note: { es: "No tiene nada que ver con comprar: Wir nehmen die höheren Kosten in Kauf.", en: "Nothing to do with buying: Wir nehmen die höheren Kosten in Kauf." },
      grammar: ["de-g-funktionsverbgefuege"], tags: ["collocations"],
    },
    {
      id: "ruecksicht-nehmen", type: "phrase", pos: "phrase", target: "Rücksicht nehmen auf",
      gloss: { es: "tener consideración con", en: "to show consideration for" },
      distractors: ["Rücksicht machen auf", "Rücksicht geben auf", "Rücksicht nehmen an"],
      note: { es: "auf + acusativo: Rücksicht auf die Kollegen nehmen.", en: "auf + accusative: Rücksicht auf die Kollegen nehmen." },
      grammar: ["de-g-funktionsverbgefuege"], tags: ["collocations"],
    },
    {
      id: "zum-abschluss-bringen", type: "phrase", pos: "phrase", target: "zum Abschluss bringen",
      gloss: { es: "llevar a buen término, cerrar", en: "to bring to a conclusion" },
      distractors: ["zum Abschluss machen", "zum Abschluss stellen", "in Abschluss bringen"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["collocations", "formal"],
    },
    {
      id: "einigung-erzielen", type: "phrase", pos: "phrase", target: "eine Einigung erzielen",
      gloss: { es: "llegar a un acuerdo", en: "to reach an agreement" },
      distractors: ["eine Einigung machen", "eine Einigung nehmen", "eine Einigung ziehen"],
      tags: ["collocations", "negotiation"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "entgegenkommen-sofern", type: "sentence", register: "formal", target: "Wir kommen Ihnen gern entgegen, sofern Sie die Frist einhalten.",
      gloss: { es: "Con gusto le hacemos una concesión, siempre que cumpla el plazo.", en: "We're happy to meet you halfway, provided you meet the deadline." },
      accept: [
        { text: "Wir kommen Ihnen gern entgegen, vorausgesetzt, Sie halten die Frist ein." },
        { text: "Wir kommen Ihnen gern entgegen, falls Sie die Frist einhalten." },
      ],
      errors: [{ text: "Wir kommen Ihnen gern entgegen, sofern Sie halten die Frist ein.", feedback: { es: "sofern es subordinante: el verbo va al final (… die Frist einhalten).", en: "sofern starts a subordinate clause: the verb goes last (… die Frist einhalten)." }, ruleId: "de-g-bedingungen" }],
      annot: { "entgegen": { es: "jemandem entgegenkommen = acercarse a la postura de alguien", en: "jemandem entgegenkommen = to meet someone halfway" } },
      distractors: ["sobald", "halten", "Fristen"],
      grammar: ["de-g-bedingungen"], tags: ["negotiation", "conditions"],
    },
    {
      id: "kommt-nicht-in-betracht", type: "sentence", register: "formal", target: "Ein solcher Preis kommt für uns leider nicht in Betracht.",
      gloss: { es: "Lamentablemente, un precio así no es una opción para nosotros.", en: "Unfortunately, a price like that isn't an option for us." },
      distractors: ["zieht", "Frage", "solche"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["negotiation", "collocations"],
    },
    {
      id: "punkt-zur-sprache", type: "sentence", target: "Ich möchte noch einen Punkt zur Sprache bringen.",
      gloss: { es: "Quisiera plantear un punto más.", en: "There's one more point I'd like to raise." },
      distractors: ["Sprachen", "stellen", "einem"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["meetings", "collocations"],
    },
    {
      id: "tritt-in-kraft", type: "sentence", target: "Die neue Regelung tritt am ersten Januar in Kraft.",
      gloss: { es: "La nueva normativa entra en vigor el primero de enero.", en: "The new rules come into force on the first of January." },
      errors: [{ text: "Die neue Regelung geht am ersten Januar in Kraft.", feedback: { es: "Entrar en vigor = in Kraft treten (no «gehen»).", en: "Come into force = in Kraft treten (not 'gehen')." }, ruleId: "de-g-funktionsverbgefuege" }],
      distractors: ["setzt", "Kräfte", "geht"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["contract", "collocations"],
    },
    {
      id: "es-sei-denn", type: "sentence", target: "Wir liefern pünktlich, es sei denn, es kommt zu unvorhersehbaren Verzögerungen.",
      gloss: { es: "Entregamos a tiempo, a menos que haya retrasos imprevistos.", en: "We'll deliver on time, unless there are unforeseen delays." },
      accept: [{ text: "Wir liefern pünktlich, es sei denn, dass es zu unvorhersehbaren Verzögerungen kommt." }],
      annot: { "es sei denn": { es: "a menos que (después, orden normal: verbo en 2.ª posición)", en: "unless (followed by normal order: verb second)" } },
      distractors: ["ist", "wenn", "kam"],
      grammar: ["de-g-bedingungen"], tags: ["conditions", "business"],
    },
    {
      id: "im-falle-einer-verspaetung", type: "sentence", register: "formal", target: "Im Falle einer Verspätung erstatten wir Ihnen den vollen Betrag.",
      gloss: { es: "En caso de retraso, le reembolsamos el importe completo.", en: "In the event of a delay, we will refund the full amount." },
      accept: [{ text: "Im Fall einer Verspätung erstatten wir Ihnen den vollen Betrag." }],
      annot: { "einer Verspätung": { es: "genitivo tras im Falle", en: "genitive after im Falle" } },
      distractors: ["Fall", "eine", "erstattet"],
      grammar: ["de-g-bedingungen"], tags: ["conditions", "formal-writing"],
    },
    {
      id: "nach-eingehender-pruefung", type: "sentence", register: "formal", target: "Nach eingehender Prüfung Ihres Angebots müssen wir leider absagen.",
      gloss: { es: "Tras analizar a fondo su oferta, lamentablemente tenemos que rechazarla.", en: "After careful consideration of your offer, we regret that we must decline." },
      annot: { "Prüfung": { es: "estilo nominal: «tras examinar» → nach Prüfung", en: "nominal style: 'after examining' → nach Prüfung" } },
      distractors: ["eingehend", "Ihrem", "Prüfen"],
      grammar: ["de-g-nominalisierung"], tags: ["formal-writing", "nominal-style"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-funktionsverbgefuege", type: "pattern", target: "zur Diskussion stellen · zur Diskussion stehen · in Kraft treten",
      gloss: { es: "verbos de función: acción y estado", en: "noun–verb phrases: action and state" },
      pattern: {
        rule: {
          es: "El mismo sustantivo cambia de verbo según quién actúa: alguien setzt etwas in Kraft (pone en vigor), y la ley tritt in Kraft (entra en vigor). Igual: zur Diskussion stellen / stehen, zum Abschluss bringen / kommen.",
          en: "The same noun takes a different verb depending on who acts: someone setzt etwas in Kraft (puts it into force), and the law tritt in Kraft (comes into force). Likewise: zur Diskussion stellen / stehen, zum Abschluss bringen / kommen.",
        },
        table: [["in Kraft setzen", "in Kraft treten"], ["zur Diskussion stellen", "zur Diskussion stehen"], ["zum Abschluss bringen", "zum Abschluss kommen"], ["in Betracht ziehen", "in Betracht kommen"]],
      },
      question: {
        prompt: { es: "«Das Gesetz ___ morgen in Kraft.» ¿Qué verbo falta?", en: "'Das Gesetz ___ morgen in Kraft.' Which verb is missing?" },
        options: ["tritt", "setzt", "stellt", "bringt"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-funktionsverbgefuege"], tags: ["grammar", "collocations"],
    },
    {
      id: "pat-bedingungen", type: "pattern", target: "sofern · vorausgesetzt, (dass) · es sei denn · im Falle",
      gloss: { es: "poner condiciones", en: "setting conditions" },
      pattern: {
        rule: {
          es: "sofern y falls (siempre que, en caso de que) mandan el verbo al final. Tras vorausgesetzt y es sei denn puede seguir una frase normal o una con dass. im Falle va con genitivo: im Falle einer Verspätung.",
          en: "sofern and falls (provided, if) send the verb to the end. vorausgesetzt and es sei denn can be followed by a normal clause or a dass clause. im Falle takes the genitive: im Falle einer Verspätung.",
        },
        table: [["sofern / falls", "…, sofern der Preis stimmt."], ["vorausgesetzt", "…, vorausgesetzt, der Preis stimmt."], ["es sei denn", "…, es sei denn, der Preis steigt."], ["im Falle + Gen.", "Im Falle einer Absage …"]],
      },
      question: {
        prompt: { es: "«Wir unterschreiben, ___ der Preis stimmt.» (= siempre que)", en: "'Wir unterschreiben, ___ der Preis stimmt.' (= provided that)" },
        options: ["sofern", "es sei denn", "obwohl", "damit"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-bedingungen"], tags: ["grammar", "conditions"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-rabatt", type: "listening",
      target: "Beim Preis könnten wir Ihnen um fünf Prozent entgegenkommen, vorausgesetzt, Sie verlängern den Vertrag um zwei Jahre.",
      gloss: {
        es: "En el precio podríamos hacerle un descuento del cinco por ciento, siempre que renueve el contrato por dos años.",
        en: "We could come down five percent on the price, provided you extend the contract by two years.",
      },
      question: {
        prompt: { es: "¿Qué condición ponen para el descuento?", en: "What's the condition for the discount?" },
        options: [
          { es: "Renovar el contrato por dos años", en: "Extending the contract by two years" },
          { es: "Pagar en cinco días", en: "Paying within five days" },
          { es: "Pedir el doble de unidades", en: "Ordering twice as much" },
          { es: "Firmar hoy mismo", en: "Signing today" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-bedingungen"], tags: ["listening", "negotiation"],
    },
    {
      id: "dlg-schmerzgrenze", type: "dialogue", register: "formal", target: "Das ließe sich einrichten.",
      gloss: { es: "Eso se podría arreglar.", en: "That could be arranged." },
      turns: [
        { who: "A", target: "Ihr Angebot ist interessant, aber der Preis liegt über unserem Budget.", gloss: { es: "Su oferta es interesante, pero el precio supera nuestro presupuesto.", en: "Your offer is interesting, but the price is above our budget." } },
        { who: "B", target: "Wo liegt denn Ihre Schmerzgrenze?", gloss: { es: "¿Y cuál es su límite?", en: "So what's the most you can go to?" } },
        { who: "A", target: "Bei zwanzigtausend Euro, und zwar einschließlich Lieferung.", gloss: { es: "Veinte mil euros, y eso con la entrega incluida.", en: "Twenty thousand euros, and that's including delivery." } },
        { who: "B", target: "Das ließe sich einrichten, wenn Sie bis Freitag verbindlich zusagen.", gloss: { es: "Eso se podría arreglar, si confirma en firme antes del viernes.", en: "That could be arranged if you give a firm commitment by Friday." } },
      ],
      question: {
        prompt: { es: "¿Qué pide B a cambio?", en: "What does B ask for in return?" },
        options: [
          { es: "Una confirmación en firme antes del viernes", en: "A firm commitment by Friday" },
          { es: "Que la entrega se pague aparte", en: "That delivery is paid separately" },
          { es: "Un pedido más pequeño", en: "A smaller order" },
          { es: "Una reunión en persona", en: "A face-to-face meeting" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "negotiation"],
    },
  ]),
};
