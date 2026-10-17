import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {BlueRun,PHYSICS,cleanProgress} from '../integro-box/blue-src/engine.mjs';
import {LEVELS,platformAt} from '../integro-box/blue-src/levels.mjs';
import {createBlue,outlineMaterial} from '../integro-box/blue-src/actor.mjs';
import {createWorld} from '../integro-box/blue-src/scene.mjs';
const step=(r,n,input={})=>{for(let i=0;i<n;i++)r.update(1/60,input);};

test('four authored levels, unique collectibles, stable unlocks and corrupt save recovery',()=>{
 assert.equal(LEVELS.length,4);assert.equal(LEVELS.flatMap(l=>l.seeds).length,9);assert.equal(new Set(LEVELS.flatMap(l=>l.seeds.map(s=>s.id))).size,9);
 assert.equal(cleanProgress('{broken').unlocked,1);assert.equal(cleanProgress({complete:[false,true,true],unlocked:999,selected:9}).unlocked,1);
 assert.deepEqual(cleanProgress({seeds:['0:1','0:1','x',null]}).seeds,['0:1']);
 const p=cleanProgress(null);for(let i=0;i<4;i++){const r=new BlueRun(i,p);r.win();r.sync(p);assert.equal(p.unlocked,Math.min(4,i+2));}
 assert.equal(cleanProgress(JSON.stringify(p)).complete.every(Boolean),true);
});
test('variable jump, buffered landing and coyote time are independent of visual pose sampling',()=>{
 const full=new BlueRun(),short=new BlueRun();let high=0,low=0;
 for(let i=0;i<65;i++){full.update(1/60,{jump:i<40});short.update(1/60,{jump:i<5});high=Math.max(high,full.player.y);low=Math.max(low,short.player.y);}
 assert(high>1.9&&high<2.3);assert(low<high*.65);assert.equal(full.player.y,0);
 const c=new BlueRun();c.player.x=24.2;c.player.grounded=false;c.player.platform=null;c.player.coyote=.06;c.update(1/60,{jump:true});assert(c.player.vy>9);
 const b=new BlueRun();b.player.y=.12;b.player.vy=-5;b.player.grounded=false;b.player.coyote=0;b.update(1/60,{jump:true});step(b,3,{jump:true});assert(b.player.vy>8,'buffered press survives landing');
});
test('bridges activate in range, expire, have cooldown and renew without resources',()=>{
 const r=new BlueRun(1);r.player.x=16;assert(r.pulse());assert.equal(r.bridges.a,4);assert(!r.pulse());assert(r.surfaces().some(s=>s.group==='a'));
 step(r,250);assert(!r.surfaces().some(s=>s.group==='a'));assert(r.pulse());assert.equal(r.bridges.a,4);
 r.cooldown=0;r.player.x=3;r.bridges={};r.pulse();assert.deepEqual(r.bridges,{});
 const a=new BlueRun(1,cleanProgress({assist:true}));a.player.x=16;a.pulse();assert.equal(a.bridges.a,6);
});
test('root passage requires crouching and standing up is blocked under the ceiling',()=>{
 const r=new BlueRun(2);r.player.x=29;r.player.y=0;step(r,60,{right:true});assert(r.player.x<30.3);
 step(r,42,{right:true,down:true});assert(r.player.x>31);assert(r.player.crouching);
 r.update(1/60,{});assert(r.player.crouching,'cannot stand through a root');
 step(r,170,{right:true,down:true});r.update(1/60,{});assert(r.player.x>35.8);assert(!r.player.crouching);
});
test('moving platforms carry Blue and checkpoint recovery preserves unique seeds',()=>{
 const r=new BlueRun(2),lift=r.level.platforms.find(p=>p.kind==='lift');const at=platformAt(lift,0);r.player.x=at.x;r.player.y=at.y;r.player.platform=lift.id;r.player.grounded=true;const before=r.player.x;step(r,20);assert(r.player.x>before+.5);assert(r.player.grounded);
 const p=cleanProgress(null),a=new BlueRun(0,p);a.player.x=104;a.player.y=0;a.update(1/60);assert(a.collected.has('0:2'));a.checkpoint=1;a.player.y=-10;a.update(1/60);assert.equal(a.player.x,88);assert.equal(a.player.health,3);a.sync(p);
 const loaded=new BlueRun(0,cleanProgress(JSON.stringify(p)),true);assert.equal(loaded.player.x,88);assert(loaded.collected.has('0:2'));assert.equal(p.seeds.filter(s=>s==='0:2').length,1);
});
test('Bront only accepts one pulse in each vulnerable cycle and requires three rounds',()=>{
 const r=new BlueRun(3);r.player.x=20;r.pulse();assert.equal(r.boss.hits,0);
 for(let hit=1;hit<=3;hit++){r.boss.phase='rest';r.boss.clock=4;r.boss.hitThisCycle=false;r.cooldown=0;r.pulse();assert.equal(r.boss.hits,hit);r.cooldown=0;r.pulse();assert.equal(r.boss.hits,hit);}
 assert.equal(r.status,'won');assert.equal(r.events.filter(e=>e.type==='won').length,1);
 const danger=new BlueRun(3);danger.player.x=21;danger.boss.phase='roll';danger.boss.clock=2;danger.update(1/60);assert.equal(danger.player.health,2);step(danger,5);assert.equal(danger.player.health,2);
});
test('56 working bones, finite deformations, normalized skin weights and complete shader normals',()=>{
 const actor=createBlue();assert.equal(actor.skeleton.bones.length,56);let vertices=0,poseTime=2;
 for(const state of [{vx:5,grounded:true},{vx:0,grounded:false,vy:8},{crouching:true,vx:1,grounded:true}]){
  actor.pose({x:0,y:0,vx:0,vy:0,facing:1,landed:0,invulnerable:0,...state},poseTime++);actor.root.updateMatrixWorld(true);
  actor.root.traverse(o=>{if(!o.isSkinnedMesh)return;vertices+=o.geometry.attributes.position.count;const w=o.geometry.attributes.skinWeight;for(let i=0;i<w.count;i++)assert(Math.abs(w.getX(i)+w.getY(i)+w.getZ(i)+w.getW(i)-1)<1e-5);assert(o.matrixWorld.elements.every(Number.isFinite));});
 }
 assert(vertices>1000);const m=outlineMaterial(),shader={vertexShader:'#include <skinning_vertex>'};m.onBeforeCompile(shader);assert(shader.vertexShader.includes('vec3 objectNormal = vec3(normal)'));m.dispose();actor.dispose();
});
test('every scene assembles and releases without network or graphics context',()=>{
 for(let i=0;i<4;i++){const run=new BlueRun(i),world=createWorld(run,{document:null});world.update(run,1);assert.equal(world.blue.skeleton.bones.length,56);assert(world.scene.children.length>=3);world.dispose();}
});
test('Blue is lazily registered before catalog and usage, and old links still enter the catalog',()=>{
 const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8'),gate=read('integro-box/gate.js');
 assert(gate.indexOf('installBlueWorld')<gate.indexOf('startUsage'));assert(gate.includes("'#blueworld'"));assert(read('integro-box/catalog.js').includes("'blue-world','Blue World','#playBlueWorld'"));
 assert(read('integro-box/blue-loader.js').includes("import('./blue-world.js?v="));assert(read('integro-box/usage.js').includes("blueApp:'blueworld'"));assert(read('integro-box/jogar.html').includes('blue-world.css?v='));
});
