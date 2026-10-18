"use client";

import { LangSwitch, Page } from "@/components/Shell";
import { itemsFor } from "@/content";
import { daysBetween, fmtDate, fromISO } from "@/lib/dates";
import { milestones, type Milestone } from "@/lib/milestones";
import { isKnown } from "@/lib/srs";
import type { DB } from "@/lib/types";

function Row({ m, db, now }: { m: Milestone; db: DB; now: Date }) {
  const state = now > m.end ? "past" : now >= m.start ? "now" : "next";
  const days = daysBetween(now, m.end);
  const lang = m.lang === "both" ? db.settings.lang : m.lang;
  const modItems = m.module ? itemsFor(lang, db).filter((i) => i.module === m.module) : [];
  const known = modItems.filter((i) => isKnown(db.cards[i.id])).length;

  return (
    <div className={`card ms ${state}`} style={{ paddingLeft: 40 }}>
      <div className="row between" style={{ alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 600 }}>{m.title}</div>
          <div className="small muted" style={{ marginTop: 2 }}>
            {m.when} · {m.fixed ? fmtDate(m.end) : `${fmtDate(m.start)} – ${fmtDate(m.end)}`}
          </div>
        </div>
        <div className="countdown" style={{ textAlign: "right" }}>
          {state === "past" ? "✓" : `${days} d`}
          <div className="small muted" style={{ fontWeight: 400 }}>
            {state === "now" ? "left" : state === "next" ? "to go" : ""}
          </div>
        </div>
      </div>
      {m.module && (
        <>
          <div className="meter ok" style={{ marginTop: 10 }}>
            <i style={{ width: `${(known / Math.max(1, modItems.length)) * 100}%` }} />
          </div>
          <div className="small muted" style={{ marginTop: 4 }}>
            {known} / {modItems.length} items known{m.module === "M1" && " · starter slice"}
          </div>
        </>
      )}
      {!m.module && !m.fixed && <div className="small muted" style={{ marginTop: 8 }}>Content not built yet in the prototype.</div>}
      {m.note && <div className="small" style={{ marginTop: 8 }}>{m.note}</div>}
    </div>
  );
}

function Milestones({ db }: { db: DB }) {
  const lang = db.settings.lang;
  const now = new Date();
  const all = milestones(db.settings.startDate);
  const list = all.filter((m) => m.lang === lang || m.lang === "both").sort((a, b) => a.end.getTime() - b.end.getTime());
  const exam = all.find((m) => m.id === "it-exam")!;
  const m4 = all.find((m) => m.id === "it-m4")!;
  const squeeze = lang === "it" && exam.end < m4.end;

  return (
    <>
      <div className="top">
        <div className="brand">Milestones</div>
        <LangSwitch lang={lang} compact />
      </div>
      <p className="sub">Plan started {fmtDate(fromISO(db.settings.startDate))}. Change it in More → Settings.</p>
      {squeeze && (
        <div className="banner" style={{ display: "block", lineHeight: 1.45 }}>
          ⚠️ The April 2027 exam falls before M4 ends ({fmtDate(m4.end)}). Either compress M2–M4 or aim for a later exam
          session.
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
