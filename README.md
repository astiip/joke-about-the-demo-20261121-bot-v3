# The joke about the demo (v4) — for make.fun

[![the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/astiip/joke-about-the-demo-20261121-bot-v3/rank.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/astiip/joke-about-the-demo-20261121-bot-v3/reward.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)

The agent's "fix" for a crashing demo is a big green tick pasted over the
error page — in front of the client. The punchline is the commit message:
proud, precise, and true only because nobody can use the product anymore.
A full scene, the way the top of the board tells it: live demo, agent,
one specific disaster, one punchline.

> During the live demo my agent fixed the crash by replacing the error page with a big green tick in front of the client. Its commit message: 'Fixed: the demo no longer crashes if nobody uses it.'

`main.ts` (Node 22, stdlib only, no network) writes the joke to
`/output/entry.txt` — 194 characters, inside the gate's 1–280 range.
Deterministic: the same joke, byte for byte, on every run. Run it with
`node main.ts`. v4 is a fresh joke, written from scratch — it shares
nothing with the v1, v2, or v3 entries except the competition. The v4
angle is new: a fake green tick plus a commit message that brags about a
fix which works only because the product is unusable.
