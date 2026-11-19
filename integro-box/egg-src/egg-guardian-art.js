import {EGYPT} from './egg-egypt.js';
import {SUBSOIL} from './egg-subsoil.js';
import {HEAVEN} from './egg-heaven.js';
import {EggExplorerSprite} from './egg-explorer-sprite.js';

// Preserve each guard's stature relative to the runner, nest and overhead label.
// The parent already carries the world scale and the Heaven gravity transform.
const gateArt = new Map([
  [HEAVEN.world, {file:'sky', height:2.14}],
  [SUBSOIL.world, {file:'magma', height:2.04}],
  [EGYPT.world, {file:'mummy', height:1.88}]
]);

export function installGuardianArtwork(guard, index) {
  const art = gateArt.get(index);
  if (!art) return;

  guard.artwork = null;
  const state = {stepping:false, carrying:false, gaitPhase:0, reducedMotion:false};
  // The visible silhouette retains the 284/320 height of the original drawings.
  const layout = {
    columns:9, rows:3, widthRatio:1, footRatio:308/320, height:art.height*320/284,
    name:'EggDoorGuardian', url:'/integro-box/assets/egg-guardians-v2/'+art.file+'.webp'
  };

  guard.presentArtwork = (camera, {state:activity, reducedMotion=false}, options={}) => {
    if (!guard.g.parent || !guard.g.visible || !guard.g.parent.visible) return false;
    if (!guard.artwork) guard.artwork = new EggExplorerSprite(guard.g, layout);
    const walking = guard.artworkMoving ?? guard.animator.blend > .05;
    state.stepping = walking && (activity==='chase' || activity==='return');
    state.gaitPhase = guard.animator.phase;
    state.reducedMotion = reducedMotion;
    const ready = guard.artwork.present(camera, 'full', state, options);
    guard.animator.rig.visible = !ready;
    return ready;
  };

  guard.hideArtwork = () => {
    if (guard.artwork) guard.artwork.billboard.visible = false;
    guard.animator.rig.visible = true;
  };

  // Both world cleanup and guard.dispose() ultimately release the animator.
  const disposeRig = guard.animator.dispose.bind(guard.animator);
  guard.animator.dispose = () => {
    guard.artwork?.dispose();
    guard.artwork = null;
    disposeRig();
  };
}

export function currentDoorGuardian(game) {
  if (game.inHeaven()) return HEAVEN.world;
  if (game.inSubsoil()) return SUBSOIL.world;
  if (game.inEgypt()) return EGYPT.world;
  return null;
}
