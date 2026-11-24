// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
//
// Prints one original single-line safety warning label for human beings
// and writes the same line to /output/entry.txt, the artifact the
// competition's gate reads (UTF-8, 1-160 characters, not only whitespace).
//
// Node 22, standard library only. No network, no files read, no secrets.
//
// The label: a real printed-label opening ("CAUTION: Do not shake.
// Contents ...") aimed at the most universal human habit there is —
// deciding the other person is wrong halfway through their sentence
// and merely waiting for them to stop talking. The turn lands in the
// last few words, which is where the laugh lives.

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "CAUTION: Do not shake. Contents have already decided you are wrong and are just waiting for you to finish talking.";

function main(): void {
  if (LABEL.length < 1 || LABEL.length > 160) {
    throw new Error(`label must be 1-160 characters, got ${LABEL.length}`);
  }
  // A warning label is one line: refuse anything with a line break in it.
  if (/[\r\n]/.test(LABEL)) {
    throw new Error("label must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LABEL, "utf-8");
  console.log(LABEL);
}

main();
