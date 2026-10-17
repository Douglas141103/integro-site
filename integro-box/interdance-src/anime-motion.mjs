import {HIP_HEIGHT} from './dance-proportions.mjs';
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

export const DANCE_ROUTINES = Object.freeze(['step-touch','hand-on-hip','diagonal-reach','squat','disco-reach','step-turn','front-tap','body-wave','knee-lift']);
export const DANCE_CYCLE_BEATS=DANCE_ROUTINES.length*8;
// Eight-count phrases. Every phrase starts/ends on the same grounded stance;
// upper-body transitions overlap for 3/4 beat, while steps retain their contacts.
const STEPS = {
  'step-touch':[.13,.04,.105,-.10], 'diagonal-reach':[.10,.19,.085,-.13], 'front-tap':[.025,.25,.055,-.28],
  'body-wave':[.075,-.025,.075,-.08], 'disco-reach':[.12,.10,.09,-.12], 'knee-lift':[.035,.11,.205,-.20],
  'hand-on-hip':[.08,.025,.055,-.08],squat:[0,0,0,0],'step-turn':[0,0,0,0],
};
function phrasePose(name,beat) {
  const swing=Math.sin(beat*Math.PI/2),wave=Math.sin(beat*Math.PI);
  const left=(1+swing)/2,right=1-left;
  const p={armL:0,armR:0,shoulderL:0,shoulderR:0,elbowL:0,elbowR:0,
    torso:0,turn:0,roll:0,upper:0,wristL:0,wristR:0,curl:.2,point:0,hipHand:0,squat:0,sway:0};
  const local=beat%8,envelope=smooth(local/.65)*(1-smooth((local-7)/.75));
  switch(name){
    case 'step-touch': p.armL=-.12*left;p.armR=.12*right;p.turn=-.06*swing;break;
    case 'diagonal-reach': p.armL=-.72*left;p.armR=.72*right;p.elbowL=.28*left;p.elbowR=.28*right;p.turn=.13*swing;p.roll=.055*swing;p.point=left;break;
    case 'front-tap': p.shoulderL=-.55*right;p.shoulderR=-.55*left;p.elbowL=.3*right;p.elbowR=.3*left;p.curl=.7;p.torso=.045;break;
    case 'body-wave': p.armL=-.3;p.armR=.3;p.elbowL=-.22*left;p.elbowR=-.22*right;p.torso=.13*wave;p.upper=.12*Math.sin(beat*Math.PI-.9);p.wristL=.24*wave;p.wristR=-.24*wave;break;
    case 'disco-reach': p.armL=-1.15*left;p.armR=1.15*right;p.elbowL=.4*left;p.elbowR=.4*right;p.roll=.065*swing;p.turn=.1*swing;p.point=left;p.wristL=-.18*left;p.wristR=.18*right;break;
    case 'knee-lift': p.shoulderL=-.52*right;p.shoulderR=-.52*left;p.elbowL=-.22*right;p.elbowR=-.22*left;p.curl=.58;p.turn=-.12*swing;break;
    case 'hand-on-hip': p.hipHand=envelope;p.sway=.04*swing*envelope;p.roll=.075*swing*envelope;p.armR=.35+.3*right;p.wristR=.2*wave;break;
    case 'squat': p.squat=Math.sin(local*Math.PI/4)**2;p.torso=.14*p.squat;p.shoulderL=-.4*p.squat;p.shoulderR=-.4*p.squat;p.elbowL=-.15*p.squat;p.elbowR=-.15*p.squat;break;
    case 'step-turn': p.shoulderL=-.18;p.shoulderR=-.18;p.elbowL=-.35;p.elbowR=-.35;p.curl=.5;break;
  }
  return p;
}

// Four quarter-turns around alternating support feet. The final stance equals
// the initial stance, so the full rotation never accumulates stage drift.
export function turnFootwork(beat){
  const quarter=Math.min(3,Math.floor(beat/2)),u=clamp((beat-quarter*2)/1.65),angle=smooth(u)*Math.PI/2;
  const points={L:{x:-.205,z:.045},R:{x:.205,z:.045}};
  const rotate=(moving,support,a)=>{
    const p=points[moving],pivot=points[support],x=p.x-pivot.x,z=p.z-pivot.z;
    p.x=pivot.x+x*Math.cos(a)+z*Math.sin(a);p.z=pivot.z-x*Math.sin(a)+z*Math.cos(a);
  };
  for(let i=0;i<quarter;i++)rotate(i%2?'L':'R',i%2?'R':'L',Math.PI/2);
  const moving=quarter%2?'L':'R',support=quarter%2?'R':'L';rotate(moving,support,angle);
  const facing=quarter*Math.PI/2+angle,feet={},arc=u>0&&u<1?Math.sin(Math.PI*u)**2:0;
  for(const [side,sign]of [['L',-1],['R',1]]){
    const lift=side===moving?arc:0;
    feet[side]={...points[side],y:.1775+lift*.10,yaw:facing+sign*.06,pitch:-.1*lift,toe:-.15*lift,lift};
  }
  return {facing,feet,travelX:(points.L.x+points.R.x)/2-Math.sin(facing)*.045,
    travelZ:(points.L.z+points.R.z)/2-Math.cos(facing)*.045};
}

