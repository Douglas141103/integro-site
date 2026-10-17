import test from 'node:test';
import assert from 'node:assert/strict';
import {concertLayout,noteY,drawConcert} from '../integro-box/interdance-src/concert.mjs';
import {stages,avatars,generateSong,RhythmRun} from '../integro-box/interdance-src/engine.mjs';
test('concert layout aligns targets and controls in portrait, landscape and versus without overlapping notes',()=>{
 for(const [w,h]of [[320,480],[360,640],[390,740],[430,932],[667,375],[844,390],[960,540],[1440,900]])for(const versus of [false,true]){
  const l=concertLayout(w,h,versus);assert.equal(l.tracks.length,versus?2:1);assert(l.hitY-l.noteTop>=80,`${w}×${h} ${versus}: note travel too short`);
  for(const track of l.tracks){assert(track.padY>track.hitY);assert(track.padY+track.padHeight<h);assert(track.padLeft>=0);assert(track.padLeft+track.padWidth<=w);assert((track.padWidth-18)/4>=44,'minimum touch pad');assert(track.padHeight>=44);assert.equal(noteY(10,10,track),track.hitY);assert.equal(noteY(10,8.25,track),track.top);assert(noteY(10,9,track)<noteY(10,9.5,track));}
  if(!l.landscape)assert(l.feetY+19<l.noteTop);if(l.tracks.length===2)assert(l.tracks[0].left+l.tracks[0].width<l.tracks[1].left);
 }
});
test('concert renders actual solo and versus charts including held notes without moving lanes',()=>{
 const gradient={addColorStop(){}},seen=[];const ctx=new Proxy({createLinearGradient:()=>gradient,createRadialGradient:()=>gradient,fillRect:(...args)=>seen.push(args)},{get:(o,k)=>k in o?o[k]:()=>{}});
 for(const versus of [false,true]){const song=generateSong(stages[6]),runs=Array.from({length:versus?2:1},()=>new RhythmRun(song,true)),hold=song.notes.find(n=>n.hold);runs.forEach(r=>r.hit(hold.lane,hold.time));drawConcert(ctx,390,740,stages[6],runs,hold.time+.1,avatars,{versus});assert(seen.every(args=>args.every(Number.isFinite)));}
});
