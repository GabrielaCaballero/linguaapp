import type { CoursePack } from "../schema";
import { unit as u01 } from "./u01";
import { placement } from "./placement";
import { lexicon } from "./lexicon";

export const course: CoursePack = {
  lang: "it",
  version: "2.0.0",
  units: [u01],
  placement,
  lexicon,
};
