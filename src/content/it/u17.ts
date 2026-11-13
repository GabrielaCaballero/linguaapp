import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u17",
  lang: "it",
  index: 17,
  cefr: "B1",
  title: { target: "Se fossi…", es: "Si yo fuera…", en: "If I were…" },
  canDo: [
    { es: "Puedo hablar de situaciones imaginarias y de lo que haría.", en: "I can talk about imaginary situations and what I would do." },
    { es: "Puedo expresar deseos y dar consejos con «se fossi in te».", en: "I can express wishes and give advice with 'se fossi in te'." },
    { es: "Sé usar el congiuntivo imperfetto con se, magari, come se y vorrei che.", en: "I can use the imperfect subjunctive with se, magari, come se and vorrei che." },
  ],
  icon: "💭",
  items: build("it", 17, "B1", [
    // ── Words ────────────────────────────────────────────────
    {
      id: "se", type: "word", pos: "other", target: "se",
      gloss: { es: "si (condición)", en: "if" },
      distractors: ["sé", "si", "sei"],
      note: { es: "Ojo: «si» en italiano es pronombre (si chiama); «sì» con acento = sí.", en: "Careful: 'si' is a pronoun (si chiama); 'sì' with an accent = yes." },
      tags: ["hypotheses"],
    },
    {
      id: "sogno", type: "word", pos: "noun", target: "il sogno", gender: "m", plural: "i sogni",
      gloss: { es: "el sueño (lo que se sueña)", en: "the dream" },
      distractors: ["il sonno", "il segno", "il cigno"],
      note: { es: "Ojo: il sonno = el sueño de dormir (ho sonno = tengo sueño).", en: "Careful: il sonno = sleepiness (ho sonno = I'm sleepy)." },
      tags: ["dreams"],
    },
    {
      id: "sognare", type: "word", pos: "verb", target: "sognare",
      gloss: { es: "soñar", en: "to dream" },
      distractors: ["segnare", "bagnare", "sorgere"],
      tags: ["dreams"],
    },
    {
      id: "magari", type: "word", pos: "other", target: "magari",
      gloss: { es: "¡ojalá! / quizás", en: "if only! / maybe" },
      distractors: ["mai", "maglia", "margine"],
      note: { es: "Solo, como respuesta: «Magari!» = ¡ojalá! Con congiuntivo: magari fosse vero.", en: "On its own: 'Magari!' = if only! With the subjunctive: magari fosse vero." },
      tags: ["wishes"],
    },
    {
      id: "lotteria", type: "word", pos: "noun", target: "la lotteria", gender: "f", plural: "le lotterie",
      gloss: { es: "la lotería", en: "the lottery" },
      distractors: ["la latteria", "la lotta", "il lotteria"],
      tags: ["dreams"],
    },
    {
      id: "vincere", type: "word", pos: "verb", target: "vincere",
      gloss: { es: "ganar (un premio, un partido)", en: "to win" },
      forms: { pp: "vinto", aux: "avere" },
      distractors: ["vivere", "vendere", "convincere"],
      note: { es: "Ganar dinero trabajando = guadagnare.", en: "To earn money = guadagnare." },
      tags: ["dreams"],
    },
    {
      id: "mondo", type: "word", pos: "noun", target: "il mondo", gender: "m", plural: "i mondi",
      gloss: { es: "el mundo", en: "the world" },
      distractors: ["la mondo", "il monte", "il modo"],
      tags: ["dreams", "travel"],
    },
    {
      id: "ricco", type: "word", pos: "adj", target: "ricco",
      gloss: { es: "rico/a (con dinero)", en: "rich" },
      forms: { m: "ricco", f: "ricca", mpl: "ricchi", fpl: "ricche" },
      accept: [{ text: "ricca" }],
      distractors: ["riccio", "pieno", "caro"],
      note: { es: "Comida rica = buono / squisito.", en: "Tasty food = buono / squisito, not ricco." },
      tags: ["dreams"],
    },
    {
      id: "se-fossi-in-te", type: "phrase", pos: "phrase", register: "informal", target: "se fossi in te",
      gloss: { es: "si yo fuera tú, en tu lugar", en: "if I were you" },
      accept: [{ text: "al posto tuo" }],
      distractors: ["se ero in te", "se sarei in te", "se fosse in te"],
      tags: ["advice", "hypotheses"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "se-avessi-tempo", type: "sentence", target: "Se avessi tempo, imparerei a suonare il pianoforte.",
      gloss: { es: "Si tuviera tiempo, aprendería a tocar el piano.", en: "If I had time, I'd learn to play the piano." },
      accept: [{ text: "Se avessi tempo, imparerei a suonare il piano." }],
      errors: [{ text: "Se avrei tempo, imparerei a suonare il pianoforte.", feedback: { es: "Tras «se» nunca va el condicional: se avessi (como «si tuviera»).", en: "Never the conditional after 'se': se avessi." } }],
      distractors: ["avrei", "imparassi", "abbia"],
      tags: ["hypotheses"],
    },
    {
      id: "se-vincessi", type: "sentence", target: "Se vincessi alla lotteria, girerei il mondo.",
      gloss: { es: "Si me ganara la lotería, viajaría por todo el mundo.", en: "If I won the lottery, I'd travel the world." },
      distractors: ["vincerei", "giravo", "vinco"],
      tags: ["hypotheses", "dreams"],
    },
    {
      id: "magari-fosse-vero", type: "phrase", pos: "phrase", target: "Magari fosse vero!",
      gloss: { es: "¡Ojalá fuera verdad!", en: "If only it were true!" },
      distractors: ["Magari sia vero!", "Magari era vero!", "Magari è vero!"],
      tags: ["wishes"],
    },
    {
      id: "vorrei-che-restassi", type: "sentence", register: "informal", target: "Vorrei che tu restassi.",
      gloss: { es: "Quisiera que te quedaras.", en: "I'd like you to stay." },
      errors: [{ text: "Vorrei che tu resti.", feedback: { es: "Tras «vorrei che» va el congiuntivo imperfetto: restassi.", en: "After 'vorrei che' use the imperfect subjunctive: restassi." } }],
      distractors: ["resti", "restare", "restavi"],
      tags: ["wishes"],
    },
    {
      id: "se-fossi-in-te-non", type: "sentence", register: "informal", target: "Se fossi in te, non lo farei.",
      gloss: { es: "Si yo fuera tú, no lo haría.", en: "If I were you, I wouldn't do it." },
      accept: [{ text: "Al posto tuo, non lo farei." }, { text: "Al tuo posto, non lo farei." }],
      distractors: ["sarei", "facessi", "ero"],
      tags: ["advice", "hypotheses"],
    },
    {
      id: "come-se", type: "sentence", target: "Era come se non mi vedesse.",
      gloss: { es: "Era como si no me viera.", en: "It was as if she didn't see me." },
      accept: [{ text: "Era come se non mi vedesse affatto." }],
      distractors: ["vedeva", "vede", "vedrebbe"],
      tags: ["hypotheses"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-congiuntivo-imperfetto", type: "pattern", target: "parlassi · prendessi · dormissi · fossi",
      gloss: { es: "el congiuntivo imperfetto", en: "the imperfect subjunctive" },
      pattern: {
        rule: {
          es: "Raíz + -assi / -essi / -issi, -assi, -asse, -assimo, -aste, -assero (como «hablara / tuviera»). Irregulares: fossi, facessi, dicessi, stessi, dessi.",
          en: "Stem + -assi / -essi / -issi, -assi, -asse, -assimo, -aste, -assero. Irregular: fossi, facessi, dicessi, stessi, dessi.",
        },
        table: [["", "parlare", "avere", "essere"], ["io / tu", "parlassi", "avessi", "fossi"], ["lui / lei", "parlasse", "avesse", "fosse"], ["noi", "parlassimo", "avessimo", "fossimo"], ["loro", "parlassero", "avessero", "fossero"]],
      },
      question: {
        prompt: { es: "Completa con «essere»: «Se io ___ ricco, comprerei una casa al mare.»", en: "Complete with 'essere': 'Se io ___ ricco, comprerei una casa al mare.'" },
        options: ["fossi", "sarei", "ero", "sia"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "congiuntivo"],
    },
    {
      id: "pat-periodo-ipotetico", type: "pattern", target: "Se ho tempo, vengo. · Se avessi tempo, verrei.",
      gloss: { es: "frases con «se» (real y posible)", en: "'if' sentences (real and possible)" },
      pattern: {
        rule: {
          es: "Real: se + presente → presente/futuro (se piove, resto a casa). Posible o imaginario: se + congiuntivo imperfetto → condicional (se piovesse, resterei a casa).",
          en: "Real: se + present → present/future (se piove, resto a casa). Possible or imaginary: se + imperfect subjunctive → conditional (se piovesse, resterei a casa).",
        },
        table: [["reale", "se + presente", "presente / futuro"], ["possibile", "se + congiuntivo imperfetto", "condizionale"]],
      },
      question: {
        prompt: { es: "Completa con «avere»: «Se ___ più soldi, viaggerei di più.»", en: "Complete with 'avere': 'Se ___ più soldi, viaggerei di più.'" },
        options: ["avessi", "avrei", "ho", "abbia"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "hypotheses"],
    },
    {
      id: "pat-magari-come-se", type: "pattern", target: "magari fosse… · come se fosse… · vorrei che fosse…",
      gloss: { es: "deseos y comparaciones irreales", en: "wishes and unreal comparisons" },
      pattern: {
        rule: {
          es: "magari (ojalá), come se (como si) y vorrei che (quisiera que) van con congiuntivo imperfetto, igual que en español.",
          en: "magari (if only), come se (as if) and vorrei che (I'd like … to) take the imperfect subjunctive.",
        },
        table: [["magari", "Magari fosse vero!"], ["come se", "Parla come se fosse il capo."], ["vorrei che", "Vorrei che tu venissi."]],
      },
      question: {
        prompt: { es: "«¡Ojalá estuviera de vacaciones!» es…", en: "'If only I were on holiday!' is…" },
        options: ["Magari fossi in vacanza!", "Magari sono in vacanza!", "Magari sarei in vacanza!", "Magari sia in vacanza!"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "wishes"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-insegnante", type: "listening",
      target: "Se potessi cambiare lavoro, farei l'insegnante. Mi piacerebbe lavorare con i bambini, ma per ora non me lo posso permettere.",
      gloss: {
        es: "Si pudiera cambiar de trabajo, sería maestra. Me gustaría trabajar con niños, pero por ahora no me lo puedo permitir.",
        en: "If I could change jobs, I'd be a teacher. I'd like to work with children, but for now I can't afford to.",
      },
      question: {
        prompt: { es: "¿Qué trabajo le gustaría hacer?", en: "What job would the speaker like to do?" },
        options: [
          { es: "Maestro/a", en: "Teacher" },
          { es: "Médico/a de niños", en: "Children's doctor" },
          { es: "Cocinero/a", en: "Cook" },
          { es: "No quiere cambiar", en: "Doesn't want to change" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "hypotheses"],
    },
    {
      id: "dlg-milione", type: "dialogue", register: "informal", target: "Cosa faresti?",
      gloss: { es: "¿Qué harías?", en: "What would you do?" },
      turns: [
        { who: "A", target: "Cosa faresti se vincessi un milione?", gloss: { es: "¿Qué harías si te ganaras un millón?", en: "What would you do if you won a million?" } },
        { who: "B", target: "Smetterei di lavorare e andrei a vivere in Sardegna. E tu?", gloss: { es: "Dejaría de trabajar y me iría a vivir a Cerdeña. ¿Y tú?", en: "I'd stop working and go and live in Sardinia. And you?" } },
        { who: "A", target: "Io ne regalerei quasi tutto.", gloss: { es: "Yo regalaría casi todo.", en: "I'd give almost all of it away." } },
        { who: "B", target: "Sei troppo buono!", gloss: { es: "¡Eres demasiado bueno!", en: "You're too kind!" } },
      ],
      question: {
        prompt: { es: "¿Qué haría B con el millón?", en: "What would B do with the million?" },
        options: [
          { es: "Dejaría de trabajar y se iría a vivir a Cerdeña.", en: "Stop working and move to Sardinia." },
          { es: "Regalaría casi todo.", en: "Give almost all of it away." },
          { es: "Compraría una casa en la ciudad.", en: "Buy a house in town." },
          { es: "Seguiría trabajando igual.", en: "Keep working as before." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "hypotheses"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-sonno", type: "bridge", onlyFor: "es", target: "il sonno",
      gloss: { es: "el sueño (ganas de dormir)", en: "sleepiness / sleep" },
      question: {
        prompt: { es: "«Ho sonno» significa…", en: "'Ho sonno' means…" },
        options: [
          { es: "Tengo sueño.", en: "I'm sleepy." },
          { es: "Tuve un sueño.", en: "I had a dream." },
          { es: "Estoy soñando.", en: "I'm dreaming." },
          { es: "Tengo un sueño (una meta).", en: "I have a dream (a goal)." },
        ],
        answer: 0,
      },
      note: { es: "«Sueño» son dos palabras: il sonno (dormir: ho sonno) e il sogno (soñar: un bel sogno)." },
      exercises: ["guess", "question"], tags: ["bridge", "transfer-tip"],
    },
  ]),
};
