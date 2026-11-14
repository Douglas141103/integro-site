import test from 'node:test';import assert from 'node:assert/strict';import {JSDOM} from 'jsdom';
import {EggAdventure,CORRAL,FLOOR_HEIGHT,CORRAL_ELEVATOR} from '../integro-box/egg-src/egg-rules.js';
import {createPaceControl,PACE_STORAGE_KEY} from '../integro-box/egg-src/egg-pace-ui.js';
const tick=(g,seconds,input={})=>{for(let t=0;t<seconds-1e-9;t+=.02)g.update(.02,input);};
const make=(training=80)=>new EggAdventure({version:4,training,coins:1000000});
test('pace unlocks exactly at level 80, divides movement and sprint speed, and restores the earned speed',()=>{
 const low=make(79);assert(!low.setPace(2));low.paceDivisor=10;assert.equal(low.movementDivisor(),1);const g=make();for(const invalid of [0,3,-2,Infinity,'2'])assert(!g.setPace(invalid));
 for(const training of [80,600])for(const vehicle of [null,'skateBreeze','jetImperial'])for(const sprint of [false,true]){
  const moves=[];for(const divisor of [1,2,5,10]){const g=make(training);if(vehicle){g.save.vehicles=[vehicle];g.save.vehicle=vehicle;}Object.assign(g.player,{x:0,z:24});const speed=g.speed();assert(g.setPace(divisor));g.update(.02,{z:-1,sprint});moves.push(24-g.player.z);assert.equal(g.speed(),speed);assert.equal(g.save.training,training);assert(g.setPace(1));assert.equal(g.movementDivisor(),1);}
  for(let i=1;i<4;i++)assert(Math.abs(moves[i]*[1,2,5,10][i]-moves[0])<1e-8);
 }
});
test('reduction preserves jump physics, clocks, training, eggs, income, and online race and flight speeds',()=>{
 const a=make(),b=make();b.setPace(10);for(const g of [a,b]){g.save.eggs=[{id:1,world:0,rarity:'common',mutation:'normal',remaining:100}];g.save.creatures=[{uid:'pet',world:0,rarity:'common',mutation:'normal'}];assert(g.jump());}
 tick(a,.2);tick(b,.2);assert.equal(a.player.y,b.player.y);assert.equal(a.player.vy,b.player.vy);assert.equal(a.energy,b.energy);assert.equal(a.save.eggs[0].remaining,b.save.eggs[0].remaining);assert.equal(a.save.coins,b.save.coins);assert.deepEqual(a.save.tax,b.save.tax);
 for(const g of [a,b]){Object.assign(g.player,{x:5,z:14,y:0,vy:0});assert(g.startTraining());tick(g,1);}
 assert.equal(a.save.trainXP,b.save.trainXP);assert.equal(a.save.training,b.save.training);assert.equal(b.movementDivisor(),1);
 b.stopTraining();b.raceMode=true;Object.assign(b.player,{x:0,z:24});const before=b.player.z;b.update(.02,{z:-1});assert(Math.abs(before-b.player.z-.44)<1e-8);assert(!b.setPace(5));b.raceMode=false;assert.equal(b.movementDivisor(),10);
 assert(b.startJetFlight('pace-flight'));assert.equal(b.movementDivisor(),1);assert(!b.setPace(2));
});
test('pace reduction leaves elevator travel and stable platforms usable',()=>{
 const g=new EggAdventure({version:4,training:80,secondFloor:true});assert(g.setPace(10));Object.assign(g.player,{x:CORRAL.x+CORRAL_ELEVATOR.x,z:CORRAL.z});
 assert(g.rideElevator(2));tick(g,1);assert.equal(g.player.y,FLOOR_HEIGHT);assert.equal(g.movementDivisor(),10);tick(g,1);assert.equal(g.player.y,FLOOR_HEIGHT);assert(g.jump());tick(g,2);assert.equal(g.player.y,FLOOR_HEIGHT);
});
test('HUD selection persists by profile, unlocks live, survives runtime replacement, and blocks paused modes without losing joystick input',()=>{
 const dom=new JSDOM('<div id="pad"><div class="egg-run-metrics"></div><div id="joy"></div></div><canvas></canvas>',{pretendToBeVisual:true}),d=dom.window.document,values=new Map();const storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};let g=make(79),blocked=false,changes=0,joy=0;d.getElementById('joy').addEventListener('pointerdown',()=>joy++);
 const makeControl=()=>createPaceControl({host:d.getElementById('pad'),getGame:()=>g,storage,canvas:d.querySelector('canvas'),blocked:()=>blocked,onChange:()=>changes++});let ui=makeControl();assert(ui.root.hidden);g.save.training=80;ui.update();assert(!ui.root.hidden);
 const button=n=>ui.root.querySelector('[data-pace="'+n+'"]');button(5).click();assert.equal(g.movementDivisor(),5);assert.equal(values.get(PACE_STORAGE_KEY),'5');assert.equal(button(5).getAttribute('aria-pressed'),'true');assert.equal(changes,1);
 d.getElementById('joy').dispatchEvent(new dom.window.Event('pointerdown'));button(2).click();assert.equal(joy,1);g=make(600);ui.update();assert.equal(g.movementDivisor(),2);
 blocked=true;ui.update();button(10).click();assert.equal(g.movementDivisor(),2);blocked=false;g.raceMode=true;ui.update();assert(button(2).disabled);assert.equal(g.movementDivisor(),1);g.raceMode=false;ui.update();assert.equal(g.movementDivisor(),2);
 ui.root.remove();ui=makeControl();assert.equal(g.movementDivisor(),2);button(1).click();assert.equal(g.movementDivisor(),1);assert.equal(values.get(PACE_STORAGE_KEY),'1');assert.equal(g.save.paceDivisor,undefined);dom.window.close();
});

test('pace options collapse after selection, outside input, Escape, and training while retaining selection',()=>{
 const dom=new JSDOM('<div id="pad"></div><button id="outside"></button>'),d=dom.window.document,g=make();
 const ui=createPaceControl({host:d.getElementById('pad'),getGame:()=>g,storage:{getItem:()=>null,setItem(){}}}),toggle=ui.root.querySelector('.egg-pace-toggle'),options=ui.root.querySelector('.egg-pace-buttons');
 assert(!ui.root.hidden);assert(options.hidden);toggle.click();assert(!options.hidden);ui.root.querySelector('[data-pace="10"]').click();assert(options.hidden);assert.equal(g.movementDivisor(),10);assert.equal(toggle.textContent,'Ritmo ÷10');
 toggle.click();d.getElementById('outside').dispatchEvent(new dom.window.Event('pointerdown',{bubbles:true}));assert(options.hidden);toggle.click();toggle.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert(options.hidden);
 g.mode='train';ui.update();assert(ui.root.hidden);g.mode='run';ui.update();assert(!ui.root.hidden);assert.equal(g.movementDivisor(),10);dom.window.close();
});
