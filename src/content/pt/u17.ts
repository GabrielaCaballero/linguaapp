import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u17",
  lang: "pt",
  index: 17,
  cefr: "B1",
  title: { target: "Se eu fosse…", es: "Si yo fuera…", en: "If I were…" },
  canDo: [
    { es: "Puedo hablar de situaciones imaginarias y de mis sueños.", en: "I can talk about imaginary situations and my dreams." },
    { es: "Sé usar se + imperfeito do subjuntivo + condicional (se eu tivesse, faria).", en: "I can use se + imperfect subjunctive + conditional (se eu tivesse, faria)." },
  ],
  icon: "💭",
  items: build("pt", 17, "B1", [
    { id: "sonho", type: "word", pos: "noun", target: "o sonho", gender: "m", plural: "os sonhos", gloss: { es: "el sueño (lo que deseas o sueñas)", en: "the dream" }, distractors: ["o sono", "a sonha", "o sonido"], note: { es: "Ojo: «o sono» es el sueño de dormir (estou com sono = tengo sueño).", en: "Careful: 'o sono' is sleepiness (estou com sono = I'm sleepy)." }, tags: ["dreams"] },
    { id: "loteria", type: "word", pos: "noun", target: "a loteria", gender: "f", plural: "as loterias", gloss: { es: "la lotería", en: "the lottery" }, variants: [{ region: "PT", text: "a lotaria" }], distractors: ["o loteria", "a lotería", "a loteamento"], tags: ["dreams", "money"] },
    { id: "mudar-se", type: "word", pos: "verb", target: "mudar-se", gloss: { es: "mudarse (de casa)", en: "to move (house)" }, forms: { eu: "me mudo" }, distractors: ["mover-se", "mudar de roupa", "trocar-se"], tags: ["dreams", "verbs"] },
    { id: "vontade", type: "word", pos: "noun", target: "a vontade", gender: "f", plural: "as vontades", gloss: { es: "las ganas / la voluntad", en: "the urge / will" }, distractors: ["o vontade", "a voluntade", "a ventade"], note: { es: "Estou com vontade de… = tengo ganas de…", en: "Estou com vontade de… = I feel like…" }, tags: ["dreams", "feelings"] },
    { id: "quem-dera", type: "phrase", pos: "phrase", target: "Quem dera!", gloss: { es: "¡Ojalá! (para algo improbable)", en: "If only! / I wish!" }, distractors: ["Quem der!", "Que dera!", "Quem daria!"], note: { es: "Con verbo, va en imperfeito do subjuntivo: quem dera eu pudesse!", en: "With a verb, use the imperfect subjunctive: quem dera eu pudesse!" }, tags: ["dreams", "chunk"] },
    { id: "no-seu-lugar", type: "phrase", pos: "phrase", target: "Se eu fosse você…", gloss: { es: "Yo que tú… / Si yo fuera tú…", en: "If I were you…" }, accept: [{ text: "No seu lugar…" }, { text: "Eu, no seu lugar…" }], distractors: ["Se eu era você…", "Se eu for você…", "Se eu seria você…"], tags: ["advice", "chunk"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "se-eu-ganhasse", type: "sentence", target: "Se eu ganhasse na loteria, eu viajaria pelo mundo.",
      gloss: { es: "Si ganara la lotería, viajaría por el mundo.", en: "If I won the lottery, I'd travel the world." },
      accept: [{ text: "Se eu ganhasse na loteria, viajaria pelo mundo." }, { text: "Se eu ganhasse na loteria, eu ia viajar pelo mundo." }],
      errors: [{ text: "Se eu ganharia na loteria, eu viajaria pelo mundo.", feedback: { es: "Tras «se» no va condicional, sino imperfeito do subjuntivo: ganhasse.", en: "After 'se' use the imperfect subjunctive, not the conditional: ganhasse." }, ruleId: "pt-g-subjuntivo-imperfeito" }],
      distractors: ["ganharia", "viajasse", "por o"],
      tags: ["dreams", "conditional"],
    },
    {
      id: "se-eu-fosse-voce", type: "sentence", target: "Se eu fosse você, eu aceitaria a proposta.",
      gloss: { es: "Yo que tú, aceptaría la propuesta.", en: "If I were you, I'd accept the offer." },
      accept: [{ text: "Se eu fosse você, aceitaria a proposta." }, { text: "No seu lugar, eu aceitaria a proposta." }],
      distractors: ["era", "aceitasse", "seria"],
      grammar: ["pt-g-condicional"], tags: ["advice", "conditional"],
    },
    {
      id: "se-tivesse-tempo", type: "sentence", target: "Se a gente tivesse mais tempo, ia aprender a tocar violão.",
      gloss: { es: "Si tuviéramos más tiempo, aprenderíamos a tocar la guitarra.", en: "If we had more time, we'd learn to play the guitar." },
      accept: [{ text: "Se nós tivéssemos mais tempo, aprenderíamos a tocar violão." }, { text: "Se a gente tivesse mais tempo, aprenderia a tocar violão." }],
      variants: [{ region: "PT", text: "Se tivéssemos mais tempo, aprenderíamos a tocar guitarra.", note: { es: "En Portugal la guitarra española es «a guitarra»; en Brasil, «o violão».", en: "In Portugal the classical guitar is 'a guitarra'; in Brazil 'o violão'." } }],
      distractors: ["tinha", "jogar", "teria"],
      note: { es: "En el habla brasileña, «ia + infinitivo» reemplaza a menudo al condicional: ia aprender = aprendería.", en: "In Brazilian speech 'ia + infinitive' often replaces the conditional: ia aprender = would learn." },
      tags: ["dreams", "conditional", "music"],
    },
    {
      id: "eu-gostaria-de-morar", type: "sentence", target: "Eu adoraria morar perto do mar.",
      gloss: { es: "Me encantaría vivir cerca del mar.", en: "I'd love to live by the sea." },
      accept: [{ text: "Adoraria morar perto do mar." }, { text: "Eu gostaria muito de morar perto do mar." }],
      distractors: ["adoro", "de", "da"],
      tags: ["dreams"],
    },
    {
      id: "quem-dera-eu-pudesse", type: "sentence", target: "Quem dera eu pudesse tirar férias agora!",
      gloss: { es: "¡Ojalá pudiera tomarme vacaciones ahora!", en: "I wish I could take a holiday now!" },
      accept: [{ text: "Quem me dera poder tirar férias agora!" }],
      errors: [{ text: "Quem dera eu posso tirar férias agora!", feedback: { es: "«quem dera» va con imperfeito do subjuntivo: pudesse.", en: "'quem dera' takes the imperfect subjunctive: pudesse." }, ruleId: "pt-g-subjuntivo-imperfeito" }],
      distractors: ["posso", "poderia", "tomar"],
      note: { es: "tirar férias = tomarse vacaciones.", en: "tirar férias = to take a holiday." },
      tags: ["dreams", "subjunctive"],
    },
    {
      id: "como-se", type: "sentence", target: "Ele fala como se soubesse tudo.",
      gloss: { es: "Habla como si lo supiera todo.", en: "He talks as if he knew everything." },
      errors: [{ text: "Ele fala como se sabe tudo.", feedback: { es: "«como se» va con imperfeito do subjuntivo: soubesse.", en: "'como se' takes the imperfect subjunctive: soubesse." }, ruleId: "pt-g-subjuntivo-imperfeito" }],
      distractors: ["sabe", "sabesse", "todo"],
      tags: ["subjunctive"],
    },
    { id: "ficar-rico", type: "phrase", pos: "phrase", target: "ficar rico", gloss: { es: "hacerse rico", en: "to get rich" }, accept: [{ text: "ficar rica" }], distractors: ["fazer-se rico", "virar rico de", "ficar riqueza"], note: { es: "«ficar» + adjetivo = volverse, ponerse: ficar triste, ficar famoso.", en: "ficar + adjective = to become: ficar triste, ficar famoso." }, tags: ["dreams"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-subj-imperfeito", type: "paradigm", target: "ter — imperfeito do subjuntivo", spoken: "ter",
      gloss: { es: "«ter» en imperfecto de subjuntivo", en: "ter — imperfect subjunctive" },
      grammar: ["pt-g-subjuntivo-imperfeito"],
      paradigm: {
        caption: { es: "Completa: «Se eu… (tuviera)»", en: "Complete: 'Se eu… (had)'" },
        cells: [
          { label: "eu", answer: "tivesse", ruleId: "pt-g-subjuntivo-imperfeito" },
          { label: "você / ele / ela", answer: "tivesse", ruleId: "pt-g-subjuntivo-imperfeito" },
          { label: "nós", answer: "tivéssemos", ruleId: "pt-g-subjuntivo-imperfeito" },
          { label: "vocês / eles / elas", answer: "tivessem", ruleId: "pt-g-subjuntivo-imperfeito" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },
    {
      id: "tab-condicional", type: "paradigm", target: "fazer / falar — condicional", spoken: "fazer, falar",
      gloss: { es: "condicional (futuro do pretérito)", en: "the conditional (would)" },
      grammar: ["pt-g-condicional"],
      paradigm: {
        caption: { es: "Escribe el condicional", en: "Write the conditional" },
        cells: [
          { label: "eu (falar)", answer: "falaria", ruleId: "pt-g-condicional" },
          { label: "nós (falar)", answer: "falaríamos", ruleId: "pt-g-condicional" },
          { label: "eles (falar)", answer: "falariam", ruleId: "pt-g-condicional" },
          { label: "eu (fazer)", answer: "faria", ruleId: "pt-g-condicional" },
          { label: "eu (dizer)", answer: "diria", ruleId: "pt-g-condicional" },
        ],
      },
      tags: ["grammar", "conditional", "table"],
    },
    {
      id: "pat-se-fosse", type: "pattern", target: "Se eu tivesse…, eu faria…",
      gloss: { es: "condicional irreal: si tuviera…, haría…", en: "unreal conditions: if I had…, I would…" },
      pattern: {
        rule: {
          es: "Igual que en español: se + imperfeito do subjuntivo (tivesse, fosse, pudesse) + condicional (faria, seria). Se forma desde el pretérito «eles»: tiveram → tivesse, fizeram → fizesse.",
          en: "se + imperfect subjunctive (tivesse, fosse, pudesse) + conditional (faria, seria). Built from the 'eles' past form: tiveram → tivesse, fizeram → fizesse.",
        },
        table: [["ter (tiveram)", "se eu tivesse"], ["ser (foram)", "se eu fosse"], ["fazer (fizeram)", "se eu fizesse"], ["poder (puderam)", "se eu pudesse"], ["saber (souberam)", "se eu soubesse"]],
      },
      question: {
        prompt: { es: "Completa: «Se eu ___ cozinhar, abriria um restaurante.» (saber)", en: "Complete: 'Se eu ___ cozinhar, abriria um restaurante.' (saber)" },
        options: ["soubesse", "sabesse", "saberia", "sabia que"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-subjuntivo-imperfeito"], tags: ["grammar", "conditional"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-sonho", type: "listening", target: "Se eu pudesse escolher, moraria numa cidade pequena no litoral da Bahia. Teria uma pousada e passaria o dia na praia.",
      gloss: { es: "Si pudiera elegir, viviría en un pueblo pequeño de la costa de Bahía. Tendría una posada y pasaría el día en la playa.", en: "If I could choose, I'd live in a small town on the Bahia coast. I'd run a guesthouse and spend all day on the beach." },
      question: {
        prompt: { es: "¿Qué tendría la persona?", en: "What would the speaker have?" },
        options: [
          { es: "Una posada", en: "A guesthouse" },
          { es: "Un restaurante", en: "A restaurant" },
          { es: "Un barco", en: "A boat" },
          { es: "Una escuela de surf", en: "A surf school" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "dreams"],
    },
    {
      id: "dlg-sonho", type: "dialogue", target: "Eu largaria tudo!",
      gloss: { es: "¡Lo dejaría todo!", en: "I'd drop everything!" },
      turns: [
        { who: "A", target: "O que você faria se ficasse milionário?", gloss: { es: "¿Qué harías si te hicieras millonario?", en: "What would you do if you became a millionaire?" } },
        { who: "B", target: "Eu largaria tudo e iria morar em Portugal.", gloss: { es: "Lo dejaría todo y me iría a vivir a Portugal.", en: "I'd drop everything and go and live in Portugal." } },
        { who: "A", target: "Sério? Eu compraria uma casa pra minha mãe.", gloss: { es: "¿En serio? Yo le compraría una casa a mi madre.", en: "Really? I'd buy my mum a house." } },
      ],
      question: {
        prompt: { es: "¿Qué haría A?", en: "What would A do?" },
        options: [
          { es: "Comprarle una casa a su madre", en: "Buy their mum a house" },
          { es: "Irse a vivir a Portugal", en: "Move to Portugal" },
          { es: "Dejar de trabajar", en: "Stop working" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "dreams"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-mudar", type: "bridge", onlyFor: "es", target: "mudar de ideia",
      gloss: { es: "cambiar de idea", en: "to change your mind" },
      distractors: ["mudar a ideia", "trocar ideia", "cambiar de ideia"],
      note: { es: "«mudar» = cambiar (mudar de ideia, mudar de emprego); «mudar-se» = mudarse de casa." },
      exercises: ["guess", "recall"], tags: ["bridge", "cognate-pattern"],
    },
    {
      id: "br-en-wish", type: "bridge", onlyFor: "en", target: "Quem dera eu soubesse!",
      gloss: { es: "¡Ojalá lo supiera!", en: "I wish I knew!" },
      distractors: ["Desejo que eu sei!", "Quem dera eu sei!", "Eu desejo saber!"],
      note: { en: "'I wish I…' is 'quem dera (eu)' + imperfect subjunctive, or 'eu queria que…'." },
      exercises: ["guess", "recall"], tags: ["bridge", "subjunctive"],
    },
  ]),
};
