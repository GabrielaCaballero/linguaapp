"use client";

import Link from "next/link";
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
      <Link href="/write" className="card row" style={{ marginTop: 16, gap: 12, textDecoration: "none", color: "inherit" }}>
        <span className="accent"><Icon name="sparkle" size={22} /></span>
        <span className="stack grow" style={{ gap: 2 }}>
          <b className="label">{t.writeOpen}</b>
          <span className="caption">{t.writeOpenSub}</span>
        </span>
        <Icon name="chevron" size={18} />
      </Link>
      {/* The unit you're on is the one big card; every other unit is one line (UX review 2026-11-16). */}
      <div className="path" style={{ marginTop: 24 }}>
        {us.map((u) => {
          const p = unitProgress(db, u);
          const isCur = u.id === cur.id;
          const done = p.total > 0 && p.learned === p.total;
          if (!isCur)
            return (
              <Link key={u.id} href={`/unit?id=${u.id}`} className={`unit unit-row${done ? " done" : ""}`} aria-label={`${t.unitN(u.index)} · ${u.title.target} · ${gl(u.title, base)}`}>
                <div className="node sm">
                  <Ring value={p.total ? p.learned / p.total : 0} size={44} stroke={4} gold={done} label={t.learnedOf(p.learned, p.total)}>
                    <span style={{ fontSize: 18 }} aria-hidden="true">{u.icon}</span>
                  </Ring>
                </div>
                <div className="unit-row-text">
                  <span className="caption">{t.unitN(u.index)} · {u.cefr}{done ? ` · ${t.learnedOf(p.learned, p.total)}` : ""}</span>
                  <span className="unit-row-title"><span lang={lang} className="display">{u.title.target}</span> <span className="muted">· {gl(u.title, base)}</span></span>
                </div>
                <Icon name="chevron" size={18} />
              </Link>
            );
          const samples = u.items.filter((i) => visible(i, base) && (i.type === "word" || i.type === "phrase")).slice(0, 3);
          return (
            <div className="unit" key={u.id} ref={curRef}>
              <div className="node cur">
                <Ring value={p.total ? p.learned / p.total : 0} size={72} stroke={6} gold={done} label={t.learnedOf(p.learned, p.total)}>
                  <span style={{ fontSize: 28 }} aria-hidden="true">{u.icon}</span>
                </Ring>
              </div>
              <div className="card unit-card cur">
                <div className="row between" style={{ gap: 8, flexWrap: "wrap" }}>
                  <span className="caption">{t.unitN(u.index)} · {u.cefr}</span>
                  <span className="pill" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>{t.current}</span>
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
                <span className="caption" style={{ display: "block", marginTop: 12 }}>{t.learnedOf(p.learned, p.total)}</span>
                <div className="row" style={{ marginTop: 8, gap: 8, flexWrap: "wrap" }}>
                  <button className="btn btn-primary btn-sm grow" onClick={() => router.push(lessonHref("auto", u.index))}>
                    {t.practiseUnit}
                  </button>
                  <Link className="btn btn-ghost btn-sm" href={`/unit?id=${u.id}`}>{t.unitNotes}</Link>
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
