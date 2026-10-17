import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {readFile,writeFile} from 'node:fs/promises';
const outfile=fileURLToPath(new URL('../blue-world.js',import.meta.url));
await build({entryPoints:[fileURLToPath(new URL('./entry.mjs',import.meta.url))],bundle:true,format:'esm',minify:true,target:'es2022',outfile,legalComments:'eof'});
// Embedded vendor GLSL contains insignificant trailing spaces.
await writeFile(outfile,(await readFile(outfile,'utf8')).replace(/[\t ]+$/gm,''));
