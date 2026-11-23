import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u21",
  lang: "pt",
  index: 21,
  cefr: "B2",
  title: { target: "Se eu tivesse sabido…", es: "Si lo hubiera sabido…", en: "If I'd known…" },
  canDo: [
    { es: "Puedo hablar de lo que habría pasado, expresar arrepentimiento y reprochar con tacto.", en: "I can talk about what would have happened, express regret and reproach tactfully." },
    { es: "Sé usar se eu tivesse feito… teria…, devia ter… y caso + subjuntivo.", en: "I can use se eu tivesse feito… teria…, devia ter… and caso + subjunctive." },
  ],
  icon: "⏪",
  items: build("pt", 21, "B2", [
    { id: "arrepender-se", type: "word", pos: "verb", target: "arrepender-se", gloss: { es: "arrepentirse", en: "to regret" }, forms: { eu: "me arrependo", "eu (pret.)": "me arrependi" }, distractors: ["arrepentir-se", "repreender", "aprender-se"], note: { es: "Me arrependi de ter dito isso = me arrepentí de haber dicho eso.", en: "Me arrependi de ter dito isso = I regret saying that." }, tags: ["feelings", "verbs"] },
    { id: "culpa", type: "word", pos: "noun", target: "a culpa", gender: "f", plural: "as culpas", gloss: { es: "la culpa", en: "the blame / guilt" }, distractors: ["o culpa", "a cúpula", "a curpa"], note: { es: "A culpa é minha = es culpa mía.", en: "A culpa é minha = it's my fault." }, tags: ["feelings"] },
    { id: "ainda-bem", type: "phrase", pos: "phrase", target: "Ainda bem que…", gloss: { es: "Menos mal que… / Por suerte…", en: "Thank goodness… / Luckily…" }, distractors: ["Ainda que bem…", "Mais bem que…", "Bem ainda que…"], note: { es: "Ainda bem que você ligou = menos mal que llamaste.", en: "Ainda bem que você ligou = good thing you called." }, tags: ["chunk", "feelings"] },
    { id: "por-pouco", type: "phrase", pos: "phrase", target: "por pouco", gloss: { es: "por poco", en: "almost / very nearly" }, distractors: ["pelo pouco", "a pouco", "por pouquinho de"], note: { es: "Por pouco eu não perdi o avião = por poco pierdo el avión.", en: "Por pouco eu não perdi o avião = I very nearly missed the plane." }, tags: ["chunk"] },
    { id: "erro", type: "word", pos: "noun", target: "o erro", gender: "m", plural: "os erros", gloss: { es: "el error", en: "the mistake" }, distractors: ["a erra", "o erre", "o ferro"], note: { es: "En singular la e es cerrada (êrro); en plural, abierta (érros).", en: "The e is closed in the singular, open in the plural (erros)." }, tags: ["feelings"] },
    { id: "caso", type: "word", pos: "other", target: "caso", gloss: { es: "en caso de que", en: "in case / if" }, distractors: ["se caso", "em caso", "casa"], note: { es: "Va con subjuntivo presente o imperfecto: caso chova, caso fosse.", en: "Takes the present or imperfect subjunctive: caso chova, caso fosse." }, grammar: ["pt-g-caso"], tags: ["connectors", "subjunctive"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "se-eu-tivesse-sabido", type: "sentence", target: "Se eu tivesse sabido, teria vindo antes.",
      gloss: { es: "Si lo hubiera sabido, habría venido antes.", en: "If I'd known, I'd have come earlier." },
      accept: [{ text: "Se eu soubesse, teria vindo antes." }, { text: "Se eu tivesse sabido, tinha vindo antes." }],
      errors: [{ text: "Se eu teria sabido, teria vindo antes.", feedback: { es: "Tras «se» va tivesse + participio, nunca teria.", en: "After 'se' use tivesse + participle, never teria." }, ruleId: "pt-g-condicional-composto" }],
      distractors: ["teria sabido", "viesse", "visto"],
      tags: ["regret", "conditional"],
    },
    {
      id: "devia-ter-avisado", type: "sentence", target: "Você devia ter me avisado!", register: "informal",
      gloss: { es: "¡Me tendrías que haber avisado!", en: "You should have told me!" },
      accept: [{ text: "Você deveria ter me avisado!" }, { text: "Você devia ter-me avisado!" }],
      variants: [{ region: "PT", text: "Devias ter-me avisado!" }],
      distractors: ["deve", "avisar", "tido"],
      grammar: ["pt-g-condicional-composto"], tags: ["regret"],
    },
    {
      id: "teria-sido-melhor", type: "sentence", target: "Teria sido melhor esperar mais um pouco.",
      gloss: { es: "Habría sido mejor esperar un poco más.", en: "It would have been better to wait a bit longer." },
      accept: [{ text: "Tinha sido melhor esperar mais um pouco." }],
      distractors: ["Seria", "estado", "mais bom"],
      tags: ["regret", "conditional"],
    },
    {
      id: "caso-chova", type: "sentence", target: "Caso chova, a festa vai ser no salão.",
      gloss: { es: "En caso de que llueva, la fiesta será en el salón.", en: "If it rains, the party will be in the hall." },
      accept: [{ text: "Se chover, a festa vai ser no salão." }],
      errors: [{ text: "Caso chover, a festa vai ser no salão.", feedback: { es: "«caso» va con presente de subjuntivo (chova); «se» con futuro de subjuntivo (chover).", en: "'caso' takes the present subjunctive (chova); 'se' takes the future subjunctive (chover)." }, ruleId: "pt-g-caso" }],
      distractors: ["chover", "chove", "na"],
      tags: ["subjunctive", "connectors"],
    },
    {
      id: "nao-tive-culpa", type: "sentence", target: "Desculpa, a culpa foi minha.",
      gloss: { es: "Perdón, fue culpa mía.", en: "Sorry, it was my fault." },
      accept: [{ text: "Desculpe, a culpa foi minha." }, { text: "Foi mal, a culpa foi minha." }],
      distractors: ["era", "minha culpa de", "falha"],
      note: { es: "«Foi mal!» = ¡perdón!, muy coloquial.", en: "'Foi mal!' = my bad!, very informal." },
      tags: ["regret", "chunk"],
    },
    { id: "lamentar", type: "word", pos: "verb", target: "lamentar", gloss: { es: "lamentar, sentir", en: "to be sorry about / regret" }, forms: { eu: "lamento" }, distractors: ["lamber", "lamentoso", "alimentar"], note: { es: "Lamento muito = lo siento mucho (formal).", en: "Lamento muito = I'm very sorry (formal)." }, tags: ["feelings", "verbs"] },
    { id: "poderia-ter-sido-pior", type: "sentence", target: "Podia ter sido pior.", gloss: { es: "Podría haber sido peor.", en: "It could have been worse." }, accept: [{ text: "Poderia ter sido pior." }], distractors: ["Pôde", "estado", "pior de"], grammar: ["pt-g-condicional-composto"], tags: ["regret"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-teria", type: "paradigm", target: "ter — condicional (teria)", spoken: "teria",
      gloss: { es: "«ter» en condicional, para el condicional compuesto", en: "ter in the conditional, for 'would have'" },
      grammar: ["pt-g-condicional-composto"],
      paradigm: {
        caption: { es: "Completa: «… feito» (habría hecho)", en: "Complete: '… feito' (would have done)" },
        cells: [
          { label: "eu", answer: "teria", ruleId: "pt-g-condicional-composto" },
          { label: "você / ele / ela", answer: "teria", ruleId: "pt-g-condicional-composto" },
          { label: "nós", answer: "teríamos", ruleId: "pt-g-condicional-composto" },
          { label: "vocês / eles / elas", answer: "teriam", ruleId: "pt-g-condicional-composto" },
        ],
      },
      tags: ["grammar", "conditional", "table"],
    },
    {
      id: "pat-condicional-composto", type: "pattern", target: "Se eu tivesse estudado, teria passado.",
      gloss: { es: "si hubiera…, habría…", en: "if I had…, I would have…" },
      pattern: {
        rule: {
          es: "Pasado irreal: se + tivesse + participio, teria + participio (en el habla, tinha + participio). Reproche: devia / deveria ter + participio.",
          en: "Unreal past: se + tivesse + participle, teria + participle (in speech, tinha + participle). Reproach: devia / deveria ter + participle (should have).",
        },
        table: [["condição", "Se eu tivesse estudado,"], ["resultado", "teria passado."], ["fala", "tinha passado."], ["reprovação", "Você devia ter estudado."]],
      },
      question: {
        prompt: { es: "Completa: «Se você ___ cedo, não teria perdido o ônibus.»", en: "Complete: 'Se você ___ cedo, não teria perdido o ônibus.'" },
        options: ["tivesse saído", "teria saído", "tinha saído", "saísse tido"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-condicional-composto"], tags: ["grammar", "conditional"],
    },
    {
      id: "pat-caso", type: "pattern", target: "caso chova · se chover",
      gloss: { es: "caso + subjuntivo / se + futuro de subjuntivo", en: "caso + subjunctive / se + future subjunctive" },
      pattern: {
        rule: {
          es: "Dos maneras de poner una condición futura: caso + presente de subjuntivo (caso chova) o se + futuro de subjuntivo (se chover). Para lo hipotético: caso / se + imperfeito (caso chovesse, se chovesse).",
          en: "Two ways to set a future condition: caso + present subjunctive (caso chova) or se + future subjunctive (se chover). Hypothetical: caso / se + imperfect subjunctive (se chovesse).",
        },
        table: [["caso", "Caso você precise, me liga."], ["se", "Se você precisar, me liga."], ["hipótese", "Caso fosse possível, eu iria."]],
      },
      question: {
        prompt: { es: "Completa: «Caso o voo ___, aviso você.» (atrasar)", en: "Complete: 'Caso o voo ___, aviso você.' (atrasar)" },
        options: ["atrase", "atrasar", "atrasa", "atrasou"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-caso"], tags: ["grammar", "subjunctive"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-arrependimento", type: "listening", target: "Eu me arrependo de não ter aceitado aquela bolsa de estudos em Lisboa. Se eu tivesse ido, talvez hoje eu estivesse trabalhando na Europa.",
      gloss: { es: "Me arrepiento de no haber aceptado aquella beca en Lisboa. Si hubiera ido, quizás hoy estaría trabajando en Europa.", en: "I regret not taking that scholarship in Lisbon. If I'd gone, maybe I'd be working in Europe today." },
      question: {
        prompt: { es: "¿De qué se arrepiente?", en: "What does the speaker regret?" },
        options: [
          { es: "De no haber aceptado una beca", en: "Turning down a scholarship" },
          { es: "De haberse ido a Lisboa", en: "Moving to Lisbon" },
          { es: "De haber dejado un trabajo en Europa", en: "Leaving a job in Europe" },
          { es: "De nada", en: "Nothing" },
        ],
        answer: 0,
      },
      note: { es: "«a bolsa de estudos» = la beca (no la bolsa).", en: "'a bolsa de estudos' = a scholarship." },
      exercises: ["question", "listen"], tags: ["listening", "regret"],
    },
    {
      id: "dlg-perdeu", type: "dialogue", target: "Ainda bem que eu cheguei a tempo!",
      gloss: { es: "¡Menos mal que llegué a tiempo!", en: "Good thing I made it in time!" },
      turns: [
        { who: "A", target: "Por pouco eu não perdi o voo hoje.", gloss: { es: "Por poco pierdo el vuelo hoy.", en: "I very nearly missed my flight today." } },
        { who: "B", target: "Nossa! O que aconteceu?", gloss: { es: "¡Uy! ¿Qué pasó?", en: "Wow! What happened?" } },
        { who: "A", target: "Trânsito. Se eu tivesse saído dez minutos depois, teria perdido. Ainda bem que eu cheguei a tempo!", gloss: { es: "Tráfico. Si hubiera salido diez minutos más tarde, lo habría perdido. ¡Menos mal que llegué a tiempo!", en: "Traffic. If I'd left ten minutes later, I'd have missed it. Good thing I made it in time!" } },
      ],
      question: {
        prompt: { es: "¿Perdió A el vuelo?", en: "Did A miss the flight?" },
        options: [
          { es: "No, llegó justo a tiempo", en: "No, A just made it" },
          { es: "Sí, por diez minutos", en: "Yes, by ten minutes" },
          { es: "Sí, por el tráfico", en: "Yes, because of traffic" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "regret"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-cena", type: "bridge", onlyFor: "es", target: "a cena",
      gloss: { es: "la escena", en: "the scene" },
      question: {
        prompt: { es: "«A última cena do filme é linda» habla de…", en: "'A última cena do filme é linda' is about the film's last…" },
        options: [{ es: "la última escena", en: "scene" }, { es: "la última cena", en: "dinner" }, { es: "el último cine", en: "cinema" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «a cena» = la escena; la cena es «o jantar» (cenar = jantar)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-en-preservativo", type: "bridge", onlyFor: "en", target: "sem conservantes",
      gloss: { es: "sin conservantes", en: "preservative-free" },
      distractors: ["sem preservativos", "sem conservas", "sem preservação"],
      note: { en: "False friend: um preservativo is a condom; food preservatives are 'conservantes'." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend"],
    },
  ]),
};
