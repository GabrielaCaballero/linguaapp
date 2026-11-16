"use client";

import { useState, useSyncExternalStore } from "react";
import { useDB } from "@/lib/store";
import { getConfig, saveConfig, subscribeConfig, testConnection, PROVIDERS, type Provider } from "@/lib/llm/provider";
import { BackHeader, Loading, useT } from "@/components/ui";
import { Icon } from "@/components/icons";

const ORDER: Provider[] = ["gemini", "openai", "anthropic"];

export default function TutorPage() {
  const db = useDB();
  const t = useT(db);
  const cfg = useSyncExternalStore(subscribeConfig, getConfig, () => null);
  const [provider, setProvider] = useState<Provider>(() => getConfig()?.provider ?? "gemini");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [busy, setBusy] = useState(false);
  if (!db) return <Loading />;
  const p = PROVIDERS[provider];
  const sameProvider = cfg?.provider === provider;
  const masked = cfg && sameProvider ? `${cfg.apiKey.slice(0, 7)}…${cfg.apiKey.slice(-4)}` : "";

  const test = async () => {
    const k = key.trim() || (sameProvider ? cfg?.apiKey : "");
    if (!k) return;
    setBusy(true);
    setStatus(null);
    const r = await testConnection(provider, k);
    setBusy(false);
    if (r.ok) {
      saveConfig({ provider, apiKey: k, model: r.model, lastOkAt: Date.now() });
      setKey("");
      setStatus({ ok: true, message: `${t.connected} · ${p.label} · ${r.model} · ${r.ms} ms` });
    } else setStatus({ ok: false, message: t.testErr[r.code] ?? t.testErr.bad });
  };

  return (
    <main className="screen">
      <BackHeader title={t.tutorTitle} backLabel={t.back} href="/me/settings" />
      <div className="stack" style={{ marginTop: 8, gap: 16 }}>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <span className="accent"><Icon name="sparkle" size={28} /></span>
          <p className="h2" style={{ fontWeight: 600, margin: 0 }}>{t.tutorIntro}</p>
        </div>
        <div className="stack" style={{ gap: 6 }}>
          <span className="label">{t.provider}</span>
          <div className="seg" role="group" aria-label={t.provider}>
            {ORDER.map((id) => (
              <button
                key={id}
                aria-pressed={provider === id}
                onClick={() => {
                  setProvider(id);
                  setStatus(null);
                  setKey("");
                }}
              >
                {PROVIDERS[id].label}
              </button>
            ))}
          </div>
          <a className="link label" href={p.keyUrl} target="_blank" rel="noopener noreferrer">
            {t.getKey(p.label)} ↗
          </a>
        </div>
        <label className="stack" style={{ gap: 6 }}>
          <span className="label">{t.apiKey}</span>
          <input className="input" type="password" autoComplete="off" spellCheck={false} placeholder={masked || t.pasteKeyFor(p.label)} value={key} onChange={(e) => setKey(e.target.value)} aria-label={t.apiKey} />
        </label>
        <div className="cell" style={{ padding: 0 }}>
          <span className="grow label">{t.modelLabel}</span>
          <span className="caption">{sameProvider && cfg?.model ? cfg.model : t.modelAuto}</span>
        </div>
        <p className="caption" style={{ margin: 0 }}>{t.subscriptionNote}</p>
        <div className="card-soft row" style={{ alignItems: "flex-start" }}>
          <span className="accent"><Icon name="lock" size={20} /></span>
          <span className="label">{t.keyNoteFor(p.label)}</span>
        </div>
        <p className="caption" style={{ margin: 0 }}>{t.keyWarnFor(p.label)}</p>
        <p className="label muted" style={{ margin: 0 }}>{t.tutorWhat}</p>
        {status && (
          <div role="status" className="label" style={{ color: status.ok ? "var(--ok)" : "var(--miss)", fontWeight: 600 }}>
            {status.ok ? "✓ " : "✕ "}
            {status.message}
          </div>
        )}
        {cfg && !status && (
          <div className="label" style={{ color: "var(--ok)", fontWeight: 600 }}>
            ✓ {t.keySaved} · {PROVIDERS[cfg.provider].label}
          </div>
        )}
      </div>
      <div className="bottom-bar">
        <button className="btn btn-primary" disabled={busy || (!key.trim() && !(sameProvider && cfg))} onClick={test}>
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
