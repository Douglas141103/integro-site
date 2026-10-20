import fs from 'node:fs';
import path from 'node:path';
const root = new URL('../../',import.meta.url).pathname;
const dir = path.join(root,'integro-box/locales');
const extra = {
 'Idioma':['Language','Sprache'],
 'Escolha o idioma dos menus, jogos e encartes.':['Choose the language for menus, games and cover artwork.','Wähle die Sprache für Menüs, Spiele und Titelbilder.'],
 'Aplicando idioma…':['Applying language…','Sprache wird übernommen…'],
 'Não foi possível carregar este idioma. Tente novamente.':['This language could not be loaded. Please try again.','Diese Sprache konnte nicht geladen werden. Bitte versuche es erneut.'],
 'Ao trocar o idioma, você volta ao catálogo. Seu progresso salvo é mantido.':['Changing the language returns you to the catalog. Your saved progress is kept.','Beim Sprachwechsel kehrst du zum Katalog zurück. Dein gespeicherter Fortschritt bleibt erhalten.'],
 'Jogar {0}':['Play {0}','{0} spielen'],
 'Favoritar: {0}':['Add to favorites: {0}','Zu Favoriten hinzufügen: {0}'],
 'Remover dos favoritos: {0}':['Remove from favorites: {0}','Aus Favoriten entfernen: {0}'],
 '{0} pessoa online':['{0} person online','{0} Person online'],
 '{0} pessoas online':['{0} people online','{0} Personen online'],
 '{0} jogo':['{0} game','{0} Spiel'],
 '{0} jogos':['{0} games','{0} Spiele'],
 '{0} jogador':['{0} player','{0} Spieler'],
 '{0} jogadores':['{0} players','{0} Spieler'],
 'português':['Portuguese','Portugiesisch'],
 'alemão':['German','Deutsch'],
 'inglês':['English','Englisch']
};
const merged = {};
for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('.json')&&!['en.json','de.json'].includes(f)).sort()){
 const data=JSON.parse(fs.readFileSync(path.join(dir,file),'utf8'));
 for(const [key,pair]of Object.entries(data)){
  if(!Array.isArray(pair)||pair.length!==2||pair.some(s=>typeof s!=='string'))throw Error(file+': invalid '+key);
  const placeholders=s=>JSON.stringify((s.match(/\{\d+\}/g)||[]).sort());
  for(const val of pair)if(placeholders(key)!==placeholders(val))throw Error(file+': placeholders '+key);
  if(merged[key]&&JSON.stringify(merged[key])!==JSON.stringify(pair))console.warn('Duplicate overridden:',key);
  merged[key]=pair;
 }
}
Object.assign(merged,extra);
for(const [lang,index]of [['en',0],['de',1]]){
 const out=Object.fromEntries(Object.entries(merged).sort(([a],[b])=>a.localeCompare(b,'pt-BR')).map(([s,v])=>[s,v[index]]));
 fs.writeFileSync(path.join(dir,lang+'.json'),JSON.stringify(out,null,2)+'\n');
 console.log(lang,Object.keys(out).length,'phrases');
}
