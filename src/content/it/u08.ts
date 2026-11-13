import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u08",
  lang: "it",
  index: 8,
  cefr: "A1.2",
  title: { target: "Tempo libero", es: "Tiempo libre", en: "Free time" },
  canDo: [
    { es: "Puedo decir qué me gusta hacer en mi tiempo libre.", en: "I can say what I like doing in my free time." },
    { es: "Puedo invitar a alguien y aceptar o rechazar una invitación.", en: "I can invite someone and accept or turn down an invitation." },
    { es: "Sé usar andare, fare, venire, uscire y potere, volere, dovere.", en: "I can use andare, fare, venire, uscire and potere, volere, dovere." },
  ],
  icon: "🎬",
  items: build("it", 8, "A1.2", [
    // ── Irregular verbs ──────────────────────────────────────
    {
      id: "andare", type: "word", pos: "verb", target: "andare",
      gloss: { es: "ir", en: "to go" },
      forms: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
      distractors: ["venire", "entrare", "andata"],
      note: { es: "Irregular: vado, vai, va… pero andiamo, andate.", en: "Irregular: vado, vai, va… but andiamo, andate." },
      tags: ["verbs", "irregular"],
    },
    {
      id: "venire", type: "word", pos: "verb", target: "venire",
      gloss: { es: "venir", en: "to come" },
      forms: { io: "vengo", tu: "vieni", lui: "viene", noi: "veniamo", voi: "venite", loro: "vengono" },
      distractors: ["vendere", "vincere", "andare"],
      tags: ["verbs", "irregular"],
    },
    {
      id: "uscire", type: "word", pos: "verb", target: "uscire",
      gloss: { es: "salir", en: "to go out" },
      forms: { io: "esco", tu: "esci", lui: "esce", noi: "usciamo", voi: "uscite", loro: "escono" },
      distractors: ["usare", "cucire", "uscita"],
      note: { es: "La raíz cambia: esco, esci, esce… pero usciamo, uscite.", en: "The stem changes: esco, esci, esce… but usciamo, uscite." },
      tags: ["verbs", "irregular"],
    },
    {
      id: "fare", type: "word", pos: "verb", target: "fare",
      gloss: { es: "hacer", en: "to do / to make" },
      forms: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
      distractors: ["dare", "stare", "fame"],
      tags: ["verbs", "irregular"],
    },
    {
      id: "leggere", type: "word", pos: "verb", target: "leggere",
      gloss: { es: "leer", en: "to read" },
      forms: { io: "leggo", tu: "leggi", lui: "legge" },
      distractors: ["leggero", "eleggere", "reggere"],
      note: { es: "Ojo: «leggero» = liviano (ligero).", en: "Careful: 'leggero' = light (not heavy)." },
      tags: ["hobbies"],
    },
    {
      id: "giocare", type: "word", pos: "verb", target: "giocare",
      gloss: { es: "jugar", en: "to play (a game or sport)" },
      forms: { io: "gioco", tu: "giochi", lui: "gioca" },
      distractors: ["suonare", "gioire", "giocattolo"],
      note: { es: "giocare a + deporte: gioco a calcio, gioco a tennis.", en: "giocare a + sport: gioco a calcio, gioco a tennis." },
      tags: ["hobbies"],
    },
    {
      id: "suonare", type: "word", pos: "verb", target: "suonare",
      gloss: { es: "tocar (un instrumento)", en: "to play (an instrument)" },
      forms: { io: "suono", tu: "suoni", lui: "suona" },
      distractors: ["sognare", "giocare", "segnare"],
      note: { es: "suono la chitarra = toco la guitarra. También «sonar»: suona il telefono.", en: "suono la chitarra = I play the guitar. Also 'to ring': suona il telefono." },
      tags: ["hobbies"],
    },

    // ── Places & things ──────────────────────────────────────
    {
      id: "tempo-libero", type: "phrase", pos: "phrase", target: "il tempo libero",
      gloss: { es: "el tiempo libre", en: "free time" },
      distractors: ["il tempo pieno", "il tempo perso", "la libertà"],
      tags: ["hobbies"],
    },
    {
      id: "palestra", type: "word", pos: "noun", target: "la palestra", gender: "f", plural: "le palestre",
      gloss: { es: "el gimnasio", en: "the gym" },
      distractors: ["il palazzo", "la finestra", "la pasta"],
      note: { es: "Ojo: «il ginnasio» es un tipo de liceo, no el gimnasio.", en: "Careful: 'il ginnasio' is a kind of secondary school, not a gym." },
      tags: ["hobbies", "places"],
    },
    {
      id: "cinema", type: "word", pos: "noun", target: "il cinema", gender: "m", plural: "i cinema",
      gloss: { es: "el cine", en: "the cinema (movie theater)" },
      distractors: ["la cinema", "il camino", "il cinghiale"],
      note: { es: "Masculino e invariable: il cinema, i cinema.", en: "Masculine and invariable: il cinema, i cinema." },
      tags: ["hobbies", "places"],
    },
    {
      id: "musica", type: "word", pos: "noun", target: "la musica", gender: "f", plural: "le musiche",
      gloss: { es: "la música", en: "the music" },
      distractors: ["il musical", "la mostra", "il museo"],
      note: { es: "Se pronuncia «MÚ-si-ca», como en español, pero sin tilde escrita.", en: "Stress on the first syllable: MU-si-ca." },
      tags: ["hobbies"],
    },
    {
      id: "calcio", type: "word", pos: "other", target: "il calcio",
      gloss: { es: "el fútbol", en: "football (soccer)" },
      distractors: ["il calzino", "il calcolo", "la calza"],
      note: { es: "«il calcio» también es la patada y el calcio (mineral).", en: "'il calcio' is also a kick, and the mineral calcium." },
      tags: ["hobbies", "sport"],
    },
    {
      id: "volentieri", type: "word", pos: "adv", target: "volentieri",
      gloss: { es: "con gusto", en: "gladly / I'd love to" },
      distractors: ["veramente", "volontariamente", "volando"],
      note: { es: "La respuesta típica a una invitación: Volentieri!", en: "The typical answer to an invitation: Volentieri!" },
      tags: ["invitations"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "mi-piace-leggere", type: "sentence", target: "Mi piace leggere.",
      gloss: { es: "Me gusta leer.", en: "I like reading." },
      errors: [{ text: "Io piace leggere.", feedback: { es: "Como en español: mi piace (me gusta), no «io piace».", en: "Literally 'it pleases me': mi piace, not 'io piace'." } }],
      distractors: ["piacciono", "Io", "leggo"],
      tags: ["hobbies", "piacere"],
    },
    {
      id: "mi-piacciono-film", type: "sentence", target: "Mi piacciono i film italiani.",
      gloss: { es: "Me gustan las películas italianas.", en: "I like Italian films (movies)." },
      errors: [{ text: "Mi piace i film italiani.", feedback: { es: "Con un plural: mi piacciono.", en: "With a plural: mi piacciono." } }],
      distractors: ["piace", "gli", "italiane"],
      note: { es: "«il film» es masculino e invariable: i film.", en: "'il film' is masculine and invariable: i film." },
      tags: ["hobbies", "piacere"],
    },
    {
      id: "ti-piace-calcio", type: "sentence", register: "informal", target: "Ti piace il calcio?",
      gloss: { es: "¿Te gusta el fútbol?", en: "Do you like football (soccer)?" },
      accept: [{ text: "A te piace il calcio?" }],
      distractors: ["Tu", "piaci", "la"],
      tags: ["hobbies", "piacere"],
    },
    {
      id: "che-fai-tempo-libero", type: "sentence", register: "informal", target: "Che cosa fai nel tempo libero?",
      gloss: { es: "¿Qué haces en tu tiempo libre?", en: "What do you do in your free time?" },
      accept: [{ text: "Cosa fai nel tempo libero?" }, { text: "Che fai nel tempo libero?" }],
      distractors: ["fa", "il", "nella"],
      tags: ["hobbies"],
    },
    {
      id: "vuoi-venire-cinema", type: "sentence", register: "informal", target: "Vuoi venire al cinema stasera?",
      gloss: { es: "¿Quieres venir al cine esta noche?", en: "Do you want to come to the cinema tonight?" },
      distractors: ["Vuole", "andare", "a"],
      tags: ["invitations"],
    },
    {
      id: "non-posso-devo", type: "sentence", target: "Non posso, devo lavorare.",
      gloss: { es: "No puedo, tengo que trabajar.", en: "I can't, I have to work." },
      errors: [{ text: "Non posso, ho di lavorare.", feedback: { es: "«tener que» = dovere: devo lavorare.", en: "'have to' = dovere: devo lavorare." } }],
      distractors: ["voglio", "lavoro", "deve"],
      tags: ["invitations", "modals"],
    },
    {
      id: "vado-in-palestra", type: "sentence", target: "Vado in palestra due volte alla settimana.",
      gloss: { es: "Voy al gimnasio dos veces por semana.", en: "I go to the gym twice a week." },
      errors: [{ text: "Vado a palestra due volte alla settimana.", feedback: { es: "Se dice «in palestra» (como in piscina, in biblioteca).", en: "Italian says 'in palestra' (like in piscina, in biblioteca)." } }],
      distractors: ["al", "volta", "settimane"],
      tags: ["hobbies", "frequency"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-piacere", type: "pattern", target: "mi piace + singolare · mi piacciono + plurale",
      gloss: { es: "gustar: piace / piacciono", en: "liking: piace / piacciono" },
      pattern: {
        rule: {
          es: "Funciona como «gustar»: mi piace il caffè / leggere (singular o infinitivo), mi piacciono i libri (plural).",
          en: "It works like 'to please': mi piace il caffè / leggere (singular or infinitive), mi piacciono i libri (plural).",
        },
        table: [["mi / ti / gli / le piace", "il cinema · ballare"], ["mi / ti / gli / le piacciono", "i film · le canzoni"]],
      },
      question: {
        prompt: { es: "Completa: «Mi ___ gli spaghetti.»", en: "Complete: 'Mi ___ gli spaghetti.'" },
        options: ["piacciono", "piace", "piaccio", "piacete"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "piacere"],
    },
    {
      id: "pat-irregolari", type: "pattern", target: "vado · faccio · vengo · esco",
      gloss: { es: "verbos irregulares frecuentes", en: "common irregular verbs" },
      pattern: {
        rule: {
          es: "Cuatro verbos muy usados son irregulares en presente: andare, fare, venire, uscire.",
          en: "Four very common verbs are irregular in the present: andare, fare, venire, uscire.",
        },
        table: [["", "andare", "fare", "venire", "uscire"], ["io", "vado", "faccio", "vengo", "esco"], ["tu", "vai", "fai", "vieni", "esci"], ["lui / lei", "va", "fa", "viene", "esce"], ["noi", "andiamo", "facciamo", "veniamo", "usciamo"], ["loro", "vanno", "fanno", "vengono", "escono"]],
      },
      question: {
        prompt: { es: "Completa con «uscire»: «Stasera noi ___ con gli amici.»", en: "Complete with 'uscire': 'Stasera noi ___ con gli amici.'" },
        options: ["usciamo", "esciamo", "uscimo", "escono"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "irregular"],
    },
    {
      id: "pat-modali", type: "pattern", target: "posso · voglio · devo + infinito",
      gloss: { es: "poder, querer, deber + infinitivo", en: "can, want, must + infinitive" },
      pattern: {
        rule: {
          es: "potere, volere y dovere van seguidos de un infinitivo: posso venire, voglio uscire, devo studiare.",
          en: "potere, volere and dovere take an infinitive: posso venire, voglio uscire, devo studiare.",
        },
        table: [["", "potere", "volere", "dovere"], ["io", "posso", "voglio", "devo"], ["tu", "puoi", "vuoi", "devi"], ["lui / lei", "può", "vuole", "deve"], ["noi", "possiamo", "vogliamo", "dobbiamo"], ["loro", "possono", "vogliono", "devono"]],
      },
      question: {
        prompt: { es: "Completa con «potere»: «Marco non ___ venire: è malato.»", en: "Complete with 'potere': 'Marco non ___ venire: è malato.'" },
        options: ["può", "puoi", "posso", "potere"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "modals"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-tempo-libero", type: "listening",
      target: "Nel tempo libero leggo molto e il fine settimana gioco a calcio con gli amici. Non mi piace la televisione.",
      gloss: {
        es: "En mi tiempo libre leo mucho y el fin de semana juego al fútbol con mis amigos. No me gusta la televisión.",
        en: "In my free time I read a lot, and at the weekend I play football with my friends. I don't like television.",
      },
      question: {
        prompt: { es: "¿Qué no le gusta?", en: "What doesn't the speaker like?" },
        options: [
          { es: "La televisión", en: "Television" },
          { es: "Leer", en: "Reading" },
          { es: "El fútbol", en: "Football" },
          { es: "Salir con amigos", en: "Going out with friends" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "hobbies"],
    },
    {
      id: "dlg-invito", type: "dialogue", register: "informal", target: "Va bene!",
      gloss: { es: "¡Está bien! / ¡De acuerdo!", en: "OK! / All right!" },
      turns: [
        { who: "A", target: "Ciao Giulia, vuoi venire al cinema stasera?", gloss: { es: "Hola, Giulia, ¿quieres venir al cine esta noche?", en: "Hi Giulia, do you want to come to the cinema tonight?" } },
        { who: "B", target: "Stasera non posso, devo studiare. Domani?", gloss: { es: "Esta noche no puedo, tengo que estudiar. ¿Mañana?", en: "I can't tonight, I have to study. Tomorrow?" } },
        { who: "A", target: "Va bene! Domani alle otto.", gloss: { es: "¡De acuerdo! Mañana a las ocho.", en: "All right! Tomorrow at eight." } },
      ],
      question: {
        prompt: { es: "¿Cuándo van al cine?", en: "When are they going to the cinema?" },
        options: [
          { es: "Mañana a las ocho", en: "Tomorrow at eight" },
          { es: "Esta noche a las ocho", en: "Tonight at eight" },
          { es: "Mañana por la mañana", en: "Tomorrow morning" },
          { es: "No van a ir", en: "They aren't going" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "invitations"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-uscire", type: "bridge", onlyFor: "es", target: "uscire",
      gloss: { es: "salir", en: "to go out" },
      question: {
        prompt: { es: "«Esco con gli amici» significa…", en: "'Esco con gli amici' means…" },
        options: [
          { es: "Salgo con mis amigos.", en: "I go out with my friends." },
          { es: "Subo con mis amigos.", en: "I go up with my friends." },
          { es: "Escucho a mis amigos.", en: "I listen to my friends." },
          { es: "Escribo a mis amigos.", en: "I write to my friends." },
        ],
        answer: 0,
      },
      note: { es: "salir = uscire (esco); «salire» es subir. La salida = l'uscita." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
