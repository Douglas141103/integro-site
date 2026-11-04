// Decorative cycle beside track 23. Objects are created once and reused forever.
export const PYRAMID_CYCLE=14;
const clamp=x=>Math.max(0,Math.min(1,x));
const smooth=x=>x*x*(3-2*x);

export function createRockScenery({helpers,stoneGiant}){
 const {group,cyl,box,torus}=helpers,sites=[];
 function add(parent,world){
  for(const side of[-1,1])for(let j=0;j<6;j++){
   const root=group(parent,side*(7+(j%2)*2.3),0,-world*48-j*8-3);
   root.name='PedregulhoScenery';
   const height=3+(j%3)*2,phase=sites.length*.93;
   const pyramid=group(root);pyramid.name='RisingRockPyramid';
   const shell=cyl(pyramid,0,2.2,height,j%2?0x69746c:0x929582,0,height/2,0,4);
   shell.rotation.y=Math.PI/4;
   const dust=torus(root,1,.09,0xb4a98b,0,.05,0);dust.rotation.x=Math.PI/2;dust.name='PyramidDustRing';
   const guardians=[];
   for(let k=0;k<4;k++){
    const flight=group(root);flight.name='LittlePedregulho';
    const model=group(flight);model.scale.setScalar(.56);
    const limbs=[];stoneGiant(model,limbs,helpers);
    for(const s of[-1,1]){
     cyl(model,.16,.21,.42,0x74796e,s*.24,.22,0,5);
     box(model,.33,.18,.42,0x929487,s*.24,.09,-.1);
     box(model,.09,.07,.045,0xffe3a0,s*.14,1.4,-.41);
    }
    const angle=k*Math.PI/2+Math.PI/4;
    flight.rotation.y=-angle;
    guardians.push({flight,model,limbs,angle});
   }
   const chips=Array.from({length:8},(_,k)=>{
    const mesh=box(root,.18,.24,.19,k%2?0x929582:0x69746c);
    mesh.name='PyramidStoneChip';return{mesh,angle:k*Math.PI/4};
   });
   sites.push({root,pyramid,dust,guardians,chips,height,phase});
  }
 }
 function update(time,reducedMotion=false){
  for(const site of sites){
   const {root,pyramid,dust,guardians,chips,height,phase}=site;
   const age=((time+phase)%PYRAMID_CYCLE+PYRAMID_CYCLE)%PYRAMID_CYCLE;
   const growth=smooth(clamp(age/7)),burst=clamp((age-7.8)/1.2),dive=clamp((age-10.2)/1.8);
   root.userData.phase=age<7?'growing':age<7.8?'full':age<9?'burst':age<10.2?'guardians':age<12?'diving':'rest';
   pyramid.visible=age<7.8;pyramid.scale.setScalar(.02+.98*growth);pyramid.position.y=-.14*(1-growth);
   // No flashes or camera shake; reduced motion also removes debris and bobbing.
   dust.visible=!reducedMotion&&age>=7.8&&age<9;
   dust.scale.set(1+burst*1.3,1+burst*1.3,1-burst*.95);
   for(const {flight,model,limbs,angle}of guardians){
    flight.visible=age>=7.8&&age<12;
    const distance=1.65*burst+.25*dive;
    flight.position.set(Math.sin(angle)*distance,
     height*.28*(1-burst)+Math.sin(burst*Math.PI)*(reducedMotion?.45:1.6)+Math.sin(dive*Math.PI)*.35-2.1*dive*dive,
     -Math.cos(angle)*distance);
    model.rotation.x=-Math.PI*.85*smooth(dive);
    for(let k=0;k<limbs.length;k++)limbs[k].rotation.x=dive?-.9*smooth(dive):reducedMotion?0:Math.sin(age*6+k*Math.PI)*.25;
   }
   for(const {mesh,angle}of chips){
    mesh.visible=!reducedMotion&&age>=7.8&&age<9;
    mesh.position.set(Math.sin(angle)*2*burst,height*.35*(1-burst)+Math.sin(burst*Math.PI)*1.6,-Math.cos(angle)*2*burst);
    mesh.scale.setScalar(1-burst*.95);mesh.rotation.set(burst*5,angle+burst*3,burst*2);
   }
  }
 }
 return{add,update};
}
