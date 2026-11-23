"use client";

import { useState } from "react";
import type { BaseLang, Cefr, TargetLang } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import type { Goal, GoalKind, GoalLevel } from "@/lib/model";
import { alternatives, courseTop, CURRENT_HOURS, HOURS, LEVELS, MULT, nextLevel, planForDate, projectedDate, retentionFor } from "@/lib/goals";
import { units } from "@/lib/content";
import { addMonths, clock, fmtMonth, toISO, fromISO } from "@/lib/dates";
import { localeOf } from "@/lib/i18n";
import { Icon } from "./icons";
import { Ring, Sheet } from "./ui";

/** Goal step: pick a goal type, see the live commitment card (min/day + label + date), save. */

export function GoalPicker({ lang, base, appLang, current, daysPerWeek, initial, t, onSave, cta, otherMinutes = 0 }: { lang: TargetLang; base: BaseLang; appLang: BaseLang; current: Cefr; daysPerWeek: number; initial?: Goal; t: Dict; onSave: (g: Goal) => void; cta?: string; otherMinutes?: number }) {
  const [now] = useState(() => Date.now());
  const locale = localeOf(appLang);
  const [kind, setKind] = useState<GoalKind>(initial?.kind ?? "steady");
  // The shipped units decide how far the course goes; goals beyond it are honest about "more units coming" (GO-7).
  const COURSE_TOP = courseTop(units(lang).map((u) => u.cefr));
  const reachable = LEVELS.filter((l) => HOURS[l] > CURRENT_HOURS[current]);
  const DEFAULT: Record<Cefr, GoalLevel> = { A0: "A1", "A1.1": "A1", "A1.2": "A2", A2: "B1", B1: "B2", B2: "C1", C1: "C1" };
  const [target, setTarget] = useState<GoalLevel>(initial?.target && reachable.includes(initial.target) ? initial.target : reachable.includes(DEFAULT[current]) ? DEFAULT[current] : reachable[0] ?? "B2");
  const [months, setMonths] = useState<number | null>(initial?.by ? null : 6);
  const [date, setDate] = useState<string>(initial?.by ?? toISO(addMonths(new Date(now), 6)));
  // Sane default: a steady 15 min/day, keeping all languages together at ≤ 30 min/day.
  const [steadyMin, setSteadyMin] = useState<number>(initial?.kind === "steady" ? initial.minutesPerDay : Math.max(5, Math.min(15, Math.floor((30 - otherMinutes) / 5) * 5)));
  const [classes, setClasses] = useState<number>(initial?.classHours ?? 0);
  const [showClasses, setShowClasses] = useState((initial?.classHours ?? 0) > 0);
  const [info, setInfo] = useState(false);

  // A trip goal is "survive the trip": A1.1, or the next level up if you're already past it.
  const tripTarget: GoalLevel = HOURS["A1.1"] > CURRENT_HOURS[current] ? "A1.1" : nextLevel(current);
  const effTarget: GoalLevel = kind === "trip" ? tripTarget : target;
  const by = fromISO(date).getTime();
  const planIn = { base, lang, current, target: effTarget, by, now, daysPerWeek, classHoursPerWeek: classes };
  const plan = planForDate(planIn);
  const alt = plan.label === "demanding" ? alternatives(planIn) : null;
  const stTarget = reachable[0] ?? "B2";
  const steadyDate = projectedDate({ base, lang, current, target: target ?? stTarget, minPerDay: steadyMin, now, daysPerWeek, classHoursPerWeek: classes });

  const minutes = kind === "maintain" ? 5 : kind === "steady" ? steadyMin : plan.minPerDay;
  const over = (kind === "level" || kind === "trip") && plan.rawMinPerDay > 90;
  const shownMin = over ? "90+" : String(minutes);
  const beyondCourse = (kind === "level" || kind === "steady") && HOURS[target] > HOURS[COURSE_TOP];
  const label = kind === "maintain" ? "relaxed" : kind === "steady" ? (steadyMin <= 15 ? "relaxed" : steadyMin <= 30 ? "steady" : steadyMin <= 45 ? "ambitious" : "demanding") : plan.label;
  const amber = (kind === "level" || kind === "trip") && plan.label === "demanding";
  const levelName: Record<GoalLevel, string> = { "A1.1": t.levelA11, A1: t.levelA1, A2: t.levelA2, B1: t.levelB1, B2: t.levelB2, C1: t.levelC1 };

  const pickMonths = (m: number) => {
    setMonths(m);
    setDate(toISO(addMonths(new Date(now), m)));
  };

  const save = () => {
    const g: Goal = {
      kind,
      target: kind === "level" ? target : kind === "trip" ? tripTarget : kind === "steady" ? target : undefined,
      by: kind === "level" || kind === "trip" ? date : undefined,
      minutesPerDay: minutes,
      classHours: classes || undefined,
      retention: retentionFor(kind),
      setAt: clock(),
    };
    onSave(g);
  };

  const kinds: { k: GoalKind; label: string }[] = [
    { k: "level", label: t.goalKindLevel },
    { k: "trip", label: t.goalKindTrip },
    { k: "steady", label: t.goalKindSteady },
    { k: "maintain", label: t.goalKindMaintain },
  ];

  return (
    <>
      <div className="stack" style={{ gap: 20 }}>
        <div className="chips" role="group">
          {kinds.map((x) => (
            <button key={x.k} className="chip" aria-pressed={kind === x.k} onClick={() => setKind(x.k)}>
              {x.label}
            </button>
          ))}
        </div>

        {(kind === "level" || kind === "steady") && reachable.length > 0 && (
          <div className="stack" style={{ gap: 8 }}>
            {reachable.map((l) => (
              <button key={l} className="choice-card" style={{ minHeight: 56, padding: "10px 16px" }} aria-pressed={target === l} onClick={() => setTarget(l)}>
                <span className="pill" style={{ minWidth: 48, justifyContent: "center" }}>{l}</span>
                <span className="label grow">
                  {levelName[l]}
                  {HOURS[l] > HOURS[COURSE_TOP] && <span className="caption" style={{ display: "block" }}>{t.moreUnitsSoon}</span>}
                </span>
                <span className="check"><Icon name="check" size={16} strokeWidth={3} /></span>
              </button>
            ))}
          </div>
        )}

        {(kind === "level" || kind === "trip") && (
          <div className="stack" style={{ gap: 8 }}>
            <div className="label">{t.byWhen}</div>
            <div className="chips">
              {[3, 6, 9, 12].map((m) => (
                <button key={m} className="chip" aria-pressed={months === m} onClick={() => pickMonths(m)}>
                  {t.months(m)}
                </button>
              ))}
              <label className="chip" aria-pressed={months === null} style={{ position: "relative" }}>
                {months === null ? fmtMonth(fromISO(date), locale) : t.pickDate}
                <input type="date" value={date} min={toISO(addMonths(new Date(now), 1))} onChange={(e) => { if (e.target.value) { setDate(e.target.value); setMonths(null); } }} style={{ position: "absolute", inset: 0, opacity: 0 }} aria-label={t.pickDate} />
              </label>
            </div>
          </div>
        )}

        {kind === "steady" && (
          <div className="stack" style={{ gap: 8 }}>
            <div className="label">{t.howMuch}</div>
            <div className="chips">
              {[5, 10, 15, 20, 30].map((m) => (
                <button key={m} className="chip" aria-pressed={steadyMin === m} onClick={() => setSteadyMin(m)}>
                  {t.minutesShort(m)}
                </button>
              ))}
            </div>
          </div>
        )}

        {kind !== "maintain" && (
          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            <label className="row" style={{ gap: 8 }}>
              <input type="checkbox" checked={showClasses} onChange={(e) => { setShowClasses(e.target.checked); if (!e.target.checked) setClasses(0); else setClasses(2); }} style={{ width: 20, height: 20, accentColor: "var(--accent)" }} />
              <span className="label">{t.classesLabel}</span>
            </label>
            {showClasses && (
              <span className="row" style={{ gap: 6 }}>
                <input className="input" type="number" min={0} max={20} step={0.5} value={classes} onChange={(e) => setClasses(Math.max(0, Math.min(20, Number(e.target.value) || 0)))} style={{ width: 80, minHeight: 44 }} aria-label={t.classesUnit} />
                <span className="caption">{t.classesUnit}</span>
              </span>
            )}
          </div>
        )}

        {amber && alt && (
          <div className="stack" style={{ gap: 8 }}>
            <div className="label">{t.altTitle}</div>
            {isFinite(alt.dateAt30) && (
              <button className="btn btn-secondary btn-sm" style={{ width: "100%" }} onClick={() => { setDate(toISO(new Date(alt.dateAt30))); setMonths(null); }}>
                {t.altDate(fmtMonth(new Date(alt.dateAt30), locale))}
              </button>
            )}
            {alt.levelAt30 && (
              <button className="btn btn-secondary btn-sm" style={{ width: "100%" }} onClick={() => { setKind("level"); setTarget(alt.levelAt30!); }}>
                {t.altLevel(`${alt.levelAt30} · ${levelName[alt.levelAt30]}`)}
              </button>
            )}
          </div>
        )}
        <div className={`commit${amber ? " amber" : ""}`} aria-live="polite">
          <Ring value={Math.min(1, minutes / 60)} size={64} stroke={8}>
            <span className="caption tabular" style={{ fontWeight: 700, color: "var(--text)" }}>{shownMin}</span>
          </Ring>
          <div className="grow">
            <div className="h2">{over ? t.goalCardMinOver : t.goalCardMin(minutes)}</div>
            <div className="label muted">
              {kind === "maintain"
                ? t.goalCardMaintain
                : kind === "steady"
                  ? `${t.goalCardDays(daysPerWeek)} · ${isFinite(steadyDate) ? t.goalCardSteady(target, fmtMonth(new Date(steadyDate), locale)) : ""}`
                  : `${t.goalCardDays(daysPerWeek)} · ${t.goalCardBy(effTarget, fmtMonth(fromISO(date), locale))}`}
            </div>
            <div className="row" style={{ gap: 6, marginTop: 4 }}>
              <span className="pill">{t.feas[label]}</span>
              <button className="icon-btn" style={{ width: 32, height: 32 }} aria-label={t.assumptionsTitle} onClick={() => setInfo(true)}>
                <Icon name="info" size={18} />
              </button>
            </div>
            {plan.alreadyThere && (kind === "level" || kind === "trip") && <div className="caption">{classes > 0 ? t.alreadyThere : t.alreadyThereLevel}</div>}
            {beyondCourse && <div className="caption">{t.beyondCourse(COURSE_TOP)}</div>}
          </div>
        </div>
        <p className="caption" style={{ margin: 0 }}>{t.estimate}</p>
      </div>
      <div className="bottom-bar">
        <button className="btn btn-primary" onClick={save}>{cta ?? t.setGoal}</button>
      </div>
      <Sheet open={info} onClose={() => setInfo(false)} label={t.assumptionsTitle}>
        <h2 className="h2">{t.assumptionsTitle}</h2>
        <p className="label" style={{ lineHeight: 1.5 }}>{t.assumptions}</p>
        <button className="btn btn-secondary" onClick={() => setInfo(false)}>{t.close}</button>
      </Sheet>
    </>
  );
}

