import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import {buildSync} from '../integro-box/fruit-src/node_modules/esbuild/lib/main.js';
import * as T from '../integro-box/fruit-src/node_modules/three/build/three.module.js';
import {ISLANDS,FRUITS,SEA_MINES,SEA_BOUNDS,FruitAdventure,freshSave,cleanSave,stationPosition,groundHeight} from '../integro-box/fruit-src/fruit-rules.mjs';
import {createFruitWorld} from '../integro-box/fruit-src/fruit-world.js';
import {FruitExplorer,FruitGuardian} from '../integro-box/fruit-src/fruit-actors.js';
import {ArtResources} from '../integro-box/rush-src/art.js';
const legacy=()=>({...freshSave(),coins:1450,level:15,xp:17,island:14,owned:Object.keys(FRUITS),collected:Object.keys(FRUITS),fruit:'aurora',kills:Array(15).fill(3),bosses:Array(15).fill(true),claimed:Array(15).fill(true),chests:[0,4,14],upgrades:{power:4,armor:3,speed:2,boat:3}});
function fakeCanvas(w){w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({measureText:t=>({width:t.length*8})},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});w.HTMLCanvasElement.prototype.toDataURL=()=> 'data:image/png;base64,AA';}

test('fifteen-island saves extend to twenty without losing fruit, coins, upgrades or completed missions',()=>{
 const old=legacy(),save=cleanSave(old);assert.equal(ISLANDS.length,20);assert.equal(new Set(ISLANDS.map(i=>i.biome)).size,20);assert.deepEqual(save.claimed.slice(0,15),old.claimed);assert.deepEqual(save.claimed.slice(15),Array(5).fill(false));
 for(const key of ['coins','level','xp','island','owned','collected','fruit','chests','upgrades'])assert.deepEqual(save[key],old[key]);
 const game=new FruitAdventure(old);assert(game.unlocked(15));assert(!game.unlocked(16));assert(!game.unlocked(20));assert.equal(SEA_MINES.length,38);assert(SEA_BOUNDS.maxZ>ISLANDS[19].z+80);
 const fresh=new FruitAdventure();assert(fresh.unlocked(1));assert(!fresh.unlocked(2));assert.equal(fresh.save.owned.length,0);
});

test('all five new islands can be sailed to, fought, claimed once and revisited; victory is on island twenty',()=>{
 const game=new FruitAdventure(legacy());game.drainEvents();
 for(let id=15;id<20;id++){
  game.player={...stationPosition(game.island,'dock'),y:0,vy:0,yaw:0};assert(game.sail(id),'route to '+id);assert(game.route.length>1);
  for(const p of game.route){assert(game.free(p.x,p.z));assert(SEA_MINES.every(m=>Math.hypot(m.x-p.x,m.z-p.z)>=10.9));}
  let steps=0;while(game.boating&&steps++<5000)game.update(.05);assert.equal(game.island,id);assert(!game.boating);assert(!game.bossReady);
  const boss=game.enemies.find(e=>e.boss),hp=boss.hp;game.hit(boss,1e5);assert.equal(boss.hp,hp,'boss remains gated by sentinels');
  for(const enemy of game.enemies.filter(e=>!e.boss))game.hit(enemy,enemy.maxHp);assert(game.bossReady);game.hit(boss,boss.maxHp);assert(game.save.bosses[id]);
  game.player={...stationPosition(id,'guide'),y:0,vy:0,yaw:0};const coins=game.save.coins;assert(game.interact('guide'));assert(game.save.coins>coins);const reward=game.save.coins;game.interact('guide');assert.equal(game.save.coins,reward);
  const events=game.drainEvents();assert.equal(events.some(e=>e.type==='victory'),id===19);assert.equal(cleanSave(game.save).claimed[id],true);
 }
 assert(game.save.claimed.every(Boolean));game.player={...stationPosition(19,'dock'),y:0,vy:0,yaw:0};assert(game.sail(14),'return route from expanded row');
});

test('running, jumping and dashing coexist without allowing land movement beyond the shore',()=>{
 const game=new FruitAdventure();const z=game.player.z;game.update(.05,{x:0,z:1});assert(game.jump());game.update(.05,{x:0,z:1});assert(game.player.y>0);assert(game.player.z>z);assert(game.dash({x:0,z:1}));const before=game.player.z;game.update(.05,{x:0,z:1});assert(game.player.z-before>game.speed*.05);
 for(let i=0;i<500;i++)game.update(.05,{x:1,z:0});assert(game.free(game.player.x,game.player.z));game.player={...stationPosition(0,'dock'),y:0,vy:0,yaw:0};assert(game.board());assert(!game.jump());assert(!game.dash());
});

