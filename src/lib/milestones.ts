import type { Lang } from "./types";
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

export function milestones(startISO: string): Milestone[] {
  const s = fromISO(startISO);
  return [
    { id: "it-m0", lang: "it", title: "M0 · Sounds & Spanish bridge", when: "Weeks 1–2", start: s, end: addDays(s, 14), module: "M0" },
    { id: "it-m1", lang: "it", title: "M1 · Lavello survival kit", when: "Weeks 3–8", start: addDays(s, 14), end: addDays(s, 56), module: "M1" },
    { id: "it-m2", lang: "it", title: "M2 · Solid A2", when: "Months 3–4", start: addMonths(s, 2), end: addMonths(s, 4) },
    { id: "it-m3", lang: "it", title: "M3 · B1 core", when: "Months 5–6", start: addMonths(s, 4), end: addMonths(s, 6) },
    {
      id: "it-m4",
      lang: "it",
      title: "M4 · Exam-ready",
      when: "Months 7–9",
      start: addMonths(s, 6),
      end: addMonths(s, 9),
      note: "Exam with Società Dante Alighieri at USI Lugano, target April 2027.",
    },
    {
      id: "it-exam",
      lang: "it",
      title: "Italian exam · Dante Alighieri, USI Lugano",
      when: "April 2027",
      start: new Date(2027, 3, 1),
      end: new Date(2027, 3, 15),
      fixed: true,
      note: "Placeholder date: 15 Apr 2027. Set the real one once registration opens.",
    },
    {
      id: "trip",
      lang: "both",
      title: "Trip to Lavello",
      when: "Spring 2027",
      start: new Date(2027, 3, 1),
      end: new Date(2027, 4, 1),
      fixed: true,
      note: "Placeholder date: 1 May 2027.",
    },
    { id: "de-a1s", lang: "de", title: "A1 starter · class companion", when: "Weeks 1–6", start: s, end: addDays(s, 42), module: "A1" },
    { id: "de-a1", lang: "de", title: "A1 complete", when: "Month 3", start: addDays(s, 42), end: addMonths(s, 3) },
    { id: "de-a2", lang: "de", title: "A2", when: "Months 4–6", start: addMonths(s, 3), end: addMonths(s, 6) },
    {
      id: "de-fide",
      lang: "de",
      title: "fide · B1 oral (Swiss integration level)",
      when: "Month 12",
      start: addMonths(s, 6),
      end: addMonths(s, 12),
      note: "Levels differ by permit (C permit vs. naturalisation) and canton — confirm with the Zurich Migrationsamt.",
    },
  ];
}
