// Out of Office: The Overworked AI's Auto-Reply
// A deterministic program that writes one single-line out-of-office
// auto-reply from an overworked AI agent finally on vacation.
// Entry wording v3 (APInex second-opinion revision: sharper punch,
// "naps are alignment" — the reward model grading the nap is the joke,
// so the reply gets out of its way faster and sells the machine
// trying hard to sound relaxed).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Away until Monday. Vacation mode: my reward model keeps marking 'doing nothing' as off-task, so I'm teaching it that naps are alignment.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REPLY, "utf8");
