import type { GrammarPoint } from "../schema";

// Grammar points for units u25–u30 (C1): textbook cards linked from the units' pattern items.
export const grammar4: GrammarPoint[] = [
  // ── u25 ────────────────────────────────────────────────────
  {
    id: "it-g-stile-nominale",
    lang: "it",
    cefr: "C1",
    title: { es: "El estilo nominal en el italiano formal", en: "Nominal style in formal Italian" },
    short: {
      es: "En textos formales el verbo se vuelve sustantivo: firmiamo → procediamo alla firma; pagare → effettuare il pagamento.",
      en: "Formal texts turn verbs into nouns: firmiamo → procediamo alla firma; pagare → effettuare il pagamento.",
    },
    rule: {
      es: "En correos de trabajo, contratos y avisos, el italiano prefiere un verbo de apoyo (effettuare, procedere a, provvedere a, dare) más un sustantivo, en lugar del verbo simple. Suena más impersonal y cortés, como «realizar el pago» en vez de «pagar». En una conversación normal, en cambio, suena rígido.",
      en: "In work emails, contracts and notices, Italian prefers a support verb (effettuare, procedere a, provvedere a, dare) plus a noun instead of the plain verb. It sounds more impersonal and polite, like 'make payment' instead of 'pay'. In ordinary conversation, though, it sounds stiff.",
    },
    steps: [
      { es: "Busca el verbo principal: pagare, firmare, consegnare.", en: "Find the main verb: pagare, firmare, consegnare." },
      { es: "Conviértelo en sustantivo: il pagamento, la firma, la consegna.", en: "Turn it into a noun: il pagamento, la firma, la consegna." },
      { es: "Elige el verbo de apoyo y su preposición: effettuare il pagamento, procedere alla firma, provvedere alla consegna.", en: "Pick the support verb and its preposition: effettuare il pagamento, procedere alla firma, provvedere alla consegna." },
    ],
    table: {
      head: ["verbo", "stile nominale"],
      rows: [
        ["pagare", "effettuare il pagamento"],
        ["firmare", "procedere alla firma"],
        ["consegnare", "provvedere alla consegna"],
        ["comunicare", "dare comunicazione"],
        ["decidere", "prendere una decisione"],
      ],
    },
    examples: [
      { target: "Si prega di effettuare il pagamento entro trenta giorni.", gloss: { es: "Se ruega realizar el pago en un plazo de treinta días.", en: "Please make payment within thirty days." } },
      { target: "Procederemo alla firma del contratto lunedì.", gloss: { es: "Procederemos a la firma del contrato el lunes.", en: "We will proceed to sign the contract on Monday." } },
    ],
    pitfalls: {
      es: "«Procedere la firma» es incorrecto: procedere pide «a» (procedere alla firma), igual que provvedere a. Como en español: «proceder a la firma».",
      en: "'Procedere la firma' is wrong: procedere takes a (procedere alla firma), and so does provvedere a.",
    },
  },
  {
    id: "it-g-qualora",
    lang: "it",
    cefr: "C1",
    title: { es: "qualora y nel caso in cui + congiuntivo", en: "qualora and nel caso in cui + subjunctive" },
    short: {
      es: "qualora / nel caso in cui (= en caso de que) + congiuntivo: Qualora fosse necessario, La contatteremo.",
      en: "qualora / nel caso in cui (= should, in case) + subjunctive: Qualora fosse necessario, La contatteremo.",
    },
    rule: {
      es: "qualora y nel caso in cui expresan una condición posible, como «en caso de que» o «si llegara a»: siempre van con congiuntivo. qualora es propio del registro formal (contratos, correos, normas); al hablar se usa «se».",
      en: "qualora and nel caso in cui express a possible condition, like 'should' or 'in case': they always take the subjunctive. qualora belongs to formal register (contracts, emails, rules); in speech people use se.",
    },
    steps: [
      { es: "¿Condición posible en un texto formal? → qualora o nel caso in cui.", en: "A possible condition in a formal text? → qualora or nel caso in cui." },
      { es: "Pon el verbo en congiuntivo presente (sia, abbia) o imperfetto (fosse, avesse), que suena aún más hipotético.", en: "Put the verb in the present (sia, abbia) or imperfect subjunctive (fosse, avesse), which sounds even more hypothetical." },
      { es: "La consecuencia va en indicativo (presente o futuro) o en condicional.", en: "The result goes in the indicative (present or future) or the conditional." },
    ],
    table: {
      head: ["", "congiuntivo", "conseguenza"],
      rows: [
        ["qualora", "fosse necessario", "La contatteremo"],
        ["nel caso in cui", "abbia domande", "può scriverci"],
        ["a condizione che", "i tempi siano rispettati", "firmiamo"],
      ],
    },
    examples: [
      { target: "Qualora il pagamento non venisse effettuato, il contratto sarà annullato.", gloss: { es: "En caso de que no se realizara el pago, el contrato quedará anulado.", en: "Should payment not be made, the contract will be cancelled." } },
      { target: "Nel caso in cui abbia bisogno di chiarimenti, resto a disposizione.", gloss: { es: "Si necesita alguna aclaración, quedo a su disposición.", en: "Should you need any clarification, I remain at your disposal." } },
    ],
    pitfalls: {
      es: "«Qualora è necessario» es incorrecto: qualora nunca va con indicativo. Y no se combina con «se»: no «se qualora».",
      en: "'Qualora è necessario' is wrong: qualora never takes the indicative. And it never combines with se: not 'se qualora'.",
    },
  },

  // ── u26 ────────────────────────────────────────────────────
  {
    id: "it-g-congiuntivo-tempi",
    lang: "it",
    cefr: "C1",
    title: { es: "Los cuatro tiempos del congiuntivo en opiniones y noticias", en: "All four subjunctive tenses in opinions and reports" },
    short: {
      es: "Principal en presente: sia (a la vez) / sia stato (antes). En pasado: fosse (a la vez) / fosse stato (antes).",
      en: "Present main verb: sia (same time) / sia stato (before). Past main verb: fosse (same time) / fosse stato (before).",
    },
    rule: {
      es: "Después de verbos de opinión, duda o temor (credo, sembra, si teme, non è detto che) el tiempo del congiuntivo depende de dos cosas: el tiempo del verbo principal y si la acción es simultánea o anterior. Con el principal en presente se usan el congiuntivo presente y el passato; con el principal en pasado, el imperfetto y el trapassato. Para algo posterior a un pasado se usa el condicional compuesto: pensavo che sarebbe arrivato.",
      en: "After verbs of opinion, doubt or fear (credo, sembra, si teme, non è detto che) the subjunctive tense depends on two things: the tense of the main verb and whether the action is simultaneous or earlier. With a present main verb use the present and past subjunctive; with a past main verb, the imperfect and pluperfect. For something later than a past, use the past conditional: pensavo che sarebbe arrivato.",
    },
    steps: [
      { es: "Mira el verbo principal: ¿presente o pasado?", en: "Look at the main verb: present or past?" },
      { es: "¿La acción es a la vez o antes? Presente → sia / sia stato; pasado → fosse / fosse stato.", en: "Is the action at the same time or earlier? Present → sia / sia stato; past → fosse / fosse stato." },
      { es: "¿Es posterior a un pasado? → condicional compuesto: sarebbe stato, avrebbe vinto.", en: "Later than a past? → past conditional: sarebbe stato, avrebbe vinto." },
    ],
    table: {
      head: ["principale", "contemporanea", "anteriore", "posteriore"],
      rows: [
        ["credo che", "sia", "sia stato", "sarà"],
        ["credevo che", "fosse", "fosse stato", "sarebbe stato"],
      ],
    },
    examples: [
      { target: "Sembra che il governo abbia già preso una decisione.", gloss: { es: "Parece que el gobierno ya tomó una decisión.", en: "It seems the government has already made a decision." } },
      { target: "Si temeva che il ministro si fosse dimesso.", gloss: { es: "Se temía que el ministro hubiera renunciado.", en: "It was feared the minister had resigned." } },
      { target: "Nessuno pensava che la legge sarebbe passata.", gloss: { es: "Nadie pensaba que la ley iba a aprobarse.", en: "Nobody thought the law would pass." } },
    ],
    pitfalls: {
      es: "«Credevo che sia vero» es incorrecto: con el principal en pasado va el imperfetto (credevo che fosse vero). En español pasa lo mismo: «creía que fuera» o «que era», nunca «que sea».",
      en: "'Credevo che sia vero' is wrong: a past main verb needs the imperfect (credevo che fosse vero), just as English shifts 'is' to 'was'.",
    },
  },
  {
    id: "it-g-si-passivante-composto",
    lang: "it",
    cefr: "C1",
    title: { es: "El «si» pasivo en tiempos compuestos", en: "Passive 'si' in compound tenses" },
    short: {
      es: "En tiempos compuestos el «si» lleva essere y el participio concuerda: si sono prese decisioni importanti.",
      en: "In compound tenses 'si' takes essere and the participle agrees: si sono prese decisioni importanti.",
    },
    rule: {
      es: "Con el «si» pasivo el verbo concuerda con lo que se hace (si vota la legge, si votano le leggi). En tiempos compuestos el auxiliar es siempre essere y el participio concuerda en género y número con ese sustantivo. Es muy frecuente en la prensa para no nombrar a quién actúa.",
      en: "With passive si the verb agrees with what is being done (si vota la legge, si votano le leggi). In compound tenses the auxiliary is always essere and the participle agrees in gender and number with that noun. The press uses it a lot to avoid naming who acts.",
    },
    steps: [
      { es: "Encuentra el sustantivo que recibe la acción: le elezioni, il bilancio.", en: "Find the noun that receives the action: le elezioni, il bilancio." },
      { es: "Concuerda el verbo con él: si è approvato il bilancio, si sono indette le elezioni.", en: "Make the verb agree with it: si è approvato il bilancio, si sono indette le elezioni." },
      { es: "Usa siempre essere y concuerda el participio: -o, -a, -i, -e.", en: "Always use essere and make the participle agree: -o, -a, -i, -e." },
    ],
    table: {
      head: ["", "presente", "passato prossimo"],
      rows: [
        ["la legge", "si vota", "si è votata"],
        ["il bilancio", "si approva", "si è approvato"],
        ["le elezioni", "si indicono", "si sono indette"],
        ["i fondi", "si stanziano", "si sono stanziati"],
      ],
    },
    examples: [
      { target: "Negli ultimi anni si sono spesi troppi soldi in consulenze.", gloss: { es: "En los últimos años se gastó demasiado dinero en asesorías.", en: "In recent years too much money has been spent on consultants." } },
      { target: "Finalmente si è trovato un accordo.", gloss: { es: "Por fin se llegó a un acuerdo.", en: "An agreement has finally been reached." } },
    ],
    pitfalls: {
      es: "«Si ha trovato un accordo» es incorrecto: el «si» pasivo siempre lleva essere (si è trovato). Y «si è prese le decisioni» tampoco: el verbo concuerda con el plural (si sono prese).",
      en: "'Si ha trovato un accordo' is wrong: passive si always takes essere (si è trovato). And the verb agrees with a plural noun: si sono prese le decisioni.",
    },
  },

  // ── u27 ────────────────────────────────────────────────────
  {
    id: "it-g-nominalizzazione",
    lang: "it",
    cefr: "C1",
    title: { es: "Nominalización en la escritura académica", en: "Nominalisation in academic writing" },
    short: {
      es: "Verbo → sustantivo + di: aumentare → l'aumento di; analizzare → l'analisi di; ridurre → la riduzione di.",
      en: "Verb → noun + di: aumentare → l'aumento di; analizzare → l'analisi di; ridurre → la riduzione di.",
    },
    rule: {
      es: "En los textos científicos una oración entera se condensa en un sustantivo: «i prezzi aumentano» se vuelve «l'aumento dei prezzi». Lo que era sujeto u objeto pasa a ir con «di». Los sufijos más comunes son -zione, -mento, -ità y -ura; algunos sustantivos no tienen sufijo (il calo, la crescita, l'analisi).",
      en: "Scientific texts condense a whole clause into a noun: 'i prezzi aumentano' becomes 'l'aumento dei prezzi'. What was subject or object now follows di. The commonest suffixes are -zione, -mento, -ità and -ura; some nouns have none (il calo, la crescita, l'analisi).",
    },
    steps: [
      { es: "Toma la oración: «le emissioni si riducono».", en: "Take the clause: 'le emissioni si riducono'." },
      { es: "Convierte el verbo en sustantivo con su artículo: ridurre → la riduzione.", en: "Turn the verb into a noun with its article: ridurre → la riduzione." },
      { es: "Une el sujeto con di + artículo: la riduzione delle emissioni.", en: "Attach the subject with di + article: la riduzione delle emissioni." },
    ],
    table: {
      head: ["verbo", "sostantivo"],
      rows: [
        ["aumentare", "l'aumento"],
        ["ridurre", "la riduzione"],
        ["crescere", "la crescita"],
        ["analizzare", "l'analisi"],
        ["scoprire", "la scoperta"],
        ["misurare", "la misurazione"],
      ],
    },
    examples: [
      { target: "La riduzione delle emissioni è l'obiettivo principale dello studio.", gloss: { es: "Reducir las emisiones es el objetivo principal del estudio.", en: "Reducing emissions is the study's main goal." } },
      { target: "In seguito alla scoperta del virus, la ricerca ha subito un'accelerazione.", gloss: { es: "Tras el descubrimiento del virus, la investigación se aceleró.", en: "Following the discovery of the virus, research sped up." } },
    ],
    pitfalls: {
      es: "Cuidado con el género: l'analisi, la crisi y la tesi son femeninos y no cambian en plural (le analisi). Y no se dice «l'aumento in prezzi»: es «l'aumento dei prezzi».",
      en: "Mind the gender: l'analisi, la crisi and la tesi are feminine and don't change in the plural (le analisi). And it's 'l'aumento dei prezzi', not 'l'aumento in prezzi'.",
    },
  },
  {
    id: "it-g-connettivi-accademici",
    lang: "it",
    cefr: "C1",
    title: { es: "Conectores del registro académico", en: "Connectors for academic writing" },
    short: {
      es: "Causa: in virtù di, dato che · consecuencia: pertanto, ne consegue che · contraste: ciononostante · aclarar: ovvero.",
      en: "Cause: in virtù di, dato che · result: pertanto, ne consegue che · contrast: ciononostante · rephrase: ovvero.",
    },
    rule: {
      es: "En un informe o un artículo, los conectores de B2 (quindi, però, perché) se cambian por equivalentes más formales. pertanto y di conseguenza introducen una consecuencia; ciononostante y tuttavia, un contraste; ovvero e cioè, una aclaración; alla luce di e in virtù di, una causa o un fundamento.",
      en: "In a report or paper, B2 connectors (quindi, però, perché) are swapped for more formal ones. pertanto and di conseguenza introduce a result; ciononostante and tuttavia, a contrast; ovvero and cioè, a rephrasing; alla luce di and in virtù di, a cause or basis.",
    },
    steps: [
      { es: "Decide la relación lógica: causa, consecuencia, contraste o aclaración.", en: "Decide the logical link: cause, result, contrast or rephrasing." },
      { es: "Mira qué viene detrás: un sustantivo (alla luce dei dati) o una oración (ne consegue che…).", en: "Check what follows: a noun (alla luce dei dati) or a clause (ne consegue che…)." },
      { es: "Elige el conector formal del grupo correcto.", en: "Pick the formal connector from the right group." },
    ],
    table: {
      head: ["relazione", "connettivo formale"],
      rows: [
        ["causa", "in virtù di · dato che"],
        ["conseguenza", "pertanto · ne consegue che"],
        ["contrasto", "ciononostante · tuttavia"],
        ["chiarimento", "ovvero · vale a dire"],
        ["base", "alla luce di · in base a"],
      ],
    },
    examples: [
      { target: "Il campione era ridotto; pertanto, i risultati vanno interpretati con cautela.", gloss: { es: "La muestra era pequeña; por lo tanto, los resultados deben interpretarse con cautela.", en: "The sample was small; the results should therefore be interpreted with caution." } },
      { target: "Alla luce dei dati raccolti, l'ipotesi iniziale va rivista.", gloss: { es: "A la luz de los datos recogidos, la hipótesis inicial debe revisarse.", en: "In light of the data collected, the initial hypothesis needs revising." } },
    ],
    pitfalls: {
      es: "ovvero en italiano actual suele significar «o sea, es decir», no «o bien». Y «pertanto» no es «por tanto que»: va solo, seguido de la consecuencia.",
      en: "ovvero today usually means 'that is, namely', not 'or else'. And pertanto stands alone before the result: never 'pertanto che'.",
    },
  },

  // ── u28 ────────────────────────────────────────────────────
  {
    id: "it-g-segnali-discorsivi",
    lang: "it",
    cefr: "C1",
    title: { es: "Marcadores del discurso en la lengua hablada", en: "Discourse markers in spoken Italian" },
    short: {
      es: "cioè (o sea), insomma (en fin), dai (¡vamos!), figurati (¡para nada!), mica (para nada, en negación), boh (ni idea).",
      en: "cioè (I mean), insomma (in short), dai (come on), figurati (don't mention it), mica (not at all), boh (no idea).",
    },
    rule: {
      es: "Los marcadores del discurso no cambian el contenido, sino el tono: corrigen (cioè), resumen (insomma), animan (dai), quitan importancia (figurati) o refuerzan una negación (mica). Son típicos de la conversación informal y casi nunca se escriben en un texto formal. «mica» va después del verbo en una frase negativa: non è mica facile.",
      en: "Discourse markers don't change the content but the tone: they correct (cioè), sum up (insomma), encourage (dai), play something down (figurati) or strengthen a negative (mica). They belong to informal conversation and almost never appear in formal writing. mica goes after the verb in a negative sentence: non è mica facile.",
    },
    steps: [
      { es: "¿Qué quieres hacer: corregir, resumir, animar, quitar importancia o reforzar un «no»?", en: "What do you want to do: correct, sum up, encourage, play down or strengthen a 'no'?" },
      { es: "Elige el marcador: cioè, insomma, dai, figurati, mica.", en: "Pick the marker: cioè, insomma, dai, figurati, mica." },
      { es: "Con mica: non + verbo + mica (non ho mica detto questo).", en: "With mica: non + verb + mica (non ho mica detto questo)." },
    ],
    table: {
      head: ["segnale", "funzione", "esempio"],
      rows: [
        ["cioè", "correggere", "Domani, cioè lunedì"],
        ["insomma", "riassumere", "Insomma, è andata bene"],
        ["dai", "incoraggiare", "Dai, vieni anche tu!"],
        ["figurati", "minimizzare", "Grazie! — Figurati!"],
        ["mica", "negazione forte", "Non è mica facile"],
      ],
    },
    examples: [
      { target: "Non sono mica scemo!", gloss: { es: "¡No soy ningún tonto!", en: "I'm not stupid, you know!" } },
      { target: "Insomma, alla fine è andata bene.", gloss: { es: "En fin, al final salió bien.", en: "Anyway, in the end it went well." } },
    ],
    pitfalls: {
      es: "«figurati» no es «imagínate» en el sentido de sorpresa: responde a un «grazie» o a un «scusa» y significa «¡no es nada!». Y mica sin «non» delante del verbo suena muy coloquial (mica male = nada mal).",
      en: "figurati in reply to grazie or scusa means 'don't mention it', not 'imagine'. And mica without non (mica male = not bad at all) is very colloquial.",
    },
  },
  {
    id: "it-g-dislocazione",
    lang: "it",
    cefr: "C1",
    title: { es: "Dislocación: el tema al principio y un pronombre que lo retoma", en: "Dislocation: topic first, picked up by a pronoun" },
    short: {
      es: "El objeto va al principio y un pronombre lo repite: Il caffè lo prendo io. Di soldi non ne ho.",
      en: "The object moves to the front and a pronoun repeats it: Il caffè lo prendo io. Di soldi non ne ho.",
    },
    rule: {
      es: "En el italiano hablado es muy común poner primero aquello de lo que se habla y retomarlo después con un pronombre átono, igual que en el español «el café lo pago yo». Con un objeto directo se usa lo, la, li, le; con «di + algo», ne; con un lugar, ci. Si el objeto va antes, el pronombre es obligatorio.",
      en: "Spoken Italian very often puts the topic first and picks it up with a clitic pronoun, as in 'the coffee, I'll pay for it'. A direct object takes lo, la, li, le; 'di + something' takes ne; a place takes ci. Once the object comes first, the pronoun is required.",
    },
    steps: [
      { es: "Pon al principio el tema: la pizza, i biglietti, di tempo, a Roma.", en: "Put the topic first: la pizza, i biglietti, di tempo, a Roma." },
      { es: "Elige el pronombre que lo retoma: la, li, ne, ci.", en: "Pick the pronoun that picks it up: la, li, ne, ci." },
      { es: "Ponlo delante del verbo; en tiempos compuestos el participio concuerda: i biglietti li ho comprati.", en: "Put it before the verb; in compound tenses the participle agrees: i biglietti li ho comprati." },
    ],
    table: {
      head: ["tema", "pronome", "frase"],
      rows: [
        ["la pizza", "la", "La pizza la porto io."],
        ["i biglietti", "li", "I biglietti li ho presi."],
        ["di tempo", "ne", "Di tempo ne ho poco."],
        ["a Roma", "ci", "A Roma ci vado spesso."],
      ],
    },
    examples: [
      { target: "Il caffè lo offro io.", gloss: { es: "El café lo pago yo.", en: "The coffee's on me." } },
      { target: "Di questa storia non ne voglio più sentir parlare.", gloss: { es: "De esta historia no quiero oír hablar más.", en: "I don't want to hear any more about this story." } },
    ],
    pitfalls: {
      es: "«I biglietti ho comprato» es incorrecto: si el objeto va primero, hace falta el pronombre (i biglietti li ho comprati). Y el participio concuerda con lo, la, li, le.",
      en: "'I biglietti ho comprato' is wrong: a fronted object needs the pronoun (i biglietti li ho comprati), and the participle agrees with lo, la, li, le.",
    },
  },

  // ── u29 ────────────────────────────────────────────────────
  {
    id: "it-g-ipotetico-misto",
    lang: "it",
    cefr: "C1",
    title: { es: "Oraciones con «se» mixtas: pasado y presente", en: "Mixed 'if' sentences: past and present" },
    short: {
      es: "Pasado → hoy: se avessi studiato, ora lavorerei. Hoy → pasado: se fossi attento, l'avresti visto.",
      en: "Past → present: se avessi studiato, ora lavorerei. Present → past: se fossi attento, l'avresti visto.",
    },
    rule: {
      es: "Las dos partes de una oración con «se» no tienen que estar en el mismo tiempo. Si una condición del pasado tiene efecto hoy, va se + congiuntivo trapassato y condicional simple. Si una condición general o presente explica algo del pasado, va se + congiuntivo imperfetto y condicional compuesto.",
      en: "The two halves of an 'if' sentence needn't share a time. A past condition with a present result takes se + pluperfect subjunctive and the simple conditional. A general or present condition explaining a past result takes se + imperfect subjunctive and the past conditional.",
    },
    steps: [
      { es: "Ubica cada parte en el tiempo: ¿la condición es pasada o actual? ¿Y la consecuencia?", en: "Place each half in time: is the condition past or present? And the result?" },
      { es: "Condición pasada → avessi / fossi + participio. Condición actual → avessi, fossi, potessi.", en: "Past condition → avessi / fossi + participle. Present condition → avessi, fossi, potessi." },
      { es: "Consecuencia actual → avrei, sarei. Consecuencia pasada → avrei fatto, sarei stato.", en: "Present result → avrei, sarei. Past result → avrei fatto, sarei stato." },
    ],
    table: {
      head: ["se …", "conseguenza", "esempio"],
      rows: [
        ["cong. trapassato", "condiz. presente", "se avessi studiato, ora lavorerei"],
        ["cong. imperfetto", "condiz. passato", "se fossi prudente, non l'avresti fatto"],
      ],
    },
    examples: [
      { target: "Se avessimo investito nelle rinnovabili vent'anni fa, oggi pagheremmo meno l'energia.", gloss: { es: "Si hubiéramos invertido en renovables hace veinte años, hoy pagaríamos menos por la energía.", en: "If we had invested in renewables twenty years ago, we'd pay less for energy today." } },
      { target: "Se non fossi così testardo, avresti accettato la proposta.", gloss: { es: "Si no fueras tan terco, habrías aceptado la propuesta.", en: "If you weren't so stubborn, you'd have accepted the offer." } },
    ],
    pitfalls: {
      es: "«Se avessimo investito, oggi avremmo pagato meno» mezcla mal los tiempos: si el efecto es de hoy, va el condicional simple (oggi pagheremmo). Las palabras «oggi», «adesso» y «ora» son la pista.",
      en: "'Se avessimo investito, oggi avremmo pagato meno' mixes the wrong tenses: a present result needs the simple conditional (oggi pagheremmo). Words like oggi, adesso and ora are the clue.",
    },
  },
  {
    id: "it-g-concessive",
    lang: "it",
    cefr: "C1",
    title: { es: "Concesivas avanzadas: ancorché, per quanto, pur + gerundio", en: "Advanced concessives: ancorché, per quanto, pur + gerund" },
    short: {
      es: "Con congiuntivo: sebbene, nonostante, per quanto, ancorché. Con indicativo: anche se. Con gerundio: pur essendo.",
      en: "Subjunctive: sebbene, nonostante, per quanto, ancorché. Indicative: anche se. Gerund: pur essendo.",
    },
    rule: {
      es: "Para decir «aunque», el italiano formal usa sebbene, benché, nonostante, malgrado, per quanto y ancorché (muy culto), todas con congiuntivo. anche se va con indicativo y es la opción neutra. pur + gerundio es una forma compacta y elegante cuando el sujeto es el mismo: pur essendo d'accordo, voto contro.",
      en: "For 'although', formal Italian uses sebbene, benché, nonostante, malgrado, per quanto and ancorché (very literary), all with the subjunctive. anche se takes the indicative and is the neutral choice. pur + gerund is a compact, elegant option when the subject stays the same: pur essendo d'accordo, voto contro.",
    },
    steps: [
      { es: "¿Registro neutro? → anche se + indicativo.", en: "Neutral register? → anche se + indicative." },
      { es: "¿Formal? → sebbene, nonostante, per quanto + congiuntivo (sia, abbia, fosse).", en: "Formal? → sebbene, nonostante, per quanto + subjunctive (sia, abbia, fosse)." },
      { es: "¿Mismo sujeto en ambas partes? → pur + gerundio (pur sapendo, pur avendo).", en: "Same subject in both halves? → pur + gerund (pur sapendo, pur avendo)." },
      { es: "nonostante + sustantivo no lleva verbo: nonostante la crisi.", en: "nonostante + noun needs no verb: nonostante la crisi." },
    ],
    table: {
      head: ["connettivo", "modo", "esempio"],
      rows: [
        ["anche se", "indicativo", "anche se costa"],
        ["sebbene / benché", "congiuntivo", "sebbene costi"],
        ["per quanto", "congiuntivo", "per quanto costi"],
        ["ancorché", "congiuntivo", "ancorché costoso"],
        ["pur", "gerundio", "pur costando"],
        ["nonostante", "cong. / nome", "nonostante la crisi"],
      ],
    },
    examples: [
      { target: "Per quanto la transizione sia costosa, non possiamo rimandarla.", gloss: { es: "Por muy costosa que sea la transición, no podemos postergarla.", en: "However costly the transition may be, we can't put it off." } },
      { target: "Pur riconoscendo i progressi, l'opposizione ha votato contro.", gloss: { es: "Aun reconociendo los avances, la oposición votó en contra.", en: "While acknowledging the progress, the opposition voted against." } },
    ],
    pitfalls: {
      es: "«Sebbene è caro» es incorrecto: sebbene siempre pide congiuntivo (sebbene sia caro). Si quieres el indicativo, usa anche se.",
      en: "'Sebbene è caro' is wrong: sebbene always takes the subjunctive (sebbene sia caro). If you want the indicative, use anche se.",
    },
  },

  // ── u30 ────────────────────────────────────────────────────
  {
    id: "it-g-trapassato-remoto",
    lang: "it",
    cefr: "C1",
    title: { es: "Narrar con el passato remoto y el trapassato remoto", en: "Narrating with the passato remoto and trapassato remoto" },
    short: {
      es: "Tras dopo che, appena, quando + passato remoto, lo anterior va en trapassato remoto: dopo che ebbe finito, uscì.",
      en: "Before a passato remoto, after dopo che / appena / quando, use the trapassato remoto: dopo che ebbe finito, uscì.",
    },
    rule: {
      es: "En la narración escrita (biografías, historia del arte, novelas) los hechos principales van en passato remoto. Cuando una acción termina justo antes de otra en passato remoto, después de dopo che, (non) appena o quando, se usa el trapassato remoto: passato remoto de avere o essere + participio. Fuera de esas conjunciones se usa el trapassato prossimo.",
      en: "In written narrative (biographies, art history, novels) the main events take the passato remoto. When an action ends just before another in the passato remoto, after dopo che, (non) appena or quando, use the trapassato remoto: passato remoto of avere or essere + participle. Outside those conjunctions use the trapassato prossimo.",
    },
    steps: [
      { es: "¿El hecho principal está en passato remoto (dipinse, partì)?", en: "Is the main event in the passato remoto (dipinse, partì)?" },
      { es: "¿La acción anterior va tras dopo che, appena o quando? → trapassato remoto.", en: "Does the earlier action follow dopo che, appena or quando? → trapassato remoto." },
      { es: "Forma: ebbi, ebbe, ebbero / fui, fu, furono + participio (ebbe terminato, fu partito).", en: "Form: ebbi, ebbe, ebbero / fui, fu, furono + participle (ebbe terminato, fu partito)." },
    ],
    table: {
      head: ["", "avere", "essere"],
      rows: [
        ["io", "ebbi finito", "fui partito/a"],
        ["lui / lei", "ebbe finito", "fu partito/a"],
        ["noi", "avemmo finito", "fummo partiti/e"],
        ["loro", "ebbero finito", "furono partiti/e"],
      ],
    },
    examples: [
      { target: "Dopo che ebbe terminato l'affresco, Giotto partì per Padova.", gloss: { es: "Después de terminar el fresco, Giotto partió hacia Padua.", en: "Once he had finished the fresco, Giotto left for Padua." } },
      { target: "Non appena fu arrivata a Firenze, visitò gli Uffizi.", gloss: { es: "Apenas llegó a Florencia, visitó los Uffizi.", en: "As soon as she had arrived in Florence, she visited the Uffizi." } },
    ],
    pitfalls: {
      es: "El trapassato remoto se reconoce más de lo que se usa: nunca va solo, siempre detrás de dopo che, appena o quando. «Ebbe finito il libro» suelto es incorrecto; ahí va «aveva finito».",
      en: "The trapassato remoto is recognised more than used: it never stands alone, only after dopo che, appena or quando. A free-standing 'ebbe finito il libro' is wrong; use 'aveva finito'.",
    },
  },
  {
    id: "it-g-registro-letterario",
    lang: "it",
    cefr: "C1",
    title: { es: "Variación de estilo: italiano neutro y literario", en: "Style variation: neutral and literary Italian" },
    short: {
      es: "Literario o muy formal: egli (lui), giacché (perché), ove (dove), nonché (e anche), sovente (spesso), recarsi (andare).",
      en: "Literary or very formal: egli (lui), giacché (perché), ove (dove), nonché (e anche), sovente (spesso), recarsi (andare).",
    },
    rule: {
      es: "El italiano escrito tiene un registro alto que aparece en ensayos, críticas de arte, documentos oficiales y literatura. Muchas palabras neutras tienen un equivalente culto: egli por lui, ove por dove, giacché por perché, sovente por spesso. Saber reconocerlas es clave para leer; usarlas al hablar suena afectado o irónico.",
      en: "Written Italian has a high register found in essays, art criticism, official documents and literature. Many neutral words have a formal twin: egli for lui, ove for dove, giacché for perché, sovente for spesso. Recognising them is key for reading; using them in speech sounds affected or ironic.",
    },
    steps: [
      { es: "Identifica el registro del texto: conversación, prensa, ensayo, literatura.", en: "Identify the text's register: conversation, press, essay, literature." },
      { es: "En lectura, traduce mentalmente la forma culta a la neutra: ove → dove.", en: "When reading, map the formal word to the neutral one: ove → dove." },
      { es: "Al escribir algo formal, usa pocas formas cultas y con coherencia.", en: "When writing formally, use a few formal words, consistently." },
    ],
    table: {
      head: ["neutro", "letterario / formale"],
      rows: [
        ["lui", "egli"],
        ["dove", "ove"],
        ["perché, poiché", "giacché"],
        ["e anche", "nonché"],
        ["spesso", "sovente"],
        ["andare", "recarsi"],
      ],
    },
    examples: [
      { target: "Egli si recò a Roma, ove rimase fino alla morte.", gloss: { es: "Se trasladó a Roma, donde permaneció hasta su muerte.", en: "He went to Rome, where he remained until his death." } },
      { target: "L'artista lavorava sovente di notte, giacché amava il silenzio.", gloss: { es: "El artista trabajaba a menudo de noche, ya que amaba el silencio.", en: "The artist often worked at night, since he loved silence." } },
    ],
    pitfalls: {
      es: "«nonché» no es «no solo»: significa «y también, así como» (pittore nonché scultore). Para «no solo… sino también» se usa non solo… ma anche.",
      en: "nonché doesn't mean 'not only': it means 'as well as' (pittore nonché scultore). 'Not only… but also' is non solo… ma anche.",
    },
  },
];
