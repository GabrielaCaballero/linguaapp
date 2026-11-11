"use client";

import { useSyncExternalStore } from "react";

// Current time as an external store: 0 during prerender (pages render a placeholder until
// the on-device DB loads anyway), refreshed every 30 s and whenever the tab becomes visible.
let current = 0;
const listeners = new Set<() => void>();

function tick() {
  current = Date.now();
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  const id = setInterval(tick, 30_000);
  document.addEventListener("visibilitychange", tick);
  return () => {
    listeners.delete(l);
    clearInterval(id);
    document.removeEventListener("visibilitychange", tick);
  };
}

function snapshot() {
  if (!current) current = Date.now();
  return current;
}

export function useNow(): number {
  return useSyncExternalStore(subscribe, snapshot, () => 0);
}
