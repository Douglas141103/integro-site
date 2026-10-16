import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({entryPoints:[fileURLToPath(new URL('./entry.js',import.meta.url))],bundle:true,format:'iife',minify:true,target:'es2022',outfile:fileURLToPath(new URL('../egg.js',import.meta.url)),legalComments:'eof'});
