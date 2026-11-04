// Original one-shot drum sounds, generated once per audio context. Noise,
// membrane pitch drops and short transients give the rhythm a clear drum attack.
// No recordings or downloads are needed, and every hit has its own gain envelope.
export function createDrumSamples(sampleRate){
 const specs={kick:.46,snare:.25,hat:.085,openHat:.26,shaker:.09,tom:.27,rim:.10};
 const samples={};let seed=1731;
 const noise=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2147483648-1;};
 for(const [name,duration]of Object.entries(specs)){
  const data=new Float32Array(Math.ceil(sampleRate*duration));let low=0,high=0,phase=0;
  const lowCoeff=1-Math.exp(-2*Math.PI*700/sampleRate),highCoeff=1-Math.exp(-2*Math.PI*4800/sampleRate);
  for(let i=0;i<data.length;i++){
   const t=i/sampleRate,n=noise();low+=lowCoeff*(n-low);high+=highCoeff*(n-high);const bright=n-high,band=high-low;let value=0;
   if(name==='kick'){phase+=2*Math.PI*(49+110*Math.exp(-t*48))/sampleRate;value=Math.sin(phase)*Math.exp(-t*14)+bright*.12*Math.exp(-t*180);}
   if(name==='snare')value=(Math.sin(2*Math.PI*185*t)*.42+Math.sin(2*Math.PI*330*t)*.17)*Math.exp(-t*32)+band*1.2*Math.exp(-t*24)+bright*.28*Math.exp(-t*65);
   if(name==='hat'||name==='openHat')value=bright*Math.exp(-t*(name==='hat'?75:19));
   if(name==='shaker')value=band*Math.sin(Math.PI*Math.min(1,t/.07))*Math.exp(-t*35);
   if(name==='tom'){phase+=2*Math.PI*(102+75*Math.exp(-t*35))/sampleRate;value=Math.sin(phase)*Math.exp(-t*20)+band*.12*Math.exp(-t*65);}
   if(name==='rim')value=(Math.sin(2*Math.PI*440*t)*.6+Math.sin(2*Math.PI*1280*t)*.3+band*.6)*Math.exp(-t*85);
   const attack=Math.min(1,t/.001),tail=Math.min(1,(data.length-1-i)/(sampleRate*.008));data[i]=value*attack*tail;
  }
  const peak=data.reduce((m,v)=>Math.max(m,Math.abs(v)),0);for(let i=0;i<data.length;i++)data[i]*=.85/peak;
  samples[name]=data;
 }
 return samples;
}
