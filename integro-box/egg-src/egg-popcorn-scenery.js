import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export const POPCORN_CYCLE=14;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);
export function createPopcornScenery({group,box,softBox,ball,cyl,torus}){
 const sites=[],dummy=new T.Object3D(),seedGeometry=new T.IcosahedronGeometry(.095,1);
 const lobes=[[0,0,0],[.12,.03,0],[-.1,.05,0],[0,.12,.02],[0,.02,-.1]].map(p=>new T.IcosahedronGeometry(.12,1).translate(...p));
 const popcornGeometry=mergeGeometries(lobes);for(const g of lobes)g.dispose();
 function batch(parent,geometry,count,color,name){const m=new T.InstancedMesh(geometry,new T.MeshStandardMaterial({color,roughness:.85}),count);m.name=name;m.frustumCulled=false;m.instanceMatrix.setUsage(T.DynamicDrawUsage);parent.add(m);return m;}
 function add(parent,index){if(index!==0)return;
  for(const side of[-1,1])for(let j=0;j<2;j++){
   const root=group(parent,side*8.8,0,-12-j*24);root.name='PopcornCookerScenery';
   const pot=group(root);pot.name='PressureCooker';pot.rotation.y=side*Math.PI/2;
   cyl(pot,1.1,1.2,.2,0xc95d4f,0,.16,0,16);
   cyl(pot,1.06,.88,1.4,0xa8bcc2,0,.95,0,20);
   cyl(pot,.94,.94,.035,0x34454a,0,1.66,0,20);
   torus(pot,1.02,.07,0xdbe7e5,0,1.68,0).rotation.x=Math.PI/2;
   for(const x of[-1.3,1.3])softBox(pot,.6,.18,.3,0x374b52,x,1.35,0);
   const hinge=group(pot,0,1.72,.96);hinge.name='PressureCookerLid';
   const lid=group(hinge,0,0,-.96);cyl(lid,1.12,1.08,.18,0xd1e1df,0,.04,0,20);
   softBox(lid,1.25,.16,.2,0x374b52,0,.24,0);cyl(lid,.07,.09,.18,0x374b52,.4,.26,.25,8);
   const dial=group(pot,0,1.1,-1.03);ball(dial,.23,0xffefbf,0,0,0,1,1,.18);
   const needle=box(dial,.025,.18,.025,0xc95d4f,0,.055,-.05);needle.name='CookerPressureNeedle';
   const scoop=group(root,-side*1.25,3.3,0);scoop.name='CornScoop';
   cyl(scoop,.5,.36,.65,0xe5b25c,0,0,0,12);cyl(scoop,.43,.43,.02,0xf5d474,0,.33,0,12);
   box(scoop,.15,.18,.9,0xa67847,0,0,.6);
   const kernels=batch(root,seedGeometry,18,0xf5ca4e,'PouringCornKernels');
   const popcorn=batch(root,popcornGeometry,64,0xffefba,'FlyingPopcorn');
   for(let k=0;k<popcorn.count;k++)popcorn.setColorAt(k,new T.Color(k%3?0xfff8df:0xffde8c));
   const steam=Array.from({length:6},()=>ball(root,.17,0xf1f3e8,.4,2,.25));
   // Keep the sunny cornfield around the cookers.
   for(let k=0;k<3;k++){
    const corn=group(root,side*(2.1+k*.35),0,(k-1)*1.25);
    cyl(corn,.035,.05,1.6,0x4c8c47,0,.8,0,7);
    for(const sign of[-1,1]){const leaf=ball(corn,.25,0x71ae55,sign*.2,.75+sign*.18,0,1.5,.2,.6);leaf.rotation.z=sign*.4;}
    ball(corn,.18,0xf4ca5c,0,1.35,0,.6,1.7,.65);
   }
   sites.push({root,pot,hinge,needle,scoop,kernels,popcorn,steam,side,phase:sites.length*3.1});
  }
 }
 function update(time,reducedMotion=false){for(const s of sites){
  const {root,pot,hinge,needle,scoop,kernels,popcorn,steam,side,phase}=s,age=((time+phase)%POPCORN_CYCLE+POPCORN_CYCLE)%POPCORN_CYCLE;
  root.userData.phase=age<2.5?'filling':age<3.2?'closing':age<6.4?'pressure':age<6.9?'opening':age<10.8?'popping':age<12.5?'clearing':'rest';
  const pressure=clamp((age-3.2)/3.2),opening=smooth(clamp((age-6.4)/.5));
  hinge.rotation.x=age<3.2?1.4*(1-smooth(clamp((age-2.5)/.7))):opening*1.5;
  pot.rotation.z=!reducedMotion&&age>=3.2&&age<6.4?Math.sin(age*22)*.025*pressure:0;
  needle.rotation.z=age<6.4?1-pressure*2:-1+2*opening;
  scoop.visible=age<2.5;scoop.rotation.z=-side*.9*smooth(clamp(age/.4));scoop.scale.setScalar(1-smooth(clamp((age-2.15)/.35)));
  kernels.visible=age>=.35&&age<2.5;
  if(kernels.visible){for(let k=0;k<kernels.count;k++){
   const t=(age-.35-k*.075)/.55,visible=t>=0&&t<=1;
   dummy.position.set(-side*1.05*(1-clamp(t))+.12*Math.sin(k),3.4-1.85*clamp(t)**2,.18*Math.cos(k*2.4));
   dummy.rotation.set(k,t*2,0);dummy.scale.set(visible?1:0,visible?.7:0,visible?1.2:0);dummy.updateMatrix();kernels.setMatrixAt(k,dummy.matrix);
  }kernels.instanceMatrix.needsUpdate=true;}
  for(let k=0;k<steam.length;k++){
   const puff=steam[k],t=((age*1.5+k/6)%1+1)%1;
   puff.visible=!reducedMotion&&age>=3.2&&age<6.8;
   puff.position.set(side*.25+Math.sin(k+t*3)*.15,2.05+t*1.4,-side*.4);puff.scale.setScalar(Math.sin(t*Math.PI)*(.4+pressure));
  }
  popcorn.visible=age>=6.9&&age<12.5;
  if(popcorn.visible){for(let k=0;k<popcorn.count;k++){
   const elapsed=age-6.9-k*.023,flight=1.3+(k%7)*.09,t=clamp(elapsed/flight),angle=k*2.39996;
   const distance=(1.6+(k%11)*.13)*t,fade=1-smooth(clamp((age-11)/1.5));
   const y=1.75*(1-t)+.28*t+Math.sin(t*Math.PI)*(reducedMotion?1:2.7+(k%5)*.16);
   dummy.position.set(Math.cos(angle)*distance,y,Math.sin(angle)*distance);
   dummy.rotation.set(reducedMotion?0:t*5,angle,reducedMotion?0:t*3);
   dummy.scale.setScalar(elapsed<0?0:(.75+(k%4)*.13)*fade);dummy.updateMatrix();popcorn.setMatrixAt(k,dummy.matrix);
  }popcorn.instanceMatrix.needsUpdate=true;}
 }}
 return{add,update};
}
