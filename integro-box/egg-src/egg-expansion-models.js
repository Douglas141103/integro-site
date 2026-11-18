import {trackSideX} from './egg-track.js';
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export function expansionCreature(g,kind,color,limbs,{ball,cyl,torus,rod,softBox,group}){
 const cream=0xffe8c6,dark=0x294455;
 if(kind==='hedgehog'){
  ball(g,.42,color,0,.47,.12,1,1,1.3);ball(g,.29,cream,0,.88,-.27);ball(g,.12,cream,0,.80,-.51);ball(g,.045,dark,0,.83,-.62);
  for(let j=0;j<13;j++){const a=j*2.4,z=.1+(j%3)*.15;const spike=cyl(g,0,.10,.32,0x956d91,Math.sin(a)*.35,.68+Math.cos(a)*.15,z,5);spike.rotation.z=Math.sin(a)*.8;}
  for(const x of[-.22,.22])ball(g,.09,color,x,1.1,-.22);return{faceY:.94,faceZ:-.52};
 }
 if(kind==='otter'){
  ball(g,.36,0x9d745a,0,.59,.05,1,1.3,1);ball(g,.27,cream,0,.55,-.18,1,1.35,.5);ball(g,.30,0xb68764,0,1.13,-.12);ball(g,.17,cream,0,1.02,-.35,1.4,.65,.6);ball(g,.06,dark,0,1.09,-.48);
  for(const x of[-.27,.27])ball(g,.10,0x9d745a,x,1.34,-.07);for(const x of[-.40,.40])limbs.push(ball(g,.17,0x9d745a,x,.68,0,.7,1.4,.8));
  cyl(g,.25,.32,.12,cream,0,1.45,-.08,16);softBox(g,.36,.06,.03,color,0,1.46,-.35);torus(g,.31,.05,color,0,.9,-.01).rotation.x=Math.PI/2;
  const tail=group(g,0,.38,.45);ball(tail,.18,0x9d745a,0,0,.22,.8,.5,2.2);limbs.push(tail);return{faceY:1.19,faceZ:-.38};
 }
 if(kind==='scorpion'){
  ball(g,.38,color,0,.35,.12,1.2,.7,1.5);ball(g,.26,0xb8a4ed,0,.43,-.35,1.1,.8,1);
  for(const side of[-1,1]){const claw=group(g,side*.50,.43,-.3);rod(claw,[0,0,0],[side*.2,0,-.23],.065,color);for(const j of[-1,1]){const p=ball(claw,.15,color,side*.2+j*.07,.01,-.32,.65,.65,1.4);p.rotation.y=j*.45;}limbs.push(claw);}
  const tail=group(g,0,.38,.45);for(let j=0;j<5;j++)ball(tail,.11,color,0,j*.14,.1+j*.07);cyl(tail,0,.1,.24,0x87f6e3,0,.77,.31,5).rotation.x=-.7;limbs.push(tail);return{faceY:.50,faceZ:-.59};
 }
 if(kind==='auroraWolf'){
  ball(g,.39,0xd9ebed,0,.54,.08,.85,1,1.5);ball(g,.32,0xd9ebed,0,1.04,-.22);ball(g,.19,0xf5fbef,0,.94,-.47,1,.7,1.2);ball(g,.065,dark,0,1.0,-.64);
  for(const x of[-.23,.23]){cyl(g,0,.15,.38,color,x,1.38,-.16,4);ball(g,.06,0xb7a9e7,x,1.40,-.26,1,1.7,.35);}torus(g,.30,.065,color,0,.83,-.1).rotation.x=Math.PI/2;
  const tail=group(g,0,.45,.5);ball(tail,.19,0xd9ebed,0,.15,.28,1,1.1,2.4);ball(tail,.12,color,0,.22,.57,1,1,1.5);limbs.push(tail);return{faceY:1.1,faceZ:-.50};
 }
 if(kind==='galaxyAlien'){
  ball(g,.35,0x5b6395,0,.58,0,1,1.2,.9);ball(g,.36,color,0,1.14,-.1,1.12,1.06,.9);torus(g,.30,.055,0xe5d77f,0,.88,0).rotation.x=Math.PI/2;
  for(const side of[-1,1]){limbs.push(ball(g,.15,0x5b6395,side*.41,.69,0,.8,1.65,.8));rod(g,[side*.2,1.4,0],[side*.31,1.7,0],.035,color);ball(g,.075,0x99f9dd,side*.31,1.7,0);}
  ball(g,.10,0x93f6e0,0,.65,-.32,1,1,.3);return{faceY:1.21,faceZ:-.41};
 }
 if(kind==='integroConductor'){
  softBox(g,.68,.64,.46,0x3a9076,0,.68,0);softBox(g,.65,.47,.48,0xd7e5c9,0,1.23,-.05);softBox(g,.53,.23,.035,dark,0,1.28,-.30);
  cyl(g,.35,.36,.16,0x37876e,0,1.57,-.03,16);softBox(g,.61,.055,.22,0x244e45,0,1.51,-.29);softBox(g,.1,.13,.03,0xe2ca76,0,1.6,-.39);
  for(const side of[-1,1])limbs.push(softBox(g,.18,.43,.23,0x3a9076,side*.45,.67,0));softBox(g,.26,.23,.04,0xe1cf81,0,.72,-.25);softBox(g,.05,.14,.03,0xf8f8dc,0,.74,-.28);for(const x of[-.15,.15])ball(g,.035,0xe1cf81,x,.47,-.25);return{faceY:1.28,faceZ:-.33};
 }
 return null;
}

