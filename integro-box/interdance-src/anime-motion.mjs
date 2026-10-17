// Only character rendering is capped. Audio, input and judgment use the audio clock.
export const POSE_FPS = 30;
const clamp = (v, a=0, b=1) => Math.max(a, Math.min(b, v));
const smooth = v => {const t=clamp(v);return t*t*(3-2*t);};

// A short attack and a longer release keep a tap from snapping into a rigid pose.
export function danceAccent(seconds, lane, cue={}) {
  if(lane<0||lane>3)return 0;
  if(!Number.isFinite(cue.at))return 1;
  const age=seconds-cue.at;
  if(age<0)return 0;
  const duration=Math.max(.32,Number(cue.duration)||0);
  return smooth(age/.085)*(1-smooth((age-duration)/.28));
}

export function animePose(seconds, bpm=140, lane=-1, reduced=false, cue={}) {
  const stamp=reduced?0:Math.max(0,seconds),beat=stamp*bpm/60;
  const swing=Math.sin(beat*Math.PI/2),pulse=(1-Math.cos(beat*Math.PI*2))/2;
  const accent=reduced?0:danceAccent(stamp,lane,cue);
  const down=lane===1?accent:0,up=lane===2?accent:0;
  const side=lane===0?-accent:lane===3?accent:0;
  const energy=reduced?0:1;
  const feet={};
  // Alternating step-touch. One foot is always supporting the body; each swing
  // returns to the same planted position with zero velocity at both endpoints.
  for(const [name,sign,offset] of [['L',-1,2],['R',1,0]]) {
    const phase=((beat-offset)%4+4)%4;
    const arc=phase<1.5?Math.sin(Math.PI*phase/1.5)**2:0;
    const lift=arc*energy;
    feet[name]={x:sign*(.205+.12*lift),y:.1775+lift*(.12+.07*up),
      z:.045+lift*.09,yaw:sign*(.06+lift*.13),pitch:-.12*lift,toe:-.22*lift,lift};
  }
  return {stamp,beat,accent,feet,
    hipX:-swing*.085*energy+side*.045,
    hipY:.965-.052*pulse*energy-.105*down,
    hipZ:-.035*down,
    hipRoll:swing*.065*energy-side*.07,
    hipTurn:Math.sin(beat*Math.PI/2-.35)*.09*energy,
    spineBend:.05+Math.sin(beat*Math.PI*2-.4)*.045*energy+down*.15,
    spineRoll:-swing*.055*energy+side*.08,
    chestTurn:-Math.sin(beat*Math.PI/2-.2)*.14*energy+side*.16,
    chestRoll:-swing*.035*energy,
    neckTurn:Math.sin(beat*Math.PI/2-.45)*.06*energy,
    headNod:Math.sin(beat*Math.PI*2-.55)*.045*energy,
    leftArm:-.30-swing*.25*energy-Math.max(0,-side)*.66-up*1.38-down*.16,
    rightArm:.30-swing*.25*energy+Math.max(0,side)*.66+up*1.38+down*.16,
    leftShoulder:-.16-Math.max(0,swing)*.26*energy-down*.3,
    rightShoulder:-.16-Math.max(0,-swing)*.26*energy-down*.3,
    leftElbow:-.55-(.5+.5*Math.sin(beat*Math.PI/2-.45))*.55*energy-up*.22,
    rightElbow:-.55-(.5-.5*Math.sin(beat*Math.PI/2-.45))*.55*energy-up*.22,
    leftWrist:Math.sin(beat*Math.PI/2-.7)*.18*energy-up*.2,
    rightWrist:-Math.sin(beat*Math.PI/2-.7)*.18*energy-up*.2,
    clavicleLift:up*.18,
    hairLag:Math.sin(beat*Math.PI/2-.65)*.075*energy,
    blink:!reduced&&stamp%4.7>4.54,singing:accent>.35,
  };
}

// Shared by rendering and layout tests; keeps character silhouettes off the notes.
export function versusLayout(width,height) {
  const portrait=width<=600&&height>width, short=height<500;
  const characterSize=portrait?Math.min(100,width*.23,Math.max(36,(height-420)*.35)):Math.min(height*.34,width*.15);
  const top=portrait?Math.max(124+characterSize*1.04+28,Math.min(252,height*.42)):short?128:164;
  return {portrait,top,bottom:height-(portrait?169:109),characterSize,
    characterY:portrait?124:height*.47,
    boardWidth:portrait?width/2-24:Math.min(width*.32,270,width/2-characterSize*.92-24),
    characterX:player=>portrait?width*(player?.75:.25):width*(player?.93:.07)};
}
