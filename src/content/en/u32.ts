import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u32",
  lang: "en",
  index: 32,
  cefr: "C2",
  title: { target: "Shades of meaning", es: "Matices de significado", en: "Shades of meaning" },
  canDo: [
    { es: "Distingo sinónimos cercanos por su connotación (thrifty / stingy, assertive / pushy).", en: "I can tell near-synonyms apart by connotation (thrifty / stingy, assertive / pushy)." },
    { es: "Uso colocaciones naturales de adverbio + adjetivo (bitterly disappointed, highly unlikely).", en: "I can use natural adverb + adjective collocations (bitterly disappointed, highly unlikely)." },
    { es: "Sé expresar concesión con estilo: Strange as it may seem…, Much as I admire…", en: "I can express concession with style: Strange as it may seem…, Much as I admire…" },
  ],
  icon: "🔍",
  items: build("en", 32, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "connotation", type: "word", pos: "noun", target: "connotation", plural: "connotations",
      gloss: { es: "connotación", en: "connotation" },
      distractors: ["denotation", "connection", "notation"],
      tags: ["nuance", "language"],
    },
    {
      id: "thrifty", type: "word", pos: "adj", target: "thrifty",
      gloss: { es: "ahorrativo/a (con connotación positiva)", en: "thrifty" },
      distractors: ["stingy", "thirsty", "shifty"],
      note: { es: "Elogia a quien gasta con cuidado; «stingy» critica a quien no quiere gastar." },
      tags: ["nuance", "connotation"],
    },
    {
      id: "stingy", type: "word", pos: "adj", target: "stingy",
      gloss: { es: "tacaño/a, codo/a (con connotación negativa)", en: "stingy" },
      distractors: ["thrifty", "stinging", "stringy"],
      tags: ["nuance", "connotation"],
    },
    {
      id: "assertive", type: "word", pos: "adj", target: "assertive",
      gloss: { es: "firme, seguro/a al defender sus ideas (positivo)", en: "assertive" },
      distractors: ["aggressive", "assorted", "asserting"],
      tags: ["nuance", "connotation", "personality"],
    },
    {
      id: "pushy", type: "word", pos: "adj", target: "pushy",
      gloss: { es: "avasallador/a, que presiona demasiado (negativo)", en: "pushy" },
      distractors: ["pushed", "bushy", "pushing"],
      tags: ["nuance", "connotation", "personality"],
    },
    {
      id: "slender", type: "word", pos: "adj", target: "slender",
      gloss: { es: "esbelto/a, delgado/a (elogioso)", en: "slender" },
      distractors: ["skinny", "slander", "splendid"],
      note: { es: "«slim» y «slender» son elogiosos; «skinny» puede sonar a flaco/a de más." },
      tags: ["nuance", "connotation", "appearance"],
    },
    {
      id: "bitterly-disappointed", type: "phrase", pos: "phrase", target: "bitterly disappointed",
      gloss: { es: "amargamente decepcionado/a", en: "bitterly disappointed" },
      accept: [{ text: "deeply disappointed" }],
      distractors: ["bitter disappointed", "highly disappointed", "bitterly disappointing"],
      errors: [{ text: "bitterly disappointing", feedback: { es: "-ed describe cómo te sientes (disappointed); -ing, lo que lo causa (a disappointing result)." } }],
      grammar: ["en-g-adverb-collocations"],
      tags: ["collocations"],
    },
    {
      id: "highly-unlikely", type: "phrase", pos: "phrase", target: "highly unlikely",
      gloss: { es: "muy poco probable", en: "highly unlikely" },
      accept: [{ text: "extremely unlikely" }, { text: "very unlikely" }],
      distractors: ["high unlikely", "highly unlikable", "strongly unlikely"],
      grammar: ["en-g-adverb-collocations"],
      tags: ["collocations"],
    },
    {
      id: "utterly-exhausted", type: "phrase", pos: "phrase", target: "utterly exhausted",
      gloss: { es: "completamente agotado/a, rendido/a", en: "utterly exhausted" },
      accept: [{ text: "completely exhausted" }, { text: "totally exhausted" }],
      distractors: ["utter exhausted", "utterly exhausting", "highly exhausted"],
      grammar: ["en-g-adverb-collocations"],
      tags: ["collocations"],
    },
    {
      id: "fully-aware", type: "phrase", pos: "phrase", target: "fully aware",
      gloss: { es: "plenamente consciente (de algo)", en: "fully aware" },
      distractors: ["fully conscious", "full aware", "highly aware"],
      errors: [{ text: "fully conscious", feedback: { es: "«conscious» es estar despierto/a o consciente físicamente; «darse cuenta de algo» es «be aware of»." } }],
      grammar: ["en-g-adverb-collocations"],
      tags: ["collocations", "false-friend"],
    },
    {
      id: "a-far-cry-from", type: "phrase", pos: "phrase", target: "a far cry from",
      gloss: { es: "muy distinto de, nada que ver con", en: "a far cry from" },
      distractors: ["a far crying from", "a long cry from", "far cry of"],
      tags: ["idioms", "nuance"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "strange-as-it-may-seem", type: "sentence", target: "Strange as it may seem, I actually enjoy doing my taxes.",
      gloss: { es: "Por raro que parezca, de verdad disfruto haciendo mi declaración de impuestos.", en: "Strange as it may seem, I actually enjoy doing my taxes." },
      accept: [{ text: "As strange as it may seem, I actually enjoy doing my taxes." }, { text: "Strange though it may seem, I actually enjoy doing my taxes." }],
      errors: [{ text: "Although strange it may seem, I actually enjoy doing my taxes.", feedback: { es: "La concesión con inversión es adjetivo + as / though + sujeto + verbo: Strange as it may seem." }, ruleId: "en-g-concessive-as" }],
      distractors: ["Although", "seems", "like"],
      grammar: ["en-g-concessive-as"],
      annot: { "Strange as it may seem": { es: "concesión: por raro que parezca", en: "concession: however strange it seems" } },
      tags: ["concession", "style"],
    },
    {
      id: "try-as-she-might", type: "sentence", target: "Try as she might, she couldn't open the jar.",
      gloss: { es: "Por más que lo intentó, no pudo abrir el frasco.", en: "Try as she might, she couldn't open the jar." },
      accept: [{ text: "However hard she tried, she couldn't open the jar." }, { text: "Try as she might, she could not open the jar." }],
      errors: [{ text: "Tried as she might, she couldn't open the jar.", feedback: { es: "En esta fórmula fija el verbo va en forma base: Try as she might." }, ruleId: "en-g-concessive-as" }],
      distractors: ["Tried", "may", "could"],
      grammar: ["en-g-concessive-as"],
      tags: ["concession", "style"],
    },
    {
      id: "much-as-i-admire", type: "sentence", target: "Much as I admire his work, I find him difficult to deal with.",
      gloss: { es: "Por mucho que admire su trabajo, me cuesta tratar con él.", en: "Much as I admire his work, I find him difficult to deal with." },
      accept: [{ text: "Although I admire his work, I find him difficult to deal with." }],
      distractors: ["Many", "admired", "dealing"],
      grammar: ["en-g-concessive-as"],
      annot: { "Much as": { es: "aunque, por mucho que", en: "although, however much" } },
      tags: ["concession", "style"],
    },
    {
      id: "frugal-rather-than-stingy", type: "sentence", target: "I'd describe her as frugal rather than stingy.",
      gloss: { es: "Yo diría que es ahorrativa, más que tacaña.", en: "I'd describe her as frugal rather than stingy." },
      accept: [{ text: "I would describe her as frugal rather than stingy." }],
      distractors: ["like", "more", "then"],
      errors: [{ text: "I'd describe her like frugal rather than stingy.", feedback: { es: "Se dice «describe someone as…», no «like»." } }],
      tags: ["nuance", "connotation"],
    },
    {
      id: "bitterly-disappointed-decision", type: "sentence", target: "We were bitterly disappointed by the decision.",
      gloss: { es: "La decisión nos decepcionó profundamente.", en: "We were bitterly disappointed by the decision." },
      accept: [{ text: "We were bitterly disappointed with the decision." }, { text: "We were deeply disappointed by the decision." }],
      distractors: ["bitter", "disappointing", "of"],
      grammar: ["en-g-adverb-collocations"],
      tags: ["collocations", "emotions"],
    },
    {
      id: "highly-unlikely-minds", type: "sentence", target: "It's highly unlikely that they'll change their minds.",
      gloss: { es: "Es muy poco probable que cambien de opinión.", en: "It's highly unlikely that they'll change their minds." },
      accept: [{ text: "It is highly unlikely that they will change their minds." }, { text: "It's highly unlikely that they'll change their mind." }],
      distractors: ["high", "likely", "opinion"],
      grammar: ["en-g-adverb-collocations"],
      tags: ["collocations"],
    },
    {
      id: "distinctly-chilly", type: "sentence", target: "Her tone was polite but distinctly chilly.",
      gloss: { es: "Su tono era educado, pero claramente frío.", en: "Her tone was polite but distinctly chilly." },
      distractors: ["distinct", "chili", "politely"],
      note: { es: "«distinctly» = claramente, notablemente; «distinct» es el adjetivo (distinto, claro)." },
      grammar: ["en-g-adverb-collocations"],
      tags: ["nuance", "collocations"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-adverb-collocations", type: "pattern", target: "bitterly disappointed · highly unlikely · utterly exhausted",
      gloss: { es: "colocaciones de adverbio + adjetivo", en: "adverb + adjective collocations" },
      pattern: {
        rule: {
          es: "A nivel C2, «very» se queda corto: cada adjetivo tiene sus adverbios preferidos. «highly» va con probabilidad y elogio (highly likely, highly recommended); «bitterly», con decepción y frío; «utterly / absolutely», con adjetivos extremos (exhausted, ridiculous); «deeply», con emociones (deeply moved).",
          en: "At C2, 'very' isn't enough: each adjective has preferred adverbs. 'highly' goes with likelihood and praise (highly likely, highly recommended); 'bitterly' with disappointment and cold; 'utterly / absolutely' with extreme adjectives (exhausted, ridiculous); 'deeply' with emotions (deeply moved).",
        },
        table: [["adverbio", "colocaciones típicas"], ["highly", "likely, unlikely, recommended"], ["bitterly", "disappointed, cold, opposed"], ["utterly", "exhausted, ridiculous, alone"], ["deeply", "moved, concerned, offended"], ["fully", "aware, booked, committed"]],
      },
      question: {
        prompt: { es: "¿Qué combinación suena natural?", en: "Which combination sounds natural?" },
        options: ["highly recommended", "bitterly recommended", "utterly recommended", "deeply recommended"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-adverb-collocations"], tags: ["grammar", "collocations"],
    },
    {
      id: "pat-concessive-as", type: "pattern", target: "Strange as it may seem… · Try as I might… · Much as I like…",
      gloss: { es: "concesión con «as»", en: "concession with 'as'" },
      pattern: {
        rule: {
          es: "Una forma elegante de decir «aunque / por más que»: se pone delante el adjetivo, el adverbio o el verbo base, y después as (o though) + sujeto + verbo. «Much as» + oración = aunque mucho. «Try as I might» es una fórmula fija: por más que lo intente / intentara.",
          en: "An elegant way to say 'although / however much': put the adjective, adverb or base verb first, then as (or though) + subject + verb. 'Much as' + clause = although… very much. 'Try as I might' is a fixed phrase: however hard I try / tried.",
        },
        table: [["neutro", "con «as»"], ["Although it seems strange, …", "Strange as it may seem, …"], ["Although I like him, …", "Much as I like him, …"], ["However hard I tried, …", "Try as I might, …"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["Tired as he was, he kept working.", "As tired he was, he kept working.", "Tired as was he, he kept working.", "Although tired as he was, he kept working."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-concessive-as"], tags: ["grammar", "concession", "style"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-new-manager", type: "dialogue", target: "Assertive? I'd have said pushy.",
      gloss: { es: "¿Firme? Yo diría avasalladora.", en: "Assertive? I'd have said pushy." },
      turns: [
        { who: "A", target: "So what's the new manager like?", gloss: { es: "¿Y cómo es la nueva gerente?", en: "So what's the new manager like?" } },
        { who: "B", target: "Assertive, I'd say. She knows exactly what she wants.", gloss: { es: "Firme, diría yo. Sabe exactamente lo que quiere.", en: "Assertive, I'd say. She knows exactly what she wants." } },
        { who: "A", target: "Assertive? I'd have said pushy. She rewrote my whole report without even asking.", gloss: { es: "¿Firme? Yo diría avasalladora. Reescribió todo mi informe sin siquiera preguntarme.", en: "Assertive? I'd have said pushy. She rewrote my whole report without even asking." } },
        { who: "B", target: "Fair point. Much as I like her, she could be a little more tactful.", gloss: { es: "Tienes razón. Por mucho que me caiga bien, podría tener un poco más de tacto.", en: "Fair point. Much as I like her, she could be a little more tactful." } },
      ],
      question: {
        prompt: { es: "¿Cómo ve A a la nueva gerente comparado con B?", en: "How does A see the new manager compared with B?" },
        options: [
          { es: "De forma más negativa", en: "More negatively" },
          { es: "De forma más positiva", en: "More positively" },
          { es: "Exactamente igual", en: "In exactly the same way" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "connotation", "personality"],
    },
    {
      id: "lis-advertising", type: "listening", target: "Advertisers choose their words with great care. A used car becomes pre-owned, a tiny apartment becomes cozy, and a price increase is politely called an adjustment. The facts remain exactly the same; only the connotation changes.",
      gloss: { es: "Los publicistas eligen sus palabras con mucho cuidado. Un auto usado pasa a ser «de segunda mano certificado», un apartamento (departamento) minúsculo se vuelve «acogedor» y una subida de precio se llama, con educación, «un ajuste». Los hechos siguen siendo exactamente los mismos; solo cambia la connotación.", en: "Advertisers choose their words with great care. A used car becomes pre-owned, a tiny apartment becomes cozy, and a price increase is politely called an adjustment. The facts remain exactly the same; only the connotation changes." },
      question: {
        prompt: { es: "Según el texto, ¿qué cambian los publicistas?", en: "According to the text, what do advertisers change?" },
        options: [
          { es: "La connotación de las palabras", en: "The connotation of the words" },
          { es: "Los precios de los productos", en: "The prices of the products" },
          { es: "El tamaño de los departamentos", en: "The size of the apartments" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "connotation", "advertising"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-notorious", type: "bridge", onlyFor: "es", target: "notorious",
      gloss: { es: "de mala fama, tristemente célebre", en: "notorious" },
      question: {
        prompt: { es: "«a notorious criminal» es un delincuente…", en: "'a notorious criminal' is a criminal who is…" },
        options: [
          { es: "famoso por lo malo que ha hecho", en: "famous for the bad things they did" },
          { es: "obvio, evidente", en: "obvious" },
          { es: "poco conocido", en: "little known" },
        ],
        answer: 0,
      },
      note: { es: "notorious = famoso/a por algo malo; «notorio» (evidente) se dice «obvious» o «noticeable»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "connotation"],
    },
    {
      id: "br-consistent", type: "bridge", onlyFor: "es", target: "consistent",
      gloss: { es: "coherente, constante", en: "consistent" },
      question: {
        prompt: { es: "«Her work is very consistent» significa que su trabajo es…", en: "'Her work is very consistent' means her work is…" },
        options: [
          { es: "constante, siempre del mismo nivel", en: "steady, always of the same standard" },
          { es: "sólido y espeso", en: "solid and thick" },
          { es: "muy abundante", en: "very plentiful" },
        ],
        answer: 0,
      },
      note: { es: "consistent = coherente, constante; «consistente» (firme, espeso) se dice «solid» o «thick»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
