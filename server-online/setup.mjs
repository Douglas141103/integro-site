import {mkdir,writeFile,access,chmod,readFile} from 'node:fs/promises';
import {randomBytes} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const base=dirname(fileURLToPath(import.meta.url));
const folder=resolve(process.argv[2]||resolve(base,'runtime'));
await mkdir(folder,{recursive:true});
let config;
try {config=JSON.parse((await readFile(resolve(folder,'server.json'),'utf8')).replace(/^\uFEFF/,''));}
catch(error){if(error.code!=='ENOENT')throw error;
 config={apiKey:'integro'+randomBytes(12).toString('hex'),apiSecret:randomBytes(48).toString('base64url'),
 supabaseUrl:'https://kvdfnmwuxmpalsyuytwt.supabase.co',publishableKey:'sb_publishable_GP076p73HPtaU7Q6EyK3Mg_5fYc7pAu',
 livekitInternal:'http://127.0.0.1:7880',livekitPublic:'ws://127.0.0.1:7880',apiPort:8787,
 allowedOrigins:['https://www.institutointegro.com.br','https://institutointegro.com.br','http://127.0.0.1:8877','http://localhost:8877']};
 await writeFile(resolve(folder,'server.json'),JSON.stringify(config,null,2),{mode:0o600});
}
const yaml={port:7880,bind_addresses:['127.0.0.1'],rtc:{tcp_port:7881,udp_port:7882,use_external_ip:false,...(config.publicIp?{node_ip:config.publicIp,advertise_internal_ip:true}:{})},
 keys:{[config.apiKey]:config.apiSecret},room:{auto_create:false,max_participants:5,empty_timeout:900,departure_timeout:60},logging:{level:'warn'}};
if(config.publicIp)yaml.turn={enabled:true,udp_port:3478};
await writeFile(resolve(folder,'livekit.yaml'),JSON.stringify(yaml,null,2),{mode:0o600});
console.log('Configuração local preparada. As chaves ficam somente na pasta runtime.');
