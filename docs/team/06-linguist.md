# 06 · Linguist — content audit, style guide, pitfalls, checking

_Native-speaker linguist (Italian, German; CEFR; teaching to Spanish and English speakers). 2026-11-12._

## 1. Content audit (v1 → v2)

The v1 content is mostly accurate. The main problems are owner-specific items, Swiss forms presented as standard, rioplatense glosses, and a few misleading notes. **R** = remove, **F** = fix, **K** = keep with the edit shown.

### Italian (`src/content/it.ts`, glosses in Spanish)

| id | Problem | Fix |
|---|---|---|
| file header, all `guess.q` | Voseo ("Escuchá y elegí") and the comment "rioplatense-friendly" | Use neutral tú: "Escucha y elige cómo se escribe". See §2. |
| it-s-gli | "como en el español de España antiguo" is wrong: the lateral *ll* [ʎ] is still alive in parts of Spain, Paraguay and the Andes | "gli suena como una «ll» pronunciada con la lengua en el paladar (como en partes de España, Paraguay o los Andes), nunca «li» ni «sh»". |
| it-s-g | "tu «y» porteña" assumes an Argentine learner. "dy" is a vague description | "g + e/i suena como la «j» del inglés *jeans* (≈ «dy» suave)". The porteño comparison can go in an optional regional note. |
| it-s-z | OK (zio = [ts]), but *z* varies by word and region | Add: "en otras palabras suena «dz» (zero, zaino)". Keep the item. |
| it-p-ta2 | "El acento va hacia abajo" is unclear | "Se escribe con acento grave: à (no á)". |
| it-f-burro | "manteca" is rioplatense. In most of Spanish *manteca* means lard | Gloss: "mantequilla"; note "(en Argentina/Uruguay: manteca)". Add "somaro" as a second word for donkey. |
| it-f-gamba | *gambero* is the larger prawn/crayfish | "El camarón es «il gamberetto»; «il gambero» = langostino". |
| it-f-imbarazzata | The feminine form assumes the learner's gender | Teach "imbarazzato/a" and accept either form. |
| it-f-fermare | "¡útil en el comune!" refers to the citizenship paperwork | Delete that clause. |
| it-buongiorno | Gloss "Buen día" is rioplatense | "Buenos días". The note is fine (people use it until early afternoon). |
| it-buonasera | "(al llegar)" is misleading: *buonasera* also works as a goodbye | "Buenas tardes / Buenas noches (saludo o despedida, desde media tarde)". |
| it-arrivederci | Gloss "Hasta luego" is wrong. Hasta luego = *a dopo* / *ci vediamo* | "Adiós (neutro/formal)". Add a separate item "a dopo" = hasta luego. |
| it-grazie | The id says grazie but the answer is "Grazie mille". Plain "Grazie" is never taught | Split into "Gracias → Grazie" and "Muchas gracias → Grazie mille", alts: "molte grazie", "grazie tante". |
| it-piacere | Note uses the owner's name | "Piacere, Marco." |
| it-michiamo | Owner's name | "Me llamo Ana → Mi chiamo Ana". Later the learner's own name goes in a template. |
| it-argentina | Owner-specific nationality and gender | **R**. Replace with a nationality-agreement item (argentino/argentina, spagnolo/spagnola, inglese) and teach that nationalities are lowercase in Italian. |
| it-zurigo | Zurich-specific | **R**. Replace with "Vivo en Roma → Abito a Roma" (alt: "vivo a Roma"). Keep the note about *abitare a* + city. |
| it-capisco | OK. Add the more natural alternative | Note: "En conversación es muy común «Non ho capito» (no entendí)." |
| it-inglese | OK | Alt: "Lei parla inglese?". |
| it-zio | The list in the note is incomplete | "lo/gli antes de z, s+consonante, gn, ps, x, y: lo zio, lo psicologo, gli studenti". |
| it-bisnonnonato | Lavello, ancestry | **R**. Move the article-with-family rule to a generic item: "Mi hermano vive en Milán → Mio fratello abita a Milano". Note: no article with singular, unmodified family nouns (mia madre), but there is one with plurals (i miei fratelli), with *loro* (il loro padre) and usually with *mamma/papà*. |
| it-famigliadi | Lavello | **R** or genericize: "Mi familia es de Nápoles → La mia famiglia è di Napoli". |
| it-comune, statocivile, anagrafe, vorrei, integrale, matrimonio | The whole section is citizenship paperwork | **R** the section. Keep *il cognome*, *la data di nascita* and *il comune* as general "filling in forms" vocabulary (A2). Reuse *vorrei* in "Quisiera un café → Vorrei un caffè". Also, "lo stato civile" means *marital status* on forms, so the old alt was ambiguous. |
| it-primomaggio | OK | Alts: "il 1° maggio", "il primo di maggio". |
| it-dove | OK. "dove è" is accepted but unusual | Keep it as an alt, but grade it as an "almost" with the note "se contrae: dov'è". |
| it-biglietto | Potenza/Lavello note. "boleto" is Latin American only | "Un boleto (billete) para Roma → Un biglietto per Roma, per favore". Delete the note. |


