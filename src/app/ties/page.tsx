"use client";

import Link from "next/link";
import { useState } from "react";
import { Page } from "@/components/Shell";
import { fmtDate, fromISO, todayISO } from "@/lib/dates";
import { t } from "@/lib/i18n";
import { update } from "@/lib/store";
import type { DB, TieType } from "@/lib/types";

// Ties to Italy is always in Spanish: it belongs to the Italian track.
const tx = t("it");

const TYPES: { v: TieType; icon: string }[] = [
  { v: "trip", icon: "✈️" },
  { v: "course", icon: "📚" },
  { v: "exam", icon: "📝" },
  { v: "lavello", icon: "🏛️" },
  { v: "community", icon: "🤝" },
];

function Ties({ db }: { db: DB }) {
  const [date, setDate] = useState(todayISO());
  const [type, setType] = useState<TieType>("course");
  const [note, setNote] = useState("");
  const list = [...db.ties].sort((a, b) => b.date.localeCompare(a.date));
  const italianMinutes = Math.round(db.sessions.filter((s) => s.lang === "it").reduce((n, s) => n + s.seconds, 0) / 60);
  const italianDays = new Set(db.sessions.filter((s) => s.lang === "it").map((s) => new Date(s.t).toDateString())).size;

  function add() {
    if (!note.trim()) return;
    update((d) => ({ ...d, ties: [...d.ties, { id: Date.now().toString(36), date, type, note: note.trim() }] }));
    setNote("");
  }

  return (
    <>
      <div className="top">
        <Link href="/more" className="icon-btn" aria-label={tx.back} style={{ textDecoration: "none" }}>
          ‹
        </Link>
      </div>
      <h1 className="h1">{tx.tiesH1}</h1>
      <p className="sub">
        {tx.tiesSub}
      </p>

      <div className="card accent">
        <p>
          {tx.tiesPracticeLabel} <b style={{ color: "var(--text)" }}>{tx.tiesPractice(italianDays, italianMinutes)}</b>
        </p>
      </div>

      <div className="field">
        <label htmlFor="d">{tx.date}</label>
        <input id="d" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="t">{tx.type}</label>
        <select id="t" value={type} onChange={(e) => setType(e.target.value as TieType)}>
          {TYPES.map((t) => (
            <option key={t.v} value={t.v}>
              {t.icon} {tx.tieTypes[t.v]}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="n">{tx.note}</label>
        <textarea id="n" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder={tx.tiesPlaceholder} />
      </div>
      <button className="btn" onClick={add} disabled={!note.trim()}>
        {tx.addEntry}
      </button>

      <div className="section-title">{tx.log(list.length)}</div>
      {list.length === 0 ? (
        <p className="small muted">{tx.noEntries}</p>
      ) : (
        <div className="list">
          {list.map((t) => {
            const meta = TYPES.find((x) => x.v === t.type)!;
            return (
              <div key={t.id} style={{ alignItems: "flex-start" }}>
                <div>
                  <div className="small muted">
                    {fmtDate(fromISO(t.date), tx.locale)} · {meta.icon} {tx.tieTypes[meta.v]}
                  </div>
                  <div style={{ marginTop: 2 }}>{t.note}</div>
                </div>
                <button
                  className="link"
                  onClick={() => confirm(tx.confirmDeleteEntry) && update((d) => ({ ...d, ties: d.ties.filter((x) => x.id !== t.id) }))}
                >
                  {tx.del}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function TiesPage() {
  return <Page lang="it">{(db) => <Ties db={db} />}</Page>;
}
