// Input is an administrator-exported JSON array from the private audit table.
// This prepares staging SQL only; publication requires the separate atomic cut.
import {readFileSync,writeFileSync} from 'node:fs';
import {unpackCheckpoint,packCheckpoint} from '../supabase/functions/egg-bots/checkpoint.mjs';
import {decodeBot} from '../integro-box/egg-src/egg-bot.js';
export const REFERENCE='bot-integros-quarter-20261104';
export function prepareQuarterCut(rows){
 const ids=new Set();return rows.map(row=>{
  if(!Number.isInteger(row.bot_id)||row.bot_id<1||row.bot_id>140||ids.has(row.bot_id))throw Error('invalid_or_duplicate_robot');ids.add(row.bot_id);
  const root=unpackCheckpoint(row.checkpoint_before,decodeBot),save=root.egg?.game?.save;
  if(root.version!==2||!save||save.coins!==Number(row.coins_before))throw Error('checkpoint_balance_mismatch:'+row.bot_id);
  if(Number(row.coins_after)!==Math.floor(save.coins/4))throw Error('invalid_quarter_balance');
  save.coins=Number(row.coins_after);root.egg.game.rewardRemainder=0;
  return {bot_id:row.bot_id,checkpoint_after:packCheckpoint(root)};
 });
}
if(process.argv[1]===new URL(import.meta.url).pathname){
 const rows=JSON.parse(readFileSync(process.argv[2],'utf8')),updates=prepareQuarterCut(rows);
 const sql=`update private.egg_bot_balance_adjustments a set checkpoint_after=r.checkpoint_after from jsonb_to_recordset('${JSON.stringify(updates).replaceAll("'","''")}'::jsonb) r(bot_id integer,checkpoint_after text) where a.reference='${REFERENCE}' and a.bot_id=r.bot_id and a.applied_at is null;`;
 writeFileSync(process.argv[3],sql);console.log(JSON.stringify({prepared:updates.length,before:rows.reduce((s,r)=>s+Number(r.coins_before),0),after:rows.reduce((s,r)=>s+Number(r.coins_after),0)}));
}
