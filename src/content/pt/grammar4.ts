import type { GrammarPoint } from "../schema";

// Grammar points for Portuguese units u25–u30 (C1) (content v2.1). Same shape as grammar1.ts.
export const grammar4: GrammarPoint[] = [
  // ── u25 ───────────────────────────────────────────────────
  {
    id: "pt-g-nominalizacao", lang: "pt", cefr: "C1",
    title: { es: "El estilo nominal en textos formales", en: "The nominal style in formal texts" },
    short: {
      es: "verbo simple → verbo de apoyo + sustantivo: pagar → efetuar o pagamento; começar → dar início a.",
      en: "simple verb → light verb + noun: pagar → efetuar o pagamento; começar → dar início a.",
    },
    rule: {
      es: "Contratos, correos corporativos y documentos oficiales prefieren nominalizar: realizar, efetuar, proceder a, dar início a, tomar uma decisão. Da un tono impersonal y formal; en exceso vuelve el texto pesado.",
      en: "Contracts, corporate emails and official documents like to nominalise: realizar, efetuar, proceder a, dar início a, tomar uma decisão. It sounds impersonal and formal; overdone, it makes text heavy.",
    },
    table: { head: ["verbo", "estilo nominal"], rows: [["pagar", "efetuar o pagamento"], ["entregar", "realizar a entrega"], ["começar", "dar início a"], ["cancelar", "proceder ao cancelamento"], ["analisar", "fazer uma análise"]] },
    examples: [
      { target: "A empresa deu início às obras em março.", gloss: { es: "La empresa dio inicio a las obras en marzo.", en: "The company began the works in March." } },
      { target: "Solicitamos que seja efetuada a devolução do valor.", gloss: { es: "Solicitamos que se efectúe la devolución del importe.", en: "We request that the amount be refunded." } },
    ],
    pitfalls: {
      es: "No mezcles registros: «efetuar o pagamento» con «a gente» o «pra» suena incoherente.",
      en: "Don't mix registers: 'efetuar o pagamento' next to 'a gente' or 'pra' sounds odd.",
    },
  },
  {
    id: "pt-g-regencia-formal", lang: "pt", cefr: "C1",
    title: { es: "Régimen de verbos formales (y la crase)", en: "Verb + preposition in formal Portuguese (and the crase)" },
    short: {
      es: "proceder a, referir-se a, visar a (= aspirar), aspirar a, caber a: con femenino + artículo, crase (à).",
      en: "proceder a, referir-se a, visar a (= aim at), aspirar a, caber a: with feminine + article, crase (à).",
    },
    rule: {
      es: "La norma exige la preposición que rige cada verbo. Si el complemento es femenino con artículo, a + a = à. En el habla brasileña muchas de estas preposiciones se omiten (visa a redução), lo que la norma escrita considera desvío.",
      en: "The written standard requires each verb's preposition. If the complement is feminine with an article, a + a = à. Brazilian speech often drops these (visa a redução), which careful writing treats as an error.",
    },
    table: { head: ["verbo", "exemplo"], rows: [["proceder a", "proceder à leitura"], ["referir-se a", "refiro-me à carta"], ["visar a", "visa ao lucro"], ["aspirar a", "aspira à vaga"], ["caber a", "cabe à diretoria"]] },
    examples: [
      { target: "O projeto visa à inclusão digital.", gloss: { es: "El proyecto apunta a la inclusión digital.", en: "The project aims at digital inclusion." } },
      { target: "Cabe à empresa informar os clientes.", gloss: { es: "Le corresponde a la empresa informar a los clientes.", en: "It's up to the company to inform customers." } },
    ],
    pitfalls: {
      es: "«visar» sin preposición significa «apuntar (un arma)» o «firmar (un visado)»: visar o alvo, visar o documento.",
      en: "Without a preposition 'visar' means 'to aim at a target' or 'to sign off a document'.",
    },
  },
  // ── u26 ───────────────────────────────────────────────────
  {
    id: "pt-g-atenuacao", lang: "pt", cefr: "C1",
    title: { es: "Matizar: atenuación y prudencia", en: "Hedging and cautious claims" },
    short: {
      es: "estima-se que, ao que tudo indica, tudo leva a crer que, é provável que + subj., futuro del pretérito (teria).",
      en: "estima-se que, ao que tudo indica, tudo leva a crer que, é provável que + subj., conditional (teria).",
    },
    rule: {
      es: "Textos científicos y periodísticos evitan afirmar de forma absoluta. Se usan verbos impersonales con «se», expresiones de indicio y el condicional para hechos no confirmados (o suspeito teria fugido = según se dice, huyó).",
      en: "Scientific and news writing avoids absolute claims. It uses impersonal 'se' verbs, evidence phrases and the conditional for unconfirmed facts (o suspeito teria fugido = the suspect reportedly fled).",
    },
    table: { head: ["recurso", "exemplo"], rows: [["impessoal", "Acredita-se que…"], ["indício", "Ao que tudo indica, …"], ["probabilidade", "É provável que seja…"], ["não confirmado", "Teria havido fraude."]] },
    examples: [
      { target: "Tudo leva a crer que a economia vai crescer.", gloss: { es: "Todo indica que la economía va a crecer.", en: "Everything suggests the economy will grow." } },
      { target: "O incêndio teria começado na cozinha.", gloss: { es: "El incendio habría empezado en la cocina.", en: "The fire apparently started in the kitchen." } },
    ],
    pitfalls: {
      es: "«é provável que» pide subjuntivo: é provável que chova (no «chove»).",
      en: "'é provável que' takes the subjunctive: é provável que chova.",
    },
  },
  {
    id: "pt-g-participio-duplo", lang: "pt", cefr: "C1",
    title: { es: "Participios dobles: aceitado / aceito", en: "Double participles: aceitado / aceito" },
    short: {
      es: "Regular con ter / haver (tinha aceitado); corto con ser / estar (foi aceito). pago, ganho, gasto: casi siempre cortos.",
      en: "Regular with ter / haver (tinha aceitado); short with ser / estar (foi aceito). pago, ganho, gasto: almost always short.",
    },
    rule: {
      es: "Algunos verbos tienen un participio regular (-ado, -ido) y otro irregular. El regular va con los tiempos compuestos (ter / haver); el irregular, con la pasiva y como adjetivo (ser / estar / ficar). En Portugal «aceite» en lugar de «aceito».",
      en: "Some verbs have a regular participle (-ado, -ido) and an irregular one. The regular one goes with compound tenses (ter / haver); the irregular one with the passive and as an adjective (ser / estar / ficar). Portugal says 'aceite' for 'aceito'.",
    },
    table: { head: ["verbo", "ter / haver", "ser / estar"], rows: [["aceitar", "aceitado", "aceito"], ["entregar", "entregado", "entregue"], ["imprimir", "imprimido", "impresso"], ["matar", "matado", "morto"], ["pagar", "pago", "pago"]] },
    examples: [
      { target: "O pedido já foi entregue.", gloss: { es: "El pedido ya fue entregado.", en: "The order has already been delivered." } },
      { target: "Eu já tinha pago a conta.", gloss: { es: "Yo ya había pagado la cuenta.", en: "I'd already paid the bill." } },
    ],
    pitfalls: {
      es: "«foi entregado» suena mal: con ser se usa «entregue».",
      en: "'foi entregado' sounds wrong: with ser use 'entregue'.",
    },
  },
  // ── u27 ───────────────────────────────────────────────────
  {
    id: "pt-g-colocacao-pronominal", lang: "pt", cefr: "C1",
    title: { es: "Colocación de los pronombres átonos", en: "Placing unstressed pronouns" },
    short: {
      es: "Norma: nunca al inicio (disse-me); delante tras não, que, quem, já… Habla brasileña: casi siempre delante.",
      en: "Standard: never first (disse-me); before the verb after não, que, quem, já… Brazilian speech: nearly always first.",
    },
    rule: {
      es: "Hay tres posiciones: próclise (antes: não me disse), ênclise (después: disse-me) y mesóclise (dentro: dir-me-á). La norma pide ênclise al inicio de frase y próclise tras palabras atractoras (negación, relativos, interrogativos, conjunciones subordinantes, algunos adverbios). Tras infinitivo en -r: fazê-lo, vendê-la.",
      en: "There are three positions: proclisis (before: não me disse), enclisis (after: disse-me) and mesoclisis (inside: dir-me-á). The standard uses enclisis at the start of a sentence and proclisis after attractor words (negatives, relatives, question words, subordinating conjunctions, some adverbs). After an -r infinitive: fazê-lo, vendê-la.",
    },
    steps: [
      { es: "¿Hay una palabra atractora antes del verbo? → pronombre delante.", en: "Is there an attractor word before the verb? → pronoun first." },
      { es: "¿El verbo abre la frase? → pronombre detrás, con guion.", en: "Does the verb start the sentence? → pronoun after, hyphenated." },
      { es: "¿Futuro o condicional sin atractor? → mesóclise (ou reformula).", en: "Future or conditional with no attractor? → mesoclisis (or rephrase)." },
    ],
    table: { head: ["contexto", "norma", "fala BR"], rows: [["início", "Disse-me.", "Me disse."], ["negação", "Não me disse.", "Não me disse."], ["relativo", "que me disse", "que me disse"], ["infinitivo", "vou fazê-lo", "vou fazer isso"]] },
    examples: [
      { target: "Sempre me perguntam a mesma coisa.", gloss: { es: "Siempre me preguntan lo mismo.", en: "They always ask me the same thing." } },
      { target: "Encontrei-o por acaso na rua.", gloss: { es: "Lo encontré por casualidad en la calle.", en: "I bumped into him in the street." } },
    ],
    pitfalls: {
      es: "En textos formales evita empezar con «Me»; en un chat, en cambio, «Disse-me» suena muy rebuscado en Brasil.",
      en: "In formal writing don't start with 'Me'; in a Brazilian chat, though, 'Disse-me' sounds stilted.",
    },
  },
  {
    id: "pt-g-mesoclise", lang: "pt", cefr: "C1",
    title: { es: "La mesoclisis", en: "Mesoclisis" },
    short: {
      es: "Futuro y condicional con pronombre detrás: infinitivo + pronombre + terminación (far-se-á, dir-lhe-ia).",
      en: "Future and conditional with a following pronoun: infinitive + pronoun + ending (far-se-á, dir-lhe-ia).",
    },
    rule: {
      es: "Como el futuro y el condicional nacen de «infinitivo + haver», el pronombre puede ir entre las dos partes: contar-te-ei. Solo aparece si no hay palabra atractora (con ella: não te contarei). Hoy es rara fuera de textos jurídicos o muy formales.",
      en: "Because the future and conditional come from 'infinitive + haver', the pronoun can sit between the two parts: contar-te-ei. It only appears with no attractor word (otherwise: não te contarei). It's rare today outside legal or very formal texts.",
    },
    table: { head: ["", "mesóclise", "com atrator"], rows: [["futuro", "dir-lhe-ei", "não lhe direi"], ["condicional", "dir-lhe-ia", "não lhe diria"], ["se", "realizar-se-á", "não se realizará"]] },
    examples: [
      { target: "Far-se-á o possível para atender a todos.", gloss: { es: "Se hará lo posible para atender a todos.", en: "Everything possible will be done to serve everyone." } },
      { target: "Encontrar-nos-emos às dez.", gloss: { es: "Nos encontraremos a las diez.", en: "We shall meet at ten." } },
    ],
    pitfalls: {
      es: "«realizará-se» es incorrecto: en futuro nunca va el pronombre al final.",
      en: "'realizará-se' is wrong: in the future the pronoun never goes at the end.",
    },
  },
  // ── u28 ───────────────────────────────────────────────────
  {
    id: "pt-g-este-aquele", lang: "pt", cefr: "C1",
    title: { es: "Referencia textual: este, esse, aquele", en: "Text reference: este, esse, aquele" },
    short: {
      es: "este = lo último mencionado o lo que viene; aquele = lo primero; esse = lo ya dicho.",
      en: "este = the latter or what follows; aquele = the former; esse = what was just said.",
    },
    rule: {
      es: "En textos formales, los demostrativos organizan la referencia: «este» anuncia lo que sigue (o problema é este: …) o retoma el elemento más cercano; «esse» retoma lo dicho; «aquele» retoma el más lejano. Se usa mucho en el par «este… aquele» (este último… aquele primeiro).",
      en: "In formal writing demonstratives organise reference: 'este' introduces what follows (o problema é este: …) or picks up the nearest item; 'esse' refers back to what was said; 'aquele' to the furthest item.",
    },
    table: { head: ["uso", "exemplo"], rows: [["anuncia", "A questão é esta: quem paga?"], ["retoma", "Essa questão é antiga."], ["último citado", "Pedro e Ana: esta…"], ["primeiro citado", "Pedro e Ana: aquele…"]] },
    examples: [
      { target: "Li Machado e Eça; este era português, aquele, brasileiro.", gloss: { es: "Leí a Machado y a Eça; este era portugués, aquel, brasileño.", en: "I read Machado and Eça; the latter was Portuguese, the former Brazilian." } },
      { target: "Esse argumento já foi refutado.", gloss: { es: "Ese argumento ya fue refutado.", en: "That argument has already been refuted." } },
    ],
    pitfalls: {
      es: "En el habla, «este» y «esse» se confunden; en una redacción formal, respeta la distinción.",
      en: "In speech este and esse blur; in a formal essay keep them apart.",
    },
  },
  {
    id: "pt-g-a-medida-que", lang: "pt", cefr: "C1",
    title: { es: "à medida que / na medida em que (y otras trampas)", en: "à medida que / na medida em que (and other traps)" },
    short: {
      es: "à medida que = a medida que (proporción). na medida em que = ya que (causa). Evita «a nível de».",
      en: "à medida que = as (proportion). na medida em que = insofar as (cause). Avoid 'a nível de'.",
    },
    rule: {
      es: "Dos conectores parecidos con sentidos distintos: proporción (à medida que, con crase) y causa (na medida em que). Las mezclas «à medida em que» o «na medida que» se consideran errores. «a nível de» con sentido de «en cuanto a» es una muletilla mal vista: usa em relação a, quanto a.",
      en: "Two similar connectors with different meanings: proportion (à medida que, with crase) and cause (na medida em que). The hybrids 'à medida em que' / 'na medida que' are errors. 'a nível de' meaning 'regarding' is a frowned-upon filler: use em relação a, quanto a.",
    },
    table: { head: ["forma", "sentido"], rows: [["à medida que", "proporção"], ["na medida em que", "causa"], ["em relação a / quanto a", "tema"], ["ao nível do mar", "altura (correto)"]] },
    examples: [
      { target: "À medida que o tempo passa, a memória falha.", gloss: { es: "A medida que pasa el tiempo, la memoria falla.", en: "As time goes by, memory fails." } },
      { target: "A lei é importante na medida em que protege os mais pobres.", gloss: { es: "La ley es importante en la medida en que protege a los más pobres.", en: "The law matters insofar as it protects the poorest." } },
    ],
    pitfalls: {
      es: "«ao nível de» sí es correcto cuando hay altura real: ao nível do mar.",
      en: "'ao nível de' is fine for actual height: ao nível do mar (at sea level).",
    },
  },
  // ── u29 ───────────────────────────────────────────────────
  {
    id: "pt-g-mais-que-perfeito-simples", lang: "pt", cefr: "C1",
    title: { es: "El pluscuamperfecto simple (literario)", en: "The one-word past perfect (literary)" },
    short: {
      es: "fizera, dissera, fora = tinha feito, tinha dito, tinha sido. Pretérito «eles» sin -am + -a.",
      en: "fizera, dissera, fora = had done, had said, had been. 'eles' past minus -am + -a.",
    },
    rule: {
      es: "La literatura y algunos textos formales usan esta forma simple, que el habla sustituye por tinha + participio. Sobrevive en expresiones fijas: quem dera, tomara, pudera (¡con razón!). Las formas de nós y vós llevan tilde: fizéramos.",
      en: "Literature and some formal texts use this form, replaced in speech by tinha + participle. It survives in set phrases: quem dera, tomara, pudera (no wonder!). The nós form takes an accent: fizéramos.",
    },
    table: { head: ["verbo", "simples", "composto"], rows: [["falar", "falara", "tinha falado"], ["fazer", "fizera", "tinha feito"], ["ser / ir", "fora", "tinha sido / ido"], ["ter", "tivera", "tinha tido"]] },
    examples: [
      { target: "Nunca vira o mar até aquele dia.", gloss: { es: "Nunca había visto el mar hasta aquel día.", en: "He had never seen the sea until that day." } },
      { target: "Ela esquecera o nome do rapaz.", gloss: { es: "Ella había olvidado el nombre del muchacho.", en: "She had forgotten the young man's name." } },
    ],
    pitfalls: {
      es: "No es el imperfecto de subjuntivo español en -ra: «fizera» = «había hecho», no «hiciera».",
      en: "Don't confuse it with the future: fizera (had done) vs fará (will do).",
    },
  },
  {
    id: "pt-g-posicao-adjetivo", lang: "pt", cefr: "C1",
    title: { es: "Posición del adjetivo y cambio de sentido", en: "Adjective position and meaning" },
    short: {
      es: "Detrás = sentido literal (homem pobre); delante = figurado o expresivo (pobre homem).",
      en: "After the noun = literal (homem pobre); before = figurative or emotive (pobre homem).",
    },
    rule: {
      es: "Como en español, algunos adjetivos cambian de sentido según su posición: grande, pobre, velho, certo, simples, novo. La anteposición es también un recurso estilístico de la literatura (uma triste figura).",
      en: "Some adjectives change meaning with position: grande, pobre, velho, certo, simples, novo. Putting the adjective first is also a literary device (uma triste figura).",
    },
    table: { head: ["depois", "antes"], rows: [["um homem grande (alto)", "um grande homem (notável)"], ["um amigo velho (idoso)", "um velho amigo (antigo)"], ["uma notícia certa (exata)", "uma certa notícia (alguma)"], ["um funcionário simples", "um simples funcionário"]] },
    examples: [
      { target: "É um simples erro de digitação.", gloss: { es: "Es un simple error de tipeo.", en: "It's just a typo." } },
      { target: "Recebemos uma certa carta anônima.", gloss: { es: "Recibimos cierta carta anónima.", en: "We received a certain anonymous letter." } },
    ],
    pitfalls: {
      es: "«grande» delante no se apocopa: um grande homem (no «um grão homem»).",
      en: "Before the noun, 'grande' usually means great, not big.",
    },
  },
  // ── u30 ───────────────────────────────────────────────────
  {
    id: "pt-g-tu-europeu", lang: "pt", cefr: "C1",
    title: { es: "El «tu» europeo y sus formas", en: "European 'tu' and its verb forms" },
    short: {
      es: "Portugal: tu falas, tu és, tu tens, tu falaste, tu foste. Pretérito de tu: -aste, -este, -iste.",
      en: "Portugal: tu falas, tu és, tu tens, tu falaste, tu foste. Past of tu: -aste, -este, -iste.",
    },
    rule: {
      es: "En Portugal «tu» es el trato informal normal, con terminación en -s en casi todos los tiempos (presente falas, imperfeito falavas, condicional falarias). El pretérito perfeito termina en -ste sin s: falaste. En el sur y el norte de Brasil se usa «tu» también, a menudo con el verbo de «você»: tu fala.",
      en: "In Portugal 'tu' is the normal informal 'you', ending in -s in most tenses (falas, falavas, falarias). The simple past ends in -ste with no s: falaste. Parts of southern and northern Brazil also use 'tu', often with the você verb form: tu fala.",
    },
    table: { head: ["tempo", "falar", "ser", "ter"], rows: [["presente", "falas", "és", "tens"], ["pretérito", "falaste", "foste", "tiveste"], ["imperfeito", "falavas", "eras", "tinhas"], ["imperativo", "fala!", "sê!", "tem!"]] },
    examples: [
      { target: "Onde é que tu moras?", gloss: { es: "¿Dónde vives?", en: "Where do you live?" } },
      { target: "Foste ao cinema ontem?", gloss: { es: "¿Fuiste al cine ayer?", en: "Did you go to the cinema yesterday?" } },
    ],
    pitfalls: {
      es: "No añadas -s al pretérito: «falastes» es un error frecuente (correcto: falaste).",
      en: "No -s in the past: 'falastes' is a common error (correct: falaste).",
    },
  },
  {
    id: "pt-g-pe-pb", lang: "pt", cefr: "C1",
    title: { es: "Portugués de Brasil y de Portugal", en: "Brazilian vs European Portuguese" },
    short: {
      es: "PT: tu, estar a + inf., diz-me, autocarro. BR: você, gerundio, me diz, ônibus. Misma lengua, misma norma escrita casi idéntica.",
      en: "PT: tu, estar a + inf., diz-me, autocarro. BR: você, gerund, me diz, ônibus. One language, nearly identical written standard.",
    },
    rule: {
      es: "Las dos variedades se entienden sin problema por escrito; las diferencias están en el trato (tu / você), el progresivo, la colocación de pronombres, parte del vocabulario y, sobre todo, la pronunciación: en Portugal se «comen» las vocales átonas. Desde el Acuerdo Ortográfico de 1990 la ortografía es casi igual.",
      en: "The two varieties are mutually intelligible in writing; differences lie in address (tu / você), the progressive, pronoun placement, some vocabulary and above all pronunciation: European Portuguese swallows unstressed vowels. Since the 1990 Spelling Agreement spelling is nearly the same.",
    },
    table: { head: ["Brasil", "Portugal"], rows: [["você fala", "tu falas"], ["estou comendo", "estou a comer"], ["me dá", "dá-me"], ["celular, trem", "telemóvel, comboio"], ["econômico, fato", "económico, facto"]] },
    examples: [
      { target: "Estás a brincar comigo?", gloss: { es: "¿Me estás tomando el pelo? (Portugal)", en: "Are you kidding me? (Portugal)" } },
      { target: "Você está brincando comigo?", gloss: { es: "¿Me estás tomando el pelo? (Brasil)", en: "Are you kidding me? (Brazil)" } },
    ],
    pitfalls: {
      es: "Ojo con palabras inocentes en un país y ofensivas en el otro (rapariga, bicha): si dudas, usa la forma brasileña neutra.",
      en: "Some words are harmless in one country and offensive in the other (rapariga, bicha): when in doubt, use the neutral Brazilian form.",
    },
  },
];
