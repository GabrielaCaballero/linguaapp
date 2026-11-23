import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u16",
  lang: "fr",
  index: 16,
  cefr: "B1",
  title: { target: "Histoires", es: "Relatos", en: "Stories" },
  canDo: [
    { es: "Puedo contar una anécdota en orden, con conectores como d'abord, ensuite, finalement.", en: "I can tell an anecdote in order, with connectors like d'abord, ensuite, finalement." },
    { es: "Puedo decir lo que ya había pasado antes de otro hecho.", en: "I can say what had already happened before something else." },
    { es: "Sé usar el plus-que-parfait y los relativos qui, que, où.", en: "I can use the plus-que-parfait and the relative pronouns qui, que, où." },
  ],
  icon: "📖",
  items: build("fr", 16, "B1", [
    { id: "dabord", type: "word", pos: "adv", target: "d'abord", gloss: { es: "primero", en: "first (of all)" }, distractors: ["abord", "à bord", "d'accord"], tags: ["connectors", "story"] },
    { id: "ensuite", type: "word", pos: "adv", target: "ensuite", gloss: { es: "luego, después", en: "then / next" }, accept: [{ text: "puis" }, { text: "après" }], distractors: ["ensemble", "en suite", "suivant"], tags: ["connectors", "story"] },
    { id: "finalement", type: "word", pos: "adv", target: "finalement", gloss: { es: "al final, finalmente", en: "in the end / finally" }, accept: [{ text: "enfin" }], distractors: ["finement", "finale", "fatalement"], tags: ["connectors", "story"] },
    { id: "soudain", type: "word", pos: "adv", target: "soudain", gloss: { es: "de repente", en: "suddenly" }, accept: [{ text: "tout à coup" }], distractors: ["souvent", "soudé", "sous-sol"], tags: ["connectors", "story"] },
    { id: "se-passer", type: "word", pos: "verb", target: "se passer", gloss: { es: "pasar, ocurrir", en: "to happen" }, distractors: ["passer", "se poser", "dépasser"], note: { es: "Qu'est-ce qui s'est passé ? = ¿Qué pasó?", en: "Qu'est-ce qui s'est passé ? = What happened?" }, tags: ["story"] },
    { id: "oublier", type: "word", pos: "verb", target: "oublier", gloss: { es: "olvidar", en: "to forget" }, distractors: ["publier", "oublié", "plier"], tags: ["story"] },
    { id: "perdre", type: "word", pos: "verb", target: "perdre", gloss: { es: "perder", en: "to lose / miss" }, forms: { pp: "perdu" }, distractors: ["prendre", "perdu", "pendre"], note: { es: "perdre le train = perder el tren.", en: "perdre le train = to miss the train." }, tags: ["story"] },
    { id: "cles", type: "word", pos: "noun", target: "la clé", gender: "f", plural: "les clés", accept: [{ text: "la clef" }], gloss: { es: "la llave", en: "the key" }, distractors: ["le clé", "la claie", "le clou"], tags: ["story", "home"] },
    { id: "histoire", type: "word", pos: "noun", target: "l'histoire", gender: "f", plural: "les histoires", gloss: { es: "la historia, el relato", en: "the story / history" }, distractors: ["le histoire", "l'histoyre", "l'hystérie"], tags: ["story"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "javais-oublie", type: "sentence", target: "Quand je suis arrivé, j'ai vu que j'avais oublié mes clés.",
      gloss: { es: "Cuando llegué, vi que había olvidado las llaves.", en: "When I arrived, I saw that I had forgotten my keys." },
      accept: [{ text: "Quand je suis arrivée, j'ai vu que j'avais oublié mes clés." }],
      errors: [{ text: "Quand je suis arrivé, j'ai vu que j'ai oublié mes clés.", feedback: { es: "Lo anterior a otro hecho pasado va en plus-que-parfait: j'avais oublié.", en: "Something that happened before another past event takes the plus-que-parfait: j'avais oublié." }, ruleId: "fr-g-pqp" }],
      distractors: ["ai", "oubliais", "les"],
      tags: ["story", "pqp"],
    },
    {
      id: "le-train-etait-parti", type: "sentence", target: "Le train était déjà parti.",
      gloss: { es: "El tren ya se había ido.", en: "The train had already left." },
      errors: [{ text: "Le train avait déjà parti.", feedback: { es: "partir va con être también en el plus-que-parfait: était parti.", en: "partir takes être in the plus-que-parfait too: était parti." }, ruleId: "fr-g-pqp" }],
      distractors: ["avait", "partait", "encore"],
      tags: ["story", "pqp"],
    },
    {
      id: "lami-qui", type: "sentence", target: "C'est l'ami qui m'a aidé.",
      gloss: { es: "Es el amigo que me ayudó.", en: "He's the friend who helped me." },
      errors: [{ text: "C'est l'ami que m'a aidé.", feedback: { es: "Si el relativo es sujeto del verbo que sigue, se usa «qui».", en: "When the relative is the subject of the next verb, use 'qui'." }, ruleId: "fr-g-qui-que-ou" }],
      distractors: ["que", "dont", "lequel"],
      tags: ["relatives"],
    },
    {
      id: "le-livre-que", type: "sentence", target: "Le livre que tu m'as prêté est génial.",
      gloss: { es: "El libro que me prestaste es buenísimo.", en: "The book you lent me is great." },
      errors: [{ text: "Le livre qui tu m'as prêté est génial.", feedback: { es: "Si el relativo es objeto (tu m'as prêté le livre), se usa «que».", en: "When the relative is the object (tu m'as prêté le livre), use 'que'." }, ruleId: "fr-g-qui-que-ou" }],
      distractors: ["qui", "dont", "où"],
      tags: ["relatives"],
    },
    {
      id: "la-ville-ou", type: "sentence", target: "C'est la ville où je suis né.",
      gloss: { es: "Es la ciudad donde nací.", en: "It's the town where I was born." },
      accept: [{ text: "C'est la ville où je suis née." }],
      errors: [{ text: "C'est la ville que je suis né.", feedback: { es: "Para lugares (y momentos) se usa «où».", en: "For places (and times), use 'où'." }, ruleId: "fr-g-qui-que-ou" }],
      distractors: ["que", "ou", "dont"],
      tags: ["relatives"],
    },
    {
      id: "le-jour-ou", type: "sentence", target: "Je me souviens du jour où on s'est rencontrés.",
      gloss: { es: "Me acuerdo del día en que nos conocimos.", en: "I remember the day we met." },
      accept: [{ text: "Je me souviens du jour où nous nous sommes rencontrés." }],
      distractors: ["quand", "que", "de le"],
      note: { es: "Con tiempo, «où» = en que: le jour où, l'année où.", en: "With time words, 'où' = when: le jour où, l'année où." },
      tags: ["relatives", "story"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-pqp", type: "pattern", target: "j'avais fini · elle était partie",
      gloss: { es: "el plus-que-parfait (había hecho)", en: "the plus-que-parfait (had done)" },
      pattern: {
        rule: {
          es: "Como «había + participio»: avoir o être en imparfait + participio. Sirve para algo anterior a otro hecho pasado. Las reglas de auxiliar y concordancia son las del passé composé.",
          en: "Like 'had + past participle': avoir or être in the imparfait + participle. It's for something earlier than another past event. Auxiliary and agreement work as in the passé composé.",
        },
        table: [["avoir", "j'avais mangé"], ["être", "j'étais arrivé(e)"], ["pronominal", "je m'étais levé(e)"]],
      },
      question: {
        prompt: { es: "Completa: «Quand on est arrivés, le film ___ .» (commencer)", en: "Complete: 'Quand on est arrivés, le film ___ .' (commencer)" },
        options: ["avait commencé", "a commencé", "était commencé", "commençait"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-pqp"], tags: ["grammar", "pqp"],
    },
    {
      id: "tab-pqp-partir", type: "paradigm", target: "partir — plus-que-parfait", spoken: "partir, plus-que-parfait",
      gloss: { es: "«partir» en plus-que-parfait", en: "partir — plus-que-parfait" },
      grammar: ["fr-g-pqp"],
      paradigm: {
        caption: { es: "Conjuga «partir» en plus-que-parfait (sujeto masculino)", en: "Conjugate partir in the plus-que-parfait (masculine subject)" },
        cells: [
          { label: "j'", answer: "étais parti", ruleId: "fr-g-pqp" },
          { label: "tu", answer: "étais parti", ruleId: "fr-g-pqp" },
          { label: "il", answer: "était parti", ruleId: "fr-g-pqp" },
          { label: "nous", answer: "étions partis", ruleId: "fr-g-pqp" },
          { label: "vous", answer: "étiez partis", accept: ["étiez parti"], ruleId: "fr-g-pqp" },
          { label: "ils", answer: "étaient partis", ruleId: "fr-g-pqp" },
        ],
      },
      tags: ["grammar", "pqp", "table"],
    },
    {
      id: "pat-qui-que-ou", type: "pattern", target: "l'homme qui parle · le film que je vois · la ville où j'habite",
      gloss: { es: "relativos qui, que, où", en: "relative pronouns qui, que, où" },
      pattern: {
        rule: {
          es: "qui = sujeto (va seguido de un verbo): l'homme qui parle. que = objeto (va seguido de un sujeto): le film que je vois; delante de vocal, qu'. où = lugar o tiempo: la ville où, le jour où.",
          en: "qui = subject (followed by a verb): l'homme qui parle. que = object (followed by a subject): le film que je vois; before a vowel, qu'. où = place or time: la ville où, le jour où.",
        },
        table: [["qui + verbe", "la femme qui chante"], ["que + sujet", "la chanson que j'aime"], ["où", "le café où on se voit"]],
      },
      question: {
        prompt: { es: "Completa: «C'est le restaurant ___ nous avons dîné.»", en: "Complete: 'C'est le restaurant ___ nous avons dîné.'" },
        options: ["où", "que", "qui", "dont"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-qui-que-ou"], tags: ["grammar", "relatives"],
    },
    {
      id: "tab-qui-que", type: "paradigm", target: "qui, que ou où ?", spoken: "qui, que, où",
      gloss: { es: "elige qui, que u où", en: "choose qui, que or où" },
      grammar: ["fr-g-qui-que-ou"],
      paradigm: {
        caption: { es: "Escribe el relativo que falta", en: "Write the missing relative pronoun" },
        cells: [
          { label: "le bus ___ part à huit heures", answer: "qui", ruleId: "fr-g-qui-que-ou" },
          { label: "le pull ___ j'ai acheté", answer: "que", ruleId: "fr-g-qui-que-ou" },
          { label: "la plage ___ on allait", answer: "où", ruleId: "fr-g-qui-que-ou" },
          { label: "la voisine ___ habite en face", answer: "qui", ruleId: "fr-g-qui-que-ou" },
          { label: "l'année ___ je suis né", answer: "où", ruleId: "fr-g-qui-que-ou" },
        ],
      },
      tags: ["grammar", "relatives", "table"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-anecdote", type: "listening",
      target: "D'abord, j'ai raté mon bus. Ensuite, il a commencé à pleuvoir. Quand je suis enfin arrivée au bureau, la réunion avait déjà commencé. Finalement, mon patron a ri !",
      gloss: {
        es: "Primero perdí el autobús. Luego empezó a llover. Cuando por fin llegué a la oficina, la reunión ya había empezado. ¡Al final, mi jefe se rio!",
        en: "First I missed my bus. Then it started raining. When I finally got to the office, the meeting had already started. In the end, my boss laughed!",
      },
      question: {
        prompt: { es: "¿Qué había pasado cuando llegó a la oficina?", en: "What had happened when she got to the office?" },
        options: [
          { es: "La reunión ya había empezado", en: "The meeting had already started" },
          { es: "Su jefe se había ido", en: "Her boss had left" },
          { es: "Había dejado de llover", en: "It had stopped raining" },
          { es: "Había perdido las llaves", en: "She had lost her keys" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "story"],
    },
    {
      id: "dlg-quest-ce-qui", type: "dialogue", target: "Qu'est-ce qui s'est passé ?", register: "informal",
      gloss: { es: "¿Qué pasó?", en: "What happened?" },
      turns: [
        { who: "A", target: "Tu es tout mouillé ! Qu'est-ce qui s'est passé ?", gloss: { es: "¡Estás empapado! ¿Qué pasó?", en: "You're soaking wet! What happened?" } },
        { who: "B", target: "J'avais laissé mon parapluie au bureau, et soudain il s'est mis à pleuvoir.", gloss: { es: "Había dejado el paraguas en la oficina y de repente empezó a llover.", en: "I'd left my umbrella at the office, and suddenly it started to rain." } },
        { who: "A", target: "Le parapluie que je t'ai offert ?", gloss: { es: "¿El paraguas que te regalé?", en: "The umbrella I gave you?" } },
        { who: "B", target: "Oui, celui-là. Désolé !", gloss: { es: "Sí, ese. ¡Perdón!", en: "Yes, that one. Sorry!" } },
      ],
      question: {
        prompt: { es: "¿Por qué está mojado B?", en: "Why is B wet?" },
        options: [
          { es: "Había dejado el paraguas en la oficina", en: "He'd left his umbrella at the office" },
          { es: "Se cayó a una fuente", en: "He fell into a fountain" },
          { es: "Perdió el paraguas en el autobús", en: "He lost his umbrella on the bus" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "story"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-que-qui", type: "bridge", onlyFor: "es", target: "la femme qui parle",
      gloss: { es: "la mujer que habla", en: "the woman who is talking" },
      distractors: ["la femme que parle", "la femme quien parle", "la femme qu'parle"],
      note: { es: "El «que» español se divide en dos: qui si es sujeto (la femme qui parle) y que si es objeto (la femme que je vois)." },
      exercises: ["guess", "recall"], tags: ["bridge", "relatives"],
    },
    {
      id: "br-rater", type: "bridge", onlyFor: "es", target: "rater",
      gloss: { es: "perder (un tren), fallar", en: "to miss / fail" },
      question: {
        prompt: { es: "«J'ai raté mon train» significa…", en: "'J'ai raté mon train' means…" },
        options: [
          { es: "Perdí el tren", en: "I missed my train" },
          { es: "Estuve un rato en el tren", en: "I spent a while on the train" },
          { es: "Encontré ratas en el tren", en: "I found rats on the train" },
        ],
        answer: 0,
      },
      note: { es: "rater = perder, fallar (rater un examen = reprobar). Informal y muy común." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
