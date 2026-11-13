import {trackSideX} from './egg-track.js';
import * as T from 'three';
import {ArtResources} from '../rush-src/art.js';
export const HARBOR_CYCLE=26;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);

// A curved, indexed cloth surface: the mast, boom and corners stay attached.
function sail(parent,art,{height,width,bottom,direction,trim}){
 const cols=12,rows=16,positions=[],colors=[],indices=[],uv=[],cream=new T.Color(0xfff1ce),accent=new T.Color(trim),gold=new T.Color(0xe5b664);
 for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++){
  const u=i/cols,v=j/rows;positions.push(0,bottom+height*v,direction*width*u*(1-v));uv.push(u,v);
  const c=(i===cols||j===0)?gold:(v>.18&&v<.32||v>.64&&v<.73)?accent:cream;colors.push(c.r,c.g,c.b);
 }
 for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const a=j*(cols+1)+i,b=a+cols+1;indices.push(a,b,a+1,a+1,b,b+1);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);
 geometry.attributes.position.setUsage(T.DynamicDrawUsage);
 const mesh=new T.Mesh(geometry,new T.MeshToonMaterial({vertexColors:true,gradientMap:art.toonRamp,side:T.DoubleSide}));mesh.name='BillowingHarborSail';mesh.castShadow=true;parent.add(mesh);
 const seams=[];for(const v of[.16,.42,.6,.8]){const p=new Float32Array((cols+1)*3),g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(p,3));const line=new T.Line(g,new T.LineBasicMaterial({color:0xbfa675,transparent:true,opacity:.65}));parent.add(line);seams.push({line,v});}
 function windX(u,v,time,pressure){return Math.sin(Math.PI*u)*Math.sin(Math.PI*v)*(.24+.18*pressure+.035*Math.sin(time*2.8+v*9+u*5));}
 function update(time,pressure,reduced){const p=geometry.attributes.position,t=reduced?0:time;
  for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++){const u=i/cols,v=j/rows;p.setX(j*(cols+1)+i,windX(u,v,t,reduced?.4:pressure));}
  p.needsUpdate=true;geometry.computeVertexNormals();
  for(const {line,v}of seams){const a=line.geometry.attributes.position;for(let i=0;i<=cols;i++){const u=i/cols;a.setXYZ(i,windX(u,v,t,reduced?.4:pressure)+.008,bottom+height*v,direction*width*u*(1-v));}a.needsUpdate=true;}
 }
 update(0,1,false);geometry.computeBoundingSphere();geometry.boundingSphere.radius+=.5;
 return{mesh,update};
}
function hullGeometry(){
 const p=[],idx=[],rings=[[-2.2,.015,.4],[-1.75,.52,.3],[-.9,.83,.25],[.55,.87,.25],[1.55,.65,.3],[1.85,.45,.36]],segments=12;
 for(const [z,width,edge]of rings)for(let k=0;k<=segments;k++){const a=k/segments*Math.PI;p.push(Math.cos(a)*width,edge-Math.sin(a)*.65,z);}
 for(let j=0;j<rings.length-1;j++)for(let k=0;k<segments;k++){const a=j*(segments+1)+k,b=a+segments+1;idx.push(a,a+1,b,a+1,b+1,b);}
 const stern=p.length/3;p.push(0,.36,1.85);const last=(rings.length-1)*(segments+1);for(let k=0;k<segments;k++)idx.push(stern,last+k,last+k+1);
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(idx);g.computeVertexNormals();return g;
}
export function createHarborScenery({group,box,softBox,cyl,ball,torus,rod,actorArt=new ArtResources()}){
 const ports=[];
 function add(parent,index,z){if(index!==15)return;
  for(const side of[-1,1])for(let j=0;j<2;j++){
   const root=group(parent,trackSideX(side*10.7),0,z-11+j*22);root.name='AnimatedWindHarbor';
   box(root,9,.055,20,0x48b8c9,side*.3,.04,0);
   const dock=group(root,-side*2.1,.2,0);dock.name='WindHarborPier';
   box(dock,1.55,.22,7,0xa36f48,0,.06,0);
   for(let k=-8;k<=8;k++)box(dock,1.6,.07,.36,k%2?0xd8aa6d:0xe9bd81,0,.205,k*.4);
   for(const x of[-.62,.62])for(const dz of[-3.1,3.1]){cyl(dock,.13,.16,1.15,0x886447,x,.35,dz,10);ball(dock,.15,0xf4deb3,x,.93,dz,1,.5,1);}
   for(const dz of[-1.5,1.5]){cyl(dock,.08,.1,.3,0x345767,side*.48,.4,dz,10);rod(dock,[side*.32,.53,dz],[side*.64,.53,dz],.045,0x345767);}
   const boat=group(root);boat.name='WindHarborSailboat';
   const hull=new T.Mesh(hullGeometry(),new T.MeshToonMaterial({color:j?0xc96b54:0x376b99,gradientMap:actorArt.toonRamp,side:T.DoubleSide}));boat.add(hull);
   const deck=new T.Shape();deck.moveTo(0,-2.14);deck.bezierCurveTo(.9,-1.4,.95,.8,.43,1.83);deck.lineTo(-.43,1.83);deck.bezierCurveTo(-.95,.8,-.9,-1.4,0,-2.14);
   const deckMesh=new T.Mesh(new T.ShapeGeometry(deck,24),new T.MeshToonMaterial({color:0xe9c18a,gradientMap:actorArt.toonRamp,side:T.DoubleSide}));deckMesh.rotation.x=Math.PI/2;deckMesh.position.y=.29;boat.add(deckMesh);
   for(const s of[-1,1]){const path=new T.CatmullRomCurve3([new T.Vector3(0,.4,-2.2),new T.Vector3(s*.52,.3,-1.75),new T.Vector3(s*.83,.25,-.9),new T.Vector3(s*.87,.25,.55),new T.Vector3(s*.65,.3,1.55),new T.Vector3(s*.45,.36,1.85)]);boat.add(new T.Mesh(new T.TubeGeometry(path,32,.065,6,false),actorArt.material(0xffe6ac,'trim')));}
   softBox(boat,1.1,.45,.88,0xffe8b8,0,.53,.75);softBox(boat,1.23,.12,1.0,0x438e9a,0,.8,.75);
   for(const x of[-.56,.56])for(const dz of[.52,.98]){const window=torus(boat,.12,.025,0xe7bc67,x,.55,dz);window.rotation.y=Math.PI/2;ball(boat,.10,0x315e78,x,.55,dz,.15,1,1);}
   cyl(boat,.055,.075,4.6,0x9e7249,0,2.54,0,12);ball(boat,.095,0xffd781,0,4.87,0);
   rod(boat,[0,1.22,0],[0,1.22,1.62],.045,0xb38b59);
   rod(boat,[0,4.5,0],[0,.42,-2.16],.015,0xe8d4a9);rod(boat,[0,4.5,0],[0,1.22,1.62],.014,0xe8d4a9);
   for(const x of[-.7,.7])rod(boat,[0,4.1,0],[x,.3,.2],.012,0xf4dfb1);
   const sails=[sail(boat,actorArt,{height:3.15,width:1.6,bottom:1.28,direction:1,trim:j?0xe28b68:0x57a5ad}),sail(boat,actorArt,{height:2.7,width:1.72,bottom:.8,direction:-1,trim:j?0x57a5ad:0x78b6d3})];
   const flag=group(boat,0,4.65,0);const flagGeometry=new T.BufferGeometry();flagGeometry.setAttribute('position',new T.Float32BufferAttribute([0,0,0,.65,-.08,.05,0,-.22,0],3));flagGeometry.computeVertexNormals();flag.add(new T.Mesh(flagGeometry,new T.MeshToonMaterial({color:0xefba58,gradientMap:actorArt.toonRamp,side:T.DoubleSide})));
   const wake=group(root);wake.name='SailboatWake';const wakeLines=[];
   for(let k=0;k<3;k++){const ring=torus(wake,.6+k*.27,.018,0xb7f1eb,0,0,k*.6);ring.rotation.x=Math.PI/2;ring.scale.set(1,1.7,1);ring.material=ring.material.clone();ring.material.transparent=true;ring.material.depthWrite=false;wakeLines.push(ring);}
   const moorGeometry=new T.BufferGeometry();moorGeometry.setAttribute('position',new T.Float32BufferAttribute(new Array(12).fill(0),3));const mooring=new T.LineSegments(moorGeometry,new T.LineBasicMaterial({color:0xe5c28f}));mooring.name='SailboatMooringLines';root.add(mooring);
   ports.push({root,boat,sails,flag,wake,wakeLines,mooring,side,phase:ports.length*6.5});
  }
 }
 function update(time,reducedMotion=false){for(const p of ports){
  const {root,boat,sails,flag,wake,wakeLines,mooring,side,phase}=p,age=((time+phase)%HARBOR_CYCLE+HARBOR_CYCLE)%HARBOR_CYCLE;
  const arrival=smooth(clamp(age/7)),departure=smooth(clamp((age-15)/8)),moving=age<7||age>=15&&age<23;
  root.userData.phase=age<7?'arriving':age<15?'docked':age<23?'departing':'waiting';
  const visibility=smooth(clamp(age/.8))*(1-smooth(clamp((age-22)/1)));boat.visible=age<23;boat.scale.setScalar(Math.max(.001,visibility));
  boat.position.set(side*(2.4*(1-arrival)+2.4*departure),.5+(reducedMotion?0:Math.sin(time*1.6+phase)*.035),7*(1-arrival)-7*departure);
  boat.rotation.set(reducedMotion?0:Math.sin(time*1.4+phase)*.012,side*(.22*(1-arrival)-.22*departure),reducedMotion?0:Math.sin(time*1.7+phase)*.028);
  for(const sail of sails)sail.update(time+phase,moving?1:.2,reducedMotion);flag.rotation.y=reducedMotion?0:Math.sin(time*3+phase)*.15;
  wake.visible=moving&&boat.visible&&!reducedMotion;wake.position.set(boat.position.x,.1,boat.position.z+2.4);wake.rotation.y=boat.rotation.y;
  for(let k=0;k<wakeLines.length;k++)wakeLines[k].material.opacity=visibility*(age<7?1-arrival:departure)*(.5-k*.1);
  mooring.visible=age>=7&&age<15;
  if(mooring.visible){const a=mooring.geometry.attributes.position;for(let k=0;k<2;k++){const z=k?1.5:-1.5;a.setXYZ(k*2,-side*1.62,.73,z);a.setXYZ(k*2+1,boat.position.x-side*.72,boat.position.y+.28,z);}a.needsUpdate=true;mooring.geometry.computeBoundingSphere();}
 }}
 return{add,update};
}