export function expansionScenery(g,index,z,h){
 const {ball,cyl,torus,rod,softBox,box,group,label,animated}=h;
 for(const side of[-1,1])for(let j=0;j<4;j++){
  const x=trackSideX(side*(7+j%2*2)),zz=z-17+j*11;
  if(index===14){cyl(g,.25,.4,2.1,0xf7e1c2,x,1.0,zz,10);ball(g,1.6,j%2?0xd08fe3:0xec9eae,x,2.3,zz,1,.4,1);for(let k=0;k<5;k++){const a=k*1.25;ball(g,.17,0xfff2ce,x+Math.sin(a),2.75,zz+Math.cos(a),1,.3,1);}for(let k=0;k<3;k++)ball(g,.45,0x80bc7c,x+(k-1)*.5,.3,zz+1,1,.6,1);}
  if(index===17){cyl(g,0,.8,2.5,0xb6e9ea,x,1.25,zz,6);ball(g,1.4,0xf2f7eb,x,.2,zz,1,.3,1);}

 }

}

export function expansionAccessory(id,g,{ball,cyl,torus,rod,softBox}){
 const gold=0xe6cc79,green=0x398d70,white=0xf4f1da,cyan=0x8ce7e4,violet=0xb096e8;
 if(id==='conductorCap'){cyl(g,.34,.36,.19,green,0,.12,0,16);softBox(g,.58,.06,.27,0x244c42,0,.04,-.29);softBox(g,.10,.13,.03,gold,0,.17,-.35);}
 if(id==='truffleCrown'){torus(g,.34,.05,green).rotation.x=Math.PI/2;for(let j=0;j<5;j++){const a=j*1.25,x=Math.sin(a)*.32,z=Math.cos(a)*.32;cyl(g,.045,.05,.18,white,x,.13,z,8);ball(g,.14,0xe99cad,x,.25,z,1,.5,1);}}
 if(id==='auroraHelmet'){ball(g,.37,cyan,0,.09,0,1,.8,1);for(let j=-1;j<=1;j++)cyl(g,0,.075,.32,violet,j*.16,.40,0,5);softBox(g,.55,.07,.08,gold,0,.06,-.32);}
 if(id==='prismHalo'){for(const r of[.36,.48])torus(g,r,.025,gold,0,.18,0).rotation.x=Math.PI/2;for(let j=0;j<6;j++){const a=j*Math.PI/3;cyl(g,0,.07,.27,j%2?cyan:violet,Math.sin(a)*.43,.3,Math.cos(a)*.43,5);}}
 if(['neonGlasses','conductorGoggles'].includes(id)){for(const x of[-.16,.16]){torus(g,.135,.035,id==='neonGlasses'?violet:gold,x,0,0);ball(g,.10,cyan,x,0,-.02,1,1,.18);}softBox(g,.12,.04,.04,green,0,0,0);}
 if(id==='starMask'){softBox(g,.62,.25,.09,violet);for(const x of[-.16,.16]){torus(g,.12,.025,gold,x,0,-.06);cyl(g,0,.07,.035,white,x,.02,-.1,5).rotation.x=Math.PI/2;}}
 if(id==='leafMask'){for(const side of[-1,1]){const leaf=ball(g,.18,green,side*.18,0,0,1.25,.8,.25);leaf.rotation.z=-side*.4;ball(g,.075,gold,side*.13,0,-.06,1,.7,.3);}ball(g,.06,0xea9cb4,0,.08,-.04);}
 if(id==='stationPack'){softBox(g,.60,.65,.28,green,0,0,.10);softBox(g,.31,.24,.05,gold,0,-.08,.27);softBox(g,.06,.16,.03,white,0,-.05,.31);rod(g,[.23,.2,.12],[.23,.55,.12],.025,gold);ball(g,.07,cyan,.23,.58,.12);}
 if(id==='cloudSails'){for(const side of[-1,1]){rod(g,[side*.15,-.3,0],[side*.55,.65,0],.03,gold);const sail=cyl(g,0,.38,.9,white,side*.4,.2,.05,3);sail.scale.z=.15;sail.rotation.z=-side*.4;}}
 if(id==='magneticCape'){for(let j=-2;j<=2;j++){const panel=softBox(g,.13,.85,.055,j%2?violet:cyan,j*.14,-.18,.12);panel.rotation.z=j*.06;}torus(g,.12,.025,gold,0,.32,.14);}
 if(id==='starBeacon'){ball(g,.24,violet,0,.1,.2);for(let j=0;j<3;j++){const orbit=torus(g,.36+j*.07,.025,gold,0,.1,.2);orbit.rotation.set(j*.7,j*.6,0);}for(const x of[-.55,.55])ball(g,.075,cyan,x,.35,.2);}
}

