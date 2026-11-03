import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {createDepartureClock} from '../integro-box/room-departure.mjs';
import {EggAdventure,NESTS} from '../integro-box/egg-src/egg-rules.js';

test('room transport sends the stone giant cast, receives it and grows the mounted adapter state',async()=>{
 const dom=new JSDOM('<body></body>',{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window;
 const timers=new Map();let seq=0;w.setInterval=()=>0;w.setTimeout=(cb,ms)=>{timers.set(++seq,{cb,ms});return seq};w.clearTimeout=id=>timers.delete(id);
 const game=new EggAdventure();const calls=[];let event=null;
 w.BoxAdapters={egg:{active:()=>true,enter:()=>game.setFlameRoom(true),setPeers(){},setDeparture(){},applyFlame:(f,n)=>game.applyRoomFlame(f,n),applyRock:(r,n)=>game.applyRoomRock(r,n),state:()=>({x:game.player.x,y:0,z:game.player.z,yaw:0,zone:'world',rock:game.rockRequest,rockChase:game.carrying===22,flame:game.flameRequest,flameChase:false})}};
 const supabase={rpc:async(_,args)=>{calls.push(args);if(args.p_action==='sync'&&args.p_state.rock){assert(Buffer.byteLength(JSON.stringify(args.p_state))<=512);event={id:args.p_state.rock.id,castAt:1000000,closed:false,owner:1};}return{data:{id:'room-test',code:'AABBCCDDEEFF',game:'egg',slot:1,owner:true,players:[{slot:1,state:{}}],revision:1,serverNow:1026000,flame:null,rock:event}};}};
 const source=readFileSync(new URL('../integro-box/multiplayer.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,'');
 try{
  new (w.eval('Function'))('supabase','createDepartureClock',source)(supabase,createDepartureClock);
  w.document.getElementById('boxCreate').click();await new Promise(setImmediate);assert(w.BoxMultiplayer.connected);
  Object.assign(game.player,NESTS[22]);assert(game.steal(0));const castId=game.rockRequest.id;
  const scheduled=[...timers.values()].find(t=>t.ms===20);assert(scheduled);await scheduled.cb();
  const sent=calls.find(a=>a.p_action==='sync').p_state;assert.equal(sent.rock.id,castId);assert.equal(sent.rockChase,true);assert.equal(sent.z,NESTS[22].z);assert.equal(game.roomRock.id,castId);assert.equal(game.mountain(0,0).amount,1);assert.equal(game.rockRequest,null);
 }finally{dom.window.close();}
});
