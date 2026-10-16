import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from '../integro-box/rush-src/node_modules/three/build/three.module.js';
import {ArtResources,profileGeometry,createPaintAtlas} from '../integro-box/rush-src/art.js';
import {RunnerCharacter,makeAccessory} from '../integro-box/rush-src/character.js';
import {RushScene,QualityController} from '../integro-box/rush-src/scene.js';
import {sceneryPatch} from '../integro-box/rush-src/environment.js';
import {Run,SHOP,REGIONS,clean} from '../integro-box/rush-src/rules.mjs';
const bounds=model=>{model.root.updateMatrixWorld(true);model.skeleton.update();const b=new T.Box3();model.root.traverse(m=>{if(!m.isMesh)return;for(let i=0;i<m.geometry.attributes.position.count;i++){const v=new T.Vector3();m.getVertexPosition(i,v);v.applyMatrix4(m.matrixWorld);b.expandByPoint(v);}});return b;};

test('sculpted surfaces face outward and every character skin weight is normalized',()=>{
 const g=profileGeometry([[0,1,1],[1,1,1],[2,1,1]],16),p=g.attributes.position,n=g.attributes.normal;
 for(let i=0;i<p.count;i++)assert(p.getX(i)*n.getX(i)+p.getZ(i)*n.getZ(i)>.9);g.dispose();
 const art=new ArtResources(),c=new RunnerCharacter(art,clean(null));try{
  assert(c.skeleton.bones.length>=17);for(const name of['hips','spine','chest','neck','head','elbowL','elbowR','kneeL','kneeR'])assert(c.skeleton.bones.some(b=>b.name===name));assert.equal(c.meshes.length,6);
  for(const mesh of c.meshes){const w=mesh.geometry.attributes.skinWeight,idx=mesh.geometry.attributes.skinIndex;for(let i=0;i<w.count;i++){const weights=[w.getX(i),w.getY(i),w.getZ(i),w.getW(i)];assert(Math.abs(weights.reduce((a,b)=>a+b,0)-1)<1e-6);assert(weights.every(x=>x>=0));assert(idx.getX(i)<c.skeleton.bones.length);}}
  assert.deepEqual(c.clips.map(x=>x.name),['run','idle','jump','slide','hit']);
 }finally{c.dispose();art.dispose();}
});

test('animations remain finite and the settled slide pose fits below its obstacle',()=>{
 const art=new ArtResources(),p=clean(null);p.equipped={head:'cap-coral',back:'pack-coral'};const c=new RunnerCharacter(art,p),r=new Run(0);try{
  for(const pose of['run','jump','slide','hit','idle']){r.jump=pose==='jump'?.5:0;r.slide=pose==='slide'?.6:0;if(pose==='hit')c.event('hit');for(let i=0;i<40;i++)c.update(r,1/60,{preview:pose==='idle',time:i/60});const b=bounds(c);assert(b.min.toArray().every(Number.isFinite));assert(b.max.toArray().every(Number.isFinite));assert(b.max.y-b.min.y<3);if(pose==='slide'){assert(b.max.y<1.375,`helmet top ${b.max.y}`);assert(b.min.y>-.08,`feet ${b.min.y}`);}}
 }finally{c.dispose();art.dispose();}
});

test('one atlas is shared, all 24 accessories build and regional scenery is batched',()=>{
 const art=new ArtResources();try{
  const atlas=createPaintAtlas();assert.equal(atlas.image.width,512);assert.equal(atlas.image.data.length,512*512*4);atlas.dispose();
  for(const item of SHOP){const g=makeAccessory(art,item);assert(!new T.Box3().setFromObject(g).isEmpty());g.traverse(m=>{if(m.isMesh)assert.equal(m.material.map,art.atlas);});}
  for(const region of REGIONS)for(let i=0;i<8;i++){const g=sceneryPatch(art,region,i,99);assert(g.children.length===1,`${region.type} ${g.children.length} draw groups`);assert(g.userData.mergedGeometry.length>0);g.userData.mergedGeometry.forEach(x=>x.dispose());}
 }finally{art.dispose();}
});

