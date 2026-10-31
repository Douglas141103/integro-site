// Headless inputs for the rules used by the playable catalog. Every wallet and
// save belongs to its game; changing games never advances the Egg simulation.
import {prepareBotSession,advanceBot,botPose,botSnapshot,pushBot,decodeBot} from './egg-bot.js';
import * as Rush from '../rush-src/rules.mjs';
import {SnakeRun,DIRS} from '../gosnake-src/gosnake-rules.js';
import {FruitAdventure,ISLANDS} from '../fruit-src/fruit-rules.mjs';
import {RhythmRun,generateSong,stages} from '../interdance-src/engine.mjs';
import * as Tower from '../tower-src/rules.mjs';
import {makeSimulation} from '../tower-src/physics.mjs';
import * as Shark from '../shark-src/rules.mjs';
import {steerFish} from '../shark-src/motion.mjs';
import {initialState,tick} from '../descubra-src/rules.mjs';
import {enableWalking} from '../descubra-src/world.mjs';
import '../robot-core.js';
import Bounce from '../bounce-core.js';
import {FruitCutRun,InterBallRun,BairroRun,SharedCraftRun,streetHouses,streetKey,streetCar} from './legacy-bot-rules.mjs';
import {makeMath,wordBanks,memoryBanks} from './classic-bot-rules.mjs';
export {decodeBot};
export const BOT_GAMES=['egg','bairro','craft','descubra','tower','shark','rush','bounce','fruit','gosnake','fuitcort','interball','interdance','house','math','words','robot','memory'];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const cleanRuntime=g=>Object.fromEntries(Object.entries(g).filter(([k,v])=>!['events','rng','now','arena','song','cells','base','dirty','features'].includes(k)&&typeof v!=='function'));
function random(s){s.seed=(Math.imul(s.seed,1664525)+1013904223)>>>0;return s.seed/4294967296;}
function direction(a,b){const d=Math.hypot(b.x-a.x,b.z-a.z);return d>.15?{x:(b.x-a.x)/d,z:(b.z-a.z)/d}:{x:0,z:0};}
function snakeDirection(g){
 const start=g.snake[0],seen=new Set([start.x+','+start.z]),q=[{...start,first:null}];
 for(let i=0;i<q.length;i++){const p=q[i];if(g.fruits.some(f=>f.x===p.x&&f.z===p.z)&&p.first!==null)return p.first;
  for(let d=0;d<4;d++){if(i===0&&(d+2)%4===g.direction)continue;const n={x:p.x+DIRS[d][0],z:p.z+DIRS[d][1]},key=n.x+','+n.z;if(seen.has(key)||g.blocked(n,g.snake.slice(0,-1)))continue;seen.add(key);q.push({...n,first:p.first??d});}}
 return [0,1,2,3].find(d=>(d+2)%4!==g.direction&&!g.blocked({x:start.x+DIRS[d][0],z:start.z+DIRS[d][1]},g.snake.slice(0,-1)))??g.direction;
}
function restoreGame(key,s){const r=s.runtime;
 switch(key){
  case 'rush':s.progress??=Rush.fresh();return Rush.restore(r,s.progress)||new Rush.Run(s.level%15);
  case 'bounce':{const g=new Bounce.Run(s.level%20);if(r)Object.assign(g,r);return g;}
  case 'gosnake':{const g=new SnakeRun(s.level%15,s.seed);if(r)Object.assign(g,r);if(g.status==='ready')g.status='playing';return g;}
  case 'fruit':return Object.assign(new FruitAdventure(r?.save),r||{});
  case 'bairro':return Object.assign(new BairroRun(r?.save),r||{});
  case 'craft':return new SharedCraftRun(r?{...r,edits:[]}:undefined);
  case 'fuitcort':return Object.assign(new FruitCutRun('classic',()=>random(s)),r||{});
  case 'interball':return Object.assign(new InterBallRun({level:s.level%12}),r||{});
  case 'interdance':{const song=generateSong(stages[s.level%stages.length]);const g=new RhythmRun(song);if(r)Object.assign(g,r,{held:new Set(r.held)});return g;}
  case 'descubra':return r||enableWalking(initialState(0));
  default:return r||{};
 }
}
export function prepareParticipant(saved,id,session,now=()=>Date.now()){
 const root=saved?.version===2?saved:{version:2,egg:saved||null,games:{}};
 const key=BOT_GAMES.includes(session?.game)?session.game:'egg';
 root.games??={};
 const s=root.games[key]??={seed:id*7919,seconds:0,actions:0,rounds:0,level:0,next:2+id%7,runtime:null};
 const changed=root.session!==session?.number;root.session=session?.number||0;root.active=key;
 const bot={root,key,s,id,session,now,edits:[],pose:{x:0,y:0,z:0,yaw:0,zone:'world',activity:'play'},game:null};
 if(key==='egg')bot.game=prepareBotSession(root.egg,id*7919,session,now);
 else{bot.game=restoreGame(key,s);if(key==='craft'){
   if(changed)bot.game.home();
   bot.game.creative=true; // Public Craft uses the same creative shared world.
   for(const [k,v]of Object.entries(session?.world||{})){const [x,y,z]=k.split(',').map(Number);bot.game.set(x,y,z,v);}
  }
  if(changed&&key==='bairro'){bot.game.path=[];bot.game.destination=null;bot.game.pending=null;}
 }
 return bot;
}
function nextRound(b,won=false){const {s,key}=b;s.rounds++;if(won)s.level++;s.runtime=null;s.next=s.seconds+3+random(s)*8;b.game=restoreGame(key,s);}
function puzzleStep(b){const {key,s,game:g}=b;if(s.seconds<s.next)return;s.next=s.seconds+2+random(s)*5;s.actions++;
 if(key==='robot'){
  const core=globalThis.BoxRobotCore,map=core.LEVELS[s.level%core.LEVELS.length];g.commands??=[];const solution=core.shortestPath(map);g.commands.push(solution[g.commands.length]);g.result=core.simulate(map,g.commands);if(g.result.status==='won'){s.best??={};s.best[map.id]={steps:g.commands.length,stars:core.starsFor(map,g.commands.length)};nextRound(b,true);}
 }else if(key==='math'){
  if(!g.question){g.question=makeMath(s.level%3);return;}const q=g.question;g.answer=random(s)<.88?q.answer:q.answer+1;s.correct=(s.correct||0)+(g.answer===q.answer?1:0);g.question=null;if(s.actions%16===0)nextRound(b,true);
 }else if(key==='words'){
  if(!g.word){g.word=wordBanks[s.level%3][Math.floor(random(s)*wordBanks[s.level%3].length)][0];g.picked='';return;}g.picked+=g.word[g.picked.length];if(g.picked===g.word){s.correct=(s.correct||0)+1;nextRound(b,true);}
 }else if(key==='memory'){
  g.tiles??=memoryBanks[s.level%3].flatMap((pair,i)=>pair.map(text=>({text,pair:i}))).sort(()=>random(s)-.5);g.seen??={};g.matched??=[];g.flipped??=[];
  if(g.flipped.length===2){const[a,c]=g.flipped;if(g.tiles[a].pair===g.tiles[c].pair)g.matched.push(a,c);g.flipped=[];if(g.matched.length===12){nextRound(b,true);return;}}
  const available=g.tiles.map((_,i)=>i).filter(i=>!g.matched.includes(i)&&!g.flipped.includes(i));const known=available.find(i=>g.flipped.length&&g.seen[i]===g.tiles[g.flipped[0]].pair);
  const index=known??available[Math.floor(random(s)*available.length)];g.flipped.push(index);g.seen[index]=g.tiles[index].pair;
 }else if(key==='house'){
  g.items??=[...Object.entries(streetHouses).flatMap(([house,rooms],h)=>[...Object.values(rooms).flat(),streetKey].map(item=>({...item,house,h}))),...streetCar.map(item=>({...item,house:'car',h:0}))];g.index??=0;g.found??=[];g.points??=0;
  const item=g.items[g.index];if(!item){nextRound(b);return;}
  if(!g.open){g.open=item.cover||'visible';return;}const a=item.id!=='key'&&item.h?item.op==='+'?Math.min(10-item.b,item.a+item.h):Math.min(10,item.a+item.h):item.a;
  const answer=item.op==='+'?a+item.b:a-item.b;g.answer=random(s)<.9?answer:answer+1;if(g.answer===answer){g.points+=Math.max(0,50-10*(g.mistakes||0));g.found.push(item.house+':'+item.id);g.index++;g.open=null;g.mistakes=0;}else g.mistakes=(g.mistakes||0)+1;
 }else if(key==='tower'){
  s.progress??=Tower.clean();const level=Tower.LEVELS[s.level%24];g.items??=[];
  if(g.items.length<level.solution.length){const p={r:0,color:0,...level.solution[g.items.length]};if(Tower.canPlace(p,g.items,level).ok)g.items.push(p);else nextRound(b);}
  else{if(!g.testing){g.testing=true;s.next=s.seconds+4;return;}const sim=makeSimulation(g.items,level);try{for(let n=0;n<240;n++)sim.step();g.result=sim.result();if(g.result.ok){Tower.reward(s.progress,level,g.items.length);nextRound(b,true);}else nextRound(b);}finally{sim.dispose();}}
 }
}
function sharkStep(b,dt){const {s,game:g}=b;g.save??=Shark.clean();g.fish??=[];g.health??=3;g.time=(g.time||0)+dt;g.invincible=Math.max(0,(g.invincible||0)-dt);const p=g.save;
 const spawn=f=>{const a=random(s)*Math.PI*2,r=75+random(s)*65;Object.assign(f,{x:clamp(p.position.x+Math.cos(a)*r,-879,879),y:clamp(p.position.y+(random(s)-.5)*30,8,88),z:clamp(p.position.z+Math.sin(a)*r,-579,579),level:random(s)<.7?Math.max(0,p.level-1-Math.floor(random(s)*4)):Math.min(60,p.level+1+Math.floor(random(s)*5)),dir:a,phase:random(s)*6,depth:p.position.y,speed:2.6,bank:0,school:Math.floor(random(s)*4)});};
 while(g.fish.length<24){const f={};spawn(f);g.fish.push(f);}
 const target=g.fish.filter(f=>f.level<p.level).sort((a,c)=>Math.hypot(a.x-p.position.x,a.y-p.position.y,a.z-p.position.z)-Math.hypot(c.x-p.position.x,c.y-p.position.y,c.z-p.position.z))[0];
 if(target){const delta={x:target.x-p.position.x,y:target.y-p.position.y,z:target.z-p.position.z},d=Math.hypot(delta.x,delta.y,delta.z)||1,speed=(18+p.level*.1)*(1+p.upgrades.speed*.12);g.velocity??={x:0,y:0,z:0};for(const k of ['x','y','z']){g.velocity[k]+=(delta[k]/d*speed*(k==='y'?.7:1)-g.velocity[k])*(1-Math.exp(-dt*5));p.position[k]+=g.velocity[k]*dt;}}
 p.position.x=clamp(p.position.x,-870,870);p.position.y=clamp(p.position.y,5,95);p.position.z=clamp(p.position.z,-570,570);
 const peers=g.fish.map(f=>({...f,rig:{group:{position:{x:f.x,y:f.y,z:f.z},rotation:{set(){}}}}}));
 peers.forEach((f,i)=>{const motion=steerFish(f,peers,{...p.position,level:p.level,length:Shark.lengthFor(p.level),protected:g.invincible>0},dt,g.time);Object.assign(g.fish[i],{...f.rig.group.position,dir:f.dir,speed:f.speed,bank:f.bank});const collision=motion.edible?Shark.lengthFor(p.level)*.40+Shark.lengthFor(f.level)*.15:Shark.lengthFor(p.level)*.20+Shark.lengthFor(f.level)*.35;
  if(motion.distance<collision){if(motion.edible){Shark.eat(p,f.level);s.actions++;spawn(g.fish[i]);}else if(f.level>p.level&&g.invincible<=0){g.health=Shark.damage(p,g.health).health;g.invincible=4;const away={x:p.position.x-f.rig.group.position.x,y:p.position.y-f.rig.group.position.y,z:p.position.z-f.rig.group.position.z},length=Math.hypot(away.x,away.y,away.z)||1;for(const axis of ['x','y','z'])p.position[axis]+=away[axis]/length*5;if(!g.health){Shark.respawn(p);g.health=3;g.invincible=7;g.fish.forEach(spawn);}}}});
 const reg=Shark.regionAt(p.position.x,p.position.z);Shark.discover(p,reg);Shark.claimMissions(p);
 if(s.seconds>=s.next){s.next=s.seconds+20+random(s)*30;Shark.purchase(p,['speed','growth','shield'][Math.floor(random(s)*3)]);}
}
export function advanceParticipant(b,seconds){const {s,key}=b;seconds=clamp(Number(seconds)||0,0,15);if(!seconds)return;
 if(key==='egg'){advanceBot(b.game,seconds);s.seconds+=seconds;s.actions++;return;}
 for(let left=seconds;left>1e-8;){const dt=Math.min(1/30,left);left-=dt;s.seconds+=dt;let g=b.game;
  if(['math','words','memory','robot','house','tower'].includes(key)){puzzleStep(b);continue;}
  if(key==='shark'){sharkStep(b,dt);continue;}
  if(key==='descubra'){if(g.phase==='ended'){if(s.seconds>=s.next)nextRound(b);continue;}g.elapsed=(g.elapsed||0)+dt;tick(g,g.elapsed,()=>random(s));s.actions++;s.next=s.seconds+5;continue;}
  if(s.seconds<s.next&&['rush','bounce','gosnake','fuitcort','interball','interdance'].includes(key))continue;
  if(key==='rush'){
   if(g.status!=='playing'){Rush.complete(s.progress,g);nextRound(b,g.status==='won');continue;}
   const obstacle=g.track.find(o=>!g.seen.has(o.id)&&o.time>g.time&&o.time-g.time<.7&&o.lane===g.lane&&o.type!=='coin');if(obstacle){if(obstacle.type==='arch')g.action('slide');else g.action('jump');}
   const before=g.coins;g.update(dt);s.progress.coins+=g.coins-before;g.events=[];s.actions++;
  }else if(key==='bounce'){
   if(g.status==='won'){s.progress??=Bounce.freshProgress();Bounce.complete(s.progress,g);nextRound(b,true);continue;}
   const jump=g.p.grounded&&Math.floor(s.seconds*3)%3===0;g.update(dt,{right:true,jump});g.events=[];s.actions++;
  }else if(key==='gosnake'){
   if(g.status!=='playing'){s.best=Math.max(s.best||0,g.score);nextRound(b,g.status==='won');continue;}
   if(g.accumulator+dt>=g.interval()){g.steer(snakeDirection(g));s.actions++;}g.update(dt);
  }else if(key==='fuitcort'){
   if(g.state==='finished'){s.progress??={integros:0,earned:0,points:0,rounds:0,best:{classic:0}};g.settle(s.progress);nextRound(b);continue;}
   g.update(dt);if(s.seconds>=(s.sliceAt||0)){s.sliceAt=s.seconds+.2+random(s)*.4;const f=g.objects.find(f=>!f.cut&&f.kind!=='bomb'&&f.y>90&&f.y<510);if(f){g.startStroke();g.slice({x:f.x-f.r,y:f.y},{x:f.x+f.r,y:f.y});s.actions++;}}g.events=[];
  }else if(key==='interball'){
   if(g.state==='ready')g.launch();if(g.state==='clear'||g.state==='won'){nextRound(b,true);continue;}if(!['playing','ready'].includes(g.state)){nextRound(b);continue;}
   if(s.seconds>=(s.aimAt||0)){s.aimAt=s.seconds+.18+random(s)*.3;g.aim((g.balls.find(x=>x.vy>0)||g.balls[0])?.x+(random(s)-.5)*75);s.actions++;}g.step(dt);g.events=[];
  }else if(key==='interdance'){
   if(g.status!=='playing'){s.result=g.result();nextRound(b,s.result.passed);continue;}const t=g.time+dt;
   for(const lane of [...g.held])if(!g.notes.some(n=>n.lane===lane&&n.state==='holding'&&t<n.time+n.hold))g.release(lane,t);
   for(const n of g.notes)if(n.state==='waiting'&&Math.abs(n.time-t)<.03&&!g.held.has(n.lane)&&random(s)<.91){g.hit(n.lane,t);s.actions++;}g.update(t);
  }else if(key==='fruit'){
   if(s.seconds>=s.next){s.next=s.seconds+2+random(s)*3;s.actions++;if(!g.save.chests.includes(g.island))g.go('chest');else if(ISLANDS[g.island].fruit&&!g.save.collected.includes(ISLANDS[g.island].fruit))g.go('fruit');else if(g.save.claimed[g.island]&&g.island<ISLANDS.length-1){if(g.boating||g.near('dock')){if(g.travelTo===null)g.sail(g.island+1);}else g.go('dock');}else{const enemy=g.enemies.filter(e=>e.hp>0).sort((a,c)=>Math.hypot(a.x-g.player.x,a.z-g.player.z)-Math.hypot(c.x-g.player.x,c.z-g.player.z))[0];if(enemy)g.walkTo(enemy.x,enemy.z);else g.go('guide');}g.attack('slash');g.attack('power');if(g.hp<g.maxHp*.4)g.potion();}
   g.update(dt);g.events=[];
  }else if(key==='bairro'){
   if(s.seconds>=s.next&&!g.activity){s.next=s.seconds+12+random(s)*20;const choices=g.save.hunger>60?['stove','table']:['sofa','bed','swing','slide','pool','gymBike','gymMat'];s.target=choices[Math.floor(random(s)*choices.length)];g.go(s.target);s.actions++;}
   if(s.target&&g.at(s.target)&&!g.activity)g.use(s.target);g.update(dt);for(const e of g.drainEvents())if(e.type==='arrive'&&String(e.text).startsWith('enter:'))g.enter(e.text.slice(6));else if(e.type==='arrive'&&String(e.text).startsWith('exit:'))g.exit();
  }else if(key==='craft'){
   if(s.seconds>=s.next){s.next=s.seconds+5+random(s)*9;s.target={x:3+random(s)*42,z:3+random(s)*42};const p={x:Math.floor(g.player.x)+1,y:Math.floor(g.player.y),z:Math.floor(g.player.z)};if(p.x<48&&p.y>0&&p.y<30&&g.get(p.x,p.y,p.z)===0){g.selected=1+Math.floor(random(s)*3);if(g.place(p)){b.edits.push({...p,block:g.selected});s.actions++;}}}
   const move=direction(g.player,s.target||{x:24,z:24}),p=g.player;
   // Craft inputs are camera-relative. Convert desired world movement instead
   // of walking backwards when the saved camera faces the opposite direction.
   if(move.x||move.z){const target=Math.atan2(-move.x,-move.z);p.yaw+=clamp(Math.atan2(Math.sin(target-p.yaw),Math.cos(target-p.yaw)),-dt*3,dt*3);}
   const ahead={x:clamp(Math.floor(p.x+move.x*2),0,47),z:clamp(Math.floor(p.z+move.z*2),0,47)};
   const height=Math.min(27,g.surface(ahead.x,ahead.z)+2.1);
   g.update(dt,{x:move.x*Math.cos(p.yaw)-move.z*Math.sin(p.yaw),z:move.x*Math.sin(p.yaw)+move.z*Math.cos(p.yaw),up:clamp((height-p.y)*.9,-1,1)});
   p.x=clamp(p.x,.35,47.65);p.z=clamp(p.z,.35,47.65);
  }
 }
}
export function participantPush(b,event){return b.key==='egg'&&pushBot(b.game,event);}
export function participantPose(b){if(b.key==='egg')return botPose(b.game);const g=b.game,p=g.player||g.save?.position;return p?{x:p.x||0,y:p.y||0,z:p.z||0,yaw:p.yaw||0,zone:g.zone||'world',activity:g.activity?.type||'play',gesture:''}:b.pose;}
export function participantSnapshot(b){const {key,s,game:g,root}=b;if(key==='egg')root.egg=botSnapshot(g);else if(key==='rush')s.runtime=Rush.snapshot(g);else if(key==='craft')s.runtime=g.serialize();else if(key==='interdance')s.runtime={...cleanRuntime(g),held:[...g.held]};else s.runtime=cleanRuntime(g);return root;}
export function participantResult(b){const save=b.key==='egg'?b.game.game.save:b.root.egg?.game?.save;return {data:{coins:save?.coins||0,training:save?.training||0,delivered:save?.delivered||0,caught:save?.caught||0,vehicles:save?.vehicles||[],accessories:save?.accessories||[],creatures:save?.creatures?.length||0,eggs:save?.eggs?.length||0,tax:save?.tax||{}},progress:{game:b.key,seconds:b.s.seconds,actions:b.s.actions,rounds:b.s.rounds,level:b.s.level},edits:b.edits};}
