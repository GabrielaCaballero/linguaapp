import type { GrammarPoint } from "../schema";

// Grammar points for English units u25–u30 (C1).
export const grammar4: GrammarPoint[] = [
  // ── u25 ───────────────────────────────────────────────────
  {
    id: "en-g-diplomatic",
    lang: "en",
    cefr: "C1",
    title: { es: "Lenguaje diplomático: suavizar lo que dices", en: "Diplomatic language: softening what you say" },
    short: {
      es: "would / could · I'm afraid · a little, slightly · «We were hoping…» · «Wouldn't it be better…?»",
      en: "would / could · I'm afraid · a little, slightly · We were hoping… · Wouldn't it be better…?",
    },
    rule: {
      es: "En el inglés profesional, sobre todo en el estadounidense y el británico, la franqueza que en español es normal puede sonar agresiva. Se suaviza con modales (would, could, might), con «I'm afraid» ante una mala noticia, con cuantificadores pequeños (a bit, slightly), con preguntas negativas y con tiempos que toman distancia (We were wondering if…).",
      en: "In professional English, directness can sound aggressive. Soften with modals (would, could, might), 'I'm afraid' before bad news, small quantifiers (a bit, slightly), negative questions and distancing tenses (We were wondering if…).",
    },
    steps: [
      { es: "Cambia el presente por would / could: «That is difficult» → «That would be difficult».", en: "Swap the present for would / could: That is difficult → That would be difficult." },
      { es: "Reduce la fuerza: a little, slightly, not quite.", en: "Reduce the force: a little, slightly, not quite." },
      { es: "Anuncia lo negativo: I'm afraid…, Unfortunately…", en: "Signal bad news: I'm afraid…, Unfortunately…" },
      { es: "Propón con preguntas: Could we…? / Wouldn't it make sense to…?", en: "Propose with questions: Could we…? / Wouldn't it make sense to…?" },
    ],
    table: { head: ["directo", "diplomático"], rows: [["We want a discount.", "We were hoping for a discount."], ["That's too late.", "That might be a bit late for us."], ["You're wrong.", "I'm not sure that's quite right."], ["No.", "I'm afraid that won't be possible."]] },
    examples: [
      { target: "Would it be possible to extend the deadline?", gloss: { es: "¿Sería posible extender el plazo?", en: "Would it be possible to extend the deadline?" } },
      { target: "I'm afraid we can't go any lower than that.", gloss: { es: "Lamentablemente, no podemos bajar más.", en: "I'm afraid we can't go any lower than that." } },
    ],
    pitfalls: {
      es: "Traducir literalmente «Quiero…» o «Necesito que me mandes…» suena exigente: mejor «I'd like…», «Could you send me…?». Y «I'm afraid» no expresa miedo en este contexto.",
      en: "Literal 'I want…' or 'I need you to send…' sounds demanding: prefer 'I'd like…', 'Could you send me…?'.",
    },
  },
  {
    id: "en-g-conditional-inversion",
    lang: "en",
    cefr: "C1",
    title: { es: "Condicionales con inversión: Should you…, Were we to…, Had I known…", en: "Inverted conditionals: Should you…, Were we to…, Had I known…" },
    short: {
      es: "Should you need help = If you need help · Were we to sign = If we signed · Had I known = If I had known.",
      en: "Should you need help = If you need help · Were we to sign = If we signed · Had I known = If I had known.",
    },
    rule: {
      es: "En registro formal (correos, contratos, discursos), el «if» puede desaparecer si se invierte el auxiliar. «Should» + sujeto + verbo base sustituye al primer condicional; «Were» + sujeto + to + verbo, al segundo; «Had» + sujeto + participio, al tercero. En negativo no se contrae: Had it not been for…",
      en: "In formal English (emails, contracts, speeches), 'if' can disappear when the auxiliary is inverted. 'Should' + subject + base verb replaces the first conditional; 'Were' + subject + to + verb the second; 'Had' + subject + participle the third. Negatives don't contract: Had it not been for…",
    },
    steps: [
      { es: "Identifica el tipo de condicional.", en: "Identify the type of conditional." },
      { es: "Quita «if» y pon el auxiliar delante: Should / Were / Had.", en: "Drop 'if' and put the auxiliary first: Should / Were / Had." },
      { es: "Mantén la otra parte igual (will / would / would have).", en: "Keep the other clause unchanged (will / would / would have)." },
    ],
    table: { head: ["tipo", "con if", "con inversión"], rows: [["1.º", "If you need help,", "Should you need help,"], ["2.º", "If we were to agree,", "Were we to agree,"], ["3.º", "If I had known,", "Had I known,"]] },
    examples: [
      { target: "Should you have any questions, do not hesitate to contact us.", gloss: { es: "Si tuviera alguna pregunta, no dude en contactarnos.", en: "Should you have any questions, do not hesitate to contact us." } },
      { target: "Had it not been for your help, we would never have finished.", gloss: { es: "De no haber sido por tu ayuda, nunca habríamos terminado.", en: "Had it not been for your help, we would never have finished." } },
    ],
    pitfalls: {
      es: "Tras «Should you» va verbo base, no pasado («Should you needed» está mal). Y la inversión negativa no se contrae: «Hadn't I known» → Had I not known.",
      en: "After 'Should you' use the base verb ('Should you needed' is wrong). Inverted negatives don't contract: Had I not known.",
    },
  },

  // ── u26 ───────────────────────────────────────────────────
  {
    id: "en-g-passive-reporting",
    lang: "en",
    cefr: "C1",
    title: { es: "Pasiva para informar: It is said that…, He is believed to…", en: "Passive reporting: It is said that…, He is believed to…" },
    short: {
      es: "It is said that he left = He is said to have left (se dice que se fue). Con say, believe, think, report, expect.",
      en: "It is said that he left = He is said to have left. With say, believe, think, report, expect.",
    },
    rule: {
      es: "Los medios y los textos formales informan sin comprometerse con verbos de opinión en pasiva. Hay dos estructuras: It + is + participio + that + oración, o sujeto + is + participio + infinitivo con to. El infinitivo cambia según el tiempo: to be (presente), to be + -ing (en curso), to have + participio (anterior).",
      en: "The media and formal texts report without commitment using opinion verbs in the passive. Two structures: It + is + participle + that + clause, or subject + is + participle + to-infinitive. The infinitive shows time: to be (present), to be + -ing (ongoing), to have + participle (earlier).",
    },
    steps: [
      { es: "Elige el verbo: say, believe, think, report, expect, allege.", en: "Pick the verb: say, believe, think, report, expect, allege." },
      { es: "Estructura impersonal: It is believed that…", en: "Impersonal structure: It is believed that…" },
      { es: "Estructura personal: The CEO is believed + to + infinitivo.", en: "Personal structure: The CEO is believed + to-infinitive." },
      { es: "Si el hecho es anterior: to have + participio (is thought to have fled).", en: "If the event is earlier: to have + participle (is thought to have fled)." },
    ],
    table: { head: ["tiempo", "estructura personal"], rows: [["presente", "He is said to be rich."], ["en curso", "She is thought to be hiding."], ["anterior", "They are believed to have left."]] },
    examples: [
      { target: "It is expected that the bill will pass.", gloss: { es: "Se espera que el proyecto de ley se apruebe.", en: "It is expected that the bill will pass." } },
      { target: "The suspect is thought to have left the country.", gloss: { es: "Se cree que el sospechoso salió del país.", en: "The suspect is thought to have left the country." } },
    ],
    pitfalls: {
      es: "No mezcles las dos estructuras: «He is said that he…» está mal. O «It is said that he…», o «He is said to…».",
      en: "Don't mix the structures: 'He is said that he…' is wrong. Either 'It is said that he…' or 'He is said to…'.",
    },
  },
  {
    id: "en-g-be-to",
    lang: "en",
    cefr: "C1",
    title: { es: "Futuro formal: be to, be due to, be set to, be about to", en: "Formal future: be to, be due to, be set to, be about to" },
    short: {
      es: "is to = está programado oficialmente · is due to = previsto para · is set to = es muy probable · is about to = a punto de.",
      en: "is to = officially arranged · is due to = scheduled · is set to = very likely · is about to = very soon.",
    },
    rule: {
      es: "Además de will y going to, el inglés de las noticias y los documentos oficiales usa estas formas con «be». «be to» indica planes oficiales u órdenes (You are to report at nine); «be due to», un horario previsto; «be set to», algo que todo indica que pasará; «be about to», algo inminente.",
      en: "Besides will and going to, news and official English use these 'be' forms. 'be to' for official plans or orders (You are to report at nine); 'be due to' for a schedule; 'be set to' for something very likely; 'be about to' for something imminent.",
    },
    steps: [
      { es: "¿Es un plan oficial o una orden? → be to.", en: "An official plan or an order? → be to." },
      { es: "¿Tiene hora o fecha prevista? → be due to.", en: "Scheduled for a time or date? → be due to." },
      { es: "¿Es muy probable? → be set to. ¿Inminente? → be about to.", en: "Very likely? → be set to. Imminent? → be about to." },
    ],
    table: { head: ["forma", "ejemplo"], rows: [["be to", "The pope is to visit Peru."], ["be due to", "The report is due out in May."], ["be set to", "Rates are set to rise."], ["be about to", "We're about to board."]] },
    examples: [
      { target: "The two leaders are to meet in Geneva next week.", gloss: { es: "Los dos líderes se reunirán en Ginebra la semana que viene.", en: "The two leaders are to meet in Geneva next week." } },
      { target: "The flight is due to land at 6:40.", gloss: { es: "Está previsto que el vuelo aterrice a las 6:40.", en: "The flight is due to land at 6:40." } },
    ],
    pitfalls: {
      es: "«due to» también significa «debido a» (due to the rain); el contexto los distingue: «is due to + verbo» es futuro previsto.",
      en: "'due to' also means 'because of' (due to the rain); 'is due to + verb' is the scheduled future.",
    },
  },

  // ── u27 ───────────────────────────────────────────────────
  {
    id: "en-g-hedging",
    lang: "en",
    cefr: "C1",
    title: { es: "Hedging: la cautela en el inglés académico", en: "Hedging in academic English" },
    short: {
      es: "may / might · appears to · tends to · suggests · It could be argued that… · to some extent.",
      en: "may / might · appears to · tends to · suggests · It could be argued that… · to some extent.",
    },
    rule: {
      es: "En la escritura académica en inglés se espera que no se afirme más de lo que muestran los datos. Se atenúa con modales (may, might, could), verbos (appear, seem, tend, suggest, indicate), adverbios y adjetivos (possibly, likely, apparent) y fórmulas impersonales (It could be argued that…, There is some evidence that…).",
      en: "Academic writing in English is expected to claim no more than the data shows. Hedge with modals (may, might, could), verbs (appear, seem, tend, suggest, indicate), adverbs and adjectives (possibly, likely, apparent) and impersonal formulas (It could be argued that…, There is some evidence that…).",
    },
    steps: [
      { es: "Busca los verbos demasiado fuertes: prove, show, cause, always.", en: "Find overly strong verbs: prove, show, cause, always." },
      { es: "Cámbialos por suggest, indicate, contribute to, tend to.", en: "Replace them with suggest, indicate, contribute to, tend to." },
      { es: "Añade un modal o adverbio si hace falta: may, likely, to some extent.", en: "Add a modal or adverb if needed: may, likely, to some extent." },
    ],
    table: { head: ["fuerte", "con hedging"], rows: [["This proves…", "This suggests…"], ["X causes Y.", "X may contribute to Y."], ["People always…", "People tend to…"], ["It is clear that…", "It appears that…"]] },
    examples: [
      { target: "These results appear to support the original hypothesis.", gloss: { es: "Estos resultados parecen respaldar la hipótesis original.", en: "These results appear to support the original hypothesis." } },
      { target: "It could be argued that the sample was too small.", gloss: { es: "Se podría sostener que la muestra era demasiado pequeña.", en: "It could be argued that the sample was too small." } },
    ],
    pitfalls: {
      es: "El estilo académico en español tolera afirmaciones más rotundas; en inglés, «This proves that…» con datos limitados resta credibilidad. Tampoco abuses: tres atenuantes en una frase suenan inseguros.",
      en: "'This proves that…' with limited data undermines credibility. Don't overdo it either: three hedges in one sentence sound unsure.",
    },
  },
  {
    id: "en-g-nominalisation",
    lang: "en",
    cefr: "C1",
    title: { es: "Nominalización: del verbo al sustantivo", en: "Nominalization: from verb to noun" },
    short: {
      es: "Prices rose sharply → the sharp rise in prices · They analyzed the data → the analysis of the data.",
      en: "Prices rose sharply → the sharp rise in prices · They analyzed the data → the analysis of the data.",
    },
    rule: {
      es: "El inglés académico y formal transforma acciones (verbos) y cualidades (adjetivos) en sustantivos para condensar información, sonar más objetivo y conectar mejor las ideas. El adverbio pasa a ser adjetivo (sharply → sharp) y el complemento se introduce con la preposición que pide el sustantivo: increase / rise / decline in, impact / effect on, analysis / development of.",
      en: "Academic and formal English turns actions (verbs) and qualities (adjectives) into nouns to condense information, sound objective and link ideas. The adverb becomes an adjective (sharply → sharp) and the complement takes the noun's preposition: increase / rise / decline in, impact / effect on, analysis / development of.",
    },
    steps: [
      { es: "Busca el verbo principal (rise, analyze, affect).", en: "Find the main verb (rise, analyze, affect)." },
      { es: "Conviértelo en sustantivo (rise, analysis, impact).", en: "Turn it into a noun (rise, analysis, impact)." },
      { es: "El adverbio pasa a adjetivo y añade la preposición correcta: a sharp rise in…", en: "The adverb becomes an adjective; add the right preposition: a sharp rise in…" },
    ],
    table: { head: ["verbo", "sustantivo + preposición"], rows: [["increase / rise", "an increase in"], ["decline / drop", "a decline in"], ["affect", "the impact on"], ["analyze", "the analysis of"], ["fail", "the failure to"]] },
    examples: [
      { target: "The rapid growth of cities has put pressure on water supplies.", gloss: { es: "El rápido crecimiento de las ciudades ha presionado el suministro de agua.", en: "The rapid growth of cities has put pressure on water supplies." } },
      { target: "There has been a significant decline in birth rates.", gloss: { es: "Ha habido una caída significativa de la natalidad.", en: "There has been a significant decline in birth rates." } },
    ],
    pitfalls: {
      es: "Calcar el «de» español: «the increase of prices» → the increase in prices; «the impact of children» (el impacto de los niños) ≠ the impact on children (el impacto en los niños).",
      en: "Mind the preposition: the increase in prices; the impact on children (not 'of').",
    },
  },

  // ── u28 ───────────────────────────────────────────────────
  {
    id: "en-g-cleft",
    lang: "en",
    cefr: "C1",
    title: { es: "Oraciones escindidas: What I need is…, It was… who…", en: "Cleft sentences: What I need is…, It was… who…" },
    short: {
      es: "What I need is a break (lo que necesito es…) · It was Ana who called (fue Ana la que llamó).",
      en: "What I need is a break · It was Ana who called.",
    },
    rule: {
      es: "El español enfatiza moviendo palabras o con la entonación; el inglés, de orden más rígido, «parte» la frase. Con «What + oración + is/was» se destaca una cosa o una acción; con «It is/was + elemento + who/that» se destaca una persona, un lugar, un momento o una causa. También: «All I want is…», «The reason (why)… is that…».",
      en: "English, with its fixed word order, splits the sentence for emphasis. 'What + clause + is/was' highlights a thing or action; 'It is/was + element + who/that' highlights a person, place, time or reason. Also: 'All I want is…', 'The reason (why)… is that…'.",
    },
    steps: [
      { es: "Decide qué quieres destacar.", en: "Decide what you want to highlight." },
      { es: "¿Una cosa o acción? → «What… is…»", en: "A thing or action? → What… is…" },
      { es: "¿Una persona, lugar o momento? → «It was… who / that…»", en: "A person, place or time? → It was… who / that…" },
    ],
    table: { head: ["neutro", "escindida"], rows: [["I love the food.", "What I love is the food."], ["Tom called.", "It was Tom who called."], ["We met in 2010.", "It was in 2010 that we met."], ["I only want peace.", "All I want is peace."]] },
    examples: [
      { target: "What surprised me most was how friendly everyone was.", gloss: { es: "Lo que más me sorprendió fue lo amables que eran todos.", en: "What surprised me most was how friendly everyone was." } },
      { target: "It wasn't until midnight that we finally got home.", gloss: { es: "No llegamos a casa hasta la medianoche.", en: "It wasn't until midnight that we finally got home." } },
    ],
    pitfalls: {
      es: "«Lo que» no es «That»: «That I need is…» está mal → What I need is… Y no olvides el «It» inicial: «Was Ana who…» → It was Ana who…",
      en: "'That I need is…' is wrong → What I need is… And don't drop the initial 'It': It was Ana who…",
    },
  },
  {
    id: "en-g-discourse-markers",
    lang: "en",
    cefr: "C1",
    title: { es: "Marcadores del discurso oral", en: "Spoken discourse markers" },
    short: {
      es: "I mean (o sea) · mind you (eso sí) · to be fair (para ser justos) · anyway (en fin) · actually (en realidad).",
      en: "I mean · mind you · to be fair · anyway · actually: small words that organize conversation.",
    },
    rule: {
      es: "Los marcadores no cambian el contenido, pero guían al oyente: indican que vas a aclarar (I mean), a matizar con un contraste (mind you, then again), a reconocer el otro lado (to be fair), a cambiar o retomar el tema (anyway, as I was saying) o a corregir (actually). Usarlos bien suena natural y fluido.",
      en: "Markers don't change the content but guide the listener: you're about to clarify (I mean), add a contrast (mind you, then again), acknowledge the other side (to be fair), change or return to the topic (anyway, as I was saying) or correct (actually).",
    },
    steps: [
      { es: "¿Quieres aclarar lo que dijiste? → I mean.", en: "Clarifying what you said? → I mean." },
      { es: "¿Añadir un «pero» suave? → mind you / then again.", en: "Adding a soft 'but'? → mind you / then again." },
      { es: "¿Cerrar un tema o volver al principal? → anyway.", en: "Closing a topic or going back? → anyway." },
    ],
    table: { head: ["marcador", "uso", "≈ español"], rows: [["I mean", "aclarar", "o sea"], ["mind you", "matizar", "eso sí"], ["to be fair", "conceder", "para ser justos"], ["anyway", "cambiar de tema", "en fin"], ["actually", "corregir", "en realidad"]] },
    examples: [
      { target: "The food was great. Mind you, it wasn't cheap.", gloss: { es: "La comida estaba buenísima. Eso sí, no era barata.", en: "The food was great. Mind you, it wasn't cheap." } },
      { target: "Anyway, we should probably get going.", gloss: { es: "En fin, deberíamos irnos.", en: "Anyway, we should probably get going." } },
    ],
    pitfalls: {
      es: "«actually» no es «actualmente». Y no traduzcas «o sea» con «so» en todos los casos: para aclarar se dice «I mean».",
      en: "'actually' means 'in fact', not 'currently'. To clarify, use 'I mean', not 'so'.",
    },
  },

  // ── u29 ───────────────────────────────────────────────────
  {
    id: "en-g-negative-inversion",
    lang: "en",
    cefr: "C1",
    title: { es: "Inversión negativa: Never have I…, Not only did…", en: "Negative inversion: Never have I…, Not only did…" },
    short: {
      es: "Expresión negativa al inicio + auxiliar + sujeto: Never have I seen… · Rarely do we… · Not only did he…",
      en: "Negative expression first + auxiliary + subject: Never have I seen… · Rarely do we… · Not only did he…",
    },
    rule: {
      es: "Para dar énfasis en un registro formal o retórico, una expresión negativa o restrictiva puede abrir la frase: never, rarely, seldom, hardly ever, not only, no sooner, little, under no circumstances, only then. El auxiliar va entonces antes del sujeto, como en una pregunta; si no hay auxiliar, se añade do / does / did.",
      en: "For emphasis in formal or rhetorical English, a negative or restrictive expression can open the sentence: never, rarely, seldom, hardly ever, not only, no sooner, little, under no circumstances, only then. The auxiliary then comes before the subject, as in a question; with no auxiliary, add do / does / did.",
    },
    steps: [
      { es: "Pon la expresión negativa al principio.", en: "Put the negative expression first." },
      { es: "Coloca el auxiliar antes del sujeto (have I, do we, did she).", en: "Put the auxiliary before the subject (have I, do we, did she)." },
      { es: "Sin auxiliar: do / does / did + verbo base (Not only did prices rise…).", en: "No auxiliary: do / does / did + base verb (Not only did prices rise…)." },
    ],
    table: { head: ["expresión", "ejemplo"], rows: [["Never", "Never have I felt so tired."], ["Rarely", "Rarely does he complain."], ["Not only", "Not only did she win, she…"], ["No sooner", "No sooner had we left than…"], ["Under no circumstances", "…should you open it."]] },
    examples: [
      { target: "Little did they know what was about to happen.", gloss: { es: "Poco sabían lo que estaba a punto de pasar.", en: "Little did they know what was about to happen." } },
      { target: "No sooner had I sat down than the phone rang.", gloss: { es: "Apenas me había sentado cuando sonó el teléfono.", en: "No sooner had I sat down than the phone rang." } },
    ],
    pitfalls: {
      es: "El español no invierte: «Nunca he visto…» → «Never I have seen» está mal → Never have I seen. Y en conversación normal suena exagerado: guárdalo para discursos y textos formales.",
      en: "'Never I have seen' is wrong → Never have I seen. In everyday conversation it sounds overdone: keep it for formal texts and speeches.",
    },
  },
  {
    id: "en-g-mixed-conditionals",
    lang: "en",
    cefr: "C1",
    title: { es: "Condicionales mixtos", en: "Mixed conditionals" },
    short: {
      es: "Pasado → presente: If I had studied, I'd be… · Presente → pasado: If I weren't shy, I'd have…",
      en: "Past → present: If I had studied, I'd be… · Present → past: If I weren't shy, I'd have…",
    },
    rule: {
      es: "Cuando la condición y el resultado ocurren en momentos distintos, se combinan el segundo y el tercer condicional. Una condición pasada con un resultado presente: if + had + participio, would + verbo. Una condición presente (una característica permanente) con un resultado pasado: if + pasado, would have + participio.",
      en: "When condition and result are at different times, combine the second and third conditionals. Past condition, present result: if + had + participle, would + verb. Present condition (a permanent trait), past result: if + past, would have + participle.",
    },
    steps: [
      { es: "¿Cuándo es la condición? ¿Y el resultado?", en: "When is the condition? And the result?" },
      { es: "Condición pasada → had + participio; condición presente → pasado simple.", en: "Past condition → had + participle; present condition → past simple." },
      { es: "Resultado presente → would + verbo; resultado pasado → would have + participio.", en: "Present result → would + verb; past result → would have + participle." },
    ],
    table: { head: ["condición", "resultado"], rows: [["If I had taken the job,", "I would live in Paris now."], ["If she weren't so busy,", "she'd have come."], ["If we hadn't moved,", "we'd still be friends."]] },
    examples: [
      { target: "If I hadn't missed that flight, I wouldn't be married to her now.", gloss: { es: "Si no hubiera perdido ese vuelo, ahora no estaría casado con ella.", en: "If I hadn't missed that flight, I wouldn't be married to her now." } },
      { target: "If he spoke English, he would have gotten the job.", gloss: { es: "Si hablara inglés, habría conseguido el trabajo.", en: "If he spoke English, he would have gotten the job." } },
    ],
    pitfalls: {
      es: "Con «now» o «today» en el resultado, no uses «would have»: «If I had saved, I would have been rich now» → I would be rich now.",
      en: "With 'now' or 'today' in the result, don't use 'would have': I would be rich now.",
    },
  },

  // ── u30 ───────────────────────────────────────────────────
  {
    id: "en-g-subjunctive",
    lang: "en",
    cefr: "C1",
    title: { es: "El subjuntivo inglés: I suggest that he be…", en: "The English subjunctive: I suggest that he be…" },
    short: {
      es: "suggest / insist / recommend / demand / it is essential that + sujeto + verbo base: that she arrive, that he be.",
      en: "suggest / insist / recommend / demand / it is essential that + subject + base verb: that she arrive, that he be.",
    },
    rule: {
      es: "El inglés casi no tiene subjuntivo, pero en registro formal se conserva tras verbos y expresiones de recomendación, exigencia o necesidad: el verbo va en forma base para todas las personas (sin -s, «be» en lugar de is / are) y se niega con «not» delante (that they not leave). En inglés británico se prefiere «should» + verbo.",
      en: "English barely has a subjunctive, but formal English keeps it after verbs and expressions of recommendation, demand or necessity: the verb is in the base form for every person (no -s, 'be' instead of is / are) and negated with 'not' before it (that they not leave). British English often prefers 'should' + verb.",
    },
    steps: [
      { es: "¿Hay suggest, insist, recommend, demand, request o «it is essential / vital / important that»?", en: "Is there suggest, insist, recommend, demand, request or 'it is essential / vital / important that'?" },
      { es: "Pon that + sujeto + verbo base: that he be, that she go.", en: "Use that + subject + base verb: that he be, that she go." },
      { es: "Negativo: that + sujeto + not + verbo base.", en: "Negative: that + subject + not + base verb." },
    ],
    table: { head: ["expresión", "subjuntivo"], rows: [["I suggest that he", "be more careful."], ["They demanded that she", "resign."], ["It's vital that we", "not be late."]] },
    examples: [
      { target: "The lawyer insisted that his client be released.", gloss: { es: "El abogado insistió en que liberaran a su cliente.", en: "The lawyer insisted that his client be released." } },
      { target: "It is important that every student attend the first session.", gloss: { es: "Es importante que todos los estudiantes asistan a la primera sesión.", en: "It is important that every student attend the first session." } },
    ],
    pitfalls: {
      es: "Calcar «sugerir que + persona + infinitivo» («I suggest him to go») es un error: I suggest that he go / I suggest going. Tampoco «recommend someone to do» en registro cuidado.",
      en: "'I suggest him to go' is wrong: I suggest that he go / I suggest going.",
    },
  },
  {
    id: "en-g-participle-clauses",
    lang: "en",
    cefr: "C1",
    title: { es: "Oraciones de participio: Having finished…, Written in…", en: "Participle clauses: Having finished…, Written in…" },
    short: {
      es: "-ing (al mismo tiempo / causa) · Having + participio (antes) · participio solo (pasivo): Written in 1950, …",
      en: "-ing (same time / reason) · Having + participle (before) · participle alone (passive): Written in 1950, …",
    },
    rule: {
      es: "Las oraciones de participio sustituyen a una subordinada (because…, after…, which was…) y dan un estilo más compacto y escrito. -ing expresa una acción simultánea o una causa; having + participio, una acción anterior; el participio solo, un sentido pasivo. El sujeto implícito debe ser el mismo que el de la oración principal.",
      en: "Participle clauses replace a subordinate clause (because…, after…, which was…) for a more compact, written style. -ing expresses a simultaneous action or a reason; having + participle an earlier action; the participle alone a passive meaning. The implied subject must be the subject of the main clause.",
    },
    steps: [
      { es: "Comprueba que los dos verbos tienen el mismo sujeto.", en: "Check that both verbs share the same subject." },
      { es: "¿Simultáneo o causa? → -ing. ¿Anterior? → Having + participio. ¿Pasivo? → participio.", en: "Simultaneous or reason? → -ing. Earlier? → Having + participle. Passive? → participle." },
      { es: "Elimina el conector y el sujeto de la subordinada.", en: "Drop the linker and the subject of the subordinate clause." },
    ],
    table: { head: ["tipo", "ejemplo"], rows: [["-ing", "Feeling tired, I went to bed."], ["having + pp", "Having eaten, we left."], ["participio", "Built in 1900, the house…"], ["negativo", "Not knowing what to do, …"]] },
    examples: [
      { target: "Having lived abroad for years, she found it hard to come back.", gloss: { es: "Después de haber vivido años en el extranjero, le costó volver.", en: "Having lived abroad for years, she found it hard to come back." } },
      { target: "Painted in 1889, the work is now worth millions.", gloss: { es: "Pintada en 1889, hoy la obra vale millones.", en: "Painted in 1889, the work is now worth millions." } },
    ],
    pitfalls: {
      es: "El «dangling participle»: «Walking down the street, a car hit me» dice que el auto caminaba. Correcto: «Walking down the street, I was hit by a car».",
      en: "Avoid dangling participles: 'Walking down the street, a car hit me' says the car was walking. Correct: 'Walking down the street, I was hit by a car'.",
    },
  },
];
