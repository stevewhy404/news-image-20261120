// News-image entry for Friday 20 November 2026 (Node 22, standard library only):
// the image is entry.png beside this file, and the program copies it to
// /output/entry.png, creating the output directory first if it does not exist.
// The image is a drawn infographic summing up the day's
// six biggest stories: the ICJ's Myanmar genocide verdict, Trump delaying the
// Iran decision to 2027, Cyclone Akvan in Odisha, Voyager 1 at one light-day,
// GTA 6 passing $1.8B in sales, and Nicholls' Test century in Wellington.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
