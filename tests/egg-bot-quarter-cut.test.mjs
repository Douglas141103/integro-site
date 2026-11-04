import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {prepareQuarterCut,REFERENCE} from '../scripts/prepare-bot-quarter-cut.mjs';
import {packCheckpoint,unpackCheckpoint} from '../supabase/functions/egg-bots/checkpoint.mjs';
import {decodeBot} from '../integro-box/egg-src/egg-bot.js';
test('quarter cut preserves inventory and rejects a stale balance or duplicate robot',()=>{
 const root={version:2,egg:{game:{save:{coins:101,training:8,creatures:[{world:3}],tax:{paid:7}}}},games:{egg:{seconds:23}}};
 const row={bot_id:1,coins_before:101,coins_after:25,checkpoint_before:packCheckpoint(root)};
 const result=prepareQuarterCut([row]),after=unpackCheckpoint(result[0].checkpoint_after,decodeBot);
 assert.equal(after.egg.game.save.coins,25);assert.equal(after.egg.game.rewardRemainder,0);delete after.egg.game.rewardRemainder;after.egg.game.save.coins=101;assert.deepEqual(after,root);
 assert.throws(()=>prepareQuarterCut([{...row,coins_before:100}]),/mismatch/);assert.throws(()=>prepareQuarterCut([row,row]),/duplicate/);
});
test('atomic robot cut records all 140 wallets once, rejects stale snapshots and never changes human wallets',async()=>{
 const db=new PGlite();try{
 await db.exec(`create schema private;create role anon;create role authenticated;create role service_role;create table private.egg_bot_control(id boolean primary key,enabled boolean,lease uuid);insert into private.egg_bot_control values(true,false,null);create table private.egg_bots(id integer primary key,data jsonb);create table private.egg_bot_checkpoints(bot_id integer,game text,checkpoint text,primary key(bot_id,game));create table private.human_wallets(id integer,coins bigint);insert into private.human_wallets values(1,99999);insert into private.egg_bots select i,jsonb_build_object('coins',i*101) from generate_series(1,140)i;insert into private.egg_bot_checkpoints select i,'egg','before-'||i from generate_series(1,140)i;`);
 await db.exec(await readFile(new URL('../supabase/migrations/20261104142049_egg_bot_balance_adjustments.sql',import.meta.url),'utf8'));
 await db.query(`insert into private.egg_bot_balance_adjustments(reference,bot_id,coins_before,coins_after,data_before,checkpoint_before,checkpoint_after) select $1,b.id,(b.data->>'coins')::bigint,floor((b.data->>'coins')::numeric/4),b.data,c.checkpoint,'after-'||b.id from private.egg_bots b join private.egg_bot_checkpoints c on c.bot_id=b.id`,[REFERENCE]);
 const sql=await readFile(new URL('../scripts/apply-bot-quarter-cut.sql',import.meta.url),'utf8');
 await db.exec("update private.egg_bots set data=jsonb_set(data,'{coins}','9') where id=140");await assert.rejects(db.exec(sql),/robot_changed/);await db.exec('rollback');assert.equal((await db.query("select count(*)::int n from private.egg_bot_checkpoints where checkpoint like 'after-%'")).rows[0].n,0);
 await db.exec("update private.egg_bots set data=jsonb_set(data,'{coins}','14140') where id=140");await db.exec(sql);await db.exec(sql);
 assert.equal((await db.query("select count(*)::int n from private.egg_bots where (data->>'coins')::bigint=floor(id*101.0/4)")).rows[0].n,140);assert.equal((await db.query('select count(*)::int n from private.egg_bot_balance_adjustments where applied_at is not null')).rows[0].n,140);assert.equal((await db.query('select coins from private.human_wallets')).rows[0].coins,99999);
 await db.exec('set role authenticated');await assert.rejects(db.query('select * from private.egg_bot_balance_adjustments'),/permission denied/);
 }finally{await db.close();}
});
