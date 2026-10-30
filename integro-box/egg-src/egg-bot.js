// Automated input for the SAME EggAdventure used by the browser. No balance,
// speed, inventory, guardian, incubation or reward shortcuts are allowed here.
import {EggAdventure,NESTS,CORRAL,TREADMILL,MISSIONS,VEHICLES,UPGRADES,distance} from './egg-rules.js';

export function createBot(saved,seed=1,now=()=>Date.now()) {
 const game=new EggAdventure(null,{now});
 if(saved){Object.assign(game,saved.game);game.now=now;}
 else game.save.rng=seed;
 const bot={game,brain:saved?.brain||{yaw:0}};
 if(bot.brain.version!==2){
  // Migrate only behaviour; leave earned balances, levels and inventory intact.
  if(game.mode==='train')game.interact();
  Object.assign(bot.brain,{version:2,rng:seed>>>0,world:0,nextDecision:0,activity:'explore',
   until:game.time+8+seed%19,nextTrain:game.time+20+seed%71,nextWander:0,
   lane:(seed%9-4)*.12,lastCaught:game.save.caught,trainUntil:0});
 }
 return bot;
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
 }
}
function random(b){b.rng=(Math.imul(b.rng,1664525)+1013904223)>>>0;return b.rng/4294967296;}
function explore(g,b,seconds=8+random(b)*14){
 b.activity='explore';b.until=g.time+seconds;b.nextWander=0;
}
function chooseActivity(g,b){
 const ready=NESTS.map((_,i)=>i).filter(i=>g.trainingAdvice(i).ready);
 const frontier=Math.min(19,(ready.at(-1)??0)+1);
 const needsTraining=g.save.training<g.recommendedTraining(frontier)+2;
 if(g.inBase()&&needsTraining&&g.time>=b.nextTrain){
  b.activity='train';b.until=g.time+12;b.trainUntil=0;return;
 }
 if(g.save.creatures.length+g.save.eggs.length>=g.capacity()){explore(g,b);return;}
 const worlds=ready.length?ready:[0];b.world=worlds[Math.floor(random(b)*worlds.length)];
 b.activity='hunt';b.until=g.time+35+distance(g.player,NESTS[b.world])/g.speed()*3;
}
export function stepBot(bot,dt=.05){
 const g=bot.game,b=bot.brain;
 if(g.time>=b.nextDecision){decide(bot);b.nextDecision=g.time+2;}
 if(g.save.caught!==b.lastCaught){b.lastCaught=g.save.caught;explore(g,b,5+random(b)*7);}
 let target;
 if(g.mode==='train'){
  if(g.time>=b.trainUntil){
   g.interact();b.nextTrain=g.time+45+random(b)*65;explore(g,b);
  }
 }else if(g.carrying!==null){
  target=CORRAL;
  if(g.interaction().type==='deposit'&&g.interact())explore(g,b,3+random(b)*7);
 }else{
  if(g.time>=b.until)chooseActivity(g,b);
  if(b.activity==='train'){
   target=TREADMILL;
   if(g.interaction().type==='train'&&g.interact()){
    // A fixed deadline, never extended by decisions, reloads or level targets.
    b.trainUntil=g.time+12+random(b)*13;b.until=b.trainUntil;
   }
  }else if(b.activity==='explore'){
   if(g.time>=b.nextWander){
    const spots=[{x:-7,z:20},{x:6,z:22},{x:0,z:7},{x:-5,z:15},{x:1,z:-8}];
    b.wander=spots[Math.floor(random(b)*spots.length)];b.nextWander=g.time+4+random(b)*5;
   }
   target=b.wander;
  }else{
   target=NESTS[b.world];
   const action=g.interaction();
   if(action.type==='nest'&&action.world===b.world){
    const eggs=[...g.availableEggs(b.world)].sort((a,c)=>g.saleValue(b.world,c.rarity,c.mutation)-g.saleValue(b.world,a.rarity,a.mutation));
    // Some explorers take the first available egg, others seek a valuable one.
    const egg=eggs[Math.floor(random(b)*Math.min(eggs.length,2))];
    if(egg)g.steal(egg.slot);
   }else if(action.type==='wait')explore(g,b,5+random(b)*5);
  }
 }

 let input={};
 if(target&&g.mode==='run'){
  // Use the clear central lane for long journeys, then approach the objective.
  const waypoint=Math.abs(target.z-g.player.z)>6?{x:b.lane,z:target.z}:target;
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
  appearance:{accessories:g.save.equipped,companion:g.companion()},activity:g.mode==='train'?'train':g.carrying!==null?'return':bot.brain.activity,gesture:''};
}
export function advanceBot(bot,seconds){
 // Budget comes from server elapsed time; never fast-forward a missed interval.
 const budget=Math.max(0,Math.min(15,seconds));
 for(let t=0;t<budget-1e-8;t+=.05)stepBot(bot,Math.min(.05,budget-t));
 return botPose(bot);
}
