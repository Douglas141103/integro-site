import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({entryPoints:[fileURLToPath(new URL('./entry.js',import.meta.url))],bundle:true,alias:{three:fileURLToPath(new URL('./node_modules/three/build/three.module.js',import.meta.url)),'three/addons':fileURLToPath(new URL('./node_modules/three/examples/jsm',import.meta.url))},format:'iife',minify:true,target:'es2022',outfile:fileURLToPath(new URL('../egg.js',import.meta.url)),legalComments:'eof'});
