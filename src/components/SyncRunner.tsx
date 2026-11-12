"use client";
// Background sync while signed in: on start, when the app comes back to the foreground or
// online, shortly after local changes, and right away when the app is hidden (closing the
// app after a lesson still uploads it). Renders nothing.
import { useEffect } from "react";
import { onCommit } from "@/lib/store";
import { getEngine, useAccount } from "@/lib/sync/client";

const DEBOUNCE_MS = 20_000;

export function SyncRunner() {
  const { user } = useAccount();
  const userId = user?.id;

  useEffect(() => {
    const engine = getEngine();
    if (!engine || !userId || engine.signedInAs() !== userId) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const now = () => {
      if (timer) clearTimeout(timer);
      timer = null;
      void engine.syncNow();
    };
    const soon = () => {
      if (!timer) timer = setTimeout(now, DEBOUNCE_MS);
    };
    const onVis = () => now();
    const off = onCommit((_db, info) => {
      if (!info.fromSync && !info.eventsOnly) soon();
    });
    now();
    window.addEventListener("online", now);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      off();
      if (timer) clearTimeout(timer);
      window.removeEventListener("online", now);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [userId]);

  return null;
}
