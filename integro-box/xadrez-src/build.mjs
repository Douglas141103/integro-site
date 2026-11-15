import {cp,mkdir} from 'node:fs/promises';
await mkdir('../xadrez',{recursive:true});
await cp('public','../xadrez',{recursive:true});
import {build} from 'esbuild';
await build({entryPoints:['src/main.js'],bundle:true,format:'esm',minify:true,target:'es2022',outfile:'../xadrez/app.js'});
await build({entryPoints:['src/ai-worker.js'],bundle:true,format:'esm',minify:true,target:'es2022',outfile:'../xadrez/ai-worker.js'});
