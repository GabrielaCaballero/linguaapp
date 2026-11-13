// Lingua v2 on-device data model. Everything the app remembers lives in one `DB` object
// (localStorage key "lingua:v2"). The AI-tutor key lives elsewhere ("lingua:llm") and is
// never part of this object, so it can never end up in a backup file.
import type { BaseLang, Cefr, Item, TargetLang } from "@/content/schema";

export type { BaseLang, Cefr, Item, TargetLang };

/** Levels a goal can aim for. "A1" = end of A1.2. */
export type GoalLevel = "A1.1" | "A1" | "A2" | "B1" | "B2";
export type GoalKind = "level" | "trip" | "steady" | "maintain";

export interface Goal {
  kind: GoalKind;
  /** Target level (level/trip). Trip is always A1.1. */
  target?: GoalLevel;
  /** YYYY-MM-DD deadline (level/trip). */
  by?: string;
  /** Minutes a day the learner committed to (computed for level/trip, chosen for steady). */
  minutesPerDay: number;
  /** Optional outside class hours per week, credited against the estimate. */
  classHours?: number;
  /** FSRS desired retention: 0.90, or 0.85 for Maintain. */
  retention: number;
  setAt: number;
}

export type Experience = "never" | "bit" | "classes" | "lived";

export interface PlacementResult {
  theta: number;
  se: number;
  cefr: Cefr;
  at: number;
  items: number;
  /** Item ids seeded as "probably known". */
  seeded: number;
}

export interface Course {
  explainIn: BaseLang;
  addedAt: number;
  experience?: Experience;
  goal?: Goal;
  placement?: PlacementResult;
  /** 1-based index of the unit the learner starts / is working on. */
  unit: number;
}

export type Anchor = { slot: "morning" | "commute" | "lunch" | "evening"; time: string };

export interface Settings {
  sessionMinutes: 3 | 5 | 10;
  daysPerWeek: number; // 3..7
  speaking: boolean;
  listening: boolean;
  bridgeTips: boolean;
  speedTimer: boolean;
  sounds: boolean;
  vibration: boolean;
  reduceMotion: "system" | "on";
  theme: "system" | "light" | "dark";
}

export interface Profile {
  appLang: BaseLang;
  courses: Partial<Record<TargetLang, Course>>;
  activeLang: TargetLang;
  anchor?: Anchor;
  settings: Settings;
  onboarded: boolean;
  createdAt: number;
  /** Languages that still need the goal step (v1 upgrade). */
  pendingGoal?: TargetLang[];
  lastBackupAt?: number;
  /** Things shown once (tips, offers). */
  seen?: Record<string, number>;
}

/** FSRS card, serialised with epoch-ms dates. */
export interface CardV2 {
  id: string;
  lang: TargetLang;
  due: number;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: number; // ts-fsrs State: 0 New, 1 Learning, 2 Review, 3 Relearning
  last_review?: number;
  introducedAt: number;
  /** Seeded by placement as "probably known". */
  seeded?: boolean;
}

export type Verdict = "correct" | "almost" | "wrong";
export type Confidence = "sure" | "think" | "guess";
export type Rating = 1 | 2 | 3 | 4; // Again Hard Good Easy
export type GradeSource = "checker" | "llm" | "override";

export type Mode =
  | "guess"
  | "recognize"
  | "recall"
  | "tiles"
  | "listen"
  | "article"
  | "pick-spelling"
  | "question"
  | "speed";

export interface ReviewLog {
  t: number;
  id: string;
  lang: TargetLang;
  mode: Mode;
  verdict: Verdict;
  rating: Rating;
  source: GradeSource;
  confidence?: Confidence;
  ms?: number;
  /** Days since the previous review of this card (for "remembered after a week"). */
  gap?: number;
}

export interface SessionRecord {
  t: number;
  lang: TargetLang;
  seconds: number;
  tasks: number;
  graded: number;
  correct: number;
  newItems: number;
  stronger: number;
  toFix: string[];
}

export type AppEvent =
  | { t: number; type: "session_start"; lang: TargetLang; mode: string }
  | { t: number; type: "session_end"; lang: TargetLang; seconds: number; tasks: number }
  | { t: number; type: "answer"; itemId: string; mode: Mode; verdict: Verdict; rating: Rating; source: GradeSource; ms: number }
  | { t: number; type: "goal_set"; lang: TargetLang; kind: GoalKind; minutes: number }
  | { t: number; type: "placement_done"; lang: TargetLang; cefr: Cefr; items: number }
  | { t: number; type: "checkin_choice"; lang: TargetLang; choice: string }
  | { t: number; type: "alt_candidate"; itemId: string; text: string };

export interface DB {
  version: 2;
  profile: Profile;
  cards: Record<string, CardV2>;
  reviews: ReviewLog[];
  sessions: SessionRecord[];
  custom: Item[];
  events: AppEvent[];
  /** v1 Ties log, kept only until the learner has been offered a download once. */
  legacyTies?: unknown[];
}

export const DEFAULT_SETTINGS: Settings = {
  sessionMinutes: 5,
  daysPerWeek: 5,
  speaking: false,
  listening: true,
  bridgeTips: true,
  speedTimer: true,
  sounds: false,
  vibration: true,
  reduceMotion: "system",
  theme: "system",
};

export function emptyDB(now = Date.now(), appLang: BaseLang = "es"): DB {
  return {
    version: 2,
    profile: {
      appLang,
      courses: {},
      activeLang: "it",
      settings: { ...DEFAULT_SETTINGS },
      onboarded: false,
      createdAt: now,
    },
    cards: {},
    reviews: [],
    sessions: [],
    custom: [],
    events: [],
  };
}

export const LANGS: TargetLang[] = ["it", "de"];
