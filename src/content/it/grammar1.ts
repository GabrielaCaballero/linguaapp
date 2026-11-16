import type { GrammarPoint } from "../schema";

// Grammar points for Italian units u01–u08 (content v2.1). Same shape as grammar.ts:
// the rule as a textbook states it, how to work the form out, the table, examples, the classic mistake.
// pat-avere (u03) links to the existing "it-g-essere-avere" card, which already has the full avere paradigm.
export const grammar1: GrammarPoint[] = [
  // ── u01 ───────────────────────────────────────────────────
  {
    id: "it-g-tu-lei",
    lang: "it",
    cefr: "A0",
    title: { es: "Tratar de tú o de usted: tu y Lei", en: "Informal and formal 'you': tu and Lei" },
    short: {
      es: "tu = tú (amigos, familia). Lei = usted (desconocidos, tiendas), con el verbo en 3.ª persona: Come sta?",
      en: "tu = informal you (friends, family). Lei = formal you (strangers, shops), with a 3rd-person verb: Come sta?",
    },
    rule: {
      es: "El italiano tiene dos formas de decir «tú»: tu para la confianza y Lei para el respeto, igual que tú y usted. Con Lei el verbo va en 3.ª persona singular, como con «usted»: Lei è, Lei ha, Come si chiama? Lei es también la palabra para «ella»; por eso, por escrito, la forma de cortesía suele llevar mayúscula.",
      en: "Italian has two ways of saying 'you': tu for people you are close to and Lei to show respect. With Lei the verb goes in the 3rd person singular, the same form as for 'he/she': Lei è, Lei ha, Come si chiama? Lei also means 'she', which is why the polite form is often written with a capital L.",
    },
    steps: [
      { es: "¿Conoces bien a la persona, es joven o de tu familia? → tu.", en: "Do you know the person well, or are they young or family? → tu." },
      { es: "¿Es un desconocido, un cliente, alguien mayor? → Lei.", en: "Is it a stranger, a customer, an older person? → Lei." },
      { es: "Con Lei, pon el verbo y el pronombre de 3.ª persona: si chiama, sta, è.", en: "With Lei, use the 3rd-person verb and pronoun: si chiama, sta, è." },
      { es: "Saluda en el mismo registro: Ciao / Scusa con tu; Buongiorno / Scusi con Lei.", en: "Greet in the same register: Ciao / Scusa with tu; Buongiorno / Scusi with Lei." },
    ],
    table: {
      head: ["", "tu", "Lei"],
      rows: [
        ["chiamarsi", "Come ti chiami?", "Come si chiama?"],
        ["stare", "Come stai?", "Come sta?"],
        ["essere", "Di dove sei?", "Di dov'è?"],
        ["scusare", "Scusa!", "Scusi!"],
        ["saluti", "Ciao!", "Buongiorno! / Arrivederci!"],
      ],
    },
    examples: [
      { target: "Ciao, come ti chiami?", gloss: { es: "Hola, ¿cómo te llamas?", en: "Hi, what's your name?" } },
      { target: "Buongiorno, come si chiama?", gloss: { es: "Buenos días, ¿cómo se llama (usted)?", en: "Good morning, what's your name? (formal)" } },
      { target: "Bene, grazie. E Lei?", gloss: { es: "Bien, gracias. ¿Y usted?", en: "Fine, thanks. And you? (formal)" } },
    ],
    pitfalls: {
      es: "No mezcles las dos formas: «Come ti chiama?» es incorrecto. O todo de tú (Come ti chiami?) o todo de usted (Come si chiama?).",
      en: "English has one 'you', so learners mix forms: 'Come ti chiama?' is wrong. Either all tu (Come ti chiami?) or all Lei (Come si chiama?).",
    },
  },

  // ── u02 ───────────────────────────────────────────────────
  {
    id: "it-g-are",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Presente: verbos en -are", en: "Present tense: -are verbs" },
    short: {
      es: "Raíz + -o, -i, -a, -iamo, -ate, -ano: parlo, parli, parla, parliamo, parlate, parlano.",
      en: "Stem + -o, -i, -a, -iamo, -ate, -ano: parlo, parli, parla, parliamo, parlate, parlano.",
    },
    rule: {
      es: "La mayoría de los verbos italianos terminan en -are y son regulares. Quita -are (parl-are → parl-) y añade la terminación de la persona. Como en español, el verbo ya dice quién es, así que el pronombre (io, tu…) casi siempre se omite.",
      en: "Most Italian verbs end in -are and are regular. Drop -are (parl-are → parl-) and add the ending for the person. The ending already shows who is doing it, so the subject pronoun (io, tu…) is usually left out.",
    },
    steps: [
      { es: "Busca la raíz: el infinitivo sin -are (abitare → abit-).", en: "Find the stem: the infinitive without -are (abitare → abit-)." },
      { es: "¿Quién hace la acción? Elige la persona.", en: "Who is doing it? Pick the person." },
      { es: "Añade su terminación: -o, -i, -a, -iamo, -ate, -ano.", en: "Add its ending: -o, -i, -a, -iamo, -ate, -ano." },
      { es: "Si la raíz termina en c o g, pon una h antes de i: giocare → giochi.", en: "If the stem ends in c or g, add an h before i: giocare → giochi." },
    ],
    table: {
      head: ["", "parlare", "abitare"],
      rows: [
        ["io", "parlo", "abito"],
        ["tu", "parli", "abiti"],
        ["lui / lei / Lei", "parla", "abita"],
        ["noi", "parliamo", "abitiamo"],
        ["voi", "parlate", "abitate"],
        ["loro", "parlano", "abitano"],
      ],
    },
    examples: [
      { target: "Parlo spagnolo e un po' di italiano.", gloss: { es: "Hablo español y un poco de italiano.", en: "I speak Spanish and a bit of Italian." } },
      { target: "Abiti a Roma?", gloss: { es: "¿Vives en Roma?", en: "Do you live in Rome?" } },
      { target: "Parla inglese?", gloss: { es: "¿Habla (usted) inglés?", en: "Do you speak English? (formal)" } },
    ],
    pitfalls: {
      es: "Con tu la terminación es -i, no -s como en español: «tu parlas» es incorrecto → tu parli. Y loro termina en -ano: parlano.",
      en: "The tu ending is -i: tu parli. 'tu parla' is a common mistake: -a is the lui/lei/Lei form.",
    },
  },
  {
    id: "it-g-nazionalita",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Adjetivos de nacionalidad", en: "Nationality adjectives" },
    short: {
      es: "En -o: spagnolo / spagnola. En -e: inglese para él y para ella. Siempre con minúscula.",
      en: "-o adjectives: spagnolo / spagnola. -e adjectives: inglese for both. Always lower case.",
    },
    rule: {
      es: "Los adjetivos de nacionalidad concuerdan con la persona. Los que terminan en -o tienen cuatro formas (-o, -a, -i, -e); los que terminan en -e solo dos (-e en singular, -i en plural). Se escriben con minúscula: sono italiana.",
      en: "Nationality adjectives agree with the person. Those ending in -o have four forms (-o, -a, -i, -e); those ending in -e have only two (-e in the singular, -i in the plural). They are written in lower case: sono italiana.",
    },
    steps: [
      { es: "Mira la forma del diccionario: ¿termina en -o o en -e?", en: "Look at the dictionary form: does it end in -o or -e?" },
      { es: "¿Hombre o mujer? ¿Una persona o varias?", en: "Man or woman? One person or more?" },
      { es: "En -o: -o, -a, -i, -e. En -e: -e en singular, -i en plural.", en: "-o type: -o, -a, -i, -e. -e type: -e singular, -i plural." },
    ],
    table: {
      head: ["", "m", "f", "m pl", "f pl"],
      rows: [
        ["-o", "italiano", "italiana", "italiani", "italiane"],
        ["-o", "spagnolo", "spagnola", "spagnoli", "spagnole"],
        ["-o", "tedesco", "tedesca", "tedeschi", "tedesche"],
        ["-e", "inglese", "inglese", "inglesi", "inglesi"],
        ["-e", "francese", "francese", "francesi", "francesi"],
      ],
    },
    examples: [
      { target: "Marco è italiano, Anna è spagnola.", gloss: { es: "Marco es italiano, Anna es española.", en: "Marco is Italian, Anna is Spanish." } },
      { target: "Sophie è inglese.", gloss: { es: "Sophie es inglesa.", en: "Sophie is English." } },
      { target: "Sono svizzera.", gloss: { es: "Soy suiza.", en: "I'm Swiss. (woman speaking)" } },
    ],
    pitfalls: {
      es: "En español decimos «inglesa», pero en italiano las nacionalidades en -e no cambian: «inglesa» es incorrecto → Anna è inglese.",
      en: "English capitalises nationalities, Italian doesn't: 'Sono Italiano' is wrong → sono italiano. And -e forms don't change: Anna è inglese.",
    },
  },

  // ── u03 ───────────────────────────────────────────────────
  {
    id: "it-g-ventuno",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Números del 21 al 99", en: "Numbers from 21 to 99" },
    short: {
      es: "Decena + unidad en una palabra; ante uno y otto la decena pierde la vocal: ventuno, trentotto. 23 = ventitré.",
      en: "Tens + units in one word; before uno and otto the tens drop their vowel: ventuno, trentotto. 23 = ventitré.",
    },
    rule: {
      es: "Los números del 21 al 99 se escriben en una sola palabra, sin «y»: venti + due = ventidue. Delante de uno y otto, que empiezan por vocal, la decena pierde su última vocal: ventuno, trentotto. Cuando el número termina en tre, lleva acento: ventitré, trentatré.",
      en: "Numbers from 21 to 99 are one word, with no 'and': venti + due = ventidue. Before uno and otto, which start with a vowel, the tens drop their last vowel: ventuno, trentotto. When a number ends in tre, it takes an accent: ventitré, trentatré.",
    },
    steps: [
      { es: "Di la decena: venti, trenta, quaranta, cinquanta…", en: "Say the tens: venti, trenta, quaranta, cinquanta…" },
      { es: "Pega la unidad detrás, sin espacio ni «e».", en: "Attach the unit straight after, with no space and no 'e'." },
      { es: "¿La unidad es uno u otto? Quita la vocal final de la decena.", en: "Is the unit uno or otto? Drop the tens' final vowel." },
      { es: "¿Termina en tre? Escribe tré con acento.", en: "Does it end in tre? Write tré with an accent." },
    ],
    table: {
      head: ["", "+ 1", "+ 3", "+ 8"],
      rows: [
        ["venti", "ventuno", "ventitré", "ventotto"],
        ["trenta", "trentuno", "trentatré", "trentotto"],
        ["quaranta", "quarantuno", "quarantatré", "quarantotto"],
        ["cinquanta", "cinquantuno", "cinquantatré", "cinquantotto"],
        ["novanta", "novantuno", "novantatré", "novantotto"],
      ],
    },
    examples: [
      { target: "Marco ha ventidue anni.", gloss: { es: "Marco tiene veintidós años.", en: "Marco is twenty-two." } },
      { target: "Ho trentotto anni.", gloss: { es: "Tengo treinta y ocho años.", en: "I'm thirty-eight." } },
      { target: "Mia madre ha cinquantatré anni.", gloss: { es: "Mi madre tiene cincuenta y tres años.", en: "My mother is fifty-three." } },
    ],
    pitfalls: {
      es: "El español dice «treinta y ocho», pero en italiano no hay «e» ni vocal doble: «trenta e otto» y «trentaotto» son incorrectos → trentotto.",
      en: "'trentaotto' is wrong: before otto the tens lose their vowel → trentotto. And don't forget the accent: 'ventitre' → ventitré.",
    },
  },

  // ── u04 ───────────────────────────────────────────────────
  {
    id: "it-g-genere",
    lang: "it",
    cefr: "A1.1",
    title: { es: "El género de los sustantivos", en: "Noun gender" },
    short: {
      es: "-o suele ser masculino, -a femenino; -e puede ser los dos (il latte, la chiave). Apréndelo con el artículo.",
      en: "-o is usually masculine, -a feminine; -e can be either (il latte, la chiave). Learn every noun with its article.",
    },
    rule: {
      es: "Todo sustantivo italiano es masculino o femenino, y el género decide el artículo y los adjetivos. La terminación ayuda: -o casi siempre es masculino, -a casi siempre femenino, -tà femenino, y las palabras extranjeras en consonante suelen ser masculinas. Las terminadas en -e pueden ser de los dos géneros, así que hay que aprenderlas con su artículo.",
      en: "Every Italian noun is masculine or feminine, and the gender decides the article and the adjectives. The ending helps: -o is almost always masculine, -a almost always feminine, -tà feminine, and foreign words ending in a consonant are usually masculine. Nouns in -e can be either, so learn them with their article.",
    },
    steps: [
      { es: "Mira la última letra del sustantivo.", en: "Look at the noun's last letter." },
      { es: "-o → masculino; -a o -tà → femenino; consonante → casi siempre masculino.", en: "-o → masculine; -a or -tà → feminine; consonant → almost always masculine." },
      { es: "¿Termina en -e? No se puede adivinar: busca el artículo (il latte, la chiave).", en: "Ends in -e? You can't guess: check the article (il latte, la chiave)." },
    ],
    table: {
      head: ["", "m", "f"],
      rows: [
        ["-o", "il panino", "(la mano)"],
        ["-a", "(il cinema)", "la birra"],
        ["-e", "il latte", "la chiave"],
        ["-tà", "—", "la città"],
        ["cons.", "il bar · lo spritz", "—"],
      ],
    },
    examples: [
      { target: "Il latte è caldo.", gloss: { es: "La leche está caliente.", en: "The milk is hot." } },
      { target: "La birra, per favore.", gloss: { es: "La cerveza, por favor.", en: "The beer, please." } },
      { target: "Vorrei un panino e una spremuta.", gloss: { es: "Quisiera un sándwich y un jugo exprimido.", en: "I'd like a sandwich and a fresh juice." } },
    ],
    pitfalls: {
      es: "No copies el género del español: «la latte» es incorrecto, porque en italiano latte es masculino → il latte.",
      en: "English nouns have no gender, so don't guess: 'la latte' is wrong because latte is masculine → il latte. Learn the article with the noun.",
    },
  },
  {
    id: "it-g-un-uno-una",
    lang: "it",
    cefr: "A1.1",
    title: { es: "El artículo indeterminado: un, uno, una, un'", en: "The indefinite article: un, uno, una, un'" },
    short: {
      es: "un caffè, uno spritz (s + consonante, z), una birra, un'aranciata (femenino + vocal).",
      en: "un caffè, uno spritz (s + consonant, z), una birra, un'aranciata (feminine + vowel).",
    },
    rule: {
      es: "El artículo indeterminado depende del género y del primer sonido de la palabra que sigue. En masculino se usa un, y uno ante s + consonante, z, gn y ps; en femenino una, y un' ante vocal. El apóstrofo solo existe en femenino: un amico, pero un'amica.",
      en: "The indefinite article depends on the gender and on the first sound of the next word. Masculine uses un, or uno before s + consonant, z, gn and ps; feminine uses una, or un' before a vowel. Only the feminine takes an apostrophe: un amico, but un'amica.",
    },
    steps: [
      { es: "¿El sustantivo es masculino o femenino?", en: "Is the noun masculine or feminine?" },
      { es: "Mira cómo empieza la palabra que va justo detrás.", en: "Look at how the very next word begins." },
      { es: "Masculino: un; uno ante s + consonante, z, gn, ps.", en: "Masculine: un; uno before s + consonant, z, gn, ps." },
      { es: "Femenino: una; un' ante vocal.", en: "Feminine: una; un' before a vowel." },
    ],
    table: {
      head: ["", "m", "f"],
      rows: [
        ["b, c, d, p…", "un caffè", "una birra"],
        ["a, e, i, o, u", "un aperitivo", "un'aranciata"],
        ["s + cons., z, gn, ps", "uno spritz · uno zaino", "una spremuta"],
      ],
    },
    examples: [
      { target: "Vorrei un caffè.", gloss: { es: "Quisiera un café.", en: "I'd like a coffee." } },
      { target: "Prendo uno spritz.", gloss: { es: "Tomo un spritz.", en: "I'll have a spritz." } },
      { target: "Un'acqua minerale, per favore.", gloss: { es: "Un agua mineral, por favor.", en: "A mineral water, please." } },
    ],
    pitfalls: {
      es: "En español es «un spritz», pero en italiano s + consonante pide uno: «un spritz» es incorrecto → uno spritz. Y «un'aperitivo» tampoco: es masculino → un aperitivo.",
      en: "'un spritz' is wrong: s + consonant needs uno → uno spritz. And 'un'aperitivo' is wrong too: masculine nouns never take the apostrophe → un aperitivo.",
    },
  },
  {
    id: "it-g-il-lo-la",
    lang: "it",
    cefr: "A1.1",
    title: { es: "El artículo determinado singular: il, lo, la, l'", en: "The singular definite article: il, lo, la, l'" },
    short: {
      es: "il conto, lo zucchero (s + consonante, z, gn, ps), la birra, l'acqua (ante vocal, masc. y fem.).",
      en: "il conto, lo zucchero (s + consonant, z, gn, ps), la birra, l'acqua (before a vowel, masc. and fem.).",
    },
    rule: {
      es: "El artículo «el / la» tiene cuatro formas en singular, según el género y el primer sonido de la palabra siguiente. En masculino se usa il, y lo ante s + consonante, z, gn, ps, x e y; en femenino la. Ante vocal, los dos géneros usan l'.",
      en: "'The' has four singular forms, chosen by gender and by the first sound of the next word. Masculine uses il, or lo before s + consonant, z, gn, ps, x and y; feminine uses la. Before a vowel, both genders use l'.",
    },
    steps: [
      { es: "¿El sustantivo es masculino o femenino?", en: "Is the noun masculine or feminine?" },
      { es: "Mira la palabra que va justo detrás (puede ser un adjetivo).", en: "Look at the very next word (it may be an adjective)." },
      { es: "¿Empieza por vocal? → l' para los dos géneros.", en: "Does it start with a vowel? → l' for both genders." },
      { es: "Si no: masculino il, o lo ante s + consonante, z, gn, ps; femenino la.", en: "If not: masculine il, or lo before s + consonant, z, gn, ps; feminine la." },
    ],
    table: {
      head: ["", "m", "f"],
      rows: [
        ["b, c, d, p…", "il conto", "la birra"],
        ["a, e, i, o, u", "l'aperitivo", "l'acqua"],
        ["s + cons., z, gn, ps", "lo spritz · lo zucchero", "la spremuta"],
      ],
    },
    examples: [
      { target: "Il conto, per favore.", gloss: { es: "La cuenta, por favor.", en: "The bill, please." } },
      { target: "Dov'è lo zucchero?", gloss: { es: "¿Dónde está el azúcar?", en: "Where's the sugar?" } },
      { target: "L'acqua è fredda.", gloss: { es: "El agua está fría.", en: "The water is cold." } },
    ],
    pitfalls: {
      es: "El español dice «el estudiante» y «el azúcar», pero en italiano s + consonante y z piden lo: «il studente» e «il zucchero» son incorrectos → lo studente, lo zucchero.",
      en: "'la acqua' is wrong: before a vowel the article shortens → l'acqua. And s + consonant or z needs lo: 'il studente' → lo studente.",
    },
  },

  // ── u05 ───────────────────────────────────────────────────
  {
    id: "it-g-plurale",
    lang: "it",
    cefr: "A1.1",
    title: { es: "El plural de sustantivos y artículos", en: "Plural nouns and articles" },
    short: {
      es: "-o → -i, -a → -e, -e → -i. Artículos: il → i, lo / l' (m) → gli, la / l' (f) → le.",
      en: "-o → -i, -a → -e, -e → -i. Articles: il → i, lo / l' (m) → gli, la / l' (f) → le.",
    },
    rule: {
      es: "En italiano el plural no se forma con -s, sino cambiando la vocal final: -o → -i, -a → -e, -e → -i. El artículo también cambia: il → i, lo y l' masculino → gli, la y l' femenino → le. Las palabras que terminan en vocal con acento o en consonante no cambian: il caffè → i caffè, il bar → i bar.",
      en: "Italian doesn't make plurals with -s: it changes the final vowel: -o → -i, -a → -e, -e → -i. The article changes too: il → i, lo and masculine l' → gli, la and feminine l' → le. Words ending in a stressed vowel or a consonant don't change: il caffè → i caffè, il bar → i bar.",
    },
    steps: [
      { es: "Mira la vocal final: -o y -e → -i; -a → -e.", en: "Check the final vowel: -o and -e → -i; -a → -e." },
      { es: "¿Termina en vocal con acento o en consonante? No cambia.", en: "Ends in a stressed vowel or a consonant? It stays the same." },
      { es: "Pasa el artículo al plural: il → i; lo, l' (m) → gli; la, l' (f) → le.", en: "Make the article plural: il → i; lo, l' (m) → gli; la, l' (f) → le." },
    ],
    table: {
      head: ["singolare", "plurale"],
      rows: [
        ["il nonno", "i nonni"],
        ["lo zio", "gli zii"],
        ["l'appartamento", "gli appartamenti"],
        ["la nonna", "le nonne"],
        ["il padre", "i padri"],
        ["la madre", "le madri"],
        ["la città", "le città"],
      ],
    },
    examples: [
      { target: "Ho due fratelli e una sorella.", gloss: { es: "Tengo dos hermanos y una hermana.", en: "I have two brothers and a sister." } },
      { target: "I nonni abitano a Napoli.", gloss: { es: "Los abuelos viven en Nápoles.", en: "My grandparents live in Naples." } },
      { target: "Le zie sono simpatiche.", gloss: { es: "Las tías son simpáticas.", en: "The aunts are nice." } },
    ],
    pitfalls: {
      es: "En italiano no se agrega -s: «le sorellas» o «i nonnos» son incorrectos → le sorelle, i nonni. Y el plural de lo zio es gli zii, no «i zii».",
      en: "Don't add -s: 'le sorellas' is wrong → le sorelle. And masculine nouns starting with a vowel, z or s + consonant take gli: gli zii, not 'i zii'.",
    },
  },
  {
    id: "it-g-possessivi",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Los posesivos", en: "Possessives" },
    short: {
      es: "El posesivo lleva artículo (la mia casa), salvo con un familiar en singular: mia madre, mio fratello.",
      en: "Possessives take an article (la mia casa), except with a singular family member: mia madre, mio fratello.",
    },
    rule: {
      es: "El posesivo concuerda con la cosa poseída, no con el dueño: mio padre, mia madre, i miei genitori. Normalmente va con artículo (la mia casa, il tuo numero), pero con un familiar en singular el artículo desaparece: mia sorella. El artículo vuelve en plural (le mie sorelle), con loro (il loro figlio), cuando el familiar lleva adjetivo o diminutivo (il mio fratello maggiore, la mia sorellina) y casi siempre con mamma y papà.",
      en: "The possessive agrees with the thing owned, not with the owner: mio padre, mia madre, i miei genitori. It normally takes an article (la mia casa, il tuo numero), but with a singular family member the article drops: mia sorella. The article comes back in the plural (le mie sorelle), with loro (il loro figlio), when the family noun has an adjective or a diminutive (il mio fratello maggiore, la mia sorellina) and usually with mamma and papà.",
    },
    steps: [
      { es: "¿De quién es? Elige el posesivo: mio, tuo, suo, nostro, vostro, loro.", en: "Whose is it? Pick the possessive: mio, tuo, suo, nostro, vostro, loro." },
      { es: "Haz que concuerde con la cosa poseída (género y número).", en: "Make it agree with the thing owned (gender and number)." },
      { es: "Pon el artículo, salvo si es un familiar en singular (y no es loro).", en: "Add the article, unless it's a singular family member (and not loro)." },
    ],
    table: {
      head: ["", "m", "f", "m pl", "f pl"],
      rows: [
        ["io", "mio", "mia", "miei", "mie"],
        ["tu", "tuo", "tua", "tuoi", "tue"],
        ["lui / lei / Lei", "suo", "sua", "suoi", "sue"],
        ["noi", "nostro", "nostra", "nostri", "nostre"],
        ["voi", "vostro", "vostra", "vostri", "vostre"],
        ["loro", "loro", "loro", "loro", "loro"],
      ],
    },
    examples: [
      { target: "Mio fratello abita a Milano.", gloss: { es: "Mi hermano vive en Milán.", en: "My brother lives in Milan." } },
      { target: "La mia famiglia è di Napoli.", gloss: { es: "Mi familia es de Nápoles.", en: "My family is from Naples." } },
      { target: "I miei genitori abitano a Roma.", gloss: { es: "Mis padres viven en Roma.", en: "My parents live in Rome." } },
      { target: "Marco e sua moglie.", gloss: { es: "Marco y su esposa.", en: "Marco and his wife." } },
    ],
    pitfalls: {
      es: "En español «mi casa» va sin artículo, pero en italiano lo necesita: «mia casa è grande» es incorrecto → la mia casa è grande. Sin artículo solo con familiares en singular.",
      en: "suo / sua agrees with the thing owned, not the owner: 'Marco e suo moglie' is wrong → Marco e sua moglie (moglie is feminine).",
    },
  },

  // ── u06 ───────────────────────────────────────────────────
  {
    id: "it-g-ere-ire",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Presente: verbos en -ere e -ire", en: "Present tense: -ere and -ire verbs" },
    short: {
      es: "Terminaciones -o, -i, -e, -iamo, -ete / -ite, -ono: prendo… prendete, dormo… dormite.",
      en: "Endings -o, -i, -e, -iamo, -ete / -ite, -ono: prendo… prendete, dormo… dormite.",
    },
    rule: {
      es: "Los verbos en -ere y en -ire se conjugan casi igual: solo cambia la forma de voi (prendete, dormite). Con lui / lei la terminación es -e, y con loro es -ono. En las tres conjugaciones (-are, -ere, -ire), noi termina siempre en -iamo.",
      en: "-ere and -ire verbs are conjugated almost the same way: only the voi form differs (prendete, dormite). The lui / lei ending is -e, and the loro ending is -ono. In all three groups (-are, -ere, -ire), noi always ends in -iamo.",
    },
    steps: [
      { es: "Quita -ere o -ire: prendere → prend-, dormire → dorm-.", en: "Drop -ere or -ire: prendere → prend-, dormire → dorm-." },
      { es: "Elige la persona.", en: "Pick the person." },
      { es: "Añade -o, -i, -e, -iamo, -ete / -ite, -ono.", en: "Add -o, -i, -e, -iamo, -ete / -ite, -ono." },
    ],
    table: {
      head: ["", "parlare", "prendere", "dormire"],
      rows: [
        ["io", "parlo", "prendo", "dormo"],
        ["tu", "parli", "prendi", "dormi"],
        ["lui / lei / Lei", "parla", "prende", "dorme"],
        ["noi", "parliamo", "prendiamo", "dormiamo"],
        ["voi", "parlate", "prendete", "dormite"],
        ["loro", "parlano", "prendono", "dormono"],
      ],
    },
    examples: [
      { target: "Marco vive a Torino.", gloss: { es: "Marco vive en Turín.", en: "Marco lives in Turin." } },
      { target: "Prendo il treno per Roma.", gloss: { es: "Tomo el tren a Roma.", en: "I'm taking the train to Rome." } },
      { target: "Dormite bene qui?", gloss: { es: "¿Duermen bien aquí?", en: "Do you (all) sleep well here?" } },
    ],
    pitfalls: {
      es: "No copies las terminaciones del español: «prendemos» o «loro prendeno» son incorrectos → prendiamo, prendono.",
      en: "With lui / lei the verb ends in -e, never -s: 'lui prendes' is wrong → lui prende. And loro is -ono: prendono.",
    },
  },
  {
    id: "it-g-c-e",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Hay: c'è y ci sono", en: "There is / there are: c'è and ci sono" },
    short: {
      es: "«Hay» tiene dos formas: c'è + singular (c'è una cucina), ci sono + plural (ci sono due camere).",
      en: "c'è + singular (c'è una cucina) = there is; ci sono + plural (ci sono due camere) = there are.",
    },
    rule: {
      es: "Para decir que algo existe o está en un lugar se usa ci + essere: c'è con singular y ci sono con plural. A diferencia de «hay», concuerda con lo que sigue. Para preguntar dónde está algo concreto se usa solo essere: Dov'è la stazione?",
      en: "To say that something exists or is somewhere, Italian uses ci + essere: c'è with a singular and ci sono with a plural. To ask where a specific thing is, use essere alone: Dov'è la stazione?",
    },
    steps: [
      { es: "¿Dices que algo existe en un lugar? → c'è / ci sono.", en: "Are you saying something exists somewhere? → c'è / ci sono." },
      { es: "¿Lo que sigue es singular? → c'è. ¿Plural? → ci sono.", en: "Is what follows singular? → c'è. Plural? → ci sono." },
      { es: "Para negar, pon non delante: non c'è, non ci sono.", en: "To make it negative, put non in front: non c'è, non ci sono." },
    ],
    table: {
      head: ["", "singolare", "plurale"],
      rows: [
        ["+", "C'è una cucina.", "Ci sono due camere."],
        ["?", "C'è un bagno?", "Ci sono negozi?"],
        ["–", "Non c'è un bagno.", "Non ci sono treni."],
      ],
    },
    examples: [
      { target: "C'è una piazza vicino a casa mia.", gloss: { es: "Hay una plaza cerca de mi casa.", en: "There's a square near my house." } },
      { target: "Nell'appartamento ci sono tre camere.", gloss: { es: "En el apartamento hay tres habitaciones.", en: "There are three rooms in the flat." } },
      { target: "Scusi, c'è una stazione qui vicino?", gloss: { es: "Disculpe, ¿hay una estación cerca de aquí?", en: "Excuse me, is there a station near here?" } },
    ],
    pitfalls: {
      es: "«Hay» no cambia en español, pero en italiano sí: «c'è due camere» es incorrecto → ci sono due camere.",
      en: "Don't drop the ci: 'È una piazza qui' means 'it is a square here' → C'è una piazza qui (there is a square here).",
    },
  },
  {
    id: "it-g-a-in-di",
    lang: "it",
    cefr: "A1.1",
    title: { es: "Preposiciones de lugar: a, in, di", en: "Place prepositions: a, in, di" },
    short: {
      es: "a + ciudad (a Roma), in + país o región (in Italia), di + ciudad de origen (sono di Napoli).",
      en: "a + city (a Roma), in + country or region (in Italia), di + home town (sono di Napoli).",
    },
    rule: {
      es: "Con ciudades se usa a y con países, regiones e islas grandes in, tanto para estar como para ir: abito a Roma, vado in Italia. Para decir de qué ciudad eres se usa di: sono di Napoli. Algunas expresiones fijas: a casa, a scuola, pero in centro, in piazza, in ufficio.",
      en: "Cities take a and countries, regions and large islands take in, both for being there and for going there: abito a Roma, vado in Italia. To say which city you're from, use di: sono di Napoli. Some fixed phrases: a casa, a scuola, but in centro, in piazza, in ufficio.",
    },
    steps: [
      { es: "¿Hablas de tu ciudad de origen? → di (sono di Napoli).", en: "Talking about your home town? → di (sono di Napoli)." },
      { es: "¿Es una ciudad? → a (abito a Milano, vado a Roma).", en: "Is it a city? → a (abito a Milano, vado a Roma)." },
      { es: "¿Es un país o una región? → in (in Spagna, in Toscana).", en: "Is it a country or a region? → in (in Spagna, in Toscana)." },
    ],
    table: {
      head: ["", "città", "paese / regione"],
      rows: [
        ["abitare", "a Roma", "in Italia"],
        ["andare", "a Milano", "in Spagna"],
        ["essere di", "di Napoli", "— (sono spagnolo)"],
        ["altri", "a casa · a scuola", "in centro · in piazza"],
      ],
    },
    examples: [
      { target: "Abito a Roma, in Italia.", gloss: { es: "Vivo en Roma, en Italia.", en: "I live in Rome, in Italy." } },
      { target: "Anna abita in Germania.", gloss: { es: "Anna vive en Alemania.", en: "Anna lives in Germany." } },
      { target: "Sono di Napoli, ma abito a Torino.", gloss: { es: "Soy de Nápoles, pero vivo en Turín.", en: "I'm from Naples, but I live in Turin." } },
    ],
    pitfalls: {
      es: "En español «en» sirve para todo, pero en italiano con ciudades va a: «abito in Roma» es incorrecto → abito a Roma. Y para el país no uses di: «sono di Spagna» → sono spagnolo.",
      en: "English uses 'in' for cities too, but Italian doesn't: 'abito in Roma' is wrong → abito a Roma. And for countries say your nationality: 'sono di Spagna' → sono spagnolo.",
    },
  },

  // ── u07 ───────────────────────────────────────────────────
  {
    id: "it-g-riflessivi",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Verbos reflexivos", en: "Reflexive verbs" },
    short: {
      es: "Pronombre + verbo: mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano.",
      en: "Pronoun + verb: mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano.",
    },
    rule: {
      es: "Los verbos reflexivos llevan -si al final del infinitivo (alzarsi, svegliarsi, vestirsi). Al conjugarlos, el pronombre (mi, ti, si, ci, vi, si) va delante del verbo, como en español, y el verbo sigue su modelo normal: -are, -ere o -ire. La negación va antes del pronombre: non mi alzo.",
      en: "Reflexive verbs end in -si in the infinitive (alzarsi, svegliarsi, vestirsi). When you conjugate them, the pronoun (mi, ti, si, ci, vi, si) goes before the verb, and the verb follows its normal -are, -ere or -ire pattern. The negative goes before the pronoun: non mi alzo.",
    },
    steps: [
      { es: "Quita -si y conjuga el verbo normal: alzare → alzo, alzi…", en: "Drop -si and conjugate the plain verb: alzare → alzo, alzi…" },
      { es: "Elige el pronombre de la misma persona: io → mi, noi → ci…", en: "Pick the pronoun for the same person: io → mi, noi → ci…" },
      { es: "Pon el pronombre delante del verbo: mi alzo.", en: "Put the pronoun before the verb: mi alzo." },
      { es: "Si niegas, non va primero: non mi alzo.", en: "If negative, non comes first: non mi alzo." },
    ],
    table: {
      head: ["", "alzarsi", "vestirsi"],
      rows: [
        ["io", "mi alzo", "mi vesto"],
        ["tu", "ti alzi", "ti vesti"],
        ["lui / lei / Lei", "si alza", "si veste"],
        ["noi", "ci alziamo", "ci vestiamo"],
        ["voi", "vi alzate", "vi vestite"],
        ["loro", "si alzano", "si vestono"],
      ],
    },
    examples: [
      { target: "Mi alzo alle sette.", gloss: { es: "Me levanto a las siete.", en: "I get up at seven." } },
      { target: "A che ora ti svegli?", gloss: { es: "¿A qué hora te despiertas?", en: "What time do you wake up?" } },
      { target: "Il sabato non ci alziamo presto.", gloss: { es: "Los sábados no nos levantamos temprano.", en: "On Saturdays we don't get up early." } },
    ],
    pitfalls: {
      es: "El pronombre cambia con la persona: «si alziamo» es incorrecto → ci alziamo (nos levantamos). Ojo: «os» es vi y «nos» es ci.",
      en: "English often has no pronoun ('I get up'), but Italian needs it: 'alzo alle sette' is wrong → mi alzo alle sette.",
    },
  },
  {
    id: "it-g-isc",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Verbos en -ire con -isc-", en: "-ire verbs with -isc-" },
    short: {
      es: "finire, capire, preferire añaden -isc- salvo en noi y voi: capisco, capisci, capisce, capiamo, capite, capiscono.",
      en: "finire, capire, preferire add -isc- except with noi and voi: capisco, capisci, capisce, capiamo, capite, capiscono.",
    },
    rule: {
      es: "Algunos verbos en -ire (finire, capire, preferire, pulire…) añaden -isc- entre la raíz y la terminación en todas las personas menos noi y voi. Las terminaciones son las normales de -ire. Por la regla de sc, -isco y -iscono suenan «isko», pero -isci e -isce suenan con «sh»: capisci ≈ «capíshi».",
      en: "Some -ire verbs (finire, capire, preferire, pulire…) add -isc- between the stem and the ending in every person except noi and voi. The endings are the normal -ire ones. Following the sc rule, -isco and -iscono sound 'isko', but -isci and -isce have an 'sh' sound: capisci ≈ 'ka-PEE-shee'.",
    },
    steps: [
      { es: "¿El verbo es de tipo -isc-? Se aprende de memoria (el diccionario lo indica).", en: "Is it an -isc- verb? You learn this by heart (dictionaries mark it)." },
      { es: "Con noi y voi, conjuga normal: finiamo, finite.", en: "With noi and voi, conjugate normally: finiamo, finite." },
      { es: "En las demás personas, pon -isc- antes de la terminación: fin-isc-o.", en: "In all other persons, put -isc- before the ending: fin-isc-o." },
    ],
    table: {
      head: ["", "dormire", "finire", "capire"],
      rows: [
        ["io", "dormo", "finisco", "capisco"],
        ["tu", "dormi", "finisci", "capisci"],
        ["lui / lei / Lei", "dorme", "finisce", "capisce"],
        ["noi", "dormiamo", "finiamo", "capiamo"],
        ["voi", "dormite", "finite", "capite"],
        ["loro", "dormono", "finiscono", "capiscono"],
      ],
    },
    examples: [
      { target: "Finisco di lavorare alle sei.", gloss: { es: "Termino de trabajar a las seis.", en: "I finish work at six." } },
      { target: "Non capisco.", gloss: { es: "No entiendo.", en: "I don't understand." } },
      { target: "Preferisci il tè o il caffè?", gloss: { es: "¿Prefieres té o café?", en: "Do you prefer tea or coffee?" } },
    ],
    pitfalls: {
      es: "No pongas -isc- en noi y voi: «finisciamo» es incorrecto → finiamo. Y sin -isc- tampoco: «capo» no es «entiendo» (capo = jefe) → capisco.",
      en: "No -isc- with noi and voi: 'finisciamo' is wrong → finiamo. And don't leave it out elsewhere: 'capo' means 'boss' → capisco.",
    },
  },
  {
    id: "it-g-ore",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Decir la hora", en: "Telling the time" },
    short: {
      es: "Sono le + número (sono le tre), pero è l'una, è mezzogiorno. «¿A qué hora?» → alle tre, all'una.",
      en: "Sono le + number (sono le tre), but è l'una, è mezzogiorno. 'At what time?' → alle tre, all'una.",
    },
    rule: {
      es: "Como en español, la hora va en plural con el artículo femenino: sono le tre (son las tres), pero en singular è l'una, è mezzogiorno, è mezzanotte. Los minutos se suman con e (e un quarto, e mezza) o se restan con meno (meno un quarto). Para decir a qué hora pasa algo se usa a + artículo: alle sette, all'una, a mezzogiorno.",
      en: "The hour is plural with the feminine article: sono le tre (it's three o'clock), but singular for è l'una, è mezzogiorno, è mezzanotte. Minutes are added with e (e un quarto, e mezza) or taken away with meno (meno un quarto). To say when something happens, use a + article: alle sette, all'una, a mezzogiorno.",
    },
    steps: [
      { es: "¿Es la una, mediodía o medianoche? → è (è l'una).", en: "Is it one o'clock, noon or midnight? → è (è l'una)." },
      { es: "Si no → sono le + número.", en: "Otherwise → sono le + number." },
      { es: "Añade los minutos con e o meno.", en: "Add the minutes with e or meno." },
      { es: "«¿A qué hora?» → alle / all' / a: alle otto.", en: "'At what time?' → alle / all' / a: alle otto." },
    ],
    table: {
      head: ["", "Che ore sono?", "A che ora?"],
      rows: [
        ["1:00", "È l'una.", "all'una"],
        ["3:00", "Sono le tre.", "alle tre"],
        ["3:15", "Sono le tre e un quarto.", "alle tre e un quarto"],
        ["3:30", "Sono le tre e mezza.", "alle tre e mezza"],
        ["2:45", "Sono le tre meno un quarto.", "alle tre meno un quarto"],
        ["12:00", "È mezzogiorno.", "a mezzogiorno"],
      ],
    },
    examples: [
      { target: "Che ore sono? Sono le otto.", gloss: { es: "¿Qué hora es? Son las ocho.", en: "What time is it? It's eight o'clock." } },
      { target: "Mi alzo alle sette.", gloss: { es: "Me levanto a las siete.", en: "I get up at seven." } },
      { target: "Pranzo all'una.", gloss: { es: "Almuerzo a la una.", en: "I have lunch at one." } },
    ],
    pitfalls: {
      es: "Se parece mucho al español, pero «a las» se une en una palabra: «a le sette» es incorrecto → alle sette.",
      en: "Hours are plural: 'È le tre' is wrong → Sono le tre. Only one o'clock, noon and midnight take è: è l'una.",
    },
  },

  // ── u08 ───────────────────────────────────────────────────
  {
    id: "it-g-piacere",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Gustar: piacere", en: "Liking: piacere" },
    short: {
      es: "Como «gustar»: mi piace + singular o infinitivo (mi piace leggere); mi piacciono + plural (mi piacciono i film).",
      en: "mi piace + singular or infinitive (mi piace leggere); mi piacciono + plural (mi piacciono i film).",
    },
    rule: {
      es: "piacere funciona igual que «gustar»: lo que gusta es el sujeto, y la persona va en un pronombre (mi, ti, gli, le…). Por eso el verbo concuerda con la cosa: piace con un singular o un infinitivo, piacciono con un plural. Para negar, non va delante del pronombre: non mi piace.",
      en: "piacere means 'to be pleasing': the thing you like is the subject, and the person is a pronoun (mi, ti, gli, le…). So the verb agrees with the thing: piace with a singular or an infinitive, piacciono with a plural. For the negative, non goes before the pronoun: non mi piace.",
    },
    steps: [
      { es: "¿A quién le gusta? Elige el pronombre: mi, ti, gli, le, ci, vi.", en: "Who likes it? Pick the pronoun: mi, ti, gli, le, ci, vi." },
      { es: "¿Qué gusta? ¿Singular o infinitivo? → piace.", en: "What is liked? Singular or an infinitive? → piace." },
      { es: "¿Plural? → piacciono.", en: "Plural? → piacciono." },
    ],
    table: {
      head: ["", "+ sing. / infinito", "+ plurale"],
      rows: [
        ["a me", "mi piace", "mi piacciono"],
        ["a te", "ti piace", "ti piacciono"],
        ["a lui", "gli piace", "gli piacciono"],
        ["a lei / a Lei", "le / Le piace", "le / Le piacciono"],
        ["a noi", "ci piace", "ci piacciono"],
        ["a voi", "vi piace", "vi piacciono"],
        ["a loro", "gli piace", "gli piacciono"],
      ],
    },
    examples: [
      { target: "Mi piace leggere.", gloss: { es: "Me gusta leer.", en: "I like reading." } },
      { target: "Mi piacciono i film italiani.", gloss: { es: "Me gustan las películas italianas.", en: "I like Italian films." } },
      { target: "Ti piace il calcio?", gloss: { es: "¿Te gusta el fútbol?", en: "Do you like football?" } },
      { target: "A Marco non piace la televisione.", gloss: { es: "A Marco no le gusta la televisión.", en: "Marco doesn't like television." } },
    ],
    pitfalls: {
      es: "Igual que con «gustar», el verbo va en plural si la cosa es plural: «mi piace i film» es incorrecto → mi piacciono i film.",
      en: "Don't say it like English 'I like': 'io piaccio il calcio' is wrong (io piaccio = I am pleasing) → mi piace il calcio, lit. 'football pleases me'.",
    },
  },
  {
    id: "it-g-irregolari",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Verbos irregulares: andare, fare, venire, uscire", en: "Irregular verbs: andare, fare, venire, uscire" },
    short: {
      es: "Se aprenden de memoria: vado / andiamo, faccio / facciamo, vengo / veniamo, esco / usciamo.",
      en: "Learn them by heart: vado / andiamo, faccio / facciamo, vengo / veniamo, esco / usciamo.",
    },
    rule: {
      es: "Estos cuatro verbos son muy frecuentes y no siguen el modelo regular, así que sus formas se aprenden de memoria. Muchas veces la raíz cambia en io, tu, lui y loro, pero noi y voi se parecen al infinitivo: vado pero andiamo, esco pero usciamo. Las terminaciones de noi (-iamo) siguen siendo las de siempre.",
      en: "These four verbs are very common and don't follow the regular pattern, so their forms are learnt by heart. Often the stem changes in io, tu, lui and loro, while noi and voi look like the infinitive: vado but andiamo, esco but usciamo. The noi ending (-iamo) is still the usual one.",
    },
    steps: [
      { es: "Elige el verbo y la persona.", en: "Pick the verb and the person." },
      { es: "¿noi o voi? Casi siempre parte del infinitivo (andiamo, uscite, venite); fare es la excepción: facciamo, fate.", en: "noi or voi? Usually from the infinitive (andiamo, uscite, venite); fare is the exception: facciamo, fate." },
      { es: "Para las demás personas, usa la tabla: vado, esco, vengo, faccio.", en: "For the other persons, use the table: vado, esco, vengo, faccio." },
    ],
    table: {
      head: ["", "andare", "fare", "venire", "uscire"],
      rows: [
        ["io", "vado", "faccio", "vengo", "esco"],
        ["tu", "vai", "fai", "vieni", "esci"],
        ["lui / lei / Lei", "va", "fa", "viene", "esce"],
        ["noi", "andiamo", "facciamo", "veniamo", "usciamo"],
        ["voi", "andate", "fate", "venite", "uscite"],
        ["loro", "vanno", "fanno", "vengono", "escono"],
      ],
    },
    examples: [
      { target: "Vado in palestra due volte alla settimana.", gloss: { es: "Voy al gimnasio dos veces por semana.", en: "I go to the gym twice a week." } },
      { target: "Che cosa fai nel tempo libero?", gloss: { es: "¿Qué haces en tu tiempo libre?", en: "What do you do in your free time?" } },
      { target: "Stasera usciamo con gli amici.", gloss: { es: "Esta noche salimos con los amigos.", en: "Tonight we're going out with friends." } },
      { target: "Vieni al cinema?", gloss: { es: "¿Vienes al cine?", en: "Are you coming to the cinema?" } },
    ],
    pitfalls: {
      es: "Con noi vuelve la raíz del infinitivo: «vamos» es andiamo, no «vadiamo». Igual con uscire: «esciamo» es incorrecto → usciamo.",
      en: "noi and voi go back to the infinitive's stem: 'esciamo' is wrong → usciamo; 'vadiamo' is wrong → andiamo.",
    },
  },
  {
    id: "it-g-modali",
    lang: "it",
    cefr: "A1.2",
    title: { es: "Verbos modales: potere, volere, dovere", en: "Modal verbs: potere, volere, dovere" },
    short: {
      es: "potere / volere / dovere + infinitivo, sin preposición: posso venire, voglio uscire, devo studiare.",
      en: "potere / volere / dovere + infinitive, no preposition: posso venire, voglio uscire, devo studiare.",
    },
    rule: {
      es: "potere (poder), volere (querer) y dovere (deber, tener que) se combinan con un infinitivo, sin ninguna preposición en medio. Los tres son irregulares en presente. Para negar, non va delante del modal: non posso venire.",
      en: "potere (can), volere (to want) and dovere (must, to have to) are followed directly by an infinitive, with no preposition in between. All three are irregular in the present. For the negative, non goes before the modal: non posso venire.",
    },
    steps: [
      { es: "¿Poder, querer o tener que? → potere, volere o dovere.", en: "Can, want or have to? → potere, volere or dovere." },
      { es: "Conjuga el modal según la persona (mira la tabla).", en: "Conjugate the modal for the person (see the table)." },
      { es: "Pon el segundo verbo en infinitivo, justo detrás: devo lavorare.", en: "Put the second verb in the infinitive, straight after: devo lavorare." },
    ],
    table: {
      head: ["", "potere", "volere", "dovere"],
      rows: [
        ["io", "posso", "voglio", "devo"],
        ["tu", "puoi", "vuoi", "devi"],
        ["lui / lei / Lei", "può", "vuole", "deve"],
        ["noi", "possiamo", "vogliamo", "dobbiamo"],
        ["voi", "potete", "volete", "dovete"],
        ["loro", "possono", "vogliono", "devono"],
      ],
    },
    examples: [
      { target: "Vuoi venire al cinema stasera?", gloss: { es: "¿Quieres venir al cine esta noche?", en: "Do you want to come to the cinema tonight?" } },
      { target: "Non posso, devo lavorare.", gloss: { es: "No puedo, tengo que trabajar.", en: "I can't, I have to work." } },
      { target: "Marco non può venire: è malato.", gloss: { es: "Marco no puede venir: está enfermo.", en: "Marco can't come: he's ill." } },
    ],
    pitfalls: {
      es: "«Tengo que» no se traduce con avere: «ho che studiare» es incorrecto → devo studiare. Y tampoco va preposición: «voglio di uscire» → voglio uscire.",
      en: "No 'to' between the verbs: 'voglio di uscire' or 'voglio a uscire' is wrong → voglio uscire. And può has an accent: Marco può venire.",
    },
  },
];
