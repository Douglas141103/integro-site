import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({entryPoints:[fileURLToPath(new URL('./multigame-bot.mjs',import.meta.url))],
 outfile:fileURLToPath(new URL('../../supabase/functions/egg-bots/simulation.mjs',import.meta.url)),
 bundle:true,format:'esm',platform:'neutral',mainFields:['module','main'],target:'es2022',minify:true,legalComments:'none',plugins:[{name:'query-imports',setup(b){b.onResolve({filter:/\?v=/},args=>({path:fileURLToPath(new URL(args.path.split('?')[0],new URL('file://'+args.resolveDir+'/')))}));}}]});
await build({entryPoints:[fileURLToPath(new URL('./bot-chat.mjs',import.meta.url))],outfile:fileURLToPath(new URL('../../supabase/functions/egg-bots/chat.mjs',import.meta.url)),bundle:true,format:'esm',platform:'neutral',target:'es2022',minify:true,legalComments:'none'});
