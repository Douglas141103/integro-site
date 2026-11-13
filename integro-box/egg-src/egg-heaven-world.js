import {HEAVEN,heavenFrame} from './egg-heaven.js';
import {TRACK_WIDTH,TRACK_HALF_WIDTH} from './egg-track.js';

export function skyGuardian(g,limbs,{group,ball,cyl,torus,softBox}){
 g.name='CelestialGuardian';
 ball(g,.44,0xe4efff,0,.66,.04,.9,1.2,1);
 ball(g,.30,0xffedc7,0,1.17,-.15);
 softBox(g,.46,.37,.12,0xe6b957,0,.76,-.34);
 torus(g,.39,.055,0xffda79,0,1.65,-.10).rotation.x=Math.PI/2;
 for(const side of [-1,1]){
  const wing=group(g,side*.36,.96,.08);limbs.push(wing);
  for(let j=0;j<6;j++){const feather=ball(wing,.16,j%2?0xffe4a3:0xf5faff,side*(.16+j*.17),.12+j*.10,.06+j*.04,.6,2.5,.5);feather.rotation.z=-side*.65;}
  softBox(g,.2,.15,.3,0xe6b957,side*.20,.12,-.1);
 }
 return{faceY:1.21,faceZ:-.43};
}
export function createHeavenWorld({helpers}){
 const {group,box,softBox,ball,cyl,torus,label}=helpers,glows=[];
 function door(parent,z,bonus=false){
  const g=group(parent,0,0,z);g.name=bonus?'HeavenExitDoor':'HeavenEntranceDoor';
  for(const side of [-1,1]){
   cyl(g,.38,.55,5.4,0xffe7a3,side*3.1,2.7,0,12);
   ball(g,.5,0xfff6d7,side*3.1,5.5,0);
   const leaf=group(g,side*2.9,0,0);leaf.rotation.y=-side*.63;
   softBox(leaf,2.65,4.7,.18,0xeac87e,-side*1.3,2.35,0);
   for(let j=0;j<4;j++)box(leaf,.065,3.9,.23,0xfff7dc,-side*(.35+j*.57),2.4,0);
   torus(leaf,.15,.045,0xffffff,-side*2.3,2.3,-.18);
  }
  const arch=torus(g,3.1,.2,0xffdf8d,0,5.15,0);arch.scale.y=.6;
  const glow=box(g,5.7,5.1,.04,0xb8eaff,0,2.5,.22);glow.material=glow.material.clone();glow.material.transparent=true;glow.material.opacity=.22;glow.material.depthWrite=false;glows.push(glow);
  label(g,bonus?'SAÍDA · LEVE SEU OVO':'PORTA DO CÉU',0,7.7,0,7.4,'#805319','#fff4d6');
  label(g,bonus?'Volte ao percurso e leve ao curral':'BÔNUS · PISTA DE CABEÇA PARA BAIXO',0,6.9,0,8,'#315b7c','#eaf7ff');
 }
 function add(g){
  g.name='HeavenInvertedTrack';heavenFrame(g,true);
  const z=HEAVEN.start-HEAVEN.length/2;
  const floor=box(g,TRACK_WIDTH,.6,HEAVEN.length,0xfaf3dc,0,-.3,z);floor.name='HeavenCeilingSurface';
  for(const side of [-1,1]){
   box(g,.16,.15,HEAVEN.length,0xe8c06b,side*TRACK_HALF_WIDTH,.55,z);
   for(let j=0;j<=24;j++)cyl(g,.08,.11,.85,0xf9dfa0,side*TRACK_HALF_WIDTH,.4,HEAVEN.start-j*12,8);
  }
  for(let j=0;j<24;j++){
   const zz=HEAVEN.start-8-j*12;
   const star=group(g,0,.025,zz);star.name='HeavenTrailStar';
   for(const angle of [0,Math.PI/4]){const tile=box(star,.16,.025,1.2,0xe8bc55);tile.rotation.y=angle;}
   for(const side of [-1,1])for(let k=0;k<3;k++)ball(g,1.7,0xf2f7ff,side*(TRACK_HALF_WIDTH+2.5+k*.7),-.2+k*.2,zz+k*.8,1.6,.55,1);
   if(j%3===1){const arch=torus(g,TRACK_HALF_WIDTH+1,.13,0xffe2a0,0,0,zz);arch.scale.y=.5;}
  }
  const dais=cyl(g,4.7,5,.22,0xe9d39c,HEAVEN.nest.x,.06,HEAVEN.nest.z,32);dais.name='CelestialNestDais';
  label(g,'GUARDIÃO CELESTIAL',0,6,HEAVEN.nest.z-6,8,'#6d4f29','#fff6d9');
  door(g,HEAVEN.exit.z,true);
 }
 return{add,door,update(time,reduced){for(const glow of glows)glow.material.opacity=reduced?.22:.22+Math.sin(time*1.6)*.05;}};
}
