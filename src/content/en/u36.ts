import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u36",
  lang: "en",
  index: 36,
  cefr: "C2",
  title: { target: "Figures of speech", es: "Lenguaje figurado", en: "Figures of speech" },
  canDo: [
    { es: "Entiendo y uso metáforas e imágenes frecuentes (the tip of the iceberg, a double-edged sword).", en: "I can understand and use common metaphors and images (the tip of the iceberg, a double-edged sword)." },
    { es: "Reconozco las diferencias principales entre el inglés de EE. UU. y el británico.", en: "I can recognize the main differences between American and British English." },
    { es: "Sé dar énfasis con inversión (So great was…, Such was…) y usar el pasado irreal (It's high time we…, I'd rather you…).", en: "I can add emphasis with inversion (So great was…, Such was…) and use the unreal past (It's high time we…, I'd rather you…)." },
  ],
  icon: "🌍",
  items: build("en", 36, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "metaphor", type: "word", pos: "noun", target: "metaphor", plural: "metaphors",
      gloss: { es: "metáfora", en: "metaphor" },
      distractors: ["metaphore", "metamorphosis", "simile"],
      note: { es: "«a simile» es una comparación con «like» o «as»: «as cold as ice»." },
      tags: ["figurative", "language"],
    },
    {
      id: "vivid", type: "word", pos: "adj", target: "vivid",
      gloss: { es: "vívido/a, intenso/a (una imagen, un recuerdo)", en: "vivid" },
      distractors: ["livid", "vivacious", "avid"],
      tags: ["figurative", "style"],
    },
    {
      id: "skyrocket", type: "word", pos: "verb", target: "skyrocket",
      gloss: { es: "dispararse (precios, cifras)", en: "to skyrocket" },
      distractors: ["sky-rock", "skydive", "rocketing"],
      tags: ["figurative", "economy"],
    },
    {
      id: "plummet", type: "word", pos: "verb", target: "plummet",
      gloss: { es: "desplomarse, caer en picada", en: "to plummet" },
      distractors: ["plume", "plumber", "pummel"],
      tags: ["figurative", "economy"],
    },
    {
      id: "flashlight", type: "word", pos: "noun", target: "flashlight", plural: "flashlights",
      gloss: { es: "linterna", en: "flashlight" },
      accept: [{ text: "torch" }],
      distractors: ["lantern", "flashing light", "flash lamp"],
      note: { es: "En el Reino Unido se dice «torch»; «lantern» es un farol." },
      tags: ["us-uk"],
    },
    {
      id: "double-edged-sword", type: "phrase", pos: "phrase", target: "a double-edged sword",
      gloss: { es: "un arma de doble filo", en: "a double-edged sword" },
      distractors: ["a double-sided knife", "a double-bladed knife", "a double-faced sword"],
      tags: ["figurative", "idioms"],
    },
    {
      id: "tip-of-the-iceberg", type: "phrase", pos: "phrase", target: "the tip of the iceberg",
      gloss: { es: "la punta del iceberg", en: "the tip of the iceberg" },
      distractors: ["the top of the iceberg", "the peak of the iceberg", "the point of the ice"],
      tags: ["figurative", "idioms"],
    },
    {
      id: "drop-in-the-bucket", type: "phrase", pos: "phrase", target: "a drop in the bucket",
      gloss: { es: "una gota en el mar (algo insignificante)", en: "a drop in the bucket" },
      accept: [{ text: "a drop in the ocean" }],
      distractors: ["a drop in the glass", "a drip in the bucket", "a drop on the bucket"],
      note: { es: "En inglés británico se dice «a drop in the ocean»." },
      tags: ["figurative", "idioms", "us-uk"],
    },
    {
      id: "open-a-can-of-worms", type: "phrase", pos: "phrase", target: "open a can of worms",
      gloss: { es: "meterse en un avispero, destapar un problema mayor", en: "to open a can of worms" },
      distractors: ["open a box of worms", "open a can of snakes", "open a can of bugs"],
      tags: ["figurative", "idioms"],
    },
    {
      id: "its-high-time", type: "phrase", pos: "phrase", target: "It's high time…",
      gloss: { es: "Ya va siendo hora de que…", en: "It's high time…" },
      accept: [{ text: "It is high time…" }, { text: "It's about time…" }],
      distractors: ["It's high hour…", "It's tall time…", "It's the high time…"],
      grammar: ["en-g-unreal-past"],
      tags: ["unreal-past", "chunk"],
    },
    {
      id: "id-rather-you-didnt", type: "phrase", pos: "phrase", target: "I'd rather you didn't.",
      gloss: { es: "Preferiría que no lo hicieras.", en: "I'd rather you didn't." },
      accept: [{ text: "I would rather you didn't." }, { text: "I would rather you did not." }],
      distractors: ["I'd rather you don't.", "I'd rather you not to.", "I'd better you didn't."],
      errors: [{ text: "I'd rather you don't.", feedback: { es: "Con «would rather» + otra persona, el verbo va en pasado aunque hables del presente: I'd rather you didn't." }, ruleId: "en-g-unreal-past" }],
      grammar: ["en-g-unreal-past"],
      tags: ["unreal-past", "tact"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "so-great-was-the-demand", type: "sentence", target: "So great was the demand that the tickets sold out in minutes.",
      gloss: { es: "Era tal la demanda que las entradas (los boletos) se agotaron en minutos.", en: "So great was the demand that the tickets sold out in minutes." },
      accept: [{ text: "The demand was so great that the tickets sold out in minutes." }],
      errors: [{ text: "So great the demand was that the tickets sold out in minutes.", feedback: { es: "Si «So + adjetivo» va al principio, se invierte el verbo: So great was the demand…" }, ruleId: "en-g-so-such-inversion" }],
      distractors: ["Such", "sell", "minute"],
      grammar: ["en-g-so-such-inversion"],
      annot: { "So great was the demand": { es: "inversión enfática: verbo antes del sujeto", en: "emphatic inversion: verb before subject" } },
      tags: ["inversion", "emphasis"],
    },
    {
      id: "such-was-her-influence", type: "sentence", target: "Such was her influence that nobody dared to contradict her.",
      gloss: { es: "Su influencia era tal que nadie se atrevía a contradecirla.", en: "Such was her influence that nobody dared to contradict her." },
      accept: [{ text: "Such was her influence that nobody dared contradict her." }, { text: "Her influence was such that nobody dared to contradict her." }, { text: "Such was her influence that no one dared to contradict her." }],
      distractors: ["So", "dare", "contradicted"],
      grammar: ["en-g-so-such-inversion"],
      tags: ["inversion", "emphasis"],
    },
    {
      id: "high-time-we-stopped", type: "sentence", target: "It's high time we stopped blaming each other.",
      gloss: { es: "Ya es hora de que dejemos de echarnos la culpa.", en: "It's high time we stopped blaming each other." },
      accept: [{ text: "It is high time we stopped blaming each other." }, { text: "It's about time we stopped blaming each other." }],
      errors: [{ text: "It's high time we stop blaming each other.", feedback: { es: "Tras «It's high time» + sujeto, el verbo va en pasado (stopped), aunque hable del presente." }, ruleId: "en-g-unreal-past" }],
      distractors: ["stop", "blamed", "us"],
      grammar: ["en-g-unreal-past"],
      annot: { stopped: { es: "pasado irreal: algo que debería pasar ya", en: "unreal past: something that should already be happening" } },
      tags: ["unreal-past"],
    },
    {
      id: "rather-you-didnt-mention", type: "sentence", target: "I'd rather you didn't mention it to anyone.",
      gloss: { es: "Preferiría que no se lo comentaras a nadie.", en: "I'd rather you didn't mention it to anyone." },
      accept: [{ text: "I would rather you didn't mention it to anyone." }, { text: "I'd rather you did not mention it to anyone." }],
      errors: [{ text: "I'd rather you don't mention it to anyone.", feedback: { es: "would rather + sujeto + pasado: I'd rather you didn't…" }, ruleId: "en-g-unreal-past" }],
      distractors: ["don't", "nobody", "mentioned"],
      grammar: ["en-g-unreal-past"],
      tags: ["unreal-past", "tact"],
    },
    {
      id: "as-if-he-owned", type: "sentence", target: "He talks as if he owned the place.",
      gloss: { es: "Habla como si fuera el dueño del lugar.", en: "He talks as if he owned the place." },
      accept: [{ text: "He talks as though he owned the place." }, { text: "He talks like he owns the place." }],
      distractors: ["own", "were", "places"],
      grammar: ["en-g-unreal-past"],
      note: { es: "En inglés americano informal se oye «like he owns the place»; por escrito, «as if he owned»." },
      tags: ["unreal-past", "figurative"],
    },
    {
      id: "skyrocketed-plummeted", type: "sentence", target: "Prices have skyrocketed, while wages have plummeted.",
      gloss: { es: "Los precios se han disparado, mientras que los salarios se han desplomado.", en: "Prices have skyrocketed, while wages have plummeted." },
      accept: [{ text: "Prices have skyrocketed, whereas wages have plummeted." }, { text: "Prices have soared, while wages have plummeted." }],
      distractors: ["skyrocket", "plumbed", "wage"],
      tags: ["figurative", "economy"],
    },
    {
      id: "just-the-tip", type: "sentence", target: "This is just the tip of the iceberg.",
      gloss: { es: "Esto es solo la punta del iceberg.", en: "This is just the tip of the iceberg." },
      accept: [{ text: "This is only the tip of the iceberg." }],
      distractors: ["top", "peak", "a"],
      tags: ["figurative", "idioms"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-so-such-inversion", type: "pattern", target: "So great was the demand that… · Such was her influence that…",
      gloss: { es: "inversión con so y such", en: "inversion with so and such" },
      pattern: {
        rule: {
          es: "Para dar énfasis en registro formal o literario, «so + adjetivo» o «such» pasan al principio y el verbo va antes del sujeto: So + adjetivo + be + sujeto + that…; Such + be + sujeto + that… Equivale a «tan… que» o «era tal… que».",
          en: "For emphasis in formal or literary English, 'so + adjective' or 'such' moves to the front and the verb comes before the subject: So + adjective + be + subject + that…; Such + be + subject + that… It means 'so… that' or 'it was such… that'.",
        },
        table: [["neutro", "con inversión"], ["The demand was so great that…", "So great was the demand that…"], ["Her influence was such that…", "Such was her influence that…"], ["He was so tired that…", "So tired was he that…"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["So loud was the music that we couldn't talk.", "So loud the music was that we couldn't talk.", "Such loud was the music that we couldn't talk.", "So was loud the music that we couldn't talk."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-so-such-inversion"], tags: ["grammar", "inversion", "emphasis"],
    },
    {
      id: "pat-unreal-past", type: "pattern", target: "It's high time we left · I'd rather you didn't · as if he owned…",
      gloss: { es: "el pasado irreal", en: "the unreal past" },
      pattern: {
        rule: {
          es: "Tras ciertas expresiones, el pasado no indica tiempo pasado sino irrealidad o deseo sobre el presente: It's (high / about) time + sujeto + pasado; would rather + otra persona + pasado; as if / as though + pasado (were para todas las personas en registro cuidado). Con el mismo sujeto, «would rather» va con infinitivo: I'd rather stay.",
          en: "After certain expressions, the past tense shows unreality or a wish about the present, not past time: It's (high / about) time + subject + past; would rather + another person + past; as if / as though + past ('were' for every person in careful style). With the same subject, 'would rather' takes the base form: I'd rather stay.",
        },
        table: [["expresión", "ejemplo"], ["It's high time + pasado", "It's high time we left."], ["would rather + otro + pasado", "I'd rather you stayed."], ["would rather + infinitivo", "I'd rather stay."], ["as if + pasado", "She acts as if she were the boss."]],
      },
      question: {
        prompt: { es: "Completa: «It's about time you ___ a job.»", en: "Complete: 'It's about time you ___ a job.'" },
        options: ["got", "get", "will get", "getting"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-unreal-past"], tags: ["grammar", "unreal-past"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-us-uk", type: "dialogue", target: "Sorry, the what?",
      gloss: { es: "Perdón, ¿el qué?", en: "Sorry, the what?" },
      turns: [
        { who: "A", target: "I'll ring you tomorrow about the flat.", gloss: { es: "Mañana te llamo por lo del apartamento (departamento).", en: "I'll call you tomorrow about the apartment. (British English)" } },
        { who: "B", target: "Sorry, the what? Oh, the apartment! You Brits and your vocabulary.", gloss: { es: "Perdón, ¿el qué? ¡Ah, el apartamento! Ustedes los británicos y su vocabulario.", en: "Sorry, the what? Oh, the apartment! You Brits and your vocabulary." } },
        { who: "A", target: "Says the person who calls the pavement a sidewalk. It's high time you learned proper English.", gloss: { es: "Lo dice quien llama «sidewalk» a la vereda (la acera). Ya es hora de que aprendas inglés como es debido.", en: "Says the person who calls the pavement a sidewalk. It's high time you learned proper English." } },
        { who: "B", target: "I'd rather you didn't start that debate again. So heated was the last one that we didn't speak for a week.", gloss: { es: "Preferiría que no empezaras otra vez ese debate. El último fue tan acalorado que no nos hablamos durante una semana.", en: "I'd rather you didn't start that debate again. So heated was the last one that we didn't speak for a week." } },
      ],
      question: {
        prompt: { es: "¿Qué significa «flat» en inglés británico?", en: "What does 'flat' mean in British English?" },
        options: [
          { es: "apartamento (departamento)", en: "apartment" },
          { es: "vereda (acera)", en: "sidewalk" },
          { es: "llanta pinchada", en: "flat tire" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "us-uk", "humor"],
    },
    {
      id: "lis-us-uk", type: "listening", target: "American and British English differ far less in grammar than in vocabulary and spelling. An American says gotten where a Brit says got, and walks on the sidewalk rather than the pavement. Yet so similar are the two varieties that speakers rarely misunderstand each other for long.",
      gloss: { es: "El inglés estadounidense y el británico se diferencian mucho menos en la gramática que en el vocabulario y la ortografía. Un estadounidense dice «gotten» donde un británico dice «got», y camina por la «sidewalk» en lugar de la «pavement». Aun así, las dos variedades son tan parecidas que rara vez hay malentendidos que duren.", en: "American and British English differ far less in grammar than in vocabulary and spelling. An American says gotten where a Brit says got, and walks on the sidewalk rather than the pavement. Yet so similar are the two varieties that speakers rarely misunderstand each other for long." },
      question: {
        prompt: { es: "Según el texto, ¿en qué se diferencian sobre todo?", en: "According to the text, how do they mainly differ?" },
        options: [
          { es: "En el vocabulario y la ortografía", en: "In vocabulary and spelling" },
          { es: "En la gramática", en: "In grammar" },
          { es: "En que no se entienden", en: "They can't understand each other" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "us-uk"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-fabric", type: "bridge", onlyFor: "es", target: "fabric",
      gloss: { es: "tela, tejido", en: "fabric" },
      question: {
        prompt: { es: "Para decir «fábrica» en inglés, dices…", en: "The building where goods are made is…" },
        options: ["factory", "fabric", "fabrication"],
        answer: 0,
      },
      note: { es: "fabric = tela; «fábrica» es «factory». En sentido figurado, «the fabric of society» es el tejido social." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "figurative"],
    },
    {
      id: "br-disgust", type: "bridge", onlyFor: "es", target: "disgust",
      gloss: { es: "asco, repugnancia", en: "disgust" },
      question: {
        prompt: { es: "«Esa noticia me dio un disgusto» (me molestó, me entristeció) se dice…", en: "To say some news made you sad and annoyed, you say…" },
        options: ["That news really upset me.", "That news really disgusted me.", "That news gave me a disgust."],
        answer: 0,
      },
      note: { es: "disgust = asco; «disgusto» (enojo, pena) se dice «upset» o «annoyance»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
