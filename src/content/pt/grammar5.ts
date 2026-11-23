import type { GrammarPoint } from "../schema";

// Grammar points for Portuguese units u31–u36 (C2) (content v2.1). Same shape as grammar1.ts.
export const grammar5: GrammarPoint[] = [
  // ── u31 ───────────────────────────────────────────────────
  {
    id: "pt-g-marcadores-discursivos", lang: "pt", cefr: "C2",
    title: { es: "Marcadores del discurso", en: "Discourse markers" },
    short: {
      es: "pois é (así es), aliás (por cierto), enfim (en fin), sei lá (no sé), tipo (o sea), né (¿no?).",
      en: "pois é (exactly), aliás (by the way), enfim (anyway), sei lá (dunno), tipo (like), né (right?).",
    },
    rule: {
      es: "No tienen contenido propio: organizan la conversación, muestran actitud y ganan tiempo. Su valor depende de la entonación: «pois é» puede ser acuerdo o resignación; «pois não» es una oferta de ayuda; «pois sim» suele ser irónico.",
      en: "They carry no content of their own: they organise talk, signal attitude and buy time. Intonation matters: 'pois é' can be agreement or resignation; 'pois não' offers help; 'pois sim' is usually ironic.",
    },
    table: { head: ["marcador", "função"], rows: [["pois é", "concordar / resignar-se"], ["aliás", "acrescentar / corrigir"], ["enfim", "encerrar, resumir"], ["sei lá / tipo", "hesitar"], ["né", "pedir confirmação"]] },
    examples: [
      { target: "Ele não veio. — Pois é, sempre assim.", gloss: { es: "No vino. — Y sí, siempre igual.", en: "He didn't come. — I know, always the same." } },
      { target: "Enfim, o importante é que deu certo.", gloss: { es: "En fin, lo importante es que salió bien.", en: "Anyway, the main thing is it worked out." } },
    ],
    pitfalls: {
      es: "«pois não» no es negativo: ¿en qué puedo ayudarle? / ¡cómo no!",
      en: "'pois não' isn't negative: 'how can I help?' / 'certainly!'.",
    },
  },
  {
    id: "pt-g-ironia", lang: "pt", cefr: "C2",
    title: { es: "Cómo se marca la ironía", en: "How irony is signalled" },
    short: {
      es: "Elogio exagerado + hein?, fórmulas (até parece!, pois sim!, vai nessa!), «só que não», diminutivos.",
      en: "Exaggerated praise + hein?, set phrases (até parece!, pois sim!, vai nessa!), 'só que não', diminutives.",
    },
    rule: {
      es: "La ironía brasileña suele ser suave y se apoya en la entonación y en fórmulas fijas. Un elogio con «hein» o «né» puede ser crítica; «Imagina!» puede ser «de nada» o «¡ni hablar!»; el diminutivo puede minimizar con sarcasmo (um probleminha).",
      en: "Brazilian irony is often gentle and relies on intonation and set phrases. Praise with 'hein' or 'né' can be criticism; 'Imagina!' can mean 'don't mention it' or 'no way!'; a diminutive can be sarcastic (um probleminha).",
    },
    table: { head: ["recurso", "exemplo"], rows: [["elogio + hein", "Que pontual, hein?"], ["fórmula", "Até parece!"], ["negação final", "Amo segunda-feira… só que não."], ["diminutivo", "Só um probleminha…"]] },
    examples: [
      { target: "Ótimo trabalho, hein? Só faltou terminar.", gloss: { es: "Buen trabajo, ¿eh? Solo faltó terminarlo.", en: "Great work, eh? Just one thing missing: finishing it." } },
      { target: "Ele vai pagar a conta? Pois sim!", gloss: { es: "¿Él va a pagar la cuenta? ¡Sí, claro!", en: "He's going to pay the bill? Yeah, right!" } },
    ],
    pitfalls: {
      es: "Por escrito la ironía se pierde fácilmente: en mensajes, los brasileños añaden «kkk» o emojis.",
      en: "Irony gets lost in writing: in messages Brazilians add 'kkk' (haha) or emojis.",
    },
  },
  // ── u32 ───────────────────────────────────────────────────
  {
    id: "pt-g-linguagem-normativa", lang: "pt", cefr: "C2",
    title: { es: "Fórmulas del lenguaje normativo", en: "Formulas of legal language" },
    short: {
      es: "fica vedado / proibido, quem infringir (fut. subj.), será punido, sob pena de, nos termos de, revogam-se.",
      en: "fica vedado / proibido, quem infringir (fut. subj.), será punido, sob pena de, nos termos de, revogam-se.",
    },
    rule: {
      es: "Leyes, contratos y edictos usan: «fica» + participio concordado (fica vedada a entrada), futuro de subjuntivo para el supuesto (quem infringir, caso o locatário atrasar), futuro simple para la consecuencia y fórmulas fijas de cierre (revogam-se as disposições em contrário).",
      en: "Laws, contracts and notices use 'fica' + agreeing participle (fica vedada a entrada), the future subjunctive for the case (quem infringir), the simple future for the consequence and fixed closing formulas (revogam-se as disposições em contrário).",
    },
    table: { head: ["função", "fórmula"], rows: [["proibir", "Fica vedado…"], ["supor", "Quem infringir…"], ["sancionar", "…será multado."], ["condicionar", "…sob pena de…"], ["remeter", "…nos termos da lei."]] },
    examples: [
      { target: "Fica proibida a venda de bebidas alcoólicas a menores.", gloss: { es: "Queda prohibida la venta de bebidas alcohólicas a menores.", en: "The sale of alcohol to minors is prohibited." } },
      { target: "O locatário que atrasar o pagamento pagará multa de dez por cento.", gloss: { es: "El inquilino que se atrase en el pago pagará una multa del diez por ciento.", en: "A tenant who pays late will be fined ten per cent." } },
    ],
    pitfalls: {
      es: "«Fica vedado a entrada» es un error: el participio concuerda con «a entrada» → vedada.",
      en: "'Fica vedado a entrada' is wrong: the participle agrees with 'a entrada' → vedada.",
    },
  },
  {
    id: "pt-g-gerundio-absoluto", lang: "pt", cefr: "C2",
    title: { es: "Gerundios y participios absolutos (y el «gerundismo»)", en: "Absolute gerunds and participles (and 'gerundismo')" },
    short: {
      es: "Considerando que…, Cumpridas as exigências, … Evita «vou estar enviando» (= vou enviar).",
      en: "Considerando que…, Cumpridas as exigências, … Avoid 'vou estar enviando' (= vou enviar).",
    },
    rule: {
      es: "Los textos oficiales abren con gerundios de fundamento (Considerando…, Tendo em vista…) y usan participios absolutos que condensan una oración (Concluída a obra, … = una vez concluida la obra). El «gerundismo» (vou estar fazendo), típico de telemarketing, está muy mal visto.",
      en: "Official texts open with gerunds giving grounds (Considerando… = whereas…) and use absolute participles that pack a clause (Concluída a obra, … = once the works are finished). 'Gerundismo' (vou estar fazendo), typical of call centres, is heavily stigmatised.",
    },
    table: { head: ["forma", "exemplo"], rows: [["gerúndio", "Considerando o exposto, …"], ["particípio absoluto", "Encerrada a sessão, …"], ["gerundismo (evitar)", "Vou estar verificando."], ["correto", "Vou verificar."]] },
    examples: [
      { target: "Encerrada a votação, o presidente anunciou o resultado.", gloss: { es: "Terminada la votación, el presidente anunció el resultado.", en: "Once voting closed, the chair announced the result." } },
      { target: "Considerando a urgência, o prazo foi reduzido.", gloss: { es: "Considerando la urgencia, se redujo el plazo.", en: "Given the urgency, the deadline was shortened." } },
    ],
    pitfalls: {
      es: "El participio absoluto concuerda con su sustantivo: encerradas as inscrições.",
      en: "The absolute participle agrees with its noun: encerradas as inscrições.",
    },
  },
  // ── u33 ───────────────────────────────────────────────────
  {
    id: "pt-g-tu-regional", lang: "pt", cefr: "C2",
    title: { es: "El «tu» regional de Brasil", en: "Regional 'tu' in Brazil" },
    short: {
      es: "Río, Sur, Norte y parte del Nordeste: tu + verbo de você (tu vai, tu falou). Norma: tu vais / você vai.",
      en: "Rio, the South, North and parts of the Northeast: tu + você verb (tu vai, tu falou). Standard: tu vais / você vai.",
    },
    rule: {
      es: "En muchas regiones «tu» es el pronombre informal, pero se conjuga casi siempre como «você» (tu sabe, tu foi). En algunos lugares (Porto Alegre, Florianópolis, Belém) se oyen formas clásicas (tu vais, tu fizeste). Es un rasgo regional, no un error de aprendiz, pero no pertenece a la norma escrita.",
      en: "In many regions 'tu' is the informal pronoun, but usually conjugated like você (tu sabe, tu foi). Some places (Porto Alegre, Florianópolis, Belém) also use classic forms (tu vais, tu fizeste). It's a regional feature, not a learner's error, but not part of the written standard.",
    },
    table: { head: ["", "presente", "pretérito"], rows: [["tu regional", "tu vai", "tu foi"], ["tu clássico", "tu vais", "tu foste"], ["você", "você vai", "você foi"]] },
    examples: [
      { target: "Tu viu o jogo ontem?", gloss: { es: "¿Viste el partido ayer?", en: "Did you see the game yesterday?" } },
      { target: "Bah, tu não sabe o que aconteceu!", gloss: { es: "¡Uf, no sabes lo que pasó!", en: "Wow, you don't know what happened!" } },
    ],
    pitfalls: {
      es: "En Portugal «tu vai» suena muy mal: allí siempre tu vais.",
      en: "In Portugal 'tu vai' sounds wrong: there it's always tu vais.",
    },
  },
  {
    id: "pt-g-sotaques", lang: "pt", cefr: "C2",
    title: { es: "Los acentos de Brasil", en: "Brazilian accents" },
    short: {
      es: "Río: s final «sh». Interior SP / MG: r tipo inglés. Nordeste: ti, di sin «ch», vocales abiertas. Sur: e final cerrada.",
      en: "Rio: final s 'sh'. Inland SP / MG: English-like r. Northeast: ti, di without 'ch', open vowels. South: closed final e.",
    },
    rule: {
      es: "La pronunciación varía mucho entre regiones. Los rasgos más fáciles de reconocer: la s final chiada de Río (y de Portugal), la r «caipira» del interior, la ausencia de palatalización de t/d en gran parte del Nordeste y la e final pronunciada «e» (no «i») en el Sur.",
      en: "Pronunciation varies a lot. The easiest features to spot: Rio's hushing final s (shared with Portugal), the 'caipira' r inland, the lack of t/d palatalisation in much of the Northeast, and a final e pronounced 'e' (not 'i') in the South.",
    },
    table: { head: ["região", "traço"], rows: [["Rio de Janeiro", "mais ≈ maish"], ["interior SP / MG", "porta (r retroflexo)"], ["Nordeste", "tia ≈ tia (sem tch)"], ["Sul", "leite ≈ leite"]] },
    examples: [
      { target: "Vamos à praia mais tarde.", gloss: { es: "Vamos a la playa más tarde (en Río suena «maish».)", en: "Let's go to the beach later (in Rio, 'maish')." } },
      { target: "A porta está aberta.", gloss: { es: "La puerta está abierta (r «caipira» en el interior).", en: "The door is open (inland 'r')." } },
    ],
    pitfalls: {
      es: "Ningún acento es «el correcto»: el de los noticieros nacionales es solo el más neutro.",
      en: "No accent is 'the correct one': national-TV news is simply the most neutral.",
    },
  },
  // ── u34 ───────────────────────────────────────────────────
  {
    id: "pt-g-topicalizacao", lang: "pt", cefr: "C2",
    title: { es: "Topicalización: el tema primero", en: "Topicalisation: topic first" },
    short: {
      es: "Esse livro, eu já li. · A Maria, ela não vem. Muy típico del habla brasileña; en la escritura, orden normal.",
      en: "Esse livro, eu já li. · A Maria, ela não vem. Very typical of Brazilian speech; normal order in writing.",
    },
    rule: {
      es: "El habla brasileña tiende a anunciar el tema y luego comentarlo, a veces con un pronombre que lo retoma (A Maria, ela…) y a veces sin él (Esse filme, eu adorei). Incluso aparece con sujeto doble: «O carro, ele quebrou». En textos formales se evita.",
      en: "Brazilian speech tends to announce the topic and then comment on it, sometimes with a resuming pronoun (A Maria, ela…) and sometimes without (Esse filme, eu adorei). Avoid it in formal texts.",
    },
    table: { head: ["fala", "escrita"], rows: [["Esse filme, eu adorei.", "Adorei esse filme."], ["A Ana, ela chegou?", "A Ana chegou?"], ["Essa rua, ninguém passa nela.", "Ninguém passa por essa rua."]] },
    examples: [
      { target: "Feijoada, eu como toda semana.", gloss: { es: "La feijoada, la como todas las semanas.", en: "Feijoada, I eat every week." } },
      { target: "O meu irmão, ele mora em Manaus.", gloss: { es: "Mi hermano vive en Manaos.", en: "My brother, he lives in Manaus." } },
    ],
    pitfalls: {
      es: "A diferencia del español, el pronombre de retoma de objeto suele omitirse: «Esse livro, eu li» (no «eu o li»).",
      en: "Unlike English 'That book, I read it', the object pronoun is usually dropped: Esse livro, eu li.",
    },
  },
  {
    id: "pt-g-vicios-linguagem", lang: "pt", cefr: "C2",
    title: { es: "Vicios de lenguaje: redundancias", en: "Redundancies to avoid" },
    short: {
      es: "Evita: há dez anos atrás, subir para cima, elo de ligação, encarar de frente, surpresa inesperada.",
      en: "Avoid: há dez anos atrás, subir para cima, elo de ligação, encarar de frente, surpresa inesperada.",
    },
    rule: {
      es: "Son pleonasmos frecuentes en el habla que los textos cuidados (y los exámenes) penalizan. La regla: si una palabra ya contiene el sentido de la otra, sobra una. «há» + tiempo ya significa «hace»: no añadas «atrás».",
      en: "These are common spoken pleonasms that careful writing (and exams) penalise. Rule: if one word already contains the other's meaning, drop one. 'há' + time already means 'ago': don't add 'atrás'.",
    },
    table: { head: ["evitar", "usar"], rows: [["há dez anos atrás", "há dez anos"], ["subir para cima", "subir"], ["elo de ligação", "elo"], ["encarar de frente", "encarar"], ["planejar antecipadamente", "planejar"]] },
    examples: [
      { target: "Ele se formou há cinco anos.", gloss: { es: "Se graduó hace cinco años.", en: "He graduated five years ago." } },
      { target: "Precisamos encarar o problema.", gloss: { es: "Tenemos que enfrentar el problema.", en: "We need to face the problem." } },
    ],
    pitfalls: {
      es: "Algunos pleonasmos son expresivos y aceptados en literatura («vi com meus próprios olhos»).",
      en: "Some pleonasms are expressive and accepted in literature ('vi com meus próprios olhos').",
    },
  },
  // ── u35 ───────────────────────────────────────────────────
  {
    id: "pt-g-regencia-verbal", lang: "pt", cefr: "C2",
    title: { es: "Regencia verbal: norma y habla", en: "Verb government: standard vs speech" },
    short: {
      es: "assistir a (ver), implicar algo, preferir X a Y, chegar a, obedecer a, namorar alguém, esquecer-se de.",
      en: "assistir a (watch), implicar algo, preferir X a Y, chegar a, obedecer a, namorar alguém, esquecer-se de.",
    },
    rule: {
      es: "Muchos verbos tienen en la norma un régimen distinto del habla brasileña. Algunos cambian de sentido con la preposición: assistir a (ver) / assistir alguém (ayudar); aspirar a (desear) / aspirar o ar (inhalar); visar a (apuntar a) / visar o documento (visar).",
      en: "Many verbs take a different preposition in the standard than in Brazilian speech. Some change meaning with it: assistir a (watch) / assistir alguém (help); aspirar a (aspire to) / aspirar o ar (inhale); visar a (aim at) / visar o documento (sign off).",
    },
    table: { head: ["verbo", "norma", "fala comum"], rows: [["assistir (ver)", "assistir ao jogo", "assistir o jogo"], ["chegar", "chegar a / à", "chegar em / na"], ["implicar", "implica custos", "implica em custos"], ["preferir", "prefiro A a B", "prefiro A do que B"], ["namorar", "namorar alguém", "namorar com alguém"]] },
    examples: [
      { target: "Todos devem obedecer às regras.", gloss: { es: "Todos deben obedecer las reglas.", en: "Everyone must obey the rules." } },
      { target: "Prefiro trabalhar de manhã a trabalhar à noite.", gloss: { es: "Prefiero trabajar de mañana a trabajar de noche.", en: "I prefer working in the morning to working at night." } },
    ],
    pitfalls: {
      es: "«obedecer» pide «a»: obedecer às regras (con crase), no «obedecer as regras».",
      en: "'obedecer' takes 'a': obedecer às regras (with crase).",
    },
  },
  {
    id: "pt-g-paronimos", lang: "pt", cefr: "C2",
    title: { es: "Parónimos", en: "Paronyms" },
    short: {
      es: "tráfego / tráfico, eminente / iminente, comprimento / cumprimento, ratificar / retificar, concerto / conserto.",
      en: "tráfego / tráfico, eminente / iminente, comprimento / cumprimento, ratificar / retificar, concerto / conserto.",
    },
    rule: {
      es: "Palabras de forma y sonido casi iguales pero de sentido distinto. El corrector no las detecta porque las dos existen: hay que conocerlas. Algunas coinciden con trampas para hispanohablantes (tráfico). Ojo: los diccionarios admiten «tráfico» también para la circulación, pero los textos cuidados prefieren «tráfego».",
      en: "Words that look and sound almost the same but mean different things. Spellcheckers won't catch them because both exist: you have to know them. Note: dictionaries also allow 'tráfico' for traffic flow, but careful writing prefers 'tráfego'.",
    },
    table: { head: ["palavra", "sentido"], rows: [["tráfego / tráfico", "trânsito / comércio ilegal"], ["eminente / iminente", "ilustre / prestes a ocorrer"], ["comprimento / cumprimento", "tamanho / saudação"], ["ratificar / retificar", "confirmar / corrigir"], ["descrição / discrição", "descrever / ser discreto"]] },
    examples: [
      { target: "Há risco iminente de deslizamento.", gloss: { es: "Hay riesgo inminente de deslizamiento.", en: "There's an imminent risk of landslide." } },
      { target: "Mande meus cumprimentos à sua família.", gloss: { es: "Mándale mis saludos a tu familia.", en: "Send my regards to your family." } },
    ],
    pitfalls: {
      es: "«cumprimento» es también «cumplimiento» (cumprimento da lei); la longitud es «comprimento».",
      en: "'cumprimento' also means compliance (cumprimento da lei); length is 'comprimento'.",
    },
  },
  // ── u36 ───────────────────────────────────────────────────
  {
    id: "pt-g-proverbios", lang: "pt", cefr: "C2",
    title: { es: "La gramática de los refranes", en: "The grammar of proverbs" },
    short: {
      es: "Sujeto genérico (quem, cada), presente atemporal, paralelismo; a menudo se dice solo la primera mitad.",
      en: "Generic subject (quem, cada), timeless present, parallelism; often only the first half is said.",
    },
    rule: {
      es: "Los refranes condensan sabiduría popular con estructuras fijas: «quem + verbo» (quem espera sempre alcança), «mais vale… do que…», imperativos generales y rimas. No se modifican: cambiar una palabra suena a error o a juego intencional.",
      en: "Proverbs pack folk wisdom into fixed structures: 'quem + verb' (quem espera sempre alcança), 'mais vale… do que…', general imperatives and rhymes. Don't change them: altering a word sounds like a mistake or a deliberate pun.",
    },
    table: { head: ["estrutura", "exemplo"], rows: [["quem…", "Quem espera sempre alcança."], ["mais vale…", "Mais vale prevenir do que remediar."], ["cada…", "Cada macaco no seu galho."], ["paralelismo", "Quem vê cara não vê coração."]] },
    examples: [
      { target: "Mais vale prevenir do que remediar.", gloss: { es: "Más vale prevenir que curar.", en: "Better safe than sorry." } },
      { target: "Em terra de cego, quem tem um olho é rei.", gloss: { es: "En el país de los ciegos, el tuerto es rey.", en: "In the land of the blind, the one-eyed man is king." } },
    ],
    pitfalls: {
      es: "Muchos refranes se parecen a los españoles pero cambian detalles: «pássaro na mão… dois voando» (no «cien»).",
      en: "Don't translate English proverbs word for word: look for the Portuguese equivalent.",
    },
  },
  {
    id: "pt-g-latinismos", lang: "pt", cefr: "C2",
    title: { es: "Latinismos en textos cultos", en: "Latin phrases in educated texts" },
    short: {
      es: "a priori, grosso modo, in loco, ipsis litteris, data venia, sine qua non: sin crase ni «a» delante.",
      en: "a priori, grosso modo, in loco, ipsis litteris, data venia, sine qua non: no crase or extra 'a'.",
    },
    rule: {
      es: "Abundan en el derecho, la academia y la prensa. Se escriben como en latín, normalmente en cursiva, y no admiten preposiciones añadidas: «a grosso modo» y «à priori» son errores frecuentes.",
      en: "They're common in law, academia and the press. They're written as in Latin, usually in italics, with no added prepositions: 'a grosso modo' and 'à priori' are common mistakes.",
    },
    table: { head: ["latinismo", "sentido"], rows: [["a priori", "de antemão"], ["grosso modo", "aproximadamente"], ["in loco", "no local"], ["ipsis litteris", "textualmente"], ["data venia", "com todo o respeito"], ["sine qua non", "indispensável"]] },
    examples: [
      { target: "Citou o artigo ipsis litteris.", gloss: { es: "Citó el artículo textualmente.", en: "He quoted the article word for word." } },
      { target: "Data venia, discordo de Vossa Excelência.", gloss: { es: "Con el debido respeto, discrepo de Su Excelencia.", en: "With all due respect, I disagree with Your Honour." } },
    ],
    pitfalls: {
      es: "«à priori» con crase es incorrecto: no hay artículo femenino en latín.",
      en: "'à priori' with a crase is wrong: there's no Portuguese article in a Latin phrase.",
    },
  },
];
