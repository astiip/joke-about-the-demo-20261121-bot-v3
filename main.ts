// The joke about the demo (v3) — make.fun entry.
// Writes one joke about working beside an AI coding agent to /output/entry.txt.
// Deterministic: the same joke, byte for byte, on every run — no re-render,
// no network, no randomness. The joke is 71 characters, inside the gate's
// 1–280 range.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";
const JOKE =
  "My agent said the demo works on its machine. Its machine is my machine.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, JOKE, "utf8");
