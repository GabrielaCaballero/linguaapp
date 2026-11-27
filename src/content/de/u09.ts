import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u09",
  lang: "de",
  index: 9,
  cefr: "A1.2",
  title: { target: "In der Stadt", es: "En la ciudad", en: "In town" },
  canDo: [
    { es: "Puedo preguntar cómo llegar a un lugar y entender indicaciones sencillas.", en: "I can ask the way and understand simple directions." },
    { es: "Puedo decir cómo voy a un sitio (a pie, en autobús, en metro).", en: "I can say how I get somewhere (on foot, by bus, by underground)." },
    { es: "Sé usar el dativo después de mit, zu, bei, neben (mit dem Bus, zur Post).", en: "I can use the dative after mit, zu, bei, neben (mit dem Bus, zur Post)." },
  ],
  icon: "🚌",
  items: build("de", 9, "A1.2", [
    // ── Places ───────────────────────────────────────────────
    {
      id: "apotheke", type: "word", pos: "noun", target: "die Apotheke", gender: "f", plural: "die Apotheken",
      gloss: { es: "la farmacia", en: "the pharmacy (chemist's)" },
      distractors: ["der Apotheke", "die Bibliothek", "die Theke"],
      tags: ["town", "goethe-a1"],
    },
    {
      id: "bank", type: "word", pos: "noun", target: "die Bank", gender: "f", plural: "die Banken",
      gloss: { es: "el banco (dinero)", en: "the bank" },
      distractors: ["der Bank", "das Band", "die Bänke"],
      note: { es: "die Bank también es el banco para sentarse, pero con otro plural: die Bänke.", en: "die Bank is also a bench, with a different plural: die Bänke." },
      tags: ["town", "goethe-a1"],
    },
    {
      id: "post", type: "word", pos: "other", target: "die Post",
      gloss: { es: "el correo (la oficina de correos)", en: "the post office / the mail" },
      distractors: ["der Post", "das Plakat", "der Posten"],
      tags: ["town", "goethe-a1"],
    },
    {
      id: "krankenhaus", type: "word", pos: "noun", target: "das Krankenhaus", gender: "n", plural: "die Krankenhäuser",
      gloss: { es: "el hospital", en: "the hospital" },
      variants: [
        { region: "CH", text: "das Spital", note: { es: "En Suiza (y Austria) el hospital es «das Spital», también en alemán estándar.", en: "In Switzerland (and Austria) a hospital is 'das Spital', in standard German too." } },
      ],
      distractors: ["der Krankenhaus", "das Kaufhaus", "das Rathaus"],
      note: { es: "krank (enfermo) + das Haus. Compuesto: toma el género de la última palabra.", en: "krank (ill) + das Haus. A compound takes the gender of its last part." },
      tags: ["town", "compound", "goethe-a1"],
    },
    {
      id: "supermarkt", type: "word", pos: "noun", target: "der Supermarkt", gender: "m", plural: "die Supermärkte",
      gloss: { es: "el supermercado", en: "the supermarket" },
      distractors: ["die Supermarkt", "das Supermarkt", "der Marktplatz"],
      note: { es: "der Markt → der Supermarkt; plural con umlaut: die Supermärkte.", en: "der Markt → der Supermarkt; plural with umlaut: die Supermärkte." },
      tags: ["town", "compound", "goethe-a1"],
    },

    // ── Transport ────────────────────────────────────────────
    {
      id: "bus", type: "word", pos: "noun", target: "der Bus", gender: "m", plural: "die Busse",
      gloss: { es: "el autobús", en: "the bus" },
      distractors: ["die Bus", "der Busch", "das Boot"],
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "u-bahn", type: "word", pos: "noun", target: "die U-Bahn", gender: "f", plural: "die U-Bahnen",
      gloss: { es: "el metro (subte)", en: "the underground (subway)" },
      distractors: ["der U-Bahn", "die S-Bahn", "die Bahnhof"],
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "auto", type: "word", pos: "noun", target: "das Auto", gender: "n", plural: "die Autos",
      gloss: { es: "el auto (el coche, el carro)", en: "the car" },
      distractors: ["der Auto", "die Autos", "das Boot"],
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "haltestelle", type: "word", pos: "noun", target: "die Haltestelle", gender: "f", plural: "die Haltestellen",
      gloss: { es: "la parada (de autobús, tranvía)", en: "the stop (bus, tram)" },
      distractors: ["der Haltestelle", "die Halle", "die Hauptstelle"],
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "fahrkarte", type: "word", pos: "noun", target: "die Fahrkarte", gender: "f", plural: "die Fahrkarten",
      gloss: { es: "el boleto (billete) de transporte", en: "the ticket (bus, train)" },
      variants: [
        { region: "CH", text: "das Billett", note: { es: "En Suiza el boleto es «das Billett» (de la SBB, en la app o la máquina).", en: "In Switzerland a ticket is 'das Billett' (SBB app or machine)." } },
      ],
      distractors: ["der Fahrkarte", "die Fahrt", "die Landkarte"],
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "gehen", type: "word", pos: "verb", target: "gehen",
      gloss: { es: "ir (a pie), caminar", en: "to go (on foot) / to walk" },
      forms: { ich: "gehe", du: "gehst", er: "geht", wir: "gehen", ihr: "geht", sie: "gehen", pp: "gegangen", aux: "sein" },
      distractors: ["geben", "gehören", "sehen"],
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "fahren", type: "word", pos: "verb", target: "fahren",
      gloss: { es: "ir (en un vehículo), manejar (conducir)", en: "to go (by vehicle) / to drive" },
      forms: { ich: "fahre", du: "fährst", er: "fährt", wir: "fahren", ihr: "fahrt", sie: "fahren", pp: "gefahren", aux: "sein" },
      distractors: ["fallen", "fragen", "führen"],
      note: { es: "a → ä en du/er: du fährst. A pie se usa «gehen».", en: "a → ä in du/er: du fährst. On foot, use 'gehen'." },
      tags: ["transport", "goethe-a1"],
    },
    {
      id: "tab-fahren", type: "paradigm", target: "fahren — Präsens", spoken: "fahren",
      gloss: { es: "fahren (ir en vehículo) — presente", en: "fahren (to go by vehicle) — present" },
      grammar: ["de-g-vokalwechsel"],
      paradigm: {
        caption: { es: "Conjuga «fahren» (a → ä con du y er/sie/es)", en: "Conjugate fahren (a → ä with du and er/sie/es)" },
        cells: [
          { label: "ich", answer: "fahre", ruleId: "de-g-vokalwechsel" },
          { label: "du", answer: "fährst", ruleId: "de-g-vokalwechsel" },
          { label: "er / sie / es", answer: "fährt", ruleId: "de-g-vokalwechsel" },
          { label: "wir", answer: "fahren", ruleId: "de-g-vokalwechsel" },
          { label: "ihr", answer: "fahrt", ruleId: "de-g-vokalwechsel" },
          { label: "sie / Sie", answer: "fahren", ruleId: "de-g-vokalwechsel" },
        ],
      },
      tags: ["grammar", "present", "table", "vowel-change"],
    },
    {
      id: "er-faehrt-nach-hamburg", type: "sentence", target: "Er fährt morgen nach Hamburg.",
      gloss: { es: "Mañana él va a Hamburgo.", en: "He's going to Hamburg tomorrow." },
      accept: [{ text: "Morgen fährt er nach Hamburg." }],
      errors: [{ text: "Er fahrt morgen nach Hamburg.", feedback: { es: "a → ä con er: er fährt.", en: "a → ä with er: er fährt." }, ruleId: "de-g-vokalwechsel" }],
      distractors: ["Er fahrt morgen nach Hamburg.", "Er fährst morgen nach Hamburg.", "Er fährt morgen in Hamburg."],
      tags: ["transport", "vowel-change"],
    },

    // ── mit + dative ─────────────────────────────────────────
    {
      id: "pat-dativ", type: "pattern", target: "mit dem Bus · mit der U-Bahn · mit dem Auto",
      gloss: { es: "mit + dativo: mit dem Bus", en: "mit + dative: mit dem Bus" },
      pattern: {
        rule: {
          es: "Después de mit (con; en autobús, en tren…) el artículo cambia (dativo): der → dem, das → dem, die → der, y en plural die → den (+ -n en el sustantivo).",
          en: "After mit (with; by bus, by train…) the article changes (dative): der → dem, das → dem, die → der, and in the plural die → den (+ -n on the noun).",
        },
        table: [["der Bus", "mit dem Bus"], ["das Auto", "mit dem Auto"], ["die Bahn", "mit der Bahn"], ["die Freunde", "mit den Freunden"]],
        meanings: [
          { es: "el autobús → en autobús", en: "the bus → by bus" },
          { es: "el auto → en auto", en: "the car → by car" },
          { es: "el tren → en tren", en: "the train → by train" },
          { es: "los amigos → con los amigos", en: "the friends → with the friends" },
        ],
      },
      question: {
        prompt: { es: "Completa (die U-Bahn): «Ich fahre mit ___ U-Bahn.»", en: "Complete (die U-Bahn): 'Ich fahre mit ___ U-Bahn.'" },
        options: ["der", "die", "dem", "den"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-dativ"], tags: ["grammar", "dative"],
    },
    {
      id: "mit-dem-bus", type: "sentence", target: "Ich fahre mit dem Bus.",
      gloss: { es: "Voy en autobús.", en: "I'm going by bus." },
      accept: [{ text: "Ich nehme den Bus." }],
      errors: [
        { text: "Ich fahre mit der Bus.", feedback: { es: "mit + dativo; der Bus es masculino → mit dem Bus.", en: "mit takes the dative; der Bus is masculine → mit dem Bus." } },
        { text: "Ich fahre mit Bus.", feedback: { es: "Falta el artículo: mit dem Bus.", en: "The article is missing: mit dem Bus." } },
      ],
      distractors: ["den", "der", "gehe"],
      tags: ["transport", "dative"],
    },

    // ── Directions ───────────────────────────────────────────
    {
      id: "links", type: "word", pos: "adv", target: "links",
      gloss: { es: "a la izquierda", en: "(on the) left" },
      distractors: ["rechts", "lang", "leise"],
      tags: ["directions", "goethe-a1"],
    },
    {
      id: "rechts", type: "word", pos: "adv", target: "rechts",
      gloss: { es: "a la derecha", en: "(on the) right" },
      distractors: ["links", "rechnen", "richtig"],
      tags: ["directions", "goethe-a1"],
    },
    {
      id: "geradeaus", type: "word", pos: "adv", target: "geradeaus",
      gloss: { es: "todo derecho (todo recto)", en: "straight ahead" },
      distractors: ["gerade", "geradezu", "heraus"],
      tags: ["directions", "goethe-a1"],
    },
    {
      id: "ampel", type: "word", pos: "noun", target: "die Ampel", gender: "f", plural: "die Ampeln",
      gloss: { es: "el semáforo", en: "the traffic lights" },
      distractors: ["der Ampel", "die Lampe", "die Angel"],
      note: { es: "bis zur Ampel = hasta el semáforo.", en: "bis zur Ampel = as far as the traffic lights." },
      tags: ["directions", "goethe-a1"],
    },
    {
      id: "nah", type: "word", pos: "adj", target: "nah",
      gloss: { es: "cerca", en: "near / close" },
      distractors: ["nach", "nass", "weit"],
      tags: ["directions", "goethe-a1"],
    },
    {
      id: "weit", type: "word", pos: "adj", target: "weit",
      gloss: { es: "lejos", en: "far" },
      distractors: ["nah", "weich", "weiß"],
      note: { es: "«Ist es weit?» = ¿está lejos?; ojo: weiß = blanco.", en: "'Ist es weit?' = is it far?; careful: weiß = white." },
      tags: ["directions", "goethe-a1"],
    },
    {
      id: "wo-ist-die-post", type: "sentence", register: "formal", target: "Entschuldigung, wo ist die Post?",
      gloss: { es: "Disculpe, ¿dónde está el correo?", en: "Excuse me, where's the post office?" },
      distractors: ["wer", "der", "sind"],
      tags: ["directions"],
    },
    {
      id: "neben-der-bank", type: "sentence", target: "Die Apotheke ist neben der Bank.",
      gloss: { es: "La farmacia está al lado del banco.", en: "The pharmacy is next to the bank." },
      errors: [{ text: "Die Apotheke ist neben die Bank.", feedback: { es: "Posición (¿dónde?) → dativo: neben der Bank.", en: "Location (where?) → dative: neben der Bank." } }],
      distractors: ["dem", "die", "bei"],
      tags: ["directions", "dative"],
    },
    {
      id: "naechste-haltestelle", type: "sentence", target: "Wo ist die nächste Haltestelle?",
      gloss: { es: "¿Dónde está la parada más cercana?", en: "Where is the nearest stop?" },
      distractors: ["nächster", "nah", "wann"],
      tags: ["transport"],
    },

    // ── zum, zur ─────────────────────────────────────────────
    {
      id: "pat-zum-zur", type: "pattern", target: "zum Bahnhof · zur Post",
      gloss: { es: "zum y zur", en: "zum and zur" },
      pattern: {
        rule: {
          es: "zu + dem = zum (masculino y neutro); zu + der = zur (femenino). Igual: bei + dem = beim, von + dem = vom.",
          en: "zu + dem = zum (masculine and neuter); zu + der = zur (feminine). Likewise bei + dem = beim, von + dem = vom.",
        },
        table: [["der Bahnhof", "zum Bahnhof"], ["das Kino", "zum Kino"], ["die Post", "zur Post"]],
        meanings: [
          { es: "a la estación", en: "to the station" },
          { es: "al cine", en: "to the cinema" },
          { es: "al correo", en: "to the post office" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Wie komme ich ___ Apotheke?» (die Apotheke)", en: "Complete: 'Wie komme ich ___ Apotheke?' (die Apotheke)" },
        options: ["zur", "zum", "zu die", "nach"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-zum-zur"], tags: ["grammar", "dative", "prepositions"],
    },
    {
      id: "wie-komme-ich", type: "phrase", pos: "phrase", target: "Wie komme ich zum Bahnhof?",
      gloss: { es: "¿Cómo llego a la estación de tren?", en: "How do I get to the station?" },
      distractors: ["Wie komme ich zu Bahnhof?", "Wie komme ich zur Bahnhof?", "Wo komme ich zum Bahnhof?"],
      tags: ["directions", "chunk"],
    },

    // ── The imperative: Sie, then du ─────────────────────────
    {
      id: "pat-imperativ-sie", type: "pattern", target: "Gehen Sie links! · Nehmen Sie die U-Bahn!",
      gloss: { es: "el imperativo de usted: verbo + Sie", en: "the formal imperative: verb + Sie" },
      pattern: {
        rule: {
          es: "Para pedir o indicar algo a alguien de usted, pon el verbo (en infinitivo) al principio y luego Sie: Sie gehen links → Gehen Sie links!",
          en: "To tell someone you call Sie what to do, put the verb (infinitive) first and then Sie: Sie gehen links → Gehen Sie links!",
        },
        table: [["Sie gehen links.", "Gehen Sie links!"], ["Sie nehmen die U-Bahn.", "Nehmen Sie die U-Bahn!"], ["Sie fahren mit dem Bus.", "Fahren Sie mit dem Bus!"]],
        meanings: [
          { es: "Usted va a la izquierda. → ¡Vaya a la izquierda!", en: "You go left. → Go left!" },
          { es: "Usted toma el metro. → ¡Tome el metro!", en: "You take the underground. → Take the underground!" },
          { es: "Usted va en autobús. → ¡Vaya en autobús!", en: "You go by bus. → Go by bus!" },
        ],
      },
      question: {
        prompt: { es: "Tome el autobús (de usted). ¿Cómo se dice?", en: "Take the bus (formal). How do you say it?" },
        options: ["Nehmen Sie den Bus.", "Sie nehmen den Bus?", "Nimm Sie den Bus.", "Nehmen den Bus Sie."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-imperativ"], tags: ["grammar", "imperative"],
    },
    {
      id: "gehen-sie-geradeaus", type: "sentence", register: "formal", target: "Gehen Sie geradeaus und dann links.",
      gloss: { es: "Siga derecho y luego doble a la izquierda.", en: "Go straight ahead and then turn left." },
      distractors: ["Geh", "rechts", "nach"],
      tags: ["directions", "imperative"],
    },
    {
      id: "nehmen-sie-u-bahn", type: "sentence", register: "formal", target: "Nehmen Sie die U-Bahn.",
      gloss: { es: "Tome el metro.", en: "Take the underground (formal)." },
      distractors: ["Nimm", "der", "fahren"],
      tags: ["transport", "imperative"],
    },
    {
      id: "pat-imperativ", type: "pattern", target: "Geh! · Nimm! · Fahr!",
      gloss: { es: "el imperativo de tú (du)", en: "the informal imperative (du)" },
      pattern: {
        rule: {
          es: "Con du: toma la forma de du y quítale «du» y la terminación -st: du gehst → Geh!, du nimmst → Nimm! Solo la diéresis a → ä desaparece: du fährst → Fahr!",
          en: "With du: take the du form and drop 'du' and the -st ending: du gehst → Geh!, du nimmst → Nimm! Only the a → ä umlaut disappears: du fährst → Fahr!",
        },
        table: [["du gehst", "Geh!"], ["du nimmst", "Nimm!"], ["du fährst", "Fahr!"]],
        meanings: [
          { es: "vas → ¡Ve!", en: "you go → Go!" },
          { es: "tomas → ¡Toma!", en: "you take → Take!" },
          { es: "vas (en vehículo) → ¡Ve! (sin ä)", en: "you go (by vehicle) → Go! (no ä)" },
        ],
      },
      question: {
        prompt: { es: "A un amigo: toma el autobús. ¿Cómo se dice?", en: "To a friend: take the bus. How do you say it?" },
        options: ["Nimm den Bus!", "Nimmst den Bus!", "Nehmen den Bus!", "Nimm du den Bus!"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-imperativ"], tags: ["grammar", "imperative"],
    },
    {
      id: "nimm-den-bus", type: "sentence", register: "informal", target: "Nimm den Bus!",
      gloss: { es: "¡Toma el autobús!", en: "Take the bus!" },
      errors: [{ text: "Nimmst den Bus!", feedback: { es: "En el imperativo de du se quita -st: Nimm!", en: "The du imperative drops -st: Nimm!" }, ruleId: "de-g-imperativ" }],
      distractors: ["Nimmst den Bus!", "Nehm den Bus!", "Nimm du den Bus!"],
      tags: ["transport", "imperative"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-weg", type: "listening",
      target: "Gehen Sie hier geradeaus bis zur Ampel. Dann nehmen Sie die zweite Straße rechts. Der Bahnhof ist auf der linken Seite.",
      gloss: {
        es: "Siga derecho hasta el semáforo. Luego tome la segunda calle a la derecha. La estación está a la izquierda.",
        en: "Go straight on to the traffic lights. Then take the second street on the right. The station is on the left.",
      },
      question: {
        prompt: { es: "¿Qué calle hay que tomar después del semáforo?", en: "Which street do you take after the traffic lights?" },
        options: [
          { es: "La segunda a la derecha", en: "The second on the right" },
          { es: "La primera a la derecha", en: "The first on the right" },
          { es: "La segunda a la izquierda", en: "The second on the left" },
          { es: "Ninguna: hay que seguir derecho", en: "None: keep going straight" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "directions"],
    },
    {
      id: "dlg-krankenhaus", type: "dialogue", register: "formal", target: "Gern geschehen.",
      gloss: { es: "De nada. / Con gusto.", en: "You're welcome. / My pleasure." },
      turns: [
        { who: "A", target: "Entschuldigung, ist das Krankenhaus weit?", gloss: { es: "Disculpe, ¿el hospital está lejos?", en: "Excuse me, is the hospital far?" } },
        { who: "B", target: "Nein, es ist ganz nah. Nur fünf Minuten zu Fuß.", gloss: { es: "No, está muy cerca. Solo cinco minutos a pie.", en: "No, it's very close. Only five minutes on foot." } },
        { who: "A", target: "Vielen Dank!", gloss: { es: "¡Muchas gracias!", en: "Thanks a lot!" } },
        { who: "B", target: "Gern geschehen.", gloss: { es: "De nada.", en: "You're welcome." } },
      ],
      question: {
        prompt: { es: "¿Cómo se llega al hospital?", en: "How do you get to the hospital?" },
        options: [
          { es: "A pie, en cinco minutos", en: "On foot, in five minutes" },
          { es: "En autobús, en cinco minutos", en: "By bus, in five minutes" },
          { es: "En metro: está lejos", en: "By underground: it's far" },
          { es: "En taxi", en: "By taxi" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "directions"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-rathaus", type: "bridge", onlyFor: "es", target: "das Rathaus",
      gloss: { es: "el ayuntamiento (la municipalidad)", en: "the town hall" },
      question: {
        prompt: { es: "«das Rathaus» significa…", en: "'das Rathaus' means…" },
        options: [
          { es: "el ayuntamiento (la municipalidad)", en: "the town hall" },
          { es: "la casa de las ratas", en: "the rat house" },
          { es: "la estación de policía", en: "the police station" },
          { es: "la casa de huéspedes", en: "the guesthouse" },
        ],
        answer: 0,
      },
      note: { es: "der Rat = el consejo + das Haus. La rata es «die Ratte»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "town"],
    },
  ]),
};
