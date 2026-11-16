"use client";
// "Learn a bit, try it" (owner, 2026-11-16): explanation first, then one exercise on exactly that.
// The learn card shows one new thing on one screen: a word with its sound, meaning and an example;
// a grammar pattern with its one-line rule and table; or a short text to read and listen to.
// The "try" exercise follows straight after it (session.ts).
import { useEffect, useState } from "react";
import type { BaseLang, Item } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { gl, grammarPoint, per } from "@/lib/content";
import { markSeen } from "@/lib/actions";
import { GrammarCard } from "./Grammar";
import { WordHints } from "./WordHints";
import { NoAudio, Prompt, QuestionStem, Speaker, TargetWord, isCognate } from "./Exercises";

export function Learn({ item, base, t, canListen, onLearned, onDone, onNoAudio }: { item: Item; base: BaseLang; t: Dict; canListen: boolean; onLearned: () => void; onDone: () => void; onNoAudio?: () => void }) {
  const [translate, setTranslate] = useState(false);
  const point = grammarPoint(item.grammar?.[0]);
  useEffect(() => {
    onLearned();
    // Reading a pattern's learn card counts as having seen its rule: no separate rule screen later.
    if (item.type === "pattern" && point) markSeen(`g:${point.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const note = per(item.note, base);
  const cognate = isCognate(item, base);

  let eyebrow = `${t.learn} · ${t.newWord}`;
  let body: React.ReactNode;
  if (item.type === "pattern") {
    eyebrow = `${t.learn} · ${t.newPattern}`;
    body = point ? (
      <GrammarCard point={point} base={base} t={t} mode="learn" />
    ) : (
      <>
        <div className="title" lang={item.lang}>{item.target}</div>
        <QuestionStem item={item} base={base} t={t} canListen={canListen} />
        {item.example && <Example item={item} base={base} />}
      </>
    );
  } else if (item.type === "dialogue" || item.type === "listening") {
    eyebrow = `${t.learn} · ${t.newText}`;
    body = (
      <>
        {item.turns?.length ? (
          <div className="turns">
            {item.turns.map((x, k) => (
              <div key={k} className={`turn ${x.who}`}>
                <div className="row" style={{ gap: 8 }}>
                  <WordHints text={x.target} lang={item.lang} base={base} className="display" style={{ fontSize: "1.125rem" }} />
                  {canListen && <Speaker text={x.spoken ?? x.target} lang={item.lang} label={t.listen} />}
                </div>
                {translate && <div className="caption">{gl(x.gloss, base)}</div>}
              </div>
            ))}
          </div>
        ) : (
          <>
            {canListen && <QuestionStem item={item} base={base} t={t} canListen={canListen} />}
            <p className="display" style={{ fontSize: "1.125rem", margin: 0 }}><WordHints text={item.target} lang={item.lang} base={base} /></p>
            {translate && <div className="caption">{gl(item.gloss, base)}</div>}
          </>
        )}
        <button type="button" className="btn btn-ghost btn-sm" style={{ alignSelf: "flex-start" }} aria-pressed={translate} onClick={() => setTranslate((x) => !x)}>
          {translate ? t.hideTranslation : t.showTranslation}
        </button>
      </>
    );
  } else if (item.type === "sound") {
    eyebrow = `${t.learn} · ${t.newSound}`;
    body = (
      <>
        {canListen && (
          <>
            <div className="listen-row">
              <Speaker text={item.spoken} lang={item.lang} big label={t.listen} auto />
              <Speaker text={item.spoken} lang={item.lang} slow label={t.listenSlow} />
            </div>
            <NoAudio t={t} onNoAudio={onNoAudio} />
          </>
        )}
        <div className="title" lang={item.lang}>{item.target}</div>
        <div style={{ fontSize: "1.125rem" }}>{gl(item.gloss, base)}</div>
        {note && <div className="label muted">{note}</div>}
      </>
    );
  } else {
    if (cognate) eyebrow = `${t.learn} · ${t.sameAs[base]}`;
    body = (
      <>
        <TargetWord item={item} canListen={canListen} t={t} auto={canListen} />
        <div style={{ fontSize: "1.25rem" }}>{gl(item.gloss, base)}</div>
        {item.plural && <div className="caption" lang={item.lang}>{item.plural}</div>}
        {note && <div className="label muted">{note}</div>}
        {item.example && <Example item={item} base={base} />}
      </>
    );
  }

  return (
    <>
      <div className="grow learn" style={{ overflowY: "auto", paddingTop: 8 }}>
        <Prompt eyebrow={eyebrow}>
          <div className="stack" style={{ gap: 12 }}>{body}</div>
        </Prompt>
      </div>
      <div className="answer-area">
        <button type="button" className="btn btn-primary" onClick={onDone} autoFocus>
          {t.tryIt}
        </button>
      </div>
    </>
  );
}

function Example({ item, base }: { item: Item; base: BaseLang }) {
  if (!item.example) return null;
  return (
    <div className="card-soft label">
      <WordHints text={item.example.target} lang={item.lang} base={base} className="display" style={{ fontSize: "1.0625rem" }} />
      <div className="muted">{gl(item.example.gloss, base)}</div>
    </div>
  );
}