### German (`src/content/de.ts`, glosses in English)

| id | Problem | Fix |
|---|---|---|
| file header | "Swiss spelling (ss, never ß) as primary" | Use standard spelling with ß as the primary answer. The checker accepts *ss* (see §2). |
| de-gruezi | Swiss dialect greeting taught as core vocabulary | **R** as an item. Add a regional note to *Guten Tag*: "Switzerland: Grüezi · South Germany/Austria: Grüß Gott, Servus · North: Moin". |
| de-danke | Alt "danke vielmal" is Swiss. The note mentions Zurich | Alts: "danke schön", "vielen Dank", "danke sehr". Swiss note: "CH: Merci vielmal". |
| de-tschuess | "Uf Wiederluege" is dialect, and the note is Zurich-specific | Keep the alts *Tschüs* and *ciao* (both are standard and common). Note: "informal; Austria also *Servus/Baba*, Switzerland *Ciao/Adieu*". |
| de-heisse | "heisse" without ß is the primary answer, and the note says Swiss is the norm. It also uses the owner's name | Answer "Ich heiße Anna" (alt "Ich heisse Anna" is fully correct). Note: "In Switzerland ß is written ss." |
| de-komme | Owner-specific (Argentinien), but the grammar is right | Genericize: "I come from Spain → Ich komme aus Spanien". Teach "aus der Schweiz / aus den USA / aus der Türkei" (countries that take an article) as a pitfall item. |
| de-wohne | Zurich | **R** or genericize: "I live in Berlin → Ich wohne in Berlin". |
| de-verstehe | "Ich verstehe nicht" is grammatical but sounds abrupt | Answer "Ich verstehe das nicht". Alts: "Ich verstehe nicht", "Das verstehe ich nicht". |
| de-f-handy | The note is Swiss-only | "Switzerland: das Natel (old-fashioned). Also *das Smartphone*." |
| de-f-bald | "glatzköpfig" is rare | "Bald (no hair) = *kahl*, or *eine Glatze haben*." |
| de-f-bekommen | OK | Keep the classic line: "*Ich bekomme ein Steak* = I'll have / I'm getting a steak, not 'I become'". |
| de-bahnhof | Zurich HB note | "Main station = der Hauptbahnhof (Hbf)". |
| de-kaffee | The note's explanation is clumsy. The alt "ein Kaffee" is accepted silently | Note: "Short for *Ich hätte gern einen Kaffee*: Kaffee is masculine and the object, so *einen* (accusative)." Accept "Ein Kaffee, bitte" as an **almost**: people say it, but it's the teaching point. |
| de-kostet | The alt "wieviel" is the pre-1996 spelling | Accept it as an almost with the note "since 1996: *wie viel*". |
| de-rechnung | "In Swiss cafés" is too narrow | "*Zahlen, bitte!* is common everywhere." |

The English→German patterns (t→ss/z, d→t, th→d, p→pf, v→b) and the other false friends (Gift, Chef, fast, also, Kind, Rock, Art) are correct.

**Missing from v1 and needed for a general A1 course:** articles shown with every German noun (and the plural), du/Sie pairs, numbers 1–20 in German, the time, food and drinks, directions, and Italian plurals.

## 2. Style guide for v2 content

