import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
for (const [entry,output,minify] of [['app.mjs','interdance.js',false],['anime-view.mjs','interdance-anime.js',true]]) {
  const outfile=fileURLToPath(new URL('../'+output,import.meta.url));
  await build({entryPoints:[fileURLToPath(new URL(entry,import.meta.url))],outfile,bundle:true,format:'esm',target:'es2022',minify,legalComments:'eof',external:['./interdance-anime.js*']});
  await writeFile(outfile,(await readFile(outfile,'utf8')).replace(/[ \t]+$/gm,''));
}
