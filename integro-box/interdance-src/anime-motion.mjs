// Only the drawing clock is stepped. Never use this clock for audio or judgment.
export const POSE_FPS = 12;
export function animePose(seconds, bpm = 140, lane = -1, reduced = false) {
  const stamp = reduced ? 0 : Math.floor(Math.max(0, seconds) * POSE_FPS) / POSE_FPS;
  const beat = stamp * bpm / 60, swing = Math.sin(beat * Math.PI), bounce = Math.sin(beat * Math.PI * 2);
  const action = !reduced && lane >= 0;
  const crouch = action && lane === 1 ? .14 : 0, lift = action && lane === 2 ? .12 : 0;
  return {stamp, beat, sway:reduced ? 0 : swing*.075,
    hipY:.93 + (reduced ? 0 : Math.abs(bounce)*.035) - crouch + lift,
    lean:action ? [-.18,.06,-.035,.18][lane] : swing*.035,
    turn:reduced ? .12 : .12+Math.sin(beat*Math.PI*.5)*.1,
    squash:1-crouch*.45+lift*.28,
    leftArm:action ? [-1.05,-.3,-2.25,.42][lane] : -.36+swing*.3,
    rightArm:action ? [.4,.2,2.05,1.1][lane] : .38+swing*.3,
    leftElbow:action ? -.95 : -.25-Math.max(0,swing)*.55,
    rightElbow:action ? -1.2 : -.45-Math.max(0,-swing)*.55,
    leftKnee:reduced ? .12 : .14+Math.max(0,swing)*.32+crouch*2,
    rightKnee:reduced ? .12 : .14+Math.max(0,-swing)*.32+crouch*2,
    hairLag:reduced ? 0 : Math.sin((beat-.17)*Math.PI)*.08,
    blink:!action && stamp%4.7>4.54, singing:action,
    stretch:action && (lane===0||lane===3) ? 1.09 : 1
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
