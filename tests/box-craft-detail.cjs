const assert=require('node:assert/strict'),Module=require('node:module'),esbuild=require('../integro-box/craft-src/node_modules/esbuild'),THREE=require('../integro-box/craft-src/node_modules/three');
function load(name){const m=new Module(__filename);m.paths=module.paths;m.require=id=>id==='three'?THREE:id.startsWith('three/')?require('../integro-box/craft-src/node_modules/'+id):require(id);m._compile(esbuild.buildSync({entryPoints:['integro-box/craft-src/'+name+'.js'],bundle:true,format:'cjs',platform:'node',external:['three'],write:false}).outputFiles[0].text,__filename);return m.exports}
const {CraftWorld,SIZE,HEIGHT,index}=load('craft-rules'),{chunkGeometry,groundDetails}=load('craft-mesh');
function flat(){const w=new CraftWorld();w.cells.fill(0);w.base.fill(0);w.edits.clear();w.props.clear();w.features.clear();w.smallCells.clear();w.animals=[];w.vehicles=[];for(let x=0;x<SIZE;x++)for(let z=0;z<SIZE;z++)w.cells[index(x,7,z)]=3;w.base=w.cells.slice();Object.assign(w.player,{x:10.5,y:8,z:10.5,vy:0});return w}
const w=flat(),p={x:24,y:16,z:20};w.selected=2;const stock=w.inventory[2];
assert(w.placeSmall(p));assert.equal(w.inventory[2],stock-1);assert(!w.placeSmall(p));assert.equal(w.inventory[2],stock-1);
assert.equal(w.smallAt(p),2);assert.deepEqual(w.detailBoxes(12,8,10),[[0,0,0,.5,.5,.5]]);
assert(w.collides(12.25,8,10.25));assert(!w.collides(12.25,8.51,10.25),'head is clear above half-height block');
assert(!w.placeSmall({x:21,y:16,z:21}),'cannot place inside player');assert(!w.placeSmall({x:100,y:16,z:100}),'reach enforced');assert(!w.placeSmall({x:24.5,y:16,z:20}));
assert(!w.placeSmall({x:24,y:22,z:20}),'no floating blocks');
// Render and raycast a single half-block, not a camera trick.
const visual=flat();visual.cells.fill(0);visual.base.fill(0);visual.smallCells.set(index(2,8,2),[2,0,0,0,0,0,0,0]);
const geom=chunkGeometry(visual,0,0);geom.computeBoundingBox();assert.deepEqual(geom.boundingBox.min.toArray(),[2,8,2]);assert.deepEqual(geom.boundingBox.max.toArray(),[2.5,8.5,2.5]);
const mesh=new THREE.Mesh(geom,new THREE.MeshBasicMaterial());mesh.updateMatrixWorld();const ray=new THREE.Raycaster(new THREE.Vector3(2.25,10,2.25),new THREE.Vector3(0,-1,0));const hit=ray.intersectObject(mesh)[0];assert(hit);assert.equal(hit.point.y,8.5);geom.dispose();mesh.material.dispose();
// Mining one old unit removes exactly one of its eight half-size parts.
const old=flat();old.set(12,8,10,2);const inv=old.inventory[2];assert.equal(old.mineSmall(p),2);assert.equal(old.inventory[2],inv+1);assert.equal(old.smallCells.get(index(12,8,10)).filter(Boolean).length,7);assert.equal(old.surfaceId(12,8,10),2);assert.equal(old.smallAt(p),0);assert(!old.mineSmall(p));assert.equal(old.inventory[2],inv+1);
const saved=old.serialize(),restored=new CraftWorld(saved);assert.deepEqual(restored.smallCells.get(index(12,8,10)),old.smallCells.get(index(12,8,10)));assert.equal(restored.smallAt(p),0);assert.equal(restored.inventory[2],inv+1);
// Completing all eight pieces restores a full unit, preserving farmland/circuit compatibility.
old.selected=2;assert(old.placeSmall(p));assert(!old.smallCells.has(index(12,8,10)));assert.equal(old.get(12,8,10),2);
old.inventory[2]=9999;assert(!old.mineSmall(p));assert.equal(old.get(12,8,10),2,'full inventory cannot discard terrain');
// Flow respects partial blocks instead of replacing saved small constructions.
w.set(13,8,10,22);w.fluidSources.set(index(13,8,10),22);w.spreadFluids();assert.equal(w.smallAt(p),2);assert(!w.flowCells.has(index(12,8,10)));
// Invalid details cannot occupy furniture, bedrock or import arbitrary item ids.
const corrupt=new CraftWorld({...saved,smallCells:[[0,Array(8).fill(2)],[index(12,8,10),Array(8).fill(65)]]});assert.equal(corrupt.smallCells.size,0);
// Unchanged old saves and the compact inventory remain readable.
const legacy=new CraftWorld();const before=legacy.serialize();delete before.detail;delete before.smallCells;const migrated=new CraftWorld(before);assert.equal(migrated.smallCells.size,0);assert.deepEqual(migrated.serialize().edits,before.edits);assert.deepEqual(migrated.inventory,before.inventory);
const details=groundDetails(legacy,2,2);for(const n of details.getAttribute('position').array)assert(Number.isFinite(n));details.dispose();
console.log('PASS detail: real 0.5-unit geometry/raycast/collision, inventory, reach, player overlap, partial mining, no duplicates, persistence, merging, fluids, invalid saves, old worlds.');
