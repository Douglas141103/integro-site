import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import * as T from '../integro-box/interdance-src/node_modules/three/build/three.module.js';
import {createAnimeActor,makeToonRamp,FINGER_NAMES} from '../integro-box/interdance-src/anime-actor.mjs';
import {animePose,danceAccent,POSE_FPS,DANCE_ROUTINES,versusLayout} from '../integro-box/interdance-src/anime-motion.mjs';
import {createAnimePainter} from '../integro-box/interdance-src/anime-view.mjs';
import {stages,avatars} from '../integro-box/interdance-src/engine.mjs';

test('all sixteen bosses and both dancers have bounded weighted rigs, edited face normals and three-tone materials',()=>{
 const ramp=makeToonRamp();assert.equal(ramp.image.width,3);assert.equal(ramp.magFilter,T.NearestFilter);
 for(const person of [...stages,...avatars]){
  const actor=createAnimeActor(person,{ramp,document:null});let skinCount=0,triangles=0;
  try{
   assert.equal(actor.skeleton.bones.length,56);assert.equal(new Set(actor.skeleton.bones.map(b=>b.name)).size,56);assert.equal(actor.palette.color.gradientMap,ramp);
   const normals=actor.faceGeometry.attributes.normal;for(let i=0;i<normals.count;i++)assert(Math.abs(new T.Vector3().fromBufferAttribute(normals,i).length()-1)<.00001);
   actor.root.traverse(mesh=>{
    if(!mesh.isMesh)return;triangles+=(mesh.geometry.index?.count||mesh.geometry.attributes.position.count)/3;
    if(mesh.isSkinnedMesh){skinCount++;const weights=mesh.geometry.attributes.skinWeight;assert.equal(mesh.skeleton,actor.skeleton);for(let i=0;i<weights.count;i++){assert(Math.abs(weights.getX(i)+weights.getY(i)-1)<.00001);assert(weights.getX(i)>=0&&weights.getY(i)>=0);}}
   });
   assert.equal(skinCount,18);assert(triangles<65000,person.artist+' exceeded mobile geometry budget: '+triangles);
   for(const lane of [-1,0,1,2,3])for(const seconds of [.15,.5,1.25,2.1]){
    actor.pose(0,person.bpm||140,-1,true);
    actor.pose(seconds,person.bpm||140,lane);let minY=Infinity,maxY=-Infinity;
    actor.root.traverse(mesh=>{if(!mesh.isMesh)return;const positions=mesh.geometry.attributes.position;for(let i=0;i<positions.count;i+=9){const point=new T.Vector3().fromBufferAttribute(positions,i);if(mesh.isSkinnedMesh)mesh.applyBoneTransform(i,point);point.applyMatrix4(mesh.matrixWorld);assert([point.x,point.y,point.z].every(Number.isFinite));minY=Math.min(minY,point.y);maxY=Math.max(maxY,point.y);assert(Math.abs(point.x)<1.36&&Math.abs(point.z)<2);}});
    assert(minY>-.18&&maxY<2.99,`${person.artist}: pose ${lane} clipped (${minY}, ${maxY})`);
   }
  }finally{actor.dispose();}
 }
 ramp.dispose();
});

test('continuous motion follows musical beats, eases directional accents and freezes for reduced motion',()=>{
 assert.equal(POSE_FPS,30);
 assert.notDeepEqual(animePose(1.001,160,0),animePose(1.02,160,0));
 assert.notEqual(animePose(1,140,0).leftArm,animePose(1,140,3).leftArm);
 assert(animePose(1,140,1).hipY<animePose(1,140,-1).hipY);
 assert(Math.abs(animePose(1,140,2).leftArm)>Math.abs(animePose(1,140,-1).leftArm));
 assert.equal(danceAccent(1,0,{at:1}),0);
 assert(danceAccent(1.1,0,{at:1})>.95);
 assert(danceAccent(1.48,0,{at:1})>0);
 assert.equal(danceAccent(1.61,0,{at:1}),0);
 assert.equal(danceAccent(2,0,{at:1,duration:2}),1);
 assert.deepEqual(animePose(1,140,-1,true),animePose(9,140,3,true));
});

