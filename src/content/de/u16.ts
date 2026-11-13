import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u16",
  lang: "de",
  index: 16,
  cefr: "B1",
  title: { target: "Umwelt", es: "Medio ambiente", en: "The environment" },
  canDo: [
    { es: "Puedo hablar de reciclaje, energía y lo que hago por el medio ambiente.", en: "I can talk about recycling, energy and what I do for the environment." },
    { es: "Puedo entender cómo funcionan las cosas (se recoge, se separa) con la voz pasiva.", en: "I can understand how things are done using the passive." },
    { es: "Sé usar zu + infinitivo, um … zu, y obwohl / trotzdem.", en: "I can use zu + infinitive, um … zu, and obwohl / trotzdem." },
  ],
  icon: "🌱",
  items: build("de", 16, "B1", [
    // ── Environment ──────────────────────────────────────────
    {
      id: "umwelt", type: "word", pos: "other", target: "die Umwelt",
      gloss: { es: "el medio ambiente", en: "the environment" },
      distractors: ["die Umgebung", "die Welt", "der Umweg"],
      note: { es: "Ojo: die Umgebung = los alrededores, la zona.", en: "Careful: die Umgebung = surroundings, the area." },
      tags: ["environment", "goethe-b1"],
    },
    {
      id: "muell", type: "word", pos: "other", target: "der Müll",
      gloss: { es: "la basura", en: "rubbish / trash" },
      distractors: ["die Mühle", "das Mehl", "der Mut"],
      tags: ["environment", "goethe-a2"],
    },
    {
      id: "muell-trennen", type: "phrase", pos: "phrase", target: "den Müll trennen",
      gloss: { es: "separar la basura", en: "to sort the rubbish" },
      distractors: ["den Müll teilen", "den Müll treten", "dem Müll trennen"],
      tags: ["environment"],
    },
    {
      id: "energie", type: "word", pos: "noun", target: "die Energie", gender: "f", plural: "die Energien",
      gloss: { es: "la energía", en: "energy" },
      distractors: ["der Energie", "die Allergie", "die Strategie"],
      tags: ["environment", "goethe-b1"],
    },
    {
      id: "sparen", type: "word", pos: "verb", target: "sparen",
      gloss: { es: "ahorrar", en: "to save (money, energy)" },
      distractors: ["sperren", "spüren", "spalten"],
      tags: ["environment", "goethe-a2"],
    },
    {
      id: "verschwenden", type: "word", pos: "verb", target: "verschwenden",
      gloss: { es: "desperdiciar, derrochar", en: "to waste" },
      distractors: ["verschwinden", "verwenden", "verschweigen"],
      note: { es: "Ojo: verschwinden = desaparecer.", en: "Careful: verschwinden = to disappear." },
      tags: ["environment", "goethe-b1"],
    },
    {
      id: "schuetzen", type: "word", pos: "verb", target: "schützen",
      gloss: { es: "proteger", en: "to protect" },
      distractors: ["schätzen", "schütteln", "stützen"],
      tags: ["environment", "goethe-b1"],
    },
    {
      id: "klimawandel", type: "word", pos: "other", target: "der Klimawandel",
      gloss: { es: "el cambio climático", en: "climate change" },
      distractors: ["die Klimaanlage", "der Wandel", "das Klima"],
      tags: ["environment", "compound", "goethe-b1"],
    },
    {
      id: "verpackung", type: "word", pos: "noun", target: "die Verpackung", gender: "f", plural: "die Verpackungen",
      gloss: { es: "el envase, el embalaje", en: "the packaging" },
      distractors: ["der Verpackung", "die Verpflegung", "die Verspätung"],
      tags: ["environment", "goethe-b1"],
    },
    {
      id: "plastiktuete", type: "word", pos: "noun", target: "die Plastiktüte", gender: "f", plural: "die Plastiktüten",
      gloss: { es: "la bolsa de plástico", en: "the plastic bag" },
      distractors: ["der Plastiktüte", "die Plastikflasche", "das Plastik"],
      tags: ["environment", "compound"],
    },
    {
      id: "obwohl", type: "word", pos: "other", target: "obwohl",
      gloss: { es: "aunque", en: "although" },
      distractors: ["ob", "wohl", "sowohl"],
      note: { es: "Manda el verbo al final: obwohl es regnet.", en: "Sends the verb to the end: obwohl es regnet." },
      tags: ["connectors", "goethe-b1"],
    },
    {
      id: "trotzdem", type: "word", pos: "adv", target: "trotzdem",
      gloss: { es: "aun así, sin embargo", en: "still / nevertheless" },
      distractors: ["trotz", "seitdem", "stattdessen"],
      note: { es: "Ocupa la posición 1: Trotzdem gehe ich.", en: "Takes position 1, then the verb: Trotzdem gehe ich." },
      tags: ["connectors", "goethe-b1"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "muell-wird-abgeholt", type: "sentence", target: "Der Müll wird jeden Montag abgeholt.",
      gloss: { es: "La basura se recoge todos los lunes.", en: "The rubbish is collected every Monday." },
      errors: [{ text: "Der Müll ist jeden Montag abgeholt.", feedback: { es: "La pasiva de acción usa werden: wird abgeholt.", en: "The passive of an action uses werden: wird abgeholt." } }],
      distractors: ["ist", "abholt", "werden"],
      tags: ["passive"],
    },
    {
      id: "haus-wird-gebaut", type: "sentence", target: "Hier wird ein neues Haus gebaut.",
      gloss: { es: "Aquí están construyendo una casa nueva.", en: "A new house is being built here." },
      distractors: ["baut", "ist", "neue"],
      tags: ["passive"],
    },
    {
      id: "weniger-plastik", type: "sentence", target: "Ich versuche, weniger Plastik zu kaufen.",
      gloss: { es: "Intento comprar menos plástico.", en: "I try to buy less plastic." },
      errors: [{ text: "Ich versuche, weniger Plastik kaufen.", feedback: { es: "Tras versuchen: zu + infinitivo (zu kaufen).", en: "After versuchen: zu + infinitive (zu kaufen)." } }],
      distractors: ["um", "kaufe", "mehr"],
      tags: ["zu-infinitive"],
    },
    {
      id: "um-geld-zu-sparen", type: "sentence", target: "Ich fahre mit dem Rad, um Geld zu sparen.",
      gloss: { es: "Voy en bicicleta para ahorrar dinero.", en: "I cycle to save money." },
      accept: [{ text: "Ich fahre Rad, um Geld zu sparen." }],
      errors: [{ text: "Ich fahre mit dem Rad, für Geld zu sparen.", feedback: { es: "Finalidad = um … zu (no «für»).", en: "Purpose = um … zu (not 'für')." } }],
      distractors: ["für", "damit", "spare"],
      tags: ["zu-infinitive", "purpose"],
    },
    {
      id: "obwohl-es-regnet", type: "sentence", target: "Obwohl es regnet, gehe ich zu Fuß.",
      gloss: { es: "Aunque llueve, voy a pie.", en: "Although it's raining, I'm walking." },
      errors: [{ text: "Obwohl es regnet, ich gehe zu Fuß.", feedback: { es: "Tras la subordinada viene el verbo: …, gehe ich zu Fuß.", en: "After the subordinate clause comes the verb: …, gehe ich zu Fuß." } }],
      distractors: ["Trotzdem", "regnen", "laufe"],
      tags: ["connectors", "word-order"],
    },
    {
      id: "trotzdem-spazieren", type: "sentence", target: "Es regnet. Trotzdem gehe ich spazieren.",
      gloss: { es: "Llueve. Aun así, salgo a caminar.", en: "It's raining. I'm still going for a walk." },
      errors: [{ text: "Es regnet. Trotzdem ich gehe spazieren.", feedback: { es: "trotzdem ocupa la posición 1; el verbo va justo después.", en: "trotzdem takes position 1; the verb comes right after." } }],
      distractors: ["Obwohl", "gehen", "spaziere"],
      tags: ["connectors", "word-order"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-passiv", type: "pattern", target: "wird gebaut · wurde gebaut · ist gebaut worden",
      gloss: { es: "la voz pasiva con werden", en: "the passive with werden" },
      pattern: {
        rule: {
          es: "werden + participio al final. Pasado: wurde gebaut; Perfekt: ist gebaut worden (sin ge-). El agente va con von + dativo.",
          en: "werden + participle at the end. Past: wurde gebaut; Perfekt: ist gebaut worden (no ge-). The agent takes von + dative.",
        },
        table: [["Präsens", "Das Haus wird gebaut."], ["Präteritum", "Das Haus wurde gebaut."], ["Perfekt", "Das Haus ist gebaut worden."], ["mit von", "Das Haus wurde von meinem Opa gebaut."]],
      },
      question: {
        prompt: { es: "Completa: «Das Fenster ___ jeden Abend geschlossen.»", en: "Complete: 'Das Fenster ___ jeden Abend geschlossen.'" },
        options: ["wird", "wurdet", "hat", "werden"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passive"],
    },
    {
      id: "pat-zu-infinitiv", type: "pattern", target: "Ich habe vergessen, die Tür abzuschließen.",
      gloss: { es: "zu + infinitivo y um … zu", en: "zu + infinitive and um … zu" },
      pattern: {
        rule: {
          es: "Tras versuchen, vergessen, anfangen, Lust haben… va zu + infinitivo al final; en los separables, zu va en medio (abzuschließen). Para finalidad: um … zu.",
          en: "After versuchen, vergessen, anfangen, Lust haben… use zu + infinitive at the end; with separable verbs zu goes inside (abzuschließen). For purpose: um … zu.",
        },
        table: [["versuchen", "…, früh aufzustehen."], ["Lust haben", "…, ins Kino zu gehen."], ["um … zu", "…, um Deutsch zu lernen."]],
      },
      question: {
        prompt: { es: "Completa: «Ich habe vergessen, die Tür ___.»", en: "Complete: 'Ich habe vergessen, die Tür ___.'" },
        options: ["abzuschließen", "zu abschließen", "abschließen", "abgeschlossen"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "zu-infinitive"],
    },
    {
      id: "pat-obwohl-trotzdem", type: "pattern", target: "Obwohl er krank ist, arbeitet er. · Er ist krank. Trotzdem arbeitet er.",
      gloss: { es: "obwohl y trotzdem", en: "obwohl and trotzdem" },
      pattern: {
        rule: {
          es: "obwohl (aunque) introduce una subordinada: verbo al final. trotzdem (aun así) es un adverbio en posición 1: el verbo va justo después.",
          en: "obwohl (although) starts a subordinate clause: verb last. trotzdem (still) is an adverb in position 1: the verb comes right after.",
        },
        table: [["obwohl", "…, obwohl er krank ist."], ["trotzdem", "Trotzdem arbeitet er."]],
      },
      question: {
        prompt: { es: "Elige la frase correcta.", en: "Choose the correct sentence." },
        options: ["Obwohl er krank ist, arbeitet er.", "Obwohl er ist krank, arbeitet er.", "Obwohl er krank ist, er arbeitet.", "Trotzdem er krank ist, arbeitet er."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "connectors"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-muelltrennung", type: "listening",
      target: "In unserer Stadt wird der Müll getrennt: Papier kommt in die blaue Tonne, Bioabfall in die braune. Glas bringt man zum Container.",
      gloss: {
        es: "En nuestra ciudad se separa la basura: el papel va en el contenedor azul, los restos orgánicos en el marrón. El vidrio se lleva al contenedor de la calle.",
        en: "In our town rubbish is sorted: paper goes in the blue bin, food waste in the brown one. Glass is taken to the bottle bank.",
      },
      question: {
        prompt: { es: "¿Dónde va el papel?", en: "Where does paper go?" },
        options: [
          { es: "En el contenedor azul", en: "In the blue bin" },
          { es: "En el contenedor marrón", en: "In the brown bin" },
          { es: "Al contenedor de vidrio", en: "To the bottle bank" },
          { es: "En la basura normal", en: "In the general waste" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "environment"],
    },
    {
      id: "dlg-leitungswasser", type: "dialogue", register: "informal", target: "Das mache ich auch.",
      gloss: { es: "Yo también voy a hacer eso.", en: "I'll do that too." },
      turns: [
        { who: "A", target: "Kaufst du immer noch Wasser in Plastikflaschen?", gloss: { es: "¿Todavía compras agua en botellas de plástico?", en: "Do you still buy water in plastic bottles?" } },
        { who: "B", target: "Nein, ich trinke jetzt Leitungswasser. Das ist billiger und besser für die Umwelt.", gloss: { es: "No, ahora tomo agua de la llave (del grifo). Es más barata y mejor para el medio ambiente.", en: "No, I drink tap water now. It's cheaper and better for the environment." } },
        { who: "A", target: "Gute Idee, das mache ich auch.", gloss: { es: "Buena idea, yo también voy a hacer eso.", en: "Good idea, I'll do that too." } },
      ],
      question: {
        prompt: { es: "¿Qué toma B ahora?", en: "What does B drink now?" },
        options: [
          { es: "Agua de la llave (del grifo)", en: "Tap water" },
          { es: "Agua en botellas de plástico", en: "Water in plastic bottles" },
          { es: "Agua en botellas de vidrio", en: "Water in glass bottles" },
          { es: "Jugo", en: "Juice" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "environment"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-spenden", type: "bridge", onlyFor: "en", target: "spenden",
      gloss: { es: "donar", en: "to donate" },
      question: {
        prompt: { es: "«Ich spende Geld für den Umweltschutz» significa…", en: "'Ich spende Geld für den Umweltschutz' means…" },
        options: [
          { es: "Dono dinero para proteger el medio ambiente.", en: "I donate money to environmental protection." },
          { es: "Gasto dinero en proteger el medio ambiente.", en: "I spend money on environmental protection." },
          { es: "Ahorro dinero para el medio ambiente.", en: "I save money for the environment." },
          { es: "Gano dinero con el medio ambiente.", en: "I earn money from the environment." },
        ],
        answer: 0,
      },
      note: { en: "spenden = to donate; to spend money is Geld ausgeben." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
