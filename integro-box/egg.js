(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Hc=0,Uo=1,Gc=2;var No=1,Zr=2,vn=3,Dn=0,Ot=1,yn=2,On=0,ui=1,Fo=2,Oo=3,Bo=4,Wc=5,Zn=100,Xc=101,qc=102,$c=103,Yc=104,Zc=200,Jc=201,Kc=202,jc=203,br=204,Er=205,Qc=206,el=207,tl=208,nl=209,il=210,sl=211,rl=212,al=213,ol=214,Jr=0,Kr=1,jr=2,di=3,Qr=4,ea=5,ta=6,na=7,zo=0,cl=1,ll=2,Bn=0,hl=1,ul=2,dl=3,Hs=4,fl=5,pl=6,ml=7;var ko=300,xi=301,_i=302,ia=303,sa=304,Gs=306,Tr=1e3,$n=1001,wr=1002,Qt=1003,gl=1004;var Ws=1005;var on=1006,ra=1007;var Qn=1008;var hn=1009,Vo=1010,Ho=1011,is=1012,aa=1013,ei=1014,Mn=1015,ss=1016,oa=1017,ca=1018,rs=1020,Go=35902,Wo=35899,Xo=1021,qo=1022,en=1023,Gi=1026,as=1027,$o=1028,la=1029,Yo=1030,ha=1031;var ua=1033,Xs=33776,qs=33777,$s=33778,Ys=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,xa=37492,_a=37496,va=37808,ya=37809,Ma=37810,Sa=37811,ba=37812,Ea=37813,Ta=37814,wa=37815,Aa=37816,Ca=37817,Ra=37818,Ia=37819,Pa=37820,La=37821,Da=36492,Ua=36494,Na=36495,Fa=36283,Oa=36284,Ba=36285,za=36286;var Ss=2300,Ar=2301,Sr=2302,Ao=2400,Co=2401,Ro=2402;var xl=3200,_l=3201;var Zo=0,vl=1,zn="",St="srgb",fi="srgb-linear",bs="linear",rt="srgb";var hi=7680;var Io=519,yl=512,Ml=513,Sl=514,Jo=515,bl=516,El=517,Tl=518,wl=519,Cr=35044;var Ko="300 es",an=2e3,Es=2001;var Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Rr=180/Math.PI;function Yn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function fh(i,e){return(i%e+e)%e}function no(i,e,t){return(1-t)*i+t*e}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,c){let l=n[s+0],a=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(c===0){e[t+0]=l,e[t+1]=a,e[t+2]=h,e[t+3]=u;return}if(c===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(u!==y||l!==f||a!==p||h!==x){let m=1-c,d=l*f+a*p+h*x+u*y,R=d>=0?1:-1,C=1-d*d;if(C>Number.EPSILON){let U=Math.sqrt(C),P=Math.atan2(U,d*R);m=Math.sin(m*P)/U,c=Math.sin(c*P)/U}let b=c*R;if(l=l*m+f*b,a=a*m+p*b,h=h*m+x*b,u=u*m+y*b,m===1-c){let U=1/Math.sqrt(l*l+a*a+h*h+u*u);l*=U,a*=U,h*=U,u*=U}}e[t]=l,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let c=n[s],l=n[s+1],a=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=c*x+h*u+l*p-a*f,e[t+1]=l*x+h*f+a*u-c*p,e[t+2]=a*x+h*p+c*f-l*u,e[t+3]=h*x-c*u-l*f-a*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,l=Math.sin,a=c(n/2),h=c(s/2),u=c(r/2),f=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u+f*p*x;break;case"YZX":this._x=f*h*u+a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u-f*p*x;break;case"XZY":this._x=f*h*u-a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],c=t[5],l=t[9],a=t[2],h=t[6],u=t[10],f=n+c+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-a)*p,this._z=(o-s)*p}else if(n>c&&n>u){let p=2*Math.sqrt(1+n-c-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+a)/p}else if(c>u){let p=2*Math.sqrt(1+c-n-u);this._w=(r-a)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-c);this._w=(o-s)/p,this._x=(r+a)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,c=t._x,l=t._y,a=t._z,h=t._w;return this._x=n*h+o*c+s*a-r*l,this._y=s*h+o*l+r*c-n*a,this._z=r*h+o*a+n*l-s*c,this._w=o*h-n*c-s*l-r*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,c=o*e._w+n*e._x+s*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-c*c;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let a=Math.sqrt(l),h=Math.atan2(a,c),u=Math.sin((1-t)*h)/a,f=Math.sin(t*h)/a;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,c=e.z,l=e.w,a=2*(o*s-c*n),h=2*(c*t-r*s),u=2*(r*n-o*t);return this.x=t+l*a+o*u-c*h,this.y=n+l*h+c*a-r*u,this.z=s+l*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,c=t.y,l=t.z;return this.x=s*l-r*c,this.y=r*o-n*l,this.z=n*c-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new G,Mc=new Nn,Ye=class i{constructor(e,t,n,s,r,o,c,l,a){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,l,a)}set(e,t,n,s,r,o,c,l,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=c,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[3],l=n[6],a=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],y=s[0],m=s[3],d=s[6],R=s[1],C=s[4],b=s[7],U=s[2],P=s[5],N=s[8];return r[0]=o*y+c*R+l*U,r[3]=o*m+c*C+l*P,r[6]=o*d+c*b+l*N,r[1]=a*y+h*R+u*U,r[4]=a*m+h*C+u*P,r[7]=a*d+h*b+u*N,r[2]=f*y+p*R+x*U,r[5]=f*m+p*C+x*P,r[8]=f*d+p*b+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8];return t*o*h-t*c*a-n*r*h+n*c*l+s*r*a-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8],u=h*o-c*a,f=c*l-h*r,p=a*r-o*l,x=t*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=u*y,e[1]=(s*a-h*n)*y,e[2]=(c*n-s*o)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-c*t)*y,e[6]=p*y,e[7]=(n*l-a*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,c){let l=Math.cos(r),a=Math.sin(r);return this.set(n*l,n*a,-n*(l*o+a*c)+o+e,-s*a,s*l,-s*(-a*o+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},so=new Ye;function jo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Al(){let i=Ts("canvas");return i.style.display="block",i}var Sc={};function Wi(i){i in Sc||(Sc[i]=!0,console.warn(i))}function Cl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var bc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ph(){let i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:bs,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var nt=ph();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Ir=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Ts("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mh=0,Xi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(ro(s[o].image)):r.push(ro(s[o]))}else r=ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ir.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gh=0,ao=new G,Vt=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,s=$n,r=on,o=Qn,c=en,l=hn,a=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Yn(),this.name="",this.source=new Xi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=ko;Vt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,a=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(a+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(a+1)/2,b=(p+1)/2,U=(d+1)/2,P=(h+f)/4,N=(u+y)/4,V=(x+m)/4;return C>b&&C>U?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=P/n,r=N/n):b>U?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=P/s,r=V/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=N/r,s=V/r),this.set(n,s,r,t),this}let R=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-x)/R,this.y=(u-y)/R,this.z=(f-h)/R,this.w=Math.acos((a+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pr=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Vt(s);this.textures=[];let o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Pr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ws=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),nr.subVectors(this.max,ms),Ai.subVectors(e.a,ms),Ci.subVectors(e.b,ms),Ri.subVectors(e.c,ms),Vn.subVectors(Ci,Ai),Hn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!oo(t,Ai,Ci,Ri,nr)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Ai,Ci,Ri,nr))?!1:(ir.crossVectors(Vn,Hn),t=[ir.x,ir.y,ir.z],oo(t,Ai,Ci,Ri,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Tn=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,tr=new Jn,Ai=new G,Ci=new G,Ri=new G,Vn=new G,Hn=new G,ai=new G,ms=new G,nr=new G,ir=new G,oi=new G;function oo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);let c=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),a=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,a,h),Math.min(l,a,h))>c)return!1}return!0}var xh=new Jn,gs=new G,co=new G,qi=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);let t=gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(co)),this.expandByPoint(gs.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wn=new G,lo=new G,sr=new G,Gn=new G,ho=new G,rr=new G,uo=new G,Dr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(lo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),c=Gn.dot(this.direction),l=-Gn.dot(sr),a=Gn.lengthSq(),h=Math.abs(1-o*o),u,f,p,x;if(h>0)if(u=o*l-c,f=o*c-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,p=u*(u+o*f+2*c)+f*(o*u+f+2*l)+a}else f=r,u=Math.max(0,-(o*f+c)),p=-u*u+f*(f+2*l)+a;else f=-r,u=Math.max(0,-(o*f+c)),p=-u*u+f*(f+2*l)+a;else f<=-x?(u=Math.max(0,-(-o*r+c)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+a):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+a):(u=Math.max(0,-(o*r+c)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+a);else f=o>0?-r:r,u=Math.max(0,-(o*f+c)),p=-u*u+f*(f+2*l)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lo).addScaledVector(sr,f),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,l=n+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,c,l,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return a>=0?(n=(e.min.x-f.x)*a,s=(e.max.x-f.x)*a):(n=(e.max.x-f.x)*a,s=(e.min.x-f.x)*a),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(c=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(c=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||c>s)||((c>n||n!==n)&&(n=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){ho.subVectors(t,e),rr.subVectors(n,e),uo.crossVectors(ho,rr);let o=this.direction.dot(uo),c;if(o>0){if(s)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Gn.subVectors(this.origin,e);let l=c*this.direction.dot(rr.crossVectors(Gn,rr));if(l<0)return null;let a=c*this.direction.dot(ho.cross(Gn));if(a<0||l+a>o)return null;let h=-c*Gn.dot(uo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class i{constructor(e,t,n,s,r,o,c,l,a,h,u,f,p,x,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,l,a,h,u,f,p,x,y,m)}set(e,t,n,s,r,o,c,l,a,h,u,f,p,x,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=c,d[13]=l,d[2]=a,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),c=Math.sin(n),l=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,x=c*h,y=c*u;t[0]=l*h,t[4]=-l*u,t[8]=a,t[1]=p+x*a,t[5]=f-y*a,t[9]=-c*l,t[2]=y-f*a,t[6]=x+p*a,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,x=a*h,y=a*u;t[0]=f+y*c,t[4]=x*c-p,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-c,t[2]=p*c-x,t[6]=y+f*c,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,x=a*h,y=a*u;t[0]=f-y*c,t[4]=-o*u,t[8]=x+p*c,t[1]=p+x*c,t[5]=o*h,t[9]=y-f*c,t[2]=-o*a,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,x=c*h,y=c*u;t[0]=l*h,t[4]=x*a-p,t[8]=f*a+y,t[1]=l*u,t[5]=y*a+f,t[9]=p*a-x,t[2]=-a,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*a,x=c*l,y=c*a;t[0]=l*h,t[4]=y-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-c*h,t[2]=-a*h,t[6]=p*u+x,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*l,p=o*a,x=c*l,y=c*a;t[0]=l*h,t[4]=-u,t[8]=a*h,t[1]=f*u+y,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=c*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_h,e,vh)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Wn.crossVectors(n,qt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Wn.crossVectors(n,qt)),Wn.normalize(),ar.crossVectors(qt,Wn),s[0]=Wn.x,s[4]=ar.x,s[8]=qt.x,s[1]=Wn.y,s[5]=ar.y,s[9]=qt.y,s[2]=Wn.z,s[6]=ar.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[4],l=n[8],a=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],y=n[6],m=n[10],d=n[14],R=n[3],C=n[7],b=n[11],U=n[15],P=s[0],N=s[4],V=s[8],S=s[12],M=s[1],O=s[5],Y=s[9],ne=s[13],te=s[2],ie=s[6],se=s[10],me=s[14],ee=s[3],_e=s[7],Se=s[11],Pe=s[15];return r[0]=o*P+c*M+l*te+a*ee,r[4]=o*N+c*O+l*ie+a*_e,r[8]=o*V+c*Y+l*se+a*Se,r[12]=o*S+c*ne+l*me+a*Pe,r[1]=h*P+u*M+f*te+p*ee,r[5]=h*N+u*O+f*ie+p*_e,r[9]=h*V+u*Y+f*se+p*Se,r[13]=h*S+u*ne+f*me+p*Pe,r[2]=x*P+y*M+m*te+d*ee,r[6]=x*N+y*O+m*ie+d*_e,r[10]=x*V+y*Y+m*se+d*Se,r[14]=x*S+y*ne+m*me+d*Pe,r[3]=R*P+C*M+b*te+U*ee,r[7]=R*N+C*O+b*ie+U*_e,r[11]=R*V+C*Y+b*se+U*Se,r[15]=R*S+C*ne+b*me+U*Pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],c=e[5],l=e[9],a=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],y=e[7],m=e[11],d=e[15];return x*(+r*l*u-s*a*u-r*c*f+n*a*f+s*c*p-n*l*p)+y*(+t*l*p-t*a*f+r*o*f-s*o*p+s*a*h-r*l*h)+m*(+t*a*u-t*c*p-r*o*u+n*o*p+r*c*h-n*a*h)+d*(-s*c*h-t*l*u+t*c*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],y=e[13],m=e[14],d=e[15],R=u*m*a-y*f*a+y*l*p-c*m*p-u*l*d+c*f*d,C=x*f*a-h*m*a-x*l*p+o*m*p+h*l*d-o*f*d,b=h*y*a-x*u*a+x*c*p-o*y*p-h*c*d+o*u*d,U=x*u*l-h*y*l-x*c*f+o*y*f+h*c*m-o*u*m,P=t*R+n*C+s*b+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return e[0]=R*N,e[1]=(y*f*r-u*m*r-y*s*p+n*m*p+u*s*d-n*f*d)*N,e[2]=(c*m*r-y*l*r+y*s*a-n*m*a-c*s*d+n*l*d)*N,e[3]=(u*l*r-c*f*r-u*s*a+n*f*a+c*s*p-n*l*p)*N,e[4]=C*N,e[5]=(h*m*r-x*f*r+x*s*p-t*m*p-h*s*d+t*f*d)*N,e[6]=(x*l*r-o*m*r-x*s*a+t*m*a+o*s*d-t*l*d)*N,e[7]=(o*f*r-h*l*r+h*s*a-t*f*a-o*s*p+t*l*p)*N,e[8]=b*N,e[9]=(x*u*r-h*y*r-x*n*p+t*y*p+h*n*d-t*u*d)*N,e[10]=(o*y*r-x*c*r+x*n*a-t*y*a-o*n*d+t*c*d)*N,e[11]=(h*c*r-o*u*r-h*n*a+t*u*a+o*n*p-t*c*p)*N,e[12]=U*N,e[13]=(h*y*s-x*u*s+x*n*f-t*y*f-h*n*m+t*u*m)*N,e[14]=(x*c*s-o*y*s-x*n*l+t*y*l+o*n*m-t*c*m)*N,e[15]=(o*u*s-h*c*s+h*n*l-t*u*l-o*n*f+t*c*f)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,c=e.y,l=e.z,a=r*o,h=r*c;return this.set(a*o+n,a*c-s*l,a*l+s*c,0,a*c+s*l,h*c+n,h*l-s*o,0,a*l-s*c,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,c=t._z,l=t._w,a=r+r,h=o+o,u=c+c,f=r*a,p=r*h,x=r*u,y=o*h,m=o*u,d=c*u,R=l*a,C=l*h,b=l*u,U=n.x,P=n.y,N=n.z;return s[0]=(1-(y+d))*U,s[1]=(p+b)*U,s[2]=(x-C)*U,s[3]=0,s[4]=(p-b)*P,s[5]=(1-(f+d))*P,s[6]=(m+R)*P,s[7]=0,s[8]=(x+C)*N,s[9]=(m-R)*N,s[10]=(1-(f+y))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),c=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);let a=1/r,h=1/o,u=1/c;return sn.elements[0]*=a,sn.elements[1]*=a,sn.elements[2]*=a,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,o,c=an,l=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,y;if(l)x=r/(o-r),y=o*r/(o-r);else if(c===an)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(c===Es)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=h,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=x,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,c=an,l=!1){let a=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),x,y;if(l)x=1/(o-r),y=o/(o-r);else if(c===an)x=-2/(o-r),y=-(o+r)/(o-r);else if(c===Es)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=h,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=p,a[2]=0,a[6]=0,a[10]=x,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new G,sn=new gt,_h=new G(0,0,0),vh=new G(1,1,1),Wn=new G,ar=new G,qt=new G,Tc=new gt,wc=new Nn,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],c=s[8],l=s[1],a=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yh=0,Ac=new G,Pi=new Nn,An=new gt,or=new G,xs=new G,Mh=new G,Sh=new Nn,Cc=new G(1,0,0),Rc=new G(0,1,0),Ic=new G(0,0,1),Pc={type:"added"},bh={type:"removed"},Li={type:"childadded",child:null},fo={type:"childremoved",child:null},Rt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new cn,n=new Nn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ye}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(xs,or,this.up):An.lookAt(or,xs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let a=0,h=l.length;a<h;a++){let u=l[a];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,a=this.material.length;l<a;l++)c.push(r(e.materials,this.material[l]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(r(e.animations,l))}}if(t){let c=o(e.geometries),l=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(c){let l=[];for(let a in c){let h=c[a];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new G,Cn=new G,po=new G,Rn=new G,Di=new G,Ui=new G,Lc=new G,mo=new G,go=new G,xo=new G,_o=new pt,vo=new pt,yo=new pt,In=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),Cn.subVectors(n,t),po.subVectors(e,t);let o=rn.dot(rn),c=rn.dot(Cn),l=rn.dot(po),a=Cn.dot(Cn),h=Cn.dot(po),u=o*a-c*c;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(a*l-c*h)*f,x=(o*h-c*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,o,c,l){return this.getBarycoord(e,t,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(c,Rn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return _o.setScalar(0),vo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_o,r.x),o.addScaledVector(vo,r.y),o.addScaledVector(yo,r.z),o}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),Cn.subVectors(e,t),rn.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,c;Di.subVectors(s,n),Ui.subVectors(r,n),mo.subVectors(e,n);let l=Di.dot(mo),a=Ui.dot(mo);if(l<=0&&a<=0)return t.copy(n);go.subVectors(e,s);let h=Di.dot(go),u=Ui.dot(go);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*a;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Di,o);xo.subVectors(e,r);let p=Di.dot(xo),x=Ui.dot(xo);if(x>=0&&p<=x)return t.copy(r);let y=p*a-l*x;if(y<=0&&a>=0&&x<=0)return c=a/(a-x),t.copy(n).addScaledVector(Ui,c);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Lc.subVectors(r,s),c=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(Lc,c);let d=1/(m+y+f);return o=y*d,c=f*d,t.copy(n).addScaledVector(Di,o).addScaledVector(Ui,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=fh(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Mo(o,r,e+1/3),this.g=Mo(o,r,e),this.b=Mo(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return nt.workingToColorSpace(Pt.copy(this),e),Math.round(Qe(Pt.r*255,0,255))*65536+Math.round(Qe(Pt.g*255,0,255))*256+Math.round(Qe(Pt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Pt.copy(this),t);let n=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(n,s,r),c=Math.min(n,s,r),l,a,h=(c+o)/2;if(c===o)l=0,a=0;else{let u=o-c;switch(a=h<=.5?u/(o+c):u/(2-o-c),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=a,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=St){nt.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,s=Pt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(cr);let n=no(Xn.h,cr.h,t),s=no(Xn.s,cr.s,t),r=no(Xn.l,cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Ze;Ze.NAMES=Rl;var Eh=0,Fn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=ui,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=Er,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==br&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let l=r[c];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pi=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new G,lr=new Fe,Th=0,kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cr,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cr&&(e.usage=this.usage),e}};var Cs=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rs=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wh=0,jt=new gt,So=new Rt,Ni=new G,$t=new Jn,_s=new Jn,Tt=new G,Yt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?Rs:Cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let c=t[r];_s.setFromBufferAttribute(c),this.morphTargetsRelative?(Tt.addVectors($t.min,_s.min),$t.expandByPoint(Tt),Tt.addVectors($t.max,_s.max),$t.expandByPoint(Tt)):($t.expandByPoint(_s.min),$t.expandByPoint(_s.max))}$t.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){let c=t[r],l=this.morphTargetsRelative;for(let a=0,h=c.count;a<h;a++)Tt.fromBufferAttribute(c,a),l&&(Ni.fromBufferAttribute(e,a),Tt.add(Ni)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),c=[],l=[];for(let V=0;V<n.count;V++)c[V]=new G,l[V]=new G;let a=new G,h=new G,u=new G,f=new Fe,p=new Fe,x=new Fe,y=new G,m=new G;function d(V,S,M){a.fromBufferAttribute(n,V),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,V),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,M),h.sub(a),u.sub(a),p.sub(f),x.sub(f);let O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(O),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(O),c[V].add(y),c[S].add(y),c[M].add(y),l[V].add(m),l[S].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let V=0,S=R.length;V<S;++V){let M=R[V],O=M.start,Y=M.count;for(let ne=O,te=O+Y;ne<te;ne+=3)d(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}let C=new G,b=new G,U=new G,P=new G;function N(V){U.fromBufferAttribute(s,V),P.copy(U);let S=c[V];C.copy(S),C.sub(U.multiplyScalar(U.dot(S))).normalize(),b.crossVectors(P,S);let O=b.dot(l[V])<0?-1:1;o.setXYZW(V,C.x,C.y,C.z,O)}for(let V=0,S=R.length;V<S;++V){let M=R[V],O=M.start,Y=M.count;for(let ne=O,te=O+Y;ne<te;ne+=3)N(e.getX(ne+0)),N(e.getX(ne+1)),N(e.getX(ne+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,c=new G,l=new G,a=new G,h=new G,u=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),c.add(h),l.add(h),a.add(h),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,a.x,a.y,a.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(c,l){let a=c.array,h=c.itemSize,u=c.normalized,f=new a.constructor(l.length*h),p=0,x=0;for(let y=0,m=l.length;y<m;y++){c.isInterleavedBufferAttribute?p=l[y]*c.data.stride+c.offset:p=l[y]*h;for(let d=0;d<h;d++)f[x++]=a[p++]}return new kt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let c in s){let l=s[c],a=e(l,n);t.setAttribute(c,a)}let r=this.morphAttributes;for(let c in r){let l=[],a=r[c];for(let h=0,u=a.length;h<u;h++){let f=a[h],p=e(f,n);l.push(p)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,l=o.length;c<l;c++){let a=o[c];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let a in l)l[a]!==void 0&&(e[a]=l[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let a=n[l];e.data.attributes[l]=a.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let a=this.morphAttributes[l],h=[];for(let u=0,f=a.length;u<f;u++){let p=a[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dc=new gt,ci=new Dr,hr=new qi,Uc=new G,ur=new G,dr=new G,fr=new G,bo=new G,pr=new G,Nc=new G,mr=new G,Ft=class extends Rt{constructor(e=new Yt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let c=this.morphTargetInfluences;if(r&&c){pr.set(0,0,0);for(let l=0,a=r.length;l<a;l++){let h=c[l],u=r[l];h!==0&&(bo.fromBufferAttribute(u,e),o?pr.addScaledVector(bo,h):pr.addScaledVector(bo.sub(t),h))}t.add(pr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(hr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(hr,Uc)===null||ci.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(Dc.copy(r).invert(),ci.copy(e.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,c=r.index,l=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],d=o[m.materialIndex],R=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=R,U=C;b<U;b+=3){let P=c.getX(b),N=c.getX(b+1),V=c.getX(b+2);s=gr(this,d,e,n,a,h,u,P,N,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let R=c.getX(m),C=c.getX(m+1),b=c.getX(m+2);s=gr(this,o,e,n,a,h,u,R,C,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],d=o[m.materialIndex],R=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=R,U=C;b<U;b+=3){let P=b,N=b+1,V=b+2;s=gr(this,d,e,n,a,h,u,P,N,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let R=m,C=m+1,b=m+2;s=gr(this,o,e,n,a,h,u,R,C,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ah(i,e,t,n,s,r,o,c){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,c):l=n.intersectTriangle(s,r,o,e.side===Dn,c),l===null)return null;mr.copy(c),mr.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(mr);return a<t.near||a>t.far?null:{distance:a,point:mr.clone(),object:i}}function gr(i,e,t,n,s,r,o,c,l,a){i.getVertexPosition(c,ur),i.getVertexPosition(l,dr),i.getVertexPosition(a,fr);let h=Ah(i,e,t,n,ur,dr,fr,Nc);if(h){let u=new G;In.getBarycoord(Nc,ur,dr,fr,u),s&&(h.uv=In.getInterpolatedAttribute(s,c,l,a,u,new Fe)),r&&(h.uv1=In.getInterpolatedAttribute(r,c,l,a,u,new Fe)),o&&(h.normal=In.getInterpolatedAttribute(o,c,l,a,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:c,b:l,c:a,normal:new G,materialIndex:0};In.getNormal(ur,dr,fr,f.normal),h.face=f,h.barycoord=u}return h}var _n=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],a=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function x(y,m,d,R,C,b,U,P,N,V,S){let M=b/N,O=U/V,Y=b/2,ne=U/2,te=P/2,ie=N+1,se=V+1,me=0,ee=0,_e=new G;for(let Se=0;Se<se;Se++){let Pe=Se*O-ne;for(let Ve=0;Ve<ie;Ve++){let $e=Ve*M-Y;_e[y]=$e*R,_e[m]=Pe*C,_e[d]=te,a.push(_e.x,_e.y,_e.z),_e[y]=0,_e[m]=0,_e[d]=P>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(Ve/N),u.push(1-Se/V),me+=1}}for(let Se=0;Se<V;Se++)for(let Pe=0;Pe<N;Pe++){let Ve=f+Pe+ie*Se,$e=f+Pe+ie*(Se+1),et=f+(Pe+1)+ie*(Se+1),Ke=f+(Pe+1)+ie*Se;l.push(Ve,$e,Ke),l.push($e,et,Ke),ee+=6}c.addGroup(p,ee,S),p+=ee,f+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=vi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ch(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Il={clone:vi,merge:Lt},Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Is=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new G,Fc=new Fe,Oc=new Fe,Ct=class extends Is{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Fc,Oc),t.subVectors(Oc,Fc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/a,s*=o.width/l,n*=o.height/a}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Oi=1,Ur=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let o=new Ct(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let c=new Ct(Fi,Oi,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Fi,Oi,e,t);l.layers=this.layers,this.add(l);let a=new Ct(Fi,Oi,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,c,l]=t;for(let a of t)this.remove(a);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,l,a,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,a),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ps=class extends Vt{constructor(e=[],t=xi,n,s,r,o,c,l,a,h){super(e,t,n,s,r,o,c,l,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nr=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ps(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:On});r.uniforms.tEquirect.value=t;let o=new Ft(s,r),c=t.minFilter;return t.minFilter===Qn&&(t.minFilter=on),new Ur(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Pn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ph={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,c=this._targetRay,l=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(a,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;a.inputState.pinching&&f>p+x?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&f<=p-x&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ph)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ls=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cr,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new G,Ds=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mi=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bi,vs=new G,zi=new G,ki=new G,Vi=new Fe,ys=new Fe,Pl=new gt,xr=new G,Ms=new G,_r=new G,Bc=new Fe,Eo=new Fe,zc=new Fe,Zi=class extends Rt{constructor(e=new mi){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Ds(n,3,0,!1)),Bi.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Pl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;vr(xr.set(-.5,-.5,0),ki,o,zi,s,r),vr(Ms.set(.5,-.5,0),ki,o,zi,s,r),vr(_r.set(.5,.5,0),ki,o,zi,s,r),Bc.set(0,0),Eo.set(1,0),zc.set(1,1);let c=e.ray.intersectTriangle(xr,Ms,_r,!1,vs);if(c===null&&(vr(Ms.set(-.5,.5,0),ki,o,zi,s,r),Eo.set(0,1),c=e.ray.intersectTriangle(xr,_r,Ms,!1,vs),c===null))return;let l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:In.getInterpolation(vs,xr,Ms,_r,Bc,Eo,zc,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function vr(i,e,t,n,s,r){Vi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Vi.x-s*Vi.y,ys.y=s*Vi.x+r*Vi.y):ys.copy(Vi),i.copy(e),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Pl)}var To=new G,Lh=new G,Dh=new Ye,mn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=To.subVectors(n,t).cross(Lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(To),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dh.getNormalMatrix(e),s=this.coplanarPoint(To).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new qi,Uh=new Fe(.5,.5),yr=new G,Ji=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],a=r[3],h=r[4],u=r[5],f=r[6],p=r[7],x=r[8],y=r[9],m=r[10],d=r[11],R=r[12],C=r[13],b=r[14],U=r[15];if(s[0].setComponents(a-o,p-h,d-x,U-R).normalize(),s[1].setComponents(a+o,p+h,d+x,U+R).normalize(),s[2].setComponents(a+c,p+u,d+y,U+C).normalize(),s[3].setComponents(a-c,p-u,d-y,U-C).normalize(),n)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(a-l,p-f,d-m,U-b).normalize();else if(s[4].setComponents(a-l,p-f,d-m,U-b).normalize(),t===an)s[5].setComponents(a+l,p+f,d+m,U+b).normalize();else if(t===Es)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let t=Uh.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ki=class extends Vt{constructor(e,t,n,s,r,o,c,l,a){super(e,t,n,s,r,o,c,l,a),this.isCanvasTexture=!0,this.needsUpdate=!0}},Us=class extends Vt{constructor(e,t,n=ei,s,r,o,c=Qt,l=Qt,a,h=Gi,u=1){if(h!==Gi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,c,l,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ns=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Fs=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:l};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,y=[],m=n/2,d=0;R(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function R(){let b=new G,U=new G,P=0,N=(t-e)/n;for(let V=0;V<=r;V++){let S=[],M=V/r,O=M*(t-e)+e;for(let Y=0;Y<=s;Y++){let ne=Y/s,te=ne*l+c,ie=Math.sin(te),se=Math.cos(te);U.x=O*ie,U.y=-M*n+m,U.z=O*se,u.push(U.x,U.y,U.z),b.set(ie,N,se).normalize(),f.push(b.x,b.y,b.z),p.push(ne,1-M),S.push(x++)}y.push(S)}for(let V=0;V<s;V++)for(let S=0;S<r;S++){let M=y[S][V],O=y[S+1][V],Y=y[S+1][V+1],ne=y[S][V+1];(e>0||S!==0)&&(h.push(M,O,ne),P+=3),(t>0||S!==r-1)&&(h.push(O,Y,ne),P+=3)}a.addGroup(d,P,0),d+=P}function C(b){let U=x,P=new Fe,N=new G,V=0,S=b===!0?e:t,M=b===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),x++;let O=x;for(let Y=0;Y<=s;Y++){let te=Y/s*l+c,ie=Math.cos(te),se=Math.sin(te);N.x=S*se,N.y=m*M,N.z=S*ie,u.push(N.x,N.y,N.z),f.push(0,M,0),P.x=ie*.5+.5,P.y=se*.5*M+.5,p.push(P.x,P.y),x++}for(let Y=0;Y<s;Y++){let ne=U+Y,te=O+Y;b===!0?h.push(te,te+1,ne):h.push(te+1,te,ne),V+=3}a.addGroup(d,V,b===!0?1:2),d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ji=class i extends Yt{constructor(e=[new Fe(0,-.5),new Fe(.5,0),new Fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],o=[],c=[],l=[],a=[],h=1/t,u=new G,f=new Fe,p=new G,x=new G,y=new G,m=0,d=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:m=e[R+1].x-e[R].x,d=e[R+1].y-e[R].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[R+1].x-e[R].x,d=e[R+1].y-e[R].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(x)}for(let R=0;R<=t;R++){let C=n+R*h*s,b=Math.sin(C),U=Math.cos(C);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*b,u.y=e[P].y,u.z=e[P].x*U,o.push(u.x,u.y,u.z),f.x=R/t,f.y=P/(e.length-1),c.push(f.x,f.y);let N=l[3*P+0]*b,V=l[3*P+1],S=l[3*P+0]*U;a.push(N,V,S)}}for(let R=0;R<t;R++)for(let C=0;C<e.length-1;C++){let b=C+R*e.length,U=b,P=b+e.length,N=b+e.length+1,V=b+1;r.push(U,P,V),r.push(N,V,P)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(c,2)),this.setAttribute("normal",new xt(a,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Os=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,c=Math.floor(n),l=Math.floor(s),a=c+1,h=l+1,u=e/c,f=t/l,p=[],x=[],y=[],m=[];for(let d=0;d<h;d++){let R=d*f-o;for(let C=0;C<a;C++){let b=C*u-r;x.push(b,-R,0),y.push(0,0,1),m.push(C/c),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<c;R++){let C=R+a*d,b=R+a*(d+1),U=R+1+a*(d+1),P=R+1+a*d;p.push(C,b,P),p.push(b,U,P)}this.setIndex(p),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qi=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+c,Math.PI),a=0,h=[],u=new G,f=new G,p=[],x=[],y=[],m=[];for(let d=0;d<=n;d++){let R=[],C=d/n,b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){let P=U/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+C*c),u.y=e*Math.cos(o+C*c),u.z=e*Math.sin(s+P*r)*Math.sin(o+C*c),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(P+b,1-C),R.push(a++)}h.push(R)}for(let d=0;d<n;d++)for(let R=0;R<t;R++){let C=h[d][R+1],b=h[d][R],U=h[d+1][R],P=h[d+1][R+1];(d!==0||o>0)&&p.push(C,b,P),(d!==n-1||l<Math.PI)&&p.push(b,U,P)}this.setIndex(p),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],l=[],a=[],h=new G,u=new G,f=new G;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let y=x/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),a.push(x/s),a.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let y=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,d=(s+1)*(p-1)+x,R=(s+1)*p+x;o.push(y,m,R),o.push(m,d,R)}this.setIndex(o),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bs=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Or=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Br=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let c=t[1];e<c&&(n=2,r=c);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let c=n+o>>>1;e<t[c]?o=c:n=c+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zr=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,c=s[r],l=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case Co:r=e,c=2*t-n;break;case Ro:r=s.length-2,c=t+s[r]-s[r+1];break;default:r=e,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Co:o=e,l=2*n-t;break;case Ro:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-c),this._weightNext=a/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),y=x*x,m=y*x,d=-f*m+2*f*y-f*x,R=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*x+1,C=(-1-p)*m+(1.5+p)*y+.5*x,b=p*m-p*y;for(let U=0;U!==c;++U)r[U]=d*o[h+U]+R*o[a+U]+C*o[l+U]+b*o[u+U];return r}},kr=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==c;++f)r[f]=o[a+f]*u+o[l+f]*h;return r}},Vr=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){let l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,o),e=!1;break}o=l}if(s!==void 0&&Nh(s))for(let c=0,l=s.length;c!==l;++c){let a=s[c];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=e.length-1,o=1;for(let c=1;c<r;++c){let l=!1,a=e[c],h=e[c+1];if(a!==h&&(c!==1||a!==e[0]))if(s)l=!0;else{let u=c*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let y=t[u+x];if(y!==t[f+x]||y!==t[p+x]){l=!0;break}}}if(l){if(c!==o){e[o]=e[c];let u=c*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let c=r*n,l=o*n,a=0;a!==n;++a)t[l+a]=t[c+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zt.prototype.ValueTypeName="";Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Ar;var Kn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Ss;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};Hr.prototype.ValueTypeName="color";var Gr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};Gr.prototype.ValueTypeName="number";var Wr=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=(n-t)/(s-t),a=e*c;for(let h=a+c;a!==h;a+=4)Nn.slerpFlat(r,0,o,a-c,o,a,l);return r}},zs=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Wr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Zt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ss;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};Xr.prototype.ValueTypeName="vector";var qr=class{constructor(e,t,n){let s=this,r=!1,o=0,c=0,l,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,c),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=a.length;u<f;u+=2){let p=a[u],x=a[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ll=new qr,$r=class{constructor(e){this.manager=e!==void 0?e:Ll,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ts=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wo=new gt,kc=new G,Vc=new G,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vs=class extends Is{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,c=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lo=class extends Po{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Lo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yr=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ec="\\[\\]\\.:\\/",Fh=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",Oh="[^"+ec.replace("\\.","")+"]",Bh=/((?:WC+[\/:])*)/.source.replace("WC",tc),zh=/(WCOD+)?/.source.replace("WCOD",Oh),kh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),Vh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),Hh=new RegExp("^"+Bh+zh+kh+Vh+"$"),Gh=["material","materials","bones","map"],Do=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fh,"")}static parseTrackName(e){let t=Hh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===t||c.uuid===t)return c;let l=n(c.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Do;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sm=new Float32Array(1);function nc(i,e,t,n){let s=Wh(n);switch(t){case Xo:return i*e;case $o:return i*e/s.components*s.byteLength;case la:return i*e/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case ha:return i*e*2/s.components*s.byteLength;case qo:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case ua:return i*e*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $s:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(e,8)/4;case da:case pa:return Math.max(i,8)*Math.max(e,8)/2;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Da:case Ua:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wh(i){switch(i){case hn:case Vo:return{byteLength:1,components:1};case is:case Ho:case ss:return{byteLength:2,components:1};case oa:case ca:return{byteLength:2,components:4};case ei:case aa:case Mn:return{byteLength:4,components:1};case Go:case Wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qh(i){let e=new WeakMap;function t(c,l){let a=c.array,h=c.usage,u=a.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,a,h),c.onUploadCallback();let p;if(a instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)p=i.HALF_FLOAT;else if(a instanceof Uint16Array)c.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)p=i.SHORT;else if(a instanceof Uint32Array)p=i.UNSIGNED_INT;else if(a instanceof Int32Array)p=i.INT;else if(a instanceof Int8Array)p=i.BYTE;else if(a instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:p,bytesPerElement:a.BYTES_PER_ELEMENT,version:c.version,size:u}}function n(c,l,a){let h=l.array,u=l.updateRanges;if(i.bindBuffer(a,c),u.length===0)i.bufferSubData(a,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){let x=u[f],y=u[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){let y=u[p];i.bufferSubData(a,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=e.get(c);l&&(i.deleteBuffer(l.buffer),e.delete(c))}function o(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let h=e.get(c);(!h||h.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let a=e.get(c);if(a===void 0)e.set(c,t(c,l));else if(a.version<c.version){if(a.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,c,l),a.version=c.version}}return{get:s,remove:r,update:o}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,au=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_u=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ef=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_f=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:$h,alphahash_pars_fragment:Yh,alphamap_fragment:Zh,alphamap_pars_fragment:Jh,alphatest_fragment:Kh,alphatest_pars_fragment:jh,aomap_fragment:Qh,aomap_pars_fragment:eu,batching_pars_vertex:tu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:au,bumpmap_pars_fragment:ou,clipping_planes_fragment:cu,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:xu,defaultnormal_vertex:_u,displacementmap_pars_vertex:vu,displacementmap_vertex:yu,emissivemap_fragment:Mu,emissivemap_pars_fragment:Su,colorspace_fragment:bu,colorspace_pars_fragment:Eu,envmap_fragment:Tu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Au,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:zu,envmap_vertex:Ru,fog_vertex:Iu,fog_pars_vertex:Pu,fog_fragment:Lu,fog_pars_fragment:Du,gradientmap_pars_fragment:Uu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Ou,lights_pars_begin:Bu,lights_toon_fragment:ku,lights_toon_pars_fragment:Vu,lights_phong_fragment:Hu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:qu,lights_fragment_maps:$u,lights_fragment_end:Yu,logdepthbuf_fragment:Zu,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:ju,map_fragment:Qu,map_pars_fragment:ed,map_particle_fragment:td,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:sd,morphinstance_vertex:rd,morphcolor_vertex:ad,morphnormal_vertex:od,morphtarget_pars_vertex:cd,morphtarget_vertex:ld,normal_fragment_begin:hd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:vd,opaque_fragment:yd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:bd,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Rd,shadowmap_vertex:Id,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Ud,skinnormal_vertex:Nd,specularmap_fragment:Fd,specularmap_pars_fragment:Od,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:kd,transmission_pars_fragment:Vd,uv_pars_fragment:Hd,uv_pars_vertex:Gd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:qd,background_frag:$d,backgroundCube_vert:Yd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:Kd,depth_vert:jd,depth_frag:Qd,distanceRGBA_vert:ef,distanceRGBA_frag:tf,equirect_vert:nf,equirect_frag:sf,linedashed_vert:rf,linedashed_frag:af,meshbasic_vert:of,meshbasic_frag:cf,meshlambert_vert:lf,meshlambert_frag:hf,meshmatcap_vert:uf,meshmatcap_frag:df,meshnormal_vert:ff,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:xf,meshphysical_frag:_f,meshtoon_vert:vf,meshtoon_frag:yf,points_vert:Mf,points_frag:Sf,shadow_vert:bf,shadow_frag:Ef,sprite_vert:Tf,sprite_frag:wf},Te={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Sn={basic:{uniforms:Lt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Lt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Lt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Lt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Lt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Lt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Lt([Te.points,Te.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Lt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Lt([Te.common,Te.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Lt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Lt([Te.sprite,Te.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Lt([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Lt([Te.lights,Te.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Sn.physical={uniforms:Lt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var ka={r:0,b:0,g:0},yi=new cn,Af=new gt;function Cf(i,e,t,n,s,r,o){let c=new Ze(0),l=r===!0?0:1,a,h,u=null,f=0,p=null;function x(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function y(C){let b=!1,U=x(C);U===null?d(c,l):U&&U.isColor&&(d(U,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,b){let U=x(b);U&&(U.isCubeTexture||U.mapping===Gs)?(h===void 0&&(h=new Ft(new _n(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:vi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(b.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(yi)),h.material.toneMapped=nt.getTransfer(U.colorSpace)!==rt,(u!==U||f!==U.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=U,f=U.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(a===void 0&&(a=new Ft(new Os(2,2),new ln({name:"BackgroundMaterial",uniforms:vi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(a)),a.material.uniforms.t2D.value=U,a.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,a.material.toneMapped=nt.getTransfer(U.colorSpace)!==rt,U.matrixAutoUpdate===!0&&U.updateMatrix(),a.material.uniforms.uvTransform.value.copy(U.matrix),(u!==U||f!==U.version||p!==i.toneMapping)&&(a.material.needsUpdate=!0,u=U,f=U.version,p=i.toneMapping),a.layers.enableAll(),C.unshift(a,a.geometry,a.material,0,0,null))}function d(C,b){C.getRGB(ka,Qo(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,b,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,b=1){c.set(C),l=b,d(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(c,l)},render:y,addToRenderList:m,dispose:R}}function Rf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(M,O,Y,ne,te){let ie=!1,se=u(ne,Y,O);r!==se&&(r=se,a(r.object)),ie=p(M,ne,Y,te),ie&&x(M,ne,Y,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,b(M,O,Y,ne),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function a(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,O,Y){let ne=Y.wireframe===!0,te=n[M.id];te===void 0&&(te={},n[M.id]=te);let ie=te[O.id];ie===void 0&&(ie={},te[O.id]=ie);let se=ie[ne];return se===void 0&&(se=f(l()),ie[ne]=se),se}function f(M){let O=[],Y=[],ne=[];for(let te=0;te<t;te++)O[te]=0,Y[te]=0,ne[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:ne,object:M,attributes:{},index:null}}function p(M,O,Y,ne){let te=r.attributes,ie=O.attributes,se=0,me=Y.getAttributes();for(let ee in me)if(me[ee].location>=0){let Se=te[ee],Pe=ie[ee];if(Pe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor)),Se===void 0||Se.attribute!==Pe||Pe&&Se.data!==Pe.data)return!0;se++}return r.attributesNum!==se||r.index!==ne}function x(M,O,Y,ne){let te={},ie=O.attributes,se=0,me=Y.getAttributes();for(let ee in me)if(me[ee].location>=0){let Se=ie[ee];Se===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));let Pe={};Pe.attribute=Se,Se&&Se.data&&(Pe.data=Se.data),te[ee]=Pe,se++}r.attributes=te,r.attributesNum=se,r.index=ne}function y(){let M=r.newAttributes;for(let O=0,Y=M.length;O<Y;O++)M[O]=0}function m(M){d(M,0)}function d(M,O){let Y=r.newAttributes,ne=r.enabledAttributes,te=r.attributeDivisors;Y[M]=1,ne[M]===0&&(i.enableVertexAttribArray(M),ne[M]=1),te[M]!==O&&(i.vertexAttribDivisor(M,O),te[M]=O)}function R(){let M=r.newAttributes,O=r.enabledAttributes;for(let Y=0,ne=O.length;Y<ne;Y++)O[Y]!==M[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function C(M,O,Y,ne,te,ie,se){se===!0?i.vertexAttribIPointer(M,O,Y,te,ie):i.vertexAttribPointer(M,O,Y,ne,te,ie)}function b(M,O,Y,ne){y();let te=ne.attributes,ie=Y.getAttributes(),se=O.defaultAttributeValues;for(let me in ie){let ee=ie[me];if(ee.location>=0){let _e=te[me];if(_e===void 0&&(me==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),me==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),_e!==void 0){let Se=_e.normalized,Pe=_e.itemSize,Ve=e.get(_e);if(Ve===void 0)continue;let $e=Ve.buffer,et=Ve.type,Ke=Ve.bytesPerElement,oe=et===i.INT||et===i.UNSIGNED_INT||_e.gpuType===aa;if(_e.isInterleavedBufferAttribute){let re=_e.data,Ae=re.stride,Oe=_e.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)d(ee.location+De,re.meshPerAttribute);M.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<ee.locationSize;De++)m(ee.location+De);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let De=0;De<ee.locationSize;De++)C(ee.location+De,Pe/ee.locationSize,et,Se,Ae*Ke,(Oe+Pe/ee.locationSize*De)*Ke,oe)}else{if(_e.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)d(ee.location+re,_e.meshPerAttribute);M.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let re=0;re<ee.locationSize;re++)m(ee.location+re);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let re=0;re<ee.locationSize;re++)C(ee.location+re,Pe/ee.locationSize,et,Se,Pe*Ke,Pe/ee.locationSize*re*Ke,oe)}}else if(se!==void 0){let Se=se[me];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(ee.location,Se);break;case 3:i.vertexAttrib3fv(ee.location,Se);break;case 4:i.vertexAttrib4fv(ee.location,Se);break;default:i.vertexAttrib1fv(ee.location,Se)}}}}R()}function U(){V();for(let M in n){let O=n[M];for(let Y in O){let ne=O[Y];for(let te in ne)h(ne[te].object),delete ne[te];delete O[Y]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;let O=n[M.id];for(let Y in O){let ne=O[Y];for(let te in ne)h(ne[te].object),delete ne[te];delete O[Y]}delete n[M.id]}function N(M){for(let O in n){let Y=n[O];if(Y[M.id]===void 0)continue;let ne=Y[M.id];for(let te in ne)h(ne[te].object),delete ne[te];delete Y[M.id]}}function V(){S(),o=!0,r!==s&&(r=s,a(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:V,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:m,disableUnusedAttributes:R}}function If(i,e,t){let n;function s(a){n=a}function r(a,h){i.drawArrays(n,a,h),t.update(h,n,1)}function o(a,h,u){u!==0&&(i.drawArraysInstanced(n,a,h,u),t.update(h,n,u))}function c(a,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function l(a,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<a.length;x++)o(a[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,a,0,h,0,f,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*f[y];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Pf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==en&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){let V=N===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==hn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Mn&&!V)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=l(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:U,maxSamples:P}}function Lf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new mn,c=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):a();else{let R=r?0:n,C=R*4,b=d.clippingState||null;l.value=b,b=h(x,f,C,p);for(let U=0;U!==C;++U)b[U]=t[U];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function a(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let d=p+y*4,R=f.matrixWorldInverse;c.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,b=p;C!==y;++C,b+=4)o.copy(u[C]).applyMatrix4(R,c),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Df(i){let e=new WeakMap;function t(o,c){return c===ia?o.mapping=xi:c===sa&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){let c=o.mapping;if(c===ia||c===sa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let a=new Nr(l.height);return a.fromEquirectangularTexture(i,o),e.set(o,a),o.addEventListener("dispose",s),t(a.texture,o.mapping)}else return null}}return o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var cs=4,Dl=[.125,.215,.35,.446,.526,.582],bi=20,ic=new Vs,Ul=new Ze,sc=null,rc=0,ac=0,oc=!1,Si=(1+Math.sqrt(5))/2,os=1/Si,Nl=[new G(-Si,os,0),new G(Si,os,0),new G(-os,0,Si),new G(os,0,Si),new G(0,Si,-os),new G(0,Si,os),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Uf=new G,Ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:c=Uf}=r;sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,rc,ac),this._renderer.xr.enabled=oc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:ss,format:en,colorSpace:fi,depthBuffer:!1},s=Fl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(r)),this._blurMaterial=Ff(r,e,t)}return s}_compileMaterial(e){let t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,s,r){let l=new Ct(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ul),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new pi({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new Ft(new _n,y),d=!1,R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,d=!0):(y.color.copy(Ul),d=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(l.up.set(0,a[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):b===1?(l.up.set(0,0,a[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,a[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let U=this._cubeSize;Va(s,b*U,C>2?U:0,U,U),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=R}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===xi||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;let l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Nl[(s-r-1)%Nl.length];this._blur(e,r-1,r,o,c)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,c){let l=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],a),f=a.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),y=r/x,m=isFinite(r)?1+Math.floor(h*y):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let d=[],R=0;for(let N=0;N<bi;++N){let V=N/y,S=Math.exp(-V*V/2);d.push(S),N===0?R+=S:N<m&&(R+=2*S)}for(let N=0;N<d.length;N++)d[N]=d[N]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",c&&(f.poleAxis.value=c);let{_lodMax:C}=this;f.dTheta.value=x,f.mipInt.value=C-n;let b=this._sizeLods[s],U=3*b*(s>C-cs?s-C+cs:0),P=4*(this._cubeSize-b);Va(t,U,P,3*b,2*b),l.setRenderTarget(t),l.render(u,ic)}};function Nf(i){let e=[],t=[],n=[],s=i,r=i-cs+1+Dl.length;for(let o=0;o<r;o++){let c=Math.pow(2,s);t.push(c);let l=1/c;o>i-cs?l=Dl[o-i+cs-1]:o===0&&(l=0),n.push(l);let a=1/(c-2),h=-a,u=1+a,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,m=2,d=1,R=new Float32Array(y*x*p),C=new Float32Array(m*x*p),b=new Float32Array(d*x*p);for(let P=0;P<p;P++){let N=P%3*2/3-1,V=P>2?0:-1,S=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];R.set(S,y*x*P),C.set(f,m*x*P);let M=[P,P,P,P,P,P];b.set(M,d*x*P)}let U=new Yt;U.setAttribute("position",new kt(R,y)),U.setAttribute("uv",new kt(C,m)),U.setAttribute("faceIndex",new kt(b,d)),e.push(U),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fl(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ff(i,e,t){let n=new Float32Array(bi),s=new G(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ol(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Bl(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Of(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){let l=c.mapping,a=l===ia||l===sa,h=l===xi||l===_i;if(a||h){let u=e.get(c),f=u!==void 0?u.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return t===null&&(t=new Ga(i)),u=a?t.fromEquirectangular(c,u):t.fromCubemap(c,u),u.texture.pmremVersion=c.pmremVersion,e.set(c,u),u.texture;if(u!==void 0)return u.texture;{let p=c.image;return a&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ga(i)),u=a?t.fromEquirectangular(c):t.fromCubemap(c),u.texture.pmremVersion=c.pmremVersion,e.set(c,u),c.addEventListener("dispose",r),u.texture):null}}}return c}function s(c){let l=0,a=6;for(let h=0;h<a;h++)c[h]!==void 0&&l++;return l===a}function r(c){let l=c.target;l.removeEventListener("dispose",r);let a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zf(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function a(u){let f=[],p=u.index,x=u.attributes.position,y=0;if(p!==null){let R=p.array;y=p.version;for(let C=0,b=R.length;C<b;C+=3){let U=R[C+0],P=R[C+1],N=R[C+2];f.push(U,P,P,N,N,U)}}else if(x!==void 0){let R=x.array;y=x.version;for(let C=0,b=R.length/3-1;C<b;C+=3){let U=C+0,P=C+1,N=C+2;f.push(U,P,P,N,N,U)}}else return;let m=new(jo(f)?Rs:Cs)(f,1);m.version=y;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&a(u)}else a(u);return r.get(u)}return{get:c,update:l,getWireframeAttribute:h}}function kf(i,e,t){let n;function s(f){n=f}let r,o;function c(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function a(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,y){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)a(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,x);let d=0;for(let R=0;R<x;R++)d+=p[R]*y[R];t.update(d,n,1)}}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(r/3);break;case i.LINES:t.lines+=c*(r/2);break;case i.LINE_STRIP:t.lines+=c*(r-1);break;case i.LINE_LOOP:t.lines+=c*r;break;case i.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hf(i,e,t){let n=new WeakMap,s=new pt;function r(o,c,l){let a=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(c);if(f===void 0||f.count!==u){let S=function(){N.dispose(),n.delete(c),c.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],d=c.morphAttributes.normal||[],R=c.morphAttributes.color||[],C=0;p===!0&&(C=1),x===!0&&(C=2),y===!0&&(C=3);let b=c.attributes.position.count*C,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let P=new Float32Array(b*U*4*u),N=new ws(P,b,U,u);N.type=Mn,N.needsUpdate=!0;let V=C*4;for(let M=0;M<u;M++){let O=m[M],Y=d[M],ne=R[M],te=b*U*4*M;for(let ie=0;ie<O.count;ie++){let se=ie*V;p===!0&&(s.fromBufferAttribute(O,ie),P[te+se+0]=s.x,P[te+se+1]=s.y,P[te+se+2]=s.z,P[te+se+3]=0),x===!0&&(s.fromBufferAttribute(Y,ie),P[te+se+4]=s.x,P[te+se+5]=s.y,P[te+se+6]=s.z,P[te+se+7]=0),y===!0&&(s.fromBufferAttribute(ne,ie),P[te+se+8]=s.x,P[te+se+9]=s.y,P[te+se+10]=s.z,P[te+se+11]=ne.itemSize===4?s.w:1)}}f={count:u,texture:N,size:new Fe(b,U)},n.set(c,f),c.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<a.length;y++)p+=a[y];let x=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",a)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gf(i,e,t,n){let s=new WeakMap;function r(l){let a=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==a&&(e.update(u),s.set(u,a)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==a&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,a))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==a&&(f.update(),s.set(f,a))}return u}function o(){s=new WeakMap}function c(l){let a=l.target;a.removeEventListener("dispose",c),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:r,dispose:o}}var ih=new Vt,zl=new Us(1,1),sh=new ws,rh=new Lr,ah=new Ps,kl=[],Vl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Wl=new Float32Array(4);function hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kl[s];if(r===void 0&&(r=new Float32Array(s),kl[s]=r),e!==0){n.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(r,c)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wa(i,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function $f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Yf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),Et(t,n)}}function Zf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Et(t,n)}}function Jf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Et(t,n)}}function Kf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function tp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function rp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=Jo,r=zl):r=ih,t.setTexture2D(e||r,s)}function ap(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rh,s)}function op(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ah,s)}function cp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sh,s)}function lp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return $f;case 35674:return Yf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Kf;case 35667:case 35671:return jf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return cp}}function hp(i,e){i.uniform1fv(this.addr,e)}function up(i,e){let t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function dp(i,e){let t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function fp(i,e){let t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function pp(i,e){let t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mp(i,e){let t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gp(i,e){let t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xp(i,e){i.uniform1iv(this.addr,e)}function _p(i,e){i.uniform2iv(this.addr,e)}function vp(i,e){i.uniform3iv(this.addr,e)}function yp(i,e){i.uniform4iv(this.addr,e)}function Mp(i,e){i.uniform1uiv(this.addr,e)}function Sp(i,e){i.uniform2uiv(this.addr,e)}function bp(i,e){i.uniform3uiv(this.addr,e)}function Ep(i,e){i.uniform4uiv(this.addr,e)}function Tp(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ih,r[o])}function wp(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rh,r[o])}function Ap(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ah,r[o])}function Cp(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sh,r[o])}function Rp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return xp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return bp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}var lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lp(t.type)}},hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rp(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(e,t[c.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}function Ip(i,e,t){let n=i.name,s=n.length;for(cc.lastIndex=0;;){let r=cc.exec(n),o=cc.lastIndex,c=r[1],l=r[2]==="]",a=r[3];if(l&&(c=c|0),a===void 0||a==="["&&o+2===s){Xl(t,a===void 0?new lc(c,i,e):new hc(c,i,e));break}else{let u=t.map[c];u===void 0&&(u=new uc(c),Xl(t,u)),t=u}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ip(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let c=t[r],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ql(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pp=37297,Lp=0;function Dp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}var $l=new Ye;function Up(i){nt._getMatrix($l,nt.workingColorSpace,i);let e=`mat3( ${$l.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case bs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Dp(i.getShaderSource(e),c)}else return r}function Np(i,e){let t=Up(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fp(i,e){let t;switch(e){case hl:t="Linear";break;case ul:t="Reinhard";break;case dl:t="Cineon";break;case Hs:t="ACESFilmic";break;case pl:t="AgX";break;case ml:t="Neutral";break;case fl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ha=new G;function Op(){nt.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function zp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Zs(i){return i!==""}function Zl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(Vp,Gp)}var Hp=new Map;function Gp(i,e){let t=Je[e];if(t===void 0){let n=Hp.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dc(t)}var Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(Wp,Xp)}function Xp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function $p(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case _i:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function Zp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case cl:e="ENVMAP_BLENDING_MIX";break;case ll:e="ENVMAP_BLENDING_ADD";break}return e}function Jp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,c=t.fragmentShader,l=qp(t),a=$p(t),h=Yp(t),u=Zp(t),f=Jp(t),p=Bp(t),x=zp(r),y=s.createProgram(),m,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zs).join(`
`),d.length>0&&(d+=`
`)):(m=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),d=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Np("linearToOutputTexel",t.outputColorSpace),Op(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=dc(o),o=Zl(o,t),o=Jl(o,t),c=dc(c),c=Zl(c,t),c=Jl(c,t),o=Kl(o),c=Kl(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=R+m+o,b=R+d+c,U=ql(s,s.VERTEX_SHADER,C),P=ql(s,s.FRAGMENT_SHADER,b);s.attachShader(y,U),s.attachShader(y,P),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(O){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(y)||"",ne=s.getShaderInfoLog(U)||"",te=s.getShaderInfoLog(P)||"",ie=Y.trim(),se=ne.trim(),me=te.trim(),ee=!0,_e=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,P);else{let Se=Yl(s,U,"vertex"),Pe=Yl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ie+`
`+Se+`
`+Pe)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(se===""||me==="")&&(_e=!1);_e&&(O.diagnostics={runnable:ee,programLog:ie,vertexShader:{log:se,prefix:m},fragmentShader:{log:me,prefix:d}})}s.deleteShader(U),s.deleteShader(P),V=new ls(s,y),S=kp(s,y)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Pp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=P,this}var jp=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pc(e),t.set(e,n)),n}},pc=class{constructor(e){this.id=jp++,this.code=e,this.usedTimes=0}};function Qp(i,e,t,n,s,r,o){let c=new As,l=new fc,a=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return a.add(S),S===0?"uv":`uv${S}`}function m(S,M,O,Y,ne){let te=Y.fog,ie=ne.geometry,se=S.isMeshStandardMaterial?Y.environment:null,me=(S.isMeshStandardMaterial?t:e).get(S.envMap||se),ee=me&&me.mapping===Gs?me.image.height:null,_e=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Se=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Pe=Se!==void 0?Se.length:0,Ve=0;ie.morphAttributes.position!==void 0&&(Ve=1),ie.morphAttributes.normal!==void 0&&(Ve=2),ie.morphAttributes.color!==void 0&&(Ve=3);let $e,et,Ke,oe;if(_e){let he=Sn[_e];$e=he.vertexShader,et=he.fragmentShader}else $e=S.vertexShader,et=S.fragmentShader,l.update(S),Ke=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);let re=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Oe=ne.isInstancedMesh===!0,De=ne.isBatchedMesh===!0,Xe=!!S.map,_t=!!S.matcap,L=!!me,at=!!S.aoMap,Ge=!!S.lightMap,D=!!S.bumpMap,I=!!S.normalMap,E=!!S.displacementMap,A=!!S.emissiveMap,ae=!!S.metalnessMap,H=!!S.roughnessMap,B=S.anisotropy>0,_=S.clearcoat>0,g=S.dispersion>0,F=S.iridescence>0,k=S.sheen>0,j=S.transmission>0,T=B&&!!S.anisotropyMap,q=_&&!!S.clearcoatMap,Z=_&&!!S.clearcoatNormalMap,ge=_&&!!S.clearcoatRoughnessMap,be=F&&!!S.iridescenceMap,le=F&&!!S.iridescenceThicknessMap,Me=k&&!!S.sheenColorMap,ze=k&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ve=!!S.specularColorMap,qe=!!S.specularIntensityMap,z=j&&!!S.transmissionMap,pe=j&&!!S.thicknessMap,ye=!!S.gradientMap,Re=!!S.alphaMap,de=S.alphaTest>0,ce=!!S.alphaHash,w=!!S.extensions,J=Bn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(J=i.toneMapping);let xe={shaderID:_e,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:et,defines:S.defines,customVertexShaderID:Ke,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,batchingColor:De&&ne._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ne.instanceColor!==null,instancingMorph:Oe&&ne.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:fi,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:_t,envMap:L,envMapMode:L&&me.mapping,envMapCubeUVHeight:ee,aoMap:at,lightMap:Ge,bumpMap:D,normalMap:I,displacementMap:f&&E,emissiveMap:A,normalMapObjectSpace:I&&S.normalMapType===vl,normalMapTangentSpace:I&&S.normalMapType===Zo,metalnessMap:ae,roughnessMap:H,anisotropy:B,anisotropyMap:T,clearcoat:_,clearcoatMap:q,clearcoatNormalMap:Z,clearcoatRoughnessMap:ge,dispersion:g,iridescence:F,iridescenceMap:be,iridescenceThicknessMap:le,sheen:k,sheenColorMap:Me,sheenRoughnessMap:ze,specularMap:Ce,specularColorMap:ve,specularIntensityMap:qe,transmission:j,transmissionMap:z,thicknessMap:pe,gradientMap:ye,opaque:S.transparent===!1&&S.blending===ui&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:ce,combine:S.combine,mapUv:Xe&&y(S.map.channel),aoMapUv:at&&y(S.aoMap.channel),lightMapUv:Ge&&y(S.lightMap.channel),bumpMapUv:D&&y(S.bumpMap.channel),normalMapUv:I&&y(S.normalMap.channel),displacementMapUv:E&&y(S.displacementMap.channel),emissiveMapUv:A&&y(S.emissiveMap.channel),metalnessMapUv:ae&&y(S.metalnessMap.channel),roughnessMapUv:H&&y(S.roughnessMap.channel),anisotropyMapUv:T&&y(S.anisotropyMap.channel),clearcoatMapUv:q&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Z&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(S.sheenRoughnessMap.channel),specularMapUv:Ce&&y(S.specularMap.channel),specularColorMapUv:ve&&y(S.specularColorMap.channel),specularIntensityMapUv:qe&&y(S.specularIntensityMap.channel),transmissionMapUv:z&&y(S.transmissionMap.channel),thicknessMapUv:pe&&y(S.thicknessMap.channel),alphaMapUv:Re&&y(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(I||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ie.attributes.uv&&(Xe||Re),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:ne.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:A&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:w&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(w&&S.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=a.has(1),xe.vertexUv2s=a.has(2),xe.vertexUv3s=a.has(3),a.clear(),xe}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)M.push(O),M.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(R(M,S),C(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function R(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function C(S,M){c.disableAll(),M.supportsVertexTextures&&c.enable(0),M.instancing&&c.enable(1),M.instancingColor&&c.enable(2),M.instancingMorph&&c.enable(3),M.matcap&&c.enable(4),M.envMap&&c.enable(5),M.normalMapObjectSpace&&c.enable(6),M.normalMapTangentSpace&&c.enable(7),M.clearcoat&&c.enable(8),M.iridescence&&c.enable(9),M.alphaTest&&c.enable(10),M.vertexColors&&c.enable(11),M.vertexAlphas&&c.enable(12),M.vertexUv1s&&c.enable(13),M.vertexUv2s&&c.enable(14),M.vertexUv3s&&c.enable(15),M.vertexTangents&&c.enable(16),M.anisotropy&&c.enable(17),M.alphaHash&&c.enable(18),M.batching&&c.enable(19),M.dispersion&&c.enable(20),M.batchingColor&&c.enable(21),M.gradientMap&&c.enable(22),S.push(c.mask),c.disableAll(),M.fog&&c.enable(0),M.useFog&&c.enable(1),M.flatShading&&c.enable(2),M.logarithmicDepthBuffer&&c.enable(3),M.reversedDepthBuffer&&c.enable(4),M.skinning&&c.enable(5),M.morphTargets&&c.enable(6),M.morphNormals&&c.enable(7),M.morphColors&&c.enable(8),M.premultipliedAlpha&&c.enable(9),M.shadowMapEnabled&&c.enable(10),M.doubleSided&&c.enable(11),M.flipSided&&c.enable(12),M.useDepthPacking&&c.enable(13),M.dithering&&c.enable(14),M.transmission&&c.enable(15),M.sheen&&c.enable(16),M.opaque&&c.enable(17),M.pointsUvs&&c.enable(18),M.decodeVideoTexture&&c.enable(19),M.decodeVideoTextureEmissive&&c.enable(20),M.alphaToCoverage&&c.enable(21),S.push(c.mask)}function b(S){let M=x[S.type],O;if(M){let Y=Sn[M];O=Il.clone(Y.uniforms)}else O=S.uniforms;return O}function U(S,M){let O;for(let Y=0,ne=h.length;Y<ne;Y++){let te=h[Y];if(te.cacheKey===M){O=te,++O.usedTimes;break}}return O===void 0&&(O=new Kp(i,M,S,r),h.push(O)),O}function P(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function N(S){l.remove(S)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:U,releaseProgram:P,releaseShaderCache:N,programs:h,dispose:V}}function em(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,l){i.get(o)[c]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ql(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,x,y,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=y,d.group=m),e++,d}function c(u,f,p,x,y,m){let d=o(u,f,p,x,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,x,y,m){let d=o(u,f,p,x,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function a(u,f){t.length>1&&t.sort(u||tm),n.length>1&&n.sort(f||Ql),s.length>1&&s.sort(f||Ql)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:a}}function nm(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new eh,i.set(n,[o])):s>=r.length?(o=new eh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function im(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ze};break;case"SpotLight":t={position:new G,direction:new G,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function sm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rm=0;function am(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function om(i){let e=new im,t=sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new G);let s=new G,r=new gt,o=new gt;function c(a){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,y=0,m=0,d=0,R=0,C=0,b=0,U=0,P=0,N=0;a.sort(am);for(let S=0,M=a.length;S<M;S++){let O=a[S],Y=O.color,ne=O.intensity,te=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=Y.r*ne,u+=Y.g*ne,f+=Y.b*ne;else if(O.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(O.sh.coefficients[se],ne);N++}else if(O.isDirectionalLight){let se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let me=O.shadow,ee=t.get(O);ee.shadowIntensity=me.intensity,ee.shadowBias=me.bias,ee.shadowNormalBias=me.normalBias,ee.shadowRadius=me.radius,ee.shadowMapSize=me.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=O.shadow.matrix,R++}n.directional[p]=se,p++}else if(O.isSpotLight){let se=e.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(Y).multiplyScalar(ne),se.distance=te,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,n.spot[y]=se;let me=O.shadow;if(O.map&&(n.spotLightMap[U]=O.map,U++,me.updateMatrices(O),O.castShadow&&P++),n.spotLightMatrix[y]=me.matrix,O.castShadow){let ee=t.get(O);ee.shadowIntensity=me.intensity,ee.shadowBias=me.bias,ee.shadowNormalBias=me.normalBias,ee.shadowRadius=me.radius,ee.shadowMapSize=me.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=ie,b++}y++}else if(O.isRectAreaLight){let se=e.get(O);se.color.copy(Y).multiplyScalar(ne),se.halfWidth.set(O.width*.5,0,0),se.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=se,m++}else if(O.isPointLight){let se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),se.distance=O.distance,se.decay=O.decay,O.castShadow){let me=O.shadow,ee=t.get(O);ee.shadowIntensity=me.intensity,ee.shadowBias=me.bias,ee.shadowNormalBias=me.normalBias,ee.shadowRadius=me.radius,ee.shadowMapSize=me.mapSize,ee.shadowCameraNear=me.camera.near,ee.shadowCameraFar=me.camera.far,n.pointShadow[x]=ee,n.pointShadowMap[x]=ie,n.pointShadowMatrix[x]=O.shadow.matrix,C++}n.point[x]=se,x++}else if(O.isHemisphereLight){let se=e.get(O);se.skyColor.copy(O.color).multiplyScalar(ne),se.groundColor.copy(O.groundColor).multiplyScalar(ne),n.hemi[d]=se,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let V=n.hash;(V.directionalLength!==p||V.pointLength!==x||V.spotLength!==y||V.rectAreaLength!==m||V.hemiLength!==d||V.numDirectionalShadows!==R||V.numPointShadows!==C||V.numSpotShadows!==b||V.numSpotMaps!==U||V.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=N,V.directionalLength=p,V.pointLength=x,V.spotLength=y,V.rectAreaLength=m,V.hemiLength=d,V.numDirectionalShadows=R,V.numPointShadows=C,V.numSpotShadows=b,V.numSpotMaps=U,V.numLightProbes=N,n.version=rm++)}function l(a,h){let u=0,f=0,p=0,x=0,y=0,m=h.matrixWorldInverse;for(let d=0,R=a.length;d<R;d++){let C=a[d];if(C.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(C.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(C.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:c,setupView:l,state:n}}function th(i){let e=new om(i),t=[],n=[];function s(h){a.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function c(){e.setup(t)}function l(h){e.setupView(t,h)}let a={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:a,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function cm(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),c;return o===void 0?(c=new th(i),e.set(s,[c])):r>=o.length?(c=new th(i),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}var lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(i,e,t){let n=new Ji,s=new Fe,r=new Fe,o=new pt,c=new Or({depthPacking:_l}),l=new Br,a={},h=t.maxTextureSize,u={[Dn]:Ot,[Ot]:Dn,[yn]:yn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:lm,fragmentShader:hm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new Yt;x.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ft(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let d=this.type;this.render=function(P,N,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(On),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let ne=d!==vn&&this.type===vn,te=d===vn&&this.type!==vn;for(let ie=0,se=P.length;ie<se;ie++){let me=P[ie],ee=me.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let _e=ee.getFrameExtents();if(s.multiply(_e),r.copy(ee.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_e.x),s.x=r.x*_e.x,ee.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_e.y),s.y=r.y*_e.y,ee.mapSize.y=r.y)),ee.map===null||ne===!0||te===!0){let Pe=this.type!==vn?{minFilter:Qt,magFilter:Qt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new xn(s.x,s.y,Pe),ee.map.texture.name=me.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();let Se=ee.getViewportCount();for(let Pe=0;Pe<Se;Pe++){let Ve=ee.getViewport(Pe);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),Y.viewport(o),ee.updateMatrices(me,Pe),n=ee.getFrustum(),b(N,V,ee.camera,me,this.type)}ee.isPointLightShadow!==!0&&this.type===vn&&R(ee,V),ee.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,O)};function R(P,N){let V=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(N,null,V,f,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(N,null,V,p,y,null)}function C(P,N,V,S){let M=null,O=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)M=O;else if(M=V.isPointLight===!0?l:c,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let Y=M.uuid,ne=N.uuid,te=a[Y];te===void 0&&(te={},a[Y]=te);let ie=te[ne];ie===void 0&&(ie=M.clone(),te[ne]=ie,N.addEventListener("dispose",U)),M=ie}if(M.visible=N.visible,M.wireframe=N.wireframe,S===vn?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:u[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,V.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Y=i.properties.get(M);Y.light=V}return M}function b(P,N,V,S,M){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===vn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);let ne=e.update(P),te=P.material;if(Array.isArray(te)){let ie=ne.groups;for(let se=0,me=ie.length;se<me;se++){let ee=ie[se],_e=te[ee.materialIndex];if(_e&&_e.visible){let Se=C(P,_e,S,M);P.onBeforeShadow(i,P,N,V,ne,Se,ee),i.renderBufferDirect(V,null,ne,Se,P,ee),P.onAfterShadow(i,P,N,V,ne,Se,ee)}}}else if(te.visible){let ie=C(P,te,S,M);P.onBeforeShadow(i,P,N,V,ne,ie,null),i.renderBufferDirect(V,null,ne,ie,P,null),P.onAfterShadow(i,P,N,V,ne,ie,null)}}let Y=P.children;for(let ne=0,te=Y.length;ne<te;ne++)b(Y[ne],N,V,S,M)}function U(P){P.target.removeEventListener("dispose",U);for(let V in a){let S=a[V],M=P.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var dm={[Jr]:Kr,[jr]:ta,[Qr]:na,[di]:ea,[Kr]:Jr,[ta]:jr,[na]:Qr,[ea]:di};function fm(i,e){function t(){let z=!1,pe=new pt,ye=null,Re=new pt(0,0,0,0);return{setMask:function(de){ye!==de&&!z&&(i.colorMask(de,de,de,de),ye=de)},setLocked:function(de){z=de},setClear:function(de,ce,w,J,xe){xe===!0&&(de*=J,ce*=J,w*=J),pe.set(de,ce,w,J),Re.equals(pe)===!1&&(i.clearColor(de,ce,w,J),Re.copy(pe))},reset:function(){z=!1,ye=null,Re.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,ye=null,Re=null,de=null;return{setReversed:function(ce){if(pe!==ce){let w=e.get("EXT_clip_control");ce?w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT):w.clipControlEXT(w.LOWER_LEFT_EXT,w.NEGATIVE_ONE_TO_ONE_EXT),pe=ce;let J=de;de=null,this.setClear(J)}},getReversed:function(){return pe},setTest:function(ce){ce?re(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ce){ye!==ce&&!z&&(i.depthMask(ce),ye=ce)},setFunc:function(ce){if(pe&&(ce=dm[ce]),Re!==ce){switch(ce){case Jr:i.depthFunc(i.NEVER);break;case Kr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ce}},setLocked:function(ce){z=ce},setClear:function(ce){de!==ce&&(pe&&(ce=1-ce),i.clearDepth(ce),de=ce)},reset:function(){z=!1,ye=null,Re=null,de=null,pe=!1}}}function s(){let z=!1,pe=null,ye=null,Re=null,de=null,ce=null,w=null,J=null,xe=null;return{setTest:function(he){z||(he?re(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(he){pe!==he&&!z&&(i.stencilMask(he),pe=he)},setFunc:function(he,$,ue){(ye!==he||Re!==$||de!==ue)&&(i.stencilFunc(he,$,ue),ye=he,Re=$,de=ue)},setOp:function(he,$,ue){(ce!==he||w!==$||J!==ue)&&(i.stencilOp(he,$,ue),ce=he,w=$,J=ue)},setLocked:function(he){z=he},setClear:function(he){xe!==he&&(i.clearStencil(he),xe=he)},reset:function(){z=!1,pe=null,ye=null,Re=null,de=null,ce=null,w=null,J=null,xe=null}}}let r=new t,o=new n,c=new s,l=new WeakMap,a=new WeakMap,h={},u={},f=new WeakMap,p=[],x=null,y=!1,m=null,d=null,R=null,C=null,b=null,U=null,P=null,N=new Ze(0,0,0),V=0,S=!1,M=null,O=null,Y=null,ne=null,te=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,me=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ee)[1]),se=me>=1):ee.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),se=me>=2);let _e=null,Se={},Pe=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),$e=new pt().fromArray(Pe),et=new pt().fromArray(Ve);function Ke(z,pe,ye,Re){let de=new Uint8Array(4),ce=i.createTexture();i.bindTexture(z,ce),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let w=0;w<ye;w++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(pe+w,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ce}let oe={};oe[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),re(i.DEPTH_TEST),o.setFunc(di),D(!1),I(Uo),re(i.CULL_FACE),at(On);function re(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Ae(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Oe(z,pe){return u[z]!==pe?(i.bindFramebuffer(z,pe),u[z]=pe,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function De(z,pe){let ye=p,Re=!1;if(z){ye=f.get(pe),ye===void 0&&(ye=[],f.set(pe,ye));let de=z.textures;if(ye.length!==de.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,w=de.length;ce<w;ce++)ye[ce]=i.COLOR_ATTACHMENT0+ce;ye.length=de.length,Re=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ye)}function Xe(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let _t={[Zn]:i.FUNC_ADD,[Xc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};_t[$c]=i.MIN,_t[Yc]=i.MAX;let L={[Zc]:i.ZERO,[Jc]:i.ONE,[Kc]:i.SRC_COLOR,[br]:i.SRC_ALPHA,[il]:i.SRC_ALPHA_SATURATE,[tl]:i.DST_COLOR,[Qc]:i.DST_ALPHA,[jc]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[nl]:i.ONE_MINUS_DST_COLOR,[el]:i.ONE_MINUS_DST_ALPHA,[sl]:i.CONSTANT_COLOR,[rl]:i.ONE_MINUS_CONSTANT_COLOR,[al]:i.CONSTANT_ALPHA,[ol]:i.ONE_MINUS_CONSTANT_ALPHA};function at(z,pe,ye,Re,de,ce,w,J,xe,he){if(z===On){y===!0&&(Ae(i.BLEND),y=!1);return}if(y===!1&&(re(i.BLEND),y=!0),z!==Wc){if(z!==m||he!==S){if((d!==Zn||b!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,b=Zn),he)switch(z){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}R=null,C=null,U=null,P=null,N.set(0,0,0),V=0,m=z,S=he}return}de=de||pe,ce=ce||ye,w=w||Re,(pe!==d||de!==b)&&(i.blendEquationSeparate(_t[pe],_t[de]),d=pe,b=de),(ye!==R||Re!==C||ce!==U||w!==P)&&(i.blendFuncSeparate(L[ye],L[Re],L[ce],L[w]),R=ye,C=Re,U=ce,P=w),(J.equals(N)===!1||xe!==V)&&(i.blendColor(J.r,J.g,J.b,xe),N.copy(J),V=xe),m=z,S=!1}function Ge(z,pe){z.side===yn?Ae(i.CULL_FACE):re(i.CULL_FACE);let ye=z.side===Ot;pe&&(ye=!ye),D(ye),z.blending===ui&&z.transparent===!1?at(On):at(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Re=z.stencilWrite;c.setTest(Re),Re&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),A(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function D(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function I(z){z!==Hc?(re(i.CULL_FACE),z!==O&&(z===Uo?i.cullFace(i.BACK):z===Gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),O=z}function E(z){z!==Y&&(se&&i.lineWidth(z),Y=z)}function A(z,pe,ye){z?(re(i.POLYGON_OFFSET_FILL),(ne!==pe||te!==ye)&&(i.polygonOffset(pe,ye),ne=pe,te=ye)):Ae(i.POLYGON_OFFSET_FILL)}function ae(z){z?re(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function H(z){z===void 0&&(z=i.TEXTURE0+ie-1),_e!==z&&(i.activeTexture(z),_e=z)}function B(z,pe,ye){ye===void 0&&(_e===null?ye=i.TEXTURE0+ie-1:ye=_e);let Re=Se[ye];Re===void 0&&(Re={type:void 0,texture:void 0},Se[ye]=Re),(Re.type!==z||Re.texture!==pe)&&(_e!==ye&&(i.activeTexture(ye),_e=ye),i.bindTexture(z,pe||oe[z]),Re.type=z,Re.texture=pe)}function _(){let z=Se[_e];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function T(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(z){$e.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),$e.copy(z))}function ze(z){et.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Ce(z,pe){let ye=a.get(pe);ye===void 0&&(ye=new WeakMap,a.set(pe,ye));let Re=ye.get(z);Re===void 0&&(Re=i.getUniformBlockIndex(pe,z.name),ye.set(z,Re))}function ve(z,pe){let Re=a.get(pe).get(z);l.get(pe)!==Re&&(i.uniformBlockBinding(pe,Re,z.__bindingPointIndex),l.set(pe,Re))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_e=null,Se={},u={},f=new WeakMap,p=[],x=null,y=!1,m=null,d=null,R=null,C=null,b=null,U=null,P=null,N=new Ze(0,0,0),V=0,S=!1,M=null,O=null,Y=null,ne=null,te=null,$e.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:re,disable:Ae,bindFramebuffer:Oe,drawBuffers:De,useProgram:Xe,setBlending:at,setMaterial:Ge,setFlipSided:D,setCullFace:I,setLineWidth:E,setPolygonOffset:A,setScissorTest:ae,activeTexture:H,bindTexture:B,unbindTexture:_,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:be,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:Z,texStorage3D:ge,texSubImage2D:k,texSubImage3D:j,compressedTexSubImage2D:T,compressedTexSubImage3D:q,scissor:Me,viewport:ze,reset:qe}}function pm(i,e,t,n,s,r,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Fe,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(_,g){return p?new OffscreenCanvas(_,g):Ts("canvas")}function y(_,g,F){let k=1,j=B(_);if((j.width>F||j.height>F)&&(k=F/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let T=Math.floor(k*j.width),q=Math.floor(k*j.height);u===void 0&&(u=x(T,q));let Z=g?x(T,q):u;return Z.width=T,Z.height=q,Z.getContext("2d").drawImage(_,0,0,T,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+T+"x"+q+")."),Z}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),_;return _}function m(_){return _.generateMipmaps}function d(_){i.generateMipmap(_)}function R(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(_,g,F,k,j=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let T=g;if(g===i.RED&&(F===i.FLOAT&&(T=i.R32F),F===i.HALF_FLOAT&&(T=i.R16F),F===i.UNSIGNED_BYTE&&(T=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(T=i.R8UI),F===i.UNSIGNED_SHORT&&(T=i.R16UI),F===i.UNSIGNED_INT&&(T=i.R32UI),F===i.BYTE&&(T=i.R8I),F===i.SHORT&&(T=i.R16I),F===i.INT&&(T=i.R32I)),g===i.RG&&(F===i.FLOAT&&(T=i.RG32F),F===i.HALF_FLOAT&&(T=i.RG16F),F===i.UNSIGNED_BYTE&&(T=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(T=i.RG8UI),F===i.UNSIGNED_SHORT&&(T=i.RG16UI),F===i.UNSIGNED_INT&&(T=i.RG32UI),F===i.BYTE&&(T=i.RG8I),F===i.SHORT&&(T=i.RG16I),F===i.INT&&(T=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(T=i.RGB8UI),F===i.UNSIGNED_SHORT&&(T=i.RGB16UI),F===i.UNSIGNED_INT&&(T=i.RGB32UI),F===i.BYTE&&(T=i.RGB8I),F===i.SHORT&&(T=i.RGB16I),F===i.INT&&(T=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(T=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(T=i.RGBA16UI),F===i.UNSIGNED_INT&&(T=i.RGBA32UI),F===i.BYTE&&(T=i.RGBA8I),F===i.SHORT&&(T=i.RGBA16I),F===i.INT&&(T=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(T=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(T=i.R11F_G11F_B10F)),g===i.RGBA){let q=j?bs:nt.getTransfer(k);F===i.FLOAT&&(T=i.RGBA32F),F===i.HALF_FLOAT&&(T=i.RGBA16F),F===i.UNSIGNED_BYTE&&(T=q===rt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(T=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(T=i.RGB5_A1)}return(T===i.R16F||T===i.R32F||T===i.RG16F||T===i.RG32F||T===i.RGBA16F||T===i.RGBA32F)&&e.get("EXT_color_buffer_float"),T}function b(_,g){let F;return _?g===null||g===ei||g===rs?F=i.DEPTH24_STENCIL8:g===Mn?F=i.DEPTH32F_STENCIL8:g===is&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ei||g===rs?F=i.DEPTH_COMPONENT24:g===Mn?F=i.DEPTH_COMPONENT32F:g===is&&(F=i.DEPTH_COMPONENT16),F}function U(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Qt&&_.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function P(_){let g=_.target;g.removeEventListener("dispose",P),V(g),g.isVideoTexture&&h.delete(g)}function N(_){let g=_.target;g.removeEventListener("dispose",N),M(g)}function V(_){let g=n.get(_);if(g.__webglInit===void 0)return;let F=_.source,k=f.get(F);if(k){let j=k[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(_),Object.keys(k).length===0&&f.delete(F)}n.remove(_)}function S(_){let g=n.get(_);i.deleteTexture(g.__webglTexture);let F=_.source,k=f.get(F);delete k[g.__cacheKey],o.memory.textures--}function M(_){let g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let j=0;j<g.__webglFramebuffer[k].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[k][j]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=_.textures;for(let k=0,j=F.length;k<j;k++){let T=n.get(F[k]);T.__webglTexture&&(i.deleteTexture(T.__webglTexture),o.memory.textures--),n.remove(F[k])}n.remove(_)}let O=0;function Y(){O=0}function ne(){let _=O;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),O+=1,_}function te(_){let g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function ie(_,g){let F=n.get(_);if(_.isVideoTexture&&ae(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&F.__version!==_.version){let k=_.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,_,g);return}}else _.isExternalTexture&&(F.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function se(_,g){let F=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&F.__version!==_.version){oe(F,_,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function me(_,g){let F=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&F.__version!==_.version){oe(F,_,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function ee(_,g){let F=n.get(_);if(_.version>0&&F.__version!==_.version){re(F,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let _e={[Tr]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},Se={[Qt]:i.NEAREST,[gl]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Pe={[yl]:i.NEVER,[wl]:i.ALWAYS,[Ml]:i.LESS,[Jo]:i.LEQUAL,[Sl]:i.EQUAL,[Tl]:i.GEQUAL,[bl]:i.GREATER,[El]:i.NOTEQUAL};function Ve(_,g){if(g.type===Mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===ra||g.magFilter===Ws||g.magFilter===Qn||g.minFilter===on||g.minFilter===ra||g.minFilter===Ws||g.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,_e[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,_e[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,_e[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,Se[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Pe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==Ws&&g.minFilter!==Qn||g.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $e(_,g){let F=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",P));let k=g.source,j=f.get(k);j===void 0&&(j={},f.set(k,j));let T=te(g);if(T!==_.__cacheKey){j[T]===void 0&&(j[T]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[T].usedTimes++;let q=j[_.__cacheKey];q!==void 0&&(j[_.__cacheKey].usedTimes--,q.usedTimes===0&&S(g)),_.__cacheKey=T,_.__webglTexture=j[T].texture}return F}function et(_,g,F){return Math.floor(Math.floor(_/F)/g)}function Ke(_,g,F,k){let T=_.updateRanges;if(T.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{T.sort((le,Me)=>le.start-Me.start);let q=0;for(let le=1;le<T.length;le++){let Me=T[q],ze=T[le],Ce=Me.start+Me.count,ve=et(ze.start,g.width,4),qe=et(Me.start,g.width,4);ze.start<=Ce+1&&ve===qe&&et(ze.start+ze.count-1,g.width,4)===ve?Me.count=Math.max(Me.count,ze.start+ze.count-Me.start):(++q,T[q]=ze)}T.length=q+1;let Z=i.getParameter(i.UNPACK_ROW_LENGTH),ge=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let le=0,Me=T.length;le<Me;le++){let ze=T[le],Ce=Math.floor(ze.start/4),ve=Math.ceil(ze.count/4),qe=Ce%g.width,z=Math.floor(Ce/g.width),pe=ve,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,qe,z,pe,ye,F,k,g.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Z),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function oe(_,g,F){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let j=$e(_,g),T=g.source;t.bindTexture(k,_.__webglTexture,i.TEXTURE0+F);let q=n.get(T);if(T.version!==q.__version||j===!0){t.activeTexture(i.TEXTURE0+F);let Z=nt.getPrimaries(nt.workingColorSpace),ge=g.colorSpace===zn?null:nt.getPrimaries(g.colorSpace),be=g.colorSpace===zn||Z===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let le=y(g.image,!1,s.maxTextureSize);le=H(g,le);let Me=r.convert(g.format,g.colorSpace),ze=r.convert(g.type),Ce=C(g.internalFormat,Me,ze,g.colorSpace,g.isVideoTexture);Ve(k,g);let ve,qe=g.mipmaps,z=g.isVideoTexture!==!0,pe=q.__version===void 0||j===!0,ye=T.dataReady,Re=U(g,le);if(g.isDepthTexture)Ce=b(g.format===as,g.type),pe&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,Me,ze,null));else if(g.isDataTexture)if(qe.length>0){z&&pe&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,qe[0].width,qe[0].height);for(let de=0,ce=qe.length;de<ce;de++)ve=qe[de],z?ye&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ve.width,ve.height,Me,ze,ve.data):t.texImage2D(i.TEXTURE_2D,de,Ce,ve.width,ve.height,0,Me,ze,ve.data);g.generateMipmaps=!1}else z?(pe&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,le.width,le.height),ye&&Ke(g,le,Me,ze)):t.texImage2D(i.TEXTURE_2D,0,Ce,le.width,le.height,0,Me,ze,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ce,qe[0].width,qe[0].height,le.depth);for(let de=0,ce=qe.length;de<ce;de++)if(ve=qe[de],g.format!==en)if(Me!==null)if(z){if(ye)if(g.layerUpdates.size>0){let w=nc(ve.width,ve.height,g.format,g.type);for(let J of g.layerUpdates){let xe=ve.data.subarray(J*w/ve.data.BYTES_PER_ELEMENT,(J+1)*w/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,J,ve.width,ve.height,1,Me,xe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,le.depth,Me,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ce,ve.width,ve.height,le.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,le.depth,Me,ze,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ce,ve.width,ve.height,le.depth,0,Me,ze,ve.data)}else{z&&pe&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,qe[0].width,qe[0].height);for(let de=0,ce=qe.length;de<ce;de++)ve=qe[de],g.format!==en?Me!==null?z?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ve.width,ve.height,Me,ze,ve.data):t.texImage2D(i.TEXTURE_2D,de,Ce,ve.width,ve.height,0,Me,ze,ve.data)}else if(g.isDataArrayTexture)if(z){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ce,le.width,le.height,le.depth),ye)if(g.layerUpdates.size>0){let de=nc(le.width,le.height,g.format,g.type);for(let ce of g.layerUpdates){let w=le.data.subarray(ce*de/le.data.BYTES_PER_ELEMENT,(ce+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,le.width,le.height,1,Me,ze,w)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,ze,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,Me,ze,le.data);else if(g.isData3DTexture)z?(pe&&t.texStorage3D(i.TEXTURE_3D,Re,Ce,le.width,le.height,le.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,ze,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,Me,ze,le.data);else if(g.isFramebufferTexture){if(pe)if(z)t.texStorage2D(i.TEXTURE_2D,Re,Ce,le.width,le.height);else{let de=le.width,ce=le.height;for(let w=0;w<Re;w++)t.texImage2D(i.TEXTURE_2D,w,Ce,de,ce,0,Me,ze,null),de>>=1,ce>>=1}}else if(qe.length>0){if(z&&pe){let de=B(qe[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ce,de.width,de.height)}for(let de=0,ce=qe.length;de<ce;de++)ve=qe[de],z?ye&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Me,ze,ve):t.texImage2D(i.TEXTURE_2D,de,Ce,Me,ze,ve);g.generateMipmaps=!1}else if(z){if(pe){let de=B(le);t.texStorage2D(i.TEXTURE_2D,Re,Ce,de.width,de.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,ze,le)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Me,ze,le);m(g)&&d(k),q.__version=T.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function re(_,g,F){if(g.image.length!==6)return;let k=$e(_,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+F);let T=n.get(j);if(j.version!==T.__version||k===!0){t.activeTexture(i.TEXTURE0+F);let q=nt.getPrimaries(nt.workingColorSpace),Z=g.colorSpace===zn?null:nt.getPrimaries(g.colorSpace),ge=g.colorSpace===zn||q===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let be=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!be&&!le?Me[ce]=y(g.image[ce],!0,s.maxCubemapSize):Me[ce]=le?g.image[ce].image:g.image[ce],Me[ce]=H(g,Me[ce]);let ze=Me[0],Ce=r.convert(g.format,g.colorSpace),ve=r.convert(g.type),qe=C(g.internalFormat,Ce,ve,g.colorSpace),z=g.isVideoTexture!==!0,pe=T.__version===void 0||k===!0,ye=j.dataReady,Re=U(g,ze);Ve(i.TEXTURE_CUBE_MAP,g);let de;if(be){z&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,qe,ze.width,ze.height);for(let ce=0;ce<6;ce++){de=Me[ce].mipmaps;for(let w=0;w<de.length;w++){let J=de[w];g.format!==en?Ce!==null?z?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w,0,0,J.width,J.height,Ce,J.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w,qe,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w,0,0,J.width,J.height,Ce,ve,J.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w,qe,J.width,J.height,0,Ce,ve,J.data)}}}else{if(de=g.mipmaps,z&&pe){de.length>0&&Re++;let ce=B(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(le){z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,Ce,ve,Me[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Me[ce].width,Me[ce].height,0,Ce,ve,Me[ce].data);for(let w=0;w<de.length;w++){let xe=de[w].image[ce].image;z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w+1,0,0,xe.width,xe.height,Ce,ve,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w+1,qe,xe.width,xe.height,0,Ce,ve,xe.data)}}else{z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce,ve,Me[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Ce,ve,Me[ce]);for(let w=0;w<de.length;w++){let J=de[w];z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w+1,0,0,Ce,ve,J.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,w+1,qe,Ce,ve,J.image[ce])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),T.__version=j.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Ae(_,g,F,k,j,T){let q=r.convert(F.format,F.colorSpace),Z=r.convert(F.type),ge=C(F.internalFormat,q,Z,F.colorSpace),be=n.get(g),le=n.get(F);if(le.__renderTarget=g,!be.__hasExternalTextures){let Me=Math.max(1,g.width>>T),ze=Math.max(1,g.height>>T);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,T,ge,Me,ze,g.depth,0,q,Z,null):t.texImage2D(j,T,ge,Me,ze,0,q,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),A(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,j,le.__webglTexture,0,E(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,j,le.__webglTexture,T),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(_,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){let k=g.depthTexture,j=k&&k.isDepthTexture?k.type:null,T=b(g.stencilBuffer,j),q=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E(g);A(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,T,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,T,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,T,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,_)}else{let k=g.textures;for(let j=0;j<k.length;j++){let T=k[j],q=r.convert(T.format,T.colorSpace),Z=r.convert(T.type),ge=C(T.internalFormat,q,Z,T.colorSpace),be=E(g);F&&A(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ge,g.width,g.height):A(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ge,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ge,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);let j=k.__webglTexture,T=E(g);if(g.depthTexture.format===Gi)A(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(g.depthTexture.format===as)A(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Xe(_){let g=n.get(_),F=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){let k=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",j)};k.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=k}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let k=_.texture.mipmaps;k&&k.length>0?De(g.__webglFramebuffer[0],_):De(g.__webglFramebuffer,_)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[k],_,!1);else{let j=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,T),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,T)}}else{let k=_.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,_,!1);else{let j=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,T),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,T)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(_,g,F){let k=n.get(_);g!==void 0&&Ae(k.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Xe(_)}function L(_){let g=_.texture,F=n.get(_),k=n.get(g);_.addEventListener("dispose",N);let j=_.textures,T=_.isWebGLCubeRenderTarget===!0,q=j.length>1;if(q||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,o.memory.textures++),T){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let ge=0;ge<g.mipmaps.length;ge++)F.__webglFramebuffer[Z][ge]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(q)for(let Z=0,ge=j.length;Z<ge;Z++){let be=n.get(j[Z]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(_.samples>0&&A(_)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let ge=j[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);let be=r.convert(ge.format,ge.colorSpace),le=r.convert(ge.type),Me=C(ge.internalFormat,be,le,ge.colorSpace,_.isXRRenderTarget===!0),ze=E(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Me,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(T){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Ae(F.__webglFramebuffer[Z][ge],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge);else Ae(F.__webglFramebuffer[Z],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let Z=0,ge=j.length;Z<ge;Z++){let be=j[Z],le=n.get(be),Me=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Me=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,le.__webglTexture),Ve(Me,be),Ae(F.__webglFramebuffer,_,be,i.COLOR_ATTACHMENT0+Z,Me,0),m(be)&&d(Me)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Z=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,k.__webglTexture),Ve(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Ae(F.__webglFramebuffer[ge],_,g,i.COLOR_ATTACHMENT0,Z,ge);else Ae(F.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,Z,0);m(g)&&d(Z),t.unbindTexture()}_.depthBuffer&&Xe(_)}function at(_){let g=_.textures;for(let F=0,k=g.length;F<k;F++){let j=g[F];if(m(j)){let T=R(_),q=n.get(j).__webglTexture;t.bindTexture(T,q),d(T),t.unbindTexture()}}}let Ge=[],D=[];function I(_){if(_.samples>0){if(A(_)===!1){let g=_.textures,F=_.width,k=_.height,j=i.COLOR_BUFFER_BIT,T=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(_),Z=g.length>1;if(Z)for(let be=0;be<g.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);let ge=_.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let be=0;be<g.length;be++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let le=n.get(g[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,j,i.NEAREST),l===!0&&(Ge.length=0,D.length=0,Ge.push(i.COLOR_ATTACHMENT0+be),_.depthBuffer&&_.resolveDepthBuffer===!1&&(Ge.push(T),D.push(T),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let be=0;be<g.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let le=n.get(g[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function E(_){return Math.min(s.maxSamples,_.samples)}function A(_){let g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ae(_){let g=o.render.frame;h.get(_)!==g&&(h.set(_,g),_.update())}function H(_,g){let F=_.colorSpace,k=_.format,j=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||F!==fi&&F!==zn&&(nt.getTransfer(F)===rt?(k!==en||j!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function B(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(a.width=_.naturalWidth||_.width,a.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(a.width=_.displayWidth,a.height=_.displayHeight):(a.width=_.width,a.height=_.height),a}this.allocateTextureUnit=ne,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=se,this.setTexture3D=me,this.setTextureCube=ee,this.rebindTextures=_t,this.setupRenderTarget=L,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=A}function mm(i,e){function t(n,s=zn){let r,o=nt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vo)return i.BYTE;if(n===Ho)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===Xo)return i.ALPHA;if(n===qo)return i.RGB;if(n===en)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===la)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===$s||n===Ys)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===xa||n===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===xa)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===ya||n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa||n===La)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===Ua||n===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Da)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ns(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:gm,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,o=null,c="local-floor",l=1,a=null,h=null,u=null,f=null,p=null,x=null,y=typeof XRWebGLBinding<"u",m=new mc,d={},R=t.getContextAttributes(),C=null,b=null,U=[],P=[],N=new Fe,V=null,S=new Ct;S.viewport=new pt;let M=new Ct;M.viewport=new pt;let O=[S,M],Y=new Yr,ne=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let re=U[oe];return re===void 0&&(re=new $i,U[oe]=re),re.getTargetRaySpace()},this.getControllerGrip=function(oe){let re=U[oe];return re===void 0&&(re=new $i,U[oe]=re),re.getGripSpace()},this.getHand=function(oe){let re=U[oe];return re===void 0&&(re=new $i,U[oe]=re),re.getHandSpace()};function ie(oe){let re=P.indexOf(oe.inputSource);if(re===-1)return;let Ae=U[re];Ae!==void 0&&(Ae.update(oe.inputSource,oe.frame,a||o),Ae.dispatchEvent({type:oe.type,data:oe.inputSource}))}function se(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",me);for(let oe=0;oe<U.length;oe++){let re=P[oe];re!==null&&(P[oe]=null,U[oe].disconnect(re))}ne=null,te=null,m.reset();for(let oe in d)delete d[oe];e.setRenderTarget(C),p=null,f=null,u=null,s=null,b=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(oe){a=oe},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",se),s.addEventListener("inputsourceschange",me),R.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Oe=null,De=null;R.depth&&(De=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=R.stencil?as:Gi,Oe=R.stencil?rs:ei);let Xe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new xn(f.textureWidth,f.textureHeight,{format:en,type:hn,depthTexture:new Us(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Ae={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new xn(p.framebufferWidth,p.framebufferHeight,{format:en,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),a=null,o=await s.requestReferenceSpace(c),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(oe){for(let re=0;re<oe.removed.length;re++){let Ae=oe.removed[re],Oe=P.indexOf(Ae);Oe>=0&&(P[Oe]=null,U[Oe].disconnect(Ae))}for(let re=0;re<oe.added.length;re++){let Ae=oe.added[re],Oe=P.indexOf(Ae);if(Oe===-1){for(let Xe=0;Xe<U.length;Xe++)if(Xe>=P.length){P.push(Ae),Oe=Xe;break}else if(P[Xe]===null){P[Xe]=Ae,Oe=Xe;break}if(Oe===-1)break}let De=U[Oe];De&&De.connect(Ae)}}let ee=new G,_e=new G;function Se(oe,re,Ae){ee.setFromMatrixPosition(re.matrixWorld),_e.setFromMatrixPosition(Ae.matrixWorld);let Oe=ee.distanceTo(_e),De=re.projectionMatrix.elements,Xe=Ae.projectionMatrix.elements,_t=De[14]/(De[10]-1),L=De[14]/(De[10]+1),at=(De[9]+1)/De[5],Ge=(De[9]-1)/De[5],D=(De[8]-1)/De[0],I=(Xe[8]+1)/Xe[0],E=_t*D,A=_t*I,ae=Oe/(-D+I),H=ae*-D;if(re.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(H),oe.translateZ(ae),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),De[10]===-1)oe.projectionMatrix.copy(re.projectionMatrix),oe.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let B=_t+ae,_=L+ae,g=E-H,F=A+(Oe-H),k=at*L/_*B,j=Ge*L/_*B;oe.projectionMatrix.makePerspective(g,F,k,j,B,_),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Pe(oe,re){re===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(re.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let re=oe.near,Ae=oe.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),Y.near=M.near=S.near=re,Y.far=M.far=S.far=Ae,(ne!==Y.near||te!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ne=Y.near,te=Y.far),Y.layers.mask=oe.layers.mask|6,S.layers.mask=Y.layers.mask&3,M.layers.mask=Y.layers.mask&5;let Oe=oe.parent,De=Y.cameras;Pe(Y,Oe);for(let Xe=0;Xe<De.length;Xe++)Pe(De[Xe],Oe);De.length===2?Se(Y,S,M):Y.projectionMatrix.copy(S.projectionMatrix),Ve(oe,Y,Oe)};function Ve(oe,re,Ae){Ae===null?oe.matrix.copy(re.matrixWorld):(oe.matrix.copy(Ae.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(re.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(re.projectionMatrix),oe.projectionMatrixInverse.copy(re.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Rr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(oe){return d[oe]};let $e=null;function et(oe,re){if(h=re.getViewerPose(a||o),x=re,h!==null){let Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Oe=!1;Ae.length!==Y.cameras.length&&(Y.cameras.length=0,Oe=!0);for(let L=0;L<Ae.length;L++){let at=Ae[L],Ge=null;if(p!==null)Ge=p.getViewport(at);else{let I=u.getViewSubImage(f,at);Ge=I.viewport,L===0&&(e.setRenderTargetTextures(b,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(b))}let D=O[L];D===void 0&&(D=new Ct,D.layers.enable(L),D.viewport=new pt,O[L]=D),D.matrix.fromArray(at.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(at.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),L===0&&(Y.matrix.copy(D.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Oe===!0&&Y.cameras.push(D)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let L=u.getDepthInformation(Ae[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Ae.length;L++){let at=Ae[L].camera;if(at){let Ge=d[at];Ge||(Ge=new Ns,d[at]=Ge);let D=u.getCameraImage(at);Ge.sourceTexture=D}}}}for(let Ae=0;Ae<U.length;Ae++){let Oe=P[Ae],De=U[Ae];Oe!==null&&De!==void 0&&De.update(Oe,re,a||o)}$e&&$e(oe,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}let Ke=new nh;Ke.setAnimationLoop(et),this.setAnimationLoop=function(oe){$e=oe},this.dispose=function(){}}},Mi=new cn,_m=new gt;function vm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Qo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,C,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&c(m,d)):d.isPointsMaterial?l(m,d,R,C):d.isSpriteMaterial?a(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let R=e.get(d),C=R.envMap,b=R.envMapRotation;C&&(m.envMap.value=C,Mi.copy(b),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Mi)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function c(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=C*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ym(i,e,t,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,C){let b=C.program;n.uniformBlockBinding(R,b)}function a(R,C){let b=s[R.id];b===void 0&&(x(R),b=h(R),s[R.id]=b,R.addEventListener("dispose",m));let U=C.program;n.updateUBOMapping(R,U);let P=e.render.frame;r[R.id]!==P&&(f(R),r[R.id]=P)}function h(R){let C=u();R.__bindingPointIndex=C;let b=i.createBuffer(),U=R.__size,P=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function u(){for(let R=0;R<c;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let C=s[R.id],b=R.uniforms,U=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let P=0,N=b.length;P<N;P++){let V=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,M=V.length;S<M;S++){let O=V[S];if(p(O,P,S,U)===!0){let Y=O.__offset,ne=Array.isArray(O.value)?O.value:[O.value],te=0;for(let ie=0;ie<ne.length;ie++){let se=ne[ie],me=y(se);typeof se=="number"||typeof se=="boolean"?(O.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,Y+te,O.__data)):se.isMatrix3?(O.__data[0]=se.elements[0],O.__data[1]=se.elements[1],O.__data[2]=se.elements[2],O.__data[3]=0,O.__data[4]=se.elements[3],O.__data[5]=se.elements[4],O.__data[6]=se.elements[5],O.__data[7]=0,O.__data[8]=se.elements[6],O.__data[9]=se.elements[7],O.__data[10]=se.elements[8],O.__data[11]=0):(se.toArray(O.__data,te),te+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,C,b,U){let P=R.value,N=C+"_"+b;if(U[N]===void 0)return typeof P=="number"||typeof P=="boolean"?U[N]=P:U[N]=P.clone(),!0;{let V=U[N];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return U[N]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function x(R){let C=R.uniforms,b=0,U=16;for(let N=0,V=C.length;N<V;N++){let S=Array.isArray(C[N])?C[N]:[C[N]];for(let M=0,O=S.length;M<O;M++){let Y=S[M],ne=Array.isArray(Y.value)?Y.value:[Y.value];for(let te=0,ie=ne.length;te<ie;te++){let se=ne[te],me=y(se),ee=b%U,_e=ee%me.boundary,Se=ee+_e;b+=_e,Se!==0&&U-Se<me.storage&&(b+=U-Se),Y.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=me.storage}}}let P=b%U;return P>0&&(b+=U-P),R.__size=b,R.__cache={},this}function y(R){let C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function m(R){let C=R.target;C.removeEventListener("dispose",m);let b=o.indexOf(C.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function d(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:a,dispose:d}}var Js=class{constructor(e={}){let{canvas:t=Al(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,U=!1;this._outputColorSpace=St;let P=0,N=0,V=null,S=-1,M=null,O=new pt,Y=new pt,ne=null,te=new Ze(0),ie=0,se=t.width,me=t.height,ee=1,_e=null,Se=null,Pe=new pt(0,0,se,me),Ve=new pt(0,0,se,me),$e=!1,et=new Ji,Ke=!1,oe=!1,re=new gt,Ae=new G,Oe=new pt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function _t(){return V===null?ee:1}let L=n;function at(v,W){return t.getContext(v,W)}try{let v={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let W="webgl2";if(L=at(W,v),L===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ge,D,I,E,A,ae,H,B,_,g,F,k,j,T,q,Z,ge,be,le,Me,ze,Ce,ve,qe;function z(){Ge=new Bf(L),Ge.init(),Ce=new mm(L,Ge),D=new Pf(L,Ge,e,Ce),I=new fm(L,Ge),D.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),E=new Vf(L),A=new em,ae=new pm(L,Ge,I,A,D,Ce,E),H=new Df(b),B=new Of(b),_=new qh(L),ve=new Rf(L,_),g=new zf(L,_,E,ve),F=new Gf(L,g,_,E),le=new Hf(L,D,ae),Z=new Lf(A),k=new Qp(b,H,B,Ge,D,ve,Z),j=new vm(b,A),T=new nm,q=new cm(Ge),be=new Cf(b,H,B,I,F,p,l),ge=new um(b,F,D),qe=new ym(L,E,D,I),Me=new If(L,Ge,E),ze=new kf(L,Ge,E),E.programs=k.programs,b.capabilities=D,b.extensions=Ge,b.properties=A,b.renderLists=T,b.shadowMap=ge,b.state=I,b.info=E}z();let pe=new gc(b,L);this.xr=pe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Ge.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ge.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(se,me,!1))},this.getSize=function(v){return v.set(se,me)},this.setSize=function(v,W,Q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=v,me=W,t.width=Math.floor(v*ee),t.height=Math.floor(W*ee),Q===!0&&(t.style.width=v+"px",t.style.height=W+"px"),this.setViewport(0,0,v,W)},this.getDrawingBufferSize=function(v){return v.set(se*ee,me*ee).floor()},this.setDrawingBufferSize=function(v,W,Q){se=v,me=W,ee=Q,t.width=Math.floor(v*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,v,W)},this.getCurrentViewport=function(v){return v.copy(O)},this.getViewport=function(v){return v.copy(Pe)},this.setViewport=function(v,W,Q,K){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,W,Q,K),I.viewport(O.copy(Pe).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,W,Q,K){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,W,Q,K),I.scissor(Y.copy(Ve).multiplyScalar(ee).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(v){I.setScissorTest($e=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(v=!0,W=!0,Q=!0){let K=0;if(v){let X=!1;if(V!==null){let fe=V.texture.format;X=fe===ua||fe===ha||fe===la}if(X){let fe=V.texture.type,Ee=fe===hn||fe===ei||fe===is||fe===rs||fe===oa||fe===ca,Ue=be.getClearColor(),Ie=be.getClearAlpha(),ke=Ue.r,He=Ue.g,Ne=Ue.b;Ee?(x[0]=ke,x[1]=He,x[2]=Ne,x[3]=Ie,L.clearBufferuiv(L.COLOR,0,x)):(y[0]=ke,y[1]=He,y[2]=Ne,y[3]=Ie,L.clearBufferiv(L.COLOR,0,y))}else K|=L.COLOR_BUFFER_BIT}W&&(K|=L.DEPTH_BUFFER_BIT),Q&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",de,!1),be.dispose(),T.dispose(),q.dispose(),A.dispose(),H.dispose(),B.dispose(),F.dispose(),ve.dispose(),qe.dispose(),k.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ue),pe.removeEventListener("sessionend",tt),st.stop()};function ye(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let v=E.autoReset,W=ge.enabled,Q=ge.autoUpdate,K=ge.needsUpdate,X=ge.type;z(),E.autoReset=v,ge.enabled=W,ge.autoUpdate=Q,ge.needsUpdate=K,ge.type=X}function de(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ce(v){let W=v.target;W.removeEventListener("dispose",ce),w(W)}function w(v){J(v),A.remove(v)}function J(v){let W=A.get(v).programs;W!==void 0&&(W.forEach(function(Q){k.releaseProgram(Q)}),v.isShaderMaterial&&k.releaseShaderCache(v))}this.renderBufferDirect=function(v,W,Q,K,X,fe){W===null&&(W=De);let Ee=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Ka(v,W,Q,K,X);I.setMaterial(K,Ee);let Ie=Q.index,ke=1;if(K.wireframe===!0){if(Ie=g.getWireframeAttribute(Q),Ie===void 0)return;ke=2}let He=Q.drawRange,Ne=Q.attributes.position,je=He.start*ke,ot=(He.start+He.count)*ke;fe!==null&&(je=Math.max(je,fe.start*ke),ot=Math.min(ot,(fe.start+fe.count)*ke)),Ie!==null?(je=Math.max(je,0),ot=Math.min(ot,Ie.count)):Ne!=null&&(je=Math.max(je,0),ot=Math.min(ot,Ne.count));let mt=ot-je;if(mt<0||mt===1/0)return;ve.setup(X,K,Ue,Q,Ie);let ht,lt=Me;if(Ie!==null&&(ht=_.get(Ie),lt=ze,lt.setIndex(ht)),X.isMesh)K.wireframe===!0?(I.setLineWidth(K.wireframeLinewidth*_t()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(X.isLine){let Be=K.linewidth;Be===void 0&&(Be=1),I.setLineWidth(Be*_t()),X.isLineSegments?lt.setMode(L.LINES):X.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else X.isPoints?lt.setMode(L.POINTS):X.isSprite&&lt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Be=X._multiDrawStarts,dt=X._multiDrawCounts,it=X._multiDrawCount,Wt=Ie?_.get(Ie).bytesPerElement:1,Ti=A.get(K).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)Ti.setValue(L,"_gl_DrawID",Xt),lt.render(Be[Xt]/Wt,dt[Xt])}else if(X.isInstancedMesh)lt.renderInstances(je,mt,X.count);else if(Q.isInstancedBufferGeometry){let Be=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,dt=Math.min(Q.instanceCount,Be);lt.renderInstances(je,mt,dt)}else lt.render(je,mt)};function xe(v,W,Q){v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,si(v,W,Q),v.side=Dn,v.needsUpdate=!0,si(v,W,Q),v.side=yn):si(v,W,Q)}this.compile=function(v,W,Q=null){Q===null&&(Q=v),d=q.get(Q),d.init(W),C.push(d),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),v!==Q&&v.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();let K=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let fe=X.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){let Ue=fe[Ee];xe(Ue,Q,X),K.add(Ue)}else xe(fe,Q,X),K.add(fe)}),d=C.pop(),K},this.compileAsync=function(v,W,Q=null){let K=this.compile(v,W,Q);return new Promise(X=>{function fe(){if(K.forEach(function(Ee){A.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){X(v);return}setTimeout(fe,10)}Ge.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let he=null;function $(v){he&&he(v)}function ue(){st.stop()}function tt(){st.start()}let st=new nh;st.setAnimationLoop($),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(v){he=v,pe.setAnimationLoop(v),v===null?st.stop():st.start()},pe.addEventListener("sessionstart",ue),pe.addEventListener("sessionend",tt),this.render=function(v,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(W),W=pe.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,W,V),d=q.get(v,C.length),d.init(W),C.push(d),re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(re,an,W.reversedDepth),oe=this.localClippingEnabled,Ke=Z.init(this.clippingPlanes,oe),m=T.get(v,R.length),m.init(),R.push(m),pe.enabled===!0&&pe.isPresenting===!0){let fe=b.xr.getDepthSensingMesh();fe!==null&&Bt(fe,W,-1/0,b.sortObjects)}Bt(v,W,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(_e,Se),Xe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Xe&&be.addToRenderList(m,v),this.info.render.frame++,Ke===!0&&Z.beginShadows();let Q=d.state.shadowsArray;ge.render(Q,v,W),Ke===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,X=m.transmissive;if(d.setupLights(),W.isArrayCamera){let fe=W.cameras;if(X.length>0)for(let Ee=0,Ue=fe.length;Ee<Ue;Ee++){let Ie=fe[Ee];vt(K,X,v,Ie)}Xe&&be.render(v);for(let Ee=0,Ue=fe.length;Ee<Ue;Ee++){let Ie=fe[Ee];Dt(m,v,Ie,Ie.viewport)}}else X.length>0&&vt(K,X,v,W),Xe&&be.render(v),Dt(m,v,W);V!==null&&N===0&&(ae.updateMultisampleRenderTarget(V),ae.updateRenderTargetMipmap(V)),v.isScene===!0&&v.onAfterRender(b,v,W),ve.resetDefaultState(),S=-1,M=null,C.pop(),C.length>0?(d=C[C.length-1],Ke===!0&&Z.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Bt(v,W,Q,K){if(v.visible===!1)return;if(v.layers.test(W.layers)){if(v.isGroup)Q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(W);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||et.intersectsSprite(v)){K&&Oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(re);let Ee=F.update(v),Ue=v.material;Ue.visible&&m.push(v,Ee,Ue,Q,Oe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||et.intersectsObject(v))){let Ee=F.update(v),Ue=v.material;if(K&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Oe.copy(v.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(v.matrixWorld).applyMatrix4(re)),Array.isArray(Ue)){let Ie=Ee.groups;for(let ke=0,He=Ie.length;ke<He;ke++){let Ne=Ie[ke],je=Ue[Ne.materialIndex];je&&je.visible&&m.push(v,Ee,je,Q,Oe.z,Ne)}}else Ue.visible&&m.push(v,Ee,Ue,Q,Oe.z,null)}}let fe=v.children;for(let Ee=0,Ue=fe.length;Ee<Ue;Ee++)Bt(fe[Ee],W,Q,K)}function Dt(v,W,Q,K){let X=v.opaque,fe=v.transmissive,Ee=v.transparent;d.setupLightsView(Q),Ke===!0&&Z.setGlobalState(b.clippingPlanes,Q),K&&I.viewport(O.copy(K)),X.length>0&&At(X,W,Q),fe.length>0&&At(fe,W,Q),Ee.length>0&&At(Ee,W,Q),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function vt(v,W,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new xn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ss:hn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let fe=d.state.transmissionRenderTarget[K.id],Ee=K.viewport||O;fe.setSize(Ee.z*b.transmissionResolutionScale,Ee.w*b.transmissionResolutionScale);let Ue=b.getRenderTarget(),Ie=b.getActiveCubeFace(),ke=b.getActiveMipmapLevel();b.setRenderTarget(fe),b.getClearColor(te),ie=b.getClearAlpha(),ie<1&&b.setClearColor(16777215,.5),b.clear(),Xe&&be.render(Q);let He=b.toneMapping;b.toneMapping=Bn;let Ne=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),Ke===!0&&Z.setGlobalState(b.clippingPlanes,K),At(v,Q,K),ae.updateMultisampleRenderTarget(fe),ae.updateRenderTargetMipmap(fe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ot=0,mt=W.length;ot<mt;ot++){let ht=W[ot],lt=ht.object,Be=ht.geometry,dt=ht.material,it=ht.group;if(dt.side===yn&&lt.layers.test(K.layers)){let Wt=dt.side;dt.side=Ot,dt.needsUpdate=!0,js(lt,Q,K,Be,dt,it),dt.side=Wt,dt.needsUpdate=!0,je=!0}}je===!0&&(ae.updateMultisampleRenderTarget(fe),ae.updateRenderTargetMipmap(fe))}b.setRenderTarget(Ue,Ie,ke),b.setClearColor(te,ie),Ne!==void 0&&(K.viewport=Ne),b.toneMapping=He}function At(v,W,Q){let K=W.isScene===!0?W.overrideMaterial:null;for(let X=0,fe=v.length;X<fe;X++){let Ee=v[X],Ue=Ee.object,Ie=Ee.geometry,ke=Ee.group,He=Ee.material;He.allowOverride===!0&&K!==null&&(He=K),Ue.layers.test(Q.layers)&&js(Ue,W,Q,Ie,He,ke)}}function js(v,W,Q,K,X,fe){v.onBeforeRender(b,W,Q,K,X,fe),v.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(b,W,Q,K,v,fe),X.transparent===!0&&X.side===yn&&X.forceSinglePass===!1?(X.side=Ot,X.needsUpdate=!0,b.renderBufferDirect(Q,W,K,X,v,fe),X.side=Dn,X.needsUpdate=!0,b.renderBufferDirect(Q,W,K,X,v,fe),X.side=yn):b.renderBufferDirect(Q,W,K,X,v,fe),v.onAfterRender(b,W,Q,K,X,fe)}function si(v,W,Q){W.isScene!==!0&&(W=De);let K=A.get(v),X=d.state.lights,fe=d.state.shadowsArray,Ee=X.state.version,Ue=k.getParameters(v,X.state,fe,W,Q),Ie=k.getProgramCacheKey(Ue),ke=K.programs;K.environment=v.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(v.isMeshStandardMaterial?B:H).get(v.envMap||K.environment),K.envMapRotation=K.environment!==null&&v.envMap===null?W.environmentRotation:v.envMapRotation,ke===void 0&&(v.addEventListener("dispose",ce),ke=new Map,K.programs=ke);let He=ke.get(Ie);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Ee)return Qs(v,Ue),He}else Ue.uniforms=k.getUniforms(v),v.onBeforeCompile(Ue,b),He=k.acquireProgram(Ue,Ie),ke.set(Ie,He),K.uniforms=Ue.uniforms;let Ne=K.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ne.clippingPlanes=Z.uniform),Qs(v,Ue),K.needsLights=Qa(v),K.lightsStateVersion=Ee,K.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function fs(v){if(v.uniformsList===null){let W=v.currentProgram.getUniforms();v.uniformsList=ls.seqWithValue(W.seq,v.uniforms)}return v.uniformsList}function Qs(v,W){let Q=A.get(v);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Ka(v,W,Q,K,X){W.isScene!==!0&&(W=De),ae.resetTextureUnits();let fe=W.fog,Ee=K.isMeshStandardMaterial?W.environment:null,Ue=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:fi,Ie=(K.isMeshStandardMaterial?B:H).get(K.envMap||Ee),ke=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!Q.morphAttributes.position,je=!!Q.morphAttributes.normal,ot=!!Q.morphAttributes.color,mt=Bn;K.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(mt=b.toneMapping);let ht=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,lt=ht!==void 0?ht.length:0,Be=A.get(K),dt=d.state.lights;if(Ke===!0&&(oe===!0||v!==M)){let Ut=v===M&&K.id===S;Z.setState(K,v,Ut)}let it=!1;K.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==dt.state.version||Be.outputColorSpace!==Ue||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isBatchedMesh&&Be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Ie||K.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Z.numPlanes||Be.numIntersection!==Z.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==He||Be.morphTargets!==Ne||Be.morphNormals!==je||Be.morphColors!==ot||Be.toneMapping!==mt||Be.morphTargetsCount!==lt)&&(it=!0):(it=!0,Be.__version=K.version);let Wt=Be.currentProgram;it===!0&&(Wt=si(K,W,X));let Ti=!1,Xt=!1,ps=!1,ft=Wt.getUniforms(),Jt=Be.uniforms;if(I.useProgram(Wt.program)&&(Ti=!0,Xt=!0,ps=!0),K.id!==S&&(S=K.id,Xt=!0),Ti||M!==v){I.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ft.setValue(L,"projectionMatrix",v.projectionMatrix),ft.setValue(L,"viewMatrix",v.matrixWorldInverse);let zt=ft.map.cameraPosition;zt!==void 0&&zt.setValue(L,Ae.setFromMatrixPosition(v.matrixWorld)),D.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ft.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Xt=!0,ps=!0)}if(X.isSkinnedMesh){ft.setOptional(L,X,"bindMatrix"),ft.setOptional(L,X,"bindMatrixInverse");let Ut=X.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(L,"boneTexture",Ut.boneTexture,ae))}X.isBatchedMesh&&(ft.setOptional(L,X,"batchingTexture"),ft.setValue(L,"batchingTexture",X._matricesTexture,ae),ft.setOptional(L,X,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",X._indirectTexture,ae),ft.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",X._colorsTexture,ae));let Kt=Q.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&le.update(X,Q,Wt),(Xt||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,ft.setValue(L,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Jt.envMap.value=Ie,Jt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(Jt.envMapIntensity.value=W.environmentIntensity),Xt&&(ft.setValue(L,"toneMappingExposure",b.toneMappingExposure),Be.needsLights&&ja(Jt,ps),fe&&K.fog===!0&&j.refreshFogUniforms(Jt,fe),j.refreshMaterialUniforms(Jt,K,ee,me,d.state.transmissionRenderTarget[v.id]),ls.upload(L,fs(Be),Jt,ae)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ls.upload(L,fs(Be),Jt,ae),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ft.setValue(L,"center",X.center),ft.setValue(L,"modelViewMatrix",X.modelViewMatrix),ft.setValue(L,"normalMatrix",X.normalMatrix),ft.setValue(L,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Ut=K.uniformsGroups;for(let zt=0,eo=Ut.length;zt<eo;zt++){let ri=Ut[zt];qe.update(ri,Wt),qe.bind(ri,Wt)}}return Wt}function ja(v,W){v.ambientLightColor.needsUpdate=W,v.lightProbe.needsUpdate=W,v.directionalLights.needsUpdate=W,v.directionalLightShadows.needsUpdate=W,v.pointLights.needsUpdate=W,v.pointLightShadows.needsUpdate=W,v.spotLights.needsUpdate=W,v.spotLightShadows.needsUpdate=W,v.rectAreaLights.needsUpdate=W,v.hemisphereLights.needsUpdate=W}function Qa(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,W,Q){let K=A.get(v);K.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),A.get(v.texture).__webglTexture=W,A.get(v.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,W){let Q=A.get(v);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};let er=L.createFramebuffer();this.setRenderTarget=function(v,W=0,Q=0){V=v,P=W,N=Q;let K=!0,X=null,fe=!1,Ee=!1;if(v){let Ie=A.get(v);if(Ie.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Ie.__webglFramebuffer===void 0)ae.setupRenderTarget(v);else if(Ie.__hasExternalTextures)ae.rebindTextures(v,A.get(v.texture).__webglTexture,A.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ne=v.depthTexture;if(Ie.__boundDepthTexture!==Ne){if(Ne!==null&&A.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(v)}}let ke=v.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ee=!0);let He=A.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(He[W])?X=He[W][Q]:X=He[W],fe=!0):v.samples>0&&ae.useMultisampledRTT(v)===!1?X=A.get(v).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[Q]:X=He,O.copy(v.viewport),Y.copy(v.scissor),ne=v.scissorTest}else O.copy(Pe).multiplyScalar(ee).floor(),Y.copy(Ve).multiplyScalar(ee).floor(),ne=$e;if(Q!==0&&(X=er),I.bindFramebuffer(L.FRAMEBUFFER,X)&&K&&I.drawBuffers(v,X),I.viewport(O),I.scissor(Y),I.setScissorTest(ne),fe){let Ie=A.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,Q)}else if(Ee){let Ie=W;for(let ke=0;ke<v.textures.length;ke++){let He=A.get(v.textures[ke]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ke,He.__webglTexture,Q,Ie)}}else if(v!==null&&Q!==0){let Ie=A.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,Q)}S=-1},this.readRenderTargetPixels=function(v,W,Q,K,X,fe,Ee,Ue=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=A.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){I.bindFramebuffer(L.FRAMEBUFFER,Ie);try{let ke=v.textures[Ue],He=ke.format,Ne=ke.type;if(!D.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=v.width-K&&Q>=0&&Q<=v.height-X&&(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(W,Q,K,X,Ce.convert(He),Ce.convert(Ne),fe))}finally{let ke=V!==null?A.get(V).__webglFramebuffer:null;I.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(v,W,Q,K,X,fe,Ee,Ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=A.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie)if(W>=0&&W<=v.width-K&&Q>=0&&Q<=v.height-X){I.bindFramebuffer(L.FRAMEBUFFER,Ie);let ke=v.textures[Ue],He=ke.format,Ne=ke.type;if(!D.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(W,Q,K,X,Ce.convert(He),Ce.convert(Ne),0);let ot=V!==null?A.get(V).__webglFramebuffer:null;I.bindFramebuffer(L.FRAMEBUFFER,ot);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cl(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(je),L.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,W=null,Q=0){let K=Math.pow(2,-Q),X=Math.floor(v.image.width*K),fe=Math.floor(v.image.height*K),Ee=W!==null?W.x:0,Ue=W!==null?W.y:0;ae.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,Ee,Ue,X,fe),I.unbindTexture()};let We=L.createFramebuffer(),pn=L.createFramebuffer();this.copyTextureToTexture=function(v,W,Q=null,K=null,X=0,fe=null){fe===null&&(X!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=X,X=0):fe=0);let Ee,Ue,Ie,ke,He,Ne,je,ot,mt,ht=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(Q!==null)Ee=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,ke=Q.min.x,He=Q.min.y,Ne=Q.isBox3?Q.min.z:0;else{let Kt=Math.pow(2,-X);Ee=Math.floor(ht.width*Kt),Ue=Math.floor(ht.height*Kt),v.isDataArrayTexture?Ie=ht.depth:v.isData3DTexture?Ie=Math.floor(ht.depth*Kt):Ie=1,ke=0,He=0,Ne=0}K!==null?(je=K.x,ot=K.y,mt=K.z):(je=0,ot=0,mt=0);let lt=Ce.convert(W.format),Be=Ce.convert(W.type),dt;W.isData3DTexture?(ae.setTexture3D(W,0),dt=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),dt=L.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);let it=L.getParameter(L.UNPACK_ROW_LENGTH),Wt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ti=L.getParameter(L.UNPACK_SKIP_PIXELS),Xt=L.getParameter(L.UNPACK_SKIP_ROWS),ps=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne);let ft=v.isDataArrayTexture||v.isData3DTexture,Jt=W.isDataArrayTexture||W.isData3DTexture;if(v.isDepthTexture){let Kt=A.get(v),Ut=A.get(W),zt=A.get(Kt.__renderTarget),eo=A.get(Ut.__renderTarget);I.bindFramebuffer(L.READ_FRAMEBUFFER,zt.__webglFramebuffer),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let ri=0;ri<Ie;ri++)ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(v).__webglTexture,X,Ne+ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(W).__webglTexture,fe,mt+ri)),L.blitFramebuffer(ke,He,Ee,Ue,je,ot,Ee,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);I.bindFramebuffer(L.READ_FRAMEBUFFER,null),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||A.has(v)){let Kt=A.get(v),Ut=A.get(W);I.bindFramebuffer(L.READ_FRAMEBUFFER,We),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,pn);for(let zt=0;zt<Ie;zt++)ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kt.__webglTexture,X,Ne+zt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kt.__webglTexture,X),Jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,fe,mt+zt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,fe),X!==0?L.blitFramebuffer(ke,He,Ee,Ue,je,ot,Ee,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):Jt?L.copyTexSubImage3D(dt,fe,je,ot,mt+zt,ke,He,Ee,Ue):L.copyTexSubImage2D(dt,fe,je,ot,ke,He,Ee,Ue);I.bindFramebuffer(L.READ_FRAMEBUFFER,null),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Jt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(dt,fe,je,ot,mt,Ee,Ue,Ie,lt,Be,ht.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,fe,je,ot,mt,Ee,Ue,Ie,lt,ht.data):L.texSubImage3D(dt,fe,je,ot,mt,Ee,Ue,Ie,lt,Be,ht):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,je,ot,Ee,Ue,lt,Be,ht.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,je,ot,ht.width,ht.height,lt,ht.data):L.texSubImage2D(L.TEXTURE_2D,fe,je,ot,Ee,Ue,lt,Be,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ti),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ps),fe===0&&W.generateMipmaps&&L.generateMipmap(dt),I.unbindTexture()},this.initRenderTarget=function(v){A.get(v).__webglFramebuffer===void 0&&ae.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ae.setTextureCube(v,0):v.isData3DTexture?ae.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ae.setTexture2DArray(v,0):ae.setTexture2D(v,0),I.unbindTexture()},this.resetState=function(){P=0,N=0,V=null,I.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Le=[{name:"Campos do Sol",short:"Sol",creature:"Pintinho Pipoca",value:80,color:16239189,ground:6072679,path:14665623,sky:11067373,kind:"chick"},{name:"Dunas Douradas",short:"Dunas",creature:"Raposa de Areia",value:140,color:16163924,ground:14262362,path:15978380,sky:16176812,kind:"fox"},{name:"Bosque Encantado",short:"Bosque",creature:"Cervinho Folha",value:230,color:9096067,ground:3767916,path:11380108,sky:10142154,kind:"deer"},{name:"Reino de Gelo",short:"Gelo",creature:"Pingui de Gelo",value:360,color:8509420,ground:13495281,path:9553371,sky:13232891,kind:"penguin"},{name:"Vale Vulc\xE2nico",short:"Vulc\xE3o",creature:"Drag\xE3o Brasa",value:550,color:15890772,ground:5589083,path:7824246,sky:7689058,kind:"dragon"},{name:"Caverna de Cristal",short:"Cristal",creature:"Tartaruga Cristal",value:850,color:11969011,ground:7632040,path:11839441,sky:7634862,kind:"turtle"},{name:"Ilhas C\xF3smicas",short:"Cosmos",creature:"Gato Estelar",value:1300,color:12884981,ground:4146541,path:7960243,sky:2699606,kind:"cat"},{name:"Recife de Coral",short:"Coral",creature:"Axolote P\xE9rola",value:1900,color:16748986,ground:2400186,path:15192996,sky:9560045,kind:"axolotl"},{name:"Vale dos Doces",short:"Doces",creature:"Coelho Caramelo",value:2700,color:16297102,ground:11969500,path:16766653,sky:16240612,kind:"rabbit"},{name:"Floresta de Bambu",short:"Bambu",creature:"Panda Jade",value:3700,color:6865562,ground:3904109,path:12958598,sky:12773588,kind:"panda"},{name:"Cidade das Engrenagens",short:"Rob\xF4s",creature:"Rob\xF4 Fa\xEDsca",value:5e3,color:16761943,ground:4479355,path:8820914,sky:9549791,kind:"robot"},{name:"Templo das Nuvens",short:"Nuvens",creature:"Grifo Aurora",value:6800,color:14070527,ground:10732778,path:16180925,sky:13359866,kind:"griffin"},{name:"Santu\xE1rio das Tempestades",short:"Tempestade",creature:"F\xEAnix Rel\xE2mpago",value:9500,color:8974335,ground:3490912,path:6584736,sky:4278905,kind:"phoenix"}],ti=600,wt=48,fn={x:-5,z:14},En={x:5,z:14},bn=Le.map((i,e)=>({x:e%2?-3.2:3.2,z:-(e*wt+25)})),us=i=>(7.7+i*1.1)*2,Xa=Le.flatMap((i,e)=>[{x:-2.3,z:-(e*wt+11),r:.72,h:.65,world:e},{x:2.15,z:-(e*wt+37),r:.78,h:.72,world:e},...e>=7?Array.from({length:3},(t,n)=>({x:[0,-3.1,3.1][n],z:-(e*wt+17+n*8),r:.65,h:.8+n*.08,world:e})):[]]),ni={boots:{name:"T\xEAnis velozes",icon:"\u{1F45F}",desc:"+0,8 de velocidade por n\xEDvel.",max:10,base:80},energy:{name:"Mais f\xF4lego",icon:"\u{1F4A8}",desc:"+30 de energia para disparar.",max:5,base:90},pen:{name:"Curral maior",icon:"\u{1F3E1}",desc:"+2 espa\xE7os para ovos e criaturas.",max:10,base:150},incubator:{name:"Ninho aquecido",icon:"\u{1F95A}",desc:"O ovo choca 1,5 s mais r\xE1pido.",max:3,base:100},gloves:{name:"Luvas de transporte",icon:"\u{1F9E4}",desc:"Corra 4% mais r\xE1pido carregando o ovo, por n\xEDvel.",max:4,base:180},springs:{name:"Molas de salto",icon:"\u{1F998}",desc:"Pule mais alto para superar obst\xE1culos.",max:3,base:120},hydration:{name:"Garrafa esportiva",icon:"\u{1F4A7}",desc:"+6 de f\xF4lego recuperado por segundo, por n\xEDvel.",max:4,base:160},coach:{name:"Esteira profissional",icon:"\u{1F3C3}",desc:"Ganhe 25% mais treino por segundo, por n\xEDvel.",max:4,base:200},charm:{name:"Medalha do criador",icon:"\u{1F3C5}",desc:"Receba 10% a mais por criatura vendida, por n\xEDvel.",max:3,base:300},turbo:{name:"Impulso turbo",icon:"\u{1F680}",desc:"Dispare 10% mais r\xE1pido, por n\xEDvel.",max:3,base:220}},Ei={shield:{name:"Escudo bolha",icon:"\u{1F6E1}\uFE0F",price:60,max:5,desc:"Protege de uma captura. Ativa sozinho quando o dono encosta."},juice:{name:"Suco de energia",icon:"\u{1F9C3}",price:35,max:5,desc:"Recupera todo o f\xF4lego. Toque em Suco durante a corrida."}},Mt={common:{name:"Comum",mult:1,color:16773585},rare:{name:"Raro",mult:3,color:7921151},epic:{name:"\xC9pico",mult:5,color:13476095},legendary:{name:"Lend\xE1rio",mult:8,color:16765788},secret:{name:"Secreto",mult:12,color:15963343}},ch=(i,e)=>e===0?"common":e===1?"rare":i>=6?"legendary":"epic",Gt={crown:{name:"Coroa dourada",slot:"head",price:240,desc:"Uma coroa com pedras coloridas."},headphones:{name:"Fones neon",slot:"head",price:120,desc:"Fones azuis para seu corredor."},halo:{name:"Halo estelar",slot:"head",price:550,desc:"Um anel luminoso sobre a cabe\xE7a."},goggles:{name:"\xD3culos de aviador",slot:"face",price:160,desc:"Lentes turquesa e arma\xE7\xE3o dourada."},wings:{name:"Asas de cristal",slot:"back",price:420,desc:"Asas lil\xE1s para enfeitar o personagem."},cape:{name:"Capa de her\xF3i",slot:"back",price:200,desc:"Uma capa vermelha para a aventura."},pilotCap:{name:"Capacete de piloto",slot:"head",price:850,desc:"Capacete laranja com faixa e prote\xE7\xE3o lateral."},safariHat:{name:"Chap\xE9u explorador",slot:"head",price:1500,desc:"Aba larga e uma pena verde para as expedi\xE7\xF5es."},iceTiara:{name:"Tiara de gelo",slot:"head",price:3e3,desc:"Pontas de cristal azul em uma tiara prateada."},stormHelm:{name:"Elmo da tempestade",slot:"head",price:18e3,desc:"Elmo violeta com dois rel\xE2mpagos dourados."},solarCrown:{name:"Coroa do sol",slot:"head",price:75e3,desc:"Uma coroa m\xEDtica com um grande disco solar."},starGlasses:{name:"\xD3culos de estrela",slot:"face",price:2200,desc:"Duas estrelas douradas com lentes rosadas."},cyberVisor:{name:"Visor cibern\xE9tico",slot:"face",price:4500,desc:"Visor azul com moldura e luzes neon."},butterflyMask:{name:"M\xE1scara borboleta",slot:"face",price:9e3,desc:"Asas turquesa e lil\xE1s ao redor dos olhos."},royalMask:{name:"M\xE1scara imperial",slot:"face",price:35e3,desc:"M\xE1scara dourada com cristais de rubi."},explorerPack:{name:"Mochila de expedi\xE7\xE3o",slot:"back",price:1200,desc:"Mochila verde com bolso e rolinho de viagem."},beeWings:{name:"Asas de abelha",slot:"back",price:3800,desc:"Quatro asas claras com detalhes amarelos."},jetpack:{name:"Mochila a jato",slot:"back",price:6500,desc:"Dois propulsores prateados com chamas azuis. Visual, sem voo."},phoenixWings:{name:"Asas da f\xEAnix",slot:"back",price:12e3,desc:"Penas longas nas cores do fogo."},auroraCape:{name:"Manto da aurora",slot:"back",price:25e3,desc:"Manto em faixas lil\xE1s, verde e azul."},cometPack:{name:"Cometa de cristal",slot:"back",price:5e4,desc:"Um cometa com cauda de cristais azuis."},infinityWings:{name:"Asas do infinito",slot:"back",price:15e4,desc:"Asas m\xEDticas, an\xE9is c\xF3smicos e estrelas douradas."}},kn={normal:{name:"Natural",mult:1,color:null},gold:{name:"Dourado",mult:1.5,color:16764006},rainbow:{name:"Arco-\xEDris",mult:2,color:9369055},cosmic:{name:"C\xF3smico",mult:3,color:11439103}},ii={meadow:{name:"Prado",price:0,color:9750141,roof:7824561},candy:{name:"Doceria",price:600,color:15839692,roof:8244431},space:{name:"Observat\xF3rio",price:1200,color:7833016,roof:14527231},bamboo:{name:"Jardim de bambu",price:800,color:7780741,roof:14531176}},_c=["Troncos girat\xF3rios","Rajada de areia","Esporos do bosque","Piso escorregadio","Jatos de lava","Pulso de cristal","Baixa gravidade","Correnteza do recife","Po\xE7as de caramelo","Bambu m\xF3vel","Prensa mec\xE2nica","Vento das nuvens","Rel\xE2mpagos do santu\xE1rio"],Ya=[{id:"first",name:"Primeira entrega",key:"delivered",target:1,reward:100},{id:"five",name:"Mensageiro dos ovos",key:"delivered",target:5,reward:350},{id:"explorer",name:"Seis mundos",key:"visited",target:6,reward:600},{id:"collector",name:"Seis esp\xE9cies",key:"seen",target:6,reward:1e3},{id:"trainer",name:"Atleta n\xEDvel 50",key:"training",target:50,reward:700},{id:"rare",name:"Criador de raridades",key:"rareHatched",target:5,reward:800},{id:"income",name:"Curral produtivo",key:"incomeEarned",target:500,reward:400},{id:"clean",name:"Fuga impec\xE1vel",key:"cleanRuns",target:3,reward:500},{id:"worlds",name:"Grande explorador",key:"visited",target:12,reward:2e3},{id:"secret",name:"Segredo revelado",key:"secretHatched",target:1,reward:1500},{id:"storm",name:"Al\xE9m das nuvens",key:"visited",target:13,reward:3500}],qa=i=>kn[i]?i:"normal",lh=i=>["speed","energy","value"][i%3],Za=i=>i?{speed:"Velocidade +5%",energy:"Recupera\xE7\xE3o de f\xF4lego +8/s",value:"Vendas +10%"}[lh(i.world)]:"Escolha uma criatura no curral.",$a=i=>Mt[i]?i:"common",un=(i,e,t)=>Math.max(e,Math.min(t,i)),Ht=(i,e,t)=>Number.isFinite(i)?un(i,e,t):e,dn=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function vc(){return{version:4,rng:Math.floor(Math.random()*2147483646)+1,nestState:null,companionId:null,decorations:["meadow"],decoration:"meadow",incomePending:0,incomeEarned:0,rareHatched:0,secretHatched:0,cleanRuns:0,claimed:[],album:[],daily:{day:"",delivered:0,claimed:!1},accessories:[],equipped:{},coins:0,training:0,trainXP:0,upgrades:Object.fromEntries(Object.keys(ni).map(i=>[i,0])),supplies:{shield:0,juice:0},creatures:[],eggs:[],seen:Array(Le.length).fill(!1),visited:Array(Le.length).fill(!1),delivered:0,caught:0,nextId:1}}function Mm(i){let e=vc();if(!i||![1,2,3,4].includes(i.version))return e;e.accessories=Object.keys(Gt).filter(t=>i.accessories?.includes(t));for(let t of e.accessories)i.equipped?.[Gt[t].slot]===t&&(e.equipped[Gt[t].slot]=t);e.coins=Math.floor(Ht(i.coins,0,1e9)),e.training=Math.floor(Ht(i.training,0,ti)),e.trainXP=Ht(i.trainXP,0,8+e.training*1.5);for(let[t,n]of Object.entries(ni))e.upgrades[t]=Math.floor(Ht(i.upgrades?.[t],0,n.max));for(let[t,n]of Object.entries(Ei))e.supplies[t]=Math.floor(Ht(i.supplies?.[t],0,n.max));e.seen=e.seen.map((t,n)=>i.seen?.[n]===!0),e.visited=e.visited.map((t,n)=>i.visited?.[n]===!0),e.delivered=Math.floor(Ht(i.delivered,0,1e6)),e.caught=Math.floor(Ht(i.caught,0,1e6));for(let t of Array.isArray(i.creatures)?i.creatures:[])Number.isInteger(t.world)&&t.world>=0&&t.world<Le.length&&e.creatures.length<3+e.upgrades.pen*2&&e.creatures.push({id:e.nextId++,world:t.world,rarity:$a(t.rarity),mutation:qa(t.mutation),incomeProgress:Ht(t.incomeProgress,0,1e9),uid:typeof t.uid=="string"&&/^[a-zA-Z0-9_-]{1,80}$/.test(t.uid)?t.uid:"pet-"+Date.now().toString(36)+"-"+e.nextId});for(let t of Array.isArray(i.eggs)?i.eggs:[])Number.isInteger(t.world)&&t.world>=0&&t.world<Le.length&&e.creatures.length+e.eggs.length<3+e.upgrades.pen*2&&e.eggs.push({id:e.nextId++,world:t.world,rarity:$a(t.rarity),mutation:qa(t.mutation),remaining:Ht(t.remaining,0,8)});e.companionId=e.creatures.find(t=>t.uid===i.companionId)?.uid||null,e.decorations=Object.keys(ii).filter(t=>t==="meadow"||i.decorations?.includes(t)),e.decoration=e.decorations.includes(i.decoration)?i.decoration:"meadow",e.rng=Math.floor(Ht(i.rng||e.rng,1,4294967295)),e.nestState=Array.isArray(i.nestState)?i.nestState:null;for(let t of["incomePending","incomeEarned","rareHatched","secretHatched","cleanRuns"])e[t]=Ht(i[t],0,1e9);e.claimed=Ya.filter(t=>i.claimed?.includes(t.id)).map(t=>t.id),e.album=Array.isArray(i.album)?[...new Set(i.album.filter(t=>/^\d{1,2}:(common|rare|epic|legendary|secret):(normal|gold|rainbow|cosmic)$/.test(t)))].slice(0,240):[];for(let t of e.creatures){let n=t.world+":"+t.rarity+":"+t.mutation;e.album.includes(n)||e.album.push(n)}return i.daily&&/^\d{4}-\d{2}-\d{2}$/.test(i.daily.day)&&(e.daily={day:i.daily.day,delivered:Ht(i.daily.delivered,0,1e4),claimed:i.daily.claimed===!0}),e}var ds=class{constructor(e){this.save=Mm(e),this.player={x:0,z:15,y:0,vy:0},this.time=0,this.incomeClock=0,this.carrying=null,this.carriedEgg=null,this.mode="run",this.energy=this.maxEnergy(),this.moving=0,this.sprinting=!1,this.events=[],this.hazardCooldown=0,this.slowUntil=0,this.runClean=!0,this.nestEggs=Le.map((t,n)=>Array.from({length:3},(s,r)=>{let o=this.save.nestState?.[n]?.[r];return o?{slot:r,rarity:$a(o.rarity),mutation:qa(o.mutation),availableAt:Ht(o.cooldown,0,240),refreshAt:Ht(o.refresh,1,240)}:this.rollEgg(n,r)})),this.captureNests(),this.guardians=bn.map(t=>({x:t.x,z:t.z-2.5,state:"idle",grace:0})),this.hitCooldown=0,this.save.visited[0]=!0}get availableAt(){return this.nestEggs.map(e=>Math.min(...e.map(t=>t.availableAt)))}availableEggs(e){return this.nestEggs[e].filter(t=>t.availableAt<=this.time)}recommendedTraining(e){let t=.92+this.save.upgrades.gloves*.04;return Math.max(0,Math.ceil((us(e)*1.1/(t*(this.power()==="speed"?1.05:1))-9-this.save.upgrades.boots*.8)/.35))}trainingAdvice(e){let t=this.recommendedTraining(e);return{level:t,remaining:Math.max(0,t-this.save.training),ready:this.save.training>=t}}speed(){return this.raceMode?22:(9+this.save.training*.35+this.save.upgrades.boots*.8)*(this.power()==="speed"?1.05:1)}maxEnergy(){return 100+this.save.upgrades.energy*30}capacity(){return 3+this.save.upgrades.pen*2}trainTarget(){return 8+this.save.training*1.5}hatchTime(){return 8-this.save.upgrades.incubator*1.5}zone(){return un(Math.floor(-this.player.z/wt),0,Le.length-1)}inBase(){return this.player.z>3}price(e){let t=ni[e];return t?Math.round(t.base*(this.save.upgrades[e]+1)**1.5):1/0}emit(e,t,n){this.events.push({type:e,text:t,world:n})}drainEvents(){return this.events.splice(0)}push(e){if(!this.raceMode||this.mode!=="run"||!e||!Number.isFinite(e.x)||!Number.isFinite(e.z)||this.time<(this.pushProtectedUntil||0))return!1;let t=Math.hypot(e.x,e.z);return t<.01?!1:(this.pushVelocity={x:e.x/t*15,z:e.z/t*15},this.pushUntil=this.time+.55,this.pushProtectedUntil=this.time+1.25,this.player.vy=Math.max(this.player.vy,3.3),!0)}clearPush(){this.pushVelocity=null,this.pushUntil=0,this.pushProtectedUntil=0}jump(){return this.mode==="run"&&this.player.y===0?(this.player.vy=7.6+(this.raceMode?0:this.save.upgrades.springs*.7),!0):!1}interaction(){if(this.raceMode)return{type:"walk",label:"Siga o ninho da corrida"};if(this.mode==="train")return{type:"stop",label:"Sair da esteira"};if(this.carrying!==null)return dn(this.player,fn)<3.1?{type:"deposit",label:"Guardar ovo"}:{type:"return",label:"Leve ao curral"};if(dn(this.player,En)<2.5)return{type:"train",label:"Treinar na esteira"};if(dn(this.player,fn)<3.1)return{type:"corral",label:"Abrir curral"};for(let e=0;e<Le.length;e++)if(dn(this.player,bn[e])<2.6)return this.availableAt[e]<=this.time?{type:"nest",label:`Escolher ovo \xB7 ${this.availableEggs(e).length}`,world:e}:{type:"wait",label:`Novo ovo em ${Math.ceil(this.availableAt[e]-this.time)} s`};return{type:"walk",label:"Aproxime-se do ovo"}}interact(){let e=this.interaction();if(e.type==="stop")return this.mode="run",this.player.z=16.2,this.emit("stop","Treino conclu\xEDdo. Sua velocidade est\xE1 maior!"),e.type;if(e.type==="train")return this.save.training>=ti?(this.emit("notice","Voc\xEA j\xE1 atingiu o n\xEDvel m\xE1ximo de treino!"),!1):(this.mode="train",this.player.x=En.x,this.player.z=En.z,this.player.y=0,this.player.vy=0,this.emit("train","Treinando! A cada barra completa, sua velocidade aumenta."),e.type);if(e.type==="deposit"){if(this.save.creatures.length+this.save.eggs.length>=this.capacity())return this.emit("notice","Curral cheio! Venda uma criatura ou compre mais espa\xE7os."),!1;let t=this.carrying;return this.save.eggs.push({id:this.save.nextId++,world:t,rarity:this.carriedEgg.rarity,mutation:this.carriedEgg.mutation,remaining:this.hatchTime()}),this.save.delivered++,this.refreshDay(),this.save.daily.delivered++,this.runClean&&this.save.cleanRuns++,this.nestEggs[t][this.carriedEgg.slot].availableAt=this.time+18,this.carrying=null,this.carriedEgg=null,this.guardians[t].state="return",this.emit("deposit","O ovo chegou ao curral! J\xE1 est\xE1 chocando.",t),e.type}return["corral","nest"].includes(e.type)?e.type:!1}steal(e){let t=this.interaction();if(t.type!=="nest"||!Number.isInteger(e))return!1;let n=this.nestEggs[t.world]?.[e];if(!n||n.availableAt>this.time)return!1;this.carrying=t.world,this.runClean=!0,this.carriedEgg={world:t.world,slot:e,rarity:n.rarity,mutation:n.mutation},n.availableAt=1/0;let s=this.guardians[t.world];return s.state="chase",s.grace=1.1,this.emit("grab",`Ovo ${Mt[n.rarity].name.toLowerCase()}! Corra para o curral!`,t.world),!0}saleValue(e,t="common",n="normal"){return Math.round(Le[e].value*Mt[$a(t)].mult*kn[qa(n)].mult*(1+this.save.upgrades.charm*.1+(this.power()==="value"?.1:0)))}equip(e){let t=Gt[e];return!t||!this.save.accessories.includes(e)?!1:(this.save.equipped[t.slot]===e?delete this.save.equipped[t.slot]:this.save.equipped[t.slot]=e,this.emit("upgrade",this.save.equipped[t.slot]===e?`${t.name} equipado!`:`${t.name} guardado.`),!0)}useJuice(){return this.mode!=="run"||this.save.supplies.juice<1||this.energy>=this.maxEnergy()-1?!1:(this.save.supplies.juice--,this.energy=this.maxEnergy(),this.emit("juice","Suco usado! Seu f\xF4lego est\xE1 completo."),!0)}sell(e){if(!this.inBase())return!1;let t=this.save.creatures.findIndex(r=>r.id===e);if(t<0)return!1;let n=this.saleValue(this.save.creatures[t].world,this.save.creatures[t].rarity,this.save.creatures[t].mutation),[s]=this.save.creatures.splice(t,1);return this.save.incomePending+=s.incomeProgress||0,this.collectIncome(),this.save.companionId===s.uid&&(this.save.companionId=null),this.save.coins+=n,this.emit("sold",`${Le[s.world].creature}: +${n} integros!`,s.world),!0}buy(e){if(ii[e]){let n=ii[e];if(!this.inBase())return!1;if(!this.save.decorations.includes(e)){if(this.save.coins<n.price)return!1;this.save.coins-=n.price,this.save.decorations.push(e)}return this.save.decoration=e,this.emit("upgrade","Curral decorado: "+n.name),!0}if(Gt[e]){let n=Gt[e];return!this.inBase()||this.save.accessories.includes(e)||this.save.coins<n.price?!1:(this.save.coins-=n.price,this.save.accessories.push(e),this.equip(e),!0)}if(Ei[e]){let n=Ei[e];return!this.inBase()||this.save.coins<n.price||this.save.supplies[e]>=n.max?!1:(this.save.coins-=n.price,this.save.supplies[e]++,this.emit("upgrade",`${n.name} comprado!`),!0)}let t=ni[e];return!t||!this.inBase()||this.save.upgrades[e]>=t.max||this.save.coins<this.price(e)?!1:(this.save.coins-=this.price(e),this.save.upgrades[e]++,this.energy=this.maxEnergy(),this.emit("upgrade",`${t.name}: melhoria comprada!`),!0)}catchEgg(e){if(this.runClean=!1,this.save.supplies.shield>0){this.save.supplies.shield--,this.guardians[e].grace=3,this.energy=this.maxEnergy(),this.emit("shield","Escudo ativado! Voc\xEA tem 3 segundos para abrir dist\xE2ncia.",e);return}this.nestEggs[e][this.carriedEgg.slot].availableAt=this.time+5,this.carrying=null,this.carriedEgg=null,this.guardians[e].state="return",this.save.caught++,Object.assign(this.player,{x:0,z:15,y:0,vy:0}),this.energy=this.maxEnergy(),this.emit("caught","O dono recuperou o ovo! Treine ou melhore seus t\xEAnis e tente de novo.",e)}collide(e,t=.35,n=!1){for(let s of Xa){if(!n&&e.y>s.h)continue;let r=e.x-s.x,o=e.z-s.z,c=Math.hypot(r,o),l=t+s.r;c<l&&(e.x=s.x+(c?r/c:1)*l,e.z=s.z+(c?o/c:0)*l,!n&&this.hitCooldown<=0&&(this.runClean=!1,this.emit("obstacle","Pule ou contorne os obst\xE1culos!"),this.hitCooldown=2))}}moveGuardian(e,t,n,s){let r=t.x-e.x,o=t.z-e.z,c=Math.hypot(r,o);if(c<.12)return;r/=c,o/=c;for(let a of Xa){let h=e.x-a.x,u=e.z-a.z,f=Math.hypot(h,u);f<a.r+1.5&&f>.01&&(r+=h/f*(a.r+1.5-f)*1.2,o+=u/f*(a.r+1.5-f)*1.2)}let l=Math.hypot(r,o)||1;e.x+=r/l*Math.min(n*s,c),e.z+=o/l*Math.min(n*s,c),this.collide(e,.43,!0)}update(e,t={}){e=un(e,0,.05),this.time+=e,this.refreshDay(),this.hazardCooldown=Math.max(0,this.hazardCooldown-e);for(let l=0;l<this.nestEggs.length;l++)for(let a=0;a<3;a++){let h=this.nestEggs[l][a];h.availableAt<=this.time&&h.refreshAt<=this.time&&(this.nestEggs[l][a]=this.rollEgg(l,a))}this.updateIncome(e),this.captureNests(),this.hitCooldown-=e;for(let l of this.save.eggs)l.remaining-=e;let n=this.save.eggs.filter(l=>l.remaining<=0);this.save.eggs=this.save.eggs.filter(l=>l.remaining>0);for(let l of n){let a={id:l.id,uid:"pet-"+Date.now().toString(36)+"-"+this.random().toString(36).slice(2,10),world:l.world,rarity:l.rarity,mutation:l.mutation||"normal"};this.save.creatures.push(a),l.rarity!=="common"&&this.save.rareHatched++,l.rarity==="secret"&&this.save.secretHatched++;let h=a.world+":"+a.rarity+":"+a.mutation;this.save.album.includes(h)||this.save.album.push(h),this.save.seen[l.world]=!0,this.emit("hatch",`${Le[l.world].creature} nasceu! Vale ${this.saleValue(l.world,l.rarity,l.mutation)} integros (${Mt[l.rarity].name}).`,l.world)}if(this.mode==="train"){this.moving=1,this.sprinting=!1,this.save.trainXP+=e*(1+this.save.upgrades.coach*.25),this.energy=Math.min(this.maxEnergy(),this.energy+e*20),this.save.trainXP>=this.trainTarget()&&(this.save.trainXP-=this.trainTarget(),this.save.training++,this.emit("level",`Treino n\xEDvel ${this.save.training}! Velocidade: ${this.speed().toFixed(2).replace(".",",")}.`),this.save.training>=ti&&(this.save.trainXP=0,this.mode="run",this.player.z=16.2));return}let s=t.x||0,r=t.z||0,o=Math.hypot(s,r);o>1&&(s/=o,r/=o),this.moving=Math.min(1,o),this.sprinting=!!t.sprint&&this.energy>1&&this.moving>0,this.energy=un(this.energy+e*(this.sprinting?-32:18+this.save.upgrades.hydration*6+(this.power()==="energy"?8:0)),0,this.maxEnergy());let c=this.raceMode?22*(this.time<(this.pushUntil||0)?.35:1):this.speed()*(this.time<this.slowUntil?.65:1)*(this.carrying===null?1:.92+this.save.upgrades.gloves*.04)*(this.sprinting?1.55+this.save.upgrades.turbo*.1:1);if(this.player.x=un(this.player.x+s*c*e,-9,9),this.player.z=un(this.player.z+r*c*e,-wt*Le.length+.8,25),this.raceMode&&this.pushVelocity&&this.time<this.pushUntil){this.player.x=un(this.player.x+this.pushVelocity.x*e,-9,9),this.player.z=un(this.player.z+this.pushVelocity.z*e,-wt*Le.length+.8,25);let l=Math.exp(-4*e);this.pushVelocity.x*=l,this.pushVelocity.z*=l}else this.pushVelocity=null;(this.player.vy||this.player.y)&&(this.player.vy-=(this.zone()===6?13:22)*e,this.player.y+=this.player.vy*e,this.player.y<0&&(this.player.y=0,this.player.vy=0)),this.collide(this.player),this.save.visited[this.zone()]=!0,this.updateHazard();for(let l=0;l<Le.length;l++){let a=this.guardians[l],h={x:bn[l].x,z:bn[l].z-2.5};if(this.carrying===l){if(a.grace=Math.max(0,a.grace-e),this.inBase())a.state="waiting",this.moveGuardian(a,{x:un(this.player.x,-4,4),z:1.5},us(l),e);else if(a.state="chase",a.grace||this.moveGuardian(a,this.guardianTarget(l,t),us(l)*(this.guardianBurst(l)?1.18:1),e),!a.grace&&dn(a,this.player)<.94&&this.player.y<.65){this.catchEgg(l);break}}else a.state!=="idle"&&(this.moveGuardian(a,h,12,e),dn(a,h)<.15&&(a.state="idle"))}}random(){return this.save.rng=Math.imul(this.save.rng,1664525)+1013904223>>>0,this.save.rng/4294967296}rollEgg(e,t){let n=this.random(),s=this.random(),r=e===0&&t===0||n<.46?"common":n<.75?"rare":n<.92||e<6?"epic":n<.988?"legendary":"secret";return{slot:t,rarity:r,mutation:s<.72?"normal":s<.91?"gold":s<.985?"rainbow":"cosmic",availableAt:this.time,refreshAt:this.time+180+this.random()*60}}captureNests(){this.save.nestState=this.nestEggs.map(e=>e.map(t=>({rarity:t.rarity,mutation:t.mutation,cooldown:Number.isFinite(t.availableAt)?Math.max(0,t.availableAt-this.time):18,refresh:Math.max(1,t.refreshAt-this.time)})))}refreshDay(){let e=new Date().toISOString().slice(0,10);this.save.daily.day!==e&&(this.save.daily={day:e,delivered:0,claimed:!1})}companion(){return this.save.creatures.find(e=>e.uid===this.save.companionId)||null}power(){let e=this.companion();return e?lh(e.world):null}equipPet(e){return!this.inBase()||!this.save.creatures.some(t=>t.uid===e)?!1:(this.save.companionId=this.save.companionId===e?null:e,this.emit("upgrade",this.save.companionId?"Companheiro pronto! "+Za(this.companion()):"Companheiro voltou ao curral."),!0)}creatureIncomeRate(e){return Le[e.world].value*Mt[e.rarity].mult*kn[e.mutation||"normal"].mult/1200}incomeRate(){return this.save.creatures.reduce((e,t)=>e+this.creatureIncomeRate(t),0)}creditIncome(e,t){return e=Math.min(Math.floor(e),1e9-this.save.coins),e<=0?0:(this.save.coins+=e,this.save.incomeEarned+=e,this.events.push({type:"income",amount:e,uid:t?.uid,world:t?.world}),e)}collectIncome(){let e=this.creditIncome(Math.floor(this.save.incomePending+1e-9));return this.save.incomePending=Math.max(0,this.save.incomePending-e),e||!1}updateIncome(e){if(this.collectIncome(),this.save.incomePending>0&&this.save.incomePending<1&&this.save.creatures.length){let t=this.save.creatures[0];t.incomeProgress=(t.incomeProgress||0)+this.save.incomePending,this.save.incomePending=0}for(let t of this.save.creatures)t.incomeProgress=(t.incomeProgress||0)+this.creatureIncomeRate(t)*e;if(this.incomeClock+=e,!(this.incomeClock<3-1e-9)){this.incomeClock=Math.max(0,this.incomeClock-3);for(let t of this.save.creatures){let n=this.creditIncome(Math.floor(t.incomeProgress+1e-9),t);t.incomeProgress=Math.max(0,t.incomeProgress-n)}}}missionProgress(e){let t=this.save[e.key];return Math.min(e.target,Array.isArray(t)?t.filter(Boolean).length:t||0)}claimMission(e){let t=Ya.find(n=>n.id===e);return!t||this.save.claimed.includes(e)||this.missionProgress(t)<t.target?!1:(this.save.claimed.push(e),this.save.coins+=t.reward,this.emit("upgrade","Conquista: "+t.name+" \xB7 +"+t.reward+" integros"),!0)}claimDaily(){return this.refreshDay(),this.save.daily.claimed||this.save.daily.delivered<3?!1:(this.save.daily.claimed=!0,this.save.coins+=200,this.emit("upgrade","Expedi\xE7\xE3o do dia: +200 integros!"),!0)}hazard(e=this.zone()){let t=-(e*wt+19),n=(this.time+e*.63)%6;return{x:Math.sin(this.time*(e===10?1.6:.8)+e)*3.8,z:t,r:e===4?1.5:1.1,active:n>2&&n<4.6,warning:n>1.2&&n<=2,name:_c[e]}}guardianTarget(e,t){let n=this.player;return e%3===1?{x:un(n.x+(t.x||0)*2,-8,8),z:n.z+(t.z||0)*2}:e%3===2?{x:n.x+Math.sin(this.time*2+e)*1.2,z:n.z}:n}guardianBurst(e){return e>=3&&(this.time+e)%8>6.8}updateHazard(){if(this.inBase()||this.hazardCooldown>0)return;let e=this.zone(),t=this.hazard(e);t.active&&dn(this.player,t)<t.r+.3&&this.player.y<.8&&(this.hazardCooldown=3,this.runClean=!1,this.energy=Math.max(0,this.energy-12),this.slowUntil=this.time+(e===8?2:e===3?1.6:1),[1,7,11,12].includes(e)&&(this.player.x=un(this.player.x+(e%2?1:-1)*2,-8,8)),e===4&&(this.energy=Math.max(0,this.energy-12)),this.emit("obstacle",t.name+"! Pule ou desvie da \xE1rea marcada."))}snapshot(){return this.captureNests(),{incomeRate:this.incomeRate(),hazard:this.hazard(),player:{...this.player},zone:this.zone(),speed:this.speed(),energy:this.energy,capacity:this.capacity(),carrying:this.carrying,carriedEgg:this.carriedEgg?{...this.carriedEgg}:null,nestEggs:this.nestEggs.map(e=>e.map(t=>({...t,available:t.availableAt<=this.time}))),mode:this.mode,time:this.time,interaction:this.interaction(),guardians:this.guardians.map((e,t)=>({...e,speed:us(t)})),availableAt:[...this.availableAt],trainingAdvice:Le.map((e,t)=>this.trainingAdvice(t)),...JSON.parse(JSON.stringify(this.save))}}};var Ks=new G;function tn(i,e,t,n,s,r){let o=2*Math.PI*s/4,c=Math.max(r-2*s,0),l=Math.PI/4;Ks.copy(e),Ks[n]=0,Ks.normalize();let a=.5*o/(o+c),h=1-Ks.angleTo(i)/l;return Math.sign(Ks[t])===1?h*a:c/(o+c)+a+a*(1-h)}var Ja=class i extends _n{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let c=this.toNonIndexed();this.index=null,this.attributes.position=c.attributes.position,this.attributes.normal=c.attributes.normal,this.attributes.uv=c.attributes.uv;let l=new G,a=new G,h=new G(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,x=u.length/6,y=new G,m=.5/o;for(let d=0,R=0;d<u.length;d+=3,R+=2)switch(l.fromArray(u,d),a.copy(l),a.x-=Math.sign(a.x)*m,a.y-=Math.sign(a.y)*m,a.z-=Math.sign(a.z)*m,a.normalize(),u[d+0]=h.x*Math.sign(l.x)+a.x*r,u[d+1]=h.y*Math.sign(l.y)+a.y*r,u[d+2]=h.z*Math.sign(l.z)+a.z*r,f[d+0]=a.x,f[d+1]=a.y,f[d+2]=a.z,Math.floor(d/x)){case 0:y.set(1,0,0),p[R+0]=tn(y,a,"z","y",r,n),p[R+1]=1-tn(y,a,"y","z",r,t);break;case 1:y.set(-1,0,0),p[R+0]=1-tn(y,a,"z","y",r,n),p[R+1]=1-tn(y,a,"y","z",r,t);break;case 2:y.set(0,1,0),p[R+0]=1-tn(y,a,"x","z",r,e),p[R+1]=tn(y,a,"z","x",r,n);break;case 3:y.set(0,-1,0),p[R+0]=1-tn(y,a,"x","z",r,e),p[R+1]=1-tn(y,a,"z","x",r,n);break;case 4:y.set(0,0,1),p[R+0]=1-tn(y,a,"x","y",r,e),p[R+1]=1-tn(y,a,"y","x",r,t);break;case 5:y.set(0,0,-1),p[R+0]=tn(y,a,"x","y",r,e),p[R+1]=1-tn(y,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function hh(i){let e=new Map,t=new Map,n=[],s=(D,I=!1,E=!1)=>{let A=D+":"+I+":"+E;return e.has(A)||e.set(A,new Bs({color:D,roughness:.72,flatShading:E,emissive:I?D:0,emissiveIntensity:I?.35:0})),e.get(A)},r=(D,I)=>(t.has(D)||t.set(D,I()),t.get(D)),o=(D,I=0,E=0,A=0)=>{let ae=new Pn;return ae.position.set(I,E,A),D.add(ae),ae},c=(D,I,E,A=0,ae=0,H=0,B=!1)=>{let _=new Ft(I,s(E,B,I.userData.faceted===!0));return _.position.set(A,ae,H),_.receiveShadow=!0,D.add(_),_},l=(D,I,E,A,ae,H=0,B=0,_=0)=>c(D,r(`b${I},${E},${A}`,()=>new _n(I,E,A)),ae,H,B,_),a=(D,I,E,A,ae,H=0,B=0,_=0)=>{let g=Math.min(.09,Math.min(I,E,A)*.22);return c(D,r(`rounded:${I},${E},${A}`,()=>new Ja(I,E,A,2,g)),ae,H,B,_)},h=(D,I,E,A=0,ae=0,H=0,B=1,_=1,g=1)=>{let F=c(D,r("s"+I,()=>new Qi(I,I<.12?12:I<.6?24:20,I<.12?8:I<.6?16:12)),E,A,ae,H);return F.scale.set(B,_,g),F},u=(D,I,E,A,ae,H=0,B=0,_=0,g=20)=>{let F=g>=7?Math.max(16,g):g;return c(D,r(`c${I},${E},${A},${F}`,()=>{let k=new Fs(I,E,A,F);return k.userData.faceted=g<=6,k}),ae,H,B,_)},f=(D,I,E,A,ae=0,H=0,B=0)=>c(D,r(`t${I},${E}`,()=>new es(I,E,8,I<.2?20:36)),A,ae,H,B),p=(D,I,E,A,ae)=>{let H=new G(...I),B=new G(...E).sub(H),_=u(D,A,A,B.length(),ae,...H.addScaledVector(B,.5).toArray());return _.quaternion.setFromUnitVectors(new G(0,1,0),B.normalize()),_},x=(D,I,E,A,ae,H=3,B="#233d46",_="#fff6d9")=>{let g=document.createElement("canvas");g.width=512,g.height=128;let F=g.getContext("2d");F.fillStyle=_,F.beginPath(),F.roundRect(4,4,504,120,22),F.fill(),F.fillStyle=B,F.font="bold 40px Arial",F.textAlign="center",F.textBaseline="middle",F.fillText(I,256,66,480);let k=new Ki(g);k.colorSpace=St;let j=new Zi(new mi({map:k,depthWrite:!1}));return j.position.set(E,A,ae),j.scale.set(H,H/4,1),D.add(j),n.push(j),j};function y(D){let I=document.createElement("canvas");I.width=640,I.height=288;let E=new Ki(I);E.colorSpace=St;let A=new Zi(new mi({map:E,depthWrite:!1}));return A.position.set(0,2.4,0),A.scale.set(4.2,1.89,1),D.add(A),{canvas:I,texture:E,sprite:A}}function m(D,I){let E=Y[D].plaque,A=E.canvas.getContext("2d");A.clearRect(0,0,640,288),A.fillStyle=I.ready?"#daf3cf":"#fff1c8",A.beginPath(),A.roundRect(5,5,630,278,28),A.fill(),A.strokeStyle=I.ready?"#4b8c55":"#b48135",A.lineWidth=8,A.stroke(),A.textAlign="center",A.textBaseline="middle",A.fillStyle="#345047",A.font="bold 30px Arial",A.fillText("TREINO RECOMENDADO",320,52),A.font="bold 54px Arial",A.fillText("N\xCDVEL "+I.level,320,115),A.font="bold 34px Arial",A.fillText(I.ready?"Voc\xEA j\xE1 tem esse treino!":"Faltam "+I.remaining+" n\xEDveis",320,178),A.fillStyle="#876323",A.font="bold 24px Arial",A.fillText("3 OVOS \xB7 RARIDADES E MUTA\xC7\xD5ES",320,240),E.texture.needsUpdate=!0,E.sprite.userData.advice={...I}}function d(D,I,E=1,A="common"){let ae=o(D);ae.scale.setScalar(E),c(ae,r("egg-shell",()=>{let H=Array.from({length:21},(B,_)=>{let g=Math.PI*(1-_/20),F=_===0||_===20?0:.42*Math.sin(g)*(1-.16*Math.cos(g));return new Fe(F,.567*Math.cos(g))});return new ji(H,28)}),Mt[A].color,0,.5,0);for(let[H,B,_]of[[.25,.63,.28],[-.19,.34,.32],[.05,.9,.18],[.3,.33,-.2]])h(ae,.075,I,H,B,_,1,1.2,.4);if(A!=="common"){f(ae,.44,.025,Mt[A].color,0,.06,0).rotation.x=Math.PI/2;for(let H=0;H<Mt[A].mult-1;H++){let B=H*2.4;u(ae,0,.06,.15,16773296,Math.sin(B)*.47,.75+H%2*.2,Math.cos(B)*.47,4)}}return ae}function R(D,I,E,A=1,ae="common"){let H=o(D);H.scale.setScalar(A);let B=[],_=2505291,g=16771258,F=-.35,k=.92;if(I==="chick"){h(H,.43,E,0,.51,0,1,1.1,.9),h(H,.31,E,0,1,-.07),u(H,0,.13,.24,15697476,0,.94,-.43,4).rotation.x=-Math.PI/2;for(let T of[-.16,.16])a(H,.18,.09,.3,15697476,T,.06,-.06);for(let T of[-.42,.42]){let q=h(H,.22,E,T,.61,0,.45,1.15,.9);B.push(q)}for(let T=0;T<3;T++)h(H,.095,15231840,(T-1)*.09,1.28,-.05);k=1.06,F=-.35}else if(I==="fox"||I==="cat"){h(H,.36,E,0,.47,.06,1,1.1,1.35),h(H,.34,E,0,.95,-.18,1.08,.92,.95),h(H,.19,g,0,.83,-.43,1,.65,.7),h(H,.065,_,0,.9,-.55);for(let q of[-.24,.24]){let Z=u(H,0,.16,.4,E,q,1.31,-.16,4);Z.rotation.z=q<0?.18:-.18,h(H,.07,16036809,q,1.35,-.28,1,1.8,.3)}for(let q of[-.21,.21]){let Z=a(H,.16,.28,.23,E,q,.16,-.12);B.push(Z)}let T=o(H,0,.4,.47);if(h(T,.2,E,0,.22,.24,1,1.2,2.1),h(T,.14,g,0,.32,.52,1,1,1.3),T.rotation.x=-.3,B.push(T),k=1,F=-.48,I==="cat"){f(H,.2,.025,16176247,0,1.7,-.16).rotation.x=Math.PI/2;for(let q of[-.44,.44]){let Z=h(H,.27,9018337,q,.72,.1,.45,.6,1.5);Z.rotation.z=q,B.push(Z)}}}else if(I==="deer"){h(H,.38,E,0,.55,.06,.8,1,1.4),h(H,.26,12574109,0,1.06,-.23,.9,1.1,1),h(H,.14,g,0,.99,-.48),h(H,.045,_,0,1.04,-.6);for(let T of[-.22,.22])h(H,.16,E,T,1.18,-.24,1.5,.5,.65),p(H,[T*.6,1.25,-.2],[T,1.67,-.2],.038,12358234),p(H,[T*.85,1.47,-.2],[T*1.7,1.56,-.2],.026,12358234);for(let T of[-.19,.19])for(let q of[-.24,.29]){let Z=u(H,.055,.055,.37,7506774,T,.2,q);B.push(Z)}for(let T of[-.16,.16])h(H,.048,g,T,.65,-.29);k=1.12,F=-.46}else if(I==="penguin"){h(H,.44,3299975,0,.61,0,1,1.4,.85),h(H,.32,16119271,0,.55,-.19,1,1.5,.6),h(H,.3,3299975,0,1.1,-.06),u(H,0,.12,.22,15908181,0,1,-.4,4).rotation.x=-Math.PI/2;for(let T of[-.42,.42]){let q=h(H,.21,E,T,.65,0,.45,1.8,.8);q.rotation.z=T*.7,B.push(q)}for(let T of[-.2,.2])h(H,.16,15908181,T,.07,-.13,1,.35,1.4);f(H,.32,.065,E,0,.89,-.04).rotation.x=Math.PI/2,k=1.13,F=-.34}else if(I==="dragon"){h(H,.42,E,0,.52,.07,1,1.1,1.2),h(H,.31,E,0,1.06,-.23),h(H,.21,15972966,0,.94,-.48,1,.7,1);for(let T of[-.2,.2])u(H,0,.075,.27,g,T,1.41,-.1,5);for(let T of[-.56,.56]){let q=o(H,T,.92,.12);u(q,0,.35,.62,10967922,0,0,0,3).rotation.z=T>0?-1.1:1.1,B.push(q)}for(let T=0;T<4;T++)u(H,0,.11,.18,16438365,0,.93-T*.13,.24+T*.18,4);for(let T of[-.24,.24]){let q=a(H,.19,.25,.31,E,T,.13,-.1);B.push(q)}h(H,.18,E,0,.28,.6,1,.7,2.1),k=1.13,F=-.5}else if(I==="turtle"){h(H,.52,6980258,0,.49,.1,1,.7,1.2);for(let T=0;T<5;T++){let q=T*1.256;u(H,0,.18,.42,E,Math.sin(q)*.3,.8,Math.cos(q)*.34+.1,5)}h(H,.24,9029305,0,.4,-.56);for(let T of[-.42,.42])for(let q of[-.23,.39]){let Z=h(H,.15,9029305,T,.12,q,1,.55,1.25);B.push(Z)}k=.47,F=-.77}else if(I==="axolotl"){h(H,.36,E,0,.38,.12,1,.7,1.6),h(H,.34,16765666,0,.7,-.24,1.25,.8,1);for(let T of[-.38,.38])for(let q=0;q<3;q++)p(H,[T*.75,.7,-.2],[T*1.5,.55+q*.18,-.17],.05,E),h(H,.08,E,T*1.5,.55+q*.18,-.17);for(let T of[-.3,.3])for(let q of[-.1,.4]){let Z=h(H,.14,E,T,.13,q,1,.5,1.3);B.push(Z)}h(H,.18,E,0,.32,.67,.35,1,1.8),k=.73,F=-.54}else if(I==="rabbit"){h(H,.37,E,0,.44,.04,1,1.2,1),h(H,.32,16770256,0,.99,-.13);for(let T of[-.16,.16])h(H,.16,E,T,1.47,-.08,.7,2.1,.7),h(H,.08,16161978,T,1.5,-.17,.6,2.2,.4);for(let T of[-.24,.24]){let q=h(H,.2,E,T,.12,-.1,.8,.6,1.5);B.push(q)}h(H,.18,16775146,0,.45,.44),h(H,.06,14582162,0,.91,-.43),k=1.04,F=-.41}else if(I==="panda"){h(H,.46,15922141,0,.52,0,1,1.12,1),h(H,.36,15922141,0,1.07,-.12,1.12,.96,1);for(let T of[-.31,.31])h(H,.15,2575947,T,1.31,-.1);for(let T of[-.15,.15])h(H,.12,2575947,T,1.08,-.42,1,1.2,.3);for(let T of[-.37,.37]){let q=h(H,.19,2575947,T,.58,0,.75,1.5,.8);B.push(q)}for(let T of[-.23,.23])h(H,.18,2575947,T,.13,-.05);f(H,.33,.065,E,0,.81,-.02).rotation.x=Math.PI/2,h(H,.06,2575947,0,.96,-.47),k=1.1,F=-.46}else if(I==="robot"){a(H,.66,.6,.46,8366791,0,.65,0),a(H,.66,.46,.48,E,0,1.22,-.06),a(H,.5,.25,.03,2704991,0,1.25,-.31),a(H,.28,.23,.04,E,0,.69,-.25),p(H,[0,1.45,0],[0,1.68,0],.035,8366791),h(H,.09,10876879,0,1.7,0);for(let T of[-.45,.45]){let q=a(H,.17,.46,.21,E,T,.64,0);B.push(q)}for(let T of[-.2,.2]){let q=a(H,.2,.35,.28,4217725,T,.19,0);B.push(q)}k=1.25,F=-.33}else if(I==="griffin"){h(H,.4,E,0,.52,.09,1,1.1,1.2),h(H,.32,16774357,0,1.08,-.17),u(H,0,.12,.3,16038756,0,1,-.54,4).rotation.x=-Math.PI/2;for(let T of[-.58,.58]){let q=o(H,T,.85,.1);for(let Z=0;Z<3;Z++)h(q,.22,Z%2?E:16774357,Math.sign(T)*Z*.13,Z*.13,Z*.12,.5,1.6,1);B.push(q)}for(let T of[-.23,.23]){let q=a(H,.2,.22,.3,16038756,T,.12,-.12);B.push(q)}u(H,0,.2,.3,16038756,0,1.46,-.1,5),k=1.15,F=-.45}else if(I==="phoenix"){h(H,.4,5269694,0,.58,.08,.9,1.2,1.1),h(H,.31,9498623,0,1.12,-.16),u(H,0,.12,.29,16766062,0,1.02,-.51,5).rotation.x=-Math.PI/2;for(let T of[-1,1]){let q=o(H,T*.35,.86,.05);for(let Z=0;Z<5;Z++){let ge=h(q,.19,Z%2?10810623:9731322,T*(.12+Z*.15),.1+Z*.12,.06+Z*.04,.45,2.2,.7);ge.rotation.z=-T*.55}B.push(q),a(H,.2,.2,.3,16766062,T*.22,.12,-.16)}for(let T=-1;T<=1;T++){let q=h(H,.14,11769343,T*.2,.4,.55+Math.abs(T)*.09,.6,1,2.2);q.rotation.z=T*.25}for(let T=-1;T<=1;T++)u(H,0,.075,.32,16768885,T*.12,1.5,-.07,4);k=1.17,F=-.44}ae!=="common"&&(f(H,.55,.035,Mt[ae].color,0,.055,0).rotation.x=Math.PI/2);let j=I==="turtle"?.1:.12;for(let T of[-j,j])h(H,.065,16777215,T,k,F),h(H,.035,_,T,k,F-.055),h(H,.012,16777215,T-.01,k+.015,F-.084);return H.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),{g:H,limbs:B,kind:I}}function C(D,I){let E=o(D);if(I==="crown"){u(E,.34,.34,.16,15910483,0,.1,0,10);for(let B=0;B<7;B++){let _=B*Math.PI*2/7;u(E,0,.09,.28,16767336,Math.sin(_)*.29,.3,Math.cos(_)*.29,4),h(E,.055,B%2?7724525:15759772,Math.sin(_)*.33,.12,Math.cos(_)*.33)}}if(I==="halo"){f(E,.4,.06,16768889,0,.16,0).rotation.x=Math.PI/2;for(let B of[-.5,.5])u(E,0,.06,.17,16774330,B,.2,0,4)}if(I==="headphones"){f(E,.33,.045,3560884,0,0,0);for(let B of[-.32,.32])a(E,.12,.3,.23,6480616,B,-.03,0),a(E,.13,.2,.15,8483822,B*1.15,-.03,0)}if(I==="goggles"){for(let B of[-.15,.15])f(E,.125,.035,16764004,B,0,0),h(E,.1,6807528,B,0,-.01,1,1,.25);a(E,.08,.04,.07,16764004,0,0,0)}if(I==="wings")for(let B of[-1,1])for(let _=0;_<4;_++){let g=h(E,.19,_%2?10149870:13214971,B*(.26+_*.17),.25+_*.09,.08+_*.05,.7,2.3,.4);g.rotation.z=-B*(.4+_*.08)}if(I==="cape"){let B=u(E,.26,.6,1,14636152,0,-.2,.1,4);B.scale.z=.19,a(E,.5,.08,.17,16766832,0,.35,0)}let A=16765803,ae=9106416,H=11836159;if(I==="pilotCap"){h(E,.36,15173198,0,.08,0,1,.8,1),a(E,.14,.055,.64,16772558,0,.34,-.03);for(let B of[-.34,.34])h(E,.13,4150123,B,-.04,0,.6,1.3,1);a(E,.48,.1,.13,9297899,0,.08,-.32)}if(I==="safariHat"){u(E,.55,.55,.065,14269302,0,0,0,24),u(E,.28,.37,.3,13148764,0,.18,0,20),u(E,.36,.36,.07,6980950,0,.08,0,20);let B=h(E,.12,8574083,.29,.37,0,.6,2,.4);B.rotation.z=-.4}if(I==="iceTiara"){f(E,.34,.045,14215663,0,.06,0).rotation.x=Math.PI/2;for(let B=-2;B<=2;B++)u(E,0,.085,.3+(2-Math.abs(B))*.09,B%2?ae:12177151,B*.13,.23,-.22,5)}if(I==="stormHelm"){h(E,.36,6706846,0,.07,0,1,.8,1),a(E,.5,.1,.12,A,0,.03,-.31);for(let B of[-1,1])p(E,[B*.25,.15,0],[B*.48,.39,0],.045,A),p(E,[B*.48,.39,0],[B*.32,.39,0],.045,A),p(E,[B*.32,.39,0],[B*.52,.66,0],.045,A)}if(I==="solarCrown"){u(E,.34,.34,.15,A,0,.06,0,16),f(E,.42,.055,A,0,.46,.02),h(E,.21,16758363,0,.46,.02,1,1,.35);for(let B=0;B<10;B++){let _=B*Math.PI/5;p(E,[Math.sin(_)*.43,.46+Math.cos(_)*.43,.02],[Math.sin(_)*.58,.46+Math.cos(_)*.58,.02],.035,A)}}if(I==="starGlasses"){for(let B of[-.16,.16]){let _=u(E,0,.18,.055,A,B,0,0,5);_.rotation.x=Math.PI/2,h(E,.09,15635142,B,0,-.04,1,1,.25)}a(E,.12,.035,.06,A,0,0,0)}if(I==="cyberVisor"){a(E,.68,.25,.12,3883368,0,0,0),a(E,.57,.15,.045,ae,0,0,-.08);for(let B=-2;B<=2;B++)a(E,.035,.11,.02,7513324,B*.095,0,-.11)}if(I==="butterflyMask"){for(let B of[-1,1]){let _=h(E,.19,B<0?ae:H,B*.22,.07,0,1.2,1,.25);_.rotation.z=-B*.35,h(E,.13,15507164,B*.2,-.12,0,1,.8,.25),h(E,.075,3295333,B*.14,0,-.06,1,1,.25)}a(E,.08,.12,.06,A,0,0,-.02)}if(I==="royalMask"){a(E,.65,.24,.1,A,0,0,0);for(let B of[-.16,.16])h(E,.09,5125205,B,0,-.07,1,.7,.3);for(let B=-2;B<=2;B++)u(E,0,.055,.17,B%2?15235234:12296959,B*.13,.22,0,4)}if(I==="explorerPack"){a(E,.57,.62,.3,5086332,0,.02,.12),a(E,.38,.26,.12,9030039,0,-.08,.3),u(E,.12,.12,.65,14926220,0,.4,.1).rotation.z=Math.PI/2;for(let B of[-.19,.19])a(E,.06,.65,.03,14598273,B,.02,-.05)}if(I==="beeWings"){for(let B of[-1,1])for(let _=0;_<2;_++){let g=h(E,.25,13759985,B*(.32+_*.16),.08+_*.3,.03,.7,1.6,.22);g.rotation.z=-B*.65}h(E,.17,A,0,0,.12,.6,1.5,1)}if(I==="jetpack"){a(E,.44,.5,.2,6651809,0,.02,.08);for(let B of[-.28,.28])u(E,.13,.18,.61,12964575,B,0,.15,16),u(E,.18,.11,.12,A,B,-.34,.15,16),u(E,0,.13,.34,ae,B,-.55,.15,7).rotation.z=Math.PI}if(I==="phoenixWings"||I==="infinityWings"){let B=I==="infinityWings";for(let _ of[-1,1])for(let g=0;g<5;g++){let F=h(E,.16,B?g%2?ae:H:g%2?A:16089958,_*(.25+g*.15),.12+g*.12,.05+g*.025,.65,2.5,.35);F.rotation.z=-_*(.3+g*.13)}if(B){f(E,.48,.028,A,0,.25,.13),f(E,.64,.025,H,0,.25,.13);for(let _ of[-1,1])h(E,.08,A,_*.72,.7,.15)}}if(I==="auroraCape"){for(let B=-2;B<=2;B++){let _=u(E,.075,.145,.9,[ae,H,8380603,8829434,14851802][B+2],B*.14,-.16,.1,4);_.scale.z=.27}a(E,.63,.09,.15,A,0,.34,0)}if(I==="cometPack"){let B=u(E,0,.27,.55,ae,0,.25,.13,6);B.rotation.z=-.5,f(E,.32,.03,A,0,.25,.13);for(let _=0;_<4;_++){let g=h(E,.1,_%2?H:12185599,.1+_*.08,-.05-_*.13,.13,1,2,.4);g.rotation.z=-.45}}return E}function b(D,I){D.wear.clear();for(let E of Object.values(I)){let A=Gt[E];if(!A)continue;let ae=C(D.wear,E);A.slot==="head"&&ae.position.set(0,E==="halo"?1.6:["headphones"].includes(E)?1.08:1.35,0),A.slot==="face"&&ae.position.set(0,1.05,-.34),A.slot==="back"&&ae.position.set(0,.6,.33)}D.hat.visible=!I.head||I.head==="headphones"}function U(D,I){if(Gt[I]){let B=o(D),_=C(B,I);return _.position.y=["cape","auroraCape","jetpack"].includes(I)?.82:.55,B}let E=o(D),A=5610951,ae=15843169,H=16773330;if(I==="boots"||I==="springs")for(let B of[-.28,.28]){a(E,.36,.22,.7,I==="boots"?A:9861582,B,.35,-.1),a(E,.33,.3,.36,I==="boots"?7915215:12821745,B,.55,.1),a(E,.38,.08,.74,H,B,.21,-.1);for(let _=0;_<3;_++)a(E,.25,.025,.04,H,B,.48,-.32+_*.09);if(I==="springs")for(let _=0;_<3;_++)f(E,.13,.025,ae,B,.06+_*.055,0).rotation.x=Math.PI/2}if((I==="energy"||I==="hydration"||I==="juice")&&(u(E,.25,.28,.8,I==="juice"?16099675:A,0,.5,0),u(E,.14,.14,.2,H,0,.99,0),u(E,.19,.19,.12,5334158,0,1.13,0),a(E,.36,.26,.055,H,0,.6,-.25),I==="juice"?h(E,.1,15898692,0,.6,-.3):a(E,.08,.19,.05,A,0,.6,-.29)),I==="pen"){a(E,1.2,.09,1,10012531,0,.06,0);for(let B of[-.52,.52])for(let _ of[-.4,0,.4])a(E,.08,.55,.08,H,B,.33,_),a(E,.06,.06,.8,H,B,.42,0);d(E,ae,.6)}if(I==="incubator"){u(E,.53,.6,.15,11569751,0,.1,0),f(E,.43,.08,ae,0,.23,0).rotation.x=Math.PI/2,d(E,15505259,.75);for(let B of[-.55,.55])p(E,[B,.1,0],[B,1.05,0],.04,A);a(E,1.2,.14,.5,15303283,0,1.1,0)}if(I==="gloves")for(let B of[-.26,.26])h(E,.23,15906415,B,.5,0,.9,1.2,.55),a(E,.32,.2,.24,A,B,.24,0),h(E,.12,15906415,B+Math.sign(B)*.2,.48,0,.75,1.3,.9);if(I==="coach"){a(E,1,.17,1.4,A,0,.12,0),a(E,.75,.04,1.1,3426142,0,.23,0);for(let B=0;B<5;B++)a(E,.7,.01,.03,11192271,0,.26,-.4+B*.2);for(let B of[-.44,.44])p(E,[B,.2,-.4],[B,1,-.5],.04,H);a(E,1,.23,.14,6600369,0,1,-.5)}if(I==="charm"){f(E,.31,.05,A,0,.95,0);let B=u(E,.3,.3,.12,ae,0,.42,0);B.rotation.x=Math.PI/2;let _=u(E,0,.17,.08,H,0,.43,-.08,5);_.rotation.x=-Math.PI/2}if(I==="turbo"){u(E,.18,.23,.8,15777377,0,.7,0),u(E,0,.18,.32,14579833,0,1.26,0);for(let B of[-.25,.25])a(E,.18,.35,.2,A,B,.43,0);u(E,.15,0,.35,15569252,0,.14,0),h(E,.1,A,0,.86,-.18)}if(I==="shield"){let B=h(E,.48,A,0,.67,0,1,1.25,.22);f(E,.42,.045,H,0,.67,-.04).scale.y=1.2,a(E,.08,.43,.07,ae,0,.67,-.13),a(E,.3,.08,.07,ae,0,.67,-.13)}return E}function P(D){let I=o(D),E=o(I,0,.62,0),A=[],ae=[];a(E,.62,.67,.38,2469802,0,.35,0),a(E,.4,.45,.13,16034132,0,.38,.27),h(E,.28,15777163,0,1.01,-.02,.95,1.08,.9);let H=o(E);a(H,.56,.18,.46,7035595,0,1.25,0),a(H,.53,.055,.24,7035595,0,1.2,-.31);for(let g of[-.1,.1])h(E,.029,2570576,g,1.05,-.27),h(E,.009,16777215,g-.008,1.06,-.295);for(let g of[-.17,.17]){let F=o(E,g,0,0);a(F,.23,.5,.23,3361650,0,-.25,0),a(F,.25,.13,.39,16771499,0,-.55,-.055),A.push(F)}for(let g of[-.41,.41]){let F=o(E,g,.68,0);a(F,.18,.35,.2,2469802,0,-.14,0),h(F,.105,15777163,0,-.36,0),ae.push(F)}let B=o(I,0,1.04,-.57);I.traverse(g=>{g.isMesh&&(g.castShadow=!0)});let _=o(E);return{g:I,hips:E,legs:A,arms:ae,carry:B,wear:_,hat:H}}function N(D,I,E,A=0,ae=1){let H=o(D,I,0,E);if(H.scale.setScalar(ae),u(H,.15,.22,1.5,9727820,0,.75,0,7),A===3)for(let B=0;B<3;B++)u(H,0,1.05-B*.21,1.4,[11654875,15070957,16252152][B],0,1.65+B*.55,0,7);else h(H,1.03,A===2?6454466:4100700,0,2,0,1,1,.9),h(H,.73,A===2?8958608:7386716,.51,2.35,.1),h(H,.65,A===2?10266329:7780711,-.5,2.05,-.1)}function V(D,I,E,A,ae=2){let H=o(D,I,0,E);u(H,0,.53,ae,A,0,ae/2,0,5);let B=u(H,0,.29,ae*.7,A,.43,ae*.33,.2,5);return B.rotation.z=-.35,H}let S=o(i),M=o(S),O=[],Y=[],ne=[],te=[];l(M,28,.7,30,7648127,0,-.43,12),l(M,10,.04,30,14994592,0,-.025,12),l(M,28,.3,1,5867873,0,-.22,27);let ie=o(M,fn.x,0,fn.z),se=l(ie,7,.08,7.8,9750141,0,.02,0);for(let D of[-3.5,3.5])for(let I=-3.5;I<4;I+=1.4)l(ie,.13,.9,.13,16048051,D,.5,I),l(ie,.1,.13,1.45,16048051,D,.72,I+.5),l(ie,.1,.13,1.45,16048051,D,.33,I+.5);for(let D=-3.5;D<4;D+=1.4)l(ie,.13,.9,.13,16048051,D,.5,3.8),l(ie,1.4,.12,.12,16048051,D+.5,.72,3.8);for(let D of[-2.8,2.8])l(ie,.18,2.9,.18,11701600,D,1.45,2.5);let me=u(ie,0,4.5,1.2,7824561,0,3.2,2.5,4);me.rotation.y=Math.PI/4,me.scale.z=.48,x(ie,"SEU CURRAL",0,2.1,-3.7,3.7);let ee=o(ie),_e=o(ie),Se=o(M,En.x,0,En.z);l(Se,2.1,.28,3.3,3233139,0,.15,0),l(Se,1.68,.07,2.9,3358805,0,.33,0);let Pe=[];for(let D=0;D<9;D++)Pe.push(l(Se,1.6,.016,.055,7047576,0,.374,-1.3+D*.32));for(let D of[-.95,.95])p(Se,[D,.35,-1],[D,1.8,-1.2],.065,10864330),p(Se,[D,1.8,-1.2],[D,1.25,.9],.045,10864330);l(Se,1.95,.37,.28,3324338,0,1.8,-1.25),l(Se,.75,.17,.03,10808757,0,1.82,-1.42),x(Se,"ESTEIRA",0,2.8,0,3);let Ve=o(M,7,0,21);l(Ve,2.8,1.25,1.6,15052645,0,.67,0),l(Ve,3.2,.16,2,16309936,0,1.34,0);for(let D of[-1.4,1.4])l(Ve,.12,2.6,.12,5471379,D,1.5,0);l(Ve,3.4,.2,2,3781804,0,2.7,0),x(Ve,"MELHORIAS",0,3.25,0,3);for(let D of[-9.8,10.5])N(M,D,8,0,1.4),N(M,D,23,0,1.15);x(M,"BASE SEGURA",0,3.7,4,4.3),l(M,23,.06,.32,13169563,0,.025,3);for(let D=0;D<Le.length;D++){let I=Le[D],E=-(D*wt+wt/2),A=o(S);O.push(A),l(A,28,.8,wt,I.ground,0,-.46,E),l(A,9.5,.06,wt,I.path,0,-.03,E);for(let k of[-5.1,5.1])l(A,.2,.08,wt,I.color,k,.03,E);for(let k=0;k<6;k++)l(A,.1,.01,1.7,16772554,0,.013,-D*wt-k*8-3);let ae=o(A,0,0,-D*wt);for(let k of[-6,6])l(ae,.42,4.3,.48,I.color,k,2.15,0),l(ae,.7,.2,.75,16378298,k,4.35,0);l(ae,12.6,.38,.48,I.color,0,4.6,0),x(ae,`${D+1} \xB7 ${I.name.toUpperCase()}`,0,5.25,0,6.3);for(let k=0;k<10;k++){let j=k%2?1:-1,T=j*(7+k%3*2),q=-D*wt-5-k*4.1;if(D===0){N(A,T,q,0,.8+k%3*.22);for(let Z=0;Z<3;Z++)u(A,.03,.03,.55,5410126,T+.4*Z,.25,q+1),h(A,.15,16042588,T+.4*Z,.55,q+1,1,.65,1)}if(D===1&&(k%3===0?(h(A,2.4,15119733,T,-.15,q,1,.78,1.35),h(A,1.4,15845002,T-j*.8,-.18,q+1.8,1.4,.45,1.1)):(u(A,.22,.26,2.2,7055212,T,1.05,q,7),p(A,[T,.8,q],[T+j*.65,.8,q],.15,7055212),u(A,.15,.15,.85,7055212,T+j*.65,1.2,q,7))),D===2){N(A,T,q,2,1);let Z=o(A,T-j*1,0,q+1.4);u(Z,.16,.21,.85,15454134,0,.4,0),h(Z,.68,k%2?10256603:15306921,0,1,0,1,.47,1);for(let ge of[-.2,.2])h(Z,.1,16772304,ge,1.28,.18,1,.3,1)}if(D===3&&(N(A,T,q,3,1),k%2&&V(A,T-j,q+1.7,8967914,1.6),h(A,.75,16251632,T+j,.3,q-1,1,.5,1.3)),D===4){let Z=c(A,r("volcano-slope",()=>new ji([new Fe(2.2,0),new Fe(1.75,.3),new Fe(1.22,1),new Fe(.82,2.15),new Fe(.56,3.1),new Fe(.38,3.1),new Fe(.32,2.85)],24)),4669011,T,0,q);u(A,.4,.56,.12,16755799,T,3.1,q,8),l(A,1.3,.02,3.2,15891267,T-j,.01,q+1),V(A,T-j*1.5,q-1,12411489,.8)}if(D===5&&(V(A,T,q,k%2?11507182:7524321,2.4+k%3*.5),k%3===0&&c(A,r("crystalArch",()=>new es(3.1,.36,8,32,Math.PI)),5988494,0,0,q).scale.set(2.3,1.8,1)),D===6){V(A,T,q,9080267,1.2);let Z=h(A,.42,k%2?15251951:9358300,T,3+k%3,q);if(te.push({mesh:Z,y:Z.position.y,phase:k}),k%3===0){let ge=h(A,1.1,10259424,T+j*2,5.5,q);f(A,1.6,.055,15978889,T+j*2,5.5,q).rotation.x=1,te.push({mesh:ge,y:5.5,phase:k})}}if(D===7){l(A,5,.04,3,6870231,T,-.005,q);for(let ge=0;ge<3;ge++){let be=.8+ge*.5;p(A,[T+ge*.32,0,q],[T+ge*.32,be,q],.12,ge%2?16756104:16095426),p(A,[T+ge*.32,be*.6,q],[T+ge*.32+.4,be*.9,q+.1],.09,16095426)}let Z=h(A,.22,16775143,T-j*.8,.3,q+.9);k%2===0&&(f(A,1.05,.13,15905225,T,1.1,q).rotation.y=.4)}if(D===8){u(A,.09,.09,2.6,16774881,T,1.3,q);let Z=h(A,.65,k%2?15760045:8641486,T,2.6,q,1,1,.4);f(A,.42,.08,16772550,T,2.6,q-.28),k%3===0&&(l(A,1.9,1.4,1.6,12814180,T+j*1.2,.7,q+1.4),l(A,2.1,.28,1.8,16769003,T+j*1.2,1.55,q+1.4))}if(D===9){for(let Z=0;Z<3;Z++){let ge=T+(Z-1)*.5,be=3.4+k%3*.5;u(A,.1,.15,be,8047993,ge,be/2,q+Z*.25,7);for(let le=.6;le<be;le+=.7)f(A,.12,.025,14020275,ge,le,q+Z*.25).rotation.x=Math.PI/2,h(A,.35,2852191,ge+j*.22,le+.2,q+Z*.25,.9,.18,.6)}k%3===0&&(l(A,1.8,.32,1.8,6847856,T,.16,q+1.5),u(A,0,1,.6,12602709,T,1.6,q+1.5,4),l(A,.5,1.1,.5,16770725,T,.8,q+1.5))}if(D===10){let Z=2+k%3*1.5;l(A,2,Z,2,4614284,T,Z/2,q);for(let be=0;be<3;be++)l(A,.28,.28,.03,9172959,T+(be-1)*.5,Z*.65,q-1.02);let ge=o(A,T,2.1,q+1.6);f(ge,.65,.16,15910507);for(let be=0;be<8;be++){let le=be*Math.PI/4,Me=l(ge,.24,.35,.2,15910507,Math.sin(le)*.83,Math.cos(le)*.83,0);Me.rotation.z=-le}te.push({mesh:ge,y:ge.position.y,phase:k,spin:!0})}if(D===11){for(let Z=0;Z<3;Z++)h(A,1.3,16053759,T+(Z-1)*.7,.5,q,1,.45,1);if(u(A,.3,.4,3.4,16773848,T,1.7,q,10),l(A,1.1,.23,1.1,15186537,T,3.5,q),k%2===0){f(A,1.1,.1,14068991,T,4.4,q);let Z=h(A,.22,16765553,T,4.4,q);te.push({mesh:Z,y:4.4,phase:k})}}}if(D===12)for(let k of[-1,1]){let j=k*7;for(let T=0;T<4;T++){let q=E-18+T*12;u(A,.55,.75,3.8,7829416,j,1.9,q,10),f(A,.65,.1,10873588,j,3.8,q).rotation.x=Math.PI/2;let Z=h(A,.32,16768906,j,4.3,q);te.push({mesh:Z,y:4.3,phase:T+k}),p(A,[j,4.6,q],[j-k*.45,5.3,q],.075,11070975),p(A,[j-k*.45,5.3,q],[j+k*.2,5.3,q],.075,11070975),p(A,[j+k*.2,5.3,q],[j-k*.4,6.1,q],.075,11070975);for(let ge=0;ge<3;ge++)h(A,.9,8754877,j+k*(1+ge*.5),4.6,q+ge*.3,1,.5,1)}}let H=bn[D],B=o(A,H.x,0,H.z);u(B,1.55,1.7,.2,10123090,0,.1,0);for(let k=0;k<3;k++)f(B,1.45-k*.12,.065,14926459,0,.22+k*.035,0).rotation.x=Math.PI/2;let _=Array.from({length:3},(k,j)=>{let T=d(B,I.color,.8,ch(D,j));return T.position.set((j-1)*.85,.2,j===1?.42:0),T}),g=y(B);Y.push({g:B,eggs:_,plaque:g});let F=R(A,I.kind,I.color,1.65);F.g.position.set(H.x,0,H.z-2.5),x(F.g,"DONO DO OVO",0,2.9,0,2.6),ne.push(F)}for(let D of Xa){let I=O[D.world];if(D.world===0||D.world===2){let E=u(I,.4,.4,1.55,10253394,D.x,.37,D.z,8);E.rotation.z=Math.PI/2}else if(D.world===1)l(I,1.35,D.h,1.1,12292190,D.x,D.h/2,D.z);else if(D.world===3)V(I,D.x,D.z,11724011,D.h);else if(D.world===4)u(I,.35,.8,D.h,9591137,D.x,D.h/2,D.z,6);else if(D.world===8)u(I,.55,.66,D.h,16230326,D.x,D.h/2,D.z),f(I,.5,.09,16773332,D.x,D.h,D.z).rotation.x=Math.PI/2;else if(D.world===9){let E=u(I,.32,.32,1.4,7584881,D.x,.32,D.z,7);E.rotation.z=Math.PI/2}else D.world===10?l(I,1.2,D.h,1.2,14595688,D.x,D.h/2,D.z):V(I,D.x,D.z,Le[D.world].color,D.h)}let $e=o(O[Le.length-1],0,0,-wt*Le.length+1);l($e,18,.45,1,6908570,0,.2,0),x($e,Le.length+" MUNDOS \xB7 VOLTE AO CURRAL",0,3,0,7);let et=P(S),Ke=new Ft(new Qi(1.15,28,18),new pi({color:8843007,transparent:!0,opacity:.25,depthWrite:!1}));Ke.position.y=1,Ke.visible=!1,et.g.add(Ke);let oe=o(S),re=Array.from({length:24},()=>{let D=h(oe,.09,16769443);return D.visible=!1,{mesh:D,life:0,v:new G}}),Ae=0;function Oe(D,I){for(let E=0;E<16;E++){let A=re[Ae++%re.length];A.mesh.material=s(I),A.mesh.position.copy(D),A.mesh.visible=!0,A.life=.6+Math.random()*.4,A.v.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3)}}function De(D,I){for(let E of te)E.spin?E.mesh.rotation.z=I*.7+E.phase:E.mesh.position.y=E.y+Math.sin(I*1.5+E.phase)*.3;for(let E of re)E.life>0&&(E.life-=D,E.mesh.visible=E.life>0,E.v.y-=7*D,E.mesh.position.addScaledVector(E.v,D),E.mesh.scale.setScalar(Math.max(.1,E.life)));for(let E=0;E<Pe.length;E++)Pe[E].position.z=-1.4+(I*2+E*.32)%2.8}function Xe(D,I,E=0){for(let A=0;A<D.limbs.length;A++){let ae=D.limbs[A];ae.rotation.x=Math.sin(I*9+A*Math.PI)*(.13+E*.25)}D.g.position.y=Math.sin(I*(E?10:2))*(E?.07:.025)}function _t(D,I){if(!I||I==="normal")return;let E=I==="gold"?[16765788]:I==="cosmic"?[11439103,7921151]:[16751266,16769157,9300932,9423359];for(let A=0;A<E.length;A++){let ae=f(D,.5+A*.06,.026,E[A],0,.12+A*.065,0);ae.rotation.x=Math.PI/2}if(I==="cosmic")for(let A=0;A<4;A++){let ae=A*Math.PI/2;h(D,.05,16777215,Math.sin(ae)*.6,.6,Math.cos(ae)*.6)}D.userData.mutation=I}function L(D,I){se.material=s(D.color),me.material=s(D.roof),_e.clear();for(let E=0;E<I;E++)u(_e,.37,.4,.06,13745522,(E%4-1.5)*1.45,.09,Math.floor(E/4)*1.1-2.7,10);for(let E of[-3,3]){u(_e,.3,.23,.5,D.roof,E,.3,3);for(let A=0;A<3;A++)h(_e,.17,D.color===7833016?16769157:16229816,E+(A-1)*.2,.85,3)}}let at=O.map((D,I)=>{let E=o(D),A=f(E,1.15,.06,16766312,0,.1,0);A.rotation.x=Math.PI/2;let ae=o(E),H=Le[I];if(I===0||I===9)u(ae,.18,.18,2.2,H.color,0,.45,0).rotation.z=Math.PI/2;else if(I===4||I===5||I===6)u(ae,0,.6,1.3,H.color,0,.7,0,6);else if(I===3||I===7||I===8)h(ae,.8,H.color,0,.14,0,1.4,.12,1);else if(I===10)l(ae,1.4,.45,1.2,16760158,0,1.4,0);else for(let B=0;B<3;B++)f(ae,.5+B*.2,.05,H.color,0,.3+B*.3,0).rotation.x=Math.PI/2;return{node:E,body:ae,ring:A}});function Ge(D){at.forEach((I,E)=>{let A=D.hazard(E);I.node.position.set(A.x,0,A.z),I.ring.material=s(A.active?16740442:A.warning?16767842:13360333),I.body.visible=A.active||A.warning,I.body.scale.y=A.active?1:.3,I.body.rotation.y=D.time*(E+1)*.3})}return{hero:P,mutate:_t,decorate:L,updateHazards:Ge,equipAccessories:b,setTrainingPlaque:m,shieldBubble:Ke,root:S,base:M,zoneGroups:O,nests:Y,guardians:ne,player:et,penContent:ee,egg:d,shopItem:U,creature:R,animateCreature:Xe,animate:De,burst:Oe,label:x,mat:s,group:o}}var uh={compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/></svg>',coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10m-2-10h3m-3 10h3"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 3 1-2h4l1 2 2 1 2-1 3 4-2 2v3l2 2-2 4-3-1-2 1-1 3h-4l-1-3-2-1-3 1-2-4 2-2V9L2 7l3-4 2 1Z"/><circle cx="12" cy="11" r="3"/></svg>',pause:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',full:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 7 16-7-4-7 4Z"/></svg>',egg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15c0 5-4 7-8 7s-8-2-8-7S9 2 12 2s8 8 8 13Z"/><path d="m7 12 3-2 3 3 4-2"/></svg>',speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17a9 9 0 1 1 18 0M12 13l5-5M4 21h16"/><circle cx="12" cy="14" r="2"/></svg>',dumbbell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9h12M6 15h12M3 8v8m3-11v14M18 5v14m3-11v8"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 2-9 12h6l-1 8 9-12h-6Z"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 8 3v6c0 6-8 11-8 11S4 17 4 11V5Z"/><path d="m8 11 3 3 5-5"/></svg>',juice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 2 13h10l2-13ZM3 8h18M12 8l2-6h5"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 11 10-8 10 8M5 10v11h14V10M10 21v-7h4v7"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 22V3m0 0c5-5 9 5 14 0v11c-5 5-9-5-14 0"/></svg>',friends:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M2 21v-4c0-7 14-7 14 0v4M17 4a3 3 0 0 1 0 6m2 3c3 1 3 4 3 8"/></svg>',shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h18l-2-6H5Zm1 0v12h16V9M9 21v-7h6v7"/></svg>',help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 1-2 3m0 3h.01"/></svg>',jump:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V3m-7 7 7-7 7 7"/></svg>'},we=i=>document.getElementById(i),yc="integro-box-eggs-v1";function dh({onExit:i,registerAdapter:e}){let t=window.BoxStorage||localStorage,n=null,s="",r=null,o=null,c=null,l=!0;try{c=JSON.parse(t.getItem(yc)||"null")}catch{l=!1}let a=new ds(c),h=!1,u,f,p,x,y=0,m=0,d=0,R=0,C=null,b="gear",U=0,P=0,N=0,V=0,S=.52,M=.52,O=null,Y=null,ne="",te="",ie="",se=-1,me=-1,ee={},_e=null,Se=null,Pe={x:0,z:0},Ve=!1,$e=new Set,et=0,Ke=0,oe=we("eggApp"),re=we("eggCanvas"),Ae=new G,Oe=w=>w.toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:2}),De=document.createElement("div");De.className="egg-income-effects",De.setAttribute("aria-hidden","true"),we("eggStage").append(De);let Xe=[],_t=0,L=document.createElement("span");L.className="egg-wallet-gain",L.setAttribute("aria-hidden","true"),document.querySelector("#eggApp .egg-money").append(L);function at(w){if(!w.uid||r||!x||Xe.length>=24)return;let J=document.createElement("div");J.className="egg-income-float",J.innerHTML="<span>"+uh.coin+" +"+w.amount.toLocaleString("pt-BR")+"</span>",De.append(J),Xe.push({el:J,uid:w.uid,start:performance.now()})}function Ge(w){for(let J of Xe){let xe=!r&&x?.penContent.userData.actors?.find(tt=>tt.uid===J.uid),he=xe?.g||(s===J.uid?n?.g:null);if(w-J.start>1800||!he){J.el.remove(),J.done=!0;continue}let $=he.getWorldPosition(new G);$.y+=1.3,$.project(p);let ue=$.z>=-1&&$.z<=1&&Math.abs($.x)<.94&&Math.abs($.y)<.83;J.el.hidden=!ue,ue&&(J.el.style.left=($.x+1)*50+"%",J.el.style.top=(1-$.y)*50+"%")}Xe=Xe.filter(J=>!J.done),w>_t&&(L.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning"))}function D(){for(let w of Xe)w.el.remove();Xe=[],L.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning")}function I(){a.captureNests();try{t.setItem(yc,JSON.stringify(a.save)),l=!0,window.BoxEggCloud?.dirty()}catch{l=!1}}function E(w){we("eggToast").textContent=w,U=performance.now()+3400}function A(){O=null,Y=null,re.classList.remove("dragging"),$e.clear(),Pe={x:0,z:0},Ve=!1,Se=null,_e=null,we("eggStick").style.transform="translate(0px,0px)",we("eggSprint").classList.remove("held")}function ae(){P=V,M=.52,O=null,Y=null,re.classList.remove("dragging"),we("eggCamera").setAttribute("aria-pressed","false")}function H(){let w=Math.atan2(Math.sin(P-V),Math.cos(P-V));P=Math.abs(Math.abs(w)-Math.PI)<.2?V:V+Math.PI,M=.38,we("eggCamera").setAttribute("aria-pressed",String(Math.abs(P-V)>.2))}re.addEventListener("pointerdown",w=>{!h||C||O!==null||w.pointerType==="mouse"&&w.button!==0||(w.preventDefault(),O=w.pointerId,Y={x:w.clientX,y:w.clientY},re.setPointerCapture(w.pointerId),re.classList.add("dragging"),re.focus())}),re.addEventListener("pointermove",w=>{if(w.pointerId!==O||!Y||C)return;w.preventDefault();let J=w.clientX-Y.x,xe=w.clientY-Y.y;P-=J/Math.max(240,re.clientWidth)*Math.PI*2,P=Math.atan2(Math.sin(P),Math.cos(P)),M=Math.max(.2,Math.min(1.05,M+xe/Math.max(200,re.clientHeight)*1.6)),Y={x:w.clientX,y:w.clientY},we("eggCamera").setAttribute("aria-pressed","false")});let B=w=>{w.pointerId===O&&(O=null,Y=null,re.classList.remove("dragging"))};for(let w of["pointerup","pointercancel","lostpointercapture"])re.addEventListener(w,B);e&&(o=e("egg",{scene:()=>f,active:()=>h,state:()=>({x:a.player.x,y:a.player.y,z:a.player.z,yaw:et,zone:"world"}),enter:()=>{ve(),E("Sala conectada! Abra Amigos para correr, visitar e trocar.")},leave:()=>{r=null,te="",T()}}));function _(){let w=new Js({alpha:!0,antialias:!0});w.setPixelRatio(1),w.setSize(130,120),w.outputColorSpace=St,w.toneMapping=Hs,w.toneMappingExposure=1.2;let J=new Yi;J.add(new ts(16777215,11057583,2.5));let xe=new ns(16777215,2);xe.position.set(3,6,-5),J.add(xe);let he=new Ct(30,130/120,.1,30);for(let $=0;$<Le.length;$++){let ue=x.creature(J,Le[$].kind,Le[$].color);he.position.set(2,1.8,-3.5),he.lookAt(0,.78,0),w.render(J,he),ee[$]=w.domElement.toDataURL("image/png"),J.remove(ue.g)}for(let $ of[...Object.keys(ni),...Object.keys(Ei),...Object.keys(Gt)]){let ue=x.shopItem(J,$);he.position.set(1.7,1.6,-3.1),he.lookAt(0,.6,0),w.render(J,he),ee[$]=w.domElement.toDataURL("image/png"),J.remove(ue)}for(let $ of Object.keys(Mt)){let ue=x.egg(J,15505771,1,$);he.position.set(1.7,1.6,-3.1),he.lookAt(0,.6,0),w.render(J,he),ee["egg-"+$]=w.domElement.toDataURL("image/png"),J.remove(ue)}w.dispose(),w.forceContextLoss()}function g(){try{u=new Js({canvas:re,antialias:!0,alpha:!1,powerPreference:"high-performance"}),u.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<950?1.5:1.75)),u.shadowMap.enabled=!0,u.shadowMap.type=Zr,u.outputColorSpace=St,u.toneMapping=Hs,u.toneMappingExposure=1.1,f=new Yi,f.background=new Ze(Le[0].sky),f.fog=new Ls(Le[0].sky,42,108),p=new Ct(52,1,.1,130),f.add(new ts(16775917,6983578,2));let w=new ns(16774104,2.4);w.position.set(-10,20,13),w.castShadow=!0,w.shadow.mapSize.set(1024,1024),Object.assign(w.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:65}),w.shadow.normalBias=.035,w.shadow.bias=-2e-4,f.add(w),f.add(w.target),f.userData.sun=w,x=hh(f),_(),p.position.set(0,8,27),p.lookAt(0,1,10),new ResizeObserver(F).observe(we("eggStage")),F(),T(),Z(),m=performance.now(),ge(m)}catch(w){console.error("Pegue o Ovo 3D:",w),we("eggWebglError").hidden=!1}}function F(){if(!u)return;let w=re.clientWidth,J=re.clientHeight;!w||!J||(u.setSize(w,J,!1),p.aspect=w/J,p.fov=w/J>2?58:w/J<1?64:52,p.updateProjectionMatrix())}function k(){let w=Pe.x+($e.has("d")||$e.has("arrowright")?1:0)-($e.has("a")||$e.has("arrowleft")?1:0),J=Pe.z+($e.has("s")||$e.has("arrowdown")?1:0)-($e.has("w")||$e.has("arrowup")?1:0);return p.getWorldDirection(Ae),Ae.y=0,Ae.normalize(),{x:-w*Ae.z-J*Ae.x,z:w*Ae.x-J*Ae.z,sprint:Ve||$e.has("shift")}}function j(){let w=0;for(let J of a.drainEvents()){if(J.type==="income"){w+=J.amount,at(J);continue}J.type==="grab"&&(V=Math.PI,ae()),["caught","deposit","train"].includes(J.type)&&(V=0,ae()),["grab","deposit","caught","hatch","level","sold","upgrade","juice","shield"].includes(J.type)&&(T(),I()),J.type==="hatch"&&(x?.burst(new G(fn.x,1,fn.z),Le[J.world].color),a.save.seen.every(Boolean)&&(J.text+=` Voc\xEA descobriu todas as ${Le.length} criaturas!`)),J.type==="shield"&&x?.burst(new G(a.player.x,1,a.player.z),8843007),J.type==="level"&&x?.burst(new G(En.x,1.5,En.z),14283674),["train","level"].includes(J.type)&&a.mode==="train"||E(J.text)}w&&(L.textContent="+"+w.toLocaleString("pt-BR"),_t=performance.now()+1800,document.querySelector("#eggApp .egg-money").classList.add("earning"),we("eggCoins").textContent=a.save.coins.toLocaleString("pt-BR"),I())}function T(){if(!x)return;let w=r||a.save,J=JSON.stringify([w.decoration,a.capacity(),w.creatures,w.eggs]);if(J===te)return;te=J,x.decorate(ii[w.decoration]||ii.meadow,r?Math.max(3,w.creatures.length):a.capacity()),x.penContent.clear(),x.penContent.userData.actors=[];let xe=0;for(let he of w.eggs||[]){let $=x.egg(x.penContent,Le[he.world].color,.55,he.rarity);x.mutate($,he.mutation),$.position.set((xe%4-1.5)*1.45,.14,Math.floor(xe/4)*1.1-2.7),$.userData.egg=he.id,x.penContent.userData.actors.push({g:$,egg:!0,baseX:$.position.x,baseZ:$.position.z}),xe++}for(let he of w.creatures){let $=x.creature(x.penContent,Le[he.world].kind,Le[he.world].color,.52,he.rarity);x.mutate($.g,he.mutation),$.g.position.set((xe%4-1.5)*1.45,.12,Math.floor(xe/4)*1.1-2.7),x.penContent.userData.actors.push({...$,uid:he.uid,baseX:$.g.position.x,baseZ:$.g.position.z}),xe++}}function q(w,J){o?.tick(w),x.updateHazards(a);let xe=a.companion();(xe?.uid||"")!==s&&(n&&x.root.remove(n.g),s=xe?.uid||"",n=xe?x.creature(x.root,Le[xe.world].kind,Le[xe.world].color,.7,xe.rarity):null,n&&(x.mutate(n.g,xe.mutation),n.g.position.set(a.player.x+1,0,a.player.z+1))),n&&(n.g.position.lerp(new G(a.player.x+1,0,a.player.z+1.1),Math.min(1,w*5)),n.g.rotation.y=et,x.animateCreature(n,a.time,a.moving));let he=a.player,$=x.player;$.g.position.set(he.x,he.y+(a.mode==="train"?.37:0),he.z),Math.hypot(J.x,J.z)>.05&&a.mode==="run"&&(et=Math.atan2(-J.x,-J.z)),a.mode==="train"&&(et=0);let ue=Math.atan2(Math.sin(et-$.g.rotation.y),Math.cos(et-$.g.rotation.y));$.g.rotation.y+=ue*Math.min(1,w*14);let tt=a.time*(a.sprinting?17:12),st=a.moving;for(let We=0;We<2;We++)$.legs[We].rotation.x=Math.sin(tt+We*Math.PI)*.7*st,$.arms[We].rotation.x=a.carrying!==null?1.03:Math.sin(tt+(We+1)*Math.PI)*.55*st;if($.hips.position.y=.62+Math.abs(Math.sin(tt))*.035*st,$.hips.rotation.z=a.time<(a.pushUntil||0)?.16*Math.sin(a.time*35):a.carrying!==null?.025*Math.sin(tt):0,performance.now()<Ke)for(let We of $.arms)We.rotation.x=1.3;let Bt=a.carriedEgg?`${a.carrying}:${a.carriedEgg.rarity}:${a.carriedEgg.mutation}`:"none";if(se!==Bt){if($.carry.clear(),a.carrying!==null){let We=x.egg($.carry,Le[a.carrying].color,.65,a.carriedEgg.rarity);x.mutate(We,a.carriedEgg.mutation)}se=Bt}let Dt=JSON.stringify(a.save.equipped);Dt!==ne&&(x.equipAccessories($,a.save.equipped),ne=Dt),x.shieldBubble.visible=a.carrying!==null&&a.guardians[a.carrying].grace>0&&a.guardians[a.carrying].grace>1.1;let vt=a.zone();for(let We=0;We<Le.length;We++){x.zoneGroups[We].visible=Math.abs(We-vt)<=2;let pn=x.guardians[We],v=a.guardians[We],W=v.x-pn.g.position.x,Q=v.z-pn.g.position.z;Math.hypot(W,Q)>.005?pn.g.rotation.y=Math.atan2(-W,-Q):v.state==="idle"&&(pn.g.rotation.y=Math.sin(a.time*.5+We)*.35),pn.g.position.x=v.x,pn.g.position.z=v.z,x.animateCreature(pn,a.time+We,v.state==="chase"||v.state==="return"?1:0),x.nests[We].eggs.forEach((K,X)=>{let fe=a.nestEggs[We][X],Ee=fe.rarity+fe.mutation;K.userData.signature!==Ee&&(x.nests[We].g.remove(K),K=x.egg(x.nests[We].g,Le[We].color,.8,fe.rarity),x.mutate(K,fe.mutation),K.userData.signature=Ee,K.position.set((X-1)*.85,.2,X===1?.42:0),x.nests[We].eggs[X]=K),K.visible=a.nestEggs[We][X].availableAt<=a.time,K.rotation.y=a.time*.6,K.position.y=.2+Math.sin(a.time*2+We+X)*.04}),a.carrying===We&&(pn.g.visible=!0,x.zoneGroups[We].visible=!0)}x.base.visible=he.z>-88;for(let We of x.penContent.userData.actors||[])We.egg?We.g.rotation.z=Math.sin(a.time*4+We.baseX)*.06:(x.animateCreature(We,a.time+We.baseX,.1),We.g.position.y+=.12,We.g.position.x=We.baseX+Math.sin(a.time*.6+We.baseZ)*.16,We.g.position.z=We.baseZ+Math.cos(a.time*.45+We.baseX)*.12,We.g.rotation.y=Math.sin(a.time*.35+We.baseX)*.7);let At=Math.atan2(Math.sin(P-N),Math.cos(P-N));N+=At*Math.min(1,w*5),S+=(M-S)*Math.min(1,w*8);let js=re.clientWidth/re.clientHeight>2,si=js?10:13.5,fs=Math.cos(S)*si,Qs=Math.cos(N)*fs,Ka=Math.sin(N)*fs,ja=new G(he.x+Ka,1.05+Math.sin(S)*si+he.y*.25,he.z+Qs);p.position.lerp(ja,Math.min(1,w*9)),p.lookAt(he.x-Math.sin(N)*3.3,1.05,he.z-Math.cos(N)*3.3);let Qa=new Ze(Le[vt].sky);f.background.lerp(Qa,Math.min(1,w*.8)),f.fog.color.copy(f.background);let er=f.userData.sun;er.position.set(he.x-10,20,he.z+13),er.target.position.set(he.x,0,he.z),x.animate(w,a.mode==="train"?a.time:a.time*.3),me!==vt&&(me=vt,he.z<0&&E(`${vt+1}/${Le.length} \xB7 ${Le[vt].name}`))}function Z(){let w=a.save,J=a.player,xe=a.zone(),he=[w.training,w.upgrades.boots,w.upgrades.gloves,w.companionId].join(":");x&&he!==ie&&(ie=he,Le.forEach((vt,At)=>x.setTrainingPlaque(At,a.trainingAdvice(At)))),we("eggJuiceCount").textContent=w.supplies.juice,we("eggShieldCount").textContent=w.supplies.shield,we("eggJuice").disabled=!!C||a.mode!=="run"||!w.supplies.juice||a.energy>=a.maxEnergy()-1,we("eggCoins").textContent=w.coins.toLocaleString("pt-BR"),we("eggSpeed").textContent=Oe(a.speed()),we("eggLevel").textContent=w.training,we("eggLevelMax").textContent=ti;let $=Math.round(a.energy/a.maxEnergy()*100);we("eggEnergyFill").style.width=$+"%",we("eggEnergyMeter").setAttribute("aria-valuenow",$),we("eggEnergyMeter").classList.toggle("low",$<25),we("eggShield").hidden=!w.supplies.shield,we("eggJuice").hidden=!w.supplies.juice,we("eggWorldIndex").textContent=a.inBase()?"BASE SEGURA":`${xe+1} / ${Le.length}`,we("eggWorldName").textContent=a.inBase()?"Seu curral":Le[xe].name;let ue=a.interaction();we("eggInteract").textContent=r?"Voltar ao meu curral":ue.label,we("eggInteract").disabled=!r&&["walk","return","wait"].includes(ue.type),we("eggTraining").hidden=a.mode!=="train";let tt=Math.ceil(Math.max(0,(a.trainTarget()-w.trainXP)/(1+w.upgrades.coach*.25)));we("eggTrainText").textContent=String(Math.floor(tt/60)).padStart(2,"0")+":"+String(tt%60).padStart(2,"0"),we("eggTrainText").setAttribute("aria-label",`${tt} segundos para ganhar 0,35 de velocidade`),we("eggTrainFill").style.strokeDashoffset=String(100-Math.min(1,w.trainXP/a.trainTarget())*100),we("eggTarget").parentElement.hidden=a.mode==="train";let st=bn.map((vt,At)=>({i:At,d:dn(J,vt)})).filter(vt=>a.availableAt[vt.i]<=a.time).sort((vt,At)=>vt.d-At.d)[0],Bt=a.carrying!==null?fn:st?bn[st.i]:null;we("eggTarget").textContent=a.mode==="train"?`Treino ${w.training}/${ti}`:a.carrying!==null?`Curral \xB7 ${Math.ceil(dn(J,fn))} m`:st?`Ovo \xB7 ${Math.ceil(st.d)} m`:"Ninhos renovando",we("eggBearing").hidden=!Bt||a.mode==="train",Bt&&(we("eggBearing").style.transform=`rotate(${Math.atan2(Bt.x-J.x,-(Bt.z-J.z))+N}rad)`);let Dt=we("eggChase");if(Dt.hidden=a.carrying===null,a.carrying!==null){let vt=a.inBase(),At=Math.max(0,Math.round(dn(J,a.guardians[a.carrying])));Dt.classList.toggle("safe",vt),Dt.classList.toggle("urgent",!vt&&At<10),Dt.textContent=vt?"\u2713 Ovo seguro":`! Perseguidor \xB7 ${At} m`,Dt.setAttribute("aria-label",vt?"Voc\xEA est\xE1 seguro. Guarde o ovo no curral.":`Perseguidor a ${At} metros`)}}function ge(w){y=requestAnimationFrame(ge);let J=Math.min(.05,Math.max(0,(w-m)/1e3));if(m=w,!(!h||!u)){if(!C&&!document.hidden){let xe=k();a.mode==="train"&&Math.hypot(xe.x,xe.z)>.2&&a.interact(),window.BoxEggCloud?.frozen||a.update(J,xe),j(),q(J,xe),R+=J,R>2&&(I(),R=0)}u.render(f,p),Ge(w),d+=J,d>.1&&(Z(),d=0),we("eggToast").textContent&&w>U&&(we("eggToast").textContent="")}}function be(){if(C)return;if(r){r=null,te="",T(),E("Voc\xEA voltou ao seu curral.");return}let w=a.interact();w==="corral"&&Ce("corral"),w==="nest"&&Ce("nest"),j(),Z(),C||re.focus()}function le(){return`<ol class="egg-help-list"><li><strong>Siga a pista.</strong> Os ${Le.length} mundos est\xE3o conectados. N\xE3o h\xE1 troca de tela. Os donos ficam mais r\xE1pidos a cada mundo.</li><li><strong>Escolha seu ovo.</strong> Cada ninho tem tr\xEAs ovos que se renovam a cada 3\u20134 minutos de jogo ativo. As muta\xE7\xF5es dourada, arco-\xEDris e c\xF3smica aumentam o valor em 1,5\xD7, 2\xD7 e 3\xD7. Aproxime-se, toque em \u201CEscolher ovo\u201D ou aperte E e escolha um. Comum vale 1\xD7, raro 3\xD7, \xE9pico 5\xD7 lend\xE1rio 8\xD7 e secreto 12\xD7; lend\xE1rios e secretos aparecem a partir da pista 7. A c\xE2mera vira para o curral; continue em frente para voltar.</li><li><strong>Fuja!</strong> Mova pelo controle ou WASD/setas. Use Espa\xE7o/Pular para saltar obst\xE1culos e Shift/Disparar para correr mais r\xE1pido. O f\xF4lego recarrega sozinho.</li><li><strong>Guarde no curral.</strong> Na base, v\xE1 at\xE9 o cercado e toque em \u201CGuardar ovo\u201D. Ele choca em ${a.hatchTime()} s de jogo ativo. O dono n\xE3o entra na base.</li><li><strong>Venda e melhore.</strong> As criaturas geram integros que entram automaticamente no saldo enquanto voc\xEA joga. O valor aparece sobre elas; voc\xEA tamb\xE9m pode vend\xEA-las no curral. Escolha uma como companheira para ganhar uma habilidade. Compre melhorias ou entre na esteira para treinar a velocidade. Cada barra completa aumenta o n\xEDvel, at\xE9 ${ti}.</li><li><strong>Confira a plaqueta do ovo.</strong> Ela mostra o treino recomendado e quantos n\xEDveis faltam. O c\xE1lculo considera seus t\xEAnis e luvas, com 10% de vantagem de velocidade carregando o ovo sem disparar. \xC9 uma refer\xEAncia: desvie dos obst\xE1culos durante a fuga.</li><li><strong>Olhe ao redor.</strong> Arraste a \xE1rea do cen\xE1rio com o dedo ou mouse para girar e inclinar a c\xE2mera. Use \u201CAtr\xE1s\u201D ou C para olhar para tr\xE1s; \u201CCentrar\u201D ou R volta \xE0 vista de corrida. O direcional acompanha a c\xE2mera: para cima vai \xE0 frente da tela; esquerda e direita seguem a vis\xE3o atual.</li><li><strong>Dispute com amigos.</strong> Na corrida online, chegue perto de outro corredor e toque na m\xE3o \u201CEmpurrar\u201D ou aperte F. O empurr\xE3o recarrega em 3 segundos; quem recebeu fica protegido por um instante. A base \xE9 uma \xE1rea segura.</li><li><strong>Prepare sua mochila.</strong> O escudo protege automaticamente de uma captura. Toque em Suco para recuperar o f\xF4lego. Compre na base, com integros ganhas no jogo.</li></ol><p class="egg-muted">${l?"integros, criaturas, ovos no curral e treino ficam salvos neste navegador. Uma corrida em andamento recome\xE7a na base ao recarregar.":"O navegador n\xE3o permitiu salvar. O progresso ficar\xE1 apenas nesta sess\xE3o."} No portal, consulte Amigos e perfil para ver a situa\xE7\xE3o do salvamento online. O jogo pausa ao abrir um painel, trocar de jogo ou sair da tela. N\xE3o h\xE1 dinheiro real.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Jogar</button></div><button class="egg-reset" data-egg-action="resetAsk">Apagar progresso deste jogo</button>`}function Me(){if(!C)return;let w=a.save,J="",xe="PEGUE O OVO",he="";if(C==="shop")J="Loja do corredor",xe=`${Object.keys(ni).length+Object.keys(Ei).length+Object.keys(Gt).length+Object.keys(ii).length} ITENS \xB7 INTEGROS DO JOGO`,he=`<div class="egg-shop-balance">\u25CF ${w.coins.toLocaleString("pt-BR")} integros dispon\xEDveis</div><div class="egg-shop-tabs"><button data-shop-tab="gear" class="${b==="gear"?"selected":""}">Melhorias permanentes</button><button data-shop-tab="supplies" class="${b==="supplies"?"selected":""}">Mochila \xB7 ${w.supplies.shield+w.supplies.juice}</button><button data-shop-tab="accessories" class="${b==="accessories"?"selected":""}">Acess\xF3rios \xB7 ${w.accessories.length}/${Object.keys(Gt).length}</button><button data-shop-tab="decor" class="${b==="decor"?"selected":""}">Decora\xE7\xF5es</button></div>${a.inBase()?"":"<p>Volte \xE0 base para comprar.</p>"}<div class="egg-sheet-grid">`,b==="gear"?he+=Object.entries(ni).map(([$,ue])=>{let tt=w.upgrades[$]>=ue.max,st=a.price($);return`<article class="egg-upgrade"><img class="egg-item-icon" src="${ee[$]}" alt="${ue.name}"><small>N\xCDVEL ${w.upgrades[$]}/${ue.max}</small><h3>${ue.name}</h3><p>${ue.desc}</p><div class="egg-level-dots" aria-label="${w.upgrades[$]} de ${ue.max} n\xEDveis">${Array.from({length:ue.max},(Bt,Dt)=>`<i class="${Dt<w.upgrades[$]?"owned":""}"></i>`).join("")}</div><button class="egg-primary" data-buy="${$}" ${tt||w.coins<st||!a.inBase()?"disabled":""}>${tt?"No m\xE1ximo":st+" integros"}</button></article>`}).join(""):b==="supplies"?he+=Object.entries(Ei).map(([$,ue])=>`<article class="egg-upgrade"><img class="egg-item-icon" src="${ee[$]}" alt="${ue.name}"><small>NA MOCHILA: ${w.supplies[$]}/${ue.max}</small><h3>${ue.name}</h3><p>${ue.desc}</p><button class="egg-primary" data-buy="${$}" ${w.supplies[$]>=ue.max||w.coins<ue.price||!a.inBase()?"disabled":""}>${w.supplies[$]>=ue.max?"Mochila cheia":ue.price.toLocaleString("pt-BR")+" integros"}</button></article>`).join(""):b==="decor"?he+=Object.entries(ii).map(([$,ue])=>`<article class="egg-upgrade"><div class="egg-decor-preview" style="--decor:#${ue.color.toString(16)};--roof:#${ue.roof.toString(16)}">\u2302</div><h3>${ue.name}</h3><p>Piso, cobertura e plantas do curral.</p><button class="egg-primary" data-buy="${$}" ${!a.inBase()||!w.decorations.includes($)&&w.coins<ue.price?"disabled":""}>${w.decoration===$?"Selecionado":w.decorations.includes($)?"Decorar":ue.price+" integros"}</button></article>`).join(""):he+=Object.entries(Gt).map(([$,ue])=>{let tt=w.accessories.includes($),st=w.equipped[ue.slot]===$;return`<article class="egg-upgrade"><img class="egg-item-icon" src="${ee[$]}" alt="${ue.name}"><small>${st?"EQUIPADO":tt?"NA SUA COLE\xC7\xC3O":ue.price>=75e3?"M\xCDTICO":ue.price>=2e4?"LEND\xC1RIO":ue.price>=5e3?"\xC9PICO":"COLE\xC7\xC3O ESPECIAL"}</small><h3>${ue.name}</h3><p>${ue.desc} N\xE3o altera a velocidade.</p><button class="egg-primary" ${tt?`data-equip="${$}"`:`data-buy="${$}"`} ${!tt&&(w.coins<ue.price||!a.inBase())?"disabled":""}>${tt?st?"Guardar":"Equipar":ue.price.toLocaleString("pt-BR")+" integros"}</button></article>`}).join(""),he+="</div>";else if(C==="tracks")J=`As ${Le.length} pistas`,xe="UMA CORRIDA CONT\xCDNUA",he='<p>Os 13 mundos se conectam na mesma pista. Siga em frente para explorar. Cada ovo mostra seu treino recomendado e quantos n\xEDveis faltam. A refer\xEAncia considera seus t\xEAnis e luvas: correr com o ovo 10% mais r\xE1pido que o dono, sem disparar. Desvie dos obst\xE1culos.</p><div class="egg-pet-grid">'+Le.map(($,ue)=>`<article class="egg-pet-card egg-track-card" style="--track-color:#${$.color.toString(16)}"><small>PISTA ${ue+1} \xB7 ${w.visited[ue]?"VISITADA":"PARA EXPLORAR"}</small><img src="${ee[ue]}" alt="${$.creature}"><strong>${$.name}</strong><p>${$.creature}</p><small>${_c[ue]} \xB7 ${["Persegui\xE7\xE3o direta","Antecipa a dire\xE7\xE3o","Corrida em zigue-zague"][ue%3]}${ue>=3?" + arrancadas":""}</small><small>Dono: ${Oe(us(ue))} de velocidade</small><div class="egg-track-training ${a.trainingAdvice(ue).ready?"ready":""}"><strong>Treino recomendado: ${a.recommendedTraining(ue)}</strong><span>${a.trainingAdvice(ue).ready?"N\xEDvel alcan\xE7ado":`Faltam ${a.trainingAdvice(ue).remaining} n\xEDveis`}</span></div><b>${a.saleValue(ue).toLocaleString("pt-BR")} integros</b><small>${w.seen[ue]?"\u2713 Criatura descoberta":"Leve o ovo ao curral"}</small></article>`).join("")+"</div>";else if(C==="corral")J="Seu curral",xe=`${w.creatures.length+w.eggs.length}/${a.capacity()} ESPA\xC7OS \xB7 ${w.seen.filter(Boolean).length}/${Le.length} CRIATURAS DESCOBERTAS`,he=`<div class="egg-income"><strong>Produ\xE7\xE3o autom\xE1tica</strong><span>${(a.incomeRate()*60).toLocaleString("pt-BR",{maximumFractionDigits:1})} integros / min de jogo ativo</span><small>Os ganhos entram direto no saldo. Total produzido: ${Math.floor(w.incomeEarned).toLocaleString("pt-BR")} integros.</small></div><p>Companheiro: ${Za(a.companion())}</p><p>Os ovos chocam durante o jogo ativo. ${a.inBase()?"Venda criaturas para ganhar integros.":"Volte \xE0 base para vender criaturas."}</p>`,!w.creatures.length&&!w.eggs.length?he+='<div class="egg-empty"><strong>Seu primeiro ovo est\xE1 esperando!</strong><p>Siga a pista, pegue um ovo e traga at\xE9 o cercado.</p></div>':he+='<div class="egg-pet-grid">'+w.eggs.map($=>`<article class="egg-pet-card"><img src="${ee["egg-"+$.rarity]}" alt="Ovo ${Mt[$.rarity].name}"><strong>Ovo de ${Le[$.world].creature}</strong><small>${Mt[$.rarity].name} \xB7 ${a.saleValue($.world,$.rarity,$.mutation)} integros</small><small>Choca em ${Math.ceil($.remaining)} s de jogo</small><button class="egg-secondary" data-egg-action="resume">Continuar incubando</button></article>`).join("")+w.creatures.map($=>`<article class="egg-pet-card"><img src="${ee[$.world]}" alt="${Le[$.world].creature}"><strong>${Le[$.world].creature}</strong><small>${Mt[$.rarity].name} \xB7 ${kn[$.mutation].name}</small><small>Valor: ${a.saleValue($.world,$.rarity,$.mutation)} integros</small><small>${Za($)}</small><button class="egg-secondary" data-pet="${$.uid}" ${a.inBase()?"":"disabled"}>${w.companionId===$.uid?"Guardar companheiro":"Acompanhar"}</button><button class="egg-primary" data-sell="${$.id}" ${a.inBase()?"":"disabled"}>Vender por ${a.saleValue($.world,$.rarity,$.mutation)}</button></article>`).join("")+"</div>";else if(C==="nest"){let $=a.interaction().world;$===void 0?(J="Ninho distante",he="<p>Aproxime-se de um ninho para escolher.</p>"):(J="Escolha um ovo",xe=Le[$].name.toUpperCase(),he=`<p>Leve um ovo por vez ao curral. Os outros continuam no ninho. Treino recomendado: <strong>${a.recommendedTraining($)}</strong>.</p><div class="egg-nest-grid">${a.nestEggs[$].map(ue=>{let tt=Mt[ue.rarity],st=ue.availableAt<=a.time;return`<article class="egg-pet-card" style="border-top:5px solid #${tt.color.toString(16)}"><img src="${ee["egg-"+ue.rarity]}" alt="Ovo ${tt.name}"><strong>${tt.name} \xB7 ${kn[ue.mutation].name}</strong><small>Valor da criatura \xB7 ${tt.mult}\xD7</small><b>${a.saleValue($,ue.rarity,ue.mutation)} integros</b><button class="egg-primary" data-steal="${ue.slot}" ${st?"":"disabled"}>${st?"Pegar e correr":`Volta em ${Math.ceil(ue.availableAt-a.time)} s de jogo`}</button></article>`}).join("")}</div>`)}else if(C==="missions")J="Miss\xF5es e cole\xE7\xE3o",xe="CONQUISTAS \xB7 INTEGROS",he=`<div class="egg-income"><strong>Expedi\xE7\xE3o do dia</strong><span>Entregue 3 ovos: ${Math.min(3,w.daily.delivered)}/3 \xB7 200 integros</span><button class="egg-primary" data-daily ${w.daily.claimed||w.daily.delivered<3?"disabled":""}>${w.daily.claimed?"Recompensa recebida":"Receber"}</button></div><div class="egg-sheet-grid">${Ya.map($=>`<article class="egg-upgrade"><h3>${$.name}</h3><progress value="${a.missionProgress($)}" max="${$.target}"></progress><p>${a.missionProgress($)}/${$.target} \xB7 ${$.reward} integros</p><button class="egg-primary" data-mission="${$.id}" ${w.claimed.includes($.id)||a.missionProgress($)<$.target?"disabled":""}>${w.claimed.includes($.id)?"Conclu\xEDda":"Receber"}</button></article>`).join("")}</div><h3>\xC1lbum \xB7 ${w.album.length} combina\xE7\xF5es descobertas</h3><div class="egg-album">${w.album.map($=>{let[ue,tt,st]=$.split(":");return Le[ue]?`<span>${Le[ue].creature} \xB7 ${Mt[tt].name} \xB7 ${kn[st].name}</span>`:""}).join("")||"Traga ovos e descubra novas combina\xE7\xF5es!"}</div>`;else if(C==="friends")J="Aventura com amigos",xe="SALAS \xB7 CORRIDA \xB7 VISITAS \xB7 TROCAS",he='<div id="eggOnlineContent"></div>';else if(C==="settings"){J="Menu da aventura",xe="PEGUE O OVO";let $=a.trainingAdvice(a.carrying??a.zone());he=`<nav class="egg-menu-grid" aria-label="Atalhos do jogo">${[["corral","home","Curral",`${w.creatures.length+w.eggs.length}/${a.capacity()} espa\xE7os`],["missions","flag","Miss\xF5es","Conquistas e cole\xE7\xE3o"],["friends","friends","Amigos","Corridas, visitas e trocas"],["shop","shop","Loja","Melhorias e acess\xF3rios"],["tracks","compass","Pistas",`${Le.length} mundos`],["help","help","Como jogar","Controles e dicas"]].map(([tt,st,Bt,Dt])=>`<button data-egg-action="${tt}">${uh[st]}<strong>${Bt}</strong><small>${Dt}</small></button>`).join("")}</nav><div class="egg-menu-detail"><strong>${a.inBase()?"Seu curral":Le[a.zone()].name}</strong><p>${a.carrying!==null?`Ovo ${Mt[a.carriedEgg.rarity].name} \xB7 ${a.saleValue(a.carrying,a.carriedEgg.rarity,a.carriedEgg.mutation)} integros. Leve ao curral!`:a.mode==="train"?"A esteira aumenta sua velocidade permanentemente.":"Aproxime-se de um ninho, escolha um ovo e leve ao curral."}</p><p>Treino recomendado: <b>${$.level}</b> \xB7 ${$.ready?"N\xEDvel alcan\xE7ado":`faltam ${$.remaining} n\xEDveis`}.</p></div><div class="egg-settings-stats"><span><b>${Oe(a.speed())}</b> velocidade</span><span><b>${w.training}/${ti}</b> treino</span><span><b>${w.delivered}</b> ovos entregues</span><span><b>${w.coins.toLocaleString("pt-BR")}</b> integros</span></div><div class="egg-settings-buttons"><button class="egg-secondary" data-control="behind">Olhar para tr\xE1s</button><button class="egg-secondary" data-control="center">Centrar c\xE2mera</button><button class="egg-secondary" data-control="fullscreen">Tela cheia</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div><p class="egg-muted">Mova pelo direcional ou WASD/setas. Arraste o cen\xE1rio para olhar. Espa\xE7o: pular \xB7 Shift: disparar \xB7 E: a\xE7\xE3o \xB7 C: atr\xE1s \xB7 R: centrar \xB7 F: empurrar na corrida online \xB7 Esc: pausa.</p><button class="egg-primary" data-egg-action="resume">Voltar ao jogo</button>`}else C==="help"?(J="Como jogar",he=le()):C==="reset"?(J="Apagar este progresso?",he='<p>Isso zera as integros, criaturas, ovos, treino e melhorias do Pegue o Ovo.</p><div class="egg-modal-actions"><button class="egg-secondary" data-egg-action="help">Manter meu progresso</button><button class="egg-primary" data-egg-action="resetConfirm">Apagar e recome\xE7ar</button></div>'):(J="Uma pausa na aventura",he=`<p>Seu jogo est\xE1 pausado. ${w.seen.filter(Boolean).length} de ${Le.length} criaturas descobertas \xB7 ${w.delivered} ovos entregues.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Continuar</button><button class="egg-secondary" data-egg-action="help">Como jogar</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div>`);we("eggSheetTitle").textContent=J,we("eggSheetTag").textContent=xe,we("eggSheetBody").innerHTML=he,ze(),we("eggSheetBody").querySelectorAll("[data-shop-tab]").forEach($=>$.onclick=()=>{b=$.dataset.shopTab,Me()}),we("eggSheetBody").querySelectorAll("[data-steal]").forEach($=>$.onclick=()=>{a.steal(+$.dataset.steal)&&(ve(),j(),Z())}),we("eggSheetBody").querySelectorAll("[data-equip]").forEach($=>$.onclick=()=>{a.equip($.dataset.equip)&&(j(),Me())}),we("eggSheetBody").querySelectorAll("[data-control]").forEach($=>$.onclick=()=>{let ue=$.dataset.control;ve(),ue==="behind"&&H(),ue==="center"&&ae(),ue==="fullscreen"&&we("eggFullscreen").click()}),we("eggSheetBody").querySelectorAll("[data-buy]").forEach($=>$.onclick=()=>{a.buy($.dataset.buy)&&(j(),Me(),Z())}),we("eggSheetBody").querySelectorAll("[data-sell]").forEach($=>$.onclick=()=>{a.sell(+$.dataset.sell)&&(j(),Me(),Z())}),we("eggSheetBody").querySelectorAll("[data-egg-action]").forEach($=>$.onclick=()=>{let ue=$.dataset.eggAction;ue==="resume"&&ve(),["help","shop","corral","tracks","missions","friends"].includes(ue)&&Ce(ue),ue==="exit"&&(z(),i()),ue==="resetAsk"&&Ce("reset"),ue==="resetConfirm"&&(a=new ds(vc()),V=0,ae(),N=0,S=.52,et=0,te="force",ie="",se=-1,T(),I(),ve(),E("Nova aventura! Siga a pista para encontrar o primeiro ovo."))})}function ze(){let w=we("eggSheetBody"),J=(xe,he)=>w.querySelectorAll(xe).forEach($=>$.onclick=()=>{he($),j(),Me(),Z()});J("[data-pet]",xe=>a.equipPet(xe.dataset.pet)),J("[data-mission]",xe=>a.claimMission(xe.dataset.mission)),J("[data-daily]",()=>a.claimDaily()),C==="friends"&&(window.BoxEggCloud?window.BoxEggCloud.render(we("eggOnlineContent")):we("eggOnlineContent").innerHTML='<p>O progresso fica neste navegador. As salas, visitas, trocas e salvamento por perfil est\xE3o no portal da fam\xEDlia.</p><a class="egg-primary" href="https://www.institutointegro.com.br/integro-box/" target="_blank" rel="noopener">Abrir Integro Box no portal</a>')}function Ce(w){A(),C=w,we("eggSheet").hidden=!1,Me(),we("eggCloseSheet").focus(),I()}function ve(){C=null,we("eggSheet").hidden=!0,A(),m=performance.now(),re.focus()}function qe(){oe.hidden=!1,h=!0,u?(F(),m=performance.now()):g(),Z(),re.focus(),window.scrollTo(0,0)}function z(){D(),I(),h=!1,oe.hidden=!0,C=null,we("eggSheet").hidden=!0,A()}we("eggRoute").onclick=()=>Ce("tracks"),we("eggInteract").onclick=be,we("eggJump").onclick=()=>{C||a.jump(),re.focus()},we("eggCamera").onclick=()=>{H(),re.focus()},we("eggSettings").onclick=()=>Ce("settings"),we("eggPause").onclick=()=>Ce("pause"),we("eggJuice").onclick=()=>{!C&&a.useJuice()&&(j(),Z(),re.focus())},we("eggCloseSheet").onclick=ve,we("eggReload").onclick=()=>location.reload(),we("eggFullscreen").onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await oe.requestFullscreen();try{await screen.orientation?.lock("landscape")}catch{}}}catch{E("Gire o celular para o modo paisagem para ampliar o jogo.")}};let pe=we("eggJoystick");function ye(w){let J=pe.getBoundingClientRect(),xe=J.width*.32,he=w.clientX-J.left-J.width/2,$=w.clientY-J.top-J.height/2,ue=Math.hypot(he,$),tt=ue>xe?xe/ue:1;Pe={x:he*tt/xe,z:$*tt/xe},we("eggStick").style.transform=`translate(${he*tt}px,${$*tt}px)`}pe.addEventListener("pointerdown",w=>{C||(w.preventDefault(),_e=w.pointerId,pe.setPointerCapture(w.pointerId),ye(w))}),pe.addEventListener("pointermove",w=>{w.pointerId===_e&&ye(w)});let Re=w=>{w.pointerId===_e&&(_e=null,Pe={x:0,z:0},we("eggStick").style.transform="translate(0px,0px)")};for(let w of["pointerup","pointercancel","lostpointercapture"])pe.addEventListener(w,Re);let de=we("eggSprint");de.addEventListener("pointerdown",w=>{C||(w.preventDefault(),Se=w.pointerId,de.setPointerCapture(w.pointerId),Ve=!0,de.classList.add("held"))});let ce=w=>{w.pointerId===Se&&(Ve=!1,Se=null,de.classList.remove("held"))};for(let w of["pointerup","pointercancel","lostpointercapture"])de.addEventListener(w,ce);return document.addEventListener("keydown",w=>{if(!h||w.target?.closest("input,select,textarea,[contenteditable=true],#boxOnline"))return;let J=w.key.toLowerCase();if(J==="escape"){w.preventDefault(),C?ve():Ce("pause");return}if(C){if(J==="tab"){let xe=[...we("eggSheet").querySelectorAll("button:not([disabled])")];w.shiftKey&&document.activeElement===xe[0]?(w.preventDefault(),xe.at(-1)?.focus()):!w.shiftKey&&document.activeElement===xe.at(-1)&&(w.preventDefault(),xe[0]?.focus())}return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","c","r","f"].includes(J)&&(w.preventDefault(),$e.add(J),w.repeat||(J===" "&&a.jump(),J==="e"&&be(),J==="c"&&H(),J==="r"&&ae(),J==="f"&&window.BoxEggPush?.push()))}),document.addEventListener("keyup",w=>$e.delete(w.key.toLowerCase())),window.addEventListener("blur",A),document.addEventListener("visibilitychange",()=>{document.hidden&&h&&(I(),Ce("pause"))}),window.addEventListener("pagehide",I),window.BoxEggRuntime={save:()=>(a.captureNests(),JSON.parse(JSON.stringify(a.save))),apply:w=>{D(),a=new ds(w),r=null,te="",T(),Z();try{t.setItem(yc,JSON.stringify(a.save))}catch{}C&&Me()},active:()=>h,playing:()=>h&&!C&&!document.hidden,frozen:()=>!!window.BoxEggCloud?.frozen,push:w=>!h||C||document.hidden||window.BoxEggCloud?.frozen?!1:a.push(w),pushGesture:()=>{Ke=performance.now()+260},pushEffect:()=>{x?.burst(new G(a.player.x,a.player.y+1,a.player.z),16768394)},inBase:()=>a.inBase()&&a.carrying===null,visit:w=>{D(),r=w,a.player.x=0,a.player.z=15,te="",T(),ve(),E("Visitando o curral do colega. Toque em Voltar para sair.")},message:E,openFriends:()=>Ce("friends"),pause:()=>Ce("pause"),raceMode:w=>{a.raceMode=w,w||a.clearPush()},raceStart:()=>{a.clearPush(),r=null,a.carriedEgg&&(a.nestEggs[a.carrying][a.carriedEgg.slot].availableAt=a.time+5,a.guardians[a.carrying].state="return"),a.mode="run",a.carrying=null,a.carriedEgg=null,a.player.x=0,a.player.z=15,a.player.y=0,A(),ve()},stop:z},window.IntegroOvo={getState:()=>({...a.snapshot(),active:h,paused:!!C,sheet:C,thumbnailCount:Object.keys(ee).length,visibleNestEggs:x?.nests.map(w=>w.eggs.filter(J=>J.visible).length),equippedModels:x?.player.wear.children.length,plaques:x?.nests.map(w=>({...w.plaque.sprite.userData.advice})),cameraYaw:P,cameraActualYaw:N,cameraForward:p?p.getWorldDirection(new G).toArray():null,cameraPitch:M,movementYaw:V,webgl:!!u}),getScreenPoints:()=>p?[{name:"curral",...fn},{name:"esteira",...En},...bn.map((w,J)=>({name:"ninho"+J,...w}))].map(w=>{let J=new G(w.x,1,w.z).project(p),xe=re.getBoundingClientRect();return{name:w.name,x:xe.left+(J.x+1)*xe.width/2,y:xe.top+(1-J.y)*xe.height/2}}):[]},{show:qe,hide:z,help:()=>Ce("help"),get active(){return h}}}window.BoxEgg={mountEggGame:dh,worldNames:Le.map(i=>i.name),petName:i=>`${Le[i.world]?.creature||"Criatura"} \xB7 ${Mt[i.rarity]?.name||"Comum"} \xB7 ${kn[i.mutation]?.name||"Natural"}`};})();
