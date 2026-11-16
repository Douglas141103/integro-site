import test from 'node:test';
import assert from 'node:assert/strict';
import {ThemeMusic} from '../src/theme-music.js';
function setup(enabled=true){
 let hidden=false;
 const track={paused:true,currentTime:0,plays:0,pause(){this.paused=true;},play(){this.plays++;this.paused=false;return Promise.resolve();}};
 return {track,music:new ThemeMusic(track,{enabled,hidden:()=>hidden}),hide(value){hidden=value;}};
}
test('theme starts on interaction, loops and rewinds for each duel without overlapping tracks',()=>{
 const {track,music}=setup();music.play();assert.equal(track.plays,0);
 music.activate();assert.equal(track.plays,1);assert.equal(track.loop,true);assert.equal(track.volume,.38);
 track.currentTime=42;music.restart();assert.equal(track.currentTime,0);assert.equal(track.plays,1);
 music.activate();assert.equal(track.plays,1);
});
test('mute stays silent across duels; unmute resumes; background and exit stop playback',()=>{
 const {track,music,hide}=setup(false);music.activate();music.restart();assert.equal(track.plays,0);
 music.setEnabled(true);assert.equal(track.paused,false);music.setEnabled(false);music.restart();assert.equal(track.paused,true);
 music.setEnabled(true);hide(true);music.visibilityChanged();assert.equal(track.paused,true);
 music.restart();assert.equal(track.paused,true);hide(false);music.visibilityChanged();assert.equal(track.paused,false);
 music.dispose();music.activate();assert.equal(track.paused,true);
});
test('autoplay rejection is handled and a later gesture retries',async()=>{
 const {track,music}=setup();track.play=()=>Promise.reject(new Error('NotAllowedError'));
 music.activate();await new Promise(resolve=>setImmediate(resolve));
 track.play=function(){this.paused=false;return Promise.resolve();};music.activate();assert.equal(track.paused,false);
});