### Register

| | Italian | German |
|---|---|---|
| Default in model sentences | **tu** for peers and everyday life, **Lei** for services and strangers. Both from A1 | **Sie** for transactions (shops, offices, strangers), **du** for friends and peers. Both from A1 |
| Introduce | tu first (simpler verbs). Lei in lesson 2–3 as "3rd person, like *usted*" | Sie early. English speakers have no T/V distinction, so it needs explicit teaching |
| Tagging | Each item that has a register gets `register: "formal" \| "informal"`. The gloss says so: "(formal)" / "(informal)" |
| Learner's own sentences | Gender-neutral, or with both forms (stanco/a, argentino/a). Accept either form | — (German predicate adjectives don't inflect) |

### Spelling standards

- **Italian:** standard Italian. Accents follow the norm: grave on à ì ò ù and on open è (è, caffè). Acute on closed é (perché, né, sé). Elision always uses the apostrophe: l'amico, dov'è, un'amica (but *un amico*, no apostrophe).
- **German:** current reformed spelling (Duden). **ß is the primary form** (Straße, heißen, weiß). Swiss *ss* is listed as a regional variant, not as an error. Every noun is capitalized and listed with its article and plural: `der Tisch, -e`.
- Regionalisms (Grüezi, Grüß Gott, Servus, Jänner, Natel, *magari* vs. *forse*) go only in `note`, labeled "CH:", "AT:", "S-DE:", never as the primary answer.

### Glosses

- **Spanish: neutral Latin American with tú**, no voseo, no peninsular *vosotros*. This reaches every Spanish speaker and the owner understands it perfectly. Where vocabulary differs, give both: "boleto (billete)", "mantequilla (manteca)", "celular/móvil". A future "rioplatense" locale toggle could swap UI strings, but the content stays neutral.
- **English: international.** Prefer forms that work in the UK and US, and give both where they differ ("mobile/cell phone", "the bill/check").
- Glosses translate meaning, not word for word. Add a literal gloss only when it teaches something: "Wie bitte? (lit. 'how please?')".
- Notes are at most 2 sentences, in the base language, give one rule and one example, and never use the owner's or any real person's name.

### Contractions and articles

- Italian articulated prepositions are written as one word: del, dello, dell', della, nel, sul, al, dagli. The answer uses the contracted form. The uncontracted form ("di il") is **wrong**, never an alternative.
- German: zum, zur, im, am, ins, beim, vom are the norm. "zu dem" is accepted only where it's emphatic. Content uses the contracted form.

## 3. Learner pitfalls (these drive feedback notes and exercises)

### Spanish → Italian

| Area | Pitfall | Exercise idea |
|---|---|---|
| False friends | burro, caldo, salire, guardare, camera, gamba, imbarazzato, largo, topo, *aceite→olio*, *esposo→marito*, *salire/uscire*, *prendere* (also "tomar/agarrar"), *autista* (driver), *fermata* (bus stop), *negozio* (shop), *pronto* (ready / "hello?" on the phone), *tenere/avere* | Guess-first multiple choice, then reverse |
| Double consonants | They change meaning: nono/nonno, caro/carro, pala/palla, sono/sonno, papa/pappa, fato/fatto | Listening minimal pairs. The checker must flag them (§5) |
| essere/avere | Compound tenses: *sono andato* (not *ho andato*). Agreement: *sono andata*. Reflexives take essere: *mi sono alzato*. Spanish uses haber for everything | A "which auxiliary?" drill, with feedback naming the rule |
| Articles | lo/gli before s+consonant, z, gn, ps; l' before a vowel; i/gli/le; *gli amici*, *lo zaino*. Spanish has only el/la/los/las | Choose-the-article tiles |
| Prepositions | *a* vs *in* with places (a Roma, in Italia, in centro); *da* (= desde, and "a casa de": vado da Marco); *andare in macchina*; *di* vs *da* | A short daily cloze |

### English → German

