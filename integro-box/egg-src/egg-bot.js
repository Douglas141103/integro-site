// Automated input for the SAME EggAdventure used by the browser. No balance,
// speed, inventory, guardian, incubation or reward shortcuts are allowed here.
import {EggAdventure,NESTS,CORRAL,TREADMILL,MISSIONS,VEHICLES,ACCESSORIES,UPGRADES,distance} from './egg-rules.js';

export function createBot(saved,seed=1,now=()=>Date.now()) {
 const game=new EggAdventure(null,{now});
 if(saved){Object.assign(game,saved.game);game.now=now;}
 else game.save.rng=seed;
 return {game,brain:saved?.brain||{world:seed%3,nextDecision:0,trainTo:0,yaw:0}};
}
export function botSnapshot(bot){
 const {now,events,...game}=bot.game;
 return {game,brain:bot.brain};
}
export const encodeBot=bot=>JSON.stringify(botSnapshot(bot),(_,v)=>v===Infinity?'@Infinity':v===-Infinity?'@-Infinity':v);
export const decodeBot=text=>JSON.parse(text,(_,v)=>v==='@Infinity'?Infinity:v==='@-Infinity'?-Infinity:v);

function decide(bot){
 const g=bot.game,b=bot.brain;
 for(const m of MISSIONS)g.claimMission(m.id);
 g.claimDaily();
 if(g.inBase()&&g.carrying===null){
  // Keep productive pets, selling the least valuable only when the pen is full.
  if(g.save.creatures.length+g.save.eggs.length>=g.capacity()&&g.save.creatures.length){
   if(!g.buy('pen'))g.sell([...g.save.creatures].sort((a,c)=>g.saleValue(a.world,a.rarity,a.mutation,a.winterReward)-g.saleValue(c.world,c.rarity,c.mutation,c.winterReward))[0].id);
  }
  if(g.save.creatures.length&&!g.companion())g.equipPet(g.save.creatures[0].uid);
  // Save a reserve instead of buying an upgrade every tick.
  for(const id of ['boots','gloves','coach','incubator','energy','hydration']){
   if(g.save.upgrades[id]<UPGRADES[id].max&&g.spendable()>=g.itemPrice(id)*3){g.buy(id);break;}
  }
  for(const id of Object.keys(VEHICLES))if(!g.save.vehicles.includes(id)&&g.spendable()>=g.itemPrice(id)*2){g.buy(id);break;}
  if(g.save.delivered%5===0)for(const id of ['headphones','crown','goggles','cape']){
   if(!g.save.accessories.includes(id)&&g.spendable()>=g.itemPrice(id)*4){g.buy(id);break;}
  }
  if(g.save.delivered>0){
   const ready=NESTS.map((_,i)=>i).filter(i=>g.trainingAdvice(i).ready);
   b.world=ready.length?ready[Math.floor(g.random()*ready.length)]:0;
  }else b.world=0;
  b.trainTo=Math.min(600,g.recommendedTraining(b.world)+3);
  // Gradually unlock later worlds through actual treadmill time.
  if(g.save.delivered>0&&g.save.delivered%4===0)b.trainTo=Math.min(600,g.recommendedTraining(Math.min(19,b.world+1))+3);
 }
}
export function stepBot(bot,dt=.05){
 const g=bot.game,b=bot.brain;
 if(g.time>=b.nextDecision){decide(bot);b.nextDecision=g.time+2;}
 let target;
 if(g.mode==='train'){
  if(g.save.training>=b.trainTo)g.interact();
 }else if(g.carrying!==null){
  target=CORRAL;
  if(g.interaction().type==='deposit')g.interact();
 }else if(g.save.training<b.trainTo){
  target=TREADMILL;
  if(g.interaction().type==='train')g.interact();
 }else if(g.save.creatures.length+g.save.eggs.length>=g.capacity()){
  target=CORRAL;
 }else{
  target=NESTS[b.world];
  const action=g.interaction();
  if(action.type==='nest'&&action.world===b.world){
   const egg=[...g.availableEggs(b.world)].sort((a,c)=>g.saleValue(b.world,c.rarity,c.mutation)-g.saleValue(b.world,a.rarity,a.mutation))[0];
   if(egg)g.steal(egg.slot);
  }
 }
 let input={};
 if(target&&g.mode==='run'){
  // Use the clear central lane for long journeys, then approach the objective.
  const waypoint=Math.abs(target.z-g.player.z)>6?{x:0,z:target.z}:target;
  const x=waypoint.x-g.player.x,z=waypoint.z-g.player.z,len=Math.hypot(x,z);
  if(len>.35){
   const scale=Math.min(1,len/(g.speed()*dt*1.55));
   input={x:x/len*scale,z:z/len*scale,sprint:g.carrying!==null&&g.energy>15};
   b.yaw=Math.atan2(input.x,input.z);
   const h=g.hazard();if((h.active&&distance(g.player,h)<3)||g.time%2<.06)g.requestJump();
  }
 }
 g.update(dt,input);g.drainEvents();
}
export function botPose(bot){
 const g=bot.game,p=g.player;
 return {x:p.x,y:p.y,z:p.z,yaw:bot.brain.yaw,zone:'world',vehicle:g.save.vehicle||'',
  appearance:{accessories:g.save.equipped,companion:g.companion()},gesture:g.mode==='train'?'cheer':''};
}
export function advanceBot(bot,seconds){
 // Budget comes from server elapsed time; never fast-forward a missed interval.
 const budget=Math.max(0,Math.min(15,seconds));
 for(let t=0;t<budget-1e-8;t+=.05)stepBot(bot,Math.min(.05,budget-t));
 return botPose(bot);
}
