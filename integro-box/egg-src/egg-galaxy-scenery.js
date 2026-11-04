import * as T from 'three';
export const GALAXY_CYCLE=15;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);
export function createGalaxyScenery({group,ball,torus}){
 const sites=[],dummy=new T.Object3D(),starGeometry=new T.IcosahedronGeometry(.075,0);
 function add(parent,index){if(index!==18)return;
  for(const side of[-1,1])for(let j=0;j<2;j++){
   const root=group(parent,side*9.4,3.9,-index*48-12-j*24);root.name='GalaxyBirthScenery';
   const hole=group(root);hole.name='ImplodingBlackHole';
   const core=ball(hole,1.08,0x060714);core.material=new T.MeshBasicMaterial({color:0x050611});
   const disk=group(hole);disk.rotation.x=1.15;
   for(let k=0;k<3;k++){
    const ring=torus(disk,1.25+k*.23,.06+k*.014,[0xf8bd6a,0xe29df6,0x9c97ff][k]);
    ring.material=new T.MeshBasicMaterial({color:[0xf8bd6a,0xe29df6,0x9c97ff][k]});
   }
   const galaxy=group(root);galaxy.name='ExpandingSpiralGalaxy';galaxy.rotation.set(-.45,0,.2);
   const stars=new T.InstancedMesh(starGeometry,new T.MeshBasicMaterial({color:0xffffff,transparent:true,depthWrite:false}),120);
   stars.name='GalaxySpiralStars';stars.frustumCulled=false;stars.instanceMatrix.setUsage(T.DynamicDrawUsage);galaxy.add(stars);
   for(let k=0;k<stars.count;k++)stars.setColorAt(k,new T.Color([0xb9acff,0x91e2ff,0xf5b4eb,0xffecc5][k%4]));
   const heart=ball(galaxy,.28,0xffe7b1);heart.material=new T.MeshBasicMaterial({color:0xffe7b1,transparent:true,depthWrite:false});
   sites.push({root,hole,disk,galaxy,stars,heart,phase:sites.length*3.4});
  }
 }
 function update(time,reducedMotion=false){for(const s of sites){
  const {root,hole,disk,galaxy,stars,heart,phase}=s,age=((time+phase)%GALAXY_CYCLE+GALAXY_CYCLE)%GALAXY_CYCLE;
  root.userData.phase=age<2?'appearing':age<4.5?'black-hole':age<5.8?'imploding':age<7?'galaxy':age<13?'spreading':'rest';
  const appear=smooth(clamp(age/2)),collapse=smooth(clamp((age-4.5)/1.3));
  hole.visible=age<5.8;hole.scale.setScalar(Math.max(.001,appear*(1-collapse)));
  disk.rotation.z=reducedMotion?0:age*.5;
  galaxy.visible=age>=5.8&&age<13;
  if(!galaxy.visible)continue;
  const bloom=smooth(clamp((age-5.8)/1.2)),spread=smooth(clamp((age-7)/6)),fade=1-smooth(clamp((age-10)/3));
  stars.material.opacity=fade;heart.material.opacity=fade;
  heart.scale.setScalar(bloom*(1-spread*.6));
  for(let k=0;k<stars.count;k++){
   const step=k%40/39,arm=Math.floor(k/40),radius=(.24+step*2.26)*bloom*(1+spread*.55);
   const angle=arm*Math.PI*2/3+step*4.6+(reducedMotion?0:(age-5.8)*.24);
   dummy.position.set(Math.cos(angle)*radius,Math.sin(angle)*radius,Math.sin(k*2.4)*.08);
   dummy.rotation.set(0,0,angle);dummy.scale.setScalar((.55+(k%5)*.18)*(.6+.4*bloom));dummy.updateMatrix();stars.setMatrixAt(k,dummy.matrix);
  }
  stars.instanceMatrix.needsUpdate=true;
 }}
 return{add,update};
}
