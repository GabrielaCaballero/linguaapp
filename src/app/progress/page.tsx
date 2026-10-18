"use client";

import { useState } from "react";
import { LangSwitch, Page } from "@/components/Shell";
import { STRAND_INFO, StrandBar } from "@/components/Strands";
import { itemsFor, LANG_LABEL } from "@/content";
import { daysBetween } from "@/lib/dates";
import { milestones } from "@/lib/milestones";
import { strandShare } from "@/lib/session";
import { isKnown, isSolid } from "@/lib/srs";
import type { DB } from "@/lib/types";

function Progress({ db }: { db: DB }) {
  const lang = db.settings.lang;
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
  const ms = milestones(db.settings.startDate).filter((m) => (m.lang === lang || m.lang === "both") && m.end.getTime() > now);

  return (
    <>
      <div className="top">
        <div className="brand">Progress</div>
        <LangSwitch lang={lang} compact />
      </div>

      <div className="stats">
        <div className="stat">
          <b>{known}</b>
          <span>known of {items.length}</span>
        </div>
        <div className="stat">
          <b>{seen - known}</b>
          <span>still learning</span>
        </div>
        <div className="stat">
          <b>{minutes}</b>
          <span>minutes total</span>
        </div>
      </div>
      <div className="meter ok" style={{ marginTop: 12 }}>
        <i style={{ width: `${(known / Math.max(1, items.length)) * 100}%` }} />
      </div>
      <p className="small muted" style={{ marginTop: 6 }}>
        Known = recalled correctly on 2+ separate reviews. Solid (3+ weeks interval): {solid}.
      </p>

      <div className="section-title">Accuracy vs. confidence</div>
      <div className="card">
        {acc === null ? (
          <p>After a few answers you&apos;ll see here how well your feeling of knowing matches reality.</p>
        ) : (
          <>
            <p style={{ marginBottom: 14 }}>
              Overall you recall <b style={{ color: "var(--text)" }}>{acc}%</b>. Here&apos;s how right you are at each
              confidence level:
            </p>
            {byConf.map(({ c, n, pct }) => (
              <div key={c} style={{ marginBottom: 10 }}>
                <div className="row between small">
                  <span>{c === 3 ? "💪 Sure" : c === 2 ? "🤔 Think so" : "🤷 Guessing"}</span>
                  <span className="muted">{pct === null ? "no answers yet" : `${pct}% right · ${n} answers`}</span>
                </div>
                <div className="meter">
                  <i style={{ width: `${pct ?? 0}%` }} />
                </div>
              </div>
            ))}
            {sure.pct !== null && sure.n >= 5 && (
              <p className="small" style={{ marginTop: 8 }}>
                {sure.pct >= 90
                  ? "Your “Sure” is trustworthy — well calibrated."
                  : "Your “Sure” is wrong more often than it feels. That's the fluency illusion: recognising isn't recalling. Trust the tests, not the feeling."}
              </p>
            )}
          </>
        )}
      </div>

      <div className="section-title">This week · four strands</div>
      <div className="card">
        <StrandBar counts={strandShare(db, lang, now)} />
        <div className="small muted" style={{ marginTop: 10, lineHeight: 1.5 }}>
          {Object.values(STRAND_INFO).map((s) => (
            <div key={s.label}>
              <b>{s.label}</b>: {s.what}
            </div>
          ))}
          <div style={{ marginTop: 6 }}>A good week has some of each; none should dominate.</div>
        </div>
      </div>

      <div className="section-title">Days to milestones · {LANG_LABEL[lang]}</div>
      <div className="list">
        {ms.map((m) => (
          <div key={m.id}>
            <span>{m.title}</span>
            <span className="countdown">{daysBetween(new Date(now), m.end)} d</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProgressPage() {
  return <Page>{(db) => <Progress db={db} />}</Page>;
}
