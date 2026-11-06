import test from 'node:test';import assert from 'node:assert/strict';import {Rooms} from '../integro-box/engole/network.mjs';import {Match,applySnapshot} from '../integro-box/engole/core.mjs';
test('eight separate clients share one city and clean up private channels',async()=>{
 const channels=new Set(),roster=Array.from({length:8},(_,slot)=>({id:'user'+slot,slot}));let room={id:'test-room',code:'ABCDEF123456',owner:'user0',phase:'waiting',seed:42,players:[]};
 const clients=roster.map(user=>({async rpc(_,p){if(p.p_action==='leave'){room.players=room.players.filter(x=>x.id!==user.id);return {data:{left:true}};}if(['create','join'].includes(p.p_action))room.players.push(user);if(p.p_action==='start'){room.phase='playing';room.startedAt=new Date(Date.now()+5000).toISOString();}return {data:structuredClone({...room,serverAt:new Date().toISOString()})};},channel(topic,options){assert.equal(options.config.private,true);const c={topic,state:'joined',on(_,__,f){this.handler=f;return this;},subscribe(fn){queueMicrotask(()=>fn('SUBSCRIBED'));return this;},async send({payload}){for(const other of channels)if(other!==this&&other.topic===this.topic)other.handler({payload:structuredClone(payload)});}};channels.add(c);return c;},async removeChannel(c){channels.delete(c);}}));
 const host=new Match(42,roster),views=roster.map(()=>new Match(42,roster)),errors=[];
 const peers=clients.map((client,i)=>new Rooms(client,roster[i],{room:()=>{},state:s=>applySnapshot(views[i],s),input:(id,v)=>host.input(id,v),error:e=>errors.push(e)}));
 try{await peers[0].enter('create');for(let i=1;i<8;i++)await peers[i].enter('join',room.code);await peers[0].refresh();await peers[0].start();assert.equal(peers[0].room.players.length,8);
 for(let i=1;i<8;i++)peers[i].send('input',{x:i%2?1:-1,y:0});const positions=host.players.map(p=>p.x);host.step(.05);for(let i=1;i<8;i++)assert.notEqual(host.players[i].x,positions[i]);
 const o=host.objects.find(o=>!o.gone);Object.assign(host.players[1],{x:o.x,y:o.y,r:150});host.step(.05);peers[0].send('state',host.snapshot());
 for(let i=1;i<8;i++){assert.deepEqual(views[i].snapshot(),host.snapshot());assert(views[i].objects[o.id].gone);}assert.equal(errors.length,0);
 }finally{for(const peer of peers)await peer.leave();}assert.equal(channels.size,0);
});
