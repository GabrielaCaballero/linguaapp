import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u35",
  lang: "pt",
  index: 35,
  cefr: "C2",
  title: { target: "Sutilezas gramaticais", es: "Sutilezas gramaticales", en: "Fine points of grammar" },
  canDo: [
    { es: "Domino la regencia verbal de la norma culta (assistir a, implicar, preferir… a, chegar a).", en: "I can handle standard verb–preposition patterns (assistir a, implicar, preferir… a, chegar a)." },
    { es: "Distingo parónimos que confunden incluso a nativos (tráfego / tráfico, eminente / iminente).", en: "I can tell apart paronyms that trip up even natives (tráfego / tráfico, eminente / iminente)." },
  ],
  icon: "🔍",
  items: build("pt", 35, "C2", [
    { id: "trafego", type: "word", pos: "noun", target: "o tráfego", gender: "m", plural: "os tráfegos", gloss: { es: "el tránsito (de vehículos)", en: "the traffic (vehicles)" }, distractors: ["o tráfico", "o trajeto", "a tráfega"], note: { es: "o tráfico = el tráfico ilegal (de drogas, de personas).", en: "o tráfico = illegal trafficking (drugs, people)." }, tags: ["paronyms"] },
    { id: "iminente", type: "word", pos: "adj", target: "iminente", gloss: { es: "inminente", en: "imminent" }, distractors: ["eminente", "imanente", "emitente"], note: { es: "eminente = destacado, ilustre (um eminente cientista).", en: "eminente = eminent, distinguished." }, tags: ["paronyms"] },
    { id: "cumprimento", type: "word", pos: "noun", target: "o cumprimento", gender: "m", plural: "os cumprimentos", gloss: { es: "el saludo / el cumplimiento", en: "the greeting / fulfilment" }, distractors: ["o comprimento", "o complemento", "o cumprido"], note: { es: "o comprimento = la longitud.", en: "o comprimento = length." }, tags: ["paronyms"] },
    { id: "discricao", type: "word", pos: "noun", target: "a discrição", gender: "f", plural: "as discrições", gloss: { es: "la discreción", en: "the discretion" }, distractors: ["a descrição", "a discreção", "a distração"], note: { es: "a descrição = la descripción.", en: "a descrição = description." }, tags: ["paronyms"] },
    { id: "retificar", type: "word", pos: "verb", target: "retificar", gloss: { es: "rectificar, corregir", en: "to correct / amend" }, distractors: ["ratificar", "reificar", "retirar"], note: { es: "ratificar = confirmar (ratificar um acordo).", en: "ratificar = to ratify, confirm." }, tags: ["paronyms", "verbs"] },
    { id: "conserto", type: "word", pos: "noun", target: "o conserto", gender: "m", plural: "os consertos", gloss: { es: "el arreglo, la reparación", en: "the repair" }, distractors: ["o concerto", "o acerto", "o consenso"], note: { es: "o concerto = el concierto (de música clásica).", en: "o concerto = a (classical) concert." }, tags: ["paronyms"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "assistir-ao-jogo", type: "sentence", target: "Milhões de pessoas assistiram ao jogo pela televisão.",
      gloss: { es: "Millones de personas vieron el partido por televisión.", en: "Millions of people watched the match on TV." },
      accept: [{ text: "Milhões de pessoas assistiram ao jogo na televisão." }, { text: "Milhões de pessoas assistiram o jogo pela televisão.", verdict: "almost", feedback: { es: "Muy común al hablar, pero en la norma «assistir» (ver) pide «a»: assistiram ao jogo.", en: "Very common in speech, but in the standard 'assistir' (watch) takes 'a': assistiram ao jogo." } }],
      distractors: ["o", "assistiu", "na"],
      grammar: ["pt-g-regencia-verbal"], tags: ["regencia"],
    },
    {
      id: "implicar", type: "sentence", target: "A decisão implica mudanças profundas.",
      gloss: { es: "La decisión implica cambios profundos.", en: "The decision entails deep changes." },
      errors: [{ text: "A decisão implica em mudanças profundas.", feedback: { es: "En la norma «implicar» (suponer) no lleva «em»: implica mudanças.", en: "In the standard, 'implicar' (to entail) takes no 'em': implica mudanças." }, ruleId: "pt-g-regencia-verbal" }],
      distractors: ["em", "implicam", "mudança"],
      tags: ["regencia"],
    },
    {
      id: "prefiro-cinema-a-teatro", type: "sentence", target: "Prefiro cinema a teatro.",
      gloss: { es: "Prefiero el cine al teatro.", en: "I prefer cinema to theatre." },
      accept: [{ text: "Prefiro o cinema ao teatro." }],
      errors: [{ text: "Prefiro mais cinema do que teatro.", feedback: { es: "«preferir» ya compara: preferir X a Y, sin «mais» ni «do que».", en: "'preferir' already compares: preferir X a Y, without 'mais' or 'do que'." }, ruleId: "pt-g-regencia-verbal" }],
      distractors: ["mais", "do que", "que"],
      tags: ["regencia"],
    },
    {
      id: "chegamos-a-cidade", type: "sentence", target: "Chegamos à cidade tarde da noite.",
      gloss: { es: "Llegamos a la ciudad tarde en la noche.", en: "We reached the city late at night." },
      accept: [{ text: "Nós chegamos à cidade tarde da noite." }, { text: "Chegamos na cidade tarde da noite.", verdict: "almost", feedback: { es: "Normal en el habla brasileña; la norma escrita pide «chegar a»: chegamos à cidade.", en: "Normal in Brazilian speech; the written standard requires 'chegar a': chegamos à cidade." } }],
      distractors: ["na", "em", "a"],
      tags: ["regencia", "crase"],
    },
    {
      id: "o-transito-esta-pesado", type: "sentence", target: "O tráfego aéreo foi interrompido por causa da neblina.",
      gloss: { es: "El tráfico aéreo se interrumpió por la neblina.", en: "Air traffic was halted because of the fog." },
      errors: [{ text: "O tráfico aéreo foi interrompido por causa da neblina.", feedback: { es: "Movimiento de vehículos = tráfego; tráfico = comercio ilegal.", en: "Movement of vehicles = tráfego; tráfico = illegal trade." } }],
      distractors: ["tráfico", "interrompida", "nevoeiro de"],
      tags: ["paronyms"],
    },
    {
      id: "esqueci-me", type: "sentence", target: "Esqueci-me do aniversário dela.", register: "formal",
      gloss: { es: "Me olvidé de su cumpleaños.", en: "I forgot her birthday. (formal)" },
      accept: [{ text: "Esqueci o aniversário dela." }, { text: "Eu me esqueci do aniversário dela." }],
      errors: [{ text: "Esqueci do aniversário dela.", feedback: { es: "En la norma: esquecer algo o esquecer-se de algo; «esqueci do» mezcla las dos (aunque se oye mucho).", en: "Standard: esquecer algo or esquecer-se de algo; 'esqueci do' mixes the two (though it's common in speech)." }, ruleId: "pt-g-regencia-verbal" }],
      distractors: ["Esqueceu-me", "o", "de o"],
      tags: ["regencia"],
    },
    { id: "obedecer-as-regras", type: "sentence", target: "Os motoristas devem obedecer às leis de trânsito.", gloss: { es: "Los conductores deben obedecer las leyes de tránsito.", en: "Drivers must obey the traffic laws." }, errors: [{ text: "Os motoristas devem obedecer as leis de trânsito.", feedback: { es: "obedecer a + as leis = às leis (con crase).", en: "obedecer a + as leis = às leis (with crase)." }, ruleId: "pt-g-regencia-verbal" }], distractors: ["as", "tráfico", "obedecerem"], tags: ["regencia", "crase"] },
    { id: "eminente", type: "word", pos: "adj", target: "eminente", gloss: { es: "eminente, ilustre", en: "eminent / distinguished" }, distractors: ["iminente", "emitente", "imanente"], tags: ["paronyms"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-regencia-verbal", type: "pattern", target: "assistir ao filme · implicar algo · preferir X a Y · chegar a",
      gloss: { es: "regencia verbal: norma y habla", en: "verb government: standard vs speech" },
      pattern: {
        rule: {
          es: "La norma culta conserva régimenes que el habla brasileña cambió: assistir a (ver), implicar sin preposición, preferir X a Y, chegar / ir a (no «em»), obedecer a, namorar alguém (sin «com»), esquecer algo / esquecer-se de algo. En exámenes y textos formales se exige la forma de la norma.",
          en: "The written standard keeps prepositions that Brazilian speech has changed: assistir a (watch), implicar with no preposition, preferir X a Y, chegar / ir a (not 'em'), obedecer a, namorar alguém (no 'com'), esquecer algo / esquecer-se de algo. Exams and formal texts require the standard form.",
        },
        table: [["norma", "fala"], ["assistir ao filme", "assistir o filme"], ["chegar a casa / à cidade", "chegar em casa / na cidade"], ["implicar mudanças", "implicar em mudanças"], ["preferir A a B", "preferir A do que B"]],
      },
      question: {
        prompt: { es: "¿Cuál sigue la norma culta?", en: "Which follows the written standard?" },
        options: ["Ela namora o Pedro há dois anos.", "Ela namora com o Pedro há dois anos.", "Ela namora ao Pedro há dois anos.", "Ela namora do Pedro há dois anos."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-regencia-verbal"], tags: ["grammar", "regencia"],
    },
    {
      id: "pat-paronimos", type: "pattern", target: "tráfego / tráfico · eminente / iminente · descrição / discrição",
      gloss: { es: "parónimos frecuentes", en: "common paronyms" },
      pattern: {
        rule: {
          es: "Palabras casi iguales con sentidos distintos: tráfego (circulación) / tráfico (comercio ilegal), eminente (ilustre) / iminente (inminente), comprimento (longitud) / cumprimento (saludo), descrição / discrição, ratificar (confirmar) / retificar (corregir), concerto (música) / conserto (arreglo).",
          en: "Near-identical words with different meanings: tráfego (traffic flow) / tráfico (trafficking), eminente (distinguished) / iminente (imminent), comprimento (length) / cumprimento (greeting), descrição / discrição, ratificar (confirm) / retificar (correct), concerto (concert) / conserto (repair).",
        },
        table: [["tráfego", "tráfico"], ["eminente", "iminente"], ["comprimento", "cumprimento"], ["ratificar", "retificar"], ["concerto", "conserto"]],
      },
      question: {
        prompt: { es: "Completa: «O carro está na oficina para ___.»", en: "Complete: 'O carro está na oficina para ___.'" },
        options: ["conserto", "concerto", "consertado de", "concertar"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-paronimos"], tags: ["grammar", "paronyms"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-revisao", type: "listening", target: "Na revisão do texto, corrija três pontos: «assistir o debate» deve ser «assistir ao debate»; «implica em custos» deve ser «implica custos»; e «prefiro mais» deve ser apenas «prefiro».",
      gloss: { es: "En la revisión del texto, corrige tres puntos: «assistir o debate» debe ser «assistir ao debate»; «implica em custos» debe ser «implica custos»; y «prefiro mais» debe ser solo «prefiro».", en: "When revising the text, fix three points: 'assistir o debate' should be 'assistir ao debate'; 'implica em custos' should be 'implica custos'; and 'prefiro mais' should just be 'prefiro'." },
      question: {
        prompt: { es: "¿Qué tienen en común las tres correcciones?", en: "What do the three corrections have in common?" },
        options: [
          { es: "Todas son de regencia verbal", en: "They're all about verb + preposition" },
          { es: "Todas son de ortografía", en: "They're all spelling" },
          { es: "Todas son de concordancia", en: "They're all agreement" },
          { es: "Todas son de puntuación", en: "They're all punctuation" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "regencia"],
    },
    {
      id: "dlg-trafego", type: "dialogue", target: "Tráfego, com «e».",
      gloss: { es: "«Tráfego», con «e».", en: "'Tráfego', with an 'e'." },
      turns: [
        { who: "A", target: "Escrevi «o tráfico na Marginal estava parado».", gloss: { es: "Escribí «o tráfico na Marginal estava parado».", en: "I wrote 'o tráfico na Marginal estava parado'." } },
        { who: "B", target: "Cuidado! Carros é tráfego, com «e». Tráfico é de drogas.", gloss: { es: "¡Cuidado! Para autos es «tráfego», con «e». «Tráfico» es el de drogas.", en: "Careful! For cars it's 'tráfego', with an 'e'. 'Tráfico' is drug trafficking." } },
      ],
      question: {
        prompt: { es: "¿Qué palabra debía usar A?", en: "Which word should A have used?" },
        options: ["tráfego", "tráfico", "trânsito de"],
        answer: 0,
      },
      note: { es: "En el habla también se dice «trânsito» para el tránsito de autos.", en: "In everyday speech Brazilians also say 'trânsito' for road traffic." },
      exercises: ["question"], tags: ["dialogue", "paronyms"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-trafico", type: "bridge", onlyFor: "es", target: "o tráfego aéreo",
      gloss: { es: "el tráfico aéreo", en: "the air traffic" },
      distractors: ["o tráfico aéreo", "o trânsito aéreo de", "a tráfega aérea"],
      note: { es: "El «tráfico» español (de vehículos) es «tráfego» o «trânsito»; «tráfico» en portugués es solo el comercio ilegal." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "paronyms"],
    },
    {
      id: "br-en-assistir-ajudar", type: "bridge", onlyFor: "en", target: "O médico assistiu o paciente.",
      gloss: { es: "El médico atendió al paciente.", en: "The doctor attended to the patient." },
      distractors: ["O médico assistiu ao paciente.", "O médico viu ao paciente.", "O médico ajudou ao paciente."],
      note: { en: "assistir + direct object = to attend to / help; assistir a = to watch. The preposition changes the meaning." },
      exercises: ["guess", "recall"], tags: ["bridge", "regencia"],
    },
  ]),
};
