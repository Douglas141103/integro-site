export class ThemeMusic {
 constructor(track, {enabled=true, hidden=()=>document.hidden}={}) {
  this.track=track;this.enabled=enabled;this.hidden=hidden;this.started=false;this.disposed=false;
  track.loop=true;track.volume=.38;track.preload='metadata';
 }
 play() {
  if(this.disposed||!this.started||!this.enabled||this.hidden()||!this.track.paused)return;
  try{Promise.resolve(this.track.play()).catch(()=>{});}catch{}
 }
 activate(){this.started=true;this.play();}
 restart(){try{this.track.currentTime=0;}catch{}this.play();}
 setEnabled(enabled){this.enabled=enabled;if(enabled)this.activate();else this.track.pause();}
 visibilityChanged(){if(this.hidden())this.track.pause();else this.play();}
 dispose(){this.disposed=true;this.track.pause();}
}
