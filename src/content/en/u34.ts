import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u34",
  lang: "en",
  index: 34,
  cefr: "C2",
  title: { target: "Writing with precision", es: "Escribir con precisión", en: "Writing with precision" },
  canDo: [
    { es: "Puedo escribir textos profesionales y académicos concisos, sin repeticiones.", en: "I can write concise professional and academic texts without repetition." },
    { es: "Sé evitar repeticiones con elipsis y sustitución: if so, I hope not, did so, the former / the latter.", en: "I can avoid repetition with ellipsis and substitution: if so, I hope not, did so, the former / the latter." },
    { es: "Uso no matter how, however y whatever para expresar concesión general.", en: "I can use no matter how, however and whatever to express open concession." },
  ],
  icon: "✍️",
  items: build("en", 34, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "concise", type: "word", pos: "adj", target: "concise",
      gloss: { es: "conciso/a, breve y claro/a", en: "concise" },
      distractors: ["concised", "precise", "concealed"],
      tags: ["writing", "style"],
    },
    {
      id: "verbose", type: "word", pos: "adj", target: "verbose",
      gloss: { es: "palabrero/a, que usa demasiadas palabras", en: "verbose" },
      distractors: ["verbal", "verbatim", "voracious"],
      note: { es: "«verbal» significa oral o relativo a las palabras; «verbatim» es palabra por palabra." },
      tags: ["writing", "style"],
    },
    {
      id: "redundant", type: "word", pos: "adj", target: "redundant",
      gloss: { es: "superfluo/a, que sobra (en un texto)", en: "redundant" },
      distractors: ["abundant", "redundancy", "redundantly"],
      note: { es: "En inglés británico, «to be made redundant» también significa ser despedido/a por recorte de personal." },
      tags: ["writing", "us-uk"],
    },
    {
      id: "the-former", type: "phrase", pos: "phrase", target: "the former",
      gloss: { es: "el primero / la primera (de dos ya mencionados)", en: "the former" },
      distractors: ["the formal", "the formerly", "the first of"],
      grammar: ["en-g-ellipsis"],
      tags: ["writing", "reference"],
    },
    {
      id: "the-latter", type: "phrase", pos: "phrase", target: "the latter",
      gloss: { es: "el segundo / la segunda, este último / esta última", en: "the latter" },
      distractors: ["the later", "the ladder", "the last of"],
      errors: [{ text: "the later", feedback: { es: "«later» = más tarde; «the latter» (con doble t) = el segundo de dos." }, ruleId: "en-g-ellipsis" }],
      grammar: ["en-g-ellipsis"],
      tags: ["writing", "reference"],
    },
    {
      id: "albeit", type: "word", pos: "other", target: "albeit",
      gloss: { es: "aunque, si bien (+ adjetivo o frase corta)", en: "albeit" },
      distractors: ["all be it", "allbeit", "all but"],
      note: { es: "Va sin verbo: «a small, albeit important, change»." },
      tags: ["writing", "formal", "linkers"],
    },
    {
      id: "underpin", type: "word", pos: "verb", target: "underpin",
      gloss: { es: "sustentar, ser la base de (una teoría, un argumento)", en: "to underpin" },
      distractors: ["undermine", "underline", "underpinning"],
      tags: ["writing", "academic"],
    },
    {
      id: "undermine", type: "word", pos: "verb", target: "undermine",
      gloss: { es: "socavar, debilitar (poco a poco)", en: "to undermine" },
      distractors: ["underpin", "undermind", "underline"],
      tags: ["writing", "academic"],
    },
    {
      id: "streamline", type: "word", pos: "verb", target: "streamline",
      gloss: { es: "agilizar, simplificar (un proceso)", en: "to streamline" },
      distractors: ["mainstream", "straighten", "streamer"],
      tags: ["writing", "business"],
    },
    {
      id: "in-light-of", type: "phrase", pos: "phrase", target: "in light of",
      gloss: { es: "a la luz de, teniendo en cuenta", en: "in light of" },
      accept: [{ text: "in the light of" }],
      distractors: ["in the light from", "at light of", "on light of"],
      note: { es: "En inglés británico es más común «in the light of»." },
      tags: ["writing", "linkers", "us-uk"],
    },
    {
      id: "with-regard-to", type: "phrase", pos: "phrase", target: "with regard to",
      gloss: { es: "en cuanto a, con respecto a", en: "with regard to" },
      accept: [{ text: "with respect to" }, { text: "regarding" }, { text: "in regard to" }],
      distractors: ["with regarding to", "in regard of", "with regard of"],
      tags: ["writing", "linkers", "formal"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "if-so-let-us-know", type: "sentence", target: "If so, please let us know by Friday.",
      gloss: { es: "En ese caso, avísanos antes del viernes.", en: "If so, please let us know by Friday." },
      accept: [{ text: "If so, let us know by Friday, please." }],
      errors: [{ text: "If yes, please let us know by Friday.", feedback: { es: "En inglés se dice «if so» (si es así) y «if not» (si no); «if yes» no es natural." }, ruleId: "en-g-ellipsis" }],
      distractors: ["yes", "such", "until"],
      grammar: ["en-g-ellipsis"],
      annot: { "If so": { es: "si es así (sustituye a toda la oración anterior)", en: "if that is the case (replaces the whole previous clause)" } },
      tags: ["writing", "ellipsis", "email"],
    },
    {
      id: "i-hope-not", type: "sentence", target: "Do you think it'll rain? I hope not.",
      gloss: { es: "¿Crees que va a llover? Espero que no.", en: "Do you think it'll rain? I hope not." },
      accept: [{ text: "Do you think it will rain? I hope not." }],
      errors: [
        { text: "Do you think it'll rain? I hope no.", feedback: { es: "Tras hope / think / be afraid, «que no» es «not»: I hope not, I'm afraid not." }, ruleId: "en-g-ellipsis" },
        { text: "Do you think it'll rain? I don't hope so.", feedback: { es: "Con «hope» la negación va al final: I hope not." }, ruleId: "en-g-ellipsis" },
      ],
      distractors: ["no", "that", "don't"],
      grammar: ["en-g-ellipsis"],
      tags: ["ellipsis", "spoken"],
    },
    {
      id: "we-did-so", type: "sentence", target: "We were asked to revise the report, and we did so immediately.",
      gloss: { es: "Nos pidieron revisar el informe, y así lo hicimos de inmediato.", en: "We were asked to revise the report, and we did so immediately." },
      accept: [{ text: "We were asked to revise the report, and we did it immediately." }, { text: "We were asked to revise the report and we did so immediately." }],
      distractors: ["made", "such", "immediate"],
      grammar: ["en-g-ellipsis"],
      annot: { "did so": { es: "sustituye a «revised the report» (registro formal)", en: "replaces 'revised the report' (formal)" } },
      tags: ["writing", "ellipsis"],
    },
    {
      id: "the-latter-proved", type: "sentence", target: "Both options were considered; the latter proved more cost-effective.",
      gloss: { es: "Se consideraron ambas opciones; la segunda resultó más rentable.", en: "Both options were considered; the latter proved more cost-effective." },
      accept: [{ text: "Both options were considered, and the latter proved more cost-effective." }],
      distractors: ["later", "lastly", "proofed"],
      grammar: ["en-g-ellipsis"],
      tags: ["writing", "reference", "business"],
    },
    {
      id: "no-matter-how-hard", type: "sentence", target: "No matter how hard we try, there will always be errors.",
      gloss: { es: "Por mucho que nos esforcemos, siempre habrá errores.", en: "No matter how hard we try, there will always be errors." },
      accept: [{ text: "However hard we try, there will always be errors." }],
      errors: [{ text: "No matter how hard we will try, there will always be errors.", feedback: { es: "Tras «no matter how / however» va presente, aunque hable del futuro: no matter how hard we try." }, ruleId: "en-g-no-matter" }],
      distractors: ["much", "what", "tried"],
      grammar: ["en-g-no-matter"],
      tags: ["concession", "writing"],
    },
    {
      id: "whatever-the-outcome", type: "sentence", target: "Whatever the outcome, the findings are worth publishing.",
      gloss: { es: "Sea cual sea el resultado, vale la pena publicar los hallazgos.", en: "Whatever the outcome, the findings are worth publishing." },
      accept: [{ text: "Whatever the outcome is, the findings are worth publishing." }, { text: "No matter what the outcome is, the findings are worth publishing." }],
      errors: [{ text: "Whatever the outcome, the findings are worth to publish.", feedback: { es: "«worth» va con -ing: worth publishing, worth reading." } }],
      distractors: ["Whichever", "publish", "worthy"],
      grammar: ["en-g-no-matter"],
      tags: ["concession", "writing", "academic"],
    },
    {
      id: "albeit-expensive", type: "sentence", target: "The new system, albeit expensive, has streamlined the whole process.",
      gloss: { es: "El nuevo sistema, aunque caro, ha agilizado todo el proceso.", en: "The new system, albeit expensive, has streamlined the whole process." },
      accept: [{ text: "The new system, although expensive, has streamlined the whole process." }, { text: "The new system, albeit costly, has streamlined the whole process." }],
      distractors: ["all", "streamed", "hole"],
      tags: ["writing", "linkers", "business"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-ellipsis", type: "pattern", target: "I hope so / not · if so / if not · did so · the former / the latter",
      gloss: { es: "elipsis y sustitución", en: "ellipsis and substitution" },
      pattern: {
        rule: {
          es: "Para no repetir, el inglés sustituye oraciones enteras: «so» (afirmativo) y «not» (negativo) tras think, hope, expect, be afraid y en «if so / if not»; «do so» reemplaza a un verbo y su complemento en registro formal; «the former / the latter» remiten al primero y al segundo de dos elementos ya nombrados.",
          en: "To avoid repetition, English replaces whole clauses: 'so' (positive) and 'not' (negative) after think, hope, expect, be afraid and in 'if so / if not'; 'do so' replaces a verb and its complement in formal writing; 'the former / the latter' refer to the first and second of two things already mentioned.",
        },
        table: [["en lugar de…", "se dice"], ["I hope it won't rain.", "I hope not."], ["If that is the case, …", "If so, …"], ["…and we revised it.", "…and we did so."], ["Paris and Rome: Rome is…", "…the latter is…"]],
      },
      question: {
        prompt: { es: "«Is the office open on Monday?» — Respuesta correcta si crees que sí:", en: "'Is the office open on Monday?' — The right answer if you believe it is:" },
        options: ["I think so.", "I think yes.", "I think it.", "I think that yes."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-ellipsis"], tags: ["grammar", "ellipsis"],
    },
    {
      id: "pat-no-matter", type: "pattern", target: "no matter how / what · however hard · whatever the outcome",
      gloss: { es: "concesión abierta: no matter, however, whatever", en: "open concession: no matter, however, whatever" },
      pattern: {
        rule: {
          es: "Para decir «por más que, sea cual sea», se usa no matter + how / what / who / where, o las formas en -ever (however, whatever, wherever). «however» va con adjetivo o adverbio (however hard); «whatever» puede ir solo con sustantivo (whatever the cost). El verbo va en presente aunque se hable del futuro.",
          en: "To say 'however much, whatever', use no matter + how / what / who / where, or the -ever forms (however, whatever, wherever). 'however' takes an adjective or adverb (however hard); 'whatever' can take just a noun (whatever the cost). The verb is in the present even for the future.",
        },
        table: [["forma", "ejemplo"], ["no matter how + adj", "No matter how tired I am, …"], ["however + adj / adv", "However hard you try, …"], ["whatever + sustantivo", "Whatever the cost, …"], ["no matter what / who", "No matter what she says, …"]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["However much it costs, we'll buy it.", "However it costs much, we'll buy it.", "No matter how much it will cost, we'll buy it.", "Whatever much it costs, we'll buy it."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-no-matter"], tags: ["grammar", "concession"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-editing", type: "dialogue", target: "It's solid, but a bit verbose.",
      gloss: { es: "Está bien hecho, pero es algo palabrero.", en: "It's solid, but a bit verbose." },
      turns: [
        { who: "A", target: "Could you take a look at my report before I send it?", gloss: { es: "¿Podrías echarle un vistazo a mi informe antes de que lo mande?", en: "Could you take a look at my report before I send it?" } },
        { who: "B", target: "Sure. It's solid, but a bit verbose. This paragraph, for instance, says the same thing twice.", gloss: { es: "Claro. Está bien hecho, pero es algo palabrero. Este párrafo, por ejemplo, dice lo mismo dos veces.", en: "Sure. It's solid, but a bit verbose. This paragraph, for instance, says the same thing twice." } },
        { who: "A", target: "Fair enough. Should I cut one of the sentences, then? If so, which one?", gloss: { es: "Es justo. ¿Corto una de las oraciones, entonces? Si es así, ¿cuál?", en: "Fair enough. Should I cut one of the sentences, then? If so, which one?" } },
        { who: "B", target: "I'd keep the first and drop the second. The former makes the point far more concisely.", gloss: { es: "Yo dejaría la primera y quitaría la segunda. La primera lo dice de forma mucho más concisa.", en: "I'd keep the first and drop the second. The former makes the point far more concisely." } },
      ],
      question: {
        prompt: { es: "¿Qué le aconseja B a A?", en: "What does B advise A to do?" },
        options: [
          { es: "Quitar una oración repetida", en: "Cut a repeated sentence" },
          { es: "Escribir un párrafo más", en: "Write another paragraph" },
          { es: "Mandar el informe tal como está", en: "Send the report as it is" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "writing", "work"],
    },
    {
      id: "lis-plain-writing", type: "listening", target: "Good professional writing is concise. Whatever the subject, cut any word that doesn't add meaning, prefer short verbs to long nouns, and never say in twenty words what you could say in ten. Your readers are busy, so respect their time.",
      gloss: { es: "La buena escritura profesional es concisa. Sea cual sea el tema, elimina toda palabra que no aporte significado, prefiere verbos cortos a sustantivos largos y nunca digas en veinte palabras lo que podrías decir en diez. Tus lectores están ocupados, así que respeta su tiempo.", en: "Good professional writing is concise. Whatever the subject, cut any word that doesn't add meaning, prefer short verbs to long nouns, and never say in twenty words what you could say in ten. Your readers are busy, so respect their time." },
      question: {
        prompt: { es: "¿Qué recomienda el texto?", en: "What does the text recommend?" },
        options: [
          { es: "Eliminar las palabras que no aportan nada", en: "Cutting words that add nothing" },
          { es: "Usar sustantivos largos para sonar formal", en: "Using long nouns to sound formal" },
          { es: "Escribir siempre exactamente diez palabras", en: "Always writing exactly ten words" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "writing"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-deception", type: "bridge", onlyFor: "es", target: "deception",
      gloss: { es: "engaño", en: "deception" },
      question: {
        prompt: { es: "Para decir «la película fue una gran decepción», dices…", en: "To say the film let you down badly, you say…" },
        options: ["The film was a huge disappointment.", "The film was a huge deception.", "The film was a huge deceive."],
        answer: 0,
      },
      note: { es: "deception = engaño (deceive = engañar); «decepción» es «disappointment»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-topic", type: "bridge", onlyFor: "es", target: "topic",
      gloss: { es: "tema (de conversación o de un texto)", en: "topic" },
      question: {
        prompt: { es: "Una frase muy «tópica» (trillada, un lugar común) en inglés es…", en: "An overused, unoriginal phrase is…" },
        options: ["a cliché", "a topic", "topical"],
        answer: 0,
      },
      note: { es: "topic = tema; «topical» = de actualidad; lo trillado es «a cliché» o «a commonplace»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "writing"],
    },
  ]),
};
