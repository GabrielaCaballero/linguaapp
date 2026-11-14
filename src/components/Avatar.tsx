"use client";
import type { Avatar as AvatarT } from "@/lib/model";
import { usePhoto } from "@/lib/avatar";

/** Round profile picture: the photo, else an emoji on a colour, else the name's first letter. */
export function Avatar({ avatar, name, size = 48, label }: { avatar?: AvatarT; name?: string; size?: number; label: string }) {
  const photo = usePhoto(avatar);
  const style = { width: size, height: size, borderRadius: "50%", flex: "none" as const, display: "inline-flex", alignItems: "center", justifyContent: "center", overflow: "hidden" };
  // A tiny data: URL already shrunk on the phone; next/image would add nothing here.
  // eslint-disable-next-line @next/next/no-img-element
  if (photo) return <img src={photo} alt={label} width={size} height={size} style={{ ...style, objectFit: "cover" }} />;
  const bg = avatar?.color ?? "var(--accent-soft)";
  return (
    <span role="img" aria-label={label} style={{ ...style, background: bg, fontSize: size * 0.5, color: avatar?.color ? "#fff" : "var(--accent)", fontWeight: 700 }}>
      {avatar?.emoji ?? (name?.trim()?.[0]?.toUpperCase() || "🙂")}
    </span>
  );
}
