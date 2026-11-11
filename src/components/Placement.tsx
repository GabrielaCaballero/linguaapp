"use client";

import { useMemo, useState } from "react";
import type { BaseLang, Cefr, PlacementItem, TargetLang } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { course, gl, units } from "@/lib/content";
import { answer as answerP, band, beginner, nextItem, oneStep, seeds, start, startUnit, type PlacementState } from "@/lib/placement";
import { norm } from "@/lib/check";
import { Speaker } from "./lesson/Exercises";
import { Icon } from "./icons";
import { feel } from "@/lib/feel";
import { getDB } from "@/lib/store";

export interface PlacementOutcome {
  state: PlacementState;
  cefr: Cefr;
  unit: number;
  seedIds: string[];
  beyond: boolean;
}

const BANDS: Cefr[] = ["A0", "A1.1", "A1.2", "A2", "B1"];

export function outcomeFor(lang: TargetLang, s: PlacementState, cefr: Cefr): PlacementOutcome {
  const us = units(lang);
  const su = startUnit(us, cefr);
  return { state: s, cefr, unit: su.index, beyond: su.beyond, seedIds: seeds(us, cefr, course(lang).placement, s) };
}

/** The adaptive check. Neutral feedback ("Got it"), a level meter, "I don't know" and "I'm a beginner". */
export function PlacementTest({ lang, base, mu, t, canListen, onDone, onClose }: { lang: TargetLang; base: BaseLang; mu: number; t: Dict; canListen: boolean; onDone: (o: PlacementOutcome) => void; onClose?: () => void }) {
  const bank = course(lang).placement;
  const [s, setS] = useState<PlacementState>(() => start(mu));
  const [ack, setAck] = useState(false);
  const [typed, setTyped] = useState("");
  const item = useMemo(() => nextItem(bank, s), [bank, s]);
  const n = s.responses.length;

  const respond = (correct: boolean) => {
    if (!item || ack) return;
    const ns = answerP(s, item, correct, base, bank.length);
    feel("tap", getDB().profile.settings);
    setAck(true);
    setTimeout(() => {
      setAck(false);
      setTyped("");
      if (ns.done) onDone(outcomeFor(lang, ns, band(ns.theta)));
      else setS(ns);
    }, 420);
  };

  const quit = () => {
    const b = beginner(s);
    onDone(outcomeFor(lang, b, "A0"));
  };

  const pos = Math.max(0, Math.min(1, (s.theta + 3.5) / 6));
  if (!item) return null;
  return (
    <div className="lesson" style={{ padding: 0, minHeight: "auto", flex: 1 }}>
      <div className="lesson-top">
        {onClose && (
          <button className="icon-btn" aria-label={t.close} onClick={onClose}>
            <Icon name="close" />
          </button>
        )}
        <div style={{ flex: 1 }}>
          <div className="meter" aria-hidden="true">
            {BANDS.map((b, k) => <span key={b} className={k / 5 < pos ? "on" : ""} />)}
            <div className="meter-pin" style={{ left: `${pos * 100}%` }} />
          </div>
          <div className="meter-labels" aria-hidden="true">{BANDS.map((b) => <span key={b}>{b}</span>)}</div>
        </div>
        <span className="caption tabular">{n + 1}/15</span>
      </div>
      <div key={item.id} className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div className="prompt">
          <div className="prompt-eyebrow">{t.placementQ(n + 1)}</div>
          <PlacementStem item={item} canListen={canListen} t={t} />
          {item.mcq && <div className="h2">{gl(item.mcq.prompt, base)}</div>}
        </div>
        <div className="answer-area">
          {ack ? (
            <div className="teach center" role="status"><span className="h2">✓ {t.gotIt}</span></div>
          ) : item.kind === "type" ? (
            <>
              <input className="input big" value={typed} onChange={(e) => setTyped(e.target.value)} lang={lang} autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder={t.typeAnswer} aria-label={t.typeAnswer} onKeyDown={(e) => e.key === "Enter" && typed.trim() && respond(isRight(item, typed))} />
              <button className="btn btn-primary" disabled={!typed.trim()} onClick={() => respond(isRight(item, typed))}>{t.check}</button>
            </>
          ) : (
            <div className="options">
              {item.mcq!.options.map((o, k) => (
                <button key={k} className="opt" onClick={() => respond(k === item.mcq!.answer)} lang={typeof o === "string" ? lang : undefined}>
                  <span className="key" aria-hidden="true">{k + 1}</span>
                  <span>{typeof o === "string" ? o : gl(o, base)}</span>
                </button>
              ))}
            </div>
          )}
          {!ack && (
            <div className="row between">
              <button className="btn btn-ghost btn-sm" onClick={quit}>{t.imBeginner}</button>
              <button className="btn btn-secondary btn-sm" onClick={() => respond(false)}>{t.dontKnow}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function isRight(item: PlacementItem, text: string): boolean {
  const a = norm(text);
  return [item.answer ?? "", ...(item.accept ?? [])].some((x) => x && norm(x) === a);
}

function PlacementStem({ item, canListen, t }: { item: PlacementItem; canListen: boolean; t: Dict }) {
  if (item.kind === "listen" && item.spoken) {
    return (
      <div className="listen-row">
        {canListen ? (
          <>
            <Speaker text={item.spoken} lang={item.lang} big label={t.listen} auto />
            <Speaker text={item.spoken} lang={item.lang} slow label={t.listenSlow} />
          </>
        ) : (
          <span className="title" lang={item.lang}>{item.spoken}</span>
        )}
      </div>
    );
  }
  if (!item.stem) return null;
  return (
    <p className="title" lang={item.lang} style={{ margin: 0 }}>
      {item.stem}
    </p>
  );
}

/** Result: CEFR band, start unit, known words, lower/higher override. */
export function PlacementResult({ lang, base, outcome, t, onChange, onContinue }: { lang: TargetLang; base: BaseLang; outcome: PlacementOutcome; t: Dict; onChange: (o: PlacementOutcome) => void; onContinue: () => void }) {
  const u = units(lang).find((x) => x.index === outcome.unit)!;
  const known = outcome.seedIds.length;
  const shiftBand = (dir: -1 | 1) => {
    const c = oneStep(outcome.cefr, dir);
    onChange(outcomeFor(lang, outcome.state, c));
  };
  return (
    <>
      <div className="grow stack" style={{ justifyContent: "center", textAlign: "center", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 56 }} aria-hidden="true">{u?.icon}</span>
        <h1 className="title">{t.resultTitle(outcome.cefr)}</h1>
        <p className="h2" style={{ fontWeight: 500 }}>{t.resultStart(outcome.unit, `${u?.title.target ?? ""} · ${u ? gl(u.title, base) : ""}`)}</p>
        {known > 0 && <p className="muted" style={{ margin: 0 }}>{t.resultKnown(known)}</p>}
        {outcome.beyond && <p className="card-soft label" style={{ margin: 0 }}>{t.resultBeyond}</p>}
        <div className="row" style={{ justifyContent: "center" }}>
          <button className="btn btn-secondary btn-sm" onClick={() => shiftBand(-1)} disabled={outcome.cefr === "A0"}>{t.startLower}</button>
          <button className="btn btn-secondary btn-sm" onClick={() => shiftBand(1)} disabled={outcome.cefr === "B1"}>{t.startHigher}</button>
        </div>
      </div>
      <div className="bottom-bar">
        <button className="btn btn-primary" onClick={onContinue}>{t.continue}</button>
      </div>
    </>
  );
}
