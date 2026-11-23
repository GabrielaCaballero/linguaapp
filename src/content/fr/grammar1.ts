import type { GrammarPoint } from "../schema";

// Grammar points for French units u01–u08 (content v2.1). Same shape as grammar.ts.
export const grammar1: GrammarPoint[] = [
  // ── u01 ───────────────────────────────────────────────────
  {
    id: "fr-g-tu-vous", lang: "fr", cefr: "A0",
    title: { es: "Tratar de tú o de usted: tu y vous", en: "Informal and formal 'you': tu and vous" },
    short: {
      es: "tu = tú (amigos, familia). vous = usted (desconocidos, trabajo) y también ustedes.",
      en: "tu = informal you (friends, family). vous = formal you (strangers, work) and plural you.",
    },
    rule: {
      es: "El francés distingue tu (confianza) y vous (respeto), como tú y usted. Pero vous va con la 2.ª persona del plural (vous êtes, vous avez), no con la 3.ª como «usted». Además, vous es siempre el plural: a dos amigos también les dices vous.",
      en: "French has tu for people you're close to and vous to show respect. vous takes the 2nd-person plural verb (vous êtes, vous avez), and it's also the plural 'you', even for friends.",
    },
    steps: [
      { es: "¿Hablas con varias personas? → vous.", en: "Talking to several people? → vous." },
      { es: "¿Una persona cercana, joven o de tu familia? → tu.", en: "One person you're close to, young or family? → tu." },
      { es: "¿Un desconocido, un cliente, tu jefe? → vous.", en: "A stranger, a customer, your boss? → vous." },
      { es: "Mantén la misma forma en toda la frase: s'il te plaît con tu, s'il vous plaît con vous.", en: "Keep the same form throughout: s'il te plaît with tu, s'il vous plaît with vous." },
    ],
    table: {
      head: ["", "tu", "vous"],
      rows: [
        ["s'appeler", "tu t'appelles", "vous vous appelez"],
        ["aller", "Ça va ?", "Comment allez-vous ?"],
        ["plaire", "s'il te plaît", "s'il vous plaît"],
        ["excuser", "excuse-moi", "excusez-moi"],
      ],
    },
    examples: [
      { target: "Salut, comment tu t'appelles ?", gloss: { es: "Hola, ¿cómo te llamas?", en: "Hi, what's your name?" } },
      { target: "Bonjour, madame, comment allez-vous ?", gloss: { es: "Buenos días, señora, ¿cómo está?", en: "Good morning, madam, how are you?" } },
    ],
    pitfalls: {
      es: "No uses la 3.ª persona como con «usted»: «Comment va-t-il, madame?» no significa «¿cómo está usted?». Con vous el verbo termina casi siempre en -ez.",
      en: "Don't mix forms: 'Comment tu vous appelez ?' is wrong. With vous the verb almost always ends in -ez.",
    },
  },
  // ── u02 ───────────────────────────────────────────────────
  {
    id: "fr-g-er", lang: "fr", cefr: "A1.1",
    title: { es: "Presente: verbos en -er", en: "Present tense: -er verbs" },
    short: {
      es: "Raíz + -e, -es, -e, -ons, -ez, -ent. Solo -ons y -ez se oyen: je parle = tu parles = ils parlent.",
      en: "Stem + -e, -es, -e, -ons, -ez, -ent. Only -ons and -ez are heard: je parle = tu parles = ils parlent.",
    },
    rule: {
      es: "Casi todos los verbos en -er son regulares. Quita -er y añade la terminación. Las terminaciones -e, -es y -ent no suenan, así que cuatro formas se pronuncian igual; por eso el pronombre es obligatorio.",
      en: "Almost all -er verbs are regular. Drop -er and add the ending. The endings -e, -es and -ent are silent, so four forms sound the same, which is why the subject pronoun is compulsory.",
    },
    steps: [
      { es: "Busca la raíz: habiter → habit-.", en: "Find the stem: habiter → habit-." },
      { es: "Añade la terminación de la persona.", en: "Add the ending for the person." },
      { es: "Delante de vocal o h muda, je → j': j'habite, j'aime.", en: "Before a vowel or silent h, je → j': j'habite, j'aime." },
    ],
    table: {
      head: ["", "parler", "habiter"],
      rows: [["je / j'", "parle", "habite"], ["tu", "parles", "habites"], ["il / elle", "parle", "habite"], ["nous", "parlons", "habitons"], ["vous", "parlez", "habitez"], ["ils / elles", "parlent", "habitent"]],
    },
    examples: [
      { target: "Nous parlons français.", gloss: { es: "Hablamos francés.", en: "We speak French." } },
      { target: "Elles habitent à Nice.", gloss: { es: "Ellas viven en Niza.", en: "They live in Nice." } },
    ],
    pitfalls: {
      es: "La -ent de «ils parlent» no se pronuncia: no digas «parlén». Y nunca escribas «je habite»: siempre j'habite.",
      en: "The -ent of 'ils parlent' is silent: don't pronounce it. And never write 'je habite': always j'habite.",
    },
  },
  {
    id: "fr-g-adj-genre", lang: "fr", cefr: "A1.1",
    title: { es: "Adjetivos: masculino y femenino", en: "Adjectives: masculine and feminine" },
    short: {
      es: "Femenino = masculino + -e (espagnol → espagnole). Si ya termina en -e, no cambia (belge).",
      en: "Feminine = masculine + -e (espagnol → espagnole). If it already ends in -e, no change (belge).",
    },
    rule: {
      es: "El adjetivo concuerda en género y número con el sustantivo. La regla general es añadir -e para el femenino y -s para el plural. Algunas terminaciones cambian: -ien → -ienne, -eux → -euse, -if → -ive.",
      en: "Adjectives agree in gender and number with the noun. The general rule is -e for the feminine and -s for the plural. Some endings change: -ien → -ienne, -eux → -euse, -if → -ive.",
    },
    steps: [
      { es: "¿El sustantivo es femenino? Añade -e (si no termina ya en -e).", en: "Is the noun feminine? Add -e (unless it already ends in -e)." },
      { es: "Revisa las terminaciones especiales: italien → italienne.", en: "Check the special endings: italien → italienne." },
      { es: "¿Plural? Añade -s (no suena).", en: "Plural? Add -s (silent)." },
    ],
    table: {
      head: ["masculin", "féminin"],
      rows: [["espagnol", "espagnole"], ["français", "française"], ["italien", "italienne"], ["heureux", "heureuse"], ["sportif", "sportive"], ["belge", "belge"]],
    },
    examples: [
      { target: "Elle est française.", gloss: { es: "Ella es francesa.", en: "She's French." } },
      { target: "Mon ami est italien et sa femme est italienne aussi.", gloss: { es: "Mi amigo es italiano y su esposa también.", en: "My friend is Italian and so is his wife." } },
    ],
    pitfalls: {
      es: "Las nacionalidades se escriben en minúscula: il est chilien (no «Chilien»). Al pasar al femenino, la consonante final empieza a sonar: petit «petí» → petite «petit».",
      en: "Nationality adjectives are lowercase: il est anglais (not 'Anglais'). In the feminine the final consonant becomes audible: petit → petite.",
    },
  },
  // ── u03 ───────────────────────────────────────────────────
  {
    id: "fr-g-avoir", lang: "fr", cefr: "A1.1",
    title: { es: "«avoir» en presente", en: "avoir: present tense" },
    short: {
      es: "j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. La edad va con avoir: j'ai vingt ans.",
      en: "j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Age uses avoir: j'ai vingt ans.",
    },
    rule: {
      es: "«avoir» (tener) es irregular. Se usa para la edad y en expresiones como avoir faim (tener hambre), avoir soif, avoir froid, avoir peur. Es también el auxiliar más común del passé composé.",
      en: "avoir (to have) is irregular. French uses it for age and in phrases like avoir faim (to be hungry), avoir soif, avoir froid, avoir peur. It's also the main auxiliary of the passé composé.",
    },
    steps: [
      { es: "Elige la persona; con je, escribe j': j'ai.", en: "Pick the person; with je, write j': j'ai." },
      { es: "Cuidado con la liaison: nous avons ≈ «nuzavón», ils ont ≈ «ilzón».", en: "Mind the liaison: nous avons ≈ 'noo-za-von', ils ont ≈ 'eel-zon'." },
    ],
    table: {
      head: ["", "avoir"],
      rows: [["j'", "ai"], ["tu", "as"], ["il / elle / on", "a"], ["nous", "avons"], ["vous", "avez"], ["ils / elles", "ont"]],
    },
    examples: [
      { target: "J'ai trente ans.", gloss: { es: "Tengo treinta años.", en: "I'm thirty." } },
      { target: "Tu as faim ?", gloss: { es: "¿Tienes hambre?", en: "Are you hungry?" } },
      { target: "Ils ont deux enfants.", gloss: { es: "Tienen dos hijos.", en: "They have two children." } },
    ],
    pitfalls: {
      es: "«ils ont» (tienen) y «ils sont» (son) se parecen: escucha la «z» de la liaison en «ils ont».",
      en: "English says 'I'm thirty' and 'I'm hungry'; French uses avoir: j'ai trente ans, j'ai faim. And 'ils ont' (have) ≠ 'ils sont' (are).",
    },
  },
  {
    id: "fr-g-nombres", lang: "fr", cefr: "A1.1",
    title: { es: "Los números: de 70 a 99", en: "Numbers: 70 to 99" },
    short: {
      es: "70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10).",
      en: "70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10).",
    },
    rule: {
      es: "Hasta 69 los números son regulares (trente-deux, quarante-cinq). Después se cuenta por veintes. 21, 31, 41, 51, 61 y 71 llevan «et» (vingt et un, soixante et onze); 81 y 91 no (quatre-vingt-un).",
      en: "Up to 69 numbers are regular (trente-deux, quarante-cinq). After that French counts in twenties. 21, 31, 41, 51, 61 and 71 take 'et' (vingt et un, soixante et onze); 81 and 91 don't (quatre-vingt-un).",
    },
    steps: [
      { es: "Del 70 al 79: soixante + 10…19 (soixante-quinze = 75).", en: "70–79: soixante + 10…19 (soixante-quinze = 75)." },
      { es: "Del 80 al 89: quatre-vingt + 1…9 (quatre-vingt-trois = 83).", en: "80–89: quatre-vingt + 1…9 (quatre-vingt-trois = 83)." },
      { es: "Del 90 al 99: quatre-vingt + 10…19 (quatre-vingt-seize = 96).", en: "90–99: quatre-vingt + 10…19 (quatre-vingt-seize = 96)." },
    ],
    table: {
      head: ["", "France", "Belgique / Suisse"],
      rows: [["70", "soixante-dix", "septante"], ["80", "quatre-vingts", "huitante (CH)"], ["90", "quatre-vingt-dix", "nonante"]],
    },
    examples: [
      { target: "soixante-douze euros", gloss: { es: "setenta y dos euros", en: "seventy-two euros" } },
      { target: "quatre-vingt-dix-neuf", gloss: { es: "noventa y nueve", en: "ninety-nine" } },
    ],
    pitfalls: {
      es: "Al oír «quatre-vingt…» espera al final: quatre-vingt-dix-sept es 97, no 4 ni 20.",
      en: "When you hear 'quatre-vingt…', wait for the end: quatre-vingt-dix-sept is 97.",
    },
  },
  {
    id: "fr-g-questions", lang: "fr", cefr: "A1.1",
    title: { es: "Hacer preguntas", en: "Asking questions" },
    short: {
      es: "Entonación (Tu viens ?), est-ce que (Est-ce que tu viens ?) o inversión (Viens-tu ?).",
      en: "Intonation (Tu viens ?), est-ce que (Est-ce que tu viens ?) or inversion (Viens-tu ?).",
    },
    rule: {
      es: "Hay tres formas de preguntar, de la más informal a la más formal. Con palabras interrogativas: Où tu habites ? / Où est-ce que tu habites ? / Où habites-tu ? La inversión lleva guion.",
      en: "There are three ways to ask, from most informal to most formal. With question words: Où tu habites ? / Où est-ce que tu habites ? / Où habites-tu ? Inversion takes a hyphen.",
    },
    steps: [
      { es: "Al hablar con amigos: frase normal + entonación.", en: "With friends: a normal sentence with rising intonation." },
      { es: "Para ir a lo seguro: est-ce que + frase normal.", en: "To play it safe: est-ce que + normal sentence." },
      { es: "Por escrito o formal: verbo-sujeto con guion (Avez-vous… ?).", en: "Written or formal: verb-subject with a hyphen (Avez-vous… ?)." },
    ],
    table: {
      head: ["", "oui / non", "avec où"],
      rows: [["oral", "Tu as faim ?", "Tu vas où ?"], ["neutre", "Est-ce que tu as faim ?", "Où est-ce que tu vas ?"], ["formel", "As-tu faim ?", "Où vas-tu ?"]],
    },
    examples: [
      { target: "Est-ce que vous parlez anglais ?", gloss: { es: "¿Habla inglés?", en: "Do you speak English?" } },
      { target: "Quel âge as-tu ?", gloss: { es: "¿Cuántos años tienes?", en: "How old are you?" } },
    ],
    pitfalls: {
      es: "«est-ce que» no se traduce: solo marca la pregunta. Con il/elle y vocal se añade -t-: a-t-il ?",
      en: "Don't use 'do': French has no auxiliary for questions. With il/elle after a vowel, add -t-: a-t-il ?",
    },
  },
  // ── u04 ───────────────────────────────────────────────────
  {
    id: "fr-g-articles", lang: "fr", cefr: "A1.1",
    title: { es: "Artículos: le, la, l', les · un, une, des", en: "Articles: le, la, l', les · un, une, des" },
    short: {
      es: "le (m), la (f), l' (vocal), les (pl.) · un (m), une (f), des (pl.). El plural «des» no se omite.",
      en: "le (m), la (f), l' (vowel), les (pl.) · un (m), une (f), des (pl.). Plural 'des' can't be left out.",
    },
    rule: {
      es: "Todo sustantivo es masculino o femenino; apréndelo con su artículo. le y la se vuelven l' delante de vocal o h muda. En plural no se distingue el género: les, des.",
      en: "Every noun is masculine or feminine; learn it with its article. le and la become l' before a vowel or silent h. In the plural there's no gender difference: les, des.",
    },
    steps: [
      { es: "¿Algo concreto o conocido? → le / la / les. ¿Uno cualquiera? → un / une / des.", en: "Something specific or known? → le / la / les. Any one? → un / une / des." },
      { es: "¿Empieza por vocal o h muda? → l' (l'eau, l'hôtel).", en: "Starts with a vowel or silent h? → l' (l'eau, l'hôtel)." },
      { es: "¿Plural? → les / des, sin importar el género.", en: "Plural? → les / des, whatever the gender." },
    ],
    table: {
      head: ["", "défini", "indéfini"],
      rows: [["masculin", "le café", "un café"], ["féminin", "la bière", "une bière"], ["voyelle", "l'eau, l'hôtel", "un hôtel"], ["pluriel", "les cafés", "des cafés"]],
    },
    examples: [
      { target: "Je voudrais un croissant et une bière.", gloss: { es: "Quisiera una medialuna y una cerveza.", en: "I'd like a croissant and a beer." } },
      { target: "L'addition, s'il vous plaît.", gloss: { es: "La cuenta, por favor.", en: "The bill, please." } },
    ],
    pitfalls: {
      es: "El género cambia a menudo respecto al español: le lait, le sel, la mer, la dent. Y «des» no se omite: j'ai des amis (tengo amigos).",
      en: "English often has no article where French needs one: j'aime le café (I like coffee), j'ai des amis (I have friends).",
    },
  },
  // ── u05 ───────────────────────────────────────────────────
  {
    id: "fr-g-possessifs", lang: "fr", cefr: "A1.1",
    title: { es: "Posesivos: mon, ma, mes…", en: "Possessives: mon, ma, mes…" },
    short: {
      es: "Concuerdan con lo poseído: mon père, ma mère, mes parents. Delante de vocal, mon/ton/son: mon amie.",
      en: "They agree with the thing owned: mon père, ma mère, mes parents. Before a vowel, mon/ton/son: mon amie.",
    },
    rule: {
      es: "El posesivo concuerda con el sustantivo que acompaña, no con el poseedor: sa maison = su casa (de él o de ella). Delante de vocal o h muda, ma/ta/sa se vuelven mon/ton/son para evitar el choque de vocales.",
      en: "The possessive agrees with the noun it goes with, not with the owner: sa maison = his or her house. Before a vowel or silent h, ma/ta/sa become mon/ton/son.",
    },
    steps: [
      { es: "¿De quién es? → elige la persona (mon, ton, son, notre, votre, leur).", en: "Whose is it? → pick the person (mon, ton, son, notre, votre, leur)." },
      { es: "¿El sustantivo es masculino, femenino o plural? → mon / ma / mes.", en: "Is the noun masculine, feminine or plural? → mon / ma / mes." },
      { es: "¿Empieza por vocal? → mon / ton / son también en femenino.", en: "Does it start with a vowel? → mon / ton / son even if feminine." },
    ],
    table: {
      head: ["", "masc.", "fém.", "pluriel"],
      rows: [["je", "mon", "ma", "mes"], ["tu", "ton", "ta", "tes"], ["il / elle", "son", "sa", "ses"], ["nous", "notre", "notre", "nos"], ["vous", "votre", "votre", "vos"], ["ils / elles", "leur", "leur", "leurs"]],
    },
    examples: [
      { target: "Ma sœur et mon frère habitent à Lyon.", gloss: { es: "Mi hermana y mi hermano viven en Lyon.", en: "My sister and my brother live in Lyon." } },
      { target: "C'est mon amie Sophie.", gloss: { es: "Es mi amiga Sophie.", en: "This is my friend Sophie." } },
      { target: "Ils adorent leurs enfants.", gloss: { es: "Adoran a sus hijos.", en: "They adore their children." } },
    ],
    pitfalls: {
      es: "«sa» no significa «de ella»: Paul et sa mère = Paul y su madre. Y nunca «ma amie»: mon amie.",
      en: "'son/sa' don't show the owner's gender: Marie et son frère = Marie and her brother. And never 'ma amie': mon amie.",
    },
  },
  {
    id: "fr-g-pluriel", lang: "fr", cefr: "A1.1",
    title: { es: "El plural de los sustantivos", en: "Plural nouns" },
    short: {
      es: "Casi siempre + -s (muda). -eau/-eu → -x, -al → -aux. Lo que ya termina en -s, -x, -z no cambia.",
      en: "Usually + -s (silent). -eau/-eu → -x, -al → -aux. Words ending in -s, -x, -z don't change.",
    },
    rule: {
      es: "La mayoría de los sustantivos añaden una -s que no se pronuncia: el plural se oye sobre todo en el artículo (le / les). Hay algunas terminaciones especiales y unas pocas palabras irregulares (un œil → des yeux).",
      en: "Most nouns add an -s that isn't pronounced: you mostly hear the plural in the article (le / les). A few endings are special, and a few words are irregular (un œil → des yeux).",
    },
    steps: [
      { es: "¿Termina en -s, -x o -z? → no cambia (le fils, les fils).", en: "Ends in -s, -x or -z? → no change (le fils, les fils)." },
      { es: "¿Termina en -eau o -eu? → añade -x.", en: "Ends in -eau or -eu? → add -x." },
      { es: "¿Termina en -al? → casi siempre -aux.", en: "Ends in -al? → usually -aux." },
      { es: "Si no, añade -s.", en: "Otherwise, add -s." },
    ],
    table: {
      head: ["singulier", "pluriel"],
      rows: [["un frère", "des frères"], ["un gâteau", "des gâteaux"], ["un cheveu", "des cheveux"], ["un journal", "des journaux"], ["un pays", "des pays"], ["un œil", "des yeux"]],
    },
    examples: [
      { target: "J'ai deux frères.", gloss: { es: "Tengo dos hermanos.", en: "I have two brothers." } },
      { target: "Les animaux de la ferme.", gloss: { es: "Los animales de la granja.", en: "The farm animals." } },
    ],
    pitfalls: {
      es: "No pronuncies la -s del plural: «les frères» suena «le frer». Solo suena en liaison delante de vocal: les amis ≈ «lezamí».",
      en: "Don't pronounce the plural -s: it's only heard in liaison before a vowel (les amis ≈ 'lay-za-mee').",
    },
  },
  // ── u06 ───────────────────────────────────────────────────
  {
    id: "fr-g-il-y-a", lang: "fr", cefr: "A1.1",
    title: { es: "«il y a» (hay)", en: "il y a (there is / there are)" },
    short: {
      es: "il y a = hay, en singular y en plural. Negativo: il n'y a pas de…",
      en: "il y a = there is / there are. Negative: il n'y a pas de…",
    },
    rule: {
      es: "«il y a» no cambia aunque lo que sigue sea plural: il y a trois chambres. En negativo, el artículo indefinido se vuelve «de»: il n'y a pas de jardin. En pasado: il y avait.",
      en: "'il y a' doesn't change even when what follows is plural: il y a trois chambres. In the negative the indefinite article becomes 'de': il n'y a pas de jardin. Past: il y avait.",
    },
    steps: [
      { es: "¿Hablas de la existencia de algo? → il y a + un/une/des.", en: "Saying something exists? → il y a + un/une/des." },
      { es: "¿Negativo? → il n'y a pas de / d'.", en: "Negative? → il n'y a pas de / d'." },
      { es: "¿Pregunta? → Est-ce qu'il y a… ? / Il y a… ?", en: "Question? → Est-ce qu'il y a… ? / Il y a… ?" },
    ],
    table: {
      head: ["", "il y a"],
      rows: [["affirmatif", "Il y a un parc."], ["pluriel", "Il y a deux parcs."], ["négatif", "Il n'y a pas de parc."], ["question", "Est-ce qu'il y a un parc ?"]],
    },
    examples: [
      { target: "Il y a une boulangerie dans ma rue.", gloss: { es: "Hay una panadería en mi calle.", en: "There's a bakery on my street." } },
      { target: "Il n'y a pas de métro ici.", gloss: { es: "Aquí no hay metro.", en: "There's no metro here." } },
    ],
    pitfalls: {
      es: "No digas «il a» (él tiene) ni «il est» para «hay»: hace falta la y. Y no uses «ils sont» con plurales: il y a des magasins.",
      en: "Don't say 'il a' (he has) or 'il est'; you need the y. And no plural form: il y a des magasins.",
    },
  },
  {
    id: "fr-g-villes-pays", lang: "fr", cefr: "A1.1",
    title: { es: "Preposiciones con ciudades y países", en: "Prepositions with cities and countries" },
    short: {
      es: "à + ciudad · en + país femenino · au + país masculino · aux + país plural.",
      en: "à + city · en + feminine country · au + masculine country · aux + plural country.",
    },
    rule: {
      es: "Para decir «en» o «a» un lugar, el francés mira qué tipo de lugar es. Los países que terminan en -e suelen ser femeninos (la France, l'Espagne) y van con «en»; los demás son masculinos (le Canada, le Pérou) y van con «au».",
      en: "To say 'in' or 'to' a place, French looks at what kind of place it is. Countries ending in -e are usually feminine (la France, l'Espagne) and take 'en'; the others are masculine (le Canada, le Pérou) and take 'au'.",
    },
    steps: [
      { es: "¿Es una ciudad? → à (à Lima).", en: "Is it a city? → à (à Lima)." },
      { es: "¿País femenino o que empieza por vocal? → en (en Argentine, en Iran).", en: "Feminine country or starting with a vowel? → en (en Argentine, en Iran)." },
      { es: "¿País masculino? → au (au Japon). ¿Plural? → aux (aux États-Unis).", en: "Masculine country? → au (au Japon). Plural? → aux (aux États-Unis)." },
      { es: "Para el origen: de / d' (de France), du (du Chili), des (des États-Unis).", en: "For origin: de / d' (de France), du (du Chili), des (des États-Unis)." },
    ],
    table: {
      head: ["", "habiter…", "venir…"],
      rows: [["ville", "à Paris", "de Paris"], ["pays fém.", "en Espagne", "d'Espagne"], ["pays masc.", "au Mexique", "du Mexique"], ["pluriel", "aux États-Unis", "des États-Unis"]],
    },
    examples: [
      { target: "J'habite à Lyon, en France.", gloss: { es: "Vivo en Lyon, en Francia.", en: "I live in Lyon, in France." } },
      { target: "Mon frère travaille au Canada.", gloss: { es: "Mi hermano trabaja en Canadá.", en: "My brother works in Canada." } },
    ],
    pitfalls: {
      es: "El «en» español no sirve para todo: «en Paris» es incorrecto (à Paris). Y le Mexique es masculino aunque termine en -e: au Mexique.",
      en: "'in' isn't always 'en': it's à Paris, not 'en Paris'. And le Mexique is masculine despite the -e: au Mexique.",
    },
  },
  // ── u07 ───────────────────────────────────────────────────
  {
    id: "fr-g-pronominaux", lang: "fr", cefr: "A1.2",
    title: { es: "Verbos pronominales: se lever", en: "Reflexive verbs: se lever" },
    short: {
      es: "je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.",
      en: "je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.",
    },
    rule: {
      es: "Funcionan como «levantarse»: el pronombre va delante del verbo conjugado. Delante de vocal, me/te/se se vuelven m'/t'/s' (je m'habille). En el passé composé siempre van con être: je me suis levé/e.",
      en: "The pronoun (myself, yourself…) goes before the conjugated verb. Before a vowel, me/te/se become m'/t'/s' (je m'habille). In the passé composé they always take être: je me suis levé/e.",
    },
    steps: [
      { es: "Elige el sujeto y su pronombre: je → me, tu → te, il → se…", en: "Pick the subject and its pronoun: je → me, tu → te, il → se…" },
      { es: "Conjuga el verbo normalmente.", en: "Conjugate the verb as usual." },
      { es: "En negativo, ne va antes del pronombre: je ne me lève pas.", en: "In the negative, ne goes before the pronoun: je ne me lève pas." },
    ],
    table: {
      head: ["", "se lever", "s'habiller"],
      rows: [["je", "me lève", "m'habille"], ["tu", "te lèves", "t'habilles"], ["il / elle", "se lève", "s'habille"], ["nous", "nous levons", "nous habillons"], ["vous", "vous levez", "vous habillez"], ["ils / elles", "se lèvent", "s'habillent"]],
    },
    examples: [
      { target: "Je me lève à sept heures.", gloss: { es: "Me levanto a las siete.", en: "I get up at seven." } },
      { target: "Les enfants se couchent tôt.", gloss: { es: "Los niños se acuestan temprano.", en: "The children go to bed early." } },
    ],
    pitfalls: {
      es: "No olvides el pronombre con nous y vous: nous nous levons (repetido). En negativo: je ne me lève pas, nunca «je me ne».",
      en: "English often has no 'myself': I get up = je me lève. Don't forget the doubled pronoun: nous nous levons.",
    },
  },
  {
    id: "fr-g-heure", lang: "fr", cefr: "A1.2",
    title: { es: "Decir la hora", en: "Telling the time" },
    short: {
      es: "Il est + número + heure(s): il est deux heures et quart / et demie / moins le quart.",
      en: "Il est + number + heure(s): il est deux heures et quart / et demie / moins le quart.",
    },
    rule: {
      es: "La hora siempre se dice con «il est» y la palabra heure(s), que no se omite. En la vida diaria se usa el reloj de 12 horas; en horarios, el de 24 (dix-sept heures trente). «a las» = à: à huit heures.",
      en: "Time always uses 'il est' and the word heure(s), which can't be left out. Everyday speech uses the 12-hour clock; timetables use 24 hours (dix-sept heures trente). 'at' = à: à huit heures.",
    },
    steps: [
      { es: "Empieza con «Il est» y la hora: il est trois heures.", en: "Start with 'Il est' and the hour: il est trois heures." },
      { es: "Añade los minutos: et quart, et demie, vingt, moins dix…", en: "Add the minutes: et quart, et demie, vingt, moins dix…" },
      { es: "Para «a las»: à + hora.", en: "For 'at': à + time." },
    ],
    table: {
      head: ["", "l'heure"],
      rows: [["1:00", "une heure"], ["2:15", "deux heures et quart"], ["2:30", "deux heures et demie"], ["2:45", "trois heures moins le quart"], ["12:00", "midi / minuit"]],
    },
    examples: [
      { target: "Il est huit heures et demie.", gloss: { es: "Son las ocho y media.", en: "It's half past eight." } },
      { target: "Le train part à dix-sept heures dix.", gloss: { es: "El tren sale a las 17:10.", en: "The train leaves at 17:10." } },
    ],
    pitfalls: {
      es: "En español decimos «son las…»; en francés siempre singular: il est cinq heures. Y «heure» nunca se omite.",
      en: "'heure(s)' is never dropped: il est cinq heures, not 'il est cinq'.",
    },
  },
  {
    id: "fr-g-ir", lang: "fr", cefr: "A1.2",
    title: { es: "Verbos en -ir como «finir»", en: "-ir verbs like finir" },
    short: {
      es: "je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
      en: "je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
    },
    rule: {
      es: "Los verbos del segundo grupo (finir, choisir, réussir, grandir) añaden -iss- en plural. Otros verbos en -ir son irregulares (partir, sortir, dormir: je pars, nous partons) y se aprenden aparte.",
      en: "Second-group verbs (finir, choisir, réussir, grandir) add -iss- in the plural. Other -ir verbs are irregular (partir, sortir, dormir: je pars, nous partons) and learnt separately.",
    },
    steps: [
      { es: "Quita -ir: fin-.", en: "Drop -ir: fin-." },
      { es: "Singular: -is, -is, -it.", en: "Singular: -is, -is, -it." },
      { es: "Plural: -issons, -issez, -issent.", en: "Plural: -issons, -issez, -issent." },
    ],
    table: {
      head: ["", "finir", "choisir"],
      rows: [["je", "finis", "choisis"], ["tu", "finis", "choisis"], ["il / elle", "finit", "choisit"], ["nous", "finissons", "choisissons"], ["vous", "finissez", "choisissez"], ["ils / elles", "finissent", "choisissent"]],
    },
    examples: [
      { target: "Je finis le travail à dix-huit heures.", gloss: { es: "Salgo del trabajo a las seis de la tarde.", en: "I finish work at 6 p.m." } },
      { target: "Vous choisissez quel dessert ?", gloss: { es: "¿Qué postre elige?", en: "Which dessert are you having?" } },
    ],
    pitfalls: {
      es: "No apliques -iss- a partir o sortir: nous partons (no «partissons»).",
      en: "Don't add -iss- to partir or sortir: nous partons (not 'partissons').",
    },
  },
  // ── u08 ───────────────────────────────────────────────────
  {
    id: "fr-g-negation", lang: "fr", cefr: "A1.2",
    title: { es: "La negación: ne… pas", en: "Negation: ne… pas" },
    short: {
      es: "ne + verbo + pas. Tras la negación, un/une/des/du/de la → de: je n'ai pas de voiture.",
      en: "ne + verb + pas. After a negative, un/une/des/du/de la → de: je n'ai pas de voiture.",
    },
    rule: {
      es: "La negación tiene dos partes que rodean al verbo conjugado. Otras negaciones funcionan igual: ne… jamais (nunca), ne… plus (ya no), ne… rien (nada), ne… personne (nadie). Los artículos indefinidos y partitivos se vuelven «de», pero le/la/les no cambian.",
      en: "Negation has two parts around the conjugated verb. Others work the same way: ne… jamais (never), ne… plus (no longer), ne… rien (nothing), ne… personne (nobody). Indefinite and partitive articles become 'de'; le/la/les don't change.",
    },
    steps: [
      { es: "Pon ne (n' delante de vocal) antes del verbo y pas después.", en: "Put ne (n' before a vowel) before the verb and pas after it." },
      { es: "¿Hay un / une / des / du / de la después? → de / d'.", en: "Is un / une / des / du / de la after it? → de / d'." },
      { es: "¿Hay le / la / les? → no cambian: je n'aime pas le café.", en: "Is it le / la / les? → no change: je n'aime pas le café." },
    ],
    table: {
      head: ["affirmatif", "négatif"],
      rows: [["Je parle.", "Je ne parle pas."], ["J'aime le thé.", "Je n'aime pas le thé."], ["J'ai une voiture.", "Je n'ai pas de voiture."], ["Je bois du café.", "Je ne bois jamais de café."]],
    },
    examples: [
      { target: "Je ne sais pas.", gloss: { es: "No sé.", en: "I don't know." } },
      { target: "Il n'y a plus de pain.", gloss: { es: "Ya no hay pan.", en: "There's no more bread." } },
    ],
    pitfalls: {
      es: "«pas» es obligatorio por escrito: «je ne sais» no basta. Al hablar se omite el ne (je sais pas), pero nunca el pas.",
      en: "No 'do' in French negatives: 'I don't speak' = je ne parle pas. In speech ne is often dropped (je sais pas), never pas.",
    },
  },
  {
    id: "fr-g-faire-jouer", lang: "fr", cefr: "A1.2",
    title: { es: "faire du, jouer au, jouer du", en: "faire du, jouer au, jouer du" },
    short: {
      es: "faire de + actividad (du vélo) · jouer à + juego o deporte (au foot) · jouer de + instrumento (du piano).",
      en: "faire de + activity (du vélo) · jouer à + game or sport (au foot) · jouer de + instrument (du piano).",
    },
    rule: {
      es: "Para hablar de actividades, el francés usa faire + de + artículo. Con juegos y deportes de equipo usa jouer à; con instrumentos, jouer de. Recuerda las contracciones: de + le = du, à + le = au.",
      en: "For activities French uses faire + de + article. Games and team sports take jouer à; instruments take jouer de. Remember the contractions: de + le = du, à + le = au.",
    },
    steps: [
      { es: "¿Instrumento? → jouer de (du, de la, de l').", en: "An instrument? → jouer de (du, de la, de l')." },
      { es: "¿Juego o deporte con pelota? → jouer à (au, à la, aux).", en: "A game or ball sport? → jouer à (au, à la, aux)." },
      { es: "¿Otra actividad? → faire de (du yoga, de la natation).", en: "Another activity? → faire de (du yoga, de la natation)." },
    ],
    table: {
      head: ["", "masc.", "fém."],
      rows: [["faire de", "du ski", "de la danse"], ["jouer à", "au tennis", "à la pétanque"], ["jouer de", "du piano", "de la guitare"]],
    },
    examples: [
      { target: "Le dimanche, je fais du vélo.", gloss: { es: "Los domingos ando en bici.", en: "On Sundays I go cycling." } },
      { target: "Elle joue du violon.", gloss: { es: "Toca el violín.", en: "She plays the violin." } },
    ],
    pitfalls: {
      es: "«Tocar» un instrumento no es «toucher»: jouer du piano. Y nunca «jouer le tennis»: jouer au tennis.",
      en: "English 'play' covers both: French says jouer au tennis but jouer du piano.",
    },
  },
];
