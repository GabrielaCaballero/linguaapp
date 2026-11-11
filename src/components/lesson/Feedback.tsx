"use client";

import { useEffect, useRef, useState } from "react";
import type { BaseLang, Item } from "@/content/schema";
import type { Verdict } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import type { CheckResult } from "@/lib/check";
import { gl, per } from "@/lib/content";
import { Icon } from "../icons";
import { Speaker } from "./Exercises";

export interface TutorView {
  status: "checking" | "done" | "failed" | "unsure";
  text?: string;
  raised?: boolean;
  why?: string;
  whyLoading?: boolean;
}

export function Feedback({
  t,
  item,
  base,
  verdict,
  check,
  text,
  canListen,
  onContinue,
  onRight,
  canOverride,
  overridden,
  tutor,
  onWhy,
}: {
  t: Dict;
  item: Item;
  base: BaseLang;
  verdict: Verdict;
  check?: CheckResult;
  text?: string;
  canListen: boolean;
  onContinue: () => void;
  onRight: () => void;
  canOverride: boolean;
  overridden: boolean;
  tutor?: TutorView;
  onWhy?: () => void;
}) {
  const btn = useRef<HTMLButtonElement>(null);
  const [more, setMore] = useState(false);
  useEffect(() => {
    btn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onContinue();
      }
    };
    const id = setTimeout(() => window.addEventListener("keydown", onKey), 150);
    return () => {
      clearTimeout(id);
      window.removeEventListener("keydown", onKey);
    };
  }, [onContinue]);

  const v = overridden ? "correct" : verdict;
  const cls = v === "correct" ? "ok" : v === "almost" ? "almost" : "miss";
  const head = v === "correct" ? t.correct : v === "almost" ? t.almost : t.notQuite;
  const icon = v === "correct" ? "check" : v === "almost" ? "tilde" : "x";
  const reasonNote = check?.note && v === "correct" ? t.notes[check.note]?.(item.target) : check?.reason && t.notes[check.reason] ? t.notes[check.reason](check.detail?.want ?? item.target) : undefined;
  const line = overridden ? t.countedRight : check?.feedback ?? reasonNote ?? (v !== "correct" ? per(item.note, base) : undefined);
  const full = per(item.note, base);
  const btnCls = v === "correct" ? "btn-ok" : v === "almost" ? "btn-almost" : "btn-primary";

  return (
    <div className={`fb ${cls}`} role="status" aria-live="polite">
      <div className="fb-head">
        <span className="fb-icon">
          <Icon name={icon} size={20} strokeWidth={3} className="draw" />
        </span>
        <span className="grow">{head}</span>
        {canListen && <Speaker text={item.spoken} lang={item.lang} label={t.listen} auto={v === "wrong"} />}
      </div>
      <div>
        <div className="fb-word" lang={item.lang}>{item.target}</div>
        <div className="label">{gl(item.gloss, base)}</div>
        {text && v !== "correct" && (
          <div className="caption" style={{ marginTop: 4 }}>
            {t.yourAnswer}: <span lang={item.lang} style={{ textDecoration: "line-through" }}>{text}</span>
          </div>
        )}
      </div>
      {line && (
        <div className="fb-note row" style={{ alignItems: "flex-start", gap: 6 }}>
          <span className="grow">{line}</span>
          {full && full !== line && (
            <button type="button" className="icon-btn" style={{ width: 32, height: 32, color: "inherit" }} aria-label={t.more} aria-expanded={more} onClick={() => setMore((x) => !x)}>
              <Icon name="info" size={18} />
            </button>
          )}
        </div>
      )}
      {more && full && (
        <div className="fb-note muted">
          {full}
          {item.example && (
            <div style={{ marginTop: 4 }}>
              <span lang={item.lang} className="display">{item.example.target}</span> — {gl(item.example.gloss, base)}
            </div>
          )}
        </div>
      )}
      {tutor && (
        <div className="fb-tutor" aria-live="polite">
          {tutor.status === "checking" && (
            <span className="row" style={{ gap: 8 }}>
              <Icon name="sparkle" size={16} /> {t.tutorChecking} <span className="dots3"><i /><i /><i /></span>
            </span>
          )}
          {tutor.status === "unsure" && (
            <span><b>{t.tutorSays}</b> {t.tutorUnsure} {t.courseAnswer}: <span lang={item.lang}>{item.target}</span></span>
          )}
          {tutor.status === "done" && (
            <span>
              <b>{t.tutorSays}</b> {tutor.raised ? t.tutorRaised + " " : ""}
              {tutor.text}
            </span>
          )}
          {tutor.why && <div style={{ marginTop: 6 }}>{tutor.why}</div>}
          {onWhy && !tutor.why && tutor.status !== "checking" && (
            <button type="button" className="link" onClick={onWhy} disabled={tutor.whyLoading}>
              {tutor.whyLoading ? "…" : t.why}
            </button>
          )}
        </div>
      )}
      <div className="fb-actions">
        {canOverride && !overridden && v !== "correct" && (
          <button type="button" className="btn btn-secondary btn-sm" onClick={onRight}>
            {t.iWasRight}
          </button>
        )}
        <button type="button" ref={btn} className={`btn ${btnCls}`} style={{ flex: 1 }} onClick={onContinue}>
          {t.continue}
        </button>
      </div>
    </div>
  );
}
