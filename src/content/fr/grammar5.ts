import type { GrammarPoint } from "../schema";

// Grammar points for French units u31–u36 (C2, content v2.1). Same shape as grammar.ts.
export const grammar5: GrammarPoint[] = [
  // ── u31 ───────────────────────────────────────────────────
  {
    id: "fr-g-passe-simple", lang: "fr", cefr: "C2",
    title: { es: "El passé simple (reconocerlo y leerlo)", en: "The passé simple (recognising and reading it)" },
    short: {
      es: "Pretérito literario: il parla, il finit, il prit, il fut, il eut. Mismo sentido que el passé composé, solo escrito.",
      en: "Literary past: il parla, il finit, il prit, il fut, il eut. Same meaning as the passé composé, but written only.",
    },
    rule: {
      es: "El passé simple es el tiempo de la novela, el cuento y la historia. Equivale al passé composé (o al pretérito español) y convive con el imparfait para las descripciones. Hay tres tipos de terminación: -a (verbos en -er), -it y -ut; algunos irregulares: il vint, il tint.",
      en: "The passé simple is the tense of novels, tales and history books. It means the same as the passé composé and sits alongside the imparfait for descriptions. There are three ending types: -a (-er verbs), -it and -ut; a few irregulars: il vint, il tint.",
    },
    steps: [
      { es: "¿Verbo en -er? → -a / -èrent: il parla, ils parlèrent.", en: "-er verb? → -a / -èrent: il parla, ils parlèrent." },
      { es: "¿Otro verbo? → -it o -ut: il finit, il prit, il eut, il fut.", en: "Other verb? → -it or -ut: il finit, il prit, il eut, il fut." },
      { es: "Para entenderlo, tradúcelo como un pretérito: il ouvrit = abrió.", en: "To understand it, read it as a simple past: il ouvrit = he opened." },
    ],
    table: {
      head: ["", "parler", "finir", "être"],
      rows: [["je", "parlai", "finis", "fus"], ["tu", "parlas", "finis", "fus"], ["il / elle", "parla", "finit", "fut"], ["nous", "parlâmes", "finîmes", "fûmes"], ["vous", "parlâtes", "finîtes", "fûtes"], ["ils / elles", "parlèrent", "finirent", "furent"]],
    },
    examples: [
      { target: "Il ouvrit la porte et sortit.", gloss: { es: "Abrió la puerta y salió.", en: "He opened the door and went out." } },
      { target: "Ils eurent peur et s'enfuirent.", gloss: { es: "Tuvieron miedo y huyeron.", en: "They were frightened and ran away." } },
    ],
    pitfalls: {
      es: "No confundas «il fut» (passé simple de être) con «il fût» (subjuntivo imperfecto), ni «il fit» (faire) con «il fut» (être).",
      en: "Don't confuse il fut (être, passé simple) with il fût (imperfect subjunctive), or il fit (faire) with il fut (être).",
    },
  },
  {
    id: "fr-g-subj-imparfait", lang: "fr", cefr: "C2",
    title: { es: "El subjuntivo imperfecto y pluscuamperfecto (literarios)", en: "The imperfect and pluperfect subjunctive (literary)" },
    short: {
      es: "qu'il fût, qu'il eût, qu'il vînt: hoy se reemplazan por qu'il soit, qu'il ait, qu'il vienne.",
      en: "qu'il fût, qu'il eût, qu'il vînt: today replaced by qu'il soit, qu'il ait, qu'il vienne.",
    },
    rule: {
      es: "En la lengua clásica, tras un verbo principal en pasado, el subjuntivo va en imperfecto (je voulais qu'il vînt). Hoy solo se lee: en el uso moderno se pone el subjuntivo presente. El pluscuamperfecto del subjuntivo (eût su, eût été) aparece también como «condicional pasado segunda forma»: eût-il su… = aunque hubiera sabido…",
      en: "In classical French, after a main verb in the past, the subjunctive is imperfect (je voulais qu'il vînt). Today you only read it: modern usage puts the present subjunctive. The pluperfect subjunctive (eût su, eût été) also serves as a 'second past conditional': eût-il su… = even had he known…",
    },
    steps: [
      { es: "Busca el circunflejo en la 3.ª persona del singular: fût, eût, vînt, parlât.", en: "Look for the circumflex in the third person singular: fût, eût, vînt, parlât." },
      { es: "Para entenderlo, cámbialo por el subjuntivo presente: qu'il fût → qu'il soit.", en: "To understand it, swap in the present subjunctive: qu'il fût → qu'il soit." },
      { es: "eût + participio al inicio de frase = hipótesis en pasado.", en: "eût + participle at the start of a sentence = a past hypothesis." },
    ],
    table: {
      head: ["littéraire", "moderne"],
      rows: [["qu'il fût", "qu'il soit"], ["qu'il eût", "qu'il ait"], ["qu'il vînt", "qu'il vienne"], ["qu'il parlât", "qu'il parle"], ["qu'il eût fini", "qu'il ait fini"], ["eût-il su", "même s'il avait su"]],
    },
    examples: [
      { target: "Il fallait qu'il partît avant l'aube.", gloss: { es: "Era necesario que partiera antes del alba.", en: "He had to leave before dawn." } },
      { target: "Eût-il connu la vérité, il n'aurait rien dit.", gloss: { es: "Aunque hubiera conocido la verdad, no habría dicho nada.", en: "Even had he known the truth, he would have said nothing." } },
    ],
    pitfalls: {
      es: "No lo uses al hablar: suena pedante. Y el acento importa: il fut (pasado) ≠ qu'il fût (subjuntivo).",
      en: "Don't use it in speech: it sounds pompous. And the accent matters: il fut (past) ≠ qu'il fût (subjunctive).",
    },
  },
  // ── u32 ───────────────────────────────────────────────────
  {
    id: "fr-g-paronymes", lang: "fr", cefr: "C2",
    title: { es: "Parónimos: palabras que se parecen", en: "Paronyms: look-alike words" },
    short: {
      es: "éminent ≠ imminent, conjoncture ≠ conjecture, effraction ≠ infraction, perpétrer ≠ perpétuer.",
      en: "éminent ≠ imminent, conjoncture ≠ conjecture, effraction ≠ infraction, perpétrer ≠ perpétuer.",
    },
    rule: {
      es: "Los parónimos se escriben y suenan casi igual pero significan cosas distintas. Muchos francófonos los confunden; usarlos bien es una marca del nivel C2. Aprende cada par con un ejemplo típico.",
      en: "Paronyms are spelt and pronounced almost alike but mean different things. Many native speakers mix them up; using them correctly is a mark of C2. Learn each pair with a typical example.",
    },
    steps: [
      { es: "¿Hablas de algo que está a punto de pasar? → imminent; de alguien destacado → éminent.", en: "Something about to happen? → imminent; someone distinguished → éminent." },
      { es: "¿La situación del momento? → conjoncture; ¿una suposición? → conjecture.", en: "The current situation? → conjoncture; a guess? → conjecture." },
      { es: "¿Forzar una puerta? → effraction; ¿violar una norma? → infraction.", en: "Forcing a door? → effraction; breaking a rule? → infraction." },
    ],
    table: {
      head: ["mot", "sens", "paronyme"],
      rows: [["éminent", "remarquable", "imminent (très proche)"], ["conjoncture", "situation", "conjecture (hypothèse)"], ["effraction", "forcer une entrée", "infraction (délit)"], ["perpétrer", "commettre", "perpétuer (faire durer)"], ["infester", "envahir", "infecter (contaminer)"], ["prolongement", "dans l'espace", "prolongation (temps)"]],
    },
    examples: [
      { target: "Le départ est imminent.", gloss: { es: "La salida es inminente.", en: "Departure is imminent." } },
      { target: "Les voleurs sont entrés par effraction.", gloss: { es: "Los ladrones entraron forzando la puerta.", en: "The thieves broke in." } },
    ],
    pitfalls: {
      es: "El español ayuda a veces (inminente / eminente), pero no con effraction: «entrar por fractura» no existe; se dice entrer par effraction.",
      en: "English helps with some (imminent / eminent), but 'conjuncture' is rare: the everyday French word is conjoncture.",
    },
  },
  {
    id: "fr-g-quel-que", lang: "fr", cefr: "C2",
    title: { es: "Concesión culta: quel que, quelque… que, si… que", en: "Formal concession: quel que, quelque… que, si… que" },
    short: {
      es: "quelles que soient les raisons; quelque effort qu'il fasse; si fort qu'il soit: siempre con subjuntivo.",
      en: "quelles que soient les raisons; quelque effort qu'il fasse; si fort qu'il soit: always the subjunctive.",
    },
    rule: {
      es: "quel que (en dos palabras) + être en subjuntivo: quel concuerda con el sujeto pospuesto. quelque (una palabra) + sustantivo + que + subjuntivo. si, aussi o quelque + adjetivo + que + subjuntivo. Equivalen a «sea cual sea», «por más… que», «por muy… que».",
      en: "quel que (two words) + être in the subjunctive: quel agrees with the subject that follows. quelque (one word) + noun + que + subjunctive. si, aussi or quelque + adjective + que + subjunctive. They mean 'whatever', 'however much', 'however (adjective)'.",
    },
    steps: [
      { es: "¿Va seguido de être? → quel que, concordado: quelles que soient les difficultés.", en: "Followed by être? → quel que, agreeing: quelles que soient les difficultés." },
      { es: "¿Va seguido de un sustantivo? → quelque(s) + sustantivo + que.", en: "Followed by a noun? → quelque(s) + noun + que." },
      { es: "¿Va seguido de un adjetivo? → si / aussi + adjetivo + que.", en: "Followed by an adjective? → si / aussi + adjective + que." },
    ],
    table: {
      head: ["structure", "exemple"],
      rows: [["quel que + être", "quel que soit le prix"], ["quelle que + être", "quelle que soit l'heure"], ["quelque + nom + que", "quelques efforts qu'il fasse"], ["si + adj. + que", "si riche qu'il soit"]],
    },
    examples: [
      { target: "Quelles que soient vos raisons, c'est inacceptable.", gloss: { es: "Sean cuales sean sus razones, es inaceptable.", en: "Whatever your reasons, it's unacceptable." } },
      { target: "Si intelligent qu'il soit, il ne peut pas tout savoir.", gloss: { es: "Por muy inteligente que sea, no puede saberlo todo.", en: "However intelligent he may be, he can't know everything." } },
    ],
    pitfalls: {
      es: "«Quelques soient les raisons» es un error muy frecuente: delante de être son dos palabras, quel(le)(s) que.",
      en: "'Quelques soient les raisons' is a very common mistake: before être it's two words, quel(le)(s) que.",
    },
  },
  // ── u33 ───────────────────────────────────────────────────
  {
    id: "fr-g-formules-administratives", lang: "fr", cefr: "C2",
    title: { es: "Fórmulas de la carta administrativa", en: "Set phrases of official letters" },
    short: {
      es: "Veuillez trouver ci-joint…, le cas échéant, en vertu de, Je vous prie d'agréer… l'expression de mes salutations distinguées.",
      en: "Veuillez trouver ci-joint…, le cas échéant, en vertu de, Je vous prie d'agréer… l'expression de mes salutations distinguées.",
    },
    rule: {
      es: "La correspondencia oficial usa fórmulas fijas para adjuntar (ci-joint), condicionar (le cas échéant), citar la norma (en vertu de, conformément à) y despedirse (Je vous prie d'agréer…). «ci-joint» no concuerda al inicio de la frase ni delante de un sustantivo sin artículo; delante de un sustantivo con artículo, la concordancia es opcional.",
      en: "Official correspondence uses fixed formulas to attach (ci-joint), add a condition (le cas échéant), cite the rule (en vertu de, conformément à) and sign off (Je vous prie d'agréer…). ci-joint doesn't agree at the start of a sentence or before a noun without an article; before a noun with an article, agreement is optional.",
    },
    steps: [
      { es: "Inicio: Madame, Monsieur, (sin «cher» si no conoces a la persona).", en: "Opening: Madame, Monsieur, (no cher if you don't know them)." },
      { es: "Cuerpo: fórmulas como Suite à votre courrier du…, Veuillez trouver ci-joint…", en: "Body: phrases like Suite à votre courrier du…, Veuillez trouver ci-joint…" },
      { es: "Cierre: Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.", en: "Close: Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées." },
    ],
    table: {
      head: ["fonction", "formule"],
      rows: [["joindre", "Veuillez trouver ci-joint…"], ["condition", "le cas échéant"], ["base légale", "en vertu de l'article…"], ["malgré", "nonobstant"], ["conclure", "Je vous prie d'agréer…"]],
    },
    examples: [
      { target: "Ci-joint la copie de mon passeport.", gloss: { es: "Adjunto la copia de mi pasaporte.", en: "Attached is a copy of my passport." } },
      { target: "Le cas échéant, nous vous contacterons.", gloss: { es: "Si procede, nos pondremos en contacto con usted.", en: "Where applicable, we will contact you." } },
    ],
    pitfalls: {
      es: "No traduzcas «Atentamente» como «Attentivement»: la despedida francesa es una frase entera (Je vous prie d'agréer…).",
      en: "Don't translate 'Yours faithfully' word for word: the French sign-off is a full sentence (Je vous prie d'agréer…).",
    },
  },
  {
    id: "fr-g-impersonnel-soutenu", lang: "fr", cefr: "C2",
    title: { es: "Impersonales cultos: il incombe à, il appartient à, il importe que", en: "Formal impersonals: il incombe à, il appartient à, il importe que" },
    short: {
      es: "il incombe / il appartient à qqn de + inf. (le corresponde); il convient de + inf.; il importe que + subjuntivo.",
      en: "il incombe / il appartient à qqn de + inf. (it's someone's duty); il convient de + inf.; il importe que + subjunctive.",
    },
    rule: {
      es: "Estas construcciones impersonales son típicas de textos jurídicos y administrativos. il incombe à expresa una obligación; il appartient à, una competencia; il convient de, una recomendación; il importe que (+ subjuntivo), una importancia.",
      en: "These impersonal constructions are typical of legal and official texts. il incombe à expresses an obligation; il appartient à, a responsibility or power; il convient de, a recommendation; il importe que (+ subjunctive), importance.",
    },
    steps: [
      { es: "Elige el verbo según el matiz: obligación, competencia, consejo o importancia.", en: "Choose the verb by nuance: obligation, responsibility, advice or importance." },
      { es: "Persona con «à» (contraída si hace falta: au locataire) y acción con «de» + infinitivo.", en: "Person with à (contracted if needed: au locataire) and action with de + infinitive." },
      { es: "Con «il importe que», el verbo va en subjuntivo.", en: "With il importe que, the verb is in the subjunctive." },
    ],
    table: {
      head: ["tournure", "sens", "exemple"],
      rows: [["il incombe à", "obligation", "il incombe au vendeur de…"], ["il appartient à", "compétence", "il appartient au juge de…"], ["il convient de", "recommandation", "il convient de vérifier"], ["il importe que", "importance", "il importe que tu viennes"]],
    },
    examples: [
      { target: "Il incombe au locataire d'entretenir le logement.", gloss: { es: "Corresponde al inquilino mantener la vivienda.", en: "It is the tenant's responsibility to maintain the property." } },
      { target: "Il importe que chacun soit informé.", gloss: { es: "Es importante que todos estén informados.", en: "It is important that everyone be informed." } },
    ],
    pitfalls: {
      es: "«Il incombe» no lleva objeto directo: il incombe au locataire, no «il incombe le locataire».",
      en: "il incombe takes à + person: il incombe au locataire, never a direct object.",
    },
  },
  // ── u34 ───────────────────────────────────────────────────
  {
    id: "fr-g-proverbes", lang: "fr", cefr: "C2",
    title: { es: "La gramática de los refranes", en: "The grammar of proverbs" },
    short: {
      es: "Qui = el que (qui vivra verra); sustantivos sin artículo (chat échaudé…); ne sin pas (qui ne dit mot).",
      en: "Qui = whoever (qui vivra verra); nouns without articles (chat échaudé…); ne without pas (qui ne dit mot).",
    },
    rule: {
      es: "Los refranes conservan rasgos del francés antiguo: «qui» sin antecedente significa «el que» (qui veut voyager loin ménage sa monture); los sustantivos pueden ir sin artículo (pierre qui roule n'amasse pas mousse); la negación puede ser solo «ne».",
      en: "Proverbs keep features of older French: qui with no antecedent means 'whoever' (qui veut voyager loin ménage sa monture); nouns can drop the article (pierre qui roule n'amasse pas mousse); negation can be ne alone.",
    },
    steps: [
      { es: "¿Empieza por «Qui»? → léelo como «El que…».", en: "Starts with Qui? → read it as 'Whoever…'." },
      { es: "¿Falta el artículo? → es un rasgo antiguo, no un error.", en: "Missing article? → an old feature, not a mistake." },
      { es: "Busca el equivalente en tu idioma, no la traducción literal.", en: "Look for the equivalent in your language, not a literal translation." },
    ],
    table: {
      head: ["trait", "proverbe"],
      rows: [["qui = celui qui", "Qui vivra verra."], ["sans article", "Chat échaudé craint l'eau froide."], ["ne seul", "Qui ne dit mot consent."], ["inversion", "Tel est pris qui croyait prendre."]],
    },
    examples: [
      { target: "Qui vivra verra.", gloss: { es: "El tiempo lo dirá.", en: "Time will tell." } },
      { target: "Pierre qui roule n'amasse pas mousse.", gloss: { es: "Piedra que rueda no cría musgo.", en: "A rolling stone gathers no moss." } },
    ],
    pitfalls: {
      es: "No añadas artículos ni «pas»: «Le chat échaudé…» o «Qui ne dit pas mot…» suenan raros.",
      en: "Don't add articles or pas: 'Le chat échaudé…' or 'Qui ne dit pas mot…' sound wrong.",
    },
  },
  {
    id: "fr-g-ne-litteraire", lang: "fr", cefr: "C2",
    title: { es: "El «ne» literario sin «pas»", en: "Literary ne without pas" },
    short: {
      es: "Con savoir, pouvoir, oser, cesser: je ne saurais dire, je n'ose y croire, je ne puis, il ne cesse de pleuvoir.",
      en: "With savoir, pouvoir, oser, cesser: je ne saurais dire, je n'ose y croire, je ne puis, il ne cesse de pleuvoir.",
    },
    rule: {
      es: "En registro culto, savoir, pouvoir, oser y cesser pueden negarse solo con «ne». «Je ne saurais» (condicional de savoir) significa «no podría». Fórmulas fijas: si je ne m'abuse (si no me equivoco), n'importe, qu'à cela ne tienne.",
      en: "In formal French, savoir, pouvoir, oser and cesser can be negated with ne alone. Je ne saurais (conditional of savoir) means 'I couldn't'. Fixed phrases: si je ne m'abuse (unless I'm mistaken), n'importe, qu'à cela ne tienne.",
    },
    steps: [
      { es: "¿Es uno de estos cuatro verbos? → puedes omitir «pas» en registro culto.", en: "One of these four verbs? → you may drop pas in formal style." },
      { es: "Con otros verbos, la negación sigue siendo ne… pas.", en: "With other verbs, negation is still ne… pas." },
    ],
    table: {
      head: ["soutenu", "courant"],
      rows: [["je ne sais", "je ne sais pas"], ["je ne saurais dire", "je ne pourrais pas dire"], ["je n'ose le croire", "je n'ose pas le croire"], ["je ne puis", "je ne peux pas"], ["il ne cesse de…", "il n'arrête pas de…"]],
    },
    examples: [
      { target: "Je ne saurais vous le dire.", gloss: { es: "No sabría decírselo.", en: "I couldn't tell you." } },
      { target: "Si je ne m'abuse, nous nous connaissons.", gloss: { es: "Si no me equivoco, nos conocemos.", en: "Unless I'm mistaken, we know each other." } },
    ],
    pitfalls: {
      es: "«Je ne puis» solo existe en la negación literaria; afirmativo y corriente es «je peux».",
      en: "je ne puis only exists in literary negation; the normal form is je peux.",
    },
  },
  // ── u35 ───────────────────────────────────────────────────
  {
    id: "fr-g-figures", lang: "fr", cefr: "C2",
    title: { es: "Figuras de la ironía: lítote, antífrasis, eufemismo, hipérbole", en: "Figures of irony: litotes, antiphrasis, euphemism, hyperbole" },
    short: {
      es: "Ce n'est pas mal (lítote), Bravo ! (antífrasis), il nous a quittés (eufemismo), je meurs de faim (hipérbole).",
      en: "Ce n'est pas mal (litotes), Bravo ! (antiphrasis), il nous a quittés (euphemism), je meurs de faim (hyperbole).",
    },
    rule: {
      es: "El humor francés usa mucho la lítote (decir menos para decir más), la antífrasis (decir lo contrario, con tono irónico), el eufemismo (suavizar) y la hipérbole (exagerar). Para entenderlas hay que mirar el contexto y el tono, no solo las palabras.",
      en: "French humour relies heavily on litotes (saying less to mean more), antiphrasis (saying the opposite, ironically), euphemism (softening) and hyperbole (exaggerating). To get them, look at context and tone, not just the words.",
    },
    steps: [
      { es: "¿La frase niega lo contrario de lo que se piensa? → lítote: pas mal = muy bien.", en: "Does it deny the opposite of what's meant? → litotes: pas mal = very good." },
      { es: "¿El contexto contradice las palabras? → antífrasis (ironía).", en: "Does the context contradict the words? → antiphrasis (irony)." },
      { es: "¿Suaviza algo duro (muerte, despido)? → eufemismo.", en: "Does it soften something harsh (death, dismissal)? → euphemism." },
    ],
    table: {
      head: ["figure", "exemple", "sens réel"],
      rows: [["litote", "Ce n'est pas mal.", "C'est très bien."], ["antiphrase", "Bravo, champion !", "Quelle erreur !"], ["euphémisme", "Il nous a quittés.", "Il est mort."], ["hyperbole", "Je meurs de faim !", "J'ai très faim."]],
    },
    examples: [
      { target: "Va, je ne te hais point.", gloss: { es: "Vete, no te odio en absoluto (= te amo).", en: "Go, I do not hate you (= I love you)." } },
      { target: "Tu es d'une ponctualité remarquable…", gloss: { es: "Eres de una puntualidad admirable… (irónico)", en: "You're remarkably punctual… (ironic)" } },
    ],
    pitfalls: {
      es: "«Ce n'est pas mal» casi siempre es un elogio, no una crítica tibia.",
      en: "Ce n'est pas mal is nearly always praise, not lukewarm criticism.",
    },
  },
  {
    id: "fr-g-exclamatives", lang: "fr", cefr: "C2",
    title: { es: "Las frases exclamativas", en: "Exclamative sentences" },
    short: {
      es: "Quel culot ! · Que de monde ! · Comme c'est beau ! · Ce qu'il est drôle ! · Qu'est-ce qu'on s'est amusés !",
      en: "Quel culot ! · Que de monde ! · Comme c'est beau ! · Ce qu'il est drôle ! · Qu'est-ce qu'on s'est amusés !",
    },
    rule: {
      es: "Con un sustantivo: quel(le)(s) + sustantivo (quelle chance !) o que de + sustantivo (que de monde ! = ¡cuánta gente!). Con una frase: que o comme (más culto), ce que o qu'est-ce que (más coloquial), sin inversión del sujeto.",
      en: "With a noun: quel(le)(s) + noun (quelle chance !) or que de + noun (que de monde ! = what a lot of people!). With a clause: que or comme (more formal), ce que or qu'est-ce que (more informal), with no subject inversion.",
    },
    steps: [
      { es: "¿Exclamas sobre un sustantivo? → quel concordado o que de.", en: "Exclaiming about a noun? → agreeing quel, or que de." },
      { es: "¿Sobre una frase entera? → comme / que / ce que / qu'est-ce que + frase normal.", en: "About a whole clause? → comme / que / ce que / qu'est-ce que + normal word order." },
    ],
    table: {
      head: ["structure", "exemple"],
      rows: [["quel + nom", "Quelle belle journée !"], ["que de + nom", "Que de souvenirs !"], ["comme + phrase", "Comme il fait beau !"], ["que + phrase", "Qu'il est grand !"], ["ce que + phrase", "Ce qu'elle chante bien !"], ["qu'est-ce que + phrase", "Qu'est-ce qu'il fait froid !"]],
    },
    examples: [
      { target: "Que de monde dans ce métro !", gloss: { es: "¡Cuánta gente en este metro!", en: "What a crowd on this metro!" } },
      { target: "Ce qu'il est drôle, celui-là !", gloss: { es: "¡Qué gracioso es ese!", en: "Isn't he hilarious, that one!" } },
    ],
    pitfalls: {
      es: "No calques «¡Qué grande es!» como «Que grand il est !»: se dice «Qu'il est grand !» o «Comme il est grand !».",
      en: "Don't calque 'How big it is!' as 'Comment il est grand !': say Qu'il est grand ! or Comme il est grand !",
    },
  },
  // ── u36 ───────────────────────────────────────────────────
  {
    id: "fr-g-variation", lang: "fr", cefr: "C2",
    title: { es: "El francés de Bélgica, Suiza y Quebec", en: "The French of Belgium, Switzerland and Quebec" },
    short: {
      es: "septante, nonante (BE, CH), huitante (CH); déjeuner-dîner-souper; Quebec: courriel, magasiner, la fin de semaine.",
      en: "septante, nonante (BE, CH), huitante (CH); déjeuner-dîner-souper; Quebec: courriel, magasiner, la fin de semaine.",
    },
    rule: {
      es: "La gramática es común a toda la francofonía; cambian la pronunciación, algunos números, las comidas y parte del léxico. Bélgica y Suiza dicen septante y nonante (y gran parte de Suiza, huitante); Bélgica, Suiza y Quebec llaman déjeuner, dîner y souper a desayuno, almuerzo y cena.",
      en: "Grammar is shared across the French-speaking world; pronunciation, some numbers, meals and part of the vocabulary differ. Belgium and Switzerland say septante and nonante (and much of Switzerland huitante); Belgium, Switzerland and Quebec call breakfast, lunch and dinner déjeuner, dîner and souper.",
    },
    steps: [
      { es: "Números: 70 = septante, 90 = nonante en Bélgica y Suiza; 80 = huitante en buena parte de Suiza.", en: "Numbers: 70 = septante, 90 = nonante in Belgium and Switzerland; 80 = huitante in much of Switzerland." },
      { es: "Comidas: déjeuner (mañana), dîner (mediodía), souper (noche) fuera de Francia.", en: "Meals: déjeuner (morning), dîner (midday), souper (evening) outside France." },
      { es: "Quebec evita anglicismos: courriel, clavarder (chatear), magasiner.", en: "Quebec avoids anglicisms: courriel, clavarder (to chat online), magasiner." },
    ],
    table: {
      head: ["France", "Belgique", "Suisse", "Québec"],
      rows: [["soixante-dix", "septante", "septante", "soixante-dix"], ["quatre-vingts", "quatre-vingts", "huitante", "quatre-vingts"], ["petit-déjeuner", "déjeuner", "déjeuner", "déjeuner"], ["déjeuner", "dîner", "dîner", "dîner"], ["dîner", "souper", "souper", "souper"], ["portable", "GSM", "natel", "cellulaire"]],
    },
    examples: [
      { target: "Ça fait nonante euros.", gloss: { es: "Son noventa euros.", en: "That'll be ninety euros." } },
      { target: "On va magasiner en fin de semaine.", gloss: { es: "Vamos a ir de compras el fin de semana.", en: "We're going shopping at the weekend." } },
    ],
    pitfalls: {
      es: "Ninguna variante es «incorrecta»: el curso usa el francés de Francia, pero entiende y respeta las demás.",
      en: "No variety is 'wrong': this course teaches the French of France, but understand and respect the others.",
    },
  },
  {
    id: "fr-g-feminisation", lang: "fr", cefr: "C2",
    title: { es: "Femenino de las profesiones", en: "Feminine job titles" },
    short: {
      es: "-teur → -trice (directrice, autrice); -eur → -eure (professeure); -e → solo el artículo (la ministre).",
      en: "-teur → -trice (directrice, autrice); -eur → -eure (professeure); -e → just the article (la ministre).",
    },
    rule: {
      es: "Quebec, Suiza y Bélgica feminizaron los nombres de profesiones antes que Francia; la Academia francesa los aceptó en 2019. Reglas: -teur → -trice, -eur → -euse si hay un verbo cercano (vendeur → vendeuse) y -eure si no (professeure), -ier → -ière, y palabras en -e solo cambian el artículo.",
      en: "Quebec, Switzerland and Belgium feminised job titles before France; the Académie française accepted them in 2019. Rules: -teur → -trice, -eur → -euse when there's a related verb (vendeur → vendeuse) and -eure when there isn't (professeure), -ier → -ière, and words in -e only change the article.",
    },
    steps: [
      { es: "¿Termina en -teur? → -trice: directeur → directrice.", en: "Ends in -teur? → -trice: directeur → directrice." },
      { es: "¿Termina en -eur sin verbo cercano? → -eure: professeur → professeure.", en: "Ends in -eur with no related verb? → -eure: professeur → professeure." },
      { es: "¿Termina en -e? → cambia solo el artículo: la ministre, la juge.", en: "Ends in -e? → just change the article: la ministre, la juge." },
    ],
    table: {
      head: ["règle", "masculin", "féminin"],
      rows: [["-teur → -trice", "le directeur", "la directrice"], ["-eur → -eure", "le professeur", "la professeure"], ["-ier → -ière", "le pompier", "la pompière"], ["-e → article", "le ministre", "la ministre"], ["-ef → -effe", "le chef", "la cheffe"]],
    },
    examples: [
      { target: "La ministre a nommé une nouvelle directrice.", gloss: { es: "La ministra nombró a una nueva directora.", en: "The minister appointed a new director." } },
      { target: "C'est une autrice reconnue.", gloss: { es: "Es una autora reconocida.", en: "She's a well-known author." } },
    ],
    pitfalls: {
      es: "Todavía conviven formas: l'autrice / l'auteure, la cheffe / la chef. «Madame le ministre» hoy suena anticuado.",
      en: "Some forms still coexist: l'autrice / l'auteure, la cheffe / la chef. 'Madame le ministre' now sounds dated.",
    },
  },
];
