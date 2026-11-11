"use client";

import { useDB } from "@/lib/store";
import { TabBar, useT } from "./ui";

export function TabShell() {
  const db = useDB();
  const t = useT(db);
  if (!db || !db.profile.onboarded) return null;
  return <TabBar t={t} />;
}
