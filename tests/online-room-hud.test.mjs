import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {JSDOM} from 'jsdom';
import {decorateRoom,mediaControls,mountParticipants} from '../aulas-online/room-hud.mjs';
import {mountRoomPanels} from '../aulas-online/room-panels.mjs';
const html=readFileSync(new URL('../aulas-online/index.html',import.meta.url),'utf8');
function setup(){const dom=new JSDOM(html);globalThis.document=dom.window.document;return {dom,root:document.querySelector('#classroom')};}
test('room tools retain cameras and dock, expose one active panel and have unique controls',()=>{
 const {dom,root}=setup();try{
  decorateRoom(root);const dispose=mountRoomPanels(root);
  for(const panel of ['board','chat','people','call']){root.querySelector(`[data-room-panel="${panel}"]`).click();assert.equal(root.querySelector('#videos').hidden,false);assert.equal(root.querySelectorAll('[data-room-panel][aria-pressed="true"]').length,1);assert.equal(root.querySelector('#room-stage').dataset.panel,panel);}
  for(const id of ['mic','camera','screen','leave','end','sound','mute-sound','participants-list'])assert.equal(root.querySelectorAll('#'+id).length,1);
  mediaControls(root,{isMicrophoneEnabled:false,isCameraEnabled:true},true);assert.equal(root.querySelector('#mic').disabled,true);assert.equal(root.querySelector('#camera').getAttribute('aria-pressed'),'true');assert.ok(root.querySelector('#mic svg'));
  dispose();assert.equal(root.querySelector('#room-shortcuts').hidden,true);
 }finally{dom.window.close();delete globalThis.document;}
});
test('teacher controls require removal confirmation, block repeated clicks, and escape names',async()=>{
 const {dom,root}=setup();let confirmed=false,finish;const calls=[],feedback=[];
 const room={self:{isTeacher:true},moderate:(id,operation)=>{calls.push([id,operation]);return new Promise(resolve=>{finish=resolve;});}};
 const hud=mountParticipants(root,{getRoom:()=>room,feedback:t=>feedback.push(t),confirm:()=>confirmed});
 try{hud.roster([{id:'t',name:'Teacher',isTeacher:true},{id:'s',name:'<script>Student</script>',isTeacher:false}],'t');
  assert.equal(root.querySelector('#participants-list script'),null);assert.equal(root.querySelectorAll('[data-operation]').length,2);
  root.querySelector('[data-operation="remove"]').click();assert.equal(calls.length,0);
  confirmed=true;root.querySelector('[data-operation="remove"]').click();root.querySelector('[data-operation="remove"]').click();assert.equal(calls.length,1);finish();await new Promise(r=>setTimeout(r,0));assert.match(feedback[0],/entrar novamente/);
  room.self.isTeacher=false;hud.roster([{id:'t',name:'Teacher',isTeacher:true},{id:'s',name:'Student',isTeacher:false}],'s');assert.equal(root.querySelectorAll('[data-operation]').length,0);
 }finally{hud.dispose();dom.window.close();delete globalThis.document;}
});
