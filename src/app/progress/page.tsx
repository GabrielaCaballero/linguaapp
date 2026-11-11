"use client";

import { useState } from "react";
import { LangSwitch, Page } from "@/components/Shell";
import { StrandBar, STRANDS } from "@/components/Strands";
import { itemsFor, LANG_LABEL } from "@/content";
import { daysBetween } from "@/lib/dates";
import { t, uiFor } from "@/lib/i18n";
import { milestones } from "@/lib/milestones";
import { strandShare } from "@/lib/session";
import { isKnown, isSolid } from "@/lib/srs";
import type { DB } from "@/lib/types";

function Progress({ db }: { db: DB }) {
  const lang = db.settings.lang;
  const tx = t(lang);
  const [now] = useState(() => Date.now());
  const items = itemsFor(lang, db);
  const cards = items.map((i) => db.cards[i.id]);
  const seen = cards.filter(Boolean).length;
  const known = cards.filter(isKnown).length;
  const solid = cards.filter(isSolid).length;

  const graded = db.reviews.filter((r) => r.lang === lang && r.confidence);
  const acc = graded.length ? Math.round((graded.filter((r) => r.correct).length / graded.length) * 100) : null;
  const byConf = ([3, 2, 1] as const).map((c) => {
    const rs = graded.filter((r) => r.confidence === c);
    return { c, n: rs.length, pct: rs.length ? Math.round((rs.filter((r) => r.correct).length / rs.length) * 100) : null };
  });
  const sure = byConf[0];
  const minutes = Math.round(db.sessions.filter((s) => s.lang === lang).reduce((n, s) => n + s.seconds, 0) / 60);
  const ms = milestones(db.settings.startDate, uiFor(lang)).filter(
    (m) => (m.lang === lang || m.lang === "both") && m.end.getTime() > now,
  );

  return (
    <>
      <div className="top">
        <div className="brand">{tx.progressTitle}</div>
        <LangSwitch lang={lang} compact />
      </div>

      <div className="stats">
        <div className="stat">
          <b>{known}</b>
          <span>{tx.knownOf(items.length)}</span>
        </div>
        <div className="stat">
          <b>{seen - known}</b>
          <span>{tx.stillLearning}</span>
        </div>
        <div className="stat">
          <b>{minutes}</b>
          <span>{tx.minutesTotal}</span>
        </div>
      </div>
      <div className="meter ok" style={{ marginTop: 12 }}>
        <i style={{ width: `${(known / Math.max(1, items.length)) * 100}%` }} />
      </div>
      <p className="small muted" style={{ marginTop: 6 }}>
        {tx.knownExplain(solid)}
      </p>

      <div className="section-title">{tx.accVsConf}</div>
      <div className="card">
        {acc === null ? (
          <p>{tx.accEmpty}</p>
        ) : (
          <>
            <p style={{ marginBottom: 14 }}>{tx.accOverall(acc)}</p>
            {byConf.map(({ c, n, pct }) => (
              <div key={c} style={{ marginBottom: 10 }}>
                <div className="row between small">
                  <span>{tx.confRow[c]}</span>
                  <span className="muted">{pct === null ? tx.noAnswers : tx.pctRight(pct, n)}</span>
                </div>
                <div className="meter">
                  <i style={{ width: `${pct ?? 0}%` }} />
                </div>
              </div>
            ))}
            {sure.pct !== null && sure.n >= 5 && (
              <p className="small" style={{ marginTop: 8 }}>
                {sure.pct >= 90 ? tx.sureGood : tx.sureBad}
              </p>
            )}
          </>
        )}
      </div>

      <div className="section-title">{tx.weekStrands}</div>
      <div className="card">
        <StrandBar counts={strandShare(db, lang, now)} lang={lang} />
        <div className="small muted" style={{ marginTop: 10, lineHeight: 1.5 }}>
          {STRANDS.map((k) => (
            <div key={k}>
              <b>{tx.strands[k].label}</b>: {tx.strands[k].what}
            </div>
          ))}
          <div style={{ marginTop: 6 }}>{tx.strandsGoal}</div>
        </div>
      </div>

      <div className="section-title">
        {tx.daysToMilestones} · {LANG_LABEL[lang]}
      </div>
      <div className="list">
        {ms.map((m) => (
          <div key={m.id}>
            <span>{m.title}</span>
            <span className="countdown">{tx.d(daysBetween(new Date(now), m.end))}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProgressPage() {
  return <Page>{(db) => <Progress db={db} />}</Page>;
}
