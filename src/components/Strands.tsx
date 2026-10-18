import type { Strand } from "@/lib/types";

export const STRAND_INFO: Record<Strand, { label: string; color: string; what: string }> = {
  input: { label: "Input", color: "#5b8def", what: "listening for meaning" },
  output: { label: "Output", color: "#d9734e", what: "producing: typing, building sentences" },
  focus: { label: "Language focus", color: "#9a7bd1", what: "patterns, sounds, false friends" },
  fluency: { label: "Fluency", color: "#3fa36b", what: "fast recall of what you know" },
};

export function StrandBar({ counts }: { counts: Record<Strand, number> }) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const keys = Object.keys(STRAND_INFO) as Strand[];
  return (
    <div>
      <div className="strands" role="img" aria-label="Balance of the four strands this week">
        {total > 0 &&
          keys.map((k) => <i key={k} style={{ width: `${(counts[k] / total) * 100}%`, background: STRAND_INFO[k].color }} />)}
      </div>
      <div className="legend">
        {keys.map((k) => (
          <span key={k}>
            <i style={{ background: STRAND_INFO[k].color }} />
            {STRAND_INFO[k].label} {total ? Math.round((counts[k] / total) * 100) : 0}%
          </span>
        ))}
      </div>
    </div>
  );
}
