"use client";
// One quiet line on Welcome for invited friends who arrive from a chat link: inside another
// app's browser Lingua can't be installed and its progress lives in that app; in iPhone
// Safari, installing is two taps people don't know about. Shows nothing once installed.
import { useSyncExternalStore } from "react";
import type { Dict } from "@/lib/i18n";

type Where = "inApp" | "iosSafari" | null;

function detect(): Where {
  const ua = navigator.userAgent;
  const standalone = window.matchMedia?.("(display-mode: standalone)").matches || (navigator as { standalone?: boolean }).standalone === true;
  if (standalone) return null;
  if (/FBAN|FBAV|Instagram|Line\/|Snapchat|MicroMessenger|; wv\)/.test(ua)) return "inApp";
  if (/iPhone|iPad|iPod/.test(ua) && /Safari\//.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)) return "iosSafari";
  return null;
}

const noop = () => () => {};

export function InstallHint({ t }: { t: Dict }) {
  const where = useSyncExternalStore<Where>(noop, detect, () => null);
  if (!where) return null;
  return (
    <p className="caption" role="note" style={{ margin: "16px auto 0", maxWidth: 320 }}>
      {where === "inApp" ? t.installInApp : t.installIos}
    </p>
  );
}
