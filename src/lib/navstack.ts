"use client";
// A small record of the screens visited in this tab, so a screen's back arrow can go *back*
// (when the previous screen is its parent) instead of pushing the parent again — which made the
// phone's back gesture loop between two screens.
const KEY = "lingua:nav";
const MAX = 30;

function read(): string[] {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export function recordVisit(path: string) {
  try {
    const s = read();
    if (s[s.length - 1] === path) return;
    // Coming back to the screen before: the browser went back, so pop instead of push.
    if (s[s.length - 2] === path) s.pop();
    else s.push(path);
    sessionStorage.setItem(KEY, JSON.stringify(s.slice(-MAX)));
  } catch {
    /* private mode: back arrows just replace */
  }
}

/** The screen before this one in this tab, if any. */
export function previousPath(): string | undefined {
  const s = read();
  return s[s.length - 2];
}
