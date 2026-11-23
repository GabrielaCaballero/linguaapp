import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u27",
  lang: "en",
  index: 27,
  cefr: "C1",
  title: { target: "Science and academic writing", es: "Ciencia y escritura académica", en: "Science and academic writing" },
  canDo: [
    { es: "Puedo entender artículos científicos y de divulgación sobre temas de mi campo.", en: "I can understand scientific and popular-science articles in my field." },
    { es: "Puedo escribir con cautela académica, sin afirmar más de lo que muestran los datos.", en: "I can write with academic caution, claiming no more than the data shows." },
    { es: "Sé usar el «hedging» (appears to, may, tend to) y la nominalización (the increase in…).", en: "I can use hedging (appears to, may, tend to) and nominalization (the increase in…)." },
  ],
  icon: "🔬",
  items: build("en", 27, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "findings", type: "word", target: "findings",
      gloss: { es: "resultados, hallazgos (de una investigación)", en: "findings" },
      distractors: ["fundings", "finding's", "foundings"],
      tags: ["academic", "science"],
    },
    {
      id: "sample", type: "word", target: "sample", plural: "samples",
      gloss: { es: "muestra (de un estudio)", en: "sample" },
      distractors: ["simple", "example", "sampler"],
      tags: ["academic", "science"],
    },
    {
      id: "hypothesis", type: "word", target: "hypothesis", plural: "hypotheses",
      gloss: { es: "hipótesis", en: "hypothesis" },
      distractors: ["hypotheses", "hipothesis", "hypnosis"],
      note: { es: "Plural irregular: hypotheses (como crisis → crises, analysis → analyses)." },
      tags: ["academic", "science"],
    },
    {
      id: "peer-reviewed", type: "word", pos: "adj", target: "peer-reviewed",
      gloss: { es: "revisado/a por pares (arbitrado)", en: "peer-reviewed" },
      accept: [{ text: "peer reviewed" }],
      distractors: ["pair-reviewed", "peer-viewed", "pre-reviewed"],
      tags: ["academic"],
    },
    {
      id: "significant", type: "word", pos: "adj", target: "significant",
      gloss: { es: "significativo/a, considerable", en: "significant" },
      distractors: ["signified", "insignificant", "signature"],
      tags: ["academic"],
    },
    {
      id: "furthermore", type: "word", pos: "adv", target: "furthermore",
      gloss: { es: "además (formal)", en: "furthermore" },
      accept: [{ text: "moreover" }, { text: "in addition" }],
      distractors: ["farthermore", "nevertheless", "therefore"],
      tags: ["academic", "linkers"],
    },
    {
      id: "therefore", type: "word", pos: "adv", target: "therefore",
      gloss: { es: "por lo tanto", en: "therefore" },
      accept: [{ text: "thus" }, { text: "consequently" }],
      distractors: ["therefor", "however", "wherefore"],
      tags: ["academic", "linkers"],
    },
    {
      id: "to-some-extent", type: "phrase", pos: "phrase", target: "to some extent",
      gloss: { es: "hasta cierto punto", en: "to some extent" },
      accept: [{ text: "to a certain extent" }],
      distractors: ["to some extend", "in some extent", "until some point"],
      tags: ["academic", "hedging"],
    },
    {
      id: "it-could-be-argued", type: "phrase", pos: "phrase", target: "It could be argued that…",
      gloss: { es: "Se podría sostener que…", en: "It could be argued that…" },
      accept: [{ text: "One could argue that…" }],
      distractors: ["It could be discussed that…", "It could argue that…", "Could be argued that…"],
      grammar: ["en-g-hedging"],
      tags: ["academic", "hedging", "chunk"],
    },
    {
      id: "data", type: "word", target: "data",
      gloss: { es: "datos", en: "data" },
      distractors: ["date", "datum's", "dates"],
      note: { es: "En textos académicos a veces va en plural (the data are), pero en general se usa en singular (the data is)." },
      tags: ["academic", "science"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "results-suggest", type: "sentence", target: "The results suggest that sleep may affect memory.",
      gloss: { es: "Los resultados indican que el sueño podría influir en la memoria.", en: "The results suggest that sleep may affect memory." },
      errors: [{ text: "The results prove that sleep affects memory.", feedback: { es: "Un solo estudio rara vez «prueba» algo: suggest / may suavizan la afirmación." }, ruleId: "en-g-hedging" }],
      distractors: ["prove", "effect", "will"],
      grammar: ["en-g-hedging"],
      tags: ["academic", "hedging"],
    },
    {
      id: "appears-to-be", type: "sentence", target: "There appears to be a link between diet and mood.",
      gloss: { es: "Parece haber una relación entre la dieta y el estado de ánimo.", en: "There appears to be a link between diet and mood." },
      accept: [{ text: "There seems to be a link between diet and mood." }],
      distractors: ["appear", "is", "among"],
      grammar: ["en-g-hedging"],
      annot: { "appears to be": { es: "atenúa: no se afirma con certeza", en: "hedges: no claim of certainty" } },
      tags: ["academic", "hedging"],
    },
    {
      id: "tend-to", type: "sentence", target: "Older participants tended to perform less well.",
      gloss: { es: "Los participantes de mayor edad tendieron a rendir menos.", en: "Older participants tended to perform less well." },
      accept: [{ text: "Older participants tended to perform worse." }],
      distractors: ["tend", "good", "less good"],
      grammar: ["en-g-hedging"],
      tags: ["academic", "hedging"],
    },
    {
      id: "the-increase-in", type: "sentence", target: "The increase in temperatures has led to a decline in crops.",
      gloss: { es: "El aumento de las temperaturas ha provocado una caída de las cosechas.", en: "The increase in temperatures has led to a decline in crops." },
      errors: [{ text: "The increase of temperatures has led to a decline of crops.", feedback: { es: "increase / decline / rise + in: the increase in temperatures." }, ruleId: "en-g-nominalisation" }],
      distractors: ["of", "lead", "decrease"],
      grammar: ["en-g-nominalisation"],
      tags: ["academic", "science", "nominalization"],
    },
    {
      id: "the-analysis-of", type: "sentence", target: "Analysis of the data revealed significant differences.",
      gloss: { es: "El análisis de los datos reveló diferencias significativas.", en: "Analysis of the data revealed significant differences." },
      accept: [{ text: "An analysis of the data revealed significant differences." }, { text: "The analysis of the data revealed significant differences." }],
      distractors: ["Analyzing", "showed up", "significants"],
      grammar: ["en-g-nominalisation"],
      tags: ["academic", "nominalization"],
    },
    {
      id: "further-research", type: "sentence", target: "Further research is needed to confirm these findings.",
      gloss: { es: "Se necesita más investigación para confirmar estos resultados.", en: "Further research is needed to confirm these findings." },
      errors: [{ text: "More researches are needed to confirm these findings.", feedback: { es: "«research» es incontable: further research is needed." } }],
      distractors: ["researches", "are", "farther"],
      grammar: ["en-g-hedging"],
      tags: ["academic", "science"],
    },
    {
      id: "this-paper-examines", type: "sentence", target: "This paper examines the impact of remote work on productivity.",
      gloss: { es: "Este artículo analiza el impacto del trabajo remoto en la productividad.", en: "This paper examines the impact of remote work on productivity." },
      accept: [{ text: "This paper explores the impact of remote work on productivity." }],
      distractors: ["papers", "in", "investigates of"],
      grammar: ["en-g-nominalisation"],
      tags: ["academic"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-hedging", type: "pattern", target: "may · appears to · tends to · It could be argued that…",
      gloss: { es: "hedging: la cautela académica", en: "hedging" },
      pattern: {
        rule: {
          es: "En inglés académico no se afirma más de lo que los datos permiten. Se atenúa con modales (may, might, could), verbos como appear, seem, tend, suggest, indicate, adverbios (possibly, likely, to some extent) y estructuras impersonales («It could be argued that…»).",
          en: "Academic English claims no more than the data allows. Hedge with modals (may, might, could), verbs like appear, seem, tend, suggest, indicate, adverbs (possibly, likely, to some extent) and impersonal structures ('It could be argued that…').",
        },
        table: [["demasiado fuerte", "con hedging"], ["This proves that…", "This suggests that…"], ["Coffee causes insomnia.", "Coffee may contribute to insomnia."], ["Women are better at…", "Women tend to perform better at…"]],
      },
      question: {
        prompt: { es: "¿Cuál suena más académica?", en: "Which sounds most academic?" },
        options: ["These findings indicate that the treatment may be effective.", "These findings prove the treatment works.", "The treatment works, for sure.", "Obviously, the treatment is effective."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-hedging"], tags: ["grammar", "academic", "hedging"],
    },
    {
      id: "pat-nominalisation", type: "pattern", target: "prices rose → the rise in prices",
      gloss: { es: "la nominalización (verbo → sustantivo)", en: "nominalization" },
      pattern: {
        rule: {
          es: "El inglés académico y formal convierte verbos y adjetivos en sustantivos para condensar información y sonar objetivo: «prices rose sharply» → «the sharp rise in prices». Con increase, rise, decline, drop va «in»; con analysis, development, impact, el complemento suele ir con «of» u «on».",
          en: "Academic and formal English turns verbs and adjectives into nouns to pack in information and sound objective: 'prices rose sharply' → 'the sharp rise in prices'. increase, rise, decline, drop take 'in'; analysis, development, impact take 'of' or 'on'.",
        },
        table: [["verbal", "nominal"], ["Prices rose sharply.", "the sharp rise in prices"], ["They analyzed the data.", "the analysis of the data"], ["It affects children.", "its impact on children"]],
      },
      question: {
        prompt: { es: "Nominaliza: «Unemployment dropped significantly.»", en: "Nominalize: 'Unemployment dropped significantly.'" },
        options: ["a significant drop in unemployment", "a significantly drop of unemployment", "the dropping significant of unemployment", "a significant drop to unemployment"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-nominalisation"], tags: ["grammar", "academic", "nominalization"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-supervisor", type: "dialogue", target: "You might want to hedge that claim.",
      gloss: { es: "Quizás convendría matizar esa afirmación.", en: "You might want to hedge that claim." },
      turns: [
        { who: "A", target: "I've read your draft. The introduction is clear, but this sentence worries me: \"Social media causes depression.\"", gloss: { es: "Leí tu borrador. La introducción es clara, pero esta frase me preocupa: «Las redes sociales causan depresión».", en: "I've read your draft. The introduction is clear, but this sentence worries me: \"Social media causes depression.\"" } },
        { who: "B", target: "But my data shows a strong correlation.", gloss: { es: "Pero mis datos muestran una correlación fuerte.", en: "But my data shows a strong correlation." } },
        { who: "A", target: "Correlation isn't causation. You might want to hedge that claim, something like \"heavy use may be associated with…\"", gloss: { es: "Correlación no es causalidad. Quizás convendría matizar esa afirmación, algo como «el uso intensivo podría estar asociado con…».", en: "Correlation isn't causation. You might want to hedge that claim, something like \"heavy use may be associated with…\"" } },
        { who: "B", target: "That makes sense. I'll also mention that the sample was quite small.", gloss: { es: "Tiene sentido. También voy a mencionar que la muestra era bastante pequeña.", en: "That makes sense. I'll also mention that the sample was quite small." } },
      ],
      question: {
        prompt: { es: "¿Qué le critica la supervisora?", en: "What does the supervisor criticize?" },
        options: [
          { es: "Que afirma una causa cuando solo hay correlación", en: "Claiming causation from a correlation" },
          { es: "Que la introducción es confusa", en: "An unclear introduction" },
          { es: "Que la muestra es demasiado grande", en: "A sample that is too large" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "academic", "hedging"],
    },
    {
      id: "lis-abstract", type: "listening", target: "This study investigates the relationship between green spaces and well-being. Our findings suggest that residents living near parks tend to report lower stress levels, although further research is needed.",
      gloss: { es: "Este estudio investiga la relación entre los espacios verdes y el bienestar. Nuestros resultados indican que los vecinos que viven cerca de parques tienden a declarar niveles de estrés más bajos, aunque hace falta más investigación.", en: "This study investigates the relationship between green spaces and well-being. Our findings suggest that residents living near parks tend to report lower stress levels, although further research is needed." },
      question: {
        prompt: { es: "¿Cómo presentan los autores su conclusión?", en: "How do the authors present their conclusion?" },
        options: [
          { es: "Con cautela: los resultados lo indican, pero falta investigar", en: "Cautiously: the results suggest it, but more research is needed" },
          { es: "Como algo totalmente demostrado", en: "As fully proven" },
          { es: "Como una opinión personal", en: "As a personal opinion" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "academic", "science"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-evidence", type: "bridge", onlyFor: "es", target: "evident",
      gloss: { es: "evidente, obvio", en: "evident (obvious)" },
      question: {
        prompt: { es: "«There is no evidence that…» significa…", en: "'There is no evidence that…' means…" },
        options: [
          { es: "No hay pruebas de que…", en: "There's no proof that…" },
          { es: "No es evidente que…", en: "It isn't obvious that…" },
          { es: "No hay ninguna duda de que…", en: "There's no doubt that…" },
        ],
        answer: 0,
      },
      note: { es: "evidence = pruebas (incontable); «evidente» es «evident» u «obvious»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "academic"],
    },
    {
      id: "br-lecture", type: "bridge", onlyFor: "es", target: "lecture",
      gloss: { es: "clase magistral, conferencia", en: "lecture (talk at university)" },
      question: {
        prompt: { es: "«I have a lecture at nine» significa…", en: "'I have a lecture at nine' means…" },
        options: [
          { es: "Tengo una clase (en la universidad) a las nueve.", en: "I have a university class at nine." },
          { es: "Tengo una lectura a las nueve.", en: "I have some reading to do at nine." },
          { es: "Tengo que leer en voz alta a las nueve.", en: "I must read aloud at nine." },
        ],
        answer: 0,
      },
      note: { es: "lecture = clase o conferencia; «lectura» es «reading»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "academic"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "research", type: "word", target: "research",
      gloss: { es: "investigación (académica)", en: "research" },
      distractors: ["researches", "search", "researcher"],
      note: { es: "Es incontable: some research, a piece of research." },
      tags: ["academic", "uncountable"],
    },
    {
      id: "argue", type: "word", pos: "verb", target: "argue",
      gloss: { es: "sostener, argumentar (una postura)", en: "to argue (a position)" },
      distractors: ["agree", "arque", "augur"],
      note: { es: "También significa «discutir, pelear»." },
      tags: ["academic"],
    },
  ]),
};