test('explorer and guardian skins use finite normalized weights, IK, anticipation, landing and bounded meshes',()=>{
 const art=new ArtResources(),parent=new T.Group(),hero=new FruitExplorer(art,parent),guardian=new FruitGuardian(art,parent,{biome:'mushroom',boss:true}),game=new FruitAdventure();
 try{
  const weights=guardian.geometry.attributes.skinWeight;let blended=0;for(let i=0;i<weights.count;i++){assert(Math.abs(weights.getX(i)+weights.getY(i)+weights.getZ(i)+weights.getW(i)-1)<1e-6);if(weights.getY(i)>0)blended++;}assert(blended>50);
  let heelLift=0;for(let i=0;i<100;i++){game.update(1/60,{x:0,z:1});hero.update(game,1/60);hero.g.updateMatrixWorld(true);const l=hero.model.bones.footL.getWorldPosition(new T.Vector3()),r=hero.model.bones.footR.getWorldPosition(new T.Vector3());heelLift=Math.max(heelLift,Math.abs(l.y-r.y));}assert(heelLift>.3);
  game.jump();let squash=1,stretch=1;for(let i=0;i<70;i++){game.update(1/60);hero.update(game,1/60);squash=Math.min(squash,hero.model.rig.scale.y);stretch=Math.max(stretch,hero.model.rig.scale.y);}assert(squash<.99);assert(stretch>1.01);
  const enemy={x:0,z:0,boss:true,windup:.8,recover:0};guardian.update(enemy,1/60,1);assert(guardian.bones.shoulderL.rotation.x< -1);assert(guardian.rig.scale.y<1);const pose=guardian.bones.kneeL.quaternion.clone();guardian.update({...enemy,x:5},0,90);assert(guardian.bones.kneeL.quaternion.equals(pose));
  guardian.g.position.set(560,2,540);for(let i=0;i<45;i++){enemy.x+=.04;enemy.windup=0;guardian.update(enemy,1/60,i/60);for(const leg of Object.values(guardian.legs))assert(leg.foot.getWorldPosition(new T.Vector3()).distanceTo(leg.target)<.015);}
  guardian.g.updateMatrixWorld(true);guardian.skeleton.update();guardian.mesh.computeBoundingBox();const size=guardian.mesh.boundingBox.getSize(new T.Vector3());assert(size.length()<7);assert([...guardian.mesh.boundingBox.min.toArray(),...guardian.mesh.boundingBox.max.toArray()].every(Number.isFinite));
 }finally{hero.dispose();guardian.dispose();art.dispose();}assert.equal(parent.children.length,0);
});

test('twenty toon islands have distinct landmarks, correct sea coverage, four animated guardians and release old actors',()=>{
 const dom=new JSDOM();fakeCanvas(dom.window);globalThis.document=dom.window.document;globalThis.Path2D=class{};let world;
 try{
  const scene=new T.Scene();world=createFruitWorld(scene);const game=new FruitAdventure(legacy()),camera=new T.PerspectiveCamera();assert.equal(world.terrainMeshes.length,20);assert.equal(world.islands.length,20);
  let disposed=0;for(let id=15;id<20;id++){game.arrive(id);world.animate(game,.016,camera);assert.equal(world.guardians.length,4);assert(world.guardians.every(v=>v.actor.mesh.isSkinnedMesh));world.guardians.forEach(v=>v.actor.geometry.addEventListener('dispose',()=>disposed++));assert(world.islands[id].g.visible);}
  assert.equal(disposed,16);for(const name of ['GiantMushroom','ClockTower','SkyGarden','LunarObservatory','IntegroStation','IntegroLocomotive'])assert(scene.getObjectByName(name),name);
  assert(world.terrainMeshes.every(m=>m.material.isMeshToonMaterial));const ocean=scene.getObjectByProperty('isMesh',true);assert(ocean);let shader;scene.traverse(o=>{if(o.material?.uniforms?.centers)shader=o.material;});assert.equal(shader.uniforms.centers.value.length,20);assert.match(shader.fragmentShader,/centers\[20\]/);
  const before=JSON.stringify(game.snapshot());world.animate(game,0,camera);assert.equal(JSON.stringify(game.snapshot()),before);world.dispose();world=null;assert.equal(scene.children.length,0);
 }finally{world?.dispose();dom.window.close();delete globalThis.document;delete globalThis.Path2D;}
});

