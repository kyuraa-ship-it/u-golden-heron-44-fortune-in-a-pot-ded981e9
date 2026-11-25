import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "This week, a sunbeam finds you first, the watering can remembers you, and your newest leaf opens like good news.";

// Gate: /output/entry.txt must be UTF-8, 1-120 chars, not only whitespace, one line.
const len = [...entry].length;
if (len < 1 || len > 120 || !entry.trim() || entry.includes("\n")) {
  throw new Error(`gate failed: ${len} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${[...entry].length} chars`);
