import type { GrammarPoint } from "../schema";

// Grammar points for Portuguese units u01–u08 (content v2.1). Same shape as fr/grammar1.ts.
export const grammar1: GrammarPoint[] = [
  // ── u01 ───────────────────────────────────────────────────
  {
    id: "pt-g-voce-senhor", lang: "pt", cefr: "A0",
    title: { es: "Tú y usted: você y o senhor / a senhora", en: "Informal and formal 'you': você and o senhor / a senhora" },
    short: {
      es: "você = tú (lo normal en Brasil). o senhor / a senhora = usted. Los dos van con el verbo de 3.ª persona.",
      en: "você = everyday 'you' in Brazil. o senhor / a senhora = formal 'you'. Both take the he/she verb form.",
    },
    rule: {
      es: "En Brasil «você» es el trato de todos los días, incluso con desconocidos de tu edad. Para mostrar respeto (personas mayores, clientes, autoridades) se usa «o senhor / a senhora». Los dos se conjugan como «él / ella»: você fala, o senhor fala.",
      en: "In Brazil 'você' is the everyday 'you', even with strangers your age. To show respect (older people, customers, officials) use 'o senhor / a senhora'. Both take the he/she verb form: você fala, o senhor fala.",
    },
    steps: [
      { es: "¿Amigo, colega, alguien de tu edad? → você.", en: "Friend, colleague, someone your age? → você." },
      { es: "¿Persona mayor, cliente, alguien a quien respetas? → o senhor / a senhora.", en: "Older person, customer, someone you defer to? → o senhor / a senhora." },
      { es: "Conjuga en 3.ª persona: você é, a senhora é.", en: "Use the he/she form: você é, a senhora é." },
    ],
    table: {
      head: ["", "você", "o senhor / a senhora"],
      rows: [
        ["chamar-se", "Como você se chama?", "Como o senhor se chama?"],
        ["estar", "Tudo bem?", "Como vai a senhora?"],
        ["desculpar", "Desculpa!", "Desculpe!"],
      ],
    },
    examples: [
      { target: "Oi, Lucas! Tudo bem com você?", gloss: { es: "¡Hola, Lucas! ¿Todo bien?", en: "Hi, Lucas! How are you doing?" } },
      { target: "Bom dia, dona Marta. A senhora precisa de ajuda?", gloss: { es: "Buenos días, doña Marta. ¿Necesita ayuda?", en: "Good morning, Mrs Marta. Do you need any help?" } },
    ],
    pitfalls: {
      es: "En Portugal se usa mucho «tu» (tu falas) entre amigos, y «você» puede sonar distante. En Brasil, «tu» solo en algunas regiones (y a menudo con el verbo de você: tu fala).",
      en: "In Portugal friends use 'tu' (tu falas) and 'você' can sound distant. In Brazil 'tu' is regional only (often with the você verb form: tu fala).",
    },
  },
  // ── u02 ───────────────────────────────────────────────────
  {
    id: "pt-g-ser", lang: "pt", cefr: "A1.1",
    title: { es: "«ser» en presente", en: "ser: present tense" },
    short: {
      es: "eu sou, você/ele/ela é, nós somos, vocês/eles/elas são. Para identidad, origen y profesión.",
      en: "eu sou, você/ele/ela é, nós somos, vocês/eles/elas são. For identity, origin and job.",
    },
    rule: {
      es: "«ser» es irregular. Se usa como en español para identidad, nacionalidad, origen y profesión. En Brasil casi no se usa la forma de «tu» (és) ni la de «vós» (sois).",
      en: "ser (to be) is irregular. It's used for identity, nationality, origin and jobs. Brazilians hardly use the tu form (és) at all.",
    },
    table: {
      head: ["", "ser"],
      rows: [["eu", "sou"], ["você / ele / ela", "é"], ["a gente", "é"], ["nós", "somos"], ["vocês / eles / elas", "são"]],
    },
    examples: [
      { target: "Eu sou colombiana.", gloss: { es: "Soy colombiana.", en: "I'm Colombian." } },
      { target: "Vocês são do Peru?", gloss: { es: "¿Ustedes son del Perú?", en: "Are you (all) from Peru?" } },
    ],
    pitfalls: {
      es: "«é» (es) lleva tilde; sin ella, «e» significa «y». Y «são» (son) también es «santo»: São Paulo.",
      en: "'é' (is) needs its accent; without it, 'e' means 'and'.",
    },
  },
  {
    id: "pt-g-ar", lang: "pt", cefr: "A1.1",
    title: { es: "Presente: verbos en -ar", en: "Present tense: -ar verbs" },
    short: {
      es: "Raíz + -o, -a, -amos, -am: falo, fala, falamos, falam. Você usa la misma forma que ele/ela.",
      en: "Stem + -o, -a, -amos, -am: falo, fala, falamos, falam. você shares the ele/ela form.",
    },
    rule: {
      es: "Quita -ar y añade la terminación. Como você y vocês van con la 3.ª persona, en Brasil bastan cuatro formas. El pronombre se puede omitir, pero en Brasil se dice mucho: eu falo, você fala.",
      en: "Drop -ar and add the ending. Since você and vocês take the 3rd-person forms, Brazilian Portuguese needs only four forms. Pronouns can be dropped, but Brazilians usually say them.",
    },
    steps: [
      { es: "Busca la raíz: morar → mor-.", en: "Find the stem: morar → mor-." },
      { es: "Añade la terminación: eu moro, você mora, nós moramos, eles moram.", en: "Add the ending: eu moro, você mora, nós moramos, eles moram." },
    ],
    table: {
      head: ["", "falar", "morar"],
      rows: [["eu", "falo", "moro"], ["você / ele / ela", "fala", "mora"], ["nós", "falamos", "moramos"], ["vocês / eles / elas", "falam", "moram"]],
    },
    examples: [
      { target: "Eu trabalho em Recife.", gloss: { es: "Trabajo en Recife.", en: "I work in Recife." } },
      { target: "Eles estudam inglês à noite.", gloss: { es: "Ellos estudian inglés de noche.", en: "They study English in the evening." } },
    ],
    pitfalls: {
      es: "No uses la terminación española de «tú» (-as) con você: «você falas» es incorrecto; es «você fala».",
      en: "Don't add -s for 'you': 'você falas' is wrong; it's 'você fala'.",
    },
  },
  {
    id: "pt-g-de-contracoes", lang: "pt", cefr: "A1.1",
    title: { es: "de + artículo: do, da, dos, das", en: "de + article: do, da, dos, das" },
    short: {
      es: "de + o = do, de + a = da, de + os = dos, de + as = das. Siempre se unen.",
      en: "de + o = do, de + a = da, de + os = dos, de + as = das. They always merge.",
    },
    rule: {
      es: "La preposición «de» se une obligatoriamente con el artículo definido, también con «a» y en plural. Lo mismo pasa con los pronombres: de + ele = dele (de él).",
      en: "The preposition de (of, from) always merges with the definite article, in the singular and plural. It also merges with pronouns: de + ele = dele (his).",
    },
    table: {
      head: ["", "de +"],
      rows: [["o", "do"], ["a", "da"], ["os", "dos"], ["as", "das"], ["ele / ela", "dele / dela"]],
    },
    examples: [
      { target: "Sou do Uruguai.", gloss: { es: "Soy del Uruguay.", en: "I'm from Uruguay." } },
      { target: "É o carro da minha irmã.", gloss: { es: "Es el auto de mi hermana.", en: "It's my sister's car." } },
    ],
    pitfalls: {
      es: "«de a» y «de o» nunca se escriben separados delante de un sustantivo: da Colômbia, no «de a Colômbia».",
      en: "Never write 'de o' or 'de a' before a noun: da Colômbia, not 'de a Colômbia'.",
    },
  },
  {
    id: "pt-g-adj-genero", lang: "pt", cefr: "A1.1",
    title: { es: "Adjetivos: masculino y femenino", en: "Adjectives: masculine and feminine" },
    short: {
      es: "-o → -a (brasileiro/brasileira); -ês, -ol, -or añaden -a (inglesa, espanhola); -e no cambia.",
      en: "-o → -a (brasileiro/brasileira); -ês, -ol, -or add -a (inglesa, espanhola); -e stays the same.",
    },
    rule: {
      es: "Los adjetivos concuerdan con el sustantivo. Los de nacionalidad en -ês pierden el circunflejo al añadir -a: português → portuguesa.",
      en: "Adjectives agree with the noun. Nationalities in -ês lose the circumflex when they add -a: português → portuguesa.",
    },
    table: {
      head: ["m", "f"],
      rows: [["brasileiro", "brasileira"], ["português", "portuguesa"], ["espanhol", "espanhola"], ["trabalhador", "trabalhadora"], ["canadense", "canadense"]],
    },
    examples: [
      { target: "O João é português e a Rita é portuguesa.", gloss: { es: "João es portugués y Rita es portuguesa.", en: "João is Portuguese and Rita is Portuguese too." } },
      { target: "Minha amiga é canadense.", gloss: { es: "Mi amiga es canadiense.", en: "My friend is Canadian." } },
    ],
    pitfalls: {
      es: "No escribas «portuguêsa»: el circunflejo desaparece en el femenino y en el plural (portugueses).",
      en: "Don't write 'portuguêsa': the circumflex goes in the feminine and the plural (portugueses).",
    },
  },
  // ── u03 ───────────────────────────────────────────────────
  {
    id: "pt-g-ter", lang: "pt", cefr: "A1.1",
    title: { es: "«ter» en presente: tener, la edad y «hay»", en: "ter: have, age and 'there is'" },
    short: {
      es: "tenho, tem, temos, têm. La edad va con ter (tenho vinte anos) y en Brasil «tem» = hay.",
      en: "tenho, tem, temos, têm. Age uses ter (tenho vinte anos) and in Brazil 'tem' = there is.",
    },
    rule: {
      es: "«ter» es irregular. Además de «tener», en el Brasil coloquial reemplaza a «haver»: tem um problema = hay un problema. La forma de «eles» lleva circunflejo: eles têm.",
      en: "ter (to have) is irregular. It gives your age, and in everyday Brazilian Portuguese it also replaces haver for 'there is/are': tem um problema. The plural has a circumflex: eles têm.",
    },
    table: { head: ["", "ter"], rows: [["eu", "tenho"], ["você / ele / ela", "tem"], ["nós", "temos"], ["vocês / eles / elas", "têm"]] },
    examples: [
      { target: "A minha filha tem doze anos.", gloss: { es: "Mi hija tiene doce años.", en: "My daughter is twelve." } },
      { target: "Tem farmácia aqui perto?", gloss: { es: "¿Hay alguna farmacia por aquí?", en: "Is there a pharmacy near here?" } },
    ],
    pitfalls: {
      es: "«tem» (él tiene) y «têm» (ellos tienen) suenan igual, pero se escriben distinto.",
      en: "Age is never 'ser': not 'sou trinta', but 'tenho trinta anos'. And tem (he has) / têm (they have) sound the same.",
    },
  },
  {
    id: "pt-g-dias-semana", lang: "pt", cefr: "A1.1",
    title: { es: "Los días de la semana", en: "Days of the week" },
    short: {
      es: "segunda, terça, quarta, quinta, sexta (-feira), sábado, domingo. «no sábado» = el sábado.",
      en: "segunda, terça, quarta, quinta, sexta (-feira), sábado, domingo. 'no sábado' = on Saturday.",
    },
    rule: {
      es: "De lunes a viernes los días son ordinales femeninos + feira: segunda-feira es el lunes. En la conversación se omite «-feira». Para «el lunes» se usa em + artículo: na segunda, no sábado.",
      en: "Monday to Friday are feminine ordinals + feira: segunda-feira is Monday. In speech '-feira' is dropped. 'On Monday' is em + article: na segunda, no sábado.",
    },
    table: { head: ["", "dia"], rows: [["lunes / Mon", "segunda-feira"], ["martes / Tue", "terça-feira"], ["miércoles / Wed", "quarta-feira"], ["jueves / Thu", "quinta-feira"], ["viernes / Fri", "sexta-feira"], ["sáb. / dom.", "sábado, domingo"]] },
    examples: [
      { target: "Na terça eu tenho aula de inglês.", gloss: { es: "El martes tengo clase de inglés.", en: "On Tuesday I have an English class." } },
      { target: "Aos domingos a gente almoça com a família.", gloss: { es: "Los domingos almorzamos con la familia.", en: "On Sundays we have lunch with the family." } },
    ],
    pitfalls: {
      es: "«segunda» no es el segundo día de la semana para un hispanohablante: es el lunes (el domingo es el primero).",
      en: "Don't count from Monday: segunda (second) is Monday because the week starts on Sunday.",
    },
  },
  // ── u04 ───────────────────────────────────────────────────
  {
    id: "pt-g-artigos", lang: "pt", cefr: "A1.1",
    title: { es: "Artículos: o, a, os, as · um, uma, uns, umas", en: "Articles: o, a, os, as · um, uma, uns, umas" },
    short: {
      es: "o/a/os/as = el/la/los/las; um/uma/uns/umas = un/una/unos/unas. Ojo con los cambios de género.",
      en: "o/a/os/as = the; um/uma = a/an; uns/umas = some. Learn each noun with its article.",
    },
    rule: {
      es: "Los artículos funcionan casi como en español. Algunas palabras cambian de género: o leite, o sangue, o mel, a árvore, a ponte. Las terminadas en -agem son femeninas: a viagem, a garagem.",
      en: "Every noun is masculine or feminine and its article shows which. Most nouns in -o are masculine and in -a feminine; -agem nouns are feminine (a viagem).",
    },
    table: { head: ["", "m", "f"], rows: [["el / the", "o", "a"], ["los / the (pl.)", "os", "as"], ["un / a", "um", "uma"], ["unos / some", "uns", "umas"]] },
    examples: [
      { target: "Um suco de laranja e uma água, por favor.", gloss: { es: "Un jugo de naranja y un agua, por favor.", en: "An orange juice and a water, please." } },
      { target: "O leite está na geladeira.", gloss: { es: "La leche está en el refrigerador.", en: "The milk is in the fridge." } },
    ],
    pitfalls: {
      es: "«a água» es femenino con «a» (no «o água»), y «o leite» es masculino.",
      en: "Don't guess the gender from English: learn 'o leite', 'a viagem' with the article.",
    },
  },
  {
    id: "pt-g-queria", lang: "pt", cefr: "A1.1",
    title: { es: "Pedir con cortesía: queria, gostaria de, me vê", en: "Ordering politely: queria, gostaria de, me vê" },
    short: {
      es: "Para pedir: eu queria… / eu gostaria de… / me vê… «Eu quero» suena brusco.",
      en: "To order: eu queria… / eu gostaria de… / me vê… 'Eu quero' sounds blunt.",
    },
    rule: {
      es: "El imperfecto «queria» suaviza el pedido, como «quería» en español. «Gostaria de» es más formal. En un mostrador lo más natural es «me vê» o «me dá» + lo que quieres.",
      en: "The past form 'queria' softens a request, like English 'I'd like'. 'Gostaria de' is more formal. At a counter Brazilians say 'me vê' or 'me dá' + what they want.",
    },
    table: { head: ["", "pedido"], rows: [["neutro / neutral", "Eu queria um pão."], ["formal", "Eu gostaria de um pão."], ["balcão / counter", "Me vê um pão."], ["brusco / blunt", "Eu quero um pão."]] },
    examples: [
      { target: "Eu queria uma mesa para dois, por favor.", gloss: { es: "Quería una mesa para dos, por favor.", en: "I'd like a table for two, please." } },
      { target: "Me vê uma coxinha e um guaraná.", gloss: { es: "Deme una coxinha y un guaraná.", en: "A coxinha and a guaraná, please." } },
    ],
    pitfalls: {
      es: "«gostaria» va con «de» delante de un sustantivo: gostaria de um café (no «gostaria um café»).",
      en: "'gostaria' needs 'de' before a noun: gostaria de um café.",
    },
  },
  // ── u05 ───────────────────────────────────────────────────
  {
    id: "pt-g-possessivos", lang: "pt", cefr: "A1.1",
    title: { es: "Posesivos: meu, minha, seu, sua, nosso…", en: "Possessives: meu, minha, seu, sua, nosso…" },
    short: {
      es: "Concuerdan con lo poseído: meu pai, minha mãe, meus filhos, minhas filhas. El artículo es opcional en Brasil.",
      en: "They agree with the thing owned: meu pai, minha mãe, meus filhos, minhas filhas.",
    },
    rule: {
      es: "El posesivo concuerda en género y número con el sustantivo, no con el poseedor. En Brasil se puede poner artículo o no (a minha casa / minha casa); en Portugal siempre se pone.",
      en: "The possessive agrees in gender and number with the noun, not with the owner. In Brazil the article is optional (a minha casa / minha casa); in Portugal it's always used.",
    },
    table: { head: ["", "m", "f", "pl."], rows: [["mi / my", "meu", "minha", "meus / minhas"], ["tu / your", "seu", "sua", "seus / suas"], ["nuestro / our", "nosso", "nossa", "nossos / nossas"]] },
    examples: [
      { target: "Minha irmã e meus primos moram em Belo Horizonte.", gloss: { es: "Mi hermana y mis primos viven en Belo Horizonte.", en: "My sister and my cousins live in Belo Horizonte." } },
      { target: "Qual é o seu nome?", gloss: { es: "¿Cuál es tu nombre?", en: "What's your name?" } },
    ],
    pitfalls: {
      es: "Un hombre dice «minha mãe», no «meu mãe»: manda el sustantivo.",
      en: "It's about the noun, not the owner: a man says 'minha mãe' (my mother).",
    },
  },
  {
    id: "pt-g-dele-dela", lang: "pt", cefr: "A1.1",
    title: { es: "dele, dela: «de él», «de ella»", en: "dele, dela: his, her" },
    short: {
      es: "En Brasil «seu» = tu. Para «su» de él/ella: sustantivo + dele / dela (a casa dele).",
      en: "In Brazil 'seu' = your. For his / her: noun + dele / dela (a casa dele = his house).",
    },
    rule: {
      es: "Como «você» usa los posesivos de 3.ª persona, «seu» se entiende como «tu». Para hablar de un tercero se usa de + pronombre, detrás del sustantivo: o carro dele, a mãe dela, os filhos deles.",
      en: "Because você uses 3rd-person possessives, 'seu' is heard as 'your'. For someone else, use de + pronoun after the noun: o carro dele (his car), a mãe dela (her mother).",
    },
    table: { head: ["", "posesivo"], rows: [["você", "o seu livro"], ["ele", "o livro dele"], ["ela", "o livro dela"], ["eles / elas", "o livro deles / delas"]] },
    examples: [
      { target: "A Ana chegou, mas a mala dela ficou no aeroporto.", gloss: { es: "Ana llegó, pero su maleta se quedó en el aeropuerto.", en: "Ana arrived, but her suitcase stayed at the airport." } },
      { target: "Conheço o Pedro e a mulher dele.", gloss: { es: "Conozco a Pedro y a su mujer.", en: "I know Pedro and his wife." } },
    ],
    pitfalls: {
      es: "«O carro de ele» no existe: de + ele = dele, siempre junto.",
      en: "'dele' (his) and 'dela' (her) follow the owner's gender, not the noun's: a mãe dele = his mother.",
    },
  },
  // ── u06 ───────────────────────────────────────────────────
  {
    id: "pt-g-em-contracoes", lang: "pt", cefr: "A1.1",
    title: { es: "em y a + artículo: no, na, ao, à (la crase)", en: "em and a + article: no, na, ao, à (the crase)" },
    short: {
      es: "em + o = no, em + a = na; a + o = ao, a + a = à. La «à» con acento grave se llama crase.",
      en: "em + o = no, em + a = na; a + o = ao, a + a = à. The grave accent in à is called the crase.",
    },
    rule: {
      es: "«em» (en) y «a» (a) se unen con el artículo definido. Cuando «a» se junta con el artículo femenino «a», se escribe «à»: vou à praia. Delante de un nombre masculino nunca hay crase: vou ao mercado.",
      en: "em (in, on, at) and a (to) merge with the definite article. When the preposition a meets the feminine article a, write à: vou à praia. Never à before a masculine noun: vou ao mercado.",
    },
    steps: [
      { es: "Pon el artículo del sustantivo: o bairro, a rua.", en: "Put the noun's article: o bairro, a rua." },
      { es: "¿Va «em» delante? → no / na / nos / nas.", en: "Is em in front? → no / na / nos / nas." },
      { es: "¿Va «a» delante? → ao / aos / à / às.", en: "Is a in front? → ao / aos / à / às." },
    ],
    table: { head: ["", "em", "a"], rows: [["o", "no", "ao"], ["a", "na", "à"], ["os", "nos", "aos"], ["as", "nas", "às"]] },
    examples: [
      { target: "Ela trabalha no hospital e mora na Rua Bahia.", gloss: { es: "Ella trabaja en el hospital y vive en la calle Bahia.", en: "She works at the hospital and lives on Rua Bahia." } },
      { target: "Vou à farmácia e depois ao banco.", gloss: { es: "Voy a la farmacia y después al banco.", en: "I'm going to the pharmacy and then to the bank." } },
    ],
    pitfalls: {
      es: "«à» lleva acento grave (`), no agudo: «á» no existe como palabra. Y la hora también lleva crase: às três.",
      en: "à has a grave accent (`), never 'á'. Clock times take it too: às três (at three).",
    },
  },
  {
    id: "pt-g-estar-ficar", lang: "pt", cefr: "A1.1",
    title: { es: "estar y ficar para ubicar", en: "estar and ficar for location" },
    short: {
      es: "ficar = estar situado (lugares fijos): onde fica o hotel? estar = personas y cosas móviles.",
      en: "ficar = to be located (fixed places): onde fica o hotel? estar = people and movable things.",
    },
    rule: {
      es: "Para lugares que no se mueven, lo natural es «ficar»: a praia fica longe. Para personas y objetos, «estar»: estou em casa, a chave está aqui. «estar» se conjuga estou, está, estamos, estão.",
      en: "For places that don't move, Portuguese uses ficar: a praia fica longe (the beach is far). For people and objects, estar: estou em casa. estar goes estou, está, estamos, estão.",
    },
    table: { head: ["", "estar", "ficar"], rows: [["eu", "estou", "fico"], ["você / ele / ela", "está", "fica"], ["nós", "estamos", "ficamos"], ["vocês / eles / elas", "estão", "ficam"]] },
    examples: [
      { target: "Onde fica o Museu do Ipiranga?", gloss: { es: "¿Dónde queda el Museo de Ipiranga?", en: "Where's the Ipiranga Museum?" } },
      { target: "A Júlia está na escola.", gloss: { es: "Júlia está en la escuela.", en: "Júlia is at school." } },
    ],
    pitfalls: {
      es: "«ficar» también significa «quedarse» (fico em casa) y «ponerse» (ficar feliz): mira el contexto.",
      en: "ficar also means 'to stay' (fico em casa) and 'to become' (ficar feliz): check the context.",
    },
  },
  // ── u07 ───────────────────────────────────────────────────
  {
    id: "pt-g-horas", lang: "pt", cefr: "A1.2",
    title: { es: "La hora", en: "Telling the time" },
    short: {
      es: "Que horas são? — É uma hora. / São duas e meia. A qué hora: à uma, às três.",
      en: "Que horas são? — É uma hora. / São duas e meia. At what time: à uma, às três.",
    },
    rule: {
      es: "Se usa «é» solo con uma hora, meio-dia y meia-noite; con las demás, «são». Para decir la hora no se pone artículo (são três), pero para «a las…» sí: às três (a + as).",
      en: "Use 'é' with uma hora, meio-dia and meia-noite; 'são' with the rest. No article when telling the time (são três), but 'at' is às (a + as): às três.",
    },
    table: { head: ["", "hora"], rows: [["1:00", "É uma hora."], ["3:00", "São três horas."], ["3:15", "São três e quinze."], ["3:30", "São três e meia."], ["2:45", "São quinze para as três."], ["12:00", "É meio-dia."]] },
    examples: [
      { target: "A aula começa às nove e meia.", gloss: { es: "La clase empieza a las nueve y media.", en: "The class starts at half past nine." } },
      { target: "São vinte para as oito.", gloss: { es: "Son veinte para las ocho.", en: "It's twenty to eight." } },
    ],
    pitfalls: {
      es: "No digas «são as três» al dar la hora: en portugués es «são três».",
      en: "Half past is 'e meia' (três e meia), and 'meio-dia' is noon.",
    },
  },
  {
    id: "pt-g-er-ir", lang: "pt", cefr: "A1.2",
    title: { es: "Presente: verbos en -er e -ir", en: "Present tense: -er and -ir verbs" },
    short: {
      es: "-er: como, come, comemos, comem. -ir: abro, abre, abrimos, abrem.",
      en: "-er: como, come, comemos, comem. -ir: abro, abre, abrimos, abrem.",
    },
    rule: {
      es: "Se quita -er / -ir y se añade -o, -e, -emos/-imos, -em. Algunos cambian la vocal de la raíz en «eu»: dormir → durmo, sentir → sinto, preferir → prefiro.",
      en: "Drop -er / -ir and add -o, -e, -emos/-imos, -em. Some change the stem vowel for eu: dormir → durmo, sentir → sinto, preferir → prefiro.",
    },
    table: { head: ["", "comer", "abrir", "dormir"], rows: [["eu", "como", "abro", "durmo"], ["você / ele", "come", "abre", "dorme"], ["nós", "comemos", "abrimos", "dormimos"], ["vocês / eles", "comem", "abrem", "dormem"]] },
    examples: [
      { target: "A gente come muito arroz e feijão.", gloss: { es: "Comemos mucho arroz con frijoles.", en: "We eat a lot of rice and beans." } },
      { target: "O banco abre às dez.", gloss: { es: "El banco abre a las diez.", en: "The bank opens at ten." } },
    ],
    pitfalls: {
      es: "La 3.ª persona plural termina en -em, no en -en: eles comem.",
      en: "The they-form ends in -em, nasal: eles comem ≈ 'KOH-mayn'.",
    },
  },
  {
    id: "pt-g-reflexivos", lang: "pt", cefr: "A1.2",
    title: { es: "Verbos reflexivos y dónde va el pronombre", en: "Reflexive verbs and where the pronoun goes" },
    short: {
      es: "Brasil: eu me levanto (pronombre delante). Portugal: levanto-me (detrás, con guion).",
      en: "Brazil: eu me levanto (pronoun first). Portugal: levanto-me (after, with a hyphen).",
    },
    rule: {
      es: "Los pronombres reflexivos son me, se, nos, se (você y vocês usan «se»). En el habla brasileña van casi siempre delante del verbo; en Portugal y en la escritura formal, detrás del verbo en frases afirmativas.",
      en: "The reflexive pronouns are me, se, nos, se (você and vocês take 'se'). In Brazilian speech they almost always go before the verb; in Portugal and formal writing, after it in affirmative sentences.",
    },
    table: { head: ["", "Brasil", "Portugal"], rows: [["eu", "me levanto", "levanto-me"], ["você / ele", "se levanta", "levanta-se"], ["nós", "nos levantamos", "levantamo-nos"], ["vocês / eles", "se levantam", "levantam-se"]] },
    examples: [
      { target: "Eu me chamo Rita e me levanto cedo.", gloss: { es: "Me llamo Rita y me levanto temprano.", en: "My name's Rita and I get up early." } },
      { target: "Vocês se divertem na praia?", gloss: { es: "¿Ustedes se divierten en la playa?", en: "Do you (all) have fun at the beach?" } },
    ],
    pitfalls: {
      es: "Con «nós» + pronombre detrás se pierde la -s: levantamo-nos (no «levantamos-nos»).",
      en: "Don't use 'te' with você: it's 'você se levanta', not 'você te levanta'.",
    },
  },
  // ── u08 ───────────────────────────────────────────────────
  {
    id: "pt-g-gostar-de", lang: "pt", cefr: "A1.2",
    title: { es: "gostar de", en: "gostar de (to like)" },
    short: {
      es: "Eu gosto de… (no «me gusta»): la persona es el sujeto y lo que gusta va con de.",
      en: "Eu gosto de…: the person is the subject and the thing liked takes 'de'.",
    },
    rule: {
      es: "«gostar» funciona como «to like» en inglés, no como «gustar»: el sujeto es quien siente el gusto. Siempre lleva «de», que se contrae con el artículo: gosto do Brasil, gosto da praia.",
      en: "gostar works like English 'like': the subject is the person. It always takes 'de', which merges with the article: gosto do Brasil, gosto da praia.",
    },
    table: { head: ["", "gostar de"], rows: [["eu", "gosto de café"], ["você / ele / ela", "gosta do mar"], ["nós / a gente", "gostamos / gosta da praia"], ["vocês / eles / elas", "gostam de ler"]] },
    examples: [
      { target: "Eu gosto muito de dançar forró.", gloss: { es: "Me gusta mucho bailar forró.", en: "I really like dancing forró." } },
      { target: "Elas não gostam do frio.", gloss: { es: "A ellas no les gusta el frío.", en: "They don't like the cold." } },
    ],
    pitfalls: {
      es: "«Me gusta el mar» no es «me gosta o mar», sino «eu gosto do mar».",
      en: "Don't drop the 'de': 'Eu gosto música' is wrong; it's 'eu gosto de música'.",
    },
  },
  {
    id: "pt-g-ir-infinitivo", lang: "pt", cefr: "A1.2",
    title: { es: "Futuro próximo: ir + infinitivo", en: "Near future: ir + infinitive" },
    short: {
      es: "vou, vai, vamos, vão + infinitivo, sin «a»: vou viajar = voy a viajar.",
      en: "vou, vai, vamos, vão + infinitive: vou viajar = I'm going to travel.",
    },
    rule: {
      es: "Es la forma normal de hablar del futuro en Brasil. A diferencia del español, no lleva «a» entre ir y el infinitivo: vamos comer, no «vamos a comer».",
      en: "This is the normal way to talk about the future in Brazil. ir is irregular: vou, vai, vamos, vão.",
    },
    table: { head: ["", "ir", "+ infinitivo"], rows: [["eu", "vou", "viajar"], ["você / ele / ela", "vai", "trabalhar"], ["nós", "vamos", "sair"], ["vocês / eles / elas", "vão", "estudar"]] },
    examples: [
      { target: "Amanhã vai chover.", gloss: { es: "Mañana va a llover.", en: "It's going to rain tomorrow." } },
      { target: "Nós vamos jantar fora hoje.", gloss: { es: "Hoy vamos a cenar afuera.", en: "We're going to eat out tonight." } },
    ],
    pitfalls: {
      es: "Sin «a»: vou estudar, no «vou a estudar». Pero con un lugar sí: vou à praia.",
      en: "No 'to' after ir: vou estudar (I'm going to study).",
    },
  },
  {
    id: "pt-g-estar-gerundio", lang: "pt", cefr: "A1.2",
    title: { es: "estar + gerundio (y estar a + infinitivo en Portugal)", en: "estar + gerund (and estar a + infinitive in Portugal)" },
    short: {
      es: "Brasil: estou falando, está chovendo. Portugal: estou a falar, está a chover.",
      en: "Brazil: estou falando, está chovendo. Portugal: estou a falar, está a chover.",
    },
    rule: {
      es: "Para algo en curso se usa estar + gerundio (-ando, -endo, -indo), como en español. En Portugal lo normal es estar a + infinitivo. Los dos se entienden en todas partes.",
      en: "For an action in progress, Brazil uses estar + gerund (-ando, -endo, -indo), like English -ing. Portugal uses estar a + infinitive. Both are understood everywhere.",
    },
    table: { head: ["verbo", "Brasil", "Portugal"], rows: [["falar", "estou falando", "estou a falar"], ["comer", "está comendo", "está a comer"], ["sair", "estamos saindo", "estamos a sair"]] },
    examples: [
      { target: "O que você está fazendo?", gloss: { es: "¿Qué estás haciendo?", en: "What are you doing?" } },
      { target: "As crianças estão dormindo.", gloss: { es: "Los niños están durmiendo.", en: "The children are sleeping." } },
    ],
    pitfalls: {
      es: "No mezcles: «estou a falando» no existe.",
      en: "Don't use the gerund for plans like English does: 'I'm travelling tomorrow' is 'vou viajar amanhã'.",
    },
  },
];
