import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,CORRAL,NESTS,cleanSave} from '../integro-box/egg-src/egg-rules.js';
import {hatchSeconds,formatHatchTime} from '../integro-box/egg-src/egg-incubation.js';
const advance=(g,seconds)=>{for(let i=0;i<Math.round(seconds/.05);i++)g.update(.05);};
const near=(a,b)=>assert(Math.abs(a-b)<1e-6,`${a} ≠ ${b}`);
function delivered(rarity){const g=new EggAdventure();Object.assign(g.player,NESTS[0]);g.nestEggs[0][0].rarity=rarity;assert(g.steal(0));Object.assign(g.player,CORRAL);assert.equal(g.interact(),'deposit');return g;}
test('rarity increases incubation, eggs cannot hatch early, and each hatches exactly once',()=>{
 for(const [rarity,seconds]of Object.entries({common:60,rare:180,epic:300,legendary:600,secret:1200})){
  const g=delivered(rarity);assert.equal(g.save.eggs[0].remaining,seconds);assert.equal(g.hatchRemaining(g.save.eggs[0]),seconds);
  advance(g,seconds-.1);assert.equal(g.save.creatures.length,0);advance(g,.15);assert.equal(g.save.eggs.length,0);assert.equal(g.save.creatures.length,1);assert.equal(g.save.creatures[0].rarity,rarity);advance(g,1);assert.equal(g.save.creatures.length,1);
 }
});
test('purchased incubator levels accelerate existing eggs without granting free levels',()=>{
 const g=delivered('secret');assert.equal(g.buy('incubator'),false);g.save.coins=100000;
 for(let level=1;level<=3;level++){
  const before=g.save.coins;assert(g.buy('incubator'));assert(g.save.coins<before);near(g.hatchRemaining(g.save.eggs[0]),g.save.eggs[0].remaining*(1-.2*level));
  const remaining=g.save.eggs[0].remaining;advance(g,1);near(remaining-g.save.eggs[0].remaining,1/(1-.2*level));
 }
 assert.equal(g.buy('incubator'),false);
});
test('purchased boost doubles incubation for its duration and handles a partial final frame',()=>{
 const g=delivered('rare');g.save.coins=100000;assert.equal(g.useAbility('hatchBoost'),false);assert(g.buy('hatchBoost'));assert(g.useAbility('hatchBoost'));assert.equal(g.save.abilityStock.hatchBoost,0);
 near(g.hatchRemaining(g.save.eggs[0]),120);advance(g,60);near(g.save.eggs[0].remaining,60);advance(g,59.9);assert.equal(g.save.creatures.length,0);advance(g,.15);assert.equal(g.save.creatures.length,1);
 const fractional=delivered('rare');fractional.save.activeAbilities.boost={id:'hatchBoost',remaining:.025};fractional.update(.05);near(fractional.save.eggs[0].remaining,179.925);
 near(hatchSeconds(1200,3,60),420);near(hatchSeconds(60,0,60),30);assert.equal(formatHatchTime(1200),'20:00');assert.equal(formatHatchTime(.1),'00:01');
});
test('new saves preserve long timers and legacy eggs retain their existing wait once',()=>{
 const g=delivered('secret');advance(g,13);let loaded=new EggAdventure(JSON.parse(JSON.stringify(g.save)));near(loaded.save.eggs[0].remaining,1187);near(loaded.hatchRemaining(loaded.save.eggs[0]),1187);
 for(let level=0;level<=3;level++){
  const legacy={...g.save,incubationVersion:undefined,upgrades:{...g.save.upgrades,incubator:level},eggs:[{...g.save.eggs[0],remaining:3.5}]};
  loaded=new EggAdventure(legacy);near(loaded.hatchRemaining(loaded.save.eggs[0]),3.5);const again=cleanSave(JSON.parse(JSON.stringify(loaded.save)));near(again.eggs[0].remaining,loaded.save.eggs[0].remaining);assert.equal(again.incubationVersion,1);
 }
});
