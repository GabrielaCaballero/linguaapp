import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u28",
  lang: "en",
  index: 28,
  cefr: "C1",
  title: { target: "Irony and spoken English", es: "Ironía y lengua coloquial", en: "Irony and spoken English" },
  canDo: [
    { es: "Puedo captar la ironía, el sarcasmo y el «understatement» en una conversación.", en: "I can pick up irony, sarcasm and understatement in conversation." },
    { es: "Puedo organizar lo que digo con marcadores como «mind you», «I mean» o «anyway».", en: "I can structure what I say with markers like 'mind you', 'I mean' or 'anyway'." },
    { es: "Sé usar oraciones escindidas para enfatizar (What I need is…, It was Ana who…).", en: "I can use cleft sentences for emphasis (What I need is…, It was Ana who…)." },
  ],
  icon: "😏",
  items: build("en", 28, "C1", [
    // ── Discourse markers and spoken phrases ─────────────────
    {
      id: "mind-you", type: "phrase", pos: "phrase", target: "mind you",
      gloss: { es: "ojo, eso sí (para matizar lo dicho)", en: "mind you" },
      distractors: ["mind me", "you mind", "mind yourself"],
      grammar: ["en-g-discourse-markers"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "i-mean", type: "phrase", pos: "phrase", target: "I mean,",
      gloss: { es: "o sea, quiero decir", en: "I mean," },
      distractors: ["I want say,", "I mean to,", "Means,"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "anyway", type: "word", pos: "adv", target: "anyway",
      gloss: { es: "en fin, de todas formas (para cambiar de tema o volver al tema)", en: "anyway" },
      accept: [{ text: "anyhow" }],
      distractors: ["anywise", "any way", "anywhere"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "as-i-was-saying", type: "phrase", pos: "phrase", target: "As I was saying,",
      gloss: { es: "Como te decía,", en: "As I was saying," },
      distractors: ["Like I said you,", "As I was telling,", "How I was saying,"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "to-be-fair", type: "phrase", pos: "phrase", target: "to be fair",
      gloss: { es: "para ser justos, la verdad es que", en: "to be fair" },
      distractors: ["to be just", "for be fair", "being fairly"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "not-bad-at-all", type: "phrase", pos: "phrase", target: "not bad at all",
      gloss: { es: "nada mal (es decir: muy bien)", en: "not bad at all" },
      distractors: ["not at all bad's", "no bad at all", "not badly at all"],
      note: { es: "El «understatement» es típico del inglés: «not bad» suele ser un elogio." },
      tags: ["spoken", "understatement"],
    },
    {
      id: "yeah-right", type: "phrase", pos: "phrase", target: "Yeah, right.",
      gloss: { es: "Sí, claro (irónico: no lo creo).", en: "Yeah, right." },
      distractors: ["Yes, correct.", "Yeah, true.", "Right, yeah?"],
      note: { es: "Con tono irónico, dos afirmaciones juntas significan «no te creo»." },
      tags: ["spoken", "irony"],
    },
    {
      id: "tongue-in-cheek", type: "word", pos: "adj", target: "tongue-in-cheek",
      gloss: { es: "en broma, irónico/a (no en serio)", en: "tongue-in-cheek" },
      distractors: ["cheek-in-tongue", "tongue-and-cheek", "tongue-tied"],
      tags: ["irony", "idioms"],
    },
    {
      id: "sarcastic", type: "word", pos: "adj", target: "sarcastic",
      gloss: { es: "sarcástico/a", en: "sarcastic" },
      distractors: ["sarcasm", "drastic", "sarcastical"],
      tags: ["irony"],
    },
    {
      id: "kind-of", type: "phrase", pos: "phrase", target: "kind of",
      gloss: { es: "medio, un poco, algo así como", en: "kind of" },
      accept: [{ text: "sort of" }, { text: "kinda" }],
      distractors: ["kind from", "kindly of", "a kind"],
      note: { es: "«I'm kind of tired» = estoy medio cansado/a; muy frecuente al hablar." },
      tags: ["spoken"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "what-i-need-is", type: "sentence", target: "What I need right now is a long vacation.",
      gloss: { es: "Lo que necesito ahora mismo son unas vacaciones largas.", en: "What I need right now is a long vacation." },
      errors: [{ text: "That I need right now is a long vacation.", feedback: { es: "«Lo que» al inicio de una frase se dice «What»." }, ruleId: "en-g-cleft" }],
      distractors: ["That", "are", "Which"],
      grammar: ["en-g-cleft"],
      annot: { What: { es: "= lo que (oración escindida para enfatizar)", en: "= the thing that (cleft for emphasis)" } },
      tags: ["cleft", "emphasis"],
    },
    {
      id: "it-was-my-sister-who", type: "sentence", target: "It was my sister who told me, not my mom.",
      gloss: { es: "Fue mi hermana la que me lo dijo, no mi mamá.", en: "It was my sister who told me, not my mom." },
      accept: [{ text: "It was my sister that told me, not my mom." }],
      errors: [{ text: "Was my sister who told me, not my mom.", feedback: { es: "La oración escindida necesita «It»: It was my sister who…" }, ruleId: "en-g-cleft" }],
      distractors: ["which", "There", "said"],
      grammar: ["en-g-cleft"],
      tags: ["cleft", "emphasis"],
    },
    {
      id: "what-annoys-me", type: "sentence", target: "What really annoys me is people who talk during movies.",
      gloss: { es: "Lo que de verdad me molesta es la gente que habla durante las películas.", en: "What really annoys me is people who talk during movies." },
      distractors: ["are", "That", "which"],
      grammar: ["en-g-cleft"],
      tags: ["cleft", "emphasis"],
    },
    {
      id: "oh-great", type: "sentence", target: "Oh, great. Another meeting that could have been an email.",
      gloss: { es: "Ah, genial (irónico). Otra reunión que podría haber sido un correo.", en: "Oh, great. Another meeting that could have been an email." },
      distractors: ["can", "be", "mail"],
      grammar: ["en-g-modal-perfect"],
      note: { es: "«Oh, great» con tono plano o exagerado suele ser sarcástico." },
      tags: ["irony", "work"],
    },
    {
      id: "mind-you-sentence", type: "sentence", target: "The hotel was expensive. Mind you, the view was incredible.",
      gloss: { es: "El hotel era caro. Eso sí, la vista era increíble.", en: "The hotel was expensive. Mind you, the view was incredible." },
      accept: [{ text: "The hotel was expensive. Then again, the view was incredible." }],
      distractors: ["Mind", "However of", "sight"],
      grammar: ["en-g-discourse-markers"],
      tags: ["discourse-markers", "travel"],
    },
    {
      id: "i-mean-sentence", type: "sentence", target: "It wasn't great. I mean, it wasn't terrible, but I expected more.",
      gloss: { es: "No estuvo genial. O sea, no fue horrible, pero esperaba más.", en: "It wasn't great. I mean, it wasn't terrible, but I expected more." },
      distractors: ["want", "say", "waited"],
      grammar: ["en-g-discourse-markers"],
      tags: ["discourse-markers"],
    },
    {
      id: "anyway-sentence", type: "sentence", target: "Anyway, that's enough about me. How's your new job?",
      gloss: { es: "En fin, basta de hablar de mí. ¿Qué tal tu trabajo nuevo?", en: "Anyway, that's enough about me. How's your new job?" },
      accept: [{ text: "Anyway, enough about me. How's your new job?" }],
      distractors: ["Anywhere", "of", "work"],
      grammar: ["en-g-discourse-markers"],
      tags: ["discourse-markers", "small-talk"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-cleft", type: "pattern", target: "What I need is… · It was Ana who…",
      gloss: { es: "oraciones escindidas (lo que…, fue… quien…)", en: "cleft sentences" },
      pattern: {
        rule: {
          es: "Para destacar una parte de la frase, el inglés la «parte» en dos. Con «What… is/was» se pone el foco en una cosa o acción (What I love is the food). Con «It is/was… who/that» se destaca una persona, un lugar o un momento (It was in Lima that we met).",
          en: "To highlight part of a sentence, English splits it in two. 'What… is/was' focuses on a thing or action (What I love is the food). 'It is/was… who/that' highlights a person, place or time (It was in Lima that we met).",
        },
        table: [["neutro", "enfático"], ["I need a break.", "What I need is a break."], ["Tom broke it.", "It was Tom who broke it."], ["We met in Lima.", "It was in Lima that we met."]],
      },
      question: {
        prompt: { es: "Enfatiza la persona: «Laura organized the party.»", en: "Emphasize the person: 'Laura organized the party.'" },
        options: ["It was Laura who organized the party.", "What Laura organized the party.", "Was Laura who organized the party.", "It was Laura which organized the party."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-cleft"], tags: ["grammar", "cleft", "emphasis"],
    },
    {
      id: "pat-discourse-markers", type: "pattern", target: "I mean · mind you · anyway · to be fair · actually",
      gloss: { es: "marcadores del discurso oral", en: "spoken discourse markers" },
      pattern: {
        rule: {
          es: "Los marcadores organizan la conversación: «I mean» aclara o corrige, «mind you» añade un matiz que contrasta, «to be fair» reconoce el otro lado, «anyway» cierra un tema o vuelve al principal, y «actually» corrige o introduce algo inesperado.",
          en: "Markers organize conversation: 'I mean' clarifies or corrects, 'mind you' adds a contrasting point, 'to be fair' acknowledges the other side, 'anyway' closes a topic or returns to the main one, and 'actually' corrects or adds something unexpected.",
        },
        table: [["marcador", "función"], ["I mean", "aclarar, corregirse"], ["mind you", "matizar con un contraste"], ["to be fair", "reconocer el otro lado"], ["anyway", "cerrar o retomar el tema"], ["actually", "corregir, sorprender"]],
      },
      question: {
        prompt: { es: "Quieres volver al tema principal después de una digresión:", en: "You want to get back to the main topic after a digression:" },
        options: ["Anyway, as I was saying…", "Mind you, as I was saying…", "To be fair, as I was saying…", "I mean, as I was saying…"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-discourse-markers"], tags: ["grammar", "discourse-markers"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-irony", type: "dialogue", target: "Yeah, right.",
      gloss: { es: "Sí, claro (no te creo).", en: "Yeah, right." },
      turns: [
        { who: "A", target: "How was the camping trip?", gloss: { es: "¿Qué tal el campamento?", en: "How was the camping trip?" } },
        { who: "B", target: "Oh, fantastic. It rained for three days and the tent leaked.", gloss: { es: "Ah, fantástico (irónico). Llovió tres días y la carpa se mojaba por dentro.", en: "Oh, fantastic. It rained for three days and the tent leaked." } },
        { who: "A", target: "Ouch. Well, to be fair, you did choose the rainy season.", gloss: { es: "Uf. Bueno, para ser justos, elegiste la temporada de lluvias.", en: "Ouch. Well, to be fair, you did choose the rainy season." } },
        { who: "B", target: "Mind you, the food was great. What I'll never do again is sleep on the ground.", gloss: { es: "Eso sí, la comida estuvo buenísima. Lo que nunca más voy a hacer es dormir en el suelo.", en: "Mind you, the food was great. What I'll never do again is sleep on the ground." } },
        { who: "A", target: "So you'll go glamping next time?", gloss: { es: "¿Entonces la próxima vez vas a hacer glamping?", en: "So you'll go glamping next time?" } },
        { who: "B", target: "Yeah, right. Next time I'm staying in a hotel.", gloss: { es: "Sí, claro. La próxima vez me quedo en un hotel.", en: "Yeah, right. Next time I'm staying in a hotel." } },
      ],
      question: {
        prompt: { es: "¿Qué significa «Oh, fantastic» en la respuesta de B?", en: "What does B mean by 'Oh, fantastic'?" },
        options: [
          { es: "Lo dice con ironía: el viaje fue malo", en: "It's ironic: the trip was bad" },
          { es: "El viaje fue realmente fantástico", en: "The trip really was fantastic" },
          { es: "No se acuerda del viaje", en: "B doesn't remember the trip" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "irony", "spoken"],
    },
    {
      id: "lis-understatement", type: "listening", target: "So I missed my connection, lost my luggage and spent the night on an airport bench. It wasn't exactly the best start to a vacation.",
      gloss: { es: "Así que perdí la conexión, me perdieron el equipaje y pasé la noche en un banco del aeropuerto. No fue precisamente el mejor comienzo para unas vacaciones.", en: "So I missed my connection, lost my luggage and spent the night on an airport bench. It wasn't exactly the best start to a vacation." },
      question: {
        prompt: { es: "«It wasn't exactly the best start» significa que…", en: "'It wasn't exactly the best start' means…" },
        options: [
          { es: "fue un comienzo terrible (lo dice suavizado)", en: "it was a terrible start (understated)" },
          { es: "fue un comienzo casi perfecto", en: "it was almost a perfect start" },
          { es: "no recuerda cómo empezó", en: "the speaker can't remember the start" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "understatement"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-actually-c1", type: "bridge", onlyFor: "es", target: "Actually, I'd rather not.",
      gloss: { es: "La verdad, prefiero no hacerlo.", en: "Actually, I'd rather not." },
      question: {
        prompt: { es: "«Actually, I'd rather not» es una forma de…", en: "'Actually, I'd rather not' is a way to…" },
        options: [
          { es: "rechazar algo con suavidad", en: "decline politely" },
          { es: "decir qué haces actualmente", en: "say what you do currently" },
          { es: "aceptar con entusiasmo", en: "accept eagerly" },
        ],
        answer: 0,
      },
      note: { es: "Al hablar, «actually» suaviza un desacuerdo o un rechazo; nunca significa «actualmente» (= currently, these days)." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "spoken"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "you-know", type: "phrase", pos: "phrase", target: "you know",
      gloss: { es: "¿viste?, ya sabes (muletilla)", en: "you know" },
      distractors: ["you knew", "you knowing", "know you"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "basically", type: "word", pos: "adv", target: "basically",
      gloss: { es: "básicamente, en resumen", en: "basically" },
      distractors: ["basicly", "basic", "basely"],
      tags: ["spoken", "discourse-markers"],
    },
    {
      id: "no-way", type: "phrase", pos: "phrase", target: "No way!",
      gloss: { es: "¡Ni loco/a! / ¡No puede ser!", en: "No way!" },
      distractors: ["Not way!", "No road!", "None way!"],
      tags: ["spoken", "chunk"],
    },
  ]),
};
