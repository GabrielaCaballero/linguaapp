// The file name of a recorded clip: the same text always maps to the same short key, in the app
// (to find the clip) and in scripts/tts (to name it). FNV-1a 32-bit + length, hex. The generator
// fails on any collision, so a key never points at the wrong sentence.
export function audioKey(text: string): string {
  const s = text.trim().normalize("NFC");
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return `${h.toString(16).padStart(8, "0")}${s.length.toString(36)}`;
}
