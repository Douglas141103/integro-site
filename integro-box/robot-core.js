/* Rota do Robô: deterministic, browser-independent puzzle rules. */
(function(root){
 'use strict';
 const SIZE=5,MAX_COMMANDS=32;
 const DIRECTIONS={U:{dx:0,dy:-1,arrow:'↑',name:'Cima'},R:{dx:1,dy:0,arrow:'→',name:'Direita'},D:{dx:0,dy:1,arrow:'↓',name:'Baixo'},L:{dx:-1,dy:0,arrow:'←',name:'Esquerda'}};
 const LEVELS=[
  {name:'Primeiros passos',theme:'garden',start:20,goal:4,walls:[6,7,8,11,16]},
  {name:'Uma pequena volta',theme:'garden',start:20,goal:4,walls:[2,7,17,22,10,8,18]},
  {name:'Entre as pedras',theme:'garden',start:20,goal:4,walls:[21,16,5,6,7,8,18,23,2]},
  {name:'O jardim secreto',theme:'garden',start:24,goal:4,walls:[7,8,9,13,14,21,22]},
  {name:'Sinal no deserto',theme:'desert',start:20,goal:4,walls:[7,8,9,14,17,18,19,22,24]},
  {name:'Curvas de areia',theme:'desert',start:24,goal:0,walls:[5,8,12,16,17,19,20,22]},
  {name:'Passagem estreita',theme:'desert',start:20,goal:4,walls:[5,6,8,9,11,15,17,18]},
  {name:'Volta ao cânion',theme:'desert',start:0,goal:24,walls:[4,6,7,9,10,15,17,18,19]},
  {name:'Órbita de cristal',theme:'space',start:24,goal:0,walls:[7,8,12,15,16,17,19,20,22]},
  {name:'Labirinto lunar',theme:'space',start:20,goal:4,walls:[6,7,8,13,14,15,16,23]},
  {name:'O último desvio',theme:'space',start:0,goal:24,walls:[1,6,8,11,13,18,21,22]},
  {name:'Estrela encontrada',theme:'space',start:20,goal:4,walls:[6,7,8,9,15,16,17,18]}
 ].map((level,id)=>Object.freeze({...level,id,walls:Object.freeze(level.walls)}));
 const THEMES={garden:{name:'Jardim das ideias',label:'MUNDO 01',obstacle:'pedra'},desert:{name:'Cânion dourado',label:'MUNDO 02',obstacle:'rocha'},space:{name:'Estação lunar',label:'MUNDO 03',obstacle:'cristal'}};
 function step(map,position,direction){
  const d=DIRECTIONS[direction];if(!d)return {ok:false,position,reason:'invalid'};
  const x=position%SIZE+d.dx,y=Math.floor(position/SIZE)+d.dy;
  if(x<0||x>=SIZE||y<0||y>=SIZE)return {ok:false,position,reason:'edge'};
  const next=y*SIZE+x;
  return map.walls.includes(next)?{ok:false,position,reason:'wall'}:{ok:true,position:next};
 }
 function shortestPath(map,from=map.start){
  const queue=[{position:from,path:[]}],seen=new Set([from]);
  for(let i=0;i<queue.length;i++){const item=queue[i];if(item.position===map.goal)return item.path;
   for(const dir of Object.keys(DIRECTIONS)){const next=step(map,item.position,dir);if(next.ok&&!seen.has(next.position)){seen.add(next.position);queue.push({position:next.position,path:[...item.path,dir]});}}
  }return null;
 }
 function simulate(map,commands){
  let position=map.start;const path=[position];
  for(let i=0;i<commands.length;i++){const next=step(map,position,commands[i]);if(!next.ok)return {status:'blocked',position,path,index:i,reason:next.reason};position=next.position;path.push(position);if(position===map.goal)return {status:'won',position,path,index:i};}
  return {status:'incomplete',position,path,index:commands.length-1};
 }
 const starsFor=(map,steps)=>steps<=shortestPath(map).length?3:steps<=shortestPath(map).length+2?2:1;
 function sanitizeProgress(raw){
  const out={selected:0,best:{},sound:false,speed:'normal'};
  if(!raw||typeof raw!=='object')return out;
  if(Number.isInteger(raw.selected)&&raw.selected>=0&&raw.selected<LEVELS.length)out.selected=raw.selected;
  out.sound=raw.sound===true;out.speed=raw.speed==='slow'?'slow':'normal';
  for(const map of LEVELS){const steps=raw.best?.[map.id]?.steps;if(Number.isInteger(steps)&&steps>=shortestPath(map).length&&steps<=MAX_COMMANDS)out.best[map.id]={steps,stars:starsFor(map,steps)};}
  return out;
 }
 root.BoxRobotCore=Object.freeze({SIZE,MAX_COMMANDS,DIRECTIONS,LEVELS,THEMES,step,simulate,shortestPath,starsFor,sanitizeProgress});
})(globalThis);
