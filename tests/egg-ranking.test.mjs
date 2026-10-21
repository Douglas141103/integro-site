import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {JSDOM} from 'jsdom';
import {mountEggRanking} from '../integro-box/egg-src/egg-ranking.js';
const uid=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
test('server ranks coins first, gems second, shares total ties, filters blocked users and exposes only standings',async()=>{
 const db=new PGlite();
 try{
  await db.exec(`create schema auth;create schema private;create role anon;create role authenticated;
   create function auth.uid() returns uuid language sql as $$select nullif(current_setting('test.uid',true),'')::uuid$$;
   create table private.box_accounts(user_id uuid primary key,display_name text,blocked boolean default false);
   create table private.box_egg_saves(user_id uuid primary key,data jsonb,updated_at timestamptz default now());
   create table private.intgem_wallets(user_id uuid primary key,balance integer);
   create table public.students(id uuid primary key,full_name text,active boolean default true);
   create table public.student_guardians(student_id uuid,guardian_profile_id uuid);
   create function private.box_can_play(u uuid) returns boolean language sql stable as $$select u is not null and exists(select 1 from private.box_accounts where user_id=u and not blocked)$$;
   create function public.box_egg(p_action text,p_revision integer default -1,p_data jsonb default null,p_room uuid default null,p_slot integer default null,p_id uuid default null,p_offer text default null,p_want text default null,p_world integer default 0) returns jsonb language plpgsql security definer set search_path='' as $$begin
    if auth.uid() is null or not private.box_can_play(auth.uid()) then raise exception 'box_access_denied';end if;
    if p_action='capabilities' then return jsonb_build_object('worlds',20);end if;
    return jsonb_build_object('error','invalid_action');end$$;
   revoke all on function public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer) from public;
   grant execute on function public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer) to authenticated;
  `);
  for(const [n,coins,gems] of [[1,1000,0],[2,900,20],[3,900,25],[4,900,25],[5,10000,999]]){
   await db.query('insert into private.box_accounts values($1,$2,$3)',[uid(n),'Jogador',n===5]);
   await db.query('insert into private.box_egg_saves(user_id,data) values($1,$2)',[uid(n),{coins}]);
   await db.query('insert into private.intgem_wallets values($1,$2)',[uid(n),gems]);
   await db.query('insert into public.students(id,full_name) values($1,$2)',[uid(n),['','João Victor da Silva','Pedro Vinicius da Silva','Alice Teste Sobrenome','Bruno Teste Sobrenome','Bloqueado Teste'][n]]);
   await db.query('insert into public.student_guardians values($1,$1)',[uid(n)]);
  }
  await db.exec(await readFile(new URL('../supabase/migrations/20261020210536_egg_balance_ranking.sql',import.meta.url),'utf8'));
  const call=(n,action='ranking',role='authenticated')=>db.transaction(async tx=>{
   await tx.exec(`set local role ${role}`);await tx.query("select set_config('test.uid',$1,true)",[n?uid(n):'']);
   return (await tx.query('select public.box_egg($1) as r',[action])).rows[0].r;
  });
  await assert.rejects(call(0));await assert.rejects(call(5));await assert.rejects(call(1,'ranking','anon'));
  const data=await call(2);
  assert.deepEqual(data.rows.map(r=>[r.name,r.position,r.integros,r.intgem]),[
   ['João Victor',1,1000,0],['Alice Teste',2,900,25],['Bruno Teste',2,900,25],['Pedro Vinicius',4,900,20]]);
  assert.equal(data.total,4);assert.equal(data.mine.position,4);assert.equal(data.rows[3].mine,true);
  assert.deepEqual(Object.keys(data.rows[0]).sort(),['integros','intgem','mine','name','position']);
  assert.equal((await call(1,'capabilities')).worlds,20);
  await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');return tx.query('select private.box_egg_ranking()');}));
 }finally{await db.close();}
});
test('ranking handles loading, safe player names, own position, refresh and network errors',async()=>{
 const dom=new JSDOM('<div id="ranking"></div>'),host=dom.window.document.getElementById('ranking');
 let calls=0,finish;
 const entry={name:'<img onerror=alert(1)>',position:1,integros:1000,intgem:6,mine:true};
 mountEggRanking(host,async()=>{calls++;if(calls===2)throw Error('Sem conexão.');await new Promise(resolve=>{finish=resolve;});return{rows:[entry],mine:entry,total:1,synced:true,updated_at:new Date().toISOString()};});
 assert.equal(host.querySelector('button').disabled,true);finish();await new Promise(setImmediate);
 assert.equal(host.querySelectorAll('tbody tr').length,1);assert.equal(host.querySelector('img'),null);
 assert.match(host.querySelector('.egg-ranking-mine').textContent,/Sua posição: 1º/);
 assert.equal(host.querySelector('tbody tr').className,'is-me');
 host.querySelector('button').click();await new Promise(setImmediate);
 assert.match(host.querySelector('[role=status]').textContent,/Sem conexão/);assert.equal(host.querySelector('button').disabled,false);
 dom.window.close();
});

test('HUD shares one request with panel, refreshes position and suspends hidden/offline polling',async()=>{
 const {createEggRankingHUD}=await import('../integro-box/egg-src/egg-ranking.js');
 const dom=new JSDOM('<button><span data-rank-position></span></button>'),button=dom.window.document.querySelector('button');
 let clock=0,active=true,ready=true,calls=0,opened=0,resolve;
 const hud=createEggRankingHUD({button,now:()=>clock,active:()=>active,ready:()=>ready,open:()=>opened++,load:()=>{calls++;return new Promise(r=>resolve=r);}});
 hud.tick();hud.tick();const panel=hud.load();await Promise.resolve();assert.equal(calls,1);resolve({mine:{position:5}});await panel;
 assert.equal(button.textContent,'5º');assert.match(button.getAttribute('aria-label'),/5º/);button.click();assert.equal(opened,1);
 clock=59999;hud.tick();assert.equal(calls,1);clock=60000;active=false;hud.tick();active=true;ready=false;hud.tick();assert.equal(calls,1);
 ready=true;hud.tick();await Promise.resolve();assert.equal(calls,2);resolve({mine:{position:1024}});await hud.load();assert.equal(button.textContent,'1.024º');
 const manual=hud.load();await Promise.resolve();resolve({mine:null});await manual;assert.equal(button.textContent,'—');dom.window.close();
});
test('HUD recovers from synchronous connection failure without keeping a false rank',async()=>{
 const {createEggRankingHUD}=await import('../integro-box/egg-src/egg-ranking.js');
 const dom=new JSDOM('<button><span data-rank-position></span></button>'),button=dom.window.document.querySelector('button');let fail=true;
 const hud=createEggRankingHUD({button,load:()=>{if(fail)throw Error('offline');return{mine:{position:3}};},active:()=>true,ready:()=>true,open:()=>{},now:()=>0});
 await assert.rejects(hud.load());assert.equal(button.textContent,'—');assert.equal(button.dataset.rankState,'error');
 fail=false;await hud.load();assert.equal(button.textContent,'3º');dom.window.close();
});
