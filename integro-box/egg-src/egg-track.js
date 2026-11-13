// Shared lateral dimensions: widening does not change world length or movement speed.
export const TRACK_SCALE=3;
export const TRACK_HALF_WIDTH=4.75*TRACK_SCALE;
export const TRACK_WIDTH=TRACK_HALF_WIDTH*2;
export const TRACK_SIDE_OFFSET=TRACK_HALF_WIDTH-4.75;
export const TRACK_GROUND_WIDTH=TRACK_WIDTH+18.5;
export const TRACK_GATE_HALF_WIDTH=TRACK_HALF_WIDTH+1.25;
export const TRACK_GATE_WIDTH=TRACK_GATE_HALF_WIDTH*2+.6;
export const trackSideX=x=>x+Math.sign(x)*TRACK_SIDE_OFFSET;
