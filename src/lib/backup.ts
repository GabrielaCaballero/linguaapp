// JSON backup export/import. The AI-tutor key lives under a different storage key and is
// never part of the DB, so it can't leak into a backup. Import accepts v1 or v2 files and
// runs the migration chain; a malformed file throws and changes nothing.
import type { TargetLang } from "@/content/schema";
import type { DB } from "./model";
import { migrateAny, type LegacyIndex } from "./migrate";

export function exportBackup(db: DB): string {
  const clean: DB = { ...db, legacyTies: undefined };
  return JSON.stringify({ ...clean, exportedAt: new Date().toISOString(), app: "lingua" }, null, 1);
}

export interface BackupPreview {
  langs: TargetLang[];
  cards: number;
  reviews: number;
  goals: string[];
  fromVersion: number;
}

export function parseBackup(text: string, legacy: LegacyIndex, now = Date.now()): { db: DB; preview: BackupPreview } {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new Error("not-json");
  }
  const fromVersion = (raw as { version?: number })?.version ?? 0;
  const db = migrateAny(raw, legacy, now);
  const r = db as DB & { exportedAt?: string; app?: string };
  delete r.exportedAt;
  delete r.app;
  const langs = Object.keys(db.profile.courses) as TargetLang[];
  return {
    db,
    preview: {
      langs,
      cards: Object.keys(db.cards).length,
      reviews: db.reviews.length,
      goals: langs.map((l) => {
        const g = db.profile.courses[l]?.goal;
        return g ? `${l}: ${g.target ?? g.kind}${g.by ? " · " + g.by : ""} · ${g.minutesPerDay} min` : `${l}: —`;
      }),
      fromVersion,
    },
  };
}

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
