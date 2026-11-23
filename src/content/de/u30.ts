import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u30",
  lang: "de",
  index: 30,
  cefr: "C1",
  title: { target: "Sprache und Stil", es: "Lengua y estilo", en: "Language and style" },
  canDo: [
    { es: "Puedo entender y usar refranes y expresiones idiomáticas de nivel avanzado.", en: "I can understand and use proverbs and advanced idioms." },
    { es: "Puedo elegir entre un registro elevado, neutro o coloquial según el contexto.", en: "I can choose an elevated, neutral or colloquial style to suit the context." },
    { es: "Sé hablar de la lengua misma: anglicismos, dialectos y matices de significado.", en: "I can talk about language itself: anglicisms, dialects and shades of meaning." },
  ],
  icon: "🖋️",
  items: build("de", 30, "C1", [
    // ── Advanced idioms ──────────────────────────────────────
    {
      id: "nagel-auf-den-kopf", type: "phrase", pos: "phrase", target: "den Nagel auf den Kopf treffen",
      gloss: { es: "dar en el clavo", en: "to hit the nail on the head" },
      distractors: ["den Nagel auf dem Kopf treffen", "den Hammer auf den Kopf treffen", "den Nagel in den Kopf treffen"],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },
    {
      id: "um-den-heissen-brei", type: "phrase", pos: "phrase", target: "um den heißen Brei herumreden",
      gloss: { es: "andarse con rodeos", en: "to beat around the bush" },
      distractors: ["um den heißen Brei herumlaufen", "um den kalten Brei herumreden", "um dem heißen Brei herumreden"],
      note: { es: "Literalmente «hablar alrededor de la papilla caliente».", en: "Literally 'to talk around the hot porridge'." },
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },
    {
      id: "lange-bank", type: "phrase", pos: "phrase", target: "etwas auf die lange Bank schieben",
      gloss: { es: "dejar algo para más adelante, postergar", en: "to put something off" },
      distractors: ["etwas auf die lange Bank legen", "etwas auf der langen Bank schieben", "etwas auf die kurze Bank schieben"],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },
    {
      id: "reinen-wein", type: "phrase", pos: "phrase", target: "jemandem reinen Wein einschenken",
      gloss: { es: "decirle a alguien la verdad sin rodeos", en: "to tell someone the plain truth" },
      distractors: ["jemanden reinen Wein einschenken", "jemandem reines Wasser einschenken", "jemandem reinen Saft einschenken"],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },
    {
      id: "oel-ins-feuer", type: "phrase", pos: "phrase", target: "Öl ins Feuer gießen",
      gloss: { es: "echar leña al fuego", en: "to add fuel to the fire" },
      distractors: ["Öl ins Wasser gießen", "Öl im Feuer gießen", "Holz ins Feuer gießen"],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },
    {
      id: "kirche-im-dorf", type: "phrase", pos: "phrase", target: "die Kirche im Dorf lassen",
      gloss: { es: "no exagerar", en: "to keep things in proportion" },
      distractors: ["die Kirche ins Dorf lassen", "die Kirche im Dorf bleiben", "das Dorf in der Kirche lassen"],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },
    {
      id: "hund-begraben", type: "phrase", pos: "phrase", target: "Da liegt der Hund begraben.",
      gloss: { es: "Ahí está el quid de la cuestión.", en: "That's the crux of the matter." },
      distractors: ["Da liegt die Katze begraben.", "Da liegt der Hase begraben.", "Da liegt der Hund vergraben."],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },

    // ── Proverbs ─────────────────────────────────────────────
    {
      id: "wer-zuletzt-lacht", type: "phrase", pos: "phrase", target: "Wer zuletzt lacht, lacht am besten.",
      gloss: { es: "El que ríe último ríe mejor.", en: "He who laughs last laughs best." },
      distractors: ["Wer zuletzt lacht, lacht am meisten.", "Der zuletzt lacht, lacht am besten.", "Wer zuletzt lacht, lacht besser."],
      grammar: ["de-g-wer-der"], tags: ["proverbs"],
    },
    {
      id: "was-ich-nicht-weiss", type: "phrase", pos: "phrase", target: "Was ich nicht weiß, macht mich nicht heiß.",
      gloss: { es: "Ojos que no ven, corazón que no siente.", en: "What I don't know can't hurt me." },
      distractors: ["Was ich nicht weiß, macht mich nicht kalt.", "Das ich nicht weiß, macht mich nicht heiß.", "Was ich nicht weiß, macht mir nicht heiß."],
      grammar: ["de-g-wer-der"], tags: ["proverbs"],
    },
    {
      id: "wer-a-sagt", type: "phrase", pos: "phrase", target: "Wer A sagt, muss auch B sagen.",
      gloss: { es: "Lo que se empieza hay que terminarlo.", en: "In for a penny, in for a pound." },
      distractors: ["Wer A sagt, muss auch C sagen.", "Der A sagt, muss auch B sagen.", "Wer A sagt, muss B auch sagen."],
      grammar: ["de-g-wer-der"], tags: ["proverbs"],
    },
    {
      id: "morgenstund", type: "phrase", pos: "phrase", target: "Morgenstund hat Gold im Mund.",
      gloss: { es: "Al que madruga, Dios lo ayuda.", en: "The early bird catches the worm." },
      accept: [{ text: "Morgenstunde hat Gold im Mund." }],
      distractors: ["Morgenstund hat Geld im Mund.", "Morgenstund hat Gold in der Hand.", "Abendstund hat Gold im Mund."],
      tags: ["proverbs"],
    },

    // ── Talking about language ───────────────────────────────
    {
      id: "anglizismus", type: "word", pos: "noun", target: "der Anglizismus", gender: "m", plural: "die Anglizismen",
      gloss: { es: "el anglicismo", en: "the anglicism" },
      distractors: ["die Anglizismus", "der Anglist", "der Anachronismus"],
      note: { es: "Plural en -en: die Anglizismen (como das Museum → die Museen).", en: "Plural in -en: die Anglizismen (like das Museum → die Museen)." },
      tags: ["language"],
    },
    {
      id: "mundart", type: "word", pos: "noun", target: "die Mundart", gender: "f", plural: "die Mundarten",
      gloss: { es: "el dialecto, el habla regional", en: "the dialect" },
      distractors: ["der Mundart", "die Machart", "die Mundwinkel"],
      note: { es: "Sinónimo: der Dialekt. En Suiza se habla Mundart y se escribe Hochdeutsch.", en: "Synonym: der Dialekt. In Switzerland people speak Mundart but write Hochdeutsch." },
      tags: ["language", "regional"],
    },
    {
      id: "redewendung", type: "word", pos: "noun", target: "die Redewendung", gender: "f", plural: "die Redewendungen",
      gloss: { es: "el modismo, la expresión idiomática", en: "the idiom, set phrase" },
      distractors: ["der Redewendung", "die Verwendung", "die Redezeit"],
      tags: ["language"],
    },
    {
      id: "gehoben", type: "word", pos: "adj", target: "gehoben",
      gloss: { es: "elevado/a, culto/a (registro)", en: "elevated, formal (register)" },
      distractors: ["gehobelt", "erhoben", "gehalten"],
      note: { es: "gehobene Sprache: speisen en lugar de essen.", en: "gehobene Sprache: speisen instead of essen." },
      grammar: ["de-g-stilebenen"], tags: ["language", "register"],
    },
    {
      id: "abwertend", type: "word", pos: "adj", target: "abwertend",
      gloss: { es: "despectivo/a", en: "pejorative" },
      distractors: ["aufwertend", "abwartend", "abweisend"],
      tags: ["language"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "begruessen-zu-duerfen", type: "sentence", register: "formal", target: "Wir würden uns freuen, Sie bei uns begrüßen zu dürfen.",
      gloss: { es: "Nos encantaría recibirle.", en: "We would be delighted to welcome you." },
      annot: { "zu dürfen": { es: "fórmula elevada de cortesía", en: "elevated, polite formula" } },
      distractors: ["begrüßt", "dürften", "freue"],
      grammar: ["de-g-stilebenen"], tags: ["register", "formal"],
    },
    {
      id: "nachricht-gekriegt", type: "sentence", register: "informal", target: "Hast du meine Nachricht gekriegt?",
      gloss: { es: "¿Te llegó mi mensaje? (coloquial)", en: "Did you get my message? (colloquial)" },
      accept: [{ text: "Hast du meine Nachricht bekommen?" }],
      annot: { "gekriegt": { es: "coloquial de bekommen", en: "colloquial for bekommen" } },
      distractors: ["gekriegen", "kriegt", "meinen"],
      grammar: ["de-g-stilebenen"], tags: ["register", "colloquial"],
    },
    {
      id: "abwertende-bedeutung", type: "sentence", target: "Das Wort hat im Laufe der Zeit eine abwertende Bedeutung angenommen.",
      gloss: { es: "Con el tiempo, la palabra adquirió un sentido despectivo.", en: "Over time, the word has taken on a pejorative meaning." },
      distractors: ["abwertend", "Laufen", "genommen"],
      tags: ["language"],
    },
    {
      id: "anglizismen-alltag", type: "sentence", target: "Viele Anglizismen sind längst fester Bestandteil der Alltagssprache.",
      gloss: { es: "Muchos anglicismos forman parte del lenguaje cotidiano desde hace tiempo.", en: "Many anglicisms have long been an established part of everyday language." },
      distractors: ["festen", "Bestandteile", "längste"],
      tags: ["language"],
    },
    {
      id: "wer-sich-nicht-haelt", type: "sentence", target: "Wer sich nicht an die Regeln hält, der muss mit Konsequenzen rechnen.",
      gloss: { es: "Quien no respeta las reglas tiene que atenerse a las consecuencias.", en: "Anyone who doesn't follow the rules has to expect consequences." },
      accept: [{ text: "Wer sich nicht an die Regeln hält, muss mit Konsequenzen rechnen." }],
      annot: { "Wer": { es: "«quien»: sujeto general, sin antecedente", en: "'whoever': general subject, no antecedent" } },
      distractors: ["Der", "den", "rechnet"],
      grammar: ["de-g-wer-der"], tags: ["relative-clauses", "formal"],
    },
    {
      id: "nicht-auf-die-lange-bank", type: "sentence", target: "Wir sollten die Entscheidung nicht länger auf die lange Bank schieben.",
      gloss: { es: "No deberíamos postergar más la decisión.", en: "We shouldn't put off the decision any longer." },
      distractors: ["langen", "Banken", "schoben"],
      grammar: ["de-g-redewendungen"], tags: ["idioms"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-stilebenen", type: "pattern", target: "kriegen · bekommen · erhalten",
      gloss: { es: "tres registros: coloquial, neutro, elevado", en: "three registers: colloquial, neutral, elevated" },
      pattern: {
        rule: {
          es: "Muchas ideas tienen una palabra coloquial, una neutra y una elevada. En una carta oficial se usa la elevada; con amistades, la coloquial.",
          en: "Many ideas have a colloquial, a neutral and an elevated word. An official letter uses the elevated one; friends use the colloquial one.",
        },
        table: [["kriegen", "bekommen", "erhalten"], ["futtern", "essen", "speisen"], ["abhauen", "weggehen", "sich entfernen"], ["kapieren", "verstehen", "begreifen"]],
      },
      question: {
        prompt: { es: "¿Cuál es la más adecuada para una carta oficial?", en: "Which one suits an official letter best?" },
        options: ["Wir haben Ihr Schreiben erhalten.", "Wir haben Ihr Schreiben bekommen.", "Wir haben Ihr Schreiben gekriegt.", "Ihr Schreiben ist da."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-stilebenen"], tags: ["grammar", "register"],
    },
    {
      id: "pat-wer-der", type: "pattern", target: "Wer …, (der) … · Was …, (das) …",
      gloss: { es: "quien…, lo que… (sin antecedente)", en: "whoever…, whatever… (no antecedent)" },
      pattern: {
        rule: {
          es: "wer y was pueden abrir una frase sin sustantivo antes: Wer zuletzt lacht, … = quien ríe último. La frase principal puede retomar con der / das, en el caso que necesite: Wer mitmacht, dem helfen wir.",
          en: "wer and was can open a clause with no noun before them: Wer zuletzt lacht, … = whoever laughs last. The main clause may pick it up with der / das, in whatever case it needs: Wer mitmacht, dem helfen wir.",
        },
        table: [["Wer …, (der) …", "Wer rastet, der rostet."], ["Wer …, dem …", "Wer fragt, dem wird geholfen."], ["Was …, (das) …", "Was du heute kannst besorgen, das verschiebe nicht auf morgen."]],
      },
      question: {
        prompt: { es: "Completa el refrán: «___ rastet, der rostet.»", en: "Complete the proverb: '___ rastet, der rostet.'" },
        options: ["Wer", "Der", "Was", "Welcher"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-wer-der"], tags: ["grammar", "proverbs", "relative-clauses"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-mundart", type: "listening",
      target: "In der Schweiz spricht man im Alltag Mundart, schreibt aber meistens Hochdeutsch. Wer aus Deutschland kommt, versteht deshalb anfangs oft nur Bahnhof.",
      gloss: {
        es: "En Suiza, en el día a día se habla dialecto, pero casi siempre se escribe en alemán estándar. Por eso, quien viene de Alemania al principio a menudo no entiende nada.",
        en: "In Switzerland people speak dialect in everyday life but mostly write standard German. So people from Germany often don't understand a thing at first.",
      },
      question: {
        prompt: { es: "¿Qué les pasa al principio a las personas de Alemania?", en: "What happens to people from Germany at first?" },
        options: [
          { es: "Casi no entienden nada.", en: "They barely understand anything." },
          { es: "Se pierden en la estación de tren.", en: "They get lost at the station." },
          { es: "Lo entienden todo enseguida.", en: "They understand everything right away." },
          { es: "Empiezan a hablar dialecto.", en: "They start speaking dialect." },
        ],
        answer: 0,
      },
      note: { es: "nur Bahnhof verstehen = no entender nada (literalmente «entender solo estación»).", en: "nur Bahnhof verstehen = not understand a thing (literally 'understand only station')." },
      exercises: ["question", "listen"], grammar: ["de-g-wer-der"], tags: ["listening", "language", "regional"],
    },
    {
      id: "dlg-kirche-im-dorf", type: "dialogue", register: "informal", target: "Jede Sprache hat da ihre eigenen Bilder.",
      gloss: { es: "Cada idioma tiene sus propias imágenes para eso.", en: "Every language has its own images for that." },
      turns: [
        { who: "A", target: "Sag mal, was heißt eigentlich: die Kirche im Dorf lassen?", gloss: { es: "Oye, ¿qué significa en realidad «die Kirche im Dorf lassen»?", en: "Tell me, what does 'die Kirche im Dorf lassen' actually mean?" } },
        { who: "B", target: "Das sagt man, wenn jemand übertreibt. Also: Bleib mal realistisch.", gloss: { es: "Se dice cuando alguien exagera. O sea: no te pases.", en: "You say it when someone's exaggerating. So: let's be realistic." } },
        { who: "A", target: "Ach so! Und gibt es das auch auf Spanisch?", gloss: { es: "¡Ah, ya! ¿Y existe también en español?", en: "Oh, I see! And is there something like that in Spanish?" } },
        { who: "B", target: "Nicht wörtlich. Jede Sprache hat da ihre eigenen Bilder.", gloss: { es: "No literalmente. Cada idioma tiene sus propias imágenes para eso.", en: "Not literally. Every language has its own images for that." } },
      ],
      question: {
        prompt: { es: "¿Qué significa «die Kirche im Dorf lassen»?", en: "What does 'die Kirche im Dorf lassen' mean?" },
        options: [
          { es: "No exagerar", en: "Not to exaggerate" },
          { es: "Quedarse en casa", en: "To stay at home" },
          { es: "Ir a misa", en: "To go to church" },
          { es: "Mudarse al campo", en: "To move to the countryside" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "idioms"],
    },
  ]),
};
