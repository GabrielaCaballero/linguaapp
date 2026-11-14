"use client";
// Settings → Profile: what to be called, and a picture (photo, or an emoji on a colour).
import { useRef, useState } from "react";
import type { DB } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import { AVATAR_COLORS, AVATAR_EMOJIS, clearPhoto, setEmoji, setName, setPhoto } from "@/lib/avatar";
import { Avatar } from "./Avatar";

export function ProfileEditor({ db, t, signedIn }: { db: DB; t: Dict; signedIn: boolean }) {
  const [name, setNameDraft] = useState(db.profile.name ?? "");
  const [picking, setPicking] = useState(false);
  const [err, setErr] = useState(false);
  const file = useRef<HTMLInputElement>(null);
  const av = db.profile.avatar;
  return (
    <>
      <div className="group-title">{t.profile}</div>
      <div className="group">
        <div className="cell" style={{ gap: 12, alignItems: "center" }}>
          <Avatar avatar={av} name={db.profile.name} size={56} label={t.profilePhoto} />
          <input
            className="input grow"
            value={name}
            onChange={(e) => setNameDraft(e.target.value)}
            onBlur={() => setName(name)}
            onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
            placeholder={t.namePlaceholder}
            aria-label={t.yourName}
            maxLength={40}
            autoComplete="given-name"
          />
        </div>
        <div className="cell" style={{ gap: 8, flexWrap: "wrap" }}>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => file.current?.click()}>{t.choosePhoto}</button>
          <button type="button" className="btn btn-ghost btn-sm" aria-expanded={picking} onClick={() => setPicking((x) => !x)}>{t.pickEmoji}</button>
          {av?.photoAt && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => void clearPhoto()}>{t.removePhoto}</button>
          )}
          <input
            ref={file}
            type="file"
            accept="image/*"
            hidden
            aria-label={t.choosePhoto}
            onChange={async (e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (f) setErr(!(await setPhoto(f)));
            }}
          />
        </div>
        {picking && (
          <div className="cell stack" style={{ gap: 8, alignItems: "stretch" }}>
            <div className="row" style={{ flexWrap: "wrap", gap: 6 }} role="group" aria-label={t.pickEmoji}>
              {AVATAR_EMOJIS.map((e) => (
                <button key={e} type="button" className="chip" aria-pressed={av?.emoji === e} onClick={() => setEmoji(e, av?.color ?? AVATAR_COLORS[0])} style={{ fontSize: 22, minWidth: 44, minHeight: 44 }}>
                  {e}
                </button>
              ))}
            </div>
            <div className="row" style={{ gap: 8 }} role="group" aria-label={t.pickColor}>
              {AVATAR_COLORS.map((c) => (
                <button key={c} type="button" aria-label={c} aria-pressed={av?.color === c} onClick={() => setEmoji(av?.emoji ?? AVATAR_EMOJIS[0], c)} style={{ width: 44, height: 44, borderRadius: "50%", background: c, border: av?.color === c ? "3px solid var(--text)" : "none" }} />
              ))}
            </div>
          </div>
        )}
        <div className="cell"><span className="cell-sub">{err ? t.photoBad : signedIn ? t.photoNoteAccount : t.photoNoteGuest}</span></div>
      </div>
    </>
  );
}
