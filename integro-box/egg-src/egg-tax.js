export const TAX_PERIOD=300;
export const TAX_BANDS=[{limit:1000000,rate:0},{limit:5000000,rate:20},{limit:10000000,rate:35},{limit:1000000000,rate:50}];
const safe=(n,max=Number.MAX_SAFE_INTEGER)=>Number.isFinite(n)?Math.max(0,Math.min(max,n)):0;
const empty=()=>({'0':0,'20':0,'35':0,'50':0});
export const taxRate=balance=>balance>10000000?50:balance>5000000?35:balance>1000000?20:0;
export function cleanTax(raw,income=0){
 if(raw?.version!==1)return{version:1,basis:income,earned:0,assessed:0,settled:0,paid:0,period:0,seconds:0,buckets:empty(),history:[],notifiedRate:null};
 const t={version:1,basis:safe(raw.basis),earned:safe(raw.earned),assessed:safe(raw.assessed),settled:safe(raw.settled),paid:safe(raw.paid),period:Math.floor(safe(raw.period)),seconds:safe(raw.seconds,TAX_PERIOD),buckets:empty(),history:[],notifiedRate:[0,20,35,50].includes(raw.notifiedRate)?raw.notifiedRate:null};
 for(const key of Object.keys(t.buckets))t.buckets[key]=Math.floor(safe(raw.buckets?.[key]));
 t.settled=Math.min(t.assessed,t.settled);t.paid=Math.min(Math.floor(t.settled/100),Math.floor(t.paid));
 t.history=(Array.isArray(raw.history)?raw.history:[]).filter(r=>Number.isInteger(r.period)&&Number.isFinite(r.amount)).slice(-20).map(r=>({period:r.period,amount:safe(r.amount),gross:safe(r.gross),buckets:Object.fromEntries(Object.keys(t.buckets).map(k=>[k,safe(r.buckets?.[k])]))}));return t;
}
export const taxDue=t=>Math.max(0,Math.floor(t.assessed/100)-t.paid);
export const spendableCoins=s=>Math.max(0,s.coins-taxDue(s.tax));
// Split the credit at balance thresholds; never tax the existing balance.
export function accrueIncomeTax(save,amount,before){const t=save.tax;let left=amount,balance=before;
 for(const band of TAX_BANDS){const part=Math.min(left,Math.max(0,band.limit-balance));if(part>0){t.buckets[band.rate]+=part;t.earned+=part;t.assessed+=part*band.rate;balance+=part;left-=part;}if(!left)break;}
}
export function advanceIncomeTax(save,dt){const t=save.tax;t.seconds+=Math.max(0,dt);if(t.seconds<TAX_PERIOD-1e-7)return null;t.seconds=Math.max(0,t.seconds-TAX_PERIOD);t.period++;
 const amount=taxDue(t);save.coins-=amount;t.paid+=amount;t.settled=t.assessed;const receipt={period:t.period,amount,gross:Object.values(t.buckets).reduce((a,b)=>a+b,0),buckets:{...t.buckets}};
 if(receipt.gross||amount){t.history.push(receipt);t.history=t.history.slice(-20);}t.buckets=empty();return receipt;
}
