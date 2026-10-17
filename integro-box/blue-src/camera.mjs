import {MathUtils,Vector3} from 'three';

// Frame the collision plane, leaving the lower quarter free for thumbs.
// Physics, character scale and camera zoom remain independent.
export function cameraFrame(run,w,h,previousGround){
 const aspect=w/Math.max(1,h),portrait=aspect<1,arena=run.level.arena;
 const width=portrait?10.5:arena?Math.max(22,aspect*8.5):MathUtils.clamp(aspect*8.8,16,23);
 const height=width/aspect,half=width/2;
 const x=arena&&!portrait?run.level.length/2:MathUtils.clamp(run.player.x+run.player.facing*(portrait?1.2:2.2),half-2,run.level.length-half+2);
 // Keep the floor steady during a normal jump; track elevated platforms and falls.
 let ground=previousGround??Math.max(0,run.player.y-2.2);
 if(run.player.grounded)ground=run.player.y;
 else if(run.player.y>ground+2.4)ground=run.player.y-2.4;
 else if(run.player.y<ground-1)ground=Math.max(-2,run.player.y+1);
 return {width,height,x,groundY:ground,y:(arena?0:ground)+(portrait?.08:.15)*height/Math.cos(Math.atan2(3,18))};
}
export function placeCamera(camera,frame){
 camera.left=-frame.width/2;camera.right=frame.width/2;camera.top=frame.height/2;camera.bottom=-frame.height/2;
 camera.position.set(frame.x,frame.y+3,18);camera.lookAt(frame.x,frame.y,0);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
}
export function bossMarker(camera,boss){
 const p=new Vector3(boss.x,2.2,0).project(camera),x=(p.x+1)*50,y=(1-p.y)*50;
 return {x:MathUtils.clamp(x,8,92),y:MathUtils.clamp(y,30,68),edge:x<8?'left':x>92?'right':''};
}
