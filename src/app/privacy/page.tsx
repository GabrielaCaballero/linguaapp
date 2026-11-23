"use client";

import { useDB } from "@/lib/store";
import { BackHeader } from "@/components/ui";

/** Plain-language privacy page (linked from Google's sign-in branding). Open without an account. */
const COPY = {
  es: {
    title: "Privacidad",
    back: "Volver",
    updated: "Última actualización: 23 de noviembre de 2026",
    sections: [
      ["Qué guardamos", "Tu correo (para entrar), tu progreso (cursos, nivel, palabras, respuestas y metas), los textos que escribes en «Escribir» con su corrección, y tu foto de perfil si eliges una. Si entras con Google, solo recibimos tu nombre, tu correo y tu foto de Google."],
      ["Para qué", "Para que la app funcione: guardar tu progreso y llevarlo a todos tus dispositivos. También miramos las respuestas de todos en conjunto (por ejemplo, qué palabras se fallan más) para corregir y mejorar los cursos. No vendemos tus datos, no mostramos publicidad y no te rastreamos en otros sitios."],
      ["Estadísticas de uso (solo si aceptas)", "Si activas «Compartir estadísticas de uso», guardamos cuánto tiempo pasas en cada pantalla, qué lecciones empiezas y terminas, y el tipo de dispositivo. Nunca tu correo ni lo que escribes. Está apagado hasta que digas que sí y lo puedes apagar en Ajustes cuando quieras."],
      ["Dónde", "Tus datos se guardan en Supabase. Cada persona solo puede ver su propia información. Los textos de «Escribir» se envían a Anthropic (Claude) para corregirlos; no se usan para entrenar modelos."],
      ["El tutor con IA", "Si conectas tu propia clave de IA, la clave queda solo en tu dispositivo y las preguntas van directo al proveedor que elegiste."],
      ["Borrar tus datos", "En Yo → Ajustes → Borrar cuenta se borran tu cuenta y todo lo guardado en el servidor."],
    ],
  },
  en: {
    title: "Privacy",
    back: "Back",
    updated: "Last updated: 23 November 2026",
    sections: [
      ["What we keep", "Your email (to sign in), your progress (courses, level, words, answers and goals), the texts you write in “Write” with their feedback, and your profile photo if you choose one. If you sign in with Google, we only receive your Google name, email and photo."],
      ["Why", "To make the app work: keep your progress and bring it to all your devices. We also look at everyone's answers together (for example, which words are missed most) to fix and improve the courses. We don't sell your data, show ads or track you on other sites."],
      ["Usage statistics (only if you agree)", "If you turn on “Share usage statistics”, we keep how long you spend on each screen, which lessons you start and finish, and the device type. Never your email or what you type. It's off until you say yes, and you can turn it off in Settings any time."],
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
