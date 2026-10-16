import {mountEggGame} from './egg-game.js';
import {WORLDS,RARITIES,MUTATIONS,VEHICLES} from './egg-rules.js';
window.BoxEgg={mountEggGame,contentVersion:20,vehicleIds:Object.keys(VEHICLES),worldNames:WORLDS.map(w=>w.name),petName:p=>`${WORLDS[p.world]?.creature||'Criatura'} · ${RARITIES[p.rarity]?.name||'Comum'} · ${MUTATIONS[p.mutation]?.name||'Natural'}`};
