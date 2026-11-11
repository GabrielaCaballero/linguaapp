"use client";

import { useState } from "react";
import type { BaseLang, Cefr, TargetLang } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import type { Goal, GoalKind, GoalLevel } from "@/lib/model";
import { alternatives, CURRENT_HOURS, HOURS, planForDate, projectedDate, retentionFor } from "@/lib/goals";
import { addMonths, clock, fmtMonth, toISO, fromISO } from "@/lib/dates";
import { localeOf } from "@/lib/i18n";
import { Icon } from "./icons";
import { Ring, Sheet } from "./ui";

/** Goal step: pick a goal type, see the live commitment card (min/day + label + date), save. */
export function GoalPicker({ lang, base, appLang, current, daysPerWeek, initial, t, onSave, cta }: { lang: TargetLang; base: BaseLang; appLang: BaseLang; current: Cefr; daysPerWeek: number; initial?: Goal; t: Dict; onSave: (g: Goal) => void; cta?: string }) {
  const [now] = useState(() => Date.now());
  const locale = localeOf(appLang);
  const [kind, setKind] = useState<GoalKind>(initial?.kind ?? "level");
  const reachable = (["A1.1", "A1", "A2", "B1"] as GoalLevel[]).filter((l) => HOURS[l] > CURRENT_HOURS[current]);
  const DEFAULT: Record<Cefr, GoalLevel> = { A0: "A1", "A1.1": "A1", "A1.2": "A2", A2: "B1", B1: "B1" };
  const [target, setTarget] = useState<GoalLevel>(initial?.target && reachable.includes(initial.target) ? initial.target : reachable.includes(DEFAULT[current]) ? DEFAULT[current] : reachable[0] ?? "B1");
  const [months, setMonths] = useState<number | null>(initial?.by ? null : 6);
  const [date, setDate] = useState<string>(initial?.by ?? toISO(addMonths(new Date(now), 6)));
  const [steadyMin, setSteadyMin] = useState<number>(initial?.kind === "steady" ? initial.minutesPerDay : 10);
  const [classes, setClasses] = useState<number>(initial?.classHours ?? 0);
  const [showClasses, setShowClasses] = useState((initial?.classHours ?? 0) > 0);
  const [info, setInfo] = useState(false);

  const effTarget: GoalLevel = kind === "trip" ? "A1.1" : target;
  const by = fromISO(date).getTime();
  const planIn = { base, lang, current, target: effTarget, by, now, daysPerWeek, classHoursPerWeek: classes };
  const plan = planForDate(planIn);
  const alt = plan.label === "demanding" ? alternatives(planIn) : null;
  const stTarget = reachable[0] ?? "B1";
  const steadyDate = projectedDate({ base, lang, current, target: target ?? stTarget, minPerDay: steadyMin, now, daysPerWeek, classHoursPerWeek: classes });

  const minutes = kind === "maintain" ? 5 : kind === "steady" ? steadyMin : plan.minPerDay;
  const label = kind === "maintain" ? "relaxed" : kind === "steady" ? (steadyMin <= 15 ? "relaxed" : steadyMin <= 30 ? "steady" : steadyMin <= 45 ? "ambitious" : "demanding") : plan.label;
  const amber = (kind === "level" || kind === "trip") && plan.label === "demanding";
  const levelName: Record<GoalLevel, string> = { "A1.1": t.levelA11, A1: t.levelA1, A2: t.levelA2, B1: t.levelB1 };

  const pickMonths = (m: number) => {
    setMonths(m);
    setDate(toISO(addMonths(new Date(now), m)));
  };

  const save = () => {
    const g: Goal = {
      kind,
      target: kind === "level" ? target : kind === "trip" ? "A1.1" : kind === "steady" ? target : undefined,
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
                <span className="label">{levelName[l]}</span>
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
              {[5, 10, 20, 30].map((m) => (
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
        <p className="caption" style={{ margin: 0 }}>{t.estimate}</p>
      </div>
      <div className="bottom-bar goal-bar">
        <div className={`commit${amber ? " amber" : ""}`} aria-live="polite">
          <Ring value={Math.min(1, minutes / 60)} size={64} stroke={8}>
            <span className="caption tabular" style={{ fontWeight: 700, color: "var(--text)" }}>{minutes}</span>
          </Ring>
          <div className="grow">
            <div className="h2">{t.goalCardMin(minutes)}</div>
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
            {plan.alreadyThere && (kind === "level" || kind === "trip") && <div className="caption">{t.alreadyThere}</div>}
          </div>
        </div>
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
