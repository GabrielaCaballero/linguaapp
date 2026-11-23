"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { availableLangs } from "@/content";
import type { TargetLang } from "@/content/schema";
import type { DB } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import { LANG_NAME } from "@/lib/content";
import { courseLangs, currentUnit, targetFor, todayMinutes } from "@/lib/stats";
import { setActiveLang } from "@/lib/actions";
import { onboardingHref } from "@/lib/nav";
import { useNow } from "@/lib/hooks";
import { Icon } from "./icons";
import { Seal, Sheet } from "./ui";

/**
 * The one way to change course (owner, 2026-11-16 and 2026-11-23): the flag and the course's
 * name, opening a list of your courses and "Add a language". Same on Today and the course map,
 * so it fits however many languages someone learns.
 */
export function CourseSwitcher({ db, lang, t }: { db: DB; lang: TargetLang; t: Dict }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const now = useNow();
  const langs = courseLangs(db);
  return (
    <>
      <button className="lang-switch" onClick={() => setOpen(true)} aria-label={`${t.switchCourse}: ${LANG_NAME[lang]}`}>
        <Seal lang={lang} size={28} />
        <span>{LANG_NAME[lang]}</span>
        <Icon name="down" size={16} className="muted" />
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} label={t.switchCourse}>
        <h2 className="h2" style={{ marginBottom: 12 }}>{t.switchCourse}</h2>
        <div className="group">
          {langs.map((l) => (
            <button
              key={l}
              className="cell"
              onClick={() => {
                setActiveLang(l);
                setOpen(false);
              }}
              aria-pressed={l === lang}
            >
              <Seal lang={l} size={36} />
              <span className="grow">
                <span style={{ fontWeight: 650 }}>{LANG_NAME[l]}</span>
                <div className="cell-sub">{Math.round(todayMinutes(db, now, l))}/{targetFor(db, l)} {t.min} · {t.unitN(currentUnit(db, l).index)}</div>
              </span>
              {l === lang && <Icon name="check" size={20} className="accent" />}
            </button>
          ))}
          {availableLangs(db.profile.appLang).some((l) => !langs.includes(l)) && (
            <button
              className="cell"
              onClick={() => {
                setOpen(false);
                router.push(onboardingHref());
              }}
            >
              <span className="icon-btn" style={{ background: "var(--surface-2)" }}><Icon name="plus" size={20} /></span>
              <span className="grow" style={{ fontWeight: 600 }}>{t.addLanguage}</span>
            </button>
          )}
        </div>
      </Sheet>
    </>
  );
}
