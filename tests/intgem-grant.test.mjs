import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';
test('free grant adds exactly once, is audited separately and cannot be called by players',async()=>{
 const {db,rpc,run}=await intgemDatabase();try{
 await db.exec(await readFile(new URL('../supabase/migrations/20261021030016_intgem_complimentary_credit.sql',import.meta.url),'utf8'));
 await rpc(1,'wallet');await db.query('update private.intgem_wallets set balance=4 where user_id=$1',[uid(1)]);
 const grant=amount=>db.query("select private.intgem_admin_grant($1,$2,'test-free-grant') r",[uid(1),amount]);
 assert.equal((await grant(50)).rows[0].r.balance,54);assert.equal((await grant(50)).rows[0].r.credited,false);await assert.rejects(grant(51),/grant_reference_conflict/);
 const wallet=await rpc(1,'wallet');assert.equal(wallet.balance,54);assert.equal(wallet.history.filter(h=>h.kind==='grant').length,1);
 await assert.rejects(()=>run(1,"select private.intgem_admin_grant($1,50,'forged-grant') r",[uid(1)]),/permission denied/);
 }finally{await db.close();}
});
