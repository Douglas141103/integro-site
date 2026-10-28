// The first seasonal event. Index 20 is the twenty-first connected track.
export const WINTER={id:'winter_2026',name:'Inverno 2026',world:20,skatePrice:7,giftMines:3,giftSkates:2,warning:1.5,freeze:10,interval:17};
export const WINTER_VALUES={common:800000,rare:900000,epic:1000000,legendary:2000000,secret:3000000};
export const WINTER_WORLD={name:'Santuário da Fênix Gelada',short:'Inverno',creature:'Fênix Gelada',value:75000,color:0x76def5,ground:0xd6eafa,path:0xb2d6ec,sky:0x8ebbd8,kind:'icePhoenix'};
export const nestSize=world=>world===WINTER.world?5:3;
export const nestPosition=(world,slot)=>world===WINTER.world?{x:(slot%3-1)*.8,z:slot<3?-.35:.65}:{x:(slot-1)*.85,z:slot===1?.42:0};
export const winterRarity=slot=>Object.keys(WINTER_VALUES)[slot];
export const iceSpeedFactor=skates=>skates?.75:.30;

// One shared deadline: 28 October, 23:32 in Manaus / Boa Vista (UTC-4).
export const WINTER_END_AT='2026-10-29T03:32:00.000Z';
export const WINTER_END_MS=Date.parse(WINTER_END_AT);
let serverEpoch=null,serverMonotonic=0;
export function syncWinterClock(value){const n=Date.parse(value);if(Number.isFinite(n)){serverEpoch=n;serverMonotonic=performance.now();}}
export function winterNow(){return serverEpoch===null?Date.now():serverEpoch+performance.now()-serverMonotonic;}
export const winterActive=(now=winterNow())=>now<WINTER_END_MS;
export function winterCountdown(now=winterNow()){const total=Math.max(0,Math.min(21600,Math.ceil((WINTER_END_MS-now)/1000)));return [Math.floor(total/3600),Math.floor(total%3600/60),total%60].map(n=>String(n).padStart(2,'0')).join(':');}
