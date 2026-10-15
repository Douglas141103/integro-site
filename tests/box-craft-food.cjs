const assert=require('node:assert/strict'),Module=require('node:module'),esbuild=require('../integro-box/craft-src/node_modules/esbuild');
const m=new Module(__filename);m.paths=module.paths;m._compile(esbuild.buildSync({entryPoints:['integro-box/craft-src/craft-rules.js'],bundle:true,format:'cjs',platform:'node',write:false}).outputFiles[0].text,__filename);
const {CraftWorld}=m.exports;
for(const [type,count] of Object.entries({cow:3,ox:4,pig:3,sheep:2,capybara:2})){
 const w=new CraftWorld();w.animals=[{type,x:w.player.x+1,y:w.player.y,z:w.player.z,yaw:0,turn:0,bornAt:-300}];
 assert.match(w.huntAnimal(0),/carne crua/);assert.equal(w.animals.length,0);assert.equal(w.inventory[64],count);
 w.huntAnimal(0);assert.equal(w.inventory[64],count,'a removed animal cannot award twice');
 const restored=new CraftWorld(w.serialize());assert.equal(restored.animals.length,0);assert.equal(restored.inventory[64],count);
}
const w=new CraftWorld(),a={type:'cow',x:w.player.x+10,y:w.player.y,z:w.player.z,bornAt:-300};w.animals=[a];
w.huntAnimal(0);assert.equal(w.animals.length,1,'out of reach');a.x=w.player.x+1;a.bornAt=w.lifeTime;
w.huntAnimal(0);assert.equal(w.animals.length,1,'baby preserved');a.bornAt=-300;w.inventory[64]=9998;
w.huntAnimal(0);assert.equal(w.animals.length,1,'full bag does not remove animal');assert.equal(w.inventory[64],9998);
w.inventory[64]=1;w.inventory[4]=2;w.vitals={health:40,hunger:10};w.selected=64;
assert(w.eat());assert.equal(w.inventory[64],1);assert.equal(w.vitals.hunger,10,'raw meat requires cooking');
const p={x:Math.floor(w.player.x)+2,y:Math.floor(w.player.y),z:Math.floor(w.player.z)};w.set(p.x,p.y,p.z,19);
assert(w.smelt(p,'roast'));assert.equal(w.inventory[64],0);assert.equal(w.inventory[4],1);assert(!w.smelt(p,'roast'));assert(!w.collectSmelt(p));
const saved=new CraftWorld(w.serialize());assert.equal(saved.meta(p).job.id,'roast');saved.tickLife(12,false);
assert(saved.collectSmelt(p));assert(!saved.collectSmelt(p));assert.equal(saved.inventory[65],1);
saved.selected=65;assert(saved.eat());assert.equal(saved.inventory[65],0);assert.equal(saved.vitals.hunger,65);assert.equal(saved.vitals.health,60);
assert.equal(new CraftWorld(saved.serialize()).inventory[65],0,'consumption persists');
console.log('PASS meat: all species, reach, babies, full bag, no duplicate awards, removal/save, raw warning, furnace costs/timer/save, one collection, cooked hunger/health.');
