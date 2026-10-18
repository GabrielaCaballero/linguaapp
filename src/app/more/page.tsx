"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Page } from "@/components/Shell";
import { setGermanLevel } from "@/lib/actions";
import { todayISO } from "@/lib/dates";
import { emptyDB, replaceDB, update } from "@/lib/store";
import type { DB, Settings } from "@/lib/types";

function exportBackup(db: DB) {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `lingua-backup-${todayISO()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function More({ db }: { db: DB }) {
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");
  const s = db.settings;
  const set = (patch: Partial<Settings>) => update((d) => ({ ...d, settings: { ...d.settings, ...patch } }));

  async function onImport(f: File) {
    try {
      const data = JSON.parse(await f.text());
      if (!confirm("Replace everything on this device with the backup?")) return;
      replaceDB(data);
      setMsg("Backup restored ✓");
    } catch (e) {
      setMsg(`Couldn't import: ${(e as Error).message}`);
    }
  }

  return (
    <>
      <div className="top">
        <div className="brand">More</div>
      </div>

      <div className="list">
        <Link href="/add">
          <span>✏️ Add from my class</span>
          <span className="muted">{db.custom.length} ›</span>
        </Link>
        <Link href="/ties">
          <span>📜 Ties to Italy log</span>
          <span className="muted">{db.ties.length} ›</span>
        </Link>
      </div>

      <div className="section-title">Settings</div>
      <div className="field">
        <label htmlFor="min">Minutes per language per day</label>
        <select id="min" value={s.minutesPerLang} onChange={(e) => set({ minutesPerLang: Number(e.target.value) })}>
          {[10, 15, 20].map((m) => (
            <option key={m} value={m}>
              {m} min
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="new">New items per day (per language)</label>
        <select id="new" value={s.newPerDay} onChange={(e) => set({ newPerDay: Number(e.target.value) })}>
          {[5, 8, 10, 12, 15].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="lvl">German level</label>
        <select id="lvl" value={s.germanLevel} onChange={(e) => setGermanLevel(e.target.value as Settings["germanLevel"])}>
          <option value="unset">Not set</option>
          <option value="zero">Zero</option>
          <option value="some">Some</option>
          <option value="classes">Had classes</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="start">Plan start date (milestones count from here)</label>
        <input id="start" type="date" value={s.startDate} onChange={(e) => e.target.value && set({ startDate: e.target.value })} />
      </div>

      <div className="section-title">Backup</div>
      <p className="small muted" style={{ marginTop: -4 }}>
        Everything lives on this device only. Export a backup now and then — and to move between iPhone and Android.
      </p>
      <div className="row" style={{ marginTop: 10 }}>
        <button className="btn ghost" onClick={() => exportBackup(db)}>
          Export
        </button>
        <button className="btn ghost" onClick={() => file.current?.click()}>
          Import
        </button>
      </div>
      <input
        ref={file}
        type="file"
        accept="application/json,.json"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onImport(f);
          e.target.value = "";
        }}
      />
      {msg && <p className="small" style={{ marginTop: 10 }}>{msg}</p>}

      <div className="section-title">About</div>
      <p className="small muted" style={{ lineHeight: 1.5 }}>
        Built on Dehaene&apos;s four pillars — attention (one task per screen), active engagement (answer before you see
        it), error feedback (immediate, no penalties), consolidation (spaced review, sleep) — and Nation&apos;s four
        strands.
      </p>
      <button
        className="link"
        onClick={() => confirm("Erase all progress on this device? Export a backup first.") && update(() => emptyDB())}
      >
        Reset all data
      </button>
    </>
  );
}

export default function MorePage() {
  return <Page>{(db) => <More db={db} />}</Page>;
}
