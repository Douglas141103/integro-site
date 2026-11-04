import {TREADMILLS,CORRAL,FUSION_MACHINE,corralCapacity,corralSlot,SECOND_FLOOR_SLOTS} from './egg-rules.js';
export function createProgressionWorld({base,pen,roof,helpers}){
 const {group,box,cyl,rod,torus,ball,label}=helpers,treadmills=[];
 for(const t of Object.values(TREADMILLS)){
  const tm=group(base,t.x,0,t.z);tm.name='Treadmill-'+t.id;tm.userData.treadmill=t.id;
  box(tm,2.1,.28,3.3,t.id==='gold'?0xba8525:t.id==='galaxy'?0x534083:0x315573,0,.15,0);box(tm,1.68,.07,2.9,0x273345,0,.33,0);
  const belts=[];for(let i=0;i<9;i++)belts.push(box(tm,1.6,.016,.055,t.color,0,.374,-1.3+i*.32));
  for(const x of[-.95,.95]){rod(tm,[x,.35,-1],[x,1.8,-1.2],.065,t.color);rod(tm,[x,1.8,-1.2],[x,1.25,.9],.045,t.color);}
  box(tm,1.95,.37,.28,t.color,0,1.8,-1.25);box(tm,.75,.17,.03,0xc5f2e8,0,1.82,-1.42);
  label(tm,t.id==='normal'?'NORMAL · GRÁTIS':t.name.toUpperCase()+' · '+t.rate+'×',0,2.8,0,3.2);
  if(t.price)label(tm,t.price.toLocaleString('pt-BR')+' INTEGROS · 5 MIN',0,2.35,0,3.1);
  if(t.id==='galaxy')for(let i=0;i<7;i++)ball(tm,.04,0xbfefff,Math.sin(i*2)*.8,.5+Math.cos(i)*.12,i*.38-1.1);
  treadmills.push({id:t.id,belts,phase:0});
 }
 const upper=group(pen);upper.name='CorralSecondFloor';upper.visible=false;
 box(upper,7.1,.18,7.8,0xc8b590,0,2.56,0);
 for(const x of[-3.4,3.4])for(const z of[-3.5,3.5]){box(upper,.17,5.45,.17,0xa2845c,x,2.7,z);box(upper,.15,1.05,.15,0xf4dfb3,x,3.17,z);}
 for(const x of[-3.4,3.4]){box(upper,.12,.12,7.2,0xf4dfb3,x,3.56,0);box(upper,.12,.12,7.2,0xf4dfb3,x,3.05,0);}
 for(const z of[-3.6,3.6])box(upper,6.8,.12,.12,0xf4dfb3,0,3.56,z);
 // Ladder marks the upper animal loft; its slots are managed from the corral panel.
 for(const x of[-3,-2.2])box(upper,.1,2.7,.1,0xa2845c,x,1.35,3.75);for(let j=0;j<8;j++)box(upper,.9,.08,.12,0xe2d0a8,-2.6,.25+j*.32,3.75);
 label(upper,'2º ANDAR · +'+SECOND_FLOOR_SLOTS+' ESPAÇOS',0,4.15,-3.65,4.6);
 const machine=group(base,FUSION_MACHINE.x,0,FUSION_MACHINE.z);machine.name='CorralFusionMachine';machine.visible=false;
 box(machine,4,.06,3.5,0x8eb87d,0,.015,0);box(machine,2.45,.32,1.9,0x52668a,0,.2,0);box(machine,1.7,.9,1.4,0x7961ac,0,.78,0);
 for(const x of[-.85,.85]){cyl(machine,.36,.42,.18,0x82dbd3,x,1.1,0,14);ball(machine,.32,0xadcbea,x,1.43,0,1,1.25,1);}
 const ring=torus(machine,.63,.08,0xe8c578,0,1.7,0);box(machine,.62,.34,.12,0xb9f3db,0,.95,.76);
 for(const x of[-.9,.9])box(machine,.12,1.8,.12,0x52668a,x,1.05,-.6);box(machine,2.1,.18,.22,0xe8c578,0,1.92,-.6);
 label(machine,'MÁQUINA DE FUSÃO',0,2.8,0,4);const glow=ball(machine,.13,0xc6f7ed,0,1.55,0);
 function sync(save){upper.visible=!!save.secondFloor;roof.position.y=save.secondFloor?5.85:3.2;machine.visible=!!save.fusion?.owned;}
 function animate(dt,game){for(const t of treadmills){if(game.mode==='train'&&game.treadmill().id===t.id)t.phase+=dt*2*TREADMILLS[t.id].rate**.35;for(let i=0;i<t.belts.length;i++)t.belts[i].position.z=-1.4+((t.phase+i*.32)%2.8);}if(machine.visible){ring.rotation.y=game.time*.7;glow.scale.setScalar(1+Math.sin(game.time*3)*.1);}}
 return{sync,animate,upper,machine};
}
