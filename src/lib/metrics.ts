"use client";
// Usage statistics (owner, 2026-11-23): only with the learner's yes ("Share usage statistics",
// off until then). Events are small — a screen and its seconds, a lesson start/end, a setting —
// never the email or typed answers. They wait in a queue on the device and are uploaded in
// batches to Supabase `app_events` once signed in (rows only the owner can read; schema.sql).
// What they answer and the ready-made queries: docs/team/metrics.sql.
import { getDB } from "./store";
import { currentUserId, isSyncConfigured, uploadEvents } from "./sync/client";

const KEY = "lingua:events";
const MAX = 500;
const BATCH = 100;
export const APP_VERSION = "2026.11.23";

export interface QueuedEvent {
  t: string;
  name: string;
  props: Record<string, string | number | boolean | null>;
  platform: string;
  app_version: string;
}

/** Statistics are on only when the learner said yes (and the app has accounts). */
export function metricsOn(): boolean {
  try {
    return isSyncConfigured() && getDB().profile.settings.shareStats === true;
  } catch {
    return false;
  }
}

export function platform(): string {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const os = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? "ios" : /Android/.test(ua) ? "android" : "desktop";
  const installed = typeof window !== "undefined" && (window.matchMedia?.("(display-mode: standalone)").matches || (navigator as { standalone?: boolean }).standalone === true);
  return installed ? `${os}-app` : os;
}

function read(): QueuedEvent[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]") as QueuedEvent[];
  } catch {
    return [];
  }
}
function write(q: QueuedEvent[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(q.slice(-MAX)));
  } catch {
    /* storage full or blocked: statistics are best-effort */
  }
}

/** Record one event (no-op unless statistics are on). Never throws, never blocks. */
export function track(name: string, props: QueuedEvent["props"] = {}) {
  if (!metricsOn()) return;
  write([...read(), { t: new Date().toISOString(), name, props, platform: platform(), app_version: APP_VERSION }]);
}

let flushing = false;
/** Upload queued events in batches (signed in only; kept for later when offline). */
export async function flushEvents(): Promise<void> {
  if (flushing || !metricsOn() || !currentUserId()) return;
  flushing = true;
  try {
    for (let q = read(); q.length; q = read()) {
      const batch = q.slice(0, BATCH);
      if (!(await uploadEvents(batch))) break;
      write(read().slice(batch.length));
    }
  } finally {
    flushing = false;
  }
}

/** Forget everything queued (statistics turned off, or signing out). */
export function clearEvents() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to clear */
  }
}
