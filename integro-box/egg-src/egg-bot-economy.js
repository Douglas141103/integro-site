import {EggAdventure} from './egg-rules.js';

export const BOT_EARNINGS_DIVISOR=4;
// Robot-only economy. The playable EggAdventure still pays the full amount.
// Preserve quarter-coins across checkpoint writes and logins, so four rewards
// of one Integro pay one Integro instead of disappearing through rounding.
export class BotEggAdventure extends EggAdventure {
 rewardCoins(gross){
  const units=Math.max(0,Math.floor(Number(gross)||0))+(this.rewardRemainder||0);
  this.rewardRemainder=units%BOT_EARNINGS_DIVISOR;
  return Math.floor(units/BOT_EARNINGS_DIVISOR);
 }
 creditIncome(amount,pet){
  const gross=Math.max(0,Math.floor(amount));if(!gross||this.save.coins>=1e9)return 0;
  super.creditIncome(this.rewardCoins(gross),pet);
  // The shared pending-income pipeline consumes gross units; taxes and income
  // history are recorded by the base method against the reduced payment only.
  return gross;
 }
 sell(id){
  // Only the executed sale converts its proceeds. Price previews and bot
  // inventory comparisons must not consume the fractional reward remainder.
  this.saleValue=(...args)=>this.rewardCoins(super.saleValue(...args));
  try{return super.sell(id);}finally{delete this.saleValue;}
 }
 claimMission(id){const before=this.save.coins,ok=super.claimMission(id);if(ok)this.save.coins=before+this.rewardCoins(this.save.coins-before);return ok;}
 claimDaily(){const before=this.save.coins,ok=super.claimDaily();if(ok)this.save.coins=before+this.rewardCoins(this.save.coins-before);return ok;}
}
