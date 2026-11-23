import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u31",
  lang: "de",
  index: 31,
  cefr: "C2",
  title: { target: "Feine Unterschiede", es: "Matices finos", en: "Fine distinctions" },
  canDo: [
    { es: "Puedo distinguir palabras casi sinónimas y elegir la que tiene la connotación justa.", en: "I can tell near-synonyms apart and pick the one with the right connotation." },
    { es: "Puedo expresar grados de certeza con verbos modales (muss, müsste, dürfte, könnte).", en: "I can express degrees of certainty with modal verbs (muss, müsste, dürfte, könnte)." },
    { es: "Sé distinguir pares que se confunden, como scheinbar / anscheinend o kindlich / kindisch.", en: "I can tell confusable pairs apart, like scheinbar / anscheinend or kindlich / kindisch." },
  ],
  icon: "🔍",
  items: build("de", 31, "C2", [
    // ── Confusable pairs ─────────────────────────────────────
    {
      id: "scheinbar", type: "word", pos: "adj", target: "scheinbar",
      gloss: { es: "aparente (pero no real)", en: "seeming (but not real)" },
      distractors: ["anscheinend", "scheinheilig", "wahrscheinlich"],
      note: { es: "scheinbar = parece, pero no es: eine scheinbar einfache Frage.", en: "scheinbar = it looks so, but isn't: eine scheinbar einfache Frage." },
      grammar: ["de-g-bedeutungspaare"], tags: ["nuance", "confusables"],
    },
    {
      id: "anscheinend", type: "word", pos: "adv", target: "anscheinend",
      gloss: { es: "al parecer, por lo visto", en: "apparently (as far as one can tell)" },
      distractors: ["scheinbar", "anständig", "anschaulich"],
      note: { es: "anscheinend = probablemente es así. En el habla se oye scheinbar con este sentido, pero en un texto cuidado se distinguen.", en: "anscheinend = it probably is so. In speech scheinbar is often used this way, but careful writing keeps them apart." },
      grammar: ["de-g-bedeutungspaare"], tags: ["nuance", "confusables"],
    },
    {
      id: "vermeintlich", type: "word", pos: "adj", target: "vermeintlich",
      gloss: { es: "supuesto/a (y en realidad falso)", en: "supposed (but mistakenly so)" },
      distractors: ["vermutlich", "vermeidbar", "verantwortlich"],
      note: { es: "der vermeintliche Täter = el que se creía culpable, y no lo era.", en: "der vermeintliche Täter = the person wrongly believed to be the culprit." },
      grammar: ["de-g-bedeutungspaare"], tags: ["nuance", "confusables"],
    },
    {
      id: "kindisch", type: "word", pos: "adj", target: "kindisch",
      gloss: { es: "infantil (en sentido negativo)", en: "childish" },
      distractors: ["kindlich", "kinderlos", "kindgerecht"],
      note: { es: "kindlich es neutro o positivo (eine kindliche Freude); kindisch es un reproche.", en: "kindlich is neutral or positive (eine kindliche Freude); kindisch is a reproach." },
      grammar: ["de-g-bedeutungspaare"], tags: ["nuance", "confusables"],
    },
    {
      id: "geschaeftig", type: "word", pos: "adj", target: "geschäftig",
      gloss: { es: "ajetreado/a, muy activo/a", en: "bustling, busy" },
      distractors: ["geschäftlich", "gescheit", "gefällig"],
      note: { es: "geschäftlich = de negocios (eine geschäftliche Reise).", en: "geschäftlich = on business (eine geschäftliche Reise)." },
      grammar: ["de-g-bedeutungspaare"], tags: ["nuance", "confusables"],
    },
    {
      id: "konnotation", type: "word", pos: "noun", target: "die Konnotation", gender: "f", plural: "die Konnotationen",
      gloss: { es: "la connotación", en: "the connotation" },
      distractors: ["der Konnotation", "die Kondition", "die Kooperation"],
      tags: ["nuance", "language"],
    },
    {
      id: "nuance", type: "word", pos: "noun", target: "die Nuance", gender: "f", plural: "die Nuancen",
      gloss: { es: "el matiz", en: "the shade of meaning, nuance" },
      distractors: ["der Nuance", "die Annonce", "die Instanz"],
      note: { es: "um eine Nuance = un poquito: um eine Nuance zu laut.", en: "um eine Nuance = a touch: um eine Nuance zu laut." },
      tags: ["nuance", "language"],
    },
    {
      id: "beschoenigen", type: "word", pos: "verb", target: "beschönigen",
      gloss: { es: "maquillar (la realidad), suavizar", en: "to gloss over, sugar-coat" },
      distractors: ["beschädigen", "beschäftigen", "bescheinigen"],
      tags: ["nuance", "connotation"],
    },
    {
      id: "verschweigen", type: "word", pos: "verb", target: "verschweigen",
      gloss: { es: "callarse, ocultar (información)", en: "to keep quiet about, conceal" },
      forms: { er: "verschweigt", praet: "verschwieg", pp: "verschwiegen" },
      distractors: ["verschwinden", "verschreiben", "verweigern"],
      note: { es: "jemandem etwas verschweigen = ocultarle algo a alguien.", en: "jemandem etwas verschweigen = to keep something from someone." },
      tags: ["nuance", "connotation"],
    },
    {
      id: "ausgerechnet", type: "word", pos: "adv", target: "ausgerechnet",
      gloss: { es: "justamente (y para colmo)", en: "of all (people, days, things)" },
      distractors: ["ausgezeichnet", "abgerechnet", "ausgerichtet"],
      note: { es: "Expresa fastidio o sorpresa: ausgerechnet du = justo tú, de entre todos.", en: "It signals annoyance or surprise: ausgerechnet du = you, of all people." },
      tags: ["nuance", "particles"],
    },
    {
      id: "allenfalls", type: "word", pos: "adv", target: "allenfalls",
      gloss: { es: "como mucho, a lo sumo", en: "at most, at best" },
      distractors: ["allerdings", "ebenfalls", "keinesfalls"],
      tags: ["nuance", "formal"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "zwischen-den-zeilen", type: "phrase", pos: "phrase", target: "zwischen den Zeilen lesen",
      gloss: { es: "leer entre líneas", en: "to read between the lines" },
      distractors: ["zwischen die Zeilen lesen", "unter den Zeilen lesen", "zwischen den Seiten lesen"],
      tags: ["idioms", "nuance"],
    },
    {
      id: "ansichtssache", type: "phrase", pos: "phrase", target: "Das ist Ansichtssache.",
      gloss: { es: "Es cuestión de opiniones.", en: "That's a matter of opinion." },
      distractors: ["Das ist Aussichtssache.", "Das ist Absichtssache.", "Das ist Einsichtssache."],
      tags: ["opinion", "nuance"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "duerfte-angekommen", type: "sentence", target: "Er dürfte inzwischen angekommen sein.",
      gloss: { es: "Para ahora ya debe de haber llegado (es lo más probable).", en: "He has probably arrived by now." },
      annot: { "dürfte": { es: "Konjunktiv II de dürfen: «es probable que»", en: "Konjunktiv II of dürfen: 'probably'" } },
      errors: [{ text: "Er darf inzwischen angekommen sein.", feedback: { es: "Para una suposición se usa el Konjunktiv II: dürfte. darf significa «tener permiso».", en: "A supposition needs Konjunktiv II: dürfte. darf means 'is allowed to'." }, ruleId: "de-g-vermutung-modal" }],
      distractors: ["darf", "hat", "ankommen"],
      grammar: ["de-g-vermutung-modal"], tags: ["modal-verbs", "supposition"],
    },
    {
      id: "muss-missverstaendnis", type: "sentence", target: "Das muss ein Missverständnis sein.",
      gloss: { es: "Seguro que es un malentendido.", en: "That must be a misunderstanding." },
      distractors: ["soll", "Missverständnisse", "ist"],
      grammar: ["de-g-vermutung-modal"], tags: ["modal-verbs", "supposition"],
    },
    {
      id: "koennte-recht-haben", type: "sentence", target: "Sie könnte recht haben, aber ich bezweifle es.",
      gloss: { es: "Puede que tenga razón, pero lo dudo.", en: "She might be right, but I doubt it." },
      accept: [{ text: "Sie könnte Recht haben, aber ich bezweifle es." }],
      distractors: ["kann", "bezweifelt", "Zweifel"],
      grammar: ["de-g-vermutung-modal"], tags: ["modal-verbs", "supposition"],
    },
    {
      id: "muss-vergessen-haben", type: "sentence", target: "Sie muss den Termin vergessen haben.",
      gloss: { es: "Seguro que se le olvidó la cita.", en: "She must have forgotten the appointment." },
      annot: { "vergessen haben": { es: "infinitivo pasado: la suposición es sobre el pasado", en: "past infinitive: the supposition is about the past" } },
      errors: [{ text: "Sie hat den Termin vergessen müssen.", feedback: { es: "Eso sería una obligación («tuvo que olvidarla»). Para suponer algo del pasado: muss … vergessen haben.", en: "That would be an obligation ('had to forget'). For a guess about the past: muss … vergessen haben." }, ruleId: "de-g-vermutung-modal" }],
      distractors: ["hat", "vergisst", "müssen"],
      grammar: ["de-g-vermutung-modal"], tags: ["modal-verbs", "supposition"],
    },
    {
      id: "nur-scheinbar-ruhig", type: "sentence", target: "Die Lage ist nur scheinbar ruhig.",
      gloss: { es: "La situación solo parece tranquila (pero no lo está).", en: "The situation only looks calm (it isn't really)." },
      errors: [{ text: "Die Lage ist nur anscheinend ruhig.", feedback: { es: "anscheinend = al parecer (y probablemente es cierto). Si la calma es falsa: scheinbar.", en: "anscheinend = apparently (and probably true). If the calm is false: scheinbar." }, ruleId: "de-g-bedeutungspaare" }],
      distractors: ["anscheinend", "ruhige", "scheint"],
      grammar: ["de-g-bedeutungspaare"], tags: ["confusables"],
    },
    {
      id: "anscheinend-niemand", type: "sentence", target: "Anscheinend hat niemand etwas bemerkt.",
      gloss: { es: "Por lo visto, nadie se dio cuenta de nada.", en: "Apparently nobody noticed anything." },
      distractors: ["niemanden", "bemerkte", "Anschein"],
      grammar: ["de-g-bedeutungspaare"], tags: ["confusables"],
    },
    {
      id: "so-kindisch", type: "sentence", register: "informal", target: "Hör auf, dich so kindisch zu benehmen!",
      gloss: { es: "¡Deja de portarte de forma tan infantil!", en: "Stop behaving so childishly!" },
      errors: [{ text: "Hör auf, dich so kindlich zu benehmen!", feedback: { es: "kindlich es neutro (propio de un niño). Como reproche: kindisch.", en: "kindlich is neutral (like a child). As a reproach: kindisch." }, ruleId: "de-g-bedeutungspaare" }],
      distractors: ["kindlich", "dir", "benimm"],
      grammar: ["de-g-bedeutungspaare"], tags: ["confusables"],
    },
    {
      id: "ausgerechnet-heute", type: "sentence", target: "Ausgerechnet heute ist der Zug ausgefallen.",
      gloss: { es: "Justo hoy, de todos los días, se canceló el tren.", en: "Today of all days, the train was cancelled." },
      distractors: ["Ausgezeichnet", "hat", "ausfallen"],
      tags: ["nuance", "particles"],
    },
    {
      id: "bericht-beschoenigt", type: "sentence", target: "Der Bericht beschönigt die tatsächliche Lage.",
      gloss: { es: "El informe maquilla la situación real.", en: "The report sugar-coats the actual situation." },
      distractors: ["beschädigt", "tatsächlichen", "Lagen"],
      tags: ["nuance", "connotation"],
    },
    {
      id: "allenfalls-ungenauigkeit", type: "sentence", target: "Das ist kein Fehler, sondern allenfalls eine Ungenauigkeit.",
      gloss: { es: "No es un error; como mucho, una imprecisión.", en: "It isn't a mistake; at most, an inaccuracy." },
      distractors: ["aber", "allerdings", "keinen"],
      tags: ["nuance", "formal"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-vermutung", type: "paradigm", target: "Er ___ krank sein: wie sicher?", spoken: "Er … krank sein: wie sicher?",
      gloss: { es: "grados de certeza con verbos modales", en: "degrees of certainty with modal verbs" },
      grammar: ["de-g-vermutung-modal"],
      paradigm: {
        caption: { es: "¿Qué verbo modal expresa este grado de certeza?", en: "Which modal verb expresses this degree of certainty?" },
        cells: [
          { label: "ganz sicher", answer: "muss", ruleId: "de-g-vermutung-modal" },
          { label: "ziemlich sicher", answer: "müsste", ruleId: "de-g-vermutung-modal" },
          { label: "wahrscheinlich", answer: "dürfte", ruleId: "de-g-vermutung-modal" },
          { label: "möglich", answer: "könnte", accept: ["kann"], ruleId: "de-g-vermutung-modal" },
          { label: "ausgeschlossen", answer: "kann nicht", ruleId: "de-g-vermutung-modal" },
        ],
      },
      tags: ["grammar", "modal-verbs", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-vermutung", type: "pattern", target: "muss · müsste · dürfte · könnte",
      gloss: { es: "suponer con verbos modales", en: "guessing with modal verbs" },
      pattern: {
        rule: {
          es: "Los modales también expresan cuán seguro estás de algo: muss (casi seguro) > müsste > dürfte (probable) > könnte (posible). Para el pasado: modal + participio + haben / sein (Er muss es gewusst haben).",
          en: "Modals also say how sure you are: muss (almost certain) > müsste > dürfte (probable) > könnte (possible). For the past: modal + participle + haben / sein (Er muss es gewusst haben).",
        },
        table: [["muss", "Er muss zu Hause sein."], ["müsste", "Er müsste zu Hause sein."], ["dürfte", "Er dürfte zu Hause sein."], ["könnte", "Er könnte zu Hause sein."]],
      },
      question: {
        prompt: { es: "«Das dürfte teuer werden.» ¿Qué significa?", en: "'Das dürfte teuer werden.' What does it mean?" },
        options: [
          { es: "Probablemente va a salir caro.", en: "It's probably going to be expensive." },
          { es: "Está permitido que salga caro.", en: "It's allowed to be expensive." },
          { es: "Tiene que salir caro.", en: "It has to be expensive." },
          { es: "No puede salir caro.", en: "It can't be expensive." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-vermutung-modal"], tags: ["grammar", "modal-verbs"],
    },
    {
      id: "pat-bedeutungspaare", type: "pattern", target: "scheinbar ≠ anscheinend · kindlich ≠ kindisch",
      gloss: { es: "pares que se confunden", en: "confusable pairs" },
      pattern: {
        rule: {
          es: "Muchas palabras se parecen pero no significan lo mismo. scheinbar = solo en apariencia; anscheinend = al parecer. La terminación -isch suele ser negativa cuando existe también -lich: kindlich / kindisch, weiblich / weibisch.",
          en: "Many words look alike but mean different things. scheinbar = only seemingly; anscheinend = apparently. The ending -isch is often negative when a -lich form also exists: kindlich / kindisch, weiblich / weibisch.",
        },
        table: [["scheinbar", "anscheinend"], ["kindlich", "kindisch"], ["geschäftlich", "geschäftig"], ["vermutlich", "vermeintlich"]],
      },
      question: {
        prompt: { es: "«Der ___ Gewinner musste den Preis zurückgeben.» (= se creía que había ganado)", en: "'Der ___ Gewinner musste den Preis zurückgeben.' (= wrongly thought to have won)" },
        options: ["vermeintliche", "vermutliche", "anscheinende", "kindliche"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-bedeutungspaare"], tags: ["grammar", "confusables"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-hochstapler", type: "listening",
      target: "Der vermeintliche Experte entpuppte sich als Hochstapler. Anscheinend hatte niemand seine Angaben überprüft.",
      gloss: {
        es: "El supuesto experto resultó ser un impostor. Por lo visto, nadie había comprobado sus datos.",
        en: "The supposed expert turned out to be an impostor. Apparently nobody had checked his credentials.",
      },
      question: {
        prompt: { es: "¿Qué era en realidad el «experto»?", en: "What was the 'expert' really?" },
        options: [
          { es: "Un impostor", en: "An impostor" },
          { es: "Un experto de verdad", en: "A real expert" },
          { es: "Un periodista", en: "A journalist" },
          { es: "Un inspector", en: "An inspector" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-bedeutungspaare"], tags: ["listening", "nuance"],
    },
    {
      id: "dlg-verspaetung", type: "dialogue", register: "informal", target: "Der dürfte im Stau stehen.",
      gloss: { es: "Lo más probable es que esté en un atasco.", en: "He's probably stuck in traffic." },
      turns: [
        { who: "A", target: "Wo bleibt denn Jonas? Es ist schon halb acht.", gloss: { es: "¿Y Jonas dónde está? Ya son las siete y media.", en: "Where's Jonas got to? It's already half past seven." } },
        { who: "B", target: "Der dürfte im Stau stehen. Auf der Autobahn ist heute die Hölle los.", gloss: { es: "Lo más probable es que esté en un atasco. Hoy la autopista es un infierno.", en: "He's probably stuck in traffic. The motorway is chaos today." } },
        { who: "A", target: "Er hätte ja wenigstens kurz Bescheid sagen können.", gloss: { es: "Por lo menos podría haber avisado.", en: "He could at least have let us know." } },
        { who: "B", target: "Sein Akku muss leer sein, sonst hätte er sich längst gemeldet.", gloss: { es: "Seguro que se quedó sin batería; si no, ya habría dado señales hace rato.", en: "His battery must be dead, otherwise he'd have been in touch long ago." } },
      ],
      question: {
        prompt: { es: "¿Por qué cree B que Jonas no avisó?", en: "Why does B think Jonas didn't call?" },
        options: [
          { es: "Porque seguramente se quedó sin batería", en: "Because his battery is probably dead" },
          { es: "Porque se olvidó de la cita", en: "Because he forgot the meeting" },
          { es: "Porque está enojado", en: "Because he's angry" },
          { es: "Porque no tiene el número", en: "Because he doesn't have the number" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-vermutung-modal"], tags: ["dialogue", "supposition"],
    },
  ]),
};
