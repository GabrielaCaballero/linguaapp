"use client";

import { useDB } from "@/lib/store";
import { BackHeader } from "@/components/ui";

/** Plain-language privacy page (linked from Google's sign-in branding). Open without an account. */
const COPY = {
  es: {
    title: "Privacidad",
    back: "Volver",
    updated: "Última actualización: 20 de noviembre de 2026",
    sections: [
      ["Qué guardamos", "Tu correo (para entrar), tu progreso (cursos, nivel, palabras, respuestas y metas), los textos que escribes en «Escribir» con su corrección, y tu foto de perfil si eliges una. Si entras con Google, solo recibimos tu nombre, tu correo y tu foto de Google."],
      ["Para qué", "Solo para que la app funcione: guardar tu progreso y llevarlo a todos tus dispositivos. No vendemos tus datos, no mostramos publicidad y no te rastreamos en otros sitios."],
      ["Dónde", "Tus datos se guardan en Supabase. Cada persona solo puede ver su propia información. Los textos de «Escribir» se envían a Anthropic (Claude) para corregirlos; no se usan para entrenar modelos."],
      ["El tutor con IA", "Si conectas tu propia clave de IA, la clave queda solo en tu dispositivo y las preguntas van directo al proveedor que elegiste."],
      ["Borrar tus datos", "En Yo → Ajustes → Borrar cuenta se borran tu cuenta y todo lo guardado en el servidor."],
    ],
  },
  en: {
    title: "Privacy",
    back: "Back",
    updated: "Last updated: 20 November 2026",
    sections: [
      ["What we keep", "Your email (to sign in), your progress (courses, level, words, answers and goals), the texts you write in “Write” with their feedback, and your profile photo if you choose one. If you sign in with Google, we only receive your Google name, email and photo."],
      ["Why", "Only to make the app work: keep your progress and bring it to all your devices. We don't sell your data, show ads or track you on other sites."],
      ["Where", "Your data is stored with Supabase. Each person can only see their own information. Texts from “Write” are sent to Anthropic (Claude) for feedback; they aren't used to train models."],
      ["The AI tutor", "If you connect your own AI key, the key stays on your device and questions go straight to the provider you chose."],
      ["Deleting your data", "Me → Settings → Delete account deletes your account and everything stored on the server."],
    ],
  },
} as const;

export default function PrivacyPage() {
  const db = useDB();
  const c = COPY[db?.profile.appLang === "en" ? "en" : "es"];
  return (
    <main className="screen">
      <BackHeader title={c.title} backLabel={c.back} href="/" />
      <div className="stack" style={{ gap: 20, marginTop: 8 }}>
        {c.sections.map(([h, p]) => (
          <section key={h} className="stack" style={{ gap: 6 }}>
            <h2 className="label" style={{ margin: 0, fontWeight: 700 }}>{h}</h2>
            <p style={{ margin: 0 }}>{p}</p>
          </section>
        ))}
        <p className="caption" style={{ margin: 0 }}>{c.updated}</p>
      </div>
    </main>
  );
}