test('automatic quality degrades only for sustained slow frames and stays bounded',()=>{
 const q=new QualityController('auto',2);for(let i=0;i<1400;i++)q.observe(1/28);assert.equal(q.scale,1);assert.equal(q.distance,130);const high=new QualityController('high',2);for(let i=0;i<800;i++)high.observe(1/25);assert.equal(high.scale,1.6);const fast=new QualityController('auto',2);for(let i=0;i<800;i++)fast.observe(1/60);assert.equal(fast.scale,1.6);
});

test('preview uses the same renderer and level changes dispose old geometry and skeletons',()=>{
 let lastScene=null,disposed=0;const renderer={shadowMap:{},setPixelRatio(){},setSize(){},render(s){lastScene=s;},dispose(){disposed++;}};
 const s=new RushScene({clientWidth:300,clientHeight:400},'auto',{rendererFactory:()=>renderer}),p=clean(null),r=new Run(0);s.setLevel(r,p);
 let released=0;const owned=[...s.character.ownedGeometry,...s.merged,s.shadow.geometry];owned.forEach(g=>g.addEventListener('dispose',()=>released++));s.setPreview(true);s.draw(r,0,true);assert.equal(lastScene,s.previewScene);s.turnPreview(.8);s.draw(r,.02,true);assert(s.previewCharacter.root.rotation.y>Math.PI);s.setPreview(false);s.draw(r,.03);assert.equal(lastScene,s.scene);
 s.emit('coin',r);s.draw(r,.05);assert(s.fx.count>0);s.setLevel(new Run(3),p);assert.equal(released,owned.length);s.dispose();assert.equal(disposed,1);
});

test('toon surfaces share a discrete ramp, the crown covers the scalp and the runner stays low poly',()=>{
 for(const head of[null,'halo-aurora']){const art=new ArtResources(),p=clean(null);p.equipped.head=head;const c=new RunnerCharacter(art,p);try{
  c.root.updateMatrixWorld(true);c.skeleton.update();const surfaces=[];let triangles=0;
  c.root.traverse(m=>{if(!m.isMesh||m.userData.contour)return;surfaces.push(m);triangles+=(m.geometry.index?.count||m.geometry.attributes.position.count)/3;assert(m.material.isMeshToonMaterial);assert.equal(m.material.gradientMap,art.toonRamp);});
  assert(triangles<16000,`${triangles} triangles`);assert(surfaces.length<=18);assert.equal(art.toonRamp.magFilter,T.NearestFilter);assert.deepEqual([...art.toonRamp.image.data],[62,128,196,255]);
  const ray=new T.Raycaster(new T.Vector3(0,3,.02),new T.Vector3(0,-1,0)),hits=ray.intersectObjects(surfaces,false);assert(hits.length);assert(['head-details','cap-details'].includes(hits[0].object.name),'skin must not protrude through the hair crown');
 }finally{c.dispose();art.dispose();}}
});

test('portrait framing keeps all three lanes visible and raises the distant road above the old empty sky',()=>{
 const renderer={shadowMap:{},setPixelRatio(){},setSize(){},render(){},dispose(){}};
 for(const [w,h]of[[393,710],[360,780],[320,900],[900,600]]){const s=new RushScene({clientWidth:w,clientHeight:h},'auto',{rendererFactory:()=>renderer}),r=new Run(0);try{
  s.setLevel(r,clean(null));for(const lane of[-1,0,1]){r.lane=lane;r.x=lane*2.55;for(let i=0;i<70;i++)s.draw(r,i/60);s.camera.updateMatrixWorld();
   for(const x of[r.x-.5,r.x+.5])assert(Math.abs(new T.Vector3(x,1.5,0).project(s.camera).x)<1,'runner remains inside the viewport');
   const head=new T.Vector3(r.x,2.35,0).project(s.camera),feet=new T.Vector3(r.x,0,0).project(s.camera);assert((1-head.y)/2>.4);assert((1-feet.y)/2<.85);if(w===393)assert((head.y-feet.y)/2>.20);
   const horizon=new T.Vector3(0,-Math.pow(120-28,2)*.0005,-120).project(s.camera);assert((1-horizon.y)/2<.4);
  }
 }finally{s.dispose();}}
});
