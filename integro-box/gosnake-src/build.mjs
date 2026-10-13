import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const require=createRequire(import.meta.url);
const modules=process.env.GOSNAKE_BUILD_NODE_MODULES;
const {build}=require(modules?modules+'/esbuild':'esbuild');
await build({entryPoints:[fileURLToPath(new URL('./entry.js',import.meta.url))],
 bundle:true,format:'esm',minify:true,target:'es2022',
 outfile:fileURLToPath(new URL('../gosnake.js',import.meta.url)),
 nodePaths:modules?[modules]:[],legalComments:'eof'});
