import {installGuardianArtwork,currentDoorGuardian} from './egg-guardian-art.js';
import {createEggTrapVisuals} from './egg-trap-models.js';
import {shellGeometry,shellSpots} from './egg-shell-model.js';
import {buildCoinWearArt} from './egg-coin-wear-art.js';
import {createGearModel,createGearEffects} from './egg-gear-art.js';
import {EGYPT} from './egg-egypt.js';
import {createEgyptWorld,mummyGuardian} from './egg-egypt-world.js';
import {createSubsoilWorld,magmaGuardian} from './egg-subsoil-world.js';
import {SUBSOIL} from './egg-subsoil.js';
import {HEAVEN} from './egg-heaven.js';
import {createHeavenWorld,skyGuardian} from './egg-heaven-world.js';
import {TRACK_SCALE,TRACK_WIDTH,TRACK_GROUND_WIDTH,TRACK_GATE_HALF_WIDTH,TRACK_GATE_WIDTH,trackSideX} from './egg-track.js';
import {createHouseWorld} from './egg-house-world.js';
import {createProgressionWorld} from './egg-progression-world.js';
import {createHarborScenery} from './egg-harbor-scenery.js';
import {createAuroraScenery} from './egg-aurora-scenery.js';
import {createNeonScenery} from './egg-neon-scenery.js';
import {createGalaxyScenery} from './egg-galaxy-scenery.js';
import {createPopcornScenery} from './egg-popcorn-scenery.js';
import {createStationScenery} from './egg-station-scenery.js';
import {createRockWorld,stoneGiant} from './egg-rock-world.js';
import {createFlameWorld} from './egg-flame-world.js';
import {winterDisplayArea} from './egg-winter-totem.js';
import {icePhoenix,createWinterWorld} from './egg-winter-world.js';
import {WINTER,nestSize,nestPosition} from './egg-winter-rules.js';
import {premiumAccessory} from './egg-intgem-models.js';
import {PREMIUM_BY_NATIVE} from '../egg-intgem-catalog.mjs';
import {expansionCreature,expansionScenery,vehicleModel} from './egg-expansion-models.js';
import {VEHICLES} from './egg-expansion.js';
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {ArtResources} from '../rush-src/art.js';
import {EggExplorer,rigCreature} from './egg-actors.js';
import {WORLDS,LENGTH,NESTS,OBSTACLES,CORRAL,TREADMILL,RARITIES,nestRarity,ACCESSORIES,TRACK_HALF_WIDTH,BASE_HALF_WIDTH,corralSlot} from './egg-rules.js';
export function createEggWorld(scene){
 const materials=new Map(),geometries=new Map(),actorArt=new ArtResources();let actorBuilding=false;
 const mat=(c,glow=false,faceted=false)=>{const key=c+':'+glow+':'+faceted;if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color:c,roughness:.72,flatShading:faceted,emissive:glow?c:0,emissiveIntensity:glow?.35:0}));return materials.get(key)};
 const geo=(key,fn)=>{if(!geometries.has(key))geometries.set(key,fn());return geometries.get(key)};
 const group=(p,x=0,y=0,z=0)=>{const g=new THREE.Group();g.position.set(x,y,z);p.add(g);return g};
 const mesh=(p,geometry,c,x=0,y=0,z=0,glow=false)=>{const m=new THREE.Mesh(geometry,mat(c,glow,geometry.userData.faceted===true));m.position.set(x,y,z);m.receiveShadow=true;p.add(m);return m};
 const box=(p,w,h,d,c,x=0,y=0,z=0)=>mesh(p,geo(`b${w},${h},${d}`,()=>new THREE.BoxGeometry(w,h,d)),c,x,y,z);
 const softBox=(p,w,h,d,c,x=0,y=0,z=0)=>{const radius=Math.min(.09,Math.min(w,h,d)*.22);return mesh(p,geo(`rounded:${w},${h},${d}`,()=>new RoundedBoxGeometry(w,h,d,2,radius)),c,x,y,z)};
 const ball=(p,r,c,x=0,y=0,z=0,sx=1,sy=1,sz=1)=>{const m=mesh(p,geo('s'+r+':'+actorBuilding,()=>new THREE.SphereGeometry(r,actorBuilding?12:r<.12?12:r<.6?24:20,actorBuilding?8:r<.12?8:r<.6?16:12)),c,x,y,z);m.scale.set(sx,sy,sz);return m};
 const cyl=(p,rt,rb,h,c,x=0,y=0,z=0,sides=20)=>{const segments=sides>=7?Math.max(16,sides):sides;return mesh(p,geo(`c${rt},${rb},${h},${segments}`,()=>{const geometry=new THREE.CylinderGeometry(rt,rb,h,segments);geometry.userData.faceted=sides<=6;return geometry}),c,x,y,z)};
 const torus=(p,r,t,c,x=0,y=0,z=0)=>mesh(p,geo(`t${r},${t}`,()=>new THREE.TorusGeometry(r,t,8,r<.2?20:36)),c,x,y,z);
 const rod=(p,a,b,r,c)=>{const va=new THREE.Vector3(...a),v=new THREE.Vector3(...b).sub(va),m=cyl(p,r,r,v.length(),c,...va.addScaledVector(v,.5).toArray());m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());return m};
 const label=(p,text,x,y,z,w=3,color='#233d46',bg='#fff6d9')=>{const cv=document.createElement('canvas');cv.width=512;cv.height=128;const c=cv.getContext('2d');c.fillStyle=bg;c.beginPath();c.roundRect(4,4,504,120,22);c.fill();c.fillStyle=color;c.font='bold 40px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText(text,256,66,480);const texture=new THREE.CanvasTexture(cv);texture.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthWrite:false}));sprite.position.set(x,y,z);sprite.scale.set(w,w/4,1);p.add(sprite);return sprite};
 function trainingPlaque(p){const cv=document.createElement('canvas');cv.width=640;cv.height=288;const texture=new THREE.CanvasTexture(cv);texture.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthWrite:false}));sprite.position.set(0,2.4,0);sprite.scale.set(4.2,1.89,1);p.add(sprite);return{canvas:cv,texture,sprite}}
 function setTrainingPlaque(i,advice,eventActive=true){const plaque=nests[i].plaque,c=plaque.canvas.getContext('2d');c.clearRect(0,0,640,288);c.fillStyle=advice.ready?'#daf3cf':'#fff1c8';c.beginPath();c.roundRect(5,5,630,278,28);c.fill();c.strokeStyle=advice.ready?'#4b8c55':'#b48135';c.lineWidth=8;c.stroke();c.textAlign='center';c.textBaseline='middle';c.fillStyle='#345047';c.font='bold 30px Arial';c.fillText('TREINO RECOMENDADO',320,52);c.font='bold 54px Arial';c.fillText('NÍVEL '+advice.level,320,115);c.font='bold 34px Arial';c.fillText(advice.ready?'Você já tem esse treino!':'Faltam '+advice.remaining+' níveis',320,178);c.fillStyle='#876323';c.font='bold 24px Arial';c.fillText(i===WINTER.world&&eventActive?'5 OVOS · INVERNO 2026':'3 OVOS · RARIDADES E MUTAÇÕES',320,240);plaque.texture.needsUpdate=true;plaque.sprite.userData.advice={...advice}}
 function egg(p,color,scale=1,rarity="common"){const g=group(p);g.scale.setScalar(scale);mesh(g,geo('egg-shell',shellGeometry),RARITIES[rarity].color,0,.5,0);mesh(g,geo('egg-spots',shellSpots),rarity==='common'&&color===WORLDS[0].color?0x30bfbd:color,0,.5,0);if(rarity!=='common'){torus(g,.44,.025,RARITIES[rarity].color,0,.06,0).rotation.x=Math.PI/2;for(let j=0;j<RARITIES[rarity].mult-1;j++){const a=j*2.4;cyl(g,0,.06,.15,0xfff0b0,Math.sin(a)*.47,.75+(j%2)*.2,Math.cos(a)*.47,4)}}return g}
 function creature(p,kind,color,scale=1,rarity="common"){actorBuilding=true;const g=group(p);g.scale.setScalar(scale);const limbs=[];const dark=0x263a4b,cream=0xffe8ba;let faceZ=-.35,faceY=.92;
  if(kind==='mummy'){({faceY,faceZ}=mummyGuardian(g,limbs,{group,box,ball,cyl,torus}));}
  else if(kind==='chick'){ball(g,.43,color,0,.51,0,1,1.1,.9);ball(g,.31,color,0,1.0,-.07);cyl(g,0,.13,.24,0xef8644,0,.94,-.43,4).rotation.x=-Math.PI/2;for(const x of[-.16,.16])softBox(g,.18,.09,.30,0xef8644,x,.06,-.06);for(const x of[-.42,.42]){const wing=ball(g,.22,color,x,.61,0,.45,1.15,.9);limbs.push(wing)}for(let i=0;i<3;i++)ball(g,.095,0xe86b60,(i-1)*.09,1.28,-.05);faceY=1.06;faceZ=-.35;}
  else if(kind==='fox'||kind==='cat'){ball(g,.36,color,0,.47,.06,1,1.1,1.35);ball(g,.34,color,0,.95,-.18,1.08,.92,.95);ball(g,.19,cream,0,.83,-.43,1,.65,.7);ball(g,.065,dark,0,.9,-.55);for(const x of[-.24,.24]){const ear=cyl(g,0,.16,.40,color,x,1.31,-.16,4);ear.rotation.z=x<0?.18:-.18;ball(g,.07,0xf4b3c9,x,1.35,-.28,1,1.8,.3)}for(const x of[-.21,.21]){const leg=softBox(g,.16,.28,.23,color,x,.16,-.12);limbs.push(leg)}const tail=group(g,0,.40,.47);ball(tail,.20,color,0,.22,.24,1,1.2,2.1);ball(tail,.14,cream,0,.32,.52,1,1,1.3);tail.rotation.x=-.3;limbs.push(tail);faceY=1.0;faceZ=-.48;if(kind==='cat'){torus(g,.20,.025,0xf6d477,0,1.7,-.16).rotation.x=Math.PI/2;for(const x of[-.44,.44]){const wing=ball(g,.27,0x899be1,x,.72,.1,.45,.6,1.5);wing.rotation.z=x;limbs.push(wing)}}}
  else if(kind==='deer'){ball(g,.38,color,0,.55,.06,.8,1,1.4);ball(g,.26,0xbfdd9d,0,1.06,-.23,.9,1.1,1);ball(g,.14,cream,0,.99,-.48);ball(g,.045,dark,0,1.04,-.60);for(const x of[-.22,.22]){ball(g,.16,color,x,1.18,-.24,1.5,.5,.65);rod(g,[x*.6,1.25,-.2],[x,1.67,-.2],.038,0xbc925a);rod(g,[x*.85,1.47,-.2],[x*1.7,1.56,-.2],.026,0xbc925a)}for(const x of[-.19,.19])for(const z of[-.24,.29]){const l=cyl(g,.055,.055,.37,0x728b56,x,.2,z);limbs.push(l)}for(const x of[-.16,.16])ball(g,.048,cream,x,.65,-.29);faceY=1.12;faceZ=-.46;}
  else if(kind==='penguin'){ball(g,.44,0x325a87,0,.61,0,1,1.4,.85);ball(g,.32,0xf5f5e7,0,.55,-.19,1,1.5,.6);ball(g,.3,0x325a87,0,1.1,-.06);cyl(g,0,.12,.22,0xf2bd55,0,1.0,-.4,4).rotation.x=-Math.PI/2;for(const x of[-.42,.42]){const f=ball(g,.21,color,x,.65,0,.45,1.8,.8);f.rotation.z=x*.7;limbs.push(f)}for(const x of[-.2,.2])ball(g,.16,0xf2bd55,x,.07,-.13,1,.35,1.4);torus(g,.32,.065,color,0,.89,-.04).rotation.x=Math.PI/2;faceY=1.13;faceZ=-.34;}
  else if(kind==='dragon'){ball(g,.42,color,0,.52,.07,1,1.1,1.2);ball(g,.31,color,0,1.06,-.23);ball(g,.21,0xf3ba66,0,.94,-.48,1,.7,1);for(const x of[-.20,.20])cyl(g,0,.075,.27,cream,x,1.41,-.1,5);for(const x of[-.56,.56]){const wing=group(g,x,.92,.12);cyl(wing,0,.35,.62,0xa75b72,0,0,0,3).rotation.z=x>0?-1.1:1.1;limbs.push(wing)}for(let i=0;i<4;i++)cyl(g,0,.11,.18,0xfad45d,0,.93-i*.13,.24+i*.18,4);for(const x of[-.24,.24]){const l=softBox(g,.19,.25,.31,color,x,.13,-.1);limbs.push(l)}ball(g,.18,color,0,.28,.6,1,.7,2.1);faceY=1.13;faceZ=-.5;}
  else if(kind==='turtle'){ball(g,.52,0x6a82a2,0,.49,.10,1,.7,1.2);for(let i=0;i<5;i++){const a=i*1.256;cyl(g,0,.18,.42,color,Math.sin(a)*.3,.8,Math.cos(a)*.34+.1,5)}ball(g,.24,0x89c6b9,0,.4,-.56);for(const x of[-.42,.42])for(const z of[-.23,.39]){const l=ball(g,.15,0x89c6b9,x,.12,z,1,.55,1.25);limbs.push(l)}faceY=.47;faceZ=-.77;}
  else if(kind==='axolotl'){ball(g,.36,color,0,.38,.12,1,.7,1.6);ball(g,.34,0xffd2e2,0,.7,-.24,1.25,.8,1);for(const x of[-.38,.38])for(let j=0;j<3;j++){rod(g,[x*.75,.7,-.2],[x*1.5,.55+j*.18,-.17],.05,color);ball(g,.08,color,x*1.5,.55+j*.18,-.17)}for(const x of[-.3,.3])for(const z of[-.1,.4]){const l=ball(g,.14,color,x,.13,z,1,.5,1.3);limbs.push(l)}ball(g,.18,color,0,.32,.67,.35,1,1.8);faceY=.73;faceZ=-.54;}
  else if(kind==='rabbit'){ball(g,.37,color,0,.44,.04,1,1.2,1);ball(g,.32,0xffe4d0,0,.99,-.13);for(const x of[-.16,.16]){ball(g,.16,color,x,1.47,-.08,.7,2.1,.7);ball(g,.08,0xf69cba,x,1.5,-.17,.6,2.2,.4)}for(const x of[-.24,.24]){const foot=ball(g,.20,color,x,.12,-.1,.8,.6,1.5);limbs.push(foot)}ball(g,.18,0xfff7ea,0,.45,.44);ball(g,.06,0xde8192,0,.91,-.43);faceY=1.04;faceZ=-.41;}
  else if(kind==='panda'){ball(g,.46,0xf2f3dd,0,.52,0,1,1.12,1);ball(g,.36,0xf2f3dd,0,1.07,-.12,1.12,.96,1);for(const x of[-.31,.31])ball(g,.15,0x274e4b,x,1.31,-.1);for(const x of[-.15,.15])ball(g,.12,0x274e4b,x,1.08,-.42,1,1.2,.3);for(const x of[-.37,.37]){const arm=ball(g,.19,0x274e4b,x,.58,0,.75,1.5,.8);limbs.push(arm)}for(const x of[-.23,.23])ball(g,.18,0x274e4b,x,.13,-.05);torus(g,.33,.065,color,0,.81,-.02).rotation.x=Math.PI/2;ball(g,.06,0x274e4b,0,.96,-.47);faceY=1.1;faceZ=-.46;}
  else if(kind==='robot'){softBox(g,.66,.60,.46,0x7faac7,0,.65,0);softBox(g,.66,.46,.48,color,0,1.22,-.06);softBox(g,.5,.25,.03,0x29465f,0,1.25,-.31);softBox(g,.28,.23,.04,color,0,.69,-.25);rod(g,[0,1.45,0],[0,1.68,0],.035,0x7faac7);ball(g,.09,0xa5f7cf,0,1.7,0);for(const x of[-.45,.45]){const arm=softBox(g,.17,.46,.21,color,x,.64,0);limbs.push(arm)}for(const x of[-.2,.2]){const leg=softBox(g,.20,.35,.28,0x405b7d,x,.19,0);limbs.push(leg)}faceY=1.25;faceZ=-.33;}
  else if(kind==='griffin'){ball(g,.4,color,0,.52,.09,1,1.1,1.2);ball(g,.32,0xfff4d5,0,1.08,-.17);cyl(g,0,.12,.3,0xf4bb64,0,1.0,-.54,4).rotation.x=-Math.PI/2;for(const x of[-.58,.58]){const wing=group(g,x,.85,.1);for(let j=0;j<3;j++)ball(wing,.22,j%2?color:0xfff4d5,Math.sign(x)*j*.13,j*.13,j*.12,.5,1.6,1);limbs.push(wing)}for(const x of[-.23,.23]){const foot=softBox(g,.2,.22,.3,0xf4bb64,x,.12,-.12);limbs.push(foot)}cyl(g,0,.2,.3,0xf4bb64,0,1.46,-.1,5);faceY=1.15;faceZ=-.45;}
  else if(kind==='magmaGuardian'){({faceY,faceZ}=magmaGuardian(g,limbs,{group,ball,cyl,box}));}
  else if(kind==='stoneGiant'){const face=stoneGiant(g,limbs,{group,cyl,box});faceY=face.faceY;faceZ=face.faceZ;}
  else if(kind==='icePhoenix'){const face=icePhoenix(g,limbs,{ball,cyl,rod,softBox,group});faceY=face.faceY;faceZ=face.faceZ;}
  else if(kind==='skyGuardian'){({faceY,faceZ}=skyGuardian(g,limbs,{group,ball,cyl,torus,softBox}));}
  else if(kind==='phoenix'){ball(g,.4,0x5068be,0,.58,.08,.9,1.2,1.1);ball(g,.31,0x90efff,0,1.12,-.16);cyl(g,0,.12,.29,0xffd46e,0,1.02,-.51,5).rotation.x=-Math.PI/2;for(const side of[-1,1]){const wing=group(g,side*.35,.86,.05);for(let j=0;j<5;j++){const f=ball(wing,.19,j%2?0xa4f4ff:0x947cfa,side*(.12+j*.15),.1+j*.12,.06+j*.04,.45,2.2,.7);f.rotation.z=-side*.55;}limbs.push(wing);softBox(g,.2,.2,.3,0xffd46e,side*.22,.12,-.16);}for(let j=-1;j<=1;j++){const f=ball(g,.14,0xb395ff,j*.2,.4,.55+Math.abs(j)*.09,.6,1,2.2);f.rotation.z=j*.25;}for(let j=-1;j<=1;j++)cyl(g,0,.075,.32,0xffdf75,j*.12,1.5,-.07,4);faceY=1.17;faceZ=-.44;}
  else if(kind==='clockOwl'){ball(g,.46,0x527e81,0,.63,0,1,1.3,.9);ball(g,.37,0xc2e8d5,0,1.16,-.1,1.1,1,.85);for(const side of[-1,1]){torus(g,.17,.04,0xf2ce81,side*.17,1.19,-.39);cyl(g,0,.1,.22,0x527e81,side*.28,1.52,-.02,3);const wing=group(g,side*.4,.7,.07);for(let j=0;j<3;j++)ball(wing,.16,j%2?0xc2e8d5:0x6baba4,side*j*.08,-j*.12,0,.5,1.6,1);limbs.push(wing);softBox(g,.17,.08,.25,0xeab960,side*.17,.06,-.05);}cyl(g,0,.08,.18,0xeab960,0,1.08,-.43,3).rotation.x=-Math.PI/2;torus(g,.24,.035,0xf2ce81,0,.64,-.36);ball(g,.2,0xffedc8,0,.64,-.36,1,1,.14);rod(g,[0,.64,-.4],[0,.79,-.4],.018,0x354c62);rod(g,[0,.64,-.4],[.13,.6,-.4],.016,0x354c62);faceY=1.2;faceZ=-.43;}
  const expanded=expansionCreature(g,kind,color,limbs,{ball,cyl,torus,rod,softBox,group});if(expanded){faceY=expanded.faceY;faceZ=expanded.faceZ;}
  if(rarity!=='common')torus(g,.55,.035,RARITIES[rarity].color,0,.055,0).rotation.x=Math.PI/2;const ex=kind==='turtle'?.10:.12;for(const x of[-ex,ex]){ball(g,.065,0xffffff,x,faceY,faceZ);ball(g,.035,dark,x,faceY,faceZ-.055);ball(g,.012,0xffffff,x-.01,faceY+.015,faceZ-.084)}g.traverse(o=>{if(o.isMesh)o.castShadow=true});actorBuilding=false;return rigCreature(g,limbs,kind,color,actorArt);
 }
 function accessory(parent,id){
  const model=group(parent);
  const premium=PREMIUM_BY_NATIVE[id];
  if(premium)premiumAccessory(model,premium,{ball,cyl,torus,rod,softBox,mesh,geo});
  else buildCoinWearArt(actorArt,model,id);
  return model;
 }
 function equipAccessories(hero,equipped){hero.equip(equipped,accessory)}
 function shopItem(parent,id){
  if(ACCESSORIES[id])return accessory(parent,id);
  const model=VEHICLES[id]?vehicleModel(actorArt,id,VEHICLES[id]):createGearModel(actorArt,id);
  if(model)parent.add(model);
  return model;
 }
 function hero(p,color){return new EggExplorer(actorArt,p,color)}
 let seasonOn=true;const seasonalTrees=[],seasonalSurfaces=[];
 function seasonalSurface(mesh,normal){mesh.material=mesh.material.clone();seasonalSurfaces.push({mesh,normal,winter:mesh.material.color.getHex()});return mesh;}
 function updateSeason(active){seasonOn=active;penFloor.material=mat(new THREE.Color(penFloor.userData.normal??0x94c67d).lerp(new THREE.Color(0xe8f5ff),active?.8:0).getHex());roof.material=mat(new THREE.Color(roof.userData.normal??0x7764b1).lerp(new THREE.Color(0xe8f5ff),active?.65:0).getHex());for(const {mesh,normal,winter}of seasonalSurfaces)mesh.material.color.setHex(active?winter:normal);for(const {normal,snow}of seasonalTrees){normal.visible=!active;snow.visible=active;}}
 function tree(p,x,z,type=0,size=1){const g=group(p,x,0,z);g.name='SceneryTree';g.scale.setScalar(size);cyl(g,.15,.22,1.5,0x946f4c,0,.75,0,7);
  const snow=group(g),normal=group(g);normal.visible=false;seasonalTrees.push({normal,snow});
  for(let i=0;i<3;i++)cyl(snow,0,1.05-i*.21,1.4,[0xb1d6db,0xe5f6ed,0xf7fcf8][i],0,1.65+i*.55,0,7);
  if(type===3){for(let i=0;i<3;i++)cyl(normal,0,1.05-i*.21,1.4,[0xb1d6db,0xe5f6ed,0xf7fcf8][i],0,1.65+i*.55,0,7);}else{ball(normal,1.03,type===2?0x627cc2:0x3e925c,0,2,0,1,1.0,.9);ball(normal,.73,type===2?0x88b290:0x70b65c,.51,2.35,.1);ball(normal,.65,type===2?0x9ca6d9:0x76b967,-.5,2.05,-.1);}
 }

 function crystal(p,x,z,color,height=2){const g=group(p,x,0,z);cyl(g,0,.53,height,color,0,height/2,0,5);const c=cyl(g,0,.29,height*.7,color,.43,height*.33,.2,5);c.rotation.z=-.35;return g}
 const rock=createRockWorld({helpers:{group,cyl,torus,box}});
 const harbor=createHarborScenery({group,box,softBox,cyl,ball,torus,rod,actorArt});
 const station=createStationScenery({group,box,softBox,cyl,ball,label});
 const aurora=createAuroraScenery();
 const neon=createNeonScenery({group,box,softBox,cyl,ball,rod,actorArt});
 const galaxy=createGalaxyScenery({group,ball,torus});
 const popcorn=createPopcornScenery({group,box,softBox,ball,cyl,torus});
 const flame=createFlameWorld({helpers:{group,box,ball,cyl,rod,torus,seasonalSurface}});
 const root=group(scene),base=group(root),zoneGroups=[],nests=[],guardians=[],animated=[];const heaven=createHeavenWorld({helpers:{group,box,softBox,ball,cyl,torus,label}});
 seasonalSurface(box(base,TRACK_GROUND_WIDTH,.7,30,0xd1e8f5,0,-.43,12),0x69ad73);seasonalSurface(box(base,TRACK_WIDTH,.04,30,0xc4dfef,0,-.025,12),0xe2cda0);box(base,28,.3,1,0x598961,0,-.22,50);
 // Safe base: fenced pasture, shaded nests, shop cart and a physical treadmill.
 for(const side of[-1,1]){rod(base,[side*TRACK_HALF_WIDTH,.57,0],[side*TRACK_HALF_WIDTH,.57,3],.06,0xf4dfb3);rod(base,[side*TRACK_HALF_WIDTH,.57,3],[side*BASE_HALF_WIDTH,.57,8],.06,0xf4dfb3);cyl(base,.075,.10,.8,0x39b4ac,side*TRACK_HALF_WIDTH,.4,3,8);cyl(base,.075,.10,.8,0x39b4ac,side*BASE_HALF_WIDTH,.4,8,8);}
 const pen=group(base,CORRAL.x,0,CORRAL.z);const penFloor=box(pen,7,.08,7.8,0x94c67d,0,.02,0);for(const x of[-3.5,3.5])for(let z=-3.5;z<4;z+=1.4){box(pen,.13,.9,.13,0xf4dfb3,x,.5,z);box(pen,.10,.13,1.45,0xf4dfb3,x,.72,z+.5);box(pen,.10,.13,1.45,0xf4dfb3,x,.33,z+.5)}for(let x=-3.5;x<4;x+=1.4){box(pen,.13,.9,.13,0xf4dfb3,x,.5,3.8);box(pen,1.4,.12,.12,0xf4dfb3,x+.5,.72,3.8)}for(const x of[-2.8,2.8])box(pen,.18,2.9,.18,0xb28d60,x,1.45,2.5);const roof=cyl(pen,0,4.5,1.2,0x7764b1,0,3.2,2.5,4);roof.rotation.y=Math.PI/4;roof.scale.z=.48;label(pen,'SEU CURRAL',0,2.1,-3.7,3.7);const penContent=group(pen);const penDecor=group(pen);
 const progression=createProgressionWorld({base,pen,roof,penContent,penDecor,helpers:{group,box,cyl,rod,torus,ball,label}});const shop=group(base,7,0,21);box(shop,2.8,1.25,1.6,0xe5af65,0,.67,0);box(shop,3.2,.16,2,0xf8deb0,0,1.34,0);for(const x of[-1.4,1.4])box(shop,.12,2.6,.12,0x537c93,x,1.5,0);box(shop,3.4,.2,2,0x39b4ac,0,2.7,0);label(shop,'LOJA',0,3.25,0,3);for(const x of[-12,12])tree(base,x,24,0,1.0);label(base,'BASE SEGURA',0,3.7,4,4.3);box(base,23,.06,.32,0xc8f39b,0,.025,3);
 for(let i=0;i<WORLDS.length;i++){const w=WORLDS[i],z=-(i*LENGTH+LENGTH/2),g=group(root);zoneGroups.push(g);if(i===HEAVEN.world)heaven.add(g);else if(i!==SUBSOIL.world&&i!==EGYPT.world){flame.ground(g,w,i);flame.scenery(g,i);rock.ground(g,i);rock.scenery(g,i);for(const x of[-TRACK_HALF_WIDTH-.35,TRACK_HALF_WIDTH+.35])box(g,.20,.08,LENGTH,w.color,x,.03,z);for(let j=0;j<6;j++)box(g,.10,.01,1.7,0xffedca,0,.013,-i*LENGTH-j*8-3);
  for(const side of[-1,1]){const edge=side*TRACK_HALF_WIDTH;box(g,.10,.12,LENGTH,0xf4dfb3,edge,.57,z);for(let j=0;j<6;j++)cyl(g,.075,.10,.8,w.color,edge,.40,-i*LENGTH-j*8,8);}
  const gate=group(g,0,0,-i*LENGTH);gate.name="TrackGate";for(const x of[-TRACK_GATE_HALF_WIDTH,TRACK_GATE_HALF_WIDTH]){box(gate,.42,4.3,.48,w.color,x,2.15,0);box(gate,.7,.2,.75,0xf9e9ba,x,4.35,0)}box(gate,TRACK_GATE_WIDTH,.38,.48,w.color,0,4.6,0);label(gate,`${i+1} · ${w.name.toUpperCase()}`,0,5.25,0,6.3);
  for(let j=0;j<10;j++){const side=j%2?1:-1,x=trackSideX(side*(7+(j%3)*2)),zz=-i*LENGTH-5-j*4.1;
   if(winterDisplayArea(i,x,zz))continue;
   if(i===0&&j%3===2){tree(g,x,zz,0,.8+(j%3)*.22);for(let k=0;k<3;k++){cyl(g,.03,.03,.55,0x528d4e,x+.4*k,.25,zz+1);ball(g,.15,0xf4ca5c,x+.4*k,.55,zz+1,1,.65,1)}}
   if(i===1){if(j%3===0){ball(g,2.4,0xe6b575,x,-.15,zz,1,.78,1.35);ball(g,1.4,0xf1c68a,x-side*.8,-.18,zz+1.8,1.4,.45,1.1)}else{cyl(g,.22,.26,2.2,0x6ba76c,x,1.05,zz,7);rod(g,[x,.8,zz],[x+side*.65,.8,zz],.15,0x6ba76c);cyl(g,.15,.15,.85,0x6ba76c,x+side*.65,1.2,zz,7)}}
   if(i===2){tree(g,x,zz,2,1.0);const mushroom=group(g,x-side*1.0,0,zz+1.4);cyl(mushroom,.16,.21,.85,0xebcfb6,0,.4,0);ball(mushroom,.68,j%2?0x9c80db:0xe990a9,0,1,0,1,.47,1);for(const dx of[-.2,.2])ball(mushroom,.10,0xffecd0,dx,1.28,.18,1,.3,1)}
   if(i===3){tree(g,x,zz,3,1);if(j%2)crystal(g,x-side,zz+1.7,0x88d6ea,1.6);ball(g,.75,0xf7faf0,x+side, .3,zz-1,1,.5,1.3)}
   if(i===4){const volcano=mesh(g,geo('volcano-slope',()=>new THREE.LatheGeometry([new THREE.Vector2(2.2,0),new THREE.Vector2(1.75,.3),new THREE.Vector2(1.22,1.0),new THREE.Vector2(.82,2.15),new THREE.Vector2(.56,3.1),new THREE.Vector2(.38,3.1),new THREE.Vector2(.32,2.85)],24)),0x473e53,x,0,zz);cyl(g,.40,.56,.12,0xffac57,x,3.10,zz,8);box(g,1.3,.02,3.2,0xf27b43,x-side,.01,zz+1);crystal(g,x-side*1.5,zz-1,0xbd6261,.8)}
   if(i===5){crystal(g,x,zz,j%2?0xaf95ee:0x72cfe1,2.4+(j%3)*.5);if(j%3===0){const arch=mesh(g,geo('crystalArch',()=>new THREE.TorusGeometry(3.1,.36,8,32,Math.PI)),0x5b608e,0,0,zz);arch.scale.set(2.3*TRACK_SCALE,1.8,1)}}
   if(i===6){crystal(g,x,zz,0x8a8dcb,1.2);const orb=ball(g,.42,j%2?0xe8b9ef:0x8ecbdc,x,3+(j%3),zz);animated.push({mesh:orb,y:orb.position.y,phase:j});if(j%3===0){const planet=ball(g,1.1,0x9c8be0,x+side*2,5.5,zz);torus(g,1.6,.055,0xf3d189,x+side*2,5.5,zz).rotation.x=1.0;animated.push({mesh:planet,y:5.5,phase:j})}}
   if(i===7){box(g,5,.04,3,0x68d4d7,x,-.005,zz);for(let k=0;k<3;k++){const h=.8+k*.5;rod(g,[x+k*.32,0,zz],[x+k*.32,h,zz],.12,k%2?0xffad88:0xf598c2);rod(g,[x+k*.32,h*.6,zz],[x+k*.32+.4,h*.9,zz+.1],.09,0xf598c2)}const pearl=ball(g,.22,0xfff7e7,x-side*.8,.3,zz+.9);if(j%2===0){torus(g,1.05,.13,0xf2b1c9,x,1.1,zz).rotation.y=.4;}}
   if(i===8){cyl(g,.09,.09,2.6,0xfff6e1,x,1.3,zz);const candy=ball(g,.65,j%2?0xf07aad:0x83dbce,x,2.6,zz,1,1,.4);torus(g,.42,.08,0xffedc6,x,2.6,zz-.28);if(j%3===0){box(g,1.9,1.4,1.6,0xc38764,x+side*1.2,.7,zz+1.4);box(g,2.1,.28,1.8,0xffdfeb,x+side*1.2,1.55,zz+1.4)}}
   if(i===9){for(let k=0;k<3;k++){const xx=x+(k-1)*.5,h=3.4+(j%3)*.5;cyl(g,.1,.15,h,0x7acd79,xx,h/2,zz+k*.25,7);for(let h2=.6;h2<h;h2+=.7){torus(g,.12,.025,0xd5eeb3,xx,h2,zz+k*.25).rotation.x=Math.PI/2;ball(g,.35,0x2b855f,xx+side*.22,h2+.2,zz+k*.25,.9,.18,.6)}}if(j%3===0){box(g,1.8,.32,1.8,0x687d70,x,.16,zz+1.5);cyl(g,0,1.0,.6,0xc04d55,x,1.6,zz+1.5,4);box(g,.5,1.1,.5,0xffe6a5,x,.8,zz+1.5)}}
   if(i===10){const h=2+(j%3)*1.5;box(g,2,h,2,0x46688c,x,h/2,zz);for(let k=0;k<3;k++)box(g,.28,.28,.03,0x8bf7df,x+(k-1)*.5,h*.65,zz-1.02);const gear=group(g,x,2.1,zz+1.6);torus(gear,.65,.16,0xf2c66b);for(let k=0;k<8;k++){const a=k*Math.PI/4,t=box(gear,.24,.35,.2,0xf2c66b,Math.sin(a)*.83,Math.cos(a)*.83,0);t.rotation.z=-a}animated.push({mesh:gear,y:gear.position.y,phase:j,spin:true})}
   if(i===11){for(let k=0;k<3;k++)ball(g,1.3,0xf4f5ff,x+(k-1)*.7,.5,zz,1,.45,1);cyl(g,.3,.4,3.4,0xfff2d8,x,1.7,zz,10);box(g,1.1,.23,1.1,0xe7ba69,x,3.5,zz);if(j%2===0){torus(g,1.1,.10,0xd6acff,x,4.4,zz);const star=ball(g,.22,0xffd271,x,4.4,zz);animated.push({mesh:star,y:4.4,phase:j})}}
  }
  if(i===12){for(const side of[-1,1]){const x=trackSideX(side*7);for(let j=0;j<4;j++){const zz=z-18+j*12;cyl(g,.55,.75,3.8,0x7777a8,x,1.9,zz,10);torus(g,.65,.10,0xa5eaf4,x,3.8,zz).rotation.x=Math.PI/2;const orb=ball(g,.32,0xffdf8a,x,4.3,zz);animated.push({mesh:orb,y:4.3,phase:j+side});rod(g,[x,4.6,zz],[x-side*.45,5.3,zz],.075,0xa8edff);rod(g,[x-side*.45,5.3,zz],[x+side*.2,5.3,zz],.075,0xa8edff);rod(g,[x+side*.2,5.3,zz],[x-side*.4,6.1,zz],.075,0xa8edff);for(let k=0;k<3;k++)ball(g,.9,0x8596bd,x+side*(1+k*.5),4.6,zz+k*.3,1,.5,1);}}}
  if(i===13){for(const side of[-1,1])for(let j=0;j<5;j++){const x=trackSideX(side*(7+j%2*2)),zz=z-19+j*9;const monument=group(g,x,0,zz);if(j%2===0){cyl(monument,.7,.9,2.9,0x527e81,0,1.45,0,12);torus(monument,1.05,.12,0xf2ce81,0,3.4,0);ball(monument,.94,0xffedc8,0,3.4,0,1,1,.13);for(let k=0;k<12;k++){const a=k*Math.PI/6;softBox(monument,.07,.16,.04,0x527e81,Math.sin(a)*.81,3.4+Math.cos(a)*.81,-.15);}const hands=group(monument,0,3.4,-.2);rod(hands,[0,0,0],[0,.7,0],.045,0x527e81);rod(hands,[0,0,0],[.5,0,0],.035,0xdca655);animated.push({mesh:hands,y:3.4,phase:j,spin:true});}else{for(const y of[.3,3.5])cyl(monument,.9,.9,.18,0xe5bf75,0,y,0);for(const xx of[-.75,.75])rod(monument,[xx,.3,0],[xx,3.5,0],.09,0x527e81);cyl(monument,.7,.08,1.4,0xa5e4dd,0,2.65,0,16);cyl(monument,.08,.7,1.4,0xa5e4dd,0,1.15,0,16);cyl(monument,0,.5,.6,0xe5bf75,0,.7,-.15,12);}for(let k=0;k<3;k++)ball(g,.45,0x78baa6,x+side*(1+k*.3),.4,zz+1,1,.45,1);}const arch=torus(g,5.8,.18,0xe5bf75,0,3,z);arch.scale.set(TRACK_SCALE,1.2,1);}
  harbor.add(g,i,z);station.add(g,i,z);galaxy.add(g,i);popcorn.add(g,i);aurora.add(g,i);neon.add(g,i);
  if(i>=14&&i<18)expansionScenery(g,i,z,{ball,cyl,torus,rod,softBox,box,group,label,animated});
  }const n=NESTS[i],nest=group(g,n.x,n.y||0,n.z);cyl(nest,1.55,1.7,.2,0x9a7752,0,.1,0);for(let j=0;j<3;j++)torus(nest,1.45-j*.12,.065,0xe3c27b,0,.22+j*.035,0).rotation.x=Math.PI/2;const eggs=Array.from({length:nestSize(i)},(_,slot)=>{const e=egg(nest,w.color,.8,nestRarity(i,slot)),pos=nestPosition(i,slot);e.position.set(pos.x,.2,pos.z);return e});const plaque=trainingPlaque(nest);nests.push({g:nest,eggs,plaque});const guard=creature(g,w.kind,w.color,w.kind==='stoneGiant'?3.2:1.65);guard.g.position.set(n.x,0,n.z-2.5);label(guard.g,i===EGYPT.world?'MÚMIA DO FARAÓ':i===SUBSOIL.world?'GUARDIÃO DE MAGMA':i===HEAVEN.world?'GUARDIÃO CELESTIAL':i===22?'GRANDE PEDREGULHO':i===WINTER.world?'FÊNIX GELADA':'DONO DO OVO',0,2.9,0,2.6);installGuardianArtwork(guard,i);guardians.push(guard);
 }
 for(const o of OBSTACLES){const g=zoneGroups[o.world];if(o.edge){flame.pebble(g,o);}else if(o.world===0||o.world===2){const log=cyl(g,.40,.40,1.55,0x9c7452,o.x,.37,o.z,8);log.rotation.z=Math.PI/2}else if(o.world===1)box(g,1.35,o.h,1.1,0xbb905e,o.x,o.h/2,o.z);else if(o.world===3)crystal(g,o.x,o.z,0xb2e4eb,o.h);else if(o.world===4)cyl(g,.35,.8,o.h,0x925961,o.x,o.h/2,o.z,6);else if(o.world===8){cyl(g,.55,.66,o.h,0xf7a7b6,o.x,o.h/2,o.z);torus(g,.5,.09,0xfff0d4,o.x,o.h,o.z).rotation.x=Math.PI/2}else if(o.world===9){const log=cyl(g,.32,.32,1.4,0x73bc71,o.x,.32,o.z,7);log.rotation.z=Math.PI/2}else if(o.world===10)box(g,1.2,o.h,1.2,0xdeb668,o.x,o.h/2,o.z);else crystal(g,o.x,o.z,WORLDS[o.world].color,o.h)}
 const egypt=createEgyptWorld({root,entrance:zoneGroups[1],content:zoneGroups[EGYPT.world],helpers:{group,box,ball,cyl,torus,label}});
 heaven.door(zoneGroups[HEAVEN.world-1],HEAVEN.gate.z);const subsoil=createSubsoilWorld({root,entrance:zoneGroups[HEAVEN.world-1],content:zoneGroups[SUBSOIL.world],helpers:{group,box,ball,cyl,torus,label}});const end=group(zoneGroups[HEAVEN.world-1],0,0,-LENGTH*HEAVEN.world+1);box(end,TRACK_WIDTH+8.5,.45,1,0x696a9a,0,.2,0);
 const playerFrame=group(root);playerFrame.name="ExplorerGravityFrame";const player=hero(playerFrame);const shieldBubble=new THREE.Mesh(new THREE.SphereGeometry(1.15,28,18),new THREE.MeshBasicMaterial({color:0x86eeff,transparent:true,opacity:.25,depthWrite:false}));shieldBubble.position.y=1;shieldBubble.visible=false;player.g.add(shieldBubble);const gearEffects=createGearEffects(actorArt,player.g);const abilityAura=torus(player.g,.74,.024,0x91e4ce,0,.12,0);abilityAura.rotation.x=Math.PI/2;abilityAura.visible=false;const fx=group(root),particles=Array.from({length:24},()=>{const p=ball(fx,.09,0xffe1a3);p.visible=false;return{mesh:p,life:0,v:new THREE.Vector3()}});let particleCursor=0;
 function burst(pos,color){for(let i=0;i<16;i++){const p=particles[particleCursor++%particles.length];p.mesh.material=mat(color);p.mesh.position.copy(pos);p.mesh.visible=true;p.life=.6+Math.random()*.4;p.v.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3)}}
 function animate(dt,time){for(const a of animated){if(a.spin)a.mesh.rotation.z=time*.7+a.phase;else a.mesh.position.y=a.y+Math.sin(time*1.5+a.phase)*.3;}for(const p of particles)if(p.life>0){p.life-=dt;p.mesh.visible=p.life>0;p.v.y-=7*dt;p.mesh.position.addScaledVector(p.v,dt);p.mesh.scale.setScalar(Math.max(.1,p.life))}}
 let lastDoorGuardian=null;
 function presentGuardianArtwork(camera,game,reducedMotion=false,options={}){
  const index=currentDoorGuardian(game);
  const guard=index===null?null:guardians[index];
  if(guard!==lastDoorGuardian){lastDoorGuardian?.hideArtwork();lastDoorGuardian=guard;}
  if(!guard)return false;
  return guard.presentArtwork(camera,{state:game.guardians[index].state,reducedMotion},options);
 }
 function animateCreature(c,time,moving=0,dt=1/60,speed=9,reducedMotion=false){
  if(c.presentArtwork&&dt>0)c.artworkMoving=moving>0&&speed>.05;
  c.animator.update(dt,moving,speed,reducedMotion);
 }
 function disposeActors(container){for(const child of [...container.children])child.userData.actor?.dispose()}

 function mutate(g,mutation){if(!mutation||mutation==='normal')return;const colors=mutation==='gold'?[0xffd35c]:mutation==='cosmic'?[0xae8bff,0x78ddff]:[0xff9aa2,0xffe085,0x8debc4,0x8fc9ff];for(let j=0;j<colors.length;j++){const ring=torus(g,.50+j*.06,.026,colors[j],0,.12+j*.065,0);ring.rotation.x=Math.PI/2}if(mutation==='cosmic')for(let j=0;j<4;j++){const a=j*Math.PI/2;ball(g,.05,0xffffff,Math.sin(a)*.6,.6,Math.cos(a)*.6)}g.userData.mutation=mutation;}
 function decorate(d,capacity,save){progression.sync(save);penFloor.userData.normal=d.color;roof.userData.normal=d.roof;penFloor.material=mat(new THREE.Color(d.color).lerp(new THREE.Color(0xe8f5ff),seasonOn?.8:0).getHex());roof.material=mat(new THREE.Color(d.roof).lerp(new THREE.Color(0xe8f5ff),seasonOn?.65:0).getHex());penDecor.clear();for(let i=0;i<capacity;i++){const p=corralSlot(i,save);cyl(penDecor,.37,.4,.06,0xd1bd72,p.x,p.y+.09,p.z,10);}for(const x of[-3,3]){cyl(penDecor,.3,.23,.5,d.roof,x,.3,3);for(let j=0;j<3;j++)ball(penDecor,.17,d.color===0x7785b8?0xffe085:0xf7a5b8,x+(j-1)*.2,.85,3)} }
 const hazards=zoneGroups.map((g,i)=>{const node=group(g);const ring=torus(node,1.15,.06,0xffd568,0,.10,0);ring.rotation.x=Math.PI/2;const body=group(node);const w=WORLDS[i];if(i===19){softBox(body,2.2,.18,.24,0xe6cc79,0,.55,0);for(const x of[-.9,.9])cyl(body,.07,.08,.75,0x398c72,x,.35,0,8);}else if(i===14){cyl(body,.18,.22,.45,0xffe0b7,0,.25,0);ball(body,.6,0xe99cad,0,.60,0,1,.5,1);}else if(i===13){rod(body,[0,2.2,0],[0,.5,0],.05,0xf2ce81);ball(body,.48,0x91e4ce,0,.5,0);torus(body,.49,.035,0xf2ce81,0,.5,0);}else if(i===0||i===9){cyl(body,.18,.18,2.2,w.color,0,.45,0).rotation.z=Math.PI/2;}else if(i===4||i===5||i===6){cyl(body,0,.6,1.3,w.color,0,.7,0,6);}else if(i===3||i===7||i===8){ball(body,.8,w.color,0,.14,0,1.4,.12,1);}else if(i===10){box(body,1.4,.45,1.2,0xffbd5e,0,1.4,0);}else for(let j=0;j<3;j++)torus(body,.5+j*.2,.05,w.color,0,.3+j*.3,0).rotation.x=Math.PI/2;return{node,body,ring};});
 function updateHazards(game){hazards.forEach((v,i)=>{const h=game.hazard(i);v.node.position.set(h.x,0,h.z);v.ring.material=mat(h.active?0xff705a:h.warning?0xffdb62:0xcbdccd);v.body.visible=h.active||h.warning;v.body.scale.y=h.active?1:.3;v.body.rotation.y=game.time*(i+1)*.3;});}
 const winter=createWinterWorld({root,base,pen,zoneGroups,player,helpers:{box,softBox,ball,cyl,torus,rod,group,label,tree,crystal}});
 const house=createHouseWorld({base,helpers:{group,box,cyl,rod,ball,label}});
 return{presentGuardianArtwork,createTrapVisuals:()=>createEggTrapVisuals(root,actorArt),egypt,subsoil,heaven,playerFrame,house,progression,harbor,aurora,neon,galaxy,popcorn,station,rock,flame,updateSeason,winter,hero,disposeActors,mutate,decorate,updateHazards,equipAccessories,setTrainingPlaque,shieldBubble,abilityAura,gearEffects,root,base,zoneGroups,nests,guardians,player,penContent,egg,shopItem,creature,animateCreature,animate,burst,label,mat,group};
}
