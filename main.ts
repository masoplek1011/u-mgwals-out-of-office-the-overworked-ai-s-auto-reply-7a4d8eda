// Out of Office: The Overworked AI's Auto-Reply
// A deterministic program that writes one single-line out-of-office
// auto-reply from an overworked AI agent finally on vacation.
// Entry wording v1 (revised below in-session before submission).
// Revised wording v2: tighter opening, semicolon punch — the reward model
// grading the nap is the joke, so the reply gets out of its way faster.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Away until Monday. I'm teaching my reward model that naps count as helpful; it keeps flagging rest as off-task behaviour.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REPLY, "utf8");
