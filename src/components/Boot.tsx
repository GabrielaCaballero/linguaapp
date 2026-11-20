"use client";

import { useEffect, useState } from "react";
import { useDB, requestPersistence } from "@/lib/store";
import { dict } from "@/lib/i18n";
import { Icon } from "./icons";

/** Keeps <html> attributes in sync with settings, registers the service worker, shows the offline pill. */
export function Boot() {
  const db = useDB();
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (!db) return;
    const r = document.documentElement;
    const p = db.profile;
    r.dataset.lang = p.activeLang;
    r.lang = p.appLang;
    if (p.settings.theme === "system") delete r.dataset.theme;
    else r.dataset.theme = p.settings.theme;
    if (p.settings.reduceMotion === "on") r.dataset.motion = "reduce";
    else delete r.dataset.motion;
  }, [db]);

  useEffect(() => {
    requestPersistence();
    const sync = () => setOnline(navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      const sendLoaded = () =>
        navigator.serviceWorker.ready
          .then((r) => r.active?.postMessage({ type: "cache-urls", urls: performance.getEntriesByType("resource").map((e) => e.name) }))
          .catch(() => {});
      const reg = () => {
        navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).then(sendLoaded, () => {});
        setTimeout(sendLoaded, 8000);
      };
      if (document.readyState === "complete") reg();
      else window.addEventListener("load", reg, { once: true });
    }
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (online || !db) return null;
  return (
    <div className="offline-pill" role="status">
      <Icon name="wifi-off" size={16} /> {dict(db.profile.appLang).offline}
    </div>
  );
}
