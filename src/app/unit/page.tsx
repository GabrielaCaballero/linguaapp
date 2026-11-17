"use client";
// /unit?id=it-u04 — a unit's overview, any time, from the Path.
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDB } from "@/lib/store";
import { units } from "@/lib/content";
import { lessonHref } from "@/lib/nav";
import { markSeen } from "@/lib/actions";
import { hasVoice, voicesReady } from "@/lib/speech";
import { BackHeader, Loading, useCourseT } from "@/components/ui";
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
  const t = useCourseT(db);
  const router = useRouter();
  const pathname = usePathname();
  const [voices, setVoices] = useState(false);
  useEffect(() => {
    voicesReady().then(() => setVoices(true));
  }, []);
  const id = sp.get("id") ?? "";
  const lang = id.startsWith("de-") ? "de" : "it";
  const unit = units(lang).find((u) => u.id === id);
  // An unknown unit goes to Path — but only while this page is the one on screen. Next keeps
  // visited pages alive in the background, where the URL has no ?id=; redirecting from there
  // looped forever (QA 2026-11-16). And never during render.
  const onScreen = pathname === "/unit";
  useEffect(() => {
    if (onScreen && db && !unit) router.replace("/path");
  }, [onScreen, db, unit, router]);
  if (!onScreen) return null;
  if (!db || !unit) return <Loading />;
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
