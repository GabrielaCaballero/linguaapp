"use client";

import Link from "next/link";
import { useState } from "react";
import { Page, SpeakButton } from "@/components/Shell";
import { t } from "@/lib/i18n";
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
  const bridge = lang === "de" ? "English" : "español";
  const tx = t(lang);

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
    setToast(tx.added);
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
        <Link href="/more" className="icon-btn" aria-label={tx.back} style={{ textDecoration: "none" }}>
          ‹
        </Link>
        <div className="seg" role="group" aria-label={tx.language}>
          <button aria-pressed={lang === "de"} onClick={() => setLang("de")}>
            🇩🇪 Deutsch
          </button>
          <button aria-pressed={lang === "it"} onClick={() => setLang("it")}>
            🇮🇹 Italiano
          </button>
        </div>
      </div>
      <h1 className="h1">{tx.addH1}</h1>
      <p className="sub">{tx.addSub}</p>

      <div className="field">
        <label htmlFor="a">{lang === "de" ? "German" : "Italiano"}</label>
        <input id="a" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder={lang === "de" ? "z.B. die Wohnung" : "es. la casa"} autoCapitalize="off" />
      </div>
      <div className="field">
        <label htmlFor="p">{tx.meaning(bridge)}</label>
        <input id="p" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder={lang === "de" ? "e.g. the apartment" : "ej. la casa"} />
      </div>
      <div className="field">
        <label htmlFor="n">{tx.noteOptional}</label>
        <input id="n" value={note} onChange={(e) => setNote(e.target.value)} placeholder={tx.notePlaceholder} />
      </div>
      <button className="btn" onClick={add} disabled={!answer.trim() || !prompt.trim()}>
        {tx.addCard}
      </button>

      <div className="section-title">{tx.myCards(mine.length)}</div>
      {mine.length === 0 ? (
        <p className="small muted">{tx.noCards}</p>
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
              <button className="link" onClick={() => remove(i.id)} aria-label={tx.deleteCard(i.answer)}>
                {tx.del}
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
