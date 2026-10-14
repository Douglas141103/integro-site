import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),C=require('../integro-box/bounce-core.js');
test('all 20 authored routes can be finished using ordinary controls',()=>{
 assert.equal(C.specs.length,20);assert.equal(new Set(C.specs.map(s=>s[1])).size,20);
 for(let n=0;n<20;n++){
  const r=new C.Run(n);let jump=0;const steps={},cleared=new Set(),launched=new Set();
  for(let k=0;k<180*120&&r.status==='playing';k++){
   const p=r.p,l=r.level,m=l.mountains.find(m=>!cleared.has(m.id)&&p.x>m.x-40&&p.x<m.x+m.w);let controls;
   if(m){
    if(p.x>m.block.x+m.block.w+45){cleared.add(m.id);controls={right:true};}
    else{
     if(p.grounded&&p.y>400)steps[m.id]=-1;
     const step=steps[m.id]??-1,target=step+1<m.leaves.length?m.leaves[step+1].x:m.block.x+m.block.w+65;
     const velocity=C.clamp((target-p.x)*4,-250,250);
     controls={left:p.vx>velocity+8,right:p.vx<velocity-8};jump=0;
    }
   }else{
    const danger=l.gaps.some(a=>a.x-p.x>0&&a.x-p.x<77)||l.hazards.some(a=>a.x-p.x>-8&&a.x-p.x<100);
    if(p.grounded&&danger&&jump<=0)jump=.44;
    const back=l.gates.some(g=>!g.open&&p.x>g.switchX+32&&p.x<g.x+45);
    controls={left:back,right:!back,jump:jump>0};jump-=1/120;
   }
   r.update(1/120,controls);
   for(const e of r.events)if(e.type==='spring'&&e.mountainId!==undefined){steps[e.mountainId]=e.step;launched.add(e.mountainId+':'+e.step);}
   r.events=[];
  }
  for(const m of r.level.mountains)for(const leaf of m.leaves)assert.ok(launched.has(m.id+':'+leaf.step),'climb every leaf in level '+(n+1));
  for(const c of r.level.checks.filter(c=>c.spawn))assert.ok(c.active,'summit checkpoint reached');
  assert.equal(r.status,'won','level '+(n+1));
  assert.equal(r.deaths,0,'clear takeoff and landing space in level '+(n+1));
 }
});
test('all routes are at least triple length and spikes avoid levers and return points',()=>{
 for(let i=0;i<20;i++){
  const l=C.makeLevel(i),originalSections=C.specs[i][1].split(',').length;
  assert.ok(l.width>=3*(940+originalSections*400));
  assert.ok(l.goal.x-l.spawn.x>=3*(740+originalSections*400-95));
  const spikes=l.hazards.filter(h=>h.kind==='spike');assert.ok(spikes.length>=6);
  assert.ok(l.checks.length>=4);
  for(const s of spikes){
   assert.ok(Number.isFinite(C.terrainY(l,s.x+s.w/2)));
   assert.ok(s.y<C.terrainY(l,s.x+s.w/2)-20,'tips stand above the ground');
   for(const g of l.gates)assert.ok(Math.abs(s.x+s.w/2-g.switchX)>170);
   for(const c of l.checks)assert.ok(Math.abs(s.x+s.w/2-c.x)>120);
  }
 }
});
test('a lever needs ball contact, opens only its linked gate, and stays pressed after respawn',()=>{
 const r=new C.Run(0),g=r.level.gates[0],second=r.level.gates[1];
 Object.assign(r.p,{x:g.switchX,y:g.switchY-60,vx:0,vy:0});r.update(1/120,{});
 assert.equal(g.open,false,'passing nearby must not press the lever');
 Object.assign(r.p,{x:g.leverX-25,y:g.leverY,vx:0,vy:0});r.update(1/120,{});
 assert.equal(g.open,true);assert.equal(second.open,false);assert.ok(g.lift>0&&g.lift<1);
 r.respawn();for(let i=0;i<60;i++)r.update(1/120,{});assert.equal(g.open,true);assert.equal(g.lift,1);
 Object.assign(r.p,{x:g.x-30,y:C.terrainY(r.level,g.x)-17,vx:0,vy:0});
 for(let i=0;i<45;i++)r.update(1/120,{right:true});assert.ok(r.p.x>g.x+g.w,'raised gate allows passage');
});
test('holding jump is higher than a tap, falling respawns and preserves collectibles',()=>{
 function leap(hold){const r=new C.Run(0);for(let i=0;i<60;i++)r.update(1/120,{});let top=r.p.y;for(let i=0;i<120;i++){r.update(1/120,{jump:i<hold});top=Math.min(top,r.p.y);}return top;}
 assert.ok(leap(55)<leap(3)-35);
 const r=new C.Run(0);r.p.x=r.level.drops[0].x;r.p.y=r.level.drops[0].y;r.update(1/120,{});assert.equal(r.collected,1);
 const cp=r.level.checks[0];r.p.x=cp.x;r.p.y=cp.y-17;r.update(1/120,{});assert.ok(cp.active);
 r.p.y=1000;r.update(1/120,{});assert.equal(r.status,'popping');assert.equal(r.deaths,0);assert.ok(r.events.some(e=>e.type==='pop'));
 const impact={x:r.p.x,y:r.p.y};for(let i=0;i<60;i++)r.update(1/120,{right:true,jump:true});
 assert.equal(r.status,'popping');assert.equal(r.p.x,impact.x);assert.equal(r.p.y,impact.y);assert.equal(r.deaths,0);
 for(let i=0;i<27;i++)r.update(1/120,{});assert.equal(r.status,'playing');assert.equal(r.pop,null);assert.equal(r.deaths,1);assert.equal(r.collected,1);assert.equal(r.p.x,r.check.x);assert.ok(r.invulnerable>0);
});
test('progress unlocks only completed levels and safely survives reloads',()=>{
 const p=C.freshProgress(),r=new C.Run(0);C.complete(p,r);assert.equal(p.unlocked,1);r.finished=true;r.crystals=3;r.collected=r.level.drops.length;C.complete(p,r);assert.equal(p.unlocked,2);assert.equal(p.stars[0],3);assert.deepEqual(C.parseProgress(JSON.stringify(p)),p);assert.equal(C.parseProgress('bad data').unlocked,1);
});

test('mountains block ground shortcuts, leaves launch automatically, and summit returns are safe',()=>{
 for(const index of [0,8,16]){
  const r=new C.Run(index),m=r.level.mountains[0],b=m.block;
  Object.assign(r.p,{x:b.x-30,y:413,vx:0,vy:0});
  for(let i=0;i<180;i++)r.update(1/120,{right:true});
  assert.ok(r.p.x<=b.x-r.p.r+.01,'cannot cross solid cliff on the ground');
  for(const leaf of m.leaves){
   Object.assign(r.p,{x:leaf.x,y:leaf.y-25,vx:0,vy:100});r.springCooldown=0;
   for(let i=0;i<10;i++)r.update(1/120,{});
   assert.ok(r.p.vy< -700,'leaf auto-launches without pressing jump');
  }
  const c=r.level.checks.find(c=>c.spawn);Object.assign(r.p,{x:c.x,y:c.y-17,vx:0,vy:0});r.update(1/120,{});r.respawn();
  for(let i=0;i<120;i++)r.update(1/120,{});
  assert.ok(Math.abs(r.p.y-(b.y-r.p.r))<.1,'return point rests on summit');
 }
});
