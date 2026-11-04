import {Context,Gain,Limiter,Filter,FeedbackDelay,PolySynth,Synth,FMSynth,MonoSynth,MembraneSynth,NoiseSynth,Loop} from 'tone';
import {musicStep,MUSIC_TEMPOS} from './egg-music-score.js';

// Dedicated context and transport: the music never changes another game's audio.
export function createMusicEngine({rawContext,context:providedContext,mode='calm',volume=.45}){
 const context=providedContext||new Context({context:rawContext,lookAhead:.12,updateInterval:.025}),transport=context.transport,nodes=[];
 const keep=n=>{nodes.push(n);return n;},master=keep(new Gain({context,gain:0})),limiter=keep(new Limiter({context,threshold:-6})),level=keep(new Gain({context,gain:2.5}));master.connect(level);level.connect(limiter);limiter.connect(context.destination);
 const calm=keep(new Gain({context,gain:mode==='calm'?1:0})),chase=keep(new Gain({context,gain:mode==='chase'?1:0}));calm.connect(master);chase.connect(master);
 const glow=keep(new FeedbackDelay({context,delayTime:.27,feedback:.16,wet:.13}));glow.connect(calm);
 const padFilter=keep(new Filter({context,frequency:1100,type:'lowpass',rolloff:-12}));padFilter.connect(calm);
 const leadFilter=keep(new Filter({context,frequency:2900,type:'lowpass'}));leadFilter.connect(chase);
 const hatFilter=keep(new Filter({context,frequency:7000,type:'highpass'}));hatFilter.connect(chase);
 const snareFilter=keep(new Filter({context,frequency:1600,type:'bandpass',Q:.6}));snareFilter.connect(chase);
 const voices={
  pad:keep(new PolySynth({context,voice:Synth,maxPolyphony:8,options:{oscillator:{type:'triangle'},envelope:{attack:.45,decay:.3,sustain:.5,release:.8},volume:-19}})).connect(padFilter),
  bell:keep(new FMSynth({context,harmonicity:3,modulationIndex:1.3,oscillator:{type:'sine'},envelope:{attack:.008,decay:.5,sustain:.03,release:.5},modulation:{type:'sine'},modulationEnvelope:{attack:.002,decay:.22,sustain:0,release:.2},volume:-12})).connect(glow),
  calmBass:keep(new Synth({context,oscillator:{type:'sine'},envelope:{attack:.04,decay:.2,sustain:.25,release:.35},volume:-15})).connect(calm),
  lead:keep(new Synth({context,oscillator:{type:'sawtooth'},envelope:{attack:.008,decay:.12,sustain:.15,release:.09},volume:-18})).connect(leadFilter),
  chaseBass:keep(new MonoSynth({context,oscillator:{type:'sawtooth'},filter:{type:'lowpass',Q:1,rolloff:-12},envelope:{attack:.005,decay:.15,sustain:.1,release:.08},filterEnvelope:{attack:.005,decay:.15,sustain:.1,release:.1,baseFrequency:120,octaves:2.5},volume:-12})).connect(chase),
  kick:keep(new MembraneSynth({context,pitchDecay:.025,octaves:4,oscillator:{type:'sine'},envelope:{attack:.002,decay:.16,sustain:0,release:.06},volume:-9})).connect(chase),
  snare:keep(new NoiseSynth({context,noise:{type:'white'},envelope:{attack:.001,decay:.095,sustain:0,release:.035},volume:-15})).connect(snareFilter),
  hat:keep(new NoiseSynth({context,noise:{type:'white'},envelope:{attack:.001,decay:.025,sustain:0,release:.01},volume:-23})).connect(hatFilter)
 };
 let step=0,running=false,disposed=false,currentMode=mode,currentVolume=volume;
 transport.bpm.value=MUSIC_TEMPOS[mode];
 const loop=keep(new Loop({context,interval:'16n',callback:time=>{
  for(const e of musicStep(currentMode,step++)){const voice=voices[e.voice];if(e.notes===null)voice.triggerAttackRelease(e.duration,time,e.velocity);else voice.triggerAttackRelease(e.notes,e.duration,time,e.velocity);}
 }}));loop.start(0);
 function setMode(next){if(next===currentMode||disposed)return;currentMode=next;step=0;calm.gain.rampTo(next==='calm'?1:0,.65);chase.gain.rampTo(next==='chase'?1:0,.65);transport.bpm.rampTo(MUSIC_TEMPOS[next],.65);}
 function setVolume(v){if(v===currentVolume||disposed)return;currentVolume=v;if(running)master.gain.rampTo(v,.12);}
 function play(){if(disposed||running)return;running=true;master.gain.rampTo(currentVolume,.16);transport.start(context.now()+.03);}
 function pause(){if(disposed||!running)return;running=false;master.gain.rampTo(0,.06);transport.pause();}
 function dispose(){if(disposed)return;pause();disposed=true;for(const node of nodes.reverse())node.dispose();if(!providedContext)context.dispose();}
 return{setMode,setVolume,play,pause,dispose};
}
