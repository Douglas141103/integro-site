import {createEventClock} from './egg-event-clock.js';
import * as T from 'three';
import {createWinterTotem,createWinterBanner,winterDisplayLayout,winterDisplayArea} from './egg-winter-totem.js';
import {WINTER} from './egg-winter-rules.js';
export function icePhoenix(g,limbs,{ball,cyl,rod,softBox,group}){
 const navy=0x316caa,ice=0xb8f6ff,blue=0x57c9ed,white=0xf3fcff;
 ball(g,.43,navy,0,.62,.08,.9,1.25,1.1);ball(g,.28,ice,0,.65,-.24,.9,1.3,.42);
 ball(g,.33,ice,0,1.17,-.15);cyl(g,0,.13,.30,0x73a8d9,0,1.08,-.53,5).rotation.x=-Math.PI/2;
 for(const side of [-1,1]){
  const wing=group(g,side*.34,.94,.05);limbs.push(wing);
  ball(wing,.27,blue,side*.19,.05,.03,1.6,.6,.85);
  for(let j=0;j<7;j++){const feather=ball(wing,.16,j%2?white:blue,side*(.18+j*.15),.09+j*.095,.06+j*.05,.45,2.4,.65);feather.rotation.z=-side*.62;cyl(wing,0,.045,.21,ice,side*(.23+j*.15),.42+j*.095,.06+j*.05,4);}
  softBox(g,.20,.18,.30,0x739dcb,side*.21,.1,-.13);
 }
 for(let j=-2;j<=2;j++){const feather=ball(g,.13,j%2?blue:ice,j*.16,.43,.57+Math.abs(j)*.12,.55,1.05,2.8);feather.rotation.z=j*.18;}
 for(let j=-1;j<=1;j++)cyl(g,0,.085,.38-Math.abs(j)*.08,white,j*.13,1.55,-.07,4);
 rod(g,[-.12,.67,-.365],[.12,.67,-.365],.018,white);rod(g,[0,.53,-.365],[0,.81,-.365],.018,white);
 return{faceY:1.21,faceZ:-.46};
}
export function createWinterWorld({root,base,pen,zoneGroups,player,helpers}){
 const {box,softBox,ball,cyl,torus,rod,group,label,tree,crystal}=helpers,snow=0xf0f8ff;
 const seasonal=[];const seasonalGroup=parent=>{const g=group(parent);g.name="WinterSeasonDecor";seasonal.push(g);return g;};
 const eventBase=seasonalGroup(base),eventPen=seasonalGroup(pen);
 const totem=createWinterTotem(),banner=createWinterBanner();
 // Snow settles in every biome; their landmarks and colours remain recognizable.
 for(let i=0;i<zoneGroups.length;i++){
  const g=seasonalGroup(zoneGroups[i]),z=-(i*48+24);
  for(const side of [-1,1])for(let j=0;j<5;j++){
   const x=side*(6.1+j%2*2.6),zz=z-19+j*9;
   ball(g,1.35,snow,x,.06,zz,1.35,.23,1.7);
   if(j%2===0&&!winterDisplayArea(i,side*11,zz))tree(g,side*11,zz,3,.85+j*.1);
  }
  const layout=winterDisplayLayout(i);
  for(const p of layout.totems){const t=totem.clone(true);t.position.set(p.x,0,p.z);t.rotation.y=p.x<0?-.18:.18;g.add(t);}
  const flag=banner.clone(true);flag.position.set(layout.banner.x,0,layout.banner.z);g.add(flag);
  const cap=box(g,12.8,.13,.66,snow,0,4.84,-i*48);cap.castShadow=false;
 }
 // Winter games village with the custom red-circle event emblem.
 const podium=group(eventBase,-5,0,22.5);
 for(const [x,h,n]of [[-1.6,.7,'2'],[0,1.15,'1'],[1.6,.5,'3']]){softBox(podium,1.5,h,1.5,0x79b4d9,x,h/2,0);box(podium,1.5,.10,1.5,snow,x,h+.05,0);label(podium,n,x,h*.55,-.8,.65,'#144a72','#e8f8ff');}
 for(const [x,y,c]of [[-1.15,3.4,0xe52c42],[0,3.4,0xe52c42],[1.15,3.4,0xe52c42],[-.57,2.8,0xe52c42],[.57,2.8,0xe52c42]])torus(podium,.52,.055,c,x,y,.6);
 label(podium,'INVERNO 2026',0,4.5,.6,5,'#184d74','#eefbff');
 for(const x of [-9,9]){const t=totem.clone(true);t.position.set(x,0,5.8);t.rotation.y=x<0?-.18:.18;eventBase.add(t);}
 for(const side of [-1,1]){rod(eventBase,[side*3.2,0,6],[side*3.2,4.5,6],.06,0xe5f7ff);box(eventBase,1.2,.8,.045,side<0?0x57c5dc:0xa99de4,side*3.2+.6,4,6);}
 for(const x of [-2.8,2.8])ball(eventPen,.5,snow,x,2.88,2.5,1.8,.22,1.3);
 const eventClock=createEventClock(eventBase);
 const winter=zoneGroups[WINTER.world],z=-(WINTER.world*48+24);
 for(const side of [-1,1])for(let j=0;j<5;j++){const zz=z-20+j*9;if(winterDisplayArea(WINTER.world,side*7.5,zz))continue;crystal(winter,side*(6.5+j%2),zz,j%2?0xa6e8fb:0x7fb5de,2.5+j%3);tree(winter,side*10,zz,3,1.4);}
 const arch=torus(winter,6,.28,0x8aceed,0,3,z-13);arch.scale.y=1.3;label(winter,'FÊNIX GELADA',0,7,z-13,6,'#154b75','#eafbff');
 const frost=new T.Group();winter.add(frost);frost.visible=false;
 const iceMat=new T.MeshStandardMaterial({color:0x7bcbea,roughness:.12,metalness:.25,transparent:true,opacity:.8});
 const sheet=new T.Mesh(new T.BoxGeometry(9.4,.025,47.8),iceMat);sheet.position.set(0,.065,z);sheet.receiveShadow=true;frost.add(sheet);
 const cracks=[];for(let j=0;j<20;j++){const x=Math.sin(j*12.31)*4,zz=z-23+j*2.3;cracks.push(x,.085,zz,x+Math.cos(j)*1.4,.085,zz+1.2,x+Math.cos(j)*1.4,.085,zz+1.2,x-.7,.085,zz+1.8);}
 const cracksGeo=new T.BufferGeometry();cracksGeo.setAttribute('position',new T.Float32BufferAttribute(cracks,3));frost.add(new T.LineSegments(cracksGeo,new T.LineBasicMaterial({color:0xe7ffff,transparent:true,opacity:.7})));
 const snowGeo=new T.BufferGeometry(),positions=new Float32Array(150*3);
 for(let i=0;i<150;i++){positions[i*3]=(Math.random()-.5)*26;positions[i*3+1]=Math.random()*13;positions[i*3+2]=(Math.random()-.5)*32;}
 snowGeo.setAttribute('position',new T.BufferAttribute(positions,3));const flakes=new T.Points(snowGeo,new T.PointsMaterial({color:0xffffff,size:.095,transparent:true,opacity:.85,depthWrite:false}));flakes.frustumCulled=false;root.add(flakes);
 const skates=[];
 for(const side of ['L','R']){const foot=player.model.bones['foot'+side],g=group(foot);g.name='WinterSkate'+side;softBox(g,.38,.12,.67,0xb1eaff,0,-.10,-.11);box(g,.065,.10,.61,0x58779d,0,-.20,-.10);softBox(g,.07,.06,.75,0xe2f7ff,0,-.24,-.15);g.visible=false;skates.push(g);}
 return {frost,flakes,skates,eventClock,seasonal,updateEvent(game){for(const g of seasonal)g.visible=game.eventActive;flakes.visible=game.eventActive;eventClock.update(game.now());},update(game,dt,reducedMotion=false){
  this.updateEvent(game);
  const warning=!game.raceMode&&game.time<game.winter.startsAt&&game.winter.startsAt<Infinity;
  frost.visible=game.time<game.winter.until&&!game.raceMode;iceMat.opacity=warning?.2+Math.sin(game.time*10)*.08:.8;
  flakes.position.set(game.player.x,0,game.player.z-7);
  if(!reducedMotion){for(let i=0;i<150;i++){positions[i*3+1]-=dt*(.8+(i%5)*.18);positions[i*3]+=dt*.18;if(positions[i*3+1]<0)positions[i*3+1]=13;if(positions[i*3]>13)positions[i*3]=-13;}snowGeo.attributes.position.needsUpdate=true;}
  for(const skate of skates)skate.visible=game.skatesActive&&!game.jetFlight&&!game.raceMode;
 }};
}
