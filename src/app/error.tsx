"use client";
// Any screen that crashes lands here instead of Next's bare error page. Right after a new version
// is deployed, an old screen (e.g. reached with Back) can ask for code that no longer exists:
// reload once to pick up the new version. Otherwise offer a way home.
import { useEffect } from "react";
import { dict } from "@/lib/i18n";
import { getDB } from "@/lib/store";

const isStale = (e: Error) => /ChunkLoadError|Loading chunk|dynamically imported module|Failed to fetch/i.test(`${e.name} ${e.message}`);

export default function ErrorScreen({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (!isStale(error)) return;
    try {
      // At most one automatic reload a minute, so a real bug can't cause a reload loop.
      const last = Number(sessionStorage.getItem("lingua:reloadedAt") ?? 0);
      if (Date.now() - last < 60_000) return;
      sessionStorage.setItem("lingua:reloadedAt", String(Date.now()));
    } catch {
      return;
    }
    window.location.reload();
  }, [error]);
  let t = dict("es");
  try {
    t = dict(getDB().profile.appLang);
  } catch {
    /* DB not ready: Spanish default */
  }
  return (
    <main className="screen full" style={{ justifyContent: "center", textAlign: "center", gap: 16 }}>
      <h1 className="title">{t.errTitle}</h1>
      <p className="muted" style={{ margin: 0 }}>{t.errSub}</p>
      <div className="stack" style={{ marginTop: 16 }}>
        {/* A full page load on purpose: it also picks up a newly deployed version. */}
        {/* eslint-disable-next-line @next/next/no-location-assign-relative-destination */}
        <button className="btn btn-primary" onClick={() => window.location.assign("/")}>{t.errHome}</button>
        <button className="btn btn-ghost" onClick={reset}>{t.errRetry}</button>
      </div>
    </main>
  );
}
