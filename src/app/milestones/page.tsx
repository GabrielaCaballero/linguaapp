"use client";

import { LangSwitch, Page } from "@/components/Shell";
import { itemsFor } from "@/content";
import { daysBetween, fmtDate, fromISO } from "@/lib/dates";
import { t, uiFor } from "@/lib/i18n";
import { milestones, type Milestone } from "@/lib/milestones";
import { isKnown } from "@/lib/srs";
import type { DB } from "@/lib/types";

function Row({ m, db, now }: { m: Milestone; db: DB; now: Date }) {
  const tx = t(db.settings.lang);
  const state = now > m.end ? "past" : now >= m.start ? "now" : "next";
  const days = daysBetween(now, m.end);
  const lang = m.lang === "both" ? db.settings.lang : m.lang;
  const modItems = m.module ? itemsFor(lang, db).filter((i) => i.module === m.module) : [];
  const known = modItems.filter((i) => isKnown(db.cards[i.id])).length;
  const fmt = (d: Date) => fmtDate(d, tx.locale);

  return (
    <div className={`card ms ${state}`} style={{ paddingLeft: 40 }}>
      <div className="row between" style={{ alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 600 }}>{m.title}</div>
          <div className="small muted" style={{ marginTop: 2 }}>
            {m.when} · {m.fixed ? fmt(m.end) : `${fmt(m.start)} – ${fmt(m.end)}`}
          </div>
        </div>
        <div className="countdown" style={{ textAlign: "right" }}>
          {state === "past" ? "✓" : tx.d(days)}
          <div className="small muted" style={{ fontWeight: 400 }}>
            {state === "now" ? tx.left : state === "next" ? tx.toGo : ""}
          </div>
        </div>
      </div>
      {m.module && (
        <>
          <div className="meter ok" style={{ marginTop: 10 }}>
            <i style={{ width: `${(known / Math.max(1, modItems.length)) * 100}%` }} />
          </div>
          <div className="small muted" style={{ marginTop: 4 }}>
            {tx.itemsKnown(known, modItems.length)}
            {m.module === "M1" && tx.starterSlice}
          </div>
        </>
      )}
      {!m.module && !m.fixed && (
        <div className="small muted" style={{ marginTop: 8 }}>
          {tx.notBuilt}
        </div>
      )}
      {m.note && (
        <div className="small" style={{ marginTop: 8 }}>
          {m.note}
        </div>
      )}
    </div>
  );
}

function Milestones({ db }: { db: DB }) {
  const lang = db.settings.lang;
  const tx = t(lang);
  const now = new Date();
  const all = milestones(db.settings.startDate, uiFor(lang));
  const list = all.filter((m) => m.lang === lang || m.lang === "both").sort((a, b) => a.end.getTime() - b.end.getTime());
  const exam = all.find((m) => m.id === "it-exam")!;
  const m4 = all.find((m) => m.id === "it-m4")!;
  const squeeze = lang === "it" && exam.end < m4.end;

  return (
    <>
      <div className="top">
        <div className="brand">{tx.milestonesTitle}</div>
        <LangSwitch lang={lang} compact />
      </div>
      <p className="sub">{tx.planStarted(fmtDate(fromISO(db.settings.startDate), tx.locale))}</p>
      {squeeze && (
        <div className="banner" style={{ display: "block", lineHeight: 1.45 }}>
          {tx.examSqueeze(fmtDate(m4.end, tx.locale))}
        </div>
      )}
      {list.map((m) => (
        <Row key={m.id} m={m} db={db} now={now} />
      ))}
    </>
  );
}

export default function MilestonesPage() {
  return <Page>{(db) => <Milestones db={db} />}</Page>;
}
