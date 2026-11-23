import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u32",
  lang: "it",
  index: 32,
  cefr: "C2",
  title: { target: "Pagine di letteratura", es: "Páginas de literatura", en: "Pages of literature" },
  canDo: [
    { es: "Entiendo el congiuntivo usado solo, para desear, exhortar o dudar.", en: "I understand the subjunctive used on its own, to wish, urge or wonder." },
    { es: "Reconozco y uso condicionales sin «se» (Avessi saputo…).", en: "I can recognise and use conditionals without 'se' (Avessi saputo…)." },
    { es: "Puedo seguir un relato literario y comentar su estilo.", en: "I can follow a literary narrative and comment on its style." },
  ],
  icon: "📖",
  items: build("it", 32, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "narratore", type: "word", pos: "noun", target: "il narratore", gender: "m", plural: "i narratori",
      gloss: { es: "el narrador", en: "the narrator" },
      distractors: ["il narrativo", "il notaio", "il nuotatore"],
      tags: ["literature"],
    },
    {
      id: "incipit", type: "word", pos: "noun", target: "l'incipit", gender: "m", plural: "gli incipit",
      gloss: { es: "el comienzo de una obra, el íncipit", en: "the opening lines (of a work)" },
      distractors: ["l'inciso", "l'impeto", "l'inchiostro"],
      note: { es: "Palabra latina: no cambia en plural.", en: "A Latin word: it doesn't change in the plural." },
      tags: ["literature"],
    },
    {
      id: "presagio", type: "word", pos: "noun", target: "il presagio", gender: "m", plural: "i presagi",
      gloss: { es: "el presagio", en: "the omen, premonition" },
      distractors: ["il passaggio", "il paesaggio", "il prestigio"],
      tags: ["literature"],
    },
    {
      id: "struggente", type: "word", pos: "adj", target: "struggente",
      gloss: { es: "conmovedor, desgarrador", en: "heart-rending, poignant" },
      distractors: ["strisciante", "stringente", "sfuggente"],
      tags: ["literature", "feelings"],
    },
    {
      id: "inquietudine", type: "word", pos: "noun", target: "l'inquietudine", gender: "f", plural: "le inquietudini",
      gloss: { es: "la inquietud, el desasosiego", en: "restlessness, unease" },
      distractors: ["l'inquilino", "l'inquinamento", "l'iniquità"],
      tags: ["literature", "feelings"],
    },
    {
      id: "indugiare", type: "word", pos: "verb", target: "indugiare",
      gloss: { es: "demorarse, vacilar", en: "to linger, to hesitate" },
      forms: { pp: "indugiato" },
      distractors: ["indulgere", "indagare", "indurire"],
      tags: ["literature", "verbs"],
    },
    {
      id: "smarrirsi", type: "word", pos: "verb", target: "smarrirsi",
      gloss: { es: "extraviarse, perderse", en: "to lose one's way, go astray" },
      forms: { pp: "smarrito", aux: "essere" },
      distractors: ["smarcarsi", "smorzarsi", "sparirsi"],
      note: { es: "smarrito también significa «perdido»: l'ufficio oggetti smarriti.", en: "smarrito also means lost: l'ufficio oggetti smarriti." },
      tags: ["literature", "verbs"],
    },
    {
      id: "codesto", type: "word", pos: "pron", target: "codesto",
      gloss: { es: "ese (cerca de quien escucha; toscano o burocrático)", en: "that (near the listener; Tuscan or bureaucratic)" },
      distractors: ["costesto", "costui", "codice"],
      note: { es: "En cartas oficiales: codesto Ufficio = la oficina a la que escribes.", en: "In official letters: codesto Ufficio = the office you're writing to." },
      grammar: ["it-g-registro-letterario"], tags: ["literary", "register"],
    },
    {
      id: "che-dio-ce-la-mandi-buona", type: "phrase", pos: "phrase", target: "Che Dio ce la mandi buona!",
      gloss: { es: "¡Que Dios nos ampare!", en: "God help us!" },
      distractors: ["Che Dio ce la manda buona!", "Che Dio ce lo mandi buono!", "Che Dio ce la manderà buona!"],
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["chunk", "congiuntivo"],
    },
    {
      id: "sia-come-sia", type: "phrase", pos: "phrase", target: "sia come sia",
      gloss: { es: "sea como sea", en: "be that as it may" },
      accept: [{ text: "comunque sia" }],
      distractors: ["sia come è", "è come sia", "sii come sia"],
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["chunk", "congiuntivo"],
    },
    {
      id: "ammesso-e-non-concesso", type: "phrase", pos: "phrase", target: "ammesso e non concesso",
      gloss: { es: "suponiendo, y es mucho suponer, que", en: "even granting (which I don't) that" },
      distractors: ["ammesso e concesso", "messo e non concesso", "ammesso o non concesso"],
      note: { es: "Va seguido de che + congiuntivo.", en: "Followed by che + subjunctive." },
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["chunk", "rhetoric"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "avessi-saputo", type: "sentence", target: "Avessi saputo che eri in città, ti avrei invitato.",
      gloss: { es: "Si hubiera sabido que estabas en la ciudad, te habría invitado.", en: "Had I known you were in town, I'd have invited you." },
      accept: [{ text: "Se avessi saputo che eri in città, ti avrei invitato." }, { text: "Avessi saputo che eri in città, ti avrei invitata." }],
      errors: [{ text: "Avessi saputo che eri in città, ti avessi invitato.", feedback: { es: "La consecuencia va en condicional: ti avrei invitato. En italiano «hubiera» no sirve para las dos partes.", en: "The result takes the conditional: ti avrei invitato." }, ruleId: "it-g-ipotetico-senza-se" }],
      distractors: ["avevo", "fossi", "sapevo"],
      grammar: ["it-g-ipotetico-senza-se"], tags: ["congiuntivo", "conditionals"],
    },
    {
      id: "fosse-stato-per-me", type: "sentence", target: "Fosse stato per me, saremmo rimasti a casa.",
      gloss: { es: "Por mí, nos habríamos quedado en casa.", en: "If it had been up to me, we'd have stayed at home." },
      distractors: ["sarebbe", "rimasto", "stati"],
      grammar: ["it-g-ipotetico-senza-se"], tags: ["congiuntivo", "conditionals"],
    },
    {
      id: "non-lavessi-mai-detto", type: "sentence", target: "Non l'avessi mai detto!",
      gloss: { es: "¡Ojalá nunca lo hubiera dicho!", en: "I wish I'd never said it!" },
      accept: [{ text: "Magari non l'avessi mai detto!" }],
      distractors: ["avevo", "detta", "più"],
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["congiuntivo", "feelings"],
    },
    {
      id: "che-nessuno-osi", type: "sentence", target: "Che nessuno osi interromperlo!",
      gloss: { es: "¡Que nadie se atreva a interrumpirlo!", en: "Let no one dare interrupt him!" },
      distractors: ["osa", "nessun", "interrompere"],
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["congiuntivo", "literary"],
    },
    {
      id: "che-sia-stato-lui", type: "sentence", target: "Che sia stato lui? Non ci credo.",
      gloss: { es: "¿Habrá sido él? No lo creo.", en: "Could it have been him? I don't believe it." },
      accept: [{ text: "Sarà stato lui? Non ci credo." }],
      distractors: ["è", "stata", "credi"],
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["congiuntivo"],
    },
    {
      id: "treno-con-esso", type: "sentence", target: "Il treno si fermò, e con esso si fermarono i pensieri di Anna.",
      gloss: { es: "El tren se detuvo, y con él se detuvieron los pensamientos de Anna.", en: "The train stopped, and with it Anna's thoughts stopped too." },
      distractors: ["fermava", "lui", "pensiero"],
      annot: { esso: { es: "pronombre literario para una cosa (il treno)", en: "literary pronoun for a thing (il treno)" } },
      grammar: ["it-g-registro-letterario", "it-g-passato-remoto-forme"], tags: ["literary", "passato-remoto"],
    },
    {
      id: "giunta-la-sera", type: "sentence", target: "Giunta la sera, la città si svuotò.",
      gloss: { es: "Al caer la tarde, la ciudad se vació.", en: "When evening came, the city emptied." },
      distractors: ["Giunto", "svuotava", "sere"],
      grammar: ["it-g-participio-assoluto"], tags: ["literary", "passato-remoto"],
    },
    {
      id: "ammesso-abbia-ragione", type: "sentence", target: "Ammesso e non concesso che abbia ragione lui, il tono era sbagliato.",
      gloss: { es: "Suponiendo, y es mucho suponer, que él tenga razón, el tono no fue el adecuado.", en: "Even granting that he's right, his tone was wrong." },
      errors: [{ text: "Ammesso e non concesso che ha ragione lui, il tono era sbagliato.", feedback: { es: "ammesso che pide congiuntivo: abbia ragione.", en: "ammesso che takes the subjunctive: abbia ragione." }, ruleId: "it-g-congiuntivo-indipendente" }],
      distractors: ["ha", "sbagliata", "concessa"],
      grammar: ["it-g-congiuntivo-indipendente"], tags: ["rhetoric", "congiuntivo"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-congiuntivo-indipendente", type: "pattern", target: "Fosse vero! · Che nessuno si muova! · Che sia già partito?",
      gloss: { es: "el congiuntivo sin verbo principal: deseo, exhortación, duda", en: "the subjunctive without a main verb: wish, exhortation, doubt" },
      pattern: {
        rule: {
          es: "El congiuntivo puede ir solo: para un deseo o un lamento (Fosse vero!, Non l'avessi mai fatto!), para una orden a un tercero (Che entri!) o para una duda (Che sia già partito?).",
          en: "The subjunctive can stand alone: for a wish or regret (Fosse vero!, Non l'avessi mai fatto!), an order to a third person (Che entri!) or a doubt (Che sia già partito?).",
        },
        table: [["desiderio", "Fosse vero!"], ["esortazione", "Che entri pure!"], ["dubbio", "Che sia già partito?"]],
      },
      question: {
        prompt: { es: "«Che entri pure» significa…", en: "'Che entri pure' means…" },
        options: [
          { es: "Que pase, no hay problema.", en: "Let him come in, by all means." },
          { es: "Ojalá no entre.", en: "I hope he doesn't come in." },
          { es: "¿Habrá entrado ya?", en: "Could he have come in already?" },
          { es: "Entró sin permiso.", en: "He came in without permission." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-congiuntivo-indipendente"], tags: ["grammar", "congiuntivo"],
    },
    {
      id: "pat-ipotetico-senza-se", type: "pattern", target: "Avessi tempo, verrei · Avessi saputo, sarei venuto",
      gloss: { es: "condicionales sin «se»", en: "conditionals without 'se'" },
      pattern: {
        rule: {
          es: "Se puede omitir se si la frase empieza con el congiuntivo imperfetto o trapassato; la consecuencia sigue en condicional.",
          en: "se can be dropped when the clause starts with the imperfect or pluperfect subjunctive; the result stays in the conditional.",
        },
        table: [["Se avessi tempo, verrei.", "Avessi tempo, verrei."], ["Se avessi saputo, sarei venuto.", "Avessi saputo, sarei venuto."]],
      },
      question: {
        prompt: { es: "Completa: «___ prima, avremmo preso il treno.»", en: "Complete: '___ prima, avremmo preso il treno.'" },
        options: ["Fossimo partiti", "Saremmo partiti", "Siamo partiti", "Partiamo"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-ipotetico-senza-se"], tags: ["grammar", "conditionals"],
    },
    {
      id: "pat-codesto", type: "pattern", target: "questo · codesto · quello",
      gloss: { es: "los tres demostrativos del italiano formal y toscano", en: "the three demonstratives of formal and Tuscan Italian" },
      pattern: {
        rule: {
          es: "questo = cerca de quien habla; codesto = cerca de quien escucha; quello = lejos de los dos. codesto sobrevive en Toscana, en la literatura y en las cartas a una oficina pública.",
          en: "questo = near the speaker; codesto = near the listener; quello = far from both. codesto survives in Tuscany, in literature and in letters to public offices.",
        },
        table: [["vicino a me", "questo"], ["vicino a te", "codesto"], ["lontano da tutti e due", "quello"]],
      },
      question: {
        prompt: { es: "En una carta oficial, «codesto Ufficio» se refiere a…", en: "In an official letter, 'codesto Ufficio' refers to…" },
        options: [
          { es: "la oficina que recibe la carta", en: "the office receiving the letter" },
          { es: "la oficina de quien escribe", en: "the writer's own office" },
          { es: "una tercera oficina", en: "a third office" },
          { es: "una oficina ya cerrada", en: "an office that has closed" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-registro-letterario"], tags: ["grammar", "literary"],
    },
    {
      id: "tab-congiuntivo-imperfetto-irregolare", type: "paradigm", target: "congiuntivo imperfetto: forme irregolari",
      gloss: { es: "congiuntivo imperfetto irregular", en: "irregular imperfect subjunctive" },
      grammar: ["it-g-ipotetico-senza-se", "it-g-congiuntivo-imperfetto"],
      paradigm: {
        caption: { es: "Escribe la forma del congiuntivo imperfetto", en: "Write the imperfect subjunctive form" },
        cells: [
          { label: "essere · io", answer: "fossi", ruleId: "it-g-congiuntivo-imperfetto" },
          { label: "dare · lui", answer: "desse", ruleId: "it-g-congiuntivo-imperfetto" },
          { label: "stare · lei", answer: "stesse", ruleId: "it-g-congiuntivo-imperfetto" },
          { label: "dire · noi", answer: "dicessimo", ruleId: "it-g-congiuntivo-imperfetto" },
          { label: "fare · voi", answer: "faceste", ruleId: "it-g-congiuntivo-imperfetto" },
          { label: "porre · loro", answer: "ponessero", ruleId: "it-g-congiuntivo-imperfetto" },
        ],
      },
      tags: ["grammar", "congiuntivo", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lucia", type: "listening",
      target: "Quella mattina Lucia uscì prima dell'alba. Non avesse avuto quella lettera in tasca, forse sarebbe tornata indietro; ma la strada, bagnata di pioggia, sembrava chiamarla. Giunta al ponte, indugiò un istante, poi proseguì senza voltarsi.",
      gloss: {
        es: "Esa mañana Lucia salió antes del amanecer. De no haber llevado esa carta en el bolsillo, quizá habría vuelto atrás; pero la calle, mojada por la lluvia, parecía llamarla. Al llegar al puente, vaciló un instante y luego siguió sin darse vuelta.",
        en: "That morning Lucia went out before dawn. Had she not had that letter in her pocket, she might have turned back; but the road, wet with rain, seemed to call her. When she reached the bridge she lingered a moment, then went on without looking back.",
      },
      question: {
        prompt: { es: "¿Por qué no volvió atrás Lucia?", en: "Why didn't Lucia turn back?" },
        options: [
          { es: "Porque llevaba una carta en el bolsillo.", en: "Because she had a letter in her pocket." },
          { es: "Porque llovía demasiado.", en: "Because it was raining too hard." },
          { es: "Porque alguien la llamaba desde el puente.", en: "Because someone was calling her from the bridge." },
          { es: "Porque ya había amanecido.", en: "Because day had already broken." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-ipotetico-senza-se"], tags: ["listening", "literature", "passato-remoto"],
    },
    {
      id: "dlg-club-lettura", type: "dialogue", register: "informal", target: "Fossi in te, lo rileggerei.",
      gloss: { es: "Yo que tú, lo volvería a leer.", en: "If I were you, I'd read it again." },
      turns: [
        { who: "A", target: "Hai finito il romanzo che ti ho prestato?", gloss: { es: "¿Terminaste la novela que te presté?", en: "Have you finished the novel I lent you?" } },
        { who: "B", target: "Sì, l'ho divorato in due giorni. L'incipit è magnifico, ma il finale mi ha lasciata perplessa.", gloss: { es: "Sí, la devoré en dos días. El comienzo es magnífico, pero el final me dejó perpleja.", en: "Yes, I devoured it in two days. The opening is superb, but the ending left me puzzled." } },
        { who: "A", target: "Perché? A me è sembrato struggente.", gloss: { es: "¿Por qué? A mí me pareció desgarrador.", en: "Why? I found it heart-rending." } },
        { who: "B", target: "Sarà. Ma non ho capito chi fosse davvero il narratore.", gloss: { es: "Puede ser. Pero no entendí quién era realmente el narrador.", en: "Maybe. But I didn't get who the narrator really was." } },
        { who: "A", target: "Fossi in te, lo rileggerei: alla seconda lettura si capisce tutto.", gloss: { es: "Yo que tú, lo volvería a leer: en la segunda lectura se entiende todo.", en: "If I were you, I'd read it again: on a second reading it all makes sense." } },
      ],
      question: {
        prompt: { es: "¿Qué le aconseja A?", en: "What does A advise?" },
        options: [
          { es: "Volver a leer la novela.", en: "To read the novel again." },
          { es: "Leer otra novela del mismo autor.", en: "To read another novel by the same author." },
          { es: "Devolverle la novela.", en: "To give the novel back." },
          { es: "Saltarse el final.", en: "To skip the ending." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-ipotetico-senza-se"], tags: ["dialogue", "literature"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-novella", type: "bridge", onlyFor: "es", target: "la novella",
      gloss: { es: "el cuento, el relato breve", en: "the short story, novella" },
      question: {
        prompt: { es: "«Il Decameron raccoglie cento novelle» significa…", en: "'Il Decameron raccoglie cento novelle' means…" },
        options: [
          { es: "El Decamerón reúne cien cuentos.", en: "The Decameron collects a hundred short stories." },
          { es: "El Decamerón reúne cien novelas.", en: "The Decameron collects a hundred novels." },
          { es: "El Decamerón reúne cien noticias.", en: "The Decameron collects a hundred news items." },
          { es: "El Decamerón reúne cien telenovelas.", en: "The Decameron collects a hundred soap operas." },
        ],
        answer: 0,
      },
      note: { es: "la novella = el relato breve; la novela es «il romanzo»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "literature"],
    },
  ]),
};
