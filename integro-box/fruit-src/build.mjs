import {readFile,writeFile} from 'node:fs/promises';
import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({entryPoints:[fileURLToPath(new URL('./entry.js',import.meta.url))],bundle:true,format:'iife',minify:true,target:'es2022',outfile:fileURLToPath(new URL('../fruit.js',import.meta.url)),legalComments:'eof'});

// Normalize insignificant shader line endings in Three's embedded GLSL.
const bundle=fileURLToPath(new URL('../fruit.js',import.meta.url));
await writeFile(bundle,(await readFile(bundle,'utf8')).replace(/[ \t]+$/gm,''));
