import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u26",
  lang: "en",
  index: 26,
  cefr: "C1",
  title: { target: "Politics and current affairs", es: "Política y actualidad", en: "Politics and current affairs" },
  canDo: [
    { es: "Puedo seguir noticias y debates políticos y distinguir hechos de opiniones.", en: "I can follow political news and debates and tell facts from opinions." },
    { es: "Puedo informar con distancia sobre lo que se dice o se cree (It is believed that…).", en: "I can report with distance what is said or believed (It is believed that…)." },
    { es: "Sé usar la pasiva impersonal y el futuro periodístico (be to, be set to, be due to).", en: "I can use impersonal passives and news-style future forms (be to, be set to, be due to)." },
  ],
  icon: "🗳️",
  items: build("en", 26, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "election", type: "word", target: "election", plural: "elections",
      gloss: { es: "elección, elecciones (votación)", en: "election" },
      distractors: ["selection", "elocution", "electron"],
      note: { es: "election = votación; «elegir» algo cualquiera es «choose»." },
      tags: ["politics"],
    },
    {
      id: "polls", type: "word", target: "polls",
      gloss: { es: "encuestas (de intención de voto)", en: "polls" },
      distractors: ["poles", "pools", "pulls"],
      note: { es: "«go to the polls» = ir a votar." },
      tags: ["politics", "news"],
    },
    {
      id: "bill", type: "word", target: "bill", plural: "bills",
      gloss: { es: "proyecto de ley", en: "bill (draft law)" },
      distractors: ["build", "law's", "bell"],
      note: { es: "Un «bill» se convierte en «law» cuando se aprueba; también significa «factura»." },
      tags: ["politics"],
    },
    {
      id: "landslide", type: "word", target: "landslide",
      gloss: { es: "victoria aplastante; deslizamiento de tierra", en: "landslide" },
      distractors: ["landmark", "lands slide", "landfall"],
      tags: ["politics", "news"],
    },
    {
      id: "turnout", type: "word", target: "turnout",
      gloss: { es: "participación (electoral)", en: "turnout" },
      distractors: ["turnover", "outturn", "turning out's"],
      tags: ["politics"],
    },
    {
      id: "spin", type: "word", target: "spin",
      gloss: { es: "manipulación interesada de la información", en: "spin (political)" },
      distractors: ["span", "pin", "spine"],
      tags: ["politics", "media"],
    },
    {
      id: "allegedly", type: "word", pos: "adv", target: "allegedly",
      gloss: { es: "presuntamente", en: "allegedly" },
      distractors: ["legally", "alleged", "allergically"],
      tags: ["news", "reporting"],
    },
    {
      id: "step-down", type: "word", pos: "verb", target: "step down",
      gloss: { es: "renunciar, dimitir (a un cargo)", en: "to step down" },
      accept: [{ text: "resign" }],
      distractors: ["step up", "stand down's", "get down"],
      tags: ["politics", "phrasal-verbs"],
    },
    {
      id: "grassroots", type: "word", pos: "adj", target: "grassroots",
      gloss: { es: "de base, surgido de la gente común (movimiento)", en: "grassroots" },
      distractors: ["grass-root's", "roots grass", "greenroots"],
      tags: ["politics", "society"],
    },
    {
      id: "policy", type: "word", target: "policy", plural: "policies",
      gloss: { es: "política (medida, línea de acción)", en: "policy" },
      distractors: ["politics", "police", "polity"],
      note: { es: "politics = la política en general; policy = una política concreta (housing policy)." },
      tags: ["politics"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "it-is-believed-that", type: "sentence", target: "It is believed that the minister will resign.",
      gloss: { es: "Se cree que el ministro va a renunciar.", en: "It is believed that the minister will resign." },
      accept: [{ text: "It's believed that the minister will resign." }, { text: "The minister is believed to be about to resign." }],
      errors: [{ text: "It believes that the minister will resign.", feedback: { es: "El «se cree» impersonal se dice con pasiva: It is believed." }, ruleId: "en-g-passive-reporting" }],
      distractors: ["believes", "is", "renounce"],
      grammar: ["en-g-passive-reporting"],
      tags: ["politics", "reporting", "passive"],
    },
    {
      id: "is-said-to-be", type: "sentence", target: "The senator is said to be considering a run for president.",
      gloss: { es: "Dicen que el senador está pensando en postularse a la presidencia.", en: "The senator is said to be considering a run for president." },
      accept: [{ text: "It is said that the senator is considering a run for president." }],
      errors: [{ text: "The senator is said that he is considering a run for president.", feedback: { es: "Con sujeto personal: is said + to + infinitivo (to be considering)." }, ruleId: "en-g-passive-reporting" }],
      distractors: ["says", "that", "considered"],
      grammar: ["en-g-passive-reporting"],
      annot: { "is said to be considering": { es: "pasiva con sujeto personal + infinitivo continuo", en: "personal passive + continuous infinitive" } },
      tags: ["politics", "reporting"],
    },
    {
      id: "are-thought-to-have", type: "sentence", target: "Over two hundred people are thought to have been injured.",
      gloss: { es: "Se cree que más de doscientas personas resultaron heridas.", en: "Over two hundred people are thought to have been injured." },
      accept: [{ text: "It is thought that over two hundred people were injured." }],
      distractors: ["think", "be", "hurted"],
      grammar: ["en-g-passive-reporting"],
      tags: ["news", "reporting"],
    },
    {
      id: "is-to-visit", type: "sentence", target: "The president is to visit Mexico next month.",
      gloss: { es: "El presidente visitará México el mes que viene (visita prevista).", en: "The president is to visit Mexico next month." },
      accept: [{ text: "The president is due to visit Mexico next month." }, { text: "The president will visit Mexico next month." }],
      distractors: ["will", "going", "visits"],
      grammar: ["en-g-be-to"],
      tags: ["politics", "news", "future"],
    },
    {
      id: "is-set-to", type: "sentence", target: "The bill is set to pass with a large majority.",
      gloss: { es: "Todo indica que el proyecto de ley se aprobará con amplia mayoría.", en: "The bill is set to pass with a large majority." },
      accept: [{ text: "The bill is expected to pass with a large majority." }, { text: "The bill is likely to pass with a large majority." }],
      distractors: ["sets", "approve", "for"],
      grammar: ["en-g-be-to"],
      tags: ["politics", "news", "future"],
    },
    {
      id: "is-due-to", type: "sentence", target: "The results are due to be announced at midnight.",
      gloss: { es: "Está previsto que los resultados se anuncien a medianoche.", en: "The results are due to be announced at midnight." },
      accept: [{ text: "The results are expected to be announced at midnight." }],
      distractors: ["owed", "announce", "in"],
      grammar: ["en-g-be-to", "en-g-passive"],
      tags: ["politics", "news", "future"],
    },
    {
      id: "allegedly-received", type: "sentence", target: "The mayor allegedly received money from a construction company.",
      gloss: { es: "El alcalde presuntamente recibió dinero de una constructora.", en: "The mayor allegedly received money from a construction company." },
      accept: [{ text: "The mayor is alleged to have received money from a construction company." }],
      distractors: ["presumably", "construct", "receipt"],
      tags: ["politics", "news", "reporting"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-passive-reporting", type: "pattern", target: "It is said that… · He is said to…",
      gloss: { es: "la pasiva para informar con distancia", en: "passive reporting structures" },
      pattern: {
        rule: {
          es: "Para presentar información sin afirmarla, la prensa usa verbos como say, believe, think, report, expect en pasiva. Hay dos estructuras: It is + participio + that… (It is reported that…) o sujeto + is + participio + to + infinitivo (She is reported to be…). Para hechos anteriores: to have + participio.",
          en: "To present information without vouching for it, the press uses say, believe, think, report, expect in the passive. Two structures: It is + participle + that… (It is reported that…) or subject + is + participle + to-infinitive (She is reported to be…). For earlier events: to have + participle.",
        },
        table: [["It is…that", "It is reported that he has left."], ["sujeto + to", "He is reported to have left."], ["en curso", "She is thought to be hiding."]],
      },
      question: {
        prompt: { es: "«Se dice que la empresa tiene problemas» →", en: "Report it with distance: the company has problems →" },
        options: ["The company is said to have problems.", "The company is said that it has problems.", "The company says to have problems.", "It says the company has problems."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-passive-reporting"], tags: ["grammar", "passive", "reporting"],
    },
    {
      id: "pat-be-to", type: "pattern", target: "be to · be due to · be set to · be about to",
      gloss: { es: "futuro formal y periodístico", en: "formal and news-style future forms" },
      pattern: {
        rule: {
          es: "En noticias y textos oficiales: «be to» + verbo = algo programado oficialmente (The Queen is to open…); «be due to» = está previsto para una fecha; «be set to» = es muy probable que pase; «be about to» = está a punto de pasar.",
          en: "In news and official texts: 'be to' + verb = officially arranged (The Queen is to open…); 'be due to' = scheduled for a time; 'be set to' = very likely to happen; 'be about to' = going to happen very soon.",
        },
        table: [["be to", "The PM is to meet the unions."], ["be due to", "The train is due to arrive at six."], ["be set to", "Prices are set to rise."], ["be about to", "The show is about to start."]],
      },
      question: {
        prompt: { es: "La reunión está programada oficialmente para el lunes: «The leaders ___ meet on Monday.»", en: "The meeting is officially arranged for Monday: 'The leaders ___ meet on Monday.'" },
        options: ["are to", "are about", "are set", "are due"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-be-to"], tags: ["grammar", "future", "news"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-election", type: "dialogue", target: "It's just spin.",
      gloss: { es: "Es pura manipulación.", en: "It's just spin." },
      turns: [
        { who: "A", target: "Did you see the polls? The governor is set to win by a landslide.", gloss: { es: "¿Viste las encuestas? Todo indica que el gobernador va a ganar por paliza.", en: "Did you see the polls? The governor is set to win by a landslide." } },
        { who: "B", target: "I wouldn't trust them. Turnout is expected to be really low this year.", gloss: { es: "Yo no me fiaría. Se espera que la participación sea muy baja este año.", en: "I wouldn't trust them. Turnout is expected to be really low this year." } },
        { who: "A", target: "His campaign says young voters are behind him.", gloss: { es: "Su campaña dice que los votantes jóvenes lo apoyan.", en: "His campaign says young voters are behind him." } },
        { who: "B", target: "Come on, it's just spin. Most of them don't even know his housing policy.", gloss: { es: "Vamos, es pura manipulación. La mayoría ni siquiera conoce su política de vivienda.", en: "Come on, it's just spin. Most of them don't even know his housing policy." } },
      ],
      question: {
        prompt: { es: "¿Por qué desconfía B de las encuestas?", en: "Why does B distrust the polls?" },
        options: [
          { es: "Se espera una participación muy baja", en: "Turnout is expected to be very low" },
          { es: "El gobernador ya renunció", en: "The governor has already resigned" },
          { es: "Las encuestas son ilegales", en: "The polls are illegal" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "politics"],
    },
    {
      id: "lis-headline", type: "listening", target: "The finance minister is reported to have offered her resignation late last night. She is due to make a statement at noon, and the prime minister is expected to name a replacement by Friday.",
      gloss: { es: "Según informan, la ministra de Finanzas presentó su renuncia anoche. Está previsto que haga una declaración al mediodía, y se espera que el primer ministro nombre un reemplazo antes del viernes.", en: "The finance minister is reported to have offered her resignation late last night. She is due to make a statement at noon, and the prime minister is expected to name a replacement by Friday." },
      question: {
        prompt: { es: "¿Qué está previsto para el mediodía?", en: "What is scheduled for noon?" },
        options: [
          { es: "Una declaración de la ministra", en: "A statement by the minister" },
          { es: "El nombramiento del reemplazo", en: "Naming the replacement" },
          { es: "Una votación en el Congreso", en: "A vote in parliament" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "politics", "reporting"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-politics", type: "bridge", onlyFor: "es", target: "politician",
      gloss: { es: "político/a (la persona)", en: "politician" },
      question: {
        prompt: { es: "«político/a» (la persona que se dedica a la política) es…", en: "A person who works in politics is a…" },
        options: ["a politician", "a political", "a politic"],
        answer: 0,
      },
      note: { es: "politician = la persona; political = el adjetivo (a political party); politics = la actividad; policy = una medida concreta." },
      exercises: ["guess", "question"], tags: ["bridge", "politics"],
    },
    {
      id: "br-demonstration", type: "bridge", onlyFor: "es", target: "protest",
      gloss: { es: "protesta, manifestación; protestar", en: "protest (demonstration)" },
      question: {
        prompt: { es: "«Thousands joined the demonstration downtown» significa que miles…", en: "'Thousands joined the demonstration downtown' means thousands…" },
        options: [
          { es: "se unieron a la manifestación en el centro", en: "joined the protest downtown" },
          { es: "vieron una demostración de un producto", en: "watched a product demo" },
          { es: "probaron una teoría en el centro", en: "proved a theory downtown" },
        ],
        answer: 0,
      },
      note: { es: "a demonstration (o a protest, a march) = una manifestación; «demostrar» algo es «prove» o «show»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "politics"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "voter", type: "word", target: "voter",
      gloss: { es: "votante", en: "voter" },
      distractors: ["vote", "boater", "water"],
      tags: ["politics"],
    },
    {
      id: "candidate", type: "word", target: "candidate",
      gloss: { es: "candidato/a", en: "candidate" },
      distractors: ["candid", "candy date", "candidacy"],
      tags: ["politics"],
    },
  ]),
};
