import {drawCharacter} from './engine.mjs';

export const NOTE_COLORS=['#b99aff','#66e4ed','#bef58c','#ff9bb9'];
const ink='#080d20',white='#edf2ff';
function panel(c,x,y,w,h,r,color,stroke=null){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=color;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}}
function label(c,text,x,y,size=12,color=white,align='center',weight=700){c.font=`${weight} ${size}px system-ui`;c.fillStyle=color;c.textAlign=align;c.fillText(text,x,y);}
export function concertLayout(width,height,versus=false){
 const landscape=width>height*1.25,compact=height<460;
 const stageBottom=landscape?height-24:Math.min(258,Math.max(190,height*.35));
 const stacked=versus&&!landscape,padHeight=stacked?48:compact?50:62,padBottom=18;
 const noteTop=landscape?112:stageBottom+14;
 const hitY=height-padBottom-padHeight*(stacked?2:1)-(stacked?28:18);
 const groups=versus?2:1;
 const totalWidth=landscape?Math.min(width*(versus?.64:.46),versus?720:420):Math.min(width-24,640);
 const gap=versus?14:0,boardWidth=(totalWidth-gap)/groups,left=(width-totalWidth)/2;
 const tracks=Array.from({length:groups},(_,i)=>({left:left+i*(boardWidth+gap),width:boardWidth,center:left+i*(boardWidth+gap)+boardWidth/2,top:noteTop,hitY,padY:stacked?height-padBottom-padHeight*2-10+i*(padHeight+10):height-padBottom-padHeight,padLeft:stacked?left:left+i*(boardWidth+gap),padWidth:stacked?totalWidth:boardWidth,padHeight,laneWidth:boardWidth/4}));
 const charSize=landscape?Math.min(height*.53,width*.19):Math.min(138,stageBottom-104,width*.34);
 const feetY=landscape?height*.80:stageBottom-23;
 return {landscape,compact,stageBottom,noteTop,hitY,tracks,charSize,feetY,
  characterX:i=>landscape?width*(i?.86:.14):width*(i?.73:.27),
  statusY:landscape?90:stageBottom-4};
}
export function noteY(noteTime,time,track,travel=1.75){return track.hitY-(noteTime-time)*(track.hitY-track.top)/travel;}
export function drawNote(c,x,y,size,lane,color,alpha=1){
 c.save();c.translate(x,y);c.rotate([-Math.PI/2,Math.PI,0,Math.PI/2][lane]);c.globalAlpha=alpha;
 c.beginPath();c.moveTo(0,-size*.5);c.lineTo(size*.43,-size*.04);c.lineTo(size*.18,-size*.04);c.lineTo(size*.18,size*.42);c.lineTo(-size*.18,size*.42);c.lineTo(-size*.18,-size*.04);c.lineTo(-size*.43,-size*.04);c.closePath();
 c.fillStyle=color;c.fill();c.strokeStyle='#ffffffc0';c.lineWidth=1.5;c.stroke();c.restore();
}
export function drawConcertStage(c,w,h,stage,time=0,reduced=false){
 const top=c.createLinearGradient(0,0,0,h);top.addColorStop(0,'#101831');top.addColorStop(.65,'#12132d');top.addColorStop(1,ink);c.fillStyle=top;c.fillRect(0,0,w,h);
 const floor=h*.83,accent=stage.accent||'#62ded9',color=stage.color||'#8474de';
 // Architectural light panels; the note field always receives its own opaque surface.
 c.save();c.globalAlpha=.18;c.fillStyle=color;
 for(let i=0;i<9;i++){const x=(i+.5)*w/9,high=h*(.18+(i%3)*.045);c.fillRect(x-w*.022,floor-high,w*.044,high);}
 c.globalAlpha=.65;c.strokeStyle=accent;c.lineWidth=2;
 for(let i=0;i<3;i++){c.beginPath();c.ellipse(w*.5,h*.44,w*(.20+i*.045),h*(.19+i*.045),0,Math.PI,Math.PI*2);c.stroke();}
 c.globalAlpha=.10;c.fillStyle=accent;
 for(const side of [-1,1]){const shift=reduced?0:Math.sin(time*.35)*w*.025;c.beginPath();c.moveTo(w*(side<0?.04:.96),h*.04);c.lineTo(w*.5+side*w*.14+shift,floor);c.lineTo(w*.5+side*w*.34+shift,floor);c.closePath();c.fill();}
 c.globalAlpha=1;c.fillStyle='#0d152b';c.fillRect(0,floor,w,h-floor);
 c.strokeStyle='#61689280';c.beginPath();c.moveTo(0,floor);c.lineTo(w,floor);c.stroke();
 for(let i=0;i<5;i++){c.strokeStyle=i===0?accent+'80':'#b5a4ff18';c.beginPath();c.moveTo(0,floor+i*i*3);c.lineTo(w,floor+i*i*3);c.stroke();}
 for(const side of [-1,1]){const x=w*(side<0?.04:.91);panel(c,x,h*.50,w*.05,h*.33,4,'#0a0e22','#404663');for(const offset of [.59,.74]){c.beginPath();c.arc(x+w*.025,h*offset,Math.min(w*.018,h*.052),0,Math.PI*2);c.strokeStyle='#565778';c.stroke();}}
 c.restore();
}
function highway(c,track,run,time,player,versus,reduced){
 const {left,width,top,hitY,laneWidth}=track,base=hitY+16;
 panel(c,left-2,top-12,width+4,base-top+12,12,'#080d20','#344363');
 for(let lane=0;lane<4;lane++){
  const x=left+lane*laneWidth,center=x+laneWidth/2,color=NOTE_COLORS[lane];
  const pressed=run.held.has(lane),flash=time-run.last.at<.16&&run.last.lane===lane;
  if(pressed||flash){c.fillStyle=color+(reduced?'14':'24');c.fillRect(x+2,top,laneWidth-4,base-top);}
  if(lane){c.strokeStyle='#25304d';c.lineWidth=1;c.beginPath();c.moveTo(x,top);c.lineTo(x,base);c.stroke();}
  drawNote(c,center,hitY,Math.min(34,laneWidth*.62),lane,pressed?color:'#526180',pressed?1:.9);
 }
 // The hit line is beside the touch controls; notes travel down toward the player's hands.
 c.fillStyle='#d9e6ff';c.fillRect(left+5,hitY+19,width-10,2);
 c.save();c.beginPath();c.rect(left,top-8,width,hitY-top+25);c.clip();
 for(const note of run.notes){
  if(['hit','miss','broken'].includes(note.state))continue;
  const y=noteY(note.time,time,track),end=noteY(note.time+note.hold,time,track),x=left+(note.lane+.5)*laneWidth;
  if(y<top-30||end>hitY+26)continue;
  if(note.hold){const bottom=Math.min(y,hitY),start=Math.max(top-7,end);if(bottom>start){panel(c,x-6,start,12,bottom-start,5,NOTE_COLORS[note.lane]+'80');c.fillStyle='#ffffff9c';c.fillRect(x-1.5,start,3,bottom-start);}}
  if(note.state==='waiting')drawNote(c,x,y,Math.min(34,laneWidth*.62),note.lane,NOTE_COLORS[note.lane]);
 }
 c.restore();
 if(time-run.last.at<.58&&run.last.lane>=0){label(c,run.last.text,track.center,top+48,versus?12:16,run.last.text==='PERFEITO!'?'#bdf58b':white);if(run.combo>2)label(c,run.combo+'×',track.center,top+79,versus?20:26,'#fff');}
}
export function drawConcert(c,w,h,stage,runs,time,avatars,{versus=false,reduced=false,preview=false}={}){
 const l=concertLayout(w,h,versus);drawConcertStage(c,w,preview?h:l.landscape?h:l.stageBottom+14,stage,time,reduced);
 if(!l.landscape&&!preview){c.fillStyle=ink;c.fillRect(0,l.stageBottom+4,w,h-l.stageBottom-4);}
 const beat=time/(60/stage.bpm),opponent=runs[0]?.song.opponent.findLast(n=>n.time<=time&&time<n.time+Math.max(.32,n.hold)+.28);
 for(let i=0;i<2;i++){
  const p=versus?avatars[i]:i===0?stage:avatars[0],run=runs[versus?i:0];
  const player=versus||i===1;
  const hold=player?run?.notes.find(n=>n.state==='holding'):null;
  const cue=player?(hold?{lane:hold.lane,at:hold.time,duration:hold.hold}:run&&run.last.text!=='Continue!'?{lane:run.last.lane,at:run.last.at}:{}):{lane:opponent?.lane,at:opponent?.time,duration:opponent?.hold};
  const lane=Number.isInteger(cue.lane)&&time>=cue.at&&time<cue.at+Math.max(.32,cue.duration||0)+.28?cue.lane:-1;
  const size=preview?Math.min(h*.73,w*.32):l.charSize,feet=preview?h*.88:l.feetY,x=preview?w*(i?.72:.28):l.characterX(i);
  c.fillStyle='#01051a70';c.beginPath();c.ellipse(x,feet+2,size*.30,Math.max(3,size*.035),0,0,Math.PI*2);c.fill();
  drawCharacter(c,x,feet-size,size,{...p,bpm:stage.bpm},reduced?0:beat,lane,i===1,{...cue,reduced});
  if(!preview)label(c,versus?'J'+(i+1)+' · '+p.artist:i===0?p.artist:'VOCÊ',x,feet+17,9,i===0?'#b6b0eb':'#8be4dd');
 }
 if(preview)return;
 l.tracks.forEach((track,i)=>highway(c,track,runs[i],time,i,versus,reduced));
 const song=runs[0].song,count=time<4*song.beat,response=Math.floor((time/song.beat-4)/4)%4>=2;
 const status=count?'PREPARE-SE':response?(versus?'OS DOIS JOGAM':'SUA VEZ'):'ESCUTE A BATIDA';
 label(c,status,w/2,l.statusY,10,response?'#91e3d8':'#b9bfde');
 if(count){const size=Math.min(46,w*.11);label(c,String(Math.max(1,4-Math.floor(time/song.beat))),w/2,l.noteTop+70,size,'#fff');}
}
