import type { GrammarPoint } from "../schema";

// Grammar points for Portuguese units u17–u24 (content v2.1). Same shape as grammar1.ts.
export const grammar3: GrammarPoint[] = [
  // ── u17 ───────────────────────────────────────────────────
  {
    id: "pt-g-subjuntivo-imperfeito", lang: "pt", cefr: "B1",
    title: { es: "Imperfecto de subjuntivo", en: "The imperfect subjunctive" },
    short: {
      es: "Pretérito «eles» sin -ram + -sse: tiveram → tivesse, fizeram → fizesse. Tras se, como se, quem dera.",
      en: "'eles' past minus -ram + -sse: tiveram → tivesse, fizeram → fizesse. After se, como se, quem dera.",
    },
    rule: {
      es: "Equivale al imperfecto de subjuntivo en -se del español (tuviese). Se usa en condiciones irreales (se eu fosse), con «como se», «quem dera» y tras verbos de deseo en pasado (queria que você viesse).",
      en: "It's used in unreal conditions (se eu fosse = if I were), after 'como se' (as if), 'quem dera' (I wish) and after past wishes (queria que você viesse = I wanted you to come).",
    },
    steps: [
      { es: "Toma el pretérito de «eles»: fizeram.", en: "Take the 'eles' simple past: fizeram." },
      { es: "Quita -ram: fize-.", en: "Drop -ram: fize-." },
      { es: "Añade -sse, -sse, -ssemos, -ssem: fizesse.", en: "Add -sse, -sse, -ssemos, -ssem: fizesse." },
    ],
    table: { head: ["", "falar", "ter", "ser / ir"], rows: [["eu", "falasse", "tivesse", "fosse"], ["você / ele", "falasse", "tivesse", "fosse"], ["nós", "falássemos", "tivéssemos", "fôssemos"], ["vocês / eles", "falassem", "tivessem", "fossem"]] },
    examples: [
      { target: "Se eu fosse rico, compraria uma ilha.", gloss: { es: "Si fuera rico, compraría una isla.", en: "If I were rich, I'd buy an island." } },
      { target: "Ela me olhou como se não me conhecesse.", gloss: { es: "Me miró como si no me conociera.", en: "She looked at me as if she didn't know me." } },
    ],
    pitfalls: {
      es: "No existe la forma en -ra para el subjuntivo («tivera» es pluscuamperfecto literario): usa siempre -sse.",
      en: "Never use the conditional after 'se': 'se eu teria' is wrong; 'se eu tivesse'.",
    },
  },
  {
    id: "pt-g-condicional", lang: "pt", cefr: "B1",
    title: { es: "El condicional (futuro do pretérito)", en: "The conditional (futuro do pretérito)" },
    short: {
      es: "Infinitivo + -ia, -ia, -íamos, -iam: falaria, comeria. Irregulares: faria, diria, traria.",
      en: "Infinitive + -ia, -ia, -íamos, -iam: falaria, comeria. Irregular: faria, diria, traria.",
    },
    rule: {
      es: "Igual que en español. En el Brasil hablado se reemplaza a menudo por el imperfeito (eu ia, eu fazia) o por ia + infinitivo: se eu pudesse, eu ia viajar.",
      en: "It expresses 'would'. In spoken Brazilian Portuguese it's often replaced by the imperfect (eu ia, eu fazia) or ia + infinitive: se eu pudesse, eu ia viajar.",
    },
    table: { head: ["", "falar", "fazer", "dizer"], rows: [["eu", "falaria", "faria", "diria"], ["você / ele", "falaria", "faria", "diria"], ["nós", "falaríamos", "faríamos", "diríamos"], ["vocês / eles", "falariam", "fariam", "diriam"]] },
    examples: [
      { target: "Você poderia me ajudar?", gloss: { es: "¿Podrías ayudarme?", en: "Could you help me?" } },
      { target: "Eu não faria isso no seu lugar.", gloss: { es: "Yo no haría eso en tu lugar.", en: "I wouldn't do that if I were you." } },
    ],
    pitfalls: {
      es: "Con pronombre en registro formal se usa la mesóclisis: dir-lhe-ia (le diría). En el habla: eu lhe diria / eu ia te dizer.",
      en: "In formal writing an object pronoun goes inside the verb: dir-lhe-ia (I would tell him). In speech: eu ia te dizer.",
    },
  },
  // ── u18 ───────────────────────────────────────────────────
  {
    id: "pt-g-voz-passiva", lang: "pt", cefr: "B1",
    title: { es: "La voz pasiva: ser + participio", en: "The passive: ser + participle" },
    short: {
      es: "ser + participio concordado + por (pelo/pela): a casa foi vendida pela agência.",
      en: "ser + agreeing participle + por (pelo/pela): a casa foi vendida pela agência.",
    },
    rule: {
      es: "Se forma con ser en el tiempo necesario y el participio, que concuerda en género y número con el sujeto. El agente se introduce con por, que se contrae: pelo, pela. Es frecuente en noticias.",
      en: "ser in any tense + the past participle, agreeing in gender and number with the subject. The agent comes with por, contracted to pelo / pela. Very common in the news.",
    },
    table: { head: ["tempo", "exemplo"], rows: [["presente", "O jornal é lido por milhões."], ["pretérito", "A lei foi aprovada."], ["futuro", "Os resultados serão divulgados."], ["perífrase", "A ponte vai ser reformada."]] },
    examples: [
      { target: "O suspeito foi preso pela polícia federal.", gloss: { es: "El sospechoso fue detenido por la policía federal.", en: "The suspect was arrested by the federal police." } },
      { target: "As vagas serão preenchidas até maio.", gloss: { es: "Las vacantes se cubrirán antes de mayo.", en: "The positions will be filled by May." } },
    ],
    pitfalls: {
      es: "No olvides la concordancia: as casas foram vendidas (no «vendido»).",
      en: "Make the participle agree: as casas foram vendidas.",
    },
  },
  {
    id: "pt-g-se-apassivador", lang: "pt", cefr: "B1",
    title: { es: "El «se» pasivo e impersonal", en: "The passive and impersonal 'se'" },
    short: {
      es: "Vende-se casa / Vendem-se casas (concuerda). Precisa-se de… (impersonal, siempre singular).",
      en: "Vende-se casa / Vendem-se casas (agrees). Precisa-se de… (impersonal, always singular).",
    },
    rule: {
      es: "Con verbos con objeto directo, el «se» es pasivo y el verbo concuerda con el sustantivo (alugam-se quartos). Con verbos con preposición o sin objeto es impersonal y va en singular (precisa-se de ajuda, vive-se bem aqui). En el habla, «vende-se casas» es muy común, pero la norma lo corrige.",
      en: "With transitive verbs 'se' is passive and the verb agrees with the noun (alugam-se quartos). With verbs taking a preposition or no object it's impersonal and singular (precisa-se de ajuda). 'Vende-se casas' is common but non-standard.",
    },
    table: { head: ["tipo", "exemplo"], rows: [["passivo sing.", "Aluga-se sala."], ["passivo pl.", "Alugam-se salas."], ["impessoal", "Precisa-se de motoristas."], ["impessoal", "Come-se bem aqui."]] },
    examples: [
      { target: "Não se aceitam cheques.", gloss: { es: "No se aceptan cheques.", en: "Cheques not accepted." } },
      { target: "Trata-se de um problema sério.", gloss: { es: "Se trata de un problema serio.", en: "It's a serious problem." } },
    ],
    pitfalls: {
      es: "«Trata-se de» es impersonal: nunca «tratam-se de».",
      en: "'Trata-se de' is impersonal: never 'tratam-se de'.",
    },
  },
  // ── u19 ───────────────────────────────────────────────────
  {
    id: "pt-g-futuro-subjuntivo", lang: "pt", cefr: "B2",
    title: { es: "El futuro de subjuntivo", en: "The future subjunctive" },
    short: {
      es: "quando você puder, se der, assim que tiver: donde el español usa presente de subjuntivo o indicativo.",
      en: "quando você puder, se der, assim que tiver: Portuguese's tense for future conditions and time clauses.",
    },
    rule: {
      es: "Tras se, quando, assim que, enquanto, depois que, sempre que, quem, o que, onde… referidos al futuro, el portugués usa este tiempo, casi desaparecido en español: «cuando puedas» = quando você puder; «si quieres» = se você quiser. Se forma desde el pretérito «eles» sin -am: puderam → puder.",
      en: "After se, quando, assim que, enquanto, quem, o que, onde… referring to the future, Portuguese uses this tense: 'when you can' = quando você puder; 'if you want' = se você quiser. Form it from the 'eles' past minus -am: puderam → puder.",
    },
    steps: [
      { es: "¿La frase habla del futuro tras se / quando / assim que…? → futuro de subjuntivo.", en: "Is it about the future after se / quando / assim que…? → future subjunctive." },
      { es: "Toma el pretérito de «eles»: fizeram.", en: "Take the 'eles' past: fizeram." },
      { es: "Quita -am: fizer. Plural: fizermos, fizerem.", en: "Drop -am: fizer. Plural: fizermos, fizerem." },
    ],
    table: { head: ["verbo", "eles (pret.)", "fut. subj."], rows: [["falar", "falaram", "falar"], ["ter", "tiveram", "tiver"], ["ser / ir", "foram", "for"], ["fazer", "fizeram", "fizer"], ["querer", "quiseram", "quiser"], ["ver", "viram", "vir"]] },
    examples: [
      { target: "Se você vier ao Rio, me avisa.", gloss: { es: "Si vienes a Río, avísame.", en: "If you come to Rio, let me know." } },
      { target: "Quem quiser pode sair mais cedo.", gloss: { es: "El que quiera puede salir más temprano.", en: "Anyone who wants to can leave early." } },
    ],
    pitfalls: {
      es: "«Quando você possa» es un calco del español: lo correcto es «quando você puder». Ojo: el futuro de subjuntivo de ver es «vir» (quando eu vir), igual que el infinitivo de venir.",
      en: "Don't use the present after quando / se for the future: 'quando você pode' is wrong. Note: ver gives 'vir' (quando eu vir), which looks like the infinitive 'to come'.",
    },
  },
  // ── u20 ───────────────────────────────────────────────────
  {
    id: "pt-g-discurso-indireto", lang: "pt", cefr: "B2",
    title: { es: "El estilo indirecto", en: "Reported speech" },
    short: {
      es: "Disse que estava / tinha feito / ia fazer. Perguntou se… Los tiempos retroceden como en español.",
      en: "Disse que estava / tinha feito / ia fazer. Perguntou se… Tenses shift back after a past verb.",
    },
    rule: {
      es: "Con el verbo introductor en pasado, presente → imperfeito, perfeito → mais-que-perfeito, futuro → condicional o ia + infinitivo. También cambian los pronombres y los adverbios: hoje → naquele dia, amanhã → no dia seguinte.",
      en: "After a past reporting verb, present → imperfect, past → past perfect, future → conditional or ia + infinitive. Pronouns and time words change too: hoje → naquele dia, amanhã → no dia seguinte.",
    },
    table: { head: ["direto", "indireto"], rows: [["«Moro aqui.»", "Disse que morava lá."], ["«Vendi o carro.»", "Disse que tinha vendido o carro."], ["«Vou ligar amanhã.»", "Disse que ia ligar no dia seguinte."], ["«Você está bem?»", "Perguntou se eu estava bem."]] },
    examples: [
      { target: "O presidente afirmou que não haveria aumento de impostos.", gloss: { es: "El presidente afirmó que no habría aumento de impuestos.", en: "The president said there would be no tax rise." } },
      { target: "Ela me perguntou onde eu morava.", gloss: { es: "Me preguntó dónde vivía.", en: "She asked me where I lived." } },
    ],
    pitfalls: {
      es: "En el habla se oye «disse que vai», pero en un texto escrito usa «disse que ia».",
      en: "In speech you'll hear 'disse que vai', but in writing use 'disse que ia'.",
    },
  },
  {
    id: "pt-g-perfeito-composto", lang: "pt", cefr: "B2",
    title: { es: "«tenho feito»: el falso amigo gramatical", en: "'tenho feito': repeated action up to now" },
    short: {
      es: "tenho trabalhado = vengo trabajando / estoy trabajando (últimamente). «He trabajado» suele ser «trabalhei».",
      en: "tenho trabalhado = I've been working (lately). A one-off 'I've worked' is 'trabalhei'.",
    },
    rule: {
      es: "El pretérito perfeito composto (ter en presente + participio) expresa una acción repetida o continua que llega hasta el presente. No sirve para hechos puntuales: «já comi» (ya comí / he comido), no «já tenho comido».",
      en: "ter (present) + participle expresses something repeated or continuing up to now: tenho dormido mal (I've been sleeping badly). It's not for single completed events: 'já comi' (I've eaten), not 'tenho comido'.",
    },
    table: { head: ["sentido", "exemplo"], rows: [["repetido até agora", "Tenho ido à academia."], ["contínuo até agora", "Tem feito muito calor."], ["fato pontual", "Já fui a Paris."], ["experiência", "Nunca comi feijoada."]] },
    examples: [
      { target: "A gente tem se visto pouco ultimamente.", gloss: { es: "Últimamente nos hemos visto poco.", en: "We haven't seen much of each other lately." } },
      { target: "Você já viu esse filme?", gloss: { es: "¿Ya viste esa película?", en: "Have you seen this film?" } },
    ],
    pitfalls: {
      es: "«Hoy he desayunado tarde» = «Hoje tomei café tarde», no «hoje tenho tomado».",
      en: "'Have you ever…?' = 'Você já…?' + simple past: Você já foi ao Brasil?",
    },
  },
  // ── u21 ───────────────────────────────────────────────────
  {
    id: "pt-g-condicional-composto", lang: "pt", cefr: "B2",
    title: { es: "Pasado irreal: se tivesse…, teria…", en: "Unreal past: se tivesse…, teria…" },
    short: {
      es: "se + tivesse + participio, teria + participio (habla: tinha). Reproche: devia ter + participio.",
      en: "se + tivesse + participle, teria + participle (speech: tinha). Reproach: devia ter + participle.",
    },
    rule: {
      es: "Para lo que no ocurrió: si hubiera…, habría… En el habla es muy común usar tinha en lugar de teria (eu tinha ido). Para reprochar o lamentar: devia / deveria ter + participio, poderia ter + participio.",
      en: "For things that didn't happen: if I had…, I would have… Speech often uses tinha instead of teria (eu tinha ido). To reproach or regret: devia / deveria ter + participle (should have), poderia ter (could have).",
    },
    table: { head: ["parte", "exemplo"], rows: [["condição", "Se eu tivesse estudado…"], ["resultado", "…teria passado."], ["fala", "…tinha passado."], ["reprovação", "Você devia ter estudado."], ["possibilidade", "Podia ter sido pior."]] },
    examples: [
      { target: "Se tivéssemos saído antes, não teríamos pegado trânsito.", gloss: { es: "Si hubiéramos salido antes, no habríamos agarrado tráfico.", en: "If we'd left earlier, we wouldn't have hit traffic." } },
      { target: "Você podia ter me ligado!", gloss: { es: "¡Podrías haberme llamado!", en: "You could have called me!" } },
    ],
    pitfalls: {
      es: "Tras «se» nunca va condicional: «se eu teria sabido» es incorrecto.",
      en: "Never 'se eu teria': the if-clause takes tivesse.",
    },
  },
  {
    id: "pt-g-caso", lang: "pt", cefr: "B2",
    title: { es: "caso / se: dos maneras de poner condiciones", en: "caso / se: two ways to set conditions" },
    short: {
      es: "caso + presente de subjuntivo (caso chova) = se + futuro de subjuntivo (se chover).",
      en: "caso + present subjunctive (caso chova) = se + future subjunctive (se chover).",
    },
    rule: {
      es: "«caso» (en caso de que) va con presente de subjuntivo para el futuro y con imperfecto para lo hipotético. «se» va con futuro de subjuntivo (futuro) o imperfecto (hipótesis). Nunca «caso + futuro de subjuntivo».",
      en: "'caso' (in case, if) takes the present subjunctive for the future and the imperfect for hypotheses. 'se' takes the future subjunctive (future) or the imperfect (hypothetical). Never caso + future subjunctive.",
    },
    table: { head: ["", "caso", "se"], rows: [["futuro", "caso chova", "se chover"], ["hipótese", "caso chovesse", "se chovesse"], ["ser", "caso seja", "se for"]] },
    examples: [
      { target: "Caso haja algum problema, entre em contato.", gloss: { es: "En caso de que haya algún problema, póngase en contacto.", en: "Should there be any problem, get in touch." } },
      { target: "Se houver algum problema, me liga.", gloss: { es: "Si hay algún problema, llámame.", en: "If there's a problem, call me." } },
    ],
    pitfalls: {
      es: "«caso chover» es un error frecuente incluso entre nativos: caso chova / se chover.",
      en: "'caso chover' is a common slip, even among natives: caso chova / se chover.",
    },
  },
  // ── u22 ───────────────────────────────────────────────────
  {
    id: "pt-g-infinitivo-pessoal", lang: "pt", cefr: "B2",
    title: { es: "El infinitivo personal", en: "The personal infinitive" },
    short: {
      es: "Infinitivo con persona: para nós irmos, para eles saírem. Equivale a «para que + subjuntivo».",
      en: "An infinitive with person endings: para nós irmos, para eles saírem = so that we / they…",
    },
    rule: {
      es: "Es exclusivo del portugués: el infinitivo recibe -mos (nós) y -em (eles, vocês) cuando tiene un sujeto distinto o explícito. Aparece tras preposiciones (para, sem, antes de, depois de, ao) y con «é + adjetivo». Sustituye a menudo a «que + subjuntivo».",
      en: "Unique to Portuguese: the infinitive takes -mos (nós) and -em (eles, vocês) when it has its own subject. It follows prepositions (para, sem, antes de, depois de, ao) and 'é + adjective', often replacing 'que + subjunctive'.",
    },
    table: { head: ["", "sair", "fazer"], rows: [["eu", "sair", "fazer"], ["você / ele", "sair", "fazer"], ["nós", "sairmos", "fazermos"], ["vocês / eles", "saírem", "fazerem"]] },
    examples: [
      { target: "Antes de vocês saírem, fechem as janelas.", gloss: { es: "Antes de que salgan, cierren las ventanas.", en: "Before you leave, close the windows." } },
      { target: "É importante os alunos lerem mais.", gloss: { es: "Es importante que los alumnos lean más.", en: "It's important for students to read more." } },
    ],
    pitfalls: {
      es: "Con el mismo sujeto no hace falta conjugarlo: nós viemos para ver (no «para vermos», aunque se oye).",
      en: "With the same subject it's optional: nós viemos para ver (or vermos).",
    },
  },
  {
    id: "pt-g-relativos", lang: "pt", cefr: "B2",
    title: { es: "Relativos: que, quem, cujo, o qual, onde", en: "Relatives: que, quem, cujo, o qual, onde" },
    short: {
      es: "que (general), quem (personas tras preposición), cujo/a (cuyo/a), o/a qual, onde (lugar).",
      en: "que (general), quem (people after a preposition), cujo/a (whose), o/a qual (which), onde (where).",
    },
    rule: {
      es: "La preposición del verbo va delante del relativo: a pessoa de quem gosto, o filme a que assisti. «cujo» concuerda con lo poseído y nunca lleva artículo detrás. En el habla se evita «cujo» y se usa «que» + pronombre, pero por escrito es incorrecto.",
      en: "The verb's preposition goes before the relative: a pessoa de quem gosto, o filme a que assisti. 'cujo' agrees with the thing owned and never takes an article after it. Speech avoids cujo, but writing needs it.",
    },
    table: { head: ["relativo", "exemplo"], rows: [["que", "o livro que comprei"], ["quem", "a amiga de quem falei"], ["cujo", "o rapaz cujo pai é médico"], ["o qual", "a razão pela qual saí"], ["onde", "a cidade onde nasci"]] },
    examples: [
      { target: "Esse é o professor com quem aprendi português.", gloss: { es: "Ese es el profesor con quien aprendí portugués.", en: "That's the teacher I learned Portuguese with." } },
      { target: "É uma escritora cujos livros foram traduzidos.", gloss: { es: "Es una escritora cuyos libros fueron traducidos.", en: "She's a writer whose books have been translated." } },
    ],
    pitfalls: {
      es: "«cujo o» nunca: o autor cujo livro (sin artículo). Y «aonde» es solo con movimiento (aonde você vai?).",
      en: "Never 'cujo o': o autor cujo livro. And 'aonde' is only for direction (aonde você vai?).",
    },
  },
  // ── u23 ───────────────────────────────────────────────────
  {
    id: "pt-g-concessivas", lang: "pt", cefr: "B2",
    title: { es: "Concesión: embora, mesmo que, apesar de", en: "Concession: embora, mesmo que, apesar de" },
    short: {
      es: "embora / mesmo que / ainda que / a não ser que + subjuntivo; apesar de + sustantivo o infinitivo.",
      en: "embora / mesmo que / ainda que / a não ser que + subjunctive; apesar de + noun or infinitive.",
    },
    rule: {
      es: "«embora» siempre pide subjuntivo, aunque el hecho sea real (embora seja tarde = aunque es tarde). «apesar de» va con sustantivo (apesar do frio) o infinitivo, personal si hace falta (apesar de eles serem jovens).",
      en: "'embora' (although) always takes the subjunctive, even for real facts (embora seja tarde). 'apesar de' (despite) takes a noun (apesar do frio) or an infinitive, personal if needed (apesar de eles serem jovens).",
    },
    table: { head: ["conector", "exemplo"], rows: [["embora", "Embora esteja cansado, vou."], ["mesmo que", "Mesmo que chova, vamos."], ["a não ser que", "Vou, a não ser que chova."], ["apesar de", "Apesar do frio, saímos."]] },
    examples: [
      { target: "Embora o salário seja baixo, gosto do trabalho.", gloss: { es: "Aunque el sueldo es bajo, me gusta el trabajo.", en: "Although the pay is low, I like the job." } },
      { target: "Apesar de morarem longe, eles vêm sempre.", gloss: { es: "A pesar de vivir lejos, vienen siempre.", en: "Despite living far away, they always come." } },
    ],
    pitfalls: {
      es: "«embora» con indicativo es un error frecuente: embora é → embora seja.",
      en: "Don't use the indicative after embora: 'embora é' is wrong.",
    },
  },
  {
    id: "pt-g-conectores-argumentativos", lang: "pt", cefr: "B2",
    title: { es: "Conectores para argumentar", en: "Connectors for argument" },
    short: {
      es: "Añadir: além disso. Oponer: no entanto, contudo. Concluir: portanto. Explicar: ou seja.",
      en: "Adding: além disso. Contrasting: no entanto, contudo. Concluding: portanto. Rephrasing: ou seja.",
    },
    rule: {
      es: "Organizan un texto o una intervención. «porém», «contudo» y «todavia» equivalen a «sin embargo» (todavia ≠ todavía). «entretanto» casi siempre es «sin embargo». «aliás» añade o corrige (por cierto, mejor dicho).",
      en: "They structure a text or a contribution. porém, contudo and todavia all mean 'however'. entretanto usually means 'however' too. aliás adds or corrects (by the way, or rather).",
    },
    table: { head: ["função", "conectores"], rows: [["adição", "além disso, aliás, também"], ["oposição", "mas, porém, contudo, no entanto"], ["conclusão", "portanto, logo, por isso"], ["explicação", "ou seja, isto é, quer dizer"], ["exemplo", "por exemplo, como"]] },
    examples: [
      { target: "O projeto é caro; no entanto, traz muitos benefícios.", gloss: { es: "El proyecto es caro; sin embargo, trae muchos beneficios.", en: "The project is expensive; however, it brings many benefits." } },
      { target: "Ele mora a dois quarteirões, ou seja, bem pertinho.", gloss: { es: "Vive a dos cuadras, o sea, muy cerquita.", en: "He lives two blocks away, in other words really close." } },
    ],
    pitfalls: {
      es: "Falso amigo: «todavia» = sin embargo, no «todavía» (que es «ainda»).",
      en: "'logo' can mean 'therefore' as well as 'soon': read the context.",
    },
  },
  // ── u24 ───────────────────────────────────────────────────
  {
    id: "pt-g-fala-coloquial", lang: "pt", cefr: "B2",
    title: { es: "El portugués hablado de Brasil", en: "Spoken Brazilian Portuguese" },
    short: {
      es: "tô, tá, cê, pra, pro, né, a gente, vi ele: rasgos normales del habla, no de la escritura formal.",
      en: "tô, tá, cê, pra, pro, né, a gente, vi ele: normal in speech, not in formal writing.",
    },
    rule: {
      es: "El Brasil hablado se aleja bastante de la norma escrita: se acortan formas (tô, cê, pra), «a gente» reemplaza a «nós», el pronombre sujeto hace de objeto (vi ele) y el pronombre va delante del verbo (me dá). Entenderlo es clave; usarlo depende del registro.",
      en: "Spoken Brazilian Portuguese differs a lot from the written standard: forms shrink (tô, cê, pra), 'a gente' replaces nós, subject pronouns act as objects (vi ele) and pronouns go before the verb (me dá). Understanding it is essential; using it depends on register.",
    },
    table: { head: ["norma", "fala"], rows: [["Estou cansado.", "Tô cansado."], ["Você vai?", "Cê vai?"], ["para o centro", "pro centro"], ["Eu o vi.", "Eu vi ele."], ["Dê-me isso.", "Me dá isso."]] },
    examples: [
      { target: "Cê tá a fim de ir pra praia?", gloss: { es: "¿Tienes ganas de ir a la playa?", en: "Fancy going to the beach?" } },
      { target: "Tá bom, a gente se fala amanhã, né?", gloss: { es: "Bueno, hablamos mañana, ¿no?", en: "OK, we'll talk tomorrow, right?" } },
    ],
    pitfalls: {
      es: "No escribas «tô» o «cê» en un correo de trabajo: suena demasiado informal.",
      en: "Don't write 'tô' or 'cê' in a work email: it's far too casual.",
    },
  },
  {
    id: "pt-g-diminutivos", lang: "pt", cefr: "B2",
    title: { es: "Diminutivos: -inho, -zinho", en: "Diminutives: -inho, -zinho" },
    short: {
      es: "-inho/-inha (casinha) o -zinho/-zinha (cafezinho). Cariño, cortesía o intensidad: rapidinho, pertinho.",
      en: "-inho/-inha (casinha) or -zinho/-zinha (cafezinho). Affection, politeness or intensity: rapidinho, pertinho.",
    },
    rule: {
      es: "Se añade -inho a palabras terminadas en -o / -a átonas (livro → livrinho) y -zinho tras vocal tónica, diptongo, nasal o consonante (café → cafezinho, pão → pãozinho, flor → florzinha). En plural: pãezinhos, florezinhas.",
      en: "Add -inho to words ending in unstressed -o / -a (livro → livrinho) and -zinho after a stressed vowel, diphthong, nasal or consonant (café → cafezinho, pão → pãozinho, flor → florzinha). Plural: pãezinhos.",
    },
    table: { head: ["palavra", "diminutivo"], rows: [["livro", "livrinho"], ["casa", "casinha"], ["café", "cafezinho"], ["pão", "pãozinho"], ["agora", "agorinha"]] },
    examples: [
      { target: "Só um minutinho, por favor.", gloss: { es: "Solo un minutito, por favor.", en: "Just a moment, please." } },
      { target: "A casa fica pertinho da praia.", gloss: { es: "La casa queda cerquita de la playa.", en: "The house is really close to the beach." } },
    ],
    pitfalls: {
      es: "El diminutivo no siempre achica: «um cafezinho» es un café normal, ofrecido con amabilidad.",
      en: "The diminutive isn't always small: 'um cafezinho' is just a coffee, offered warmly.",
    },
  },
];
