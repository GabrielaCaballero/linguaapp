import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u29",
  lang: "de",
  index: 29,
  cefr: "C1",
  title: { target: "Wirtschaft und Umwelt", es: "Economía y medio ambiente", en: "Economy and environment" },
  canDo: [
    { es: "Puedo participar en debates sobre economía, clima y sostenibilidad.", en: "I can take part in debates on the economy, climate and sustainability." },
    { es: "Puedo matizar, contrastar y justificar argumentos con conectores como insofern als, zumal y wohingegen.", en: "I can qualify, contrast and justify arguments with connectors like insofern als, zumal and wohingegen." },
    { es: "Sé decir lo que se debería haber hecho, también en pasiva (hätte verhindert werden können).", en: "I can say what should have been done, passive included (hätte verhindert werden können)." },
  ],
  icon: "🌱",
  items: build("de", 29, "C1", [
    // ── Economy & environment words ──────────────────────────
    {
      id: "emission", type: "word", pos: "noun", target: "die Emission", gender: "f", plural: "die Emissionen",
      gloss: { es: "la emisión (de gases)", en: "the emission" },
      distractors: ["der Emission", "die Mission", "die Kommission"],
      tags: ["environment"],
    },
    {
      id: "rohstoff", type: "word", pos: "noun", target: "der Rohstoff", gender: "m", plural: "die Rohstoffe",
      gloss: { es: "la materia prima", en: "the raw material" },
      distractors: ["die Rohstoff", "der Kraftstoff", "der Rohbau"],
      tags: ["economy", "environment", "compound"],
    },
    {
      id: "ressource", type: "word", pos: "noun", target: "die Ressource", gender: "f", plural: "die Ressourcen",
      gloss: { es: "el recurso", en: "the resource" },
      distractors: ["der Ressource", "das Ressort", "die Reserve"],
      note: { es: "Femenino en alemán, aunque en español sea masculino.", en: "Spelt with double s and ending in -e." },
      tags: ["economy", "environment"],
    },
    {
      id: "abgabe", type: "word", pos: "noun", target: "die Abgabe", gender: "f", plural: "die Abgaben",
      gloss: { es: "el impuesto, la tasa", en: "the levy, charge" },
      distractors: ["der Abgabe", "die Aufgabe", "die Ausgabe"],
      note: { es: "También «la entrega»: die Abgabe der Arbeit.", en: "Also 'handing in': die Abgabe der Arbeit." },
      tags: ["economy"],
    },
    {
      id: "verbraucher", type: "word", pos: "noun", target: "der Verbraucher", gender: "m", plural: "die Verbraucher",
      gloss: { es: "el/la consumidor/a", en: "the consumer" },
      accept: [{ text: "die Verbraucherin" }],
      distractors: ["die Verbraucher", "der Verbrauch", "der Gebraucher"],
      tags: ["economy"],
    },
    {
      id: "konjunktur", type: "word", pos: "noun", target: "die Konjunktur", gender: "f", plural: "die Konjunkturen",
      gloss: { es: "la coyuntura económica", en: "the state of the economy" },
      distractors: ["der Konjunktur", "der Konjunktiv", "die Kultur"],
      note: { es: "Die Konjunktur lahmt = la economía anda floja.", en: "Die Konjunktur lahmt = the economy is sluggish." },
      tags: ["economy"],
    },
    {
      id: "umstellung", type: "word", pos: "noun", target: "die Umstellung", gender: "f", plural: "die Umstellungen",
      gloss: { es: "el cambio (de sistema), la transición", en: "the switch, changeover" },
      distractors: ["der Umstellung", "die Einstellung", "die Ausstellung"],
      note: { es: "die Umstellung auf erneuerbare Energien = el paso a las energías renovables.", en: "die Umstellung auf erneuerbare Energien = the switch to renewables." },
      tags: ["economy", "environment"],
    },
    {
      id: "subventionieren", type: "word", pos: "verb", target: "subventionieren",
      gloss: { es: "subvencionar", en: "to subsidise" },
      distractors: ["suspendieren", "investieren", "subtrahieren"],
      tags: ["economy"],
    },
    {
      id: "eindaemmen", type: "word", pos: "verb", target: "eindämmen",
      gloss: { es: "frenar, contener", en: "to curb, contain" },
      distractors: ["eintauchen", "einräumen", "dämmern"],
      note: { es: "Viene de der Damm (el dique): den Klimawandel eindämmen.", en: "From der Damm (dam): den Klimawandel eindämmen." },
      tags: ["environment", "separable"],
    },
    {
      id: "unumgaenglich", type: "word", pos: "adj", target: "unumgänglich",
      gloss: { es: "inevitable, imprescindible", en: "unavoidable, essential" },
      distractors: ["umgänglich", "unzugänglich", "ungültig"],
      note: { es: "Ojo: umgänglich = sociable, de trato fácil.", en: "Careful: umgänglich = easy-going." },
      tags: ["debate", "formal"],
    },

    // ── Connectors ───────────────────────────────────────────
    {
      id: "zumal", type: "word", pos: "other", target: "zumal",
      gloss: { es: "más aún porque, sobre todo porque", en: "especially since" },
      distractors: ["zumindest", "zuerst", "zugleich"],
      note: { es: "Como weil, manda el verbo al final, pero añade una razón de peso.", en: "Like weil, it sends the verb to the end, but adds an extra strong reason." },
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "debate"],
    },
    {
      id: "wohingegen", type: "word", pos: "other", target: "wohingegen",
      gloss: { es: "mientras que (en contraste)", en: "whereas" },
      distractors: ["woraufhin", "wohlgemerkt", "hinterher"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "debate"],
    },
    {
      id: "insofern-als", type: "phrase", pos: "phrase", target: "insofern als",
      gloss: { es: "en la medida en que", en: "insofar as" },
      accept: [{ text: "insofern, als" }],
      distractors: ["insofern das", "sofern als", "inwiefern als"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "debate"],
    },
    {
      id: "geschweige-denn", type: "phrase", pos: "phrase", target: "geschweige denn",
      gloss: { es: "y mucho menos", en: "let alone" },
      distractors: ["geschweige dann", "geschwiegen denn", "geschweige doch"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "zumal-kaum-kosten", type: "sentence", target: "Die Maßnahme ist sinnvoll, zumal sie kaum Kosten verursacht.",
      gloss: { es: "La medida tiene sentido, sobre todo porque apenas genera costos.", en: "The measure makes sense, especially since it costs hardly anything." },
      errors: [{ text: "Die Maßnahme ist sinnvoll, zumal verursacht sie kaum Kosten.", feedback: { es: "zumal es subordinante: el verbo va al final.", en: "zumal starts a subordinate clause: the verb goes last." }, ruleId: "de-g-konnektoren-c1" }],
      distractors: ["zumindest", "verursachen", "sind"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "debate"],
    },
    {
      id: "wohingegen-sueden", type: "sentence", target: "Im Norden wird mehr Windstrom erzeugt, wohingegen der Süden auf Solarenergie setzt.",
      gloss: { es: "En el norte se genera más energía eólica, mientras que el sur apuesta por la energía solar.", en: "More wind power is generated in the north, whereas the south relies on solar energy." },
      accept: [{ text: "Im Norden wird mehr Windstrom erzeugt, während der Süden auf Solarenergie setzt." }],
      distractors: ["hingegen", "setzen", "erzeugen"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "environment"],
    },
    {
      id: "insofern-ueberzeugt", type: "sentence", target: "Das Konzept überzeugt insofern, als es Ökologie und Wirtschaft verbindet.",
      gloss: { es: "El concepto convence en la medida en que une ecología y economía.", en: "The concept is convincing insofar as it combines ecology and economics." },
      accept: [{ text: "Das Konzept überzeugt insofern als es Ökologie und Wirtschaft verbindet." }],
      annot: { "insofern, als": { es: "«en la medida en que»; insofern puede ir separado de als", en: "'insofar as'; insofern can stand apart from als" } },
      distractors: ["sofern", "verbinden", "dass"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "debate"],
    },
    {
      id: "geschweige-denn-elektroauto", type: "sentence", target: "Viele können sich kaum die Miete leisten, geschweige denn ein Elektroauto.",
      gloss: { es: "Muchas personas apenas pueden pagar el alquiler, y mucho menos un auto eléctrico.", en: "Many people can barely afford the rent, let alone an electric car." },
      distractors: ["dann", "geschwiegen", "kein"],
      grammar: ["de-g-konnektoren-c1"], tags: ["connectors", "economy"],
    },
    {
      id: "haette-verhindert-werden-koennen", type: "sentence", target: "Die Katastrophe hätte verhindert werden können.",
      gloss: { es: "La catástrofe se podría haber evitado.", en: "The disaster could have been prevented." },
      errors: [{ text: "Die Katastrophe hätte verhindert werden gekonnt.", feedback: { es: "Con un modal, el pasado irreal termina en dos infinitivos: verhindert werden können.", en: "With a modal, the past unreal ends in two infinitives: verhindert werden können." }, ruleId: "de-g-konj2-passiv" }],
      distractors: ["wäre", "gekonnt", "worden"],
      grammar: ["de-g-konj2-passiv"], tags: ["konjunktiv2", "passive"],
    },
    {
      id: "frueher-investieren-muessen", type: "sentence", target: "Man hätte viel früher in erneuerbare Energien investieren müssen.",
      gloss: { es: "Tendríamos que haber invertido mucho antes en energías renovables.", en: "We should have invested in renewable energy much earlier." },
      distractors: ["gemusst", "investiert", "wäre"],
      grammar: ["de-g-doppelinfinitiv"], tags: ["konjunktiv2", "environment"],
    },
    {
      id: "waere-eingefuehrt-worden", type: "sentence", target: "Wäre die Steuer früher eingeführt worden, lägen die Emissionen heute niedriger.",
      gloss: { es: "Si el impuesto se hubiera introducido antes, hoy las emisiones serían más bajas.", en: "Had the tax been introduced earlier, emissions would be lower today." },
      accept: [
        { text: "Wenn die Steuer früher eingeführt worden wäre, lägen die Emissionen heute niedriger." },
        { text: "Wenn die Steuer früher eingeführt worden wäre, wären die Emissionen heute niedriger." },
        { text: "Wäre die Steuer früher eingeführt worden, wären die Emissionen heute niedriger." },
      ],
      errors: [{ text: "Hätte die Steuer früher eingeführt worden, lägen die Emissionen heute niedriger.", feedback: { es: "La pasiva usa sein: wäre … eingeführt worden.", en: "The passive uses sein: wäre … eingeführt worden." }, ruleId: "de-g-konj2-passiv" }],
      distractors: ["Hätte", "geworden", "würde"],
      grammar: ["de-g-konj2-passiv"], tags: ["konjunktiv2", "passive", "economy"],
    },
    {
      id: "was-geringverdiener-trifft", type: "sentence", target: "Die Preise steigen, was vor allem Geringverdiener trifft.",
      gloss: { es: "Los precios suben, lo que afecta sobre todo a quienes ganan poco.", en: "Prices are rising, which mainly hits people on low incomes." },
      annot: { "was": { es: "relativo para toda la frase anterior: «lo que»", en: "relative for the whole previous clause: 'which'" } },
      distractors: ["das", "dass", "treffen"],
      tags: ["economy", "relative-clauses"],
    },

    // ── Table ────────────────────────────────────────────────
    {
      id: "tab-konj2-passiv", type: "paradigm", target: "verhindern — Konjunktiv II der Vergangenheit", spoken: "verhindern",
      gloss: { es: "verhindern (evitar) — irreal en pasado", en: "verhindern (prevent) — past unreal" },
      grammar: ["de-g-konj2-passiv"],
      paradigm: {
        caption: { es: "«Man / es … verhindern» en Konjunktiv II del pasado", en: "'Man / es … verhindern' in past Konjunktiv II" },
        cells: [
          { label: "Aktiv (man)", answer: "hätte verhindert", ruleId: "de-g-konj2-passiv" },
          { label: "Passiv (es)", answer: "wäre verhindert worden", ruleId: "de-g-konj2-passiv" },
          { label: "Aktiv + können", answer: "hätte verhindern können", ruleId: "de-g-konj2-passiv" },
          { label: "Passiv + können", answer: "hätte verhindert werden können", ruleId: "de-g-konj2-passiv" },
        ],
      },
      tags: ["grammar", "konjunktiv2", "table"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-konnektoren-c1", type: "pattern", target: "zumal · insofern, als · wohingegen · geschweige denn",
      gloss: { es: "conectores para argumentar", en: "connectors for arguing a case" },
      pattern: {
        rule: {
          es: "zumal (sobre todo porque), insofern … als (en la medida en que) y wohingegen (mientras que) mandan el verbo al final. geschweige denn (y mucho menos) suele ir tras una negación y sin verbo propio.",
          en: "zumal (especially since), insofern … als (insofar as) and wohingegen (whereas) send the verb to the end. geschweige denn (let alone) usually follows a negative and needs no verb of its own.",
        },
        table: [["zumal", "…, zumal es billiger ist."], ["insofern, als", "…, insofern, als es Geld spart."], ["wohingegen", "…, wohingegen andere zögern."], ["geschweige denn", "kaum Zeit, geschweige denn Geld"]],
      },
      question: {
        prompt: { es: "«Ich fahre Rad, ___ ich so Geld spare.» (= sobre todo porque)", en: "'Ich fahre Rad, ___ ich so Geld spare.' (= especially since)" },
        options: ["zumal", "wohingegen", "geschweige denn", "insofern"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-konnektoren-c1"], tags: ["grammar", "connectors"],
    },
    {
      id: "pat-konj2-passiv", type: "pattern", target: "wäre gebaut worden · hätte gebaut werden müssen",
      gloss: { es: "pasado irreal en pasiva", en: "past unreal in the passive" },
      pattern: {
        rule: {
          es: "Pasiva irreal en pasado: wäre + participio + worden (wäre gebaut worden). Con un modal, el auxiliar pasa a ser hätte y al final van dos infinitivos: hätte gebaut werden müssen.",
          en: "Past unreal passive: wäre + participle + worden (wäre gebaut worden). With a modal, the auxiliary becomes hätte and two infinitives go at the end: hätte gebaut werden müssen.",
        },
        table: [["wäre gebaut worden", "se habría construido / would have been built"], ["hätte gebaut werden müssen", "se debería haber construido / should have been built"], ["hätte gebaut werden können", "se podría haber construido / could have been built"]],
      },
      question: {
        prompt: { es: "«Se debería haber construido el puente antes.»", en: "'The bridge should have been built earlier.'" },
        options: ["Die Brücke hätte früher gebaut werden müssen.", "Die Brücke hätte früher gebaut worden müssen.", "Die Brücke wäre früher gebaut werden müssen.", "Die Brücke hätte früher gebaut werden gemusst."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-konj2-passiv"], tags: ["grammar", "konjunktiv2", "passive"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-klimagesetz", type: "listening",
      target: "Kritiker bemängeln, das neue Klimagesetz komme zu spät. Hätte man die Kohlekraftwerke schon vor zehn Jahren abgeschaltet, wäre das Ziel längst erreicht worden.",
      gloss: {
        es: "Los críticos señalan que la nueva ley climática llega demasiado tarde. Si las centrales de carbón se hubieran cerrado hace diez años, el objetivo ya se habría alcanzado hace tiempo.",
        en: "Critics complain that the new climate law comes too late. If the coal-fired power stations had been shut down ten years ago, the target would have been reached long ago.",
      },
      question: {
        prompt: { es: "¿Qué critican?", en: "What do the critics complain about?" },
        options: [
          { es: "Que la ley llega demasiado tarde", en: "That the law comes too late" },
          { es: "Que la ley es demasiado estricta", en: "That the law is too strict" },
          { es: "Que las centrales se cerraron hace diez años", en: "That the power stations closed ten years ago" },
          { es: "Que el objetivo ya se alcanzó", en: "That the target has already been reached" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["de-g-konj2-passiv"], tags: ["listening", "environment"],
    },
    {
      id: "dlg-klimaabgabe", type: "dialogue", target: "Zugegeben, die Politik hätte das besser kommunizieren müssen.",
      gloss: { es: "Lo reconozco: los políticos tendrían que haberlo explicado mejor.", en: "Admittedly, the politicians should have communicated that better." },
      turns: [
        { who: "A", target: "Eine Klimaabgabe trifft doch vor allem Menschen mit wenig Geld.", gloss: { es: "Pero un impuesto climático afecta sobre todo a la gente con poco dinero.", en: "But a climate levy mainly hits people with little money." } },
        { who: "B", target: "Nicht unbedingt, insofern als die Einnahmen an die Bürger zurückgezahlt werden.", gloss: { es: "No necesariamente, en la medida en que lo recaudado se devuelva a la población.", en: "Not necessarily, insofar as the revenue is paid back to citizens." } },
        { who: "A", target: "Und wer garantiert das? Bisher ist davon nichts zu sehen.", gloss: { es: "¿Y quién lo garantiza? Hasta ahora no se ve nada de eso.", en: "And who guarantees that? So far there's no sign of it." } },
        { who: "B", target: "Zugegeben, die Politik hätte das besser kommunizieren müssen.", gloss: { es: "Lo reconozco: los políticos tendrían que haberlo explicado mejor.", en: "Admittedly, the politicians should have communicated that better." } },
      ],
      question: {
        prompt: { es: "Según B, ¿cuándo no es injusto el impuesto?", en: "According to B, when is the levy not unfair?" },
        options: [
          { es: "Si lo recaudado se devuelve a la población", en: "If the revenue is paid back to citizens" },
          { es: "Si solo pagan las empresas", en: "If only companies pay" },
          { es: "Si el impuesto es más bajo", en: "If the levy is lower" },
          { es: "Nunca", en: "Never" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "debate"],
    },
  ]),
};
