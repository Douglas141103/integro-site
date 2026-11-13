import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,WORLDS,NESTS,LENGTH,CORRAL,TREADMILL,TRACK_HALF_WIDTH,PLAYER_RADIUS,EDGE_OBSTACLES,corridorHalfWidth,constrainToCorridor} from '../integro-box/egg-src/egg-rules.js';
const legal=p=>assert(Math.abs(p.x)<=corridorHalfWidth(p.z)-PLAYER_RADIUS+1e-8,`outside track at ${p.x}, ${p.z}`);

test('all tracks contain running, sprinting and airborne players at maximum training',()=>{
 for(let world=0;world<WORLDS.filter(w=>!w.bonus).length;world++)for(const sign of[-1,1]){
  const g=new EggAdventure();g.save.training=600;g.save.upgrades.turbo=10;g.save.upgrades.boots=10;g.save.abilityStock.doubleJump=1;g.useAbility('doubleJump');
  g.player.z=-world*LENGTH-20;g.jump();
  for(let i=0;i<90;i++){if(i===8)g.jump();g.update(1/60,{x:sign,sprint:true});legal(g.player);}
  assert.equal(g.player.x,sign*(TRACK_HALF_WIDTH-PLAYER_RADIUS));assert.equal(g.player.y,0);assert.equal(g.moving,0,'standing against a wall stops the running gait');
 }
});

test('the base stays accessible and its funnel guides a diagonal return onto the track',()=>{
 const g=new EggAdventure();for(const point of[CORRAL,TREADMILL,{x:7,z:21}]){Object.assign(g.player,point);g.update(.016);assert.equal(g.player.x,point.x);assert.equal(g.player.z,point.z);}
 Object.assign(g.player,{x:9,z:9});for(let i=0;i<180;i++){g.update(1/60,{x:1,z:-1});legal(g.player);}assert(g.player.z<0);assert.equal(g.player.x,(TRACK_HALF_WIDTH-PLAYER_RADIUS));
 for(let z=3.01;z<8;z+=.01)assert(Math.abs(corridorHalfWidth(z)-corridorHalfWidth(z-.01))<.01);
 for(const n of NESTS){const p=constrainToCorridor({...n});assert.deepEqual(p,n,'every nest is reachable');}
});

test('race shoves and hazard knockback cannot bypass the track boundary',()=>{
 for(const sign of[-1,1]){
  const race=new EggAdventure();race.raceMode=true;Object.assign(race.player,{x:sign*(TRACK_HALF_WIDTH-PLAYER_RADIUS-.05),z:-20});assert(race.push({x:sign,z:0}));for(let i=0;i<80;i++){race.update(1/60);legal(race.player);}assert.equal(race.player.x,sign*(TRACK_HALF_WIDTH-PLAYER_RADIUS));
  const hazard=new EggAdventure();Object.assign(hazard.player,{x:0,z:-70});hazard.updateHazard=()=>{hazard.player.x=sign*(TRACK_HALF_WIDTH+3);};hazard.update(.05);assert.equal(hazard.player.x,sign*(TRACK_HALF_WIDTH-PLAYER_RADIUS));
 }
});

test('guardians stay inside the same corridor during pursuit, avoidance and return',()=>{
 const g=new EggAdventure();for(let i=0;i<WORLDS.length;i++){
  const enemy=g.guardians[i];for(let f=0;f<100;f++){g.moveGuardian(enemy,{x:f<50?20:-20,z:NESTS[i].z+Math.sin(f/10)*15},40,.05);assert(Math.abs(enemy.x)<=corridorHalfWidth(enemy.z)-.43+1e-8);}
  const home={x:NESTS[i].x,z:NESTS[i].z-2.5};for(let f=0;f<400;f++)g.moveGuardian(enemy,home,12,.05);assert(Math.hypot(enemy.x-home.x,enemy.z-home.z)<.15,'guardians can return to their nest');
 }
});

