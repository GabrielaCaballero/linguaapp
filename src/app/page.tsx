"use client";

import { useState } from "react";
import Link from "next/link";
import { LangSwitch, Page } from "@/components/Shell";
import { StrandBar } from "@/components/Strands";
import { LANG_LABEL } from "@/content";
import { daysBetween } from "@/lib/dates";
import { milestones } from "@/lib/milestones";
import { plan, speedPool, strandShare } from "@/lib/session";
import { setGermanLevel } from "@/lib/actions";
import type { DB } from "@/lib/types";

function Today({ db }: { db: DB }) {
  const lang = db.settings.lang;
  const [now] = useState(() => Date.now());
  const p = plan(db, lang, now);
  const target = db.settings.minutesPerLang;
  const minutesToday = Math.round(p.secondsToday / 60);
  const done = p.secondsToday >= target * 60 * 0.8;
  const nothing = p.reviews.length === 0 && p.fresh.length === 0;
  const next = milestones(db.settings.startDate)
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
          <h2>Quick question first</h2>
          <p>How much German do you have? This decides whether we start from &ldquo;Hallo&rdquo; or skip the basics.</p>
          <div className="choices" style={{ marginTop: 14 }}>
            <button className="choice" onClick={() => setGermanLevel("zero")}>Zero — starting fresh</button>
            <button className="choice" onClick={() => setGermanLevel("some")}>Some words and phrases</button>
            <button className="choice" onClick={() => setGermanLevel("classes")}>I&apos;ve had classes before</button>
          </div>
        </div>
      )}

      {p.learnedYesterday > 0 && p.sessionsToday.length === 0 && (
        <div className="card">
          <h2>🌙 Review after sleep</h2>
          <p>
            You met {p.learnedYesterday} new {p.learnedYesterday === 1 ? "item" : "items"} yesterday. Sleep has started
            consolidating them — a quick recall now locks them in.
          </p>
        </div>
      )}

      <div className="card accent">
        <div className="row between">
          <h2>Today · {LANG_LABEL[lang]}</h2>
          <span className="small muted">
            {minutesToday > 0 ? `${minutesToday} / ${target} min` : `~${target} min`}
          </span>
        </div>
        {done ? (
          <p>Done for today ✓ Anything more is optional — sleep does the rest.</p>
        ) : nothing ? (
          <p>Nothing due right now. Come back tomorrow, or add words from your class.</p>
        ) : (
          <p>One thing at a time. Answer first, then see the correction.</p>
        )}
        <div className="chips">
          <span className="chip">{p.reviews.length} to review</span>
          <span className="chip">{p.fresh.length} new · guess first</span>
          {speedPool(db, lang).length >= 4 && <span className="chip">⚡ speed round</span>}
        </div>
        {!nothing ? (
          <Link className={done ? "btn ghost" : "btn"} href="/session">
            {done ? "Practice a bit more" : p.sessionsToday.length ? "Continue" : "Start session"}
          </Link>
        ) : (
          lang === "de" && (
            <Link className="btn ghost" href="/add">
              Add words from my class
            </Link>
          )
        )}
      </div>

      {next && (
        <Link href="/milestones" className="card" style={{ display: "block", textDecoration: "none" }}>
          <div className="row between">
            <div>
              <div className="small muted">Next milestone</div>
              <div style={{ fontWeight: 600, marginTop: 2 }}>{next.title}</div>
            </div>
            <div className="countdown">{daysBetween(new Date(now), next.end)} days</div>
          </div>
        </Link>
      )}

      <div className="card">
        <div className="row between">
          <h2 style={{ fontSize: 16 }}>This week&apos;s balance</h2>
          <span className="small muted">Nation&apos;s 4 strands</span>
        </div>
        <StrandBar counts={strandShare(db, lang, now)} />
      </div>

      {lang === "de" ? (
        <Link href="/add" className="card" style={{ display: "block", textDecoration: "none" }}>
          <div className="row between">
            <div>
              <div style={{ fontWeight: 600 }}>✏️ Add from my class</div>
              <div className="small muted">Words from today&apos;s lesson become review cards.</div>
            </div>
            <span className="muted">›</span>
          </div>
        </Link>
      ) : (
        <Link href="/ties" className="card" style={{ display: "block", textDecoration: "none" }}>
          <div className="row between">
            <div>
              <div style={{ fontWeight: 600 }}>📜 Ties to Italy</div>
              <div className="small muted">{db.ties.length} entries logged</div>
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
