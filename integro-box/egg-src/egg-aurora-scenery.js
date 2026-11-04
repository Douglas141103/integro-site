import * as T from 'three';
export function createAuroraScenery(){
 const curtains=[],columns=64,rows=6;
 const pixels=new Uint8Array(32*4);
 for(let y=0;y<32;y++){pixels.set([255,255,255,Math.round(255*Math.sin(y/31*Math.PI)**.8)],y*4);}
 const fade=new T.DataTexture(pixels,1,32,T.RGBAFormat);fade.magFilter=T.LinearFilter;fade.minFilter=T.LinearFilter;fade.needsUpdate=true;
 function add(parent,index){if(index!==17)return;
  for(let band=0;band<3;band++){
   const positions=new Float32Array((columns+1)*(rows+1)*3),colors=new Float32Array(positions.length),uvs=[],indices=[];
   for(let x=0;x<=columns;x++)for(let y=0;y<=rows;y++){
    const u=x/columns,v=y/rows,k=x*(rows+1)+y;
    const color=new T.Color(0x68ffc2).lerp(new T.Color(0x80aaff),.5+.5*Math.sin(u*5+band)).lerp(new T.Color(0xd4a1ff),v*.5);
    color.toArray(colors,k*3);uvs.push(u,v);
    if(x<columns&&y<rows){const n=k+rows+1;indices.push(k,n,k+1,n,n+1,k+1);}
   }
   const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3).setUsage(T.DynamicDrawUsage));geometry.setAttribute('color',new T.BufferAttribute(colors,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));geometry.setIndex(indices);
   const mesh=new T.Mesh(geometry,new T.MeshBasicMaterial({vertexColors:true,map:fade,transparent:true,opacity:.7,side:T.DoubleSide,depthWrite:false,blending:T.AdditiveBlending}));
   mesh.name='BorealAuroraCurtain';mesh.frustumCulled=false;mesh.userData.world=index;parent.add(mesh);
   curtains.push({mesh,band,index});
  }
 }
 function update(time,reducedMotion=false){const t=reducedMotion?0:time;
  for(const {mesh,band,index}of curtains){const position=mesh.geometry.attributes.position;
   for(let x=0;x<=columns;x++)for(let y=0;y<=rows;y++){
    const u=x/columns,v=y/rows,xx=-15+u*30;
    const lower=7.8+band*.55+Math.sin(u*7+t*.24+band)*.8;
    const height=2.8+Math.sin(u*10-t*.18+band)*.8;
    position.setXYZ(x*(rows+1)+y,xx,lower+v*height,-index*48-10-band*14+Math.sin(u*8+t*.2+v*.7)*2.1);
   }
   position.needsUpdate=true;
  }
 }
 return{add,update};
}
