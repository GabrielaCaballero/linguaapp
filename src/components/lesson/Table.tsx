"use client";
// Table exercises (docs/team/51 §1): fill in a whole conjugation or declension slice.
// Stages: study (first meeting) → type the endings (stem given) → type every form.
import { useEffect, useRef, useState } from "react";
import type { BaseLang, Item, ParadigmCell, TargetLang } from "@/content/schema";
import type { Verdict } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import { check } from "@/lib/check";
import { gl } from "@/lib/content";
import type { CellResult, ExProps } from "./Exercises";

const ACCENTS: Record<TargetLang, string[]> = { it: ["à", "è", "é", "ì", "ò", "ù"], de: ["ä", "ö", "ü", "ß"] };

/** Longest common prefix of all forms ("komm" for kommen), used for the endings stage. */
export function stemOf(cells: ParadigmCell[]): string {
  if (!cells.length) return "";
  let p = cells[0].answer;
  for (const c of cells) while (p && !c.answer.startsWith(p)) p = p.slice(0, -1);
  return p.length >= 2 ? p : "";
}

const fold = (s: string) => s.trim().toLowerCase().replace(/[’`]/g, "'");

/** Check every cell; partial credit sets the verdict (all right → correct, ≥ 80% → almost). */
export function gradeTable(item: Item, typed: string[], base: BaseLang, lex: ExProps["lex"]): { verdict: Verdict; score: number; cells: CellResult[] } {
  const cells = item.paradigm?.cells ?? [];
  const results: CellResult[] = cells.map((c, k) => {
    const text = typed[k] ?? "";
    const cellItem: Item = { ...item, type: "word", pos: "other", target: c.answer, spoken: c.answer, accept: (c.accept ?? []).map((a) => ({ text: a })), errors: undefined, paradigm: undefined };
    const r = text.trim() ? check(text, cellItem, { lexicon: lex, base }) : { verdict: "wrong" as const };
    const out: CellResult = { label: c.label, expected: c.answer, text, verdict: r.verdict };
    if (r.verdict === "wrong" && text.trim()) {
      const other = cells.find((o) => fold(o.answer) === fold(text) && fold(o.answer) !== fold(c.answer));
      if (other) out.otherCell = other.label;
    }
    return out;
  });
  const score = results.reduce((a, r) => a + (r.verdict === "correct" ? 1 : r.verdict === "almost" ? 0.5 : 0), 0) / Math.max(1, results.length);
  const verdict: Verdict = score >= 0.999 ? "correct" : score >= 0.8 ? "almost" : "wrong";
  return { verdict, score, cells: results };
}

export function TableExercise(p: ExProps & { stage: "endings" | "full" }) {
  const { item, base, t, locked, lex, stage } = p;
  const cells = item.paradigm?.cells ?? [];
  const stem = stage === "endings" ? stemOf(cells) : "";
  const [vals, setVals] = useState<string[]>(() => cells.map(() => ""));
  const [focus, setFocus] = useState(0);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const [result, setResult] = useState<CellResult[] | null>(null);

  useEffect(() => {
    const id = setTimeout(() => refs.current[0]?.focus(), 200);
    return () => clearTimeout(id);
  }, []);

  const submit = () => {
    if (locked || vals.every((v) => !v.trim())) return;
    const r = gradeTable(item, vals.map((v) => (stem ? stem + v.trim() : v)), base, lex);
    setResult(r.cells);
    p.onSubmit({ verdict: r.verdict, cells: r.cells });
  };
  const insert = (ch: string) => {
    const el = refs.current[focus];
    const cur = vals[focus] ?? "";
    const s = el?.selectionStart ?? cur.length;
    const e = el?.selectionEnd ?? cur.length;
    setVals((v) => v.map((x, k) => (k === focus ? cur.slice(0, s) + ch + cur.slice(e) : x)));
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(s + ch.length, s + ch.length);
    });
  };

  return (
    <>
      <div className="prompt">
        <div className="prompt-eyebrow">{stem ? t.typeEndings : t.fillTable}</div>
        <div className="title" lang={item.lang}>{item.target}</div>
        {item.paradigm && <div className="caption">{gl(item.paradigm.caption, base)}</div>}
      </div>
      <div className="answer-area">
        <div className="ptable" role="group" aria-label={t.fillTable}>
          {cells.map((c, k) => {
            const r = result?.[k];
            const cls = r ? (r.verdict === "correct" ? " is-ok" : r.verdict === "almost" ? " is-almost" : " is-miss") : "";
            return (
              <label key={k} className={`prow${cls}`}>
                <span className="plabel" lang={item.lang}>{c.label}</span>
                <span className="pinput">
                  {stem && <span className="pstem" lang={item.lang}>{stem}</span>}
                  <input
                    ref={(el) => {
                      refs.current[k] = el;
                    }}
                    className="input"
                    value={vals[k]}
                    onFocus={() => setFocus(k)}
                    onChange={(e) => setVals((v) => v.map((x, j) => (j === k ? e.target.value : x)))}
                    onKeyDown={(e) => {
                      if (e.key !== "Enter") return;
                      e.preventDefault();
                      if (k + 1 < cells.length) refs.current[k + 1]?.focus();
                      else submit();
                    }}
                    lang={item.lang}
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="off"
                    spellCheck={false}
                    enterKeyHint={k + 1 < cells.length ? "next" : "done"}
                    readOnly={locked}
                    aria-label={c.label}
                  />
                </span>
                {r && r.verdict !== "correct" && (
                  <span className="pfix" lang={item.lang}>
                    {r.verdict === "almost" ? "~" : "✕"} {c.answer}
                  </span>
                )}
                {r && r.verdict === "correct" && <span className="pfix" aria-label={t.correct}>✓</span>}
              </label>
            );
          })}
        </div>
        {!locked && (
          <div className="accent-bar" aria-label={t.accentKeys}>
            {ACCENTS[item.lang].map((c) => (
              <button key={c} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(c)} lang={item.lang}>
                {c}
              </button>
            ))}
          </div>
        )}
        {!locked && (
          <button type="button" className="btn btn-primary" disabled={vals.every((v) => !v.trim())} onClick={submit}>
            {t.check}
          </button>
        )}
        {locked && <div style={{ height: 56 }} />}
      </div>
    </>
  );
}

/** First meeting with a table: read it whole (with the rule one tap away), then move on. */
export function TableStudy({ item, t, onRule, onDone }: { item: Item; base: BaseLang; t: Dict; onRule?: () => void; onDone: () => void }) {
  const cells = item.paradigm?.cells ?? [];
  return (
    <>
      <div className="prompt">
        <div className="prompt-eyebrow">{t.studyTable}</div>
        <div className="title" lang={item.lang}>{item.target}</div>
        <div className="caption">{t.studyTableSub}</div>
      </div>
      <div className="answer-area">
        <div className="ptable">
          {cells.map((c, k) => (
            <div key={k} className="prow">
              <span className="plabel" lang={item.lang}>{c.label}</span>
              <span className="pform display" lang={item.lang}>{c.answer}</span>
            </div>
          ))}
        </div>
        {onRule && (
          <button type="button" className="btn btn-ghost" onClick={onRule}>
            {t.seeRule}
          </button>
        )}
        <button type="button" className="btn btn-primary" onClick={onDone} autoFocus>
          {t.continue}
        </button>
      </div>
    </>
  );
}
