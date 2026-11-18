import {test} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import * as THREE from 'three';
import {createItemViewer} from '../integro-box/egg-src/egg-item-viewer.js';

test('inspection rotates the real mesh, restores the game render target and releases the preview', () => {
 const {window} = new JSDOM('<main></main>');
 const doc=window.document, app=doc.querySelector('main');
 const saved=new Map(['document','requestAnimationFrame','cancelAnimationFrame'].map(k=>[k,globalThis[k]]));
 let pending, modelDisposals=0, targetDisposals=0;
 const snapshots=[], original={};
 let currentTarget=original;
 const renderer={
  getRenderTarget:()=>currentTarget,
  setRenderTarget:t=>{currentTarget=t;},
  render(scene,camera){
   assert.notEqual(currentTarget,original);
   assert(scene.getObjectByName('test-model'));
   snapshots.push(camera.position.clone());
  },
  readRenderTargetPixels(target){
   if(snapshots.length===1)target.addEventListener('dispose',()=>targetDisposals++);
  }
 };
 try{
  globalThis.document=doc;
  globalThis.requestAnimationFrame=cb=>{pending=cb;return 1;};
  globalThis.cancelAnimationFrame=()=>{pending=null;};
  window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
  window.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new window.Event('close'));};
  window.HTMLCanvasElement.prototype.getContext=()=>({
   createImageData:(w,h)=>({data:new Uint8ClampedArray(w*h*4)}),putImageData(){}
  });
  const viewer=createItemViewer(app,()=>renderer,(parent,id)=>{
   assert.equal(id,'boots');
   const model=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial());
   model.name='test-model';
   model.userData.dispose=()=>{modelDisposals++;model.geometry.dispose();model.material.dispose();};
   parent.add(model);return model;
  });
  viewer.open('boots','Tênis velozes',false);
  const dialog=doc.querySelector('dialog');
  assert(dialog.open);assert.equal(dialog.querySelector('h3').textContent,'Tênis velozes');
  assert.equal(currentTarget,original);
  dialog.querySelector('button[aria-label="Girar para a direita"]').click();
  pending();assert.equal(snapshots.length,2);assert(snapshots[0].distanceTo(snapshots[1])>.1);
  assert.equal(currentTarget,original);
  dialog.querySelector('button[autofocus]').click();
  assert.equal(doc.querySelector('dialog'),null);
  assert.equal(modelDisposals,1);assert.equal(targetDisposals,1);
 }finally{
  for(const [key,value] of saved){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
  window.close();
 }
});