test('feet reach planted targets with a forward knee and constant limb lengths through all directions and tempos',()=>{
 const actor=createAnimeActor(avatars[0],{document:null}),point=new T.Vector3(),knee=new T.Vector3(),hip=new T.Vector3();
 const moving=new Set();
 try {
  for(const bpm of [100,140,200])for(const lane of [-1,0,1,2,3])for(let frame=0;frame<=480;frame++) {
   const seconds=frame*.1*60/bpm,p=actor.pose(seconds,bpm,lane,false,{at:Math.floor(frame/80)*8*60/bpm+.7,duration:.4});
   assert(p.feet.L.lift===0||p.feet.R.lift===0,'one foot must support the body');
   for(const side of ['L','R']) {
    actor.bones['thigh'+side].getWorldPosition(hip);actor.bones['knee'+side].getWorldPosition(knee);actor.bones['foot'+side].getWorldPosition(point);
    const target=new T.Vector3(p.feet[side].x,p.feet[side].y,p.feet[side].z);
    assert(point.distanceTo(target)<1e-5,`foot sliding at ${bpm} BPM, lane ${lane}, frame ${frame}`);
    assert(Math.abs(hip.distanceTo(knee)-.41)<1e-5);assert(Math.abs(knee.distanceTo(point)-.41)<1e-5);
    assert(knee.z>Math.min(hip.z,point.z),'knee must bend forward');
    if(p.feet[side].lift===0) {
     const sole=actor.bones['foot'+side].localToWorld(new T.Vector3(0,-.1575,0));
     assert(Math.abs(sole.y-.02)<1e-5,'supporting sole must stay on the floor');
    }
   }
   for(const name of ['spine','neck','clavicleL','handL','toeL'])if(actor.bones[name].rotation.toArray().slice(0,3).some(v=>Math.abs(v)>.025))moving.add(name);
  }
  assert.equal(moving.size,5,'new joints participate in dancing');
 } finally {actor.dispose();}
});

test('six eight-count phrases vary footwork and gestures without popping at transitions',()=>{
 const signatures=new Set();
 for(let phrase=0;phrase<6;phrase++){
  const p=animePose((phrase*8+1)*60/140,140);
  assert.equal(p.routine,DANCE_ROUTINES[phrase]);
  signatures.add([p.feet.R.x,p.feet.R.z,p.feet.R.y,p.leftArm,p.spineBend].join(','));
 }
 assert.equal(signatures.size,6);
 for(const boundary of [8,16,24,32,40,48,56]){
  const a=animePose((boundary-.00001)*60/140,140),b=animePose((boundary+.00001)*60/140,140);
  for(const key of Object.keys(a))if(typeof a[key]==='number')assert(Math.abs(a[key]-b[key])<.001,`${key} pops at beat ${boundary}`);
  for(const side of ['L','R'])for(const key of Object.keys(a.feet[side]))assert(Math.abs(a.feet[side][key]-b.feet[side][key])<.001);
 }
});

