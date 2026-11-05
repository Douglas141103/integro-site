// Original eight-bar adventure theme, synthesized locally: no downloads or API calls.
const KEY='dino-music-enabled';
const roots=[48,45,41,43,48,45,41,43];
const melody=[
  [72,76,79,76],[76,72,69,72],[69,72,77,76],[74,71,67,71],
  [76,79,84,79],[81,79,76,72],[77,76,72,69],[71,74,79,72]
];
export function musicStep(stage,step){
  const bar=Math.floor(step/16)%8, beat=step%16, notes=[];
  if(beat%4===0)notes.push({voice:'melody',note:melody[bar][beat/4],length:.34});
  if([0,6,8,14].includes(beat))notes.push({voice:'bass',note:roots[bar]+(beat===14?7:0),length:.19});
  if(beat===0||beat===8||(stage>=4&&beat===10))notes.push({voice:'kick'});
  if(beat===4||beat===12)notes.push({voice:'snare'});
  if(beat%2===0)notes.push({voice:'hat'});
  return notes;
}

export function createDinoMusic({storage,createContext=()=>{
  const Audio=globalThis.window?.AudioContext||globalThis.window?.webkitAudioContext;
  return Audio?new Audio({latencyHint:'playback'}):null;
},schedule=setInterval,cancel=clearInterval}={}){
  let enabled=true,wanted=false,stage=0,ctx=null,master=null,noise=null,timer=null,step=0,next=0;
  const sources=new Set();
  try{enabled=storage?.getItem(KEY)!=='false';}catch{}
  function track(source,gain){
    sources.add(source);source.connect(gain);gain.connect(master);
    source.onended=()=>{sources.delete(source);source.disconnect();gain.disconnect();};
  }
  function tone(note,time,length,voice){
    const osc=ctx.createOscillator(),gain=ctx.createGain(),bass=voice==='bass';
    osc.type=bass?'sine':'triangle';osc.frequency.setValueAtTime(440*2**((note-69)/12),time);
    gain.gain.setValueAtTime(0,time);gain.gain.linearRampToValueAtTime(bass?.30:.15,time+.008);
    gain.gain.exponentialRampToValueAtTime(.001,time+length);
    track(osc,gain);osc.start(time);osc.stop(time+length+.02);
  }
  function drum(voice,time){
    const gain=ctx.createGain();
    if(voice==='kick'){
      const osc=ctx.createOscillator();osc.type='sine';
      osc.frequency.setValueAtTime(135,time);osc.frequency.exponentialRampToValueAtTime(42,time+.14);
      gain.gain.setValueAtTime(.55,time);gain.gain.exponentialRampToValueAtTime(.001,time+.18);
      track(osc,gain);osc.start(time);osc.stop(time+.2);
    }else{
      const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),hat=voice==='hat';
      source.buffer=noise;filter.type='highpass';filter.frequency.value=hat?6500:1400;
      const length=hat?.045:.12;gain.gain.setValueAtTime(hat?.055:.14,time);
      gain.gain.exponentialRampToValueAtTime(.001,time+length);
      sources.add(source);source.connect(filter);filter.connect(gain);gain.connect(master);
      source.onended=()=>{sources.delete(source);source.disconnect();filter.disconnect();gain.disconnect();};
      source.start(time);source.stop(time+length);
    }
  }
  function pump(){
    if(!wanted||!enabled||ctx?.state!=='running')return;
    // Skip stale beats after a stalled frame instead of playing them all at once.
    if(next<ctx.currentTime-.1)next=ctx.currentTime+.02;
    while(next<ctx.currentTime+.1){
      for(const event of musicStep(stage,step)){
        if(event.note)tone(event.note,next,event.length,event.voice);else drum(event.voice,next);
      }
      step=(step+1)%128;next+=60/(112+stage*2)/4;
    }
  }
  function start(){
    if(!enabled||!wanted||ctx?.state!=='running'||timer!==null)return;
    master.gain.setValueAtTime(.55,ctx.currentTime);next=ctx.currentTime+.025;
    pump();timer=schedule(pump,25);
  }
  function stop(){
    if(timer!==null){cancel(timer);timer=null;}
    if(master)master.gain.setValueAtTime(0,ctx.currentTime);
    for(const source of sources){try{source.stop();}catch{}}
    sources.clear();
    if(ctx?.state==='running')void ctx.suspend().catch(()=>{});
  }
  async function unlock(){
    if(!enabled)return false;
    try{
      if(!ctx){
        ctx=createContext();if(!ctx)return false;
        master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);
        noise=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*.2),ctx.sampleRate);
        const data=noise.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
      }
      // Invoked synchronously from touch/click/key input, before the start RPC.
      await ctx.resume();
      if(wanted&&enabled)start();else stop();
      return true;
    }catch{return false;}
  }
  return {
    unlock,
    setPlaying(value){wanted=!!value;if(wanted)start();else stop();},
    setStage(value){stage=Math.max(0,Math.min(5,value));},
    setEnabled(value){enabled=!!value;try{storage?.setItem(KEY,String(enabled));}catch{}if(!enabled)stop();},
    get enabled(){return enabled;},
    get playing(){return timer!==null;}
  };
}
