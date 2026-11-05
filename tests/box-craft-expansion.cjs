const assert=require('node:assert/strict'),Module=require('node:module'),esbuild=require('../integro-box/craft-src/node_modules/esbuild');
function load(file){const m=new Module(__filename);m._compile(esbuild.buildSync({entryPoints:[file],bundle:true,platform:'node',format:'cjs',write:false}).outputFiles[0].text,__filename);return m.exports}
const {CraftWorld,SIZE,HEIGHT,index}=load('integro-box/craft-src/craft-rules.js');
const {upgradeSave}=load('integro-box/craft-src/craft-adventure.js');
const old=(x,y,z)=>x+96*(z+96*y),fine=(x,y,z)=>x+192*(z+192*y);
const raw={version:2,worldSize:96,adventure:1,expansion:1,edits:[[old(80,24,81),18],[old(83,24,82),0],[old(84,24,82),22]],props:[[old(80,24,81),{stored:{4:12}}]],smallCells:[[old(83,24,82),[1,0,0,0,0,0,0,0]]],fluidSources:[[old(84,24,82),22]],flowCells:[old(84,23,82)],fineSources:[[fine(170,50,170),22]],coins:452,inventory:{1:98},animals:[]};
const upgrade=upgradeSave(raw);assert.equal(upgrade.worldSize,192);assert.equal(upgrade.flowCells[0],index(84,23,82));assert.equal(upgrade.fineSources[0][0],170+384*(170+384*50));assert.equal(upgradeSave(upgrade),upgrade);
const w=new CraftWorld(raw);assert.equal(w.get(80,24,81),18);assert.equal(w.meta({x:80,y:24,z:81}).stored[4],12);assert.equal(w.smallAt({x:166,y:48,z:164}),1);assert.equal(w.fluidSources.get(index(84,24,82)),22);assert.equal(w.fineSources.size,1);assert.equal(w.coins,452);assert.equal(w.inventory[1],98);
const next=new CraftWorld(w.serialize());assert.equal(next.get(80,24,81),18);assert.equal(next.smallAt({x:166,y:48,z:164}),1);assert.equal(next.fineSources.size,1);
assert.equal(SIZE*SIZE,4*96*96);for(const [x,z]of [[96,20],[20,96],[191,191],[120,170]]){assert.equal(w.get(x,0,z),11);assert(w.surface(x,z)>0);assert(w.set(x,25,z,8));}assert(!w.set(192,20,10,8));assert(!w.set(10,30,10,8));
const last=new CraftWorld(w.serialize());assert.equal(last.get(191,25,191),8);assert.equal(HEIGHT,30);
console.log('PASS 4x area, v2 coordinate migration, chest contents, small blocks, both fluid grids, inventory, idempotent saves and outer-boundary building.');
