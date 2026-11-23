import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u21",
  lang: "en",
  index: 21,
  cefr: "B2",
  title: { target: "If only I'd known…", es: "Si lo hubiera sabido…", en: "If only I'd known…" },
  canDo: [
    { es: "Puedo hablar de errores, arrepentimientos y de cómo podrían haber sido las cosas.", en: "I can talk about mistakes, regrets and how things could have been." },
    { es: "Puedo expresar deseos sobre el presente y el pasado.", en: "I can express wishes about the present and the past." },
    { es: "Sé usar el tercer condicional, «I wish» y should have / could have / would have.", en: "I can use the third conditional, 'I wish' and should have / could have / would have." },
  ],
  icon: "⏳",
  items: build("en", 21, "B2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "regret", type: "word", pos: "verb", target: "regret",
      gloss: { es: "arrepentirse de, lamentar", en: "to regret" },
      forms: { past: "regretted", pp: "regretted" },
      distractors: ["return", "regard", "resent"],
      note: { es: "Va con -ing: I regret selling my car (me arrepiento de haber vendido el auto)." },
      tags: ["regrets"],
    },
    {
      id: "mistake", type: "word", target: "mistake", plural: "mistakes",
      gloss: { es: "error, equivocación", en: "mistake" },
      distractors: ["mistaken", "misstep's", "fault"],
      note: { es: "Se dice «make a mistake», nunca «do a mistake»." },
      tags: ["regrets"],
    },
    {
      id: "miss-the-chance", type: "phrase", pos: "phrase", target: "miss the chance",
      gloss: { es: "perder la oportunidad", en: "to miss the chance" },
      accept: [{ text: "miss the opportunity" }],
      distractors: ["lose the chance", "fail the chance", "miss the change"],
      errors: [{ text: "lose the chance", feedback: { es: "Una oportunidad, un tren o un vuelo se «miss»; un objeto se «lose»." } }],
      tags: ["regrets", "chunk"],
    },
    {
      id: "on-time", type: "phrase", pos: "phrase", target: "on time",
      gloss: { es: "a tiempo, puntual", en: "on time" },
      accept: [{ text: "in time" }],
      distractors: ["at time", "in hour", "on hour"],
      note: { es: "on time = a la hora prevista; in time = con tiempo suficiente (antes de que fuera tarde)." },
      tags: ["time"],
    },
    {
      id: "if-only", type: "phrase", pos: "phrase", target: "if only",
      gloss: { es: "ojalá, si tan solo", en: "if only" },
      distractors: ["only if", "if just", "ever if"],
      tags: ["regrets", "wishes"],
    },
    {
      id: "warn", type: "word", pos: "verb", target: "warn",
      gloss: { es: "advertir, avisar (de un peligro)", en: "to warn" },
      distractors: ["want", "worn", "wander"],
      tags: ["regrets"],
    },
    {
      id: "blame", type: "word", pos: "verb", target: "blame",
      gloss: { es: "culpar, echarle la culpa a", en: "to blame" },
      distractors: ["flame", "claim", "bland"],
      note: { es: "«It's not your fault» = no es tu culpa; «Don't blame me» = no me eches la culpa." },
      tags: ["regrets"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "if-id-known", type: "sentence", target: "If I'd known about the party, I would have gone.",
      gloss: { es: "Si hubiera sabido de la fiesta, habría ido.", en: "If I'd known about the party, I would have gone." },
      accept: [{ text: "If I had known about the party, I would have gone." }, { text: "If I'd known about the party, I'd have gone." }],
      errors: [{ text: "If I would have known about the party, I would have gone.", feedback: { es: "En la parte del «if» va had + participio, no «would have»." }, ruleId: "en-g-third-conditional" }],
      distractors: ["went", "will", "knew"],
      grammar: ["en-g-third-conditional"],
      annot: { "I'd known": { es: "I had known: condición imposible en el pasado", en: "I had known: impossible past condition" } },
      tags: ["conditionals", "regrets"],
    },
    {
      id: "we-wouldnt-have-missed", type: "sentence", target: "We wouldn't have missed the flight if we'd left earlier.",
      gloss: { es: "No habríamos perdido el vuelo si hubiéramos salido antes.", en: "We wouldn't have missed the flight if we'd left earlier." },
      accept: [{ text: "We would not have missed the flight if we had left earlier." }, { text: "If we'd left earlier, we wouldn't have missed the flight." }],
      distractors: ["lost", "left", "will"],
      grammar: ["en-g-third-conditional"],
      tags: ["conditionals", "travel"],
    },
    {
      id: "i-wish-i-spoke", type: "sentence", target: "I wish I spoke Portuguese.",
      gloss: { es: "Ojalá hablara portugués.", en: "I wish I spoke Portuguese." },
      accept: [{ text: "I wish I could speak Portuguese." }],
      errors: [{ text: "I wish I speak Portuguese.", feedback: { es: "Para un deseo sobre el presente, «wish» + pasado: I wish I spoke." }, ruleId: "en-g-wish" }],
      distractors: ["speak", "will", "would"],
      grammar: ["en-g-wish"],
      tags: ["wishes"],
    },
    {
      id: "i-wish-i-hadnt", type: "sentence", target: "I wish I hadn't said that.",
      gloss: { es: "Ojalá no hubiera dicho eso.", en: "I wish I hadn't said that." },
      accept: [{ text: "I wish I had not said that." }],
      errors: [{ text: "I wish I didn't say that.", feedback: { es: "Para un arrepentimiento del pasado: wish + had + participio." }, ruleId: "en-g-wish" }],
      distractors: ["didn't", "say", "haven't"],
      grammar: ["en-g-wish"],
      tags: ["wishes", "regrets"],
    },
    {
      id: "you-should-have-told", type: "sentence", target: "You should have told me earlier.",
      gloss: { es: "Me lo tendrías que haber dicho antes.", en: "You should have told me earlier." },
      accept: [{ text: "You should've told me earlier." }],
      errors: [{ text: "You should have tell me earlier.", feedback: { es: "Después de «have», el participio: told." }, ruleId: "en-g-modal-perfect" }, { text: "You should of told me earlier.", feedback: { es: "Se oye «should've», pero se escribe «should have», nunca «should of»." }, ruleId: "en-g-modal-perfect" }],
      distractors: ["tell", "of", "said"],
      grammar: ["en-g-modal-perfect"],
      tags: ["regrets"],
    },
    {
      id: "it-could-have-been-worse", type: "sentence", target: "It could have been worse.",
      gloss: { es: "Podría haber sido peor.", en: "It could have been worse." },
      accept: [{ text: "It could've been worse." }],
      distractors: ["be", "worst", "can"],
      grammar: ["en-g-modal-perfect"],
      tags: ["regrets", "chunk"],
    },
    {
      id: "i-regret-not-studying", type: "sentence", target: "I regret not studying harder at school.",
      gloss: { es: "Me arrepiento de no haber estudiado más en la escuela.", en: "I regret not studying harder at school." },
      accept: [{ text: "I regret not having studied harder at school." }, { text: "I regret not studying more at school." }],
      errors: [{ text: "I regret to not study harder at school.", feedback: { es: "Para arrepentirse de algo pasado: regret + (not) -ing." }, ruleId: "en-g-gerund-infinitive" }],
      distractors: ["to", "study", "studied"],
      grammar: ["en-g-gerund-infinitive"],
      tags: ["regrets", "school"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-third-conditional", type: "pattern", target: "If I had known, I would have…",
      gloss: { es: "el tercer condicional (pasado imposible)", en: "the third conditional" },
      pattern: {
        rule: {
          es: "Para imaginar un pasado distinto: if + had + participio, y en la otra parte would have + participio. Equivale a «Si hubiera…, habría…». También se puede usar could have o might have.",
          en: "To imagine a different past: if + had + past participle, and would have + past participle in the other clause. could have or might have are also possible.",
        },
        table: [["condición (had + pp)", "resultado (would have + pp)"], ["If you had asked me,", "I would have helped."], ["If it hadn't rained,", "we'd have gone out."]],
      },
      question: {
        prompt: { es: "Completa: «If she ___ harder, she would have passed.»", en: "Complete: 'If she ___ harder, she would have passed.'" },
        options: ["had studied", "would have studied", "studied", "has studied"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-third-conditional"], tags: ["grammar", "conditionals"],
    },
    {
      id: "pat-wish", type: "pattern", target: "I wish I had… · I wish I had had…",
      gloss: { es: "wish (ojalá) para el presente y el pasado", en: "wish for the present and the past" },
      pattern: {
        rule: {
          es: "«I wish» + pasado expresa un deseo sobre el presente (I wish I had more time = ojalá tuviera más tiempo). «I wish» + had + participio, un arrepentimiento sobre el pasado (I wish I had gone = ojalá hubiera ido). Con algo que otra persona hace y te molesta: I wish you would stop.",
          en: "'I wish' + past expresses a wish about the present (I wish I had more time). 'I wish' + had + participle expresses regret about the past (I wish I had gone). For annoying behavior: I wish you would stop.",
        },
        table: [["presente", "I wish I lived closer."], ["pasado", "I wish I hadn't eaten so much."], ["queja", "I wish you would listen."]],
      },
      question: {
        prompt: { es: "«Ojalá hubiera traído una chaqueta» es…", en: "Which means you regret not bringing a jacket?" },
        options: ["I wish I had brought a jacket.", "I wish I brought a jacket.", "I wish I would bring a jacket.", "I wish I have brought a jacket."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-wish"], tags: ["grammar", "wishes"],
    },
    {
      id: "pat-modal-perfect", type: "pattern", target: "should have · could have · would have + participio",
      gloss: { es: "modales en pasado: debería haber, podría haber", en: "modal perfects" },
      pattern: {
        rule: {
          es: "modal + have + participio habla del pasado: «should have» = debería haber (crítica o arrepentimiento), «could have» = podría haber (posibilidad que no ocurrió), «would have» = habría. Al hablar suenan «should've», «could've», «would've».",
          en: "modal + have + past participle talks about the past: 'should have' (criticism or regret), 'could have' (a possibility that didn't happen), 'would have' (imagined result). In speech: should've, could've, would've.",
        },
        table: [["should have", "You should have called."], ["could have", "We could have won."], ["would have", "I would have helped you."]],
      },
      question: {
        prompt: { es: "Llegaste tarde a una cita importante. Te dices:", en: "You were late for an important appointment. You say to yourself:" },
        options: ["I should have left earlier.", "I should leave earlier yesterday.", "I should had left earlier.", "I must have left earlier."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-modal-perfect"], tags: ["grammar", "modals", "regrets"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-missed-flight", type: "dialogue", target: "We should have taken a taxi.",
      gloss: { es: "Tendríamos que haber tomado un taxi.", en: "We should have taken a taxi." },
      turns: [
        { who: "A", target: "I can't believe we missed the flight!", gloss: { es: "¡No puedo creer que perdimos el vuelo!", en: "I can't believe we missed the flight!" } },
        { who: "B", target: "We should have taken a taxi instead of the bus.", gloss: { es: "Tendríamos que haber tomado un taxi en vez del autobús.", en: "We should have taken a taxi instead of the bus." } },
        { who: "A", target: "If the bus hadn't broken down, we would have made it.", gloss: { es: "Si el autobús no se hubiera descompuesto, habríamos llegado.", en: "If the bus hadn't broken down, we would have made it." } },
        { who: "B", target: "Well, it could have been worse. There's another flight at six.", gloss: { es: "Bueno, podría haber sido peor. Hay otro vuelo a las seis.", en: "Well, it could have been worse. There's another flight at six." } },
      ],
      question: {
        prompt: { es: "¿Por qué perdieron el vuelo?", en: "Why did they miss the flight?" },
        options: [
          { es: "El autobús se descompuso", en: "The bus broke down" },
          { es: "El taxi se perdió", en: "The taxi got lost" },
          { es: "Se quedaron dormidos", en: "They overslept" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "regrets", "travel"],
    },
    {
      id: "lis-regret", type: "listening", target: "When I was twenty, I had the chance to study in Japan, but I said no. If I'd gone, my life would have been completely different. I really wish I had taken that chance.",
      gloss: { es: "A los veinte tuve la oportunidad de estudiar en Japón, pero dije que no. Si hubiera ido, mi vida habría sido completamente distinta. De verdad ojalá hubiera aprovechado esa oportunidad.", en: "When I was twenty, I had the chance to study in Japan, but I said no. If I'd gone, my life would have been completely different. I really wish I had taken that chance." },
      question: {
        prompt: { es: "¿De qué se arrepiente?", en: "What does the speaker regret?" },
        options: [
          { es: "De no haber ido a estudiar a Japón", en: "Not going to study in Japan" },
          { es: "De haber ido a Japón", en: "Going to Japan" },
          { es: "De haber dejado la universidad", en: "Leaving university" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "regrets", "conditionals"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-support", type: "bridge", onlyFor: "es", target: "stand",
      gloss: { es: "soportar, aguantar (en negativo: I can't stand…)", en: "stand (tolerate)" },
      question: {
        prompt: { es: "«My parents always supported me» significa que tus padres…", en: "'My parents always supported me' means your parents…" },
        options: [
          { es: "siempre te apoyaron", en: "always encouraged and helped you" },
          { es: "siempre te soportaron (con paciencia)", en: "always put up with you" },
          { es: "siempre te criticaron", en: "always criticized you" },
        ],
        answer: 0,
      },
      note: { es: "support = apoyar; «soportar» (aguantar) es «stand» o «put up with»: I can't stand the noise." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "chance", type: "word", target: "chance",
      gloss: { es: "oportunidad; posibilidad", en: "chance" },
      accept: [{ text: "opportunity" }],
      distractors: ["change", "chant", "choice"],
      tags: ["regrets"],
    },
    {
      id: "fault", type: "word", target: "fault",
      gloss: { es: "culpa", en: "fault" },
      distractors: ["fold", "false", "felt"],
      note: { es: "«It's my fault» = es mi culpa." },
      tags: ["regrets"],
    },
    {
      id: "too-late", type: "phrase", pos: "phrase", target: "too late",
      gloss: { es: "demasiado tarde", en: "too late" },
      distractors: ["very late", "so late", "too later"],
      tags: ["regrets", "time"],
    },
    {
      id: "make-a-decision", type: "phrase", pos: "phrase", target: "make a decision",
      gloss: { es: "tomar una decisión", en: "to make a decision" },
      accept: [{ text: "take a decision" }],
      distractors: ["take a decision's", "do a decision", "make decision"],
      note: { es: "En inglés americano casi siempre «make a decision»." },
      tags: ["regrets", "chunk"],
    },
    {
      id: "lucky", type: "word", pos: "adj", target: "lucky",
      gloss: { es: "afortunado/a, con suerte", en: "lucky" },
      distractors: ["luckily", "locky", "likely"],
      note: { es: "«You're lucky!» = ¡Qué suerte tienes!" },
      tags: ["regrets"],
    },
  ]),
};