| Area | Pitfall | Exercise idea |
|---|---|---|
| Gender | der/die/das is unpredictable. Learners must memorize the article *with* the noun. Useful cues: -ung/-heit/-keit = die, -chen/-lein = das | Color-coded articles. Never accept a bare noun in gender drills |
| Cases | Accusative only changes masculine (einen, den). Dative after mit/aus/bei/von/zu/nach. Two-way prepositions (in den Park vs. im Park) | Article tiles in context |
| Word order | V2: *Heute **gehe** ich…* (not "Heute ich gehe"). The verb goes last after weil/dass/wenn. Time–Manner–Place | Word-tile ordering. The checker must not accept the wrong order |
| Separable verbs | *Ich **rufe** dich **an***; *aufstehen → ich stehe um 7 auf* | Tiles: split the verb |
| False friends | Gift, bekommen, Chef, bald, fast, also, Kind, Rock, Art, *wer* (who), *wo* (where), *will* (want), *spenden* (donate), *sensibel* (sensitive), *eventuell* (possibly), *aktuell* (current), *Brief* (letter) | Guess-first multiple choice |
| Pronunciation | w = v, v = f, z = ts, ei/ie (*Wein* vs *Wien*), ü/ö, final devoicing (Tag = [taːk]), ch | Listening minimal pairs |

### Spanish → German (owner's case: Spanish learner who also knows English)

- **Gender interference:** *die Sonne / el sol*, *der Mond / la luna*, *das Mädchen* (neuter!), *die Milch / la leche* matches. Warn when the Spanish gender would mislead.
- **Vowels:** Spanish has 5 vowels, German has long/short pairs plus ü/ö/ä. *Staat/Stadt*, *bitten/bieten*, *Hölle/Höhle*.
- **Consonants:** h is aspirated (not silent), *ch* (ich/ach), initial *sp/st* = "shp/sht", z = ts, final -b/-d/-g devoice.
- **Subject pronouns are mandatory:** "Komme aus Spanien" is wrong.
- **Word order and verb-final** clauses are new. Spanish word order is freer.
- **Capitalizing nouns** feels unnatural. Expect lowercase input (see §5).
- **False friends:** *Rente* (pension), *Kantine* (canteen), *Tafel* (blackboard), *Mantel* (coat, not mantel = *Tischdecke*), *Karte* (card/map/ticket, not *carta* = *Brief*), *Pension* (guesthouse).

## 4. Pronunciation and speech technology

The app uses the Web Speech API (it-IT, de-DE). Voice quality depends on the OS: iOS's Siri/enhanced voices are good, while Android and some Chrome desktop voices are robotic.

| Issue | Details | Guidance |
|---|---|---|
| Single words | TTS on isolated words often has the wrong stress or clipped endings (Italian *àncora/ancóra*, *pàpa/papà*; German *umfahren* separable vs inseparable) | Prefer speaking short phrases. For stress minimal pairs, write the accent in the note and don't rely on TTS alone |
| Italian open/closed e/o | TTS is inconsistent (pésca/pèsca, vénti/vènti). Northern and Southern speakers differ too | Never build an exercise on è/é or ò/ó contrasts |
| Italian z | Voiced/voiceless varies (zio [ts], zaino [dz]) and TTS is not reliable | Don't test it |
| Double consonants | Usually rendered acceptably at rate 0.9. At faster rates the length contrast collapses | Minimal-pair items need rate ≤0.85 and short phrases; ideally use recorded audio later |
| German ß/ss and capitalization | Irrelevant to audio, but abbreviations (Hbf, z. B., usw., 1.) are read wrong | Spell abbreviations out in the TTS text (a separate `speak` field) |
| Numbers and dates | "1° maggio", "3.5." and "18:30" are read unpredictably | Write numbers as words in the TTS text |
| Mixed-language strings | A name or English word inside an Italian sentence gets an Italian pronunciation | Avoid foreign names in audio. Use Italian/German names (Marco, Anna) |
| Speech recognition | Recognition doesn't grade pronunciation. It returns its best-guess *word*, auto-corrects toward real words, adds capitals and punctuation, and often turns numbers into digits. Nonno/nono, Staat/Stadt and schon/schön will be "heard" based on context, not on the learner's sound | Use speech recognition only as "did you say roughly the right phrase?" (normalize, then fuzzy-match), never as pronunciation grading. Never use it for minimal pairs. Always offer a "skip / I said it" button |