test('all 56 bones drive visible geometry and the thirty finger joints move throughout the choreography',()=>{
 const actor=createAnimeActor(avatars[0],{document:null}),used=new Set(),ranges=new Map();
 const includeAncestors=bone=>{for(let b=bone;b;b=b.parent)if(b.isBone)used.add(b.name);};
 try{
  actor.root.traverse(mesh=>{
   if(!mesh.isMesh)return;includeAncestors(mesh.parent);
   if(mesh.isSkinnedMesh){const indices=mesh.geometry.attributes.skinIndex,weights=mesh.geometry.attributes.skinWeight;
    for(let i=0;i<indices.count;i++)for(let c=0;c<4;c++)if(weights.getComponent(i,c)>0)includeAncestors(actor.skeleton.bones[indices.getComponent(i,c)]);
   }
  });
  assert.equal(used.size,56,'no padding bones without a visible role');
  for(let beat=0;beat<48;beat+=.25){
   actor.pose(beat*60/140,140,Math.floor(beat/8)%4);
   for(const b of actor.skeleton.bones){const q=b.quaternion;const before=ranges.get(b.name);if(!before)ranges.set(b.name,{q:q.clone(),change:0});else before.change=Math.max(before.change,before.q.angleTo(q));}
   // Sample every phrase and both arm accents against the offscreen camera.
   if(beat%2===.5)actor.root.traverse(mesh=>{
    if(!mesh.isMesh)return;const positions=mesh.geometry.attributes.position;
    for(let i=0;i<positions.count;i+=13){const p=new T.Vector3().fromBufferAttribute(positions,i);if(mesh.isSkinnedMesh)mesh.applyBoneTransform(i,p);p.applyMatrix4(mesh.matrixWorld);assert(p.x> -1.36&&p.x<1.36&&p.y>-.18&&p.y<2.99,`clipping at beat ${beat}: ${mesh.name} (${p.x}, ${p.y})`);}
   });
  }
  for(const name of used)assert(ranges.get(name).change>.005,name+' never articulates');
  for(const side of ['L','R'])for(const name of FINGER_NAMES)for(let joint=1;joint<=3;joint++)assert(used.has(name+side+joint));
 }finally{actor.dispose();}
});

test('versus layout reserves visible character space outside both note highways on phone and desktop',()=>{
 for(const [width,height]of [[360,740],[320,640],[390,844],[360,480],[844,390],[667,375],[960,540],[1440,900]]){
  const l=versusLayout(width,height);assert(l.bottom-l.top>=85);assert(l.boardWidth>=130);assert(l.characterY+l.characterSize*1.04<height);
  if(l.portrait)assert(l.characterY+l.characterSize*1.04<=l.top-24);
  else {const firstLeft=width*.32-l.boardWidth/2;assert(l.characterX(0)+l.characterSize*.46+8<=firstLeft);assert(width*.32+l.boardWidth/2+8<width*.68-l.boardWidth/2);}
 }
});

test('the renderer caches held poses, limits live rigs and releases graphics on exit or context loss',()=>{
 const dom=new JSDOM('<body></body>'),document=dom.window.document;
 const context=new Proxy({},{get:()=>()=>{}});dom.window.HTMLCanvasElement.prototype.getContext=()=>context;
 let draws=0,disposed=0,lost=0,canvas;const seen=new Set();
 class Renderer {constructor(options){canvas=options.canvas;this.debug={};}setPixelRatio(){}setSize(){}setClearColor(){}render(scene){draws++;for(const object of scene.children)if(object.name.startsWith('InterDance'))seen.add(object);}dispose(){disposed++;}forceContextLoss(){}}
 const painter=createAnimePainter({document,Renderer,onUnavailable:()=>lost++});
 try{
  painter.draw(context,100,100,100,stages[0],1,-1);painter.draw(context,100,100,100,stages[0],1.01,-1);assert.equal(draws,1);
  painter.draw(context,100,100,100,stages[0],1,2);assert.equal(draws,2);
  let resourceDisposals=0;for(const object of seen)object.traverse(mesh=>{if(mesh.geometry)mesh.geometry.addEventListener('dispose',()=>resourceDisposals++);});
  for(const person of stages.slice(1,7))painter.draw(context,100,100,100,person,0,-1);
  assert(resourceDisposals>0,'evicted characters release their resources');
  canvas.dispatchEvent(new dom.window.Event('webglcontextlost',{cancelable:true}));assert.equal(lost,1);assert.equal(painter.draw(context,0,0,100,stages[0]),false);
  painter.dispose();painter.dispose();assert.equal(disposed,1);
 }finally{painter.dispose();dom.window.close();}
});
