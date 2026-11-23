import type { GrammarPoint } from "../schema";

// Grammar points for Portuguese units u09–u16 (content v2.1). Same shape as grammar1.ts.
export const grammar2: GrammarPoint[] = [
  // ── u09 ───────────────────────────────────────────────────
  {
    id: "pt-g-demonstrativos", lang: "pt", cefr: "A1.2",
    title: { es: "Demostrativos: este, esse, aquele · isto, isso, aquilo", en: "Demonstratives: este, esse, aquele · isto, isso, aquilo" },
    short: {
      es: "este (aquí), esse (ahí), aquele (allá); isto / isso / aquilo para cosas sin nombre. En Brasil se usa sobre todo «esse».",
      en: "este (here), esse (there, near you), aquele (over there); isto / isso / aquilo for unnamed things.",
    },
    rule: {
      es: "Concuerdan con el sustantivo (esse livro, essa casa, esses livros). Las formas neutras isto, isso, aquilo no cambian. Se contraen con de y em: desse, nessa, daquilo.",
      en: "They agree with the noun (esse livro, essa casa, esses livros). The neuter isto, isso, aquilo never change. They merge with de and em: desse, nessa, daquilo.",
    },
    table: { head: ["", "m", "f", "neutro"], rows: [["aqui", "este", "esta", "isto"], ["aí", "esse", "essa", "isso"], ["lá / ali", "aquele", "aquela", "aquilo"]] },
    examples: [
      { target: "Quanto custa essa bolsa?", gloss: { es: "¿Cuánto cuesta esa cartera?", en: "How much is that handbag?" } },
      { target: "Não gosto disso.", gloss: { es: "No me gusta eso.", en: "I don't like that." } },
    ],
    pitfalls: {
      es: "El neutro es «isso», no «esso»: la i distingue la forma neutra.",
      en: "Use isso, not esse, for 'that' when there's no noun: O que é isso?",
    },
  },
  {
    id: "pt-g-plurais", lang: "pt", cefr: "A1.2",
    title: { es: "Plurales irregulares: -ão, -l, -m", en: "Irregular plurals: -ão, -l, -m" },
    short: {
      es: "-ão → -ões / -ães / -ãos; -l → -is (papel → papéis); -m → -ns (homem → homens).",
      en: "-ão → -ões / -ães / -ãos; -l → -is (papel → papéis); -m → -ns (homem → homens).",
    },
    rule: {
      es: "La mayoría de las palabras en -ão hacen -ões (limões, estações); algunas -ães (pães, cães, alemães) y otras -ãos (mãos, irmãos, cidadãos). Hay que aprenderlas. Las terminadas en -r, -s, -z añaden -es (flores, meses, luzes).",
      en: "Most -ão words take -ões (limões, estações); some -ães (pães, cães) and some -ãos (mãos, irmãos). Learn them as you go. Words in -r, -s, -z add -es (flores, meses, luzes).",
    },
    table: { head: ["singular", "plural"], rows: [["a estação", "as estações"], ["o pão", "os pães"], ["a mão", "as mãos"], ["o hotel", "os hotéis"], ["o jardim", "os jardins"], ["a flor", "as flores"]] },
    examples: [
      { target: "Os alemães e os italianos chegaram.", gloss: { es: "Llegaron los alemanes y los italianos.", en: "The Germans and the Italians have arrived." } },
      { target: "Os hotéis daqui são caros.", gloss: { es: "Los hoteles de aquí son caros.", en: "The hotels here are expensive." } },
    ],
    pitfalls: {
      es: "No copies el plural español: «os hoteles» es incorrecto; es «os hotéis».",
      en: "Don't just add -s to -l words: it's 'os hotéis', not 'os hotels'.",
    },
  },
  // ── u10 ───────────────────────────────────────────────────
  {
    id: "pt-g-preterito-regular", lang: "pt", cefr: "A2",
    title: { es: "Pretérito perfeito: verbos regulares", en: "Simple past: regular verbs" },
    short: {
      es: "-ar: -ei, -ou, -amos, -aram. -er: -i, -eu, -emos, -eram. -ir: -i, -iu, -imos, -iram.",
      en: "-ar: -ei, -ou, -amos, -aram. -er: -i, -eu, -emos, -eram. -ir: -i, -iu, -imos, -iram.",
    },
    rule: {
      es: "Equivale al pretérito indefinido español (hablé) y también a muchos «he hablado»: já comi = ya comí / ya he comido. En Brasil la forma de «nós» es igual en presente y pasado (falamos); en Portugal el pasado lleva tilde: falámos.",
      en: "It's the simple past (spoke) and also covers many English present perfects: já comi = I've already eaten. In Brazil the nós form is the same in present and past (falamos); Portugal writes falámos for the past.",
    },
    table: { head: ["", "falar", "comer", "abrir"], rows: [["eu", "falei", "comi", "abri"], ["você / ele", "falou", "comeu", "abriu"], ["nós", "falamos", "comemos", "abrimos"], ["vocês / eles", "falaram", "comeram", "abriram"]] },
    examples: [
      { target: "Ontem eu trabalhei até tarde.", gloss: { es: "Ayer trabajé hasta tarde.", en: "Yesterday I worked late." } },
      { target: "Eles abriram uma loja nova.", gloss: { es: "Abrieron una tienda nueva.", en: "They've opened a new shop." } },
    ],
    pitfalls: {
      es: "La 1.ª persona de -ar termina en -ei, no en -é: falei (no «falé»).",
      en: "Watch the spelling changes: ficar → fiquei, chegar → cheguei, começar → comecei.",
    },
  },
  {
    id: "pt-g-preterito-irregular", lang: "pt", cefr: "A2",
    title: { es: "Pretérito perfeito: ser, ir, fazer, ter, estar, poder", en: "Simple past: ser, ir, fazer, ter, estar, poder" },
    short: {
      es: "ser/ir: fui, foi, fomos, foram. fazer: fiz, fez. ter: tive, teve. estar: estive. poder: pude, pôde.",
      en: "ser/ir: fui, foi, fomos, foram. fazer: fiz, fez. ter: tive, teve. estar: estive. poder: pude, pôde.",
    },
    rule: {
      es: "Los verbos más frecuentes son irregulares, como en español. ser e ir comparten formas: fui ao Rio (fui a Río) / fui feliz (fui feliz). «pôde» (pudo) lleva circunflejo para distinguirlo de «pode» (puede).",
      en: "The most common verbs are irregular. ser and ir share their forms: fui ao Rio (I went to Rio) / fui feliz (I was happy). pôde (could) has a circumflex to tell it from pode (can).",
    },
    table: { head: ["", "eu", "ele / você", "eles"], rows: [["ser / ir", "fui", "foi", "foram"], ["fazer", "fiz", "fez", "fizeram"], ["ter", "tive", "teve", "tiveram"], ["estar", "estive", "esteve", "estiveram"], ["poder", "pude", "pôde", "puderam"], ["dizer", "disse", "disse", "disseram"]] },
    examples: [
      { target: "O que vocês fizeram no sábado?", gloss: { es: "¿Qué hicieron el sábado?", en: "What did you do on Saturday?" } },
      { target: "Ela teve que sair mais cedo.", gloss: { es: "Tuvo que salir más temprano.", en: "She had to leave early." } },
    ],
    pitfalls: {
      es: "«fiz» y «fez» no se parecen al español «hice / hizo»: memorízalos.",
      en: "Don't regularise: 'fazeu' and 'teu' don't exist; it's fez and teve.",
    },
  },
  {
    id: "pt-g-a-gente", lang: "pt", cefr: "A2",
    title: { es: "«a gente» = nosotros", en: "a gente = we" },
    short: {
      es: "En el habla, «a gente» reemplaza a «nós» y va con verbo en 3.ª persona singular: a gente vai.",
      en: "In speech, 'a gente' replaces nós and takes the he/she verb form: a gente vai = we're going.",
    },
    rule: {
      es: "Es la forma más común de decir «nosotros» en Brasil, en cualquier registro oral. Los adjetivos concuerdan con las personas: a gente está cansado / cansada / cansados. En textos formales se usa «nós».",
      en: "It's the most common spoken 'we' in Brazil. Adjectives agree with the real people: a gente está cansado / cansados. Formal writing uses nós.",
    },
    table: { head: ["nós", "a gente"], rows: [["nós somos", "a gente é"], ["nós fomos", "a gente foi"], ["nós temos", "a gente tem"], ["nós nos vemos", "a gente se vê"]] },
    examples: [
      { target: "A gente se vê amanhã!", gloss: { es: "¡Nos vemos mañana!", en: "See you tomorrow!" } },
      { target: "A gente mora aqui há dois anos.", gloss: { es: "Vivimos aquí desde hace dos años.", en: "We've lived here for two years." } },
    ],
    pitfalls: {
      es: "No mezcles: «a gente vamos» es muy coloquial y está mal visto; di «a gente vai» o «nós vamos».",
      en: "'a gente vamos' is stigmatised: say 'a gente vai' or 'nós vamos'.",
    },
  },
  // ── u11 ───────────────────────────────────────────────────
  {
    id: "pt-g-imperfeito", lang: "pt", cefr: "A2",
    title: { es: "Pretérito imperfeito", en: "The imperfect tense" },
    short: {
      es: "-ar: -ava (falava). -er/-ir: -ia (comia, abria). Irregulares: era, tinha, vinha, punha.",
      en: "-ar: -ava (falava). -er/-ir: -ia (comia, abria). Irregular: era, tinha, vinha, punha.",
    },
    rule: {
      es: "Se usa como el imperfecto español: descripciones, hábitos del pasado y acciones en curso. Casi todos los verbos son regulares; solo ser, ter, vir y pôr son irregulares.",
      en: "Used for descriptions, past habits ('used to') and actions in progress ('was doing'). Almost every verb is regular; only ser, ter, vir and pôr are irregular.",
    },
    table: { head: ["", "falar", "comer", "ser", "ter"], rows: [["eu", "falava", "comia", "era", "tinha"], ["você / ele", "falava", "comia", "era", "tinha"], ["nós", "falávamos", "comíamos", "éramos", "tínhamos"], ["vocês / eles", "falavam", "comiam", "eram", "tinham"]] },
    examples: [
      { target: "Antigamente as pessoas escreviam cartas.", gloss: { es: "Antes la gente escribía cartas.", en: "People used to write letters." } },
      { target: "Era uma vez uma menina…", gloss: { es: "Había una vez una niña…", en: "Once upon a time there was a girl…" } },
    ],
    pitfalls: {
      es: "Las formas de «nós» llevan tilde: falávamos, comíamos, éramos.",
      en: "The nós forms carry an accent: falávamos, comíamos, éramos.",
    },
  },
  {
    id: "pt-g-perfeito-imperfeito", lang: "pt", cefr: "A2",
    title: { es: "Perfeito o imperfeito", en: "Simple past or imperfect" },
    short: {
      es: "Imperfeito: descripción, hábito, acción de fondo. Perfeito: hechos puntuales que hacen avanzar la historia.",
      en: "Imperfect: description, habit, background. Simple past: single events that move the story on.",
    },
    rule: {
      es: "La distinción es la misma que en español. Cuando una acción interrumpe otra, la de fondo va en imperfeito y la que interrumpe en perfeito: eu dormia quando o telefone tocou.",
      en: "If you could say 'was doing' or 'used to', it's imperfect; if it's a completed event, simple past. When one action interrupts another: eu dormia quando o telefone tocou.",
    },
    table: { head: ["imperfeito", "perfeito"], rows: [["Fazia frio.", "Choveu ontem."], ["Eu sempre ia à praia.", "Fui à praia no sábado."], ["Eu lia…", "…quando ele chegou."]] },
    examples: [
      { target: "Quando eu morava em Recife, ia à praia todo dia.", gloss: { es: "Cuando vivía en Recife, iba a la playa todos los días.", en: "When I lived in Recife, I went to the beach every day." } },
      { target: "Eu estava saindo quando você ligou.", gloss: { es: "Estaba saliendo cuando llamaste.", en: "I was leaving when you called." } },
    ],
    pitfalls: {
      es: "«Estive dormindo» no sirve para la acción interrumpida: usa «estava dormindo».",
      en: "English 'was + -ing' is the imperfect: estava dormindo, not 'estive dormindo'.",
    },
  },
  // ── u12 ───────────────────────────────────────────────────
  {
    id: "pt-g-poder", lang: "pt", cefr: "A2",
    title: { es: "poder, precisar (de), querer + infinitivo", en: "poder, precisar (de), querer + infinitive" },
    short: {
      es: "posso, pode, podemos, podem + infinitivo. precisar + infinitivo / precisar de + sustantivo.",
      en: "posso, pode, podemos, podem + infinitive. precisar + verb / precisar de + noun.",
    },
    rule: {
      es: "«poder» es irregular en «eu» (posso). Para pedir permiso: posso…? / pode…? «precisar» lleva «de» delante de un sustantivo o pronombre (preciso de você), pero no delante de un infinitivo (preciso ir).",
      en: "poder is irregular for eu (posso). To ask permission: posso…? / pode…? precisar takes 'de' before a noun or pronoun (preciso de você = I need you), but not before a verb (preciso ir).",
    },
    table: { head: ["", "poder", "precisar"], rows: [["eu", "posso", "preciso"], ["você / ele / ela", "pode", "precisa"], ["nós", "podemos", "precisamos"], ["vocês / eles / elas", "podem", "precisam"]] },
    examples: [
      { target: "Posso abrir a janela?", gloss: { es: "¿Puedo abrir la ventana?", en: "Can I open the window?" } },
      { target: "A gente precisa de um táxi.", gloss: { es: "Necesitamos un taxi.", en: "We need a taxi." } },
    ],
    pitfalls: {
      es: "«pode» (puede) y «pôde» (pudo) se distinguen por el circunflejo.",
      en: "Don't add 'to': 'posso ir', never 'posso a ir'.",
    },
  },
  {
    id: "pt-g-comparativos", lang: "pt", cefr: "A2",
    title: { es: "Comparativos", en: "Comparatives" },
    short: {
      es: "mais / menos… (do) que; tão… quanto. melhor, pior, maior, menor.",
      en: "mais / menos… (do) que (more / less than); tão… quanto (as… as). melhor, pior, maior, menor.",
    },
    rule: {
      es: "«que» y «do que» se usan indistintamente: mais caro (do) que. La igualdad es tão + adjetivo + quanto (o como). Irregulares: bom → melhor, mau / ruim → pior, grande → maior, pequeno → menor.",
      en: "'que' and 'do que' are interchangeable: mais caro (do) que. Equality is tão + adjective + quanto. Irregular: bom → melhor, mau / ruim → pior, grande → maior, pequeno → menor.",
    },
    table: { head: ["", "comparativo"], rows: [["+", "mais barato (do) que"], ["−", "menos caro (do) que"], ["=", "tão caro quanto"], ["bom", "melhor"], ["ruim", "pior"], ["grande", "maior"]] },
    examples: [
      { target: "São Paulo é maior do que o Rio.", gloss: { es: "São Paulo es más grande que Río.", en: "São Paulo is bigger than Rio." } },
      { target: "Esse restaurante é tão bom quanto o outro.", gloss: { es: "Este restaurante es tan bueno como el otro.", en: "This restaurant is as good as the other one." } },
    ],
    pitfalls: {
      es: "«mais grande» no se usa para comparar: maior. Y «mais bom» es incorrecto: melhor.",
      en: "Never 'mais bom' or 'mais grande' when comparing: melhor, maior.",
    },
  },
  {
    id: "pt-g-por-para", lang: "pt", cefr: "A2",
    title: { es: "por y para", en: "por and para" },
    short: {
      es: "para = destino, finalidad, destinatario. por = paso, causa, intercambio, medio. por + o = pelo.",
      en: "para = destination, purpose, recipient. por = through, cause, exchange, means. por + o = pelo.",
    },
    rule: {
      es: "Funcionan casi como en español. La diferencia de forma: «por» se contrae con el artículo (pelo, pela, pelos, pelas). En el habla «para» se reduce a «pra» (pra mim, pro Rio).",
      en: "para: where to, what for, who for (vou para casa; é para você). por: through, because of, in exchange for (passei por Lisboa; obrigado pela ajuda). por + article = pelo/pela; in speech para → pra.",
    },
    table: { head: ["", "exemplo"], rows: [["para (destino)", "Vou para o trabalho."], ["para (finalidade)", "Estudo para viajar."], ["por (lugar)", "Passei pela praça."], ["por (causa)", "Obrigado pelo café."], ["por (troca)", "Paguei vinte reais por isso."]] },
    examples: [
      { target: "Esse presente é pra você.", gloss: { es: "Este regalo es para ti.", en: "This present is for you." } },
      { target: "Ele viajou pela Europa durante um mês.", gloss: { es: "Viajó por Europa durante un mes.", en: "He travelled around Europe for a month." } },
    ],
    pitfalls: {
      es: "«obrigado por o» nunca: siempre pelo / pela.",
      en: "Thanks for = obrigado por / pelo: 'obrigado para' is wrong.",
    },
  },
  // ── u13 ───────────────────────────────────────────────────
  {
    id: "pt-g-doer", lang: "pt", cefr: "B1",
    title: { es: "Decir qué duele: estar com dor de, doer", en: "Saying what hurts: estar com dor de, doer" },
    short: {
      es: "Estou com dor de cabeça. / Minha perna está doendo. «doer» concuerda con la parte del cuerpo.",
      en: "Estou com dor de cabeça. / Minha perna está doendo. doer agrees with the body part.",
    },
    rule: {
      es: "La forma más natural es estar com dor de + parte del cuerpo (sin artículo). También: la parte del cuerpo como sujeto de doer: meu pé dói, minhas costas doem. «Me dói a cabeça» existe, pero en Brasil es menos habitual (en Portugal se oye mucho «dói-me a cabeça»).",
      en: "The most natural phrase is estar com dor de + body part. Or make the body part the subject of doer: meu pé dói (my foot hurts), minhas costas doem (my back hurts).",
    },
    table: { head: ["", "exemplo"], rows: [["estar com dor de", "Estou com dor de dente."], ["doer (sing.)", "Meu joelho dói."], ["doer (pl.)", "Meus pés doem."], ["ter dor", "Tenho dor nas costas."]] },
    examples: [
      { target: "Ele está com dor de barriga.", gloss: { es: "Le duele la panza.", en: "He has a stomach ache." } },
      { target: "Meus olhos estão doendo.", gloss: { es: "Me duelen los ojos.", en: "My eyes hurt." } },
    ],
    pitfalls: {
      es: "Con plural, el verbo va en plural: as costas doem.",
      en: "doer agrees with the body part, not with you: meus pés doem.",
    },
  },
  {
    id: "pt-g-imperativo", lang: "pt", cefr: "B1",
    title: { es: "El imperativo", en: "The imperative" },
    short: {
      es: "Formal: fale, coma, abra (subjuntivo). Con você en el habla: fala, come, abre. Negativo: não fale.",
      en: "Formal: fale, coma, abra (subjunctive forms). With você in speech: fala, come, abre. Negative: não fale.",
    },
    rule: {
      es: "La norma usa el presente de subjuntivo para você / o senhor: fale, coma, faça, vá. En el habla brasileña, con amigos, se usa la forma de «ele»: fala, come, faz, vai. Los carteles e instrucciones usan siempre la forma formal.",
      en: "Standard Portuguese uses the present subjunctive for você / o senhor: fale, coma, faça, vá. In Brazilian speech friends use the ele form: fala, come, faz, vai. Signs and instructions always use the formal one.",
    },
    table: { head: ["", "fala / speech", "norma / formal"], rows: [["falar", "fala", "fale"], ["beber", "bebe", "beba"], ["fazer", "faz", "faça"], ["ir", "vai", "vá"], ["vir", "vem", "venha"]] },
    examples: [
      { target: "Não fume aqui, por favor.", gloss: { es: "No fume aquí, por favor.", en: "Please don't smoke here." } },
      { target: "Vem cá, olha isso!", gloss: { es: "¡Ven, mira esto!", en: "Come here, look at this!" } },
    ],
    pitfalls: {
      es: "Con el senhor / a senhora usa siempre la forma formal: «Sente-se, por favor».",
      en: "With o senhor / a senhora always use the formal form: 'Sente-se, por favor'.",
    },
  },
  {
    id: "pt-g-ter-que", lang: "pt", cefr: "B1",
    title: { es: "Obligación y consejo: ter que, dever, deveria", en: "Obligation and advice: ter que, dever, deveria" },
    short: {
      es: "ter que / ter de + infinitivo = tener que. dever = deber. deveria / devia = deberías. É melhor…",
      en: "ter que / ter de = have to. dever = must. deveria / devia = should. É melhor… = you'd better.",
    },
    rule: {
      es: "ter que y ter de son equivalentes (ter de es más común en Portugal). Para aconsejar con suavidad se usa el condicional deveria o, más coloquial, el imperfeito devia.",
      en: "ter que and ter de mean the same (ter de is more common in Portugal). For gentle advice use the conditional deveria or, more casually, devia.",
    },
    table: { head: ["", "exemplo"], rows: [["ter que", "Tenho que acordar cedo."], ["dever", "Você deve descansar."], ["deveria", "Você deveria ir ao médico."], ["é melhor", "É melhor não sair hoje."]] },
    examples: [
      { target: "A gente tem que pagar o aluguel amanhã.", gloss: { es: "Tenemos que pagar el alquiler mañana.", en: "We have to pay the rent tomorrow." } },
      { target: "Você devia beber mais água.", gloss: { es: "Deberías tomar más agua.", en: "You should drink more water." } },
    ],
    pitfalls: {
      es: "No olvides «que» o «de»: «tenho trabalhar» es incorrecto.",
      en: "Don't drop que / de: 'tenho trabalhar' is wrong; 'tenho que trabalhar'.",
    },
  },
  // ── u14 ───────────────────────────────────────────────────
  {
    id: "pt-g-futuro", lang: "pt", cefr: "B1",
    title: { es: "El futuro: ir + infinitivo y futuro do presente", en: "The future: ir + infinitive and the simple future" },
    short: {
      es: "Habla: vou fazer. Escritura formal: farei, fará. Terminaciones: -ei, -á, -emos, -ão.",
      en: "Speech: vou fazer. Formal writing: farei, fará. Endings: -ei, -á, -emos, -ão.",
    },
    rule: {
      es: "El futuro simple se forma con el infinitivo + -ei, -á, -emos, -ão. En Brasil casi solo aparece por escrito o en contextos formales. Irregulares: fazer → farei, dizer → direi, trazer → trarei.",
      en: "The simple future is infinitive + -ei, -á, -emos, -ão. In Brazil it's mostly written or formal. Irregular: fazer → farei, dizer → direi, trazer → trarei.",
    },
    table: { head: ["", "falar", "fazer"], rows: [["eu", "falarei", "farei"], ["você / ele", "falará", "fará"], ["nós", "falaremos", "faremos"], ["vocês / eles", "falarão", "farão"]] },
    examples: [
      { target: "O evento será realizado no dia dez.", gloss: { es: "El evento se realizará el día diez.", en: "The event will be held on the tenth." } },
      { target: "Amanhã vou falar com o diretor.", gloss: { es: "Mañana voy a hablar con el director.", en: "Tomorrow I'm going to talk to the director." } },
    ],
    pitfalls: {
      es: "«falarão» (hablarán) no es «falaram» (hablaron): el acento cae en otra sílaba.",
      en: "falarão (they will speak) ≠ falaram (they spoke): different stress and meaning.",
    },
  },
  {
    id: "pt-g-pronomes-objeto", lang: "pt", cefr: "B1",
    title: { es: "Pronombres de objeto: o, a, lhe (y la lengua hablada)", en: "Object pronouns: o, a, lhe (and how people really speak)" },
    short: {
      es: "Directo: o, a, os, as. Indirecto: lhe, lhes. En el habla: vi ele, te dei, pra ele.",
      en: "Direct: o, a, os, as. Indirect: lhe, lhes. In speech: vi ele, te dei, pra ele.",
    },
    rule: {
      es: "En la norma, el objeto directo es o / a (eu o vi) y el indirecto lhe (eu lhe disse). En el Brasil hablado se usa el pronombre sujeto (vi ele) y «para ele» (disse pra ele); «te» sirve para você. Tras -r, -s, -z, o / a pasan a lo / la: vou vê-lo.",
      en: "Standard: direct o / a (eu o vi = I saw him), indirect lhe (eu lhe disse = I told him). Spoken Brazilian uses the subject pronoun (vi ele) and 'para ele'; 'te' works for você. After -r, -s, -z, o / a become lo / la: vou vê-lo.",
    },
    table: { head: ["", "norma", "fala"], rows: [["him", "Eu o vi.", "Eu vi ele."], ["her", "Eu a convidei.", "Convidei ela."], ["to him", "Eu lhe disse.", "Disse pra ele."], ["you", "Eu o vi. / Te vi.", "Te vi."]] },
    examples: [
      { target: "Vou convidá-la para o jantar.", gloss: { es: "Voy a invitarla a la cena.", en: "I'm going to invite her to dinner." } },
      { target: "Eu te ligo mais tarde.", gloss: { es: "Te llamo más tarde.", en: "I'll call you later." } },
    ],
    pitfalls: {
      es: "«lhe» es solo objeto indirecto: «eu lhe vi» es incorrecto en la norma (eu o vi).",
      en: "Don't use lhe as a direct object: 'eu lhe vi' is wrong in standard Portuguese.",
    },
  },
  // ── u15 ───────────────────────────────────────────────────
  {
    id: "pt-g-subjuntivo-presente", lang: "pt", cefr: "B1",
    title: { es: "Presente de subjuntivo", en: "The present subjunctive" },
    short: {
      es: "Raíz de «eu» + -e (-ar) / -a (-er, -ir): fale, coma, faça. Irregulares: seja, esteja, vá, saiba, queira.",
      en: "eu stem + -e (-ar) / -a (-er, -ir): fale, coma, faça. Irregular: seja, esteja, vá, saiba, queira.",
    },
    rule: {
      es: "Se usa tras expresiones de deseo, emoción, duda, necesidad o valoración + que (espero que, tomara que, é importante que), igual que en español. Se forma a partir de la 1.ª persona del presente: tenho → tenha, digo → diga.",
      en: "Used after wishes, feelings, doubt, necessity and opinions + que (espero que, tomara que, é importante que). Built from the eu present form: tenho → tenha, digo → diga.",
    },
    table: { head: ["", "falar", "fazer", "ser"], rows: [["eu", "fale", "faça", "seja"], ["você / ele", "fale", "faça", "seja"], ["nós", "falemos", "façamos", "sejamos"], ["vocês / eles", "falem", "façam", "sejam"]] },
    examples: [
      { target: "Tomara que faça sol amanhã.", gloss: { es: "Ojalá haga sol mañana.", en: "Hopefully it'll be sunny tomorrow." } },
      { target: "É bom que vocês saibam isso.", gloss: { es: "Es bueno que lo sepan.", en: "It's good that you know this." } },
    ],
    pitfalls: {
      es: "«ojalá» se dice «tomara que» o «oxalá», siempre con subjuntivo.",
      en: "'I hope that' = espero que + subjunctive: espero que você venha (not 'vem').",
    },
  },
  {
    id: "pt-g-achar-que", lang: "pt", cefr: "B1",
    title: { es: "Opinión: acho que + indicativo / não acho que + subjuntivo", en: "Opinions: acho que + indicative / não acho que + subjunctive" },
    short: {
      es: "acho que é (indicativo); não acho que seja, duvido que seja, talvez seja (subjuntivo).",
      en: "acho que é (indicative); não acho que seja, duvido que seja, talvez seja (subjunctive).",
    },
    rule: {
      es: "Cuando afirmas una opinión, indicativo; cuando la niegas o dudas, subjuntivo, como en español. «talvez» delante del verbo pide subjuntivo.",
      en: "Stating a belief takes the indicative; denying or doubting it takes the subjunctive. 'talvez' (maybe) before the verb takes the subjunctive.",
    },
    table: { head: ["indicativo", "subjuntivo"], rows: [["Acho que ele vem.", "Não acho que ele venha."], ["Tenho certeza que é.", "Duvido que seja."], ["Com certeza ele sabe.", "Talvez ele saiba."]] },
    examples: [
      { target: "Penso que o filme é longo demais.", gloss: { es: "Creo que la película es demasiado larga.", en: "I think the film is too long." } },
      { target: "Talvez a gente chegue atrasado.", gloss: { es: "Tal vez lleguemos tarde.", en: "We might arrive late." } },
    ],
    pitfalls: {
      es: "«talvez» detrás del verbo va con indicativo: ele vem, talvez.",
      en: "Don't use the subjunctive after a positive 'acho que': acho que é, not 'acho que seja'.",
    },
  },
  // ── u16 ───────────────────────────────────────────────────
  {
    id: "pt-g-participios", lang: "pt", cefr: "B1",
    title: { es: "Participios irregulares", en: "Irregular past participles" },
    short: {
      es: "feito, dito, visto, escrito, aberto, posto, vindo, ganho, pago, gasto.",
      en: "feito, dito, visto, escrito, aberto, posto, vindo, ganho, pago, gasto.",
    },
    rule: {
      es: "Los regulares terminan en -ado / -ido (falado, comido). Algunos verbos tienen participio irregular, y otros tienen dos: con ter el regular (tinha aceitado) y con ser / estar el corto (foi aceito); con ganhar, gastar y pagar el corto es muy frecuente también con ter (tinha pago, tinha ganho).",
      en: "Regular participles end in -ado / -ido (falado, comido). Some verbs are irregular, and some have two: the long one with ter (tinha aceitado), the short one with ser / estar (foi aceito); with ganhar, gastar and pagar the short one is very common with ter too (tinha pago, tinha ganho).",
    },
    table: { head: ["infinitivo", "particípio"], rows: [["fazer", "feito"], ["dizer", "dito"], ["ver", "visto"], ["vir", "vindo"], ["escrever", "escrito"], ["pôr", "posto"]] },
    examples: [
      { target: "Eu já tinha visto esse filme.", gloss: { es: "Ya había visto esa película.", en: "I'd already seen that film." } },
      { target: "A carta foi escrita em mil novecentos e vinte.", gloss: { es: "La carta fue escrita en mil novecientos veinte.", en: "The letter was written in nineteen twenty." } },
    ],
    pitfalls: {
      es: "«visto» (de ver) y «vindo» (de vir) se confunden fácilmente.",
      en: "visto comes from ver (see), vindo from vir (come).",
    },
  },
  {
    id: "pt-g-mais-que-perfeito", lang: "pt", cefr: "B1",
    title: { es: "Pluscuamperfecto: tinha + participio", en: "Past perfect: tinha + participle" },
    short: {
      es: "tinha / havia + participio = había + participio: quando cheguei, ele já tinha saído.",
      en: "tinha / havia + participle = had done: quando cheguei, ele já tinha saído.",
    },
    rule: {
      es: "Expresa una acción anterior a otra del pasado. En la conversación se usa «ter»; «haver» es más formal. Existe también una forma simple literaria (falara, fizera), que verás en textos escritos.",
      en: "It expresses an action before another past action. Speech uses ter; haver is more formal. There's also a literary one-word form (falara, fizera) you'll meet in books.",
    },
    table: { head: ["", "ter + particípio"], rows: [["eu", "tinha saído"], ["você / ele / ela", "tinha feito"], ["nós", "tínhamos visto"], ["vocês / eles / elas", "tinham chegado"]] },
    examples: [
      { target: "Ela disse que já tinha almoçado.", gloss: { es: "Dijo que ya había almorzado.", en: "She said she'd already had lunch." } },
      { target: "Nunca tínhamos estado no Pantanal.", gloss: { es: "Nunca habíamos estado en el Pantanal.", en: "We'd never been to the Pantanal." } },
    ],
    pitfalls: {
      es: "El participio no concuerda con ter: elas tinham saído (no «saídas»).",
      en: "The participle doesn't agree after ter: elas tinham saído.",
    },
  },
  {
    id: "pt-g-conectores-narrativos", lang: "pt", cefr: "B1",
    title: { es: "Conectores para contar historias", en: "Linking words for telling stories" },
    short: {
      es: "primeiro, depois, então, de repente, enquanto, logo que, no fim / afinal.",
      en: "primeiro, depois, então, de repente, enquanto, logo que, no fim / afinal.",
    },
    rule: {
      es: "Ordenan el relato y marcan el tiempo. «enquanto» (mientras) suele ir con imperfeito; «logo que» / «assim que» (en cuanto) con perfeito. «afinal» también significa «a fin de cuentas».",
      en: "They order a story and mark time. enquanto (while) usually takes the imperfect; logo que / assim que (as soon as) the simple past. afinal also means 'after all'.",
    },
    table: { head: ["función", "conectores"], rows: [["início", "primeiro, no começo"], ["sequência", "depois, então, em seguida"], ["surpresa", "de repente"], ["simultâneo", "enquanto"], ["final", "no fim, afinal"]] },
    examples: [
      { target: "Assim que eu cheguei, começou a chover.", gloss: { es: "En cuanto llegué, empezó a llover.", en: "As soon as I arrived, it started to rain." } },
      { target: "No começo foi difícil, mas no fim deu tudo certo.", gloss: { es: "Al principio fue difícil, pero al final todo salió bien.", en: "It was hard at first, but in the end it all worked out." } },
    ],
    pitfalls: {
      es: "«enquanto» se escribe junto: em quanto es «en cuánto».",
      en: "'então' means 'so / then', not 'meanwhile' (enquanto isso).",
    },
  },
];
