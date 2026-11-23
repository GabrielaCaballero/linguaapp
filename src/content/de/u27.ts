import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u27",
  lang: "de",
  index: 27,
  cefr: "C1",
  title: { target: "Akademisches Schreiben", es: "Escritura académica", en: "Academic writing" },
  canDo: [
    { es: "Puedo entender textos académicos y artículos de divulgación científica.", en: "I can understand academic texts and popular-science articles." },
    { es: "Puedo escribir con estilo académico: compacto, impersonal y preciso.", en: "I can write in an academic style: compact, impersonal and precise." },
    { es: "Sé usar y deshacer el estilo nominal, y entiendo el participio con zu (die zu prüfende These).", en: "I can use and unpack nominal style, and understand the zu-participle (die zu prüfende These)." },
  ],
  icon: "🎓",
  items: build("de", 27, "C1", [
    // ── Research words ───────────────────────────────────────
    {
      id: "hypothese", type: "word", pos: "noun", target: "die Hypothese", gender: "f", plural: "die Hypothesen",
      gloss: { es: "la hipótesis", en: "the hypothesis" },
      distractors: ["der Hypothese", "das Hypothese", "die Hypothek"],
      note: { es: "Ojo: die Hypothek = la hipoteca.", en: "Careful: die Hypothek = mortgage." },
      tags: ["science", "academic"],
    },
    {
      id: "erkenntnis", type: "word", pos: "noun", target: "die Erkenntnis", gender: "f", plural: "die Erkenntnisse",
      gloss: { es: "el hallazgo, la conclusión (de una investigación)", en: "the finding, insight" },
      distractors: ["der Erkenntnis", "die Erkennung", "die Bekenntnis"],
      note: { es: "Plural con -se: neue Erkenntnisse.", en: "Plural in -se: neue Erkenntnisse." },
      tags: ["science", "academic", "goethe-c1"],
    },
    {
      id: "stichprobe", type: "word", pos: "noun", target: "die Stichprobe", gender: "f", plural: "die Stichproben",
      gloss: { es: "la muestra (estadística)", en: "the sample (in statistics)" },
      distractors: ["der Stichprobe", "die Probe", "der Stichpunkt"],
      tags: ["science", "statistics"],
    },
    {
      id: "schlussfolgerung", type: "word", pos: "noun", target: "die Schlussfolgerung", gender: "f", plural: "die Schlussfolgerungen",
      gloss: { es: "la conclusión (que se deduce)", en: "the conclusion (drawn from evidence)" },
      distractors: ["der Schlussfolgerung", "die Schlussrechnung", "die Fortsetzung"],
      note: { es: "Schlussfolgerungen ziehen = sacar conclusiones.", en: "Schlussfolgerungen ziehen = to draw conclusions." },
      tags: ["science", "academic"],
    },
    {
      id: "fussnote", type: "word", pos: "noun", target: "die Fußnote", gender: "f", plural: "die Fußnoten",
      gloss: { es: "la nota al pie", en: "the footnote" },
      distractors: ["der Fußnote", "das Fußnote", "die Fußspur"],
      tags: ["academic", "writing"],
    },
    {
      id: "quelle", type: "word", pos: "noun", target: "die Quelle", gender: "f", plural: "die Quellen",
      gloss: { es: "la fuente (de información)", en: "the source (of information)" },
      distractors: ["der Quelle", "die Qualle", "die Welle"],
      note: { es: "También el manantial. die Qualle = la medusa.", en: "Also a spring of water. die Qualle = jellyfish." },
      tags: ["academic", "writing"],
    },
    {
      id: "belegen", type: "word", pos: "verb", target: "belegen",
      gloss: { es: "demostrar con pruebas, respaldar", en: "to substantiate, back up (with evidence)" },
      distractors: ["beleben", "beliefern", "bewegen"],
      note: { es: "Die Daten belegen, dass … = los datos demuestran que…", en: "Die Daten belegen, dass … = the data show that…" },
      tags: ["science", "academic"],
    },
    {
      id: "widerlegen", type: "word", pos: "verb", target: "widerlegen",
      gloss: { es: "refutar", en: "to refute, disprove" },
      distractors: ["widerrufen", "wiederholen", "überlegen"],
      note: { es: "wider- (contra) se escribe sin e; wieder- significa «otra vez».", en: "wider- (against) has no e; wieder- means 'again'." },
      tags: ["science", "academic"],
    },
    {
      id: "erheben", type: "word", pos: "verb", target: "erheben",
      gloss: { es: "recopilar (datos)", en: "to collect (data)" },
      forms: { er: "erhebt", praet: "erhob", pp: "erhoben" },
      distractors: ["erhöhen", "erleben", "ergeben"],
      note: { es: "Daten erheben = recopilar datos; die erhobenen Daten = los datos recopilados.", en: "Daten erheben = to collect data; die erhobenen Daten = the data collected." },
      tags: ["science", "statistics"],
    },
    {
      id: "signifikant", type: "word", pos: "adj", target: "signifikant",
      gloss: { es: "significativo/a (estadísticamente)", en: "(statistically) significant" },
      distractors: ["signiert", "spezifisch", "sinnvoll"],
      tags: ["science", "statistics"],
    },
    {
      id: "hinsichtlich", type: "word", pos: "prep", target: "hinsichtlich",
      gloss: { es: "en cuanto a, respecto de", en: "with regard to" },
      distractors: ["hingegen", "absichtlich", "hinterher"],
      note: { es: "Lleva genitivo: hinsichtlich der Kosten.", en: "Takes the genitive: hinsichtlich der Kosten." },
      grammar: ["de-g-genitiv-praep"], tags: ["academic", "genitive"],
    },

    // ── Phrases ──────────────────────────────────────────────
    {
      id: "zugrunde-liegen", type: "phrase", pos: "phrase", target: "zugrunde liegen",
      gloss: { es: "ser la base de, subyacer", en: "to underlie" },
      accept: [{ text: "zu Grunde liegen" }],
      distractors: ["zugrunde gehen", "zugrunde stehen", "auf Grund liegen"],
      note: { es: "Ojo: zugrunde gehen = arruinarse, perecer.", en: "Careful: zugrunde gehen = to perish, be ruined." },
      tags: ["academic", "collocations"],
    },
    {
      id: "beitrag-leisten", type: "phrase", pos: "phrase", target: "einen Beitrag leisten zu",
      gloss: { es: "contribuir a", en: "to contribute to" },
      distractors: ["einen Beitrag machen zu", "einen Beitrag geben zu", "einen Beitrag tun zu"],
      grammar: ["de-g-funktionsverbgefuege"], tags: ["academic", "collocations"],
    },
    {
      id: "bezug-nehmen", type: "phrase", pos: "phrase", target: "Bezug nehmen auf",
      gloss: { es: "hacer referencia a", en: "to refer to" },
      distractors: ["Bezug machen auf", "Bezug nehmen an", "Bezug geben auf"],
      note: { es: "En cartas: Bezug nehmend auf Ihr Schreiben … (con referencia a su carta…).", en: "In letters: Bezug nehmend auf Ihr Schreiben … (with reference to your letter…)." },
      grammar: ["de-g-funktionsverbgefuege"], tags: ["academic", "collocations", "formal"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "zu-pruefende-hypothese", type: "sentence", target: "Die zu prüfende Hypothese lautet wie folgt.",
      gloss: { es: "La hipótesis que hay que comprobar es la siguiente.", en: "The hypothesis to be tested is as follows." },
      annot: { "zu prüfende": { es: "zu + participio I: «que hay que comprobar»", en: "zu + present participle: 'to be tested'" } },
      distractors: ["geprüfte", "prüfen", "laut"],
      grammar: ["de-g-gerundiv"], tags: ["academic", "participles"],
    },
    {
      id: "noch-zu-klaerende-fragen", type: "sentence", target: "Das sind die noch zu klärenden Fragen.",
      gloss: { es: "Estas son las preguntas que aún quedan por aclarar.", en: "These are the questions that still need to be clarified." },
      annot: { "zu klärenden": { es: "= die noch geklärt werden müssen", en: "= die noch geklärt werden müssen" } },
      distractors: ["geklärten", "klären", "klärende"],
      grammar: ["de-g-gerundiv"], tags: ["academic", "participles"],
    },
    {
      id: "beschriebenen-effekte", type: "sentence", target: "Die in der Studie beschriebenen Effekte konnten bislang nicht reproduziert werden.",
      gloss: { es: "Hasta ahora no se han podido reproducir los efectos descritos en el estudio.", en: "So far, the effects described in the study could not be reproduced." },
      annot: { "beschriebenen": { es: "participio II como adjetivo: «descritos en el estudio»", en: "past participle as an adjective: 'described in the study'" } },
      distractors: ["beschrieben", "beschreibenden", "worden"],
      grammar: ["de-g-partizipialattribut"], tags: ["academic", "participles"],
    },
    {
      id: "nach-auswertung", type: "sentence", target: "Nach Auswertung der Daten wurde die Studie veröffentlicht.",
      gloss: { es: "Una vez analizados los datos, se publicó el estudio.", en: "Once the data had been analysed, the study was published." },
      accept: [
        { text: "Nach der Auswertung der Daten wurde die Studie veröffentlicht." },
        { text: "Nachdem die Daten ausgewertet worden waren, wurde die Studie veröffentlicht." },
      ],
      distractors: ["Auswerten", "den", "wird"],
      grammar: ["de-g-verbalisierung"], tags: ["academic", "nominal-style"],
    },
    {
      id: "durch-vergroesserung", type: "sentence", target: "Durch eine Vergrößerung der Stichprobe ließe sich die Aussagekraft erhöhen.",
      gloss: { es: "Ampliando la muestra, los resultados serían más concluyentes.", en: "Enlarging the sample would make the results more conclusive." },
      accept: [{ text: "Indem man die Stichprobe vergrößert, ließe sich die Aussagekraft erhöhen.", verdict: "almost", feedback: { es: "Correcto en contenido; en estilo académico se prefiere la forma nominal: durch eine Vergrößerung.", en: "Right in content; academic style prefers the noun form: durch eine Vergrößerung." } }],
      annot: { "Durch eine Vergrößerung": { es: "= indem man … vergrößert", en: "= indem man … vergrößert" } },
      distractors: ["Vergrößern", "lassen", "erhöht"],
      grammar: ["de-g-verbalisierung"], tags: ["academic", "nominal-style"],
    },
    {
      id: "davon-auszugehen", type: "sentence", target: "Es ist davon auszugehen, dass die Zahlen weiter steigen.",
      gloss: { es: "Cabe suponer que las cifras seguirán aumentando.", en: "It can be assumed that the figures will continue to rise." },
      annot: { "auszugehen": { es: "sein + zu: «hay que suponer, cabe suponer»", en: "sein + zu: 'it is to be assumed'" } },
      distractors: ["ausgehen", "das", "auszugehend"],
      grammar: ["de-g-passiversatz"], tags: ["academic", "passive-alternatives"],
    },
    {
      id: "gilt-als-widerlegt", type: "sentence", target: "Diese Annahme gilt inzwischen als widerlegt.",
      gloss: { es: "Hoy esta suposición se considera refutada.", en: "This assumption is now considered disproved." },
      errors: [{ text: "Diese Annahme gilt inzwischen für widerlegt.", feedback: { es: "gelten als = considerarse (halten für, en cambio, lleva für).", en: "gelten als = to be considered (it's halten für that takes für)." } }],
      distractors: ["galt", "widerlegen", "für"],
      tags: ["academic"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-nominal-verbal", type: "paradigm", target: "Nominalstil → Verbalstil", spoken: "Nominalstil, Verbalstil",
      gloss: { es: "del estilo nominal al verbal", en: "from nominal to verbal style" },
      grammar: ["de-g-verbalisierung"],
      paradigm: {
        caption: { es: "¿Qué conjunción reemplaza a la preposición?", en: "Which conjunction replaces the preposition?" },
        cells: [
          { label: "nach der Prüfung", answer: "nachdem", ruleId: "de-g-verbalisierung" },
          { label: "wegen des Streiks", answer: "weil", accept: ["da"], ruleId: "de-g-verbalisierung" },
          { label: "trotz der Kritik", answer: "obwohl", accept: ["obgleich"], ruleId: "de-g-verbalisierung" },
          { label: "durch Übung", answer: "indem", ruleId: "de-g-verbalisierung" },
          { label: "bei Regen", answer: "wenn", accept: ["falls"], ruleId: "de-g-verbalisierung" },
        ],
      },
      tags: ["grammar", "nominal-style", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-gerundiv", type: "pattern", target: "die zu prüfende These · ein nicht zu unterschätzendes Risiko",
      gloss: { es: "el participio con zu", en: "the zu-participle" },
      pattern: {
        rule: {
          es: "zu + participio I delante del sustantivo expresa lo que se debe o se puede hacer con él: die zu prüfende These = la tesis que hay que comprobar. Lleva las terminaciones normales del adjetivo.",
          en: "zu + present participle before a noun says what must or can be done with it: die zu prüfende These = the thesis to be tested. It takes normal adjective endings.",
        },
        table: [["die These, die geprüft werden muss", "die zu prüfende These"], ["ein Risiko, das nicht zu unterschätzen ist", "ein nicht zu unterschätzendes Risiko"]],
      },
      question: {
        prompt: { es: "«eine noch zu lösende Aufgabe» significa…", en: "'eine noch zu lösende Aufgabe' means…" },
        options: [
          { es: "una tarea que todavía hay que resolver", en: "a task that still has to be solved" },
          { es: "una tarea ya resuelta", en: "a task already solved" },
          { es: "una tarea imposible de resolver", en: "a task that can't be solved" },
          { es: "una tarea que resuelve otro problema", en: "a task that solves another problem" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-gerundiv"], tags: ["grammar", "participles"],
    },
    {
      id: "pat-verbalisierung", type: "pattern", target: "nach Abschluss → nachdem … abgeschlossen war",
      gloss: { es: "deshacer el estilo nominal", en: "unpacking nominal style" },
      pattern: {
        rule: {
          es: "Cada preposición del estilo nominal tiene una conjunción equivalente: nach → nachdem, wegen → weil, trotz → obwohl, durch → indem, bei → wenn / als. El sustantivo vuelve a ser verbo y va al final.",
          en: "Each preposition in nominal style has a matching conjunction: nach → nachdem, wegen → weil, trotz → obwohl, durch → indem, bei → wenn / als. The noun becomes a verb again and goes to the end.",
        },
        table: [["nach Abschluss der Arbeiten", "nachdem die Arbeiten abgeschlossen waren"], ["wegen fehlender Daten", "weil Daten fehlten"], ["durch Übung", "indem man übt"]],
      },
      question: {
        prompt: { es: "«Trotz intensiver Forschung …» en estilo verbal:", en: "'Trotz intensiver Forschung …' in verbal style:" },
        options: ["Obwohl intensiv geforscht wurde, …", "Weil intensiv geforscht wurde, …", "Indem intensiv geforscht wurde, …", "Nachdem intensiv geforscht wurde, …"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-verbalisierung"], tags: ["grammar", "nominal-style"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-studie", type: "listening",
      target: "In der vorliegenden Studie wurde untersucht, inwiefern sich regelmäßiges Lesen auf die Konzentration von Jugendlichen auswirkt. Die erhobenen Daten deuten auf einen positiven, wenn auch geringen Effekt hin.",
      gloss: {
        es: "Este estudio analizó en qué medida la lectura regular influye en la concentración de los adolescentes. Los datos recopilados apuntan a un efecto positivo, aunque pequeño.",
        en: "This study examined to what extent regular reading affects teenagers' concentration. The data collected point to a positive, if small, effect.",
      },
      question: {
        prompt: { es: "¿Qué resultado muestra el estudio?", en: "What does the study find?" },
        options: [
          { es: "Un efecto positivo, pero pequeño", en: "A positive but small effect" },
          { es: "Un efecto positivo muy fuerte", en: "A very strong positive effect" },
          { es: "Ningún efecto", en: "No effect" },
          { es: "Un efecto negativo", en: "A negative effect" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "science"],
    },
    {
      id: "dlg-stichprobe", type: "dialogue", target: "Das heißt, ich sollte weitere Interviews führen?",
      gloss: { es: "¿O sea que debería hacer más entrevistas?", en: "So I should do more interviews?" },
      turns: [
        { who: "A", target: "Ich bin mir unsicher, ob meine Stichprobe groß genug ist.", gloss: { es: "No sé si mi muestra es lo bastante grande.", en: "I'm not sure my sample is big enough." } },
        { who: "B", target: "Mit vierzig Befragten lassen sich kaum allgemeine Aussagen treffen.", gloss: { es: "Con cuarenta personas encuestadas, casi no se pueden hacer afirmaciones generales.", en: "With forty respondents you can hardly make general claims." } },
        { who: "A", target: "Das heißt, ich sollte weitere Interviews führen?", gloss: { es: "¿O sea que debería hacer más entrevistas?", en: "So I should do more interviews?" } },
        { who: "B", target: "Genau. Andernfalls müssten Sie diese Einschränkung in der Arbeit ausdrücklich erwähnen.", gloss: { es: "Exacto. Si no, tendría que mencionar esa limitación explícitamente en el trabajo.", en: "Exactly. Otherwise you'd have to mention this limitation explicitly in your thesis." } },
      ],
      question: {
        prompt: { es: "¿Qué le recomiendan a A?", en: "What is A advised to do?" },
        options: [
          { es: "Hacer más entrevistas o mencionar la limitación", en: "Do more interviews or mention the limitation" },
          { es: "Cambiar de tema", en: "Change topic" },
          { es: "Acortar el trabajo", en: "Shorten the thesis" },
          { es: "Borrar las entrevistas", en: "Delete the interviews" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "academic"],
    },
  ]),
};