/**
 * The onboarding goal (UX review 2026-11-16): one question — how many minutes a day — answered with
 * something near and concrete ("in about 2 weeks: say hello and order a coffee"), never a level
 * 17 months away. The full picker (level, trip date, classes) stays one tap away.
 */
export function SimpleGoal({ lang, base, appLang, current, startUnit, daysPerWeek, initial, t, onSave, cta }: { lang: TargetLang; base: BaseLang; appLang: BaseLang; current: Cefr; startUnit: number; daysPerWeek: number; initial?: Goal; t: Dict; onSave: (g: Goal) => void; cta?: string }) {
  // Nothing picked at first (an edit keeps the saved pace): what you'll reach shows once you choose.
  const [minutes, setMinutes] = useState<number | null>(initial?.minutesPerDay && [5, 10, 15].includes(initial.minutesPerDay) ? initial.minutesPerDay : null);
  const [full, setFull] = useState(false);
  const us = units(lang);
  const DEFAULT: Record<Cefr, GoalLevel> = { A0: "A1", "A1.1": "A1", "A1.2": "A2", A2: "B1", B1: "B2", B2: "C1", C1: "C1" };
  if (full)
    return <GoalPicker lang={lang} base={base} appLang={appLang} current={current} daysPerWeek={daysPerWeek} initial={initial} t={t} cta={cta} onSave={onSave} />;
  const checkpoints = (m: number) => unitCheckpoints(us, startUnit, m, daysPerWeek, base, lang);
  const save = () => minutes && onSave({ kind: "steady", target: DEFAULT[current], minutesPerDay: minutes, retention: retentionFor("steady"), setAt: clock() });
  return (
    <>
      <div className="stack" style={{ gap: 12 }}>
        <p className="label muted" style={{ margin: 0 }}>{t.simpleGoalSub}</p>
        {[5, 10, 15].map((m) => {
          // What each pace gets you in about a month: different for each option, so the choice means something.
          const all = unitCheckpoints(us, startUnit, m, daysPerWeek, base, lang, 8);
          const first = all.filter((c) => !(c.days > 31)).pop() ?? all[0];
          return (
            <button key={m} className="choice-card" style={{ alignItems: "flex-start" }} aria-pressed={minutes === m} onClick={() => setMinutes(m)}>
              <span className="stack grow" style={{ gap: 2 }}>
                <b>{t.goalCardMin(m)}</b>
                {first && <span className="caption">{t.milestoneIn(first.days, first.canDo)}</span>}
              </span>
              <span className="check"><Icon name="check" size={16} strokeWidth={3} /></span>
            </button>
          );
        })}
        <div aria-live="polite">
          {minutes && (
            <div className="card-soft stack fade-in" style={{ gap: 6 }}>
              <b className="label">{t.milestonesTitle}</b>
              {checkpoints(minutes).map((ms) => (
                <span key={ms.unit} className="label">{t.milestoneIn(ms.days, ms.canDo)}</span>
              ))}
              <span className="caption">{t.milestoneNote}</span>
            </div>
          )}
        </div>
        <button type="button" className="link label" style={{ alignSelf: "flex-start", minHeight: 44 }} onClick={() => setFull(true)}>{t.moreGoalOptions}</button>
      </div>
      <div className="bottom-bar">
        <button className="btn btn-primary" disabled={!minutes} onClick={save}>{cta ?? t.setGoal}</button>
      </div>
    </>
  );
}

/** Rough, honest checkpoints: when the learner will have worked through the next units at this pace. */
export function unitCheckpoints(us: ReturnType<typeof units>, startUnit: number, minPerDay: number, daysPerWeek: number, base: BaseLang, lang: TargetLang, all?: number): { unit: number; days: number; canDo: string }[] {
  // About a minute and a half of practice per new item, counting the reviews that follow;
  // closer languages go faster (same multipliers as the level estimates).
  const perItem = 1.5 * MULT[`${base}-${lang}`];
  const out: { unit: number; days: number; canDo: string }[] = [];
  let minutes = 0;
  for (const u of us.filter((x) => x.index >= startUnit).slice(0, all ?? 3)) {
    minutes += u.items.filter((i) => i.unit === u.id).length * perItem;
    const practiceDays = Math.ceil(minutes / minPerDay);
    const days = Math.max(1, Math.round((practiceDays * 7) / Math.max(1, daysPerWeek)));
    const c = u.canDo[0];
    if (c) out.push({ unit: u.index, days, canDo: c[base] ?? c.en });
  }
  if (all) return out;
  return [out[0], out[2] ?? out[1]].filter(Boolean) as typeof out;
}