// Body sections run nose to tail along +Z. Their rounded rectangular cross
// section leaves level standing surfaces and a readable side silhouette.
function hullGeometry(stations, power=.7) {
 const points=[], indices=[], segments=16;
 for(const [z,y,width,height] of stations){
  for(let i=0;i<segments;i++){
   const angle=i*Math.PI*2/segments, c=Math.cos(angle), s=Math.sin(angle);
   points.push(Math.sign(c)*Math.pow(Math.abs(c),power)*width,y+Math.sign(s)*Math.pow(Math.abs(s),power)*height,z);
  }
 }
 for(let row=0;row<stations.length-1;row++)for(let i=0;i<segments;i++){
  const a=row*segments+i,b=row*segments+(i+1)%segments;
  indices.push(a,b,a+segments,b,b+segments,a+segments);
 }
 const last=(stations.length-1)*segments;
 for(let i=1;i<segments-1;i++)indices.push(0,i+1,i,last,last+i,last+i+1);
 const geometry=new T.BufferGeometry();
 geometry.setAttribute('position',new T.Float32BufferAttribute(points,3));
 geometry.setIndex(indices);geometry.computeVertexNormals();
 return geometry;
}

// A vehicle is drawn once for its static body and once per independently
// rotating wheel. Re-equipping and remote riders reuse these packed meshes.
function packedVehiclePart(art,key,group){
 group.updateMatrixWorld(true);
 const parts=[];
 for(const part of group.children){
  const geometry=part.geometry.index?part.geometry.toNonIndexed():part.geometry.clone();
  geometry.applyMatrix4(part.matrix);
  for(const attr of Object.keys(geometry.attributes))if(attr!=='position'&&attr!=='normal')geometry.deleteAttribute(attr);
  const colors=new Uint8Array(geometry.attributes.position.count*3);
  const {r,g,b}=part.material.color;
  for(let i=0;i<colors.length;i+=3){colors[i]=Math.round(r*255);colors[i+1]=Math.round(g*255);colors[i+2]=Math.round(b*255);}
  geometry.setAttribute('color',new T.Uint8BufferAttribute(colors,3,true));parts.push(geometry);
  if(part.userData.vehicleOwned)part.geometry.dispose();
 }
 const merged=mergeGeometries(parts,false);
 for(const g of parts)g.dispose();
 merged.computeBoundingSphere();art.geometries.set(key,merged);
 return merged;
}

