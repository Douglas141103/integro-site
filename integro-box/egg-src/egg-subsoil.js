// A separate bonus route: it adds no species, currency or saved inventory.
export const SUBSOIL={start:-1600,end:-1840,length:240,gate:{x:-9,z:-1098},entry:{x:0,z:-1607},exit:{x:0,z:-1602},finish:{x:0,z:-1835},surface:{x:-9,z:-1090},emergeSeconds:1.15};
export const inSubsoil=p=>Number.isFinite(p?.z)&&p.z<=-1536;
// The same ellipse definitions drive visible lava and collision, including the rim.
export const SUBSOIL_LAVA=Array.from({length:10},(_,i)=>{
 const side=i%2?1:-1,z=SUBSOIL.start-25-i*21;
 return[{x:side*5,z,rx:8.2,rz:5.3,lake:true},{x:-side*11.8,z:z-3,rx:1.45,rz:2.1,lake:false}];
}).flat();
export function touchesSubsoilLava(p,radius=.4){return inSubsoil(p)&&(p.y||0)<=.18&&SUBSOIL_LAVA.some(h=>((p.x-h.x)/(h.rx+radius))**2+((p.z-h.z)/(h.rz+radius))**2<=1);}
export const emergenceOffset=remaining=>remaining>0?-2.4*Math.min(1,remaining/SUBSOIL.emergeSeconds)**2:0;
export const subsoilMethods={
 inSubsoil(){return inSubsoil(this.player)},
 subsoilAction(){
  if(this.emerging)return{type:'walk',label:'Surgindo do chão…'};
  if(this.raceMode||this.mode!=='run'||this.falling||this.jetFlight||this.player.y>.2)return null;
  const near=q=>Math.hypot(this.player.x-q.x,this.player.z-q.z)<3;
  if(this.inSubsoil())return near(SUBSOIL.exit)||near(SUBSOIL.finish)?{type:'subsoilExit',label:'Voltar à superfície'}:{type:'walk',label:'Desvie da lava até a saída'};
  if(!this.inHeaven()&&near(SUBSOIL.gate)&&this.carrying===null)return{type:'subsoilEnter',label:'Entrar na Porta do Subsolo'};
  return null;
 },
 useSubsoilDoor(){
  const a=this.subsoilAction();if(a?.type==='subsoilExit'){this.returnFromSubsoil(false);return a.type;}if(a?.type!=='subsoilEnter')return false;
  this.endEggPower();this.clearPush();this.endSkates();this.clearDroppedEgg();this.iceVelocity={x:0,z:0};this.jumpBuffer=0;
  Object.assign(this.player,{...SUBSOIL.entry,y:0,vy:0});this.energy=this.maxEnergy();
  this.emit('subsoilEnter','Porta do Subsolo! Contorne os lagos e as poças de lava até a saída.');return a.type;
 },
 returnFromSubsoil(lava){
  if(!this.inSubsoil()||this.emerging)return false;
  this.endEggPower();this.clearPush();this.endSkates();this.clearDroppedEgg();this.iceVelocity={x:0,z:0};this.jumpBuffer=0;
  if(this.carriedEgg){this.nestEggs[this.carrying][this.carriedEgg.slot].availableAt=this.time+5;this.guardians[this.carrying].state='return';this.carrying=null;this.carriedEgg=null;}
  const complete=!lava&&Math.hypot(this.player.x-SUBSOIL.finish.x,this.player.z-SUBSOIL.finish.z)<3;
  Object.assign(this.player,{...SUBSOIL.surface,y:0,vy:0});this.emerging=SUBSOIL.emergeSeconds;this.moving=0;this.sprinting=false;this.energy=this.maxEnergy();if(lava)this.runClean=false;
  this.emit('subsoilExit',lava?'Você tocou na lava! Surgindo do chão no mundo normal.':complete?'Travessia concluída! Você voltou à superfície.':'Você voltou à superfície.');return true;
 },
 checkSubsoilLava(){return touchesSubsoilLava(this.player)&&this.returnFromSubsoil(true);},
 updateEmergence(dt){if(!this.emerging)return false;this.emerging=Math.max(0,this.emerging-dt);this.moving=0;this.sprinting=false;this.clearPush();this.player.vy=0;return true;},
};
