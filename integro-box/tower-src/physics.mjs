import Matter from 'matter-js';
import {PIECES,dimensions} from './rules.mjs';
const {Engine,Bodies,Body,Composite,Vertices}=Matter;
export const UNIT=40;
export function makeSimulation(items,level){
 const engine=Engine.create({enableSleeping:false,positionIterations:10,velocityIterations:10});engine.gravity.y=-1;engine.gravity.scale=.001;
 const bases=level.floor.map(f=>Bodies.rectangle(f.x*UNIT,f.y*UNIT,f.w*UNIT,f.h*UNIT,{isStatic:true,friction:.85}));Composite.add(engine.world,bases);
 const bodies=items.map(p=>{const spec=PIECES[p.type],opts={friction:.8,frictionStatic:1,restitution:0,density:.002,slop:.015,frictionAir:.025};let b;
  if(p.type==='wedge'){const points=[{x:-40,y:-20},{x:40,y:-20},{x:40,y:20}];b=Bodies.fromVertices(p.x*UNIT,p.y*UNIT,points,opts);}
  else b=Bodies.rectangle(p.x*UNIT,p.y*UNIT,spec.w*UNIT,spec.h*UNIT,opts);
  Body.setAngle(b,(p.r||0)*Math.PI/2);b.plugin.towerOffset=p.type==='wedge'?{x:UNIT/3,y:-UNIT/6}:{x:0,y:0};const o=b.plugin.towerOffset;Body.translate(b,{x:o.x*Math.cos(b.angle)-o.y*Math.sin(b.angle),y:o.x*Math.sin(b.angle)+o.y*Math.cos(b.angle)});Composite.add(engine.world,b);return b;
 });
 const center=b=>{const o=b.plugin.towerOffset;return {x:(b.position.x-o.x*Math.cos(b.angle)+o.y*Math.sin(b.angle))/UNIT,y:(b.position.y-o.x*Math.sin(b.angle)-o.y*Math.cos(b.angle))/UNIT};};
 let steps=0;return {engine,bodies,step(){if(level.wind&&steps>60)for(const b of bodies)Body.applyForce(b,b.position,{x:b.mass*level.wind*(.65+.35*Math.sin(steps*.035)),y:0});Engine.update(engine,1000/60);steps++;},get seconds(){return steps/60;},snapshot(){return bodies.map(b=>({...center(b),angle:b.angle}));},result(){
  if(!items.length)return {ok:false,message:'Encaixe algumas peças antes de testar.'};
  let moved=0;for(let i=0;i<bodies.length;i++){const b=bodies[i],p=items[i],angle=Math.atan2(Math.sin(b.angle-(p.r||0)*Math.PI/2),Math.cos(b.angle-(p.r||0)*Math.PI/2));if(Math.hypot(center(b).x-p.x,center(b).y-p.y)>.42||Math.abs(angle)>.18||b.speed>.35)moved++;}
  if(moved)return {ok:false,message:`${moved===1?'Uma peça perdeu o apoio':moved+' peças perderam o apoio'}. Reforce a base e tente de novo.`};
  const max=Math.max(...bodies.flatMap(b=>b.vertices.map(v=>v.y/UNIT)));
  if(level.height&&max<level.height-.18)return {ok:false,message:`Sua torre chegou a ${Math.max(0,max).toFixed(1)} m. A estrela está em ${level.height} m.`};
  for(const t of level.targets){const hit=bodies.findIndex((b,i)=>Vertices.contains(b.vertices,{x:t.x*UNIT,y:t.y*UNIT})&&(t.color===undefined||items[i].color===t.color));if(hit<0)return {ok:false,message:t.color===undefined?'Falta alcançar um dos faróis. Veja as marcas na grade.':'Uma marca ainda está sem a cor certa. Confira a sequência de baixo para cima.'};}
  return {ok:true,message:level.id?'Construção aprovada!':'Sua construção ficou estável!',height:max};
 },dispose(){Composite.clear(engine.world,false);Engine.clear(engine);}};
}
