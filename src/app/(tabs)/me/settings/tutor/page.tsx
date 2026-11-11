"use client";

import { useState, useSyncExternalStore } from "react";
import { useDB } from "@/lib/store";
import { getConfig, saveConfig, subscribeConfig, testConnection, MODEL } from "@/lib/llm/provider";
import { BackHeader, Loading, useT } from "@/components/ui";
import { Icon } from "@/components/icons";

export default function TutorPage() {
  const db = useDB();
  const t = useT(db);
  const cfg = useSyncExternalStore(subscribeConfig, getConfig, () => null);
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [busy, setBusy] = useState(false);
  if (!db) return <Loading />;
  const masked = cfg ? `${cfg.apiKey.slice(0, 7)}…${cfg.apiKey.slice(-4)}` : "";

  const test = async () => {
    const k = key.trim() || cfg?.apiKey;
    if (!k) return;
    setBusy(true);
    setStatus(null);
    const r = await testConnection(k);
    setBusy(false);
    if (r.ok) {
      saveConfig({ provider: "anthropic", apiKey: k, lastOkAt: Date.now() });
      setKey("");
      setStatus({ ok: true, message: `${t.connected} · ${r.ms} ms` });
    } else setStatus({ ok: false, message: r.message });
  };

  return (
    <main className="screen">
      <BackHeader title={t.tutorTitle} href="/me/settings" />
      <div className="stack" style={{ marginTop: 8, gap: 16 }}>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <span className="accent"><Icon name="sparkle" size={28} /></span>
          <p className="h2" style={{ fontWeight: 600, margin: 0 }}>{t.tutorIntro}</p>
        </div>
        <div className="group">
          <div className="cell">
            <span className="grow">{t.provider}</span>
            <span style={{ fontWeight: 650 }}>Claude</span>
            <span className="caption">({MODEL})</span>
          </div>
          <div className="cell"><span className="grow cell-sub">{t.providerSoon}: OpenAI · Gemini · local</span></div>
        </div>
        <label className="stack" style={{ gap: 6 }}>
          <span className="label">{t.apiKey}</span>
          <input className="input" type="password" autoComplete="off" spellCheck={false} placeholder={cfg ? masked : t.pasteKey} value={key} onChange={(e) => setKey(e.target.value)} aria-label={t.apiKey} />
        </label>
        <div className="card-soft row" style={{ alignItems: "flex-start" }}>
          <span className="accent"><Icon name="lock" size={20} /></span>
          <span className="label">{t.keyNote}</span>
        </div>
        <p className="caption" style={{ margin: 0 }}>{t.keyWarn}</p>
        <p className="label muted" style={{ margin: 0 }}>{t.tutorWhat}</p>
        {status && (
          <div role="status" className="label" style={{ color: status.ok ? "var(--ok)" : "var(--miss)", fontWeight: 600 }}>
            {status.ok ? "✓ " : "✕ "}
            {status.message}
          </div>
        )}
        {cfg && !status && <div className="label" style={{ color: "var(--ok)", fontWeight: 600 }}>✓ {t.keySaved}</div>}
      </div>
      <div className="bottom-bar">
        <button className="btn btn-primary" disabled={busy || (!key.trim() && !cfg)} onClick={test}>
          {busy ? t.testing : t.testConn}
        </button>
        {cfg && (
          <button className="btn btn-ghost" onClick={() => { saveConfig(null); setStatus(null); }}>
            {t.forgetKey}
          </button>
        )}
      </div>
    </main>
  );
}
