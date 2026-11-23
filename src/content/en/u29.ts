import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u29",
  lang: "en",
  index: 29,
  cefr: "C1",
  title: { target: "Economy and environment", es: "Economía y medioambiente", en: "Economy and environment" },
  canDo: [
    { es: "Puedo hablar de economía y sostenibilidad con vocabulario preciso.", en: "I can discuss the economy and sustainability with precise vocabulary." },
    { es: "Puedo argumentar causas y consecuencias, también hipotéticas, en el presente y el pasado.", en: "I can argue causes and effects, including hypothetical ones, across past and present." },
    { es: "Sé usar la inversión negativa (Not only…, Never have I…) y los condicionales mixtos.", en: "I can use negative inversion (Not only…, Never have I…) and mixed conditionals." },
  ],
  icon: "🌍",
  items: build("en", 29, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "inflation", type: "word", target: "inflation",
      gloss: { es: "inflación", en: "inflation" },
      distractors: ["infection", "inflammation", "deflation"],
      tags: ["economy"],
    },
    {
      id: "recession", type: "word", target: "recession", plural: "recessions",
      gloss: { es: "recesión", en: "recession" },
      distractors: ["recess", "procession", "depression's"],
      tags: ["economy"],
    },
    {
      id: "carbon-footprint", type: "word", target: "carbon footprint",
      gloss: { es: "huella de carbono", en: "carbon footprint" },
      distractors: ["carbon fingerprint", "coal footprint", "carbon foot"],
      tags: ["environment"],
    },
    {
      id: "renewable", type: "word", pos: "adj", target: "renewable",
      gloss: { es: "renovable", en: "renewable" },
      distractors: ["renovable", "removable", "reusable"],
      errors: [{ text: "renovable", feedback: { es: "En inglés es «renewable» (renewable energy)." } }],
      tags: ["environment", "energy"],
    },
    {
      id: "sustainable", type: "word", pos: "adj", target: "sustainable",
      gloss: { es: "sostenible, sustentable", en: "sustainable" },
      distractors: ["sustained", "suitable", "sustainabled"],
      tags: ["environment"],
    },
    {
      id: "cost-of-living", type: "phrase", pos: "phrase", target: "the cost of living",
      gloss: { es: "el costo de vida", en: "the cost of living" },
      distractors: ["the life cost", "the cost of life", "the living cost's"],
      tags: ["economy"],
    },
    {
      id: "subsidy", type: "word", target: "subsidy", plural: "subsidies",
      gloss: { es: "subsidio, subvención", en: "subsidy" },
      distractors: ["subsidiary", "subside", "study"],
      tags: ["economy", "politics"],
    },
    {
      id: "wealth-gap", type: "word", target: "wealth gap",
      gloss: { es: "brecha de riqueza, desigualdad económica", en: "wealth gap" },
      accept: [{ text: "income gap" }, { text: "inequality" }],
      distractors: ["health gap", "wealthy gap", "rich gap"],
      tags: ["economy", "society"],
    },
    {
      id: "phase-out", type: "word", pos: "verb", target: "phase out",
      gloss: { es: "eliminar gradualmente", en: "to phase out" },
      distractors: ["face out", "phase off", "phase in"],
      note: { es: "phase out = eliminar de a poco; phase in = introducir de a poco." },
      tags: ["environment", "phrasal-verbs"],
    },
    {
      id: "in-the-long-run", type: "phrase", pos: "phrase", target: "in the long run",
      gloss: { es: "a la larga, a largo plazo", en: "in the long run" },
      accept: [{ text: "in the long term" }],
      distractors: ["in the long race", "at the long run", "on the long way"],
      tags: ["economy", "linkers"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "not-only-did", type: "sentence", target: "Not only did prices rise, but wages also fell.",
      gloss: { es: "No solo subieron los precios, sino que además bajaron los salarios.", en: "Not only did prices rise, but wages also fell." },
      accept: [{ text: "Not only did prices rise, but wages fell too." }],
      errors: [{ text: "Not only prices rose, but wages also fell.", feedback: { es: "Tras «Not only» al inicio va inversión: did + sujeto + verbo." }, ruleId: "en-g-negative-inversion" }],
      distractors: ["rose", "also", "rised"],
      grammar: ["en-g-negative-inversion"],
      annot: { "did prices rise": { es: "inversión: auxiliar antes del sujeto", en: "inversion: auxiliary before the subject" } },
      tags: ["economy", "inversion"],
    },
    {
      id: "never-have-i-seen", type: "sentence", target: "Never have I seen such a hot summer.",
      gloss: { es: "Nunca había visto un verano tan caluroso.", en: "Never have I seen such a hot summer." },
      accept: [{ text: "I have never seen such a hot summer." }, { text: "I've never seen such a hot summer." }],
      errors: [{ text: "Never I have seen such a hot summer.", feedback: { es: "Con «Never» al inicio: have + sujeto (Never have I…)." }, ruleId: "en-g-negative-inversion" }],
      distractors: ["saw", "so", "did"],
      grammar: ["en-g-negative-inversion", "en-g-so-such"],
      tags: ["environment", "inversion"],
    },
    {
      id: "rarely-do-governments", type: "sentence", target: "Rarely do governments admit their mistakes.",
      gloss: { es: "Rara vez los gobiernos admiten sus errores.", en: "Rarely do governments admit their mistakes." },
      accept: [{ text: "Governments rarely admit their mistakes." }],
      distractors: ["does", "admits", "admitting"],
      grammar: ["en-g-negative-inversion"],
      tags: ["politics", "inversion"],
    },
    {
      id: "under-no-circumstances", type: "sentence", target: "Under no circumstances should this data be shared.",
      gloss: { es: "Bajo ningún concepto deben compartirse estos datos.", en: "Under no circumstances should this data be shared." },
      accept: [{ text: "This data should not be shared under any circumstances." }],
      distractors: ["shouldn't", "is", "sharing"],
      grammar: ["en-g-negative-inversion"],
      tags: ["formal", "inversion"],
    },
    {
      id: "if-we-had-invested", type: "sentence", target: "If we had invested in solar power ten years ago, our bills would be lower now.",
      gloss: { es: "Si hubiéramos invertido en energía solar hace diez años, ahora pagaríamos menos.", en: "If we had invested in solar power ten years ago, our bills would be lower now." },
      accept: [{ text: "If we'd invested in solar power ten years ago, our bills would be lower now." }],
      errors: [{ text: "If we had invested in solar power ten years ago, our bills would have been lower now.", feedback: { es: "La consecuencia es en el presente («now»): would + verbo, no would have." }, ruleId: "en-g-mixed-conditionals" }],
      distractors: ["invested", "will", "before"],
      grammar: ["en-g-mixed-conditionals"],
      annot: { "had invested": { es: "condición en el pasado", en: "past condition" }, "would be": { es: "resultado en el presente", en: "present result" } },
      tags: ["economy", "energy", "conditionals"],
    },
    {
      id: "if-she-werent-so-cautious", type: "sentence", target: "If she weren't so cautious, she would have bought those shares.",
      gloss: { es: "Si no fuera tan prudente, habría comprado esas acciones.", en: "If she weren't so cautious, she would have bought those shares." },
      accept: [{ text: "If she wasn't so cautious, she would have bought those shares." }],
      distractors: ["isn't", "buyed", "will"],
      grammar: ["en-g-mixed-conditionals"],
      tags: ["economy", "conditionals"],
    },
    {
      id: "plastic-is-being-phased-out", type: "sentence", target: "Single-use plastic is being phased out across the country.",
      gloss: { es: "El plástico de un solo uso se está eliminando gradualmente en todo el país.", en: "Single-use plastic is being phased out across the country." },
      distractors: ["phasing", "faced", "along"],
      grammar: ["en-g-passive", "en-g-phrasal-verbs"],
      tags: ["environment", "passive"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-negative-inversion", type: "pattern", target: "Not only… · Never have I… · Rarely do we… · Under no circumstances…",
      gloss: { es: "la inversión negativa (énfasis formal)", en: "negative inversion" },
      pattern: {
        rule: {
          es: "Cuando una expresión negativa o restrictiva abre la frase (never, rarely, seldom, not only, little, under no circumstances, no sooner), el auxiliar va antes del sujeto, como en una pregunta. Si no hay auxiliar, se añade do / does / did. Es enfática y formal.",
          en: "When a negative or restrictive expression starts the sentence (never, rarely, seldom, not only, little, under no circumstances, no sooner), the auxiliary comes before the subject, as in a question. With no auxiliary, add do / does / did. It's emphatic and formal.",
        },
        table: [["normal", "con inversión"], ["I have never seen this.", "Never have I seen this."], ["We rarely eat out.", "Rarely do we eat out."], ["He not only lied, he…", "Not only did he lie, he…"]],
      },
      question: {
        prompt: { es: "Completa: «Seldom ___ such a clear explanation.»", en: "Complete: 'Seldom ___ such a clear explanation.'" },
        options: ["have I heard", "I have heard", "I heard", "heard I"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-negative-inversion"], tags: ["grammar", "inversion", "formal"],
    },
    {
      id: "pat-mixed-conditionals", type: "pattern", target: "If I had…, I would be… · If I were…, I would have…",
      gloss: { es: "condicionales mixtos (pasado ↔ presente)", en: "mixed conditionals" },
      pattern: {
        rule: {
          es: "Mezclan tiempos cuando la condición y el resultado están en momentos distintos. Pasado → presente: if + had + participio, would + verbo (Si hubiera estudiado medicina, ahora sería médica). Presente → pasado: if + pasado, would have + participio (Si no fuera tan tímido, la habría invitado).",
          en: "They mix tenses when condition and result are at different times. Past → present: if + had + participle, would + verb. Present → past: if + past, would have + participle.",
        },
        table: [["condición", "resultado"], ["If I had studied medicine,", "I'd be a doctor now."], ["If he weren't so shy,", "he'd have asked her out."]],
      },
      question: {
        prompt: { es: "«Si hubiera aceptado ese trabajo, ahora viviría en Londres» →", en: "Past choice, present result: 'If I had taken that job, ___ in London now.'" },
        options: ["I would live", "I would have lived", "I will live", "I lived"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-mixed-conditionals"], tags: ["grammar", "conditionals"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-green-tax", type: "dialogue", target: "In the long run, it pays off.",
      gloss: { es: "A la larga, vale la pena.", en: "In the long run, it pays off." },
      turns: [
        { who: "A", target: "The new carbon tax is going to push up the cost of living even more.", gloss: { es: "El nuevo impuesto al carbono va a subir todavía más el costo de vida.", en: "The new carbon tax is going to push up the cost of living even more." } },
        { who: "B", target: "Maybe in the short term. But in the long run, it pays off.", gloss: { es: "Quizás a corto plazo. Pero a la larga, vale la pena.", en: "Maybe in the short term. But in the long run, it pays off." } },
        { who: "A", target: "Not if you're already struggling to pay rent.", gloss: { es: "No si ya te cuesta pagar el alquiler.", en: "Not if you're already struggling to pay rent." } },
        { who: "B", target: "Fair point. That's why part of the money is going to subsidies for low-income families.", gloss: { es: "Buen punto. Por eso parte del dinero va a subsidios para familias de bajos ingresos.", en: "Fair point. That's why part of the money is going to subsidies for low-income families." } },
      ],
      question: {
        prompt: { es: "¿Cómo responde B a la preocupación por las familias pobres?", en: "How does B answer the concern about poorer families?" },
        options: [
          { es: "Parte del dinero irá a subsidios para ellas", en: "Part of the money will fund subsidies for them" },
          { es: "El impuesto no afecta los alquileres", en: "The tax doesn't affect rents" },
          { es: "Admite que el impuesto es un error", en: "B admits the tax is a mistake" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "economy", "environment"],
    },
    {
      id: "lis-report", type: "listening", target: "Not only has renewable energy become cheaper than coal in most countries, but it has also created millions of jobs. Had governments acted sooner, emissions would be far lower today.",
      gloss: { es: "La energía renovable no solo se ha vuelto más barata que el carbón en la mayoría de los países, sino que además ha creado millones de empleos. Si los gobiernos hubieran actuado antes, hoy las emisiones serían mucho más bajas.", en: "Not only has renewable energy become cheaper than coal in most countries, but it has also created millions of jobs. Had governments acted sooner, emissions would be far lower today." },
      question: {
        prompt: { es: "Según el texto, ¿qué habría pasado si los gobiernos hubieran actuado antes?", en: "According to the text, what would have happened if governments had acted sooner?" },
        options: [
          { es: "Hoy las emisiones serían mucho más bajas", en: "Emissions would be much lower today" },
          { es: "El carbón sería más barato", en: "Coal would be cheaper" },
          { es: "Habría menos empleos", en: "There would be fewer jobs" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "environment", "inversion"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-economic", type: "bridge", onlyFor: "es", target: "economical",
      gloss: { es: "económico/a (que ahorra, barato)", en: "economical (saves money)" },
      question: {
        prompt: { es: "Un auto que gasta poca nafta (gasolina) es…", en: "A car that uses little gas is…" },
        options: ["an economical car", "an economic car", "an economy car's"],
        answer: 0,
      },
      note: { es: "economic = de la economía (economic growth); economical = que ahorra o es barato de usar." },
      exercises: ["guess", "question"], tags: ["bridge", "economy"],
    },
    {
      id: "br-actual", type: "bridge", onlyFor: "es", target: "current",
      gloss: { es: "actual, del momento", en: "current (present-day)" },
      question: {
        prompt: { es: "«the actual cost» significa…", en: "'the actual cost' means…" },
        options: [
          { es: "el costo real", en: "the real cost" },
          { es: "el costo actual (de hoy)", en: "today's cost" },
          { es: "el costo aproximado", en: "the estimated cost" },
        ],
        answer: 0,
      },
      note: { es: "actual = real, verdadero; «actual» en español es «current» o «present»: the current situation." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "economy"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "growth", type: "word", target: "growth",
      gloss: { es: "crecimiento", en: "growth" },
      distractors: ["grown", "growl", "grove"],
      tags: ["economy"],
    },
    {
      id: "emissions", type: "word", target: "emissions",
      gloss: { es: "emisiones", en: "emissions" },
      distractors: ["omissions", "missions", "emotions"],
      tags: ["environment"],
    },
  ]),
};
