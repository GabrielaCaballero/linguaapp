"use client";
// "Report a problem" on the answer screen (owner, 2026-11-23): learners flag content that's wrong
// — a translation, a correction that should have accepted their answer, bad audio. Reports wait in
// a queue on the device and go to Supabase `content_reports` once signed in (rows only the owner
// can read; schema.sql). The owner reads them with docs/team/metrics.sql, section 9.
// A report is something the learner chose to send, so it doesn't depend on "Share usage statistics".
import { KEYS } from "./storage-adapter";
import { APP_VERSION } from "./metrics";
import { currentUserId, isSyncConfigured, uploadReports } from "./sync/client";

export type ReportReason = "answer_ok" | "translation" | "audio" | "mistake" | "other";

export interface ContentReport {
  t: string;
  item_id: string;
  lang: string;
  base: string;
  reason: ReportReason;
  mode?: string;
  verdict?: string;
  /** What the learner typed: only for "my answer should count". */
  answer?: string;
  comment?: string;
  app_version: string;
}

const MAX = 100;

function read(): ContentReport[] {
  try {
    return JSON.parse(localStorage.getItem(KEYS.reports) ?? "[]") as ContentReport[];
  } catch {
    return [];
  }
}
function write(q: ContentReport[]) {
  try {
    localStorage.setItem(KEYS.reports, JSON.stringify(q.slice(-MAX)));
  } catch {
    /* storage full or blocked */
  }
}

/** Queue a report and try to send it now. */
export function report(r: Omit<ContentReport, "t" | "app_version">) {
  const row: ContentReport = {
    ...r,
    answer: r.reason === "answer_ok" ? r.answer?.slice(0, 300) || undefined : undefined,
    comment: r.comment?.trim().slice(0, 500) || undefined,
    t: new Date().toISOString(),
    app_version: APP_VERSION,
  };
  write([...read(), row]);
  void flushReports();
}

let flushing = false;
/** Upload queued reports (signed in only; kept for later when offline). */
export async function flushReports(): Promise<void> {
  if (flushing || !isSyncConfigured() || !currentUserId()) return;
  flushing = true;
  try {
    for (let q = read(); q.length; q = read()) {
      const batch = q.slice(0, 20);
      if (!(await uploadReports(batch))) break;
      write(read().slice(batch.length));
    }
  } finally {
    flushing = false;
  }
}