## 5. Automatic answer checking

### What v1's `check.ts` gets wrong (these are linguistic bugs)

1. **Levenshtein ≤1 on whole strings accepts meaning-changing errors as "typos":** *nono* for *nonno* (that undermines the exact item that teaches it), *la zio* for *lo zio*, *i nonno* for *il nonno*, *den/dem*, *einen/einem*.
2. **Umlauts are stripped to a plain vowel**, so *schon* counts as *schön* and *zahlen* as *zählen* ("almost: accent"). Meanwhile the standard transliteration *schoen* only gets through as a "typo".
3. Lowercasing everything hides German noun capitalization. That's acceptable for leniency, but the learner never gets feedback.
4. A missing article counts as "almost" even in German, where the article *is* the knowledge.

### What a deterministic checker can safely do

| Input variation | Verdict |
|---|---|
| Case, extra spaces, final punctuation, curly vs straight apostrophes, ¿¡ | Correct |
| German *ss* for ß (heisse) | **Correct** (Swiss standard). Optionally show an info note once |
| German *ae/oe/ue* for ä/ö/ü | Correct, with a one-time note on how to type umlauts |
| Missing umlaut (schon for schön) | **Almost**, reason `umlaut`, with "ä ≠ a: *schon* = already". Wrong if the result is a known minimal-pair word |
| Missing or wrong Italian accent (citta, perche, universitá) | Almost, reason `accent`. Exception: *e/è*, *si/sì*, *da/dà*, *la/là*, *li/lì*, *ne/né* change meaning, so give a specific note |
| German noun in lowercase | Correct, plus a gentle note ("nouns are capitalized: *Kaffee*"). Never fail on it |
| Elision variations: "l amico", "lamico", "dove è" | Almost, with the elided form shown |
| A typo in a **content word** of ≥5 letters (Levenshtein 1; 2 if ≥10 letters) | Almost, reason `typo` |
| A typo that changes double/single consonants in Italian | **Almost** with the reason `double` and the minimal pair shown. **Wrong** in sound/minimal-pair items |
| Wrong article, determiner, preposition, pronoun or verb ending (il/lo/la, der/die/das, den/dem, a/in, sono/ho) | **Wrong**: these are the grammar. Tokenize, and require these closed-class words to match exactly (or match an alt) |
| Missing article | Italian: almost. German noun drills: wrong (the article is the point) |
| Words reordered | Wrong for German (V2/verb-final), unless listed in `alts`. In Italian it's wrong unless listed |
| Contracted form not used (*di il*, *in dem* for im) | Wrong (Italian). Almost (German) |
| Synonyms and alternative correct answers | Correct only if they're listed in `alts`. Content must list the common ones (grazie/grazie mille, Tschüss/Tschüs, wie viel/was kostet) |

Implementation tip: tokenize on spaces and apostrophes, mark tokens from a closed-class list (articles, prepositions, contractions, pronouns, auxiliaries) per language, and apply fuzziness only to open-class tokens. Each alt can carry an optional `feedback` string, which turns known errors into targeted notes ("*ho andato* → con verbos de movimiento: *sono andato*").

### When an LLM judge is needed

Use it only for answers the deterministic checker marks **wrong** (or for free-production tasks), when the user has connected one:

- Free translation or open questions, where many correct paraphrases exist (word order, synonyms, a different but valid tense).
- Telling a valid alternative ("Vivo a Roma" vs "Abito a Roma") from a real error, when it's not in `alts`.
- Explaining *why* something is wrong in the base language (case, auxiliary, agreement).
- Register checks (tu vs Lei in context).

LLM rules:

1. Pass the item, the reference answers, the target CEFR level, the register and the base language.
2. Ask for structured output: `{verdict: correct|almost|wrong, corrected, explanation_in_base_lang, error_type}`.
3. Tell it to accept any natural, standard form, and not to over-correct regional variants (ss for ß, Tschüs) or penalize capitalization.
4. Never let the LLM overrule a deterministic **correct**.
5. Log any LLM-accepted answer as a candidate `alt` for human review. This is how the content grows its alternatives.

No-LLM fallback: show "Your answer · Expected" with an **"I was right"** override (Anki-style).