function vehicleSculpt(art,group){
 const mesh=(geometry,color)=>{
  const m=new T.Mesh(geometry,art.material(color,'trim'));
  m.userData.vehicleOwned=true;group.add(m);return m;
 };
 const add=(kind,color,x,y,z,sx,sy,sz)=>art.mesh(group,kind,color,x,y,z,sx,sy,sz,'trim');
 const hull=(color,sections,power)=>mesh(hullGeometry(sections,power),color);
 const tube=(color,points,radius)=>{
  const path=new T.CatmullRomCurve3(points.map(v=>new T.Vector3(...v)));
  return mesh(new T.TubeGeometry(path,Math.max(4,points.length*2),radius,5,false),color);
 };
 return {add,hull,tube};
}

function deckMark(id,trim,draw){
 const {add,tube}=draw;
 if(id.endsWith('Integro')){
  add('round',trim,0,.23,.36,.26,.011,.22);
  add('round',0xffffdc,0,.238,.36,.035,.01,.13);
 }else if(id==='skateNeon'){
  for(const side of [-1,1])tube(trim,[[side*.22,.229,-.43],[side*.28,.229,-.26],[side*.28,.229,.29]],.015);
 }else if(id==='scooterGalaxy'){
  for(const [x,z] of [[-.12,-.15],[.16,.13],[-.14,.36],[.1,.49]]) {
   add('round',trim,x,.229,z,.095,.008,.019);add('round',trim,x,.23,z,.019,.008,.095);
  }
 }else{
  const accents=id==='skateAurora'?[0xae89e7,0x78f1e1,0xd9aee7]:[trim,trim];
  for(let i=0;i<accents.length;i++){
   const x=-.08+i*.065;
   tube(accents[i],[[x-.09,.23,-.35],[x+.07,.23,-.18],[x+.075,.23,.02],[x-.09,.23,.23],[x-.04,.23,.4]],.013);
  }
  if(id==='scooterComet')add('ball',trim,-.13,.23,.27,.09,.012,.1);
 }
}

