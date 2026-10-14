import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),C=require('../integro-box/bounce-core.js');
test('all 20 authored routes can be finished using ordinary controls',()=>{
 assert.equal(C.specs.length,20);assert.equal(new Set(C.specs.map(s=>s[1])).size,20);
 for(let n=0;n<20;n++){
  const r=new C.Run(n);let jump=0;
  for(let k=0;k<120*120&&r.status==='playing';k++){
   const p=r.p,l=r.level;const danger=l.gaps.some(a=>a.x-p.x>0&&a.x-p.x<77)||l.hazards.some(a=>a.x-p.x>-8&&a.x-p.x<100);
   if(p.grounded&&danger&&jump<=0)jump=.44;
   const back=l.gates.some(g=>!g.open&&p.x>g.switchX+32&&p.x<g.x+45);
   r.update(1/120,{left:back,right:!back,jump:jump>0});jump-=1/120;r.events=[];
  }
  assert.equal(r.status,'won','level '+(n+1));
 }
});
test('holding jump is higher than a tap, falling respawns and preserves collectibles',()=>{
 function leap(hold){const r=new C.Run(0);for(let i=0;i<60;i++)r.update(1/120,{});let top=r.p.y;for(let i=0;i<120;i++){r.update(1/120,{jump:i<hold});top=Math.min(top,r.p.y);}return top;}
 assert.ok(leap(55)<leap(3)-35);
 const r=new C.Run(0);r.p.x=r.level.drops[0].x;r.p.y=r.level.drops[0].y;r.update(1/120,{});assert.equal(r.collected,1);
 const cp=r.level.checks[0];r.p.x=cp.x;r.p.y=cp.y-17;r.update(1/120,{});assert.ok(cp.active);
 r.p.y=1000;r.update(1/120,{});assert.equal(r.deaths,1);assert.equal(r.collected,1);assert.equal(r.p.x,r.check.x);assert.ok(r.invulnerable>0);
});
test('progress unlocks only completed levels and safely survives reloads',()=>{
 const p=C.freshProgress(),r=new C.Run(0);C.complete(p,r);assert.equal(p.unlocked,1);r.finished=true;r.crystals=3;r.collected=r.level.drops.length;C.complete(p,r);assert.equal(p.unlocked,2);assert.equal(p.stars[0],3);assert.deepEqual(C.parseProgress(JSON.stringify(p)),p);assert.equal(C.parseProgress('bad data').unlocked,1);
});
