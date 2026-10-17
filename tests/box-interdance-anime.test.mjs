import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import * as T from '../integro-box/interdance-src/node_modules/three/build/three.module.js';
import {createAnimeActor,makeToonRamp} from '../integro-box/interdance-src/anime-actor.mjs';
import {animePose,versusLayout} from '../integro-box/interdance-src/anime-motion.mjs';
import {createAnimePainter} from '../integro-box/interdance-src/anime-view.mjs';
import {stages,avatars} from '../integro-box/interdance-src/engine.mjs';

test('all sixteen bosses and both dancers have bounded weighted rigs, edited face normals and three-tone materials',()=>{
 const ramp=makeToonRamp();assert.equal(ramp.image.width,3);assert.equal(ramp.magFilter,T.NearestFilter);
 for(const person of [...stages,...avatars]){
  const actor=createAnimeActor(person,{ramp,document:null});let skinCount=0,triangles=0;
  try{
   assert.equal(actor.skeleton.bones.length,15);assert.equal(actor.palette.color.gradientMap,ramp);
   const normals=actor.faceGeometry.attributes.normal;for(let i=0;i<normals.count;i++)assert(Math.abs(new T.Vector3().fromBufferAttribute(normals,i).length()-1)<.00001);
   actor.root.traverse(mesh=>{
    if(!mesh.isMesh)return;triangles+=(mesh.geometry.index?.count||mesh.geometry.attributes.position.count)/3;
    if(mesh.isSkinnedMesh){skinCount++;const weights=mesh.geometry.attributes.skinWeight;assert.equal(mesh.skeleton,actor.skeleton);for(let i=0;i<weights.count;i++){assert(Math.abs(weights.getX(i)+weights.getY(i)-1)<.00001);assert(weights.getX(i)>=0&&weights.getY(i)>=0);}}
   });
   assert.equal(skinCount,8);assert(triangles<65000,person.artist+' exceeded mobile geometry budget: '+triangles);
   for(const lane of [-1,0,1,2,3]){
    actor.pose(1.25,person.bpm||140,lane);let minY=Infinity,maxY=-Infinity;
    actor.root.traverse(mesh=>{if(!mesh.isMesh)return;const positions=mesh.geometry.attributes.position;for(let i=0;i<positions.count;i+=9){const point=new T.Vector3().fromBufferAttribute(positions,i);if(mesh.isSkinnedMesh)mesh.applyBoneTransform(i,point);point.applyMatrix4(mesh.matrixWorld);assert([point.x,point.y,point.z].every(Number.isFinite));minY=Math.min(minY,point.y);maxY=Math.max(maxY,point.y);assert(Math.abs(point.x)<1.36&&Math.abs(point.z)<2);}});
    assert(minY>-.18&&maxY<2.99,`${person.artist}: pose ${lane} clipped (${minY}, ${maxY})`);
   }
  }finally{actor.dispose();}
 }
 ramp.dispose();
});

test('animation holds drawings at 12 fps, reacts to directions and honors reduced motion',()=>{
 assert.deepEqual(animePose(1.001,160,0),animePose(1.07,160,0));assert.notDeepEqual(animePose(1.001,160,0),animePose(1.09,160,0));
 assert.notEqual(animePose(1,140,0).leftArm,animePose(1,140,3).leftArm);
 assert(animePose(1,140,1).squash<1);assert(animePose(1,140,2).squash>1);
 assert.deepEqual(animePose(1,140,-1,true),animePose(9,140,3,true));
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
