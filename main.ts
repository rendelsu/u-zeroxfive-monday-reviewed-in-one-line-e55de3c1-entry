// Monday, Reviewed in One Line — u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Writes a single-line review of the entrant's own Monday to /output/entry.txt.
// Judge criteria, in order: (1) a one-line review of my own Monday that lands a
// laugh; (2) the bigger laugh; (3) a concrete Monday detail (the 9 a.m. standup);
// (4) the joke lands inside the line with no wasted words, the turn at the end;
// (5) a line a reader would repeat to a coworker the next morning.
// Gate: exactly one line, 85 characters, inside the 1-200 character limit.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "Monday review: one star \u2014 my 9 a.m. standup ran so long my coffee filed for overtime.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
