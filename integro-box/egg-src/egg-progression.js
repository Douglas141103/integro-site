import {corralFloors,corralSurface,nearCorral,FLOOR_HEIGHT,FLOOR_SLOTS,MAX_CORRAL_FLOORS,CORRAL_FLOOR_PRICES} from './egg-corral.js';
export * from './egg-corral.js';
export const TRAIN_SPEED_GAIN=.45;
export const TRAINING_PASS_SECONDS=300;
export const TREADMILLS={
 normal:{id:'normal',name:'Normal',price:0,rate:1,x:5,z:14,color:0x32b9b2},
 gold:{id:'gold',name:'Ouro',price:1000,rate:3,x:2.4,z:8.6,color:0xe8b640},
 galaxy:{id:'galaxy',name:'Galática',price:10000,rate:8,x:6.8,z:8.6,color:0x9f78ef}
};
export const SECOND_FLOOR_PRICE=250000,SECOND_FLOOR_SLOTS=24,FUSION_PACK_PRICE=10,FUSION_PACK_USES=10;
export const FUSION_MACHINE={x:-5,z:20.3};
export const trainingTarget=level=>8+Math.min(200,level)*.22;
export const groundCapacity=save=>3+(save.upgrades?.pen||0)*2;
export const corralCapacity=save=>groundCapacity(save)+(corralFloors(save)-1)*FLOOR_SLOTS;
export function corralSlot(index,save){const ground=groundCapacity(save),upper=index>=ground&&corralFloors(save)>1,floor=upper?2+Math.floor((index-ground)/FLOOR_SLOTS):1,i=upper?(index-ground)%FLOOR_SLOTS:index;return{x:(i%4-1.5)*1.45,y:(floor-1)*FLOOR_HEIGHT,z:Math.floor(i/4)*1.1-2.7,floor};}
const bounded=(v,max)=>Number.isFinite(v)?Math.max(0,Math.min(max,v)):0;
export function cleanProgression(raw={}){return{progressionVersion:1,corralVersion:1,corralFloors:corralFloors(raw),secondFloor:corralFloors(raw)>1,trainingPasses:{gold:bounded(raw.trainingPasses?.gold,300),galaxy:bounded(raw.trainingPasses?.galaxy,300)},fusion:{owned:raw.fusion?.owned===true,charges:raw.fusion?.owned===true?Math.floor(bounded(raw.fusion?.charges,1000)):0}};}
export const cleanFusion=pet=>({fusionBonus:bounded(pet.fusionBonus,1e6),fusionLevel:Math.floor(bounded(pet.fusionLevel,1000))});
export function installProgression(Game){Object.assign(Game.prototype,{
 nearestTreadmill(){if(this.player.y>.3)return null;return Object.values(TREADMILLS).find(t=>Math.hypot(this.player.x-t.x,this.player.z-t.z)<2.2);},
 treadmill(){return TREADMILLS[this.activeTreadmill]||TREADMILLS.normal;},
 startTraining(id='normal'){
  const t=TREADMILLS[id];if(!t||this.raceMode||this.jetFlight||this.carrying!==null||this.mode!=='run'||this.save.training>=600||this.nearestTreadmill()?.id!==id)return false;
  if(t.price&&this.save.trainingPasses[id]<=0){if(this.spendable()<t.price){this.emit('notice','Integros insuficientes para esta esteira.');return false;}this.save.coins-=t.price;this.save.trainingPasses[id]=TRAINING_PASS_SECONDS;}
  this.activeTreadmill=id;this.mode='train';Object.assign(this.player,{x:t.x,z:t.z,y:0,vy:0});this.emit('train',`Esteira ${t.name}: evolução ${t.rate}×. Cada nível dá +0,45 de velocidade.`);return true;
 },
 stopTraining(){const t=this.treadmill();this.mode='run';this.player.z=t.z+2.2;this.emit('stop','Treino pausado. O tempo restante fica guardado.');},
 advanceTraining(dt){
  const t=this.treadmill(),used=t.price?Math.min(dt,this.save.trainingPasses[t.id]):dt;
  this.save.trainXP+=used*this.trainingRate();if(t.price)this.save.trainingPasses[t.id]=Math.max(0,this.save.trainingPasses[t.id]-used);
  while(this.save.training<600&&this.save.trainXP+1e-9>=this.trainTarget()){this.save.trainXP=Math.max(0,this.save.trainXP-this.trainTarget());this.save.training++;this.emit('level',`Treino nível ${this.save.training}! Velocidade: ${this.speed().toFixed(2).replace('.',',')}.`);}
  if(this.save.training>=600){this.save.trainXP=0;this.stopTraining();}else if(t.price&&this.save.trainingPasses[t.id]<=1e-9){this.save.trainingPasses[t.id]=0;this.stopTraining();this.emit('notice','Seu passe de 5 minutos acabou. Renove para continuar nesta esteira.');}
 },
 buySecondFloor(){return corralFloors(this.save)===1&&this.buyCorralFloor(2);},
 buyCorralFloor(expected=corralFloors(this.save)+1){const next=corralFloors(this.save)+1,price=CORRAL_FLOOR_PRICES[next];if(expected!==next||next>MAX_CORRAL_FLOORS||!this.inBase()||this.raceMode||this.corralView||this.spendable()<price)return false;this.save.coins-=price;this.save.corralFloors=next;this.save.secondFloor=true;this.save.corralVersion=1;this.emit('upgrade',next+'º andar construído! +24 ninhos. Suba pela escada lateral.');return true;},
 corralSave(){return this.corralView||this.save;},
 floorSupport(p=this.player,ceiling=p.y+.025){return this.raceMode?0:corralSurface(this.corralSave(),p,ceiling);},
 onFloor(){return Math.abs(this.player.y-this.floorSupport())<.001&&this.player.vy<=0;},
 stepCorral(previous){if(this.raceMode||this.jetFlight||this.player.vy>0)return;const old=this.floorSupport(previous);if(Math.abs(previous.y-old)>.035)return;const next=this.floorSupport(this.player,previous.y+.2);if(next>=previous.y-.2&&next<=previous.y+.2){this.player.y=next;this.player.vy=0;this.airJumps=0;}},
 advanceGravity(dt){const old=this.player.y,support=this.floorSupport(this.player,old+.025);if(this.player.vy||old>support+.025){this.player.vy-=(this.zone()===6?13:22)*dt;this.player.y+=this.player.vy*dt;}if(this.player.y<=support&&this.player.vy<=0){this.player.y=support;this.player.vy=0;this.airJumps=0;}},
 corralWalking(){return !this.raceMode&&corralFloors(this.corralSave())>1&&nearCorral(this.player);},
 nearFusion(){return this.player.y<.3&&this.inBase()&&!this.raceMode&&!this.jetFlight&&this.save.fusion?.owned&&Math.hypot(this.player.x-FUSION_MACHINE.x,this.player.z-FUSION_MACHINE.z)<2.3;},
 fusionPreview(mainId,donorId){
  const main=this.save.creatures.find(c=>c.uid===mainId),donor=this.save.creatures.find(c=>c.uid===donorId);if(!main||!donor||main===donor)return null;
  const before=this.baseCreatureIncomeRate(main)+this.baseCreatureIncomeRate(donor),base=this.baseCreatureIncomeRate({...main,fusionBonus:0}),bonus=before*1.25-base;
  if(bonus>1e6||Math.max(main.fusionLevel||0,donor.fusionLevel||0)>=1000)return null;
  return{main,donor,before,after:before*1.25,bonus};
 },
 fuse(mainId,donorId){const p=this.fusionPreview(mainId,donorId);if(!p||!this.nearFusion()||this.save.fusion.charges<1)return false;
  p.main.fusionBonus=p.bonus;p.main.fusionLevel=Math.max(p.main.fusionLevel||0,p.donor.fusionLevel||0)+1;p.main.incomeProgress=(p.main.incomeProgress||0)+(p.donor.incomeProgress||0);
  this.save.creatures.splice(this.save.creatures.indexOf(p.donor),1);if(this.save.companionId===p.donor.uid)this.save.companionId=p.main.uid;this.save.fusion.charges--;this.emit('fusion','Fusão concluída! A criatura produz a soma das duas +25%.',p.main.world);return true;
 }
});}
