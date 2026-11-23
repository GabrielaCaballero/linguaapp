"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n";
import { isApple } from "@/lib/speech";
import { markSeen } from "@/lib/actions";
import { getDB } from "@/lib/store";
import { Sheet } from "../ui";
import { track } from "@/lib/metrics";

/**
 * "Audio problems?": what to check when nothing plays. A web page can't tell that an iPhone is on
 * silent (no API, no error), so we explain instead — silent mode first on Apple devices (owner,
 * 2026-11-22: that was the cause on a tester's iPhone).
 */
export function AudioHelp({ t }: { t: Dict }) {
  const [open, setOpen] = useState(false);
  const apple = isApple();
  const steps = [...(apple ? [t.audioHelpSilent] : []), t.audioHelpVolume, t.audioHelpBluetooth, apple ? t.audioHelpVoiceApple : t.audioHelpVoiceAndroid, t.audioHelpSetting];
  return (
    <>
      <button
        type="button"
        className="link label no-audio"
        onClick={() => {
          setOpen(true);
          track("audio_help", { apple });
        }}
      >
        {t.audioHelp}
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} label={t.audioHelpTitle}>
        <div className="stack" style={{ gap: 12, paddingBottom: 8 }}>
          <h2 className="h2" style={{ margin: 0 }}>{t.audioHelpTitle}</h2>
          <ol className="audio-help">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <button type="button" className="btn btn-primary" onClick={() => setOpen(false)}>{t.understood}</button>
        </div>
      </Sheet>
    </>
  );
}

/** Once, on iPhone/iPad, the first time audio shows up in a lesson: "on silent?" */
export function SilentTip({ t }: { t: Dict }) {
  const [shown, setShown] = useState(() => isApple() && !getDB().profile.seen?.silentTip);
  if (!shown) return null;
  return (
    <div className="card-soft row label" role="note" style={{ gap: 8, alignItems: "flex-start" }}>
      <span className="grow">{t.silentTip}</span>
      <button
        type="button"
        className="btn btn-ghost btn-sm"
        onClick={() => {
          markSeen("silentTip");
          setShown(false);
        }}
      >
        {t.understood}
      </button>
    </div>
  );
}
