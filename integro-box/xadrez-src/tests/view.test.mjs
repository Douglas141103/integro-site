import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createCharacter,fitBoardCamera,position} from '../src/scene.js';
import {Chess} from '../src/chess-core.js';

test('both armies face the opponent, including after recreating saved positions',()=>{
 for(const type of ['p','n','b','r','q','k'])for(const color of ['w','b']){
  const piece=createCharacter(type,color),forward=new T.Vector3(0,0,1).applyQuaternion(piece.quaternion);
  assert(forward.z*(color==='w'?-1:1)>.999);
  assert.equal(piece.userData.restYaw,piece.rotation.y);
 }
});

test('all board corners and character bounds fit portrait, landscape, desktop and flipped views',()=>{
 const points=[];
 for(const x of [-4.43,4.43])for(const z of [-4.43,4.43])points.push(new T.Vector3(x,-.6,z));
 for(const row of new Chess().board())for(const piece of row){
  if(!piece)continue;const model=createCharacter(piece.type,piece.color);model.position.copy(position(piece.square));model.updateMatrixWorld(true);
  const box=new T.Box3().setFromObject(model);
  for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])points.push(new T.Vector3(x,y,z));
 }
 for(const ratio of [378/520,308/360,680/300,1040/600])for(const flipped of [1,-1])for(const overhead of [false,true]){
  const camera=new T.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.set(overhead?.01:3.5*flipped,overhead?20:17,overhead?.01:11.5*flipped);camera.lookAt(0,.4,0);fitBoardCamera(camera,ratio);
  for(const point of points){const clip=point.clone().project(camera);assert(Math.abs(clip.x)<1&&Math.abs(clip.y)<1,`clipped piece at ${ratio}: ${clip.toArray()}`);}
 }
});
