import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u19",
  lang: "de",
  index: 19,
  cefr: "B2",
  title: { target: "Arbeitswelt", es: "El mundo laboral", en: "The working world" },
  canDo: [
    { es: "Puedo escribir correos y cartas formales de trabajo.", en: "I can write formal work emails and letters." },
    { es: "Puedo hablar de responsabilidades, contratos y formación.", en: "I can talk about responsibilities, contracts and training." },
    { es: "Sé usar la pasiva con modales y conectores dobles (zwar … aber, weder … noch).", en: "I can use the passive with modals and paired connectors (zwar … aber, weder … noch)." },
  ],
  icon: "🏢",
  items: build("de", 19, "B2", [
    // ── Formal writing ───────────────────────────────────────
    {
      id: "sehr-geehrte", type: "phrase", pos: "phrase", register: "formal", target: "Sehr geehrte Frau Weber,",
      gloss: { es: "Estimada señora Weber:", en: "Dear Ms Weber," },
      distractors: ["Sehr geehrter Frau Weber,", "Sehr geehrtes Frau Weber,", "Sehr ehrte Frau Weber,"],
      note: { es: "A un hombre: Sehr geehrter Herr Weber. Después de la coma, la carta sigue en minúscula.", en: "To a man: Sehr geehrter Herr Weber. After the comma, the letter continues in lower case." },
      tags: ["formal-writing", "goethe-b1"],
    },
    {
      id: "mit-freundlichen-gruessen", type: "phrase", pos: "phrase", register: "formal", target: "Mit freundlichen Grüßen",
      gloss: { es: "Atentamente (cierre formal)", en: "Kind regards (formal closing)" },
      distractors: ["Mit freundliche Grüße", "Mit freundlichem Grüßen", "Mit freundlichen Grußen"],
      tags: ["formal-writing", "goethe-b1"],
    },
    {
      id: "im-anhang", type: "phrase", pos: "phrase", target: "im Anhang",
      gloss: { es: "adjunto (en el anexo)", en: "attached" },
      accept: [{ text: "in der Anlage" }],
      distractors: ["in Anhang", "am Anhang", "im Anfang"],
      tags: ["formal-writing"],
    },

    // ── Work words ───────────────────────────────────────────
    {
      id: "besprechung", type: "word", pos: "noun", target: "die Besprechung", gender: "f", plural: "die Besprechungen",
      gloss: { es: "la reunión (de trabajo)", en: "the meeting (at work)" },
      distractors: ["der Besprechung", "die Bestellung", "die Bescheinigung"],
      tags: ["work", "goethe-b1"],
    },
    {
      id: "abteilung", type: "word", pos: "noun", target: "die Abteilung", gender: "f", plural: "die Abteilungen",
      gloss: { es: "el departamento (de una empresa)", en: "the department" },
      distractors: ["der Abteilung", "die Ableitung", "die Abstimmung"],
      tags: ["work", "goethe-b1"],
    },
    {
      id: "vertrag", type: "word", pos: "noun", target: "der Vertrag", gender: "m", plural: "die Verträge",
      gloss: { es: "el contrato", en: "the contract" },
      distractors: ["die Vertrag", "der Vortrag", "der Verkehr"],
      note: { es: "Ojo: der Vortrag = la conferencia, la charla.", en: "Careful: der Vortrag = talk, lecture." },
      tags: ["work", "goethe-b1"],
    },
    {
      id: "verantwortung", type: "word", pos: "other", target: "die Verantwortung",
      gloss: { es: "la responsabilidad", en: "responsibility" },
      distractors: ["die Verabredung", "die Vereinbarung", "die Verwaltung"],
      tags: ["work", "goethe-b1"],
    },
    {
      id: "verantwortlich", type: "word", pos: "adj", target: "verantwortlich",
      gloss: { es: "responsable (de algo)", en: "responsible (for something)" },
      distractors: ["verständlich", "verträglich", "verantwortungslos"],
      note: { es: "verantwortlich für + acusativo: für das Projekt verantwortlich.", en: "verantwortlich für + accusative: für das Projekt verantwortlich." },
      tags: ["work", "goethe-b1"],
    },
    {
      id: "kuendigen", type: "word", pos: "verb", target: "kündigen",
      gloss: { es: "renunciar / despedir (terminar un contrato)", en: "to resign / give notice (or dismiss)" },
      distractors: ["ankündigen", "beendigen", "verkündigen"],
      note: { es: "Ich habe gekündigt = renuncié; Mir wurde gekündigt = me despidieron.", en: "Ich habe gekündigt = I resigned; Mir wurde gekündigt = I was let go." },
      tags: ["work", "goethe-b1"],
    },
    {
      id: "fortbildung", type: "word", pos: "noun", target: "die Fortbildung", gender: "f", plural: "die Fortbildungen",
      gloss: { es: "la capacitación (formación continua)", en: "the further training course" },
      distractors: ["der Fortbildung", "die Ausbildung", "die Fortsetzung"],
      note: { es: "die Ausbildung = la formación profesional inicial.", en: "die Ausbildung = initial vocational training." },
      tags: ["work", "goethe-b1"],
    },
    {
      id: "zwar-aber", type: "phrase", pos: "phrase", target: "zwar … aber",
      gloss: { es: "es cierto que … pero", en: "admittedly … but" },
      distractors: ["zwar … sondern", "zwar … oder", "war … aber"],
      tags: ["connectors"],
    },
    {
      id: "sowohl-als-auch", type: "phrase", pos: "phrase", target: "sowohl … als auch",
      gloss: { es: "tanto … como", en: "both … and" },
      accept: [{ text: "sowohl … wie auch" }],
      distractors: ["sowohl … als noch", "so wohl … als auch", "sowie … als auch"],
      tags: ["connectors"],
    },
    {
      id: "weder-noch", type: "phrase", pos: "phrase", target: "weder … noch",
      gloss: { es: "ni … ni", en: "neither … nor" },
      distractors: ["weder … oder", "entweder … noch", "wieder … noch"],
      tags: ["connectors"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "im-anhang-lebenslauf", type: "sentence", register: "formal", target: "Im Anhang finden Sie meinen Lebenslauf.",
      gloss: { es: "Adjunto encontrará mi currículum.", en: "Please find my CV attached." },
      distractors: ["finde", "meine", "Ihnen"],
      tags: ["formal-writing"],
    },
    {
      id: "muss-fertiggestellt-werden", type: "sentence", target: "Der Bericht muss bis Freitag fertiggestellt werden.",
      gloss: { es: "El informe tiene que estar terminado para el viernes.", en: "The report must be completed by Friday." },
      distractors: ["wird", "worden", "fertigstellen"],
      tags: ["passive", "modals"],
    },
    {
      id: "zwar-anstrengend", type: "sentence", target: "Die Arbeit ist zwar anstrengend, aber sie macht mir Spaß.",
      gloss: { es: "Es cierto que el trabajo es agotador, pero me gusta.", en: "The work is tiring, admittedly, but I enjoy it." },
      distractors: ["sondern", "mich", "machen"],
      tags: ["connectors"],
    },
    {
      id: "sowohl-englisch", type: "sentence", target: "Ich spreche sowohl Englisch als auch Spanisch.",
      gloss: { es: "Hablo tanto inglés como español.", en: "I speak both English and Spanish." },
      accept: [{ text: "Ich spreche sowohl Englisch wie auch Spanisch." }],
      distractors: ["noch", "oder", "beide"],
      tags: ["connectors"],
    },
    {
      id: "weder-zeit-noch-geld", type: "sentence", target: "Er hat weder Zeit noch Geld.",
      gloss: { es: "No tiene ni tiempo ni dinero.", en: "He has neither time nor money." },
      errors: [{ text: "Er hat weder Zeit oder Geld.", feedback: { es: "weder va con noch: weder … noch.", en: "weder pairs with noch: weder … noch." } }],
      distractors: ["kein", "oder", "nicht"],
      tags: ["connectors"],
    },
    {
      id: "zum-monatsende-gekuendigt", type: "sentence", target: "Ich habe zum Ende des Monats gekündigt.",
      gloss: { es: "Renuncié con efecto a fin de mes.", en: "I've handed in my notice for the end of the month." },
      distractors: ["zur", "am", "gekündet"],
      tags: ["work", "genitive"],
    },
    {
      id: "wer-ist-verantwortlich", type: "sentence", target: "Wer ist für das Projekt verantwortlich?",
      gloss: { es: "¿Quién es responsable del proyecto?", en: "Who's responsible for the project?" },
      distractors: ["von", "Verantwortung", "wem"],
      tags: ["work"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-geschaeftsbrief", type: "pattern", target: "Sehr geehrte Frau … / Sehr geehrter Herr … · Mit freundlichen Grüßen",
      gloss: { es: "la carta formal", en: "the formal letter" },
      pattern: {
        rule: {
          es: "Saludo: Sehr geehrte Frau … / Sehr geehrter Herr … / Sehr geehrte Damen und Herren, (coma y luego minúscula). Despedida: Mit freundlichen Grüßen, sin coma, y el nombre.",
          en: "Opening: Sehr geehrte Frau … / Sehr geehrter Herr … / Sehr geehrte Damen und Herren, (comma, then lower case). Closing: Mit freundlichen Grüßen, no comma, then your name.",
        },
        table: [["Frau", "Sehr geehrte Frau Weber,"], ["Herr", "Sehr geehrter Herr Schulz,"], ["unbekannt", "Sehr geehrte Damen und Herren,"], ["Schluss", "Mit freundlichen Grüßen"]],
      },
      question: {
        prompt: { es: "¿Cómo empieza una carta formal a un señor?", en: "How does a formal letter to a man begin?" },
        options: ["Sehr geehrter Herr Schulz,", "Sehr geehrte Herr Schulz,", "Liebe Herr Schulz,", "Sehr geehrtes Herr Schulz,"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "formal-writing"],
    },
    {
      id: "pat-passiv-modal", type: "pattern", target: "muss gemacht werden · kann repariert werden",
      gloss: { es: "la pasiva con verbos modales", en: "the passive with modal verbs" },
      pattern: {
        rule: {
          es: "Modal en 2.ª posición + participio + werden al final: Das Formular muss unterschrieben werden. En subordinada, el modal va último: …, dass es unterschrieben werden muss.",
          en: "Modal in 2nd position + participle + werden at the end: Das Formular muss unterschrieben werden. In a subordinate clause the modal is last: …, dass es unterschrieben werden muss.",
        },
        table: [["müssen", "Das muss gemacht werden."], ["können", "Das kann repariert werden."], ["dürfen", "Hier darf nicht geraucht werden."]],
      },
      question: {
        prompt: { es: "Completa con «unterschreiben»: «Das Formular muss heute ___ werden.»", en: "Complete with 'unterschreiben': 'Das Formular muss heute ___ werden.'" },
        options: ["unterschrieben", "unterschreiben", "unterschreibt", "geunterschrieben"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-doppelkonnektoren", type: "pattern", target: "zwar … aber · sowohl … als auch · weder … noch · nicht nur … sondern auch",
      gloss: { es: "conectores de dos partes", en: "two-part connectors" },
      pattern: {
        rule: {
          es: "zwar … aber (concesión), sowohl … als auch (los dos), weder … noch (ninguno), entweder … oder (uno u otro), nicht nur … sondern auch (no solo… sino también).",
          en: "zwar … aber (concession), sowohl … als auch (both), weder … noch (neither), entweder … oder (either … or), nicht nur … sondern auch (not only … but also).",
        },
        table: [["zwar … aber", "Es ist zwar teuer, aber gut."], ["entweder … oder", "Entweder du kommst, oder ich gehe."], ["nicht nur … sondern auch", "Sie spricht nicht nur Deutsch, sondern auch Russisch."]],
      },
      question: {
        prompt: { es: "«No solo trabaja, sino que también estudia» es…", en: "'He not only works but also studies' is…" },
        options: ["Er arbeitet nicht nur, sondern studiert auch.", "Er arbeitet nicht nur, aber studiert auch.", "Er arbeitet nicht nur, sondern auch studiert.", "Er arbeitet weder, sondern studiert auch."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "connectors"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-mailbox", type: "listening", register: "formal",
      target: "Guten Tag, hier spricht Frau Krüger von der Personalabteilung. Leider muss die Besprechung am Donnerstag verschoben werden. Bitte rufen Sie mich zurück.",
      gloss: {
        es: "Buenos días, habla la señora Krüger, de Recursos Humanos. Lamentablemente hay que aplazar la reunión del jueves. Por favor, devuélvame la llamada.",
        en: "Hello, this is Ms Krüger from HR. Unfortunately Thursday's meeting has to be postponed. Please call me back.",
      },
      question: {
        prompt: { es: "¿Qué pasa con la reunión del jueves?", en: "What's happening to Thursday's meeting?" },
        options: [
          { es: "Hay que aplazarla.", en: "It has to be postponed." },
          { es: "Empieza más temprano.", en: "It starts earlier." },
          { es: "Se cancela para siempre.", en: "It's cancelled for good." },
          { es: "Será en otra sala.", en: "It's in a different room." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work"],
    },
    {
      id: "dlg-unterlagen", type: "dialogue", register: "formal", target: "Ich melde mich bei Ihnen.",
      gloss: { es: "Me pondré en contacto con usted.", en: "I'll get back to you." },
      turns: [
        { who: "A", target: "Haben Sie die Unterlagen schon bekommen?", gloss: { es: "¿Ya recibió los documentos?", en: "Have you received the documents yet?" } },
        { who: "B", target: "Ja, vielen Dank. Ich melde mich bis Ende der Woche bei Ihnen.", gloss: { es: "Sí, muchas gracias. Me pondré en contacto con usted antes del fin de semana.", en: "Yes, thank you. I'll get back to you by the end of the week." } },
        { who: "A", target: "Prima, dann warte ich auf Ihre Rückmeldung.", gloss: { es: "Perfecto, entonces espero su respuesta.", en: "Great, I'll wait to hear from you then." } },
      ],
      question: {
        prompt: { es: "¿Cuándo dará B una respuesta?", en: "When will B get back to A?" },
        options: [
          { es: "Antes del fin de semana", en: "By the end of the week" },
          { es: "Hoy mismo", en: "Today" },
          { es: "El mes que viene", en: "Next month" },
          { es: "Cuando reciba los documentos", en: "When the documents arrive" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-konsequent", type: "bridge", onlyFor: "en", target: "konsequent",
      gloss: { es: "coherente, firme", en: "consistent / resolute" },
      question: {
        prompt: { es: "«Sie ist sehr konsequent» significa…", en: "'Sie ist sehr konsequent' means…" },
        options: [
          { es: "Es muy coherente (no cambia de línea).", en: "She's very consistent." },
          { es: "Es muy importante.", en: "She's very consequential." },
          { es: "Es muy obediente.", en: "She's very compliant." },
          { es: "Es muy rápida.", en: "She's very quick." },
        ],
        answer: 0,
      },
      note: { en: "konsequent = consistent, sticking to a line; 'consequential' is folgenreich." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
