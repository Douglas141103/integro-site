import * as T from 'three';
export const NEON_CYCLE=20;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);
export function createNeonScenery({group,box,softBox,cyl,ball,rod}){
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
   const body=group(sphinx);body.name='SphinxBody';
   ball(body,.72,0xcba969,0,.82,.25,1,.8,1.65);
   softBox(body,.85,.85,.65,0xd6ba7b,0,1.15,-.67);
   for(const x of[-.49,.49]){
    softBox(body,.42,.35,1.2,0xe1c789,x,.24,-1.05);
    ball(body,.4,0xcba969,x,.46,.9,1,.9,1.2);
    const cloth=softBox(body,.25,.94,.42,0x6f63a5,x,1.85,-.75);cloth.rotation.z=-Math.sign(x)*.16;
    for(let k=0;k<4;k++)box(body,.27,.065,.44,0xead18c,x,1.53+k*.2,-.76);
   }
   softBox(body,.65,.65,.5,0xe4c68b,0,1.96,-.77);
   cyl(body,.29,.4,.2,0x6f63a5,0,2.38,-.75,8);
   for(const x of[-.15,.15])box(body,.11,.055,.035,0x8efbe6,x,2.05,-1.04);
   box(body,.095,.17,.12,0xcba969,0,1.93,-1.07);box(body,.23,.035,.025,0x765e61,0,1.78,-1.035);
   cyl(body,.055,.1,.26,0x6f63a5,0,1.58,-1.04,6);
   rod(body,[0,.6,1.4],[.6,.4,1.85],.075,0xcba969);rod(body,[.6,.4,1.85],[.9,.55,1.6],.075,0xcba969);
   const materials=new Map();body.traverse(n=>{if(n.isMesh){if(!materials.has(n.material))materials.set(n.material,n.material.clone());n.material=materials.get(n.material);n.material.transparent=true;}});
   const tunnel=group(root,0,0,-4.7);tunnel.name='SphinxGroundTunnel';
   const darkness=box(tunnel,3.3,.025,5.5,0x151525,0,.035,0);
   const shutters=[-1,1].map(sign=>{const slab=box(tunnel,1.65,.08,5.5,0x584779,sign*.825,.09,0);slab.name='NeonTunnelShutter';return{slab,sign};});
   const rim=group(tunnel);
   for(const x of[-1.7,1.7])box(rim,.055,.035,5.6,0x88f0e5,x,.14,0);
   for(const z of[-2.8,2.8])box(rim,3.45,.035,.055,0xeb9ee4,0,.14,z);
   rim.traverse(n=>{if(n.isMesh)n.material=new T.MeshBasicMaterial({color:n.material.color});});
   sites.push({root,pyramid,shell,outline,edges,sphinx,body,materials:[...materials.values()],tunnel,darkness,shutters,rim,side,phase:sites.length*4.1});
  }
 }
 function update(time,reducedMotion=false){for(const s of sites){
  const {root,pyramid,shell,outline,edges,sphinx,body,materials,tunnel,shutters,rim,side,phase}=s,age=((time+phase)%NEON_CYCLE+NEON_CYCLE)%NEON_CYCLE;
  root.userData.phase=age<4?'drawing':age<6?'pyramid':age<8?'transforming':age<9.5?'sphinx':age<11?'opening':age<15?'entering':age<17?'closing':'rest';
  const morph=smooth(clamp((age-6)/2)),walk=smooth(clamp((age-11)/4)),sink=smooth(clamp((age-12)/3));
  outline.visible=age<8;pyramid.visible=age>=3&&age<8;
  pyramid.scale.set(1+morph*.15,1-morph*.72,1+morph*.25);outline.scale.copy(pyramid.scale);
  shell.material.opacity=smooth(clamp((age-3)/1.5))*(1-morph);
  for(const {a,direction,length,line,tip,start}of edges){const progress=clamp((age-start)/1.4);
   line.visible=progress>0;line.scale.y=Math.max(.001,length*progress);line.position.copy(a).addScaledVector(direction,length*progress/2);line.material.opacity=1-morph;
   tip.visible=progress>0&&progress<1;tip.position.copy(a).addScaledVector(direction,length*progress);
  }
  sphinx.visible=age>=6&&age<15;sphinx.scale.setScalar(.1+.9*morph);sphinx.position.set(0,-3.7*sink,-5.3*walk);sphinx.rotation.y=side*Math.PI*.75*(1-smooth(clamp((age-9.5)/1.5)));
  for(const material of materials){material.opacity=morph;material.depthWrite=morph>=1;}
  body.position.y=!reducedMotion&&age>=11&&age<15?Math.sin((age-11)*8)*.045*(1-sink):0;
  const opened=smooth(clamp((age-9.5)/1.5))*(1-smooth(clamp((age-15.5)/1.5)));
  tunnel.visible=age>=9.5&&age<17;rim.visible=opened>0;
  for(const {slab,sign}of shutters)slab.position.x=sign*(.825+opened*1.65);
 }}
 return{add,update};
}
