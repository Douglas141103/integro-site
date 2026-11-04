import {STAGES,stageAt} from './course.mjs';
import {draw,WIDTH,HEIGHT} from './art.mjs?v=hud2';

// Keep the full jump arc and at least two seconds of approaching track on a phone.
export function paintTrack(canvas,ctx,run) {
  const w=canvas.clientWidth||WIDTH, h=canvas.clientHeight||HEIGHT;
  const density=Math.min(window.devicePixelRatio||1,2);
  const targetWidth=Math.round(w*density), targetHeight=Math.round(h*density);
  if(canvas.width!==targetWidth||canvas.height!==targetHeight) {
    canvas.width=targetWidth;
    canvas.height=targetHeight;
  }
  const scale=Math.min(w/(w<600?570:WIDTH),h/HEIGHT);
  const fullHeight=HEIGHT*scale;
  const top=Math.max(0,(h-fullHeight)*0.62);
  const palette=STAGES[stageAt(run.tick)];
  ctx.setTransform(density,0,0,density,0,0);
  ctx.fillStyle=palette.sky;ctx.fillRect(0,0,w,h);
  ctx.fillStyle=palette.path;ctx.fillRect(0,top+fullHeight-1,w,h);
  ctx.save();
  ctx.translate(0,top);ctx.scale(scale,scale);
  draw(ctx,run,Math.ceil(w/scale));
  ctx.restore();
}

// Use the Integro Box controls themselves so their unread counts and room actions stay live.
const services=[
  {root:'boxOnline',toggle:'boxOnlineToggle',panel:'boxOnlinePanel',close:'boxOnlineClose'},
  {root:'boxChat',toggle:'boxChatToggle',panel:'boxChatPanel',close:'boxChatClose'}
];
export function dockServices(host,pause) {
  const origins=new Map();
  function close(except) {
    for(const item of services){
      const panel=document.getElementById(item.panel);
      if(origins.has(item.root)&&item.root!==except&&panel&&!panel.hidden)
        document.getElementById(item.close)?.click();
    }
  }
  host.addEventListener('click',event=>{
    const service=services.find(item=>event.target.closest('#'+item.toggle));
    if(service){pause();close(service.root);}
  },true);
  function attach(){
    for(const {root} of services){
      const node=document.getElementById(root);
      if(!node||origins.has(root))continue;
      const marker=document.createComment('Dino HUD');
      node.before(marker);origins.set(root,{node,marker});host.append(node);
    }
    close();
  }
  function detach(){
    close();
    for(const {node,marker} of origins.values()){
      if(marker.parentNode&&node.parentNode===host)marker.replaceWith(node);
      else marker.remove();
    }
    origins.clear();
  }
  const opened=()=>services.some(item=>origins.has(item.root)&&document.getElementById(item.panel)?.hidden===false);
  return {attach,detach,close,opened};
}
