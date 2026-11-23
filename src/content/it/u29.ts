import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u29",
  lang: "it",
  index: 29,
  cefr: "C1",
  title: { target: "Economia e ambiente", es: "Economía y medioambiente", en: "Economy and environment" },
  canDo: [
    { es: "Puedo debatir sobre economía y medioambiente con argumentos y contraargumentos.", en: "I can debate the economy and the environment with arguments and counter-arguments." },
    { es: "Sé usar oraciones con «se» que mezclan pasado y presente (se avessimo investito, oggi pagheremmo meno).", en: "I can use 'if' sentences that mix past and present (se avessimo investito, oggi pagheremmo meno)." },
    { es: "Puedo conceder un punto con sebbene, nonostante, per quanto, ancorché y pur + gerundio.", en: "I can concede a point with sebbene, nonostante, per quanto, ancorché and pur + gerund." },
  ],
  icon: "🌱",
  items: build("it", 29, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "transizione-energetica", type: "word", pos: "noun", target: "la transizione energetica", gender: "f", plural: "le transizioni energetiche",
      gloss: { es: "la transición energética", en: "the energy transition" },
      distractors: ["la transazione energetica", "il transito energetico", "la tradizione energetica"],
      tags: ["environment", "economy"],
    },
    {
      id: "fonti-rinnovabili", type: "word", pos: "noun", target: "le fonti rinnovabili", gender: "f", plural: "le fonti rinnovabili",
      gloss: { es: "las fuentes renovables (de energía)", en: "renewable (energy) sources" },
      accept: [{ text: "le rinnovabili" }],
      distractors: ["le fonti rinnovate", "i fonti rinnovabili", "le fontane rinnovabili"],
      note: { es: "la fonte = la fuente; la fontana = la fuente de una plaza.", en: "la fonte = source; la fontana = fountain." },
      tags: ["environment"],
    },
    {
      id: "debito-pubblico", type: "word", pos: "noun", target: "il debito pubblico", gender: "m", plural: "i debiti pubblici",
      gloss: { es: "la deuda pública", en: "public debt" },
      distractors: ["il debito pubblicato", "la debita pubblica", "il dovere pubblico"],
      tags: ["economy"],
    },
    {
      id: "sviluppo-sostenibile", type: "word", pos: "noun", target: "lo sviluppo sostenibile", gender: "m", plural: "gli sviluppi sostenibili",
      gloss: { es: "el desarrollo sostenible", en: "sustainable development" },
      distractors: ["il sviluppo sostenibile", "lo sviluppo sostenuto", "lo svolgimento sostenibile"],
      note: { es: "s + consonante → lo: lo sviluppo, gli sviluppi.", en: "s + consonant → lo: lo sviluppo, gli sviluppi." },
      tags: ["environment", "economy"],
    },
    {
      id: "impronta-ecologica", type: "word", pos: "noun", target: "l'impronta ecologica", gender: "f", plural: "le impronte ecologiche",
      gloss: { es: "la huella ecológica", en: "the ecological footprint" },
      distractors: ["l'impronto ecologico", "la stampa ecologica", "l'impronta economica"],
      tags: ["environment"],
    },
    {
      id: "rincaro", type: "word", pos: "noun", target: "il rincaro", gender: "m", plural: "i rincari",
      gloss: { es: "el encarecimiento, la subida de precios", en: "the price rise" },
      distractors: ["il ricarico", "il ricambio", "lo sconto"],
      note: { es: "Del verbo rincarare (encarecer): il rincaro delle bollette.", en: "From rincarare (to go up in price): il rincaro delle bollette." },
      tags: ["economy", "money"],
    },
    {
      id: "incentivare", type: "word", pos: "verb", target: "incentivare",
      gloss: { es: "fomentar (con incentivos)", en: "to encourage (with incentives)" },
      forms: { pp: "incentivato" },
      distractors: ["inventare", "incrementare", "intensificare"],
      tags: ["economy", "environment"],
    },
    {
      id: "gravare-su", type: "phrase", pos: "phrase", target: "gravare su",
      gloss: { es: "pesar sobre, recaer sobre (un costo)", en: "to weigh on / fall on (a cost)" },
      distractors: ["gravare a", "aggravare su", "gravitare su"],
      tags: ["economy"],
    },
    {
      id: "lungimirante", type: "word", pos: "adj", target: "lungimirante",
      gloss: { es: "previsor/a, con visión de futuro", en: "far-sighted" },
      distractors: ["luminoso", "lunatico", "lungimiranza"],
      tags: ["argument"],
    },
    {
      id: "insostenibile", type: "word", pos: "adj", target: "insostenibile",
      gloss: { es: "insostenible", en: "unsustainable" },
      distractors: ["insopportabile", "sostenibile", "instabile"],
      tags: ["environment", "argument"],
    },
    {
      id: "ancorche", type: "word", pos: "other", target: "ancorché",
      gloss: { es: "aunque (muy culto)", en: "although (literary)" },
      distractors: ["ancora", "anziché", "affinché"],
      note: { es: "Con congiuntivo o con un adjetivo solo: ancorché costoso.", en: "With the subjunctive or just an adjective: ancorché costoso." },
      grammar: ["it-g-concessive"], tags: ["concessives", "formal"],
    },
    {
      id: "a-lungo-termine", type: "phrase", pos: "phrase", target: "a lungo termine",
      gloss: { es: "a largo plazo", en: "in the long term" },
      distractors: ["a lungo tempo", "in lungo termine", "a lunga termine"],
      note: { es: "Lo contrario: a breve termine (a corto plazo).", en: "The opposite: a breve termine (in the short term)." },
      tags: ["economy", "chunk"],
    },
    {
      id: "fare-marcia-indietro", type: "phrase", pos: "phrase", target: "fare marcia indietro",
      gloss: { es: "dar marcha atrás (en una decisión)", en: "to backtrack / do a U-turn" },
      distractors: ["fare marcia dietro", "andare marcia indietro", "fare la marcia avanti"],
      tags: ["politics", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "se-avessimo-investito", type: "sentence", target: "Se avessimo investito prima nelle rinnovabili, oggi pagheremmo meno l'energia.",
      gloss: { es: "Si hubiéramos invertido antes en renovables, hoy pagaríamos menos por la energía.", en: "If we had invested in renewables earlier, we'd be paying less for energy today." },
      errors: [{ text: "Se avessimo investito prima nelle rinnovabili, oggi avremmo pagato meno l'energia.", feedback: { es: "El efecto es de hoy (oggi): condicional simple, pagheremmo.", en: "The result is in the present (oggi): simple conditional, pagheremmo." }, ruleId: "it-g-ipotetico-misto" }],
      distractors: ["avremmo", "investissimo", "nei"],
      grammar: ["it-g-ipotetico-misto"], tags: ["environment", "conditionals"],
    },
    {
      id: "se-fossimo-lungimiranti", type: "sentence", target: "Se fossimo più lungimiranti, non avremmo sprecato tante risorse.",
      gloss: { es: "Si fuéramos más previsores, no habríamos desperdiciado tantos recursos.", en: "If we were more far-sighted, we wouldn't have wasted so many resources." },
      distractors: ["saremmo", "sprecate", "tanti"],
      note: { es: "Una cualidad actual (fossimo) explica un resultado pasado (avremmo sprecato).", en: "A present trait (fossimo) explains a past result (avremmo sprecato)." },
      grammar: ["it-g-ipotetico-misto"], tags: ["environment", "conditionals"],
    },
    {
      id: "per-quanto-sia-costosa", type: "sentence", target: "Per quanto la transizione sia costosa, non possiamo rimandarla.",
      gloss: { es: "Por muy costosa que sea la transición, no podemos postergarla.", en: "However costly the transition may be, we can't put it off." },
      errors: [{ text: "Per quanto la transizione è costosa, non possiamo rimandarla.", feedback: { es: "per quanto pide congiuntivo: sia costosa.", en: "per quanto takes the subjunctive: sia costosa." }, ruleId: "it-g-concessive" }],
      distractors: ["è", "rimandare", "costoso"],
      grammar: ["it-g-concessive"], tags: ["environment", "concessives"],
    },
    {
      id: "pur-riconoscendo", type: "sentence", target: "Pur riconoscendo i benefici, molte imprese temono i costi.",
      gloss: { es: "Aun reconociendo los beneficios, muchas empresas temen los costos.", en: "While acknowledging the benefits, many companies fear the costs." },
      distractors: ["Per", "riconosciuto", "temano"],
      grammar: ["it-g-concessive"], tags: ["economy", "concessives"],
    },
    {
      id: "nonostante-la-crisi", type: "sentence", target: "Nonostante la crisi, le esportazioni sono cresciute.",
      gloss: { es: "A pesar de la crisis, las exportaciones crecieron.", en: "Despite the crisis, exports grew." },
      accept: [{ text: "Malgrado la crisi, le esportazioni sono cresciute." }],
      distractors: ["Benché", "cresciuto", "hanno"],
      grammar: ["it-g-concessive"], tags: ["economy", "concessives"],
    },
    {
      id: "sebbene-economia-cresca", type: "sentence", target: "Sebbene l'economia cresca, la disoccupazione resta alta.",
      gloss: { es: "Aunque la economía crece, el desempleo sigue alto.", en: "Although the economy is growing, unemployment remains high." },
      accept: [{ text: "Benché l'economia cresca, la disoccupazione resta alta." }],
      errors: [{ text: "Sebbene l'economia cresce, la disoccupazione resta alta.", feedback: { es: "sebbene siempre pide congiuntivo: cresca. Con indicativo, usa anche se.", en: "sebbene always takes the subjunctive: cresca. For the indicative, use anche se." }, ruleId: "it-g-concessive" }],
      distractors: ["cresce", "resti", "bassa"],
      grammar: ["it-g-concessive"], tags: ["economy", "concessives"],
    },
    {
      id: "tassa-ancorche", type: "sentence", target: "Una tassa sulla plastica, ancorché impopolare, ridurrebbe i rifiuti.",
      gloss: { es: "Un impuesto al plástico, aunque sea impopular, reduciría los residuos.", en: "A plastic tax, however unpopular, would cut waste." },
      distractors: ["ancora", "riduce", "sul"],
      grammar: ["it-g-concessive"], tags: ["environment", "concessives", "formal"],
    },
    {
      id: "incentivi-vanno-mantenuti", type: "sentence", target: "Gli incentivi vanno mantenuti a lungo termine.",
      gloss: { es: "Los incentivos deben mantenerse a largo plazo.", en: "Incentives must be kept in place for the long term." },
      distractors: ["vengono", "mantenute", "in"],
      grammar: ["it-g-passivo-venire"], tags: ["economy", "passive"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-ipotetico-misto", type: "pattern", target: "se avessi studiato, ora lavorerei · se fossi prudente, non l'avresti fatto",
      gloss: { es: "oraciones con «se» mixtas", en: "mixed 'if' sentences" },
      pattern: {
        rule: {
          es: "Condición pasada con efecto hoy: se + congiuntivo trapassato → condicional simple. Condición actual con efecto pasado: se + congiuntivo imperfetto → condicional compuesto.",
          en: "Past condition, present result: se + pluperfect subjunctive → simple conditional. Present condition, past result: se + imperfect subjunctive → past conditional.",
        },
        table: [["passato → presente", "se avessi studiato, ora lavorerei"], ["presente → passato", "se fossi prudente, non l'avresti fatto"]],
      },
      question: {
        prompt: { es: "Completa: «Se avessi accettato quel lavoro, adesso ___ a Milano.»", en: "Complete: 'Se avessi accettato quel lavoro, adesso ___ a Milano.'" },
        options: ["vivrei", "avrei vissuto", "vivessi", "vivrò"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-ipotetico-misto"], tags: ["grammar", "conditionals"],
    },
    {
      id: "pat-concessive", type: "pattern", target: "anche se costa · sebbene costi · per quanto costi · nonostante la crisi",
      gloss: { es: "concesivas: indicativo o congiuntivo", en: "concessives: indicative or subjunctive" },
      pattern: {
        rule: {
          es: "anche se va con indicativo. sebbene, benché, nonostante, per quanto y ancorché van con congiuntivo. nonostante y malgrado también pueden ir solo con un sustantivo: nonostante la crisi.",
          en: "anche se takes the indicative. sebbene, benché, nonostante, per quanto and ancorché take the subjunctive. nonostante and malgrado can also take just a noun: nonostante la crisi.",
        },
        table: [["anche se", "indicativo"], ["sebbene · benché · per quanto", "congiuntivo"], ["nonostante · malgrado", "congiuntivo o nome"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Sebbene sia caro, lo compro.", "Sebbene è caro, lo compro.", "Anche se sia caro, lo compro.", "Pur è caro, lo compro."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-concessive"], tags: ["grammar", "concessives"],
    },
    {
      id: "pat-pur-gerundio", type: "pattern", target: "pur essendo d'accordo · pur avendo i soldi",
      gloss: { es: "pur + gerundio = aun + gerundio", en: "pur + gerund = while / even though" },
      pattern: {
        rule: {
          es: "pur + gerundio equivale a «aunque» cuando el sujeto es el mismo en las dos partes: pur essendo d'accordo, voto contro (aun estando de acuerdo, voto en contra).",
          en: "pur + gerund means 'although' when both halves share the subject: pur essendo d'accordo, voto contro (while agreeing, I'm voting against).",
        },
        table: [["pur + gerundio", "pur sapendo · pur essendo"], ["pur + gerundio composto", "pur avendo capito"]],
      },
      question: {
        prompt: { es: "Completa: «___ d'accordo in parte, voterò contro.»", en: "Complete: '___ d'accordo in parte, voterò contro.'" },
        options: ["Pur essendo", "Pur sono", "Pure essere", "Per essendo"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-concessive"], tags: ["grammar", "concessives"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-ondate-calore", type: "listening",
      target: "Secondo l'ultimo rapporto, se l'Europa avesse ridotto le emissioni con più decisione negli anni passati, oggi le ondate di calore sarebbero meno frequenti. Gli autori ammettono, però, che la transizione ha un costo elevato.",
      gloss: {
        es: "Según el último informe, si Europa hubiera reducido las emisiones con más decisión en los años pasados, hoy las olas de calor serían menos frecuentes. Sin embargo, los autores admiten que la transición tiene un costo elevado.",
        en: "According to the latest report, if Europe had cut emissions more decisively in past years, heatwaves would be less frequent today. The authors admit, however, that the transition is expensive.",
      },
      question: {
        prompt: { es: "Según el informe, ¿qué pasaría hoy si se hubieran reducido antes las emisiones?", en: "According to the report, what would be different today if emissions had been cut earlier?" },
        options: [
          { es: "Habría menos olas de calor.", en: "There would be fewer heatwaves." },
          { es: "La energía sería más cara.", en: "Energy would be more expensive." },
          { es: "Habría más desempleo.", en: "There would be more unemployment." },
          { es: "Europa crecería más rápido.", en: "Europe would grow faster." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-ipotetico-misto"], tags: ["listening", "environment"],
    },
    {
      id: "dlg-tassa-voli", type: "dialogue", register: "informal", target: "Sarà anche giusta, ma pesa soprattutto su chi ha meno soldi.",
      gloss: { es: "Será justo, pero afecta sobre todo a quienes tienen menos dinero.", en: "It may well be fair, but it hits people with less money hardest." },
      turns: [
        { who: "A", target: "Secondo me la tassa sui voli è giusta: chi inquina deve pagare.", gloss: { es: "Para mí el impuesto a los vuelos es justo: el que contamina tiene que pagar.", en: "I think the flight tax is fair: polluters should pay." } },
        { who: "B", target: "Sarà anche giusta, ma pesa soprattutto su chi ha meno soldi.", gloss: { es: "Será justo, pero afecta sobre todo a quienes tienen menos dinero.", en: "It may well be fair, but it hits people with less money hardest." } },
        { who: "A", target: "Pur capendo il problema, non vedo alternative.", gloss: { es: "Aunque entiendo el problema, no veo alternativas.", en: "I get the problem, but I don't see any alternatives." } },
        { who: "B", target: "Potremmo investire di più nei treni, anziché punire chi viaggia.", gloss: { es: "Podríamos invertir más en trenes, en lugar de castigar a quien viaja.", en: "We could invest more in trains instead of punishing people who travel." } },
      ],
      question: {
        prompt: { es: "¿Qué propone B?", en: "What does B suggest?" },
        options: [
          { es: "Invertir más en trenes.", en: "Investing more in trains." },
          { es: "Subir el impuesto.", en: "Raising the tax." },
          { es: "Prohibir los vuelos.", en: "Banning flights." },
          { es: "Bajar el precio de los vuelos.", en: "Making flights cheaper." },
        ],
        answer: 0,
      },
      note: { es: "«Sarà anche giusta, ma…» usa el futuro para conceder: puede que sea justo, pero…", en: "'Sarà anche giusta, ma…' uses the future to concede: it may be fair, but…" },
      exercises: ["question"], grammar: ["it-g-concessive"], tags: ["dialogue", "environment", "argument"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-tasso", type: "bridge", onlyFor: "es", target: "il tasso",
      gloss: { es: "la tasa (porcentaje)", en: "the rate (percentage)" },
      question: {
        prompt: { es: "«Il tasso di disoccupazione è salito» significa…", en: "'Il tasso di disoccupazione è salito' means…" },
        options: [
          { es: "Subió la tasa de desempleo.", en: "The unemployment rate went up." },
          { es: "Subió el impuesto por desempleo.", en: "The unemployment tax went up." },
          { es: "Subió el subsidio por desempleo.", en: "Unemployment benefit went up." },
          { es: "Subió la cantidad de empleos.", en: "The number of jobs went up." },
        ],
        answer: 0,
      },
      note: { es: "il tasso = la tasa (un porcentaje); la tassa = el impuesto (o la tasa que se paga por un trámite)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "economy"],
    },
  ]),
};
