import {Buffer} from 'node:buffer';
import {gzipSync,gunzipSync} from 'node:zlib';

// Keep the existing gzip/base64 format, without building multi-megabyte binary
// strings one character at a time. Fast compression leaves CPU for gameplay.
export function packCheckpoint(value){
 const text=JSON.stringify(value,(_,v)=>v===Infinity?'@Infinity':v===-Infinity?'@-Infinity':v);
 return gzipSync(text,{level:1}).toString('base64');
}
export function unpackCheckpoint(value,decode){
 return decode(gunzipSync(Buffer.from(value,'base64')).toString('utf8'));
}

// Per-game snapshots keep inactive histories out of every 15-second write.
export function gameCheckpoint(root,key){
 return {version:2,session:root.session,active:key,games:{[key]:root.games?.[key]||{}},...(key==='egg'?{egg:root.egg}: {})};
}
