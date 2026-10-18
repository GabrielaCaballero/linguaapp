"use client";

import Link from "next/link";
import { useState } from "react";
import { Page, SpeakButton } from "@/components/Shell";
import { newCard } from "@/lib/srs";
import { update } from "@/lib/store";
import type { DB, Item, Lang } from "@/lib/types";

function AddFromClass({ db }: { db: DB }) {
  const [lang, setLang] = useState<Lang>(db.settings.lang === "it" ? "it" : "de");
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState("");
  const [note, setNote] = useState("");
  const [toast, setToast] = useState("");
  const mine = db.custom.filter((i) => i.lang === lang).sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
  const bridge = lang === "de" ? "English" : "Español";

  function add() {
    if (!answer.trim() || !prompt.trim()) return;
    const now = Date.now();
    const item: Item = {
      id: `${lang}-class-${now.toString(36)}`,
      lang,
      module: "class",
      kind: answer.trim().split(/\s+/).length >= 3 ? "phrase" : "word",
      prompt: prompt.trim(),
      answer: answer.trim(),
      note: note.trim() || undefined,
      createdAt: now,
    };
    // You already met it in class, so it goes straight into review (no "guess first").
    update((d) => ({ ...d, custom: [...d.custom, item], cards: { ...d.cards, [item.id]: newCard(item.id, now) } }));
    setAnswer("");
    setPrompt("");
    setNote("");
    setToast("Added — it'll show up in today's session");
    setTimeout(() => setToast(""), 2200);
  }

  function remove(id: string) {
    update((d) => {
      const cards = { ...d.cards };
      delete cards[id];
      return { ...d, custom: d.custom.filter((i) => i.id !== id), cards };
    });
  }

  return (
    <>
      <div className="top">
        <Link href="/more" className="icon-btn" aria-label="Back" style={{ textDecoration: "none" }}>
          ‹
        </Link>
        <div className="seg" role="group" aria-label="Language">
          <button aria-pressed={lang === "de"} onClick={() => setLang("de")}>
            🇩🇪 Deutsch
          </button>
          <button aria-pressed={lang === "it"} onClick={() => setLang("it")}>
            🇮🇹 Italiano
          </button>
        </div>
      </div>
      <h1 className="h1">Add from my class</h1>
      <p className="sub">Type what you learned today. It becomes a review card and comes back on a spaced schedule.</p>

      <div className="field">
        <label htmlFor="a">{lang === "de" ? "German" : "Italiano"}</label>
        <input id="a" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder={lang === "de" ? "z.B. die Wohnung" : "es. la casa"} autoCapitalize="off" />
      </div>
      <div className="field">
        <label htmlFor="p">Meaning ({bridge})</label>
        <input id="p" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder={lang === "de" ? "e.g. the apartment" : "ej. la casa"} />
      </div>
      <div className="field">
        <label htmlFor="n">Note (optional)</label>
        <input id="n" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Gender, plural, example sentence…" />
      </div>
      <button className="btn" onClick={add} disabled={!answer.trim() || !prompt.trim()}>
        Add card
      </button>

      <div className="section-title">My cards ({mine.length})</div>
      {mine.length === 0 ? (
        <p className="small muted">Nothing yet. Tip: add 5–10 items right after each class while it&apos;s fresh.</p>
      ) : (
        <div className="list">
          {mine.map((i) => (
            <div key={i.id}>
              <div className="row">
                <SpeakButton text={i.answer} lang={i.lang} />
                <div>
                  <div style={{ fontWeight: 600 }}>{i.answer}</div>
                  <div className="small muted">{i.prompt}</div>
                </div>
              </div>
              <button className="link" onClick={() => remove(i.id)} aria-label={`Delete ${i.answer}`}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}

export default function AddPage() {
  return <Page>{(db) => <AddFromClass db={db} />}</Page>;
}
