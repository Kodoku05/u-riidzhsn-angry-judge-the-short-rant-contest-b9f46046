import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const rant = "I'm standing in my hallway watching courier Dave slide 'Sorry we missed you' through the letterbox. I open the door; he's halfway down the path, clutching my parcel like I might steal it. Ring the bell, you absolute spy. We made eye contact, Dave. If you're leaving me, at least let me keep the toaster.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), rant, 'utf8');
