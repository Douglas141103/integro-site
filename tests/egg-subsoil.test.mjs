import test from 'node:test';import assert from 'node:assert/strict';
import {EggAdventure,WORLDS,NESTS,constrainToCorridor} from '../integro-box/egg-src/egg-rules.js';
import {SUBSOIL,SUBSOIL_LAVA,inSubsoil,touchesSubsoilLava,emergenceOffset} from '../integro-box/egg-src/egg-subsoil.js';
import {HEAVEN,inHeaven,heavenPosition} from '../integro-box/egg-src/egg-heaven.js';
const at=(g,p)=>Object.assign(g.player,{x:0,y:0,vy:0,...p});
const walk=(g,target,done=()=>Math.hypot(g.player.x-target.x,g.player.z-target.z)<.05)=>{
 for(let i=0;i<10000&&!done();i++){const x=target.x-g.player.x,z=target.z-g.player.z,d=Math.hypot(x,z);g.update(Math.min(1/60,d/g.speed()),{x:x/d||0,z:z/d||0});assert(!g.emerging||done(),'safe path must stay clear of every lava pool');}assert(done(),'walk reached destination');
};
test('subsoil entry is explicit, grounded, empty-handed and separated from heaven, timed races and flight',()=>{
 const g=new EggAdventure();at(g,SUBSOIL.gate);g.raceMode=true;assert.equal(g.interaction().type,'walk');assert.equal(g.useSubsoilDoor(),false);g.raceMode=false;
 g.player.y=1;assert.equal(g.useSubsoilDoor(),false);g.player.y=0;g.carrying=0;assert.equal(g.useSubsoilDoor(),false);g.carrying=null;
 g.movePlayer(0,-500);assert(!inSubsoil(g.player));at(g,SUBSOIL.gate);assert.equal(g.interact(),'subsoilEnter');assert(g.inSubsoil());assert(!g.inHeaven());assert.equal(g.startJetFlight('flight'),false);
 g.movePlayer(0,500);assert.equal(g.player.z,SUBSOIL.start-.8);assert(g.inSubsoil());
 assert.equal(WORLDS.length,24);assert.equal(NESTS.length,24);assert.equal(inHeaven({z:HEAVEN.nest.z}),true);assert.equal(inHeaven({z:SUBSOIL.finish.z}),false);
 for(const x of [-100,100]){const p=constrainToCorridor({x,z:SUBSOIL.end-30,y:0});assert.equal(p.z,SUBSOIL.end+.8);assert(Math.abs(p.x)<=13.85);assert.deepEqual(heavenPosition(p),p);}
});
test('every lake and puddle ejects to the surface; high-speed sweeps cannot tunnel through lava',()=>{
 assert.equal(SUBSOIL_LAVA.length,20);
 for(const h of SUBSOIL_LAVA){const g=new EggAdventure();g.save.coins=120;g.save.training=600;g.save.supplies.shield=2;at(g,h);g.update(.016);assert(!g.inSubsoil());assert.equal(g.emerging,SUBSOIL.emergeSeconds);assert.equal(g.player.x,SUBSOIL.surface.x);assert.equal(g.player.z,SUBSOIL.surface.z);assert.equal(g.save.coins,120);assert.equal(g.save.training,600);assert.equal(g.save.supplies.shield,2);assert.match(g.drainEvents().at(-1).text,/lava/);}
 const h=SUBSOIL_LAVA[0],g=new EggAdventure();at(g,{x:h.x,z:h.z+12});g.movePlayer(0,-30);assert(g.emerging);assert(!g.inSubsoil());
});
test('airborne runners only return when touching lava; emergence locks movement and then restores it',()=>{
 const g=new EggAdventure(),h=SUBSOIL_LAVA[0];at(g,{...h,y:1.5});assert(!touchesSubsoilLava(g.player));g.update(.05);assert(g.inSubsoil());
 for(let i=0;i<80&&!g.emerging;i++)g.update(.02);assert(g.emerging);assert.equal(emergenceOffset(g.emerging),-2.4);assert(!g.jump());assert(!g.startJetFlight('flight'));assert.equal(g.interaction().label,'Surgindo do chão…');
 const x=g.player.x,z=g.player.z;for(let i=0;i<20;i++)g.update(.02,{x:1,z:-1});assert.equal(g.player.x,x);assert.equal(g.player.z,z);assert(emergenceOffset(g.emerging)>-2.4);assert(emergenceOffset(g.emerging)<0);
 while(g.emerging)g.update(.02,{x:1});assert.equal(emergenceOffset(g.emerging),0);g.update(.02,{x:1});assert(g.player.x>x);assert(g.jump());
});
test('the alternating safe route is traversable on foot from entrance to final exit without gaining or losing inventory',()=>{
 const g=new EggAdventure();g.save.training=80;g.save.coins=123;const inventory=JSON.stringify([g.save.eggs,g.save.creatures]);at(g,SUBSOIL.gate);g.interact();
 for(const h of SUBSOIL_LAVA.filter(h=>h.lake)){const x=-Math.sign(h.x)*7;walk(g,{x,z:h.z+9});walk(g,{x,z:h.z-9});}
 walk(g,SUBSOIL.finish,()=>!g.inSubsoil());assert(g.emerging);assert.equal(JSON.stringify([g.save.eggs,g.save.creatures]),inventory);assert.equal(g.save.coins,123);assert.match(g.drainEvents().at(-1).text,/Travessia concluída/);
 while(g.emerging)g.update(.05);at(g,SUBSOIL.gate);g.interact();walk(g,SUBSOIL.exit);assert.equal(g.interact(),'subsoilExit');assert(g.emerging);
});
