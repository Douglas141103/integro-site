(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./bounce-core.js'));else root.BounceArt=factory(root.BounceCore);})(typeof globalThis!=='undefined'?globalThis:this,C=>{
'use strict';
function ellipse(c,x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
function path(c,points,color){c.fillStyle=color;c.beginPath();points.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath();c.fill();}
function star(c,x,y,r,color){c.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.48:r;i?c.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr):c.moveTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr);}c.closePath();c.fillStyle=color;c.fill();}
function flower(c,x,y,s,t,phase=0){c.save();c.translate(x,y);c.scale(s,s);c.rotate(Math.sin(phase)*.035);c.strokeStyle='#245b22';c.lineWidth=7;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(14,-37,0,-91);c.stroke();c.strokeStyle='#8ae629';c.lineWidth=4;c.stroke();ellipse(c,-12,-32,17,7,'#73dc26');ellipse(c,16,-52,19,8,'#a3ef39');for(let n=0;n<6;n++){c.save();c.translate(0,-96);c.rotate(n*Math.PI/3);ellipse(c,0,-19,13,23,t.flower);ellipse(c,0,-24,5,13,'#ffffff25');c.restore();}ellipse(c,0,-96,15,15,'#a86a21');ellipse(c,0,-98,13,13,'#ffe247');ellipse(c,-4,-103,5,4,'#fff2b1');c.restore();}
function drop(c,x,y,t){c.save();c.translate(x,y+Math.sin(t*3+x)*3);c.beginPath();c.moveTo(0,-15);c.bezierCurveTo(-21,2,-12,16,0,15);c.bezierCurveTo(18,14,19,-1,0,-15);const g=c.createLinearGradient(-10,-10,8,14);g.addColorStop(0,'#fff8ca');g.addColorStop(.4,'#ffd877');g.addColorStop(1,'#db8c36');c.fillStyle=g;c.fill();c.strokeStyle='#a96f33';c.lineWidth=2;c.stroke();ellipse(c,-4,-3,4,6,'#fffce3');c.restore();}
function render(c,run,width,height,camera,particles=[]){
 const l=run.level,t=l.theme,time=run.time,p=run.p,viewW=width/height<1?640:Math.min(1180,540*width/height),scale=width/viewW,viewH=height/scale;
 const targetX=C.clamp(p.x-viewW*.35,0,Math.max(0,l.width-viewW)),targetY=C.clamp(p.y-viewH*.58,Math.min(l.top-viewH*.4,-Math.max(60,viewH-470)),140);
 if(!camera.ready){camera.x=targetX;camera.y=targetY;camera.ready=true;}else{camera.x+=(targetX-camera.x)*.1;camera.y+=(targetY-camera.y)*.075;}
 c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,width,height);c.scale(scale,scale);const sky=c.createLinearGradient(0,0,0,viewH);sky.addColorStop(0,t.sky[0]);sky.addColorStop(1,t.sky[1]);c.fillStyle=sky;c.fillRect(0,0,viewW,viewH);
 // Layered illustrated skyline, clouds and distant crooked trunks.
 ellipse(c,viewW*.78-camera.x*.025,viewH*.22,48,48,l.index>=8&&l.index<12?'#c5c8ff':'#fff4b8');
 for(let layer=0;layer<2;layer++){const par=layer?.22:.1,spacing=layer?390:470;for(let i=-1;i<Math.ceil(viewW/spacing)+2;i++){const x=i*spacing-(camera.x*par)%spacing,y=viewH*.7+layer*40;path(c,[[x-100,y+130],[x+40,y-70-layer*80],[x+105,y-95-layer*60],[x+160,y-30],[x+260,y-110],[x+390,y+130]],layer?t.near:t.far);if(l.index>=12&&l.index<16)path(c,[[x+15,y-40],[x+105,y-95-layer*60],[x+163,y-20],[x+98,y-42],[x+80,y-20]],'#e4f6f1');}}
 if(l.index<8||l.index>=12)for(let i=0;i<7;i++){const x=(i*239-camera.x*.13+time*3)%(viewW+300)-100,y=55+(i%3)*66+viewH*.09;c.globalAlpha=.6;ellipse(c,x,y,63,16,'#ffffff');ellipse(c,x-22,y-10,26,23,'#ffffff');ellipse(c,x+11,y-15,29,29,'#ffffff');c.globalAlpha=1;}
 else for(let i=0;i<38;i++){const x=(i*149.4-camera.x*.12)%(viewW+80),y=35+(i*47)%Math.max(100,viewH*.65);ellipse(c,x,y,1.8,1.8,'#e1e8ff');}

 if(l.index>=8&&l.index<12){for(let i=-1;i<Math.ceil(viewW/170)+2;i++){const x=i*170-(camera.x*.2)%170;path(c,[[x-20,0],[x+150,0],[x+125,55],[x+82,32],[x+65,110],[x+40,41],[x,73]],t.far);}}
 c.save();c.translate(-camera.x,-camera.y);
 // Ground ribbons have rounded scalloped grass rims and gently bending surfaces.
 const left=Math.max(0,camera.x-90),right=Math.min(l.width,camera.x+viewW+90);let segment=[];
 function paintGround(points){if(points.length<2)return;c.beginPath();c.moveTo(points[0][0],points[0][1]);points.slice(1).forEach(a=>c.lineTo(...a));c.lineTo(points.at(-1)[0],Math.max(1100,camera.y+viewH));c.lineTo(points[0][0],Math.max(1100,camera.y+viewH));c.closePath();c.fillStyle=t.ground;c.fill();c.strokeStyle='#071e2430';c.lineWidth=5;c.stroke();c.beginPath();points.forEach((a,i)=>i?c.lineTo(...a):c.moveTo(...a));c.lineCap='round';c.lineJoin='round';c.strokeStyle=t.edge;c.lineWidth=16;c.stroke();c.strokeStyle=t.grass;c.lineWidth=5;c.stroke();for(let x=points[0][0]+8;x<points.at(-1)[0];x+=17){const y=C.terrainY(l,x);if(Number.isFinite(y)){ellipse(c,x,y+3,11,7,t.edge);path(c,[[x-3,y-3],[x-5,y-13-(x%7)],[x,y-7],[x+4,y-14],[x+5,y-3]],t.grass);}}}
 for(let x=Math.floor(left/8)*8;x<=right;x+=8){const y=C.terrainY(l,x);if(Number.isFinite(y))segment.push([x,y]);else{paintGround(segment);segment=[];}}paintGround(segment);

 // Subtle soil stones and roots echo the rounded, organic scenery.
 for(let x=Math.floor(left/110)*110;x<right;x+=110){const y=C.terrainY(l,x);if(!Number.isFinite(y))continue;ellipse(c,x+15,y+74+(x%53),21,15,'#081d282a');ellipse(c,x+17,y+70+(x%53),13,9,'#b5deb00a');if(x%330===0){c.strokeStyle='#a7bc8220';c.lineWidth=5;c.beginPath();c.moveTo(x,y+21);c.bezierCurveTo(x+42,y+63,x-50,y+93,x-8,y+150);c.stroke();}}
 for(const g of l.gaps){if(g.x+g.w<left||g.x>right)continue;c.fillStyle=l.index>=16?'#fe884a':'#40b9db';c.fillRect(g.x,650,g.w,470);c.strokeStyle=l.index>=16?'#ffd577':'#a2edff';c.lineWidth=4;c.beginPath();for(let x=g.x;x<=g.x+g.w;x+=5){const y=650+Math.sin(x*.07+time*3)*5;x===g.x?c.moveTo(x,y):c.lineTo(x,y);}c.stroke();}
 // Deterministic decoration never covers hazards or interactive objects.
 for(let x=Math.floor(left/140)*140;x<right;x+=140){const y=C.terrainY(l,x);if(!Number.isFinite(y))continue;if(x%420===0)flower(c,x,y-4,.65+(x%3)*.12,t,time+x);else{ellipse(c,x,y-8,24,14,t.edge);ellipse(c,x-15,y-4,15,12,t.edge);ellipse(c,x+12,y-15,14,17,t.edge);}if(l.index>=8&&l.index<12)path(c,[[x+30,y],[x+25,y-50],[x+42,y-70],[x+55,y-33],[x+50,y]],'#8ea6dc');}
 // Tall solid ridges and their climbing vines share the collision geometry.
 for(const m of l.mountains){const b=m.block;if(b.x+b.w<left||m.x>right)continue;
  const rock=c.createLinearGradient(b.x,0,b.x+b.w,0);rock.addColorStop(0,t.near);rock.addColorStop(.18,t.ground);rock.addColorStop(1,t.ground);
  c.fillStyle=rock;c.beginPath();c.roundRect(b.x,b.y,b.w,b.h,12);c.fill();
  c.save();c.beginPath();c.rect(b.x,b.y,b.w,b.h);c.clip();
  for(let y=b.y+55,i=0;y<430;y+=88,i++){const dx=i%2?34:13;path(c,[[b.x+dx,y-22],[b.x+105,y-38],[b.x+185,y-10],[b.x+160,y+26],[b.x+45,y+16]],'#d0e7b310');c.strokeStyle='#081e2938';c.lineWidth=3;c.beginPath();c.moveTo(b.x+7,y+30);c.lineTo(b.x+72,y+12);c.lineTo(b.x+97,y+43);c.lineTo(b.x+b.w-9,y+27);c.stroke();}
  c.restore();c.lineCap='round';c.strokeStyle=t.edge;c.lineWidth=15;c.beginPath();c.moveTo(b.x+5,b.y);c.lineTo(b.x+b.w-5,b.y);c.stroke();c.strokeStyle=t.grass;c.lineWidth=4;c.stroke();
  for(let x=b.x+12;x<b.x+b.w-8;x+=21)ellipse(c,x,b.y+3,13,6,t.edge);
  flower(c,b.x+b.w-28,b.y-5,.65,t,time);
  for(const a of m.leaves){c.strokeStyle='#234e35';c.lineWidth=9;c.beginPath();c.moveTo(b.x+5,a.y+60);c.bezierCurveTo(b.x-50,a.y+10,a.x+60,a.y+45,a.x,a.y+7);c.stroke();c.strokeStyle='#68a83d';c.lineWidth=4;c.stroke();ellipse(c,b.x-40,a.y+34,15,6,'#76bb40');}
 }
 for(const a of l.platforms){if(a.kind==='spring-leaf'||a.x+a.w<left||a.x>right)continue;if(a.kind==='moving'){c.strokeStyle='#6f634f';c.lineWidth=3;c.beginPath();c.moveTo(a.originX+18,170);c.lineTo(a.x+18,a.y);c.moveTo(a.originX+a.w-18,170);c.lineTo(a.x+a.w-18,a.y);c.stroke();}c.fillStyle=a.kind==='stone'?'#68607d':t.ground;c.beginPath();c.roundRect(a.x,a.y,a.w,a.h+9,12);c.fill();c.fillStyle=a.kind==='crystal'?'#b5d9ff':t.edge;c.beginPath();c.roundRect(a.x-3,a.y-3,a.w+6,10,6);c.fill();if(a.kind==='moving'){c.fillStyle='#ebc475';c.fillRect(a.x+6,a.y+10,a.w-12,4);}}
 for(const a of l.springs){if(a.x<left-70||a.x>right+70)continue;
  if(a.surface){c.save();c.translate(a.x,a.y);const bend=(a.pulse||0)*12;
   c.beginPath();c.moveTo(-62,0);c.bezierCurveTo(-42,19+bend,30,21+bend,62,0);c.bezierCurveTo(25,-7,-26,-7,-62,0);c.closePath();c.fillStyle='#468b24';c.fill();c.strokeStyle='#224d30';c.lineWidth=3;c.stroke();
   c.beginPath();c.moveTo(-60,0);c.quadraticCurveTo(0,-8,60,0);c.strokeStyle='#c4fb74';c.lineWidth=5;c.stroke();
   c.strokeStyle='#8fe448';c.lineWidth=2;for(let j=-2;j<=2;j++){c.beginPath();c.moveTo(j*18,-1);c.lineTo(j*13+8,10+bend);c.stroke();}
   c.fillStyle='#efffc7';c.textAlign='center';c.font='bold 18px sans-serif';c.fillText('↑',0,-15);c.restore();continue;
  }
  c.strokeStyle='#285b28';c.lineWidth=5;c.beginPath();c.moveTo(a.x,a.y+4);c.bezierCurveTo(a.x-32,a.y-15,a.x+30,a.y-15,a.x,a.y-31);c.stroke();ellipse(c,a.x,a.y-25,32,10,'#85ed29');ellipse(c,a.x,a.y-31,25,5,'#d6fc79');c.fillStyle='#237046';c.font='bold 21px sans-serif';c.textAlign='center';c.fillText('↑',a.x,a.y-39);}
 for(const a of l.gates){
  if(a.x+40<left||a.switchX-50>right)continue;
  const lift=a.lift||0,hx=a.leverX+32*lift,hy=a.leverY+16*lift;
  // Matching markers and a cable make the lever/door relationship visible in the scene.
  c.save();c.strokeStyle=a.open?'#b6ed8155':'#dfbb6c55';c.setLineDash([4,7]);c.lineWidth=2;c.beginPath();c.moveTo(a.switchX+23,a.switchY+10);c.lineTo(a.x+14,a.switchY+10);c.stroke();c.setLineDash([]);
  ellipse(c,a.switchX,a.switchY-1,25,9,'#3b5465');ellipse(c,a.switchX,a.switchY-5,21,6,'#a5bac0');
  c.strokeStyle='#384956';c.lineWidth=9;c.lineCap='round';c.beginPath();c.moveTo(a.switchX,a.switchY-8);c.lineTo(hx,hy);c.stroke();c.strokeStyle='#dcebf0';c.lineWidth=4;c.stroke();
  ellipse(c,hx,hy,11,11,a.open?'#5bc765':'#ab6a24');ellipse(c,hx,hy-2,9,9,a.open?'#b7f783':'#ffdc74');ellipse(c,hx-3,hy-5,3,3,'#fff8ce');ellipse(c,a.switchX,a.switchY-8,6,6,'#657e8e');
  c.font='bold 11px sans-serif';c.textAlign='center';c.fillStyle=a.open?'#d4ffba':'#fff1b5';c.fillText(String(a.id),a.switchX,a.switchY+4);
  if(!a.open&&Math.abs(p.x-a.switchX)<180){c.fillStyle='#fff6bf';c.font='bold 17px sans-serif';c.fillText('↓',hx,hy-18);}
  c.fillStyle='#88725a';c.fillRect(a.x-6,a.y-12,6,a.h+12);c.fillRect(a.x+a.w,a.y-12,6,a.h+12);c.fillRect(a.x-8,a.y-14,a.w+16,12);
  c.save();c.beginPath();c.rect(a.x,a.y,a.w,a.h);c.clip();c.translate(0,-a.h*lift);c.fillStyle='#586c78';c.fillRect(a.x+3,a.y,5,a.h);c.fillRect(a.x+a.w-8,a.y,5,a.h);c.fillStyle=a.open?'#9be88c':'#ffc765';for(let y=a.y;y<a.y+a.h;y+=25)c.fillRect(a.x,y,a.w,9);c.restore();
  ellipse(c,a.x+a.w/2,a.y-12,12,12,a.open?'#5b9e56':'#a27535');c.fillStyle='#fff7ce';c.font='bold 12px sans-serif';c.fillText(String(a.id),a.x+a.w/2,a.y-8);c.restore();
 }
 for(const a of l.hazards){if(a.x+a.w<left||a.x>right)continue;if(a.kind==='spike'){for(let n=0;n<a.w/18;n++){path(c,[[a.x+n*18,a.y+a.h],[a.x+9+n*18,a.y],[a.x+18+n*18,a.y+a.h]],'#96a7be');c.strokeStyle='#48596e';c.lineWidth=1.8;c.stroke();path(c,[[a.x+n*18+4,a.y+a.h-3],[a.x+9+n*18,a.y+3],[a.x+10+n*18,a.y+a.h-3]],'#ecf8ed');}}else{ellipse(c,a.x+20,a.y+20,23,15,'#414a78');ellipse(c,a.x+20,a.y+12,20,14,'#a592cf');ellipse(c,a.x+30,a.y+12,6,7,'#fff4c9');ellipse(c,a.x+32,a.y+12,2,4,'#342d4f');for(let n=0;n<3;n++)ellipse(c,a.x+6+n*13,a.y+30,5,4,'#363655');}}
 for(const a of l.checks){c.strokeStyle='#e9dbb0';c.lineWidth=5;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(a.x,a.y-96);c.stroke();path(c,[[a.x,a.y-96],[a.x+47,a.y-85],[a.x,a.y-65]],a.active?'#a5ef45':'#fcdf78');ellipse(c,a.x,a.y-98,5,5,'#fff5cc');}
 for(const a of l.signs){c.fillStyle='#806145';c.fillRect(a.x-3,a.y-65,6,65);c.fillStyle='#c99452';c.strokeStyle='#825732';c.lineWidth=3;c.beginPath();c.roundRect(a.x-65,a.y-100,130,48,7);c.fill();c.stroke();c.fillStyle='#fff4ae';c.textAlign='center';c.font='bold 14px sans-serif';c.fillText(a.text,a.x,a.y-70);}
 for(const a of l.drops)if(!a.taken&&a.x>left&&a.x<right)drop(c,a.x,a.y,time);
 for(const a of l.stars)if(!a.taken&&a.x>left&&a.x<right){c.save();c.translate(a.x,a.y+Math.sin(time*2)*4);c.rotate(Math.sin(time)*.1);star(c,0,0,23,'#365e9d');star(c,0,-2,18,'#a5f8ff');star(c,-3,-6,8,'#ffffff');c.restore();}
 const goal=l.goal;c.save();c.translate(goal.x,goal.y);c.shadowColor='#deff9f';c.shadowBlur=24;c.strokeStyle='#b8f56e';c.lineWidth=12;c.beginPath();c.ellipse(0,0,33,51,0,0,Math.PI*2);c.stroke();c.fillStyle='#9cf8ac55';c.fill();c.shadowBlur=0;star(c,0,-1,19,'#fff8ba');c.restore();
 // A rolling glossy red ball, with a small friendly face that stays readable.
 if(!run.pop&&!(run.invulnerable>0&&Math.floor(time*12)%2)){c.save();c.translate(p.x,p.y);const stretch=p.grounded?1:Math.min(1.14,1+Math.abs(p.vy)*.0001);c.scale(1/stretch,stretch);const ball=c.createRadialGradient(-6,-9,2,0,0,21);ball.addColorStop(0,'#ff8c76');ball.addColorStop(.3,'#ff433c');ball.addColorStop(.8,'#e02d39');ball.addColorStop(1,'#a61f37');ellipse(c,0,0,p.r+2,p.r+2,'#6f2441');ellipse(c,0,-1,p.r,p.r,ball);ellipse(c,-6,-9,5,4,'#fff7d7');c.save();c.rotate(p.angle);c.strokeStyle='#bb273e55';c.lineWidth=2;c.beginPath();c.arc(0,0,13,-.6,1.6);c.stroke();c.restore();ellipse(c,5,-4,3.6,5,'white');ellipse(c,12,-4,3.4,4.8,'white');ellipse(c,6,-3,1.6,2.8,'#392443');ellipse(c,13,-3,1.4,2.6,'#392443');c.strokeStyle='#7d2136';c.lineWidth=1.8;c.beginPath();c.arc(9,3,4,0,Math.PI);c.stroke();c.restore();}
 // The ball visibly bursts before the game moves it back to a checkpoint.
 if(run.pop){const q=run.pop,u=C.clamp(q.elapsed/q.duration,0,1);c.save();c.translate(q.x,q.y);c.globalAlpha=1-u;
  c.strokeStyle='#fff7dc';c.lineWidth=5*(1-u)+1;c.beginPath();c.arc(0,0,16+u*70,0,Math.PI*2);c.stroke();
  if(u<.28)star(c,0,0,24+u*85,'#fff4c1');
  for(let i=0;i<10;i++){const a=i*Math.PI/5-.5,dist=18+u*(65+(i%3)*17),x=Math.cos(a)*dist,y=Math.sin(a)*dist+u*u*36;c.save();c.translate(x,y);c.rotate(a+u*4);ellipse(c,0,0,(5+i%3)*(1-u*.5),3.8*(1-u*.5),i%3?'#ff5655':'#ffd3bf');c.restore();}
  for(let i=0;i<6;i++){const a=i*Math.PI/3;ellipse(c,Math.cos(a)*(12+u*36),Math.sin(a)*(12+u*36),8+u*12,6+u*9,'#ffffff70');}c.restore();
 }
 for(const a of particles){c.globalAlpha=Math.max(0,a.life);ellipse(c,a.x,a.y,a.size,a.size,a.color);}c.globalAlpha=1;c.restore();
 return {viewW,viewH,scale};
}
return {render,flower,drop,star};
});
