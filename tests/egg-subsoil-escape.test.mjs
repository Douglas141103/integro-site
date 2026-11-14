import test from 'node:test';import assert from 'node:assert/strict';
import {EggAdventure,CORRAL,NESTS} from '../integro-box/egg-src/egg-rules.js';
import {SUBSOIL,SUBSOIL_ESCAPE,SUBSOIL_LAVA,subsoilEscapeView,touchesSubsoilLava} from '../integro-box/egg-src/egg-subsoil.js';
const at=(g,p)=>Object.assign(g.player,{x:0,y:0,vy:0,...p});
const tick=(g,s,input={})=>{for(let t=0;t<s-1e-9;t+=.01)g.update(.01,input);};
const start=(side=1)=>{const g=new EggAdventure();g.save.training=600;g.random=()=>side<0?.1:.9;at(g,SUBSOIL.nest);assert(g.steal(0));return g;};
const reveal=g=>{tick(g,1.5);at(g,{x:-7,z:-1802});g.update(.01);assert.equal(g.subsoilEscape.phase,'reveal');};
test('stealing triggers one sinking sequence and hides both original exits until a safe side door is ready',()=>{
 for(const side of [-1,1]){const g=start(side);assert.equal(g.subsoilEscape.phase,'sink');const e=g.subsoilEscape;assert.equal(e.door.x,side*10);const player={...g.player};tick(g,.6,{x:1,z:1,sprint:true});assert.deepEqual(g.player,player);assert(g.guardians[24].y<0);assert(subsoilEscapeView(e).doorY<0);assert(!g.jump());assert(!g.requestJump());assert(!g.dropCarriedEgg());g.movePlayer(100,100);assert.deepEqual(g.player,player);assert(!g.startSubsoilEscape());assert.equal(g.subsoilEscape,e);
  tick(g,.9);assert.equal(e.phase,'return');assert(!subsoilEscapeView(e).doorVisible);assert.equal(g.guardians[24].y,-7);for(const p of [SUBSOIL.finish,SUBSOIL.exit]){at(g,p);assert.notEqual(g.subsoilAction()?.type,'subsoilExit');assert(!g.useSubsoilDoor());}at(g,{x:-7,z:-1802});g.update(.01);assert.equal(e.phase,'reveal');assert(SUBSOIL_LAVA.some(h=>h.lake&&h.x===e.spawn.x&&h.z===e.spawn.z));
  for(let time=0;time<7.2;time+=.05)assert(!touchesSubsoilLava({...e.door,y:0},.4,time),'lateral portal is safe at every lava size');
 }
});
test('guardian emerges from a lava lake, waits for 3 2 1, then chases; only the new portal returns the egg',()=>{
 const g=start();reveal(g);const e=g.subsoilEscape;tick(g,.7);assert(g.guardians[24].y<0);tick(g,.92);assert.equal(e.phase,'countdown');const still={...g.player},guardian={...g.guardians[24]};assert.equal(subsoilEscapeView(e).countdown,3);
 tick(g,1,{x:1,z:1});assert.equal(subsoilEscapeView(e).countdown,2);tick(g,1,{x:1,z:1});assert.equal(subsoilEscapeView(e).countdown,1);assert.deepEqual(g.player,still);assert.equal(g.guardians[24].x,guardian.x);assert.equal(g.guardians[24].z,guardian.z);assert.equal(g.guardians[24].y,0);
 tick(g,1);assert.equal(e.phase,'chase');assert(g.guardians[24].z>guardian.z);const egg={...g.carriedEgg};at(g,e.door);g.update(.01);assert(!g.inSubsoil());assert.equal(g.subsoilEscape,null);assert.deepEqual(g.carriedEgg,egg);tick(g,1.2);at(g,CORRAL);assert.equal(g.interact(),'deposit');assert.equal(g.save.eggs.length,1);
});
test('lava, capture and race interruption clean up the sequence; other worlds retain their chase',()=>{
 const lava=start();tick(lava,1.5);at(lava,SUBSOIL_LAVA[0]);lava.update(.01);assert(!lava.inSubsoil());assert.equal(lava.subsoilEscape,null);assert.equal(lava.carrying,null);
 const caught=start();reveal(caught);tick(caught,4.7);caught.catchEgg(24);assert.equal(caught.subsoilEscape,null);assert.equal(caught.carrying,null);
 const raced=start();raced.raceMode=true;raced.update(.01);assert.equal(raced.subsoilEscape,null);
 const normal=new EggAdventure();at(normal,NESTS[0]);assert(normal.steal(0));assert.equal(normal.guardians[0].state,'chase');assert.equal(normal.subsoilEscape,null);
});
test('paused game time freezes the cinematic and countdown and dropped eggs cannot restart them',()=>{
 const g=start();reveal(g);tick(g,1.7);const e=g.subsoilEscape,elapsed=e.elapsed;for(let i=0;i<100;i++)g.update(0);assert.equal(e.elapsed,elapsed);tick(g,3);assert.equal(e.phase,'chase');assert(g.dropCarriedEgg());tick(g,1.6);assert.equal(g.interact(),'pickup');assert.equal(g.subsoilEscape,e);assert.equal(e.phase,'chase');
});
