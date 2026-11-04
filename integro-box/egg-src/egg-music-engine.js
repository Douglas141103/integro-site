import {Context,Gain,Limiter,Filter,Synth,MonoSynth,Loop} from 'tone';
import {musicStep,MUSIC_TEMPOS} from './egg-music-score.js';
import {createDrumSamples} from './egg-music-drums.js';

// Dedicated context and transport: the music never changes another game's audio.
export function createMusicEngine({rawContext,context:providedContext,mode='calm',volume=.45}){
 const context=providedContext||new Context({context:rawContext,lookAhead:.12,updateInterval:.025}),transport=context.transport,nodes=[];
 const keep=n=>{nodes.push(n);return n;},master=keep(new Gain({context,gain:0})),limiter=keep(new Limiter({context,threshold:-6})),level=keep(new Gain({context,gain:2.5}));master.connect(level);level.connect(limiter);limiter.connect(context.destination);
 const calm=keep(new Gain({context,gain:mode==='calm'?1:0})),chase=keep(new Gain({context,gain:mode==='chase'?1:0}));calm.connect(master);chase.connect(master);
 const leadFilter=keep(new Filter({context,frequency:2100,type:'lowpass'}));leadFilter.connect(chase);
 const voices={
  bell:keep(new Synth({context,oscillator:{type:'triangle'},envelope:{attack:.008,decay:.16,sustain:.08,release:.12},volume:-15})).connect(calm),
  calmBass:keep(new Synth({context,oscillator:{type:'sine'},envelope:{attack:.012,decay:.13,sustain:.16,release:.1},volume:-15})).connect(calm),
  lead:keep(new Synth({context,oscillator:{type:'triangle'},envelope:{attack:.006,decay:.10,sustain:.12,release:.065},volume:-12})).connect(leadFilter),
  chaseBass:keep(new MonoSynth({context,oscillator:{type:'triangle'},filter:{type:'lowpass',Q:.6,rolloff:-12},envelope:{attack:.005,decay:.12,sustain:.08,release:.06},filterEnvelope:{attack:.005,decay:.12,sustain:.1,release:.07,baseFrequency:100,octaves:2},volume:-11})).connect(chase)
 };
 const raw=context.rawContext,hits=new Set(),buffers={};
 for(const [name,data]of Object.entries(createDrumSamples(context.sampleRate))){const buffer=context.createBuffer(1,data.length,context.sampleRate);buffer.copyToChannel(data,0);buffers[name]=buffer;}
 function drum(name,time,velocity){
  const source=raw.createBufferSource(),gain=raw.createGain(),hit={source,gain};source.buffer=buffers[name];gain.gain.value=velocity*.62;
  source.connect(gain);gain.connect((currentMode==='calm'?calm:chase).input);hits.add(hit);
  source.onended=()=>{source.disconnect();gain.disconnect();hits.delete(hit);};source.start(time);
 }
 let step=0,running=false,disposed=false,currentMode=mode,currentVolume=volume;
 transport.bpm.value=MUSIC_TEMPOS[mode];
 const loop=keep(new Loop({context,interval:'16n',callback:time=>{
  for(const e of musicStep(currentMode,step++)){if(e.notes===null)drum(e.voice,time,e.velocity);else voices[e.voice].triggerAttackRelease(e.notes,e.duration,time,e.velocity);}
 }}));loop.start(0);
 function setMode(next){if(next===currentMode||disposed)return;currentMode=next;step=0;calm.gain.rampTo(next==='calm'?1:0,.65);chase.gain.rampTo(next==='chase'?1:0,.65);transport.bpm.rampTo(MUSIC_TEMPOS[next],.65);}
 function setVolume(v){if(v===currentVolume||disposed)return;currentVolume=v;if(running)master.gain.rampTo(v,.12);}
 function play(){if(disposed||running)return;running=true;master.gain.rampTo(currentVolume,.16);transport.start(context.now()+.03);}
 function pause(){if(disposed||!running)return;running=false;master.gain.rampTo(0,.06);transport.pause();}
 function dispose(){if(disposed)return;pause();disposed=true;for(const {source,gain}of hits){source.onended=null;source.stop();source.disconnect();gain.disconnect();}hits.clear();for(const node of nodes.reverse())node.dispose();if(!providedContext)context.dispose();}
 return{setMode,setVolume,play,pause,dispose};
}