test('mounted Fruit Box exposes themed HUD, twenty destinations, multitouch jump, pause and old save restoration',async()=>{
 const html=readFileSync(new URL('../integro-box/jogar.html',import.meta.url),'utf8'),dom=new JSDOM(html,{url:'https://example.test/integro-box/jogar.html',pretendToBeVisual:true}),w=dom.window;fakeCanvas(w);w.scrollTo=()=>{};
 const key='integro-box-fruit-v1';w.localStorage.setItem(key,JSON.stringify(legacy()));w.BoxStorage=w.localStorage;let frame,clock=0;const errors=[],warns=[];
 const req=createRequire(new URL('../integro-box/fruit-src/entry.js',import.meta.url)),three=req('three');
 class Renderer{constructor({canvas}={}){this.domElement=canvas||w.document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setSize(){}dispose(){}forceContextLoss(){}render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);}}
 const code=buildSync({entryPoints:[new URL('../integro-box/fruit-src/fruit-game.js',import.meta.url).pathname],bundle:true,format:'cjs',platform:'node',external:['three'],write:false}).outputFiles[0].text;
 const ctx=vm.createContext({window:w,document:w.document,Path2D:class{},localStorage:w.localStorage,devicePixelRatio:1,innerWidth:390,performance:{now:()=>clock},ResizeObserver:class{observe(){}},requestAnimationFrame:fn=>(frame=fn,1),setTimeout,clearTimeout,console:{...console,error:(...a)=>errors.push(a),warn:(...a)=>warns.push(a)},require:id=>id==='three'?{...three,WebGLRenderer:Renderer}:req(id),module:{exports:{}}});vm.runInContext(code,ctx);const game=ctx.module.exports.mountFruitGame({onExit(){}}),tick=(n=1)=>{for(let i=0;i<n;i++){clock+=1000/60;frame(clock);}},state=()=>w.IntegroFruit.getState();
 try{
  game.show();tick(2);assert.deepEqual(errors,[]);assert.deepEqual(warns,[]);assert.equal(w.document.getElementById('fruitError').hidden,true);assert.equal(state().islandCount,20);assert(state().rigged);assert.equal(state().coins,1450);assert.equal(state().island,14);
  assert.match(w.document.querySelector('[data-island-number]').textContent,/15 \/ 20/);assert.equal(w.document.querySelectorAll('.fruit-game-logo').length,1);assert.equal(w.document.querySelectorAll('.fruit-hud .fruit-quest').length,1);
  w.document.getElementById('fruitMap').click();assert.equal(w.document.querySelectorAll('[data-sail]').length,20);assert(!w.document.querySelector('[data-sail="15"]').disabled);assert(w.document.querySelector('[data-sail="16"]').disabled);w.document.getElementById('fruitClose').click();
  const joy=w.document.getElementById('fruitJoystick'),jump=w.document.getElementById('fruitJump');joy.getBoundingClientRect=()=>({left:0,top:0,width:100,height:100});for(const e of[joy,jump])e.setPointerCapture=()=>{};
  const pointer=(el,type,id,x=50,y=50)=>{const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{pointerId:id,clientX:x,clientY:y,pointerType:'touch'});el.dispatchEvent(e);};
  pointer(joy,'pointerdown',1,50,10);tick(2);const start=state().player;pointer(jump,'pointerdown',2);tick(5);assert(state().player.y>.3);assert(Math.hypot(state().player.x-start.x,state().player.z-start.z)>.3);pointer(jump,'pointerup',2);const z=state().player.z;tick(3);assert.notEqual(state().player.z,z);pointer(joy,'pointerup',1);tick(50);
  w.document.getElementById('fruitPause').click();const paused=JSON.stringify(state().player);pointer(jump,'pointerdown',3);tick(10);assert.equal(JSON.stringify(state().player),paused);w.document.getElementById('fruitClose').click();
  game.hide();assert.equal(state().active,false);const saved=JSON.parse(w.localStorage.getItem(key));assert.equal(saved.claimed.length,20);assert.equal(saved.coins,1450);assert.deepEqual(errors,[]);assert.deepEqual(warns,[]);
 }finally{dom.window.close();}
});
