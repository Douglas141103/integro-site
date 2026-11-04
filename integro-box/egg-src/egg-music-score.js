// Original two-theme score. Both use the C-major/A-minor note family so the
// short transition stays harmonious. Sixteenth-note grids form eight-bar loops.
export const MUSIC_TEMPOS={calm:84,chase:144};
const calmChords=[['C4','E4','G4','B4'],['A3','C4','E4','G4'],['F3','A3','C4','E4'],['G3','B3','D4','A4']];
const calmBass=['C2','A1','F2','G2'],chaseBass=['A1','F1','C2','G1'];
const calmMelody=[['E5','G5','B5','G5','E5','D5'],['C5','E5','G5','E5','D5','C5'],['A4','C5','E5','G5','E5','C5'],['B4','D5','G5','A5','G5','D5']];
const chaseArps=[['A4','C5','E5','A5'],['F4','A4','C5','E5'],['G4','C5','E5','G5'],['G4','B4','D5','G5']];
export function musicStep(mode,step){
 const p=step%16,bar=Math.floor(step/16)%8,h=bar%4,second=bar>=4,events=[];
 const note=(voice,notes,duration,velocity)=>events.push({voice,notes,duration,velocity});
 if(mode==='calm'){
  if(p===0){note('pad',calmChords[h],'1n',.24);note('calmBass',calmBass[h],'2n',.38);}
  if(p===8)note('calmBass',calmBass[h],'4n',.24);
  const beats=second?[0,3,6,8,11,14]:[0,4,8,12];const at=beats.indexOf(p);
  if(at>=0)note('bell',calmMelody[h][at],'8n',p===0?.42:.29);
  if(second&&p===15&&h===3)note('bell','B4','16n',.22);
 }else{
  if(p%4===0)note('kick','C1','16n',.8);
  if(p===4||p===12)note('snare',null,'32n',.42);
  if(p%2===0||second&&p>=14)note('hat',null,'64n',p%4===2?.24:.12);
  if([0,3,6,8,10,14].includes(p))note('chaseBass',chaseBass[h],'16n',p%4===0?.65:.44);
  if(p%2===0||second&&p===15){const pattern=second?[0,2,1,3,2,1,3,2]:[0,1,2,1,3,2,1,2];note('lead',chaseArps[h][pattern[Math.floor(p/2)%8]],'16n',p%4===0?.4:.29);}
  if(second&&h===3&&p===15)note('snare',null,'64n',.24);
 }
 return events;
}
