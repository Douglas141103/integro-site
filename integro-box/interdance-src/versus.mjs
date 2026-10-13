import {RhythmRun, drawBackground, drawCharacter, drawArrow, avatars, laneColors, phaseEffects, noteMotion} from './engine.mjs';

// Both players receive independent copies of exactly the same chart and cannot be eliminated early.
export function createVersusRuns(song) {
  return [new RhythmRun(song, true), new RhythmRun(song, true)];
}
export function versusWinner(runs) {
  const [a,b] = runs.map(run => run.result());
  const difference = a.score - b.score;
  return difference === 0 ? null : difference > 0 ? 0 : 1;
}
export function keyLane(key, versus) {
  const lanes = {a:0,s:1,w:2,d:3,arrowleft:0,arrowdown:1,arrowup:2,arrowright:3};
  key = key.toLowerCase();
  return key in lanes ? lanes[key] + (versus && key.startsWith('arrow') ? 4 : 0) : null;
}
export function drawVersus(ctx, width, height, stage, runs, time, reduced) {
  const portrait = width <= 600 && height > width;
  const top = height < 500 ? 132 : 164;
  const bottom = height - (portrait ? 169 : 109);
  const half = width / 2, boardWidth = Math.min(half - 24, 350), laneWidth = boardWidth / 4;
  const speed = Math.max(50, (bottom - top) / 1.65);
  const effects = phaseEffects(stage, time, reduced);
  drawBackground(ctx, width, height, stage, time / (60 / stage.bpm));
  runs.forEach((run, player) => {
    const center = half * (player + .5), left = center - boardWidth / 2;
    ctx.save();
    ctx.globalAlpha = .8;
    drawCharacter(ctx, center, Math.max(top, height * .48), Math.min(half * .55, height * .36), avatars[player], reduced ? 0 : time / run.song.beat, time - run.last.at < .2 ? run.last.lane : -1, player === 1);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#15223ce8'; ctx.fillRect(left - 5, top - 24, boardWidth + 10, bottom - top + 35);
    ctx.strokeStyle = player === 0 ? '#b4dafe' : '#d9b9f7'; ctx.lineWidth = 2; ctx.strokeRect(left - 5, top - 24, boardWidth + 10, bottom - top + 35);
    ctx.beginPath(); ctx.rect(left - 5, top - 23, boardWidth + 10, bottom - top + 34); ctx.clip();
    for(let lane=0; lane<4; lane++) {
      ctx.fillStyle='#40557538'; ctx.fillRect(left + lane * laneWidth + 2, top - 22, laneWidth - 4, bottom - top + 33);
      drawArrow(ctx,left + laneWidth * (effects.slots[lane] + .5),top,Math.min(30,laneWidth * .58),lane,run.held.has(lane)?laneColors[lane]:'#63778f');
    }
    for(const note of run.notes) {
      if(['hit','miss','broken'].includes(note.state)) continue;
      const y=top+(note.time-time)*speed, end=y+note.hold*speed;
      if(end<top-25||y>bottom+35) continue;
      const motion=noteMotion(note.lane,time,note.time-time,effects.shake);
      const x=left+laneWidth*(effects.slots[note.lane]+.5)+motion.x;
      if(note.hold) {ctx.fillStyle=laneColors[note.lane];ctx.fillRect(x-4,Math.max(top,y),8,Math.max(0,end-Math.max(top,y)));}
      if(note.state==='waiting') drawArrow(ctx,x,y+motion.y,Math.min(30,laneWidth*.58),note.lane,laneColors[note.lane]);
    }
    if(time-run.last.at<.65) {
      ctx.fillStyle='#f5edcb'; ctx.textAlign='center'; ctx.font=`900 ${width<500?12:17}px system-ui`;
      ctx.fillText(run.last.text,center,Math.min(bottom-16,top+75));
      if(run.combo>=3) {ctx.font='900 24px system-ui';ctx.fillText(run.combo+'×',center,Math.min(bottom+1,top+103));}
    }
    ctx.restore();
  });
  const countIn=time<4*runs[0].song.beat;
  ctx.fillStyle='#fff5d7';ctx.textAlign='center';ctx.font=countIn?'900 48px system-ui':'800 11px system-ui';
  const response=Math.floor((time/runs[0].song.beat-4)/4)%4>=2;
  ctx.fillText(countIn?String(Math.max(1,4-Math.floor(time/runs[0].song.beat))):response?'OS DOIS JOGAM!':'ESCUTEM O RITMO',width/2,countIn?height*.53:bottom+29);
}
