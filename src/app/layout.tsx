import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Boot } from "@/components/Boot";
import { SyncRunner } from "@/components/SyncRunner";
import { AnalyticsTag } from "@/components/AnalyticsTag";
import { NavTracker } from "@/components/ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
// Display face (titles, words in the language you learn): modern, warm, full Italian/German accents.
const bricolage = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-bricolage", axes: ["opsz", "wdth"], display: "swap" });

export const metadata: Metadata = {
  title: "Linguina",
  description: "Italian and German, a few minutes a day. Works offline.",
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
const BOOT = `try{var d=JSON.parse(localStorage.getItem("lingua:v2")||"null");var r=document.documentElement;if(d&&d.profile){var p=d.profile,s=p.settings||{};r.dataset.lang=p.activeLang||"it";r.lang=p.appLang||"es";if(s.theme&&s.theme!=="system")r.dataset.theme=s.theme;if(s.reduceMotion==="on")r.dataset.motion="reduce";}else{r.lang=/^en/i.test(navigator.language)?"en":"es";}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-lang="it" className={`${inter.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        {children}
        <Boot />
        <SyncRunner />
        <NavTracker />
        {/* Only on Vercel: elsewhere (local, tests) the analytics script doesn't exist and would 404. */}
        {process.env.VERCEL ? <AnalyticsTag /> : null}
      </body>
    </html>
  );
}
