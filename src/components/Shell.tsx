"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useDB, update } from "@/lib/store";
import type { DB, Lang } from "@/lib/types";
import { LANG_FLAG, LANG_LABEL } from "@/content";
import { speak } from "@/lib/speech";

const TABS = [
  { href: "/", label: "Today", d: "M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" },
  { href: "/progress", label: "Progress", d: "M5 20V11M12 20V5M19 20v-6" },
  { href: "/milestones", label: "Milestones", d: "M6 21V4m0 1h11l-2 4 2 4H6" },
  { href: "/more", label: "More", d: "M5 12h.01M12 12h.01M19 12h.01" },
];

export function TabBar() {
  const path = usePathname();
  return (
    <div className="tabbar">
      <nav>
        {TABS.map((t) => (
          <Link key={t.href} href={t.href} aria-current={path === t.href ? "page" : undefined}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={t.label === "More" ? 3.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d={t.d} />
            </svg>
            {t.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function LangSwitch({ lang, compact }: { lang: Lang; compact?: boolean }) {
  const set = (l: Lang) => update((db) => ({ ...db, settings: { ...db.settings, lang: l } }));
  return (
    <div className="seg" role="group" aria-label="Language">
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
  return (
    <div data-lang={lang ?? db.settings.lang}>
      <div className={full ? "app full" : "app"}>{children(db)}</div>
      {!full && <TabBar />}
    </div>
  );
}

export function SpeakButton({ text, lang }: { text: string; lang: Lang }) {
  return (
    <button
      className="speak"
      aria-label="Play audio"
      onClick={() => speak(text, lang)}
    >
      🔊
    </button>
  );
}
