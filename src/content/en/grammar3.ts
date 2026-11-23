import type { GrammarPoint } from "../schema";

// Grammar points for English units u17–u24 (B1–B2).
export const grammar3: GrammarPoint[] = [
  // ── u17 ───────────────────────────────────────────────────
  {
    id: "en-g-first-conditional",
    lang: "en",
    cefr: "B1",
    title: { es: "Primer condicional: if + presente, will", en: "First conditional: if + present, will" },
    short: {
      es: "If it rains, we'll stay home. Después de if / when / as soon as / unless va presente, nunca will.",
      en: "If it rains, we'll stay home. After if / when / as soon as / unless use the present, never will.",
    },
    rule: {
      es: "Para situaciones reales o probables en el futuro: if + presente simple, y en la otra parte will (o can, may, should, un imperativo). Lo mismo pasa con when, as soon as, before, after y unless (= if… not): llevan presente aunque hablemos del futuro.",
      en: "For real or likely future situations: if + present simple, and will (or can, may, should, an imperative) in the other clause. The same applies to when, as soon as, before, after and unless (= if… not): they take the present even about the future.",
    },
    steps: [
      { es: "Condición: if + presente (If you call…).", en: "Condition: if + present (If you call…)." },
      { es: "Resultado: will / can / imperativo (…I'll answer).", en: "Result: will / can / imperative (…I'll answer)." },
      { es: "El orden se puede invertir; si empieza con if, va coma.", en: "The order can be reversed; a comma follows the if-clause when it comes first." },
    ],
    table: { head: ["condición", "resultado"], rows: [["If you're hungry,", "I'll make a sandwich."], ["When I get home,", "I'll call you."], ["Unless you hurry,", "you'll miss it."]] },
    examples: [
      { target: "If you need anything, just ask.", gloss: { es: "Si necesitas algo, solo pídelo.", en: "If you need anything, just ask." } },
      { target: "I'll tell her as soon as she arrives.", gloss: { es: "Se lo digo en cuanto llegue.", en: "I'll tell her as soon as she arrives." } },
    ],
    pitfalls: {
      es: "El español usa subjuntivo tras «cuando» («cuando llegue») y algunos lo traducen con will: «when she will arrive» está mal → when she arrives.",
      en: "'If it will rain' and 'when she will arrive' are wrong: if it rains, when she arrives.",
    },
  },
  {
    id: "en-g-second-conditional",
    lang: "en",
    cefr: "B1",
    title: { es: "Segundo condicional: if + pasado, would", en: "Second conditional: if + past, would" },
    short: {
      es: "If I had time, I'd travel more (Si tuviera tiempo, viajaría más). If I were you = yo que tú.",
      en: "If I had time, I'd travel more. If I were you, I'd… (advice).",
    },
    rule: {
      es: "Para situaciones imaginarias, improbables o contrarias a la realidad en el presente o el futuro: if + pasado simple (equivale al imperfecto del subjuntivo: tuviera, fuera) y would + verbo (condicional: haría). Con «be» se usa «were» para todas las personas en registro cuidado.",
      en: "For imaginary, unlikely or unreal situations now or in the future: if + past simple and would + verb. With 'be', 'were' is used for all persons in careful English.",
    },
    steps: [
      { es: "¿Es real y probable? → primer condicional. ¿Es imaginario? → segundo.", en: "Real and likely? → first conditional. Imaginary? → second." },
      { es: "Condición: if + pasado simple (If I won…, If I were…).", en: "Condition: if + past simple (If I won…, If I were…)." },
      { es: "Resultado: would / could / might + verbo base.", en: "Result: would / could / might + base verb." },
    ],
    table: { head: ["condición", "resultado"], rows: [["If I had a car,", "I'd drive to work."], ["If she lived here,", "she could walk."], ["If I were you,", "I'd say yes."]] },
    examples: [
      { target: "What would you do if you lost your job?", gloss: { es: "¿Qué harías si perdieras el trabajo?", en: "What would you do if you lost your job?" } },
      { target: "If we didn't have kids, we'd move abroad.", gloss: { es: "Si no tuviéramos hijos, nos iríamos a vivir al extranjero.", en: "If we didn't have kids, we'd move abroad." } },
    ],
    pitfalls: {
      es: "No pongas «would» en la parte del if: «If I would have money» → If I had money. «would» va solo en el resultado.",
      en: "No 'would' in the if-clause: 'If I would have money' → If I had money.",
    },
  },

  // ── u18 ───────────────────────────────────────────────────
  {
    id: "en-g-passive",
    lang: "en",
    cefr: "B1",
    title: { es: "La voz pasiva", en: "The passive voice" },
    short: {
      es: "be + participio: is made, was built, will be sold. Muchas frases con «se» se traducen así: se habla = is spoken.",
      en: "be + past participle: is made, was built, will be sold. The agent, if needed, goes with 'by'.",
    },
    rule: {
      es: "La pasiva pone el foco en la acción o en lo que la recibe, no en quién la hace. Se forma con «be» en el tiempo necesario + participio. El español suele usar «se» (se habla, se construyó) o una tercera persona plural (lo construyeron); el inglés prefiere la pasiva.",
      en: "The passive focuses on the action or its receiver, not the doer. Form it with 'be' in the needed tense + past participle. The agent goes after 'by' only when it matters.",
    },
    steps: [
      { es: "El objeto de la frase activa pasa a ser el sujeto.", en: "The object of the active sentence becomes the subject." },
      { es: "Pon «be» en el mismo tiempo del verbo original (is, was, has been, will be).", en: "Put 'be' in the original verb's tense (is, was, has been, will be)." },
      { es: "Añade el participio (made, built, sold).", en: "Add the past participle (made, built, sold)." },
      { es: "Si importa quién lo hizo: by + agente.", en: "If the doer matters: by + agent." },
    ],
    table: { head: ["tiempo", "pasiva"], rows: [["presente", "It is made in China."], ["pasado", "It was built in 1920."], ["present perfect", "It has been sold."], ["futuro", "It will be finished soon."], ["modal", "It can be done online."]] },
    examples: [
      { target: "The windows are cleaned every week.", gloss: { es: "Las ventanas se limpian todas las semanas.", en: "The windows are cleaned every week." } },
      { target: "My wallet was stolen on the train.", gloss: { es: "Me robaron la billetera en el tren.", en: "My wallet was stolen on the train." } },
    ],
    pitfalls: {
      es: "Traducir «se» con «it» o con un verbo activo («Spanish speaks here») está mal: Spanish is spoken here. Y «nacer» siempre es pasivo: I was born.",
      en: "'Spanish speaks here' is wrong: Spanish is spoken here. And 'born' is always passive: I was born.",
    },
  },
  {
    id: "en-g-relative",
    lang: "en",
    cefr: "B1",
    title: { es: "Oraciones de relativo: who, which, that, where, whose", en: "Relative clauses: who, which, that, where, whose" },
    short: {
      es: "who (personas) · which (cosas) · that (los dos) · where (lugares) · whose (cuyo). El objeto se puede omitir.",
      en: "who (people) · which (things) · that (both) · where (places) · whose (possession). Object pronouns can be dropped.",
    },
    rule: {
      es: "El «que» relativo del español se divide en inglés: who para personas, which para cosas y that para ambas en oraciones que definen. Si el relativo es objeto del verbo que sigue, se puede omitir: the movie (that) we saw. En las explicativas, entre comas, no se usa that.",
      en: "'who' for people, 'which' for things, 'that' for both in defining clauses. If the pronoun is the object of the next verb, it can be dropped: the movie (that) we saw. Non-defining clauses (between commas) never use 'that'.",
    },
    steps: [
      { es: "¿Persona? → who / that. ¿Cosa? → which / that. ¿Lugar? → where. ¿Posesión? → whose.", en: "Person? → who / that. Thing? → which / that. Place? → where. Possession? → whose." },
      { es: "¿Va entre comas (información extra)? → nunca that.", en: "Between commas (extra information)? → never that." },
      { es: "¿El relativo es objeto (lo sigue un sujeto)? → se puede omitir.", en: "Is it the object (followed by a subject)? → you can drop it." },
    ],
    table: { head: ["relativo", "ejemplo"], rows: [["who", "the woman who called"], ["which / that", "the car that I bought"], ["where", "the hotel where we stayed"], ["whose", "the boy whose dad is a pilot"]] },
    examples: [
      { target: "The man who lives next door is a chef.", gloss: { es: "El hombre que vive al lado es chef.", en: "The man who lives next door is a chef." } },
      { target: "Is this the book you were talking about?", gloss: { es: "¿Este es el libro del que hablabas?", en: "Is this the book you were talking about?" } },
    ],
    pitfalls: {
      es: "No repitas el objeto: «the book that I read it» está mal → the book that I read. Y «what» no es relativo después de un sustantivo: the car what I bought → the car that I bought.",
      en: "Don't repeat the object: 'the book that I read it' → the book that I read. And not 'what' after a noun.",
    },
  },

  // ── u19 ───────────────────────────────────────────────────
  {
    id: "en-g-present-perfect-cont",
    lang: "en",
    cefr: "B2",
    title: { es: "Present perfect continuous", en: "Present perfect continuous" },
    short: {
      es: "have / has been + -ing: «Llevo dos horas esperando» = I've been waiting for two hours.",
      en: "have / has been + -ing: I've been waiting for two hours.",
    },
    rule: {
      es: "Pone el foco en la duración o en la continuidad de una actividad que empezó en el pasado y sigue (o acaba de terminar y se ven las consecuencias). El español usa «llevar + gerundio» o «hace… que». Con verbos de estado (know, like, be) se usa el present perfect simple.",
      en: "It focuses on the duration of an activity that started in the past and continues (or has just stopped, with visible results). State verbs (know, like, be) use the simple present perfect instead.",
    },
    steps: [
      { es: "¿Actividad que sigue, con foco en cuánto tiempo? → have / has been + -ing.", en: "Ongoing activity, focus on how long? → have / has been + -ing." },
      { es: "Añade for / since o pregunta con How long…?", en: "Add for / since, or ask How long…?" },
      { es: "¿Es un verbo de estado o un resultado (cuántos)? → present perfect simple.", en: "A state verb, or a result (how many)? → simple present perfect." },
    ],
    table: { head: ["continuous (actividad)", "simple (resultado)"], rows: [["I've been writing emails.", "I've written ten emails."], ["She's been painting.", "She's painted the room."], ["How long have you been here?", "✗ been being"]] },
    examples: [
      { target: "We've been living here since 2018.", gloss: { es: "Vivimos aquí desde 2018.", en: "We've been living here since 2018." } },
      { target: "You look tired. Have you been sleeping well?", gloss: { es: "Te ves cansado/a. ¿Has estado durmiendo bien?", en: "You look tired. Have you been sleeping well?" } },
    ],
    pitfalls: {
      es: "Con el presente español: «I'm waiting since an hour» → I've been waiting for an hour. Y no con verbos de estado: «I've been knowing him» → I've known him.",
      en: "'I'm waiting since an hour' → I've been waiting for an hour. And not with state verbs: I've known him.",
    },
  },
  {
    id: "en-g-gerund-infinitive",
    lang: "en",
    cefr: "B2",
    title: { es: "Verbo + -ing o verbo + to", en: "Verb + -ing or verb + to" },
    short: {
      es: "enjoy / mind / avoid / finish + -ing · want / decide / hope / plan + to · preposición + -ing.",
      en: "enjoy / mind / avoid / finish + -ing · want / decide / hope / plan + to · preposition + -ing.",
    },
    rule: {
      es: "Cuando un verbo va detrás de otro, el primero decide la forma: algunos piden -ing y otros «to» + verbo. Después de cualquier preposición (at, in, of, about, without, look forward to) siempre va -ing. Algunos verbos cambian de significado: stop smoking (dejar de fumar) / stop to smoke (parar para fumar); remember / forget / regret también.",
      en: "When one verb follows another, the first decides the form: some take -ing, others 'to' + verb. After any preposition (at, in, of, about, without, look forward to) use -ing. Some verbs change meaning: stop smoking / stop to smoke; also remember, forget, regret.",
    },
    steps: [
      { es: "¿Hay una preposición antes? → -ing.", en: "Is there a preposition before it? → -ing." },
      { es: "¿El primer verbo es enjoy, mind, avoid, finish, suggest, keep? → -ing.", en: "Is the first verb enjoy, mind, avoid, finish, suggest, keep? → -ing." },
      { es: "¿Es want, need, decide, hope, plan, agree, refuse, would like? → to.", en: "Is it want, need, decide, hope, plan, agree, refuse, would like? → to." },
    ],
    table: { head: ["+ -ing", "+ to"], rows: [["enjoy cooking", "want to cook"], ["avoid driving", "decide to drive"], ["finish working", "plan to work"], ["good at singing", "hope to sing"], ["look forward to seeing", "would like to see"]] },
    examples: [
      { target: "She suggested meeting on Friday.", gloss: { es: "Propuso que nos reuniéramos el viernes.", en: "She suggested meeting on Friday." } },
      { target: "I'm planning to take a few days off.", gloss: { es: "Estoy pensando en tomarme unos días libres.", en: "I'm planning to take a few days off." } },
    ],
    pitfalls: {
      es: "«I look forward to hear from you» es muy común y está mal: ahí «to» es preposición → hearing. Tampoco «suggest to do»: suggest doing o suggest that we do.",
      en: "'I look forward to hear from you' is wrong: 'to' is a preposition here → hearing. Not 'suggest to do': suggest doing.",
    },
  },

  // ── u20 ───────────────────────────────────────────────────
  {
    id: "en-g-reported-speech",
    lang: "en",
    cefr: "B2",
    title: { es: "El estilo indirecto", en: "Reported speech" },
    short: {
      es: "«I'm tired» → She said (that) she was tired. say sin persona · tell + persona · preguntas sin inversión.",
      en: "'I'm tired' → She said (that) she was tired. say + no person · tell + person · questions without inversion.",
    },
    rule: {
      es: "Al contar lo que alguien dijo, el verbo suele retroceder un tiempo: presente → pasado, will → would, can → could, pasado / present perfect → had + participio. Si lo dicho sigue siendo verdad, se puede mantener el presente. Las preguntas indirectas usan if / whether o la palabra interrogativa con orden normal, y las órdenes, tell / ask + persona + to.",
      en: "When reporting, verbs usually move one tense back: present → past, will → would, can → could, past / present perfect → had + participle. If it's still true, the present can stay. Reported questions use if / whether or the question word with normal word order; commands use tell / ask + person + to.",
    },
    steps: [
      { es: "Elige el verbo: say (sin persona) o tell (con persona).", en: "Choose the verb: say (no person) or tell (with a person)." },
      { es: "Retrocede el tiempo y cambia pronombres (I → she, my → her).", en: "Shift the tense back and change pronouns (I → she, my → her)." },
      { es: "Preguntas: asked + if / wh- + sujeto + verbo (sin do).", en: "Questions: asked + if / wh- + subject + verb (no do)." },
      { es: "Órdenes: told / asked + persona + (not) to + verbo.", en: "Commands: told / asked + person + (not) to + verb." },
    ],
    table: { head: ["directo", "indirecto"], rows: [["\"I'm busy.\"", "He said he was busy."], ["\"I'll help.\"", "She said she would help."], ["\"I saw it.\"", "He said he had seen it."], ["\"Are you OK?\"", "She asked if I was OK."], ["\"Don't go.\"", "He told me not to go."]] },
    examples: [
      { target: "My boss told me she was leaving the company.", gloss: { es: "Mi jefa me dijo que se iba de la empresa.", en: "My boss told me she was leaving the company." } },
      { target: "He asked me what time the store opened.", gloss: { es: "Me preguntó a qué hora abría la tienda.", en: "He asked me what time the store opened." } },
    ],
    pitfalls: {
      es: "«She said me» está mal (She told me / She said to me). Y en las preguntas indirectas no va inversión ni «did»: «He asked where did I live» → He asked where I lived.",
      en: "'She said me' is wrong (She told me). Reported questions have no inversion or 'did': He asked where I lived.",
    },
  },
  {
    id: "en-g-past-perfect",
    lang: "en",
    cefr: "B2",
    title: { es: "Past perfect: had + participio", en: "Past perfect: had + past participle" },
    short: {
      es: "had + participio = había + participio: When I arrived, the movie had started.",
      en: "had + past participle: When I arrived, the movie had started.",
    },
    rule: {
      es: "El past perfect se usa para una acción anterior a otro momento del pasado, como el pluscuamperfecto español (había llegado). Ayuda a ordenar un relato y aparece en el estilo indirecto y en el tercer condicional.",
      en: "The past perfect describes an action before another past moment. It orders events in a story and appears in reported speech and the third conditional.",
    },
    steps: [
      { es: "Identifica los dos momentos del pasado.", en: "Identify the two past moments." },
      { es: "El más antiguo → had + participio.", en: "The earlier one → had + past participle." },
      { es: "El más reciente → pasado simple.", en: "The later one → past simple." },
    ],
    table: { head: ["", "past perfect"], rows: [["+", "She had already left."], ["−", "We hadn't eaten yet."], ["?", "Had you been there before?"]] },
    examples: [
      { target: "I'd never flown before I moved to the US.", gloss: { es: "Nunca había volado antes de mudarme a Estados Unidos.", en: "I'd never flown before I moved to the US." } },
      { target: "By the time the police arrived, the thieves had escaped.", gloss: { es: "Cuando llegó la policía, los ladrones ya se habían escapado.", en: "By the time the police arrived, the thieves had escaped." } },
    ],
    pitfalls: {
      es: "Ojo con «'d»: puede ser «had» (I'd seen) o «would» (I'd go). Si sigue un participio, es «had».",
      en: "'d can mean 'had' (I'd seen) or 'would' (I'd go). Followed by a past participle, it's 'had'.",
    },
  },

  // ── u21 ───────────────────────────────────────────────────
  {
    id: "en-g-third-conditional",
    lang: "en",
    cefr: "B2",
    title: { es: "Tercer condicional: el pasado que no fue", en: "Third conditional: the past that didn't happen" },
    short: {
      es: "If I had known, I would have come (Si lo hubiera sabido, habría venido).",
      en: "If I had known, I would have come.",
    },
    rule: {
      es: "Imagina un pasado distinto del real: if + had + participio (hubiera sabido) y would have + participio (habría venido). También could have (podría haber) y might have (quizás habría). Se usa para lamentarse o criticar.",
      en: "Imagines a different past: if + had + past participle and would have + past participle. could have and might have also work. Used for regrets and criticism.",
    },
    steps: [
      { es: "Condición: if + had (not) + participio.", en: "Condition: if + had (not) + past participle." },
      { es: "Resultado: would / could / might + have + participio.", en: "Result: would / could / might + have + past participle." },
      { es: "Al hablar: If I'd known, I'd have come.", en: "In speech: If I'd known, I'd have come." },
    ],
    table: { head: ["condición", "resultado"], rows: [["If you had told me,", "I would have helped."], ["If we'd left earlier,", "we'd have caught it."], ["If she hadn't called,", "I might have forgotten."]] },
    examples: [
      { target: "If I had studied more, I would have passed the exam.", gloss: { es: "Si hubiera estudiado más, habría aprobado el examen.", en: "If I had studied more, I would have passed the exam." } },
      { target: "We wouldn't have met if you hadn't moved to Chicago.", gloss: { es: "No nos habríamos conocido si no te hubieras mudado a Chicago.", en: "We wouldn't have met if you hadn't moved to Chicago." } },
    ],
    pitfalls: {
      es: "«If I would have known» es un error muy frecuente (incluso entre nativos): en la parte del if va «had known».",
      en: "'If I would have known' is very common but wrong: the if-clause takes 'had known'.",
    },
  },
  {
    id: "en-g-wish",
    lang: "en",
    cefr: "B2",
    title: { es: "wish e if only (ojalá)", en: "wish and if only" },
    short: {
      es: "I wish + pasado (presente: ojalá tuviera) · I wish + had + participio (pasado: ojalá hubiera).",
      en: "I wish + past (about now) · I wish + had + past participle (about the past).",
    },
    rule: {
      es: "«wish» expresa deseos contrarios a la realidad. Sobre el presente, va seguido de pasado (I wish I knew); sobre el pasado, de had + participio (I wish I had known). Para quejarse de lo que hace otra persona: wish + would (I wish you would stop). «If only» funciona igual, con más emoción.",
      en: "'wish' expresses wishes contrary to reality. About the present it takes the past (I wish I knew); about the past, had + participle (I wish I had known). To complain about someone's behavior: wish + would (I wish you would stop). 'If only' works the same way, more emotionally.",
    },
    steps: [
      { es: "¿Deseo sobre el presente? → wish + pasado simple (were para be).", en: "Wish about now? → wish + past simple (were for be)." },
      { es: "¿Arrepentimiento del pasado? → wish + had + participio.", en: "Regret about the past? → wish + had + past participle." },
      { es: "¿Queja sobre otra persona? → wish + someone + would.", en: "Complaint about someone? → wish + someone + would." },
    ],
    table: { head: ["uso", "ejemplo"], rows: [["presente", "I wish I were taller."], ["pasado", "I wish I hadn't sold it."], ["queja", "I wish he would call."], ["if only", "If only I had more time!"]] },
    examples: [
      { target: "I wish I lived closer to my family.", gloss: { es: "Ojalá viviera más cerca de mi familia.", en: "I wish I lived closer to my family." } },
      { target: "If only we had bought that house!", gloss: { es: "¡Si tan solo hubiéramos comprado esa casa!", en: "If only we had bought that house!" } },
    ],
    pitfalls: {
      es: "Para deseos sobre el futuro que sí pueden pasar se usa «hope», no «wish»: «Ojalá llegues bien» = I hope you get there safely, no «I wish you get».",
      en: "For possible future wishes use 'hope': I hope you get there safely, not 'I wish you get'.",
    },
  },
  {
    id: "en-g-modal-perfect",
    lang: "en",
    cefr: "B2",
    title: { es: "should have, could have, would have, must have", en: "should have, could have, would have, must have" },
    short: {
      es: "modal + have + participio: should have (debería haber), could have (podría haber), must have (debe de haber).",
      en: "modal + have + past participle: should have, could have, would have, must have.",
    },
    rule: {
      es: "Los modales seguidos de have + participio hablan del pasado: should have critica o lamenta lo que no se hizo, could have señala una posibilidad que no se aprovechó, would have imagina un resultado, y must have / can't have deducen qué pasó.",
      en: "Modals + have + past participle refer to the past: should have criticizes or regrets, could have points to a missed possibility, would have imagines a result, and must have / can't have deduce what happened.",
    },
    steps: [
      { es: "Elige el significado: crítica (should), posibilidad (could), resultado (would), deducción (must / can't).", en: "Pick the meaning: criticism (should), possibility (could), result (would), deduction (must / can't)." },
      { es: "Añade have + participio.", en: "Add have + past participle." },
      { es: "Se pronuncia y a veces se escribe: should've, could've. Nunca «should of».", en: "Pronounced and sometimes written: should've, could've. Never 'should of'." },
    ],
    table: { head: ["modal", "ejemplo"], rows: [["should have", "You should have asked."], ["could have", "It could have been worse."], ["would have", "I would have come."], ["must have", "She must have forgotten."], ["can't have", "He can't have seen us."]] },
    examples: [
      { target: "I shouldn't have eaten so much.", gloss: { es: "No debería haber comido tanto.", en: "I shouldn't have eaten so much." } },
      { target: "You could have told me you were coming!", gloss: { es: "¡Me podrías haber avisado que venías!", en: "You could have told me you were coming!" } },
    ],
    pitfalls: {
      es: "«should of» es un error de oído muy común; y el participio es obligatorio: «should have went» → should have gone.",
      en: "'should of' is a common mishearing; and the participle is required: 'should have went' → should have gone.",
    },
  },

  // ── u22 ───────────────────────────────────────────────────
  {
    id: "en-g-phrasal-verbs",
    lang: "en",
    cefr: "B2",
    title: { es: "Phrasal verbs: verbo + partícula", en: "Phrasal verbs: verb + particle" },
    short: {
      es: "pick up the kids / pick the kids up / pick them up (pronombre siempre en medio).",
      en: "pick up the kids / pick the kids up / pick them up (pronoun always in the middle).",
    },
    rule: {
      es: "Un phrasal verb combina un verbo con una partícula (up, out, off, down…) y suele tener un significado que no se deduce de las partes: give up = rendirse. En los separables, el objeto puede ir antes o después de la partícula, pero un pronombre siempre va en medio. Algunos no se separan nunca: look after the kids, run out of milk.",
      en: "A phrasal verb combines a verb and a particle (up, out, off, down…), often with an unpredictable meaning: give up = stop trying. In separable ones the object can go before or after the particle, but a pronoun always goes in the middle. Some never separate: look after the kids, run out of milk.",
    },
    steps: [
      { es: "Aprende el phrasal verb completo con un ejemplo, como una palabra nueva.", en: "Learn the whole phrasal verb with an example, like a new word." },
      { es: "¿El objeto es un pronombre (it, them, me)? → en medio: turn it off.", en: "Is the object a pronoun (it, them, me)? → in the middle: turn it off." },
      { es: "¿Es un sustantivo? → antes o después: turn off the TV / turn the TV off.", en: "A noun? → before or after: turn off the TV / turn the TV off." },
    ],
    table: { head: ["phrasal verb", "significado"], rows: [["pick up", "recoger, pasar a buscar"], ["fill out", "llenar (un formulario)"], ["put off", "posponer"], ["turn down", "rechazar; bajar el volumen"], ["run out of", "quedarse sin"], ["figure out", "entender, resolver"]] },
    examples: [
      { target: "Can you turn the music down? I'm on the phone.", gloss: { es: "¿Puedes bajar la música? Estoy hablando por teléfono.", en: "Can you turn the music down? I'm on the phone." } },
      { target: "I'll look into it and get back to you.", gloss: { es: "Lo voy a revisar y te respondo.", en: "I'll look into it and get back to you." } },
    ],
    pitfalls: {
      es: "«pick up me» o «turn off it» están mal: el pronombre va en medio (pick me up, turn it off). Y en conversación el inglés prefiere el phrasal verb a la palabra latina: put off antes que postpone.",
      en: "'pick up me' or 'turn off it' are wrong: pick me up, turn it off. In conversation phrasal verbs sound more natural than Latin-based verbs.",
    },
  },
  {
    id: "en-g-causative",
    lang: "en",
    cefr: "B2",
    title: { es: "have / get something done", en: "have / get something done" },
    short: {
      es: "I had my car fixed = me arreglaron el auto (lo encargué). get es más informal: I got my hair cut.",
      en: "I had my car fixed (someone did it for me). get is more informal: I got my hair cut.",
    },
    rule: {
      es: "Cuando otra persona hace algo por ti, casi siempre un servicio pagado, se usa have / get + objeto + participio. El español lo dice con el verbo normal («me corté el pelo») o con «me lo hicieron». También sirve para cosas malas que te pasan: She had her bag stolen.",
      en: "When someone else does something for you, usually a paid service, use have / get + object + past participle. It's also used for bad things that happen to you: She had her bag stolen.",
    },
    steps: [
      { es: "¿Lo hiciste tú? → verbo normal. ¿Lo hizo otro para ti? → have / get.", en: "Did you do it? → normal verb. Did someone do it for you? → have / get." },
      { es: "Conjuga have / get en el tiempo que necesites.", en: "Conjugate have / get in the tense you need." },
      { es: "Objeto + participio: my nails done, the house painted.", en: "Object + past participle: my nails done, the house painted." },
    ],
    table: { head: ["tiempo", "ejemplo"], rows: [["presente", "I get my nails done."], ["pasado", "We had the roof repaired."], ["futuro", "I'm going to get it fixed."], ["perfecto", "Have you had your eyes tested?"]] },
    examples: [
      { target: "You should get your eyes checked.", gloss: { es: "Deberías hacerte revisar la vista.", en: "You should get your eyes checked." } },
      { target: "We had the documents translated.", gloss: { es: "Mandamos traducir los documentos.", en: "We had the documents translated." } },
    ],
    pitfalls: {
      es: "«I cut my hair» en inglés significa que te lo cortaste tú mismo/a. Y el orden es objeto + participio: «I had fixed my car» es otra cosa (había arreglado).",
      en: "'I cut my hair' means you did it yourself. Word order matters: 'I had fixed my car' is a past perfect.",
    },
  },

  // ── u23 ───────────────────────────────────────────────────
  {
    id: "en-g-contrast-linkers",
    lang: "en",
    cefr: "B2",
    title: { es: "Conectores de contraste: although, despite, however, whereas", en: "Contrast linkers: although, despite, however, whereas" },
    short: {
      es: "although + oración · despite / in spite of + sustantivo o -ing · However, … (nueva oración) · whereas = mientras que.",
      en: "although + clause · despite / in spite of + noun or -ing · However, … (new sentence) · whereas for contrast.",
    },
    rule: {
      es: "Todos expresan contraste, pero cambia lo que los sigue. although / even though van con una oración completa (sujeto + verbo). despite / in spite of van con un sustantivo o un -ing. however empieza una oración nueva y lleva coma. whereas / while comparan dos ideas opuestas en la misma frase.",
      en: "They all express contrast but take different structures. although / even though take a full clause. despite / in spite of take a noun or -ing. however starts a new sentence with a comma. whereas / while compare two opposing ideas in one sentence.",
    },
    steps: [
      { es: "¿Sigue sujeto + verbo? → although / even though.", en: "Followed by subject + verb? → although / even though." },
      { es: "¿Sigue un sustantivo o -ing? → despite / in spite of.", en: "Followed by a noun or -ing? → despite / in spite of." },
      { es: "¿Une dos oraciones separadas? → However, …", en: "Linking two separate sentences? → However, …" },
    ],
    table: { head: ["conector", "estructura"], rows: [["although", "Although it was late, …"], ["despite", "Despite the cost, …"], ["despite + -ing", "Despite being late, …"], ["however", "… . However, …"], ["whereas", "…, whereas …"]] },
    examples: [
      { target: "Even though he's rich, he lives very simply.", gloss: { es: "Aunque es rico, vive de forma muy sencilla.", en: "Even though he's rich, he lives very simply." } },
      { target: "The plan is expensive. However, it will save money in the long run.", gloss: { es: "El plan es caro. Sin embargo, a la larga ahorrará dinero.", en: "The plan is expensive. However, it will save money in the long run." } },
    ],
    pitfalls: {
      es: "«despite of» y «although…, but…» son calcos frecuentes: despite the rain / in spite of the rain; although it rained, we went (sin but).",
      en: "'despite of' and 'although…, but…' are frequent errors: despite the rain; although it rained, we went (no 'but').",
    },
  },
  {
    id: "en-g-deduction",
    lang: "en",
    cefr: "B2",
    title: { es: "Modales de deducción: must, might, can't", en: "Modals of deduction: must, might, can't" },
    short: {
      es: "must be (seguro que sí) · might / may / could be (puede que) · can't be (seguro que no). Pasado: must have been.",
      en: "must be (sure it's true) · might / may / could be (possible) · can't be (sure it's not). Past: must have been.",
    },
    rule: {
      es: "Para hacer suposiciones a partir de pruebas: must expresa casi certeza (debe de ser), might / may / could, posibilidad (puede que sea), y can't, casi certeza negativa (no puede ser). En la deducción, lo contrario de must es can't, no mustn't. Para el pasado: modal + have + participio.",
      en: "For deductions from evidence: must = almost certain, might / may / could = possible, can't = almost certainly not. The opposite of must here is can't, not mustn't. For the past: modal + have + participle.",
    },
    steps: [
      { es: "¿Qué tan seguro/a estás? Casi seguro → must; quizás → might; imposible → can't.", en: "How sure are you? Almost sure → must; maybe → might; impossible → can't." },
      { es: "Presente: modal + be / verbo (must be, might know).", en: "Present: modal + be / verb (must be, might know)." },
      { es: "Pasado: modal + have + participio (must have left).", en: "Past: modal + have + participle (must have left)." },
    ],
    table: { head: ["certeza", "presente", "pasado"], rows: [["≈ 95 % sí", "must be", "must have been"], ["≈ 50 %", "might be", "might have been"], ["≈ 95 % no", "can't be", "can't have been"]] },
    examples: [
      { target: "You've been traveling all day. You must be hungry.", gloss: { es: "Viajaste todo el día. Debes de tener hambre.", en: "You've been traveling all day. You must be hungry." } },
      { target: "She can't have finished already. She only started an hour ago.", gloss: { es: "No puede haber terminado ya. Empezó hace solo una hora.", en: "She can't have finished already. She only started an hour ago." } },
    ],
    pitfalls: {
      es: "«mustn't be» no es «no puede ser»: para lo imposible se dice «can't be». Y no confundas «must» de obligación (debes) con el de deducción (debe de).",
      en: "'mustn't be' isn't the opposite of 'must be' in deductions: use 'can't be'.",
    },
  },

  // ── u24 ───────────────────────────────────────────────────
  {
    id: "en-g-question-tags",
    lang: "en",
    cefr: "B2",
    title: { es: "Question tags: isn't it?, don't you?", en: "Question tags: isn't it?, don't you?" },
    short: {
      es: "Frase afirmativa → tag negativa («It's cold, isn't it?») · negativa → afirmativa («You don't smoke, do you?»).",
      en: "Positive sentence → negative tag (It's cold, isn't it?) · negative → positive (You don't smoke, do you?).",
    },
    rule: {
      es: "El «¿no?» o «¿verdad?» español se dice en inglés repitiendo el auxiliar de la frase con el pronombre del sujeto. Si la frase es afirmativa, la tag es negativa, y viceversa. Sin auxiliar, se usa do / does / did. Con entonación descendente buscas confirmación; con ascendente, es una pregunta de verdad.",
      en: "Repeat the sentence's auxiliary with the subject pronoun. A positive sentence takes a negative tag and vice versa. With no auxiliary, use do / does / did. Falling intonation asks for agreement; rising intonation is a real question.",
    },
    steps: [
      { es: "Busca el auxiliar (is, are, can, will, have…). Si no hay, usa do / does / did.", en: "Find the auxiliary (is, are, can, will, have…). If there isn't one, use do / does / did." },
      { es: "Invierte la polaridad: afirmativa → negativa.", en: "Reverse the polarity: positive → negative." },
      { es: "Añade el pronombre del sujeto: Ana → she, the kids → they.", en: "Add the subject pronoun: Ana → she, the kids → they." },
    ],
    table: { head: ["frase", "tag"], rows: [["It's late,", "isn't it?"], ["You can drive,", "can't you?"], ["She works here,", "doesn't she?"], ["They didn't come,", "did they?"], ["I'm right,", "aren't I?"]] },
    examples: [
      { target: "You're from Chile, aren't you?", gloss: { es: "Eres de Chile, ¿no?", en: "You're from Chile, aren't you?" } },
      { target: "We haven't missed the bus, have we?", gloss: { es: "No perdimos el autobús, ¿no?", en: "We haven't missed the bus, have we?" } },
    ],
    pitfalls: {
      es: "Poner siempre «isn't it?» o «no?» al final es el calco más típico: la tag cambia con cada frase. Ojo con «I am» → aren't I?",
      en: "Using 'isn't it?' or 'no?' for everything is a common error: the tag changes with each sentence. Note: I am → aren't I?",
    },
  },
  {
    id: "en-g-so-such",
    lang: "en",
    cefr: "B2",
    title: { es: "so y such para enfatizar", en: "so and such for emphasis" },
    short: {
      es: "so + adjetivo (so tired) · such (a) + adjetivo + sustantivo (such a long day) · + that + consecuencia.",
      en: "so + adjective (so tired) · such (a) + adjective + noun (such a long day) · + that + result.",
    },
    rule: {
      es: "Las dos equivalen a «tan / tanto» o «qué…!». «so» va con un adjetivo o adverbio solo; «such» va con un sustantivo (con a / an si es contable singular). Las dos pueden añadir una consecuencia con «that», que en conversación suele omitirse.",
      en: "'so' goes with an adjective or adverb alone; 'such' goes with a noun (with a / an if it's singular countable). Both can add a result with 'that', often dropped in speech.",
    },
    steps: [
      { es: "¿Hay un sustantivo después? → such (a / an).", en: "Is there a noun after it? → such (a / an)." },
      { es: "¿Solo un adjetivo o adverbio? → so.", en: "Just an adjective or adverb? → so." },
      { es: "Con much / many / little / few → so: so many people.", en: "With much / many / little / few → so: so many people." },
    ],
    table: { head: ["so", "such"], rows: [["so beautiful", "such a beautiful view"], ["so expensive", "such expensive shoes"], ["so many people", "such a lot of people"]] },
    examples: [
      { target: "The movie was so boring that I fell asleep.", gloss: { es: "La película era tan aburrida que me dormí.", en: "The movie was so boring that I fell asleep." } },
      { target: "They're such kind people!", gloss: { es: "¡Son personas tan amables!", en: "They're such kind people!" } },
    ],
    pitfalls: {
      es: "«so a good idea» o «such good» sin sustantivo son errores típicos: such a good idea / so good.",
      en: "'so a good idea' or 'such good' with no noun are typical errors: such a good idea / so good.",
    },
  },
];
