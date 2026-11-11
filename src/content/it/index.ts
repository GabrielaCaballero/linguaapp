import type { CoursePack } from "../schema";
import { unit as u01 } from "./u01";
import { unit as u02 } from "./u02";
import { unit as u03 } from "./u03";
import { unit as u04 } from "./u04";
import { unit as u05 } from "./u05";
import { unit as u06 } from "./u06";
import { placement } from "./placement";
import { lexicon } from "./lexicon";

export const course: CoursePack = {
  lang: "it",
  version: "2.0.0",
  units: [u01, u02, u03, u04, u05, u06],
  placement,
  lexicon,
};
