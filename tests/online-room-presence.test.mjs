import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {JSDOM} from 'jsdom';
import {DirectRoom,directView} from '../aulas-online/direct-room.mjs';
import {renderMediaIndicators,renderRoomMode,mountWaiting} from '../aulas-online/room-presence.mjs';
import {classroomFile,mountRoomFiles} from '../aulas-online/room-files.mjs';
import {decorateRoom} from '../aulas-online/room-hud.mjs';
import {mountRoomPanels} from '../aulas-online/room-panels.mjs';
const html=readFileSync(new URL('../aulas-online/index.html',import.meta.url),'utf8'),tick=()=>new Promise(r=>setTimeout(r,0));
test('participant badges identify on/off and teacher mute without using color alone',()=>{
 const dom=new JSDOM('<div id="tile"></div>'),tile=dom.window.document.querySelector('#tile');
 try{renderMediaIndicators(tile);assert.equal(tile.querySelectorAll('[role="img"]').length,2);assert.ok(tile.querySelector('[aria-label="Microfone desligado"]'));assert.ok(tile.querySelector('[aria-label="Câmera desligada"]'));
 renderMediaIndicators(tile,{microphone:true,camera:true});assert.equal(tile.querySelectorAll('.is-on').length,2);
 renderMediaIndicators(tile,{microphone:true,camera:false,blocked:true});assert.ok(tile.querySelector('[aria-label="Microfone silenciado pelo professor"]'));assert.equal(tile.querySelectorAll('.is-on').length,0);
 }finally{dom.window.close();}
});
test('pause stops all captures, rejects pending media, and resume does not automatically reopen devices',async()=>{
 let stopped=0,opened=0,resolveCamera;const modes=[],states=[];
 const view={participant(){},status(){},controls(){},track(){},closed(){},remove(){},roomState:m=>modes.push(m),mediaState:(id,state)=>states.push(state)};
 const room=new DirectRoom({call:async()=>({ok:true}),admission:{member_id:'teacher',isTeacher:true},context:{},view,mediaDevices:{getUserMedia:async opts=>{opened++;if(opts.video)return new Promise(r=>{resolveCamera=r;});return {getTracks:()=>[{stop(){stopped++;}}]};},getDisplayMedia:async()=>({getTracks:()=>[{stop(){stopped++;}}]})}});
 await room.sync({peers:[],roomMode:'live',modeRevision:1});await room.setMedia('audio',true);await room.setMedia('screen',true);const pending=room.setMedia('camera',true);
 await room.sync({peers:[],roomMode:'paused',modeRevision:2});resolveCamera({getTracks:()=>[{stop(){stopped++;}}]});await pending;
 assert.equal(stopped,3);assert.equal(room.localParticipant.isMicrophoneEnabled,false);assert.equal(room.localParticipant.isScreenShareEnabled,false);assert.equal(room.localParticipant.isCameraEnabled,false);
 await assert.rejects(room.setMedia('audio',true),/retomar/);await room.sync({peers:[],roomMode:'live',modeRevision:1});assert.equal(room.roomMode,'paused');
 await room.sync({peers:[],roomMode:'live',modeRevision:3});assert.equal(opened,2);assert.equal(room.localParticipant.isMicrophoneEnabled,false);assert.deepEqual(modes,['live','paused','live']);await room.disconnect();
});
test('paused room suppresses received audio even when Activate sound is used',async()=>{
 const dom=new JSDOM('<div id="videos"></div><div id="audio"></div>'),previous={document:globalThis.document,MediaStream:globalThis.MediaStream};globalThis.document=dom.window.document;globalThis.MediaStream=class{};dom.window.HTMLMediaElement.prototype.play=async()=>{};
 try{const audio=document.querySelector('#audio'),view=directView({videos:document.querySelector('#videos'),audio,status(){},controls(){},closed(){}});view.roomState('paused');view.track('p','audio',{},false);await view.muteAudio(false);assert.equal(audio.firstChild.muted,true);view.roomState('live');assert.equal(audio.firstChild.muted,false);}
 finally{Object.assign(globalThis,previous);dom.window.close();}
});
test('lobby rechecks admission, enters once when ready, and ignores replies after cancel',async()=>{
 let calls=0,entered=0,release;const changed=[];
 let finish;const complete=new Promise(r=>finish=r);
 const dispose=mountWaiting({entry:{},interval:1,check:async()=>({ready:++calls===2}),enter:async()=>{entered++;finish();},changed:r=>changed.push(r.ready),failed:e=>{throw e;}});
 await complete;dispose();assert.equal(entered,1);assert.deepEqual(changed,[false,true]);
 const cancel=mountWaiting({entry:{},interval:1,check:()=>new Promise(r=>release=r),enter:async()=>entered++,changed(){},failed(){}});await new Promise(r=>setTimeout(r,5));cancel();release({ready:true});await tick();assert.equal(entered,1);
});
test('files tab retains badge after icon decoration and waiting slate follows teacher controls',()=>{
 const dom=new JSDOM(html),previous=globalThis.document;globalThis.document=dom.window.document;const room=document.querySelector('#classroom');
 try{decorateRoom(room);assert.ok(room.querySelector('#live-file-count'));const dispose=mountRoomPanels(room);
 room.querySelector('[data-room-panel="files"]').click();assert.equal(room.querySelector('#live-files-panel').hidden,false);assert.equal(room.querySelector('#videos').hidden,false);
 renderRoomMode(room,'soon',false);assert.equal(room.querySelector('#room-slate').hidden,false);assert.equal(room.querySelector('#room-mode-controls').hidden,true);assert.equal(room.querySelector('#camera').disabled,true);
 renderRoomMode(room,'paused',true);assert.equal(room.querySelector('#room-mode-controls').hidden,false);assert.equal(room.querySelector('#room-slate-title').textContent,'Em pausa');assert.equal(room.querySelector('[data-lesson-mode="live"]').textContent,'Retomar aula');
 renderRoomMode(room,'live',true);assert.equal(room.querySelector('#room-slate').hidden,true);assert.equal(room.querySelector('#camera').disabled,false);dispose();}
 finally{globalThis.document=previous;dom.window.close();}
});
test('teacher uploads bounded files to this lesson and students download without an upload control',async()=>{
 const dom=new JSDOM(html),previous=globalThis.document;globalThis.document=dom.window.document;const root=document.querySelector('#classroom'),objects=[],uploads=[],downloads=[];
 const bucket={list:async()=>({data:objects}),upload:async(path,file,options)=>{uploads.push({path,file,options});objects.push({id:'f1',name:path.split('/')[1],metadata:{size:file.size}});return {};},download:async path=>({data:{path}})};
 const room={context:{lesson_id:'lesson-1'},self:{isTeacher:true}};
 let dispose=mountRoomFiles(root,{db:{storage:{from:name=>{assert.equal(name,'online-room-files');return bucket;}}},room,download:(...args)=>downloads.push(args),feedback:message=>{throw Error(message);}});
 try{await tick();const input=root.querySelector('#live-file-input');Object.defineProperty(input,'files',{configurable:true,value:[new dom.window.File(['abc'],'Exercícios.pdf',{type:'application/pdf'})]});
 await root.querySelector('#live-upload-form').onsubmit({preventDefault(){}});assert.equal(uploads.length,1);assert.ok(uploads[0].path.startsWith('lesson-1/'));assert.equal(uploads[0].options.upsert,false);assert.equal(root.querySelector('#live-file-count').textContent,'1');
 root.querySelector('#live-file-list button').click();await tick();assert.equal(downloads[0][1],'Exercícios.pdf');dispose();
 room.self.isTeacher=false;dispose=mountRoomFiles(root,{db:{storage:{from:()=>bucket}},room,download(){},feedback(){}});await tick();assert.equal(root.querySelector('#live-upload-form').hidden,true);await root.querySelector('#live-upload-form').onsubmit({preventDefault(){}});assert.equal(uploads.length,1);
 assert.throws(()=>classroomFile({name:'script.html',size:10}),/Use PDF/);assert.throws(()=>classroomFile({name:'large.pdf',size:21*1024*1024}),/20 MB/);assert.throws(()=>classroomFile({name:'empty.pdf',size:0}),/conteúdo/);
 }finally{dispose();globalThis.document=previous;dom.window.close();}
});
