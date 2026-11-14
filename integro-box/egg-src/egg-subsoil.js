// The magma species is appended after all existing worlds; IDs remain stable.
export const SUBSOIL={world:24,nest:{x:0,z:-1826},start:-1600,end:-1840,length:240,gate:{x:-9,z:-1098},entry:{x:0,z:-1607},exit:{x:0,z:-1602},finish:{x:0,z:-1835},surface:{x:-9,z:-1090},emergeSeconds:1.15};
export const SUBSOIL_WORLD={name:'Porta do Subsolo',short:'Subsolo',creature:'Guardião de Magma',value:100000,color:0xff873b,ground:0x554752,path:0x554752,sky:0x342734,kind:'magmaGuardian',bonus:true};
export const inSubsoil=p=>Number.isFinite(p?.z)&&p.z<=-1536;
// Shared animated ellipses keep visible lava and collision on the same game clock.
export const SUBSOIL_LAVA=Array.from({length:10},(_,i)=>{
 const side=i%2?1:-1,z=SUBSOIL.start-25-i*21;
 return[{x:side*5,z,rx:8.2,rz:5.3,lake:true,phase:i*.73},{x:-side*11.8,z:z-3,rx:1.45,rz:2.1,lake:false,phase:i*.73+Math.PI}];
}).flat();
export const SUBSOIL_PULSE_SECONDS=7.2;
export function subsoilLavaShape(h,time=0){
 const pulse=(1-Math.cos(time*Math.PI*2/SUBSOIL_PULSE_SECONDS+h.phase))/2;
 // At maximum size both banks reach past the 14.25 m track edge; an interior route remains open.
 return{...h,rx:h.rx*(h.lake?.8+.45*pulse:.8+1.45*pulse),rz:h.rz*(.9+.2*pulse)};
}
export function touchesSubsoilLava(p,radius=.4,time=0){return inSubsoil(p)&&(p.y||0)<=.18&&SUBSOIL_LAVA.some(base=>{const h=subsoilLavaShape(base,time);return((p.x-h.x)/(h.rx+radius))**2+((p.z-h.z)/(h.rz+radius))**2<=1;});}
export const emergenceOffset=remaining=>remaining>0?-2.4*Math.min(1,remaining/SUBSOIL.emergeSeconds)**2:0;
export const subsoilMethods={
 inSubsoil(){return inSubsoil(this.player)},
 subsoilAction(){
  if(this.emerging)return{type:'walk',label:'Surgindo do chão…'};
  if(this.raceMode||this.mode!=='run'||this.falling||this.jetFlight||this.player.y>.2)return null;
  const near=q=>Math.hypot(this.player.x-q.x,this.player.z-q.z)<3;
  if(this.inSubsoil())return near(SUBSOIL.exit)||near(SUBSOIL.finish)?{type:'subsoilExit',label:this.carrying!==null?'Sair com o ovo':'Voltar à superfície'}:null;
  if(!this.inHeaven()&&near(SUBSOIL.gate)&&this.carrying===null)return{type:'subsoilEnter',label:'Entrar na Porta do Subsolo'};
  return null;
 },
 useSubsoilDoor(){
  const a=this.subsoilAction();if(a?.type==='subsoilExit'){this.returnFromSubsoil(false);return a.type;}if(a?.type!=='subsoilEnter')return false;
  this.endEggPower();this.clearPush();this.endSkates();this.clearDroppedEgg();this.iceVelocity={x:0,z:0};this.jumpBuffer=0;
  Object.assign(this.player,{...SUBSOIL.entry,y:0,vy:0});this.energy=this.maxEnergy();
  this.emit('subsoilEnter','Porta do Subsolo! A lava cresce e encolhe até as bordas. Espere a abertura e pegue um ovo do Guardião de Magma no final da pista.');return a.type;
 },
 returnFromSubsoil(lava){
  if(!this.inSubsoil()||this.emerging)return false;
  this.endEggPower();this.clearPush();this.endSkates();this.clearDroppedEgg();this.iceVelocity={x:0,z:0};this.jumpBuffer=0;
  if(lava&&this.carriedEgg){this.save.caught++;this.nestEggs[this.carrying][this.carriedEgg.slot].availableAt=this.time+5;this.guardians[this.carrying].state='return';this.carrying=null;this.carriedEgg=null;}
  this.guardians[SUBSOIL.world].state='return';
  const complete=!lava&&Math.hypot(this.player.x-SUBSOIL.finish.x,this.player.z-SUBSOIL.finish.z)<3;
  Object.assign(this.player,{...SUBSOIL.surface,y:0,vy:0});this.emerging=SUBSOIL.emergeSeconds;this.moving=0;this.sprinting=false;this.energy=this.maxEnergy();if(lava)this.runClean=false;
  this.emit('subsoilExit',lava?'Você tocou na lava! O ovo volta ao ninho e você surge no mundo normal.':this.carrying!==null?'Você saiu com o ovo de Magma! Leve-o até o curral.':complete?'Travessia concluída! Você voltou à superfície.':'Você voltou à superfície.');return true;
 },
 checkSubsoilLava(){return touchesSubsoilLava(this.player,.4,this.time)&&this.returnFromSubsoil(true);},
 updateEmergence(dt){if(!this.emerging)return false;this.emerging=Math.max(0,this.emerging-dt);this.moving=0;this.sprinting=false;this.clearPush();this.player.vy=0;return true;},
};
