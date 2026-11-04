import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
import {BotEggAdventure} from '../integro-box/egg-src/egg-bot-economy.js';
import {createBot,prepareBotSession,encodeBot,decodeBot} from '../integro-box/egg-src/egg-bot.js';
const pet=(id=1)=>({id,uid:'pet-'+id,world:0,rarity:'common',mutation:'normal',incomeProgress:0});
test('robot sale, mission and daily expedition pay a quarter; human rewards stay full',()=>{
 for(const Class of[EggAdventure,BotEggAdventure]){const g=new Class(),factor=Class===EggAdventure?1:.25;g.save.creatures=[pet()];const price=g.saleValue(0);assert(g.sell(1));assert.equal(g.save.coins,price*factor);g.save.delivered=1;const before=g.save.coins;assert(g.claimMission('first'));assert.equal(g.save.coins-before,100*factor);assert(!g.claimMission('first'));g.refreshDay();g.save.daily.delivered=3;const prior=g.save.coins;assert(g.claimDaily());assert.equal(g.save.coins-prior,200*factor);assert(!g.claimDaily());}
});
test('curral gross fractions are consumed once and net income and taxes use the actual payout',()=>{
 const human=new EggAdventure(),bot=new BotEggAdventure();for(const g of[human,bot]){g.save.coins=2000000;g.save.incomePending=400;g.collectIncome();assert.equal(g.save.incomePending,0);g.collectIncome();}
 assert.equal(human.save.coins,2000400);assert.equal(bot.save.coins,2000100);assert.equal(bot.save.incomeEarned,100);assert.equal(human.save.incomeEarned,400);
 assert.equal(bot.save.tax.assessed,human.save.tax.assessed/4);
 bot.save.creatures=[{...pet(),incomeProgress:8}];bot.incomeClock=3;const before=bot.save.coins;bot.updateIncome(0);assert.equal(bot.save.coins-before,2);assert.equal(bot.save.creatures[0].incomeProgress,0);
});
test('fractional rewards survive checkpoint and session changes and failed sales do not consume them',()=>{
 let bot=createBot(null,17);for(let i=0;i<3;i++)assert.equal(bot.game.creditIncome(1),1);assert.equal(bot.game.save.coins,0);assert.equal(bot.game.rewardRemainder,3);assert(!bot.game.sell(999));assert.equal(bot.game.rewardRemainder,3);
 bot=createBot(decodeBot(encodeBot(bot)),17);assert.equal(bot.game.rewardRemainder,3);bot=prepareBotSession(decodeBot(encodeBot(bot)),17,{online:true,number:5},()=>Date.now());assert.equal(bot.game.rewardRemainder,3);bot.game.creditIncome(1);assert.equal(bot.game.save.coins,1);assert.equal(bot.game.rewardRemainder,0);
});
test('robot purchases still cost the full human price and selling pending income does not discount twice',()=>{
 const g=new BotEggAdventure();g.save.coins=10000;const price=g.itemPrice('boots');assert(g.buy('boots'));assert.equal(g.save.coins,10000-price);g.save.creatures=[{...pet(),incomeProgress:400}];const before=g.save.coins,sale=g.saleValue(0);assert(g.sell(1));assert.equal(g.save.coins-before,100+sale/4);assert.equal(g.save.incomeEarned,100);assert.equal(g.save.incomePending,0);
});

test('old robot checkpoints gain missing track runtimes without resetting inventory or applying another cut',()=>{
 const old=createBot(null,11);old.game.save.coins=12345;old.game.save.creatures=[pet()];old.game.guardians=old.game.guardians.slice(0,20);old.game.nestEggs=old.game.nestEggs.slice(0,20);old.game.save.seen=old.game.save.seen.slice(0,20);old.game.save.visited=old.game.save.visited.slice(0,20);
 const restored=createBot(decodeBot(encodeBot(old)),11);assert.equal(restored.game.guardians.length,new EggAdventure().guardians.length);assert.equal(restored.game.save.coins,12345);assert.deepEqual(restored.game.save.creatures,old.game.save.creatures);restored.game.update(.05,{});assert(restored.game.save.coins>=12345);
});
