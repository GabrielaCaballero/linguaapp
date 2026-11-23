import type { GrammarPoint } from "../schema";

// Grammar points for French units u17–u24 (content v2.1). Same shape as grammar.ts.
export const grammar3: GrammarPoint[] = [
  // ── u17 ───────────────────────────────────────────────────
  {
    id: "fr-g-conditionnel", lang: "fr", cefr: "B1",
    title: { es: "El condicional presente", en: "The present conditional" },
    short: {
      es: "Raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient: je voudrais, tu pourrais, il serait.",
      en: "Future stem + -ais, -ais, -ait, -ions, -iez, -aient: je voudrais, tu pourrais, il serait.",
    },
    rule: {
      es: "Se forma con la misma raíz que el futur simple y las terminaciones del imparfait. Sirve para hipótesis (je viendrais), deseos (j'aimerais), consejos (tu devrais) y para pedir con cortesía (pourriez-vous… ?).",
      en: "It uses the same stem as the futur simple with the imparfait endings. It's for hypotheses (je viendrais), wishes (j'aimerais), advice (tu devrais) and polite requests (pourriez-vous… ?).",
    },
    steps: [
      { es: "Toma la raíz del futuro: parler-, ser-, aur-, pourr-, voudr-…", en: "Take the future stem: parler-, ser-, aur-, pourr-, voudr-…" },
      { es: "Añade las terminaciones del imparfait: -ais, -ais, -ait, -ions, -iez, -aient.", en: "Add the imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient." },
    ],
    table: {
      head: ["", "aimer", "être", "pouvoir"],
      rows: [["je / j'", "aimerais", "serais", "pourrais"], ["tu", "aimerais", "serais", "pourrais"], ["il / elle", "aimerait", "serait", "pourrait"], ["nous", "aimerions", "serions", "pourrions"], ["vous", "aimeriez", "seriez", "pourriez"], ["ils / elles", "aimeraient", "seraient", "pourraient"]],
    },
    examples: [
      { target: "Pourriez-vous m'aider, s'il vous plaît ?", gloss: { es: "¿Podría ayudarme, por favor?", en: "Could you help me, please?" } },
      { target: "Ce serait génial !", gloss: { es: "¡Sería genial!", en: "That would be great!" } },
    ],
    pitfalls: {
      es: "je voudrais (condicional) y je voudrai (futuro) casi no se distinguen al oído: por escrito, la -s cambia el sentido.",
      en: "je voudrais (conditional) and je voudrai (future) sound almost alike: in writing the -s matters.",
    },
  },
  {
    id: "fr-g-si-imparfait", lang: "fr", cefr: "B1",
    title: { es: "Hipótesis: si + imparfait", en: "Hypotheses: si + imparfait" },
    short: {
      es: "si + imparfait → condicional: si j'avais le temps, je viendrais. Nunca condicional tras «si».",
      en: "si + imparfait → conditional: si j'avais le temps, je viendrais. Never a conditional after 'si'.",
    },
    rule: {
      es: "Para algo imaginario o poco probable en el presente o el futuro, la condición va en imparfait y el resultado en condicional. Donde el español usa el subjuntivo (si tuviera), el francés usa el imparfait. Para algo posible y real: si + presente → futuro (si tu viens, on ira au cinéma).",
      en: "For something imaginary or unlikely now or in the future, the condition is in the imparfait and the result in the conditional. For a real possibility: si + present → future (si tu viens, on ira au cinéma).",
    },
    steps: [
      { es: "¿Es una situación imaginaria? → si + imparfait.", en: "Imaginary situation? → si + imparfait." },
      { es: "El resultado va en condicional.", en: "The result goes in the conditional." },
      { es: "El orden puede invertirse: je viendrais si j'avais le temps.", en: "The order can be reversed: je viendrais si j'avais le temps." },
    ],
    table: {
      head: ["condition", "résultat"],
      rows: [["si + présent", "futur / présent"], ["si + imparfait", "conditionnel"], ["Si tu viens,", "on ira au cinéma."], ["Si tu venais,", "on irait au cinéma."]],
    },
    examples: [
      { target: "Si j'avais le temps, j'apprendrais le piano.", gloss: { es: "Si tuviera tiempo, aprendería a tocar el piano.", en: "If I had time, I'd learn the piano." } },
      { target: "Si je gagnais au loto, je ferais le tour du monde.", gloss: { es: "Si me ganara la lotería, daría la vuelta al mundo.", en: "If I won the lottery, I'd travel round the world." } },
    ],
    pitfalls: {
      es: "«si j'aurais» es un error típico, también entre francófonos: tras si, imparfait. «si» + il se contrae: s'il (pero no si + elle).",
      en: "'si j'aurais' is a classic mistake: after si use the imparfait. si + il contracts to s'il (but not with elle).",
    },
  },
  // ── u18 ───────────────────────────────────────────────────
  {
    id: "fr-g-coi", lang: "fr", cefr: "B1",
    title: { es: "Objeto indirecto: lui, leur", en: "Indirect object pronouns: lui, leur" },
    short: {
      es: "à + persona → lui (sing.), leur (pl.), delante del verbo: je lui parle, je leur écris.",
      en: "à + person → lui (sing.), leur (pl.), before the verb: je lui parle, je leur écris.",
    },
    rule: {
      es: "lui y leur reemplazan a una persona introducida por à (parler à, téléphoner à, donner à, dire à, demander à, répondre à). lui vale para hombre y mujer. me, te, nous, vous sirven a la vez de directo e indirecto.",
      en: "lui and leur replace a person introduced by à (parler à, téléphoner à, donner à, dire à, demander à, répondre à). lui is both 'him' and 'her'. me, te, nous, vous work as both direct and indirect.",
    },
    steps: [
      { es: "¿El verbo lleva à + persona? → lui / leur.", en: "Does the verb take à + person? → lui / leur." },
      { es: "¿Sin preposición? → le / la / les.", en: "No preposition? → le / la / les." },
      { es: "Colócalo delante del verbo conjugado (o del auxiliar).", en: "Put it before the conjugated verb (or the auxiliary)." },
    ],
    table: {
      head: ["", "direct", "indirect"],
      rows: [["il / elle", "le / la", "lui"], ["ils / elles", "les", "leur"], ["je, tu", "me, te", "me, te"], ["nous, vous", "nous, vous", "nous, vous"]],
    },
    examples: [
      { target: "Mes parents ? Je leur téléphone tous les dimanches.", gloss: { es: "¿Mis papás? Les llamo todos los domingos.", en: "My parents? I phone them every Sunday." } },
      { target: "Je lui ai donné des légumes.", gloss: { es: "Le di verduras.", en: "I gave her some vegetables." } },
    ],
    pitfalls: {
      es: "Algunos verbos cambian respecto al español: téléphoner à (je lui téléphone) pero aider quelqu'un (je l'aide), attendre quelqu'un (je l'attends). Y «leur» pronombre nunca lleva -s.",
      en: "Watch the verb's construction: téléphoner à (je lui téléphone) but aider quelqu'un (je l'aide). And the pronoun 'leur' never takes an -s.",
    },
  },
  {
    id: "fr-g-y-en", lang: "fr", cefr: "B1",
    title: { es: "Los pronombres y, en", en: "The pronouns y and en" },
    short: {
      es: "y = allí / a eso (à + lugar o cosa) · en = de eso / cantidad: j'y vais, j'en ai deux.",
      en: "y = there / to it (à + place or thing) · en = of it / some: j'y vais, j'en ai deux.",
    },
    rule: {
      es: "y reemplaza un lugar (à Paris, chez moi, dans la boîte) o «à + cosa» (penser à). en reemplaza «de + cosa» (parler de, avoir besoin de) y cualquier sustantivo con partitivo, número o cantidad. Los dos van delante del verbo.",
      en: "y replaces a place (à Paris, chez moi, dans la boîte) or 'à + thing' (penser à). en replaces 'de + thing' (parler de, avoir besoin de) and any noun with a partitive, number or quantity. Both go before the verb.",
    },
    steps: [
      { es: "¿Lugar o à + cosa? → y.", en: "A place or à + thing? → y." },
      { es: "¿de + cosa, du / de la / des, número o cantidad? → en (y repite el número: j'en ai trois).", en: "de + thing, du / de la / des, a number or quantity? → en (keep the number: j'en ai trois)." },
      { es: "Delante del verbo; en el imperativo afirmativo, detrás: vas-y, prends-en.", en: "Before the verb; after it in the affirmative imperative: vas-y, prends-en." },
    ],
    table: {
      head: ["", "y", "en"],
      rows: [["lieu", "J'y vais.", "J'en viens."], ["verbe + à / de", "J'y pense.", "J'en parle."], ["quantité", "—", "J'en ai deux."], ["impératif", "Vas-y !", "Prends-en !"]],
    },
    examples: [
      { target: "Le bureau ? J'y vais à vélo.", gloss: { es: "¿La oficina? Voy en bici.", en: "The office? I cycle there." } },
      { target: "Des enfants ? J'en ai deux.", gloss: { es: "¿Hijos? Tengo dos.", en: "Children? I have two." } },
    ],
    pitfalls: {
      es: "En español no decimos nada en «tengo dos»; en francés hace falta en: j'en ai deux. Y delante del futuro de aller, «y» desaparece: j'irai (no «j'y irai»).",
      en: "English often says nothing ('I have two'); French needs en: j'en ai deux. And y drops before the future of aller: j'irai.",
    },
  },
  // ── u19 ───────────────────────────────────────────────────
  {
    id: "fr-g-gerondif", lang: "fr", cefr: "B2",
    title: { es: "El gérondif: en + -ant", en: "The gérondif: en + -ant" },
    short: {
      es: "en + raíz de «nous» + -ant: en travaillant, en finissant, en faisant. Irregulares: en étant, en ayant, en sachant.",
      en: "en + 'nous' stem + -ant: en travaillant, en finissant, en faisant. Irregular: en étant, en ayant, en sachant.",
    },
    rule: {
      es: "El gérondif indica que dos acciones del mismo sujeto ocurren a la vez (al / mientras), la manera de hacer algo (trabajando) o una condición. El sujeto del gérondif debe ser el mismo que el de la frase principal.",
      en: "The gérondif shows that two actions by the same subject happen at once (while / when), how something is done (by doing) or a condition. Its subject must be the same as the main clause's.",
    },
    steps: [
      { es: "Toma «nous» en presente y quita -ons: nous faisons → fais-.", en: "Take 'nous' present and drop -ons: nous faisons → fais-." },
      { es: "Añade -ant y pon «en» delante: en faisant.", en: "Add -ant and put 'en' in front: en faisant." },
      { es: "Comprueba que el sujeto es el mismo en las dos acciones.", en: "Check both actions have the same subject." },
    ],
    table: {
      head: ["infinitif", "gérondif"],
      rows: [["parler", "en parlant"], ["finir", "en finissant"], ["prendre", "en prenant"], ["être", "en étant"], ["avoir", "en ayant"], ["savoir", "en sachant"]],
    },
    examples: [
      { target: "J'ai appris l'anglais en travaillant à Londres.", gloss: { es: "Aprendí inglés trabajando en Londres.", en: "I learnt English while working in London." } },
      { target: "En arrivant au bureau, j'ai vu le message.", gloss: { es: "Al llegar a la oficina vi el mensaje.", en: "When I got to the office, I saw the message." } },
    ],
    pitfalls: {
      es: "«estoy trabajando» no se dice con -ant: je travaille o je suis en train de travailler. El gérondif solo acompaña a otro verbo.",
      en: "'I am working' is never -ant: je travaille or je suis en train de travailler. The gérondif only goes with another verb.",
    },
  },
  {
    id: "fr-g-dont", lang: "fr", cefr: "B2",
    title: { es: "El relativo «dont»", en: "The relative pronoun dont" },
    short: {
      es: "dont = de + antecedente: le livre dont je parle (parler de), l'ami dont la sœur… (cuyo).",
      en: "dont = de + antecedent: le livre dont je parle (parler de), l'ami dont la sœur… (whose).",
    },
    rule: {
      es: "dont sustituye a un complemento introducido por de: verbos (parler de, se souvenir de, avoir besoin de), adjetivos (fier de, content de) o sustantivos (la sœur de l'ami → l'ami dont la sœur). Con ce: ce dont = lo que (con de).",
      en: "dont replaces a complement introduced by de: verbs (parler de, se souvenir de, avoir besoin de), adjectives (fier de, content de) or nouns (la sœur de l'ami → l'ami dont la sœur). With ce: ce dont = what (with de).",
    },
    steps: [
      { es: "Mira la construcción del verbo o adjetivo: ¿lleva de? → dont.", en: "Check the verb or adjective: does it take de? → dont." },
      { es: "Para posesión (cuyo/a), dont + artículo definido: dont le mari.", en: "For possession (whose), dont + definite article: dont le mari." },
      { es: "No repitas el complemento ni el posesivo después.", en: "Don't repeat the complement or a possessive afterwards." },
    ],
    table: {
      head: ["construction", "avec dont"],
      rows: [["parler de", "le film dont on parle"], ["avoir besoin de", "ce dont j'ai besoin"], ["être fier de", "le travail dont je suis fier"], ["la sœur de l'ami", "l'ami dont la sœur est là"]],
    },
    examples: [
      { target: "C'est le projet dont je vous ai parlé.", gloss: { es: "Es el proyecto del que le hablé.", en: "This is the project I told you about." } },
      { target: "J'ai une collègue dont le mari est pilote.", gloss: { es: "Tengo una compañera cuyo esposo es piloto.", en: "I have a colleague whose husband is a pilot." } },
    ],
    pitfalls: {
      es: "Tras «dont» no va el posesivo: l'ami dont le père (no «dont son père»). Y no uses «que» con verbos que llevan de: le livre dont j'ai besoin.",
      en: "No possessive after dont: l'ami dont le père (not 'dont son père'). And don't use que with de-verbs: le livre dont j'ai besoin.",
    },
  },
  // ── u20 ───────────────────────────────────────────────────
  {
    id: "fr-g-passif", lang: "fr", cefr: "B2",
    title: { es: "La voz pasiva", en: "The passive voice" },
    short: {
      es: "être (cualquier tiempo) + participio concordado + par: la loi a été votée par le Parlement.",
      en: "être (any tense) + agreeing participle + par: la loi a été votée par le Parlement.",
    },
    rule: {
      es: "El objeto de la frase activa pasa a sujeto, être lleva el tiempo y el participio concuerda con el nuevo sujeto. El agente va con par (con verbos de sentimiento o estado, a veces de: il est aimé de tous). Al hablar se prefiere «on» + verbo activo.",
      en: "The active object becomes the subject, être carries the tense and the participle agrees with the new subject. The agent takes par (sometimes de with feelings or states: il est aimé de tous). In speech 'on' + an active verb is preferred.",
    },
    steps: [
      { es: "El objeto pasa a sujeto: Le maire a inauguré la piscine → La piscine…", en: "The object becomes the subject: Le maire a inauguré la piscine → La piscine…" },
      { es: "Pon être en el tiempo del verbo activo: a inauguré → a été.", en: "Put être in the active verb's tense: a inauguré → a été." },
      { es: "Añade el participio concordado y par + agente: inaugurée par le maire.", en: "Add the agreeing participle and par + agent: inaugurée par le maire." },
    ],
    table: {
      head: ["temps", "passif"],
      rows: [["présent", "est construite"], ["passé composé", "a été construite"], ["imparfait", "était construite"], ["futur", "sera construite"], ["plus-que-parfait", "avait été construite"]],
    },
    examples: [
      { target: "Le voleur a été arrêté par la police.", gloss: { es: "La policía detuvo al ladrón.", en: "The thief was arrested by the police." } },
      { target: "La loi sera votée la semaine prochaine.", gloss: { es: "La ley se votará la semana que viene.", en: "The law will be voted on next week." } },
    ],
    pitfalls: {
      es: "La pasiva refleja española (se vende, se habla) se traduce con «on» o con un verbo pronominal, no con être: on parle français ici.",
      en: "Don't forget agreement: la maison a été vendue. And 'été' never agrees: elles ont été invitées.",
    },
  },
  // ── u21 ───────────────────────────────────────────────────
  {
    id: "fr-g-cond-passe", lang: "fr", cefr: "B2",
    title: { es: "El condicional pasado", en: "The past conditional" },
    short: {
      es: "avoir / être en condicional + participio: j'aurais fait, je serais venu/e. J'aurais dû = debería haber.",
      en: "avoir / être in the conditional + participle: j'aurais fait, je serais venu/e. J'aurais dû = I should have.",
    },
    rule: {
      es: "Expresa lo que habría pasado (y no pasó). Usa el mismo auxiliar que el passé composé. Con devoir y pouvoir sirve para el reproche y el arrepentimiento: j'aurais dû partir, tu aurais pu appeler.",
      en: "It expresses what would have happened (and didn't). It uses the same auxiliary as the passé composé. With devoir and pouvoir it's for regret and reproach: j'aurais dû partir, tu aurais pu appeler.",
    },
    steps: [
      { es: "Elige el auxiliar como en el passé composé.", en: "Choose the auxiliary as for the passé composé." },
      { es: "Ponlo en condicional: j'aurais / je serais…", en: "Put it in the conditional: j'aurais / je serais…" },
      { es: "Añade el participio (concordado con être).", en: "Add the participle (agreeing with être)." },
    ],
    table: {
      head: ["", "faire", "venir"],
      rows: [["je / j'", "aurais fait", "serais venu(e)"], ["tu", "aurais fait", "serais venu(e)"], ["il / elle", "aurait fait", "serait venu(e)"], ["nous", "aurions fait", "serions venu(e)s"], ["vous", "auriez fait", "seriez venu(e)(s)"], ["ils / elles", "auraient fait", "seraient venu(e)s"]],
    },
    examples: [
      { target: "J'aurais dû étudier davantage.", gloss: { es: "Debería haber estudiado más.", en: "I should have studied more." } },
      { target: "Tu aurais pu me le dire !", gloss: { es: "¡Me lo podrías haber dicho!", en: "You could have told me!" } },
    ],
    pitfalls: {
      es: "«Debería haber estudiado» no es «je devrais avoir étudié»: el francés pone devoir en condicional pasado y el infinitivo simple: j'aurais dû étudier.",
      en: "'I should have studied' is j'aurais dû étudier (not 'je devrais avoir étudié').",
    },
  },
  {
    id: "fr-g-si-pqp", lang: "fr", cefr: "B2",
    title: { es: "Hipótesis en el pasado: si + plus-que-parfait", en: "Past hypotheses: si + plus-que-parfait" },
    short: {
      es: "si + plus-que-parfait → condicional pasado: si j'avais su, je serais venu/e.",
      en: "si + plus-que-parfait → past conditional: si j'avais su, je serais venu/e.",
    },
    rule: {
      es: "Para lo que no pasó en el pasado: la condición va en plus-que-parfait (como «si hubiera…») y el resultado en condicional pasado («habría…»). Si el resultado es presente, se usa el condicional simple: si j'avais étudié, j'aurais un meilleur travail.",
      en: "For things that didn't happen: the condition is in the plus-que-parfait ('if I had…') and the result in the past conditional ('I would have…'). With a present result use the simple conditional: si j'avais étudié, j'aurais un meilleur travail.",
    },
    steps: [
      { es: "¿Hablas de un pasado que no ocurrió? → si + plus-que-parfait.", en: "Talking about a past that didn't happen? → si + plus-que-parfait." },
      { es: "¿El resultado también es pasado? → condicional pasado.", en: "Is the result in the past too? → past conditional." },
      { es: "¿El resultado es presente? → condicional presente.", en: "Is the result in the present? → present conditional." },
    ],
    table: {
      head: ["si…", "résultat"],
      rows: [["si + imparfait", "conditionnel présent"], ["si + plus-que-parfait", "conditionnel passé"], ["si + plus-que-parfait", "conditionnel présent (mixte)"]],
    },
    examples: [
      { target: "Si j'avais su, je serais venu plus tôt.", gloss: { es: "Si lo hubiera sabido, habría venido antes.", en: "If I'd known, I would have come earlier." } },
      { target: "Si je n'avais pas raté le train, je serais déjà chez moi.", gloss: { es: "Si no hubiera perdido el tren, ya estaría en casa.", en: "If I hadn't missed the train, I'd be home already." } },
    ],
    pitfalls: {
      es: "Nunca condicional tras «si», aunque en algunas zonas se diga «si habría»: si j'avais su (no «si j'aurais su»).",
      en: "Never 'si j'aurais su': after si use the plus-que-parfait.",
    },
  },
  // ── u22 ───────────────────────────────────────────────────
  {
    id: "fr-g-ce-qui-que", lang: "fr", cefr: "B2",
    title: { es: "ce qui, ce que, ce dont (lo que)", en: "ce qui, ce que, ce dont (what)" },
    short: {
      es: "lo que + verbo → ce qui · lo que + sujeto → ce que · lo que (verbo con de) → ce dont.",
      en: "what + verb → ce qui · what + subject → ce que · what (de-verb) → ce dont.",
    },
    rule: {
      es: "«lo que» se traduce con ce + relativo. La elección sigue la misma lógica que qui / que / dont: ce qui es sujeto del verbo que sigue, ce que es objeto, ce dont va con verbos o expresiones con de.",
      en: "'what' meaning 'the thing that' is ce + relative pronoun. The choice follows qui / que / dont: ce qui is the subject of the next verb, ce que its object, ce dont goes with verbs or phrases taking de.",
    },
    steps: [
      { es: "¿Lo que sigue es un verbo? → ce qui.", en: "Is the next word a verb? → ce qui." },
      { es: "¿Es un sujeto (je, on, Paul…)? → ce que.", en: "Is it a subject (je, on, Paul…)? → ce que." },
      { es: "¿El verbo lleva de (avoir besoin de, parler de)? → ce dont.", en: "Does the verb take de (avoir besoin de, parler de)? → ce dont." },
    ],
    table: {
      head: ["", "exemple"],
      rows: [["ce qui", "Ce qui me plaît, c'est la musique."], ["ce que", "Ce que je préfère, ce sont les portraits."], ["ce dont", "Ce dont j'ai besoin, c'est de temps."]],
    },
    examples: [
      { target: "Dis-moi ce que tu penses.", gloss: { es: "Dime lo que piensas.", en: "Tell me what you think." } },
      { target: "Ce qui compte, c'est l'effort.", gloss: { es: "Lo que cuenta es el esfuerzo.", en: "What counts is the effort." } },
    ],
    pitfalls: {
      es: "No traduzcas «lo que» por «le que»: siempre ce qui / ce que. En preguntas indirectas, «qué» también es ce que: je ne sais pas ce que tu veux.",
      en: "Don't use 'quoi' or 'que' alone for 'what' in the middle of a sentence: je ne sais pas ce que tu veux.",
    },
  },
  {
    id: "fr-g-lequel", lang: "fr", cefr: "B2",
    title: { es: "lequel tras preposición", en: "lequel after a preposition" },
    short: {
      es: "preposición + lequel / laquelle / lesquels / lesquelles. à + lequel = auquel; de + lequel = duquel.",
      en: "preposition + lequel / laquelle / lesquels / lesquelles. à + lequel = auquel; de + lequel = duquel.",
    },
    rule: {
      es: "Después de una preposición (avec, pour, dans, sur, sans…), para cosas se usa lequel, que concuerda en género y número con el antecedente. Para personas se suele usar qui (avec qui). Con à y de se contrae como el artículo: auquel, auxquels, auxquelles, duquel, desquels.",
      en: "After a preposition (avec, pour, dans, sur, sans…), things take lequel, which agrees in gender and number with the antecedent. People usually take qui (avec qui). With à and de it contracts like the article: auquel, auxquels, auxquelles, duquel, desquels.",
    },
    steps: [
      { es: "¿Hay preposición delante del relativo? → lequel (cosas) o qui (personas).", en: "Is there a preposition before the relative? → lequel (things) or qui (people)." },
      { es: "Concuerda con el antecedente: la raison → laquelle.", en: "Make it agree with the antecedent: la raison → laquelle." },
      { es: "Con à o de, contrae: auquel, duquel.", en: "With à or de, contract: auquel, duquel." },
    ],
    table: {
      head: ["", "masc.", "fém."],
      rows: [["singulier", "lequel", "laquelle"], ["pluriel", "lesquels", "lesquelles"], ["à +", "auquel / auxquels", "à laquelle / auxquelles"], ["de +", "duquel / desquels", "de laquelle / desquelles"]],
    },
    examples: [
      { target: "C'est la salle dans laquelle on a vu l'exposition.", gloss: { es: "Es la sala en la que vimos la exposición.", en: "That's the room where we saw the exhibition." } },
      { target: "Voilà la raison pour laquelle je pars.", gloss: { es: "Esa es la razón por la que me voy.", en: "That's the reason I'm leaving." } },
    ],
    pitfalls: {
      es: "Es como «el cual / la cual», pero en una sola palabra y con contracción: le concours auquel je participe (no «à lequel»).",
      en: "Never 'à lequel' or 'de lequel': auquel, duquel.",
    },
  },
  {
    id: "fr-g-double-pronoms", lang: "fr", cefr: "B2",
    title: { es: "Dos pronombres juntos", en: "Two object pronouns together" },
    short: {
      es: "Orden: me/te/nous/vous → le/la/les → lui/leur → y → en. Je te le donne, je le lui donne.",
      en: "Order: me/te/nous/vous → le/la/les → lui/leur → y → en. Je te le donne, je le lui donne.",
    },
    rule: {
      es: "Cuando hay dos pronombres objeto, siguen un orden fijo delante del verbo. Ojo: con me/te/nous/vous el objeto indirecto va primero (je te le donne), pero con lui/leur va segundo (je le lui donne). En el imperativo afirmativo: verbo-directo-indirecto (donne-le-moi).",
      en: "With two object pronouns, a fixed order applies before the verb. Note: with me/te/nous/vous the indirect comes first (je te le donne), but with lui/leur it comes second (je le lui donne). Affirmative imperative: verb-direct-indirect (donne-le-moi).",
    },
    steps: [
      { es: "Identifica los dos pronombres (directo e indirecto).", en: "Identify both pronouns (direct and indirect)." },
      { es: "Ordénalos: me/te/nous/vous → le/la/les → lui/leur → y → en.", en: "Order them: me/te/nous/vous → le/la/les → lui/leur → y → en." },
      { es: "Ponlos delante del verbo conjugado o del auxiliar.", en: "Put them before the conjugated verb or the auxiliary." },
    ],
    table: {
      head: ["1", "2", "3", "4", "5"],
      rows: [["me, te", "le", "lui", "y", "en"], ["nous, vous", "la, les", "leur", "", ""]],
    },
    examples: [
      { target: "Tu me le prêtes ?", gloss: { es: "¿Me lo prestas?", en: "Will you lend it to me?" } },
      { target: "Le livre ? Je le lui ai offert.", gloss: { es: "¿El libro? Se lo regalé.", en: "The book? I gave it to him." } },
    ],
    pitfalls: {
      es: "No existe «se lo»: «se lo doy» = je le lui donne. Y con en: il y en a, je lui en parle.",
      en: "English order (give it to him) is the reverse of je le lui donne. With en: il y en a, je lui en parle.",
    },
  },
  // ── u23 ───────────────────────────────────────────────────
  {
    id: "fr-g-discours-indirect", lang: "fr", cefr: "B2",
    title: { es: "El estilo indirecto", en: "Reported speech" },
    short: {
      es: "Con verbo en pasado: presente → imparfait, passé composé → plus-que-parfait, futuro → condicional.",
      en: "After a past verb: present → imparfait, passé composé → plus-que-parfait, future → conditional.",
    },
    rule: {
      es: "Para contar lo que alguien dijo con un verbo introductor en pasado (il a dit que, elle a demandé si), los tiempos retroceden y cambian pronombres y marcadores de tiempo (demain → le lendemain, hier → la veille). Las preguntas pierden la inversión y est-ce que.",
      en: "To report what someone said with a past reporting verb (il a dit que, elle a demandé si), tenses shift back and pronouns and time words change (demain → le lendemain, hier → la veille). Questions lose inversion and est-ce que.",
    },
    steps: [
      { es: "¿El verbo introductor está en pasado? → retrocede los tiempos.", en: "Is the reporting verb in the past? → shift the tenses back." },
      { es: "Adapta pronombres y posesivos (je → il / elle, mon → son).", en: "Adapt pronouns and possessives (je → il / elle, mon → son)." },
      { es: "Preguntas: oui/non → si; qu'est-ce que → ce que; qu'est-ce qui → ce qui; où, quand, comment se mantienen.", en: "Questions: yes/no → si; qu'est-ce que → ce que; qu'est-ce qui → ce qui; où, quand, comment stay." },
    ],
    table: {
      head: ["discours direct", "discours indirect"],
      rows: [["présent", "imparfait"], ["passé composé", "plus-que-parfait"], ["futur", "conditionnel"], ["futur proche (va + inf.)", "allait + inf."], ["demain / hier", "le lendemain / la veille"]],
    },
    examples: [
      { target: "Il a dit qu'il viendrait demain.", gloss: { es: "Dijo que vendría mañana.", en: "He said he would come tomorrow." } },
      { target: "Elle m'a demandé si j'étais d'accord.", gloss: { es: "Me preguntó si estaba de acuerdo.", en: "She asked me if I agreed." } },
    ],
    pitfalls: {
      es: "En estilo indirecto no se dice «qu'est-ce que»: il m'a demandé ce que je voulais. Y «si» + il → s'il.",
      en: "No 'qu'est-ce que' in reported speech: il m'a demandé ce que je voulais. And si + il → s'il.",
    },
  },
  {
    id: "fr-g-subj-conjonctions", lang: "fr", cefr: "B2",
    title: { es: "Conjunciones con subjuntivo", en: "Conjunctions with the subjunctive" },
    short: {
      es: "bien que, pour que, avant que, à condition que, sans que, jusqu'à ce que + subjuntivo. après que + indicativo.",
      en: "bien que, pour que, avant que, à condition que, sans que, jusqu'à ce que + subjunctive. après que + indicative.",
    },
    rule: {
      es: "Estas conjunciones siempre piden subjuntivo, aunque en español a veces vayan con indicativo (aunque es tarde → bien qu'il soit tard). Si el sujeto es el mismo, se prefiere la preposición + infinitivo: pour partir, avant de partir, sans le savoir.",
      en: "These conjunctions always take the subjunctive. With the same subject, prefer preposition + infinitive: pour partir, avant de partir, sans le savoir.",
    },
    steps: [
      { es: "¿Hay bien que, pour que, avant que, à condition que, sans que? → subjuntivo.", en: "Is there bien que, pour que, avant que, à condition que, sans que? → subjunctive." },
      { es: "¿Mismo sujeto? → pour / avant de / sans + infinitivo.", en: "Same subject? → pour / avant de / sans + infinitive." },
      { es: "après que es la excepción: indicativo.", en: "après que is the exception: indicative." },
    ],
    table: {
      head: ["conjonction", "exemple"],
      rows: [["bien que", "bien qu'il soit tard"], ["pour que", "pour que tu comprennes"], ["avant que", "avant qu'elle parte"], ["à condition que", "à condition que ce soit clair"], ["sans que", "sans qu'on le sache"], ["après que (+ ind.)", "après qu'il est parti"]],
    },
    examples: [
      { target: "Je parle lentement pour que tout le monde comprenne.", gloss: { es: "Hablo despacio para que todos entiendan.", en: "I speak slowly so that everyone understands." } },
      { target: "Bien qu'il soit compétent, il n'a pas eu le poste.", gloss: { es: "Aunque es competente, no le dieron el puesto.", en: "Although he's competent, he didn't get the job." } },
    ],
    pitfalls: {
      es: "«aunque» con hechos reales va en indicativo en español, pero «bien que» siempre lleva subjuntivo: bien qu'il pleuve (aunque llueve).",
      en: "English doesn't mark it: 'although he is' = bien qu'il soit, never 'bien qu'il est'.",
    },
  },
  // ── u24 ───────────────────────────────────────────────────
  {
    id: "fr-g-mise-en-relief", lang: "fr", cefr: "B2",
    title: { es: "Poner énfasis: c'est… qui / c'est… que", en: "Emphasis: c'est… qui / c'est… que" },
    short: {
      es: "c'est + sujeto + qui · c'est + otro elemento + que: c'est moi qui ai fait ça, c'est ici que j'habite.",
      en: "c'est + subject + qui · c'est + other element + que: c'est moi qui ai fait ça, c'est ici que j'habite.",
    },
    rule: {
      es: "El francés destaca una parte de la frase encerrándola en c'est… qui (sujeto) o c'est… que (cualquier otro elemento: objeto, lugar, tiempo). Tras c'est moi / toi / nous qui, el verbo concuerda con ese pronombre.",
      en: "French highlights part of a sentence by framing it with c'est… qui (subject) or c'est… que (anything else: object, place, time). After c'est moi / toi / nous qui, the verb agrees with that pronoun.",
    },
    steps: [
      { es: "¿Destacas el sujeto? → c'est + sujeto + qui.", en: "Highlighting the subject? → c'est + subject + qui." },
      { es: "¿Otro elemento? → c'est + elemento + que.", en: "Something else? → c'est + element + que." },
      { es: "Con pronombres, usa la forma tónica (moi, toi, lui, eux) y concuerda el verbo.", en: "With pronouns use the stressed form (moi, toi, lui, eux) and make the verb agree." },
    ],
    table: {
      head: ["", "exemple"],
      rows: [["sujet", "C'est Léa qui a appelé."], ["pronom", "C'est moi qui ai fait le gâteau."], ["objet", "C'est ce film que je veux voir."], ["lieu / temps", "C'est à Paris qu'on s'est rencontrés."]],
    },
    examples: [
      { target: "C'est moi qui ai fait le gâteau.", gloss: { es: "Fui yo quien hizo el pastel.", en: "I'm the one who made the cake." } },
      { target: "C'est à Paris qu'on s'est rencontrés.", gloss: { es: "Fue en París donde nos conocimos.", en: "It was in Paris that we met." } },
    ],
    pitfalls: {
      es: "En español decimos «fue en París donde»; en francés siempre «c'est… que», nunca «où»: c'est à Paris que.",
      en: "'c'est moi qui a' is wrong: the verb agrees with moi → c'est moi qui ai.",
    },
  },
  {
    id: "fr-g-registre-oral", lang: "fr", cefr: "B2",
    title: { es: "El francés hablado informal", en: "Informal spoken French" },
    short: {
      es: "Se omite «ne», «on» reemplaza a «nous», preguntas con entonación y vocabulario familiar (boulot, bagnole).",
      en: "'ne' is dropped, 'on' replaces 'nous', questions use intonation and informal words appear (boulot, bagnole).",
    },
    rule: {
      es: "El francés hablado se aleja mucho del escrito. Lo normal entre amigos es omitir el «ne» de la negación, usar «on» en vez de «nous», preguntar solo con la entonación y usar palabras familiares. Hay que entenderlo, pero en un correo formal o un examen se usa la forma estándar.",
      en: "Spoken French differs a lot from written French. Among friends it's normal to drop the 'ne' of the negation, use 'on' for 'nous', ask questions by intonation only and use informal words. You need to understand it, but use the standard forms in formal emails or exams.",
    },
    steps: [
      { es: "¿Situación formal o escrita? → ne… pas, nous, est-ce que, vocabulario neutro.", en: "Formal or written? → ne… pas, nous, est-ce que, neutral words." },
      { es: "¿Entre amigos? → pas solo, on, entonación, palabras familiares.", en: "Among friends? → pas alone, on, intonation, informal words." },
    ],
    table: {
      head: ["standard", "familier"],
      rows: [["Je ne sais pas.", "Je sais pas. / Chais pas."], ["Nous partons.", "On part."], ["Est-ce que tu viens ?", "Tu viens ?"], ["le travail", "le boulot"], ["la voiture", "la bagnole"], ["l'argent", "le fric"]],
    },
    examples: [
      { target: "Je sais pas, moi.", gloss: { es: "Pues yo no sé.", en: "Well, I don't know." } },
      { target: "On y va ?", gloss: { es: "¿Nos vamos?", en: "Shall we go?" } },
    ],
    pitfalls: {
      es: "No mezcles registros: «Monsieur le directeur, je sais pas» suena muy mal. Algunas palabras (le fric, le mec) son demasiado familiares para el trabajo.",
      en: "Don't mix registers: 'Monsieur le directeur, je sais pas' sounds rude. Some words (le fric, le mec) are too informal for work.",
    },
  },
];
