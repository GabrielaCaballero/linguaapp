import type { Lang } from "./types";
import type { Ui } from "./i18n";
import { addDays, addMonths, fromISO } from "./dates";

export type Milestone = {
  id: string;
  lang: Lang | "both";
  title: string;
  when: string;
  start: Date;
  end: Date;
  /** Module id whose built-in items count toward progress, if any. */
  module?: string;
  note?: string;
  fixed?: boolean;
};

type Text = { title: string; when: string; note?: string };

// Italian milestones are always shown in Spanish (Italian is taught from Spanish),
// German ones in English. Shared ones ("both") follow the current interface language.
const TEXT: Record<string, Text | Record<Ui, Text>> = {
  "it-m0": { title: "M0 · Sonidos y puente desde el español", when: "Semanas 1–2" },
  "it-m1": { title: "M1 · Kit de supervivencia para Lavello", when: "Semanas 3–8" },
  "it-m2": { title: "M2 · A2 sólido", when: "Meses 3–4" },
  "it-m3": { title: "M3 · Núcleo B1", when: "Meses 5–6" },
  "it-m4": {
    title: "M4 · Lista para el examen",
    when: "Meses 7–9",
    note: "Examen de la Società Dante Alighieri en la USI de Lugano, objetivo abril 2027.",
  },
  "it-exam": {
    title: "Examen de italiano · Dante Alighieri, USI Lugano",
    when: "Abril 2027",
    note: "Fecha provisoria: 15 abr 2027. Cambiala cuando abran las inscripciones.",
  },
  trip: {
    es: { title: "Viaje a Lavello", when: "Primavera 2027", note: "Fecha provisoria: 1 may 2027." },
    en: { title: "Trip to Lavello", when: "Spring 2027", note: "Placeholder date: 1 May 2027." },
  },
  "de-a1s": { title: "A1 starter · class companion", when: "Weeks 1–6" },
  "de-a1": { title: "A1 complete", when: "Month 3" },
  "de-a2": { title: "A2", when: "Months 4–6" },
  "de-fide": {
    title: "fide · B1 oral (Swiss integration level)",
    when: "Month 12",
    note: "Levels differ by permit (C permit vs. naturalisation) and canton — confirm with the Zurich Migrationsamt.",
  },
};

function text(id: string, ui: Ui): Text {
  const x = TEXT[id];
  return "title" in x ? (x as Text) : (x as Record<Ui, Text>)[ui];
}

export function milestones(startISO: string, ui: Ui = "en"): Milestone[] {
  const s = fromISO(startISO);
  const m = (id: string, rest: Omit<Milestone, "id" | "title" | "when" | "note">): Milestone => ({ id, ...text(id, ui), ...rest });
  return [
    m("it-m0", { lang: "it", start: s, end: addDays(s, 14), module: "M0" }),
    m("it-m1", { lang: "it", start: addDays(s, 14), end: addDays(s, 56), module: "M1" }),
    m("it-m2", { lang: "it", start: addMonths(s, 2), end: addMonths(s, 4) }),
    m("it-m3", { lang: "it", start: addMonths(s, 4), end: addMonths(s, 6) }),
    m("it-m4", { lang: "it", start: addMonths(s, 6), end: addMonths(s, 9) }),
    m("it-exam", { lang: "it", start: new Date(2027, 3, 1), end: new Date(2027, 3, 15), fixed: true }),
    m("trip", { lang: "both", start: new Date(2027, 3, 1), end: new Date(2027, 4, 1), fixed: true }),
    m("de-a1s", { lang: "de", start: s, end: addDays(s, 42), module: "A1" }),
    m("de-a1", { lang: "de", start: addDays(s, 42), end: addMonths(s, 3) }),
    m("de-a2", { lang: "de", start: addMonths(s, 3), end: addMonths(s, 6) }),
    m("de-fide", { lang: "de", start: addMonths(s, 6), end: addMonths(s, 12) }),
  ];
}
