import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {SoloGame,action,publicView,resolveVote} from '../integro-box/descubra-src/rules.mjs';
import {readStatement,perspective,mountJury,observe} from '../integro-box/descubra-src/jury.mjs';
import {validate,respond} from '../supabase/functions/descubra-jury/contract.mjs';
import {descubraDatabase,userId} from './descubra-fixture.mjs';
import {readFile} from 'node:fs/promises';

test('a nearby witness sees the attacker, a distant juror cannot learn the secret',()=>{
 const {state:s}=new SoloGame('infiltrator');s.players.forEach(p=>Object.assign(p,{room:2,x:1800,y:300}));s.players[3].x+=450;
 observe(s,23);action(s,1,'stun',{target:2},23);
 assert.ok(perspective(s,3,[],'vote').facts.some(f=>f.kind==='witness'&&f.subject===1));
 assert.ok(!perspective(s,4,[],'vote').facts.some(f=>f.kind==='witness'));
 assert.ok(!s.clues.at(-1).includes('Azul'));assert.equal(publicView(s,4,23).memories,undefined);
 s.meetingEnd=48;s.phase='meeting';resolveVote(s,48);assert.equal(s.players[2].vote,1);assert.equal(s.players[3].vote,0);
});
test('discussion waits for player, gives each voter the defense privately, then applies sealed votes',async()=>{
 const dom=new JSDOM('<section></section>');globalThis.document=dom.window.document;
 const g=new SoloGame('crew',()=>.1),s=g.state;s.phase='meeting';s.meetingEnd=25;s.round=1;
 const sheet=document.querySelector('section'),calls=[];let unlocked=0;
 mountJury(sheet,g,async c=>{calls.push(structuredClone(c));return {text:'Alguém passou pelo reator?',claim:{speaker:c.who,kind:'ask',subject:1,room:2},vote:1};},()=>unlocked++);
 await new Promise(r=>setTimeout(r,0));assert.equal(calls.length,2);
 sheet.querySelector('input').value='Verde, você viu o Rosa no reator?';sheet.querySelector('form').dispatchEvent(new dom.window.Event('submit',{cancelable:true}));
 await new Promise(r=>setTimeout(r,0));assert.equal(calls.at(-1).who,5);const defense=calls.at(-1).history.at(-1);assert.equal(defense.other,3);assert.equal(defense.room,2);
 for(const [phrase,kind] of [['Não sou eu gente','defend'],['Gente, calma aí','comment']]){
  const input=sheet.querySelector('input');input.value=phrase;sheet.querySelector('form button').click();
  await new Promise(r=>setTimeout(r,0));assert.equal(input.value,'');assert.ok(sheet.querySelector('[role="log"]').textContent.includes(phrase));
  const heard=calls.at(-1).history.at(-1);assert.equal(heard.kind,kind);
  if(kind==='defend')assert.equal(heard.subject,1);
  assert.doesNotThrow(()=>validate(calls.at(-1)));
 }
 sheet.querySelector('.dc-jury>button').click();await new Promise(r=>setTimeout(r,0));
 assert.equal(unlocked,1);assert.equal(calls.filter(c=>c.stage==='vote').length,5);assert.ok(calls.slice(-5).every(c=>c.history.some(h=>h.speaker===1)));
 assert.ok(s.players.every(p=>p.vote===null));assert.equal(g.view().juryBallots,undefined);
 action(s,1,'vote',{target:0},3);resolveVote(s,3);assert.equal(s.lastVote.counts[1],5);
});
test('only game vocabulary reaches the model; request is bounded and a vote is valid',async()=>{
 const g=new SoloGame('crew');const c=perspective(g.state,2,[readStatement('Eu estava no reator, meu email é exemplo@example.com.')],'speak');
 const input=validate({...c,extra:'unused'});assert.ok(!JSON.stringify(input).includes('example'));
 const call=async(_,opts)=>{const body=JSON.parse(opts.body);assert.equal(body.model,'gpt-5-nano');assert.equal(body.store,false);return Response.json({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify({text:'Estou em dúvida.',kind:'unsure',subject:'ninguém',room:'sem local',vote:'Dourado'})}]}]});};
 assert.equal((await respond(c,'test',{fetcher:call,now:Date.UTC(2026,10,19)})).vote,0);
});
test('shared quota and online fairness migration',async()=>{
 const {db}=await descubraDatabase();try{
 await db.exec(await readFile(new URL('../supabase/migrations/20261120002000_descubra_jury.sql',import.meta.url),'utf8'));
 const [definition]=(await db.query("select pg_get_functiondef('private.descubra_tick_legacy(jsonb,numeric)'::regprocedure) as def")).rows;
 assert.ok(!definition.def.includes("choice:=(s->>'traitor')"));
 await db.query("select set_config('test.uid',$1,false)",[userId(1)]);
 for(let i=0;i<21;i++)assert.equal((await db.query('select public.descubra_jury_reserve() as ok')).rows[0].ok,i<20);
 }finally{await db.close();}
});
