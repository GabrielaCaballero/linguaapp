"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useDB, update } from "@/lib/store";
import type { DB, Lang } from "@/lib/types";
import { LANG_FLAG, LANG_LABEL } from "@/content";
import { speak } from "@/lib/speech";
import { t } from "@/lib/i18n";

const TABS = [
  { href: "/", key: "today", d: "M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" },
  { href: "/progress", key: "progress", d: "M5 20V11M12 20V5M19 20v-6" },
  { href: "/milestones", key: "milestones", d: "M6 21V4m0 1h11l-2 4 2 4H6" },
  { href: "/more", key: "more", d: "M5 12h.01M12 12h.01M19 12h.01" },
] as const;

export function TabBar({ lang }: { lang: Lang }) {
  const path = usePathname();
  const labels = t(lang).tabs;
  return (
    <div className="tabbar">
      <nav>
        {TABS.map((tab) => (
          <Link key={tab.href} href={tab.href} aria-current={path === tab.href ? "page" : undefined}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={tab.key === "more" ? 3.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d={tab.d} />
            </svg>
            {labels[tab.key]}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function LangSwitch({ lang, compact }: { lang: Lang; compact?: boolean }) {
  const set = (l: Lang) => update((db) => ({ ...db, settings: { ...db.settings, lang: l } }));
  return (
    <div className="seg" role="group" aria-label={t(lang).language}>
      {(["it", "de"] as Lang[]).map((l) => (
        <button key={l} aria-pressed={lang === l} onClick={() => set(l)}>
          {LANG_FLAG[l]} {compact ? l.toUpperCase() : LANG_LABEL[l]}
        </button>
      ))}
    </div>
  );
}

/** Page wrapper: waits for on-device data, sets the language accent, shows the tab bar. */
export function Page({ children, full, lang }: { children: (db: DB) => ReactNode; full?: boolean; lang?: Lang }) {
  const db = useDB();
  if (!db) return <div className="app" />;
  const l = lang ?? db.settings.lang;
  return (
    <div data-lang={l}>
      <div className={full ? "app full" : "app"}>{children(db)}</div>
      {!full && <TabBar lang={l} />}
    </div>
  );
}

export function SpeakButton({ text, lang }: { text: string; lang: Lang }) {
  return (
    <button
      className="speak"
      aria-label={t(lang).playAudio}
      onClick={() => speak(text, lang)}
    >
      🔊
    </button>
  );
}
