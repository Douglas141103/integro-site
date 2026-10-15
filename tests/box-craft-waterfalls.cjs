const assert=require('node:assert/strict'),Module=require('node:module'),esbuild=require('../integro-box/craft-src/node_modules/esbuild'),THREE=require('../integro-box/craft-src/node_modules/three');
function load(name){const m=new Module(__filename);m.paths=module.paths;m.require=id=>id==='three'?THREE:require(id);m._compile(esbuild.buildSync({entryPoints:['integro-box/craft-src/'+name+'.js'],bundle:true,format:'cjs',platform:'node',external:['three'],write:false}).outputFiles[0].text,__filename);return m.exports}
const {CraftWorld,index}=load('craft-rules'),{fluidKey,fluidPosition}=load('craft-fluids'),{flowGeometry}=load('craft-fluid-mesh');
function channel(){const w=new CraftWorld();Object.assign(w.player,{x:11,y:22,z:10,vy:0});w.animals=[];
 // Upper half-cell trench, 0.5 wide, on a ledge with a drop at its end.
 for(let z=10;z<=13;z++){w.set(12,22,z,0);w.smallCells.set(index(12,22,z),[2,2,2,2,0,2,0,2]);}
 return w;
}
for(const [bucket,id] of [[25,22],[26,23]]){
 const w=channel(),source={x:24,y:45,z:20};w.selected=bucket;w.inventory[bucket]=1;
 const before=JSON.stringify([...w.smallCells]),empty=w.inventory[24];assert(w.bucket({placeSmall:source}));assert.equal(w.inventory[bucket],0);assert.equal(w.inventory[24],empty+1);
 assert.equal(w.fineFluidAt(source),id);assert.equal(w.fineFluidAt({x:24,y:45,z:22}),id,'flow through half-width channel');
 assert([...w.fineFlow].some(([k])=>{const p=fluidPosition(k);return p.y<44}),'falls over the edge');assert.equal(JSON.stringify([...w.smallCells]),before,'banks and half-block floor preserved');
 for(const [k] of w.fineFlow)assert.equal(w.smallAt(fluidPosition(k)),0,'fluid cannot overlap terrain');
 const restored=new CraftWorld(w.serialize());assert.equal(restored.fineSources.get(fluidKey(source)),id);assert.equal(restored.fineFluidAt(source),id,'source resumes after reload');
 const g=flowGeometry(w,1,1,id);assert(g.getAttribute('position').count>0);for(const v of g.getAttribute('position').array)assert(Number.isFinite(v));
 const mesh=new THREE.Mesh(g,new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));mesh.updateMatrixWorld();const ray=new THREE.Raycaster(new THREE.Vector3(12.25,24,10.25),new THREE.Vector3(0,-1,0));assert(ray.intersectObject(mesh).length,'flow can be targeted with a bucket');g.dispose();mesh.material.dispose();
 w.selected=24;assert(w.bucket({fluidSmall:source}));assert.equal(w.fineSources.size,0);assert.equal(w.fineFlow.size,0);assert.equal(w.inventory[bucket],1);w.selected=24;assert(!w.bucket({fluidSmall:source}),'no duplicate collection');
}
// A vertical wall can hold the source with nothing immediately underneath.
const wall=new CraftWorld();Object.assign(wall.player,{x:10,y:22,z:10});wall.set(12,22,10,3);wall.selected=25;wall.inventory[25]=1;
const edge={x:23,y:45,z:20};assert.equal(wall.smallAt({...edge,y:44}),0);assert(wall.bucket({placeSmall:edge}));assert.equal(wall.fineFluidAt({...edge,y:44}),22);
// Topology changes recalculate on the existing one-second simulation tick.
wall.selected=2;wall.inventory[2]=5;assert(wall.placeSmall({...edge,y:44}));wall.tickLife(1,false);assert.equal(wall.fineFluidAt({...edge,y:44}),0);assert.equal(wall.smallAt({...edge,y:44}),2);
const blocked=channel();blocked.selected=25;blocked.inventory[25]=1;assert(!blocked.bucket({placeSmall:{x:25,y:45,z:20}}));assert.equal(blocked.inventory[25],1);assert(!blocked.bucket({placeSmall:{x:170,y:45,z:170}}));assert(!blocked.bucket({placeSmall:{x:24.5,y:45,z:20}}));
const mix=channel(),p={x:24,y:45,z:20};mix.selected=26;mix.inventory[26]=1;assert(mix.bucket({placeSmall:p}));mix.selected=25;mix.inventory[25]=1;assert(mix.bucket({fluidSmall:p}));assert.equal(mix.smallAt(p),3);assert.equal(mix.fineFluidAt(p),0);assert.equal(mix.fineSources.size,0);
const malformed=new CraftWorld({version:2,fineSources:[[-1,22],[999999999,23],[fluidKey(p),5],['x',22]]});assert.equal(malformed.fineSources.size,0);
assert(wall.fineFlow.size<=2048);
console.log('PASS waterfalls: water/lava, half-cell trench, banks intact, unsupported wall source, gravity, raycast, save/reload, scoop/drain, topology, inventory, reach, mixing, malformed saves and bounded flow.');