function hoverVehicle(id,{color,trim,type},draw){
 const {add,hull}=draw, scooter=type==='scooter';
 const toe=scooter?.15:.19, tail=scooter?.25:.28;
 hull(color,[[-.86,toe,.08,.035],[-.79,toe,.29,.056],[-.65,.14,.37,.066],[-.41,.137,.38,.065],[.43,.137,.37,.065],[.62,.154,.36,.067],[.78,tail,.28,.061],[.85,tail+.015,.12,.03]],.49);
 hull(trim,[[-.83,toe-.018,.15,.015],[-.74,toe-.031,.31,.015],[-.52,.117,.375,.015],[.46,.117,.375,.015],[.65,.153,.355,.015],[.79,tail-.018,.26,.016]],.48);
 const pad=scooter?color:0x263747;
 hull(pad,[[-.69,.177,.13,.023],[-.52,.194,.272,.026],[-.38,.198,.311,.024],[.43,.198,.31,.024],[.58,.207,.26,.02],[.66,.22,.15,.015]],.48);
 deckMark(id,trim,draw);
 for(const x of [-.25,.25])for(const z of [-.55,.55]){
  add('cyl',0x3c5360,x,.032,z,.126,.104,.126);
  add('cyl',trim,x,-.019,z,.147,.065,.147);
  add('cyl',0x71e5ed,x,-.064,z,.122,.045,.122);
  add('ball',0xc4ffff,x,-.088,z,.086,.037,.086);
 }
 if(scooter){
  add('cyl',0xc1d6db,0,.63,-.46,.044,.83,.044);
  add('cyl',trim,0,.30,-.46,.074,.14,.074);
  add('round',color,0,1.055,-.46,.85,.10,.10);
  add('round',trim,0,.991,-.46,.18,.18,.11);
  for(const x of [-.33,.33])add('round',trim,x,1.055,-.46,.18,.114,.122);
 }
}

function vehicleCar(id,{color,trim},draw){
 const {add,hull}=draw, royal=id==='carRoyal';
 const glass=royal?0x345585:0x458db7;
 hull(color,[[-1.07,.34,.26,.075],[-1.00,.35,.48,.14],[-.74,.375,.56,.185],[-.43,.36,.59,.19],[.36,.35,.60,.19],[.78,.35,.56,.17],[1.01,.34,.43,.135],[1.08,.34,.25,.06]],royal?.55:.68);
 hull(color,[[royal?-.63:-.5,.5,.36,.054],[-.35,.565,.47,.122],[-.13,.622,.458,.182],[.12,.635,.448,.189],[.47,.605,.44,.153],[royal?.81:.65,.52,.37,.088],[royal?.87:.72,.47,.27,.04]],.64);
 add('round',0x2b3c4b,0,.822,.11,.75,.031,.67);
 const front=add('round',glass,0,.680,-.36,.75,.26,.062);front.rotation.x=.81;
 const rear=add('round',glass,0,.66,royal?.675:.57,.72,.21,.055);rear.rotation.x=-.81;
 for(const sign of [-1,1]){
  const side=sign*.456;
  if(royal){
   for(const z of [-.095,.20,.47])add('round',glass,side,.644,z,.042,.147,.221);
   add('round',trim,sign*.571,.424,.14,.041,.026,1.37);
  }else{
   const pane=add('round',glass,side,.641,.04,.048,.16,.455);
   pane.rotation.z=-sign*.13;
  }
  for(const z of [-.66,.67])add('ball',color,sign*.458,.359,z,.199,.181,.294);
  add('ball',0xffefae,sign*.425,.397,-.993,.1,.085,.043);
  add('round',0xe98770,sign*.363,.39,1.003,.15,.065,.045);
 }
 const grilleWidth=royal?.44:.59;
 add('round',trim,0,.331,-1.05,grilleWidth,.178,.065);
 add('round',0x293741,0,.336,-1.088,grilleWidth-.05,.13,.018);
 if(royal){
  for(const x of [-.144,-.072,0,.072,.144])add('round',trim,x,.336,-1.099,.022,.133,.014);
 }else{
  for(const y of [.30,.357])add('round',trim,0,y,-1.099,.47,.012,.014);
  const stripe=add('round',trim,0,.551,-.698,.102,.02,.5);stripe.rotation.x=-.09;
 }
 add('round',trim,0,.257,1.007,.87,.065,.077);
}

