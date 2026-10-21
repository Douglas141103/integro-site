import test from 'node:test';
import assert from 'node:assert/strict';
import {createEggPush,PUSH_RULES} from '../integro-box/egg-push.js';
import {EggAdventure,TRACK_HALF_WIDTH,PLAYER_RADIUS} from '../integro-box/egg-src/egg-rules.js';
function fixture(){
 let clock=100000,serial=0;const channels=[],sent=[],players=[1,2,3].map(slot=>({slot,state:{x:0,y:0,z:-10,yaw:0,zone:'world'}}));
 const race={id:'race-1',starts:new Date(clock-1000).toISOString(),results:{}};
 const client={channel(topic){const c={topic,handler:null,status:null,on(_,__,fn){this.handler=fn;return this},subscribe(fn){this.status=fn;fn('SUBSCRIBED');return this},async send(event){sent.push(event.payload);for(const other of [...channels])if(other!==this&&other.topic===topic)other.handler?.(event);return 'ok'}};channels.push(c);return c;},async removeChannel(c){const index=channels.indexOf(c);if(index>=0)channels.splice(index,1)}};
 const users=players.map(({slot})=>{const game=new EggAdventure();game.raceMode=true;Object.assign(game.player,{x:(slot-1)*2.5,z:-10});const u={slot,game,playing:true,healthy:true,room:true,effects:[],shown:[]};const adapter={state:()=>({...game.player,yaw:0,zone:'world'}),setPeers:p=>u.shown=p};u.api=createEggPush({client,getRoom:()=>u.room?{id:'room-1',game:'egg',slot,players}:null,getRace:()=>u.normal?null:race,getRuntime:()=>({active:()=>true,playing:()=>u.playing,push:v=>game.push(v)}),getAdapter:()=>adapter,healthy:()=>u.healthy,now:()=>clock,id:()=>String(++serial),onEffect:e=>u.effects.push(e)});return u;});
 function tick(ms=150){clock+=ms;for(const u of users)u.api.tick();}
 for(const u of users)u.api.tick();tick();tick();
 return{users,race,tick,sent,channels,now:()=>clock,emit(payload){for(const c of [...channels])c.handler?.({payload})}};
}
test('two runners exchange a shove, show confirmation, and physically recover inside the track',async()=>{
 const f=fixture(),[a,b]=f.users;assert.equal(a.api.state().target,2);assert.equal(a.api.state().ready,true);
 const original=JSON.stringify(b.game.save);assert.equal(await a.api.push(),true);assert.equal(b.effects[0].kind,'received');assert.equal(a.effects[0].kind,'sent');assert.equal(JSON.stringify(b.game.save),original,'shove does not charge money or change inventory');
 const before=b.game.player.x;for(let i=0;i<40;i++)b.game.update(.02,{});assert.ok(b.game.player.x>before+1.5);assert.equal(b.game.player.x,TRACK_HALF_WIDTH-PLAYER_RADIUS,'shove stops at the physical track edge');assert.ok(b.game.player.y>=0);assert.equal(b.game.pushVelocity,null);
 assert.equal(await a.api.push(),false,'button cooldown prevents repeated shoves');assert.ok(a.api.state().remaining>2000);
});
test('victim protection, replay detection and sender cooldown reject repeated impacts',async()=>{
 const f=fixture(),[a,b,c]=f.users;await a.api.push();const event=f.sent.find(e=>e.kind==='shove');f.emit(event);assert.equal(b.effects.length,1);
 await c.api.push();assert.equal(b.effects.length,1,'third runner cannot chain hits during protection');
 f.tick(1400);b.game.time+=1.4;f.emit({...event,id:'new',at:f.now()});assert.equal(b.effects.length,1,'sender is still cooling down');
 f.tick(1700);b.game.time+=1.7;f.emit({...event,at:f.now()});assert.equal(b.effects.length,1,'same request cannot be replayed');
});
test('shoves are rejected outside this race, at distance, while paused, at distance across the base and after finishing',async()=>{
 const f=fixture(),[a,b]=f.users;const event={v:2,kind:'shove',room:'room-1',scope:f.race.id,from:1,to:2,id:'request',at:f.now()};
 for(const patch of [{scope:'old-race'},{from:4},{to:4},{at:0},{from:2},{id:'x'.repeat(81)}])f.emit({...event,...patch});assert.equal(b.effects.length,0);
 b.playing=false;f.tick();f.emit({...event,at:f.now()});assert.equal(b.effects.length,0);
 b.playing=true;b.game.player.x=8;f.tick();assert.equal(a.api.state().target,null);f.emit({...event,at:f.now()});assert.equal(b.effects.length,0);
 b.game.player.x=2.5;b.game.player.z=15;f.tick();f.emit({...event,at:f.now()});assert.equal(b.effects.length,0);
 b.game.player.z=-10;f.race.results[2]={finished:42};f.tick();f.emit({...event,at:f.now()});assert.equal(b.effects.length,0);assert.equal(b.api.state().visible,false);
});
test('countdown, stale peers, network loss, leaving and a new race cannot leak old actions',async()=>{
 const f=fixture(),[a,b]=f.users;f.race.starts=new Date(f.now()+3000).toISOString();f.tick();assert.equal(a.api.state().ready,false);assert.equal(a.api.state().visible,false);
 f.tick(3100);f.tick();assert.equal(a.api.state().ready,true);
 a.healthy=false;f.tick();assert.equal(a.api.state().ready,false);assert.equal(a.api.state().connected,false);
 a.healthy=true;f.tick();f.tick();assert.equal(a.api.state().ready,true);
 b.room=false;f.tick();f.tick(PUSH_RULES.poseAge+10);assert.equal(a.api.state().target,null);
 f.race.id='race-2';f.tick();f.emit({v:2,kind:'shove',room:'room-1',scope:'race-1',from:2,to:1,id:'old',at:f.now()});assert.equal(a.effects.length,0);
 for(const u of f.users)u.api.stop();assert.equal(f.channels.length,0);
});
test('peer coordinates are bounded and extrapolate gently for running players',()=>{
 const f=fixture(),[a]=f.users;const pose={v:2,kind:'pose',room:'room-1',scope:f.race.id,from:2,at:f.now(),seq:999,playing:true,x:Infinity,y:0,z:-10,yaw:0};
 f.emit(pose);assert.ok(a.api.peers([{slot:2,state:{x:0,y:0,z:0,yaw:0}}])[0].state.x<10);
 f.emit({...pose,x:1,z:-10000});assert.ok(a.api.peers([{slot:2,state:{x:0,y:0,z:0,yaw:0}}])[0].state.z>-580);
 const g=new EggAdventure();assert.equal(g.push({x:1,z:0}),false,'solo play cannot receive a race shove');g.raceMode=true;assert.equal(g.push({x:NaN,z:0}),false);g.player.x=8.9;g.push({x:1,z:0});for(let i=0;i<30;i++)g.update(.02,{});assert.ok(g.player.x<=9);g.clearPush();assert.equal(g.pushVelocity,null);
});

