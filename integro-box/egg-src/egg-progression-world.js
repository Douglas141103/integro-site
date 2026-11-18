import {createCorralWorld} from './egg-corral-world.js';
import {addTreadmillTrim,addFusionVesselTrim,addFusionCredits} from './egg-training-trim.js';
import {TREADMILLS,FUSION_MACHINE} from './egg-rules.js';
export function createProgressionWorld({base,pen,roof,penContent,penDecor,helpers}){
 const {group,box,cyl,rod,torus,ball,label}=helpers,treadmills=[];
 for(const t of Object.values(TREADMILLS)){
  const tm=group(base,t.x,0,t.z);tm.name='Treadmill-'+t.id;tm.userData.treadmill=t.id;
  box(tm,2.1,.28,3.3,t.id==='gold'?0xba8525:t.id==='galaxy'?0x534083:0x315573,0,.15,0);box(tm,1.68,.07,2.9,0x273345,0,.33,0);
  const belts=[];for(let i=0;i<9;i++)belts.push(box(tm,1.6,.016,.055,t.color,0,.374,-1.3+i*.32));
  for(const x of[-.95,.95]){rod(tm,[x,.35,-1],[x,1.8,-1.2],.065,t.color);rod(tm,[x,1.8,-1.2],[x,1.25,.9],.045,t.color);}
  box(tm,1.95,.37,.28,t.color,0,1.8,-1.25);box(tm,.75,.17,.03,0xc5f2e8,0,1.82,-1.42);
  label(tm,t.id==='normal'?'NORMAL · GRÁTIS':t.name.toUpperCase()+' · '+t.rate+'×',0,2.8,0,3.2);
  if(t.price)label(tm,t.price.toLocaleString('pt-BR')+' INTEGROS · 5 MIN',0,2.35,0,3.1);
  if(t.price)addTreadmillTrim(tm,t.id);
  treadmills.push({id:t.id,belts,phase:0});
 }
 const corral=createCorralWorld({pen,roof,penContent,penDecor,helpers});const upper=corral.upper;
 const machine=group(base,FUSION_MACHINE.x,0,FUSION_MACHINE.z);machine.name='CorralFusionMachine';machine.visible=false;
 box(machine,4,.06,3.5,0x8eb87d,0,.015,0);box(machine,2.45,.32,1.9,0x52668a,0,.2,0);box(machine,1.7,.9,1.4,0x7961ac,0,.78,0);
 for(const x of[-.85,.85]){cyl(machine,.36,.42,.18,0x82dbd3,x,1.1,0,14);}
 const ring=torus(machine,.63,.08,0xe8c578,0,2.09,0);ring.rotation.x=Math.PI/2-.26;box(machine,.62,.34,.12,0xb9f3db,0,.95,.76);
 for(const x of[-.9,.9])box(machine,.12,1.8,.12,0x52668a,x,1.05,-.6);box(machine,2.1,.18,.22,0xe8c578,0,1.92,-.6);
 label(machine,'MÁQUINA DE FUSÃO',0,2.8,0,4);const glow=ball(machine,.13,0xc6f7ed,0,1.55,0);
 addFusionVesselTrim(machine);
 const credits=addFusionCredits(machine);
 function sync(save){corral.sync(save);machine.visible=!!save.fusion?.owned;credits.visible=save.fusion?.charges>0;}
 function animate(dt,game){corral.animate(game);for(const t of treadmills){if(game.mode==='train'&&game.treadmill().id===t.id)t.phase+=dt*2*TREADMILLS[t.id].rate**.35;for(let i=0;i<t.belts.length;i++)t.belts[i].position.z=-1.4+((t.phase+i*.32)%2.8);}if(machine.visible){ring.rotation.z=game.time*.7;glow.scale.setScalar(1+Math.sin(game.time*3)*.1);}}
 return{sync,animate,upper,machine,corral};
}
