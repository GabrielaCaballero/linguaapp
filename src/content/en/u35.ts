import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u35",
  lang: "en",
  index: 35,
  cefr: "C2",
  title: { target: "Legal and business English", es: "Inglés jurídico y empresarial", en: "Legal and business English" },
  canDo: [
    { es: "Entiendo contratos, términos y condiciones y avisos legales en inglés.", en: "I can understand contracts, terms and conditions and legal notices in English." },
    { es: "Reconozco el registro jurídico: shall, hereby, notwithstanding, null and void.", en: "I can recognize legal register: shall, hereby, notwithstanding, null and void." },
    { es: "Sé poner condiciones formales: provided that, in the event that, insofar as.", en: "I can set formal conditions: provided that, in the event that, insofar as." },
  ],
  icon: "⚖️",
  items: build("en", 35, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "liability", type: "word", pos: "noun", target: "liability", plural: "liabilities",
      gloss: { es: "responsabilidad legal, obligación (de pagar)", en: "liability" },
      distractors: ["reliability", "liableness", "ability"],
      note: { es: "El adjetivo es «liable»: «The company is not liable for…» = la empresa no se hace responsable de…" },
      tags: ["legal", "business"],
    },
    {
      id: "breach", type: "word", pos: "noun", target: "breach", plural: "breaches",
      gloss: { es: "incumplimiento, violación (de un contrato o de seguridad)", en: "breach" },
      distractors: ["breech", "bridge", "beach"],
      note: { es: "Se usa mucho en «breach of contract» y «data breach» (filtración de datos)." },
      tags: ["legal"],
    },
    {
      id: "clause", type: "word", pos: "noun", target: "clause", plural: "clauses",
      gloss: { es: "cláusula (de un contrato)", en: "clause" },
      distractors: ["claws", "cause", "closure"],
      tags: ["legal"],
    },
    {
      id: "stakeholder", type: "word", pos: "noun", target: "stakeholder", plural: "stakeholders",
      gloss: { es: "parte interesada (persona o grupo afectado por un proyecto)", en: "stakeholder" },
      distractors: ["shareholder", "steakholder", "placeholder"],
      note: { es: "«shareholder» o «stockholder» es el accionista; «stakeholder» incluye también a empleados, clientes y la comunidad." },
      tags: ["business"],
    },
    {
      id: "notwithstanding", type: "word", pos: "prep", target: "notwithstanding",
      gloss: { es: "no obstante, a pesar de (registro jurídico)", en: "notwithstanding" },
      distractors: ["notwithstand", "withstanding", "nevertheless of"],
      grammar: ["en-g-legal-register"],
      tags: ["legal", "formal", "linkers"],
    },
    {
      id: "hereby", type: "word", pos: "adv", target: "hereby",
      gloss: { es: "por la presente, por medio de este documento", en: "hereby" },
      distractors: ["thereby", "hereafter", "herewith by"],
      grammar: ["en-g-legal-register"],
      tags: ["legal", "formal"],
    },
    {
      id: "comply-with", type: "word", pos: "verb", target: "comply with",
      gloss: { es: "cumplir con (una norma, una ley)", en: "to comply with" },
      distractors: ["comply to", "complain with", "compliment with"],
      errors: [{ text: "comply to", feedback: { es: "La preposición de «comply» es «with»: comply with the rules." } }],
      tags: ["legal", "business"],
    },
    {
      id: "null-and-void", type: "phrase", pos: "phrase", target: "null and void",
      gloss: { es: "nulo/a y sin efecto", en: "null and void" },
      distractors: ["null and avoid", "nil and void", "void and null"],
      errors: [{ text: "null and avoid", feedback: { es: "Es «void» (vacío, nulo), no «avoid» (evitar)." }, ruleId: "en-g-legal-register" }],
      grammar: ["en-g-legal-register"],
      tags: ["legal", "chunk"],
    },
    {
      id: "terms-and-conditions", type: "phrase", pos: "phrase", target: "terms and conditions",
      gloss: { es: "términos y condiciones", en: "terms and conditions" },
      distractors: ["terms and conditionals", "conditions and terms", "terms of conditions"],
      tags: ["legal", "business", "chunk"],
    },
    {
      id: "due-diligence", type: "phrase", pos: "phrase", target: "due diligence",
      gloss: { es: "diligencia debida, revisión previa (antes de un acuerdo)", en: "due diligence" },
      distractors: ["due diligent", "do diligence", "dues diligence"],
      tags: ["business", "legal"],
    },
    {
      id: "in-the-event-that", type: "phrase", pos: "phrase", target: "in the event that",
      gloss: { es: "en caso de que", en: "in the event that" },
      distractors: ["in the event of that", "at the event that", "on the event that"],
      grammar: ["en-g-formal-conditions"],
      tags: ["legal", "conditions"],
    },
    {
      id: "insofar-as", type: "phrase", pos: "phrase", target: "insofar as",
      gloss: { es: "en la medida en que", en: "insofar as" },
      accept: [{ text: "in so far as" }],
      distractors: ["insofar that", "as far that", "in so long as"],
      note: { es: "En inglés británico también se escribe separado: «in so far as»." },
      grammar: ["en-g-formal-conditions"],
      tags: ["legal", "formal", "conditions"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "tenant-shall-pay", type: "sentence", target: "The tenant shall pay the rent on the first day of each month.",
      gloss: { es: "El inquilino deberá pagar el alquiler (la renta) el primer día de cada mes.", en: "The tenant shall pay the rent on the first day of each month." },
      distractors: ["should", "pays", "firstly"],
      grammar: ["en-g-legal-register"],
      annot: { shall: { es: "obligación en un contrato (= deberá)", en: "obligation in a contract (= must)" } },
      tags: ["legal", "contracts"],
    },
    {
      id: "governed-by-the-laws", type: "sentence", target: "This agreement shall be governed by the laws of the State of New York.",
      gloss: { es: "Este contrato se regirá por las leyes del estado de Nueva York.", en: "This agreement shall be governed by the laws of the State of New York." },
      distractors: ["govern", "for", "rules"],
      grammar: ["en-g-legal-register"],
      tags: ["legal", "contracts"],
    },
    {
      id: "render-null-and-void", type: "sentence", target: "Any breach of this clause will render the contract null and void.",
      gloss: { es: "Cualquier incumplimiento de esta cláusula dejará el contrato nulo y sin efecto.", en: "Any breach of this clause will render the contract null and void." },
      accept: [{ text: "Any breach of this clause shall render the contract null and void." }],
      distractors: ["breech", "made", "avoid"],
      grammar: ["en-g-legal-register"],
      annot: { render: { es: "volver, dejar (en un estado)", en: "make, cause to become" } },
      tags: ["legal", "contracts"],
    },
    {
      id: "notwithstanding-the-above", type: "sentence", target: "Notwithstanding the above, either party may terminate this agreement with thirty days' notice.",
      gloss: { es: "No obstante lo anterior, cualquiera de las partes podrá rescindir este contrato con un preaviso de treinta días.", en: "Notwithstanding the above, either party may terminate this agreement with thirty days' notice." },
      distractors: ["Nevertheless", "both", "warning"],
      grammar: ["en-g-legal-register"],
      annot: { may: { es: "permiso en un contrato (= podrá)", en: "permission in a contract (= is allowed to)" } },
      tags: ["legal", "contracts"],
    },
    {
      id: "in-the-event-goods-damaged", type: "sentence", target: "In the event that the goods are damaged, the seller shall replace them free of charge.",
      gloss: { es: "En caso de que los productos estén dañados, el vendedor deberá reemplazarlos sin costo alguno.", en: "In the event that the goods are damaged, the seller shall replace them free of charge." },
      accept: [{ text: "In the event that the goods are damaged, the seller will replace them free of charge." }, { text: "Should the goods be damaged, the seller shall replace them free of charge." }],
      errors: [{ text: "In the event that the goods will be damaged, the seller shall replace them free of charge.", feedback: { es: "Tras «in the event that» va presente, aunque se refiera al futuro." }, ruleId: "en-g-formal-conditions" }],
      distractors: ["of", "will", "costless"],
      grammar: ["en-g-formal-conditions"],
      tags: ["legal", "conditions", "business"],
    },
    {
      id: "hereby-confirm", type: "sentence", target: "We hereby confirm that all payments have been received.",
      gloss: { es: "Por la presente confirmamos que se han recibido todos los pagos.", en: "We hereby confirm that all payments have been received." },
      distractors: ["thereby", "receipt", "has"],
      grammar: ["en-g-legal-register"],
      tags: ["legal", "business", "formal"],
    },
    {
      id: "comply-with-policy", type: "sentence", target: "All employees are required to comply with the new data protection policy.",
      gloss: { es: "Todos los empleados deben cumplir con la nueva política de protección de datos.", en: "All employees are required to comply with the new data protection policy." },
      accept: [{ text: "All employees must comply with the new data protection policy." }],
      errors: [{ text: "All employees are required to comply to the new data protection policy.", feedback: { es: "La preposición de «comply» es «with»." } }],
      distractors: ["complain", "require", "politics"],
      tags: ["business", "legal"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-legal-register", type: "pattern", target: "shall · may · hereby · herein · notwithstanding",
      gloss: { es: "el registro jurídico", en: "legal register" },
      pattern: {
        rule: {
          es: "Los contratos usan «shall» para obligaciones (The buyer shall pay = el comprador deberá pagar), «shall not» para prohibiciones y «may» para permisos. Abundan los adverbios con «here-» / «there-» (hereby = por la presente, herein = en este documento, thereof = de ello) y fórmulas fijas en pares (null and void, terms and conditions).",
          en: "Contracts use 'shall' for obligations (The buyer shall pay), 'shall not' for prohibitions and 'may' for permissions. Here- / there- adverbs are common (hereby = by this document, herein = in this document, thereof = of it) along with fixed pairs (null and void, terms and conditions).",
        },
        table: [["contrato", "lenguaje común"], ["The tenant shall pay…", "The tenant must pay…"], ["The tenant shall not sublet…", "The tenant must not sublet…"], ["Either party may terminate…", "Either side can end…"], ["We hereby confirm…", "With this letter, we confirm…"]],
      },
      question: {
        prompt: { es: "En un contrato, «The supplier shall deliver the goods within ten days» expresa…", en: "In a contract, 'The supplier shall deliver the goods within ten days' expresses…" },
        options: [
          { es: "una obligación", en: "an obligation" },
          { es: "una simple predicción", en: "a simple prediction" },
          { es: "una sugerencia", en: "a suggestion" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-legal-register"], tags: ["grammar", "legal"],
    },
    {
      id: "pat-formal-conditions", type: "pattern", target: "provided that · on condition that · in the event that · insofar as",
      gloss: { es: "condiciones formales", en: "formal conditions" },
      pattern: {
        rule: {
          es: "Además de «if» y «unless», el registro formal usa: provided / providing (that) y on condition that (siempre que, a condición de que); in the event that (en caso de que) o in the event of + sustantivo; insofar as (en la medida en que). Igual que con «if», el verbo va en presente aunque se hable del futuro.",
          en: "Besides 'if' and 'unless', formal English uses: provided / providing (that) and on condition that; in the event that, or in the event of + noun; insofar as (to the extent that). As with 'if', the verb is in the present even for the future.",
        },
        table: [["conector", "ejemplo"], ["provided that", "…provided that payment is received."], ["on condition that", "…on condition that it remains confidential."], ["in the event of + sust.", "In the event of fire, …"], ["insofar as", "…insofar as the law allows."]],
      },
      question: {
        prompt: { es: "¿Cuál es correcta?", en: "Which one is correct?" },
        options: ["In the event of a delay, we will notify you.", "In the event that a delay, we will notify you.", "In the event of there will be a delay, we notify you.", "In event of delay we will to notify you."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-formal-conditions"], tags: ["grammar", "legal", "conditions"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-contract", type: "dialogue", target: "Is that even enforceable?",
      gloss: { es: "¿Eso tiene validez legal siquiera?", en: "Is that even enforceable?" },
      turns: [
        { who: "A", target: "Before I sign, is there anything in the contract I should worry about?", gloss: { es: "Antes de firmar, ¿hay algo en el contrato que deba preocuparme?", en: "Before I sign, is there anything in the contract I should worry about?" } },
        { who: "B", target: "Clause seven, mainly. It says you shall not work for a competitor for two years after you leave.", gloss: { es: "La cláusula siete, sobre todo. Dice que no podrás trabajar para la competencia durante dos años después de irte.", en: "Clause seven, mainly. It says you shall not work for a competitor for two years after you leave." } },
        { who: "A", target: "Two years? Is that even enforceable?", gloss: { es: "¿Dos años? ¿Eso tiene validez legal siquiera?", en: "Two years? Is that even enforceable?" } },
        { who: "B", target: "Only insofar as it's reasonable. I'd push for six months, provided they put it in writing.", gloss: { es: "Solo en la medida en que sea razonable. Yo pediría seis meses, siempre que lo pongan por escrito.", en: "Only insofar as it's reasonable. I'd push for six months, provided they put it in writing." } },
      ],
      question: {
        prompt: { es: "¿Qué le preocupa de la cláusula siete?", en: "What is the problem with clause seven?" },
        options: [
          { es: "Le prohíbe trabajar para la competencia por dos años", en: "It bans working for a competitor for two years" },
          { es: "Le baja el sueldo a los seis meses", en: "It cuts the salary after six months" },
          { es: "No está por escrito", en: "It isn't in writing" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "legal", "work"],
    },
    {
      id: "lis-warranty", type: "listening", target: "Please note that this warranty covers manufacturing defects only. In the event that the product is damaged through misuse, the company shall not be liable for any repair costs. All claims must be submitted within ninety days of purchase.",
      gloss: { es: "Tenga en cuenta que esta garantía cubre solo defectos de fabricación. En caso de que el producto se dañe por mal uso, la empresa no será responsable de ningún costo de reparación. Todos los reclamos deben presentarse dentro de los noventa días posteriores a la compra.", en: "Please note that this warranty covers manufacturing defects only. In the event that the product is damaged through misuse, the company shall not be liable for any repair costs. All claims must be submitted within ninety days of purchase." },
      question: {
        prompt: { es: "¿En qué caso la empresa NO paga la reparación?", en: "When does the company NOT pay for repairs?" },
        options: [
          { es: "Si el producto se dañó por mal uso", en: "If the product was damaged through misuse" },
          { es: "Si hay un defecto de fabricación", en: "If there is a manufacturing defect" },
          { es: "Si el reclamo llega en el primer mes", en: "If the claim is made in the first month" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "legal", "business"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-casualty", type: "bridge", onlyFor: "es", target: "casualty",
      gloss: { es: "víctima (herido o muerto en un accidente o una guerra)", en: "casualty" },
      question: {
        prompt: { es: "«There were no casualties» significa que…", en: "'There were no casualties' means that…" },
        options: [
          { es: "no hubo heridos ni muertos", en: "nobody was hurt or killed" },
          { es: "no hubo casualidades", en: "there were no coincidences" },
          { es: "no hubo gastos", en: "there were no costs" },
        ],
        answer: 0,
      },
      note: { es: "casualty = víctima; «casualidad» es «coincidence» o «chance»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-retirement", type: "bridge", onlyFor: "es", target: "retirement",
      gloss: { es: "jubilación, retiro", en: "retirement" },
      question: {
        prompt: { es: "La palabra inglesa «jubilation» significa…", en: "The English word 'jubilation' means…" },
        options: [
          { es: "júbilo, gran alegría", en: "great joy" },
          { es: "jubilación", en: "the end of one's working life" },
          { es: "un pago extra", en: "a bonus payment" },
        ],
        answer: 0,
      },
      note: { es: "jubilation = júbilo; la jubilación es «retirement» (to retire = jubilarse) y la pensión, «pension»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
