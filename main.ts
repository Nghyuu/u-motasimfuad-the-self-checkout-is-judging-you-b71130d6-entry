import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One smug remark from the till, aimed at a basket of twelve yoghurts and nothing else.
const line =
  "Twelve yoghurts, no spoon, no plan. I have scanned your whole personality, and it expires Friday.\n";

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line, "utf8");
fs.chmodSync(entryPath, 0o644);
