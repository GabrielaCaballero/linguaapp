import type { CoursePack } from "../schema";
import { unit as u01 } from "./u01";
import { unit as u02 } from "./u02";
import { unit as u03 } from "./u03";
import { unit as u04 } from "./u04";
import { unit as u05 } from "./u05";
import { unit as u06 } from "./u06";
import { unit as u07 } from "./u07";
import { unit as u08 } from "./u08";
import { unit as u09 } from "./u09";
import { unit as u10 } from "./u10";
import { unit as u11 } from "./u11";
import { unit as u12 } from "./u12";
import { unit as u13 } from "./u13";
import { unit as u14 } from "./u14";
import { unit as u15 } from "./u15";
import { unit as u16 } from "./u16";
import { unit as u17 } from "./u17";
import { unit as u18 } from "./u18";
import { placement } from "./placement";
import { lexicon } from "./lexicon";

export const course: CoursePack = {
  lang: "de",
  version: "2.2.0",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12, u13, u14, u15, u16, u17, u18],
  placement,
  lexicon,
};
