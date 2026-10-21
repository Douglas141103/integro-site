import http from 'node:http';import {readFile} from 'node:fs/promises';import {resolve,extname} from 'node:path';
const root=resolve(new URL('..',import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1'));
const types={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.png':'image/png'};
http.createServer(async(req,res)=>{try{
 let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(path.endsWith('/'))path+='index.html';
 if(path.includes('..')||path.includes('/.')||!types[extname(path)]||!['/aulas-online/','/portal/','/portal-familia/','/portal-professor/','/assets/','/logo-whatsapp.png'].some(prefix=>path.startsWith(prefix)))throw Error();
 const content=await readFile(resolve(root,'.'+path));res.writeHead(200,{'Content-Type':types[extname(path)],'Cache-Control':'no-store'});res.end(content);
}catch{res.writeHead(404);res.end();}}).listen(8877,'127.0.0.1',()=>console.log('http://127.0.0.1:8877/aulas-online/'));
