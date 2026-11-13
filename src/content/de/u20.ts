import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u20",
  lang: "de",
  index: 20,
  cefr: "B2",
  title: { target: "Nachrichten", es: "Noticias", en: "The news" },
  canDo: [
    { es: "Puedo entender noticias de radio, TV y prensa sobre temas conocidos.", en: "I can understand radio, TV and press news on familiar topics." },
    { es: "Puedo transmitir lo que otra persona dijo, afirmó o preguntó.", en: "I can pass on what someone said, claimed or asked." },
    { es: "Sé reconocer y usar el Konjunktiv I (er sei, sie habe) y sollen / wollen para rumores.", en: "I can recognise and use Konjunktiv I (er sei, sie habe) and sollen / wollen for hearsay." },
  ],
  icon: "📺",
  items: build("de", 20, "B2", [
    // ── News words ───────────────────────────────────────────
    {
      id: "schlagzeile", type: "word", pos: "noun", target: "die Schlagzeile", gender: "f", plural: "die Schlagzeilen",
      gloss: { es: "el titular", en: "the headline" },
      distractors: ["der Schlagzeile", "die Schlagsahne", "die Zeile"],
      tags: ["news", "compound"],
    },
    {
      id: "bericht", type: "word", pos: "noun", target: "der Bericht", gender: "m", plural: "die Berichte",
      gloss: { es: "el informe, el reportaje", en: "the report" },
      distractors: ["die Bericht", "der Verzicht", "der Unterricht"],
      tags: ["news", "goethe-b1"],
    },
    {
      id: "berichten", type: "word", pos: "verb", target: "berichten",
      gloss: { es: "informar (sobre), contar", en: "to report" },
      distractors: ["berichtigen", "verrichten", "beraten"],
      note: { es: "Ojo: berichtigen = corregir.", en: "Careful: berichtigen = to correct." },
      tags: ["news", "goethe-b1"],
    },
    {
      id: "behaupten", type: "word", pos: "verb", target: "behaupten",
      gloss: { es: "afirmar (sin pruebas)", en: "to claim / assert" },
      distractors: ["behalten", "beachten", "behüten"],
      tags: ["news", "goethe-b2"],
    },
    {
      id: "regierung", type: "word", pos: "noun", target: "die Regierung", gender: "f", plural: "die Regierungen",
      gloss: { es: "el gobierno", en: "the government" },
      distractors: ["der Regierung", "die Regelung", "die Regung"],
      tags: ["news", "politics", "goethe-b1"],
    },
    {
      id: "wahl", type: "word", pos: "noun", target: "die Wahl", gender: "f", plural: "die Wahlen",
      gloss: { es: "la elección (votación o decisión)", en: "the election / choice" },
      distractors: ["der Wahl", "der Wal", "die Wahrheit"],
      note: { es: "Ojo: der Wal = la ballena.", en: "Careful: der Wal = whale." },
      tags: ["news", "politics", "goethe-b1"],
    },
    {
      id: "unfall", type: "word", pos: "noun", target: "der Unfall", gender: "m", plural: "die Unfälle",
      gloss: { es: "el accidente", en: "the accident" },
      distractors: ["die Unfall", "der Zufall", "der Einfall"],
      note: { es: "der Zufall = la casualidad; der Einfall = la ocurrencia.", en: "der Zufall = coincidence; der Einfall = idea." },
      tags: ["news", "goethe-a2"],
    },
    {
      id: "zeuge", type: "word", pos: "noun", target: "der Zeuge", gender: "m", plural: "die Zeugen",
      gloss: { es: "el/la testigo", en: "the witness" },
      accept: [{ text: "die Zeugin" }],
      distractors: ["die Zeuge", "das Zeug", "der Zeiger"],
      note: { es: "Declinación -n: den / dem Zeugen.", en: "n-declension: den / dem Zeugen." },
      tags: ["news", "n-declension"],
    },
    {
      id: "laut", type: "word", pos: "prep", target: "laut",
      gloss: { es: "según (laut Polizei)", en: "according to (laut Polizei)" },
      distractors: ["leise", "laufend", "bis"],
      note: { es: "Como adjetivo, laut = fuerte, ruidoso.", en: "As an adjective, laut = loud." },
      tags: ["news", "reporting"],
    },
    {
      id: "angeblich", type: "word", pos: "adv", target: "angeblich",
      gloss: { es: "supuestamente", en: "allegedly / supposedly" },
      distractors: ["ängstlich", "angenehm", "anfänglich"],
      tags: ["news", "reporting", "goethe-b2"],
    },
    {
      id: "verletzt", type: "word", pos: "adj", target: "verletzt",
      gloss: { es: "herido/a", en: "injured" },
      distractors: ["verletzlich", "verlegt", "versetzt"],
      tags: ["news", "goethe-b1"],
    },
    {
      id: "es-heisst", type: "phrase", pos: "phrase", target: "es heißt, dass …",
      gloss: { es: "se dice que…", en: "it's said that…" },
      distractors: ["es heiße, dass …", "er heißt, dass …", "es heißt, das …"],
      spoken: "es heißt, dass",
      tags: ["news", "reporting"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ministerin-sei-nicht-informiert", type: "sentence", target: "Die Ministerin erklärte, sie sei nicht informiert worden.",
      gloss: { es: "La ministra declaró que no había sido informada.", en: "The minister stated that she had not been informed." },
      accept: [
        { text: "Die Ministerin erklärte, sie wäre nicht informiert worden.", verdict: "almost", feedback: { es: "Se oye, pero en las noticias se usa el Konjunktiv I: sie sei.", en: "You'll hear it, but news style uses Konjunktiv I: sie sei." } },
        { text: "Die Ministerin erklärte, dass sie nicht informiert worden sei." },
      ],
      distractors: ["ist", "war", "werden"],
      tags: ["konjunktiv1", "news"],
    },
    {
      id: "laut-polizei", type: "sentence", target: "Laut Polizei wurde niemand verletzt.",
      gloss: { es: "Según la policía, nadie resultó herido.", en: "According to the police, nobody was injured." },
      distractors: ["Laute", "wird", "verletzte"],
      tags: ["news", "passive"],
    },
    {
      id: "er-behauptet-er-sei", type: "sentence", target: "Er behauptet, er sei krank gewesen.",
      gloss: { es: "Afirma que estuvo enfermo.", en: "He claims he was ill." },
      accept: [
        { text: "Er behauptet, dass er krank gewesen sei." },
        { text: "Er behauptet, er wäre krank gewesen.", verdict: "almost", feedback: { es: "En registro escrito: Konjunktiv I (er sei).", en: "In written style: Konjunktiv I (er sei)." } },
      ],
      distractors: ["ist", "habe", "war"],
      tags: ["konjunktiv1"],
    },
    {
      id: "sie-fragte-ob", type: "sentence", target: "Sie fragte, ob ich Zeit hätte.",
      gloss: { es: "Me preguntó si tenía tiempo.", en: "She asked whether I had time." },
      accept: [{ text: "Sie fragte, ob ich Zeit habe." }, { text: "Sie hat gefragt, ob ich Zeit habe." }],
      errors: [{ text: "Sie fragte, wenn ich Zeit hätte.", feedback: { es: "Para «si» en preguntas indirectas: ob (wenn = cuando / si condicional).", en: "Indirect 'whether' = ob (wenn = when / conditional if)." } }],
      distractors: ["wenn", "hatte", "dass"],
      tags: ["indirect-questions"],
    },
    {
      id: "unfall-verletzt", type: "sentence", target: "Bei dem Unfall wurden drei Personen verletzt.",
      gloss: { es: "En el accidente resultaron heridas tres personas.", en: "Three people were injured in the accident." },
      accept: [{ text: "Beim Unfall wurden drei Personen verletzt." }],
      distractors: ["wird", "verletzen", "Person"],
      tags: ["news", "passive"],
    },
    {
      id: "soll-abgerissen-werden", type: "sentence", target: "Das Gebäude soll abgerissen werden.",
      gloss: { es: "Dicen que van a demoler el edificio.", en: "The building is supposedly going to be torn down." },
      accept: [{ text: "Angeblich soll das Gebäude abgerissen werden." }],
      distractors: ["will", "abreißen", "wird"],
      tags: ["news", "sollen", "passive"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-konjunktiv1", type: "pattern", target: "er sei · sie habe · es werde · er könne · sie komme",
      gloss: { es: "el Konjunktiv I (estilo indirecto)", en: "Konjunktiv I (reported speech)" },
      pattern: {
        rule: {
          es: "En noticias y textos formales, el estilo indirecto usa Konjunktiv I: raíz + -e (er komme, sie habe); sein → sei. Si coincide con el indicativo (wir haben), se usa Konjunktiv II (wir hätten).",
          en: "In news and formal texts, reported speech uses Konjunktiv I: stem + -e (er komme, sie habe); sein → sei. Where it matches the indicative (wir haben), use Konjunktiv II (wir hätten).",
        },
        table: [["", "sein", "haben", "können", "kommen"], ["ich", "sei", "hätte (KII)", "könne", "käme (KII)"], ["er / sie", "sei", "habe", "könne", "komme"], ["wir / sie", "seien", "hätten (KII)", "könnten (KII)", "kämen (KII)"]],
      },
      question: {
        prompt: { es: "Completa (estilo indirecto): «Der Sprecher sagte, die Firma ___ keine Probleme.»", en: "Complete (reported speech): 'Der Sprecher sagte, die Firma ___ keine Probleme.'" },
        options: ["habe", "haben", "hast", "habest"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "konjunktiv1"],
    },
    {
      id: "pat-indirekte-frage", type: "pattern", target: "Sie fragt, ob … · Sie fragt, wann …",
      gloss: { es: "preguntas indirectas (ob, W-)", en: "indirect questions (ob, W-words)" },
      pattern: {
        rule: {
          es: "Pregunta de sí/no → ob (si); con palabra interrogativa se mantiene (wann, wo, warum). El verbo va al final: Weißt du, wann der Zug kommt?",
          en: "Yes/no question → ob (whether); question words stay (wann, wo, warum). The verb goes last: Weißt du, wann der Zug kommt?",
        },
        table: [["«Kommst du?»", "Sie fragt, ob ich komme."], ["«Wann kommst du?»", "Sie fragt, wann ich komme."]],
      },
      question: {
        prompt: { es: "«¿Vienes?» → Sie fragt, ___ ich komme.", en: "'Kommst du?' → Sie fragt, ___ ich komme." },
        options: ["ob", "wenn", "dass", "was"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "indirect-questions"],
    },
    {
      id: "pat-sollen-wollen", type: "pattern", target: "Er soll reich sein. · Er will es gesehen haben.",
      gloss: { es: "sollen y wollen para rumores y afirmaciones", en: "sollen and wollen for hearsay and claims" },
      pattern: {
        rule: {
          es: "sollen = «dicen que» (Er soll reich sein = dicen que es rico). wollen = «él afirma» (Er will es gesehen haben = dice haberlo visto, pero lo dudo).",
          en: "sollen = 'they say' (Er soll reich sein = he's said to be rich). wollen = 'he claims' (Er will es gesehen haben = he claims to have seen it).",
        },
        table: [["sollen", "Das Restaurant soll sehr gut sein."], ["wollen", "Sie will nichts gewusst haben."]],
      },
      question: {
        prompt: { es: "«Dicen que es millonario» es…", en: "'He's said to be a millionaire' is…" },
        options: ["Er soll Millionär sein.", "Er will Millionär sein.", "Er muss Millionär sein.", "Er darf Millionär sein."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "sollen"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-autobahn", type: "listening",
      target: "Wie die Polizei mitteilte, kam es am Montagabend auf der Autobahn zu einem schweren Unfall. Zwei Personen wurden verletzt. Die Autobahn war drei Stunden gesperrt.",
      gloss: {
        es: "Según informó la policía, el lunes por la noche hubo un accidente grave en la autopista. Dos personas resultaron heridas. La autopista estuvo cerrada tres horas.",
        en: "As the police reported, there was a serious accident on the motorway on Monday evening. Two people were injured. The motorway was closed for three hours.",
      },
      question: {
        prompt: { es: "¿Cuánto tiempo estuvo cerrada la autopista?", en: "How long was the motorway closed?" },
        options: [
          { es: "Tres horas", en: "Three hours" },
          { es: "Dos horas", en: "Two hours" },
          { es: "Toda la noche", en: "All night" },
          { es: "No la cerraron", en: "It wasn't closed" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "news"],
    },
    {
      id: "dlg-zeitung", type: "dialogue", register: "informal", target: "Es stand in der Zeitung.",
      gloss: { es: "Salió en el periódico.", en: "It was in the paper." },
      turns: [
        { who: "A", target: "Hast du gehört? Die Bahn soll ab Mai teurer werden.", gloss: { es: "¿Te enteraste? Dicen que el tren va a ser más caro desde mayo.", en: "Have you heard? Train fares are supposed to go up from May." } },
        { who: "B", target: "Wer sagt das?", gloss: { es: "¿Quién lo dice?", en: "Who says so?" } },
        { who: "A", target: "Es stand heute in der Zeitung.", gloss: { es: "Salió hoy en el periódico.", en: "It was in the paper today." } },
      ],
      question: {
        prompt: { es: "¿Qué noticia cuenta A?", en: "What news does A share?" },
        options: [
          { es: "Que el tren va a subir de precio desde mayo.", en: "Train fares are going up from May." },
          { es: "Que habrá huelga de trenes en mayo.", en: "There'll be a train strike in May." },
          { es: "Que el tren será gratis en mayo.", en: "Trains will be free in May." },
          { es: "Que cierran una estación.", en: "A station is closing." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "news"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-gymnasium", type: "bridge", onlyFor: "es", target: "das Gymnasium",
      gloss: { es: "el liceo (secundaria académica)", en: "the academic secondary school" },
      question: {
        prompt: { es: "«Meine Tochter geht aufs Gymnasium» significa…", en: "'Meine Tochter geht aufs Gymnasium' means…" },
        options: [
          { es: "Mi hija va al liceo (secundaria).", en: "My daughter attends an academic secondary school." },
          { es: "Mi hija va al gimnasio.", en: "My daughter goes to the gym." },
          { es: "Mi hija hace gimnasia.", en: "My daughter does gymnastics." },
          { es: "Mi hija va a la universidad.", en: "My daughter goes to university." },
        ],
        answer: 0,
      },
      note: { es: "das Gymnasium = el liceo que prepara para la universidad; el gimnasio es «das Fitnessstudio»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
