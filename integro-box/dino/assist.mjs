import {JUMP,STAGES,stageAt} from './course.mjs?v=long2';
// Buffer only the last 8 airborne ticks. The actual accepted jump is still logged
// by DinoRun.jump(), so server replay and ranked scores use unchanged physics.
export function jumpBuffer(){let until=-1;return{request(run){if(run.jump()){until=-1;return true;}if(!run.result&&run.tick+1-run.lastJump>=JUMP-8)until=run.tick+8;return false;},flush(run){if(until<run.tick||run.result){until=-1;return;}if(run.jump())until=-1;},clear(){until=-1;}};}
export function obstacleHint(run){const o=run.obstacles[run.next];if(!o||run.result)return 'Expedição';const ticks=o.center-run.tick;return ticks<48?'Prepare o pulo · '+STAGES[o.stage].obstacle:STAGES[stageAt(run.tick)].obstacle+' à frente · '+Math.max(1,Math.ceil(ticks/60))+' s';}
