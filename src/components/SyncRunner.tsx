"use client";
// Background sync while signed in: on start, when the app comes back to the foreground or
// online, when a lesson ends (Results calls syncNow), when the app is hidden (closing the
// app after a lesson still uploads it), and at most every 2 minutes while practising.
// Each upload is the whole document, so it must not run after every answer. Renders nothing.
import { useEffect } from "react";
import { onCommit } from "@/lib/store";
import { getEngine, isGoogleEnabled, useAccount, useSyncStatus } from "@/lib/sync/client";

const DEBOUNCE_MS = 120_000;

export function SyncRunner() {
  const { user } = useAccount();
  const userId = user?.id;
  // The engine's own sign-in finishes after the account is known (first sign-in on a
  // device), so wait for both before starting the triggers.
  const engineSignedIn = useSyncStatus().signedIn;

  // Google sometimes returns to the Site URL (e.g. a preview address that isn't allowed):
  // hand the ?code / ?error to the sign-in screen instead of leaving it in the URL.
  useEffect(() => {
    if (!isGoogleEnabled() || window.location.pathname === "/account") return;
    const q = new URLSearchParams(window.location.search);
    if (q.has("code") || q.has("error_description")) window.location.replace(`/account?from=settings&${q.toString()}`);
  }, []);

  useEffect(() => {
    const engine = getEngine();
    if (!engine || !userId || !engineSignedIn || engine.signedInAs() !== userId) return;
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
  }, [userId, engineSignedIn]);

  return null;
}
