import {FLAME,flameGaps} from './egg-flame-rules.js';

export function createFlameWorld({helpers}){
 const {group,box,ball,cyl,rod,torus,seasonalSurface}=helpers,gaps=[],rocks=[];
 function ground(g,w,world){
  const cuts=flameGaps(world).map(z=>-z-world*48),half=FLAME.halfLength;
  const slab=(parent,start,end,width=28,x=0)=>{
   const z=-world*48-(start+end)/2;
   seasonalSurface(box(parent,width,.8,end-start,w.ground,x,-.46,z),w.ground);
   seasonalSurface(box(parent,width===28?9.5:4.75,.06,end-start,w.path,width===28?0:x/14*4.75,-.03,z),w.path);
  };
  let start=0;
  for(let slot=0;slot<cuts.length;slot++){
   const cut=cuts[slot],z=-world*48-cut;slab(g,start,cut-half);
   const node=group(g);node.name='FlameFissure';node.userData.world=world;
   // A long seam follows the track; the left and right banks move sideways.
   const halves=[-1,1].map(side=>{const part=group(node);part.name='FlameGroundLip';slab(part,cut-half,cut+half,14,side*7);return{part,side};});
   box(node,FLAME.halfGap*2,.2,half*2,0x160f19,0,-2,z);
   const lava=box(node,FLAME.halfGap*2,.08,half*2,0xff5b19,0,-1.35,z);lava.material=lava.material.clone();lava.material.emissive.setHex(0xff3b05);lava.material.emissiveIntensity=1.4;
   const glow=box(node,.10,.02,half*2,0xffbe43,0,.015,z);glow.material=glow.material.clone();glow.material.emissive.setHex(0xff7a14);glow.material.emissiveIntensity=1;
   gaps.push({world,slot,halves,glow,lava});start=cut+half;
  }slab(g,start,48);
 }
 function scenery(g,world){if(world!==FLAME.world)return;
  for(let j=0;j<12;j++){
   const x=(j%2?-1:1)*(6.3+(j%3)*1.4),z=-world*48-3-Math.floor(j/2)*7.8;
   const crater=cyl(g,.85,1.15,.20,0x211c25,x,.02,z,8);crater.name='FlameCrater';
   torus(g,.75,.08,0xff822c,x,.13,z).rotation.x=Math.PI/2;
   const rock=group(g,x,-2,z);rock.name='RisingFlamingStone';cyl(rock,.3,.72,1.35,0x49343b,0,.65,0,6);
   for(let k=0;k<5;k++){const a=k*Math.PI*2/5;cyl(rock,0,.22,.9,0xff7c24,Math.cos(a)*.42,1.05,Math.sin(a)*.42,5);cyl(rock,0,.1,.65,0xffde75,Math.cos(a)*.42,1,Math.sin(a)*.42,5);}
   rocks.push({rock,phase:j*.7});
  }
 }
 function deadTree(parent,o){const g=group(parent,o.x,0,o.z);g.name='TrackEdgeDeadTree';g.userData.obstacle={...o};
  cyl(g,.07,.20,o.h,0x65504a,0,o.h/2,0,7);
  for(const side of[-1,1]){rod(g,[0,1.3,0],[side*.48,2.1,.05],.055,0x796056);rod(g,[side*.3,1.8,0],[side*.26,2.4,-.12],.035,0x8c7160);}
  return g;
 }
 function update(game,reducedMotion){for(const gap of gaps){const s=game.flameGap(gap.world,gap.slot);for(const {part,side}of gap.halves){part.position.x=side*s.amount*FLAME.halfGap;}gap.glow.visible=s.warning;gap.glow.scale.x=s.warning?(reducedMotion?1:1+Math.sin(game.time*5)*.3):1;gap.lava.visible=s.amount>0;}
  for(const {rock,phase}of rocks){const rise=(1-Math.cos((game.time*.9+phase)%(Math.PI*2)))/2;rock.position.y=-2+rise*5;rock.rotation.y=game.time*.18+phase;}
 }
 return{ground,scenery,deadTree,update};
}
