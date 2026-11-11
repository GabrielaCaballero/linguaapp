"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Page } from "@/components/Shell";
import { setGermanLevel } from "@/lib/actions";
import { todayISO } from "@/lib/dates";
import { t } from "@/lib/i18n";
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
  const tx = t(s.lang);
  const set = (patch: Partial<Settings>) => update((d) => ({ ...d, settings: { ...d.settings, ...patch } }));

  async function onImport(f: File) {
    try {
      const data = JSON.parse(await f.text());
      if (!confirm(tx.confirmImport)) return;
      replaceDB(data);
      setMsg(tx.restored);
    } catch (e) {
      setMsg(tx.importFail((e as Error).message));
    }
  }

  return (
    <>
      <div className="top">
        <div className="brand">{tx.moreTitle}</div>
      </div>

      <div className="list">
        <Link href="/add">
          <span>{tx.addFromClassCard}</span>
          <span className="muted">{db.custom.length} ›</span>
        </Link>
        <Link href="/ties">
          <span>{tx.tiesLog}</span>
          <span className="muted">{db.ties.length} ›</span>
        </Link>
      </div>

      <div className="section-title">{tx.settings}</div>
      <div className="field">
        <label htmlFor="min">{tx.minPerLang}</label>
        <select id="min" value={s.minutesPerLang} onChange={(e) => set({ minutesPerLang: Number(e.target.value) })}>
          {[10, 15, 20].map((m) => (
            <option key={m} value={m}>
              {m} min
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="new">{tx.newPerDay}</label>
        <select id="new" value={s.newPerDay} onChange={(e) => set({ newPerDay: Number(e.target.value) })}>
          {[5, 8, 10, 12, 15].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="lvl">{tx.germanLevel}</label>
        <select id="lvl" value={s.germanLevel} onChange={(e) => setGermanLevel(e.target.value as Settings["germanLevel"])}>
          <option value="unset">{tx.levelOpts.unset}</option>
          <option value="zero">{tx.levelOpts.zero}</option>
          <option value="some">{tx.levelOpts.some}</option>
          <option value="classes">{tx.levelOpts.classes}</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="start">{tx.planStart}</label>
        <input id="start" type="date" value={s.startDate} onChange={(e) => e.target.value && set({ startDate: e.target.value })} />
      </div>

      <div className="section-title">{tx.backup}</div>
      <p className="small muted" style={{ marginTop: -4 }}>
        {tx.backupNote}
      </p>
      <div className="row" style={{ marginTop: 10 }}>
        <button className="btn ghost" onClick={() => exportBackup(db)}>
          {tx.exportBtn}
        </button>
        <button className="btn ghost" onClick={() => file.current?.click()}>
          {tx.importBtn}
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

      <div className="section-title">{tx.about}</div>
      <p className="small muted" style={{ lineHeight: 1.5 }}>
        {tx.aboutText}
      </p>
      <button
        className="link"
        onClick={() => confirm(tx.confirmReset) && update(() => emptyDB())}
      >
        {tx.reset}
      </button>
    </>
  );
}

export default function MorePage() {
  return <Page>{(db) => <More db={db} />}</Page>;
}
