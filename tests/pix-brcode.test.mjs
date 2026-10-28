import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url), pix=require('../portal/pix-brcode.js'), qrcode=require('../portal/vendor/qrcode-generator-1.4.4.js'), jsQR=require('jsqr');
const settings={key_type:'random',pix_key:'123e4567-e12b-12d1-a456-426655440000',merchant_name:'Instituto Integro',merchant_city:'Manaus',enabled:true};
function fields(payload){const data={};for(let p=0;p<payload.length;){const tag=payload.slice(p,p+2),size=Number(payload.slice(p+2,p+4));assert.ok(size>0);data[tag]=payload.slice(p+4,p+4+size);p+=size+4;assert.ok(p<=payload.length);}return data;}
test('CRC matches the BCB published reference and CRC-CCITT test vector',()=>{
 const reference='00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-4266554400005204000053039865802BR5913Fulano de Tal6008BRASILIA62070503***6304';
 assert.equal(pix.crc16(reference),'1D3D');assert.equal(pix.crc16('123456789'),'29B1');
});
test('static Pix embeds exact cent value, DICT key and sale reference without customer data',()=>{
 const payload=pix.build(settings,14001,'A123456789012345678901234'), f=fields(payload);
 assert.equal(f['54'],'140.01');assert.equal(f['53'],'986');assert.equal(f['58'],'BR');assert.equal(f['01'],'11');
 assert.equal(fields(f['26'])['01'],settings.pix_key);assert.equal(fields(f['62'])['05'],'A123456789012345678901234');
 assert.equal(f['59'],'INSTITUTO INTEGRO');assert.equal(f['60'],'MANAUS');assert.equal(f['63'],pix.crc16(payload.slice(0,-4)));
});
test('validates keys including alphanumeric CNPJ and rejects invalid/disabled payment instructions',()=>{
 assert.equal(pix.normalizeKey('cpf','249.715.637-92'),'24971563792');
 assert.equal(pix.normalizeKey('cnpj','12.ABC.345/01DE-35'),'12ABC34501DE35');
 assert.equal(pix.normalizeKey('email','PIX@EXAMPLE.COM'),'pix@example.com');
 assert.equal(pix.normalizeKey('phone','+55 (92) 99999-9999'),'+5592999999999');
 assert.equal(pix.normalizeSettings({...settings,merchant_name:'João da Silva',merchant_city:'São Paulo'}).merchant_city,'SAO PAULO');
 for(const key of ['11111111111','24971563791','inchk_secret'])assert.throws(()=>pix.normalizeKey('cpf',key));
 for(const value of [0,-1,1.1,NaN,100000001])assert.throws(()=>pix.build(settings,value,'SALE1'));
 assert.throws(()=>pix.build({...settings,enabled:false},100,'SALE1'));
 assert.throws(()=>pix.build(settings,100,'x'.repeat(26)));
 assert.throws(()=>pix.build(settings,100,'SALE-1'));
 assert.throws(()=>pix.build({...settings,merchant_name:'<script>alert(1)</script>'},100,'SALE1'));
});
test('an independent scanner decodes both short and maximum-length-key QR images exactly',()=>{
 for(const s of [settings,{...settings,key_type:'email',pix_key:'a'.repeat(64)+'@example.test'}]){
  const payload=pix.build(s,1,'ABC1234567890123456789012'),qr=qrcode(0,'M');qr.addData(payload,'Byte');qr.make();
  const scale=6,border=4,size=(qr.getModuleCount()+border*2)*scale,pixels=new Uint8ClampedArray(size*size*4).fill(255);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
   const row=Math.floor(y/scale)-border,col=Math.floor(x/scale)-border;
   if(row>=0&&col>=0&&row<qr.getModuleCount()&&col<qr.getModuleCount()&&qr.isDark(row,col)){const p=(y*size+x)*4;pixels[p]=pixels[p+1]=pixels[p+2]=0;}
  }
  const decoded=jsQR(pixels,size,size);assert.ok(decoded);assert.equal(decoded.data,payload);
 }
});
