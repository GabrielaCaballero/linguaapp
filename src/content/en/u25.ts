import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u25",
  lang: "en",
  index: 25,
  cefr: "C1",
  title: { target: "Negotiating at work", es: "Negociar en el trabajo", en: "Negotiating at work" },
  canDo: [
    { es: "Puedo negociar condiciones con tacto, sin sonar brusco/a.", en: "I can negotiate terms tactfully without sounding blunt." },
    { es: "Puedo proponer, rechazar y hacer concesiones en reuniones y correos formales.", en: "I can propose, reject and concede in meetings and formal emails." },
    { es: "Sé suavizar lo que digo (would, I'm afraid, a bit) y usar condicionales formales como «Should you need…».", en: "I can soften what I say (would, I'm afraid, a bit) and use formal conditionals like 'Should you need…'." },
  ],
  icon: "🤝",
  items: build("en", 25, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "leverage", type: "word", target: "leverage",
      gloss: { es: "poder de negociación, ventaja", en: "leverage" },
      distractors: ["average", "beverage", "level"],
      tags: ["negotiation", "work"],
    },
    {
      id: "deal-breaker", type: "word", target: "deal-breaker",
      gloss: { es: "condición innegociable (sin la cual no hay acuerdo)", en: "deal-breaker" },
      accept: [{ text: "dealbreaker" }, { text: "deal breaker" }],
      distractors: ["deal-maker", "breakthrough", "ice-breaker"],
      tags: ["negotiation"],
    },
    {
      id: "counteroffer", type: "word", target: "counteroffer",
      gloss: { es: "contraoferta", en: "counteroffer" },
      accept: [{ text: "counter-offer" }],
      distractors: ["counterpart", "overcounter", "contra offer"],
      tags: ["negotiation"],
    },
    {
      id: "concession", type: "word", target: "concession",
      gloss: { es: "concesión (algo que cedes)", en: "concession" },
      distractors: ["concussion", "confession", "concert"],
      note: { es: "«make a concession» = hacer una concesión." },
      tags: ["negotiation"],
    },
    {
      id: "terms", type: "word", target: "terms",
      gloss: { es: "condiciones (de un contrato o acuerdo)", en: "terms (of an agreement)" },
      distractors: ["terminals", "turns", "conditions's"],
      note: { es: "terms and conditions = términos y condiciones; payment terms = condiciones de pago." },
      tags: ["negotiation", "contracts"],
    },
    {
      id: "meet-halfway", type: "phrase", pos: "phrase", target: "meet someone halfway",
      gloss: { es: "llegar a un punto medio, ceder cada uno un poco", en: "to meet someone halfway" },
      distractors: ["meet someone in half", "find someone halfway", "meet halfway someone's"],
      tags: ["negotiation", "idioms"],
    },
    {
      id: "bottom-line", type: "word", target: "bottom line",
      gloss: { es: "lo esencial; el mínimo aceptable; el resultado neto", en: "bottom line" },
      distractors: ["base line", "deadline", "top line"],
      tags: ["negotiation", "money"],
    },
    {
      id: "non-negotiable", type: "word", pos: "adj", target: "non-negotiable",
      gloss: { es: "innegociable", en: "non-negotiable" },
      accept: [{ text: "nonnegotiable" }],
      distractors: ["unnegotiable", "denegotiable", "negotiable"],
      tags: ["negotiation"],
    },
    {
      id: "im-afraid", type: "phrase", pos: "phrase", target: "I'm afraid that won't be possible.",
      gloss: { es: "Lamentablemente, eso no va a ser posible.", en: "I'm afraid that won't be possible." },
      accept: [{ text: "I'm afraid that's not possible." }, { text: "Unfortunately, that won't be possible." }],
      distractors: ["I'm scared that won't be possible.", "I fear that won't possible.", "I'm afraid of that won't be possible."],
      note: { es: "«I'm afraid» aquí no es miedo: suaviza una mala noticia." },
      grammar: ["en-g-diplomatic"],
      tags: ["negotiation", "diplomacy", "chunk"],
    },
    {
      id: "wed-be-willing", type: "phrase", pos: "phrase", target: "We'd be willing to consider…",
      gloss: { es: "Estaríamos dispuestos a considerar…", en: "We'd be willing to consider…" },
      accept: [{ text: "We would be willing to consider…" }, { text: "We'd be open to considering…" }],
      distractors: ["We'd be wanting to consider…", "We'd willing to consider…", "We'll be will to consider…"],
      grammar: ["en-g-diplomatic"],
      tags: ["negotiation", "diplomacy", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "that-would-be-difficult", type: "sentence", target: "That would be a little difficult for us.",
      gloss: { es: "Eso nos resultaría un poco difícil (= no).", en: "That would be a little difficult for us." },
      accept: [{ text: "That would be a bit difficult for us." }, { text: "That might be a little difficult for us." }],
      errors: [{ text: "That is impossible for us.", feedback: { es: "Correcto, pero demasiado directo en una negociación; «would be a little difficult» suaviza el no." }, ruleId: "en-g-diplomatic" }],
      distractors: ["will", "few", "to"],
      grammar: ["en-g-diplomatic"],
      tags: ["negotiation", "diplomacy"],
    },
    {
      id: "we-were-hoping", type: "sentence", target: "We were hoping for a slightly lower price.",
      gloss: { es: "Esperábamos un precio algo más bajo.", en: "We were hoping for a slightly lower price." },
      accept: [{ text: "We were hoping for a somewhat lower price." }],
      distractors: ["hope", "less", "bit"],
      grammar: ["en-g-diplomatic"],
      annot: { "were hoping": { es: "pasado continuo de cortesía: suena menos exigente", en: "polite past continuous: less demanding" } },
      tags: ["negotiation", "diplomacy"],
    },
    {
      id: "wouldnt-it-make-sense", type: "sentence", target: "Wouldn't it make more sense to split the costs?",
      gloss: { es: "¿No tendría más sentido repartir los gastos?", en: "Wouldn't it make more sense to split the costs?" },
      distractors: ["have", "sense's", "divide"],
      grammar: ["en-g-diplomatic"],
      tags: ["negotiation", "diplomacy"],
    },
    {
      id: "should-you-need", type: "sentence", target: "Should you need any further information, please let me know.",
      gloss: { es: "Si necesitara más información, no dude en avisarme.", en: "Should you need any further information, please let me know." },
      accept: [{ text: "If you need any further information, please let me know." }, { text: "Should you require any further information, please let me know." }],
      errors: [{ text: "Should you needed any further information, please let me know.", feedback: { es: "Tras «Should you» va el verbo base: Should you need." }, ruleId: "en-g-conditional-inversion" }],
      distractors: ["needed", "If", "farther"],
      grammar: ["en-g-conditional-inversion"],
      annot: { "Should you need": { es: "= If you need (condicional formal con inversión)", en: "= If you need (formal inverted conditional)" } },
      tags: ["negotiation", "email", "formal"],
    },
    {
      id: "were-we-to-accept", type: "sentence", target: "Were we to accept these terms, we would need a longer contract.",
      gloss: { es: "Si aceptáramos estas condiciones, necesitaríamos un contrato más largo.", en: "Were we to accept these terms, we would need a longer contract." },
      accept: [{ text: "If we were to accept these terms, we would need a longer contract." }, { text: "If we accepted these terms, we would need a longer contract." }],
      distractors: ["Was", "will", "accepting"],
      grammar: ["en-g-conditional-inversion"],
      tags: ["negotiation", "formal"],
    },
    {
      id: "had-we-known", type: "sentence", target: "Had we known about the delay, we would have planned differently.",
      gloss: { es: "Si hubiéramos sabido del retraso, lo habríamos planificado de otra manera.", en: "Had we known about the delay, we would have planned differently." },
      accept: [{ text: "If we had known about the delay, we would have planned differently." }],
      errors: [{ text: "Had we know about the delay, we would have planned differently.", feedback: { es: "Tras «Had we» va el participio: known." }, ruleId: "en-g-conditional-inversion" }],
      distractors: ["Have", "know", "different"],
      grammar: ["en-g-conditional-inversion", "en-g-third-conditional"],
      tags: ["negotiation", "formal"],
    },
    {
      id: "provided-that", type: "sentence", target: "We can agree to that, provided that payment is made within thirty days.",
      gloss: { es: "Podemos aceptarlo, siempre que el pago se haga en un plazo de treinta días.", en: "We can agree to that, provided that payment is made within thirty days." },
      accept: [{ text: "We can agree to that, provided payment is made within thirty days." }, { text: "We can agree to that, as long as payment is made within thirty days." }],
      distractors: ["providing", "in", "will"],
      grammar: ["en-g-conditional-inversion"],
      tags: ["negotiation", "conditions"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-diplomatic", type: "pattern", target: "would · I'm afraid · a little · slightly · We were hoping…",
      gloss: { es: "suavizar el lenguaje (inglés diplomático)", en: "softening language" },
      pattern: {
        rule: {
          es: "En el inglés profesional, decir «no» o pedir algo de forma directa suena agresivo. Se suaviza con would / could, con «I'm afraid», con cuantificadores pequeños (a little, slightly), con preguntas negativas («Wouldn't it be better…?») y con tiempos «distanciados» («We were wondering…»).",
          en: "In professional English, a blunt 'no' or a direct demand sounds aggressive. Soften with would / could, 'I'm afraid', small quantifiers (a little, slightly), negative questions ('Wouldn't it be better…?') and distancing tenses ('We were wondering…').",
        },
        table: [["directo", "diplomático"], ["That's too expensive.", "That's a little more than we expected."], ["No.", "I'm afraid that won't be possible."], ["We want a discount.", "We were hoping for a small discount."], ["You're wrong.", "I'm not sure that's quite right."]],
      },
      question: {
        prompt: { es: "¿Cuál es la forma más diplomática de rechazar una fecha?", en: "Which is the most diplomatic way to reject a date?" },
        options: ["I'm afraid Friday would be a little difficult for us.", "Friday is impossible.", "We don't want Friday.", "Friday is bad, no."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-diplomatic"], tags: ["grammar", "diplomacy"],
    },
    {
      id: "pat-conditional-inversion", type: "pattern", target: "Should you… · Were we to… · Had I known…",
      gloss: { es: "condicionales formales con inversión", en: "inverted conditionals" },
      pattern: {
        rule: {
          es: "En registro formal, el «if» se puede eliminar invirtiendo el auxiliar: Should + sujeto + verbo base (= if… happens to), Were + sujeto + to + verbo (= if… were to), Had + sujeto + participio (= if… had). Es típico de correos, contratos y discursos.",
          en: "In formal English, 'if' can be dropped by inverting the auxiliary: Should + subject + base verb, Were + subject + to + verb, Had + subject + past participle. Typical of emails, contracts and speeches.",
        },
        table: [["con if", "con inversión"], ["If you have questions,", "Should you have questions,"], ["If we were to sign,", "Were we to sign,"], ["If I had known,", "Had I known,"]],
      },
      question: {
        prompt: { es: "Reescribe en estilo formal: «If you require assistance, call us.»", en: "Rewrite formally: 'If you require assistance, call us.'" },
        options: ["Should you require assistance, call us.", "Should you required assistance, call us.", "Were you require assistance, call us.", "Had you require assistance, call us."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-conditional-inversion"], tags: ["grammar", "conditionals", "formal"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-negotiation", type: "dialogue", target: "Perhaps we could meet halfway.",
      gloss: { es: "Quizás podríamos llegar a un punto medio.", en: "Perhaps we could meet halfway." },
      turns: [
        { who: "A", target: "We were hoping you could lower the price by fifteen percent.", gloss: { es: "Esperábamos que pudieran bajar el precio un quince por ciento.", en: "We were hoping you could lower the price by fifteen percent." } },
        { who: "B", target: "I'm afraid fifteen would be difficult. Our margins are already quite tight.", gloss: { es: "Me temo que un quince sería difícil. Nuestros márgenes ya son bastante ajustados.", en: "I'm afraid fifteen would be difficult. Our margins are already quite tight." } },
        { who: "A", target: "I understand. Perhaps we could meet halfway?", gloss: { es: "Entiendo. ¿Quizás podríamos llegar a un punto medio?", en: "I understand. Perhaps we could meet halfway?" } },
        { who: "B", target: "We'd be willing to consider eight percent, provided you sign a two-year contract.", gloss: { es: "Estaríamos dispuestos a considerar un ocho por ciento, siempre que firmen un contrato de dos años.", en: "We'd be willing to consider eight percent, provided you sign a two-year contract." } },
        { who: "A", target: "That sounds reasonable. Let me run it by my team.", gloss: { es: "Me parece razonable. Déjeme consultarlo con mi equipo.", en: "That sounds reasonable. Let me run it by my team." } },
      ],
      question: {
        prompt: { es: "¿Qué condición pone B para el descuento?", en: "What condition does B set for the discount?" },
        options: [
          { es: "Un contrato de dos años", en: "A two-year contract" },
          { es: "Pagar por adelantado", en: "Paying in advance" },
          { es: "Comprar el doble", en: "Ordering twice as much" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "negotiation"],
    },
    {
      id: "lis-email", type: "listening", target: "Thank you for your proposal. While we appreciate the flexibility on delivery, the payment terms remain a deal-breaker for us. Should you be able to revise them, we would be happy to move forward.",
      gloss: { es: "Gracias por su propuesta. Si bien valoramos la flexibilidad en la entrega, las condiciones de pago siguen siendo un obstáculo insalvable para nosotros. Si pudieran revisarlas, con gusto seguiríamos adelante.", en: "Thank you for your proposal. While we appreciate the flexibility on delivery, the payment terms remain a deal-breaker for us. Should you be able to revise them, we would be happy to move forward." },
      question: {
        prompt: { es: "¿Qué impide el acuerdo?", en: "What is blocking the deal?" },
        options: [
          { es: "Las condiciones de pago", en: "The payment terms" },
          { es: "La fecha de entrega", en: "The delivery date" },
          { es: "La calidad del producto", en: "The product quality" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "negotiation", "email"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-compromise", type: "bridge", onlyFor: "es", target: "compromise",
      gloss: { es: "acuerdo intermedio; ceder", en: "compromise (meet halfway)" },
      question: {
        prompt: { es: "«In the end, both sides reached a compromise» significa que…", en: "'In the end, both sides reached a compromise' means…" },
        options: [
          { es: "llegaron a un acuerdo cediendo un poco cada uno", en: "each side gave something up to agree" },
          { es: "firmaron un compromiso formal de matrimonio", en: "they got engaged" },
          { es: "se comprometieron a no hablar más", en: "they promised to stop talking" },
        ],
        answer: 0,
      },
      note: { es: "compromise = acuerdo a medias o ceder; «comprometerse» a hacer algo es «commit to» o «promise»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "negotiation"],
    },
    {
      id: "br-agenda", type: "bridge", onlyFor: "es", target: "agenda",
      gloss: { es: "orden del día (de una reunión)", en: "agenda (list of topics)" },
      question: {
        prompt: { es: "«What's on the agenda?» pregunta por…", en: "'What's on the agenda?' asks about…" },
        options: [
          { es: "los temas de la reunión", en: "the topics of the meeting" },
          { es: "la libreta de citas", en: "your appointment book" },
          { es: "el calendario del año", en: "the yearly calendar" },
        ],
        answer: 0,
      },
      note: { es: "agenda = los temas a tratar; tu libreta de citas es «planner» o «calendar»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "proposal", type: "word", target: "proposal",
      gloss: { es: "propuesta", en: "proposal" },
      distractors: ["proposition's", "purpose", "disposal"],
      tags: ["negotiation", "work"],
    },
    {
      id: "draft", type: "word", target: "draft",
      gloss: { es: "borrador", en: "draft" },
      distractors: ["drift", "draught's", "daft"],
      tags: ["negotiation", "email"],
    },
  ]),
};
