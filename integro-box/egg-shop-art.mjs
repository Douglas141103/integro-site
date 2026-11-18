const productIds = [
  'crown', 'headphones', 'halo', 'goggles', 'wings',
  'cape', 'pilotCap', 'safariHat', 'iceTiara', 'stormHelm',
  'solarCrown', 'starGlasses', 'cyberVisor', 'butterflyMask', 'royalMask',
  'explorerPack', 'beeWings', 'jetpack', 'phoenixWings', 'auroraCape',
  'cometPack', 'infinityWings', 'astronautHelmet', 'pirateHat', 'wizardHat',
  'ninjaBand', 'sharkHood', 'mushroomCap', 'flowerCrown', 'antlers',
  'samuraiHelm', 'monocle', 'heartGlasses', 'snowGoggles', 'foxMask',
  'dragonMask', 'owlMask', 'rainbowVisor', 'divingMask', 'snailPack',
  'turtleShell', 'guitar', 'surfboard', 'balloonPack', 'butterflyWings',
  'mechanicalWings', 'conductorCap', 'truffleCrown', 'auroraHelmet', 'neonGlasses',
  'starMask', 'conductorGoggles', 'leafMask', 'stationPack', 'cloudSails',
  'magneticCape',
  'egg_station_head', 'egg_station_face', 'egg_station_back', 'egg_station_companion', 'egg_station_aura',
  'egg_coral_head', 'egg_coral_face', 'egg_coral_back', 'egg_coral_companion', 'egg_coral_aura',
  'egg_aurora_head', 'egg_aurora_face', 'egg_aurora_back', 'egg_aurora_companion', 'egg_aurora_aura',
  'egg_magma_head', 'egg_magma_face', 'egg_magma_back', 'egg_magma_companion', 'egg_magma_aura',
  'egg_lunar_head', 'egg_lunar_face', 'egg_lunar_back', 'egg_lunar_companion', 'egg_lunar_aura',
  'egg_royal_head', 'egg_royal_face', 'egg_royal_back', 'egg_royal_companion', 'egg_royal_aura',
  'egg_relic_dragonWings', 'egg_relic_prismHalo', 'egg_relic_timeMask', 'egg_relic_clockworkCrown', 'egg_relic_hourglassPack',
  'egg_relic_galaxyMask', 'egg_relic_galaxyPortal', 'egg_relic_starBeacon', 'egg_jade', 'egg_guardian',
  'egg_cosmos',
  'carAurora', 'carRoyal', 'jetAurora', 'jetImperial', 'skateBreeze',
  'skateNeon', 'skateAurora', 'skateIntegro', 'scooterPort', 'scooterComet',
  'scooterGalaxy', 'scooterIntegro',
  'boots', 'energy', 'pen', 'incubator', 'gloves', 'springs', 'hydration', 'coach', 'charm', 'turbo',
  'shield', 'juice',
  'bubble', 'frost', 'doubleJump', 'endurance', 'rush', 'trainingBoost', 'hatchBoost', 'incomeBoost',
  'candy', 'space', 'bamboo', 'castle', 'tropical', 'neon',
  'bear', 'mine',
  'jet_buy',
  'room', 'bedroom', 'kitchen', 'porch',
  'floor2', 'floor3', 'floor4', 'floor5',
  'gold', 'galaxy',
  'fusion_buy',
];

export const shopArtUrls = Object.freeze(Object.fromEntries(
  productIds.map(id => [id, '/integro-box/assets/egg-shop-v1/' + id + '.webp'])
));

export function shopArt(id) {
  if (!Object.hasOwn(shopArtUrls, id)) return '';
  return `<img class="egg-shop-art" src="${shopArtUrls[id]}" loading="lazy" decoding="async" width="156" height="138" alt="">`;
}
