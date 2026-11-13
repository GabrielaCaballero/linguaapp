import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u13",
  lang: "de",
  index: 13,
  cefr: "B1",
  title: { target: "Arbeit und Beruf", es: "Trabajo y profesión", en: "Work and careers" },
  canDo: [
    { es: "Puedo hablar de mi trabajo, mi experiencia y lo que me gustaría hacer.", en: "I can talk about my job, my experience and what I'd like to do." },
    { es: "Puedo pedir cosas con cortesía y responder en una entrevista sencilla.", en: "I can ask for things politely and answer in a simple interview." },
    { es: "Sé usar würde, hätte, könnte, frases con dass y seit + presente.", en: "I can use würde, hätte, könnte, dass clauses and seit + present." },
  ],
  icon: "💼",
  items: build("de", 13, "B1", [
    // ── Work words ───────────────────────────────────────────
    {
      id: "beruf", type: "word", pos: "noun", target: "der Beruf", gender: "m", plural: "die Berufe",
      gloss: { es: "la profesión", en: "the profession / occupation" },
      distractors: ["die Beruf", "der Ruf", "der Betrieb"],
      note: { es: "Was sind Sie von Beruf? = ¿A qué se dedica?", en: "Was sind Sie von Beruf? = What do you do (for a living)?" },
      tags: ["work", "goethe-a1"],
    },
    {
      id: "stelle", type: "word", pos: "noun", target: "die Stelle", gender: "f", plural: "die Stellen",
      gloss: { es: "el puesto (de trabajo)", en: "the position / job opening" },
      distractors: ["der Stelle", "die Stille", "die Stufe"],
      tags: ["work", "goethe-b1"],
    },
    {
      id: "bewerbung", type: "word", pos: "noun", target: "die Bewerbung", gender: "f", plural: "die Bewerbungen",
      gloss: { es: "la solicitud de empleo (postulación)", en: "the job application" },
      distractors: ["der Bewerbung", "die Bewertung", "die Bewegung"],
      tags: ["work", "goethe-b1"],
    },
    {
      id: "sich-bewerben", type: "word", pos: "verb", target: "sich bewerben",
      gloss: { es: "postularse (a un puesto)", en: "to apply (for a job)" },
      forms: { er: "bewirbt sich", pp: "hat sich beworben" },
      distractors: ["sich bewegen", "sich beschweren", "bewerten"],
      note: { es: "sich bewerben um / auf eine Stelle; e → i: er bewirbt sich.", en: "sich bewerben um / auf eine Stelle; e → i: er bewirbt sich." },
      tags: ["work", "reflexive", "goethe-b1"],
    },
    {
      id: "lebenslauf", type: "word", pos: "noun", target: "der Lebenslauf", gender: "m", plural: "die Lebensläufe",
      gloss: { es: "el currículum", en: "the CV (résumé)" },
      distractors: ["das Lebenslauf", "der Lebensunterhalt", "der Lauf"],
      tags: ["work", "compound", "goethe-b1"],
    },
    {
      id: "firma", type: "word", pos: "noun", target: "die Firma", gender: "f", plural: "die Firmen",
      gloss: { es: "la empresa", en: "the company / firm" },
      distractors: ["der Firma", "die Farm", "die Firmung"],
      note: { es: "Ojo: una firma (en un papel) = die Unterschrift.", en: "Plural: die Firmen." },
      tags: ["work", "goethe-a2"],
    },
    {
      id: "kollege", type: "word", pos: "noun", target: "der Kollege", gender: "m", plural: "die Kollegen",
      gloss: { es: "el/la colega (del trabajo)", en: "the colleague" },
      accept: [{ text: "die Kollegin" }],
      distractors: ["die Kollege", "das Kollegium", "der Kohl"],
      tags: ["work", "goethe-a2"],
    },
    {
      id: "gehalt", type: "word", pos: "noun", target: "das Gehalt", gender: "n", plural: "die Gehälter",
      gloss: { es: "el sueldo, el salario", en: "the salary" },
      distractors: ["der Gehalt", "die Haltung", "der Halt"],
      note: { es: "Ojo: der Gehalt = el contenido (de una sustancia).", en: "Careful: der Gehalt = content (e.g. fat content)." },
      tags: ["work", "goethe-b1"],
    },
    {
      id: "verdienen", type: "word", pos: "verb", target: "verdienen",
      gloss: { es: "ganar (dinero) / merecer", en: "to earn / to deserve" },
      forms: { pp: "hat verdient" },
      distractors: ["dienen", "verdanken", "verbinden"],
      tags: ["work", "goethe-a2"],
    },
    {
      id: "erfahrung", type: "word", pos: "noun", target: "die Erfahrung", gender: "f", plural: "die Erfahrungen",
      gloss: { es: "la experiencia", en: "the experience" },
      distractors: ["der Erfahrung", "die Ernährung", "die Erfindung"],
      tags: ["work", "goethe-b1"],
    },
    {
      id: "selbststaendig", type: "word", pos: "adj", target: "selbstständig",
      gloss: { es: "autónomo/a, independiente", en: "self-employed / independent" },
      accept: [{ text: "selbständig" }],
      distractors: ["selbstverständlich", "ständig", "selten"],
      note: { es: "Se escriben bien las dos formas: selbstständig y selbständig.", en: "Both spellings are correct: selbstständig and selbständig." },
      tags: ["work", "goethe-b1"],
    },
    {
      id: "puenktlich", type: "word", pos: "adj", target: "pünktlich",
      gloss: { es: "puntual", en: "punctual / on time" },
      distractors: ["plötzlich", "peinlich", "nützlich"],
      tags: ["work", "goethe-a2"],
    },
    {
      id: "arbeitslos", type: "word", pos: "adj", target: "arbeitslos",
      gloss: { es: "desempleado/a, sin trabajo", en: "unemployed" },
      distractors: ["arbeitsam", "atemlos", "arbeitsfrei"],
      tags: ["work", "goethe-a2"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "wuerde-gern-ausland", type: "sentence", target: "Ich würde gern im Ausland arbeiten.",
      gloss: { es: "Me gustaría trabajar en el extranjero.", en: "I'd like to work abroad." },
      accept: [{ text: "Ich würde gerne im Ausland arbeiten." }, { text: "Ich möchte gern im Ausland arbeiten." }],
      errors: [{ text: "Ich werde gern im Ausland arbeiten.", feedback: { es: "werde = futuro; para un deseo: würde (con umlaut).", en: "werde = future; for a wish: würde (with umlaut)." } }],
      distractors: ["werde", "wurde", "Ausländer"],
      tags: ["work", "konjunktiv2"],
    },
    {
      id: "koennten-sie-helfen", type: "sentence", register: "formal", target: "Könnten Sie mir helfen?",
      gloss: { es: "¿Podría ayudarme?", en: "Could you help me?" },
      errors: [{ text: "Könnten Sie mich helfen?", feedback: { es: "helfen va con dativo: mir.", en: "helfen takes the dative: mir." } }],
      distractors: ["Können", "mich", "Konnten"],
      tags: ["polite", "konjunktiv2"],
    },
    {
      id: "haetten-sie-zeit", type: "sentence", register: "formal", target: "Hätten Sie kurz Zeit?",
      gloss: { es: "¿Tendría un momento?", en: "Would you have a moment?" },
      distractors: ["Haben", "Hatten", "Zeiten"],
      tags: ["polite", "konjunktiv2"],
    },
    {
      id: "um-stelle-beworben", type: "sentence", target: "Ich habe mich um die Stelle beworben.",
      gloss: { es: "Me postulé al puesto.", en: "I've applied for the job." },
      accept: [{ text: "Ich habe mich auf die Stelle beworben." }, { text: "Ich habe mich für die Stelle beworben." }],
      errors: [{ text: "Ich habe mir um die Stelle beworben.", feedback: { es: "Reflexivo en acusativo: ich habe mich beworben.", en: "Accusative reflexive: ich habe mich beworben." } }],
      distractors: ["mir", "beworbt", "bewerbe"],
      tags: ["work", "reflexive"],
    },
    {
      id: "er-sagt-dass", type: "sentence", target: "Er sagt, dass er morgen kommt.",
      gloss: { es: "Dice que viene mañana.", en: "He says he's coming tomorrow." },
      errors: [{ text: "Er sagt, dass er kommt morgen.", feedback: { es: "Tras dass, el verbo va al final: dass er morgen kommt.", en: "After dass, the verb goes last: dass er morgen kommt." } }],
      distractors: ["das", "kommen", "morgens"],
      tags: ["dass", "word-order"],
    },
    {
      id: "seit-drei-jahren", type: "sentence", target: "Ich arbeite seit drei Jahren bei einer Firma in München.",
      gloss: { es: "Trabajo desde hace tres años en una empresa de Múnich.", en: "I've been working for a company in Munich for three years." },
      errors: [{ text: "Ich arbeite für drei Jahre bei einer Firma in München.", feedback: { es: "Algo que sigue: seit + dativo + presente.", en: "Ongoing: seit + dative + present (not 'für')." } }],
      distractors: ["für", "seid", "eine"],
      tags: ["work", "seit"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-konj2-hoeflich", type: "pattern", target: "würde · hätte · wäre · könnte",
      gloss: { es: "Konjunktiv II para cortesía y deseos", en: "Konjunktiv II for politeness and wishes" },
      pattern: {
        rule: {
          es: "würde + infinitivo (ich würde gern…), y formas propias para haben, sein y los modales: hätte, wäre, könnte, müsste, dürfte. Suena más cortés: Könnten Sie…?",
          en: "würde + infinitive (ich würde gern…), plus own forms for haben, sein and modals: hätte, wäre, könnte, müsste, dürfte. It sounds more polite: Könnten Sie…?",
        },
        table: [["", "haben", "sein", "können", "werden"], ["ich", "hätte", "wäre", "könnte", "würde"], ["du", "hättest", "wärst", "könntest", "würdest"], ["er / sie", "hätte", "wäre", "könnte", "würde"], ["wir / Sie", "hätten", "wären", "könnten", "würden"]],
      },
      question: {
        prompt: { es: "«¿Podría abrir la ventana?» (formal) es…", en: "'Could you open the window?' (formal) is…" },
        options: ["Könnten Sie das Fenster öffnen?", "Konnten Sie das Fenster öffnen?", "Könnten Sie das Fenster öffnet?", "Kannten Sie das Fenster öffnen?"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "konjunktiv2"],
    },
    {
      id: "pat-dass", type: "pattern", target: "Ich glaube, dass er recht hat.",
      gloss: { es: "frases con dass (verbo al final)", en: "dass clauses (verb at the end)" },
      pattern: {
        rule: {
          es: "dass = que; el verbo conjugado va al final. Con modal o tiempo compuesto, el auxiliar es lo último: …, dass er kommen kann / gekommen ist.",
          en: "dass = that; the conjugated verb goes last. With a modal or compound tense, the auxiliary is the very last word: …, dass er kommen kann / gekommen ist.",
        },
        table: [["Er hat recht.", "…, dass er recht hat."], ["Sie kann gut kochen.", "…, dass sie gut kochen kann."], ["Er ist gekommen.", "…, dass er gekommen ist."]],
      },
      question: {
        prompt: { es: "Elige: «Ich glaube, dass …»", en: "Choose: 'Ich glaube, dass …'" },
        options: ["er recht hat.", "er hat recht.", "hat er recht.", "recht er hat."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "dass", "word-order"],
    },
    {
      id: "pat-seit", type: "pattern", target: "Ich wohne seit zwei Jahren hier.",
      gloss: { es: "seit + presente (desde hace)", en: "seit + present (for / since)" },
      pattern: {
        rule: {
          es: "Para algo que empezó y sigue: seit + dativo + presente. Ich lerne seit einem Jahr Deutsch = estudio alemán desde hace un año.",
          en: "For something that started and is still going: seit + dative + present. Ich lerne seit einem Jahr Deutsch = I've been learning German for a year.",
        },
        table: [["seit einem Jahr", "for a year / desde hace un año"], ["seit Montag", "since Monday / desde el lunes"], ["seit zwei Wochen", "for two weeks / desde hace dos semanas"]],
      },
      question: {
        prompt: { es: "«Vivo aquí desde hace dos años» es…", en: "'I've lived here for two years' is…" },
        options: ["Ich wohne seit zwei Jahren hier.", "Ich wohne für zwei Jahre hier.", "Ich wohne vor zwei Jahren hier.", "Ich wohne seit zwei Jahre hier."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "seit"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-stellenanzeige", type: "listening",
      target: "Wir suchen ab sofort eine freundliche Verkäuferin oder einen Verkäufer in Teilzeit. Erfahrung ist von Vorteil, aber nicht notwendig.",
      gloss: {
        es: "Buscamos desde ya un vendedor o una vendedora amable a media jornada. La experiencia es una ventaja, pero no es necesaria.",
        en: "We're looking for a friendly part-time sales assistant to start immediately. Experience is an advantage but not essential.",
      },
      question: {
        prompt: { es: "¿Hace falta experiencia?", en: "Is experience required?" },
        options: [
          { es: "Ayuda, pero no es necesaria.", en: "It helps, but it isn't essential." },
          { es: "Sí, es obligatoria.", en: "Yes, it's required." },
          { es: "No, prefieren gente sin experiencia.", en: "No, they prefer people without experience." },
          { es: "No lo dice.", en: "The ad doesn't say." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work"],
    },
    {
      id: "dlg-vorstellung", type: "dialogue", register: "formal", target: "Wann könnten Sie anfangen?",
      gloss: { es: "¿Cuándo podría empezar?", en: "When could you start?" },
      turns: [
        { who: "A", target: "Warum möchten Sie bei uns arbeiten?", gloss: { es: "¿Por qué quiere trabajar con nosotros?", en: "Why would you like to work for us?" } },
        { who: "B", target: "Ich interessiere mich sehr für Ihre Produkte, und ich würde gern im Team arbeiten.", gloss: { es: "Me interesan mucho sus productos y me gustaría trabajar en equipo.", en: "I'm very interested in your products, and I'd like to work in a team." } },
        { who: "A", target: "Wann könnten Sie anfangen?", gloss: { es: "¿Cuándo podría empezar?", en: "When could you start?" } },
        { who: "B", target: "Ab dem ersten März.", gloss: { es: "A partir del primero de marzo.", en: "From the first of March." } },
      ],
      question: {
        prompt: { es: "¿Cuándo podría empezar B?", en: "When could B start?" },
        options: [
          { es: "A partir del primero de marzo", en: "From the first of March" },
          { es: "Enseguida", en: "Right away" },
          { es: "En mayo", en: "In May" },
          { es: "No lo sabe todavía", en: "B doesn't know yet" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-firma", type: "bridge", onlyFor: "es", target: "die Firma",
      gloss: { es: "la empresa", en: "the company" },
      question: {
        prompt: { es: "«Ich arbeite bei einer großen Firma» significa…", en: "'Ich arbeite bei einer großen Firma' means…" },
        options: [
          { es: "Trabajo en una empresa grande.", en: "I work for a big company." },
          { es: "Trabajo con una firma importante.", en: "I work with an important signature." },
          { es: "Trabajo en una granja grande.", en: "I work on a big farm." },
          { es: "Trabajo en una fábrica grande.", en: "I work in a big factory." },
        ],
        answer: 0,
      },
      note: { es: "die Firma = la empresa; la firma (en un documento) = die Unterschrift." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
    {
      id: "br-eventuell", type: "bridge", onlyFor: "en", target: "eventuell",
      gloss: { es: "posiblemente", en: "possibly / maybe" },
      question: {
        prompt: { es: "«Ich komme eventuell später» significa…", en: "'Ich komme eventuell später' means…" },
        options: [
          { es: "Puede que llegue más tarde.", en: "I might come later." },
          { es: "Al final llegaré más tarde.", en: "I'll eventually come later." },
          { es: "Seguro que llego más tarde.", en: "I'll definitely come later." },
          { es: "Llegué más tarde.", en: "I came later." },
        ],
        answer: 0,
      },
      note: { en: "eventuell = possibly; 'eventually' is schließlich or irgendwann." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
