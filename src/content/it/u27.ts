import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u27",
  lang: "it",
  index: 27,
  cefr: "C1",
  title: { target: "Scienza e scrittura accademica", es: "Ciencia y escritura académica", en: "Science and academic writing" },
  canDo: [
    { es: "Puedo entender textos de divulgación científica y cómo se organiza un artículo.", en: "I can understand popular-science texts and how a paper is organised." },
    { es: "Puedo escribir con conectores formales y nominalizaciones (la riduzione delle emissioni).", en: "I can write with formal connectors and nominalisations (la riduzione delle emissioni)." },
    { es: "Sé condensar ideas con el participio absoluto y el gerundio compuesto.", en: "I can condense ideas with absolute participles and the past gerund." },
  ],
  icon: "🔬",
  items: build("it", 27, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "ipotesi", type: "word", pos: "noun", target: "l'ipotesi", gender: "f", plural: "le ipotesi",
      gloss: { es: "la hipótesis", en: "the hypothesis" },
      distractors: ["l'ipotesa", "l'ipotenusa", "la tesi"],
      note: { es: "Femenino e invariable, como la crisi y l'analisi: le ipotesi.", en: "Feminine and invariable, like la crisi and l'analisi: le ipotesi." },
      tags: ["science"],
    },
    {
      id: "campione", type: "word", pos: "noun", target: "il campione", gender: "m", plural: "i campioni",
      gloss: { es: "la muestra (estadística)", en: "the sample (in a study)" },
      distractors: ["il campo", "il campanile", "il compagno"],
      note: { es: "También significa «campeón»: il campione del mondo.", en: "It also means 'champion': il campione del mondo." },
      tags: ["science"],
    },
    {
      id: "sperimentazione", type: "word", pos: "noun", target: "la sperimentazione", gender: "f", plural: "le sperimentazioni",
      gloss: { es: "la experimentación, el ensayo (clínico)", en: "the testing / (clinical) trial" },
      distractors: ["l'esperienza", "la sperimentatrice", "la separazione"],
      tags: ["science"],
    },
    {
      id: "riscontro", type: "word", pos: "noun", target: "il riscontro", gender: "m", plural: "i riscontri",
      gloss: { es: "la confirmación, el respaldo (en los datos)", en: "the confirmation / corroboration" },
      distractors: ["lo scontro", "il racconto", "il ricorso"],
      note: { es: "trovare riscontro = verse confirmado: l'ipotesi non ha trovato riscontro.", en: "trovare riscontro = to be borne out: l'ipotesi non ha trovato riscontro." },
      tags: ["science"],
    },
    {
      id: "confutare", type: "word", pos: "verb", target: "confutare",
      gloss: { es: "refutar", en: "to refute" },
      forms: { pp: "confutato" },
      distractors: ["confondere", "confortare", "computare"],
      tags: ["science", "argument"],
    },
    {
      id: "avvalorare", type: "word", pos: "verb", target: "avvalorare",
      gloss: { es: "respaldar, dar credibilidad a", en: "to support / lend weight to" },
      forms: { pp: "avvalorato" },
      distractors: ["valorizzare", "avvalersi", "valutare"],
      tags: ["science", "argument"],
    },
    {
      id: "peraltro", type: "word", pos: "adv", target: "peraltro",
      gloss: { es: "por lo demás, además (de paso)", en: "moreover / incidentally" },
      accept: [{ text: "per altro" }],
      distractors: ["perlopiù", "pertanto", "altrimenti"],
      grammar: ["it-g-connettivi-accademici"], tags: ["connectors", "academic"],
    },
    {
      id: "ciononostante", type: "word", pos: "adv", target: "ciononostante",
      gloss: { es: "no obstante, aun así", en: "nevertheless" },
      accept: [{ text: "ciò nonostante" }],
      distractors: ["nonostante", "ciò stante", "tuttalpiù"],
      note: { es: "Va solo, al principio de la oración: Ciononostante, lo studio è utile.", en: "It stands alone at the start of a clause: Ciononostante, lo studio è utile." },
      grammar: ["it-g-connettivi-accademici"], tags: ["connectors", "academic"],
    },
    {
      id: "ovvero", type: "word", pos: "other", target: "ovvero",
      gloss: { es: "es decir (para precisar)", en: "that is / namely" },
      accept: [{ text: "vale a dire" }],
      distractors: ["ovvio", "ovunque", "oppure"],
      note: { es: "En el italiano actual ovvero suele aclarar, no ofrecer otra opción.", en: "In today's Italian ovvero usually clarifies rather than offering an alternative." },
      grammar: ["it-g-connettivi-accademici"], tags: ["connectors", "academic"],
    },
    {
      id: "alla-luce-di", type: "phrase", pos: "phrase", target: "alla luce di",
      gloss: { es: "a la luz de, en vista de", en: "in light of" },
      distractors: ["nella luce di", "sotto la luce di", "in luce di"],
      grammar: ["it-g-connettivi-accademici"], tags: ["connectors", "academic"],
    },
    {
      id: "ne-consegue-che", type: "phrase", pos: "phrase", target: "ne consegue che",
      gloss: { es: "de ello se deduce que", en: "it follows that" },
      distractors: ["ci consegue che", "ne consegna che", "ne consiste che"],
      grammar: ["it-g-connettivi-accademici"], tags: ["connectors", "academic"],
    },
    {
      id: "in-virtu-di", type: "phrase", pos: "phrase", target: "in virtù di",
      gloss: { es: "en virtud de, gracias a", en: "by virtue of" },
      distractors: ["per virtù di", "in virtuoso di", "di virtù in"],
      grammar: ["it-g-connettivi-accademici"], tags: ["connectors", "academic"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "risultati-avvalorano", type: "sentence", target: "I risultati avvalorano l'ipotesi iniziale.",
      gloss: { es: "Los resultados respaldan la hipótesis inicial.", en: "The results support the initial hypothesis." },
      distractors: ["avvalora", "ipotesa", "iniziali"],
      tags: ["science"],
    },
    {
      id: "campione-ridotto", type: "sentence", target: "Il campione era ridotto; pertanto, i risultati vanno interpretati con cautela.",
      gloss: { es: "La muestra era pequeña; por lo tanto, los resultados deben interpretarse con cautela.", en: "The sample was small; the results should therefore be interpreted with caution." },
      accept: [{ text: "Il campione era ridotto; di conseguenza, i risultati vanno interpretati con cautela." }],
      distractors: ["vengono", "interpretato", "cautele"],
      grammar: ["it-g-connettivi-accademici", "it-g-passivo-venire"], tags: ["science", "connectors"],
    },
    {
      id: "aumento-temperature", type: "sentence", target: "L'aumento delle temperature è stato misurato in tutte le regioni.",
      gloss: { es: "El aumento de las temperaturas se midió en todas las regiones.", en: "The rise in temperatures was measured in every region." },
      errors: [{ text: "L'aumento di temperature è stato misurato in tutte le regioni.", feedback: { es: "Con un sustantivo concreto va di + artículo: delle temperature.", en: "A specific noun takes di + article: delle temperature." }, ruleId: "it-g-nominalizzazione" }],
      distractors: ["dei", "misurata", "regione"],
      grammar: ["it-g-nominalizzazione"], tags: ["science", "nominalisation"],
    },
    {
      id: "raccolti-i-dati", type: "sentence", target: "Raccolti i dati, i ricercatori hanno avviato l'analisi.",
      gloss: { es: "Una vez recogidos los datos, los investigadores comenzaron el análisis.", en: "Once the data had been collected, the researchers began the analysis." },
      errors: [{ text: "Raccolto i dati, i ricercatori hanno avviato l'analisi.", feedback: { es: "El participio absoluto concuerda con su sustantivo: raccolti i dati.", en: "The absolute participle agrees with its noun: raccolti i dati." }, ruleId: "it-g-participio-assoluto" }],
      distractors: ["Raccolto", "avviata", "dei"],
      grammar: ["it-g-participio-assoluto"], tags: ["science", "participle"],
    },
    {
      id: "avendo-analizzato", type: "sentence", target: "Avendo analizzato i campioni, il gruppo ha confutato la teoria precedente.",
      gloss: { es: "Tras analizar las muestras, el equipo refutó la teoría anterior.", en: "Having analysed the samples, the team refuted the previous theory." },
      errors: [{ text: "Essendo analizzato i campioni, il gruppo ha confutato la teoria precedente.", feedback: { es: "analizzare lleva avere: avendo analizzato.", en: "analizzare takes avere: avendo analizzato." }, ruleId: "it-g-gerundio" }],
      distractors: ["Essendo", "confuso", "campione"],
      grammar: ["it-g-gerundio"], tags: ["science", "gerund"],
    },
    {
      id: "alla-luce-dei-dati", type: "sentence", target: "Alla luce dei dati raccolti, l'ipotesi va rivista.",
      gloss: { es: "A la luz de los datos recogidos, hay que revisar la hipótesis.", en: "In light of the data collected, the hypothesis needs to be revised." },
      distractors: ["del", "viene", "rivisto"],
      grammar: ["it-g-connettivi-accademici", "it-g-passivo-venire"], tags: ["science", "connectors"],
    },
    {
      id: "revisione-paritaria", type: "sentence", target: "Lo studio è stato sottoposto a revisione paritaria.",
      gloss: { es: "El estudio se sometió a revisión por pares.", en: "The study underwent peer review." },
      distractors: ["sottoposta", "alla", "stata"],
      tags: ["science"],
    },
    {
      id: "ne-consegue-fenomeno", type: "sentence", target: "Ne consegue che il fenomeno non dipende dal clima.",
      gloss: { es: "De ello se deduce que el fenómeno no depende del clima.", en: "It follows that the phenomenon does not depend on the climate." },
      distractors: ["Ci", "dipenda", "del"],
      grammar: ["it-g-connettivi-accademici"], tags: ["science", "connectors"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-nominalizzazione", type: "pattern", target: "i prezzi aumentano → l'aumento dei prezzi",
      gloss: { es: "nominalización: del verbo al sustantivo", en: "nominalisation: from verb to noun" },
      pattern: {
        rule: {
          es: "Una oración se condensa en un sustantivo: el verbo pasa a sustantivo (-zione, -mento, -ità, -ura) y su sujeto u objeto va con di + artículo: le emissioni si riducono → la riduzione delle emissioni.",
          en: "A clause condenses into a noun: the verb becomes a noun (-zione, -mento, -ità, -ura) and its subject or object follows di + article: le emissioni si riducono → la riduzione delle emissioni.",
        },
        table: [["aumentare", "l'aumento di"], ["ridurre", "la riduzione di"], ["crescere", "la crescita di"], ["scoprire", "la scoperta di"]],
      },
      question: {
        prompt: { es: "Forma nominal de «le emissioni si riducono»:", en: "Noun form of 'le emissioni si riducono':" },
        options: ["la riduzione delle emissioni", "il ridotto delle emissioni", "la riduzione alle emissioni", "la ridotta delle emissioni"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-nominalizzazione"], tags: ["grammar", "nominalisation"],
    },
    {
      id: "pat-connettivi-accademici", type: "pattern", target: "pertanto · ciononostante · ovvero · alla luce di · ne consegue che",
      gloss: { es: "conectores del registro académico", en: "academic connectors" },
      pattern: {
        rule: {
          es: "Consecuencia: pertanto, di conseguenza, ne consegue che. Contraste: ciononostante, tuttavia. Aclaración: ovvero, vale a dire. Base o causa: alla luce di, in virtù di.",
          en: "Result: pertanto, di conseguenza, ne consegue che. Contrast: ciononostante, tuttavia. Rephrasing: ovvero, vale a dire. Basis or cause: alla luce di, in virtù di.",
        },
        table: [["conseguenza", "pertanto · ne consegue che"], ["contrasto", "ciononostante"], ["chiarimento", "ovvero"], ["base", "alla luce di"]],
      },
      question: {
        prompt: { es: "Elige el conector de consecuencia: «Il campione era piccolo; ___, i dati non sono definitivi.»", en: "Pick the result connector: 'Il campione era piccolo; ___, i dati non sono definitivi.'" },
        options: ["pertanto", "ciononostante", "ovvero", "in virtù di"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-connettivi-accademici"], tags: ["grammar", "connectors"],
    },
    {
      id: "pat-participio-accademico", type: "pattern", target: "concluse le analisi · raccolti i dati · avendo verificato",
      gloss: { es: "condensar con participio absoluto y gerundio compuesto", en: "condensing with absolute participles and the past gerund" },
      pattern: {
        rule: {
          es: "Participio + sustantivo = «una vez que…», y el participio concuerda: concluse le analisi. Con el mismo sujeto también sirve avendo / essendo + participio: avendo verificato i dati, …",
          en: "Participle + noun = 'once…', and the participle agrees: concluse le analisi. With the same subject avendo / essendo + participle also works: avendo verificato i dati, …",
        },
        table: [["participio assoluto", "concluse le analisi, …"], ["gerundio composto", "avendo concluso le analisi, …"]],
      },
      question: {
        prompt: { es: "Completa: «___ le analisi, il gruppo ha pubblicato lo studio.»", en: "Complete: '___ le analisi, il gruppo ha pubblicato lo studio.'" },
        options: ["Concluse", "Concluso", "Conclusi", "Conclusa"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-participio-assoluto", "it-g-gerundio"], tags: ["grammar", "participle"],
    },
    {
      id: "tab-nominalizzazione", type: "paradigm", target: "verbo → sostantivo",
      spoken: "verbo, sostantivo",
      gloss: { es: "verbo → sustantivo (registro académico)", en: "verb → noun (academic register)" },
      grammar: ["it-g-nominalizzazione"],
      paradigm: {
        caption: { es: "Escribe el sustantivo con su artículo", en: "Write the noun with its article" },
        cells: [
          { label: "aumentare", answer: "l'aumento", ruleId: "it-g-nominalizzazione" },
          { label: "ridurre", answer: "la riduzione", ruleId: "it-g-nominalizzazione" },
          { label: "crescere", answer: "la crescita", ruleId: "it-g-nominalizzazione" },
          { label: "scoprire", answer: "la scoperta", ruleId: "it-g-nominalizzazione" },
          { label: "analizzare", answer: "l'analisi", ruleId: "it-g-nominalizzazione" },
        ],
      },
      tags: ["grammar", "nominalisation", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-sonno", type: "listening",
      target: "Uno studio condotto su oltre duemila volontari indica che dormire meno di sei ore aumenta il rischio di malattie cardiache. Gli autori, tuttavia, precisano che il campione era composto soltanto da adulti.",
      gloss: {
        es: "Un estudio hecho con más de dos mil voluntarios indica que dormir menos de seis horas aumenta el riesgo de enfermedades del corazón. Sin embargo, los autores aclaran que la muestra estaba formada solo por adultos.",
        en: "A study of over two thousand volunteers suggests that sleeping less than six hours raises the risk of heart disease. The authors point out, however, that the sample was made up only of adults.",
      },
      question: {
        prompt: { es: "¿Qué limitación señalan los autores?", en: "What limitation do the authors point out?" },
        options: [
          { es: "La muestra incluía solo adultos.", en: "The sample only included adults." },
          { es: "Participaron muy pocas personas.", en: "Very few people took part." },
          { es: "No midieron las horas de sueño.", en: "They didn't measure hours of sleep." },
          { es: "Solo participaron mujeres.", en: "Only women took part." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "science"],
    },
    {
      id: "dlg-tesi", type: "dialogue", register: "formal", target: "Scriva che i dati suggeriscono una tendenza.",
      gloss: { es: "Escriba que los datos sugieren una tendencia.", en: "Write that the data suggest a trend." },
      turns: [
        { who: "A", target: "Professoressa, ho finito il capitolo sui risultati. Potrebbe darci un'occhiata?", gloss: { es: "Profesora, terminé el capítulo de resultados. ¿Podría echarle un vistazo?", en: "Professor, I've finished the results chapter. Could you have a look at it?" } },
        { who: "B", target: "Certo. Però le conclusioni mi sembrano un po' affrettate: il campione è troppo piccolo.", gloss: { es: "Claro. Pero las conclusiones me parecen un poco apresuradas: la muestra es demasiado pequeña.", en: "Of course. But the conclusions seem a bit hasty to me: the sample is too small." } },
        { who: "A", target: "Quindi dovrei ridimensionarle?", gloss: { es: "¿Entonces debería matizarlas?", en: "So I should tone them down?" } },
        { who: "B", target: "Esatto. Scriva che i dati suggeriscono una tendenza, non che la dimostrano.", gloss: { es: "Exacto. Escriba que los datos sugieren una tendencia, no que la demuestran.", en: "Exactly. Write that the data suggest a trend, not that they prove it." } },
      ],
      question: {
        prompt: { es: "¿Qué le pide la profesora?", en: "What does the professor ask for?" },
        options: [
          { es: "Que sea más prudente en las conclusiones.", en: "More caution in the conclusions." },
          { es: "Que amplíe la muestra antes del viernes.", en: "A bigger sample by Friday." },
          { es: "Que borre el capítulo de resultados.", en: "Deleting the results chapter." },
          { es: "Que cambie el tema de la tesis.", en: "A new thesis topic." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "science", "academic"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-relatore", type: "bridge", onlyFor: "es", target: "il relatore",
      gloss: { es: "el director de tesis; el ponente (en un congreso)", en: "the thesis supervisor; the speaker (at a conference)" },
      question: {
        prompt: { es: "«Il mio relatore ha approvato la tesi» significa…", en: "'Il mio relatore ha approvato la tesi' means…" },
        options: [
          { es: "Mi director de tesis aprobó la tesis.", en: "My supervisor approved my thesis." },
          { es: "Mi narrador aprobó la tesis.", en: "My narrator approved the thesis." },
          { es: "Mi compañero de clase aprobó la tesis.", en: "My classmate approved the thesis." },
          { es: "El periodista aprobó la tesis.", en: "The reporter approved the thesis." },
        ],
        answer: 0,
      },
      note: { es: "il relatore no es un «relator»: relatar o narrar es «raccontare»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "academic"],
    },
  ]),
};
