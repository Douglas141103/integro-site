import * as T from 'three';
import {createSphinxRig} from './egg-sphinx-rig.js';
export const NEON_CYCLE=24;
export const SPHINX_BACK_STEPS=5,SPHINX_STEP_SECONDS=.7;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);
export function createNeonScenery({group,box,softBox,cyl,ball,rod,actorArt}){
 const sites=[],up=new T.Vector3(0,1,0);
 function add(parent,index){if(index!==16)return;
  for(const side of[-1,1])for(let j=0;j<2;j++){
   const root=group(parent,side*9.4,0,-index*48-12-j*24);root.name='NeonSphinxCycle';
   const pyramid=group(root);pyramid.name='NeonPyramid';
   const shell=cyl(pyramid,0,2.2,3.8,0x8c69ab,0,1.9,0,4);shell.rotation.y=Math.PI/4;
   shell.material=shell.material.clone();shell.material.transparent=true;shell.material.depthWrite=false;
   const outline=group(root);outline.name='DrawingNeonPyramid';
   const corners=[[-1.56,.08,-1.56],[1.56,.08,-1.56],[1.56,.08,1.56],[-1.56,.08,1.56]].map(p=>new T.Vector3(...p)),apex=new T.Vector3(0,3.8,0),edges=[];
   for(let k=0;k<8;k++){
    const a=corners[k%4],b=k<4?corners[(k+1)%4]:apex,direction=b.clone().sub(a),length=direction.length();direction.normalize();
    const line=cyl(outline,.035,.035,1,k%2?0xeb9ee4:0x88f0e5,0,0,0,6);line.material=new T.MeshBasicMaterial({color:k%2?0xeb9ee4:0x88f0e5,transparent:true});line.quaternion.setFromUnitVectors(up,direction);
    const tip=ball(outline,.075,0xfff4ce);tip.material=new T.MeshBasicMaterial({color:0xfff4ce});
    edges.push({a,direction,length,line,tip,start:k<4?k*.35:1.4+(k-4)*.35});
   }
   const sphinx=group(root);sphinx.name='NeonSphinx';
   const rig=createSphinxRig(sphinx,{group,actorArt}),body=rig.body;
   const materials=new Map();body.traverse(n=>{if(n.isMesh){if(!materials.has(n.material))materials.set(n.material,n.material.clone());n.material=materials.get(n.material);n.material.transparent=true;}});
   const tunnel=group(root,0,0,-4.7);tunnel.name='SphinxGroundTunnel';
   const darkness=box(tunnel,3.3,.025,5.5,0x151525,0,.035,0);
   const shutters=[-1,1].map(sign=>{const slab=box(tunnel,1.65,.08,5.5,0x584779,sign*.825,.09,0);slab.name='NeonTunnelShutter';return{slab,sign};});
   const rim=group(tunnel);
   for(const x of[-1.7,1.7])box(rim,.055,.035,5.6,0x88f0e5,x,.14,0);
   for(const z of[-2.8,2.8])box(rim,3.45,.035,.055,0xeb9ee4,0,.14,z);
   rim.traverse(n=>{if(n.isMesh)n.material=new T.MeshBasicMaterial({color:n.material.color});});
   sites.push({root,pyramid,shell,outline,edges,sphinx,body,rig,materials:[...materials.values()],tunnel,darkness,shutters,rim,side,phase:sites.length*4.1});
  }
 }
 function update(time,reducedMotion=false){for(const s of sites){
  const {root,pyramid,shell,outline,edges,sphinx,body,rig,materials,tunnel,shutters,rim,side,phase}=s,age=((time+phase)%NEON_CYCLE+NEON_CYCLE)%NEON_CYCLE;
  const backProgress=clamp((age-10.5)/(SPHINX_BACK_STEPS*SPHINX_STEP_SECONDS)),run=smooth(clamp((age-14)/4)),sink=smooth(clamp((age-16)/2.5));
  root.userData.phase=age<4?'drawing':age<6?'pyramid':age<8?'transforming':age<8.5?'sphinx':age<10.5?'standing':age<14?'backsteps':age<18.5?'running':age<20.5?'closing':'rest';
  const morph=smooth(clamp((age-6)/2));
  outline.visible=age<8;pyramid.visible=age>=3&&age<8;
  pyramid.scale.set(1+morph*.15,1-morph*.72,1+morph*.25);outline.scale.copy(pyramid.scale);
  shell.material.opacity=smooth(clamp((age-3)/1.5))*(1-morph);
  for(const {a,direction,length,line,tip,start}of edges){const progress=clamp((age-start)/1.4);
   line.visible=progress>0;line.scale.y=Math.max(.001,length*progress);line.position.copy(a).addScaledVector(direction,length*progress/2);line.material.opacity=1-morph;
   tip.visible=progress>0&&progress<1;tip.position.copy(a).addScaledVector(direction,length*progress);
  }
  sphinx.visible=age>=6&&age<18.5;sphinx.scale.setScalar(.1+.9*morph);sphinx.position.set(0,-4*sink,2.1*backProgress-7.4*run);sphinx.rotation.y=side*Math.PI*.75*(1-smooth(clamp((age-8.5)/2)));
  sphinx.userData.backwardSteps=Math.min(SPHINX_BACK_STEPS,Math.floor(backProgress*SPHINX_BACK_STEPS+1e-8));
  if(sphinx.visible)rig.update({stand:clamp((age-8.5)/2),mode:age>=10.5&&age<14?'backstep':age>=14&&age<18.5?'run':'rest',elapsed:age>=14?age-14:Math.max(0,age-10.5),reducedMotion});
  for(const material of materials){material.opacity=morph;material.depthWrite=!material.userData.contour&&morph>=1;}
  const opened=smooth(clamp((age-12.5)/1.5))*(1-smooth(clamp((age-19)/1.5)));
  tunnel.visible=age>=12.5&&age<20.5;rim.visible=opened>0;
  for(const {slab,sign}of shutters)slab.position.x=sign*(.825+opened*1.65);
 }}
 return{add,update};
}
