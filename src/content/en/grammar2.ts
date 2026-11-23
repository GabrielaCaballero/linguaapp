import type { GrammarPoint } from "../schema";

// Grammar points for English units u09–u16 (A1.2–B1).
export const grammar2: GrammarPoint[] = [
  // ── u09 ───────────────────────────────────────────────────
  {
    id: "en-g-some-any",
    lang: "en",
    cefr: "A1.2",
    title: { es: "some y any", en: "some and any" },
    short: {
      es: "some en afirmativas y ofrecimientos · any en preguntas y negaciones. Con plurales e incontables.",
      en: "some in positive sentences and offers · any in questions and negatives. With plurals and uncountables.",
    },
    rule: {
      es: "«some» y «any» indican una cantidad no precisa; en español a menudo no se traducen («Necesito leche» = I need some milk). Se usa «some» en frases afirmativas y al ofrecer o pedir algo, y «any» en preguntas abiertas y en negaciones.",
      en: "'some' and 'any' express an unspecified amount. Use 'some' in positive sentences and in offers or requests, and 'any' in open questions and negatives.",
    },
    steps: [
      { es: "¿La frase es afirmativa, o estás ofreciendo o pidiendo algo? → some.", en: "Is it positive, or are you offering or asking for something? → some." },
      { es: "¿Es una pregunta abierta o una negación? → any.", en: "Is it an open question or a negative? → any." },
      { es: "Con un solo objeto contable no van: a / an (an apple).", en: "Not with a single countable thing: use a / an (an apple)." },
    ],
    table: { head: ["", "contable (plural)", "incontable"], rows: [["+", "some eggs", "some milk"], ["−", "not any eggs", "not any milk"], ["?", "any eggs?", "any milk?"], ["oferta", "some cookies?", "some coffee?"]] },
    examples: [
      { target: "Would you like some tea?", gloss: { es: "¿Quieres un té?", en: "Would you like some tea?" } },
      { target: "We don't have any plans tonight.", gloss: { es: "No tenemos planes esta noche.", en: "We don't have any plans tonight." } },
    ],
    pitfalls: {
      es: "Algunas palabras son incontables en inglés aunque en español se cuenten: advice, information, news, furniture, luggage. No llevan «a» ni plural: some advice, a piece of advice.",
      en: "Some nouns are uncountable in English: advice, information, news, furniture, luggage. No 'a' and no plural: some advice, a piece of advice.",
    },
  },
  {
    id: "en-g-how-much-many",
    lang: "en",
    cefr: "A1.2",
    title: { es: "much, many, a lot of", en: "much, many, a lot of" },
    short: {
      es: "many + contables (many eggs) · much + incontables (much milk) · a lot of con los dos, sobre todo en afirmativas.",
      en: "many + countables (many eggs) · much + uncountables (much milk) · a lot of with both, mainly in positives.",
    },
    rule: {
      es: "El español usa «mucho/muchos» para todo; el inglés distingue si el sustantivo se puede contar. «much» y «many» son más comunes en preguntas y negaciones; en frases afirmativas suena más natural «a lot of».",
      en: "English distinguishes countable from uncountable nouns. 'much' and 'many' are typical in questions and negatives; in positive sentences 'a lot of' sounds more natural.",
    },
    steps: [
      { es: "¿Puedes contarlo (one apple, two apples)? → many.", en: "Can you count it (one apple, two apples)? → many." },
      { es: "¿No se cuenta (water, money, time)? → much.", en: "Is it uncountable (water, money, time)? → much." },
      { es: "En una afirmación: a lot of (para los dos).", en: "In a positive statement: a lot of (for both)." },
    ],
    table: { head: ["", "contable", "incontable"], rows: [["?", "How many people?", "How much time?"], ["−", "not many people", "not much time"], ["+", "a lot of people", "a lot of time"]] },
    examples: [
      { target: "How many kids do you have?", gloss: { es: "¿Cuántos hijos tienes?", en: "How many kids do you have?" } },
      { target: "I don't have much time today.", gloss: { es: "Hoy no tengo mucho tiempo.", en: "I don't have much time today." } },
    ],
    pitfalls: {
      es: "«How much people?» y «many money» son errores típicos. Ojo: «people» es plural contable (many people) y «money» es incontable (much money).",
      en: "'How much people?' and 'many money' are typical errors: 'people' is a countable plural, 'money' is uncountable.",
    },
  },

  // ── u10 ───────────────────────────────────────────────────
  {
    id: "en-g-past-simple",
    lang: "en",
    cefr: "A2",
    title: { es: "Pasado simple: -ed y did", en: "Past simple: -ed and did" },
    short: {
      es: "worked (todas las personas) · Did you work? · I didn't work (con did, el verbo en forma base).",
      en: "worked (every person) · Did you work? · I didn't work (after did, the base form).",
    },
    rule: {
      es: "El pasado simple sirve para acciones terminadas en un momento del pasado (yesterday, last week, in 2019); equivale al pretérito (trabajé) y muchas veces al imperfecto. Los verbos regulares añaden -ed para todas las personas. Para preguntar y negar se usa did / didn't + forma base.",
      en: "The past simple is for finished actions at a past time (yesterday, last week, in 2019). Regular verbs add -ed for every person. Questions and negatives use did / didn't + base form.",
    },
    steps: [
      { es: "Afirmativa: verbo + -ed (o la forma irregular).", en: "Positive: verb + -ed (or the irregular form)." },
      { es: "Ortografía: live → lived, stop → stopped, study → studied.", en: "Spelling: live → lived, stop → stopped, study → studied." },
      { es: "Pregunta: (wh-) + did + sujeto + forma base: Where did you go?", en: "Question: (wh-) + did + subject + base form: Where did you go?" },
      { es: "Negación: didn't + forma base: I didn't go.", en: "Negative: didn't + base form: I didn't go." },
    ],
    table: { head: ["", "regular", "irregular"], rows: [["+", "She called.", "She went."], ["−", "She didn't call.", "She didn't go."], ["?", "Did she call?", "Did she go?"]] },
    examples: [
      { target: "We watched a movie last night.", gloss: { es: "Anoche vimos una película.", en: "We watched a movie last night." } },
      { target: "Did you like the food?", gloss: { es: "¿Te gustó la comida?", en: "Did you like the food?" } },
    ],
    pitfalls: {
      es: "El pasado aparece una sola vez: «Did you went?» o «I didn't saw» están mal → Did you go? / I didn't see. Y la -ed no se pronuncia como sílaba aparte salvo tras t o d.",
      en: "The past appears only once: 'Did you went?' or 'I didn't saw' are wrong → Did you go? / I didn't see.",
    },
  },
  {
    id: "en-g-past-irregular",
    lang: "en",
    cefr: "A2",
    title: { es: "Verbos irregulares en pasado", en: "Irregular past forms" },
    short: {
      es: "go → went · have → had · see → saw · eat → ate · buy → bought · get → got · take → took.",
      en: "go → went · have → had · see → saw · eat → ate · buy → bought · get → got · take → took.",
    },
    rule: {
      es: "Los verbos más usados tienen un pasado irregular que hay que memorizar. La forma es igual para todas las personas y solo se usa en frases afirmativas: con did / didn't vuelve la forma base.",
      en: "The most common verbs have an irregular past that must be memorized. It's the same for every person and only appears in positive sentences: with did / didn't the base form returns.",
    },
    steps: [
      { es: "Aprende los verbos en grupos que suenan parecido: buy → bought, bring → brought, think → thought.", en: "Learn them in groups that sound alike: buy → bought, bring → brought, think → thought." },
      { es: "En afirmativa usa la forma irregular: I went.", en: "In a positive sentence use the irregular form: I went." },
      { es: "Con did / didn't, forma base: Did you go?", en: "With did / didn't, base form: Did you go?" },
    ],
    table: { head: ["base", "pasado", "base", "pasado"], rows: [["go", "went", "come", "came"], ["have", "had", "make", "made"], ["see", "saw", "take", "took"], ["eat", "ate", "give", "gave"], ["buy", "bought", "think", "thought"], ["get", "got", "say", "said"]] },
    examples: [
      { target: "I took the bus and got there at ten.", gloss: { es: "Tomé el autobús y llegué a las diez.", en: "I took the bus and got there at ten." } },
      { target: "She came home and made dinner.", gloss: { es: "Llegó a casa y preparó la cena.", en: "She came home and made dinner." } },
    ],
    pitfalls: {
      es: "Regularizar los irregulares («goed», «buyed», «eated») es normal al principio. Ojo también con bought (comprar) / brought (traer).",
      en: "Regularizing irregular verbs ('goed', 'buyed', 'eated') is common at first. Watch bought (buy) / brought (bring).",
    },
  },

  // ── u11 ───────────────────────────────────────────────────
  {
    id: "en-g-was-were",
    lang: "en",
    cefr: "A2",
    title: { es: "El pasado de «be»: was / were", en: "Past of 'be': was / were" },
    short: {
      es: "I / he / she / it was · you / we / they were · wasn't / weren't · «Were you…?» (sin did).",
      en: "I / he / she / it was · you / we / they were · wasn't / weren't · Were you…? (no did).",
    },
    rule: {
      es: "«be» tiene dos formas en pasado: was y were. Equivalen a «era / estaba / fui / estuve». Igual que en presente, «be» no usa did: se niega con «not» y se pregunta invirtiendo el orden. «Había» se dice «there was / there were».",
      en: "'be' has two past forms: was and were. As in the present, 'be' doesn't use did: add 'not' for negatives and invert for questions. 'There was / there were' is the past of 'there is / are'.",
    },
    steps: [
      { es: "Sujeto I, he, she, it → was; you, we, they → were.", en: "Subject I, he, she, it → was; you, we, they → were." },
      { es: "Negación: wasn't / weren't.", en: "Negative: wasn't / weren't." },
      { es: "Pregunta: Was it…? / Were they…?", en: "Question: Was it…? / Were they…?" },
    ],
    table: { head: ["", "+", "−", "?"], rows: [["I / he / she / it", "was", "wasn't", "Was she…?"], ["you / we / they", "were", "weren't", "Were they…?"]] },
    examples: [
      { target: "The concert was amazing.", gloss: { es: "El concierto estuvo increíble.", en: "The concert was amazing." } },
      { target: "Were you at home last night?", gloss: { es: "¿Estabas en casa anoche?", en: "Were you at home last night?" } },
    ],
    pitfalls: {
      es: "No se dice «Did you be…?» ni «I didn't be»: con «be» nunca va did. Y «había» + plural es «there were», no «there was».",
      en: "Never 'Did you be…?' or 'I didn't be': 'be' never takes did. And 'there were' with plurals.",
    },
  },
  {
    id: "en-g-used-to",
    lang: "en",
    cefr: "A2",
    title: { es: "used to: hábitos del pasado", en: "used to: past habits" },
    short: {
      es: "I used to play (antes jugaba, ya no) · I didn't use to · Did you use to…? (sin -d con did).",
      en: "I used to play (but not now) · I didn't use to · Did you use to…? (no -d after did).",
    },
    rule: {
      es: "«used to» + verbo cuenta hábitos o situaciones del pasado que ya no son ciertas. En español solemos usar el imperfecto (jugaba) o «solía». Solo existe en pasado: para hábitos actuales se usa el presente simple o «usually».",
      en: "'used to' + verb describes past habits or states that are no longer true. It only exists in the past: for present habits use the present simple or 'usually'.",
    },
    steps: [
      { es: "¿Era un hábito o situación que ya terminó? → used to + verbo.", en: "A habit or state that has ended? → used to + verb." },
      { es: "Negación y pregunta con did: didn't use to / Did you use to…?", en: "Negative and question with did: didn't use to / Did you use to…?" },
      { es: "Si es una sola vez, usa el pasado simple: I went to Cuba once.", en: "If it happened once, use the past simple: I went to Cuba once." },
    ],
    table: { head: ["", "used to"], rows: [["+", "I used to live in Lima."], ["−", "I didn't use to like coffee."], ["?", "Did you use to play sports?"]] },
    examples: [
      { target: "My dad used to work in a factory.", gloss: { es: "Mi papá trabajaba en una fábrica.", en: "My dad used to work in a factory." } },
      { target: "There used to be a cinema here.", gloss: { es: "Aquí antes había un cine.", en: "There used to be a cinema here." } },
    ],
    pitfalls: {
      es: "No confundas «I use to» (que no existe en presente) con «I usually» (suelo, ahora). Y «I'm used to» significa otra cosa: estar acostumbrado/a.",
      en: "Don't use 'I use to' for present habits: say 'I usually'. And 'I'm used to' means 'I'm accustomed to'.",
    },
  },

  // ── u12 ───────────────────────────────────────────────────
  {
    id: "en-g-going-to",
    lang: "en",
    cefr: "A2",
    title: { es: "be going to: planes y predicciones con pruebas", en: "be going to: plans and evidence-based predictions" },
    short: {
      es: "I'm going to + verbo = voy a… Para planes ya decididos y para lo que se ve venir (it's going to rain).",
      en: "I'm going to + verb: for decided plans and for what you can see coming (it's going to rain).",
    },
    rule: {
      es: "«be going to» + verbo funciona como «ir a + infinitivo»: intenciones y planes ya pensados, y predicciones basadas en lo que vemos ahora. «be» cambia según el sujeto (I'm, she's, they're).",
      en: "'be going to' + verb expresses intentions and plans already made, and predictions based on present evidence. 'be' changes with the subject (I'm, she's, they're).",
    },
    steps: [
      { es: "Sujeto + am / is / are.", en: "Subject + am / is / are." },
      { es: "+ going to + verbo base.", en: "+ going to + base verb." },
      { es: "Negación: isn't / aren't going to; pregunta: «Are you going to…?»", en: "Negative: isn't / aren't going to; question: Are you going to…?" },
    ],
    table: { head: ["", "going to"], rows: [["+", "She's going to study law."], ["−", "We aren't going to stay."], ["?", "Are you going to call him?"]] },
    examples: [
      { target: "I'm going to start a new job in May.", gloss: { es: "En mayo voy a empezar un trabajo nuevo.", en: "I'm going to start a new job in May." } },
      { target: "Look at the sky! It's going to rain.", gloss: { es: "¡Mira el cielo! Va a llover.", en: "Look at the sky! It's going to rain." } },
    ],
    pitfalls: {
      es: "Se olvida el «be»: «I going to travel» → I'm going to travel. Al hablar se oye «gonna», pero no se escribe en textos formales.",
      en: "Learners drop 'be': 'I going to travel' → I'm going to travel. In speech you'll hear 'gonna', but don't write it formally.",
    },
  },
  {
    id: "en-g-will",
    lang: "en",
    cefr: "A2",
    title: { es: "will: decisiones del momento, promesas y predicciones", en: "will: instant decisions, promises and predictions" },
    short: {
      es: "I'll call you (decisión o promesa) · It will be fine (predicción) · won't = will not.",
      en: "I'll call you (decision or promise) · It will be fine (prediction) · won't = will not.",
    },
    rule: {
      es: "«will» + verbo base (forma corta «'ll») es igual para todas las personas. Se usa para decidir algo en el momento de hablar, ofrecer ayuda, prometer y hacer predicciones u opinar sobre el futuro (I think…, probably).",
      en: "'will' + base verb (short form 'll) is the same for every person. Use it to decide something as you speak, offer help, promise, and predict or give opinions about the future (I think…, probably).",
    },
    steps: [
      { es: "¿Lo decides ahora mismo, lo ofreces o lo prometes? → will.", en: "Deciding right now, offering or promising? → will." },
      { es: "¿Es un plan ya decidido antes? → going to (o presente continuo).", en: "Is it a plan made earlier? → going to (or present continuous)." },
      { es: "Negación: won't; pregunta: «Will you…?»", en: "Negative: won't; question: Will you…?" },
    ],
    table: { head: ["uso", "ejemplo"], rows: [["decisión", "I'll have the soup."], ["oferta", "I'll help you with that."], ["promesa", "I won't tell anyone."], ["predicción", "You'll love it."]] },
    examples: [
      { target: "Don't worry, I'll pay.", gloss: { es: "No te preocupes, yo pago.", en: "Don't worry, I'll pay." } },
      { target: "I think prices will go up next year.", gloss: { es: "Creo que los precios van a subir el año que viene.", en: "I think prices will go up next year." } },
    ],
    pitfalls: {
      es: "«I will to go» está mal: después de «will» no va «to». Y para decidir en el momento, el español usa presente («yo pago»), pero el inglés pide «I'll pay».",
      en: "'I will to go' is wrong: no 'to' after will. For on-the-spot decisions English needs 'I'll', not the present.",
    },
  },

  // ── u13 ───────────────────────────────────────────────────
  {
    id: "en-g-should",
    lang: "en",
    cefr: "B1",
    title: { es: "should: dar consejos", en: "should: giving advice" },
    short: {
      es: "You should rest (deberías) · You shouldn't smoke · Should I…? Sin «to» y sin -s.",
      en: "You should rest · You shouldn't smoke · Should I…? No 'to' and no -s.",
    },
    rule: {
      es: "«should» es un verbo modal: va seguido del verbo base, no cambia con he / she y se niega y se pregunta sin do. Equivale a «deberías / debería» y expresa consejo u opinión, no una obligación fuerte.",
      en: "'should' is a modal verb: followed by the base form, unchanged for he / she, and negated or questioned without do. It expresses advice or opinion, not strong obligation.",
    },
    steps: [
      { es: "Sujeto + should / shouldn't.", en: "Subject + should / shouldn't." },
      { es: "+ verbo base (sin to): You should go.", en: "+ base verb (no to): You should go." },
      { es: "Para pedir consejo: What should I do? / Should I…?", en: "To ask for advice: What should I do? / Should I…?" },
    ],
    table: { head: ["", "should"], rows: [["+", "You should drink more water."], ["−", "She shouldn't work so much."], ["?", "Should I call the doctor?"]] },
    examples: [
      { target: "You should try the new Peruvian place.", gloss: { es: "Deberías probar el restaurante peruano nuevo.", en: "You should try the new Peruvian place." } },
      { target: "We shouldn't be late.", gloss: { es: "No deberíamos llegar tarde.", en: "We shouldn't be late." } },
    ],
    pitfalls: {
      es: "«You should to go» y «He shoulds» son errores típicos. Para un consejo amable, «should» suena mejor que «must», que es mucho más fuerte.",
      en: "'You should to go' and 'He shoulds' are typical errors. For friendly advice 'should' is better than 'must'.",
    },
  },
  {
    id: "en-g-have-to",
    lang: "en",
    cefr: "B1",
    title: { es: "have to, must, mustn't, don't have to", en: "have to, must, mustn't, don't have to" },
    short: {
      es: "have to / must = tener que · mustn't = está prohibido · don't have to = no hace falta.",
      en: "have to / must = obligation · mustn't = it's forbidden · don't have to = it isn't necessary.",
    },
    rule: {
      es: "«have to» (obligación externa: normas, horarios) y «must» (más formal, o una obligación que siente quien habla) significan «tener que / deber». En negativo se separan: «mustn't» prohíbe y «don't have to» dice que algo no es necesario. «have to» se conjuga (she has to, did you have to…?) y «must» no.",
      en: "'have to' (external rules, schedules) and 'must' (more formal, or the speaker's own sense of obligation) both express obligation. In the negative they differ: 'mustn't' forbids, 'don't have to' means not necessary. 'have to' conjugates (she has to, did you have to…?); 'must' doesn't.",
    },
    steps: [
      { es: "¿Es obligatorio? → have to / must.", en: "Is it obligatory? → have to / must." },
      { es: "¿Está prohibido? → mustn't (o can't).", en: "Is it forbidden? → mustn't (or can't)." },
      { es: "¿No es necesario, pero puedes? → «don't have to».", en: "Not necessary, but allowed? → don't have to." },
      { es: "En pasado: had to (must no tiene pasado).", en: "Past: had to (must has no past form)." },
    ],
    table: { head: ["forma", "significado"], rows: [["I have to / I must", "es obligatorio"], ["I mustn't", "está prohibido"], ["I don't have to", "no es necesario"], ["I had to", "tuve que"]] },
    examples: [
      { target: "Nurses have to work at night sometimes.", gloss: { es: "Los enfermeros a veces tienen que trabajar de noche.", en: "Nurses have to work at night sometimes." } },
      { target: "It's Sunday, so we don't have to get up early.", gloss: { es: "Es domingo, así que no tenemos que madrugar.", en: "It's Sunday, so we don't have to get up early." } },
    ],
    pitfalls: {
      es: "«You mustn't come» no significa «no hace falta que vengas» sino «tienes prohibido venir». Y «must to» no existe: must + verbo base.",
      en: "'You mustn't come' means you're not allowed to come, not that it's unnecessary. And 'must to' doesn't exist.",
    },
  },

  // ── u14 ───────────────────────────────────────────────────
  {
    id: "en-g-present-perfect",
    lang: "en",
    cefr: "B1",
    title: { es: "Present perfect: have + participio", en: "Present perfect: have + past participle" },
    short: {
      es: "have / has + participio: experiencias (ever, never), resultados recientes (already, yet), sin decir cuándo.",
      en: "have / has + past participle: experiences (ever, never), recent results (already, yet), with no time given.",
    },
    rule: {
      es: "El present perfect conecta el pasado con el presente: experiencias de la vida, acciones recientes cuyo resultado importa ahora y situaciones que empezaron antes y siguen. Si dices cuándo ocurrió (yesterday, in 2019, last week), el inglés pide pasado simple, aunque en español usemos «he hecho».",
      en: "The present perfect links past and present: life experiences, recent actions whose result matters now, and situations that started before and continue. If you say when it happened (yesterday, in 2019, last week), English needs the past simple.",
    },
    steps: [
      { es: "¿Dices cuándo pasó? → pasado simple. Si no → present perfect.", en: "Do you say when? → past simple. If not → present perfect." },
      { es: "Sujeto + have / has (I've, she's).", en: "Subject + have / has (I've, she's)." },
      { es: "+ participio: regular -ed (worked) o irregular (been, seen, done, gone).", en: "+ past participle: regular -ed (worked) or irregular (been, seen, done, gone)." },
      { es: "ever / never / already van antes del participio; yet va al final.", en: "ever / never / already go before the participle; yet goes at the end." },
    ],
    table: { head: ["", "present perfect"], rows: [["+", "I've been to Brazil."], ["−", "She hasn't called yet."], ["?", "Have you ever tried sushi?"], ["respuesta", "Yes, I have. / No, I haven't."]] },
    examples: [
      { target: "Have you ever been to New York?", gloss: { es: "¿Alguna vez estuviste en Nueva York?", en: "Have you ever been to New York?" } },
      { target: "I've lost my keys.", gloss: { es: "Perdí las llaves (y todavía no las tengo).", en: "I've lost my keys." } },
    ],
    pitfalls: {
      es: "«I have seen him yesterday» está mal: con una fecha va pasado simple (I saw him yesterday). Al revés, muchos latinoamericanos usan solo el pretérito («¿ya comiste?»), y en inglés americano «Did you eat yet?» también se oye en la calle.",
      en: "'I have seen him yesterday' is wrong: with a time expression use the past simple (I saw him yesterday).",
    },
  },
  {
    id: "en-g-for-since",
    lang: "en",
    cefr: "B1",
    title: { es: "for y since con el present perfect", en: "for and since with the present perfect" },
    short: {
      es: "«Vivo aquí desde hace 5 años» = I've lived here for five years · since + punto de inicio (since 2020).",
      en: "I've lived here for five years (length) · since + starting point (since 2020).",
    },
    rule: {
      es: "Para algo que empezó en el pasado y sigue ahora, el español usa presente (vivo aquí desde…) pero el inglés usa present perfect. «for» + una duración (for three weeks) y «since» + el momento en que empezó (since Monday, since I was a kid). Para preguntar: How long have you…?",
      en: "For something that started in the past and is still true, English uses the present perfect. 'for' + a length of time (for three weeks) and 'since' + the starting point (since Monday, since I was a kid). To ask: How long have you…?",
    },
    steps: [
      { es: "¿Empezó antes y sigue? → have / has + participio.", en: "Started before and still true? → have / has + past participle." },
      { es: "¿Dices cuánto tiempo? → for; ¿desde cuándo? → since.", en: "Saying how long? → for; from when? → since." },
      { es: "Para preguntar: How long have you…?", en: "To ask: How long have you…?" },
    ],
    table: { head: ["for (duración)", "since (inicio)"], rows: [["for two hours", "since ten o'clock"], ["for three years", "since 2022"], ["for a long time", "since I was born"]] },
    examples: [
      { target: "How long have you known each other?", gloss: { es: "¿Hace cuánto que se conocen?", en: "How long have you known each other?" } },
      { target: "She's been sick since Friday.", gloss: { es: "Está enferma desde el viernes.", en: "She's been sick since Friday." } },
    ],
    pitfalls: {
      es: "Calcar el presente español («I live here since 2020», «I work here for five years») es el error más común de este nivel: I've lived here since 2020.",
      en: "Using the present ('I live here since 2020') is the classic error at this level: I've lived here since 2020.",
    },
  },

  // ── u15 ───────────────────────────────────────────────────
  {
    id: "en-g-comparatives",
    lang: "en",
    cefr: "B1",
    title: { es: "Comparativos: -er / more… than, as… as", en: "Comparatives: -er / more… than, as… as" },
    short: {
      es: "cheap → cheaper · big → bigger · easy → easier · more expensive · good → better · que = than.",
      en: "cheap → cheaper · big → bigger · easy → easier · more expensive · good → better · then 'than'.",
    },
    rule: {
      es: "Los adjetivos cortos (una sílaba, o dos terminadas en -y) añaden -er; los largos van con «more». El segundo término se introduce con «than». Para igualdad se usa «as + adjetivo + as», y en negativo «not as… as».",
      en: "Short adjectives (one syllable, or two ending in -y) add -er; longer ones use 'more'. The second item is introduced by 'than'. For equality use 'as + adjective + as', negative 'not as… as'.",
    },
    steps: [
      { es: "¿Una sílaba? → -er (consonante final doble tras vocal corta: big → bigger).", en: "One syllable? → -er (double the final consonant after a short vowel: big → bigger)." },
      { es: "¿Dos sílabas en -y? → -ier (busy → busier).", en: "Two syllables ending in -y? → -ier (busy → busier)." },
      { es: "¿Más larga? → more + adjetivo.", en: "Longer? → more + adjective." },
      { es: "Añade «than» + lo que comparas.", en: "Add 'than' + what you compare." },
    ],
    table: { head: ["tipo", "adjetivo", "comparativo"], rows: [["corto", "cheap / big", "cheaper / bigger"], ["-y", "easy / busy", "easier / busier"], ["largo", "modern", "more modern"], ["irregular", "good / bad", "better / worse"], ["irregular", "far", "farther"]] },
    examples: [
      { target: "The train is faster than the bus.", gloss: { es: "El tren es más rápido que el autobús.", en: "The train is faster than the bus." } },
      { target: "My new job isn't as stressful as my old one.", gloss: { es: "Mi trabajo nuevo no es tan estresante como el anterior.", en: "My new job isn't as stressful as my old one." } },
    ],
    pitfalls: {
      es: "«more big», «more better» y «bigger that» son calcos frecuentes: bigger than, better than. «than» (que) no es «then» (luego).",
      en: "'more big', 'more better' and 'bigger that' are typical errors: bigger than, better than. Don't confuse 'than' with 'then'.",
    },
  },
  {
    id: "en-g-superlatives",
    lang: "en",
    cefr: "B1",
    title: { es: "Superlativos: the -est / the most", en: "Superlatives: the -est / the most" },
    short: {
      es: "the cheapest · the biggest · the easiest · the most expensive · the best / the worst · + in (lugares).",
      en: "the cheapest · the biggest · the easiest · the most expensive · the best / the worst · + in (places).",
    },
    rule: {
      es: "El superlativo («el más…») sigue las reglas del comparativo con «the»: the + adjetivo + -est, o the most + adjetivo largo. Con un lugar o grupo se usa «in» (the best in the city); con un período, «of» (the best day of my life). A menudo va con el present perfect: the best I've ever had.",
      en: "Superlatives follow the comparative rules with 'the': the + adjective + -est, or the most + long adjective. With a place or group use 'in' (the best in the city); with a period, 'of' (the best day of my life). Often with the present perfect: the best I've ever had.",
    },
    steps: [
      { es: "Pon «the».", en: "Add 'the'." },
      { es: "Corto → -est; largo → most + adjetivo.", en: "Short → -est; long → most + adjective." },
      { es: "Lugar → in; período o grupo → of.", en: "Place → in; period or group → of." },
    ],
    table: { head: ["adjetivo", "superlativo"], rows: [["cheap", "the cheapest"], ["big", "the biggest"], ["happy", "the happiest"], ["beautiful", "the most beautiful"], ["good / bad", "the best / the worst"]] },
    examples: [
      { target: "It's the tallest building in the city.", gloss: { es: "Es el edificio más alto de la ciudad.", en: "It's the tallest building in the city." } },
      { target: "That was the worst movie I've ever seen.", gloss: { es: "Fue la peor película que he visto en mi vida.", en: "That was the worst movie I've ever seen." } },
    ],
    pitfalls: {
      es: "El «de» del español no siempre es «of»: «el mejor restaurante de la ciudad» = the best restaurant in the city. Y no olvides «the».",
      en: "With places use 'in', not 'of': the best restaurant in the city. And don't forget 'the'.",
    },
  },

  // ── u16 ───────────────────────────────────────────────────
  {
    id: "en-g-past-continuous",
    lang: "en",
    cefr: "B1",
    title: { es: "Pasado continuo + pasado simple", en: "Past continuous + past simple" },
    short: {
      es: "I was reading (acción de fondo) when the phone rang (acción que interrumpe).",
      en: "I was reading (background) when the phone rang (interrupting action).",
    },
    rule: {
      es: "El pasado continuo (was / were + -ing) describe una acción en progreso en un momento del pasado: el escenario de una historia, como el imperfecto español. La acción breve que ocurre en medio va en pasado simple. «when» introduce normalmente la acción breve y «while», la larga.",
      en: "The past continuous (was / were + -ing) describes an action in progress at a past moment: the scene of a story. The short action that happens in the middle is in the past simple. 'when' usually introduces the short action, 'while' the long one.",
    },
    steps: [
      { es: "Identifica la acción larga, de fondo → was / were + -ing.", en: "Find the long, background action → was / were + -ing." },
      { es: "Identifica la acción corta → pasado simple.", en: "Find the short action → past simple." },
      { es: "Únelas con when (+ acción corta) o while (+ acción larga).", en: "Link them with when (+ short) or while (+ long)." },
    ],
    table: { head: ["", "pasado continuo"], rows: [["+", "They were sleeping."], ["−", "I wasn't listening."], ["?", "What were you doing?"]] },
    examples: [
      { target: "It was raining when we left the restaurant.", gloss: { es: "Estaba lloviendo cuando salimos del restaurante.", en: "It was raining when we left the restaurant." } },
      { target: "While I was waiting for the bus, I met an old friend.", gloss: { es: "Mientras esperaba el autobús, me encontré con un viejo amigo.", en: "While I was waiting for the bus, I met an old friend." } },
    ],
    pitfalls: {
      es: "El imperfecto español no siempre es pasado continuo: si es un hábito, usa used to o pasado simple («De chico jugaba al fútbol» = I used to play soccer, no «I was playing»).",
      en: "Not every Spanish imperfect is past continuous: for habits use used to or the past simple.",
    },
  },
  {
    id: "en-g-adverbs-manner",
    lang: "en",
    cefr: "B1",
    title: { es: "Adverbios de modo: -ly", en: "Adverbs of manner: -ly" },
    short: {
      es: "Adjetivo + -ly = -mente: slow → slowly, careful → carefully, easy → easily. good → well.",
      en: "Adjective + -ly: slow → slowly, careful → carefully, easy → easily. good → well.",
    },
    rule: {
      es: "El adjetivo describe a una persona o cosa (a careful driver); el adverbio describe cómo se hace algo (she drives carefully). La mayoría se forma con -ly, como «-mente». Algunos son irregulares: good → well, fast → fast, hard → hard, late → late.",
      en: "Adjectives describe a person or thing (a careful driver); adverbs describe how something is done (she drives carefully). Most add -ly. Some are irregular: good → well, fast → fast, hard → hard, late → late.",
    },
    steps: [
      { es: "¿Describe un sustantivo o va después de be / feel / look? → adjetivo.", en: "Describing a noun, or after be / feel / look? → adjective." },
      { es: "¿Describe cómo se hace una acción? → adverbio.", en: "Describing how an action is done? → adverb." },
      { es: "Ortografía: -y → -ily (happy → happily); -le → -ly (gentle → gently).", en: "Spelling: -y → -ily (happy → happily); -le → -ly (gentle → gently)." },
    ],
    table: { head: ["adjetivo", "adverbio"], rows: [["quick", "quickly"], ["careful", "carefully"], ["happy", "happily"], ["good", "well"], ["fast / hard", "fast / hard"]] },
    examples: [
      { target: "Please speak slowly.", gloss: { es: "Por favor, habla despacio.", en: "Please speak slowly." } },
      { target: "She plays the piano really well.", gloss: { es: "Toca el piano muy bien.", en: "She plays the piano really well." } },
    ],
    pitfalls: {
      es: "«She sings very good» suena mal: el adverbio de good es well. Pero después de «feel» o «look» va adjetivo: I feel good.",
      en: "'She sings very good' is wrong: use well. But after 'feel' or 'look' use an adjective: I feel good.",
    },
  },
];
