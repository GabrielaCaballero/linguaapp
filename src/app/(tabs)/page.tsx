"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { TargetLang } from "@/content/schema";
import { useDB, getDB } from "@/lib/store";
import { useNow } from "@/lib/hooks";
import { Icon } from "@/components/icons";
import { Ring, Seal, Sheet, Toast, WeekDots, Loading, useT } from "@/components/ui";
import { LANG_NAME, units } from "@/lib/content";
import { dueCount, courseLangs, currentUnit, practiceDaysThisWeek, sleepReady, targetFor, toFix, todayMinutes, weeklyCheck } from "@/lib/stats";
import { lastSessionAt, AWAY_DAYS } from "@/lib/session";
import { DAY, fmtMonth, startOfWeek } from "@/lib/dates";
import { checkinChoice, dropLegacyTies, saveGoal, setActiveLang } from "@/lib/actions";
import { downloadText, exportBackup } from "@/lib/backup";
import { localeOf } from "@/lib/i18n";
import { update } from "@/lib/store";
import { lessonHref, onboardingHref } from "@/lib/nav";

export default function Today() {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const now = useNow();
  const [switcher, setSwitcher] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const needsOnboarding = !!db && (!db.profile.onboarded || (db.profile.pendingGoal?.length ?? 0) > 0);
  useEffect(() => {
    if (needsOnboarding) router.replace(onboardingHref());
  }, [needsOnboarding, router]);

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
  const greet = hour < 12 ? t.greetMorning : hour < 19 ? t.greetAfternoon : t.greetEvening;
  const other = langs.find((l) => l !== lang);
  const locale = localeOf(db.profile.appLang);
  const last = lastSessionAt(db, lang);
  const away = last !== undefined && now - last >= AWAY_DAYS * DAY && Object.values(db.cards).some((c) => c.lang === lang);

  const dueNow = dueCount(db, lang, now);
  const learned = Object.values(db.cards).filter((c) => c.lang === lang && c.state !== 0).length;
  // Close sheets before leaving: this page stays alive (cacheComponents <Activity>).
  const start = (kind: string) => {
    setMenu(false);
    setSwitcher(false);
    router.push(lessonHref(kind));
  };

  // ≤ 1 card, in priority order
  let card: React.ReactNode = null;
  const wc = weeklyCheck(db, lang, now);
  const fix = toFix(db, lang, now);
  const sleep = sleepReady(db, lang, now);
  const lastBackup = db.profile.lastBackupAt ?? db.profile.createdAt;
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
  } else if (away) {
    card = <Banner icon="sparkle" title={t.welcomeBack} sub={t.welcomeBackSub} />;
  } else if (fix.length && !practicedToday) {
    card = <Banner icon="refresh" title={t.toFix(fix.length)} sub={t.toFixSub} />;
  } else if (sleep > 0 && !practicedToday) {
    card = <Banner icon="moon" title={t.sleepHelped} sub={t.sleepHelpedSub} />;
  } else if (db.sessions.length >= 3 && now - lastBackup > 30 * DAY) {
    card = (
      <div className="card row">
        <div className="grow">
          <div className="label" style={{ fontWeight: 650 }}>{t.backupReminder}</div>
          <div className="caption">{t.backupReminderSub}</div>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={() => { downloadText(`lingua-backup-${new Date().toISOString().slice(0, 10)}.json`, exportBackup(getDB())); update((d) => ({ ...d, profile: { ...d.profile, lastBackupAt: Date.now() } })); }}>
          {t.backupNow}
        </button>
      </div>
    );
  }

  const anchorLabel = db.profile.anchor ? { morning: t.anchorMorning, commute: t.anchorCommute, lunch: t.anchorLunch, evening: t.anchorEvening }[db.profile.anchor.slot] : null;
  const unitCount = units(lang).length;

  return (
    <main className="screen">
      <header className="row between" style={{ minHeight: 48 }}>
        <button className="row" style={{ background: "none", border: 0, padding: 0, gap: 8, minHeight: 44 }} onClick={() => setSwitcher(true)} aria-label={t.switchCourse}>
          <Seal lang={lang} size={40} />
          <Icon name="down" size={18} className="muted" />
        </button>
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
        {anchorLabel && (
          <span className="pill" style={{ marginTop: 16 }}>
            <Icon name="clock" size={14} /> {t.yourTime(`${anchorLabel} · ${db.profile.anchor!.time}`)}
          </span>
        )}
      </section>

      {card && <section style={{ marginBottom: 12 }} className="fade-in">{card}</section>}

      {other && (
        <button className="card card-tap" style={{ padding: "10px 14px", marginBottom: 12 }} onClick={() => setActiveLang(other)}>
          <Seal lang={other} size={32} />
          <span className="grow label">
            {LANG_NAME[other]} · {Math.round(todayMinutes(db, now, other))}/{targetFor(db, other)} {t.min}
          </span>
          <Icon name="chevron" size={18} className="muted" />
        </button>
      )}

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
            { k: "review", label: t.reviewOnly, icon: "refresh", off: dueNow === 0 },
            { k: "new", label: t.newOnly, icon: "plus", off: false },
            { k: "speed", label: t.speedRound, icon: "bolt", off: learned < 4 },
          ].map((o) => (
            <button key={o.k} className="cell" onClick={() => start(o.k)} disabled={o.off} style={{ opacity: o.off ? 0.5 : 1 }}>
              <Icon name={o.icon} size={20} className="accent" />
              <span className="grow">
                {o.label}
                {o.off && <div className="cell-sub">{t.nothingToReview}</div>}
              </span>
              <Icon name="chevron" size={18} className="muted" />
            </button>
          ))}
        </div>
      </Sheet>

      <Sheet open={switcher} onClose={() => setSwitcher(false)} label={t.switchCourse}>
        <h2 className="h2" style={{ marginBottom: 12 }}>{t.switchCourse}</h2>
        <div className="group">
          {langs.map((l) => (
            <button key={l} className="cell" onClick={() => { setActiveLang(l); setSwitcher(false); }} aria-pressed={l === lang}>
              <Seal lang={l} size={36} />
              <span className="grow">
                <span style={{ fontWeight: 650 }}>{LANG_NAME[l]}</span>
                <div className="cell-sub">{Math.round(todayMinutes(db, now, l))}/{targetFor(db, l)} {t.min} · {t.unitN(currentUnit(db, l).index)}</div>
              </span>
              {l === lang && <Icon name="check" size={20} className="accent" />}
            </button>
          ))}
          {langs.length < 2 && (
            <button className="cell" onClick={() => { setSwitcher(false); router.push(onboardingHref()); }}>
              <span className="icon-btn" style={{ background: "var(--surface-2)" }}><Icon name="plus" size={20} /></span>
              <span className="grow" style={{ fontWeight: 600 }}>{t.addLanguage}</span>
            </button>
          )}
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
