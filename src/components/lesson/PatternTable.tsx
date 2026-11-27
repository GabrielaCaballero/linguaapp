"use client";
// A rule card's table: every word the course knows can be tapped for its meaning, and each row can
// carry its own meaning underneath ("die Küche + der Tisch" → "la cocina + la mesa"), so a beginner
// can read it (owner, 2026-11-27).
import type { BaseLang, Glossed, TargetLang } from "@/content/schema";
import { gl } from "@/lib/content";
import { WordHints } from "./WordHints";

export function PatternTable({ table, meanings, lang, base }: { table: string[][]; meanings?: (Glossed | null)[]; lang: TargetLang; base: BaseLang }) {
  return (
    <table className="ptable" lang={lang}>
      <tbody>
        {table.map((row, k) => {
          const m = meanings?.[k];
          return (
            <tr key={k}>
              {row.map((c, j) => (
                <td key={j} className={j === 0 ? undefined : "strong"}>
                  {c ? <WordHints text={c} lang={lang} base={base} /> : null}
                  {j === row.length - 1 && m ? <span className="ptable-mean">{gl(m, base)}</span> : null}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