test('both shoulders of every track stop a grounded max-speed runner in either direction',()=>{
 for(let world=0;world<WORLDS.filter(w=>!w.bonus).length;world++)for(const side of[-1,1])for(const direction of[-1,1]){
  const g=new EggAdventure();g.save.training=600;g.save.upgrades.turbo=10;g.save.upgrades.boots=10;g.save.abilityStock.rush=1;g.useAbility('rush');
  const barrierZ=-world*LENGTH-6;
  Object.assign(g.player,{x:side*(TRACK_HALF_WIDTH-PLAYER_RADIUS),z:barrierZ-direction*3});
  for(let step=0;step<20;step++){g.update(.05,{z:direction,sprint:true});legal(g.player);}
  assert(direction*(g.player.z-barrierZ)<0,'cannot tunnel past or squeeze between barricade and fence');
  assert(g.drainEvents().some(e=>e.type==='obstacle'));
 }
});

test('edge pebbles allow an inward detour, a deliberate jump and access to every nest',()=>{
 for(let world=0;world<WORLDS.filter(w=>!w.bonus).length;world++)for(const side of[-1,1]){
  const g=new EggAdventure(),z=-world*LENGTH-6;
  Object.assign(g.player,{x:side*(TRACK_HALF_WIDTH-PLAYER_RADIUS),z:z+3});g.movePlayer(0,-6);assert(g.player.z>z);
  g.movePlayer(-side*2.2,0);g.movePlayer(0,-6);assert(g.player.z<z-2,'a route through the middle remains open');
  Object.assign(g.player,{x:side*(TRACK_HALF_WIDTH-PLAYER_RADIUS),z:z+3,y:.6});g.movePlayer(0,-6);assert(g.player.z<z-2,'jumping above the visible barrier still works');
  const n=NESTS[world];Object.assign(g.player,{x:n.x*.55,z:n.z,y:0});g.movePlayer(0,0);assert.equal(g.interaction()?.type,'nest');assert.equal(g.interaction()?.world,world);
 }
});

test('a normal unupgraded jump clears every shoulder pebble in both directions',()=>{
 for(const o of EDGE_OBSTACLES)for(const direction of [-1,1]){
  const g=new EggAdventure();Object.assign(g.player,{x:o.x,z:o.z-direction*1.9});
  assert.equal(g.save.upgrades.springs,0);assert(g.requestJump());
  for(let i=0;i<38;i++)g.update(1/60,{z:direction});
  assert(direction*(g.player.z-o.z)>o.r+PLAYER_RADIUS,'normal jump clears the entire stone');
  assert(!g.drainEvents().some(e=>e.type==='obstacle'),'no invisible tall collision remains');
 }
});
test('a player carrying an egg can jump over a pebble with no spring upgrade',()=>{
 const g=new EggAdventure();Object.assign(g.player,NESTS[0]);assert(g.steal(0));
 const o=EDGE_OBSTACLES.find(o=>o.world===0);Object.assign(g.player,{x:o.x,z:o.z-1.9});
 assert(g.requestJump());for(let i=0;i<38;i++)g.update(1/60,{z:1});
 assert(g.player.z>o.z+o.r+PLAYER_RADIUS);assert.equal(g.carrying,0);
 assert(!g.drainEvents().some(e=>e.type==='obstacle'));
});


test('the track is exactly three times wider while world lengths and base destinations stay unchanged',()=>{
 assert.equal(TRACK_HALF_WIDTH*2,28.5);assert.equal(LENGTH,48);
 for(let world=0;world<WORLDS.filter(w=>!w.bonus).length;world++)for(const side of [-1,1]){
  const g=new EggAdventure();Object.assign(g.player,{x:side*12,z:-world*LENGTH-21});
  g.movePlayer(side,0);assert.equal(g.player.x,side*13);legal(g.player);
 }
 assert.equal(corridorHalfWidth(14),9.4);
});