function vehicleJet({color,trim},draw){
 const {add,hull,tube}=draw;
 hull(color,[[-1.38,.23,.011,.012],[-1.23,.26,.13,.092],[-.95,.29,.225,.16],[-.55,.30,.288,.214],[0,.28,.3,.22],[.45,.275,.251,.178],[.9,.282,.143,.104],[1.25,.30,.045,.04]],.94);
 const canopy=add('ball',0x74d1ed,0,.399,-.69,.211,.109,.38);canopy.rotation.x=-.16;
 add('round',trim,0,.48,.07,.40,.06,.6);
 for(const side of [-1,1]){
  const wing=hull(color,[[-.33,0,.014,.009],[-.24,0,.155,.018],[-.03,0,.407,.043],[.15,0,.674,.05],[.30,0,.75,.04],[.37,0,.69,.022]],.66);
  wing.position.set(side*.707,.219,.15);wing.rotation.y=-side*.31;
  const tail=add('round',trim,side*.36,.354,.945,.84,.055,.26);tail.rotation.y=-side*.39;
  const engine=add('cyl',trim,side*.385,.288,.704,.141,.52,.141);engine.rotation.x=Math.PI/2;
  const intake=add('cyl',0x263949,side*.385,.288,.443,.102,.015,.102);intake.rotation.x=Math.PI/2;
  const jet=add('cone',0x83ebfd,side*.385,.288,1.073,.088,.218,.088);jet.rotation.x=Math.PI/2;
  for(const z of [-.19,.019,.218])add('ball',0x447ea3,side*(.294-Math.abs(z)*.038),.327,z,.015,.048,.044);
  tube(trim,[[side*.077,.245,-1.264],[side*.235,.255,-.9],[side*.286,.244,-.54],[side*.297,.247,0],[side*.204,.259,.61],[side*.10,.28,1.0]],.014);
 }
 const fin=add('round',color,0,.481,.957,.085,.467,.32);
 fin.rotation.x=.38;
 add('round',trim,0,.707,1.03,.093,.039,.264);
}

export function vehicleModel(art,id,definition){
 const group=new T.Group();group.name='vehicle-'+id;
 const key='egg-ride-v2-'+id;
 if(!art.geometries.has(key)){
  const parts=new T.Group(), draw=vehicleSculpt(art,parts);
  if(definition.type==='car')vehicleCar(id,definition,draw);
  else if(definition.type==='jet')vehicleJet(definition,draw);
  else hoverVehicle(id,definition,draw);
  packedVehiclePart(art,key,parts);
 }
 const materialKey='egg-vehicle-paint';
 if(!art.materials.has(materialKey))art.materials.set(materialKey,new T.MeshToonMaterial({vertexColors:true,gradientMap:art.toonRamp}));
 const surface=geometry=>{const mesh=new T.Mesh(geometry,art.materials.get(materialKey));mesh.castShadow=true;group.add(mesh);return mesh;};
 surface(art.geometries.get(key));
 if(definition.type==='car'){
  group.userData.wheels=[];
  const wheelKey=key+'-wheel';
  if(!art.geometries.has(wheelKey)){
   const parts=new T.Group(), {add}=vehicleSculpt(art,parts);
   add('cyl',0x303a44,0,0,0,.213,.14,.213).rotation.z=Math.PI/2;
   add('cyl',definition.trim,.072,0,0,.127,.017,.127).rotation.z=Math.PI/2;
   add('cyl',0x83622d,.082,0,0,.044,.014,.044).rotation.z=Math.PI/2;
   for(let spoke=0;spoke<5;spoke++){
    const angle=spoke*2*Math.PI/5;
    add('cyl',0x705630,.082,Math.cos(angle)*.076,Math.sin(angle)*.076,.016,.008,.016).rotation.z=Math.PI/2;
   }
   packedVehiclePart(art,wheelKey,parts);
  }
  for(const x of [-.563,.563])for(const z of [-.665,.669]){
   const wheel=surface(art.geometries.get(wheelKey));
   wheel.position.set(x,.218,z);wheel.scale.x=Math.sign(x);group.userData.wheels.push(wheel);
  }
 }
 return group;
}
