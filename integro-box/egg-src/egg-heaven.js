// The bonus uses local ground coordinates for physics and a rotated frame for art.
// This keeps jumps, carried eggs and multiplayer positions consistent under gravity.
export const HEAVEN={world:23,start:-1200,length:288,end:-1488,ceiling:12,gate:{x:0,z:-1098},exit:{x:0,z:-1202},nest:{x:0,z:-1468}};
export const HEAVEN_WORLD={name:'Porta do Céu',short:'Céu',creature:'Guardião Celestial',value:85000,color:0xffd77c,ground:0xd6e6ff,path:0xfff5dc,sky:0x91bce5,kind:'skyGuardian',bonus:true};
export const inHeaven=p=>Number.isFinite(p?.z)&&p.z<-1152;
export function heavenPosition(p){return inHeaven(p)?{x:-p.x,y:HEAVEN.ceiling-(p.y||0),z:p.z}:{x:p.x,y:p.y||0,z:p.z};}
export function heavenFrame(frame,inverted){frame.rotation.z=inverted?Math.PI:0;frame.position.y=inverted?HEAVEN.ceiling:0;}
export const HEAVEN_OBSTACLES=Array.from({length:10},(_,i)=>({world:HEAVEN.world,x:(i%2?1:-1)*5,z:HEAVEN.start-28-i*22,r:.95,h:.65}));
export const heavenMethods={
 inHeaven(){return inHeaven(this.player)},
 heavenAction(){
  if(this.raceMode||this.mode!=='run'||this.falling||this.jetFlight||this.player.y>.2)return null;
  const p=this.player,near=q=>Math.hypot(p.x-q.x,p.z-q.z)<3;
  if(this.inHeaven()&&near(HEAVEN.exit))return{type:'heavenExit',label:this.carrying!==null?'Sair com o ovo':'Sair da fase bônus'};
  if(!this.inHeaven()&&near(HEAVEN.gate))return this.carrying===null?{type:'heavenEnter',label:'Entrar na Porta do Céu'}:null;
  return null;
 },
 useHeavenDoor(){
  const action=this.heavenAction();if(!action)return false;
  this.endEggPower();this.clearPush();this.endSkates();this.iceVelocity={x:0,z:0};
  if(action.type==='heavenEnter'){
   Object.assign(this.player,{x:0,z:HEAVEN.start-7,y:0,vy:0});this.save.visited[HEAVEN.world]=true;
   this.emit('heavenEnter','Porta do Céu! Corra pelo teto, pegue o ovo e volte à porta para sair.');
  }else{
   Object.assign(this.player,{x:0,z:HEAVEN.gate.z+8,y:0,vy:0});
   this.guardians[HEAVEN.world].state='return';
   this.emit('heavenExit',this.carrying!==null?'Você saiu com o ovo! Agora leve-o até o curral.':'Você voltou ao percurso principal.');
  }
  this.energy=this.maxEnergy();return action.type;
 },
};
