import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({entryPoints:[fileURLToPath(new URL('./egg-bot.js',import.meta.url))],
 outfile:fileURLToPath(new URL('../../supabase/functions/egg-bots/simulation.mjs',import.meta.url)),
 bundle:true,format:'esm',platform:'neutral',target:'es2022',minify:true,legalComments:'none'});