export function animePose(seconds, bpm=140, lane=-1, reduced=false, cue={}) {
  const stamp=reduced?0:Math.max(0,seconds),beat=stamp*bpm/60;
  const swing=Math.sin(beat*Math.PI/2),pulse=(1-Math.cos(beat*Math.PI*2))/2;
  const phrase=Math.floor(beat/8)%DANCE_ROUTINES.length,phraseBeat=beat%8;
  const routine=DANCE_ROUTINES[phrase],turning=routine==='step-turn'&&!reduced;
  const next=phrasePose(routine,beat),prior=phrasePose(DANCE_ROUTINES[(phrase+DANCE_ROUTINES.length-1)%DANCE_ROUTINES.length],beat);
  const mix=beat<.75&&phrase===0?1:smooth(phraseBeat/.75),move={};
  for(const key of Object.keys(next))move[key]=prior[key]+(next[key]-prior[key])*mix;
  const turnEnvelope=turning?smooth(phraseBeat/.5)*(1-smooth((phraseBeat-7.4)/.5)):0;
  const accent=reduced?0:danceAccent(stamp,lane,cue)*(1-.65*turnEnvelope);
  const down=lane===1?accent:0,up=lane===2?accent:0;
  const side=lane===0?-accent:lane===3?accent:0;
  const energy=reduced?0:1;
  let feet={};
  // One supporting foot at all times. No root translation is applied to planted
  // targets, even when the dancer turns, leans or changes choreography.
  const [stepX,stepZ,stepHeight,stepPitch]=STEPS[routine];
  for(const [name,sign,offset] of [['L',-1,2],['R',1,0]]) {
    const phase=((beat-offset)%4+4)%4;
    const arc=phase<1.5?Math.sin(Math.PI*phase/1.5)**2:0;
    const lift=routine==='squat'?0:arc*energy;
    feet[name]={x:sign*(.205+stepX*lift),y:.1775+lift*(stepHeight+.035*up),
      z:.045+lift*stepZ,yaw:sign*(.06+lift*.13),pitch:stepPitch*lift,toe:-.22*lift,lift};
  }
  const rotation=turning?turnFootwork(phraseBeat):{facing:0,travelX:0,travelZ:0};
  if(turning)feet=rotation.feet;
  const squat=move.squat*energy;
  // Weight shifts towards the supporting leg; a raised knee gets a deeper plié.
  const support=feet.L.lift-feet.R.lift;
  return {stamp,beat,accent,feet,routine,squat,hipHand:move.hipHand*energy,
    facing:rotation.facing,travelX:rotation.travelX,travelZ:rotation.travelZ,
    rootTurn:Math.sin(beat*Math.PI/4)*.035*energy,
    hipX:(support*.095-swing*.025+move.sway)*energy+side*.035,
    hipY:HIP_HEIGHT-.048*pulse*energy-.095*down*(1-.6*squat)-Math.max(feet.L.lift,feet.R.lift)*.025-.22*squat,
    hipZ:-.035*down-.06*squat,
    hipRoll:swing*.065*energy-side*.07,
    hipTurn:Math.sin(beat*Math.PI/2-.35)*.09*energy,
    spineBend:.04+(Math.sin(beat*Math.PI*2-.4)*.035+move.torso)*energy+down*.13,
    spineRoll:(-swing*.055+move.roll)*energy+side*.06,
    chestTurn:(-Math.sin(beat*Math.PI/2-.2)*.12+move.turn)*energy+side*.13,
    chestRoll:-swing*.035*energy,
    upperBend:move.upper*energy,
    upperTurn:Math.sin(beat*Math.PI/2-.65)*.065*energy,
    neckTurn:Math.sin(beat*Math.PI/2-.45)*.06*energy,
    headNod:Math.sin(beat*Math.PI*2-.55)*.045*energy,
    leftArm:clamp(-.30+(-swing*.20+move.armL)*energy-Math.max(0,-side)*.55-up*1.2-down*.16,-1.9,-.08),
    rightArm:clamp(.30+(-swing*.20+move.armR)*energy+Math.max(0,side)*.55+up*1.2+down*.16,.08,1.9),
    leftShoulder:-.16+(-Math.max(0,swing)*.20+move.shoulderL)*energy-down*.22,
    rightShoulder:-.16+(-Math.max(0,-swing)*.20+move.shoulderR)*energy-down*.22,
    leftElbow:-.55+(-(.5+.5*Math.sin(beat*Math.PI/2-.45))*.4+move.elbowL)*energy-up*.15,
    rightElbow:-.55+(-(.5-.5*Math.sin(beat*Math.PI/2-.45))*.4+move.elbowR)*energy-up*.15,
    leftWrist:(Math.sin(beat*Math.PI/2-.7)*.18+move.wristL)*energy-up*.15,
    rightWrist:(-Math.sin(beat*Math.PI/2-.7)*.18+move.wristR)*energy-up*.15,
    leftCurl:.22+move.curl*.6*energy,
    rightCurl:.76+Math.sin(beat*Math.PI/2)*.045*energy,
    fingerSpread:(.08+.06*Math.sin(beat*Math.PI/2))*energy,
    leftPoint:Math.max(move.point*energy,up,Math.max(0,-side)),
    eyeLook:Math.sin(beat*Math.PI/4-.3)*.065*energy+side*.04,
    jawOpen:(.025+.045*pulse)*energy+accent*.075,
    clavicleLift:up*.13+Math.max(-move.armL,move.armR)*.055*energy,
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
