import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u32",
  lang: "fr",
  index: 32,
  cefr: "C2",
  title: { target: "Le mot juste", es: "La palabra justa", en: "The right word" },
  canDo: [
    { es: "Distingo parónimos que hasta los nativos confunden (éminent / imminent, conjecture / conjoncture).", en: "I can tell apart paronyms even natives confuse (éminent / imminent, conjecture / conjoncture)." },
    { es: "Elijo entre casi sinónimos según el matiz y el registro.", en: "I can choose between near-synonyms by nuance and register." },
    { es: "Sé usar quel que soit, quelque… que y si… que.", en: "I can use quel que soit, quelque… que and si… que." },
  ],
  icon: "🎯",
  items: build("fr", 32, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    { id: "eminent", type: "word", pos: "adj", target: "éminent", gloss: { es: "eminente, destacado/a", en: "eminent / distinguished" }, forms: { m: "éminent", f: "éminente" }, accept: [{ text: "éminente" }], distractors: ["imminent", "immanent", "émanant"], note: { es: "imminent = inminente (que va a ocurrir ya).", en: "imminent = about to happen." }, grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms"] },
    { id: "conjoncture", type: "word", pos: "noun", target: "la conjoncture", gender: "f", plural: "les conjonctures", gloss: { es: "la coyuntura (económica)", en: "the (economic) situation / climate" }, distractors: ["la conjecture", "la jointure", "la conjonction"], note: { es: "une conjecture = una conjetura, una hipótesis.", en: "une conjecture = a guess, a hypothesis." }, grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms", "economy"] },
    { id: "perpetrer", type: "word", pos: "verb", target: "perpétrer", gloss: { es: "perpetrar, cometer (un delito)", en: "to perpetrate" }, forms: { pp: "perpétré" }, distractors: ["perpétuer", "pénétrer", "perforer"], note: { es: "perpétuer = perpetuar (hacer durar).", en: "perpétuer = to perpetuate." }, grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms"] },
    { id: "infester", type: "word", pos: "verb", target: "infester", gloss: { es: "infestar, plagar", en: "to infest" }, forms: { pp: "infesté" }, distractors: ["infecter", "infuser", "investir"], note: { es: "infecter = infectar (una herida); infester = invadir (ratas, piratas).", en: "infecter = to infect (a wound); infester = to overrun (rats, pirates)." }, grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms"] },
    { id: "effraction", type: "word", pos: "noun", target: "l'effraction", gender: "f", plural: "les effractions", gloss: { es: "el forzamiento (de una puerta o cerradura)", en: "the forced entry / break-in" }, distractors: ["l'infraction", "la fraction", "l'éfraction"], note: { es: "une infraction = una infracción (de tránsito, de la ley).", en: "une infraction = an offence (traffic, legal)." }, grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms", "law"] },
    { id: "prolongement", type: "word", pos: "noun", target: "le prolongement", gender: "m", plural: "les prolongements", gloss: { es: "la prolongación (en el espacio), la continuación", en: "the extension (in space) / continuation" }, distractors: ["la prolongation", "le prolongé", "le rallongement"], note: { es: "la prolongation = en el tiempo (un plazo, la prórroga de un partido).", en: "la prolongation = in time (a deadline, extra time in a match)." }, grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms"] },
    {
      id: "pallier", type: "word", pos: "verb", target: "pallier",
      gloss: { es: "paliar, remediar", en: "to make up for / address (a lack)" },
      forms: { pp: "pallié" },
      distractors: ["palier", "pâlir", "allier"],
      note: { es: "Transitivo directo: pallier un manque, no «pallier à».", en: "Takes a direct object: pallier un manque, not 'pallier à'." },
      tags: ["nuance", "formal"],
    },
    {
      id: "pretendre", type: "word", pos: "verb", target: "prétendre",
      gloss: { es: "afirmar, sostener (algo dudoso)", en: "to claim" },
      forms: { pp: "prétendu" },
      distractors: ["prétexter", "pendre", "attendre"],
      note: { es: "«Pretender» (intentar) se dice viser o chercher à; prétendre = afirmar.", en: "'To pretend' is faire semblant; prétendre = to claim." },
      tags: ["nuance", "false-friend"],
    },
    { id: "hormis", type: "word", pos: "prep", target: "hormis", gloss: { es: "salvo, excepto (culto)", en: "except / apart from (formal)" }, distractors: ["parmi", "hormise", "or mis"], tags: ["nuance", "formal"] },
    { id: "somme-toute", type: "phrase", pos: "phrase", target: "somme toute", gloss: { es: "a fin de cuentas, en definitiva", en: "all things considered" }, distractors: ["somme tout", "en somme toute", "toute somme"], tags: ["nuance", "connectors"] },
    { id: "avoir-trait-a", type: "phrase", pos: "phrase", target: "avoir trait à", gloss: { es: "referirse a, tener que ver con", en: "to relate to / concern" }, distractors: ["avoir traite à", "avoir trait de", "faire trait à"], tags: ["nuance", "formal"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "quelles-que-soient", type: "sentence", target: "Quelles que soient vos raisons, c'est inacceptable.",
      gloss: { es: "Sean cuales sean sus razones, es inaceptable.", en: "Whatever your reasons, it's unacceptable." },
      errors: [{ text: "Quelques soient vos raisons, c'est inacceptable.", feedback: { es: "Son dos palabras y «quel» concuerda con el sustantivo: quelles que soient vos raisons.", en: "Two words, and quel agrees with the noun: quelles que soient vos raisons." }, ruleId: "fr-g-quel-que" }],
      distractors: ["Quelques", "Quel", "sont"],
      grammar: ["fr-g-quel-que"], tags: ["nuance", "subjunctive"],
    },
    {
      id: "si-intelligent-quil-soit", type: "sentence", target: "Si intelligent qu'il soit, il ne peut pas tout savoir.",
      gloss: { es: "Por muy inteligente que sea, no puede saberlo todo.", en: "However intelligent he may be, he can't know everything." },
      accept: [{ text: "Aussi intelligent qu'il soit, il ne peut pas tout savoir." }, { text: "Quelque intelligent qu'il soit, il ne peut pas tout savoir." }],
      errors: [{ text: "Si intelligent qu'il est, il ne peut pas tout savoir.", feedback: { es: "«si… que» concesivo pide subjuntivo: qu'il soit.", en: "Concessive si… que takes the subjunctive: qu'il soit." }, ruleId: "fr-g-quel-que" }],
      distractors: ["est", "Très", "sache"],
      grammar: ["fr-g-quel-que"], tags: ["nuance", "subjunctive"],
    },
    {
      id: "quelque-effort", type: "sentence", target: "Quelque effort qu'il fasse, il n'y arrive pas.",
      gloss: { es: "Por más esfuerzos que haga, no lo logra.", en: "Whatever effort he makes, he can't manage it." },
      distractors: ["Quel", "Quelle", "fait"],
      grammar: ["fr-g-quel-que"], tags: ["nuance", "subjunctive"],
    },
    {
      id: "entre-par-effraction", type: "sentence", target: "Le cambrioleur est entré par effraction.",
      gloss: { es: "El ladrón entró forzando la puerta.", en: "The burglar broke in." },
      errors: [{ text: "Le cambrioleur est entré par infraction.", feedback: { es: "Entrar forzando = par effraction; une infraction es una infracción.", en: "Breaking in = par effraction; une infraction is an offence." }, ruleId: "fr-g-paronymes" }],
      distractors: ["infraction", "fraction", "rentré"],
      grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms", "law"],
    },
    {
      id: "il-pretend-avoir-tout-vu", type: "sentence", target: "Il prétend avoir tout vu.",
      gloss: { es: "Afirma haberlo visto todo.", en: "He claims to have seen everything." },
      distractors: ["faisait", "semblant", "tous"],
      tags: ["nuance", "false-friend"],
    },
    {
      id: "dans-le-prolongement", type: "sentence", target: "Ce projet s'inscrit dans le prolongement de nos travaux.",
      gloss: { es: "Este proyecto es la continuación de nuestros trabajos.", en: "This project follows on from our work." },
      distractors: ["prolongation", "travail", "sur"],
      grammar: ["fr-g-paronymes"], tags: ["nuance", "formal"],
    },
    {
      id: "pallier-le-manque", type: "sentence", target: "Il faut pallier le manque de personnel.",
      gloss: { es: "Hay que paliar la falta de personal.", en: "The staff shortage must be addressed." },
      errors: [{ text: "Il faut pallier au manque de personnel.", feedback: { es: "Error muy extendido: «pallier» no lleva «à». Il faut pallier le manque.", en: "A very common mistake: pallier takes no à. Il faut pallier le manque." } }],
      distractors: ["au", "palier", "manquer"],
      tags: ["nuance", "formal"],
    },
    {
      id: "danger-imminent", type: "sentence", target: "Le danger est imminent.",
      gloss: { es: "El peligro es inminente.", en: "The danger is imminent." },
      errors: [{ text: "Le danger est éminent.", feedback: { es: "éminent = eminente, destacado; lo que va a ocurrir ya es imminent.", en: "éminent = distinguished; something about to happen is imminent." }, ruleId: "fr-g-paronymes" }],
      distractors: ["éminent", "immanent", "émanent"],
      grammar: ["fr-g-paronymes"], tags: ["nuance", "paronyms"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-paronymes", type: "pattern", target: "éminent / imminent · conjecture / conjoncture · effraction / infraction",
      gloss: { es: "parónimos: palabras que se parecen y no significan lo mismo", en: "paronyms: look-alike words with different meanings" },
      pattern: {
        rule: {
          es: "Los parónimos se diferencian por una o dos letras y se confunden incluso entre nativos. A nivel C2 se espera elegir el correcto: un orage imminent, un chercheur éminent; la conjoncture économique, une simple conjecture.",
          en: "Paronyms differ by a letter or two and trip up even native speakers. At C2 you're expected to pick the right one: un orage imminent, un chercheur éminent; la conjoncture économique, une simple conjecture.",
        },
        table: [["éminent (remarquable)", "imminent (très proche)"], ["conjoncture (situation)", "conjecture (hypothèse)"], ["effraction (forcer)", "infraction (délit)"], ["perpétrer (commettre)", "perpétuer (faire durer)"]],
      },
      question: {
        prompt: { es: "Completa: «Un orage est ___.» (va a estallar ya)", en: "Complete: 'Un orage est ___.' (it's about to break)" },
        options: ["imminent", "éminent", "immanent", "émanant"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-paronymes"], tags: ["grammar", "paronyms"],
    },
    {
      id: "pat-quel-que", type: "pattern", target: "quel(le)(s) que soit… · quelque + nom + que · si / aussi + adjectif + que",
      gloss: { es: "concesión culta: quel que soit, quelque… que, si… que", en: "formal concession: quel que soit, quelque… que, si… que" },
      pattern: {
        rule: {
          es: "quel que + être en subjuntivo: quel concuerda con el sujeto (quelles que soient les raisons). quelque + sustantivo + que + subjuntivo (quelque effort qu'il fasse). si / aussi + adjetivo + que + subjuntivo (si fort qu'il soit).",
          en: "quel que + être in the subjunctive: quel agrees with the subject (quelles que soient les raisons). quelque + noun + que + subjunctive (quelque effort qu'il fasse). si / aussi + adjective + que + subjunctive (si fort qu'il soit).",
        },
        table: [["quel que soit", "le prix"], ["quelle que soit", "la raison"], ["quels que soient", "les risques"], ["quelles que soient", "les difficultés"]],
      },
      question: {
        prompt: { es: "Completa: «___ soient les conséquences, je dirai la vérité.»", en: "Complete: '___ soient les conséquences, je dirai la vérité.'" },
        options: ["Quelles que", "Quelques", "Quelle que", "Quels que"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-quel-que"], tags: ["grammar", "subjunctive"],
    },
    {
      id: "tab-quel-que", type: "paradigm", target: "quel que soit…",
      gloss: { es: "la concordancia de «quel que»", en: "agreement of quel que" },
      grammar: ["fr-g-quel-que"],
      paradigm: {
        caption: { es: "Escribe «quel que» con la concordancia correcta", en: "Write quel que with the right agreement" },
        cells: [
          { label: "… soit le prix", answer: "quel que", ruleId: "fr-g-quel-que" },
          { label: "… soit la raison", answer: "quelle que", ruleId: "fr-g-quel-que" },
          { label: "… soient les risques", answer: "quels que", ruleId: "fr-g-quel-que" },
          { label: "… soient les difficultés", answer: "quelles que", ruleId: "fr-g-quel-que" },
        ],
      },
      tags: ["grammar", "spelling", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lapsus-ministre",
      type: "listening",
      target: "Dans son discours, le ministre a parlé de « conjecture économique ». Il voulait dire « conjoncture », bien sûr : la situation économique du moment. Une conjecture, c'est une hypothèse. Ce lapsus a fait sourire toute la salle.",
      gloss: {
        es: "En su discurso, el ministro habló de «conjetura económica». Quería decir «coyuntura», claro: la situación económica del momento. Una conjetura es una hipótesis. Ese lapsus hizo sonreír a toda la sala.",
        en: "In his speech, the minister talked about the 'economic conjecture'. He meant 'conjoncture', of course: the current economic situation. A conjecture is a hypothesis. The slip made the whole room smile.",
      },
      question: {
        prompt: { es: "¿Qué error cometió el ministro?", en: "What mistake did the minister make?" },
        options: [
          { es: "Confundió dos palabras parecidas.", en: "He mixed up two similar words." },
          { es: "Dio una cifra falsa.", en: "He gave a false figure." },
          { es: "Habló demasiado tiempo.", en: "He spoke for too long." },
          { es: "Olvidó su discurso.", en: "He forgot his speech." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-paronymes"], tags: ["listening", "paronyms", "politics"],
    },
    {
      id: "dlg-relecture", type: "dialogue", target: "Tu as écrit « pallier au problème ».",
      gloss: { es: "Escribiste «pallier au problème».", en: "You wrote 'pallier au problème'." },
      turns: [
        { who: "A", target: "Tu peux relire mon rapport avant que je l'envoie ?", gloss: { es: "¿Puedes releer mi informe antes de que lo envíe?", en: "Can you reread my report before I send it?" } },
        { who: "B", target: "Bien sûr. Page deux, tu as écrit « pallier au problème ». On dit « pallier le problème ».", gloss: { es: "Claro. En la página dos escribiste «pallier au problème». Se dice «pallier le problème».", en: "Of course. On page two you wrote 'pallier au problème'. It's 'pallier le problème'." } },
        { who: "A", target: "Ah bon ? Je l'entends partout pourtant.", gloss: { es: "¿En serio? Pues lo oigo por todas partes.", en: "Really? I hear it everywhere, though." } },
        { who: "B", target: "Oui, mais somme toute, dans un rapport officiel, mieux vaut le mot juste.", gloss: { es: "Sí, pero a fin de cuentas, en un informe oficial, mejor la palabra justa.", en: "Yes, but all things considered, in an official report it's better to use the right word." } },
      ],
      question: {
        prompt: { es: "¿Qué corrige B?", en: "What does B correct?" },
        options: [
          { es: "Una construcción con preposición incorrecta.", en: "A construction with the wrong preposition." },
          { es: "Una cifra en la página dos.", en: "A figure on page two." },
          { es: "El título del informe.", en: "The report's title." },
          { es: "Nada, el informe está perfecto.", en: "Nothing, the report is perfect." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "nuance", "work"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pretendre", type: "bridge", onlyFor: "en", target: "prétendre",
      gloss: { es: "afirmar (no «fingir»)", en: "to claim (not 'to pretend')" },
      question: {
        prompt: { es: "«Elle prétend qu'elle était malade» significa…", en: "'Elle prétend qu'elle était malade' means…" },
        options: [
          { es: "Afirma que estaba enferma.", en: "She claims she was ill." },
          { es: "Finge que estaba enferma.", en: "She's pretending she was ill." },
          { es: "Espera estar enferma.", en: "She hopes she'll be ill." },
        ],
        answer: 0,
      },
      note: { en: "To pretend = faire semblant (de); prétendre = to claim, usually with some doubt." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "nuance"],
    },
  ]),
};
