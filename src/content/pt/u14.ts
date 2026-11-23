import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u14",
  lang: "pt",
  index: 14,
  cefr: "B1",
  title: { target: "O trabalho", es: "El trabajo", en: "Work" },
  canDo: [
    { es: "Puedo hablar de mi trabajo, mis tareas y mis colegas.", en: "I can talk about my job, my tasks and my colleagues." },
    { es: "Puedo escribir un correo de trabajo sencillo y formal.", en: "I can write a short, formal work email." },
    { es: "Sé usar el futuro (farei, será) y los pronombres o / a / lhe.", en: "I can use the future tense (farei, será) and the pronouns o / a / lhe." },
  ],
  icon: "💼",
  items: build("pt", 14, "B1", [
    { id: "empresa", type: "word", pos: "noun", target: "a empresa", gender: "f", plural: "as empresas", gloss: { es: "la empresa", en: "the company" }, distractors: ["o empresa", "a empreza", "a presa"], tags: ["work"] },
    { id: "escritorio", type: "word", pos: "noun", target: "o escritório", gender: "m", plural: "os escritórios", gloss: { es: "la oficina", en: "the office" }, distractors: ["a escrivaninha", "o escrito", "a oficina"], tags: ["work", "false-friend"] },
    { id: "chefe", type: "word", pos: "noun", target: "o chefe", gender: "m", plural: "os chefes", gloss: { es: "el jefe", en: "the boss" }, accept: [{ text: "a chefe" }], distractors: ["o jefe", "o chef", "a chefa de"], tags: ["work", "people"] },
    { id: "colega", type: "word", pos: "noun", target: "o colega", gender: "m", plural: "os colegas", gloss: { es: "el colega, el compañero de trabajo", en: "the colleague" }, accept: [{ text: "a colega" }], distractors: ["o colégio", "o coleguinha de", "o companheiro"], tags: ["work", "people"] },
    { id: "reuniao", type: "word", pos: "noun", target: "a reunião", gender: "f", plural: "as reuniões", gloss: { es: "la reunión", en: "the meeting" }, distractors: ["o reunião", "a reunion", "a união"], tags: ["work"] },
    { id: "salario", type: "word", pos: "noun", target: "o salário", gender: "m", plural: "os salários", gloss: { es: "el sueldo, el salario", en: "the salary / pay" }, distractors: ["a salária", "o saldo", "o salão"], tags: ["work", "money"] },
    { id: "vaga", type: "word", pos: "noun", target: "a vaga", gender: "f", plural: "as vagas", gloss: { es: "la vacante (de empleo) / el lugar para estacionar", en: "the vacancy / parking space" }, distractors: ["o vago", "a vela", "a vagem"], note: { es: "«vaga» también es un lugar libre: tem vaga na garagem?", en: "'vaga' is also a free space: tem vaga na garagem?" }, tags: ["work"] },
    { id: "curriculo", type: "word", pos: "noun", target: "o currículo", gender: "m", plural: "os currículos", gloss: { es: "el currículum, la hoja de vida", en: "the CV / résumé" }, distractors: ["a currícula", "o curricular", "o curso"], tags: ["work"] },
    { id: "home-office", type: "phrase", pos: "phrase", target: "trabalhar de casa", gloss: { es: "trabajar desde casa", en: "to work from home" }, accept: [{ text: "fazer home office" }, { text: "trabalhar em casa" }], variants: [{ region: "PT", text: "trabalhar a partir de casa", note: { es: "En Portugal: trabalhar a partir de casa / estar em teletrabalho.", en: "In Portugal: trabalhar a partir de casa / estar em teletrabalho." } }, { region: "PT", text: "estar em teletrabalho" }], distractors: ["trabalhar na casa", "trabalhar por casa", "trabalhar a casa"], tags: ["work"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "trabalho-numa-empresa", type: "sentence", target: "Eu trabalho numa empresa de tecnologia há cinco anos.",
      gloss: { es: "Trabajo en una empresa de tecnología desde hace cinco años.", en: "I've been working at a tech company for five years." },
      accept: [{ text: "Trabalho numa empresa de tecnologia há cinco anos." }, { text: "Eu trabalho em uma empresa de tecnologia há cinco anos." }, { text: "Eu trabalho numa empresa de tecnologia faz cinco anos." }],
      errors: [{ text: "Eu trabalho numa empresa de tecnologia faz cinco anos atrás.", feedback: { es: "«há cinco anos» ya incluye «hace»: no hace falta «atrás».", en: "'há cinco anos' already means 'for/ago': no need for 'atrás'." } }],
      distractors: ["faz", "desde", "a"],
      tags: ["work"],
    },
    {
      id: "a-reuniao-sera", type: "sentence", target: "A reunião será na sexta às dez horas.",
      gloss: { es: "La reunión será el viernes a las diez.", en: "The meeting will be on Friday at ten." },
      accept: [{ text: "A reunião vai ser na sexta às dez horas." }, { text: "A reunião será na sexta-feira às dez horas." }],
      distractors: ["sera", "no", "as"],
      grammar: ["pt-g-futuro"], tags: ["work", "future"],
    },
    {
      id: "vou-mandar-o-relatorio", type: "sentence", target: "Eu te mando o relatório amanhã cedo.", register: "informal",
      gloss: { es: "Te mando el informe mañana temprano.", en: "I'll send you the report first thing tomorrow." },
      accept: [{ text: "Te mando o relatório amanhã cedo." }, { text: "Eu vou te mandar o relatório amanhã cedo." }],
      variants: [{ region: "PT", text: "Mando-te o relatório amanhã cedo.", note: { es: "En Portugal el pronombre va detrás: mando-te.", en: "In Portugal the pronoun follows: mando-te." } }],
      distractors: ["lhe", "relato", "mandei"],
      tags: ["work"],
    },
    {
      id: "envio-em-anexo", type: "sentence", target: "Envio em anexo o meu currículo.", register: "formal",
      gloss: { es: "Adjunto mi currículum.", en: "Please find my CV attached. (formal)" },
      accept: [{ text: "Segue em anexo o meu currículo." }, { text: "Segue anexo o meu currículo." }, { text: "Envio o meu currículo em anexo." }, { text: "Envio em anexo meu currículo." }],
      distractors: ["no", "anexado", "curriculum"],
      tags: ["work", "email", "formal"],
    },
    {
      id: "prezada-senhora", type: "phrase", pos: "phrase", target: "Prezada Sra. Lima,", spoken: "Prezada senhora Lima,", register: "formal",
      gloss: { es: "Estimada Sra. Lima: (en un correo)", en: "Dear Ms Lima, (in an email)" },
      accept: [{ text: "Prezada senhora Lima," }, { text: "Cara Sra. Lima," }],
      distractors: ["Querida Sra. Lima,", "Prezado Sra. Lima,", "Olá Sra. Lima,"],
      note: { es: "Para cerrar: «Atenciosamente» (atentamente) o «Abraços» si hay confianza.", en: "To close: 'Atenciosamente' (yours sincerely), or 'Abraços' if you know them well." },
      tags: ["work", "email", "formal"],
    },
    {
      id: "nao-o-conheco", type: "sentence", target: "Eu não o conheço pessoalmente.", register: "formal",
      gloss: { es: "No lo conozco personalmente.", en: "I don't know him personally." },
      accept: [{ text: "Não o conheço pessoalmente." }, { text: "Eu não conheço ele pessoalmente." }],
      errors: [{ text: "Eu não lhe conheço pessoalmente.", feedback: { es: "conhecer lleva objeto directo: o / a (lo / la), no lhe.", en: "conhecer takes a direct object: o / a, not lhe." }, ruleId: "pt-g-pronomes-objeto" }],
      distractors: ["lhe", "conhece", "a ele"],
      note: { es: "En el habla, «não conheço ele» es lo común; por escrito, «não o conheço».", en: "In speech 'não conheço ele' is normal; in writing, 'não o conheço'." },
      tags: ["work", "pronouns"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-futuro", type: "paradigm", target: "trabalhar — futuro do presente", spoken: "trabalhar",
      gloss: { es: "«trabalhar» en futuro", en: "trabalhar — future tense" },
      grammar: ["pt-g-futuro"],
      paradigm: {
        caption: { es: "Conjuga «trabalhar» en futuro (trabajaré…)", en: "Conjugate trabalhar in the future (I will work…)" },
        cells: [
          { label: "eu", answer: "trabalharei", ruleId: "pt-g-futuro" },
          { label: "você / ele / ela", answer: "trabalhará", ruleId: "pt-g-futuro" },
          { label: "nós", answer: "trabalharemos", ruleId: "pt-g-futuro" },
          { label: "vocês / eles / elas", answer: "trabalharão", ruleId: "pt-g-futuro" },
        ],
      },
      tags: ["grammar", "future", "table"],
    },
    {
      id: "pat-futuro", type: "pattern", target: "vou trabalhar (fala) · trabalharei (escrita)",
      gloss: { es: "el futuro: ir + infinitivo y futuro simple", en: "the future: ir + infinitive and the simple future" },
      pattern: {
        rule: {
          es: "En la conversación se usa ir + infinitivo (vou fazer). El futuro simple (farei, será) aparece en textos formales, noticias y correos. Irregulares: fazer → farei, dizer → direi, trazer → trarei.",
          en: "In conversation use ir + infinitive (vou fazer). The simple future (farei, será) appears in formal texts, news and emails. Irregular: fazer → farei, dizer → direi, trazer → trarei.",
        },
        table: [["fala / speech", "Amanhã vou ligar para o cliente."], ["escrita / writing", "Amanhã ligaremos para o cliente."], ["fazer", "farei, fará"], ["dizer", "direi, dirá"]],
      },
      question: {
        prompt: { es: "En un correo formal: «Le enviaremos el contrato mañana.»", en: "In a formal email: 'We will send you the contract tomorrow.'" },
        options: ["Enviaremos o contrato amanhã.", "Enviamos o contrato ontem.", "Vamos a enviar o contrato amanhã.", "Enviaríamos o contrato amanhã."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-futuro"], tags: ["grammar", "future"],
    },
    {
      id: "pat-pronomes-objeto", type: "pattern", target: "Eu o vi. · Eu lhe dei o livro. · (fala: Eu vi ele.)",
      gloss: { es: "pronombres de objeto: o, a, lhe", en: "object pronouns: o, a, lhe" },
      pattern: {
        rule: {
          es: "Objeto directo: o, a, os, as (lo, la, los, las). Indirecto: lhe, lhes (le, les). En el Brasil hablado se dice «vi ele», «te dei» y casi no se usa «o / a»; en textos formales sí.",
          en: "Direct object: o, a, os, as (him, her, it, them). Indirect: lhe, lhes (to him / her / you). Spoken Brazilian says 'vi ele' and rarely uses o / a; formal writing does.",
        },
        table: [["directo / direct", "Conheço a Ana. → Conheço-a. / Eu a conheço."], ["indireto / indirect", "Dei o livro ao João. → Dei-lhe o livro."], ["fala / speech", "Eu conheço ela. Dei o livro pra ele."]],
      },
      question: {
        prompt: { es: "Versión formal de «Eu vi ele ontem»:", en: "Formal version of 'Eu vi ele ontem':" },
        options: ["Eu o vi ontem.", "Eu lhe vi ontem.", "Eu vi-lo ontem.", "Eu ele vi ontem."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-pronomes-objeto"], tags: ["grammar", "pronouns"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-vaga", type: "listening", target: "Empresa de turismo em Natal contrata recepcionista. Exige-se inglês fluente e espanhol intermediário. Enviar currículo até o dia vinte.",
      gloss: { es: "Empresa de turismo en Natal contrata recepcionista. Se exige inglés fluido y español intermedio. Enviar currículum hasta el día veinte.", en: "Tourism company in Natal hiring a receptionist. Fluent English and intermediate Spanish required. Send CV by the twentieth." },
      question: {
        prompt: { es: "¿Qué idiomas piden?", en: "Which languages do they ask for?" },
        options: [
          { es: "Inglés fluido y español intermedio", en: "Fluent English and intermediate Spanish" },
          { es: "Español fluido e inglés intermedio", en: "Fluent Spanish and intermediate English" },
          { es: "Solo inglés", en: "Only English" },
          { es: "Ninguno", en: "None" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work"],
    },
    {
      id: "dlg-trabalho", type: "dialogue", target: "Estou numa correria.",
      gloss: { es: "Estoy a mil.", en: "I'm rushed off my feet." },
      turns: [
        { who: "A", target: "E o trabalho novo, como está?", gloss: { es: "¿Y el trabajo nuevo, qué tal?", en: "So how's the new job?" } },
        { who: "B", target: "Estou numa correria! Muita reunião, muito e-mail…", gloss: { es: "¡Estoy a mil! Muchas reuniones, muchos correos…", en: "I'm rushed off my feet! Lots of meetings, lots of emails…" } },
        { who: "A", target: "Mas você gosta?", gloss: { es: "¿Pero te gusta?", en: "But do you like it?" } },
        { who: "B", target: "Gosto, sim. A equipe é ótima e o salário é melhor.", gloss: { es: "Sí, me gusta. El equipo es genial y el sueldo es mejor.", en: "I do. The team is great and the pay is better." } },
      ],
      question: {
        prompt: { es: "¿Qué piensa B de su nuevo trabajo?", en: "What does B think of the new job?" },
        options: [
          { es: "Le gusta, aunque está muy ocupado/a", en: "Likes it, though it's very busy" },
          { es: "No le gusta nada", en: "Doesn't like it at all" },
          { es: "Gana menos que antes", en: "Earns less than before" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-oficina", type: "bridge", onlyFor: "es", target: "a oficina",
      gloss: { es: "el taller (mecánico)", en: "the garage / workshop" },
      question: {
        prompt: { es: "«Meu carro está na oficina» significa que tu auto está…", en: "'Meu carro está na oficina' means your car is…" },
        options: [{ es: "en el taller", en: "at the garage" }, { es: "en la oficina", en: "at the office" }, { es: "en el estacionamiento", en: "in the car park" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «oficina» es el taller; la oficina es «o escritório»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
    {
      id: "br-en-pretender", type: "bridge", onlyFor: "en", target: "Pretendo mudar de emprego.",
      gloss: { es: "Pienso cambiar de trabajo.", en: "I intend to change jobs." },
      question: {
        prompt: { es: "«Pretendo mudar de emprego» significa…", en: "'Pretendo mudar de emprego' means…" },
        options: [{ es: "Pienso cambiar de trabajo.", en: "I intend to change jobs." }, { es: "Finjo cambiar de trabajo.", en: "I'm pretending to change jobs." }, { es: "Me mudo por el trabajo.", en: "I'm moving house for work." }],
        answer: 0,
      },
      note: { en: "False friends: pretender = to intend; to pretend is 'fingir'. And mudar de emprego = to change jobs." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
  ]),
};
