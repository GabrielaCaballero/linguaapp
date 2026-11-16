import type { GrammarPoint } from "../schema";

// Grammar points for German units 1–8 (content v2.1): one card per pattern item.
// Same shape as grammar.ts: rule, how to work it out, table, examples, classic mistake.
export const grammar1: GrammarPoint[] = [
  // ── u01 ──────────────────────────────────────────────────
  {
    id: "de-g-du-sie",
    lang: "de",
    cefr: "A0",
    title: { es: "«du» y «Sie»: tú y usted", en: "du and Sie: informal and formal 'you'" },
    short: {
      es: "«du» con amigos y familia; «Sie» (con mayúscula) con desconocidos, y el verbo en -en: Wie heißen Sie?",
      en: "du with friends and family; Sie (capital S) with strangers, and the verb takes -en: Wie heißen Sie?",
    },
    rule: {
      es: "«du» es el trato de confianza: amigos, familia, niños, compañeros de clase. «Sie» es como «usted»: desconocidos, tiendas, oficinas; siempre se escribe con mayúscula y el verbo va en la forma -en, aunque hables con una sola persona.",
      en: "du is for people you are close to: friends, family, children, classmates. Sie is the polite form for strangers, shops and offices; it is always capitalised, and the verb takes the -en form even when you talk to just one person.",
    },
    steps: [
      { es: "¿Con quién hablas? Amigo, familiar, niño → du. Desconocido, tienda, oficina → Sie.", en: "Who are you talking to? Friend, family, child → du. Stranger, shop, office → Sie." },
      { es: "Si dudas, usa Sie: es más seguro. La otra persona te dirá si prefiere du.", en: "If in doubt, use Sie: it's the safe choice. The other person will tell you if they prefer du." },
      { es: "Con du el verbo termina en -st (heißt es la excepción: Wie heißt du?). Con Sie, en -en: Wie heißen Sie?", en: "With du the verb ends in -st (heißt is the exception: Wie heißt du?). With Sie it ends in -en: Wie heißen Sie?" },
      { es: "Cambian también otras palabras: dir → Ihnen (Wie geht es Ihnen?).", en: "Other words change too: dir → Ihnen (Wie geht es Ihnen?)." },
    ],
    table: {
      head: ["", "du", "Sie"],
      rows: [
        ["heißen", "Wie heißt du?", "Wie heißen Sie?"],
        ["sein", "Bist du Lena?", "Sind Sie Frau Weber?"],
        ["dir / Ihnen", "Wie geht es dir?", "Wie geht es Ihnen?"],
        ["Tschüss / Auf Wiedersehen", "Tschüss!", "Auf Wiedersehen!"],
      ],
    },
    examples: [
      { target: "Guten Tag! Wie heißen Sie?", gloss: { es: "¡Buenos días! ¿Cómo se llama usted?", en: "Good day! What's your name? (formal)" } },
      { target: "Hallo! Ich bin Lena. Und du?", gloss: { es: "¡Hola! Soy Lena. ¿Y tú?", en: "Hi! I'm Lena. And you? (informal)" } },
      { target: "Wie geht es Ihnen?", gloss: { es: "¿Cómo está usted?", en: "How are you? (formal)" } },
    ],
    pitfalls: {
      es: "«Wie heißt Sie?» está mal: con Sie el verbo siempre va en -en, como con «ellos». Lo correcto es Wie heißen Sie? Y ojo con la mayúscula: «sie» en minúscula significa «ella» o «ellos».",
      en: "'Wie heißt Sie?' is wrong: with Sie the verb always takes -en, like with 'they'. Say Wie heißen Sie? And mind the capital: lower-case sie means 'she' or 'they'.",
    },
  },

  // ── u02 ──────────────────────────────────────────────────
  {
    id: "de-g-verb-zwei",
    lang: "de",
    cefr: "A1.1",
    title: { es: "El verbo en segunda posición", en: "The verb in second position" },
    short: {
      es: "En la afirmación el verbo conjugado es el 2.º elemento; si empiezas con otra cosa, el sujeto va tras el verbo.",
      en: "In a statement the conjugated verb is element 2; if you start with something else, the subject follows the verb.",
    },
    rule: {
      es: "En una oración afirmativa alemana el verbo conjugado ocupa siempre el 2.º lugar. En el 1.er lugar puede ir el sujeto, un lugar o un tiempo; si no es el sujeto, el sujeto se pasa justo detrás del verbo. Cuenta bloques, no palabras: «In Berlin» es un solo bloque.",
      en: "In a German statement the conjugated verb always takes 2nd place. Place 1 can be the subject, a place or a time; if it isn't the subject, the subject moves to just after the verb. Count blocks, not words: 'In Berlin' is one block.",
    },
    steps: [
      { es: "Elige qué va primero: el sujeto, un lugar (In Berlin) o un tiempo (Jetzt).", en: "Choose what comes first: the subject, a place (In Berlin) or a time (Jetzt)." },
      { es: "Cuenta bloques, no palabras: «in Berlin» = 1 bloque.", en: "Count blocks, not words: 'in Berlin' = 1 block." },
      { es: "Pon el verbo conjugado en el bloque 2.", en: "Put the conjugated verb in block 2." },
      { es: "Si el sujeto no está en el 1.er lugar, ponlo justo después del verbo.", en: "If the subject isn't in place 1, put it right after the verb." },
    ],
    table: {
      head: ["1", "2 (Verb)", "…"],
      rows: [
        ["Ich", "wohne", "in Berlin."],
        ["In Berlin", "wohne", "ich."],
        ["Jetzt", "wohne", "ich in Wien."],
        ["Marco", "kommt", "aus Italien."],
        ["Woher", "kommst", "du?"],
      ],
    },
    examples: [
      { target: "In Berlin wohne ich.", gloss: { es: "En Berlín vivo yo.", en: "In Berlin is where I live." } },
      { target: "Jetzt wohne ich in Wien.", gloss: { es: "Ahora vivo en Viena.", en: "Now I live in Vienna." } },
      { target: "Ich komme aus Italien, aber ich wohne in Hamburg.", gloss: { es: "Soy de Italia, pero vivo en Hamburgo.", en: "I'm from Italy, but I live in Hamburg." } },
    ],
    pitfalls: {
      es: "«Jetzt ich wohne in Wien» copia el orden del español («Ahora yo vivo…»). En alemán el verbo no se mueve del 2.º lugar, así que el sujeto pasa detrás: Jetzt wohne ich in Wien.",
      en: "'Jetzt ich wohne in Wien' copies English order ('Now I live…'). In German the verb stays in place 2, so the subject moves behind it: Jetzt wohne ich in Wien.",
    },
  },
  {
    id: "de-g-aus-der",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Países con y sin artículo", en: "Countries with and without an article" },
    short: {
      es: "Casi todos los países van sin artículo (aus Spanien); unos pocos sí: aus der Schweiz, aus der Türkei, aus den USA.",
      en: "Most countries take no article (aus Spanien); a few do: aus der Schweiz, aus der Türkei, aus den USA.",
    },
    rule: {
      es: "La mayoría de los países se usan sin artículo: aus Deutschland, in Spanien. Unos pocos son femeninos (die Schweiz, die Türkei) o plurales (die USA) y llevan siempre artículo. Después de «aus» el artículo cambia, porque «aus» pide dativo: die → der, y en plural die → den.",
      en: "Most countries are used without an article: aus Deutschland, in Spanien. A few are feminine (die Schweiz, die Türkei) or plural (die USA) and always keep their article. After aus the article changes, because aus takes the dative case: die → der, plural die → den.",
    },
    steps: [
      { es: "Aprende el país con su artículo si lo tiene: die Schweiz, die USA.", en: "Learn the country with its article if it has one: die Schweiz, die USA." },
      { es: "¿No tiene artículo? Solo aus + país: aus Österreich.", en: "No article? Just aus + country: aus Österreich." },
      { es: "¿Femenino? aus der …  ¿Plural? aus den …", en: "Feminine? aus der …  Plural? aus den …" },
      { es: "Con «in» (dónde vives) pasa lo mismo: in der Schweiz, in den USA.", en: "The same happens with in (where you live): in der Schweiz, in den USA." },
    ],
    table: {
      head: ["Land", "aus …", "in …"],
      rows: [
        ["Spanien", "aus Spanien", "in Spanien"],
        ["Österreich", "aus Österreich", "in Österreich"],
        ["die Schweiz", "aus der Schweiz", "in der Schweiz"],
        ["die Türkei", "aus der Türkei", "in der Türkei"],
        ["die USA", "aus den USA", "in den USA"],
      ],
    },
    examples: [
      { target: "Lena kommt aus der Schweiz.", gloss: { es: "Lena es de Suiza.", en: "Lena is from Switzerland." } },
      { target: "Ich komme aus Spanien.", gloss: { es: "Soy de España.", en: "I'm from Spain." } },
      { target: "Wir wohnen in den USA.", gloss: { es: "Vivimos en Estados Unidos.", en: "We live in the USA." } },
    ],
    pitfalls: {
      es: "«aus die Schweiz» usa el artículo del diccionario, pero después de aus die se vuelve der: aus der Schweiz. Y al revés, «aus der Spanien» sobra: España no lleva artículo, aus Spanien.",
      en: "'aus die Schweiz' uses the dictionary article, but after aus, die becomes der: aus der Schweiz. And the other way round, 'aus der Spanien' is wrong: Spain has no article, aus Spanien.",
    },
  },

  // ── u03 ──────────────────────────────────────────────────
  {
    id: "de-g-zehn",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Los números del 13 al 19", en: "Numbers 13 to 19" },
    short: {
      es: "13–19 = unidad + zehn, todo junto (dreizehn, vierzehn). Ojo: sechzehn pierde la -s y siebzehn pierde -en.",
      en: "13–19 = unit + zehn, as one word (dreizehn, vierzehn). Watch out: sechzehn drops the -s, siebzehn drops -en.",
    },
    rule: {
      es: "Del 13 al 19 se dice primero la unidad y luego zehn (diez), en una sola palabra, como en inglés (thirteen). Dos números se acortan: sechs → sechzehn y sieben → siebzehn. El 11 y el 12 tienen nombre propio: elf, zwölf.",
      en: "From 13 to 19 you say the unit first and then zehn (ten), as one word, just like English 'thirteen'. Two of them are shortened: sechs → sechzehn and sieben → siebzehn. 11 and 12 have their own names: elf, zwölf.",
    },
    steps: [
      { es: "Toma la unidad: drei, vier, fünf…", en: "Take the unit: drei, vier, fünf…" },
      { es: "Añade zehn sin espacio: dreizehn.", en: "Add zehn with no space: dreizehn." },
      { es: "Revisa el 16 y el 17: sechzehn, siebzehn.", en: "Check 16 and 17: sechzehn, siebzehn." },
    ],
    table: {
      head: ["", "Einer", "+ zehn"],
      rows: [
        ["13", "drei", "dreizehn"],
        ["14", "vier", "vierzehn"],
        ["15", "fünf", "fünfzehn"],
        ["16", "sechs", "sechzehn"],
        ["17", "sieben", "siebzehn"],
        ["18", "acht", "achtzehn"],
        ["19", "neun", "neunzehn"],
      ],
    },
    examples: [
      { target: "Ich bin siebzehn Jahre alt.", gloss: { es: "Tengo diecisiete años.", en: "I'm seventeen years old." } },
      { target: "Meine Tochter ist dreizehn.", gloss: { es: "Mi hija tiene trece años.", en: "My daughter is thirteen." } },
      { target: "Das macht sechzehn Euro.", gloss: { es: "Son dieciséis euros.", en: "That comes to sixteen euros." } },
    ],
    pitfalls: {
      es: "«sechszehn» y «siebenzehn» parecen lógicos, pero se acortan: sechzehn, siebzehn. Y no sigas el orden de «dieciséis» (diez y seis): «zehnsechs» no existe.",
      en: "'sechszehn' and 'siebenzehn' look logical, but both are shortened: sechzehn, siebzehn. It works like English: unit first, so never 'zehnsechs'.",
    },
  },
  {
    id: "de-g-einundzwanzig",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Los números del 21 al 99", en: "Numbers 21 to 99" },
    short: {
      es: "Desde 21: unidad + und + decena, todo junto: einundzwanzig (21), dreiundvierzig (43). El 1 se vuelve ein.",
      en: "From 21: unit + und + tens, all as one word: einundzwanzig (21), dreiundvierzig (43). One becomes ein.",
    },
    rule: {
      es: "En alemán se dice primero la unidad, luego «und» y al final la decena, todo en una sola palabra: 43 = drei-und-vierzig («tres y cuarenta»). eins pierde la -s: einundzwanzig. Las decenas terminan en -zig, salvo dreißig.",
      en: "German says the unit first, then und, then the tens, all as one word: 43 = drei-und-vierzig ('three-and-forty'). eins loses its -s: einundzwanzig. The tens end in -zig, except dreißig.",
    },
    steps: [
      { es: "Separa el número: 43 = 3 + 40.", en: "Split the number: 43 = 3 + 40." },
      { es: "Di primero la unidad: drei.", en: "Say the unit first: drei." },
      { es: "Añade und + la decena: dreiundvierzig.", en: "Add und + the tens: dreiundvierzig." },
      { es: "Escríbelo junto; si la unidad es 1, usa ein: einunddreißig.", en: "Write it as one word; if the unit is 1, use ein: einunddreißig." },
    ],
    table: {
      head: ["", "Zehner", "Beispiel"],
      rows: [
        ["20", "zwanzig", "einundzwanzig (21)"],
        ["30", "dreißig", "zweiunddreißig (32)"],
        ["40", "vierzig", "dreiundvierzig (43)"],
        ["50", "fünfzig", "fünfundfünfzig (55)"],
        ["60", "sechzig", "sechsundsechzig (66)"],
        ["70", "siebzig", "siebenundsiebzig (77)"],
        ["80 · 90", "achtzig · neunzig", "neunundneunzig (99)"],
      ],
    },
    examples: [
      { target: "Ich bin zweiunddreißig Jahre alt.", gloss: { es: "Tengo treinta y dos años.", en: "I'm thirty-two years old." } },
      { target: "Meine Mutter ist achtundfünfzig.", gloss: { es: "Mi mamá tiene cincuenta y ocho años.", en: "My mother is fifty-eight." } },
      { target: "Das macht einundzwanzig Euro.", gloss: { es: "Son veintiún euros.", en: "That comes to twenty-one euros." } },
    ],
    pitfalls: {
      es: "«dreißigzwei» o «zweidreißig» siguen el orden de «treinta y dos» o se olvidan del und. Lo correcto: zweiunddreißig. Y con 1: einundzwanzig, no «einsundzwanzig».",
      en: "'dreißigzwei' follows English order (thirty-two), and 'zweidreißig' forgets the und. Correct: zweiunddreißig. And with 1: einundzwanzig, not 'einsundzwanzig'.",
    },
  },
  {
    id: "de-g-ja-nein",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Preguntas de sí o no", en: "Yes/no questions" },
    short: {
      es: "En las preguntas de sí/no el verbo va en el 1.er lugar y el sujeto justo después: Wohnst du in Wien?",
      en: "In yes/no questions the verb comes first and the subject right after it: Wohnst du in Wien?",
    },
    rule: {
      es: "Para hacer una pregunta de sí o no, pasa el verbo conjugado al principio y deja el sujeto justo detrás; el resto no cambia. No hace falta ninguna palabra extra. En las preguntas con palabra W (wo, woher, wie) el verbo sigue en el 2.º lugar.",
      en: "To ask a yes/no question, move the conjugated verb to the start and keep the subject right behind it; the rest stays the same. German needs no helper like English 'do'. In questions with a W-word (wo, woher, wie) the verb stays in 2nd place.",
    },
    steps: [
      { es: "Parte de la afirmación: Du wohnst in Wien.", en: "Start from the statement: Du wohnst in Wien." },
      { es: "Lleva el verbo conjugado al principio: Wohnst …", en: "Move the conjugated verb to the front: Wohnst …" },
      { es: "Pon el sujeto justo después y deja el resto igual: Wohnst du in Wien?", en: "Put the subject right after it and leave the rest as it is: Wohnst du in Wien?" },
      { es: "Responde con Ja o Nein.", en: "Answer with Ja or Nein." },
    ],
    table: {
      head: ["Aussage", "Frage"],
      rows: [
        ["Du wohnst in Wien.", "Wohnst du in Wien?"],
        ["Sie sprechen Deutsch.", "Sprechen Sie Deutsch?"],
        ["Er ist zwanzig.", "Ist er zwanzig?"],
        ["Du hast ein Handy.", "Hast du ein Handy?"],
      ],
    },
    examples: [
      { target: "Wohnst du in Wien? – Ja.", gloss: { es: "¿Vives en Viena? – Sí.", en: "Do you live in Vienna? – Yes." } },
      { target: "Sprechen Sie Englisch? – Nein.", gloss: { es: "¿Habla usted inglés? – No.", en: "Do you speak English? – No." } },
      { target: "Hast du ein Handy?", gloss: { es: "¿Tienes celular?", en: "Do you have a mobile phone?" } },
    ],
    pitfalls: {
      es: "En español basta con la entonación («¿Tú vives en Viena?»), pero «Du wohnst in Wien?» en alemán suena a sorpresa, no a pregunta normal. Lo normal: Wohnst du in Wien?",
      en: "English adds 'do', but German has no helper: 'Tust du in Wien wohnen?' is wrong. Just move the verb to the front: Wohnst du in Wien?",
    },
  },

  // ── u04 ──────────────────────────────────────────────────
  {
    id: "de-g-der-die-das",
    lang: "de",
    cefr: "A1.1",
    title: { es: "El género: der, die, das", en: "Gender: der, die, das" },
    short: {
      es: "Cada sustantivo es der (masculino), die (femenino) o das (neutro). Aprende siempre el artículo con la palabra.",
      en: "Every noun is der (masculine), die (feminine) or das (neuter). Always learn the article together with the noun.",
    },
    rule: {
      es: "El alemán tiene tres géneros, y el artículo los muestra: der, die, das. En las personas suele coincidir con el sexo (der Vater, die Mutter), pero manda la gramática: das Mädchen es neutro porque termina en -chen. Todos los sustantivos se escriben con mayúscula.",
      en: "German has three genders, shown by the article: der, die, das. For people it usually matches the sex (der Vater, die Mutter), but grammar wins: das Mädchen is neuter because it ends in -chen. All nouns are written with a capital letter.",
    },
    steps: [
      { es: "¿Es una persona? El sexo suele funcionar: der Sohn, die Tochter.", en: "Is it a person? Natural sex usually works: der Sohn, die Tochter." },
      { es: "Mira la terminación: -chen → das; -ung, -heit, -keit → die.", en: "Check the ending: -chen → das; -ung, -heit, -keit → die." },
      { es: "Si no hay pista, búscalo y apréndelo junto: «der Tisch», no solo «Tisch».", en: "If there's no clue, look it up and learn it as a unit: 'der Tisch', not just 'Tisch'." },
    ],
    table: {
      head: ["der (m)", "die (f)", "das (n)"],
      rows: [
        ["der Vater", "die Mutter", "das Kind"],
        ["der Sohn", "die Tochter", "das Mädchen"],
        ["der Bruder", "die Schwester", "das Handy"],
        ["der Mann", "die Frau", "das Land"],
      ],
    },
    examples: [
      { target: "Der Vater heißt Marco.", gloss: { es: "El padre se llama Marco.", en: "The father is called Marco." } },
      { target: "Die Tochter ist zehn.", gloss: { es: "La hija tiene diez años.", en: "The daughter is ten." } },
      { target: "Das Mädchen heißt Lena.", gloss: { es: "La niña se llama Lena.", en: "The girl is called Lena." } },
    ],
    pitfalls: {
      es: "«die Mädchen» para una sola niña copia el femenino de «la niña», pero Mädchen termina en -chen y es neutro: das Mädchen. «die Mädchen» es el plural: las niñas.",
      en: "'die Mädchen' for one girl follows the meaning, but Mädchen ends in -chen, so it is neuter: das Mädchen. 'die Mädchen' is the plural: the girls.",
    },
  },
  {
    id: "de-g-haben",
    lang: "de",
    cefr: "A1.1",
    title: { es: "El verbo haben (tener)", en: "The verb haben (to have)" },
    short: {
      es: "haben pierde la -b- con du y er/sie/es: du hast, er hat. Lo demás es regular: ich habe, wir haben, ihr habt.",
      en: "haben loses its -b- with du and er/sie/es: du hast, er hat. The rest is regular: ich habe, wir haben, ihr habt.",
    },
    rule: {
      es: "haben (tener) es casi regular: solo con du y er/sie/es desaparece la -b- de la raíz (du hast, er hat). Lo que tienes va en acusativo (objeto directo): Ich habe einen Bruder. La edad no se dice con haben sino con sein: Ich bin dreißig.",
      en: "haben (to have) is almost regular: only with du and er/sie/es does the -b- of the stem drop out (du hast, er hat). What you have is in the accusative (direct object): Ich habe einen Bruder.",
    },
    steps: [
      { es: "Elige la persona.", en: "Pick the person." },
      { es: "¿du o er/sie/es? Sin -b-: hast, hat.", en: "du or er/sie/es? No -b-: hast, hat." },
      { es: "Las demás: raíz hab- + terminación regular: habe, haben, habt.", en: "All the others: stem hab- + regular ending: habe, haben, habt." },
    ],
    table: {
      head: ["", "haben"],
      rows: [
        ["ich", "habe"],
        ["du", "hast"],
        ["er / sie / es", "hat"],
        ["wir", "haben"],
        ["ihr", "habt"],
        ["sie / Sie", "haben"],
      ],
    },
    examples: [
      { target: "Ich habe eine Schwester und zwei Brüder.", gloss: { es: "Tengo una hermana y dos hermanos.", en: "I have a sister and two brothers." } },
      { target: "Hast du Geschwister?", gloss: { es: "¿Tienes hermanos?", en: "Do you have any brothers or sisters?" } },
      { target: "Lena hat zwei Kinder.", gloss: { es: "Lena tiene dos hijos.", en: "Lena has two children." } },
    ],
    pitfalls: {
      es: "«Ich habe dreißig Jahre» copia «tengo treinta años», pero en alemán la edad va con sein: Ich bin dreißig (Jahre alt). Y no regularices: «er habt» → er hat.",
      en: "'du habst' and 'er habt' follow the regular pattern, but haben drops the b: du hast, er hat. Also, age uses sein, not haben: Ich bin dreißig (Jahre alt).",
    },
  },

  // ── u05 ──────────────────────────────────────────────────
  {
    id: "de-g-ein-einen",
    lang: "de",
    cefr: "A1.1",
    title: { es: "El artículo indefinido y el acusativo", en: "The indefinite article and the accusative" },
    short: {
      es: "ein (masc./neutro), eine (fem.). Como objeto directo (acusativo) solo cambia el masculino: einen Kaffee.",
      en: "ein (masc./neuter), eine (fem.). As the direct object (accusative) only the masculine changes: einen Kaffee.",
    },
    rule: {
      es: "ein/eine equivale a «un/una». Lo que quieres, tienes o tomas es el objeto directo del verbo y va en acusativo. En acusativo solo cambia el masculino: ein → einen (y der → den); femenino y neutro quedan igual.",
      en: "ein/eine means 'a/an'. What you want, have or take is the direct object of the verb and goes in the accusative case. In the accusative only the masculine changes: ein → einen (and der → den); feminine and neuter stay the same.",
    },
    steps: [
      { es: "Busca el género del sustantivo: der Kaffee, die Milch, das Wasser.", en: "Find the noun's gender: der Kaffee, die Milch, das Wasser." },
      { es: "¿Es sujeto o objeto directo? Pregunta: ¿qué quiero / tengo / tomo?", en: "Is it the subject or the direct object? Ask: what do I want / have / take?" },
      { es: "Masculino y objeto directo → einen (den).", en: "Masculine and direct object → einen (den)." },
      { es: "Todo lo demás no cambia: eine Milch, ein Wasser.", en: "Everything else stays the same: eine Milch, ein Wasser." },
    ],
    table: {
      head: ["", "m", "f", "n"],
      rows: [
        ["Nominativ", "ein Kaffee", "eine Milch", "ein Wasser"],
        ["Akkusativ", "einen Kaffee", "eine Milch", "ein Wasser"],
        ["Nominativ", "der Kaffee", "die Milch", "das Wasser"],
        ["Akkusativ", "den Kaffee", "die Milch", "das Wasser"],
      ],
    },
    examples: [
      { target: "Ich möchte einen Kaffee, bitte.", gloss: { es: "Quisiera un café, por favor.", en: "I'd like a coffee, please." } },
      { target: "Das ist ein Apfel.", gloss: { es: "Esto es una manzana.", en: "This is an apple." } },
      { target: "Ich nehme einen Apfel und ein Wasser.", gloss: { es: "Tomo una manzana y un agua.", en: "I'll take an apple and a water." } },
    ],
    pitfalls: {
      es: "«Ich möchte ein Kaffee» está mal: Kaffee es masculino y es el objeto directo, así que va einen Kaffee. En español «un» no cambia nunca, por eso es fácil olvidarlo. Pero «einen Milch» tampoco: Milch es femenino, eine Milch.",
      en: "'Ich möchte ein Kaffee' is wrong: Kaffee is masculine and the direct object, so it's einen Kaffee. English 'a' never changes, so this is easy to forget. But not 'einen Milch' either: Milch is feminine, eine Milch.",
    },
  },
  {
    id: "de-g-kein",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Negar un sustantivo: kein", en: "Negating a noun: kein" },
    short: {
      es: "kein niega un sustantivo con ein o sin artículo, con las terminaciones de ein: kein Brot, keine Milch, keinen Saft.",
      en: "kein negates a noun with ein or no article, using ein's endings: kein Brot, keine Milch, keinen Saft.",
    },
    rule: {
      es: "kein es como «nicht + ein»: reemplaza a ein o al hueco donde no hay artículo. Lleva las mismas terminaciones que ein, y en plural keine (Ich habe keine Kinder). Para negar verbos y adjetivos se usa nicht.",
      en: "kein works like 'nicht + ein': it replaces ein, or fills the gap where there is no article. It takes the same endings as ein, plus a plural form keine (Ich habe keine Kinder). To negate verbs and adjectives, use nicht.",
    },
    steps: [
      { es: "¿Niegas un sustantivo con ein o sin artículo? → kein.", en: "Negating a noun with ein or no article? → kein." },
      { es: "Mira género y caso y pon la terminación de ein: keinen Saft (masc., objeto directo).", en: "Check gender and case and use ein's ending: keinen Saft (masc., direct object)." },
      { es: "¿Plural? keine: keine Eier.", en: "Plural? keine: keine Eier." },
      { es: "¿Niegas un verbo o un adjetivo? → nicht.", en: "Negating a verb or an adjective? → nicht." },
    ],
    table: {
      head: ["", "m", "f", "n", "Plural"],
      rows: [
        ["Nominativ", "kein", "keine", "kein", "keine"],
        ["Akkusativ", "keinen", "keine", "kein", "keine"],
        ["Beispiel", "keinen Saft", "keine Milch", "kein Brot", "keine Eier"],
      ],
    },
    examples: [
      { target: "Ich trinke kein Bier.", gloss: { es: "No tomo cerveza.", en: "I don't drink beer." } },
      { target: "Wir haben keine Milch.", gloss: { es: "No tenemos leche.", en: "We don't have any milk." } },
      { target: "Ich möchte keinen Saft, danke.", gloss: { es: "No quiero jugo, gracias.", en: "I don't want any juice, thanks." } },
    ],
    pitfalls: {
      es: "«Ich trinke nicht Bier» copia «no tomo cerveza». Si el sustantivo va sin artículo o con ein, el alemán niega con kein: Ich trinke kein Bier.",
      en: "'Ich trinke nicht Bier' copies 'I don't drink beer'. When the noun has no article or has ein, German negates it with kein: Ich trinke kein Bier.",
    },
  },

  // ── u06 ──────────────────────────────────────────────────
  {
    id: "de-g-plural",
    lang: "de",
    cefr: "A1.1",
    title: { es: "El plural de los sustantivos", en: "Noun plurals" },
    short: {
      es: "El plural tiene varias formas (-e, -(e)n, -er, -s o sin cambio), a veces con diéresis; el artículo es siempre die.",
      en: "Plurals come in several forms (-e, -(e)n, -er, -s or no change), sometimes with umlaut; the article is always die.",
    },
    rule: {
      es: "No hay una sola regla, así que el plural se aprende con la palabra (der Tisch, die Tische). Hay tendencias: los femeninos suelen llevar -(e)n; muchos masculinos, -e y a veces diéresis (Stühle); las palabras extranjeras que terminan en vocal, -s (Sofas). El artículo plural es siempre die.",
      en: "There is no single rule, so learn the plural with the noun (der Tisch, die Tische). There are tendencies: feminine nouns mostly take -(e)n; many masculine ones take -e, sometimes with umlaut (Stühle); foreign words ending in a vowel take -s (Sofas). The plural article is always die.",
    },
    steps: [
      { es: "Busca el plural en el diccionario junto con la palabra: der Tisch, -e.", en: "Look up the plural together with the noun: der Tisch, -e." },
      { es: "¿Femenino? Lo más probable es -(e)n: die Wohnungen.", en: "Feminine? Most likely -(e)n: die Wohnungen." },
      { es: "¿Masculino o neutro en -er, -el o -chen? Normalmente no cambia: die Zimmer.", en: "Masculine or neuter ending in -er, -el or -chen? Usually no change: die Zimmer." },
      { es: "Cambia el artículo a die: der Stuhl → die Stühle.", en: "Change the article to die: der Stuhl → die Stühle." },
    ],
    table: {
      head: ["", "Singular", "Plural"],
      rows: [
        ["-e", "der Tisch", "die Tische"],
        ["¨-e", "der Stuhl", "die Stühle"],
        ["-en", "die Wohnung", "die Wohnungen"],
        ["-en", "das Bett", "die Betten"],
        ["¨-er", "das Bad", "die Bäder"],
        ["–", "das Zimmer", "die Zimmer"],
        ["-s", "das Sofa", "die Sofas"],
      ],
    },
    examples: [
      { target: "Die Wohnung hat drei Zimmer.", gloss: { es: "El departamento tiene tres habitaciones.", en: "The flat has three rooms." } },
      { target: "Die Stühle sind neu.", gloss: { es: "Las sillas son nuevas.", en: "The chairs are new." } },
      { target: "Die Betten sind klein, aber die Bäder sind groß.", gloss: { es: "Las camas son pequeñas, pero los baños son grandes.", en: "The beds are small, but the bathrooms are big." } },
    ],
    pitfalls: {
      es: "«die Stuhls» o «die Tischs» añaden -s como en español, pero en alemán -s es poco frecuente. Lo correcto: die Stühle, die Tische. Y nunca «der Stühle»: en plural siempre die.",
      en: "'die Stuhls' or 'die Tischs' add -s as in English, but -s is rare in German. Correct: die Stühle, die Tische. And never 'der Stühle': the plural article is always die.",
    },
  },
  {
    id: "de-g-nicht-kein",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Negar: nicht o kein", en: "Negation: nicht or kein" },
    short: {
      es: "kein niega un sustantivo con ein o sin artículo (kein Bad); nicht niega verbos, adjetivos y lo demás (nicht groß).",
      en: "kein negates a noun with ein or no article (kein Bad); nicht negates verbs, adjectives and the rest (nicht groß).",
    },
    rule: {
      es: "Primero pregúntate qué niegas. Un sustantivo con ein o sin artículo se niega con kein, que lleva las terminaciones de ein. Todo lo demás —verbos, adjetivos, lugares, sustantivos con der/die/das o mein— se niega con nicht.",
      en: "First ask yourself what you are negating. A noun with ein or no article is negated with kein, which takes ein's endings. Everything else (verbs, adjectives, places, nouns with der/die/das or mein) is negated with nicht.",
    },
    steps: [
      { es: "¿Qué niegas: un sustantivo, un adjetivo o la acción?", en: "What are you negating: a noun, an adjective or the action?" },
      { es: "Sustantivo con ein o sin artículo → kein + terminación: keinen Balkon.", en: "Noun with ein or no article → kein + ending: keinen Balkon." },
      { es: "Sustantivo con der/die/das o mein → nicht: Das ist nicht mein Zimmer.", en: "Noun with der/die/das or mein → nicht: Das ist nicht mein Zimmer." },
      { es: "Adjetivo o verbo → nicht, delante del adjetivo o al final: nicht groß; Ich schlafe nicht.", en: "Adjective or verb → nicht, before the adjective or at the end: nicht groß; Ich schlafe nicht." },
    ],
    table: {
      head: ["", "+", "–"],
      rows: [
        ["ein + Nomen", "Das ist ein Tisch.", "Das ist kein Tisch."],
        ["ohne Artikel", "Ich habe Zeit.", "Ich habe keine Zeit."],
        ["Adjektiv", "Die Küche ist groß.", "Die Küche ist nicht groß."],
        ["Verb", "Ich wohne hier.", "Ich wohne nicht hier."],
        ["der / die / das", "Das ist das Bad.", "Das ist nicht das Bad."],
      ],
    },
    examples: [
      { target: "Die Wohnung hat keinen Balkon.", gloss: { es: "El departamento no tiene balcón.", en: "The flat has no balcony." } },
      { target: "Das Zimmer ist nicht teuer.", gloss: { es: "La habitación no es cara.", en: "The room isn't expensive." } },
      { target: "Das ist kein Bad, das ist die Küche.", gloss: { es: "Esto no es un baño, es la cocina.", en: "That's not a bathroom, it's the kitchen." } },
    ],
    pitfalls: {
      es: "«Die Wohnung hat nicht Balkon» copia «no tiene balcón». Balkon va sin artículo, así que se niega con kein, y como es masculino y objeto directo: keinen Balkon.",
      en: "'Die Wohnung hat nicht einen Balkon' copies 'doesn't have a balcony'. A noun with ein is negated with kein, and Balkon is masculine and the direct object: keinen Balkon.",
    },
  },
  {
    id: "de-g-komposita",
    lang: "de",
    cefr: "A1.1",
    title: { es: "Sustantivos compuestos", en: "Compound nouns" },
    short: {
      es: "El compuesto se escribe junto y la última palabra decide género y plural: der Küchentisch, die Küchentische.",
      en: "A compound is one word, and its last part decides gender and plural: der Küchentisch, die Küchentische.",
    },
    rule: {
      es: "El alemán une sustantivos en una sola palabra. La última parte es la palabra base: dice qué cosa es y decide el género y el plural; lo de delante solo la describe. A veces aparece una letra de unión (Küche-n-tisch), y el orden es el inverso del español: mesa de cocina = Küchentisch.",
      en: "German joins nouns into a single word. The last part is the base word: it says what the thing is and decides the gender and plural; whatever comes before only describes it. Sometimes a linking letter appears (Küche-n-tisch), and the order is the same as in English: kitchen table = Küchentisch.",
    },
    steps: [
      { es: "Busca la última palabra: es la cosa (Küchentisch → un Tisch).", en: "Find the last word: that's the thing (Küchentisch → a Tisch)." },
      { es: "Usa su artículo: der Tisch → der Küchentisch.", en: "Use its article: der Tisch → der Küchentisch." },
      { es: "Para entenderlo, lee de atrás hacia delante: mesa de la cocina.", en: "To understand it, read from the back: a table for the kitchen." },
      { es: "En plural solo cambia la última parte: die Küchentische.", en: "In the plural only the last part changes: die Küchentische." },
    ],
    table: {
      head: ["Kompositum", "1. Teil", "Grundwort"],
      rows: [
        ["das Wohnzimmer", "wohnen", "das Zimmer"],
        ["das Schlafzimmer", "schlafen", "das Zimmer"],
        ["der Küchentisch", "die Küche", "der Tisch"],
        ["der Küchenstuhl", "die Küche", "der Stuhl"],
        ["die Haustür", "das Haus", "die Tür"],
        ["der Bahnhof", "die Bahn", "der Hof"],
      ],
    },
    examples: [
      { target: "Der Küchentisch ist neu.", gloss: { es: "La mesa de la cocina es nueva.", en: "The kitchen table is new." } },
      { target: "Das Schlafzimmer ist klein, aber hell.", gloss: { es: "El dormitorio es pequeño, pero luminoso.", en: "The bedroom is small but bright." } },
      { target: "Die Wohnung ist nah am Bahnhof.", gloss: { es: "El departamento está cerca de la estación.", en: "The flat is close to the station." } },
    ],
    pitfalls: {
      es: "«die Küchentisch» toma el artículo de la primera parte (die Küche), pero manda la última: der Küchentisch. Y no traduzcas en el orden del español: «Tischküche» sería una cocina de mesa.",
      en: "'die Küchentisch' takes the article of the first part (die Küche), but the last part decides: der Küchentisch, just as a kitchen table is a kind of table.",
    },
  },

  // ── u07 ──────────────────────────────────────────────────
  {
    id: "de-g-trennbar",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Verbos separables", en: "Separable verbs" },
    short: {
      es: "Verbo separable: la parte conjugada va en 2.º lugar y el prefijo al final: aufstehen → Ich stehe um sieben auf.",
      en: "Separable verb: the conjugated part goes in place 2 and the prefix at the end: aufstehen → Ich stehe um sieben auf.",
    },
    rule: {
      es: "Verbos como aufstehen o einkaufen tienen un prefijo acentuado (auf-, an-, ein-, fern-) que se separa en el presente: la parte conjugada va en el 2.º lugar y el prefijo al final de la frase. Los cambios de vocal se mantienen (anfangen → er fängt an). En infinitivo, por ejemplo con un modal, va junto: Ich muss früh aufstehen.",
      en: "Verbs like aufstehen or einkaufen have a stressed prefix (auf-, an-, ein-, fern-) that splits off in the present tense: the conjugated part goes in 2nd place and the prefix goes to the end of the clause. Vowel changes stay (anfangen → er fängt an). In the infinitive, e.g. after a modal, it stays together: Ich muss früh aufstehen.",
    },
    steps: [
      { es: "Separa el prefijo: auf | stehen.", en: "Split off the prefix: auf | stehen." },
      { es: "Conjuga la parte del verbo: ich stehe, er steht.", en: "Conjugate the verb part: ich stehe, er steht." },
      { es: "Ponla en el 2.º lugar (en preguntas de sí/no, en el 1.º).", en: "Put it in place 2 (in yes/no questions, in place 1)." },
      { es: "Deja el prefijo al final de todo: Ich stehe um sieben auf.", en: "Put the prefix at the very end: Ich stehe um sieben auf." },
    ],
    table: {
      head: ["1", "2", "…", "Ende"],
      rows: [
        ["Ich", "stehe", "um sieben", "auf."],
        ["Der Kurs", "fängt", "um neun", "an."],
        ["Wir", "kaufen", "am Samstag", "ein."],
        ["Am Abend", "sehe", "ich", "fern."],
        ["Ich", "rufe", "dich morgen", "an."],
        ["Wann", "stehst", "du", "auf?"],
      ],
    },
    examples: [
      { target: "Ich stehe um sieben Uhr auf.", gloss: { es: "Me levanto a las siete.", en: "I get up at seven o'clock." } },
      { target: "Der Film fängt um acht an.", gloss: { es: "La película empieza a las ocho.", en: "The film starts at eight." } },
      { target: "Am Abend sehe ich fern.", gloss: { es: "En la noche veo televisión.", en: "In the evening I watch TV." } },
    ],
    pitfalls: {
      es: "«Ich aufstehe um sieben» deja el verbo entero, como en español. En presente se separa: Ich stehe um sieben auf. Y en la pregunta tampoco va junto: Wann fängt der Kurs an?, no «Wann anfängt…».",
      en: "'Ich aufstehe um sieben' keeps the verb in one piece. In the present tense it splits, a bit like English 'get … up': Ich stehe um sieben auf. Questions too: Wann fängt der Kurs an?, not 'Wann anfängt…'.",
    },
  },
  {
    id: "de-g-uhrzeit",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Decir la hora", en: "Telling the time" },
    short: {
      es: "«halb» mira a la hora siguiente: halb acht = 7:30. Viertel nach sieben = 7:15, Viertel vor acht = 7:45.",
      en: "'halb' looks ahead to the next hour: halb acht = 7:30. Viertel nach sieben = 7:15, Viertel vor acht = 7:45.",
    },
    rule: {
      es: "En la hora coloquial se dicen los minutos + nach (y) o vor (menos) + la hora. «halb» cuenta hacia la hora siguiente: halb acht es «media hora antes de las ocho», o sea 7:30. En la hora oficial (trenes, radio) se dicen los números tal cual y en formato de 24 horas: neunzehn Uhr dreißig.",
      en: "In everyday speech you say the minutes + nach (past) or vor (to) + the hour. 'halb' counts towards the next hour: halb acht is 'half way to eight', i.e. 7:30. Official time (trains, radio) just reads out the numbers, on the 24-hour clock: neunzehn Uhr dreißig.",
    },
    steps: [
      { es: "Hasta y cuarto: minutos + nach + la hora actual: zehn nach sieben (7:10).", en: "Up to quarter past: minutes + nach + the current hour: zehn nach sieben (7:10)." },
      { es: "Y media: halb + la hora SIGUIENTE: halb acht (7:30).", en: "Half past: halb + the NEXT hour: halb acht (7:30)." },
      { es: "Desde menos cuarto: minutos + vor + la hora siguiente: Viertel vor acht (7:45).", en: "From quarter to: minutes + vor + the next hour: Viertel vor acht (7:45)." },
      { es: "Cerca de la media se cuenta desde halb: fünf vor halb acht (7:25).", en: "Around half past, count from halb: fünf vor halb acht (7:25)." },
    ],
    table: {
      head: ["", "informell", "offiziell"],
      rows: [
        ["7:00", "sieben Uhr", "sieben Uhr"],
        ["7:10", "zehn nach sieben", "sieben Uhr zehn"],
        ["7:15", "Viertel nach sieben", "sieben Uhr fünfzehn"],
        ["7:25", "fünf vor halb acht", "sieben Uhr fünfundzwanzig"],
        ["7:30", "halb acht", "sieben Uhr dreißig"],
        ["7:45", "Viertel vor acht", "sieben Uhr fünfundvierzig"],
        ["19:30", "halb acht", "neunzehn Uhr dreißig"],
      ],
    },
    examples: [
      { target: "Wie spät ist es? – Es ist halb acht.", gloss: { es: "¿Qué hora es? – Son las siete y media.", en: "What time is it? – It's half past seven." } },
      { target: "Ich stehe um Viertel nach sechs auf.", gloss: { es: "Me levanto a las seis y cuarto.", en: "I get up at quarter past six." } },
      { target: "Der Film fängt um Viertel vor neun an.", gloss: { es: "La película empieza a las nueve menos cuarto.", en: "The film starts at quarter to nine." } },
    ],
    pitfalls: {
      es: "«halb sieben» no son las siete y media sino las seis y media: halb mira a la hora siguiente. «Las siete y media» = halb acht.",
      en: "'halb sieben' is not half past seven but half past six: halb looks ahead to the next hour. 'Half past seven' = halb acht.",
    },
  },
  {
    id: "de-g-am-um",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Cuándo: am, um, im", en: "Saying when: am, um, im" },
    short: {
      es: "am + día o parte del día (am Montag, am Abend); um + hora del reloj (um acht Uhr). Excepción: in der Nacht.",
      en: "am + day or part of the day (am Montag, am Abend); um + clock time (um acht Uhr). Exception: in der Nacht.",
    },
    rule: {
      es: "am (= an dem) va con días, fechas y partes del día: am Montag, am Abend. um va con la hora exacta del reloj: um acht Uhr. Para meses y estaciones se usa im (= in dem): im Mai, im Sommer; y la noche es la excepción: in der Nacht.",
      en: "am (= an dem) goes with days, dates and parts of the day: am Montag, am Abend. um goes with an exact clock time: um acht Uhr. Months and seasons take im (= in dem): im Mai, im Sommer; and night is the exception: in der Nacht.",
    },
    steps: [
      { es: "¿Es una hora del reloj? → um: um halb neun.", en: "Is it a clock time? → um: um halb neun." },
      { es: "¿Un día o una parte del día? → am: am Freitag, am Morgen.", en: "A day or a part of the day? → am: am Freitag, am Morgen." },
      { es: "¿Un mes o una estación? → im: im Mai.", en: "A month or a season? → im: im Mai." },
      { es: "¿La noche? → in der Nacht.", en: "Night? → in der Nacht." },
    ],
    table: {
      head: ["", "Beispiele"],
      rows: [
        ["um + Uhrzeit", "um acht Uhr · um halb neun"],
        ["am + Tag", "am Montag · am Wochenende"],
        ["am + Tageszeit", "am Morgen · am Nachmittag · am Abend"],
        ["im + Monat / Jahreszeit", "im Mai · im Sommer"],
        ["Ausnahme", "in der Nacht"],
      ],
    },
    examples: [
      { target: "Der Kurs ist am Montag um zehn Uhr.", gloss: { es: "El curso es el lunes a las diez.", en: "The course is on Monday at ten o'clock." } },
      { target: "Am Abend sehe ich fern.", gloss: { es: "En la noche veo televisión.", en: "In the evening I watch TV." } },
      { target: "Um acht Uhr frühstücke ich.", gloss: { es: "A las ocho desayuno.", en: "At eight o'clock I have breakfast." } },
    ],
    pitfalls: {
      es: "En español decimos «el lunes» sin preposición y «a las ocho» con una sola. En alemán cada cosa tiene la suya: «um Montag» o «am acht Uhr» están mal; lo correcto es am Montag, um acht Uhr.",
      en: "English uses 'on Monday' and 'at eight', so learners write 'an Montag' or 'am acht Uhr'. Days take am (an + dem), clock times take um: am Montag, um acht Uhr.",
    },
  },

  // ── u08 ──────────────────────────────────────────────────
  {
    id: "de-g-modalverben",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Verbos modales: können, wollen, müssen", en: "Modal verbs: können, wollen, müssen" },
    short: {
      es: "Modal conjugado en 2.º lugar, infinitivo al final: Ich kann heute nicht kommen. ich y er/sie/es sin terminación.",
      en: "Conjugated modal in place 2, infinitive at the end: Ich kann heute nicht kommen. ich and er/sie/es have no ending.",
    },
    rule: {
      es: "Los modales (können = poder, wollen = querer, müssen = tener que) forman un «marco»: el modal conjugado va en el 2.º lugar y el otro verbo, en infinitivo, al final de la frase. En singular cambian la vocal (kann, will, muss) y con ich y er/sie/es no llevan terminación. El plural es regular: wir können, ihr könnt.",
      en: "Modals (können = can, wollen = want, müssen = must / have to) form a frame: the conjugated modal goes in 2nd place and the other verb, in the infinitive, goes to the end of the clause. In the singular they change their vowel (kann, will, muss), and ich and er/sie/es have no ending. The plural is regular: wir können, ihr könnt.",
    },
    steps: [
      { es: "Elige el modal y conjúgalo para el sujeto: ich kann.", en: "Choose the modal and conjugate it for the subject: ich kann." },
      { es: "Ponlo en el 2.º lugar.", en: "Put it in place 2." },
      { es: "Lleva el segundo verbo, en infinitivo, al final: … kommen.", en: "Send the second verb, in the infinitive, to the end: … kommen." },
      { es: "nicht va justo delante del infinitivo: Ich kann heute nicht kommen.", en: "nicht goes right before the infinitive: Ich kann heute nicht kommen." },
    ],
    table: {
      head: ["", "können", "wollen", "müssen"],
      rows: [
        ["ich", "kann", "will", "muss"],
        ["du", "kannst", "willst", "musst"],
        ["er / sie / es", "kann", "will", "muss"],
        ["wir", "können", "wollen", "müssen"],
        ["ihr", "könnt", "wollt", "müsst"],
        ["sie / Sie", "können", "wollen", "müssen"],
      ],
    },
    examples: [
      { target: "Ich kann heute nicht kommen.", gloss: { es: "Hoy no puedo venir.", en: "I can't come today." } },
      { target: "Kannst du schwimmen?", gloss: { es: "¿Sabes nadar?", en: "Can you swim?" } },
      { target: "Ich muss am Montag arbeiten.", gloss: { es: "El lunes tengo que trabajar.", en: "I have to work on Monday." } },
      { target: "Wir wollen ins Kino gehen.", gloss: { es: "Queremos ir al cine.", en: "We want to go to the cinema." } },
    ],
    pitfalls: {
      es: "«Wir wollen gehen ins Kino» copia «queremos ir al cine», con los dos verbos juntos. En alemán el infinitivo se va al final: Wir wollen ins Kino gehen. Y sin terminación con er: «er kannt» → er kann.",
      en: "'Ich will' means 'I want', not 'I will'. And there's no 'zu' after a modal: 'Ich will zu gehen' is wrong. The infinitive goes to the end: Ich will ins Kino gehen.",
    },
  },
  {
    id: "de-g-gern",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Lo que te gusta: gern, lieber, am liebsten", en: "Likes: gern, lieber, am liebsten" },
    short: {
      es: "Verbo + gern = me gusta hacerlo: Ich tanze gern. Luego lieber (prefiero) y am liebsten (lo que más me gusta).",
      en: "Verb + gern = like doing it: Ich tanze gern. Then lieber (prefer) and am liebsten (like most of all).",
    },
    rule: {
      es: "Para decir que te gusta hacer algo no se usa un verbo como «gustar»: se usa el verbo de la actividad + gern (Ich koche gern). gern va después del verbo conjugado, nunca delante. Su comparativo es irregular, como gut → besser: gern → lieber → am liebsten.",
      en: "To say you like doing something, German doesn't use a verb like 'like': it uses the activity verb + gern (Ich koche gern). gern comes after the conjugated verb, never before it. Its comparison is irregular, like good → better: gern → lieber → am liebsten.",
    },
    steps: [
      { es: "Conjuga el verbo de la actividad: ich tanze.", en: "Conjugate the activity verb: ich tanze." },
      { es: "Pon gern después: Ich tanze gern. Con objeto, gern suele ir antes: Ich spiele gern Fußball.", en: "Put gern after it: Ich tanze gern. With an object, gern usually comes first: Ich spiele gern Fußball." },
      { es: "Para preferir, cambia gern por lieber: Ich tanze lieber.", en: "To show preference, swap gern for lieber: Ich tanze lieber." },
      { es: "Lo favorito: am liebsten. Si empieza la frase, el verbo sigue en 2.º lugar: Am liebsten lese ich.", en: "Your favourite: am liebsten. If it starts the sentence, the verb stays in place 2: Am liebsten lese ich." },
    ],
    table: {
      head: ["", "Beispiel"],
      rows: [
        ["gern", "Ich lese gern."],
        ["lieber", "Ich lese lieber Romane."],
        ["am liebsten", "Am liebsten lese ich Krimis."],
        ["nicht gern", "Ich koche nicht gern."],
      ],
    },
    examples: [
      { target: "Ich spiele gern Fußball.", gloss: { es: "Me gusta jugar fútbol.", en: "I like playing football." } },
      { target: "Ich schwimme gern, aber ich tanze lieber.", gloss: { es: "Me gusta nadar, pero prefiero bailar.", en: "I like swimming, but I prefer dancing." } },
      { target: "Am liebsten tanze ich.", gloss: { es: "Lo que más me gusta es bailar.", en: "Dancing is what I like best." } },
    ],
    pitfalls: {
      es: "«Ich tanze más gern» o «mehr gern» no existen: el comparativo es lieber (Ich tanze lieber). Y «Ich tanze gut» significa «bailo bien», no «me gusta bailar».",
      en: "'Ich gern tanze' copies 'I like to dance', but gern never comes before the conjugated verb: Ich tanze gern. And 'Ich tanze gut' means 'I dance well', not 'I like dancing'.",
    },
  },
  {
    id: "de-g-wochentage",
    lang: "de",
    cefr: "A1.2",
    title: { es: "Los días de la semana", en: "The days of the week" },
    short: {
      es: "Todos los días son masculinos (der Montag). «El lunes» = am Montag; «los lunes» (cada semana) = montags.",
      en: "All days are masculine (der Montag). 'On Monday' = am Montag; 'on Mondays' (every week) = montags.",
    },
    rule: {
      es: "Los días de la semana son todos masculinos y, como sustantivos, van con mayúscula: der Montag. Para un día concreto se usa am (= an dem): am Freitag. Para algo que se repite cada semana se añade -s y se escribe con minúscula: freitags.",
      en: "The days of the week are all masculine and, as nouns, are capitalised: der Montag. For one particular day use am (= an dem): am Freitag. For something that happens every week, add -s and write it in lower case: freitags.",
    },
    steps: [
      { es: "¿Un día concreto? am + día: am Freitag.", en: "One particular day? am + day: am Freitag." },
      { es: "¿Todas las semanas? día + s, en minúscula: freitags.", en: "Every week? day + s, lower case: freitags." },
      { es: "Si el día empieza la frase, el verbo sigue en 2.º lugar: Am Sonntag schlafe ich lange.", en: "If the day starts the sentence, the verb stays in place 2: Am Sonntag schlafe ich lange." },
      { es: "Con hora: primero el día, luego la hora: am Montag um acht.", en: "With a time: day first, then the time: am Montag um acht." },
    ],
    table: {
      head: ["", "am …", "jede Woche"],
      rows: [
        ["Mo", "am Montag", "montags"],
        ["Di", "am Dienstag", "dienstags"],
        ["Mi", "am Mittwoch", "mittwochs"],
        ["Do", "am Donnerstag", "donnerstags"],
        ["Fr", "am Freitag", "freitags"],
        ["Sa", "am Samstag", "samstags"],
        ["So", "am Sonntag", "sonntags"],
      ],
    },
    examples: [
      { target: "Am Sonntag schlafe ich lange.", gloss: { es: "El domingo duermo hasta tarde.", en: "On Sunday I sleep in." } },
      { target: "Hast du am Freitag Zeit?", gloss: { es: "¿Tienes tiempo el viernes?", en: "Are you free on Friday?" } },
      { target: "Samstags spiele ich Fußball.", gloss: { es: "Los sábados juego fútbol.", en: "On Saturdays I play football." } },
    ],
    pitfalls: {
      es: "«Ich arbeite Montag» copia «trabajo el lunes» sin preposición. En alemán hace falta am: Ich arbeite am Montag. Y «Montags» en medio de la frase va en minúscula: Ich arbeite montags.",
      en: "'an Montag' translates 'on Monday' word for word, but an + dem contracts to am: am Montag. And the every-week form is lower case: Ich arbeite montags.",
    },
  },
];
