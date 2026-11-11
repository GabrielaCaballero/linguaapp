"use client";

import Link from "next/link";
import { useState } from "react";
import type { TargetLang } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { getDB, useDB } from "@/lib/store";
import { dueCount, targetFor, todayMinutes } from "@/lib/stats";
import { startOfDay, DAY } from "@/lib/dates";
import { markSeen, setSettings } from "@/lib/actions";
import { getConfig } from "@/lib/llm/provider";
import { Confetti, Ring } from "../ui";
import { Icon } from "../icons";

export interface SessionSummary {
  lang: TargetLang;
  seconds: number;
  newItems: number;
  stronger: number;
  toFix: string[];
  sureWrong: number;
  guessRight: number;
  graded: number;
  correct: number;
  typedMiss: boolean;
  welcomeBack: boolean;
}

export function Results({ t, summary, onDone }: { t: Dict; summary: SessionSummary; onDone: () => void }) {
  const db = useDB() ?? getDB();
  const [now] = useState(() => Date.now());
  const mins = todayMinutes(db, now, summary.lang);
  const target = targetFor(db, summary.lang);
  const reached = mins >= target;
  const before = Math.max(0, mins - summary.seconds / 60);
  const tomorrowEnd = startOfDay(now) + 2 * DAY;
  const tomorrow = dueCount(db, summary.lang, tomorrowEnd);
  const insight = summary.sureWrong > 0 ? t.insightSureWrong(summary.sureWrong) : summary.guessRight > 0 ? t.insightGuessRight(summary.guessRight) : summary.graded >= 5 && summary.correct / summary.graded > 0.8 ? t.insightCalibrated : t.insightSpacing;
  const offerSounds = !db.profile.settings.sounds && !db.profile.seen?.soundsOffer;
  const offerTutor = summary.typedMiss && !getConfig() && !db.profile.seen?.tutorOffer;

  return (
    <main className="screen full" style={{ textAlign: "center" }}>
      {reached && <Confetti />}
      <div className="grow" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, paddingTop: 24 }}>
        <Ring value={target ? mins / target : 1} size={188} gold={reached} label={t.todayOf(Math.round(mins), target)}>
          <span className="stat">{Math.round(mins)}</span>
          <span className="caption">/ {target} {t.min}</span>
        </Ring>
        <div>
          <h1 className="title">{reached ? `${t.goalReached} 🎉` : t.resultsTitle}</h1>
          <p className="muted" style={{ margin: "6px 0 0" }}>+{Math.max(1, Math.round(mins - before))} {t.min}</p>
        </div>
        <div className="card" style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", padding: "16px 8px" }}>
          <Stat n={summary.newItems} label={t.newWords(summary.newItems).replace(/^\+\d+\s*/, "")} plus />
          <Stat n={summary.stronger} label={t.stronger(summary.stronger).replace(/^\d+\s*/, "")} />
          <Stat n={summary.toFix.length} label={t.toFixShort(summary.toFix.length).replace(/^\d+\s*/, "")} />
        </div>
        <div className="card-soft row" style={{ textAlign: "left", width: "100%", alignItems: "flex-start" }}>
          <span className="accent" style={{ marginTop: 2 }}><Icon name="sparkle" size={20} /></span>
          <span className="label">{insight}</span>
        </div>
        <p className="caption" style={{ margin: 0 }}>{t.tomorrow(tomorrow)}</p>
        {offerSounds && (
          <div className="row" style={{ justifyContent: "center" }}>
            <span className="label muted">{t.soundsOffer}</span>
            <button className="btn btn-secondary btn-sm" onClick={() => { setSettings({ sounds: true }); markSeen("soundsOffer"); }}>{t.soundsOn}</button>
            <button className="btn btn-ghost btn-sm" onClick={() => markSeen("soundsOffer")}>{t.dismiss}</button>
          </div>
        )}
        {!offerSounds && offerTutor && (
          <Link href="/me/settings/tutor" className="caption" onClick={() => markSeen("tutorOffer")}>
            ✦ {t.sTutor}
          </Link>
        )}
      </div>
      <div className="bottom-bar">
        <button className="btn btn-primary" onClick={onDone} autoFocus>
          {t.continue}
        </button>
      </div>
    </main>
  );
}

function Stat({ n, label, plus }: { n: number; label: string; plus?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span className="stat" style={{ fontSize: 28 }}>{plus && n > 0 ? `+${n}` : n}</span>
      <span className="caption">{label}</span>
    </div>
  );
}
