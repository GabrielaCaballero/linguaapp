"use client";

import { useState } from "react";
import Link from "next/link";
import { LangSwitch, Page } from "@/components/Shell";
import { StrandBar } from "@/components/Strands";
import { LANG_LABEL } from "@/content";
import { daysBetween } from "@/lib/dates";
import { t, uiFor } from "@/lib/i18n";
import { milestones } from "@/lib/milestones";
import { plan, speedPool, strandShare } from "@/lib/session";
import { setGermanLevel } from "@/lib/actions";
import type { DB } from "@/lib/types";

function Today({ db }: { db: DB }) {
  const lang = db.settings.lang;
  const tx = t(lang);
  const [now] = useState(() => Date.now());
  const p = plan(db, lang, now);
  const target = db.settings.minutesPerLang;
  const minutesToday = Math.round(p.secondsToday / 60);
  const done = p.secondsToday >= target * 60 * 0.8;
  const nothing = p.reviews.length === 0 && p.fresh.length === 0;
  const next = milestones(db.settings.startDate, uiFor(lang))
    .filter((m) => (m.lang === lang || m.lang === "both") && m.end.getTime() > now)
    .sort((a, b) => a.end.getTime() - b.end.getTime())[0];

  return (
    <>
      <div className="top">
        <div className="brand">Lingua</div>
        <LangSwitch lang={lang} />
      </div>

      {lang === "de" && db.settings.germanLevel === "unset" && (
        <div className="card">
          <h2>{tx.quickQuestion}</h2>
          <p>{tx.germanLevelQ}</p>
          <div className="choices" style={{ marginTop: 14 }}>
            <button className="choice" onClick={() => setGermanLevel("zero")}>{tx.levelZero}</button>
            <button className="choice" onClick={() => setGermanLevel("some")}>{tx.levelSome}</button>
            <button className="choice" onClick={() => setGermanLevel("classes")}>{tx.levelClasses}</button>
          </div>
        </div>
      )}

      {p.learnedYesterday > 0 && p.sessionsToday.length === 0 && (
        <div className="card">
          <h2>{tx.reviewAfterSleep}</h2>
          <p>{tx.learnedYesterday(p.learnedYesterday)}</p>
        </div>
      )}

      <div className="card accent">
        <div className="row between">
          <h2>
            {tx.today} · {LANG_LABEL[lang]}
          </h2>
          <span className="small muted">
            {minutesToday > 0 ? `${minutesToday} / ${target} min` : `~${target} min`}
          </span>
        </div>
        <p>{done ? tx.doneToday : nothing ? tx.nothingDue : tx.oneThing}</p>
        <div className="chips">
          <span className="chip">{tx.toReview(p.reviews.length)}</span>
          <span className="chip">{tx.newGuess(p.fresh.length)}</span>
          {speedPool(db, lang).length >= 4 && <span className="chip">{tx.speedChip}</span>}
        </div>
        {!nothing ? (
          <Link className={done ? "btn ghost" : "btn"} href="/session">
            {done ? tx.practiceMore : p.sessionsToday.length ? tx.continue : tx.start}
          </Link>
        ) : (
          lang === "de" && (
            <Link className="btn ghost" href="/add">
              {tx.addFromClass}
            </Link>
          )
        )}
      </div>

      {next && (
        <Link href="/milestones" className="card" style={{ display: "block", textDecoration: "none" }}>
          <div className="row between">
            <div>
              <div className="small muted">{tx.nextMilestone}</div>
              <div style={{ fontWeight: 600, marginTop: 2 }}>{next.title}</div>
            </div>
            <div className="countdown">{tx.days(daysBetween(new Date(now), next.end))}</div>
          </div>
        </Link>
      )}

      <div className="card">
        <div className="row between">
          <h2 style={{ fontSize: 16 }}>{tx.weekBalance}</h2>
          <span className="small muted">{tx.fourStrands}</span>
        </div>
        <StrandBar counts={strandShare(db, lang, now)} lang={lang} />
      </div>

      {lang === "de" ? (
        <Link href="/add" className="card" style={{ display: "block", textDecoration: "none" }}>
          <div className="row between">
            <div>
              <div style={{ fontWeight: 600 }}>{tx.addFromClassCard}</div>
              <div className="small muted">{tx.addFromClassSub}</div>
            </div>
            <span className="muted">›</span>
          </div>
        </Link>
      ) : (
        <Link href="/ties" className="card" style={{ display: "block", textDecoration: "none" }}>
          <div className="row between">
            <div>
              <div style={{ fontWeight: 600 }}>{tx.tiesTitle}</div>
              <div className="small muted">{tx.tiesCount(db.ties.length)}</div>
            </div>
            <span className="muted">›</span>
          </div>
        </Link>
      )}
    </>
  );
}

export default function Home() {
  return <Page>{(db) => <Today db={db} />}</Page>;
}
