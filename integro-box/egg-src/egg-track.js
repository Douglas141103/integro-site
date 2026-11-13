import {HEAVEN,inHeaven} from './egg-heaven.js';
// Shared lateral dimensions: widening does not change world length or movement speed.
export const TRACK_SCALE=3;
export const TRACK_HALF_WIDTH=4.75*TRACK_SCALE;
export const TRACK_WIDTH=TRACK_HALF_WIDTH*2;
export const TRACK_SIDE_OFFSET=TRACK_HALF_WIDTH-4.75;
export const TRACK_GROUND_WIDTH=TRACK_WIDTH+18.5;
export const TRACK_GATE_HALF_WIDTH=TRACK_HALF_WIDTH+1.25;
export const TRACK_GATE_WIDTH=TRACK_GATE_HALF_WIDTH*2+.6;
export const trackSideX=x=>x+Math.sign(x)*TRACK_SIDE_OFFSET;

export const BASE_HALF_WIDTH=9.4,PLAYER_RADIUS=.4;
export function corridorHalfWidth(z){const t=Math.max(0,Math.min(1,(z-3)/5));return TRACK_HALF_WIDTH+(BASE_HALF_WIDTH-TRACK_HALF_WIDTH)*t;}
export function constrainTrackPosition(p,radius=PLAYER_RADIUS,baseEnd=50){
 p.z=inHeaven(p)?Math.max(HEAVEN.end+.8,Math.min(HEAVEN.start-.8,p.z)):Math.max(-48*HEAVEN.world+.8,Math.min(baseEnd,p.z));
 const limit=corridorHalfWidth(p.z)-radius;p.x=Math.max(-limit,Math.min(limit,p.x));return p;
}
