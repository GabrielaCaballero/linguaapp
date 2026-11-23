"use client";
// Time per screen (only while the page is visible), one "app_open" per launch, and regular
// uploads of the queue. Does nothing unless usage statistics are on (src/lib/metrics.ts).
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { flushEvents, track } from "@/lib/metrics";
import { flushReports } from "@/lib/reports";
import { useAccount } from "@/lib/sync/client";

const MAX_SECONDS = 30 * 60; // a screen left open for hours isn't "time spent"

export function MetricsTracker() {
  const path = usePathname() ?? "/";
  const since = useRef<number | null>(null);
  const shown = useRef(path);
  const userId = useAccount().user?.id;

  // The session is read asynchronously at launch: upload as soon as we know who's signed in.
  useEffect(() => {
    if (userId) {
      void flushEvents();
      void flushReports();
    }
  }, [userId]);

  // One "app_open" per launch, then upload every minute and when the app goes to the background.
  useEffect(() => {
    track("app_open", {});
    void flushEvents();
    void flushReports(); // content reports are sent whether or not statistics are on
    const id = window.setInterval(() => {
      void flushEvents();
      void flushReports();
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const report = () => {
      if (since.current === null) return;
      const s = Math.round((Date.now() - since.current) / 1000);
      since.current = null;
      if (s >= 1) track("screen_time", { path: shown.current, seconds: Math.min(s, MAX_SECONDS) });
    };
    // A new screen: close the previous one's time, start this one's, and upload what's queued.
    report();
    void flushEvents();
    shown.current = path;
    since.current = document.visibilityState === "visible" ? Date.now() : null;
    const onVis = () => {
      if (document.visibilityState === "visible") since.current = Date.now();
      else {
        report();
        void flushEvents();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      report();
    };
  }, [path]);
  return null;
}
