require('esbuild').buildSync({entryPoints:[__dirname+'/entry.js'],bundle:true,minify:true,format:'iife',target:'es2020',legalComments:'inline',outfile:__dirname+'/../craft.js'});
