// Original eight-bar themes, with a single melody and a bass line. The shared
// C-major/A-minor palette keeps transitions harmonious without stacked chords.
export const MUSIC_TEMPOS={calm:84,chase:144};
const calmBass=['C2','A1','F2','G2'],chaseBass=['A1','F1','C2','G1'];
const calmMelody=[['E5','G5','B5','G5'],['C5','E5','G5','E5'],['A4','C5','E5','C5'],['B4','D5','G5','D5']];
const chaseMelody=[['A4','C5','E5','C5'],['A4','C5','E5','C5'],['G4','C5','E5','G5'],['G4','B4','D5','B4']];
export function musicStep(mode,step){
 const p=step%16,bar=Math.floor(step/16)%8,h=bar%4,second=bar>=4,fill=bar===3||bar===7,events=[];
 const note=(voice,notes,duration,velocity)=>events.push({voice,notes,duration,velocity});
 const drum=(voice,velocity)=>note(voice,null,0,velocity);
 if(mode==='calm'){
  if(p===0||p===8)note('calmBass',calmBass[h],'8n',p===0?.48:.38);
  const at=[0,6,10].indexOf(p);if(at>=0)note('bell',calmMelody[h][at+(second?1:0)],'8n',at===0?.5:.4);
  if(p===0||p===8)drum('kick',p===0?.30:.24);
  if(p===4||p===12)drum('rim',.25);
  if(p%4===2)drum('hat',.12);
  if(p%4===3)drum('shaker',.085);
  if(fill&&p===15)drum('rim',.12);
 }else{
  if([0,3,8,11].includes(p))note('chaseBass',chaseBass[h],'16n',p%8===0?.58:.43);
  const at=[0,6,8,14].indexOf(p);if(at>=0&&!(fill&&p===14))note('lead',chaseMelody[h][second?(at+2)%4:at],'16n',at%2===0?.46:.35);
  if(p%4===0)drum('kick',p===0?.68:.58);
  if(p===4||p===12)drum('snare',p===12?.53:.48);
  if(p%2===0){const open=p===14&&bar%2===1&&!fill;drum(open?'openHat':'hat',p%4===2?(open?.18:.22):.11);}
  if(p%2===1)drum('shaker',.09);
  if(bar%2===1&&p===11)drum('snare',.12);
  if(fill&&p===13)drum('snare',.24);
  if(fill&&(p===14||p===15))drum('tom',p===14?.42:.30);
 }
 return events;
}
