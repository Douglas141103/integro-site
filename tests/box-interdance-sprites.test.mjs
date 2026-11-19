import test from 'node:test';
import assert from 'node:assert/strict';
import {stages,avatars} from '../integro-box/interdance-src/engine.mjs';
import {createSpritePainter,dancerFrame,dancerSlug} from '../integro-box/interdance-src/dancer-sprites.mjs';

test('all stage and avatar identities map to distinct sheets and perform all sixteen poses',()=>{
  const artists=[...stages,...avatars];
  assert.equal(new Set(artists.map(p=>dancerSlug(p.artist))).size,18);
  for(const stage of stages){
    for(const person of [stage,...avatars]){
      const frames=new Set();
      for(let half=8;half<72;half++){
        frames.add(dancerFrame(half/2,person,-1,person!==stage,{groove:stage.groove,stageId:stage.id}));
      }
      assert.equal(frames.size,16,stage.artist+' × '+person.artist);
    }
  }
});

test('all four hit directions are distinct, sustained notes hold their pose and reduced motion stays still',()=>{
  const person=stages[0],b=5,t=b*60/person.bpm;
  const hit={at:t,duration:.8,groove:'pop'};
  const frames=[0,1,2,3].map(lane=>dancerFrame(b,person,lane,false,hit));
  assert.equal(new Set(frames).size,4);
  assert.equal(dancerFrame(b+.6*person.bpm/60,person,1,false,hit),frames[1]);
  assert.equal(dancerFrame(b,person,0,true,hit),frames[3]);
  assert.equal(dancerFrame(45,person,1,true,{...hit,reduced:true}),0);
});

test('sprites load on demand, honor atlas dimensions and dispose pending callbacks',()=>{
  const images=[],draws=[];
  const ctx={save(){},translate(){},scale(){},restore(){},drawImage(...args){draws.push(args);}};
  const painter=createSpritePainter({createImage(){const image={naturalWidth:1280,naturalHeight:1280};images.push(image);return image;}});
  assert.equal(painter.draw(ctx,20,20,32,stages[8]),false);
  assert.match(images[0].src,/\/iris\.webp$/);
  images[0].onload();
  assert.equal(painter.draw(ctx,20,20,32,stages[8]),true);
  assert.deepEqual(draws[0].slice(1,5),[0,0,320,320]);
  stages.slice(0,5).forEach(p=>painter.draw(ctx,20,20,32,p));
  assert.equal(images[0].onload,null);
  painter.dispose();
  assert(images.every(image=>image.onload===null));
  assert.equal(painter.draw(ctx,20,20,32,stages[8]),false);
});
