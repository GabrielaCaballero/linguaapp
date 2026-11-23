import type { GrammarPoint } from "../schema";

// Grammar points for English units u03–u08 (A1.1–A1.2), explained for Spanish speakers.
export const grammar1: GrammarPoint[] = [
  // ── u03 ───────────────────────────────────────────────────
  {
    id: "en-g-be-age",
    lang: "en",
    cefr: "A1.1",
    title: { es: "La edad: «I'm thirty», no «I have thirty years»", en: "Age: 'I'm thirty', not 'I have thirty years'" },
    short: {
      es: "La edad va con «be»: I'm thirty (years old). How old are you? = ¿Cuántos años tienes?",
      en: "Age uses 'be': I'm thirty (years old). Ask with: How old are you?",
    },
    rule: {
      es: "En inglés la edad no se «tiene»: se «es». Se dice el número solo (I'm thirty) o con «years old» completo (I'm thirty years old). Para preguntar: How old are you?",
      en: "In English you 'are' an age: say the number alone (I'm thirty) or with the full 'years old' (I'm thirty years old). To ask: How old are you?",
    },
    steps: [
      { es: "Sujeto + be: I'm, she's, they're.", en: "Subject + be: I'm, she's, they're." },
      { es: "Añade el número.", en: "Add the number." },
      { es: "Si quieres, termina con «years old» (las dos palabras).", en: "Optionally finish with 'years old' (both words)." },
    ],
    table: { head: ["✓", "✗"], rows: [["I'm thirty.", "I have thirty years."], ["He's six years old.", "He's six years."], ["How old are you?", "How many years do you have?"]] },
    examples: [
      { target: "My grandmother is ninety.", gloss: { es: "Mi abuela tiene noventa años.", en: "My grandmother is ninety." } },
      { target: "How old is your son? He's twelve.", gloss: { es: "¿Cuántos años tiene tu hijo? Doce.", en: "How old is your son? He's twelve." } },
    ],
    pitfalls: {
      es: "Traducir «tengo 30 años» palabra por palabra (I have 30 years) es el error más común; también lo es cortar a medias: «I'm thirty years».",
      en: "Translating word for word from Spanish (I have 30 years) is the most common error, as is a half form: 'I'm thirty years'.",
    },
  },
  {
    id: "en-g-plurals",
    lang: "en",
    cefr: "A1.1",
    title: { es: "El plural de los sustantivos", en: "Plural nouns" },
    short: {
      es: "+s (books) · +es tras s, sh, ch, x (buses) · y → ies (cities) · irregulares: men, children, people.",
      en: "+s (books) · +es after s, sh, ch, x (buses) · y → ies (cities) · irregular: men, children, people.",
    },
    rule: {
      es: "La mayoría de los sustantivos forma el plural con -s. Las palabras que terminan en -s, -sh, -ch o -x añaden -es, y las que terminan en consonante + y cambian a -ies. Un grupo pequeño es irregular y se aprende de memoria.",
      en: "Most nouns add -s. Nouns ending in -s, -sh, -ch or -x add -es, and consonant + y becomes -ies. A small group is irregular and has to be learned.",
    },
    steps: [
      { es: "¿Es irregular (man, woman, child, person, foot, tooth)? → men, women, children, people, feet, teeth.", en: "Is it irregular (man, woman, child, person, foot, tooth)? → men, women, children, people, feet, teeth." },
      { es: "¿Termina en -s, -sh, -ch, -x? → +es.", en: "Does it end in -s, -sh, -ch, -x? → +es." },
      { es: "¿Consonante + y? → -ies (city → cities); vocal + y → +s (day → days).", en: "Consonant + y? → -ies (city → cities); vowel + y → +s (day → days)." },
      { es: "Si no, +s.", en: "Otherwise, +s." },
    ],
    table: { head: ["regla", "singular", "plural"], rows: [["+ s", "car", "cars"], ["+ es", "bus / watch", "buses / watches"], ["y → ies", "city", "cities"], ["irregular", "man / child", "men / children"], ["irregular", "person", "people"]] },
    examples: [
      { target: "There are two women and three children.", gloss: { es: "Hay dos mujeres y tres niños.", en: "There are two women and three children." } },
      { target: "I need two boxes.", gloss: { es: "Necesito dos cajas.", en: "I need two boxes." } },
    ],
    pitfalls: {
      es: "Los adjetivos nunca van en plural en inglés: «big houses», no «bigs houses». Y «people» ya es plural: «people are», no «peoples is».",
      en: "Adjectives never take a plural -s: 'big houses', not 'bigs houses'. And 'people' is already plural: 'people are'.",
    },
  },

  // ── u04 ───────────────────────────────────────────────────
  {
    id: "en-g-would-like",
    lang: "en",
    cefr: "A1.1",
    title: { es: "Pedir con cortesía: I'd like, Can I have", en: "Asking politely: I'd like, Can I have" },
    short: {
      es: "I'd like a coffee, please. · Can I have the check, please? «I want» o «Give me» suenan bruscos.",
      en: "I'd like a coffee, please. · Can I have the check, please? 'I want' or 'Give me' sound rude.",
    },
    rule: {
      es: "En inglés las peticiones directas suenan mal educadas. Para pedir algo se usa «I'd like» (I would like, quisiera) + sustantivo, o la pregunta «Can / Could I have…?», casi siempre con «please».",
      en: "Direct requests sound rude in English. To ask for something, use 'I'd like' (I would like) + noun, or the question 'Can / Could I have…?', almost always with 'please'.",
    },
    steps: [
      { es: "Elige la fórmula: I'd like… o Can I have…?", en: "Choose the formula: I'd like… or Can I have…?" },
      { es: "Añade lo que quieres con a / an / some.", en: "Add what you want with a / an / some." },
      { es: "Termina con «please».", en: "Finish with 'please'." },
    ],
    table: { head: ["✓ cortés", "✗ brusco"], rows: [["I'd like a tea, please.", "I want a tea."], ["Can I have some water?", "Give me water."], ["Could we have the check?", "The check."]] },
    examples: [
      { target: "I'd like a table for two, please.", gloss: { es: "Quisiera una mesa para dos, por favor.", en: "I'd like a table for two, please." } },
      { target: "Could I have a glass of water?", gloss: { es: "¿Me podría dar un vaso de agua?", en: "Could I have a glass of water?" } },
    ],
    pitfalls: {
      es: "«I like a coffee» significa «me gusta un café», no «quisiera»: la «'d» de «I'd like» es esencial.",
      en: "'I like a coffee' means you enjoy coffee in general; for a request you need the 'd: 'I'd like a coffee'.",
    },
  },
  {
    id: "en-g-this-that",
    lang: "en",
    cefr: "A1.1",
    title: { es: "this, that, these, those", en: "this, that, these, those" },
    short: {
      es: "Cerca: this (sing.) / these (pl.) · Lejos: that (sing.) / those (pl.). Sin género.",
      en: "Near: this (sing.) / these (pl.) · Far: that (sing.) / those (pl.).",
    },
    rule: {
      es: "Los demostrativos cambian según la distancia y el número, pero no según el género: this cookie, this sandwich. El inglés no distingue entre «ese» y «aquel»: los dos son «that».",
      en: "Demonstratives change with distance and number: this / these for things near you, that / those for things farther away.",
    },
    steps: [
      { es: "¿Está cerca o lejos de ti?", en: "Is it near you or far away?" },
      { es: "¿Es uno o varios?", en: "Is it one thing or several?" },
      { es: "Cerca + uno = this; cerca + varios = these; lejos + uno = that; lejos + varios = those.", en: "Near + one = this; near + several = these; far + one = that; far + several = those." },
    ],
    table: { head: ["", "cerca", "lejos"], rows: [["singular", "this", "that"], ["plural", "these", "those"]] },
    examples: [
      { target: "These shoes are really comfortable.", gloss: { es: "Estos zapatos son muy cómodos.", en: "These shoes are really comfortable." } },
      { target: "Who's that man over there?", gloss: { es: "¿Quién es aquel hombre de allá?", en: "Who's that man over there?" } },
    ],
    pitfalls: {
      es: "Los hispanohablantes pronuncian «this» y «these» igual: «this» tiene una «i» corta, «these» una «i» larga. También se dice «This is Ana» para presentar a alguien.",
      en: "Spanish speakers often pronounce 'this' and 'these' the same: 'this' has a short i, 'these' a long ee.",
    },
  },

  // ── u05 ───────────────────────────────────────────────────
  {
    id: "en-g-possessives",
    lang: "en",
    cefr: "A1.1",
    title: { es: "Los posesivos: my, your, his, her, its, our, their", en: "Possessive adjectives: my, your, his, her, its, our, their" },
    short: {
      es: "El posesivo concuerda con el dueño: his (de él), her (de ella), their (de ellos). Nunca lleva -s.",
      en: "The possessive agrees with the owner: his (a man's), her (a woman's), their (a group's). Never with -s.",
    },
    rule: {
      es: "En español «su» sirve para él, ella, ellos y usted; en inglés hay que elegir según quién es el dueño: his, her, its o their. El posesivo no cambia según la cosa poseída: her brother, her sisters.",
      en: "Choose the possessive by the owner: his, her, its or their. It doesn't change for the thing owned: her brother, her sisters.",
    },
    steps: [
      { es: "Pregúntate: ¿de quién es?", en: "Ask: who does it belong to?" },
      { es: "Elige el posesivo de esa persona (he → his, she → her, they → their).", en: "Pick that person's possessive (he → his, she → her, they → their)." },
      { es: "No mires la cosa: «his wife», «her husband».", en: "Ignore the thing owned: 'his wife', 'her husband'." },
    ],
    table: { head: ["pronombre", "posesivo"], rows: [["I", "my"], ["you", "your"], ["he", "his"], ["she", "her"], ["it", "its"], ["we", "our"], ["they", "their"]] },
    examples: [
      { target: "Carlos loves his job.", gloss: { es: "Carlos ama su trabajo.", en: "Carlos loves his job." } },
      { target: "The kids are with their grandparents.", gloss: { es: "Los niños están con sus abuelos.", en: "The kids are with their grandparents." } },
    ],
    pitfalls: {
      es: "Elegir el posesivo por la cosa (como en francés) o decir «his» para todo: «Ana and his husband» está mal → her husband. Ojo también con their / there / they're, que suenan igual.",
      en: "Choosing by the thing owned or using 'his' for everyone: 'Ana and his husband' is wrong → her husband. Also: their / there / they're sound the same.",
    },
  },
  {
    id: "en-g-possessive-s",
    lang: "en",
    cefr: "A1.1",
    title: { es: "El posesivo con «'s»", en: "Possessive 's" },
    short: {
      es: "el auto de Anna = Anna's car · la casa de mis padres = my parents' house.",
      en: "Anna's car · my parents' house · the children's room.",
    },
    rule: {
      es: "Para decir que algo es de una persona, el inglés pone primero al dueño con «'s» y después la cosa: Anna's car. Si el dueño es un plural terminado en -s, solo se añade el apóstrofo: my parents' house. Con cosas se suele usar «of»: the end of the movie.",
      en: "Put the owner first with 's, then the thing: Anna's car. If the owner is a plural ending in -s, add only the apostrophe: my parents' house. With things, 'of' is usual: the end of the movie.",
    },
    steps: [
      { es: "Busca al dueño (Anna, my brother, my parents).", en: "Find the owner (Anna, my brother, my parents)." },
      { es: "Añade 's, o solo ' si es plural con -s.", en: "Add 's, or just ' if it's a plural ending in -s." },
      { es: "Pon la cosa después: Anna's car.", en: "Put the thing after it: Anna's car." },
    ],
    table: { head: ["español", "inglés"], rows: [["el auto de Anna", "Anna's car"], ["la esposa de mi hermano", "my brother's wife"], ["la casa de mis padres", "my parents' house"], ["la escuela de los niños", "the children's school"]] },
    examples: [
      { target: "This is my sister's apartment.", gloss: { es: "Este es el departamento de mi hermana.", en: "This is my sister's apartment." } },
      { target: "Is that Tom's phone?", gloss: { es: "¿Ese es el teléfono de Tom?", en: "Is that Tom's phone?" } },
    ],
    pitfalls: {
      es: "Calcar el español («the car of Anna») suena raro con personas. Y no confundas el «'s» posesivo con «is»: Anna's here (Anna está aquí) / Anna's car (el auto de Anna).",
      en: "'The car of Anna' sounds wrong with people. And 's can also mean 'is': Anna's here / Anna's car.",
    },
  },
  {
    id: "en-g-have",
    lang: "en",
    cefr: "A1.1",
    title: { es: "have / has (tener)", en: "have / has" },
    short: {
      es: "I / you / we / they have · he / she / it has. Pregunta: «Do you have…?» Negativo: «I don't have…»",
      en: "I / you / we / they have · he / she / it has. Question: Do you have…? Negative: I don't have…",
    },
    rule: {
      es: "«have» es «tener» para posesiones, familia y aspecto físico. Con he, she, it cambia a «has». Como verbo normal, pregunta y niega con do / does: Does she have a car? En Reino Unido también se oye «have got».",
      en: "'have' is used for possessions, family and appearance. With he, she, it it becomes 'has'. As an ordinary verb it uses do / does: Does she have a car? British English also uses 'have got'.",
    },
    steps: [
      { es: "¿El sujeto es he, she o it? → has. Si no → have.", en: "Is the subject he, she or it? → has. Otherwise → have." },
      { es: "Pregunta o negación: do / does + have (nunca «has» después de «does»).", en: "Question or negative: do / does + have (never 'has' after 'does')." },
    ],
    table: { head: ["", "+", "−", "?"], rows: [["I / you / we / they", "have", "don't have", "Do you have…?"], ["he / she / it", "has", "doesn't have", "Does she have…?"]] },
    examples: [
      { target: "We have a big family.", gloss: { es: "Tenemos una familia grande.", en: "We have a big family." } },
      { target: "Does your brother have kids?", gloss: { es: "¿Tu hermano tiene hijos?", en: "Does your brother have kids?" } },
    ],
    pitfalls: {
      es: "«Does she has…?» está mal: después de «does» va siempre «have». Recuerda además que la edad, el hambre o el frío no van con «have»: I'm hungry, I'm cold.",
      en: "'Does she has…?' is wrong: after 'does' it's always 'have'. Also, age, hunger and cold use 'be': I'm hungry, I'm cold.",
    },
  },

  // ── u06 ───────────────────────────────────────────────────
  {
    id: "en-g-there-is",
    lang: "en",
    cefr: "A1.1",
    title: { es: "«Hay»: there is / there are", en: "there is / there are" },
    short: {
      es: "there is + singular · there are + plural · «Is there…?» / «Are there any…?» · there isn't / there aren't.",
      en: "there is + singular · there are + plural · Is there…? / Are there any…? · there isn't / there aren't.",
    },
    rule: {
      es: "El «hay» español tiene dos formas en inglés: «there is» («there's») con un sustantivo singular o incontable, y «there are» con plural. En preguntas, el verbo va primero: «Is there…?». Nunca se usa «have» para decir «hay».",
      en: "Use there is (there's) with a singular or uncountable noun and there are with a plural. Questions put the verb first (Is there…?).",
    },
    steps: [
      { es: "Mira el sustantivo que sigue: ¿uno o varios?", en: "Look at the noun that follows: one or several?" },
      { es: "Uno / incontable → there is; varios → there are.", en: "One / uncountable → there is; several → there are." },
      { es: "Pregunta: Is there / Are there; negativo: isn't / aren't.", en: "Question: Is there / Are there; negative: isn't / aren't." },
    ],
    table: { head: ["", "singular", "plural"], rows: [["+", "There's a bank.", "There are two banks."], ["−", "There isn't a bank.", "There aren't any banks."], ["?", "Is there a bank?", "Are there any banks?"]] },
    examples: [
      { target: "There's a good restaurant near my house.", gloss: { es: "Hay un buen restaurante cerca de mi casa.", en: "There's a good restaurant near my house." } },
      { target: "Are there any good schools here?", gloss: { es: "¿Hay buenas escuelas aquí?", en: "Are there any good schools here?" } },
    ],
    pitfalls: {
      es: "«Have a park near here» o «There have a park» son calcos frecuentes: «hay» = there is / there are. Tampoco confundas «there» (allí) con «their» (su).",
      en: "'Have a park near here' or 'There have a park' are common errors: use there is / there are.",
    },
  },
  {
    id: "en-g-prep-place",
    lang: "en",
    cefr: "A1.1",
    title: { es: "Preposiciones de lugar: in, on, at", en: "Prepositions of place: in, on, at" },
    short: {
      es: "in = dentro (in the box, in Lima) · on = sobre (on the table) · at = en un punto (at home, at work).",
      en: "in = inside (in the box, in Lima) · on = on a surface (on the table) · at = at a point (at home, at work).",
    },
    rule: {
      es: "Donde el español dice «en», el inglés elige entre tres: «in» para el interior de un espacio o una ciudad, «on» para superficies y calles, «at» para puntos concretos y lugares de actividad (at home, at work, at school, at the station).",
      en: "'in' is for inside a space or a city, 'on' for surfaces and streets, 'at' for specific points and places of activity (at home, at work, at school, at the station).",
    },
    steps: [
      { es: "¿Está dentro de algo o de una ciudad o país? → in.", en: "Inside something, or in a city or country? → in." },
      { es: "¿Encima de una superficie, o en una calle? → on.", en: "On a surface, or on a street? → on." },
      { es: "¿Es un punto o un lugar donde haces algo? → at.", en: "A point, or a place where you do something? → at." },
    ],
    table: { head: ["in", "on", "at"], rows: [["in the kitchen", "on the table", "at home"], ["in Chicago", "on Main Street", "at work"], ["in the car", "on the bus", "at the bus stop"]] },
    examples: [
      { target: "My parents live in Monterrey.", gloss: { es: "Mis padres viven en Monterrey.", en: "My parents live in Monterrey." } },
      { target: "I'm at the airport.", gloss: { es: "Estoy en el aeropuerto.", en: "I'm at the airport." } },
    ],
    pitfalls: {
      es: "«in home» y «in work» son errores muy típicos: se dice at home, at work. Y «on the bus» pero «in the car».",
      en: "'in home' and 'in work' are typical errors: it's at home, at work. Also 'on the bus' but 'in the car'.",
    },
  },

  // ── u07 ───────────────────────────────────────────────────
  {
    id: "en-g-present-simple",
    lang: "en",
    cefr: "A1.2",
    title: { es: "Presente simple: la -s de he, she, it", en: "Present simple: the -s with he, she, it" },
    short: {
      es: "I work · she works. Tras -ch, -sh, -o, -x: -es (watches, goes). Consonante + y: -ies (studies).",
      en: "I work · she works. After -ch, -sh, -o, -x: -es (watches, goes). Consonant + y: -ies (studies).",
    },
    rule: {
      es: "El presente simple expresa rutinas, hábitos y hechos. Es casi igual para todas las personas: solo he, she e it añaden -s. Como el verbo apenas cambia, el sujeto es obligatorio.",
      en: "The present simple is for routines, habits and facts. It's the same for every person except he, she and it, which add -s. Because the verb barely changes, the subject is required.",
    },
    steps: [
      { es: "¿El sujeto es he, she, it o un nombre singular (my sister)? Si no, usa la forma base.", en: "Is the subject he, she, it or a singular noun (my sister)? If not, use the base form." },
      { es: "Si lo es: añade -s (works).", en: "If so: add -s (works)." },
      { es: "Tras -ch, -sh, -s, -x, -o: -es (watches, goes); consonante + y: -ies (studies).", en: "After -ch, -sh, -s, -x, -o: -es (watches, goes); consonant + y: -ies (studies)." },
      { es: "Irregulares: have → has, be → is.", en: "Irregular: have → has, be → is." },
    ],
    table: { head: ["base", "he / she / it"], rows: [["work", "works"], ["watch", "watches"], ["go", "goes"], ["study", "studies"], ["play", "plays"], ["have", "has"]] },
    examples: [
      { target: "My dad gets up at six every day.", gloss: { es: "Mi papá se levanta a las seis todos los días.", en: "My dad gets up at six every day." } },
      { target: "They live near the beach.", gloss: { es: "Viven cerca de la playa.", en: "They live near the beach." } },
    ],
    pitfalls: {
      es: "Olvidar la -s con he / she es el error más común incluso en niveles altos: «She work» → She works.",
      en: "Forgetting the -s with he / she is the most common error, even at higher levels: 'She work' → She works.",
    },
  },
  {
    id: "en-g-do-questions",
    lang: "en",
    cefr: "A1.2",
    title: { es: "Preguntas y negaciones con do / does", en: "Questions and negatives with do / does" },
    short: {
      es: "Do you work? · Does she work? · I don't work · She doesn't work (sin -s en el verbo).",
      en: "Do you work? · Does she work? · I don't work · She doesn't work (no -s on the verb).",
    },
    rule: {
      es: "En español basta con la entonación o con poner «no»; en inglés el presente simple necesita el auxiliar do / does para preguntar y negar. Con he / she / it se usa «does» y el verbo pierde la -s.",
      en: "Present simple questions and negatives need the auxiliary do / does. With he / she / it it's 'does', and the main verb loses its -s.",
    },
    steps: [
      { es: "Pregunta: (palabra interrogativa) + do / does + sujeto + verbo base: Where do you live?", en: "Question: (question word) + do / does + subject + base verb: Where do you live?" },
      { es: "Negación: sujeto + don't / doesn't + verbo base: He doesn't drink.", en: "Negative: subject + don't / doesn't + base verb: He doesn't drink." },
      { es: "Respuesta corta: Yes, I do. / No, she doesn't.", en: "Short answer: Yes, I do. / No, she doesn't." },
    ],
    table: { head: ["", "?", "−"], rows: [["I / you / we / they", "Do they work?", "They don't work."], ["he / she / it", "Does he work?", "He doesn't work."]] },
    examples: [
      { target: "What do you do on weekends?", gloss: { es: "¿Qué haces los fines de semana?", en: "What do you do on weekends?" } },
      { target: "My son doesn't eat vegetables.", gloss: { es: "Mi hijo no come verduras.", en: "My son doesn't eat vegetables." } },
    ],
    pitfalls: {
      es: "«I no like», «You like coffee?» y «Does she works?» son los tres calcos clásicos; lo correcto es «I don't like», «Do you like coffee?» y «Does she work?».",
      en: "'I no like', 'You like coffee?' and 'Does she works?' are the classic errors: I don't like · Do you like coffee? · Does she work?",
    },
  },
  {
    id: "en-g-prep-time",
    lang: "en",
    cefr: "A1.2",
    title: { es: "Preposiciones de tiempo: at, on, in", en: "Prepositions of time: at, on, in" },
    short: {
      es: "at + hora (at seven) · on + día / fecha (on Monday) · in + mes / año / parte del día (in July, in the morning).",
      en: "at + time (at seven) · on + day / date (on Monday) · in + month / year / part of day (in July, in the morning).",
    },
    rule: {
      es: "Van de lo más preciso a lo más amplio: at para la hora exacta, on para días y fechas, in para períodos más largos. Excepciones útiles: at night, at noon, on the weekend (Estados Unidos).",
      en: "From the most precise to the widest: at for clock times, on for days and dates, in for longer periods. Useful exceptions: at night, at noon, on the weekend (US).",
    },
    steps: [
      { es: "¿Hora del reloj? → at.", en: "Clock time? → at." },
      { es: "¿Día de la semana o fecha? → on.", en: "Day of the week or date? → on." },
      { es: "¿Mes, año, estación o parte del día? → in.", en: "Month, year, season or part of the day? → in." },
      { es: "Con this, next, last, every no va preposición: next Monday.", en: "No preposition with this, next, last, every: next Monday." },
    ],
    table: { head: ["at", "on", "in"], rows: [["at 7:30", "on Friday", "in May"], ["at noon", "on July 4th", "in 2026"], ["at night", "on the weekend", "in the evening"]] },
    examples: [
      { target: "The meeting is on Tuesday at ten.", gloss: { es: "La reunión es el martes a las diez.", en: "The meeting is on Tuesday at ten." } },
      { target: "We go to the beach in summer.", gloss: { es: "Vamos a la playa en verano.", en: "We go to the beach in summer." } },
    ],
    pitfalls: {
      es: "El español no usa preposición con los días («el lunes»), así que se olvida «on»: «I work Monday» → I work on Monday (en Estados Unidos a veces se omite, pero «on» siempre está bien).",
      en: "Spanish needs no preposition with days, so learners drop 'on': 'on Monday' is always correct.",
    },
  },

  // ── u08 ───────────────────────────────────────────────────
  {
    id: "en-g-like-ing",
    lang: "en",
    cefr: "A1.2",
    title: { es: "like, love, hate, enjoy + -ing", en: "like, love, hate, enjoy + -ing" },
    short: {
      es: "«Me gusta leer» = I like reading. El que siente el gusto es el sujeto; la actividad va con -ing.",
      en: "I like reading. The person who likes is the subject; the activity takes -ing.",
    },
    rule: {
      es: "En español la cosa que gusta es el sujeto (me gustan los perros); en inglés el sujeto es la persona: I like dogs. Después de like, love, hate y enjoy la actividad va con -ing; con like, love y hate también vale «to» + verbo, pero con enjoy no.",
      en: "In English the person is the subject: I like dogs. After like, love, hate and enjoy, the activity takes -ing; like, love and hate also allow 'to' + verb, but enjoy doesn't.",
    },
    steps: [
      { es: "Sujeto = la persona: I, my sister, they.", en: "Subject = the person: I, my sister, they." },
      { es: "Verbo: like / love / hate / enjoy (con -s si es he / she).", en: "Verb: like / love / hate / enjoy (with -s for he / she)." },
      { es: "Actividad con -ing: cooking, running, reading.", en: "Activity with -ing: cooking, running, reading." },
    ],
    table: { head: ["español", "inglés"], rows: [["Me gusta cocinar.", "I like cooking."], ["Le encanta bailar.", "She loves dancing."], ["Odian esperar.", "They hate waiting."], ["Disfruto leer.", "I enjoy reading."]] },
    examples: [
      { target: "Do you enjoy working from home?", gloss: { es: "¿Te gusta trabajar desde casa?", en: "Do you enjoy working from home?" } },
      { target: "My kids love swimming.", gloss: { es: "A mis hijos les encanta nadar.", en: "My kids love swimming." } },
    ],
    pitfalls: {
      es: "«To me like» o «Me gusta» traducido literal no existe en inglés. Tampoco «I enjoy to read»: con enjoy siempre -ing.",
      en: "'To me like' doesn't exist. And not 'I enjoy to read': enjoy always takes -ing.",
    },
  },
  {
    id: "en-g-frequency",
    lang: "en",
    cefr: "A1.2",
    title: { es: "Adverbios de frecuencia: always, usually, often, sometimes, never", en: "Adverbs of frequency" },
    short: {
      es: "Antes del verbo principal (I often cook) pero después de «be» (She's never late).",
      en: "Before the main verb (I often cook) but after 'be' (She's never late).",
    },
    rule: {
      es: "Los adverbios de frecuencia tienen una posición fija: antes del verbo principal y después de «be» o de un auxiliar. «sometimes» también puede ir al principio de la frase. «never» ya es negativo, así que no lleva «don't».",
      en: "Frequency adverbs go before the main verb and after 'be' or an auxiliary. 'sometimes' can also start the sentence. 'never' is already negative, so no 'don't'.",
    },
    steps: [
      { es: "¿Hay «be» (am, is, are)? → adverbio después: I'm always tired.", en: "Is there 'be'? → adverb after it: I'm always tired." },
      { es: "¿Hay otro verbo? → adverbio antes: I always walk.", en: "Another verb? → adverb before it: I always walk." },
      { es: "Para preguntar: How often do you…?", en: "To ask: How often do you…?" },
    ],
    table: { head: ["%", "adverbio"], rows: [["100 %", "always"], ["≈ 80 %", "usually"], ["≈ 60 %", "often"], ["≈ 40 %", "sometimes"], ["≈ 10 %", "rarely"], ["0 %", "never"]] },
    examples: [
      { target: "I usually take the bus to work.", gloss: { es: "Normalmente voy al trabajo en autobús.", en: "I usually take the bus to work." } },
      { target: "He's never at home on Saturdays.", gloss: { es: "Nunca está en casa los sábados.", en: "He's never at home on Saturdays." } },
    ],
    pitfalls: {
      es: "El español es más libre con el orden, por eso salen frases como «I go always» o «I don't never»: I always go · I never go.",
      en: "Word order mistakes like 'I go always' or double negatives like 'I don't never': I always go · I never go.",
    },
  },
  {
    id: "en-g-present-continuous",
    lang: "en",
    cefr: "A1.2",
    title: { es: "Presente continuo: am / is / are + -ing", en: "Present continuous: am / is / are + -ing" },
    short: {
      es: "I'm working (ahora) vs. I work (siempre). También para planes cercanos: I'm flying tomorrow.",
      en: "I'm working (now) vs. I work (usually). Also for fixed near plans: I'm flying tomorrow.",
    },
    rule: {
      es: "Se forma con am / is / are + verbo-ing y se usa para lo que pasa en este momento o en esta temporada, y para planes ya organizados. Para hábitos se usa el presente simple. Verbos de estado como know, like, want casi nunca van en -ing.",
      en: "Formed with am / is / are + verb-ing, it's for things happening now or around now, and for arranged plans. Habits use the present simple. State verbs like know, like, want rarely take -ing.",
    },
    steps: [
      { es: "¿Pasa ahora o es un plan decidido? → continuo; ¿es un hábito? → presente simple.", en: "Happening now or an arranged plan? → continuous; a habit? → present simple." },
      { es: "Pon be: I'm, she's, they're.", en: "Add be: I'm, she's, they're." },
      { es: "Verbo + -ing (make → making, run → running, sit → sitting).", en: "Verb + -ing (make → making, run → running, sit → sitting)." },
    ],
    table: { head: ["", "+", "−", "?"], rows: [["I", "I'm eating", "I'm not eating", "Am I eating?"], ["you / we / they", "they're eating", "they aren't eating", "Are they eating?"], ["he / she / it", "she's eating", "she isn't eating", "Is she eating?"]] },
    examples: [
      { target: "Be quiet, the baby is sleeping.", gloss: { es: "Silencio, el bebé está durmiendo.", en: "Be quiet, the baby is sleeping." } },
      { target: "We're having dinner with my parents on Sunday.", gloss: { es: "El domingo cenamos con mis padres.", en: "We're having dinner with my parents on Sunday." } },
    ],
    pitfalls: {
      es: "En español se dice «trabajo en un banco» para algo permanente y también para ahora; en inglés hay que elegir: I work in a bank (es mi empleo) / I'm working now. Y «I'm knowing» no existe: I know.",
      en: "Choose: I work in a bank (my job) / I'm working now (this moment). And 'I'm knowing' doesn't exist: I know.",
    },
  },
];
