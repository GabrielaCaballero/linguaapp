"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { TargetLang } from "@/content/schema";
import { useDB } from "@/lib/store";
import { priorMean } from "@/lib/placement";
import { applyPlacement } from "@/lib/actions";
import { hasVoice, voicesReady } from "@/lib/speech";
import { Loading, useT } from "@/components/ui";
import { PlacementResult, PlacementTest, type PlacementOutcome } from "@/components/Placement";

/** Retake placement for an existing course (from Settings). */
export default function PlacementPage() {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const [lang, setLang] = useState<TargetLang | null>(null);
  const [voices, setVoices] = useState(false);
  const [outcome, setOutcome] = useState<PlacementOutcome | null>(null);
  useEffect(() => {
    const l = new URLSearchParams(window.location.search).get("lang");
    voicesReady().then(() => {
      setVoices(true);
      setLang(l === "de" ? "de" : "it");
    });
  }, []);
  if (!db || !lang) return <Loading />;
  const c = db.profile.courses[lang];
  if (!c) {
    router.replace("/");
    return <Loading />;
  }
  return (
    <main className="screen full">
      {!outcome ? (
        <PlacementTest lang={lang} base={c.explainIn} mu={priorMean(c.experience ?? "bit")} t={t} canListen={voices && hasVoice(lang)} onClose={() => router.back()} onDone={setOutcome} />
      ) : (
        <PlacementResult
          lang={lang}
          base={c.explainIn}
          outcome={outcome}
          t={t}
          onChange={setOutcome}
          onContinue={() => {
            const s = outcome.state;
            applyPlacement(lang, { theta: s.theta, se: s.se, cefr: outcome.cefr, at: Date.now(), items: s.responses.length, seeded: 0 }, outcome.unit, outcome.seedIds);
            router.replace("/path");
          }}
        />
      )}
    </main>
  );
}
