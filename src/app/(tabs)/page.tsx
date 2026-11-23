"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { TargetLang } from "@/content/schema";
import { useDB } from "@/lib/store";
import { useNow } from "@/lib/hooks";
import { Icon } from "@/components/icons";
import { Ring, Sheet, Toast, WeekDots, Loading, useT } from "@/components/ui";
import { units } from "@/lib/content";
import { courseTop, retentionFor } from "@/lib/goals";
import { dueCount, courseComplete, courseLangs, currentUnit, practiceDaysThisWeek, sleepReady, targetFor, toFix, todayMinutes, weeklyCheck } from "@/lib/stats";
import { lastSessionAt, AWAY_DAYS } from "@/lib/session";
import { DAY, fmtMonth, startOfWeek } from "@/lib/dates";
import { checkinChoice, dropLegacyTies, markSeen, saveGoal, setSettings } from "@/lib/actions";
import { downloadText } from "@/lib/backup";
import { localeOf } from "@/lib/i18n";
import { lessonHref, onboardingHref } from "@/lib/nav";
import { useMustSignIn } from "@/components/AccountGate";
import { CourseSwitcher } from "@/components/CourseSwitcher";
import { isSyncConfigured, useAccount } from "@/lib/sync/client";

export default function Today() {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const now = useNow();
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const needsOnboarding = !!db && (!db.profile.onboarded || (db.profile.pendingGoal?.length ?? 0) > 0);
  useEffect(() => {
    if (needsOnboarding) router.replace(onboardingHref());
  }, [needsOnboarding, router]);
  // Right after onboarding: open the first lesson on top of Today (one time).
  const mustSignIn = useMustSignIn();
  const acct = useAccount();
  // With accounts on, wait to know who's signed in: a guest is sent to sign up first.
  const ready = !!db && !needsOnboarding && !mustSignIn && (!acct.configured || acct.ready);
  useEffect(() => {
    if (!ready) return;
    try {
      if (sessionStorage.getItem("lingua:autostart") !== "1") return;
      sessionStorage.removeItem("lingua:autostart");
    } catch {
      return;
    }
    router.push(lessonHref("auto"));
  }, [ready, router]);

  if (!db || needsOnboarding) return <Loading />;
  const langs = courseLangs(db);
  const lang: TargetLang = langs.includes(db.profile.activeLang) ? db.profile.activeLang : langs[0];
  if (!lang) return <Loading />;
  const course = db.profile.courses[lang]!;
  const base = course.explainIn;
  const unit = currentUnit(db, lang);
  const mins = todayMinutes(db, now, lang);
  const target = targetFor(db, lang);
  const done = mins >= target;
  const sessionMin = db.profile.settings.sessionMinutes;
  const practicedToday = mins > 0;
  const days = practiceDaysThisWeek(db, now);
  const hour = new Date(now).getHours();
  const greetBase = hour < 12 ? t.greetMorning : hour < 19 ? t.greetAfternoon : t.greetEvening;
  const greet = db.profile.name ? `${greetBase}, ${db.profile.name}` : greetBase;
  const locale = localeOf(db.profile.appLang);
  const last = lastSessionAt(db, lang);
  const away = last !== undefined && now - last >= AWAY_DAYS * DAY && Object.values(db.cards).some((c) => c.lang === lang);

  const dueNow = dueCount(db, lang, now);
  const learned = Object.values(db.cards).filter((c) => c.lang === lang && c.state !== 0).length;
  // Close sheets before leaving: this page stays alive (cacheComponents <Activity>).
  const start = (kind: string) => {
    setMenu(false);
    router.push(lessonHref(kind));
  };

  // ≤ 1 card, in priority order
  let card: React.ReactNode = null;
  const wc = weeklyCheck(db, lang, now);
  const fix = toFix(db, lang, now);
  const sleep = sleepReady(db, lang, now);
  const complete = courseComplete(db, lang);
  if (db.legacyTies?.length) {
    card = (
      <div className="card stack">
        <div className="h2" style={{ fontSize: "1.0625rem" }}>{t.tiesTitle}</div>
        <div className="muted label">{t.tiesSub}</div>
        <div className="row">
          <button className="btn btn-secondary btn-sm" onClick={() => { downloadText("lingua-ties.json", JSON.stringify(db.legacyTies, null, 1)); dropLegacyTies(); }}>
            <Icon name="download" size={18} /> {t.tiesDownload}
          </button>
          <button className="btn btn-ghost btn-sm" onClick={dropLegacyTies}>{t.dismiss}</button>
        </div>
      </div>
    );
  } else if (wc) {
    const key = `checkin-${lang}-${startOfWeek(now)}`;
    const g = course.goal!;
    const fmt = (x: number) => (!isFinite(x) ? "—" : x - now > 2 * 365 * DAY ? t.over2y : fmtMonth(new Date(x), locale));
    card = (
      <div className="card stack">
        <div className="h2" style={{ fontSize: "1.0625rem" }}>{t.weeklyTitle}</div>
        <div className="label muted">{t.weeklyBody(wc.avg, fmt(wc.projected), fmt(wc.goalDate))}</div>
        <div className="stack" style={{ gap: 8 }}>
          <button className="btn btn-secondary btn-sm" style={{ width: "100%" }} onClick={() => checkinChoice(lang, "keep-date", key)}>{t.keepDate(g.minutesPerDay)}</button>
          {isFinite(wc.projected) && wc.projected - now <= 2 * 365 * DAY && (
            <button className="btn btn-secondary btn-sm" style={{ width: "100%" }} onClick={() => { saveGoal(lang, { ...g, by: new Date(wc.projected).toISOString().slice(0, 10), setAt: g.setAt }); checkinChoice(lang, "move-date", key); }}>
              {t.moveDate(fmt(wc.projected))}
            </button>
          )}
          <button className="btn btn-secondary btn-sm" style={{ width: "100%" }} onClick={() => { saveGoal(lang, { ...g, kind: "steady", minutesPerDay: Math.max(5, wc.avg), setAt: g.setAt }); checkinChoice(lang, "keep-pace", key); }}>{t.keepPace(Math.max(5, wc.avg))}</button>
        </div>
      </div>
    );
  } else if (complete) {
    // GO-8: end of content — say so plainly, keep reviews going, offer Maintain.
    card = (
      <div className="card stack">
        <div className="h2" style={{ fontSize: "1.0625rem" }}>{t.courseDoneTitle}</div>
        <div className="label muted">{t.courseDoneSub(courseTop(units(lang).map((u) => u.cefr)))}</div>
        {course.goal?.kind !== "maintain" && (
          <button className="btn btn-secondary btn-sm" style={{ width: "100%" }} onClick={() => saveGoal(lang, { kind: "maintain", minutesPerDay: 5, retention: retentionFor("maintain"), setAt: Date.now() })}>
            {t.courseDoneMaintain}
          </button>
        )}
      </div>
    );
  } else if (away) {
    card = <Banner icon="sparkle" title={t.welcomeBack} sub={t.welcomeBackSub} />;
  } else if (fix.length && !practicedToday) {
    card = <Banner icon="refresh" title={t.toFix(fix.length)} sub={t.toFixSub} />;
  } else if (sleep > 0 && !practicedToday) {
    card = <Banner icon="moon" title={t.sleepHelped} sub={t.sleepHelpedSub} />;
  }

  const unitCount = units(lang).length;

  return (
    <main className="screen">
      <header className="row between" style={{ minHeight: 48 }}>
        {/* The one place to change language: a labelled button, not a bare flag (owner, 2026-11-16). */}
        <CourseSwitcher db={db} lang={lang} t={t} />
        <div className="row" style={{ gap: 8 }} aria-label={t.weekGoal(days, db.profile.settings.daysPerWeek)} role="img">
          <WeekDots n={days} goal={db.profile.settings.daysPerWeek} />
          <span className="caption">{t.thisWeek}</span>
        </div>
      </header>

      <section style={{ marginTop: 16 }}>
        <h1 className="title">{done ? t.doneToday : greet}</h1>
        <p className="muted" style={{ margin: "4px 0 0" }}>
          {t.unitN(unit.index)} · <span lang={lang}>{unit.title.target}</span> · {unit.title[base]}
        </p>
      </section>

      <section className="grow" style={{ display: "grid", placeItems: "center", padding: "24px 0" }}>
        <Ring value={target ? mins / target : 0} size={card ? 168 : 208} gold={done} label={t.todayOf(Math.round(mins), target)}>
          <span style={{ fontSize: 44, lineHeight: 1 }} aria-hidden="true">{unit.icon}</span>
          <span className="stat" style={{ fontSize: 28, marginTop: 8 }}>
            {Math.round(mins)}<span className="muted" style={{ fontSize: 17, fontWeight: 600 }}>/{target} {t.min}</span>
          </span>
          <span className="caption">{t.unitN(unit.index)} / {unitCount}</span>
        </Ring>
      </section>

      {/* Once, after the first lesson: may we collect usage statistics? (off until yes) */}
      {isSyncConfigured() && db.profile.settings.shareStats === undefined && !db.profile.seen?.statsAsk && db.sessions.length > 0 && (
        <section className="card-soft stack fade-in" style={{ gap: 8, marginBottom: 12 }} role="note">
          <b className="label">{t.statsAskTitle}</b>
          <span className="caption">{t.statsAskBody}</span>
          <div className="row" style={{ gap: 8 }}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSettings({ shareStats: true });
                markSeen("statsAsk");
              }}
            >
              {t.statsYes}
            </button>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setSettings({ shareStats: false });
                markSeen("statsAsk");
              }}
            >
              {t.statsNo}
            </button>
          </div>
        </section>
      )}
      {card && <section style={{ marginBottom: 12 }} className="fade-in">{card}</section>}

      <div className="bottom-bar">
        <div className="row" style={{ gap: 10 }}>
          <button className={`btn ${done ? "btn-secondary" : "btn-primary"}`} style={{ flex: 1 }} onClick={() => start("auto")}>
            {done ? t.practiseMore : practicedToday ? t.continue5(sessionMin) : t.start5(sessionMin)}
          </button>
          <button className="btn btn-secondary" style={{ width: 56, padding: 0, flex: "none" }} aria-label={t.moreOptions} onClick={() => setMenu(true)}>
            <Icon name="more" />
          </button>
        </div>
      </div>

      <Sheet open={menu} onClose={() => setMenu(false)} label={t.moreOptions}>
        <div className="group">
          {[
            { k: "review", label: t.reviewOnly, icon: "refresh", off: dueNow === 0, sub: t.nothingToReview },
            { k: "new", label: t.newOnly, icon: "plus", off: complete, sub: t.noNewWords },
            { k: "speed", label: t.speedRound, icon: "bolt", off: learned < 4, sub: t.nothingToReview },
          ].map((o) => (
            <button key={o.k} className="cell" onClick={() => start(o.k)} disabled={o.off} style={{ opacity: o.off ? 0.5 : 1 }}>
              <Icon name={o.icon} size={20} className="accent" />
              <span className="grow">
                {o.label}
                {o.off && <div className="cell-sub">{o.sub}</div>}
              </span>
              <Icon name="chevron" size={18} className="muted" />
            </button>
          ))}
        </div>
      </Sheet>

      <Toast text={toast} onDone={() => setToast(null)} />
    </main>
  );
}

function Banner({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="card-soft row" style={{ alignItems: "flex-start" }}>
      <span className="accent" style={{ marginTop: 2 }}><Icon name={icon} size={22} /></span>
      <div>
        <div className="label" style={{ fontWeight: 650 }}>{title}</div>
        <div className="caption" style={{ color: "var(--text)" }}>{sub}</div>
      </div>
    </div>
  );
}
