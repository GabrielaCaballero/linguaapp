"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDB } from "@/lib/store";
import { useNow } from "@/lib/hooks";
import { gl, LANG_NAME, units } from "@/lib/content";
import { avgMinutes, calibration, courseLangs, rememberedAfterWeek, targetFor, testerStats, unitProgress, weekStrip, wordBuckets } from "@/lib/stats";
import { fmtMonth, fromISO } from "@/lib/dates";
import { localeOf } from "@/lib/i18n";
import { saveGoal, setActiveLang } from "@/lib/actions";
import { Loading, Ring, Seal, Sheet, Toast, useT } from "@/components/ui";
import { Icon } from "@/components/icons";
import { GoalPicker } from "@/components/GoalPicker";

export default function MePage() {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const now = useNow();
  const [editGoal, setEditGoal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  useEffect(() => {
    if (db && !db.profile.onboarded) router.replace("/onboarding");
  }, [db, router]);
  if (!db || !db.profile.onboarded) return <Loading />;
  const langs = courseLangs(db);
  const lang = langs.includes(db.profile.activeLang) ? db.profile.activeLang : langs[0];
  const course = db.profile.courses[lang]!;
  const base = course.explainIn;
  const locale = localeOf(db.profile.appLang);
  const g = course.goal;
  const target = targetFor(db, lang);
  const avg = avgMinutes(db, lang, now, 14) * 7 / db.profile.settings.daysPerWeek;
  const pace = target ? avg / target : 0;
  const status = db.sessions.length < 3 ? null : pace >= 1.1 ? t.aheadPace : pace >= 0.8 ? t.onTrack : t.behindPace;
  const week = weekStrip(db, now);
  const wb = wordBuckets(db, lang);
  const rem = rememberedAfterWeek(db, lang);
  const cal = calibration(db, lang);
  const dayFmt = new Intl.DateTimeFormat(locale, { weekday: "narrow" });

  const goalLine = !g
    ? t.noGoal
    : g.kind === "maintain"
      ? t.goalKindMaintain
      : g.kind === "steady"
        ? `${t.goalKindSteady} · ${t.minPerDay(g.minutesPerDay)}`
        : `${g.target} · ${g.by ? fmtMonth(fromISO(g.by), locale) : ""}`;

  return (
    <main className="screen">
      <header className="row between" style={{ minHeight: 48 }}>
        <h1 className="title">{t.meTitle}</h1>
        <Link href="/me/settings" className="icon-btn" aria-label={t.settings}>
          <Icon name="settings" />
        </Link>
      </header>
      <div className="row" style={{ marginTop: 8, gap: 10 }}>
        {langs.map((l) => (
          <button key={l} className="chip" aria-pressed={l === lang} onClick={() => setActiveLang(l)} style={{ paddingLeft: 6 }}>
            <Seal lang={l} size={30} /> {LANG_NAME[l]}
          </button>
        ))}
      </div>
      <p className="caption" style={{ margin: "8px 0 0" }}>{t.learningSince(fmtMonth(new Date(course.addedAt), locale))}</p>

      <section className="stack" style={{ marginTop: 20 }}>
        <div className="card stack" style={{ gap: 10 }}>
          <div className="row between">
            <div>
              <div className="caption">{t.sGoal}</div>
              <div className="h2">{goalLine}</div>
            </div>
            {status && <span className="pill">{status === t.onTrack ? "✓ " : ""}{status}</span>}
          </div>
          <div className="bar" aria-label={`${Math.round(avg)} / ${target} ${t.min}`}>
            <i style={{ width: `${Math.min(100, pace * 100)}%` }} />
          </div>
          <div className="row between">
            <span className="caption">{t.minPerDay(Math.round(avg))} · {t.goalCardMin(target)}</span>
            <button className="link" onClick={() => setEditGoal(true)}>{t.editGoal}</button>
          </div>
        </div>

        <div className="card">
          <div className="caption" style={{ marginBottom: 10 }}>{t.week}</div>
          <div className="week">
            {week.map((d) => {
              const rest = !d.future && !d.today && !d.before && d.minutes < 0.5;
              return (
                <div className="d" key={d.day}>
                  {d.before ? (
                    <span style={{ width: 36, height: 36, display: "grid", placeItems: "center" }} aria-hidden="true"><i style={{ width: 6, height: 6, borderRadius: 3, background: "var(--line)" }} /></span>
                  ) : rest ? (
                    <span style={{ width: 36, height: 36, display: "grid", placeItems: "center", color: "var(--text-2)" }} aria-label={t.rest}>
                      <Icon name="moon" size={18} />
                    </span>
                  ) : (
                    <Ring value={d.minutes / d.target} size={36} stroke={5} gold={d.minutes >= d.target} label={`${Math.round(d.minutes)} ${t.min}`} />
                  )}
                  <span style={{ color: d.today ? "var(--accent)" : undefined }}>{dayFmt.format(new Date(d.day))}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Link href="/me/words" className="card" style={{ textDecoration: "none", display: "block" }}>
          <div className="row between">
            <div className="caption">{t.words}</div>
            <span className="caption accent">{t.seeAll} ›</span>
          </div>
          <div className="stat" style={{ margin: "6px 0 10px" }}>{wb.total}</div>
          <div className="stackbar" aria-hidden="true">
            <i style={{ width: `${(100 * wb.fresh) / Math.max(1, wb.total)}%`, background: "var(--accent-soft)" }} />
            <i style={{ width: `${(100 * wb.learning) / Math.max(1, wb.total)}%`, background: "color-mix(in srgb, var(--accent) 60%, transparent)" }} />
            <i style={{ width: `${(100 * wb.strong) / Math.max(1, wb.total)}%`, background: "var(--accent)" }} />
          </div>
          <div className="legend" style={{ marginTop: 8 }}>
            <span><b style={{ background: "var(--accent-soft)" }} />{t.wNew} {wb.fresh}</span>
            <span><b style={{ background: "color-mix(in srgb, var(--accent) 60%, transparent)" }} />{t.wLearning} {wb.learning}</span>
            <span><b style={{ background: "var(--accent)" }} />{t.wStrong} {wb.strong}</span>
          </div>
          <div className="caption" style={{ marginTop: 6 }}>{t.wordsSub}</div>
        </Link>

        <div className="card">
          <div className="caption">{t.rememberedWeek}</div>
          {rem ? <div className="stat" style={{ margin: "6px 0" }}>{rem.pct}%</div> : null}
          <div className="caption">{rem ? `${t.rememberedWeekSub} (n=${rem.n})` : t.rememberedNone}</div>
        </div>

        <div className="card stack" style={{ gap: 10 }}>
          <div className="caption">{t.canDos}</div>
          {units(lang).map((u) => {
            const p = unitProgress(db, u);
            return u.canDo.map((c, k) => (
              <div key={`${u.id}-${k}`} className="row" style={{ alignItems: "flex-start" }}>
                <span className={`tick${p.canDo ? " on" : ""}`} aria-label={p.canDo ? "✓" : ""}>
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                <span className="label" style={{ color: p.canDo ? "var(--text)" : "var(--text-2)" }}>{gl(c, base)}</span>
              </div>
            ));
          })}
        </div>

        <div className="card stack" style={{ gap: 8 }}>
          <div className="caption">{t.calibration}</div>
          <div className="caption">{t.calibrationSub}</div>
          {(
            [
              ["sure", t.sure],
              ["think", t.thinkSo],
              ["guess", t.guessing],
            ] as const
          ).map(([k, label]) => {
            const c = cal[k];
            const pct = c.n ? Math.round((100 * c.ok) / c.n) : null;
            return (
              <div key={k} className="row" style={{ gap: 10 }}>
                <span className="label" style={{ width: 96 }}>{label}</span>
                <div className="bar grow"><i style={{ width: `${pct ?? 0}%` }} /></div>
                <span className="caption tabular" style={{ width: 44, textAlign: "right" }}>{pct === null ? "—" : `${pct}%`}</span>
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-ghost"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(JSON.stringify(testerStats(db), null, 1));
              setToast(t.statsCopied);
            } catch {
              setToast("—");
            }
          }}
        >
          {t.stats}
        </button>
      </section>

      <Sheet open={editGoal} onClose={() => setEditGoal(false)} label={t.editGoal}>
        <h2 className="title" style={{ marginBottom: 16 }}>{t.goalTitle(t.langName[lang])}</h2>
        <GoalPicker
          lang={lang}
          base={base}
          appLang={db.profile.appLang}
          current={course.placement?.cefr ?? "A0"}
          daysPerWeek={db.profile.settings.daysPerWeek}
          initial={g}
          t={t}
          cta={t.save}
          onSave={(goal) => {
            saveGoal(lang, goal);
            setEditGoal(false);
          }}
        />
      </Sheet>
      <Toast text={toast} onDone={() => setToast(null)} />
    </main>
  );
}
