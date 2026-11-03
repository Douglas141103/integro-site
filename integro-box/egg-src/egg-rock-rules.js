export const ROCK={world:22,warning:2,growth:22,hold:8,sink:4,interval:40,radius:1.65,height:5.8};
export const ROCK_WORLD={name:'Grande Pedregulho',short:'Pedregulho',creature:'Grande Pedregulho',value:50000,color:0x9d9d8a,ground:0x77766c,path:0xc1b697,sky:0x969f9c,kind:'stoneGiant'};
// Alternate the side of each mountain, leaving a wide, continuous way around it.
// Keep nests, existing obstacles and the safe area clear.
export const rockSites=world=>[4,43].map((offset,slot)=>({x:(slot%2?1:-1)*1.8,z:-(world*48+offset)}));
export function mountainState(time,castAt,slot,race=false){
 const age=time-castAt-slot*.8,end=ROCK.warning+ROCK.growth+ROCK.hold;
 if(race||!Number.isFinite(age)||age<0||age>=end+ROCK.sink)return{visible:false,warning:false,amount:0,r:0,h:0};
 const progress=Math.max(0,Math.min(1,(age-ROCK.warning)/ROCK.growth));
 const amount=(.05+.95*progress)*(age>end?1-(age-end)/ROCK.sink:1);
 return{visible:true,warning:age<ROCK.warning,amount,r:ROCK.radius*amount,h:ROCK.height*amount};
}
export const rockMethods={
 resetRockRoom(){this.localRockCastId=null;this.closedRockId=null;this.roomRock=null;this.rockRequest=null;this.rock={castAt:-Infinity,nextAt:0};},
 applyRoomRock(rock,serverNow){
  if(!this.roomMode||!Number.isFinite(serverNow))return;
  const previous=this.roomRock?.id;
  this.roomRock=rock&&Number.isFinite(rock.castAt)?{...rock,serverNow,receivedAt:this.now()}:null;
  if(rock?.id===this.rockRequest?.id)this.rockRequest=null;
  if(this.roomRock&&!rock.closed&&previous!==rock.id&&serverNow-rock.castAt<38000)this.emit('obstacle','Grande Pedregulho! Pedrinhas estão virando montanhas em todas as pistas. Desvie!',ROCK.world);
 },
 castRock(){
  if(this.raceMode||this.time<this.rock.nextAt)return;
  this.rock={castAt:this.roomMode?-Infinity:this.time,nextAt:this.time+ROCK.interval};
  if(this.roomMode){this.rockRequest={id:Math.floor(this.now()).toString(36)+'-'+this.random().toString(36).slice(2,10),action:'cast'};this.localRockCastId=this.rockRequest.id;this.closedRockId=null;return;}
  this.emit('obstacle','Grande Pedregulho! As pedrinhas vão crescer até virar montanhas. Desvie pelas laterais!',ROCK.world);
 },
 closeRock(){
  if(this.roomMode){const castId=this.localRockCastId||this.roomRock?.id||'';this.rockRequest={id:Math.floor(this.now()).toString(36)+'-'+this.random().toString(36).slice(2,10),action:'close',castId};this.closedRockId=castId;}
  this.rock={castAt:-Infinity,nextAt:0};
 },
 updateRock(){if(!this.raceMode&&!this.inBase()&&(this.activeEggPower===ROCK.world&&this.carrying===ROCK.world)&&this.time>=this.rock.nextAt)this.castRock();},
 mountain(world,slot){
  if(this.roomMode){const f=this.roomRock;return mountainState(f?(f.serverNow+this.now()-f.receivedAt)/1000:0,f&&!f.closed&&f.id!==this.closedRockId?f.castAt/1000:-Infinity,slot,this.raceMode);}
  return mountainState(this.time,this.rock.castAt,slot,this.raceMode);
 },
 collideMountains(p,r){
  if(this.raceMode||this.jetFlight||p.z>=0)return;
  const world=Math.max(0,Math.min(ROCK.world,Math.floor(-p.z/48)));
  for(const [slot,o]of rockSites(world).entries()){
   const s=this.mountain(world,slot);if(!s.visible||p.y>s.h||Math.abs(p.z-o.z)>s.r+r)continue;
   const dx=p.x-o.x,dz=p.z-o.z,d=Math.hypot(dx,dz),min=s.r+r;
   if(d>=min)continue;
   // A growing rock also displaces a stationary player; exact centres resolve inward.
   p.x=o.x+(d?dx/d:-Math.sign(o.x))*min;p.z=o.z+(d?dz/d:0)*min;
   if(this.hitCooldown<=0){this.runClean=false;this.emit('obstacle','A montanha está crescendo! Contorne pelo espaço livre.');this.hitCooldown=2;}
  }
 }
};
