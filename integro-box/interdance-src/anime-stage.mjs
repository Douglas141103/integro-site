// Graphic stage dressing uses flat illustrated shapes instead of expensive full-screen effects.
export function drawAnimeStage(ctx,width,height,stage,beat=0) {
  const night=['city','arcade','space','aurora','festival','station','volcano'].includes(stage.theme);
  const floor=height*.77;
  ctx.save();
  // Quiet halftone texture in the corners, clear space reserved for the note highway.
  ctx.fillStyle=night?'#fff3d30d':'#2632570b';
  for(let x=10;x<width;x+=21)for(let y=85;y<height*.54;y+=21)if(x<width*.16||x>width*.84){ctx.beginPath();ctx.arc(x,y,1.2,0,Math.PI*2);ctx.fill();}
  ctx.globalAlpha=.14;ctx.fillStyle=stage.accent;
  for(const side of [-1,1]){
    const start=width*(side<0?.08:.92),drift=Math.sin(beat*Math.PI/16)*width*.035;
    ctx.beginPath();ctx.moveTo(start,66);ctx.lineTo(width*.5+side*width*.28+drift,floor);ctx.lineTo(width*.5+side*width*.08+drift,floor);ctx.closePath();ctx.fill();
  }
  ctx.globalAlpha=1;
  ctx.fillStyle=night?'#252841':'#51667b';ctx.beginPath();ctx.moveTo(0,height*.91);ctx.lineTo(width*.28,floor);ctx.lineTo(width*.72,floor);ctx.lineTo(width,height*.91);ctx.lineTo(width,height);ctx.lineTo(0,height);ctx.fill();
  ctx.strokeStyle=stage.accent;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,height*.91);ctx.lineTo(width*.28,floor);ctx.lineTo(width*.72,floor);ctx.lineTo(width,height*.91);ctx.stroke();
  ctx.strokeStyle='#ffffff16';ctx.lineWidth=1;
  for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(width*.5+(i-3)*width*.06,floor+2);ctx.lineTo(width*.5+(i-3)*width*.22,height);ctx.stroke();}
  // Paired illustrated stage rings visually anchor both dancers.
  for(const x of [.2,.8]){ctx.fillStyle=stage.color+'38';ctx.strokeStyle=stage.accent+'a0';ctx.beginPath();ctx.ellipse(width*x,height*.83,width*.085,height*.018,0,0,Math.PI*2);ctx.fill();ctx.stroke();}
  ctx.restore();
}
