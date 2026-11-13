import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u15",
  lang: "it",
  index: 15,
  cefr: "B1",
  title: { target: "Secondo me", es: "En mi opinión", en: "In my opinion" },
  canDo: [
    { es: "Puedo dar mi opinión, estar de acuerdo o no y justificarlo brevemente.", en: "I can give my opinion, agree or disagree and say briefly why." },
    { es: "Puedo expresar esperanza, duda y necesidad.", en: "I can express hope, doubt and necessity." },
    { es: "Sé usar el congiuntivo presente después de penso che, spero che, è importante che.", en: "I can use the present subjunctive after penso che, spero che, è importante che." },
  ],
  icon: "💬",
  items: build("it", 15, "B1", [
    // ── Opinion words ────────────────────────────────────────
    {
      id: "secondo-me", type: "phrase", pos: "phrase", target: "secondo me",
      gloss: { es: "en mi opinión, para mí", en: "in my opinion" },
      accept: [{ text: "per me" }],
      distractors: ["seconda me", "secondo mi", "dopo di me"],
      tags: ["opinion", "chunk"],
    },
    {
      id: "opinione", type: "word", pos: "noun", target: "l'opinione", gender: "f", plural: "le opinioni",
      gloss: { es: "la opinión", en: "the opinion" },
      distractors: ["l'opzione", "il opinione", "l'occasione"],
      tags: ["opinion"],
    },
    {
      id: "sono-d-accordo", type: "phrase", pos: "phrase", target: "Sono d'accordo.",
      gloss: { es: "Estoy de acuerdo.", en: "I agree." },
      distractors: ["Ho d'accordo.", "Sono accordato.", "Faccio d'accordo."],
      note: { es: "Con «essere», no con «avere». No estoy de acuerdo = Non sono d'accordo.", en: "With essere, not avere. I disagree = Non sono d'accordo." },
      tags: ["opinion", "chunk"],
    },
    {
      id: "pensare", type: "word", pos: "verb", target: "pensare",
      gloss: { es: "pensar, creer", en: "to think" },
      distractors: ["pesare", "passare", "pentirsi"],
      note: { es: "pensare a = pensar en (penso a te); pensare di = opinar de (che ne pensi?).", en: "pensare a = think about (penso a te); pensare di = think of, opinion (che ne pensi?)." },
      tags: ["opinion"],
    },
    {
      id: "credere", type: "word", pos: "verb", target: "credere",
      gloss: { es: "creer", en: "to believe" },
      distractors: ["crescere", "cedere", "credito"],
      tags: ["opinion"],
    },
    {
      id: "sperare", type: "word", pos: "verb", target: "sperare",
      gloss: { es: "esperar (tener esperanza)", en: "to hope" },
      distractors: ["aspettare", "sparare", "separare"],
      note: { es: "Esperar a alguien = aspettare; esperar que = sperare che.", en: "To wait = aspettare; to hope = sperare." },
      tags: ["opinion"],
    },
    {
      id: "sembrare", type: "word", pos: "verb", target: "sembrare",
      gloss: { es: "parecer", en: "to seem" },
      forms: { pp: "sembrato", aux: "essere" },
      distractors: ["somigliare", "seminare", "scambiare"],
      note: { es: "Como «parecer»: mi sembra che… (me parece que…).", en: "Mi sembra che… = it seems to me that…" },
      tags: ["opinion"],
    },
    {
      id: "verita", type: "word", pos: "noun", target: "la verità", gender: "f", plural: "le verità",
      gloss: { es: "la verdad", en: "the truth" },
      distractors: ["la varietà", "la virtù", "la vetrina"],
      tags: ["opinion", "accent"],
    },
    {
      id: "dubbio", type: "word", pos: "noun", target: "il dubbio", gender: "m", plural: "i dubbi",
      gloss: { es: "la duda", en: "the doubt" },
      distractors: ["il doppio", "la dubbia", "il dubbioso"],
      note: { es: "Masculino en italiano: il dubbio. Sin duda = senza dubbio.", en: "Without a doubt = senza dubbio." },
      tags: ["opinion"],
    },
    {
      id: "forse", type: "word", pos: "adv", target: "forse",
      gloss: { es: "quizás, tal vez", en: "maybe / perhaps" },
      distractors: ["forte", "fosse", "forza"],
      tags: ["opinion"],
    },
    {
      id: "davvero", type: "word", pos: "adv", target: "davvero",
      gloss: { es: "de verdad, realmente", en: "really" },
      distractors: ["davanti", "dovere", "da vero"],
      tags: ["opinion"],
    },
    {
      id: "comunque", type: "word", pos: "adv", target: "comunque",
      gloss: { es: "de todos modos", en: "anyway / however" },
      distractors: ["qualunque", "comodo", "come"],
      tags: ["connectors"],
    },
    {
      id: "invece", type: "word", pos: "adv", target: "invece",
      gloss: { es: "en cambio", en: "instead / on the other hand" },
      distractors: ["invano", "invidia", "vece"],
      tags: ["connectors"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "penso-che-sia", type: "sentence", target: "Penso che sia una buona idea.",
      gloss: { es: "Creo que es una buena idea.", en: "I think it's a good idea." },
      accept: [
        { text: "Credo che sia una buona idea." },
        { text: "Penso che è una buona idea.", verdict: "almost", feedback: { es: "Se oye al hablar, pero lo estándar es el congiuntivo: penso che sia.", en: "You'll hear it in speech, but standard Italian uses the subjunctive: penso che sia." } },
      ],
      distractors: ["è", "essere", "fosse"],
      tags: ["opinion", "congiuntivo"],
    },
    {
      id: "spero-che-tu-stia", type: "sentence", register: "informal", target: "Spero che tu stia bene.",
      gloss: { es: "Espero que estés bien.", en: "I hope you're well." },
      errors: [{ text: "Spero che tu stai bene.", feedback: { es: "Como en español (estés): spero che tu stia.", en: "sperare che takes the subjunctive: spero che tu stia." } }],
      distractors: ["stai", "sta", "state"],
      tags: ["opinion", "congiuntivo"],
    },
    {
      id: "importante-che", type: "sentence", target: "È importante che tutti partecipino.",
      gloss: { es: "Es importante que todos participen.", en: "It's important that everyone takes part." },
      distractors: ["partecipano", "partecipare", "tutto"],
      tags: ["opinion", "congiuntivo"],
    },
    {
      id: "non-credo-che-venga", type: "sentence", target: "Non credo che venga.",
      gloss: { es: "No creo que venga.", en: "I don't think he or she is coming." },
      accept: [{ text: "Non penso che venga." }],
      distractors: ["viene", "vengo", "credi"],
      note: { es: "Igual que en español: no creo que + subjuntivo.", en: "Doubt takes the subjunctive: non credo che venga." },
      tags: ["opinion", "congiuntivo"],
    },
    {
      id: "secondo-me-hai-ragione", type: "sentence", register: "informal", target: "Secondo me hai ragione.",
      gloss: { es: "En mi opinión, tienes razón.", en: "In my opinion you're right." },
      accept: [{ text: "Per me hai ragione." }],
      errors: [{ text: "Secondo me sei ragione.", feedback: { es: "«tener razón» = avere ragione.", en: "'To be right' = avere ragione." } }],
      distractors: ["sei", "ragioni", "mia"],
      tags: ["opinion"],
    },
    {
      id: "mi-sembra-caro", type: "sentence", target: "Mi sembra che sia troppo caro.",
      gloss: { es: "Me parece que es demasiado caro.", en: "It seems too expensive to me." },
      accept: [{ text: "Mi sembra troppo caro." }],
      distractors: ["è", "molto", "sembro"],
      tags: ["opinion", "congiuntivo"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-congiuntivo", type: "pattern", target: "che io parli · che io prenda · che io sia · che io abbia",
      gloss: { es: "el congiuntivo presente", en: "the present subjunctive" },
      pattern: {
        rule: {
          es: "-are → -i (parli), -ere/-ire → -a (prenda, senta) en singular; noi -iamo, loro -ino / -ano. Irregulares: sia, abbia, faccia, vada, venga, stia.",
          en: "-are → -i (parli), -ere/-ire → -a (prenda, senta) in the singular; noi -iamo, loro -ino / -ano. Irregular: sia, abbia, faccia, vada, venga, stia.",
        },
        table: [["", "parlare", "prendere", "essere", "avere"], ["io / tu / lui", "parli", "prenda", "sia", "abbia"], ["noi", "parliamo", "prendiamo", "siamo", "abbiamo"], ["voi", "parliate", "prendiate", "siate", "abbiate"], ["loro", "parlino", "prendano", "siano", "abbiano"]],
      },
      question: {
        prompt: { es: "Completa (italiano estándar): «Credo che Marco ___ ragione.»", en: "Complete (standard Italian): 'Credo che Marco ___ ragione.'" },
        options: ["abbia", "ha", "avesse", "avrebbe"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "congiuntivo"],
    },
    {
      id: "pat-quando-congiuntivo", type: "pattern", target: "penso che sia · so che è",
      gloss: { es: "¿congiuntivo o indicativo?", en: "subjunctive or indicative?" },
      pattern: {
        rule: {
          es: "Opinión, esperanza, duda, deseo y «è importante / bisogna che» → congiuntivo. Certeza (so che, è vero che, sono sicuro che) → indicativo. Ojo: en español «creo que es» va en indicativo.",
          en: "Opinion, hope, doubt, wishes and 'è importante / bisogna che' → subjunctive. Certainty (so che, è vero che, sono sicuro che) → indicative.",
        },
        table: [["penso / credo / spero che", "sia"], ["è importante / bisogna che", "sia"], ["so / è vero che", "è"]],
      },
      question: {
        prompt: { es: "Completa: «So che Luca ___ in ufficio.»", en: "Complete: 'So che Luca ___ in ufficio.'" },
        options: ["è", "sia", "fosse", "siano"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "congiuntivo"],
    },
    {
      id: "pat-di-infinito", type: "pattern", target: "Penso di avere ragione.",
      gloss: { es: "mismo sujeto: di + infinitivo", en: "same subject: di + infinitive" },
      pattern: {
        rule: {
          es: "Si el sujeto es el mismo, se usa di + infinitivo: Penso di avere ragione (no «penso che io abbia»). Con sujetos distintos: Penso che tu abbia ragione.",
          en: "With the same subject, use di + infinitive: Penso di avere ragione (not 'penso che io abbia'). Different subjects: Penso che tu abbia ragione.",
        },
        table: [["io → io", "Spero di venire."], ["io → tu", "Spero che tu venga."]],
      },
      question: {
        prompt: { es: "«Creo que tengo razón» es…", en: "'I think I'm right' is…" },
        options: ["Penso di avere ragione.", "Penso che ho ragione.", "Penso a avere ragione.", "Penso avere ragione."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "congiuntivo"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-centro", type: "listening",
      target: "Secondo me il centro dovrebbe essere chiuso alle macchine. Penso che la gente debba usare di più la bicicletta e i mezzi pubblici.",
      gloss: {
        es: "En mi opinión, el centro debería estar cerrado a los autos. Creo que la gente debe usar más la bicicleta y el transporte público.",
        en: "In my opinion the centre should be closed to cars. I think people should use bikes and public transport more.",
      },
      question: {
        prompt: { es: "¿Qué opina la persona?", en: "What is the speaker's opinion?" },
        options: [
          { es: "Que el centro debería cerrarse a los autos.", en: "The centre should be closed to cars." },
          { es: "Que hacen falta más estacionamientos.", en: "There should be more car parks." },
          { es: "Que el transporte público es caro.", en: "Public transport is too expensive." },
          { es: "Que la bicicleta es peligrosa.", en: "Cycling is dangerous." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "opinion"],
    },
    {
      id: "dlg-ristorante", type: "dialogue", register: "informal", target: "Che ne pensi?",
      gloss: { es: "¿Qué opinas (de eso)?", en: "What do you think (of it)?" },
      turns: [
        { who: "A", target: "Che ne pensi del nuovo ristorante?", gloss: { es: "¿Qué opinas del restaurante nuevo?", en: "What do you think of the new restaurant?" } },
        { who: "B", target: "Non mi è piaciuto molto. Credo che sia troppo caro.", gloss: { es: "No me gustó mucho. Creo que es demasiado caro.", en: "I didn't like it much. I think it's too expensive." } },
        { who: "A", target: "Davvero? A me invece è sembrato ottimo.", gloss: { es: "¿De verdad? A mí, en cambio, me pareció excelente.", en: "Really? I thought it was excellent, actually." } },
      ],
      question: {
        prompt: { es: "¿Qué opina B del restaurante?", en: "What does B think of the restaurant?" },
        options: [
          { es: "Que es demasiado caro.", en: "It's too expensive." },
          { es: "Que es excelente.", en: "It's excellent." },
          { es: "Que la comida es mala.", en: "The food is bad." },
          { es: "Todavía no fue.", en: "B hasn't been yet." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "opinion"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-credo-che", type: "bridge", onlyFor: "es", target: "credo che sia",
      gloss: { es: "creo que es", en: "I think it is" },
      question: {
        prompt: { es: "«Creo que es verdad» se dice (italiano estándar)…", en: "'I think it's true' is (standard Italian)…" },
        options: ["Credo che sia vero.", "Credo che è vero.", "Credo che fosse vero.", "Credo di essere vero."],
        answer: 0,
      },
      note: { es: "Al revés que en español: «creo que es» (indicativo) → «credo che sia» (congiuntivo)." },
      exercises: ["guess", "question"], tags: ["bridge", "transfer-tip", "congiuntivo"],
    },
  ]),
};
