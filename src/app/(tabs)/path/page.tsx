"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDB } from "@/lib/store";
import { gl, units, visible } from "@/lib/content";
import { courseLangs, currentUnit, unitProgress } from "@/lib/stats";
import { Loading, Ring, Seal, useT } from "@/components/ui";
import { Icon } from "@/components/icons";
import { setActiveLang } from "@/lib/actions";
import { lessonHref, onboardingHref } from "@/lib/nav";

export default function PathPage() {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const curRef = useRef<HTMLDivElement>(null);
  const ready = !!db?.profile.onboarded;
  useEffect(() => {
    if (db && !db.profile.onboarded) router.replace(onboardingHref());
  }, [db, router]);
  useEffect(() => {
    if (ready) curRef.current?.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior });
  }, [ready]);
  if (!db || !ready) return <Loading />;
  const langs = courseLangs(db);
  const lang = langs.includes(db.profile.activeLang) ? db.profile.activeLang : langs[0];
  const base = db.profile.courses[lang]!.explainIn;
  const us = units(lang);
  const cur = currentUnit(db, lang);

  return (
    <main className="screen">
      <header className="row between" style={{ minHeight: 48 }}>
        <h1 className="title">{t.pathTitle}</h1>
        {langs.length > 1 && (
          <div className="seg" style={{ width: 120 }}>
            {langs.map((l) => (
              <button key={l} aria-pressed={l === lang} onClick={() => setActiveLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        )}
        {langs.length === 1 && <Seal lang={lang} size={36} />}
      </header>
      <div className="path" style={{ marginTop: 24 }}>
        {us.map((u) => {
          const p = unitProgress(db, u);
          const isCur = u.id === cur.id;
          const done = p.total > 0 && p.learned === p.total;
          const samples = u.items.filter((i) => visible(i, base) && (i.type === "word" || i.type === "phrase")).slice(0, 3);
          return (
            <div className="unit" key={u.id} ref={isCur ? curRef : undefined}>
              <div className={`node${isCur ? " cur" : ""}`}>
                <Ring value={p.total ? p.learned / p.total : 0} size={72} stroke={6} gold={done} label={t.learnedOf(p.learned, p.total)}>
                  <span style={{ fontSize: 28 }} aria-hidden="true">{u.icon}</span>
                </Ring>
              </div>
              <div className={`card unit-card${isCur ? " cur" : ""}`}>
                <div className="row between" style={{ gap: 8 }}>
                  <span className="caption">{t.unitN(u.index)} · {u.cefr}</span>
                  {isCur && <span className="pill" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>{t.current}</span>}
                  {!isCur && done && <span className="pill"><Icon name="check" size={14} /> {t.learnedOf(p.learned, p.total)}</span>}
                </div>
                <h2 className="h2" style={{ marginTop: 4 }}>
                  <span lang={lang} className="display">{u.title.target}</span> <span className="muted" style={{ fontWeight: 500, fontSize: "0.9375rem" }}>· {gl(u.title, base)}</span>
                </h2>
                <ul style={{ margin: "8px 0", paddingLeft: 18 }} className="label">
                  {u.canDo.slice(0, 2).map((c, k) => (
                    <li key={k} className="muted" style={{ marginBottom: 2 }}>{gl(c, base)}</li>
                  ))}
                </ul>
                {samples.length > 0 && (
                  <div className="samples" lang={lang}>
                    {samples.map((s) => <span key={s.id}>{s.target}</span>)}
                  </div>
                )}
                <div className="row between" style={{ marginTop: 12 }}>
                  <span className="caption">{t.learnedOf(p.learned, p.total)}</span>
                  <button className={`btn ${isCur ? "btn-primary" : "btn-secondary"} btn-sm`} onClick={() => router.push(lessonHref("auto", u.index))}>
                    {t.practiseUnit}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="caption center" style={{ marginTop: 24 }}>{t.comingSoon}</p>
    </main>
  );
}
