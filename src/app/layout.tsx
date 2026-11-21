import type { Metadata, Viewport } from "next";
import { Gabarito, Literata } from "next/font/google";
import { Boot } from "@/components/Boot";
import { SyncRunner } from "@/components/SyncRunner";
import { AnalyticsTag } from "@/components/AnalyticsTag";
import { NavTracker } from "@/components/ui";
import { AccountGate } from "@/components/AccountGate";
import "./globals.css";

// Type (owner, 2026-11-21: fun + formal, not the usual AI-site fonts): Gabarito, a rounded,
// friendly geometric face, for titles and the words you learn; Literata, a calm book serif made
// for long reading on screens, for text. Both have full Italian/German accents.
const body = Literata({ subsets: ["latin", "latin-ext"], axes: ["opsz"], variable: "--font-body", display: "swap" });
const display = Gabarito({ subsets: ["latin", "latin-ext"], variable: "--font-gabarito", display: "swap" });

export const metadata: Metadata = {
  title: "Linguina",
  description: "Learn a new language a few minutes a day.",
  appleWebApp: { capable: true, title: "Linguina", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

// Runs before first paint: apply theme, course accent, app language and motion setting
// from the on-device DB so there is no flash of the wrong colours.
const BOOT = `try{var d=JSON.parse(localStorage.getItem("lingua:v2")||"null");var r=document.documentElement;if(d&&d.profile){var p=d.profile,s=p.settings||{};r.dataset.lang=p.activeLang||"it";r.lang=p.appLang||"es";if(s.theme&&s.theme!=="system")r.dataset.theme=s.theme;if(s.reduceMotion==="on")r.dataset.motion="reduce";}else{var L=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language],g="en";for(var i=0;i<L.length;i++){if(/^es/i.test(L[i])){g="es";break}if(/^en/i.test(L[i]))break}r.lang=g;}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-lang="it" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        {children}
        <Boot />
        <SyncRunner />
        <NavTracker />
        <AccountGate />
        {/* Only on Vercel: elsewhere (local, tests) the analytics script doesn't exist and would 404. */}
        {process.env.VERCEL ? <AnalyticsTag /> : null}
      </body>
    </html>
  );
}
