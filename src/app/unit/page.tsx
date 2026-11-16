"use client";
// /unit?id=it-u04 — a unit's overview, any time, from the Path.
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDB } from "@/lib/store";
import { units } from "@/lib/content";
import { lessonHref } from "@/lib/nav";
import { markSeen } from "@/lib/actions";
import { hasVoice, voicesReady } from "@/lib/speech";
import { BackHeader, Loading, useT } from "@/components/ui";
import { UnitOverview, overviewSeenKeys } from "@/components/UnitOverview";

export default function UnitPage() {
  return (
    <Suspense fallback={<Loading />}>
      <UnitRoute />
    </Suspense>
  );
}

function UnitRoute() {
  const sp = useSearchParams();
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const [voices, setVoices] = useState(false);
  useEffect(() => {
    voicesReady().then(() => setVoices(true));
  }, []);
  if (!db) return <Loading />;
  const id = sp.get("id") ?? "";
  const lang = id.startsWith("de-") ? "de" : "it";
  const unit = units(lang).find((u) => u.id === id);
  if (!unit) {
    router.replace("/path");
    return <Loading />;
  }
  const base = db.profile.courses[lang]?.explainIn ?? db.profile.appLang;
  return (
    <main className="screen">
      <BackHeader title={t.unitOverview} backLabel={t.back} href="/path" />
      <UnitOverview
        unit={unit}
        base={base}
        t={t}
        canListen={voices && hasVoice(lang) && db.profile.settings.listening}
        onStart={() => {
          for (const k of overviewSeenKeys(unit)) markSeen(k);
          router.push(lessonHref("auto", unit.index));
        }}
      />
    </main>
  );
}