test('ordinary rooms allow pushing in the corral and retain bounded physics',async()=>{
 const f=fixture(),[a,b]=f.users;for(const u of f.users){u.normal=true;u.game.raceMode=false;u.game.roomMode=true;u.game.player.z=14;}f.tick();f.tick();
 assert.equal(a.api.state().racing,false);assert.equal(a.api.state().ready,true);assert.equal(await a.api.push(),true);assert.equal(b.effects[0].kind,'received');
 const before=b.game.player.x;for(let i=0;i<30;i++)b.game.update(.02,{});assert.ok(b.game.player.x>before);assert.ok(b.game.player.x<=9);
});
test('a trap drops the carried egg intact and permits recovery without duplicating nest stock',()=>{
 const g=new EggAdventure();g.player.x=3.2;g.player.z=-25;assert.equal(g.steal(0),true);const e={...g.carriedEgg};assert.equal(g.dropCarriedEgg(),true);assert.equal(g.carrying,null);assert.equal(g.droppedEgg.rarity,e.rarity);assert.equal(g.nestEggs[0][0].availableAt,Infinity);
 assert.notEqual(g.interaction().type,'pickup');g.time+=2;assert.equal(g.interact(),'pickup');assert.equal(g.carriedEgg.world,e.world);assert.equal(g.droppedEgg,null);assert.equal(g.dropCarriedEgg(),true);g.clearDroppedEgg();assert.equal(g.droppedEgg,null);assert.equal(g.nestEggs[0][0].availableAt,g.time+5);
});

test('fast peer movement retains server appearance and ignores cosmetics claimed in broadcasts',()=>{
 const f=fixture(),[a]=f.users,appearance={premium:{head:'egg_station_head'},accessories:{back:'wings'}};
 const peer={slot:2,state:{x:0,y:0,z:-10,yaw:0,appearance}};
 f.emit({v:2,kind:'pose',room:'room-1',scope:f.race.id,from:2,at:f.now(),seq:999,playing:true,x:1,y:0,z:-10,yaw:0,appearance:{premium:{head:'egg_royal_head'}}});
 const rendered=a.api.peers([peer])[0];assert.equal(rendered.state.appearance,appearance);assert.notEqual(rendered.state.x,0);
 for(const u of f.users)u.api.stop();
});
