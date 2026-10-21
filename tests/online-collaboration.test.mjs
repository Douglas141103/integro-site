import test from 'node:test';import assert from 'node:assert/strict';
import {ClassroomCollaboration,validAction} from '../aulas-online/collaboration.mjs';
const stroke=(id='line')=>({type:'draw',stroke:id,color:'#183f36',width:4,points:[[.1,.2],[.3,.4]]});
test('teacher sequences chat and whiteboard, authenticated sender wins, late joins synchronize',()=>{
 const people=[{id:'t',name:'Professor',isTeacher:true},{id:'a',name:'Ana',isTeacher:false},{id:'b',name:'Beto',isTeacher:false}],models=new Map(),errors=[];
 for(const self of people)models.set(self.id,new ClassroomCollaboration({self,peers:()=>people.filter(p=>p.id!==self.id),send:(id,msg)=>{models.get(id)?.receive(self,structuredClone(msg));return true;},error:message=>errors.push(message)}));
 const t=models.get('t'),a=models.get('a'),b=models.get('b');t.open(people[1]);t.open(people[2]);
 a.submit({type:'chat',text:'<img src=x onerror=alert(1)>',name:'Professor',author:'t'});
 assert.equal(t.state.chat[0].name,'Ana');assert.equal(b.state.chat[0].author,'a');assert.equal(t.state.chat[0].action.name,undefined);
 a.submit(stroke());assert.equal(t.state.board.length,0);assert.match(errors.pop(),/liberar/);
 t.submit({type:'permission',allowed:true});a.submit(stroke('a'));b.submit(stroke('b'));
 assert.equal(t.state.board.length,2);assert.deepEqual(a.state,b.state);
 a.submit({type:'clear'});assert.equal(t.state.board.length,2);
 a.submit({type:'undo'});assert.equal(t.state.board.length,1);assert.equal(t.state.board[0].author,'b');
 t.submit({type:'text',text:'Aula',position:[.5,.5],color:'#245edb'});
 const saved=structuredClone(b.state);b.state={revision:0,board:[],chat:[],allowed:false};b.ready=false;t.open(people[2]);assert.deepEqual(b.state,saved);assert.equal(b.ready,true);
 b.receive(people[1],{kind:'event',event:{revision:b.state.revision+1,action:{type:'clear'}}});assert.deepEqual(b.state,saved);
 t.submit({type:'clear'});assert.equal(a.state.board.length,0);
 a.closed(people[0]);assert.throws(()=>a.submit({type:'chat',text:'offline'}),/Aguarde/);
});
test('payload bounds, rate limits and input normalization',()=>{
 assert.equal(validAction({...stroke(),points:[[NaN,0]]}),false);
 assert.equal(validAction({...stroke(),points:Array(65).fill([0,0])}),false);
 assert.equal(validAction({type:'chat',text:'x'.repeat(2001)}),false);
 const self={id:'t',name:'T',isTeacher:true},errors=[];
 const model=new ClassroomCollaboration({self,send:()=>true,peers:()=>[],error:e=>errors.push(e)});
 model.submit({...stroke(),points:[[.123456789,.23456789]],untrusted:'discard'});
 assert.deepEqual(model.state.board[0].action.points,[[.1235,.2346]]);assert.equal(model.state.board[0].action.untrusted,undefined);
 for(let i=0;i<13;i++)model.submit({type:'chat',text:String(i)});
 assert.equal(model.state.chat.length,12);assert.match(errors[0],/Aguarde/);
});

test('two teacher devices share one ordered board and chat, with coordinator handoff',()=>{
 let people=[{id:'pc',name:'Professor',isTeacher:true},{id:'phone',name:'Professor',isTeacher:true},{id:'pupil',name:'Aluno',isTeacher:false}];
 const models=new Map(),errors=[];
 for(const self of people)models.set(self.id,new ClassroomCollaboration({self,coordinatorId:'pc',peers:()=>people.filter(p=>p.id!==self.id),send:(id,msg)=>{models.get(id)?.receive(self,structuredClone(msg));return true;},error:e=>errors.push(e)}));
 const pc=models.get('pc'),phone=models.get('phone'),pupil=models.get('pupil');
 pc.open(people[1]);pc.open(people[2]);
 phone.submit(stroke('phone'));pupil.submit({type:'chat',text:'Vejo o quadro'});pc.submit({type:'text',text:'Computador',position:[.5,.5],color:'#245edb'});
 assert.deepEqual(pc.state,phone.state);assert.deepEqual(phone.state,pupil.state);assert.equal(phone.state.board.length,2);
 phone.submit({type:'permission',allowed:true});pupil.submit(stroke('student'));
 const before=structuredClone(pupil.state);
 pupil.receive(people[1],{kind:'event',event:{revision:before.revision+1,action:{type:'clear'}}});
 assert.deepEqual(pupil.state,before); // A teacher device is not automatically the coordinator.
 people=people.filter(p=>p.id!=='pc');
 phone.closed({id:'pc'});pupil.closed({id:'pc'});
 // Coordinator learns first; pupil requests a fresh snapshot after its next roster poll.
 phone.setCoordinator('phone');pupil.setCoordinator('phone');
 assert.deepEqual(phone.state,pupil.state);assert.deepEqual(pupil.state,before);
 phone.submit({type:'clear'});pupil.submit({type:'chat',text:'Continuamos no celular'});
 assert.equal(pupil.state.board.length,0);assert.equal(phone.state.chat.length,2);assert.deepEqual(phone.state,pupil.state);assert.equal(errors.length,0);
 // Returning computer is a replica; cannot reset the board.
 const returning={id:'pc-new',name:'Professor',isTeacher:true};people.push(returning);
 const rejoined=new ClassroomCollaboration({self:returning,coordinatorId:'phone',peers:()=>people.filter(p=>p.id!==returning.id),send:(id,msg)=>{models.get(id)?.receive(returning,structuredClone(msg));return true;}});models.set(returning.id,rejoined);
 rejoined.open(people[0]);assert.deepEqual(rejoined.state,phone.state);rejoined.submit(stroke('returned'));assert.deepEqual(rejoined.state,pupil.state);
});
