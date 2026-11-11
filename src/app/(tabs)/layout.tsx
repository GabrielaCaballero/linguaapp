import { TabShell } from "@/components/TabShell";

export default function TabsLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      {children}
      <TabShell />
    </>
  );
}
