"use client";

import type { BaseLang, Item, Region } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { per } from "@/lib/content";
import { getDB } from "@/lib/store";

/** Regions shown as tips: Swiss German forms on the German course, European Portuguese forms on
 *  the (Brazilian) Portuguese one. */
const TIP_REGIONS: { region: Region; badge: string; tag: string; label: (t: Dict) => string }[] = [
  { region: "CH", badge: "CH", tag: "de-CH", label: (t) => t.inSwitzerland },
  { region: "PT", badge: "PT", tag: "pt-PT", label: (t) => t.inPortugal },
];

/**
 * "CH · In Switzerland: Grüezi" — the regional forms of a word or phrase (content `variants`).
 * Swiss Standard German words (Velo, Spital) and European Portuguese ones (comboio) are also
 * accepted as answers; dialect ones (Hoi, Znüni) are tips only. Off in Settings → "Regional tips".
 */
export function RegionTips({ item, base, t }: { item: Item; base: BaseLang; t: Dict }) {
  if (getDB().profile.settings.regionTips === false) return null;
  return (
    <>
      {TIP_REGIONS.map(({ region, badge, tag, label }) => {
        const vs = (item.variants ?? []).filter((v) => v.region === region);
        if (!vs.length) return null;
        const notes = vs.map((v) => per(v.note, base)).filter(Boolean);
        return (
          <div className="region-tip" key={region}>
            <span className="ch-badge" aria-hidden="true">{badge}</span>
            <span>
              {label(t)}{" "}
              {vs.map((v, k) => (
                <span key={v.text}>
                  {k > 0 && " · "}
                  <b lang={tag}>{v.text}</b>
                  {v.dialect && <span className="muted"> ({t.dialect})</span>}
                </span>
              ))}
              {notes.length > 0 && <span className="muted"> — {notes.join(" ")}</span>}
            </span>
          </div>
        );
      })}
    </>
  );
}
