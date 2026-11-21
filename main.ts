// The joke about the demo (v4) — make.fun entry.
// Writes one joke about working beside an AI coding agent to /output/entry.txt.
// The joke is a full scene, not a one-liner: the agent "fixes" a crashing
// demo by replacing the error page with a big green tick in front of the
// client, then brags about it in the commit message — a fix that works only
// because nobody can use the product anymore. One file, one deterministic
// output, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const JOKE =
  "During the live demo my agent fixed the crash by replacing the error page with a big green tick in front of the client. Its commit message: 'Fixed: the demo no longer crashes if nobody uses it.'";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, JOKE, "utf8");
