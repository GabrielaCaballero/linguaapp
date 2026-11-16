"use client";
// Grammar explained like a textbook (content v2.1, docs/team/50): the rule, how to work the
// form out, the full table, examples and the classic mistake. Shown as a card before a new
// pattern, and one tap away from the feedback sheet.
import type { BaseLang, GrammarPoint } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { gl } from "@/lib/content";

export function GrammarCard({ point, base, t }: { point: GrammarPoint; base: BaseLang; t: Dict }) {
  return (
    <div className="stack grammar-card" style={{ gap: 14, textAlign: "left" }}>
      <div>
        <div className="prompt-eyebrow">{t.ruleTitle}</div>
        <h2 className="h2" style={{ margin: "4px 0 0" }}>{gl(point.title, base)}</h2>
      </div>
      <p style={{ margin: 0 }}>{gl(point.rule, base)}</p>
      {point.table && (
        <div className="gtable-wrap">
          <table className="gtable" lang={point.lang}>
            <thead>
              <tr>{point.table.head.map((h, k) => <th key={k} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {point.table.rows.map((r, k) => (
                <tr key={k}>
                  {r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {point.steps && point.steps.length > 0 && (
        <div>
          <div className="label" style={{ fontWeight: 600 }}>{t.howToWorkOut}</div>
          <ol style={{ margin: "4px 0 0", paddingLeft: 20 }}>
            {point.steps.map((s, k) => <li key={k} className="label">{gl(s, base)}</li>)}
          </ol>
        </div>
      )}
      <div>
        <div className="label" style={{ fontWeight: 600 }}>{t.examples}</div>
        <ul style={{ margin: "4px 0 0", paddingLeft: 20 }}>
          {point.examples.map((e, k) => (
            <li key={k} className="label">
              <span lang={point.lang} className="display">{e.target}</span> — {gl(e.gloss, base)}
            </li>
          ))}
        </ul>
      </div>
      {point.pitfalls && (
        <div className="card-soft label">
          <b>{t.watchOut}</b> {gl(point.pitfalls, base)}
        </div>
      )}
    </div>
  );
}

/** Full-screen rule card shown once, right after a new pattern is first met. */
export function RuleScreen({ point, base, t, onDone }: { point: GrammarPoint; base: BaseLang; t: Dict; onDone: () => void }) {
  return (
    <>
      <div className="grow" style={{ overflowY: "auto", paddingTop: 8 }}>
        <GrammarCard point={point} base={base} t={t} />
      </div>
      <div className="answer-area">
        <button type="button" className="btn btn-primary" onClick={onDone} autoFocus>
          {t.understood}
        </button>
      </div>
    </>
  );
}
