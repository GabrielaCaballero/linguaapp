import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u21",
  lang: "it",
  index: 21,
  cefr: "B2",
  title: { target: "Se l'avessi saputo…", es: "Si lo hubiera sabido…", en: "If I'd known…" },
  canDo: [
    { es: "Puedo hablar de lo que habría pasado si las cosas hubieran sido distintas.", en: "I can talk about what would have happened if things had been different." },
    { es: "Puedo expresar arrepentimiento, reproches y alivio.", en: "I can express regret, reproach and relief." },
    { es: "Sé usar el condicional compuesto y el congiuntivo trapassato (se avessi saputo, avrei…).", en: "I can use the past conditional and pluperfect subjunctive (se avessi saputo, avrei…)." },
  ],
  icon: "🔁",
  items: build("it", 21, "B2", [
    // ── Words ────────────────────────────────────────────────
    {
      id: "rimpianto", type: "word", pos: "noun", target: "il rimpianto", gender: "m", plural: "i rimpianti",
      gloss: { es: "el arrepentimiento (por lo que no se hizo)", en: "the regret" },
      distractors: ["il rimborso", "il rimprovero", "il rimpiazzo"],
      note: { es: "Non ho rimpianti = no me arrepiento de nada.", en: "Non ho rimpianti = I have no regrets." },
      tags: ["regret"],
    },
    {
      id: "pentirsi", type: "word", pos: "verb", target: "pentirsi",
      gloss: { es: "arrepentirse", en: "to regret / repent" },
      forms: { pp: "pentito", aux: "essere" },
      distractors: ["pettinarsi", "sentirsi", "pesarsi"],
      note: { es: "pentirsi di + algo: mi sono pentito di non averlo fatto.", en: "pentirsi di + something: mi sono pentito di non averlo fatto." },
      tags: ["regret", "reflexive"],
    },
    {
      id: "occasione", type: "word", pos: "noun", target: "l'occasione", gender: "f", plural: "le occasioni",
      gloss: { es: "la oportunidad / la ganga", en: "the opportunity / a bargain" },
      distractors: ["l'occhiata", "l'evasione", "l'oceano"],
      note: { es: "perdere un'occasione = perder una oportunidad.", en: "perdere un'occasione = to miss a chance." },
      tags: ["regret"],
    },
    {
      id: "per-fortuna", type: "phrase", pos: "phrase", target: "per fortuna",
      gloss: { es: "por suerte", en: "luckily" },
      accept: [{ text: "fortunatamente" }],
      distractors: ["per fortunato", "con fortuna", "a fortuna"],
      tags: ["connectors"],
    },
    {
      id: "purtroppo", type: "word", pos: "adv", target: "purtroppo",
      gloss: { es: "lamentablemente, por desgracia", en: "unfortunately" },
      distractors: ["piuttosto", "purché", "pertanto"],
      tags: ["connectors"],
    },
    {
      id: "altrimenti", type: "word", pos: "adv", target: "altrimenti",
      gloss: { es: "si no, de lo contrario", en: "otherwise" },
      distractors: ["altrettanto", "altrove", "alternativa"],
      tags: ["connectors"],
    },
    {
      id: "avvisare", type: "word", pos: "verb", target: "avvisare",
      gloss: { es: "avisar", en: "to let (someone) know / warn" },
      distractors: ["avvistare", "avviare", "visitare"],
      tags: ["regret"],
    },
    {
      id: "rendersi-conto", type: "phrase", pos: "phrase", target: "rendersi conto",
      gloss: { es: "darse cuenta (comprender)", en: "to realise (understand)" },
      distractors: ["rendersi contro", "rendersi conti", "prendersi conto"],
      note: { es: "Mi sono reso conto che… = me di cuenta de que…", en: "Mi sono reso conto che… = I realised that…" },
      tags: ["regret"],
    },
    {
      id: "sbagliare", type: "word", pos: "verb", target: "sbagliare",
      gloss: { es: "equivocarse", en: "to make a mistake / get wrong" },
      distractors: ["sbadigliare", "sbarcare", "svegliare"],
      note: { es: "Ho sbagliato strada = me equivoqué de camino.", en: "Ho sbagliato strada = I took the wrong road." },
      tags: ["regret"],
    },
    {
      id: "sbaglio", type: "word", pos: "noun", target: "lo sbaglio", gender: "m", plural: "gli sbagli",
      gloss: { es: "el error, la equivocación", en: "the mistake" },
      distractors: ["il sbaglio", "lo scoglio", "lo spiraglio"],
      note: { es: "per sbaglio = por error.", en: "per sbaglio = by mistake." },
      tags: ["regret"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "se-lavessi-saputo", type: "sentence", target: "Se l'avessi saputo, ti avrei aiutato.",
      gloss: { es: "Si lo hubiera sabido, te habría ayudado.", en: "If I'd known, I would have helped you." },
      accept: [{ text: "Se l'avessi saputo, ti avrei aiutata." }],
      errors: [{ text: "Se l'avrei saputo, ti avrei aiutato.", feedback: { es: "Tras «se» nunca el condicional: se l'avessi saputo.", en: "Never the conditional after 'se': se l'avessi saputo." } }],
      distractors: ["sapessi", "aiutassi", "avevo"],
      tags: ["hypotheses", "past-unreal"],
    },
    {
      id: "se-fossi-partito", type: "sentence", target: "Se fossi partito prima, non avrei perso il treno.",
      gloss: { es: "Si hubiera salido antes, no habría perdido el tren.", en: "If I'd left earlier, I wouldn't have missed the train." },
      accept: [{ text: "Se fossi partita prima, non avrei perso il treno." }],
      errors: [{ text: "Se avessi partito prima, non avrei perso il treno.", feedback: { es: "partire va con essere: se fossi partito.", en: "partire takes essere: se fossi partito." } }],
      distractors: ["sarei", "avessi", "perdevo"],
      tags: ["hypotheses", "past-unreal"],
    },
    {
      id: "avrei-dovuto", type: "sentence", target: "Avrei dovuto studiare di più.",
      gloss: { es: "Debería haber estudiado más.", en: "I should have studied more." },
      errors: [{ text: "Dovrei avere studiato di più.", feedback: { es: "El reproche al pasado: avrei dovuto + infinitivo.", en: "Past regret: avrei dovuto + infinitive." } }],
      distractors: ["Dovrei", "studiato", "molto"],
      tags: ["regret", "conditional"],
    },
    {
      id: "sarebbe-stato-meglio", type: "sentence", target: "Sarebbe stato meglio aspettare.",
      gloss: { es: "Habría sido mejor esperar.", en: "It would have been better to wait." },
      distractors: ["Avrebbe", "migliore", "aspettato"],
      tags: ["regret", "conditional"],
    },
    {
      id: "pensavo-che-fosse", type: "sentence", target: "Pensavo che fosse già arrivato.",
      gloss: { es: "Creía que ya había llegado.", en: "I thought he had already arrived." },
      accept: [{ text: "Credevo che fosse già arrivato." }, { text: "Pensavo che fosse già arrivata." }],
      distractors: ["sia", "era", "avesse"],
      tags: ["congiuntivo", "concordanza"],
    },
    {
      id: "nessuno-se-ne-e-accorto", type: "sentence", target: "Per fortuna nessuno se n'è accorto.",
      gloss: { es: "Por suerte nadie se dio cuenta.", en: "Luckily nobody noticed." },
      distractors: ["ne", "accorgeva", "ha"],
      note: { es: "se ne = de eso (accorgersi di qualcosa → accorgersene).", en: "se ne = of it (accorgersi di qualcosa → accorgersene)." },
      tags: ["regret", "pronouns"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-ipotetico-irreale", type: "pattern", target: "Se avessi saputo, sarei venuto.",
      gloss: { es: "condiciones irreales en el pasado", en: "unreal conditions in the past" },
      pattern: {
        rule: {
          es: "se + congiuntivo trapassato → condicional compuesto, como «si hubiera… habría…». Mixto (resultado presente): se avessi studiato, ora avrei un lavoro migliore.",
          en: "se + pluperfect subjunctive → past conditional: 'if I had…, I would have…'. Mixed (present result): se avessi studiato, ora avrei un lavoro migliore.",
        },
        table: [["passato", "Se fossi venuto, ti saresti divertito."], ["misto", "Se avessi studiato, ora avrei un lavoro migliore."]],
      },
      question: {
        prompt: { es: "Completa (noi, arrivare): «Se ___ in tempo, avremmo preso il treno.»", en: "Complete (noi, arrivare): 'Se ___ in tempo, avremmo preso il treno.'" },
        options: ["fossimo arrivati", "saremmo arrivati", "eravamo arrivati", "siamo arrivati"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past-unreal"],
    },
    {
      id: "pat-condizionale-passato", type: "pattern", target: "avrei fatto · sarei andato · avrei dovuto",
      gloss: { es: "el condicional compuesto", en: "the past conditional" },
      pattern: {
        rule: {
          es: "avrei / sarei + participio: lo que habría pasado (avrei comprato), reproches (avresti dovuto dirmelo) y el futuro visto desde el pasado (ha detto che sarebbe venuto).",
          en: "avrei / sarei + participle: what would have happened (avrei comprato), reproaches (avresti dovuto dirmelo) and the future seen from the past (ha detto che sarebbe venuto).",
        },
        table: [["avere", "avrei / avresti / avrebbe fatto"], ["essere", "sarei / saresti / sarebbe andato/a"], ["piacere", "mi sarebbe piaciuto"]],
      },
      question: {
        prompt: { es: "«Me habría gustado ir» es…", en: "'I would have liked to go' is…" },
        options: ["Mi sarebbe piaciuto andare.", "Mi avrebbe piaciuto andare.", "Mi piacerebbe andato.", "Mi sarei piaciuto andare."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "conditional"],
    },
    {
      id: "pat-congiuntivo-trapassato", type: "pattern", target: "che tu avessi capito · che fosse partito",
      gloss: { es: "el congiuntivo trapassato", en: "the pluperfect subjunctive" },
      pattern: {
        rule: {
          es: "avessi / fossi + participio, para algo anterior a un verbo principal en pasado (speravo che avessi capito) y en el «se» irreal del pasado.",
          en: "avessi / fossi + participle, for something earlier than a past main verb (speravo che avessi capito) and in unreal past 'se' clauses.",
        },
        table: [["avere", "che io / tu avessi capito"], ["essere", "che io / tu fossi partito/a"], ["lui / lei", "che avesse · che fosse"]],
      },
      question: {
        prompt: { es: "Completa: «Speravo che tu ___ capito.»", en: "Complete: 'Speravo che tu ___ capito.'" },
        options: ["avessi", "abbia", "hai", "avresti"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "congiuntivo"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-milano", type: "listening",
      target: "Se avessi accettato quel lavoro a Milano, oggi vivrei lontano dalla mia famiglia. Per fortuna ho detto di no.",
      gloss: {
        es: "Si hubiera aceptado aquel trabajo en Milán, hoy viviría lejos de mi familia. Por suerte dije que no.",
        en: "If I'd accepted that job in Milan, I'd be living far from my family today. Luckily I said no.",
      },
      question: {
        prompt: { es: "¿Qué hizo la persona con la oferta de Milán?", en: "What did the speaker do about the Milan job?" },
        options: [
          { es: "La rechazó.", en: "Turned it down." },
          { es: "La aceptó.", en: "Accepted it." },
          { es: "Todavía no decidió.", en: "Hasn't decided yet." },
          { es: "Se mudó con su familia.", en: "Moved there with the family." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "past-unreal"],
    },
    {
      id: "dlg-sciopero", type: "dialogue", register: "informal", target: "La prossima volta ti avviso.",
      gloss: { es: "La próxima vez te aviso.", en: "Next time I'll let you know." },
      turns: [
        { who: "A", target: "Perché non mi hai avvisato che c'era sciopero?", gloss: { es: "¿Por qué no me avisaste que había huelga?", en: "Why didn't you tell me there was a strike?" } },
        { who: "B", target: "Scusa, pensavo che lo sapessi.", gloss: { es: "Perdón, pensé que lo sabías.", en: "Sorry, I thought you knew." } },
        { who: "A", target: "Se me l'avessi detto, avrei preso la macchina.", gloss: { es: "Si me lo hubieras dicho, habría ido en auto.", en: "If you'd told me, I'd have taken the car." } },
        { who: "B", target: "Hai ragione. La prossima volta ti avviso.", gloss: { es: "Tienes razón. La próxima vez te aviso.", en: "You're right. Next time I'll let you know." } },
      ],
      question: {
        prompt: { es: "¿Qué habría hecho A si lo hubiera sabido?", en: "What would A have done if they'd known?" },
        options: [
          { es: "Habría ido en auto.", en: "Taken the car." },
          { es: "Se habría quedado en casa.", en: "Stayed at home." },
          { es: "Habría tomado un taxi.", en: "Taken a taxi." },
          { es: "Habría salido más temprano.", en: "Left earlier." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "past-unreal"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-occasione", type: "bridge", onlyFor: "es", target: "un'occasione",
      gloss: { es: "una ganga / una oportunidad", en: "a bargain / a chance" },
      question: {
        prompt: { es: "En una tienda: «Questa giacca è un'occasione!» significa…", en: "In a shop: 'Questa giacca è un'occasione!' means…" },
        options: [
          { es: "¡Esta chaqueta es una ganga!", en: "This jacket is a bargain!" },
          { es: "Esta chaqueta es para ocasiones especiales.", en: "This jacket is for special occasions." },
          { es: "Esta chaqueta es la última que queda.", en: "This is the last jacket left." },
          { es: "Esta chaqueta es de otra temporada.", en: "This jacket is from another season." },
        ],
        answer: 0,
      },
      note: { es: "Además de «oportunidad», un'occasione es una ganga; d'occasione = de segunda mano." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
