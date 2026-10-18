export type Lang = "it" | "de";

/** What kind of thing the learner is studying. Drives which exercise we show. */
export type Kind = "sound" | "pattern" | "falsefriend" | "word" | "phrase";

/** Nation's four strands. Every task belongs to exactly one. */
export type Strand = "input" | "output" | "focus" | "fluency";

export type Item = {
  id: string;
  lang: Lang;
  /** Module / milestone the item belongs to, e.g. "M0", "M1", "A1", "class". */
  module: string;
  kind: Kind;
  /** Bridge-language cue: Spanish for Italian, English for German. */
  prompt: string;
  /** Target-language answer. */
  answer: string;
  /** Other accepted answers. */
  alts?: string[];
  /** Short explanation shown after answering. */
  note?: string;
  /** Optional explicit "guess first" task (used for patterns, sounds, false friends). */
  guess?: { q: string; choices: string[]; a: string };
  /** Tags such as "basic" (skippable for learners who already had classes). */
  tags?: string[];
  createdAt?: number;
};

export type CardState = {
  id: string;
  /** Epoch ms when the card is due. */
  due: number;
  /** Current interval in days (0 = still in learning). */
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
  introducedAt: number;
  lastReviewed?: number;
};

/** 1 = guessing, 2 = think so, 3 = sure */
export type Confidence = 1 | 2 | 3;

export type Mode = "guess" | "type" | "tiles" | "listen" | "recognize";

export type ReviewLog = {
  t: number;
  id: string;
  lang: Lang;
  mode: Mode | "speed";
  strand: Strand;
  correct: boolean;
  confidence?: Confidence;
};

export type SessionRecord = {
  t: number;
  lang: Lang;
  seconds: number;
  tasks: number;
  correct: number;
  graded: number;
};

export type TieType = "trip" | "course" | "exam" | "lavello" | "community";

export type Tie = {
  id: string;
  date: string; // YYYY-MM-DD
  type: TieType;
  note: string;
};

export type Settings = {
  lang: Lang;
  minutesPerLang: number;
  newPerDay: number;
  germanLevel: "unset" | "zero" | "some" | "classes";
  /** YYYY-MM-DD; milestones count from here. */
  startDate: string;
};

export type DB = {
  version: 1;
  settings: Settings;
  cards: Record<string, CardState>;
  custom: Item[];
  reviews: ReviewLog[];
  sessions: SessionRecord[];
  ties: Tie[];
};
