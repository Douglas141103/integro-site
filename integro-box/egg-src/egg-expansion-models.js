import * as T from 'three';
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
  const x=side*(7+j%2*2),zz=z-17+j*11;
  if(index===14){cyl(g,.25,.4,2.1,0xf7e1c2,x,1.0,zz,10);ball(g,1.6,j%2?0xd08fe3:0xec9eae,x,2.3,zz,1,.4,1);for(let k=0;k<5;k++){const a=k*1.25;ball(g,.17,0xfff2ce,x+Math.sin(a),2.75,zz+Math.cos(a),1,.3,1);}for(let k=0;k<3;k++)ball(g,.45,0x80bc7c,x+(k-1)*.5,.3,zz+1,1,.6,1);}
  if(index===15){box(g,4,.2,6,0x9b7857,x,.12,zz);for(const dx of[-1.7,1.7])cyl(g,.10,.12,1.4,0xf2d99b,x+dx,.7,zz,8);const boat=group(g,x,.45,zz);const hull=ball(boat,1,0x4a9ca8,0,0,0,1.1,.4,2);cyl(boat,.04,.04,3.3,0xffe7bf,0,1.7,0,8);const sail=cyl(boat,0,1.15,1.9,0xfff1d8,.6,2,0,3);sail.scale.z=.08;sail.rotation.z=-.25;animated.push({mesh:boat,y:.45,phase:j+side});}
  if(index===16){cyl(g,0,1.2,2.2,0x8c69ab,x,1.1,zz,5);const ring=torus(g,1.0,.07,0x88f0e5,x,2.5,zz);animated.push({mesh:ring,y:2.5,phase:j,spin:true});for(let k=0;k<3;k++)box(g,.12,.08,3,0xeb9ee4,x+(k-1)*.45,.08,zz+1.5);}
  if(index===17){cyl(g,0,.8,2.5,0xb6e9ea,x,1.25,zz,6);for(let k=0;k<4;k++)rod(g,[x-side*1.2,4.7+k*.28,zz],[x+side*2.5,5.5+k*.2,zz+5],.11,[0x90e8c7,0xa6b7f3,0xcba8e6,0x8ddde7][k]);ball(g,1.4,0xf2f7eb,x,.2,zz,1,.3,1);}
  if(index===18){const planet=ball(g,1.05,j%2?0xa6b3ed:0xd3a4d7,x,3.7,zz);torus(g,1.55,.06,0xe6ce8b,x,3.7,zz).rotation.x=1.1;animated.push({mesh:planet,y:3.7,phase:j});cyl(g,.35,.8,1.2,0x6a719e,x,.6,zz,6);for(let k=0;k<3;k++){const star=cyl(g,0,.16,.30,0xffe9ad,x+(k-1)*.7,2+k*.5,zz+.6,5);animated.push({mesh:star,y:star.position.y,phase:k});}}
  if(index===19){box(g,5,.38,10,0x8eaf9e,x,.1,zz);box(g,.14,.05,9,0xf1ce72,side*5.7,.32,zz);for(const dz of[-3.5,3.5]){cyl(g,.09,.12,3.8,0x285e51,x,1.9,zz+dz,8);box(g,4.8,.18,1,0xd8dfb1,x,3.8,zz+dz);}
   if(j%2===0){const train=group(g,x,.4,zz);softBox(train,2.5,2.0,7.2,0xe6edce,0,1.05,0);softBox(train,2.55,.5,6.7,0x378c72,0,.65,0);for(const dz of[-2.2,0,2.2]){softBox(train,.04,.6,1.5,0x72c5ca,-side*1.27,1.45,dz);for(const dx of[-.8,.8])ball(train,.20,0xffe4a2,dx,.8,-3.6,1,1,.3);}box(train,1.7,.65,.05,0x72c5ca,0,1.5,-3.62);label(train,'INTEGRO',0,2.35,-.1,2.4,'#f8f3d3','#28644f');}
  }
 }
 if(index===19){label(g,'ESTAÇÃO INTEGRO',0,4.2,z+8,6.8,'#f7f1d6','#245d48');label(g,'20 · DESTINO CONQUISTADO',0,5.2,z-15,5.8,'#244d3f','#e6dc93');}
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

export function vehicleModel(art,id,definition){
 const g=new T.Group();g.name='vehicle-'+id;const {color,trim,type}=definition;
 const add=(kind,c,x,y,z,sx,sy,sz)=>art.mesh(g,kind,c,x,y,z,sx,sy,sz,'trim');
 add('round',color,0,.11,0,.76,.16,1.55);add('round',0x294b58,0,.205,.01,.56,.035,1.23);
 for(const z of[-.62,.62]){add('round',trim,0,.14,z,.78,.10,.15);for(const x of[-.26,.26]){const engine=add('ring',trim,x,0,z,.13,.13,.13);engine.rotation.x=Math.PI/2;add('cone',0x91e9ed,x,-.10,z,.06,.18,.06).rotation.z=Math.PI;}}
 if(type==='scooter'){add('cyl',0xdce9dc,0,.63,-.46,.045,.84,.045);add('round',color,0,1.05,-.46,.85,.095,.10);for(const x of[-.35,.35])add('round',trim,x,1.05,-.46,.18,.12,.13);add('round',trim,0,.79,-.46,.12,.28,.12);}
 if(id.endsWith('Integro')){add('round',trim,0,.229,.35,.32,.016,.28);add('round',0xf9f8df,0,.241,.35,.045,.015,.17);}
 g.traverse(m=>{if(m.isMesh)m.castShadow=true;});return g;
}
