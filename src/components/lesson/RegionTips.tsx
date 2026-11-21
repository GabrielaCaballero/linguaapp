"use client";

import type { BaseLang, Item } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { per } from "@/lib/content";
import { getDB } from "@/lib/store";

/**
 * "CH · In Switzerland: Grüezi" — the Swiss forms of a German word or phrase (content `variants`
 * with region "CH"). Swiss Standard German words (Velo, Spital) are also accepted as answers;
 * dialect ones (Hoi, Znüni) are tips only. Off in Settings → "Swiss tips".
 */
export function RegionTips({ item, base, t }: { item: Item; base: BaseLang; t: Dict }) {
  const ch = (item.variants ?? []).filter((v) => v.region === "CH");
  if (!ch.length || getDB().profile.settings.regionTips === false) return null;
  return (
    <div className="region-tip">
      <span className="ch-badge" aria-hidden="true">CH</span>
      <span>
        {t.inSwitzerland}{" "}
        {ch.map((v, k) => (
          <span key={v.text}>
            {k > 0 && " · "}
            <b lang="de-CH">{v.text}</b>
            {v.dialect && <span className="muted"> ({t.dialect})</span>}
          </span>
        ))}
        {ch.map((v) => per(v.note, base)).filter(Boolean).length > 0 && (
          <span className="muted"> — {ch.map((v) => per(v.note, base)).filter(Boolean).join(" ")}</span>
        )}
      </span>
    </div>
  );
}
