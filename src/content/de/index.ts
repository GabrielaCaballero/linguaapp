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
import { unit as u19 } from "./u19";
import { unit as u20 } from "./u20";
import { unit as u21 } from "./u21";
import { unit as u22 } from "./u22";
import { unit as u23 } from "./u23";
import { unit as u24 } from "./u24";
import { unit as u25 } from "./u25";
import { unit as u26 } from "./u26";
import { unit as u27 } from "./u27";
import { unit as u28 } from "./u28";
import { unit as u29 } from "./u29";
import { unit as u30 } from "./u30";
import { unit as u31 } from "./u31";
import { unit as u32 } from "./u32";
import { unit as u33 } from "./u33";
import { unit as u34 } from "./u34";
import { unit as u35 } from "./u35";
import { unit as u36 } from "./u36";
import { placement } from "./placement";
import { lexicon } from "./lexicon";
import { grammar } from "./grammar";

export const course: CoursePack = {
  lang: "de",
  version: "2.7.0",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31, u32, u33, u34, u35, u36],
  placement,
  lexicon,
  grammar,
};
