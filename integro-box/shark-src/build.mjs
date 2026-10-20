import {build} from 'esbuild';
await build({entryPoints:[new URL('./app.mjs',import.meta.url).pathname],outfile:new URL('../shark.js',import.meta.url).pathname,bundle:true,format:'esm',target:'es2022',minify:true,legalComments:'eof'});
