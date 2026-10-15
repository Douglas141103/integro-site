import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({entryPoints:[fileURLToPath(new URL('./entry.js',import.meta.url))],bundle:true,format:'esm',minify:true,target:'es2022',outfile:fileURLToPath(new URL('../rush.js',import.meta.url)),legalComments:'eof'});
