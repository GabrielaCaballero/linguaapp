"use client";

import { useState } from "react";
import { useDB } from "@/lib/store";
import { gl, itemById } from "@/lib/content";
import { addCustomWord, removeCustomWord } from "@/lib/actions";
import { courseLangs } from "@/lib/stats";
import { hasVoice } from "@/lib/speech";
import { BackHeader, Loading, Toast, useT } from "@/components/ui";
import { Speaker } from "@/components/lesson/Exercises";
import { Icon } from "@/components/icons";

export default function WordsPage() {
  const db = useDB();
  const t = useT(db);
  const [q, setQ] = useState("");
  const [target, setTarget] = useState("");
  const [meaning, setMeaning] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  if (!db) return <Loading />;
  const langs = courseLangs(db);
  const lang = langs.includes(db.profile.activeLang) ? db.profile.activeLang : langs[0];
  if (!lang) return <Loading />;
  const base = db.profile.courses[lang]!.explainIn;
  const voice = hasVoice(lang);
  const words = Object.values(db.cards)
    .filter((c) => c.lang === lang)
    .map((c) => ({ c, i: itemById(db, c.id) }))
    .filter((x) => x.i)
    .filter((x) => !q || x.i!.target.toLowerCase().includes(q.toLowerCase()) || gl(x.i!.gloss, base).toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => b.c.introducedAt - a.c.introducedAt);
  const strength = (s: number, state: number) => (state === 0 || s < 1 ? t.wNew : s < 21 ? t.wLearning : t.wStrong);

  return (
    <main className="screen">
      <BackHeader title={t.wordsTitle} backLabel={t.back} href="/me" />
      <section className="card stack" style={{ marginTop: 8 }}>
        <div className="h2" style={{ fontSize: "1.0625rem" }}>{t.addWords}</div>
        <div className="caption">{t.addWordsSub}</div>
        <input className="input" placeholder={t.wordTarget(t.langName[lang])} value={target} onChange={(e) => setTarget(e.target.value)} lang={lang} autoCapitalize="off" autoCorrect="off" spellCheck={false} aria-label={t.wordTarget(t.langName[lang])} />
        <input className="input" placeholder={t.wordMeaning} value={meaning} onChange={(e) => setMeaning(e.target.value)} aria-label={t.wordMeaning} />
        <button className="btn btn-primary" disabled={!target.trim() || !meaning.trim()} onClick={() => { addCustomWord(lang, target, meaning); setTarget(""); setMeaning(""); setToast(t.added); }}>
          <Icon name="plus" size={20} /> {t.addWord}
        </button>
      </section>
      <label className="row" style={{ marginTop: 20, position: "relative" }}>
        <span style={{ position: "absolute", left: 14, color: "var(--text-2)" }}><Icon name="search" size={18} /></span>
        <input className="input" style={{ paddingLeft: 40, minHeight: 48 }} placeholder={t.search} value={q} onChange={(e) => setQ(e.target.value)} aria-label={t.search} />
      </label>
      <div className="group" style={{ marginTop: 12 }}>
        {words.length === 0 && <div className="cell muted">{t.emptyWords}</div>}
        {words.map(({ c, i }) => (
          <div className="cell" key={c.id}>
            <span className="grow">
              <span lang={lang} className="display" style={{ fontSize: "1.0625rem", fontWeight: 600 }}>{i!.target}</span>
              <div className="cell-sub">{gl(i!.gloss, base)}</div>
            </span>
            <span className="pill">{strength(c.stability, c.state)}</span>
            {voice && <Speaker text={i!.spoken} lang={lang} label={t.listen} />}
            {i!.unit === "custom" && (
              <button className="icon-btn" aria-label={t.deleteWord} onClick={() => removeCustomWord(c.id)}><Icon name="trash" size={18} /></button>
            )}
          </div>
        ))}
      </div>
      {db.custom.filter((c) => c.lang === lang && !db.cards[c.id]).length > 0 && (
        <p className="caption" style={{ marginTop: 12 }}>
          + {db.custom.filter((c) => c.lang === lang && !db.cards[c.id]).map((c) => c.target).join(", ")}
        </p>
      )}
      <Toast text={toast} onDone={() => setToast(null)} />
    </main>
  );
}
