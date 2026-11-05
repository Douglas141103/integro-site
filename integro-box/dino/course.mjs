// One tick is 1/60 s. The server replays the same jump and obstacle windows.
export const STAGE_TICKS = 2400;
export const STAGES = [
  {name:'Dunas do Sol', sky:'#fff2cf', far:'#dfc890', near:'#c6a46b', ink:'#473e30', path:'#f2dfa7', shape:'dunes', obstacle:'cacto'},
  {name:'Bosque das Samambaias', sky:'#e2edda', far:'#a8cbb3', near:'#80a58a', ink:'#294d43', path:'#c9d5a0', shape:'trees', obstacle:'tronco'},
  {name:'Cânion Vermelho', sky:'#ffe1c4', far:'#e9ad8e', near:'#cc826c', ink:'#603c3b', path:'#efc196', shape:'mesa', obstacle:'rocha'},
  {name:'Gruta de Cristal', sky:'#dfddf4', far:'#b3acd5', near:'#8e88b6', ink:'#42375d', path:'#c7bfdd', shape:'crystal', obstacle:'cristal'},
  {name:'Vulcão de Cinzas', sky:'#f3c1a5', far:'#cf8d7c', near:'#a76461', ink:'#4d333c', path:'#cb9683', shape:'volcano', obstacle:'lava'},
  {name:'Vale da Lua', sky:'#26324a', far:'#394764', near:'#525d79', ink:'#e4e5db', path:'#778098', shape:'moon', obstacle:'meteorito'}
];
export const FINISH = STAGES.length * STAGE_TICKS;
export const JUMP = 52;
export const stageAt = tick => Math.min(STAGES.length-1, Math.floor(tick/STAGE_TICKS));
export function altitude(age) {
  if (age <= 0 || age >= JUMP) return 0;
  return Math.floor(512 * age * (JUMP-age) / (JUMP*JUMP));
}
export function makeCourse(seed) {
  const obstacles = [];
  for (let stage = 0; stage < STAGES.length; stage++) {
    const count = 10 + stage*2;
    for (let i = 0; i < count; i++) {
      const variant = (seed + stage*17 + i*7) % 3;
      const center = stage*STAGE_TICKS + 140 + Math.floor(i*2170/(count-1)) + (seed+stage*31+i*13)%23;
      obstacles.push({stage, center, half:6+variant, height:39+variant*8, amber:(i+stage)%2===0});
    }
  }
  return obstacles;
}
export const scoreOf = (tick, clears, amber) =>
  Math.floor(tick/6) + clears*25 + amber*50 + Math.floor(tick/STAGE_TICKS)*100;

export class DinoRun {
  constructor(seed) {
    this.obstacles = makeCourse(seed);
    this.tick = this.clears = this.amber = this.next = 0;
    this.lastJump = -JUMP;
    this.jumps = [];
    this.result = null;
  }
  get height() { return altitude(this.tick-this.lastJump); }
  get score() { return scoreOf(this.tick,this.clears,this.amber); }
  jump() {
    const start = this.tick+1;
    if (this.result || start-this.lastJump < JUMP) return false;
    this.lastJump = start;
    this.jumps.push(start);
    return true;
  }
  advance() {
    if (this.result) return;
    this.tick++;
    const obstacle = this.obstacles[this.next];
    if (obstacle) {
      const offset = this.tick - obstacle.center;
      if (Math.abs(offset) <= obstacle.half && this.height < obstacle.height) {
        this.result = 'collision';
        return;
      }
      if (offset === 0 && obstacle.amber && this.height >= 116) this.amber++;
      if (offset === obstacle.half+1) {
        this.clears++;
        this.next++;
      }
    }
    if (this.tick === FINISH) this.result = 'win';
  }
}
