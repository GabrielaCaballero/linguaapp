"use client";

import Link from "next/link";
import { useState } from "react";
import { Page } from "@/components/Shell";
import { fmtDate, fromISO, todayISO } from "@/lib/dates";
import { update } from "@/lib/store";
import type { DB, TieType } from "@/lib/types";

const TYPES: { v: TieType; label: string; icon: string }[] = [
  { v: "trip", label: "Trip to Italy", icon: "✈️" },
  { v: "course", label: "Course / class", icon: "📚" },
  { v: "exam", label: "Exam", icon: "📝" },
  { v: "lavello", label: "Lavello", icon: "🏛️" },
  { v: "community", label: "Italian community", icon: "🤝" },
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
        <Link href="/more" className="icon-btn" aria-label="Back" style={{ textDecoration: "none" }}>
          ‹
        </Link>
      </div>
      <h1 className="h1">Ties to Italy</h1>
      <p className="sub">
        A private log of your connection to Italy — trips, courses, exams, Lavello, community. Keep receipts and
        certificates separately; this is your index.
      </p>

      <div className="card accent">
        <p>
          🇮🇹 Italian practice in Lingua: <b style={{ color: "var(--text)" }}>{italianDays} {italianDays === 1 ? "day" : "days"}</b>, {italianMinutes} minutes.
        </p>
      </div>

      <div className="field">
        <label htmlFor="d">Date</label>
        <input id="d" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="t">Type</label>
        <select id="t" value={type} onChange={(e) => setType(e.target.value as TieType)}>
          {TYPES.map((t) => (
            <option key={t.v} value={t.v}>
              {t.icon} {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="n">Note</label>
        <textarea id="n" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Enrolled in A2 course, Dante Alighieri Zürich" />
      </div>
      <button className="btn" onClick={add} disabled={!note.trim()}>
        Add entry
      </button>

      <div className="section-title">Log ({list.length})</div>
      {list.length === 0 ? (
        <p className="small muted">No entries yet.</p>
      ) : (
        <div className="list">
          {list.map((t) => {
            const meta = TYPES.find((x) => x.v === t.type)!;
            return (
              <div key={t.id} style={{ alignItems: "flex-start" }}>
                <div>
                  <div className="small muted">
                    {fmtDate(fromISO(t.date))} · {meta.icon} {meta.label}
                  </div>
                  <div style={{ marginTop: 2 }}>{t.note}</div>
                </div>
                <button
                  className="link"
                  onClick={() => confirm("Delete this entry?") && update((d) => ({ ...d, ties: d.ties.filter((x) => x.id !== t.id) }))}
                >
                  Delete
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
