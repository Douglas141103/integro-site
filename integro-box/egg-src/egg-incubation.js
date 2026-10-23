// Work seconds are saved, so upgrades can speed up eggs already in the corral.
export const INCUBATION_VERSION=1;
export const HATCH_TIMES=Object.freeze({common:60,rare:180,epic:300,legendary:600,secret:1200});
export const incubationFactor=level=>1-.2*Math.max(0,Math.min(3,Math.floor(Number(level)||0)));
export const baseHatchTime=rarity=>HATCH_TIMES[rarity]||HATCH_TIMES.common;
export function hatchSeconds(remaining,level=0,boostSeconds=0){
 const normal=Math.max(0,Number(remaining)||0)*incubationFactor(level);
 // The boost expires: do not promise 2x speed for the entire incubation.
 return Math.max(0,normal-Math.min(normal/2,Math.max(0,boostSeconds)));
}
export function formatHatchTime(seconds){const n=Math.max(0,Math.ceil((Number(seconds)||0)-1e-8));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0');}
