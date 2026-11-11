import type { Lang, Strand } from "@/lib/types";
import { t } from "@/lib/i18n";

export const STRAND_COLOR: Record<Strand, string> = {
  input: "#5b8def",
  output: "#d9734e",
  focus: "#9a7bd1",
  fluency: "#3fa36b",
};

export const STRANDS = Object.keys(STRAND_COLOR) as Strand[];

export function StrandBar({ counts, lang }: { counts: Record<Strand, number>; lang: Lang }) {
  const tx = t(lang);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return (
    <div>
      <div className="strands" role="img" aria-label={tx.strandsAria}>
        {total > 0 && STRANDS.map((k) => <i key={k} style={{ width: `${(counts[k] / total) * 100}%`, background: STRAND_COLOR[k] }} />)}
      </div>
      <div className="legend">
        {STRANDS.map((k) => (
          <span key={k}>
            <i style={{ background: STRAND_COLOR[k] }} />
            {tx.strands[k].label} {total ? Math.round((counts[k] / total) * 100) : 0}%
          </span>
        ))}
      </div>
    </div>
  );
}
