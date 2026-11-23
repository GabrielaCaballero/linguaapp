import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u28",
  lang: "it",
  index: 28,
  cefr: "C1",
  title: { target: "Ironia e lingua parlata", es: "Ironía y lengua coloquial", en: "Irony and everyday speech" },
  canDo: [
    { es: "Puedo entender bromas, ironía y frases hechas de la conversación cotidiana.", en: "I can understand jokes, irony and set phrases in everyday conversation." },
    { es: "Sé usar marcadores como cioè, insomma, dai, mica y figurati para sonar natural.", en: "I can use markers like cioè, insomma, dai, mica and figurati to sound natural." },
    { es: "Puedo poner el tema al principio de la frase (il caffè lo offro io), como se hace al hablar.", en: "I can put the topic first (il caffè lo offro io), the way people do when speaking." },
  ],
  icon: "😏",
  items: build("it", 28, "C1", [
    // ── Discourse markers ────────────────────────────────────
    {
      id: "cioe", type: "word", pos: "other", target: "cioè",
      gloss: { es: "o sea (para corregir o precisar)", en: "I mean / that is" },
      distractors: ["ciò", "così", "ecco"],
      note: { es: "Lleva acento grave: cioè. Al hablar sirve también para ganar tiempo.", en: "It has a grave accent: cioè. In speech it also buys you time." },
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers", "colloquial"],
    },
    {
      id: "insomma", type: "word", pos: "other", target: "insomma",
      gloss: { es: "en fin, en resumen", en: "in short / anyway" },
      distractors: ["insieme", "somma", "intanto"],
      note: { es: "Sola y con tono dudoso significa «más o menos»: Ti è piaciuto? — Insomma…", en: "On its own, said doubtfully, it means 'so-so': Ti è piaciuto? — Insomma…" },
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers", "colloquial"],
    },
    {
      id: "mica", type: "word", pos: "adv", target: "mica",
      gloss: { es: "para nada (refuerza un «no»)", en: "not at all (strengthens a negative)" },
      distractors: ["mai", "molto", "poco"],
      note: { es: "Va después del verbo: non è mica facile. Sin «non» delante: mica male = nada mal.", en: "It goes after the verb: non è mica facile. Without non: mica male = not bad at all." },
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers", "colloquial"],
    },
    {
      id: "figurati", type: "phrase", pos: "phrase", register: "informal", target: "Figurati!",
      gloss: { es: "¡No es nada! (respuesta a un «gracias» o un «perdón»)", en: "Don't mention it! (reply to thanks or sorry)" },
      accept: [{ text: "Figurati" }],
      distractors: ["Figurato!", "Figurarti!", "Figura!"],
      note: { es: "Con Lei: Si figuri!", en: "With Lei: Si figuri!" },
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers", "chunk"],
    },
    {
      id: "ma-dai", type: "phrase", pos: "phrase", register: "informal", target: "Ma dai!",
      gloss: { es: "¡No me digas! / ¡Vamos!", en: "No way! / Come on!" },
      distractors: ["Ma da!", "Ma dici!", "Ma dammi!"],
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers", "chunk"],
    },
    {
      id: "boh", type: "phrase", pos: "phrase", register: "informal", target: "Boh.",
      gloss: { es: "Ni idea.", en: "Dunno." },
      distractors: ["Bah.", "Beh.", "Buh."],
      note: { es: "Beh = bueno, pues (para empezar a hablar); bah = expresa desdén.", en: "Beh = well (to start talking); bah = expresses disdain." },
      tags: ["discourse-markers", "colloquial"],
    },
    {
      id: "si-come-no", type: "phrase", pos: "phrase", register: "informal", target: "Sì, come no!",
      gloss: { es: "¡Sí, claro! (irónico: no me lo creo)", en: "Yeah, right! (ironic)" },
      distractors: ["Sì, come sì!", "Sì, perché no!", "Sì, come mai!"],
      note: { es: "«Sì, perché no!» sí es un «¿por qué no?» sincero.", en: "'Sì, perché no!' is a sincere 'why not?'." },
      tags: ["irony", "chunk"],
    },
    {
      id: "ci-mancherebbe", type: "phrase", pos: "phrase", target: "Ci mancherebbe!",
      gloss: { es: "¡Faltaría más!", en: "But of course! / Not at all!" },
      accept: [{ text: "Ci mancherebbe altro!" }],
      distractors: ["Ci mancava!", "Mi mancherebbe!", "Ci mancherà!"],
      tags: ["chunk", "polite"],
    },
    {
      id: "fare-lo-spiritoso", type: "phrase", pos: "phrase", target: "fare lo spiritoso",
      gloss: { es: "hacerse el gracioso", en: "to act the comedian / be a smart alec" },
      distractors: ["fare il spiritoso", "fare lo spirito", "fare lo spiritato"],
      note: { es: "Con s + consonante el artículo es «lo»: lo spiritoso. En femenino: fare la spiritosa.", en: "Before s + consonant the article is lo: lo spiritoso. Feminine: fare la spiritosa." },
      tags: ["humour", "chunk"],
    },
    {
      id: "fare-una-figuraccia", type: "phrase", pos: "phrase", target: "fare una figuraccia",
      gloss: { es: "hacer el ridículo, quedar fatal", en: "to embarrass yourself" },
      distractors: ["fare una figurina", "fare una bella figura", "fare la figura"],
      note: { es: "figuraccia = figura + -accia (mala): lo contrario de «fare bella figura».", en: "figuraccia = figura + -accia (bad): the opposite of 'fare bella figura'." },
      tags: ["humour", "chunk"],
    },
    {
      id: "che-figata", type: "phrase", pos: "phrase", register: "informal", target: "Che figata!",
      gloss: { es: "¡Qué genial! (muy informal)", en: "How cool! (very informal)" },
      distractors: ["Che figura!", "Che fatica!", "Che fregatura!"],
      tags: ["colloquial", "chunk"],
    },
    {
      id: "faccia-tosta", type: "phrase", pos: "phrase", target: "avere la faccia tosta",
      gloss: { es: "tener mucho descaro, ser un caradura", en: "to have a nerve / be brazen" },
      distractors: ["avere la faccia dura", "avere la testa tosta", "avere la faccia rossa"],
      tags: ["idioms", "colloquial"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "non-e-mica-colpa-mia", type: "sentence", target: "Non è mica colpa mia!",
      gloss: { es: "¡No es culpa mía, eh!", en: "It's not my fault, you know!" },
      distractors: ["mai", "mio", "c'è"],
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers", "colloquial"],
    },
    {
      id: "il-caffe-lo-offro-io", type: "sentence", target: "Il caffè lo offro io.",
      gloss: { es: "El café lo pago yo.", en: "The coffee's on me." },
      errors: [{ text: "Il caffè offro io.", feedback: { es: "Si el objeto va primero, se retoma con un pronombre: il caffè lo offro io.", en: "A fronted object is picked up by a pronoun: il caffè lo offro io." }, ruleId: "it-g-dislocazione" }],
      distractors: ["la", "offri", "mi"],
      grammar: ["it-g-dislocazione"], tags: ["dislocation", "colloquial"],
    },
    {
      id: "di-tempo-libero-ne", type: "sentence", target: "Di tempo libero non ne ho proprio.",
      gloss: { es: "Tiempo libre, no tengo nada.", en: "Free time? I've got none at all." },
      errors: [{ text: "Di tempo libero non ho proprio.", feedback: { es: "«di + algo» al principio se retoma con ne: non ne ho.", en: "A fronted 'di + something' is picked up by ne: non ne ho." }, ruleId: "it-g-dislocazione" }],
      distractors: ["lo", "ci", "niente"],
      grammar: ["it-g-dislocazione"], tags: ["dislocation", "colloquial"],
    },
    {
      id: "questa-storia-la-conosco", type: "sentence", target: "Questa storia la conosco a memoria.",
      gloss: { es: "Esta historia me la sé de memoria.", en: "I know this story by heart." },
      distractors: ["lo", "conosce", "in"],
      grammar: ["it-g-dislocazione"], tags: ["dislocation", "colloquial"],
    },
    {
      id: "cioe-non-volevo", type: "sentence", target: "Cioè, non volevo dire proprio questo.",
      gloss: { es: "O sea, no quería decir exactamente eso.", en: "I mean, that's not quite what I meant." },
      distractors: ["Ciò", "voglio", "quello"],
      grammar: ["it-g-segnali-discorsivi"], tags: ["discourse-markers"],
    },
    {
      id: "bella-figura-ironica", type: "sentence", target: "Bella figura che abbiamo fatto!",
      gloss: { es: "¡Pues sí que quedamos bien! (irónico: quedamos fatal)", en: "Well, that went brilliantly! (ironic: we looked awful)" },
      distractors: ["Bello", "fatta", "hanno"],
      note: { es: "La ironía está en el tono: se dice «bella» pero se quiere decir «brutta».", en: "The irony is in the tone: you say 'bella' but mean 'brutta'." },
      tags: ["irony"],
    },
    {
      id: "dai-non-fare-lo-spiritoso", type: "sentence", register: "informal", target: "Dai, non fare lo spiritoso!",
      gloss: { es: "¡Vamos, no te hagas el gracioso!", en: "Come on, stop being a smart alec!" },
      distractors: ["il", "fai", "Da"],
      grammar: ["it-g-segnali-discorsivi"], tags: ["humour", "discourse-markers"],
    },
    {
      id: "chi-te-lha-fatto-fare", type: "sentence", register: "informal", target: "Ma chi te l'ha fatto fare?",
      gloss: { es: "¿Y quién te mandó a meterte en eso?", en: "Whatever made you do that?" },
      distractors: ["ti", "lo", "fatta"],
      note: { es: "Se dice a quien se metió solo en un lío.", en: "Said to someone who got themselves into a mess." },
      tags: ["colloquial", "chunk"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-segnali-discorsivi", type: "pattern", target: "cioè · insomma · dai · figurati · mica · boh",
      gloss: { es: "marcadores del discurso en la conversación", en: "discourse markers in conversation" },
      pattern: {
        rule: {
          es: "No cambian el contenido sino el tono: cioè corrige, insomma resume, dai anima, figurati quita importancia, mica refuerza un «no», boh dice «ni idea».",
          en: "They change the tone, not the content: cioè corrects, insomma sums up, dai encourages, figurati plays it down, mica strengthens a 'no', boh means 'no idea'.",
        },
        table: [["cioè", "correggere"], ["insomma", "riassumere"], ["dai", "incoraggiare"], ["figurati", "minimizzare"], ["mica", "negazione forte"]],
      },
      question: {
        prompt: { es: "Una amiga te dice «Grazie mille per l'aiuto!». Respondes con naturalidad…", en: "A friend says 'Grazie mille per l'aiuto!'. You naturally reply…" },
        options: ["Figurati!", "Mica!", "Insomma!", "Cioè!"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-segnali-discorsivi"], tags: ["grammar", "discourse-markers"],
    },
    {
      id: "pat-mica", type: "pattern", target: "non è mica facile · non ho mica detto questo",
      gloss: { es: "mica: reforzar una negación", en: "mica: strengthening a negative" },
      pattern: {
        rule: {
          es: "mica refuerza un «no» y va después del verbo (o del auxiliar): non è mica vero, non l'ho mica visto. Es coloquial: en un texto formal se usa affatto (non è affatto vero).",
          en: "mica strengthens a 'no' and goes after the verb (or auxiliary): non è mica vero, non l'ho mica visto. It's colloquial: formal texts use affatto (non è affatto vero).",
        },
        table: [["presente", "non è mica facile"], ["passato", "non l'ho mica visto"], ["formale", "non è affatto facile"]],
      },
      question: {
        prompt: { es: "Completa: «Non sono ___ stanco, possiamo continuare.»", en: "Complete: 'Non sono ___ stanco, possiamo continuare.'" },
        options: ["mica", "nessun", "niente", "mai non"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-segnali-discorsivi"], tags: ["grammar", "discourse-markers"],
    },
    {
      id: "pat-dislocazione", type: "pattern", target: "il caffè lo offro io · i biglietti li ho presi · di tempo ne ho poco",
      gloss: { es: "dislocación: el tema primero y un pronombre que lo retoma", en: "dislocation: topic first, picked up by a pronoun" },
      pattern: {
        rule: {
          es: "Al hablar, el objeto suele ir al principio y un pronombre lo retoma: lo, la, li, le para el objeto directo; ne para «di + algo»; ci para un lugar. En tiempos compuestos el participio concuerda: i biglietti li ho presi.",
          en: "In speech the object often comes first and a pronoun picks it up: lo, la, li, le for a direct object; ne for 'di + something'; ci for a place. In compound tenses the participle agrees: i biglietti li ho presi.",
        },
        table: [["la pizza", "la porto io"], ["i biglietti", "li ho presi"], ["di tempo", "ne ho poco"], ["a Roma", "ci vado spesso"]],
      },
      question: {
        prompt: { es: "Completa: «I biglietti ___ ho già comprati.»", en: "Complete: 'I biglietti ___ ho già comprati.'" },
        options: ["li", "le", "ne", "gli"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-dislocazione"], tags: ["grammar", "dislocation"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-figuraccia", type: "listening",
      target: "Ieri sono arrivato al colloquio di lavoro con la camicia macchiata di caffè. Insomma, una figuraccia! Però il selezionatore si è messo a ridere e mi ha detto di stare tranquillo, che capita a tutti. Alla fine mi hanno preso.",
      gloss: {
        es: "Ayer llegué a la entrevista de trabajo con la camisa manchada de café. En fin, ¡quedé fatal! Pero el entrevistador se echó a reír y me dijo que me tranquilizara, que le pasa a todo el mundo. Al final me contrataron.",
        en: "Yesterday I turned up to a job interview with coffee all over my shirt. Talk about embarrassing! But the interviewer burst out laughing and told me to relax, it happens to everyone. In the end they hired me.",
      },
      question: {
        prompt: { es: "¿Cómo terminó la entrevista?", en: "How did the interview end?" },
        options: [
          { es: "Le dieron el trabajo.", en: "He got the job." },
          { es: "Lo rechazaron por la camisa.", en: "He was turned down because of the shirt." },
          { es: "Tuvo que volver otro día.", en: "He had to come back another day." },
          { es: "El entrevistador se enojó.", en: "The interviewer got angry." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "humour"],
    },
    {
      id: "dlg-cena-suoceri", type: "dialogue", register: "informal", target: "Hanno fatto finta di niente.",
      gloss: { es: "Hicieron como si nada.", en: "They pretended nothing had happened." },
      turns: [
        { who: "A", target: "Allora, com'è andata la cena con i suoceri?", gloss: { es: "¿Y? ¿Cómo te fue en la cena con tus suegros?", en: "So, how did dinner with the in-laws go?" } },
        { who: "B", target: "Benissimo, come no! Ho rovesciato il vino rosso sulla tovaglia della nonna.", gloss: { es: "¡De maravilla, claro! Derramé el vino tinto en el mantel de la abuela.", en: "Brilliantly, of course! I spilled red wine on grandma's tablecloth." } },
        { who: "A", target: "Ma dai! E loro?", gloss: { es: "¡No me digas! ¿Y ellos?", en: "No way! And what did they do?" } },
        { who: "B", target: "Hanno fatto finta di niente. Cioè, la nonna mi ha fulminato con lo sguardo.", gloss: { es: "Hicieron como si nada. Bueno, la abuela me fulminó con la mirada.", en: "They pretended nothing had happened. Well, grandma gave me a withering look." } },
      ],
      question: {
        prompt: { es: "¿Cómo le fue realmente a B en la cena?", en: "How did dinner really go for B?" },
        options: [
          { es: "Mal: derramó vino en el mantel de la abuela.", en: "Badly: B spilled wine on grandma's tablecloth." },
          { es: "Muy bien, sin ningún problema.", en: "Very well, with no problems at all." },
          { es: "No fue a la cena.", en: "B didn't go to the dinner." },
          { es: "La abuela le regaló un mantel.", en: "Grandma gave B a tablecloth." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-segnali-discorsivi"], tags: ["dialogue", "irony", "humour"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-battuta", type: "bridge", onlyFor: "es", target: "la battuta",
      gloss: { es: "el chiste corto, la ocurrencia", en: "the quip / one-liner" },
      question: {
        prompt: { es: "«Marco fa sempre battute» significa…", en: "'Marco fa sempre battute' means…" },
        options: [
          { es: "Marco siempre hace chistes.", en: "Marco is always cracking jokes." },
          { es: "Marco siempre da golpes.", en: "Marco is always hitting things." },
          { es: "Marco siempre organiza batidas.", en: "Marco is always organising search parties." },
          { es: "Marco siempre bate récords.", en: "Marco is always breaking records." },
        ],
        answer: 0,
      },
      note: { es: "Una battuta es un chiste corto o una ocurrencia, y también la línea de un actor; un chiste largo es «una barzelletta»." },
      exercises: ["guess", "question"], tags: ["bridge", "humour"],
    },
  ]),
};
