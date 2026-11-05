import {STAGES, STAGE_TICKS, stageAt} from './course.mjs?v=long2';
export const WIDTH=800, HEIGHT=264, FLOOR=213, PLAYER=100;
// Original pixel silhouette. The two feet alternate while grounded.
const body=[
 '               XXXXXXX  ',
 '              XXXXXXXXX ',
 '              XXXXX.XXX ',
 '              XXXXXXXXX ',
 '              XXXXXX    ',
 '              XXXXXXXX  ',
 '            XXXXX       ',
 'X         XXXXXXX       ',
 'XX      XXXXXXXXX       ',
 'XXX   XXXXXXXXXXXX      ',
 'XXXXXXXXXXXXXXXX X      ',
 ' XXXXXXXXXXXXXXX        ',
 '  XXXXXXXXXXXXX         ',
 '    XXXXXXXXXX          ',
 '      XXX XXX           '
];
export function drawDino(ctx,x,y,color,frame=0,flying=false) {
  ctx.fillStyle=color;
  body.forEach((line,row)=>{
    for(let col=0;col<line.length;col++)
      if(line[col]==='X') ctx.fillRect(x+col*3,y+row*3,3,3);
  });
  ctx.fillRect(x+18,y+43,6,flying||frame===0?10:5);
  ctx.fillRect(x+27,y+43,6,flying||frame===1?10:5);
  ctx.fillRect(x+(frame===0?18:27),y+51,10,2);
}
function fillPoly(ctx,points,color) {
  ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(...points[0]);
  points.slice(1).forEach(point=>ctx.lineTo(...point));ctx.closePath();ctx.fill();
}
function landscape(ctx,stage,tick,width) {
  const s=STAGES[stage];
  ctx.fillStyle=s.sky;ctx.fillRect(0,0,width,HEIGHT);
  ctx.fillStyle=stage===5?'#f9dfa4':'#ffdc82';ctx.fillRect(635,32,32,32);ctx.fillRect(630,37,42,22);
  if(stage===5) {
    ctx.fillStyle=s.sky;ctx.fillRect(646,30,25,28);
    for(let i=0;i<25;i++){ctx.fillStyle=i%4?'#8893ac':'#f2e8c7';ctx.fillRect((i*151)%798,10+(i*23)%95,2,2);}
  } else {
    ctx.fillStyle='#fff9e8';
    for(let i=0;i<5;i++){const x=((i*203+35-Math.floor(tick*.13))%1000+1000)%1000-90,y=22+(i*17)%57;
      ctx.fillRect(x,y,40,5);ctx.fillRect(x+10,y-5,19,5);}
  }
  for (let layer=0;layer<2;layer++) {
    const spacing=layer?144:205, slide=Math.floor(tick*(layer?.32:.16))%spacing, color=layer?s.near:s.far;
    for(let i=-1;i<Math.ceil(width/spacing)+1;i++){
      const x=i*spacing-slide,y=156+layer*29;
      if(s.shape==='trees') {
        fillPoly(ctx,[[x-10,y+32],[x+27,y-55],[x+65,y+32]],color);
        ctx.fillStyle=color;ctx.fillRect(x+22,y+25,11,30);
      } else if(s.shape==='mesa') {
        fillPoly(ctx,[[x-18,y+36],[x+8,y+13],[x+18,y-27],[x+86,y-27],[x+98,y+5],[x+122,y+36]],color);
      } else if(s.shape==='crystal') {
        fillPoly(ctx,[[x-10,y+45],[x+9,y-19],[x+30,y-45],[x+53,y+42]],color);
        fillPoly(ctx,[[x+38,y+42],[x+65,y-9],[x+86,y+42]],color);
      } else if(s.shape==='volcano') {
        fillPoly(ctx,[[x-22,y+49],[x+35,y-34],[x+56,y-34],[x+115,y+49]],color);
        ctx.fillStyle='#f2ad68';ctx.fillRect(x+34,y-33,25,4);
      } else {
        fillPoly(ctx,[[x-44,y+48],[x+4,y+5],[x+30,y-8],[x+51,y-8],[x+spacing,y+48]],color);
      }
    }
  }
  ctx.fillStyle=s.path;ctx.fillRect(0,FLOOR,width,HEIGHT-FLOOR);
  ctx.fillStyle=s.ink;ctx.fillRect(0,FLOOR,width,3);
  for(let i=0;i<Math.ceil(width/23);i++)ctx.fillRect(((i*69-tick*3)%(width+30)+width+30)%(width+30)-10,FLOOR+8+(i*7)%32,3+i%7,2);
}
function drawObstacle(ctx,o,x,stage){
  const s=STAGES[stage], h=o.height, w=20+(o.half-6)*6, y=FLOOR-h;
  ctx.fillStyle=s.ink;
  switch(s.obstacle) {
    case 'cacto':
      ctx.fillRect(x-4,y,8,h);ctx.fillRect(x-12,y+15,5,14);ctx.fillRect(x-12,y+25,10,5);ctx.fillRect(x+4,y+19,10,5);ctx.fillRect(x+10,y+8,5,14);break;
    case 'tronco':
      ctx.fillRect(x-w/2,y+7,w,h-7);ctx.fillRect(x-w/2+3,y,w-6,7);ctx.fillStyle=s.near;ctx.fillRect(x-3,y+7,3,h-12);break;
    case 'cristal':
      fillPoly(ctx,[[x-w/2,FLOOR],[x-7,y+9],[x+1,y],[x+w/2,y+18],[x+w/2-3,FLOOR]],s.ink);ctx.fillStyle=s.near;ctx.fillRect(x-2,y+12,4,h-17);break;
    default:
      fillPoly(ctx,[[x-w/2,FLOOR],[x-w/2,y+16],[x-5,y],[x+6,y],[x+w/2,y+13],[x+w/2,FLOOR]],s.ink);
      ctx.fillStyle=s.obstacle==='lava'?'#ffb34f':s.near;ctx.fillRect(x-6,y+10,8,3);ctx.fillRect(x+1,y+13,3,7);
  }
}
export function draw(ctx,run,width=WIDTH) {
  const stage=stageAt(run.tick),s=STAGES[stage],speed=4+stage*.36;
  ctx.imageSmoothingEnabled=false;
  landscape(ctx,stage,run.tick,width);
  for (const o of run.obstacles) {
    const x=PLAYER+34+(o.center-run.tick)*speed;
    if (x < -50 || x > width+30) continue;
    drawObstacle(ctx,o,Math.round(x),o.stage);
    if(o.amber && run.tick < o.center) {
      const y=FLOOR-159;
      fillPoly(ctx,[[x,y-6],[x+6,y],[x,y+6],[x-6,y]],'#d88420');
      ctx.fillStyle='#ffed9d';ctx.fillRect(Math.round(x)-2,y-3,3,3);
    }
  }
  drawDino(ctx,PLAYER,FLOOR-53-run.height,s.ink,Math.floor(run.tick/6)%2,run.height>0);
  const phaseTick=run.tick%STAGE_TICKS;
  if(stage>0 && phaseTick<110 && run.tick<STAGE_TICKS*STAGES.length) {
    ctx.font='bold 15px monospace';ctx.textAlign='center';ctx.fillStyle=s.ink;ctx.fillText('FASE '+(stage+1)+' / '+s.name.toUpperCase(),width/2,32);
  }
}
